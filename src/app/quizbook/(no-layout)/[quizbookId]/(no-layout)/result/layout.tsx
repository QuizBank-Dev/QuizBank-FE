import { getQuizbookMeta } from '@/lib/api/quizbook'
import { notFound } from 'next/navigation'
import { DesktopHeader } from '../_components/layout'
import MobileHeader from '@/components/MobileHeader'
import { ToSolutionBtn } from './_components'

interface Props {
    params: Promise<{ quizbookId: string }>
    children: React.ReactNode
}

export default async function Layout({ params, children }: Props) {
    const { quizbookId } = await params

    const quizbookMeta = await getQuizbookMeta(quizbookId).catch(() => null)
    if (!quizbookMeta) return notFound()

    return (
        <div className="flex h-full flex-col">
            <DesktopHeader
                title={quizbookMeta.title}
                category={quizbookMeta.category}
                isRightBtn={true}
                path={`/quizbook/${quizbookId}/info`}
            />
            <MobileHeader
                path={`/quizbook/${quizbookId}/info`}
                backBtn={true}
                title={quizbookMeta.title}
            >
                <ToSolutionBtn />
            </MobileHeader>
            <main className="mx-auto w-full max-w-[1024px] flex-1">
                {children}
            </main>
        </div>
    )
}
