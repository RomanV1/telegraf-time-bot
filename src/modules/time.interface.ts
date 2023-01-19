export interface ITimeRaw {
    year: number
    month: number
    day: number
    hour: number
    minute: number
    seconds: number
    milliSeconds: number
    dateTime: string
    date: string
    time: string
    timeZone: string
    dayOfWeek: string
    dstActive: boolean
}

export interface ITime {
    date: string
    time: string
    timeZone: string
    dayOfWeek: string
}
