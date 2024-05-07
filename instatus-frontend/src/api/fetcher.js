export const fetcher = url => {
    const finalUrl = `http://213.199.50.252:8000${url}`
    return fetch(finalUrl).then(r => r.json())
}