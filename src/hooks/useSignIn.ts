import { useMutation } from '@tanstack/react-query'

import { signIn } from '@/api/sign-in'

export function useSignIn() {
  const { mutateAsync } = useMutation({
    mutationFn: signIn,
  })

  return { authenticate: mutateAsync }
}
