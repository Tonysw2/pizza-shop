import { useQuery } from '@tanstack/react-query'

import { getManagedRestaurant } from '@/api/getManageRestaurant'

export function useManagedRestaurant() {
  const { data, isFetching } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  })

  return { managedRestaurant: data, isLoadingManagedRestaurant: isFetching }
}
