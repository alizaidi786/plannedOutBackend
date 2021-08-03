module.exports.saveLog = async (Connection, actionCreatorId, operation, response, data, userType) => {
    const LogsModel = Connection.model('logs');
    let logObject = {};
    if (userType !== undefined) {
        logObject = {
        userType,
        actionCreatorId,
        operation,
        response,
        data
    };
    } else {
        logObject = {
            userType: "users",
            actionCreatorId,
            operation,
            response,
            data
        };
    }

    const log = new LogsModel(logObject);

    return await log.save();

};