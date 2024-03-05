import { FC } from "react"

interface CounterItemProps {
  label: string
  count: number
}

export const CounterItem: FC<CounterItemProps> = ({ label, count }): JSX.Element => 
  <p className={`text-sm font-bold ${label === "Completed" ? "text-red-500" : label === "Uncompleted" ? "text-green-500" : "text-gray-600"}`}>
    {label}: {count}
  </p>



