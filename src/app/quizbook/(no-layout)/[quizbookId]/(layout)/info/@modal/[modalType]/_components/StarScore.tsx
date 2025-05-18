import StarFullIcon from '@/assets/svgs/star-full.svg'
import StarEmptyIcon from '@/assets/svgs/star-empty.svg'

interface Props {
    score: number
    setScore: React.Dispatch<React.SetStateAction<number>>
}

export default function StarScore({ score, setScore }: Props) {
    const onClick = (num: number) => {
        setScore(num)
    }

    return (
        <div className="flex cursor-pointer">
            <StarFullIcon
                className="size-9 text-[#FFCC00]"
                onClick={() => onClick(1)}
            />
            {score < 2 ? (
                <StarEmptyIcon
                    className="size-9 text-[#FFCC00]"
                    onClick={() => onClick(2)}
                />
            ) : (
                <StarFullIcon
                    className="size-9 text-[#FFCC00]"
                    onClick={() => onClick(2)}
                />
            )}
            {score < 3 ? (
                <StarEmptyIcon
                    className="size-9 text-[#FFCC00]"
                    onClick={() => onClick(3)}
                />
            ) : (
                <StarFullIcon
                    className="size-9 text-[#FFCC00]"
                    onClick={() => onClick(3)}
                />
            )}
            {score < 4 ? (
                <StarEmptyIcon
                    className="size-9 text-[#FFCC00]"
                    onClick={() => onClick(4)}
                />
            ) : (
                <StarFullIcon
                    className="size-9 text-[#FFCC00]"
                    onClick={() => onClick(4)}
                />
            )}
            {score < 5 ? (
                <StarEmptyIcon
                    className="size-9 text-[#FFCC00]"
                    onClick={() => onClick(5)}
                />
            ) : (
                <StarFullIcon
                    className="size-9 text-[#FFCC00]"
                    onClick={() => onClick(5)}
                />
            )}
        </div>
    )
}
