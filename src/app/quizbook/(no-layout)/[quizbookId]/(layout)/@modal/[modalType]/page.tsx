import CreateReviewModal from './_components/CreateReviewModal'
import IncludeGroupModal from './_components/IncludeGroupModal'

export default async function ModalWrapper({
    params,
}: {
    params: Promise<{ modalType: string }>
}) {
    const { modalType } = await params

    switch (modalType) {
        case 'create-review':
            return <CreateReviewModal />
        case 'include-group':
            return <IncludeGroupModal />
        default:
            return null
    }
}
