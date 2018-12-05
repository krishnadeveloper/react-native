import Api from "../../api.class";
import Axios from "axios";

class PostRequest extends Api{
    getPost(){
        return Axios.get(this.postEndpoint());
    }
}

export default new PostRequest();