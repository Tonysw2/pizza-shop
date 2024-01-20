import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const orderFiltersSchema = z.object({
  status: z.string(),
  orderId: z.string(),
  customerName: z.string(),
})

type OrderFiltersSchema = z.infer<typeof orderFiltersSchema>

export function OrderTableFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const status = searchParams.get('status')
  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')

  const { control, register, reset, handleSubmit } =
    useForm<OrderFiltersSchema>({
      resolver: zodResolver(orderFiltersSchema),
      defaultValues: {
        status: status ?? 'all',
        orderId: orderId ?? '',
        customerName: customerName ?? '',
      },
    })

  function handleClearFilters() {
    reset({
      status: 'all',
      orderId: '',
      customerName: '',
    })

    setSearchParams((state) => {
      state.delete('status')
      state.delete('orderId')
      state.delete('costumerName')
      state.set('page', '1')

      return state
    })
  }

  function handleFilter(data: OrderFiltersSchema) {
    setSearchParams((state) => {
      if (data.status) {
        state.set('status', data.status)
      } else {
        state.delete('status')
      }

      if (data.orderId) {
        state.set('orderId', data.orderId)
      } else {
        state.delete('orderId')
      }

      if (data.customerName) {
        state.set('customerName', data.customerName)
      } else {
        state.delete('customerName')
      }

      state.set('page', '1')

      return state
    })
  }

  return (
    <form
      className="flex items-center gap-2"
      onSubmit={handleSubmit(handleFilter)}
    >
      <span className="text-sm font-semibold">Filtros:</span>

      <Input
        placeholder="ID do pedido"
        className="h-8 w-auto"
        {...register('orderId')}
      />

      <Input
        placeholder="Nome do cliente"
        className="h-8 w-[320px]"
        {...register('customerName')}
      />

      <Controller
        name="status"
        control={control}
        render={({ field: { name, value, onChange, disabled } }) => (
          <Select
            name={name}
            value={value}
            defaultValue="all"
            disabled={disabled}
            onValueChange={onChange}
          >
            <SelectTrigger className="h-8 w-44">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">Todos os status</SelectItem>
              <SelectItem value="pending">Pendente</SelectItem>
              <SelectItem value="canceled">Cancelado</SelectItem>
              <SelectItem value="processing">Em preparo</SelectItem>
              <SelectItem value="delivering">Em entrega</SelectItem>
              <SelectItem value="delivered">Entregue</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      <Button type="submit" variant="secondary" size="xs">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>

      <Button
        size="xs"
        type="button"
        variant="destructive"
        onClick={handleClearFilters}
      >
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
    </form>
  )
}
