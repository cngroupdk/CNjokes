<template>
  <div>
    <b-button id="show-btn" v-on:click="showModal">Sing up</b-button>

    <b-modal ref="create-profile-modal" hide-footer title="Create profile">
      <b-form v-on:submit.stop.prevent="createProfile">
        <b-form-group label="User name:" label-for="input-username">
          <b-form-input
            v-model="userName"
            id="input-username"
            type="text"
            placeholder="Enter user name"
            required
          >
          </b-form-input>
          <b-alert v-if="!isProfileCreated" variant="danger" show
            >Username already taken</b-alert
          >
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
          <b-alert v-if="isPasswordsDifferent" variant="danger" show
            >Passwords do not match</b-alert
          >
        </b-form-group>
        <b-form-group
          label="Password again:"
          label-for="input-user-password-check"
        >
          <b-form-input
            v-model="userCheckPassword"
            id="input-user-password-check"
            type="password"
            placeholder="Enter password again"
            required
          >
          </b-form-input>
        </b-form-group>

        <b-button type="submit" variant="success">Create profile</b-button>
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
  name: "JokesSingUpWindow",

  data() {
    return {
      userName: "",
      userPassword: "",
      userCheckPassword: "",
      isProfileCreated: true,
      isPasswordsDifferent: false
    };
  },
  methods: {
    createProfile() {
      if (this.userPassword === this.userCheckPassword) {
        api.createProfile(
          this.checkProfileCreated,
          this.userName,
          this.userPassword
        );
        this.isPasswordsDifferent = false;
      } else {
        this.isPasswordsDifferent = true;
      }
    },
    checkProfileCreated(data) {
      this.isProfileCreated = data.response;
      if (data.response) {
        this.hideModal();
      }
    },
    showModal() {
      this.$refs["create-profile-modal"].show();
    },
    hideModal() {
      this.$refs["create-profile-modal"].hide();
    }
  }
};
</script>

<style scoped></style>
