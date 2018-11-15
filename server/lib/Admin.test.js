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
    describe('Create admin', () => {
        it('Should send admin data to the db', () => {
            const fakeDB = {
                query: sinon.mock().withArgs(
                    sinon.match.string
                )
            }
            const admin = {
                auth0_id: 'facebook|2364333683593240',
                username: 'Sean Parmar',
                email: 'sean.parmar@yahoo.com',
                created_at: new Date(),
                photos: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2364333683593240&height=50&width=50&ext=1542583011&hash=AeTN0SqI2Za8SBuz'
            }
            return AdminData.createAdmin(fakeDB, admin)
        })
    })
})