import QuizbookCard from './QuizbookCard'
import { Quizbook } from '@/types/quizbook'

const quizbookList: Quizbook[] = [
    {
        _id: '67fdc5ac1e49a2871aeb6657',
        title: '면접 대비 CS 문제집',
        description: '면접 대비하는 문제입니다.',
        category: '웹 개발',
        quizList: [
            '67fdc5ac1e49a2871aeb6651',
            '67fdc5ac1e49a2871aeb6652',
            '67fdc5ac1e49a2871aeb6653',
        ],
        solvedCount: 3,
        solvedScore: 40,
        reviewCount: 1,
        reviewScore: 4,
        reviewRating: 4,
        author: {
            _id: '67e2e20e5872c849d5dd4b86',
            nickname: 'test계정',
            profileImg: '',
        },
        createdAt: '2025-04-15T02:34:20.113Z',
        updatedAt: '2025-04-15T08:24:44.912Z',
        isLiked: false,
        isStudied: true,
    },
    {
        _id: '67fdc5ac1e49a2871aeb6658',
        title: '면접 대비 CS 문제집',
        description: '면접 대비하는 문제입니다.',
        category: '웹 개발',
        quizList: [
            '67fdc5ac1e49a2871aeb6651',
            '67fdc5ac1e49a2871aeb6652',
            '67fdc5ac1e49a2871aeb6653',
        ],
        solvedCount: 3,
        solvedScore: 40,
        reviewCount: 1,
        reviewScore: 4,
        reviewRating: 4,
        author: {
            _id: '67e2e20e5872c849d5dd4b86',
            nickname: 'test계정',
            profileImg: '',
        },
        createdAt: '2025-04-15T02:34:20.113Z',
        updatedAt: '2025-04-15T08:24:44.912Z',
        isLiked: false,
        isStudied: false,
    },
    {
        _id: '67fdc5ac1e49a2871aeb6659',
        title: '면접 대비 CS 문제집',
        description: '면접 대비하는 문제입니다.',
        category: '웹 개발',
        quizList: [
            '67fdc5ac1e49a2871aeb6651',
            '67fdc5ac1e49a2871aeb6652',
            '67fdc5ac1e49a2871aeb6653',
        ],
        solvedCount: 3,
        solvedScore: 40,
        reviewCount: 1,
        reviewScore: 4,
        reviewRating: 4,
        author: {
            _id: '67e2e20e5872c849d5dd4b86',
            nickname: 'test계정',
            profileImg: '',
        },
        createdAt: '2025-04-15T02:34:20.113Z',
        updatedAt: '2025-04-15T08:24:44.912Z',
        isLiked: true,
        isStudied: true,
    },
    {
        _id: '67fdc5ac1e49a2871aeb6660',
        title: '면접 대비 CS 문제집',
        description: '면접 대비하는 문제입니다.',
        category: '웹 개발',
        quizList: [
            '67fdc5ac1e49a2871aeb6651',
            '67fdc5ac1e49a2871aeb6652',
            '67fdc5ac1e49a2871aeb6653',
        ],
        solvedCount: 3,
        solvedScore: 40,
        reviewCount: 1,
        reviewScore: 4,
        reviewRating: 4,
        author: {
            _id: '67e2e20e5872c849d5dd4b86',
            nickname: 'test계정',
            profileImg: '',
        },
        createdAt: '2025-04-15T02:34:20.113Z',
        updatedAt: '2025-04-15T08:24:44.912Z',
        isLiked: true,
        isStudied: false,
    },
]

export default function QuizbookList() {
    return (
        <div className="flex flex-col gap-2">
            <p className="text-mobile-body-md font-semi-bold text-gray-600 md:text-pc-body-md">
                생성한 문제집 (
                <span className="text-point-500">{quizbookList.length}</span>)
            </p>
            <div className="flex flex-col gap-4">
                {quizbookList.map((quizbook) => (
                    <QuizbookCard key={`other_${quizbook._id}`} {...quizbook} />
                ))}
            </div>
        </div>
    )
}
