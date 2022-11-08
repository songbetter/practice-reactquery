import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const queryKey = ['current-user']

export const useCurrentUser = () => {
  const queryClient = useQueryClient()

  const queryFn = () =>
    axios
      .get(
        'https://react-query-f8aca-default-rtdb.firebaseio.com/current-user.json',
      )
      .then((response) => response.data)

  const mutationFn = (data) =>
    axios.patch(
      'https://react-query-f8aca-default-rtdb.firebaseio.com/current-user.json',
      data,
    )

  const { data } = useQuery({ queryKey, queryFn })
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
    },
  })

  return { data, mutation }
}
