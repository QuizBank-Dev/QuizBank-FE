import Link from 'next/link'
import { toast } from 'sonner'
import { CarouselItem } from '@/components/ui/carousel'
import { useCurrentUser } from '@/hooks/queries/user'

interface Props {
    title: string
    body: string
    ctaText: string
    link: string
    backgroundImage?: string
    loginRequired?: boolean
}

export default function BannerItem({
    title,
    body,
    ctaText,
    link,
    backgroundImage,
    loginRequired,
}: Props) {
    const { data: user } = useCurrentUser()
    const handleCheckIsLoggedIn = (event: React.MouseEvent) => {
        if (!user && !!loginRequired) {
            event.preventDefault()
            toast('로그인이 필요한 서비스입니다.')
        }
    }

    return (
        <CarouselItem
            className="aspect-[4/3] w-full bg-point-700 pl-0 sm:aspect-[8/3]"
            style={{
                backgroundImage: backgroundImage
                    ? `url("${backgroundImage}")`
                    : 'none',
            }}
        >
            <div className="flex size-full flex-col items-center justify-center gap-7 bg-point-700/40">
                <p className="text-mobile-title-sm font-semi-bold text-white drop-shadow-[0_0_8px_#271065] md:text-pc-title-sm">
                    {title}
                </p>
                <p className="text-mobile-body-md text-white drop-shadow-[0_0_8px_#271065] md:text-pc-body-md">
                    {body}
                </p>
                <Link
                    href={link}
                    className="btn-solid btn-mobile-lg md:btn-pc-lg"
                    onClick={handleCheckIsLoggedIn}
                >
                    {ctaText}
                </Link>
            </div>
        </CarouselItem>
    )
}
