import axios from "axios";

const artService = axios.create({
    baseURL: "https://api.artic.edu/api/v1/",
    headers: {
        Authorization: "Bearer ......"
    },
    timeout: 3600,
    
})

export { artService }