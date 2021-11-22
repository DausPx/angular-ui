import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSightsComponent } from './search-sights.component';

describe('SearchSightsComponent', () => {
  let component: SearchSightsComponent;
  let fixture: ComponentFixture<SearchSightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
