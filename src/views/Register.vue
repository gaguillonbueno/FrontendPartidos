<template>
  <div class="body">
    <div class="register">
      <h1>Ingrese los siguientes datos</h1>
      <form @submit.prevent="registro">
        <p>
          <input type="text" v-model="nombre" placeholder="Nombre" />
        </p>
        <p>
          <input type="text" v-model="correo" placeholder="Email" />
        </p>
        <p>
          <input type="text" v-model="username" placeholder="Username" />
        </p>
        <p>
          <input type="password" v-model="password" placeholder="Password" />
        </p>
        <p>
          <input
            type="password"
            v-model="password2"
            placeholder="Password Nuevamente"
          />
        </p>
        <p class="submit">
          <button type="submit" class="button">Registrar</button>
        </p>
      </form>
      <p>{{ mensaje }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Head from "./../components/Head.vue";
import Form from "./../components/Form.vue";
import List from "./../components/List.vue";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      nombre: "",
      correo: "",
      mensaje: "",
    };
  },
  components: {
    Head,
    Form,
    List,
  },
  methods: {
    registro() {
      if (this.password != this.password2) {
        alert("Las contraseñas no coinciden");
      } else {
        axios
          .post("http://127.0.0.1:8080/register", {
            username: this.username,
            password: this.password,
            nombre: this.nombre,
            correo: this.correo,
          })
          .then(() => {
            this.limpiar();
            alert("Registro exitoso");
            this.$router.push("/login");
          }).catch(error => alert(error.response.data.mensaje));

      }
    },
    limpiar() {
      this.username = null;
      this.password = null;
      this.nombre = null;
      this.correo = null;
    },
  },
};
</script>

<style scoped>
/*
 * Copyright (c) 2012 Thibaut Courouble
 * http://www.cssflow.com
 * Licensed under the MIT License
 *
 * Sass/SCSS source: https://goo.gl/0jzXf
 * PSD by Orman Clark: https://goo.gl/D8zmk
 */

.body {
  font: 13px/20px "Lucida Grande", Tahoma, Verdana, sans-serif;
  color: #404040;
}

.register {
  position: relative;
  margin: 30px auto;
  padding: 20px 20px 20px;
  width: 310px;
  background: white;
  border-radius: 3px;
  -webkit-box-shadow: 0 0 200px rgba(255, 255, 255, 0.5),
    0 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 200px rgba(255, 255, 255, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3);
}

.register:before {
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

.register h1 {
  margin: -20px -20px 21px;
  line-height: 40px;
  font-size: 15px;
  color: rgb(250, 245, 245);
  text-align: center;
  background: #343534;
  border-bottom: 1px solid #cfcfcf;
  border-radius: 3px 3px 0 0;
  background-image: -webkit-linear-gradient(top, whiteffd, #eef2f5);
  background-image: -moz-linear-gradient(top, whiteffd, #eef2f5);
  background-image: -o-linear-gradient(top, whiteffd, #eef2f5);
  background-image: linear-gradient(to bottom, whiteffd, #eef2f5);
  -webkit-box-shadow: 0 1px whitesmoke;
  box-shadow: 0 1px whitesmoke;
}

.register p {
  margin: 20px 0 0;
}

.register p:first-child {
  margin-top: 0;
}

.register input[type="text"],
.register input[type="password"] {
  width: 278px;
}

.register p.remember_me {
  float: left;
  line-height: 31px;
}

.register p.remember_me label {
  font-size: 12px;
  color: #777;
  cursor: pointer;
}

.register p.remember_me input {
  position: relative;
  bottom: 1px;
  margin-right: 4px;
  vertical-align: middle;
}

.register p.submit {
  text-align: center;
}

.register-help {
  margin: 20px 0;
  font-size: 11px;
  color: white;
  text-align: center;
  text-shadow: 0 1px #2a85a1;
}

.register-help a {
  color: #cce7fa;
  text-decoration: none;
}

.register-help a:hover {
  text-decoration: underline;
}

:-moz-placeholder {
  color: #c9c9c9 !important;
  font-size: 13px;
}

::-webkit-input-placeholder {
  color: #ccc;
  font-size: 13px;
}

input {
  font-family: "Lucida Grande", Tahoma, Verdana, sans-serif;
  font-size: 14px;
}

input[type="text"],
input[type="password"] {
  margin: 5px;
  padding: 0 10px;
  width: 200px;
  height: 34px;
  color: #404040;
  background: white;
  border: 1px solid;
  border-color: #c4c4c4 #d1d1d1 #d4d4d4;
  border-radius: 2px;
  outline: 5px solid #eff4f7;
  -moz-outline-radius: 3px;
  -webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.12);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.12);
}

input[type="text"]:focus,
input[type="password"]:focus {
  border-color: #7dc9e2;
  outline-color: #dceefc;
  outline-offset: 0;
}

input[type="submit"] {
  padding: 0 18px;
  height: 29px;
  font-size: 12px;
  font-weight: bold;
  color: #527881;
  text-shadow: 0 1px #e3f1f1;
  background: #cde5ef;
  border: 1px solid;
  border-color: #b4ccce #b3c0c8 #9eb9c2;
  border-radius: 16px;
  outline: 0;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  background-image: -webkit-linear-gradient(top, #edf5f8, #cde5ef);
  background-image: -moz-linear-gradient(top, #edf5f8, #cde5ef);
  background-image: -o-linear-gradient(top, #edf5f8, #cde5ef);
  background-image: linear-gradient(to bottom, #edf5f8, #cde5ef);
  -webkit-box-shadow: inset 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.15);
}

input[type="submit"]:active {
  background: #cde5ef;
  border-color: #9eb9c2 #b3c0c8 #b4ccce;
  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2);
}

.lt-ie9 input[type="text"],
.lt-ie9 input[type="password"] {
  line-height: 34px;
}

.button {
  margin: 5px;
  padding: 10px 20px;
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
</style>
