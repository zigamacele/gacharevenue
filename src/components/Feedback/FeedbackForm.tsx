import supabase from '@/config/supabase'
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
import { formSchema } from '@/utils/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

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
        .from('feedback')
        .insert({ name: values.name, content: values.content })

      form.reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <section className='w-full rounded-lg border border-neutral-700 bg-neutral-900 px-6 py-4 sm:w-[35em]'>
      <Form {...form}>
        <form
          onSubmit={(event) => void form.handleSubmit(onSubmit)(event)}
          className='space-y-4'
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
          <Button type='submit' className='bg-neutral-950/40'>
            Submit
          </Button>
        </form>
      </Form>
    </section>
  )
}

export default FeedbackForm
