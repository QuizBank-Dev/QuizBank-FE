import { useGroupCardContext } from './GroupCardContext'

export default function Description() {
    const { description } = useGroupCardContext()

    if (!description) {
        return null
    }

    return (
        <span className="line-clamp-2 w-full whitespace-pre-line text-mobile-body-md font-regular text-gray-500 md:text-pc-body-md">
            {description}
        </span>
    )
}
