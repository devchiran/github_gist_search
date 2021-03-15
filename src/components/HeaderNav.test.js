import HeaderNav from './HeaderNav';
import { shallow } from 'enzyme';

describe("Testing the initial element after the page load", () => {
    let wrapper = "";
    beforeEach(() => {
        wrapper = shallow(<HeaderNav />)
    })
    test('renders the search input box', () => {
        expect(wrapper.find('.header_search-input input')).toBeTruthy();
    });
    test('renders the search button', () => {
        expect(wrapper.find('.header_search-btn')).toBeTruthy();
    });
});