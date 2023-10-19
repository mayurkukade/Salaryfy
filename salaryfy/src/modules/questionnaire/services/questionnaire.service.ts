import { catchError, concatMap, from, of, throwError } from "rxjs";
import { ErrorType } from "../constants/app-error.type";

class QuestionnaireHttpClient {
  public request<T>( requestPromise: Promise<T> ) {
    return from(requestPromise)
      .pipe(
        concatMap((response$) => {
          //console.log(response$)
          if ((response$ as ErrorType)?.error?.status >= 400 && (response$ as ErrorType)?.error?.status <= 499) { return throwError('Server error'); }
          return of(response$);
        }),
        catchError(error => throwError(error))
      )
  }

}

export { QuestionnaireHttpClient }