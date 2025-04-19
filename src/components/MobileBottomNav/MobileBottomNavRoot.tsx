'use client'

interface Prop {
    children: React.ReactNode
}

export default function MobileBottomNavRoot({ children }: Prop) {
    // 추후 인증 로직 및 컨택스트 추가

    return (
        <nav className="flex w-full justify-center border-t-[0.25px] border-point-100 bg-transparent text-point-100 md:hidden">
            {children}
        </nav>
    )
}
