import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'ramda-extension';

import Box from '../Box';

const TabBar = ({ className, ...rest }) => <Box className={cx('tab-bar', className)} {...rest} />;

TabBar.propTypes = { className: PropTypes.string, stepWizzard: PropTypes.bool };

export default TabBar;
