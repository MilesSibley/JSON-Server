module.exports = function(){
    var faker = require("faker");
    var _= require("lodash");
    return {
        people: _.times(100, function(n) {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar()
            }
        }),
        products: _.times(1000, function(n) {
            return {
                name: faker.commerce.productName(),
                application: faker.commerce.department(),
                type: 'Data',
                legendTitle: faker.commerce.productDescription(),
                fileName: faker.system.fileName(),
                imageStatus: 'Active',
                order: n,
                image: faker.random.image()
            }
        })
    }
}
