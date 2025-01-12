import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogLine, LogsRequestDateInterval, LogsRequestParams, LogsRequestType } from '../entities/logs';



@Injectable()
export class LogsDataService {
  private readonly http = inject(HttpClient);

  private readonly url = '/v2/lars/logs';

  fetchLogs(requestType: LogsRequestType, queryParams?: LogsRequestParams): Observable<LogLine[]> {
    let params: HttpParams = new HttpParams();

    if (queryParams) {
      params = params.appendAll({
        q: queryParams?.query,
        page: queryParams?.page.toString(),
        lim: queryParams?.limit.toString()
      });

      if (queryParams.filter) {
        params = params.append('filter', queryParams.filter.join(','));
      }

      if (queryParams.date) {
        for (const interval in ['from', 'to']) {
          const date = queryParams.date[interval as keyof LogsRequestDateInterval];

          if (date) {
            params = params.append('from', new Date(date).valueOf());
          }
        }
      }
    }

    return this.http.get<LogLine[]>(`${this.url}/${requestType}`, { params });
  }
}
