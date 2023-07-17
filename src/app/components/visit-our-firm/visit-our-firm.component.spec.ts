import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitOurFirmComponent } from './visit-our-firm.component';

describe('VisitOurFirmComponent', () => {
  let component: VisitOurFirmComponent;
  let fixture: ComponentFixture<VisitOurFirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ VisitOurFirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitOurFirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
