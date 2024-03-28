export const patchData = async <T,>(body: unknown, url: string): Promise<T | undefined> => {
    const headers = new Headers({
        'Accept': 'application/json',
        "Content-Type": "application/json",
    })
    try {
        const data = await fetch(url, {
            method: "PATCH",
            mode: "cors",
            credentials: "same-origin",
            headers: headers,
            body: JSON.stringify(body)
        });
        return await data.json()
    } catch (e) {
        console.log(e)
        return undefined
    }
}