import chalk from "chalk";

export default class Logging {
  public static info = (args: any) =>
    console.log(chalk.blue(`[${new Date().toLocaleString()}][INFO]`), args);
  public static warn = (args: any) =>
    console.log(
      chalk.yellow(`[${new Date().toLocaleString()}][WARNING]`),
      typeof args === "string" ? chalk.yellowBright : args
    );
  public static err = (args: any) =>
    console.log(
      chalk.red(`[${new Date().toLocaleString()}][ERROR]`),
      typeof args === "string" ? chalk.redBright : args
    );
}
