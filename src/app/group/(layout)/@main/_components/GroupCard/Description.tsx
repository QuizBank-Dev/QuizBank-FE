import { useGroupCardContext } from './GroupCardContext'

export default function Description() {
    const { description } = useGroupCardContext()

    if (!description) {
        return null
    }

    return (
        <span className="w-full whitespace-normal break-words text-mobile-body-md font-regular text-gray-500 md:text-pc-body-md">
            {description}
        </span>
    )
}
