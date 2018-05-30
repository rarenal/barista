
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {DtAlertModule, DtAlert} from '@dynatrace/angular-components';

describe('DtAlert', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DtAlertModule],
      declarations: [TestApp, TestAppEmpty],
    });

    TestBed.compileComponents();
  }));

  it('expects css class to be present', () => {
    const fixture = TestBed.createComponent(TestApp);
    fixture.detectChanges();

    const tileNativeElement = fixture.debugElement.nativeElement.querySelector('dt-alert');
    expect(tileNativeElement.classList.contains('dt-alert-error'))
      .toBeTruthy();
  });

  it('expects correct css class after change', () => {
    const fixture = TestBed.createComponent(TestApp);
    fixture.detectChanges();

    const tileNativeElement = fixture.debugElement.nativeElement.querySelector('dt-alert');

    let groupDebugElement = fixture.debugElement.query(By.directive(DtAlert));
    let groupInstance = groupDebugElement.injector.get<DtAlert>(DtAlert);

    groupInstance.severity = 'warning';
    fixture.detectChanges();

    expect(tileNativeElement.classList.contains('dt-alert-warning'))
      .toBeTruthy();

    expect(tileNativeElement.classList.contains('dt-alert-error'))
      .toBeFalsy();
  });

  it('expects no css class to be present by default', () => {
    const fixture = TestBed.createComponent(TestAppEmpty);
    fixture.detectChanges();

    const tileNativeElement = fixture.debugElement.nativeElement.querySelector('dt-alert');
    expect(tileNativeElement.classList.contains('dt-alert-error'))
      .toBeFalsy();
    expect(tileNativeElement.classList.contains('dt-alert-warning'))
      .toBeFalsy();
  });


});

/** Test component that contains an DtAlert. */
@Component({
  selector: 'dt-test-app',
  template: `
    <dt-alert severity="error"></dt-alert>
  `,
})
class TestApp {
}
/** Test component that is not visible by default. */
@Component({
  selector: 'dt-test-app-empty',
  template: `
    <dt-alert></dt-alert>
  `,
})
class TestAppEmpty {
}