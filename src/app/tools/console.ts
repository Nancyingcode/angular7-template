const colors = {
    blue: '#007bff',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#e83e8c',
    red: '#dc3545',
    orange: '#fd7e14',
    yellow: '#ffc107',
    green: '#28a745',
    teal: '#20c997',
    cyan: '#17a2b8',
    white: '#fff',
    gray: '#6c757d',
    graydark: '#343a40',
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    info: '#17a2b8',
    warning: '#ffc107',
    danger: '#dc3545',
    light: '#f8f9fa',
    dark: '#343a40',
};

export class Log {
    private static logOn = false;
    private static infoOn = false;
    private static errOn = false;
    private content: string;

    constructor(content: string) {
        this.content = '[' + content + ']';
    }

    log(...obj) {
        if (Log.logOn) {
            console.log('%c' + this.content + obj, 'color:' + colors.blue);
        }
    }

    logger(...obj) {
        if (Log.infoOn) {
            console.log('%c' + this.content + obj, 'color:' + colors.green);
            console.log(obj);
        }
    }

    err(...obj) {
        if (Log.errOn) {
            console.log('%c' + this.content + obj, 'color:' + colors.red);
        }
    }

}
