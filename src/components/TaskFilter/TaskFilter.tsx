

type Props = {
  setFilter: (filter: string) => void
}

export const TaskFilter: React.FC<Props> = ({ setFilter }) => {
  return (
    <div className="filters mb-4">
      <button onClick={() => setFilter('all')} className="border p-2">All</button>
      <button onClick={() => setFilter('completed')} className="border p-2">Completed</button>
      <button onClick={() => setFilter('current')} className="border p-2">Current</button>
    </div>
  )
}
