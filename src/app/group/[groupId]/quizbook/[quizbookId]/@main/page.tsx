import MobileHeader from '@/components/MobileHeader'
import BackBtn from './_components/BackBtn'
import TitleSection from './_components/TitleSection'
import EndDateSection from './_components/EndDateSection'
import StudyStatus, { Props } from './_components/StudyStatus'

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

export default async function GroupQuizbookDetailPage({
    params,
}: Readonly<{
    params: Promise<{ groupId: string; quizbookId: string }>
}>) {
    const { groupId, quizbookId } = await params

    return (
        <>
            {/* 모바일 전용 헤더 */}
            <MobileHeader title="선정 문제집 활동 상세" backBtn />

            {/* 컨탠츠 */}
            <main className="no-scrollbar flex w-full flex-1 flex-col items-center overflow-auto md:px-4">
                <div className="flex w-full flex-col gap-8 px-4 pb-4 md:px-0 md:pb-0">
                    <div className="hidden items-center gap-4 md:flex">
                        <BackBtn />
                        <h2 className="hidden text-pc-title-sm font-extra-bold text-point-900 md:block">
                            선정 문제집 활동 상세
                        </h2>
                    </div>
                    <TitleSection
                        _id="555"
                        title="프론트엔드 CS 면접 기초 문제 모음"
                        category="카테고리"
                    />
                    <EndDateSection
                        endDate="2025-03-21"
                        groupId={groupId}
                        quizbookId={quizbookId}
                    />
                    <StudyStatus
                        scoreList={scoreList}
                        memberList={memberList}
                        quizList={quizList}
                    />
                </div>
            </main>
        </>
    )
}
