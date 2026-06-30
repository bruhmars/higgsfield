import express from "express"; 
import { prisma } from "./db"; 
const app = express(); 
import z, { success } from "zod"; 
import type { password } from "bun";
import { CreateUserSchema } from "./types"; 

app.post("/api/vi/signup", async (req, res) => {
    const {success, data} = CreateUserSchema.safeParse(req.body); 
    if(!success){
        res.status(411).json({
            msg:"incorrect creds"
        })
        return; 
    }

    const user = await prisma.user.create({
        data:{
            username: req.body.username, 
            password: req.body.password
        }
    })
    res.json({
        id: user.id
    }); 
});

app.post("/api/vi/signin", (req, res) => {

})

//avatar
app.post("/api/vi/avatar", (req, res) => {

})

app.get("/api/vi/avatar/:avatarId", (req, res) => {

})

app.get("/api/vi/avatars", (req, res) => {

})

//video
app.post("/api/vi/video", (req, res) => {

})

app.get("/api/vi/video/:videoId", (req, res) => {

})

app.get("/api/vi/videos", (req, res) => {

})

//user
app.get("/api/vi/me", (req, res) => {

})

//models
app.get("/api/vi/models", (req, res) => {

})

const PORT = process.env.PORT || 3000; 

app.listen(3000); 