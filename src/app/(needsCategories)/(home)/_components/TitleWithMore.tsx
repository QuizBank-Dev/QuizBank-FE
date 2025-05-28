import Link from 'next/link'
import PlusSvg from '@/assets/svgs/plus.svg'

interface Props {
    title: string
    link: string
}

export default function TitleWithMore({ title, link }: Props) {
    return (
        <h3 className="flex items-center justify-between">
            <p className="text-mobile-title-sm font-extra-bold text-point-900 md:text-pc-title-sm">
                {title}
            </p>
            <Link href={link} className="flex items-center text-point-700">
                <span className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                    더보기
                </span>
                <PlusSvg className="size-5" />
            </Link>
        </h3>
    )
}
