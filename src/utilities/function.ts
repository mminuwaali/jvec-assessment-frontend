export function convertArrayToObject(arr: ContactType[]): { [key: string]: ContactType[] } {
    const result: { [key: string]: ContactType[] } = {}

    arr.forEach(contact => {
        const firstLetter = contact.firstName.charAt(0).toUpperCase()
        if (!result[firstLetter]) result[firstLetter] = []
        result[firstLetter].push(contact)
    })

    // Sort the arrays in alphabetical order
    for (const key in result) {
        result[key] = result[key].sort((a, b) => a.firstName.localeCompare(b.firstName))
    }

    // Sort the object by keys (first letters)
    const sortedResult: { [key: string]: ContactType[] } = {}
    Object.keys(result).sort().forEach(key => {
        sortedResult[key] = result[key]
    })

    return sortedResult
}
