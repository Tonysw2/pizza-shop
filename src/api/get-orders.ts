import { api } from '@/lib/axios'

interface GetOrdersQuery {
  status?: string | null
  orderId?: string | null
  pageIndex?: number | null
  customerName?: string | null
}

interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({
  status,
  orderId,
  pageIndex,
  customerName,
}: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      status,
      orderId,
      pageIndex,
      customerName,
    },
  })

  return response.data
}
