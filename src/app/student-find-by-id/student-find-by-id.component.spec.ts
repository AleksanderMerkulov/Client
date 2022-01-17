import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFindByIdComponent } from './student-find-by-id.component';

describe('StudentFindByIdComponent', () => {
  let component: StudentFindByIdComponent;
  let fixture: ComponentFixture<StudentFindByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFindByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFindByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
