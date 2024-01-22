import { useQuery } from '@tanstack/react-query'
import { DateRange } from 'react-day-picker'

import { getDailyRevenueInPeriod } from '@/api/get-daily-revenue-in-period'

export function useDailyRevenueInPeriod(dateRange: DateRange | undefined) {
  const { data } = useQuery({
    queryKey: ['metrics', 'daily-revenue-in-period', dateRange],
    queryFn: () =>
      getDailyRevenueInPeriod({ from: dateRange?.from, to: dateRange?.to }),
  })

  return { dailyRevenueInPeriod: data }
}
