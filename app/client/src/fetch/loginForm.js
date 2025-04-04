import Status  from "./status";
import error from './error_type';

export default function login(body) {
    const {email, password} = body;

    if (email === '') {
        return {
            status: Status.failed,
            body: error.emptyEmail
        }
    }

    if (password === '') {
        return {
            status: Status.failed,
            body: error.emptyPassword
        }
    }

    return {
        status: Status.ok,
        body: 'success'
    }
}