interface Props {
    gap: number
    children: React.ReactNode
}

export default function SidebarRoot({ gap, children }: Props) {
    return (
        <nav className={`flex w-full flex-col gap-[${gap}px]`}>{children}</nav>
    )
}
