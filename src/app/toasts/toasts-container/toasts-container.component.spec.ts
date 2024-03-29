import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToastsContainer} from './toasts-container.component';


describe('ToastsContainerComponent', () => {
  let component: ToastsContainer;
  let fixture: ComponentFixture<ToastsContainer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return false if toast is not templated', () => {
    expect(component.isTemplate({
      type: 'warning',
      body: 'Toasty!'
    })).toBeFalsy();
  });
});
