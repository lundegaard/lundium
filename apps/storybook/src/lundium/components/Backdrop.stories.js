import React from 'react';
import { Backdrop } from 'lundium';

export default { title: 'Backdrop', component: Backdrop };

export const basic = () => <Backdrop isVisible>Backdrop content</Backdrop>;
