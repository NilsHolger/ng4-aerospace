import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyingFormComponent } from './flying-form.component';

describe('FlyingFormComponent', () => {
  let component: FlyingFormComponent;
  let fixture: ComponentFixture<FlyingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlyingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
