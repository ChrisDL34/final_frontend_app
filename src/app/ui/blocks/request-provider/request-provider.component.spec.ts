import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestProviderComponent } from './request-provider.component';

describe('RequestProviderComponent', () => {
  let component: RequestProviderComponent;
  let fixture: ComponentFixture<RequestProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestProviderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
