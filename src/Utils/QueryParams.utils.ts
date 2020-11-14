export class QueryParamsUtils {
    public static fetchQueryParams<TParams>(queryParams: TParams): string {
        let queryParamsParsed = '';
        Object.entries(queryParams).forEach(([key]) => {
            if (queryParamsParsed !== '') {
                queryParamsParsed += '&';
            }
            queryParamsParsed += key + '=' + encodeURIComponent(queryParams[key]);
        });
        return queryParamsParsed;
    }
}
