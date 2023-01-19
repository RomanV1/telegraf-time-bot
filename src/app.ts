import { Context, Telegraf } from 'telegraf'
import { IConfig } from './config/config.interface'
import { ConfigService } from './config/config.service'
import { Command } from './commands/command.class'
import { StartCommand } from './commands/start.command'

class Bot {
    bot: Telegraf<Context>
    commands: Command[] = []

    constructor(private readonly configService: IConfig) {
        this.bot = new Telegraf<Context>(this.configService.get('TOKEN'))
    }

    run() {
        this.commands = [new StartCommand(this.bot)]
        for (let command of this.commands) {
            command.handle()
        }
        this.bot.launch()
    }
}

const bot = new Bot(new ConfigService())
bot.run()
