const request = require('supertest');
const app = 'https://swapi.dev/api'

describe('Testes de API SWAPI Star Wars starships', () => {

    test('Deve retornar os dados do Body species da API SWAPI Star Wars ', async () => {
        const response = await request(app).get('/species/');
        expect(response.statusCode).toBe(200);
        
        
    });

    test('Deve retornar dados da species Human', async () => {
        const response = await request(app).get('/species/1/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Human');
        console.log('Name da Specie Confirmado com Sucesso!');

    });
    test('Deve retornar dados da species Droid', async () => {
        const response = await request(app).get('/species/2/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Droid');
        console.log('Name da Specie Confirmado com Sucesso!');

    });
    test('Deve retornar dados da species Wookie', async () => {
        const response = await request(app).get('/species/3/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Wookie');
        console.log('Name da Specie Confirmado com Sucesso!');
        

    });
    test('Deve retornar dados da species Rodian', async () => {
        const response = await request(app).get('/species/4/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Rodian');
        console.log('Name da Specie Confirmado com Sucesso!');

    });
    test('Deve retornar dados da species Hutt', async () => {
        const response = await request(app).get('/species/5/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Hutt');
        console.log('Name da Specie Confirmado com Sucesso!');

    });
    test('Deve retornar dados da species Yoda s species ', async () => {
        const response = await request(app).get('/species/6/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe("Yoda's species");
        console.log('Name da Specie Confirmado com Sucesso!');

    });
    test('Deve retornar dados da species Trandoshan ', async () => {
        const response = await request(app).get('/species/7/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Trandoshan');
        console.log('Name da Specie Confirmado com Sucesso!');

    });
    test('Deve retornar dados da species Mon Calamari ', async () => {
        const response = await request(app).get('/species/8/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Mon Calamari');
        console.log('Name da Specie Confirmado com Sucesso!');

    });
    test('Deve retornar dados da species Ewok ', async () => {
        const response = await request(app).get('/species/9/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Ewok');
        console.log('Name da Specie Confirmado com Sucesso!');

    });
    test('Deve retornar dados da species Sullustan', async () => {
        const response = await request(app).get('/species/10/');
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe('Sullustan');
        console.log('Name da Specie Confirmado com Sucesso!');

    });
    
    
});