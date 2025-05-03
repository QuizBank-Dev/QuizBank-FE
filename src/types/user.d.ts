export interface User {
    _id: string
    nickname: string
    profileImg: string
    introduce?: string
    experience: number
}

/**
 * 현재 로그인한 사용자
 */
export interface CurrentUser extends User {
    category: string[]
    isOAuthAccount: boolean
}

/**
 * 다른 사용자
 */
export interface OtherUser extends User {
    follower: string[]
}

/**
 * 팔로워
 */
export type Follower = Pick<User, '_id' | 'nickname' | 'profileImg'>
