'use client'

import { LoopAnimation, Modal } from '@/components'
import clsx from 'clsx'
import { useState } from 'react'
import { format } from 'date-fns'
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

export default function CheckGroupModal() {
    const [isLoading, setIsLoading] = useState(false)
    const [date, setDate] = useState<Date>(new Date())

    const handleClick = () => {
        // 추후 로직 수정
        setIsLoading(true)
        setTimeout(() => {
            console.log(1)
            setIsLoading(false)
        }, 2000)
    }

    return (
        <Modal
            title="그룹에 추가"
            closeOnOverlayClick={false}
            isFullWith={false}
        >
            <div className="flex flex-col items-center gap-4">
                <div className="flex w-full flex-col items-start gap-1">
                    <label className="text-mobile-body-sm font-regular text-gray-500 md:text-pc-body-sm">
                        문제집 마감일 설정
                    </label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={'outline'}
                                className={cn(
                                    'h-8 w-full justify-start text-left text-mobile-body-sm font-regular md:text-pc-body-sm',
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
                </div>
                <div className="flex w-full flex-col items-center gap-2 rounded-lg border-2 border-gray-200 bg-point-50 p-4 text-mobile-body-md font-semi-bold text-gray-500 md:p-8 md:text-pc-body-md">
                    <span>해당 그룹에 문제집을</span>
                    <span>추가하시겠습니까?</span>
                </div>
                <button
                    disabled={isLoading}
                    className={clsx(
                        'btn-solid btn-mobile-md md:btn-pc-md',
                        isLoading && 'btn-loading',
                    )}
                    onClick={handleClick}
                >
                    {isLoading && <LoopAnimation />}
                    {isLoading ? 'Loading...' : '추가'}
                </button>
            </div>
        </Modal>
    )
}
