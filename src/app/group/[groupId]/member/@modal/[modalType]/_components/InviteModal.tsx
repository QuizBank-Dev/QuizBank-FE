'use client'

import { Modal } from '@/components'
import { useParams } from 'next/navigation'
import { useQRCode } from 'next-qrcode'

export default function InviteModal() {
    const params = useParams()
    const { Canvas } = useQRCode()

    const handleDownload = () => {
        const canvasElement = document.querySelector(
            'canvas',
        ) as HTMLCanvasElement
        if (!canvasElement) return

        const dataURL = canvasElement
            .toDataURL('image/png')
            .replace('image/png', 'image/octet-stream')

        const link = document.createElement('a')
        link.href = dataURL
        link.download = 'qr-code.png'
        link.click()
    }

    return (
        <Modal title="QR로 그룹 초대" closeOnOverlayClick={true}>
            <div className="flex flex-col items-center gap-4 pt-4">
                <span className="text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
                    (클릭해서 이미지 다운로드 및 공유)
                </span>
                <div
                    onClick={handleDownload}
                    className="cursor-pointer border-5 border-point-500"
                >
                    <Canvas
                        text={`https://quizbank.com/ABCDEFGHIJK`}
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
                <span className="text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
                    또는 링크로 초대
                </span>
                <div className="flex w-full items-center rounded-lg border-1 border-point-500 p-2">
                    <p className="flex-1 break-all text-mobile-body-lg font-semi-bold md:text-pc-body-lg">{`https://quizbank.com/ABCDEFGHIJK`}</p>
                    <button className="btn-solid btn-mobile-lg md:btn-pc-lg">
                        복사
                    </button>
                </div>
            </div>
        </Modal>
    )
}
