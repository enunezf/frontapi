import restapiService from './restapi-services'

const tiposAtributosService = {}

tiposAtributosService.search = function () {
  return restapiService.get('/api/')
    .then(res => res.data)
}

export default tiposAtributosService
