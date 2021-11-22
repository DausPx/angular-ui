import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSightComponent } from './update-sight.component';

describe('UpdateSightComponent', () => {
  let component: UpdateSightComponent;
  let fixture: ComponentFixture<UpdateSightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
