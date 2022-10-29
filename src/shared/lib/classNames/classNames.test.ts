import { classNames } from './classNames';

describe('className', () => {
  it('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  it('with additional class', () => {
    const epected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(epected);
  });
  it('with mods', () => {
    const expected = 'someClass class1 hovered scrollable';
    expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1'])).toBe(expected);
  });
  it('with mods false', () => {
    const expected = 'someClass class1 hovered';
    expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1'])).toBe(
      expected
    );
  });
});
