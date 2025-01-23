export const data = [
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


export default class ErrorRepository {
    constructor(data) {
        this.errorCodes = new Map(data);

    };

    translate(code) {
        return this.errorCodes.get(code);
    };

};



//const errorRepository = new ErrorRepository(data);

//data.forEach((item) => console.log(errorRepository.translate(item[0])));

