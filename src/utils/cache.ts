class Cache<T> {
  private map: Readonly<CacheMap<T>> = new Map();
  private expirationMilliseconds: number;

  public constructor(expirationMilliseconds: number) {
    this.expirationMilliseconds = expirationMilliseconds;
  }

  public set(key: string, value: T) {
    this.map.set(key, { value: structuredClone(value), added: new Date() });
  }

  public get(key: string): T | undefined {
    const cachedValue = this.map.get(key);

    if (cachedValue === undefined) {
      return structuredClone(cachedValue);
    } else if (this.isCacheExpire(cachedValue.added)) {
      this.map.delete(key);

      return undefined;
    } else {
      return cachedValue.value;
    }
  }

  private isCacheExpire(addTime: Date) {
    return (
      new Date().getTime() - addTime.getTime() > this.expirationMilliseconds
    );
  }
}

type CacheMap<T> = Map<string, CacheMapValue<T>>;
type CacheMapValue<T> = { value: T; added: Date };

export default Cache;
