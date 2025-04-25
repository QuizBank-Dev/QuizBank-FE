'use client'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useState } from 'react'
import StudyStats from './StudyStats'
import MemberAnswer from './MemberAnswer'

export interface Props {
    scoreList: {
        score: number
        owner: {
            _id: string
            nickname: string
            profileImg: string
        }
    }[]
    memberList: {
        _id: string
        nickname: string
        profileImg: string
    }[]
    quizList: {
        _id: string
        type: '객관식' | '주관식' | '서술형' | 'ox'
        question: string
        optionList: string[]
    }[]
}

export default function StudyStatus({
    scoreList,
    memberList,
    quizList,
}: Props) {
    const [activeTab, setActiveTab] = useState('stats')

    return (
        <section className="flex flex-col gap-4 font-semi-bold md:gap-8">
            <nav className="flex flex-col gap-2 md:hidden">
                <span className="text-mobile-body-md text-gray-600">
                    그룹 활동 내용
                </span>
                <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                >
                    <TabsList className="grid h-auto w-full grid-cols-2 bg-white p-2 text-mobile-body-lg text-point-500">
                        <TabsTrigger
                            className="py-3 data-[state=active]:bg-point-500 data-[state=active]:text-white"
                            value="stats"
                        >
                            학습 현황
                        </TabsTrigger>
                        <TabsTrigger
                            className="py-3 data-[state=active]:bg-point-500 data-[state=active]:text-white"
                            value="answer"
                        >
                            그룹원 답안
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </nav>
            <StudyStats
                scoreList={scoreList}
                memberList={memberList}
                activeTab={activeTab}
            />
            <MemberAnswer quizList={quizList} activeTab={activeTab} />
        </section>
    )
}
