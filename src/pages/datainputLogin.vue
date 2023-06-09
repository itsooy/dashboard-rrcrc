<template>
    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <q-page class="flex flex-center">
        <div
          id="particles-js"
        ></div>
        <q-btn
          color="white"
          class="absolute-top-right"
          flat
          round
          @click="$q.dark.toggle()"
        />
        <q-card
          class="input-form"
          v-bind:style="
            $q.platform.is.mobile ? { width: '80%' } : { width: '30%' }
          "
        >
          <q-card-section>

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                Login for Data Input
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input filled v-model="email" label="Email" lazy-rules />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Password"
                lazy-rules
              />

              <div>
                <q-btn
                  label="Login"
                  type="button"
                  color="primary"
                  @click="loginNotify"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
      </div>
    </div>
  
</template>

<script>
import { color } from 'echarts/lib/export'
export default {
data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
           loginNotify(){
            if(this.email === 'datainput@crcrr.org' && this.password === 'Dashboard2022@'){
              this.$router.push("/datainput")
              this.$q.notify({
                message: 'Welcome to Data Input Page',
                color: 'green',
                
              })
             }else(
               this.$q.notify({
                message: 'Unsuccessful, Please try again!',
                color: 'red',
              })
             )
            }
        },

}
</script>

<style>

</style>