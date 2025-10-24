import { tinid } from "@wesleybertipaglia/tinid"

class IdGenerator {
    generate(length: number = 8): string {
        return tinid(length);
    }
}

export const idGenerator = new IdGenerator();