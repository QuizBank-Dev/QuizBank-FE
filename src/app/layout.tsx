import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const pretendard = localFont({
    src: '../static/fonts/PretendardVariable.woff2',
    display: 'swap',
    weight: '45 920',
    variable: '--font-pretendard',
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ko" className={`${pretendard.variable}`}>
            <body className={pretendard.className}>{children}</body>
        </html>
    )
}
