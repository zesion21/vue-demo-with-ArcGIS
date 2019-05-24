import axios from "axios";
class axios1 {
  post(url, object) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, object, {
          headers: {
            Authorization: "hello world"
          }
        })
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
export default new axios1();
