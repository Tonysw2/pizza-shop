import { useMutation } from '@tanstack/react-query'

import { dispatchOrder } from '@/api/dispatch-order'

import { useUpdateOrderStatusOnCache } from './useUpdateOrderStatusOnCache'

export function useDispatchOrder() {
  const { updateFn } = useUpdateOrderStatusOnCache()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: dispatchOrder,
    onSuccess(_, { orderId }) {
      updateFn(orderId, 'delivering')
    },
  })

  return { dispatchOrderFn: mutateAsync, isDispatchingOrder: isPending }
}
