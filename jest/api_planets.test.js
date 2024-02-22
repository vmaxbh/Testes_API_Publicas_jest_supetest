const request = require('supertest');
const app = 'https://swapi.dev/api'


describe('Testes de API SWAPI Star Wars planets', () => {
    test('Deve retornar os dados do Body planets da API SWAPI Star Wars ', async () => {
        const response = await request(app).get('/planets/1/');
        expect(response.statusCode).toBe(200);
        
        
    });

    test('Deve retornar dados do planeta referente ao ID-1', async () => {
        const response = await request(app).get('/planets/1/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Tatooine');
        expect(response.body.rotation_period).toBe('23');
        expect(response.body.orbital_period).toBe('304');
        expect(response.body.diameter).toBe('10465');
        expect(response.body.climate).toBe('arid');
        expect(response.body.gravity).toBe('1 standard');
        expect(response.body.terrain).toBe('desert');
        expect(response.body.surface_water).toBe('1');
        expect(response.body.population).toBe('200000');
        console.log(response.body);
        
    });

    test('Deve retornar dados do planeta referente ao ID-2', async () => {
        const response = await request(app).get('/planets/2/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Alderaan');
        expect(response.body.rotation_period).toBe('24');
        expect(response.body.orbital_period).toBe('364');
        expect(response.body.diameter).toBe('12500');
        expect(response.body.climate).toBe('temperate');
        expect(response.body.gravity).toBe('1 standard');
        expect(response.body.terrain).toBe('grasslands, mountains');
        expect(response.body.surface_water).toBe('40');
        expect(response.body.population).toBe('2000000000');
        console.log(response.body);
        
    });

    
    test('Deve retornar dados do planeta referente ao ID-3', async () => {
        const response = await request(app).get('/planets/3/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Yavin IV');
        expect(response.body.rotation_period).toBe('24');
        expect(response.body.diameter).toBe('10200');
        expect(response.body.climate).toBe('temperate, tropical');
        expect(response.body.gravity).toBe('1 standard');
        expect(response.body.terrain).toBe('jungle, rainforests');
        expect(response.body.surface_water).toBe('8');
        expect(response.body.population).toBe('1000');
        console.log(response.body);
        
    });

    test('Deve retornar dados do planeta referente ao ID-4', async () => {
        const response = await request(app).get('/planets/4/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Hoth');
        expect(response.body.rotation_period).toBe('23');
        expect(response.body.orbital_period).toBe('549');
        expect(response.body.diameter).toBe('7200');
        expect(response.body.climate).toBe('frozen');
        expect(response.body.gravity).toBe('1.1 standard');
        expect(response.body.terrain).toBe('tundra, ice caves, mountain ranges');
        expect(response.body.surface_water).toBe('100');
        expect(response.body.population).toBe('unknown');
        console.log(response.body);
        
    });

    test('Deve retornar dados do registro de criação dos planets ID-1', async () => {
        const response = await request(app).get('/planets/1/');
        expect(response.statusCode).toBe(200);
        expect(response.body.created).toBe('2014-12-09T13:50:49.641000Z');
        console.log('Dados da Criação do planets do ID-1 Confirmado com Sucesso!');
        
    });
    test('Deve retornar dados do registro de criação dos planets ID-2', async () => {
        const response = await request(app).get('/planets/2/');
        expect(response.statusCode).toBe(200);
        expect(response.body.created).toBe('2014-12-10T11:35:48.479000Z');
        console.log('Dados da Criação do planets do ID-1 Confirmado com Sucesso!');
        
    });
    test('Deve retornar dados do registro de criação dos planets ID-3', async () => {
        const response = await request(app).get('/planets/3/');
        expect(response.statusCode).toBe(200);
        expect(response.body.created).toBe('2014-12-10T11:37:19.144000Z');
        console.log('Dados da Criação do planets do ID-1 Confirmado com Sucesso!');
        
    });
    test('Deve retornar dados do registro de criação dos planets ID-4', async () => {
        const response = await request(app).get('/planets/4/');
        expect(response.statusCode).toBe(200);
        expect(response.body.created).toBe('2014-12-10T11:39:13.934000Z');
        console.log('Dados da Criação do planets do ID-1 Confirmado com Sucesso!');
        
    });


});