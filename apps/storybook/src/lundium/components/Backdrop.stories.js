import React from 'react';
import { Backdrop } from 'lundium';

export default { title: 'Others/Backdrop', component: Backdrop };

export const basic = () => <Backdrop isVisible>Backdrop content</Backdrop>;
