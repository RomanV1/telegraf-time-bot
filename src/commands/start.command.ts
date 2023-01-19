import { Command } from './command.class'
import { Context, Telegraf } from 'telegraf'
import { Time } from '../modules/time'

export class StartCommand extends Command {
    constructor(bot: Telegraf) {
        super(bot)
    }

    handle(): void {
        this.bot.start((ctx) => {
            ctx.reply('Привет, чтоб узнать время, введи город')
        })

        this.bot.on('message', async (ctx) => {
            if (!('text' in ctx.message)) return

            const time = await new Time(ctx.message.text).getTime()
            if (time === undefined) {
                ctx.reply('Введенный город не найден')
                return
            }
            ctx.reply(`Дата: ${time.date} \nВремя: ${time.time} \nГород: ${time.timeZone} \nДень недели: ${time.dayOfWeek}`)
        })
    }
}
