<template>
  <q-page>
    <div class="q-pa-xs">
      <div class="q-gutter">
        <q-tabs
          v-model="tab"
          indicator-color="transparent"
          active-color="white"
          dense
          class="bg-teal text-grey-5 shadow-2"
        >
          <q-tab name="january" label="January" @click="showJanTextLoading"/>
          <q-tab name="february" label="February" @click="showFebTextLoading"/>
          <q-tab name="march" label="March" @click="showMarTextLoading"/>
          <q-tab name="april" label="April" @click="showAprTextLoading"/>
          <q-tab name="may" label="May" @click="showMayTextLoading"/>
          <q-tab name="june" label="June" @click="showJunTextLoading"/>
          <q-tab name="july" label="July" @click="showJulTextLoading"/>
          <q-tab name="august" label="August" @click="showAugTextLoading"/>
          <q-tab name="september" label="September" @click="showSepTextLoading"/>
          <q-tab name="october" label="October" @click="showOctTextLoading"/>
          <q-tab name="november" label="November" disable/>
          <q-tab name="december" label="December" disable/>
        </q-tabs>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="january"  >        
            
            <jan-main-table />
          
            <q-inner-loading :showing="visible" dark>
              <q-spinner-facebook size="550px" color="teal-8" />
            </q-inner-loading>
          
          </q-tab-panel>
          <q-tab-panel name="february">
            
            <feb-main-table />
            
            <q-inner-loading :showing="visible" dark>
              <q-spinner-facebook size="550px" color="teal-8" />
            </q-inner-loading>

          </q-tab-panel>
          <q-tab-panel name="march">
            
            <mar-main-table />
            
            <q-inner-loading :showing="visible" dark>
              <q-spinner-facebook size="550px" color="teal-8" />
            </q-inner-loading>

          </q-tab-panel>
          <q-tab-panel name="april">
            
            <apr-main-table />
            
            <q-inner-loading :showing="visible" dark>
              <q-spinner-facebook size="550px" color="teal-8" />
            </q-inner-loading>

          </q-tab-panel>
          <q-tab-panel name="may">
            
            <may-main-table />
            
            <q-inner-loading :showing="visible" dark>
              <q-spinner-facebook size="550px" color="teal-8" />
            </q-inner-loading>

          </q-tab-panel>
          <q-tab-panel name="june">
            
            <jun-main-table />
            
            <q-inner-loading :showing="visible" dark>
              <q-spinner-facebook size="550px" color="teal-8" />
            </q-inner-loading>

          </q-tab-panel>
          <q-tab-panel name="july">
            
            <jul-main-table />
            
            <q-inner-loading :showing="visible" dark>
              <q-spinner-facebook size="550px" color="teal-8" />
            </q-inner-loading>

          </q-tab-panel>
          <q-tab-panel name="august">
            
            <aug-main-table />
            
            <q-inner-loading :showing="visible" dark>
              <q-spinner-facebook size="550px" color="teal-8" />
            </q-inner-loading>

          </q-tab-panel>
          <q-tab-panel name="september">
            
            <sep-main-table />
            
            <q-inner-loading :showing="visible" dark>
              <q-spinner-facebook size="550px" color="teal-8" />
            </q-inner-loading>

          </q-tab-panel>
          <q-tab-panel name="october">
            
            <oct-main-table />
            
            <q-inner-loading :showing="visible" dark>
              <q-spinner-facebook size="550px" color="teal-8" />
            </q-inner-loading>

          </q-tab-panel>
          
          
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script>
    import Vue from 'vue';
    import IEcharts from 'vue-echarts-v3/src/full.js';
    import {exportFile} from 'quasar';
    import janMainTable from 'src/components/maindashboard/janMainTable';
    import febMainTable from 'src/components/maindashboard/febMainTable';
    import marMainTable from 'src/components/maindashboard/marMainTable';
    import aprMainTable from 'src/components/maindashboard/aprMainTable';
    import mayMainTable from 'src/components/maindashboard/mayMainTable';
    import junMainTable from 'src/components/maindashboard/junMainTable';
    import julMainTable from 'src/components/maindashboard/julMainTable';
    import augMainTable from 'src/components/maindashboard/augMainTable';
    import sepMainTable from 'src/components/maindashboard/sepMainTable';
    import octMainTable from 'src/components/maindashboard/octMainTable';

    
    Vue.component('IEcharts', IEcharts);
    
    function wrapCsvValue(val, formatFn) {
        let formatted = formatFn !== void 0
            ? formatFn(val)
            : val

        formatted = formatted === void 0 || formatted === null
            ? ''
            : String(formatted)

        formatted = formatted.split('"').join('""')

        return `"${formatted}"`
    }

    export default {
        components: { janMainTable, febMainTable, marMainTable, aprMainTable, mayMainTable, junMainTable, julMainTable, augMainTable, sepMainTable, octMainTable },
        data() {
            return {
                filter: '',
                mode: 'list',
                tab: 'october',
                visible: false,
                showSimulatedReturnData: false
            }
        },
        computed: {
         
        },
        methods: {
            SaveImage(type) {
                const linkSource = this.$refs[type].getDataURL();
                const downloadLink = document.createElement('a');
                document.body.appendChild(downloadLink);
                downloadLink.href = linkSource;
                downloadLink.target = '_self';
                downloadLink.download = type + '.png';
                downloadLink.click();
            },
            exportTable() {
                // naive encoding to csv format
                const content = [this.columns.map(col => wrapCsvValue(col.label))].concat(
                    this.data.map(row => this.columns.map(col => wrapCsvValue(
                        typeof col.field === 'function'
                            ? col.field(row)
                            : row[col.field === void 0 ? col.name : col.field],
                        col.format
                    )).join(','))
                ).join('\r\n')

                const status = exportFile(
                    'activity.csv',
                    content,
                    'text/csv'
                )

                if (status !== true) {
                    this.$q.notify({
                        message: 'Browser denied file download...',
                        color: 'negative',
                        icon: 'warning'
                    })
                }
            },
            readData(){

            },
            showDenemeTextLoading () {
              this.$q.loading.show({
                spinner: QSpinnerFacebook,
                spinnerColor: 'yellow',
                spinnerSize: 140,
                backgroundColor: 'purple',
                message: 'Some important process is in progress. Hang on...',
                messageColor: 'black'
              })

              // hiding in 3s
              this.timer = setTimeout(() => {
                this.$q.loading.hide()
                this.timer = void 0
              }, 3000)
            },
            beforeDestroy () {
              if (this.timer !== void 0) {
                clearTimeout(this.timer)
                this.$q.loading.hide()
              }
            },
            showJanTextLoading () {
              this.visible = true
              this.showSimulatedReturnData = false
              setTimeout(() => {
                this.visible = false
                this.showSimulatedReturnData = true
              }, 3500)
            },
            showFebTextLoading () {
              this.visible = true
              this.showSimulatedReturnData = false
              setTimeout(() => {
                this.visible = false
                this.showSimulatedReturnData = true
              }, 3500)
            },
            showMarTextLoading () {
              this.visible = true
              this.showSimulatedReturnData = false
              setTimeout(() => {
                this.visible = false
                this.showSimulatedReturnData = true
              }, 3500)
            },
            showAprTextLoading () {
              this.visible = true
              this.showSimulatedReturnData = false
              setTimeout(() => {
                this.visible = false
                this.showSimulatedReturnData = true
              }, 3500)
            },
            showMayTextLoading () {
              this.visible = true
              this.showSimulatedReturnData = false
              setTimeout(() => {
                this.visible = false
                this.showSimulatedReturnData = true
              }, 3500)
            },
            showJunTextLoading () {
              this.visible = true
              this.showSimulatedReturnData = false
              setTimeout(() => {
                this.visible = false
                this.showSimulatedReturnData = true
              }, 3500)
            },
            showJulTextLoading () {
              this.visible = true
              this.showSimulatedReturnData = false
              setTimeout(() => {
                this.visible = false
                this.showSimulatedReturnData = true
              }, 3500)
            },
            showAugTextLoading () {
              this.visible = true
              this.showSimulatedReturnData = false
              setTimeout(() => {
                this.visible = false
                this.showSimulatedReturnData = true
              }, 3500)
            },
            showSepTextLoading () {
              this.visible = true
              this.showSimulatedReturnData = false
              setTimeout(() => {
                this.visible = false
                this.showSimulatedReturnData = true
              }, 3500)
            },
            showOctTextLoading () {
              this.visible = true
              this.showSimulatedReturnData = false
              setTimeout(() => {
                this.visible = false
                this.showSimulatedReturnData = true
              }, 3500)
            }
        },
        created(){
          this.readData()
        }
    }
</script>

<style scoped>
  .blue_dark {
    background-color: #082f56;
  }

  .green_dark {
    background-color: #084a0b;
  }

  .orange_dark {
    background-color: #64350e;
  }
  .my-custom th {
    color: #2196f3 !important;
  }
  .my-custom td {
    color: #009688;
  }
</style>
