'use client'

import { Modal } from '@/components'
import { useParams } from 'next/navigation'
import { useQRCode } from 'next-qrcode'
import { useRef } from 'react'
import { toast } from 'sonner'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetInviteURL } from '@/hooks/useGetInviteURL'

export default function InviteModal() {
    const { groupId } = useParams()
    const { Image } = useQRCode()
    const containerRef = useRef<HTMLDivElement>(null)
    const qrUrl = useGetInviteURL(groupId as string)

    const handleDownload = () => {
        const imgElement = containerRef.current?.querySelector('img')
        if (!imgElement) return

        const link = document.createElement('a')
        link.href = imgElement.src
        link.download = 'qr-code.png'
        link.click()
    }

    // 복사 버튼 클릭 핸들러
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(qrUrl)
            toast('링크 COPY 완료!')
        } catch (_) {
            toast('링크 COPY 실패!')
        }
    }

    return (
        <Modal title="QR로 그룹 초대" closeOnOverlayClick={true}>
            <div className="flex flex-col items-center gap-4 pt-4">
                <span className="text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
                    (클릭해서 이미지 다운로드 및 공유)
                </span>
                {qrUrl ? (
                    <div
                        onClick={handleDownload}
                        ref={containerRef}
                        className="cursor-pointer border-5 border-point-500"
                    >
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <Image
                            text={qrUrl}
                            options={{
                                errorCorrectionLevel: 'M',
                                margin: 2,
                                scale: 4,
                                width: 256,
                                color: {
                                    dark: '#000000',
                                    light: '#FFFFFF',
                                },
                            }}
                        />
                    </div>
                ) : (
                    <Skeleton className="h-64 w-64 rounded-lg" />
                )}
                <span className="text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
                    또는 링크로 초대
                </span>
                <div className="flex w-full items-center gap-1 rounded-lg border-1 border-point-500 p-2">
                    <span className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
                        {qrUrl}
                    </span>
                    <button
                        onClick={handleCopy}
                        className="btn-solid btn-mobile-lg md:btn-pc-lg"
                    >
                        복사
                    </button>
                </div>
            </div>
        </Modal>
    )
}
