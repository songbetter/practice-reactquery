import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

const queryKey = ['current-user']

export const useCurrentUser = () => {
  const queryFn = () =>
    axios
      .get(
        'https://react-query-f8aca-default-rtdb.firebaseio.com/current-user.json',
      )
      .then((response) => response.data)

  const { data } = useQuery({ queryKey, queryFn })

  return { data }
}
