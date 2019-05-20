import axios from 'axios'; 

// create() method allows to create a default property 
export default axios.create({
    baseURL: "https://api.unsplash.com", 
    headers: {
        Authorization: 'Client-ID xxxxxxxxxxxxx'
    }
})