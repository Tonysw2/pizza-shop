import { useMutation } from '@tanstack/react-query'

import { approveOrder } from '@/api/approve-order'

import { useUpdateOrderStatusOnCache } from './useUpdateOrderStatusOnCache'

export function useApproveOrder() {
  const { updateFn } = useUpdateOrderStatusOnCache()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: approveOrder,
    onSuccess(_, { orderId }) {
      updateFn(orderId, 'processing')
    },
  })

  return { approveOrderFn: mutateAsync, isApprovingOrder: isPending }
}
