'use client'

import { useEffect, useState } from 'react'
import { format, parseISO } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { ko } from 'date-fns/locale'

export default function EndDateEdit({
    endDate,
}: {
    endDate: string | undefined
}) {
    const [date, setDate] = useState<Date>(
        endDate ? parseISO(endDate) : new Date(),
    )

    useEffect(() => {
        if (endDate) setDate(parseISO(endDate))
    }, [endDate])

    return (
        <div className="flex flex-1 items-center gap-2 md:gap-4">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={'outline'}
                        className={cn(
                            'h-8 flex-1 justify-start text-left text-mobile-body-sm font-regular md:text-pc-body-sm',
                            !date && 'text-muted-foreground',
                        )}
                    >
                        <CalendarIcon />
                        {format(date, 'PPP', { locale: ko })}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(selectedDate) => {
                            if (selectedDate) setDate(selectedDate)
                        }}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
            <button className="btn-solid btn-mobile-sm md:btn-pc-sm">
                적용
            </button>
        </div>
    )
}
