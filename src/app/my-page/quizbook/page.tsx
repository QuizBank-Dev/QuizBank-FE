import CommonPageLayout from '../_components/CommonPageLayout'
import QuizbookList from './_components/QuizbookList'

export default function Page() {
    return (
        <CommonPageLayout title="내가 만든 문제집">
            <QuizbookList />
        </CommonPageLayout>
    )
}
