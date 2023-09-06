import { createClient } from '@supabase/supabase-js'

import config from './env'

const supabase = createClient(
  config.database['HOST'],
  config.database['ANON_KEY'],
)

export default supabase
