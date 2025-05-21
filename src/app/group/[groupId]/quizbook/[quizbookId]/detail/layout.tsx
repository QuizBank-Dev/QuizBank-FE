export default function GroupQuizbookDetailLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode
    modal: React.ReactNode
}>) {
    return (
        <>
            {/* 컨탠츠 */}
            {children}

            {modal}
        </>
    )
}
