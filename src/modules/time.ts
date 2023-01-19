import { ITime, ITimeRaw } from './time.interface'
import axios, { AxiosResponse } from 'axios'

export class Time {
    constructor(public city: string) {}

    async getTime(): Promise<ITime | undefined> {
        try {
            const res = await axios.get<ITime | undefined>(`https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/${this.city}`).catch(() => undefined)
            if (res !== undefined && res.data !== undefined) {
                return {
                    date: res.data.date,
                    time: res.data.time,
                    timeZone: res.data.timeZone,
                    dayOfWeek: res.data.dayOfWeek,
                }
            }
            return undefined
        } catch (e) {
            console.log('Error! \n' + e)
        }
    }
}
