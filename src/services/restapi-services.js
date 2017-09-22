import trae from 'trae'
import configService from './config'

const restapiService = trae.create({
  baseUrl: configService.apiUrl
})

export default restapiService
