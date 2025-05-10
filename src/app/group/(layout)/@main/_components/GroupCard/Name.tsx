import Link from 'next/link'
import { useGroupCardContext } from './GroupCardContext'

export default function Name() {
    const { name, _id } = useGroupCardContext()

    if (!name) {
        return null
    }

    return (
        <h3 className="cursor-pointer text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
            <Link href={`/group/${_id}/info`}>{name}</Link>
        </h3>
    )
}
