export const isObjectEmpty = (obj: any) => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
