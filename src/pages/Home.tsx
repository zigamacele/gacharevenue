import useSupabaseQuery from '@/hooks/useSupabaseQuery'
import { currentMonthYear, previousMonthYear } from '@/utils/timeDate'

const Home: React.FC = () => {
  const { data, loading } = useSupabaseQuery({
    mainTable: currentMonthYear(),
    otherTables: [
      'game:games ( * )',
      `previousMonth:${previousMonthYear()} ( * )`,
    ],
    sorting: { column: 'totalRevenue', ascending: false },
  })
  return (
    <div>
      {!loading &&
        data.map((d) => (
          <div key={d.id}>
            {d.game?.['region']} {d.game?.['en_name']} {d['totalRevenue']}{' '}
            {d['previousMonth']?.['totalRevenue']}
          </div>
        ))}
    </div>
  )
}

export default Home
