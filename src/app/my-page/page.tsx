import { redirect } from 'next/navigation'

export default function Page() {
    // my-page로 접근 시 내 정보(info) 페이지로 이동
    redirect('/my-page/info')
}
