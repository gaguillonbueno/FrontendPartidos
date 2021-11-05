import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        partidos: null,
        equipos: null,
        usuario: null,
        token: null,
    },
    mutations: {
        llenarPartidos(state, data) {
            state.partidos = data;
        },
        llenarEquipos(state, data) {
            state.equipos = data;
        },
        iniciarSesion(state, data) {
            state.token = data.token;
            state.usuario = data.userId;
            console.log(state);
        },
        
    },
    actions: {
        obtenerPartidos: async function ({
            commit
        }) {
            let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjZXNkIiwiZXhwIjoxNjM2MDc1NTI1LCJpYXQiOjE2MzYwNTc1MjV9.cWEm2GtuWLyUqjFjHFZ82mT1XhX4l4zF-MEyIo2OsDsfiSaOzZBu7waFwSfG-GBeCdXbzbo7fYl5Ezxyedrz1Q'
            let datos = await axios.get('http://127.0.0.1:8080/partido/usuarioPartidos/' + this.state.usuario, {
                headers: {
                    'Authorization': `Bearer ${this.state.token}`,
                    'Access-Control-Allow-Origin': '*'
                }
            })
            commit('llenarPartidos', datos.data)
        },

        obtenerEquipos: async function ({
            commit
        }) {
            let token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjZXNkIiwiZXhwIjoxNjM2MDc1NTI1LCJpYXQiOjE2MzYwNTc1MjV9.cWEm2GtuWLyUqjFjHFZ82mT1XhX4l4zF-MEyIo2OsDsfiSaOzZBu7waFwSfG-GBeCdXbzbo7fYl5Ezxyedrz1Q'
            let datos = await axios.get('http://127.0.0.1:8080/equipo/listaEquipo', {
                headers: {
                    'Authorization': `Bearer ${this.state.token}`,
                    'Access-Control-Allow-Origin': '*'
                }
            })
            commit('llenarEquipos', datos.data)
        },

        login: function ({
            commit
        }, data) {
            commit('iniciarSesion', data)
        },
    },
    modules: {}
})