import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum function', async (t) => {
    await t.test('should sum two positive numbers', () => {
        const operandA = 2;
        const operandB = 3;
        const result = sum(operandA, operandB);

        const expected = 5;
        assert.equal(result, expected);
    })

    await t.test('should sum two numbers less than one', () => {
        const operandA = 0.2;
        const operandB = 0.3;
        const result = sum(operandA, operandB);
    
        const expected = 0.5;
        assert.equal(result, expected);
    })

    await t.test('should sum if a parameter is less than one', () => {
        const operandA = 0.2;
        const operandB = 3;
        const result = sum(operandA, operandB);
    
        const expected = 3.2;
        assert.equal(result, expected);
    })

    await t.test('should sum if b parameter is less than one', () => {
        const operandA = 2;
        const operandB = 0.3;
        const result = sum(operandA, operandB);
    
        const expected = 2.3;
        assert.equal(result, expected);
    })

    await t.test('should sum both numbers zero', () => {
        const operandA = 0;
        const operandB = 0;
        const result = sum(operandA, operandB);
    
        const expected = 0;
        assert.equal(result, expected);
    })

    await t.test('should sum if a parameter is zero', () => {
        const operandA = 0;
        const operandB = 3;
        const result = sum(operandA, operandB);
    
        const expected = 3;
        assert.equal(result, expected);
    })

    await t.test('should sum if b parameter is zero', () => {
        const operandA = 2;
        const operandB = 0;
        const result = sum(operandA, operandB);
    
        const expected = 2;
        assert.equal(result, expected);
    })

    await t.test('should sum big numbers', () => {
        const operandA = 2000000;
        const operandB = 3000000;
        const result = sum(operandA, operandB);
    
        const expected = 5000000;
        assert.equal(result, expected);
    })

    await t.test('should return zero if two negative numbers are added', () => {
        const operandA = -2;
        const operandB = -3;
        const result = sum(operandA, operandB);

        const expected = 0;
        assert.equal(result, expected);
    })

    await t.test('should return zero if a parameter is negative', () => {
        const operandA = -2;
        const operandB = 3;
        const result = sum(operandA, operandB);

        const expected = 0;
        assert.equal(result, expected);
    })

    await t.test('should return zero if b parameter is negative', () => {
        const operandA = 2;
        const operandB = -3;
        const result = sum(operandA, operandB);

        const expected = 0;
        assert.equal(result, expected);
    })

    await t.test('should return zero if both parameters are not numbers', () => {
        const operandA = '2';
        const operandB = '3';
        const result = sum(operandA, operandB);
    
        const expected = 0;
        assert.equal(result, expected);
    })

    await t.test('should return zero if a parameters are not numbers', () => {
        const operandA = '2';
        const operandB = 3;
        const result = sum(operandA, operandB);
    
        const expected = 0;
        assert.equal(result, expected);
    })

    await t.test('should return zero if b parameters are not numbers', () => {
        const operandA = 2;
        const operandB = '3';
        const result = sum(operandA, operandB);
    
        const expected = 0;
        assert.equal(result, expected);
    })

    await t.test('should return zero if parameters are arrays', () => {
        const operandA = [2];
        const operandB = [3];
        const result = sum(operandA, operandB);
    
        const expected = 0;
        assert.equal(result, expected);
    })

    await t.test('should return zero if parameters are objects', () => {
        const operandA = { a: 2 };
        const operandB = { b: 3 };
        const result = sum(operandA, operandB);
    
        const expected = 0;
        assert.equal(result, expected);
    })

    await t.test('should return zero if parameters are booleans', () => {
        const operandA = true;
        const operandB = false;
        const result = sum(operandA, operandB);
    
        const expected = 0;
        assert.equal(result, expected);
    })

    await t.test('should return zero if parameters are null', () => {
        const operandA = null;
        const operandB = null;
        const result = sum(operandA, operandB);
    
        const expected = 0;
        assert.equal(result, expected);
    })

    await t.test('should return zero if parameters are undefined', () => {
        const operandA = undefined;
        const operandB = undefined;
        const result = sum(operandA, operandB);
    
        const expected = 0;
        assert.equal(result, expected);
    })
})