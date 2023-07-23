const config = {
  database: {
    HOST: getConfig('VITE_SUPABASE_URL'),
    ANON_KEY: getConfig('VITE_SUPABASE_ANON_KEY'),
  },
}

function getConfig(envKey: string): string {
  const envValue = import.meta.env[envKey]
  if (envValue === undefined) {
    console.error(`Config key ${envKey} is undefined.`)
    throw new Error('Bad config.')
  }

  return envValue
}

export default config
