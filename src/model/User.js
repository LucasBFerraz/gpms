class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
    toJson() {
        return {
            id: this.id,
            username: this.username,
            password: this.password
        }
    }
}