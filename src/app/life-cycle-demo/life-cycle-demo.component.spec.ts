import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleDemoComponent } from './life-cycle-demo.component';

describe('LifeCycleDemoComponent', () => {
  let component: LifeCycleDemoComponent;
  let fixture: ComponentFixture<LifeCycleDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCycleDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCycleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
