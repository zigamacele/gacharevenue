import config from '@/config/env'
import supabase from '@/config/supabase'
import useBackgroundStore from '@/stores/background-store'
import useSupabaseStore from '@/stores/supabase-store'
import { ConfigData, QueryOutput } from '@/types/supabase'
import { useEffect } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

const useSupabaseRelay = () => {
  const { setTables, setLoading, setStorage } = useSupabaseStore()
  const { setBackground } = useBackgroundStore()
  const { showBoundary } = useErrorBoundary()

  const getConfig = async () => {
    const localOutput: string[] = []
    const { data, error } = await supabase.from('config').select().eq('id', 1)

    if (data) {
      const config = data[0] as ConfigData

      setBackground(config.background)
      setTables(config.tables)
      config.tables.forEach((table: string) => {
        localOutput.push(`${table} ( * )`)
      })
    }
    if (error) {
      showBoundary(error)
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
      showBoundary(error)
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
