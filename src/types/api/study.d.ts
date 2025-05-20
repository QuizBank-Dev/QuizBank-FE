/**
 * 답안 제출 Body 타입
 */
export interface PostStudyBody {
    answerList: {
        quizId: string
        answer: string
    }[]
}
