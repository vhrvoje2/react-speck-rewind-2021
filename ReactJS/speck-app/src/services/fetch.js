import api from "./api.js";

export const apiCall = () => {
    return fetch(api).then(res => res.json())
}