import InviteModal from './_components/InviteModal'
import WithdrawModal from './_components/WithdrawModal'

export default async function ModalWrapper({
    params,
}: {
    params: Promise<{ modalType: string }>
}) {
    const { modalType } = await params

    switch (modalType) {
        case 'invite':
            return <InviteModal />
        case 'withdraw':
            return <WithdrawModal />
        default:
            return null
    }
}
