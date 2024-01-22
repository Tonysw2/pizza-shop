import { useQueryClient } from '@tanstack/react-query'

import { GetOrdersResponse } from '@/api/get-orders'
import { OrderStatus } from '@/pages/app/orders/order-status'

export function useUpdateOrderStatusOnCache() {
  const queryClient = useQueryClient()

  function updateFn(orderId: string, status: OrderStatus) {
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
              status,
            }
          }

          return order
        }),
      })
    })
  }

  return { updateFn }
}
