import axios from "axios";
class axios1 {

    constructor() {
        let storage = window.localStorage;
        this.token = storage.getItem('token');
        console.log('toprs');
    }
    post(url, object) {
        return new Promise((resolve, reject) => {
            axios
                .post(url, object, {
                    headers: {
                        Authorization: this.token
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
    get(url) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                headers: {
                    Authorization: this.token
                }
            }).then(res => {
                resolve(res);
            }).catch(error => {
                reject(error);
            });
        });
    }
}
export default new axios1();