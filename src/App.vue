<template>
  <div id="app">
    <div id="nav" v-if="!authenticate">
      <router-link to="/login">Inicie Sesión</router-link> |
      <router-link to="/register">Registrese</router-link>
    </div>
    <div v-else>
      <div>
        <button title="salir" class="button_out" @click="cerrarSesion">→</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),

  methods: {
    cerrarSesion(){
      this.$store.state.token = null;
      this.$router.push("/login");
    }
  },

  computed: {
    authenticate() {
      if (this.$store.state.token != null) {
        return true;
      }
      return false;
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("https://img.freepik.com/foto-gratis/campo-futbol-fondo-foco-estadio_46250-1363.jpg?size=626&ext=jpg");
  background-color: #7e94dd;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 6%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #f2f7f5;
}

#nav a.router-link-exact-active {
  color: #51cf9d;
}

.button_out {
  margin: 5px;
  padding: 5px 10px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #ec0505f5;
  border: none;
  border-radius: 5px;
  float: right;
}
.button:hover {
  background-color: #636669;
}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

</style>


