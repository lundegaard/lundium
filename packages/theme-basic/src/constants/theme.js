import { splitByCommaSafe } from '../utils/splitByComma';
import fromIcon from '../scss/components/Icon.scss';
import fromVariables from '../scss/01_config/_variables.scss';

import '../scss/front.scss';

export const iconTypes = splitByCommaSafe(fromIcon.icons);
export const iconSizes = splitByCommaSafe(fromIcon['icon-sizes']);
export const colors = splitByCommaSafe(fromVariables.colors);
