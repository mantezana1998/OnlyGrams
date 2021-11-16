import tokenService from './tokenService'

const BASE_URL = '/api/';

export default function create(id){
    return fetch(`${BASE_URL}posts/${id}/likes`, {
        method: "POST",
        headers: {
            Authoriziation: "Bearer" + tokenService.getToken(),
        },
    }).then((res) => {
        if(res.ok) return res.json();
        throw new Error("Login first!")
    });
}

export default function unlike(id){
    return fetch(`${BASE_URL}likes/${id}`, {
        method: "DELETE",
        headers: {
            Authoriziation: "Bearer" + tokenService.getToken();
        },
    }).then((res) => {
        if(res.ok) return res.json();
        throw new Error("Login first!")
    })
}