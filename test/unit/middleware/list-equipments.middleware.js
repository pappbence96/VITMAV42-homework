import { expect } from 'chai'
import listEquipmentsMiddleware from '../../../src/middlewares/equipment/list-equipments.middleware.js'

describe('listEquipmentsMiddleware unit tests', function () {
  it("should return an array of equipment objects in 'res.locals.equipments'", function (done) {
    const middleware = listEquipmentsMiddleware({
      EquipmentModel: {
        find: (param, cb) => {
          expect(param).to.be.eql({ _location: 3 })
          cb(null, ['mock', 'mock'])
        },
      },
    })

    const mockResponse = {
      locals: {},
    }

    middleware({ params: { gymId: 3 } }, mockResponse, () => {
      expect(mockResponse.locals.equipments).to.be.eql(['mock', 'mock'])
      done()
    })
  })

  it("should forward 'error' to 'next' when a database error occurs", function (done) {
    const middleware = listEquipmentsMiddleware({
      EquipmentModel: {
        find: (param, cb) => {
          expect(param).to.be.eql({ _location: 3 })
          cb('database error', null)
        },
      },
    })

    const mockResponse = {
      locals: {},
    }

    middleware({ params: { gymId: 3 } }, mockResponse, (err) => {
      expect(err).to.be.eql('database error')
      done()
    })
  })
})
