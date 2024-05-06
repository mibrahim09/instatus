export const fetcher = url => {
    const finalUrl = `http://localhost:8000${url}`
    return fetch(finalUrl).then(r => r.json())
}