import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Banda } from './bandas';
import { BandaDetail } from './banda-detail';

@Injectable({
  providedIn: 'root'
})
export class BandaService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getBandas(): Observable<BandaDetail[]> {
    return this.http.get<BandaDetail[]>(this.apiUrl);
  }
}
