import { FC } from "react"

interface TitlePageProps {
  title: string
}

export const TitlePage:FC<TitlePageProps> = ({title}) => {
  return (
    <h1 className="text-3xl font-bold">{title}</h1>
  )
}
