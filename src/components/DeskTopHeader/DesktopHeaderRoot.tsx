import Link from 'next/link'
import Logo from '@/assets/svgs/logo.svg'

interface Prop {
    children: React.ReactNode
}

export default function DesktopHeaderRoot({ children }: Prop) {
    return (
        <header className="hidden w-full justify-center bg-white p-[10px] text-gray-900 md:flex">
            <div className="flex w-full max-w-[1024px] items-center gap-4">
                <Link href="/" className="flex items-center">
                    <Logo className="mr-2 h-[54px] w-[50px]" />
                    <h1 className="text-pc-title-md font-extra-bold text-point-500">
                        Quiz Bank
                    </h1>
                </Link>
                <div className="flex flex-1 justify-between">{children}</div>
            </div>
        </header>
    )
}
