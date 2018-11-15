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

// Integration Tests
describe('Integration Tests', () => {
    let db;
    function clearDb() {return db.query('delete from reviews')}
    beforeAll(() => {
        return testDB.initDb().then(database => {
            return db = database
        })
    })
    describe('Get Admin', () => {
        it('Should get admin data from db', () => {
                return AdminData.getAdmin(db).then(admin => {
                    expect(admin.length).not.toEqual(0);
                    expect(admin[0]).toMatchObject({
                        id: expect.any(String),
                        auth0_id: expect.any(String),
                        username: expect.any(String),
                        email: expect.any(String),
                        photos: expect.any(String),
                        created_at: expect.any(Date)
                    });
            })
        })
    })
    describe('Create Admin', () => {
        it('Should create an admin in db', () => {
            const admin = {
                auth0_id: 'facebook|2364333683593240',
                username: 'Sean Parmar',
                email: 'sean.parmar@yahoo.com',
                photos: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2364333683593240&height=50&width=50&ext=1542583011&hash=AeTN0SqI2Za8SBuz'
            }
            return AdminData.createAdmin(db, admin).then(createdAdmin => {
                expect(createdAdmin.length).not.toEqual(0);
                    expect(createdAdmin[0]).toMatchObject({
                        id: expect.any(String),
                        auth0_id: expect.any(String),
                        username: expect.any(String),
                        email: expect.any(String),
                        photos: expect.any(String),
                        created_at: expect.any(Date)
                    });
            })
        })
    })

})