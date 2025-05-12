'use client'

import SendIcon from '@/assets/svgs/send.svg'

export default function ChatInput() {
    return (
        <div className="relative w-full">
            <input
                type="text"
                className="input-solid input-mobile w-full pr-10 font-regular text-gray-900 md:input-pc"
            />
            <SendIcon className="absolute right-3 top-1/2 size-5 -translate-y-1/2 cursor-pointer text-gray-400 md:size-6" />
        </div>
    )
}
