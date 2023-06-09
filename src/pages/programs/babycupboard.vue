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
                              :color="(babyCupboardJanContents.kpi1 == null)?'grey-2':(babyCupboardJanContents.kpi1 >= '0' && babyCupboardJanContents.kpi1 <= '27')?'red':(babyCupboardJanContents.kpi1 > '27' && babyCupboardJanContents.kpi1 <= '36')?'orange':(babyCupboardJanContents.kpi1 > '36' && babyCupboardJanContents.kpi1 < '45')?'yellow-7':(babyCupboardJanContents.kpi1 >= '45' && babyCupboardJanContents.kpi1 < '477.6')?'green':(babyCupboardJanContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi2 == null)?'grey-2':(babyCupboardJanContents.kpi2 >= '0' && babyCupboardJanContents.kpi2 <= '27')?'red':(babyCupboardJanContents.kpi2 > '27' && babyCupboardJanContents.kpi2 <= '36')?'orange':(babyCupboardJanContents.kpi2 > '36' && babyCupboardJanContents.kpi2 < '45')?'yellow-7':(babyCupboardJanContents.kpi2 >= '45' && babyCupboardJanContents.kpi2 < '488.4')?'green':(babyCupboardJanContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi3 == null)?'grey-2':(babyCupboardJanContents.kpi3 >= '0' && babyCupboardJanContents.kpi3 <= '31.25')?'red':(babyCupboardJanContents.kpi3 > '31.25' && babyCupboardJanContents.kpi3 <= '41.8')?'orange':(babyCupboardJanContents.kpi3 > '41.8' && babyCupboardJanContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJanContents.kpi3 >= '52.25' && babyCupboardJanContents.kpi3 < '1048.5')?'green':(babyCupboardJanContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi4 == null)?'grey-2':(babyCupboardJanContents.kpi4 >= '0' && babyCupboardJanContents.kpi4 <= '12.45')?'red':(babyCupboardJanContents.kpi4 > '12.45' && babyCupboardJanContents.kpi4 <= '16.6')?'orange':(babyCupboardJanContents.kpi4 > '16.6' && babyCupboardJanContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJanContents.kpi4 >= '20.75' && babyCupboardJanContents.kpi4 < '24.9')?'green':(babyCupboardJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi4}}
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
                              :color="(babyCupboardFebContents.kpi1 == null)?'grey-2':(babyCupboardFebContents.kpi1 >= '0' && babyCupboardFebContents.kpi1 <= '27')?'red':(babyCupboardFebContents.kpi1 > '27' && babyCupboardFebContents.kpi1 <= '36')?'orange':(babyCupboardFebContents.kpi1 > '36' && babyCupboardFebContents.kpi1 < '45')?'yellow-7':(babyCupboardFebContents.kpi1 >= '45' && babyCupboardFebContents.kpi1 < '477.6')?'green':(babyCupboardFebContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi2 == null)?'grey-2':(babyCupboardFebContents.kpi2 >= '0' && babyCupboardFebContents.kpi2 <= '27')?'red':(babyCupboardFebContents.kpi2 > '27' && babyCupboardFebContents.kpi2 <= '36')?'orange':(babyCupboardFebContents.kpi2 > '36' && babyCupboardFebContents.kpi2 < '45')?'yellow-7':(babyCupboardFebContents.kpi2 >= '45' && babyCupboardFebContents.kpi2 < '488.4')?'green':(babyCupboardFebContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi3 == null)?'grey-2':(babyCupboardFebContents.kpi3 >= '0' && babyCupboardFebContents.kpi3 <= '31.25')?'red':(babyCupboardFebContents.kpi3 > '31.25' && babyCupboardFebContents.kpi3 <= '41.8')?'orange':(babyCupboardFebContents.kpi3 > '41.8' && babyCupboardFebContents.kpi3 < '52.25')?'yellow-7':(babyCupboardFebContents.kpi3 >= '52.25' && babyCupboardFebContents.kpi3 < '1048.5')?'green':(babyCupboardFebContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi4 == null)?'grey-2':(babyCupboardFebContents.kpi4 >= '0' && babyCupboardFebContents.kpi4 <= '12.45')?'red':(babyCupboardFebContents.kpi4 > '12.45' && babyCupboardFebContents.kpi4 <= '16.6')?'orange':(babyCupboardFebContents.kpi4 > '16.6' && babyCupboardFebContents.kpi4 < '20.75')?'yellow-7':(babyCupboardFebContents.kpi4 >= '20.75' && babyCupboardFebContents.kpi4 < '24.9')?'green':(babyCupboardFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi4}}
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
                              :color="(babyCupboardMarContents.kpi1 == null)?'grey-2':(babyCupboardMarContents.kpi1 >= '0' && babyCupboardMarContents.kpi1 <= '27')?'red':(babyCupboardMarContents.kpi1 > '27' && babyCupboardMarContents.kpi1 <= '36')?'orange':(babyCupboardMarContents.kpi1 > '36' && babyCupboardMarContents.kpi1 < '45')?'yellow-7':(babyCupboardMarContents.kpi1 >= '45' && babyCupboardMarContents.kpi1 < '477.6')?'green':(babyCupboardMarContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi2 == null)?'grey-2':(babyCupboardMarContents.kpi2 >= '0' && babyCupboardMarContents.kpi2 <= '27')?'red':(babyCupboardMarContents.kpi2 > '27' && babyCupboardMarContents.kpi2 <= '36')?'orange':(babyCupboardMarContents.kpi2 > '36' && babyCupboardMarContents.kpi2 < '45')?'yellow-7':(babyCupboardMarContents.kpi2 >= '45' && babyCupboardMarContents.kpi2 < '488.4')?'green':(babyCupboardMarContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi3 == null)?'grey-2':(babyCupboardMarContents.kpi3 >= '0' && babyCupboardMarContents.kpi3 <= '31.25')?'red':(babyCupboardMarContents.kpi3 > '31.25' && babyCupboardMarContents.kpi3 <= '41.8')?'orange':(babyCupboardMarContents.kpi3 > '41.8' && babyCupboardMarContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMarContents.kpi3 >= '52.25' && babyCupboardMarContents.kpi3 < '1048.5')?'green':(babyCupboardMarContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi4 == null)?'grey-2':(babyCupboardMarContents.kpi4 >= '0' && babyCupboardMarContents.kpi4 <= '12.45')?'red':(babyCupboardMarContents.kpi4 > '12.45' && babyCupboardMarContents.kpi4 <= '16.6')?'orange':(babyCupboardMarContents.kpi4 > '16.6' && babyCupboardMarContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMarContents.kpi4 >= '20.75' && babyCupboardMarContents.kpi4 < '24.9')?'green':(babyCupboardMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi4}}
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
                              :color="(babyCupboardAprContents.kpi1 == null)?'grey-2':(babyCupboardAprContents.kpi1 >= '0' && babyCupboardAprContents.kpi1 <= '27')?'red':(babyCupboardAprContents.kpi1 > '27' && babyCupboardAprContents.kpi1 <= '36')?'orange':(babyCupboardAprContents.kpi1 > '36' && babyCupboardAprContents.kpi1 < '45')?'yellow-7':(babyCupboardAprContents.kpi1 >= '45' && babyCupboardAprContents.kpi1 < '477.6')?'green':(babyCupboardAprContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi2 == null)?'grey-2':(babyCupboardAprContents.kpi2 >= '0' && babyCupboardAprContents.kpi2 <= '27')?'red':(babyCupboardAprContents.kpi2 > '27' && babyCupboardAprContents.kpi2 <= '36')?'orange':(babyCupboardAprContents.kpi2 > '36' && babyCupboardAprContents.kpi2 < '45')?'yellow-7':(babyCupboardAprContents.kpi2 >= '45' && babyCupboardAprContents.kpi2 < '488.4')?'green':(babyCupboardAprContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi3 == null)?'grey-2':(babyCupboardAprContents.kpi3 >= '0' && babyCupboardAprContents.kpi3 <= '31.25')?'red':(babyCupboardAprContents.kpi3 > '31.25' && babyCupboardAprContents.kpi3 <= '41.8')?'orange':(babyCupboardAprContents.kpi3 > '41.8' && babyCupboardAprContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAprContents.kpi3 >= '52.25' && babyCupboardAprContents.kpi3 < '1048.5')?'green':(babyCupboardAprContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi4 == null)?'grey-2':(babyCupboardAprContents.kpi4 >= '0' && babyCupboardAprContents.kpi4 <= '12.45')?'red':(babyCupboardAprContents.kpi4 > '12.45' && babyCupboardAprContents.kpi4 <= '16.6')?'orange':(babyCupboardAprContents.kpi4 > '16.6' && babyCupboardAprContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAprContents.kpi4 >= '20.75' && babyCupboardAprContents.kpi4 < '24.9')?'green':(babyCupboardAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi4}}
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
                              :color="(babyCupboardMayContents.kpi1 == null)?'grey-2':(babyCupboardMayContents.kpi1 >= '0' && babyCupboardMayContents.kpi1 <= '27')?'red':(babyCupboardMayContents.kpi1 > '27' && babyCupboardMayContents.kpi1 <= '36')?'orange':(babyCupboardMayContents.kpi1 > '36' && babyCupboardMayContents.kpi1 < '45')?'yellow-7':(babyCupboardMayContents.kpi1 >= '45' && babyCupboardMayContents.kpi1 < '477.6')?'green':(babyCupboardMayContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi2 == null)?'grey-2':(babyCupboardMayContents.kpi2 >= '0' && babyCupboardMayContents.kpi2 <= '27')?'red':(babyCupboardMayContents.kpi2 > '27' && babyCupboardMayContents.kpi2 <= '36')?'orange':(babyCupboardMayContents.kpi2 > '36' && babyCupboardMayContents.kpi2 < '45')?'yellow-7':(babyCupboardMayContents.kpi2 >= '45' && babyCupboardMayContents.kpi2 < '488.4')?'green':(babyCupboardMayContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi3 == null)?'grey-2':(babyCupboardMayContents.kpi3 >= '0' && babyCupboardMayContents.kpi3 <= '31.25')?'red':(babyCupboardMayContents.kpi3 > '31.25' && babyCupboardMayContents.kpi3 <= '41.8')?'orange':(babyCupboardMayContents.kpi3 > '41.8' && babyCupboardMayContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMayContents.kpi3 >= '52.25' && babyCupboardMayContents.kpi3 < '1048.5')?'green':(babyCupboardMayContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi4 == null)?'grey-2':(babyCupboardMayContents.kpi4 >= '0' && babyCupboardMayContents.kpi4 <= '12.45')?'red':(babyCupboardMayContents.kpi4 > '12.45' && babyCupboardMayContents.kpi4 <= '16.6')?'orange':(babyCupboardMayContents.kpi4 > '16.6' && babyCupboardMayContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMayContents.kpi4 >= '20.75' && babyCupboardMayContents.kpi4 < '24.9')?'green':(babyCupboardMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi4}}
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
                              :color="(babyCupboardJunContents.kpi1 == null)?'grey-2':(babyCupboardJunContents.kpi1 >= '0' && babyCupboardJunContents.kpi1 <= '27')?'red':(babyCupboardJunContents.kpi1 > '27' && babyCupboardJunContents.kpi1 <= '36')?'orange':(babyCupboardJunContents.kpi1 > '36' && babyCupboardJunContents.kpi1 < '45')?'yellow-7':(babyCupboardJunContents.kpi1 >= '45' && babyCupboardJunContents.kpi1 < '477.6')?'green':(babyCupboardJunContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi2 == null)?'grey-2':(babyCupboardJunContents.kpi2 >= '0' && babyCupboardJunContents.kpi2 <= '27')?'red':(babyCupboardJunContents.kpi2 > '27' && babyCupboardJunContents.kpi2 <= '36')?'orange':(babyCupboardJunContents.kpi2 > '36' && babyCupboardJunContents.kpi2 < '45')?'yellow-7':(babyCupboardJunContents.kpi2 >= '45' && babyCupboardJunContents.kpi2 < '488.4')?'green':(babyCupboardJunContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi3 == null)?'grey-2':(babyCupboardJunContents.kpi3 >= '0' && babyCupboardJunContents.kpi3 <= '31.25')?'red':(babyCupboardJunContents.kpi3 > '31.25' && babyCupboardJunContents.kpi3 <= '41.8')?'orange':(babyCupboardJunContents.kpi3 > '41.8' && babyCupboardJunContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJunContents.kpi3 >= '52.25' && babyCupboardJunContents.kpi3 < '1048.5')?'green':(babyCupboardJunContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi4 == null)?'grey-2':(babyCupboardJunContents.kpi4 >= '0' && babyCupboardJunContents.kpi4 <= '12.45')?'red':(babyCupboardJunContents.kpi4 > '12.45' && babyCupboardJunContents.kpi4 <= '16.6')?'orange':(babyCupboardJunContents.kpi4 > '16.6' && babyCupboardJunContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJunContents.kpi4 >= '20.75' && babyCupboardJunContents.kpi4 < '24.9')?'green':(babyCupboardJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi4}}
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
                              :color="(babyCupboardJulContents.kpi1 == null)?'grey-2':(babyCupboardJulContents.kpi1 >= '0' && babyCupboardJulContents.kpi1 <= '27')?'red':(babyCupboardJulContents.kpi1 > '27' && babyCupboardJulContents.kpi1 <= '36')?'orange':(babyCupboardJulContents.kpi1 > '36' && babyCupboardJulContents.kpi1 < '45')?'yellow-7':(babyCupboardJulContents.kpi1 >= '45' && babyCupboardJulContents.kpi1 < '477.6')?'green':(babyCupboardJulContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi2 == null)?'grey-2':(babyCupboardJulContents.kpi2 >= '0' && babyCupboardJulContents.kpi2 <= '27')?'red':(babyCupboardJulContents.kpi2 > '27' && babyCupboardJulContents.kpi2 <= '36')?'orange':(babyCupboardJulContents.kpi2 > '36' && babyCupboardJulContents.kpi2 < '45')?'yellow-7':(babyCupboardJulContents.kpi2 >= '45' && babyCupboardJulContents.kpi2 < '488.4')?'green':(babyCupboardJulContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi3 == null)?'grey-2':(babyCupboardJulContents.kpi3 >= '0' && babyCupboardJulContents.kpi3 <= '31.25')?'red':(babyCupboardJulContents.kpi3 > '31.25' && babyCupboardJulContents.kpi3 <= '41.8')?'orange':(babyCupboardJulContents.kpi3 > '41.8' && babyCupboardJulContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJulContents.kpi3 >= '52.25' && babyCupboardJulContents.kpi3 < '1048.5')?'green':(babyCupboardJulContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi4 == null)?'grey-2':(babyCupboardJulContents.kpi4 >= '0' && babyCupboardJulContents.kpi4 <= '12.45')?'red':(babyCupboardJulContents.kpi4 > '12.45' && babyCupboardJulContents.kpi4 <= '16.6')?'orange':(babyCupboardJulContents.kpi4 > '16.6' && babyCupboardJulContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJulContents.kpi4 >= '20.75' && babyCupboardJulContents.kpi4 < '24.9')?'green':(babyCupboardJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi4}}
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
                              :color="(babyCupboardAugContents.kpi1 == null)?'grey-2':(babyCupboardAugContents.kpi1 >= '0' && babyCupboardAugContents.kpi1 <= '27')?'red':(babyCupboardAugContents.kpi1 > '27' && babyCupboardAugContents.kpi1 <= '36')?'orange':(babyCupboardAugContents.kpi1 > '36' && babyCupboardAugContents.kpi1 < '45')?'yellow-7':(babyCupboardAugContents.kpi1 >= '45' && babyCupboardAugContents.kpi1 < '477.6')?'green':(babyCupboardAugContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi2 == null)?'grey-2':(babyCupboardAugContents.kpi2 >= '0' && babyCupboardAugContents.kpi2 <= '27')?'red':(babyCupboardAugContents.kpi2 > '27' && babyCupboardAugContents.kpi2 <= '36')?'orange':(babyCupboardAugContents.kpi2 > '36' && babyCupboardAugContents.kpi2 < '45')?'yellow-7':(babyCupboardAugContents.kpi2 >= '45' && babyCupboardAugContents.kpi2 < '488.4')?'green':(babyCupboardAugContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi3 == null)?'grey-2':(babyCupboardAugContents.kpi3 >= '0' && babyCupboardAugContents.kpi3 <= '31.25')?'red':(babyCupboardAugContents.kpi3 > '31.25' && babyCupboardAugContents.kpi3 <= '41.8')?'orange':(babyCupboardAugContents.kpi3 > '41.8' && babyCupboardAugContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAugContents.kpi3 >= '52.25' && babyCupboardAugContents.kpi3 < '1048.5')?'green':(babyCupboardAugContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi4 == null)?'grey-2':(babyCupboardAugContents.kpi4 >= '0' && babyCupboardAugContents.kpi4 <= '12.45')?'red':(babyCupboardAugContents.kpi4 > '12.45' && babyCupboardAugContents.kpi4 <= '16.6')?'orange':(babyCupboardAugContents.kpi4 > '16.6' && babyCupboardAugContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAugContents.kpi4 >= '20.75' && babyCupboardAugContents.kpi4 < '24.9')?'green':(babyCupboardAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi4}}
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
                              :color="(babyCupboardSepContents.kpi1 == null)?'grey-2':(babyCupboardSepContents.kpi1 >= '0' && babyCupboardSepContents.kpi1 <= '27')?'red':(babyCupboardSepContents.kpi1 > '27' && babyCupboardSepContents.kpi1 <= '36')?'orange':(babyCupboardSepContents.kpi1 > '36' && babyCupboardSepContents.kpi1 < '45')?'yellow-7':(babyCupboardSepContents.kpi1 >= '45' && babyCupboardSepContents.kpi1 < '477.6')?'green':(babyCupboardSepContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi2 == null)?'grey-2':(babyCupboardSepContents.kpi2 >= '0' && babyCupboardSepContents.kpi2 <= '27')?'red':(babyCupboardSepContents.kpi2 > '27' && babyCupboardSepContents.kpi2 <= '36')?'orange':(babyCupboardSepContents.kpi2 > '36' && babyCupboardSepContents.kpi2 < '45')?'yellow-7':(babyCupboardSepContents.kpi2 >= '45' && babyCupboardSepContents.kpi2 < '488.4')?'green':(babyCupboardSepContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi3 == null)?'grey-2':(babyCupboardSepContents.kpi3 >= '0' && babyCupboardSepContents.kpi3 <= '31.25')?'red':(babyCupboardSepContents.kpi3 > '31.25' && babyCupboardSepContents.kpi3 <= '41.8')?'orange':(babyCupboardSepContents.kpi3 > '41.8' && babyCupboardSepContents.kpi3 < '52.25')?'yellow-7':(babyCupboardSepContents.kpi3 >= '52.25' && babyCupboardSepContents.kpi3 < '1048.5')?'green':(babyCupboardSepContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi4 == null)?'grey-2':(babyCupboardSepContents.kpi4 >= '0' && babyCupboardSepContents.kpi4 <= '12.45')?'red':(babyCupboardSepContents.kpi4 > '12.45' && babyCupboardSepContents.kpi4 <= '16.6')?'orange':(babyCupboardSepContents.kpi4 > '16.6' && babyCupboardSepContents.kpi4 < '20.75')?'yellow-7':(babyCupboardSepContents.kpi4 >= '20.75' && babyCupboardSepContents.kpi4 < '24.9')?'green':(babyCupboardSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi4}}
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
                              :color="(babyCupboardOctContents.kpi1 == null)?'grey-2':(babyCupboardOctContents.kpi1 >= '0' && babyCupboardOctContents.kpi1 <= '27')?'red':(babyCupboardOctContents.kpi1 > '27' && babyCupboardOctContents.kpi1 <= '36')?'orange':(babyCupboardOctContents.kpi1 > '36' && babyCupboardOctContents.kpi1 < '45')?'yellow-7':(babyCupboardOctContents.kpi1 >= '45' && babyCupboardOctContents.kpi1 < '477.6')?'green':(babyCupboardOctContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi2 == null)?'grey-2':(babyCupboardOctContents.kpi2 >= '0' && babyCupboardOctContents.kpi2 <= '27')?'red':(babyCupboardOctContents.kpi2 > '27' && babyCupboardOctContents.kpi2 <= '36')?'orange':(babyCupboardOctContents.kpi2 > '36' && babyCupboardOctContents.kpi2 < '45')?'yellow-7':(babyCupboardOctContents.kpi2 >= '45' && babyCupboardOctContents.kpi2 < '488.4')?'green':(babyCupboardOctContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi3 == null)?'grey-2':(babyCupboardOctContents.kpi3 >= '0' && babyCupboardOctContents.kpi3 <= '31.25')?'red':(babyCupboardOctContents.kpi3 > '31.25' && babyCupboardOctContents.kpi3 <= '41.8')?'orange':(babyCupboardOctContents.kpi3 > '41.8' && babyCupboardOctContents.kpi3 < '52.25')?'yellow-7':(babyCupboardOctContents.kpi3 >= '52.25' && babyCupboardOctContents.kpi3 < '1048.5')?'green':(babyCupboardOctContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi4 == null)?'grey-2':(babyCupboardOctContents.kpi4 >= '0' && babyCupboardOctContents.kpi4 <= '12.45')?'red':(babyCupboardOctContents.kpi4 > '12.45' && babyCupboardOctContents.kpi4 <= '16.6')?'orange':(babyCupboardOctContents.kpi4 > '16.6' && babyCupboardOctContents.kpi4 < '20.75')?'yellow-7':(babyCupboardOctContents.kpi4 >= '20.75' && babyCupboardOctContents.kpi4 < '24.9')?'green':(babyCupboardOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi4}}
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
                              :color="(babyCupboardNovContents.kpi1 == null)?'grey-2':(babyCupboardNovContents.kpi1 >= '0' && babyCupboardNovContents.kpi1 <= '27')?'red':(babyCupboardNovContents.kpi1 > '27' && babyCupboardNovContents.kpi1 <= '36')?'orange':(babyCupboardNovContents.kpi1 > '36' && babyCupboardNovContents.kpi1 < '45')?'yellow-7':(babyCupboardNovContents.kpi1 >= '45' && babyCupboardNovContents.kpi1 < '477.6')?'green':(babyCupboardNovContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi2 == null)?'grey-2':(babyCupboardNovContents.kpi2 >= '0' && babyCupboardNovContents.kpi2 <= '27')?'red':(babyCupboardNovContents.kpi2 > '27' && babyCupboardNovContents.kpi2 <= '36')?'orange':(babyCupboardNovContents.kpi2 > '36' && babyCupboardNovContents.kpi2 < '45')?'yellow-7':(babyCupboardNovContents.kpi2 >= '45' && babyCupboardNovContents.kpi2 < '488.4')?'green':(babyCupboardNovContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi3 == null)?'grey-2':(babyCupboardNovContents.kpi3 >= '0' && babyCupboardNovContents.kpi3 <= '31.25')?'red':(babyCupboardNovContents.kpi3 > '31.25' && babyCupboardNovContents.kpi3 <= '41.8')?'orange':(babyCupboardNovContents.kpi3 > '41.8' && babyCupboardNovContents.kpi3 < '52.25')?'yellow-7':(babyCupboardNovContents.kpi3 >= '52.25' && babyCupboardNovContents.kpi3 < '1048.5')?'green':(babyCupboardNovContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi4 == null)?'grey-2':(babyCupboardNovContents.kpi4 >= '0' && babyCupboardNovContents.kpi4 <= '12.45')?'red':(babyCupboardNovContents.kpi4 > '12.45' && babyCupboardNovContents.kpi4 <= '16.6')?'orange':(babyCupboardNovContents.kpi4 > '16.6' && babyCupboardNovContents.kpi4 < '20.75')?'yellow-7':(babyCupboardNovContents.kpi4 >= '20.75' && babyCupboardNovContents.kpi4 < '24.9')?'green':(babyCupboardNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi4}}
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
                              :color="(babyCupboardDecContents.kpi1 == null)?'grey-2':(babyCupboardDecContents.kpi1 >= '0' && babyCupboardDecContents.kpi1 <= '27')?'red':(babyCupboardDecContents.kpi1 > '27' && babyCupboardDecContents.kpi1 <= '36')?'orange':(babyCupboardDecContents.kpi1 > '36' && babyCupboardDecContents.kpi1 < '45')?'yellow-7':(babyCupboardDecContents.kpi1 >= '45' && babyCupboardDecContents.kpi1 < '477.6')?'green':(babyCupboardDecContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi2 == null)?'grey-2':(babyCupboardDecContents.kpi2 >= '0' && babyCupboardDecContents.kpi2 <= '27')?'red':(babyCupboardDecContents.kpi2 > '27' && babyCupboardDecContents.kpi2 <= '36')?'orange':(babyCupboardDecContents.kpi2 > '36' && babyCupboardDecContents.kpi2 < '45')?'yellow-7':(babyCupboardDecContents.kpi2 >= '45' && babyCupboardDecContents.kpi2 < '488.4')?'green':(babyCupboardDecContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi3 == null)?'grey-2':(babyCupboardDecContents.kpi3 >= '0' && babyCupboardDecContents.kpi3 <= '31.25')?'red':(babyCupboardDecContents.kpi3 > '31.25' && babyCupboardDecContents.kpi3 <= '41.8')?'orange':(babyCupboardDecContents.kpi3 > '41.8' && babyCupboardDecContents.kpi3 < '52.25')?'yellow-7':(babyCupboardDecContents.kpi3 >= '52.25' && babyCupboardDecContents.kpi3 < '1048.5')?'green':(babyCupboardDecContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi4 == null)?'grey-2':(babyCupboardDecContents.kpi4 >= '0' && babyCupboardDecContents.kpi4 <= '12.45')?'red':(babyCupboardDecContents.kpi4 > '12.45' && babyCupboardDecContents.kpi4 <= '16.6')?'orange':(babyCupboardDecContents.kpi4 > '16.6' && babyCupboardDecContents.kpi4 < '20.75')?'yellow-7':(babyCupboardDecContents.kpi4 >= '20.75' && babyCupboardDecContents.kpi4 < '24.9')?'green':(babyCupboardDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi4}}
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
                              :color="(babyCupboardJanContents.kpi1 == null)?'grey-2':(babyCupboardJanContents.kpi1 >= '0' && babyCupboardJanContents.kpi1 <= '27')?'red':(babyCupboardJanContents.kpi1 > '27' && babyCupboardJanContents.kpi1 <= '36')?'orange':(babyCupboardJanContents.kpi1 > '36' && babyCupboardJanContents.kpi1 < '45')?'yellow-7':(babyCupboardJanContents.kpi1 >= '45' && babyCupboardJanContents.kpi1 < '477.6')?'green':(babyCupboardJanContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi2 == null)?'grey-2':(babyCupboardJanContents.kpi2 >= '0' && babyCupboardJanContents.kpi2 <= '27')?'red':(babyCupboardJanContents.kpi2 > '27' && babyCupboardJanContents.kpi2 <= '36')?'orange':(babyCupboardJanContents.kpi2 > '36' && babyCupboardJanContents.kpi2 < '45')?'yellow-7':(babyCupboardJanContents.kpi2 >= '45' && babyCupboardJanContents.kpi2 < '488.4')?'green':(babyCupboardJanContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi3 == null)?'grey-2':(babyCupboardJanContents.kpi3 >= '0' && babyCupboardJanContents.kpi3 <= '31.25')?'red':(babyCupboardJanContents.kpi3 > '31.25' && babyCupboardJanContents.kpi3 <= '41.8')?'orange':(babyCupboardJanContents.kpi3 > '41.8' && babyCupboardJanContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJanContents.kpi3 >= '52.25' && babyCupboardJanContents.kpi3 < '1048.5')?'green':(babyCupboardJanContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi4 == null)?'grey-2':(babyCupboardJanContents.kpi4 >= '0' && babyCupboardJanContents.kpi4 <= '12.45')?'red':(babyCupboardJanContents.kpi4 > '12.45' && babyCupboardJanContents.kpi4 <= '16.6')?'orange':(babyCupboardJanContents.kpi4 > '16.6' && babyCupboardJanContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJanContents.kpi4 >= '20.75' && babyCupboardJanContents.kpi4 < '24.9')?'green':(babyCupboardJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi4}}
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
                              :color="(babyCupboardFebContents.kpi1 == null)?'grey-2':(babyCupboardFebContents.kpi1 >= '0' && babyCupboardFebContents.kpi1 <= '27')?'red':(babyCupboardFebContents.kpi1 > '27' && babyCupboardFebContents.kpi1 <= '36')?'orange':(babyCupboardFebContents.kpi1 > '36' && babyCupboardFebContents.kpi1 < '45')?'yellow-7':(babyCupboardFebContents.kpi1 >= '45' && babyCupboardFebContents.kpi1 < '477.6')?'green':(babyCupboardFebContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi2 == null)?'grey-2':(babyCupboardFebContents.kpi2 >= '0' && babyCupboardFebContents.kpi2 <= '27')?'red':(babyCupboardFebContents.kpi2 > '27' && babyCupboardFebContents.kpi2 <= '36')?'orange':(babyCupboardFebContents.kpi2 > '36' && babyCupboardFebContents.kpi2 < '45')?'yellow-7':(babyCupboardFebContents.kpi2 >= '45' && babyCupboardFebContents.kpi2 < '488.4')?'green':(babyCupboardFebContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi3 == null)?'grey-2':(babyCupboardFebContents.kpi3 >= '0' && babyCupboardFebContents.kpi3 <= '31.25')?'red':(babyCupboardFebContents.kpi3 > '31.25' && babyCupboardFebContents.kpi3 <= '41.8')?'orange':(babyCupboardFebContents.kpi3 > '41.8' && babyCupboardFebContents.kpi3 < '52.25')?'yellow-7':(babyCupboardFebContents.kpi3 >= '52.25' && babyCupboardFebContents.kpi3 < '1048.5')?'green':(babyCupboardFebContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi4 == null)?'grey-2':(babyCupboardFebContents.kpi4 >= '0' && babyCupboardFebContents.kpi4 <= '12.45')?'red':(babyCupboardFebContents.kpi4 > '12.45' && babyCupboardFebContents.kpi4 <= '16.6')?'orange':(babyCupboardFebContents.kpi4 > '16.6' && babyCupboardFebContents.kpi4 < '20.75')?'yellow-7':(babyCupboardFebContents.kpi4 >= '20.75' && babyCupboardFebContents.kpi4 < '24.9')?'green':(babyCupboardFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi4}}
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
                              :color="(babyCupboardMarContents.kpi1 == null)?'grey-2':(babyCupboardMarContents.kpi1 >= '0' && babyCupboardMarContents.kpi1 <= '27')?'red':(babyCupboardMarContents.kpi1 > '27' && babyCupboardMarContents.kpi1 <= '36')?'orange':(babyCupboardMarContents.kpi1 > '36' && babyCupboardMarContents.kpi1 < '45')?'yellow-7':(babyCupboardMarContents.kpi1 >= '45' && babyCupboardMarContents.kpi1 < '477.6')?'green':(babyCupboardMarContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi2 == null)?'grey-2':(babyCupboardMarContents.kpi2 >= '0' && babyCupboardMarContents.kpi2 <= '27')?'red':(babyCupboardMarContents.kpi2 > '27' && babyCupboardMarContents.kpi2 <= '36')?'orange':(babyCupboardMarContents.kpi2 > '36' && babyCupboardMarContents.kpi2 < '45')?'yellow-7':(babyCupboardMarContents.kpi2 >= '45' && babyCupboardMarContents.kpi2 < '488.4')?'green':(babyCupboardMarContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi3 == null)?'grey-2':(babyCupboardMarContents.kpi3 >= '0' && babyCupboardMarContents.kpi3 <= '31.25')?'red':(babyCupboardMarContents.kpi3 > '31.25' && babyCupboardMarContents.kpi3 <= '41.8')?'orange':(babyCupboardMarContents.kpi3 > '41.8' && babyCupboardMarContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMarContents.kpi3 >= '52.25' && babyCupboardMarContents.kpi3 < '1048.5')?'green':(babyCupboardMarContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi4 == null)?'grey-2':(babyCupboardMarContents.kpi4 >= '0' && babyCupboardMarContents.kpi4 <= '12.45')?'red':(babyCupboardMarContents.kpi4 > '12.45' && babyCupboardMarContents.kpi4 <= '16.6')?'orange':(babyCupboardMarContents.kpi4 > '16.6' && babyCupboardMarContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMarContents.kpi4 >= '20.75' && babyCupboardMarContents.kpi4 < '24.9')?'green':(babyCupboardMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi4}}
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
                              :color="(babyCupboardAprContents.kpi1 == null)?'grey-2':(babyCupboardAprContents.kpi1 >= '0' && babyCupboardAprContents.kpi1 <= '27')?'red':(babyCupboardAprContents.kpi1 > '27' && babyCupboardAprContents.kpi1 <= '36')?'orange':(babyCupboardAprContents.kpi1 > '36' && babyCupboardAprContents.kpi1 < '45')?'yellow-7':(babyCupboardAprContents.kpi1 >= '45' && babyCupboardAprContents.kpi1 < '477.6')?'green':(babyCupboardAprContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi2 == null)?'grey-2':(babyCupboardAprContents.kpi2 >= '0' && babyCupboardAprContents.kpi2 <= '27')?'red':(babyCupboardAprContents.kpi2 > '27' && babyCupboardAprContents.kpi2 <= '36')?'orange':(babyCupboardAprContents.kpi2 > '36' && babyCupboardAprContents.kpi2 < '45')?'yellow-7':(babyCupboardAprContents.kpi2 >= '45' && babyCupboardAprContents.kpi2 < '488.4')?'green':(babyCupboardAprContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi3 == null)?'grey-2':(babyCupboardAprContents.kpi3 >= '0' && babyCupboardAprContents.kpi3 <= '31.25')?'red':(babyCupboardAprContents.kpi3 > '31.25' && babyCupboardAprContents.kpi3 <= '41.8')?'orange':(babyCupboardAprContents.kpi3 > '41.8' && babyCupboardAprContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAprContents.kpi3 >= '52.25' && babyCupboardAprContents.kpi3 < '1048.5')?'green':(babyCupboardAprContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi4 == null)?'grey-2':(babyCupboardAprContents.kpi4 >= '0' && babyCupboardAprContents.kpi4 <= '12.45')?'red':(babyCupboardAprContents.kpi4 > '12.45' && babyCupboardAprContents.kpi4 <= '16.6')?'orange':(babyCupboardAprContents.kpi4 > '16.6' && babyCupboardAprContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAprContents.kpi4 >= '20.75' && babyCupboardAprContents.kpi4 < '24.9')?'green':(babyCupboardAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi4}}
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
                              :color="(babyCupboardMayContents.kpi1 == null)?'grey-2':(babyCupboardMayContents.kpi1 >= '0' && babyCupboardMayContents.kpi1 <= '27')?'red':(babyCupboardMayContents.kpi1 > '27' && babyCupboardMayContents.kpi1 <= '36')?'orange':(babyCupboardMayContents.kpi1 > '36' && babyCupboardMayContents.kpi1 < '45')?'yellow-7':(babyCupboardMayContents.kpi1 >= '45' && babyCupboardMayContents.kpi1 < '477.6')?'green':(babyCupboardMayContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi2 == null)?'grey-2':(babyCupboardMayContents.kpi2 >= '0' && babyCupboardMayContents.kpi2 <= '27')?'red':(babyCupboardMayContents.kpi2 > '27' && babyCupboardMayContents.kpi2 <= '36')?'orange':(babyCupboardMayContents.kpi2 > '36' && babyCupboardMayContents.kpi2 < '45')?'yellow-7':(babyCupboardMayContents.kpi2 >= '45' && babyCupboardMayContents.kpi2 < '488.4')?'green':(babyCupboardMayContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi3 == null)?'grey-2':(babyCupboardMayContents.kpi3 >= '0' && babyCupboardMayContents.kpi3 <= '31.25')?'red':(babyCupboardMayContents.kpi3 > '31.25' && babyCupboardMayContents.kpi3 <= '41.8')?'orange':(babyCupboardMayContents.kpi3 > '41.8' && babyCupboardMayContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMayContents.kpi3 >= '52.25' && babyCupboardMayContents.kpi3 < '1048.5')?'green':(babyCupboardMayContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi4 == null)?'grey-2':(babyCupboardMayContents.kpi4 >= '0' && babyCupboardMayContents.kpi4 <= '12.45')?'red':(babyCupboardMayContents.kpi4 > '12.45' && babyCupboardMayContents.kpi4 <= '16.6')?'orange':(babyCupboardMayContents.kpi4 > '16.6' && babyCupboardMayContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMayContents.kpi4 >= '20.75' && babyCupboardMayContents.kpi4 < '24.9')?'green':(babyCupboardMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi4}}
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
                              :color="(babyCupboardJunContents.kpi1 == null)?'grey-2':(babyCupboardJunContents.kpi1 >= '0' && babyCupboardJunContents.kpi1 <= '27')?'red':(babyCupboardJunContents.kpi1 > '27' && babyCupboardJunContents.kpi1 <= '36')?'orange':(babyCupboardJunContents.kpi1 > '36' && babyCupboardJunContents.kpi1 < '45')?'yellow-7':(babyCupboardJunContents.kpi1 >= '45' && babyCupboardJunContents.kpi1 < '477.6')?'green':(babyCupboardJunContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi2 == null)?'grey-2':(babyCupboardJunContents.kpi2 >= '0' && babyCupboardJunContents.kpi2 <= '27')?'red':(babyCupboardJunContents.kpi2 > '27' && babyCupboardJunContents.kpi2 <= '36')?'orange':(babyCupboardJunContents.kpi2 > '36' && babyCupboardJunContents.kpi2 < '45')?'yellow-7':(babyCupboardJunContents.kpi2 >= '45' && babyCupboardJunContents.kpi2 < '488.4')?'green':(babyCupboardJunContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi3 == null)?'grey-2':(babyCupboardJunContents.kpi3 >= '0' && babyCupboardJunContents.kpi3 <= '31.25')?'red':(babyCupboardJunContents.kpi3 > '31.25' && babyCupboardJunContents.kpi3 <= '41.8')?'orange':(babyCupboardJunContents.kpi3 > '41.8' && babyCupboardJunContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJunContents.kpi3 >= '52.25' && babyCupboardJunContents.kpi3 < '1048.5')?'green':(babyCupboardJunContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi4 == null)?'grey-2':(babyCupboardJunContents.kpi4 >= '0' && babyCupboardJunContents.kpi4 <= '12.45')?'red':(babyCupboardJunContents.kpi4 > '12.45' && babyCupboardJunContents.kpi4 <= '16.6')?'orange':(babyCupboardJunContents.kpi4 > '16.6' && babyCupboardJunContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJunContents.kpi4 >= '20.75' && babyCupboardJunContents.kpi4 < '24.9')?'green':(babyCupboardJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi4}}
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
                              :color="(babyCupboardJulContents.kpi1 == null)?'grey-2':(babyCupboardJulContents.kpi1 >= '0' && babyCupboardJulContents.kpi1 <= '27')?'red':(babyCupboardJulContents.kpi1 > '27' && babyCupboardJulContents.kpi1 <= '36')?'orange':(babyCupboardJulContents.kpi1 > '36' && babyCupboardJulContents.kpi1 < '45')?'yellow-7':(babyCupboardJulContents.kpi1 >= '45' && babyCupboardJulContents.kpi1 < '477.6')?'green':(babyCupboardJulContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi2 == null)?'grey-2':(babyCupboardJulContents.kpi2 >= '0' && babyCupboardJulContents.kpi2 <= '27')?'red':(babyCupboardJulContents.kpi2 > '27' && babyCupboardJulContents.kpi2 <= '36')?'orange':(babyCupboardJulContents.kpi2 > '36' && babyCupboardJulContents.kpi2 < '45')?'yellow-7':(babyCupboardJulContents.kpi2 >= '45' && babyCupboardJulContents.kpi2 < '488.4')?'green':(babyCupboardJulContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi3 == null)?'grey-2':(babyCupboardJulContents.kpi3 >= '0' && babyCupboardJulContents.kpi3 <= '31.25')?'red':(babyCupboardJulContents.kpi3 > '31.25' && babyCupboardJulContents.kpi3 <= '41.8')?'orange':(babyCupboardJulContents.kpi3 > '41.8' && babyCupboardJulContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJulContents.kpi3 >= '52.25' && babyCupboardJulContents.kpi3 < '1048.5')?'green':(babyCupboardJulContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi4 == null)?'grey-2':(babyCupboardJulContents.kpi4 >= '0' && babyCupboardJulContents.kpi4 <= '12.45')?'red':(babyCupboardJulContents.kpi4 > '12.45' && babyCupboardJulContents.kpi4 <= '16.6')?'orange':(babyCupboardJulContents.kpi4 > '16.6' && babyCupboardJulContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJulContents.kpi4 >= '20.75' && babyCupboardJulContents.kpi4 < '24.9')?'green':(babyCupboardJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi4}}
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
                              :color="(babyCupboardAugContents.kpi1 == null)?'grey-2':(babyCupboardAugContents.kpi1 >= '0' && babyCupboardAugContents.kpi1 <= '27')?'red':(babyCupboardAugContents.kpi1 > '27' && babyCupboardAugContents.kpi1 <= '36')?'orange':(babyCupboardAugContents.kpi1 > '36' && babyCupboardAugContents.kpi1 < '45')?'yellow-7':(babyCupboardAugContents.kpi1 >= '45' && babyCupboardAugContents.kpi1 < '477.6')?'green':(babyCupboardAugContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi2 == null)?'grey-2':(babyCupboardAugContents.kpi2 >= '0' && babyCupboardAugContents.kpi2 <= '27')?'red':(babyCupboardAugContents.kpi2 > '27' && babyCupboardAugContents.kpi2 <= '36')?'orange':(babyCupboardAugContents.kpi2 > '36' && babyCupboardAugContents.kpi2 < '45')?'yellow-7':(babyCupboardAugContents.kpi2 >= '45' && babyCupboardAugContents.kpi2 < '488.4')?'green':(babyCupboardAugContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi3 == null)?'grey-2':(babyCupboardAugContents.kpi3 >= '0' && babyCupboardAugContents.kpi3 <= '31.25')?'red':(babyCupboardAugContents.kpi3 > '31.25' && babyCupboardAugContents.kpi3 <= '41.8')?'orange':(babyCupboardAugContents.kpi3 > '41.8' && babyCupboardAugContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAugContents.kpi3 >= '52.25' && babyCupboardAugContents.kpi3 < '1048.5')?'green':(babyCupboardAugContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi4 == null)?'grey-2':(babyCupboardAugContents.kpi4 >= '0' && babyCupboardAugContents.kpi4 <= '12.45')?'red':(babyCupboardAugContents.kpi4 > '12.45' && babyCupboardAugContents.kpi4 <= '16.6')?'orange':(babyCupboardAugContents.kpi4 > '16.6' && babyCupboardAugContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAugContents.kpi4 >= '20.75' && babyCupboardAugContents.kpi4 < '24.9')?'green':(babyCupboardAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi4}}
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
                              :color="(babyCupboardSepContents.kpi1 == null)?'grey-2':(babyCupboardSepContents.kpi1 >= '0' && babyCupboardSepContents.kpi1 <= '27')?'red':(babyCupboardSepContents.kpi1 > '27' && babyCupboardSepContents.kpi1 <= '36')?'orange':(babyCupboardSepContents.kpi1 > '36' && babyCupboardSepContents.kpi1 < '45')?'yellow-7':(babyCupboardSepContents.kpi1 >= '45' && babyCupboardSepContents.kpi1 < '477.6')?'green':(babyCupboardSepContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi2 == null)?'grey-2':(babyCupboardSepContents.kpi2 >= '0' && babyCupboardSepContents.kpi2 <= '27')?'red':(babyCupboardSepContents.kpi2 > '27' && babyCupboardSepContents.kpi2 <= '36')?'orange':(babyCupboardSepContents.kpi2 > '36' && babyCupboardSepContents.kpi2 < '45')?'yellow-7':(babyCupboardSepContents.kpi2 >= '45' && babyCupboardSepContents.kpi2 < '488.4')?'green':(babyCupboardSepContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi3 == null)?'grey-2':(babyCupboardSepContents.kpi3 >= '0' && babyCupboardSepContents.kpi3 <= '31.25')?'red':(babyCupboardSepContents.kpi3 > '31.25' && babyCupboardSepContents.kpi3 <= '41.8')?'orange':(babyCupboardSepContents.kpi3 > '41.8' && babyCupboardSepContents.kpi3 < '52.25')?'yellow-7':(babyCupboardSepContents.kpi3 >= '52.25' && babyCupboardSepContents.kpi3 < '1048.5')?'green':(babyCupboardSepContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi4 == null)?'grey-2':(babyCupboardSepContents.kpi4 >= '0' && babyCupboardSepContents.kpi4 <= '12.45')?'red':(babyCupboardSepContents.kpi4 > '12.45' && babyCupboardSepContents.kpi4 <= '16.6')?'orange':(babyCupboardSepContents.kpi4 > '16.6' && babyCupboardSepContents.kpi4 < '20.75')?'yellow-7':(babyCupboardSepContents.kpi4 >= '20.75' && babyCupboardSepContents.kpi4 < '24.9')?'green':(babyCupboardSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi4}}
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
                              :color="(babyCupboardOctContents.kpi1 == null)?'grey-2':(babyCupboardOctContents.kpi1 >= '0' && babyCupboardOctContents.kpi1 <= '27')?'red':(babyCupboardOctContents.kpi1 > '27' && babyCupboardOctContents.kpi1 <= '36')?'orange':(babyCupboardOctContents.kpi1 > '36' && babyCupboardOctContents.kpi1 < '45')?'yellow-7':(babyCupboardOctContents.kpi1 >= '45' && babyCupboardOctContents.kpi1 < '477.6')?'green':(babyCupboardOctContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi2 == null)?'grey-2':(babyCupboardOctContents.kpi2 >= '0' && babyCupboardOctContents.kpi2 <= '27')?'red':(babyCupboardOctContents.kpi2 > '27' && babyCupboardOctContents.kpi2 <= '36')?'orange':(babyCupboardOctContents.kpi2 > '36' && babyCupboardOctContents.kpi2 < '45')?'yellow-7':(babyCupboardOctContents.kpi2 >= '45' && babyCupboardOctContents.kpi2 < '488.4')?'green':(babyCupboardOctContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi3 == null)?'grey-2':(babyCupboardOctContents.kpi3 >= '0' && babyCupboardOctContents.kpi3 <= '31.25')?'red':(babyCupboardOctContents.kpi3 > '31.25' && babyCupboardOctContents.kpi3 <= '41.8')?'orange':(babyCupboardOctContents.kpi3 > '41.8' && babyCupboardOctContents.kpi3 < '52.25')?'yellow-7':(babyCupboardOctContents.kpi3 >= '52.25' && babyCupboardOctContents.kpi3 < '1048.5')?'green':(babyCupboardOctContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi4 == null)?'grey-2':(babyCupboardOctContents.kpi4 >= '0' && babyCupboardOctContents.kpi4 <= '12.45')?'red':(babyCupboardOctContents.kpi4 > '12.45' && babyCupboardOctContents.kpi4 <= '16.6')?'orange':(babyCupboardOctContents.kpi4 > '16.6' && babyCupboardOctContents.kpi4 < '20.75')?'yellow-7':(babyCupboardOctContents.kpi4 >= '20.75' && babyCupboardOctContents.kpi4 < '24.9')?'green':(babyCupboardOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi4}}
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
                              :color="(babyCupboardNovContents.kpi1 == null)?'grey-2':(babyCupboardNovContents.kpi1 >= '0' && babyCupboardNovContents.kpi1 <= '27')?'red':(babyCupboardNovContents.kpi1 > '27' && babyCupboardNovContents.kpi1 <= '36')?'orange':(babyCupboardNovContents.kpi1 > '36' && babyCupboardNovContents.kpi1 < '45')?'yellow-7':(babyCupboardNovContents.kpi1 >= '45' && babyCupboardNovContents.kpi1 < '477.6')?'green':(babyCupboardNovContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi2 == null)?'grey-2':(babyCupboardNovContents.kpi2 >= '0' && babyCupboardNovContents.kpi2 <= '27')?'red':(babyCupboardNovContents.kpi2 > '27' && babyCupboardNovContents.kpi2 <= '36')?'orange':(babyCupboardNovContents.kpi2 > '36' && babyCupboardNovContents.kpi2 < '45')?'yellow-7':(babyCupboardNovContents.kpi2 >= '45' && babyCupboardNovContents.kpi2 < '488.4')?'green':(babyCupboardNovContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi3 == null)?'grey-2':(babyCupboardNovContents.kpi3 >= '0' && babyCupboardNovContents.kpi3 <= '31.25')?'red':(babyCupboardNovContents.kpi3 > '31.25' && babyCupboardNovContents.kpi3 <= '41.8')?'orange':(babyCupboardNovContents.kpi3 > '41.8' && babyCupboardNovContents.kpi3 < '52.25')?'yellow-7':(babyCupboardNovContents.kpi3 >= '52.25' && babyCupboardNovContents.kpi3 < '1048.5')?'green':(babyCupboardNovContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi4 == null)?'grey-2':(babyCupboardNovContents.kpi4 >= '0' && babyCupboardNovContents.kpi4 <= '12.45')?'red':(babyCupboardNovContents.kpi4 > '12.45' && babyCupboardNovContents.kpi4 <= '16.6')?'orange':(babyCupboardNovContents.kpi4 > '16.6' && babyCupboardNovContents.kpi4 < '20.75')?'yellow-7':(babyCupboardNovContents.kpi4 >= '20.75' && babyCupboardNovContents.kpi4 < '24.9')?'green':(babyCupboardNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi4}}
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
                              :color="(babyCupboardDecContents.kpi1 == null)?'grey-2':(babyCupboardDecContents.kpi1 >= '0' && babyCupboardDecContents.kpi1 <= '27')?'red':(babyCupboardDecContents.kpi1 > '27' && babyCupboardDecContents.kpi1 <= '36')?'orange':(babyCupboardDecContents.kpi1 > '36' && babyCupboardDecContents.kpi1 < '45')?'yellow-7':(babyCupboardDecContents.kpi1 >= '45' && babyCupboardDecContents.kpi1 < '477.6')?'green':(babyCupboardDecContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi2 == null)?'grey-2':(babyCupboardDecContents.kpi2 >= '0' && babyCupboardDecContents.kpi2 <= '27')?'red':(babyCupboardDecContents.kpi2 > '27' && babyCupboardDecContents.kpi2 <= '36')?'orange':(babyCupboardDecContents.kpi2 > '36' && babyCupboardDecContents.kpi2 < '45')?'yellow-7':(babyCupboardDecContents.kpi2 >= '45' && babyCupboardDecContents.kpi2 < '488.4')?'green':(babyCupboardDecContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi3 == null)?'grey-2':(babyCupboardDecContents.kpi3 >= '0' && babyCupboardDecContents.kpi3 <= '31.25')?'red':(babyCupboardDecContents.kpi3 > '31.25' && babyCupboardDecContents.kpi3 <= '41.8')?'orange':(babyCupboardDecContents.kpi3 > '41.8' && babyCupboardDecContents.kpi3 < '52.25')?'yellow-7':(babyCupboardDecContents.kpi3 >= '52.25' && babyCupboardDecContents.kpi3 < '1048.5')?'green':(babyCupboardDecContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi4 == null)?'grey-2':(babyCupboardDecContents.kpi4 >= '0' && babyCupboardDecContents.kpi4 <= '12.45')?'red':(babyCupboardDecContents.kpi4 > '12.45' && babyCupboardDecContents.kpi4 <= '16.6')?'orange':(babyCupboardDecContents.kpi4 > '16.6' && babyCupboardDecContents.kpi4 < '20.75')?'yellow-7':(babyCupboardDecContents.kpi4 >= '20.75' && babyCupboardDecContents.kpi4 < '24.9')?'green':(babyCupboardDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi4}}
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
                              :color="(babyCupboardJanContents.kpi1 == null)?'grey-2':(babyCupboardJanContents.kpi1 >= '0' && babyCupboardJanContents.kpi1 <= '27')?'red':(babyCupboardJanContents.kpi1 > '27' && babyCupboardJanContents.kpi1 <= '36')?'orange':(babyCupboardJanContents.kpi1 > '36' && babyCupboardJanContents.kpi1 < '45')?'yellow-7':(babyCupboardJanContents.kpi1 >= '45' && babyCupboardJanContents.kpi1 < '477.6')?'green':(babyCupboardJanContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi2 == null)?'grey-2':(babyCupboardJanContents.kpi2 >= '0' && babyCupboardJanContents.kpi2 <= '27')?'red':(babyCupboardJanContents.kpi2 > '27' && babyCupboardJanContents.kpi2 <= '36')?'orange':(babyCupboardJanContents.kpi2 > '36' && babyCupboardJanContents.kpi2 < '45')?'yellow-7':(babyCupboardJanContents.kpi2 >= '45' && babyCupboardJanContents.kpi2 < '488.4')?'green':(babyCupboardJanContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi3 == null)?'grey-2':(babyCupboardJanContents.kpi3 >= '0' && babyCupboardJanContents.kpi3 <= '31.25')?'red':(babyCupboardJanContents.kpi3 > '31.25' && babyCupboardJanContents.kpi3 <= '41.8')?'orange':(babyCupboardJanContents.kpi3 > '41.8' && babyCupboardJanContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJanContents.kpi3 >= '52.25' && babyCupboardJanContents.kpi3 < '1048.5')?'green':(babyCupboardJanContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi4 == null)?'grey-2':(babyCupboardJanContents.kpi4 >= '0' && babyCupboardJanContents.kpi4 <= '12.45')?'red':(babyCupboardJanContents.kpi4 > '12.45' && babyCupboardJanContents.kpi4 <= '16.6')?'orange':(babyCupboardJanContents.kpi4 > '16.6' && babyCupboardJanContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJanContents.kpi4 >= '20.75' && babyCupboardJanContents.kpi4 < '24.9')?'green':(babyCupboardJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi4}}
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
                              :color="(babyCupboardFebContents.kpi1 == null)?'grey-2':(babyCupboardFebContents.kpi1 >= '0' && babyCupboardFebContents.kpi1 <= '27')?'red':(babyCupboardFebContents.kpi1 > '27' && babyCupboardFebContents.kpi1 <= '36')?'orange':(babyCupboardFebContents.kpi1 > '36' && babyCupboardFebContents.kpi1 < '45')?'yellow-7':(babyCupboardFebContents.kpi1 >= '45' && babyCupboardFebContents.kpi1 < '477.6')?'green':(babyCupboardFebContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi2 == null)?'grey-2':(babyCupboardFebContents.kpi2 >= '0' && babyCupboardFebContents.kpi2 <= '27')?'red':(babyCupboardFebContents.kpi2 > '27' && babyCupboardFebContents.kpi2 <= '36')?'orange':(babyCupboardFebContents.kpi2 > '36' && babyCupboardFebContents.kpi2 < '45')?'yellow-7':(babyCupboardFebContents.kpi2 >= '45' && babyCupboardFebContents.kpi2 < '488.4')?'green':(babyCupboardFebContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi3 == null)?'grey-2':(babyCupboardFebContents.kpi3 >= '0' && babyCupboardFebContents.kpi3 <= '31.25')?'red':(babyCupboardFebContents.kpi3 > '31.25' && babyCupboardFebContents.kpi3 <= '41.8')?'orange':(babyCupboardFebContents.kpi3 > '41.8' && babyCupboardFebContents.kpi3 < '52.25')?'yellow-7':(babyCupboardFebContents.kpi3 >= '52.25' && babyCupboardFebContents.kpi3 < '1048.5')?'green':(babyCupboardFebContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi4 == null)?'grey-2':(babyCupboardFebContents.kpi4 >= '0' && babyCupboardFebContents.kpi4 <= '12.45')?'red':(babyCupboardFebContents.kpi4 > '12.45' && babyCupboardFebContents.kpi4 <= '16.6')?'orange':(babyCupboardFebContents.kpi4 > '16.6' && babyCupboardFebContents.kpi4 < '20.75')?'yellow-7':(babyCupboardFebContents.kpi4 >= '20.75' && babyCupboardFebContents.kpi4 < '24.9')?'green':(babyCupboardFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi4}}
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
                              :color="(babyCupboardMarContents.kpi1 == null)?'grey-2':(babyCupboardMarContents.kpi1 >= '0' && babyCupboardMarContents.kpi1 <= '27')?'red':(babyCupboardMarContents.kpi1 > '27' && babyCupboardMarContents.kpi1 <= '36')?'orange':(babyCupboardMarContents.kpi1 > '36' && babyCupboardMarContents.kpi1 < '45')?'yellow-7':(babyCupboardMarContents.kpi1 >= '45' && babyCupboardMarContents.kpi1 < '477.6')?'green':(babyCupboardMarContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi2 == null)?'grey-2':(babyCupboardMarContents.kpi2 >= '0' && babyCupboardMarContents.kpi2 <= '27')?'red':(babyCupboardMarContents.kpi2 > '27' && babyCupboardMarContents.kpi2 <= '36')?'orange':(babyCupboardMarContents.kpi2 > '36' && babyCupboardMarContents.kpi2 < '45')?'yellow-7':(babyCupboardMarContents.kpi2 >= '45' && babyCupboardMarContents.kpi2 < '488.4')?'green':(babyCupboardMarContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi3 == null)?'grey-2':(babyCupboardMarContents.kpi3 >= '0' && babyCupboardMarContents.kpi3 <= '31.25')?'red':(babyCupboardMarContents.kpi3 > '31.25' && babyCupboardMarContents.kpi3 <= '41.8')?'orange':(babyCupboardMarContents.kpi3 > '41.8' && babyCupboardMarContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMarContents.kpi3 >= '52.25' && babyCupboardMarContents.kpi3 < '1048.5')?'green':(babyCupboardMarContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi4 == null)?'grey-2':(babyCupboardMarContents.kpi4 >= '0' && babyCupboardMarContents.kpi4 <= '12.45')?'red':(babyCupboardMarContents.kpi4 > '12.45' && babyCupboardMarContents.kpi4 <= '16.6')?'orange':(babyCupboardMarContents.kpi4 > '16.6' && babyCupboardMarContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMarContents.kpi4 >= '20.75' && babyCupboardMarContents.kpi4 < '24.9')?'green':(babyCupboardMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi4}}
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
                              :color="(babyCupboardAprContents.kpi1 == null)?'grey-2':(babyCupboardAprContents.kpi1 >= '0' && babyCupboardAprContents.kpi1 <= '27')?'red':(babyCupboardAprContents.kpi1 > '27' && babyCupboardAprContents.kpi1 <= '36')?'orange':(babyCupboardAprContents.kpi1 > '36' && babyCupboardAprContents.kpi1 < '45')?'yellow-7':(babyCupboardAprContents.kpi1 >= '45' && babyCupboardAprContents.kpi1 < '477.6')?'green':(babyCupboardAprContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi2 == null)?'grey-2':(babyCupboardAprContents.kpi2 >= '0' && babyCupboardAprContents.kpi2 <= '27')?'red':(babyCupboardAprContents.kpi2 > '27' && babyCupboardAprContents.kpi2 <= '36')?'orange':(babyCupboardAprContents.kpi2 > '36' && babyCupboardAprContents.kpi2 < '45')?'yellow-7':(babyCupboardAprContents.kpi2 >= '45' && babyCupboardAprContents.kpi2 < '488.4')?'green':(babyCupboardAprContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi3 == null)?'grey-2':(babyCupboardAprContents.kpi3 >= '0' && babyCupboardAprContents.kpi3 <= '31.25')?'red':(babyCupboardAprContents.kpi3 > '31.25' && babyCupboardAprContents.kpi3 <= '41.8')?'orange':(babyCupboardAprContents.kpi3 > '41.8' && babyCupboardAprContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAprContents.kpi3 >= '52.25' && babyCupboardAprContents.kpi3 < '1048.5')?'green':(babyCupboardAprContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi4 == null)?'grey-2':(babyCupboardAprContents.kpi4 >= '0' && babyCupboardAprContents.kpi4 <= '12.45')?'red':(babyCupboardAprContents.kpi4 > '12.45' && babyCupboardAprContents.kpi4 <= '16.6')?'orange':(babyCupboardAprContents.kpi4 > '16.6' && babyCupboardAprContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAprContents.kpi4 >= '20.75' && babyCupboardAprContents.kpi4 < '24.9')?'green':(babyCupboardAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi4}}
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
                              :color="(babyCupboardMayContents.kpi1 == null)?'grey-2':(babyCupboardMayContents.kpi1 >= '0' && babyCupboardMayContents.kpi1 <= '27')?'red':(babyCupboardMayContents.kpi1 > '27' && babyCupboardMayContents.kpi1 <= '36')?'orange':(babyCupboardMayContents.kpi1 > '36' && babyCupboardMayContents.kpi1 < '45')?'yellow-7':(babyCupboardMayContents.kpi1 >= '45' && babyCupboardMayContents.kpi1 < '477.6')?'green':(babyCupboardMayContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi2 == null)?'grey-2':(babyCupboardMayContents.kpi2 >= '0' && babyCupboardMayContents.kpi2 <= '27')?'red':(babyCupboardMayContents.kpi2 > '27' && babyCupboardMayContents.kpi2 <= '36')?'orange':(babyCupboardMayContents.kpi2 > '36' && babyCupboardMayContents.kpi2 < '45')?'yellow-7':(babyCupboardMayContents.kpi2 >= '45' && babyCupboardMayContents.kpi2 < '488.4')?'green':(babyCupboardMayContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi3 == null)?'grey-2':(babyCupboardMayContents.kpi3 >= '0' && babyCupboardMayContents.kpi3 <= '31.25')?'red':(babyCupboardMayContents.kpi3 > '31.25' && babyCupboardMayContents.kpi3 <= '41.8')?'orange':(babyCupboardMayContents.kpi3 > '41.8' && babyCupboardMayContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMayContents.kpi3 >= '52.25' && babyCupboardMayContents.kpi3 < '1048.5')?'green':(babyCupboardMayContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi4 == null)?'grey-2':(babyCupboardMayContents.kpi4 >= '0' && babyCupboardMayContents.kpi4 <= '12.45')?'red':(babyCupboardMayContents.kpi4 > '12.45' && babyCupboardMayContents.kpi4 <= '16.6')?'orange':(babyCupboardMayContents.kpi4 > '16.6' && babyCupboardMayContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMayContents.kpi4 >= '20.75' && babyCupboardMayContents.kpi4 < '24.9')?'green':(babyCupboardMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi4}}
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
                              :color="(babyCupboardJunContents.kpi1 == null)?'grey-2':(babyCupboardJunContents.kpi1 >= '0' && babyCupboardJunContents.kpi1 <= '27')?'red':(babyCupboardJunContents.kpi1 > '27' && babyCupboardJunContents.kpi1 <= '36')?'orange':(babyCupboardJunContents.kpi1 > '36' && babyCupboardJunContents.kpi1 < '45')?'yellow-7':(babyCupboardJunContents.kpi1 >= '45' && babyCupboardJunContents.kpi1 < '477.6')?'green':(babyCupboardJunContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi2 == null)?'grey-2':(babyCupboardJunContents.kpi2 >= '0' && babyCupboardJunContents.kpi2 <= '27')?'red':(babyCupboardJunContents.kpi2 > '27' && babyCupboardJunContents.kpi2 <= '36')?'orange':(babyCupboardJunContents.kpi2 > '36' && babyCupboardJunContents.kpi2 < '45')?'yellow-7':(babyCupboardJunContents.kpi2 >= '45' && babyCupboardJunContents.kpi2 < '488.4')?'green':(babyCupboardJunContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi3 == null)?'grey-2':(babyCupboardJunContents.kpi3 >= '0' && babyCupboardJunContents.kpi3 <= '31.25')?'red':(babyCupboardJunContents.kpi3 > '31.25' && babyCupboardJunContents.kpi3 <= '41.8')?'orange':(babyCupboardJunContents.kpi3 > '41.8' && babyCupboardJunContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJunContents.kpi3 >= '52.25' && babyCupboardJunContents.kpi3 < '1048.5')?'green':(babyCupboardJunContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi4 == null)?'grey-2':(babyCupboardJunContents.kpi4 >= '0' && babyCupboardJunContents.kpi4 <= '12.45')?'red':(babyCupboardJunContents.kpi4 > '12.45' && babyCupboardJunContents.kpi4 <= '16.6')?'orange':(babyCupboardJunContents.kpi4 > '16.6' && babyCupboardJunContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJunContents.kpi4 >= '20.75' && babyCupboardJunContents.kpi4 < '24.9')?'green':(babyCupboardJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi4}}
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
                              :color="(babyCupboardJulContents.kpi1 == null)?'grey-2':(babyCupboardJulContents.kpi1 >= '0' && babyCupboardJulContents.kpi1 <= '27')?'red':(babyCupboardJulContents.kpi1 > '27' && babyCupboardJulContents.kpi1 <= '36')?'orange':(babyCupboardJulContents.kpi1 > '36' && babyCupboardJulContents.kpi1 < '45')?'yellow-7':(babyCupboardJulContents.kpi1 >= '45' && babyCupboardJulContents.kpi1 < '477.6')?'green':(babyCupboardJulContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi2 == null)?'grey-2':(babyCupboardJulContents.kpi2 >= '0' && babyCupboardJulContents.kpi2 <= '27')?'red':(babyCupboardJulContents.kpi2 > '27' && babyCupboardJulContents.kpi2 <= '36')?'orange':(babyCupboardJulContents.kpi2 > '36' && babyCupboardJulContents.kpi2 < '45')?'yellow-7':(babyCupboardJulContents.kpi2 >= '45' && babyCupboardJulContents.kpi2 < '488.4')?'green':(babyCupboardJulContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi3 == null)?'grey-2':(babyCupboardJulContents.kpi3 >= '0' && babyCupboardJulContents.kpi3 <= '31.25')?'red':(babyCupboardJulContents.kpi3 > '31.25' && babyCupboardJulContents.kpi3 <= '41.8')?'orange':(babyCupboardJulContents.kpi3 > '41.8' && babyCupboardJulContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJulContents.kpi3 >= '52.25' && babyCupboardJulContents.kpi3 < '1048.5')?'green':(babyCupboardJulContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi4 == null)?'grey-2':(babyCupboardJulContents.kpi4 >= '0' && babyCupboardJulContents.kpi4 <= '12.45')?'red':(babyCupboardJulContents.kpi4 > '12.45' && babyCupboardJulContents.kpi4 <= '16.6')?'orange':(babyCupboardJulContents.kpi4 > '16.6' && babyCupboardJulContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJulContents.kpi4 >= '20.75' && babyCupboardJulContents.kpi4 < '24.9')?'green':(babyCupboardJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi4}}
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
                              :color="(babyCupboardAugContents.kpi1 == null)?'grey-2':(babyCupboardAugContents.kpi1 >= '0' && babyCupboardAugContents.kpi1 <= '27')?'red':(babyCupboardAugContents.kpi1 > '27' && babyCupboardAugContents.kpi1 <= '36')?'orange':(babyCupboardAugContents.kpi1 > '36' && babyCupboardAugContents.kpi1 < '45')?'yellow-7':(babyCupboardAugContents.kpi1 >= '45' && babyCupboardAugContents.kpi1 < '477.6')?'green':(babyCupboardAugContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi2 == null)?'grey-2':(babyCupboardAugContents.kpi2 >= '0' && babyCupboardAugContents.kpi2 <= '27')?'red':(babyCupboardAugContents.kpi2 > '27' && babyCupboardAugContents.kpi2 <= '36')?'orange':(babyCupboardAugContents.kpi2 > '36' && babyCupboardAugContents.kpi2 < '45')?'yellow-7':(babyCupboardAugContents.kpi2 >= '45' && babyCupboardAugContents.kpi2 < '488.4')?'green':(babyCupboardAugContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi3 == null)?'grey-2':(babyCupboardAugContents.kpi3 >= '0' && babyCupboardAugContents.kpi3 <= '31.25')?'red':(babyCupboardAugContents.kpi3 > '31.25' && babyCupboardAugContents.kpi3 <= '41.8')?'orange':(babyCupboardAugContents.kpi3 > '41.8' && babyCupboardAugContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAugContents.kpi3 >= '52.25' && babyCupboardAugContents.kpi3 < '1048.5')?'green':(babyCupboardAugContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi4 == null)?'grey-2':(babyCupboardAugContents.kpi4 >= '0' && babyCupboardAugContents.kpi4 <= '12.45')?'red':(babyCupboardAugContents.kpi4 > '12.45' && babyCupboardAugContents.kpi4 <= '16.6')?'orange':(babyCupboardAugContents.kpi4 > '16.6' && babyCupboardAugContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAugContents.kpi4 >= '20.75' && babyCupboardAugContents.kpi4 < '24.9')?'green':(babyCupboardAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi4}}
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
                              :color="(babyCupboardSepContents.kpi1 == null)?'grey-2':(babyCupboardSepContents.kpi1 >= '0' && babyCupboardSepContents.kpi1 <= '27')?'red':(babyCupboardSepContents.kpi1 > '27' && babyCupboardSepContents.kpi1 <= '36')?'orange':(babyCupboardSepContents.kpi1 > '36' && babyCupboardSepContents.kpi1 < '45')?'yellow-7':(babyCupboardSepContents.kpi1 >= '45' && babyCupboardSepContents.kpi1 < '477.6')?'green':(babyCupboardSepContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi2 == null)?'grey-2':(babyCupboardSepContents.kpi2 >= '0' && babyCupboardSepContents.kpi2 <= '27')?'red':(babyCupboardSepContents.kpi2 > '27' && babyCupboardSepContents.kpi2 <= '36')?'orange':(babyCupboardSepContents.kpi2 > '36' && babyCupboardSepContents.kpi2 < '45')?'yellow-7':(babyCupboardSepContents.kpi2 >= '45' && babyCupboardSepContents.kpi2 < '488.4')?'green':(babyCupboardSepContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi3 == null)?'grey-2':(babyCupboardSepContents.kpi3 >= '0' && babyCupboardSepContents.kpi3 <= '31.25')?'red':(babyCupboardSepContents.kpi3 > '31.25' && babyCupboardSepContents.kpi3 <= '41.8')?'orange':(babyCupboardSepContents.kpi3 > '41.8' && babyCupboardSepContents.kpi3 < '52.25')?'yellow-7':(babyCupboardSepContents.kpi3 >= '52.25' && babyCupboardSepContents.kpi3 < '1048.5')?'green':(babyCupboardSepContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi4 == null)?'grey-2':(babyCupboardSepContents.kpi4 >= '0' && babyCupboardSepContents.kpi4 <= '12.45')?'red':(babyCupboardSepContents.kpi4 > '12.45' && babyCupboardSepContents.kpi4 <= '16.6')?'orange':(babyCupboardSepContents.kpi4 > '16.6' && babyCupboardSepContents.kpi4 < '20.75')?'yellow-7':(babyCupboardSepContents.kpi4 >= '20.75' && babyCupboardSepContents.kpi4 < '24.9')?'green':(babyCupboardSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi4}}
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
                              :color="(babyCupboardOctContents.kpi1 == null)?'grey-2':(babyCupboardOctContents.kpi1 >= '0' && babyCupboardOctContents.kpi1 <= '27')?'red':(babyCupboardOctContents.kpi1 > '27' && babyCupboardOctContents.kpi1 <= '36')?'orange':(babyCupboardOctContents.kpi1 > '36' && babyCupboardOctContents.kpi1 < '45')?'yellow-7':(babyCupboardOctContents.kpi1 >= '45' && babyCupboardOctContents.kpi1 < '477.6')?'green':(babyCupboardOctContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi2 == null)?'grey-2':(babyCupboardOctContents.kpi2 >= '0' && babyCupboardOctContents.kpi2 <= '27')?'red':(babyCupboardOctContents.kpi2 > '27' && babyCupboardOctContents.kpi2 <= '36')?'orange':(babyCupboardOctContents.kpi2 > '36' && babyCupboardOctContents.kpi2 < '45')?'yellow-7':(babyCupboardOctContents.kpi2 >= '45' && babyCupboardOctContents.kpi2 < '488.4')?'green':(babyCupboardOctContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi3 == null)?'grey-2':(babyCupboardOctContents.kpi3 >= '0' && babyCupboardOctContents.kpi3 <= '31.25')?'red':(babyCupboardOctContents.kpi3 > '31.25' && babyCupboardOctContents.kpi3 <= '41.8')?'orange':(babyCupboardOctContents.kpi3 > '41.8' && babyCupboardOctContents.kpi3 < '52.25')?'yellow-7':(babyCupboardOctContents.kpi3 >= '52.25' && babyCupboardOctContents.kpi3 < '1048.5')?'green':(babyCupboardOctContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi4 == null)?'grey-2':(babyCupboardOctContents.kpi4 >= '0' && babyCupboardOctContents.kpi4 <= '12.45')?'red':(babyCupboardOctContents.kpi4 > '12.45' && babyCupboardOctContents.kpi4 <= '16.6')?'orange':(babyCupboardOctContents.kpi4 > '16.6' && babyCupboardOctContents.kpi4 < '20.75')?'yellow-7':(babyCupboardOctContents.kpi4 >= '20.75' && babyCupboardOctContents.kpi4 < '24.9')?'green':(babyCupboardOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi4}}
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
                              :color="(babyCupboardNovContents.kpi1 == null)?'grey-2':(babyCupboardNovContents.kpi1 >= '0' && babyCupboardNovContents.kpi1 <= '27')?'red':(babyCupboardNovContents.kpi1 > '27' && babyCupboardNovContents.kpi1 <= '36')?'orange':(babyCupboardNovContents.kpi1 > '36' && babyCupboardNovContents.kpi1 < '45')?'yellow-7':(babyCupboardNovContents.kpi1 >= '45' && babyCupboardNovContents.kpi1 < '477.6')?'green':(babyCupboardNovContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi2 == null)?'grey-2':(babyCupboardNovContents.kpi2 >= '0' && babyCupboardNovContents.kpi2 <= '27')?'red':(babyCupboardNovContents.kpi2 > '27' && babyCupboardNovContents.kpi2 <= '36')?'orange':(babyCupboardNovContents.kpi2 > '36' && babyCupboardNovContents.kpi2 < '45')?'yellow-7':(babyCupboardNovContents.kpi2 >= '45' && babyCupboardNovContents.kpi2 < '488.4')?'green':(babyCupboardNovContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi3 == null)?'grey-2':(babyCupboardNovContents.kpi3 >= '0' && babyCupboardNovContents.kpi3 <= '31.25')?'red':(babyCupboardNovContents.kpi3 > '31.25' && babyCupboardNovContents.kpi3 <= '41.8')?'orange':(babyCupboardNovContents.kpi3 > '41.8' && babyCupboardNovContents.kpi3 < '52.25')?'yellow-7':(babyCupboardNovContents.kpi3 >= '52.25' && babyCupboardNovContents.kpi3 < '1048.5')?'green':(babyCupboardNovContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi4 == null)?'grey-2':(babyCupboardNovContents.kpi4 >= '0' && babyCupboardNovContents.kpi4 <= '12.45')?'red':(babyCupboardNovContents.kpi4 > '12.45' && babyCupboardNovContents.kpi4 <= '16.6')?'orange':(babyCupboardNovContents.kpi4 > '16.6' && babyCupboardNovContents.kpi4 < '20.75')?'yellow-7':(babyCupboardNovContents.kpi4 >= '20.75' && babyCupboardNovContents.kpi4 < '24.9')?'green':(babyCupboardNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi4}}
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
                              :color="(babyCupboardDecContents.kpi1 == null)?'grey-2':(babyCupboardDecContents.kpi1 >= '0' && babyCupboardDecContents.kpi1 <= '27')?'red':(babyCupboardDecContents.kpi1 > '27' && babyCupboardDecContents.kpi1 <= '36')?'orange':(babyCupboardDecContents.kpi1 > '36' && babyCupboardDecContents.kpi1 < '45')?'yellow-7':(babyCupboardDecContents.kpi1 >= '45' && babyCupboardDecContents.kpi1 < '477.6')?'green':(babyCupboardDecContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi2 == null)?'grey-2':(babyCupboardDecContents.kpi2 >= '0' && babyCupboardDecContents.kpi2 <= '27')?'red':(babyCupboardDecContents.kpi2 > '27' && babyCupboardDecContents.kpi2 <= '36')?'orange':(babyCupboardDecContents.kpi2 > '36' && babyCupboardDecContents.kpi2 < '45')?'yellow-7':(babyCupboardDecContents.kpi2 >= '45' && babyCupboardDecContents.kpi2 < '488.4')?'green':(babyCupboardDecContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi3 == null)?'grey-2':(babyCupboardDecContents.kpi3 >= '0' && babyCupboardDecContents.kpi3 <= '31.25')?'red':(babyCupboardDecContents.kpi3 > '31.25' && babyCupboardDecContents.kpi3 <= '41.8')?'orange':(babyCupboardDecContents.kpi3 > '41.8' && babyCupboardDecContents.kpi3 < '52.25')?'yellow-7':(babyCupboardDecContents.kpi3 >= '52.25' && babyCupboardDecContents.kpi3 < '1048.5')?'green':(babyCupboardDecContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi4 == null)?'grey-2':(babyCupboardDecContents.kpi4 >= '0' && babyCupboardDecContents.kpi4 <= '12.45')?'red':(babyCupboardDecContents.kpi4 > '12.45' && babyCupboardDecContents.kpi4 <= '16.6')?'orange':(babyCupboardDecContents.kpi4 > '16.6' && babyCupboardDecContents.kpi4 < '20.75')?'yellow-7':(babyCupboardDecContents.kpi4 >= '20.75' && babyCupboardDecContents.kpi4 < '24.9')?'green':(babyCupboardDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi4}}
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
                              :color="(babyCupboardJanContents.kpi1 == null)?'grey-2':(babyCupboardJanContents.kpi1 >= '0' && babyCupboardJanContents.kpi1 <= '27')?'red':(babyCupboardJanContents.kpi1 > '27' && babyCupboardJanContents.kpi1 <= '36')?'orange':(babyCupboardJanContents.kpi1 > '36' && babyCupboardJanContents.kpi1 < '45')?'yellow-7':(babyCupboardJanContents.kpi1 >= '45' && babyCupboardJanContents.kpi1 < '477.6')?'green':(babyCupboardJanContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi2 == null)?'grey-2':(babyCupboardJanContents.kpi2 >= '0' && babyCupboardJanContents.kpi2 <= '27')?'red':(babyCupboardJanContents.kpi2 > '27' && babyCupboardJanContents.kpi2 <= '36')?'orange':(babyCupboardJanContents.kpi2 > '36' && babyCupboardJanContents.kpi2 < '45')?'yellow-7':(babyCupboardJanContents.kpi2 >= '45' && babyCupboardJanContents.kpi2 < '488.4')?'green':(babyCupboardJanContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi3 == null)?'grey-2':(babyCupboardJanContents.kpi3 >= '0' && babyCupboardJanContents.kpi3 <= '31.25')?'red':(babyCupboardJanContents.kpi3 > '31.25' && babyCupboardJanContents.kpi3 <= '41.8')?'orange':(babyCupboardJanContents.kpi3 > '41.8' && babyCupboardJanContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJanContents.kpi3 >= '52.25' && babyCupboardJanContents.kpi3 < '1048.5')?'green':(babyCupboardJanContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi4 == null)?'grey-2':(babyCupboardJanContents.kpi4 >= '0' && babyCupboardJanContents.kpi4 <= '12.45')?'red':(babyCupboardJanContents.kpi4 > '12.45' && babyCupboardJanContents.kpi4 <= '16.6')?'orange':(babyCupboardJanContents.kpi4 > '16.6' && babyCupboardJanContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJanContents.kpi4 >= '20.75' && babyCupboardJanContents.kpi4 < '24.9')?'green':(babyCupboardJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi4}}
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
                              :color="(babyCupboardFebContents.kpi1 == null)?'grey-2':(babyCupboardFebContents.kpi1 >= '0' && babyCupboardFebContents.kpi1 <= '27')?'red':(babyCupboardFebContents.kpi1 > '27' && babyCupboardFebContents.kpi1 <= '36')?'orange':(babyCupboardFebContents.kpi1 > '36' && babyCupboardFebContents.kpi1 < '45')?'yellow-7':(babyCupboardFebContents.kpi1 >= '45' && babyCupboardFebContents.kpi1 < '477.6')?'green':(babyCupboardFebContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi2 == null)?'grey-2':(babyCupboardFebContents.kpi2 >= '0' && babyCupboardFebContents.kpi2 <= '27')?'red':(babyCupboardFebContents.kpi2 > '27' && babyCupboardFebContents.kpi2 <= '36')?'orange':(babyCupboardFebContents.kpi2 > '36' && babyCupboardFebContents.kpi2 < '45')?'yellow-7':(babyCupboardFebContents.kpi2 >= '45' && babyCupboardFebContents.kpi2 < '488.4')?'green':(babyCupboardFebContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi3 == null)?'grey-2':(babyCupboardFebContents.kpi3 >= '0' && babyCupboardFebContents.kpi3 <= '31.25')?'red':(babyCupboardFebContents.kpi3 > '31.25' && babyCupboardFebContents.kpi3 <= '41.8')?'orange':(babyCupboardFebContents.kpi3 > '41.8' && babyCupboardFebContents.kpi3 < '52.25')?'yellow-7':(babyCupboardFebContents.kpi3 >= '52.25' && babyCupboardFebContents.kpi3 < '1048.5')?'green':(babyCupboardFebContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi4 == null)?'grey-2':(babyCupboardFebContents.kpi4 >= '0' && babyCupboardFebContents.kpi4 <= '12.45')?'red':(babyCupboardFebContents.kpi4 > '12.45' && babyCupboardFebContents.kpi4 <= '16.6')?'orange':(babyCupboardFebContents.kpi4 > '16.6' && babyCupboardFebContents.kpi4 < '20.75')?'yellow-7':(babyCupboardFebContents.kpi4 >= '20.75' && babyCupboardFebContents.kpi4 < '24.9')?'green':(babyCupboardFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi4}}
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
                              :color="(babyCupboardMarContents.kpi1 == null)?'grey-2':(babyCupboardMarContents.kpi1 >= '0' && babyCupboardMarContents.kpi1 <= '27')?'red':(babyCupboardMarContents.kpi1 > '27' && babyCupboardMarContents.kpi1 <= '36')?'orange':(babyCupboardMarContents.kpi1 > '36' && babyCupboardMarContents.kpi1 < '45')?'yellow-7':(babyCupboardMarContents.kpi1 >= '45' && babyCupboardMarContents.kpi1 < '477.6')?'green':(babyCupboardMarContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi2 == null)?'grey-2':(babyCupboardMarContents.kpi2 >= '0' && babyCupboardMarContents.kpi2 <= '27')?'red':(babyCupboardMarContents.kpi2 > '27' && babyCupboardMarContents.kpi2 <= '36')?'orange':(babyCupboardMarContents.kpi2 > '36' && babyCupboardMarContents.kpi2 < '45')?'yellow-7':(babyCupboardMarContents.kpi2 >= '45' && babyCupboardMarContents.kpi2 < '488.4')?'green':(babyCupboardMarContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi3 == null)?'grey-2':(babyCupboardMarContents.kpi3 >= '0' && babyCupboardMarContents.kpi3 <= '31.25')?'red':(babyCupboardMarContents.kpi3 > '31.25' && babyCupboardMarContents.kpi3 <= '41.8')?'orange':(babyCupboardMarContents.kpi3 > '41.8' && babyCupboardMarContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMarContents.kpi3 >= '52.25' && babyCupboardMarContents.kpi3 < '1048.5')?'green':(babyCupboardMarContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi4 == null)?'grey-2':(babyCupboardMarContents.kpi4 >= '0' && babyCupboardMarContents.kpi4 <= '12.45')?'red':(babyCupboardMarContents.kpi4 > '12.45' && babyCupboardMarContents.kpi4 <= '16.6')?'orange':(babyCupboardMarContents.kpi4 > '16.6' && babyCupboardMarContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMarContents.kpi4 >= '20.75' && babyCupboardMarContents.kpi4 < '24.9')?'green':(babyCupboardMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi4}}
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
                              :color="(babyCupboardAprContents.kpi1 == null)?'grey-2':(babyCupboardAprContents.kpi1 >= '0' && babyCupboardAprContents.kpi1 <= '27')?'red':(babyCupboardAprContents.kpi1 > '27' && babyCupboardAprContents.kpi1 <= '36')?'orange':(babyCupboardAprContents.kpi1 > '36' && babyCupboardAprContents.kpi1 < '45')?'yellow-7':(babyCupboardAprContents.kpi1 >= '45' && babyCupboardAprContents.kpi1 < '477.6')?'green':(babyCupboardAprContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi2 == null)?'grey-2':(babyCupboardAprContents.kpi2 >= '0' && babyCupboardAprContents.kpi2 <= '27')?'red':(babyCupboardAprContents.kpi2 > '27' && babyCupboardAprContents.kpi2 <= '36')?'orange':(babyCupboardAprContents.kpi2 > '36' && babyCupboardAprContents.kpi2 < '45')?'yellow-7':(babyCupboardAprContents.kpi2 >= '45' && babyCupboardAprContents.kpi2 < '488.4')?'green':(babyCupboardAprContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi3 == null)?'grey-2':(babyCupboardAprContents.kpi3 >= '0' && babyCupboardAprContents.kpi3 <= '31.25')?'red':(babyCupboardAprContents.kpi3 > '31.25' && babyCupboardAprContents.kpi3 <= '41.8')?'orange':(babyCupboardAprContents.kpi3 > '41.8' && babyCupboardAprContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAprContents.kpi3 >= '52.25' && babyCupboardAprContents.kpi3 < '1048.5')?'green':(babyCupboardAprContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi4 == null)?'grey-2':(babyCupboardAprContents.kpi4 >= '0' && babyCupboardAprContents.kpi4 <= '12.45')?'red':(babyCupboardAprContents.kpi4 > '12.45' && babyCupboardAprContents.kpi4 <= '16.6')?'orange':(babyCupboardAprContents.kpi4 > '16.6' && babyCupboardAprContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAprContents.kpi4 >= '20.75' && babyCupboardAprContents.kpi4 < '24.9')?'green':(babyCupboardAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi4}}
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
                              :color="(babyCupboardMayContents.kpi1 == null)?'grey-2':(babyCupboardMayContents.kpi1 >= '0' && babyCupboardMayContents.kpi1 <= '27')?'red':(babyCupboardMayContents.kpi1 > '27' && babyCupboardMayContents.kpi1 <= '36')?'orange':(babyCupboardMayContents.kpi1 > '36' && babyCupboardMayContents.kpi1 < '45')?'yellow-7':(babyCupboardMayContents.kpi1 >= '45' && babyCupboardMayContents.kpi1 < '477.6')?'green':(babyCupboardMayContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi2 == null)?'grey-2':(babyCupboardMayContents.kpi2 >= '0' && babyCupboardMayContents.kpi2 <= '27')?'red':(babyCupboardMayContents.kpi2 > '27' && babyCupboardMayContents.kpi2 <= '36')?'orange':(babyCupboardMayContents.kpi2 > '36' && babyCupboardMayContents.kpi2 < '45')?'yellow-7':(babyCupboardMayContents.kpi2 >= '45' && babyCupboardMayContents.kpi2 < '488.4')?'green':(babyCupboardMayContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi3 == null)?'grey-2':(babyCupboardMayContents.kpi3 >= '0' && babyCupboardMayContents.kpi3 <= '31.25')?'red':(babyCupboardMayContents.kpi3 > '31.25' && babyCupboardMayContents.kpi3 <= '41.8')?'orange':(babyCupboardMayContents.kpi3 > '41.8' && babyCupboardMayContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMayContents.kpi3 >= '52.25' && babyCupboardMayContents.kpi3 < '1048.5')?'green':(babyCupboardMayContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi4 == null)?'grey-2':(babyCupboardMayContents.kpi4 >= '0' && babyCupboardMayContents.kpi4 <= '12.45')?'red':(babyCupboardMayContents.kpi4 > '12.45' && babyCupboardMayContents.kpi4 <= '16.6')?'orange':(babyCupboardMayContents.kpi4 > '16.6' && babyCupboardMayContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMayContents.kpi4 >= '20.75' && babyCupboardMayContents.kpi4 < '24.9')?'green':(babyCupboardMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi4}}
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
                              :color="(babyCupboardJunContents.kpi1 == null)?'grey-2':(babyCupboardJunContents.kpi1 >= '0' && babyCupboardJunContents.kpi1 <= '27')?'red':(babyCupboardJunContents.kpi1 > '27' && babyCupboardJunContents.kpi1 <= '36')?'orange':(babyCupboardJunContents.kpi1 > '36' && babyCupboardJunContents.kpi1 < '45')?'yellow-7':(babyCupboardJunContents.kpi1 >= '45' && babyCupboardJunContents.kpi1 < '477.6')?'green':(babyCupboardJunContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi2 == null)?'grey-2':(babyCupboardJunContents.kpi2 >= '0' && babyCupboardJunContents.kpi2 <= '27')?'red':(babyCupboardJunContents.kpi2 > '27' && babyCupboardJunContents.kpi2 <= '36')?'orange':(babyCupboardJunContents.kpi2 > '36' && babyCupboardJunContents.kpi2 < '45')?'yellow-7':(babyCupboardJunContents.kpi2 >= '45' && babyCupboardJunContents.kpi2 < '488.4')?'green':(babyCupboardJunContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi3 == null)?'grey-2':(babyCupboardJunContents.kpi3 >= '0' && babyCupboardJunContents.kpi3 <= '31.25')?'red':(babyCupboardJunContents.kpi3 > '31.25' && babyCupboardJunContents.kpi3 <= '41.8')?'orange':(babyCupboardJunContents.kpi3 > '41.8' && babyCupboardJunContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJunContents.kpi3 >= '52.25' && babyCupboardJunContents.kpi3 < '1048.5')?'green':(babyCupboardJunContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi4 == null)?'grey-2':(babyCupboardJunContents.kpi4 >= '0' && babyCupboardJunContents.kpi4 <= '12.45')?'red':(babyCupboardJunContents.kpi4 > '12.45' && babyCupboardJunContents.kpi4 <= '16.6')?'orange':(babyCupboardJunContents.kpi4 > '16.6' && babyCupboardJunContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJunContents.kpi4 >= '20.75' && babyCupboardJunContents.kpi4 < '24.9')?'green':(babyCupboardJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi4}}
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
                              :color="(babyCupboardJulContents.kpi1 == null)?'grey-2':(babyCupboardJulContents.kpi1 >= '0' && babyCupboardJulContents.kpi1 <= '27')?'red':(babyCupboardJulContents.kpi1 > '27' && babyCupboardJulContents.kpi1 <= '36')?'orange':(babyCupboardJulContents.kpi1 > '36' && babyCupboardJulContents.kpi1 < '45')?'yellow-7':(babyCupboardJulContents.kpi1 >= '45' && babyCupboardJulContents.kpi1 < '477.6')?'green':(babyCupboardJulContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi2 == null)?'grey-2':(babyCupboardJulContents.kpi2 >= '0' && babyCupboardJulContents.kpi2 <= '27')?'red':(babyCupboardJulContents.kpi2 > '27' && babyCupboardJulContents.kpi2 <= '36')?'orange':(babyCupboardJulContents.kpi2 > '36' && babyCupboardJulContents.kpi2 < '45')?'yellow-7':(babyCupboardJulContents.kpi2 >= '45' && babyCupboardJulContents.kpi2 < '488.4')?'green':(babyCupboardJulContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi3 == null)?'grey-2':(babyCupboardJulContents.kpi3 >= '0' && babyCupboardJulContents.kpi3 <= '31.25')?'red':(babyCupboardJulContents.kpi3 > '31.25' && babyCupboardJulContents.kpi3 <= '41.8')?'orange':(babyCupboardJulContents.kpi3 > '41.8' && babyCupboardJulContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJulContents.kpi3 >= '52.25' && babyCupboardJulContents.kpi3 < '1048.5')?'green':(babyCupboardJulContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi4 == null)?'grey-2':(babyCupboardJulContents.kpi4 >= '0' && babyCupboardJulContents.kpi4 <= '12.45')?'red':(babyCupboardJulContents.kpi4 > '12.45' && babyCupboardJulContents.kpi4 <= '16.6')?'orange':(babyCupboardJulContents.kpi4 > '16.6' && babyCupboardJulContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJulContents.kpi4 >= '20.75' && babyCupboardJulContents.kpi4 < '24.9')?'green':(babyCupboardJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi4}}
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
                              :color="(babyCupboardAugContents.kpi1 == null)?'grey-2':(babyCupboardAugContents.kpi1 >= '0' && babyCupboardAugContents.kpi1 <= '27')?'red':(babyCupboardAugContents.kpi1 > '27' && babyCupboardAugContents.kpi1 <= '36')?'orange':(babyCupboardAugContents.kpi1 > '36' && babyCupboardAugContents.kpi1 < '45')?'yellow-7':(babyCupboardAugContents.kpi1 >= '45' && babyCupboardAugContents.kpi1 < '477.6')?'green':(babyCupboardAugContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi2 == null)?'grey-2':(babyCupboardAugContents.kpi2 >= '0' && babyCupboardAugContents.kpi2 <= '27')?'red':(babyCupboardAugContents.kpi2 > '27' && babyCupboardAugContents.kpi2 <= '36')?'orange':(babyCupboardAugContents.kpi2 > '36' && babyCupboardAugContents.kpi2 < '45')?'yellow-7':(babyCupboardAugContents.kpi2 >= '45' && babyCupboardAugContents.kpi2 < '488.4')?'green':(babyCupboardAugContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi3 == null)?'grey-2':(babyCupboardAugContents.kpi3 >= '0' && babyCupboardAugContents.kpi3 <= '31.25')?'red':(babyCupboardAugContents.kpi3 > '31.25' && babyCupboardAugContents.kpi3 <= '41.8')?'orange':(babyCupboardAugContents.kpi3 > '41.8' && babyCupboardAugContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAugContents.kpi3 >= '52.25' && babyCupboardAugContents.kpi3 < '1048.5')?'green':(babyCupboardAugContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi4 == null)?'grey-2':(babyCupboardAugContents.kpi4 >= '0' && babyCupboardAugContents.kpi4 <= '12.45')?'red':(babyCupboardAugContents.kpi4 > '12.45' && babyCupboardAugContents.kpi4 <= '16.6')?'orange':(babyCupboardAugContents.kpi4 > '16.6' && babyCupboardAugContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAugContents.kpi4 >= '20.75' && babyCupboardAugContents.kpi4 < '24.9')?'green':(babyCupboardAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi4}}
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
                              :color="(babyCupboardSepContents.kpi1 == null)?'grey-2':(babyCupboardSepContents.kpi1 >= '0' && babyCupboardSepContents.kpi1 <= '27')?'red':(babyCupboardSepContents.kpi1 > '27' && babyCupboardSepContents.kpi1 <= '36')?'orange':(babyCupboardSepContents.kpi1 > '36' && babyCupboardSepContents.kpi1 < '45')?'yellow-7':(babyCupboardSepContents.kpi1 >= '45' && babyCupboardSepContents.kpi1 < '477.6')?'green':(babyCupboardSepContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi2 == null)?'grey-2':(babyCupboardSepContents.kpi2 >= '0' && babyCupboardSepContents.kpi2 <= '27')?'red':(babyCupboardSepContents.kpi2 > '27' && babyCupboardSepContents.kpi2 <= '36')?'orange':(babyCupboardSepContents.kpi2 > '36' && babyCupboardSepContents.kpi2 < '45')?'yellow-7':(babyCupboardSepContents.kpi2 >= '45' && babyCupboardSepContents.kpi2 < '488.4')?'green':(babyCupboardSepContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi3 == null)?'grey-2':(babyCupboardSepContents.kpi3 >= '0' && babyCupboardSepContents.kpi3 <= '31.25')?'red':(babyCupboardSepContents.kpi3 > '31.25' && babyCupboardSepContents.kpi3 <= '41.8')?'orange':(babyCupboardSepContents.kpi3 > '41.8' && babyCupboardSepContents.kpi3 < '52.25')?'yellow-7':(babyCupboardSepContents.kpi3 >= '52.25' && babyCupboardSepContents.kpi3 < '1048.5')?'green':(babyCupboardSepContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi4 == null)?'grey-2':(babyCupboardSepContents.kpi4 >= '0' && babyCupboardSepContents.kpi4 <= '12.45')?'red':(babyCupboardSepContents.kpi4 > '12.45' && babyCupboardSepContents.kpi4 <= '16.6')?'orange':(babyCupboardSepContents.kpi4 > '16.6' && babyCupboardSepContents.kpi4 < '20.75')?'yellow-7':(babyCupboardSepContents.kpi4 >= '20.75' && babyCupboardSepContents.kpi4 < '24.9')?'green':(babyCupboardSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi4}}
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
                              :color="(babyCupboardOctContents.kpi1 == null)?'grey-2':(babyCupboardOctContents.kpi1 >= '0' && babyCupboardOctContents.kpi1 <= '27')?'red':(babyCupboardOctContents.kpi1 > '27' && babyCupboardOctContents.kpi1 <= '36')?'orange':(babyCupboardOctContents.kpi1 > '36' && babyCupboardOctContents.kpi1 < '45')?'yellow-7':(babyCupboardOctContents.kpi1 >= '45' && babyCupboardOctContents.kpi1 < '477.6')?'green':(babyCupboardOctContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi2 == null)?'grey-2':(babyCupboardOctContents.kpi2 >= '0' && babyCupboardOctContents.kpi2 <= '27')?'red':(babyCupboardOctContents.kpi2 > '27' && babyCupboardOctContents.kpi2 <= '36')?'orange':(babyCupboardOctContents.kpi2 > '36' && babyCupboardOctContents.kpi2 < '45')?'yellow-7':(babyCupboardOctContents.kpi2 >= '45' && babyCupboardOctContents.kpi2 < '488.4')?'green':(babyCupboardOctContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi3 == null)?'grey-2':(babyCupboardOctContents.kpi3 >= '0' && babyCupboardOctContents.kpi3 <= '31.25')?'red':(babyCupboardOctContents.kpi3 > '31.25' && babyCupboardOctContents.kpi3 <= '41.8')?'orange':(babyCupboardOctContents.kpi3 > '41.8' && babyCupboardOctContents.kpi3 < '52.25')?'yellow-7':(babyCupboardOctContents.kpi3 >= '52.25' && babyCupboardOctContents.kpi3 < '1048.5')?'green':(babyCupboardOctContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi4 == null)?'grey-2':(babyCupboardOctContents.kpi4 >= '0' && babyCupboardOctContents.kpi4 <= '12.45')?'red':(babyCupboardOctContents.kpi4 > '12.45' && babyCupboardOctContents.kpi4 <= '16.6')?'orange':(babyCupboardOctContents.kpi4 > '16.6' && babyCupboardOctContents.kpi4 < '20.75')?'yellow-7':(babyCupboardOctContents.kpi4 >= '20.75' && babyCupboardOctContents.kpi4 < '24.9')?'green':(babyCupboardOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi4}}
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
                              :color="(babyCupboardNovContents.kpi1 == null)?'grey-2':(babyCupboardNovContents.kpi1 >= '0' && babyCupboardNovContents.kpi1 <= '27')?'red':(babyCupboardNovContents.kpi1 > '27' && babyCupboardNovContents.kpi1 <= '36')?'orange':(babyCupboardNovContents.kpi1 > '36' && babyCupboardNovContents.kpi1 < '45')?'yellow-7':(babyCupboardNovContents.kpi1 >= '45' && babyCupboardNovContents.kpi1 < '477.6')?'green':(babyCupboardNovContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi2 == null)?'grey-2':(babyCupboardNovContents.kpi2 >= '0' && babyCupboardNovContents.kpi2 <= '27')?'red':(babyCupboardNovContents.kpi2 > '27' && babyCupboardNovContents.kpi2 <= '36')?'orange':(babyCupboardNovContents.kpi2 > '36' && babyCupboardNovContents.kpi2 < '45')?'yellow-7':(babyCupboardNovContents.kpi2 >= '45' && babyCupboardNovContents.kpi2 < '488.4')?'green':(babyCupboardNovContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi3 == null)?'grey-2':(babyCupboardNovContents.kpi3 >= '0' && babyCupboardNovContents.kpi3 <= '31.25')?'red':(babyCupboardNovContents.kpi3 > '31.25' && babyCupboardNovContents.kpi3 <= '41.8')?'orange':(babyCupboardNovContents.kpi3 > '41.8' && babyCupboardNovContents.kpi3 < '52.25')?'yellow-7':(babyCupboardNovContents.kpi3 >= '52.25' && babyCupboardNovContents.kpi3 < '1048.5')?'green':(babyCupboardNovContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi4 == null)?'grey-2':(babyCupboardNovContents.kpi4 >= '0' && babyCupboardNovContents.kpi4 <= '12.45')?'red':(babyCupboardNovContents.kpi4 > '12.45' && babyCupboardNovContents.kpi4 <= '16.6')?'orange':(babyCupboardNovContents.kpi4 > '16.6' && babyCupboardNovContents.kpi4 < '20.75')?'yellow-7':(babyCupboardNovContents.kpi4 >= '20.75' && babyCupboardNovContents.kpi4 < '24.9')?'green':(babyCupboardNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi4}}
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
                              :color="(babyCupboardDecContents.kpi1 == null)?'grey-2':(babyCupboardDecContents.kpi1 >= '0' && babyCupboardDecContents.kpi1 <= '27')?'red':(babyCupboardDecContents.kpi1 > '27' && babyCupboardDecContents.kpi1 <= '36')?'orange':(babyCupboardDecContents.kpi1 > '36' && babyCupboardDecContents.kpi1 < '45')?'yellow-7':(babyCupboardDecContents.kpi1 >= '45' && babyCupboardDecContents.kpi1 < '477.6')?'green':(babyCupboardDecContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi2 == null)?'grey-2':(babyCupboardDecContents.kpi2 >= '0' && babyCupboardDecContents.kpi2 <= '27')?'red':(babyCupboardDecContents.kpi2 > '27' && babyCupboardDecContents.kpi2 <= '36')?'orange':(babyCupboardDecContents.kpi2 > '36' && babyCupboardDecContents.kpi2 < '45')?'yellow-7':(babyCupboardDecContents.kpi2 >= '45' && babyCupboardDecContents.kpi2 < '488.4')?'green':(babyCupboardDecContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi3 == null)?'grey-2':(babyCupboardDecContents.kpi3 >= '0' && babyCupboardDecContents.kpi3 <= '31.25')?'red':(babyCupboardDecContents.kpi3 > '31.25' && babyCupboardDecContents.kpi3 <= '41.8')?'orange':(babyCupboardDecContents.kpi3 > '41.8' && babyCupboardDecContents.kpi3 < '52.25')?'yellow-7':(babyCupboardDecContents.kpi3 >= '52.25' && babyCupboardDecContents.kpi3 < '1048.5')?'green':(babyCupboardDecContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi4 == null)?'grey-2':(babyCupboardDecContents.kpi4 >= '0' && babyCupboardDecContents.kpi4 <= '12.45')?'red':(babyCupboardDecContents.kpi4 > '12.45' && babyCupboardDecContents.kpi4 <= '16.6')?'orange':(babyCupboardDecContents.kpi4 > '16.6' && babyCupboardDecContents.kpi4 < '20.75')?'yellow-7':(babyCupboardDecContents.kpi4 >= '20.75' && babyCupboardDecContents.kpi4 < '24.9')?'green':(babyCupboardDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi4}}
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
                              :color="(babyCupboardJanContents.kpi1 == null)?'grey-2':(babyCupboardJanContents.kpi1 >= '0' && babyCupboardJanContents.kpi1 <= '27')?'red':(babyCupboardJanContents.kpi1 > '27' && babyCupboardJanContents.kpi1 <= '36')?'orange':(babyCupboardJanContents.kpi1 > '36' && babyCupboardJanContents.kpi1 < '45')?'yellow-7':(babyCupboardJanContents.kpi1 >= '45' && babyCupboardJanContents.kpi1 < '477.6')?'green':(babyCupboardJanContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi2 == null)?'grey-2':(babyCupboardJanContents.kpi2 >= '0' && babyCupboardJanContents.kpi2 <= '27')?'red':(babyCupboardJanContents.kpi2 > '27' && babyCupboardJanContents.kpi2 <= '36')?'orange':(babyCupboardJanContents.kpi2 > '36' && babyCupboardJanContents.kpi2 < '45')?'yellow-7':(babyCupboardJanContents.kpi2 >= '45' && babyCupboardJanContents.kpi2 < '488.4')?'green':(babyCupboardJanContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi3 == null)?'grey-2':(babyCupboardJanContents.kpi3 >= '0' && babyCupboardJanContents.kpi3 <= '31.25')?'red':(babyCupboardJanContents.kpi3 > '31.25' && babyCupboardJanContents.kpi3 <= '41.8')?'orange':(babyCupboardJanContents.kpi3 > '41.8' && babyCupboardJanContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJanContents.kpi3 >= '52.25' && babyCupboardJanContents.kpi3 < '1048.5')?'green':(babyCupboardJanContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi4 == null)?'grey-2':(babyCupboardJanContents.kpi4 >= '0' && babyCupboardJanContents.kpi4 <= '12.45')?'red':(babyCupboardJanContents.kpi4 > '12.45' && babyCupboardJanContents.kpi4 <= '16.6')?'orange':(babyCupboardJanContents.kpi4 > '16.6' && babyCupboardJanContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJanContents.kpi4 >= '20.75' && babyCupboardJanContents.kpi4 < '24.9')?'green':(babyCupboardJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi4}}
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
                              :color="(babyCupboardFebContents.kpi1 == null)?'grey-2':(babyCupboardFebContents.kpi1 >= '0' && babyCupboardFebContents.kpi1 <= '27')?'red':(babyCupboardFebContents.kpi1 > '27' && babyCupboardFebContents.kpi1 <= '36')?'orange':(babyCupboardFebContents.kpi1 > '36' && babyCupboardFebContents.kpi1 < '45')?'yellow-7':(babyCupboardFebContents.kpi1 >= '45' && babyCupboardFebContents.kpi1 < '477.6')?'green':(babyCupboardFebContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi2 == null)?'grey-2':(babyCupboardFebContents.kpi2 >= '0' && babyCupboardFebContents.kpi2 <= '27')?'red':(babyCupboardFebContents.kpi2 > '27' && babyCupboardFebContents.kpi2 <= '36')?'orange':(babyCupboardFebContents.kpi2 > '36' && babyCupboardFebContents.kpi2 < '45')?'yellow-7':(babyCupboardFebContents.kpi2 >= '45' && babyCupboardFebContents.kpi2 < '488.4')?'green':(babyCupboardFebContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi3 == null)?'grey-2':(babyCupboardFebContents.kpi3 >= '0' && babyCupboardFebContents.kpi3 <= '31.25')?'red':(babyCupboardFebContents.kpi3 > '31.25' && babyCupboardFebContents.kpi3 <= '41.8')?'orange':(babyCupboardFebContents.kpi3 > '41.8' && babyCupboardFebContents.kpi3 < '52.25')?'yellow-7':(babyCupboardFebContents.kpi3 >= '52.25' && babyCupboardFebContents.kpi3 < '1048.5')?'green':(babyCupboardFebContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi4 == null)?'grey-2':(babyCupboardFebContents.kpi4 >= '0' && babyCupboardFebContents.kpi4 <= '12.45')?'red':(babyCupboardFebContents.kpi4 > '12.45' && babyCupboardFebContents.kpi4 <= '16.6')?'orange':(babyCupboardFebContents.kpi4 > '16.6' && babyCupboardFebContents.kpi4 < '20.75')?'yellow-7':(babyCupboardFebContents.kpi4 >= '20.75' && babyCupboardFebContents.kpi4 < '24.9')?'green':(babyCupboardFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi4}}
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
                              :color="(babyCupboardMarContents.kpi1 == null)?'grey-2':(babyCupboardMarContents.kpi1 >= '0' && babyCupboardMarContents.kpi1 <= '27')?'red':(babyCupboardMarContents.kpi1 > '27' && babyCupboardMarContents.kpi1 <= '36')?'orange':(babyCupboardMarContents.kpi1 > '36' && babyCupboardMarContents.kpi1 < '45')?'yellow-7':(babyCupboardMarContents.kpi1 >= '45' && babyCupboardMarContents.kpi1 < '477.6')?'green':(babyCupboardMarContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi2 == null)?'grey-2':(babyCupboardMarContents.kpi2 >= '0' && babyCupboardMarContents.kpi2 <= '27')?'red':(babyCupboardMarContents.kpi2 > '27' && babyCupboardMarContents.kpi2 <= '36')?'orange':(babyCupboardMarContents.kpi2 > '36' && babyCupboardMarContents.kpi2 < '45')?'yellow-7':(babyCupboardMarContents.kpi2 >= '45' && babyCupboardMarContents.kpi2 < '488.4')?'green':(babyCupboardMarContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi3 == null)?'grey-2':(babyCupboardMarContents.kpi3 >= '0' && babyCupboardMarContents.kpi3 <= '31.25')?'red':(babyCupboardMarContents.kpi3 > '31.25' && babyCupboardMarContents.kpi3 <= '41.8')?'orange':(babyCupboardMarContents.kpi3 > '41.8' && babyCupboardMarContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMarContents.kpi3 >= '52.25' && babyCupboardMarContents.kpi3 < '1048.5')?'green':(babyCupboardMarContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi4 == null)?'grey-2':(babyCupboardMarContents.kpi4 >= '0' && babyCupboardMarContents.kpi4 <= '12.45')?'red':(babyCupboardMarContents.kpi4 > '12.45' && babyCupboardMarContents.kpi4 <= '16.6')?'orange':(babyCupboardMarContents.kpi4 > '16.6' && babyCupboardMarContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMarContents.kpi4 >= '20.75' && babyCupboardMarContents.kpi4 < '24.9')?'green':(babyCupboardMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi4}}
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
                              :color="(babyCupboardAprContents.kpi1 == null)?'grey-2':(babyCupboardAprContents.kpi1 >= '0' && babyCupboardAprContents.kpi1 <= '27')?'red':(babyCupboardAprContents.kpi1 > '27' && babyCupboardAprContents.kpi1 <= '36')?'orange':(babyCupboardAprContents.kpi1 > '36' && babyCupboardAprContents.kpi1 < '45')?'yellow-7':(babyCupboardAprContents.kpi1 >= '45' && babyCupboardAprContents.kpi1 < '477.6')?'green':(babyCupboardAprContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi2 == null)?'grey-2':(babyCupboardAprContents.kpi2 >= '0' && babyCupboardAprContents.kpi2 <= '27')?'red':(babyCupboardAprContents.kpi2 > '27' && babyCupboardAprContents.kpi2 <= '36')?'orange':(babyCupboardAprContents.kpi2 > '36' && babyCupboardAprContents.kpi2 < '45')?'yellow-7':(babyCupboardAprContents.kpi2 >= '45' && babyCupboardAprContents.kpi2 < '488.4')?'green':(babyCupboardAprContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi3 == null)?'grey-2':(babyCupboardAprContents.kpi3 >= '0' && babyCupboardAprContents.kpi3 <= '31.25')?'red':(babyCupboardAprContents.kpi3 > '31.25' && babyCupboardAprContents.kpi3 <= '41.8')?'orange':(babyCupboardAprContents.kpi3 > '41.8' && babyCupboardAprContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAprContents.kpi3 >= '52.25' && babyCupboardAprContents.kpi3 < '1048.5')?'green':(babyCupboardAprContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi4 == null)?'grey-2':(babyCupboardAprContents.kpi4 >= '0' && babyCupboardAprContents.kpi4 <= '12.45')?'red':(babyCupboardAprContents.kpi4 > '12.45' && babyCupboardAprContents.kpi4 <= '16.6')?'orange':(babyCupboardAprContents.kpi4 > '16.6' && babyCupboardAprContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAprContents.kpi4 >= '20.75' && babyCupboardAprContents.kpi4 < '24.9')?'green':(babyCupboardAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi4}}
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
                              :color="(babyCupboardMayContents.kpi1 == null)?'grey-2':(babyCupboardMayContents.kpi1 >= '0' && babyCupboardMayContents.kpi1 <= '27')?'red':(babyCupboardMayContents.kpi1 > '27' && babyCupboardMayContents.kpi1 <= '36')?'orange':(babyCupboardMayContents.kpi1 > '36' && babyCupboardMayContents.kpi1 < '45')?'yellow-7':(babyCupboardMayContents.kpi1 >= '45' && babyCupboardMayContents.kpi1 < '477.6')?'green':(babyCupboardMayContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi2 == null)?'grey-2':(babyCupboardMayContents.kpi2 >= '0' && babyCupboardMayContents.kpi2 <= '27')?'red':(babyCupboardMayContents.kpi2 > '27' && babyCupboardMayContents.kpi2 <= '36')?'orange':(babyCupboardMayContents.kpi2 > '36' && babyCupboardMayContents.kpi2 < '45')?'yellow-7':(babyCupboardMayContents.kpi2 >= '45' && babyCupboardMayContents.kpi2 < '488.4')?'green':(babyCupboardMayContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi3 == null)?'grey-2':(babyCupboardMayContents.kpi3 >= '0' && babyCupboardMayContents.kpi3 <= '31.25')?'red':(babyCupboardMayContents.kpi3 > '31.25' && babyCupboardMayContents.kpi3 <= '41.8')?'orange':(babyCupboardMayContents.kpi3 > '41.8' && babyCupboardMayContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMayContents.kpi3 >= '52.25' && babyCupboardMayContents.kpi3 < '1048.5')?'green':(babyCupboardMayContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi4 == null)?'grey-2':(babyCupboardMayContents.kpi4 >= '0' && babyCupboardMayContents.kpi4 <= '12.45')?'red':(babyCupboardMayContents.kpi4 > '12.45' && babyCupboardMayContents.kpi4 <= '16.6')?'orange':(babyCupboardMayContents.kpi4 > '16.6' && babyCupboardMayContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMayContents.kpi4 >= '20.75' && babyCupboardMayContents.kpi4 < '24.9')?'green':(babyCupboardMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi4}}
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
                              :color="(babyCupboardJunContents.kpi1 == null)?'grey-2':(babyCupboardJunContents.kpi1 >= '0' && babyCupboardJunContents.kpi1 <= '27')?'red':(babyCupboardJunContents.kpi1 > '27' && babyCupboardJunContents.kpi1 <= '36')?'orange':(babyCupboardJunContents.kpi1 > '36' && babyCupboardJunContents.kpi1 < '45')?'yellow-7':(babyCupboardJunContents.kpi1 >= '45' && babyCupboardJunContents.kpi1 < '477.6')?'green':(babyCupboardJunContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi2 == null)?'grey-2':(babyCupboardJunContents.kpi2 >= '0' && babyCupboardJunContents.kpi2 <= '27')?'red':(babyCupboardJunContents.kpi2 > '27' && babyCupboardJunContents.kpi2 <= '36')?'orange':(babyCupboardJunContents.kpi2 > '36' && babyCupboardJunContents.kpi2 < '45')?'yellow-7':(babyCupboardJunContents.kpi2 >= '45' && babyCupboardJunContents.kpi2 < '488.4')?'green':(babyCupboardJunContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi3 == null)?'grey-2':(babyCupboardJunContents.kpi3 >= '0' && babyCupboardJunContents.kpi3 <= '31.25')?'red':(babyCupboardJunContents.kpi3 > '31.25' && babyCupboardJunContents.kpi3 <= '41.8')?'orange':(babyCupboardJunContents.kpi3 > '41.8' && babyCupboardJunContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJunContents.kpi3 >= '52.25' && babyCupboardJunContents.kpi3 < '1048.5')?'green':(babyCupboardJunContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi4 == null)?'grey-2':(babyCupboardJunContents.kpi4 >= '0' && babyCupboardJunContents.kpi4 <= '12.45')?'red':(babyCupboardJunContents.kpi4 > '12.45' && babyCupboardJunContents.kpi4 <= '16.6')?'orange':(babyCupboardJunContents.kpi4 > '16.6' && babyCupboardJunContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJunContents.kpi4 >= '20.75' && babyCupboardJunContents.kpi4 < '24.9')?'green':(babyCupboardJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi4}}
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
                              :color="(babyCupboardJulContents.kpi1 == null)?'grey-2':(babyCupboardJulContents.kpi1 >= '0' && babyCupboardJulContents.kpi1 <= '27')?'red':(babyCupboardJulContents.kpi1 > '27' && babyCupboardJulContents.kpi1 <= '36')?'orange':(babyCupboardJulContents.kpi1 > '36' && babyCupboardJulContents.kpi1 < '45')?'yellow-7':(babyCupboardJulContents.kpi1 >= '45' && babyCupboardJulContents.kpi1 < '477.6')?'green':(babyCupboardJulContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi2 == null)?'grey-2':(babyCupboardJulContents.kpi2 >= '0' && babyCupboardJulContents.kpi2 <= '27')?'red':(babyCupboardJulContents.kpi2 > '27' && babyCupboardJulContents.kpi2 <= '36')?'orange':(babyCupboardJulContents.kpi2 > '36' && babyCupboardJulContents.kpi2 < '45')?'yellow-7':(babyCupboardJulContents.kpi2 >= '45' && babyCupboardJulContents.kpi2 < '488.4')?'green':(babyCupboardJulContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi3 == null)?'grey-2':(babyCupboardJulContents.kpi3 >= '0' && babyCupboardJulContents.kpi3 <= '31.25')?'red':(babyCupboardJulContents.kpi3 > '31.25' && babyCupboardJulContents.kpi3 <= '41.8')?'orange':(babyCupboardJulContents.kpi3 > '41.8' && babyCupboardJulContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJulContents.kpi3 >= '52.25' && babyCupboardJulContents.kpi3 < '1048.5')?'green':(babyCupboardJulContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi4 == null)?'grey-2':(babyCupboardJulContents.kpi4 >= '0' && babyCupboardJulContents.kpi4 <= '12.45')?'red':(babyCupboardJulContents.kpi4 > '12.45' && babyCupboardJulContents.kpi4 <= '16.6')?'orange':(babyCupboardJulContents.kpi4 > '16.6' && babyCupboardJulContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJulContents.kpi4 >= '20.75' && babyCupboardJulContents.kpi4 < '24.9')?'green':(babyCupboardJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi4}}
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
                              :color="(babyCupboardAugContents.kpi1 == null)?'grey-2':(babyCupboardAugContents.kpi1 >= '0' && babyCupboardAugContents.kpi1 <= '27')?'red':(babyCupboardAugContents.kpi1 > '27' && babyCupboardAugContents.kpi1 <= '36')?'orange':(babyCupboardAugContents.kpi1 > '36' && babyCupboardAugContents.kpi1 < '45')?'yellow-7':(babyCupboardAugContents.kpi1 >= '45' && babyCupboardAugContents.kpi1 < '477.6')?'green':(babyCupboardAugContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi2 == null)?'grey-2':(babyCupboardAugContents.kpi2 >= '0' && babyCupboardAugContents.kpi2 <= '27')?'red':(babyCupboardAugContents.kpi2 > '27' && babyCupboardAugContents.kpi2 <= '36')?'orange':(babyCupboardAugContents.kpi2 > '36' && babyCupboardAugContents.kpi2 < '45')?'yellow-7':(babyCupboardAugContents.kpi2 >= '45' && babyCupboardAugContents.kpi2 < '488.4')?'green':(babyCupboardAugContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi3 == null)?'grey-2':(babyCupboardAugContents.kpi3 >= '0' && babyCupboardAugContents.kpi3 <= '31.25')?'red':(babyCupboardAugContents.kpi3 > '31.25' && babyCupboardAugContents.kpi3 <= '41.8')?'orange':(babyCupboardAugContents.kpi3 > '41.8' && babyCupboardAugContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAugContents.kpi3 >= '52.25' && babyCupboardAugContents.kpi3 < '1048.5')?'green':(babyCupboardAugContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi4 == null)?'grey-2':(babyCupboardAugContents.kpi4 >= '0' && babyCupboardAugContents.kpi4 <= '12.45')?'red':(babyCupboardAugContents.kpi4 > '12.45' && babyCupboardAugContents.kpi4 <= '16.6')?'orange':(babyCupboardAugContents.kpi4 > '16.6' && babyCupboardAugContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAugContents.kpi4 >= '20.75' && babyCupboardAugContents.kpi4 < '24.9')?'green':(babyCupboardAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi4}}
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
                              :color="(babyCupboardSepContents.kpi1 == null)?'grey-2':(babyCupboardSepContents.kpi1 >= '0' && babyCupboardSepContents.kpi1 <= '27')?'red':(babyCupboardSepContents.kpi1 > '27' && babyCupboardSepContents.kpi1 <= '36')?'orange':(babyCupboardSepContents.kpi1 > '36' && babyCupboardSepContents.kpi1 < '45')?'yellow-7':(babyCupboardSepContents.kpi1 >= '45' && babyCupboardSepContents.kpi1 < '477.6')?'green':(babyCupboardSepContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi2 == null)?'grey-2':(babyCupboardSepContents.kpi2 >= '0' && babyCupboardSepContents.kpi2 <= '27')?'red':(babyCupboardSepContents.kpi2 > '27' && babyCupboardSepContents.kpi2 <= '36')?'orange':(babyCupboardSepContents.kpi2 > '36' && babyCupboardSepContents.kpi2 < '45')?'yellow-7':(babyCupboardSepContents.kpi2 >= '45' && babyCupboardSepContents.kpi2 < '488.4')?'green':(babyCupboardSepContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi3 == null)?'grey-2':(babyCupboardSepContents.kpi3 >= '0' && babyCupboardSepContents.kpi3 <= '31.25')?'red':(babyCupboardSepContents.kpi3 > '31.25' && babyCupboardSepContents.kpi3 <= '41.8')?'orange':(babyCupboardSepContents.kpi3 > '41.8' && babyCupboardSepContents.kpi3 < '52.25')?'yellow-7':(babyCupboardSepContents.kpi3 >= '52.25' && babyCupboardSepContents.kpi3 < '1048.5')?'green':(babyCupboardSepContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi4 == null)?'grey-2':(babyCupboardSepContents.kpi4 >= '0' && babyCupboardSepContents.kpi4 <= '12.45')?'red':(babyCupboardSepContents.kpi4 > '12.45' && babyCupboardSepContents.kpi4 <= '16.6')?'orange':(babyCupboardSepContents.kpi4 > '16.6' && babyCupboardSepContents.kpi4 < '20.75')?'yellow-7':(babyCupboardSepContents.kpi4 >= '20.75' && babyCupboardSepContents.kpi4 < '24.9')?'green':(babyCupboardSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi4}}
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
                              :color="(babyCupboardOctContents.kpi1 == null)?'grey-2':(babyCupboardOctContents.kpi1 >= '0' && babyCupboardOctContents.kpi1 <= '27')?'red':(babyCupboardOctContents.kpi1 > '27' && babyCupboardOctContents.kpi1 <= '36')?'orange':(babyCupboardOctContents.kpi1 > '36' && babyCupboardOctContents.kpi1 < '45')?'yellow-7':(babyCupboardOctContents.kpi1 >= '45' && babyCupboardOctContents.kpi1 < '477.6')?'green':(babyCupboardOctContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi2 == null)?'grey-2':(babyCupboardOctContents.kpi2 >= '0' && babyCupboardOctContents.kpi2 <= '27')?'red':(babyCupboardOctContents.kpi2 > '27' && babyCupboardOctContents.kpi2 <= '36')?'orange':(babyCupboardOctContents.kpi2 > '36' && babyCupboardOctContents.kpi2 < '45')?'yellow-7':(babyCupboardOctContents.kpi2 >= '45' && babyCupboardOctContents.kpi2 < '488.4')?'green':(babyCupboardOctContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi3 == null)?'grey-2':(babyCupboardOctContents.kpi3 >= '0' && babyCupboardOctContents.kpi3 <= '31.25')?'red':(babyCupboardOctContents.kpi3 > '31.25' && babyCupboardOctContents.kpi3 <= '41.8')?'orange':(babyCupboardOctContents.kpi3 > '41.8' && babyCupboardOctContents.kpi3 < '52.25')?'yellow-7':(babyCupboardOctContents.kpi3 >= '52.25' && babyCupboardOctContents.kpi3 < '1048.5')?'green':(babyCupboardOctContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi4 == null)?'grey-2':(babyCupboardOctContents.kpi4 >= '0' && babyCupboardOctContents.kpi4 <= '12.45')?'red':(babyCupboardOctContents.kpi4 > '12.45' && babyCupboardOctContents.kpi4 <= '16.6')?'orange':(babyCupboardOctContents.kpi4 > '16.6' && babyCupboardOctContents.kpi4 < '20.75')?'yellow-7':(babyCupboardOctContents.kpi4 >= '20.75' && babyCupboardOctContents.kpi4 < '24.9')?'green':(babyCupboardOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi4}}
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
                              :color="(babyCupboardNovContents.kpi1 == null)?'grey-2':(babyCupboardNovContents.kpi1 >= '0' && babyCupboardNovContents.kpi1 <= '27')?'red':(babyCupboardNovContents.kpi1 > '27' && babyCupboardNovContents.kpi1 <= '36')?'orange':(babyCupboardNovContents.kpi1 > '36' && babyCupboardNovContents.kpi1 < '45')?'yellow-7':(babyCupboardNovContents.kpi1 >= '45' && babyCupboardNovContents.kpi1 < '477.6')?'green':(babyCupboardNovContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi2 == null)?'grey-2':(babyCupboardNovContents.kpi2 >= '0' && babyCupboardNovContents.kpi2 <= '27')?'red':(babyCupboardNovContents.kpi2 > '27' && babyCupboardNovContents.kpi2 <= '36')?'orange':(babyCupboardNovContents.kpi2 > '36' && babyCupboardNovContents.kpi2 < '45')?'yellow-7':(babyCupboardNovContents.kpi2 >= '45' && babyCupboardNovContents.kpi2 < '488.4')?'green':(babyCupboardNovContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi3 == null)?'grey-2':(babyCupboardNovContents.kpi3 >= '0' && babyCupboardNovContents.kpi3 <= '31.25')?'red':(babyCupboardNovContents.kpi3 > '31.25' && babyCupboardNovContents.kpi3 <= '41.8')?'orange':(babyCupboardNovContents.kpi3 > '41.8' && babyCupboardNovContents.kpi3 < '52.25')?'yellow-7':(babyCupboardNovContents.kpi3 >= '52.25' && babyCupboardNovContents.kpi3 < '1048.5')?'green':(babyCupboardNovContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi4 == null)?'grey-2':(babyCupboardNovContents.kpi4 >= '0' && babyCupboardNovContents.kpi4 <= '12.45')?'red':(babyCupboardNovContents.kpi4 > '12.45' && babyCupboardNovContents.kpi4 <= '16.6')?'orange':(babyCupboardNovContents.kpi4 > '16.6' && babyCupboardNovContents.kpi4 < '20.75')?'yellow-7':(babyCupboardNovContents.kpi4 >= '20.75' && babyCupboardNovContents.kpi4 < '24.9')?'green':(babyCupboardNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi4}}
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
                              :color="(babyCupboardDecContents.kpi1 == null)?'grey-2':(babyCupboardDecContents.kpi1 >= '0' && babyCupboardDecContents.kpi1 <= '27')?'red':(babyCupboardDecContents.kpi1 > '27' && babyCupboardDecContents.kpi1 <= '36')?'orange':(babyCupboardDecContents.kpi1 > '36' && babyCupboardDecContents.kpi1 < '45')?'yellow-7':(babyCupboardDecContents.kpi1 >= '45' && babyCupboardDecContents.kpi1 < '477.6')?'green':(babyCupboardDecContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi2 == null)?'grey-2':(babyCupboardDecContents.kpi2 >= '0' && babyCupboardDecContents.kpi2 <= '27')?'red':(babyCupboardDecContents.kpi2 > '27' && babyCupboardDecContents.kpi2 <= '36')?'orange':(babyCupboardDecContents.kpi2 > '36' && babyCupboardDecContents.kpi2 < '45')?'yellow-7':(babyCupboardDecContents.kpi2 >= '45' && babyCupboardDecContents.kpi2 < '488.4')?'green':(babyCupboardDecContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi3 == null)?'grey-2':(babyCupboardDecContents.kpi3 >= '0' && babyCupboardDecContents.kpi3 <= '31.25')?'red':(babyCupboardDecContents.kpi3 > '31.25' && babyCupboardDecContents.kpi3 <= '41.8')?'orange':(babyCupboardDecContents.kpi3 > '41.8' && babyCupboardDecContents.kpi3 < '52.25')?'yellow-7':(babyCupboardDecContents.kpi3 >= '52.25' && babyCupboardDecContents.kpi3 < '1048.5')?'green':(babyCupboardDecContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi4 == null)?'grey-2':(babyCupboardDecContents.kpi4 >= '0' && babyCupboardDecContents.kpi4 <= '12.45')?'red':(babyCupboardDecContents.kpi4 > '12.45' && babyCupboardDecContents.kpi4 <= '16.6')?'orange':(babyCupboardDecContents.kpi4 > '16.6' && babyCupboardDecContents.kpi4 < '20.75')?'yellow-7':(babyCupboardDecContents.kpi4 >= '20.75' && babyCupboardDecContents.kpi4 < '24.9')?'green':(babyCupboardDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi4}}
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
                              :color="(babyCupboardJanContents.kpi1 == null)?'grey-2':(babyCupboardJanContents.kpi1 >= '0' && babyCupboardJanContents.kpi1 <= '27')?'red':(babyCupboardJanContents.kpi1 > '27' && babyCupboardJanContents.kpi1 <= '36')?'orange':(babyCupboardJanContents.kpi1 > '36' && babyCupboardJanContents.kpi1 < '45')?'yellow-7':(babyCupboardJanContents.kpi1 >= '45' && babyCupboardJanContents.kpi1 < '477.6')?'green':(babyCupboardJanContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi2 == null)?'grey-2':(babyCupboardJanContents.kpi2 >= '0' && babyCupboardJanContents.kpi2 <= '27')?'red':(babyCupboardJanContents.kpi2 > '27' && babyCupboardJanContents.kpi2 <= '36')?'orange':(babyCupboardJanContents.kpi2 > '36' && babyCupboardJanContents.kpi2 < '45')?'yellow-7':(babyCupboardJanContents.kpi2 >= '45' && babyCupboardJanContents.kpi2 < '488.4')?'green':(babyCupboardJanContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi3 == null)?'grey-2':(babyCupboardJanContents.kpi3 >= '0' && babyCupboardJanContents.kpi3 <= '31.25')?'red':(babyCupboardJanContents.kpi3 > '31.25' && babyCupboardJanContents.kpi3 <= '41.8')?'orange':(babyCupboardJanContents.kpi3 > '41.8' && babyCupboardJanContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJanContents.kpi3 >= '52.25' && babyCupboardJanContents.kpi3 < '1048.5')?'green':(babyCupboardJanContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi4 == null)?'grey-2':(babyCupboardJanContents.kpi4 >= '0' && babyCupboardJanContents.kpi4 <= '12.45')?'red':(babyCupboardJanContents.kpi4 > '12.45' && babyCupboardJanContents.kpi4 <= '16.6')?'orange':(babyCupboardJanContents.kpi4 > '16.6' && babyCupboardJanContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJanContents.kpi4 >= '20.75' && babyCupboardJanContents.kpi4 < '24.9')?'green':(babyCupboardJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi4}}
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
                              :color="(babyCupboardFebContents.kpi1 == null)?'grey-2':(babyCupboardFebContents.kpi1 >= '0' && babyCupboardFebContents.kpi1 <= '27')?'red':(babyCupboardFebContents.kpi1 > '27' && babyCupboardFebContents.kpi1 <= '36')?'orange':(babyCupboardFebContents.kpi1 > '36' && babyCupboardFebContents.kpi1 < '45')?'yellow-7':(babyCupboardFebContents.kpi1 >= '45' && babyCupboardFebContents.kpi1 < '477.6')?'green':(babyCupboardFebContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi2 == null)?'grey-2':(babyCupboardFebContents.kpi2 >= '0' && babyCupboardFebContents.kpi2 <= '27')?'red':(babyCupboardFebContents.kpi2 > '27' && babyCupboardFebContents.kpi2 <= '36')?'orange':(babyCupboardFebContents.kpi2 > '36' && babyCupboardFebContents.kpi2 < '45')?'yellow-7':(babyCupboardFebContents.kpi2 >= '45' && babyCupboardFebContents.kpi2 < '488.4')?'green':(babyCupboardFebContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi3 == null)?'grey-2':(babyCupboardFebContents.kpi3 >= '0' && babyCupboardFebContents.kpi3 <= '31.25')?'red':(babyCupboardFebContents.kpi3 > '31.25' && babyCupboardFebContents.kpi3 <= '41.8')?'orange':(babyCupboardFebContents.kpi3 > '41.8' && babyCupboardFebContents.kpi3 < '52.25')?'yellow-7':(babyCupboardFebContents.kpi3 >= '52.25' && babyCupboardFebContents.kpi3 < '1048.5')?'green':(babyCupboardFebContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi4 == null)?'grey-2':(babyCupboardFebContents.kpi4 >= '0' && babyCupboardFebContents.kpi4 <= '12.45')?'red':(babyCupboardFebContents.kpi4 > '12.45' && babyCupboardFebContents.kpi4 <= '16.6')?'orange':(babyCupboardFebContents.kpi4 > '16.6' && babyCupboardFebContents.kpi4 < '20.75')?'yellow-7':(babyCupboardFebContents.kpi4 >= '20.75' && babyCupboardFebContents.kpi4 < '24.9')?'green':(babyCupboardFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi4}}
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
                              :color="(babyCupboardMarContents.kpi1 == null)?'grey-2':(babyCupboardMarContents.kpi1 >= '0' && babyCupboardMarContents.kpi1 <= '27')?'red':(babyCupboardMarContents.kpi1 > '27' && babyCupboardMarContents.kpi1 <= '36')?'orange':(babyCupboardMarContents.kpi1 > '36' && babyCupboardMarContents.kpi1 < '45')?'yellow-7':(babyCupboardMarContents.kpi1 >= '45' && babyCupboardMarContents.kpi1 < '477.6')?'green':(babyCupboardMarContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi2 == null)?'grey-2':(babyCupboardMarContents.kpi2 >= '0' && babyCupboardMarContents.kpi2 <= '27')?'red':(babyCupboardMarContents.kpi2 > '27' && babyCupboardMarContents.kpi2 <= '36')?'orange':(babyCupboardMarContents.kpi2 > '36' && babyCupboardMarContents.kpi2 < '45')?'yellow-7':(babyCupboardMarContents.kpi2 >= '45' && babyCupboardMarContents.kpi2 < '488.4')?'green':(babyCupboardMarContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi3 == null)?'grey-2':(babyCupboardMarContents.kpi3 >= '0' && babyCupboardMarContents.kpi3 <= '31.25')?'red':(babyCupboardMarContents.kpi3 > '31.25' && babyCupboardMarContents.kpi3 <= '41.8')?'orange':(babyCupboardMarContents.kpi3 > '41.8' && babyCupboardMarContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMarContents.kpi3 >= '52.25' && babyCupboardMarContents.kpi3 < '1048.5')?'green':(babyCupboardMarContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi4 == null)?'grey-2':(babyCupboardMarContents.kpi4 >= '0' && babyCupboardMarContents.kpi4 <= '12.45')?'red':(babyCupboardMarContents.kpi4 > '12.45' && babyCupboardMarContents.kpi4 <= '16.6')?'orange':(babyCupboardMarContents.kpi4 > '16.6' && babyCupboardMarContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMarContents.kpi4 >= '20.75' && babyCupboardMarContents.kpi4 < '24.9')?'green':(babyCupboardMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi4}}
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
                              :color="(babyCupboardAprContents.kpi1 == null)?'grey-2':(babyCupboardAprContents.kpi1 >= '0' && babyCupboardAprContents.kpi1 <= '27')?'red':(babyCupboardAprContents.kpi1 > '27' && babyCupboardAprContents.kpi1 <= '36')?'orange':(babyCupboardAprContents.kpi1 > '36' && babyCupboardAprContents.kpi1 < '45')?'yellow-7':(babyCupboardAprContents.kpi1 >= '45' && babyCupboardAprContents.kpi1 < '477.6')?'green':(babyCupboardAprContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi2 == null)?'grey-2':(babyCupboardAprContents.kpi2 >= '0' && babyCupboardAprContents.kpi2 <= '27')?'red':(babyCupboardAprContents.kpi2 > '27' && babyCupboardAprContents.kpi2 <= '36')?'orange':(babyCupboardAprContents.kpi2 > '36' && babyCupboardAprContents.kpi2 < '45')?'yellow-7':(babyCupboardAprContents.kpi2 >= '45' && babyCupboardAprContents.kpi2 < '488.4')?'green':(babyCupboardAprContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi3 == null)?'grey-2':(babyCupboardAprContents.kpi3 >= '0' && babyCupboardAprContents.kpi3 <= '31.25')?'red':(babyCupboardAprContents.kpi3 > '31.25' && babyCupboardAprContents.kpi3 <= '41.8')?'orange':(babyCupboardAprContents.kpi3 > '41.8' && babyCupboardAprContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAprContents.kpi3 >= '52.25' && babyCupboardAprContents.kpi3 < '1048.5')?'green':(babyCupboardAprContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi4 == null)?'grey-2':(babyCupboardAprContents.kpi4 >= '0' && babyCupboardAprContents.kpi4 <= '12.45')?'red':(babyCupboardAprContents.kpi4 > '12.45' && babyCupboardAprContents.kpi4 <= '16.6')?'orange':(babyCupboardAprContents.kpi4 > '16.6' && babyCupboardAprContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAprContents.kpi4 >= '20.75' && babyCupboardAprContents.kpi4 < '24.9')?'green':(babyCupboardAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi4}}
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
                              :color="(babyCupboardMayContents.kpi1 == null)?'grey-2':(babyCupboardMayContents.kpi1 >= '0' && babyCupboardMayContents.kpi1 <= '27')?'red':(babyCupboardMayContents.kpi1 > '27' && babyCupboardMayContents.kpi1 <= '36')?'orange':(babyCupboardMayContents.kpi1 > '36' && babyCupboardMayContents.kpi1 < '45')?'yellow-7':(babyCupboardMayContents.kpi1 >= '45' && babyCupboardMayContents.kpi1 < '477.6')?'green':(babyCupboardMayContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi2 == null)?'grey-2':(babyCupboardMayContents.kpi2 >= '0' && babyCupboardMayContents.kpi2 <= '27')?'red':(babyCupboardMayContents.kpi2 > '27' && babyCupboardMayContents.kpi2 <= '36')?'orange':(babyCupboardMayContents.kpi2 > '36' && babyCupboardMayContents.kpi2 < '45')?'yellow-7':(babyCupboardMayContents.kpi2 >= '45' && babyCupboardMayContents.kpi2 < '488.4')?'green':(babyCupboardMayContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi3 == null)?'grey-2':(babyCupboardMayContents.kpi3 >= '0' && babyCupboardMayContents.kpi3 <= '31.25')?'red':(babyCupboardMayContents.kpi3 > '31.25' && babyCupboardMayContents.kpi3 <= '41.8')?'orange':(babyCupboardMayContents.kpi3 > '41.8' && babyCupboardMayContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMayContents.kpi3 >= '52.25' && babyCupboardMayContents.kpi3 < '1048.5')?'green':(babyCupboardMayContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi4 == null)?'grey-2':(babyCupboardMayContents.kpi4 >= '0' && babyCupboardMayContents.kpi4 <= '12.45')?'red':(babyCupboardMayContents.kpi4 > '12.45' && babyCupboardMayContents.kpi4 <= '16.6')?'orange':(babyCupboardMayContents.kpi4 > '16.6' && babyCupboardMayContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMayContents.kpi4 >= '20.75' && babyCupboardMayContents.kpi4 < '24.9')?'green':(babyCupboardMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi4}}
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
                              :color="(babyCupboardJunContents.kpi1 == null)?'grey-2':(babyCupboardJunContents.kpi1 >= '0' && babyCupboardJunContents.kpi1 <= '27')?'red':(babyCupboardJunContents.kpi1 > '27' && babyCupboardJunContents.kpi1 <= '36')?'orange':(babyCupboardJunContents.kpi1 > '36' && babyCupboardJunContents.kpi1 < '45')?'yellow-7':(babyCupboardJunContents.kpi1 >= '45' && babyCupboardJunContents.kpi1 < '477.6')?'green':(babyCupboardJunContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi2 == null)?'grey-2':(babyCupboardJunContents.kpi2 >= '0' && babyCupboardJunContents.kpi2 <= '27')?'red':(babyCupboardJunContents.kpi2 > '27' && babyCupboardJunContents.kpi2 <= '36')?'orange':(babyCupboardJunContents.kpi2 > '36' && babyCupboardJunContents.kpi2 < '45')?'yellow-7':(babyCupboardJunContents.kpi2 >= '45' && babyCupboardJunContents.kpi2 < '488.4')?'green':(babyCupboardJunContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi3 == null)?'grey-2':(babyCupboardJunContents.kpi3 >= '0' && babyCupboardJunContents.kpi3 <= '31.25')?'red':(babyCupboardJunContents.kpi3 > '31.25' && babyCupboardJunContents.kpi3 <= '41.8')?'orange':(babyCupboardJunContents.kpi3 > '41.8' && babyCupboardJunContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJunContents.kpi3 >= '52.25' && babyCupboardJunContents.kpi3 < '1048.5')?'green':(babyCupboardJunContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi4 == null)?'grey-2':(babyCupboardJunContents.kpi4 >= '0' && babyCupboardJunContents.kpi4 <= '12.45')?'red':(babyCupboardJunContents.kpi4 > '12.45' && babyCupboardJunContents.kpi4 <= '16.6')?'orange':(babyCupboardJunContents.kpi4 > '16.6' && babyCupboardJunContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJunContents.kpi4 >= '20.75' && babyCupboardJunContents.kpi4 < '24.9')?'green':(babyCupboardJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi4}}
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
                              :color="(babyCupboardJulContents.kpi1 == null)?'grey-2':(babyCupboardJulContents.kpi1 >= '0' && babyCupboardJulContents.kpi1 <= '27')?'red':(babyCupboardJulContents.kpi1 > '27' && babyCupboardJulContents.kpi1 <= '36')?'orange':(babyCupboardJulContents.kpi1 > '36' && babyCupboardJulContents.kpi1 < '45')?'yellow-7':(babyCupboardJulContents.kpi1 >= '45' && babyCupboardJulContents.kpi1 < '477.6')?'green':(babyCupboardJulContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi2 == null)?'grey-2':(babyCupboardJulContents.kpi2 >= '0' && babyCupboardJulContents.kpi2 <= '27')?'red':(babyCupboardJulContents.kpi2 > '27' && babyCupboardJulContents.kpi2 <= '36')?'orange':(babyCupboardJulContents.kpi2 > '36' && babyCupboardJulContents.kpi2 < '45')?'yellow-7':(babyCupboardJulContents.kpi2 >= '45' && babyCupboardJulContents.kpi2 < '488.4')?'green':(babyCupboardJulContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi3 == null)?'grey-2':(babyCupboardJulContents.kpi3 >= '0' && babyCupboardJulContents.kpi3 <= '31.25')?'red':(babyCupboardJulContents.kpi3 > '31.25' && babyCupboardJulContents.kpi3 <= '41.8')?'orange':(babyCupboardJulContents.kpi3 > '41.8' && babyCupboardJulContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJulContents.kpi3 >= '52.25' && babyCupboardJulContents.kpi3 < '1048.5')?'green':(babyCupboardJulContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi4 == null)?'grey-2':(babyCupboardJulContents.kpi4 >= '0' && babyCupboardJulContents.kpi4 <= '12.45')?'red':(babyCupboardJulContents.kpi4 > '12.45' && babyCupboardJulContents.kpi4 <= '16.6')?'orange':(babyCupboardJulContents.kpi4 > '16.6' && babyCupboardJulContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJulContents.kpi4 >= '20.75' && babyCupboardJulContents.kpi4 < '24.9')?'green':(babyCupboardJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi4}}
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
                              :color="(babyCupboardAugContents.kpi1 == null)?'grey-2':(babyCupboardAugContents.kpi1 >= '0' && babyCupboardAugContents.kpi1 <= '27')?'red':(babyCupboardAugContents.kpi1 > '27' && babyCupboardAugContents.kpi1 <= '36')?'orange':(babyCupboardAugContents.kpi1 > '36' && babyCupboardAugContents.kpi1 < '45')?'yellow-7':(babyCupboardAugContents.kpi1 >= '45' && babyCupboardAugContents.kpi1 < '477.6')?'green':(babyCupboardAugContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi2 == null)?'grey-2':(babyCupboardAugContents.kpi2 >= '0' && babyCupboardAugContents.kpi2 <= '27')?'red':(babyCupboardAugContents.kpi2 > '27' && babyCupboardAugContents.kpi2 <= '36')?'orange':(babyCupboardAugContents.kpi2 > '36' && babyCupboardAugContents.kpi2 < '45')?'yellow-7':(babyCupboardAugContents.kpi2 >= '45' && babyCupboardAugContents.kpi2 < '488.4')?'green':(babyCupboardAugContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi3 == null)?'grey-2':(babyCupboardAugContents.kpi3 >= '0' && babyCupboardAugContents.kpi3 <= '31.25')?'red':(babyCupboardAugContents.kpi3 > '31.25' && babyCupboardAugContents.kpi3 <= '41.8')?'orange':(babyCupboardAugContents.kpi3 > '41.8' && babyCupboardAugContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAugContents.kpi3 >= '52.25' && babyCupboardAugContents.kpi3 < '1048.5')?'green':(babyCupboardAugContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi4 == null)?'grey-2':(babyCupboardAugContents.kpi4 >= '0' && babyCupboardAugContents.kpi4 <= '12.45')?'red':(babyCupboardAugContents.kpi4 > '12.45' && babyCupboardAugContents.kpi4 <= '16.6')?'orange':(babyCupboardAugContents.kpi4 > '16.6' && babyCupboardAugContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAugContents.kpi4 >= '20.75' && babyCupboardAugContents.kpi4 < '24.9')?'green':(babyCupboardAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi4}}
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
                              :color="(babyCupboardSepContents.kpi1 == null)?'grey-2':(babyCupboardSepContents.kpi1 >= '0' && babyCupboardSepContents.kpi1 <= '27')?'red':(babyCupboardSepContents.kpi1 > '27' && babyCupboardSepContents.kpi1 <= '36')?'orange':(babyCupboardSepContents.kpi1 > '36' && babyCupboardSepContents.kpi1 < '45')?'yellow-7':(babyCupboardSepContents.kpi1 >= '45' && babyCupboardSepContents.kpi1 < '477.6')?'green':(babyCupboardSepContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi2 == null)?'grey-2':(babyCupboardSepContents.kpi2 >= '0' && babyCupboardSepContents.kpi2 <= '27')?'red':(babyCupboardSepContents.kpi2 > '27' && babyCupboardSepContents.kpi2 <= '36')?'orange':(babyCupboardSepContents.kpi2 > '36' && babyCupboardSepContents.kpi2 < '45')?'yellow-7':(babyCupboardSepContents.kpi2 >= '45' && babyCupboardSepContents.kpi2 < '488.4')?'green':(babyCupboardSepContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi3 == null)?'grey-2':(babyCupboardSepContents.kpi3 >= '0' && babyCupboardSepContents.kpi3 <= '31.25')?'red':(babyCupboardSepContents.kpi3 > '31.25' && babyCupboardSepContents.kpi3 <= '41.8')?'orange':(babyCupboardSepContents.kpi3 > '41.8' && babyCupboardSepContents.kpi3 < '52.25')?'yellow-7':(babyCupboardSepContents.kpi3 >= '52.25' && babyCupboardSepContents.kpi3 < '1048.5')?'green':(babyCupboardSepContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi4 == null)?'grey-2':(babyCupboardSepContents.kpi4 >= '0' && babyCupboardSepContents.kpi4 <= '12.45')?'red':(babyCupboardSepContents.kpi4 > '12.45' && babyCupboardSepContents.kpi4 <= '16.6')?'orange':(babyCupboardSepContents.kpi4 > '16.6' && babyCupboardSepContents.kpi4 < '20.75')?'yellow-7':(babyCupboardSepContents.kpi4 >= '20.75' && babyCupboardSepContents.kpi4 < '24.9')?'green':(babyCupboardSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi4}}
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
                              :color="(babyCupboardOctContents.kpi1 == null)?'grey-2':(babyCupboardOctContents.kpi1 >= '0' && babyCupboardOctContents.kpi1 <= '27')?'red':(babyCupboardOctContents.kpi1 > '27' && babyCupboardOctContents.kpi1 <= '36')?'orange':(babyCupboardOctContents.kpi1 > '36' && babyCupboardOctContents.kpi1 < '45')?'yellow-7':(babyCupboardOctContents.kpi1 >= '45' && babyCupboardOctContents.kpi1 < '477.6')?'green':(babyCupboardOctContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi2 == null)?'grey-2':(babyCupboardOctContents.kpi2 >= '0' && babyCupboardOctContents.kpi2 <= '27')?'red':(babyCupboardOctContents.kpi2 > '27' && babyCupboardOctContents.kpi2 <= '36')?'orange':(babyCupboardOctContents.kpi2 > '36' && babyCupboardOctContents.kpi2 < '45')?'yellow-7':(babyCupboardOctContents.kpi2 >= '45' && babyCupboardOctContents.kpi2 < '488.4')?'green':(babyCupboardOctContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi3 == null)?'grey-2':(babyCupboardOctContents.kpi3 >= '0' && babyCupboardOctContents.kpi3 <= '31.25')?'red':(babyCupboardOctContents.kpi3 > '31.25' && babyCupboardOctContents.kpi3 <= '41.8')?'orange':(babyCupboardOctContents.kpi3 > '41.8' && babyCupboardOctContents.kpi3 < '52.25')?'yellow-7':(babyCupboardOctContents.kpi3 >= '52.25' && babyCupboardOctContents.kpi3 < '1048.5')?'green':(babyCupboardOctContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi4 == null)?'grey-2':(babyCupboardOctContents.kpi4 >= '0' && babyCupboardOctContents.kpi4 <= '12.45')?'red':(babyCupboardOctContents.kpi4 > '12.45' && babyCupboardOctContents.kpi4 <= '16.6')?'orange':(babyCupboardOctContents.kpi4 > '16.6' && babyCupboardOctContents.kpi4 < '20.75')?'yellow-7':(babyCupboardOctContents.kpi4 >= '20.75' && babyCupboardOctContents.kpi4 < '24.9')?'green':(babyCupboardOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi4}}
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
                              :color="(babyCupboardNovContents.kpi1 == null)?'grey-2':(babyCupboardNovContents.kpi1 >= '0' && babyCupboardNovContents.kpi1 <= '27')?'red':(babyCupboardNovContents.kpi1 > '27' && babyCupboardNovContents.kpi1 <= '36')?'orange':(babyCupboardNovContents.kpi1 > '36' && babyCupboardNovContents.kpi1 < '45')?'yellow-7':(babyCupboardNovContents.kpi1 >= '45' && babyCupboardNovContents.kpi1 < '477.6')?'green':(babyCupboardNovContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi2 == null)?'grey-2':(babyCupboardNovContents.kpi2 >= '0' && babyCupboardNovContents.kpi2 <= '27')?'red':(babyCupboardNovContents.kpi2 > '27' && babyCupboardNovContents.kpi2 <= '36')?'orange':(babyCupboardNovContents.kpi2 > '36' && babyCupboardNovContents.kpi2 < '45')?'yellow-7':(babyCupboardNovContents.kpi2 >= '45' && babyCupboardNovContents.kpi2 < '488.4')?'green':(babyCupboardNovContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi3 == null)?'grey-2':(babyCupboardNovContents.kpi3 >= '0' && babyCupboardNovContents.kpi3 <= '31.25')?'red':(babyCupboardNovContents.kpi3 > '31.25' && babyCupboardNovContents.kpi3 <= '41.8')?'orange':(babyCupboardNovContents.kpi3 > '41.8' && babyCupboardNovContents.kpi3 < '52.25')?'yellow-7':(babyCupboardNovContents.kpi3 >= '52.25' && babyCupboardNovContents.kpi3 < '1048.5')?'green':(babyCupboardNovContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi4 == null)?'grey-2':(babyCupboardNovContents.kpi4 >= '0' && babyCupboardNovContents.kpi4 <= '12.45')?'red':(babyCupboardNovContents.kpi4 > '12.45' && babyCupboardNovContents.kpi4 <= '16.6')?'orange':(babyCupboardNovContents.kpi4 > '16.6' && babyCupboardNovContents.kpi4 < '20.75')?'yellow-7':(babyCupboardNovContents.kpi4 >= '20.75' && babyCupboardNovContents.kpi4 < '24.9')?'green':(babyCupboardNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi4}}
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
                              :color="(babyCupboardDecContents.kpi1 == null)?'grey-2':(babyCupboardDecContents.kpi1 >= '0' && babyCupboardDecContents.kpi1 <= '27')?'red':(babyCupboardDecContents.kpi1 > '27' && babyCupboardDecContents.kpi1 <= '36')?'orange':(babyCupboardDecContents.kpi1 > '36' && babyCupboardDecContents.kpi1 < '45')?'yellow-7':(babyCupboardDecContents.kpi1 >= '45' && babyCupboardDecContents.kpi1 < '477.6')?'green':(babyCupboardDecContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi2 == null)?'grey-2':(babyCupboardDecContents.kpi2 >= '0' && babyCupboardDecContents.kpi2 <= '27')?'red':(babyCupboardDecContents.kpi2 > '27' && babyCupboardDecContents.kpi2 <= '36')?'orange':(babyCupboardDecContents.kpi2 > '36' && babyCupboardDecContents.kpi2 < '45')?'yellow-7':(babyCupboardDecContents.kpi2 >= '45' && babyCupboardDecContents.kpi2 < '488.4')?'green':(babyCupboardDecContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi3 == null)?'grey-2':(babyCupboardDecContents.kpi3 >= '0' && babyCupboardDecContents.kpi3 <= '31.25')?'red':(babyCupboardDecContents.kpi3 > '31.25' && babyCupboardDecContents.kpi3 <= '41.8')?'orange':(babyCupboardDecContents.kpi3 > '41.8' && babyCupboardDecContents.kpi3 < '52.25')?'yellow-7':(babyCupboardDecContents.kpi3 >= '52.25' && babyCupboardDecContents.kpi3 < '1048.5')?'green':(babyCupboardDecContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi4 == null)?'grey-2':(babyCupboardDecContents.kpi4 >= '0' && babyCupboardDecContents.kpi4 <= '12.45')?'red':(babyCupboardDecContents.kpi4 > '12.45' && babyCupboardDecContents.kpi4 <= '16.6')?'orange':(babyCupboardDecContents.kpi4 > '16.6' && babyCupboardDecContents.kpi4 < '20.75')?'yellow-7':(babyCupboardDecContents.kpi4 >= '20.75' && babyCupboardDecContents.kpi4 < '24.9')?'green':(babyCupboardDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi4}}
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
                              :color="(babyCupboardJanContents.kpi1 == null)?'grey-2':(babyCupboardJanContents.kpi1 >= '0' && babyCupboardJanContents.kpi1 <= '27')?'red':(babyCupboardJanContents.kpi1 > '27' && babyCupboardJanContents.kpi1 <= '36')?'orange':(babyCupboardJanContents.kpi1 > '36' && babyCupboardJanContents.kpi1 < '45')?'yellow-7':(babyCupboardJanContents.kpi1 >= '45' && babyCupboardJanContents.kpi1 < '477.6')?'green':(babyCupboardJanContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi2 == null)?'grey-2':(babyCupboardJanContents.kpi2 >= '0' && babyCupboardJanContents.kpi2 <= '27')?'red':(babyCupboardJanContents.kpi2 > '27' && babyCupboardJanContents.kpi2 <= '36')?'orange':(babyCupboardJanContents.kpi2 > '36' && babyCupboardJanContents.kpi2 < '45')?'yellow-7':(babyCupboardJanContents.kpi2 >= '45' && babyCupboardJanContents.kpi2 < '488.4')?'green':(babyCupboardJanContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi3 == null)?'grey-2':(babyCupboardJanContents.kpi3 >= '0' && babyCupboardJanContents.kpi3 <= '31.25')?'red':(babyCupboardJanContents.kpi3 > '31.25' && babyCupboardJanContents.kpi3 <= '41.8')?'orange':(babyCupboardJanContents.kpi3 > '41.8' && babyCupboardJanContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJanContents.kpi3 >= '52.25' && babyCupboardJanContents.kpi3 < '1048.5')?'green':(babyCupboardJanContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi4 == null)?'grey-2':(babyCupboardJanContents.kpi4 >= '0' && babyCupboardJanContents.kpi4 <= '12.45')?'red':(babyCupboardJanContents.kpi4 > '12.45' && babyCupboardJanContents.kpi4 <= '16.6')?'orange':(babyCupboardJanContents.kpi4 > '16.6' && babyCupboardJanContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJanContents.kpi4 >= '20.75' && babyCupboardJanContents.kpi4 < '24.9')?'green':(babyCupboardJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi4}}
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
                              :color="(babyCupboardFebContents.kpi1 == null)?'grey-2':(babyCupboardFebContents.kpi1 >= '0' && babyCupboardFebContents.kpi1 <= '27')?'red':(babyCupboardFebContents.kpi1 > '27' && babyCupboardFebContents.kpi1 <= '36')?'orange':(babyCupboardFebContents.kpi1 > '36' && babyCupboardFebContents.kpi1 < '45')?'yellow-7':(babyCupboardFebContents.kpi1 >= '45' && babyCupboardFebContents.kpi1 < '477.6')?'green':(babyCupboardFebContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi2 == null)?'grey-2':(babyCupboardFebContents.kpi2 >= '0' && babyCupboardFebContents.kpi2 <= '27')?'red':(babyCupboardFebContents.kpi2 > '27' && babyCupboardFebContents.kpi2 <= '36')?'orange':(babyCupboardFebContents.kpi2 > '36' && babyCupboardFebContents.kpi2 < '45')?'yellow-7':(babyCupboardFebContents.kpi2 >= '45' && babyCupboardFebContents.kpi2 < '488.4')?'green':(babyCupboardFebContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi3 == null)?'grey-2':(babyCupboardFebContents.kpi3 >= '0' && babyCupboardFebContents.kpi3 <= '31.25')?'red':(babyCupboardFebContents.kpi3 > '31.25' && babyCupboardFebContents.kpi3 <= '41.8')?'orange':(babyCupboardFebContents.kpi3 > '41.8' && babyCupboardFebContents.kpi3 < '52.25')?'yellow-7':(babyCupboardFebContents.kpi3 >= '52.25' && babyCupboardFebContents.kpi3 < '1048.5')?'green':(babyCupboardFebContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi4 == null)?'grey-2':(babyCupboardFebContents.kpi4 >= '0' && babyCupboardFebContents.kpi4 <= '12.45')?'red':(babyCupboardFebContents.kpi4 > '12.45' && babyCupboardFebContents.kpi4 <= '16.6')?'orange':(babyCupboardFebContents.kpi4 > '16.6' && babyCupboardFebContents.kpi4 < '20.75')?'yellow-7':(babyCupboardFebContents.kpi4 >= '20.75' && babyCupboardFebContents.kpi4 < '24.9')?'green':(babyCupboardFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi4}}
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
                              :color="(babyCupboardMarContents.kpi1 == null)?'grey-2':(babyCupboardMarContents.kpi1 >= '0' && babyCupboardMarContents.kpi1 <= '27')?'red':(babyCupboardMarContents.kpi1 > '27' && babyCupboardMarContents.kpi1 <= '36')?'orange':(babyCupboardMarContents.kpi1 > '36' && babyCupboardMarContents.kpi1 < '45')?'yellow-7':(babyCupboardMarContents.kpi1 >= '45' && babyCupboardMarContents.kpi1 < '477.6')?'green':(babyCupboardMarContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi2 == null)?'grey-2':(babyCupboardMarContents.kpi2 >= '0' && babyCupboardMarContents.kpi2 <= '27')?'red':(babyCupboardMarContents.kpi2 > '27' && babyCupboardMarContents.kpi2 <= '36')?'orange':(babyCupboardMarContents.kpi2 > '36' && babyCupboardMarContents.kpi2 < '45')?'yellow-7':(babyCupboardMarContents.kpi2 >= '45' && babyCupboardMarContents.kpi2 < '488.4')?'green':(babyCupboardMarContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi3 == null)?'grey-2':(babyCupboardMarContents.kpi3 >= '0' && babyCupboardMarContents.kpi3 <= '31.25')?'red':(babyCupboardMarContents.kpi3 > '31.25' && babyCupboardMarContents.kpi3 <= '41.8')?'orange':(babyCupboardMarContents.kpi3 > '41.8' && babyCupboardMarContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMarContents.kpi3 >= '52.25' && babyCupboardMarContents.kpi3 < '1048.5')?'green':(babyCupboardMarContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi4 == null)?'grey-2':(babyCupboardMarContents.kpi4 >= '0' && babyCupboardMarContents.kpi4 <= '12.45')?'red':(babyCupboardMarContents.kpi4 > '12.45' && babyCupboardMarContents.kpi4 <= '16.6')?'orange':(babyCupboardMarContents.kpi4 > '16.6' && babyCupboardMarContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMarContents.kpi4 >= '20.75' && babyCupboardMarContents.kpi4 < '24.9')?'green':(babyCupboardMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi4}}
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
                              :color="(babyCupboardAprContents.kpi1 == null)?'grey-2':(babyCupboardAprContents.kpi1 >= '0' && babyCupboardAprContents.kpi1 <= '27')?'red':(babyCupboardAprContents.kpi1 > '27' && babyCupboardAprContents.kpi1 <= '36')?'orange':(babyCupboardAprContents.kpi1 > '36' && babyCupboardAprContents.kpi1 < '45')?'yellow-7':(babyCupboardAprContents.kpi1 >= '45' && babyCupboardAprContents.kpi1 < '477.6')?'green':(babyCupboardAprContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi2 == null)?'grey-2':(babyCupboardAprContents.kpi2 >= '0' && babyCupboardAprContents.kpi2 <= '27')?'red':(babyCupboardAprContents.kpi2 > '27' && babyCupboardAprContents.kpi2 <= '36')?'orange':(babyCupboardAprContents.kpi2 > '36' && babyCupboardAprContents.kpi2 < '45')?'yellow-7':(babyCupboardAprContents.kpi2 >= '45' && babyCupboardAprContents.kpi2 < '488.4')?'green':(babyCupboardAprContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi3 == null)?'grey-2':(babyCupboardAprContents.kpi3 >= '0' && babyCupboardAprContents.kpi3 <= '31.25')?'red':(babyCupboardAprContents.kpi3 > '31.25' && babyCupboardAprContents.kpi3 <= '41.8')?'orange':(babyCupboardAprContents.kpi3 > '41.8' && babyCupboardAprContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAprContents.kpi3 >= '52.25' && babyCupboardAprContents.kpi3 < '1048.5')?'green':(babyCupboardAprContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi4 == null)?'grey-2':(babyCupboardAprContents.kpi4 >= '0' && babyCupboardAprContents.kpi4 <= '12.45')?'red':(babyCupboardAprContents.kpi4 > '12.45' && babyCupboardAprContents.kpi4 <= '16.6')?'orange':(babyCupboardAprContents.kpi4 > '16.6' && babyCupboardAprContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAprContents.kpi4 >= '20.75' && babyCupboardAprContents.kpi4 < '24.9')?'green':(babyCupboardAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi4}}
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
                              :color="(babyCupboardMayContents.kpi1 == null)?'grey-2':(babyCupboardMayContents.kpi1 >= '0' && babyCupboardMayContents.kpi1 <= '27')?'red':(babyCupboardMayContents.kpi1 > '27' && babyCupboardMayContents.kpi1 <= '36')?'orange':(babyCupboardMayContents.kpi1 > '36' && babyCupboardMayContents.kpi1 < '45')?'yellow-7':(babyCupboardMayContents.kpi1 >= '45' && babyCupboardMayContents.kpi1 < '477.6')?'green':(babyCupboardMayContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi2 == null)?'grey-2':(babyCupboardMayContents.kpi2 >= '0' && babyCupboardMayContents.kpi2 <= '27')?'red':(babyCupboardMayContents.kpi2 > '27' && babyCupboardMayContents.kpi2 <= '36')?'orange':(babyCupboardMayContents.kpi2 > '36' && babyCupboardMayContents.kpi2 < '45')?'yellow-7':(babyCupboardMayContents.kpi2 >= '45' && babyCupboardMayContents.kpi2 < '488.4')?'green':(babyCupboardMayContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi3 == null)?'grey-2':(babyCupboardMayContents.kpi3 >= '0' && babyCupboardMayContents.kpi3 <= '31.25')?'red':(babyCupboardMayContents.kpi3 > '31.25' && babyCupboardMayContents.kpi3 <= '41.8')?'orange':(babyCupboardMayContents.kpi3 > '41.8' && babyCupboardMayContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMayContents.kpi3 >= '52.25' && babyCupboardMayContents.kpi3 < '1048.5')?'green':(babyCupboardMayContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi4 == null)?'grey-2':(babyCupboardMayContents.kpi4 >= '0' && babyCupboardMayContents.kpi4 <= '12.45')?'red':(babyCupboardMayContents.kpi4 > '12.45' && babyCupboardMayContents.kpi4 <= '16.6')?'orange':(babyCupboardMayContents.kpi4 > '16.6' && babyCupboardMayContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMayContents.kpi4 >= '20.75' && babyCupboardMayContents.kpi4 < '24.9')?'green':(babyCupboardMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi4}}
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
                              :color="(babyCupboardJunContents.kpi1 == null)?'grey-2':(babyCupboardJunContents.kpi1 >= '0' && babyCupboardJunContents.kpi1 <= '27')?'red':(babyCupboardJunContents.kpi1 > '27' && babyCupboardJunContents.kpi1 <= '36')?'orange':(babyCupboardJunContents.kpi1 > '36' && babyCupboardJunContents.kpi1 < '45')?'yellow-7':(babyCupboardJunContents.kpi1 >= '45' && babyCupboardJunContents.kpi1 < '477.6')?'green':(babyCupboardJunContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi2 == null)?'grey-2':(babyCupboardJunContents.kpi2 >= '0' && babyCupboardJunContents.kpi2 <= '27')?'red':(babyCupboardJunContents.kpi2 > '27' && babyCupboardJunContents.kpi2 <= '36')?'orange':(babyCupboardJunContents.kpi2 > '36' && babyCupboardJunContents.kpi2 < '45')?'yellow-7':(babyCupboardJunContents.kpi2 >= '45' && babyCupboardJunContents.kpi2 < '488.4')?'green':(babyCupboardJunContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi3 == null)?'grey-2':(babyCupboardJunContents.kpi3 >= '0' && babyCupboardJunContents.kpi3 <= '31.25')?'red':(babyCupboardJunContents.kpi3 > '31.25' && babyCupboardJunContents.kpi3 <= '41.8')?'orange':(babyCupboardJunContents.kpi3 > '41.8' && babyCupboardJunContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJunContents.kpi3 >= '52.25' && babyCupboardJunContents.kpi3 < '1048.5')?'green':(babyCupboardJunContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi4 == null)?'grey-2':(babyCupboardJunContents.kpi4 >= '0' && babyCupboardJunContents.kpi4 <= '12.45')?'red':(babyCupboardJunContents.kpi4 > '12.45' && babyCupboardJunContents.kpi4 <= '16.6')?'orange':(babyCupboardJunContents.kpi4 > '16.6' && babyCupboardJunContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJunContents.kpi4 >= '20.75' && babyCupboardJunContents.kpi4 < '24.9')?'green':(babyCupboardJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi4}}
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
                              :color="(babyCupboardJulContents.kpi1 == null)?'grey-2':(babyCupboardJulContents.kpi1 >= '0' && babyCupboardJulContents.kpi1 <= '27')?'red':(babyCupboardJulContents.kpi1 > '27' && babyCupboardJulContents.kpi1 <= '36')?'orange':(babyCupboardJulContents.kpi1 > '36' && babyCupboardJulContents.kpi1 < '45')?'yellow-7':(babyCupboardJulContents.kpi1 >= '45' && babyCupboardJulContents.kpi1 < '477.6')?'green':(babyCupboardJulContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi2 == null)?'grey-2':(babyCupboardJulContents.kpi2 >= '0' && babyCupboardJulContents.kpi2 <= '27')?'red':(babyCupboardJulContents.kpi2 > '27' && babyCupboardJulContents.kpi2 <= '36')?'orange':(babyCupboardJulContents.kpi2 > '36' && babyCupboardJulContents.kpi2 < '45')?'yellow-7':(babyCupboardJulContents.kpi2 >= '45' && babyCupboardJulContents.kpi2 < '488.4')?'green':(babyCupboardJulContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi3 == null)?'grey-2':(babyCupboardJulContents.kpi3 >= '0' && babyCupboardJulContents.kpi3 <= '31.25')?'red':(babyCupboardJulContents.kpi3 > '31.25' && babyCupboardJulContents.kpi3 <= '41.8')?'orange':(babyCupboardJulContents.kpi3 > '41.8' && babyCupboardJulContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJulContents.kpi3 >= '52.25' && babyCupboardJulContents.kpi3 < '1048.5')?'green':(babyCupboardJulContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi4 == null)?'grey-2':(babyCupboardJulContents.kpi4 >= '0' && babyCupboardJulContents.kpi4 <= '12.45')?'red':(babyCupboardJulContents.kpi4 > '12.45' && babyCupboardJulContents.kpi4 <= '16.6')?'orange':(babyCupboardJulContents.kpi4 > '16.6' && babyCupboardJulContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJulContents.kpi4 >= '20.75' && babyCupboardJulContents.kpi4 < '24.9')?'green':(babyCupboardJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi4}}
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
                              :color="(babyCupboardAugContents.kpi1 == null)?'grey-2':(babyCupboardAugContents.kpi1 >= '0' && babyCupboardAugContents.kpi1 <= '27')?'red':(babyCupboardAugContents.kpi1 > '27' && babyCupboardAugContents.kpi1 <= '36')?'orange':(babyCupboardAugContents.kpi1 > '36' && babyCupboardAugContents.kpi1 < '45')?'yellow-7':(babyCupboardAugContents.kpi1 >= '45' && babyCupboardAugContents.kpi1 < '477.6')?'green':(babyCupboardAugContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi2 == null)?'grey-2':(babyCupboardAugContents.kpi2 >= '0' && babyCupboardAugContents.kpi2 <= '27')?'red':(babyCupboardAugContents.kpi2 > '27' && babyCupboardAugContents.kpi2 <= '36')?'orange':(babyCupboardAugContents.kpi2 > '36' && babyCupboardAugContents.kpi2 < '45')?'yellow-7':(babyCupboardAugContents.kpi2 >= '45' && babyCupboardAugContents.kpi2 < '488.4')?'green':(babyCupboardAugContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi3 == null)?'grey-2':(babyCupboardAugContents.kpi3 >= '0' && babyCupboardAugContents.kpi3 <= '31.25')?'red':(babyCupboardAugContents.kpi3 > '31.25' && babyCupboardAugContents.kpi3 <= '41.8')?'orange':(babyCupboardAugContents.kpi3 > '41.8' && babyCupboardAugContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAugContents.kpi3 >= '52.25' && babyCupboardAugContents.kpi3 < '1048.5')?'green':(babyCupboardAugContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi4 == null)?'grey-2':(babyCupboardAugContents.kpi4 >= '0' && babyCupboardAugContents.kpi4 <= '12.45')?'red':(babyCupboardAugContents.kpi4 > '12.45' && babyCupboardAugContents.kpi4 <= '16.6')?'orange':(babyCupboardAugContents.kpi4 > '16.6' && babyCupboardAugContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAugContents.kpi4 >= '20.75' && babyCupboardAugContents.kpi4 < '24.9')?'green':(babyCupboardAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi4}}
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
                              :color="(babyCupboardSepContents.kpi1 == null)?'grey-2':(babyCupboardSepContents.kpi1 >= '0' && babyCupboardSepContents.kpi1 <= '27')?'red':(babyCupboardSepContents.kpi1 > '27' && babyCupboardSepContents.kpi1 <= '36')?'orange':(babyCupboardSepContents.kpi1 > '36' && babyCupboardSepContents.kpi1 < '45')?'yellow-7':(babyCupboardSepContents.kpi1 >= '45' && babyCupboardSepContents.kpi1 < '477.6')?'green':(babyCupboardSepContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi2 == null)?'grey-2':(babyCupboardSepContents.kpi2 >= '0' && babyCupboardSepContents.kpi2 <= '27')?'red':(babyCupboardSepContents.kpi2 > '27' && babyCupboardSepContents.kpi2 <= '36')?'orange':(babyCupboardSepContents.kpi2 > '36' && babyCupboardSepContents.kpi2 < '45')?'yellow-7':(babyCupboardSepContents.kpi2 >= '45' && babyCupboardSepContents.kpi2 < '488.4')?'green':(babyCupboardSepContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi3 == null)?'grey-2':(babyCupboardSepContents.kpi3 >= '0' && babyCupboardSepContents.kpi3 <= '31.25')?'red':(babyCupboardSepContents.kpi3 > '31.25' && babyCupboardSepContents.kpi3 <= '41.8')?'orange':(babyCupboardSepContents.kpi3 > '41.8' && babyCupboardSepContents.kpi3 < '52.25')?'yellow-7':(babyCupboardSepContents.kpi3 >= '52.25' && babyCupboardSepContents.kpi3 < '1048.5')?'green':(babyCupboardSepContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi4 == null)?'grey-2':(babyCupboardSepContents.kpi4 >= '0' && babyCupboardSepContents.kpi4 <= '12.45')?'red':(babyCupboardSepContents.kpi4 > '12.45' && babyCupboardSepContents.kpi4 <= '16.6')?'orange':(babyCupboardSepContents.kpi4 > '16.6' && babyCupboardSepContents.kpi4 < '20.75')?'yellow-7':(babyCupboardSepContents.kpi4 >= '20.75' && babyCupboardSepContents.kpi4 < '24.9')?'green':(babyCupboardSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi4}}
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
                              :color="(babyCupboardOctContents.kpi1 == null)?'grey-2':(babyCupboardOctContents.kpi1 >= '0' && babyCupboardOctContents.kpi1 <= '27')?'red':(babyCupboardOctContents.kpi1 > '27' && babyCupboardOctContents.kpi1 <= '36')?'orange':(babyCupboardOctContents.kpi1 > '36' && babyCupboardOctContents.kpi1 < '45')?'yellow-7':(babyCupboardOctContents.kpi1 >= '45' && babyCupboardOctContents.kpi1 < '477.6')?'green':(babyCupboardOctContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi2 == null)?'grey-2':(babyCupboardOctContents.kpi2 >= '0' && babyCupboardOctContents.kpi2 <= '27')?'red':(babyCupboardOctContents.kpi2 > '27' && babyCupboardOctContents.kpi2 <= '36')?'orange':(babyCupboardOctContents.kpi2 > '36' && babyCupboardOctContents.kpi2 < '45')?'yellow-7':(babyCupboardOctContents.kpi2 >= '45' && babyCupboardOctContents.kpi2 < '488.4')?'green':(babyCupboardOctContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi3 == null)?'grey-2':(babyCupboardOctContents.kpi3 >= '0' && babyCupboardOctContents.kpi3 <= '31.25')?'red':(babyCupboardOctContents.kpi3 > '31.25' && babyCupboardOctContents.kpi3 <= '41.8')?'orange':(babyCupboardOctContents.kpi3 > '41.8' && babyCupboardOctContents.kpi3 < '52.25')?'yellow-7':(babyCupboardOctContents.kpi3 >= '52.25' && babyCupboardOctContents.kpi3 < '1048.5')?'green':(babyCupboardOctContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi4 == null)?'grey-2':(babyCupboardOctContents.kpi4 >= '0' && babyCupboardOctContents.kpi4 <= '12.45')?'red':(babyCupboardOctContents.kpi4 > '12.45' && babyCupboardOctContents.kpi4 <= '16.6')?'orange':(babyCupboardOctContents.kpi4 > '16.6' && babyCupboardOctContents.kpi4 < '20.75')?'yellow-7':(babyCupboardOctContents.kpi4 >= '20.75' && babyCupboardOctContents.kpi4 < '24.9')?'green':(babyCupboardOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi4}}
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
                              :color="(babyCupboardNovContents.kpi1 == null)?'grey-2':(babyCupboardNovContents.kpi1 >= '0' && babyCupboardNovContents.kpi1 <= '27')?'red':(babyCupboardNovContents.kpi1 > '27' && babyCupboardNovContents.kpi1 <= '36')?'orange':(babyCupboardNovContents.kpi1 > '36' && babyCupboardNovContents.kpi1 < '45')?'yellow-7':(babyCupboardNovContents.kpi1 >= '45' && babyCupboardNovContents.kpi1 < '477.6')?'green':(babyCupboardNovContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi2 == null)?'grey-2':(babyCupboardNovContents.kpi2 >= '0' && babyCupboardNovContents.kpi2 <= '27')?'red':(babyCupboardNovContents.kpi2 > '27' && babyCupboardNovContents.kpi2 <= '36')?'orange':(babyCupboardNovContents.kpi2 > '36' && babyCupboardNovContents.kpi2 < '45')?'yellow-7':(babyCupboardNovContents.kpi2 >= '45' && babyCupboardNovContents.kpi2 < '488.4')?'green':(babyCupboardNovContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi3 == null)?'grey-2':(babyCupboardNovContents.kpi3 >= '0' && babyCupboardNovContents.kpi3 <= '31.25')?'red':(babyCupboardNovContents.kpi3 > '31.25' && babyCupboardNovContents.kpi3 <= '41.8')?'orange':(babyCupboardNovContents.kpi3 > '41.8' && babyCupboardNovContents.kpi3 < '52.25')?'yellow-7':(babyCupboardNovContents.kpi3 >= '52.25' && babyCupboardNovContents.kpi3 < '1048.5')?'green':(babyCupboardNovContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi4 == null)?'grey-2':(babyCupboardNovContents.kpi4 >= '0' && babyCupboardNovContents.kpi4 <= '12.45')?'red':(babyCupboardNovContents.kpi4 > '12.45' && babyCupboardNovContents.kpi4 <= '16.6')?'orange':(babyCupboardNovContents.kpi4 > '16.6' && babyCupboardNovContents.kpi4 < '20.75')?'yellow-7':(babyCupboardNovContents.kpi4 >= '20.75' && babyCupboardNovContents.kpi4 < '24.9')?'green':(babyCupboardNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi4}}
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
                              :color="(babyCupboardDecContents.kpi1 == null)?'grey-2':(babyCupboardDecContents.kpi1 >= '0' && babyCupboardDecContents.kpi1 <= '27')?'red':(babyCupboardDecContents.kpi1 > '27' && babyCupboardDecContents.kpi1 <= '36')?'orange':(babyCupboardDecContents.kpi1 > '36' && babyCupboardDecContents.kpi1 < '45')?'yellow-7':(babyCupboardDecContents.kpi1 >= '45' && babyCupboardDecContents.kpi1 < '477.6')?'green':(babyCupboardDecContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi2 == null)?'grey-2':(babyCupboardDecContents.kpi2 >= '0' && babyCupboardDecContents.kpi2 <= '27')?'red':(babyCupboardDecContents.kpi2 > '27' && babyCupboardDecContents.kpi2 <= '36')?'orange':(babyCupboardDecContents.kpi2 > '36' && babyCupboardDecContents.kpi2 < '45')?'yellow-7':(babyCupboardDecContents.kpi2 >= '45' && babyCupboardDecContents.kpi2 < '488.4')?'green':(babyCupboardDecContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi3 == null)?'grey-2':(babyCupboardDecContents.kpi3 >= '0' && babyCupboardDecContents.kpi3 <= '31.25')?'red':(babyCupboardDecContents.kpi3 > '31.25' && babyCupboardDecContents.kpi3 <= '41.8')?'orange':(babyCupboardDecContents.kpi3 > '41.8' && babyCupboardDecContents.kpi3 < '52.25')?'yellow-7':(babyCupboardDecContents.kpi3 >= '52.25' && babyCupboardDecContents.kpi3 < '1048.5')?'green':(babyCupboardDecContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi4 == null)?'grey-2':(babyCupboardDecContents.kpi4 >= '0' && babyCupboardDecContents.kpi4 <= '12.45')?'red':(babyCupboardDecContents.kpi4 > '12.45' && babyCupboardDecContents.kpi4 <= '16.6')?'orange':(babyCupboardDecContents.kpi4 > '16.6' && babyCupboardDecContents.kpi4 < '20.75')?'yellow-7':(babyCupboardDecContents.kpi4 >= '20.75' && babyCupboardDecContents.kpi4 < '24.9')?'green':(babyCupboardDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi4}}
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
                              :color="(babyCupboardJanContents.kpi1 == null)?'grey-2':(babyCupboardJanContents.kpi1 >= '0' && babyCupboardJanContents.kpi1 <= '27')?'red':(babyCupboardJanContents.kpi1 > '27' && babyCupboardJanContents.kpi1 <= '36')?'orange':(babyCupboardJanContents.kpi1 > '36' && babyCupboardJanContents.kpi1 < '45')?'yellow-7':(babyCupboardJanContents.kpi1 >= '45' && babyCupboardJanContents.kpi1 < '477.6')?'green':(babyCupboardJanContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi2 == null)?'grey-2':(babyCupboardJanContents.kpi2 >= '0' && babyCupboardJanContents.kpi2 <= '27')?'red':(babyCupboardJanContents.kpi2 > '27' && babyCupboardJanContents.kpi2 <= '36')?'orange':(babyCupboardJanContents.kpi2 > '36' && babyCupboardJanContents.kpi2 < '45')?'yellow-7':(babyCupboardJanContents.kpi2 >= '45' && babyCupboardJanContents.kpi2 < '488.4')?'green':(babyCupboardJanContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi3 == null)?'grey-2':(babyCupboardJanContents.kpi3 >= '0' && babyCupboardJanContents.kpi3 <= '31.25')?'red':(babyCupboardJanContents.kpi3 > '31.25' && babyCupboardJanContents.kpi3 <= '41.8')?'orange':(babyCupboardJanContents.kpi3 > '41.8' && babyCupboardJanContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJanContents.kpi3 >= '52.25' && babyCupboardJanContents.kpi3 < '1048.5')?'green':(babyCupboardJanContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi4 == null)?'grey-2':(babyCupboardJanContents.kpi4 >= '0' && babyCupboardJanContents.kpi4 <= '12.45')?'red':(babyCupboardJanContents.kpi4 > '12.45' && babyCupboardJanContents.kpi4 <= '16.6')?'orange':(babyCupboardJanContents.kpi4 > '16.6' && babyCupboardJanContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJanContents.kpi4 >= '20.75' && babyCupboardJanContents.kpi4 < '24.9')?'green':(babyCupboardJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi4}}
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
                              :color="(babyCupboardFebContents.kpi1 == null)?'grey-2':(babyCupboardFebContents.kpi1 >= '0' && babyCupboardFebContents.kpi1 <= '27')?'red':(babyCupboardFebContents.kpi1 > '27' && babyCupboardFebContents.kpi1 <= '36')?'orange':(babyCupboardFebContents.kpi1 > '36' && babyCupboardFebContents.kpi1 < '45')?'yellow-7':(babyCupboardFebContents.kpi1 >= '45' && babyCupboardFebContents.kpi1 < '477.6')?'green':(babyCupboardFebContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi2 == null)?'grey-2':(babyCupboardFebContents.kpi2 >= '0' && babyCupboardFebContents.kpi2 <= '27')?'red':(babyCupboardFebContents.kpi2 > '27' && babyCupboardFebContents.kpi2 <= '36')?'orange':(babyCupboardFebContents.kpi2 > '36' && babyCupboardFebContents.kpi2 < '45')?'yellow-7':(babyCupboardFebContents.kpi2 >= '45' && babyCupboardFebContents.kpi2 < '488.4')?'green':(babyCupboardFebContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi3 == null)?'grey-2':(babyCupboardFebContents.kpi3 >= '0' && babyCupboardFebContents.kpi3 <= '31.25')?'red':(babyCupboardFebContents.kpi3 > '31.25' && babyCupboardFebContents.kpi3 <= '41.8')?'orange':(babyCupboardFebContents.kpi3 > '41.8' && babyCupboardFebContents.kpi3 < '52.25')?'yellow-7':(babyCupboardFebContents.kpi3 >= '52.25' && babyCupboardFebContents.kpi3 < '1048.5')?'green':(babyCupboardFebContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi4 == null)?'grey-2':(babyCupboardFebContents.kpi4 >= '0' && babyCupboardFebContents.kpi4 <= '12.45')?'red':(babyCupboardFebContents.kpi4 > '12.45' && babyCupboardFebContents.kpi4 <= '16.6')?'orange':(babyCupboardFebContents.kpi4 > '16.6' && babyCupboardFebContents.kpi4 < '20.75')?'yellow-7':(babyCupboardFebContents.kpi4 >= '20.75' && babyCupboardFebContents.kpi4 < '24.9')?'green':(babyCupboardFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi4}}
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
                              :color="(babyCupboardMarContents.kpi1 == null)?'grey-2':(babyCupboardMarContents.kpi1 >= '0' && babyCupboardMarContents.kpi1 <= '27')?'red':(babyCupboardMarContents.kpi1 > '27' && babyCupboardMarContents.kpi1 <= '36')?'orange':(babyCupboardMarContents.kpi1 > '36' && babyCupboardMarContents.kpi1 < '45')?'yellow-7':(babyCupboardMarContents.kpi1 >= '45' && babyCupboardMarContents.kpi1 < '477.6')?'green':(babyCupboardMarContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi2 == null)?'grey-2':(babyCupboardMarContents.kpi2 >= '0' && babyCupboardMarContents.kpi2 <= '27')?'red':(babyCupboardMarContents.kpi2 > '27' && babyCupboardMarContents.kpi2 <= '36')?'orange':(babyCupboardMarContents.kpi2 > '36' && babyCupboardMarContents.kpi2 < '45')?'yellow-7':(babyCupboardMarContents.kpi2 >= '45' && babyCupboardMarContents.kpi2 < '488.4')?'green':(babyCupboardMarContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi3 == null)?'grey-2':(babyCupboardMarContents.kpi3 >= '0' && babyCupboardMarContents.kpi3 <= '31.25')?'red':(babyCupboardMarContents.kpi3 > '31.25' && babyCupboardMarContents.kpi3 <= '41.8')?'orange':(babyCupboardMarContents.kpi3 > '41.8' && babyCupboardMarContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMarContents.kpi3 >= '52.25' && babyCupboardMarContents.kpi3 < '1048.5')?'green':(babyCupboardMarContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi4 == null)?'grey-2':(babyCupboardMarContents.kpi4 >= '0' && babyCupboardMarContents.kpi4 <= '12.45')?'red':(babyCupboardMarContents.kpi4 > '12.45' && babyCupboardMarContents.kpi4 <= '16.6')?'orange':(babyCupboardMarContents.kpi4 > '16.6' && babyCupboardMarContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMarContents.kpi4 >= '20.75' && babyCupboardMarContents.kpi4 < '24.9')?'green':(babyCupboardMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi4}}
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
                              :color="(babyCupboardAprContents.kpi1 == null)?'grey-2':(babyCupboardAprContents.kpi1 >= '0' && babyCupboardAprContents.kpi1 <= '27')?'red':(babyCupboardAprContents.kpi1 > '27' && babyCupboardAprContents.kpi1 <= '36')?'orange':(babyCupboardAprContents.kpi1 > '36' && babyCupboardAprContents.kpi1 < '45')?'yellow-7':(babyCupboardAprContents.kpi1 >= '45' && babyCupboardAprContents.kpi1 < '477.6')?'green':(babyCupboardAprContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi2 == null)?'grey-2':(babyCupboardAprContents.kpi2 >= '0' && babyCupboardAprContents.kpi2 <= '27')?'red':(babyCupboardAprContents.kpi2 > '27' && babyCupboardAprContents.kpi2 <= '36')?'orange':(babyCupboardAprContents.kpi2 > '36' && babyCupboardAprContents.kpi2 < '45')?'yellow-7':(babyCupboardAprContents.kpi2 >= '45' && babyCupboardAprContents.kpi2 < '488.4')?'green':(babyCupboardAprContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi3 == null)?'grey-2':(babyCupboardAprContents.kpi3 >= '0' && babyCupboardAprContents.kpi3 <= '31.25')?'red':(babyCupboardAprContents.kpi3 > '31.25' && babyCupboardAprContents.kpi3 <= '41.8')?'orange':(babyCupboardAprContents.kpi3 > '41.8' && babyCupboardAprContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAprContents.kpi3 >= '52.25' && babyCupboardAprContents.kpi3 < '1048.5')?'green':(babyCupboardAprContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi4 == null)?'grey-2':(babyCupboardAprContents.kpi4 >= '0' && babyCupboardAprContents.kpi4 <= '12.45')?'red':(babyCupboardAprContents.kpi4 > '12.45' && babyCupboardAprContents.kpi4 <= '16.6')?'orange':(babyCupboardAprContents.kpi4 > '16.6' && babyCupboardAprContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAprContents.kpi4 >= '20.75' && babyCupboardAprContents.kpi4 < '24.9')?'green':(babyCupboardAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi4}}
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
                              :color="(babyCupboardMayContents.kpi1 == null)?'grey-2':(babyCupboardMayContents.kpi1 >= '0' && babyCupboardMayContents.kpi1 <= '27')?'red':(babyCupboardMayContents.kpi1 > '27' && babyCupboardMayContents.kpi1 <= '36')?'orange':(babyCupboardMayContents.kpi1 > '36' && babyCupboardMayContents.kpi1 < '45')?'yellow-7':(babyCupboardMayContents.kpi1 >= '45' && babyCupboardMayContents.kpi1 < '477.6')?'green':(babyCupboardMayContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi2 == null)?'grey-2':(babyCupboardMayContents.kpi2 >= '0' && babyCupboardMayContents.kpi2 <= '27')?'red':(babyCupboardMayContents.kpi2 > '27' && babyCupboardMayContents.kpi2 <= '36')?'orange':(babyCupboardMayContents.kpi2 > '36' && babyCupboardMayContents.kpi2 < '45')?'yellow-7':(babyCupboardMayContents.kpi2 >= '45' && babyCupboardMayContents.kpi2 < '488.4')?'green':(babyCupboardMayContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi3 == null)?'grey-2':(babyCupboardMayContents.kpi3 >= '0' && babyCupboardMayContents.kpi3 <= '31.25')?'red':(babyCupboardMayContents.kpi3 > '31.25' && babyCupboardMayContents.kpi3 <= '41.8')?'orange':(babyCupboardMayContents.kpi3 > '41.8' && babyCupboardMayContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMayContents.kpi3 >= '52.25' && babyCupboardMayContents.kpi3 < '1048.5')?'green':(babyCupboardMayContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi4 == null)?'grey-2':(babyCupboardMayContents.kpi4 >= '0' && babyCupboardMayContents.kpi4 <= '12.45')?'red':(babyCupboardMayContents.kpi4 > '12.45' && babyCupboardMayContents.kpi4 <= '16.6')?'orange':(babyCupboardMayContents.kpi4 > '16.6' && babyCupboardMayContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMayContents.kpi4 >= '20.75' && babyCupboardMayContents.kpi4 < '24.9')?'green':(babyCupboardMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi4}}
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
                              :color="(babyCupboardJunContents.kpi1 == null)?'grey-2':(babyCupboardJunContents.kpi1 >= '0' && babyCupboardJunContents.kpi1 <= '27')?'red':(babyCupboardJunContents.kpi1 > '27' && babyCupboardJunContents.kpi1 <= '36')?'orange':(babyCupboardJunContents.kpi1 > '36' && babyCupboardJunContents.kpi1 < '45')?'yellow-7':(babyCupboardJunContents.kpi1 >= '45' && babyCupboardJunContents.kpi1 < '477.6')?'green':(babyCupboardJunContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi2 == null)?'grey-2':(babyCupboardJunContents.kpi2 >= '0' && babyCupboardJunContents.kpi2 <= '27')?'red':(babyCupboardJunContents.kpi2 > '27' && babyCupboardJunContents.kpi2 <= '36')?'orange':(babyCupboardJunContents.kpi2 > '36' && babyCupboardJunContents.kpi2 < '45')?'yellow-7':(babyCupboardJunContents.kpi2 >= '45' && babyCupboardJunContents.kpi2 < '488.4')?'green':(babyCupboardJunContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi3 == null)?'grey-2':(babyCupboardJunContents.kpi3 >= '0' && babyCupboardJunContents.kpi3 <= '31.25')?'red':(babyCupboardJunContents.kpi3 > '31.25' && babyCupboardJunContents.kpi3 <= '41.8')?'orange':(babyCupboardJunContents.kpi3 > '41.8' && babyCupboardJunContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJunContents.kpi3 >= '52.25' && babyCupboardJunContents.kpi3 < '1048.5')?'green':(babyCupboardJunContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi4 == null)?'grey-2':(babyCupboardJunContents.kpi4 >= '0' && babyCupboardJunContents.kpi4 <= '12.45')?'red':(babyCupboardJunContents.kpi4 > '12.45' && babyCupboardJunContents.kpi4 <= '16.6')?'orange':(babyCupboardJunContents.kpi4 > '16.6' && babyCupboardJunContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJunContents.kpi4 >= '20.75' && babyCupboardJunContents.kpi4 < '24.9')?'green':(babyCupboardJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi4}}
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
                              :color="(babyCupboardJulContents.kpi1 == null)?'grey-2':(babyCupboardJulContents.kpi1 >= '0' && babyCupboardJulContents.kpi1 <= '27')?'red':(babyCupboardJulContents.kpi1 > '27' && babyCupboardJulContents.kpi1 <= '36')?'orange':(babyCupboardJulContents.kpi1 > '36' && babyCupboardJulContents.kpi1 < '45')?'yellow-7':(babyCupboardJulContents.kpi1 >= '45' && babyCupboardJulContents.kpi1 < '477.6')?'green':(babyCupboardJulContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi2 == null)?'grey-2':(babyCupboardJulContents.kpi2 >= '0' && babyCupboardJulContents.kpi2 <= '27')?'red':(babyCupboardJulContents.kpi2 > '27' && babyCupboardJulContents.kpi2 <= '36')?'orange':(babyCupboardJulContents.kpi2 > '36' && babyCupboardJulContents.kpi2 < '45')?'yellow-7':(babyCupboardJulContents.kpi2 >= '45' && babyCupboardJulContents.kpi2 < '488.4')?'green':(babyCupboardJulContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi3 == null)?'grey-2':(babyCupboardJulContents.kpi3 >= '0' && babyCupboardJulContents.kpi3 <= '31.25')?'red':(babyCupboardJulContents.kpi3 > '31.25' && babyCupboardJulContents.kpi3 <= '41.8')?'orange':(babyCupboardJulContents.kpi3 > '41.8' && babyCupboardJulContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJulContents.kpi3 >= '52.25' && babyCupboardJulContents.kpi3 < '1048.5')?'green':(babyCupboardJulContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi4 == null)?'grey-2':(babyCupboardJulContents.kpi4 >= '0' && babyCupboardJulContents.kpi4 <= '12.45')?'red':(babyCupboardJulContents.kpi4 > '12.45' && babyCupboardJulContents.kpi4 <= '16.6')?'orange':(babyCupboardJulContents.kpi4 > '16.6' && babyCupboardJulContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJulContents.kpi4 >= '20.75' && babyCupboardJulContents.kpi4 < '24.9')?'green':(babyCupboardJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi4}}
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
                              :color="(babyCupboardAugContents.kpi1 == null)?'grey-2':(babyCupboardAugContents.kpi1 >= '0' && babyCupboardAugContents.kpi1 <= '27')?'red':(babyCupboardAugContents.kpi1 > '27' && babyCupboardAugContents.kpi1 <= '36')?'orange':(babyCupboardAugContents.kpi1 > '36' && babyCupboardAugContents.kpi1 < '45')?'yellow-7':(babyCupboardAugContents.kpi1 >= '45' && babyCupboardAugContents.kpi1 < '477.6')?'green':(babyCupboardAugContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi2 == null)?'grey-2':(babyCupboardAugContents.kpi2 >= '0' && babyCupboardAugContents.kpi2 <= '27')?'red':(babyCupboardAugContents.kpi2 > '27' && babyCupboardAugContents.kpi2 <= '36')?'orange':(babyCupboardAugContents.kpi2 > '36' && babyCupboardAugContents.kpi2 < '45')?'yellow-7':(babyCupboardAugContents.kpi2 >= '45' && babyCupboardAugContents.kpi2 < '488.4')?'green':(babyCupboardAugContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi3 == null)?'grey-2':(babyCupboardAugContents.kpi3 >= '0' && babyCupboardAugContents.kpi3 <= '31.25')?'red':(babyCupboardAugContents.kpi3 > '31.25' && babyCupboardAugContents.kpi3 <= '41.8')?'orange':(babyCupboardAugContents.kpi3 > '41.8' && babyCupboardAugContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAugContents.kpi3 >= '52.25' && babyCupboardAugContents.kpi3 < '1048.5')?'green':(babyCupboardAugContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi4 == null)?'grey-2':(babyCupboardAugContents.kpi4 >= '0' && babyCupboardAugContents.kpi4 <= '12.45')?'red':(babyCupboardAugContents.kpi4 > '12.45' && babyCupboardAugContents.kpi4 <= '16.6')?'orange':(babyCupboardAugContents.kpi4 > '16.6' && babyCupboardAugContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAugContents.kpi4 >= '20.75' && babyCupboardAugContents.kpi4 < '24.9')?'green':(babyCupboardAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi4}}
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
                              :color="(babyCupboardSepContents.kpi1 == null)?'grey-2':(babyCupboardSepContents.kpi1 >= '0' && babyCupboardSepContents.kpi1 <= '27')?'red':(babyCupboardSepContents.kpi1 > '27' && babyCupboardSepContents.kpi1 <= '36')?'orange':(babyCupboardSepContents.kpi1 > '36' && babyCupboardSepContents.kpi1 < '45')?'yellow-7':(babyCupboardSepContents.kpi1 >= '45' && babyCupboardSepContents.kpi1 < '477.6')?'green':(babyCupboardSepContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi2 == null)?'grey-2':(babyCupboardSepContents.kpi2 >= '0' && babyCupboardSepContents.kpi2 <= '27')?'red':(babyCupboardSepContents.kpi2 > '27' && babyCupboardSepContents.kpi2 <= '36')?'orange':(babyCupboardSepContents.kpi2 > '36' && babyCupboardSepContents.kpi2 < '45')?'yellow-7':(babyCupboardSepContents.kpi2 >= '45' && babyCupboardSepContents.kpi2 < '488.4')?'green':(babyCupboardSepContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi3 == null)?'grey-2':(babyCupboardSepContents.kpi3 >= '0' && babyCupboardSepContents.kpi3 <= '31.25')?'red':(babyCupboardSepContents.kpi3 > '31.25' && babyCupboardSepContents.kpi3 <= '41.8')?'orange':(babyCupboardSepContents.kpi3 > '41.8' && babyCupboardSepContents.kpi3 < '52.25')?'yellow-7':(babyCupboardSepContents.kpi3 >= '52.25' && babyCupboardSepContents.kpi3 < '1048.5')?'green':(babyCupboardSepContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi4 == null)?'grey-2':(babyCupboardSepContents.kpi4 >= '0' && babyCupboardSepContents.kpi4 <= '12.45')?'red':(babyCupboardSepContents.kpi4 > '12.45' && babyCupboardSepContents.kpi4 <= '16.6')?'orange':(babyCupboardSepContents.kpi4 > '16.6' && babyCupboardSepContents.kpi4 < '20.75')?'yellow-7':(babyCupboardSepContents.kpi4 >= '20.75' && babyCupboardSepContents.kpi4 < '24.9')?'green':(babyCupboardSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi4}}
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
                              :color="(babyCupboardOctContents.kpi1 == null)?'grey-2':(babyCupboardOctContents.kpi1 >= '0' && babyCupboardOctContents.kpi1 <= '27')?'red':(babyCupboardOctContents.kpi1 > '27' && babyCupboardOctContents.kpi1 <= '36')?'orange':(babyCupboardOctContents.kpi1 > '36' && babyCupboardOctContents.kpi1 < '45')?'yellow-7':(babyCupboardOctContents.kpi1 >= '45' && babyCupboardOctContents.kpi1 < '477.6')?'green':(babyCupboardOctContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi2 == null)?'grey-2':(babyCupboardOctContents.kpi2 >= '0' && babyCupboardOctContents.kpi2 <= '27')?'red':(babyCupboardOctContents.kpi2 > '27' && babyCupboardOctContents.kpi2 <= '36')?'orange':(babyCupboardOctContents.kpi2 > '36' && babyCupboardOctContents.kpi2 < '45')?'yellow-7':(babyCupboardOctContents.kpi2 >= '45' && babyCupboardOctContents.kpi2 < '488.4')?'green':(babyCupboardOctContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi3 == null)?'grey-2':(babyCupboardOctContents.kpi3 >= '0' && babyCupboardOctContents.kpi3 <= '31.25')?'red':(babyCupboardOctContents.kpi3 > '31.25' && babyCupboardOctContents.kpi3 <= '41.8')?'orange':(babyCupboardOctContents.kpi3 > '41.8' && babyCupboardOctContents.kpi3 < '52.25')?'yellow-7':(babyCupboardOctContents.kpi3 >= '52.25' && babyCupboardOctContents.kpi3 < '1048.5')?'green':(babyCupboardOctContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi4 == null)?'grey-2':(babyCupboardOctContents.kpi4 >= '0' && babyCupboardOctContents.kpi4 <= '12.45')?'red':(babyCupboardOctContents.kpi4 > '12.45' && babyCupboardOctContents.kpi4 <= '16.6')?'orange':(babyCupboardOctContents.kpi4 > '16.6' && babyCupboardOctContents.kpi4 < '20.75')?'yellow-7':(babyCupboardOctContents.kpi4 >= '20.75' && babyCupboardOctContents.kpi4 < '24.9')?'green':(babyCupboardOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi4}}
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
                              :color="(babyCupboardNovContents.kpi1 == null)?'grey-2':(babyCupboardNovContents.kpi1 >= '0' && babyCupboardNovContents.kpi1 <= '27')?'red':(babyCupboardNovContents.kpi1 > '27' && babyCupboardNovContents.kpi1 <= '36')?'orange':(babyCupboardNovContents.kpi1 > '36' && babyCupboardNovContents.kpi1 < '45')?'yellow-7':(babyCupboardNovContents.kpi1 >= '45' && babyCupboardNovContents.kpi1 < '477.6')?'green':(babyCupboardNovContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi2 == null)?'grey-2':(babyCupboardNovContents.kpi2 >= '0' && babyCupboardNovContents.kpi2 <= '27')?'red':(babyCupboardNovContents.kpi2 > '27' && babyCupboardNovContents.kpi2 <= '36')?'orange':(babyCupboardNovContents.kpi2 > '36' && babyCupboardNovContents.kpi2 < '45')?'yellow-7':(babyCupboardNovContents.kpi2 >= '45' && babyCupboardNovContents.kpi2 < '488.4')?'green':(babyCupboardNovContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi3 == null)?'grey-2':(babyCupboardNovContents.kpi3 >= '0' && babyCupboardNovContents.kpi3 <= '31.25')?'red':(babyCupboardNovContents.kpi3 > '31.25' && babyCupboardNovContents.kpi3 <= '41.8')?'orange':(babyCupboardNovContents.kpi3 > '41.8' && babyCupboardNovContents.kpi3 < '52.25')?'yellow-7':(babyCupboardNovContents.kpi3 >= '52.25' && babyCupboardNovContents.kpi3 < '1048.5')?'green':(babyCupboardNovContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi4 == null)?'grey-2':(babyCupboardNovContents.kpi4 >= '0' && babyCupboardNovContents.kpi4 <= '12.45')?'red':(babyCupboardNovContents.kpi4 > '12.45' && babyCupboardNovContents.kpi4 <= '16.6')?'orange':(babyCupboardNovContents.kpi4 > '16.6' && babyCupboardNovContents.kpi4 < '20.75')?'yellow-7':(babyCupboardNovContents.kpi4 >= '20.75' && babyCupboardNovContents.kpi4 < '24.9')?'green':(babyCupboardNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi4}}
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
                              :color="(babyCupboardDecContents.kpi1 == null)?'grey-2':(babyCupboardDecContents.kpi1 >= '0' && babyCupboardDecContents.kpi1 <= '27')?'red':(babyCupboardDecContents.kpi1 > '27' && babyCupboardDecContents.kpi1 <= '36')?'orange':(babyCupboardDecContents.kpi1 > '36' && babyCupboardDecContents.kpi1 < '45')?'yellow-7':(babyCupboardDecContents.kpi1 >= '45' && babyCupboardDecContents.kpi1 < '477.6')?'green':(babyCupboardDecContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi2 == null)?'grey-2':(babyCupboardDecContents.kpi2 >= '0' && babyCupboardDecContents.kpi2 <= '27')?'red':(babyCupboardDecContents.kpi2 > '27' && babyCupboardDecContents.kpi2 <= '36')?'orange':(babyCupboardDecContents.kpi2 > '36' && babyCupboardDecContents.kpi2 < '45')?'yellow-7':(babyCupboardDecContents.kpi2 >= '45' && babyCupboardDecContents.kpi2 < '488.4')?'green':(babyCupboardDecContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi3 == null)?'grey-2':(babyCupboardDecContents.kpi3 >= '0' && babyCupboardDecContents.kpi3 <= '31.25')?'red':(babyCupboardDecContents.kpi3 > '31.25' && babyCupboardDecContents.kpi3 <= '41.8')?'orange':(babyCupboardDecContents.kpi3 > '41.8' && babyCupboardDecContents.kpi3 < '52.25')?'yellow-7':(babyCupboardDecContents.kpi3 >= '52.25' && babyCupboardDecContents.kpi3 < '1048.5')?'green':(babyCupboardDecContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi4 == null)?'grey-2':(babyCupboardDecContents.kpi4 >= '0' && babyCupboardDecContents.kpi4 <= '12.45')?'red':(babyCupboardDecContents.kpi4 > '12.45' && babyCupboardDecContents.kpi4 <= '16.6')?'orange':(babyCupboardDecContents.kpi4 > '16.6' && babyCupboardDecContents.kpi4 < '20.75')?'yellow-7':(babyCupboardDecContents.kpi4 >= '20.75' && babyCupboardDecContents.kpi4 < '24.9')?'green':(babyCupboardDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi4}}
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
                              :color="(babyCupboardJanContents.kpi1 == null)?'grey-2':(babyCupboardJanContents.kpi1 >= '0' && babyCupboardJanContents.kpi1 <= '27')?'red':(babyCupboardJanContents.kpi1 > '27' && babyCupboardJanContents.kpi1 <= '36')?'orange':(babyCupboardJanContents.kpi1 > '36' && babyCupboardJanContents.kpi1 < '45')?'yellow-7':(babyCupboardJanContents.kpi1 >= '45' && babyCupboardJanContents.kpi1 < '477.6')?'green':(babyCupboardJanContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi2 == null)?'grey-2':(babyCupboardJanContents.kpi2 >= '0' && babyCupboardJanContents.kpi2 <= '27')?'red':(babyCupboardJanContents.kpi2 > '27' && babyCupboardJanContents.kpi2 <= '36')?'orange':(babyCupboardJanContents.kpi2 > '36' && babyCupboardJanContents.kpi2 < '45')?'yellow-7':(babyCupboardJanContents.kpi2 >= '45' && babyCupboardJanContents.kpi2 < '488.4')?'green':(babyCupboardJanContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi3 == null)?'grey-2':(babyCupboardJanContents.kpi3 >= '0' && babyCupboardJanContents.kpi3 <= '31.25')?'red':(babyCupboardJanContents.kpi3 > '31.25' && babyCupboardJanContents.kpi3 <= '41.8')?'orange':(babyCupboardJanContents.kpi3 > '41.8' && babyCupboardJanContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJanContents.kpi3 >= '52.25' && babyCupboardJanContents.kpi3 < '1048.5')?'green':(babyCupboardJanContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi4 == null)?'grey-2':(babyCupboardJanContents.kpi4 >= '0' && babyCupboardJanContents.kpi4 <= '12.45')?'red':(babyCupboardJanContents.kpi4 > '12.45' && babyCupboardJanContents.kpi4 <= '16.6')?'orange':(babyCupboardJanContents.kpi4 > '16.6' && babyCupboardJanContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJanContents.kpi4 >= '20.75' && babyCupboardJanContents.kpi4 < '24.9')?'green':(babyCupboardJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi4}}
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
                              :color="(babyCupboardFebContents.kpi1 == null)?'grey-2':(babyCupboardFebContents.kpi1 >= '0' && babyCupboardFebContents.kpi1 <= '27')?'red':(babyCupboardFebContents.kpi1 > '27' && babyCupboardFebContents.kpi1 <= '36')?'orange':(babyCupboardFebContents.kpi1 > '36' && babyCupboardFebContents.kpi1 < '45')?'yellow-7':(babyCupboardFebContents.kpi1 >= '45' && babyCupboardFebContents.kpi1 < '477.6')?'green':(babyCupboardFebContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi2 == null)?'grey-2':(babyCupboardFebContents.kpi2 >= '0' && babyCupboardFebContents.kpi2 <= '27')?'red':(babyCupboardFebContents.kpi2 > '27' && babyCupboardFebContents.kpi2 <= '36')?'orange':(babyCupboardFebContents.kpi2 > '36' && babyCupboardFebContents.kpi2 < '45')?'yellow-7':(babyCupboardFebContents.kpi2 >= '45' && babyCupboardFebContents.kpi2 < '488.4')?'green':(babyCupboardFebContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi3 == null)?'grey-2':(babyCupboardFebContents.kpi3 >= '0' && babyCupboardFebContents.kpi3 <= '31.25')?'red':(babyCupboardFebContents.kpi3 > '31.25' && babyCupboardFebContents.kpi3 <= '41.8')?'orange':(babyCupboardFebContents.kpi3 > '41.8' && babyCupboardFebContents.kpi3 < '52.25')?'yellow-7':(babyCupboardFebContents.kpi3 >= '52.25' && babyCupboardFebContents.kpi3 < '1048.5')?'green':(babyCupboardFebContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi4 == null)?'grey-2':(babyCupboardFebContents.kpi4 >= '0' && babyCupboardFebContents.kpi4 <= '12.45')?'red':(babyCupboardFebContents.kpi4 > '12.45' && babyCupboardFebContents.kpi4 <= '16.6')?'orange':(babyCupboardFebContents.kpi4 > '16.6' && babyCupboardFebContents.kpi4 < '20.75')?'yellow-7':(babyCupboardFebContents.kpi4 >= '20.75' && babyCupboardFebContents.kpi4 < '24.9')?'green':(babyCupboardFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi4}}
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
                              :color="(babyCupboardMarContents.kpi1 == null)?'grey-2':(babyCupboardMarContents.kpi1 >= '0' && babyCupboardMarContents.kpi1 <= '27')?'red':(babyCupboardMarContents.kpi1 > '27' && babyCupboardMarContents.kpi1 <= '36')?'orange':(babyCupboardMarContents.kpi1 > '36' && babyCupboardMarContents.kpi1 < '45')?'yellow-7':(babyCupboardMarContents.kpi1 >= '45' && babyCupboardMarContents.kpi1 < '477.6')?'green':(babyCupboardMarContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi2 == null)?'grey-2':(babyCupboardMarContents.kpi2 >= '0' && babyCupboardMarContents.kpi2 <= '27')?'red':(babyCupboardMarContents.kpi2 > '27' && babyCupboardMarContents.kpi2 <= '36')?'orange':(babyCupboardMarContents.kpi2 > '36' && babyCupboardMarContents.kpi2 < '45')?'yellow-7':(babyCupboardMarContents.kpi2 >= '45' && babyCupboardMarContents.kpi2 < '488.4')?'green':(babyCupboardMarContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi3 == null)?'grey-2':(babyCupboardMarContents.kpi3 >= '0' && babyCupboardMarContents.kpi3 <= '31.25')?'red':(babyCupboardMarContents.kpi3 > '31.25' && babyCupboardMarContents.kpi3 <= '41.8')?'orange':(babyCupboardMarContents.kpi3 > '41.8' && babyCupboardMarContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMarContents.kpi3 >= '52.25' && babyCupboardMarContents.kpi3 < '1048.5')?'green':(babyCupboardMarContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi4 == null)?'grey-2':(babyCupboardMarContents.kpi4 >= '0' && babyCupboardMarContents.kpi4 <= '12.45')?'red':(babyCupboardMarContents.kpi4 > '12.45' && babyCupboardMarContents.kpi4 <= '16.6')?'orange':(babyCupboardMarContents.kpi4 > '16.6' && babyCupboardMarContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMarContents.kpi4 >= '20.75' && babyCupboardMarContents.kpi4 < '24.9')?'green':(babyCupboardMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi4}}
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
                              :color="(babyCupboardAprContents.kpi1 == null)?'grey-2':(babyCupboardAprContents.kpi1 >= '0' && babyCupboardAprContents.kpi1 <= '27')?'red':(babyCupboardAprContents.kpi1 > '27' && babyCupboardAprContents.kpi1 <= '36')?'orange':(babyCupboardAprContents.kpi1 > '36' && babyCupboardAprContents.kpi1 < '45')?'yellow-7':(babyCupboardAprContents.kpi1 >= '45' && babyCupboardAprContents.kpi1 < '477.6')?'green':(babyCupboardAprContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi2 == null)?'grey-2':(babyCupboardAprContents.kpi2 >= '0' && babyCupboardAprContents.kpi2 <= '27')?'red':(babyCupboardAprContents.kpi2 > '27' && babyCupboardAprContents.kpi2 <= '36')?'orange':(babyCupboardAprContents.kpi2 > '36' && babyCupboardAprContents.kpi2 < '45')?'yellow-7':(babyCupboardAprContents.kpi2 >= '45' && babyCupboardAprContents.kpi2 < '488.4')?'green':(babyCupboardAprContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi3 == null)?'grey-2':(babyCupboardAprContents.kpi3 >= '0' && babyCupboardAprContents.kpi3 <= '31.25')?'red':(babyCupboardAprContents.kpi3 > '31.25' && babyCupboardAprContents.kpi3 <= '41.8')?'orange':(babyCupboardAprContents.kpi3 > '41.8' && babyCupboardAprContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAprContents.kpi3 >= '52.25' && babyCupboardAprContents.kpi3 < '1048.5')?'green':(babyCupboardAprContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi4 == null)?'grey-2':(babyCupboardAprContents.kpi4 >= '0' && babyCupboardAprContents.kpi4 <= '12.45')?'red':(babyCupboardAprContents.kpi4 > '12.45' && babyCupboardAprContents.kpi4 <= '16.6')?'orange':(babyCupboardAprContents.kpi4 > '16.6' && babyCupboardAprContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAprContents.kpi4 >= '20.75' && babyCupboardAprContents.kpi4 < '24.9')?'green':(babyCupboardAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi4}}
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
                              :color="(babyCupboardMayContents.kpi1 == null)?'grey-2':(babyCupboardMayContents.kpi1 >= '0' && babyCupboardMayContents.kpi1 <= '27')?'red':(babyCupboardMayContents.kpi1 > '27' && babyCupboardMayContents.kpi1 <= '36')?'orange':(babyCupboardMayContents.kpi1 > '36' && babyCupboardMayContents.kpi1 < '45')?'yellow-7':(babyCupboardMayContents.kpi1 >= '45' && babyCupboardMayContents.kpi1 < '477.6')?'green':(babyCupboardMayContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi2 == null)?'grey-2':(babyCupboardMayContents.kpi2 >= '0' && babyCupboardMayContents.kpi2 <= '27')?'red':(babyCupboardMayContents.kpi2 > '27' && babyCupboardMayContents.kpi2 <= '36')?'orange':(babyCupboardMayContents.kpi2 > '36' && babyCupboardMayContents.kpi2 < '45')?'yellow-7':(babyCupboardMayContents.kpi2 >= '45' && babyCupboardMayContents.kpi2 < '488.4')?'green':(babyCupboardMayContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi3 == null)?'grey-2':(babyCupboardMayContents.kpi3 >= '0' && babyCupboardMayContents.kpi3 <= '31.25')?'red':(babyCupboardMayContents.kpi3 > '31.25' && babyCupboardMayContents.kpi3 <= '41.8')?'orange':(babyCupboardMayContents.kpi3 > '41.8' && babyCupboardMayContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMayContents.kpi3 >= '52.25' && babyCupboardMayContents.kpi3 < '1048.5')?'green':(babyCupboardMayContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi4 == null)?'grey-2':(babyCupboardMayContents.kpi4 >= '0' && babyCupboardMayContents.kpi4 <= '12.45')?'red':(babyCupboardMayContents.kpi4 > '12.45' && babyCupboardMayContents.kpi4 <= '16.6')?'orange':(babyCupboardMayContents.kpi4 > '16.6' && babyCupboardMayContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMayContents.kpi4 >= '20.75' && babyCupboardMayContents.kpi4 < '24.9')?'green':(babyCupboardMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi4}}
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
                              :color="(babyCupboardJunContents.kpi1 == null)?'grey-2':(babyCupboardJunContents.kpi1 >= '0' && babyCupboardJunContents.kpi1 <= '27')?'red':(babyCupboardJunContents.kpi1 > '27' && babyCupboardJunContents.kpi1 <= '36')?'orange':(babyCupboardJunContents.kpi1 > '36' && babyCupboardJunContents.kpi1 < '45')?'yellow-7':(babyCupboardJunContents.kpi1 >= '45' && babyCupboardJunContents.kpi1 < '477.6')?'green':(babyCupboardJunContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi2 == null)?'grey-2':(babyCupboardJunContents.kpi2 >= '0' && babyCupboardJunContents.kpi2 <= '27')?'red':(babyCupboardJunContents.kpi2 > '27' && babyCupboardJunContents.kpi2 <= '36')?'orange':(babyCupboardJunContents.kpi2 > '36' && babyCupboardJunContents.kpi2 < '45')?'yellow-7':(babyCupboardJunContents.kpi2 >= '45' && babyCupboardJunContents.kpi2 < '488.4')?'green':(babyCupboardJunContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi3 == null)?'grey-2':(babyCupboardJunContents.kpi3 >= '0' && babyCupboardJunContents.kpi3 <= '31.25')?'red':(babyCupboardJunContents.kpi3 > '31.25' && babyCupboardJunContents.kpi3 <= '41.8')?'orange':(babyCupboardJunContents.kpi3 > '41.8' && babyCupboardJunContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJunContents.kpi3 >= '52.25' && babyCupboardJunContents.kpi3 < '1048.5')?'green':(babyCupboardJunContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi4 == null)?'grey-2':(babyCupboardJunContents.kpi4 >= '0' && babyCupboardJunContents.kpi4 <= '12.45')?'red':(babyCupboardJunContents.kpi4 > '12.45' && babyCupboardJunContents.kpi4 <= '16.6')?'orange':(babyCupboardJunContents.kpi4 > '16.6' && babyCupboardJunContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJunContents.kpi4 >= '20.75' && babyCupboardJunContents.kpi4 < '24.9')?'green':(babyCupboardJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi4}}
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
                              :color="(babyCupboardJulContents.kpi1 == null)?'grey-2':(babyCupboardJulContents.kpi1 >= '0' && babyCupboardJulContents.kpi1 <= '27')?'red':(babyCupboardJulContents.kpi1 > '27' && babyCupboardJulContents.kpi1 <= '36')?'orange':(babyCupboardJulContents.kpi1 > '36' && babyCupboardJulContents.kpi1 < '45')?'yellow-7':(babyCupboardJulContents.kpi1 >= '45' && babyCupboardJulContents.kpi1 < '477.6')?'green':(babyCupboardJulContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi2 == null)?'grey-2':(babyCupboardJulContents.kpi2 >= '0' && babyCupboardJulContents.kpi2 <= '27')?'red':(babyCupboardJulContents.kpi2 > '27' && babyCupboardJulContents.kpi2 <= '36')?'orange':(babyCupboardJulContents.kpi2 > '36' && babyCupboardJulContents.kpi2 < '45')?'yellow-7':(babyCupboardJulContents.kpi2 >= '45' && babyCupboardJulContents.kpi2 < '488.4')?'green':(babyCupboardJulContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi3 == null)?'grey-2':(babyCupboardJulContents.kpi3 >= '0' && babyCupboardJulContents.kpi3 <= '31.25')?'red':(babyCupboardJulContents.kpi3 > '31.25' && babyCupboardJulContents.kpi3 <= '41.8')?'orange':(babyCupboardJulContents.kpi3 > '41.8' && babyCupboardJulContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJulContents.kpi3 >= '52.25' && babyCupboardJulContents.kpi3 < '1048.5')?'green':(babyCupboardJulContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi4 == null)?'grey-2':(babyCupboardJulContents.kpi4 >= '0' && babyCupboardJulContents.kpi4 <= '12.45')?'red':(babyCupboardJulContents.kpi4 > '12.45' && babyCupboardJulContents.kpi4 <= '16.6')?'orange':(babyCupboardJulContents.kpi4 > '16.6' && babyCupboardJulContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJulContents.kpi4 >= '20.75' && babyCupboardJulContents.kpi4 < '24.9')?'green':(babyCupboardJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi4}}
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
                              :color="(babyCupboardAugContents.kpi1 == null)?'grey-2':(babyCupboardAugContents.kpi1 >= '0' && babyCupboardAugContents.kpi1 <= '27')?'red':(babyCupboardAugContents.kpi1 > '27' && babyCupboardAugContents.kpi1 <= '36')?'orange':(babyCupboardAugContents.kpi1 > '36' && babyCupboardAugContents.kpi1 < '45')?'yellow-7':(babyCupboardAugContents.kpi1 >= '45' && babyCupboardAugContents.kpi1 < '477.6')?'green':(babyCupboardAugContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi2 == null)?'grey-2':(babyCupboardAugContents.kpi2 >= '0' && babyCupboardAugContents.kpi2 <= '27')?'red':(babyCupboardAugContents.kpi2 > '27' && babyCupboardAugContents.kpi2 <= '36')?'orange':(babyCupboardAugContents.kpi2 > '36' && babyCupboardAugContents.kpi2 < '45')?'yellow-7':(babyCupboardAugContents.kpi2 >= '45' && babyCupboardAugContents.kpi2 < '488.4')?'green':(babyCupboardAugContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi3 == null)?'grey-2':(babyCupboardAugContents.kpi3 >= '0' && babyCupboardAugContents.kpi3 <= '31.25')?'red':(babyCupboardAugContents.kpi3 > '31.25' && babyCupboardAugContents.kpi3 <= '41.8')?'orange':(babyCupboardAugContents.kpi3 > '41.8' && babyCupboardAugContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAugContents.kpi3 >= '52.25' && babyCupboardAugContents.kpi3 < '1048.5')?'green':(babyCupboardAugContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi4 == null)?'grey-2':(babyCupboardAugContents.kpi4 >= '0' && babyCupboardAugContents.kpi4 <= '12.45')?'red':(babyCupboardAugContents.kpi4 > '12.45' && babyCupboardAugContents.kpi4 <= '16.6')?'orange':(babyCupboardAugContents.kpi4 > '16.6' && babyCupboardAugContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAugContents.kpi4 >= '20.75' && babyCupboardAugContents.kpi4 < '24.9')?'green':(babyCupboardAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi4}}
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
                              :color="(babyCupboardSepContents.kpi1 == null)?'grey-2':(babyCupboardSepContents.kpi1 >= '0' && babyCupboardSepContents.kpi1 <= '27')?'red':(babyCupboardSepContents.kpi1 > '27' && babyCupboardSepContents.kpi1 <= '36')?'orange':(babyCupboardSepContents.kpi1 > '36' && babyCupboardSepContents.kpi1 < '45')?'yellow-7':(babyCupboardSepContents.kpi1 >= '45' && babyCupboardSepContents.kpi1 < '477.6')?'green':(babyCupboardSepContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi2 == null)?'grey-2':(babyCupboardSepContents.kpi2 >= '0' && babyCupboardSepContents.kpi2 <= '27')?'red':(babyCupboardSepContents.kpi2 > '27' && babyCupboardSepContents.kpi2 <= '36')?'orange':(babyCupboardSepContents.kpi2 > '36' && babyCupboardSepContents.kpi2 < '45')?'yellow-7':(babyCupboardSepContents.kpi2 >= '45' && babyCupboardSepContents.kpi2 < '488.4')?'green':(babyCupboardSepContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi3 == null)?'grey-2':(babyCupboardSepContents.kpi3 >= '0' && babyCupboardSepContents.kpi3 <= '31.25')?'red':(babyCupboardSepContents.kpi3 > '31.25' && babyCupboardSepContents.kpi3 <= '41.8')?'orange':(babyCupboardSepContents.kpi3 > '41.8' && babyCupboardSepContents.kpi3 < '52.25')?'yellow-7':(babyCupboardSepContents.kpi3 >= '52.25' && babyCupboardSepContents.kpi3 < '1048.5')?'green':(babyCupboardSepContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi4 == null)?'grey-2':(babyCupboardSepContents.kpi4 >= '0' && babyCupboardSepContents.kpi4 <= '12.45')?'red':(babyCupboardSepContents.kpi4 > '12.45' && babyCupboardSepContents.kpi4 <= '16.6')?'orange':(babyCupboardSepContents.kpi4 > '16.6' && babyCupboardSepContents.kpi4 < '20.75')?'yellow-7':(babyCupboardSepContents.kpi4 >= '20.75' && babyCupboardSepContents.kpi4 < '24.9')?'green':(babyCupboardSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi4}}
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
                              :color="(babyCupboardOctContents.kpi1 == null)?'grey-2':(babyCupboardOctContents.kpi1 >= '0' && babyCupboardOctContents.kpi1 <= '27')?'red':(babyCupboardOctContents.kpi1 > '27' && babyCupboardOctContents.kpi1 <= '36')?'orange':(babyCupboardOctContents.kpi1 > '36' && babyCupboardOctContents.kpi1 < '45')?'yellow-7':(babyCupboardOctContents.kpi1 >= '45' && babyCupboardOctContents.kpi1 < '477.6')?'green':(babyCupboardOctContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi2 == null)?'grey-2':(babyCupboardOctContents.kpi2 >= '0' && babyCupboardOctContents.kpi2 <= '27')?'red':(babyCupboardOctContents.kpi2 > '27' && babyCupboardOctContents.kpi2 <= '36')?'orange':(babyCupboardOctContents.kpi2 > '36' && babyCupboardOctContents.kpi2 < '45')?'yellow-7':(babyCupboardOctContents.kpi2 >= '45' && babyCupboardOctContents.kpi2 < '488.4')?'green':(babyCupboardOctContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi3 == null)?'grey-2':(babyCupboardOctContents.kpi3 >= '0' && babyCupboardOctContents.kpi3 <= '31.25')?'red':(babyCupboardOctContents.kpi3 > '31.25' && babyCupboardOctContents.kpi3 <= '41.8')?'orange':(babyCupboardOctContents.kpi3 > '41.8' && babyCupboardOctContents.kpi3 < '52.25')?'yellow-7':(babyCupboardOctContents.kpi3 >= '52.25' && babyCupboardOctContents.kpi3 < '1048.5')?'green':(babyCupboardOctContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi4 == null)?'grey-2':(babyCupboardOctContents.kpi4 >= '0' && babyCupboardOctContents.kpi4 <= '12.45')?'red':(babyCupboardOctContents.kpi4 > '12.45' && babyCupboardOctContents.kpi4 <= '16.6')?'orange':(babyCupboardOctContents.kpi4 > '16.6' && babyCupboardOctContents.kpi4 < '20.75')?'yellow-7':(babyCupboardOctContents.kpi4 >= '20.75' && babyCupboardOctContents.kpi4 < '24.9')?'green':(babyCupboardOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi4}}
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
                              :color="(babyCupboardNovContents.kpi1 == null)?'grey-2':(babyCupboardNovContents.kpi1 >= '0' && babyCupboardNovContents.kpi1 <= '27')?'red':(babyCupboardNovContents.kpi1 > '27' && babyCupboardNovContents.kpi1 <= '36')?'orange':(babyCupboardNovContents.kpi1 > '36' && babyCupboardNovContents.kpi1 < '45')?'yellow-7':(babyCupboardNovContents.kpi1 >= '45' && babyCupboardNovContents.kpi1 < '477.6')?'green':(babyCupboardNovContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi2 == null)?'grey-2':(babyCupboardNovContents.kpi2 >= '0' && babyCupboardNovContents.kpi2 <= '27')?'red':(babyCupboardNovContents.kpi2 > '27' && babyCupboardNovContents.kpi2 <= '36')?'orange':(babyCupboardNovContents.kpi2 > '36' && babyCupboardNovContents.kpi2 < '45')?'yellow-7':(babyCupboardNovContents.kpi2 >= '45' && babyCupboardNovContents.kpi2 < '488.4')?'green':(babyCupboardNovContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi3 == null)?'grey-2':(babyCupboardNovContents.kpi3 >= '0' && babyCupboardNovContents.kpi3 <= '31.25')?'red':(babyCupboardNovContents.kpi3 > '31.25' && babyCupboardNovContents.kpi3 <= '41.8')?'orange':(babyCupboardNovContents.kpi3 > '41.8' && babyCupboardNovContents.kpi3 < '52.25')?'yellow-7':(babyCupboardNovContents.kpi3 >= '52.25' && babyCupboardNovContents.kpi3 < '1048.5')?'green':(babyCupboardNovContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi4 == null)?'grey-2':(babyCupboardNovContents.kpi4 >= '0' && babyCupboardNovContents.kpi4 <= '12.45')?'red':(babyCupboardNovContents.kpi4 > '12.45' && babyCupboardNovContents.kpi4 <= '16.6')?'orange':(babyCupboardNovContents.kpi4 > '16.6' && babyCupboardNovContents.kpi4 < '20.75')?'yellow-7':(babyCupboardNovContents.kpi4 >= '20.75' && babyCupboardNovContents.kpi4 < '24.9')?'green':(babyCupboardNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi4}}
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
                              :color="(babyCupboardDecContents.kpi1 == null)?'grey-2':(babyCupboardDecContents.kpi1 >= '0' && babyCupboardDecContents.kpi1 <= '27')?'red':(babyCupboardDecContents.kpi1 > '27' && babyCupboardDecContents.kpi1 <= '36')?'orange':(babyCupboardDecContents.kpi1 > '36' && babyCupboardDecContents.kpi1 < '45')?'yellow-7':(babyCupboardDecContents.kpi1 >= '45' && babyCupboardDecContents.kpi1 < '477.6')?'green':(babyCupboardDecContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi2 == null)?'grey-2':(babyCupboardDecContents.kpi2 >= '0' && babyCupboardDecContents.kpi2 <= '27')?'red':(babyCupboardDecContents.kpi2 > '27' && babyCupboardDecContents.kpi2 <= '36')?'orange':(babyCupboardDecContents.kpi2 > '36' && babyCupboardDecContents.kpi2 < '45')?'yellow-7':(babyCupboardDecContents.kpi2 >= '45' && babyCupboardDecContents.kpi2 < '488.4')?'green':(babyCupboardDecContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi3 == null)?'grey-2':(babyCupboardDecContents.kpi3 >= '0' && babyCupboardDecContents.kpi3 <= '31.25')?'red':(babyCupboardDecContents.kpi3 > '31.25' && babyCupboardDecContents.kpi3 <= '41.8')?'orange':(babyCupboardDecContents.kpi3 > '41.8' && babyCupboardDecContents.kpi3 < '52.25')?'yellow-7':(babyCupboardDecContents.kpi3 >= '52.25' && babyCupboardDecContents.kpi3 < '1048.5')?'green':(babyCupboardDecContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi4 == null)?'grey-2':(babyCupboardDecContents.kpi4 >= '0' && babyCupboardDecContents.kpi4 <= '12.45')?'red':(babyCupboardDecContents.kpi4 > '12.45' && babyCupboardDecContents.kpi4 <= '16.6')?'orange':(babyCupboardDecContents.kpi4 > '16.6' && babyCupboardDecContents.kpi4 < '20.75')?'yellow-7':(babyCupboardDecContents.kpi4 >= '20.75' && babyCupboardDecContents.kpi4 < '24.9')?'green':(babyCupboardDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi4}}
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
                              :color="(babyCupboardJanContents.kpi1 == null)?'grey-2':(babyCupboardJanContents.kpi1 >= '0' && babyCupboardJanContents.kpi1 <= '27')?'red':(babyCupboardJanContents.kpi1 > '27' && babyCupboardJanContents.kpi1 <= '36')?'orange':(babyCupboardJanContents.kpi1 > '36' && babyCupboardJanContents.kpi1 < '45')?'yellow-7':(babyCupboardJanContents.kpi1 >= '45' && babyCupboardJanContents.kpi1 < '477.6')?'green':(babyCupboardJanContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi2 == null)?'grey-2':(babyCupboardJanContents.kpi2 >= '0' && babyCupboardJanContents.kpi2 <= '27')?'red':(babyCupboardJanContents.kpi2 > '27' && babyCupboardJanContents.kpi2 <= '36')?'orange':(babyCupboardJanContents.kpi2 > '36' && babyCupboardJanContents.kpi2 < '45')?'yellow-7':(babyCupboardJanContents.kpi2 >= '45' && babyCupboardJanContents.kpi2 < '488.4')?'green':(babyCupboardJanContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi3 == null)?'grey-2':(babyCupboardJanContents.kpi3 >= '0' && babyCupboardJanContents.kpi3 <= '31.25')?'red':(babyCupboardJanContents.kpi3 > '31.25' && babyCupboardJanContents.kpi3 <= '41.8')?'orange':(babyCupboardJanContents.kpi3 > '41.8' && babyCupboardJanContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJanContents.kpi3 >= '52.25' && babyCupboardJanContents.kpi3 < '1048.5')?'green':(babyCupboardJanContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi4 == null)?'grey-2':(babyCupboardJanContents.kpi4 >= '0' && babyCupboardJanContents.kpi4 <= '12.45')?'red':(babyCupboardJanContents.kpi4 > '12.45' && babyCupboardJanContents.kpi4 <= '16.6')?'orange':(babyCupboardJanContents.kpi4 > '16.6' && babyCupboardJanContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJanContents.kpi4 >= '20.75' && babyCupboardJanContents.kpi4 < '24.9')?'green':(babyCupboardJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi4}}
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
                              :color="(babyCupboardFebContents.kpi1 == null)?'grey-2':(babyCupboardFebContents.kpi1 >= '0' && babyCupboardFebContents.kpi1 <= '27')?'red':(babyCupboardFebContents.kpi1 > '27' && babyCupboardFebContents.kpi1 <= '36')?'orange':(babyCupboardFebContents.kpi1 > '36' && babyCupboardFebContents.kpi1 < '45')?'yellow-7':(babyCupboardFebContents.kpi1 >= '45' && babyCupboardFebContents.kpi1 < '477.6')?'green':(babyCupboardFebContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi2 == null)?'grey-2':(babyCupboardFebContents.kpi2 >= '0' && babyCupboardFebContents.kpi2 <= '27')?'red':(babyCupboardFebContents.kpi2 > '27' && babyCupboardFebContents.kpi2 <= '36')?'orange':(babyCupboardFebContents.kpi2 > '36' && babyCupboardFebContents.kpi2 < '45')?'yellow-7':(babyCupboardFebContents.kpi2 >= '45' && babyCupboardFebContents.kpi2 < '488.4')?'green':(babyCupboardFebContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi3 == null)?'grey-2':(babyCupboardFebContents.kpi3 >= '0' && babyCupboardFebContents.kpi3 <= '31.25')?'red':(babyCupboardFebContents.kpi3 > '31.25' && babyCupboardFebContents.kpi3 <= '41.8')?'orange':(babyCupboardFebContents.kpi3 > '41.8' && babyCupboardFebContents.kpi3 < '52.25')?'yellow-7':(babyCupboardFebContents.kpi3 >= '52.25' && babyCupboardFebContents.kpi3 < '1048.5')?'green':(babyCupboardFebContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi4 == null)?'grey-2':(babyCupboardFebContents.kpi4 >= '0' && babyCupboardFebContents.kpi4 <= '12.45')?'red':(babyCupboardFebContents.kpi4 > '12.45' && babyCupboardFebContents.kpi4 <= '16.6')?'orange':(babyCupboardFebContents.kpi4 > '16.6' && babyCupboardFebContents.kpi4 < '20.75')?'yellow-7':(babyCupboardFebContents.kpi4 >= '20.75' && babyCupboardFebContents.kpi4 < '24.9')?'green':(babyCupboardFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi4}}
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
                              :color="(babyCupboardMarContents.kpi1 == null)?'grey-2':(babyCupboardMarContents.kpi1 >= '0' && babyCupboardMarContents.kpi1 <= '27')?'red':(babyCupboardMarContents.kpi1 > '27' && babyCupboardMarContents.kpi1 <= '36')?'orange':(babyCupboardMarContents.kpi1 > '36' && babyCupboardMarContents.kpi1 < '45')?'yellow-7':(babyCupboardMarContents.kpi1 >= '45' && babyCupboardMarContents.kpi1 < '477.6')?'green':(babyCupboardMarContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi2 == null)?'grey-2':(babyCupboardMarContents.kpi2 >= '0' && babyCupboardMarContents.kpi2 <= '27')?'red':(babyCupboardMarContents.kpi2 > '27' && babyCupboardMarContents.kpi2 <= '36')?'orange':(babyCupboardMarContents.kpi2 > '36' && babyCupboardMarContents.kpi2 < '45')?'yellow-7':(babyCupboardMarContents.kpi2 >= '45' && babyCupboardMarContents.kpi2 < '488.4')?'green':(babyCupboardMarContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi3 == null)?'grey-2':(babyCupboardMarContents.kpi3 >= '0' && babyCupboardMarContents.kpi3 <= '31.25')?'red':(babyCupboardMarContents.kpi3 > '31.25' && babyCupboardMarContents.kpi3 <= '41.8')?'orange':(babyCupboardMarContents.kpi3 > '41.8' && babyCupboardMarContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMarContents.kpi3 >= '52.25' && babyCupboardMarContents.kpi3 < '1048.5')?'green':(babyCupboardMarContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi4 == null)?'grey-2':(babyCupboardMarContents.kpi4 >= '0' && babyCupboardMarContents.kpi4 <= '12.45')?'red':(babyCupboardMarContents.kpi4 > '12.45' && babyCupboardMarContents.kpi4 <= '16.6')?'orange':(babyCupboardMarContents.kpi4 > '16.6' && babyCupboardMarContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMarContents.kpi4 >= '20.75' && babyCupboardMarContents.kpi4 < '24.9')?'green':(babyCupboardMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi4}}
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
                              :color="(babyCupboardAprContents.kpi1 == null)?'grey-2':(babyCupboardAprContents.kpi1 >= '0' && babyCupboardAprContents.kpi1 <= '27')?'red':(babyCupboardAprContents.kpi1 > '27' && babyCupboardAprContents.kpi1 <= '36')?'orange':(babyCupboardAprContents.kpi1 > '36' && babyCupboardAprContents.kpi1 < '45')?'yellow-7':(babyCupboardAprContents.kpi1 >= '45' && babyCupboardAprContents.kpi1 < '477.6')?'green':(babyCupboardAprContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi2 == null)?'grey-2':(babyCupboardAprContents.kpi2 >= '0' && babyCupboardAprContents.kpi2 <= '27')?'red':(babyCupboardAprContents.kpi2 > '27' && babyCupboardAprContents.kpi2 <= '36')?'orange':(babyCupboardAprContents.kpi2 > '36' && babyCupboardAprContents.kpi2 < '45')?'yellow-7':(babyCupboardAprContents.kpi2 >= '45' && babyCupboardAprContents.kpi2 < '488.4')?'green':(babyCupboardAprContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi3 == null)?'grey-2':(babyCupboardAprContents.kpi3 >= '0' && babyCupboardAprContents.kpi3 <= '31.25')?'red':(babyCupboardAprContents.kpi3 > '31.25' && babyCupboardAprContents.kpi3 <= '41.8')?'orange':(babyCupboardAprContents.kpi3 > '41.8' && babyCupboardAprContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAprContents.kpi3 >= '52.25' && babyCupboardAprContents.kpi3 < '1048.5')?'green':(babyCupboardAprContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi4 == null)?'grey-2':(babyCupboardAprContents.kpi4 >= '0' && babyCupboardAprContents.kpi4 <= '12.45')?'red':(babyCupboardAprContents.kpi4 > '12.45' && babyCupboardAprContents.kpi4 <= '16.6')?'orange':(babyCupboardAprContents.kpi4 > '16.6' && babyCupboardAprContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAprContents.kpi4 >= '20.75' && babyCupboardAprContents.kpi4 < '24.9')?'green':(babyCupboardAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi4}}
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
                              :color="(babyCupboardMayContents.kpi1 == null)?'grey-2':(babyCupboardMayContents.kpi1 >= '0' && babyCupboardMayContents.kpi1 <= '27')?'red':(babyCupboardMayContents.kpi1 > '27' && babyCupboardMayContents.kpi1 <= '36')?'orange':(babyCupboardMayContents.kpi1 > '36' && babyCupboardMayContents.kpi1 < '45')?'yellow-7':(babyCupboardMayContents.kpi1 >= '45' && babyCupboardMayContents.kpi1 < '477.6')?'green':(babyCupboardMayContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi2 == null)?'grey-2':(babyCupboardMayContents.kpi2 >= '0' && babyCupboardMayContents.kpi2 <= '27')?'red':(babyCupboardMayContents.kpi2 > '27' && babyCupboardMayContents.kpi2 <= '36')?'orange':(babyCupboardMayContents.kpi2 > '36' && babyCupboardMayContents.kpi2 < '45')?'yellow-7':(babyCupboardMayContents.kpi2 >= '45' && babyCupboardMayContents.kpi2 < '488.4')?'green':(babyCupboardMayContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi3 == null)?'grey-2':(babyCupboardMayContents.kpi3 >= '0' && babyCupboardMayContents.kpi3 <= '31.25')?'red':(babyCupboardMayContents.kpi3 > '31.25' && babyCupboardMayContents.kpi3 <= '41.8')?'orange':(babyCupboardMayContents.kpi3 > '41.8' && babyCupboardMayContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMayContents.kpi3 >= '52.25' && babyCupboardMayContents.kpi3 < '1048.5')?'green':(babyCupboardMayContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi4 == null)?'grey-2':(babyCupboardMayContents.kpi4 >= '0' && babyCupboardMayContents.kpi4 <= '12.45')?'red':(babyCupboardMayContents.kpi4 > '12.45' && babyCupboardMayContents.kpi4 <= '16.6')?'orange':(babyCupboardMayContents.kpi4 > '16.6' && babyCupboardMayContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMayContents.kpi4 >= '20.75' && babyCupboardMayContents.kpi4 < '24.9')?'green':(babyCupboardMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi4}}
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
                              :color="(babyCupboardJunContents.kpi1 == null)?'grey-2':(babyCupboardJunContents.kpi1 >= '0' && babyCupboardJunContents.kpi1 <= '27')?'red':(babyCupboardJunContents.kpi1 > '27' && babyCupboardJunContents.kpi1 <= '36')?'orange':(babyCupboardJunContents.kpi1 > '36' && babyCupboardJunContents.kpi1 < '45')?'yellow-7':(babyCupboardJunContents.kpi1 >= '45' && babyCupboardJunContents.kpi1 < '477.6')?'green':(babyCupboardJunContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi2 == null)?'grey-2':(babyCupboardJunContents.kpi2 >= '0' && babyCupboardJunContents.kpi2 <= '27')?'red':(babyCupboardJunContents.kpi2 > '27' && babyCupboardJunContents.kpi2 <= '36')?'orange':(babyCupboardJunContents.kpi2 > '36' && babyCupboardJunContents.kpi2 < '45')?'yellow-7':(babyCupboardJunContents.kpi2 >= '45' && babyCupboardJunContents.kpi2 < '488.4')?'green':(babyCupboardJunContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi3 == null)?'grey-2':(babyCupboardJunContents.kpi3 >= '0' && babyCupboardJunContents.kpi3 <= '31.25')?'red':(babyCupboardJunContents.kpi3 > '31.25' && babyCupboardJunContents.kpi3 <= '41.8')?'orange':(babyCupboardJunContents.kpi3 > '41.8' && babyCupboardJunContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJunContents.kpi3 >= '52.25' && babyCupboardJunContents.kpi3 < '1048.5')?'green':(babyCupboardJunContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi4 == null)?'grey-2':(babyCupboardJunContents.kpi4 >= '0' && babyCupboardJunContents.kpi4 <= '12.45')?'red':(babyCupboardJunContents.kpi4 > '12.45' && babyCupboardJunContents.kpi4 <= '16.6')?'orange':(babyCupboardJunContents.kpi4 > '16.6' && babyCupboardJunContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJunContents.kpi4 >= '20.75' && babyCupboardJunContents.kpi4 < '24.9')?'green':(babyCupboardJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi4}}
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
                              :color="(babyCupboardJulContents.kpi1 == null)?'grey-2':(babyCupboardJulContents.kpi1 >= '0' && babyCupboardJulContents.kpi1 <= '27')?'red':(babyCupboardJulContents.kpi1 > '27' && babyCupboardJulContents.kpi1 <= '36')?'orange':(babyCupboardJulContents.kpi1 > '36' && babyCupboardJulContents.kpi1 < '45')?'yellow-7':(babyCupboardJulContents.kpi1 >= '45' && babyCupboardJulContents.kpi1 < '477.6')?'green':(babyCupboardJulContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi2 == null)?'grey-2':(babyCupboardJulContents.kpi2 >= '0' && babyCupboardJulContents.kpi2 <= '27')?'red':(babyCupboardJulContents.kpi2 > '27' && babyCupboardJulContents.kpi2 <= '36')?'orange':(babyCupboardJulContents.kpi2 > '36' && babyCupboardJulContents.kpi2 < '45')?'yellow-7':(babyCupboardJulContents.kpi2 >= '45' && babyCupboardJulContents.kpi2 < '488.4')?'green':(babyCupboardJulContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi3 == null)?'grey-2':(babyCupboardJulContents.kpi3 >= '0' && babyCupboardJulContents.kpi3 <= '31.25')?'red':(babyCupboardJulContents.kpi3 > '31.25' && babyCupboardJulContents.kpi3 <= '41.8')?'orange':(babyCupboardJulContents.kpi3 > '41.8' && babyCupboardJulContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJulContents.kpi3 >= '52.25' && babyCupboardJulContents.kpi3 < '1048.5')?'green':(babyCupboardJulContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi4 == null)?'grey-2':(babyCupboardJulContents.kpi4 >= '0' && babyCupboardJulContents.kpi4 <= '12.45')?'red':(babyCupboardJulContents.kpi4 > '12.45' && babyCupboardJulContents.kpi4 <= '16.6')?'orange':(babyCupboardJulContents.kpi4 > '16.6' && babyCupboardJulContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJulContents.kpi4 >= '20.75' && babyCupboardJulContents.kpi4 < '24.9')?'green':(babyCupboardJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi4}}
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
                              :color="(babyCupboardAugContents.kpi1 == null)?'grey-2':(babyCupboardAugContents.kpi1 >= '0' && babyCupboardAugContents.kpi1 <= '27')?'red':(babyCupboardAugContents.kpi1 > '27' && babyCupboardAugContents.kpi1 <= '36')?'orange':(babyCupboardAugContents.kpi1 > '36' && babyCupboardAugContents.kpi1 < '45')?'yellow-7':(babyCupboardAugContents.kpi1 >= '45' && babyCupboardAugContents.kpi1 < '477.6')?'green':(babyCupboardAugContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi2 == null)?'grey-2':(babyCupboardAugContents.kpi2 >= '0' && babyCupboardAugContents.kpi2 <= '27')?'red':(babyCupboardAugContents.kpi2 > '27' && babyCupboardAugContents.kpi2 <= '36')?'orange':(babyCupboardAugContents.kpi2 > '36' && babyCupboardAugContents.kpi2 < '45')?'yellow-7':(babyCupboardAugContents.kpi2 >= '45' && babyCupboardAugContents.kpi2 < '488.4')?'green':(babyCupboardAugContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi3 == null)?'grey-2':(babyCupboardAugContents.kpi3 >= '0' && babyCupboardAugContents.kpi3 <= '31.25')?'red':(babyCupboardAugContents.kpi3 > '31.25' && babyCupboardAugContents.kpi3 <= '41.8')?'orange':(babyCupboardAugContents.kpi3 > '41.8' && babyCupboardAugContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAugContents.kpi3 >= '52.25' && babyCupboardAugContents.kpi3 < '1048.5')?'green':(babyCupboardAugContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi4 == null)?'grey-2':(babyCupboardAugContents.kpi4 >= '0' && babyCupboardAugContents.kpi4 <= '12.45')?'red':(babyCupboardAugContents.kpi4 > '12.45' && babyCupboardAugContents.kpi4 <= '16.6')?'orange':(babyCupboardAugContents.kpi4 > '16.6' && babyCupboardAugContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAugContents.kpi4 >= '20.75' && babyCupboardAugContents.kpi4 < '24.9')?'green':(babyCupboardAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi4}}
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
                              :color="(babyCupboardSepContents.kpi1 == null)?'grey-2':(babyCupboardSepContents.kpi1 >= '0' && babyCupboardSepContents.kpi1 <= '27')?'red':(babyCupboardSepContents.kpi1 > '27' && babyCupboardSepContents.kpi1 <= '36')?'orange':(babyCupboardSepContents.kpi1 > '36' && babyCupboardSepContents.kpi1 < '45')?'yellow-7':(babyCupboardSepContents.kpi1 >= '45' && babyCupboardSepContents.kpi1 < '477.6')?'green':(babyCupboardSepContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi2 == null)?'grey-2':(babyCupboardSepContents.kpi2 >= '0' && babyCupboardSepContents.kpi2 <= '27')?'red':(babyCupboardSepContents.kpi2 > '27' && babyCupboardSepContents.kpi2 <= '36')?'orange':(babyCupboardSepContents.kpi2 > '36' && babyCupboardSepContents.kpi2 < '45')?'yellow-7':(babyCupboardSepContents.kpi2 >= '45' && babyCupboardSepContents.kpi2 < '488.4')?'green':(babyCupboardSepContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi3 == null)?'grey-2':(babyCupboardSepContents.kpi3 >= '0' && babyCupboardSepContents.kpi3 <= '31.25')?'red':(babyCupboardSepContents.kpi3 > '31.25' && babyCupboardSepContents.kpi3 <= '41.8')?'orange':(babyCupboardSepContents.kpi3 > '41.8' && babyCupboardSepContents.kpi3 < '52.25')?'yellow-7':(babyCupboardSepContents.kpi3 >= '52.25' && babyCupboardSepContents.kpi3 < '1048.5')?'green':(babyCupboardSepContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi4 == null)?'grey-2':(babyCupboardSepContents.kpi4 >= '0' && babyCupboardSepContents.kpi4 <= '12.45')?'red':(babyCupboardSepContents.kpi4 > '12.45' && babyCupboardSepContents.kpi4 <= '16.6')?'orange':(babyCupboardSepContents.kpi4 > '16.6' && babyCupboardSepContents.kpi4 < '20.75')?'yellow-7':(babyCupboardSepContents.kpi4 >= '20.75' && babyCupboardSepContents.kpi4 < '24.9')?'green':(babyCupboardSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi4}}
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
                              :color="(babyCupboardOctContents.kpi1 == null)?'grey-2':(babyCupboardOctContents.kpi1 >= '0' && babyCupboardOctContents.kpi1 <= '27')?'red':(babyCupboardOctContents.kpi1 > '27' && babyCupboardOctContents.kpi1 <= '36')?'orange':(babyCupboardOctContents.kpi1 > '36' && babyCupboardOctContents.kpi1 < '45')?'yellow-7':(babyCupboardOctContents.kpi1 >= '45' && babyCupboardOctContents.kpi1 < '477.6')?'green':(babyCupboardOctContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi2 == null)?'grey-2':(babyCupboardOctContents.kpi2 >= '0' && babyCupboardOctContents.kpi2 <= '27')?'red':(babyCupboardOctContents.kpi2 > '27' && babyCupboardOctContents.kpi2 <= '36')?'orange':(babyCupboardOctContents.kpi2 > '36' && babyCupboardOctContents.kpi2 < '45')?'yellow-7':(babyCupboardOctContents.kpi2 >= '45' && babyCupboardOctContents.kpi2 < '488.4')?'green':(babyCupboardOctContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi3 == null)?'grey-2':(babyCupboardOctContents.kpi3 >= '0' && babyCupboardOctContents.kpi3 <= '31.25')?'red':(babyCupboardOctContents.kpi3 > '31.25' && babyCupboardOctContents.kpi3 <= '41.8')?'orange':(babyCupboardOctContents.kpi3 > '41.8' && babyCupboardOctContents.kpi3 < '52.25')?'yellow-7':(babyCupboardOctContents.kpi3 >= '52.25' && babyCupboardOctContents.kpi3 < '1048.5')?'green':(babyCupboardOctContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi4 == null)?'grey-2':(babyCupboardOctContents.kpi4 >= '0' && babyCupboardOctContents.kpi4 <= '12.45')?'red':(babyCupboardOctContents.kpi4 > '12.45' && babyCupboardOctContents.kpi4 <= '16.6')?'orange':(babyCupboardOctContents.kpi4 > '16.6' && babyCupboardOctContents.kpi4 < '20.75')?'yellow-7':(babyCupboardOctContents.kpi4 >= '20.75' && babyCupboardOctContents.kpi4 < '24.9')?'green':(babyCupboardOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi4}}
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
                              :color="(babyCupboardNovContents.kpi1 == null)?'grey-2':(babyCupboardNovContents.kpi1 >= '0' && babyCupboardNovContents.kpi1 <= '27')?'red':(babyCupboardNovContents.kpi1 > '27' && babyCupboardNovContents.kpi1 <= '36')?'orange':(babyCupboardNovContents.kpi1 > '36' && babyCupboardNovContents.kpi1 < '45')?'yellow-7':(babyCupboardNovContents.kpi1 >= '45' && babyCupboardNovContents.kpi1 < '477.6')?'green':(babyCupboardNovContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi2 == null)?'grey-2':(babyCupboardNovContents.kpi2 >= '0' && babyCupboardNovContents.kpi2 <= '27')?'red':(babyCupboardNovContents.kpi2 > '27' && babyCupboardNovContents.kpi2 <= '36')?'orange':(babyCupboardNovContents.kpi2 > '36' && babyCupboardNovContents.kpi2 < '45')?'yellow-7':(babyCupboardNovContents.kpi2 >= '45' && babyCupboardNovContents.kpi2 < '488.4')?'green':(babyCupboardNovContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi3 == null)?'grey-2':(babyCupboardNovContents.kpi3 >= '0' && babyCupboardNovContents.kpi3 <= '31.25')?'red':(babyCupboardNovContents.kpi3 > '31.25' && babyCupboardNovContents.kpi3 <= '41.8')?'orange':(babyCupboardNovContents.kpi3 > '41.8' && babyCupboardNovContents.kpi3 < '52.25')?'yellow-7':(babyCupboardNovContents.kpi3 >= '52.25' && babyCupboardNovContents.kpi3 < '1048.5')?'green':(babyCupboardNovContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi4 == null)?'grey-2':(babyCupboardNovContents.kpi4 >= '0' && babyCupboardNovContents.kpi4 <= '12.45')?'red':(babyCupboardNovContents.kpi4 > '12.45' && babyCupboardNovContents.kpi4 <= '16.6')?'orange':(babyCupboardNovContents.kpi4 > '16.6' && babyCupboardNovContents.kpi4 < '20.75')?'yellow-7':(babyCupboardNovContents.kpi4 >= '20.75' && babyCupboardNovContents.kpi4 < '24.9')?'green':(babyCupboardNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi4}}
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
                              :color="(babyCupboardDecContents.kpi1 == null)?'grey-2':(babyCupboardDecContents.kpi1 >= '0' && babyCupboardDecContents.kpi1 <= '27')?'red':(babyCupboardDecContents.kpi1 > '27' && babyCupboardDecContents.kpi1 <= '36')?'orange':(babyCupboardDecContents.kpi1 > '36' && babyCupboardDecContents.kpi1 < '45')?'yellow-7':(babyCupboardDecContents.kpi1 >= '45' && babyCupboardDecContents.kpi1 < '477.6')?'green':(babyCupboardDecContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi2 == null)?'grey-2':(babyCupboardDecContents.kpi2 >= '0' && babyCupboardDecContents.kpi2 <= '27')?'red':(babyCupboardDecContents.kpi2 > '27' && babyCupboardDecContents.kpi2 <= '36')?'orange':(babyCupboardDecContents.kpi2 > '36' && babyCupboardDecContents.kpi2 < '45')?'yellow-7':(babyCupboardDecContents.kpi2 >= '45' && babyCupboardDecContents.kpi2 < '488.4')?'green':(babyCupboardDecContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi3 == null)?'grey-2':(babyCupboardDecContents.kpi3 >= '0' && babyCupboardDecContents.kpi3 <= '31.25')?'red':(babyCupboardDecContents.kpi3 > '31.25' && babyCupboardDecContents.kpi3 <= '41.8')?'orange':(babyCupboardDecContents.kpi3 > '41.8' && babyCupboardDecContents.kpi3 < '52.25')?'yellow-7':(babyCupboardDecContents.kpi3 >= '52.25' && babyCupboardDecContents.kpi3 < '1048.5')?'green':(babyCupboardDecContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi4 == null)?'grey-2':(babyCupboardDecContents.kpi4 >= '0' && babyCupboardDecContents.kpi4 <= '12.45')?'red':(babyCupboardDecContents.kpi4 > '12.45' && babyCupboardDecContents.kpi4 <= '16.6')?'orange':(babyCupboardDecContents.kpi4 > '16.6' && babyCupboardDecContents.kpi4 < '20.75')?'yellow-7':(babyCupboardDecContents.kpi4 >= '20.75' && babyCupboardDecContents.kpi4 < '24.9')?'green':(babyCupboardDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi4}}
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
                              :color="(babyCupboardJanContents.kpi1 == null)?'grey-2':(babyCupboardJanContents.kpi1 >= '0' && babyCupboardJanContents.kpi1 <= '27')?'red':(babyCupboardJanContents.kpi1 > '27' && babyCupboardJanContents.kpi1 <= '36')?'orange':(babyCupboardJanContents.kpi1 > '36' && babyCupboardJanContents.kpi1 < '45')?'yellow-7':(babyCupboardJanContents.kpi1 >= '45' && babyCupboardJanContents.kpi1 < '477.6')?'green':(babyCupboardJanContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi2 == null)?'grey-2':(babyCupboardJanContents.kpi2 >= '0' && babyCupboardJanContents.kpi2 <= '27')?'red':(babyCupboardJanContents.kpi2 > '27' && babyCupboardJanContents.kpi2 <= '36')?'orange':(babyCupboardJanContents.kpi2 > '36' && babyCupboardJanContents.kpi2 < '45')?'yellow-7':(babyCupboardJanContents.kpi2 >= '45' && babyCupboardJanContents.kpi2 < '488.4')?'green':(babyCupboardJanContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi3 == null)?'grey-2':(babyCupboardJanContents.kpi3 >= '0' && babyCupboardJanContents.kpi3 <= '31.25')?'red':(babyCupboardJanContents.kpi3 > '31.25' && babyCupboardJanContents.kpi3 <= '41.8')?'orange':(babyCupboardJanContents.kpi3 > '41.8' && babyCupboardJanContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJanContents.kpi3 >= '52.25' && babyCupboardJanContents.kpi3 < '1048.5')?'green':(babyCupboardJanContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi4 == null)?'grey-2':(babyCupboardJanContents.kpi4 >= '0' && babyCupboardJanContents.kpi4 <= '12.45')?'red':(babyCupboardJanContents.kpi4 > '12.45' && babyCupboardJanContents.kpi4 <= '16.6')?'orange':(babyCupboardJanContents.kpi4 > '16.6' && babyCupboardJanContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJanContents.kpi4 >= '20.75' && babyCupboardJanContents.kpi4 < '24.9')?'green':(babyCupboardJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi4}}
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
                              :color="(babyCupboardFebContents.kpi1 == null)?'grey-2':(babyCupboardFebContents.kpi1 >= '0' && babyCupboardFebContents.kpi1 <= '27')?'red':(babyCupboardFebContents.kpi1 > '27' && babyCupboardFebContents.kpi1 <= '36')?'orange':(babyCupboardFebContents.kpi1 > '36' && babyCupboardFebContents.kpi1 < '45')?'yellow-7':(babyCupboardFebContents.kpi1 >= '45' && babyCupboardFebContents.kpi1 < '477.6')?'green':(babyCupboardFebContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi2 == null)?'grey-2':(babyCupboardFebContents.kpi2 >= '0' && babyCupboardFebContents.kpi2 <= '27')?'red':(babyCupboardFebContents.kpi2 > '27' && babyCupboardFebContents.kpi2 <= '36')?'orange':(babyCupboardFebContents.kpi2 > '36' && babyCupboardFebContents.kpi2 < '45')?'yellow-7':(babyCupboardFebContents.kpi2 >= '45' && babyCupboardFebContents.kpi2 < '488.4')?'green':(babyCupboardFebContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi3 == null)?'grey-2':(babyCupboardFebContents.kpi3 >= '0' && babyCupboardFebContents.kpi3 <= '31.25')?'red':(babyCupboardFebContents.kpi3 > '31.25' && babyCupboardFebContents.kpi3 <= '41.8')?'orange':(babyCupboardFebContents.kpi3 > '41.8' && babyCupboardFebContents.kpi3 < '52.25')?'yellow-7':(babyCupboardFebContents.kpi3 >= '52.25' && babyCupboardFebContents.kpi3 < '1048.5')?'green':(babyCupboardFebContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi4 == null)?'grey-2':(babyCupboardFebContents.kpi4 >= '0' && babyCupboardFebContents.kpi4 <= '12.45')?'red':(babyCupboardFebContents.kpi4 > '12.45' && babyCupboardFebContents.kpi4 <= '16.6')?'orange':(babyCupboardFebContents.kpi4 > '16.6' && babyCupboardFebContents.kpi4 < '20.75')?'yellow-7':(babyCupboardFebContents.kpi4 >= '20.75' && babyCupboardFebContents.kpi4 < '24.9')?'green':(babyCupboardFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi4}}
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
                              :color="(babyCupboardMarContents.kpi1 == null)?'grey-2':(babyCupboardMarContents.kpi1 >= '0' && babyCupboardMarContents.kpi1 <= '27')?'red':(babyCupboardMarContents.kpi1 > '27' && babyCupboardMarContents.kpi1 <= '36')?'orange':(babyCupboardMarContents.kpi1 > '36' && babyCupboardMarContents.kpi1 < '45')?'yellow-7':(babyCupboardMarContents.kpi1 >= '45' && babyCupboardMarContents.kpi1 < '477.6')?'green':(babyCupboardMarContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi2 == null)?'grey-2':(babyCupboardMarContents.kpi2 >= '0' && babyCupboardMarContents.kpi2 <= '27')?'red':(babyCupboardMarContents.kpi2 > '27' && babyCupboardMarContents.kpi2 <= '36')?'orange':(babyCupboardMarContents.kpi2 > '36' && babyCupboardMarContents.kpi2 < '45')?'yellow-7':(babyCupboardMarContents.kpi2 >= '45' && babyCupboardMarContents.kpi2 < '488.4')?'green':(babyCupboardMarContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi3 == null)?'grey-2':(babyCupboardMarContents.kpi3 >= '0' && babyCupboardMarContents.kpi3 <= '31.25')?'red':(babyCupboardMarContents.kpi3 > '31.25' && babyCupboardMarContents.kpi3 <= '41.8')?'orange':(babyCupboardMarContents.kpi3 > '41.8' && babyCupboardMarContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMarContents.kpi3 >= '52.25' && babyCupboardMarContents.kpi3 < '1048.5')?'green':(babyCupboardMarContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi4 == null)?'grey-2':(babyCupboardMarContents.kpi4 >= '0' && babyCupboardMarContents.kpi4 <= '12.45')?'red':(babyCupboardMarContents.kpi4 > '12.45' && babyCupboardMarContents.kpi4 <= '16.6')?'orange':(babyCupboardMarContents.kpi4 > '16.6' && babyCupboardMarContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMarContents.kpi4 >= '20.75' && babyCupboardMarContents.kpi4 < '24.9')?'green':(babyCupboardMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi4}}
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
                              :color="(babyCupboardAprContents.kpi1 == null)?'grey-2':(babyCupboardAprContents.kpi1 >= '0' && babyCupboardAprContents.kpi1 <= '27')?'red':(babyCupboardAprContents.kpi1 > '27' && babyCupboardAprContents.kpi1 <= '36')?'orange':(babyCupboardAprContents.kpi1 > '36' && babyCupboardAprContents.kpi1 < '45')?'yellow-7':(babyCupboardAprContents.kpi1 >= '45' && babyCupboardAprContents.kpi1 < '477.6')?'green':(babyCupboardAprContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi2 == null)?'grey-2':(babyCupboardAprContents.kpi2 >= '0' && babyCupboardAprContents.kpi2 <= '27')?'red':(babyCupboardAprContents.kpi2 > '27' && babyCupboardAprContents.kpi2 <= '36')?'orange':(babyCupboardAprContents.kpi2 > '36' && babyCupboardAprContents.kpi2 < '45')?'yellow-7':(babyCupboardAprContents.kpi2 >= '45' && babyCupboardAprContents.kpi2 < '488.4')?'green':(babyCupboardAprContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi3 == null)?'grey-2':(babyCupboardAprContents.kpi3 >= '0' && babyCupboardAprContents.kpi3 <= '31.25')?'red':(babyCupboardAprContents.kpi3 > '31.25' && babyCupboardAprContents.kpi3 <= '41.8')?'orange':(babyCupboardAprContents.kpi3 > '41.8' && babyCupboardAprContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAprContents.kpi3 >= '52.25' && babyCupboardAprContents.kpi3 < '1048.5')?'green':(babyCupboardAprContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi4 == null)?'grey-2':(babyCupboardAprContents.kpi4 >= '0' && babyCupboardAprContents.kpi4 <= '12.45')?'red':(babyCupboardAprContents.kpi4 > '12.45' && babyCupboardAprContents.kpi4 <= '16.6')?'orange':(babyCupboardAprContents.kpi4 > '16.6' && babyCupboardAprContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAprContents.kpi4 >= '20.75' && babyCupboardAprContents.kpi4 < '24.9')?'green':(babyCupboardAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi4}}
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
                              :color="(babyCupboardMayContents.kpi1 == null)?'grey-2':(babyCupboardMayContents.kpi1 >= '0' && babyCupboardMayContents.kpi1 <= '27')?'red':(babyCupboardMayContents.kpi1 > '27' && babyCupboardMayContents.kpi1 <= '36')?'orange':(babyCupboardMayContents.kpi1 > '36' && babyCupboardMayContents.kpi1 < '45')?'yellow-7':(babyCupboardMayContents.kpi1 >= '45' && babyCupboardMayContents.kpi1 < '477.6')?'green':(babyCupboardMayContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi2 == null)?'grey-2':(babyCupboardMayContents.kpi2 >= '0' && babyCupboardMayContents.kpi2 <= '27')?'red':(babyCupboardMayContents.kpi2 > '27' && babyCupboardMayContents.kpi2 <= '36')?'orange':(babyCupboardMayContents.kpi2 > '36' && babyCupboardMayContents.kpi2 < '45')?'yellow-7':(babyCupboardMayContents.kpi2 >= '45' && babyCupboardMayContents.kpi2 < '488.4')?'green':(babyCupboardMayContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi3 == null)?'grey-2':(babyCupboardMayContents.kpi3 >= '0' && babyCupboardMayContents.kpi3 <= '31.25')?'red':(babyCupboardMayContents.kpi3 > '31.25' && babyCupboardMayContents.kpi3 <= '41.8')?'orange':(babyCupboardMayContents.kpi3 > '41.8' && babyCupboardMayContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMayContents.kpi3 >= '52.25' && babyCupboardMayContents.kpi3 < '1048.5')?'green':(babyCupboardMayContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi4 == null)?'grey-2':(babyCupboardMayContents.kpi4 >= '0' && babyCupboardMayContents.kpi4 <= '12.45')?'red':(babyCupboardMayContents.kpi4 > '12.45' && babyCupboardMayContents.kpi4 <= '16.6')?'orange':(babyCupboardMayContents.kpi4 > '16.6' && babyCupboardMayContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMayContents.kpi4 >= '20.75' && babyCupboardMayContents.kpi4 < '24.9')?'green':(babyCupboardMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi4}}
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
                              :color="(babyCupboardJunContents.kpi1 == null)?'grey-2':(babyCupboardJunContents.kpi1 >= '0' && babyCupboardJunContents.kpi1 <= '27')?'red':(babyCupboardJunContents.kpi1 > '27' && babyCupboardJunContents.kpi1 <= '36')?'orange':(babyCupboardJunContents.kpi1 > '36' && babyCupboardJunContents.kpi1 < '45')?'yellow-7':(babyCupboardJunContents.kpi1 >= '45' && babyCupboardJunContents.kpi1 < '477.6')?'green':(babyCupboardJunContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi2 == null)?'grey-2':(babyCupboardJunContents.kpi2 >= '0' && babyCupboardJunContents.kpi2 <= '27')?'red':(babyCupboardJunContents.kpi2 > '27' && babyCupboardJunContents.kpi2 <= '36')?'orange':(babyCupboardJunContents.kpi2 > '36' && babyCupboardJunContents.kpi2 < '45')?'yellow-7':(babyCupboardJunContents.kpi2 >= '45' && babyCupboardJunContents.kpi2 < '488.4')?'green':(babyCupboardJunContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi3 == null)?'grey-2':(babyCupboardJunContents.kpi3 >= '0' && babyCupboardJunContents.kpi3 <= '31.25')?'red':(babyCupboardJunContents.kpi3 > '31.25' && babyCupboardJunContents.kpi3 <= '41.8')?'orange':(babyCupboardJunContents.kpi3 > '41.8' && babyCupboardJunContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJunContents.kpi3 >= '52.25' && babyCupboardJunContents.kpi3 < '1048.5')?'green':(babyCupboardJunContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi4 == null)?'grey-2':(babyCupboardJunContents.kpi4 >= '0' && babyCupboardJunContents.kpi4 <= '12.45')?'red':(babyCupboardJunContents.kpi4 > '12.45' && babyCupboardJunContents.kpi4 <= '16.6')?'orange':(babyCupboardJunContents.kpi4 > '16.6' && babyCupboardJunContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJunContents.kpi4 >= '20.75' && babyCupboardJunContents.kpi4 < '24.9')?'green':(babyCupboardJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi4}}
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
                              :color="(babyCupboardJulContents.kpi1 == null)?'grey-2':(babyCupboardJulContents.kpi1 >= '0' && babyCupboardJulContents.kpi1 <= '27')?'red':(babyCupboardJulContents.kpi1 > '27' && babyCupboardJulContents.kpi1 <= '36')?'orange':(babyCupboardJulContents.kpi1 > '36' && babyCupboardJulContents.kpi1 < '45')?'yellow-7':(babyCupboardJulContents.kpi1 >= '45' && babyCupboardJulContents.kpi1 < '477.6')?'green':(babyCupboardJulContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi2 == null)?'grey-2':(babyCupboardJulContents.kpi2 >= '0' && babyCupboardJulContents.kpi2 <= '27')?'red':(babyCupboardJulContents.kpi2 > '27' && babyCupboardJulContents.kpi2 <= '36')?'orange':(babyCupboardJulContents.kpi2 > '36' && babyCupboardJulContents.kpi2 < '45')?'yellow-7':(babyCupboardJulContents.kpi2 >= '45' && babyCupboardJulContents.kpi2 < '488.4')?'green':(babyCupboardJulContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi3 == null)?'grey-2':(babyCupboardJulContents.kpi3 >= '0' && babyCupboardJulContents.kpi3 <= '31.25')?'red':(babyCupboardJulContents.kpi3 > '31.25' && babyCupboardJulContents.kpi3 <= '41.8')?'orange':(babyCupboardJulContents.kpi3 > '41.8' && babyCupboardJulContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJulContents.kpi3 >= '52.25' && babyCupboardJulContents.kpi3 < '1048.5')?'green':(babyCupboardJulContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi4 == null)?'grey-2':(babyCupboardJulContents.kpi4 >= '0' && babyCupboardJulContents.kpi4 <= '12.45')?'red':(babyCupboardJulContents.kpi4 > '12.45' && babyCupboardJulContents.kpi4 <= '16.6')?'orange':(babyCupboardJulContents.kpi4 > '16.6' && babyCupboardJulContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJulContents.kpi4 >= '20.75' && babyCupboardJulContents.kpi4 < '24.9')?'green':(babyCupboardJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi4}}
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
                              :color="(babyCupboardAugContents.kpi1 == null)?'grey-2':(babyCupboardAugContents.kpi1 >= '0' && babyCupboardAugContents.kpi1 <= '27')?'red':(babyCupboardAugContents.kpi1 > '27' && babyCupboardAugContents.kpi1 <= '36')?'orange':(babyCupboardAugContents.kpi1 > '36' && babyCupboardAugContents.kpi1 < '45')?'yellow-7':(babyCupboardAugContents.kpi1 >= '45' && babyCupboardAugContents.kpi1 < '477.6')?'green':(babyCupboardAugContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi2 == null)?'grey-2':(babyCupboardAugContents.kpi2 >= '0' && babyCupboardAugContents.kpi2 <= '27')?'red':(babyCupboardAugContents.kpi2 > '27' && babyCupboardAugContents.kpi2 <= '36')?'orange':(babyCupboardAugContents.kpi2 > '36' && babyCupboardAugContents.kpi2 < '45')?'yellow-7':(babyCupboardAugContents.kpi2 >= '45' && babyCupboardAugContents.kpi2 < '488.4')?'green':(babyCupboardAugContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi3 == null)?'grey-2':(babyCupboardAugContents.kpi3 >= '0' && babyCupboardAugContents.kpi3 <= '31.25')?'red':(babyCupboardAugContents.kpi3 > '31.25' && babyCupboardAugContents.kpi3 <= '41.8')?'orange':(babyCupboardAugContents.kpi3 > '41.8' && babyCupboardAugContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAugContents.kpi3 >= '52.25' && babyCupboardAugContents.kpi3 < '1048.5')?'green':(babyCupboardAugContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi4 == null)?'grey-2':(babyCupboardAugContents.kpi4 >= '0' && babyCupboardAugContents.kpi4 <= '12.45')?'red':(babyCupboardAugContents.kpi4 > '12.45' && babyCupboardAugContents.kpi4 <= '16.6')?'orange':(babyCupboardAugContents.kpi4 > '16.6' && babyCupboardAugContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAugContents.kpi4 >= '20.75' && babyCupboardAugContents.kpi4 < '24.9')?'green':(babyCupboardAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi4}}
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
                              :color="(babyCupboardSepContents.kpi1 == null)?'grey-2':(babyCupboardSepContents.kpi1 >= '0' && babyCupboardSepContents.kpi1 <= '27')?'red':(babyCupboardSepContents.kpi1 > '27' && babyCupboardSepContents.kpi1 <= '36')?'orange':(babyCupboardSepContents.kpi1 > '36' && babyCupboardSepContents.kpi1 < '45')?'yellow-7':(babyCupboardSepContents.kpi1 >= '45' && babyCupboardSepContents.kpi1 < '477.6')?'green':(babyCupboardSepContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi2 == null)?'grey-2':(babyCupboardSepContents.kpi2 >= '0' && babyCupboardSepContents.kpi2 <= '27')?'red':(babyCupboardSepContents.kpi2 > '27' && babyCupboardSepContents.kpi2 <= '36')?'orange':(babyCupboardSepContents.kpi2 > '36' && babyCupboardSepContents.kpi2 < '45')?'yellow-7':(babyCupboardSepContents.kpi2 >= '45' && babyCupboardSepContents.kpi2 < '488.4')?'green':(babyCupboardSepContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi3 == null)?'grey-2':(babyCupboardSepContents.kpi3 >= '0' && babyCupboardSepContents.kpi3 <= '31.25')?'red':(babyCupboardSepContents.kpi3 > '31.25' && babyCupboardSepContents.kpi3 <= '41.8')?'orange':(babyCupboardSepContents.kpi3 > '41.8' && babyCupboardSepContents.kpi3 < '52.25')?'yellow-7':(babyCupboardSepContents.kpi3 >= '52.25' && babyCupboardSepContents.kpi3 < '1048.5')?'green':(babyCupboardSepContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi4 == null)?'grey-2':(babyCupboardSepContents.kpi4 >= '0' && babyCupboardSepContents.kpi4 <= '12.45')?'red':(babyCupboardSepContents.kpi4 > '12.45' && babyCupboardSepContents.kpi4 <= '16.6')?'orange':(babyCupboardSepContents.kpi4 > '16.6' && babyCupboardSepContents.kpi4 < '20.75')?'yellow-7':(babyCupboardSepContents.kpi4 >= '20.75' && babyCupboardSepContents.kpi4 < '24.9')?'green':(babyCupboardSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi4}}
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
                              :color="(babyCupboardOctContents.kpi1 == null)?'grey-2':(babyCupboardOctContents.kpi1 >= '0' && babyCupboardOctContents.kpi1 <= '27')?'red':(babyCupboardOctContents.kpi1 > '27' && babyCupboardOctContents.kpi1 <= '36')?'orange':(babyCupboardOctContents.kpi1 > '36' && babyCupboardOctContents.kpi1 < '45')?'yellow-7':(babyCupboardOctContents.kpi1 >= '45' && babyCupboardOctContents.kpi1 < '477.6')?'green':(babyCupboardOctContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi2 == null)?'grey-2':(babyCupboardOctContents.kpi2 >= '0' && babyCupboardOctContents.kpi2 <= '27')?'red':(babyCupboardOctContents.kpi2 > '27' && babyCupboardOctContents.kpi2 <= '36')?'orange':(babyCupboardOctContents.kpi2 > '36' && babyCupboardOctContents.kpi2 < '45')?'yellow-7':(babyCupboardOctContents.kpi2 >= '45' && babyCupboardOctContents.kpi2 < '488.4')?'green':(babyCupboardOctContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi3 == null)?'grey-2':(babyCupboardOctContents.kpi3 >= '0' && babyCupboardOctContents.kpi3 <= '31.25')?'red':(babyCupboardOctContents.kpi3 > '31.25' && babyCupboardOctContents.kpi3 <= '41.8')?'orange':(babyCupboardOctContents.kpi3 > '41.8' && babyCupboardOctContents.kpi3 < '52.25')?'yellow-7':(babyCupboardOctContents.kpi3 >= '52.25' && babyCupboardOctContents.kpi3 < '1048.5')?'green':(babyCupboardOctContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi4 == null)?'grey-2':(babyCupboardOctContents.kpi4 >= '0' && babyCupboardOctContents.kpi4 <= '12.45')?'red':(babyCupboardOctContents.kpi4 > '12.45' && babyCupboardOctContents.kpi4 <= '16.6')?'orange':(babyCupboardOctContents.kpi4 > '16.6' && babyCupboardOctContents.kpi4 < '20.75')?'yellow-7':(babyCupboardOctContents.kpi4 >= '20.75' && babyCupboardOctContents.kpi4 < '24.9')?'green':(babyCupboardOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi4}}
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
                              :color="(babyCupboardNovContents.kpi1 == null)?'grey-2':(babyCupboardNovContents.kpi1 >= '0' && babyCupboardNovContents.kpi1 <= '27')?'red':(babyCupboardNovContents.kpi1 > '27' && babyCupboardNovContents.kpi1 <= '36')?'orange':(babyCupboardNovContents.kpi1 > '36' && babyCupboardNovContents.kpi1 < '45')?'yellow-7':(babyCupboardNovContents.kpi1 >= '45' && babyCupboardNovContents.kpi1 < '477.6')?'green':(babyCupboardNovContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi2 == null)?'grey-2':(babyCupboardNovContents.kpi2 >= '0' && babyCupboardNovContents.kpi2 <= '27')?'red':(babyCupboardNovContents.kpi2 > '27' && babyCupboardNovContents.kpi2 <= '36')?'orange':(babyCupboardNovContents.kpi2 > '36' && babyCupboardNovContents.kpi2 < '45')?'yellow-7':(babyCupboardNovContents.kpi2 >= '45' && babyCupboardNovContents.kpi2 < '488.4')?'green':(babyCupboardNovContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi3 == null)?'grey-2':(babyCupboardNovContents.kpi3 >= '0' && babyCupboardNovContents.kpi3 <= '31.25')?'red':(babyCupboardNovContents.kpi3 > '31.25' && babyCupboardNovContents.kpi3 <= '41.8')?'orange':(babyCupboardNovContents.kpi3 > '41.8' && babyCupboardNovContents.kpi3 < '52.25')?'yellow-7':(babyCupboardNovContents.kpi3 >= '52.25' && babyCupboardNovContents.kpi3 < '1048.5')?'green':(babyCupboardNovContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi4 == null)?'grey-2':(babyCupboardNovContents.kpi4 >= '0' && babyCupboardNovContents.kpi4 <= '12.45')?'red':(babyCupboardNovContents.kpi4 > '12.45' && babyCupboardNovContents.kpi4 <= '16.6')?'orange':(babyCupboardNovContents.kpi4 > '16.6' && babyCupboardNovContents.kpi4 < '20.75')?'yellow-7':(babyCupboardNovContents.kpi4 >= '20.75' && babyCupboardNovContents.kpi4 < '24.9')?'green':(babyCupboardNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi4}}
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
                              :color="(babyCupboardDecContents.kpi1 == null)?'grey-2':(babyCupboardDecContents.kpi1 >= '0' && babyCupboardDecContents.kpi1 <= '27')?'red':(babyCupboardDecContents.kpi1 > '27' && babyCupboardDecContents.kpi1 <= '36')?'orange':(babyCupboardDecContents.kpi1 > '36' && babyCupboardDecContents.kpi1 < '45')?'yellow-7':(babyCupboardDecContents.kpi1 >= '45' && babyCupboardDecContents.kpi1 < '477.6')?'green':(babyCupboardDecContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi2 == null)?'grey-2':(babyCupboardDecContents.kpi2 >= '0' && babyCupboardDecContents.kpi2 <= '27')?'red':(babyCupboardDecContents.kpi2 > '27' && babyCupboardDecContents.kpi2 <= '36')?'orange':(babyCupboardDecContents.kpi2 > '36' && babyCupboardDecContents.kpi2 < '45')?'yellow-7':(babyCupboardDecContents.kpi2 >= '45' && babyCupboardDecContents.kpi2 < '488.4')?'green':(babyCupboardDecContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi3 == null)?'grey-2':(babyCupboardDecContents.kpi3 >= '0' && babyCupboardDecContents.kpi3 <= '31.25')?'red':(babyCupboardDecContents.kpi3 > '31.25' && babyCupboardDecContents.kpi3 <= '41.8')?'orange':(babyCupboardDecContents.kpi3 > '41.8' && babyCupboardDecContents.kpi3 < '52.25')?'yellow-7':(babyCupboardDecContents.kpi3 >= '52.25' && babyCupboardDecContents.kpi3 < '1048.5')?'green':(babyCupboardDecContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi4 == null)?'grey-2':(babyCupboardDecContents.kpi4 >= '0' && babyCupboardDecContents.kpi4 <= '12.45')?'red':(babyCupboardDecContents.kpi4 > '12.45' && babyCupboardDecContents.kpi4 <= '16.6')?'orange':(babyCupboardDecContents.kpi4 > '16.6' && babyCupboardDecContents.kpi4 < '20.75')?'yellow-7':(babyCupboardDecContents.kpi4 >= '20.75' && babyCupboardDecContents.kpi4 < '24.9')?'green':(babyCupboardDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi4}}
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
                              :color="(babyCupboardJanContents.kpi1 == null)?'grey-2':(babyCupboardJanContents.kpi1 >= '0' && babyCupboardJanContents.kpi1 <= '27')?'red':(babyCupboardJanContents.kpi1 > '27' && babyCupboardJanContents.kpi1 <= '36')?'orange':(babyCupboardJanContents.kpi1 > '36' && babyCupboardJanContents.kpi1 < '45')?'yellow-7':(babyCupboardJanContents.kpi1 >= '45' && babyCupboardJanContents.kpi1 < '477.6')?'green':(babyCupboardJanContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi2 == null)?'grey-2':(babyCupboardJanContents.kpi2 >= '0' && babyCupboardJanContents.kpi2 <= '27')?'red':(babyCupboardJanContents.kpi2 > '27' && babyCupboardJanContents.kpi2 <= '36')?'orange':(babyCupboardJanContents.kpi2 > '36' && babyCupboardJanContents.kpi2 < '45')?'yellow-7':(babyCupboardJanContents.kpi2 >= '45' && babyCupboardJanContents.kpi2 < '488.4')?'green':(babyCupboardJanContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi3 == null)?'grey-2':(babyCupboardJanContents.kpi3 >= '0' && babyCupboardJanContents.kpi3 <= '31.25')?'red':(babyCupboardJanContents.kpi3 > '31.25' && babyCupboardJanContents.kpi3 <= '41.8')?'orange':(babyCupboardJanContents.kpi3 > '41.8' && babyCupboardJanContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJanContents.kpi3 >= '52.25' && babyCupboardJanContents.kpi3 < '1048.5')?'green':(babyCupboardJanContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJanContents.kpi4 == null)?'grey-2':(babyCupboardJanContents.kpi4 >= '0' && babyCupboardJanContents.kpi4 <= '12.45')?'red':(babyCupboardJanContents.kpi4 > '12.45' && babyCupboardJanContents.kpi4 <= '16.6')?'orange':(babyCupboardJanContents.kpi4 > '16.6' && babyCupboardJanContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJanContents.kpi4 >= '20.75' && babyCupboardJanContents.kpi4 < '24.9')?'green':(babyCupboardJanContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJanContents.kpi4}}
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
                              :color="(babyCupboardFebContents.kpi1 == null)?'grey-2':(babyCupboardFebContents.kpi1 >= '0' && babyCupboardFebContents.kpi1 <= '27')?'red':(babyCupboardFebContents.kpi1 > '27' && babyCupboardFebContents.kpi1 <= '36')?'orange':(babyCupboardFebContents.kpi1 > '36' && babyCupboardFebContents.kpi1 < '45')?'yellow-7':(babyCupboardFebContents.kpi1 >= '45' && babyCupboardFebContents.kpi1 < '477.6')?'green':(babyCupboardFebContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi2 == null)?'grey-2':(babyCupboardFebContents.kpi2 >= '0' && babyCupboardFebContents.kpi2 <= '27')?'red':(babyCupboardFebContents.kpi2 > '27' && babyCupboardFebContents.kpi2 <= '36')?'orange':(babyCupboardFebContents.kpi2 > '36' && babyCupboardFebContents.kpi2 < '45')?'yellow-7':(babyCupboardFebContents.kpi2 >= '45' && babyCupboardFebContents.kpi2 < '488.4')?'green':(babyCupboardFebContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi3 == null)?'grey-2':(babyCupboardFebContents.kpi3 >= '0' && babyCupboardFebContents.kpi3 <= '31.25')?'red':(babyCupboardFebContents.kpi3 > '31.25' && babyCupboardFebContents.kpi3 <= '41.8')?'orange':(babyCupboardFebContents.kpi3 > '41.8' && babyCupboardFebContents.kpi3 < '52.25')?'yellow-7':(babyCupboardFebContents.kpi3 >= '52.25' && babyCupboardFebContents.kpi3 < '1048.5')?'green':(babyCupboardFebContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardFebContents.kpi4 == null)?'grey-2':(babyCupboardFebContents.kpi4 >= '0' && babyCupboardFebContents.kpi4 <= '12.45')?'red':(babyCupboardFebContents.kpi4 > '12.45' && babyCupboardFebContents.kpi4 <= '16.6')?'orange':(babyCupboardFebContents.kpi4 > '16.6' && babyCupboardFebContents.kpi4 < '20.75')?'yellow-7':(babyCupboardFebContents.kpi4 >= '20.75' && babyCupboardFebContents.kpi4 < '24.9')?'green':(babyCupboardFebContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardFebContents.kpi4}}
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
                              :color="(babyCupboardMarContents.kpi1 == null)?'grey-2':(babyCupboardMarContents.kpi1 >= '0' && babyCupboardMarContents.kpi1 <= '27')?'red':(babyCupboardMarContents.kpi1 > '27' && babyCupboardMarContents.kpi1 <= '36')?'orange':(babyCupboardMarContents.kpi1 > '36' && babyCupboardMarContents.kpi1 < '45')?'yellow-7':(babyCupboardMarContents.kpi1 >= '45' && babyCupboardMarContents.kpi1 < '477.6')?'green':(babyCupboardMarContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi2 == null)?'grey-2':(babyCupboardMarContents.kpi2 >= '0' && babyCupboardMarContents.kpi2 <= '27')?'red':(babyCupboardMarContents.kpi2 > '27' && babyCupboardMarContents.kpi2 <= '36')?'orange':(babyCupboardMarContents.kpi2 > '36' && babyCupboardMarContents.kpi2 < '45')?'yellow-7':(babyCupboardMarContents.kpi2 >= '45' && babyCupboardMarContents.kpi2 < '488.4')?'green':(babyCupboardMarContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi3 == null)?'grey-2':(babyCupboardMarContents.kpi3 >= '0' && babyCupboardMarContents.kpi3 <= '31.25')?'red':(babyCupboardMarContents.kpi3 > '31.25' && babyCupboardMarContents.kpi3 <= '41.8')?'orange':(babyCupboardMarContents.kpi3 > '41.8' && babyCupboardMarContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMarContents.kpi3 >= '52.25' && babyCupboardMarContents.kpi3 < '1048.5')?'green':(babyCupboardMarContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMarContents.kpi4 == null)?'grey-2':(babyCupboardMarContents.kpi4 >= '0' && babyCupboardMarContents.kpi4 <= '12.45')?'red':(babyCupboardMarContents.kpi4 > '12.45' && babyCupboardMarContents.kpi4 <= '16.6')?'orange':(babyCupboardMarContents.kpi4 > '16.6' && babyCupboardMarContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMarContents.kpi4 >= '20.75' && babyCupboardMarContents.kpi4 < '24.9')?'green':(babyCupboardMarContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMarContents.kpi4}}
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
                              :color="(babyCupboardAprContents.kpi1 == null)?'grey-2':(babyCupboardAprContents.kpi1 >= '0' && babyCupboardAprContents.kpi1 <= '27')?'red':(babyCupboardAprContents.kpi1 > '27' && babyCupboardAprContents.kpi1 <= '36')?'orange':(babyCupboardAprContents.kpi1 > '36' && babyCupboardAprContents.kpi1 < '45')?'yellow-7':(babyCupboardAprContents.kpi1 >= '45' && babyCupboardAprContents.kpi1 < '477.6')?'green':(babyCupboardAprContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi2 == null)?'grey-2':(babyCupboardAprContents.kpi2 >= '0' && babyCupboardAprContents.kpi2 <= '27')?'red':(babyCupboardAprContents.kpi2 > '27' && babyCupboardAprContents.kpi2 <= '36')?'orange':(babyCupboardAprContents.kpi2 > '36' && babyCupboardAprContents.kpi2 < '45')?'yellow-7':(babyCupboardAprContents.kpi2 >= '45' && babyCupboardAprContents.kpi2 < '488.4')?'green':(babyCupboardAprContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi3 == null)?'grey-2':(babyCupboardAprContents.kpi3 >= '0' && babyCupboardAprContents.kpi3 <= '31.25')?'red':(babyCupboardAprContents.kpi3 > '31.25' && babyCupboardAprContents.kpi3 <= '41.8')?'orange':(babyCupboardAprContents.kpi3 > '41.8' && babyCupboardAprContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAprContents.kpi3 >= '52.25' && babyCupboardAprContents.kpi3 < '1048.5')?'green':(babyCupboardAprContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAprContents.kpi4 == null)?'grey-2':(babyCupboardAprContents.kpi4 >= '0' && babyCupboardAprContents.kpi4 <= '12.45')?'red':(babyCupboardAprContents.kpi4 > '12.45' && babyCupboardAprContents.kpi4 <= '16.6')?'orange':(babyCupboardAprContents.kpi4 > '16.6' && babyCupboardAprContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAprContents.kpi4 >= '20.75' && babyCupboardAprContents.kpi4 < '24.9')?'green':(babyCupboardAprContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAprContents.kpi4}}
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
                              :color="(babyCupboardMayContents.kpi1 == null)?'grey-2':(babyCupboardMayContents.kpi1 >= '0' && babyCupboardMayContents.kpi1 <= '27')?'red':(babyCupboardMayContents.kpi1 > '27' && babyCupboardMayContents.kpi1 <= '36')?'orange':(babyCupboardMayContents.kpi1 > '36' && babyCupboardMayContents.kpi1 < '45')?'yellow-7':(babyCupboardMayContents.kpi1 >= '45' && babyCupboardMayContents.kpi1 < '477.6')?'green':(babyCupboardMayContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi2 == null)?'grey-2':(babyCupboardMayContents.kpi2 >= '0' && babyCupboardMayContents.kpi2 <= '27')?'red':(babyCupboardMayContents.kpi2 > '27' && babyCupboardMayContents.kpi2 <= '36')?'orange':(babyCupboardMayContents.kpi2 > '36' && babyCupboardMayContents.kpi2 < '45')?'yellow-7':(babyCupboardMayContents.kpi2 >= '45' && babyCupboardMayContents.kpi2 < '488.4')?'green':(babyCupboardMayContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi3 == null)?'grey-2':(babyCupboardMayContents.kpi3 >= '0' && babyCupboardMayContents.kpi3 <= '31.25')?'red':(babyCupboardMayContents.kpi3 > '31.25' && babyCupboardMayContents.kpi3 <= '41.8')?'orange':(babyCupboardMayContents.kpi3 > '41.8' && babyCupboardMayContents.kpi3 < '52.25')?'yellow-7':(babyCupboardMayContents.kpi3 >= '52.25' && babyCupboardMayContents.kpi3 < '1048.5')?'green':(babyCupboardMayContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardMayContents.kpi4 == null)?'grey-2':(babyCupboardMayContents.kpi4 >= '0' && babyCupboardMayContents.kpi4 <= '12.45')?'red':(babyCupboardMayContents.kpi4 > '12.45' && babyCupboardMayContents.kpi4 <= '16.6')?'orange':(babyCupboardMayContents.kpi4 > '16.6' && babyCupboardMayContents.kpi4 < '20.75')?'yellow-7':(babyCupboardMayContents.kpi4 >= '20.75' && babyCupboardMayContents.kpi4 < '24.9')?'green':(babyCupboardMayContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardMayContents.kpi4}}
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
                              :color="(babyCupboardJunContents.kpi1 == null)?'grey-2':(babyCupboardJunContents.kpi1 >= '0' && babyCupboardJunContents.kpi1 <= '27')?'red':(babyCupboardJunContents.kpi1 > '27' && babyCupboardJunContents.kpi1 <= '36')?'orange':(babyCupboardJunContents.kpi1 > '36' && babyCupboardJunContents.kpi1 < '45')?'yellow-7':(babyCupboardJunContents.kpi1 >= '45' && babyCupboardJunContents.kpi1 < '477.6')?'green':(babyCupboardJunContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi2 == null)?'grey-2':(babyCupboardJunContents.kpi2 >= '0' && babyCupboardJunContents.kpi2 <= '27')?'red':(babyCupboardJunContents.kpi2 > '27' && babyCupboardJunContents.kpi2 <= '36')?'orange':(babyCupboardJunContents.kpi2 > '36' && babyCupboardJunContents.kpi2 < '45')?'yellow-7':(babyCupboardJunContents.kpi2 >= '45' && babyCupboardJunContents.kpi2 < '488.4')?'green':(babyCupboardJunContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi3 == null)?'grey-2':(babyCupboardJunContents.kpi3 >= '0' && babyCupboardJunContents.kpi3 <= '31.25')?'red':(babyCupboardJunContents.kpi3 > '31.25' && babyCupboardJunContents.kpi3 <= '41.8')?'orange':(babyCupboardJunContents.kpi3 > '41.8' && babyCupboardJunContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJunContents.kpi3 >= '52.25' && babyCupboardJunContents.kpi3 < '1048.5')?'green':(babyCupboardJunContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJunContents.kpi4 == null)?'grey-2':(babyCupboardJunContents.kpi4 >= '0' && babyCupboardJunContents.kpi4 <= '12.45')?'red':(babyCupboardJunContents.kpi4 > '12.45' && babyCupboardJunContents.kpi4 <= '16.6')?'orange':(babyCupboardJunContents.kpi4 > '16.6' && babyCupboardJunContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJunContents.kpi4 >= '20.75' && babyCupboardJunContents.kpi4 < '24.9')?'green':(babyCupboardJunContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJunContents.kpi4}}
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
                              :color="(babyCupboardJulContents.kpi1 == null)?'grey-2':(babyCupboardJulContents.kpi1 >= '0' && babyCupboardJulContents.kpi1 <= '27')?'red':(babyCupboardJulContents.kpi1 > '27' && babyCupboardJulContents.kpi1 <= '36')?'orange':(babyCupboardJulContents.kpi1 > '36' && babyCupboardJulContents.kpi1 < '45')?'yellow-7':(babyCupboardJulContents.kpi1 >= '45' && babyCupboardJulContents.kpi1 < '477.6')?'green':(babyCupboardJulContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi2 == null)?'grey-2':(babyCupboardJulContents.kpi2 >= '0' && babyCupboardJulContents.kpi2 <= '27')?'red':(babyCupboardJulContents.kpi2 > '27' && babyCupboardJulContents.kpi2 <= '36')?'orange':(babyCupboardJulContents.kpi2 > '36' && babyCupboardJulContents.kpi2 < '45')?'yellow-7':(babyCupboardJulContents.kpi2 >= '45' && babyCupboardJulContents.kpi2 < '488.4')?'green':(babyCupboardJulContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi3 == null)?'grey-2':(babyCupboardJulContents.kpi3 >= '0' && babyCupboardJulContents.kpi3 <= '31.25')?'red':(babyCupboardJulContents.kpi3 > '31.25' && babyCupboardJulContents.kpi3 <= '41.8')?'orange':(babyCupboardJulContents.kpi3 > '41.8' && babyCupboardJulContents.kpi3 < '52.25')?'yellow-7':(babyCupboardJulContents.kpi3 >= '52.25' && babyCupboardJulContents.kpi3 < '1048.5')?'green':(babyCupboardJulContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardJulContents.kpi4 == null)?'grey-2':(babyCupboardJulContents.kpi4 >= '0' && babyCupboardJulContents.kpi4 <= '12.45')?'red':(babyCupboardJulContents.kpi4 > '12.45' && babyCupboardJulContents.kpi4 <= '16.6')?'orange':(babyCupboardJulContents.kpi4 > '16.6' && babyCupboardJulContents.kpi4 < '20.75')?'yellow-7':(babyCupboardJulContents.kpi4 >= '20.75' && babyCupboardJulContents.kpi4 < '24.9')?'green':(babyCupboardJulContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardJulContents.kpi4}}
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
                              :color="(babyCupboardAugContents.kpi1 == null)?'grey-2':(babyCupboardAugContents.kpi1 >= '0' && babyCupboardAugContents.kpi1 <= '27')?'red':(babyCupboardAugContents.kpi1 > '27' && babyCupboardAugContents.kpi1 <= '36')?'orange':(babyCupboardAugContents.kpi1 > '36' && babyCupboardAugContents.kpi1 < '45')?'yellow-7':(babyCupboardAugContents.kpi1 >= '45' && babyCupboardAugContents.kpi1 < '477.6')?'green':(babyCupboardAugContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi2 == null)?'grey-2':(babyCupboardAugContents.kpi2 >= '0' && babyCupboardAugContents.kpi2 <= '27')?'red':(babyCupboardAugContents.kpi2 > '27' && babyCupboardAugContents.kpi2 <= '36')?'orange':(babyCupboardAugContents.kpi2 > '36' && babyCupboardAugContents.kpi2 < '45')?'yellow-7':(babyCupboardAugContents.kpi2 >= '45' && babyCupboardAugContents.kpi2 < '488.4')?'green':(babyCupboardAugContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi3 == null)?'grey-2':(babyCupboardAugContents.kpi3 >= '0' && babyCupboardAugContents.kpi3 <= '31.25')?'red':(babyCupboardAugContents.kpi3 > '31.25' && babyCupboardAugContents.kpi3 <= '41.8')?'orange':(babyCupboardAugContents.kpi3 > '41.8' && babyCupboardAugContents.kpi3 < '52.25')?'yellow-7':(babyCupboardAugContents.kpi3 >= '52.25' && babyCupboardAugContents.kpi3 < '1048.5')?'green':(babyCupboardAugContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardAugContents.kpi4 == null)?'grey-2':(babyCupboardAugContents.kpi4 >= '0' && babyCupboardAugContents.kpi4 <= '12.45')?'red':(babyCupboardAugContents.kpi4 > '12.45' && babyCupboardAugContents.kpi4 <= '16.6')?'orange':(babyCupboardAugContents.kpi4 > '16.6' && babyCupboardAugContents.kpi4 < '20.75')?'yellow-7':(babyCupboardAugContents.kpi4 >= '20.75' && babyCupboardAugContents.kpi4 < '24.9')?'green':(babyCupboardAugContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardAugContents.kpi4}}
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
                              :color="(babyCupboardSepContents.kpi1 == null)?'grey-2':(babyCupboardSepContents.kpi1 >= '0' && babyCupboardSepContents.kpi1 <= '27')?'red':(babyCupboardSepContents.kpi1 > '27' && babyCupboardSepContents.kpi1 <= '36')?'orange':(babyCupboardSepContents.kpi1 > '36' && babyCupboardSepContents.kpi1 < '45')?'yellow-7':(babyCupboardSepContents.kpi1 >= '45' && babyCupboardSepContents.kpi1 < '477.6')?'green':(babyCupboardSepContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi2 == null)?'grey-2':(babyCupboardSepContents.kpi2 >= '0' && babyCupboardSepContents.kpi2 <= '27')?'red':(babyCupboardSepContents.kpi2 > '27' && babyCupboardSepContents.kpi2 <= '36')?'orange':(babyCupboardSepContents.kpi2 > '36' && babyCupboardSepContents.kpi2 < '45')?'yellow-7':(babyCupboardSepContents.kpi2 >= '45' && babyCupboardSepContents.kpi2 < '488.4')?'green':(babyCupboardSepContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi3 == null)?'grey-2':(babyCupboardSepContents.kpi3 >= '0' && babyCupboardSepContents.kpi3 <= '31.25')?'red':(babyCupboardSepContents.kpi3 > '31.25' && babyCupboardSepContents.kpi3 <= '41.8')?'orange':(babyCupboardSepContents.kpi3 > '41.8' && babyCupboardSepContents.kpi3 < '52.25')?'yellow-7':(babyCupboardSepContents.kpi3 >= '52.25' && babyCupboardSepContents.kpi3 < '1048.5')?'green':(babyCupboardSepContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardSepContents.kpi4 == null)?'grey-2':(babyCupboardSepContents.kpi4 >= '0' && babyCupboardSepContents.kpi4 <= '12.45')?'red':(babyCupboardSepContents.kpi4 > '12.45' && babyCupboardSepContents.kpi4 <= '16.6')?'orange':(babyCupboardSepContents.kpi4 > '16.6' && babyCupboardSepContents.kpi4 < '20.75')?'yellow-7':(babyCupboardSepContents.kpi4 >= '20.75' && babyCupboardSepContents.kpi4 < '24.9')?'green':(babyCupboardSepContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardSepContents.kpi4}}
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
                              :color="(babyCupboardOctContents.kpi1 == null)?'grey-2':(babyCupboardOctContents.kpi1 >= '0' && babyCupboardOctContents.kpi1 <= '27')?'red':(babyCupboardOctContents.kpi1 > '27' && babyCupboardOctContents.kpi1 <= '36')?'orange':(babyCupboardOctContents.kpi1 > '36' && babyCupboardOctContents.kpi1 < '45')?'yellow-7':(babyCupboardOctContents.kpi1 >= '45' && babyCupboardOctContents.kpi1 < '477.6')?'green':(babyCupboardOctContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi2 == null)?'grey-2':(babyCupboardOctContents.kpi2 >= '0' && babyCupboardOctContents.kpi2 <= '27')?'red':(babyCupboardOctContents.kpi2 > '27' && babyCupboardOctContents.kpi2 <= '36')?'orange':(babyCupboardOctContents.kpi2 > '36' && babyCupboardOctContents.kpi2 < '45')?'yellow-7':(babyCupboardOctContents.kpi2 >= '45' && babyCupboardOctContents.kpi2 < '488.4')?'green':(babyCupboardOctContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi3 == null)?'grey-2':(babyCupboardOctContents.kpi3 >= '0' && babyCupboardOctContents.kpi3 <= '31.25')?'red':(babyCupboardOctContents.kpi3 > '31.25' && babyCupboardOctContents.kpi3 <= '41.8')?'orange':(babyCupboardOctContents.kpi3 > '41.8' && babyCupboardOctContents.kpi3 < '52.25')?'yellow-7':(babyCupboardOctContents.kpi3 >= '52.25' && babyCupboardOctContents.kpi3 < '1048.5')?'green':(babyCupboardOctContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardOctContents.kpi4 == null)?'grey-2':(babyCupboardOctContents.kpi4 >= '0' && babyCupboardOctContents.kpi4 <= '12.45')?'red':(babyCupboardOctContents.kpi4 > '12.45' && babyCupboardOctContents.kpi4 <= '16.6')?'orange':(babyCupboardOctContents.kpi4 > '16.6' && babyCupboardOctContents.kpi4 < '20.75')?'yellow-7':(babyCupboardOctContents.kpi4 >= '20.75' && babyCupboardOctContents.kpi4 < '24.9')?'green':(babyCupboardOctContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardOctContents.kpi4}}
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
                              :color="(babyCupboardNovContents.kpi1 == null)?'grey-2':(babyCupboardNovContents.kpi1 >= '0' && babyCupboardNovContents.kpi1 <= '27')?'red':(babyCupboardNovContents.kpi1 > '27' && babyCupboardNovContents.kpi1 <= '36')?'orange':(babyCupboardNovContents.kpi1 > '36' && babyCupboardNovContents.kpi1 < '45')?'yellow-7':(babyCupboardNovContents.kpi1 >= '45' && babyCupboardNovContents.kpi1 < '477.6')?'green':(babyCupboardNovContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi2 == null)?'grey-2':(babyCupboardNovContents.kpi2 >= '0' && babyCupboardNovContents.kpi2 <= '27')?'red':(babyCupboardNovContents.kpi2 > '27' && babyCupboardNovContents.kpi2 <= '36')?'orange':(babyCupboardNovContents.kpi2 > '36' && babyCupboardNovContents.kpi2 < '45')?'yellow-7':(babyCupboardNovContents.kpi2 >= '45' && babyCupboardNovContents.kpi2 < '488.4')?'green':(babyCupboardNovContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi3 == null)?'grey-2':(babyCupboardNovContents.kpi3 >= '0' && babyCupboardNovContents.kpi3 <= '31.25')?'red':(babyCupboardNovContents.kpi3 > '31.25' && babyCupboardNovContents.kpi3 <= '41.8')?'orange':(babyCupboardNovContents.kpi3 > '41.8' && babyCupboardNovContents.kpi3 < '52.25')?'yellow-7':(babyCupboardNovContents.kpi3 >= '52.25' && babyCupboardNovContents.kpi3 < '1048.5')?'green':(babyCupboardNovContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardNovContents.kpi4 == null)?'grey-2':(babyCupboardNovContents.kpi4 >= '0' && babyCupboardNovContents.kpi4 <= '12.45')?'red':(babyCupboardNovContents.kpi4 > '12.45' && babyCupboardNovContents.kpi4 <= '16.6')?'orange':(babyCupboardNovContents.kpi4 > '16.6' && babyCupboardNovContents.kpi4 < '20.75')?'yellow-7':(babyCupboardNovContents.kpi4 >= '20.75' && babyCupboardNovContents.kpi4 < '24.9')?'green':(babyCupboardNovContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardNovContents.kpi4}}
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
                              :color="(babyCupboardDecContents.kpi1 == null)?'grey-2':(babyCupboardDecContents.kpi1 >= '0' && babyCupboardDecContents.kpi1 <= '27')?'red':(babyCupboardDecContents.kpi1 > '27' && babyCupboardDecContents.kpi1 <= '36')?'orange':(babyCupboardDecContents.kpi1 > '36' && babyCupboardDecContents.kpi1 < '45')?'yellow-7':(babyCupboardDecContents.kpi1 >= '45' && babyCupboardDecContents.kpi1 < '477.6')?'green':(babyCupboardDecContents.kpi1 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi2 == null)?'grey-2':(babyCupboardDecContents.kpi2 >= '0' && babyCupboardDecContents.kpi2 <= '27')?'red':(babyCupboardDecContents.kpi2 > '27' && babyCupboardDecContents.kpi2 <= '36')?'orange':(babyCupboardDecContents.kpi2 > '36' && babyCupboardDecContents.kpi2 < '45')?'yellow-7':(babyCupboardDecContents.kpi2 >= '45' && babyCupboardDecContents.kpi2 < '488.4')?'green':(babyCupboardDecContents.kpi2 >= '54'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi3 == null)?'grey-2':(babyCupboardDecContents.kpi3 >= '0' && babyCupboardDecContents.kpi3 <= '31.25')?'red':(babyCupboardDecContents.kpi3 > '31.25' && babyCupboardDecContents.kpi3 <= '41.8')?'orange':(babyCupboardDecContents.kpi3 > '41.8' && babyCupboardDecContents.kpi3 < '52.25')?'yellow-7':(babyCupboardDecContents.kpi3 >= '52.25' && babyCupboardDecContents.kpi3 < '1048.5')?'green':(babyCupboardDecContents.kpi3 >= '62.7'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(babyCupboardDecContents.kpi4 == null)?'grey-2':(babyCupboardDecContents.kpi4 >= '0' && babyCupboardDecContents.kpi4 <= '12.45')?'red':(babyCupboardDecContents.kpi4 > '12.45' && babyCupboardDecContents.kpi4 <= '16.6')?'orange':(babyCupboardDecContents.kpi4 > '16.6' && babyCupboardDecContents.kpi4 < '20.75')?'yellow-7':(babyCupboardDecContents.kpi4 >= '20.75' && babyCupboardDecContents.kpi4 < '24.9')?'green':(babyCupboardDecContents.kpi4 >= '24.9'?'blue':'grey-2')"
                            >
                            {{babyCupboardDecContents.kpi4}}
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
              babyCupboardJanContent: {
                
              },
              babyCupboardJanContents : [],
              babyCupboardFebContent: {
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
              babyCupboardFebContents : [],
              babyCupboardMarContent: {
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
              babyCupboardMarContents : [],
              babyCupboardAprContent: {
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
              babyCupboardAprContents : [],
              babyCupboardMayContent: {
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
              babyCupboardMayContents : [],
              babyCupboardJunContent: {
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
              babyCupboardJunContents : [],
              babyCupboardJulContent: {
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
              babyCupboardJulContents : [],
              babyCupboardAugContent: {
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
              babyCupboardAugContents : [],
              babyCupboardSepContent: {
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
              babyCupboardSepContents : [],
              babyCupboardOctContent: {
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
              babyCupboardOctContents : [],
              babyCupboardNovContent: {
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
              babyCupboardNovContents : [],
              babyCupboardDecContent: {
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
              babyCupboardDecContents : []


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
                            {time_period: 'January', expenses: this.babyCupboardJanContents.expenses, revenues: this.babyCupboardJanContents.revenues},
                            {time_period: 'February', expenses: this.babyCupboardFebContents.expenses, revenues: this.babyCupboardFebContents.revenues},
                            {time_period: 'March', expenses: this.babyCupboardMarContents.expenses, revenues: this.babyCupboardMarContents.revenues},
                            {time_period: 'April', expenses: this.babyCupboardAprContents.expenses, revenues: this.babyCupboardAprContents.revenues},
                            {time_period: 'May', expenses: this.babyCupboardMayContents.expenses, revenues: this.babyCupboardMayContents.revenues},
                            {time_period: 'June', expenses: this.babyCupboardJunContents.expenses, revenues: this.babyCupboardJunContents.revenues},
                            {time_period: 'July', expenses: this.babyCupboardJulContents.expenses, revenues: this.babyCupboardJulContents.revenues},
                            {time_period: 'August', expenses: this.babyCupboardAugContents.expenses, revenues: this.babyCupboardAugContents.revenues},
                            {time_period: 'September', expenses: this.babyCupboardSepContents.expenses, revenues: this.babyCupboardSepContents.revenues},
                            {time_period: 'October', expenses: this.babyCupboardOctContents.expenses, revenues: this.babyCupboardOctContents.revenues},
                            {time_period: 'November', expenses: this.babyCupboardNovContents.expenses, revenues: this.babyCupboardNovContents.revenues},
                            {time_period: 'December',expenses: this.babyCupboardDecContents.expenses, revenues: this.babyCupboardDecContents.revenues }
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
                            {months: 'January', kpi1: this.babyCupboardJanContents.kpi1, kpi2: this.babyCupboardJanContents.kpi2, kpi3: this.babyCupboardJanContents.kpi3, kpi4: this.babyCupboardJanContents.kpi4, uniqueVol: this.babyCupboardJanContents.uniqueVolunteers, volHours: this.babyCupboardJanContents.volunteerHours},
                            {months: 'February', kpi1: this.babyCupboardFebContents.kpi1, kpi2: this.babyCupboardFebContents.kpi2, kpi3: this.babyCupboardFebContents.kpi3, kpi4: this.babyCupboardFebContents.kpi4, uniqueVol: this.babyCupboardFebContents.uniqueVolunteers, volHours: this.babyCupboardFebContents.volunteerHours},
                            {months: 'March', kpi1: this.babyCupboardMarContents.kpi1, kpi2: this.babyCupboardMarContents.kpi2, kpi3: this.babyCupboardMarContents.kpi3, kpi4: this.babyCupboardMarContents.kpi4, uniqueVol: this.babyCupboardMarContents.uniqueVolunteers, volHours: this.babyCupboardMarContents.volunteerHours},
                            {months: 'April', kpi1: this.babyCupboardAprContents.kpi1, kpi2: this.babyCupboardAprContents.kpi2, kpi3: this.babyCupboardAprContents.kpi3, kpi4: this.babyCupboardAprContents.kpi4, uniqueVol: this.babyCupboardAprContents.uniqueVolunteers, volHours: this.babyCupboardAprContents.volunteerHours},
                            {months: 'May', kpi1: this.babyCupboardMayContents.kpi1, kpi2: this.babyCupboardMayContents.kpi2, kpi3: this.babyCupboardMayContents.kpi3, kpi4: this.babyCupboardMayContents.kpi4, uniqueVol: this.babyCupboardMayContents.uniqueVolunteers, volHours: this.babyCupboardMayContents.volunteerHours},
                            {months: 'June', kpi1: this.babyCupboardJunContents.kpi1, kpi2: this.babyCupboardJunContents.kpi2, kpi3: this.babyCupboardJunContents.kpi3, kpi4: this.babyCupboardJunContents.kpi4, uniqueVol: this.babyCupboardJunContents.uniqueVolunteers, volHours: this.babyCupboardJunContents.volunteerHours},
                            {months: 'July', kpi1: this.babyCupboardJulContents.kpi1, kpi2: this.babyCupboardJulContents.kpi2, kpi3: this.babyCupboardJulContents.kpi3, kpi4: this.babyCupboardJulContents.kpi4, uniqueVol: this.babyCupboardJulContents.uniqueVolunteers, volHours: this.babyCupboardJulContents.volunteerHours},
                            {months: 'August', kpi1: this.babyCupboardAugContents.kpi1, kpi2: this.babyCupboardAugContents.kpi2, kpi3: this.babyCupboardAugContents.kpi3, kpi4: this.babyCupboardAugContents.kpi4, uniqueVol: this.babyCupboardAugContents.uniqueVolunteers, volHours: this.babyCupboardAugContents.volunteerHours},
                            {months: 'September', kpi1: this.babyCupboardSepContents.kpi1, kpi2: this.babyCupboardSepContents.kpi2, kpi3: this.babyCupboardSepContents.kpi3, kpi4: this.babyCupboardSepContents.kpi4, uniqueVol: this.babyCupboardSepContents.uniqueVolunteers, volHours: this.babyCupboardSepContents.volunteerHours},
                            {months: 'October', kpi1: this.babyCupboardOctContents.kpi1, kpi2: this.babyCupboardOctContents.kpi2, kpi3: this.babyCupboardOctContents.kpi3, kpi4: this.babyCupboardOctContents.kpi4, uniqueVol: this.babyCupboardOctContents.uniqueVolunteers, volHours: this.babyCupboardOctContents.volunteerHours},
                            {months: 'November', kpi1: this.babyCupboardNovContents.kpi1, kpi2: this.babyCupboardNovContents.kpi2, kpi3: this.babyCupboardNovContents.kpi3, kpi4: this.babyCupboardNovContents.kpi4, uniqueVol: this.babyCupboardNovContents.uniqueVolunteers, volHours: this.babyCupboardNovContents.volunteerHours},
                            {months: 'December',kpi1: this.babyCupboardDecContents.kpi1, kpi2: this.babyCupboardDecContents.kpi2, kpi3: this.babyCupboardDecContents.kpi3, kpi4: this.babyCupboardDecContents.kpi4, uniqueVol: this.babyCupboardDecContents.uniqueVolunteers, volHours: this.babyCupboardDecContents.volunteerHours},
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
                            data: [{value: this.babyCupboardJanContents.budgetUsage}],
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
                                {value: this.babyCupboardJanContents.perCategory1, name: this.babyCupboardJanContents.expenseCategory1},
                                {value: this.babyCupboardJanContents.perCategory2, name: this.babyCupboardJanContents.expenseCategory2},
                                {value: this.babyCupboardJanContents.perCategory3, name: this.babyCupboardJanContents.expenseCategory3},
                                {value: this.babyCupboardJanContents.perCategory4, name: this.babyCupboardJanContents.expenseCategory4},
                                {value: this.babyCupboardJanContents.perCategory5, name: this.babyCupboardJanContents.expenseCategory5},
                                {value: this.babyCupboardJanContents.perCategory6, name: this.babyCupboardJanContents.expenseCategory6}
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
                            data: [{value: this.babyCupboardFebContents.budgetUsage}],
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
                                {value: this.babyCupboardFebContents.perCategory1, name: this.babyCupboardFebContents.expenseCategory1},
                                {value: this.babyCupboardFebContents.perCategory2, name: this.babyCupboardFebContents.expenseCategory2},
                                {value: this.babyCupboardFebContents.perCategory3, name: this.babyCupboardFebContents.expenseCategory3},
                                {value: this.babyCupboardFebContents.perCategory4, name: this.babyCupboardFebContents.expenseCategory4},
                                {value: this.babyCupboardFebContents.perCategory5, name: this.babyCupboardFebContents.expenseCategory5},
                                {value: this.babyCupboardFebContents.perCategory6, name: this.babyCupboardFebContents.expenseCategory6}
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
                            data: [{value: this.babyCupboardMarContents.budgetUsage}],
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
                                {value: this.babyCupboardMarContents.perCategory1, name: this.babyCupboardMarContents.expenseCategory1},
                                {value: this.babyCupboardMarContents.perCategory2, name: this.babyCupboardMarContents.expenseCategory2},
                                {value: this.babyCupboardMarContents.perCategory3, name: this.babyCupboardMarContents.expenseCategory3},
                                {value: this.babyCupboardMarContents.perCategory4, name: this.babyCupboardMarContents.expenseCategory4},
                                {value: this.babyCupboardMarContents.perCategory5, name: this.babyCupboardMarContents.expenseCategory5},
                                {value: this.babyCupboardMarContents.perCategory6, name: this.babyCupboardMarContents.expenseCategory6}
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
                            data: [{value: this.babyCupboardAprContents.budgetUsage}],
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
                                {value: this.babyCupboardAprContents.perCategory1, name: this.babyCupboardAprContents.expenseCategory1},
                                {value: this.babyCupboardAprContents.perCategory2, name: this.babyCupboardAprContents.expenseCategory2},
                                {value: this.babyCupboardAprContents.perCategory3, name: this.babyCupboardAprContents.expenseCategory3},
                                {value: this.babyCupboardAprContents.perCategory4, name: this.babyCupboardAprContents.expenseCategory4},
                                {value: this.babyCupboardAprContents.perCategory5, name: this.babyCupboardAprContents.expenseCategory5},
                                {value: this.babyCupboardAprContents.perCategory6, name: this.babyCupboardAprContents.expenseCategory6}  
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
                            data: [{value: this.babyCupboardMayContents.budgetUsage}],
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
                                {value: this.babyCupboardMayContents.perCategory1, name: this.babyCupboardMayContents.expenseCategory1},
                                {value: this.babyCupboardMayContents.perCategory2, name: this.babyCupboardMayContents.expenseCategory2},
                                {value: this.babyCupboardMayContents.perCategory3, name: this.babyCupboardMayContents.expenseCategory3},
                                {value: this.babyCupboardMayContents.perCategory4, name: this.babyCupboardMayContents.expenseCategory4},
                                {value: this.babyCupboardMayContents.perCategory5, name: this.babyCupboardMayContents.expenseCategory5},
                                {value: this.babyCupboardMayContents.perCategory6, name: this.babyCupboardMayContents.expenseCategory6}  
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
                            data: [{value: this.babyCupboardJunContents.budgetUsage}],
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
                                {value: this.babyCupboardJunContents.perCategory1, name: this.babyCupboardJunContents.expenseCategory1},
                                {value: this.babyCupboardJunContents.perCategory2, name: this.babyCupboardJunContents.expenseCategory2},
                                {value: this.babyCupboardJunContents.perCategory3, name: this.babyCupboardJunContents.expenseCategory3},
                                {value: this.babyCupboardJunContents.perCategory4, name: this.babyCupboardJunContents.expenseCategory4},
                                {value: this.babyCupboardJunContents.perCategory5, name: this.babyCupboardJunContents.expenseCategory5},
                                {value: this.babyCupboardJunContents.perCategory6, name: this.babyCupboardJunContents.expenseCategory6}  
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
                            data: [{value: this.babyCupboardJulContents.budgetUsage}],
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
                                {value: this.babyCupboardJulContents.perCategory1, name: this.babyCupboardJulContents.expenseCategory1},
                                {value: this.babyCupboardJulContents.perCategory2, name: this.babyCupboardJulContents.expenseCategory2},
                                {value: this.babyCupboardJulContents.perCategory3, name: this.babyCupboardJulContents.expenseCategory3},
                                {value: this.babyCupboardJulContents.perCategory4, name: this.babyCupboardJulContents.expenseCategory4},
                                {value: this.babyCupboardJulContents.perCategory5, name: this.babyCupboardJulContents.expenseCategory5},
                                {value: this.babyCupboardJulContents.perCategory6, name: this.babyCupboardJulContents.expenseCategory6}  
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
                            data: [{value: this.babyCupboardAugContents.budgetUsage}],
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
                                {value: this.babyCupboardAugContents.perCategory1, name: this.babyCupboardAugContents.expenseCategory1},
                                {value: this.babyCupboardAugContents.perCategory2, name: this.babyCupboardAugContents.expenseCategory2},
                                {value: this.babyCupboardAugContents.perCategory3, name: this.babyCupboardAugContents.expenseCategory3},
                                {value: this.babyCupboardAugContents.perCategory4, name: this.babyCupboardAugContents.expenseCategory4},
                                {value: this.babyCupboardAugContents.perCategory5, name: this.babyCupboardAugContents.expenseCategory5},
                                {value: this.babyCupboardAugContents.perCategory6, name: this.babyCupboardAugContents.expenseCategory6}  
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
                            data: [{value: this.babyCupboardSepContents.budgetUsage}],
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
                                {value: this.babyCupboardSepContents.perCategory1, name: this.babyCupboardSepContents.expenseCategory1},
                                {value: this.babyCupboardSepContents.perCategory2, name: this.babyCupboardSepContents.expenseCategory2},
                                {value: this.babyCupboardSepContents.perCategory3, name: this.babyCupboardSepContents.expenseCategory3},
                                {value: this.babyCupboardSepContents.perCategory4, name: this.babyCupboardSepContents.expenseCategory4},
                                {value: this.babyCupboardSepContents.perCategory5, name: this.babyCupboardSepContents.expenseCategory5},
                                {value: this.babyCupboardSepContents.perCategory6, name: this.babyCupboardSepContents.expenseCategory6}  
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
                            data: [{value: this.babyCupboardOctContents.budgetUsage}],
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
                                {value: this.babyCupboardOctContents.perCategory1, name: this.babyCupboardOctContents.expenseCategory1},
                                {value: this.babyCupboardOctContents.perCategory2, name: this.babyCupboardOctContents.expenseCategory2},
                                {value: this.babyCupboardOctContents.perCategory3, name: this.babyCupboardOctContents.expenseCategory3},
                                {value: this.babyCupboardOctContents.perCategory4, name: this.babyCupboardOctContents.expenseCategory4},
                                {value: this.babyCupboardOctContents.perCategory5, name: this.babyCupboardOctContents.expenseCategory5},
                                {value: this.babyCupboardOctContents.perCategory6, name: this.babyCupboardOctContents.expenseCategory6}  
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
                            data: [{value: this.babyCupboardNovContents.budgetUsage}],
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
                                {value: this.babyCupboardNovContents.perCategory1, name: this.babyCupboardNovContents.expenseCategory1},
                                {value: this.babyCupboardNovContents.perCategory2, name: this.babyCupboardNovContents.expenseCategory2},
                                {value: this.babyCupboardNovContents.perCategory3, name: this.babyCupboardNovContents.expenseCategory3},
                                {value: this.babyCupboardNovContents.perCategory4, name: this.babyCupboardNovContents.expenseCategory4},
                                {value: this.babyCupboardNovContents.perCategory5, name: this.babyCupboardNovContents.expenseCategory5},
                                {value: this.babyCupboardNovContents.perCategory6, name: this.babyCupboardNovContents.expenseCategory6}  
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
                            data: [{value: this.babyCupboardDecContents.budgetUsage}],
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
                                {value: this.babyCupboardDecContents.perCategory1, name: this.babyCupboardDecContents.expenseCategory1},
                                {value: this.babyCupboardDecContents.perCategory2, name: this.babyCupboardDecContents.expenseCategory2},
                                {value: this.babyCupboardDecContents.perCategory3, name: this.babyCupboardDecContents.expenseCategory3},
                                {value: this.babyCupboardDecContents.perCategory4, name: this.babyCupboardDecContents.expenseCategory4},
                                {value: this.babyCupboardDecContents.perCategory5, name: this.babyCupboardDecContents.expenseCategory5},
                                {value: this.babyCupboardDecContents.perCategory6, name: this.babyCupboardDecContents.expenseCategory6}
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
            var docbabyCupboardJanRef = db.collection("babyCupboard").doc("january");

            docbabyCupboardJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.babyCupboardJanContents = doc.data();
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
            var docbabyCupboardFebRef = db.collection("babyCupboard").doc("february");

            docbabyCupboardFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.babyCupboardFebContents = doc.data();
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
            var docbabyCupboardMarRef = db.collection("babyCupboard").doc("march");

            docbabyCupboardMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.babyCupboardMarContents = doc.data();
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
            var docbabyCupboardAprRef = db.collection("babyCupboard").doc("april1");

            docbabyCupboardAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.babyCupboardAprContents = doc.data();
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
            var docbabyCupboardMayRef = db.collection("babyCupboard").doc("may");

            docbabyCupboardMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.babyCupboardMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docbabyCupboardJunRef = db.collection("babyCupboard").doc("june");

            docbabyCupboardJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.babyCupboardJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docbabyCupboardJulRef = db.collection("babyCupboard").doc("july");

            docbabyCupboardJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.babyCupboardJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docbabyCupboardAugRef = db.collection("babyCupboard").doc("august");

            docbabyCupboardAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.babyCupboardAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docbabyCupboardSepRef = db.collection("babyCupboard").doc("september");

            docbabyCupboardSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.babyCupboardSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docbabyCupboardOctRef = db.collection("babyCupboard").doc("october");

            docbabyCupboardOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.babyCupboardOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docbabyCupboardNovRef = db.collection("babyCupboard").doc("november");

            docbabyCupboardNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.babyCupboardNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docbabyCupboardDecRef = db.collection("babyCupboard").doc("december");

            docbabyCupboardDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.babyCupboardDecContents = doc.data();
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
              return this.babyCupboardJanContents.expenses = getRealValue(this.babyCupboardJanContents.perCategory1) + getRealValue(this.babyCupboardJanContents.perCategory2) + getRealValue(this.babyCupboardJanContents.perCategory3) + getRealValue(this.babyCupboardJanContents.perCategory4) + getRealValue(this.babyCupboardJanContents.perCategory5) + getRealValue(this.babyCupboardJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardJanContents.budgetUsage = ((getRealValue(this.babyCupboardJanContents.expenses) / getRealValue(this.babyCupboardJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardFebContents.expenses = getRealValue(this.babyCupboardFebContents.perCategory1) + getRealValue(this.babyCupboardFebContents.perCategory2) + getRealValue(this.babyCupboardFebContents.perCategory3) + getRealValue(this.babyCupboardFebContents.perCategory4) + getRealValue(this.babyCupboardFebContents.perCategory5) + getRealValue(this.babyCupboardFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardFebContents.budgetUsage = (((getRealValue(this.babyCupboardFebContents.expenses) + getRealValue(this.babyCupboardJanContents.expenses)) / getRealValue(this.babyCupboardFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardMarContents.expenses = getRealValue(this.babyCupboardMarContents.perCategory1) + getRealValue(this.babyCupboardMarContents.perCategory2) + getRealValue(this.babyCupboardMarContents.perCategory3) + getRealValue(this.babyCupboardMarContents.perCategory4) + getRealValue(this.babyCupboardMarContents.perCategory5) + getRealValue(this.babyCupboardMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardMarContents.budgetUsage = (((getRealValue(this.babyCupboardMarContents.expenses) + getRealValue(this.babyCupboardFebContents.expenses) + getRealValue(this.babyCupboardJanContents.expenses)) / getRealValue(this.babyCupboardMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardAprContents.expenses = getRealValue(this.babyCupboardAprContents.perCategory1) + getRealValue(this.babyCupboardAprContents.perCategory2) + getRealValue(this.babyCupboardAprContents.perCategory3) + getRealValue(this.babyCupboardAprContents.perCategory4) + getRealValue(this.babyCupboardAprContents.perCategory5) + getRealValue(this.babyCupboardAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardAprContents.budgetUsage = (((getRealValue(this.babyCupboardAprContents.expenses) + getRealValue(this.babyCupboardMarContents.expenses) + getRealValue(this.babyCupboardFebContents.expenses) + getRealValue(this.babyCupboardJanContents.expenses)) / getRealValue(this.babyCupboardAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardMayContents.expenses = getRealValue(this.babyCupboardMayContents.perCategory1) + getRealValue(this.babyCupboardMayContents.perCategory2) + getRealValue(this.babyCupboardMayContents.perCategory3) + getRealValue(this.babyCupboardMayContents.perCategory4) + getRealValue(this.babyCupboardMayContents.perCategory5) + getRealValue(this.babyCupboardMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardMayContents.budgetUsage = (((getRealValue(this.babyCupboardMayContents.expenses) + getRealValue(this.babyCupboardAprContents.expenses) + getRealValue(this.babyCupboardMarContents.expenses) + getRealValue(this.babyCupboardFebContents.expenses) + getRealValue(this.babyCupboardJanContents.expenses)) / getRealValue(this.babyCupboardMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardJunContents.expenses = getRealValue(this.babyCupboardJunContents.perCategory1) + getRealValue(this.babyCupboardJunContents.perCategory2) + getRealValue(this.babyCupboardJunContents.perCategory3) + getRealValue(this.babyCupboardJunContents.perCategory4) + getRealValue(this.babyCupboardJunContents.perCategory5) + getRealValue(this.babyCupboardJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardJunContents.budgetUsage = (((getRealValue(this.babyCupboardJunContents.expenses) + getRealValue(this.babyCupboardMayContents.expenses) + getRealValue(this.babyCupboardAprContents.expenses) + getRealValue(this.babyCupboardMarContents.expenses) + getRealValue(this.babyCupboardFebContents.expenses) + getRealValue(this.babyCupboardJanContents.expenses)) / getRealValue(this.babyCupboardJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardJulContents.expenses = getRealValue(this.babyCupboardJulContents.perCategory1) + getRealValue(this.babyCupboardJulContents.perCategory2) + getRealValue(this.babyCupboardJulContents.perCategory3) + getRealValue(this.babyCupboardJulContents.perCategory4) + getRealValue(this.babyCupboardJulContents.perCategory5) + getRealValue(this.babyCupboardJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardJulContents.budgetUsage = (((getRealValue(this.babyCupboardJulContents.expenses) + getRealValue(this.babyCupboardJunContents.expenses) + getRealValue(this.babyCupboardMayContents.expenses) + getRealValue(this.babyCupboardAprContents.expenses) + getRealValue(this.babyCupboardMarContents.expenses) + getRealValue(this.babyCupboardFebContents.expenses) + getRealValue(this.babyCupboardJanContents.expenses)) / getRealValue(this.babyCupboardJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardAugContents.expenses = getRealValue(this.babyCupboardAugContents.perCategory1) + getRealValue(this.babyCupboardAugContents.perCategory2) + getRealValue(this.babyCupboardAugContents.perCategory3) + getRealValue(this.babyCupboardAugContents.perCategory4) + getRealValue(this.babyCupboardAugContents.perCategory5) + getRealValue(this.babyCupboardAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardAugContents.budgetUsage = (((getRealValue(this.babyCupboardAugContents.expenses) + getRealValue(this.babyCupboardJulContents.expenses) + getRealValue(this.babyCupboardJunContents.expenses) + getRealValue(this.babyCupboardMayContents.expenses) + getRealValue(this.babyCupboardAprContents.expenses) + getRealValue(this.babyCupboardMarContents.expenses) + getRealValue(this.babyCupboardFebContents.expenses) + getRealValue(this.babyCupboardJanContents.expenses)) / getRealValue(this.babyCupboardAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardSepContents.expenses = getRealValue(this.babyCupboardSepContents.perCategory1) + getRealValue(this.babyCupboardSepContents.perCategory2) + getRealValue(this.babyCupboardSepContents.perCategory3) + getRealValue(this.babyCupboardSepContents.perCategory4) + getRealValue(this.babyCupboardSepContents.perCategory5) + getRealValue(this.babyCupboardSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardSepContents.budgetUsage = (((getRealValue(this.babyCupboardSepContents.expenses) + getRealValue(this.babyCupboardAugContents.expenses) + getRealValue(this.babyCupboardJulContents.expenses) + getRealValue(this.babyCupboardJunContents.expenses) + getRealValue(this.babyCupboardMayContents.expenses) + getRealValue(this.babyCupboardAprContents.expenses) + getRealValue(this.babyCupboardMarContents.expenses) + getRealValue(this.babyCupboardFebContents.expenses) + getRealValue(this.babyCupboardJanContents.expenses)) / getRealValue(this.babyCupboardSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardOctContents.expenses = getRealValue(this.babyCupboardOctContents.perCategory1) + getRealValue(this.babyCupboardOctContents.perCategory2) + getRealValue(this.babyCupboardOctContents.perCategory3) + getRealValue(this.babyCupboardOctContents.perCategory4) + getRealValue(this.babyCupboardOctContents.perCategory5) + getRealValue(this.babyCupboardOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardOctContents.budgetUsage = (((getRealValue(this.babyCupboardOctContents.expenses) + getRealValue(this.babyCupboardSepContents.expenses) + getRealValue(this.babyCupboardAugContents.expenses) + getRealValue(this.babyCupboardJulContents.expenses) + getRealValue(this.babyCupboardJunContents.expenses) + getRealValue(this.babyCupboardMayContents.expenses) + getRealValue(this.babyCupboardAprContents.expenses) + getRealValue(this.babyCupboardMarContents.expenses) + getRealValue(this.babyCupboardFebContents.expenses) + getRealValue(this.babyCupboardJanContents.expenses)) / getRealValue(this.babyCupboardOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardNovContents.expenses = getRealValue(this.babyCupboardNovContents.perCategory1) + getRealValue(this.babyCupboardNovContents.perCategory2) + getRealValue(this.babyCupboardNovContents.perCategory3) + getRealValue(this.babyCupboardNovContents.perCategory4) + getRealValue(this.babyCupboardNovContents.perCategory5) + getRealValue(this.babyCupboardNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardNovContents.budgetUsage = (((getRealValue(this.babyCupboardNovContents.expenses) + getRealValue(this.babyCupboardOctContents.expenses) + getRealValue(this.babyCupboardSepContents.expenses) + getRealValue(this.babyCupboardAugContents.expenses) + getRealValue(this.babyCupboardJulContents.expenses) + getRealValue(this.babyCupboardJunContents.expenses) + getRealValue(this.babyCupboardMayContents.expenses) + getRealValue(this.babyCupboardAprContents.expenses) + getRealValue(this.babyCupboardMarContents.expenses) + getRealValue(this.babyCupboardFebContents.expenses) + getRealValue(this.babyCupboardJanContents.expenses)) / getRealValue(this.babyCupboardNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardDecContents.expenses = getRealValue(this.babyCupboardDecContents.perCategory1) + getRealValue(this.babyCupboardDecContents.perCategory2) + getRealValue(this.babyCupboardDecContents.perCategory3) + getRealValue(this.babyCupboardDecContents.perCategory4) + getRealValue(this.babyCupboardDecContents.perCategory5) + getRealValue(this.babyCupboardDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.babyCupboardDecContents.budgetUsage = (((getRealValue(this.babyCupboardDecContents.expenses) + getRealValue(this.babyCupboardNovContents.expenses) + getRealValue(this.babyCupboardOctContents.expenses) + getRealValue(this.babyCupboardSepContents.expenses) + getRealValue(this.babyCupboardAugContents.expenses) + getRealValue(this.babyCupboardJulContents.expenses) + getRealValue(this.babyCupboardJunContents.expenses) + getRealValue(this.babyCupboardMayContents.expenses) + getRealValue(this.babyCupboardAprContents.expenses) + getRealValue(this.babyCupboardMarContents.expenses) + getRealValue(this.babyCupboardFebContents.expenses) + getRealValue(this.babyCupboardJanContents.expenses)) / getRealValue(this.babyCupboardDecContents.actualBudget))*100).toFixed(2)
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
