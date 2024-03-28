export const fetchData = async <T,>(url: string): Promise<T | undefined> => {
    try {
        const data = await fetch(url, {
            method: "GET",
        });
        return await data.json()
    } catch (e) {
        console.log(e)
        return undefined
    }
}