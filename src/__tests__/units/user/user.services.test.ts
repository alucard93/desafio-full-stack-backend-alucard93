import { DataSource } from 'typeorm';
import AppDataSource from '../../../data-source';
import request from 'supertest';
import app from '../../../app';
import { mockedUser, mockedUserLogin } from '../../mocks';

describe('/users', () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then(res => {
        connection = res;
      })
      .catch(err => {
        console.error('Error during Data Source initialization', err);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test('POST /users - Must be able to create a user', async () => {
    const response = await request(app).post('/users').send(mockedUser);

    expect(response.body).toHaveProperty('isAdm');
    expect(response.body).toHaveProperty('isActive');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('email');
    expect(response.body).toHaveProperty('cellphone');
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('createdAt');
    expect(response.body).toHaveProperty('updatedAt');
    expect(response.body).not.toHaveProperty('password');
    expect(response.body.name).toEqual('Kenzinho');
    expect(response.body.email).toEqual('kenzinho@gmail.com');
    expect(response.status).toBe(201);
  });

  test("It should not be possible to create a user with an email already used", async () => {
    const response = await request(app).post("/users").send(mockedUser);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });

  test('GET /users -  Must be able to list users', async () => {
    await request(app).post('/users').send(mockedUser);
    const userLoginResponse = await request(app)
      .post('/login')
      .send(mockedUserLogin);
    const response = await request(app)
      .get('/users')
      .set('Authorization', `Bearer ${userLoginResponse.body.token}`);

    expect(response.status).toBe(200);
  });
});


