'use client'

import { CustomInput, LoopAnimation, Modal } from '@/components'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import StarScore from '../../_components/StarScore'
import { useParams } from 'next/navigation'
import { ReviewFormData, reviewSchema } from '@/types/schemas/review'
import { usePatchReview } from '@/hooks/mutations/review'

export default function EditReviewModal() {
    const { quizbookId, targetId } = useParams()
    const [score, setScore] = useState(5)
    const methods = useForm<ReviewFormData>({
        resolver: zodResolver(reviewSchema),
        mode: 'onChange',
    })
    const { mutate, isPending } = usePatchReview(
        quizbookId as string,
        targetId as string,
    )

    const handleFormSubmit = async (data: ReviewFormData) => {
        mutate({ ...data, score })
    }

    return (
        <Modal title="후기 수정" closeOnOverlayClick={true}>
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(handleFormSubmit)}
                    className="flex flex-col items-center gap-4"
                >
                    <StarScore score={score} setScore={setScore} />
                    <CustomInput
                        id="content"
                        name="content"
                        area={true}
                        placeholder="수정된 후기를 작성해주세요!"
                        disabled={isPending}
                    />
                    <div className="flex w-full justify-end">
                        <button
                            type="submit"
                            disabled={isPending}
                            className={clsx(
                                'btn-solid btn-mobile-lg md:btn-pc-lg',
                                isPending && 'btn-loading',
                            )}
                        >
                            {isPending && <LoopAnimation />}
                            {isPending ? 'Loading...' : '수정'}
                        </button>
                    </div>
                </form>
            </FormProvider>
        </Modal>
    )
}
