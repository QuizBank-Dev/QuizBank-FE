import { Skeleton } from '@/components/ui/skeleton'

export default function CommentItemSkeleton() {
    return (
        <div className="rounded-lg bg-white p-4 shadow-point">
            <div className="flex flex-col gap-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="line-clamp-3 h-4 w-32" />
            </div>
            <div className="mt-2 flex items-center justify-between text-mobile-body-sm md:text-pc-body-sm">
                <Skeleton className="h-3 w-12" />
            </div>
        </div>
    )
}
