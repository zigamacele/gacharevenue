import * as z from 'zod'

export const formSchema = z.object({
  name: z.string(),
  content: z.string().min(4, {
    message: 'Message needs to be atleast 4 characters long.',
  }),
})
