require('dotenv').config();
const app = require('../server/server.js');
const request = require('supertest');

describe('serve webpages', () => {
  let server;

  beforeAll(async () => {
    server = await app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  });

  afterAll(async () => {
    await server.close();
    console.log(`Server closed on port ${process.env.PORT}`);
  });

  it('GET "/" should respond with index.html', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
  it('GET "/error" should respond with 404', (done) => {
    request(app)
      .get('/error')
      .expect(404)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});
describe('Test GET Route', () => {
  let server;

  beforeAll(async () => {
    server = await app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  });

  afterAll(async () => {
    await server.close();
    console.log(`Server closed on port ${process.env.PORT}`);
  });
  it('GET "/user" should respond with json', (done) => {
    request(app)
      .get('/user')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
  it('GET "/user" should respond with array of object with id key', (done) => {
    request(app)
      .get('/user')
      .expect(200)
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(typeof response.body[0].id === 'number').toEqual(true);
        done();
      })
      .catch((err) => done(err));
  });
});
describe('Test POST Route', () => {
  let server;
  const job = {
    user_id: 999999,
    company_name: 'testing company',
    salary: 999999,
    location: 1,
    address: 'testing company',
    contact: 'testing company',
    notes: 'testing company',
    status: 'testing company',
    last_heard: 'no contact',
    position: 'testing position',
  };
  beforeAll(async () => {
    server = await app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    });
  });

  afterAll(async () => {
    await server.close();
    console.log(`Server closed on port ${process.env.PORT}`);
  });
  it('POST "/user" should respond with json', (done) => {
    request(app)
      .post('/user/post')
      .send(job)
      .expect(201)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
  it('GET "/user" should find the listing posted with the salary of 999999', (done) => {
    request(app)
      .get('/user')
      .expect(200)
      .expect('Content-Type', /json/)
      .then((response) => {
        let found = false;
        response.body.forEach((element) => {
          if (element.salary === 999999) found = true;
        });
        expect(found).toEqual(true);
        done();
      })
      .catch((err) => done(err));
  });
});
