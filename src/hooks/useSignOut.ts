import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { signOut } from '@/api/sign-out'

export function useSignOut() {
  const navigate = useNavigate()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: signOut,
    onSuccess() {
      navigate('/sign-in', { replace: true })
    },
  })

  return { signOutFn: mutateAsync, isSigningOut: isPending }
}
