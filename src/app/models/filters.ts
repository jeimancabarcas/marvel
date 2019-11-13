export class Filters {
  offset: number;
  limit: string;
  ts: string;
  title: string;
  orderBy: string;

  constructor() {
    this.offset = 0;
    this.ts = '1';
    this.title = null;
    this.orderBy = 'focDate';
    this.limit = '5';
  }
}
