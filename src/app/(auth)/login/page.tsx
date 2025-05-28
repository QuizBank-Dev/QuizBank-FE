import Link from 'next/link'
import clsx from 'clsx'
import CommonPageLayout from '../_components/CommonPageLayout'
import LoginForm from './_components/LoginForm'
import OAuthLogin from './_components/OAuthLogin'

export default function Page() {
    return (
        <CommonPageLayout title="로그인">
            <LoginForm />
            <Link
                href="/forgot-password"
                className="text-mobile-body-sm font-regular text-point-500 underline md:text-pc-body-sm"
            >
                비밀번호를 잊으셨나요?
            </Link>
            <p className="text-mobile-body-sm font-regular text-gray-400 md:text-pc-body-sm">
                아직 계정이 없으신가요?{' '}
                <Link href="/signup" className="text-point-500 underline">
                    회원가입하기
                </Link>
            </p>
            <div
                className={clsx(
                    'flex w-full items-center gap-2 text-mobile-body-sm font-regular text-gray-300 md:text-pc-body-sm',
                    'before:block before:h-px before:flex-1 before:bg-gray-200',
                    'after:block after:h-px after:flex-1 after:bg-gray-200',
                )}
            >
                또는
            </div>
            <OAuthLogin />
        </CommonPageLayout>
    )
}
