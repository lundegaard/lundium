import { configure } from 'enzyme';
// NOTE: Change to official enzyme adapter when available
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
