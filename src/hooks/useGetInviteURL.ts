import { getInviteURL } from '@/lib/api/group'
import { useEffect, useState } from 'react'

/**
 * 그룹 초대 url 조회 커스텀 훅
 */
export const useGetInviteURL = (groupId: string) => {
    const [qrUrl, setQRUel] = useState<string>('')
    useEffect(() => {
        async function fetchData() {
            const res = await getInviteURL(groupId as string)
            setQRUel(res.url)
        }
        fetchData()
    }, [groupId])

    return qrUrl
}
