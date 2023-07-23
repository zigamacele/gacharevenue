import useSupabaseQuery from '@/hooks/useSupabaseQuery'

const Home: React.FC = () => {
  const { data, loading } = useSupabaseQuery({
    mainTable: '7-2023',
    otherTables: ['game:games ( * )', 'previousMonth:6-2023 ( * )'],
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
