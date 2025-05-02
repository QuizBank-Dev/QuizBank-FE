import CategorySelect from './_components/CategorySelect'

export default function Page() {
    return (
        <div className="flex w-full max-w-[450px] flex-col items-center gap-8 p-8 md:p-12">
            <div className="text-center">
                <h2 className="mb-2 text-mobile-title-sm font-extra-bold text-point-900 md:text-pc-title-sm">
                    선호하는 카테고리를 선택해주세요
                </h2>
                <p className="text-mobile-body-sm text-gray-500 md:text-pc-body-sm">
                    선호하는 카테고리를{' '}
                    <span className="text-point-500">1가지 이상</span>{' '}
                    선택해주세요.
                </p>
            </div>
            <CategorySelect />
        </div>
    )
}
