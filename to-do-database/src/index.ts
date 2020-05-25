import "reflect-metadata";
import {createConnection, getRepository } from "typeorm";
import {User} from "./entity/User";
import { Bootstrap } from "./bootstrap";

createConnection()
  .then(async connection => {
await Bootstrap().catch((err) => {
    console.log(err);
});
})
.catch(error => console.log(error));
