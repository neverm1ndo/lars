import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LarsRootShellComponent } from './root-shell.component';

describe('RootShellComponent', () => {
  let component: LarsRootShellComponent;
  let fixture: ComponentFixture<LarsRootShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LarsRootShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LarsRootShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
