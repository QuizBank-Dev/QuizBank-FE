import { redirect } from 'next/navigation'
import { getServerToken } from '@/utils/getServerToken'
import { getCurrentUser } from '@/lib/api/user'

export default async function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const token = await getServerToken()
    const result = await getCurrentUser(token)

    if (result && result.category.length === 0) {
        return redirect('/category')
    }

    return children
}
