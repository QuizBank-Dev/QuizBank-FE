import { NextRequest, NextResponse } from 'next/server'

// 로그인을 하지 않아도 접속 가능한 paths
const PUBLIC_PATHS = [
    '/',
    '/login',
    '/signup',
    '/quizbook',
    /^\/quizbook\/[^/]+$/,
    // TODO 개발용 전체 path 포함
    /^\/[^/]*/,
]

// 로그인이 필요없는 paths
const SKIP_AUTH_PATHS = ['/login', '/signup']

function isMatchedPath(pathname: string, paths: (string | RegExp)[]) {
    return paths.some((path) =>
        typeof path === 'string' ? path === pathname : path.test(pathname),
    )
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // access_token, refresh_token 있는지 확인
    const token =
        request.cookies.get('access_token')?.value ||
        request.cookies.get('refresh_token')?.value

    const isLoggedIn = !!token
    const isPublicPath = isMatchedPath(pathname, PUBLIC_PATHS)
    const isSkipAuthPath = isMatchedPath(pathname, SKIP_AUTH_PATHS)

    // 로그인 상태로 인증 필요 없는 path 접근
    if (isLoggedIn && isSkipAuthPath) {
        return NextResponse.redirect(new URL('/', request.url))
    }

    // 로그인 되지 않은 상태로 로그인이 필요한 path 접근
    if (!isLoggedIn && !isPublicPath) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    // 정적 리소스 검사 제외
    matcher: ['/((?!api|_next|favicon.ico).*)'],
}
