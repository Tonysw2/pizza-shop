import { useQuery } from '@tanstack/react-query'

import { getPopularProducts } from '@/api/get-popular-products'

export function usePopularProducts() {
  const { data } = useQuery({
    queryKey: ['metrics', 'popular-products'],
    queryFn: getPopularProducts,
  })

  return { popularProducts: data }
}
