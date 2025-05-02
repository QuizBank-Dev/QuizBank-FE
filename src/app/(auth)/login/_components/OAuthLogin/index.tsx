import OAuthLoginButton from './OAuthLoginButton'

export default function OAuthLogin() {
    return (
        <div className="flex w-full justify-center gap-4">
            <OAuthLoginButton provider="github" title="GitHub 로그인" />
            <OAuthLoginButton provider="google" title="Google 로그인" />
            <OAuthLoginButton provider="kakao" title="Kakao 로그인" />
            <OAuthLoginButton provider="naver" title="Naver 로그인" />
        </div>
    )
}
