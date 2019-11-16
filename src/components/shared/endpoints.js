// User
const endpoints = {
    users: {
        register: "users/register",
        login: "users/login"
    },
    diary: {
        getEntries: "users/getUserEntries",
        createEntry: "users/createEntry",
        submitEntry: "users/postEntry",
        deleteEntry: "users/deleteEntry"
    }
};

export default endpoints;
