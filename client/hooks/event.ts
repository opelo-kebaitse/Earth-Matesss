import * as clientApi from '../apis/events.ts'
import {
  useQuery,
  MutationFunction,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

export function useEvents() {
  const query = useQuery({
    queryKey: ['events'],
    queryFn: clientApi.getEventList,
  })
  return {
    ...query,
    add: useAddEvent(),
    edit: useEditEvent(),
    delete: useDeleteEvent(),
  }
}

export function useEventMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>
) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
  })
  return mutation
}

export function useAddEvent() {
  return useEventMutation(clientApi.addEvent)
}

export function useEditEvent() {
  return useEventMutation(clientApi.editEvent)
}
export function useDeleteEvent() {
  return useEventMutation(clientApi.deleteEvent)
}