import Axios from "axios";

let baseURL="http://localhost:8080/";

const getData=()=> {
    return Axios.get(baseURL);
}

const postData=(newRecord)=> {
  return Axios.post(baseURL, newRecord);
}

const update=(newData)=> {
  return Axios.put(baseURL+ newData._id, newData);
}

const deleteData=(del)=> {
  return Axios.delete(baseURL + del);
}

export { getData, postData, deleteData, update };