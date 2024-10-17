import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RootShellComponent } from './root-shell.component';

describe('RootShellComponent', () => {
  let component: RootShellComponent;
  let fixture: ComponentFixture<RootShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RootShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RootShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
