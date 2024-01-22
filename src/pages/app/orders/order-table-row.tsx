import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Loader, Search, X } from 'lucide-react'
import { useState } from 'react'

import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { useApproveOrder } from '@/hooks/useApproveOrder'
import { useCancelOrder } from '@/hooks/useCancelOrder'
import { useDeliverOrder } from '@/hooks/useDeliverOrder'
import { useDispatchOrder } from '@/hooks/useDispatchOrder'

import { Button } from '../../../components/ui/button'
import { TableCell, TableRow } from '../../../components/ui/table'
import { OrderDetails } from './order-details'
import { OrderStatus } from './order-status'

interface Props {
  order: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }
}

export function OrderTableRow({ order }: Props) {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false)

  const { cancelOrderFn, isCancelingOrder } = useCancelOrder()
  const { approveOrderFn, isApprovingOrder } = useApproveOrder()
  const { dispatchOrderFn, isDispatchingOrder } = useDispatchOrder()
  const { deliverOrderFn, isDeliveringOrder } = useDeliverOrder()

  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsModalOpen} onOpenChange={setIsDetailsModalOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrderDetails open={isDetailsModalOpen} orderId={order.orderId} />
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>

      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>

      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>

      <TableCell className="font-medium">{order.customerName}</TableCell>

      <TableCell className="font-medium">
        {(order.total / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>

      <TableCell>
        {order.status === 'pending' && (
          <Button
            variant="ghost"
            size="xs"
            disabled={isApprovingOrder}
            onClick={() => approveOrderFn({ orderId: order.orderId })}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            {isApprovingOrder ? (
              <Loader className="h-4 w-4" />
            ) : (
              <span>Aprovar</span>
            )}
          </Button>
        )}

        {order.status === 'processing' && (
          <Button
            variant="ghost"
            size="xs"
            disabled={isDispatchingOrder}
            onClick={() => dispatchOrderFn({ orderId: order.orderId })}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            {isDispatchingOrder ? (
              <Loader className="h-4 w-4" />
            ) : (
              <span>Em entrega</span>
            )}
          </Button>
        )}

        {order.status === 'delivering' && (
          <Button
            variant="ghost"
            size="xs"
            disabled={isDeliveringOrder}
            onClick={() => deliverOrderFn({ orderId: order.orderId })}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            {isDeliveringOrder ? (
              <Loader className="h-4 w-4" />
            ) : (
              <span>Entregue</span>
            )}
          </Button>
        )}
      </TableCell>

      <TableCell>
        <Button
          size="xs"
          variant="ghost"
          onClick={() => cancelOrderFn({ orderId: order.orderId })}
          disabled={
            !['pending', 'processing'].includes(order.status) ||
            isCancelingOrder ||
            isApprovingOrder ||
            isDispatchingOrder ||
            isDeliveringOrder
          }
        >
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
