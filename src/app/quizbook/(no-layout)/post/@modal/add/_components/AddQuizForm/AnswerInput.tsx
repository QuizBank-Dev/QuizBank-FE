'use client'

import { QUIZ_TYPE } from '@/constants/quiz'
import { useWatch } from 'react-hook-form'
import {
    LongAnswerInput,
    MultipleAnswerInput,
    OXAnswerInput,
    ShortAnswerInput,
} from './quiz-answer'

export default function AnswerInput() {
    const type = useWatch({ name: 'type' })

    switch (type) {
        case QUIZ_TYPE.OX:
            return <OXAnswerInput />
        case QUIZ_TYPE.MULTIPLE:
            return <MultipleAnswerInput />
        case QUIZ_TYPE.SHORT:
            return <ShortAnswerInput />
        case QUIZ_TYPE.LONG:
            return <LongAnswerInput />
        default:
            return null
    }
}
