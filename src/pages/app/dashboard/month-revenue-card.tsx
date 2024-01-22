import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useMonthRevenue } from '@/hooks/useMonthRevenue'

export function MonthRevenueCard() {
  const { monthRevenue } = useMonthRevenue()

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthRevenue && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthRevenue.receipt / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthRevenue.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500">{`+${monthRevenue.diffFromLastMonth}%`}</span>{' '}
                  em relação ao mês passado.
                </>
              ) : (
                <>
                  <span className="text-rose-500">{`${monthRevenue.diffFromLastMonth}%`}</span>{' '}
                  em relação ao mês passado.
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
