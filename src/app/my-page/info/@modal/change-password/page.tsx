import { Modal } from '@/components'
import ChangePasswordForm from './_components/ChangePasswordForm'

export default function ChangePasswordModal() {
    return (
        <Modal title="비밀번호 변경">
            <ChangePasswordForm />
        </Modal>
    )
}
