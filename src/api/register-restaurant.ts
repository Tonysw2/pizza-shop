import { api } from '@/lib/axios'

interface RegisterRestaurantBody {
  phone: string
  email: string
  managerName: string
  restaurantName: string
}

export async function registerRestaurant({
  phone,
  email,
  managerName,
  restaurantName,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', {
    phone,
    email,
    managerName,
    restaurantName,
  })
}
