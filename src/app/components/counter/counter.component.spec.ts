import { CounterComponent } from './counter.component';

describe('ConterComponent', () => {
  let component: CounterComponent;
  beforeEach(() => {
    component = new CounterComponent();
  });

  it('should be 1', () => {
    component.plus();
    expect(component.counter).toBe(1);
  });

  it('should be -1', () => {
    component.minus();
    expect(component.counter).toBe(-1);
  });

  it('should be emit 1', function () {
    let result = null;

    component.EventEmitter.subscribe((val) => (result = val));
    component.plus();

    expect(result).toBe(1);
  });
});
