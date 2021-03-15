import ListSection from './ListSection';
import { shallow } from 'enzyme';

describe("Testing the initial element after the page load", () => {
    let wrapper = "";
    beforeEach(() => {
        wrapper = shallow(<ListSection />)
    })
    test('renders the search input box', () => {
        console.log(wrapper.debug());
    });
});