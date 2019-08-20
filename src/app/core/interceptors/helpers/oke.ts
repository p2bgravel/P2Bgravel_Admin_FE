import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

const Oke = (body?) => {
    return of(new HttpResponse({ status: 200, body }));
};

export default Oke;
