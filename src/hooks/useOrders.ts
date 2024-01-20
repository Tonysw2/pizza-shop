import { useQuery } from '@tanstack/react-query'

import { getOrders } from '@/api/get-orders'

export function useOrders({ pageIndex }: { pageIndex: number | null }) {
  const { data, isFetching } = useQuery({
    queryKey: ['orders', { page: pageIndex }],
    queryFn: () => getOrders({ pageIndex }),
  })

  return { result: data, isLoadingOrders: isFetching }
}
