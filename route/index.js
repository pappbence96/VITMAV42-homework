import authMiddleware from '../middlewares/auth/auth.middleware.js'
import checkCredentialsMiddleware from '../middlewares/auth/check-credentials.middleware.js'
import logoutMiddleware from '../middlewares/auth/logout.middleware.js'
import renderMiddleware from '../middlewares/render.middleware.js'

import deleteGymMiddleware from '../middlewares/gym/delete-gym.middleware.js'
import getGymMiddleware from '../middlewares/gym/get-gym.middleware.js'
import listGymsMiddleware from '../middlewares/gym/list-gyms.middleware.js'
import saveGymMiddleware from '../middlewares/gym/save-gym.middleware.js'

import deleteEquipmentMiddleware from '../middlewares/equipment/delete-equipment.middleware.js'
import getEquipmentMiddleware from '../middlewares/equipment/get-equipment.middleware.js'
import listEquipmentsMiddleware from '../middlewares/equipment/list-equipments.middleware.js'
import saveEquipmentMiddleware from '../middlewares/equipment/save-equipment.middleware.js'
import getEquipmentTypesMiddleware from '../middlewares/equipment/get-equipment-types.middleware.js'

import GymModel from '../models/gym.js'
import EquipmentModel from '../models/equipment.js'
import EquipmentType from '../models/equipment_type.js'

export default function (app) {
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
  app.get('/', renderMiddleware(objRepo, 'index'))

  // Landing page
  app.post(
    '/',
    checkCredentialsMiddleware(objRepo),
    renderMiddleware(objRepo, 'index')
  )
}
