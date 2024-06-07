
 

  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { Observable } from 'rxjs';
  
  @Injectable({
    providedIn: 'root',
  })
  export class LiteratureService {
    private baseUrl = 'https://pinguinera-module-admin.onrender.com/SupplierItems';  
  
    constructor(private http: HttpClient) {}
  
    addNovel(supplierId: string, novelData: any): Observable<any> {
      return this.http.post(`${this.baseUrl}/AddNovel/${supplierId}`, novelData);
    }
  
    addBook(supplierId: string, bookData: any): Observable<any> {
      return this.http.post(`${this.baseUrl}/AddBook/${supplierId}`, bookData);
    }
  }
  