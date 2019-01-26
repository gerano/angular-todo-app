const request = require('supertest');
const app = require('../server');

//==================== user API test ====================

/**
 * Testing GET ALL todo endpoint
 */
describe('GET /todo', function () {
    it('respond with json containing a list of all todos', function (done) {
        request(app)
            .get('/todo')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

/**
 * Testing GET ALL todo endpoint
 */
describe('GET /todo/1', function () {
    it('respond with json containing the requested todo', function (done) {
        request(app)
            .get('/todo/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
			.expect(function(res) {
				console.log(JSON.stringify(res));
      	  	});
    });
});

/**
 * Testing POST todo
 */
describe('POST /todo', function () {
    let data = {
        "todoId": "4",
        "title": "my dummy todo",
		"complete": false
    }
    it('respond with 201 created', function (done) {
        request(app)
            .post('/todo')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

/**
 * Testing PUT todo
 */
describe('PUT /todo', function () {
    let data = {
        "title": "my dummy todo updated",
		"complete": true
    }
    it('respond with 204 updated', function (done) {
        request(app)
            .put('/todo/4')
            .send(data)
            .set('Accept', 'application/json')
//            .expect('Content-Type', /json/)
            .expect(204)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});