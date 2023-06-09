<template>
  <q-page>
    <div class="q-pa-sm">
      <div class="q-gutter-y-sm">
        <q-tabs
          v-model="tab"
          indicator-color="transparent"
          active-color="white"
          dense
          class="bg-teal text-grey-5 shadow-2"
        >
          <q-tab name="january" label="January" />
          <q-tab name="february" label="February" />
          <q-tab name="march" label="March" />
          <q-tab name="april" label="April" />
          <q-tab name="may" label="May" />
          <q-tab name="june" label="June" />
          <q-tab name="july" label="July" />
          <q-tab name="august" label="August" />
          <q-tab name="september" label="September" />
          <q-tab name="october" label="October" />
          <q-tab name="november" label="November" />
          <q-tab name="december" label="December" />
        </q-tabs>
        <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="january">
              <div class="text-h4 q-mb-md">{{$route.name}}&ensp;|&ensp;January </div>
                <div class="row q-col-gutter-sm">
                  <!--TABLE-->
                  <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <q-card>
                      <q-list dense class="rounded-borders" >
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >Months</q-item-label>
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 1
                                <q-tooltip># Clients (Unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># Contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi1 == null)?'grey-2':(entrepreneurshipJanContents.kpi1 >= '0' && entrepreneurshipJanContents.kpi1 <= '13.4')?'red':(entrepreneurshipJanContents.kpi1 > '13.4' && entrepreneurshipJanContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJanContents.kpi1 > '17.86666667' && entrepreneurshipJanContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJanContents.kpi1 >= '22.33333333' && entrepreneurshipJanContents.kpi1 < '26.8')?'green':(entrepreneurshipJanContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi2 == null)?'grey-2':(entrepreneurshipJanContents.kpi2 >= '0' && entrepreneurshipJanContents.kpi2 <= '19')?'red':(entrepreneurshipJanContents.kpi2 > '19' && entrepreneurshipJanContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJanContents.kpi2 > '25.33333333' && entrepreneurshipJanContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJanContents.kpi2 >= '31.66666667' && entrepreneurshipJanContents.kpi2 < '38')?'green':(entrepreneurshipJanContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi3 == null)?'grey-2':(entrepreneurshipJanContents.kpi3 >= '0' && entrepreneurshipJanContents.kpi3 <= '15')?'red':(entrepreneurshipJanContents.kpi3 > '15' && entrepreneurshipJanContents.kpi3 <= '20')?'orange':(entrepreneurshipJanContents.kpi3 > '20' && entrepreneurshipJanContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJanContents.kpi3 >= '25' && entrepreneurshipJanContents.kpi3 < '30')?'green':(entrepreneurshipJanContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi4 == null)?'grey-2':(entrepreneurshipJanContents.kpi4 >= '0' && entrepreneurshipJanContents.kpi4 <= '3')?'red':(entrepreneurshipJanContents.kpi4 > '3' && entrepreneurshipJanContents.kpi4 <= '4')?'orange':(entrepreneurshipJanContents.kpi4 > '4' && entrepreneurshipJanContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJanContents.kpi4 >= '5' && entrepreneurshipJanContents.kpi4 < '6')?'green':(entrepreneurshipJanContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >February</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi1 == null)?'grey-2':(entrepreneurshipFebContents.kpi1 >= '0' && entrepreneurshipFebContents.kpi1 <= '13.4')?'red':(entrepreneurshipFebContents.kpi1 > '13.4' && entrepreneurshipFebContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipFebContents.kpi1 > '17.86666667' && entrepreneurshipFebContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipFebContents.kpi1 >= '22.33333333' && entrepreneurshipFebContents.kpi1 < '26.8')?'green':(entrepreneurshipFebContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi2 == null)?'grey-2':(entrepreneurshipFebContents.kpi2 >= '0' && entrepreneurshipFebContents.kpi2 <= '19')?'red':(entrepreneurshipFebContents.kpi2 > '19' && entrepreneurshipFebContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipFebContents.kpi2 > '25.33333333' && entrepreneurshipFebContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipFebContents.kpi2 >= '31.66666667' && entrepreneurshipFebContents.kpi2 < '38')?'green':(entrepreneurshipFebContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi3 == null)?'grey-2':(entrepreneurshipFebContents.kpi3 >= '0' && entrepreneurshipFebContents.kpi3 <= '15')?'red':(entrepreneurshipFebContents.kpi3 > '15' && entrepreneurshipFebContents.kpi3 <= '20')?'orange':(entrepreneurshipFebContents.kpi3 > '20' && entrepreneurshipFebContents.kpi3 < '25')?'yellow-7':(entrepreneurshipFebContents.kpi3 >= '25' && entrepreneurshipFebContents.kpi3 < '30')?'green':(entrepreneurshipFebContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi4 == null)?'grey-2':(entrepreneurshipFebContents.kpi4 >= '0' && entrepreneurshipFebContents.kpi4 <= '3')?'red':(entrepreneurshipFebContents.kpi4 > '3' && entrepreneurshipFebContents.kpi4 <= '4')?'orange':(entrepreneurshipFebContents.kpi4 > '4' && entrepreneurshipFebContents.kpi4 < '5')?'yellow-7':(entrepreneurshipFebContents.kpi4 >= '5' && entrepreneurshipFebContents.kpi4 < '6')?'green':(entrepreneurshipFebContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >March</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi1 == null)?'grey-2':(entrepreneurshipMarContents.kpi1 >= '0' && entrepreneurshipMarContents.kpi1 <= '13.4')?'red':(entrepreneurshipMarContents.kpi1 > '13.4' && entrepreneurshipMarContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMarContents.kpi1 > '17.86666667' && entrepreneurshipMarContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMarContents.kpi1 >= '22.33333333' && entrepreneurshipMarContents.kpi1 < '26.8')?'green':(entrepreneurshipMarContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi2 == null)?'grey-2':(entrepreneurshipMarContents.kpi2 >= '0' && entrepreneurshipMarContents.kpi2 <= '19')?'red':(entrepreneurshipMarContents.kpi2 > '19' && entrepreneurshipMarContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMarContents.kpi2 > '25.33333333' && entrepreneurshipMarContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMarContents.kpi2 >= '31.66666667' && entrepreneurshipMarContents.kpi2 < '38')?'green':(entrepreneurshipMarContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi3 == null)?'grey-2':(entrepreneurshipMarContents.kpi3 >= '0' && entrepreneurshipMarContents.kpi3 <= '15')?'red':(entrepreneurshipMarContents.kpi3 > '15' && entrepreneurshipMarContents.kpi3 <= '20')?'orange':(entrepreneurshipMarContents.kpi3 > '20' && entrepreneurshipMarContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMarContents.kpi3 >= '25' && entrepreneurshipMarContents.kpi3 < '30')?'green':(entrepreneurshipMarContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi4 == null)?'grey-2':(entrepreneurshipMarContents.kpi4 >= '0' && entrepreneurshipMarContents.kpi4 <= '3')?'red':(entrepreneurshipMarContents.kpi4 > '3' && entrepreneurshipMarContents.kpi4 <= '4')?'orange':(entrepreneurshipMarContents.kpi4 > '4' && entrepreneurshipMarContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMarContents.kpi4 >= '5' && entrepreneurshipMarContents.kpi4 < '6')?'green':(entrepreneurshipMarContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >April</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi1 == null)?'grey-2':(entrepreneurshipAprContents.kpi1 >= '0' && entrepreneurshipAprContents.kpi1 <= '13.4')?'red':(entrepreneurshipAprContents.kpi1 > '13.4' && entrepreneurshipAprContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAprContents.kpi1 > '17.86666667' && entrepreneurshipAprContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAprContents.kpi1 >= '22.33333333' && entrepreneurshipAprContents.kpi1 < '26.8')?'green':(entrepreneurshipAprContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi2 == null)?'grey-2':(entrepreneurshipAprContents.kpi2 >= '0' && entrepreneurshipAprContents.kpi2 <= '19')?'red':(entrepreneurshipAprContents.kpi2 > '19' && entrepreneurshipAprContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAprContents.kpi2 > '25.33333333' && entrepreneurshipAprContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAprContents.kpi2 >= '31.66666667' && entrepreneurshipAprContents.kpi2 < '38')?'green':(entrepreneurshipAprContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi3 == null)?'grey-2':(entrepreneurshipAprContents.kpi3 >= '0' && entrepreneurshipAprContents.kpi3 <= '15')?'red':(entrepreneurshipAprContents.kpi3 > '15' && entrepreneurshipAprContents.kpi3 <= '20')?'orange':(entrepreneurshipAprContents.kpi3 > '20' && entrepreneurshipAprContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAprContents.kpi3 >= '25' && entrepreneurshipAprContents.kpi3 < '30')?'green':(entrepreneurshipAprContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi4 == null)?'grey-2':(entrepreneurshipAprContents.kpi4 >= '0' && entrepreneurshipAprContents.kpi4 <= '3')?'red':(entrepreneurshipAprContents.kpi4 > '3' && entrepreneurshipAprContents.kpi4 <= '4')?'orange':(entrepreneurshipAprContents.kpi4 > '4' && entrepreneurshipAprContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAprContents.kpi4 >= '5' && entrepreneurshipAprContents.kpi4 < '6')?'green':(entrepreneurshipAprContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >May</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi1 == null)?'grey-2':(entrepreneurshipMayContents.kpi1 >= '0' && entrepreneurshipMayContents.kpi1 <= '13.4')?'red':(entrepreneurshipMayContents.kpi1 > '13.4' && entrepreneurshipMayContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMayContents.kpi1 > '17.86666667' && entrepreneurshipMayContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMayContents.kpi1 >= '22.33333333' && entrepreneurshipMayContents.kpi1 < '26.8')?'green':(entrepreneurshipMayContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi2 == null)?'grey-2':(entrepreneurshipMayContents.kpi2 >= '0' && entrepreneurshipMayContents.kpi2 <= '19')?'red':(entrepreneurshipMayContents.kpi2 > '19' && entrepreneurshipMayContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMayContents.kpi2 > '25.33333333' && entrepreneurshipMayContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMayContents.kpi2 >= '31.66666667' && entrepreneurshipMayContents.kpi2 < '38')?'green':(entrepreneurshipMayContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi3 == null)?'grey-2':(entrepreneurshipMayContents.kpi3 >= '0' && entrepreneurshipMayContents.kpi3 <= '15')?'red':(entrepreneurshipMayContents.kpi3 > '15' && entrepreneurshipMayContents.kpi3 <= '20')?'orange':(entrepreneurshipMayContents.kpi3 > '20' && entrepreneurshipMayContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMayContents.kpi3 >= '25' && entrepreneurshipMayContents.kpi3 < '30')?'green':(entrepreneurshipMayContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi4 == null)?'grey-2':(entrepreneurshipMayContents.kpi4 >= '0' && entrepreneurshipMayContents.kpi4 <= '3')?'red':(entrepreneurshipMayContents.kpi4 > '3' && entrepreneurshipMayContents.kpi4 <= '4')?'orange':(entrepreneurshipMayContents.kpi4 > '4' && entrepreneurshipMayContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMayContents.kpi4 >= '5' && entrepreneurshipMayContents.kpi4 < '6')?'green':(entrepreneurshipMayContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >June</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi1 == null)?'grey-2':(entrepreneurshipJunContents.kpi1 >= '0' && entrepreneurshipJunContents.kpi1 <= '13.4')?'red':(entrepreneurshipJunContents.kpi1 > '13.4' && entrepreneurshipJunContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJunContents.kpi1 > '17.86666667' && entrepreneurshipJunContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJunContents.kpi1 >= '22.33333333' && entrepreneurshipJunContents.kpi1 < '26.8')?'green':(entrepreneurshipJunContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi2 == null)?'grey-2':(entrepreneurshipJunContents.kpi2 >= '0' && entrepreneurshipJunContents.kpi2 <= '19')?'red':(entrepreneurshipJunContents.kpi2 > '19' && entrepreneurshipJunContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJunContents.kpi2 > '25.33333333' && entrepreneurshipJunContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJunContents.kpi2 >= '31.66666667' && entrepreneurshipJunContents.kpi2 < '38')?'green':(entrepreneurshipJunContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi3 == null)?'grey-2':(entrepreneurshipJunContents.kpi3 >= '0' && entrepreneurshipJunContents.kpi3 <= '15')?'red':(entrepreneurshipJunContents.kpi3 > '15' && entrepreneurshipJunContents.kpi3 <= '20')?'orange':(entrepreneurshipJunContents.kpi3 > '20' && entrepreneurshipJunContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJunContents.kpi3 >= '25' && entrepreneurshipJunContents.kpi3 < '30')?'green':(entrepreneurshipJunContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi4 == null)?'grey-2':(entrepreneurshipJunContents.kpi4 >= '0' && entrepreneurshipJunContents.kpi4 <= '3')?'red':(entrepreneurshipJunContents.kpi4 > '3' && entrepreneurshipJunContents.kpi4 <= '4')?'orange':(entrepreneurshipJunContents.kpi4 > '4' && entrepreneurshipJunContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJunContents.kpi4 >= '5' && entrepreneurshipJunContents.kpi4 < '6')?'green':(entrepreneurshipJunContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >July</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi1 == null)?'grey-2':(entrepreneurshipJulContents.kpi1 >= '0' && entrepreneurshipJulContents.kpi1 <= '13.4')?'red':(entrepreneurshipJulContents.kpi1 > '13.4' && entrepreneurshipJulContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJulContents.kpi1 > '17.86666667' && entrepreneurshipJulContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJulContents.kpi1 >= '22.33333333' && entrepreneurshipJulContents.kpi1 < '26.8')?'green':(entrepreneurshipJulContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi2 == null)?'grey-2':(entrepreneurshipJulContents.kpi2 >= '0' && entrepreneurshipJulContents.kpi2 <= '19')?'red':(entrepreneurshipJulContents.kpi2 > '19' && entrepreneurshipJulContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJulContents.kpi2 > '25.33333333' && entrepreneurshipJulContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJulContents.kpi2 >= '31.66666667' && entrepreneurshipJulContents.kpi2 < '38')?'green':(entrepreneurshipJulContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi3 == null)?'grey-2':(entrepreneurshipJulContents.kpi3 >= '0' && entrepreneurshipJulContents.kpi3 <= '15')?'red':(entrepreneurshipJulContents.kpi3 > '15' && entrepreneurshipJulContents.kpi3 <= '20')?'orange':(entrepreneurshipJulContents.kpi3 > '20' && entrepreneurshipJulContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJulContents.kpi3 >= '25' && entrepreneurshipJulContents.kpi3 < '30')?'green':(entrepreneurshipJulContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi4 == null)?'grey-2':(entrepreneurshipJulContents.kpi4 >= '0' && entrepreneurshipJulContents.kpi4 <= '3')?'red':(entrepreneurshipJulContents.kpi4 > '3' && entrepreneurshipJulContents.kpi4 <= '4')?'orange':(entrepreneurshipJulContents.kpi4 > '4' && entrepreneurshipJulContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJulContents.kpi4 >= '5' && entrepreneurshipJulContents.kpi4 < '6')?'green':(entrepreneurshipJulContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >August</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi1 == null)?'grey-2':(entrepreneurshipAugContents.kpi1 >= '0' && entrepreneurshipAugContents.kpi1 <= '13.4')?'red':(entrepreneurshipAugContents.kpi1 > '13.4' && entrepreneurshipAugContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAugContents.kpi1 > '17.86666667' && entrepreneurshipAugContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAugContents.kpi1 >= '22.33333333' && entrepreneurshipAugContents.kpi1 < '26.8')?'green':(entrepreneurshipAugContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi2 == null)?'grey-2':(entrepreneurshipAugContents.kpi2 >= '0' && entrepreneurshipAugContents.kpi2 <= '19')?'red':(entrepreneurshipAugContents.kpi2 > '19' && entrepreneurshipAugContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAugContents.kpi2 > '25.33333333' && entrepreneurshipAugContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAugContents.kpi2 >= '31.66666667' && entrepreneurshipAugContents.kpi2 < '38')?'green':(entrepreneurshipAugContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi3 == null)?'grey-2':(entrepreneurshipAugContents.kpi3 >= '0' && entrepreneurshipAugContents.kpi3 <= '15')?'red':(entrepreneurshipAugContents.kpi3 > '15' && entrepreneurshipAugContents.kpi3 <= '20')?'orange':(entrepreneurshipAugContents.kpi3 > '20' && entrepreneurshipAugContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAugContents.kpi3 >= '25' && entrepreneurshipAugContents.kpi3 < '30')?'green':(entrepreneurshipAugContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi4 == null)?'grey-2':(entrepreneurshipAugContents.kpi4 >= '0' && entrepreneurshipAugContents.kpi4 <= '3')?'red':(entrepreneurshipAugContents.kpi4 > '3' && entrepreneurshipAugContents.kpi4 <= '4')?'orange':(entrepreneurshipAugContents.kpi4 > '4' && entrepreneurshipAugContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAugContents.kpi4 >= '5' && entrepreneurshipAugContents.kpi4 < '6')?'green':(entrepreneurshipAugContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >September</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi1 == null)?'grey-2':(entrepreneurshipSepContents.kpi1 >= '0' && entrepreneurshipSepContents.kpi1 <= '13.4')?'red':(entrepreneurshipSepContents.kpi1 > '13.4' && entrepreneurshipSepContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipSepContents.kpi1 > '17.86666667' && entrepreneurshipSepContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipSepContents.kpi1 >= '22.33333333' && entrepreneurshipSepContents.kpi1 < '26.8')?'green':(entrepreneurshipSepContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi2 == null)?'grey-2':(entrepreneurshipSepContents.kpi2 >= '0' && entrepreneurshipSepContents.kpi2 <= '19')?'red':(entrepreneurshipSepContents.kpi2 > '19' && entrepreneurshipSepContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipSepContents.kpi2 > '25.33333333' && entrepreneurshipSepContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipSepContents.kpi2 >= '31.66666667' && entrepreneurshipSepContents.kpi2 < '38')?'green':(entrepreneurshipSepContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi3 == null)?'grey-2':(entrepreneurshipSepContents.kpi3 >= '0' && entrepreneurshipSepContents.kpi3 <= '15')?'red':(entrepreneurshipSepContents.kpi3 > '15' && entrepreneurshipSepContents.kpi3 <= '20')?'orange':(entrepreneurshipSepContents.kpi3 > '20' && entrepreneurshipSepContents.kpi3 < '25')?'yellow-7':(entrepreneurshipSepContents.kpi3 >= '25' && entrepreneurshipSepContents.kpi3 < '30')?'green':(entrepreneurshipSepContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi4 == null)?'grey-2':(entrepreneurshipSepContents.kpi4 >= '0' && entrepreneurshipSepContents.kpi4 <= '3')?'red':(entrepreneurshipSepContents.kpi4 > '3' && entrepreneurshipSepContents.kpi4 <= '4')?'orange':(entrepreneurshipSepContents.kpi4 > '4' && entrepreneurshipSepContents.kpi4 < '5')?'yellow-7':(entrepreneurshipSepContents.kpi4 >= '5' && entrepreneurshipSepContents.kpi4 < '6')?'green':(entrepreneurshipSepContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >October</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi1 == null)?'grey-2':(entrepreneurshipOctContents.kpi1 >= '0' && entrepreneurshipOctContents.kpi1 <= '13.4')?'red':(entrepreneurshipOctContents.kpi1 > '13.4' && entrepreneurshipOctContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipOctContents.kpi1 > '17.86666667' && entrepreneurshipOctContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipOctContents.kpi1 >= '22.33333333' && entrepreneurshipOctContents.kpi1 < '26.8')?'green':(entrepreneurshipOctContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi2 == null)?'grey-2':(entrepreneurshipOctContents.kpi2 >= '0' && entrepreneurshipOctContents.kpi2 <= '19')?'red':(entrepreneurshipOctContents.kpi2 > '19' && entrepreneurshipOctContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipOctContents.kpi2 > '25.33333333' && entrepreneurshipOctContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipOctContents.kpi2 >= '31.66666667' && entrepreneurshipOctContents.kpi2 < '38')?'green':(entrepreneurshipOctContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi3 == null)?'grey-2':(entrepreneurshipOctContents.kpi3 >= '0' && entrepreneurshipOctContents.kpi3 <= '15')?'red':(entrepreneurshipOctContents.kpi3 > '15' && entrepreneurshipOctContents.kpi3 <= '20')?'orange':(entrepreneurshipOctContents.kpi3 > '20' && entrepreneurshipOctContents.kpi3 < '25')?'yellow-7':(entrepreneurshipOctContents.kpi3 >= '25' && entrepreneurshipOctContents.kpi3 < '30')?'green':(entrepreneurshipOctContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi4 == null)?'grey-2':(entrepreneurshipOctContents.kpi4 >= '0' && entrepreneurshipOctContents.kpi4 <= '3')?'red':(entrepreneurshipOctContents.kpi4 > '3' && entrepreneurshipOctContents.kpi4 <= '4')?'orange':(entrepreneurshipOctContents.kpi4 > '4' && entrepreneurshipOctContents.kpi4 < '5')?'yellow-7':(entrepreneurshipOctContents.kpi4 >= '5' && entrepreneurshipOctContents.kpi4 < '6')?'green':(entrepreneurshipOctContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >November</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi1 == null)?'grey-2':(entrepreneurshipNovContents.kpi1 >= '0' && entrepreneurshipNovContents.kpi1 <= '13.4')?'red':(entrepreneurshipNovContents.kpi1 > '13.4' && entrepreneurshipNovContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipNovContents.kpi1 > '17.86666667' && entrepreneurshipNovContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipNovContents.kpi1 >= '22.33333333' && entrepreneurshipNovContents.kpi1 < '26.8')?'green':(entrepreneurshipNovContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi2 == null)?'grey-2':(entrepreneurshipNovContents.kpi2 >= '0' && entrepreneurshipNovContents.kpi2 <= '19')?'red':(entrepreneurshipNovContents.kpi2 > '19' && entrepreneurshipNovContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipNovContents.kpi2 > '25.33333333' && entrepreneurshipNovContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipNovContents.kpi2 >= '31.66666667' && entrepreneurshipNovContents.kpi2 < '38')?'green':(entrepreneurshipNovContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi3 == null)?'grey-2':(entrepreneurshipNovContents.kpi3 >= '0' && entrepreneurshipNovContents.kpi3 <= '15')?'red':(entrepreneurshipNovContents.kpi3 > '15' && entrepreneurshipNovContents.kpi3 <= '20')?'orange':(entrepreneurshipNovContents.kpi3 > '20' && entrepreneurshipNovContents.kpi3 < '25')?'yellow-7':(entrepreneurshipNovContents.kpi3 >= '25' && entrepreneurshipNovContents.kpi3 < '30')?'green':(entrepreneurshipNovContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi4 == null)?'grey-2':(entrepreneurshipNovContents.kpi4 >= '0' && entrepreneurshipNovContents.kpi4 <= '3')?'red':(entrepreneurshipNovContents.kpi4 > '3' && entrepreneurshipNovContents.kpi4 <= '4')?'orange':(entrepreneurshipNovContents.kpi4 > '4' && entrepreneurshipNovContents.kpi4 < '5')?'yellow-7':(entrepreneurshipNovContents.kpi4 >= '5' && entrepreneurshipNovContents.kpi4 < '6')?'green':(entrepreneurshipNovContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >December</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi1 == null)?'grey-2':(entrepreneurshipDecContents.kpi1 >= '0' && entrepreneurshipDecContents.kpi1 <= '13.4')?'red':(entrepreneurshipDecContents.kpi1 > '13.4' && entrepreneurshipDecContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipDecContents.kpi1 > '17.86666667' && entrepreneurshipDecContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipDecContents.kpi1 >= '22.33333333' && entrepreneurshipDecContents.kpi1 < '26.8')?'green':(entrepreneurshipDecContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi2 == null)?'grey-2':(entrepreneurshipDecContents.kpi2 >= '0' && entrepreneurshipDecContents.kpi2 <= '19')?'red':(entrepreneurshipDecContents.kpi2 > '19' && entrepreneurshipDecContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipDecContents.kpi2 > '25.33333333' && entrepreneurshipDecContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipDecContents.kpi2 >= '31.66666667' && entrepreneurshipDecContents.kpi2 < '38')?'green':(entrepreneurshipDecContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi3 == null)?'grey-2':(entrepreneurshipDecContents.kpi3 >= '0' && entrepreneurshipDecContents.kpi3 <= '15')?'red':(entrepreneurshipDecContents.kpi3 > '15' && entrepreneurshipDecContents.kpi3 <= '20')?'orange':(entrepreneurshipDecContents.kpi3 > '20' && entrepreneurshipDecContents.kpi3 < '25')?'yellow-7':(entrepreneurshipDecContents.kpi3 >= '25' && entrepreneurshipDecContents.kpi3 < '30')?'green':(entrepreneurshipDecContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi4 == null)?'grey-2':(entrepreneurshipDecContents.kpi4 >= '0' && entrepreneurshipDecContents.kpi4 <= '3')?'red':(entrepreneurshipDecContents.kpi4 > '3' && entrepreneurshipDecContents.kpi4 <= '4')?'orange':(entrepreneurshipDecContents.kpi4 > '4' && entrepreneurshipDecContents.kpi4 < '5')?'yellow-7':(entrepreneurshipDecContents.kpi4 >= '5' && entrepreneurshipDecContents.kpi4 < '6')?'green':(entrepreneurshipDecContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <!--TABLE DONE-->
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-lg-3 col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/images/rrcrc-logo_1200x300.png"></q-img>
                      </q-card-section>
                    </q-card>
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Budget Usage (Cumulative)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('gauge')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="gauge" :option="gaugeJanOptions" :resizable="true" style="height:315px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section>
                        <div class="text-h6">Expense Categories (Monthly)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="pie" :option="pieJanOptions" :resizable="true" style="height:465px"/>
                      </q-card-section>
                    </q-card>
                  </div> 
                </div>
                <div class="row q-col-gutter-sm q-mt-xs">
                  <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Process Chart
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('line')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="line" :option="lineChartOption" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
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
                        <IEcharts :option="barOptions" ref="bar" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>  
            </q-tab-panel>

            <q-tab-panel name="february">
              <div class="text-h4 q-mb-md">{{$route.name}}&ensp;|&ensp;February </div>
                <div class="row q-col-gutter-sm">
                  <!--TABLE-->
                  <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <q-card>
                      <q-list dense class="rounded-borders" >
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >Months</q-item-label>
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 1
                                <q-tooltip># Clients (Unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># Contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi1 == null)?'grey-2':(entrepreneurshipJanContents.kpi1 >= '0' && entrepreneurshipJanContents.kpi1 <= '13.4')?'red':(entrepreneurshipJanContents.kpi1 > '13.4' && entrepreneurshipJanContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJanContents.kpi1 > '17.86666667' && entrepreneurshipJanContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJanContents.kpi1 >= '22.33333333' && entrepreneurshipJanContents.kpi1 < '26.8')?'green':(entrepreneurshipJanContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi2 == null)?'grey-2':(entrepreneurshipJanContents.kpi2 >= '0' && entrepreneurshipJanContents.kpi2 <= '19')?'red':(entrepreneurshipJanContents.kpi2 > '19' && entrepreneurshipJanContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJanContents.kpi2 > '25.33333333' && entrepreneurshipJanContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJanContents.kpi2 >= '31.66666667' && entrepreneurshipJanContents.kpi2 < '38')?'green':(entrepreneurshipJanContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi3 == null)?'grey-2':(entrepreneurshipJanContents.kpi3 >= '0' && entrepreneurshipJanContents.kpi3 <= '15')?'red':(entrepreneurshipJanContents.kpi3 > '15' && entrepreneurshipJanContents.kpi3 <= '20')?'orange':(entrepreneurshipJanContents.kpi3 > '20' && entrepreneurshipJanContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJanContents.kpi3 >= '25' && entrepreneurshipJanContents.kpi3 < '30')?'green':(entrepreneurshipJanContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi4 == null)?'grey-2':(entrepreneurshipJanContents.kpi4 >= '0' && entrepreneurshipJanContents.kpi4 <= '3')?'red':(entrepreneurshipJanContents.kpi4 > '3' && entrepreneurshipJanContents.kpi4 <= '4')?'orange':(entrepreneurshipJanContents.kpi4 > '4' && entrepreneurshipJanContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJanContents.kpi4 >= '5' && entrepreneurshipJanContents.kpi4 < '6')?'green':(entrepreneurshipJanContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >February</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi1 == null)?'grey-2':(entrepreneurshipFebContents.kpi1 >= '0' && entrepreneurshipFebContents.kpi1 <= '13.4')?'red':(entrepreneurshipFebContents.kpi1 > '13.4' && entrepreneurshipFebContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipFebContents.kpi1 > '17.86666667' && entrepreneurshipFebContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipFebContents.kpi1 >= '22.33333333' && entrepreneurshipFebContents.kpi1 < '26.8')?'green':(entrepreneurshipFebContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi2 == null)?'grey-2':(entrepreneurshipFebContents.kpi2 >= '0' && entrepreneurshipFebContents.kpi2 <= '19')?'red':(entrepreneurshipFebContents.kpi2 > '19' && entrepreneurshipFebContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipFebContents.kpi2 > '25.33333333' && entrepreneurshipFebContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipFebContents.kpi2 >= '31.66666667' && entrepreneurshipFebContents.kpi2 < '38')?'green':(entrepreneurshipFebContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi3 == null)?'grey-2':(entrepreneurshipFebContents.kpi3 >= '0' && entrepreneurshipFebContents.kpi3 <= '15')?'red':(entrepreneurshipFebContents.kpi3 > '15' && entrepreneurshipFebContents.kpi3 <= '20')?'orange':(entrepreneurshipFebContents.kpi3 > '20' && entrepreneurshipFebContents.kpi3 < '25')?'yellow-7':(entrepreneurshipFebContents.kpi3 >= '25' && entrepreneurshipFebContents.kpi3 < '30')?'green':(entrepreneurshipFebContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi4 == null)?'grey-2':(entrepreneurshipFebContents.kpi4 >= '0' && entrepreneurshipFebContents.kpi4 <= '3')?'red':(entrepreneurshipFebContents.kpi4 > '3' && entrepreneurshipFebContents.kpi4 <= '4')?'orange':(entrepreneurshipFebContents.kpi4 > '4' && entrepreneurshipFebContents.kpi4 < '5')?'yellow-7':(entrepreneurshipFebContents.kpi4 >= '5' && entrepreneurshipFebContents.kpi4 < '6')?'green':(entrepreneurshipFebContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >March</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi1 == null)?'grey-2':(entrepreneurshipMarContents.kpi1 >= '0' && entrepreneurshipMarContents.kpi1 <= '13.4')?'red':(entrepreneurshipMarContents.kpi1 > '13.4' && entrepreneurshipMarContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMarContents.kpi1 > '17.86666667' && entrepreneurshipMarContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMarContents.kpi1 >= '22.33333333' && entrepreneurshipMarContents.kpi1 < '26.8')?'green':(entrepreneurshipMarContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi2 == null)?'grey-2':(entrepreneurshipMarContents.kpi2 >= '0' && entrepreneurshipMarContents.kpi2 <= '19')?'red':(entrepreneurshipMarContents.kpi2 > '19' && entrepreneurshipMarContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMarContents.kpi2 > '25.33333333' && entrepreneurshipMarContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMarContents.kpi2 >= '31.66666667' && entrepreneurshipMarContents.kpi2 < '38')?'green':(entrepreneurshipMarContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi3 == null)?'grey-2':(entrepreneurshipMarContents.kpi3 >= '0' && entrepreneurshipMarContents.kpi3 <= '15')?'red':(entrepreneurshipMarContents.kpi3 > '15' && entrepreneurshipMarContents.kpi3 <= '20')?'orange':(entrepreneurshipMarContents.kpi3 > '20' && entrepreneurshipMarContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMarContents.kpi3 >= '25' && entrepreneurshipMarContents.kpi3 < '30')?'green':(entrepreneurshipMarContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi4 == null)?'grey-2':(entrepreneurshipMarContents.kpi4 >= '0' && entrepreneurshipMarContents.kpi4 <= '3')?'red':(entrepreneurshipMarContents.kpi4 > '3' && entrepreneurshipMarContents.kpi4 <= '4')?'orange':(entrepreneurshipMarContents.kpi4 > '4' && entrepreneurshipMarContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMarContents.kpi4 >= '5' && entrepreneurshipMarContents.kpi4 < '6')?'green':(entrepreneurshipMarContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >April</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi1 == null)?'grey-2':(entrepreneurshipAprContents.kpi1 >= '0' && entrepreneurshipAprContents.kpi1 <= '13.4')?'red':(entrepreneurshipAprContents.kpi1 > '13.4' && entrepreneurshipAprContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAprContents.kpi1 > '17.86666667' && entrepreneurshipAprContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAprContents.kpi1 >= '22.33333333' && entrepreneurshipAprContents.kpi1 < '26.8')?'green':(entrepreneurshipAprContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi2 == null)?'grey-2':(entrepreneurshipAprContents.kpi2 >= '0' && entrepreneurshipAprContents.kpi2 <= '19')?'red':(entrepreneurshipAprContents.kpi2 > '19' && entrepreneurshipAprContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAprContents.kpi2 > '25.33333333' && entrepreneurshipAprContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAprContents.kpi2 >= '31.66666667' && entrepreneurshipAprContents.kpi2 < '38')?'green':(entrepreneurshipAprContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi3 == null)?'grey-2':(entrepreneurshipAprContents.kpi3 >= '0' && entrepreneurshipAprContents.kpi3 <= '15')?'red':(entrepreneurshipAprContents.kpi3 > '15' && entrepreneurshipAprContents.kpi3 <= '20')?'orange':(entrepreneurshipAprContents.kpi3 > '20' && entrepreneurshipAprContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAprContents.kpi3 >= '25' && entrepreneurshipAprContents.kpi3 < '30')?'green':(entrepreneurshipAprContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi4 == null)?'grey-2':(entrepreneurshipAprContents.kpi4 >= '0' && entrepreneurshipAprContents.kpi4 <= '3')?'red':(entrepreneurshipAprContents.kpi4 > '3' && entrepreneurshipAprContents.kpi4 <= '4')?'orange':(entrepreneurshipAprContents.kpi4 > '4' && entrepreneurshipAprContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAprContents.kpi4 >= '5' && entrepreneurshipAprContents.kpi4 < '6')?'green':(entrepreneurshipAprContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >May</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi1 == null)?'grey-2':(entrepreneurshipMayContents.kpi1 >= '0' && entrepreneurshipMayContents.kpi1 <= '13.4')?'red':(entrepreneurshipMayContents.kpi1 > '13.4' && entrepreneurshipMayContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMayContents.kpi1 > '17.86666667' && entrepreneurshipMayContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMayContents.kpi1 >= '22.33333333' && entrepreneurshipMayContents.kpi1 < '26.8')?'green':(entrepreneurshipMayContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi2 == null)?'grey-2':(entrepreneurshipMayContents.kpi2 >= '0' && entrepreneurshipMayContents.kpi2 <= '19')?'red':(entrepreneurshipMayContents.kpi2 > '19' && entrepreneurshipMayContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMayContents.kpi2 > '25.33333333' && entrepreneurshipMayContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMayContents.kpi2 >= '31.66666667' && entrepreneurshipMayContents.kpi2 < '38')?'green':(entrepreneurshipMayContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi3 == null)?'grey-2':(entrepreneurshipMayContents.kpi3 >= '0' && entrepreneurshipMayContents.kpi3 <= '15')?'red':(entrepreneurshipMayContents.kpi3 > '15' && entrepreneurshipMayContents.kpi3 <= '20')?'orange':(entrepreneurshipMayContents.kpi3 > '20' && entrepreneurshipMayContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMayContents.kpi3 >= '25' && entrepreneurshipMayContents.kpi3 < '30')?'green':(entrepreneurshipMayContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi4 == null)?'grey-2':(entrepreneurshipMayContents.kpi4 >= '0' && entrepreneurshipMayContents.kpi4 <= '3')?'red':(entrepreneurshipMayContents.kpi4 > '3' && entrepreneurshipMayContents.kpi4 <= '4')?'orange':(entrepreneurshipMayContents.kpi4 > '4' && entrepreneurshipMayContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMayContents.kpi4 >= '5' && entrepreneurshipMayContents.kpi4 < '6')?'green':(entrepreneurshipMayContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >June</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi1 == null)?'grey-2':(entrepreneurshipJunContents.kpi1 >= '0' && entrepreneurshipJunContents.kpi1 <= '13.4')?'red':(entrepreneurshipJunContents.kpi1 > '13.4' && entrepreneurshipJunContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJunContents.kpi1 > '17.86666667' && entrepreneurshipJunContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJunContents.kpi1 >= '22.33333333' && entrepreneurshipJunContents.kpi1 < '26.8')?'green':(entrepreneurshipJunContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi2 == null)?'grey-2':(entrepreneurshipJunContents.kpi2 >= '0' && entrepreneurshipJunContents.kpi2 <= '19')?'red':(entrepreneurshipJunContents.kpi2 > '19' && entrepreneurshipJunContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJunContents.kpi2 > '25.33333333' && entrepreneurshipJunContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJunContents.kpi2 >= '31.66666667' && entrepreneurshipJunContents.kpi2 < '38')?'green':(entrepreneurshipJunContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi3 == null)?'grey-2':(entrepreneurshipJunContents.kpi3 >= '0' && entrepreneurshipJunContents.kpi3 <= '15')?'red':(entrepreneurshipJunContents.kpi3 > '15' && entrepreneurshipJunContents.kpi3 <= '20')?'orange':(entrepreneurshipJunContents.kpi3 > '20' && entrepreneurshipJunContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJunContents.kpi3 >= '25' && entrepreneurshipJunContents.kpi3 < '30')?'green':(entrepreneurshipJunContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi4 == null)?'grey-2':(entrepreneurshipJunContents.kpi4 >= '0' && entrepreneurshipJunContents.kpi4 <= '3')?'red':(entrepreneurshipJunContents.kpi4 > '3' && entrepreneurshipJunContents.kpi4 <= '4')?'orange':(entrepreneurshipJunContents.kpi4 > '4' && entrepreneurshipJunContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJunContents.kpi4 >= '5' && entrepreneurshipJunContents.kpi4 < '6')?'green':(entrepreneurshipJunContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >July</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi1 == null)?'grey-2':(entrepreneurshipJulContents.kpi1 >= '0' && entrepreneurshipJulContents.kpi1 <= '13.4')?'red':(entrepreneurshipJulContents.kpi1 > '13.4' && entrepreneurshipJulContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJulContents.kpi1 > '17.86666667' && entrepreneurshipJulContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJulContents.kpi1 >= '22.33333333' && entrepreneurshipJulContents.kpi1 < '26.8')?'green':(entrepreneurshipJulContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi2 == null)?'grey-2':(entrepreneurshipJulContents.kpi2 >= '0' && entrepreneurshipJulContents.kpi2 <= '19')?'red':(entrepreneurshipJulContents.kpi2 > '19' && entrepreneurshipJulContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJulContents.kpi2 > '25.33333333' && entrepreneurshipJulContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJulContents.kpi2 >= '31.66666667' && entrepreneurshipJulContents.kpi2 < '38')?'green':(entrepreneurshipJulContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi3 == null)?'grey-2':(entrepreneurshipJulContents.kpi3 >= '0' && entrepreneurshipJulContents.kpi3 <= '15')?'red':(entrepreneurshipJulContents.kpi3 > '15' && entrepreneurshipJulContents.kpi3 <= '20')?'orange':(entrepreneurshipJulContents.kpi3 > '20' && entrepreneurshipJulContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJulContents.kpi3 >= '25' && entrepreneurshipJulContents.kpi3 < '30')?'green':(entrepreneurshipJulContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi4 == null)?'grey-2':(entrepreneurshipJulContents.kpi4 >= '0' && entrepreneurshipJulContents.kpi4 <= '3')?'red':(entrepreneurshipJulContents.kpi4 > '3' && entrepreneurshipJulContents.kpi4 <= '4')?'orange':(entrepreneurshipJulContents.kpi4 > '4' && entrepreneurshipJulContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJulContents.kpi4 >= '5' && entrepreneurshipJulContents.kpi4 < '6')?'green':(entrepreneurshipJulContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >August</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi1 == null)?'grey-2':(entrepreneurshipAugContents.kpi1 >= '0' && entrepreneurshipAugContents.kpi1 <= '13.4')?'red':(entrepreneurshipAugContents.kpi1 > '13.4' && entrepreneurshipAugContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAugContents.kpi1 > '17.86666667' && entrepreneurshipAugContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAugContents.kpi1 >= '22.33333333' && entrepreneurshipAugContents.kpi1 < '26.8')?'green':(entrepreneurshipAugContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi2 == null)?'grey-2':(entrepreneurshipAugContents.kpi2 >= '0' && entrepreneurshipAugContents.kpi2 <= '19')?'red':(entrepreneurshipAugContents.kpi2 > '19' && entrepreneurshipAugContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAugContents.kpi2 > '25.33333333' && entrepreneurshipAugContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAugContents.kpi2 >= '31.66666667' && entrepreneurshipAugContents.kpi2 < '38')?'green':(entrepreneurshipAugContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi3 == null)?'grey-2':(entrepreneurshipAugContents.kpi3 >= '0' && entrepreneurshipAugContents.kpi3 <= '15')?'red':(entrepreneurshipAugContents.kpi3 > '15' && entrepreneurshipAugContents.kpi3 <= '20')?'orange':(entrepreneurshipAugContents.kpi3 > '20' && entrepreneurshipAugContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAugContents.kpi3 >= '25' && entrepreneurshipAugContents.kpi3 < '30')?'green':(entrepreneurshipAugContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi4 == null)?'grey-2':(entrepreneurshipAugContents.kpi4 >= '0' && entrepreneurshipAugContents.kpi4 <= '3')?'red':(entrepreneurshipAugContents.kpi4 > '3' && entrepreneurshipAugContents.kpi4 <= '4')?'orange':(entrepreneurshipAugContents.kpi4 > '4' && entrepreneurshipAugContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAugContents.kpi4 >= '5' && entrepreneurshipAugContents.kpi4 < '6')?'green':(entrepreneurshipAugContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >September</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi1 == null)?'grey-2':(entrepreneurshipSepContents.kpi1 >= '0' && entrepreneurshipSepContents.kpi1 <= '13.4')?'red':(entrepreneurshipSepContents.kpi1 > '13.4' && entrepreneurshipSepContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipSepContents.kpi1 > '17.86666667' && entrepreneurshipSepContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipSepContents.kpi1 >= '22.33333333' && entrepreneurshipSepContents.kpi1 < '26.8')?'green':(entrepreneurshipSepContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi2 == null)?'grey-2':(entrepreneurshipSepContents.kpi2 >= '0' && entrepreneurshipSepContents.kpi2 <= '19')?'red':(entrepreneurshipSepContents.kpi2 > '19' && entrepreneurshipSepContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipSepContents.kpi2 > '25.33333333' && entrepreneurshipSepContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipSepContents.kpi2 >= '31.66666667' && entrepreneurshipSepContents.kpi2 < '38')?'green':(entrepreneurshipSepContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi3 == null)?'grey-2':(entrepreneurshipSepContents.kpi3 >= '0' && entrepreneurshipSepContents.kpi3 <= '15')?'red':(entrepreneurshipSepContents.kpi3 > '15' && entrepreneurshipSepContents.kpi3 <= '20')?'orange':(entrepreneurshipSepContents.kpi3 > '20' && entrepreneurshipSepContents.kpi3 < '25')?'yellow-7':(entrepreneurshipSepContents.kpi3 >= '25' && entrepreneurshipSepContents.kpi3 < '30')?'green':(entrepreneurshipSepContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi4 == null)?'grey-2':(entrepreneurshipSepContents.kpi4 >= '0' && entrepreneurshipSepContents.kpi4 <= '3')?'red':(entrepreneurshipSepContents.kpi4 > '3' && entrepreneurshipSepContents.kpi4 <= '4')?'orange':(entrepreneurshipSepContents.kpi4 > '4' && entrepreneurshipSepContents.kpi4 < '5')?'yellow-7':(entrepreneurshipSepContents.kpi4 >= '5' && entrepreneurshipSepContents.kpi4 < '6')?'green':(entrepreneurshipSepContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >October</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi1 == null)?'grey-2':(entrepreneurshipOctContents.kpi1 >= '0' && entrepreneurshipOctContents.kpi1 <= '13.4')?'red':(entrepreneurshipOctContents.kpi1 > '13.4' && entrepreneurshipOctContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipOctContents.kpi1 > '17.86666667' && entrepreneurshipOctContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipOctContents.kpi1 >= '22.33333333' && entrepreneurshipOctContents.kpi1 < '26.8')?'green':(entrepreneurshipOctContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi2 == null)?'grey-2':(entrepreneurshipOctContents.kpi2 >= '0' && entrepreneurshipOctContents.kpi2 <= '19')?'red':(entrepreneurshipOctContents.kpi2 > '19' && entrepreneurshipOctContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipOctContents.kpi2 > '25.33333333' && entrepreneurshipOctContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipOctContents.kpi2 >= '31.66666667' && entrepreneurshipOctContents.kpi2 < '38')?'green':(entrepreneurshipOctContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi3 == null)?'grey-2':(entrepreneurshipOctContents.kpi3 >= '0' && entrepreneurshipOctContents.kpi3 <= '15')?'red':(entrepreneurshipOctContents.kpi3 > '15' && entrepreneurshipOctContents.kpi3 <= '20')?'orange':(entrepreneurshipOctContents.kpi3 > '20' && entrepreneurshipOctContents.kpi3 < '25')?'yellow-7':(entrepreneurshipOctContents.kpi3 >= '25' && entrepreneurshipOctContents.kpi3 < '30')?'green':(entrepreneurshipOctContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi4 == null)?'grey-2':(entrepreneurshipOctContents.kpi4 >= '0' && entrepreneurshipOctContents.kpi4 <= '3')?'red':(entrepreneurshipOctContents.kpi4 > '3' && entrepreneurshipOctContents.kpi4 <= '4')?'orange':(entrepreneurshipOctContents.kpi4 > '4' && entrepreneurshipOctContents.kpi4 < '5')?'yellow-7':(entrepreneurshipOctContents.kpi4 >= '5' && entrepreneurshipOctContents.kpi4 < '6')?'green':(entrepreneurshipOctContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >November</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi1 == null)?'grey-2':(entrepreneurshipNovContents.kpi1 >= '0' && entrepreneurshipNovContents.kpi1 <= '13.4')?'red':(entrepreneurshipNovContents.kpi1 > '13.4' && entrepreneurshipNovContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipNovContents.kpi1 > '17.86666667' && entrepreneurshipNovContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipNovContents.kpi1 >= '22.33333333' && entrepreneurshipNovContents.kpi1 < '26.8')?'green':(entrepreneurshipNovContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi2 == null)?'grey-2':(entrepreneurshipNovContents.kpi2 >= '0' && entrepreneurshipNovContents.kpi2 <= '19')?'red':(entrepreneurshipNovContents.kpi2 > '19' && entrepreneurshipNovContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipNovContents.kpi2 > '25.33333333' && entrepreneurshipNovContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipNovContents.kpi2 >= '31.66666667' && entrepreneurshipNovContents.kpi2 < '38')?'green':(entrepreneurshipNovContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi3 == null)?'grey-2':(entrepreneurshipNovContents.kpi3 >= '0' && entrepreneurshipNovContents.kpi3 <= '15')?'red':(entrepreneurshipNovContents.kpi3 > '15' && entrepreneurshipNovContents.kpi3 <= '20')?'orange':(entrepreneurshipNovContents.kpi3 > '20' && entrepreneurshipNovContents.kpi3 < '25')?'yellow-7':(entrepreneurshipNovContents.kpi3 >= '25' && entrepreneurshipNovContents.kpi3 < '30')?'green':(entrepreneurshipNovContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi4 == null)?'grey-2':(entrepreneurshipNovContents.kpi4 >= '0' && entrepreneurshipNovContents.kpi4 <= '3')?'red':(entrepreneurshipNovContents.kpi4 > '3' && entrepreneurshipNovContents.kpi4 <= '4')?'orange':(entrepreneurshipNovContents.kpi4 > '4' && entrepreneurshipNovContents.kpi4 < '5')?'yellow-7':(entrepreneurshipNovContents.kpi4 >= '5' && entrepreneurshipNovContents.kpi4 < '6')?'green':(entrepreneurshipNovContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >December</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi1 == null)?'grey-2':(entrepreneurshipDecContents.kpi1 >= '0' && entrepreneurshipDecContents.kpi1 <= '13.4')?'red':(entrepreneurshipDecContents.kpi1 > '13.4' && entrepreneurshipDecContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipDecContents.kpi1 > '17.86666667' && entrepreneurshipDecContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipDecContents.kpi1 >= '22.33333333' && entrepreneurshipDecContents.kpi1 < '26.8')?'green':(entrepreneurshipDecContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi2 == null)?'grey-2':(entrepreneurshipDecContents.kpi2 >= '0' && entrepreneurshipDecContents.kpi2 <= '19')?'red':(entrepreneurshipDecContents.kpi2 > '19' && entrepreneurshipDecContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipDecContents.kpi2 > '25.33333333' && entrepreneurshipDecContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipDecContents.kpi2 >= '31.66666667' && entrepreneurshipDecContents.kpi2 < '38')?'green':(entrepreneurshipDecContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi3 == null)?'grey-2':(entrepreneurshipDecContents.kpi3 >= '0' && entrepreneurshipDecContents.kpi3 <= '15')?'red':(entrepreneurshipDecContents.kpi3 > '15' && entrepreneurshipDecContents.kpi3 <= '20')?'orange':(entrepreneurshipDecContents.kpi3 > '20' && entrepreneurshipDecContents.kpi3 < '25')?'yellow-7':(entrepreneurshipDecContents.kpi3 >= '25' && entrepreneurshipDecContents.kpi3 < '30')?'green':(entrepreneurshipDecContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi4 == null)?'grey-2':(entrepreneurshipDecContents.kpi4 >= '0' && entrepreneurshipDecContents.kpi4 <= '3')?'red':(entrepreneurshipDecContents.kpi4 > '3' && entrepreneurshipDecContents.kpi4 <= '4')?'orange':(entrepreneurshipDecContents.kpi4 > '4' && entrepreneurshipDecContents.kpi4 < '5')?'yellow-7':(entrepreneurshipDecContents.kpi4 >= '5' && entrepreneurshipDecContents.kpi4 < '6')?'green':(entrepreneurshipDecContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <!--TABLE DONE-->
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/images/rrcrc-logo_1200x300.png"></q-img>
                      </q-card-section>
                    </q-card>
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Budget Usage (Cumulative)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('gauge')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="gauge" :option="gaugeFebOptions" :resizable="true" style="height:315px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section>
                        <div class="text-h6">Expense Categories (Monthly)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="pie" :option="pieFebOptions" :resizable="true" style="height:465px"/>
                      </q-card-section>
                    </q-card>
                  </div> 
                </div>
                <div class="row q-col-gutter-sm q-mt-xs">
                  <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Process Chart
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('line')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="line" :option="lineChartOption" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
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
                        <IEcharts :option="barOptions" ref="bar" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>  
            </q-tab-panel>

            <q-tab-panel name="march">
              <div class="text-h4 q-mb-md">{{$route.name}}&ensp;|&ensp;March </div>
                <div class="row q-col-gutter-sm">
                  <!--TABLE-->
                  <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <q-card>
                      <q-list dense class="rounded-borders" >
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >Months</q-item-label>
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 1
                                <q-tooltip># Clients (Unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># Contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi1 == null)?'grey-2':(entrepreneurshipJanContents.kpi1 >= '0' && entrepreneurshipJanContents.kpi1 <= '13.4')?'red':(entrepreneurshipJanContents.kpi1 > '13.4' && entrepreneurshipJanContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJanContents.kpi1 > '17.86666667' && entrepreneurshipJanContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJanContents.kpi1 >= '22.33333333' && entrepreneurshipJanContents.kpi1 < '26.8')?'green':(entrepreneurshipJanContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi2 == null)?'grey-2':(entrepreneurshipJanContents.kpi2 >= '0' && entrepreneurshipJanContents.kpi2 <= '19')?'red':(entrepreneurshipJanContents.kpi2 > '19' && entrepreneurshipJanContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJanContents.kpi2 > '25.33333333' && entrepreneurshipJanContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJanContents.kpi2 >= '31.66666667' && entrepreneurshipJanContents.kpi2 < '38')?'green':(entrepreneurshipJanContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi3 == null)?'grey-2':(entrepreneurshipJanContents.kpi3 >= '0' && entrepreneurshipJanContents.kpi3 <= '15')?'red':(entrepreneurshipJanContents.kpi3 > '15' && entrepreneurshipJanContents.kpi3 <= '20')?'orange':(entrepreneurshipJanContents.kpi3 > '20' && entrepreneurshipJanContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJanContents.kpi3 >= '25' && entrepreneurshipJanContents.kpi3 < '30')?'green':(entrepreneurshipJanContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi4 == null)?'grey-2':(entrepreneurshipJanContents.kpi4 >= '0' && entrepreneurshipJanContents.kpi4 <= '3')?'red':(entrepreneurshipJanContents.kpi4 > '3' && entrepreneurshipJanContents.kpi4 <= '4')?'orange':(entrepreneurshipJanContents.kpi4 > '4' && entrepreneurshipJanContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJanContents.kpi4 >= '5' && entrepreneurshipJanContents.kpi4 < '6')?'green':(entrepreneurshipJanContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >February</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi1 == null)?'grey-2':(entrepreneurshipFebContents.kpi1 >= '0' && entrepreneurshipFebContents.kpi1 <= '13.4')?'red':(entrepreneurshipFebContents.kpi1 > '13.4' && entrepreneurshipFebContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipFebContents.kpi1 > '17.86666667' && entrepreneurshipFebContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipFebContents.kpi1 >= '22.33333333' && entrepreneurshipFebContents.kpi1 < '26.8')?'green':(entrepreneurshipFebContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi2 == null)?'grey-2':(entrepreneurshipFebContents.kpi2 >= '0' && entrepreneurshipFebContents.kpi2 <= '19')?'red':(entrepreneurshipFebContents.kpi2 > '19' && entrepreneurshipFebContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipFebContents.kpi2 > '25.33333333' && entrepreneurshipFebContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipFebContents.kpi2 >= '31.66666667' && entrepreneurshipFebContents.kpi2 < '38')?'green':(entrepreneurshipFebContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi3 == null)?'grey-2':(entrepreneurshipFebContents.kpi3 >= '0' && entrepreneurshipFebContents.kpi3 <= '15')?'red':(entrepreneurshipFebContents.kpi3 > '15' && entrepreneurshipFebContents.kpi3 <= '20')?'orange':(entrepreneurshipFebContents.kpi3 > '20' && entrepreneurshipFebContents.kpi3 < '25')?'yellow-7':(entrepreneurshipFebContents.kpi3 >= '25' && entrepreneurshipFebContents.kpi3 < '30')?'green':(entrepreneurshipFebContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi4 == null)?'grey-2':(entrepreneurshipFebContents.kpi4 >= '0' && entrepreneurshipFebContents.kpi4 <= '3')?'red':(entrepreneurshipFebContents.kpi4 > '3' && entrepreneurshipFebContents.kpi4 <= '4')?'orange':(entrepreneurshipFebContents.kpi4 > '4' && entrepreneurshipFebContents.kpi4 < '5')?'yellow-7':(entrepreneurshipFebContents.kpi4 >= '5' && entrepreneurshipFebContents.kpi4 < '6')?'green':(entrepreneurshipFebContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >March</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi1 == null)?'grey-2':(entrepreneurshipMarContents.kpi1 >= '0' && entrepreneurshipMarContents.kpi1 <= '13.4')?'red':(entrepreneurshipMarContents.kpi1 > '13.4' && entrepreneurshipMarContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMarContents.kpi1 > '17.86666667' && entrepreneurshipMarContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMarContents.kpi1 >= '22.33333333' && entrepreneurshipMarContents.kpi1 < '26.8')?'green':(entrepreneurshipMarContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi2 == null)?'grey-2':(entrepreneurshipMarContents.kpi2 >= '0' && entrepreneurshipMarContents.kpi2 <= '19')?'red':(entrepreneurshipMarContents.kpi2 > '19' && entrepreneurshipMarContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMarContents.kpi2 > '25.33333333' && entrepreneurshipMarContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMarContents.kpi2 >= '31.66666667' && entrepreneurshipMarContents.kpi2 < '38')?'green':(entrepreneurshipMarContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi3 == null)?'grey-2':(entrepreneurshipMarContents.kpi3 >= '0' && entrepreneurshipMarContents.kpi3 <= '15')?'red':(entrepreneurshipMarContents.kpi3 > '15' && entrepreneurshipMarContents.kpi3 <= '20')?'orange':(entrepreneurshipMarContents.kpi3 > '20' && entrepreneurshipMarContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMarContents.kpi3 >= '25' && entrepreneurshipMarContents.kpi3 < '30')?'green':(entrepreneurshipMarContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi4 == null)?'grey-2':(entrepreneurshipMarContents.kpi4 >= '0' && entrepreneurshipMarContents.kpi4 <= '3')?'red':(entrepreneurshipMarContents.kpi4 > '3' && entrepreneurshipMarContents.kpi4 <= '4')?'orange':(entrepreneurshipMarContents.kpi4 > '4' && entrepreneurshipMarContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMarContents.kpi4 >= '5' && entrepreneurshipMarContents.kpi4 < '6')?'green':(entrepreneurshipMarContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >April</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi1 == null)?'grey-2':(entrepreneurshipAprContents.kpi1 >= '0' && entrepreneurshipAprContents.kpi1 <= '13.4')?'red':(entrepreneurshipAprContents.kpi1 > '13.4' && entrepreneurshipAprContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAprContents.kpi1 > '17.86666667' && entrepreneurshipAprContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAprContents.kpi1 >= '22.33333333' && entrepreneurshipAprContents.kpi1 < '26.8')?'green':(entrepreneurshipAprContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi2 == null)?'grey-2':(entrepreneurshipAprContents.kpi2 >= '0' && entrepreneurshipAprContents.kpi2 <= '19')?'red':(entrepreneurshipAprContents.kpi2 > '19' && entrepreneurshipAprContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAprContents.kpi2 > '25.33333333' && entrepreneurshipAprContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAprContents.kpi2 >= '31.66666667' && entrepreneurshipAprContents.kpi2 < '38')?'green':(entrepreneurshipAprContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi3 == null)?'grey-2':(entrepreneurshipAprContents.kpi3 >= '0' && entrepreneurshipAprContents.kpi3 <= '15')?'red':(entrepreneurshipAprContents.kpi3 > '15' && entrepreneurshipAprContents.kpi3 <= '20')?'orange':(entrepreneurshipAprContents.kpi3 > '20' && entrepreneurshipAprContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAprContents.kpi3 >= '25' && entrepreneurshipAprContents.kpi3 < '30')?'green':(entrepreneurshipAprContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi4 == null)?'grey-2':(entrepreneurshipAprContents.kpi4 >= '0' && entrepreneurshipAprContents.kpi4 <= '3')?'red':(entrepreneurshipAprContents.kpi4 > '3' && entrepreneurshipAprContents.kpi4 <= '4')?'orange':(entrepreneurshipAprContents.kpi4 > '4' && entrepreneurshipAprContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAprContents.kpi4 >= '5' && entrepreneurshipAprContents.kpi4 < '6')?'green':(entrepreneurshipAprContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >May</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi1 == null)?'grey-2':(entrepreneurshipMayContents.kpi1 >= '0' && entrepreneurshipMayContents.kpi1 <= '13.4')?'red':(entrepreneurshipMayContents.kpi1 > '13.4' && entrepreneurshipMayContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMayContents.kpi1 > '17.86666667' && entrepreneurshipMayContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMayContents.kpi1 >= '22.33333333' && entrepreneurshipMayContents.kpi1 < '26.8')?'green':(entrepreneurshipMayContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi2 == null)?'grey-2':(entrepreneurshipMayContents.kpi2 >= '0' && entrepreneurshipMayContents.kpi2 <= '19')?'red':(entrepreneurshipMayContents.kpi2 > '19' && entrepreneurshipMayContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMayContents.kpi2 > '25.33333333' && entrepreneurshipMayContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMayContents.kpi2 >= '31.66666667' && entrepreneurshipMayContents.kpi2 < '38')?'green':(entrepreneurshipMayContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi3 == null)?'grey-2':(entrepreneurshipMayContents.kpi3 >= '0' && entrepreneurshipMayContents.kpi3 <= '15')?'red':(entrepreneurshipMayContents.kpi3 > '15' && entrepreneurshipMayContents.kpi3 <= '20')?'orange':(entrepreneurshipMayContents.kpi3 > '20' && entrepreneurshipMayContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMayContents.kpi3 >= '25' && entrepreneurshipMayContents.kpi3 < '30')?'green':(entrepreneurshipMayContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi4 == null)?'grey-2':(entrepreneurshipMayContents.kpi4 >= '0' && entrepreneurshipMayContents.kpi4 <= '3')?'red':(entrepreneurshipMayContents.kpi4 > '3' && entrepreneurshipMayContents.kpi4 <= '4')?'orange':(entrepreneurshipMayContents.kpi4 > '4' && entrepreneurshipMayContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMayContents.kpi4 >= '5' && entrepreneurshipMayContents.kpi4 < '6')?'green':(entrepreneurshipMayContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >June</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi1 == null)?'grey-2':(entrepreneurshipJunContents.kpi1 >= '0' && entrepreneurshipJunContents.kpi1 <= '13.4')?'red':(entrepreneurshipJunContents.kpi1 > '13.4' && entrepreneurshipJunContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJunContents.kpi1 > '17.86666667' && entrepreneurshipJunContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJunContents.kpi1 >= '22.33333333' && entrepreneurshipJunContents.kpi1 < '26.8')?'green':(entrepreneurshipJunContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi2 == null)?'grey-2':(entrepreneurshipJunContents.kpi2 >= '0' && entrepreneurshipJunContents.kpi2 <= '19')?'red':(entrepreneurshipJunContents.kpi2 > '19' && entrepreneurshipJunContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJunContents.kpi2 > '25.33333333' && entrepreneurshipJunContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJunContents.kpi2 >= '31.66666667' && entrepreneurshipJunContents.kpi2 < '38')?'green':(entrepreneurshipJunContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi3 == null)?'grey-2':(entrepreneurshipJunContents.kpi3 >= '0' && entrepreneurshipJunContents.kpi3 <= '15')?'red':(entrepreneurshipJunContents.kpi3 > '15' && entrepreneurshipJunContents.kpi3 <= '20')?'orange':(entrepreneurshipJunContents.kpi3 > '20' && entrepreneurshipJunContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJunContents.kpi3 >= '25' && entrepreneurshipJunContents.kpi3 < '30')?'green':(entrepreneurshipJunContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi4 == null)?'grey-2':(entrepreneurshipJunContents.kpi4 >= '0' && entrepreneurshipJunContents.kpi4 <= '3')?'red':(entrepreneurshipJunContents.kpi4 > '3' && entrepreneurshipJunContents.kpi4 <= '4')?'orange':(entrepreneurshipJunContents.kpi4 > '4' && entrepreneurshipJunContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJunContents.kpi4 >= '5' && entrepreneurshipJunContents.kpi4 < '6')?'green':(entrepreneurshipJunContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >July</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi1 == null)?'grey-2':(entrepreneurshipJulContents.kpi1 >= '0' && entrepreneurshipJulContents.kpi1 <= '13.4')?'red':(entrepreneurshipJulContents.kpi1 > '13.4' && entrepreneurshipJulContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJulContents.kpi1 > '17.86666667' && entrepreneurshipJulContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJulContents.kpi1 >= '22.33333333' && entrepreneurshipJulContents.kpi1 < '26.8')?'green':(entrepreneurshipJulContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi2 == null)?'grey-2':(entrepreneurshipJulContents.kpi2 >= '0' && entrepreneurshipJulContents.kpi2 <= '19')?'red':(entrepreneurshipJulContents.kpi2 > '19' && entrepreneurshipJulContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJulContents.kpi2 > '25.33333333' && entrepreneurshipJulContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJulContents.kpi2 >= '31.66666667' && entrepreneurshipJulContents.kpi2 < '38')?'green':(entrepreneurshipJulContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi3 == null)?'grey-2':(entrepreneurshipJulContents.kpi3 >= '0' && entrepreneurshipJulContents.kpi3 <= '15')?'red':(entrepreneurshipJulContents.kpi3 > '15' && entrepreneurshipJulContents.kpi3 <= '20')?'orange':(entrepreneurshipJulContents.kpi3 > '20' && entrepreneurshipJulContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJulContents.kpi3 >= '25' && entrepreneurshipJulContents.kpi3 < '30')?'green':(entrepreneurshipJulContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi4 == null)?'grey-2':(entrepreneurshipJulContents.kpi4 >= '0' && entrepreneurshipJulContents.kpi4 <= '3')?'red':(entrepreneurshipJulContents.kpi4 > '3' && entrepreneurshipJulContents.kpi4 <= '4')?'orange':(entrepreneurshipJulContents.kpi4 > '4' && entrepreneurshipJulContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJulContents.kpi4 >= '5' && entrepreneurshipJulContents.kpi4 < '6')?'green':(entrepreneurshipJulContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >August</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi1 == null)?'grey-2':(entrepreneurshipAugContents.kpi1 >= '0' && entrepreneurshipAugContents.kpi1 <= '13.4')?'red':(entrepreneurshipAugContents.kpi1 > '13.4' && entrepreneurshipAugContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAugContents.kpi1 > '17.86666667' && entrepreneurshipAugContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAugContents.kpi1 >= '22.33333333' && entrepreneurshipAugContents.kpi1 < '26.8')?'green':(entrepreneurshipAugContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi2 == null)?'grey-2':(entrepreneurshipAugContents.kpi2 >= '0' && entrepreneurshipAugContents.kpi2 <= '19')?'red':(entrepreneurshipAugContents.kpi2 > '19' && entrepreneurshipAugContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAugContents.kpi2 > '25.33333333' && entrepreneurshipAugContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAugContents.kpi2 >= '31.66666667' && entrepreneurshipAugContents.kpi2 < '38')?'green':(entrepreneurshipAugContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi3 == null)?'grey-2':(entrepreneurshipAugContents.kpi3 >= '0' && entrepreneurshipAugContents.kpi3 <= '15')?'red':(entrepreneurshipAugContents.kpi3 > '15' && entrepreneurshipAugContents.kpi3 <= '20')?'orange':(entrepreneurshipAugContents.kpi3 > '20' && entrepreneurshipAugContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAugContents.kpi3 >= '25' && entrepreneurshipAugContents.kpi3 < '30')?'green':(entrepreneurshipAugContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi4 == null)?'grey-2':(entrepreneurshipAugContents.kpi4 >= '0' && entrepreneurshipAugContents.kpi4 <= '3')?'red':(entrepreneurshipAugContents.kpi4 > '3' && entrepreneurshipAugContents.kpi4 <= '4')?'orange':(entrepreneurshipAugContents.kpi4 > '4' && entrepreneurshipAugContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAugContents.kpi4 >= '5' && entrepreneurshipAugContents.kpi4 < '6')?'green':(entrepreneurshipAugContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >September</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi1 == null)?'grey-2':(entrepreneurshipSepContents.kpi1 >= '0' && entrepreneurshipSepContents.kpi1 <= '13.4')?'red':(entrepreneurshipSepContents.kpi1 > '13.4' && entrepreneurshipSepContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipSepContents.kpi1 > '17.86666667' && entrepreneurshipSepContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipSepContents.kpi1 >= '22.33333333' && entrepreneurshipSepContents.kpi1 < '26.8')?'green':(entrepreneurshipSepContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi2 == null)?'grey-2':(entrepreneurshipSepContents.kpi2 >= '0' && entrepreneurshipSepContents.kpi2 <= '19')?'red':(entrepreneurshipSepContents.kpi2 > '19' && entrepreneurshipSepContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipSepContents.kpi2 > '25.33333333' && entrepreneurshipSepContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipSepContents.kpi2 >= '31.66666667' && entrepreneurshipSepContents.kpi2 < '38')?'green':(entrepreneurshipSepContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi3 == null)?'grey-2':(entrepreneurshipSepContents.kpi3 >= '0' && entrepreneurshipSepContents.kpi3 <= '15')?'red':(entrepreneurshipSepContents.kpi3 > '15' && entrepreneurshipSepContents.kpi3 <= '20')?'orange':(entrepreneurshipSepContents.kpi3 > '20' && entrepreneurshipSepContents.kpi3 < '25')?'yellow-7':(entrepreneurshipSepContents.kpi3 >= '25' && entrepreneurshipSepContents.kpi3 < '30')?'green':(entrepreneurshipSepContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi4 == null)?'grey-2':(entrepreneurshipSepContents.kpi4 >= '0' && entrepreneurshipSepContents.kpi4 <= '3')?'red':(entrepreneurshipSepContents.kpi4 > '3' && entrepreneurshipSepContents.kpi4 <= '4')?'orange':(entrepreneurshipSepContents.kpi4 > '4' && entrepreneurshipSepContents.kpi4 < '5')?'yellow-7':(entrepreneurshipSepContents.kpi4 >= '5' && entrepreneurshipSepContents.kpi4 < '6')?'green':(entrepreneurshipSepContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >October</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi1 == null)?'grey-2':(entrepreneurshipOctContents.kpi1 >= '0' && entrepreneurshipOctContents.kpi1 <= '13.4')?'red':(entrepreneurshipOctContents.kpi1 > '13.4' && entrepreneurshipOctContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipOctContents.kpi1 > '17.86666667' && entrepreneurshipOctContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipOctContents.kpi1 >= '22.33333333' && entrepreneurshipOctContents.kpi1 < '26.8')?'green':(entrepreneurshipOctContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi2 == null)?'grey-2':(entrepreneurshipOctContents.kpi2 >= '0' && entrepreneurshipOctContents.kpi2 <= '19')?'red':(entrepreneurshipOctContents.kpi2 > '19' && entrepreneurshipOctContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipOctContents.kpi2 > '25.33333333' && entrepreneurshipOctContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipOctContents.kpi2 >= '31.66666667' && entrepreneurshipOctContents.kpi2 < '38')?'green':(entrepreneurshipOctContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi3 == null)?'grey-2':(entrepreneurshipOctContents.kpi3 >= '0' && entrepreneurshipOctContents.kpi3 <= '15')?'red':(entrepreneurshipOctContents.kpi3 > '15' && entrepreneurshipOctContents.kpi3 <= '20')?'orange':(entrepreneurshipOctContents.kpi3 > '20' && entrepreneurshipOctContents.kpi3 < '25')?'yellow-7':(entrepreneurshipOctContents.kpi3 >= '25' && entrepreneurshipOctContents.kpi3 < '30')?'green':(entrepreneurshipOctContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi4 == null)?'grey-2':(entrepreneurshipOctContents.kpi4 >= '0' && entrepreneurshipOctContents.kpi4 <= '3')?'red':(entrepreneurshipOctContents.kpi4 > '3' && entrepreneurshipOctContents.kpi4 <= '4')?'orange':(entrepreneurshipOctContents.kpi4 > '4' && entrepreneurshipOctContents.kpi4 < '5')?'yellow-7':(entrepreneurshipOctContents.kpi4 >= '5' && entrepreneurshipOctContents.kpi4 < '6')?'green':(entrepreneurshipOctContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >November</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi1 == null)?'grey-2':(entrepreneurshipNovContents.kpi1 >= '0' && entrepreneurshipNovContents.kpi1 <= '13.4')?'red':(entrepreneurshipNovContents.kpi1 > '13.4' && entrepreneurshipNovContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipNovContents.kpi1 > '17.86666667' && entrepreneurshipNovContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipNovContents.kpi1 >= '22.33333333' && entrepreneurshipNovContents.kpi1 < '26.8')?'green':(entrepreneurshipNovContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi2 == null)?'grey-2':(entrepreneurshipNovContents.kpi2 >= '0' && entrepreneurshipNovContents.kpi2 <= '19')?'red':(entrepreneurshipNovContents.kpi2 > '19' && entrepreneurshipNovContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipNovContents.kpi2 > '25.33333333' && entrepreneurshipNovContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipNovContents.kpi2 >= '31.66666667' && entrepreneurshipNovContents.kpi2 < '38')?'green':(entrepreneurshipNovContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi3 == null)?'grey-2':(entrepreneurshipNovContents.kpi3 >= '0' && entrepreneurshipNovContents.kpi3 <= '15')?'red':(entrepreneurshipNovContents.kpi3 > '15' && entrepreneurshipNovContents.kpi3 <= '20')?'orange':(entrepreneurshipNovContents.kpi3 > '20' && entrepreneurshipNovContents.kpi3 < '25')?'yellow-7':(entrepreneurshipNovContents.kpi3 >= '25' && entrepreneurshipNovContents.kpi3 < '30')?'green':(entrepreneurshipNovContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi4 == null)?'grey-2':(entrepreneurshipNovContents.kpi4 >= '0' && entrepreneurshipNovContents.kpi4 <= '3')?'red':(entrepreneurshipNovContents.kpi4 > '3' && entrepreneurshipNovContents.kpi4 <= '4')?'orange':(entrepreneurshipNovContents.kpi4 > '4' && entrepreneurshipNovContents.kpi4 < '5')?'yellow-7':(entrepreneurshipNovContents.kpi4 >= '5' && entrepreneurshipNovContents.kpi4 < '6')?'green':(entrepreneurshipNovContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >December</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi1 == null)?'grey-2':(entrepreneurshipDecContents.kpi1 >= '0' && entrepreneurshipDecContents.kpi1 <= '13.4')?'red':(entrepreneurshipDecContents.kpi1 > '13.4' && entrepreneurshipDecContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipDecContents.kpi1 > '17.86666667' && entrepreneurshipDecContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipDecContents.kpi1 >= '22.33333333' && entrepreneurshipDecContents.kpi1 < '26.8')?'green':(entrepreneurshipDecContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi2 == null)?'grey-2':(entrepreneurshipDecContents.kpi2 >= '0' && entrepreneurshipDecContents.kpi2 <= '19')?'red':(entrepreneurshipDecContents.kpi2 > '19' && entrepreneurshipDecContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipDecContents.kpi2 > '25.33333333' && entrepreneurshipDecContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipDecContents.kpi2 >= '31.66666667' && entrepreneurshipDecContents.kpi2 < '38')?'green':(entrepreneurshipDecContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi3 == null)?'grey-2':(entrepreneurshipDecContents.kpi3 >= '0' && entrepreneurshipDecContents.kpi3 <= '15')?'red':(entrepreneurshipDecContents.kpi3 > '15' && entrepreneurshipDecContents.kpi3 <= '20')?'orange':(entrepreneurshipDecContents.kpi3 > '20' && entrepreneurshipDecContents.kpi3 < '25')?'yellow-7':(entrepreneurshipDecContents.kpi3 >= '25' && entrepreneurshipDecContents.kpi3 < '30')?'green':(entrepreneurshipDecContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi4 == null)?'grey-2':(entrepreneurshipDecContents.kpi4 >= '0' && entrepreneurshipDecContents.kpi4 <= '3')?'red':(entrepreneurshipDecContents.kpi4 > '3' && entrepreneurshipDecContents.kpi4 <= '4')?'orange':(entrepreneurshipDecContents.kpi4 > '4' && entrepreneurshipDecContents.kpi4 < '5')?'yellow-7':(entrepreneurshipDecContents.kpi4 >= '5' && entrepreneurshipDecContents.kpi4 < '6')?'green':(entrepreneurshipDecContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <!--TABLE DONE-->
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/images/rrcrc-logo_1200x300.png"></q-img>
                      </q-card-section>
                    </q-card>
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Budget Usage (Cumulative)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('gauge')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="gauge" :option="gaugeMarOptions" :resizable="true" style="height:315px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section>
                        <div class="text-h6">Expense Categories (Monthly)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="pie" :option="pieMarOptions" :resizable="true" style="height:465px"/>
                      </q-card-section>
                    </q-card>
                  </div> 
                </div>
                <div class="row q-col-gutter-sm q-mt-xs">
                  <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Process Chart
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('line')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="line" :option="lineChartOption" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
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
                        <IEcharts :option="barOptions" ref="bar" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>  
            </q-tab-panel>

            <q-tab-panel name="april">
              <div class="text-h4 q-mb-md">{{$route.name}}&ensp;|&ensp;April </div>
                <div class="row q-col-gutter-sm">
                  <!--TABLE-->
                  <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <q-card>
                      <q-list dense class="rounded-borders" >
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >Months</q-item-label>
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 1
                                <q-tooltip># Clients (Unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># Contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi1 == null)?'grey-2':(entrepreneurshipJanContents.kpi1 >= '0' && entrepreneurshipJanContents.kpi1 <= '13.4')?'red':(entrepreneurshipJanContents.kpi1 > '13.4' && entrepreneurshipJanContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJanContents.kpi1 > '17.86666667' && entrepreneurshipJanContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJanContents.kpi1 >= '22.33333333' && entrepreneurshipJanContents.kpi1 < '26.8')?'green':(entrepreneurshipJanContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi2 == null)?'grey-2':(entrepreneurshipJanContents.kpi2 >= '0' && entrepreneurshipJanContents.kpi2 <= '19')?'red':(entrepreneurshipJanContents.kpi2 > '19' && entrepreneurshipJanContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJanContents.kpi2 > '25.33333333' && entrepreneurshipJanContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJanContents.kpi2 >= '31.66666667' && entrepreneurshipJanContents.kpi2 < '38')?'green':(entrepreneurshipJanContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi3 == null)?'grey-2':(entrepreneurshipJanContents.kpi3 >= '0' && entrepreneurshipJanContents.kpi3 <= '15')?'red':(entrepreneurshipJanContents.kpi3 > '15' && entrepreneurshipJanContents.kpi3 <= '20')?'orange':(entrepreneurshipJanContents.kpi3 > '20' && entrepreneurshipJanContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJanContents.kpi3 >= '25' && entrepreneurshipJanContents.kpi3 < '30')?'green':(entrepreneurshipJanContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi4 == null)?'grey-2':(entrepreneurshipJanContents.kpi4 >= '0' && entrepreneurshipJanContents.kpi4 <= '3')?'red':(entrepreneurshipJanContents.kpi4 > '3' && entrepreneurshipJanContents.kpi4 <= '4')?'orange':(entrepreneurshipJanContents.kpi4 > '4' && entrepreneurshipJanContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJanContents.kpi4 >= '5' && entrepreneurshipJanContents.kpi4 < '6')?'green':(entrepreneurshipJanContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>  
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >February</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi1 == null)?'grey-2':(entrepreneurshipFebContents.kpi1 >= '0' && entrepreneurshipFebContents.kpi1 <= '13.4')?'red':(entrepreneurshipFebContents.kpi1 > '13.4' && entrepreneurshipFebContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipFebContents.kpi1 > '17.86666667' && entrepreneurshipFebContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipFebContents.kpi1 >= '22.33333333' && entrepreneurshipFebContents.kpi1 < '26.8')?'green':(entrepreneurshipFebContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi2 == null)?'grey-2':(entrepreneurshipFebContents.kpi2 >= '0' && entrepreneurshipFebContents.kpi2 <= '19')?'red':(entrepreneurshipFebContents.kpi2 > '19' && entrepreneurshipFebContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipFebContents.kpi2 > '25.33333333' && entrepreneurshipFebContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipFebContents.kpi2 >= '31.66666667' && entrepreneurshipFebContents.kpi2 < '38')?'green':(entrepreneurshipFebContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi3 == null)?'grey-2':(entrepreneurshipFebContents.kpi3 >= '0' && entrepreneurshipFebContents.kpi3 <= '15')?'red':(entrepreneurshipFebContents.kpi3 > '15' && entrepreneurshipFebContents.kpi3 <= '20')?'orange':(entrepreneurshipFebContents.kpi3 > '20' && entrepreneurshipFebContents.kpi3 < '25')?'yellow-7':(entrepreneurshipFebContents.kpi3 >= '25' && entrepreneurshipFebContents.kpi3 < '30')?'green':(entrepreneurshipFebContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi4 == null)?'grey-2':(entrepreneurshipFebContents.kpi4 >= '0' && entrepreneurshipFebContents.kpi4 <= '3')?'red':(entrepreneurshipFebContents.kpi4 > '3' && entrepreneurshipFebContents.kpi4 <= '4')?'orange':(entrepreneurshipFebContents.kpi4 > '4' && entrepreneurshipFebContents.kpi4 < '5')?'yellow-7':(entrepreneurshipFebContents.kpi4 >= '5' && entrepreneurshipFebContents.kpi4 < '6')?'green':(entrepreneurshipFebContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >March</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi1 == null)?'grey-2':(entrepreneurshipMarContents.kpi1 >= '0' && entrepreneurshipMarContents.kpi1 <= '13.4')?'red':(entrepreneurshipMarContents.kpi1 > '13.4' && entrepreneurshipMarContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMarContents.kpi1 > '17.86666667' && entrepreneurshipMarContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMarContents.kpi1 >= '22.33333333' && entrepreneurshipMarContents.kpi1 < '26.8')?'green':(entrepreneurshipMarContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi2 == null)?'grey-2':(entrepreneurshipMarContents.kpi2 >= '0' && entrepreneurshipMarContents.kpi2 <= '19')?'red':(entrepreneurshipMarContents.kpi2 > '19' && entrepreneurshipMarContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMarContents.kpi2 > '25.33333333' && entrepreneurshipMarContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMarContents.kpi2 >= '31.66666667' && entrepreneurshipMarContents.kpi2 < '38')?'green':(entrepreneurshipMarContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi3 == null)?'grey-2':(entrepreneurshipMarContents.kpi3 >= '0' && entrepreneurshipMarContents.kpi3 <= '15')?'red':(entrepreneurshipMarContents.kpi3 > '15' && entrepreneurshipMarContents.kpi3 <= '20')?'orange':(entrepreneurshipMarContents.kpi3 > '20' && entrepreneurshipMarContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMarContents.kpi3 >= '25' && entrepreneurshipMarContents.kpi3 < '30')?'green':(entrepreneurshipMarContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi4 == null)?'grey-2':(entrepreneurshipMarContents.kpi4 >= '0' && entrepreneurshipMarContents.kpi4 <= '3')?'red':(entrepreneurshipMarContents.kpi4 > '3' && entrepreneurshipMarContents.kpi4 <= '4')?'orange':(entrepreneurshipMarContents.kpi4 > '4' && entrepreneurshipMarContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMarContents.kpi4 >= '5' && entrepreneurshipMarContents.kpi4 < '6')?'green':(entrepreneurshipMarContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >April</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi1 == null)?'grey-2':(entrepreneurshipAprContents.kpi1 >= '0' && entrepreneurshipAprContents.kpi1 <= '13.4')?'red':(entrepreneurshipAprContents.kpi1 > '13.4' && entrepreneurshipAprContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAprContents.kpi1 > '17.86666667' && entrepreneurshipAprContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAprContents.kpi1 >= '22.33333333' && entrepreneurshipAprContents.kpi1 < '26.8')?'green':(entrepreneurshipAprContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi2 == null)?'grey-2':(entrepreneurshipAprContents.kpi2 >= '0' && entrepreneurshipAprContents.kpi2 <= '19')?'red':(entrepreneurshipAprContents.kpi2 > '19' && entrepreneurshipAprContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAprContents.kpi2 > '25.33333333' && entrepreneurshipAprContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAprContents.kpi2 >= '31.66666667' && entrepreneurshipAprContents.kpi2 < '38')?'green':(entrepreneurshipAprContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi3 == null)?'grey-2':(entrepreneurshipAprContents.kpi3 >= '0' && entrepreneurshipAprContents.kpi3 <= '15')?'red':(entrepreneurshipAprContents.kpi3 > '15' && entrepreneurshipAprContents.kpi3 <= '20')?'orange':(entrepreneurshipAprContents.kpi3 > '20' && entrepreneurshipAprContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAprContents.kpi3 >= '25' && entrepreneurshipAprContents.kpi3 < '30')?'green':(entrepreneurshipAprContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi4 == null)?'grey-2':(entrepreneurshipAprContents.kpi4 >= '0' && entrepreneurshipAprContents.kpi4 <= '3')?'red':(entrepreneurshipAprContents.kpi4 > '3' && entrepreneurshipAprContents.kpi4 <= '4')?'orange':(entrepreneurshipAprContents.kpi4 > '4' && entrepreneurshipAprContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAprContents.kpi4 >= '5' && entrepreneurshipAprContents.kpi4 < '6')?'green':(entrepreneurshipAprContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >May</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi1 == null)?'grey-2':(entrepreneurshipMayContents.kpi1 >= '0' && entrepreneurshipMayContents.kpi1 <= '13.4')?'red':(entrepreneurshipMayContents.kpi1 > '13.4' && entrepreneurshipMayContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMayContents.kpi1 > '17.86666667' && entrepreneurshipMayContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMayContents.kpi1 >= '22.33333333' && entrepreneurshipMayContents.kpi1 < '26.8')?'green':(entrepreneurshipMayContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi2 == null)?'grey-2':(entrepreneurshipMayContents.kpi2 >= '0' && entrepreneurshipMayContents.kpi2 <= '19')?'red':(entrepreneurshipMayContents.kpi2 > '19' && entrepreneurshipMayContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMayContents.kpi2 > '25.33333333' && entrepreneurshipMayContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMayContents.kpi2 >= '31.66666667' && entrepreneurshipMayContents.kpi2 < '38')?'green':(entrepreneurshipMayContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi3 == null)?'grey-2':(entrepreneurshipMayContents.kpi3 >= '0' && entrepreneurshipMayContents.kpi3 <= '15')?'red':(entrepreneurshipMayContents.kpi3 > '15' && entrepreneurshipMayContents.kpi3 <= '20')?'orange':(entrepreneurshipMayContents.kpi3 > '20' && entrepreneurshipMayContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMayContents.kpi3 >= '25' && entrepreneurshipMayContents.kpi3 < '30')?'green':(entrepreneurshipMayContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi4 == null)?'grey-2':(entrepreneurshipMayContents.kpi4 >= '0' && entrepreneurshipMayContents.kpi4 <= '3')?'red':(entrepreneurshipMayContents.kpi4 > '3' && entrepreneurshipMayContents.kpi4 <= '4')?'orange':(entrepreneurshipMayContents.kpi4 > '4' && entrepreneurshipMayContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMayContents.kpi4 >= '5' && entrepreneurshipMayContents.kpi4 < '6')?'green':(entrepreneurshipMayContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >June</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi1 == null)?'grey-2':(entrepreneurshipJunContents.kpi1 >= '0' && entrepreneurshipJunContents.kpi1 <= '13.4')?'red':(entrepreneurshipJunContents.kpi1 > '13.4' && entrepreneurshipJunContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJunContents.kpi1 > '17.86666667' && entrepreneurshipJunContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJunContents.kpi1 >= '22.33333333' && entrepreneurshipJunContents.kpi1 < '26.8')?'green':(entrepreneurshipJunContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi2 == null)?'grey-2':(entrepreneurshipJunContents.kpi2 >= '0' && entrepreneurshipJunContents.kpi2 <= '19')?'red':(entrepreneurshipJunContents.kpi2 > '19' && entrepreneurshipJunContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJunContents.kpi2 > '25.33333333' && entrepreneurshipJunContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJunContents.kpi2 >= '31.66666667' && entrepreneurshipJunContents.kpi2 < '38')?'green':(entrepreneurshipJunContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi3 == null)?'grey-2':(entrepreneurshipJunContents.kpi3 >= '0' && entrepreneurshipJunContents.kpi3 <= '15')?'red':(entrepreneurshipJunContents.kpi3 > '15' && entrepreneurshipJunContents.kpi3 <= '20')?'orange':(entrepreneurshipJunContents.kpi3 > '20' && entrepreneurshipJunContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJunContents.kpi3 >= '25' && entrepreneurshipJunContents.kpi3 < '30')?'green':(entrepreneurshipJunContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi4 == null)?'grey-2':(entrepreneurshipJunContents.kpi4 >= '0' && entrepreneurshipJunContents.kpi4 <= '3')?'red':(entrepreneurshipJunContents.kpi4 > '3' && entrepreneurshipJunContents.kpi4 <= '4')?'orange':(entrepreneurshipJunContents.kpi4 > '4' && entrepreneurshipJunContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJunContents.kpi4 >= '5' && entrepreneurshipJunContents.kpi4 < '6')?'green':(entrepreneurshipJunContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >July</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi1 == null)?'grey-2':(entrepreneurshipJulContents.kpi1 >= '0' && entrepreneurshipJulContents.kpi1 <= '13.4')?'red':(entrepreneurshipJulContents.kpi1 > '13.4' && entrepreneurshipJulContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJulContents.kpi1 > '17.86666667' && entrepreneurshipJulContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJulContents.kpi1 >= '22.33333333' && entrepreneurshipJulContents.kpi1 < '26.8')?'green':(entrepreneurshipJulContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi2 == null)?'grey-2':(entrepreneurshipJulContents.kpi2 >= '0' && entrepreneurshipJulContents.kpi2 <= '19')?'red':(entrepreneurshipJulContents.kpi2 > '19' && entrepreneurshipJulContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJulContents.kpi2 > '25.33333333' && entrepreneurshipJulContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJulContents.kpi2 >= '31.66666667' && entrepreneurshipJulContents.kpi2 < '38')?'green':(entrepreneurshipJulContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi3 == null)?'grey-2':(entrepreneurshipJulContents.kpi3 >= '0' && entrepreneurshipJulContents.kpi3 <= '15')?'red':(entrepreneurshipJulContents.kpi3 > '15' && entrepreneurshipJulContents.kpi3 <= '20')?'orange':(entrepreneurshipJulContents.kpi3 > '20' && entrepreneurshipJulContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJulContents.kpi3 >= '25' && entrepreneurshipJulContents.kpi3 < '30')?'green':(entrepreneurshipJulContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi4 == null)?'grey-2':(entrepreneurshipJulContents.kpi4 >= '0' && entrepreneurshipJulContents.kpi4 <= '3')?'red':(entrepreneurshipJulContents.kpi4 > '3' && entrepreneurshipJulContents.kpi4 <= '4')?'orange':(entrepreneurshipJulContents.kpi4 > '4' && entrepreneurshipJulContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJulContents.kpi4 >= '5' && entrepreneurshipJulContents.kpi4 < '6')?'green':(entrepreneurshipJulContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >August</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi1 == null)?'grey-2':(entrepreneurshipAugContents.kpi1 >= '0' && entrepreneurshipAugContents.kpi1 <= '13.4')?'red':(entrepreneurshipAugContents.kpi1 > '13.4' && entrepreneurshipAugContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAugContents.kpi1 > '17.86666667' && entrepreneurshipAugContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAugContents.kpi1 >= '22.33333333' && entrepreneurshipAugContents.kpi1 < '26.8')?'green':(entrepreneurshipAugContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi2 == null)?'grey-2':(entrepreneurshipAugContents.kpi2 >= '0' && entrepreneurshipAugContents.kpi2 <= '19')?'red':(entrepreneurshipAugContents.kpi2 > '19' && entrepreneurshipAugContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAugContents.kpi2 > '25.33333333' && entrepreneurshipAugContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAugContents.kpi2 >= '31.66666667' && entrepreneurshipAugContents.kpi2 < '38')?'green':(entrepreneurshipAugContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi3 == null)?'grey-2':(entrepreneurshipAugContents.kpi3 >= '0' && entrepreneurshipAugContents.kpi3 <= '15')?'red':(entrepreneurshipAugContents.kpi3 > '15' && entrepreneurshipAugContents.kpi3 <= '20')?'orange':(entrepreneurshipAugContents.kpi3 > '20' && entrepreneurshipAugContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAugContents.kpi3 >= '25' && entrepreneurshipAugContents.kpi3 < '30')?'green':(entrepreneurshipAugContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi4 == null)?'grey-2':(entrepreneurshipAugContents.kpi4 >= '0' && entrepreneurshipAugContents.kpi4 <= '3')?'red':(entrepreneurshipAugContents.kpi4 > '3' && entrepreneurshipAugContents.kpi4 <= '4')?'orange':(entrepreneurshipAugContents.kpi4 > '4' && entrepreneurshipAugContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAugContents.kpi4 >= '5' && entrepreneurshipAugContents.kpi4 < '6')?'green':(entrepreneurshipAugContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >September</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi1 == null)?'grey-2':(entrepreneurshipSepContents.kpi1 >= '0' && entrepreneurshipSepContents.kpi1 <= '13.4')?'red':(entrepreneurshipSepContents.kpi1 > '13.4' && entrepreneurshipSepContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipSepContents.kpi1 > '17.86666667' && entrepreneurshipSepContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipSepContents.kpi1 >= '22.33333333' && entrepreneurshipSepContents.kpi1 < '26.8')?'green':(entrepreneurshipSepContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi2 == null)?'grey-2':(entrepreneurshipSepContents.kpi2 >= '0' && entrepreneurshipSepContents.kpi2 <= '19')?'red':(entrepreneurshipSepContents.kpi2 > '19' && entrepreneurshipSepContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipSepContents.kpi2 > '25.33333333' && entrepreneurshipSepContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipSepContents.kpi2 >= '31.66666667' && entrepreneurshipSepContents.kpi2 < '38')?'green':(entrepreneurshipSepContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi3 == null)?'grey-2':(entrepreneurshipSepContents.kpi3 >= '0' && entrepreneurshipSepContents.kpi3 <= '15')?'red':(entrepreneurshipSepContents.kpi3 > '15' && entrepreneurshipSepContents.kpi3 <= '20')?'orange':(entrepreneurshipSepContents.kpi3 > '20' && entrepreneurshipSepContents.kpi3 < '25')?'yellow-7':(entrepreneurshipSepContents.kpi3 >= '25' && entrepreneurshipSepContents.kpi3 < '30')?'green':(entrepreneurshipSepContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi4 == null)?'grey-2':(entrepreneurshipSepContents.kpi4 >= '0' && entrepreneurshipSepContents.kpi4 <= '3')?'red':(entrepreneurshipSepContents.kpi4 > '3' && entrepreneurshipSepContents.kpi4 <= '4')?'orange':(entrepreneurshipSepContents.kpi4 > '4' && entrepreneurshipSepContents.kpi4 < '5')?'yellow-7':(entrepreneurshipSepContents.kpi4 >= '5' && entrepreneurshipSepContents.kpi4 < '6')?'green':(entrepreneurshipSepContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >October</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi1 == null)?'grey-2':(entrepreneurshipOctContents.kpi1 >= '0' && entrepreneurshipOctContents.kpi1 <= '13.4')?'red':(entrepreneurshipOctContents.kpi1 > '13.4' && entrepreneurshipOctContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipOctContents.kpi1 > '17.86666667' && entrepreneurshipOctContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipOctContents.kpi1 >= '22.33333333' && entrepreneurshipOctContents.kpi1 < '26.8')?'green':(entrepreneurshipOctContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi2 == null)?'grey-2':(entrepreneurshipOctContents.kpi2 >= '0' && entrepreneurshipOctContents.kpi2 <= '19')?'red':(entrepreneurshipOctContents.kpi2 > '19' && entrepreneurshipOctContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipOctContents.kpi2 > '25.33333333' && entrepreneurshipOctContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipOctContents.kpi2 >= '31.66666667' && entrepreneurshipOctContents.kpi2 < '38')?'green':(entrepreneurshipOctContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi3 == null)?'grey-2':(entrepreneurshipOctContents.kpi3 >= '0' && entrepreneurshipOctContents.kpi3 <= '15')?'red':(entrepreneurshipOctContents.kpi3 > '15' && entrepreneurshipOctContents.kpi3 <= '20')?'orange':(entrepreneurshipOctContents.kpi3 > '20' && entrepreneurshipOctContents.kpi3 < '25')?'yellow-7':(entrepreneurshipOctContents.kpi3 >= '25' && entrepreneurshipOctContents.kpi3 < '30')?'green':(entrepreneurshipOctContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi4 == null)?'grey-2':(entrepreneurshipOctContents.kpi4 >= '0' && entrepreneurshipOctContents.kpi4 <= '3')?'red':(entrepreneurshipOctContents.kpi4 > '3' && entrepreneurshipOctContents.kpi4 <= '4')?'orange':(entrepreneurshipOctContents.kpi4 > '4' && entrepreneurshipOctContents.kpi4 < '5')?'yellow-7':(entrepreneurshipOctContents.kpi4 >= '5' && entrepreneurshipOctContents.kpi4 < '6')?'green':(entrepreneurshipOctContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >November</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi1 == null)?'grey-2':(entrepreneurshipNovContents.kpi1 >= '0' && entrepreneurshipNovContents.kpi1 <= '13.4')?'red':(entrepreneurshipNovContents.kpi1 > '13.4' && entrepreneurshipNovContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipNovContents.kpi1 > '17.86666667' && entrepreneurshipNovContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipNovContents.kpi1 >= '22.33333333' && entrepreneurshipNovContents.kpi1 < '26.8')?'green':(entrepreneurshipNovContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi2 == null)?'grey-2':(entrepreneurshipNovContents.kpi2 >= '0' && entrepreneurshipNovContents.kpi2 <= '19')?'red':(entrepreneurshipNovContents.kpi2 > '19' && entrepreneurshipNovContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipNovContents.kpi2 > '25.33333333' && entrepreneurshipNovContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipNovContents.kpi2 >= '31.66666667' && entrepreneurshipNovContents.kpi2 < '38')?'green':(entrepreneurshipNovContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi3 == null)?'grey-2':(entrepreneurshipNovContents.kpi3 >= '0' && entrepreneurshipNovContents.kpi3 <= '15')?'red':(entrepreneurshipNovContents.kpi3 > '15' && entrepreneurshipNovContents.kpi3 <= '20')?'orange':(entrepreneurshipNovContents.kpi3 > '20' && entrepreneurshipNovContents.kpi3 < '25')?'yellow-7':(entrepreneurshipNovContents.kpi3 >= '25' && entrepreneurshipNovContents.kpi3 < '30')?'green':(entrepreneurshipNovContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi4 == null)?'grey-2':(entrepreneurshipNovContents.kpi4 >= '0' && entrepreneurshipNovContents.kpi4 <= '3')?'red':(entrepreneurshipNovContents.kpi4 > '3' && entrepreneurshipNovContents.kpi4 <= '4')?'orange':(entrepreneurshipNovContents.kpi4 > '4' && entrepreneurshipNovContents.kpi4 < '5')?'yellow-7':(entrepreneurshipNovContents.kpi4 >= '5' && entrepreneurshipNovContents.kpi4 < '6')?'green':(entrepreneurshipNovContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >December</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi1 == null)?'grey-2':(entrepreneurshipDecContents.kpi1 >= '0' && entrepreneurshipDecContents.kpi1 <= '13.4')?'red':(entrepreneurshipDecContents.kpi1 > '13.4' && entrepreneurshipDecContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipDecContents.kpi1 > '17.86666667' && entrepreneurshipDecContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipDecContents.kpi1 >= '22.33333333' && entrepreneurshipDecContents.kpi1 < '26.8')?'green':(entrepreneurshipDecContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi2 == null)?'grey-2':(entrepreneurshipDecContents.kpi2 >= '0' && entrepreneurshipDecContents.kpi2 <= '19')?'red':(entrepreneurshipDecContents.kpi2 > '19' && entrepreneurshipDecContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipDecContents.kpi2 > '25.33333333' && entrepreneurshipDecContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipDecContents.kpi2 >= '31.66666667' && entrepreneurshipDecContents.kpi2 < '38')?'green':(entrepreneurshipDecContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi3 == null)?'grey-2':(entrepreneurshipDecContents.kpi3 >= '0' && entrepreneurshipDecContents.kpi3 <= '15')?'red':(entrepreneurshipDecContents.kpi3 > '15' && entrepreneurshipDecContents.kpi3 <= '20')?'orange':(entrepreneurshipDecContents.kpi3 > '20' && entrepreneurshipDecContents.kpi3 < '25')?'yellow-7':(entrepreneurshipDecContents.kpi3 >= '25' && entrepreneurshipDecContents.kpi3 < '30')?'green':(entrepreneurshipDecContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi4 == null)?'grey-2':(entrepreneurshipDecContents.kpi4 >= '0' && entrepreneurshipDecContents.kpi4 <= '3')?'red':(entrepreneurshipDecContents.kpi4 > '3' && entrepreneurshipDecContents.kpi4 <= '4')?'orange':(entrepreneurshipDecContents.kpi4 > '4' && entrepreneurshipDecContents.kpi4 < '5')?'yellow-7':(entrepreneurshipDecContents.kpi4 >= '5' && entrepreneurshipDecContents.kpi4 < '6')?'green':(entrepreneurshipDecContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <!--TABLE DONE-->
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/images/rrcrc-logo_1200x300.png"></q-img>
                      </q-card-section>
                    </q-card>
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Budget Usage (Cumulative)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('gauge')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="gauge" :option="gaugeAprOptions" :resizable="true" style="height:315px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section>
                        <div class="text-h6">Expense Categories (Monthly)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="pie" :option="pieAprOptions" :resizable="true" style="height:465px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
                <div class="row q-col-gutter-sm q-mt-xs">
                  <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Process Chart
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('line')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="line" :option="lineChartOption" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
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
                        <IEcharts :option="barOptions" ref="bar" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>  
            </q-tab-panel>

            <q-tab-panel name="may">
              <div class="text-h4 q-mb-md">{{$route.name}}&ensp;|&ensp;May </div>
                <div class="row q-col-gutter-sm">
                  <!--TABLE-->
                  <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <q-card>
                      <q-list dense class="rounded-borders" >
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >Months</q-item-label>
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 1
                                <q-tooltip># Clients (Unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># Contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi1 == null)?'grey-2':(entrepreneurshipJanContents.kpi1 >= '0' && entrepreneurshipJanContents.kpi1 <= '13.4')?'red':(entrepreneurshipJanContents.kpi1 > '13.4' && entrepreneurshipJanContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJanContents.kpi1 > '17.86666667' && entrepreneurshipJanContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJanContents.kpi1 >= '22.33333333' && entrepreneurshipJanContents.kpi1 < '26.8')?'green':(entrepreneurshipJanContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi2 == null)?'grey-2':(entrepreneurshipJanContents.kpi2 >= '0' && entrepreneurshipJanContents.kpi2 <= '19')?'red':(entrepreneurshipJanContents.kpi2 > '19' && entrepreneurshipJanContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJanContents.kpi2 > '25.33333333' && entrepreneurshipJanContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJanContents.kpi2 >= '31.66666667' && entrepreneurshipJanContents.kpi2 < '38')?'green':(entrepreneurshipJanContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi3 == null)?'grey-2':(entrepreneurshipJanContents.kpi3 >= '0' && entrepreneurshipJanContents.kpi3 <= '15')?'red':(entrepreneurshipJanContents.kpi3 > '15' && entrepreneurshipJanContents.kpi3 <= '20')?'orange':(entrepreneurshipJanContents.kpi3 > '20' && entrepreneurshipJanContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJanContents.kpi3 >= '25' && entrepreneurshipJanContents.kpi3 < '30')?'green':(entrepreneurshipJanContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi4 == null)?'grey-2':(entrepreneurshipJanContents.kpi4 >= '0' && entrepreneurshipJanContents.kpi4 <= '3')?'red':(entrepreneurshipJanContents.kpi4 > '3' && entrepreneurshipJanContents.kpi4 <= '4')?'orange':(entrepreneurshipJanContents.kpi4 > '4' && entrepreneurshipJanContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJanContents.kpi4 >= '5' && entrepreneurshipJanContents.kpi4 < '6')?'green':(entrepreneurshipJanContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>  
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >February</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi1 == null)?'grey-2':(entrepreneurshipFebContents.kpi1 >= '0' && entrepreneurshipFebContents.kpi1 <= '13.4')?'red':(entrepreneurshipFebContents.kpi1 > '13.4' && entrepreneurshipFebContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipFebContents.kpi1 > '17.86666667' && entrepreneurshipFebContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipFebContents.kpi1 >= '22.33333333' && entrepreneurshipFebContents.kpi1 < '26.8')?'green':(entrepreneurshipFebContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi2 == null)?'grey-2':(entrepreneurshipFebContents.kpi2 >= '0' && entrepreneurshipFebContents.kpi2 <= '19')?'red':(entrepreneurshipFebContents.kpi2 > '19' && entrepreneurshipFebContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipFebContents.kpi2 > '25.33333333' && entrepreneurshipFebContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipFebContents.kpi2 >= '31.66666667' && entrepreneurshipFebContents.kpi2 < '38')?'green':(entrepreneurshipFebContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi3 == null)?'grey-2':(entrepreneurshipFebContents.kpi3 >= '0' && entrepreneurshipFebContents.kpi3 <= '15')?'red':(entrepreneurshipFebContents.kpi3 > '15' && entrepreneurshipFebContents.kpi3 <= '20')?'orange':(entrepreneurshipFebContents.kpi3 > '20' && entrepreneurshipFebContents.kpi3 < '25')?'yellow-7':(entrepreneurshipFebContents.kpi3 >= '25' && entrepreneurshipFebContents.kpi3 < '30')?'green':(entrepreneurshipFebContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi4 == null)?'grey-2':(entrepreneurshipFebContents.kpi4 >= '0' && entrepreneurshipFebContents.kpi4 <= '3')?'red':(entrepreneurshipFebContents.kpi4 > '3' && entrepreneurshipFebContents.kpi4 <= '4')?'orange':(entrepreneurshipFebContents.kpi4 > '4' && entrepreneurshipFebContents.kpi4 < '5')?'yellow-7':(entrepreneurshipFebContents.kpi4 >= '5' && entrepreneurshipFebContents.kpi4 < '6')?'green':(entrepreneurshipFebContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >March</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi1 == null)?'grey-2':(entrepreneurshipMarContents.kpi1 >= '0' && entrepreneurshipMarContents.kpi1 <= '13.4')?'red':(entrepreneurshipMarContents.kpi1 > '13.4' && entrepreneurshipMarContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMarContents.kpi1 > '17.86666667' && entrepreneurshipMarContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMarContents.kpi1 >= '22.33333333' && entrepreneurshipMarContents.kpi1 < '26.8')?'green':(entrepreneurshipMarContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi2 == null)?'grey-2':(entrepreneurshipMarContents.kpi2 >= '0' && entrepreneurshipMarContents.kpi2 <= '19')?'red':(entrepreneurshipMarContents.kpi2 > '19' && entrepreneurshipMarContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMarContents.kpi2 > '25.33333333' && entrepreneurshipMarContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMarContents.kpi2 >= '31.66666667' && entrepreneurshipMarContents.kpi2 < '38')?'green':(entrepreneurshipMarContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi3 == null)?'grey-2':(entrepreneurshipMarContents.kpi3 >= '0' && entrepreneurshipMarContents.kpi3 <= '15')?'red':(entrepreneurshipMarContents.kpi3 > '15' && entrepreneurshipMarContents.kpi3 <= '20')?'orange':(entrepreneurshipMarContents.kpi3 > '20' && entrepreneurshipMarContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMarContents.kpi3 >= '25' && entrepreneurshipMarContents.kpi3 < '30')?'green':(entrepreneurshipMarContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi4 == null)?'grey-2':(entrepreneurshipMarContents.kpi4 >= '0' && entrepreneurshipMarContents.kpi4 <= '3')?'red':(entrepreneurshipMarContents.kpi4 > '3' && entrepreneurshipMarContents.kpi4 <= '4')?'orange':(entrepreneurshipMarContents.kpi4 > '4' && entrepreneurshipMarContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMarContents.kpi4 >= '5' && entrepreneurshipMarContents.kpi4 < '6')?'green':(entrepreneurshipMarContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >April</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi1 == null)?'grey-2':(entrepreneurshipAprContents.kpi1 >= '0' && entrepreneurshipAprContents.kpi1 <= '13.4')?'red':(entrepreneurshipAprContents.kpi1 > '13.4' && entrepreneurshipAprContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAprContents.kpi1 > '17.86666667' && entrepreneurshipAprContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAprContents.kpi1 >= '22.33333333' && entrepreneurshipAprContents.kpi1 < '26.8')?'green':(entrepreneurshipAprContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi2 == null)?'grey-2':(entrepreneurshipAprContents.kpi2 >= '0' && entrepreneurshipAprContents.kpi2 <= '19')?'red':(entrepreneurshipAprContents.kpi2 > '19' && entrepreneurshipAprContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAprContents.kpi2 > '25.33333333' && entrepreneurshipAprContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAprContents.kpi2 >= '31.66666667' && entrepreneurshipAprContents.kpi2 < '38')?'green':(entrepreneurshipAprContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi3 == null)?'grey-2':(entrepreneurshipAprContents.kpi3 >= '0' && entrepreneurshipAprContents.kpi3 <= '15')?'red':(entrepreneurshipAprContents.kpi3 > '15' && entrepreneurshipAprContents.kpi3 <= '20')?'orange':(entrepreneurshipAprContents.kpi3 > '20' && entrepreneurshipAprContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAprContents.kpi3 >= '25' && entrepreneurshipAprContents.kpi3 < '30')?'green':(entrepreneurshipAprContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi4 == null)?'grey-2':(entrepreneurshipAprContents.kpi4 >= '0' && entrepreneurshipAprContents.kpi4 <= '3')?'red':(entrepreneurshipAprContents.kpi4 > '3' && entrepreneurshipAprContents.kpi4 <= '4')?'orange':(entrepreneurshipAprContents.kpi4 > '4' && entrepreneurshipAprContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAprContents.kpi4 >= '5' && entrepreneurshipAprContents.kpi4 < '6')?'green':(entrepreneurshipAprContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >May</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi1 == null)?'grey-2':(entrepreneurshipMayContents.kpi1 >= '0' && entrepreneurshipMayContents.kpi1 <= '13.4')?'red':(entrepreneurshipMayContents.kpi1 > '13.4' && entrepreneurshipMayContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMayContents.kpi1 > '17.86666667' && entrepreneurshipMayContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMayContents.kpi1 >= '22.33333333' && entrepreneurshipMayContents.kpi1 < '26.8')?'green':(entrepreneurshipMayContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi2 == null)?'grey-2':(entrepreneurshipMayContents.kpi2 >= '0' && entrepreneurshipMayContents.kpi2 <= '19')?'red':(entrepreneurshipMayContents.kpi2 > '19' && entrepreneurshipMayContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMayContents.kpi2 > '25.33333333' && entrepreneurshipMayContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMayContents.kpi2 >= '31.66666667' && entrepreneurshipMayContents.kpi2 < '38')?'green':(entrepreneurshipMayContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi3 == null)?'grey-2':(entrepreneurshipMayContents.kpi3 >= '0' && entrepreneurshipMayContents.kpi3 <= '15')?'red':(entrepreneurshipMayContents.kpi3 > '15' && entrepreneurshipMayContents.kpi3 <= '20')?'orange':(entrepreneurshipMayContents.kpi3 > '20' && entrepreneurshipMayContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMayContents.kpi3 >= '25' && entrepreneurshipMayContents.kpi3 < '30')?'green':(entrepreneurshipMayContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi4 == null)?'grey-2':(entrepreneurshipMayContents.kpi4 >= '0' && entrepreneurshipMayContents.kpi4 <= '3')?'red':(entrepreneurshipMayContents.kpi4 > '3' && entrepreneurshipMayContents.kpi4 <= '4')?'orange':(entrepreneurshipMayContents.kpi4 > '4' && entrepreneurshipMayContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMayContents.kpi4 >= '5' && entrepreneurshipMayContents.kpi4 < '6')?'green':(entrepreneurshipMayContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >June</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi1 == null)?'grey-2':(entrepreneurshipJunContents.kpi1 >= '0' && entrepreneurshipJunContents.kpi1 <= '13.4')?'red':(entrepreneurshipJunContents.kpi1 > '13.4' && entrepreneurshipJunContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJunContents.kpi1 > '17.86666667' && entrepreneurshipJunContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJunContents.kpi1 >= '22.33333333' && entrepreneurshipJunContents.kpi1 < '26.8')?'green':(entrepreneurshipJunContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi2 == null)?'grey-2':(entrepreneurshipJunContents.kpi2 >= '0' && entrepreneurshipJunContents.kpi2 <= '19')?'red':(entrepreneurshipJunContents.kpi2 > '19' && entrepreneurshipJunContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJunContents.kpi2 > '25.33333333' && entrepreneurshipJunContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJunContents.kpi2 >= '31.66666667' && entrepreneurshipJunContents.kpi2 < '38')?'green':(entrepreneurshipJunContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi3 == null)?'grey-2':(entrepreneurshipJunContents.kpi3 >= '0' && entrepreneurshipJunContents.kpi3 <= '15')?'red':(entrepreneurshipJunContents.kpi3 > '15' && entrepreneurshipJunContents.kpi3 <= '20')?'orange':(entrepreneurshipJunContents.kpi3 > '20' && entrepreneurshipJunContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJunContents.kpi3 >= '25' && entrepreneurshipJunContents.kpi3 < '30')?'green':(entrepreneurshipJunContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi4 == null)?'grey-2':(entrepreneurshipJunContents.kpi4 >= '0' && entrepreneurshipJunContents.kpi4 <= '3')?'red':(entrepreneurshipJunContents.kpi4 > '3' && entrepreneurshipJunContents.kpi4 <= '4')?'orange':(entrepreneurshipJunContents.kpi4 > '4' && entrepreneurshipJunContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJunContents.kpi4 >= '5' && entrepreneurshipJunContents.kpi4 < '6')?'green':(entrepreneurshipJunContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >July</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi1 == null)?'grey-2':(entrepreneurshipJulContents.kpi1 >= '0' && entrepreneurshipJulContents.kpi1 <= '13.4')?'red':(entrepreneurshipJulContents.kpi1 > '13.4' && entrepreneurshipJulContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJulContents.kpi1 > '17.86666667' && entrepreneurshipJulContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJulContents.kpi1 >= '22.33333333' && entrepreneurshipJulContents.kpi1 < '26.8')?'green':(entrepreneurshipJulContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi2 == null)?'grey-2':(entrepreneurshipJulContents.kpi2 >= '0' && entrepreneurshipJulContents.kpi2 <= '19')?'red':(entrepreneurshipJulContents.kpi2 > '19' && entrepreneurshipJulContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJulContents.kpi2 > '25.33333333' && entrepreneurshipJulContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJulContents.kpi2 >= '31.66666667' && entrepreneurshipJulContents.kpi2 < '38')?'green':(entrepreneurshipJulContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi3 == null)?'grey-2':(entrepreneurshipJulContents.kpi3 >= '0' && entrepreneurshipJulContents.kpi3 <= '15')?'red':(entrepreneurshipJulContents.kpi3 > '15' && entrepreneurshipJulContents.kpi3 <= '20')?'orange':(entrepreneurshipJulContents.kpi3 > '20' && entrepreneurshipJulContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJulContents.kpi3 >= '25' && entrepreneurshipJulContents.kpi3 < '30')?'green':(entrepreneurshipJulContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi4 == null)?'grey-2':(entrepreneurshipJulContents.kpi4 >= '0' && entrepreneurshipJulContents.kpi4 <= '3')?'red':(entrepreneurshipJulContents.kpi4 > '3' && entrepreneurshipJulContents.kpi4 <= '4')?'orange':(entrepreneurshipJulContents.kpi4 > '4' && entrepreneurshipJulContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJulContents.kpi4 >= '5' && entrepreneurshipJulContents.kpi4 < '6')?'green':(entrepreneurshipJulContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >August</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi1 == null)?'grey-2':(entrepreneurshipAugContents.kpi1 >= '0' && entrepreneurshipAugContents.kpi1 <= '13.4')?'red':(entrepreneurshipAugContents.kpi1 > '13.4' && entrepreneurshipAugContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAugContents.kpi1 > '17.86666667' && entrepreneurshipAugContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAugContents.kpi1 >= '22.33333333' && entrepreneurshipAugContents.kpi1 < '26.8')?'green':(entrepreneurshipAugContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi2 == null)?'grey-2':(entrepreneurshipAugContents.kpi2 >= '0' && entrepreneurshipAugContents.kpi2 <= '19')?'red':(entrepreneurshipAugContents.kpi2 > '19' && entrepreneurshipAugContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAugContents.kpi2 > '25.33333333' && entrepreneurshipAugContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAugContents.kpi2 >= '31.66666667' && entrepreneurshipAugContents.kpi2 < '38')?'green':(entrepreneurshipAugContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi3 == null)?'grey-2':(entrepreneurshipAugContents.kpi3 >= '0' && entrepreneurshipAugContents.kpi3 <= '15')?'red':(entrepreneurshipAugContents.kpi3 > '15' && entrepreneurshipAugContents.kpi3 <= '20')?'orange':(entrepreneurshipAugContents.kpi3 > '20' && entrepreneurshipAugContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAugContents.kpi3 >= '25' && entrepreneurshipAugContents.kpi3 < '30')?'green':(entrepreneurshipAugContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi4 == null)?'grey-2':(entrepreneurshipAugContents.kpi4 >= '0' && entrepreneurshipAugContents.kpi4 <= '3')?'red':(entrepreneurshipAugContents.kpi4 > '3' && entrepreneurshipAugContents.kpi4 <= '4')?'orange':(entrepreneurshipAugContents.kpi4 > '4' && entrepreneurshipAugContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAugContents.kpi4 >= '5' && entrepreneurshipAugContents.kpi4 < '6')?'green':(entrepreneurshipAugContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >September</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi1 == null)?'grey-2':(entrepreneurshipSepContents.kpi1 >= '0' && entrepreneurshipSepContents.kpi1 <= '13.4')?'red':(entrepreneurshipSepContents.kpi1 > '13.4' && entrepreneurshipSepContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipSepContents.kpi1 > '17.86666667' && entrepreneurshipSepContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipSepContents.kpi1 >= '22.33333333' && entrepreneurshipSepContents.kpi1 < '26.8')?'green':(entrepreneurshipSepContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi2 == null)?'grey-2':(entrepreneurshipSepContents.kpi2 >= '0' && entrepreneurshipSepContents.kpi2 <= '19')?'red':(entrepreneurshipSepContents.kpi2 > '19' && entrepreneurshipSepContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipSepContents.kpi2 > '25.33333333' && entrepreneurshipSepContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipSepContents.kpi2 >= '31.66666667' && entrepreneurshipSepContents.kpi2 < '38')?'green':(entrepreneurshipSepContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi3 == null)?'grey-2':(entrepreneurshipSepContents.kpi3 >= '0' && entrepreneurshipSepContents.kpi3 <= '15')?'red':(entrepreneurshipSepContents.kpi3 > '15' && entrepreneurshipSepContents.kpi3 <= '20')?'orange':(entrepreneurshipSepContents.kpi3 > '20' && entrepreneurshipSepContents.kpi3 < '25')?'yellow-7':(entrepreneurshipSepContents.kpi3 >= '25' && entrepreneurshipSepContents.kpi3 < '30')?'green':(entrepreneurshipSepContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi4 == null)?'grey-2':(entrepreneurshipSepContents.kpi4 >= '0' && entrepreneurshipSepContents.kpi4 <= '3')?'red':(entrepreneurshipSepContents.kpi4 > '3' && entrepreneurshipSepContents.kpi4 <= '4')?'orange':(entrepreneurshipSepContents.kpi4 > '4' && entrepreneurshipSepContents.kpi4 < '5')?'yellow-7':(entrepreneurshipSepContents.kpi4 >= '5' && entrepreneurshipSepContents.kpi4 < '6')?'green':(entrepreneurshipSepContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >October</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi1 == null)?'grey-2':(entrepreneurshipOctContents.kpi1 >= '0' && entrepreneurshipOctContents.kpi1 <= '13.4')?'red':(entrepreneurshipOctContents.kpi1 > '13.4' && entrepreneurshipOctContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipOctContents.kpi1 > '17.86666667' && entrepreneurshipOctContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipOctContents.kpi1 >= '22.33333333' && entrepreneurshipOctContents.kpi1 < '26.8')?'green':(entrepreneurshipOctContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi2 == null)?'grey-2':(entrepreneurshipOctContents.kpi2 >= '0' && entrepreneurshipOctContents.kpi2 <= '19')?'red':(entrepreneurshipOctContents.kpi2 > '19' && entrepreneurshipOctContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipOctContents.kpi2 > '25.33333333' && entrepreneurshipOctContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipOctContents.kpi2 >= '31.66666667' && entrepreneurshipOctContents.kpi2 < '38')?'green':(entrepreneurshipOctContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi3 == null)?'grey-2':(entrepreneurshipOctContents.kpi3 >= '0' && entrepreneurshipOctContents.kpi3 <= '15')?'red':(entrepreneurshipOctContents.kpi3 > '15' && entrepreneurshipOctContents.kpi3 <= '20')?'orange':(entrepreneurshipOctContents.kpi3 > '20' && entrepreneurshipOctContents.kpi3 < '25')?'yellow-7':(entrepreneurshipOctContents.kpi3 >= '25' && entrepreneurshipOctContents.kpi3 < '30')?'green':(entrepreneurshipOctContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi4 == null)?'grey-2':(entrepreneurshipOctContents.kpi4 >= '0' && entrepreneurshipOctContents.kpi4 <= '3')?'red':(entrepreneurshipOctContents.kpi4 > '3' && entrepreneurshipOctContents.kpi4 <= '4')?'orange':(entrepreneurshipOctContents.kpi4 > '4' && entrepreneurshipOctContents.kpi4 < '5')?'yellow-7':(entrepreneurshipOctContents.kpi4 >= '5' && entrepreneurshipOctContents.kpi4 < '6')?'green':(entrepreneurshipOctContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >November</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi1 == null)?'grey-2':(entrepreneurshipNovContents.kpi1 >= '0' && entrepreneurshipNovContents.kpi1 <= '13.4')?'red':(entrepreneurshipNovContents.kpi1 > '13.4' && entrepreneurshipNovContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipNovContents.kpi1 > '17.86666667' && entrepreneurshipNovContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipNovContents.kpi1 >= '22.33333333' && entrepreneurshipNovContents.kpi1 < '26.8')?'green':(entrepreneurshipNovContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi2 == null)?'grey-2':(entrepreneurshipNovContents.kpi2 >= '0' && entrepreneurshipNovContents.kpi2 <= '19')?'red':(entrepreneurshipNovContents.kpi2 > '19' && entrepreneurshipNovContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipNovContents.kpi2 > '25.33333333' && entrepreneurshipNovContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipNovContents.kpi2 >= '31.66666667' && entrepreneurshipNovContents.kpi2 < '38')?'green':(entrepreneurshipNovContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi3 == null)?'grey-2':(entrepreneurshipNovContents.kpi3 >= '0' && entrepreneurshipNovContents.kpi3 <= '15')?'red':(entrepreneurshipNovContents.kpi3 > '15' && entrepreneurshipNovContents.kpi3 <= '20')?'orange':(entrepreneurshipNovContents.kpi3 > '20' && entrepreneurshipNovContents.kpi3 < '25')?'yellow-7':(entrepreneurshipNovContents.kpi3 >= '25' && entrepreneurshipNovContents.kpi3 < '30')?'green':(entrepreneurshipNovContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi4 == null)?'grey-2':(entrepreneurshipNovContents.kpi4 >= '0' && entrepreneurshipNovContents.kpi4 <= '3')?'red':(entrepreneurshipNovContents.kpi4 > '3' && entrepreneurshipNovContents.kpi4 <= '4')?'orange':(entrepreneurshipNovContents.kpi4 > '4' && entrepreneurshipNovContents.kpi4 < '5')?'yellow-7':(entrepreneurshipNovContents.kpi4 >= '5' && entrepreneurshipNovContents.kpi4 < '6')?'green':(entrepreneurshipNovContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >December</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi1 == null)?'grey-2':(entrepreneurshipDecContents.kpi1 >= '0' && entrepreneurshipDecContents.kpi1 <= '13.4')?'red':(entrepreneurshipDecContents.kpi1 > '13.4' && entrepreneurshipDecContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipDecContents.kpi1 > '17.86666667' && entrepreneurshipDecContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipDecContents.kpi1 >= '22.33333333' && entrepreneurshipDecContents.kpi1 < '26.8')?'green':(entrepreneurshipDecContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi2 == null)?'grey-2':(entrepreneurshipDecContents.kpi2 >= '0' && entrepreneurshipDecContents.kpi2 <= '19')?'red':(entrepreneurshipDecContents.kpi2 > '19' && entrepreneurshipDecContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipDecContents.kpi2 > '25.33333333' && entrepreneurshipDecContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipDecContents.kpi2 >= '31.66666667' && entrepreneurshipDecContents.kpi2 < '38')?'green':(entrepreneurshipDecContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi3 == null)?'grey-2':(entrepreneurshipDecContents.kpi3 >= '0' && entrepreneurshipDecContents.kpi3 <= '15')?'red':(entrepreneurshipDecContents.kpi3 > '15' && entrepreneurshipDecContents.kpi3 <= '20')?'orange':(entrepreneurshipDecContents.kpi3 > '20' && entrepreneurshipDecContents.kpi3 < '25')?'yellow-7':(entrepreneurshipDecContents.kpi3 >= '25' && entrepreneurshipDecContents.kpi3 < '30')?'green':(entrepreneurshipDecContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi4 == null)?'grey-2':(entrepreneurshipDecContents.kpi4 >= '0' && entrepreneurshipDecContents.kpi4 <= '3')?'red':(entrepreneurshipDecContents.kpi4 > '3' && entrepreneurshipDecContents.kpi4 <= '4')?'orange':(entrepreneurshipDecContents.kpi4 > '4' && entrepreneurshipDecContents.kpi4 < '5')?'yellow-7':(entrepreneurshipDecContents.kpi4 >= '5' && entrepreneurshipDecContents.kpi4 < '6')?'green':(entrepreneurshipDecContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <!--TABLE DONE-->
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/images/rrcrc-logo_1200x300.png"></q-img>
                      </q-card-section>
                    </q-card>
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Budget Usage (Cumulative)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('gauge')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="gauge" :option="gaugeMayOptions" :resizable="true" style="height:315px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section>
                        <div class="text-h6">Expense Categories (Monthly)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="pie" :option="pieMayOptions" :resizable="true" style="height:465px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
                <div class="row q-col-gutter-sm q-mt-xs">
                  <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Process Chart
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('line')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="line" :option="lineChartOption" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
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
                        <IEcharts :option="barOptions" ref="bar" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>  
            </q-tab-panel>

            <q-tab-panel name="june">
              <div class="text-h4 q-mb-md">{{$route.name}}&ensp;|&ensp;June </div>
                <div class="row q-col-gutter-sm">
                  <!--TABLE-->
                  <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <q-card>
                      <q-list dense class="rounded-borders" >
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >Months</q-item-label>
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 1
                                <q-tooltip># Clients (Unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># Contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi1 == null)?'grey-2':(entrepreneurshipJanContents.kpi1 >= '0' && entrepreneurshipJanContents.kpi1 <= '13.4')?'red':(entrepreneurshipJanContents.kpi1 > '13.4' && entrepreneurshipJanContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJanContents.kpi1 > '17.86666667' && entrepreneurshipJanContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJanContents.kpi1 >= '22.33333333' && entrepreneurshipJanContents.kpi1 < '26.8')?'green':(entrepreneurshipJanContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi2 == null)?'grey-2':(entrepreneurshipJanContents.kpi2 >= '0' && entrepreneurshipJanContents.kpi2 <= '19')?'red':(entrepreneurshipJanContents.kpi2 > '19' && entrepreneurshipJanContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJanContents.kpi2 > '25.33333333' && entrepreneurshipJanContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJanContents.kpi2 >= '31.66666667' && entrepreneurshipJanContents.kpi2 < '38')?'green':(entrepreneurshipJanContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi3 == null)?'grey-2':(entrepreneurshipJanContents.kpi3 >= '0' && entrepreneurshipJanContents.kpi3 <= '15')?'red':(entrepreneurshipJanContents.kpi3 > '15' && entrepreneurshipJanContents.kpi3 <= '20')?'orange':(entrepreneurshipJanContents.kpi3 > '20' && entrepreneurshipJanContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJanContents.kpi3 >= '25' && entrepreneurshipJanContents.kpi3 < '30')?'green':(entrepreneurshipJanContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi4 == null)?'grey-2':(entrepreneurshipJanContents.kpi4 >= '0' && entrepreneurshipJanContents.kpi4 <= '3')?'red':(entrepreneurshipJanContents.kpi4 > '3' && entrepreneurshipJanContents.kpi4 <= '4')?'orange':(entrepreneurshipJanContents.kpi4 > '4' && entrepreneurshipJanContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJanContents.kpi4 >= '5' && entrepreneurshipJanContents.kpi4 < '6')?'green':(entrepreneurshipJanContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>  
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >February</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi1 == null)?'grey-2':(entrepreneurshipFebContents.kpi1 >= '0' && entrepreneurshipFebContents.kpi1 <= '13.4')?'red':(entrepreneurshipFebContents.kpi1 > '13.4' && entrepreneurshipFebContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipFebContents.kpi1 > '17.86666667' && entrepreneurshipFebContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipFebContents.kpi1 >= '22.33333333' && entrepreneurshipFebContents.kpi1 < '26.8')?'green':(entrepreneurshipFebContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi2 == null)?'grey-2':(entrepreneurshipFebContents.kpi2 >= '0' && entrepreneurshipFebContents.kpi2 <= '19')?'red':(entrepreneurshipFebContents.kpi2 > '19' && entrepreneurshipFebContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipFebContents.kpi2 > '25.33333333' && entrepreneurshipFebContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipFebContents.kpi2 >= '31.66666667' && entrepreneurshipFebContents.kpi2 < '38')?'green':(entrepreneurshipFebContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi3 == null)?'grey-2':(entrepreneurshipFebContents.kpi3 >= '0' && entrepreneurshipFebContents.kpi3 <= '15')?'red':(entrepreneurshipFebContents.kpi3 > '15' && entrepreneurshipFebContents.kpi3 <= '20')?'orange':(entrepreneurshipFebContents.kpi3 > '20' && entrepreneurshipFebContents.kpi3 < '25')?'yellow-7':(entrepreneurshipFebContents.kpi3 >= '25' && entrepreneurshipFebContents.kpi3 < '30')?'green':(entrepreneurshipFebContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi4 == null)?'grey-2':(entrepreneurshipFebContents.kpi4 >= '0' && entrepreneurshipFebContents.kpi4 <= '3')?'red':(entrepreneurshipFebContents.kpi4 > '3' && entrepreneurshipFebContents.kpi4 <= '4')?'orange':(entrepreneurshipFebContents.kpi4 > '4' && entrepreneurshipFebContents.kpi4 < '5')?'yellow-7':(entrepreneurshipFebContents.kpi4 >= '5' && entrepreneurshipFebContents.kpi4 < '6')?'green':(entrepreneurshipFebContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >March</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi1 == null)?'grey-2':(entrepreneurshipMarContents.kpi1 >= '0' && entrepreneurshipMarContents.kpi1 <= '13.4')?'red':(entrepreneurshipMarContents.kpi1 > '13.4' && entrepreneurshipMarContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMarContents.kpi1 > '17.86666667' && entrepreneurshipMarContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMarContents.kpi1 >= '22.33333333' && entrepreneurshipMarContents.kpi1 < '26.8')?'green':(entrepreneurshipMarContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi2 == null)?'grey-2':(entrepreneurshipMarContents.kpi2 >= '0' && entrepreneurshipMarContents.kpi2 <= '19')?'red':(entrepreneurshipMarContents.kpi2 > '19' && entrepreneurshipMarContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMarContents.kpi2 > '25.33333333' && entrepreneurshipMarContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMarContents.kpi2 >= '31.66666667' && entrepreneurshipMarContents.kpi2 < '38')?'green':(entrepreneurshipMarContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi3 == null)?'grey-2':(entrepreneurshipMarContents.kpi3 >= '0' && entrepreneurshipMarContents.kpi3 <= '15')?'red':(entrepreneurshipMarContents.kpi3 > '15' && entrepreneurshipMarContents.kpi3 <= '20')?'orange':(entrepreneurshipMarContents.kpi3 > '20' && entrepreneurshipMarContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMarContents.kpi3 >= '25' && entrepreneurshipMarContents.kpi3 < '30')?'green':(entrepreneurshipMarContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi4 == null)?'grey-2':(entrepreneurshipMarContents.kpi4 >= '0' && entrepreneurshipMarContents.kpi4 <= '3')?'red':(entrepreneurshipMarContents.kpi4 > '3' && entrepreneurshipMarContents.kpi4 <= '4')?'orange':(entrepreneurshipMarContents.kpi4 > '4' && entrepreneurshipMarContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMarContents.kpi4 >= '5' && entrepreneurshipMarContents.kpi4 < '6')?'green':(entrepreneurshipMarContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >April</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi1 == null)?'grey-2':(entrepreneurshipAprContents.kpi1 >= '0' && entrepreneurshipAprContents.kpi1 <= '13.4')?'red':(entrepreneurshipAprContents.kpi1 > '13.4' && entrepreneurshipAprContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAprContents.kpi1 > '17.86666667' && entrepreneurshipAprContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAprContents.kpi1 >= '22.33333333' && entrepreneurshipAprContents.kpi1 < '26.8')?'green':(entrepreneurshipAprContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi2 == null)?'grey-2':(entrepreneurshipAprContents.kpi2 >= '0' && entrepreneurshipAprContents.kpi2 <= '19')?'red':(entrepreneurshipAprContents.kpi2 > '19' && entrepreneurshipAprContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAprContents.kpi2 > '25.33333333' && entrepreneurshipAprContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAprContents.kpi2 >= '31.66666667' && entrepreneurshipAprContents.kpi2 < '38')?'green':(entrepreneurshipAprContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi3 == null)?'grey-2':(entrepreneurshipAprContents.kpi3 >= '0' && entrepreneurshipAprContents.kpi3 <= '15')?'red':(entrepreneurshipAprContents.kpi3 > '15' && entrepreneurshipAprContents.kpi3 <= '20')?'orange':(entrepreneurshipAprContents.kpi3 > '20' && entrepreneurshipAprContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAprContents.kpi3 >= '25' && entrepreneurshipAprContents.kpi3 < '30')?'green':(entrepreneurshipAprContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi4 == null)?'grey-2':(entrepreneurshipAprContents.kpi4 >= '0' && entrepreneurshipAprContents.kpi4 <= '3')?'red':(entrepreneurshipAprContents.kpi4 > '3' && entrepreneurshipAprContents.kpi4 <= '4')?'orange':(entrepreneurshipAprContents.kpi4 > '4' && entrepreneurshipAprContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAprContents.kpi4 >= '5' && entrepreneurshipAprContents.kpi4 < '6')?'green':(entrepreneurshipAprContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >May</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi1 == null)?'grey-2':(entrepreneurshipMayContents.kpi1 >= '0' && entrepreneurshipMayContents.kpi1 <= '13.4')?'red':(entrepreneurshipMayContents.kpi1 > '13.4' && entrepreneurshipMayContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMayContents.kpi1 > '17.86666667' && entrepreneurshipMayContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMayContents.kpi1 >= '22.33333333' && entrepreneurshipMayContents.kpi1 < '26.8')?'green':(entrepreneurshipMayContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi2 == null)?'grey-2':(entrepreneurshipMayContents.kpi2 >= '0' && entrepreneurshipMayContents.kpi2 <= '19')?'red':(entrepreneurshipMayContents.kpi2 > '19' && entrepreneurshipMayContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMayContents.kpi2 > '25.33333333' && entrepreneurshipMayContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMayContents.kpi2 >= '31.66666667' && entrepreneurshipMayContents.kpi2 < '38')?'green':(entrepreneurshipMayContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi3 == null)?'grey-2':(entrepreneurshipMayContents.kpi3 >= '0' && entrepreneurshipMayContents.kpi3 <= '15')?'red':(entrepreneurshipMayContents.kpi3 > '15' && entrepreneurshipMayContents.kpi3 <= '20')?'orange':(entrepreneurshipMayContents.kpi3 > '20' && entrepreneurshipMayContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMayContents.kpi3 >= '25' && entrepreneurshipMayContents.kpi3 < '30')?'green':(entrepreneurshipMayContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi4 == null)?'grey-2':(entrepreneurshipMayContents.kpi4 >= '0' && entrepreneurshipMayContents.kpi4 <= '3')?'red':(entrepreneurshipMayContents.kpi4 > '3' && entrepreneurshipMayContents.kpi4 <= '4')?'orange':(entrepreneurshipMayContents.kpi4 > '4' && entrepreneurshipMayContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMayContents.kpi4 >= '5' && entrepreneurshipMayContents.kpi4 < '6')?'green':(entrepreneurshipMayContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >June</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi1 == null)?'grey-2':(entrepreneurshipJunContents.kpi1 >= '0' && entrepreneurshipJunContents.kpi1 <= '13.4')?'red':(entrepreneurshipJunContents.kpi1 > '13.4' && entrepreneurshipJunContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJunContents.kpi1 > '17.86666667' && entrepreneurshipJunContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJunContents.kpi1 >= '22.33333333' && entrepreneurshipJunContents.kpi1 < '26.8')?'green':(entrepreneurshipJunContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi2 == null)?'grey-2':(entrepreneurshipJunContents.kpi2 >= '0' && entrepreneurshipJunContents.kpi2 <= '19')?'red':(entrepreneurshipJunContents.kpi2 > '19' && entrepreneurshipJunContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJunContents.kpi2 > '25.33333333' && entrepreneurshipJunContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJunContents.kpi2 >= '31.66666667' && entrepreneurshipJunContents.kpi2 < '38')?'green':(entrepreneurshipJunContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi3 == null)?'grey-2':(entrepreneurshipJunContents.kpi3 >= '0' && entrepreneurshipJunContents.kpi3 <= '15')?'red':(entrepreneurshipJunContents.kpi3 > '15' && entrepreneurshipJunContents.kpi3 <= '20')?'orange':(entrepreneurshipJunContents.kpi3 > '20' && entrepreneurshipJunContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJunContents.kpi3 >= '25' && entrepreneurshipJunContents.kpi3 < '30')?'green':(entrepreneurshipJunContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi4 == null)?'grey-2':(entrepreneurshipJunContents.kpi4 >= '0' && entrepreneurshipJunContents.kpi4 <= '3')?'red':(entrepreneurshipJunContents.kpi4 > '3' && entrepreneurshipJunContents.kpi4 <= '4')?'orange':(entrepreneurshipJunContents.kpi4 > '4' && entrepreneurshipJunContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJunContents.kpi4 >= '5' && entrepreneurshipJunContents.kpi4 < '6')?'green':(entrepreneurshipJunContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >July</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi1 == null)?'grey-2':(entrepreneurshipJulContents.kpi1 >= '0' && entrepreneurshipJulContents.kpi1 <= '13.4')?'red':(entrepreneurshipJulContents.kpi1 > '13.4' && entrepreneurshipJulContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJulContents.kpi1 > '17.86666667' && entrepreneurshipJulContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJulContents.kpi1 >= '22.33333333' && entrepreneurshipJulContents.kpi1 < '26.8')?'green':(entrepreneurshipJulContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi2 == null)?'grey-2':(entrepreneurshipJulContents.kpi2 >= '0' && entrepreneurshipJulContents.kpi2 <= '19')?'red':(entrepreneurshipJulContents.kpi2 > '19' && entrepreneurshipJulContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJulContents.kpi2 > '25.33333333' && entrepreneurshipJulContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJulContents.kpi2 >= '31.66666667' && entrepreneurshipJulContents.kpi2 < '38')?'green':(entrepreneurshipJulContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi3 == null)?'grey-2':(entrepreneurshipJulContents.kpi3 >= '0' && entrepreneurshipJulContents.kpi3 <= '15')?'red':(entrepreneurshipJulContents.kpi3 > '15' && entrepreneurshipJulContents.kpi3 <= '20')?'orange':(entrepreneurshipJulContents.kpi3 > '20' && entrepreneurshipJulContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJulContents.kpi3 >= '25' && entrepreneurshipJulContents.kpi3 < '30')?'green':(entrepreneurshipJulContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi4 == null)?'grey-2':(entrepreneurshipJulContents.kpi4 >= '0' && entrepreneurshipJulContents.kpi4 <= '3')?'red':(entrepreneurshipJulContents.kpi4 > '3' && entrepreneurshipJulContents.kpi4 <= '4')?'orange':(entrepreneurshipJulContents.kpi4 > '4' && entrepreneurshipJulContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJulContents.kpi4 >= '5' && entrepreneurshipJulContents.kpi4 < '6')?'green':(entrepreneurshipJulContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >August</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi1 == null)?'grey-2':(entrepreneurshipAugContents.kpi1 >= '0' && entrepreneurshipAugContents.kpi1 <= '13.4')?'red':(entrepreneurshipAugContents.kpi1 > '13.4' && entrepreneurshipAugContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAugContents.kpi1 > '17.86666667' && entrepreneurshipAugContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAugContents.kpi1 >= '22.33333333' && entrepreneurshipAugContents.kpi1 < '26.8')?'green':(entrepreneurshipAugContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi2 == null)?'grey-2':(entrepreneurshipAugContents.kpi2 >= '0' && entrepreneurshipAugContents.kpi2 <= '19')?'red':(entrepreneurshipAugContents.kpi2 > '19' && entrepreneurshipAugContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAugContents.kpi2 > '25.33333333' && entrepreneurshipAugContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAugContents.kpi2 >= '31.66666667' && entrepreneurshipAugContents.kpi2 < '38')?'green':(entrepreneurshipAugContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi3 == null)?'grey-2':(entrepreneurshipAugContents.kpi3 >= '0' && entrepreneurshipAugContents.kpi3 <= '15')?'red':(entrepreneurshipAugContents.kpi3 > '15' && entrepreneurshipAugContents.kpi3 <= '20')?'orange':(entrepreneurshipAugContents.kpi3 > '20' && entrepreneurshipAugContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAugContents.kpi3 >= '25' && entrepreneurshipAugContents.kpi3 < '30')?'green':(entrepreneurshipAugContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi4 == null)?'grey-2':(entrepreneurshipAugContents.kpi4 >= '0' && entrepreneurshipAugContents.kpi4 <= '3')?'red':(entrepreneurshipAugContents.kpi4 > '3' && entrepreneurshipAugContents.kpi4 <= '4')?'orange':(entrepreneurshipAugContents.kpi4 > '4' && entrepreneurshipAugContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAugContents.kpi4 >= '5' && entrepreneurshipAugContents.kpi4 < '6')?'green':(entrepreneurshipAugContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >September</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi1 == null)?'grey-2':(entrepreneurshipSepContents.kpi1 >= '0' && entrepreneurshipSepContents.kpi1 <= '13.4')?'red':(entrepreneurshipSepContents.kpi1 > '13.4' && entrepreneurshipSepContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipSepContents.kpi1 > '17.86666667' && entrepreneurshipSepContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipSepContents.kpi1 >= '22.33333333' && entrepreneurshipSepContents.kpi1 < '26.8')?'green':(entrepreneurshipSepContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi2 == null)?'grey-2':(entrepreneurshipSepContents.kpi2 >= '0' && entrepreneurshipSepContents.kpi2 <= '19')?'red':(entrepreneurshipSepContents.kpi2 > '19' && entrepreneurshipSepContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipSepContents.kpi2 > '25.33333333' && entrepreneurshipSepContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipSepContents.kpi2 >= '31.66666667' && entrepreneurshipSepContents.kpi2 < '38')?'green':(entrepreneurshipSepContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi3 == null)?'grey-2':(entrepreneurshipSepContents.kpi3 >= '0' && entrepreneurshipSepContents.kpi3 <= '15')?'red':(entrepreneurshipSepContents.kpi3 > '15' && entrepreneurshipSepContents.kpi3 <= '20')?'orange':(entrepreneurshipSepContents.kpi3 > '20' && entrepreneurshipSepContents.kpi3 < '25')?'yellow-7':(entrepreneurshipSepContents.kpi3 >= '25' && entrepreneurshipSepContents.kpi3 < '30')?'green':(entrepreneurshipSepContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi4 == null)?'grey-2':(entrepreneurshipSepContents.kpi4 >= '0' && entrepreneurshipSepContents.kpi4 <= '3')?'red':(entrepreneurshipSepContents.kpi4 > '3' && entrepreneurshipSepContents.kpi4 <= '4')?'orange':(entrepreneurshipSepContents.kpi4 > '4' && entrepreneurshipSepContents.kpi4 < '5')?'yellow-7':(entrepreneurshipSepContents.kpi4 >= '5' && entrepreneurshipSepContents.kpi4 < '6')?'green':(entrepreneurshipSepContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >October</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi1 == null)?'grey-2':(entrepreneurshipOctContents.kpi1 >= '0' && entrepreneurshipOctContents.kpi1 <= '13.4')?'red':(entrepreneurshipOctContents.kpi1 > '13.4' && entrepreneurshipOctContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipOctContents.kpi1 > '17.86666667' && entrepreneurshipOctContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipOctContents.kpi1 >= '22.33333333' && entrepreneurshipOctContents.kpi1 < '26.8')?'green':(entrepreneurshipOctContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi2 == null)?'grey-2':(entrepreneurshipOctContents.kpi2 >= '0' && entrepreneurshipOctContents.kpi2 <= '19')?'red':(entrepreneurshipOctContents.kpi2 > '19' && entrepreneurshipOctContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipOctContents.kpi2 > '25.33333333' && entrepreneurshipOctContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipOctContents.kpi2 >= '31.66666667' && entrepreneurshipOctContents.kpi2 < '38')?'green':(entrepreneurshipOctContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi3 == null)?'grey-2':(entrepreneurshipOctContents.kpi3 >= '0' && entrepreneurshipOctContents.kpi3 <= '15')?'red':(entrepreneurshipOctContents.kpi3 > '15' && entrepreneurshipOctContents.kpi3 <= '20')?'orange':(entrepreneurshipOctContents.kpi3 > '20' && entrepreneurshipOctContents.kpi3 < '25')?'yellow-7':(entrepreneurshipOctContents.kpi3 >= '25' && entrepreneurshipOctContents.kpi3 < '30')?'green':(entrepreneurshipOctContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi4 == null)?'grey-2':(entrepreneurshipOctContents.kpi4 >= '0' && entrepreneurshipOctContents.kpi4 <= '3')?'red':(entrepreneurshipOctContents.kpi4 > '3' && entrepreneurshipOctContents.kpi4 <= '4')?'orange':(entrepreneurshipOctContents.kpi4 > '4' && entrepreneurshipOctContents.kpi4 < '5')?'yellow-7':(entrepreneurshipOctContents.kpi4 >= '5' && entrepreneurshipOctContents.kpi4 < '6')?'green':(entrepreneurshipOctContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >November</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi1 == null)?'grey-2':(entrepreneurshipNovContents.kpi1 >= '0' && entrepreneurshipNovContents.kpi1 <= '13.4')?'red':(entrepreneurshipNovContents.kpi1 > '13.4' && entrepreneurshipNovContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipNovContents.kpi1 > '17.86666667' && entrepreneurshipNovContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipNovContents.kpi1 >= '22.33333333' && entrepreneurshipNovContents.kpi1 < '26.8')?'green':(entrepreneurshipNovContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi2 == null)?'grey-2':(entrepreneurshipNovContents.kpi2 >= '0' && entrepreneurshipNovContents.kpi2 <= '19')?'red':(entrepreneurshipNovContents.kpi2 > '19' && entrepreneurshipNovContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipNovContents.kpi2 > '25.33333333' && entrepreneurshipNovContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipNovContents.kpi2 >= '31.66666667' && entrepreneurshipNovContents.kpi2 < '38')?'green':(entrepreneurshipNovContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi3 == null)?'grey-2':(entrepreneurshipNovContents.kpi3 >= '0' && entrepreneurshipNovContents.kpi3 <= '15')?'red':(entrepreneurshipNovContents.kpi3 > '15' && entrepreneurshipNovContents.kpi3 <= '20')?'orange':(entrepreneurshipNovContents.kpi3 > '20' && entrepreneurshipNovContents.kpi3 < '25')?'yellow-7':(entrepreneurshipNovContents.kpi3 >= '25' && entrepreneurshipNovContents.kpi3 < '30')?'green':(entrepreneurshipNovContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi4 == null)?'grey-2':(entrepreneurshipNovContents.kpi4 >= '0' && entrepreneurshipNovContents.kpi4 <= '3')?'red':(entrepreneurshipNovContents.kpi4 > '3' && entrepreneurshipNovContents.kpi4 <= '4')?'orange':(entrepreneurshipNovContents.kpi4 > '4' && entrepreneurshipNovContents.kpi4 < '5')?'yellow-7':(entrepreneurshipNovContents.kpi4 >= '5' && entrepreneurshipNovContents.kpi4 < '6')?'green':(entrepreneurshipNovContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >December</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi1 == null)?'grey-2':(entrepreneurshipDecContents.kpi1 >= '0' && entrepreneurshipDecContents.kpi1 <= '13.4')?'red':(entrepreneurshipDecContents.kpi1 > '13.4' && entrepreneurshipDecContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipDecContents.kpi1 > '17.86666667' && entrepreneurshipDecContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipDecContents.kpi1 >= '22.33333333' && entrepreneurshipDecContents.kpi1 < '26.8')?'green':(entrepreneurshipDecContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi2 == null)?'grey-2':(entrepreneurshipDecContents.kpi2 >= '0' && entrepreneurshipDecContents.kpi2 <= '19')?'red':(entrepreneurshipDecContents.kpi2 > '19' && entrepreneurshipDecContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipDecContents.kpi2 > '25.33333333' && entrepreneurshipDecContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipDecContents.kpi2 >= '31.66666667' && entrepreneurshipDecContents.kpi2 < '38')?'green':(entrepreneurshipDecContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi3 == null)?'grey-2':(entrepreneurshipDecContents.kpi3 >= '0' && entrepreneurshipDecContents.kpi3 <= '15')?'red':(entrepreneurshipDecContents.kpi3 > '15' && entrepreneurshipDecContents.kpi3 <= '20')?'orange':(entrepreneurshipDecContents.kpi3 > '20' && entrepreneurshipDecContents.kpi3 < '25')?'yellow-7':(entrepreneurshipDecContents.kpi3 >= '25' && entrepreneurshipDecContents.kpi3 < '30')?'green':(entrepreneurshipDecContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi4 == null)?'grey-2':(entrepreneurshipDecContents.kpi4 >= '0' && entrepreneurshipDecContents.kpi4 <= '3')?'red':(entrepreneurshipDecContents.kpi4 > '3' && entrepreneurshipDecContents.kpi4 <= '4')?'orange':(entrepreneurshipDecContents.kpi4 > '4' && entrepreneurshipDecContents.kpi4 < '5')?'yellow-7':(entrepreneurshipDecContents.kpi4 >= '5' && entrepreneurshipDecContents.kpi4 < '6')?'green':(entrepreneurshipDecContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <!--TABLE DONE-->
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/images/rrcrc-logo_1200x300.png"></q-img>
                      </q-card-section>
                    </q-card>
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Budget Usage (Cumulative)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('gauge')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="gauge" :option="gaugeJunOptions" :resizable="true" style="height:315px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section>
                        <div class="text-h6">Expense Categories (Monthly)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="pie" :option="pieJunOptions" :resizable="true" style="height:465px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
                <div class="row q-col-gutter-sm q-mt-xs">
                  <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Process Chart
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('line')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="line" :option="lineChartOption" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
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
                        <IEcharts :option="barOptions" ref="bar" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>  
            </q-tab-panel>

            <q-tab-panel name="july">
              <div class="text-h4 q-mb-md">{{$route.name}}&ensp;|&ensp;July </div>
                <div class="row q-col-gutter-sm">
                  <!--TABLE-->
                  <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <q-card>
                      <q-list dense class="rounded-borders" >
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >Months</q-item-label>
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 1
                                <q-tooltip># Clients (Unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># Contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi1 == null)?'grey-2':(entrepreneurshipJanContents.kpi1 >= '0' && entrepreneurshipJanContents.kpi1 <= '13.4')?'red':(entrepreneurshipJanContents.kpi1 > '13.4' && entrepreneurshipJanContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJanContents.kpi1 > '17.86666667' && entrepreneurshipJanContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJanContents.kpi1 >= '22.33333333' && entrepreneurshipJanContents.kpi1 < '26.8')?'green':(entrepreneurshipJanContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi2 == null)?'grey-2':(entrepreneurshipJanContents.kpi2 >= '0' && entrepreneurshipJanContents.kpi2 <= '19')?'red':(entrepreneurshipJanContents.kpi2 > '19' && entrepreneurshipJanContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJanContents.kpi2 > '25.33333333' && entrepreneurshipJanContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJanContents.kpi2 >= '31.66666667' && entrepreneurshipJanContents.kpi2 < '38')?'green':(entrepreneurshipJanContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi3 == null)?'grey-2':(entrepreneurshipJanContents.kpi3 >= '0' && entrepreneurshipJanContents.kpi3 <= '15')?'red':(entrepreneurshipJanContents.kpi3 > '15' && entrepreneurshipJanContents.kpi3 <= '20')?'orange':(entrepreneurshipJanContents.kpi3 > '20' && entrepreneurshipJanContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJanContents.kpi3 >= '25' && entrepreneurshipJanContents.kpi3 < '30')?'green':(entrepreneurshipJanContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi4 == null)?'grey-2':(entrepreneurshipJanContents.kpi4 >= '0' && entrepreneurshipJanContents.kpi4 <= '3')?'red':(entrepreneurshipJanContents.kpi4 > '3' && entrepreneurshipJanContents.kpi4 <= '4')?'orange':(entrepreneurshipJanContents.kpi4 > '4' && entrepreneurshipJanContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJanContents.kpi4 >= '5' && entrepreneurshipJanContents.kpi4 < '6')?'green':(entrepreneurshipJanContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>  
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >February</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi1 == null)?'grey-2':(entrepreneurshipFebContents.kpi1 >= '0' && entrepreneurshipFebContents.kpi1 <= '13.4')?'red':(entrepreneurshipFebContents.kpi1 > '13.4' && entrepreneurshipFebContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipFebContents.kpi1 > '17.86666667' && entrepreneurshipFebContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipFebContents.kpi1 >= '22.33333333' && entrepreneurshipFebContents.kpi1 < '26.8')?'green':(entrepreneurshipFebContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi2 == null)?'grey-2':(entrepreneurshipFebContents.kpi2 >= '0' && entrepreneurshipFebContents.kpi2 <= '19')?'red':(entrepreneurshipFebContents.kpi2 > '19' && entrepreneurshipFebContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipFebContents.kpi2 > '25.33333333' && entrepreneurshipFebContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipFebContents.kpi2 >= '31.66666667' && entrepreneurshipFebContents.kpi2 < '38')?'green':(entrepreneurshipFebContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi3 == null)?'grey-2':(entrepreneurshipFebContents.kpi3 >= '0' && entrepreneurshipFebContents.kpi3 <= '15')?'red':(entrepreneurshipFebContents.kpi3 > '15' && entrepreneurshipFebContents.kpi3 <= '20')?'orange':(entrepreneurshipFebContents.kpi3 > '20' && entrepreneurshipFebContents.kpi3 < '25')?'yellow-7':(entrepreneurshipFebContents.kpi3 >= '25' && entrepreneurshipFebContents.kpi3 < '30')?'green':(entrepreneurshipFebContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi4 == null)?'grey-2':(entrepreneurshipFebContents.kpi4 >= '0' && entrepreneurshipFebContents.kpi4 <= '3')?'red':(entrepreneurshipFebContents.kpi4 > '3' && entrepreneurshipFebContents.kpi4 <= '4')?'orange':(entrepreneurshipFebContents.kpi4 > '4' && entrepreneurshipFebContents.kpi4 < '5')?'yellow-7':(entrepreneurshipFebContents.kpi4 >= '5' && entrepreneurshipFebContents.kpi4 < '6')?'green':(entrepreneurshipFebContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >March</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi1 == null)?'grey-2':(entrepreneurshipMarContents.kpi1 >= '0' && entrepreneurshipMarContents.kpi1 <= '13.4')?'red':(entrepreneurshipMarContents.kpi1 > '13.4' && entrepreneurshipMarContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMarContents.kpi1 > '17.86666667' && entrepreneurshipMarContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMarContents.kpi1 >= '22.33333333' && entrepreneurshipMarContents.kpi1 < '26.8')?'green':(entrepreneurshipMarContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi2 == null)?'grey-2':(entrepreneurshipMarContents.kpi2 >= '0' && entrepreneurshipMarContents.kpi2 <= '19')?'red':(entrepreneurshipMarContents.kpi2 > '19' && entrepreneurshipMarContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMarContents.kpi2 > '25.33333333' && entrepreneurshipMarContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMarContents.kpi2 >= '31.66666667' && entrepreneurshipMarContents.kpi2 < '38')?'green':(entrepreneurshipMarContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi3 == null)?'grey-2':(entrepreneurshipMarContents.kpi3 >= '0' && entrepreneurshipMarContents.kpi3 <= '15')?'red':(entrepreneurshipMarContents.kpi3 > '15' && entrepreneurshipMarContents.kpi3 <= '20')?'orange':(entrepreneurshipMarContents.kpi3 > '20' && entrepreneurshipMarContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMarContents.kpi3 >= '25' && entrepreneurshipMarContents.kpi3 < '30')?'green':(entrepreneurshipMarContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi4 == null)?'grey-2':(entrepreneurshipMarContents.kpi4 >= '0' && entrepreneurshipMarContents.kpi4 <= '3')?'red':(entrepreneurshipMarContents.kpi4 > '3' && entrepreneurshipMarContents.kpi4 <= '4')?'orange':(entrepreneurshipMarContents.kpi4 > '4' && entrepreneurshipMarContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMarContents.kpi4 >= '5' && entrepreneurshipMarContents.kpi4 < '6')?'green':(entrepreneurshipMarContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >April</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi1 == null)?'grey-2':(entrepreneurshipAprContents.kpi1 >= '0' && entrepreneurshipAprContents.kpi1 <= '13.4')?'red':(entrepreneurshipAprContents.kpi1 > '13.4' && entrepreneurshipAprContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAprContents.kpi1 > '17.86666667' && entrepreneurshipAprContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAprContents.kpi1 >= '22.33333333' && entrepreneurshipAprContents.kpi1 < '26.8')?'green':(entrepreneurshipAprContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi2 == null)?'grey-2':(entrepreneurshipAprContents.kpi2 >= '0' && entrepreneurshipAprContents.kpi2 <= '19')?'red':(entrepreneurshipAprContents.kpi2 > '19' && entrepreneurshipAprContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAprContents.kpi2 > '25.33333333' && entrepreneurshipAprContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAprContents.kpi2 >= '31.66666667' && entrepreneurshipAprContents.kpi2 < '38')?'green':(entrepreneurshipAprContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi3 == null)?'grey-2':(entrepreneurshipAprContents.kpi3 >= '0' && entrepreneurshipAprContents.kpi3 <= '15')?'red':(entrepreneurshipAprContents.kpi3 > '15' && entrepreneurshipAprContents.kpi3 <= '20')?'orange':(entrepreneurshipAprContents.kpi3 > '20' && entrepreneurshipAprContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAprContents.kpi3 >= '25' && entrepreneurshipAprContents.kpi3 < '30')?'green':(entrepreneurshipAprContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi4 == null)?'grey-2':(entrepreneurshipAprContents.kpi4 >= '0' && entrepreneurshipAprContents.kpi4 <= '3')?'red':(entrepreneurshipAprContents.kpi4 > '3' && entrepreneurshipAprContents.kpi4 <= '4')?'orange':(entrepreneurshipAprContents.kpi4 > '4' && entrepreneurshipAprContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAprContents.kpi4 >= '5' && entrepreneurshipAprContents.kpi4 < '6')?'green':(entrepreneurshipAprContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >May</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi1 == null)?'grey-2':(entrepreneurshipMayContents.kpi1 >= '0' && entrepreneurshipMayContents.kpi1 <= '13.4')?'red':(entrepreneurshipMayContents.kpi1 > '13.4' && entrepreneurshipMayContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMayContents.kpi1 > '17.86666667' && entrepreneurshipMayContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMayContents.kpi1 >= '22.33333333' && entrepreneurshipMayContents.kpi1 < '26.8')?'green':(entrepreneurshipMayContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi2 == null)?'grey-2':(entrepreneurshipMayContents.kpi2 >= '0' && entrepreneurshipMayContents.kpi2 <= '19')?'red':(entrepreneurshipMayContents.kpi2 > '19' && entrepreneurshipMayContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMayContents.kpi2 > '25.33333333' && entrepreneurshipMayContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMayContents.kpi2 >= '31.66666667' && entrepreneurshipMayContents.kpi2 < '38')?'green':(entrepreneurshipMayContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi3 == null)?'grey-2':(entrepreneurshipMayContents.kpi3 >= '0' && entrepreneurshipMayContents.kpi3 <= '15')?'red':(entrepreneurshipMayContents.kpi3 > '15' && entrepreneurshipMayContents.kpi3 <= '20')?'orange':(entrepreneurshipMayContents.kpi3 > '20' && entrepreneurshipMayContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMayContents.kpi3 >= '25' && entrepreneurshipMayContents.kpi3 < '30')?'green':(entrepreneurshipMayContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi4 == null)?'grey-2':(entrepreneurshipMayContents.kpi4 >= '0' && entrepreneurshipMayContents.kpi4 <= '3')?'red':(entrepreneurshipMayContents.kpi4 > '3' && entrepreneurshipMayContents.kpi4 <= '4')?'orange':(entrepreneurshipMayContents.kpi4 > '4' && entrepreneurshipMayContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMayContents.kpi4 >= '5' && entrepreneurshipMayContents.kpi4 < '6')?'green':(entrepreneurshipMayContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >June</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi1 == null)?'grey-2':(entrepreneurshipJunContents.kpi1 >= '0' && entrepreneurshipJunContents.kpi1 <= '13.4')?'red':(entrepreneurshipJunContents.kpi1 > '13.4' && entrepreneurshipJunContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJunContents.kpi1 > '17.86666667' && entrepreneurshipJunContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJunContents.kpi1 >= '22.33333333' && entrepreneurshipJunContents.kpi1 < '26.8')?'green':(entrepreneurshipJunContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi2 == null)?'grey-2':(entrepreneurshipJunContents.kpi2 >= '0' && entrepreneurshipJunContents.kpi2 <= '19')?'red':(entrepreneurshipJunContents.kpi2 > '19' && entrepreneurshipJunContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJunContents.kpi2 > '25.33333333' && entrepreneurshipJunContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJunContents.kpi2 >= '31.66666667' && entrepreneurshipJunContents.kpi2 < '38')?'green':(entrepreneurshipJunContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi3 == null)?'grey-2':(entrepreneurshipJunContents.kpi3 >= '0' && entrepreneurshipJunContents.kpi3 <= '15')?'red':(entrepreneurshipJunContents.kpi3 > '15' && entrepreneurshipJunContents.kpi3 <= '20')?'orange':(entrepreneurshipJunContents.kpi3 > '20' && entrepreneurshipJunContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJunContents.kpi3 >= '25' && entrepreneurshipJunContents.kpi3 < '30')?'green':(entrepreneurshipJunContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi4 == null)?'grey-2':(entrepreneurshipJunContents.kpi4 >= '0' && entrepreneurshipJunContents.kpi4 <= '3')?'red':(entrepreneurshipJunContents.kpi4 > '3' && entrepreneurshipJunContents.kpi4 <= '4')?'orange':(entrepreneurshipJunContents.kpi4 > '4' && entrepreneurshipJunContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJunContents.kpi4 >= '5' && entrepreneurshipJunContents.kpi4 < '6')?'green':(entrepreneurshipJunContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >July</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi1 == null)?'grey-2':(entrepreneurshipJulContents.kpi1 >= '0' && entrepreneurshipJulContents.kpi1 <= '13.4')?'red':(entrepreneurshipJulContents.kpi1 > '13.4' && entrepreneurshipJulContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJulContents.kpi1 > '17.86666667' && entrepreneurshipJulContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJulContents.kpi1 >= '22.33333333' && entrepreneurshipJulContents.kpi1 < '26.8')?'green':(entrepreneurshipJulContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi2 == null)?'grey-2':(entrepreneurshipJulContents.kpi2 >= '0' && entrepreneurshipJulContents.kpi2 <= '19')?'red':(entrepreneurshipJulContents.kpi2 > '19' && entrepreneurshipJulContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJulContents.kpi2 > '25.33333333' && entrepreneurshipJulContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJulContents.kpi2 >= '31.66666667' && entrepreneurshipJulContents.kpi2 < '38')?'green':(entrepreneurshipJulContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi3 == null)?'grey-2':(entrepreneurshipJulContents.kpi3 >= '0' && entrepreneurshipJulContents.kpi3 <= '15')?'red':(entrepreneurshipJulContents.kpi3 > '15' && entrepreneurshipJulContents.kpi3 <= '20')?'orange':(entrepreneurshipJulContents.kpi3 > '20' && entrepreneurshipJulContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJulContents.kpi3 >= '25' && entrepreneurshipJulContents.kpi3 < '30')?'green':(entrepreneurshipJulContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi4 == null)?'grey-2':(entrepreneurshipJulContents.kpi4 >= '0' && entrepreneurshipJulContents.kpi4 <= '3')?'red':(entrepreneurshipJulContents.kpi4 > '3' && entrepreneurshipJulContents.kpi4 <= '4')?'orange':(entrepreneurshipJulContents.kpi4 > '4' && entrepreneurshipJulContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJulContents.kpi4 >= '5' && entrepreneurshipJulContents.kpi4 < '6')?'green':(entrepreneurshipJulContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >August</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi1 == null)?'grey-2':(entrepreneurshipAugContents.kpi1 >= '0' && entrepreneurshipAugContents.kpi1 <= '13.4')?'red':(entrepreneurshipAugContents.kpi1 > '13.4' && entrepreneurshipAugContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAugContents.kpi1 > '17.86666667' && entrepreneurshipAugContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAugContents.kpi1 >= '22.33333333' && entrepreneurshipAugContents.kpi1 < '26.8')?'green':(entrepreneurshipAugContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi2 == null)?'grey-2':(entrepreneurshipAugContents.kpi2 >= '0' && entrepreneurshipAugContents.kpi2 <= '19')?'red':(entrepreneurshipAugContents.kpi2 > '19' && entrepreneurshipAugContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAugContents.kpi2 > '25.33333333' && entrepreneurshipAugContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAugContents.kpi2 >= '31.66666667' && entrepreneurshipAugContents.kpi2 < '38')?'green':(entrepreneurshipAugContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi3 == null)?'grey-2':(entrepreneurshipAugContents.kpi3 >= '0' && entrepreneurshipAugContents.kpi3 <= '15')?'red':(entrepreneurshipAugContents.kpi3 > '15' && entrepreneurshipAugContents.kpi3 <= '20')?'orange':(entrepreneurshipAugContents.kpi3 > '20' && entrepreneurshipAugContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAugContents.kpi3 >= '25' && entrepreneurshipAugContents.kpi3 < '30')?'green':(entrepreneurshipAugContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi4 == null)?'grey-2':(entrepreneurshipAugContents.kpi4 >= '0' && entrepreneurshipAugContents.kpi4 <= '3')?'red':(entrepreneurshipAugContents.kpi4 > '3' && entrepreneurshipAugContents.kpi4 <= '4')?'orange':(entrepreneurshipAugContents.kpi4 > '4' && entrepreneurshipAugContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAugContents.kpi4 >= '5' && entrepreneurshipAugContents.kpi4 < '6')?'green':(entrepreneurshipAugContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >September</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi1 == null)?'grey-2':(entrepreneurshipSepContents.kpi1 >= '0' && entrepreneurshipSepContents.kpi1 <= '13.4')?'red':(entrepreneurshipSepContents.kpi1 > '13.4' && entrepreneurshipSepContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipSepContents.kpi1 > '17.86666667' && entrepreneurshipSepContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipSepContents.kpi1 >= '22.33333333' && entrepreneurshipSepContents.kpi1 < '26.8')?'green':(entrepreneurshipSepContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi2 == null)?'grey-2':(entrepreneurshipSepContents.kpi2 >= '0' && entrepreneurshipSepContents.kpi2 <= '19')?'red':(entrepreneurshipSepContents.kpi2 > '19' && entrepreneurshipSepContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipSepContents.kpi2 > '25.33333333' && entrepreneurshipSepContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipSepContents.kpi2 >= '31.66666667' && entrepreneurshipSepContents.kpi2 < '38')?'green':(entrepreneurshipSepContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi3 == null)?'grey-2':(entrepreneurshipSepContents.kpi3 >= '0' && entrepreneurshipSepContents.kpi3 <= '15')?'red':(entrepreneurshipSepContents.kpi3 > '15' && entrepreneurshipSepContents.kpi3 <= '20')?'orange':(entrepreneurshipSepContents.kpi3 > '20' && entrepreneurshipSepContents.kpi3 < '25')?'yellow-7':(entrepreneurshipSepContents.kpi3 >= '25' && entrepreneurshipSepContents.kpi3 < '30')?'green':(entrepreneurshipSepContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi4 == null)?'grey-2':(entrepreneurshipSepContents.kpi4 >= '0' && entrepreneurshipSepContents.kpi4 <= '3')?'red':(entrepreneurshipSepContents.kpi4 > '3' && entrepreneurshipSepContents.kpi4 <= '4')?'orange':(entrepreneurshipSepContents.kpi4 > '4' && entrepreneurshipSepContents.kpi4 < '5')?'yellow-7':(entrepreneurshipSepContents.kpi4 >= '5' && entrepreneurshipSepContents.kpi4 < '6')?'green':(entrepreneurshipSepContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >October</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi1 == null)?'grey-2':(entrepreneurshipOctContents.kpi1 >= '0' && entrepreneurshipOctContents.kpi1 <= '13.4')?'red':(entrepreneurshipOctContents.kpi1 > '13.4' && entrepreneurshipOctContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipOctContents.kpi1 > '17.86666667' && entrepreneurshipOctContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipOctContents.kpi1 >= '22.33333333' && entrepreneurshipOctContents.kpi1 < '26.8')?'green':(entrepreneurshipOctContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi2 == null)?'grey-2':(entrepreneurshipOctContents.kpi2 >= '0' && entrepreneurshipOctContents.kpi2 <= '19')?'red':(entrepreneurshipOctContents.kpi2 > '19' && entrepreneurshipOctContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipOctContents.kpi2 > '25.33333333' && entrepreneurshipOctContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipOctContents.kpi2 >= '31.66666667' && entrepreneurshipOctContents.kpi2 < '38')?'green':(entrepreneurshipOctContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi3 == null)?'grey-2':(entrepreneurshipOctContents.kpi3 >= '0' && entrepreneurshipOctContents.kpi3 <= '15')?'red':(entrepreneurshipOctContents.kpi3 > '15' && entrepreneurshipOctContents.kpi3 <= '20')?'orange':(entrepreneurshipOctContents.kpi3 > '20' && entrepreneurshipOctContents.kpi3 < '25')?'yellow-7':(entrepreneurshipOctContents.kpi3 >= '25' && entrepreneurshipOctContents.kpi3 < '30')?'green':(entrepreneurshipOctContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi4 == null)?'grey-2':(entrepreneurshipOctContents.kpi4 >= '0' && entrepreneurshipOctContents.kpi4 <= '3')?'red':(entrepreneurshipOctContents.kpi4 > '3' && entrepreneurshipOctContents.kpi4 <= '4')?'orange':(entrepreneurshipOctContents.kpi4 > '4' && entrepreneurshipOctContents.kpi4 < '5')?'yellow-7':(entrepreneurshipOctContents.kpi4 >= '5' && entrepreneurshipOctContents.kpi4 < '6')?'green':(entrepreneurshipOctContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >November</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi1 == null)?'grey-2':(entrepreneurshipNovContents.kpi1 >= '0' && entrepreneurshipNovContents.kpi1 <= '13.4')?'red':(entrepreneurshipNovContents.kpi1 > '13.4' && entrepreneurshipNovContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipNovContents.kpi1 > '17.86666667' && entrepreneurshipNovContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipNovContents.kpi1 >= '22.33333333' && entrepreneurshipNovContents.kpi1 < '26.8')?'green':(entrepreneurshipNovContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi2 == null)?'grey-2':(entrepreneurshipNovContents.kpi2 >= '0' && entrepreneurshipNovContents.kpi2 <= '19')?'red':(entrepreneurshipNovContents.kpi2 > '19' && entrepreneurshipNovContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipNovContents.kpi2 > '25.33333333' && entrepreneurshipNovContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipNovContents.kpi2 >= '31.66666667' && entrepreneurshipNovContents.kpi2 < '38')?'green':(entrepreneurshipNovContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi3 == null)?'grey-2':(entrepreneurshipNovContents.kpi3 >= '0' && entrepreneurshipNovContents.kpi3 <= '15')?'red':(entrepreneurshipNovContents.kpi3 > '15' && entrepreneurshipNovContents.kpi3 <= '20')?'orange':(entrepreneurshipNovContents.kpi3 > '20' && entrepreneurshipNovContents.kpi3 < '25')?'yellow-7':(entrepreneurshipNovContents.kpi3 >= '25' && entrepreneurshipNovContents.kpi3 < '30')?'green':(entrepreneurshipNovContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi4 == null)?'grey-2':(entrepreneurshipNovContents.kpi4 >= '0' && entrepreneurshipNovContents.kpi4 <= '3')?'red':(entrepreneurshipNovContents.kpi4 > '3' && entrepreneurshipNovContents.kpi4 <= '4')?'orange':(entrepreneurshipNovContents.kpi4 > '4' && entrepreneurshipNovContents.kpi4 < '5')?'yellow-7':(entrepreneurshipNovContents.kpi4 >= '5' && entrepreneurshipNovContents.kpi4 < '6')?'green':(entrepreneurshipNovContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >December</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi1 == null)?'grey-2':(entrepreneurshipDecContents.kpi1 >= '0' && entrepreneurshipDecContents.kpi1 <= '13.4')?'red':(entrepreneurshipDecContents.kpi1 > '13.4' && entrepreneurshipDecContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipDecContents.kpi1 > '17.86666667' && entrepreneurshipDecContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipDecContents.kpi1 >= '22.33333333' && entrepreneurshipDecContents.kpi1 < '26.8')?'green':(entrepreneurshipDecContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi2 == null)?'grey-2':(entrepreneurshipDecContents.kpi2 >= '0' && entrepreneurshipDecContents.kpi2 <= '19')?'red':(entrepreneurshipDecContents.kpi2 > '19' && entrepreneurshipDecContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipDecContents.kpi2 > '25.33333333' && entrepreneurshipDecContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipDecContents.kpi2 >= '31.66666667' && entrepreneurshipDecContents.kpi2 < '38')?'green':(entrepreneurshipDecContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi3 == null)?'grey-2':(entrepreneurshipDecContents.kpi3 >= '0' && entrepreneurshipDecContents.kpi3 <= '15')?'red':(entrepreneurshipDecContents.kpi3 > '15' && entrepreneurshipDecContents.kpi3 <= '20')?'orange':(entrepreneurshipDecContents.kpi3 > '20' && entrepreneurshipDecContents.kpi3 < '25')?'yellow-7':(entrepreneurshipDecContents.kpi3 >= '25' && entrepreneurshipDecContents.kpi3 < '30')?'green':(entrepreneurshipDecContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi4 == null)?'grey-2':(entrepreneurshipDecContents.kpi4 >= '0' && entrepreneurshipDecContents.kpi4 <= '3')?'red':(entrepreneurshipDecContents.kpi4 > '3' && entrepreneurshipDecContents.kpi4 <= '4')?'orange':(entrepreneurshipDecContents.kpi4 > '4' && entrepreneurshipDecContents.kpi4 < '5')?'yellow-7':(entrepreneurshipDecContents.kpi4 >= '5' && entrepreneurshipDecContents.kpi4 < '6')?'green':(entrepreneurshipDecContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <!--TABLE DONE-->
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/images/rrcrc-logo_1200x300.png"></q-img>
                      </q-card-section>
                    </q-card>
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Budget Usage (Cumulative)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('gauge')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="gauge" :option="gaugeJulOptions" :resizable="true" style="height:315px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section>
                        <div class="text-h6">Expense Categories (Monthly)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="pie" :option="pieJulOptions" :resizable="true" style="height:465px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
                <div class="row q-col-gutter-sm q-mt-xs">
                  <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Process Chart
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('line')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="line" :option="lineChartOption" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
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
                        <IEcharts :option="barOptions" ref="bar" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>  
            </q-tab-panel>

            <q-tab-panel name="august">
              <div class="text-h4 q-mb-md">{{$route.name}}&ensp;|&ensp;August </div>
                <div class="row q-col-gutter-sm">
                  <!--TABLE-->
                  <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <q-card>
                      <q-list dense class="rounded-borders" >
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >Months</q-item-label>
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 1
                                <q-tooltip># Clients (Unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># Contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi1 == null)?'grey-2':(entrepreneurshipJanContents.kpi1 >= '0' && entrepreneurshipJanContents.kpi1 <= '13.4')?'red':(entrepreneurshipJanContents.kpi1 > '13.4' && entrepreneurshipJanContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJanContents.kpi1 > '17.86666667' && entrepreneurshipJanContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJanContents.kpi1 >= '22.33333333' && entrepreneurshipJanContents.kpi1 < '26.8')?'green':(entrepreneurshipJanContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi2 == null)?'grey-2':(entrepreneurshipJanContents.kpi2 >= '0' && entrepreneurshipJanContents.kpi2 <= '19')?'red':(entrepreneurshipJanContents.kpi2 > '19' && entrepreneurshipJanContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJanContents.kpi2 > '25.33333333' && entrepreneurshipJanContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJanContents.kpi2 >= '31.66666667' && entrepreneurshipJanContents.kpi2 < '38')?'green':(entrepreneurshipJanContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi3 == null)?'grey-2':(entrepreneurshipJanContents.kpi3 >= '0' && entrepreneurshipJanContents.kpi3 <= '15')?'red':(entrepreneurshipJanContents.kpi3 > '15' && entrepreneurshipJanContents.kpi3 <= '20')?'orange':(entrepreneurshipJanContents.kpi3 > '20' && entrepreneurshipJanContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJanContents.kpi3 >= '25' && entrepreneurshipJanContents.kpi3 < '30')?'green':(entrepreneurshipJanContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi4 == null)?'grey-2':(entrepreneurshipJanContents.kpi4 >= '0' && entrepreneurshipJanContents.kpi4 <= '3')?'red':(entrepreneurshipJanContents.kpi4 > '3' && entrepreneurshipJanContents.kpi4 <= '4')?'orange':(entrepreneurshipJanContents.kpi4 > '4' && entrepreneurshipJanContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJanContents.kpi4 >= '5' && entrepreneurshipJanContents.kpi4 < '6')?'green':(entrepreneurshipJanContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>  
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >February</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi1 == null)?'grey-2':(entrepreneurshipFebContents.kpi1 >= '0' && entrepreneurshipFebContents.kpi1 <= '13.4')?'red':(entrepreneurshipFebContents.kpi1 > '13.4' && entrepreneurshipFebContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipFebContents.kpi1 > '17.86666667' && entrepreneurshipFebContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipFebContents.kpi1 >= '22.33333333' && entrepreneurshipFebContents.kpi1 < '26.8')?'green':(entrepreneurshipFebContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi2 == null)?'grey-2':(entrepreneurshipFebContents.kpi2 >= '0' && entrepreneurshipFebContents.kpi2 <= '19')?'red':(entrepreneurshipFebContents.kpi2 > '19' && entrepreneurshipFebContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipFebContents.kpi2 > '25.33333333' && entrepreneurshipFebContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipFebContents.kpi2 >= '31.66666667' && entrepreneurshipFebContents.kpi2 < '38')?'green':(entrepreneurshipFebContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi3 == null)?'grey-2':(entrepreneurshipFebContents.kpi3 >= '0' && entrepreneurshipFebContents.kpi3 <= '15')?'red':(entrepreneurshipFebContents.kpi3 > '15' && entrepreneurshipFebContents.kpi3 <= '20')?'orange':(entrepreneurshipFebContents.kpi3 > '20' && entrepreneurshipFebContents.kpi3 < '25')?'yellow-7':(entrepreneurshipFebContents.kpi3 >= '25' && entrepreneurshipFebContents.kpi3 < '30')?'green':(entrepreneurshipFebContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi4 == null)?'grey-2':(entrepreneurshipFebContents.kpi4 >= '0' && entrepreneurshipFebContents.kpi4 <= '3')?'red':(entrepreneurshipFebContents.kpi4 > '3' && entrepreneurshipFebContents.kpi4 <= '4')?'orange':(entrepreneurshipFebContents.kpi4 > '4' && entrepreneurshipFebContents.kpi4 < '5')?'yellow-7':(entrepreneurshipFebContents.kpi4 >= '5' && entrepreneurshipFebContents.kpi4 < '6')?'green':(entrepreneurshipFebContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >March</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi1 == null)?'grey-2':(entrepreneurshipMarContents.kpi1 >= '0' && entrepreneurshipMarContents.kpi1 <= '13.4')?'red':(entrepreneurshipMarContents.kpi1 > '13.4' && entrepreneurshipMarContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMarContents.kpi1 > '17.86666667' && entrepreneurshipMarContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMarContents.kpi1 >= '22.33333333' && entrepreneurshipMarContents.kpi1 < '26.8')?'green':(entrepreneurshipMarContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi2 == null)?'grey-2':(entrepreneurshipMarContents.kpi2 >= '0' && entrepreneurshipMarContents.kpi2 <= '19')?'red':(entrepreneurshipMarContents.kpi2 > '19' && entrepreneurshipMarContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMarContents.kpi2 > '25.33333333' && entrepreneurshipMarContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMarContents.kpi2 >= '31.66666667' && entrepreneurshipMarContents.kpi2 < '38')?'green':(entrepreneurshipMarContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi3 == null)?'grey-2':(entrepreneurshipMarContents.kpi3 >= '0' && entrepreneurshipMarContents.kpi3 <= '15')?'red':(entrepreneurshipMarContents.kpi3 > '15' && entrepreneurshipMarContents.kpi3 <= '20')?'orange':(entrepreneurshipMarContents.kpi3 > '20' && entrepreneurshipMarContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMarContents.kpi3 >= '25' && entrepreneurshipMarContents.kpi3 < '30')?'green':(entrepreneurshipMarContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi4 == null)?'grey-2':(entrepreneurshipMarContents.kpi4 >= '0' && entrepreneurshipMarContents.kpi4 <= '3')?'red':(entrepreneurshipMarContents.kpi4 > '3' && entrepreneurshipMarContents.kpi4 <= '4')?'orange':(entrepreneurshipMarContents.kpi4 > '4' && entrepreneurshipMarContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMarContents.kpi4 >= '5' && entrepreneurshipMarContents.kpi4 < '6')?'green':(entrepreneurshipMarContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >April</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi1 == null)?'grey-2':(entrepreneurshipAprContents.kpi1 >= '0' && entrepreneurshipAprContents.kpi1 <= '13.4')?'red':(entrepreneurshipAprContents.kpi1 > '13.4' && entrepreneurshipAprContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAprContents.kpi1 > '17.86666667' && entrepreneurshipAprContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAprContents.kpi1 >= '22.33333333' && entrepreneurshipAprContents.kpi1 < '26.8')?'green':(entrepreneurshipAprContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi2 == null)?'grey-2':(entrepreneurshipAprContents.kpi2 >= '0' && entrepreneurshipAprContents.kpi2 <= '19')?'red':(entrepreneurshipAprContents.kpi2 > '19' && entrepreneurshipAprContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAprContents.kpi2 > '25.33333333' && entrepreneurshipAprContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAprContents.kpi2 >= '31.66666667' && entrepreneurshipAprContents.kpi2 < '38')?'green':(entrepreneurshipAprContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi3 == null)?'grey-2':(entrepreneurshipAprContents.kpi3 >= '0' && entrepreneurshipAprContents.kpi3 <= '15')?'red':(entrepreneurshipAprContents.kpi3 > '15' && entrepreneurshipAprContents.kpi3 <= '20')?'orange':(entrepreneurshipAprContents.kpi3 > '20' && entrepreneurshipAprContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAprContents.kpi3 >= '25' && entrepreneurshipAprContents.kpi3 < '30')?'green':(entrepreneurshipAprContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi4 == null)?'grey-2':(entrepreneurshipAprContents.kpi4 >= '0' && entrepreneurshipAprContents.kpi4 <= '3')?'red':(entrepreneurshipAprContents.kpi4 > '3' && entrepreneurshipAprContents.kpi4 <= '4')?'orange':(entrepreneurshipAprContents.kpi4 > '4' && entrepreneurshipAprContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAprContents.kpi4 >= '5' && entrepreneurshipAprContents.kpi4 < '6')?'green':(entrepreneurshipAprContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >May</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi1 == null)?'grey-2':(entrepreneurshipMayContents.kpi1 >= '0' && entrepreneurshipMayContents.kpi1 <= '13.4')?'red':(entrepreneurshipMayContents.kpi1 > '13.4' && entrepreneurshipMayContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMayContents.kpi1 > '17.86666667' && entrepreneurshipMayContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMayContents.kpi1 >= '22.33333333' && entrepreneurshipMayContents.kpi1 < '26.8')?'green':(entrepreneurshipMayContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi2 == null)?'grey-2':(entrepreneurshipMayContents.kpi2 >= '0' && entrepreneurshipMayContents.kpi2 <= '19')?'red':(entrepreneurshipMayContents.kpi2 > '19' && entrepreneurshipMayContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMayContents.kpi2 > '25.33333333' && entrepreneurshipMayContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMayContents.kpi2 >= '31.66666667' && entrepreneurshipMayContents.kpi2 < '38')?'green':(entrepreneurshipMayContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi3 == null)?'grey-2':(entrepreneurshipMayContents.kpi3 >= '0' && entrepreneurshipMayContents.kpi3 <= '15')?'red':(entrepreneurshipMayContents.kpi3 > '15' && entrepreneurshipMayContents.kpi3 <= '20')?'orange':(entrepreneurshipMayContents.kpi3 > '20' && entrepreneurshipMayContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMayContents.kpi3 >= '25' && entrepreneurshipMayContents.kpi3 < '30')?'green':(entrepreneurshipMayContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi4 == null)?'grey-2':(entrepreneurshipMayContents.kpi4 >= '0' && entrepreneurshipMayContents.kpi4 <= '3')?'red':(entrepreneurshipMayContents.kpi4 > '3' && entrepreneurshipMayContents.kpi4 <= '4')?'orange':(entrepreneurshipMayContents.kpi4 > '4' && entrepreneurshipMayContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMayContents.kpi4 >= '5' && entrepreneurshipMayContents.kpi4 < '6')?'green':(entrepreneurshipMayContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >June</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi1 == null)?'grey-2':(entrepreneurshipJunContents.kpi1 >= '0' && entrepreneurshipJunContents.kpi1 <= '13.4')?'red':(entrepreneurshipJunContents.kpi1 > '13.4' && entrepreneurshipJunContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJunContents.kpi1 > '17.86666667' && entrepreneurshipJunContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJunContents.kpi1 >= '22.33333333' && entrepreneurshipJunContents.kpi1 < '26.8')?'green':(entrepreneurshipJunContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi2 == null)?'grey-2':(entrepreneurshipJunContents.kpi2 >= '0' && entrepreneurshipJunContents.kpi2 <= '19')?'red':(entrepreneurshipJunContents.kpi2 > '19' && entrepreneurshipJunContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJunContents.kpi2 > '25.33333333' && entrepreneurshipJunContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJunContents.kpi2 >= '31.66666667' && entrepreneurshipJunContents.kpi2 < '38')?'green':(entrepreneurshipJunContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi3 == null)?'grey-2':(entrepreneurshipJunContents.kpi3 >= '0' && entrepreneurshipJunContents.kpi3 <= '15')?'red':(entrepreneurshipJunContents.kpi3 > '15' && entrepreneurshipJunContents.kpi3 <= '20')?'orange':(entrepreneurshipJunContents.kpi3 > '20' && entrepreneurshipJunContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJunContents.kpi3 >= '25' && entrepreneurshipJunContents.kpi3 < '30')?'green':(entrepreneurshipJunContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi4 == null)?'grey-2':(entrepreneurshipJunContents.kpi4 >= '0' && entrepreneurshipJunContents.kpi4 <= '3')?'red':(entrepreneurshipJunContents.kpi4 > '3' && entrepreneurshipJunContents.kpi4 <= '4')?'orange':(entrepreneurshipJunContents.kpi4 > '4' && entrepreneurshipJunContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJunContents.kpi4 >= '5' && entrepreneurshipJunContents.kpi4 < '6')?'green':(entrepreneurshipJunContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >July</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi1 == null)?'grey-2':(entrepreneurshipJulContents.kpi1 >= '0' && entrepreneurshipJulContents.kpi1 <= '13.4')?'red':(entrepreneurshipJulContents.kpi1 > '13.4' && entrepreneurshipJulContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJulContents.kpi1 > '17.86666667' && entrepreneurshipJulContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJulContents.kpi1 >= '22.33333333' && entrepreneurshipJulContents.kpi1 < '26.8')?'green':(entrepreneurshipJulContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi2 == null)?'grey-2':(entrepreneurshipJulContents.kpi2 >= '0' && entrepreneurshipJulContents.kpi2 <= '19')?'red':(entrepreneurshipJulContents.kpi2 > '19' && entrepreneurshipJulContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJulContents.kpi2 > '25.33333333' && entrepreneurshipJulContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJulContents.kpi2 >= '31.66666667' && entrepreneurshipJulContents.kpi2 < '38')?'green':(entrepreneurshipJulContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi3 == null)?'grey-2':(entrepreneurshipJulContents.kpi3 >= '0' && entrepreneurshipJulContents.kpi3 <= '15')?'red':(entrepreneurshipJulContents.kpi3 > '15' && entrepreneurshipJulContents.kpi3 <= '20')?'orange':(entrepreneurshipJulContents.kpi3 > '20' && entrepreneurshipJulContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJulContents.kpi3 >= '25' && entrepreneurshipJulContents.kpi3 < '30')?'green':(entrepreneurshipJulContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi4 == null)?'grey-2':(entrepreneurshipJulContents.kpi4 >= '0' && entrepreneurshipJulContents.kpi4 <= '3')?'red':(entrepreneurshipJulContents.kpi4 > '3' && entrepreneurshipJulContents.kpi4 <= '4')?'orange':(entrepreneurshipJulContents.kpi4 > '4' && entrepreneurshipJulContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJulContents.kpi4 >= '5' && entrepreneurshipJulContents.kpi4 < '6')?'green':(entrepreneurshipJulContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >August</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi1 == null)?'grey-2':(entrepreneurshipAugContents.kpi1 >= '0' && entrepreneurshipAugContents.kpi1 <= '13.4')?'red':(entrepreneurshipAugContents.kpi1 > '13.4' && entrepreneurshipAugContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAugContents.kpi1 > '17.86666667' && entrepreneurshipAugContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAugContents.kpi1 >= '22.33333333' && entrepreneurshipAugContents.kpi1 < '26.8')?'green':(entrepreneurshipAugContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi2 == null)?'grey-2':(entrepreneurshipAugContents.kpi2 >= '0' && entrepreneurshipAugContents.kpi2 <= '19')?'red':(entrepreneurshipAugContents.kpi2 > '19' && entrepreneurshipAugContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAugContents.kpi2 > '25.33333333' && entrepreneurshipAugContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAugContents.kpi2 >= '31.66666667' && entrepreneurshipAugContents.kpi2 < '38')?'green':(entrepreneurshipAugContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi3 == null)?'grey-2':(entrepreneurshipAugContents.kpi3 >= '0' && entrepreneurshipAugContents.kpi3 <= '15')?'red':(entrepreneurshipAugContents.kpi3 > '15' && entrepreneurshipAugContents.kpi3 <= '20')?'orange':(entrepreneurshipAugContents.kpi3 > '20' && entrepreneurshipAugContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAugContents.kpi3 >= '25' && entrepreneurshipAugContents.kpi3 < '30')?'green':(entrepreneurshipAugContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi4 == null)?'grey-2':(entrepreneurshipAugContents.kpi4 >= '0' && entrepreneurshipAugContents.kpi4 <= '3')?'red':(entrepreneurshipAugContents.kpi4 > '3' && entrepreneurshipAugContents.kpi4 <= '4')?'orange':(entrepreneurshipAugContents.kpi4 > '4' && entrepreneurshipAugContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAugContents.kpi4 >= '5' && entrepreneurshipAugContents.kpi4 < '6')?'green':(entrepreneurshipAugContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >September</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi1 == null)?'grey-2':(entrepreneurshipSepContents.kpi1 >= '0' && entrepreneurshipSepContents.kpi1 <= '13.4')?'red':(entrepreneurshipSepContents.kpi1 > '13.4' && entrepreneurshipSepContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipSepContents.kpi1 > '17.86666667' && entrepreneurshipSepContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipSepContents.kpi1 >= '22.33333333' && entrepreneurshipSepContents.kpi1 < '26.8')?'green':(entrepreneurshipSepContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi2 == null)?'grey-2':(entrepreneurshipSepContents.kpi2 >= '0' && entrepreneurshipSepContents.kpi2 <= '19')?'red':(entrepreneurshipSepContents.kpi2 > '19' && entrepreneurshipSepContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipSepContents.kpi2 > '25.33333333' && entrepreneurshipSepContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipSepContents.kpi2 >= '31.66666667' && entrepreneurshipSepContents.kpi2 < '38')?'green':(entrepreneurshipSepContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi3 == null)?'grey-2':(entrepreneurshipSepContents.kpi3 >= '0' && entrepreneurshipSepContents.kpi3 <= '15')?'red':(entrepreneurshipSepContents.kpi3 > '15' && entrepreneurshipSepContents.kpi3 <= '20')?'orange':(entrepreneurshipSepContents.kpi3 > '20' && entrepreneurshipSepContents.kpi3 < '25')?'yellow-7':(entrepreneurshipSepContents.kpi3 >= '25' && entrepreneurshipSepContents.kpi3 < '30')?'green':(entrepreneurshipSepContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi4 == null)?'grey-2':(entrepreneurshipSepContents.kpi4 >= '0' && entrepreneurshipSepContents.kpi4 <= '3')?'red':(entrepreneurshipSepContents.kpi4 > '3' && entrepreneurshipSepContents.kpi4 <= '4')?'orange':(entrepreneurshipSepContents.kpi4 > '4' && entrepreneurshipSepContents.kpi4 < '5')?'yellow-7':(entrepreneurshipSepContents.kpi4 >= '5' && entrepreneurshipSepContents.kpi4 < '6')?'green':(entrepreneurshipSepContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >October</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi1 == null)?'grey-2':(entrepreneurshipOctContents.kpi1 >= '0' && entrepreneurshipOctContents.kpi1 <= '13.4')?'red':(entrepreneurshipOctContents.kpi1 > '13.4' && entrepreneurshipOctContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipOctContents.kpi1 > '17.86666667' && entrepreneurshipOctContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipOctContents.kpi1 >= '22.33333333' && entrepreneurshipOctContents.kpi1 < '26.8')?'green':(entrepreneurshipOctContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi2 == null)?'grey-2':(entrepreneurshipOctContents.kpi2 >= '0' && entrepreneurshipOctContents.kpi2 <= '19')?'red':(entrepreneurshipOctContents.kpi2 > '19' && entrepreneurshipOctContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipOctContents.kpi2 > '25.33333333' && entrepreneurshipOctContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipOctContents.kpi2 >= '31.66666667' && entrepreneurshipOctContents.kpi2 < '38')?'green':(entrepreneurshipOctContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi3 == null)?'grey-2':(entrepreneurshipOctContents.kpi3 >= '0' && entrepreneurshipOctContents.kpi3 <= '15')?'red':(entrepreneurshipOctContents.kpi3 > '15' && entrepreneurshipOctContents.kpi3 <= '20')?'orange':(entrepreneurshipOctContents.kpi3 > '20' && entrepreneurshipOctContents.kpi3 < '25')?'yellow-7':(entrepreneurshipOctContents.kpi3 >= '25' && entrepreneurshipOctContents.kpi3 < '30')?'green':(entrepreneurshipOctContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi4 == null)?'grey-2':(entrepreneurshipOctContents.kpi4 >= '0' && entrepreneurshipOctContents.kpi4 <= '3')?'red':(entrepreneurshipOctContents.kpi4 > '3' && entrepreneurshipOctContents.kpi4 <= '4')?'orange':(entrepreneurshipOctContents.kpi4 > '4' && entrepreneurshipOctContents.kpi4 < '5')?'yellow-7':(entrepreneurshipOctContents.kpi4 >= '5' && entrepreneurshipOctContents.kpi4 < '6')?'green':(entrepreneurshipOctContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >November</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi1 == null)?'grey-2':(entrepreneurshipNovContents.kpi1 >= '0' && entrepreneurshipNovContents.kpi1 <= '13.4')?'red':(entrepreneurshipNovContents.kpi1 > '13.4' && entrepreneurshipNovContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipNovContents.kpi1 > '17.86666667' && entrepreneurshipNovContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipNovContents.kpi1 >= '22.33333333' && entrepreneurshipNovContents.kpi1 < '26.8')?'green':(entrepreneurshipNovContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi2 == null)?'grey-2':(entrepreneurshipNovContents.kpi2 >= '0' && entrepreneurshipNovContents.kpi2 <= '19')?'red':(entrepreneurshipNovContents.kpi2 > '19' && entrepreneurshipNovContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipNovContents.kpi2 > '25.33333333' && entrepreneurshipNovContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipNovContents.kpi2 >= '31.66666667' && entrepreneurshipNovContents.kpi2 < '38')?'green':(entrepreneurshipNovContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi3 == null)?'grey-2':(entrepreneurshipNovContents.kpi3 >= '0' && entrepreneurshipNovContents.kpi3 <= '15')?'red':(entrepreneurshipNovContents.kpi3 > '15' && entrepreneurshipNovContents.kpi3 <= '20')?'orange':(entrepreneurshipNovContents.kpi3 > '20' && entrepreneurshipNovContents.kpi3 < '25')?'yellow-7':(entrepreneurshipNovContents.kpi3 >= '25' && entrepreneurshipNovContents.kpi3 < '30')?'green':(entrepreneurshipNovContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi4 == null)?'grey-2':(entrepreneurshipNovContents.kpi4 >= '0' && entrepreneurshipNovContents.kpi4 <= '3')?'red':(entrepreneurshipNovContents.kpi4 > '3' && entrepreneurshipNovContents.kpi4 <= '4')?'orange':(entrepreneurshipNovContents.kpi4 > '4' && entrepreneurshipNovContents.kpi4 < '5')?'yellow-7':(entrepreneurshipNovContents.kpi4 >= '5' && entrepreneurshipNovContents.kpi4 < '6')?'green':(entrepreneurshipNovContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >December</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi1 == null)?'grey-2':(entrepreneurshipDecContents.kpi1 >= '0' && entrepreneurshipDecContents.kpi1 <= '13.4')?'red':(entrepreneurshipDecContents.kpi1 > '13.4' && entrepreneurshipDecContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipDecContents.kpi1 > '17.86666667' && entrepreneurshipDecContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipDecContents.kpi1 >= '22.33333333' && entrepreneurshipDecContents.kpi1 < '26.8')?'green':(entrepreneurshipDecContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi2 == null)?'grey-2':(entrepreneurshipDecContents.kpi2 >= '0' && entrepreneurshipDecContents.kpi2 <= '19')?'red':(entrepreneurshipDecContents.kpi2 > '19' && entrepreneurshipDecContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipDecContents.kpi2 > '25.33333333' && entrepreneurshipDecContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipDecContents.kpi2 >= '31.66666667' && entrepreneurshipDecContents.kpi2 < '38')?'green':(entrepreneurshipDecContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi3 == null)?'grey-2':(entrepreneurshipDecContents.kpi3 >= '0' && entrepreneurshipDecContents.kpi3 <= '15')?'red':(entrepreneurshipDecContents.kpi3 > '15' && entrepreneurshipDecContents.kpi3 <= '20')?'orange':(entrepreneurshipDecContents.kpi3 > '20' && entrepreneurshipDecContents.kpi3 < '25')?'yellow-7':(entrepreneurshipDecContents.kpi3 >= '25' && entrepreneurshipDecContents.kpi3 < '30')?'green':(entrepreneurshipDecContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi4 == null)?'grey-2':(entrepreneurshipDecContents.kpi4 >= '0' && entrepreneurshipDecContents.kpi4 <= '3')?'red':(entrepreneurshipDecContents.kpi4 > '3' && entrepreneurshipDecContents.kpi4 <= '4')?'orange':(entrepreneurshipDecContents.kpi4 > '4' && entrepreneurshipDecContents.kpi4 < '5')?'yellow-7':(entrepreneurshipDecContents.kpi4 >= '5' && entrepreneurshipDecContents.kpi4 < '6')?'green':(entrepreneurshipDecContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <!--TABLE DONE-->
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/images/rrcrc-logo_1200x300.png"></q-img>
                      </q-card-section>
                    </q-card>
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Budget Usage (Cumulative)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('gauge')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="gauge" :option="gaugeAugOptions" :resizable="true" style="height:315px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section>
                        <div class="text-h6">Expense Categories (Monthly)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="pie" :option="pieAugOptions" :resizable="true" style="height:465px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
                <div class="row q-col-gutter-sm q-mt-xs">
                  <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Process Chart
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('line')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="line" :option="lineChartOption" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
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
                        <IEcharts :option="barOptions" ref="bar" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>  
            </q-tab-panel>

            <q-tab-panel name="september">
              <div class="text-h4 q-mb-md">{{$route.name}}&ensp;|&ensp;September </div>
                <div class="row q-col-gutter-sm">
                  <!--TABLE-->
                  <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <q-card>
                      <q-list dense class="rounded-borders" >
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >Months</q-item-label>
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 1
                                <q-tooltip># Clients (Unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># Contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi1 == null)?'grey-2':(entrepreneurshipJanContents.kpi1 >= '0' && entrepreneurshipJanContents.kpi1 <= '13.4')?'red':(entrepreneurshipJanContents.kpi1 > '13.4' && entrepreneurshipJanContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJanContents.kpi1 > '17.86666667' && entrepreneurshipJanContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJanContents.kpi1 >= '22.33333333' && entrepreneurshipJanContents.kpi1 < '26.8')?'green':(entrepreneurshipJanContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi2 == null)?'grey-2':(entrepreneurshipJanContents.kpi2 >= '0' && entrepreneurshipJanContents.kpi2 <= '19')?'red':(entrepreneurshipJanContents.kpi2 > '19' && entrepreneurshipJanContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJanContents.kpi2 > '25.33333333' && entrepreneurshipJanContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJanContents.kpi2 >= '31.66666667' && entrepreneurshipJanContents.kpi2 < '38')?'green':(entrepreneurshipJanContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi3 == null)?'grey-2':(entrepreneurshipJanContents.kpi3 >= '0' && entrepreneurshipJanContents.kpi3 <= '15')?'red':(entrepreneurshipJanContents.kpi3 > '15' && entrepreneurshipJanContents.kpi3 <= '20')?'orange':(entrepreneurshipJanContents.kpi3 > '20' && entrepreneurshipJanContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJanContents.kpi3 >= '25' && entrepreneurshipJanContents.kpi3 < '30')?'green':(entrepreneurshipJanContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi4 == null)?'grey-2':(entrepreneurshipJanContents.kpi4 >= '0' && entrepreneurshipJanContents.kpi4 <= '3')?'red':(entrepreneurshipJanContents.kpi4 > '3' && entrepreneurshipJanContents.kpi4 <= '4')?'orange':(entrepreneurshipJanContents.kpi4 > '4' && entrepreneurshipJanContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJanContents.kpi4 >= '5' && entrepreneurshipJanContents.kpi4 < '6')?'green':(entrepreneurshipJanContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>  
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >February</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi1 == null)?'grey-2':(entrepreneurshipFebContents.kpi1 >= '0' && entrepreneurshipFebContents.kpi1 <= '13.4')?'red':(entrepreneurshipFebContents.kpi1 > '13.4' && entrepreneurshipFebContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipFebContents.kpi1 > '17.86666667' && entrepreneurshipFebContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipFebContents.kpi1 >= '22.33333333' && entrepreneurshipFebContents.kpi1 < '26.8')?'green':(entrepreneurshipFebContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi2 == null)?'grey-2':(entrepreneurshipFebContents.kpi2 >= '0' && entrepreneurshipFebContents.kpi2 <= '19')?'red':(entrepreneurshipFebContents.kpi2 > '19' && entrepreneurshipFebContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipFebContents.kpi2 > '25.33333333' && entrepreneurshipFebContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipFebContents.kpi2 >= '31.66666667' && entrepreneurshipFebContents.kpi2 < '38')?'green':(entrepreneurshipFebContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi3 == null)?'grey-2':(entrepreneurshipFebContents.kpi3 >= '0' && entrepreneurshipFebContents.kpi3 <= '15')?'red':(entrepreneurshipFebContents.kpi3 > '15' && entrepreneurshipFebContents.kpi3 <= '20')?'orange':(entrepreneurshipFebContents.kpi3 > '20' && entrepreneurshipFebContents.kpi3 < '25')?'yellow-7':(entrepreneurshipFebContents.kpi3 >= '25' && entrepreneurshipFebContents.kpi3 < '30')?'green':(entrepreneurshipFebContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi4 == null)?'grey-2':(entrepreneurshipFebContents.kpi4 >= '0' && entrepreneurshipFebContents.kpi4 <= '3')?'red':(entrepreneurshipFebContents.kpi4 > '3' && entrepreneurshipFebContents.kpi4 <= '4')?'orange':(entrepreneurshipFebContents.kpi4 > '4' && entrepreneurshipFebContents.kpi4 < '5')?'yellow-7':(entrepreneurshipFebContents.kpi4 >= '5' && entrepreneurshipFebContents.kpi4 < '6')?'green':(entrepreneurshipFebContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >March</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi1 == null)?'grey-2':(entrepreneurshipMarContents.kpi1 >= '0' && entrepreneurshipMarContents.kpi1 <= '13.4')?'red':(entrepreneurshipMarContents.kpi1 > '13.4' && entrepreneurshipMarContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMarContents.kpi1 > '17.86666667' && entrepreneurshipMarContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMarContents.kpi1 >= '22.33333333' && entrepreneurshipMarContents.kpi1 < '26.8')?'green':(entrepreneurshipMarContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi2 == null)?'grey-2':(entrepreneurshipMarContents.kpi2 >= '0' && entrepreneurshipMarContents.kpi2 <= '19')?'red':(entrepreneurshipMarContents.kpi2 > '19' && entrepreneurshipMarContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMarContents.kpi2 > '25.33333333' && entrepreneurshipMarContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMarContents.kpi2 >= '31.66666667' && entrepreneurshipMarContents.kpi2 < '38')?'green':(entrepreneurshipMarContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi3 == null)?'grey-2':(entrepreneurshipMarContents.kpi3 >= '0' && entrepreneurshipMarContents.kpi3 <= '15')?'red':(entrepreneurshipMarContents.kpi3 > '15' && entrepreneurshipMarContents.kpi3 <= '20')?'orange':(entrepreneurshipMarContents.kpi3 > '20' && entrepreneurshipMarContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMarContents.kpi3 >= '25' && entrepreneurshipMarContents.kpi3 < '30')?'green':(entrepreneurshipMarContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi4 == null)?'grey-2':(entrepreneurshipMarContents.kpi4 >= '0' && entrepreneurshipMarContents.kpi4 <= '3')?'red':(entrepreneurshipMarContents.kpi4 > '3' && entrepreneurshipMarContents.kpi4 <= '4')?'orange':(entrepreneurshipMarContents.kpi4 > '4' && entrepreneurshipMarContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMarContents.kpi4 >= '5' && entrepreneurshipMarContents.kpi4 < '6')?'green':(entrepreneurshipMarContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >April</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi1 == null)?'grey-2':(entrepreneurshipAprContents.kpi1 >= '0' && entrepreneurshipAprContents.kpi1 <= '13.4')?'red':(entrepreneurshipAprContents.kpi1 > '13.4' && entrepreneurshipAprContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAprContents.kpi1 > '17.86666667' && entrepreneurshipAprContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAprContents.kpi1 >= '22.33333333' && entrepreneurshipAprContents.kpi1 < '26.8')?'green':(entrepreneurshipAprContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi2 == null)?'grey-2':(entrepreneurshipAprContents.kpi2 >= '0' && entrepreneurshipAprContents.kpi2 <= '19')?'red':(entrepreneurshipAprContents.kpi2 > '19' && entrepreneurshipAprContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAprContents.kpi2 > '25.33333333' && entrepreneurshipAprContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAprContents.kpi2 >= '31.66666667' && entrepreneurshipAprContents.kpi2 < '38')?'green':(entrepreneurshipAprContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi3 == null)?'grey-2':(entrepreneurshipAprContents.kpi3 >= '0' && entrepreneurshipAprContents.kpi3 <= '15')?'red':(entrepreneurshipAprContents.kpi3 > '15' && entrepreneurshipAprContents.kpi3 <= '20')?'orange':(entrepreneurshipAprContents.kpi3 > '20' && entrepreneurshipAprContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAprContents.kpi3 >= '25' && entrepreneurshipAprContents.kpi3 < '30')?'green':(entrepreneurshipAprContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi4 == null)?'grey-2':(entrepreneurshipAprContents.kpi4 >= '0' && entrepreneurshipAprContents.kpi4 <= '3')?'red':(entrepreneurshipAprContents.kpi4 > '3' && entrepreneurshipAprContents.kpi4 <= '4')?'orange':(entrepreneurshipAprContents.kpi4 > '4' && entrepreneurshipAprContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAprContents.kpi4 >= '5' && entrepreneurshipAprContents.kpi4 < '6')?'green':(entrepreneurshipAprContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >May</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi1 == null)?'grey-2':(entrepreneurshipMayContents.kpi1 >= '0' && entrepreneurshipMayContents.kpi1 <= '13.4')?'red':(entrepreneurshipMayContents.kpi1 > '13.4' && entrepreneurshipMayContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMayContents.kpi1 > '17.86666667' && entrepreneurshipMayContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMayContents.kpi1 >= '22.33333333' && entrepreneurshipMayContents.kpi1 < '26.8')?'green':(entrepreneurshipMayContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi2 == null)?'grey-2':(entrepreneurshipMayContents.kpi2 >= '0' && entrepreneurshipMayContents.kpi2 <= '19')?'red':(entrepreneurshipMayContents.kpi2 > '19' && entrepreneurshipMayContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMayContents.kpi2 > '25.33333333' && entrepreneurshipMayContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMayContents.kpi2 >= '31.66666667' && entrepreneurshipMayContents.kpi2 < '38')?'green':(entrepreneurshipMayContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi3 == null)?'grey-2':(entrepreneurshipMayContents.kpi3 >= '0' && entrepreneurshipMayContents.kpi3 <= '15')?'red':(entrepreneurshipMayContents.kpi3 > '15' && entrepreneurshipMayContents.kpi3 <= '20')?'orange':(entrepreneurshipMayContents.kpi3 > '20' && entrepreneurshipMayContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMayContents.kpi3 >= '25' && entrepreneurshipMayContents.kpi3 < '30')?'green':(entrepreneurshipMayContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi4 == null)?'grey-2':(entrepreneurshipMayContents.kpi4 >= '0' && entrepreneurshipMayContents.kpi4 <= '3')?'red':(entrepreneurshipMayContents.kpi4 > '3' && entrepreneurshipMayContents.kpi4 <= '4')?'orange':(entrepreneurshipMayContents.kpi4 > '4' && entrepreneurshipMayContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMayContents.kpi4 >= '5' && entrepreneurshipMayContents.kpi4 < '6')?'green':(entrepreneurshipMayContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >June</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi1 == null)?'grey-2':(entrepreneurshipJunContents.kpi1 >= '0' && entrepreneurshipJunContents.kpi1 <= '13.4')?'red':(entrepreneurshipJunContents.kpi1 > '13.4' && entrepreneurshipJunContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJunContents.kpi1 > '17.86666667' && entrepreneurshipJunContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJunContents.kpi1 >= '22.33333333' && entrepreneurshipJunContents.kpi1 < '26.8')?'green':(entrepreneurshipJunContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi2 == null)?'grey-2':(entrepreneurshipJunContents.kpi2 >= '0' && entrepreneurshipJunContents.kpi2 <= '19')?'red':(entrepreneurshipJunContents.kpi2 > '19' && entrepreneurshipJunContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJunContents.kpi2 > '25.33333333' && entrepreneurshipJunContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJunContents.kpi2 >= '31.66666667' && entrepreneurshipJunContents.kpi2 < '38')?'green':(entrepreneurshipJunContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi3 == null)?'grey-2':(entrepreneurshipJunContents.kpi3 >= '0' && entrepreneurshipJunContents.kpi3 <= '15')?'red':(entrepreneurshipJunContents.kpi3 > '15' && entrepreneurshipJunContents.kpi3 <= '20')?'orange':(entrepreneurshipJunContents.kpi3 > '20' && entrepreneurshipJunContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJunContents.kpi3 >= '25' && entrepreneurshipJunContents.kpi3 < '30')?'green':(entrepreneurshipJunContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi4 == null)?'grey-2':(entrepreneurshipJunContents.kpi4 >= '0' && entrepreneurshipJunContents.kpi4 <= '3')?'red':(entrepreneurshipJunContents.kpi4 > '3' && entrepreneurshipJunContents.kpi4 <= '4')?'orange':(entrepreneurshipJunContents.kpi4 > '4' && entrepreneurshipJunContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJunContents.kpi4 >= '5' && entrepreneurshipJunContents.kpi4 < '6')?'green':(entrepreneurshipJunContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >July</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi1 == null)?'grey-2':(entrepreneurshipJulContents.kpi1 >= '0' && entrepreneurshipJulContents.kpi1 <= '13.4')?'red':(entrepreneurshipJulContents.kpi1 > '13.4' && entrepreneurshipJulContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJulContents.kpi1 > '17.86666667' && entrepreneurshipJulContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJulContents.kpi1 >= '22.33333333' && entrepreneurshipJulContents.kpi1 < '26.8')?'green':(entrepreneurshipJulContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi2 == null)?'grey-2':(entrepreneurshipJulContents.kpi2 >= '0' && entrepreneurshipJulContents.kpi2 <= '19')?'red':(entrepreneurshipJulContents.kpi2 > '19' && entrepreneurshipJulContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJulContents.kpi2 > '25.33333333' && entrepreneurshipJulContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJulContents.kpi2 >= '31.66666667' && entrepreneurshipJulContents.kpi2 < '38')?'green':(entrepreneurshipJulContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi3 == null)?'grey-2':(entrepreneurshipJulContents.kpi3 >= '0' && entrepreneurshipJulContents.kpi3 <= '15')?'red':(entrepreneurshipJulContents.kpi3 > '15' && entrepreneurshipJulContents.kpi3 <= '20')?'orange':(entrepreneurshipJulContents.kpi3 > '20' && entrepreneurshipJulContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJulContents.kpi3 >= '25' && entrepreneurshipJulContents.kpi3 < '30')?'green':(entrepreneurshipJulContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi4 == null)?'grey-2':(entrepreneurshipJulContents.kpi4 >= '0' && entrepreneurshipJulContents.kpi4 <= '3')?'red':(entrepreneurshipJulContents.kpi4 > '3' && entrepreneurshipJulContents.kpi4 <= '4')?'orange':(entrepreneurshipJulContents.kpi4 > '4' && entrepreneurshipJulContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJulContents.kpi4 >= '5' && entrepreneurshipJulContents.kpi4 < '6')?'green':(entrepreneurshipJulContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >August</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi1 == null)?'grey-2':(entrepreneurshipAugContents.kpi1 >= '0' && entrepreneurshipAugContents.kpi1 <= '13.4')?'red':(entrepreneurshipAugContents.kpi1 > '13.4' && entrepreneurshipAugContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAugContents.kpi1 > '17.86666667' && entrepreneurshipAugContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAugContents.kpi1 >= '22.33333333' && entrepreneurshipAugContents.kpi1 < '26.8')?'green':(entrepreneurshipAugContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi2 == null)?'grey-2':(entrepreneurshipAugContents.kpi2 >= '0' && entrepreneurshipAugContents.kpi2 <= '19')?'red':(entrepreneurshipAugContents.kpi2 > '19' && entrepreneurshipAugContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAugContents.kpi2 > '25.33333333' && entrepreneurshipAugContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAugContents.kpi2 >= '31.66666667' && entrepreneurshipAugContents.kpi2 < '38')?'green':(entrepreneurshipAugContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi3 == null)?'grey-2':(entrepreneurshipAugContents.kpi3 >= '0' && entrepreneurshipAugContents.kpi3 <= '15')?'red':(entrepreneurshipAugContents.kpi3 > '15' && entrepreneurshipAugContents.kpi3 <= '20')?'orange':(entrepreneurshipAugContents.kpi3 > '20' && entrepreneurshipAugContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAugContents.kpi3 >= '25' && entrepreneurshipAugContents.kpi3 < '30')?'green':(entrepreneurshipAugContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi4 == null)?'grey-2':(entrepreneurshipAugContents.kpi4 >= '0' && entrepreneurshipAugContents.kpi4 <= '3')?'red':(entrepreneurshipAugContents.kpi4 > '3' && entrepreneurshipAugContents.kpi4 <= '4')?'orange':(entrepreneurshipAugContents.kpi4 > '4' && entrepreneurshipAugContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAugContents.kpi4 >= '5' && entrepreneurshipAugContents.kpi4 < '6')?'green':(entrepreneurshipAugContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >September</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi1 == null)?'grey-2':(entrepreneurshipSepContents.kpi1 >= '0' && entrepreneurshipSepContents.kpi1 <= '13.4')?'red':(entrepreneurshipSepContents.kpi1 > '13.4' && entrepreneurshipSepContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipSepContents.kpi1 > '17.86666667' && entrepreneurshipSepContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipSepContents.kpi1 >= '22.33333333' && entrepreneurshipSepContents.kpi1 < '26.8')?'green':(entrepreneurshipSepContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi2 == null)?'grey-2':(entrepreneurshipSepContents.kpi2 >= '0' && entrepreneurshipSepContents.kpi2 <= '19')?'red':(entrepreneurshipSepContents.kpi2 > '19' && entrepreneurshipSepContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipSepContents.kpi2 > '25.33333333' && entrepreneurshipSepContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipSepContents.kpi2 >= '31.66666667' && entrepreneurshipSepContents.kpi2 < '38')?'green':(entrepreneurshipSepContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi3 == null)?'grey-2':(entrepreneurshipSepContents.kpi3 >= '0' && entrepreneurshipSepContents.kpi3 <= '15')?'red':(entrepreneurshipSepContents.kpi3 > '15' && entrepreneurshipSepContents.kpi3 <= '20')?'orange':(entrepreneurshipSepContents.kpi3 > '20' && entrepreneurshipSepContents.kpi3 < '25')?'yellow-7':(entrepreneurshipSepContents.kpi3 >= '25' && entrepreneurshipSepContents.kpi3 < '30')?'green':(entrepreneurshipSepContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi4 == null)?'grey-2':(entrepreneurshipSepContents.kpi4 >= '0' && entrepreneurshipSepContents.kpi4 <= '3')?'red':(entrepreneurshipSepContents.kpi4 > '3' && entrepreneurshipSepContents.kpi4 <= '4')?'orange':(entrepreneurshipSepContents.kpi4 > '4' && entrepreneurshipSepContents.kpi4 < '5')?'yellow-7':(entrepreneurshipSepContents.kpi4 >= '5' && entrepreneurshipSepContents.kpi4 < '6')?'green':(entrepreneurshipSepContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >October</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi1 == null)?'grey-2':(entrepreneurshipOctContents.kpi1 >= '0' && entrepreneurshipOctContents.kpi1 <= '13.4')?'red':(entrepreneurshipOctContents.kpi1 > '13.4' && entrepreneurshipOctContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipOctContents.kpi1 > '17.86666667' && entrepreneurshipOctContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipOctContents.kpi1 >= '22.33333333' && entrepreneurshipOctContents.kpi1 < '26.8')?'green':(entrepreneurshipOctContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi2 == null)?'grey-2':(entrepreneurshipOctContents.kpi2 >= '0' && entrepreneurshipOctContents.kpi2 <= '19')?'red':(entrepreneurshipOctContents.kpi2 > '19' && entrepreneurshipOctContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipOctContents.kpi2 > '25.33333333' && entrepreneurshipOctContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipOctContents.kpi2 >= '31.66666667' && entrepreneurshipOctContents.kpi2 < '38')?'green':(entrepreneurshipOctContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi3 == null)?'grey-2':(entrepreneurshipOctContents.kpi3 >= '0' && entrepreneurshipOctContents.kpi3 <= '15')?'red':(entrepreneurshipOctContents.kpi3 > '15' && entrepreneurshipOctContents.kpi3 <= '20')?'orange':(entrepreneurshipOctContents.kpi3 > '20' && entrepreneurshipOctContents.kpi3 < '25')?'yellow-7':(entrepreneurshipOctContents.kpi3 >= '25' && entrepreneurshipOctContents.kpi3 < '30')?'green':(entrepreneurshipOctContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi4 == null)?'grey-2':(entrepreneurshipOctContents.kpi4 >= '0' && entrepreneurshipOctContents.kpi4 <= '3')?'red':(entrepreneurshipOctContents.kpi4 > '3' && entrepreneurshipOctContents.kpi4 <= '4')?'orange':(entrepreneurshipOctContents.kpi4 > '4' && entrepreneurshipOctContents.kpi4 < '5')?'yellow-7':(entrepreneurshipOctContents.kpi4 >= '5' && entrepreneurshipOctContents.kpi4 < '6')?'green':(entrepreneurshipOctContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >November</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi1 == null)?'grey-2':(entrepreneurshipNovContents.kpi1 >= '0' && entrepreneurshipNovContents.kpi1 <= '13.4')?'red':(entrepreneurshipNovContents.kpi1 > '13.4' && entrepreneurshipNovContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipNovContents.kpi1 > '17.86666667' && entrepreneurshipNovContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipNovContents.kpi1 >= '22.33333333' && entrepreneurshipNovContents.kpi1 < '26.8')?'green':(entrepreneurshipNovContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi2 == null)?'grey-2':(entrepreneurshipNovContents.kpi2 >= '0' && entrepreneurshipNovContents.kpi2 <= '19')?'red':(entrepreneurshipNovContents.kpi2 > '19' && entrepreneurshipNovContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipNovContents.kpi2 > '25.33333333' && entrepreneurshipNovContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipNovContents.kpi2 >= '31.66666667' && entrepreneurshipNovContents.kpi2 < '38')?'green':(entrepreneurshipNovContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi3 == null)?'grey-2':(entrepreneurshipNovContents.kpi3 >= '0' && entrepreneurshipNovContents.kpi3 <= '15')?'red':(entrepreneurshipNovContents.kpi3 > '15' && entrepreneurshipNovContents.kpi3 <= '20')?'orange':(entrepreneurshipNovContents.kpi3 > '20' && entrepreneurshipNovContents.kpi3 < '25')?'yellow-7':(entrepreneurshipNovContents.kpi3 >= '25' && entrepreneurshipNovContents.kpi3 < '30')?'green':(entrepreneurshipNovContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi4 == null)?'grey-2':(entrepreneurshipNovContents.kpi4 >= '0' && entrepreneurshipNovContents.kpi4 <= '3')?'red':(entrepreneurshipNovContents.kpi4 > '3' && entrepreneurshipNovContents.kpi4 <= '4')?'orange':(entrepreneurshipNovContents.kpi4 > '4' && entrepreneurshipNovContents.kpi4 < '5')?'yellow-7':(entrepreneurshipNovContents.kpi4 >= '5' && entrepreneurshipNovContents.kpi4 < '6')?'green':(entrepreneurshipNovContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >December</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi1 == null)?'grey-2':(entrepreneurshipDecContents.kpi1 >= '0' && entrepreneurshipDecContents.kpi1 <= '13.4')?'red':(entrepreneurshipDecContents.kpi1 > '13.4' && entrepreneurshipDecContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipDecContents.kpi1 > '17.86666667' && entrepreneurshipDecContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipDecContents.kpi1 >= '22.33333333' && entrepreneurshipDecContents.kpi1 < '26.8')?'green':(entrepreneurshipDecContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi2 == null)?'grey-2':(entrepreneurshipDecContents.kpi2 >= '0' && entrepreneurshipDecContents.kpi2 <= '19')?'red':(entrepreneurshipDecContents.kpi2 > '19' && entrepreneurshipDecContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipDecContents.kpi2 > '25.33333333' && entrepreneurshipDecContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipDecContents.kpi2 >= '31.66666667' && entrepreneurshipDecContents.kpi2 < '38')?'green':(entrepreneurshipDecContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi3 == null)?'grey-2':(entrepreneurshipDecContents.kpi3 >= '0' && entrepreneurshipDecContents.kpi3 <= '15')?'red':(entrepreneurshipDecContents.kpi3 > '15' && entrepreneurshipDecContents.kpi3 <= '20')?'orange':(entrepreneurshipDecContents.kpi3 > '20' && entrepreneurshipDecContents.kpi3 < '25')?'yellow-7':(entrepreneurshipDecContents.kpi3 >= '25' && entrepreneurshipDecContents.kpi3 < '30')?'green':(entrepreneurshipDecContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi4 == null)?'grey-2':(entrepreneurshipDecContents.kpi4 >= '0' && entrepreneurshipDecContents.kpi4 <= '3')?'red':(entrepreneurshipDecContents.kpi4 > '3' && entrepreneurshipDecContents.kpi4 <= '4')?'orange':(entrepreneurshipDecContents.kpi4 > '4' && entrepreneurshipDecContents.kpi4 < '5')?'yellow-7':(entrepreneurshipDecContents.kpi4 >= '5' && entrepreneurshipDecContents.kpi4 < '6')?'green':(entrepreneurshipDecContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <!--TABLE DONE-->
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/images/rrcrc-logo_1200x300.png"></q-img>
                      </q-card-section>
                    </q-card>
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Budget Usage (Cumulative)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('gauge')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="gauge" :option="gaugeSepOptions" :resizable="true" style="height:315px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section>
                        <div class="text-h6">Expense Categories (Monthly)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="pie" :option="pieSepOptions" :resizable="true" style="height:465px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
                <div class="row q-col-gutter-sm q-mt-xs">
                  <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Process Chart
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('line')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="line" :option="lineChartOption" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
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
                        <IEcharts :option="barOptions" ref="bar" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>  
            </q-tab-panel>

            <q-tab-panel name="october">
              <div class="text-h4 q-mb-md">{{$route.name}}&ensp;|&ensp;October </div>
                <div class="row q-col-gutter-sm">
                  <!--TABLE-->
                  <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <q-card>
                      <q-list dense class="rounded-borders" >
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >Months</q-item-label>
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 1
                                <q-tooltip># Clients (Unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># Contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi1 == null)?'grey-2':(entrepreneurshipJanContents.kpi1 >= '0' && entrepreneurshipJanContents.kpi1 <= '13.4')?'red':(entrepreneurshipJanContents.kpi1 > '13.4' && entrepreneurshipJanContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJanContents.kpi1 > '17.86666667' && entrepreneurshipJanContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJanContents.kpi1 >= '22.33333333' && entrepreneurshipJanContents.kpi1 < '26.8')?'green':(entrepreneurshipJanContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi2 == null)?'grey-2':(entrepreneurshipJanContents.kpi2 >= '0' && entrepreneurshipJanContents.kpi2 <= '19')?'red':(entrepreneurshipJanContents.kpi2 > '19' && entrepreneurshipJanContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJanContents.kpi2 > '25.33333333' && entrepreneurshipJanContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJanContents.kpi2 >= '31.66666667' && entrepreneurshipJanContents.kpi2 < '38')?'green':(entrepreneurshipJanContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi3 == null)?'grey-2':(entrepreneurshipJanContents.kpi3 >= '0' && entrepreneurshipJanContents.kpi3 <= '15')?'red':(entrepreneurshipJanContents.kpi3 > '15' && entrepreneurshipJanContents.kpi3 <= '20')?'orange':(entrepreneurshipJanContents.kpi3 > '20' && entrepreneurshipJanContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJanContents.kpi3 >= '25' && entrepreneurshipJanContents.kpi3 < '30')?'green':(entrepreneurshipJanContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi4 == null)?'grey-2':(entrepreneurshipJanContents.kpi4 >= '0' && entrepreneurshipJanContents.kpi4 <= '3')?'red':(entrepreneurshipJanContents.kpi4 > '3' && entrepreneurshipJanContents.kpi4 <= '4')?'orange':(entrepreneurshipJanContents.kpi4 > '4' && entrepreneurshipJanContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJanContents.kpi4 >= '5' && entrepreneurshipJanContents.kpi4 < '6')?'green':(entrepreneurshipJanContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>  
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >February</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi1 == null)?'grey-2':(entrepreneurshipFebContents.kpi1 >= '0' && entrepreneurshipFebContents.kpi1 <= '13.4')?'red':(entrepreneurshipFebContents.kpi1 > '13.4' && entrepreneurshipFebContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipFebContents.kpi1 > '17.86666667' && entrepreneurshipFebContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipFebContents.kpi1 >= '22.33333333' && entrepreneurshipFebContents.kpi1 < '26.8')?'green':(entrepreneurshipFebContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi2 == null)?'grey-2':(entrepreneurshipFebContents.kpi2 >= '0' && entrepreneurshipFebContents.kpi2 <= '19')?'red':(entrepreneurshipFebContents.kpi2 > '19' && entrepreneurshipFebContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipFebContents.kpi2 > '25.33333333' && entrepreneurshipFebContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipFebContents.kpi2 >= '31.66666667' && entrepreneurshipFebContents.kpi2 < '38')?'green':(entrepreneurshipFebContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi3 == null)?'grey-2':(entrepreneurshipFebContents.kpi3 >= '0' && entrepreneurshipFebContents.kpi3 <= '15')?'red':(entrepreneurshipFebContents.kpi3 > '15' && entrepreneurshipFebContents.kpi3 <= '20')?'orange':(entrepreneurshipFebContents.kpi3 > '20' && entrepreneurshipFebContents.kpi3 < '25')?'yellow-7':(entrepreneurshipFebContents.kpi3 >= '25' && entrepreneurshipFebContents.kpi3 < '30')?'green':(entrepreneurshipFebContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi4 == null)?'grey-2':(entrepreneurshipFebContents.kpi4 >= '0' && entrepreneurshipFebContents.kpi4 <= '3')?'red':(entrepreneurshipFebContents.kpi4 > '3' && entrepreneurshipFebContents.kpi4 <= '4')?'orange':(entrepreneurshipFebContents.kpi4 > '4' && entrepreneurshipFebContents.kpi4 < '5')?'yellow-7':(entrepreneurshipFebContents.kpi4 >= '5' && entrepreneurshipFebContents.kpi4 < '6')?'green':(entrepreneurshipFebContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >March</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi1 == null)?'grey-2':(entrepreneurshipMarContents.kpi1 >= '0' && entrepreneurshipMarContents.kpi1 <= '13.4')?'red':(entrepreneurshipMarContents.kpi1 > '13.4' && entrepreneurshipMarContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMarContents.kpi1 > '17.86666667' && entrepreneurshipMarContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMarContents.kpi1 >= '22.33333333' && entrepreneurshipMarContents.kpi1 < '26.8')?'green':(entrepreneurshipMarContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi2 == null)?'grey-2':(entrepreneurshipMarContents.kpi2 >= '0' && entrepreneurshipMarContents.kpi2 <= '19')?'red':(entrepreneurshipMarContents.kpi2 > '19' && entrepreneurshipMarContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMarContents.kpi2 > '25.33333333' && entrepreneurshipMarContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMarContents.kpi2 >= '31.66666667' && entrepreneurshipMarContents.kpi2 < '38')?'green':(entrepreneurshipMarContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi3 == null)?'grey-2':(entrepreneurshipMarContents.kpi3 >= '0' && entrepreneurshipMarContents.kpi3 <= '15')?'red':(entrepreneurshipMarContents.kpi3 > '15' && entrepreneurshipMarContents.kpi3 <= '20')?'orange':(entrepreneurshipMarContents.kpi3 > '20' && entrepreneurshipMarContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMarContents.kpi3 >= '25' && entrepreneurshipMarContents.kpi3 < '30')?'green':(entrepreneurshipMarContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi4 == null)?'grey-2':(entrepreneurshipMarContents.kpi4 >= '0' && entrepreneurshipMarContents.kpi4 <= '3')?'red':(entrepreneurshipMarContents.kpi4 > '3' && entrepreneurshipMarContents.kpi4 <= '4')?'orange':(entrepreneurshipMarContents.kpi4 > '4' && entrepreneurshipMarContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMarContents.kpi4 >= '5' && entrepreneurshipMarContents.kpi4 < '6')?'green':(entrepreneurshipMarContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >April</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi1 == null)?'grey-2':(entrepreneurshipAprContents.kpi1 >= '0' && entrepreneurshipAprContents.kpi1 <= '13.4')?'red':(entrepreneurshipAprContents.kpi1 > '13.4' && entrepreneurshipAprContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAprContents.kpi1 > '17.86666667' && entrepreneurshipAprContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAprContents.kpi1 >= '22.33333333' && entrepreneurshipAprContents.kpi1 < '26.8')?'green':(entrepreneurshipAprContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi2 == null)?'grey-2':(entrepreneurshipAprContents.kpi2 >= '0' && entrepreneurshipAprContents.kpi2 <= '19')?'red':(entrepreneurshipAprContents.kpi2 > '19' && entrepreneurshipAprContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAprContents.kpi2 > '25.33333333' && entrepreneurshipAprContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAprContents.kpi2 >= '31.66666667' && entrepreneurshipAprContents.kpi2 < '38')?'green':(entrepreneurshipAprContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi3 == null)?'grey-2':(entrepreneurshipAprContents.kpi3 >= '0' && entrepreneurshipAprContents.kpi3 <= '15')?'red':(entrepreneurshipAprContents.kpi3 > '15' && entrepreneurshipAprContents.kpi3 <= '20')?'orange':(entrepreneurshipAprContents.kpi3 > '20' && entrepreneurshipAprContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAprContents.kpi3 >= '25' && entrepreneurshipAprContents.kpi3 < '30')?'green':(entrepreneurshipAprContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi4 == null)?'grey-2':(entrepreneurshipAprContents.kpi4 >= '0' && entrepreneurshipAprContents.kpi4 <= '3')?'red':(entrepreneurshipAprContents.kpi4 > '3' && entrepreneurshipAprContents.kpi4 <= '4')?'orange':(entrepreneurshipAprContents.kpi4 > '4' && entrepreneurshipAprContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAprContents.kpi4 >= '5' && entrepreneurshipAprContents.kpi4 < '6')?'green':(entrepreneurshipAprContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >May</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi1 == null)?'grey-2':(entrepreneurshipMayContents.kpi1 >= '0' && entrepreneurshipMayContents.kpi1 <= '13.4')?'red':(entrepreneurshipMayContents.kpi1 > '13.4' && entrepreneurshipMayContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMayContents.kpi1 > '17.86666667' && entrepreneurshipMayContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMayContents.kpi1 >= '22.33333333' && entrepreneurshipMayContents.kpi1 < '26.8')?'green':(entrepreneurshipMayContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi2 == null)?'grey-2':(entrepreneurshipMayContents.kpi2 >= '0' && entrepreneurshipMayContents.kpi2 <= '19')?'red':(entrepreneurshipMayContents.kpi2 > '19' && entrepreneurshipMayContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMayContents.kpi2 > '25.33333333' && entrepreneurshipMayContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMayContents.kpi2 >= '31.66666667' && entrepreneurshipMayContents.kpi2 < '38')?'green':(entrepreneurshipMayContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi3 == null)?'grey-2':(entrepreneurshipMayContents.kpi3 >= '0' && entrepreneurshipMayContents.kpi3 <= '15')?'red':(entrepreneurshipMayContents.kpi3 > '15' && entrepreneurshipMayContents.kpi3 <= '20')?'orange':(entrepreneurshipMayContents.kpi3 > '20' && entrepreneurshipMayContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMayContents.kpi3 >= '25' && entrepreneurshipMayContents.kpi3 < '30')?'green':(entrepreneurshipMayContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi4 == null)?'grey-2':(entrepreneurshipMayContents.kpi4 >= '0' && entrepreneurshipMayContents.kpi4 <= '3')?'red':(entrepreneurshipMayContents.kpi4 > '3' && entrepreneurshipMayContents.kpi4 <= '4')?'orange':(entrepreneurshipMayContents.kpi4 > '4' && entrepreneurshipMayContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMayContents.kpi4 >= '5' && entrepreneurshipMayContents.kpi4 < '6')?'green':(entrepreneurshipMayContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >June</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi1 == null)?'grey-2':(entrepreneurshipJunContents.kpi1 >= '0' && entrepreneurshipJunContents.kpi1 <= '13.4')?'red':(entrepreneurshipJunContents.kpi1 > '13.4' && entrepreneurshipJunContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJunContents.kpi1 > '17.86666667' && entrepreneurshipJunContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJunContents.kpi1 >= '22.33333333' && entrepreneurshipJunContents.kpi1 < '26.8')?'green':(entrepreneurshipJunContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi2 == null)?'grey-2':(entrepreneurshipJunContents.kpi2 >= '0' && entrepreneurshipJunContents.kpi2 <= '19')?'red':(entrepreneurshipJunContents.kpi2 > '19' && entrepreneurshipJunContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJunContents.kpi2 > '25.33333333' && entrepreneurshipJunContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJunContents.kpi2 >= '31.66666667' && entrepreneurshipJunContents.kpi2 < '38')?'green':(entrepreneurshipJunContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi3 == null)?'grey-2':(entrepreneurshipJunContents.kpi3 >= '0' && entrepreneurshipJunContents.kpi3 <= '15')?'red':(entrepreneurshipJunContents.kpi3 > '15' && entrepreneurshipJunContents.kpi3 <= '20')?'orange':(entrepreneurshipJunContents.kpi3 > '20' && entrepreneurshipJunContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJunContents.kpi3 >= '25' && entrepreneurshipJunContents.kpi3 < '30')?'green':(entrepreneurshipJunContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi4 == null)?'grey-2':(entrepreneurshipJunContents.kpi4 >= '0' && entrepreneurshipJunContents.kpi4 <= '3')?'red':(entrepreneurshipJunContents.kpi4 > '3' && entrepreneurshipJunContents.kpi4 <= '4')?'orange':(entrepreneurshipJunContents.kpi4 > '4' && entrepreneurshipJunContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJunContents.kpi4 >= '5' && entrepreneurshipJunContents.kpi4 < '6')?'green':(entrepreneurshipJunContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >July</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi1 == null)?'grey-2':(entrepreneurshipJulContents.kpi1 >= '0' && entrepreneurshipJulContents.kpi1 <= '13.4')?'red':(entrepreneurshipJulContents.kpi1 > '13.4' && entrepreneurshipJulContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJulContents.kpi1 > '17.86666667' && entrepreneurshipJulContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJulContents.kpi1 >= '22.33333333' && entrepreneurshipJulContents.kpi1 < '26.8')?'green':(entrepreneurshipJulContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi2 == null)?'grey-2':(entrepreneurshipJulContents.kpi2 >= '0' && entrepreneurshipJulContents.kpi2 <= '19')?'red':(entrepreneurshipJulContents.kpi2 > '19' && entrepreneurshipJulContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJulContents.kpi2 > '25.33333333' && entrepreneurshipJulContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJulContents.kpi2 >= '31.66666667' && entrepreneurshipJulContents.kpi2 < '38')?'green':(entrepreneurshipJulContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi3 == null)?'grey-2':(entrepreneurshipJulContents.kpi3 >= '0' && entrepreneurshipJulContents.kpi3 <= '15')?'red':(entrepreneurshipJulContents.kpi3 > '15' && entrepreneurshipJulContents.kpi3 <= '20')?'orange':(entrepreneurshipJulContents.kpi3 > '20' && entrepreneurshipJulContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJulContents.kpi3 >= '25' && entrepreneurshipJulContents.kpi3 < '30')?'green':(entrepreneurshipJulContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi4 == null)?'grey-2':(entrepreneurshipJulContents.kpi4 >= '0' && entrepreneurshipJulContents.kpi4 <= '3')?'red':(entrepreneurshipJulContents.kpi4 > '3' && entrepreneurshipJulContents.kpi4 <= '4')?'orange':(entrepreneurshipJulContents.kpi4 > '4' && entrepreneurshipJulContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJulContents.kpi4 >= '5' && entrepreneurshipJulContents.kpi4 < '6')?'green':(entrepreneurshipJulContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >August</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi1 == null)?'grey-2':(entrepreneurshipAugContents.kpi1 >= '0' && entrepreneurshipAugContents.kpi1 <= '13.4')?'red':(entrepreneurshipAugContents.kpi1 > '13.4' && entrepreneurshipAugContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAugContents.kpi1 > '17.86666667' && entrepreneurshipAugContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAugContents.kpi1 >= '22.33333333' && entrepreneurshipAugContents.kpi1 < '26.8')?'green':(entrepreneurshipAugContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi2 == null)?'grey-2':(entrepreneurshipAugContents.kpi2 >= '0' && entrepreneurshipAugContents.kpi2 <= '19')?'red':(entrepreneurshipAugContents.kpi2 > '19' && entrepreneurshipAugContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAugContents.kpi2 > '25.33333333' && entrepreneurshipAugContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAugContents.kpi2 >= '31.66666667' && entrepreneurshipAugContents.kpi2 < '38')?'green':(entrepreneurshipAugContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi3 == null)?'grey-2':(entrepreneurshipAugContents.kpi3 >= '0' && entrepreneurshipAugContents.kpi3 <= '15')?'red':(entrepreneurshipAugContents.kpi3 > '15' && entrepreneurshipAugContents.kpi3 <= '20')?'orange':(entrepreneurshipAugContents.kpi3 > '20' && entrepreneurshipAugContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAugContents.kpi3 >= '25' && entrepreneurshipAugContents.kpi3 < '30')?'green':(entrepreneurshipAugContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi4 == null)?'grey-2':(entrepreneurshipAugContents.kpi4 >= '0' && entrepreneurshipAugContents.kpi4 <= '3')?'red':(entrepreneurshipAugContents.kpi4 > '3' && entrepreneurshipAugContents.kpi4 <= '4')?'orange':(entrepreneurshipAugContents.kpi4 > '4' && entrepreneurshipAugContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAugContents.kpi4 >= '5' && entrepreneurshipAugContents.kpi4 < '6')?'green':(entrepreneurshipAugContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >September</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi1 == null)?'grey-2':(entrepreneurshipSepContents.kpi1 >= '0' && entrepreneurshipSepContents.kpi1 <= '13.4')?'red':(entrepreneurshipSepContents.kpi1 > '13.4' && entrepreneurshipSepContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipSepContents.kpi1 > '17.86666667' && entrepreneurshipSepContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipSepContents.kpi1 >= '22.33333333' && entrepreneurshipSepContents.kpi1 < '26.8')?'green':(entrepreneurshipSepContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi2 == null)?'grey-2':(entrepreneurshipSepContents.kpi2 >= '0' && entrepreneurshipSepContents.kpi2 <= '19')?'red':(entrepreneurshipSepContents.kpi2 > '19' && entrepreneurshipSepContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipSepContents.kpi2 > '25.33333333' && entrepreneurshipSepContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipSepContents.kpi2 >= '31.66666667' && entrepreneurshipSepContents.kpi2 < '38')?'green':(entrepreneurshipSepContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi3 == null)?'grey-2':(entrepreneurshipSepContents.kpi3 >= '0' && entrepreneurshipSepContents.kpi3 <= '15')?'red':(entrepreneurshipSepContents.kpi3 > '15' && entrepreneurshipSepContents.kpi3 <= '20')?'orange':(entrepreneurshipSepContents.kpi3 > '20' && entrepreneurshipSepContents.kpi3 < '25')?'yellow-7':(entrepreneurshipSepContents.kpi3 >= '25' && entrepreneurshipSepContents.kpi3 < '30')?'green':(entrepreneurshipSepContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi4 == null)?'grey-2':(entrepreneurshipSepContents.kpi4 >= '0' && entrepreneurshipSepContents.kpi4 <= '3')?'red':(entrepreneurshipSepContents.kpi4 > '3' && entrepreneurshipSepContents.kpi4 <= '4')?'orange':(entrepreneurshipSepContents.kpi4 > '4' && entrepreneurshipSepContents.kpi4 < '5')?'yellow-7':(entrepreneurshipSepContents.kpi4 >= '5' && entrepreneurshipSepContents.kpi4 < '6')?'green':(entrepreneurshipSepContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >October</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi1 == null)?'grey-2':(entrepreneurshipOctContents.kpi1 >= '0' && entrepreneurshipOctContents.kpi1 <= '13.4')?'red':(entrepreneurshipOctContents.kpi1 > '13.4' && entrepreneurshipOctContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipOctContents.kpi1 > '17.86666667' && entrepreneurshipOctContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipOctContents.kpi1 >= '22.33333333' && entrepreneurshipOctContents.kpi1 < '26.8')?'green':(entrepreneurshipOctContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi2 == null)?'grey-2':(entrepreneurshipOctContents.kpi2 >= '0' && entrepreneurshipOctContents.kpi2 <= '19')?'red':(entrepreneurshipOctContents.kpi2 > '19' && entrepreneurshipOctContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipOctContents.kpi2 > '25.33333333' && entrepreneurshipOctContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipOctContents.kpi2 >= '31.66666667' && entrepreneurshipOctContents.kpi2 < '38')?'green':(entrepreneurshipOctContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi3 == null)?'grey-2':(entrepreneurshipOctContents.kpi3 >= '0' && entrepreneurshipOctContents.kpi3 <= '15')?'red':(entrepreneurshipOctContents.kpi3 > '15' && entrepreneurshipOctContents.kpi3 <= '20')?'orange':(entrepreneurshipOctContents.kpi3 > '20' && entrepreneurshipOctContents.kpi3 < '25')?'yellow-7':(entrepreneurshipOctContents.kpi3 >= '25' && entrepreneurshipOctContents.kpi3 < '30')?'green':(entrepreneurshipOctContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi4 == null)?'grey-2':(entrepreneurshipOctContents.kpi4 >= '0' && entrepreneurshipOctContents.kpi4 <= '3')?'red':(entrepreneurshipOctContents.kpi4 > '3' && entrepreneurshipOctContents.kpi4 <= '4')?'orange':(entrepreneurshipOctContents.kpi4 > '4' && entrepreneurshipOctContents.kpi4 < '5')?'yellow-7':(entrepreneurshipOctContents.kpi4 >= '5' && entrepreneurshipOctContents.kpi4 < '6')?'green':(entrepreneurshipOctContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >November</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi1 == null)?'grey-2':(entrepreneurshipNovContents.kpi1 >= '0' && entrepreneurshipNovContents.kpi1 <= '13.4')?'red':(entrepreneurshipNovContents.kpi1 > '13.4' && entrepreneurshipNovContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipNovContents.kpi1 > '17.86666667' && entrepreneurshipNovContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipNovContents.kpi1 >= '22.33333333' && entrepreneurshipNovContents.kpi1 < '26.8')?'green':(entrepreneurshipNovContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi2 == null)?'grey-2':(entrepreneurshipNovContents.kpi2 >= '0' && entrepreneurshipNovContents.kpi2 <= '19')?'red':(entrepreneurshipNovContents.kpi2 > '19' && entrepreneurshipNovContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipNovContents.kpi2 > '25.33333333' && entrepreneurshipNovContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipNovContents.kpi2 >= '31.66666667' && entrepreneurshipNovContents.kpi2 < '38')?'green':(entrepreneurshipNovContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi3 == null)?'grey-2':(entrepreneurshipNovContents.kpi3 >= '0' && entrepreneurshipNovContents.kpi3 <= '15')?'red':(entrepreneurshipNovContents.kpi3 > '15' && entrepreneurshipNovContents.kpi3 <= '20')?'orange':(entrepreneurshipNovContents.kpi3 > '20' && entrepreneurshipNovContents.kpi3 < '25')?'yellow-7':(entrepreneurshipNovContents.kpi3 >= '25' && entrepreneurshipNovContents.kpi3 < '30')?'green':(entrepreneurshipNovContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi4 == null)?'grey-2':(entrepreneurshipNovContents.kpi4 >= '0' && entrepreneurshipNovContents.kpi4 <= '3')?'red':(entrepreneurshipNovContents.kpi4 > '3' && entrepreneurshipNovContents.kpi4 <= '4')?'orange':(entrepreneurshipNovContents.kpi4 > '4' && entrepreneurshipNovContents.kpi4 < '5')?'yellow-7':(entrepreneurshipNovContents.kpi4 >= '5' && entrepreneurshipNovContents.kpi4 < '6')?'green':(entrepreneurshipNovContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >December</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi1 == null)?'grey-2':(entrepreneurshipDecContents.kpi1 >= '0' && entrepreneurshipDecContents.kpi1 <= '13.4')?'red':(entrepreneurshipDecContents.kpi1 > '13.4' && entrepreneurshipDecContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipDecContents.kpi1 > '17.86666667' && entrepreneurshipDecContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipDecContents.kpi1 >= '22.33333333' && entrepreneurshipDecContents.kpi1 < '26.8')?'green':(entrepreneurshipDecContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi2 == null)?'grey-2':(entrepreneurshipDecContents.kpi2 >= '0' && entrepreneurshipDecContents.kpi2 <= '19')?'red':(entrepreneurshipDecContents.kpi2 > '19' && entrepreneurshipDecContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipDecContents.kpi2 > '25.33333333' && entrepreneurshipDecContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipDecContents.kpi2 >= '31.66666667' && entrepreneurshipDecContents.kpi2 < '38')?'green':(entrepreneurshipDecContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi3 == null)?'grey-2':(entrepreneurshipDecContents.kpi3 >= '0' && entrepreneurshipDecContents.kpi3 <= '15')?'red':(entrepreneurshipDecContents.kpi3 > '15' && entrepreneurshipDecContents.kpi3 <= '20')?'orange':(entrepreneurshipDecContents.kpi3 > '20' && entrepreneurshipDecContents.kpi3 < '25')?'yellow-7':(entrepreneurshipDecContents.kpi3 >= '25' && entrepreneurshipDecContents.kpi3 < '30')?'green':(entrepreneurshipDecContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi4 == null)?'grey-2':(entrepreneurshipDecContents.kpi4 >= '0' && entrepreneurshipDecContents.kpi4 <= '3')?'red':(entrepreneurshipDecContents.kpi4 > '3' && entrepreneurshipDecContents.kpi4 <= '4')?'orange':(entrepreneurshipDecContents.kpi4 > '4' && entrepreneurshipDecContents.kpi4 < '5')?'yellow-7':(entrepreneurshipDecContents.kpi4 >= '5' && entrepreneurshipDecContents.kpi4 < '6')?'green':(entrepreneurshipDecContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <!--TABLE DONE-->
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/images/rrcrc-logo_1200x300.png"></q-img>
                      </q-card-section>
                    </q-card>
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Budget Usage (Cumulative)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('gauge')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="gauge" :option="gaugeOctOptions" :resizable="true" style="height:315px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section>
                        <div class="text-h6">Expense Categories (Monthly)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="pie" :option="pieOctOptions" :resizable="true" style="height:465px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
                <div class="row q-col-gutter-sm q-mt-xs">
                  <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Process Chart
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('line')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="line" :option="lineChartOption" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
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
                        <IEcharts :option="barOptions" ref="bar" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>  
            </q-tab-panel>

            <q-tab-panel name="november">
              <div class="text-h4 q-mb-md">{{$route.name}}&ensp;|&ensp;November </div>
                <div class="row q-col-gutter-sm">
                  <!--TABLE-->
                  <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <q-card>
                      <q-list dense class="rounded-borders" >
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >Months</q-item-label>
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 1
                                <q-tooltip># Clients (Unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># Contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi1 == null)?'grey-2':(entrepreneurshipJanContents.kpi1 >= '0' && entrepreneurshipJanContents.kpi1 <= '13.4')?'red':(entrepreneurshipJanContents.kpi1 > '13.4' && entrepreneurshipJanContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJanContents.kpi1 > '17.86666667' && entrepreneurshipJanContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJanContents.kpi1 >= '22.33333333' && entrepreneurshipJanContents.kpi1 < '26.8')?'green':(entrepreneurshipJanContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi2 == null)?'grey-2':(entrepreneurshipJanContents.kpi2 >= '0' && entrepreneurshipJanContents.kpi2 <= '19')?'red':(entrepreneurshipJanContents.kpi2 > '19' && entrepreneurshipJanContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJanContents.kpi2 > '25.33333333' && entrepreneurshipJanContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJanContents.kpi2 >= '31.66666667' && entrepreneurshipJanContents.kpi2 < '38')?'green':(entrepreneurshipJanContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi3 == null)?'grey-2':(entrepreneurshipJanContents.kpi3 >= '0' && entrepreneurshipJanContents.kpi3 <= '15')?'red':(entrepreneurshipJanContents.kpi3 > '15' && entrepreneurshipJanContents.kpi3 <= '20')?'orange':(entrepreneurshipJanContents.kpi3 > '20' && entrepreneurshipJanContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJanContents.kpi3 >= '25' && entrepreneurshipJanContents.kpi3 < '30')?'green':(entrepreneurshipJanContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi4 == null)?'grey-2':(entrepreneurshipJanContents.kpi4 >= '0' && entrepreneurshipJanContents.kpi4 <= '3')?'red':(entrepreneurshipJanContents.kpi4 > '3' && entrepreneurshipJanContents.kpi4 <= '4')?'orange':(entrepreneurshipJanContents.kpi4 > '4' && entrepreneurshipJanContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJanContents.kpi4 >= '5' && entrepreneurshipJanContents.kpi4 < '6')?'green':(entrepreneurshipJanContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >February</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi1 == null)?'grey-2':(entrepreneurshipFebContents.kpi1 >= '0' && entrepreneurshipFebContents.kpi1 <= '13.4')?'red':(entrepreneurshipFebContents.kpi1 > '13.4' && entrepreneurshipFebContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipFebContents.kpi1 > '17.86666667' && entrepreneurshipFebContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipFebContents.kpi1 >= '22.33333333' && entrepreneurshipFebContents.kpi1 < '26.8')?'green':(entrepreneurshipFebContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi2 == null)?'grey-2':(entrepreneurshipFebContents.kpi2 >= '0' && entrepreneurshipFebContents.kpi2 <= '19')?'red':(entrepreneurshipFebContents.kpi2 > '19' && entrepreneurshipFebContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipFebContents.kpi2 > '25.33333333' && entrepreneurshipFebContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipFebContents.kpi2 >= '31.66666667' && entrepreneurshipFebContents.kpi2 < '38')?'green':(entrepreneurshipFebContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi3 == null)?'grey-2':(entrepreneurshipFebContents.kpi3 >= '0' && entrepreneurshipFebContents.kpi3 <= '15')?'red':(entrepreneurshipFebContents.kpi3 > '15' && entrepreneurshipFebContents.kpi3 <= '20')?'orange':(entrepreneurshipFebContents.kpi3 > '20' && entrepreneurshipFebContents.kpi3 < '25')?'yellow-7':(entrepreneurshipFebContents.kpi3 >= '25' && entrepreneurshipFebContents.kpi3 < '30')?'green':(entrepreneurshipFebContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi4 == null)?'grey-2':(entrepreneurshipFebContents.kpi4 >= '0' && entrepreneurshipFebContents.kpi4 <= '3')?'red':(entrepreneurshipFebContents.kpi4 > '3' && entrepreneurshipFebContents.kpi4 <= '4')?'orange':(entrepreneurshipFebContents.kpi4 > '4' && entrepreneurshipFebContents.kpi4 < '5')?'yellow-7':(entrepreneurshipFebContents.kpi4 >= '5' && entrepreneurshipFebContents.kpi4 < '6')?'green':(entrepreneurshipFebContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >March</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi1 == null)?'grey-2':(entrepreneurshipMarContents.kpi1 >= '0' && entrepreneurshipMarContents.kpi1 <= '13.4')?'red':(entrepreneurshipMarContents.kpi1 > '13.4' && entrepreneurshipMarContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMarContents.kpi1 > '17.86666667' && entrepreneurshipMarContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMarContents.kpi1 >= '22.33333333' && entrepreneurshipMarContents.kpi1 < '26.8')?'green':(entrepreneurshipMarContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi2 == null)?'grey-2':(entrepreneurshipMarContents.kpi2 >= '0' && entrepreneurshipMarContents.kpi2 <= '19')?'red':(entrepreneurshipMarContents.kpi2 > '19' && entrepreneurshipMarContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMarContents.kpi2 > '25.33333333' && entrepreneurshipMarContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMarContents.kpi2 >= '31.66666667' && entrepreneurshipMarContents.kpi2 < '38')?'green':(entrepreneurshipMarContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi3 == null)?'grey-2':(entrepreneurshipMarContents.kpi3 >= '0' && entrepreneurshipMarContents.kpi3 <= '15')?'red':(entrepreneurshipMarContents.kpi3 > '15' && entrepreneurshipMarContents.kpi3 <= '20')?'orange':(entrepreneurshipMarContents.kpi3 > '20' && entrepreneurshipMarContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMarContents.kpi3 >= '25' && entrepreneurshipMarContents.kpi3 < '30')?'green':(entrepreneurshipMarContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi4 == null)?'grey-2':(entrepreneurshipMarContents.kpi4 >= '0' && entrepreneurshipMarContents.kpi4 <= '3')?'red':(entrepreneurshipMarContents.kpi4 > '3' && entrepreneurshipMarContents.kpi4 <= '4')?'orange':(entrepreneurshipMarContents.kpi4 > '4' && entrepreneurshipMarContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMarContents.kpi4 >= '5' && entrepreneurshipMarContents.kpi4 < '6')?'green':(entrepreneurshipMarContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >April</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi1 == null)?'grey-2':(entrepreneurshipAprContents.kpi1 >= '0' && entrepreneurshipAprContents.kpi1 <= '13.4')?'red':(entrepreneurshipAprContents.kpi1 > '13.4' && entrepreneurshipAprContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAprContents.kpi1 > '17.86666667' && entrepreneurshipAprContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAprContents.kpi1 >= '22.33333333' && entrepreneurshipAprContents.kpi1 < '26.8')?'green':(entrepreneurshipAprContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi2 == null)?'grey-2':(entrepreneurshipAprContents.kpi2 >= '0' && entrepreneurshipAprContents.kpi2 <= '19')?'red':(entrepreneurshipAprContents.kpi2 > '19' && entrepreneurshipAprContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAprContents.kpi2 > '25.33333333' && entrepreneurshipAprContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAprContents.kpi2 >= '31.66666667' && entrepreneurshipAprContents.kpi2 < '38')?'green':(entrepreneurshipAprContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi3 == null)?'grey-2':(entrepreneurshipAprContents.kpi3 >= '0' && entrepreneurshipAprContents.kpi3 <= '15')?'red':(entrepreneurshipAprContents.kpi3 > '15' && entrepreneurshipAprContents.kpi3 <= '20')?'orange':(entrepreneurshipAprContents.kpi3 > '20' && entrepreneurshipAprContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAprContents.kpi3 >= '25' && entrepreneurshipAprContents.kpi3 < '30')?'green':(entrepreneurshipAprContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi4 == null)?'grey-2':(entrepreneurshipAprContents.kpi4 >= '0' && entrepreneurshipAprContents.kpi4 <= '3')?'red':(entrepreneurshipAprContents.kpi4 > '3' && entrepreneurshipAprContents.kpi4 <= '4')?'orange':(entrepreneurshipAprContents.kpi4 > '4' && entrepreneurshipAprContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAprContents.kpi4 >= '5' && entrepreneurshipAprContents.kpi4 < '6')?'green':(entrepreneurshipAprContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >May</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi1 == null)?'grey-2':(entrepreneurshipMayContents.kpi1 >= '0' && entrepreneurshipMayContents.kpi1 <= '13.4')?'red':(entrepreneurshipMayContents.kpi1 > '13.4' && entrepreneurshipMayContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMayContents.kpi1 > '17.86666667' && entrepreneurshipMayContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMayContents.kpi1 >= '22.33333333' && entrepreneurshipMayContents.kpi1 < '26.8')?'green':(entrepreneurshipMayContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi2 == null)?'grey-2':(entrepreneurshipMayContents.kpi2 >= '0' && entrepreneurshipMayContents.kpi2 <= '19')?'red':(entrepreneurshipMayContents.kpi2 > '19' && entrepreneurshipMayContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMayContents.kpi2 > '25.33333333' && entrepreneurshipMayContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMayContents.kpi2 >= '31.66666667' && entrepreneurshipMayContents.kpi2 < '38')?'green':(entrepreneurshipMayContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi3 == null)?'grey-2':(entrepreneurshipMayContents.kpi3 >= '0' && entrepreneurshipMayContents.kpi3 <= '15')?'red':(entrepreneurshipMayContents.kpi3 > '15' && entrepreneurshipMayContents.kpi3 <= '20')?'orange':(entrepreneurshipMayContents.kpi3 > '20' && entrepreneurshipMayContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMayContents.kpi3 >= '25' && entrepreneurshipMayContents.kpi3 < '30')?'green':(entrepreneurshipMayContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi4 == null)?'grey-2':(entrepreneurshipMayContents.kpi4 >= '0' && entrepreneurshipMayContents.kpi4 <= '3')?'red':(entrepreneurshipMayContents.kpi4 > '3' && entrepreneurshipMayContents.kpi4 <= '4')?'orange':(entrepreneurshipMayContents.kpi4 > '4' && entrepreneurshipMayContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMayContents.kpi4 >= '5' && entrepreneurshipMayContents.kpi4 < '6')?'green':(entrepreneurshipMayContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >June</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi1 == null)?'grey-2':(entrepreneurshipJunContents.kpi1 >= '0' && entrepreneurshipJunContents.kpi1 <= '13.4')?'red':(entrepreneurshipJunContents.kpi1 > '13.4' && entrepreneurshipJunContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJunContents.kpi1 > '17.86666667' && entrepreneurshipJunContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJunContents.kpi1 >= '22.33333333' && entrepreneurshipJunContents.kpi1 < '26.8')?'green':(entrepreneurshipJunContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi2 == null)?'grey-2':(entrepreneurshipJunContents.kpi2 >= '0' && entrepreneurshipJunContents.kpi2 <= '19')?'red':(entrepreneurshipJunContents.kpi2 > '19' && entrepreneurshipJunContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJunContents.kpi2 > '25.33333333' && entrepreneurshipJunContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJunContents.kpi2 >= '31.66666667' && entrepreneurshipJunContents.kpi2 < '38')?'green':(entrepreneurshipJunContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi3 == null)?'grey-2':(entrepreneurshipJunContents.kpi3 >= '0' && entrepreneurshipJunContents.kpi3 <= '15')?'red':(entrepreneurshipJunContents.kpi3 > '15' && entrepreneurshipJunContents.kpi3 <= '20')?'orange':(entrepreneurshipJunContents.kpi3 > '20' && entrepreneurshipJunContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJunContents.kpi3 >= '25' && entrepreneurshipJunContents.kpi3 < '30')?'green':(entrepreneurshipJunContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi4 == null)?'grey-2':(entrepreneurshipJunContents.kpi4 >= '0' && entrepreneurshipJunContents.kpi4 <= '3')?'red':(entrepreneurshipJunContents.kpi4 > '3' && entrepreneurshipJunContents.kpi4 <= '4')?'orange':(entrepreneurshipJunContents.kpi4 > '4' && entrepreneurshipJunContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJunContents.kpi4 >= '5' && entrepreneurshipJunContents.kpi4 < '6')?'green':(entrepreneurshipJunContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >July</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi1 == null)?'grey-2':(entrepreneurshipJulContents.kpi1 >= '0' && entrepreneurshipJulContents.kpi1 <= '13.4')?'red':(entrepreneurshipJulContents.kpi1 > '13.4' && entrepreneurshipJulContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJulContents.kpi1 > '17.86666667' && entrepreneurshipJulContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJulContents.kpi1 >= '22.33333333' && entrepreneurshipJulContents.kpi1 < '26.8')?'green':(entrepreneurshipJulContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi2 == null)?'grey-2':(entrepreneurshipJulContents.kpi2 >= '0' && entrepreneurshipJulContents.kpi2 <= '19')?'red':(entrepreneurshipJulContents.kpi2 > '19' && entrepreneurshipJulContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJulContents.kpi2 > '25.33333333' && entrepreneurshipJulContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJulContents.kpi2 >= '31.66666667' && entrepreneurshipJulContents.kpi2 < '38')?'green':(entrepreneurshipJulContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi3 == null)?'grey-2':(entrepreneurshipJulContents.kpi3 >= '0' && entrepreneurshipJulContents.kpi3 <= '15')?'red':(entrepreneurshipJulContents.kpi3 > '15' && entrepreneurshipJulContents.kpi3 <= '20')?'orange':(entrepreneurshipJulContents.kpi3 > '20' && entrepreneurshipJulContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJulContents.kpi3 >= '25' && entrepreneurshipJulContents.kpi3 < '30')?'green':(entrepreneurshipJulContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi4 == null)?'grey-2':(entrepreneurshipJulContents.kpi4 >= '0' && entrepreneurshipJulContents.kpi4 <= '3')?'red':(entrepreneurshipJulContents.kpi4 > '3' && entrepreneurshipJulContents.kpi4 <= '4')?'orange':(entrepreneurshipJulContents.kpi4 > '4' && entrepreneurshipJulContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJulContents.kpi4 >= '5' && entrepreneurshipJulContents.kpi4 < '6')?'green':(entrepreneurshipJulContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >August</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi1 == null)?'grey-2':(entrepreneurshipAugContents.kpi1 >= '0' && entrepreneurshipAugContents.kpi1 <= '13.4')?'red':(entrepreneurshipAugContents.kpi1 > '13.4' && entrepreneurshipAugContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAugContents.kpi1 > '17.86666667' && entrepreneurshipAugContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAugContents.kpi1 >= '22.33333333' && entrepreneurshipAugContents.kpi1 < '26.8')?'green':(entrepreneurshipAugContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi2 == null)?'grey-2':(entrepreneurshipAugContents.kpi2 >= '0' && entrepreneurshipAugContents.kpi2 <= '19')?'red':(entrepreneurshipAugContents.kpi2 > '19' && entrepreneurshipAugContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAugContents.kpi2 > '25.33333333' && entrepreneurshipAugContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAugContents.kpi2 >= '31.66666667' && entrepreneurshipAugContents.kpi2 < '38')?'green':(entrepreneurshipAugContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi3 == null)?'grey-2':(entrepreneurshipAugContents.kpi3 >= '0' && entrepreneurshipAugContents.kpi3 <= '15')?'red':(entrepreneurshipAugContents.kpi3 > '15' && entrepreneurshipAugContents.kpi3 <= '20')?'orange':(entrepreneurshipAugContents.kpi3 > '20' && entrepreneurshipAugContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAugContents.kpi3 >= '25' && entrepreneurshipAugContents.kpi3 < '30')?'green':(entrepreneurshipAugContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi4 == null)?'grey-2':(entrepreneurshipAugContents.kpi4 >= '0' && entrepreneurshipAugContents.kpi4 <= '3')?'red':(entrepreneurshipAugContents.kpi4 > '3' && entrepreneurshipAugContents.kpi4 <= '4')?'orange':(entrepreneurshipAugContents.kpi4 > '4' && entrepreneurshipAugContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAugContents.kpi4 >= '5' && entrepreneurshipAugContents.kpi4 < '6')?'green':(entrepreneurshipAugContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >September</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi1 == null)?'grey-2':(entrepreneurshipSepContents.kpi1 >= '0' && entrepreneurshipSepContents.kpi1 <= '13.4')?'red':(entrepreneurshipSepContents.kpi1 > '13.4' && entrepreneurshipSepContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipSepContents.kpi1 > '17.86666667' && entrepreneurshipSepContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipSepContents.kpi1 >= '22.33333333' && entrepreneurshipSepContents.kpi1 < '26.8')?'green':(entrepreneurshipSepContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi2 == null)?'grey-2':(entrepreneurshipSepContents.kpi2 >= '0' && entrepreneurshipSepContents.kpi2 <= '19')?'red':(entrepreneurshipSepContents.kpi2 > '19' && entrepreneurshipSepContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipSepContents.kpi2 > '25.33333333' && entrepreneurshipSepContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipSepContents.kpi2 >= '31.66666667' && entrepreneurshipSepContents.kpi2 < '38')?'green':(entrepreneurshipSepContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi3 == null)?'grey-2':(entrepreneurshipSepContents.kpi3 >= '0' && entrepreneurshipSepContents.kpi3 <= '15')?'red':(entrepreneurshipSepContents.kpi3 > '15' && entrepreneurshipSepContents.kpi3 <= '20')?'orange':(entrepreneurshipSepContents.kpi3 > '20' && entrepreneurshipSepContents.kpi3 < '25')?'yellow-7':(entrepreneurshipSepContents.kpi3 >= '25' && entrepreneurshipSepContents.kpi3 < '30')?'green':(entrepreneurshipSepContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi4 == null)?'grey-2':(entrepreneurshipSepContents.kpi4 >= '0' && entrepreneurshipSepContents.kpi4 <= '3')?'red':(entrepreneurshipSepContents.kpi4 > '3' && entrepreneurshipSepContents.kpi4 <= '4')?'orange':(entrepreneurshipSepContents.kpi4 > '4' && entrepreneurshipSepContents.kpi4 < '5')?'yellow-7':(entrepreneurshipSepContents.kpi4 >= '5' && entrepreneurshipSepContents.kpi4 < '6')?'green':(entrepreneurshipSepContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >October</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi1 == null)?'grey-2':(entrepreneurshipOctContents.kpi1 >= '0' && entrepreneurshipOctContents.kpi1 <= '13.4')?'red':(entrepreneurshipOctContents.kpi1 > '13.4' && entrepreneurshipOctContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipOctContents.kpi1 > '17.86666667' && entrepreneurshipOctContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipOctContents.kpi1 >= '22.33333333' && entrepreneurshipOctContents.kpi1 < '26.8')?'green':(entrepreneurshipOctContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi2 == null)?'grey-2':(entrepreneurshipOctContents.kpi2 >= '0' && entrepreneurshipOctContents.kpi2 <= '19')?'red':(entrepreneurshipOctContents.kpi2 > '19' && entrepreneurshipOctContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipOctContents.kpi2 > '25.33333333' && entrepreneurshipOctContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipOctContents.kpi2 >= '31.66666667' && entrepreneurshipOctContents.kpi2 < '38')?'green':(entrepreneurshipOctContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi3 == null)?'grey-2':(entrepreneurshipOctContents.kpi3 >= '0' && entrepreneurshipOctContents.kpi3 <= '15')?'red':(entrepreneurshipOctContents.kpi3 > '15' && entrepreneurshipOctContents.kpi3 <= '20')?'orange':(entrepreneurshipOctContents.kpi3 > '20' && entrepreneurshipOctContents.kpi3 < '25')?'yellow-7':(entrepreneurshipOctContents.kpi3 >= '25' && entrepreneurshipOctContents.kpi3 < '30')?'green':(entrepreneurshipOctContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi4 == null)?'grey-2':(entrepreneurshipOctContents.kpi4 >= '0' && entrepreneurshipOctContents.kpi4 <= '3')?'red':(entrepreneurshipOctContents.kpi4 > '3' && entrepreneurshipOctContents.kpi4 <= '4')?'orange':(entrepreneurshipOctContents.kpi4 > '4' && entrepreneurshipOctContents.kpi4 < '5')?'yellow-7':(entrepreneurshipOctContents.kpi4 >= '5' && entrepreneurshipOctContents.kpi4 < '6')?'green':(entrepreneurshipOctContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >November</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi1 == null)?'grey-2':(entrepreneurshipNovContents.kpi1 >= '0' && entrepreneurshipNovContents.kpi1 <= '13.4')?'red':(entrepreneurshipNovContents.kpi1 > '13.4' && entrepreneurshipNovContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipNovContents.kpi1 > '17.86666667' && entrepreneurshipNovContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipNovContents.kpi1 >= '22.33333333' && entrepreneurshipNovContents.kpi1 < '26.8')?'green':(entrepreneurshipNovContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi2 == null)?'grey-2':(entrepreneurshipNovContents.kpi2 >= '0' && entrepreneurshipNovContents.kpi2 <= '19')?'red':(entrepreneurshipNovContents.kpi2 > '19' && entrepreneurshipNovContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipNovContents.kpi2 > '25.33333333' && entrepreneurshipNovContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipNovContents.kpi2 >= '31.66666667' && entrepreneurshipNovContents.kpi2 < '38')?'green':(entrepreneurshipNovContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi3 == null)?'grey-2':(entrepreneurshipNovContents.kpi3 >= '0' && entrepreneurshipNovContents.kpi3 <= '15')?'red':(entrepreneurshipNovContents.kpi3 > '15' && entrepreneurshipNovContents.kpi3 <= '20')?'orange':(entrepreneurshipNovContents.kpi3 > '20' && entrepreneurshipNovContents.kpi3 < '25')?'yellow-7':(entrepreneurshipNovContents.kpi3 >= '25' && entrepreneurshipNovContents.kpi3 < '30')?'green':(entrepreneurshipNovContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi4 == null)?'grey-2':(entrepreneurshipNovContents.kpi4 >= '0' && entrepreneurshipNovContents.kpi4 <= '3')?'red':(entrepreneurshipNovContents.kpi4 > '3' && entrepreneurshipNovContents.kpi4 <= '4')?'orange':(entrepreneurshipNovContents.kpi4 > '4' && entrepreneurshipNovContents.kpi4 < '5')?'yellow-7':(entrepreneurshipNovContents.kpi4 >= '5' && entrepreneurshipNovContents.kpi4 < '6')?'green':(entrepreneurshipNovContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >December</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi1 == null)?'grey-2':(entrepreneurshipDecContents.kpi1 >= '0' && entrepreneurshipDecContents.kpi1 <= '13.4')?'red':(entrepreneurshipDecContents.kpi1 > '13.4' && entrepreneurshipDecContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipDecContents.kpi1 > '17.86666667' && entrepreneurshipDecContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipDecContents.kpi1 >= '22.33333333' && entrepreneurshipDecContents.kpi1 < '26.8')?'green':(entrepreneurshipDecContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi2 == null)?'grey-2':(entrepreneurshipDecContents.kpi2 >= '0' && entrepreneurshipDecContents.kpi2 <= '19')?'red':(entrepreneurshipDecContents.kpi2 > '19' && entrepreneurshipDecContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipDecContents.kpi2 > '25.33333333' && entrepreneurshipDecContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipDecContents.kpi2 >= '31.66666667' && entrepreneurshipDecContents.kpi2 < '38')?'green':(entrepreneurshipDecContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi3 == null)?'grey-2':(entrepreneurshipDecContents.kpi3 >= '0' && entrepreneurshipDecContents.kpi3 <= '15')?'red':(entrepreneurshipDecContents.kpi3 > '15' && entrepreneurshipDecContents.kpi3 <= '20')?'orange':(entrepreneurshipDecContents.kpi3 > '20' && entrepreneurshipDecContents.kpi3 < '25')?'yellow-7':(entrepreneurshipDecContents.kpi3 >= '25' && entrepreneurshipDecContents.kpi3 < '30')?'green':(entrepreneurshipDecContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi4 == null)?'grey-2':(entrepreneurshipDecContents.kpi4 >= '0' && entrepreneurshipDecContents.kpi4 <= '3')?'red':(entrepreneurshipDecContents.kpi4 > '3' && entrepreneurshipDecContents.kpi4 <= '4')?'orange':(entrepreneurshipDecContents.kpi4 > '4' && entrepreneurshipDecContents.kpi4 < '5')?'yellow-7':(entrepreneurshipDecContents.kpi4 >= '5' && entrepreneurshipDecContents.kpi4 < '6')?'green':(entrepreneurshipDecContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <!--TABLE DONE-->
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/images/rrcrc-logo_1200x300.png"></q-img>
                      </q-card-section>
                    </q-card>
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Budget Usage (Cumulative)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('gauge')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="gauge" :option="gaugeNovOptions" :resizable="true" style="height:315px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section>
                        <div class="text-h6">Expense Categories (Monthly)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="pie" :option="pieNovOptions" :resizable="true" style="height:465px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
                <div class="row q-col-gutter-sm q-mt-xs">
                  <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Process Chart
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('line')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="line" :option="lineChartOption" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
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
                        <IEcharts :option="barOptions" ref="bar" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>  
            </q-tab-panel>

            <q-tab-panel name="december">
              <div class="text-h4 q-mb-md">{{$route.name}}&ensp;|&ensp;December </div>
                <div class="row q-col-gutter-sm">
                  <!--TABLE-->
                  <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <q-card>
                      <q-list dense class="rounded-borders" >
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >Months</q-item-label>
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 1
                                <q-tooltip># Clients (Unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># Contacts</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 4
                                <q-tooltip>Activities (#)</q-tooltip>
                              </q-chip>        
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi1 == null)?'grey-2':(entrepreneurshipJanContents.kpi1 >= '0' && entrepreneurshipJanContents.kpi1 <= '13.4')?'red':(entrepreneurshipJanContents.kpi1 > '13.4' && entrepreneurshipJanContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJanContents.kpi1 > '17.86666667' && entrepreneurshipJanContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJanContents.kpi1 >= '22.33333333' && entrepreneurshipJanContents.kpi1 < '26.8')?'green':(entrepreneurshipJanContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi2 == null)?'grey-2':(entrepreneurshipJanContents.kpi2 >= '0' && entrepreneurshipJanContents.kpi2 <= '19')?'red':(entrepreneurshipJanContents.kpi2 > '19' && entrepreneurshipJanContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJanContents.kpi2 > '25.33333333' && entrepreneurshipJanContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJanContents.kpi2 >= '31.66666667' && entrepreneurshipJanContents.kpi2 < '38')?'green':(entrepreneurshipJanContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi3 == null)?'grey-2':(entrepreneurshipJanContents.kpi3 >= '0' && entrepreneurshipJanContents.kpi3 <= '15')?'red':(entrepreneurshipJanContents.kpi3 > '15' && entrepreneurshipJanContents.kpi3 <= '20')?'orange':(entrepreneurshipJanContents.kpi3 > '20' && entrepreneurshipJanContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJanContents.kpi3 >= '25' && entrepreneurshipJanContents.kpi3 < '30')?'green':(entrepreneurshipJanContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJanContents.kpi4 == null)?'grey-2':(entrepreneurshipJanContents.kpi4 >= '0' && entrepreneurshipJanContents.kpi4 <= '3')?'red':(entrepreneurshipJanContents.kpi4 > '3' && entrepreneurshipJanContents.kpi4 <= '4')?'orange':(entrepreneurshipJanContents.kpi4 > '4' && entrepreneurshipJanContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJanContents.kpi4 >= '5' && entrepreneurshipJanContents.kpi4 < '6')?'green':(entrepreneurshipJanContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>  
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >February</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi1 == null)?'grey-2':(entrepreneurshipFebContents.kpi1 >= '0' && entrepreneurshipFebContents.kpi1 <= '13.4')?'red':(entrepreneurshipFebContents.kpi1 > '13.4' && entrepreneurshipFebContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipFebContents.kpi1 > '17.86666667' && entrepreneurshipFebContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipFebContents.kpi1 >= '22.33333333' && entrepreneurshipFebContents.kpi1 < '26.8')?'green':(entrepreneurshipFebContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi2 == null)?'grey-2':(entrepreneurshipFebContents.kpi2 >= '0' && entrepreneurshipFebContents.kpi2 <= '19')?'red':(entrepreneurshipFebContents.kpi2 > '19' && entrepreneurshipFebContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipFebContents.kpi2 > '25.33333333' && entrepreneurshipFebContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipFebContents.kpi2 >= '31.66666667' && entrepreneurshipFebContents.kpi2 < '38')?'green':(entrepreneurshipFebContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi3 == null)?'grey-2':(entrepreneurshipFebContents.kpi3 >= '0' && entrepreneurshipFebContents.kpi3 <= '15')?'red':(entrepreneurshipFebContents.kpi3 > '15' && entrepreneurshipFebContents.kpi3 <= '20')?'orange':(entrepreneurshipFebContents.kpi3 > '20' && entrepreneurshipFebContents.kpi3 < '25')?'yellow-7':(entrepreneurshipFebContents.kpi3 >= '25' && entrepreneurshipFebContents.kpi3 < '30')?'green':(entrepreneurshipFebContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipFebContents.kpi4 == null)?'grey-2':(entrepreneurshipFebContents.kpi4 >= '0' && entrepreneurshipFebContents.kpi4 <= '3')?'red':(entrepreneurshipFebContents.kpi4 > '3' && entrepreneurshipFebContents.kpi4 <= '4')?'orange':(entrepreneurshipFebContents.kpi4 > '4' && entrepreneurshipFebContents.kpi4 < '5')?'yellow-7':(entrepreneurshipFebContents.kpi4 >= '5' && entrepreneurshipFebContents.kpi4 < '6')?'green':(entrepreneurshipFebContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >March</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi1 == null)?'grey-2':(entrepreneurshipMarContents.kpi1 >= '0' && entrepreneurshipMarContents.kpi1 <= '13.4')?'red':(entrepreneurshipMarContents.kpi1 > '13.4' && entrepreneurshipMarContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMarContents.kpi1 > '17.86666667' && entrepreneurshipMarContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMarContents.kpi1 >= '22.33333333' && entrepreneurshipMarContents.kpi1 < '26.8')?'green':(entrepreneurshipMarContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi2 == null)?'grey-2':(entrepreneurshipMarContents.kpi2 >= '0' && entrepreneurshipMarContents.kpi2 <= '19')?'red':(entrepreneurshipMarContents.kpi2 > '19' && entrepreneurshipMarContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMarContents.kpi2 > '25.33333333' && entrepreneurshipMarContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMarContents.kpi2 >= '31.66666667' && entrepreneurshipMarContents.kpi2 < '38')?'green':(entrepreneurshipMarContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi3 == null)?'grey-2':(entrepreneurshipMarContents.kpi3 >= '0' && entrepreneurshipMarContents.kpi3 <= '15')?'red':(entrepreneurshipMarContents.kpi3 > '15' && entrepreneurshipMarContents.kpi3 <= '20')?'orange':(entrepreneurshipMarContents.kpi3 > '20' && entrepreneurshipMarContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMarContents.kpi3 >= '25' && entrepreneurshipMarContents.kpi3 < '30')?'green':(entrepreneurshipMarContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMarContents.kpi4 == null)?'grey-2':(entrepreneurshipMarContents.kpi4 >= '0' && entrepreneurshipMarContents.kpi4 <= '3')?'red':(entrepreneurshipMarContents.kpi4 > '3' && entrepreneurshipMarContents.kpi4 <= '4')?'orange':(entrepreneurshipMarContents.kpi4 > '4' && entrepreneurshipMarContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMarContents.kpi4 >= '5' && entrepreneurshipMarContents.kpi4 < '6')?'green':(entrepreneurshipMarContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >April</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi1 == null)?'grey-2':(entrepreneurshipAprContents.kpi1 >= '0' && entrepreneurshipAprContents.kpi1 <= '13.4')?'red':(entrepreneurshipAprContents.kpi1 > '13.4' && entrepreneurshipAprContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAprContents.kpi1 > '17.86666667' && entrepreneurshipAprContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAprContents.kpi1 >= '22.33333333' && entrepreneurshipAprContents.kpi1 < '26.8')?'green':(entrepreneurshipAprContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi2 == null)?'grey-2':(entrepreneurshipAprContents.kpi2 >= '0' && entrepreneurshipAprContents.kpi2 <= '19')?'red':(entrepreneurshipAprContents.kpi2 > '19' && entrepreneurshipAprContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAprContents.kpi2 > '25.33333333' && entrepreneurshipAprContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAprContents.kpi2 >= '31.66666667' && entrepreneurshipAprContents.kpi2 < '38')?'green':(entrepreneurshipAprContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi3 == null)?'grey-2':(entrepreneurshipAprContents.kpi3 >= '0' && entrepreneurshipAprContents.kpi3 <= '15')?'red':(entrepreneurshipAprContents.kpi3 > '15' && entrepreneurshipAprContents.kpi3 <= '20')?'orange':(entrepreneurshipAprContents.kpi3 > '20' && entrepreneurshipAprContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAprContents.kpi3 >= '25' && entrepreneurshipAprContents.kpi3 < '30')?'green':(entrepreneurshipAprContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAprContents.kpi4 == null)?'grey-2':(entrepreneurshipAprContents.kpi4 >= '0' && entrepreneurshipAprContents.kpi4 <= '3')?'red':(entrepreneurshipAprContents.kpi4 > '3' && entrepreneurshipAprContents.kpi4 <= '4')?'orange':(entrepreneurshipAprContents.kpi4 > '4' && entrepreneurshipAprContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAprContents.kpi4 >= '5' && entrepreneurshipAprContents.kpi4 < '6')?'green':(entrepreneurshipAprContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >May</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi1 == null)?'grey-2':(entrepreneurshipMayContents.kpi1 >= '0' && entrepreneurshipMayContents.kpi1 <= '13.4')?'red':(entrepreneurshipMayContents.kpi1 > '13.4' && entrepreneurshipMayContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipMayContents.kpi1 > '17.86666667' && entrepreneurshipMayContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipMayContents.kpi1 >= '22.33333333' && entrepreneurshipMayContents.kpi1 < '26.8')?'green':(entrepreneurshipMayContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi2 == null)?'grey-2':(entrepreneurshipMayContents.kpi2 >= '0' && entrepreneurshipMayContents.kpi2 <= '19')?'red':(entrepreneurshipMayContents.kpi2 > '19' && entrepreneurshipMayContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipMayContents.kpi2 > '25.33333333' && entrepreneurshipMayContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipMayContents.kpi2 >= '31.66666667' && entrepreneurshipMayContents.kpi2 < '38')?'green':(entrepreneurshipMayContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi3 == null)?'grey-2':(entrepreneurshipMayContents.kpi3 >= '0' && entrepreneurshipMayContents.kpi3 <= '15')?'red':(entrepreneurshipMayContents.kpi3 > '15' && entrepreneurshipMayContents.kpi3 <= '20')?'orange':(entrepreneurshipMayContents.kpi3 > '20' && entrepreneurshipMayContents.kpi3 < '25')?'yellow-7':(entrepreneurshipMayContents.kpi3 >= '25' && entrepreneurshipMayContents.kpi3 < '30')?'green':(entrepreneurshipMayContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipMayContents.kpi4 == null)?'grey-2':(entrepreneurshipMayContents.kpi4 >= '0' && entrepreneurshipMayContents.kpi4 <= '3')?'red':(entrepreneurshipMayContents.kpi4 > '3' && entrepreneurshipMayContents.kpi4 <= '4')?'orange':(entrepreneurshipMayContents.kpi4 > '4' && entrepreneurshipMayContents.kpi4 < '5')?'yellow-7':(entrepreneurshipMayContents.kpi4 >= '5' && entrepreneurshipMayContents.kpi4 < '6')?'green':(entrepreneurshipMayContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >June</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi1 == null)?'grey-2':(entrepreneurshipJunContents.kpi1 >= '0' && entrepreneurshipJunContents.kpi1 <= '13.4')?'red':(entrepreneurshipJunContents.kpi1 > '13.4' && entrepreneurshipJunContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJunContents.kpi1 > '17.86666667' && entrepreneurshipJunContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJunContents.kpi1 >= '22.33333333' && entrepreneurshipJunContents.kpi1 < '26.8')?'green':(entrepreneurshipJunContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi2 == null)?'grey-2':(entrepreneurshipJunContents.kpi2 >= '0' && entrepreneurshipJunContents.kpi2 <= '19')?'red':(entrepreneurshipJunContents.kpi2 > '19' && entrepreneurshipJunContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJunContents.kpi2 > '25.33333333' && entrepreneurshipJunContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJunContents.kpi2 >= '31.66666667' && entrepreneurshipJunContents.kpi2 < '38')?'green':(entrepreneurshipJunContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi3 == null)?'grey-2':(entrepreneurshipJunContents.kpi3 >= '0' && entrepreneurshipJunContents.kpi3 <= '15')?'red':(entrepreneurshipJunContents.kpi3 > '15' && entrepreneurshipJunContents.kpi3 <= '20')?'orange':(entrepreneurshipJunContents.kpi3 > '20' && entrepreneurshipJunContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJunContents.kpi3 >= '25' && entrepreneurshipJunContents.kpi3 < '30')?'green':(entrepreneurshipJunContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJunContents.kpi4 == null)?'grey-2':(entrepreneurshipJunContents.kpi4 >= '0' && entrepreneurshipJunContents.kpi4 <= '3')?'red':(entrepreneurshipJunContents.kpi4 > '3' && entrepreneurshipJunContents.kpi4 <= '4')?'orange':(entrepreneurshipJunContents.kpi4 > '4' && entrepreneurshipJunContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJunContents.kpi4 >= '5' && entrepreneurshipJunContents.kpi4 < '6')?'green':(entrepreneurshipJunContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >July</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi1 == null)?'grey-2':(entrepreneurshipJulContents.kpi1 >= '0' && entrepreneurshipJulContents.kpi1 <= '13.4')?'red':(entrepreneurshipJulContents.kpi1 > '13.4' && entrepreneurshipJulContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipJulContents.kpi1 > '17.86666667' && entrepreneurshipJulContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipJulContents.kpi1 >= '22.33333333' && entrepreneurshipJulContents.kpi1 < '26.8')?'green':(entrepreneurshipJulContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi2 == null)?'grey-2':(entrepreneurshipJulContents.kpi2 >= '0' && entrepreneurshipJulContents.kpi2 <= '19')?'red':(entrepreneurshipJulContents.kpi2 > '19' && entrepreneurshipJulContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipJulContents.kpi2 > '25.33333333' && entrepreneurshipJulContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipJulContents.kpi2 >= '31.66666667' && entrepreneurshipJulContents.kpi2 < '38')?'green':(entrepreneurshipJulContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi3 == null)?'grey-2':(entrepreneurshipJulContents.kpi3 >= '0' && entrepreneurshipJulContents.kpi3 <= '15')?'red':(entrepreneurshipJulContents.kpi3 > '15' && entrepreneurshipJulContents.kpi3 <= '20')?'orange':(entrepreneurshipJulContents.kpi3 > '20' && entrepreneurshipJulContents.kpi3 < '25')?'yellow-7':(entrepreneurshipJulContents.kpi3 >= '25' && entrepreneurshipJulContents.kpi3 < '30')?'green':(entrepreneurshipJulContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipJulContents.kpi4 == null)?'grey-2':(entrepreneurshipJulContents.kpi4 >= '0' && entrepreneurshipJulContents.kpi4 <= '3')?'red':(entrepreneurshipJulContents.kpi4 > '3' && entrepreneurshipJulContents.kpi4 <= '4')?'orange':(entrepreneurshipJulContents.kpi4 > '4' && entrepreneurshipJulContents.kpi4 < '5')?'yellow-7':(entrepreneurshipJulContents.kpi4 >= '5' && entrepreneurshipJulContents.kpi4 < '6')?'green':(entrepreneurshipJulContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >August</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi1 == null)?'grey-2':(entrepreneurshipAugContents.kpi1 >= '0' && entrepreneurshipAugContents.kpi1 <= '13.4')?'red':(entrepreneurshipAugContents.kpi1 > '13.4' && entrepreneurshipAugContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipAugContents.kpi1 > '17.86666667' && entrepreneurshipAugContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipAugContents.kpi1 >= '22.33333333' && entrepreneurshipAugContents.kpi1 < '26.8')?'green':(entrepreneurshipAugContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi2 == null)?'grey-2':(entrepreneurshipAugContents.kpi2 >= '0' && entrepreneurshipAugContents.kpi2 <= '19')?'red':(entrepreneurshipAugContents.kpi2 > '19' && entrepreneurshipAugContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipAugContents.kpi2 > '25.33333333' && entrepreneurshipAugContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipAugContents.kpi2 >= '31.66666667' && entrepreneurshipAugContents.kpi2 < '38')?'green':(entrepreneurshipAugContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi3 == null)?'grey-2':(entrepreneurshipAugContents.kpi3 >= '0' && entrepreneurshipAugContents.kpi3 <= '15')?'red':(entrepreneurshipAugContents.kpi3 > '15' && entrepreneurshipAugContents.kpi3 <= '20')?'orange':(entrepreneurshipAugContents.kpi3 > '20' && entrepreneurshipAugContents.kpi3 < '25')?'yellow-7':(entrepreneurshipAugContents.kpi3 >= '25' && entrepreneurshipAugContents.kpi3 < '30')?'green':(entrepreneurshipAugContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipAugContents.kpi4 == null)?'grey-2':(entrepreneurshipAugContents.kpi4 >= '0' && entrepreneurshipAugContents.kpi4 <= '3')?'red':(entrepreneurshipAugContents.kpi4 > '3' && entrepreneurshipAugContents.kpi4 <= '4')?'orange':(entrepreneurshipAugContents.kpi4 > '4' && entrepreneurshipAugContents.kpi4 < '5')?'yellow-7':(entrepreneurshipAugContents.kpi4 >= '5' && entrepreneurshipAugContents.kpi4 < '6')?'green':(entrepreneurshipAugContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >September</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi1 == null)?'grey-2':(entrepreneurshipSepContents.kpi1 >= '0' && entrepreneurshipSepContents.kpi1 <= '13.4')?'red':(entrepreneurshipSepContents.kpi1 > '13.4' && entrepreneurshipSepContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipSepContents.kpi1 > '17.86666667' && entrepreneurshipSepContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipSepContents.kpi1 >= '22.33333333' && entrepreneurshipSepContents.kpi1 < '26.8')?'green':(entrepreneurshipSepContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi2 == null)?'grey-2':(entrepreneurshipSepContents.kpi2 >= '0' && entrepreneurshipSepContents.kpi2 <= '19')?'red':(entrepreneurshipSepContents.kpi2 > '19' && entrepreneurshipSepContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipSepContents.kpi2 > '25.33333333' && entrepreneurshipSepContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipSepContents.kpi2 >= '31.66666667' && entrepreneurshipSepContents.kpi2 < '38')?'green':(entrepreneurshipSepContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi3 == null)?'grey-2':(entrepreneurshipSepContents.kpi3 >= '0' && entrepreneurshipSepContents.kpi3 <= '15')?'red':(entrepreneurshipSepContents.kpi3 > '15' && entrepreneurshipSepContents.kpi3 <= '20')?'orange':(entrepreneurshipSepContents.kpi3 > '20' && entrepreneurshipSepContents.kpi3 < '25')?'yellow-7':(entrepreneurshipSepContents.kpi3 >= '25' && entrepreneurshipSepContents.kpi3 < '30')?'green':(entrepreneurshipSepContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipSepContents.kpi4 == null)?'grey-2':(entrepreneurshipSepContents.kpi4 >= '0' && entrepreneurshipSepContents.kpi4 <= '3')?'red':(entrepreneurshipSepContents.kpi4 > '3' && entrepreneurshipSepContents.kpi4 <= '4')?'orange':(entrepreneurshipSepContents.kpi4 > '4' && entrepreneurshipSepContents.kpi4 < '5')?'yellow-7':(entrepreneurshipSepContents.kpi4 >= '5' && entrepreneurshipSepContents.kpi4 < '6')?'green':(entrepreneurshipSepContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>  
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >October</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi1 == null)?'grey-2':(entrepreneurshipOctContents.kpi1 >= '0' && entrepreneurshipOctContents.kpi1 <= '13.4')?'red':(entrepreneurshipOctContents.kpi1 > '13.4' && entrepreneurshipOctContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipOctContents.kpi1 > '17.86666667' && entrepreneurshipOctContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipOctContents.kpi1 >= '22.33333333' && entrepreneurshipOctContents.kpi1 < '26.8')?'green':(entrepreneurshipOctContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi2 == null)?'grey-2':(entrepreneurshipOctContents.kpi2 >= '0' && entrepreneurshipOctContents.kpi2 <= '19')?'red':(entrepreneurshipOctContents.kpi2 > '19' && entrepreneurshipOctContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipOctContents.kpi2 > '25.33333333' && entrepreneurshipOctContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipOctContents.kpi2 >= '31.66666667' && entrepreneurshipOctContents.kpi2 < '38')?'green':(entrepreneurshipOctContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi3 == null)?'grey-2':(entrepreneurshipOctContents.kpi3 >= '0' && entrepreneurshipOctContents.kpi3 <= '15')?'red':(entrepreneurshipOctContents.kpi3 > '15' && entrepreneurshipOctContents.kpi3 <= '20')?'orange':(entrepreneurshipOctContents.kpi3 > '20' && entrepreneurshipOctContents.kpi3 < '25')?'yellow-7':(entrepreneurshipOctContents.kpi3 >= '25' && entrepreneurshipOctContents.kpi3 < '30')?'green':(entrepreneurshipOctContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipOctContents.kpi4 == null)?'grey-2':(entrepreneurshipOctContents.kpi4 >= '0' && entrepreneurshipOctContents.kpi4 <= '3')?'red':(entrepreneurshipOctContents.kpi4 > '3' && entrepreneurshipOctContents.kpi4 <= '4')?'orange':(entrepreneurshipOctContents.kpi4 > '4' && entrepreneurshipOctContents.kpi4 < '5')?'yellow-7':(entrepreneurshipOctContents.kpi4 >= '5' && entrepreneurshipOctContents.kpi4 < '6')?'green':(entrepreneurshipOctContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >November</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi1 == null)?'grey-2':(entrepreneurshipNovContents.kpi1 >= '0' && entrepreneurshipNovContents.kpi1 <= '13.4')?'red':(entrepreneurshipNovContents.kpi1 > '13.4' && entrepreneurshipNovContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipNovContents.kpi1 > '17.86666667' && entrepreneurshipNovContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipNovContents.kpi1 >= '22.33333333' && entrepreneurshipNovContents.kpi1 < '26.8')?'green':(entrepreneurshipNovContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi2 == null)?'grey-2':(entrepreneurshipNovContents.kpi2 >= '0' && entrepreneurshipNovContents.kpi2 <= '19')?'red':(entrepreneurshipNovContents.kpi2 > '19' && entrepreneurshipNovContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipNovContents.kpi2 > '25.33333333' && entrepreneurshipNovContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipNovContents.kpi2 >= '31.66666667' && entrepreneurshipNovContents.kpi2 < '38')?'green':(entrepreneurshipNovContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi3 == null)?'grey-2':(entrepreneurshipNovContents.kpi3 >= '0' && entrepreneurshipNovContents.kpi3 <= '15')?'red':(entrepreneurshipNovContents.kpi3 > '15' && entrepreneurshipNovContents.kpi3 <= '20')?'orange':(entrepreneurshipNovContents.kpi3 > '20' && entrepreneurshipNovContents.kpi3 < '25')?'yellow-7':(entrepreneurshipNovContents.kpi3 >= '25' && entrepreneurshipNovContents.kpi3 < '30')?'green':(entrepreneurshipNovContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipNovContents.kpi4 == null)?'grey-2':(entrepreneurshipNovContents.kpi4 >= '0' && entrepreneurshipNovContents.kpi4 <= '3')?'red':(entrepreneurshipNovContents.kpi4 > '3' && entrepreneurshipNovContents.kpi4 <= '4')?'orange':(entrepreneurshipNovContents.kpi4 > '4' && entrepreneurshipNovContents.kpi4 < '5')?'yellow-7':(entrepreneurshipNovContents.kpi4 >= '5' && entrepreneurshipNovContents.kpi4 < '6')?'green':(entrepreneurshipNovContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >December</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi1 == null)?'grey-2':(entrepreneurshipDecContents.kpi1 >= '0' && entrepreneurshipDecContents.kpi1 <= '13.4')?'red':(entrepreneurshipDecContents.kpi1 > '13.4' && entrepreneurshipDecContents.kpi1 <= '17.86666667')?'orange':(entrepreneurshipDecContents.kpi1 > '17.86666667' && entrepreneurshipDecContents.kpi1 < '22.33333333')?'yellow-7':(entrepreneurshipDecContents.kpi1 >= '22.33333333' && entrepreneurshipDecContents.kpi1 < '26.8')?'green':(entrepreneurshipDecContents.kpi1 >= '26.8'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi2 == null)?'grey-2':(entrepreneurshipDecContents.kpi2 >= '0' && entrepreneurshipDecContents.kpi2 <= '19')?'red':(entrepreneurshipDecContents.kpi2 > '19' && entrepreneurshipDecContents.kpi2 <= '25.33333333')?'orange':(entrepreneurshipDecContents.kpi2 > '25.33333333' && entrepreneurshipDecContents.kpi2 < '31.66666667')?'yellow-7':(entrepreneurshipDecContents.kpi2 >= '31.66666667' && entrepreneurshipDecContents.kpi2 < '38')?'green':(entrepreneurshipDecContents.kpi2 >= '38'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi3 == null)?'grey-2':(entrepreneurshipDecContents.kpi3 >= '0' && entrepreneurshipDecContents.kpi3 <= '15')?'red':(entrepreneurshipDecContents.kpi3 > '15' && entrepreneurshipDecContents.kpi3 <= '20')?'orange':(entrepreneurshipDecContents.kpi3 > '20' && entrepreneurshipDecContents.kpi3 < '25')?'yellow-7':(entrepreneurshipDecContents.kpi3 >= '25' && entrepreneurshipDecContents.kpi3 < '30')?'green':(entrepreneurshipDecContents.kpi3 >= '30'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(entrepreneurshipDecContents.kpi4 == null)?'grey-2':(entrepreneurshipDecContents.kpi4 >= '0' && entrepreneurshipDecContents.kpi4 <= '3')?'red':(entrepreneurshipDecContents.kpi4 > '3' && entrepreneurshipDecContents.kpi4 <= '4')?'orange':(entrepreneurshipDecContents.kpi4 > '4' && entrepreneurshipDecContents.kpi4 < '5')?'yellow-7':(entrepreneurshipDecContents.kpi4 >= '5' && entrepreneurshipDecContents.kpi4 < '6')?'green':(entrepreneurshipDecContents.kpi4 >= '6'?'blue':'grey-2')"
                            >
                            {{entrepreneurshipDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section> 
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <!--TABLE DONE-->
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/images/rrcrc-logo_1200x300.png"></q-img>
                      </q-card-section>
                    </q-card>
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Budget Usage (Cumulative)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('gauge')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="gauge" :option="gaugeDecOptions" :resizable="true" style="height:315px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section>
                        <div class="text-h6">Expense Categories (Monthly)
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('pie')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="pie" :option="pieDecOptions" :resizable="true" style="height:465px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>
                <div class="row q-col-gutter-sm q-mt-xs">
                  <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="">
                      <q-card-section class="row">
                        <div class="text-h6 col-12">Process Chart
                          <q-btn flat dense icon="fas fa-download" class="float-right" @click="SaveImage('line')"
                                :color="!$q.dark.isActive? 'grey-8':'white'">
                            <q-tooltip>Download</q-tooltip>
                          </q-btn>
                        </div>
                      </q-card-section>
                      <q-separator inset></q-separator>
                      <q-card-section>
                        <IEcharts ref="line" :option="lineChartOption" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                  <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
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
                        <IEcharts :option="barOptions" ref="bar" :resizable="true" style="height:250px"/>
                      </q-card-section>
                    </q-card>
                  </div>
                </div>  
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
    import db from 'src/boot/firebase';
    import MeaningofColors from 'src/components/meaningofColors.vue';

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
        components: { MeaningofColors },
        data() {
            return{
              tab: 'january',
              entrepreneurshipJanContent: {
                
              },
              entrepreneurshipJanContents : [],
              entrepreneurshipFebContent: {
                kpi1: null,
                kpi2: null,
                kpi3: null,
                kpi4: null,
                kpi5: null,
                kpi6: null,
                budgetUsage: null,
                actualBudget: null,
                expenseCategory1: '',
                perCategory1: null,
                expenseCategory2: '',
                perCategory2: null,
                expenseCategory3: '',
                perCategory3: null,
                expenseCategory4: '',
                perCategory4: null,
                expenses: null,
                revenues: null,
                uniqueVolunteers: null,
                volunteerHours: null,
              },
              entrepreneurshipFebContents : [],
              entrepreneurshipMarContent: {
                kpi1: null,
                kpi2: null,
                kpi3: null,
                kpi4: null,
                kpi5: null,
                kpi6: null,
                budgetUsage: null,
                actualBudget: null,
                expenseCategory1: '',
                perCategory1: null,
                expenseCategory2: '',
                perCategory2: null,
                expenseCategory3: '',
                perCategory3: null,
                expenseCategory4: '',
                perCategory4: null,
                expenses: null,
                revenues: null,
                uniqueVolunteers: null,
                volunteerHours: null,
              },
              entrepreneurshipMarContents : [],
              entrepreneurshipAprContent: {
                kpi1: null,
                kpi2: null,
                kpi3: null,
                kpi4: null,
                kpi5: null,
                kpi6: null,
                budgetUsage: null,
                actualBudget: null,
                expenseCategory1: '',
                perCategory1: null,
                expenseCategory2: '',
                perCategory2: null,
                expenseCategory3: '',
                perCategory3: null,
                expenseCategory4: '',
                perCategory4: null,
                expenses: null,
                revenues: null,
                uniqueVolunteers: null,
                volunteerHours: null,
              },
              entrepreneurshipAprContents : [],
              entrepreneurshipMayContent: {
                kpi1: null,
                kpi2: null,
                kpi3: null,
                kpi4: null,
                kpi5: null,
                kpi6: null,
                budgetUsage: null,
                actualBudget: null,
                expenseCategory1: '',
                perCategory1: null,
                expenseCategory2: '',
                perCategory2: null,
                expenseCategory3: '',
                perCategory3: null,
                expenseCategory4: '',
                perCategory4: null,
                expenses: null,
                revenues: null,
                uniqueVolunteers: null,
                volunteerHours: null,
              },
              entrepreneurshipMayContents : [],
              entrepreneurshipJunContent: {
                kpi1: null,
                kpi2: null,
                kpi3: null,
                kpi4: null,
                kpi5: null,
                kpi6: null,
                budgetUsage: null,
                actualBudget: null,
                expenseCategory1: '',
                perCategory1: null,
                expenseCategory2: '',
                perCategory2: null,
                expenseCategory3: '',
                perCategory3: null,
                expenseCategory4: '',
                perCategory4: null,
                expenses: null,
                revenues: null,
                uniqueVolunteers: null,
                volunteerHours: null,
              },
              entrepreneurshipJunContents : [],
              entrepreneurshipJulContent: {
                kpi1: null,
                kpi2: null,
                kpi3: null,
                kpi4: null,
                kpi5: null,
                kpi6: null,
                budgetUsage: null,
                actualBudget: null,
                expenseCategory1: '',
                perCategory1: null,
                expenseCategory2: '',
                perCategory2: null,
                expenseCategory3: '',
                perCategory3: null,
                expenseCategory4: '',
                perCategory4: null,
                expenses: null,
                revenues: null,
                uniqueVolunteers: null,
                volunteerHours: null,
              },
              entrepreneurshipJulContents : [],
              entrepreneurshipAugContent: {
                kpi1: null,
                kpi2: null,
                kpi3: null,
                kpi4: null,
                kpi5: null,
                kpi6: null,
                budgetUsage: null,
                actualBudget: null,
                expenseCategory1: '',
                perCategory1: null,
                expenseCategory2: '',
                perCategory2: null,
                expenseCategory3: '',
                perCategory3: null,
                expenseCategory4: '',
                perCategory4: null,
                expenses: null,
                revenues: null,
                uniqueVolunteers: null,
                volunteerHours: null,
              },
              entrepreneurshipAugContents : [],
              entrepreneurshipSepContent: {
                kpi1: null,
                kpi2: null,
                kpi3: null,
                kpi4: null,
                kpi5: null,
                kpi6: null,
                budgetUsage: null,
                actualBudget: null,
                expenseCategory1: '',
                perCategory1: null,
                expenseCategory2: '',
                perCategory2: null,
                expenseCategory3: '',
                perCategory3: null,
                expenseCategory4: '',
                perCategory4: null,
                expenses: null,
                revenues: null,
                uniqueVolunteers: null,
                volunteerHours: null,
              },
              entrepreneurshipSepContents : [],
              entrepreneurshipOctContent: {
                kpi1: null,
                kpi2: null,
                kpi3: null,
                kpi4: null,
                kpi5: null,
                kpi6: null,
                budgetUsage: null,
                actualBudget: null,
                expenseCategory1: '',
                perCategory1: null,
                expenseCategory2: '',
                perCategory2: null,
                expenseCategory3: '',
                perCategory3: null,
                expenseCategory4: '',
                perCategory4: null,
                expenses: null,
                revenues: null,
                uniqueVolunteers: null,
                volunteerHours: null,
              },
              entrepreneurshipOctContents : [],
              entrepreneurshipNovContent: {
                kpi1: null,
                kpi2: null,
                kpi3: null,
                kpi4: null,
                kpi5: null,
                kpi6: null,
                budgetUsage: null,
                actualBudget: null,
                expenseCategory1: '',
                perCategory1: null,
                expenseCategory2: '',
                perCategory2: null,
                expenseCategory3: '',
                perCategory3: null,
                expenseCategory4: '',
                perCategory4: null,
                expenses: null,
                revenues: null,
                uniqueVolunteers: null,
                volunteerHours: null,
              },
              entrepreneurshipNovContents : [],
              entrepreneurshipDecContent: {
                kpi1: null,
                kpi2: null,
                kpi3: null,
                kpi4: null,
                kpi5: null,
                kpi6: null,
                budgetUsage: null,
                actualBudget: null,
                expenseCategory1: '',
                perCategory1: null,
                expenseCategory2: '',
                perCategory2: null,
                expenseCategory3: '',
                perCategory3: null,
                expenseCategory4: '',
                perCategory4: null,
                expenses: null,
                revenues: null,
                uniqueVolunteers: null,
                volunteerHours: null,
              },
              entrepreneurshipDecContents : []


            }
        },
        computed: {
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
                            {time_period: 'January', expenses: this.entrepreneurshipJanContents.expenses, revenues: this.entrepreneurshipJanContents.revenues},
                            {time_period: 'February', expenses: this.entrepreneurshipFebContents.expenses, revenues: this.entrepreneurshipFebContents.revenues},
                            {time_period: 'March', expenses: this.entrepreneurshipMarContents.expenses, revenues: this.entrepreneurshipMarContents.revenues},
                            {time_period: 'April', expenses: this.entrepreneurshipAprContents.expenses, revenues: this.entrepreneurshipAprContents.revenues},
                            {time_period: 'May', expenses: this.entrepreneurshipMayContents.expenses, revenues: this.entrepreneurshipMayContents.revenues},
                            {time_period: 'June', expenses: this.entrepreneurshipJunContents.expenses, revenues: this.entrepreneurshipJunContents.revenues},
                            {time_period: 'July', expenses: this.entrepreneurshipJulContents.expenses, revenues: this.entrepreneurshipJulContents.revenues},
                            {time_period: 'August', expenses: this.entrepreneurshipAugContents.expenses, revenues: this.entrepreneurshipAugContents.revenues},
                            {time_period: 'September', expenses: this.entrepreneurshipSepContents.expenses, revenues: this.entrepreneurshipSepContents.revenues},
                            {time_period: 'October', expenses: this.entrepreneurshipOctContents.expenses, revenues: this.entrepreneurshipOctContents.revenues},
                            {time_period: 'November', expenses: this.entrepreneurshipNovContents.expenses, revenues: this.entrepreneurshipNovContents.revenues},
                            {time_period: 'December',expenses: this.entrepreneurshipDecContents.expenses, revenues: this.entrepreneurshipDecContents.revenues }
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
            lineChartOption() {
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
                    tooltip: {
                      // formatter:
                      //     function (param) {
                      //     console.log(param)
                      //     // return param.seriesName + '<br />' + param.name + ': ';
                      // }
                    },
                    dataset: {
                        dimensions: ['months', 'kpi1', 'kpi2', 'kpi3', 'kpi4', 'uniqueVol', 'volHours'],
                        source: [
                            //{months: 'January', kpi1: 0, kpi2: 0, kpi3: 0, kpi4: 0, uniqueVol: 0, volHours: 0},
                            {months: 'January', kpi1: this.entrepreneurshipJanContents.kpi1, kpi2: this.entrepreneurshipJanContents.kpi2, kpi3: this.entrepreneurshipJanContents.kpi3, kpi4: this.entrepreneurshipJanContents.kpi4, uniqueVol: this.entrepreneurshipJanContents.uniqueVolunteers, volHours: this.entrepreneurshipJanContents.volunteerHours},
                            {months: 'February', kpi1: this.entrepreneurshipFebContents.kpi1, kpi2: this.entrepreneurshipFebContents.kpi2, kpi3: this.entrepreneurshipFebContents.kpi3, kpi4: this.entrepreneurshipFebContents.kpi4, uniqueVol: this.entrepreneurshipFebContents.uniqueVolunteers, volHours: this.entrepreneurshipFebContents.volunteerHours},
                            {months: 'March', kpi1: this.entrepreneurshipMarContents.kpi1, kpi2: this.entrepreneurshipMarContents.kpi2, kpi3: this.entrepreneurshipMarContents.kpi3, kpi4: this.entrepreneurshipMarContents.kpi4, uniqueVol: this.entrepreneurshipMarContents.uniqueVolunteers, volHours: this.entrepreneurshipMarContents.volunteerHours},
                            {months: 'April', kpi1: this.entrepreneurshipAprContents.kpi1, kpi2: this.entrepreneurshipAprContents.kpi2, kpi3: this.entrepreneurshipAprContents.kpi3, kpi4: this.entrepreneurshipAprContents.kpi4, uniqueVol: this.entrepreneurshipAprContents.uniqueVolunteers, volHours: this.entrepreneurshipAprContents.volunteerHours},
                            {months: 'May', kpi1: this.entrepreneurshipMayContents.kpi1, kpi2: this.entrepreneurshipMayContents.kpi2, kpi3: this.entrepreneurshipMayContents.kpi3, kpi4: this.entrepreneurshipMayContents.kpi4, uniqueVol: this.entrepreneurshipMayContents.uniqueVolunteers, volHours: this.entrepreneurshipMayContents.volunteerHours},
                            {months: 'June', kpi1: this.entrepreneurshipJunContents.kpi1, kpi2: this.entrepreneurshipJunContents.kpi2, kpi3: this.entrepreneurshipJunContents.kpi3, kpi4: this.entrepreneurshipJunContents.kpi4, uniqueVol: this.entrepreneurshipJunContents.uniqueVolunteers, volHours: this.entrepreneurshipJunContents.volunteerHours},
                            {months: 'July', kpi1: this.entrepreneurshipJulContents.kpi1, kpi2: this.entrepreneurshipJulContents.kpi2, kpi3: this.entrepreneurshipJulContents.kpi3, kpi4: this.entrepreneurshipJulContents.kpi4, uniqueVol: this.entrepreneurshipJulContents.uniqueVolunteers, volHours: this.entrepreneurshipJulContents.volunteerHours},
                            {months: 'August', kpi1: this.entrepreneurshipAugContents.kpi1, kpi2: this.entrepreneurshipAugContents.kpi2, kpi3: this.entrepreneurshipAugContents.kpi3, kpi4: this.entrepreneurshipAugContents.kpi4, uniqueVol: this.entrepreneurshipAugContents.uniqueVolunteers, volHours: this.entrepreneurshipAugContents.volunteerHours},
                            {months: 'September', kpi1: this.entrepreneurshipSepContents.kpi1, kpi2: this.entrepreneurshipSepContents.kpi2, kpi3: this.entrepreneurshipSepContents.kpi3, kpi4: this.entrepreneurshipSepContents.kpi4, uniqueVol: this.entrepreneurshipSepContents.uniqueVolunteers, volHours: this.entrepreneurshipSepContents.volunteerHours},
                            {months: 'October', kpi1: this.entrepreneurshipOctContents.kpi1, kpi2: this.entrepreneurshipOctContents.kpi2, kpi3: this.entrepreneurshipOctContents.kpi3, kpi4: this.entrepreneurshipOctContents.kpi4, uniqueVol: this.entrepreneurshipOctContents.uniqueVolunteers, volHours: this.entrepreneurshipOctContents.volunteerHours},
                            {months: 'November', kpi1: this.entrepreneurshipNovContents.kpi1, kpi2: this.entrepreneurshipNovContents.kpi2, kpi3: this.entrepreneurshipNovContents.kpi3, kpi4: this.entrepreneurshipNovContents.kpi4, uniqueVol: this.entrepreneurshipNovContents.uniqueVolunteers, volHours: this.entrepreneurshipNovContents.volunteerHours},
                            {months: 'December',kpi1: this.entrepreneurshipDecContents.kpi1, kpi2: this.entrepreneurshipDecContents.kpi2, kpi3: this.entrepreneurshipDecContents.kpi3, kpi4: this.entrepreneurshipDecContents.kpi4, uniqueVol: this.entrepreneurshipDecContents.uniqueVolunteers, volHours: this.entrepreneurshipDecContents.volunteerHours},
                        ]
                    },
                    xAxis: {
                        type: 'category',
                        axisLabel: {
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    yAxis: {
                        axisLabel: {
                            formatter: function (value, index) {
                                return value //+ ' %'
                            },
                            color: this.$q.dark.isActive ? 'white' : '#676767'
                        }
                    },
                    series: [
                        {type: 'line', name: 'KPI1'},
                        {type: 'line', name: 'KPI2'},
                        {type: 'line', name: 'KPI3'},
                        {type: 'line', name: 'KPI4'},
                        {type: 'line', name: 'Unique Vol.'},
                        {type: 'line', name: 'Vol. Hours'}
                    ]
                }
            },
            gaugeJanOptions() {
                return {    
                  tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                            type: 'gauge',
                            name: "Budget Usage",
                            detail: {formatter: '{value}%'},
                            data: [{value: this.entrepreneurshipJanContents.budgetUsage}],
                            min: 200,
                            max: 0,
                            radius: '100%',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: [[0.30, '#c10015'], [0.50, '#fb6b00'], [0.80, '#009688'], [1, '#388e3c']],
                                    width: 30
                                },
                            },
                        }
                    ]
                }
            },
            pieJanOptions() {
                return {
                    tooltip: {
                        show: true,
                        formatter: '{a} <br/>{b}: {c} $ ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0
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
                                {value: this.entrepreneurshipJanContents.perCategory1, name: this.entrepreneurshipJanContents.expenseCategory1},
                                {value: this.entrepreneurshipJanContents.perCategory2, name: this.entrepreneurshipJanContents.expenseCategory2},
                                {value: this.entrepreneurshipJanContents.perCategory3, name: this.entrepreneurshipJanContents.expenseCategory3},
                                {value: this.entrepreneurshipJanContents.perCategory4, name: this.entrepreneurshipJanContents.expenseCategory4},
                                {value: this.entrepreneurshipJanContents.perCategory5, name: this.entrepreneurshipJanContents.expenseCategory5},
                                {value: this.entrepreneurshipJanContents.perCategory6, name: this.entrepreneurshipJanContents.expenseCategory6}
                            ]
                        }
                    ]
                }
            },
            gaugeFebOptions() {
                return {    
                  tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                            type: 'gauge',
                            name: "Budget Usage",
                            detail: {formatter: '{value}%'},
                            data: [{value: this.entrepreneurshipFebContents.budgetUsage}],
                            min: 200,
                            max: 0,
                            radius: '100%',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: [[0.30, '#c10015'], [0.50, '#fb6b00'], [0.80, '#009688'], [1, '#388e3c']],
                                    width: 30
                                },
                            },
                        }
                    ]
                }
            },
            pieFebOptions() {
                return {
                    tooltip: {
                        show: true,
                        formatter: '{a} <br/>{b}: {c} $ ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0
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
                                {value: this.entrepreneurshipFebContents.perCategory1, name: this.entrepreneurshipFebContents.expenseCategory1},
                                {value: this.entrepreneurshipFebContents.perCategory2, name: this.entrepreneurshipFebContents.expenseCategory2},
                                {value: this.entrepreneurshipFebContents.perCategory3, name: this.entrepreneurshipFebContents.expenseCategory3},
                                {value: this.entrepreneurshipFebContents.perCategory4, name: this.entrepreneurshipFebContents.expenseCategory4},
                                {value: this.entrepreneurshipFebContents.perCategory5, name: this.entrepreneurshipFebContents.expenseCategory5},
                                {value: this.entrepreneurshipFebContents.perCategory6, name: this.entrepreneurshipFebContents.expenseCategory6}
                            ]
                        }
                    ]
                }
            },
            gaugeMarOptions() {
                return {    
                  tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                            type: 'gauge',
                            name: "Budget Usage",
                            detail: {formatter: '{value}%'},
                            data: [{value: this.entrepreneurshipMarContents.budgetUsage}],
                            min: 200,
                            max: 0,
                            radius: '100%',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: [[0.30, '#c10015'], [0.50, '#fb6b00'], [0.80, '#009688'], [1, '#388e3c']],
                                    width: 30
                                },
                            },
                        }
                    ]
                }
            },
            pieMarOptions() {
                return {
                    tooltip: {
                        show: true,
                        formatter: '{a} <br/>{b}: {c} $ ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0
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
                                {value: this.entrepreneurshipMarContents.perCategory1, name: this.entrepreneurshipMarContents.expenseCategory1},
                                {value: this.entrepreneurshipMarContents.perCategory2, name: this.entrepreneurshipMarContents.expenseCategory2},
                                {value: this.entrepreneurshipMarContents.perCategory3, name: this.entrepreneurshipMarContents.expenseCategory3},
                                {value: this.entrepreneurshipMarContents.perCategory4, name: this.entrepreneurshipMarContents.expenseCategory4},
                                {value: this.entrepreneurshipMarContents.perCategory5, name: this.entrepreneurshipMarContents.expenseCategory5},
                                {value: this.entrepreneurshipMarContents.perCategory6, name: this.entrepreneurshipMarContents.expenseCategory6}
                            ]
                        }
                    ]
                }
            },

            gaugeAprOptions() {
                return {    
                  tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                            type: 'gauge',
                            name: "Budget Usage",
                            detail: {formatter: '{value}%'},
                            data: [{value: this.entrepreneurshipAprContents.budgetUsage}],
                            min: 200,
                            max: 0,
                            radius: '100%',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: [[0.30, '#c10015'], [0.50, '#fb6b00'], [0.80, '#009688'], [1, '#388e3c']],
                                    width: 30
                                },
                            },
                        }
                    ]
                }
            },
            pieAprOptions() {
                return {
                    tooltip: {
                        show: true,
                        formatter: '{a} <br/>{b}: {c} $ ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0
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
                                {value: this.entrepreneurshipAprContents.perCategory1, name: this.entrepreneurshipAprContents.expenseCategory1},
                                {value: this.entrepreneurshipAprContents.perCategory2, name: this.entrepreneurshipAprContents.expenseCategory2},
                                {value: this.entrepreneurshipAprContents.perCategory3, name: this.entrepreneurshipAprContents.expenseCategory3},
                                {value: this.entrepreneurshipAprContents.perCategory4, name: this.entrepreneurshipAprContents.expenseCategory4},
                                {value: this.entrepreneurshipAprContents.perCategory5, name: this.entrepreneurshipAprContents.expenseCategory5},
                                {value: this.entrepreneurshipAprContents.perCategory6, name: this.entrepreneurshipAprContents.expenseCategory6}  
                            ]
                        }
                    ]
                }
            },

            gaugeMayOptions() {
                return {    
                  tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                            type: 'gauge',
                            name: "Budget Usage",
                            detail: {formatter: '{value}%'},
                            data: [{value: this.entrepreneurshipMayContents.budgetUsage}],
                            min: 200,
                            max: 0,
                            radius: '100%',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: [[0.30, '#c10015'], [0.50, '#fb6b00'], [0.80, '#009688'], [1, '#388e3c']],
                                    width: 30
                                },
                            },
                        }
                    ]
                }
            },
            pieMayOptions() {
                return {
                    tooltip: {
                        show: true,
                        formatter: '{a} <br/>{b}: {c} $ ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0
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
                                {value: this.entrepreneurshipMayContents.perCategory1, name: this.entrepreneurshipMayContents.expenseCategory1},
                                {value: this.entrepreneurshipMayContents.perCategory2, name: this.entrepreneurshipMayContents.expenseCategory2},
                                {value: this.entrepreneurshipMayContents.perCategory3, name: this.entrepreneurshipMayContents.expenseCategory3},
                                {value: this.entrepreneurshipMayContents.perCategory4, name: this.entrepreneurshipMayContents.expenseCategory4},
                                {value: this.entrepreneurshipMayContents.perCategory5, name: this.entrepreneurshipMayContents.expenseCategory5},
                                {value: this.entrepreneurshipMayContents.perCategory6, name: this.entrepreneurshipMayContents.expenseCategory6}  
                            ]
                        }
                    ]
                }
            },

            gaugeJunOptions() {
                return {    
                  tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                            type: 'gauge',
                            name: "Budget Usage",
                            detail: {formatter: '{value}%'},
                            data: [{value: this.entrepreneurshipJunContents.budgetUsage}],
                            min: 200,
                            max: 0,
                            radius: '100%',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: [[0.30, '#c10015'], [0.50, '#fb6b00'], [0.80, '#009688'], [1, '#388e3c']],
                                    width: 30
                                },
                            },
                        }
                    ]
                }
            },
            pieJunOptions() {
                return {
                    tooltip: {
                        show: true,
                        formatter: '{a} <br/>{b}: {c} $ ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0
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
                                {value: this.entrepreneurshipJunContents.perCategory1, name: this.entrepreneurshipJunContents.expenseCategory1},
                                {value: this.entrepreneurshipJunContents.perCategory2, name: this.entrepreneurshipJunContents.expenseCategory2},
                                {value: this.entrepreneurshipJunContents.perCategory3, name: this.entrepreneurshipJunContents.expenseCategory3},
                                {value: this.entrepreneurshipJunContents.perCategory4, name: this.entrepreneurshipJunContents.expenseCategory4},
                                {value: this.entrepreneurshipJunContents.perCategory5, name: this.entrepreneurshipJunContents.expenseCategory5},
                                {value: this.entrepreneurshipJunContents.perCategory6, name: this.entrepreneurshipJunContents.expenseCategory6}  
                            ]
                        }
                    ]
                }
            },

            gaugeJulOptions() {
                return {    
                  tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                            type: 'gauge',
                            name: "Budget Usage",
                            detail: {formatter: '{value}%'},
                            data: [{value: this.entrepreneurshipJulContents.budgetUsage}],
                            min: 200,
                            max: 0,
                            radius: '100%',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: [[0.30, '#c10015'], [0.50, '#fb6b00'], [0.80, '#009688'], [1, '#388e3c']],
                                    width: 30
                                },
                            },
                        }
                    ]
                }
            },
            pieJulOptions() {
                return {
                    tooltip: {
                        show: true,
                        formatter: '{a} <br/>{b}: {c} $ ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0
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
                                {value: this.entrepreneurshipJulContents.perCategory1, name: this.entrepreneurshipJulContents.expenseCategory1},
                                {value: this.entrepreneurshipJulContents.perCategory2, name: this.entrepreneurshipJulContents.expenseCategory2},
                                {value: this.entrepreneurshipJulContents.perCategory3, name: this.entrepreneurshipJulContents.expenseCategory3},
                                {value: this.entrepreneurshipJulContents.perCategory4, name: this.entrepreneurshipJulContents.expenseCategory4},
                                {value: this.entrepreneurshipJulContents.perCategory5, name: this.entrepreneurshipJulContents.expenseCategory5},
                                {value: this.entrepreneurshipJulContents.perCategory6, name: this.entrepreneurshipJulContents.expenseCategory6}  
                            ]
                        }
                    ]
                }
            },

            gaugeAugOptions() {
                return {    
                  tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                            type: 'gauge',
                            name: "Budget Usage",
                            detail: {formatter: '{value}%'},
                            data: [{value: this.entrepreneurshipAugContents.budgetUsage}],
                            min: 200,
                            max: 0,
                            radius: '100%',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: [[0.30, '#c10015'], [0.50, '#fb6b00'], [0.80, '#009688'], [1, '#388e3c']],
                                    width: 30
                                },
                            },
                        }
                    ]
                }
            },
            pieAugOptions() {
                return {
                    tooltip: {
                        show: true,
                        formatter: '{a} <br/>{b}: {c} $ ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0
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
                                {value: this.entrepreneurshipAugContents.perCategory1, name: this.entrepreneurshipAugContents.expenseCategory1},
                                {value: this.entrepreneurshipAugContents.perCategory2, name: this.entrepreneurshipAugContents.expenseCategory2},
                                {value: this.entrepreneurshipAugContents.perCategory3, name: this.entrepreneurshipAugContents.expenseCategory3},
                                {value: this.entrepreneurshipAugContents.perCategory4, name: this.entrepreneurshipAugContents.expenseCategory4},
                                {value: this.entrepreneurshipAugContents.perCategory5, name: this.entrepreneurshipAugContents.expenseCategory5},
                                {value: this.entrepreneurshipAugContents.perCategory6, name: this.entrepreneurshipAugContents.expenseCategory6}  
                            ]
                        }
                    ]
                }
            },
            gaugeSepOptions() {
                return {    
                  tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                            type: 'gauge',
                            name: "Budget Usage",
                            detail: {formatter: '{value}%'},
                            data: [{value: this.entrepreneurshipSepContents.budgetUsage}],
                            min: 200,
                            max: 0,
                            radius: '100%',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: [[0.30, '#c10015'], [0.50, '#fb6b00'], [0.80, '#009688'], [1, '#388e3c']],
                                    width: 30
                                },
                            },
                        }
                    ]
                }
            },
            pieSepOptions() {
                return {
                    tooltip: {
                        show: true,
                        formatter: '{a} <br/>{b}: {c} $ ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0
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
                                {value: this.entrepreneurshipSepContents.perCategory1, name: this.entrepreneurshipSepContents.expenseCategory1},
                                {value: this.entrepreneurshipSepContents.perCategory2, name: this.entrepreneurshipSepContents.expenseCategory2},
                                {value: this.entrepreneurshipSepContents.perCategory3, name: this.entrepreneurshipSepContents.expenseCategory3},
                                {value: this.entrepreneurshipSepContents.perCategory4, name: this.entrepreneurshipSepContents.expenseCategory4},
                                {value: this.entrepreneurshipSepContents.perCategory5, name: this.entrepreneurshipSepContents.expenseCategory5},
                                {value: this.entrepreneurshipSepContents.perCategory6, name: this.entrepreneurshipSepContents.expenseCategory6}  
                            ]
                        }
                    ]
                }
            },

            gaugeOctOptions() {
                return {    
                  tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                            type: 'gauge',
                            name: "Budget Usage",
                            detail: {formatter: '{value}%'},
                            data: [{value: this.entrepreneurshipOctContents.budgetUsage}],
                            min: 200,
                            max: 0,
                            radius: '100%',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: [[0.30, '#c10015'], [0.50, '#fb6b00'], [0.80, '#009688'], [1, '#388e3c']],
                                    width: 30
                                },
                            },
                        }
                    ]
                }
            },
            pieOctOptions() {
                return {
                    tooltip: {
                        show: true,
                        formatter: '{a} <br/>{b}: {c} $ ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0
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
                                {value: this.entrepreneurshipOctContents.perCategory1, name: this.entrepreneurshipOctContents.expenseCategory1},
                                {value: this.entrepreneurshipOctContents.perCategory2, name: this.entrepreneurshipOctContents.expenseCategory2},
                                {value: this.entrepreneurshipOctContents.perCategory3, name: this.entrepreneurshipOctContents.expenseCategory3},
                                {value: this.entrepreneurshipOctContents.perCategory4, name: this.entrepreneurshipOctContents.expenseCategory4},
                                {value: this.entrepreneurshipOctContents.perCategory5, name: this.entrepreneurshipOctContents.expenseCategory5},
                                {value: this.entrepreneurshipOctContents.perCategory6, name: this.entrepreneurshipOctContents.expenseCategory6}  
                            ]
                        }
                    ]
                }
            },
            gaugeNovOptions() {
                return {    
                  tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                            type: 'gauge',
                            name: "Budget Usage",
                            detail: {formatter: '{value}%'},
                            data: [{value: this.entrepreneurshipNovContents.budgetUsage}],
                            min: 200,
                            max: 0,
                            radius: '100%',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: [[0.30, '#c10015'], [0.50, '#fb6b00'], [0.80, '#009688'], [1, '#388e3c']],
                                    width: 30
                                },
                            },
                        }
                    ]
                }
            },
            pieNovOptions() {
                return {
                    tooltip: {
                        show: true,
                        formatter: '{a} <br/>{b}: {c} $ ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0
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
                                {value: this.entrepreneurshipNovContents.perCategory1, name: this.entrepreneurshipNovContents.expenseCategory1},
                                {value: this.entrepreneurshipNovContents.perCategory2, name: this.entrepreneurshipNovContents.expenseCategory2},
                                {value: this.entrepreneurshipNovContents.perCategory3, name: this.entrepreneurshipNovContents.expenseCategory3},
                                {value: this.entrepreneurshipNovContents.perCategory4, name: this.entrepreneurshipNovContents.expenseCategory4},
                                {value: this.entrepreneurshipNovContents.perCategory5, name: this.entrepreneurshipNovContents.expenseCategory5},
                                {value: this.entrepreneurshipNovContents.perCategory6, name: this.entrepreneurshipNovContents.expenseCategory6}  
                            ]
                        }
                    ]
                }
            },
            gaugeDecOptions() {
                return {    
                  tooltip: {
                        formatter: '{a} <br/>{b} : {c}%'
                    },
                    series: [
                        {
                            type: 'gauge',
                            name: "Budget Usage",
                            detail: {formatter: '{value}%'},
                            data: [{value: this.entrepreneurshipDecContents.budgetUsage}],
                            min: 200,
                            max: 0,
                            radius: '100%',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: [[0.30, '#c10015'], [0.50, '#fb6b00'], [0.80, '#009688'], [1, '#388e3c']],
                                    width: 30
                                },
                            },
                        }
                    ]
                }
            },
            pieDecOptions() {
                return {
                    tooltip: {
                        show: true,
                        formatter: '{a} <br/>{b}: {c} $ ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 0,
                        width: 600,
                        left:0
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
                                {value: this.entrepreneurshipDecContents.perCategory1, name: this.entrepreneurshipDecContents.expenseCategory1},
                                {value: this.entrepreneurshipDecContents.perCategory2, name: this.entrepreneurshipDecContents.expenseCategory2},
                                {value: this.entrepreneurshipDecContents.perCategory3, name: this.entrepreneurshipDecContents.expenseCategory3},
                                {value: this.entrepreneurshipDecContents.perCategory4, name: this.entrepreneurshipDecContents.expenseCategory4},
                                {value: this.entrepreneurshipDecContents.perCategory5, name: this.entrepreneurshipDecContents.expenseCategory5},
                                {value: this.entrepreneurshipDecContents.perCategory6, name: this.entrepreneurshipDecContents.expenseCategory6}
                            ]
                        }
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
            //    JANUARY
            var docentrepreneurshipJanRef = db.collection("entrepreneurship").doc("january");

            docentrepreneurshipJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.entrepreneurshipJanContents = doc.data();
                    this.totalExpenseJan();
                    this.cumulativeBudgetUsageJan();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    FEBRUARY
            var docentrepreneurshipFebRef = db.collection("entrepreneurship").doc("february");

            docentrepreneurshipFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.entrepreneurshipFebContents = doc.data();
                    this.totalExpenseFeb();
                    this.cumulativeBudgetUsageFeb();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    MARCH
            var docentrepreneurshipMarRef = db.collection("entrepreneurship").doc("march");

            docentrepreneurshipMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.entrepreneurshipMarContents = doc.data();
                    this.totalExpenseMar();
                    this.cumulativeBudgetUsageMar();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    APRIL
            var docentrepreneurshipAprRef = db.collection("entrepreneurship").doc("april1");

            docentrepreneurshipAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.entrepreneurshipAprContents = doc.data();
                    this.totalExpenseApr();
                    this.cumulativeBudgetUsageApr();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    MAY
            var docentrepreneurshipMayRef = db.collection("entrepreneurship").doc("may");

            docentrepreneurshipMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.entrepreneurshipMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docentrepreneurshipJunRef = db.collection("entrepreneurship").doc("june");

            docentrepreneurshipJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.entrepreneurshipJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docentrepreneurshipJulRef = db.collection("entrepreneurship").doc("july");

            docentrepreneurshipJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.entrepreneurshipJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docentrepreneurshipAugRef = db.collection("entrepreneurship").doc("august");

            docentrepreneurshipAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.entrepreneurshipAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docentrepreneurshipSepRef = db.collection("entrepreneurship").doc("september");

            docentrepreneurshipSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.entrepreneurshipSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docentrepreneurshipOctRef = db.collection("entrepreneurship").doc("october");

            docentrepreneurshipOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.entrepreneurshipOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docentrepreneurshipNovRef = db.collection("entrepreneurship").doc("november");

            docentrepreneurshipNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.entrepreneurshipNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docentrepreneurshipDecRef = db.collection("entrepreneurship").doc("december");

            docentrepreneurshipDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.entrepreneurshipDecContents = doc.data();
                    this.totalExpenseDec();
                    
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
              return this.entrepreneurshipJanContents.expenses = getRealValue(this.entrepreneurshipJanContents.perCategory1) + getRealValue(this.entrepreneurshipJanContents.perCategory2) + getRealValue(this.entrepreneurshipJanContents.perCategory3) + getRealValue(this.entrepreneurshipJanContents.perCategory4) + getRealValue(this.entrepreneurshipJanContents.perCategory5) + getRealValue(this.entrepreneurshipJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipJanContents.budgetUsage = ((getRealValue(this.entrepreneurshipJanContents.expenses) / getRealValue(this.entrepreneurshipJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipFebContents.expenses = getRealValue(this.entrepreneurshipFebContents.perCategory1) + getRealValue(this.entrepreneurshipFebContents.perCategory2) + getRealValue(this.entrepreneurshipFebContents.perCategory3) + getRealValue(this.entrepreneurshipFebContents.perCategory4) + getRealValue(this.entrepreneurshipFebContents.perCategory5) + getRealValue(this.entrepreneurshipFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipFebContents.budgetUsage = (((getRealValue(this.entrepreneurshipFebContents.expenses) + getRealValue(this.entrepreneurshipJanContents.expenses)) / getRealValue(this.entrepreneurshipFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipMarContents.expenses = getRealValue(this.entrepreneurshipMarContents.perCategory1) + getRealValue(this.entrepreneurshipMarContents.perCategory2) + getRealValue(this.entrepreneurshipMarContents.perCategory3) + getRealValue(this.entrepreneurshipMarContents.perCategory4) + getRealValue(this.entrepreneurshipMarContents.perCategory5) + getRealValue(this.entrepreneurshipMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipMarContents.budgetUsage = (((getRealValue(this.entrepreneurshipMarContents.expenses) + getRealValue(this.entrepreneurshipFebContents.expenses) + getRealValue(this.entrepreneurshipJanContents.expenses)) / getRealValue(this.entrepreneurshipMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipAprContents.expenses = getRealValue(this.entrepreneurshipAprContents.perCategory1) + getRealValue(this.entrepreneurshipAprContents.perCategory2) + getRealValue(this.entrepreneurshipAprContents.perCategory3) + getRealValue(this.entrepreneurshipAprContents.perCategory4) + getRealValue(this.entrepreneurshipAprContents.perCategory5) + getRealValue(this.entrepreneurshipAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipAprContents.budgetUsage = (((getRealValue(this.entrepreneurshipAprContents.expenses) + getRealValue(this.entrepreneurshipMarContents.expenses) + getRealValue(this.entrepreneurshipFebContents.expenses) + getRealValue(this.entrepreneurshipJanContents.expenses)) / getRealValue(this.entrepreneurshipAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipMayContents.expenses = getRealValue(this.entrepreneurshipMayContents.perCategory1) + getRealValue(this.entrepreneurshipMayContents.perCategory2) + getRealValue(this.entrepreneurshipMayContents.perCategory3) + getRealValue(this.entrepreneurshipMayContents.perCategory4) + getRealValue(this.entrepreneurshipMayContents.perCategory5) + getRealValue(this.entrepreneurshipMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipMayContents.budgetUsage = (((getRealValue(this.entrepreneurshipMayContents.expenses) + getRealValue(this.entrepreneurshipAprContents.expenses) + getRealValue(this.entrepreneurshipMarContents.expenses) + getRealValue(this.entrepreneurshipFebContents.expenses) + getRealValue(this.entrepreneurshipJanContents.expenses)) / getRealValue(this.entrepreneurshipMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipJunContents.expenses = getRealValue(this.entrepreneurshipJunContents.perCategory1) + getRealValue(this.entrepreneurshipJunContents.perCategory2) + getRealValue(this.entrepreneurshipJunContents.perCategory3) + getRealValue(this.entrepreneurshipJunContents.perCategory4) + getRealValue(this.entrepreneurshipJunContents.perCategory5) + getRealValue(this.entrepreneurshipJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipJunContents.budgetUsage = (((getRealValue(this.entrepreneurshipJunContents.expenses) + getRealValue(this.entrepreneurshipMayContents.expenses) + getRealValue(this.entrepreneurshipAprContents.expenses) + getRealValue(this.entrepreneurshipMarContents.expenses) + getRealValue(this.entrepreneurshipFebContents.expenses) + getRealValue(this.entrepreneurshipJanContents.expenses)) / getRealValue(this.entrepreneurshipJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipJulContents.expenses = getRealValue(this.entrepreneurshipJulContents.perCategory1) + getRealValue(this.entrepreneurshipJulContents.perCategory2) + getRealValue(this.entrepreneurshipJulContents.perCategory3) + getRealValue(this.entrepreneurshipJulContents.perCategory4) + getRealValue(this.entrepreneurshipJulContents.perCategory5) + getRealValue(this.entrepreneurshipJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipJulContents.budgetUsage = (((getRealValue(this.entrepreneurshipJulContents.expenses) + getRealValue(this.entrepreneurshipJunContents.expenses) + getRealValue(this.entrepreneurshipMayContents.expenses) + getRealValue(this.entrepreneurshipAprContents.expenses) + getRealValue(this.entrepreneurshipMarContents.expenses) + getRealValue(this.entrepreneurshipFebContents.expenses) + getRealValue(this.entrepreneurshipJanContents.expenses)) / getRealValue(this.entrepreneurshipJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipAugContents.expenses = getRealValue(this.entrepreneurshipAugContents.perCategory1) + getRealValue(this.entrepreneurshipAugContents.perCategory2) + getRealValue(this.entrepreneurshipAugContents.perCategory3) + getRealValue(this.entrepreneurshipAugContents.perCategory4) + getRealValue(this.entrepreneurshipAugContents.perCategory5) + getRealValue(this.entrepreneurshipAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipAugContents.budgetUsage = (((getRealValue(this.entrepreneurshipAugContents.expenses) + getRealValue(this.entrepreneurshipJulContents.expenses) + getRealValue(this.entrepreneurshipJunContents.expenses) + getRealValue(this.entrepreneurshipMayContents.expenses) + getRealValue(this.entrepreneurshipAprContents.expenses) + getRealValue(this.entrepreneurshipMarContents.expenses) + getRealValue(this.entrepreneurshipFebContents.expenses) + getRealValue(this.entrepreneurshipJanContents.expenses)) / getRealValue(this.entrepreneurshipAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipSepContents.expenses = getRealValue(this.entrepreneurshipSepContents.perCategory1) + getRealValue(this.entrepreneurshipSepContents.perCategory2) + getRealValue(this.entrepreneurshipSepContents.perCategory3) + getRealValue(this.entrepreneurshipSepContents.perCategory4) + getRealValue(this.entrepreneurshipSepContents.perCategory5) + getRealValue(this.entrepreneurshipSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipSepContents.budgetUsage = (((getRealValue(this.entrepreneurshipSepContents.expenses) + getRealValue(this.entrepreneurshipAugContents.expenses) + getRealValue(this.entrepreneurshipJulContents.expenses) + getRealValue(this.entrepreneurshipJunContents.expenses) + getRealValue(this.entrepreneurshipMayContents.expenses) + getRealValue(this.entrepreneurshipAprContents.expenses) + getRealValue(this.entrepreneurshipMarContents.expenses) + getRealValue(this.entrepreneurshipFebContents.expenses) + getRealValue(this.entrepreneurshipJanContents.expenses)) / getRealValue(this.entrepreneurshipSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipOctContents.expenses = getRealValue(this.entrepreneurshipOctContents.perCategory1) + getRealValue(this.entrepreneurshipOctContents.perCategory2) + getRealValue(this.entrepreneurshipOctContents.perCategory3) + getRealValue(this.entrepreneurshipOctContents.perCategory4) + getRealValue(this.entrepreneurshipOctContents.perCategory5) + getRealValue(this.entrepreneurshipOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipOctContents.budgetUsage = (((getRealValue(this.entrepreneurshipOctContents.expenses) + getRealValue(this.entrepreneurshipSepContents.expenses) + getRealValue(this.entrepreneurshipAugContents.expenses) + getRealValue(this.entrepreneurshipJulContents.expenses) + getRealValue(this.entrepreneurshipJunContents.expenses) + getRealValue(this.entrepreneurshipMayContents.expenses) + getRealValue(this.entrepreneurshipAprContents.expenses) + getRealValue(this.entrepreneurshipMarContents.expenses) + getRealValue(this.entrepreneurshipFebContents.expenses) + getRealValue(this.entrepreneurshipJanContents.expenses)) / getRealValue(this.entrepreneurshipOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipNovContents.expenses = getRealValue(this.entrepreneurshipNovContents.perCategory1) + getRealValue(this.entrepreneurshipNovContents.perCategory2) + getRealValue(this.entrepreneurshipNovContents.perCategory3) + getRealValue(this.entrepreneurshipNovContents.perCategory4) + getRealValue(this.entrepreneurshipNovContents.perCategory5) + getRealValue(this.entrepreneurshipNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipNovContents.budgetUsage = (((getRealValue(this.entrepreneurshipNovContents.expenses) + getRealValue(this.entrepreneurshipOctContents.expenses) + getRealValue(this.entrepreneurshipSepContents.expenses) + getRealValue(this.entrepreneurshipAugContents.expenses) + getRealValue(this.entrepreneurshipJulContents.expenses) + getRealValue(this.entrepreneurshipJunContents.expenses) + getRealValue(this.entrepreneurshipMayContents.expenses) + getRealValue(this.entrepreneurshipAprContents.expenses) + getRealValue(this.entrepreneurshipMarContents.expenses) + getRealValue(this.entrepreneurshipFebContents.expenses) + getRealValue(this.entrepreneurshipJanContents.expenses)) / getRealValue(this.entrepreneurshipNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipDecContents.expenses = getRealValue(this.entrepreneurshipDecContents.perCategory1) + getRealValue(this.entrepreneurshipDecContents.perCategory2) + getRealValue(this.entrepreneurshipDecContents.perCategory3) + getRealValue(this.entrepreneurshipDecContents.perCategory4) + getRealValue(this.entrepreneurshipDecContents.perCategory5) + getRealValue(this.entrepreneurshipDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.entrepreneurshipDecContents.budgetUsage = (((getRealValue(this.entrepreneurshipDecContents.expenses) + getRealValue(this.entrepreneurshipNovContents.expenses) + getRealValue(this.entrepreneurshipOctContents.expenses) + getRealValue(this.entrepreneurshipSepContents.expenses) + getRealValue(this.entrepreneurshipAugContents.expenses) + getRealValue(this.entrepreneurshipJulContents.expenses) + getRealValue(this.entrepreneurshipJunContents.expenses) + getRealValue(this.entrepreneurshipMayContents.expenses) + getRealValue(this.entrepreneurshipAprContents.expenses) + getRealValue(this.entrepreneurshipMarContents.expenses) + getRealValue(this.entrepreneurshipFebContents.expenses) + getRealValue(this.entrepreneurshipJanContents.expenses)) / getRealValue(this.entrepreneurshipDecContents.actualBudget))*100).toFixed(2)
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
</style>
