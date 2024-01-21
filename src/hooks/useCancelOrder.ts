import { useMutation, useQueryClient } from '@tanstack/react-query'

import { cancelOrder } from '@/api/cancel-order'
import { GetOrdersResponse } from '@/api/get-orders'

export function useCancelOrder() {
  const queryClient = useQueryClient()

  const { mutateAsync } = useMutation({
    mutationFn: cancelOrder,
    onSuccess(_, { orderId }) {
      const ordersListCache = queryClient.getQueriesData<GetOrdersResponse>({
        queryKey: ['orders'],
      })

      ordersListCache.forEach(([cacheKey, cacheData]) => {
        if (!cacheData) {
          return
        }

        queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
          ...cacheData,
          orders: cacheData.orders.map((order) => {
            if (order.orderId === orderId) {
              return {
                ...order,
                status: 'canceled',
              }
            }

            return order
          }),
        })
      })
    },
  })

  return { cancelOrderFn: mutateAsync }
}
