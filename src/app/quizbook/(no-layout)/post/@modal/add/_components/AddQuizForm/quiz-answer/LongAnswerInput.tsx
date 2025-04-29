'use client'

import { CustomInput } from '@/components'

export default function LongAnswerInput() {
    return (
        <CustomInput
            id="answer"
            name="answer"
            label="답안"
            area={true}
            placeholder="답안을 입력해주세요."
        />
    )
}
