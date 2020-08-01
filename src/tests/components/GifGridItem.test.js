import React from 'react';
import { GifGridItem } from '../../components/GifGridItem';
import { shallow } from 'enzyme';

describe('GifGridItem.js tests', () => {
    const title = 'Perro chocolo';
    const url = 'https://localhost/jefe.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Shoul show the GifGridItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('The title should be present in the component', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Test for src and alt in the img', () => {
        const img = wrapper.find('img');
        const src = img.props().src;
        const alt = img.props().alt;
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Class css test', () => {
        const div = wrapper.find('div');
        const hasClass = div.hasClass('animate__bounceIn');
        expect(hasClass).toBe(true);
    });

});
