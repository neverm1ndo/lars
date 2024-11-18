import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsPagesComponent } from './settings-pages.component';

describe('SettingsPagesComponent', () => {
  let component: SettingsPagesComponent;
  let fixture: ComponentFixture<SettingsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsPagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
