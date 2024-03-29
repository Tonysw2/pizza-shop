import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useOrders } from '@/hooks/useOrders'
import { OrderTableRow } from '@/pages/app/orders/order-table-row'

import { OrderTableFilters } from './order-table-filters'
import { OrderTableSkeleton } from './order-table-skeleton'

export function Orders() {
  const { result, isLoadingOrders, handleChangePage } = useOrders()

  return (
    <>
      <Helmet title="Pedidos" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16"></TableHead>
                  <TableHead className="w-36">Identificador</TableHead>
                  <TableHead className="w-44">Realizado há</TableHead>
                  <TableHead className="w-36">Status</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead className="w-36">Total</TableHead>
                  <TableHead className="w-40"></TableHead>
                  <TableHead className="w-32"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoadingOrders && <OrderTableSkeleton />}

                {!isLoadingOrders &&
                  result &&
                  result.orders.map((order) => (
                    <OrderTableRow key={order.orderId} order={order} />
                  ))}
              </TableBody>
            </Table>
          </div>

          {result && (
            <Pagination
              onPageChange={handleChangePage}
              pageIndex={result.meta.pageIndex}
              totalCount={result.meta.totalCount}
              perPage={result.meta.perPage}
            />
          )}
        </div>
      </div>
    </>
  )
}
