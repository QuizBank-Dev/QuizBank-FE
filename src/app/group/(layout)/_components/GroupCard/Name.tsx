import { useGroupCardContext } from './GroupCardContext'

export default function Name() {
    const { name } = useGroupCardContext()

    if (!name) {
        return null
    }

    return (
        <h3 className="cursor-pointer text-mobile-body-lg font-semi-bold md:text-pc-body-lg">
            {name}
        </h3>
    )
}
