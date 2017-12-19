import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexchartComponent } from './flexchart.component';

describe('FlexchartComponent', () => {
  let component: FlexchartComponent;
  let fixture: ComponentFixture<FlexchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
