<template>
    <v-card>
        <v-card-title>Bank Details</v-card-title>
        <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">
              Specific Detail
            </div>
    
            <v-timeline
              align-top
              dense
            >   
      <v-timeline-item>
            <div class="font-weight-normal">
                <strong>IFSC</strong> 
            </div>
            <div>
                {{ bankdata.ifsc }}
            </div>
         </v-timeline-item>
      <v-timeline-item>
           <div class="font-weight-normal">
                <strong>Bank ID</strong> 
            </div>
            <div>
                {{ bankdata.bank_id }}
            </div>
      </v-timeline-item>
      <v-timeline-item>
          <div class="font-weight-normal">
                <strong>Bank Branch</strong> 
            </div>
            <div>
                {{ bankdata.branch }}
            </div>
          </v-timeline-item>
     <v-timeline-item >
         <div class="font-weight-normal">
                <strong>Address</strong> 
            </div>
            <div>
                {{ bankdata.address }}
            </div>
      </v-timeline-item>
      <v-timeline-item>
          <div class="font-weight-normal">
                <strong>City</strong> 
            </div>
            <div>
                {{ bankdata.city }}
            </div>
      </v-timeline-item>
      <v-timeline-item>
          <div class="font-weight-normal">
                <strong>District</strong> 
            </div>
            <div>
                {{ bankdata.district }}
            </div>
        </v-timeline-item>
      <v-timeline-item>
          <div class="font-weight-normal">
                <strong>State</strong> 
            </div>
            <div>
                {{ bankdata.state }}
            </div>
          </v-timeline-item>
            </v-timeline>
          </v-card-text>
        
    </v-card>

</template>

<script>
import store from "../store/index";


export default {
    name:'bankdetail',
    props: ['slug'],
    data(){
        return {
            bankdata : null
        }
    },
    mounted(){
        this.bankdata = store.state.apidata.cacheddata.filter(data => data.ifsc === this.slug)[0];
       
    }
}
</script>
