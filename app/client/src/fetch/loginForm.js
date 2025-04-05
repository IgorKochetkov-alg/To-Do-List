import Status  from './status';
import Message from './error_type';

export default function login(body) {
    const {email, password} = body;

    if (email === '') {
        return {
            status: Status.failed,
            body: Message.emptyEmail
        }
    }

    if (password === '') {
        return {
            status: Status.failed,
            body: Message.emptyPassword
        }
    }

    if (email !== 'email@mail.ru' || password !== '1234') {
        return {
            status: Status.failed,
            body: Message.wrongInput
        }
    }

    return {
        status: Status.ok,
        body: Message.noErrors
    }
}