import { SparklesIcon } from '@heroicons/react/outline'
export default function Feed() {
    return (
        <div className={"xl:ml-[370px] border-l border-r xl:min-w-[600px] sm:ml-[73px] flex-grow max-w-xl"}>
            <div className="flex py-2 px-3 sticky top-0 z-50 bg-white ">
                <h2 className="font-bold text-xl">Home</h2>
                <div className="flex items-center ml-auto">
                    <SparklesIcon className="h-7 w-7 text-blue-400" />
                </div>
            </div>
        </div>
    )
}