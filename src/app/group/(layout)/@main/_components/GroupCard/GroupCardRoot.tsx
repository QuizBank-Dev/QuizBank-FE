import { GroupCard } from '@/types/group'
import { GroupCardContext } from './GroupCardContext'

interface Props {
    data: GroupCard
    children: React.ReactNode
}

export default function GroupCardRoot({ data, children }: Props) {
    return (
        <GroupCardContext.Provider value={data}>
            <article className="flex flex-col gap-2 rounded-lg bg-white px-4 py-4 shadow-point hover:bg-gray-100 md:px-8">
                {children}
            </article>
        </GroupCardContext.Provider>
    )
}
