export const Get = url => {
    return fetch(url, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    });
};

export const Post = (url, body) => {
    return fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
};
