import { ComponentProps } from 'react'
import { Outlet } from 'react-router-dom'

type Props = ComponentProps<'div'>

export function AppLayout(props: Props) {
  return (
    <div {...props}>
      <h1>cabeçalho</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
