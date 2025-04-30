import DeleteReviewModal from './_components/DeleteReviewModal'
import EditReviewModal from './_components/EditReviewModal'

export default async function ModalWithIdWrapper({
    params,
}: {
    params: Promise<{ modalType: string }>
}) {
    const { modalType } = await params

    switch (modalType) {
        case 'edit-review':
            return <EditReviewModal />
        case 'delete-review':
            return <DeleteReviewModal />
        default:
            return null
    }
}
