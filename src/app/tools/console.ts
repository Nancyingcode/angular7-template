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
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  info: '#17a2b8',
  warning: '#ffc107',
  danger: '#dc3545',
  // light: '#f8f9fa',
  dark: '#343a40'
};

export class Log {
  private static logOn = false;
  private static infoOn = true;
  private static errOn = false;
  private content: string;

  constructor(content: string) {
    this.content = `[${content}]`;
  }

  // tslint:disable-next-line:typedef
  log(...obj): void {
    if (Log.logOn) {
      console.log(`%c${this.content}${obj}`, `color:${colors.blue}`);
      console.log(obj);
    }
  }

  // tslint:disable-next-line:typedef
  logger(...obj): void  {
    if (Log.infoOn) {
      console.log(`%c${this.content}${obj}`, `color:${this.chooseColor()}`);
      // console.log(obj);
    }
  }

  // tslint:disable-next-line:typedef
  err(...obj): void  {
    if (Log.errOn) {
      console.log(`%c${this.content}${obj}`, `color:${colors.red}`);
    }
  }

  chooseColor(): void  {
    const colorNames = Object.keys(colors);
    const length     = colorNames.length;
    const num        = Math.floor(Math.random() * length);
    const key        = colorNames[num];
    return colors[key];
  }
  // getHotelList() {
  //     const idList = [1, 2, 3, 4, 5];
  //     map(id => { post(id) });
  // }

  // post(id: number) {
  //     const body = {
  //         hotelId: id
  //     }
  //  }
}
