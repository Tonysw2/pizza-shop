import { useMutation, useQueryClient } from '@tanstack/react-query'

import { GetManagedRestaurantResponse } from '@/api/get-manage-restaurant'
import { updateProfile } from '@/api/update-profile'

export function useUpdateProfile() {
  const queryClient = useQueryClient()

  const { mutateAsync } = useMutation({
    mutationFn: updateProfile,
    onMutate({ name, description }) {
      const cached = queryClient.getQueryData<GetManagedRestaurantResponse>([
        'managed-restaurant',
      ])

      if (cached) {
        queryClient.setQueryData<GetManagedRestaurantResponse>(
          ['managed-restaurant'],
          {
            ...cached,
            name,
            description,
          },
        )
      }

      return { cached }
    },
    onError(_, __, context) {
      if (context?.cached) {
        queryClient.setQueryData(['managed-restaurant'], { ...context.cached })
      }
    },
  })

  return { updateProfileFn: mutateAsync }
}
