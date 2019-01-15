import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrottletimeComponent } from './throttletime.component';

describe('ThrottletimeComponent', () => {
  let component: ThrottletimeComponent;
  let fixture: ComponentFixture<ThrottletimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrottletimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrottletimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
