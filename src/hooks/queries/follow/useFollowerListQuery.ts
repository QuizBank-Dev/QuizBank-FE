import { useQuery } from '@tanstack/react-query'
import { QueryKey } from '@/constants/common/queryKey'
import { getAllFollowerList } from '@/lib/api/follow'

export const useFollowerListQuery = () => {
    const { data, ...query } = useQuery({
        queryKey: QueryKey.follower.DEFAULT,
        queryFn: getAllFollowerList,
    })
    return {
        data: {
            follower: data?.follower || [],
            following: data?.following || [],
        },
        ...query,
    }
}
