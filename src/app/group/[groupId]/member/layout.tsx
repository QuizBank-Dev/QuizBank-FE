export default function GroupMemberLayout({
    main,
    modal,
}: Readonly<{
    main: React.ReactNode
    modal: React.ReactNode
}>) {
    return (
        <>
            {/* 컨탠츠 */}
            {main}

            {modal}
        </>
    )
}
