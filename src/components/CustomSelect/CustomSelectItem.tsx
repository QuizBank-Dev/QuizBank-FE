'use client'

import { SelectItem } from '../ui/select'

interface Props {
    value: string
    children: React.ReactNode
}

export default function CustomSelectItem({ value, children }: Props) {
    return <SelectItem value={value}>{children}</SelectItem>
}
