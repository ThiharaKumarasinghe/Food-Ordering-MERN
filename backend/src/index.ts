import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';
const PORT = 3000

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
    console.log("MongoDB Database is Conected!")

}
)

const app = express();
app.use(express.json());
app.use(cors());

app.get('/test',async (req:Request, res:Response)=>{
    res.status(200).json({ message: 'Hello, World!' });
})


app.listen(PORT, () => {
    console.log(`Server started on localhost:${PORT}`)
  })
  