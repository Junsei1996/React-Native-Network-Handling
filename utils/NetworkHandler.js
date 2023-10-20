import NetworkResponse from "../data/NetworkResponse";

const NetworkHandler = (function() {

let instance;

function createInstance(){
    return {

        url_endpoint : "https://reactnative.dev/",

        async getMovies() {
            return fetch(this.url_endpoint+'movies.json')
                .then(response => response.json())
                .then(json => {
                    const movies = json.movies;
                    return new NetworkResponse(movies, null, "200");
                })
                .catch(error => {
                    console.error(error);
                    return new NetworkResponse(null, error, "400");
                });
        }
    }
}

return{
    getInstance : function() {
        if(!instance){
            instance = createInstance();
        }
        return instance;
    }
}

})();

export default NetworkHandler;