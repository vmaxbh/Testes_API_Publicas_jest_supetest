const request = require('supertest');
const app = 'https://reqres.in';


describe('Teste de API Reqres', () => {
    test('Deve criar um novo usuário', async () => {
        const response = await request(app)
        .post('/api/users')
        .send({
            name: 'Max Viana',
            job: 'Desenvolvedor'
        });
        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe('Max Viana');
        console.log(`"name:" ${response.body.name}, "Job:" ${response.body.job}, "id:" ${response.body.id}, "create:" ${response.body.createdAt}`);

    })

    test('login caminho feliz', async () => {
        const response = await request(app)
        .post('/api/login')
        .send({
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        });
        expect(response.statusCode).toBe(200);
        expect(response.body.token).toBe('QpwL5tke4Pnpja7X4');
        console.log('Etapa de login caminho Feliz feita com Sucesso!')
    });

    test('login usuário inválido', async () => {
        const response = await request(app)
        .post('/api/login')
        .send({
            "email": "eve@invalido.com",
            "password": "cityslicka"
        });
        expect(response.statusCode).toBe(400);
        console.log('Etapa de login usuário inválido feita com Sucesso!')
    });

    test('login senha inválida', async () => {
        const response = await request(app)
        .post('/api/login')
        .send({
            "email": "eve.holt@reqres.in",
            "password": "senhainvalida"
        });
        expect(response.statusCode).toBe(200);
        console.log('Etapa de login senha inválida feita com Sucesso!')
    });

    test('Teste de Registro de Usuário caminho feliz', async () => {
        const response = await request(app)
        .post('/api/register')
        .send({
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        });
        expect(response.statusCode).toBe(200);
        console.log('Etapa de Registro de Usuário feita com Sucesso!')
    });

    test('Teste de Registro de Usuário email errado', async () => {
        const response = await request(app)
        .post('/api/register')
        .send({
            "email": "sydney@fife",
            "password": "pistol"
        });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('Note: Only defined users succeed registration')
        console.log('Etapa de Registro de Usuário email errado feita com Sucesso!')
    });
});

