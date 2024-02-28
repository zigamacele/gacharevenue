import { Button } from '@/lib/shadcn/ui/button'

import { iconsLibrary } from '@/constants/icons'
import { KOFI_URL } from '@/constants/links'

const Kofi: React.FC = () => (
  <Button
    className='slide-from-bottom group group fixed bottom-3 left-3 z-50 hidden cursor-pointer rounded border border-neutral-700/60 bg-neutral-900/80 px-2 py-0.5 xl:flex'
    onClick={() => window.open(KOFI_URL, '_blank')}
  >
    <img
      src={iconsLibrary.KOFI}
      className='w-8 transition-opacity 
      group-hover:opacity-60'
      alt='Kofi'
    />
  </Button>
)

export default Kofi
