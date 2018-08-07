import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Meetup from '../src/components/user/Meetup';
import MeetupGallery from '../src/components/user/ImageGallery';

Enzyme.configure({adapter: new Adapter()});

function setup() {
    const props = {};
    const enzymeWrapper = mount(<Meetup {...props} />)
    return {
        props,
        enzymeWrapper
    }
}

const meetupPhotos = [
    { src: 'https://blog.interlink-ua.com/wp-content/uploads/sites/2/2018/04/DSC_0643.jpg', alt: 'First slide', active: true },
    { src: 'https://blog.interlink-ua.com/wp-content/uploads/sites/2/2017/09/DSC_0297.jpg', alt: 'Second slide', active: false },
    { src: 'https://blog.interlink-ua.com/wp-content/uploads/sites/2/2017/03/DSC_1540.jpg', alt: 'Third slide', active: false },
    { src: 'https://blog.interlink-ua.com/wp-content/uploads/sites/2/2018/04/DSC_0733.jpg', alt: 'Forth slide', active: false },
    { src: 'https://blog.interlink-ua.com/wp-content/uploads/sites/2/2018/03/DSC_0134.jpg', alt: 'Fives slide', active: false },
    { src: 'https://blog.interlink-ua.com/wp-content/uploads/sites/2/2017/12/DSC_1506.jpg', alt: 'Sixes slide', active: false }
];

describe('Meetup component', () => {
    it('should render self and subcomponents', () => {
        const { enzymeWrapper } = setup();

        expect(enzymeWrapper.find('p').hasClass('description')).toBe(true);

        const meetupGalleryProps = enzymeWrapper.find(MeetupGallery).props();

        expect(meetupGalleryProps.photos).toEqual(meetupPhotos);
    })
});