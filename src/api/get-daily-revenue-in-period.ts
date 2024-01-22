import { api } from '@/lib/axios'

interface GetDailyRevenueInPeriodParams {
  from?: Date
  to?: Date
}

export type GetDailyRevenueInPeriod = {
  date: string
  receipt: number
}[]

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodParams) {
  const response = await api.get<GetDailyRevenueInPeriod>(
    '/metrics/daily-receipt-in-period',
    { params: { from, to } },
  )

  return response.data
}
