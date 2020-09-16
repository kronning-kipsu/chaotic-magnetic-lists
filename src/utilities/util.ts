/**
 * Util function that returns a Promise that resolves to true after `duration` milliseconds.
 *
 * @param duration Time in ms
 */
export const slowly = (duration: number = 500): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, duration)
    })
}
