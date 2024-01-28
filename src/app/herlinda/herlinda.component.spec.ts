import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerlindaComponent } from './herlinda.component';

describe('HerlindaComponent', () => {
  let component: HerlindaComponent;
  let fixture: ComponentFixture<HerlindaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerlindaComponent]
    });
    fixture = TestBed.createComponent(HerlindaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
