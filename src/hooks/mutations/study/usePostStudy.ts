import { QueryKey } from '@/constants/common/queryKey'
import { postStudy } from '@/lib/api/study/postStudy'
import { getQueryClient } from '@/lib/react-query/getQueryClient'
import { PostStudyBody } from '@/types/api/study'
import { ErrorResponse } from '@/types/base'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

export const usePostStudy = (quizbookId: string, onSuccess?: () => void) => {
    const queryClient = getQueryClient()

    return useMutation({
        mutationFn: (body: PostStudyBody) => postStudy(quizbookId, body),
        onSuccess: async () => {
            await Promise.all([
                queryClient.invalidateQueries({
                    queryKey: [QueryKey.quizbook.STATES, quizbookId],
                }),
                queryClient.invalidateQueries({
                    queryKey: [QueryKey.quizbook.USERFLAGS, quizbookId],
                }),
            ])

            onSuccess?.()
        },
        onError: (e: AxiosError<ErrorResponse>) => {
            const msg =
                e.response?.data.message || '답안 제출 중 오류가 발생했습니다.'

            toast.error(msg)
        },
        meta: {
            ignoreGlobalError: true,
        },
    })
}
