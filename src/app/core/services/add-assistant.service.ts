import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assistant } from '../models/assistant.model';



@Injectable({
  providedIn: 'root',
})
export class AssistantService{
  private assistantData = '../../../assets/data/assistant.json'
  constructor(private http: HttpClient) {}
  getAssistant(): Observable<Assistant[]>{
    return this.http.get<Assistant[]>(this.assistantData);
  }
}
