import { getQuizbookMeta } from '@/lib/api/quizbook'
import { notFound } from 'next/navigation'
import { StudyUI } from './_components'

interface Props {
    params: Promise<{ quizbookId: string }>
}

export default async function Page({ params }: Props) {
    const { quizbookId } = await params

    const quizbookMeta = await getQuizbookMeta(quizbookId).catch(() => null)

    if (!quizbookMeta) return notFound()

    return (
        <div className="no-scrollbar flex flex-1 flex-col overflow-y-auto">
            <StudyUI quizbookMeta={quizbookMeta} />
        </div>
    )
}
