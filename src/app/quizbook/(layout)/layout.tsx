export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div>문제집 리스트 레이아웃</div>
            <main>{children}</main>
        </>
    )
}
