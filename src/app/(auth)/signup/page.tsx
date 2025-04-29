import Link from 'next/link'
import CommonPageLayout from '../_components/CommonPageLayout'
import SignupForm from './_components/SignupForm'

export default function Page() {
    return (
        <CommonPageLayout title="회원가입">
            <SignupForm />
            <p className="text-mobile-body-sm font-regular text-gray-400 md:text-pc-body-sm">
                이미 계정이 있으신가요?{' '}
                <Link href="/login" className="text-point-500 underline">
                    로그인하기
                </Link>
            </p>
        </CommonPageLayout>
    )
}
