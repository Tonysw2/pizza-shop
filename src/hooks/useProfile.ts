import { useQuery } from '@tanstack/react-query'

import { getProfile } from '@/api/getProfile'

export function useProfile() {
  const { data, isFetching } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  })

  return { profile: data, isLoadingProfile: isFetching }
}
