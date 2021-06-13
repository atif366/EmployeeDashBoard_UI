import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartMentComponentComponent } from './depart-ment-component.component';

describe('DepartMentComponentComponent', () => {
  let component: DepartMentComponentComponent;
  let fixture: ComponentFixture<DepartMentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartMentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartMentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
