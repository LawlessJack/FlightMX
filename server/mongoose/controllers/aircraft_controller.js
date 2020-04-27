'use strict'

const { Aircraft } = require('../models')

const postAircraft = (req, res, next) => {
  const props = req.body.aircraft

  Aircraft.create(props)
    .then(aircraft => res.json({
      ok: true,
      message: 'aircraft created',
      aircraft
    }))
    .catch(next)
}

const getAircraft = (req, res, next) => {
  Aircraft.findAll()
    .then(aircrafts => res.json({
      ok: true,
      message: 'aircrafts found',
      aircrafts
    }))
    .catch(next)
}

const getAircraft = (req, res, next) => {
  const aircraftId = req.params.id

  Aircraft.findById(aircraftId)
    .then(aircraft => res.json({
      ok: true,
      message: 'aircraft found',
      aircraft
    }))
    .catch(next)
}

const putAircraft = (req, res, next) => {
  const aircraftId = req.params.id
  const props = req.body.aircraft

  Aircraft.update(aircraftId, props)
    .then(aircraft => res.json({
      ok: true,
      message: 'Aircraft updated',
      aircraft
    }))
    .catch(next)
}

const deleteAircraft = (req, res, next) => {
  const aircraftId = req.params.id

  Aircraft.destroy(aircraftId)
    .then(deleteCount => res.json({
      ok: true,
      message: `Aircraft '${aircraftId}' deleted`,
      deleteCount
    }))
    .catch(next)
}

module.exports = {
  postAircraft,
  getAircraft,
  getAircraft,
  putAircraft,
  deleteAircraft
}
