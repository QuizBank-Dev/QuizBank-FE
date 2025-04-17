import BackBtn from './BackBtn'

interface Props {
    title: string
    backBtn?: boolean
    children?: React.ReactNode
}

export default function MobileHeaderRoot({ title, backBtn, children }: Props) {
    return (
        <header className="flex w-full items-center justify-between bg-white p-4 text-gray-900 md:hidden">
            {/* 왼쪽 공간 div */}
            <BackBtn backBtn={backBtn} />
            {/* 중앙 제목 */}
            <h1 className="text-mobile-title-sm font-extra-bold">{title}</h1>
            {/* 오른쪽 공간 div */}
            <div className="w-16">{children}</div>
        </header>
    )
}
