/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
constructor(private prisma : PrismaService){
    
}
    signup(){
        return {msg:"I have signed up"}
    }
    
    signin(){
        return {msg:"I have signed in"}
    }
}