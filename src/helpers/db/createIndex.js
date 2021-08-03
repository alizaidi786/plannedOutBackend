module.exports.createIndexes = async ({db}) => {
    try {
        await db.collection('entities').createIndex({
            "name": "text",
            "data.value": "text",
            "data.synonyms.name": "text"
        }, {"name": "search_index"});

        await db.collection('entity_categories').createIndex({"name": "text"}, {"name": "search_index"});

        await db.collection('entity_types').createIndex({"name": "text"}, {"name": "search_index"});

        await db.collection('qnas').createIndex({"questions": "text"}, {"name": "search_index"});

    } catch (e) {
        if (e.codeName !== "IndexOptionsConflict") {
            throw e;
        }
    }

};