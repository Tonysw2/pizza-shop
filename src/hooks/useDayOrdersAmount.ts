import { useQuery } from '@tanstack/react-query'

import { getDayOrdersAmount } from '@/api/get-days-order-amount'

export function useDayOrdersAmount() {
  const { data } = useQuery({
    queryKey: ['metrics', 'day-orders-amount'],
    queryFn: getDayOrdersAmount,
  })

  return { dayOrdersAmount: data }
}
