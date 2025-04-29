import { Modal } from '@/components'
import { AddQuizForm } from './_components'

export default function Page() {
    return (
        <Modal title="퀴즈 추가" closeOnOverlayClick={true}>
            <AddQuizForm />
        </Modal>
    )
}
