import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LiteratureService } from '../../core/services/literature.service'; // Asegúrate de ajustar la ruta

@Injectable({
  providedIn: 'root',
})
export class CreateLiteraturesContainerFacade {
  constructor(private literatureService: LiteratureService) {}

  addNovel(supplierId: string, novelData: any): Observable<any> {
    return this.literatureService.addNovel(supplierId, novelData);
  }

  addBook(supplierId: string, bookData: any): Observable<any> {
    return this.literatureService.addBook(supplierId, bookData);
  }
}
