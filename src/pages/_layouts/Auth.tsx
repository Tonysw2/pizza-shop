import { ComponentProps } from 'react'
import { Outlet } from 'react-router-dom'

type Props = ComponentProps<'div'>

export function AuthLayout(props: Props) {
  return (
    <div {...props}>
      <h1>Auth</h1>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
