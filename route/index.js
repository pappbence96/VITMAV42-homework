const authMiddleware = require('../middlewares/auth/auth.middleware')
const checkCredentialsMiddleware = require('../middlewares/auth/check-credentials.middleware')
const logoutMiddleware = require('../middlewares/auth/logout.middleware')
const renderMiddleware = require('../middlewares/render.middleware')

const deleteGymMiddleware = require('../middlewares/gym/delete-gym.middleware')
const getGymMiddleware = require('../middlewares/gym/get-gym.middleware')
const listGymsMiddleware = require('../middlewares/gym/list-gyms.middleware')
const saveGymMiddleware = require('../middlewares/gym/save-gym.middleware')

const deleteEquipmentMiddleware = require('../middlewares/equipment/delete-equipment.middleware')
const getEquipmentMiddleware = require('../middlewares/equipment/get-equipment.middleware')
const listEquipmentsMiddleware = require('../middlewares/equipment/list-equipments.middleware')
const saveEquipmentMiddleware = require('../middlewares/equipment/save-equipment.middleware')
const getEquipmentTypesMiddleware = require('../middlewares/equipment/get-equipment-types.middleware')

const GymModel = require('../models/gym')
const EquipmentModel = require('../models/equipment')
const EquipmentType = require('../models/equipment_type')

module.exports = function (app) {
  const objRepo = {
    GymModel: GymModel,
    EquipmentModel: EquipmentModel,
    EquipmentType: EquipmentType,
  }

  // Create new gym equipment
  app.get(
    '/gyms/:gymId/equipment/new',
    authMiddleware(objRepo),
    getGymMiddleware(objRepo),
    getEquipmentTypesMiddleware(objRepo),
    renderMiddleware(objRepo, 'equipment_form')
  )

  // Create new gym equipment
  app.post(
    '/gyms/:gymId/equipment/new',
    authMiddleware(objRepo),
    getGymMiddleware(objRepo),
    saveEquipmentMiddleware(objRepo),
    renderMiddleware(objRepo, 'equipment_form')
  )

  // Edit existing gym equipment
  app.get(
    '/gyms/:gymId/equipment/:equipmentId',
    authMiddleware(objRepo),
    getGymMiddleware(objRepo),
    getEquipmentMiddleware(objRepo),
    getEquipmentTypesMiddleware(objRepo),
    renderMiddleware(objRepo, 'equipment_form')
  )

  // Edit existing gym equipment
  app.post(
    '/gyms/:gymId/equipment/:equipmentId',
    authMiddleware(objRepo),
    getGymMiddleware(objRepo),
    getEquipmentMiddleware(objRepo),
    saveEquipmentMiddleware(objRepo),
    renderMiddleware(objRepo, 'equipment_form')
  )

  // Delete existing gym equipment
  app.delete(
    '/gyms/:gymId/equipment/:equipmentId',
    authMiddleware(objRepo),
    getGymMiddleware(objRepo),
    getEquipmentMiddleware(objRepo),
    deleteEquipmentMiddleware(objRepo),
    renderMiddleware(objRepo, 'equipment_list')
  )

  // Get gym equipment
  app.get(
    '/gyms/:gymId/equipment',
    authMiddleware(objRepo),
    getGymMiddleware(objRepo),
    listEquipmentsMiddleware(objRepo),
    renderMiddleware(objRepo, 'equipment_list')
  )

  // Create new gym
  app.get(
    '/gyms/new',
    authMiddleware(objRepo),
    renderMiddleware(objRepo, 'gym_form')
  )

  // Create new gym
  app.post(
    '/gyms/new',
    authMiddleware(objRepo),
    saveGymMiddleware(objRepo),
    renderMiddleware(objRepo, 'gym_form')
  )

  // Edit existing gym
  app.get(
    '/gyms/:gymId',
    authMiddleware(objRepo),
    getGymMiddleware(objRepo),
    renderMiddleware(objRepo, 'gym_form')
  )

  // Edit existing gym
  app.post(
    '/gyms/:gymId',
    authMiddleware(objRepo),
    getGymMiddleware(objRepo),
    saveGymMiddleware(objRepo),
    renderMiddleware(objRepo, 'gym_form')
  )

  // Delete gym
  app.delete(
    '/gyms/:gymId',
    authMiddleware(objRepo),
    getGymMiddleware(objRepo),
    deleteGymMiddleware(objRepo)
  )

  // List gyms
  app.get(
    '/gyms',
    authMiddleware(objRepo),
    listGymsMiddleware(objRepo),
    renderMiddleware(objRepo, 'gym_list')
  )

  // Logout
  app.get('/logout', logoutMiddleware(objRepo))

  // Landing page
  app.get(
    '/',
    checkCredentialsMiddleware(objRepo),
    renderMiddleware(objRepo, 'index')
  )
  // Landing page
  app.post(
    '/',
    checkCredentialsMiddleware(objRepo),
    renderMiddleware(objRepo, 'index')
  )
}
