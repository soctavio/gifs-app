const { useFetchGifs } = require("../../hooks/useFetchGifs");
const { renderHook } = require("@testing-library/react-hooks");

describe('Probrando el custom hook useFetchGifs', () => {
    test('Debe retornar el estado inicial', async () => {
        //const { data: gifs, loading } = useFetchGifs(category);
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe retornar las imgs y el loading false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});
