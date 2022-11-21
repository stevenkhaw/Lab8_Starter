// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// tests isPhoneNumber()
test('checks (626)-825-5186 to equal true', () => {
    expect(functions.isPhoneNumber('(626)-825-5186')).toBe(true);
});

test('checks 825-5186 to equal true', () => {
    expect(functions.isPhoneNumber('825-5186')).toBe(true);
});

test('checks 1122334455667788 to equal false', () => {
    expect(functions.isPhoneNumber('1122334455667788')).toBe(false);
});

test('checks 123 to equal false', () => {
    expect(functions.isPhoneNumber('123')).toBe(false);
});


// tests isEmail()
test('checks skhaw@ucsd.edu to equal true', () => {
    expect(functions.isEmail('skhaw@ucsd.edu')).toBe(true);
});

test('checks thisisareallylongemail@thisisareallylongemail.com to equal true', () => {
    expect(functions.isEmail('thisisareallylongemail@thisisareallylongemail.com')).toBe(true);
});

test('checks skhaw@1111.edu to equal false', () => {
    expect(functions.isEmail('skhaw@1111.edu')).toBe(false);
});

test('checks thisisareallylongemail@thisisareallylongemail.thisisareallylongemail to equal false', () => {
    expect(functions.isEmail('thisisareallylongemail@thisisareallylongemail.thisisareallylongemail')).toBe(false);
});


// tests isStrongPassword()
test('checks four to equal true', () => {
    expect(functions.isStrongPassword('four')).toBe(true);
});

test('checks Strong12_ to equal true', () => {
    expect(functions.isStrongPassword('Strong12_')).toBe(true);
});

test('checks Strong12** to equal false', () => {
    expect(functions.isStrongPassword('Strong12**')).toBe(false);
});

test('checks thisisareallylongpasswordtotestbrobuthelpmeplease to equal false', () => {
    expect(functions.isStrongPassword('thisisareallylongpasswordtotestbrobuthelpmeplease')).toBe(false);
});


// tests isDate()
test('checks 1/22/3344 to equal true', () => {
    expect(functions.isDate('1/22/3344')).toBe(true);
});

test('checks 11/22/3344 to equal true', () => {
    expect(functions.isDate('11/22/3344')).toBe(true);
});

test('checks 11/22/334 to equal false', () => {
    expect(functions.isDate('11/22/334')).toBe(false);
});

test('checks 111/22/3344 to equal false', () => {
    expect(functions.isDate('111/22/3344')).toBe(false);
});


// tests isHexColor() 
test('checks #FF5733 to equal true', () => {
    expect(functions.isHexColor('#FF5733')).toBe(true);
});

test('checks #fff to equal true', () => {
    expect(functions.isHexColor('#fff')).toBe(true);
});

test('checks #ff00002 to equal false', () => {
    expect(functions.isHexColor('#ff00002')).toBe(false);
});

test('checks #1 to equal false', () => {
    expect(functions.isHexColor('#1')).toBe(false);
});