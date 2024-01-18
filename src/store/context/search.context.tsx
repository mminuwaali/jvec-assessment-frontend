import { Dispatch, useContext, createContext, SetStateAction, useState, ReactNode } from 'react';

const SearchContext = createContext<null | { q: string; setQ: Dispatch<SetStateAction<string>> }>(null);

export function useSearch() {
    const context = useContext(SearchContext);
    return context!;
};

export default (props: { children: ReactNode }) => {
    const [q, setQ] = useState('');
    return <SearchContext.Provider value={{ q, setQ }} {...props} />
}