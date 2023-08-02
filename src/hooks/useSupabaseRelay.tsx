import config from '@/config/env'
import supabase from '@/config/supabase'
import useSupabaseStore from '@/stores/supabase-store'
import { QueryOutput } from '@/types/supabase'
import { useEffect } from 'react'

const useSupabaseRelay = () => {
  const { setTables, setLoading, setStorage } = useSupabaseStore()

  const getConfig = async () => {
    const localOutput: string[] = []
    const { data, error } = await supabase.from('config').select('table')

    if (data) {
      setTables(
        data.map((table: { table: string }) => {
          localOutput.push(`${table.table} ( * )`)
          return table.table
        }),
      )
    }
    if (error) {
      console.error(error)
    }

    return localOutput
  }

  const getGachaInformation = async (tables: string[]) => {
    const { data, error } = await supabase
      .from(config.database.GAMES_TABLE)
      .select(`*, ${tables.join(', ')}}`)
    if (data) {
      setStorage(data as unknown as QueryOutput[])
    }
    if (error) {
      console.error(error)
    }
  }

  const fetchData = async () => {
    setLoading(true)
    const tables = await getConfig()

    void getGachaInformation(tables)

    setLoading(false)
  }

  useEffect(() => {
    void fetchData()
  }, [])

  return { fetchData }
}

export default useSupabaseRelay
