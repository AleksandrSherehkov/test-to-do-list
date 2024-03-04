import { FC } from "react"

interface TitlePageProps {
  title: string
}

export const TitlePage:FC<TitlePageProps> = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}
