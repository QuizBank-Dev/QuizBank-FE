import { redirect } from 'next/navigation'
import { invitation } from '@/lib/api/group'
import { getServerToken } from '@/utils/getServerToken'

export default async function Page({
    searchParams,
}: {
    searchParams?: Promise<{ [key: string]: string | undefined }>
}) {
    const cookieToken = await getServerToken()
    const token = (await searchParams)?.token

    // 로그인 하지 않은 사용자의 경우 로그인 페이지로 redirect
    if (!cookieToken) {
        return redirect(`/login?token=${token}`)
    }

    // token이 있는 경우 가입 처리 후 그룹 페이지로 이동
    if (token) {
        await invitation(token, cookieToken).catch((error) => {
            console.error(error.response.data.message)
        })
        return redirect('/group')
    }

    return redirect('/')
}
