<template>
  <v-card>
    <v-card-title>
      <v-row>
      <v-col cols="6">
          <v-select
            :items="cityList"
            v-model="cityFilterValue"
            label="City"
          ></v-select>  
      </v-col>
    <v-col cols="6">
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      </v-col>
      </v-row>
    </v-card-title>
  
    <v-data-table
      :headers="headers"
      :items="results"
      :search="search"
    >
  <template v-slot:item.controls="props">
        <v-btn class="mx-2" v-if="checkfav(props.item)" fab  @click="untogglefav(props.item)">
        <v-icon  color="red" dark>mdi-heart</v-icon>
        </v-btn>
        <v-btn class="mx-2" v-else fab dark small  @click="togglefav(props.item)">
          <v-icon color="white" >mdi-heart</v-icon>
        </v-btn>
      </template>
    <template v-slot:item.redirect="props">
       <router-link
            :to="{
              name: 'banks',
              params: {
                slug: props.item.ifsc
              }
            }"
            >
        <v-btn class="mx-2">
         <v-icon  color="red" dark>mdi-open-in-new</v-icon> 
        </v-btn>
        </router-link>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from "axios";
import store from "../store/index"
  export default {
    name: 'banktable',
    data () {
      return {
        loading: true,
        is_fav: false,
        search: '',
        cityList: [
          {text: "Pune", value: 'PUNE'},
          {text: "Bangalore", value: 'BANGALORE'},
          {text: "Nashik", value: 'NASHIK'},
          {text: "Aurangabad", value: 'AURANGABAD'},
          {text: "Thane", value: 'THANE'},
        ],
        headers: [
          {
            text: 'IFSC',
            align: 'start',
            filterable: false,
            value: 'ifsc',
          },
          { text: 'bank_id', value: 'bank_id' },
          { text: 'branch', value: 'branch' },
          { text: 'address', value: 'address' },
          { text: 'city', value: 'city', filter: this.cityFilter, },
          { text: 'district', value: 'district' },
          { text: 'state', value: 'state' },
          { text: "", value: "controls", sortable: false },
          { text: "", value: "redirect", sortable: false }
        ],
        results: [],
        cityFilterValue: null,
      }
    },
  methods: {
    checkfav(item){
      return store.state.favourites.favouritedata.some(data => data.ifsc === item.ifsc)
    },
    readDataFromAPI() {
      
      this.loading = true;
      this.results = store.state.apidata.cacheddata;
      console.log(this.results.length);
      if (this.results.length == 0) {
        axios
        .get(
          "https://indianbanksrestapi.herokuapp.com/api/branches/" 
        )
        .then((response) => {
          this.loading = false;
          this.results = response.data;
          store.dispatch("cachedapidata", response.data);
        });
      }
      
    },
    cityFilter(value) {
        // If this filter has no value we just skip the entire filter.
        if (!this.cityFilterValue) {
          return true;
        }
        // Check if the current loop value (The calories value)
        // equals to the selected value at the <v-select>.
        return value === this.cityFilterValue;
      },
    togglefav( row_value){
      this.is_fav = true;
        store.dispatch("addFavouriteRow", row_value)
      },
    untogglefav( row_value){
      this.is_fav = false;
      store.dispatch("deleteFaouriteRow", row_value)
    }
  },
  mounted() {
    this.readDataFromAPI();
  },
  }
</script>