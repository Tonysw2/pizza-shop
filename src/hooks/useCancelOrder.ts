import { useMutation, useQueryClient } from '@tanstack/react-query'

import { cancelOrder } from '@/api/cancel-order'
import { GetOrdersResponse } from '@/api/get-orders'

import { useUpdateOrderStatusOnCache } from './useUpdateOrderStatusOnCache'

export function useCancelOrder() {
  const { updateFn } = useUpdateOrderStatusOnCache()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: cancelOrder,
    onSuccess(_, { orderId }) {
      updateFn(orderId, 'canceled')
    },
  })

  return { cancelOrderFn: mutateAsync, isCancelingOrder: isPending }
}
