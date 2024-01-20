import { useQuery } from '@tanstack/react-query'

import { getOrders } from '@/api/get-orders'

export function useOrders() {
  const { data, isFetching } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  })

  return { result: data, isLoadingOrders: isFetching }
}
