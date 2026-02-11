import { GoogleGenerativeAI } from "@google/generative-ai";
import {GEMINI_API_KEY} from "./constants"

const genAI = new GoogleGenerativeAI(
  GEMINI_API_KEY
);
//console.log(process.env.REACT_APP_GEMINI_KEY);



export default genAI;