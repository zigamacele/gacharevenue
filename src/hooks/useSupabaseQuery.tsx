import supabase from '@/config/supabase'
import { QueryOutput } from '@/types/supabase'
import { useEffect, useState } from 'react'

interface SupabaseQueryProps {
  mainTable: string
  otherTables?: string[]
}

const useSupabaseQuery = ({ mainTable, otherTables }: SupabaseQueryProps) => {
  const [output, setOutput] = useState<QueryOutput[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getOutput = async () => {
      setLoading(true)

      const { data, error } = await supabase
        .from(mainTable)
        .select(`* ${otherTables && `, ${otherTables.join(', ')}`}}`)

      if (data) {
        setOutput(data as unknown as QueryOutput[])
        setLoading(false)
      }

      if (error) {
        console.error(error)
      }
    }

    void getOutput()
  }, [])

  return { data: output, loading }
}

export default useSupabaseQuery
