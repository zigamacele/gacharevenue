'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { CalendarIcon } from '@radix-ui/react-icons'
import { format } from 'date-fns'
import { Trash2 } from 'lucide-react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/lib/shadcn/ui/button'
import { Calendar } from '@/lib/shadcn/ui/calendar'
import { Checkbox } from '@/lib/shadcn/ui/checkbox'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/lib/shadcn/ui/form'
import { Input } from '@/lib/shadcn/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/lib/shadcn/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/lib/shadcn/ui/select'
import { Separator } from '@/lib/shadcn/ui/separator'
import { cn } from '@/lib/shadcn/utils'

import supabase from '@/config/supabase.ts'
import { FEEDBACK_TABLE } from '@/constants/feedback.ts'
import { regions } from '@/constants/regions'
import { getRegion } from '@/utils/region'

import { FeedbackType } from '@/types/feedback.ts'

const FormSchema = z.object({
  releaseDate: z.date({
    required_error: 'Release date is required.',
  }),
  eosDate: z.date().optional(),
  gameName: z.string().min(2, {
    message: 'Game name must be at least 2 characters.',
  }),
  developer: z.string().min(2, {
    message: 'Developer name must be at least 2 characters.',
  }),
  publisher: z.string().min(2, {
    message: 'Publisher name must be at least 2 characters.',
  }),
  pcClient: z.boolean().default(false),
  regions: z.array(
    z.object({
      name: z.string().min(2, {
        message: 'Regional name must be at least 2 characters.',
      }),
      region: z.string().min(2, {
        message: 'Region is required.',
      }),
    }),
  ),
})

const GameSuggestionForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      regions: [{ name: '', region: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    name: 'regions',
    control: form.control,
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      await supabase.from(FEEDBACK_TABLE).insert({
        name: data.gameName,
        content: JSON.stringify(data, null, 2),
        type: FeedbackType.SUGGESTIONS,
      })

      form.reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(event) => void form.handleSubmit(onSubmit)(event)}
        className='space-y-4 px-2'
      >
        <FormField
          control={form.control}
          name='gameName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Arknights' {...field} />
              </FormControl>
              <FormDescription>Enter games english name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex items-center gap-4'>
          <FormField
            control={form.control}
            name='developer'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Developer</FormLabel>
                <FormControl>
                  <Input placeholder='Hypergryph' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='publisher'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormLabel>Publisher</FormLabel>
                <FormControl>
                  <Input placeholder='Yostar' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex items-start gap-4 pt-1.5'>
          <FormField
            control={form.control}
            name='releaseDate'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col'>
                <FormLabel>Release date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        className={cn(
                          'pl-3 text-left font-normal',
                          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                          !field.value && 'text-neutral-500',
                        )}
                      >
                        {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className='w-auto bg-neutral-800 p-0'
                    align='start'
                  >
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='eosDate'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col'>
                <FormLabel>End of Service date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        className={cn(
                          'pl-3 text-left font-normal',
                          !field.value && 'text-neutral-500',
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent
                    className='w-auto bg-neutral-800 p-0'
                    align='start'
                  >
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>This field can be left empty.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='flex flex-col gap-3 pb-0.5'>
          <div className='space-y-3'>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col gap-0.5'>
                <h3 className='text-md font-medium'>Regions</h3>
                <p className='text-sm opacity-60'>
                  At least one region is required.
                </p>
              </div>
              <Button
                type='button'
                size='sm'
                className='mt-2'
                onClick={() => append({ name: '', region: '' })}
                disabled={fields.length >= regions.length}
              >
                Add Region
              </Button>
            </div>
            <Separator />
          </div>
          <div className='flex flex-col gap-1'>
            {fields.map((field, index) => (
              <div className='flex gap-4' key={field.id}>
                <FormField
                  control={form.control}
                  name={`regions.${index}.region`}
                  render={({ field }) => (
                    <FormItem>
                      {!index && <FormLabel>Region</FormLabel>}
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className='w-36 bg-neutral-800'>
                            <SelectValue placeholder='Select region' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {regions.map((region) => {
                            const regionDetails = getRegion(region)

                            return (
                              <SelectItem key={region} value={region}>
                                {regionDetails.text}
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  key={field.id}
                  name={`regions.${index}.name`}
                  render={({ field }) => (
                    <FormItem className='w-full'>
                      {!index && <FormLabel>Regional name</FormLabel>}
                      <FormControl>
                        <Input placeholder='明日方舟' {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {index > 0 && (
                  <Button
                    type='button'
                    className='bg-neutral-950'
                    onClick={() => remove(index)}
                  >
                    <Trash2 size={18} />
                  </Button>
                )}
              </div>
            ))}
          </div>
          <Separator />
        </div>
        <FormField
          control={form.control}
          name='pcClient'
          render={({ field }) => (
            <FormItem className='flex flex-row items-start space-x-3 space-y-0 rounded-md border border-neutral-500/60 bg-neutral-950 p-4 shadow'>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className='space-y-1.5 leading-none'>
                <FormLabel className='capitalize'>PC/Console client</FormLabel>
                <FormDescription>
                  Does this game have native PC/Console client?
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        <Button type='submit' className='w-full'>
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default GameSuggestionForm
