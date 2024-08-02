import MotionInView from '@/lib/framer-motion/MotionInView'

import FaqQuestion from '@/components/Faq/FaqQuestion'

import FAQ from '@/constants/faq'

const Faq: React.FC = () => {
  return (
    <MotionInView styles='mt-2 flex flex-col items-center gap-2'>
      <div className='flex h-full w-full flex-col gap-4 overflow-x-auto overflow-y-hidden rounded-lg border border-neutral-700 bg-neutral-900 px-2 py-2 pb-16 sm:w-[50vw] '>
        <div className='item-center flex flex-col items-center justify-center gap-1 pb-6 pt-8 text-center'>
          <p className='text-xs opacity-60'>FAQs</p>
          <p className='text-3xl'>Frequently asked questions</p>
        </div>
        <div>
          {FAQ.map(({ question, answer }, index) => (
            <FaqQuestion
              key={index}
              question={question}
              answer={answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </MotionInView>
  )
}

export default Faq
