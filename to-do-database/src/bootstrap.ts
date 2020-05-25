import { getRepository } from "typeorm";
import { User } from "./entity/User";

export const Bootstrap=async() => {
   const userRepo=getRepository(User);
   const user=userRepo.create({ 
       firstName:"Lia", 
       lastName:"Scutaru", 
       age: 20,
    });
   await userRepo.save(user).catch((err) => 
   {
      console.log("Error: ", err);
   });
   console.log("New user saved",user);
};