'use client'

import LeftArrowIcon from '@/assets/svgs/left-arrow.svg'

import Link from 'next/link'
import StudyStatus, { Props } from './StudyStatus'
import TitleSection from './TitleSection'
import EndDateSection from './EndDateSection'
import { useGroupQuizbookQuery } from '@/hooks/queries/group-quizbook'
import { useParams } from 'next/navigation'

const scoreList = [
    {
        score: 100,
        owner: {
            _id: '1',
            nickname: '쭈니1',
            profileImg: '',
        },
    },
    {
        score: 50,
        owner: {
            _id: '2',
            nickname: '쭈니2',
            profileImg: '',
        },
    },
    {
        score: 30,
        owner: {
            _id: '3',
            nickname: '쭈니3',
            profileImg: '',
        },
    },
]

const memberList = [
    {
        _id: '1',
        nickname: '쭈니1',
        profileImg: '',
    },
    {
        _id: '2',
        nickname: '쭈니2',
        profileImg: '',
    },
    {
        _id: '3',
        nickname: '쭈니3',
        profileImg: '',
    },
    {
        _id: '4',
        nickname: '쭈니4',
        profileImg: '',
    },
    {
        _id: '5',
        nickname: '쭈니5',
        profileImg: '',
    },
]

const quizList: Props['quizList'][number][] = [
    {
        _id: '1',
        type: '주관식',
        question: 'test1',
        optionList: [],
        answer: 'test',
    },
    {
        _id: '2',
        type: '서술형',
        question: 'test2',
        answer: 'test',
        optionList: [],
    },
    {
        _id: '3',
        type: '주관식',
        question: 'test3',
        optionList: [],
        answer: 'test',
    },
]

export default function Detail() {
    const { groupId, quizbookId } = useParams()

    const { data: infoData } = useGroupQuizbookQuery(
        groupId as string,
        quizbookId as string,
    )

    return (
        <div className="flex w-full flex-col gap-8 px-4 pb-4 md:px-0 md:pb-0">
            <div className="hidden items-center gap-4 md:flex">
                <Link href={`/group/${groupId}/quizbook`}>
                    <LeftArrowIcon className="size-6 cursor-pointer" />
                </Link>
                <h2 className="hidden text-pc-title-sm font-extra-bold text-point-900 md:block">
                    선정 문제집 활동 상세
                </h2>
            </div>
            <TitleSection
                _id={infoData?.quizbook._id}
                title={infoData?.quizbook.title || '--'}
                category={infoData?.quizbook.category || '--'}
            />
            <EndDateSection
                endDate={infoData?.endedAt}
                groupId={groupId as string}
                quizbookId={quizbookId as string}
            />
            <StudyStatus
                scoreList={scoreList}
                memberList={memberList}
                quizList={quizList}
            />
        </div>
    )
}
