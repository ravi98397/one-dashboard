import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFilterTableComponent } from './multi-filter-table.component';

describe('MultiFilterTableComponent', () => {
  let component: MultiFilterTableComponent;
  let fixture: ComponentFixture<MultiFilterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiFilterTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiFilterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
