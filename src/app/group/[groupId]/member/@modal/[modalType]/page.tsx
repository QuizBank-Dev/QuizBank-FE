import InviteModal from './_components/InviteModal'

export default async function ModalWrapper({
    params,
}: {
    params: Promise<{ modalType: string }>
}) {
    const { modalType } = await params

    switch (modalType) {
        case 'invite':
            return <InviteModal />
        default:
            return null
    }
}
