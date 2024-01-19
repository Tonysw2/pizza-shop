import { useQuery } from '@tanstack/react-query'

import { getProfile } from '@/api/get-profile'

export function useProfile() {
  const { data, isFetching } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  })

  return { profile: data, isLoadingProfile: isFetching }
}
