export class Log {
    private static turnOn = true;
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    log(...obj) {
        if (Log.turnOn) {
            console.log('[' + this.content + ']' + obj);
        }
    }

    err(...obj) {
        if (Log.turnOn) {
            console.error('[' + this.content + ']' + obj);
        }
    }
}
