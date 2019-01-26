import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionEditorialComponent } from './edicion-editorial.component';

describe('EdicionEditorialComponent', () => {
  let component: EdicionEditorialComponent;
  let fixture: ComponentFixture<EdicionEditorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionEditorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
