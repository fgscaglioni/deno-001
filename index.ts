import { writeFileStrSync } from "https://deno.land/std/fs/mod.ts";
import { UserController } from "./controllers/user.controller.ts";

console.log("Running...");

const userController = new UserController();
const users = await userController.get();
const user = await userController.find(1);
const fileContent = users
  .map((user) => `${user.id},"${user.name}","${user.email}","${user.username}"`)
  .join("\n");

writeFileStrSync("./users.csv", fileContent);

console.log("Done");
