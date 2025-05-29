'use client'

import { LoopAnimation } from '@/components'
import { usePostStudy } from '@/hooks/mutations/study'
import {
    getAnswerStore,
    getQuestionStore,
    useRecentQuizbookStore,
} from '@/store/quizbook'
import { ErrorResponse } from '@/types/base'
import { QuizbookMeta } from '@/types/quizbook'
import { AxiosError } from 'axios'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

interface Props {
    quizbookMeta: QuizbookMeta
}

export default function ConfirmUI({ quizbookMeta }: Props) {
    const router = useRouter()

    const { reset: recentReset } = useRecentQuizbookStore()
    const questionStore = getQuestionStore(quizbookMeta._id)
    const answerStore = getAnswerStore(quizbookMeta._id)

    const { reset: questionReset, setCurIdx } = questionStore()
    const answerMap = answerStore((s) => s.answerMap)
    const answerReset = answerStore((s) => s.reset)

    // 답안 리스트
    const answerList = quizbookMeta.quizList.map((quiz) => ({
        quizId: quiz._id,
        answer: answerMap[quiz._id] || '',
    }))

    // 빈 답안 리스트
    const emptyList = quizbookMeta.quizList.reduce(
        (acc, quiz, idx) => {
            if (!answerMap[quiz._id]) {
                acc.push({
                    idx,
                    question: quiz.question,
                })
            }
            return acc
        },
        [] as { idx: number; question: string }[],
    )

    const handleClick = (idx: number) => {
        setCurIdx(idx + 1)
        router.back()
    }

    const handleSubmit = () => {
        postStudy(
            {
                answerList,
            },
            {
                onSuccess: () => {
                    recentReset()
                    answerReset()
                    questionReset()
                    router.replace(`/quizbook/${quizbookMeta._id}/result`)
                },
                onError: (e) => {
                    const err = e as AxiosError<ErrorResponse>
                    const msg =
                        err.response?.data.message ||
                        '답안 제출 중 오류가 발생했습니다.'

                    toast.error(msg)
                },
            },
        )
    }

    const { mutate: postStudy, isPending } = usePostStudy(quizbookMeta._id)

    return (
        <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[8px]">
                <div className="flex gap-[8px] text-mobile-body-md font-semi-bold md:text-pc-body-lg">
                    <span>안푼 문제</span>
                    <div>
                        <span className="text-point-500">
                            {emptyList.length}
                        </span>
                        <span>개</span>
                    </div>
                </div>
                <div className="flex max-h-[150px] min-h-[150px] flex-col gap-[4px] overflow-y-auto rounded-lg bg-point-50 p-[16px] md:max-h-[200px] md:min-h-[200px]">
                    {emptyList.map((item) => (
                        <div
                            className="flex items-center gap-[8px]"
                            key={`empty-${item.idx}`}
                        >
                            <button
                                onClick={() => handleClick(item.idx)}
                                className="shrink-0 font-semi-bold"
                            >{`[${item.idx + 1}번]`}</button>
                            <span className="line-clamp-1 flex-1">
                                {item.question}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <p className="whitespace-pre-line break-words text-center text-mobile-body-md text-gray-400 md:text-pc-body-md">
                {
                    '답안을 제출하시겠습니까?\n제출하시면 더 이상 수정할 수 없습니다.'
                }
            </p>
            <div className="flex gap-[16px]">
                <button className="btn-outline btn-mobile-lg w-full md:btn-pc-lg">
                    아니오
                </button>
                <button
                    disabled={isPending}
                    onClick={handleSubmit}
                    className={clsx(
                        'btn-solid btn-mobile-lg w-full md:btn-pc-lg',
                        {
                            'btn-loading': isPending,
                        },
                    )}
                >
                    {isPending && <LoopAnimation />}
                    {isPending ? '제출중...' : '네'}
                </button>
            </div>
        </div>
    )
}
