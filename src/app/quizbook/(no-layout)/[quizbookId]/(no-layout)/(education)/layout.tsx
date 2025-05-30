import MobileHeader from '@/components/MobileHeader'
import { getQuizbookMeta } from '@/lib/api/quizbook'
import { notFound } from 'next/navigation'
import {
    DesktopHeader,
    DesktopMenu,
    MobileMenu,
    StudyMenuBtn,
} from '../_components/layout'
import React from 'react'

interface Props {
    params: Promise<{ quizbookId: string }>
    modal: React.ReactNode
    children: React.ReactNode
}

export default async function Layout({ params, modal, children }: Props) {
    const { quizbookId } = await params

    const quizbookMeta = await getQuizbookMeta(quizbookId).catch(() => null)

    if (!quizbookMeta) return notFound()

    return (
        <div className="flex h-full flex-col">
            {/* 데스크탑 헤더 */}
            <DesktopHeader
                title={quizbookMeta.title}
                category={quizbookMeta.category}
                path={`/quizbook/${quizbookId}/info`}
            />

            {/* 모바일 헤더 */}
            <MobileHeader
                path={`/quizbook/${quizbookId}/info`}
                backBtn={true}
                title={quizbookMeta.title}
            >
                <StudyMenuBtn />
            </MobileHeader>
            <main className="flex flex-1 justify-center overflow-hidden">
                <div className="flex w-full max-w-[1024px] flex-1 flex-col md:flex-row">
                    <div className="relative flex min-h-0 flex-1 flex-col bg-white">
                        {children}
                    </div>
                    <DesktopMenu quizbookId={quizbookMeta._id} />
                </div>
            </main>

            {/* 모바일 메뉴 */}
            <MobileMenu quizbookMeta={quizbookMeta} />
            {modal}
        </div>
    )
}
