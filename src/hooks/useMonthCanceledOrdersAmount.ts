import { useQuery } from '@tanstack/react-query'

import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount'

export function useMonthCanceledOrdersAmount() {
  const { data } = useQuery({
    queryKey: ['metrics', 'month-canceled-orders-amount'],
    queryFn: getMonthCanceledOrdersAmount,
  })

  return { monthCanceledOrdersAmount: data }
}
