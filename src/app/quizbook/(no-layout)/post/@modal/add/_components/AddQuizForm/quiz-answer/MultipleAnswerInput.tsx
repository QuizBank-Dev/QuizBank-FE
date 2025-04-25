'use client'

import { CustomInput } from '@/components'
import { CustomSelect } from '@/components'
import { useFieldArray, useFormContext } from 'react-hook-form'

export default function MultipleAnswerInput() {
    const { control, watch } = useFormContext()
    const { fields } = useFieldArray({ control, name: 'optionList' })

    return (
        <>
            {/* 선택지 영역 */}
            <fieldset className="mb-[12px]">
                <legend className="mb-[4px] text-mobile-body-sm font-regular text-gray-500 md:text-pc-body-sm">
                    선택지
                </legend>
                <div className="flex flex-col items-center justify-center gap-[4px] rounded-md border-2 border-gray-200 px-[8px] pb-[16px] pt-[28px] md:px-[16px]">
                    {fields.map((field, idx) => (
                        <CustomInput
                            key={field.id}
                            id={`optionList.${idx}`}
                            name={`optionList.${idx}`}
                            placeholder={`선택지 ${idx + 1}`}
                        />
                    ))}
                </div>
            </fieldset>

            {/* 답안 영역 */}
            <CustomSelect
                id="answer"
                name="answer"
                placeholder="정답을 선택해주세요."
                label="정답"
            >
                {fields.map((field, idx) => {
                    const option = watch(`optionList.${idx}`)

                    if (!option) return null

                    return (
                        <CustomSelect.Item key={field.id} value={option}>
                            선택지 {idx + 1}
                        </CustomSelect.Item>
                    )
                })}
            </CustomSelect>
        </>
    )
}
