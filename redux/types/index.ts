export interface AppTypes {
    showContactForm: boolean
}

export interface ResponseGenerator {
    config?: any;
    data?: any;
    headers?: any;
    request?: any;
    status?: number;
    statusText?: string;
}