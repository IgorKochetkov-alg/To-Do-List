import Status from "./status";
import login from './loginForm';

export default function app_fetch(url, body) {
    switch(url) {
        case 'api/v1/login':
            return login(body);
        default:
            return {
                status: Status.sys_error,
                body: "system error has occured"
            }
    }
}