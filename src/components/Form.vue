<template>
  <div class="body">
    <div class="form">
      <form @submit.prevent="createPartidos">
        <div class="form-row">
          <input
            type="datetime-local"
            v-model="fecha"
            class="form-control"
            id="name"
            placeholder="Fecha"
          />
        </div>
        <div class="form-row">
          <select v-model="local" class="form-control select">
            <option disabled selected value="">Seleccione Equipo Local</option>
            <option
              v-for="(equipo, i) in equipos"
              :key="i"
              v-bind:value="equipo.id"
            >
              {{ equipo.nombre }}
            </option>
          </select>
        </div>
        <div class="form-row">
          <select v-model="visitante" class="form-control select">
            <option disabled selected value="">Seleccione Equipo Visitante</option>
            <option
              v-for="(equipo, i) in equipos"
              :key="i"
              v-bind:value="equipo.id"
            >
              {{ equipo.nombre }}
            </option>
          </select>
        </div>
        <!--<div class="form-row">
          <input
            class="form-control"
            type="number"
            v-model="goles_local"
            placeholder="Goles Local"
          />
        </div>
        <div class="form-row">
          <input
            class="form-control"
            type="number"
            v-model="goles_visitante"
            placeholder="Goles Visitante"
          />
        </div>-->
        <div class="form-row">
          <button type="submit" class="button">Registrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";

export default {
  name: "Form",
  data() {
    return {
      local: "",
      visitante: "",
      goles_local: 0,
      goles_visitante: 0,
      fecha: null,
      usuario: this.$store.state.usuario,
      options: [
        { id: 1, nombre: 'A' },
        { id: 2, nombre: 'B' },
        { id: 3, nombre: 'C' }
      ],
      token: this.$store.state.token
      }
  },
  computed: {
    ...mapState(["equipos"]),
  },
  methods: {
    ...mapActions(["obtenerPartidos", "obtenerEquipos"]),
    createPartidos() {
      axios
        .post(
          "http://127.0.0.1:8080/partido/crearPartido",
          {
            local: this.local,
            visitante: this.visitante,
            goles_local: this.goles_local,
            goles_visitante: this.goles_visitante,
            usuario: this.usuario,
            fecha: this.fecha,
          },
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then(() => {
          this.obtenerPartidos();
        });
    },
  },
  created() {
    this.obtenerEquipos();
  },
};
</script>

<style scoped>
.button {
  margin: 5px;
  padding: 15px 25px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #16ad62;
  border: none;
  border-radius: 5px;
  width: 100%;
}
.button:hover {
  background-color: #636669;
}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.form-row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 5px;
  padding: 2px;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.select {
  height: 48px;
}

.body {
  font: 13px/20px "Lucida Grande", Tahoma, Verdana, sans-serif;
  color: #404040;
}

.form {
  position: relative;
  margin: 20px auto;
  padding: 20px 20px 20px;
  width: 310px;
  width: 30%;
}

.form:before {
  content: "";
  position: absolute;
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -8px;
  z-index: -1;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 4px;
}

:-moz-placeholder {
  color: #312d2d !important;
  font-size: 13px;
}

::-webkit-input-placeholder {
  color: #312d2d;
  font-size: 13px;
}
</style>