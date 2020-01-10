import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { TestComponent } from '@lundium/components';

storiesOf('TestComponent', module)
	.addDecorator(withKnobs)
	.addParameters({ info: 'Info for TestComponent' })
	.add('in default', () => <TestComponent />);
