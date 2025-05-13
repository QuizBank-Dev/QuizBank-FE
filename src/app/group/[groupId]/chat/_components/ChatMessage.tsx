import { ProfileImage } from '@/components'
import { ChatMessageType } from '@/types/chat'
import { useRouter } from 'next/navigation'

export default function ChatMessage({ data }: ChatMessageType) {
    const router = useRouter()

    return (
        <article className="flex w-full flex-col p-[10px]">
            <div className="flex w-full items-center justify-start gap-2 md:gap-4">
                <div
                    className="flex cursor-pointer items-center gap-2 md:gap-4"
                    onClick={() => router.push(`/user/${data.author._id}`)}
                >
                    <ProfileImage
                        size={32}
                        profileImg={data.author.profileImg}
                    />
                    <span className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                        {data.author.nickname}
                    </span>
                </div>
                <span className="text-mobile-caption font-regular text-gray-400 md:text-pc-caption">
                    {data.createdAt}
                </span>
            </div>
            <span className="w-full whitespace-pre-wrap break-all pl-10 text-mobile-body-md font-regular md:pl-12 md:text-pc-body-md">
                {data.content}
            </span>
        </article>
    )
}
