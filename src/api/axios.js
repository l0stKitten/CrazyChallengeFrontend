import axios from "axios";
import { PORTBACKEND } from "../config";

const instance = axios.create({
  baseURL: PORTBACKEND,
  withCredentials: true,
});

export default instance;  