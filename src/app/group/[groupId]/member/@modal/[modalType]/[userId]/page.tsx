import ChangeOwnerModal from './_components/ChangeOwnerModal'
import DeleteMemberModal from './_components/DeleteMemberModal'

export default async function ModalWrapper({
    params,
}: {
    params: Promise<{ modalType: string }>
}) {
    const { modalType } = await params

    switch (modalType) {
        case 'change-owner':
            return <ChangeOwnerModal />
        case 'delete-member':
            return <DeleteMemberModal />
        // case 'accept-apply':
        //     return <AcceptApplyModal />
        // case 'reject-apply':
        //     return <RejectApplyModal />
        default:
            return null
    }
}
