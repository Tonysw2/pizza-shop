import { ComponentProps } from 'react'
import { Helmet } from 'react-helmet-async'

type Props = ComponentProps<'div'>

export function Dashboard(props: Props) {
  return (
    <>
      <Helmet title="Dashboard" />
      <div {...props}>Dashboard</div>
    </>
  )
}
