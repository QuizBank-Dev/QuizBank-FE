import { QueryKey } from '@/constants/common/queryKey'
import { postStudy } from '@/lib/api/study'
import { PostStudyBody } from '@/types/api/study'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const usePostStudy = (quizbookId: string) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (body: PostStudyBody) => postStudy(quizbookId, body),
        onSuccess: async () => {
            await Promise.all([
                queryClient.invalidateQueries({
                    queryKey: QueryKey.quizbook.STATES(quizbookId),
                }),
                queryClient.invalidateQueries({
                    queryKey: QueryKey.quizbook.USERFLAGS(quizbookId),
                }),
                queryClient.invalidateQueries({
                    queryKey: QueryKey.study.RESULT_LIST,
                }),
            ])
        },
        retry: 0,
        meta: {
            ignoreGlobalError: true,
        },
    })
}
