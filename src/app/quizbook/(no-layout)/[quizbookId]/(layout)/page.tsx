import { redirect } from 'next/navigation'

interface Props {
    params: Promise<{ quizbookId: string }>
}

export default async function Page({ params }: Props) {
    const { quizbookId } = await params

    redirect(`/quizbook/${quizbookId}/info`)
}
