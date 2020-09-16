export default class LocalStorageService {
    public clear(): void {
        window.localStorage.clear()
    }

    public setItem(key: string, value: string): void {
        window.localStorage.setItem(key, value)
    }

    public getItem(key: string): string | null {
        return window.localStorage.getItem(key)
    }

    public removeItem(key: string): void {
        window.localStorage.removeItem(key)
    }
}
