const sinon     = require('sinon'),
      AdminData = require('./Admin'),
      testDB    = require('../../test/init');

// Unit Tests

describe('Unit Tests', () => {
    describe('Get admin data', () => {
        it('Should fetch admin data from the db', () => {
            const fakeDB = {
                query: sinon.mock().withArgs(
                    sinon.match.string
                )
            }
            return AdminData.getAdmin(fakeDB)
        })
    })
})