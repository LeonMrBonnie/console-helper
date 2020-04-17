import chalk from "chalk";

export const consoleColors = {
    RED: chalk.red,
    LIGHT_RED: chalk.redBright,
    GREEN: chalk.green,
    LIGHT_GREEN: chalk.greenBright,
    YELLOW: chalk.yellow,
    LIGHT_YELLOW: chalk.yellowBright,
    BLUE: chalk.blue,
    LIGHT_BLUE: chalk.blueBright,
    CYAN: chalk.cyan,
    LIGHT_CYAN: chalk.cyanBright,
    MAGENTA: chalk.magenta,
    LIGHT_MAGENTA: chalk.magentaBright,
    WHITE: chalk.white,
    BLACK: chalk.black,
    GREY: chalk.grey
};

export class Console {
    /**
     * Creates a new constole instance
     * @param {String} name Console name
     * @param {chalk.Chalk} color Console color
     */
    constructor(name = "Console", color = chalk.red) {
        this.name = name;
        this.color = color;
    }

    log(...text) {
        console.log(this.color(`[${this.name}]`), ...text);
    }

    warn(...text) {
        console.warn(this.color(`[${this.name}]`), ...text);
    }

    dir(...objects) {
        console.dir(this.color(`[${this.name}]`), ...objects);
    }

    time(label) {
        console.time(`[${this.name}] ${label}`);
    }

    timeEnd(label) {
        console.timeEnd(`[${this.name}] ${label}`);
    }

    timeLog(label) {
        console.timeLog(`[${this.name}] ${label}`);
    }

    trace(...data) {
        console.trace(this.color(`[${this.name}]`), ...data);
    }

    assert(condition, ...text) {
        console.assert(condition, ...text);
    }

    clear() {
        console.clear();
    }

    count(label = this.name) {
        console.count(label);
    }

    countReset(label = this.name) {
        console.countReset(label);
    }

    group(label) {
        console.group(label);
    }

    groupCollapsed(label) {
        console.groupCollapsed(label);
    }

    groupEnd(label) {
        console.groupEnd(label);
    }

    table(...data) {
        console.table(this.color(`[${this.name}]`), ...data);
    }

    debug(...text) {
        console.debug(this.color(`[${this.name}]`), ...text);
    }

    info(...text) {
        console.info(this.color(`[${this.name}]`), ...text);
    }

    dirxml(...objects) {
        console.dirxml(...objects);
    }

    error(...text) {
        console.error(this.color(`[${this.name}]`), ...text);
    }
}