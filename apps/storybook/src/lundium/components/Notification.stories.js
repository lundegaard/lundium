import React from 'react';
import { Notification } from 'lundium';

export default { title: 'Notification', component: Notification };

export const basic = () => <Notification>Notification message</Notification>;
