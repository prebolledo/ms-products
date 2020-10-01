import {isPalindromo, minCharactersSearch, isId} from './utils';

test('is palindromo', () => {
    const text= 'abba';
    expect(isPalindromo(text)).toBe(true);
});

test('is not palindromo', () => {
    const text= 'abbe';
    expect(!isPalindromo(text)).toBe(true);
});

test('min characters search', () => {
    const text= 'ab';
    expect(minCharactersSearch(text)).toBe(true);
});

test('is id', () => {
    const text= '1234';
    expect(isId(text)).toBe(true);
});

test('is not id', () => {
    const text= 'b1234';
    expect(!isId(text)).toBe(true);
});