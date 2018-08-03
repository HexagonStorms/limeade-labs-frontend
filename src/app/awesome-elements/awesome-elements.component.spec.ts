import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeElementsComponent } from './awesome-elements.component';

describe('AwesomeElementsComponent', () => {
  let component: AwesomeElementsComponent;
  let fixture: ComponentFixture<AwesomeElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwesomeElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
