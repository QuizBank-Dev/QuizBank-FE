'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Modal } from '@/components'
import { withdraw } from '@/lib/api/auth'
import { useQueryClient } from '@tanstack/react-query'
import { QueryKey } from '@/constants/common/queryKey'

export default function WithdrawModal() {
    const router = useRouter()
    const queryClient = useQueryClient()

    const handleWithdraw = () => {
        withdraw().then(() => {
            queryClient
                .invalidateQueries({
                    queryKey: QueryKey.user.DEFAULT,
                    exact: true,
                })
                .then(() => {
                    router.push('/login')
                    toast('탈퇴가 완료되었습니다.')
                })
        })
    }

    return (
        <Modal title="회원 탈퇴">
            <div className="flex flex-col gap-4">
                <div className="rounded-lg bg-point-50 p-4 text-mobile-body-md md:text-pc-body-md">
                    <p>
                        탈퇴 시 작성한 문제집, 댓글 등 은 서비스 콘텐츠로
                        간주되어 애플리케이션에 계속 남게되고, 학습 기록,
                        즐겨찾기 등 개인화된 데이터는{' '}
                        <span className="font-semi-bold text-danger-400">
                            모두 삭제
                        </span>
                        되어 복구가 불가능합니다.
                    </p>
                    <p className="font-semi-bold text-point-900">
                        탈퇴 진행 전, 필요한 정보는 반드시 별도로 백업해주시기
                        바랍니다.
                    </p>
                </div>
                <p className="text-center text-mobile-body-lg md:text-pc-body-lg">
                    회원을 탈퇴하시겠습니까?
                </p>
                <div className="flex w-full justify-center gap-2">
                    <button
                        className="btn-outline btn-mobile-md md:btn-pc-md"
                        onClick={router.back}
                    >
                        취소
                    </button>
                    <button
                        className="btn-solid btn-mobile-md md:btn-pc-md"
                        onClick={handleWithdraw}
                    >
                        확인
                    </button>
                </div>
            </div>
        </Modal>
    )
}
