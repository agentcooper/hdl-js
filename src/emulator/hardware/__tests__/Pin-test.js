/**
 * The MIT License (MIT)
 * Copyright (c) 2017-present Dmitry Soshnikov <dmitry.soshnikov@gmail.com>
 */

'use strict';

const Pin = require('../Pin');

describe('Pin', () => {

  it('Pin interface', () => {
    const a = new Pin({name: 'a', value: true});

    expect(a.getName()).toBe('a');
    expect(a.getValue()).toBe(true);

    a.setValue(false);
    expect(a.getValue()).toBe(false);
  });

  it('to full name', () => {
    expect(Pin.toFullName('a')).toBe('a');
    expect(Pin.toFullName({name: 'a'})).toBe('a');
    expect(Pin.toFullName({name: 'a', size: 16})).toBe('a[16]');
  });

});