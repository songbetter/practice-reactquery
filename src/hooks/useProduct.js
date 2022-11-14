import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useContext } from 'react'
import { IntlContext } from 'react-intl'

const API_URL = 'https://react-query-f8aca-default-rtdb.firebaseio.com'

// location vs language
export const useProduct = (id) => {
  const context = useContext(IntlContext)
  const queryKey = ['product', id, context.locale]
  const queryFn = async () => {
    const { data } = await axios.get(
      `${API_URL}/${context.locale}/${queryKey[0]}/${queryKey[1]}.json`,
    )
    return data
  }

  const {
    data: { name, price, description, imageUrl },
  } = useQuery({ queryKey, queryFn })

  return {
    name,
    price,
    description,
    imageUrl,
  }
}
