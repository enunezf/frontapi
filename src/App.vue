<template>
  <div id='app'>
    <h1>{{ msg }} <small><button type="button" @click="buscaTipos">buscar</button></small></h1>
    <ul>
      <li v-for='tipos_atributos in tiposAtributos' :key='tipos_atributos.codigo'>
        {{ tipos_atributos.descripcion }}
      </li>
    </ul>
    <h2>{{ searchMessage }}</h2>
  </div>
</template>

<script>
import tiposAtributosService from './services/tipos-atributos'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Ejemplo uso rest api',
      tiposAtributos: []
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tiposAtributos.length}`
    }
  },

  methods: {
    buscaTipos () {
      console.log('Ejecuta busca')
      tiposAtributosService.search()
        .then(res => {
          console.log(res)
          this.tiposAtributos = res
        })
    }
  }

}
</script>

<style>
</style>
