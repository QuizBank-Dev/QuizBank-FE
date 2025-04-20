interface Prop {
    children: React.ReactNode
}

export default function Group({ children }: Prop) {
    return (
        <div className="flex w-full flex-col overflow-hidden rounded-lg bg-white">
            {children}
        </div>
    )
}
