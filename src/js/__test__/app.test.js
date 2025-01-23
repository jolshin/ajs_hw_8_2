import ErrorRepository, { data } from "../errorrepository";

test('creating the errorRepository', () => {

    const expected = { "errorCodes" : new Map(data)}
    
    const received = new ErrorRepository(data);

    expect(received).toEqual(expected);

});

const cases = [
  ['400', 'Bad Request'],
  ['401', 'Unauthorized'],
  ['402', 'Payment Required'],
  ['403', 'Forbidden'],
  ['404', 'Not Found'],
  ['405', 'Method Not Allowed'],
  ['406', 'Not Acceptable'],
  ['407', 'Proxy Authentication Required'],
  ['408', 'Request Timeout'],
  ['409', 'Conflict'],
  ['410', 'Gone']
];

const errorRepository = new ErrorRepository(data);

test.each(cases)("translate method takes %s as argument and returns %s", (code, description) => {
  const received = errorRepository.translate(code);
  expect(received).toEqual(description);
});