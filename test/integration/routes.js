import test from 'ava';
import supertest from 'supertest';
import app from '../../src/app';

test('/: returns 200 and html', async t => {
	const res = await supertest(app).get('/');

	t.is(res.status, 200);
	t.is(res.type, 'text/html');
});

test('/api/: get request gives error', async t => {
	const res = await supertest(app).get('/api/');

	t.is(res.status, 404);
});

test('/api/: valid data returns 200 and json (1/2)', async t => {
	const res = await supertest(app).post('/api/').attach('file', 'test/fixtures/sample_data_1.txt');

	t.is(res.status, 200);
	t.is(res.type, 'application/json');
	t.falsy(res.body.error);
	t.is(res.body.size, 29);
});

test('/api/: valid data returns 200 and json (2/2)', async t => {
	const res = await supertest(app).post('/api/').attach('file', 'test/fixtures/sample_data_2.json');

	t.is(res.status, 200);
	t.is(res.type, 'application/json');
	t.falsy(res.body.error);
	t.is(res.body.size, 62);
});

test('/api/: invalid data returns 400 and json with error', async t => {
	const res = await supertest(app).post('/api/').field('file', 'not a file');

	t.is(res.status, 400);
	t.is(res.type, 'application/json');
	t.truthy(res.body.error);
});

test('/api/: wrong field(s) returns 400 and json with error', async t => {
	const res = await supertest(app).post('/api/').attach('file2', 'test/fixtures/sample_data_2.json');

	t.is(res.status, 400);
	t.is(res.type, 'application/json');
	t.truthy(res.body.error);
});
