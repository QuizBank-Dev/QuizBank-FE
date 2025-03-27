import { useQuizbookCardContext } from './QuizbookCardRoot'

export default function Description() {
    const { description } = useQuizbookCardContext()
    return (
        <div className="line-clamp-2 text-mobile-body-md font-regular text-gray-600 md:text-pc-body-md">
            {description}
        </div>
    )
}
