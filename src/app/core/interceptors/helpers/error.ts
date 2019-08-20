import { throwError } from 'rxjs';

const Error = message => {
    return throwError({ error: { message } });
};

export default Error;
