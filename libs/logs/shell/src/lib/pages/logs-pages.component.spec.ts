import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogsPagesComponent } from './logs-pages.component';

describe('LogsPagesComponent', () => {
  let component: LogsPagesComponent;
  let fixture: ComponentFixture<LogsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogsPagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
