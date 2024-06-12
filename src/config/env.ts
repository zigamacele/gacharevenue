const config = {
  database: {
    HOST: getConfig('VITE_SUPABASE_URL'),
    ANON_KEY: getConfig('VITE_SUPABASE_ANON_KEY'),
    GAMES_TABLE: getConfig('VITE_SUPABASE_GAMES_TABLE'),
  },
  posthog: {
    API_KEY: getConfig('VITE_POSTHOG_KEY'),
    HOST: getConfig('VITE_POSTHOG_HOST'),
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

export const getRedirectURL = () => {
  let url =
    (import.meta.env['VITE_SITE_URL'] as string | undefined) ??
    (import.meta.env['VITE_VERCEL_URL'] as string | undefined) ??
    'http://localhost:5173/'
  url = url.includes('http') ? url : `https://${url}`
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
  return url
}

export default config
