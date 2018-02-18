import * as React from 'react';
import {radioButtonDriverFactory} from './RadioButton.driver';
import {createDriverFactory} from 'wix-ui-test-utils/driver-factory';
import {RadioButton} from './';

function createRadio(props = {}) {
  return <RadioButton data-hook='radio-spec' content="Horsie" icon="🦄" {...props}/>
}

describe('RadioButton', () => {
  const createDriver = createDriverFactory(radioButtonDriverFactory);

  it('renders to the screen', () => {
    const radio = createDriver(createRadio());

    expect(radio.exists()).toBeTruthy();
  });

  it('invokes callback for onChange', () => {
    const onChange = jest.fn();
    const radio = createDriver(createRadio({onChange}));

    radio.select();

    expect(onChange).toHaveBeenCalled();
  });

  it('is selected correctly', () => {
    const radio = createDriver(createRadio({selected: true}));

    expect(radio.isSelected()).toBeTruthy();
  });

  it('accepts correct value', () => {
    const radio = createDriver(createRadio({value: 'unicorn'}));

    expect(radio.value()).toEqual('unicorn');
  });

  it('accepts correct group name', () => {
    const radio = createDriver(createRadio({group: 'unicorns'}));

    expect(radio.group()).toEqual('unicorns');
  });

  it('renders content correctly', () => {
    const radio = createDriver(createRadio());

    expect(radio.contentExists()).toBeTruthy();
  });

  it('renders icon correctly', () => {
    const radio = createDriver(createRadio());

    expect(radio.iconExists()).toBeTruthy();
  });
});
