import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogsFilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: LogsFilterComponent;
  let fixture: ComponentFixture<LogsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogsFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
