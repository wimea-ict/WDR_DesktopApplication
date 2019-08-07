export class SignUpInfo {
    id: number;
    name: string;
    username: string;
    email: string;
    roles: string[];
    password: string;

    constructor(name: string, username: string, email: string, password: string, roles: string) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.roles = [roles];
    }

    
}
