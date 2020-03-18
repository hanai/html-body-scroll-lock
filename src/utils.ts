export const isServer = () => typeof window === 'undefined'

export const $ = (selector: string) => <HTMLElement>document.querySelector(selector)

export interface DetectOSResult { ios: boolean, android: boolean }
export const detectOS = (ua?: string): DetectOSResult => {
    ua = ua || navigator.userAgent
    const ipad = /(iPad).*OS\s([\d_]+)/.test(ua)
    const iphone = !ipad && /(iPhone\sOS)\s([\d_]+)/.test(ua)
    const android = /(Android);?[\s/]+([\d.]+)?/.test(ua)
    const ios = iphone || ipad

    return { ios, android }
}

export function getEventListenerOptions (options: AddEventListenerOptions): AddEventListenerOptions | boolean {
    if (isServer()) return false

    if (!options) {
        throw new Error('options must be provided')
    }
    let isSupportOptions = false
    const listenerOptions = <AddEventListenerOptions>{
        get passive () {
            isSupportOptions = true
            return
        },
    }

    const noop = () => {}
    const testEvent = '__BSL_TEST_PASSIVE__'
    window.addEventListener(testEvent, noop, listenerOptions)
    window.removeEventListener(testEvent, noop, listenerOptions)

    const { capture } = options

    return isSupportOptions
        ? options
        : typeof capture !== 'undefined'
            ? capture
            : false
}
