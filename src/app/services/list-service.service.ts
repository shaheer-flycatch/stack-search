import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private http: HttpClient) { }
  getAllList() {
    return this.http.get(`${environment.BASEURL}/search/advanced?site=stackoverflow&page=&pagesize=&sort=%20%20%20%20&fromDate=&toDate=&order=&q=&answers=%20%20%20%20&closed=&title=&user=&url=&views=%20%20%20%20&wiki=`);
  }
  getAllAnsweres(questionId) {
    return this.http.get(`${environment.BASEURL}/questions/${questionId}/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody`);
  }
}
