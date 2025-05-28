import Link from 'next/link'
import { toast } from 'sonner'
import { CarouselItem } from '@/components/ui/carousel'
import { useCurrentUser } from '@/hooks/queries/user'
import Image from 'next/image'

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
        <CarouselItem>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-point-700 sm:aspect-[8/3]">
                {backgroundImage && (
                    <Image
                        className="object-cover object-center"
                        loading="eager"
                        src={backgroundImage}
                        alt="banner-image"
                        fill={true}
                        priority
                    />
                )}
                <div className="absolute top-0 z-10 flex size-full flex-col items-center justify-center gap-7 bg-point-700/50">
                    <p className="text-mobile-title-sm font-semi-bold text-white drop-shadow-[0_0_8px_#271065] md:text-pc-title-sm">
                        {title}
                    </p>
                    <p className="text-mobile-body-md text-white drop-shadow-[0_0_8px_#271065] md:text-pc-body-md">
                        {body}
                    </p>
                    <Link
                        href={link}
                        className="btn-solid btn-mobile-lg border-2 border-transparent bg-point-500/75 duration-200 md:btn-pc-lg hover:border-white hover:bg-point-500/90"
                        onClick={handleCheckIsLoggedIn}
                    >
                        {ctaText}
                    </Link>
                </div>
            </div>
        </CarouselItem>
    )
}
