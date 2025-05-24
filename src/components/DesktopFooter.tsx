import Link from 'next/link'
import GitHubIcon from '@/assets/login-icons/github.svg'
import { developers } from '@/constants/developers'
import Logo from '@/assets/svgs/logo.svg'

export default function DesktopFooter() {
    return (
        <footer className="hidden w-full justify-center bg-gray-800 px-4 py-8 text-pc-body-sm font-semi-bold text-gray-400 md:flex">
            <div className="flex w-full max-w-[1024px] items-end justify-between">
                <section className="flex gap-16">
                    <article className="flex flex-col gap-8">
                        <Link href="/" className="flex items-center gap-4">
                            <Logo className="h-[55px] w-[50px]" />
                            <div className="flex flex-col">
                                <span className="text-pc-title-md font-extra-bold leading-none text-point-500">
                                    Quiz Bank
                                </span>
                                <span className="text-pc-body-md text-gray-200">
                                    퀴즈로 배우고 성장하는 공간
                                </span>
                            </div>
                        </Link>
                        <div className="flex flex-col gap-1">
                            <span>Contact Us : {process.env.TEAM_EMAIL}</span>
                            <span>
                                © 2025 Team QuizBank. All rights reserved.
                            </span>
                        </div>
                    </article>
                    <article className="flex flex-col gap-3">
                        <span className="text-pc-body-md text-gray-200">
                            문제집
                        </span>
                        <Link href={'/quizbook'}>문제집 검색</Link>
                        <Link href={'/quizbook/post'}>문제집 생성</Link>
                    </article>
                    <article className="flex flex-col gap-3">
                        <span className="text-pc-body-md text-gray-200">
                            그룹
                        </span>
                        <Link href={'/group'}>그룹 검색</Link>
                        <Link href={'/group/new'}>그룹 생성</Link>
                    </article>
                    <article className="flex flex-col gap-3">
                        <span className="text-pc-body-md text-gray-200">
                            Developers
                        </span>
                        {developers.map((member) => (
                            <Link key={member.link} href={member.link}>
                                {member.nickname}
                            </Link>
                        ))}
                    </article>
                </section>
                <Link href={'https://github.com/QuizBank-Dev'}>
                    <GitHubIcon />
                </Link>
            </div>
        </footer>
    )
}
