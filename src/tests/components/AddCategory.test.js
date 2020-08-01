import React from 'react';
import '@testing-library/jest-dom';
import AddCategory from '../../components/AddCategory';
import { shallow } from 'enzyme';

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Holamundo';
        input.simulate('change', { target: { value } });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('NO debe postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        console.log(value);
        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        expect(wrapper.find('input').text()).toBe('');
    });

});
