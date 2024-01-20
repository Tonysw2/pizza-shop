import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { getOrders } from '@/api/get-orders'

export function useOrders() {
  const [searchParams, setSearchParams] = useSearchParams()

  const status = searchParams.get('status')
  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data, isFetching } = useQuery({
    queryKey: ['orders', { page: pageIndex, status, orderId, customerName }],
    queryFn: () =>
      getOrders({
        orderId,
        pageIndex,
        customerName,
        status: status === 'all' ? null : status,
      }),
  })

  function handleChangePage(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())

      return state
    })
  }

  return { result: data, isLoadingOrders: isFetching, handleChangePage }
}
