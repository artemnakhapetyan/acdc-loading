import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcdcLoadingComponent } from './acdc-loading.component';

describe('AcdcLoadingComponent', () => {
  let component: AcdcLoadingComponent;
  let fixture: ComponentFixture<AcdcLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcdcLoadingComponent]
    });
    fixture = TestBed.createComponent(AcdcLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
