import ExitBtn from './ExitBtn'

interface Props {
    title: string
    category: string
}

export default function DesktopHeader({ title, category }: Props) {
    return (
        <div className="hidden items-center justify-center bg-white md:flex">
            <div className="flex w-full max-w-[1024px] items-center gap-[16px] px-[32px] py-[16px]">
                <ExitBtn />
                <h1 className="flex flex-1 items-center gap-[8px] text-pc-body-lg font-semi-bold">
                    <span className="line-clamp-1 text-pc-title-sm font-extra-bold">
                        {title}
                    </span>
                    <span className="shrink-0">|</span>
                    <span className="shrink-0 text-point-500">{category}</span>
                </h1>
            </div>
        </div>
    )
}
