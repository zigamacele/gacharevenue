import { useEffect, useState } from 'react'

import supabase from '@/config/supabase'
import { FEEDBACK_TABLE } from '@/constants/feedback'

import { FeedbackOutput } from '@/types/supabase'

const useFeedbackChanges = () => {
  const [output, setOutput] = useState<FeedbackOutput[]>([])
  const [loading, setLoading] = useState(false)

  const getOutput = async () => {
    setLoading(true)

    const { data, error } = await supabase
      .from(FEEDBACK_TABLE)
      .select('*')
      .order('created_at', { ascending: false })

    if (data) {
      setOutput(data as unknown as FeedbackOutput[])
      setLoading(false)
    }

    if (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    supabase
      .channel('feedback')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
        },
        () => {
          void getOutput()
        },
      )
      .subscribe()

    void getOutput()
  }, [])

  return { data: output, loading }
}

export default useFeedbackChanges
