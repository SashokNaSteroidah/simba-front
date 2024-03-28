export const deleteData = async <T,>(url: string): Promise<T | undefined> => {
    const headers = new Headers({
        'Accept': 'application/json',
        "Content-Type": "application/json",
    })
    try {
        const data = await fetch(url, {
            method: "DELETE",
            mode: "cors",
            credentials: "same-origin",
            headers: headers,
        });
        return await data.json()
    } catch (e) {
        console.log(e)
        return undefined
    }
}