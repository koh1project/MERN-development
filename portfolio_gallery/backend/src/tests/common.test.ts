import request from 'supertest';

const TEST_URL = 'http://localhost:8000';

describe.skip('Test set up check', () => {
  test('should return true', () => {
    expect(true).toBe(true);
  });

  test('API End-point should return something', (done) => {
    request(TEST_URL).get('/').expect(200);
    done();
  });
});
