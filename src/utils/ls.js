const ls = {
    s(key, data) {
        window.localStorage.setItem(key, JSON.stringify(data))
    },
    g(key) {
        return JSON.parse(window.localStorage.getItem(key))
    },
    r(key) {
        window.localStorage.removeItem(key)
    }
}
export default ls