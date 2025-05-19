'use client'

import { CustomInput, LoopAnimation, Modal } from '@/components'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import StarScore from './StarScore'
import { ReviewFormData, reviewSchema } from '@/types/schemas/review'

export default function CreateReviewModal() {
    const [isLoading, setIsLoading] = useState(false)
    const [score, setScore] = useState(5)
    const methods = useForm<ReviewFormData>({
        resolver: zodResolver(reviewSchema),
        mode: 'onChange',
    })

    const handleFormSubmit = async (data: ReviewFormData) => {
        // 추후 로직 수정
        setIsLoading(true)
        setTimeout(() => {
            console.log('Form Data:', { ...data, score })
            setIsLoading(false)
        }, 2000)
    }

    return (
        <Modal title="당신의 후기를 남겨주세요!" closeOnOverlayClick={true}>
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
                        placeholder="후기를 작성해보세요!"
                        disabled={isLoading}
                    />
                    <div className="flex w-full justify-end">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={clsx(
                                'btn-solid btn-mobile-lg md:btn-pc-lg',
                                isLoading && 'btn-loading',
                            )}
                        >
                            {isLoading && <LoopAnimation />}
                            {isLoading ? 'Loading...' : '제출'}
                        </button>
                    </div>
                </form>
            </FormProvider>
        </Modal>
    )
}
