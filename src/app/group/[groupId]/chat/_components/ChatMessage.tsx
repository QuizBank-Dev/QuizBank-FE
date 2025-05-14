import { ProfileImage } from '@/components'
import { ChatMessageType } from '@/types/chat'
import { Group } from '@/types/group'
import { extractKSTDateOnly } from '@/utils/date/dateOnly'
import Link from 'next/link'

export default function ChatMessage({
    chatData,
    userData,
    my,
}: {
    chatData: ChatMessageType
    userData: Group['memberList'][number]
    my: boolean
}) {
    return (
        <article className="flex w-full flex-col p-[10px]">
            <div className="flex w-full items-center justify-start gap-2 md:gap-4">
                <Link
                    className="flex cursor-pointer items-center gap-2 md:gap-4"
                    href={my ? '/my-page/info' : `/user/${userData._id}`}
                >
                    <ProfileImage size={32} profileImg={userData.profileImg} />
                    <span className="text-mobile-body-md font-semi-bold md:text-pc-body-md">
                        {userData.nickname}
                    </span>
                </Link>
                <span className="text-mobile-caption font-regular text-gray-400 md:text-pc-caption">
                    {extractKSTDateOnly(chatData.createdAt)}
                </span>
            </div>
            <span className="w-full whitespace-pre-wrap break-all pl-10 text-mobile-body-md font-regular md:pl-12 md:text-pc-body-md">
                {chatData.content}
            </span>
        </article>
    )
}
