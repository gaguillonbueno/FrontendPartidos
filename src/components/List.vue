<template>
  <div class="row">
    <div class="column">
      <table>
        <tr>
          <th scope="col">Fecha</th>
          <th scope="col">Local</th>
          <th scope="col">Goles Local</th>
          <th scope="col">Visitante</th>
          <th scope="col">Goles Visitante</th>
          <th scope="col">Acciones</th>
        </tr>
        <tr v-for="item of partidos" :key="item.id">
          <td>
            <input v-model="item.fecha.slice(0, 19)" readonly type="text" />
          </td>
          <td>
            <input v-model="item.local.nombre" readonly type="text" />
          </td>
          <td>
            <input
              v-model="item.goles_local"
              v-bind:readonly="is_readonly"
              type="text"
            />
          </td>
          <td>
            <input v-model="item.visitante.nombre" readonly type="text" />
          </td>
          <td>
            <input
              v-model="item.goles_visitante"
              v-bind:readonly="is_readonly"
              type="text"
            />
          </td>
          <td>
            <button
              class="button button_delete"
              @click="borrar(item.id)"
              title="Eliminar"
            >
              <svg
                class="bi bi-trash"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button @click="actualizar(item)" :class="[btn_editar_class]">
              {{ btn_editar }}
            </button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
import Button from "./Button.vue";

export default {
  name: "List",
  data() {
    return {
      btn_editar: "Editar Marcador",
      btn_editar_class: "button button_edit",
      is_readonly: true,
      token: this.$store.state.token
      };
  },
  components: {
    Button,
  },
  computed: {
    ...mapState(["partidos"]),
  },
  methods: {
    ...mapActions(["obtenerPartidos"]),

    borrar(item) {
      axios
        .delete("http://127.0.0.1:8080/partido/borrarPartido/" + item, {
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then(() => {
          this.obtenerPartidos();
        });
    },
    actualizar(object) {
      if (this.is_readonly) {
        this.is_readonly = false;
        this.btn_editar = "Guardar";
        this.btn_editar_class = "button button_edit_2";
      } else {
        this.is_readonly = true;
        this.btn_editar = "Editar Marcador";
        this.btn_editar_class = "button button_edit";
      }
      this.update_est(object);
    },
    update_est(object) {
      let obj = {
        goles_local: object.goles_local,
        goles_visitante: object.goles_visitante,
      };
      let _id = object.id;

      axios
        .put("http://127.0.0.1:8080/partido/actualizarPartido/" + _id, obj, {
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then(() => {
          this.obtenerPartidos();
        });
    },
  },
  created() {
    this.obtenerPartidos();
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.row {
  text-align: center;
  align-content: center;
}

.column {
  padding: 15px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid rgb(238, 241, 239);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-weight: bold;
}

th,
td {
  text-align: left;
  padding: 16px;
  color: rgb(241, 241, 248);
  font-weight: bold;
  background-color: #eff7f3;
}

th {
  background-color: #16ad62;
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other on screens that are smaller than 600 px */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}

input {
  border: 0;
  background-color: transparent;
  text-align: center;
  color: darkslategrey;
}

.button_edit {
  padding: 8px;
  margin-left: 2px;
  color: #fff;
  background-color: #16ad62;
  border: none;
  border-radius: 5px;
  font-size: small;
}

.button_edit_2 {
  padding: 8px;
  margin-left: 2px;
  color: #fff;
  background-color: #378fc2;
  border: none;
  border-radius: 5px;
  font-size: small;
}

.button_delete {
  padding: 8px;
  margin-left: 5px;
  color: #fff;
  background-color: #bd1c1cde;
  border: none;
  border-radius: 5px;
}

.button:hover {
  background-color: #636464;
}
</style>