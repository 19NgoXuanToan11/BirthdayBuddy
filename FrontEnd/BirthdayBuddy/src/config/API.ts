import axios from "axios";
import { toast } from "react-toastify"

const getAllUsers = async () => {
    const res = await axios.get(`http://localhost:8080/public/course/view`)
}