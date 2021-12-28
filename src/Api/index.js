import axios from "axios";

export default {
  GetRequest(url, callback, fail) {
    axios.get(url).then(callback).catch(fail);
  },

  PostRequest(url, payload, callback, fail) {
    axios.post(url, payload).then(callback).catch(fail);
  },

  DeleteRequest(url, callback, fail) {
    axios.delete(url).then(callback).catch(fail);
  },

  PutRequest(url, payload, callback, fail) {
    axios.put(url, payload).then(callback).catch(fail);
  },
};