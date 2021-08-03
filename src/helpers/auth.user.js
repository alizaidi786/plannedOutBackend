module.exports.findUser = async (Connection, token, role = "user") => {
    if (role === "parent") {
        const ParentModel = Connection.model('parents');

        return await new Promise((resolve, reject) => {
            ParentModel.findOne({'loginToken': token})
                .then(user => {
                    if (user) {
                        if (user.isDeleted) {
                            reject('USER_IS_DELETED');
                        }
                        resolve(user);
                    } else
                        reject('AUTH_FAILED');
                })
                .catch(err => {
                    reject(err);
                })
        });
    } else {
        const CredentialModel = Connection.model('credentials');

        return await new Promise((resolve, reject) => {
            CredentialModel.findOne({'loginToken': token})
                .populate({
                    path: 'userId'
                })
                .exec()
                .then(user => {
                    if (user) {
                        if (!user.isActive) {
                            reject('USER_IS_INACTIVE');
                        }
                        if (user.isDeleted) {
                            reject('USER_IS_DELETED');
                        }
                        resolve(user);
                    } else
                        reject('AUTH_FAILED');
                })
                .catch(err => {
                    reject(err);
                })
        });
    }
};