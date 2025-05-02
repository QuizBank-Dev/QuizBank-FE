import { useState } from 'react'
import { toast } from 'sonner'

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
        // TODO 이메일 발송 요청 API 호출
        setIsSending(true)
        const result = await new Promise((resolve) =>
            setTimeout(() => {
                console.log(email)
                resolve('OK')
            }, 2000),
        )
        setIsSending(false)

        if (result === 'OK') {
            setTimer(300)
            toast('인증코드가 전송되었습니다.')
        } else {
            toast('전송 중 오류가 발생했습니다.')
        }
    }

    const verifyCode = async (email: string, code: string) => {
        // TODO 이메일 검증 API 호출
        setIsVerifying(true)
        const result = await new Promise((resolve) =>
            setTimeout(() => {
                console.log(email, code)
                resolve('OK')
            }, 2000),
        )
        setIsVerifying(false)

        if (result === 'OK') {
            setIsVerified(true)
            toast(
                type === 'signup'
                    ? '인증이 완료되었습니다.'
                    : '초기화 비밀번호가 전송되었습니다.',
            )
        } else {
            toast('에러메시지 출력')
        }
    }
    return { isVerified, isVerifying, isSending, timer, sendCode, verifyCode }
}
