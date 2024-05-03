export class FetchError extends Error {
    info: any;
    status: number;

    constructor(message: string, status: number, info: any) {
        super(message); // Call the base Error class constructor with the message
        this.info = info;
        this.status = status;
    }
}