import { useMutation } from '@tanstack/react-query'

import { registerRestaurant } from '@/api/register-restaurant'

export function useRegisterRestaurant() {
  const { mutateAsync } = useMutation({
    mutationFn: registerRestaurant,
  })

  return { registerRestaurantFn: mutateAsync }
}
