import GitHubIcon from '@/assets/login-icons/github.svg'
import GoogleIcon from '@/assets/login-icons/google.svg'
import KakaoIcon from '@/assets/login-icons/kakao.svg'
import NaverIcon from '@/assets/login-icons/naver.svg'

export type OAuthProvider = 'github' | 'google' | 'kakao' | 'naver'

export const OAuthIcons: Record<OAuthProvider, React.FC> = {
    github: GitHubIcon,
    google: GoogleIcon,
    kakao: KakaoIcon,
    naver: NaverIcon,
} as const

export const OAuthBgColor: Record<OAuthProvider, string> = {
    github: 'bg-[#24292F]',
    google: 'bg-[#FFFFFF]',
    kakao: 'bg-[#FEE500]',
    naver: 'bg-[#03C75A]',
}
