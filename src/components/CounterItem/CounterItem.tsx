import { FC } from "react"

interface CounterItemProps {
  label: string
  count: number
}

export const CounterItem: FC<CounterItemProps> = ({ label, count }): JSX.Element => 
  <p>{label}: {count}</p>



