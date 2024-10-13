import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

import { getTranslocoTestingModule } from '@lars/i18n/testing';

import { ExternalLinksService, StorageService } from '@lars/core';
import { LoginFacade } from '@lars/login/domain';

import { LoginFormComponent } from './login-form.component';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [getTranslocoTestingModule()],
      declarations: [LoginFormComponent],
      providers: [
        { provide: ExternalLinksService, useClass: ExternalLinksServiceMock },
        { provide: LoginFacade, useClass: LoginFacadeMock },
        { provide: StorageService, useClass: StorageServiceMock },
        { provide: MatSnackBar , useClass: MatSnackBarStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class ExternalLinksServiceMock {}
class LoginFacadeMock {}
class StorageServiceMock {
  get(key: string) {
    return key
  }
}

class MatSnackBarStub{
  open() {
    return {
      onAction: () => of({})
    };
  }
}
