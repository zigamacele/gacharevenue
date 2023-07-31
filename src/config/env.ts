const config = {
  database: {
    HOST: getConfig('VITE_SUPABASE_URL'),
    ANON_KEY: getConfig('VITE_SUPABASE_ANON_KEY'),
    GAMES_TABLE: getConfig('VITE_SUPABASE_GAMES_TABLE'),
  },
}

function getConfig(envKey: string): string {
  const envValue = import.meta.env[envKey] as string | undefined
  if (envValue === undefined) {
    console.error(`Config key ${envKey} is undefined.`)
    throw new Error('Bad config.')
  }

  return envValue
}

export default config
