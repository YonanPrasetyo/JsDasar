import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum function', async (t) => {
    await t.test('should sum two positive numbers', () => {
        const operandA = 2;
        const operandB = 3;
        const result = sum(operandA, operandB);

        const expected = 5;
        assert.equal(result, expected);
    })

    await t.test('should sum two negative numbers', () => {
        const operandA = -2;
        const operandB = -3;
        const result = sum(operandA, operandB);

        const expected = -5;
        assert.equal(result, expected);
    })

    await t.test('should sum positive and negative numbers resulting in a positive', () => {
        const operandA = -2;
        const operandB = 3;
        const result = sum(operandA, operandB);

        const expected = 1;
        assert.equal(result, expected);
    })

    await t.test('should sum positive and negative numbers resulting in a negative', () => {
        const operandA = 2;
        const operandB = -3;
        const result = sum(operandA, operandB);

        const expected = -1;
        assert.equal(result, expected);
    })
});