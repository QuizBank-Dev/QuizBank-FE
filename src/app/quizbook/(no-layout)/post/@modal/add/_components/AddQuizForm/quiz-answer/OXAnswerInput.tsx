'use client'

import CustomSelect from '@/components/CustomSelect'

export default function OXAnswerInput() {
    return (
        <CustomSelect
            id="answer"
            name="answer"
            placeholder="정답을 선택해주세요."
            label="정답"
        >
            <CustomSelect.Item value="O">O</CustomSelect.Item>
            <CustomSelect.Item value="X">X</CustomSelect.Item>
        </CustomSelect>
    )
}
