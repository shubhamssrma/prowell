export interface User {
    id: string;
    email: string;
    name: string;
    role: string;
}
export interface UserLoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    success: boolean;
    message: string;
    data: {
        user: User,
        token: string
    }
}

export interface ContactRequest {
    firstName: string;
    lastName: string;
    email: string;
    contactNumber: string;
    message: string;
    inquiryType: string;
    officeType: string;
}

export interface ContactResponse {
    success: boolean;
    message: string;
}