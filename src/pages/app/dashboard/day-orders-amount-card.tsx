import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useDayOrdersAmount } from '@/hooks/useDayOrdersAmount'

export function DayOrdersAmountCard() {
  const { dayOrdersAmount } = useDayOrdersAmount()

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {dayOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {dayOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {dayOrdersAmount.diffFromYesterday >= 0 ? (
                <>
                  <span className="text-emerald-500">{`+${dayOrdersAmount.diffFromYesterday}%`}</span>{' '}
                  em relação a ontem.
                </>
              ) : (
                <>
                  <span className="text-rose-500">{`${dayOrdersAmount.diffFromYesterday}%`}</span>{' '}
                  em relação a ontem.
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
