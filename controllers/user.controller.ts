import { User } from "../models/user.ts";

export class UserController {
  url = "https://jsonplaceholder.typicode.com/users";

  async get(): Promise<Array<User>> {
    const res = await fetch(this.url);
    return await res.json();
  }

  async find(id: number): Promise<User> {
    const url = `${this.url}/${id}`;
    const res = await fetch(url);
    return await res.json();
  }
}
