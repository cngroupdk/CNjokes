<template>
  <div>
    <b-button id="show-btn" v-on:click="showModal">Login</b-button>

    <b-modal ref="login-modal" hide-footer title="Create profile">
      <b-form v-on:submit.stop.prevent="loginProfile">
        <b-form-group label="User name:" label-for="input-username">
          <b-form-input
            v-model="userName"
            id="input-username"
            type="text"
            placeholder="Enter user name"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-form-group label="Password:" label-for="input-user-password">
          <b-form-input
            v-model="userPassword"
            id="input-user-password"
            type="password"
            placeholder="Enter password"
            required
          >
          </b-form-input>
          <b-alert v-if="loginFailed" variant="danger" show
            >Wrong username/password</b-alert
          >
        </b-form-group>
        <b-button type="submit" variant="success">Login</b-button>
        <b-button v-on:click="hideModal" type="button" variant="danger"
          >Cancel</b-button
        >
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { api } from "../modules/api.js";

export default {
  name: "JokesLoginWindow",
  data() {
    return {
      userName: "",
      userPassword: "",
      isUserLogin: false,
      loginFailed: false
    };
  },
  methods: {
    loginProfile() {
      api.loginProfile(this.checkLogin, this.userName, this.userPassword);
    },

    checkLogin(data) {
      this.isUserLogin = data.response;
      this.loginFailed = !data.response;
      if (data.response) {
        this.$store.commit("updateLoginUser", this.userName);
        this.hideModal();
        this.fetchLikedJokesID();
        // this.makeLoginToast();
      }
    },
    showModal() {
      this.$refs["login-modal"].show();
    },
    hideModal() {
      this.$refs["login-modal"].hide();
    },
    fetchLikedJokesID() {
      api.fetchLikedJokesID(
          this.getLikedJokesID,
          this.$store.state.loginUser,
        );
    },
    getLikedJokesID(response) {
      console.log(response)
      this.$store.commit("updateUsersLikedJokesID", response)
    },
    // makeLoginToast() {
    //   this.$bvToast.toast(`You are successfully loginned as: ${this.$store.state.loginUser}`, {
    //       title: 'BootstrapVue Toast',
    //       autoHideDelay: 5000,
    //       appendToast: false,
    //     });
    // }
  }
};
</script>

<style scoped></style>
