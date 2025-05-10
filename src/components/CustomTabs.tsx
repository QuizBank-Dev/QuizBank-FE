import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Props extends React.ComponentProps<typeof Tabs> {
    tabList: {
        value: string
        text: string
    }[]
}

export default function CustomTabs({ tabList, ...props }: Props) {
    return (
        <Tabs {...props}>
            <TabsList className="grid h-auto w-full grid-cols-2 bg-white p-2 text-mobile-body-lg text-point-500">
                {tabList.map((tab) => (
                    <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="py-3 data-[state=active]:bg-point-500 data-[state=active]:text-white"
                    >
                        {tab.text}
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    )
}
