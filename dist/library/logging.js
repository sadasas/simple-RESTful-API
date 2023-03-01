import chalk from "chalk";
export default class Logging {
    static info = (args) => console.log(chalk.blue(`[${new Date().toLocaleString()}][INFO]`), args);
    static warn = (args) => console.log(chalk.yellow(`[${new Date().toLocaleString()}][WARNING]`), typeof args === "string" ? chalk.yellowBright : args);
    static err = (args) => console.log(chalk.red(`[${new Date().toLocaleString()}][ERROR]`), typeof args === "string" ? chalk.redBright : args);
}
