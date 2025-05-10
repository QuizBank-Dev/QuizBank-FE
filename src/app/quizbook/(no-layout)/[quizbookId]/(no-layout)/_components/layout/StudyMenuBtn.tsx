'use client'

import HambergerSvg from '@/assets/svgs/hamburger.svg'
import useMobileMenuStore from '@/store/quizbook/mobileMenuStore'

export default function StudyMenuBtn() {
    const { openMenu } = useMobileMenuStore()

    return (
        <div className="flex items-center justify-end">
            <HambergerSvg
                onClick={openMenu}
                className="size-6 cursor-pointer"
            />
        </div>
    )
}
