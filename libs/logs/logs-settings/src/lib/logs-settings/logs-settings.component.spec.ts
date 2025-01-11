import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogsSettingsComponent } from './logs-settings.component';

describe('LogsSettingsComponent', () => {
  let component: LogsSettingsComponent;
  let fixture: ComponentFixture<LogsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogsSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
