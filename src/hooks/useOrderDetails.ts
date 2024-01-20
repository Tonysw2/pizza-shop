import { useQuery } from '@tanstack/react-query'

import { getOrderDetails } from '@/api/get-order-details'

interface UseOrderDetailsParams {
  open: boolean
  orderId: string
}

export function useOrderDetails({ open, orderId }: UseOrderDetailsParams) {
  const { data, isFetching } = useQuery({
    queryKey: ['order-details', { orderId }],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: open,
  })

  return {
    orderDetails: data,
    isLoadingOrderDetails: isFetching,
  }
}
