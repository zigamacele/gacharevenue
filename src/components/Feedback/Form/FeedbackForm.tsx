import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/lib/shadcn/ui/button'
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
import { Textarea } from '@/lib/shadcn/ui/textarea'

import supabase from '@/config/supabase'
import { FEEDBACK_TABLE } from '@/constants/feedback'
import { formSchema } from '@/utils/validation'

const FeedbackForm: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      content: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await supabase
        .from(FEEDBACK_TABLE)
        .insert({ name: values.name, content: values.content })

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
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Anonymous' {...field} />
              </FormControl>
              <FormDescription>Name is optional.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='content'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className='bg-neutral-800'
                  placeholder='Message..'
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Enter a message that you wish to be displayed publicly.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full bg-neutral-950'>
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default FeedbackForm
