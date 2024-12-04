import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileSettingsTokenDialogComponent } from './profile-settings-token-dialog.component';

describe('ProfileSettingsTokenDialogComponent', () => {
  let component: ProfileSettingsTokenDialogComponent;
  let fixture: ComponentFixture<ProfileSettingsTokenDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSettingsTokenDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileSettingsTokenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
