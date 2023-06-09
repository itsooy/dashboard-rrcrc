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
                              :color="(employmentSkillsJanContents.kpi1 == null)?'grey-2':(employmentSkillsJanContents.kpi1 >= '0' && employmentSkillsJanContents.kpi1 <= '29.4')?'red':(employmentSkillsJanContents.kpi1 > '29.4' && employmentSkillsJanContents.kpi1 <= '39.2')?'orange':(employmentSkillsJanContents.kpi1 > '39.2' && employmentSkillsJanContents.kpi1 < '49')?'yellow-7':(employmentSkillsJanContents.kpi1 >= '49' && employmentSkillsJanContents.kpi1 < '58.8')?'green':(employmentSkillsJanContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi2 == null)?'grey-2':(employmentSkillsJanContents.kpi2 >= '0' && employmentSkillsJanContents.kpi2 <= '53.2')?'red':(employmentSkillsJanContents.kpi2 > '53.2' && employmentSkillsJanContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJanContents.kpi2 > '70.93333333' && employmentSkillsJanContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJanContents.kpi2 >= '88.66666667' && employmentSkillsJanContents.kpi2 < '106.4')?'green':(employmentSkillsJanContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi3 == null)?'grey-2':(employmentSkillsJanContents.kpi3 >= '0' && employmentSkillsJanContents.kpi3 <= '22.6')?'red':(employmentSkillsJanContents.kpi3 > '22.6' && employmentSkillsJanContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJanContents.kpi3 > '30.13333333' && employmentSkillsJanContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJanContents.kpi3 >= '37.66666667' && employmentSkillsJanContents.kpi3 < '45.2')?'green':(employmentSkillsJanContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi4 == null)?'grey-2':(employmentSkillsJanContents.kpi4 >= '0' && employmentSkillsJanContents.kpi4 <= '4.8')?'red':(employmentSkillsJanContents.kpi4 > '4.8' && employmentSkillsJanContents.kpi4 <= '6.4')?'orange':(employmentSkillsJanContents.kpi4 > '6.4' && employmentSkillsJanContents.kpi4 < '8')?'yellow-7':(employmentSkillsJanContents.kpi4 >= '8' && employmentSkillsJanContents.kpi4 < '9.6')?'green':(employmentSkillsJanContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi4}}
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
                              :color="(employmentSkillsFebContents.kpi1 == null)?'grey-2':(employmentSkillsFebContents.kpi1 >= '0' && employmentSkillsFebContents.kpi1 <= '29.4')?'red':(employmentSkillsFebContents.kpi1 > '29.4' && employmentSkillsFebContents.kpi1 <= '39.2')?'orange':(employmentSkillsFebContents.kpi1 > '39.2' && employmentSkillsFebContents.kpi1 < '49')?'yellow-7':(employmentSkillsFebContents.kpi1 >= '49' && employmentSkillsFebContents.kpi1 < '58.8')?'green':(employmentSkillsFebContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi2 == null)?'grey-2':(employmentSkillsFebContents.kpi2 >= '0' && employmentSkillsFebContents.kpi2 <= '53.2')?'red':(employmentSkillsFebContents.kpi2 > '53.2' && employmentSkillsFebContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsFebContents.kpi2 > '70.93333333' && employmentSkillsFebContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsFebContents.kpi2 >= '88.66666667' && employmentSkillsFebContents.kpi2 < '106.4')?'green':(employmentSkillsFebContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi3 == null)?'grey-2':(employmentSkillsFebContents.kpi3 >= '0' && employmentSkillsFebContents.kpi3 <= '22.6')?'red':(employmentSkillsFebContents.kpi3 > '22.6' && employmentSkillsFebContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsFebContents.kpi3 > '30.13333333' && employmentSkillsFebContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsFebContents.kpi3 >= '37.66666667' && employmentSkillsFebContents.kpi3 < '45.2')?'green':(employmentSkillsFebContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi4 == null)?'grey-2':(employmentSkillsFebContents.kpi4 >= '0' && employmentSkillsFebContents.kpi4 <= '4.8')?'red':(employmentSkillsFebContents.kpi4 > '4.8' && employmentSkillsFebContents.kpi4 <= '6.4')?'orange':(employmentSkillsFebContents.kpi4 > '6.4' && employmentSkillsFebContents.kpi4 < '8')?'yellow-7':(employmentSkillsFebContents.kpi4 >= '8' && employmentSkillsFebContents.kpi4 < '9.6')?'green':(employmentSkillsFebContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi4}}
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
                              :color="(employmentSkillsMarContents.kpi1 == null)?'grey-2':(employmentSkillsMarContents.kpi1 >= '0' && employmentSkillsMarContents.kpi1 <= '29.4')?'red':(employmentSkillsMarContents.kpi1 > '29.4' && employmentSkillsMarContents.kpi1 <= '39.2')?'orange':(employmentSkillsMarContents.kpi1 > '39.2' && employmentSkillsMarContents.kpi1 < '49')?'yellow-7':(employmentSkillsMarContents.kpi1 >= '49' && employmentSkillsMarContents.kpi1 < '58.8')?'green':(employmentSkillsMarContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi2 == null)?'grey-2':(employmentSkillsMarContents.kpi2 >= '0' && employmentSkillsMarContents.kpi2 <= '53.2')?'red':(employmentSkillsMarContents.kpi2 > '53.2' && employmentSkillsMarContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMarContents.kpi2 > '70.93333333' && employmentSkillsMarContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMarContents.kpi2 >= '88.66666667' && employmentSkillsMarContents.kpi2 < '106.4')?'green':(employmentSkillsMarContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi3 == null)?'grey-2':(employmentSkillsMarContents.kpi3 >= '0' && employmentSkillsMarContents.kpi3 <= '22.6')?'red':(employmentSkillsMarContents.kpi3 > '22.6' && employmentSkillsMarContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMarContents.kpi3 > '30.13333333' && employmentSkillsMarContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMarContents.kpi3 >= '37.66666667' && employmentSkillsMarContents.kpi3 < '45.2')?'green':(employmentSkillsMarContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi4 == null)?'grey-2':(employmentSkillsMarContents.kpi4 >= '0' && employmentSkillsMarContents.kpi4 <= '4.8')?'red':(employmentSkillsMarContents.kpi4 > '4.8' && employmentSkillsMarContents.kpi4 <= '6.4')?'orange':(employmentSkillsMarContents.kpi4 > '6.4' && employmentSkillsMarContents.kpi4 < '8')?'yellow-7':(employmentSkillsMarContents.kpi4 >= '8' && employmentSkillsMarContents.kpi4 < '9.6')?'green':(employmentSkillsMarContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi4}}
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
                              :color="(employmentSkillsAprContents.kpi1 == null)?'grey-2':(employmentSkillsAprContents.kpi1 >= '0' && employmentSkillsAprContents.kpi1 <= '29.4')?'red':(employmentSkillsAprContents.kpi1 > '29.4' && employmentSkillsAprContents.kpi1 <= '39.2')?'orange':(employmentSkillsAprContents.kpi1 > '39.2' && employmentSkillsAprContents.kpi1 < '49')?'yellow-7':(employmentSkillsAprContents.kpi1 >= '49' && employmentSkillsAprContents.kpi1 < '58.8')?'green':(employmentSkillsAprContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi2 == null)?'grey-2':(employmentSkillsAprContents.kpi2 >= '0' && employmentSkillsAprContents.kpi2 <= '53.2')?'red':(employmentSkillsAprContents.kpi2 > '53.2' && employmentSkillsAprContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAprContents.kpi2 > '70.93333333' && employmentSkillsAprContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAprContents.kpi2 >= '88.66666667' && employmentSkillsAprContents.kpi2 < '106.4')?'green':(employmentSkillsAprContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi3 == null)?'grey-2':(employmentSkillsAprContents.kpi3 >= '0' && employmentSkillsAprContents.kpi3 <= '22.6')?'red':(employmentSkillsAprContents.kpi3 > '22.6' && employmentSkillsAprContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAprContents.kpi3 > '30.13333333' && employmentSkillsAprContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAprContents.kpi3 >= '37.66666667' && employmentSkillsAprContents.kpi3 < '45.2')?'green':(employmentSkillsAprContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi4 == null)?'grey-2':(employmentSkillsAprContents.kpi4 >= '0' && employmentSkillsAprContents.kpi4 <= '4.8')?'red':(employmentSkillsAprContents.kpi4 > '4.8' && employmentSkillsAprContents.kpi4 <= '6.4')?'orange':(employmentSkillsAprContents.kpi4 > '6.4' && employmentSkillsAprContents.kpi4 < '8')?'yellow-7':(employmentSkillsAprContents.kpi4 >= '8' && employmentSkillsAprContents.kpi4 < '9.6')?'green':(employmentSkillsAprContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi4}}
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
                              :color="(employmentSkillsMayContents.kpi1 == null)?'grey-2':(employmentSkillsMayContents.kpi1 >= '0' && employmentSkillsMayContents.kpi1 <= '29.4')?'red':(employmentSkillsMayContents.kpi1 > '29.4' && employmentSkillsMayContents.kpi1 <= '39.2')?'orange':(employmentSkillsMayContents.kpi1 > '39.2' && employmentSkillsMayContents.kpi1 < '49')?'yellow-7':(employmentSkillsMayContents.kpi1 >= '49' && employmentSkillsMayContents.kpi1 < '58.8')?'green':(employmentSkillsMayContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi2 == null)?'grey-2':(employmentSkillsMayContents.kpi2 >= '0' && employmentSkillsMayContents.kpi2 <= '53.2')?'red':(employmentSkillsMayContents.kpi2 > '53.2' && employmentSkillsMayContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMayContents.kpi2 > '70.93333333' && employmentSkillsMayContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMayContents.kpi2 >= '88.66666667' && employmentSkillsMayContents.kpi2 < '106.4')?'green':(employmentSkillsMayContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi3 == null)?'grey-2':(employmentSkillsMayContents.kpi3 >= '0' && employmentSkillsMayContents.kpi3 <= '22.6')?'red':(employmentSkillsMayContents.kpi3 > '22.6' && employmentSkillsMayContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMayContents.kpi3 > '30.13333333' && employmentSkillsMayContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMayContents.kpi3 >= '37.66666667' && employmentSkillsMayContents.kpi3 < '45.2')?'green':(employmentSkillsMayContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi4 == null)?'grey-2':(employmentSkillsMayContents.kpi4 >= '0' && employmentSkillsMayContents.kpi4 <= '4.8')?'red':(employmentSkillsMayContents.kpi4 > '4.8' && employmentSkillsMayContents.kpi4 <= '6.4')?'orange':(employmentSkillsMayContents.kpi4 > '6.4' && employmentSkillsMayContents.kpi4 < '8')?'yellow-7':(employmentSkillsMayContents.kpi4 >= '8' && employmentSkillsMayContents.kpi4 < '9.6')?'green':(employmentSkillsMayContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi4}}
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
                              :color="(employmentSkillsJunContents.kpi1 == null)?'grey-2':(employmentSkillsJunContents.kpi1 >= '0' && employmentSkillsJunContents.kpi1 <= '29.4')?'red':(employmentSkillsJunContents.kpi1 > '29.4' && employmentSkillsJunContents.kpi1 <= '39.2')?'orange':(employmentSkillsJunContents.kpi1 > '39.2' && employmentSkillsJunContents.kpi1 < '49')?'yellow-7':(employmentSkillsJunContents.kpi1 >= '49' && employmentSkillsJunContents.kpi1 < '58.8')?'green':(employmentSkillsJunContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi2 == null)?'grey-2':(employmentSkillsJunContents.kpi2 >= '0' && employmentSkillsJunContents.kpi2 <= '53.2')?'red':(employmentSkillsJunContents.kpi2 > '53.2' && employmentSkillsJunContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJunContents.kpi2 > '70.93333333' && employmentSkillsJunContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJunContents.kpi2 >= '88.66666667' && employmentSkillsJunContents.kpi2 < '106.4')?'green':(employmentSkillsJunContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi3 == null)?'grey-2':(employmentSkillsJunContents.kpi3 >= '0' && employmentSkillsJunContents.kpi3 <= '22.6')?'red':(employmentSkillsJunContents.kpi3 > '22.6' && employmentSkillsJunContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJunContents.kpi3 > '30.13333333' && employmentSkillsJunContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJunContents.kpi3 >= '37.66666667' && employmentSkillsJunContents.kpi3 < '45.2')?'green':(employmentSkillsJunContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi4 == null)?'grey-2':(employmentSkillsJunContents.kpi4 >= '0' && employmentSkillsJunContents.kpi4 <= '4.8')?'red':(employmentSkillsJunContents.kpi4 > '4.8' && employmentSkillsJunContents.kpi4 <= '6.4')?'orange':(employmentSkillsJunContents.kpi4 > '6.4' && employmentSkillsJunContents.kpi4 < '8')?'yellow-7':(employmentSkillsJunContents.kpi4 >= '8' && employmentSkillsJunContents.kpi4 < '9.6')?'green':(employmentSkillsJunContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi4}}
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
                              :color="(employmentSkillsJulContents.kpi1 == null)?'grey-2':(employmentSkillsJulContents.kpi1 >= '0' && employmentSkillsJulContents.kpi1 <= '29.4')?'red':(employmentSkillsJulContents.kpi1 > '29.4' && employmentSkillsJulContents.kpi1 <= '39.2')?'orange':(employmentSkillsJulContents.kpi1 > '39.2' && employmentSkillsJulContents.kpi1 < '49')?'yellow-7':(employmentSkillsJulContents.kpi1 >= '49' && employmentSkillsJulContents.kpi1 < '58.8')?'green':(employmentSkillsJulContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi2 == null)?'grey-2':(employmentSkillsJulContents.kpi2 >= '0' && employmentSkillsJulContents.kpi2 <= '53.2')?'red':(employmentSkillsJulContents.kpi2 > '53.2' && employmentSkillsJulContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJulContents.kpi2 > '70.93333333' && employmentSkillsJulContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJulContents.kpi2 >= '88.66666667' && employmentSkillsJulContents.kpi2 < '106.4')?'green':(employmentSkillsJulContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi3 == null)?'grey-2':(employmentSkillsJulContents.kpi3 >= '0' && employmentSkillsJulContents.kpi3 <= '22.6')?'red':(employmentSkillsJulContents.kpi3 > '22.6' && employmentSkillsJulContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJulContents.kpi3 > '30.13333333' && employmentSkillsJulContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJulContents.kpi3 >= '37.66666667' && employmentSkillsJulContents.kpi3 < '45.2')?'green':(employmentSkillsJulContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi4 == null)?'grey-2':(employmentSkillsJulContents.kpi4 >= '0' && employmentSkillsJulContents.kpi4 <= '4.8')?'red':(employmentSkillsJulContents.kpi4 > '4.8' && employmentSkillsJulContents.kpi4 <= '6.4')?'orange':(employmentSkillsJulContents.kpi4 > '6.4' && employmentSkillsJulContents.kpi4 < '8')?'yellow-7':(employmentSkillsJulContents.kpi4 >= '8' && employmentSkillsJulContents.kpi4 < '9.6')?'green':(employmentSkillsJulContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi4}}
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
                              :color="(employmentSkillsAugContents.kpi1 == null)?'grey-2':(employmentSkillsAugContents.kpi1 >= '0' && employmentSkillsAugContents.kpi1 <= '29.4')?'red':(employmentSkillsAugContents.kpi1 > '29.4' && employmentSkillsAugContents.kpi1 <= '39.2')?'orange':(employmentSkillsAugContents.kpi1 > '39.2' && employmentSkillsAugContents.kpi1 < '49')?'yellow-7':(employmentSkillsAugContents.kpi1 >= '49' && employmentSkillsAugContents.kpi1 < '58.8')?'green':(employmentSkillsAugContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi2 == null)?'grey-2':(employmentSkillsAugContents.kpi2 >= '0' && employmentSkillsAugContents.kpi2 <= '53.2')?'red':(employmentSkillsAugContents.kpi2 > '53.2' && employmentSkillsAugContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAugContents.kpi2 > '70.93333333' && employmentSkillsAugContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAugContents.kpi2 >= '88.66666667' && employmentSkillsAugContents.kpi2 < '106.4')?'green':(employmentSkillsAugContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi3 == null)?'grey-2':(employmentSkillsAugContents.kpi3 >= '0' && employmentSkillsAugContents.kpi3 <= '22.6')?'red':(employmentSkillsAugContents.kpi3 > '22.6' && employmentSkillsAugContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAugContents.kpi3 > '30.13333333' && employmentSkillsAugContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAugContents.kpi3 >= '37.66666667' && employmentSkillsAugContents.kpi3 < '45.2')?'green':(employmentSkillsAugContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi4 == null)?'grey-2':(employmentSkillsAugContents.kpi4 >= '0' && employmentSkillsAugContents.kpi4 <= '4.8')?'red':(employmentSkillsAugContents.kpi4 > '4.8' && employmentSkillsAugContents.kpi4 <= '6.4')?'orange':(employmentSkillsAugContents.kpi4 > '6.4' && employmentSkillsAugContents.kpi4 < '8')?'yellow-7':(employmentSkillsAugContents.kpi4 >= '8' && employmentSkillsAugContents.kpi4 < '9.6')?'green':(employmentSkillsAugContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi4}}
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
                              :color="(employmentSkillsSepContents.kpi1 == null)?'grey-2':(employmentSkillsSepContents.kpi1 >= '0' && employmentSkillsSepContents.kpi1 <= '29.4')?'red':(employmentSkillsSepContents.kpi1 > '29.4' && employmentSkillsSepContents.kpi1 <= '39.2')?'orange':(employmentSkillsSepContents.kpi1 > '39.2' && employmentSkillsSepContents.kpi1 < '49')?'yellow-7':(employmentSkillsSepContents.kpi1 >= '49' && employmentSkillsSepContents.kpi1 < '58.8')?'green':(employmentSkillsSepContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi2 == null)?'grey-2':(employmentSkillsSepContents.kpi2 >= '0' && employmentSkillsSepContents.kpi2 <= '53.2')?'red':(employmentSkillsSepContents.kpi2 > '53.2' && employmentSkillsSepContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsSepContents.kpi2 > '70.93333333' && employmentSkillsSepContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsSepContents.kpi2 >= '88.66666667' && employmentSkillsSepContents.kpi2 < '106.4')?'green':(employmentSkillsSepContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi3 == null)?'grey-2':(employmentSkillsSepContents.kpi3 >= '0' && employmentSkillsSepContents.kpi3 <= '22.6')?'red':(employmentSkillsSepContents.kpi3 > '22.6' && employmentSkillsSepContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsSepContents.kpi3 > '30.13333333' && employmentSkillsSepContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsSepContents.kpi3 >= '37.66666667' && employmentSkillsSepContents.kpi3 < '45.2')?'green':(employmentSkillsSepContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi4 == null)?'grey-2':(employmentSkillsSepContents.kpi4 >= '0' && employmentSkillsSepContents.kpi4 <= '4.8')?'red':(employmentSkillsSepContents.kpi4 > '4.8' && employmentSkillsSepContents.kpi4 <= '6.4')?'orange':(employmentSkillsSepContents.kpi4 > '6.4' && employmentSkillsSepContents.kpi4 < '8')?'yellow-7':(employmentSkillsSepContents.kpi4 >= '8' && employmentSkillsSepContents.kpi4 < '9.6')?'green':(employmentSkillsSepContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi4}}
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
                              :color="(employmentSkillsOctContents.kpi1 == null)?'grey-2':(employmentSkillsOctContents.kpi1 >= '0' && employmentSkillsOctContents.kpi1 <= '29.4')?'red':(employmentSkillsOctContents.kpi1 > '29.4' && employmentSkillsOctContents.kpi1 <= '39.2')?'orange':(employmentSkillsOctContents.kpi1 > '39.2' && employmentSkillsOctContents.kpi1 < '49')?'yellow-7':(employmentSkillsOctContents.kpi1 >= '49' && employmentSkillsOctContents.kpi1 < '58.8')?'green':(employmentSkillsOctContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi2 == null)?'grey-2':(employmentSkillsOctContents.kpi2 >= '0' && employmentSkillsOctContents.kpi2 <= '53.2')?'red':(employmentSkillsOctContents.kpi2 > '53.2' && employmentSkillsOctContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsOctContents.kpi2 > '70.93333333' && employmentSkillsOctContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsOctContents.kpi2 >= '88.66666667' && employmentSkillsOctContents.kpi2 < '106.4')?'green':(employmentSkillsOctContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi3 == null)?'grey-2':(employmentSkillsOctContents.kpi3 >= '0' && employmentSkillsOctContents.kpi3 <= '22.6')?'red':(employmentSkillsOctContents.kpi3 > '22.6' && employmentSkillsOctContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsOctContents.kpi3 > '30.13333333' && employmentSkillsOctContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsOctContents.kpi3 >= '37.66666667' && employmentSkillsOctContents.kpi3 < '45.2')?'green':(employmentSkillsOctContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi4 == null)?'grey-2':(employmentSkillsOctContents.kpi4 >= '0' && employmentSkillsOctContents.kpi4 <= '4.8')?'red':(employmentSkillsOctContents.kpi4 > '4.8' && employmentSkillsOctContents.kpi4 <= '6.4')?'orange':(employmentSkillsOctContents.kpi4 > '6.4' && employmentSkillsOctContents.kpi4 < '8')?'yellow-7':(employmentSkillsOctContents.kpi4 >= '8' && employmentSkillsOctContents.kpi4 < '9.6')?'green':(employmentSkillsOctContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi4}}
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
                              :color="(employmentSkillsNovContents.kpi1 == null)?'grey-2':(employmentSkillsNovContents.kpi1 >= '0' && employmentSkillsNovContents.kpi1 <= '29.4')?'red':(employmentSkillsNovContents.kpi1 > '29.4' && employmentSkillsNovContents.kpi1 <= '39.2')?'orange':(employmentSkillsNovContents.kpi1 > '39.2' && employmentSkillsNovContents.kpi1 < '49')?'yellow-7':(employmentSkillsNovContents.kpi1 >= '49' && employmentSkillsNovContents.kpi1 < '58.8')?'green':(employmentSkillsNovContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi2 == null)?'grey-2':(employmentSkillsNovContents.kpi2 >= '0' && employmentSkillsNovContents.kpi2 <= '53.2')?'red':(employmentSkillsNovContents.kpi2 > '53.2' && employmentSkillsNovContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsNovContents.kpi2 > '70.93333333' && employmentSkillsNovContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsNovContents.kpi2 >= '88.66666667' && employmentSkillsNovContents.kpi2 < '106.4')?'green':(employmentSkillsNovContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi3 == null)?'grey-2':(employmentSkillsNovContents.kpi3 >= '0' && employmentSkillsNovContents.kpi3 <= '22.6')?'red':(employmentSkillsNovContents.kpi3 > '22.6' && employmentSkillsNovContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsNovContents.kpi3 > '30.13333333' && employmentSkillsNovContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsNovContents.kpi3 >= '37.66666667' && employmentSkillsNovContents.kpi3 < '45.2')?'green':(employmentSkillsNovContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi4 == null)?'grey-2':(employmentSkillsNovContents.kpi4 >= '0' && employmentSkillsNovContents.kpi4 <= '4.8')?'red':(employmentSkillsNovContents.kpi4 > '4.8' && employmentSkillsNovContents.kpi4 <= '6.4')?'orange':(employmentSkillsNovContents.kpi4 > '6.4' && employmentSkillsNovContents.kpi4 < '8')?'yellow-7':(employmentSkillsNovContents.kpi4 >= '8' && employmentSkillsNovContents.kpi4 < '9.6')?'green':(employmentSkillsNovContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi4}}
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
                              :color="(employmentSkillsDecContents.kpi1 == null)?'grey-2':(employmentSkillsDecContents.kpi1 >= '0' && employmentSkillsDecContents.kpi1 <= '29.4')?'red':(employmentSkillsDecContents.kpi1 > '29.4' && employmentSkillsDecContents.kpi1 <= '39.2')?'orange':(employmentSkillsDecContents.kpi1 > '39.2' && employmentSkillsDecContents.kpi1 < '49')?'yellow-7':(employmentSkillsDecContents.kpi1 >= '49' && employmentSkillsDecContents.kpi1 < '58.8')?'green':(employmentSkillsDecContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi2 == null)?'grey-2':(employmentSkillsDecContents.kpi2 >= '0' && employmentSkillsDecContents.kpi2 <= '53.2')?'red':(employmentSkillsDecContents.kpi2 > '53.2' && employmentSkillsDecContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsDecContents.kpi2 > '70.93333333' && employmentSkillsDecContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsDecContents.kpi2 >= '88.66666667' && employmentSkillsDecContents.kpi2 < '106.4')?'green':(employmentSkillsDecContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi3 == null)?'grey-2':(employmentSkillsDecContents.kpi3 >= '0' && employmentSkillsDecContents.kpi3 <= '22.6')?'red':(employmentSkillsDecContents.kpi3 > '22.6' && employmentSkillsDecContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsDecContents.kpi3 > '30.13333333' && employmentSkillsDecContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsDecContents.kpi3 >= '37.66666667' && employmentSkillsDecContents.kpi3 < '45.2')?'green':(employmentSkillsDecContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi4 == null)?'grey-2':(employmentSkillsDecContents.kpi4 >= '0' && employmentSkillsDecContents.kpi4 <= '4.8')?'red':(employmentSkillsDecContents.kpi4 > '4.8' && employmentSkillsDecContents.kpi4 <= '6.4')?'orange':(employmentSkillsDecContents.kpi4 > '6.4' && employmentSkillsDecContents.kpi4 < '8')?'yellow-7':(employmentSkillsDecContents.kpi4 >= '8' && employmentSkillsDecContents.kpi4 < '9.6')?'green':(employmentSkillsDecContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi4}}
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
                              :color="(employmentSkillsJanContents.kpi1 == null)?'grey-2':(employmentSkillsJanContents.kpi1 >= '0' && employmentSkillsJanContents.kpi1 <= '29.4')?'red':(employmentSkillsJanContents.kpi1 > '29.4' && employmentSkillsJanContents.kpi1 <= '39.2')?'orange':(employmentSkillsJanContents.kpi1 > '39.2' && employmentSkillsJanContents.kpi1 < '49')?'yellow-7':(employmentSkillsJanContents.kpi1 >= '49' && employmentSkillsJanContents.kpi1 < '58.8')?'green':(employmentSkillsJanContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi2 == null)?'grey-2':(employmentSkillsJanContents.kpi2 >= '0' && employmentSkillsJanContents.kpi2 <= '53.2')?'red':(employmentSkillsJanContents.kpi2 > '53.2' && employmentSkillsJanContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJanContents.kpi2 > '70.93333333' && employmentSkillsJanContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJanContents.kpi2 >= '88.66666667' && employmentSkillsJanContents.kpi2 < '106.4')?'green':(employmentSkillsJanContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi3 == null)?'grey-2':(employmentSkillsJanContents.kpi3 >= '0' && employmentSkillsJanContents.kpi3 <= '22.6')?'red':(employmentSkillsJanContents.kpi3 > '22.6' && employmentSkillsJanContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJanContents.kpi3 > '30.13333333' && employmentSkillsJanContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJanContents.kpi3 >= '37.66666667' && employmentSkillsJanContents.kpi3 < '45.2')?'green':(employmentSkillsJanContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi4 == null)?'grey-2':(employmentSkillsJanContents.kpi4 >= '0' && employmentSkillsJanContents.kpi4 <= '4.8')?'red':(employmentSkillsJanContents.kpi4 > '4.8' && employmentSkillsJanContents.kpi4 <= '6.4')?'orange':(employmentSkillsJanContents.kpi4 > '6.4' && employmentSkillsJanContents.kpi4 < '8')?'yellow-7':(employmentSkillsJanContents.kpi4 >= '8' && employmentSkillsJanContents.kpi4 < '9.6')?'green':(employmentSkillsJanContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi4}}
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
                              :color="(employmentSkillsFebContents.kpi1 == null)?'grey-2':(employmentSkillsFebContents.kpi1 >= '0' && employmentSkillsFebContents.kpi1 <= '29.4')?'red':(employmentSkillsFebContents.kpi1 > '29.4' && employmentSkillsFebContents.kpi1 <= '39.2')?'orange':(employmentSkillsFebContents.kpi1 > '39.2' && employmentSkillsFebContents.kpi1 < '49')?'yellow-7':(employmentSkillsFebContents.kpi1 >= '49' && employmentSkillsFebContents.kpi1 < '58.8')?'green':(employmentSkillsFebContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi2 == null)?'grey-2':(employmentSkillsFebContents.kpi2 >= '0' && employmentSkillsFebContents.kpi2 <= '53.2')?'red':(employmentSkillsFebContents.kpi2 > '53.2' && employmentSkillsFebContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsFebContents.kpi2 > '70.93333333' && employmentSkillsFebContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsFebContents.kpi2 >= '88.66666667' && employmentSkillsFebContents.kpi2 < '106.4')?'green':(employmentSkillsFebContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi3 == null)?'grey-2':(employmentSkillsFebContents.kpi3 >= '0' && employmentSkillsFebContents.kpi3 <= '22.6')?'red':(employmentSkillsFebContents.kpi3 > '22.6' && employmentSkillsFebContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsFebContents.kpi3 > '30.13333333' && employmentSkillsFebContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsFebContents.kpi3 >= '37.66666667' && employmentSkillsFebContents.kpi3 < '45.2')?'green':(employmentSkillsFebContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi4 == null)?'grey-2':(employmentSkillsFebContents.kpi4 >= '0' && employmentSkillsFebContents.kpi4 <= '4.8')?'red':(employmentSkillsFebContents.kpi4 > '4.8' && employmentSkillsFebContents.kpi4 <= '6.4')?'orange':(employmentSkillsFebContents.kpi4 > '6.4' && employmentSkillsFebContents.kpi4 < '8')?'yellow-7':(employmentSkillsFebContents.kpi4 >= '8' && employmentSkillsFebContents.kpi4 < '9.6')?'green':(employmentSkillsFebContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi4}}
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
                              :color="(employmentSkillsMarContents.kpi1 == null)?'grey-2':(employmentSkillsMarContents.kpi1 >= '0' && employmentSkillsMarContents.kpi1 <= '29.4')?'red':(employmentSkillsMarContents.kpi1 > '29.4' && employmentSkillsMarContents.kpi1 <= '39.2')?'orange':(employmentSkillsMarContents.kpi1 > '39.2' && employmentSkillsMarContents.kpi1 < '49')?'yellow-7':(employmentSkillsMarContents.kpi1 >= '49' && employmentSkillsMarContents.kpi1 < '58.8')?'green':(employmentSkillsMarContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi2 == null)?'grey-2':(employmentSkillsMarContents.kpi2 >= '0' && employmentSkillsMarContents.kpi2 <= '53.2')?'red':(employmentSkillsMarContents.kpi2 > '53.2' && employmentSkillsMarContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMarContents.kpi2 > '70.93333333' && employmentSkillsMarContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMarContents.kpi2 >= '88.66666667' && employmentSkillsMarContents.kpi2 < '106.4')?'green':(employmentSkillsMarContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi3 == null)?'grey-2':(employmentSkillsMarContents.kpi3 >= '0' && employmentSkillsMarContents.kpi3 <= '22.6')?'red':(employmentSkillsMarContents.kpi3 > '22.6' && employmentSkillsMarContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMarContents.kpi3 > '30.13333333' && employmentSkillsMarContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMarContents.kpi3 >= '37.66666667' && employmentSkillsMarContents.kpi3 < '45.2')?'green':(employmentSkillsMarContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi4 == null)?'grey-2':(employmentSkillsMarContents.kpi4 >= '0' && employmentSkillsMarContents.kpi4 <= '4.8')?'red':(employmentSkillsMarContents.kpi4 > '4.8' && employmentSkillsMarContents.kpi4 <= '6.4')?'orange':(employmentSkillsMarContents.kpi4 > '6.4' && employmentSkillsMarContents.kpi4 < '8')?'yellow-7':(employmentSkillsMarContents.kpi4 >= '8' && employmentSkillsMarContents.kpi4 < '9.6')?'green':(employmentSkillsMarContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi4}}
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
                              :color="(employmentSkillsAprContents.kpi1 == null)?'grey-2':(employmentSkillsAprContents.kpi1 >= '0' && employmentSkillsAprContents.kpi1 <= '29.4')?'red':(employmentSkillsAprContents.kpi1 > '29.4' && employmentSkillsAprContents.kpi1 <= '39.2')?'orange':(employmentSkillsAprContents.kpi1 > '39.2' && employmentSkillsAprContents.kpi1 < '49')?'yellow-7':(employmentSkillsAprContents.kpi1 >= '49' && employmentSkillsAprContents.kpi1 < '58.8')?'green':(employmentSkillsAprContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi2 == null)?'grey-2':(employmentSkillsAprContents.kpi2 >= '0' && employmentSkillsAprContents.kpi2 <= '53.2')?'red':(employmentSkillsAprContents.kpi2 > '53.2' && employmentSkillsAprContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAprContents.kpi2 > '70.93333333' && employmentSkillsAprContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAprContents.kpi2 >= '88.66666667' && employmentSkillsAprContents.kpi2 < '106.4')?'green':(employmentSkillsAprContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi3 == null)?'grey-2':(employmentSkillsAprContents.kpi3 >= '0' && employmentSkillsAprContents.kpi3 <= '22.6')?'red':(employmentSkillsAprContents.kpi3 > '22.6' && employmentSkillsAprContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAprContents.kpi3 > '30.13333333' && employmentSkillsAprContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAprContents.kpi3 >= '37.66666667' && employmentSkillsAprContents.kpi3 < '45.2')?'green':(employmentSkillsAprContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi4 == null)?'grey-2':(employmentSkillsAprContents.kpi4 >= '0' && employmentSkillsAprContents.kpi4 <= '4.8')?'red':(employmentSkillsAprContents.kpi4 > '4.8' && employmentSkillsAprContents.kpi4 <= '6.4')?'orange':(employmentSkillsAprContents.kpi4 > '6.4' && employmentSkillsAprContents.kpi4 < '8')?'yellow-7':(employmentSkillsAprContents.kpi4 >= '8' && employmentSkillsAprContents.kpi4 < '9.6')?'green':(employmentSkillsAprContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi4}}
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
                              :color="(employmentSkillsMayContents.kpi1 == null)?'grey-2':(employmentSkillsMayContents.kpi1 >= '0' && employmentSkillsMayContents.kpi1 <= '29.4')?'red':(employmentSkillsMayContents.kpi1 > '29.4' && employmentSkillsMayContents.kpi1 <= '39.2')?'orange':(employmentSkillsMayContents.kpi1 > '39.2' && employmentSkillsMayContents.kpi1 < '49')?'yellow-7':(employmentSkillsMayContents.kpi1 >= '49' && employmentSkillsMayContents.kpi1 < '58.8')?'green':(employmentSkillsMayContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi2 == null)?'grey-2':(employmentSkillsMayContents.kpi2 >= '0' && employmentSkillsMayContents.kpi2 <= '53.2')?'red':(employmentSkillsMayContents.kpi2 > '53.2' && employmentSkillsMayContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMayContents.kpi2 > '70.93333333' && employmentSkillsMayContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMayContents.kpi2 >= '88.66666667' && employmentSkillsMayContents.kpi2 < '106.4')?'green':(employmentSkillsMayContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi3 == null)?'grey-2':(employmentSkillsMayContents.kpi3 >= '0' && employmentSkillsMayContents.kpi3 <= '22.6')?'red':(employmentSkillsMayContents.kpi3 > '22.6' && employmentSkillsMayContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMayContents.kpi3 > '30.13333333' && employmentSkillsMayContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMayContents.kpi3 >= '37.66666667' && employmentSkillsMayContents.kpi3 < '45.2')?'green':(employmentSkillsMayContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi4 == null)?'grey-2':(employmentSkillsMayContents.kpi4 >= '0' && employmentSkillsMayContents.kpi4 <= '4.8')?'red':(employmentSkillsMayContents.kpi4 > '4.8' && employmentSkillsMayContents.kpi4 <= '6.4')?'orange':(employmentSkillsMayContents.kpi4 > '6.4' && employmentSkillsMayContents.kpi4 < '8')?'yellow-7':(employmentSkillsMayContents.kpi4 >= '8' && employmentSkillsMayContents.kpi4 < '9.6')?'green':(employmentSkillsMayContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi4}}
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
                              :color="(employmentSkillsJunContents.kpi1 == null)?'grey-2':(employmentSkillsJunContents.kpi1 >= '0' && employmentSkillsJunContents.kpi1 <= '29.4')?'red':(employmentSkillsJunContents.kpi1 > '29.4' && employmentSkillsJunContents.kpi1 <= '39.2')?'orange':(employmentSkillsJunContents.kpi1 > '39.2' && employmentSkillsJunContents.kpi1 < '49')?'yellow-7':(employmentSkillsJunContents.kpi1 >= '49' && employmentSkillsJunContents.kpi1 < '58.8')?'green':(employmentSkillsJunContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi2 == null)?'grey-2':(employmentSkillsJunContents.kpi2 >= '0' && employmentSkillsJunContents.kpi2 <= '53.2')?'red':(employmentSkillsJunContents.kpi2 > '53.2' && employmentSkillsJunContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJunContents.kpi2 > '70.93333333' && employmentSkillsJunContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJunContents.kpi2 >= '88.66666667' && employmentSkillsJunContents.kpi2 < '106.4')?'green':(employmentSkillsJunContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi3 == null)?'grey-2':(employmentSkillsJunContents.kpi3 >= '0' && employmentSkillsJunContents.kpi3 <= '22.6')?'red':(employmentSkillsJunContents.kpi3 > '22.6' && employmentSkillsJunContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJunContents.kpi3 > '30.13333333' && employmentSkillsJunContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJunContents.kpi3 >= '37.66666667' && employmentSkillsJunContents.kpi3 < '45.2')?'green':(employmentSkillsJunContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi4 == null)?'grey-2':(employmentSkillsJunContents.kpi4 >= '0' && employmentSkillsJunContents.kpi4 <= '4.8')?'red':(employmentSkillsJunContents.kpi4 > '4.8' && employmentSkillsJunContents.kpi4 <= '6.4')?'orange':(employmentSkillsJunContents.kpi4 > '6.4' && employmentSkillsJunContents.kpi4 < '8')?'yellow-7':(employmentSkillsJunContents.kpi4 >= '8' && employmentSkillsJunContents.kpi4 < '9.6')?'green':(employmentSkillsJunContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi4}}
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
                              :color="(employmentSkillsJulContents.kpi1 == null)?'grey-2':(employmentSkillsJulContents.kpi1 >= '0' && employmentSkillsJulContents.kpi1 <= '29.4')?'red':(employmentSkillsJulContents.kpi1 > '29.4' && employmentSkillsJulContents.kpi1 <= '39.2')?'orange':(employmentSkillsJulContents.kpi1 > '39.2' && employmentSkillsJulContents.kpi1 < '49')?'yellow-7':(employmentSkillsJulContents.kpi1 >= '49' && employmentSkillsJulContents.kpi1 < '58.8')?'green':(employmentSkillsJulContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi2 == null)?'grey-2':(employmentSkillsJulContents.kpi2 >= '0' && employmentSkillsJulContents.kpi2 <= '53.2')?'red':(employmentSkillsJulContents.kpi2 > '53.2' && employmentSkillsJulContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJulContents.kpi2 > '70.93333333' && employmentSkillsJulContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJulContents.kpi2 >= '88.66666667' && employmentSkillsJulContents.kpi2 < '106.4')?'green':(employmentSkillsJulContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi3 == null)?'grey-2':(employmentSkillsJulContents.kpi3 >= '0' && employmentSkillsJulContents.kpi3 <= '22.6')?'red':(employmentSkillsJulContents.kpi3 > '22.6' && employmentSkillsJulContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJulContents.kpi3 > '30.13333333' && employmentSkillsJulContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJulContents.kpi3 >= '37.66666667' && employmentSkillsJulContents.kpi3 < '45.2')?'green':(employmentSkillsJulContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi4 == null)?'grey-2':(employmentSkillsJulContents.kpi4 >= '0' && employmentSkillsJulContents.kpi4 <= '4.8')?'red':(employmentSkillsJulContents.kpi4 > '4.8' && employmentSkillsJulContents.kpi4 <= '6.4')?'orange':(employmentSkillsJulContents.kpi4 > '6.4' && employmentSkillsJulContents.kpi4 < '8')?'yellow-7':(employmentSkillsJulContents.kpi4 >= '8' && employmentSkillsJulContents.kpi4 < '9.6')?'green':(employmentSkillsJulContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi4}}
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
                              :color="(employmentSkillsAugContents.kpi1 == null)?'grey-2':(employmentSkillsAugContents.kpi1 >= '0' && employmentSkillsAugContents.kpi1 <= '29.4')?'red':(employmentSkillsAugContents.kpi1 > '29.4' && employmentSkillsAugContents.kpi1 <= '39.2')?'orange':(employmentSkillsAugContents.kpi1 > '39.2' && employmentSkillsAugContents.kpi1 < '49')?'yellow-7':(employmentSkillsAugContents.kpi1 >= '49' && employmentSkillsAugContents.kpi1 < '58.8')?'green':(employmentSkillsAugContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi2 == null)?'grey-2':(employmentSkillsAugContents.kpi2 >= '0' && employmentSkillsAugContents.kpi2 <= '53.2')?'red':(employmentSkillsAugContents.kpi2 > '53.2' && employmentSkillsAugContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAugContents.kpi2 > '70.93333333' && employmentSkillsAugContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAugContents.kpi2 >= '88.66666667' && employmentSkillsAugContents.kpi2 < '106.4')?'green':(employmentSkillsAugContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi3 == null)?'grey-2':(employmentSkillsAugContents.kpi3 >= '0' && employmentSkillsAugContents.kpi3 <= '22.6')?'red':(employmentSkillsAugContents.kpi3 > '22.6' && employmentSkillsAugContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAugContents.kpi3 > '30.13333333' && employmentSkillsAugContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAugContents.kpi3 >= '37.66666667' && employmentSkillsAugContents.kpi3 < '45.2')?'green':(employmentSkillsAugContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi4 == null)?'grey-2':(employmentSkillsAugContents.kpi4 >= '0' && employmentSkillsAugContents.kpi4 <= '4.8')?'red':(employmentSkillsAugContents.kpi4 > '4.8' && employmentSkillsAugContents.kpi4 <= '6.4')?'orange':(employmentSkillsAugContents.kpi4 > '6.4' && employmentSkillsAugContents.kpi4 < '8')?'yellow-7':(employmentSkillsAugContents.kpi4 >= '8' && employmentSkillsAugContents.kpi4 < '9.6')?'green':(employmentSkillsAugContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi4}}
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
                              :color="(employmentSkillsSepContents.kpi1 == null)?'grey-2':(employmentSkillsSepContents.kpi1 >= '0' && employmentSkillsSepContents.kpi1 <= '29.4')?'red':(employmentSkillsSepContents.kpi1 > '29.4' && employmentSkillsSepContents.kpi1 <= '39.2')?'orange':(employmentSkillsSepContents.kpi1 > '39.2' && employmentSkillsSepContents.kpi1 < '49')?'yellow-7':(employmentSkillsSepContents.kpi1 >= '49' && employmentSkillsSepContents.kpi1 < '58.8')?'green':(employmentSkillsSepContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi2 == null)?'grey-2':(employmentSkillsSepContents.kpi2 >= '0' && employmentSkillsSepContents.kpi2 <= '53.2')?'red':(employmentSkillsSepContents.kpi2 > '53.2' && employmentSkillsSepContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsSepContents.kpi2 > '70.93333333' && employmentSkillsSepContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsSepContents.kpi2 >= '88.66666667' && employmentSkillsSepContents.kpi2 < '106.4')?'green':(employmentSkillsSepContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi3 == null)?'grey-2':(employmentSkillsSepContents.kpi3 >= '0' && employmentSkillsSepContents.kpi3 <= '22.6')?'red':(employmentSkillsSepContents.kpi3 > '22.6' && employmentSkillsSepContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsSepContents.kpi3 > '30.13333333' && employmentSkillsSepContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsSepContents.kpi3 >= '37.66666667' && employmentSkillsSepContents.kpi3 < '45.2')?'green':(employmentSkillsSepContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi4 == null)?'grey-2':(employmentSkillsSepContents.kpi4 >= '0' && employmentSkillsSepContents.kpi4 <= '4.8')?'red':(employmentSkillsSepContents.kpi4 > '4.8' && employmentSkillsSepContents.kpi4 <= '6.4')?'orange':(employmentSkillsSepContents.kpi4 > '6.4' && employmentSkillsSepContents.kpi4 < '8')?'yellow-7':(employmentSkillsSepContents.kpi4 >= '8' && employmentSkillsSepContents.kpi4 < '9.6')?'green':(employmentSkillsSepContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi4}}
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
                              :color="(employmentSkillsOctContents.kpi1 == null)?'grey-2':(employmentSkillsOctContents.kpi1 >= '0' && employmentSkillsOctContents.kpi1 <= '29.4')?'red':(employmentSkillsOctContents.kpi1 > '29.4' && employmentSkillsOctContents.kpi1 <= '39.2')?'orange':(employmentSkillsOctContents.kpi1 > '39.2' && employmentSkillsOctContents.kpi1 < '49')?'yellow-7':(employmentSkillsOctContents.kpi1 >= '49' && employmentSkillsOctContents.kpi1 < '58.8')?'green':(employmentSkillsOctContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi2 == null)?'grey-2':(employmentSkillsOctContents.kpi2 >= '0' && employmentSkillsOctContents.kpi2 <= '53.2')?'red':(employmentSkillsOctContents.kpi2 > '53.2' && employmentSkillsOctContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsOctContents.kpi2 > '70.93333333' && employmentSkillsOctContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsOctContents.kpi2 >= '88.66666667' && employmentSkillsOctContents.kpi2 < '106.4')?'green':(employmentSkillsOctContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi3 == null)?'grey-2':(employmentSkillsOctContents.kpi3 >= '0' && employmentSkillsOctContents.kpi3 <= '22.6')?'red':(employmentSkillsOctContents.kpi3 > '22.6' && employmentSkillsOctContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsOctContents.kpi3 > '30.13333333' && employmentSkillsOctContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsOctContents.kpi3 >= '37.66666667' && employmentSkillsOctContents.kpi3 < '45.2')?'green':(employmentSkillsOctContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi4 == null)?'grey-2':(employmentSkillsOctContents.kpi4 >= '0' && employmentSkillsOctContents.kpi4 <= '4.8')?'red':(employmentSkillsOctContents.kpi4 > '4.8' && employmentSkillsOctContents.kpi4 <= '6.4')?'orange':(employmentSkillsOctContents.kpi4 > '6.4' && employmentSkillsOctContents.kpi4 < '8')?'yellow-7':(employmentSkillsOctContents.kpi4 >= '8' && employmentSkillsOctContents.kpi4 < '9.6')?'green':(employmentSkillsOctContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi4}}
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
                              :color="(employmentSkillsNovContents.kpi1 == null)?'grey-2':(employmentSkillsNovContents.kpi1 >= '0' && employmentSkillsNovContents.kpi1 <= '29.4')?'red':(employmentSkillsNovContents.kpi1 > '29.4' && employmentSkillsNovContents.kpi1 <= '39.2')?'orange':(employmentSkillsNovContents.kpi1 > '39.2' && employmentSkillsNovContents.kpi1 < '49')?'yellow-7':(employmentSkillsNovContents.kpi1 >= '49' && employmentSkillsNovContents.kpi1 < '58.8')?'green':(employmentSkillsNovContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi2 == null)?'grey-2':(employmentSkillsNovContents.kpi2 >= '0' && employmentSkillsNovContents.kpi2 <= '53.2')?'red':(employmentSkillsNovContents.kpi2 > '53.2' && employmentSkillsNovContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsNovContents.kpi2 > '70.93333333' && employmentSkillsNovContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsNovContents.kpi2 >= '88.66666667' && employmentSkillsNovContents.kpi2 < '106.4')?'green':(employmentSkillsNovContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi3 == null)?'grey-2':(employmentSkillsNovContents.kpi3 >= '0' && employmentSkillsNovContents.kpi3 <= '22.6')?'red':(employmentSkillsNovContents.kpi3 > '22.6' && employmentSkillsNovContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsNovContents.kpi3 > '30.13333333' && employmentSkillsNovContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsNovContents.kpi3 >= '37.66666667' && employmentSkillsNovContents.kpi3 < '45.2')?'green':(employmentSkillsNovContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi4 == null)?'grey-2':(employmentSkillsNovContents.kpi4 >= '0' && employmentSkillsNovContents.kpi4 <= '4.8')?'red':(employmentSkillsNovContents.kpi4 > '4.8' && employmentSkillsNovContents.kpi4 <= '6.4')?'orange':(employmentSkillsNovContents.kpi4 > '6.4' && employmentSkillsNovContents.kpi4 < '8')?'yellow-7':(employmentSkillsNovContents.kpi4 >= '8' && employmentSkillsNovContents.kpi4 < '9.6')?'green':(employmentSkillsNovContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi4}}
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
                              :color="(employmentSkillsDecContents.kpi1 == null)?'grey-2':(employmentSkillsDecContents.kpi1 >= '0' && employmentSkillsDecContents.kpi1 <= '29.4')?'red':(employmentSkillsDecContents.kpi1 > '29.4' && employmentSkillsDecContents.kpi1 <= '39.2')?'orange':(employmentSkillsDecContents.kpi1 > '39.2' && employmentSkillsDecContents.kpi1 < '49')?'yellow-7':(employmentSkillsDecContents.kpi1 >= '49' && employmentSkillsDecContents.kpi1 < '58.8')?'green':(employmentSkillsDecContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi2 == null)?'grey-2':(employmentSkillsDecContents.kpi2 >= '0' && employmentSkillsDecContents.kpi2 <= '53.2')?'red':(employmentSkillsDecContents.kpi2 > '53.2' && employmentSkillsDecContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsDecContents.kpi2 > '70.93333333' && employmentSkillsDecContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsDecContents.kpi2 >= '88.66666667' && employmentSkillsDecContents.kpi2 < '106.4')?'green':(employmentSkillsDecContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi3 == null)?'grey-2':(employmentSkillsDecContents.kpi3 >= '0' && employmentSkillsDecContents.kpi3 <= '22.6')?'red':(employmentSkillsDecContents.kpi3 > '22.6' && employmentSkillsDecContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsDecContents.kpi3 > '30.13333333' && employmentSkillsDecContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsDecContents.kpi3 >= '37.66666667' && employmentSkillsDecContents.kpi3 < '45.2')?'green':(employmentSkillsDecContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi4 == null)?'grey-2':(employmentSkillsDecContents.kpi4 >= '0' && employmentSkillsDecContents.kpi4 <= '4.8')?'red':(employmentSkillsDecContents.kpi4 > '4.8' && employmentSkillsDecContents.kpi4 <= '6.4')?'orange':(employmentSkillsDecContents.kpi4 > '6.4' && employmentSkillsDecContents.kpi4 < '8')?'yellow-7':(employmentSkillsDecContents.kpi4 >= '8' && employmentSkillsDecContents.kpi4 < '9.6')?'green':(employmentSkillsDecContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi4}}
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
                              :color="(employmentSkillsJanContents.kpi1 == null)?'grey-2':(employmentSkillsJanContents.kpi1 >= '0' && employmentSkillsJanContents.kpi1 <= '29.4')?'red':(employmentSkillsJanContents.kpi1 > '29.4' && employmentSkillsJanContents.kpi1 <= '39.2')?'orange':(employmentSkillsJanContents.kpi1 > '39.2' && employmentSkillsJanContents.kpi1 < '49')?'yellow-7':(employmentSkillsJanContents.kpi1 >= '49' && employmentSkillsJanContents.kpi1 < '58.8')?'green':(employmentSkillsJanContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi2 == null)?'grey-2':(employmentSkillsJanContents.kpi2 >= '0' && employmentSkillsJanContents.kpi2 <= '53.2')?'red':(employmentSkillsJanContents.kpi2 > '53.2' && employmentSkillsJanContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJanContents.kpi2 > '70.93333333' && employmentSkillsJanContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJanContents.kpi2 >= '88.66666667' && employmentSkillsJanContents.kpi2 < '106.4')?'green':(employmentSkillsJanContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi3 == null)?'grey-2':(employmentSkillsJanContents.kpi3 >= '0' && employmentSkillsJanContents.kpi3 <= '22.6')?'red':(employmentSkillsJanContents.kpi3 > '22.6' && employmentSkillsJanContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJanContents.kpi3 > '30.13333333' && employmentSkillsJanContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJanContents.kpi3 >= '37.66666667' && employmentSkillsJanContents.kpi3 < '45.2')?'green':(employmentSkillsJanContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi4 == null)?'grey-2':(employmentSkillsJanContents.kpi4 >= '0' && employmentSkillsJanContents.kpi4 <= '4.8')?'red':(employmentSkillsJanContents.kpi4 > '4.8' && employmentSkillsJanContents.kpi4 <= '6.4')?'orange':(employmentSkillsJanContents.kpi4 > '6.4' && employmentSkillsJanContents.kpi4 < '8')?'yellow-7':(employmentSkillsJanContents.kpi4 >= '8' && employmentSkillsJanContents.kpi4 < '9.6')?'green':(employmentSkillsJanContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi4}}
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
                              :color="(employmentSkillsFebContents.kpi1 == null)?'grey-2':(employmentSkillsFebContents.kpi1 >= '0' && employmentSkillsFebContents.kpi1 <= '29.4')?'red':(employmentSkillsFebContents.kpi1 > '29.4' && employmentSkillsFebContents.kpi1 <= '39.2')?'orange':(employmentSkillsFebContents.kpi1 > '39.2' && employmentSkillsFebContents.kpi1 < '49')?'yellow-7':(employmentSkillsFebContents.kpi1 >= '49' && employmentSkillsFebContents.kpi1 < '58.8')?'green':(employmentSkillsFebContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi2 == null)?'grey-2':(employmentSkillsFebContents.kpi2 >= '0' && employmentSkillsFebContents.kpi2 <= '53.2')?'red':(employmentSkillsFebContents.kpi2 > '53.2' && employmentSkillsFebContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsFebContents.kpi2 > '70.93333333' && employmentSkillsFebContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsFebContents.kpi2 >= '88.66666667' && employmentSkillsFebContents.kpi2 < '106.4')?'green':(employmentSkillsFebContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi3 == null)?'grey-2':(employmentSkillsFebContents.kpi3 >= '0' && employmentSkillsFebContents.kpi3 <= '22.6')?'red':(employmentSkillsFebContents.kpi3 > '22.6' && employmentSkillsFebContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsFebContents.kpi3 > '30.13333333' && employmentSkillsFebContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsFebContents.kpi3 >= '37.66666667' && employmentSkillsFebContents.kpi3 < '45.2')?'green':(employmentSkillsFebContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi4 == null)?'grey-2':(employmentSkillsFebContents.kpi4 >= '0' && employmentSkillsFebContents.kpi4 <= '4.8')?'red':(employmentSkillsFebContents.kpi4 > '4.8' && employmentSkillsFebContents.kpi4 <= '6.4')?'orange':(employmentSkillsFebContents.kpi4 > '6.4' && employmentSkillsFebContents.kpi4 < '8')?'yellow-7':(employmentSkillsFebContents.kpi4 >= '8' && employmentSkillsFebContents.kpi4 < '9.6')?'green':(employmentSkillsFebContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi4}}
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
                              :color="(employmentSkillsMarContents.kpi1 == null)?'grey-2':(employmentSkillsMarContents.kpi1 >= '0' && employmentSkillsMarContents.kpi1 <= '29.4')?'red':(employmentSkillsMarContents.kpi1 > '29.4' && employmentSkillsMarContents.kpi1 <= '39.2')?'orange':(employmentSkillsMarContents.kpi1 > '39.2' && employmentSkillsMarContents.kpi1 < '49')?'yellow-7':(employmentSkillsMarContents.kpi1 >= '49' && employmentSkillsMarContents.kpi1 < '58.8')?'green':(employmentSkillsMarContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi2 == null)?'grey-2':(employmentSkillsMarContents.kpi2 >= '0' && employmentSkillsMarContents.kpi2 <= '53.2')?'red':(employmentSkillsMarContents.kpi2 > '53.2' && employmentSkillsMarContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMarContents.kpi2 > '70.93333333' && employmentSkillsMarContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMarContents.kpi2 >= '88.66666667' && employmentSkillsMarContents.kpi2 < '106.4')?'green':(employmentSkillsMarContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi3 == null)?'grey-2':(employmentSkillsMarContents.kpi3 >= '0' && employmentSkillsMarContents.kpi3 <= '22.6')?'red':(employmentSkillsMarContents.kpi3 > '22.6' && employmentSkillsMarContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMarContents.kpi3 > '30.13333333' && employmentSkillsMarContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMarContents.kpi3 >= '37.66666667' && employmentSkillsMarContents.kpi3 < '45.2')?'green':(employmentSkillsMarContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi4 == null)?'grey-2':(employmentSkillsMarContents.kpi4 >= '0' && employmentSkillsMarContents.kpi4 <= '4.8')?'red':(employmentSkillsMarContents.kpi4 > '4.8' && employmentSkillsMarContents.kpi4 <= '6.4')?'orange':(employmentSkillsMarContents.kpi4 > '6.4' && employmentSkillsMarContents.kpi4 < '8')?'yellow-7':(employmentSkillsMarContents.kpi4 >= '8' && employmentSkillsMarContents.kpi4 < '9.6')?'green':(employmentSkillsMarContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi4}}
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
                              :color="(employmentSkillsAprContents.kpi1 == null)?'grey-2':(employmentSkillsAprContents.kpi1 >= '0' && employmentSkillsAprContents.kpi1 <= '29.4')?'red':(employmentSkillsAprContents.kpi1 > '29.4' && employmentSkillsAprContents.kpi1 <= '39.2')?'orange':(employmentSkillsAprContents.kpi1 > '39.2' && employmentSkillsAprContents.kpi1 < '49')?'yellow-7':(employmentSkillsAprContents.kpi1 >= '49' && employmentSkillsAprContents.kpi1 < '58.8')?'green':(employmentSkillsAprContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi2 == null)?'grey-2':(employmentSkillsAprContents.kpi2 >= '0' && employmentSkillsAprContents.kpi2 <= '53.2')?'red':(employmentSkillsAprContents.kpi2 > '53.2' && employmentSkillsAprContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAprContents.kpi2 > '70.93333333' && employmentSkillsAprContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAprContents.kpi2 >= '88.66666667' && employmentSkillsAprContents.kpi2 < '106.4')?'green':(employmentSkillsAprContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi3 == null)?'grey-2':(employmentSkillsAprContents.kpi3 >= '0' && employmentSkillsAprContents.kpi3 <= '22.6')?'red':(employmentSkillsAprContents.kpi3 > '22.6' && employmentSkillsAprContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAprContents.kpi3 > '30.13333333' && employmentSkillsAprContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAprContents.kpi3 >= '37.66666667' && employmentSkillsAprContents.kpi3 < '45.2')?'green':(employmentSkillsAprContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi4 == null)?'grey-2':(employmentSkillsAprContents.kpi4 >= '0' && employmentSkillsAprContents.kpi4 <= '4.8')?'red':(employmentSkillsAprContents.kpi4 > '4.8' && employmentSkillsAprContents.kpi4 <= '6.4')?'orange':(employmentSkillsAprContents.kpi4 > '6.4' && employmentSkillsAprContents.kpi4 < '8')?'yellow-7':(employmentSkillsAprContents.kpi4 >= '8' && employmentSkillsAprContents.kpi4 < '9.6')?'green':(employmentSkillsAprContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi4}}
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
                              :color="(employmentSkillsMayContents.kpi1 == null)?'grey-2':(employmentSkillsMayContents.kpi1 >= '0' && employmentSkillsMayContents.kpi1 <= '29.4')?'red':(employmentSkillsMayContents.kpi1 > '29.4' && employmentSkillsMayContents.kpi1 <= '39.2')?'orange':(employmentSkillsMayContents.kpi1 > '39.2' && employmentSkillsMayContents.kpi1 < '49')?'yellow-7':(employmentSkillsMayContents.kpi1 >= '49' && employmentSkillsMayContents.kpi1 < '58.8')?'green':(employmentSkillsMayContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi2 == null)?'grey-2':(employmentSkillsMayContents.kpi2 >= '0' && employmentSkillsMayContents.kpi2 <= '53.2')?'red':(employmentSkillsMayContents.kpi2 > '53.2' && employmentSkillsMayContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMayContents.kpi2 > '70.93333333' && employmentSkillsMayContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMayContents.kpi2 >= '88.66666667' && employmentSkillsMayContents.kpi2 < '106.4')?'green':(employmentSkillsMayContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi3 == null)?'grey-2':(employmentSkillsMayContents.kpi3 >= '0' && employmentSkillsMayContents.kpi3 <= '22.6')?'red':(employmentSkillsMayContents.kpi3 > '22.6' && employmentSkillsMayContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMayContents.kpi3 > '30.13333333' && employmentSkillsMayContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMayContents.kpi3 >= '37.66666667' && employmentSkillsMayContents.kpi3 < '45.2')?'green':(employmentSkillsMayContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi4 == null)?'grey-2':(employmentSkillsMayContents.kpi4 >= '0' && employmentSkillsMayContents.kpi4 <= '4.8')?'red':(employmentSkillsMayContents.kpi4 > '4.8' && employmentSkillsMayContents.kpi4 <= '6.4')?'orange':(employmentSkillsMayContents.kpi4 > '6.4' && employmentSkillsMayContents.kpi4 < '8')?'yellow-7':(employmentSkillsMayContents.kpi4 >= '8' && employmentSkillsMayContents.kpi4 < '9.6')?'green':(employmentSkillsMayContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi4}}
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
                              :color="(employmentSkillsJunContents.kpi1 == null)?'grey-2':(employmentSkillsJunContents.kpi1 >= '0' && employmentSkillsJunContents.kpi1 <= '29.4')?'red':(employmentSkillsJunContents.kpi1 > '29.4' && employmentSkillsJunContents.kpi1 <= '39.2')?'orange':(employmentSkillsJunContents.kpi1 > '39.2' && employmentSkillsJunContents.kpi1 < '49')?'yellow-7':(employmentSkillsJunContents.kpi1 >= '49' && employmentSkillsJunContents.kpi1 < '58.8')?'green':(employmentSkillsJunContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi2 == null)?'grey-2':(employmentSkillsJunContents.kpi2 >= '0' && employmentSkillsJunContents.kpi2 <= '53.2')?'red':(employmentSkillsJunContents.kpi2 > '53.2' && employmentSkillsJunContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJunContents.kpi2 > '70.93333333' && employmentSkillsJunContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJunContents.kpi2 >= '88.66666667' && employmentSkillsJunContents.kpi2 < '106.4')?'green':(employmentSkillsJunContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi3 == null)?'grey-2':(employmentSkillsJunContents.kpi3 >= '0' && employmentSkillsJunContents.kpi3 <= '22.6')?'red':(employmentSkillsJunContents.kpi3 > '22.6' && employmentSkillsJunContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJunContents.kpi3 > '30.13333333' && employmentSkillsJunContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJunContents.kpi3 >= '37.66666667' && employmentSkillsJunContents.kpi3 < '45.2')?'green':(employmentSkillsJunContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi4 == null)?'grey-2':(employmentSkillsJunContents.kpi4 >= '0' && employmentSkillsJunContents.kpi4 <= '4.8')?'red':(employmentSkillsJunContents.kpi4 > '4.8' && employmentSkillsJunContents.kpi4 <= '6.4')?'orange':(employmentSkillsJunContents.kpi4 > '6.4' && employmentSkillsJunContents.kpi4 < '8')?'yellow-7':(employmentSkillsJunContents.kpi4 >= '8' && employmentSkillsJunContents.kpi4 < '9.6')?'green':(employmentSkillsJunContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi4}}
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
                              :color="(employmentSkillsJulContents.kpi1 == null)?'grey-2':(employmentSkillsJulContents.kpi1 >= '0' && employmentSkillsJulContents.kpi1 <= '29.4')?'red':(employmentSkillsJulContents.kpi1 > '29.4' && employmentSkillsJulContents.kpi1 <= '39.2')?'orange':(employmentSkillsJulContents.kpi1 > '39.2' && employmentSkillsJulContents.kpi1 < '49')?'yellow-7':(employmentSkillsJulContents.kpi1 >= '49' && employmentSkillsJulContents.kpi1 < '58.8')?'green':(employmentSkillsJulContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi2 == null)?'grey-2':(employmentSkillsJulContents.kpi2 >= '0' && employmentSkillsJulContents.kpi2 <= '53.2')?'red':(employmentSkillsJulContents.kpi2 > '53.2' && employmentSkillsJulContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJulContents.kpi2 > '70.93333333' && employmentSkillsJulContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJulContents.kpi2 >= '88.66666667' && employmentSkillsJulContents.kpi2 < '106.4')?'green':(employmentSkillsJulContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi3 == null)?'grey-2':(employmentSkillsJulContents.kpi3 >= '0' && employmentSkillsJulContents.kpi3 <= '22.6')?'red':(employmentSkillsJulContents.kpi3 > '22.6' && employmentSkillsJulContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJulContents.kpi3 > '30.13333333' && employmentSkillsJulContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJulContents.kpi3 >= '37.66666667' && employmentSkillsJulContents.kpi3 < '45.2')?'green':(employmentSkillsJulContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi4 == null)?'grey-2':(employmentSkillsJulContents.kpi4 >= '0' && employmentSkillsJulContents.kpi4 <= '4.8')?'red':(employmentSkillsJulContents.kpi4 > '4.8' && employmentSkillsJulContents.kpi4 <= '6.4')?'orange':(employmentSkillsJulContents.kpi4 > '6.4' && employmentSkillsJulContents.kpi4 < '8')?'yellow-7':(employmentSkillsJulContents.kpi4 >= '8' && employmentSkillsJulContents.kpi4 < '9.6')?'green':(employmentSkillsJulContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi4}}
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
                              :color="(employmentSkillsAugContents.kpi1 == null)?'grey-2':(employmentSkillsAugContents.kpi1 >= '0' && employmentSkillsAugContents.kpi1 <= '29.4')?'red':(employmentSkillsAugContents.kpi1 > '29.4' && employmentSkillsAugContents.kpi1 <= '39.2')?'orange':(employmentSkillsAugContents.kpi1 > '39.2' && employmentSkillsAugContents.kpi1 < '49')?'yellow-7':(employmentSkillsAugContents.kpi1 >= '49' && employmentSkillsAugContents.kpi1 < '58.8')?'green':(employmentSkillsAugContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi2 == null)?'grey-2':(employmentSkillsAugContents.kpi2 >= '0' && employmentSkillsAugContents.kpi2 <= '53.2')?'red':(employmentSkillsAugContents.kpi2 > '53.2' && employmentSkillsAugContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAugContents.kpi2 > '70.93333333' && employmentSkillsAugContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAugContents.kpi2 >= '88.66666667' && employmentSkillsAugContents.kpi2 < '106.4')?'green':(employmentSkillsAugContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi3 == null)?'grey-2':(employmentSkillsAugContents.kpi3 >= '0' && employmentSkillsAugContents.kpi3 <= '22.6')?'red':(employmentSkillsAugContents.kpi3 > '22.6' && employmentSkillsAugContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAugContents.kpi3 > '30.13333333' && employmentSkillsAugContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAugContents.kpi3 >= '37.66666667' && employmentSkillsAugContents.kpi3 < '45.2')?'green':(employmentSkillsAugContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi4 == null)?'grey-2':(employmentSkillsAugContents.kpi4 >= '0' && employmentSkillsAugContents.kpi4 <= '4.8')?'red':(employmentSkillsAugContents.kpi4 > '4.8' && employmentSkillsAugContents.kpi4 <= '6.4')?'orange':(employmentSkillsAugContents.kpi4 > '6.4' && employmentSkillsAugContents.kpi4 < '8')?'yellow-7':(employmentSkillsAugContents.kpi4 >= '8' && employmentSkillsAugContents.kpi4 < '9.6')?'green':(employmentSkillsAugContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi4}}
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
                              :color="(employmentSkillsSepContents.kpi1 == null)?'grey-2':(employmentSkillsSepContents.kpi1 >= '0' && employmentSkillsSepContents.kpi1 <= '29.4')?'red':(employmentSkillsSepContents.kpi1 > '29.4' && employmentSkillsSepContents.kpi1 <= '39.2')?'orange':(employmentSkillsSepContents.kpi1 > '39.2' && employmentSkillsSepContents.kpi1 < '49')?'yellow-7':(employmentSkillsSepContents.kpi1 >= '49' && employmentSkillsSepContents.kpi1 < '58.8')?'green':(employmentSkillsSepContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi2 == null)?'grey-2':(employmentSkillsSepContents.kpi2 >= '0' && employmentSkillsSepContents.kpi2 <= '53.2')?'red':(employmentSkillsSepContents.kpi2 > '53.2' && employmentSkillsSepContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsSepContents.kpi2 > '70.93333333' && employmentSkillsSepContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsSepContents.kpi2 >= '88.66666667' && employmentSkillsSepContents.kpi2 < '106.4')?'green':(employmentSkillsSepContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi3 == null)?'grey-2':(employmentSkillsSepContents.kpi3 >= '0' && employmentSkillsSepContents.kpi3 <= '22.6')?'red':(employmentSkillsSepContents.kpi3 > '22.6' && employmentSkillsSepContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsSepContents.kpi3 > '30.13333333' && employmentSkillsSepContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsSepContents.kpi3 >= '37.66666667' && employmentSkillsSepContents.kpi3 < '45.2')?'green':(employmentSkillsSepContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi4 == null)?'grey-2':(employmentSkillsSepContents.kpi4 >= '0' && employmentSkillsSepContents.kpi4 <= '4.8')?'red':(employmentSkillsSepContents.kpi4 > '4.8' && employmentSkillsSepContents.kpi4 <= '6.4')?'orange':(employmentSkillsSepContents.kpi4 > '6.4' && employmentSkillsSepContents.kpi4 < '8')?'yellow-7':(employmentSkillsSepContents.kpi4 >= '8' && employmentSkillsSepContents.kpi4 < '9.6')?'green':(employmentSkillsSepContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi4}}
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
                              :color="(employmentSkillsOctContents.kpi1 == null)?'grey-2':(employmentSkillsOctContents.kpi1 >= '0' && employmentSkillsOctContents.kpi1 <= '29.4')?'red':(employmentSkillsOctContents.kpi1 > '29.4' && employmentSkillsOctContents.kpi1 <= '39.2')?'orange':(employmentSkillsOctContents.kpi1 > '39.2' && employmentSkillsOctContents.kpi1 < '49')?'yellow-7':(employmentSkillsOctContents.kpi1 >= '49' && employmentSkillsOctContents.kpi1 < '58.8')?'green':(employmentSkillsOctContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi2 == null)?'grey-2':(employmentSkillsOctContents.kpi2 >= '0' && employmentSkillsOctContents.kpi2 <= '53.2')?'red':(employmentSkillsOctContents.kpi2 > '53.2' && employmentSkillsOctContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsOctContents.kpi2 > '70.93333333' && employmentSkillsOctContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsOctContents.kpi2 >= '88.66666667' && employmentSkillsOctContents.kpi2 < '106.4')?'green':(employmentSkillsOctContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi3 == null)?'grey-2':(employmentSkillsOctContents.kpi3 >= '0' && employmentSkillsOctContents.kpi3 <= '22.6')?'red':(employmentSkillsOctContents.kpi3 > '22.6' && employmentSkillsOctContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsOctContents.kpi3 > '30.13333333' && employmentSkillsOctContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsOctContents.kpi3 >= '37.66666667' && employmentSkillsOctContents.kpi3 < '45.2')?'green':(employmentSkillsOctContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi4 == null)?'grey-2':(employmentSkillsOctContents.kpi4 >= '0' && employmentSkillsOctContents.kpi4 <= '4.8')?'red':(employmentSkillsOctContents.kpi4 > '4.8' && employmentSkillsOctContents.kpi4 <= '6.4')?'orange':(employmentSkillsOctContents.kpi4 > '6.4' && employmentSkillsOctContents.kpi4 < '8')?'yellow-7':(employmentSkillsOctContents.kpi4 >= '8' && employmentSkillsOctContents.kpi4 < '9.6')?'green':(employmentSkillsOctContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi4}}
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
                              :color="(employmentSkillsNovContents.kpi1 == null)?'grey-2':(employmentSkillsNovContents.kpi1 >= '0' && employmentSkillsNovContents.kpi1 <= '29.4')?'red':(employmentSkillsNovContents.kpi1 > '29.4' && employmentSkillsNovContents.kpi1 <= '39.2')?'orange':(employmentSkillsNovContents.kpi1 > '39.2' && employmentSkillsNovContents.kpi1 < '49')?'yellow-7':(employmentSkillsNovContents.kpi1 >= '49' && employmentSkillsNovContents.kpi1 < '58.8')?'green':(employmentSkillsNovContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi2 == null)?'grey-2':(employmentSkillsNovContents.kpi2 >= '0' && employmentSkillsNovContents.kpi2 <= '53.2')?'red':(employmentSkillsNovContents.kpi2 > '53.2' && employmentSkillsNovContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsNovContents.kpi2 > '70.93333333' && employmentSkillsNovContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsNovContents.kpi2 >= '88.66666667' && employmentSkillsNovContents.kpi2 < '106.4')?'green':(employmentSkillsNovContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi3 == null)?'grey-2':(employmentSkillsNovContents.kpi3 >= '0' && employmentSkillsNovContents.kpi3 <= '22.6')?'red':(employmentSkillsNovContents.kpi3 > '22.6' && employmentSkillsNovContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsNovContents.kpi3 > '30.13333333' && employmentSkillsNovContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsNovContents.kpi3 >= '37.66666667' && employmentSkillsNovContents.kpi3 < '45.2')?'green':(employmentSkillsNovContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi4 == null)?'grey-2':(employmentSkillsNovContents.kpi4 >= '0' && employmentSkillsNovContents.kpi4 <= '4.8')?'red':(employmentSkillsNovContents.kpi4 > '4.8' && employmentSkillsNovContents.kpi4 <= '6.4')?'orange':(employmentSkillsNovContents.kpi4 > '6.4' && employmentSkillsNovContents.kpi4 < '8')?'yellow-7':(employmentSkillsNovContents.kpi4 >= '8' && employmentSkillsNovContents.kpi4 < '9.6')?'green':(employmentSkillsNovContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi4}}
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
                              :color="(employmentSkillsDecContents.kpi1 == null)?'grey-2':(employmentSkillsDecContents.kpi1 >= '0' && employmentSkillsDecContents.kpi1 <= '29.4')?'red':(employmentSkillsDecContents.kpi1 > '29.4' && employmentSkillsDecContents.kpi1 <= '39.2')?'orange':(employmentSkillsDecContents.kpi1 > '39.2' && employmentSkillsDecContents.kpi1 < '49')?'yellow-7':(employmentSkillsDecContents.kpi1 >= '49' && employmentSkillsDecContents.kpi1 < '58.8')?'green':(employmentSkillsDecContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi2 == null)?'grey-2':(employmentSkillsDecContents.kpi2 >= '0' && employmentSkillsDecContents.kpi2 <= '53.2')?'red':(employmentSkillsDecContents.kpi2 > '53.2' && employmentSkillsDecContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsDecContents.kpi2 > '70.93333333' && employmentSkillsDecContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsDecContents.kpi2 >= '88.66666667' && employmentSkillsDecContents.kpi2 < '106.4')?'green':(employmentSkillsDecContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi3 == null)?'grey-2':(employmentSkillsDecContents.kpi3 >= '0' && employmentSkillsDecContents.kpi3 <= '22.6')?'red':(employmentSkillsDecContents.kpi3 > '22.6' && employmentSkillsDecContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsDecContents.kpi3 > '30.13333333' && employmentSkillsDecContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsDecContents.kpi3 >= '37.66666667' && employmentSkillsDecContents.kpi3 < '45.2')?'green':(employmentSkillsDecContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi4 == null)?'grey-2':(employmentSkillsDecContents.kpi4 >= '0' && employmentSkillsDecContents.kpi4 <= '4.8')?'red':(employmentSkillsDecContents.kpi4 > '4.8' && employmentSkillsDecContents.kpi4 <= '6.4')?'orange':(employmentSkillsDecContents.kpi4 > '6.4' && employmentSkillsDecContents.kpi4 < '8')?'yellow-7':(employmentSkillsDecContents.kpi4 >= '8' && employmentSkillsDecContents.kpi4 < '9.6')?'green':(employmentSkillsDecContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi4}}
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
                              :color="(employmentSkillsJanContents.kpi1 == null)?'grey-2':(employmentSkillsJanContents.kpi1 >= '0' && employmentSkillsJanContents.kpi1 <= '29.4')?'red':(employmentSkillsJanContents.kpi1 > '29.4' && employmentSkillsJanContents.kpi1 <= '39.2')?'orange':(employmentSkillsJanContents.kpi1 > '39.2' && employmentSkillsJanContents.kpi1 < '49')?'yellow-7':(employmentSkillsJanContents.kpi1 >= '49' && employmentSkillsJanContents.kpi1 < '58.8')?'green':(employmentSkillsJanContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi2 == null)?'grey-2':(employmentSkillsJanContents.kpi2 >= '0' && employmentSkillsJanContents.kpi2 <= '53.2')?'red':(employmentSkillsJanContents.kpi2 > '53.2' && employmentSkillsJanContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJanContents.kpi2 > '70.93333333' && employmentSkillsJanContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJanContents.kpi2 >= '88.66666667' && employmentSkillsJanContents.kpi2 < '106.4')?'green':(employmentSkillsJanContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi3 == null)?'grey-2':(employmentSkillsJanContents.kpi3 >= '0' && employmentSkillsJanContents.kpi3 <= '22.6')?'red':(employmentSkillsJanContents.kpi3 > '22.6' && employmentSkillsJanContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJanContents.kpi3 > '30.13333333' && employmentSkillsJanContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJanContents.kpi3 >= '37.66666667' && employmentSkillsJanContents.kpi3 < '45.2')?'green':(employmentSkillsJanContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi4 == null)?'grey-2':(employmentSkillsJanContents.kpi4 >= '0' && employmentSkillsJanContents.kpi4 <= '4.8')?'red':(employmentSkillsJanContents.kpi4 > '4.8' && employmentSkillsJanContents.kpi4 <= '6.4')?'orange':(employmentSkillsJanContents.kpi4 > '6.4' && employmentSkillsJanContents.kpi4 < '8')?'yellow-7':(employmentSkillsJanContents.kpi4 >= '8' && employmentSkillsJanContents.kpi4 < '9.6')?'green':(employmentSkillsJanContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi4}}
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
                              :color="(employmentSkillsFebContents.kpi1 == null)?'grey-2':(employmentSkillsFebContents.kpi1 >= '0' && employmentSkillsFebContents.kpi1 <= '29.4')?'red':(employmentSkillsFebContents.kpi1 > '29.4' && employmentSkillsFebContents.kpi1 <= '39.2')?'orange':(employmentSkillsFebContents.kpi1 > '39.2' && employmentSkillsFebContents.kpi1 < '49')?'yellow-7':(employmentSkillsFebContents.kpi1 >= '49' && employmentSkillsFebContents.kpi1 < '58.8')?'green':(employmentSkillsFebContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi2 == null)?'grey-2':(employmentSkillsFebContents.kpi2 >= '0' && employmentSkillsFebContents.kpi2 <= '53.2')?'red':(employmentSkillsFebContents.kpi2 > '53.2' && employmentSkillsFebContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsFebContents.kpi2 > '70.93333333' && employmentSkillsFebContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsFebContents.kpi2 >= '88.66666667' && employmentSkillsFebContents.kpi2 < '106.4')?'green':(employmentSkillsFebContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi3 == null)?'grey-2':(employmentSkillsFebContents.kpi3 >= '0' && employmentSkillsFebContents.kpi3 <= '22.6')?'red':(employmentSkillsFebContents.kpi3 > '22.6' && employmentSkillsFebContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsFebContents.kpi3 > '30.13333333' && employmentSkillsFebContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsFebContents.kpi3 >= '37.66666667' && employmentSkillsFebContents.kpi3 < '45.2')?'green':(employmentSkillsFebContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi4 == null)?'grey-2':(employmentSkillsFebContents.kpi4 >= '0' && employmentSkillsFebContents.kpi4 <= '4.8')?'red':(employmentSkillsFebContents.kpi4 > '4.8' && employmentSkillsFebContents.kpi4 <= '6.4')?'orange':(employmentSkillsFebContents.kpi4 > '6.4' && employmentSkillsFebContents.kpi4 < '8')?'yellow-7':(employmentSkillsFebContents.kpi4 >= '8' && employmentSkillsFebContents.kpi4 < '9.6')?'green':(employmentSkillsFebContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi4}}
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
                              :color="(employmentSkillsMarContents.kpi1 == null)?'grey-2':(employmentSkillsMarContents.kpi1 >= '0' && employmentSkillsMarContents.kpi1 <= '29.4')?'red':(employmentSkillsMarContents.kpi1 > '29.4' && employmentSkillsMarContents.kpi1 <= '39.2')?'orange':(employmentSkillsMarContents.kpi1 > '39.2' && employmentSkillsMarContents.kpi1 < '49')?'yellow-7':(employmentSkillsMarContents.kpi1 >= '49' && employmentSkillsMarContents.kpi1 < '58.8')?'green':(employmentSkillsMarContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi2 == null)?'grey-2':(employmentSkillsMarContents.kpi2 >= '0' && employmentSkillsMarContents.kpi2 <= '53.2')?'red':(employmentSkillsMarContents.kpi2 > '53.2' && employmentSkillsMarContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMarContents.kpi2 > '70.93333333' && employmentSkillsMarContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMarContents.kpi2 >= '88.66666667' && employmentSkillsMarContents.kpi2 < '106.4')?'green':(employmentSkillsMarContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi3 == null)?'grey-2':(employmentSkillsMarContents.kpi3 >= '0' && employmentSkillsMarContents.kpi3 <= '22.6')?'red':(employmentSkillsMarContents.kpi3 > '22.6' && employmentSkillsMarContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMarContents.kpi3 > '30.13333333' && employmentSkillsMarContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMarContents.kpi3 >= '37.66666667' && employmentSkillsMarContents.kpi3 < '45.2')?'green':(employmentSkillsMarContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi4 == null)?'grey-2':(employmentSkillsMarContents.kpi4 >= '0' && employmentSkillsMarContents.kpi4 <= '4.8')?'red':(employmentSkillsMarContents.kpi4 > '4.8' && employmentSkillsMarContents.kpi4 <= '6.4')?'orange':(employmentSkillsMarContents.kpi4 > '6.4' && employmentSkillsMarContents.kpi4 < '8')?'yellow-7':(employmentSkillsMarContents.kpi4 >= '8' && employmentSkillsMarContents.kpi4 < '9.6')?'green':(employmentSkillsMarContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi4}}
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
                              :color="(employmentSkillsAprContents.kpi1 == null)?'grey-2':(employmentSkillsAprContents.kpi1 >= '0' && employmentSkillsAprContents.kpi1 <= '29.4')?'red':(employmentSkillsAprContents.kpi1 > '29.4' && employmentSkillsAprContents.kpi1 <= '39.2')?'orange':(employmentSkillsAprContents.kpi1 > '39.2' && employmentSkillsAprContents.kpi1 < '49')?'yellow-7':(employmentSkillsAprContents.kpi1 >= '49' && employmentSkillsAprContents.kpi1 < '58.8')?'green':(employmentSkillsAprContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi2 == null)?'grey-2':(employmentSkillsAprContents.kpi2 >= '0' && employmentSkillsAprContents.kpi2 <= '53.2')?'red':(employmentSkillsAprContents.kpi2 > '53.2' && employmentSkillsAprContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAprContents.kpi2 > '70.93333333' && employmentSkillsAprContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAprContents.kpi2 >= '88.66666667' && employmentSkillsAprContents.kpi2 < '106.4')?'green':(employmentSkillsAprContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi3 == null)?'grey-2':(employmentSkillsAprContents.kpi3 >= '0' && employmentSkillsAprContents.kpi3 <= '22.6')?'red':(employmentSkillsAprContents.kpi3 > '22.6' && employmentSkillsAprContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAprContents.kpi3 > '30.13333333' && employmentSkillsAprContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAprContents.kpi3 >= '37.66666667' && employmentSkillsAprContents.kpi3 < '45.2')?'green':(employmentSkillsAprContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi4 == null)?'grey-2':(employmentSkillsAprContents.kpi4 >= '0' && employmentSkillsAprContents.kpi4 <= '4.8')?'red':(employmentSkillsAprContents.kpi4 > '4.8' && employmentSkillsAprContents.kpi4 <= '6.4')?'orange':(employmentSkillsAprContents.kpi4 > '6.4' && employmentSkillsAprContents.kpi4 < '8')?'yellow-7':(employmentSkillsAprContents.kpi4 >= '8' && employmentSkillsAprContents.kpi4 < '9.6')?'green':(employmentSkillsAprContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi4}}
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
                              :color="(employmentSkillsMayContents.kpi1 == null)?'grey-2':(employmentSkillsMayContents.kpi1 >= '0' && employmentSkillsMayContents.kpi1 <= '29.4')?'red':(employmentSkillsMayContents.kpi1 > '29.4' && employmentSkillsMayContents.kpi1 <= '39.2')?'orange':(employmentSkillsMayContents.kpi1 > '39.2' && employmentSkillsMayContents.kpi1 < '49')?'yellow-7':(employmentSkillsMayContents.kpi1 >= '49' && employmentSkillsMayContents.kpi1 < '58.8')?'green':(employmentSkillsMayContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi2 == null)?'grey-2':(employmentSkillsMayContents.kpi2 >= '0' && employmentSkillsMayContents.kpi2 <= '53.2')?'red':(employmentSkillsMayContents.kpi2 > '53.2' && employmentSkillsMayContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMayContents.kpi2 > '70.93333333' && employmentSkillsMayContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMayContents.kpi2 >= '88.66666667' && employmentSkillsMayContents.kpi2 < '106.4')?'green':(employmentSkillsMayContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi3 == null)?'grey-2':(employmentSkillsMayContents.kpi3 >= '0' && employmentSkillsMayContents.kpi3 <= '22.6')?'red':(employmentSkillsMayContents.kpi3 > '22.6' && employmentSkillsMayContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMayContents.kpi3 > '30.13333333' && employmentSkillsMayContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMayContents.kpi3 >= '37.66666667' && employmentSkillsMayContents.kpi3 < '45.2')?'green':(employmentSkillsMayContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi4 == null)?'grey-2':(employmentSkillsMayContents.kpi4 >= '0' && employmentSkillsMayContents.kpi4 <= '4.8')?'red':(employmentSkillsMayContents.kpi4 > '4.8' && employmentSkillsMayContents.kpi4 <= '6.4')?'orange':(employmentSkillsMayContents.kpi4 > '6.4' && employmentSkillsMayContents.kpi4 < '8')?'yellow-7':(employmentSkillsMayContents.kpi4 >= '8' && employmentSkillsMayContents.kpi4 < '9.6')?'green':(employmentSkillsMayContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi4}}
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
                              :color="(employmentSkillsJunContents.kpi1 == null)?'grey-2':(employmentSkillsJunContents.kpi1 >= '0' && employmentSkillsJunContents.kpi1 <= '29.4')?'red':(employmentSkillsJunContents.kpi1 > '29.4' && employmentSkillsJunContents.kpi1 <= '39.2')?'orange':(employmentSkillsJunContents.kpi1 > '39.2' && employmentSkillsJunContents.kpi1 < '49')?'yellow-7':(employmentSkillsJunContents.kpi1 >= '49' && employmentSkillsJunContents.kpi1 < '58.8')?'green':(employmentSkillsJunContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi2 == null)?'grey-2':(employmentSkillsJunContents.kpi2 >= '0' && employmentSkillsJunContents.kpi2 <= '53.2')?'red':(employmentSkillsJunContents.kpi2 > '53.2' && employmentSkillsJunContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJunContents.kpi2 > '70.93333333' && employmentSkillsJunContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJunContents.kpi2 >= '88.66666667' && employmentSkillsJunContents.kpi2 < '106.4')?'green':(employmentSkillsJunContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi3 == null)?'grey-2':(employmentSkillsJunContents.kpi3 >= '0' && employmentSkillsJunContents.kpi3 <= '22.6')?'red':(employmentSkillsJunContents.kpi3 > '22.6' && employmentSkillsJunContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJunContents.kpi3 > '30.13333333' && employmentSkillsJunContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJunContents.kpi3 >= '37.66666667' && employmentSkillsJunContents.kpi3 < '45.2')?'green':(employmentSkillsJunContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi4 == null)?'grey-2':(employmentSkillsJunContents.kpi4 >= '0' && employmentSkillsJunContents.kpi4 <= '4.8')?'red':(employmentSkillsJunContents.kpi4 > '4.8' && employmentSkillsJunContents.kpi4 <= '6.4')?'orange':(employmentSkillsJunContents.kpi4 > '6.4' && employmentSkillsJunContents.kpi4 < '8')?'yellow-7':(employmentSkillsJunContents.kpi4 >= '8' && employmentSkillsJunContents.kpi4 < '9.6')?'green':(employmentSkillsJunContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi4}}
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
                              :color="(employmentSkillsJulContents.kpi1 == null)?'grey-2':(employmentSkillsJulContents.kpi1 >= '0' && employmentSkillsJulContents.kpi1 <= '29.4')?'red':(employmentSkillsJulContents.kpi1 > '29.4' && employmentSkillsJulContents.kpi1 <= '39.2')?'orange':(employmentSkillsJulContents.kpi1 > '39.2' && employmentSkillsJulContents.kpi1 < '49')?'yellow-7':(employmentSkillsJulContents.kpi1 >= '49' && employmentSkillsJulContents.kpi1 < '58.8')?'green':(employmentSkillsJulContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi2 == null)?'grey-2':(employmentSkillsJulContents.kpi2 >= '0' && employmentSkillsJulContents.kpi2 <= '53.2')?'red':(employmentSkillsJulContents.kpi2 > '53.2' && employmentSkillsJulContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJulContents.kpi2 > '70.93333333' && employmentSkillsJulContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJulContents.kpi2 >= '88.66666667' && employmentSkillsJulContents.kpi2 < '106.4')?'green':(employmentSkillsJulContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi3 == null)?'grey-2':(employmentSkillsJulContents.kpi3 >= '0' && employmentSkillsJulContents.kpi3 <= '22.6')?'red':(employmentSkillsJulContents.kpi3 > '22.6' && employmentSkillsJulContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJulContents.kpi3 > '30.13333333' && employmentSkillsJulContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJulContents.kpi3 >= '37.66666667' && employmentSkillsJulContents.kpi3 < '45.2')?'green':(employmentSkillsJulContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi4 == null)?'grey-2':(employmentSkillsJulContents.kpi4 >= '0' && employmentSkillsJulContents.kpi4 <= '4.8')?'red':(employmentSkillsJulContents.kpi4 > '4.8' && employmentSkillsJulContents.kpi4 <= '6.4')?'orange':(employmentSkillsJulContents.kpi4 > '6.4' && employmentSkillsJulContents.kpi4 < '8')?'yellow-7':(employmentSkillsJulContents.kpi4 >= '8' && employmentSkillsJulContents.kpi4 < '9.6')?'green':(employmentSkillsJulContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi4}}
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
                              :color="(employmentSkillsAugContents.kpi1 == null)?'grey-2':(employmentSkillsAugContents.kpi1 >= '0' && employmentSkillsAugContents.kpi1 <= '29.4')?'red':(employmentSkillsAugContents.kpi1 > '29.4' && employmentSkillsAugContents.kpi1 <= '39.2')?'orange':(employmentSkillsAugContents.kpi1 > '39.2' && employmentSkillsAugContents.kpi1 < '49')?'yellow-7':(employmentSkillsAugContents.kpi1 >= '49' && employmentSkillsAugContents.kpi1 < '58.8')?'green':(employmentSkillsAugContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi2 == null)?'grey-2':(employmentSkillsAugContents.kpi2 >= '0' && employmentSkillsAugContents.kpi2 <= '53.2')?'red':(employmentSkillsAugContents.kpi2 > '53.2' && employmentSkillsAugContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAugContents.kpi2 > '70.93333333' && employmentSkillsAugContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAugContents.kpi2 >= '88.66666667' && employmentSkillsAugContents.kpi2 < '106.4')?'green':(employmentSkillsAugContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi3 == null)?'grey-2':(employmentSkillsAugContents.kpi3 >= '0' && employmentSkillsAugContents.kpi3 <= '22.6')?'red':(employmentSkillsAugContents.kpi3 > '22.6' && employmentSkillsAugContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAugContents.kpi3 > '30.13333333' && employmentSkillsAugContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAugContents.kpi3 >= '37.66666667' && employmentSkillsAugContents.kpi3 < '45.2')?'green':(employmentSkillsAugContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi4 == null)?'grey-2':(employmentSkillsAugContents.kpi4 >= '0' && employmentSkillsAugContents.kpi4 <= '4.8')?'red':(employmentSkillsAugContents.kpi4 > '4.8' && employmentSkillsAugContents.kpi4 <= '6.4')?'orange':(employmentSkillsAugContents.kpi4 > '6.4' && employmentSkillsAugContents.kpi4 < '8')?'yellow-7':(employmentSkillsAugContents.kpi4 >= '8' && employmentSkillsAugContents.kpi4 < '9.6')?'green':(employmentSkillsAugContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi4}}
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
                              :color="(employmentSkillsSepContents.kpi1 == null)?'grey-2':(employmentSkillsSepContents.kpi1 >= '0' && employmentSkillsSepContents.kpi1 <= '29.4')?'red':(employmentSkillsSepContents.kpi1 > '29.4' && employmentSkillsSepContents.kpi1 <= '39.2')?'orange':(employmentSkillsSepContents.kpi1 > '39.2' && employmentSkillsSepContents.kpi1 < '49')?'yellow-7':(employmentSkillsSepContents.kpi1 >= '49' && employmentSkillsSepContents.kpi1 < '58.8')?'green':(employmentSkillsSepContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi2 == null)?'grey-2':(employmentSkillsSepContents.kpi2 >= '0' && employmentSkillsSepContents.kpi2 <= '53.2')?'red':(employmentSkillsSepContents.kpi2 > '53.2' && employmentSkillsSepContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsSepContents.kpi2 > '70.93333333' && employmentSkillsSepContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsSepContents.kpi2 >= '88.66666667' && employmentSkillsSepContents.kpi2 < '106.4')?'green':(employmentSkillsSepContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi3 == null)?'grey-2':(employmentSkillsSepContents.kpi3 >= '0' && employmentSkillsSepContents.kpi3 <= '22.6')?'red':(employmentSkillsSepContents.kpi3 > '22.6' && employmentSkillsSepContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsSepContents.kpi3 > '30.13333333' && employmentSkillsSepContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsSepContents.kpi3 >= '37.66666667' && employmentSkillsSepContents.kpi3 < '45.2')?'green':(employmentSkillsSepContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi4 == null)?'grey-2':(employmentSkillsSepContents.kpi4 >= '0' && employmentSkillsSepContents.kpi4 <= '4.8')?'red':(employmentSkillsSepContents.kpi4 > '4.8' && employmentSkillsSepContents.kpi4 <= '6.4')?'orange':(employmentSkillsSepContents.kpi4 > '6.4' && employmentSkillsSepContents.kpi4 < '8')?'yellow-7':(employmentSkillsSepContents.kpi4 >= '8' && employmentSkillsSepContents.kpi4 < '9.6')?'green':(employmentSkillsSepContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi4}}
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
                              :color="(employmentSkillsOctContents.kpi1 == null)?'grey-2':(employmentSkillsOctContents.kpi1 >= '0' && employmentSkillsOctContents.kpi1 <= '29.4')?'red':(employmentSkillsOctContents.kpi1 > '29.4' && employmentSkillsOctContents.kpi1 <= '39.2')?'orange':(employmentSkillsOctContents.kpi1 > '39.2' && employmentSkillsOctContents.kpi1 < '49')?'yellow-7':(employmentSkillsOctContents.kpi1 >= '49' && employmentSkillsOctContents.kpi1 < '58.8')?'green':(employmentSkillsOctContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi2 == null)?'grey-2':(employmentSkillsOctContents.kpi2 >= '0' && employmentSkillsOctContents.kpi2 <= '53.2')?'red':(employmentSkillsOctContents.kpi2 > '53.2' && employmentSkillsOctContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsOctContents.kpi2 > '70.93333333' && employmentSkillsOctContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsOctContents.kpi2 >= '88.66666667' && employmentSkillsOctContents.kpi2 < '106.4')?'green':(employmentSkillsOctContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi3 == null)?'grey-2':(employmentSkillsOctContents.kpi3 >= '0' && employmentSkillsOctContents.kpi3 <= '22.6')?'red':(employmentSkillsOctContents.kpi3 > '22.6' && employmentSkillsOctContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsOctContents.kpi3 > '30.13333333' && employmentSkillsOctContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsOctContents.kpi3 >= '37.66666667' && employmentSkillsOctContents.kpi3 < '45.2')?'green':(employmentSkillsOctContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi4 == null)?'grey-2':(employmentSkillsOctContents.kpi4 >= '0' && employmentSkillsOctContents.kpi4 <= '4.8')?'red':(employmentSkillsOctContents.kpi4 > '4.8' && employmentSkillsOctContents.kpi4 <= '6.4')?'orange':(employmentSkillsOctContents.kpi4 > '6.4' && employmentSkillsOctContents.kpi4 < '8')?'yellow-7':(employmentSkillsOctContents.kpi4 >= '8' && employmentSkillsOctContents.kpi4 < '9.6')?'green':(employmentSkillsOctContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi4}}
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
                              :color="(employmentSkillsNovContents.kpi1 == null)?'grey-2':(employmentSkillsNovContents.kpi1 >= '0' && employmentSkillsNovContents.kpi1 <= '29.4')?'red':(employmentSkillsNovContents.kpi1 > '29.4' && employmentSkillsNovContents.kpi1 <= '39.2')?'orange':(employmentSkillsNovContents.kpi1 > '39.2' && employmentSkillsNovContents.kpi1 < '49')?'yellow-7':(employmentSkillsNovContents.kpi1 >= '49' && employmentSkillsNovContents.kpi1 < '58.8')?'green':(employmentSkillsNovContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi2 == null)?'grey-2':(employmentSkillsNovContents.kpi2 >= '0' && employmentSkillsNovContents.kpi2 <= '53.2')?'red':(employmentSkillsNovContents.kpi2 > '53.2' && employmentSkillsNovContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsNovContents.kpi2 > '70.93333333' && employmentSkillsNovContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsNovContents.kpi2 >= '88.66666667' && employmentSkillsNovContents.kpi2 < '106.4')?'green':(employmentSkillsNovContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi3 == null)?'grey-2':(employmentSkillsNovContents.kpi3 >= '0' && employmentSkillsNovContents.kpi3 <= '22.6')?'red':(employmentSkillsNovContents.kpi3 > '22.6' && employmentSkillsNovContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsNovContents.kpi3 > '30.13333333' && employmentSkillsNovContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsNovContents.kpi3 >= '37.66666667' && employmentSkillsNovContents.kpi3 < '45.2')?'green':(employmentSkillsNovContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi4 == null)?'grey-2':(employmentSkillsNovContents.kpi4 >= '0' && employmentSkillsNovContents.kpi4 <= '4.8')?'red':(employmentSkillsNovContents.kpi4 > '4.8' && employmentSkillsNovContents.kpi4 <= '6.4')?'orange':(employmentSkillsNovContents.kpi4 > '6.4' && employmentSkillsNovContents.kpi4 < '8')?'yellow-7':(employmentSkillsNovContents.kpi4 >= '8' && employmentSkillsNovContents.kpi4 < '9.6')?'green':(employmentSkillsNovContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi4}}
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
                              :color="(employmentSkillsDecContents.kpi1 == null)?'grey-2':(employmentSkillsDecContents.kpi1 >= '0' && employmentSkillsDecContents.kpi1 <= '29.4')?'red':(employmentSkillsDecContents.kpi1 > '29.4' && employmentSkillsDecContents.kpi1 <= '39.2')?'orange':(employmentSkillsDecContents.kpi1 > '39.2' && employmentSkillsDecContents.kpi1 < '49')?'yellow-7':(employmentSkillsDecContents.kpi1 >= '49' && employmentSkillsDecContents.kpi1 < '58.8')?'green':(employmentSkillsDecContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi2 == null)?'grey-2':(employmentSkillsDecContents.kpi2 >= '0' && employmentSkillsDecContents.kpi2 <= '53.2')?'red':(employmentSkillsDecContents.kpi2 > '53.2' && employmentSkillsDecContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsDecContents.kpi2 > '70.93333333' && employmentSkillsDecContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsDecContents.kpi2 >= '88.66666667' && employmentSkillsDecContents.kpi2 < '106.4')?'green':(employmentSkillsDecContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi3 == null)?'grey-2':(employmentSkillsDecContents.kpi3 >= '0' && employmentSkillsDecContents.kpi3 <= '22.6')?'red':(employmentSkillsDecContents.kpi3 > '22.6' && employmentSkillsDecContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsDecContents.kpi3 > '30.13333333' && employmentSkillsDecContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsDecContents.kpi3 >= '37.66666667' && employmentSkillsDecContents.kpi3 < '45.2')?'green':(employmentSkillsDecContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi4 == null)?'grey-2':(employmentSkillsDecContents.kpi4 >= '0' && employmentSkillsDecContents.kpi4 <= '4.8')?'red':(employmentSkillsDecContents.kpi4 > '4.8' && employmentSkillsDecContents.kpi4 <= '6.4')?'orange':(employmentSkillsDecContents.kpi4 > '6.4' && employmentSkillsDecContents.kpi4 < '8')?'yellow-7':(employmentSkillsDecContents.kpi4 >= '8' && employmentSkillsDecContents.kpi4 < '9.6')?'green':(employmentSkillsDecContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi4}}
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
                              :color="(employmentSkillsJanContents.kpi1 == null)?'grey-2':(employmentSkillsJanContents.kpi1 >= '0' && employmentSkillsJanContents.kpi1 <= '29.4')?'red':(employmentSkillsJanContents.kpi1 > '29.4' && employmentSkillsJanContents.kpi1 <= '39.2')?'orange':(employmentSkillsJanContents.kpi1 > '39.2' && employmentSkillsJanContents.kpi1 < '49')?'yellow-7':(employmentSkillsJanContents.kpi1 >= '49' && employmentSkillsJanContents.kpi1 < '58.8')?'green':(employmentSkillsJanContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi2 == null)?'grey-2':(employmentSkillsJanContents.kpi2 >= '0' && employmentSkillsJanContents.kpi2 <= '53.2')?'red':(employmentSkillsJanContents.kpi2 > '53.2' && employmentSkillsJanContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJanContents.kpi2 > '70.93333333' && employmentSkillsJanContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJanContents.kpi2 >= '88.66666667' && employmentSkillsJanContents.kpi2 < '106.4')?'green':(employmentSkillsJanContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi3 == null)?'grey-2':(employmentSkillsJanContents.kpi3 >= '0' && employmentSkillsJanContents.kpi3 <= '22.6')?'red':(employmentSkillsJanContents.kpi3 > '22.6' && employmentSkillsJanContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJanContents.kpi3 > '30.13333333' && employmentSkillsJanContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJanContents.kpi3 >= '37.66666667' && employmentSkillsJanContents.kpi3 < '45.2')?'green':(employmentSkillsJanContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi4 == null)?'grey-2':(employmentSkillsJanContents.kpi4 >= '0' && employmentSkillsJanContents.kpi4 <= '4.8')?'red':(employmentSkillsJanContents.kpi4 > '4.8' && employmentSkillsJanContents.kpi4 <= '6.4')?'orange':(employmentSkillsJanContents.kpi4 > '6.4' && employmentSkillsJanContents.kpi4 < '8')?'yellow-7':(employmentSkillsJanContents.kpi4 >= '8' && employmentSkillsJanContents.kpi4 < '9.6')?'green':(employmentSkillsJanContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi4}}
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
                              :color="(employmentSkillsFebContents.kpi1 == null)?'grey-2':(employmentSkillsFebContents.kpi1 >= '0' && employmentSkillsFebContents.kpi1 <= '29.4')?'red':(employmentSkillsFebContents.kpi1 > '29.4' && employmentSkillsFebContents.kpi1 <= '39.2')?'orange':(employmentSkillsFebContents.kpi1 > '39.2' && employmentSkillsFebContents.kpi1 < '49')?'yellow-7':(employmentSkillsFebContents.kpi1 >= '49' && employmentSkillsFebContents.kpi1 < '58.8')?'green':(employmentSkillsFebContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi2 == null)?'grey-2':(employmentSkillsFebContents.kpi2 >= '0' && employmentSkillsFebContents.kpi2 <= '53.2')?'red':(employmentSkillsFebContents.kpi2 > '53.2' && employmentSkillsFebContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsFebContents.kpi2 > '70.93333333' && employmentSkillsFebContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsFebContents.kpi2 >= '88.66666667' && employmentSkillsFebContents.kpi2 < '106.4')?'green':(employmentSkillsFebContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi3 == null)?'grey-2':(employmentSkillsFebContents.kpi3 >= '0' && employmentSkillsFebContents.kpi3 <= '22.6')?'red':(employmentSkillsFebContents.kpi3 > '22.6' && employmentSkillsFebContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsFebContents.kpi3 > '30.13333333' && employmentSkillsFebContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsFebContents.kpi3 >= '37.66666667' && employmentSkillsFebContents.kpi3 < '45.2')?'green':(employmentSkillsFebContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi4 == null)?'grey-2':(employmentSkillsFebContents.kpi4 >= '0' && employmentSkillsFebContents.kpi4 <= '4.8')?'red':(employmentSkillsFebContents.kpi4 > '4.8' && employmentSkillsFebContents.kpi4 <= '6.4')?'orange':(employmentSkillsFebContents.kpi4 > '6.4' && employmentSkillsFebContents.kpi4 < '8')?'yellow-7':(employmentSkillsFebContents.kpi4 >= '8' && employmentSkillsFebContents.kpi4 < '9.6')?'green':(employmentSkillsFebContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi4}}
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
                              :color="(employmentSkillsMarContents.kpi1 == null)?'grey-2':(employmentSkillsMarContents.kpi1 >= '0' && employmentSkillsMarContents.kpi1 <= '29.4')?'red':(employmentSkillsMarContents.kpi1 > '29.4' && employmentSkillsMarContents.kpi1 <= '39.2')?'orange':(employmentSkillsMarContents.kpi1 > '39.2' && employmentSkillsMarContents.kpi1 < '49')?'yellow-7':(employmentSkillsMarContents.kpi1 >= '49' && employmentSkillsMarContents.kpi1 < '58.8')?'green':(employmentSkillsMarContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi2 == null)?'grey-2':(employmentSkillsMarContents.kpi2 >= '0' && employmentSkillsMarContents.kpi2 <= '53.2')?'red':(employmentSkillsMarContents.kpi2 > '53.2' && employmentSkillsMarContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMarContents.kpi2 > '70.93333333' && employmentSkillsMarContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMarContents.kpi2 >= '88.66666667' && employmentSkillsMarContents.kpi2 < '106.4')?'green':(employmentSkillsMarContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi3 == null)?'grey-2':(employmentSkillsMarContents.kpi3 >= '0' && employmentSkillsMarContents.kpi3 <= '22.6')?'red':(employmentSkillsMarContents.kpi3 > '22.6' && employmentSkillsMarContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMarContents.kpi3 > '30.13333333' && employmentSkillsMarContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMarContents.kpi3 >= '37.66666667' && employmentSkillsMarContents.kpi3 < '45.2')?'green':(employmentSkillsMarContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi4 == null)?'grey-2':(employmentSkillsMarContents.kpi4 >= '0' && employmentSkillsMarContents.kpi4 <= '4.8')?'red':(employmentSkillsMarContents.kpi4 > '4.8' && employmentSkillsMarContents.kpi4 <= '6.4')?'orange':(employmentSkillsMarContents.kpi4 > '6.4' && employmentSkillsMarContents.kpi4 < '8')?'yellow-7':(employmentSkillsMarContents.kpi4 >= '8' && employmentSkillsMarContents.kpi4 < '9.6')?'green':(employmentSkillsMarContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi4}}
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
                              :color="(employmentSkillsAprContents.kpi1 == null)?'grey-2':(employmentSkillsAprContents.kpi1 >= '0' && employmentSkillsAprContents.kpi1 <= '29.4')?'red':(employmentSkillsAprContents.kpi1 > '29.4' && employmentSkillsAprContents.kpi1 <= '39.2')?'orange':(employmentSkillsAprContents.kpi1 > '39.2' && employmentSkillsAprContents.kpi1 < '49')?'yellow-7':(employmentSkillsAprContents.kpi1 >= '49' && employmentSkillsAprContents.kpi1 < '58.8')?'green':(employmentSkillsAprContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi2 == null)?'grey-2':(employmentSkillsAprContents.kpi2 >= '0' && employmentSkillsAprContents.kpi2 <= '53.2')?'red':(employmentSkillsAprContents.kpi2 > '53.2' && employmentSkillsAprContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAprContents.kpi2 > '70.93333333' && employmentSkillsAprContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAprContents.kpi2 >= '88.66666667' && employmentSkillsAprContents.kpi2 < '106.4')?'green':(employmentSkillsAprContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi3 == null)?'grey-2':(employmentSkillsAprContents.kpi3 >= '0' && employmentSkillsAprContents.kpi3 <= '22.6')?'red':(employmentSkillsAprContents.kpi3 > '22.6' && employmentSkillsAprContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAprContents.kpi3 > '30.13333333' && employmentSkillsAprContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAprContents.kpi3 >= '37.66666667' && employmentSkillsAprContents.kpi3 < '45.2')?'green':(employmentSkillsAprContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi4 == null)?'grey-2':(employmentSkillsAprContents.kpi4 >= '0' && employmentSkillsAprContents.kpi4 <= '4.8')?'red':(employmentSkillsAprContents.kpi4 > '4.8' && employmentSkillsAprContents.kpi4 <= '6.4')?'orange':(employmentSkillsAprContents.kpi4 > '6.4' && employmentSkillsAprContents.kpi4 < '8')?'yellow-7':(employmentSkillsAprContents.kpi4 >= '8' && employmentSkillsAprContents.kpi4 < '9.6')?'green':(employmentSkillsAprContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi4}}
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
                              :color="(employmentSkillsMayContents.kpi1 == null)?'grey-2':(employmentSkillsMayContents.kpi1 >= '0' && employmentSkillsMayContents.kpi1 <= '29.4')?'red':(employmentSkillsMayContents.kpi1 > '29.4' && employmentSkillsMayContents.kpi1 <= '39.2')?'orange':(employmentSkillsMayContents.kpi1 > '39.2' && employmentSkillsMayContents.kpi1 < '49')?'yellow-7':(employmentSkillsMayContents.kpi1 >= '49' && employmentSkillsMayContents.kpi1 < '58.8')?'green':(employmentSkillsMayContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi2 == null)?'grey-2':(employmentSkillsMayContents.kpi2 >= '0' && employmentSkillsMayContents.kpi2 <= '53.2')?'red':(employmentSkillsMayContents.kpi2 > '53.2' && employmentSkillsMayContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMayContents.kpi2 > '70.93333333' && employmentSkillsMayContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMayContents.kpi2 >= '88.66666667' && employmentSkillsMayContents.kpi2 < '106.4')?'green':(employmentSkillsMayContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi3 == null)?'grey-2':(employmentSkillsMayContents.kpi3 >= '0' && employmentSkillsMayContents.kpi3 <= '22.6')?'red':(employmentSkillsMayContents.kpi3 > '22.6' && employmentSkillsMayContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMayContents.kpi3 > '30.13333333' && employmentSkillsMayContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMayContents.kpi3 >= '37.66666667' && employmentSkillsMayContents.kpi3 < '45.2')?'green':(employmentSkillsMayContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi4 == null)?'grey-2':(employmentSkillsMayContents.kpi4 >= '0' && employmentSkillsMayContents.kpi4 <= '4.8')?'red':(employmentSkillsMayContents.kpi4 > '4.8' && employmentSkillsMayContents.kpi4 <= '6.4')?'orange':(employmentSkillsMayContents.kpi4 > '6.4' && employmentSkillsMayContents.kpi4 < '8')?'yellow-7':(employmentSkillsMayContents.kpi4 >= '8' && employmentSkillsMayContents.kpi4 < '9.6')?'green':(employmentSkillsMayContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi4}}
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
                              :color="(employmentSkillsJunContents.kpi1 == null)?'grey-2':(employmentSkillsJunContents.kpi1 >= '0' && employmentSkillsJunContents.kpi1 <= '29.4')?'red':(employmentSkillsJunContents.kpi1 > '29.4' && employmentSkillsJunContents.kpi1 <= '39.2')?'orange':(employmentSkillsJunContents.kpi1 > '39.2' && employmentSkillsJunContents.kpi1 < '49')?'yellow-7':(employmentSkillsJunContents.kpi1 >= '49' && employmentSkillsJunContents.kpi1 < '58.8')?'green':(employmentSkillsJunContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi2 == null)?'grey-2':(employmentSkillsJunContents.kpi2 >= '0' && employmentSkillsJunContents.kpi2 <= '53.2')?'red':(employmentSkillsJunContents.kpi2 > '53.2' && employmentSkillsJunContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJunContents.kpi2 > '70.93333333' && employmentSkillsJunContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJunContents.kpi2 >= '88.66666667' && employmentSkillsJunContents.kpi2 < '106.4')?'green':(employmentSkillsJunContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi3 == null)?'grey-2':(employmentSkillsJunContents.kpi3 >= '0' && employmentSkillsJunContents.kpi3 <= '22.6')?'red':(employmentSkillsJunContents.kpi3 > '22.6' && employmentSkillsJunContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJunContents.kpi3 > '30.13333333' && employmentSkillsJunContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJunContents.kpi3 >= '37.66666667' && employmentSkillsJunContents.kpi3 < '45.2')?'green':(employmentSkillsJunContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi4 == null)?'grey-2':(employmentSkillsJunContents.kpi4 >= '0' && employmentSkillsJunContents.kpi4 <= '4.8')?'red':(employmentSkillsJunContents.kpi4 > '4.8' && employmentSkillsJunContents.kpi4 <= '6.4')?'orange':(employmentSkillsJunContents.kpi4 > '6.4' && employmentSkillsJunContents.kpi4 < '8')?'yellow-7':(employmentSkillsJunContents.kpi4 >= '8' && employmentSkillsJunContents.kpi4 < '9.6')?'green':(employmentSkillsJunContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi4}}
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
                              :color="(employmentSkillsJulContents.kpi1 == null)?'grey-2':(employmentSkillsJulContents.kpi1 >= '0' && employmentSkillsJulContents.kpi1 <= '29.4')?'red':(employmentSkillsJulContents.kpi1 > '29.4' && employmentSkillsJulContents.kpi1 <= '39.2')?'orange':(employmentSkillsJulContents.kpi1 > '39.2' && employmentSkillsJulContents.kpi1 < '49')?'yellow-7':(employmentSkillsJulContents.kpi1 >= '49' && employmentSkillsJulContents.kpi1 < '58.8')?'green':(employmentSkillsJulContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi2 == null)?'grey-2':(employmentSkillsJulContents.kpi2 >= '0' && employmentSkillsJulContents.kpi2 <= '53.2')?'red':(employmentSkillsJulContents.kpi2 > '53.2' && employmentSkillsJulContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJulContents.kpi2 > '70.93333333' && employmentSkillsJulContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJulContents.kpi2 >= '88.66666667' && employmentSkillsJulContents.kpi2 < '106.4')?'green':(employmentSkillsJulContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi3 == null)?'grey-2':(employmentSkillsJulContents.kpi3 >= '0' && employmentSkillsJulContents.kpi3 <= '22.6')?'red':(employmentSkillsJulContents.kpi3 > '22.6' && employmentSkillsJulContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJulContents.kpi3 > '30.13333333' && employmentSkillsJulContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJulContents.kpi3 >= '37.66666667' && employmentSkillsJulContents.kpi3 < '45.2')?'green':(employmentSkillsJulContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi4 == null)?'grey-2':(employmentSkillsJulContents.kpi4 >= '0' && employmentSkillsJulContents.kpi4 <= '4.8')?'red':(employmentSkillsJulContents.kpi4 > '4.8' && employmentSkillsJulContents.kpi4 <= '6.4')?'orange':(employmentSkillsJulContents.kpi4 > '6.4' && employmentSkillsJulContents.kpi4 < '8')?'yellow-7':(employmentSkillsJulContents.kpi4 >= '8' && employmentSkillsJulContents.kpi4 < '9.6')?'green':(employmentSkillsJulContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi4}}
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
                              :color="(employmentSkillsAugContents.kpi1 == null)?'grey-2':(employmentSkillsAugContents.kpi1 >= '0' && employmentSkillsAugContents.kpi1 <= '29.4')?'red':(employmentSkillsAugContents.kpi1 > '29.4' && employmentSkillsAugContents.kpi1 <= '39.2')?'orange':(employmentSkillsAugContents.kpi1 > '39.2' && employmentSkillsAugContents.kpi1 < '49')?'yellow-7':(employmentSkillsAugContents.kpi1 >= '49' && employmentSkillsAugContents.kpi1 < '58.8')?'green':(employmentSkillsAugContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi2 == null)?'grey-2':(employmentSkillsAugContents.kpi2 >= '0' && employmentSkillsAugContents.kpi2 <= '53.2')?'red':(employmentSkillsAugContents.kpi2 > '53.2' && employmentSkillsAugContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAugContents.kpi2 > '70.93333333' && employmentSkillsAugContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAugContents.kpi2 >= '88.66666667' && employmentSkillsAugContents.kpi2 < '106.4')?'green':(employmentSkillsAugContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi3 == null)?'grey-2':(employmentSkillsAugContents.kpi3 >= '0' && employmentSkillsAugContents.kpi3 <= '22.6')?'red':(employmentSkillsAugContents.kpi3 > '22.6' && employmentSkillsAugContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAugContents.kpi3 > '30.13333333' && employmentSkillsAugContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAugContents.kpi3 >= '37.66666667' && employmentSkillsAugContents.kpi3 < '45.2')?'green':(employmentSkillsAugContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi4 == null)?'grey-2':(employmentSkillsAugContents.kpi4 >= '0' && employmentSkillsAugContents.kpi4 <= '4.8')?'red':(employmentSkillsAugContents.kpi4 > '4.8' && employmentSkillsAugContents.kpi4 <= '6.4')?'orange':(employmentSkillsAugContents.kpi4 > '6.4' && employmentSkillsAugContents.kpi4 < '8')?'yellow-7':(employmentSkillsAugContents.kpi4 >= '8' && employmentSkillsAugContents.kpi4 < '9.6')?'green':(employmentSkillsAugContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi4}}
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
                              :color="(employmentSkillsSepContents.kpi1 == null)?'grey-2':(employmentSkillsSepContents.kpi1 >= '0' && employmentSkillsSepContents.kpi1 <= '29.4')?'red':(employmentSkillsSepContents.kpi1 > '29.4' && employmentSkillsSepContents.kpi1 <= '39.2')?'orange':(employmentSkillsSepContents.kpi1 > '39.2' && employmentSkillsSepContents.kpi1 < '49')?'yellow-7':(employmentSkillsSepContents.kpi1 >= '49' && employmentSkillsSepContents.kpi1 < '58.8')?'green':(employmentSkillsSepContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi2 == null)?'grey-2':(employmentSkillsSepContents.kpi2 >= '0' && employmentSkillsSepContents.kpi2 <= '53.2')?'red':(employmentSkillsSepContents.kpi2 > '53.2' && employmentSkillsSepContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsSepContents.kpi2 > '70.93333333' && employmentSkillsSepContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsSepContents.kpi2 >= '88.66666667' && employmentSkillsSepContents.kpi2 < '106.4')?'green':(employmentSkillsSepContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi3 == null)?'grey-2':(employmentSkillsSepContents.kpi3 >= '0' && employmentSkillsSepContents.kpi3 <= '22.6')?'red':(employmentSkillsSepContents.kpi3 > '22.6' && employmentSkillsSepContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsSepContents.kpi3 > '30.13333333' && employmentSkillsSepContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsSepContents.kpi3 >= '37.66666667' && employmentSkillsSepContents.kpi3 < '45.2')?'green':(employmentSkillsSepContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi4 == null)?'grey-2':(employmentSkillsSepContents.kpi4 >= '0' && employmentSkillsSepContents.kpi4 <= '4.8')?'red':(employmentSkillsSepContents.kpi4 > '4.8' && employmentSkillsSepContents.kpi4 <= '6.4')?'orange':(employmentSkillsSepContents.kpi4 > '6.4' && employmentSkillsSepContents.kpi4 < '8')?'yellow-7':(employmentSkillsSepContents.kpi4 >= '8' && employmentSkillsSepContents.kpi4 < '9.6')?'green':(employmentSkillsSepContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi4}}
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
                              :color="(employmentSkillsOctContents.kpi1 == null)?'grey-2':(employmentSkillsOctContents.kpi1 >= '0' && employmentSkillsOctContents.kpi1 <= '29.4')?'red':(employmentSkillsOctContents.kpi1 > '29.4' && employmentSkillsOctContents.kpi1 <= '39.2')?'orange':(employmentSkillsOctContents.kpi1 > '39.2' && employmentSkillsOctContents.kpi1 < '49')?'yellow-7':(employmentSkillsOctContents.kpi1 >= '49' && employmentSkillsOctContents.kpi1 < '58.8')?'green':(employmentSkillsOctContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi2 == null)?'grey-2':(employmentSkillsOctContents.kpi2 >= '0' && employmentSkillsOctContents.kpi2 <= '53.2')?'red':(employmentSkillsOctContents.kpi2 > '53.2' && employmentSkillsOctContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsOctContents.kpi2 > '70.93333333' && employmentSkillsOctContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsOctContents.kpi2 >= '88.66666667' && employmentSkillsOctContents.kpi2 < '106.4')?'green':(employmentSkillsOctContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi3 == null)?'grey-2':(employmentSkillsOctContents.kpi3 >= '0' && employmentSkillsOctContents.kpi3 <= '22.6')?'red':(employmentSkillsOctContents.kpi3 > '22.6' && employmentSkillsOctContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsOctContents.kpi3 > '30.13333333' && employmentSkillsOctContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsOctContents.kpi3 >= '37.66666667' && employmentSkillsOctContents.kpi3 < '45.2')?'green':(employmentSkillsOctContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi4 == null)?'grey-2':(employmentSkillsOctContents.kpi4 >= '0' && employmentSkillsOctContents.kpi4 <= '4.8')?'red':(employmentSkillsOctContents.kpi4 > '4.8' && employmentSkillsOctContents.kpi4 <= '6.4')?'orange':(employmentSkillsOctContents.kpi4 > '6.4' && employmentSkillsOctContents.kpi4 < '8')?'yellow-7':(employmentSkillsOctContents.kpi4 >= '8' && employmentSkillsOctContents.kpi4 < '9.6')?'green':(employmentSkillsOctContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi4}}
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
                              :color="(employmentSkillsNovContents.kpi1 == null)?'grey-2':(employmentSkillsNovContents.kpi1 >= '0' && employmentSkillsNovContents.kpi1 <= '29.4')?'red':(employmentSkillsNovContents.kpi1 > '29.4' && employmentSkillsNovContents.kpi1 <= '39.2')?'orange':(employmentSkillsNovContents.kpi1 > '39.2' && employmentSkillsNovContents.kpi1 < '49')?'yellow-7':(employmentSkillsNovContents.kpi1 >= '49' && employmentSkillsNovContents.kpi1 < '58.8')?'green':(employmentSkillsNovContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi2 == null)?'grey-2':(employmentSkillsNovContents.kpi2 >= '0' && employmentSkillsNovContents.kpi2 <= '53.2')?'red':(employmentSkillsNovContents.kpi2 > '53.2' && employmentSkillsNovContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsNovContents.kpi2 > '70.93333333' && employmentSkillsNovContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsNovContents.kpi2 >= '88.66666667' && employmentSkillsNovContents.kpi2 < '106.4')?'green':(employmentSkillsNovContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi3 == null)?'grey-2':(employmentSkillsNovContents.kpi3 >= '0' && employmentSkillsNovContents.kpi3 <= '22.6')?'red':(employmentSkillsNovContents.kpi3 > '22.6' && employmentSkillsNovContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsNovContents.kpi3 > '30.13333333' && employmentSkillsNovContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsNovContents.kpi3 >= '37.66666667' && employmentSkillsNovContents.kpi3 < '45.2')?'green':(employmentSkillsNovContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi4 == null)?'grey-2':(employmentSkillsNovContents.kpi4 >= '0' && employmentSkillsNovContents.kpi4 <= '4.8')?'red':(employmentSkillsNovContents.kpi4 > '4.8' && employmentSkillsNovContents.kpi4 <= '6.4')?'orange':(employmentSkillsNovContents.kpi4 > '6.4' && employmentSkillsNovContents.kpi4 < '8')?'yellow-7':(employmentSkillsNovContents.kpi4 >= '8' && employmentSkillsNovContents.kpi4 < '9.6')?'green':(employmentSkillsNovContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi4}}
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
                              :color="(employmentSkillsDecContents.kpi1 == null)?'grey-2':(employmentSkillsDecContents.kpi1 >= '0' && employmentSkillsDecContents.kpi1 <= '29.4')?'red':(employmentSkillsDecContents.kpi1 > '29.4' && employmentSkillsDecContents.kpi1 <= '39.2')?'orange':(employmentSkillsDecContents.kpi1 > '39.2' && employmentSkillsDecContents.kpi1 < '49')?'yellow-7':(employmentSkillsDecContents.kpi1 >= '49' && employmentSkillsDecContents.kpi1 < '58.8')?'green':(employmentSkillsDecContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi2 == null)?'grey-2':(employmentSkillsDecContents.kpi2 >= '0' && employmentSkillsDecContents.kpi2 <= '53.2')?'red':(employmentSkillsDecContents.kpi2 > '53.2' && employmentSkillsDecContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsDecContents.kpi2 > '70.93333333' && employmentSkillsDecContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsDecContents.kpi2 >= '88.66666667' && employmentSkillsDecContents.kpi2 < '106.4')?'green':(employmentSkillsDecContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi3 == null)?'grey-2':(employmentSkillsDecContents.kpi3 >= '0' && employmentSkillsDecContents.kpi3 <= '22.6')?'red':(employmentSkillsDecContents.kpi3 > '22.6' && employmentSkillsDecContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsDecContents.kpi3 > '30.13333333' && employmentSkillsDecContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsDecContents.kpi3 >= '37.66666667' && employmentSkillsDecContents.kpi3 < '45.2')?'green':(employmentSkillsDecContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi4 == null)?'grey-2':(employmentSkillsDecContents.kpi4 >= '0' && employmentSkillsDecContents.kpi4 <= '4.8')?'red':(employmentSkillsDecContents.kpi4 > '4.8' && employmentSkillsDecContents.kpi4 <= '6.4')?'orange':(employmentSkillsDecContents.kpi4 > '6.4' && employmentSkillsDecContents.kpi4 < '8')?'yellow-7':(employmentSkillsDecContents.kpi4 >= '8' && employmentSkillsDecContents.kpi4 < '9.6')?'green':(employmentSkillsDecContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi4}}
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
                              :color="(employmentSkillsJanContents.kpi1 == null)?'grey-2':(employmentSkillsJanContents.kpi1 >= '0' && employmentSkillsJanContents.kpi1 <= '29.4')?'red':(employmentSkillsJanContents.kpi1 > '29.4' && employmentSkillsJanContents.kpi1 <= '39.2')?'orange':(employmentSkillsJanContents.kpi1 > '39.2' && employmentSkillsJanContents.kpi1 < '49')?'yellow-7':(employmentSkillsJanContents.kpi1 >= '49' && employmentSkillsJanContents.kpi1 < '58.8')?'green':(employmentSkillsJanContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi2 == null)?'grey-2':(employmentSkillsJanContents.kpi2 >= '0' && employmentSkillsJanContents.kpi2 <= '53.2')?'red':(employmentSkillsJanContents.kpi2 > '53.2' && employmentSkillsJanContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJanContents.kpi2 > '70.93333333' && employmentSkillsJanContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJanContents.kpi2 >= '88.66666667' && employmentSkillsJanContents.kpi2 < '106.4')?'green':(employmentSkillsJanContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi3 == null)?'grey-2':(employmentSkillsJanContents.kpi3 >= '0' && employmentSkillsJanContents.kpi3 <= '22.6')?'red':(employmentSkillsJanContents.kpi3 > '22.6' && employmentSkillsJanContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJanContents.kpi3 > '30.13333333' && employmentSkillsJanContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJanContents.kpi3 >= '37.66666667' && employmentSkillsJanContents.kpi3 < '45.2')?'green':(employmentSkillsJanContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi4 == null)?'grey-2':(employmentSkillsJanContents.kpi4 >= '0' && employmentSkillsJanContents.kpi4 <= '4.8')?'red':(employmentSkillsJanContents.kpi4 > '4.8' && employmentSkillsJanContents.kpi4 <= '6.4')?'orange':(employmentSkillsJanContents.kpi4 > '6.4' && employmentSkillsJanContents.kpi4 < '8')?'yellow-7':(employmentSkillsJanContents.kpi4 >= '8' && employmentSkillsJanContents.kpi4 < '9.6')?'green':(employmentSkillsJanContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi4}}
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
                              :color="(employmentSkillsFebContents.kpi1 == null)?'grey-2':(employmentSkillsFebContents.kpi1 >= '0' && employmentSkillsFebContents.kpi1 <= '29.4')?'red':(employmentSkillsFebContents.kpi1 > '29.4' && employmentSkillsFebContents.kpi1 <= '39.2')?'orange':(employmentSkillsFebContents.kpi1 > '39.2' && employmentSkillsFebContents.kpi1 < '49')?'yellow-7':(employmentSkillsFebContents.kpi1 >= '49' && employmentSkillsFebContents.kpi1 < '58.8')?'green':(employmentSkillsFebContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi2 == null)?'grey-2':(employmentSkillsFebContents.kpi2 >= '0' && employmentSkillsFebContents.kpi2 <= '53.2')?'red':(employmentSkillsFebContents.kpi2 > '53.2' && employmentSkillsFebContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsFebContents.kpi2 > '70.93333333' && employmentSkillsFebContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsFebContents.kpi2 >= '88.66666667' && employmentSkillsFebContents.kpi2 < '106.4')?'green':(employmentSkillsFebContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi3 == null)?'grey-2':(employmentSkillsFebContents.kpi3 >= '0' && employmentSkillsFebContents.kpi3 <= '22.6')?'red':(employmentSkillsFebContents.kpi3 > '22.6' && employmentSkillsFebContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsFebContents.kpi3 > '30.13333333' && employmentSkillsFebContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsFebContents.kpi3 >= '37.66666667' && employmentSkillsFebContents.kpi3 < '45.2')?'green':(employmentSkillsFebContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi4 == null)?'grey-2':(employmentSkillsFebContents.kpi4 >= '0' && employmentSkillsFebContents.kpi4 <= '4.8')?'red':(employmentSkillsFebContents.kpi4 > '4.8' && employmentSkillsFebContents.kpi4 <= '6.4')?'orange':(employmentSkillsFebContents.kpi4 > '6.4' && employmentSkillsFebContents.kpi4 < '8')?'yellow-7':(employmentSkillsFebContents.kpi4 >= '8' && employmentSkillsFebContents.kpi4 < '9.6')?'green':(employmentSkillsFebContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi4}}
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
                              :color="(employmentSkillsMarContents.kpi1 == null)?'grey-2':(employmentSkillsMarContents.kpi1 >= '0' && employmentSkillsMarContents.kpi1 <= '29.4')?'red':(employmentSkillsMarContents.kpi1 > '29.4' && employmentSkillsMarContents.kpi1 <= '39.2')?'orange':(employmentSkillsMarContents.kpi1 > '39.2' && employmentSkillsMarContents.kpi1 < '49')?'yellow-7':(employmentSkillsMarContents.kpi1 >= '49' && employmentSkillsMarContents.kpi1 < '58.8')?'green':(employmentSkillsMarContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi2 == null)?'grey-2':(employmentSkillsMarContents.kpi2 >= '0' && employmentSkillsMarContents.kpi2 <= '53.2')?'red':(employmentSkillsMarContents.kpi2 > '53.2' && employmentSkillsMarContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMarContents.kpi2 > '70.93333333' && employmentSkillsMarContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMarContents.kpi2 >= '88.66666667' && employmentSkillsMarContents.kpi2 < '106.4')?'green':(employmentSkillsMarContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi3 == null)?'grey-2':(employmentSkillsMarContents.kpi3 >= '0' && employmentSkillsMarContents.kpi3 <= '22.6')?'red':(employmentSkillsMarContents.kpi3 > '22.6' && employmentSkillsMarContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMarContents.kpi3 > '30.13333333' && employmentSkillsMarContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMarContents.kpi3 >= '37.66666667' && employmentSkillsMarContents.kpi3 < '45.2')?'green':(employmentSkillsMarContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi4 == null)?'grey-2':(employmentSkillsMarContents.kpi4 >= '0' && employmentSkillsMarContents.kpi4 <= '4.8')?'red':(employmentSkillsMarContents.kpi4 > '4.8' && employmentSkillsMarContents.kpi4 <= '6.4')?'orange':(employmentSkillsMarContents.kpi4 > '6.4' && employmentSkillsMarContents.kpi4 < '8')?'yellow-7':(employmentSkillsMarContents.kpi4 >= '8' && employmentSkillsMarContents.kpi4 < '9.6')?'green':(employmentSkillsMarContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi4}}
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
                              :color="(employmentSkillsAprContents.kpi1 == null)?'grey-2':(employmentSkillsAprContents.kpi1 >= '0' && employmentSkillsAprContents.kpi1 <= '29.4')?'red':(employmentSkillsAprContents.kpi1 > '29.4' && employmentSkillsAprContents.kpi1 <= '39.2')?'orange':(employmentSkillsAprContents.kpi1 > '39.2' && employmentSkillsAprContents.kpi1 < '49')?'yellow-7':(employmentSkillsAprContents.kpi1 >= '49' && employmentSkillsAprContents.kpi1 < '58.8')?'green':(employmentSkillsAprContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi2 == null)?'grey-2':(employmentSkillsAprContents.kpi2 >= '0' && employmentSkillsAprContents.kpi2 <= '53.2')?'red':(employmentSkillsAprContents.kpi2 > '53.2' && employmentSkillsAprContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAprContents.kpi2 > '70.93333333' && employmentSkillsAprContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAprContents.kpi2 >= '88.66666667' && employmentSkillsAprContents.kpi2 < '106.4')?'green':(employmentSkillsAprContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi3 == null)?'grey-2':(employmentSkillsAprContents.kpi3 >= '0' && employmentSkillsAprContents.kpi3 <= '22.6')?'red':(employmentSkillsAprContents.kpi3 > '22.6' && employmentSkillsAprContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAprContents.kpi3 > '30.13333333' && employmentSkillsAprContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAprContents.kpi3 >= '37.66666667' && employmentSkillsAprContents.kpi3 < '45.2')?'green':(employmentSkillsAprContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi4 == null)?'grey-2':(employmentSkillsAprContents.kpi4 >= '0' && employmentSkillsAprContents.kpi4 <= '4.8')?'red':(employmentSkillsAprContents.kpi4 > '4.8' && employmentSkillsAprContents.kpi4 <= '6.4')?'orange':(employmentSkillsAprContents.kpi4 > '6.4' && employmentSkillsAprContents.kpi4 < '8')?'yellow-7':(employmentSkillsAprContents.kpi4 >= '8' && employmentSkillsAprContents.kpi4 < '9.6')?'green':(employmentSkillsAprContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi4}}
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
                              :color="(employmentSkillsMayContents.kpi1 == null)?'grey-2':(employmentSkillsMayContents.kpi1 >= '0' && employmentSkillsMayContents.kpi1 <= '29.4')?'red':(employmentSkillsMayContents.kpi1 > '29.4' && employmentSkillsMayContents.kpi1 <= '39.2')?'orange':(employmentSkillsMayContents.kpi1 > '39.2' && employmentSkillsMayContents.kpi1 < '49')?'yellow-7':(employmentSkillsMayContents.kpi1 >= '49' && employmentSkillsMayContents.kpi1 < '58.8')?'green':(employmentSkillsMayContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi2 == null)?'grey-2':(employmentSkillsMayContents.kpi2 >= '0' && employmentSkillsMayContents.kpi2 <= '53.2')?'red':(employmentSkillsMayContents.kpi2 > '53.2' && employmentSkillsMayContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMayContents.kpi2 > '70.93333333' && employmentSkillsMayContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMayContents.kpi2 >= '88.66666667' && employmentSkillsMayContents.kpi2 < '106.4')?'green':(employmentSkillsMayContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi3 == null)?'grey-2':(employmentSkillsMayContents.kpi3 >= '0' && employmentSkillsMayContents.kpi3 <= '22.6')?'red':(employmentSkillsMayContents.kpi3 > '22.6' && employmentSkillsMayContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMayContents.kpi3 > '30.13333333' && employmentSkillsMayContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMayContents.kpi3 >= '37.66666667' && employmentSkillsMayContents.kpi3 < '45.2')?'green':(employmentSkillsMayContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi4 == null)?'grey-2':(employmentSkillsMayContents.kpi4 >= '0' && employmentSkillsMayContents.kpi4 <= '4.8')?'red':(employmentSkillsMayContents.kpi4 > '4.8' && employmentSkillsMayContents.kpi4 <= '6.4')?'orange':(employmentSkillsMayContents.kpi4 > '6.4' && employmentSkillsMayContents.kpi4 < '8')?'yellow-7':(employmentSkillsMayContents.kpi4 >= '8' && employmentSkillsMayContents.kpi4 < '9.6')?'green':(employmentSkillsMayContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi4}}
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
                              :color="(employmentSkillsJunContents.kpi1 == null)?'grey-2':(employmentSkillsJunContents.kpi1 >= '0' && employmentSkillsJunContents.kpi1 <= '29.4')?'red':(employmentSkillsJunContents.kpi1 > '29.4' && employmentSkillsJunContents.kpi1 <= '39.2')?'orange':(employmentSkillsJunContents.kpi1 > '39.2' && employmentSkillsJunContents.kpi1 < '49')?'yellow-7':(employmentSkillsJunContents.kpi1 >= '49' && employmentSkillsJunContents.kpi1 < '58.8')?'green':(employmentSkillsJunContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi2 == null)?'grey-2':(employmentSkillsJunContents.kpi2 >= '0' && employmentSkillsJunContents.kpi2 <= '53.2')?'red':(employmentSkillsJunContents.kpi2 > '53.2' && employmentSkillsJunContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJunContents.kpi2 > '70.93333333' && employmentSkillsJunContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJunContents.kpi2 >= '88.66666667' && employmentSkillsJunContents.kpi2 < '106.4')?'green':(employmentSkillsJunContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi3 == null)?'grey-2':(employmentSkillsJunContents.kpi3 >= '0' && employmentSkillsJunContents.kpi3 <= '22.6')?'red':(employmentSkillsJunContents.kpi3 > '22.6' && employmentSkillsJunContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJunContents.kpi3 > '30.13333333' && employmentSkillsJunContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJunContents.kpi3 >= '37.66666667' && employmentSkillsJunContents.kpi3 < '45.2')?'green':(employmentSkillsJunContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi4 == null)?'grey-2':(employmentSkillsJunContents.kpi4 >= '0' && employmentSkillsJunContents.kpi4 <= '4.8')?'red':(employmentSkillsJunContents.kpi4 > '4.8' && employmentSkillsJunContents.kpi4 <= '6.4')?'orange':(employmentSkillsJunContents.kpi4 > '6.4' && employmentSkillsJunContents.kpi4 < '8')?'yellow-7':(employmentSkillsJunContents.kpi4 >= '8' && employmentSkillsJunContents.kpi4 < '9.6')?'green':(employmentSkillsJunContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi4}}
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
                              :color="(employmentSkillsJulContents.kpi1 == null)?'grey-2':(employmentSkillsJulContents.kpi1 >= '0' && employmentSkillsJulContents.kpi1 <= '29.4')?'red':(employmentSkillsJulContents.kpi1 > '29.4' && employmentSkillsJulContents.kpi1 <= '39.2')?'orange':(employmentSkillsJulContents.kpi1 > '39.2' && employmentSkillsJulContents.kpi1 < '49')?'yellow-7':(employmentSkillsJulContents.kpi1 >= '49' && employmentSkillsJulContents.kpi1 < '58.8')?'green':(employmentSkillsJulContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi2 == null)?'grey-2':(employmentSkillsJulContents.kpi2 >= '0' && employmentSkillsJulContents.kpi2 <= '53.2')?'red':(employmentSkillsJulContents.kpi2 > '53.2' && employmentSkillsJulContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJulContents.kpi2 > '70.93333333' && employmentSkillsJulContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJulContents.kpi2 >= '88.66666667' && employmentSkillsJulContents.kpi2 < '106.4')?'green':(employmentSkillsJulContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi3 == null)?'grey-2':(employmentSkillsJulContents.kpi3 >= '0' && employmentSkillsJulContents.kpi3 <= '22.6')?'red':(employmentSkillsJulContents.kpi3 > '22.6' && employmentSkillsJulContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJulContents.kpi3 > '30.13333333' && employmentSkillsJulContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJulContents.kpi3 >= '37.66666667' && employmentSkillsJulContents.kpi3 < '45.2')?'green':(employmentSkillsJulContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi4 == null)?'grey-2':(employmentSkillsJulContents.kpi4 >= '0' && employmentSkillsJulContents.kpi4 <= '4.8')?'red':(employmentSkillsJulContents.kpi4 > '4.8' && employmentSkillsJulContents.kpi4 <= '6.4')?'orange':(employmentSkillsJulContents.kpi4 > '6.4' && employmentSkillsJulContents.kpi4 < '8')?'yellow-7':(employmentSkillsJulContents.kpi4 >= '8' && employmentSkillsJulContents.kpi4 < '9.6')?'green':(employmentSkillsJulContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi4}}
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
                              :color="(employmentSkillsAugContents.kpi1 == null)?'grey-2':(employmentSkillsAugContents.kpi1 >= '0' && employmentSkillsAugContents.kpi1 <= '29.4')?'red':(employmentSkillsAugContents.kpi1 > '29.4' && employmentSkillsAugContents.kpi1 <= '39.2')?'orange':(employmentSkillsAugContents.kpi1 > '39.2' && employmentSkillsAugContents.kpi1 < '49')?'yellow-7':(employmentSkillsAugContents.kpi1 >= '49' && employmentSkillsAugContents.kpi1 < '58.8')?'green':(employmentSkillsAugContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi2 == null)?'grey-2':(employmentSkillsAugContents.kpi2 >= '0' && employmentSkillsAugContents.kpi2 <= '53.2')?'red':(employmentSkillsAugContents.kpi2 > '53.2' && employmentSkillsAugContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAugContents.kpi2 > '70.93333333' && employmentSkillsAugContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAugContents.kpi2 >= '88.66666667' && employmentSkillsAugContents.kpi2 < '106.4')?'green':(employmentSkillsAugContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi3 == null)?'grey-2':(employmentSkillsAugContents.kpi3 >= '0' && employmentSkillsAugContents.kpi3 <= '22.6')?'red':(employmentSkillsAugContents.kpi3 > '22.6' && employmentSkillsAugContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAugContents.kpi3 > '30.13333333' && employmentSkillsAugContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAugContents.kpi3 >= '37.66666667' && employmentSkillsAugContents.kpi3 < '45.2')?'green':(employmentSkillsAugContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi4 == null)?'grey-2':(employmentSkillsAugContents.kpi4 >= '0' && employmentSkillsAugContents.kpi4 <= '4.8')?'red':(employmentSkillsAugContents.kpi4 > '4.8' && employmentSkillsAugContents.kpi4 <= '6.4')?'orange':(employmentSkillsAugContents.kpi4 > '6.4' && employmentSkillsAugContents.kpi4 < '8')?'yellow-7':(employmentSkillsAugContents.kpi4 >= '8' && employmentSkillsAugContents.kpi4 < '9.6')?'green':(employmentSkillsAugContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi4}}
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
                              :color="(employmentSkillsSepContents.kpi1 == null)?'grey-2':(employmentSkillsSepContents.kpi1 >= '0' && employmentSkillsSepContents.kpi1 <= '29.4')?'red':(employmentSkillsSepContents.kpi1 > '29.4' && employmentSkillsSepContents.kpi1 <= '39.2')?'orange':(employmentSkillsSepContents.kpi1 > '39.2' && employmentSkillsSepContents.kpi1 < '49')?'yellow-7':(employmentSkillsSepContents.kpi1 >= '49' && employmentSkillsSepContents.kpi1 < '58.8')?'green':(employmentSkillsSepContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi2 == null)?'grey-2':(employmentSkillsSepContents.kpi2 >= '0' && employmentSkillsSepContents.kpi2 <= '53.2')?'red':(employmentSkillsSepContents.kpi2 > '53.2' && employmentSkillsSepContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsSepContents.kpi2 > '70.93333333' && employmentSkillsSepContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsSepContents.kpi2 >= '88.66666667' && employmentSkillsSepContents.kpi2 < '106.4')?'green':(employmentSkillsSepContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi3 == null)?'grey-2':(employmentSkillsSepContents.kpi3 >= '0' && employmentSkillsSepContents.kpi3 <= '22.6')?'red':(employmentSkillsSepContents.kpi3 > '22.6' && employmentSkillsSepContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsSepContents.kpi3 > '30.13333333' && employmentSkillsSepContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsSepContents.kpi3 >= '37.66666667' && employmentSkillsSepContents.kpi3 < '45.2')?'green':(employmentSkillsSepContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi4 == null)?'grey-2':(employmentSkillsSepContents.kpi4 >= '0' && employmentSkillsSepContents.kpi4 <= '4.8')?'red':(employmentSkillsSepContents.kpi4 > '4.8' && employmentSkillsSepContents.kpi4 <= '6.4')?'orange':(employmentSkillsSepContents.kpi4 > '6.4' && employmentSkillsSepContents.kpi4 < '8')?'yellow-7':(employmentSkillsSepContents.kpi4 >= '8' && employmentSkillsSepContents.kpi4 < '9.6')?'green':(employmentSkillsSepContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi4}}
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
                              :color="(employmentSkillsOctContents.kpi1 == null)?'grey-2':(employmentSkillsOctContents.kpi1 >= '0' && employmentSkillsOctContents.kpi1 <= '29.4')?'red':(employmentSkillsOctContents.kpi1 > '29.4' && employmentSkillsOctContents.kpi1 <= '39.2')?'orange':(employmentSkillsOctContents.kpi1 > '39.2' && employmentSkillsOctContents.kpi1 < '49')?'yellow-7':(employmentSkillsOctContents.kpi1 >= '49' && employmentSkillsOctContents.kpi1 < '58.8')?'green':(employmentSkillsOctContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi2 == null)?'grey-2':(employmentSkillsOctContents.kpi2 >= '0' && employmentSkillsOctContents.kpi2 <= '53.2')?'red':(employmentSkillsOctContents.kpi2 > '53.2' && employmentSkillsOctContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsOctContents.kpi2 > '70.93333333' && employmentSkillsOctContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsOctContents.kpi2 >= '88.66666667' && employmentSkillsOctContents.kpi2 < '106.4')?'green':(employmentSkillsOctContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi3 == null)?'grey-2':(employmentSkillsOctContents.kpi3 >= '0' && employmentSkillsOctContents.kpi3 <= '22.6')?'red':(employmentSkillsOctContents.kpi3 > '22.6' && employmentSkillsOctContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsOctContents.kpi3 > '30.13333333' && employmentSkillsOctContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsOctContents.kpi3 >= '37.66666667' && employmentSkillsOctContents.kpi3 < '45.2')?'green':(employmentSkillsOctContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi4 == null)?'grey-2':(employmentSkillsOctContents.kpi4 >= '0' && employmentSkillsOctContents.kpi4 <= '4.8')?'red':(employmentSkillsOctContents.kpi4 > '4.8' && employmentSkillsOctContents.kpi4 <= '6.4')?'orange':(employmentSkillsOctContents.kpi4 > '6.4' && employmentSkillsOctContents.kpi4 < '8')?'yellow-7':(employmentSkillsOctContents.kpi4 >= '8' && employmentSkillsOctContents.kpi4 < '9.6')?'green':(employmentSkillsOctContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi4}}
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
                              :color="(employmentSkillsNovContents.kpi1 == null)?'grey-2':(employmentSkillsNovContents.kpi1 >= '0' && employmentSkillsNovContents.kpi1 <= '29.4')?'red':(employmentSkillsNovContents.kpi1 > '29.4' && employmentSkillsNovContents.kpi1 <= '39.2')?'orange':(employmentSkillsNovContents.kpi1 > '39.2' && employmentSkillsNovContents.kpi1 < '49')?'yellow-7':(employmentSkillsNovContents.kpi1 >= '49' && employmentSkillsNovContents.kpi1 < '58.8')?'green':(employmentSkillsNovContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi2 == null)?'grey-2':(employmentSkillsNovContents.kpi2 >= '0' && employmentSkillsNovContents.kpi2 <= '53.2')?'red':(employmentSkillsNovContents.kpi2 > '53.2' && employmentSkillsNovContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsNovContents.kpi2 > '70.93333333' && employmentSkillsNovContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsNovContents.kpi2 >= '88.66666667' && employmentSkillsNovContents.kpi2 < '106.4')?'green':(employmentSkillsNovContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi3 == null)?'grey-2':(employmentSkillsNovContents.kpi3 >= '0' && employmentSkillsNovContents.kpi3 <= '22.6')?'red':(employmentSkillsNovContents.kpi3 > '22.6' && employmentSkillsNovContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsNovContents.kpi3 > '30.13333333' && employmentSkillsNovContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsNovContents.kpi3 >= '37.66666667' && employmentSkillsNovContents.kpi3 < '45.2')?'green':(employmentSkillsNovContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi4 == null)?'grey-2':(employmentSkillsNovContents.kpi4 >= '0' && employmentSkillsNovContents.kpi4 <= '4.8')?'red':(employmentSkillsNovContents.kpi4 > '4.8' && employmentSkillsNovContents.kpi4 <= '6.4')?'orange':(employmentSkillsNovContents.kpi4 > '6.4' && employmentSkillsNovContents.kpi4 < '8')?'yellow-7':(employmentSkillsNovContents.kpi4 >= '8' && employmentSkillsNovContents.kpi4 < '9.6')?'green':(employmentSkillsNovContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi4}}
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
                              :color="(employmentSkillsDecContents.kpi1 == null)?'grey-2':(employmentSkillsDecContents.kpi1 >= '0' && employmentSkillsDecContents.kpi1 <= '29.4')?'red':(employmentSkillsDecContents.kpi1 > '29.4' && employmentSkillsDecContents.kpi1 <= '39.2')?'orange':(employmentSkillsDecContents.kpi1 > '39.2' && employmentSkillsDecContents.kpi1 < '49')?'yellow-7':(employmentSkillsDecContents.kpi1 >= '49' && employmentSkillsDecContents.kpi1 < '58.8')?'green':(employmentSkillsDecContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi2 == null)?'grey-2':(employmentSkillsDecContents.kpi2 >= '0' && employmentSkillsDecContents.kpi2 <= '53.2')?'red':(employmentSkillsDecContents.kpi2 > '53.2' && employmentSkillsDecContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsDecContents.kpi2 > '70.93333333' && employmentSkillsDecContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsDecContents.kpi2 >= '88.66666667' && employmentSkillsDecContents.kpi2 < '106.4')?'green':(employmentSkillsDecContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi3 == null)?'grey-2':(employmentSkillsDecContents.kpi3 >= '0' && employmentSkillsDecContents.kpi3 <= '22.6')?'red':(employmentSkillsDecContents.kpi3 > '22.6' && employmentSkillsDecContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsDecContents.kpi3 > '30.13333333' && employmentSkillsDecContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsDecContents.kpi3 >= '37.66666667' && employmentSkillsDecContents.kpi3 < '45.2')?'green':(employmentSkillsDecContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi4 == null)?'grey-2':(employmentSkillsDecContents.kpi4 >= '0' && employmentSkillsDecContents.kpi4 <= '4.8')?'red':(employmentSkillsDecContents.kpi4 > '4.8' && employmentSkillsDecContents.kpi4 <= '6.4')?'orange':(employmentSkillsDecContents.kpi4 > '6.4' && employmentSkillsDecContents.kpi4 < '8')?'yellow-7':(employmentSkillsDecContents.kpi4 >= '8' && employmentSkillsDecContents.kpi4 < '9.6')?'green':(employmentSkillsDecContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi4}}
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
                              :color="(employmentSkillsJanContents.kpi1 == null)?'grey-2':(employmentSkillsJanContents.kpi1 >= '0' && employmentSkillsJanContents.kpi1 <= '29.4')?'red':(employmentSkillsJanContents.kpi1 > '29.4' && employmentSkillsJanContents.kpi1 <= '39.2')?'orange':(employmentSkillsJanContents.kpi1 > '39.2' && employmentSkillsJanContents.kpi1 < '49')?'yellow-7':(employmentSkillsJanContents.kpi1 >= '49' && employmentSkillsJanContents.kpi1 < '58.8')?'green':(employmentSkillsJanContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi2 == null)?'grey-2':(employmentSkillsJanContents.kpi2 >= '0' && employmentSkillsJanContents.kpi2 <= '53.2')?'red':(employmentSkillsJanContents.kpi2 > '53.2' && employmentSkillsJanContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJanContents.kpi2 > '70.93333333' && employmentSkillsJanContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJanContents.kpi2 >= '88.66666667' && employmentSkillsJanContents.kpi2 < '106.4')?'green':(employmentSkillsJanContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi3 == null)?'grey-2':(employmentSkillsJanContents.kpi3 >= '0' && employmentSkillsJanContents.kpi3 <= '22.6')?'red':(employmentSkillsJanContents.kpi3 > '22.6' && employmentSkillsJanContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJanContents.kpi3 > '30.13333333' && employmentSkillsJanContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJanContents.kpi3 >= '37.66666667' && employmentSkillsJanContents.kpi3 < '45.2')?'green':(employmentSkillsJanContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi4 == null)?'grey-2':(employmentSkillsJanContents.kpi4 >= '0' && employmentSkillsJanContents.kpi4 <= '4.8')?'red':(employmentSkillsJanContents.kpi4 > '4.8' && employmentSkillsJanContents.kpi4 <= '6.4')?'orange':(employmentSkillsJanContents.kpi4 > '6.4' && employmentSkillsJanContents.kpi4 < '8')?'yellow-7':(employmentSkillsJanContents.kpi4 >= '8' && employmentSkillsJanContents.kpi4 < '9.6')?'green':(employmentSkillsJanContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi4}}
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
                              :color="(employmentSkillsFebContents.kpi1 == null)?'grey-2':(employmentSkillsFebContents.kpi1 >= '0' && employmentSkillsFebContents.kpi1 <= '29.4')?'red':(employmentSkillsFebContents.kpi1 > '29.4' && employmentSkillsFebContents.kpi1 <= '39.2')?'orange':(employmentSkillsFebContents.kpi1 > '39.2' && employmentSkillsFebContents.kpi1 < '49')?'yellow-7':(employmentSkillsFebContents.kpi1 >= '49' && employmentSkillsFebContents.kpi1 < '58.8')?'green':(employmentSkillsFebContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi2 == null)?'grey-2':(employmentSkillsFebContents.kpi2 >= '0' && employmentSkillsFebContents.kpi2 <= '53.2')?'red':(employmentSkillsFebContents.kpi2 > '53.2' && employmentSkillsFebContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsFebContents.kpi2 > '70.93333333' && employmentSkillsFebContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsFebContents.kpi2 >= '88.66666667' && employmentSkillsFebContents.kpi2 < '106.4')?'green':(employmentSkillsFebContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi3 == null)?'grey-2':(employmentSkillsFebContents.kpi3 >= '0' && employmentSkillsFebContents.kpi3 <= '22.6')?'red':(employmentSkillsFebContents.kpi3 > '22.6' && employmentSkillsFebContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsFebContents.kpi3 > '30.13333333' && employmentSkillsFebContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsFebContents.kpi3 >= '37.66666667' && employmentSkillsFebContents.kpi3 < '45.2')?'green':(employmentSkillsFebContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi4 == null)?'grey-2':(employmentSkillsFebContents.kpi4 >= '0' && employmentSkillsFebContents.kpi4 <= '4.8')?'red':(employmentSkillsFebContents.kpi4 > '4.8' && employmentSkillsFebContents.kpi4 <= '6.4')?'orange':(employmentSkillsFebContents.kpi4 > '6.4' && employmentSkillsFebContents.kpi4 < '8')?'yellow-7':(employmentSkillsFebContents.kpi4 >= '8' && employmentSkillsFebContents.kpi4 < '9.6')?'green':(employmentSkillsFebContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi4}}
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
                              :color="(employmentSkillsMarContents.kpi1 == null)?'grey-2':(employmentSkillsMarContents.kpi1 >= '0' && employmentSkillsMarContents.kpi1 <= '29.4')?'red':(employmentSkillsMarContents.kpi1 > '29.4' && employmentSkillsMarContents.kpi1 <= '39.2')?'orange':(employmentSkillsMarContents.kpi1 > '39.2' && employmentSkillsMarContents.kpi1 < '49')?'yellow-7':(employmentSkillsMarContents.kpi1 >= '49' && employmentSkillsMarContents.kpi1 < '58.8')?'green':(employmentSkillsMarContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi2 == null)?'grey-2':(employmentSkillsMarContents.kpi2 >= '0' && employmentSkillsMarContents.kpi2 <= '53.2')?'red':(employmentSkillsMarContents.kpi2 > '53.2' && employmentSkillsMarContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMarContents.kpi2 > '70.93333333' && employmentSkillsMarContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMarContents.kpi2 >= '88.66666667' && employmentSkillsMarContents.kpi2 < '106.4')?'green':(employmentSkillsMarContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi3 == null)?'grey-2':(employmentSkillsMarContents.kpi3 >= '0' && employmentSkillsMarContents.kpi3 <= '22.6')?'red':(employmentSkillsMarContents.kpi3 > '22.6' && employmentSkillsMarContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMarContents.kpi3 > '30.13333333' && employmentSkillsMarContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMarContents.kpi3 >= '37.66666667' && employmentSkillsMarContents.kpi3 < '45.2')?'green':(employmentSkillsMarContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi4 == null)?'grey-2':(employmentSkillsMarContents.kpi4 >= '0' && employmentSkillsMarContents.kpi4 <= '4.8')?'red':(employmentSkillsMarContents.kpi4 > '4.8' && employmentSkillsMarContents.kpi4 <= '6.4')?'orange':(employmentSkillsMarContents.kpi4 > '6.4' && employmentSkillsMarContents.kpi4 < '8')?'yellow-7':(employmentSkillsMarContents.kpi4 >= '8' && employmentSkillsMarContents.kpi4 < '9.6')?'green':(employmentSkillsMarContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi4}}
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
                              :color="(employmentSkillsAprContents.kpi1 == null)?'grey-2':(employmentSkillsAprContents.kpi1 >= '0' && employmentSkillsAprContents.kpi1 <= '29.4')?'red':(employmentSkillsAprContents.kpi1 > '29.4' && employmentSkillsAprContents.kpi1 <= '39.2')?'orange':(employmentSkillsAprContents.kpi1 > '39.2' && employmentSkillsAprContents.kpi1 < '49')?'yellow-7':(employmentSkillsAprContents.kpi1 >= '49' && employmentSkillsAprContents.kpi1 < '58.8')?'green':(employmentSkillsAprContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi2 == null)?'grey-2':(employmentSkillsAprContents.kpi2 >= '0' && employmentSkillsAprContents.kpi2 <= '53.2')?'red':(employmentSkillsAprContents.kpi2 > '53.2' && employmentSkillsAprContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAprContents.kpi2 > '70.93333333' && employmentSkillsAprContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAprContents.kpi2 >= '88.66666667' && employmentSkillsAprContents.kpi2 < '106.4')?'green':(employmentSkillsAprContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi3 == null)?'grey-2':(employmentSkillsAprContents.kpi3 >= '0' && employmentSkillsAprContents.kpi3 <= '22.6')?'red':(employmentSkillsAprContents.kpi3 > '22.6' && employmentSkillsAprContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAprContents.kpi3 > '30.13333333' && employmentSkillsAprContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAprContents.kpi3 >= '37.66666667' && employmentSkillsAprContents.kpi3 < '45.2')?'green':(employmentSkillsAprContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi4 == null)?'grey-2':(employmentSkillsAprContents.kpi4 >= '0' && employmentSkillsAprContents.kpi4 <= '4.8')?'red':(employmentSkillsAprContents.kpi4 > '4.8' && employmentSkillsAprContents.kpi4 <= '6.4')?'orange':(employmentSkillsAprContents.kpi4 > '6.4' && employmentSkillsAprContents.kpi4 < '8')?'yellow-7':(employmentSkillsAprContents.kpi4 >= '8' && employmentSkillsAprContents.kpi4 < '9.6')?'green':(employmentSkillsAprContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi4}}
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
                              :color="(employmentSkillsMayContents.kpi1 == null)?'grey-2':(employmentSkillsMayContents.kpi1 >= '0' && employmentSkillsMayContents.kpi1 <= '29.4')?'red':(employmentSkillsMayContents.kpi1 > '29.4' && employmentSkillsMayContents.kpi1 <= '39.2')?'orange':(employmentSkillsMayContents.kpi1 > '39.2' && employmentSkillsMayContents.kpi1 < '49')?'yellow-7':(employmentSkillsMayContents.kpi1 >= '49' && employmentSkillsMayContents.kpi1 < '58.8')?'green':(employmentSkillsMayContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi2 == null)?'grey-2':(employmentSkillsMayContents.kpi2 >= '0' && employmentSkillsMayContents.kpi2 <= '53.2')?'red':(employmentSkillsMayContents.kpi2 > '53.2' && employmentSkillsMayContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMayContents.kpi2 > '70.93333333' && employmentSkillsMayContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMayContents.kpi2 >= '88.66666667' && employmentSkillsMayContents.kpi2 < '106.4')?'green':(employmentSkillsMayContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi3 == null)?'grey-2':(employmentSkillsMayContents.kpi3 >= '0' && employmentSkillsMayContents.kpi3 <= '22.6')?'red':(employmentSkillsMayContents.kpi3 > '22.6' && employmentSkillsMayContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMayContents.kpi3 > '30.13333333' && employmentSkillsMayContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMayContents.kpi3 >= '37.66666667' && employmentSkillsMayContents.kpi3 < '45.2')?'green':(employmentSkillsMayContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi4 == null)?'grey-2':(employmentSkillsMayContents.kpi4 >= '0' && employmentSkillsMayContents.kpi4 <= '4.8')?'red':(employmentSkillsMayContents.kpi4 > '4.8' && employmentSkillsMayContents.kpi4 <= '6.4')?'orange':(employmentSkillsMayContents.kpi4 > '6.4' && employmentSkillsMayContents.kpi4 < '8')?'yellow-7':(employmentSkillsMayContents.kpi4 >= '8' && employmentSkillsMayContents.kpi4 < '9.6')?'green':(employmentSkillsMayContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi4}}
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
                              :color="(employmentSkillsJunContents.kpi1 == null)?'grey-2':(employmentSkillsJunContents.kpi1 >= '0' && employmentSkillsJunContents.kpi1 <= '29.4')?'red':(employmentSkillsJunContents.kpi1 > '29.4' && employmentSkillsJunContents.kpi1 <= '39.2')?'orange':(employmentSkillsJunContents.kpi1 > '39.2' && employmentSkillsJunContents.kpi1 < '49')?'yellow-7':(employmentSkillsJunContents.kpi1 >= '49' && employmentSkillsJunContents.kpi1 < '58.8')?'green':(employmentSkillsJunContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi2 == null)?'grey-2':(employmentSkillsJunContents.kpi2 >= '0' && employmentSkillsJunContents.kpi2 <= '53.2')?'red':(employmentSkillsJunContents.kpi2 > '53.2' && employmentSkillsJunContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJunContents.kpi2 > '70.93333333' && employmentSkillsJunContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJunContents.kpi2 >= '88.66666667' && employmentSkillsJunContents.kpi2 < '106.4')?'green':(employmentSkillsJunContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi3 == null)?'grey-2':(employmentSkillsJunContents.kpi3 >= '0' && employmentSkillsJunContents.kpi3 <= '22.6')?'red':(employmentSkillsJunContents.kpi3 > '22.6' && employmentSkillsJunContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJunContents.kpi3 > '30.13333333' && employmentSkillsJunContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJunContents.kpi3 >= '37.66666667' && employmentSkillsJunContents.kpi3 < '45.2')?'green':(employmentSkillsJunContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi4 == null)?'grey-2':(employmentSkillsJunContents.kpi4 >= '0' && employmentSkillsJunContents.kpi4 <= '4.8')?'red':(employmentSkillsJunContents.kpi4 > '4.8' && employmentSkillsJunContents.kpi4 <= '6.4')?'orange':(employmentSkillsJunContents.kpi4 > '6.4' && employmentSkillsJunContents.kpi4 < '8')?'yellow-7':(employmentSkillsJunContents.kpi4 >= '8' && employmentSkillsJunContents.kpi4 < '9.6')?'green':(employmentSkillsJunContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi4}}
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
                              :color="(employmentSkillsJulContents.kpi1 == null)?'grey-2':(employmentSkillsJulContents.kpi1 >= '0' && employmentSkillsJulContents.kpi1 <= '29.4')?'red':(employmentSkillsJulContents.kpi1 > '29.4' && employmentSkillsJulContents.kpi1 <= '39.2')?'orange':(employmentSkillsJulContents.kpi1 > '39.2' && employmentSkillsJulContents.kpi1 < '49')?'yellow-7':(employmentSkillsJulContents.kpi1 >= '49' && employmentSkillsJulContents.kpi1 < '58.8')?'green':(employmentSkillsJulContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi2 == null)?'grey-2':(employmentSkillsJulContents.kpi2 >= '0' && employmentSkillsJulContents.kpi2 <= '53.2')?'red':(employmentSkillsJulContents.kpi2 > '53.2' && employmentSkillsJulContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJulContents.kpi2 > '70.93333333' && employmentSkillsJulContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJulContents.kpi2 >= '88.66666667' && employmentSkillsJulContents.kpi2 < '106.4')?'green':(employmentSkillsJulContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi3 == null)?'grey-2':(employmentSkillsJulContents.kpi3 >= '0' && employmentSkillsJulContents.kpi3 <= '22.6')?'red':(employmentSkillsJulContents.kpi3 > '22.6' && employmentSkillsJulContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJulContents.kpi3 > '30.13333333' && employmentSkillsJulContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJulContents.kpi3 >= '37.66666667' && employmentSkillsJulContents.kpi3 < '45.2')?'green':(employmentSkillsJulContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi4 == null)?'grey-2':(employmentSkillsJulContents.kpi4 >= '0' && employmentSkillsJulContents.kpi4 <= '4.8')?'red':(employmentSkillsJulContents.kpi4 > '4.8' && employmentSkillsJulContents.kpi4 <= '6.4')?'orange':(employmentSkillsJulContents.kpi4 > '6.4' && employmentSkillsJulContents.kpi4 < '8')?'yellow-7':(employmentSkillsJulContents.kpi4 >= '8' && employmentSkillsJulContents.kpi4 < '9.6')?'green':(employmentSkillsJulContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi4}}
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
                              :color="(employmentSkillsAugContents.kpi1 == null)?'grey-2':(employmentSkillsAugContents.kpi1 >= '0' && employmentSkillsAugContents.kpi1 <= '29.4')?'red':(employmentSkillsAugContents.kpi1 > '29.4' && employmentSkillsAugContents.kpi1 <= '39.2')?'orange':(employmentSkillsAugContents.kpi1 > '39.2' && employmentSkillsAugContents.kpi1 < '49')?'yellow-7':(employmentSkillsAugContents.kpi1 >= '49' && employmentSkillsAugContents.kpi1 < '58.8')?'green':(employmentSkillsAugContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi2 == null)?'grey-2':(employmentSkillsAugContents.kpi2 >= '0' && employmentSkillsAugContents.kpi2 <= '53.2')?'red':(employmentSkillsAugContents.kpi2 > '53.2' && employmentSkillsAugContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAugContents.kpi2 > '70.93333333' && employmentSkillsAugContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAugContents.kpi2 >= '88.66666667' && employmentSkillsAugContents.kpi2 < '106.4')?'green':(employmentSkillsAugContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi3 == null)?'grey-2':(employmentSkillsAugContents.kpi3 >= '0' && employmentSkillsAugContents.kpi3 <= '22.6')?'red':(employmentSkillsAugContents.kpi3 > '22.6' && employmentSkillsAugContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAugContents.kpi3 > '30.13333333' && employmentSkillsAugContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAugContents.kpi3 >= '37.66666667' && employmentSkillsAugContents.kpi3 < '45.2')?'green':(employmentSkillsAugContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi4 == null)?'grey-2':(employmentSkillsAugContents.kpi4 >= '0' && employmentSkillsAugContents.kpi4 <= '4.8')?'red':(employmentSkillsAugContents.kpi4 > '4.8' && employmentSkillsAugContents.kpi4 <= '6.4')?'orange':(employmentSkillsAugContents.kpi4 > '6.4' && employmentSkillsAugContents.kpi4 < '8')?'yellow-7':(employmentSkillsAugContents.kpi4 >= '8' && employmentSkillsAugContents.kpi4 < '9.6')?'green':(employmentSkillsAugContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi4}}
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
                              :color="(employmentSkillsSepContents.kpi1 == null)?'grey-2':(employmentSkillsSepContents.kpi1 >= '0' && employmentSkillsSepContents.kpi1 <= '29.4')?'red':(employmentSkillsSepContents.kpi1 > '29.4' && employmentSkillsSepContents.kpi1 <= '39.2')?'orange':(employmentSkillsSepContents.kpi1 > '39.2' && employmentSkillsSepContents.kpi1 < '49')?'yellow-7':(employmentSkillsSepContents.kpi1 >= '49' && employmentSkillsSepContents.kpi1 < '58.8')?'green':(employmentSkillsSepContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi2 == null)?'grey-2':(employmentSkillsSepContents.kpi2 >= '0' && employmentSkillsSepContents.kpi2 <= '53.2')?'red':(employmentSkillsSepContents.kpi2 > '53.2' && employmentSkillsSepContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsSepContents.kpi2 > '70.93333333' && employmentSkillsSepContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsSepContents.kpi2 >= '88.66666667' && employmentSkillsSepContents.kpi2 < '106.4')?'green':(employmentSkillsSepContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi3 == null)?'grey-2':(employmentSkillsSepContents.kpi3 >= '0' && employmentSkillsSepContents.kpi3 <= '22.6')?'red':(employmentSkillsSepContents.kpi3 > '22.6' && employmentSkillsSepContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsSepContents.kpi3 > '30.13333333' && employmentSkillsSepContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsSepContents.kpi3 >= '37.66666667' && employmentSkillsSepContents.kpi3 < '45.2')?'green':(employmentSkillsSepContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi4 == null)?'grey-2':(employmentSkillsSepContents.kpi4 >= '0' && employmentSkillsSepContents.kpi4 <= '4.8')?'red':(employmentSkillsSepContents.kpi4 > '4.8' && employmentSkillsSepContents.kpi4 <= '6.4')?'orange':(employmentSkillsSepContents.kpi4 > '6.4' && employmentSkillsSepContents.kpi4 < '8')?'yellow-7':(employmentSkillsSepContents.kpi4 >= '8' && employmentSkillsSepContents.kpi4 < '9.6')?'green':(employmentSkillsSepContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi4}}
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
                              :color="(employmentSkillsOctContents.kpi1 == null)?'grey-2':(employmentSkillsOctContents.kpi1 >= '0' && employmentSkillsOctContents.kpi1 <= '29.4')?'red':(employmentSkillsOctContents.kpi1 > '29.4' && employmentSkillsOctContents.kpi1 <= '39.2')?'orange':(employmentSkillsOctContents.kpi1 > '39.2' && employmentSkillsOctContents.kpi1 < '49')?'yellow-7':(employmentSkillsOctContents.kpi1 >= '49' && employmentSkillsOctContents.kpi1 < '58.8')?'green':(employmentSkillsOctContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi2 == null)?'grey-2':(employmentSkillsOctContents.kpi2 >= '0' && employmentSkillsOctContents.kpi2 <= '53.2')?'red':(employmentSkillsOctContents.kpi2 > '53.2' && employmentSkillsOctContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsOctContents.kpi2 > '70.93333333' && employmentSkillsOctContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsOctContents.kpi2 >= '88.66666667' && employmentSkillsOctContents.kpi2 < '106.4')?'green':(employmentSkillsOctContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi3 == null)?'grey-2':(employmentSkillsOctContents.kpi3 >= '0' && employmentSkillsOctContents.kpi3 <= '22.6')?'red':(employmentSkillsOctContents.kpi3 > '22.6' && employmentSkillsOctContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsOctContents.kpi3 > '30.13333333' && employmentSkillsOctContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsOctContents.kpi3 >= '37.66666667' && employmentSkillsOctContents.kpi3 < '45.2')?'green':(employmentSkillsOctContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi4 == null)?'grey-2':(employmentSkillsOctContents.kpi4 >= '0' && employmentSkillsOctContents.kpi4 <= '4.8')?'red':(employmentSkillsOctContents.kpi4 > '4.8' && employmentSkillsOctContents.kpi4 <= '6.4')?'orange':(employmentSkillsOctContents.kpi4 > '6.4' && employmentSkillsOctContents.kpi4 < '8')?'yellow-7':(employmentSkillsOctContents.kpi4 >= '8' && employmentSkillsOctContents.kpi4 < '9.6')?'green':(employmentSkillsOctContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi4}}
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
                              :color="(employmentSkillsNovContents.kpi1 == null)?'grey-2':(employmentSkillsNovContents.kpi1 >= '0' && employmentSkillsNovContents.kpi1 <= '29.4')?'red':(employmentSkillsNovContents.kpi1 > '29.4' && employmentSkillsNovContents.kpi1 <= '39.2')?'orange':(employmentSkillsNovContents.kpi1 > '39.2' && employmentSkillsNovContents.kpi1 < '49')?'yellow-7':(employmentSkillsNovContents.kpi1 >= '49' && employmentSkillsNovContents.kpi1 < '58.8')?'green':(employmentSkillsNovContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi2 == null)?'grey-2':(employmentSkillsNovContents.kpi2 >= '0' && employmentSkillsNovContents.kpi2 <= '53.2')?'red':(employmentSkillsNovContents.kpi2 > '53.2' && employmentSkillsNovContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsNovContents.kpi2 > '70.93333333' && employmentSkillsNovContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsNovContents.kpi2 >= '88.66666667' && employmentSkillsNovContents.kpi2 < '106.4')?'green':(employmentSkillsNovContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi3 == null)?'grey-2':(employmentSkillsNovContents.kpi3 >= '0' && employmentSkillsNovContents.kpi3 <= '22.6')?'red':(employmentSkillsNovContents.kpi3 > '22.6' && employmentSkillsNovContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsNovContents.kpi3 > '30.13333333' && employmentSkillsNovContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsNovContents.kpi3 >= '37.66666667' && employmentSkillsNovContents.kpi3 < '45.2')?'green':(employmentSkillsNovContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi4 == null)?'grey-2':(employmentSkillsNovContents.kpi4 >= '0' && employmentSkillsNovContents.kpi4 <= '4.8')?'red':(employmentSkillsNovContents.kpi4 > '4.8' && employmentSkillsNovContents.kpi4 <= '6.4')?'orange':(employmentSkillsNovContents.kpi4 > '6.4' && employmentSkillsNovContents.kpi4 < '8')?'yellow-7':(employmentSkillsNovContents.kpi4 >= '8' && employmentSkillsNovContents.kpi4 < '9.6')?'green':(employmentSkillsNovContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi4}}
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
                              :color="(employmentSkillsDecContents.kpi1 == null)?'grey-2':(employmentSkillsDecContents.kpi1 >= '0' && employmentSkillsDecContents.kpi1 <= '29.4')?'red':(employmentSkillsDecContents.kpi1 > '29.4' && employmentSkillsDecContents.kpi1 <= '39.2')?'orange':(employmentSkillsDecContents.kpi1 > '39.2' && employmentSkillsDecContents.kpi1 < '49')?'yellow-7':(employmentSkillsDecContents.kpi1 >= '49' && employmentSkillsDecContents.kpi1 < '58.8')?'green':(employmentSkillsDecContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi2 == null)?'grey-2':(employmentSkillsDecContents.kpi2 >= '0' && employmentSkillsDecContents.kpi2 <= '53.2')?'red':(employmentSkillsDecContents.kpi2 > '53.2' && employmentSkillsDecContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsDecContents.kpi2 > '70.93333333' && employmentSkillsDecContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsDecContents.kpi2 >= '88.66666667' && employmentSkillsDecContents.kpi2 < '106.4')?'green':(employmentSkillsDecContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi3 == null)?'grey-2':(employmentSkillsDecContents.kpi3 >= '0' && employmentSkillsDecContents.kpi3 <= '22.6')?'red':(employmentSkillsDecContents.kpi3 > '22.6' && employmentSkillsDecContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsDecContents.kpi3 > '30.13333333' && employmentSkillsDecContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsDecContents.kpi3 >= '37.66666667' && employmentSkillsDecContents.kpi3 < '45.2')?'green':(employmentSkillsDecContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi4 == null)?'grey-2':(employmentSkillsDecContents.kpi4 >= '0' && employmentSkillsDecContents.kpi4 <= '4.8')?'red':(employmentSkillsDecContents.kpi4 > '4.8' && employmentSkillsDecContents.kpi4 <= '6.4')?'orange':(employmentSkillsDecContents.kpi4 > '6.4' && employmentSkillsDecContents.kpi4 < '8')?'yellow-7':(employmentSkillsDecContents.kpi4 >= '8' && employmentSkillsDecContents.kpi4 < '9.6')?'green':(employmentSkillsDecContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi4}}
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
                              :color="(employmentSkillsJanContents.kpi1 == null)?'grey-2':(employmentSkillsJanContents.kpi1 >= '0' && employmentSkillsJanContents.kpi1 <= '29.4')?'red':(employmentSkillsJanContents.kpi1 > '29.4' && employmentSkillsJanContents.kpi1 <= '39.2')?'orange':(employmentSkillsJanContents.kpi1 > '39.2' && employmentSkillsJanContents.kpi1 < '49')?'yellow-7':(employmentSkillsJanContents.kpi1 >= '49' && employmentSkillsJanContents.kpi1 < '58.8')?'green':(employmentSkillsJanContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi2 == null)?'grey-2':(employmentSkillsJanContents.kpi2 >= '0' && employmentSkillsJanContents.kpi2 <= '53.2')?'red':(employmentSkillsJanContents.kpi2 > '53.2' && employmentSkillsJanContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJanContents.kpi2 > '70.93333333' && employmentSkillsJanContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJanContents.kpi2 >= '88.66666667' && employmentSkillsJanContents.kpi2 < '106.4')?'green':(employmentSkillsJanContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi3 == null)?'grey-2':(employmentSkillsJanContents.kpi3 >= '0' && employmentSkillsJanContents.kpi3 <= '22.6')?'red':(employmentSkillsJanContents.kpi3 > '22.6' && employmentSkillsJanContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJanContents.kpi3 > '30.13333333' && employmentSkillsJanContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJanContents.kpi3 >= '37.66666667' && employmentSkillsJanContents.kpi3 < '45.2')?'green':(employmentSkillsJanContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi4 == null)?'grey-2':(employmentSkillsJanContents.kpi4 >= '0' && employmentSkillsJanContents.kpi4 <= '4.8')?'red':(employmentSkillsJanContents.kpi4 > '4.8' && employmentSkillsJanContents.kpi4 <= '6.4')?'orange':(employmentSkillsJanContents.kpi4 > '6.4' && employmentSkillsJanContents.kpi4 < '8')?'yellow-7':(employmentSkillsJanContents.kpi4 >= '8' && employmentSkillsJanContents.kpi4 < '9.6')?'green':(employmentSkillsJanContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi4}}
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
                              :color="(employmentSkillsFebContents.kpi1 == null)?'grey-2':(employmentSkillsFebContents.kpi1 >= '0' && employmentSkillsFebContents.kpi1 <= '29.4')?'red':(employmentSkillsFebContents.kpi1 > '29.4' && employmentSkillsFebContents.kpi1 <= '39.2')?'orange':(employmentSkillsFebContents.kpi1 > '39.2' && employmentSkillsFebContents.kpi1 < '49')?'yellow-7':(employmentSkillsFebContents.kpi1 >= '49' && employmentSkillsFebContents.kpi1 < '58.8')?'green':(employmentSkillsFebContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi2 == null)?'grey-2':(employmentSkillsFebContents.kpi2 >= '0' && employmentSkillsFebContents.kpi2 <= '53.2')?'red':(employmentSkillsFebContents.kpi2 > '53.2' && employmentSkillsFebContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsFebContents.kpi2 > '70.93333333' && employmentSkillsFebContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsFebContents.kpi2 >= '88.66666667' && employmentSkillsFebContents.kpi2 < '106.4')?'green':(employmentSkillsFebContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi3 == null)?'grey-2':(employmentSkillsFebContents.kpi3 >= '0' && employmentSkillsFebContents.kpi3 <= '22.6')?'red':(employmentSkillsFebContents.kpi3 > '22.6' && employmentSkillsFebContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsFebContents.kpi3 > '30.13333333' && employmentSkillsFebContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsFebContents.kpi3 >= '37.66666667' && employmentSkillsFebContents.kpi3 < '45.2')?'green':(employmentSkillsFebContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi4 == null)?'grey-2':(employmentSkillsFebContents.kpi4 >= '0' && employmentSkillsFebContents.kpi4 <= '4.8')?'red':(employmentSkillsFebContents.kpi4 > '4.8' && employmentSkillsFebContents.kpi4 <= '6.4')?'orange':(employmentSkillsFebContents.kpi4 > '6.4' && employmentSkillsFebContents.kpi4 < '8')?'yellow-7':(employmentSkillsFebContents.kpi4 >= '8' && employmentSkillsFebContents.kpi4 < '9.6')?'green':(employmentSkillsFebContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi4}}
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
                              :color="(employmentSkillsMarContents.kpi1 == null)?'grey-2':(employmentSkillsMarContents.kpi1 >= '0' && employmentSkillsMarContents.kpi1 <= '29.4')?'red':(employmentSkillsMarContents.kpi1 > '29.4' && employmentSkillsMarContents.kpi1 <= '39.2')?'orange':(employmentSkillsMarContents.kpi1 > '39.2' && employmentSkillsMarContents.kpi1 < '49')?'yellow-7':(employmentSkillsMarContents.kpi1 >= '49' && employmentSkillsMarContents.kpi1 < '58.8')?'green':(employmentSkillsMarContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi2 == null)?'grey-2':(employmentSkillsMarContents.kpi2 >= '0' && employmentSkillsMarContents.kpi2 <= '53.2')?'red':(employmentSkillsMarContents.kpi2 > '53.2' && employmentSkillsMarContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMarContents.kpi2 > '70.93333333' && employmentSkillsMarContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMarContents.kpi2 >= '88.66666667' && employmentSkillsMarContents.kpi2 < '106.4')?'green':(employmentSkillsMarContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi3 == null)?'grey-2':(employmentSkillsMarContents.kpi3 >= '0' && employmentSkillsMarContents.kpi3 <= '22.6')?'red':(employmentSkillsMarContents.kpi3 > '22.6' && employmentSkillsMarContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMarContents.kpi3 > '30.13333333' && employmentSkillsMarContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMarContents.kpi3 >= '37.66666667' && employmentSkillsMarContents.kpi3 < '45.2')?'green':(employmentSkillsMarContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi4 == null)?'grey-2':(employmentSkillsMarContents.kpi4 >= '0' && employmentSkillsMarContents.kpi4 <= '4.8')?'red':(employmentSkillsMarContents.kpi4 > '4.8' && employmentSkillsMarContents.kpi4 <= '6.4')?'orange':(employmentSkillsMarContents.kpi4 > '6.4' && employmentSkillsMarContents.kpi4 < '8')?'yellow-7':(employmentSkillsMarContents.kpi4 >= '8' && employmentSkillsMarContents.kpi4 < '9.6')?'green':(employmentSkillsMarContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi4}}
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
                              :color="(employmentSkillsAprContents.kpi1 == null)?'grey-2':(employmentSkillsAprContents.kpi1 >= '0' && employmentSkillsAprContents.kpi1 <= '29.4')?'red':(employmentSkillsAprContents.kpi1 > '29.4' && employmentSkillsAprContents.kpi1 <= '39.2')?'orange':(employmentSkillsAprContents.kpi1 > '39.2' && employmentSkillsAprContents.kpi1 < '49')?'yellow-7':(employmentSkillsAprContents.kpi1 >= '49' && employmentSkillsAprContents.kpi1 < '58.8')?'green':(employmentSkillsAprContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi2 == null)?'grey-2':(employmentSkillsAprContents.kpi2 >= '0' && employmentSkillsAprContents.kpi2 <= '53.2')?'red':(employmentSkillsAprContents.kpi2 > '53.2' && employmentSkillsAprContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAprContents.kpi2 > '70.93333333' && employmentSkillsAprContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAprContents.kpi2 >= '88.66666667' && employmentSkillsAprContents.kpi2 < '106.4')?'green':(employmentSkillsAprContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi3 == null)?'grey-2':(employmentSkillsAprContents.kpi3 >= '0' && employmentSkillsAprContents.kpi3 <= '22.6')?'red':(employmentSkillsAprContents.kpi3 > '22.6' && employmentSkillsAprContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAprContents.kpi3 > '30.13333333' && employmentSkillsAprContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAprContents.kpi3 >= '37.66666667' && employmentSkillsAprContents.kpi3 < '45.2')?'green':(employmentSkillsAprContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi4 == null)?'grey-2':(employmentSkillsAprContents.kpi4 >= '0' && employmentSkillsAprContents.kpi4 <= '4.8')?'red':(employmentSkillsAprContents.kpi4 > '4.8' && employmentSkillsAprContents.kpi4 <= '6.4')?'orange':(employmentSkillsAprContents.kpi4 > '6.4' && employmentSkillsAprContents.kpi4 < '8')?'yellow-7':(employmentSkillsAprContents.kpi4 >= '8' && employmentSkillsAprContents.kpi4 < '9.6')?'green':(employmentSkillsAprContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi4}}
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
                              :color="(employmentSkillsMayContents.kpi1 == null)?'grey-2':(employmentSkillsMayContents.kpi1 >= '0' && employmentSkillsMayContents.kpi1 <= '29.4')?'red':(employmentSkillsMayContents.kpi1 > '29.4' && employmentSkillsMayContents.kpi1 <= '39.2')?'orange':(employmentSkillsMayContents.kpi1 > '39.2' && employmentSkillsMayContents.kpi1 < '49')?'yellow-7':(employmentSkillsMayContents.kpi1 >= '49' && employmentSkillsMayContents.kpi1 < '58.8')?'green':(employmentSkillsMayContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi2 == null)?'grey-2':(employmentSkillsMayContents.kpi2 >= '0' && employmentSkillsMayContents.kpi2 <= '53.2')?'red':(employmentSkillsMayContents.kpi2 > '53.2' && employmentSkillsMayContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMayContents.kpi2 > '70.93333333' && employmentSkillsMayContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMayContents.kpi2 >= '88.66666667' && employmentSkillsMayContents.kpi2 < '106.4')?'green':(employmentSkillsMayContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi3 == null)?'grey-2':(employmentSkillsMayContents.kpi3 >= '0' && employmentSkillsMayContents.kpi3 <= '22.6')?'red':(employmentSkillsMayContents.kpi3 > '22.6' && employmentSkillsMayContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMayContents.kpi3 > '30.13333333' && employmentSkillsMayContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMayContents.kpi3 >= '37.66666667' && employmentSkillsMayContents.kpi3 < '45.2')?'green':(employmentSkillsMayContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi4 == null)?'grey-2':(employmentSkillsMayContents.kpi4 >= '0' && employmentSkillsMayContents.kpi4 <= '4.8')?'red':(employmentSkillsMayContents.kpi4 > '4.8' && employmentSkillsMayContents.kpi4 <= '6.4')?'orange':(employmentSkillsMayContents.kpi4 > '6.4' && employmentSkillsMayContents.kpi4 < '8')?'yellow-7':(employmentSkillsMayContents.kpi4 >= '8' && employmentSkillsMayContents.kpi4 < '9.6')?'green':(employmentSkillsMayContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi4}}
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
                              :color="(employmentSkillsJunContents.kpi1 == null)?'grey-2':(employmentSkillsJunContents.kpi1 >= '0' && employmentSkillsJunContents.kpi1 <= '29.4')?'red':(employmentSkillsJunContents.kpi1 > '29.4' && employmentSkillsJunContents.kpi1 <= '39.2')?'orange':(employmentSkillsJunContents.kpi1 > '39.2' && employmentSkillsJunContents.kpi1 < '49')?'yellow-7':(employmentSkillsJunContents.kpi1 >= '49' && employmentSkillsJunContents.kpi1 < '58.8')?'green':(employmentSkillsJunContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi2 == null)?'grey-2':(employmentSkillsJunContents.kpi2 >= '0' && employmentSkillsJunContents.kpi2 <= '53.2')?'red':(employmentSkillsJunContents.kpi2 > '53.2' && employmentSkillsJunContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJunContents.kpi2 > '70.93333333' && employmentSkillsJunContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJunContents.kpi2 >= '88.66666667' && employmentSkillsJunContents.kpi2 < '106.4')?'green':(employmentSkillsJunContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi3 == null)?'grey-2':(employmentSkillsJunContents.kpi3 >= '0' && employmentSkillsJunContents.kpi3 <= '22.6')?'red':(employmentSkillsJunContents.kpi3 > '22.6' && employmentSkillsJunContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJunContents.kpi3 > '30.13333333' && employmentSkillsJunContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJunContents.kpi3 >= '37.66666667' && employmentSkillsJunContents.kpi3 < '45.2')?'green':(employmentSkillsJunContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi4 == null)?'grey-2':(employmentSkillsJunContents.kpi4 >= '0' && employmentSkillsJunContents.kpi4 <= '4.8')?'red':(employmentSkillsJunContents.kpi4 > '4.8' && employmentSkillsJunContents.kpi4 <= '6.4')?'orange':(employmentSkillsJunContents.kpi4 > '6.4' && employmentSkillsJunContents.kpi4 < '8')?'yellow-7':(employmentSkillsJunContents.kpi4 >= '8' && employmentSkillsJunContents.kpi4 < '9.6')?'green':(employmentSkillsJunContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi4}}
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
                              :color="(employmentSkillsJulContents.kpi1 == null)?'grey-2':(employmentSkillsJulContents.kpi1 >= '0' && employmentSkillsJulContents.kpi1 <= '29.4')?'red':(employmentSkillsJulContents.kpi1 > '29.4' && employmentSkillsJulContents.kpi1 <= '39.2')?'orange':(employmentSkillsJulContents.kpi1 > '39.2' && employmentSkillsJulContents.kpi1 < '49')?'yellow-7':(employmentSkillsJulContents.kpi1 >= '49' && employmentSkillsJulContents.kpi1 < '58.8')?'green':(employmentSkillsJulContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi2 == null)?'grey-2':(employmentSkillsJulContents.kpi2 >= '0' && employmentSkillsJulContents.kpi2 <= '53.2')?'red':(employmentSkillsJulContents.kpi2 > '53.2' && employmentSkillsJulContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJulContents.kpi2 > '70.93333333' && employmentSkillsJulContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJulContents.kpi2 >= '88.66666667' && employmentSkillsJulContents.kpi2 < '106.4')?'green':(employmentSkillsJulContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi3 == null)?'grey-2':(employmentSkillsJulContents.kpi3 >= '0' && employmentSkillsJulContents.kpi3 <= '22.6')?'red':(employmentSkillsJulContents.kpi3 > '22.6' && employmentSkillsJulContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJulContents.kpi3 > '30.13333333' && employmentSkillsJulContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJulContents.kpi3 >= '37.66666667' && employmentSkillsJulContents.kpi3 < '45.2')?'green':(employmentSkillsJulContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi4 == null)?'grey-2':(employmentSkillsJulContents.kpi4 >= '0' && employmentSkillsJulContents.kpi4 <= '4.8')?'red':(employmentSkillsJulContents.kpi4 > '4.8' && employmentSkillsJulContents.kpi4 <= '6.4')?'orange':(employmentSkillsJulContents.kpi4 > '6.4' && employmentSkillsJulContents.kpi4 < '8')?'yellow-7':(employmentSkillsJulContents.kpi4 >= '8' && employmentSkillsJulContents.kpi4 < '9.6')?'green':(employmentSkillsJulContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi4}}
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
                              :color="(employmentSkillsAugContents.kpi1 == null)?'grey-2':(employmentSkillsAugContents.kpi1 >= '0' && employmentSkillsAugContents.kpi1 <= '29.4')?'red':(employmentSkillsAugContents.kpi1 > '29.4' && employmentSkillsAugContents.kpi1 <= '39.2')?'orange':(employmentSkillsAugContents.kpi1 > '39.2' && employmentSkillsAugContents.kpi1 < '49')?'yellow-7':(employmentSkillsAugContents.kpi1 >= '49' && employmentSkillsAugContents.kpi1 < '58.8')?'green':(employmentSkillsAugContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi2 == null)?'grey-2':(employmentSkillsAugContents.kpi2 >= '0' && employmentSkillsAugContents.kpi2 <= '53.2')?'red':(employmentSkillsAugContents.kpi2 > '53.2' && employmentSkillsAugContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAugContents.kpi2 > '70.93333333' && employmentSkillsAugContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAugContents.kpi2 >= '88.66666667' && employmentSkillsAugContents.kpi2 < '106.4')?'green':(employmentSkillsAugContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi3 == null)?'grey-2':(employmentSkillsAugContents.kpi3 >= '0' && employmentSkillsAugContents.kpi3 <= '22.6')?'red':(employmentSkillsAugContents.kpi3 > '22.6' && employmentSkillsAugContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAugContents.kpi3 > '30.13333333' && employmentSkillsAugContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAugContents.kpi3 >= '37.66666667' && employmentSkillsAugContents.kpi3 < '45.2')?'green':(employmentSkillsAugContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi4 == null)?'grey-2':(employmentSkillsAugContents.kpi4 >= '0' && employmentSkillsAugContents.kpi4 <= '4.8')?'red':(employmentSkillsAugContents.kpi4 > '4.8' && employmentSkillsAugContents.kpi4 <= '6.4')?'orange':(employmentSkillsAugContents.kpi4 > '6.4' && employmentSkillsAugContents.kpi4 < '8')?'yellow-7':(employmentSkillsAugContents.kpi4 >= '8' && employmentSkillsAugContents.kpi4 < '9.6')?'green':(employmentSkillsAugContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi4}}
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
                              :color="(employmentSkillsSepContents.kpi1 == null)?'grey-2':(employmentSkillsSepContents.kpi1 >= '0' && employmentSkillsSepContents.kpi1 <= '29.4')?'red':(employmentSkillsSepContents.kpi1 > '29.4' && employmentSkillsSepContents.kpi1 <= '39.2')?'orange':(employmentSkillsSepContents.kpi1 > '39.2' && employmentSkillsSepContents.kpi1 < '49')?'yellow-7':(employmentSkillsSepContents.kpi1 >= '49' && employmentSkillsSepContents.kpi1 < '58.8')?'green':(employmentSkillsSepContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi2 == null)?'grey-2':(employmentSkillsSepContents.kpi2 >= '0' && employmentSkillsSepContents.kpi2 <= '53.2')?'red':(employmentSkillsSepContents.kpi2 > '53.2' && employmentSkillsSepContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsSepContents.kpi2 > '70.93333333' && employmentSkillsSepContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsSepContents.kpi2 >= '88.66666667' && employmentSkillsSepContents.kpi2 < '106.4')?'green':(employmentSkillsSepContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi3 == null)?'grey-2':(employmentSkillsSepContents.kpi3 >= '0' && employmentSkillsSepContents.kpi3 <= '22.6')?'red':(employmentSkillsSepContents.kpi3 > '22.6' && employmentSkillsSepContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsSepContents.kpi3 > '30.13333333' && employmentSkillsSepContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsSepContents.kpi3 >= '37.66666667' && employmentSkillsSepContents.kpi3 < '45.2')?'green':(employmentSkillsSepContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi4 == null)?'grey-2':(employmentSkillsSepContents.kpi4 >= '0' && employmentSkillsSepContents.kpi4 <= '4.8')?'red':(employmentSkillsSepContents.kpi4 > '4.8' && employmentSkillsSepContents.kpi4 <= '6.4')?'orange':(employmentSkillsSepContents.kpi4 > '6.4' && employmentSkillsSepContents.kpi4 < '8')?'yellow-7':(employmentSkillsSepContents.kpi4 >= '8' && employmentSkillsSepContents.kpi4 < '9.6')?'green':(employmentSkillsSepContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi4}}
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
                              :color="(employmentSkillsOctContents.kpi1 == null)?'grey-2':(employmentSkillsOctContents.kpi1 >= '0' && employmentSkillsOctContents.kpi1 <= '29.4')?'red':(employmentSkillsOctContents.kpi1 > '29.4' && employmentSkillsOctContents.kpi1 <= '39.2')?'orange':(employmentSkillsOctContents.kpi1 > '39.2' && employmentSkillsOctContents.kpi1 < '49')?'yellow-7':(employmentSkillsOctContents.kpi1 >= '49' && employmentSkillsOctContents.kpi1 < '58.8')?'green':(employmentSkillsOctContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi2 == null)?'grey-2':(employmentSkillsOctContents.kpi2 >= '0' && employmentSkillsOctContents.kpi2 <= '53.2')?'red':(employmentSkillsOctContents.kpi2 > '53.2' && employmentSkillsOctContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsOctContents.kpi2 > '70.93333333' && employmentSkillsOctContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsOctContents.kpi2 >= '88.66666667' && employmentSkillsOctContents.kpi2 < '106.4')?'green':(employmentSkillsOctContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi3 == null)?'grey-2':(employmentSkillsOctContents.kpi3 >= '0' && employmentSkillsOctContents.kpi3 <= '22.6')?'red':(employmentSkillsOctContents.kpi3 > '22.6' && employmentSkillsOctContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsOctContents.kpi3 > '30.13333333' && employmentSkillsOctContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsOctContents.kpi3 >= '37.66666667' && employmentSkillsOctContents.kpi3 < '45.2')?'green':(employmentSkillsOctContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi4 == null)?'grey-2':(employmentSkillsOctContents.kpi4 >= '0' && employmentSkillsOctContents.kpi4 <= '4.8')?'red':(employmentSkillsOctContents.kpi4 > '4.8' && employmentSkillsOctContents.kpi4 <= '6.4')?'orange':(employmentSkillsOctContents.kpi4 > '6.4' && employmentSkillsOctContents.kpi4 < '8')?'yellow-7':(employmentSkillsOctContents.kpi4 >= '8' && employmentSkillsOctContents.kpi4 < '9.6')?'green':(employmentSkillsOctContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi4}}
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
                              :color="(employmentSkillsNovContents.kpi1 == null)?'grey-2':(employmentSkillsNovContents.kpi1 >= '0' && employmentSkillsNovContents.kpi1 <= '29.4')?'red':(employmentSkillsNovContents.kpi1 > '29.4' && employmentSkillsNovContents.kpi1 <= '39.2')?'orange':(employmentSkillsNovContents.kpi1 > '39.2' && employmentSkillsNovContents.kpi1 < '49')?'yellow-7':(employmentSkillsNovContents.kpi1 >= '49' && employmentSkillsNovContents.kpi1 < '58.8')?'green':(employmentSkillsNovContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi2 == null)?'grey-2':(employmentSkillsNovContents.kpi2 >= '0' && employmentSkillsNovContents.kpi2 <= '53.2')?'red':(employmentSkillsNovContents.kpi2 > '53.2' && employmentSkillsNovContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsNovContents.kpi2 > '70.93333333' && employmentSkillsNovContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsNovContents.kpi2 >= '88.66666667' && employmentSkillsNovContents.kpi2 < '106.4')?'green':(employmentSkillsNovContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi3 == null)?'grey-2':(employmentSkillsNovContents.kpi3 >= '0' && employmentSkillsNovContents.kpi3 <= '22.6')?'red':(employmentSkillsNovContents.kpi3 > '22.6' && employmentSkillsNovContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsNovContents.kpi3 > '30.13333333' && employmentSkillsNovContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsNovContents.kpi3 >= '37.66666667' && employmentSkillsNovContents.kpi3 < '45.2')?'green':(employmentSkillsNovContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi4 == null)?'grey-2':(employmentSkillsNovContents.kpi4 >= '0' && employmentSkillsNovContents.kpi4 <= '4.8')?'red':(employmentSkillsNovContents.kpi4 > '4.8' && employmentSkillsNovContents.kpi4 <= '6.4')?'orange':(employmentSkillsNovContents.kpi4 > '6.4' && employmentSkillsNovContents.kpi4 < '8')?'yellow-7':(employmentSkillsNovContents.kpi4 >= '8' && employmentSkillsNovContents.kpi4 < '9.6')?'green':(employmentSkillsNovContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi4}}
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
                              :color="(employmentSkillsDecContents.kpi1 == null)?'grey-2':(employmentSkillsDecContents.kpi1 >= '0' && employmentSkillsDecContents.kpi1 <= '29.4')?'red':(employmentSkillsDecContents.kpi1 > '29.4' && employmentSkillsDecContents.kpi1 <= '39.2')?'orange':(employmentSkillsDecContents.kpi1 > '39.2' && employmentSkillsDecContents.kpi1 < '49')?'yellow-7':(employmentSkillsDecContents.kpi1 >= '49' && employmentSkillsDecContents.kpi1 < '58.8')?'green':(employmentSkillsDecContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi2 == null)?'grey-2':(employmentSkillsDecContents.kpi2 >= '0' && employmentSkillsDecContents.kpi2 <= '53.2')?'red':(employmentSkillsDecContents.kpi2 > '53.2' && employmentSkillsDecContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsDecContents.kpi2 > '70.93333333' && employmentSkillsDecContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsDecContents.kpi2 >= '88.66666667' && employmentSkillsDecContents.kpi2 < '106.4')?'green':(employmentSkillsDecContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi3 == null)?'grey-2':(employmentSkillsDecContents.kpi3 >= '0' && employmentSkillsDecContents.kpi3 <= '22.6')?'red':(employmentSkillsDecContents.kpi3 > '22.6' && employmentSkillsDecContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsDecContents.kpi3 > '30.13333333' && employmentSkillsDecContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsDecContents.kpi3 >= '37.66666667' && employmentSkillsDecContents.kpi3 < '45.2')?'green':(employmentSkillsDecContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi4 == null)?'grey-2':(employmentSkillsDecContents.kpi4 >= '0' && employmentSkillsDecContents.kpi4 <= '4.8')?'red':(employmentSkillsDecContents.kpi4 > '4.8' && employmentSkillsDecContents.kpi4 <= '6.4')?'orange':(employmentSkillsDecContents.kpi4 > '6.4' && employmentSkillsDecContents.kpi4 < '8')?'yellow-7':(employmentSkillsDecContents.kpi4 >= '8' && employmentSkillsDecContents.kpi4 < '9.6')?'green':(employmentSkillsDecContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi4}}
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
                              :color="(employmentSkillsJanContents.kpi1 == null)?'grey-2':(employmentSkillsJanContents.kpi1 >= '0' && employmentSkillsJanContents.kpi1 <= '29.4')?'red':(employmentSkillsJanContents.kpi1 > '29.4' && employmentSkillsJanContents.kpi1 <= '39.2')?'orange':(employmentSkillsJanContents.kpi1 > '39.2' && employmentSkillsJanContents.kpi1 < '49')?'yellow-7':(employmentSkillsJanContents.kpi1 >= '49' && employmentSkillsJanContents.kpi1 < '58.8')?'green':(employmentSkillsJanContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi2 == null)?'grey-2':(employmentSkillsJanContents.kpi2 >= '0' && employmentSkillsJanContents.kpi2 <= '53.2')?'red':(employmentSkillsJanContents.kpi2 > '53.2' && employmentSkillsJanContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJanContents.kpi2 > '70.93333333' && employmentSkillsJanContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJanContents.kpi2 >= '88.66666667' && employmentSkillsJanContents.kpi2 < '106.4')?'green':(employmentSkillsJanContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi3 == null)?'grey-2':(employmentSkillsJanContents.kpi3 >= '0' && employmentSkillsJanContents.kpi3 <= '22.6')?'red':(employmentSkillsJanContents.kpi3 > '22.6' && employmentSkillsJanContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJanContents.kpi3 > '30.13333333' && employmentSkillsJanContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJanContents.kpi3 >= '37.66666667' && employmentSkillsJanContents.kpi3 < '45.2')?'green':(employmentSkillsJanContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi4 == null)?'grey-2':(employmentSkillsJanContents.kpi4 >= '0' && employmentSkillsJanContents.kpi4 <= '4.8')?'red':(employmentSkillsJanContents.kpi4 > '4.8' && employmentSkillsJanContents.kpi4 <= '6.4')?'orange':(employmentSkillsJanContents.kpi4 > '6.4' && employmentSkillsJanContents.kpi4 < '8')?'yellow-7':(employmentSkillsJanContents.kpi4 >= '8' && employmentSkillsJanContents.kpi4 < '9.6')?'green':(employmentSkillsJanContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi4}}
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
                              :color="(employmentSkillsFebContents.kpi1 == null)?'grey-2':(employmentSkillsFebContents.kpi1 >= '0' && employmentSkillsFebContents.kpi1 <= '29.4')?'red':(employmentSkillsFebContents.kpi1 > '29.4' && employmentSkillsFebContents.kpi1 <= '39.2')?'orange':(employmentSkillsFebContents.kpi1 > '39.2' && employmentSkillsFebContents.kpi1 < '49')?'yellow-7':(employmentSkillsFebContents.kpi1 >= '49' && employmentSkillsFebContents.kpi1 < '58.8')?'green':(employmentSkillsFebContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi2 == null)?'grey-2':(employmentSkillsFebContents.kpi2 >= '0' && employmentSkillsFebContents.kpi2 <= '53.2')?'red':(employmentSkillsFebContents.kpi2 > '53.2' && employmentSkillsFebContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsFebContents.kpi2 > '70.93333333' && employmentSkillsFebContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsFebContents.kpi2 >= '88.66666667' && employmentSkillsFebContents.kpi2 < '106.4')?'green':(employmentSkillsFebContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi3 == null)?'grey-2':(employmentSkillsFebContents.kpi3 >= '0' && employmentSkillsFebContents.kpi3 <= '22.6')?'red':(employmentSkillsFebContents.kpi3 > '22.6' && employmentSkillsFebContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsFebContents.kpi3 > '30.13333333' && employmentSkillsFebContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsFebContents.kpi3 >= '37.66666667' && employmentSkillsFebContents.kpi3 < '45.2')?'green':(employmentSkillsFebContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi4 == null)?'grey-2':(employmentSkillsFebContents.kpi4 >= '0' && employmentSkillsFebContents.kpi4 <= '4.8')?'red':(employmentSkillsFebContents.kpi4 > '4.8' && employmentSkillsFebContents.kpi4 <= '6.4')?'orange':(employmentSkillsFebContents.kpi4 > '6.4' && employmentSkillsFebContents.kpi4 < '8')?'yellow-7':(employmentSkillsFebContents.kpi4 >= '8' && employmentSkillsFebContents.kpi4 < '9.6')?'green':(employmentSkillsFebContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi4}}
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
                              :color="(employmentSkillsMarContents.kpi1 == null)?'grey-2':(employmentSkillsMarContents.kpi1 >= '0' && employmentSkillsMarContents.kpi1 <= '29.4')?'red':(employmentSkillsMarContents.kpi1 > '29.4' && employmentSkillsMarContents.kpi1 <= '39.2')?'orange':(employmentSkillsMarContents.kpi1 > '39.2' && employmentSkillsMarContents.kpi1 < '49')?'yellow-7':(employmentSkillsMarContents.kpi1 >= '49' && employmentSkillsMarContents.kpi1 < '58.8')?'green':(employmentSkillsMarContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi2 == null)?'grey-2':(employmentSkillsMarContents.kpi2 >= '0' && employmentSkillsMarContents.kpi2 <= '53.2')?'red':(employmentSkillsMarContents.kpi2 > '53.2' && employmentSkillsMarContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMarContents.kpi2 > '70.93333333' && employmentSkillsMarContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMarContents.kpi2 >= '88.66666667' && employmentSkillsMarContents.kpi2 < '106.4')?'green':(employmentSkillsMarContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi3 == null)?'grey-2':(employmentSkillsMarContents.kpi3 >= '0' && employmentSkillsMarContents.kpi3 <= '22.6')?'red':(employmentSkillsMarContents.kpi3 > '22.6' && employmentSkillsMarContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMarContents.kpi3 > '30.13333333' && employmentSkillsMarContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMarContents.kpi3 >= '37.66666667' && employmentSkillsMarContents.kpi3 < '45.2')?'green':(employmentSkillsMarContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi4 == null)?'grey-2':(employmentSkillsMarContents.kpi4 >= '0' && employmentSkillsMarContents.kpi4 <= '4.8')?'red':(employmentSkillsMarContents.kpi4 > '4.8' && employmentSkillsMarContents.kpi4 <= '6.4')?'orange':(employmentSkillsMarContents.kpi4 > '6.4' && employmentSkillsMarContents.kpi4 < '8')?'yellow-7':(employmentSkillsMarContents.kpi4 >= '8' && employmentSkillsMarContents.kpi4 < '9.6')?'green':(employmentSkillsMarContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi4}}
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
                              :color="(employmentSkillsAprContents.kpi1 == null)?'grey-2':(employmentSkillsAprContents.kpi1 >= '0' && employmentSkillsAprContents.kpi1 <= '29.4')?'red':(employmentSkillsAprContents.kpi1 > '29.4' && employmentSkillsAprContents.kpi1 <= '39.2')?'orange':(employmentSkillsAprContents.kpi1 > '39.2' && employmentSkillsAprContents.kpi1 < '49')?'yellow-7':(employmentSkillsAprContents.kpi1 >= '49' && employmentSkillsAprContents.kpi1 < '58.8')?'green':(employmentSkillsAprContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi2 == null)?'grey-2':(employmentSkillsAprContents.kpi2 >= '0' && employmentSkillsAprContents.kpi2 <= '53.2')?'red':(employmentSkillsAprContents.kpi2 > '53.2' && employmentSkillsAprContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAprContents.kpi2 > '70.93333333' && employmentSkillsAprContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAprContents.kpi2 >= '88.66666667' && employmentSkillsAprContents.kpi2 < '106.4')?'green':(employmentSkillsAprContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi3 == null)?'grey-2':(employmentSkillsAprContents.kpi3 >= '0' && employmentSkillsAprContents.kpi3 <= '22.6')?'red':(employmentSkillsAprContents.kpi3 > '22.6' && employmentSkillsAprContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAprContents.kpi3 > '30.13333333' && employmentSkillsAprContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAprContents.kpi3 >= '37.66666667' && employmentSkillsAprContents.kpi3 < '45.2')?'green':(employmentSkillsAprContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi4 == null)?'grey-2':(employmentSkillsAprContents.kpi4 >= '0' && employmentSkillsAprContents.kpi4 <= '4.8')?'red':(employmentSkillsAprContents.kpi4 > '4.8' && employmentSkillsAprContents.kpi4 <= '6.4')?'orange':(employmentSkillsAprContents.kpi4 > '6.4' && employmentSkillsAprContents.kpi4 < '8')?'yellow-7':(employmentSkillsAprContents.kpi4 >= '8' && employmentSkillsAprContents.kpi4 < '9.6')?'green':(employmentSkillsAprContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi4}}
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
                              :color="(employmentSkillsMayContents.kpi1 == null)?'grey-2':(employmentSkillsMayContents.kpi1 >= '0' && employmentSkillsMayContents.kpi1 <= '29.4')?'red':(employmentSkillsMayContents.kpi1 > '29.4' && employmentSkillsMayContents.kpi1 <= '39.2')?'orange':(employmentSkillsMayContents.kpi1 > '39.2' && employmentSkillsMayContents.kpi1 < '49')?'yellow-7':(employmentSkillsMayContents.kpi1 >= '49' && employmentSkillsMayContents.kpi1 < '58.8')?'green':(employmentSkillsMayContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi2 == null)?'grey-2':(employmentSkillsMayContents.kpi2 >= '0' && employmentSkillsMayContents.kpi2 <= '53.2')?'red':(employmentSkillsMayContents.kpi2 > '53.2' && employmentSkillsMayContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMayContents.kpi2 > '70.93333333' && employmentSkillsMayContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMayContents.kpi2 >= '88.66666667' && employmentSkillsMayContents.kpi2 < '106.4')?'green':(employmentSkillsMayContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi3 == null)?'grey-2':(employmentSkillsMayContents.kpi3 >= '0' && employmentSkillsMayContents.kpi3 <= '22.6')?'red':(employmentSkillsMayContents.kpi3 > '22.6' && employmentSkillsMayContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMayContents.kpi3 > '30.13333333' && employmentSkillsMayContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMayContents.kpi3 >= '37.66666667' && employmentSkillsMayContents.kpi3 < '45.2')?'green':(employmentSkillsMayContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi4 == null)?'grey-2':(employmentSkillsMayContents.kpi4 >= '0' && employmentSkillsMayContents.kpi4 <= '4.8')?'red':(employmentSkillsMayContents.kpi4 > '4.8' && employmentSkillsMayContents.kpi4 <= '6.4')?'orange':(employmentSkillsMayContents.kpi4 > '6.4' && employmentSkillsMayContents.kpi4 < '8')?'yellow-7':(employmentSkillsMayContents.kpi4 >= '8' && employmentSkillsMayContents.kpi4 < '9.6')?'green':(employmentSkillsMayContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi4}}
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
                              :color="(employmentSkillsJunContents.kpi1 == null)?'grey-2':(employmentSkillsJunContents.kpi1 >= '0' && employmentSkillsJunContents.kpi1 <= '29.4')?'red':(employmentSkillsJunContents.kpi1 > '29.4' && employmentSkillsJunContents.kpi1 <= '39.2')?'orange':(employmentSkillsJunContents.kpi1 > '39.2' && employmentSkillsJunContents.kpi1 < '49')?'yellow-7':(employmentSkillsJunContents.kpi1 >= '49' && employmentSkillsJunContents.kpi1 < '58.8')?'green':(employmentSkillsJunContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi2 == null)?'grey-2':(employmentSkillsJunContents.kpi2 >= '0' && employmentSkillsJunContents.kpi2 <= '53.2')?'red':(employmentSkillsJunContents.kpi2 > '53.2' && employmentSkillsJunContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJunContents.kpi2 > '70.93333333' && employmentSkillsJunContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJunContents.kpi2 >= '88.66666667' && employmentSkillsJunContents.kpi2 < '106.4')?'green':(employmentSkillsJunContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi3 == null)?'grey-2':(employmentSkillsJunContents.kpi3 >= '0' && employmentSkillsJunContents.kpi3 <= '22.6')?'red':(employmentSkillsJunContents.kpi3 > '22.6' && employmentSkillsJunContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJunContents.kpi3 > '30.13333333' && employmentSkillsJunContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJunContents.kpi3 >= '37.66666667' && employmentSkillsJunContents.kpi3 < '45.2')?'green':(employmentSkillsJunContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi4 == null)?'grey-2':(employmentSkillsJunContents.kpi4 >= '0' && employmentSkillsJunContents.kpi4 <= '4.8')?'red':(employmentSkillsJunContents.kpi4 > '4.8' && employmentSkillsJunContents.kpi4 <= '6.4')?'orange':(employmentSkillsJunContents.kpi4 > '6.4' && employmentSkillsJunContents.kpi4 < '8')?'yellow-7':(employmentSkillsJunContents.kpi4 >= '8' && employmentSkillsJunContents.kpi4 < '9.6')?'green':(employmentSkillsJunContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi4}}
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
                              :color="(employmentSkillsJulContents.kpi1 == null)?'grey-2':(employmentSkillsJulContents.kpi1 >= '0' && employmentSkillsJulContents.kpi1 <= '29.4')?'red':(employmentSkillsJulContents.kpi1 > '29.4' && employmentSkillsJulContents.kpi1 <= '39.2')?'orange':(employmentSkillsJulContents.kpi1 > '39.2' && employmentSkillsJulContents.kpi1 < '49')?'yellow-7':(employmentSkillsJulContents.kpi1 >= '49' && employmentSkillsJulContents.kpi1 < '58.8')?'green':(employmentSkillsJulContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi2 == null)?'grey-2':(employmentSkillsJulContents.kpi2 >= '0' && employmentSkillsJulContents.kpi2 <= '53.2')?'red':(employmentSkillsJulContents.kpi2 > '53.2' && employmentSkillsJulContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJulContents.kpi2 > '70.93333333' && employmentSkillsJulContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJulContents.kpi2 >= '88.66666667' && employmentSkillsJulContents.kpi2 < '106.4')?'green':(employmentSkillsJulContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi3 == null)?'grey-2':(employmentSkillsJulContents.kpi3 >= '0' && employmentSkillsJulContents.kpi3 <= '22.6')?'red':(employmentSkillsJulContents.kpi3 > '22.6' && employmentSkillsJulContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJulContents.kpi3 > '30.13333333' && employmentSkillsJulContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJulContents.kpi3 >= '37.66666667' && employmentSkillsJulContents.kpi3 < '45.2')?'green':(employmentSkillsJulContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi4 == null)?'grey-2':(employmentSkillsJulContents.kpi4 >= '0' && employmentSkillsJulContents.kpi4 <= '4.8')?'red':(employmentSkillsJulContents.kpi4 > '4.8' && employmentSkillsJulContents.kpi4 <= '6.4')?'orange':(employmentSkillsJulContents.kpi4 > '6.4' && employmentSkillsJulContents.kpi4 < '8')?'yellow-7':(employmentSkillsJulContents.kpi4 >= '8' && employmentSkillsJulContents.kpi4 < '9.6')?'green':(employmentSkillsJulContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi4}}
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
                              :color="(employmentSkillsAugContents.kpi1 == null)?'grey-2':(employmentSkillsAugContents.kpi1 >= '0' && employmentSkillsAugContents.kpi1 <= '29.4')?'red':(employmentSkillsAugContents.kpi1 > '29.4' && employmentSkillsAugContents.kpi1 <= '39.2')?'orange':(employmentSkillsAugContents.kpi1 > '39.2' && employmentSkillsAugContents.kpi1 < '49')?'yellow-7':(employmentSkillsAugContents.kpi1 >= '49' && employmentSkillsAugContents.kpi1 < '58.8')?'green':(employmentSkillsAugContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi2 == null)?'grey-2':(employmentSkillsAugContents.kpi2 >= '0' && employmentSkillsAugContents.kpi2 <= '53.2')?'red':(employmentSkillsAugContents.kpi2 > '53.2' && employmentSkillsAugContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAugContents.kpi2 > '70.93333333' && employmentSkillsAugContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAugContents.kpi2 >= '88.66666667' && employmentSkillsAugContents.kpi2 < '106.4')?'green':(employmentSkillsAugContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi3 == null)?'grey-2':(employmentSkillsAugContents.kpi3 >= '0' && employmentSkillsAugContents.kpi3 <= '22.6')?'red':(employmentSkillsAugContents.kpi3 > '22.6' && employmentSkillsAugContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAugContents.kpi3 > '30.13333333' && employmentSkillsAugContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAugContents.kpi3 >= '37.66666667' && employmentSkillsAugContents.kpi3 < '45.2')?'green':(employmentSkillsAugContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi4 == null)?'grey-2':(employmentSkillsAugContents.kpi4 >= '0' && employmentSkillsAugContents.kpi4 <= '4.8')?'red':(employmentSkillsAugContents.kpi4 > '4.8' && employmentSkillsAugContents.kpi4 <= '6.4')?'orange':(employmentSkillsAugContents.kpi4 > '6.4' && employmentSkillsAugContents.kpi4 < '8')?'yellow-7':(employmentSkillsAugContents.kpi4 >= '8' && employmentSkillsAugContents.kpi4 < '9.6')?'green':(employmentSkillsAugContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi4}}
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
                              :color="(employmentSkillsSepContents.kpi1 == null)?'grey-2':(employmentSkillsSepContents.kpi1 >= '0' && employmentSkillsSepContents.kpi1 <= '29.4')?'red':(employmentSkillsSepContents.kpi1 > '29.4' && employmentSkillsSepContents.kpi1 <= '39.2')?'orange':(employmentSkillsSepContents.kpi1 > '39.2' && employmentSkillsSepContents.kpi1 < '49')?'yellow-7':(employmentSkillsSepContents.kpi1 >= '49' && employmentSkillsSepContents.kpi1 < '58.8')?'green':(employmentSkillsSepContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi2 == null)?'grey-2':(employmentSkillsSepContents.kpi2 >= '0' && employmentSkillsSepContents.kpi2 <= '53.2')?'red':(employmentSkillsSepContents.kpi2 > '53.2' && employmentSkillsSepContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsSepContents.kpi2 > '70.93333333' && employmentSkillsSepContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsSepContents.kpi2 >= '88.66666667' && employmentSkillsSepContents.kpi2 < '106.4')?'green':(employmentSkillsSepContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi3 == null)?'grey-2':(employmentSkillsSepContents.kpi3 >= '0' && employmentSkillsSepContents.kpi3 <= '22.6')?'red':(employmentSkillsSepContents.kpi3 > '22.6' && employmentSkillsSepContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsSepContents.kpi3 > '30.13333333' && employmentSkillsSepContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsSepContents.kpi3 >= '37.66666667' && employmentSkillsSepContents.kpi3 < '45.2')?'green':(employmentSkillsSepContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi4 == null)?'grey-2':(employmentSkillsSepContents.kpi4 >= '0' && employmentSkillsSepContents.kpi4 <= '4.8')?'red':(employmentSkillsSepContents.kpi4 > '4.8' && employmentSkillsSepContents.kpi4 <= '6.4')?'orange':(employmentSkillsSepContents.kpi4 > '6.4' && employmentSkillsSepContents.kpi4 < '8')?'yellow-7':(employmentSkillsSepContents.kpi4 >= '8' && employmentSkillsSepContents.kpi4 < '9.6')?'green':(employmentSkillsSepContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi4}}
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
                              :color="(employmentSkillsOctContents.kpi1 == null)?'grey-2':(employmentSkillsOctContents.kpi1 >= '0' && employmentSkillsOctContents.kpi1 <= '29.4')?'red':(employmentSkillsOctContents.kpi1 > '29.4' && employmentSkillsOctContents.kpi1 <= '39.2')?'orange':(employmentSkillsOctContents.kpi1 > '39.2' && employmentSkillsOctContents.kpi1 < '49')?'yellow-7':(employmentSkillsOctContents.kpi1 >= '49' && employmentSkillsOctContents.kpi1 < '58.8')?'green':(employmentSkillsOctContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi2 == null)?'grey-2':(employmentSkillsOctContents.kpi2 >= '0' && employmentSkillsOctContents.kpi2 <= '53.2')?'red':(employmentSkillsOctContents.kpi2 > '53.2' && employmentSkillsOctContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsOctContents.kpi2 > '70.93333333' && employmentSkillsOctContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsOctContents.kpi2 >= '88.66666667' && employmentSkillsOctContents.kpi2 < '106.4')?'green':(employmentSkillsOctContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi3 == null)?'grey-2':(employmentSkillsOctContents.kpi3 >= '0' && employmentSkillsOctContents.kpi3 <= '22.6')?'red':(employmentSkillsOctContents.kpi3 > '22.6' && employmentSkillsOctContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsOctContents.kpi3 > '30.13333333' && employmentSkillsOctContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsOctContents.kpi3 >= '37.66666667' && employmentSkillsOctContents.kpi3 < '45.2')?'green':(employmentSkillsOctContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi4 == null)?'grey-2':(employmentSkillsOctContents.kpi4 >= '0' && employmentSkillsOctContents.kpi4 <= '4.8')?'red':(employmentSkillsOctContents.kpi4 > '4.8' && employmentSkillsOctContents.kpi4 <= '6.4')?'orange':(employmentSkillsOctContents.kpi4 > '6.4' && employmentSkillsOctContents.kpi4 < '8')?'yellow-7':(employmentSkillsOctContents.kpi4 >= '8' && employmentSkillsOctContents.kpi4 < '9.6')?'green':(employmentSkillsOctContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi4}}
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
                              :color="(employmentSkillsNovContents.kpi1 == null)?'grey-2':(employmentSkillsNovContents.kpi1 >= '0' && employmentSkillsNovContents.kpi1 <= '29.4')?'red':(employmentSkillsNovContents.kpi1 > '29.4' && employmentSkillsNovContents.kpi1 <= '39.2')?'orange':(employmentSkillsNovContents.kpi1 > '39.2' && employmentSkillsNovContents.kpi1 < '49')?'yellow-7':(employmentSkillsNovContents.kpi1 >= '49' && employmentSkillsNovContents.kpi1 < '58.8')?'green':(employmentSkillsNovContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi2 == null)?'grey-2':(employmentSkillsNovContents.kpi2 >= '0' && employmentSkillsNovContents.kpi2 <= '53.2')?'red':(employmentSkillsNovContents.kpi2 > '53.2' && employmentSkillsNovContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsNovContents.kpi2 > '70.93333333' && employmentSkillsNovContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsNovContents.kpi2 >= '88.66666667' && employmentSkillsNovContents.kpi2 < '106.4')?'green':(employmentSkillsNovContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi3 == null)?'grey-2':(employmentSkillsNovContents.kpi3 >= '0' && employmentSkillsNovContents.kpi3 <= '22.6')?'red':(employmentSkillsNovContents.kpi3 > '22.6' && employmentSkillsNovContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsNovContents.kpi3 > '30.13333333' && employmentSkillsNovContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsNovContents.kpi3 >= '37.66666667' && employmentSkillsNovContents.kpi3 < '45.2')?'green':(employmentSkillsNovContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi4 == null)?'grey-2':(employmentSkillsNovContents.kpi4 >= '0' && employmentSkillsNovContents.kpi4 <= '4.8')?'red':(employmentSkillsNovContents.kpi4 > '4.8' && employmentSkillsNovContents.kpi4 <= '6.4')?'orange':(employmentSkillsNovContents.kpi4 > '6.4' && employmentSkillsNovContents.kpi4 < '8')?'yellow-7':(employmentSkillsNovContents.kpi4 >= '8' && employmentSkillsNovContents.kpi4 < '9.6')?'green':(employmentSkillsNovContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi4}}
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
                              :color="(employmentSkillsDecContents.kpi1 == null)?'grey-2':(employmentSkillsDecContents.kpi1 >= '0' && employmentSkillsDecContents.kpi1 <= '29.4')?'red':(employmentSkillsDecContents.kpi1 > '29.4' && employmentSkillsDecContents.kpi1 <= '39.2')?'orange':(employmentSkillsDecContents.kpi1 > '39.2' && employmentSkillsDecContents.kpi1 < '49')?'yellow-7':(employmentSkillsDecContents.kpi1 >= '49' && employmentSkillsDecContents.kpi1 < '58.8')?'green':(employmentSkillsDecContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi2 == null)?'grey-2':(employmentSkillsDecContents.kpi2 >= '0' && employmentSkillsDecContents.kpi2 <= '53.2')?'red':(employmentSkillsDecContents.kpi2 > '53.2' && employmentSkillsDecContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsDecContents.kpi2 > '70.93333333' && employmentSkillsDecContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsDecContents.kpi2 >= '88.66666667' && employmentSkillsDecContents.kpi2 < '106.4')?'green':(employmentSkillsDecContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi3 == null)?'grey-2':(employmentSkillsDecContents.kpi3 >= '0' && employmentSkillsDecContents.kpi3 <= '22.6')?'red':(employmentSkillsDecContents.kpi3 > '22.6' && employmentSkillsDecContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsDecContents.kpi3 > '30.13333333' && employmentSkillsDecContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsDecContents.kpi3 >= '37.66666667' && employmentSkillsDecContents.kpi3 < '45.2')?'green':(employmentSkillsDecContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi4 == null)?'grey-2':(employmentSkillsDecContents.kpi4 >= '0' && employmentSkillsDecContents.kpi4 <= '4.8')?'red':(employmentSkillsDecContents.kpi4 > '4.8' && employmentSkillsDecContents.kpi4 <= '6.4')?'orange':(employmentSkillsDecContents.kpi4 > '6.4' && employmentSkillsDecContents.kpi4 < '8')?'yellow-7':(employmentSkillsDecContents.kpi4 >= '8' && employmentSkillsDecContents.kpi4 < '9.6')?'green':(employmentSkillsDecContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi4}}
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
                              :color="(employmentSkillsJanContents.kpi1 == null)?'grey-2':(employmentSkillsJanContents.kpi1 >= '0' && employmentSkillsJanContents.kpi1 <= '29.4')?'red':(employmentSkillsJanContents.kpi1 > '29.4' && employmentSkillsJanContents.kpi1 <= '39.2')?'orange':(employmentSkillsJanContents.kpi1 > '39.2' && employmentSkillsJanContents.kpi1 < '49')?'yellow-7':(employmentSkillsJanContents.kpi1 >= '49' && employmentSkillsJanContents.kpi1 < '58.8')?'green':(employmentSkillsJanContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi2 == null)?'grey-2':(employmentSkillsJanContents.kpi2 >= '0' && employmentSkillsJanContents.kpi2 <= '53.2')?'red':(employmentSkillsJanContents.kpi2 > '53.2' && employmentSkillsJanContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJanContents.kpi2 > '70.93333333' && employmentSkillsJanContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJanContents.kpi2 >= '88.66666667' && employmentSkillsJanContents.kpi2 < '106.4')?'green':(employmentSkillsJanContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi3 == null)?'grey-2':(employmentSkillsJanContents.kpi3 >= '0' && employmentSkillsJanContents.kpi3 <= '22.6')?'red':(employmentSkillsJanContents.kpi3 > '22.6' && employmentSkillsJanContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJanContents.kpi3 > '30.13333333' && employmentSkillsJanContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJanContents.kpi3 >= '37.66666667' && employmentSkillsJanContents.kpi3 < '45.2')?'green':(employmentSkillsJanContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi4 == null)?'grey-2':(employmentSkillsJanContents.kpi4 >= '0' && employmentSkillsJanContents.kpi4 <= '4.8')?'red':(employmentSkillsJanContents.kpi4 > '4.8' && employmentSkillsJanContents.kpi4 <= '6.4')?'orange':(employmentSkillsJanContents.kpi4 > '6.4' && employmentSkillsJanContents.kpi4 < '8')?'yellow-7':(employmentSkillsJanContents.kpi4 >= '8' && employmentSkillsJanContents.kpi4 < '9.6')?'green':(employmentSkillsJanContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi4}}
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
                              :color="(employmentSkillsFebContents.kpi1 == null)?'grey-2':(employmentSkillsFebContents.kpi1 >= '0' && employmentSkillsFebContents.kpi1 <= '29.4')?'red':(employmentSkillsFebContents.kpi1 > '29.4' && employmentSkillsFebContents.kpi1 <= '39.2')?'orange':(employmentSkillsFebContents.kpi1 > '39.2' && employmentSkillsFebContents.kpi1 < '49')?'yellow-7':(employmentSkillsFebContents.kpi1 >= '49' && employmentSkillsFebContents.kpi1 < '58.8')?'green':(employmentSkillsFebContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi2 == null)?'grey-2':(employmentSkillsFebContents.kpi2 >= '0' && employmentSkillsFebContents.kpi2 <= '53.2')?'red':(employmentSkillsFebContents.kpi2 > '53.2' && employmentSkillsFebContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsFebContents.kpi2 > '70.93333333' && employmentSkillsFebContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsFebContents.kpi2 >= '88.66666667' && employmentSkillsFebContents.kpi2 < '106.4')?'green':(employmentSkillsFebContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi3 == null)?'grey-2':(employmentSkillsFebContents.kpi3 >= '0' && employmentSkillsFebContents.kpi3 <= '22.6')?'red':(employmentSkillsFebContents.kpi3 > '22.6' && employmentSkillsFebContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsFebContents.kpi3 > '30.13333333' && employmentSkillsFebContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsFebContents.kpi3 >= '37.66666667' && employmentSkillsFebContents.kpi3 < '45.2')?'green':(employmentSkillsFebContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi4 == null)?'grey-2':(employmentSkillsFebContents.kpi4 >= '0' && employmentSkillsFebContents.kpi4 <= '4.8')?'red':(employmentSkillsFebContents.kpi4 > '4.8' && employmentSkillsFebContents.kpi4 <= '6.4')?'orange':(employmentSkillsFebContents.kpi4 > '6.4' && employmentSkillsFebContents.kpi4 < '8')?'yellow-7':(employmentSkillsFebContents.kpi4 >= '8' && employmentSkillsFebContents.kpi4 < '9.6')?'green':(employmentSkillsFebContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi4}}
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
                              :color="(employmentSkillsMarContents.kpi1 == null)?'grey-2':(employmentSkillsMarContents.kpi1 >= '0' && employmentSkillsMarContents.kpi1 <= '29.4')?'red':(employmentSkillsMarContents.kpi1 > '29.4' && employmentSkillsMarContents.kpi1 <= '39.2')?'orange':(employmentSkillsMarContents.kpi1 > '39.2' && employmentSkillsMarContents.kpi1 < '49')?'yellow-7':(employmentSkillsMarContents.kpi1 >= '49' && employmentSkillsMarContents.kpi1 < '58.8')?'green':(employmentSkillsMarContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi2 == null)?'grey-2':(employmentSkillsMarContents.kpi2 >= '0' && employmentSkillsMarContents.kpi2 <= '53.2')?'red':(employmentSkillsMarContents.kpi2 > '53.2' && employmentSkillsMarContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMarContents.kpi2 > '70.93333333' && employmentSkillsMarContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMarContents.kpi2 >= '88.66666667' && employmentSkillsMarContents.kpi2 < '106.4')?'green':(employmentSkillsMarContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi3 == null)?'grey-2':(employmentSkillsMarContents.kpi3 >= '0' && employmentSkillsMarContents.kpi3 <= '22.6')?'red':(employmentSkillsMarContents.kpi3 > '22.6' && employmentSkillsMarContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMarContents.kpi3 > '30.13333333' && employmentSkillsMarContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMarContents.kpi3 >= '37.66666667' && employmentSkillsMarContents.kpi3 < '45.2')?'green':(employmentSkillsMarContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi4 == null)?'grey-2':(employmentSkillsMarContents.kpi4 >= '0' && employmentSkillsMarContents.kpi4 <= '4.8')?'red':(employmentSkillsMarContents.kpi4 > '4.8' && employmentSkillsMarContents.kpi4 <= '6.4')?'orange':(employmentSkillsMarContents.kpi4 > '6.4' && employmentSkillsMarContents.kpi4 < '8')?'yellow-7':(employmentSkillsMarContents.kpi4 >= '8' && employmentSkillsMarContents.kpi4 < '9.6')?'green':(employmentSkillsMarContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi4}}
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
                              :color="(employmentSkillsAprContents.kpi1 == null)?'grey-2':(employmentSkillsAprContents.kpi1 >= '0' && employmentSkillsAprContents.kpi1 <= '29.4')?'red':(employmentSkillsAprContents.kpi1 > '29.4' && employmentSkillsAprContents.kpi1 <= '39.2')?'orange':(employmentSkillsAprContents.kpi1 > '39.2' && employmentSkillsAprContents.kpi1 < '49')?'yellow-7':(employmentSkillsAprContents.kpi1 >= '49' && employmentSkillsAprContents.kpi1 < '58.8')?'green':(employmentSkillsAprContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi2 == null)?'grey-2':(employmentSkillsAprContents.kpi2 >= '0' && employmentSkillsAprContents.kpi2 <= '53.2')?'red':(employmentSkillsAprContents.kpi2 > '53.2' && employmentSkillsAprContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAprContents.kpi2 > '70.93333333' && employmentSkillsAprContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAprContents.kpi2 >= '88.66666667' && employmentSkillsAprContents.kpi2 < '106.4')?'green':(employmentSkillsAprContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi3 == null)?'grey-2':(employmentSkillsAprContents.kpi3 >= '0' && employmentSkillsAprContents.kpi3 <= '22.6')?'red':(employmentSkillsAprContents.kpi3 > '22.6' && employmentSkillsAprContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAprContents.kpi3 > '30.13333333' && employmentSkillsAprContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAprContents.kpi3 >= '37.66666667' && employmentSkillsAprContents.kpi3 < '45.2')?'green':(employmentSkillsAprContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi4 == null)?'grey-2':(employmentSkillsAprContents.kpi4 >= '0' && employmentSkillsAprContents.kpi4 <= '4.8')?'red':(employmentSkillsAprContents.kpi4 > '4.8' && employmentSkillsAprContents.kpi4 <= '6.4')?'orange':(employmentSkillsAprContents.kpi4 > '6.4' && employmentSkillsAprContents.kpi4 < '8')?'yellow-7':(employmentSkillsAprContents.kpi4 >= '8' && employmentSkillsAprContents.kpi4 < '9.6')?'green':(employmentSkillsAprContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi4}}
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
                              :color="(employmentSkillsMayContents.kpi1 == null)?'grey-2':(employmentSkillsMayContents.kpi1 >= '0' && employmentSkillsMayContents.kpi1 <= '29.4')?'red':(employmentSkillsMayContents.kpi1 > '29.4' && employmentSkillsMayContents.kpi1 <= '39.2')?'orange':(employmentSkillsMayContents.kpi1 > '39.2' && employmentSkillsMayContents.kpi1 < '49')?'yellow-7':(employmentSkillsMayContents.kpi1 >= '49' && employmentSkillsMayContents.kpi1 < '58.8')?'green':(employmentSkillsMayContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi2 == null)?'grey-2':(employmentSkillsMayContents.kpi2 >= '0' && employmentSkillsMayContents.kpi2 <= '53.2')?'red':(employmentSkillsMayContents.kpi2 > '53.2' && employmentSkillsMayContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMayContents.kpi2 > '70.93333333' && employmentSkillsMayContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMayContents.kpi2 >= '88.66666667' && employmentSkillsMayContents.kpi2 < '106.4')?'green':(employmentSkillsMayContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi3 == null)?'grey-2':(employmentSkillsMayContents.kpi3 >= '0' && employmentSkillsMayContents.kpi3 <= '22.6')?'red':(employmentSkillsMayContents.kpi3 > '22.6' && employmentSkillsMayContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMayContents.kpi3 > '30.13333333' && employmentSkillsMayContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMayContents.kpi3 >= '37.66666667' && employmentSkillsMayContents.kpi3 < '45.2')?'green':(employmentSkillsMayContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi4 == null)?'grey-2':(employmentSkillsMayContents.kpi4 >= '0' && employmentSkillsMayContents.kpi4 <= '4.8')?'red':(employmentSkillsMayContents.kpi4 > '4.8' && employmentSkillsMayContents.kpi4 <= '6.4')?'orange':(employmentSkillsMayContents.kpi4 > '6.4' && employmentSkillsMayContents.kpi4 < '8')?'yellow-7':(employmentSkillsMayContents.kpi4 >= '8' && employmentSkillsMayContents.kpi4 < '9.6')?'green':(employmentSkillsMayContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi4}}
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
                              :color="(employmentSkillsJunContents.kpi1 == null)?'grey-2':(employmentSkillsJunContents.kpi1 >= '0' && employmentSkillsJunContents.kpi1 <= '29.4')?'red':(employmentSkillsJunContents.kpi1 > '29.4' && employmentSkillsJunContents.kpi1 <= '39.2')?'orange':(employmentSkillsJunContents.kpi1 > '39.2' && employmentSkillsJunContents.kpi1 < '49')?'yellow-7':(employmentSkillsJunContents.kpi1 >= '49' && employmentSkillsJunContents.kpi1 < '58.8')?'green':(employmentSkillsJunContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi2 == null)?'grey-2':(employmentSkillsJunContents.kpi2 >= '0' && employmentSkillsJunContents.kpi2 <= '53.2')?'red':(employmentSkillsJunContents.kpi2 > '53.2' && employmentSkillsJunContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJunContents.kpi2 > '70.93333333' && employmentSkillsJunContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJunContents.kpi2 >= '88.66666667' && employmentSkillsJunContents.kpi2 < '106.4')?'green':(employmentSkillsJunContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi3 == null)?'grey-2':(employmentSkillsJunContents.kpi3 >= '0' && employmentSkillsJunContents.kpi3 <= '22.6')?'red':(employmentSkillsJunContents.kpi3 > '22.6' && employmentSkillsJunContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJunContents.kpi3 > '30.13333333' && employmentSkillsJunContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJunContents.kpi3 >= '37.66666667' && employmentSkillsJunContents.kpi3 < '45.2')?'green':(employmentSkillsJunContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi4 == null)?'grey-2':(employmentSkillsJunContents.kpi4 >= '0' && employmentSkillsJunContents.kpi4 <= '4.8')?'red':(employmentSkillsJunContents.kpi4 > '4.8' && employmentSkillsJunContents.kpi4 <= '6.4')?'orange':(employmentSkillsJunContents.kpi4 > '6.4' && employmentSkillsJunContents.kpi4 < '8')?'yellow-7':(employmentSkillsJunContents.kpi4 >= '8' && employmentSkillsJunContents.kpi4 < '9.6')?'green':(employmentSkillsJunContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi4}}
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
                              :color="(employmentSkillsJulContents.kpi1 == null)?'grey-2':(employmentSkillsJulContents.kpi1 >= '0' && employmentSkillsJulContents.kpi1 <= '29.4')?'red':(employmentSkillsJulContents.kpi1 > '29.4' && employmentSkillsJulContents.kpi1 <= '39.2')?'orange':(employmentSkillsJulContents.kpi1 > '39.2' && employmentSkillsJulContents.kpi1 < '49')?'yellow-7':(employmentSkillsJulContents.kpi1 >= '49' && employmentSkillsJulContents.kpi1 < '58.8')?'green':(employmentSkillsJulContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi2 == null)?'grey-2':(employmentSkillsJulContents.kpi2 >= '0' && employmentSkillsJulContents.kpi2 <= '53.2')?'red':(employmentSkillsJulContents.kpi2 > '53.2' && employmentSkillsJulContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJulContents.kpi2 > '70.93333333' && employmentSkillsJulContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJulContents.kpi2 >= '88.66666667' && employmentSkillsJulContents.kpi2 < '106.4')?'green':(employmentSkillsJulContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi3 == null)?'grey-2':(employmentSkillsJulContents.kpi3 >= '0' && employmentSkillsJulContents.kpi3 <= '22.6')?'red':(employmentSkillsJulContents.kpi3 > '22.6' && employmentSkillsJulContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJulContents.kpi3 > '30.13333333' && employmentSkillsJulContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJulContents.kpi3 >= '37.66666667' && employmentSkillsJulContents.kpi3 < '45.2')?'green':(employmentSkillsJulContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi4 == null)?'grey-2':(employmentSkillsJulContents.kpi4 >= '0' && employmentSkillsJulContents.kpi4 <= '4.8')?'red':(employmentSkillsJulContents.kpi4 > '4.8' && employmentSkillsJulContents.kpi4 <= '6.4')?'orange':(employmentSkillsJulContents.kpi4 > '6.4' && employmentSkillsJulContents.kpi4 < '8')?'yellow-7':(employmentSkillsJulContents.kpi4 >= '8' && employmentSkillsJulContents.kpi4 < '9.6')?'green':(employmentSkillsJulContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi4}}
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
                              :color="(employmentSkillsAugContents.kpi1 == null)?'grey-2':(employmentSkillsAugContents.kpi1 >= '0' && employmentSkillsAugContents.kpi1 <= '29.4')?'red':(employmentSkillsAugContents.kpi1 > '29.4' && employmentSkillsAugContents.kpi1 <= '39.2')?'orange':(employmentSkillsAugContents.kpi1 > '39.2' && employmentSkillsAugContents.kpi1 < '49')?'yellow-7':(employmentSkillsAugContents.kpi1 >= '49' && employmentSkillsAugContents.kpi1 < '58.8')?'green':(employmentSkillsAugContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi2 == null)?'grey-2':(employmentSkillsAugContents.kpi2 >= '0' && employmentSkillsAugContents.kpi2 <= '53.2')?'red':(employmentSkillsAugContents.kpi2 > '53.2' && employmentSkillsAugContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAugContents.kpi2 > '70.93333333' && employmentSkillsAugContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAugContents.kpi2 >= '88.66666667' && employmentSkillsAugContents.kpi2 < '106.4')?'green':(employmentSkillsAugContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi3 == null)?'grey-2':(employmentSkillsAugContents.kpi3 >= '0' && employmentSkillsAugContents.kpi3 <= '22.6')?'red':(employmentSkillsAugContents.kpi3 > '22.6' && employmentSkillsAugContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAugContents.kpi3 > '30.13333333' && employmentSkillsAugContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAugContents.kpi3 >= '37.66666667' && employmentSkillsAugContents.kpi3 < '45.2')?'green':(employmentSkillsAugContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi4 == null)?'grey-2':(employmentSkillsAugContents.kpi4 >= '0' && employmentSkillsAugContents.kpi4 <= '4.8')?'red':(employmentSkillsAugContents.kpi4 > '4.8' && employmentSkillsAugContents.kpi4 <= '6.4')?'orange':(employmentSkillsAugContents.kpi4 > '6.4' && employmentSkillsAugContents.kpi4 < '8')?'yellow-7':(employmentSkillsAugContents.kpi4 >= '8' && employmentSkillsAugContents.kpi4 < '9.6')?'green':(employmentSkillsAugContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi4}}
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
                              :color="(employmentSkillsSepContents.kpi1 == null)?'grey-2':(employmentSkillsSepContents.kpi1 >= '0' && employmentSkillsSepContents.kpi1 <= '29.4')?'red':(employmentSkillsSepContents.kpi1 > '29.4' && employmentSkillsSepContents.kpi1 <= '39.2')?'orange':(employmentSkillsSepContents.kpi1 > '39.2' && employmentSkillsSepContents.kpi1 < '49')?'yellow-7':(employmentSkillsSepContents.kpi1 >= '49' && employmentSkillsSepContents.kpi1 < '58.8')?'green':(employmentSkillsSepContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi2 == null)?'grey-2':(employmentSkillsSepContents.kpi2 >= '0' && employmentSkillsSepContents.kpi2 <= '53.2')?'red':(employmentSkillsSepContents.kpi2 > '53.2' && employmentSkillsSepContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsSepContents.kpi2 > '70.93333333' && employmentSkillsSepContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsSepContents.kpi2 >= '88.66666667' && employmentSkillsSepContents.kpi2 < '106.4')?'green':(employmentSkillsSepContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi3 == null)?'grey-2':(employmentSkillsSepContents.kpi3 >= '0' && employmentSkillsSepContents.kpi3 <= '22.6')?'red':(employmentSkillsSepContents.kpi3 > '22.6' && employmentSkillsSepContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsSepContents.kpi3 > '30.13333333' && employmentSkillsSepContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsSepContents.kpi3 >= '37.66666667' && employmentSkillsSepContents.kpi3 < '45.2')?'green':(employmentSkillsSepContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi4 == null)?'grey-2':(employmentSkillsSepContents.kpi4 >= '0' && employmentSkillsSepContents.kpi4 <= '4.8')?'red':(employmentSkillsSepContents.kpi4 > '4.8' && employmentSkillsSepContents.kpi4 <= '6.4')?'orange':(employmentSkillsSepContents.kpi4 > '6.4' && employmentSkillsSepContents.kpi4 < '8')?'yellow-7':(employmentSkillsSepContents.kpi4 >= '8' && employmentSkillsSepContents.kpi4 < '9.6')?'green':(employmentSkillsSepContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi4}}
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
                              :color="(employmentSkillsOctContents.kpi1 == null)?'grey-2':(employmentSkillsOctContents.kpi1 >= '0' && employmentSkillsOctContents.kpi1 <= '29.4')?'red':(employmentSkillsOctContents.kpi1 > '29.4' && employmentSkillsOctContents.kpi1 <= '39.2')?'orange':(employmentSkillsOctContents.kpi1 > '39.2' && employmentSkillsOctContents.kpi1 < '49')?'yellow-7':(employmentSkillsOctContents.kpi1 >= '49' && employmentSkillsOctContents.kpi1 < '58.8')?'green':(employmentSkillsOctContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi2 == null)?'grey-2':(employmentSkillsOctContents.kpi2 >= '0' && employmentSkillsOctContents.kpi2 <= '53.2')?'red':(employmentSkillsOctContents.kpi2 > '53.2' && employmentSkillsOctContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsOctContents.kpi2 > '70.93333333' && employmentSkillsOctContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsOctContents.kpi2 >= '88.66666667' && employmentSkillsOctContents.kpi2 < '106.4')?'green':(employmentSkillsOctContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi3 == null)?'grey-2':(employmentSkillsOctContents.kpi3 >= '0' && employmentSkillsOctContents.kpi3 <= '22.6')?'red':(employmentSkillsOctContents.kpi3 > '22.6' && employmentSkillsOctContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsOctContents.kpi3 > '30.13333333' && employmentSkillsOctContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsOctContents.kpi3 >= '37.66666667' && employmentSkillsOctContents.kpi3 < '45.2')?'green':(employmentSkillsOctContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi4 == null)?'grey-2':(employmentSkillsOctContents.kpi4 >= '0' && employmentSkillsOctContents.kpi4 <= '4.8')?'red':(employmentSkillsOctContents.kpi4 > '4.8' && employmentSkillsOctContents.kpi4 <= '6.4')?'orange':(employmentSkillsOctContents.kpi4 > '6.4' && employmentSkillsOctContents.kpi4 < '8')?'yellow-7':(employmentSkillsOctContents.kpi4 >= '8' && employmentSkillsOctContents.kpi4 < '9.6')?'green':(employmentSkillsOctContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi4}}
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
                              :color="(employmentSkillsNovContents.kpi1 == null)?'grey-2':(employmentSkillsNovContents.kpi1 >= '0' && employmentSkillsNovContents.kpi1 <= '29.4')?'red':(employmentSkillsNovContents.kpi1 > '29.4' && employmentSkillsNovContents.kpi1 <= '39.2')?'orange':(employmentSkillsNovContents.kpi1 > '39.2' && employmentSkillsNovContents.kpi1 < '49')?'yellow-7':(employmentSkillsNovContents.kpi1 >= '49' && employmentSkillsNovContents.kpi1 < '58.8')?'green':(employmentSkillsNovContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi2 == null)?'grey-2':(employmentSkillsNovContents.kpi2 >= '0' && employmentSkillsNovContents.kpi2 <= '53.2')?'red':(employmentSkillsNovContents.kpi2 > '53.2' && employmentSkillsNovContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsNovContents.kpi2 > '70.93333333' && employmentSkillsNovContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsNovContents.kpi2 >= '88.66666667' && employmentSkillsNovContents.kpi2 < '106.4')?'green':(employmentSkillsNovContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi3 == null)?'grey-2':(employmentSkillsNovContents.kpi3 >= '0' && employmentSkillsNovContents.kpi3 <= '22.6')?'red':(employmentSkillsNovContents.kpi3 > '22.6' && employmentSkillsNovContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsNovContents.kpi3 > '30.13333333' && employmentSkillsNovContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsNovContents.kpi3 >= '37.66666667' && employmentSkillsNovContents.kpi3 < '45.2')?'green':(employmentSkillsNovContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi4 == null)?'grey-2':(employmentSkillsNovContents.kpi4 >= '0' && employmentSkillsNovContents.kpi4 <= '4.8')?'red':(employmentSkillsNovContents.kpi4 > '4.8' && employmentSkillsNovContents.kpi4 <= '6.4')?'orange':(employmentSkillsNovContents.kpi4 > '6.4' && employmentSkillsNovContents.kpi4 < '8')?'yellow-7':(employmentSkillsNovContents.kpi4 >= '8' && employmentSkillsNovContents.kpi4 < '9.6')?'green':(employmentSkillsNovContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi4}}
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
                              :color="(employmentSkillsDecContents.kpi1 == null)?'grey-2':(employmentSkillsDecContents.kpi1 >= '0' && employmentSkillsDecContents.kpi1 <= '29.4')?'red':(employmentSkillsDecContents.kpi1 > '29.4' && employmentSkillsDecContents.kpi1 <= '39.2')?'orange':(employmentSkillsDecContents.kpi1 > '39.2' && employmentSkillsDecContents.kpi1 < '49')?'yellow-7':(employmentSkillsDecContents.kpi1 >= '49' && employmentSkillsDecContents.kpi1 < '58.8')?'green':(employmentSkillsDecContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi2 == null)?'grey-2':(employmentSkillsDecContents.kpi2 >= '0' && employmentSkillsDecContents.kpi2 <= '53.2')?'red':(employmentSkillsDecContents.kpi2 > '53.2' && employmentSkillsDecContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsDecContents.kpi2 > '70.93333333' && employmentSkillsDecContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsDecContents.kpi2 >= '88.66666667' && employmentSkillsDecContents.kpi2 < '106.4')?'green':(employmentSkillsDecContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi3 == null)?'grey-2':(employmentSkillsDecContents.kpi3 >= '0' && employmentSkillsDecContents.kpi3 <= '22.6')?'red':(employmentSkillsDecContents.kpi3 > '22.6' && employmentSkillsDecContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsDecContents.kpi3 > '30.13333333' && employmentSkillsDecContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsDecContents.kpi3 >= '37.66666667' && employmentSkillsDecContents.kpi3 < '45.2')?'green':(employmentSkillsDecContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi4 == null)?'grey-2':(employmentSkillsDecContents.kpi4 >= '0' && employmentSkillsDecContents.kpi4 <= '4.8')?'red':(employmentSkillsDecContents.kpi4 > '4.8' && employmentSkillsDecContents.kpi4 <= '6.4')?'orange':(employmentSkillsDecContents.kpi4 > '6.4' && employmentSkillsDecContents.kpi4 < '8')?'yellow-7':(employmentSkillsDecContents.kpi4 >= '8' && employmentSkillsDecContents.kpi4 < '9.6')?'green':(employmentSkillsDecContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi4}}
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
                              :color="(employmentSkillsJanContents.kpi1 == null)?'grey-2':(employmentSkillsJanContents.kpi1 >= '0' && employmentSkillsJanContents.kpi1 <= '29.4')?'red':(employmentSkillsJanContents.kpi1 > '29.4' && employmentSkillsJanContents.kpi1 <= '39.2')?'orange':(employmentSkillsJanContents.kpi1 > '39.2' && employmentSkillsJanContents.kpi1 < '49')?'yellow-7':(employmentSkillsJanContents.kpi1 >= '49' && employmentSkillsJanContents.kpi1 < '58.8')?'green':(employmentSkillsJanContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi2 == null)?'grey-2':(employmentSkillsJanContents.kpi2 >= '0' && employmentSkillsJanContents.kpi2 <= '53.2')?'red':(employmentSkillsJanContents.kpi2 > '53.2' && employmentSkillsJanContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJanContents.kpi2 > '70.93333333' && employmentSkillsJanContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJanContents.kpi2 >= '88.66666667' && employmentSkillsJanContents.kpi2 < '106.4')?'green':(employmentSkillsJanContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi3 == null)?'grey-2':(employmentSkillsJanContents.kpi3 >= '0' && employmentSkillsJanContents.kpi3 <= '22.6')?'red':(employmentSkillsJanContents.kpi3 > '22.6' && employmentSkillsJanContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJanContents.kpi3 > '30.13333333' && employmentSkillsJanContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJanContents.kpi3 >= '37.66666667' && employmentSkillsJanContents.kpi3 < '45.2')?'green':(employmentSkillsJanContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi4 == null)?'grey-2':(employmentSkillsJanContents.kpi4 >= '0' && employmentSkillsJanContents.kpi4 <= '4.8')?'red':(employmentSkillsJanContents.kpi4 > '4.8' && employmentSkillsJanContents.kpi4 <= '6.4')?'orange':(employmentSkillsJanContents.kpi4 > '6.4' && employmentSkillsJanContents.kpi4 < '8')?'yellow-7':(employmentSkillsJanContents.kpi4 >= '8' && employmentSkillsJanContents.kpi4 < '9.6')?'green':(employmentSkillsJanContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi4}}
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
                              :color="(employmentSkillsFebContents.kpi1 == null)?'grey-2':(employmentSkillsFebContents.kpi1 >= '0' && employmentSkillsFebContents.kpi1 <= '29.4')?'red':(employmentSkillsFebContents.kpi1 > '29.4' && employmentSkillsFebContents.kpi1 <= '39.2')?'orange':(employmentSkillsFebContents.kpi1 > '39.2' && employmentSkillsFebContents.kpi1 < '49')?'yellow-7':(employmentSkillsFebContents.kpi1 >= '49' && employmentSkillsFebContents.kpi1 < '58.8')?'green':(employmentSkillsFebContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi2 == null)?'grey-2':(employmentSkillsFebContents.kpi2 >= '0' && employmentSkillsFebContents.kpi2 <= '53.2')?'red':(employmentSkillsFebContents.kpi2 > '53.2' && employmentSkillsFebContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsFebContents.kpi2 > '70.93333333' && employmentSkillsFebContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsFebContents.kpi2 >= '88.66666667' && employmentSkillsFebContents.kpi2 < '106.4')?'green':(employmentSkillsFebContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi3 == null)?'grey-2':(employmentSkillsFebContents.kpi3 >= '0' && employmentSkillsFebContents.kpi3 <= '22.6')?'red':(employmentSkillsFebContents.kpi3 > '22.6' && employmentSkillsFebContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsFebContents.kpi3 > '30.13333333' && employmentSkillsFebContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsFebContents.kpi3 >= '37.66666667' && employmentSkillsFebContents.kpi3 < '45.2')?'green':(employmentSkillsFebContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi4 == null)?'grey-2':(employmentSkillsFebContents.kpi4 >= '0' && employmentSkillsFebContents.kpi4 <= '4.8')?'red':(employmentSkillsFebContents.kpi4 > '4.8' && employmentSkillsFebContents.kpi4 <= '6.4')?'orange':(employmentSkillsFebContents.kpi4 > '6.4' && employmentSkillsFebContents.kpi4 < '8')?'yellow-7':(employmentSkillsFebContents.kpi4 >= '8' && employmentSkillsFebContents.kpi4 < '9.6')?'green':(employmentSkillsFebContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi4}}
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
                              :color="(employmentSkillsMarContents.kpi1 == null)?'grey-2':(employmentSkillsMarContents.kpi1 >= '0' && employmentSkillsMarContents.kpi1 <= '29.4')?'red':(employmentSkillsMarContents.kpi1 > '29.4' && employmentSkillsMarContents.kpi1 <= '39.2')?'orange':(employmentSkillsMarContents.kpi1 > '39.2' && employmentSkillsMarContents.kpi1 < '49')?'yellow-7':(employmentSkillsMarContents.kpi1 >= '49' && employmentSkillsMarContents.kpi1 < '58.8')?'green':(employmentSkillsMarContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi2 == null)?'grey-2':(employmentSkillsMarContents.kpi2 >= '0' && employmentSkillsMarContents.kpi2 <= '53.2')?'red':(employmentSkillsMarContents.kpi2 > '53.2' && employmentSkillsMarContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMarContents.kpi2 > '70.93333333' && employmentSkillsMarContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMarContents.kpi2 >= '88.66666667' && employmentSkillsMarContents.kpi2 < '106.4')?'green':(employmentSkillsMarContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi3 == null)?'grey-2':(employmentSkillsMarContents.kpi3 >= '0' && employmentSkillsMarContents.kpi3 <= '22.6')?'red':(employmentSkillsMarContents.kpi3 > '22.6' && employmentSkillsMarContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMarContents.kpi3 > '30.13333333' && employmentSkillsMarContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMarContents.kpi3 >= '37.66666667' && employmentSkillsMarContents.kpi3 < '45.2')?'green':(employmentSkillsMarContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi4 == null)?'grey-2':(employmentSkillsMarContents.kpi4 >= '0' && employmentSkillsMarContents.kpi4 <= '4.8')?'red':(employmentSkillsMarContents.kpi4 > '4.8' && employmentSkillsMarContents.kpi4 <= '6.4')?'orange':(employmentSkillsMarContents.kpi4 > '6.4' && employmentSkillsMarContents.kpi4 < '8')?'yellow-7':(employmentSkillsMarContents.kpi4 >= '8' && employmentSkillsMarContents.kpi4 < '9.6')?'green':(employmentSkillsMarContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi4}}
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
                              :color="(employmentSkillsAprContents.kpi1 == null)?'grey-2':(employmentSkillsAprContents.kpi1 >= '0' && employmentSkillsAprContents.kpi1 <= '29.4')?'red':(employmentSkillsAprContents.kpi1 > '29.4' && employmentSkillsAprContents.kpi1 <= '39.2')?'orange':(employmentSkillsAprContents.kpi1 > '39.2' && employmentSkillsAprContents.kpi1 < '49')?'yellow-7':(employmentSkillsAprContents.kpi1 >= '49' && employmentSkillsAprContents.kpi1 < '58.8')?'green':(employmentSkillsAprContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi2 == null)?'grey-2':(employmentSkillsAprContents.kpi2 >= '0' && employmentSkillsAprContents.kpi2 <= '53.2')?'red':(employmentSkillsAprContents.kpi2 > '53.2' && employmentSkillsAprContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAprContents.kpi2 > '70.93333333' && employmentSkillsAprContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAprContents.kpi2 >= '88.66666667' && employmentSkillsAprContents.kpi2 < '106.4')?'green':(employmentSkillsAprContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi3 == null)?'grey-2':(employmentSkillsAprContents.kpi3 >= '0' && employmentSkillsAprContents.kpi3 <= '22.6')?'red':(employmentSkillsAprContents.kpi3 > '22.6' && employmentSkillsAprContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAprContents.kpi3 > '30.13333333' && employmentSkillsAprContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAprContents.kpi3 >= '37.66666667' && employmentSkillsAprContents.kpi3 < '45.2')?'green':(employmentSkillsAprContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi4 == null)?'grey-2':(employmentSkillsAprContents.kpi4 >= '0' && employmentSkillsAprContents.kpi4 <= '4.8')?'red':(employmentSkillsAprContents.kpi4 > '4.8' && employmentSkillsAprContents.kpi4 <= '6.4')?'orange':(employmentSkillsAprContents.kpi4 > '6.4' && employmentSkillsAprContents.kpi4 < '8')?'yellow-7':(employmentSkillsAprContents.kpi4 >= '8' && employmentSkillsAprContents.kpi4 < '9.6')?'green':(employmentSkillsAprContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi4}}
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
                              :color="(employmentSkillsMayContents.kpi1 == null)?'grey-2':(employmentSkillsMayContents.kpi1 >= '0' && employmentSkillsMayContents.kpi1 <= '29.4')?'red':(employmentSkillsMayContents.kpi1 > '29.4' && employmentSkillsMayContents.kpi1 <= '39.2')?'orange':(employmentSkillsMayContents.kpi1 > '39.2' && employmentSkillsMayContents.kpi1 < '49')?'yellow-7':(employmentSkillsMayContents.kpi1 >= '49' && employmentSkillsMayContents.kpi1 < '58.8')?'green':(employmentSkillsMayContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi2 == null)?'grey-2':(employmentSkillsMayContents.kpi2 >= '0' && employmentSkillsMayContents.kpi2 <= '53.2')?'red':(employmentSkillsMayContents.kpi2 > '53.2' && employmentSkillsMayContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMayContents.kpi2 > '70.93333333' && employmentSkillsMayContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMayContents.kpi2 >= '88.66666667' && employmentSkillsMayContents.kpi2 < '106.4')?'green':(employmentSkillsMayContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi3 == null)?'grey-2':(employmentSkillsMayContents.kpi3 >= '0' && employmentSkillsMayContents.kpi3 <= '22.6')?'red':(employmentSkillsMayContents.kpi3 > '22.6' && employmentSkillsMayContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMayContents.kpi3 > '30.13333333' && employmentSkillsMayContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMayContents.kpi3 >= '37.66666667' && employmentSkillsMayContents.kpi3 < '45.2')?'green':(employmentSkillsMayContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi4 == null)?'grey-2':(employmentSkillsMayContents.kpi4 >= '0' && employmentSkillsMayContents.kpi4 <= '4.8')?'red':(employmentSkillsMayContents.kpi4 > '4.8' && employmentSkillsMayContents.kpi4 <= '6.4')?'orange':(employmentSkillsMayContents.kpi4 > '6.4' && employmentSkillsMayContents.kpi4 < '8')?'yellow-7':(employmentSkillsMayContents.kpi4 >= '8' && employmentSkillsMayContents.kpi4 < '9.6')?'green':(employmentSkillsMayContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi4}}
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
                              :color="(employmentSkillsJunContents.kpi1 == null)?'grey-2':(employmentSkillsJunContents.kpi1 >= '0' && employmentSkillsJunContents.kpi1 <= '29.4')?'red':(employmentSkillsJunContents.kpi1 > '29.4' && employmentSkillsJunContents.kpi1 <= '39.2')?'orange':(employmentSkillsJunContents.kpi1 > '39.2' && employmentSkillsJunContents.kpi1 < '49')?'yellow-7':(employmentSkillsJunContents.kpi1 >= '49' && employmentSkillsJunContents.kpi1 < '58.8')?'green':(employmentSkillsJunContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi2 == null)?'grey-2':(employmentSkillsJunContents.kpi2 >= '0' && employmentSkillsJunContents.kpi2 <= '53.2')?'red':(employmentSkillsJunContents.kpi2 > '53.2' && employmentSkillsJunContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJunContents.kpi2 > '70.93333333' && employmentSkillsJunContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJunContents.kpi2 >= '88.66666667' && employmentSkillsJunContents.kpi2 < '106.4')?'green':(employmentSkillsJunContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi3 == null)?'grey-2':(employmentSkillsJunContents.kpi3 >= '0' && employmentSkillsJunContents.kpi3 <= '22.6')?'red':(employmentSkillsJunContents.kpi3 > '22.6' && employmentSkillsJunContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJunContents.kpi3 > '30.13333333' && employmentSkillsJunContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJunContents.kpi3 >= '37.66666667' && employmentSkillsJunContents.kpi3 < '45.2')?'green':(employmentSkillsJunContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi4 == null)?'grey-2':(employmentSkillsJunContents.kpi4 >= '0' && employmentSkillsJunContents.kpi4 <= '4.8')?'red':(employmentSkillsJunContents.kpi4 > '4.8' && employmentSkillsJunContents.kpi4 <= '6.4')?'orange':(employmentSkillsJunContents.kpi4 > '6.4' && employmentSkillsJunContents.kpi4 < '8')?'yellow-7':(employmentSkillsJunContents.kpi4 >= '8' && employmentSkillsJunContents.kpi4 < '9.6')?'green':(employmentSkillsJunContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi4}}
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
                              :color="(employmentSkillsJulContents.kpi1 == null)?'grey-2':(employmentSkillsJulContents.kpi1 >= '0' && employmentSkillsJulContents.kpi1 <= '29.4')?'red':(employmentSkillsJulContents.kpi1 > '29.4' && employmentSkillsJulContents.kpi1 <= '39.2')?'orange':(employmentSkillsJulContents.kpi1 > '39.2' && employmentSkillsJulContents.kpi1 < '49')?'yellow-7':(employmentSkillsJulContents.kpi1 >= '49' && employmentSkillsJulContents.kpi1 < '58.8')?'green':(employmentSkillsJulContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi2 == null)?'grey-2':(employmentSkillsJulContents.kpi2 >= '0' && employmentSkillsJulContents.kpi2 <= '53.2')?'red':(employmentSkillsJulContents.kpi2 > '53.2' && employmentSkillsJulContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJulContents.kpi2 > '70.93333333' && employmentSkillsJulContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJulContents.kpi2 >= '88.66666667' && employmentSkillsJulContents.kpi2 < '106.4')?'green':(employmentSkillsJulContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi3 == null)?'grey-2':(employmentSkillsJulContents.kpi3 >= '0' && employmentSkillsJulContents.kpi3 <= '22.6')?'red':(employmentSkillsJulContents.kpi3 > '22.6' && employmentSkillsJulContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJulContents.kpi3 > '30.13333333' && employmentSkillsJulContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJulContents.kpi3 >= '37.66666667' && employmentSkillsJulContents.kpi3 < '45.2')?'green':(employmentSkillsJulContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi4 == null)?'grey-2':(employmentSkillsJulContents.kpi4 >= '0' && employmentSkillsJulContents.kpi4 <= '4.8')?'red':(employmentSkillsJulContents.kpi4 > '4.8' && employmentSkillsJulContents.kpi4 <= '6.4')?'orange':(employmentSkillsJulContents.kpi4 > '6.4' && employmentSkillsJulContents.kpi4 < '8')?'yellow-7':(employmentSkillsJulContents.kpi4 >= '8' && employmentSkillsJulContents.kpi4 < '9.6')?'green':(employmentSkillsJulContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi4}}
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
                              :color="(employmentSkillsAugContents.kpi1 == null)?'grey-2':(employmentSkillsAugContents.kpi1 >= '0' && employmentSkillsAugContents.kpi1 <= '29.4')?'red':(employmentSkillsAugContents.kpi1 > '29.4' && employmentSkillsAugContents.kpi1 <= '39.2')?'orange':(employmentSkillsAugContents.kpi1 > '39.2' && employmentSkillsAugContents.kpi1 < '49')?'yellow-7':(employmentSkillsAugContents.kpi1 >= '49' && employmentSkillsAugContents.kpi1 < '58.8')?'green':(employmentSkillsAugContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi2 == null)?'grey-2':(employmentSkillsAugContents.kpi2 >= '0' && employmentSkillsAugContents.kpi2 <= '53.2')?'red':(employmentSkillsAugContents.kpi2 > '53.2' && employmentSkillsAugContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAugContents.kpi2 > '70.93333333' && employmentSkillsAugContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAugContents.kpi2 >= '88.66666667' && employmentSkillsAugContents.kpi2 < '106.4')?'green':(employmentSkillsAugContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi3 == null)?'grey-2':(employmentSkillsAugContents.kpi3 >= '0' && employmentSkillsAugContents.kpi3 <= '22.6')?'red':(employmentSkillsAugContents.kpi3 > '22.6' && employmentSkillsAugContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAugContents.kpi3 > '30.13333333' && employmentSkillsAugContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAugContents.kpi3 >= '37.66666667' && employmentSkillsAugContents.kpi3 < '45.2')?'green':(employmentSkillsAugContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi4 == null)?'grey-2':(employmentSkillsAugContents.kpi4 >= '0' && employmentSkillsAugContents.kpi4 <= '4.8')?'red':(employmentSkillsAugContents.kpi4 > '4.8' && employmentSkillsAugContents.kpi4 <= '6.4')?'orange':(employmentSkillsAugContents.kpi4 > '6.4' && employmentSkillsAugContents.kpi4 < '8')?'yellow-7':(employmentSkillsAugContents.kpi4 >= '8' && employmentSkillsAugContents.kpi4 < '9.6')?'green':(employmentSkillsAugContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi4}}
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
                              :color="(employmentSkillsSepContents.kpi1 == null)?'grey-2':(employmentSkillsSepContents.kpi1 >= '0' && employmentSkillsSepContents.kpi1 <= '29.4')?'red':(employmentSkillsSepContents.kpi1 > '29.4' && employmentSkillsSepContents.kpi1 <= '39.2')?'orange':(employmentSkillsSepContents.kpi1 > '39.2' && employmentSkillsSepContents.kpi1 < '49')?'yellow-7':(employmentSkillsSepContents.kpi1 >= '49' && employmentSkillsSepContents.kpi1 < '58.8')?'green':(employmentSkillsSepContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi2 == null)?'grey-2':(employmentSkillsSepContents.kpi2 >= '0' && employmentSkillsSepContents.kpi2 <= '53.2')?'red':(employmentSkillsSepContents.kpi2 > '53.2' && employmentSkillsSepContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsSepContents.kpi2 > '70.93333333' && employmentSkillsSepContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsSepContents.kpi2 >= '88.66666667' && employmentSkillsSepContents.kpi2 < '106.4')?'green':(employmentSkillsSepContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi3 == null)?'grey-2':(employmentSkillsSepContents.kpi3 >= '0' && employmentSkillsSepContents.kpi3 <= '22.6')?'red':(employmentSkillsSepContents.kpi3 > '22.6' && employmentSkillsSepContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsSepContents.kpi3 > '30.13333333' && employmentSkillsSepContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsSepContents.kpi3 >= '37.66666667' && employmentSkillsSepContents.kpi3 < '45.2')?'green':(employmentSkillsSepContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi4 == null)?'grey-2':(employmentSkillsSepContents.kpi4 >= '0' && employmentSkillsSepContents.kpi4 <= '4.8')?'red':(employmentSkillsSepContents.kpi4 > '4.8' && employmentSkillsSepContents.kpi4 <= '6.4')?'orange':(employmentSkillsSepContents.kpi4 > '6.4' && employmentSkillsSepContents.kpi4 < '8')?'yellow-7':(employmentSkillsSepContents.kpi4 >= '8' && employmentSkillsSepContents.kpi4 < '9.6')?'green':(employmentSkillsSepContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi4}}
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
                              :color="(employmentSkillsOctContents.kpi1 == null)?'grey-2':(employmentSkillsOctContents.kpi1 >= '0' && employmentSkillsOctContents.kpi1 <= '29.4')?'red':(employmentSkillsOctContents.kpi1 > '29.4' && employmentSkillsOctContents.kpi1 <= '39.2')?'orange':(employmentSkillsOctContents.kpi1 > '39.2' && employmentSkillsOctContents.kpi1 < '49')?'yellow-7':(employmentSkillsOctContents.kpi1 >= '49' && employmentSkillsOctContents.kpi1 < '58.8')?'green':(employmentSkillsOctContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi2 == null)?'grey-2':(employmentSkillsOctContents.kpi2 >= '0' && employmentSkillsOctContents.kpi2 <= '53.2')?'red':(employmentSkillsOctContents.kpi2 > '53.2' && employmentSkillsOctContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsOctContents.kpi2 > '70.93333333' && employmentSkillsOctContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsOctContents.kpi2 >= '88.66666667' && employmentSkillsOctContents.kpi2 < '106.4')?'green':(employmentSkillsOctContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi3 == null)?'grey-2':(employmentSkillsOctContents.kpi3 >= '0' && employmentSkillsOctContents.kpi3 <= '22.6')?'red':(employmentSkillsOctContents.kpi3 > '22.6' && employmentSkillsOctContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsOctContents.kpi3 > '30.13333333' && employmentSkillsOctContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsOctContents.kpi3 >= '37.66666667' && employmentSkillsOctContents.kpi3 < '45.2')?'green':(employmentSkillsOctContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi4 == null)?'grey-2':(employmentSkillsOctContents.kpi4 >= '0' && employmentSkillsOctContents.kpi4 <= '4.8')?'red':(employmentSkillsOctContents.kpi4 > '4.8' && employmentSkillsOctContents.kpi4 <= '6.4')?'orange':(employmentSkillsOctContents.kpi4 > '6.4' && employmentSkillsOctContents.kpi4 < '8')?'yellow-7':(employmentSkillsOctContents.kpi4 >= '8' && employmentSkillsOctContents.kpi4 < '9.6')?'green':(employmentSkillsOctContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi4}}
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
                              :color="(employmentSkillsNovContents.kpi1 == null)?'grey-2':(employmentSkillsNovContents.kpi1 >= '0' && employmentSkillsNovContents.kpi1 <= '29.4')?'red':(employmentSkillsNovContents.kpi1 > '29.4' && employmentSkillsNovContents.kpi1 <= '39.2')?'orange':(employmentSkillsNovContents.kpi1 > '39.2' && employmentSkillsNovContents.kpi1 < '49')?'yellow-7':(employmentSkillsNovContents.kpi1 >= '49' && employmentSkillsNovContents.kpi1 < '58.8')?'green':(employmentSkillsNovContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi2 == null)?'grey-2':(employmentSkillsNovContents.kpi2 >= '0' && employmentSkillsNovContents.kpi2 <= '53.2')?'red':(employmentSkillsNovContents.kpi2 > '53.2' && employmentSkillsNovContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsNovContents.kpi2 > '70.93333333' && employmentSkillsNovContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsNovContents.kpi2 >= '88.66666667' && employmentSkillsNovContents.kpi2 < '106.4')?'green':(employmentSkillsNovContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi3 == null)?'grey-2':(employmentSkillsNovContents.kpi3 >= '0' && employmentSkillsNovContents.kpi3 <= '22.6')?'red':(employmentSkillsNovContents.kpi3 > '22.6' && employmentSkillsNovContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsNovContents.kpi3 > '30.13333333' && employmentSkillsNovContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsNovContents.kpi3 >= '37.66666667' && employmentSkillsNovContents.kpi3 < '45.2')?'green':(employmentSkillsNovContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi4 == null)?'grey-2':(employmentSkillsNovContents.kpi4 >= '0' && employmentSkillsNovContents.kpi4 <= '4.8')?'red':(employmentSkillsNovContents.kpi4 > '4.8' && employmentSkillsNovContents.kpi4 <= '6.4')?'orange':(employmentSkillsNovContents.kpi4 > '6.4' && employmentSkillsNovContents.kpi4 < '8')?'yellow-7':(employmentSkillsNovContents.kpi4 >= '8' && employmentSkillsNovContents.kpi4 < '9.6')?'green':(employmentSkillsNovContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi4}}
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
                              :color="(employmentSkillsDecContents.kpi1 == null)?'grey-2':(employmentSkillsDecContents.kpi1 >= '0' && employmentSkillsDecContents.kpi1 <= '29.4')?'red':(employmentSkillsDecContents.kpi1 > '29.4' && employmentSkillsDecContents.kpi1 <= '39.2')?'orange':(employmentSkillsDecContents.kpi1 > '39.2' && employmentSkillsDecContents.kpi1 < '49')?'yellow-7':(employmentSkillsDecContents.kpi1 >= '49' && employmentSkillsDecContents.kpi1 < '58.8')?'green':(employmentSkillsDecContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi2 == null)?'grey-2':(employmentSkillsDecContents.kpi2 >= '0' && employmentSkillsDecContents.kpi2 <= '53.2')?'red':(employmentSkillsDecContents.kpi2 > '53.2' && employmentSkillsDecContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsDecContents.kpi2 > '70.93333333' && employmentSkillsDecContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsDecContents.kpi2 >= '88.66666667' && employmentSkillsDecContents.kpi2 < '106.4')?'green':(employmentSkillsDecContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi3 == null)?'grey-2':(employmentSkillsDecContents.kpi3 >= '0' && employmentSkillsDecContents.kpi3 <= '22.6')?'red':(employmentSkillsDecContents.kpi3 > '22.6' && employmentSkillsDecContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsDecContents.kpi3 > '30.13333333' && employmentSkillsDecContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsDecContents.kpi3 >= '37.66666667' && employmentSkillsDecContents.kpi3 < '45.2')?'green':(employmentSkillsDecContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi4 == null)?'grey-2':(employmentSkillsDecContents.kpi4 >= '0' && employmentSkillsDecContents.kpi4 <= '4.8')?'red':(employmentSkillsDecContents.kpi4 > '4.8' && employmentSkillsDecContents.kpi4 <= '6.4')?'orange':(employmentSkillsDecContents.kpi4 > '6.4' && employmentSkillsDecContents.kpi4 < '8')?'yellow-7':(employmentSkillsDecContents.kpi4 >= '8' && employmentSkillsDecContents.kpi4 < '9.6')?'green':(employmentSkillsDecContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi4}}
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
                              :color="(employmentSkillsJanContents.kpi1 == null)?'grey-2':(employmentSkillsJanContents.kpi1 >= '0' && employmentSkillsJanContents.kpi1 <= '29.4')?'red':(employmentSkillsJanContents.kpi1 > '29.4' && employmentSkillsJanContents.kpi1 <= '39.2')?'orange':(employmentSkillsJanContents.kpi1 > '39.2' && employmentSkillsJanContents.kpi1 < '49')?'yellow-7':(employmentSkillsJanContents.kpi1 >= '49' && employmentSkillsJanContents.kpi1 < '58.8')?'green':(employmentSkillsJanContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi2 == null)?'grey-2':(employmentSkillsJanContents.kpi2 >= '0' && employmentSkillsJanContents.kpi2 <= '53.2')?'red':(employmentSkillsJanContents.kpi2 > '53.2' && employmentSkillsJanContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJanContents.kpi2 > '70.93333333' && employmentSkillsJanContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJanContents.kpi2 >= '88.66666667' && employmentSkillsJanContents.kpi2 < '106.4')?'green':(employmentSkillsJanContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi3 == null)?'grey-2':(employmentSkillsJanContents.kpi3 >= '0' && employmentSkillsJanContents.kpi3 <= '22.6')?'red':(employmentSkillsJanContents.kpi3 > '22.6' && employmentSkillsJanContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJanContents.kpi3 > '30.13333333' && employmentSkillsJanContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJanContents.kpi3 >= '37.66666667' && employmentSkillsJanContents.kpi3 < '45.2')?'green':(employmentSkillsJanContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJanContents.kpi4 == null)?'grey-2':(employmentSkillsJanContents.kpi4 >= '0' && employmentSkillsJanContents.kpi4 <= '4.8')?'red':(employmentSkillsJanContents.kpi4 > '4.8' && employmentSkillsJanContents.kpi4 <= '6.4')?'orange':(employmentSkillsJanContents.kpi4 > '6.4' && employmentSkillsJanContents.kpi4 < '8')?'yellow-7':(employmentSkillsJanContents.kpi4 >= '8' && employmentSkillsJanContents.kpi4 < '9.6')?'green':(employmentSkillsJanContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJanContents.kpi4}}
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
                              :color="(employmentSkillsFebContents.kpi1 == null)?'grey-2':(employmentSkillsFebContents.kpi1 >= '0' && employmentSkillsFebContents.kpi1 <= '29.4')?'red':(employmentSkillsFebContents.kpi1 > '29.4' && employmentSkillsFebContents.kpi1 <= '39.2')?'orange':(employmentSkillsFebContents.kpi1 > '39.2' && employmentSkillsFebContents.kpi1 < '49')?'yellow-7':(employmentSkillsFebContents.kpi1 >= '49' && employmentSkillsFebContents.kpi1 < '58.8')?'green':(employmentSkillsFebContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi2 == null)?'grey-2':(employmentSkillsFebContents.kpi2 >= '0' && employmentSkillsFebContents.kpi2 <= '53.2')?'red':(employmentSkillsFebContents.kpi2 > '53.2' && employmentSkillsFebContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsFebContents.kpi2 > '70.93333333' && employmentSkillsFebContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsFebContents.kpi2 >= '88.66666667' && employmentSkillsFebContents.kpi2 < '106.4')?'green':(employmentSkillsFebContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi3 == null)?'grey-2':(employmentSkillsFebContents.kpi3 >= '0' && employmentSkillsFebContents.kpi3 <= '22.6')?'red':(employmentSkillsFebContents.kpi3 > '22.6' && employmentSkillsFebContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsFebContents.kpi3 > '30.13333333' && employmentSkillsFebContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsFebContents.kpi3 >= '37.66666667' && employmentSkillsFebContents.kpi3 < '45.2')?'green':(employmentSkillsFebContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsFebContents.kpi4 == null)?'grey-2':(employmentSkillsFebContents.kpi4 >= '0' && employmentSkillsFebContents.kpi4 <= '4.8')?'red':(employmentSkillsFebContents.kpi4 > '4.8' && employmentSkillsFebContents.kpi4 <= '6.4')?'orange':(employmentSkillsFebContents.kpi4 > '6.4' && employmentSkillsFebContents.kpi4 < '8')?'yellow-7':(employmentSkillsFebContents.kpi4 >= '8' && employmentSkillsFebContents.kpi4 < '9.6')?'green':(employmentSkillsFebContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsFebContents.kpi4}}
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
                              :color="(employmentSkillsMarContents.kpi1 == null)?'grey-2':(employmentSkillsMarContents.kpi1 >= '0' && employmentSkillsMarContents.kpi1 <= '29.4')?'red':(employmentSkillsMarContents.kpi1 > '29.4' && employmentSkillsMarContents.kpi1 <= '39.2')?'orange':(employmentSkillsMarContents.kpi1 > '39.2' && employmentSkillsMarContents.kpi1 < '49')?'yellow-7':(employmentSkillsMarContents.kpi1 >= '49' && employmentSkillsMarContents.kpi1 < '58.8')?'green':(employmentSkillsMarContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi2 == null)?'grey-2':(employmentSkillsMarContents.kpi2 >= '0' && employmentSkillsMarContents.kpi2 <= '53.2')?'red':(employmentSkillsMarContents.kpi2 > '53.2' && employmentSkillsMarContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMarContents.kpi2 > '70.93333333' && employmentSkillsMarContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMarContents.kpi2 >= '88.66666667' && employmentSkillsMarContents.kpi2 < '106.4')?'green':(employmentSkillsMarContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi3 == null)?'grey-2':(employmentSkillsMarContents.kpi3 >= '0' && employmentSkillsMarContents.kpi3 <= '22.6')?'red':(employmentSkillsMarContents.kpi3 > '22.6' && employmentSkillsMarContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMarContents.kpi3 > '30.13333333' && employmentSkillsMarContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMarContents.kpi3 >= '37.66666667' && employmentSkillsMarContents.kpi3 < '45.2')?'green':(employmentSkillsMarContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMarContents.kpi4 == null)?'grey-2':(employmentSkillsMarContents.kpi4 >= '0' && employmentSkillsMarContents.kpi4 <= '4.8')?'red':(employmentSkillsMarContents.kpi4 > '4.8' && employmentSkillsMarContents.kpi4 <= '6.4')?'orange':(employmentSkillsMarContents.kpi4 > '6.4' && employmentSkillsMarContents.kpi4 < '8')?'yellow-7':(employmentSkillsMarContents.kpi4 >= '8' && employmentSkillsMarContents.kpi4 < '9.6')?'green':(employmentSkillsMarContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMarContents.kpi4}}
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
                              :color="(employmentSkillsAprContents.kpi1 == null)?'grey-2':(employmentSkillsAprContents.kpi1 >= '0' && employmentSkillsAprContents.kpi1 <= '29.4')?'red':(employmentSkillsAprContents.kpi1 > '29.4' && employmentSkillsAprContents.kpi1 <= '39.2')?'orange':(employmentSkillsAprContents.kpi1 > '39.2' && employmentSkillsAprContents.kpi1 < '49')?'yellow-7':(employmentSkillsAprContents.kpi1 >= '49' && employmentSkillsAprContents.kpi1 < '58.8')?'green':(employmentSkillsAprContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi2 == null)?'grey-2':(employmentSkillsAprContents.kpi2 >= '0' && employmentSkillsAprContents.kpi2 <= '53.2')?'red':(employmentSkillsAprContents.kpi2 > '53.2' && employmentSkillsAprContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAprContents.kpi2 > '70.93333333' && employmentSkillsAprContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAprContents.kpi2 >= '88.66666667' && employmentSkillsAprContents.kpi2 < '106.4')?'green':(employmentSkillsAprContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi3 == null)?'grey-2':(employmentSkillsAprContents.kpi3 >= '0' && employmentSkillsAprContents.kpi3 <= '22.6')?'red':(employmentSkillsAprContents.kpi3 > '22.6' && employmentSkillsAprContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAprContents.kpi3 > '30.13333333' && employmentSkillsAprContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAprContents.kpi3 >= '37.66666667' && employmentSkillsAprContents.kpi3 < '45.2')?'green':(employmentSkillsAprContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAprContents.kpi4 == null)?'grey-2':(employmentSkillsAprContents.kpi4 >= '0' && employmentSkillsAprContents.kpi4 <= '4.8')?'red':(employmentSkillsAprContents.kpi4 > '4.8' && employmentSkillsAprContents.kpi4 <= '6.4')?'orange':(employmentSkillsAprContents.kpi4 > '6.4' && employmentSkillsAprContents.kpi4 < '8')?'yellow-7':(employmentSkillsAprContents.kpi4 >= '8' && employmentSkillsAprContents.kpi4 < '9.6')?'green':(employmentSkillsAprContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAprContents.kpi4}}
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
                              :color="(employmentSkillsMayContents.kpi1 == null)?'grey-2':(employmentSkillsMayContents.kpi1 >= '0' && employmentSkillsMayContents.kpi1 <= '29.4')?'red':(employmentSkillsMayContents.kpi1 > '29.4' && employmentSkillsMayContents.kpi1 <= '39.2')?'orange':(employmentSkillsMayContents.kpi1 > '39.2' && employmentSkillsMayContents.kpi1 < '49')?'yellow-7':(employmentSkillsMayContents.kpi1 >= '49' && employmentSkillsMayContents.kpi1 < '58.8')?'green':(employmentSkillsMayContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi2 == null)?'grey-2':(employmentSkillsMayContents.kpi2 >= '0' && employmentSkillsMayContents.kpi2 <= '53.2')?'red':(employmentSkillsMayContents.kpi2 > '53.2' && employmentSkillsMayContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsMayContents.kpi2 > '70.93333333' && employmentSkillsMayContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsMayContents.kpi2 >= '88.66666667' && employmentSkillsMayContents.kpi2 < '106.4')?'green':(employmentSkillsMayContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi3 == null)?'grey-2':(employmentSkillsMayContents.kpi3 >= '0' && employmentSkillsMayContents.kpi3 <= '22.6')?'red':(employmentSkillsMayContents.kpi3 > '22.6' && employmentSkillsMayContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsMayContents.kpi3 > '30.13333333' && employmentSkillsMayContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsMayContents.kpi3 >= '37.66666667' && employmentSkillsMayContents.kpi3 < '45.2')?'green':(employmentSkillsMayContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsMayContents.kpi4 == null)?'grey-2':(employmentSkillsMayContents.kpi4 >= '0' && employmentSkillsMayContents.kpi4 <= '4.8')?'red':(employmentSkillsMayContents.kpi4 > '4.8' && employmentSkillsMayContents.kpi4 <= '6.4')?'orange':(employmentSkillsMayContents.kpi4 > '6.4' && employmentSkillsMayContents.kpi4 < '8')?'yellow-7':(employmentSkillsMayContents.kpi4 >= '8' && employmentSkillsMayContents.kpi4 < '9.6')?'green':(employmentSkillsMayContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsMayContents.kpi4}}
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
                              :color="(employmentSkillsJunContents.kpi1 == null)?'grey-2':(employmentSkillsJunContents.kpi1 >= '0' && employmentSkillsJunContents.kpi1 <= '29.4')?'red':(employmentSkillsJunContents.kpi1 > '29.4' && employmentSkillsJunContents.kpi1 <= '39.2')?'orange':(employmentSkillsJunContents.kpi1 > '39.2' && employmentSkillsJunContents.kpi1 < '49')?'yellow-7':(employmentSkillsJunContents.kpi1 >= '49' && employmentSkillsJunContents.kpi1 < '58.8')?'green':(employmentSkillsJunContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi2 == null)?'grey-2':(employmentSkillsJunContents.kpi2 >= '0' && employmentSkillsJunContents.kpi2 <= '53.2')?'red':(employmentSkillsJunContents.kpi2 > '53.2' && employmentSkillsJunContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJunContents.kpi2 > '70.93333333' && employmentSkillsJunContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJunContents.kpi2 >= '88.66666667' && employmentSkillsJunContents.kpi2 < '106.4')?'green':(employmentSkillsJunContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi3 == null)?'grey-2':(employmentSkillsJunContents.kpi3 >= '0' && employmentSkillsJunContents.kpi3 <= '22.6')?'red':(employmentSkillsJunContents.kpi3 > '22.6' && employmentSkillsJunContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJunContents.kpi3 > '30.13333333' && employmentSkillsJunContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJunContents.kpi3 >= '37.66666667' && employmentSkillsJunContents.kpi3 < '45.2')?'green':(employmentSkillsJunContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJunContents.kpi4 == null)?'grey-2':(employmentSkillsJunContents.kpi4 >= '0' && employmentSkillsJunContents.kpi4 <= '4.8')?'red':(employmentSkillsJunContents.kpi4 > '4.8' && employmentSkillsJunContents.kpi4 <= '6.4')?'orange':(employmentSkillsJunContents.kpi4 > '6.4' && employmentSkillsJunContents.kpi4 < '8')?'yellow-7':(employmentSkillsJunContents.kpi4 >= '8' && employmentSkillsJunContents.kpi4 < '9.6')?'green':(employmentSkillsJunContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJunContents.kpi4}}
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
                              :color="(employmentSkillsJulContents.kpi1 == null)?'grey-2':(employmentSkillsJulContents.kpi1 >= '0' && employmentSkillsJulContents.kpi1 <= '29.4')?'red':(employmentSkillsJulContents.kpi1 > '29.4' && employmentSkillsJulContents.kpi1 <= '39.2')?'orange':(employmentSkillsJulContents.kpi1 > '39.2' && employmentSkillsJulContents.kpi1 < '49')?'yellow-7':(employmentSkillsJulContents.kpi1 >= '49' && employmentSkillsJulContents.kpi1 < '58.8')?'green':(employmentSkillsJulContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi2 == null)?'grey-2':(employmentSkillsJulContents.kpi2 >= '0' && employmentSkillsJulContents.kpi2 <= '53.2')?'red':(employmentSkillsJulContents.kpi2 > '53.2' && employmentSkillsJulContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsJulContents.kpi2 > '70.93333333' && employmentSkillsJulContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsJulContents.kpi2 >= '88.66666667' && employmentSkillsJulContents.kpi2 < '106.4')?'green':(employmentSkillsJulContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi3 == null)?'grey-2':(employmentSkillsJulContents.kpi3 >= '0' && employmentSkillsJulContents.kpi3 <= '22.6')?'red':(employmentSkillsJulContents.kpi3 > '22.6' && employmentSkillsJulContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsJulContents.kpi3 > '30.13333333' && employmentSkillsJulContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsJulContents.kpi3 >= '37.66666667' && employmentSkillsJulContents.kpi3 < '45.2')?'green':(employmentSkillsJulContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsJulContents.kpi4 == null)?'grey-2':(employmentSkillsJulContents.kpi4 >= '0' && employmentSkillsJulContents.kpi4 <= '4.8')?'red':(employmentSkillsJulContents.kpi4 > '4.8' && employmentSkillsJulContents.kpi4 <= '6.4')?'orange':(employmentSkillsJulContents.kpi4 > '6.4' && employmentSkillsJulContents.kpi4 < '8')?'yellow-7':(employmentSkillsJulContents.kpi4 >= '8' && employmentSkillsJulContents.kpi4 < '9.6')?'green':(employmentSkillsJulContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsJulContents.kpi4}}
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
                              :color="(employmentSkillsAugContents.kpi1 == null)?'grey-2':(employmentSkillsAugContents.kpi1 >= '0' && employmentSkillsAugContents.kpi1 <= '29.4')?'red':(employmentSkillsAugContents.kpi1 > '29.4' && employmentSkillsAugContents.kpi1 <= '39.2')?'orange':(employmentSkillsAugContents.kpi1 > '39.2' && employmentSkillsAugContents.kpi1 < '49')?'yellow-7':(employmentSkillsAugContents.kpi1 >= '49' && employmentSkillsAugContents.kpi1 < '58.8')?'green':(employmentSkillsAugContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi2 == null)?'grey-2':(employmentSkillsAugContents.kpi2 >= '0' && employmentSkillsAugContents.kpi2 <= '53.2')?'red':(employmentSkillsAugContents.kpi2 > '53.2' && employmentSkillsAugContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsAugContents.kpi2 > '70.93333333' && employmentSkillsAugContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsAugContents.kpi2 >= '88.66666667' && employmentSkillsAugContents.kpi2 < '106.4')?'green':(employmentSkillsAugContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi3 == null)?'grey-2':(employmentSkillsAugContents.kpi3 >= '0' && employmentSkillsAugContents.kpi3 <= '22.6')?'red':(employmentSkillsAugContents.kpi3 > '22.6' && employmentSkillsAugContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsAugContents.kpi3 > '30.13333333' && employmentSkillsAugContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsAugContents.kpi3 >= '37.66666667' && employmentSkillsAugContents.kpi3 < '45.2')?'green':(employmentSkillsAugContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsAugContents.kpi4 == null)?'grey-2':(employmentSkillsAugContents.kpi4 >= '0' && employmentSkillsAugContents.kpi4 <= '4.8')?'red':(employmentSkillsAugContents.kpi4 > '4.8' && employmentSkillsAugContents.kpi4 <= '6.4')?'orange':(employmentSkillsAugContents.kpi4 > '6.4' && employmentSkillsAugContents.kpi4 < '8')?'yellow-7':(employmentSkillsAugContents.kpi4 >= '8' && employmentSkillsAugContents.kpi4 < '9.6')?'green':(employmentSkillsAugContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsAugContents.kpi4}}
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
                              :color="(employmentSkillsSepContents.kpi1 == null)?'grey-2':(employmentSkillsSepContents.kpi1 >= '0' && employmentSkillsSepContents.kpi1 <= '29.4')?'red':(employmentSkillsSepContents.kpi1 > '29.4' && employmentSkillsSepContents.kpi1 <= '39.2')?'orange':(employmentSkillsSepContents.kpi1 > '39.2' && employmentSkillsSepContents.kpi1 < '49')?'yellow-7':(employmentSkillsSepContents.kpi1 >= '49' && employmentSkillsSepContents.kpi1 < '58.8')?'green':(employmentSkillsSepContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi2 == null)?'grey-2':(employmentSkillsSepContents.kpi2 >= '0' && employmentSkillsSepContents.kpi2 <= '53.2')?'red':(employmentSkillsSepContents.kpi2 > '53.2' && employmentSkillsSepContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsSepContents.kpi2 > '70.93333333' && employmentSkillsSepContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsSepContents.kpi2 >= '88.66666667' && employmentSkillsSepContents.kpi2 < '106.4')?'green':(employmentSkillsSepContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi3 == null)?'grey-2':(employmentSkillsSepContents.kpi3 >= '0' && employmentSkillsSepContents.kpi3 <= '22.6')?'red':(employmentSkillsSepContents.kpi3 > '22.6' && employmentSkillsSepContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsSepContents.kpi3 > '30.13333333' && employmentSkillsSepContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsSepContents.kpi3 >= '37.66666667' && employmentSkillsSepContents.kpi3 < '45.2')?'green':(employmentSkillsSepContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsSepContents.kpi4 == null)?'grey-2':(employmentSkillsSepContents.kpi4 >= '0' && employmentSkillsSepContents.kpi4 <= '4.8')?'red':(employmentSkillsSepContents.kpi4 > '4.8' && employmentSkillsSepContents.kpi4 <= '6.4')?'orange':(employmentSkillsSepContents.kpi4 > '6.4' && employmentSkillsSepContents.kpi4 < '8')?'yellow-7':(employmentSkillsSepContents.kpi4 >= '8' && employmentSkillsSepContents.kpi4 < '9.6')?'green':(employmentSkillsSepContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsSepContents.kpi4}}
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
                              :color="(employmentSkillsOctContents.kpi1 == null)?'grey-2':(employmentSkillsOctContents.kpi1 >= '0' && employmentSkillsOctContents.kpi1 <= '29.4')?'red':(employmentSkillsOctContents.kpi1 > '29.4' && employmentSkillsOctContents.kpi1 <= '39.2')?'orange':(employmentSkillsOctContents.kpi1 > '39.2' && employmentSkillsOctContents.kpi1 < '49')?'yellow-7':(employmentSkillsOctContents.kpi1 >= '49' && employmentSkillsOctContents.kpi1 < '58.8')?'green':(employmentSkillsOctContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi2 == null)?'grey-2':(employmentSkillsOctContents.kpi2 >= '0' && employmentSkillsOctContents.kpi2 <= '53.2')?'red':(employmentSkillsOctContents.kpi2 > '53.2' && employmentSkillsOctContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsOctContents.kpi2 > '70.93333333' && employmentSkillsOctContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsOctContents.kpi2 >= '88.66666667' && employmentSkillsOctContents.kpi2 < '106.4')?'green':(employmentSkillsOctContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi3 == null)?'grey-2':(employmentSkillsOctContents.kpi3 >= '0' && employmentSkillsOctContents.kpi3 <= '22.6')?'red':(employmentSkillsOctContents.kpi3 > '22.6' && employmentSkillsOctContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsOctContents.kpi3 > '30.13333333' && employmentSkillsOctContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsOctContents.kpi3 >= '37.66666667' && employmentSkillsOctContents.kpi3 < '45.2')?'green':(employmentSkillsOctContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsOctContents.kpi4 == null)?'grey-2':(employmentSkillsOctContents.kpi4 >= '0' && employmentSkillsOctContents.kpi4 <= '4.8')?'red':(employmentSkillsOctContents.kpi4 > '4.8' && employmentSkillsOctContents.kpi4 <= '6.4')?'orange':(employmentSkillsOctContents.kpi4 > '6.4' && employmentSkillsOctContents.kpi4 < '8')?'yellow-7':(employmentSkillsOctContents.kpi4 >= '8' && employmentSkillsOctContents.kpi4 < '9.6')?'green':(employmentSkillsOctContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsOctContents.kpi4}}
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
                              :color="(employmentSkillsNovContents.kpi1 == null)?'grey-2':(employmentSkillsNovContents.kpi1 >= '0' && employmentSkillsNovContents.kpi1 <= '29.4')?'red':(employmentSkillsNovContents.kpi1 > '29.4' && employmentSkillsNovContents.kpi1 <= '39.2')?'orange':(employmentSkillsNovContents.kpi1 > '39.2' && employmentSkillsNovContents.kpi1 < '49')?'yellow-7':(employmentSkillsNovContents.kpi1 >= '49' && employmentSkillsNovContents.kpi1 < '58.8')?'green':(employmentSkillsNovContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi2 == null)?'grey-2':(employmentSkillsNovContents.kpi2 >= '0' && employmentSkillsNovContents.kpi2 <= '53.2')?'red':(employmentSkillsNovContents.kpi2 > '53.2' && employmentSkillsNovContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsNovContents.kpi2 > '70.93333333' && employmentSkillsNovContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsNovContents.kpi2 >= '88.66666667' && employmentSkillsNovContents.kpi2 < '106.4')?'green':(employmentSkillsNovContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi3 == null)?'grey-2':(employmentSkillsNovContents.kpi3 >= '0' && employmentSkillsNovContents.kpi3 <= '22.6')?'red':(employmentSkillsNovContents.kpi3 > '22.6' && employmentSkillsNovContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsNovContents.kpi3 > '30.13333333' && employmentSkillsNovContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsNovContents.kpi3 >= '37.66666667' && employmentSkillsNovContents.kpi3 < '45.2')?'green':(employmentSkillsNovContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsNovContents.kpi4 == null)?'grey-2':(employmentSkillsNovContents.kpi4 >= '0' && employmentSkillsNovContents.kpi4 <= '4.8')?'red':(employmentSkillsNovContents.kpi4 > '4.8' && employmentSkillsNovContents.kpi4 <= '6.4')?'orange':(employmentSkillsNovContents.kpi4 > '6.4' && employmentSkillsNovContents.kpi4 < '8')?'yellow-7':(employmentSkillsNovContents.kpi4 >= '8' && employmentSkillsNovContents.kpi4 < '9.6')?'green':(employmentSkillsNovContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsNovContents.kpi4}}
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
                              :color="(employmentSkillsDecContents.kpi1 == null)?'grey-2':(employmentSkillsDecContents.kpi1 >= '0' && employmentSkillsDecContents.kpi1 <= '29.4')?'red':(employmentSkillsDecContents.kpi1 > '29.4' && employmentSkillsDecContents.kpi1 <= '39.2')?'orange':(employmentSkillsDecContents.kpi1 > '39.2' && employmentSkillsDecContents.kpi1 < '49')?'yellow-7':(employmentSkillsDecContents.kpi1 >= '49' && employmentSkillsDecContents.kpi1 < '58.8')?'green':(employmentSkillsDecContents.kpi1 >= '58.8'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi2 == null)?'grey-2':(employmentSkillsDecContents.kpi2 >= '0' && employmentSkillsDecContents.kpi2 <= '53.2')?'red':(employmentSkillsDecContents.kpi2 > '53.2' && employmentSkillsDecContents.kpi2 <= '70.93333333')?'orange':(employmentSkillsDecContents.kpi2 > '70.93333333' && employmentSkillsDecContents.kpi2 < '88.66666667')?'yellow-7':(employmentSkillsDecContents.kpi2 >= '88.66666667' && employmentSkillsDecContents.kpi2 < '106.4')?'green':(employmentSkillsDecContents.kpi2 >= '106.4'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi3 == null)?'grey-2':(employmentSkillsDecContents.kpi3 >= '0' && employmentSkillsDecContents.kpi3 <= '22.6')?'red':(employmentSkillsDecContents.kpi3 > '22.6' && employmentSkillsDecContents.kpi3 <= '30.13333333')?'orange':(employmentSkillsDecContents.kpi3 > '30.13333333' && employmentSkillsDecContents.kpi3 < '37.66666667')?'yellow-7':(employmentSkillsDecContents.kpi3 >= '37.66666667' && employmentSkillsDecContents.kpi3 < '45.2')?'green':(employmentSkillsDecContents.kpi3 >= '45.2'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(employmentSkillsDecContents.kpi4 == null)?'grey-2':(employmentSkillsDecContents.kpi4 >= '0' && employmentSkillsDecContents.kpi4 <= '4.8')?'red':(employmentSkillsDecContents.kpi4 > '4.8' && employmentSkillsDecContents.kpi4 <= '6.4')?'orange':(employmentSkillsDecContents.kpi4 > '6.4' && employmentSkillsDecContents.kpi4 < '8')?'yellow-7':(employmentSkillsDecContents.kpi4 >= '8' && employmentSkillsDecContents.kpi4 < '9.6')?'green':(employmentSkillsDecContents.kpi4 >= '9.6'?'blue':'grey-2')"
                            >
                            {{employmentSkillsDecContents.kpi4}}
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
              employmentSkillsJanContent: {
                
              },
              employmentSkillsJanContents : [],
              employmentSkillsFebContent: {
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
              employmentSkillsFebContents : [],
              employmentSkillsMarContent: {
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
              employmentSkillsMarContents : [],
              employmentSkillsAprContent: {
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
              employmentSkillsAprContents : [],
              employmentSkillsMayContent: {
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
              employmentSkillsMayContents : [],
              employmentSkillsJunContent: {
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
              employmentSkillsJunContents : [],
              employmentSkillsJulContent: {
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
              employmentSkillsJulContents : [],
              employmentSkillsAugContent: {
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
              employmentSkillsAugContents : [],
              employmentSkillsSepContent: {
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
              employmentSkillsSepContents : [],
              employmentSkillsOctContent: {
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
              employmentSkillsOctContents : [],
              employmentSkillsNovContent: {
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
              employmentSkillsNovContents : [],
              employmentSkillsDecContent: {
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
              employmentSkillsDecContents : []


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
                            {time_period: 'January', expenses: this.employmentSkillsJanContents.expenses, revenues: this.employmentSkillsJanContents.revenues},
                            {time_period: 'February', expenses: this.employmentSkillsFebContents.expenses, revenues: this.employmentSkillsFebContents.revenues},
                            {time_period: 'March', expenses: this.employmentSkillsMarContents.expenses, revenues: this.employmentSkillsMarContents.revenues},
                            {time_period: 'April', expenses: this.employmentSkillsAprContents.expenses, revenues: this.employmentSkillsAprContents.revenues},
                            {time_period: 'May', expenses: this.employmentSkillsMayContents.expenses, revenues: this.employmentSkillsMayContents.revenues},
                            {time_period: 'June', expenses: this.employmentSkillsJunContents.expenses, revenues: this.employmentSkillsJunContents.revenues},
                            {time_period: 'July', expenses: this.employmentSkillsJulContents.expenses, revenues: this.employmentSkillsJulContents.revenues},
                            {time_period: 'August', expenses: this.employmentSkillsAugContents.expenses, revenues: this.employmentSkillsAugContents.revenues},
                            {time_period: 'September', expenses: this.employmentSkillsSepContents.expenses, revenues: this.employmentSkillsSepContents.revenues},
                            {time_period: 'October', expenses: this.employmentSkillsOctContents.expenses, revenues: this.employmentSkillsOctContents.revenues},
                            {time_period: 'November', expenses: this.employmentSkillsNovContents.expenses, revenues: this.employmentSkillsNovContents.revenues},
                            {time_period: 'December',expenses: this.employmentSkillsDecContents.expenses, revenues: this.employmentSkillsDecContents.revenues }
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
                            {months: 'January', kpi1: this.employmentSkillsJanContents.kpi1, kpi2: this.employmentSkillsJanContents.kpi2, kpi3: this.employmentSkillsJanContents.kpi3, kpi4: this.employmentSkillsJanContents.kpi4, uniqueVol: this.employmentSkillsJanContents.uniqueVolunteers, volHours: this.employmentSkillsJanContents.volunteerHours},
                            {months: 'February', kpi1: this.employmentSkillsFebContents.kpi1, kpi2: this.employmentSkillsFebContents.kpi2, kpi3: this.employmentSkillsFebContents.kpi3, kpi4: this.employmentSkillsFebContents.kpi4, uniqueVol: this.employmentSkillsFebContents.uniqueVolunteers, volHours: this.employmentSkillsFebContents.volunteerHours},
                            {months: 'March', kpi1: this.employmentSkillsMarContents.kpi1, kpi2: this.employmentSkillsMarContents.kpi2, kpi3: this.employmentSkillsMarContents.kpi3, kpi4: this.employmentSkillsMarContents.kpi4, uniqueVol: this.employmentSkillsMarContents.uniqueVolunteers, volHours: this.employmentSkillsMarContents.volunteerHours},
                            {months: 'April', kpi1: this.employmentSkillsAprContents.kpi1, kpi2: this.employmentSkillsAprContents.kpi2, kpi3: this.employmentSkillsAprContents.kpi3, kpi4: this.employmentSkillsAprContents.kpi4, uniqueVol: this.employmentSkillsAprContents.uniqueVolunteers, volHours: this.employmentSkillsAprContents.volunteerHours},
                            {months: 'May', kpi1: this.employmentSkillsMayContents.kpi1, kpi2: this.employmentSkillsMayContents.kpi2, kpi3: this.employmentSkillsMayContents.kpi3, kpi4: this.employmentSkillsMayContents.kpi4, uniqueVol: this.employmentSkillsMayContents.uniqueVolunteers, volHours: this.employmentSkillsMayContents.volunteerHours},
                            {months: 'June', kpi1: this.employmentSkillsJunContents.kpi1, kpi2: this.employmentSkillsJunContents.kpi2, kpi3: this.employmentSkillsJunContents.kpi3, kpi4: this.employmentSkillsJunContents.kpi4, uniqueVol: this.employmentSkillsJunContents.uniqueVolunteers, volHours: this.employmentSkillsJunContents.volunteerHours},
                            {months: 'July', kpi1: this.employmentSkillsJulContents.kpi1, kpi2: this.employmentSkillsJulContents.kpi2, kpi3: this.employmentSkillsJulContents.kpi3, kpi4: this.employmentSkillsJulContents.kpi4, uniqueVol: this.employmentSkillsJulContents.uniqueVolunteers, volHours: this.employmentSkillsJulContents.volunteerHours},
                            {months: 'August', kpi1: this.employmentSkillsAugContents.kpi1, kpi2: this.employmentSkillsAugContents.kpi2, kpi3: this.employmentSkillsAugContents.kpi3, kpi4: this.employmentSkillsAugContents.kpi4, uniqueVol: this.employmentSkillsAugContents.uniqueVolunteers, volHours: this.employmentSkillsAugContents.volunteerHours},
                            {months: 'September', kpi1: this.employmentSkillsSepContents.kpi1, kpi2: this.employmentSkillsSepContents.kpi2, kpi3: this.employmentSkillsSepContents.kpi3, kpi4: this.employmentSkillsSepContents.kpi4, uniqueVol: this.employmentSkillsSepContents.uniqueVolunteers, volHours: this.employmentSkillsSepContents.volunteerHours},
                            {months: 'October', kpi1: this.employmentSkillsOctContents.kpi1, kpi2: this.employmentSkillsOctContents.kpi2, kpi3: this.employmentSkillsOctContents.kpi3, kpi4: this.employmentSkillsOctContents.kpi4, uniqueVol: this.employmentSkillsOctContents.uniqueVolunteers, volHours: this.employmentSkillsOctContents.volunteerHours},
                            {months: 'November', kpi1: this.employmentSkillsNovContents.kpi1, kpi2: this.employmentSkillsNovContents.kpi2, kpi3: this.employmentSkillsNovContents.kpi3, kpi4: this.employmentSkillsNovContents.kpi4, uniqueVol: this.employmentSkillsNovContents.uniqueVolunteers, volHours: this.employmentSkillsNovContents.volunteerHours},
                            {months: 'December',kpi1: this.employmentSkillsDecContents.kpi1, kpi2: this.employmentSkillsDecContents.kpi2, kpi3: this.employmentSkillsDecContents.kpi3, kpi4: this.employmentSkillsDecContents.kpi4, uniqueVol: this.employmentSkillsDecContents.uniqueVolunteers, volHours: this.employmentSkillsDecContents.volunteerHours},
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
                            data: [{value: this.employmentSkillsJanContents.budgetUsage}],
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
                                {value: this.employmentSkillsJanContents.perCategory1, name: this.employmentSkillsJanContents.expenseCategory1},
                                {value: this.employmentSkillsJanContents.perCategory2, name: this.employmentSkillsJanContents.expenseCategory2},
                                {value: this.employmentSkillsJanContents.perCategory3, name: this.employmentSkillsJanContents.expenseCategory3},
                                {value: this.employmentSkillsJanContents.perCategory4, name: this.employmentSkillsJanContents.expenseCategory4},
                                {value: this.employmentSkillsJanContents.perCategory5, name: this.employmentSkillsJanContents.expenseCategory5},
                                {value: this.employmentSkillsJanContents.perCategory6, name: this.employmentSkillsJanContents.expenseCategory6}
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
                            data: [{value: this.employmentSkillsFebContents.budgetUsage}],
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
                                {value: this.employmentSkillsFebContents.perCategory1, name: this.employmentSkillsFebContents.expenseCategory1},
                                {value: this.employmentSkillsFebContents.perCategory2, name: this.employmentSkillsFebContents.expenseCategory2},
                                {value: this.employmentSkillsFebContents.perCategory3, name: this.employmentSkillsFebContents.expenseCategory3},
                                {value: this.employmentSkillsFebContents.perCategory4, name: this.employmentSkillsFebContents.expenseCategory4},
                                {value: this.employmentSkillsFebContents.perCategory5, name: this.employmentSkillsFebContents.expenseCategory5},
                                {value: this.employmentSkillsFebContents.perCategory6, name: this.employmentSkillsFebContents.expenseCategory6}
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
                            data: [{value: this.employmentSkillsMarContents.budgetUsage}],
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
                                {value: this.employmentSkillsMarContents.perCategory1, name: this.employmentSkillsMarContents.expenseCategory1},
                                {value: this.employmentSkillsMarContents.perCategory2, name: this.employmentSkillsMarContents.expenseCategory2},
                                {value: this.employmentSkillsMarContents.perCategory3, name: this.employmentSkillsMarContents.expenseCategory3},
                                {value: this.employmentSkillsMarContents.perCategory4, name: this.employmentSkillsMarContents.expenseCategory4},
                                {value: this.employmentSkillsMarContents.perCategory5, name: this.employmentSkillsMarContents.expenseCategory5},
                                {value: this.employmentSkillsMarContents.perCategory6, name: this.employmentSkillsMarContents.expenseCategory6}
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
                            data: [{value: this.employmentSkillsAprContents.budgetUsage}],
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
                                {value: this.employmentSkillsAprContents.perCategory1, name: this.employmentSkillsAprContents.expenseCategory1},
                                {value: this.employmentSkillsAprContents.perCategory2, name: this.employmentSkillsAprContents.expenseCategory2},
                                {value: this.employmentSkillsAprContents.perCategory3, name: this.employmentSkillsAprContents.expenseCategory3},
                                {value: this.employmentSkillsAprContents.perCategory4, name: this.employmentSkillsAprContents.expenseCategory4},
                                {value: this.employmentSkillsAprContents.perCategory5, name: this.employmentSkillsAprContents.expenseCategory5},
                                {value: this.employmentSkillsAprContents.perCategory6, name: this.employmentSkillsAprContents.expenseCategory6}  
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
                            data: [{value: this.employmentSkillsMayContents.budgetUsage}],
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
                                {value: this.employmentSkillsMayContents.perCategory1, name: this.employmentSkillsMayContents.expenseCategory1},
                                {value: this.employmentSkillsMayContents.perCategory2, name: this.employmentSkillsMayContents.expenseCategory2},
                                {value: this.employmentSkillsMayContents.perCategory3, name: this.employmentSkillsMayContents.expenseCategory3},
                                {value: this.employmentSkillsMayContents.perCategory4, name: this.employmentSkillsMayContents.expenseCategory4},
                                {value: this.employmentSkillsMayContents.perCategory5, name: this.employmentSkillsMayContents.expenseCategory5},
                                {value: this.employmentSkillsMayContents.perCategory6, name: this.employmentSkillsMayContents.expenseCategory6}  
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
                            data: [{value: this.employmentSkillsJunContents.budgetUsage}],
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
                                {value: this.employmentSkillsJunContents.perCategory1, name: this.employmentSkillsJunContents.expenseCategory1},
                                {value: this.employmentSkillsJunContents.perCategory2, name: this.employmentSkillsJunContents.expenseCategory2},
                                {value: this.employmentSkillsJunContents.perCategory3, name: this.employmentSkillsJunContents.expenseCategory3},
                                {value: this.employmentSkillsJunContents.perCategory4, name: this.employmentSkillsJunContents.expenseCategory4},
                                {value: this.employmentSkillsJunContents.perCategory5, name: this.employmentSkillsJunContents.expenseCategory5},
                                {value: this.employmentSkillsJunContents.perCategory6, name: this.employmentSkillsJunContents.expenseCategory6}  
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
                            data: [{value: this.employmentSkillsJulContents.budgetUsage}],
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
                                {value: this.employmentSkillsJulContents.perCategory1, name: this.employmentSkillsJulContents.expenseCategory1},
                                {value: this.employmentSkillsJulContents.perCategory2, name: this.employmentSkillsJulContents.expenseCategory2},
                                {value: this.employmentSkillsJulContents.perCategory3, name: this.employmentSkillsJulContents.expenseCategory3},
                                {value: this.employmentSkillsJulContents.perCategory4, name: this.employmentSkillsJulContents.expenseCategory4},
                                {value: this.employmentSkillsJulContents.perCategory5, name: this.employmentSkillsJulContents.expenseCategory5},
                                {value: this.employmentSkillsJulContents.perCategory6, name: this.employmentSkillsJulContents.expenseCategory6}  
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
                            data: [{value: this.employmentSkillsAugContents.budgetUsage}],
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
                                {value: this.employmentSkillsAugContents.perCategory1, name: this.employmentSkillsAugContents.expenseCategory1},
                                {value: this.employmentSkillsAugContents.perCategory2, name: this.employmentSkillsAugContents.expenseCategory2},
                                {value: this.employmentSkillsAugContents.perCategory3, name: this.employmentSkillsAugContents.expenseCategory3},
                                {value: this.employmentSkillsAugContents.perCategory4, name: this.employmentSkillsAugContents.expenseCategory4},
                                {value: this.employmentSkillsAugContents.perCategory5, name: this.employmentSkillsAugContents.expenseCategory5},
                                {value: this.employmentSkillsAugContents.perCategory6, name: this.employmentSkillsAugContents.expenseCategory6}  
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
                            data: [{value: this.employmentSkillsSepContents.budgetUsage}],
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
                                {value: this.employmentSkillsSepContents.perCategory1, name: this.employmentSkillsSepContents.expenseCategory1},
                                {value: this.employmentSkillsSepContents.perCategory2, name: this.employmentSkillsSepContents.expenseCategory2},
                                {value: this.employmentSkillsSepContents.perCategory3, name: this.employmentSkillsSepContents.expenseCategory3},
                                {value: this.employmentSkillsSepContents.perCategory4, name: this.employmentSkillsSepContents.expenseCategory4},
                                {value: this.employmentSkillsSepContents.perCategory5, name: this.employmentSkillsSepContents.expenseCategory5},
                                {value: this.employmentSkillsSepContents.perCategory6, name: this.employmentSkillsSepContents.expenseCategory6}  
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
                            data: [{value: this.employmentSkillsOctContents.budgetUsage}],
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
                                {value: this.employmentSkillsOctContents.perCategory1, name: this.employmentSkillsOctContents.expenseCategory1},
                                {value: this.employmentSkillsOctContents.perCategory2, name: this.employmentSkillsOctContents.expenseCategory2},
                                {value: this.employmentSkillsOctContents.perCategory3, name: this.employmentSkillsOctContents.expenseCategory3},
                                {value: this.employmentSkillsOctContents.perCategory4, name: this.employmentSkillsOctContents.expenseCategory4},
                                {value: this.employmentSkillsOctContents.perCategory5, name: this.employmentSkillsOctContents.expenseCategory5},
                                {value: this.employmentSkillsOctContents.perCategory6, name: this.employmentSkillsOctContents.expenseCategory6}  
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
                            data: [{value: this.employmentSkillsNovContents.budgetUsage}],
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
                                {value: this.employmentSkillsNovContents.perCategory1, name: this.employmentSkillsNovContents.expenseCategory1},
                                {value: this.employmentSkillsNovContents.perCategory2, name: this.employmentSkillsNovContents.expenseCategory2},
                                {value: this.employmentSkillsNovContents.perCategory3, name: this.employmentSkillsNovContents.expenseCategory3},
                                {value: this.employmentSkillsNovContents.perCategory4, name: this.employmentSkillsNovContents.expenseCategory4},
                                {value: this.employmentSkillsNovContents.perCategory5, name: this.employmentSkillsNovContents.expenseCategory5},
                                {value: this.employmentSkillsNovContents.perCategory6, name: this.employmentSkillsNovContents.expenseCategory6}  
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
                            data: [{value: this.employmentSkillsDecContents.budgetUsage}],
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
                                {value: this.employmentSkillsDecContents.perCategory1, name: this.employmentSkillsDecContents.expenseCategory1},
                                {value: this.employmentSkillsDecContents.perCategory2, name: this.employmentSkillsDecContents.expenseCategory2},
                                {value: this.employmentSkillsDecContents.perCategory3, name: this.employmentSkillsDecContents.expenseCategory3},
                                {value: this.employmentSkillsDecContents.perCategory4, name: this.employmentSkillsDecContents.expenseCategory4},
                                {value: this.employmentSkillsDecContents.perCategory5, name: this.employmentSkillsDecContents.expenseCategory5},
                                {value: this.employmentSkillsDecContents.perCategory6, name: this.employmentSkillsDecContents.expenseCategory6}
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
            var docemploymentSkillsJanRef = db.collection("employmentSkills").doc("january");

            docemploymentSkillsJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.employmentSkillsJanContents = doc.data();
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
            var docemploymentSkillsFebRef = db.collection("employmentSkills").doc("february");

            docemploymentSkillsFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.employmentSkillsFebContents = doc.data();
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
            var docemploymentSkillsMarRef = db.collection("employmentSkills").doc("march");

            docemploymentSkillsMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.employmentSkillsMarContents = doc.data();
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
            var docemploymentSkillsAprRef = db.collection("employmentSkills").doc("april1");

            docemploymentSkillsAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.employmentSkillsAprContents = doc.data();
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
            var docemploymentSkillsMayRef = db.collection("employmentSkills").doc("may");

            docemploymentSkillsMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.employmentSkillsMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docemploymentSkillsJunRef = db.collection("employmentSkills").doc("june");

            docemploymentSkillsJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.employmentSkillsJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docemploymentSkillsJulRef = db.collection("employmentSkills").doc("july");

            docemploymentSkillsJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.employmentSkillsJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docemploymentSkillsAugRef = db.collection("employmentSkills").doc("august");

            docemploymentSkillsAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.employmentSkillsAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docemploymentSkillsSepRef = db.collection("employmentSkills").doc("september");

            docemploymentSkillsSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.employmentSkillsSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docemploymentSkillsOctRef = db.collection("employmentSkills").doc("october");

            docemploymentSkillsOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.employmentSkillsOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docemploymentSkillsNovRef = db.collection("employmentSkills").doc("november");

            docemploymentSkillsNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.employmentSkillsNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docemploymentSkillsDecRef = db.collection("employmentSkills").doc("december");

            docemploymentSkillsDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.employmentSkillsDecContents = doc.data();
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
              return this.employmentSkillsJanContents.expenses = getRealValue(this.employmentSkillsJanContents.perCategory1) + getRealValue(this.employmentSkillsJanContents.perCategory2) + getRealValue(this.employmentSkillsJanContents.perCategory3) + getRealValue(this.employmentSkillsJanContents.perCategory4) + getRealValue(this.employmentSkillsJanContents.perCategory5) + getRealValue(this.employmentSkillsJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsJanContents.budgetUsage = ((getRealValue(this.employmentSkillsJanContents.expenses) / getRealValue(this.employmentSkillsJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsFebContents.expenses = getRealValue(this.employmentSkillsFebContents.perCategory1) + getRealValue(this.employmentSkillsFebContents.perCategory2) + getRealValue(this.employmentSkillsFebContents.perCategory3) + getRealValue(this.employmentSkillsFebContents.perCategory4) + getRealValue(this.employmentSkillsFebContents.perCategory5) + getRealValue(this.employmentSkillsFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsFebContents.budgetUsage = (((getRealValue(this.employmentSkillsFebContents.expenses) + getRealValue(this.employmentSkillsJanContents.expenses)) / getRealValue(this.employmentSkillsFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsMarContents.expenses = getRealValue(this.employmentSkillsMarContents.perCategory1) + getRealValue(this.employmentSkillsMarContents.perCategory2) + getRealValue(this.employmentSkillsMarContents.perCategory3) + getRealValue(this.employmentSkillsMarContents.perCategory4) + getRealValue(this.employmentSkillsMarContents.perCategory5) + getRealValue(this.employmentSkillsMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsMarContents.budgetUsage = (((getRealValue(this.employmentSkillsMarContents.expenses) + getRealValue(this.employmentSkillsFebContents.expenses) + getRealValue(this.employmentSkillsJanContents.expenses)) / getRealValue(this.employmentSkillsMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsAprContents.expenses = getRealValue(this.employmentSkillsAprContents.perCategory1) + getRealValue(this.employmentSkillsAprContents.perCategory2) + getRealValue(this.employmentSkillsAprContents.perCategory3) + getRealValue(this.employmentSkillsAprContents.perCategory4) + getRealValue(this.employmentSkillsAprContents.perCategory5) + getRealValue(this.employmentSkillsAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsAprContents.budgetUsage = (((getRealValue(this.employmentSkillsAprContents.expenses) + getRealValue(this.employmentSkillsMarContents.expenses) + getRealValue(this.employmentSkillsFebContents.expenses) + getRealValue(this.employmentSkillsJanContents.expenses)) / getRealValue(this.employmentSkillsAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsMayContents.expenses = getRealValue(this.employmentSkillsMayContents.perCategory1) + getRealValue(this.employmentSkillsMayContents.perCategory2) + getRealValue(this.employmentSkillsMayContents.perCategory3) + getRealValue(this.employmentSkillsMayContents.perCategory4) + getRealValue(this.employmentSkillsMayContents.perCategory5) + getRealValue(this.employmentSkillsMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsMayContents.budgetUsage = (((getRealValue(this.employmentSkillsMayContents.expenses) + getRealValue(this.employmentSkillsAprContents.expenses) + getRealValue(this.employmentSkillsMarContents.expenses) + getRealValue(this.employmentSkillsFebContents.expenses) + getRealValue(this.employmentSkillsJanContents.expenses)) / getRealValue(this.employmentSkillsMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsJunContents.expenses = getRealValue(this.employmentSkillsJunContents.perCategory1) + getRealValue(this.employmentSkillsJunContents.perCategory2) + getRealValue(this.employmentSkillsJunContents.perCategory3) + getRealValue(this.employmentSkillsJunContents.perCategory4) + getRealValue(this.employmentSkillsJunContents.perCategory5) + getRealValue(this.employmentSkillsJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsJunContents.budgetUsage = (((getRealValue(this.employmentSkillsJunContents.expenses) + getRealValue(this.employmentSkillsMayContents.expenses) + getRealValue(this.employmentSkillsAprContents.expenses) + getRealValue(this.employmentSkillsMarContents.expenses) + getRealValue(this.employmentSkillsFebContents.expenses) + getRealValue(this.employmentSkillsJanContents.expenses)) / getRealValue(this.employmentSkillsJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsJulContents.expenses = getRealValue(this.employmentSkillsJulContents.perCategory1) + getRealValue(this.employmentSkillsJulContents.perCategory2) + getRealValue(this.employmentSkillsJulContents.perCategory3) + getRealValue(this.employmentSkillsJulContents.perCategory4) + getRealValue(this.employmentSkillsJulContents.perCategory5) + getRealValue(this.employmentSkillsJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsJulContents.budgetUsage = (((getRealValue(this.employmentSkillsJulContents.expenses) + getRealValue(this.employmentSkillsJunContents.expenses) + getRealValue(this.employmentSkillsMayContents.expenses) + getRealValue(this.employmentSkillsAprContents.expenses) + getRealValue(this.employmentSkillsMarContents.expenses) + getRealValue(this.employmentSkillsFebContents.expenses) + getRealValue(this.employmentSkillsJanContents.expenses)) / getRealValue(this.employmentSkillsJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsAugContents.expenses = getRealValue(this.employmentSkillsAugContents.perCategory1) + getRealValue(this.employmentSkillsAugContents.perCategory2) + getRealValue(this.employmentSkillsAugContents.perCategory3) + getRealValue(this.employmentSkillsAugContents.perCategory4) + getRealValue(this.employmentSkillsAugContents.perCategory5) + getRealValue(this.employmentSkillsAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsAugContents.budgetUsage = (((getRealValue(this.employmentSkillsAugContents.expenses) + getRealValue(this.employmentSkillsJulContents.expenses) + getRealValue(this.employmentSkillsJunContents.expenses) + getRealValue(this.employmentSkillsMayContents.expenses) + getRealValue(this.employmentSkillsAprContents.expenses) + getRealValue(this.employmentSkillsMarContents.expenses) + getRealValue(this.employmentSkillsFebContents.expenses) + getRealValue(this.employmentSkillsJanContents.expenses)) / getRealValue(this.employmentSkillsAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsSepContents.expenses = getRealValue(this.employmentSkillsSepContents.perCategory1) + getRealValue(this.employmentSkillsSepContents.perCategory2) + getRealValue(this.employmentSkillsSepContents.perCategory3) + getRealValue(this.employmentSkillsSepContents.perCategory4) + getRealValue(this.employmentSkillsSepContents.perCategory5) + getRealValue(this.employmentSkillsSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsSepContents.budgetUsage = (((getRealValue(this.employmentSkillsSepContents.expenses) + getRealValue(this.employmentSkillsAugContents.expenses) + getRealValue(this.employmentSkillsJulContents.expenses) + getRealValue(this.employmentSkillsJunContents.expenses) + getRealValue(this.employmentSkillsMayContents.expenses) + getRealValue(this.employmentSkillsAprContents.expenses) + getRealValue(this.employmentSkillsMarContents.expenses) + getRealValue(this.employmentSkillsFebContents.expenses) + getRealValue(this.employmentSkillsJanContents.expenses)) / getRealValue(this.employmentSkillsSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsOctContents.expenses = getRealValue(this.employmentSkillsOctContents.perCategory1) + getRealValue(this.employmentSkillsOctContents.perCategory2) + getRealValue(this.employmentSkillsOctContents.perCategory3) + getRealValue(this.employmentSkillsOctContents.perCategory4) + getRealValue(this.employmentSkillsOctContents.perCategory5) + getRealValue(this.employmentSkillsOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsOctContents.budgetUsage = (((getRealValue(this.employmentSkillsOctContents.expenses) + getRealValue(this.employmentSkillsSepContents.expenses) + getRealValue(this.employmentSkillsAugContents.expenses) + getRealValue(this.employmentSkillsJulContents.expenses) + getRealValue(this.employmentSkillsJunContents.expenses) + getRealValue(this.employmentSkillsMayContents.expenses) + getRealValue(this.employmentSkillsAprContents.expenses) + getRealValue(this.employmentSkillsMarContents.expenses) + getRealValue(this.employmentSkillsFebContents.expenses) + getRealValue(this.employmentSkillsJanContents.expenses)) / getRealValue(this.employmentSkillsOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsNovContents.expenses = getRealValue(this.employmentSkillsNovContents.perCategory1) + getRealValue(this.employmentSkillsNovContents.perCategory2) + getRealValue(this.employmentSkillsNovContents.perCategory3) + getRealValue(this.employmentSkillsNovContents.perCategory4) + getRealValue(this.employmentSkillsNovContents.perCategory5) + getRealValue(this.employmentSkillsNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsNovContents.budgetUsage = (((getRealValue(this.employmentSkillsNovContents.expenses) + getRealValue(this.employmentSkillsOctContents.expenses) + getRealValue(this.employmentSkillsSepContents.expenses) + getRealValue(this.employmentSkillsAugContents.expenses) + getRealValue(this.employmentSkillsJulContents.expenses) + getRealValue(this.employmentSkillsJunContents.expenses) + getRealValue(this.employmentSkillsMayContents.expenses) + getRealValue(this.employmentSkillsAprContents.expenses) + getRealValue(this.employmentSkillsMarContents.expenses) + getRealValue(this.employmentSkillsFebContents.expenses) + getRealValue(this.employmentSkillsJanContents.expenses)) / getRealValue(this.employmentSkillsNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsDecContents.expenses = getRealValue(this.employmentSkillsDecContents.perCategory1) + getRealValue(this.employmentSkillsDecContents.perCategory2) + getRealValue(this.employmentSkillsDecContents.perCategory3) + getRealValue(this.employmentSkillsDecContents.perCategory4) + getRealValue(this.employmentSkillsDecContents.perCategory5) + getRealValue(this.employmentSkillsDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.employmentSkillsDecContents.budgetUsage = (((getRealValue(this.employmentSkillsDecContents.expenses) + getRealValue(this.employmentSkillsNovContents.expenses) + getRealValue(this.employmentSkillsOctContents.expenses) + getRealValue(this.employmentSkillsSepContents.expenses) + getRealValue(this.employmentSkillsAugContents.expenses) + getRealValue(this.employmentSkillsJulContents.expenses) + getRealValue(this.employmentSkillsJunContents.expenses) + getRealValue(this.employmentSkillsMayContents.expenses) + getRealValue(this.employmentSkillsAprContents.expenses) + getRealValue(this.employmentSkillsMarContents.expenses) + getRealValue(this.employmentSkillsFebContents.expenses) + getRealValue(this.employmentSkillsJanContents.expenses)) / getRealValue(this.employmentSkillsDecContents.actualBudget))*100).toFixed(2)
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
