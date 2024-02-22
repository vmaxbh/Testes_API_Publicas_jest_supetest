const request = require('supertest');
const app = 'https://swapi.dev/api'; // alterei a variável app para ser a URL base da API SWAPI Star Wars

describe('Teste de API SWAPI Star Wars people', () => {
    test('Deve retornar os dados do Body people da API SWAPI Star Wars', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        console.log('O Código retornado para o Status Code é: ', response.statusCode);  
    });

    test('Deve retornar dados do personagem do ID 1 da API SWAPI Star Wars', async () => {
        const response = await request(app).get('/people/1/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe("Luke Skywalker");
        expect(response.body.height).toBe("172");
        expect(response.body.mass).toBe("77");
        expect(response.body.hair_color).toBe('blond');
        expect(response.body.skin_color).toBe('fair');
        expect(response.body.eye_color).toBe('blue');
        expect(response.body.birth_year).toBe('19BBY');
        expect(response.body.gender).toBe('male');
        console.log('Cenário "Deve retornar nome do personagem do ID 1 da API SWAPI Star Wars" passou com Sucesso!');
    });

    test('Deve retornar status 200 para cada filme na lista ID-1', async () => {
        const response = await request(app).get('/people/1/');
        expect(response.statusCode).toBe(200);
        const responsefilms = ["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/6/"]
        expect(response.body.films).toEqual(responsefilms);
        console.log('Cenário "Deve retornar status 200 para cada filme na lista do ID 1" passou com Sucesso!');

    });

    test('Deve retornar nome do personagem do ID 2 da API SWAPI Star Wars', async () => {
        const response = await request(app).get('/people/2/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe("C-3PO");
        expect(response.body.height).toBe("167");
        expect(response.body.mass).toBe("75");
        expect(response.body.hair_color).toBe('n/a');
        expect(response.body.skin_color).toBe('gold');
        expect(response.body.eye_color).toBe('yellow');
        expect(response.body.birth_year).toBe('112BBY');
        expect(response.body.gender).toBe('n/a');
        console.log('Cenário "Deve retornar nome do personagem do ID 2 da API SWAPI Star Wars" passou com Sucesso!');
    });

    test('Deve retornar status 200 para cada filme na lista ID-2', async () => {
        const response = await request(app).get('/people/2/');
        expect(response.statusCode).toBe(200);
        const responsefilms = ["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/4/","https://swapi.dev/api/films/5/","https://swapi.dev/api/films/6/"]
        expect(response.body.films).toEqual(responsefilms);
        console.log('Cenário "Deve retornar status 200 para cada filme na lista do ID 2" passou com Sucesso!');

    });

    test('Deve retornar nome do personagem do ID 3 da API SWAPI Star Wars', async () => {
        const response = await request(app).get('/people/3/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe("R2-D2");
        expect(response.body.height).toBe("96");
        expect(response.body.mass).toBe("32");
        expect(response.body.hair_color).toBe('n/a');
        expect(response.body.skin_color).toBe('white, blue');
        expect(response.body.eye_color).toBe('red');
        expect(response.body.birth_year).toBe('33BBY');
        expect(response.body.gender).toBe('n/a');
        console.log('Cenário "Deve retornar nome do personagem do ID 3 da API SWAPI Star Wars" passou com Sucesso!');
    });

    test('Deve retornar status 200 para cada filme na lista ID-3', async () => {
        const response = await request(app).get('/people/3/');
        expect(response.statusCode).toBe(200);
        const responsefilms = ["https://swapi.dev/api/films/1/","https://swapi.dev/api/films/2/","https://swapi.dev/api/films/3/","https://swapi.dev/api/films/4/","https://swapi.dev/api/films/5/","https://swapi.dev/api/films/6/"]
        expect(response.body.films).toEqual(responsefilms);
        console.log('Cenário "Deve retornar status 200 para cada filme na lista do ID 3" passou com Sucesso!');

    });
    
    
});

