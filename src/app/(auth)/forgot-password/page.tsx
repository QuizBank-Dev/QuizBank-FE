import Link from 'next/link'
import CommonPageLayout from '../_components/CommonPageLayout'
import RequestForm from './_components/RequestForm'

export default function Page() {
    return (
        <CommonPageLayout title="비밀번호 재설정">
            <RequestForm />
            <div className="flex flex-col items-center gap-2">
                <p className="text-mobile-body-sm font-regular text-gray-400 md:text-pc-body-sm">
                    비밀번호가 기억나셨나요?{' '}
                    <Link href="/login" className="text-point-500 underline">
                        로그인하기
                    </Link>
                </p>
                <p className="text-mobile-body-sm font-regular text-gray-400 md:text-pc-body-sm">
                    계정이 없으신가요?{' '}
                    <Link href="/signup" className="text-point-500 underline">
                        회원가입하기
                    </Link>
                </p>
            </div>
        </CommonPageLayout>
    )
}
