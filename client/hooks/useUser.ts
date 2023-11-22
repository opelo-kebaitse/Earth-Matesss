import { useAuth0 } from '@auth0/auth0-react'
import * as clientApi from '../apis/usersApi.ts'
import {
  useQuery,
  MutationFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'



export function useUser() {
  const { user, getAccessTokenSilently } = useAuth0()
  const query = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return clientApi.getUserDetail(token)
}, 
enabled: !!user })
  return {
    ...query,
    
  }
}