import supabase from '@/config/supabase'
import { GameSchema, StatisticsSchema } from '@/types/supabase'
import { useEffect, useState } from 'react'

interface SupabaseQueryProps {
  mainTable: string
  otherTables?: string[]
  sorting?: { column: string; ascending: boolean }
}

export interface QueryOutput extends GameSchema, StatisticsSchema {
  game?: GameSchema
  previousMonth?: StatisticsSchema
}

const useSupabaseQuery = ({
  mainTable,
  otherTables,
  sorting,
}: SupabaseQueryProps) => {
  const [output, setOutput] = useState<QueryOutput[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getOutput = async () => {
      setLoading(true)

      let query = supabase
        .from(mainTable)
        .select(`* ${otherTables && `, ${otherTables.join(', ')}`}}`)

      if (sorting) {
        query = query.order(sorting.column, { ascending: sorting.ascending })
      }

      const { data, error } = await query

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
