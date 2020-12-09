import React from 'react';
import {shallow} from 'enzyme'
const { GifGridItem } = require("../../components/GifGridItem")

describe('Pruebas al componente <GifGridItem />', () => {
    const title = 'Un título'
    const url = 'https://localhost/algo.jpg'
    let wrapper = shallow(<GifGridItem url = {url} title={title}/>)
    beforeEach(()=>{
        wrapper = shallow(<GifGridItem url = {url} title={title}/>)
    });

    test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    test('debe de tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        // console.log(img.prop('src'));
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.filter('div');
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
    })
    
    
})
