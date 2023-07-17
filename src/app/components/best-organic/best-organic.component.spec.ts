import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestOrganicComponent } from './best-organic.component';

describe('BestOrganicComponent', () => {
  let component: BestOrganicComponent;
  let fixture: ComponentFixture<BestOrganicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BestOrganicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestOrganicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
