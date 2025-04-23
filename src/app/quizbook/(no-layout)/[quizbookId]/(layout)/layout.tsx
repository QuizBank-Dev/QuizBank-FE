export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div>문제집 상세 페이지 레이아웃</div>
            <main>{children}</main>
        </>
    )
}
