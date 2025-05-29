import { Modal } from '@/components'
import ConfirmUI from './_components/ComfirmUI'
import { getQuizbookMeta } from '@/lib/api/quizbook'
import { notFound } from 'next/navigation'

interface Props {
    params: Promise<{ quizbookId: string }>
}

export default async function Page({ params }: Props) {
    const { quizbookId } = await params

    const quizbookMeta = await getQuizbookMeta(quizbookId).catch(() => null)
    if (!quizbookMeta) return notFound()

    return (
        <Modal title="제출 확인">
            <ConfirmUI quizbookMeta={quizbookMeta} />
        </Modal>
    )
}
