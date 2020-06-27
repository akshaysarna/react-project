import axios from "axios";

const baseURL = "http://localhost:3001/gates/1.0";
const userName = "webApp";
const password = "password@123";

const auth = Buffer.from(`${userName}:${password}`, "utf-8").toString("base64");

const Authorization = `Basic ${auth}`;

export default axios.create({
  baseURL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization,
  },
});
