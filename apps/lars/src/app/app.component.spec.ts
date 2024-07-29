import { Component } from '@angular/core';
import { TestBed, waitForAsync,  } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from '@lars/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, MockTopbarComponent],
      imports: [RouterModule.forRoot([]), CoreModule],
    }).compileComponents();
  });

  it(`should have as title 'lars'`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('LARS');
  }));
});

@Component({
  selector: "lars-topbar",
  template: "",
})
class MockTopbarComponent {
}
