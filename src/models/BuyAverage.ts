export default class BuyAverage {
  private _total: number;
  private _size: number;

  constructor(total: number, size: number) {
    this._total = total;
    this._size = size;
  }

  get size(): number {
    return this._size;
  }

  get total(): number {
    return this._total;
  }

  get average(): number {
    if (this._size === 0) {
      return 0;
    } else {
      return this._total / this._size;
    }
  }

  clone(): BuyAverage {
    return new BuyAverage(this._total, this._size);
  }

  add(value: number): BuyAverage {
    return new BuyAverage(this._total + value, this._size + 1);
  }

  remove(value: number): BuyAverage {
    return new BuyAverage(this.average * (this.size - 1), this._size - 1);
  }
}