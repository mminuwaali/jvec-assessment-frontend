import { useMemo } from 'react'
import $contact from './cards/contact'
import { useAppSelector } from '../store'
import { useLocation } from 'react-router-dom'
import { useSearch } from '../store/context/search.context'
import { convertArrayToObject } from '../utilities/function'

export default () => {
    const { q } = useSearch()
    const { hash } = useLocation()
    const { data, loading } = useAppSelector(state => state.contact)

    const filteredContacts = useMemo(() => {
        if (!q) return data

        // Filter data based on the search query (q)
        const filteredData = data.filter(contact =>
            contact.firstName.toLowerCase().startsWith(q.toLowerCase()) ||
            contact.lastName.toLowerCase().startsWith(q.toLowerCase()) ||
            contact.phoneNumber.includes(q)
        )
        return filteredData
    }, [q, data])

    const contacts = useMemo(() => convertArrayToObject(filteredContacts), [q, filteredContacts])

    return <div className="w-full flex flex-col gap-2">
        {!hash && loading && <div className="w-full flex items-center justify-center flex-none p-4">
            <div className="w-10 aspect-square border-r rounded-full animate-spin" />
        </div>}

        {data.length == 0 || Object.values(contacts).length == 0 && <div className="w-full flex items-center justify-center flex-none p-4">
            <span className="text-center text-white text-lg">No contacts</span>
        </div>}
        {Object.entries(contacts).map(([key, data]) => <div className="flex flex-col relative gap-4" key={key}>
            <span className="p-4 text-white font-bold text-2xl sticky top-0 bg-black uppercase z-20">{key}</span>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 z-10">
                {data.map((item) => <$contact {...item} key={item.id} />)}
            </div>
        </div>)}
    </div>
}