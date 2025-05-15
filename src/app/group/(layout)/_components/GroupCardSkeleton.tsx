import { Skeleton } from '@/components/ui/skeleton'

export default function GroupCardSkeleton() {
    return (
        <article className="flex flex-col items-start gap-2 rounded-lg bg-white px-4 py-4 shadow-point md:px-8">
            <div className="flex w-full items-center justify-between">
                <Skeleton className="h-5 w-[100px] rounded-lg md:h-7 md:w-[140px]" />
                <Skeleton className="h-5 w-[100px] rounded-lg md:h-7 md:w-[140px]" />
            </div>
            <Skeleton className="h-[18px] w-full rounded-lg md:h-6" />
            <Skeleton className="h-8 w-[85px] rounded-lg" />
        </article>
    )
}
