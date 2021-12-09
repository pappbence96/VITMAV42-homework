import { assert, expect } from 'chai'
import saveGymMiddleware from '../../../src/middlewares/gym/save-gym.middleware.js'

describe('saveGymMiddleware unit tests', function () {
  it("should update 'res.locals.gym' with the provided data and call 'save()' on it", function (done) {
    const middleware = saveGymMiddleware({ GymModel: {} })

    const mockRequest = {
      body: {
        name: 'test name',
        address: 'test address',
      },
    }

    const mockResponse = {
      locals: {
        gym: {
          _id: 3,
          save: (cb) => {
            cb(null)
          },
        },
      },
      redirect: (url) => {
        expect(url).to.be.eql('/gyms/3/equipment')
        expect(mockResponse.locals.gym.name).to.be.eql('test name')
        expect(mockResponse.locals.gym.address).to.be.eql('test address')
        done()
      },
    }

    middleware(mockRequest, mockResponse, () => {})
  })

  it("should set 'res.locals.err' and call 'next()' when address is missing", function (done) {
    const middleware = saveGymMiddleware({ GymModel: {} })

    const mockRequest = {
      body: {
        name: 'test name',
      },
    }

    const mockResponse = {
      locals: {},
    }

    middleware(mockRequest, mockResponse, () => {
      expect(mockResponse.locals.error.message).to.be.eql(
        'Address cannot be empty'
      )
      expect(mockResponse.locals.error.code).to.be.eql(400)
      done()
    })
  })

  it("should set 'res.locals.err' and call 'next()' when name is missing", function (done) {
    const middleware = saveGymMiddleware({ GymModel: {} })

    const mockRequest = {
      body: {
        address: 'test address',
      },
    }

    const mockResponse = {
      locals: {},
    }

    middleware(mockRequest, mockResponse, () => {
      expect(mockResponse.locals.error.message).to.be.eql(
        'Name cannot be empty'
      )
      expect(mockResponse.locals.error.code).to.be.eql(400)
      done()
    })
  })

  it("should forward 'error' to 'next' when a database error occurs", function (done) {
    const middleware = saveGymMiddleware({ GymModel: {} })

    const mockRequest = {
      body: {
        name: 'test name',
        address: 'test address',
      },
    }

    const mockResponse = {
      locals: {
        gym: {
          _id: 3,
          save: (cb) => {
            cb('database error')
          },
        },
      },
    }

    middleware(mockRequest, mockResponse, (err) => {
      expect(err).to.be.eql('database error')
      done()
    })
  })
})
