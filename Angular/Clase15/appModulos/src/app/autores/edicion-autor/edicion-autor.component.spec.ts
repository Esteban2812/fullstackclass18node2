import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionAutorComponent } from './edicion-autor.component';

describe('EdicionAutorComponent', () => {
  let component: EdicionAutorComponent;
  let fixture: ComponentFixture<EdicionAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
