import { getGifs } from '../../helpers/getGifs';

describe('getGifs.js test', () => {
    test('debe traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });
});
