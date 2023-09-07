import useSupabaseStore from '@/stores/supabase-store'

const { currentTable, previousTable } = useSupabaseStore.getState()

export let CURRENT_TABLE = currentTable
export let PREVIOUS_TABLE = previousTable

useSupabaseStore.subscribe((state) => {
  const { currentTable, previousTable } = state
  CURRENT_TABLE = currentTable
  PREVIOUS_TABLE = previousTable
})
