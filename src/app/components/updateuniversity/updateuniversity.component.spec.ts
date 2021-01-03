import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateuniversityComponent } from './updateuniversity.component';

describe('UpdateuniversityComponent', () => {
  let component: UpdateuniversityComponent;
  let fixture: ComponentFixture<UpdateuniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateuniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateuniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
