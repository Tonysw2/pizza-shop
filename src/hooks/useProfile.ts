import { useQuery } from '@tanstack/react-query'

import { getProfile } from '@/api/getProfile'

export function useProfile() {
  const { data, isFetching } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
  })

  return { profile: data, isLoadingProfile: isFetching }
}
