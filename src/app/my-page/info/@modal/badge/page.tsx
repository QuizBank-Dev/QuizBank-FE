import { Modal } from '@/components'
import BadgeList from './_components/BadgeList'

export default function BadgeModal() {
    return (
        <Modal title="보유 뱃지" className="custom-scrollbar max-h-96">
            <BadgeList />
        </Modal>
    )
}
