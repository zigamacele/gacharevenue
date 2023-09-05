import config from '@/config/env'
import supabase from '@/config/supabase'
import useBackgroundStore from '@/stores/background-store'
import useSupabaseStore from '@/stores/supabase-store'
import { ConfigData, QueryOutput } from '@/types/supabase'
import { SetAlerts } from '@/types/zustand'
import { generateRandomNumber } from '@/utils/globals'
import { useEffect } from 'react'
import { useErrorBoundary } from 'react-error-boundary'

const useSupabaseRelay = () => {
  const { setProperty } = useSupabaseStore()
  const { setBackground } = useBackgroundStore()
  const { showBoundary } = useErrorBoundary()

  const getConfig = async () => {
    const localOutput: string[] = []
    const { data, error } = await supabase.from('config').select().eq('id', 1)

    if (data) {
      const config = data[0] as ConfigData

      if (config.maintenance) {
        showBoundary('maintenance')
      }

      if (config.alerts) {
        const parsedAlerts: SetAlerts[] = config.alerts.map(
          (alert) => JSON.parse(alert) as SetAlerts,
        )
        setProperty('alerts', parsedAlerts)
      }

      setProperty('tables', config.tables)
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
      .neq('eos', true)

    if (data) {
      const dataType = data as unknown as QueryOutput[]
      const RANDOM_GAME = generateRandomNumber(0, data.length - 1)

      setProperty('storage', dataType)
      setBackground(dataType[RANDOM_GAME]?.background ?? '')
    }
    if (error) {
      showBoundary(error)
    }
  }

  const fetchData = async () => {
    setProperty('loading', true)
    const tables = await getConfig()

    void getGachaInformation(tables)

    setProperty('loading', false)
  }

  useEffect(() => {
    void fetchData()
  }, [])

  return { fetchData }
}

export default useSupabaseRelay
