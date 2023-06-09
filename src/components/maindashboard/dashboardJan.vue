<template>
  <q-page>
    <div class="q-pa-xs">
      <div class="q-gutter">    
        <div class="row q-col-gutter-sm">
          <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <q-card>
              <q-card-section :class="$q.dark.isActive?'blue_dark':'bg-blue-8'" class="text-white">
                <div class="row">
                  <div class="col-10">
                    <div class="text-h6">Number of Total Programs</div>
                    <div class="text-h5">{{generalDashboardJanContents.totalPrograms}}</div>
                  </div>
                  <div class="col-2">
                    <q-icon size="62px" name="home" right/>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <q-card>
              <q-card-section :class="$q.dark.isActive?'green_dark':'bg-green-8'" class="text-white">
                <div class="row">
                  <div class="col-10">
                    <div class="text-h6">Number of Active Programs</div>
                    <div class="text-h5">{{generalDashboardJanContents.activePrograms}}</div>
                  </div>
                  <div class="col-2">
                    <q-icon size="62px" name="trending_up" right/>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <q-card>
              <q-card-section :class="$q.dark.isActive?'orange_dark':'bg-orange-9'" class="text-white">
                <q-tooltip content-class="bg-grey-transparent" content-style="font-size: 16px">
                  <div>
                    1. charIty 13 <br>
                    2. innovator 13 
                  </div>
                </q-tooltip>
                <div class="row">
                  <div class="col-10">
                    <div class="text-h6">Number of Projects Going On</div>
                    <div class="text-h5">{{generalDashboardJanContents.projectsGoingOn}}</div>
                  </div>
                  <div class="col-2">
                    <q-icon size="62px" name="compare_arrows" right/>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
          <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <q-card>
              <q-card-section :class="$q.dark.isActive?'purple_dark':'bg-purple-9'" class="text-white">
                <div class="row">
                  <div class="col-10">
                    <div class="text-h6"># of Unique Volunteers / Hours</div>
                    <div class="text-h5">{{generalDashboardJanContents.totalUniqueVolunteers}} / {{generalDashboardJanContents.totalVolunteerHours}}</div>
                  </div>
                  <div class="col-2">
                    <q-icon size="62px" name="favorite" right/>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <div class="row q-col-gutter-sm q-ma-xs">
                      <!-- MAIN TABLE -->
            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <q-card>
                  <q-card-section>
                      <q-img src="/statics/images/rrcrc-logo_1200x300.png"></q-img>
                  </q-card-section>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12" align="center" >
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                  </div>
                  <!--
                      color scale
                      No-Data ==> grey
                      Warning ==> red-10
                      Need Attention ==> orange-8
                      Monitor Closely ==> yellow-7
                      Good ==> green-9
                      Review Notice ==> blue
                    -->
                  <div class="q-pa-md">
                      <q-btn-group spread>
                        <q-btn label="Foodbank"
                          push
                          split
                          color="yellow-7"
                          to="/foodbank"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # Clients (Unique) <br>
                            KPI2: # Total Contacts <br>
                            KPI3: # of Beneficiaries (Extended) <br>
                            KPI4: Activities (#) <br>
                            KPI5: # Households Receiving Deliveries <br>
                            KPI6: # Referrals to Programs and Services
                          </q-tooltip>
                      </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Baby Cupboard"
                          push
                          split
                          color="red-10"
                          to="/babycupboard"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # Clients (Unique) <br>
                            KPI2: # Total Contacts <br>
                            KPI3: # of Beneficiaries (Extended) <br>
                            KPI4: Activities (#)
                          </q-tooltip>
                      </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Community Fridge"
                          push
                          split
                          color="grey"
                          to="/communityfridge"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # Clients (Unique) <br>
                            KPI2: # Total Contacts <br>
                            KPI3: # of Beneficiaries (Extended)
                          </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Gifts in Kind"
                          push
                          split
                          color="orange-8"
                          to="/giftsinkind"
                          size="lg"
                          no-caps
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # Clients (Unique) <br>
                            KPI2: # Total Contacts <br>
                            KPI3: # of Beneficiaries (Extended) <br>
                            KPI4: Activities (#)
                          </q-tooltip>
                        </q-btn>
                        
                      </q-btn-group>
                      <q-btn-group spread>
                        <q-btn label="charITy13"
                          push
                          split
                          color="yellow-7"
                          to="/charity13"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # Clients (Unique) <br>
                            KPI2: # Total Contacts <br>
                            KPI3: # of Beneficiaries (Extended)	<br>
                            KPI4: Activities (#)	<br>
                            KPI5: # of Systems Live and Deployed with Client
                          </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Entrepreneurship"
                          push
                          split
                          color="green-9"
                          to="/enterpreneurship"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # Clients (Unique) <br>
                            KPI2: # Total Contacts <br>
                            KPI3: # of Beneficiaries (Extended)	<br>
                            KPI4: Activities (#)	<br>
                          </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Employment Skills"
                          push
                          split
                          color="orange-8"
                          to="/employementskills"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # Clients (Unique) <br>
                            KPI2: # Total Contacts <br>
                            KPI3: # of Beneficiaries (Extended)	<br>
                            KPI4: Activities (#)	<br>
                          </q-tooltip>
                      </q-btn>
                      <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Social Harvest"
                          push
                          split
                          color="grey"
                          to="/socialharvest"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # Clients (Unique) <br>
                            KPI2: # Total Contacts <br>
                            KPI3: # of Beneficiaries (Extended)	<br>
                            KPI4: Activities (#)	<br>
                            KPI5: Production Volume (Kg)
                          </q-tooltip>
                      </q-btn>
                        
                      </q-btn-group>
                      <q-btn-group spread>
                        <q-btn label="Market Mobile"
                          push
                          split
                          color="grey"
                          to="/marketmobile"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # Total Contacts <br>
                            KPI2: Activities (#) <br>
                            KPI3: # of Pick-up Contacts	<br>
                            KPI4: # of Home Delivery
                          </q-tooltip>
                      </q-btn>
                      <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Clothespin"
                          push
                          split
                          color="yellow-7"
                          to="/clothespin"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # Clients (Unique) <br>
                            KPI2: # Total Contacts <br>
                            KPI3: # of Beneficiaries (Extended)
                          </q-tooltip>
                      </q-btn>

                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="GFB"
                          push
                          split
                          color="green-9"
                          to="/gfb"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # Clients (Unique) <br>
                            KPI2: # Total Contacts <br>
                            KPI3: No. of Boxes Sold (#)            
                          </q-tooltip>
                        </q-btn>

                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Overbrook SP"
                          push
                          split
                          color="blue"
                          to="/overbrooksp"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # of safety improvement initiatives implemented <br>
                            KPI2: # of vulnerable residents involved in safety improvement initiatives<br>
                          </q-tooltip>
                        </q-btn>
                      </q-btn-group>
                      <q-btn-group spread>

                        <q-btn label="Collective Kitchen"
                          push
                          split
                          color="red-10"
                          to="/collectivekitchen"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # Clients (Unique) <br>
                            KPI2: # Total Contacts <br>
                            KPI3: # of Beneficiaries (Extended)	<br>
                            KPI4: Activities (#)
                          </q-tooltip>
                      </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Community Meals"
                          push
                          split
                          color="grey"
                          to="/communitymeals"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # Clients (Unique) <br>
                            KPI2: # Total Contacts <br>
                            KPI3: Activities (#) <br>
                            KPI4: # of Meals Served
                          </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="PINS"
                          push
                          split
                          color="grey"
                          to="/pins"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # of network interventions after a traumatic event<br>
                            KPI2: # of community and social service providers in the networks<br>
                            KPI3: # of active PINS networks across the city
                          </q-tooltip>
                      </q-btn>
                        
                      </q-btn-group>
                      <q-btn-group spread>
                        <q-btn label="YouthPREducation"
                          push
                          split
                          color="grey"
                          to="/youthprograms"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # of Children (Unique)<br>
                            KPI2: # Total Children<br>
                            KPI3: # of Youth (Unique)<br>
                            KPI4: # Total Youth<br>
                            KPI5: # of Activities
                          </q-tooltip>
                      </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="YouthPRSport"
                          push
                          split
                          color="grey"
                          to="/youthprograms"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # of Children (Unique)<br>
                            KPI2: # Total Children<br>
                            KPI3: # of Youth (Unique)<br>
                            KPI4: # Total Youth<br>
                            KPI5: # of Activities
                          </q-tooltip>
                      </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="YouthPRViolin"
                          push
                          split
                          color="grey"
                          to="/youthprograms"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # of Children (Unique)<br>
                            KPI2: # Total Children<br>
                            KPI3: # of Youth (Unique)<br>
                            KPI4: # Total Youth<br>
                            KPI5: # of Activities
                          </q-tooltip>
                      </q-btn>
                      
                      </q-btn-group>
                      <q-btn-group spread>
                        <q-btn label="Yes I Can"
                          push
                          split
                          color="orange-8"
                          to="/yesican"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # of people using the service<br>
                            KPI2: # of poverty reduction plans developed<br>
                            KPI3: # of peope with achieved goals 
                          </q-tooltip>
                      </q-btn>
                        
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Crisis Intervention"
                          push
                          split
                          color="green-9"
                          to="/crisisintervention"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # of people using the services <br>
                            KPI2: # total contact
                          </q-tooltip>
                        </q-btn>
                        <q-separator vertical />
                        <q-separator vertical />
                        <q-btn label="Community Development"
                          push
                          split
                          color="grey"
                          to="/cd"
                          size="lg"
                          no-caps
                          disable
                          style="height: 90px"
                        >
                          <q-tooltip content-style="font-size: 16px">
                            KPI1: # of residents participating in community events, celebrations, and other CD activities <br>
                            KPI2: # of collaborative initiatives <br>
                            KPI3: # of contact with community associations and tenants circles
                          </q-tooltip>
                        </q-btn>
                      </q-btn-group>
                  </div>
              </q-card>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <q-card flat bordered class="">
              <q-card-section class="row">
                <div class="text-h6 col-12">Overall Performance (Monthly)
                  <q-btn flat dense icon="fas fa-download" class="float-right"  @click="SaveImage('gauge')"
                          :color="!$q.dark.isActive? 'grey-8':'white'">
                    <q-tooltip>Download</q-tooltip>
                  </q-btn>
                </div>
              </q-card-section>
              <q-separator inset></q-separator>
              <q-card-section>
                <IEcharts ref="gauge" :option="overallJanGaugeOptions" :resizable="true" style="height:345px"/>
              </q-card-section>
            </q-card>
            <q-card flat bordered class="">
              <q-card-section class="row">
                <div class="text-h6 col-12">Budget Usage (Cumulative)
                  <q-btn flat dense icon="fas fa-download" class="float-right"  @click="SaveImage('gauge')"
                          :color="!$q.dark.isActive? 'grey-8':'white'">
                    <q-tooltip>Download</q-tooltip>
                  </q-btn>
                </div>
              </q-card-section>
              <q-separator inset></q-separator>
              <q-card-section>
                <IEcharts ref="gauge" :option="budgetJanGaugeOptions" :resizable="true" style="height:345px"/>
              </q-card-section>
            </q-card> 
            </div>
        </div>
        <div>
          <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <q-card flat bordered class="">
                <q-card-section>
                  <div class="text-h6 col-12">Expenses (Cumulative)
                    <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                          :color="!$q.dark.isActive? 'grey-8':'white'">
                      <q-tooltip>Download</q-tooltip>
                    </q-btn>
                  </div>
                </q-card-section>

                <q-separator inset></q-separator>

                <q-card-section>
                  <IEcharts ref="pie" :option="expensesJanCumulativePieOptions" :resizable="true" style="height:470px"/>
                </q-card-section>
              </q-card>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <q-card flat bordered class="">
                <q-card-section>
                  <div class="text-h6 col-12">Expenses (Monthly)
                    <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                          :color="!$q.dark.isActive? 'grey-8':'white'">
                      <q-tooltip>Download</q-tooltip>
                    </q-btn>
                  </div>
                </q-card-section>

                <q-separator inset></q-separator>

                <q-card-section>
                  <IEcharts ref="pie" :option="expensesJanMonthlyPieOptions" :resizable="true" style="height:470px"/>
                </q-card-section>
              </q-card>
            </div>
          </div>
          <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <q-card flat bordered class="">
                  <q-card-section class="row">
                    <div class="text-h6 col-12">Expenses & Revenues
                      <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('bar')"
                            :color="!$q.dark.isActive? 'grey-8':'white'">
                        <q-tooltip>Download</q-tooltip>
                      </q-btn>
                    </div>
                  </q-card-section>

                  <q-separator inset></q-separator>

                  <q-card-section>
                    <IEcharts :option="barOptions" ref="bar" :resizable="true" style="height:270px"/>
                  </q-card-section>
                </q-card>
              </div>
          </div>  
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
    import Vue from 'vue';
    import IEcharts from 'vue-echarts-v3/src/full.js';
    import {exportFile} from 'quasar';
    import db from 'src/boot/firebase';
    import meaningofColors from 'src/components/meaningofColors.vue';

    
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
      name: "dashboardJan",
      components: { meaningofColors },
      data() {
          return {
              filter: '',
              mode: 'list',
              tab: 'january',
              generalDashboardJanContent: {
                activePrograms: null,
                actualBudget: null,
                budgetUsage: null,
                expAP: null,
                expAdmin: null,
                expCPO: null,
                expCSDmcConnell: null,
                expCYFlactation: null,
                expGFB: null,
                expGIK: null,
                expIncubator: null,
                expOthers: null,
                expPRfftnc: null,
                expSH: null,
                expSeniorsProject: null,
                expenses: null,
                mainOverallPerformance: null,
                projectsGoingOn: null,
                revenues: null,
                totalPrograms: null,
                totalUniqueVolunteers: null,
                totalVolunteerHours: null
              },
              generalDashboardJanContents : [],
              gikJanContent: {
              
            },
            gikJanContents : []
            
          }
      },
        computed: {
          overallJanGaugeOptions() {
            return {
              tooltip: {
                  formatter: '{a} {b} : {c}%'
              },
              series: [
                  {
                      type: 'gauge',
                      name: "Overall Performance",
                      detail: {formatter: '{value}%'},
                      data: [{value: 82}],
                      min: 0,
                      max: 200,
                      radius: '100%',
                      axisLine: {
                          show: true,
                          lineStyle: {
                              color: [[0.20, '#b71c1c'], [0.30, '#f57c00'], [0.45, '#fdd835'], [0.60, '#2e7d32'], [1, '#2196f3']],
                              width: 30
                          },
                      },

                  }
              ]
            }
          },
          budgetJanGaugeOptions() {
             return {
              tooltip: {
                  formatter: '{a} {b} : {c}%'
              },
              series: [
                  {
                      type: 'gauge',
                      name: "Budget Usage",
                      detail: {formatter: '{value}%'},
                      data: [{value: this.generalDashboardJanContents.budgetUsage}],
                      min: 200,
                      max: 0,
                      radius: '100%',
                      axisLine: {
                          show: true,
                          lineStyle: {
                              color: [[0.30, '#c10015'], [0.50, '#f57c00'], [0.80, '#2e7d32'], [1, '#2196f3']],
                              width: 30
                          },
                      },
                  }
              ]
             }
          },
          expensesJanCumulativePieOptions() {
                return {
                    tooltip: {
                        show: true,
                        formatter: '{a} <br/>{b}: {c} $ ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0,
                        textStyle: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    series: [
                        {
                            name: 'Categories',
                            type: 'pie',
                            radius: ['30%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'inner',
                                    formatter: function (param, index) {
                                        return param.value + ' $'
                                    }
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '20',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            selectedMode: 'single',
                            data: [
                                {value: this.generalDashboardJanContents.expAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardJanContents.expPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardJanContents.expIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardJanContents.expAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardJanContents.expGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardJanContents.expGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardJanContents.expSH, name: 'SH', selected: false},
                                {value: this.generalDashboardJanContents.expCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardJanContents.expCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardJanContents.expSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardJanContents.expCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardJanContents.expOthers, name: 'Others', selected: false}
                            ]
                        }
                    ]
                }
          },
          expensesJanMonthlyPieOptions() {
                return {
                    tooltip: {
                        show: true,
                        formatter: '{a} <br/>{b}: {c} & ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0,
                        textStyle: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    series: [
                        {
                            name: 'Categories',
                            type: 'pie',
                            radius: ['30%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'inner',
                                    formatter: function (param, index) {
                                        return param.value + ' $'
                                    }
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '20',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            selectedMode: 'single',
                            data: [
                                {value: this.generalDashboardJanContents.expAdmin, name: 'Admin', selected: false},
                                {value: this.generalDashboardJanContents.expPRfftnc, name: 'PR / FFTNC', selected: false},
                                {value: this.generalDashboardJanContents.expIncubator, name: 'Incubator', selected: false},
                                {value: this.generalDashboardJanContents.expAP, name: 'A-P', selected: false},
                                {value: this.generalDashboardJanContents.expGFB, name: 'GFB', selected: false},
                                {value: this.generalDashboardJanContents.expGIK, name: 'GIK', selected: false},
                                {value: this.generalDashboardJanContents.expSH, name: 'SH', selected: false},
                                {value: this.generalDashboardJanContents.expCYFlactation, name: 'CYF / Lactation', selected: false},
                                {value: this.generalDashboardJanContents.expCPO, name: 'CPO', selected: false},
                                {value: this.generalDashboardJanContents.expSeniorsProject, name: 'Seniors Project', selected: false},
                                {value: this.generalDashboardJanContents.expCSDmcConnell, name: 'CSD / McConnell', selected: false},
                                {value: this.generalDashboardJanContents.expOthers, name: 'Others', selected: false}
                            ]
                        }
                    ]
                }
          },
          barOptions() {
                return {
                    grid: {
                        bottom: '20%',
                        left: '15%',
                        top: '3%'
                    },
                    legend: {
                        bottom: 0,
                        textStyle: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    tooltip: {},
                    dataset: {
                        dimensions: ['time_period', 'expenses', 'revenues'],
                        source: [
                          //{time_period: 'January', expenses: 0, revenues: 0},
                            {time_period: 'January', expenses: this.generalDashboardJanContents.expenses, revenues: this.generalDashboardJanContents.revenues},
                            {time_period: 'February', expenses: 17492.1, revenues: 8000},
                            {time_period: 'March', expenses: this.generalDashboardMarContents.expenses, revenues: this.generalDashboardMarContents.revenues},
                            {time_period: 'April', expenses: this.generalDashboardAprContents.expenses, revenues: this.generalDashboardAprContents.revenues},
                            {time_period: 'May', expenses: this.generalDashboardMayContents.expenses, revenues: this.generalDashboardMayContents.revenues},
                            {time_period: 'June', expenses: this.generalDashboardJunContents.expenses, revenues: this.generalDashboardJunContents.revenues},
                            {time_period: 'July', expenses: this.generalDashboardJulContents.expenses, revenues: this.generalDashboardJulContents.revenues},
                            {time_period: 'August', expenses: this.generalDashboardAugContents.expenses, revenues: this.generalDashboardAugContents.revenues},
                            {time_period: 'September', expenses: this.generalDashboardSepContents.expenses, revenues: this.generalDashboardSepContents.revenues},
                            {time_period: 'October', expenses: this.generalDashboardOctContents.expenses, revenues: this.generalDashboardOctContents.revenues},
                            {time_period: 'November', expenses: this.generalDashboardNovContents.expenses, revenues: this.generalDashboardNovContents.revenues},
                            {time_period: 'December', expenses: this.generalDashboardDecContents.expenses, revenues: this.generalDashboardDecContents.revenues}
                        ]
                    },
                    xAxis: {
                        type: 'category',
                        // axisLabel: {
                        //     rotate: 45
                        // }
                        axisLabel: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    yAxis: {
                        // name: 'Goal',
                        // nameLocation: 'center',
                        // nameGap: 30,
                        // nameTextStyle:{
                        //     fontWeight: 'bold'
                        // }
                        axisLabel: {
                            formatter: function (value, index) {
                                return value + ' $'
                            },
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    series: [
                        {type: 'bar', name: 'Expenses'},
                        {type: 'bar', name: 'Revenues'}
                    ]
                }
          },
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
              //    GENERAL DASHBOARD | JANUARY
            var docgeneralDashboardJanRef = db.collection("generalDashboard").doc("january");

            docgeneralDashboardJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.generalDashboardJanContents = doc.data();
                    this.totalExpenseJan();
                    this.cumulativeBudgetUsageJan();
                    this.overallPerformanceJan();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //   GIFTS IN KIND | JANUARY
            var docgikJanRef = db.collection("gik").doc("january");

            docgikJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikJanContents = doc.data();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            },
            totalExpenseJan(){
              const getRealValue = (val) => +val || val;
              return this.generalDashboardJanContents.expenses = getRealValue(this.generalDashboardJanContents.expAdmin) + 
              getRealValue(this.generalDashboardJanContents.expPRfftnc) + getRealValue(this.generalDashboardJanContents.expIncubator) + 
              getRealValue(this.generalDashboardJanContents.expAP) + getRealValue(this.generalDashboardJanContents.expGFB) + 
              getRealValue(this.generalDashboardJanContents.expGIK) + getRealValue(this.generalDashboardJanContents.expSH) + 
              getRealValue(this.generalDashboardJanContents.expCYFlactation) + getRealValue(this.generalDashboardJanContents.expCPO) + 
              getRealValue(this.generalDashboardJanContents.expSeniorsProject) + getRealValue(this.generalDashboardJanContents.expCSDmcConnell) + 
              getRealValue(this.generalDashboardJanContents.expOthers)
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.generalDashboardJanContents.budgetUsage = ((getRealValue(this.generalDashboardJanContents.expenses) / getRealValue(this.generalDashboardJanContents.actualBudget))*100).toFixed(2)
            },
            overallPerformanceJan(){
              const getRealValue = (val) => +val || val;
              return this.generalDashboardJanContents.mainOverallPerformance = getRealValue(this.gikJanContents.overallPerformance)
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
