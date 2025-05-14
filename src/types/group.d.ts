export interface GroupCard {
    _id: string
    name: string
    description: string
    admin: {
        _id: string
        nickname: string
        profileImg: string
    }
    memberCount: number
    chatRoom?: string
}

export interface Group {
    _id: string
    name: string
    description: string
    admin: {
        _id: string
        nickname: string
        profileImg: string
    }
    memberList: {
        _id: string
        nickname: string
        profileImg: string
        email: string
    }[]
    applyingUserList: {
        _id: string
        nickname: string
        profileImg: string
        email: string
    }[]
    chatRoom: string
    createdAt: string
}

export interface GroupInviteUrl {
    url: stirng
}

export interface CreateGroupResponse {
    _id: stirng
}

export interface GroupList {
    list: GroupCard[]
    nextCursor: string | null
    leftCount: number
}
