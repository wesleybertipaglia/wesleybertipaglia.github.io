import { tinid } from '@wesleybertipaglia/tinid';

class IdUtils {
  static generate(length: number = 8): string {
    return tinid(length);
  }
}

let id = IdUtils.generate(8);
console.log(id);
