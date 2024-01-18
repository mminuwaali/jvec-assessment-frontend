import { useMemo } from 'react'
import {$contact} from './cards'
import { useAppSelector } from '../store'
import { convertArrayToObject } from '../utilities/function'

export default () => {
    const { data, loading } = useAppSelector(state => state.contact)
    const contacts = useMemo(() => convertArrayToObject(data), [data])

    return <div className="w-full flex flex-col gap-2">
        {loading && <div className="w-full flex items-center justify-center flex-none p-4">
            <div className="w-10 aspect-square border-r rounded-full animate-spin" />
        </div>}
        {Object.entries(contacts).map(([key, data]) => <div className="flex flex-col relative gap-4" key={key}>
            <span className="p-4 text-white font-bold text-2xl sticky top-0 bg-black uppercase z-20">{key}</span>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 z-10">
                {data.map((item) => <$contact {...item} key={item.id} />)}
            </div>
        </div>)}
    </div>
}