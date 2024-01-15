import { ComponentProps } from 'react'
import { Helmet } from 'react-helmet-async'

type Props = ComponentProps<'div'>

export function SignIn(props: Props) {
  return (
    <>
      <Helmet title="Sign In" />
      <div {...props}>Sign In</div>
    </>
  )
}
