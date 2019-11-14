<template>
  <b-form class="border">
    <b-container>
      <b-row>
        <b-col>
          <b-form-group label="category:" label-for="jokes-categories">
            <b-form-select
              v-model="selectedCategory"
              name="jokes-categories"
              id="jokes-categories"
            >
              <option value="" disabled selected>Select your category</option>
              <option
                v-for="category in categories"
                v-bind:key="category"
                :value="category"
                >{{ category }}</option
              >
            </b-form-select>
          </b-form-group>
        </b-col>
        <b-col md="auto">
          <b-form-group
            label="Amount of jokes:"
            label-for="number-of-jokes-input"
          >
            <b-form-input
              v-model.number="numberOfJokes"
              id="number-of-jokes-input"
              type="number"
              class="JokesSearchForm__Number"
              step="1"
              min="1"
              value="1"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-input
            v-model="searchInputText"
            placeholder="Search text..."
            type="text"
            class="JokesSearchForm__Search"
          />
        </b-col>
      </b-row>
    </b-container>
  </b-form>
</template>

<script>
export default {
  name: "JokesSearchForm",
  computed: {
    searchInputText: {
      get() {
        return this.$store.state.searchInputText;
      },
      set(value) {
        this.$store.commit("updateSearchInputText", value);
      }
    },
    numberOfJokes: {
      get() {
        return this.$store.state.numberOfJokes;
      },
      set(value) {
        this.$store.commit("updateNumberOfJokes", value);
      }
    },
    selectedCategory: {
      get() {
        return this.$store.state.selectedCategory;
      },
      set(value) {
        this.$store.commit("updateSelectedCategory", value);
      }
    },
    categories: {
      get() {
        return this.$store.state.categories;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.JokesSearchForm__Part * {
  font-size: 1.2rem;
  padding: 0.2rem;
  border: 0.1rem solid darkblue;
  border-radius: 0.6rem;
}

.JokesSearchForm__Part:first-child select {
  width: 75%;
  margin-right: 5%;
}
.JokesSearchForm__Part:first-child input {
  width: 20%;
  text-align: center;
}
.JokesSearchForm__Part:last-child input {
  width: 100%;
  margin-top: 1rem;
}
.JokesSearchForm__Part button {
  background: darkblue;
  color: white;
  margin-top: 1rem;
  padding: 0.2rem 0.6rem;
}
.JokesSearchForm__Part button:hover {
  cursor: pointer;
}
</style>
