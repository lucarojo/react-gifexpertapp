const { renderHook } = require("@testing-library/react-hooks");
const { useFetchGifs } = require("../../hooks/useFetchGifs")

describe('Pruebas en el hook <useFetchGifs />', () => {
    test('debe de retornar el estado inicial', async() => {
        // const {data, loading} = useFetchGifs('One Punch');
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        const {data, loading}=result.current;
        
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    })    
    test('debe de retornar un arreglo de imagenes y el loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();
        const {data, loading}=result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
})
