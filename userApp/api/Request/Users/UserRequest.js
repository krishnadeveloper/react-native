import Api from "../../api.class";
import Axios from "axios";

class UserRequest extends Api{
    allUsers(){
        return Axios.get(this.usersEndpoint());
    }
}

export default new UserRequest();