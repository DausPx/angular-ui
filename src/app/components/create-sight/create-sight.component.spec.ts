import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSightComponent } from './create-sight.component';

describe('CreateSightComponent', () => {
  let component: CreateSightComponent;
  let fixture: ComponentFixture<CreateSightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
