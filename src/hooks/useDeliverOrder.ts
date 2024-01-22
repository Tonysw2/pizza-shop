import { useMutation } from '@tanstack/react-query'

import { deliverOrder } from '@/api/deliver-order'

import { useUpdateOrderStatusOnCache } from './useUpdateOrderStatusOnCache'

export function useDeliverOrder() {
  const { updateFn } = useUpdateOrderStatusOnCache()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: deliverOrder,
    onSuccess(_, { orderId }) {
      updateFn(orderId, 'delivered')
    },
  })

  return { deliverOrderFn: mutateAsync, isDeliveringOrder: isPending }
}
