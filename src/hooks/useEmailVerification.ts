import { useState } from 'react'
import { toast } from 'sonner'
import { generateCode, verification } from '@/lib/api/auth'

type SenderType = 'signup' | 'reset-password'

export function useEmailVerification(type: SenderType = 'signup') {
    // 이메일 검증 여부
    const [isVerified, setIsVerified] = useState(false)
    // 인증코드 검증중인지 확인
    const [isVerifying, setIsVerifying] = useState(false)
    // 이메일 전송중인지 확인
    const [isSending, setIsSending] = useState(false)
    const [timer, setTimer] = useState(0)

    const sendCode = async (email: string) => {
        setIsSending(true)
        generateCode(email)
            .then((response) => {
                if (response.data.message === 'ok') {
                    setTimer(300)
                    toast('인증코드가 전송되었습니다.')
                } else {
                    toast('전송 중 오류가 발생했습니다.')
                }
            })
            .finally(() => {
                setIsSending(false)
            })
    }

    const verifyCode = async (email: string, code: string) => {
        setIsVerifying(true)
        verification(email, code)
            .then((response) => {
                if (response.data.message === 'ok') {
                    setIsVerified(true)
                    toast(
                        type === 'signup'
                            ? '인증이 완료되었습니다.'
                            : '초기화 비밀번호가 전송되었습니다.',
                    )
                } else {
                    toast('인증 처리중 오류가 발생했습니다.')
                }
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setIsVerifying(false)
            })
    }
    return { isVerified, isVerifying, isSending, timer, sendCode, verifyCode }
}
