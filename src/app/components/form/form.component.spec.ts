import { FormComponent } from './form.component';
import { FormBuilder } from '@angular/forms';

describe('FormComponent', () => {
  let component: FormComponent;
  beforeEach(() => {
    component = new FormComponent(new FormBuilder());
  });

  it('should contains field login', () => {
    expect(component.form.contains('login')).toBeTrue();
    expect(component.form.contains('email')).toBeTrue();
  });

  it('should mark login as invalid if empty value', () => {
    const control = component.form.get('login');
    control.setValue(null);

    expect(control.invalid).toBeTrue();
  });
});
