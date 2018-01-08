/**
 * The MIT License (MIT)
 * Copyright (c) 2017-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

'use strict';

const And = require('../builtin-gates/And');
const And16 = require('../builtin-gates/And16');
const Gate = require('../Gate');
const Pin = require('../Pin');

const {int16} = require('../../../util/typed-numbers');

// Inputs.
const a = new Pin({name: 'a', value: 1});
const b = new Pin({name: 'b', value: 0});

// Output.
const out = new Pin({name: 'out', value: 0});

const gate = new Gate({
  name: 'And',
  inputPins: [a, b],
  outputPins: [out],
});

describe('Gate', () => {

  it('gate interface', () => {
    expect(gate.getName()).toBe('And');
    expect(gate.getInputPins()).toEqual([a, b]);
    expect(gate.getOutputPins()).toEqual([out]);
    expect(gate.getClass()).toBe(Gate);

    // Abstract `eval`.
    expect(() => gate.eval()).toThrow(
      'Abstract method `Gate#eval` should be implemented in a concrete class.'
    );

    // Abstract `isClocked`.
    expect(() => gate.getClass().isClocked()).toThrow(
      'Abstract static method `Gate.isClocked` should be implemented ' +
      'in a concrete class.'
    );

    // Abstract `clockUp`.
    expect(() => gate.clockUp()).toThrow(
      'Abstract method `Gate#clockUp` should be implemented ' +
      'in a concrete class.'
    );

    // Abstract `clockDown`.
    expect(() => gate.clockDown()).toThrow(
      'Abstract method `Gate#clockDown` should be implemented ' +
      'in a concrete class.'
    );
  });

  it('infer name from constructor', () => {
    class And extends Gate {}
    expect((new And()).getName()).toBe('And');
  });

  it('sets/gets pin values', () => {
    const values = {a: 1, b: 1, out: 1};

    gate.setPinValues(values);

    expect(gate.getPinValues()).toEqual(values);

    expect(gate.getPin('a').getValue()).toEqual(values.a);
    expect(gate.getPin('b').getValue()).toEqual(values.b);
    expect(gate.getPin('out').getValue()).toEqual(values.out);
  });

  it('executes on data', () => {
    const And = require('../builtin-gates/And');

    const and = new And({
      inputPins: [a, b],
      outputPins: [out],
    });

    // Full data.
    let data = And.Spec.truthTable;
    let {result, conflicts} = and.execOnData(data);

    expect(result).toEqual(data);
    expect(conflicts.length).toBe(0);

    // Partial data
    data = [{a: 1, b: 1, out: 1}];
    ({result, conflicts} = and.execOnData(data));

    expect(result).toEqual(data);
    expect(conflicts.length).toBe(0);

    // String data
    data = [{a: '1', b: '1', out: 1}];
    ({result, conflicts} = and.execOnData(data));

    expect(result).toEqual([{a: 1, b: 1, out: 1}]);
    expect(conflicts.length).toBe(0);

    // Invalid data.
    data = [{a: 1, b: 1, out: 0}];
    ({result, conflicts} = and.execOnData(data));

    expect(result).not.toEqual(data);
    expect(conflicts.length).toBe(1);
    expect(conflicts[0])
      .toEqual({row: 0, pins: {out: {expected: 0, actual: 1}}});

    // Sets the outputs, no conflicts.
    data = [{a: 1, b: 1}];
    ({result, conflicts} = and.execOnData(data));

    expect(result).toEqual([{a: 1, b: 1, out: 1}]);
    expect(conflicts.length).toBe(0);
  });

  it('executes on data: Pin[16]', () => {
    const Not16 = require('../builtin-gates/Not16');

    const _in = new Pin({name: 'in', size: 16});
    const _out = new Pin({name: 'out', size: 16});

    const not16 = new Not16({
      inputPins: [_in],
      outputPins: [_out],
    });

    // Full data.
    let data = Not16.Spec.truthTable;
    let {result, conflicts} = not16.execOnData(data);

    expect(result).toEqual(data);
    expect(conflicts.length).toBe(0);

    // Invalid data.
    data = [{in: '0000000000000000', out: 0b1111111111111110}];
    ({result, conflicts} = not16.execOnData(data));

    expect(result).not.toEqual(data);
    expect(conflicts.length).toBe(1);
    expect(conflicts[0])
      .toEqual({
        row: 0,
        pins: {
          out: {
            expected: int16(0b1111111111111110),
            actual: int16(0b1111111111111111),
          }
        }
      });

    // Sets the outputs, no conflicts.
    data = [{in: '0000000000000000', out: int16(0b1111111111111111)}];
    ({result, conflicts} = not16.execOnData(data));

    expect(result)
      .toEqual([{in: 0, out: int16(0b1111111111111111)}]);
    expect(conflicts.length).toBe(0);
  });

  it('get pin info', () => {
    expect(And.getPinInfo('a')).toEqual({kind: 'input', name: 'a'});
    expect(And.getPinInfo('b')).toEqual({kind: 'input', name: 'b'});
    expect(And.getPinInfo('out')).toEqual({kind: 'output', name: 'out'});

    const Not16 = require('../builtin-gates/Not16');

    expect(Not16.getPinInfo('in'))
      .toEqual({kind: 'input', name: 'in', size: 16});

    expect(Not16.getPinInfo('out'))
      .toEqual({kind: 'output', name: 'out', size: 16});
  });

  it('creates pins from spec', () => {

    // ----------------------------------------
    // Simple names spec.

    const and1 = new And({
      inputPins: ['a', 'b'],
      outputPins: ['out'],
    });

    expect(and1.getInputPins()).toEqual([
      new Pin({name: 'a'}),
      new Pin({name: 'b'}),
    ]);

    expect(and1.getOutputPins()).toEqual([
      new Pin({name: 'out'}),
    ]);

    // ----------------------------------------
    // Object names spec.

    const and2 = new And({
      inputPins: [
        {name: 'a', value: 1},
        {name: 'b', value: 0},
      ],
      outputPins: [
        {name: 'out'},
      ],
    });

    expect(and2.getInputPins()).toEqual([
      new Pin({name: 'a', value: 1}),
      new Pin({name: 'b', value: 0}),
    ]);

    expect(and2.getPin('a').getValue()).toBe(1);
    expect(and2.getPin('b').getValue()).toBe(0);

    and2.eval();

    expect(and1.getOutputPins()).toEqual([
      new Pin({name: 'out'}),
    ]);

    expect(and2.getPin('out').getValue()).toBe(0);

    // ----------------------------------------
    // Size spec.

    const and3 = new And16({
      inputPins: [
        {name: 'a', value: 1, size: 16},
        {name: 'b', value: 0, size: 16},
      ],
      outputPins: [
        {name: 'out', size: 16},
      ],
    });

    expect(and3.getInputPins()).toEqual([
      new Pin({name: 'a', value: 1, size: 16}),
      new Pin({name: 'b', value: 0, size: 16}),
    ]);

    expect(and3.getPin('a').getSize()).toBe(16);
    expect(and3.getPin('b').getSize()).toBe(16);
  });

  it('tick-tock', () => {

    let state = 0;
    let order = [];

    // Clocked gate.
    class MyGate extends Gate {
      eval() {
        order.push('eval');
      }

      clockUp() {
        order.push('clockUp');
        state++;
      }

      clockDown() {
        order.push('clockDown');
        this.getOutputPins()[0].setValue(state);
      }
    }

    const gate = new MyGate({
      inputPins: ['in'],
      outputPins: ['out'],
    });

    gate.tick();
    expect(state).toBe(1);

    gate.tock();
    expect(state).toBe(1);
    expect(gate.getPin('out').getValue()).toBe(state);

    expect(order).toEqual(['eval', 'clockUp', 'clockDown', 'eval']);
  });

});