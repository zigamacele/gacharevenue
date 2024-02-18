import { useEffect } from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import { useLocation } from 'react-router'

import useBackgroundStore from '@/stores/background-store'
import useGraveyardStore from '@/stores/graveyard-store.ts'
import useSupabaseStore from '@/stores/supabase-store'

import config from '@/config/env'
import supabase from '@/config/supabase'
import { GRAVEYARD } from '@/constants/links.ts'
import { generateRandomNumber } from '@/utils/globals'

import { ConfigData, QueryOutput } from '@/types/supabase'
import { SetAlerts } from '@/types/zustand'

const useSupabaseRelay = () => {
  const { setProperty } = useSupabaseStore()
  const { setBackground } = useBackgroundStore()
  const { setGraveyardBackground } = useGraveyardStore()
  const { showBoundary } = useErrorBoundary()
  const { pathname } = useLocation()

  const getConfig = async () => {
    const localOutput: string[] = []
    const { data, error } = await supabase.from('config').select().eq('id', 1)

    if (data) {
      const {
        maintenance,
        alerts,
        lastUpdated,
        currentTable,
        previousTable,
        tables,
        graveyardBackground,
      } = data[0] as ConfigData

      if (maintenance) {
        showBoundary('maintenance')
      }

      if (alerts) {
        const parsedAlerts: SetAlerts[] = alerts.map(
          (alert) => JSON.parse(alert) as SetAlerts,
        )
        setProperty('alerts', parsedAlerts)
      }

      setProperty('lastUpdated', lastUpdated)
      setProperty('currentTable', currentTable)
      setProperty('previousTable', previousTable)
      setProperty('tables', tables)
      setGraveyardBackground(graveyardBackground)
      if (pathname === GRAVEYARD) setBackground(graveyardBackground)
      tables.forEach((table: string) => {
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
      const dataType = data as unknown as QueryOutput[]
      const RANDOM_GAME = generateRandomNumber(0, data.length - 1)

      setProperty('storage', dataType)
      if (pathname !== GRAVEYARD)
        setBackground(
          dataType[RANDOM_GAME]?.background ?? '',
          dataType[RANDOM_GAME]?.blurhash,
        )
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
