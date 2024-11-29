import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticoComponent } from './politico.component';

describe('PoliticoComponent', () => {
  let component: PoliticoComponent;
  let fixture: ComponentFixture<PoliticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
