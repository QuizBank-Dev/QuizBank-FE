export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="no-scrollbar flex h-full flex-col items-center justify-center overflow-auto bg-point-50 text-gray-900">
            {/* 컨탠츠 */}
            {children}
        </div>
    )
}
