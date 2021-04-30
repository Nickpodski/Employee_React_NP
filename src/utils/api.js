import axios from "axios";

//gets all users

export default {
    getEmployee:function() {
        return axios.get('https://randomuser.me/api/?results=50&inc=picture,name,email,phone,dob');
    }
}