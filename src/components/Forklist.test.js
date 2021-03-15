import Forklist from './Forklist';
import { shallow } from 'enzyme';

describe("Testing the fork list when no data is present", () => {
    let wrapper = "";
    const data = []
    beforeEach(() => {
        wrapper = shallow(<Forklist forks={data} />)
    })
    test('No anchor link is present', () => {
        expect(wrapper.find('.fork-list_link')).toHaveLength(0);
    });
    test('No avatar is visible', () => {
        expect(wrapper.find('.fork-list_avatar')).toHaveLength(0);
    });
});
describe("Testing the fork list when no data is present", () => {
    let wrapper = "";
    const data=[{
            "forks_url": "https://api.github.com/gists/fc06f335f39a0addb4f1784afd744533/forks",
            "id": "fc06f335f39a0addb4f1784afd744533",
            "owner": {
                "login": "nlwy",
                "avatar_url": "https://avatars.githubusercontent.com/u/14729172?v=4",
            }
        }, {
            "forks_url": "https://api.github.com/gists/34a30ca2ae210c7e8523a312111354d3/forks",
            "id": "34a30ca2ae210c7e8523a312111354d3",
            "owner": {
                "login": "nlwy1",
                "avatar_url": "https://avatars.githubusercontent.com/u/10135454?v=4"
            }
        }]
    beforeEach(() => {
        wrapper = shallow(<Forklist forks={data} />)
    })
    test('Fork list heading is present', () => {
        expect(wrapper.find('.fork-list_header')).toHaveLength(1);
    });
    test('Fork list heading text is correct', () => {
        expect(wrapper.find('.fork-list_header').text()).toEqual("Fork(s):");
    });
    test('No anchor link is present', () => {
        expect(wrapper.find('.fork-list_link')).toHaveLength(2);
    });
    test('No anchor link is present', () => {
        expect(wrapper.find('.fork-list_link').at(0).prop('href')).toEqual("https://api.github.com/gists/fc06f335f39a0addb4f1784afd744533/forks");
    });
    test('No avatar is visible', () => {
        expect(wrapper.find('.fork-list_avatar')).toHaveLength(2);
    });
});