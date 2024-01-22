import { useQuery } from '@tanstack/react-query'

import { getMonthOrdersAmount } from '@/api/get-month-orders-amount'

export function useMonthOrdersAmount() {
  const { data } = useQuery({
    queryKey: ['metrics', 'month-orders-amount'],
    queryFn: getMonthOrdersAmount,
  })

  return { monthOrdersAmount: data }
}
