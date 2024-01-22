import { useQuery } from '@tanstack/react-query'

import { getMonthRevenue } from '@/api/get-month-revenue'

export function useMonthRevenue() {
  const { data } = useQuery({
    queryKey: ['metrics', 'month-revenue'],
    queryFn: getMonthRevenue,
  })

  return { monthRevenue: data }
}
