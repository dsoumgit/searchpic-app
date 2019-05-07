import axios from 'axios'; 

// create() method allows to create a default property 
export default axios.create({
    baseURL: "https://api.unsplash.com", 
    headers: {
        Authorization: 'Client-ID ad115e975b326d3d134da8baf3d3bc9699a4358de29b3b37180533a2a19e45d3'
    }
})