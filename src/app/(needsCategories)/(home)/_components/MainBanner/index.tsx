'use client'

import Autoplay from 'embla-carousel-autoplay'
import { mainBannerList } from '@/constants/mainBanner'
import { Carousel, CarouselContent } from '@/components/ui/carousel'
import BannerItem from './BannerItem'

export default function MainBanner() {
    return (
        <Carousel
            className="w-full select-none"
            opts={{
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 5000,
                    stopOnFocusIn: true,
                }),
            ]}
        >
            <CarouselContent>
                {mainBannerList.map((bannerItem, idx) => (
                    <BannerItem key={`main_banner--${idx}`} {...bannerItem} />
                ))}
            </CarouselContent>
        </Carousel>
    )
}
