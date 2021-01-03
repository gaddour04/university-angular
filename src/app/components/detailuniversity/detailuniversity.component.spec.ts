import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailuniversityComponent } from './detailuniversity.component';

describe('DetailuniversityComponent', () => {
  let component: DetailuniversityComponent;
  let fixture: ComponentFixture<DetailuniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailuniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailuniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
