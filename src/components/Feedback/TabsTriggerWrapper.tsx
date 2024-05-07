import { TabsTrigger } from '@/lib/shadcn/ui/tabs'

import { FeedbackType } from '@/types/feedback'

interface TabsTriggerWrapperProps {
  value: FeedbackType
  currentTab: string
  icon: React.ReactNode
  isMobile: boolean
}

const TabsTriggerWrapper: React.FC<TabsTriggerWrapperProps> = ({
  value,
  currentTab,
  icon,
  isMobile,
}) => {
  const valueLowerCase = value.toLowerCase()
  return (
    <TabsTrigger value={value} className='flex items-center gap-2 font-normal'>
      {icon}
      {!isMobile ? (
        <p className='capitalize'>{valueLowerCase}</p>
      ) : (
        currentTab === value.toString() && (
          <p className='capitalize'>{valueLowerCase}</p>
        )
      )}
    </TabsTrigger>
  )
}

export default TabsTriggerWrapper
