class API {
    constructor(){
        this.baseUrl = "https://jsonplaceholder.typicode.com/";
    }

    usersEndpoint()
    {
        return this.baseUrl+'users';    
    }

    todoEndpoint()
    {
        return this.baseUrl+'todos';
    }

    photosEndpoint()
    {
        return this.baseUrl+'photos';
    }

    albumsEndpoint()
    {
        return this.baseUrl+'albums';
    }

    commentsEndpoint()
    {
        return this.baseUrl+'comments';
    }

    postEndpoint()
    {
        return this.baseUrl+'posts';
    }
}

export default API;