// import { DataSource } from 'typeorm';
// import AppDataSource from '../../../data-source';
// import request from 'supertest';
// import app from '../../../app';
// import { mockedContact, mockedUser, mockedUserLogin } from '../../mocks';

// describe('/contact', () => {
//   let connection: DataSource;

//     beforeAll(async () => {
//         await AppDataSource.initialize()
//             .then(res => {
//                 connection = res;
//         })
//             .catch(err => {
//                 console.error('Error during Data Source initialization', err);
//             });
//     });

//     afterAll(async () => {
//         await connection.destroy();
//     });

//   test('POST /contacts - Must be able to create a user', async () => {
//     //faço o login
//     const userLoginResponse = await request(app)
//     .post('/login')
//     .send(mockedUserLogin);

//     const users = await request(app)
//         .post('/users')
//         .set('Authorization', `Bearer ${userLoginResponse.body.token}`)
//         .send(mockedUser);

//     const response = await request(app).post('/contacts').send(mockedContact);

//     expect(response.body).toHaveProperty('name');
//     expect(response.body).toHaveProperty('email');
//     expect(response.body).toHaveProperty('cellphone');
    
//     expect(response.body).toHaveProperty('id');
//     expect(response.body).toHaveProperty('createdAt');

//     expect(response.body).toHaveProperty('isAdm');
//     expect(response.body).toHaveProperty('isActive');
//     expect(response.body).toHaveProperty('updatedAt');
//     expect(response.body).not.toHaveProperty('password');
//     expect(response.body.name).toEqual('Kenzinho');
//     expect(response.body.email).toEqual('kenzinho@gmail.com');
//     expect(response.status).toBe(201);
//   });


//   test('GET /contacts -  Must be able to list contact', async () => {
//     await request(app).post('/contacts').send(mockedContact);
//     const userLoginResponse = await request(app)
//         .post('/login')
//         .send(mockedUserLogin);
//     const response = await request(app)
//         .get('/contacts')
//         .set('Authorization', `Bearer ${userLoginResponse.body.token}`);

//     expect(response.status).toBe(200);
//   });


// });