import revertString from '../revertString.js';

describe('test for revertString', () => {
    it ('hello => olleh', () => {
        expect(revertString('hello')).toBe('olleh')
    });
    it ('Ivan => navI', () => {
        expect(revertString('Ivan')).toBe('navI')
    });
    it ('Greetings from Earth => htraE morf sgniteerG', () => {
        expect(revertString('Greetings from Earth')).toBe('htraE morf sgniteerG')
    });

})