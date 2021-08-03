const responseConstants = require('../constants/status.messages.constants');

const create = (code, status, message, data) => {
    return {
        statusCode: code,
        body: 
            {
                status,
                message,
                data
            },
    }
};

const success = (message, data) => {
    return create(200,
        responseConstants.SUCCESS,
        message,
        data
    );
};

const error = (message, data) => {
    return create(400,
        responseConstants.ERROR,
        message,
        data
    );
};


module.exports = {
    create,
    success,
    error,
};
