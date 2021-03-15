import ListItem from './ListItem';
import { shallow } from 'enzyme';


describe("Testing a gist list item with no files/badges", () => {
    let wrapper = "";
    const data= {
        "url": "https://api.github.com/gists/6cad326836d38bd3a7ae",
        "forks_url": "https://api.github.com/gists/6cad326836d38bd3a7ae/forks",
        "id": "6cad326836d38bd3a7ae",
        "files": {}
    }
    beforeEach(() => {
        wrapper = shallow(<ListItem data={data} />)
    })
    test('Files header is present', () => {
        expect(wrapper.find('.gist-list_item')).toHaveLength(1);
    });
    test('Files header is present', () => {
        expect(wrapper.find('.files-list_header')).toHaveLength(1);
    });
    test('Fork list heading is present', () => {
        expect(wrapper.find('.files-list_header').text()).toEqual("File(s):");
    });
    test('No fork user list should be present after initial load', () => {
        expect(wrapper.find('.MuiAvatar-img')).toHaveLength(0);
    });
    test('Files header is present', () => {
        expect(wrapper.find('.gist-list_badges')).toHaveLength(0);
    });
});
describe("Testing a gist list item with two files/badges", () => {
    let wrapper = "";
    const data= {
        "url": "https://api.github.com/gists/6cad326836d38bd3a7ae",
        "forks_url": "https://api.github.com/gists/6cad326836d38bd3a7ae/forks",
        "id": "6cad326836d38bd3a7ae",
        "files": {
            "hello_world-1": {
                "type": "application/x-ruby",
                "language": "JavaScript"
            },
            "hello_world-2": {
                "type": "application/x-ruby",
                "language": "Node"
            }
        }
    }
    beforeEach(() => {
        wrapper = shallow(<ListItem data={data} />)
    })
    test('Count badges', () => {
        expect(wrapper.find('.gist-list_badges')).toHaveLength(2);
    });
});