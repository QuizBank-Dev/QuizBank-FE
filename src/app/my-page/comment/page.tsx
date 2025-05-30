import CommonPageLayout from '../_components/CommonPageLayout'
import CommentList from './_components/CommentList'

export default function Page() {
    return (
        <CommonPageLayout title="내가 작성한 댓글">
            <CommentList />
        </CommonPageLayout>
    )
}
