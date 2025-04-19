import MobileHeader from '@/components/MobileHeader'
import GroupCreateForm from './_components/GroupCreateForm'

export default function GroupCreatePage() {
    return (
        <>
            {/* 모바일 전용 헤더 */}
            <MobileHeader title="그룹 생성" backBtn>
                <MobileHeader.UserMenu />
            </MobileHeader>
            <main className="flex w-full flex-1 items-center justify-center overflow-auto p-4">
                <div className="flex w-full max-w-[450px] flex-col items-center gap-4 rounded-lg bg-white p-4 shadow-point md:gap-8 md:p-8">
                    <h2 className="text-mobile-title-sm font-extra-bold text-point-900 md:text-pc-title-sm">
                        그룹 생성하기
                    </h2>
                    <GroupCreateForm />
                </div>
            </main>
        </>
    )
}
