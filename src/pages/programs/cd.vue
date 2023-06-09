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
                                <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of collaborative initiatives</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJanContents.kpi1 == null)?'grey-2':(communityDevelopmentJanContents.kpi1 >= '0' && communityDevelopmentJanContents.kpi1 <= '127')?'red':(communityDevelopmentJanContents.kpi1 > '127' && communityDevelopmentJanContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJanContents.kpi1 > '169.3333333' && communityDevelopmentJanContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJanContents.kpi1 >= '211.6666667' && communityDevelopmentJanContents.kpi1 < '254')?'green':(communityDevelopmentJanContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi2 == null)?'grey-2':(communityDevelopmentJanContents.kpi2 >= '0' && communityDevelopmentJanContents.kpi2 <= '6.4')?'red':(communityDevelopmentJanContents.kpi2 > '6.4' && communityDevelopmentJanContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJanContents.kpi2 > '8.533333333' && communityDevelopmentJanContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJanContents.kpi2 >= '10.66666667' && communityDevelopmentJanContents.kpi2 < '12.8')?'green':(communityDevelopmentJanContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi3 == null)?'grey-2':(communityDevelopmentJanContents.kpi3 >= '0' && communityDevelopmentJanContents.kpi3 <= '5.6')?'red':(communityDevelopmentJanContents.kpi3 > '5.6' && communityDevelopmentJanContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJanContents.kpi3 > '7.466666667' && communityDevelopmentJanContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJanContents.kpi3 >= '9.333333333' && communityDevelopmentJanContents.kpi3 < '11.2')?'green':(communityDevelopmentJanContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentFebContents.kpi1 == null)?'grey-2':(communityDevelopmentFebContents.kpi1 >= '0' && communityDevelopmentFebContents.kpi1 <= '127')?'red':(communityDevelopmentFebContents.kpi1 > '127' && communityDevelopmentFebContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentFebContents.kpi1 > '169.3333333' && communityDevelopmentFebContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentFebContents.kpi1 >= '211.6666667' && communityDevelopmentFebContents.kpi1 < '254')?'green':(communityDevelopmentFebContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi2 == null)?'grey-2':(communityDevelopmentFebContents.kpi2 >= '0' && communityDevelopmentFebContents.kpi2 <= '6.4')?'red':(communityDevelopmentFebContents.kpi2 > '6.4' && communityDevelopmentFebContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentFebContents.kpi2 > '8.533333333' && communityDevelopmentFebContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentFebContents.kpi2 >= '10.66666667' && communityDevelopmentFebContents.kpi2 < '12.8')?'green':(communityDevelopmentFebContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi3 == null)?'grey-2':(communityDevelopmentFebContents.kpi3 >= '0' && communityDevelopmentFebContents.kpi3 <= '5.6')?'red':(communityDevelopmentFebContents.kpi3 > '5.6' && communityDevelopmentFebContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentFebContents.kpi3 > '7.466666667' && communityDevelopmentFebContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentFebContents.kpi3 >= '9.333333333' && communityDevelopmentFebContents.kpi3 < '11.2')?'green':(communityDevelopmentFebContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMarContents.kpi1 == null)?'grey-2':(communityDevelopmentMarContents.kpi1 >= '0' && communityDevelopmentMarContents.kpi1 <= '127')?'red':(communityDevelopmentMarContents.kpi1 > '127' && communityDevelopmentMarContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMarContents.kpi1 > '169.3333333' && communityDevelopmentMarContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMarContents.kpi1 >= '211.6666667' && communityDevelopmentMarContents.kpi1 < '254')?'green':(communityDevelopmentMarContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi2 == null)?'grey-2':(communityDevelopmentMarContents.kpi2 >= '0' && communityDevelopmentMarContents.kpi2 <= '6.4')?'red':(communityDevelopmentMarContents.kpi2 > '6.4' && communityDevelopmentMarContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMarContents.kpi2 > '8.533333333' && communityDevelopmentMarContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMarContents.kpi2 >= '10.66666667' && communityDevelopmentMarContents.kpi2 < '12.8')?'green':(communityDevelopmentMarContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi3 == null)?'grey-2':(communityDevelopmentMarContents.kpi3 >= '0' && communityDevelopmentMarContents.kpi3 <= '5.6')?'red':(communityDevelopmentMarContents.kpi3 > '5.6' && communityDevelopmentMarContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMarContents.kpi3 > '7.466666667' && communityDevelopmentMarContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMarContents.kpi3 >= '9.333333333' && communityDevelopmentMarContents.kpi3 < '11.2')?'green':(communityDevelopmentMarContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAprContents.kpi1 == null)?'grey-2':(communityDevelopmentAprContents.kpi1 >= '0' && communityDevelopmentAprContents.kpi1 <= '127')?'red':(communityDevelopmentAprContents.kpi1 > '127' && communityDevelopmentAprContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAprContents.kpi1 > '169.3333333' && communityDevelopmentAprContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAprContents.kpi1 >= '211.6666667' && communityDevelopmentAprContents.kpi1 < '254')?'green':(communityDevelopmentAprContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi2 == null)?'grey-2':(communityDevelopmentAprContents.kpi2 >= '0' && communityDevelopmentAprContents.kpi2 <= '6.4')?'red':(communityDevelopmentAprContents.kpi2 > '6.4' && communityDevelopmentAprContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAprContents.kpi2 > '8.533333333' && communityDevelopmentAprContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAprContents.kpi2 >= '10.66666667' && communityDevelopmentAprContents.kpi2 < '12.8')?'green':(communityDevelopmentAprContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi3 == null)?'grey-2':(communityDevelopmentAprContents.kpi3 >= '0' && communityDevelopmentAprContents.kpi3 <= '5.6')?'red':(communityDevelopmentAprContents.kpi3 > '5.6' && communityDevelopmentAprContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAprContents.kpi3 > '7.466666667' && communityDevelopmentAprContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAprContents.kpi3 >= '9.333333333' && communityDevelopmentAprContents.kpi3 < '11.2')?'green':(communityDevelopmentAprContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMayContents.kpi1 == null)?'grey-2':(communityDevelopmentMayContents.kpi1 >= '0' && communityDevelopmentMayContents.kpi1 <= '127')?'red':(communityDevelopmentMayContents.kpi1 > '127' && communityDevelopmentMayContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMayContents.kpi1 > '169.3333333' && communityDevelopmentMayContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMayContents.kpi1 >= '211.6666667' && communityDevelopmentMayContents.kpi1 < '254')?'green':(communityDevelopmentMayContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi2 == null)?'grey-2':(communityDevelopmentMayContents.kpi2 >= '0' && communityDevelopmentMayContents.kpi2 <= '6.4')?'red':(communityDevelopmentMayContents.kpi2 > '6.4' && communityDevelopmentMayContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMayContents.kpi2 > '8.533333333' && communityDevelopmentMayContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMayContents.kpi2 >= '10.66666667' && communityDevelopmentMayContents.kpi2 < '12.8')?'green':(communityDevelopmentMayContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi3 == null)?'grey-2':(communityDevelopmentMayContents.kpi3 >= '0' && communityDevelopmentMayContents.kpi3 <= '5.6')?'red':(communityDevelopmentMayContents.kpi3 > '5.6' && communityDevelopmentMayContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMayContents.kpi3 > '7.466666667' && communityDevelopmentMayContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMayContents.kpi3 >= '9.333333333' && communityDevelopmentMayContents.kpi3 < '11.2')?'green':(communityDevelopmentMayContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJunContents.kpi1 == null)?'grey-2':(communityDevelopmentJunContents.kpi1 >= '0' && communityDevelopmentJunContents.kpi1 <= '127')?'red':(communityDevelopmentJunContents.kpi1 > '127' && communityDevelopmentJunContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJunContents.kpi1 > '169.3333333' && communityDevelopmentJunContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJunContents.kpi1 >= '211.6666667' && communityDevelopmentJunContents.kpi1 < '254')?'green':(communityDevelopmentJunContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi2 == null)?'grey-2':(communityDevelopmentJunContents.kpi2 >= '0' && communityDevelopmentJunContents.kpi2 <= '6.4')?'red':(communityDevelopmentJunContents.kpi2 > '6.4' && communityDevelopmentJunContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJunContents.kpi2 > '8.533333333' && communityDevelopmentJunContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJunContents.kpi2 >= '10.66666667' && communityDevelopmentJunContents.kpi2 < '12.8')?'green':(communityDevelopmentJunContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi3 == null)?'grey-2':(communityDevelopmentJunContents.kpi3 >= '0' && communityDevelopmentJunContents.kpi3 <= '5.6')?'red':(communityDevelopmentJunContents.kpi3 > '5.6' && communityDevelopmentJunContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJunContents.kpi3 > '7.466666667' && communityDevelopmentJunContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJunContents.kpi3 >= '9.333333333' && communityDevelopmentJunContents.kpi3 < '11.2')?'green':(communityDevelopmentJunContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJulContents.kpi1 == null)?'grey-2':(communityDevelopmentJulContents.kpi1 >= '0' && communityDevelopmentJulContents.kpi1 <= '127')?'red':(communityDevelopmentJulContents.kpi1 > '127' && communityDevelopmentJulContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJulContents.kpi1 > '169.3333333' && communityDevelopmentJulContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJulContents.kpi1 >= '211.6666667' && communityDevelopmentJulContents.kpi1 < '254')?'green':(communityDevelopmentJulContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi2 == null)?'grey-2':(communityDevelopmentJulContents.kpi2 >= '0' && communityDevelopmentJulContents.kpi2 <= '6.4')?'red':(communityDevelopmentJulContents.kpi2 > '6.4' && communityDevelopmentJulContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJulContents.kpi2 > '8.533333333' && communityDevelopmentJulContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJulContents.kpi2 >= '10.66666667' && communityDevelopmentJulContents.kpi2 < '12.8')?'green':(communityDevelopmentJulContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi3 == null)?'grey-2':(communityDevelopmentJulContents.kpi3 >= '0' && communityDevelopmentJulContents.kpi3 <= '5.6')?'red':(communityDevelopmentJulContents.kpi3 > '5.6' && communityDevelopmentJulContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJulContents.kpi3 > '7.466666667' && communityDevelopmentJulContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJulContents.kpi3 >= '9.333333333' && communityDevelopmentJulContents.kpi3 < '11.2')?'green':(communityDevelopmentJulContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAugContents.kpi1 == null)?'grey-2':(communityDevelopmentAugContents.kpi1 >= '0' && communityDevelopmentAugContents.kpi1 <= '127')?'red':(communityDevelopmentAugContents.kpi1 > '127' && communityDevelopmentAugContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAugContents.kpi1 > '169.3333333' && communityDevelopmentAugContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAugContents.kpi1 >= '211.6666667' && communityDevelopmentAugContents.kpi1 < '254')?'green':(communityDevelopmentAugContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi2 == null)?'grey-2':(communityDevelopmentAugContents.kpi2 >= '0' && communityDevelopmentAugContents.kpi2 <= '6.4')?'red':(communityDevelopmentAugContents.kpi2 > '6.4' && communityDevelopmentAugContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAugContents.kpi2 > '8.533333333' && communityDevelopmentAugContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAugContents.kpi2 >= '10.66666667' && communityDevelopmentAugContents.kpi2 < '12.8')?'green':(communityDevelopmentAugContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi3 == null)?'grey-2':(communityDevelopmentAugContents.kpi3 >= '0' && communityDevelopmentAugContents.kpi3 <= '5.6')?'red':(communityDevelopmentAugContents.kpi3 > '5.6' && communityDevelopmentAugContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAugContents.kpi3 > '7.466666667' && communityDevelopmentAugContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAugContents.kpi3 >= '9.333333333' && communityDevelopmentAugContents.kpi3 < '11.2')?'green':(communityDevelopmentAugContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentSepContents.kpi1 == null)?'grey-2':(communityDevelopmentSepContents.kpi1 >= '0' && communityDevelopmentSepContents.kpi1 <= '127')?'red':(communityDevelopmentSepContents.kpi1 > '127' && communityDevelopmentSepContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentSepContents.kpi1 > '169.3333333' && communityDevelopmentSepContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentSepContents.kpi1 >= '211.6666667' && communityDevelopmentSepContents.kpi1 < '254')?'green':(communityDevelopmentSepContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi2 == null)?'grey-2':(communityDevelopmentSepContents.kpi2 >= '0' && communityDevelopmentSepContents.kpi2 <= '6.4')?'red':(communityDevelopmentSepContents.kpi2 > '6.4' && communityDevelopmentSepContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentSepContents.kpi2 > '8.533333333' && communityDevelopmentSepContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentSepContents.kpi2 >= '10.66666667' && communityDevelopmentSepContents.kpi2 < '12.8')?'green':(communityDevelopmentSepContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi3 == null)?'grey-2':(communityDevelopmentSepContents.kpi3 >= '0' && communityDevelopmentSepContents.kpi3 <= '5.6')?'red':(communityDevelopmentSepContents.kpi3 > '5.6' && communityDevelopmentSepContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentSepContents.kpi3 > '7.466666667' && communityDevelopmentSepContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentSepContents.kpi3 >= '9.333333333' && communityDevelopmentSepContents.kpi3 < '11.2')?'green':(communityDevelopmentSepContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentOctContents.kpi1 == null)?'grey-2':(communityDevelopmentOctContents.kpi1 >= '0' && communityDevelopmentOctContents.kpi1 <= '127')?'red':(communityDevelopmentOctContents.kpi1 > '127' && communityDevelopmentOctContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentOctContents.kpi1 > '169.3333333' && communityDevelopmentOctContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentOctContents.kpi1 >= '211.6666667' && communityDevelopmentOctContents.kpi1 < '254')?'green':(communityDevelopmentOctContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi2 == null)?'grey-2':(communityDevelopmentOctContents.kpi2 >= '0' && communityDevelopmentOctContents.kpi2 <= '6.4')?'red':(communityDevelopmentOctContents.kpi2 > '6.4' && communityDevelopmentOctContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentOctContents.kpi2 > '8.533333333' && communityDevelopmentOctContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentOctContents.kpi2 >= '10.66666667' && communityDevelopmentOctContents.kpi2 < '12.8')?'green':(communityDevelopmentOctContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi3 == null)?'grey-2':(communityDevelopmentOctContents.kpi3 >= '0' && communityDevelopmentOctContents.kpi3 <= '5.6')?'red':(communityDevelopmentOctContents.kpi3 > '5.6' && communityDevelopmentOctContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentOctContents.kpi3 > '7.466666667' && communityDevelopmentOctContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentOctContents.kpi3 >= '9.333333333' && communityDevelopmentOctContents.kpi3 < '11.2')?'green':(communityDevelopmentOctContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentNovContents.kpi1 == null)?'grey-2':(communityDevelopmentNovContents.kpi1 >= '0' && communityDevelopmentNovContents.kpi1 <= '127')?'red':(communityDevelopmentNovContents.kpi1 > '127' && communityDevelopmentNovContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentNovContents.kpi1 > '169.3333333' && communityDevelopmentNovContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentNovContents.kpi1 >= '211.6666667' && communityDevelopmentNovContents.kpi1 < '254')?'green':(communityDevelopmentNovContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi2 == null)?'grey-2':(communityDevelopmentNovContents.kpi2 >= '0' && communityDevelopmentNovContents.kpi2 <= '6.4')?'red':(communityDevelopmentNovContents.kpi2 > '6.4' && communityDevelopmentNovContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentNovContents.kpi2 > '8.533333333' && communityDevelopmentNovContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentNovContents.kpi2 >= '10.66666667' && communityDevelopmentNovContents.kpi2 < '12.8')?'green':(communityDevelopmentNovContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi3 == null)?'grey-2':(communityDevelopmentNovContents.kpi3 >= '0' && communityDevelopmentNovContents.kpi3 <= '5.6')?'red':(communityDevelopmentNovContents.kpi3 > '5.6' && communityDevelopmentNovContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentNovContents.kpi3 > '7.466666667' && communityDevelopmentNovContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentNovContents.kpi3 >= '9.333333333' && communityDevelopmentNovContents.kpi3 < '11.2')?'green':(communityDevelopmentNovContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentDecContents.kpi1 == null)?'grey-2':(communityDevelopmentDecContents.kpi1 >= '0' && communityDevelopmentDecContents.kpi1 <= '127')?'red':(communityDevelopmentDecContents.kpi1 > '127' && communityDevelopmentDecContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentDecContents.kpi1 > '169.3333333' && communityDevelopmentDecContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentDecContents.kpi1 >= '211.6666667' && communityDevelopmentDecContents.kpi1 < '254')?'green':(communityDevelopmentDecContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi2 == null)?'grey-2':(communityDevelopmentDecContents.kpi2 >= '0' && communityDevelopmentDecContents.kpi2 <= '6.4')?'red':(communityDevelopmentDecContents.kpi2 > '6.4' && communityDevelopmentDecContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentDecContents.kpi2 > '8.533333333' && communityDevelopmentDecContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentDecContents.kpi2 >= '10.66666667' && communityDevelopmentDecContents.kpi2 < '12.8')?'green':(communityDevelopmentDecContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi3 == null)?'grey-2':(communityDevelopmentDecContents.kpi3 >= '0' && communityDevelopmentDecContents.kpi3 <= '5.6')?'red':(communityDevelopmentDecContents.kpi3 > '5.6' && communityDevelopmentDecContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentDecContents.kpi3 > '7.466666667' && communityDevelopmentDecContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentDecContents.kpi3 >= '9.333333333' && communityDevelopmentDecContents.kpi3 < '11.2')?'green':(communityDevelopmentDecContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                                <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of collaborative initiatives</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJanContents.kpi1 == null)?'grey-2':(communityDevelopmentJanContents.kpi1 >= '0' && communityDevelopmentJanContents.kpi1 <= '127')?'red':(communityDevelopmentJanContents.kpi1 > '127' && communityDevelopmentJanContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJanContents.kpi1 > '169.3333333' && communityDevelopmentJanContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJanContents.kpi1 >= '211.6666667' && communityDevelopmentJanContents.kpi1 < '254')?'green':(communityDevelopmentJanContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi2 == null)?'grey-2':(communityDevelopmentJanContents.kpi2 >= '0' && communityDevelopmentJanContents.kpi2 <= '6.4')?'red':(communityDevelopmentJanContents.kpi2 > '6.4' && communityDevelopmentJanContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJanContents.kpi2 > '8.533333333' && communityDevelopmentJanContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJanContents.kpi2 >= '10.66666667' && communityDevelopmentJanContents.kpi2 < '12.8')?'green':(communityDevelopmentJanContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi3 == null)?'grey-2':(communityDevelopmentJanContents.kpi3 >= '0' && communityDevelopmentJanContents.kpi3 <= '5.6')?'red':(communityDevelopmentJanContents.kpi3 > '5.6' && communityDevelopmentJanContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJanContents.kpi3 > '7.466666667' && communityDevelopmentJanContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJanContents.kpi3 >= '9.333333333' && communityDevelopmentJanContents.kpi3 < '11.2')?'green':(communityDevelopmentJanContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentFebContents.kpi1 == null)?'grey-2':(communityDevelopmentFebContents.kpi1 >= '0' && communityDevelopmentFebContents.kpi1 <= '127')?'red':(communityDevelopmentFebContents.kpi1 > '127' && communityDevelopmentFebContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentFebContents.kpi1 > '169.3333333' && communityDevelopmentFebContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentFebContents.kpi1 >= '211.6666667' && communityDevelopmentFebContents.kpi1 < '254')?'green':(communityDevelopmentFebContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi2 == null)?'grey-2':(communityDevelopmentFebContents.kpi2 >= '0' && communityDevelopmentFebContents.kpi2 <= '6.4')?'red':(communityDevelopmentFebContents.kpi2 > '6.4' && communityDevelopmentFebContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentFebContents.kpi2 > '8.533333333' && communityDevelopmentFebContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentFebContents.kpi2 >= '10.66666667' && communityDevelopmentFebContents.kpi2 < '12.8')?'green':(communityDevelopmentFebContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi3 == null)?'grey-2':(communityDevelopmentFebContents.kpi3 >= '0' && communityDevelopmentFebContents.kpi3 <= '5.6')?'red':(communityDevelopmentFebContents.kpi3 > '5.6' && communityDevelopmentFebContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentFebContents.kpi3 > '7.466666667' && communityDevelopmentFebContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentFebContents.kpi3 >= '9.333333333' && communityDevelopmentFebContents.kpi3 < '11.2')?'green':(communityDevelopmentFebContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMarContents.kpi1 == null)?'grey-2':(communityDevelopmentMarContents.kpi1 >= '0' && communityDevelopmentMarContents.kpi1 <= '127')?'red':(communityDevelopmentMarContents.kpi1 > '127' && communityDevelopmentMarContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMarContents.kpi1 > '169.3333333' && communityDevelopmentMarContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMarContents.kpi1 >= '211.6666667' && communityDevelopmentMarContents.kpi1 < '254')?'green':(communityDevelopmentMarContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi2 == null)?'grey-2':(communityDevelopmentMarContents.kpi2 >= '0' && communityDevelopmentMarContents.kpi2 <= '6.4')?'red':(communityDevelopmentMarContents.kpi2 > '6.4' && communityDevelopmentMarContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMarContents.kpi2 > '8.533333333' && communityDevelopmentMarContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMarContents.kpi2 >= '10.66666667' && communityDevelopmentMarContents.kpi2 < '12.8')?'green':(communityDevelopmentMarContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi3 == null)?'grey-2':(communityDevelopmentMarContents.kpi3 >= '0' && communityDevelopmentMarContents.kpi3 <= '5.6')?'red':(communityDevelopmentMarContents.kpi3 > '5.6' && communityDevelopmentMarContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMarContents.kpi3 > '7.466666667' && communityDevelopmentMarContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMarContents.kpi3 >= '9.333333333' && communityDevelopmentMarContents.kpi3 < '11.2')?'green':(communityDevelopmentMarContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAprContents.kpi1 == null)?'grey-2':(communityDevelopmentAprContents.kpi1 >= '0' && communityDevelopmentAprContents.kpi1 <= '127')?'red':(communityDevelopmentAprContents.kpi1 > '127' && communityDevelopmentAprContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAprContents.kpi1 > '169.3333333' && communityDevelopmentAprContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAprContents.kpi1 >= '211.6666667' && communityDevelopmentAprContents.kpi1 < '254')?'green':(communityDevelopmentAprContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi2 == null)?'grey-2':(communityDevelopmentAprContents.kpi2 >= '0' && communityDevelopmentAprContents.kpi2 <= '6.4')?'red':(communityDevelopmentAprContents.kpi2 > '6.4' && communityDevelopmentAprContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAprContents.kpi2 > '8.533333333' && communityDevelopmentAprContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAprContents.kpi2 >= '10.66666667' && communityDevelopmentAprContents.kpi2 < '12.8')?'green':(communityDevelopmentAprContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi3 == null)?'grey-2':(communityDevelopmentAprContents.kpi3 >= '0' && communityDevelopmentAprContents.kpi3 <= '5.6')?'red':(communityDevelopmentAprContents.kpi3 > '5.6' && communityDevelopmentAprContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAprContents.kpi3 > '7.466666667' && communityDevelopmentAprContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAprContents.kpi3 >= '9.333333333' && communityDevelopmentAprContents.kpi3 < '11.2')?'green':(communityDevelopmentAprContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMayContents.kpi1 == null)?'grey-2':(communityDevelopmentMayContents.kpi1 >= '0' && communityDevelopmentMayContents.kpi1 <= '127')?'red':(communityDevelopmentMayContents.kpi1 > '127' && communityDevelopmentMayContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMayContents.kpi1 > '169.3333333' && communityDevelopmentMayContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMayContents.kpi1 >= '211.6666667' && communityDevelopmentMayContents.kpi1 < '254')?'green':(communityDevelopmentMayContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi2 == null)?'grey-2':(communityDevelopmentMayContents.kpi2 >= '0' && communityDevelopmentMayContents.kpi2 <= '6.4')?'red':(communityDevelopmentMayContents.kpi2 > '6.4' && communityDevelopmentMayContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMayContents.kpi2 > '8.533333333' && communityDevelopmentMayContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMayContents.kpi2 >= '10.66666667' && communityDevelopmentMayContents.kpi2 < '12.8')?'green':(communityDevelopmentMayContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi3 == null)?'grey-2':(communityDevelopmentMayContents.kpi3 >= '0' && communityDevelopmentMayContents.kpi3 <= '5.6')?'red':(communityDevelopmentMayContents.kpi3 > '5.6' && communityDevelopmentMayContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMayContents.kpi3 > '7.466666667' && communityDevelopmentMayContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMayContents.kpi3 >= '9.333333333' && communityDevelopmentMayContents.kpi3 < '11.2')?'green':(communityDevelopmentMayContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJunContents.kpi1 == null)?'grey-2':(communityDevelopmentJunContents.kpi1 >= '0' && communityDevelopmentJunContents.kpi1 <= '127')?'red':(communityDevelopmentJunContents.kpi1 > '127' && communityDevelopmentJunContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJunContents.kpi1 > '169.3333333' && communityDevelopmentJunContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJunContents.kpi1 >= '211.6666667' && communityDevelopmentJunContents.kpi1 < '254')?'green':(communityDevelopmentJunContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi2 == null)?'grey-2':(communityDevelopmentJunContents.kpi2 >= '0' && communityDevelopmentJunContents.kpi2 <= '6.4')?'red':(communityDevelopmentJunContents.kpi2 > '6.4' && communityDevelopmentJunContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJunContents.kpi2 > '8.533333333' && communityDevelopmentJunContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJunContents.kpi2 >= '10.66666667' && communityDevelopmentJunContents.kpi2 < '12.8')?'green':(communityDevelopmentJunContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi3 == null)?'grey-2':(communityDevelopmentJunContents.kpi3 >= '0' && communityDevelopmentJunContents.kpi3 <= '5.6')?'red':(communityDevelopmentJunContents.kpi3 > '5.6' && communityDevelopmentJunContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJunContents.kpi3 > '7.466666667' && communityDevelopmentJunContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJunContents.kpi3 >= '9.333333333' && communityDevelopmentJunContents.kpi3 < '11.2')?'green':(communityDevelopmentJunContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJulContents.kpi1 == null)?'grey-2':(communityDevelopmentJulContents.kpi1 >= '0' && communityDevelopmentJulContents.kpi1 <= '127')?'red':(communityDevelopmentJulContents.kpi1 > '127' && communityDevelopmentJulContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJulContents.kpi1 > '169.3333333' && communityDevelopmentJulContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJulContents.kpi1 >= '211.6666667' && communityDevelopmentJulContents.kpi1 < '254')?'green':(communityDevelopmentJulContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi2 == null)?'grey-2':(communityDevelopmentJulContents.kpi2 >= '0' && communityDevelopmentJulContents.kpi2 <= '6.4')?'red':(communityDevelopmentJulContents.kpi2 > '6.4' && communityDevelopmentJulContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJulContents.kpi2 > '8.533333333' && communityDevelopmentJulContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJulContents.kpi2 >= '10.66666667' && communityDevelopmentJulContents.kpi2 < '12.8')?'green':(communityDevelopmentJulContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi3 == null)?'grey-2':(communityDevelopmentJulContents.kpi3 >= '0' && communityDevelopmentJulContents.kpi3 <= '5.6')?'red':(communityDevelopmentJulContents.kpi3 > '5.6' && communityDevelopmentJulContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJulContents.kpi3 > '7.466666667' && communityDevelopmentJulContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJulContents.kpi3 >= '9.333333333' && communityDevelopmentJulContents.kpi3 < '11.2')?'green':(communityDevelopmentJulContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAugContents.kpi1 == null)?'grey-2':(communityDevelopmentAugContents.kpi1 >= '0' && communityDevelopmentAugContents.kpi1 <= '127')?'red':(communityDevelopmentAugContents.kpi1 > '127' && communityDevelopmentAugContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAugContents.kpi1 > '169.3333333' && communityDevelopmentAugContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAugContents.kpi1 >= '211.6666667' && communityDevelopmentAugContents.kpi1 < '254')?'green':(communityDevelopmentAugContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi2 == null)?'grey-2':(communityDevelopmentAugContents.kpi2 >= '0' && communityDevelopmentAugContents.kpi2 <= '6.4')?'red':(communityDevelopmentAugContents.kpi2 > '6.4' && communityDevelopmentAugContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAugContents.kpi2 > '8.533333333' && communityDevelopmentAugContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAugContents.kpi2 >= '10.66666667' && communityDevelopmentAugContents.kpi2 < '12.8')?'green':(communityDevelopmentAugContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi3 == null)?'grey-2':(communityDevelopmentAugContents.kpi3 >= '0' && communityDevelopmentAugContents.kpi3 <= '5.6')?'red':(communityDevelopmentAugContents.kpi3 > '5.6' && communityDevelopmentAugContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAugContents.kpi3 > '7.466666667' && communityDevelopmentAugContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAugContents.kpi3 >= '9.333333333' && communityDevelopmentAugContents.kpi3 < '11.2')?'green':(communityDevelopmentAugContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentSepContents.kpi1 == null)?'grey-2':(communityDevelopmentSepContents.kpi1 >= '0' && communityDevelopmentSepContents.kpi1 <= '127')?'red':(communityDevelopmentSepContents.kpi1 > '127' && communityDevelopmentSepContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentSepContents.kpi1 > '169.3333333' && communityDevelopmentSepContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentSepContents.kpi1 >= '211.6666667' && communityDevelopmentSepContents.kpi1 < '254')?'green':(communityDevelopmentSepContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi2 == null)?'grey-2':(communityDevelopmentSepContents.kpi2 >= '0' && communityDevelopmentSepContents.kpi2 <= '6.4')?'red':(communityDevelopmentSepContents.kpi2 > '6.4' && communityDevelopmentSepContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentSepContents.kpi2 > '8.533333333' && communityDevelopmentSepContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentSepContents.kpi2 >= '10.66666667' && communityDevelopmentSepContents.kpi2 < '12.8')?'green':(communityDevelopmentSepContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi3 == null)?'grey-2':(communityDevelopmentSepContents.kpi3 >= '0' && communityDevelopmentSepContents.kpi3 <= '5.6')?'red':(communityDevelopmentSepContents.kpi3 > '5.6' && communityDevelopmentSepContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentSepContents.kpi3 > '7.466666667' && communityDevelopmentSepContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentSepContents.kpi3 >= '9.333333333' && communityDevelopmentSepContents.kpi3 < '11.2')?'green':(communityDevelopmentSepContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentOctContents.kpi1 == null)?'grey-2':(communityDevelopmentOctContents.kpi1 >= '0' && communityDevelopmentOctContents.kpi1 <= '127')?'red':(communityDevelopmentOctContents.kpi1 > '127' && communityDevelopmentOctContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentOctContents.kpi1 > '169.3333333' && communityDevelopmentOctContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentOctContents.kpi1 >= '211.6666667' && communityDevelopmentOctContents.kpi1 < '254')?'green':(communityDevelopmentOctContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi2 == null)?'grey-2':(communityDevelopmentOctContents.kpi2 >= '0' && communityDevelopmentOctContents.kpi2 <= '6.4')?'red':(communityDevelopmentOctContents.kpi2 > '6.4' && communityDevelopmentOctContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentOctContents.kpi2 > '8.533333333' && communityDevelopmentOctContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentOctContents.kpi2 >= '10.66666667' && communityDevelopmentOctContents.kpi2 < '12.8')?'green':(communityDevelopmentOctContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi3 == null)?'grey-2':(communityDevelopmentOctContents.kpi3 >= '0' && communityDevelopmentOctContents.kpi3 <= '5.6')?'red':(communityDevelopmentOctContents.kpi3 > '5.6' && communityDevelopmentOctContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentOctContents.kpi3 > '7.466666667' && communityDevelopmentOctContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentOctContents.kpi3 >= '9.333333333' && communityDevelopmentOctContents.kpi3 < '11.2')?'green':(communityDevelopmentOctContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentNovContents.kpi1 == null)?'grey-2':(communityDevelopmentNovContents.kpi1 >= '0' && communityDevelopmentNovContents.kpi1 <= '127')?'red':(communityDevelopmentNovContents.kpi1 > '127' && communityDevelopmentNovContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentNovContents.kpi1 > '169.3333333' && communityDevelopmentNovContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentNovContents.kpi1 >= '211.6666667' && communityDevelopmentNovContents.kpi1 < '254')?'green':(communityDevelopmentNovContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi2 == null)?'grey-2':(communityDevelopmentNovContents.kpi2 >= '0' && communityDevelopmentNovContents.kpi2 <= '6.4')?'red':(communityDevelopmentNovContents.kpi2 > '6.4' && communityDevelopmentNovContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentNovContents.kpi2 > '8.533333333' && communityDevelopmentNovContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentNovContents.kpi2 >= '10.66666667' && communityDevelopmentNovContents.kpi2 < '12.8')?'green':(communityDevelopmentNovContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi3 == null)?'grey-2':(communityDevelopmentNovContents.kpi3 >= '0' && communityDevelopmentNovContents.kpi3 <= '5.6')?'red':(communityDevelopmentNovContents.kpi3 > '5.6' && communityDevelopmentNovContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentNovContents.kpi3 > '7.466666667' && communityDevelopmentNovContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentNovContents.kpi3 >= '9.333333333' && communityDevelopmentNovContents.kpi3 < '11.2')?'green':(communityDevelopmentNovContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentDecContents.kpi1 == null)?'grey-2':(communityDevelopmentDecContents.kpi1 >= '0' && communityDevelopmentDecContents.kpi1 <= '127')?'red':(communityDevelopmentDecContents.kpi1 > '127' && communityDevelopmentDecContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentDecContents.kpi1 > '169.3333333' && communityDevelopmentDecContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentDecContents.kpi1 >= '211.6666667' && communityDevelopmentDecContents.kpi1 < '254')?'green':(communityDevelopmentDecContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi2 == null)?'grey-2':(communityDevelopmentDecContents.kpi2 >= '0' && communityDevelopmentDecContents.kpi2 <= '6.4')?'red':(communityDevelopmentDecContents.kpi2 > '6.4' && communityDevelopmentDecContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentDecContents.kpi2 > '8.533333333' && communityDevelopmentDecContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentDecContents.kpi2 >= '10.66666667' && communityDevelopmentDecContents.kpi2 < '12.8')?'green':(communityDevelopmentDecContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi3 == null)?'grey-2':(communityDevelopmentDecContents.kpi3 >= '0' && communityDevelopmentDecContents.kpi3 <= '5.6')?'red':(communityDevelopmentDecContents.kpi3 > '5.6' && communityDevelopmentDecContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentDecContents.kpi3 > '7.466666667' && communityDevelopmentDecContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentDecContents.kpi3 >= '9.333333333' && communityDevelopmentDecContents.kpi3 < '11.2')?'green':(communityDevelopmentDecContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                                <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of collaborative initiatives</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJanContents.kpi1 == null)?'grey-2':(communityDevelopmentJanContents.kpi1 >= '0' && communityDevelopmentJanContents.kpi1 <= '127')?'red':(communityDevelopmentJanContents.kpi1 > '127' && communityDevelopmentJanContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJanContents.kpi1 > '169.3333333' && communityDevelopmentJanContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJanContents.kpi1 >= '211.6666667' && communityDevelopmentJanContents.kpi1 < '254')?'green':(communityDevelopmentJanContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi2 == null)?'grey-2':(communityDevelopmentJanContents.kpi2 >= '0' && communityDevelopmentJanContents.kpi2 <= '6.4')?'red':(communityDevelopmentJanContents.kpi2 > '6.4' && communityDevelopmentJanContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJanContents.kpi2 > '8.533333333' && communityDevelopmentJanContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJanContents.kpi2 >= '10.66666667' && communityDevelopmentJanContents.kpi2 < '12.8')?'green':(communityDevelopmentJanContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi3 == null)?'grey-2':(communityDevelopmentJanContents.kpi3 >= '0' && communityDevelopmentJanContents.kpi3 <= '5.6')?'red':(communityDevelopmentJanContents.kpi3 > '5.6' && communityDevelopmentJanContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJanContents.kpi3 > '7.466666667' && communityDevelopmentJanContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJanContents.kpi3 >= '9.333333333' && communityDevelopmentJanContents.kpi3 < '11.2')?'green':(communityDevelopmentJanContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentFebContents.kpi1 == null)?'grey-2':(communityDevelopmentFebContents.kpi1 >= '0' && communityDevelopmentFebContents.kpi1 <= '127')?'red':(communityDevelopmentFebContents.kpi1 > '127' && communityDevelopmentFebContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentFebContents.kpi1 > '169.3333333' && communityDevelopmentFebContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentFebContents.kpi1 >= '211.6666667' && communityDevelopmentFebContents.kpi1 < '254')?'green':(communityDevelopmentFebContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi2 == null)?'grey-2':(communityDevelopmentFebContents.kpi2 >= '0' && communityDevelopmentFebContents.kpi2 <= '6.4')?'red':(communityDevelopmentFebContents.kpi2 > '6.4' && communityDevelopmentFebContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentFebContents.kpi2 > '8.533333333' && communityDevelopmentFebContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentFebContents.kpi2 >= '10.66666667' && communityDevelopmentFebContents.kpi2 < '12.8')?'green':(communityDevelopmentFebContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi3 == null)?'grey-2':(communityDevelopmentFebContents.kpi3 >= '0' && communityDevelopmentFebContents.kpi3 <= '5.6')?'red':(communityDevelopmentFebContents.kpi3 > '5.6' && communityDevelopmentFebContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentFebContents.kpi3 > '7.466666667' && communityDevelopmentFebContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentFebContents.kpi3 >= '9.333333333' && communityDevelopmentFebContents.kpi3 < '11.2')?'green':(communityDevelopmentFebContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMarContents.kpi1 == null)?'grey-2':(communityDevelopmentMarContents.kpi1 >= '0' && communityDevelopmentMarContents.kpi1 <= '127')?'red':(communityDevelopmentMarContents.kpi1 > '127' && communityDevelopmentMarContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMarContents.kpi1 > '169.3333333' && communityDevelopmentMarContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMarContents.kpi1 >= '211.6666667' && communityDevelopmentMarContents.kpi1 < '254')?'green':(communityDevelopmentMarContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi2 == null)?'grey-2':(communityDevelopmentMarContents.kpi2 >= '0' && communityDevelopmentMarContents.kpi2 <= '6.4')?'red':(communityDevelopmentMarContents.kpi2 > '6.4' && communityDevelopmentMarContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMarContents.kpi2 > '8.533333333' && communityDevelopmentMarContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMarContents.kpi2 >= '10.66666667' && communityDevelopmentMarContents.kpi2 < '12.8')?'green':(communityDevelopmentMarContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi3 == null)?'grey-2':(communityDevelopmentMarContents.kpi3 >= '0' && communityDevelopmentMarContents.kpi3 <= '5.6')?'red':(communityDevelopmentMarContents.kpi3 > '5.6' && communityDevelopmentMarContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMarContents.kpi3 > '7.466666667' && communityDevelopmentMarContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMarContents.kpi3 >= '9.333333333' && communityDevelopmentMarContents.kpi3 < '11.2')?'green':(communityDevelopmentMarContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAprContents.kpi1 == null)?'grey-2':(communityDevelopmentAprContents.kpi1 >= '0' && communityDevelopmentAprContents.kpi1 <= '127')?'red':(communityDevelopmentAprContents.kpi1 > '127' && communityDevelopmentAprContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAprContents.kpi1 > '169.3333333' && communityDevelopmentAprContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAprContents.kpi1 >= '211.6666667' && communityDevelopmentAprContents.kpi1 < '254')?'green':(communityDevelopmentAprContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi2 == null)?'grey-2':(communityDevelopmentAprContents.kpi2 >= '0' && communityDevelopmentAprContents.kpi2 <= '6.4')?'red':(communityDevelopmentAprContents.kpi2 > '6.4' && communityDevelopmentAprContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAprContents.kpi2 > '8.533333333' && communityDevelopmentAprContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAprContents.kpi2 >= '10.66666667' && communityDevelopmentAprContents.kpi2 < '12.8')?'green':(communityDevelopmentAprContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi3 == null)?'grey-2':(communityDevelopmentAprContents.kpi3 >= '0' && communityDevelopmentAprContents.kpi3 <= '5.6')?'red':(communityDevelopmentAprContents.kpi3 > '5.6' && communityDevelopmentAprContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAprContents.kpi3 > '7.466666667' && communityDevelopmentAprContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAprContents.kpi3 >= '9.333333333' && communityDevelopmentAprContents.kpi3 < '11.2')?'green':(communityDevelopmentAprContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMayContents.kpi1 == null)?'grey-2':(communityDevelopmentMayContents.kpi1 >= '0' && communityDevelopmentMayContents.kpi1 <= '127')?'red':(communityDevelopmentMayContents.kpi1 > '127' && communityDevelopmentMayContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMayContents.kpi1 > '169.3333333' && communityDevelopmentMayContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMayContents.kpi1 >= '211.6666667' && communityDevelopmentMayContents.kpi1 < '254')?'green':(communityDevelopmentMayContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi2 == null)?'grey-2':(communityDevelopmentMayContents.kpi2 >= '0' && communityDevelopmentMayContents.kpi2 <= '6.4')?'red':(communityDevelopmentMayContents.kpi2 > '6.4' && communityDevelopmentMayContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMayContents.kpi2 > '8.533333333' && communityDevelopmentMayContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMayContents.kpi2 >= '10.66666667' && communityDevelopmentMayContents.kpi2 < '12.8')?'green':(communityDevelopmentMayContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi3 == null)?'grey-2':(communityDevelopmentMayContents.kpi3 >= '0' && communityDevelopmentMayContents.kpi3 <= '5.6')?'red':(communityDevelopmentMayContents.kpi3 > '5.6' && communityDevelopmentMayContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMayContents.kpi3 > '7.466666667' && communityDevelopmentMayContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMayContents.kpi3 >= '9.333333333' && communityDevelopmentMayContents.kpi3 < '11.2')?'green':(communityDevelopmentMayContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJunContents.kpi1 == null)?'grey-2':(communityDevelopmentJunContents.kpi1 >= '0' && communityDevelopmentJunContents.kpi1 <= '127')?'red':(communityDevelopmentJunContents.kpi1 > '127' && communityDevelopmentJunContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJunContents.kpi1 > '169.3333333' && communityDevelopmentJunContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJunContents.kpi1 >= '211.6666667' && communityDevelopmentJunContents.kpi1 < '254')?'green':(communityDevelopmentJunContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi2 == null)?'grey-2':(communityDevelopmentJunContents.kpi2 >= '0' && communityDevelopmentJunContents.kpi2 <= '6.4')?'red':(communityDevelopmentJunContents.kpi2 > '6.4' && communityDevelopmentJunContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJunContents.kpi2 > '8.533333333' && communityDevelopmentJunContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJunContents.kpi2 >= '10.66666667' && communityDevelopmentJunContents.kpi2 < '12.8')?'green':(communityDevelopmentJunContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi3 == null)?'grey-2':(communityDevelopmentJunContents.kpi3 >= '0' && communityDevelopmentJunContents.kpi3 <= '5.6')?'red':(communityDevelopmentJunContents.kpi3 > '5.6' && communityDevelopmentJunContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJunContents.kpi3 > '7.466666667' && communityDevelopmentJunContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJunContents.kpi3 >= '9.333333333' && communityDevelopmentJunContents.kpi3 < '11.2')?'green':(communityDevelopmentJunContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJulContents.kpi1 == null)?'grey-2':(communityDevelopmentJulContents.kpi1 >= '0' && communityDevelopmentJulContents.kpi1 <= '127')?'red':(communityDevelopmentJulContents.kpi1 > '127' && communityDevelopmentJulContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJulContents.kpi1 > '169.3333333' && communityDevelopmentJulContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJulContents.kpi1 >= '211.6666667' && communityDevelopmentJulContents.kpi1 < '254')?'green':(communityDevelopmentJulContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi2 == null)?'grey-2':(communityDevelopmentJulContents.kpi2 >= '0' && communityDevelopmentJulContents.kpi2 <= '6.4')?'red':(communityDevelopmentJulContents.kpi2 > '6.4' && communityDevelopmentJulContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJulContents.kpi2 > '8.533333333' && communityDevelopmentJulContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJulContents.kpi2 >= '10.66666667' && communityDevelopmentJulContents.kpi2 < '12.8')?'green':(communityDevelopmentJulContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi3 == null)?'grey-2':(communityDevelopmentJulContents.kpi3 >= '0' && communityDevelopmentJulContents.kpi3 <= '5.6')?'red':(communityDevelopmentJulContents.kpi3 > '5.6' && communityDevelopmentJulContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJulContents.kpi3 > '7.466666667' && communityDevelopmentJulContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJulContents.kpi3 >= '9.333333333' && communityDevelopmentJulContents.kpi3 < '11.2')?'green':(communityDevelopmentJulContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAugContents.kpi1 == null)?'grey-2':(communityDevelopmentAugContents.kpi1 >= '0' && communityDevelopmentAugContents.kpi1 <= '127')?'red':(communityDevelopmentAugContents.kpi1 > '127' && communityDevelopmentAugContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAugContents.kpi1 > '169.3333333' && communityDevelopmentAugContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAugContents.kpi1 >= '211.6666667' && communityDevelopmentAugContents.kpi1 < '254')?'green':(communityDevelopmentAugContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi2 == null)?'grey-2':(communityDevelopmentAugContents.kpi2 >= '0' && communityDevelopmentAugContents.kpi2 <= '6.4')?'red':(communityDevelopmentAugContents.kpi2 > '6.4' && communityDevelopmentAugContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAugContents.kpi2 > '8.533333333' && communityDevelopmentAugContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAugContents.kpi2 >= '10.66666667' && communityDevelopmentAugContents.kpi2 < '12.8')?'green':(communityDevelopmentAugContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi3 == null)?'grey-2':(communityDevelopmentAugContents.kpi3 >= '0' && communityDevelopmentAugContents.kpi3 <= '5.6')?'red':(communityDevelopmentAugContents.kpi3 > '5.6' && communityDevelopmentAugContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAugContents.kpi3 > '7.466666667' && communityDevelopmentAugContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAugContents.kpi3 >= '9.333333333' && communityDevelopmentAugContents.kpi3 < '11.2')?'green':(communityDevelopmentAugContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentSepContents.kpi1 == null)?'grey-2':(communityDevelopmentSepContents.kpi1 >= '0' && communityDevelopmentSepContents.kpi1 <= '127')?'red':(communityDevelopmentSepContents.kpi1 > '127' && communityDevelopmentSepContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentSepContents.kpi1 > '169.3333333' && communityDevelopmentSepContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentSepContents.kpi1 >= '211.6666667' && communityDevelopmentSepContents.kpi1 < '254')?'green':(communityDevelopmentSepContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi2 == null)?'grey-2':(communityDevelopmentSepContents.kpi2 >= '0' && communityDevelopmentSepContents.kpi2 <= '6.4')?'red':(communityDevelopmentSepContents.kpi2 > '6.4' && communityDevelopmentSepContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentSepContents.kpi2 > '8.533333333' && communityDevelopmentSepContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentSepContents.kpi2 >= '10.66666667' && communityDevelopmentSepContents.kpi2 < '12.8')?'green':(communityDevelopmentSepContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi3 == null)?'grey-2':(communityDevelopmentSepContents.kpi3 >= '0' && communityDevelopmentSepContents.kpi3 <= '5.6')?'red':(communityDevelopmentSepContents.kpi3 > '5.6' && communityDevelopmentSepContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentSepContents.kpi3 > '7.466666667' && communityDevelopmentSepContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentSepContents.kpi3 >= '9.333333333' && communityDevelopmentSepContents.kpi3 < '11.2')?'green':(communityDevelopmentSepContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentOctContents.kpi1 == null)?'grey-2':(communityDevelopmentOctContents.kpi1 >= '0' && communityDevelopmentOctContents.kpi1 <= '127')?'red':(communityDevelopmentOctContents.kpi1 > '127' && communityDevelopmentOctContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentOctContents.kpi1 > '169.3333333' && communityDevelopmentOctContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentOctContents.kpi1 >= '211.6666667' && communityDevelopmentOctContents.kpi1 < '254')?'green':(communityDevelopmentOctContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi2 == null)?'grey-2':(communityDevelopmentOctContents.kpi2 >= '0' && communityDevelopmentOctContents.kpi2 <= '6.4')?'red':(communityDevelopmentOctContents.kpi2 > '6.4' && communityDevelopmentOctContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentOctContents.kpi2 > '8.533333333' && communityDevelopmentOctContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentOctContents.kpi2 >= '10.66666667' && communityDevelopmentOctContents.kpi2 < '12.8')?'green':(communityDevelopmentOctContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi3 == null)?'grey-2':(communityDevelopmentOctContents.kpi3 >= '0' && communityDevelopmentOctContents.kpi3 <= '5.6')?'red':(communityDevelopmentOctContents.kpi3 > '5.6' && communityDevelopmentOctContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentOctContents.kpi3 > '7.466666667' && communityDevelopmentOctContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentOctContents.kpi3 >= '9.333333333' && communityDevelopmentOctContents.kpi3 < '11.2')?'green':(communityDevelopmentOctContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentNovContents.kpi1 == null)?'grey-2':(communityDevelopmentNovContents.kpi1 >= '0' && communityDevelopmentNovContents.kpi1 <= '127')?'red':(communityDevelopmentNovContents.kpi1 > '127' && communityDevelopmentNovContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentNovContents.kpi1 > '169.3333333' && communityDevelopmentNovContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentNovContents.kpi1 >= '211.6666667' && communityDevelopmentNovContents.kpi1 < '254')?'green':(communityDevelopmentNovContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi2 == null)?'grey-2':(communityDevelopmentNovContents.kpi2 >= '0' && communityDevelopmentNovContents.kpi2 <= '6.4')?'red':(communityDevelopmentNovContents.kpi2 > '6.4' && communityDevelopmentNovContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentNovContents.kpi2 > '8.533333333' && communityDevelopmentNovContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentNovContents.kpi2 >= '10.66666667' && communityDevelopmentNovContents.kpi2 < '12.8')?'green':(communityDevelopmentNovContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi3 == null)?'grey-2':(communityDevelopmentNovContents.kpi3 >= '0' && communityDevelopmentNovContents.kpi3 <= '5.6')?'red':(communityDevelopmentNovContents.kpi3 > '5.6' && communityDevelopmentNovContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentNovContents.kpi3 > '7.466666667' && communityDevelopmentNovContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentNovContents.kpi3 >= '9.333333333' && communityDevelopmentNovContents.kpi3 < '11.2')?'green':(communityDevelopmentNovContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentDecContents.kpi1 == null)?'grey-2':(communityDevelopmentDecContents.kpi1 >= '0' && communityDevelopmentDecContents.kpi1 <= '127')?'red':(communityDevelopmentDecContents.kpi1 > '127' && communityDevelopmentDecContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentDecContents.kpi1 > '169.3333333' && communityDevelopmentDecContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentDecContents.kpi1 >= '211.6666667' && communityDevelopmentDecContents.kpi1 < '254')?'green':(communityDevelopmentDecContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi2 == null)?'grey-2':(communityDevelopmentDecContents.kpi2 >= '0' && communityDevelopmentDecContents.kpi2 <= '6.4')?'red':(communityDevelopmentDecContents.kpi2 > '6.4' && communityDevelopmentDecContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentDecContents.kpi2 > '8.533333333' && communityDevelopmentDecContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentDecContents.kpi2 >= '10.66666667' && communityDevelopmentDecContents.kpi2 < '12.8')?'green':(communityDevelopmentDecContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi3 == null)?'grey-2':(communityDevelopmentDecContents.kpi3 >= '0' && communityDevelopmentDecContents.kpi3 <= '5.6')?'red':(communityDevelopmentDecContents.kpi3 > '5.6' && communityDevelopmentDecContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentDecContents.kpi3 > '7.466666667' && communityDevelopmentDecContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentDecContents.kpi3 >= '9.333333333' && communityDevelopmentDecContents.kpi3 < '11.2')?'green':(communityDevelopmentDecContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                                <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of collaborative initiatives</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJanContents.kpi1 == null)?'grey-2':(communityDevelopmentJanContents.kpi1 >= '0' && communityDevelopmentJanContents.kpi1 <= '127')?'red':(communityDevelopmentJanContents.kpi1 > '127' && communityDevelopmentJanContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJanContents.kpi1 > '169.3333333' && communityDevelopmentJanContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJanContents.kpi1 >= '211.6666667' && communityDevelopmentJanContents.kpi1 < '254')?'green':(communityDevelopmentJanContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi2 == null)?'grey-2':(communityDevelopmentJanContents.kpi2 >= '0' && communityDevelopmentJanContents.kpi2 <= '6.4')?'red':(communityDevelopmentJanContents.kpi2 > '6.4' && communityDevelopmentJanContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJanContents.kpi2 > '8.533333333' && communityDevelopmentJanContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJanContents.kpi2 >= '10.66666667' && communityDevelopmentJanContents.kpi2 < '12.8')?'green':(communityDevelopmentJanContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi3 == null)?'grey-2':(communityDevelopmentJanContents.kpi3 >= '0' && communityDevelopmentJanContents.kpi3 <= '5.6')?'red':(communityDevelopmentJanContents.kpi3 > '5.6' && communityDevelopmentJanContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJanContents.kpi3 > '7.466666667' && communityDevelopmentJanContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJanContents.kpi3 >= '9.333333333' && communityDevelopmentJanContents.kpi3 < '11.2')?'green':(communityDevelopmentJanContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentFebContents.kpi1 == null)?'grey-2':(communityDevelopmentFebContents.kpi1 >= '0' && communityDevelopmentFebContents.kpi1 <= '127')?'red':(communityDevelopmentFebContents.kpi1 > '127' && communityDevelopmentFebContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentFebContents.kpi1 > '169.3333333' && communityDevelopmentFebContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentFebContents.kpi1 >= '211.6666667' && communityDevelopmentFebContents.kpi1 < '254')?'green':(communityDevelopmentFebContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi2 == null)?'grey-2':(communityDevelopmentFebContents.kpi2 >= '0' && communityDevelopmentFebContents.kpi2 <= '6.4')?'red':(communityDevelopmentFebContents.kpi2 > '6.4' && communityDevelopmentFebContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentFebContents.kpi2 > '8.533333333' && communityDevelopmentFebContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentFebContents.kpi2 >= '10.66666667' && communityDevelopmentFebContents.kpi2 < '12.8')?'green':(communityDevelopmentFebContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi3 == null)?'grey-2':(communityDevelopmentFebContents.kpi3 >= '0' && communityDevelopmentFebContents.kpi3 <= '5.6')?'red':(communityDevelopmentFebContents.kpi3 > '5.6' && communityDevelopmentFebContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentFebContents.kpi3 > '7.466666667' && communityDevelopmentFebContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentFebContents.kpi3 >= '9.333333333' && communityDevelopmentFebContents.kpi3 < '11.2')?'green':(communityDevelopmentFebContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMarContents.kpi1 == null)?'grey-2':(communityDevelopmentMarContents.kpi1 >= '0' && communityDevelopmentMarContents.kpi1 <= '127')?'red':(communityDevelopmentMarContents.kpi1 > '127' && communityDevelopmentMarContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMarContents.kpi1 > '169.3333333' && communityDevelopmentMarContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMarContents.kpi1 >= '211.6666667' && communityDevelopmentMarContents.kpi1 < '254')?'green':(communityDevelopmentMarContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi2 == null)?'grey-2':(communityDevelopmentMarContents.kpi2 >= '0' && communityDevelopmentMarContents.kpi2 <= '6.4')?'red':(communityDevelopmentMarContents.kpi2 > '6.4' && communityDevelopmentMarContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMarContents.kpi2 > '8.533333333' && communityDevelopmentMarContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMarContents.kpi2 >= '10.66666667' && communityDevelopmentMarContents.kpi2 < '12.8')?'green':(communityDevelopmentMarContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi3 == null)?'grey-2':(communityDevelopmentMarContents.kpi3 >= '0' && communityDevelopmentMarContents.kpi3 <= '5.6')?'red':(communityDevelopmentMarContents.kpi3 > '5.6' && communityDevelopmentMarContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMarContents.kpi3 > '7.466666667' && communityDevelopmentMarContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMarContents.kpi3 >= '9.333333333' && communityDevelopmentMarContents.kpi3 < '11.2')?'green':(communityDevelopmentMarContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAprContents.kpi1 == null)?'grey-2':(communityDevelopmentAprContents.kpi1 >= '0' && communityDevelopmentAprContents.kpi1 <= '127')?'red':(communityDevelopmentAprContents.kpi1 > '127' && communityDevelopmentAprContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAprContents.kpi1 > '169.3333333' && communityDevelopmentAprContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAprContents.kpi1 >= '211.6666667' && communityDevelopmentAprContents.kpi1 < '254')?'green':(communityDevelopmentAprContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi2 == null)?'grey-2':(communityDevelopmentAprContents.kpi2 >= '0' && communityDevelopmentAprContents.kpi2 <= '6.4')?'red':(communityDevelopmentAprContents.kpi2 > '6.4' && communityDevelopmentAprContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAprContents.kpi2 > '8.533333333' && communityDevelopmentAprContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAprContents.kpi2 >= '10.66666667' && communityDevelopmentAprContents.kpi2 < '12.8')?'green':(communityDevelopmentAprContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi3 == null)?'grey-2':(communityDevelopmentAprContents.kpi3 >= '0' && communityDevelopmentAprContents.kpi3 <= '5.6')?'red':(communityDevelopmentAprContents.kpi3 > '5.6' && communityDevelopmentAprContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAprContents.kpi3 > '7.466666667' && communityDevelopmentAprContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAprContents.kpi3 >= '9.333333333' && communityDevelopmentAprContents.kpi3 < '11.2')?'green':(communityDevelopmentAprContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMayContents.kpi1 == null)?'grey-2':(communityDevelopmentMayContents.kpi1 >= '0' && communityDevelopmentMayContents.kpi1 <= '127')?'red':(communityDevelopmentMayContents.kpi1 > '127' && communityDevelopmentMayContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMayContents.kpi1 > '169.3333333' && communityDevelopmentMayContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMayContents.kpi1 >= '211.6666667' && communityDevelopmentMayContents.kpi1 < '254')?'green':(communityDevelopmentMayContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi2 == null)?'grey-2':(communityDevelopmentMayContents.kpi2 >= '0' && communityDevelopmentMayContents.kpi2 <= '6.4')?'red':(communityDevelopmentMayContents.kpi2 > '6.4' && communityDevelopmentMayContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMayContents.kpi2 > '8.533333333' && communityDevelopmentMayContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMayContents.kpi2 >= '10.66666667' && communityDevelopmentMayContents.kpi2 < '12.8')?'green':(communityDevelopmentMayContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi3 == null)?'grey-2':(communityDevelopmentMayContents.kpi3 >= '0' && communityDevelopmentMayContents.kpi3 <= '5.6')?'red':(communityDevelopmentMayContents.kpi3 > '5.6' && communityDevelopmentMayContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMayContents.kpi3 > '7.466666667' && communityDevelopmentMayContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMayContents.kpi3 >= '9.333333333' && communityDevelopmentMayContents.kpi3 < '11.2')?'green':(communityDevelopmentMayContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJunContents.kpi1 == null)?'grey-2':(communityDevelopmentJunContents.kpi1 >= '0' && communityDevelopmentJunContents.kpi1 <= '127')?'red':(communityDevelopmentJunContents.kpi1 > '127' && communityDevelopmentJunContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJunContents.kpi1 > '169.3333333' && communityDevelopmentJunContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJunContents.kpi1 >= '211.6666667' && communityDevelopmentJunContents.kpi1 < '254')?'green':(communityDevelopmentJunContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi2 == null)?'grey-2':(communityDevelopmentJunContents.kpi2 >= '0' && communityDevelopmentJunContents.kpi2 <= '6.4')?'red':(communityDevelopmentJunContents.kpi2 > '6.4' && communityDevelopmentJunContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJunContents.kpi2 > '8.533333333' && communityDevelopmentJunContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJunContents.kpi2 >= '10.66666667' && communityDevelopmentJunContents.kpi2 < '12.8')?'green':(communityDevelopmentJunContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi3 == null)?'grey-2':(communityDevelopmentJunContents.kpi3 >= '0' && communityDevelopmentJunContents.kpi3 <= '5.6')?'red':(communityDevelopmentJunContents.kpi3 > '5.6' && communityDevelopmentJunContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJunContents.kpi3 > '7.466666667' && communityDevelopmentJunContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJunContents.kpi3 >= '9.333333333' && communityDevelopmentJunContents.kpi3 < '11.2')?'green':(communityDevelopmentJunContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJulContents.kpi1 == null)?'grey-2':(communityDevelopmentJulContents.kpi1 >= '0' && communityDevelopmentJulContents.kpi1 <= '127')?'red':(communityDevelopmentJulContents.kpi1 > '127' && communityDevelopmentJulContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJulContents.kpi1 > '169.3333333' && communityDevelopmentJulContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJulContents.kpi1 >= '211.6666667' && communityDevelopmentJulContents.kpi1 < '254')?'green':(communityDevelopmentJulContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi2 == null)?'grey-2':(communityDevelopmentJulContents.kpi2 >= '0' && communityDevelopmentJulContents.kpi2 <= '6.4')?'red':(communityDevelopmentJulContents.kpi2 > '6.4' && communityDevelopmentJulContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJulContents.kpi2 > '8.533333333' && communityDevelopmentJulContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJulContents.kpi2 >= '10.66666667' && communityDevelopmentJulContents.kpi2 < '12.8')?'green':(communityDevelopmentJulContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi3 == null)?'grey-2':(communityDevelopmentJulContents.kpi3 >= '0' && communityDevelopmentJulContents.kpi3 <= '5.6')?'red':(communityDevelopmentJulContents.kpi3 > '5.6' && communityDevelopmentJulContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJulContents.kpi3 > '7.466666667' && communityDevelopmentJulContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJulContents.kpi3 >= '9.333333333' && communityDevelopmentJulContents.kpi3 < '11.2')?'green':(communityDevelopmentJulContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAugContents.kpi1 == null)?'grey-2':(communityDevelopmentAugContents.kpi1 >= '0' && communityDevelopmentAugContents.kpi1 <= '127')?'red':(communityDevelopmentAugContents.kpi1 > '127' && communityDevelopmentAugContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAugContents.kpi1 > '169.3333333' && communityDevelopmentAugContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAugContents.kpi1 >= '211.6666667' && communityDevelopmentAugContents.kpi1 < '254')?'green':(communityDevelopmentAugContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi2 == null)?'grey-2':(communityDevelopmentAugContents.kpi2 >= '0' && communityDevelopmentAugContents.kpi2 <= '6.4')?'red':(communityDevelopmentAugContents.kpi2 > '6.4' && communityDevelopmentAugContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAugContents.kpi2 > '8.533333333' && communityDevelopmentAugContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAugContents.kpi2 >= '10.66666667' && communityDevelopmentAugContents.kpi2 < '12.8')?'green':(communityDevelopmentAugContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi3 == null)?'grey-2':(communityDevelopmentAugContents.kpi3 >= '0' && communityDevelopmentAugContents.kpi3 <= '5.6')?'red':(communityDevelopmentAugContents.kpi3 > '5.6' && communityDevelopmentAugContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAugContents.kpi3 > '7.466666667' && communityDevelopmentAugContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAugContents.kpi3 >= '9.333333333' && communityDevelopmentAugContents.kpi3 < '11.2')?'green':(communityDevelopmentAugContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentSepContents.kpi1 == null)?'grey-2':(communityDevelopmentSepContents.kpi1 >= '0' && communityDevelopmentSepContents.kpi1 <= '127')?'red':(communityDevelopmentSepContents.kpi1 > '127' && communityDevelopmentSepContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentSepContents.kpi1 > '169.3333333' && communityDevelopmentSepContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentSepContents.kpi1 >= '211.6666667' && communityDevelopmentSepContents.kpi1 < '254')?'green':(communityDevelopmentSepContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi2 == null)?'grey-2':(communityDevelopmentSepContents.kpi2 >= '0' && communityDevelopmentSepContents.kpi2 <= '6.4')?'red':(communityDevelopmentSepContents.kpi2 > '6.4' && communityDevelopmentSepContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentSepContents.kpi2 > '8.533333333' && communityDevelopmentSepContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentSepContents.kpi2 >= '10.66666667' && communityDevelopmentSepContents.kpi2 < '12.8')?'green':(communityDevelopmentSepContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi3 == null)?'grey-2':(communityDevelopmentSepContents.kpi3 >= '0' && communityDevelopmentSepContents.kpi3 <= '5.6')?'red':(communityDevelopmentSepContents.kpi3 > '5.6' && communityDevelopmentSepContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentSepContents.kpi3 > '7.466666667' && communityDevelopmentSepContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentSepContents.kpi3 >= '9.333333333' && communityDevelopmentSepContents.kpi3 < '11.2')?'green':(communityDevelopmentSepContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentOctContents.kpi1 == null)?'grey-2':(communityDevelopmentOctContents.kpi1 >= '0' && communityDevelopmentOctContents.kpi1 <= '127')?'red':(communityDevelopmentOctContents.kpi1 > '127' && communityDevelopmentOctContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentOctContents.kpi1 > '169.3333333' && communityDevelopmentOctContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentOctContents.kpi1 >= '211.6666667' && communityDevelopmentOctContents.kpi1 < '254')?'green':(communityDevelopmentOctContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi2 == null)?'grey-2':(communityDevelopmentOctContents.kpi2 >= '0' && communityDevelopmentOctContents.kpi2 <= '6.4')?'red':(communityDevelopmentOctContents.kpi2 > '6.4' && communityDevelopmentOctContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentOctContents.kpi2 > '8.533333333' && communityDevelopmentOctContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentOctContents.kpi2 >= '10.66666667' && communityDevelopmentOctContents.kpi2 < '12.8')?'green':(communityDevelopmentOctContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi3 == null)?'grey-2':(communityDevelopmentOctContents.kpi3 >= '0' && communityDevelopmentOctContents.kpi3 <= '5.6')?'red':(communityDevelopmentOctContents.kpi3 > '5.6' && communityDevelopmentOctContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentOctContents.kpi3 > '7.466666667' && communityDevelopmentOctContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentOctContents.kpi3 >= '9.333333333' && communityDevelopmentOctContents.kpi3 < '11.2')?'green':(communityDevelopmentOctContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentNovContents.kpi1 == null)?'grey-2':(communityDevelopmentNovContents.kpi1 >= '0' && communityDevelopmentNovContents.kpi1 <= '127')?'red':(communityDevelopmentNovContents.kpi1 > '127' && communityDevelopmentNovContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentNovContents.kpi1 > '169.3333333' && communityDevelopmentNovContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentNovContents.kpi1 >= '211.6666667' && communityDevelopmentNovContents.kpi1 < '254')?'green':(communityDevelopmentNovContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi2 == null)?'grey-2':(communityDevelopmentNovContents.kpi2 >= '0' && communityDevelopmentNovContents.kpi2 <= '6.4')?'red':(communityDevelopmentNovContents.kpi2 > '6.4' && communityDevelopmentNovContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentNovContents.kpi2 > '8.533333333' && communityDevelopmentNovContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentNovContents.kpi2 >= '10.66666667' && communityDevelopmentNovContents.kpi2 < '12.8')?'green':(communityDevelopmentNovContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi3 == null)?'grey-2':(communityDevelopmentNovContents.kpi3 >= '0' && communityDevelopmentNovContents.kpi3 <= '5.6')?'red':(communityDevelopmentNovContents.kpi3 > '5.6' && communityDevelopmentNovContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentNovContents.kpi3 > '7.466666667' && communityDevelopmentNovContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentNovContents.kpi3 >= '9.333333333' && communityDevelopmentNovContents.kpi3 < '11.2')?'green':(communityDevelopmentNovContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentDecContents.kpi1 == null)?'grey-2':(communityDevelopmentDecContents.kpi1 >= '0' && communityDevelopmentDecContents.kpi1 <= '127')?'red':(communityDevelopmentDecContents.kpi1 > '127' && communityDevelopmentDecContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentDecContents.kpi1 > '169.3333333' && communityDevelopmentDecContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentDecContents.kpi1 >= '211.6666667' && communityDevelopmentDecContents.kpi1 < '254')?'green':(communityDevelopmentDecContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi2 == null)?'grey-2':(communityDevelopmentDecContents.kpi2 >= '0' && communityDevelopmentDecContents.kpi2 <= '6.4')?'red':(communityDevelopmentDecContents.kpi2 > '6.4' && communityDevelopmentDecContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentDecContents.kpi2 > '8.533333333' && communityDevelopmentDecContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentDecContents.kpi2 >= '10.66666667' && communityDevelopmentDecContents.kpi2 < '12.8')?'green':(communityDevelopmentDecContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi3 == null)?'grey-2':(communityDevelopmentDecContents.kpi3 >= '0' && communityDevelopmentDecContents.kpi3 <= '5.6')?'red':(communityDevelopmentDecContents.kpi3 > '5.6' && communityDevelopmentDecContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentDecContents.kpi3 > '7.466666667' && communityDevelopmentDecContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentDecContents.kpi3 >= '9.333333333' && communityDevelopmentDecContents.kpi3 < '11.2')?'green':(communityDevelopmentDecContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                                <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of collaborative initiatives</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJanContents.kpi1 == null)?'grey-2':(communityDevelopmentJanContents.kpi1 >= '0' && communityDevelopmentJanContents.kpi1 <= '127')?'red':(communityDevelopmentJanContents.kpi1 > '127' && communityDevelopmentJanContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJanContents.kpi1 > '169.3333333' && communityDevelopmentJanContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJanContents.kpi1 >= '211.6666667' && communityDevelopmentJanContents.kpi1 < '254')?'green':(communityDevelopmentJanContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi2 == null)?'grey-2':(communityDevelopmentJanContents.kpi2 >= '0' && communityDevelopmentJanContents.kpi2 <= '6.4')?'red':(communityDevelopmentJanContents.kpi2 > '6.4' && communityDevelopmentJanContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJanContents.kpi2 > '8.533333333' && communityDevelopmentJanContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJanContents.kpi2 >= '10.66666667' && communityDevelopmentJanContents.kpi2 < '12.8')?'green':(communityDevelopmentJanContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi3 == null)?'grey-2':(communityDevelopmentJanContents.kpi3 >= '0' && communityDevelopmentJanContents.kpi3 <= '5.6')?'red':(communityDevelopmentJanContents.kpi3 > '5.6' && communityDevelopmentJanContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJanContents.kpi3 > '7.466666667' && communityDevelopmentJanContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJanContents.kpi3 >= '9.333333333' && communityDevelopmentJanContents.kpi3 < '11.2')?'green':(communityDevelopmentJanContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentFebContents.kpi1 == null)?'grey-2':(communityDevelopmentFebContents.kpi1 >= '0' && communityDevelopmentFebContents.kpi1 <= '127')?'red':(communityDevelopmentFebContents.kpi1 > '127' && communityDevelopmentFebContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentFebContents.kpi1 > '169.3333333' && communityDevelopmentFebContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentFebContents.kpi1 >= '211.6666667' && communityDevelopmentFebContents.kpi1 < '254')?'green':(communityDevelopmentFebContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi2 == null)?'grey-2':(communityDevelopmentFebContents.kpi2 >= '0' && communityDevelopmentFebContents.kpi2 <= '6.4')?'red':(communityDevelopmentFebContents.kpi2 > '6.4' && communityDevelopmentFebContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentFebContents.kpi2 > '8.533333333' && communityDevelopmentFebContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentFebContents.kpi2 >= '10.66666667' && communityDevelopmentFebContents.kpi2 < '12.8')?'green':(communityDevelopmentFebContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi3 == null)?'grey-2':(communityDevelopmentFebContents.kpi3 >= '0' && communityDevelopmentFebContents.kpi3 <= '5.6')?'red':(communityDevelopmentFebContents.kpi3 > '5.6' && communityDevelopmentFebContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentFebContents.kpi3 > '7.466666667' && communityDevelopmentFebContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentFebContents.kpi3 >= '9.333333333' && communityDevelopmentFebContents.kpi3 < '11.2')?'green':(communityDevelopmentFebContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMarContents.kpi1 == null)?'grey-2':(communityDevelopmentMarContents.kpi1 >= '0' && communityDevelopmentMarContents.kpi1 <= '127')?'red':(communityDevelopmentMarContents.kpi1 > '127' && communityDevelopmentMarContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMarContents.kpi1 > '169.3333333' && communityDevelopmentMarContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMarContents.kpi1 >= '211.6666667' && communityDevelopmentMarContents.kpi1 < '254')?'green':(communityDevelopmentMarContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi2 == null)?'grey-2':(communityDevelopmentMarContents.kpi2 >= '0' && communityDevelopmentMarContents.kpi2 <= '6.4')?'red':(communityDevelopmentMarContents.kpi2 > '6.4' && communityDevelopmentMarContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMarContents.kpi2 > '8.533333333' && communityDevelopmentMarContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMarContents.kpi2 >= '10.66666667' && communityDevelopmentMarContents.kpi2 < '12.8')?'green':(communityDevelopmentMarContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi3 == null)?'grey-2':(communityDevelopmentMarContents.kpi3 >= '0' && communityDevelopmentMarContents.kpi3 <= '5.6')?'red':(communityDevelopmentMarContents.kpi3 > '5.6' && communityDevelopmentMarContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMarContents.kpi3 > '7.466666667' && communityDevelopmentMarContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMarContents.kpi3 >= '9.333333333' && communityDevelopmentMarContents.kpi3 < '11.2')?'green':(communityDevelopmentMarContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAprContents.kpi1 == null)?'grey-2':(communityDevelopmentAprContents.kpi1 >= '0' && communityDevelopmentAprContents.kpi1 <= '127')?'red':(communityDevelopmentAprContents.kpi1 > '127' && communityDevelopmentAprContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAprContents.kpi1 > '169.3333333' && communityDevelopmentAprContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAprContents.kpi1 >= '211.6666667' && communityDevelopmentAprContents.kpi1 < '254')?'green':(communityDevelopmentAprContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi2 == null)?'grey-2':(communityDevelopmentAprContents.kpi2 >= '0' && communityDevelopmentAprContents.kpi2 <= '6.4')?'red':(communityDevelopmentAprContents.kpi2 > '6.4' && communityDevelopmentAprContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAprContents.kpi2 > '8.533333333' && communityDevelopmentAprContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAprContents.kpi2 >= '10.66666667' && communityDevelopmentAprContents.kpi2 < '12.8')?'green':(communityDevelopmentAprContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi3 == null)?'grey-2':(communityDevelopmentAprContents.kpi3 >= '0' && communityDevelopmentAprContents.kpi3 <= '5.6')?'red':(communityDevelopmentAprContents.kpi3 > '5.6' && communityDevelopmentAprContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAprContents.kpi3 > '7.466666667' && communityDevelopmentAprContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAprContents.kpi3 >= '9.333333333' && communityDevelopmentAprContents.kpi3 < '11.2')?'green':(communityDevelopmentAprContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMayContents.kpi1 == null)?'grey-2':(communityDevelopmentMayContents.kpi1 >= '0' && communityDevelopmentMayContents.kpi1 <= '127')?'red':(communityDevelopmentMayContents.kpi1 > '127' && communityDevelopmentMayContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMayContents.kpi1 > '169.3333333' && communityDevelopmentMayContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMayContents.kpi1 >= '211.6666667' && communityDevelopmentMayContents.kpi1 < '254')?'green':(communityDevelopmentMayContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi2 == null)?'grey-2':(communityDevelopmentMayContents.kpi2 >= '0' && communityDevelopmentMayContents.kpi2 <= '6.4')?'red':(communityDevelopmentMayContents.kpi2 > '6.4' && communityDevelopmentMayContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMayContents.kpi2 > '8.533333333' && communityDevelopmentMayContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMayContents.kpi2 >= '10.66666667' && communityDevelopmentMayContents.kpi2 < '12.8')?'green':(communityDevelopmentMayContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi3 == null)?'grey-2':(communityDevelopmentMayContents.kpi3 >= '0' && communityDevelopmentMayContents.kpi3 <= '5.6')?'red':(communityDevelopmentMayContents.kpi3 > '5.6' && communityDevelopmentMayContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMayContents.kpi3 > '7.466666667' && communityDevelopmentMayContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMayContents.kpi3 >= '9.333333333' && communityDevelopmentMayContents.kpi3 < '11.2')?'green':(communityDevelopmentMayContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJunContents.kpi1 == null)?'grey-2':(communityDevelopmentJunContents.kpi1 >= '0' && communityDevelopmentJunContents.kpi1 <= '127')?'red':(communityDevelopmentJunContents.kpi1 > '127' && communityDevelopmentJunContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJunContents.kpi1 > '169.3333333' && communityDevelopmentJunContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJunContents.kpi1 >= '211.6666667' && communityDevelopmentJunContents.kpi1 < '254')?'green':(communityDevelopmentJunContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi2 == null)?'grey-2':(communityDevelopmentJunContents.kpi2 >= '0' && communityDevelopmentJunContents.kpi2 <= '6.4')?'red':(communityDevelopmentJunContents.kpi2 > '6.4' && communityDevelopmentJunContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJunContents.kpi2 > '8.533333333' && communityDevelopmentJunContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJunContents.kpi2 >= '10.66666667' && communityDevelopmentJunContents.kpi2 < '12.8')?'green':(communityDevelopmentJunContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi3 == null)?'grey-2':(communityDevelopmentJunContents.kpi3 >= '0' && communityDevelopmentJunContents.kpi3 <= '5.6')?'red':(communityDevelopmentJunContents.kpi3 > '5.6' && communityDevelopmentJunContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJunContents.kpi3 > '7.466666667' && communityDevelopmentJunContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJunContents.kpi3 >= '9.333333333' && communityDevelopmentJunContents.kpi3 < '11.2')?'green':(communityDevelopmentJunContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJulContents.kpi1 == null)?'grey-2':(communityDevelopmentJulContents.kpi1 >= '0' && communityDevelopmentJulContents.kpi1 <= '127')?'red':(communityDevelopmentJulContents.kpi1 > '127' && communityDevelopmentJulContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJulContents.kpi1 > '169.3333333' && communityDevelopmentJulContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJulContents.kpi1 >= '211.6666667' && communityDevelopmentJulContents.kpi1 < '254')?'green':(communityDevelopmentJulContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi2 == null)?'grey-2':(communityDevelopmentJulContents.kpi2 >= '0' && communityDevelopmentJulContents.kpi2 <= '6.4')?'red':(communityDevelopmentJulContents.kpi2 > '6.4' && communityDevelopmentJulContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJulContents.kpi2 > '8.533333333' && communityDevelopmentJulContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJulContents.kpi2 >= '10.66666667' && communityDevelopmentJulContents.kpi2 < '12.8')?'green':(communityDevelopmentJulContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi3 == null)?'grey-2':(communityDevelopmentJulContents.kpi3 >= '0' && communityDevelopmentJulContents.kpi3 <= '5.6')?'red':(communityDevelopmentJulContents.kpi3 > '5.6' && communityDevelopmentJulContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJulContents.kpi3 > '7.466666667' && communityDevelopmentJulContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJulContents.kpi3 >= '9.333333333' && communityDevelopmentJulContents.kpi3 < '11.2')?'green':(communityDevelopmentJulContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAugContents.kpi1 == null)?'grey-2':(communityDevelopmentAugContents.kpi1 >= '0' && communityDevelopmentAugContents.kpi1 <= '127')?'red':(communityDevelopmentAugContents.kpi1 > '127' && communityDevelopmentAugContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAugContents.kpi1 > '169.3333333' && communityDevelopmentAugContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAugContents.kpi1 >= '211.6666667' && communityDevelopmentAugContents.kpi1 < '254')?'green':(communityDevelopmentAugContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi2 == null)?'grey-2':(communityDevelopmentAugContents.kpi2 >= '0' && communityDevelopmentAugContents.kpi2 <= '6.4')?'red':(communityDevelopmentAugContents.kpi2 > '6.4' && communityDevelopmentAugContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAugContents.kpi2 > '8.533333333' && communityDevelopmentAugContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAugContents.kpi2 >= '10.66666667' && communityDevelopmentAugContents.kpi2 < '12.8')?'green':(communityDevelopmentAugContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi3 == null)?'grey-2':(communityDevelopmentAugContents.kpi3 >= '0' && communityDevelopmentAugContents.kpi3 <= '5.6')?'red':(communityDevelopmentAugContents.kpi3 > '5.6' && communityDevelopmentAugContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAugContents.kpi3 > '7.466666667' && communityDevelopmentAugContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAugContents.kpi3 >= '9.333333333' && communityDevelopmentAugContents.kpi3 < '11.2')?'green':(communityDevelopmentAugContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentSepContents.kpi1 == null)?'grey-2':(communityDevelopmentSepContents.kpi1 >= '0' && communityDevelopmentSepContents.kpi1 <= '127')?'red':(communityDevelopmentSepContents.kpi1 > '127' && communityDevelopmentSepContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentSepContents.kpi1 > '169.3333333' && communityDevelopmentSepContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentSepContents.kpi1 >= '211.6666667' && communityDevelopmentSepContents.kpi1 < '254')?'green':(communityDevelopmentSepContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi2 == null)?'grey-2':(communityDevelopmentSepContents.kpi2 >= '0' && communityDevelopmentSepContents.kpi2 <= '6.4')?'red':(communityDevelopmentSepContents.kpi2 > '6.4' && communityDevelopmentSepContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentSepContents.kpi2 > '8.533333333' && communityDevelopmentSepContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentSepContents.kpi2 >= '10.66666667' && communityDevelopmentSepContents.kpi2 < '12.8')?'green':(communityDevelopmentSepContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi3 == null)?'grey-2':(communityDevelopmentSepContents.kpi3 >= '0' && communityDevelopmentSepContents.kpi3 <= '5.6')?'red':(communityDevelopmentSepContents.kpi3 > '5.6' && communityDevelopmentSepContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentSepContents.kpi3 > '7.466666667' && communityDevelopmentSepContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentSepContents.kpi3 >= '9.333333333' && communityDevelopmentSepContents.kpi3 < '11.2')?'green':(communityDevelopmentSepContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentOctContents.kpi1 == null)?'grey-2':(communityDevelopmentOctContents.kpi1 >= '0' && communityDevelopmentOctContents.kpi1 <= '127')?'red':(communityDevelopmentOctContents.kpi1 > '127' && communityDevelopmentOctContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentOctContents.kpi1 > '169.3333333' && communityDevelopmentOctContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentOctContents.kpi1 >= '211.6666667' && communityDevelopmentOctContents.kpi1 < '254')?'green':(communityDevelopmentOctContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi2 == null)?'grey-2':(communityDevelopmentOctContents.kpi2 >= '0' && communityDevelopmentOctContents.kpi2 <= '6.4')?'red':(communityDevelopmentOctContents.kpi2 > '6.4' && communityDevelopmentOctContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentOctContents.kpi2 > '8.533333333' && communityDevelopmentOctContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentOctContents.kpi2 >= '10.66666667' && communityDevelopmentOctContents.kpi2 < '12.8')?'green':(communityDevelopmentOctContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi3 == null)?'grey-2':(communityDevelopmentOctContents.kpi3 >= '0' && communityDevelopmentOctContents.kpi3 <= '5.6')?'red':(communityDevelopmentOctContents.kpi3 > '5.6' && communityDevelopmentOctContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentOctContents.kpi3 > '7.466666667' && communityDevelopmentOctContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentOctContents.kpi3 >= '9.333333333' && communityDevelopmentOctContents.kpi3 < '11.2')?'green':(communityDevelopmentOctContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentNovContents.kpi1 == null)?'grey-2':(communityDevelopmentNovContents.kpi1 >= '0' && communityDevelopmentNovContents.kpi1 <= '127')?'red':(communityDevelopmentNovContents.kpi1 > '127' && communityDevelopmentNovContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentNovContents.kpi1 > '169.3333333' && communityDevelopmentNovContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentNovContents.kpi1 >= '211.6666667' && communityDevelopmentNovContents.kpi1 < '254')?'green':(communityDevelopmentNovContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi2 == null)?'grey-2':(communityDevelopmentNovContents.kpi2 >= '0' && communityDevelopmentNovContents.kpi2 <= '6.4')?'red':(communityDevelopmentNovContents.kpi2 > '6.4' && communityDevelopmentNovContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentNovContents.kpi2 > '8.533333333' && communityDevelopmentNovContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentNovContents.kpi2 >= '10.66666667' && communityDevelopmentNovContents.kpi2 < '12.8')?'green':(communityDevelopmentNovContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi3 == null)?'grey-2':(communityDevelopmentNovContents.kpi3 >= '0' && communityDevelopmentNovContents.kpi3 <= '5.6')?'red':(communityDevelopmentNovContents.kpi3 > '5.6' && communityDevelopmentNovContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentNovContents.kpi3 > '7.466666667' && communityDevelopmentNovContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentNovContents.kpi3 >= '9.333333333' && communityDevelopmentNovContents.kpi3 < '11.2')?'green':(communityDevelopmentNovContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentDecContents.kpi1 == null)?'grey-2':(communityDevelopmentDecContents.kpi1 >= '0' && communityDevelopmentDecContents.kpi1 <= '127')?'red':(communityDevelopmentDecContents.kpi1 > '127' && communityDevelopmentDecContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentDecContents.kpi1 > '169.3333333' && communityDevelopmentDecContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentDecContents.kpi1 >= '211.6666667' && communityDevelopmentDecContents.kpi1 < '254')?'green':(communityDevelopmentDecContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi2 == null)?'grey-2':(communityDevelopmentDecContents.kpi2 >= '0' && communityDevelopmentDecContents.kpi2 <= '6.4')?'red':(communityDevelopmentDecContents.kpi2 > '6.4' && communityDevelopmentDecContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentDecContents.kpi2 > '8.533333333' && communityDevelopmentDecContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentDecContents.kpi2 >= '10.66666667' && communityDevelopmentDecContents.kpi2 < '12.8')?'green':(communityDevelopmentDecContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi3 == null)?'grey-2':(communityDevelopmentDecContents.kpi3 >= '0' && communityDevelopmentDecContents.kpi3 <= '5.6')?'red':(communityDevelopmentDecContents.kpi3 > '5.6' && communityDevelopmentDecContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentDecContents.kpi3 > '7.466666667' && communityDevelopmentDecContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentDecContents.kpi3 >= '9.333333333' && communityDevelopmentDecContents.kpi3 < '11.2')?'green':(communityDevelopmentDecContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                                <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of collaborative initiatives</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJanContents.kpi1 == null)?'grey-2':(communityDevelopmentJanContents.kpi1 >= '0' && communityDevelopmentJanContents.kpi1 <= '127')?'red':(communityDevelopmentJanContents.kpi1 > '127' && communityDevelopmentJanContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJanContents.kpi1 > '169.3333333' && communityDevelopmentJanContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJanContents.kpi1 >= '211.6666667' && communityDevelopmentJanContents.kpi1 < '254')?'green':(communityDevelopmentJanContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi2 == null)?'grey-2':(communityDevelopmentJanContents.kpi2 >= '0' && communityDevelopmentJanContents.kpi2 <= '6.4')?'red':(communityDevelopmentJanContents.kpi2 > '6.4' && communityDevelopmentJanContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJanContents.kpi2 > '8.533333333' && communityDevelopmentJanContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJanContents.kpi2 >= '10.66666667' && communityDevelopmentJanContents.kpi2 < '12.8')?'green':(communityDevelopmentJanContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi3 == null)?'grey-2':(communityDevelopmentJanContents.kpi3 >= '0' && communityDevelopmentJanContents.kpi3 <= '5.6')?'red':(communityDevelopmentJanContents.kpi3 > '5.6' && communityDevelopmentJanContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJanContents.kpi3 > '7.466666667' && communityDevelopmentJanContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJanContents.kpi3 >= '9.333333333' && communityDevelopmentJanContents.kpi3 < '11.2')?'green':(communityDevelopmentJanContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentFebContents.kpi1 == null)?'grey-2':(communityDevelopmentFebContents.kpi1 >= '0' && communityDevelopmentFebContents.kpi1 <= '127')?'red':(communityDevelopmentFebContents.kpi1 > '127' && communityDevelopmentFebContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentFebContents.kpi1 > '169.3333333' && communityDevelopmentFebContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentFebContents.kpi1 >= '211.6666667' && communityDevelopmentFebContents.kpi1 < '254')?'green':(communityDevelopmentFebContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi2 == null)?'grey-2':(communityDevelopmentFebContents.kpi2 >= '0' && communityDevelopmentFebContents.kpi2 <= '6.4')?'red':(communityDevelopmentFebContents.kpi2 > '6.4' && communityDevelopmentFebContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentFebContents.kpi2 > '8.533333333' && communityDevelopmentFebContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentFebContents.kpi2 >= '10.66666667' && communityDevelopmentFebContents.kpi2 < '12.8')?'green':(communityDevelopmentFebContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi3 == null)?'grey-2':(communityDevelopmentFebContents.kpi3 >= '0' && communityDevelopmentFebContents.kpi3 <= '5.6')?'red':(communityDevelopmentFebContents.kpi3 > '5.6' && communityDevelopmentFebContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentFebContents.kpi3 > '7.466666667' && communityDevelopmentFebContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentFebContents.kpi3 >= '9.333333333' && communityDevelopmentFebContents.kpi3 < '11.2')?'green':(communityDevelopmentFebContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMarContents.kpi1 == null)?'grey-2':(communityDevelopmentMarContents.kpi1 >= '0' && communityDevelopmentMarContents.kpi1 <= '127')?'red':(communityDevelopmentMarContents.kpi1 > '127' && communityDevelopmentMarContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMarContents.kpi1 > '169.3333333' && communityDevelopmentMarContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMarContents.kpi1 >= '211.6666667' && communityDevelopmentMarContents.kpi1 < '254')?'green':(communityDevelopmentMarContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi2 == null)?'grey-2':(communityDevelopmentMarContents.kpi2 >= '0' && communityDevelopmentMarContents.kpi2 <= '6.4')?'red':(communityDevelopmentMarContents.kpi2 > '6.4' && communityDevelopmentMarContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMarContents.kpi2 > '8.533333333' && communityDevelopmentMarContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMarContents.kpi2 >= '10.66666667' && communityDevelopmentMarContents.kpi2 < '12.8')?'green':(communityDevelopmentMarContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi3 == null)?'grey-2':(communityDevelopmentMarContents.kpi3 >= '0' && communityDevelopmentMarContents.kpi3 <= '5.6')?'red':(communityDevelopmentMarContents.kpi3 > '5.6' && communityDevelopmentMarContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMarContents.kpi3 > '7.466666667' && communityDevelopmentMarContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMarContents.kpi3 >= '9.333333333' && communityDevelopmentMarContents.kpi3 < '11.2')?'green':(communityDevelopmentMarContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAprContents.kpi1 == null)?'grey-2':(communityDevelopmentAprContents.kpi1 >= '0' && communityDevelopmentAprContents.kpi1 <= '127')?'red':(communityDevelopmentAprContents.kpi1 > '127' && communityDevelopmentAprContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAprContents.kpi1 > '169.3333333' && communityDevelopmentAprContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAprContents.kpi1 >= '211.6666667' && communityDevelopmentAprContents.kpi1 < '254')?'green':(communityDevelopmentAprContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi2 == null)?'grey-2':(communityDevelopmentAprContents.kpi2 >= '0' && communityDevelopmentAprContents.kpi2 <= '6.4')?'red':(communityDevelopmentAprContents.kpi2 > '6.4' && communityDevelopmentAprContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAprContents.kpi2 > '8.533333333' && communityDevelopmentAprContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAprContents.kpi2 >= '10.66666667' && communityDevelopmentAprContents.kpi2 < '12.8')?'green':(communityDevelopmentAprContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi3 == null)?'grey-2':(communityDevelopmentAprContents.kpi3 >= '0' && communityDevelopmentAprContents.kpi3 <= '5.6')?'red':(communityDevelopmentAprContents.kpi3 > '5.6' && communityDevelopmentAprContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAprContents.kpi3 > '7.466666667' && communityDevelopmentAprContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAprContents.kpi3 >= '9.333333333' && communityDevelopmentAprContents.kpi3 < '11.2')?'green':(communityDevelopmentAprContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMayContents.kpi1 == null)?'grey-2':(communityDevelopmentMayContents.kpi1 >= '0' && communityDevelopmentMayContents.kpi1 <= '127')?'red':(communityDevelopmentMayContents.kpi1 > '127' && communityDevelopmentMayContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMayContents.kpi1 > '169.3333333' && communityDevelopmentMayContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMayContents.kpi1 >= '211.6666667' && communityDevelopmentMayContents.kpi1 < '254')?'green':(communityDevelopmentMayContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi2 == null)?'grey-2':(communityDevelopmentMayContents.kpi2 >= '0' && communityDevelopmentMayContents.kpi2 <= '6.4')?'red':(communityDevelopmentMayContents.kpi2 > '6.4' && communityDevelopmentMayContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMayContents.kpi2 > '8.533333333' && communityDevelopmentMayContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMayContents.kpi2 >= '10.66666667' && communityDevelopmentMayContents.kpi2 < '12.8')?'green':(communityDevelopmentMayContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi3 == null)?'grey-2':(communityDevelopmentMayContents.kpi3 >= '0' && communityDevelopmentMayContents.kpi3 <= '5.6')?'red':(communityDevelopmentMayContents.kpi3 > '5.6' && communityDevelopmentMayContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMayContents.kpi3 > '7.466666667' && communityDevelopmentMayContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMayContents.kpi3 >= '9.333333333' && communityDevelopmentMayContents.kpi3 < '11.2')?'green':(communityDevelopmentMayContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJunContents.kpi1 == null)?'grey-2':(communityDevelopmentJunContents.kpi1 >= '0' && communityDevelopmentJunContents.kpi1 <= '127')?'red':(communityDevelopmentJunContents.kpi1 > '127' && communityDevelopmentJunContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJunContents.kpi1 > '169.3333333' && communityDevelopmentJunContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJunContents.kpi1 >= '211.6666667' && communityDevelopmentJunContents.kpi1 < '254')?'green':(communityDevelopmentJunContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi2 == null)?'grey-2':(communityDevelopmentJunContents.kpi2 >= '0' && communityDevelopmentJunContents.kpi2 <= '6.4')?'red':(communityDevelopmentJunContents.kpi2 > '6.4' && communityDevelopmentJunContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJunContents.kpi2 > '8.533333333' && communityDevelopmentJunContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJunContents.kpi2 >= '10.66666667' && communityDevelopmentJunContents.kpi2 < '12.8')?'green':(communityDevelopmentJunContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi3 == null)?'grey-2':(communityDevelopmentJunContents.kpi3 >= '0' && communityDevelopmentJunContents.kpi3 <= '5.6')?'red':(communityDevelopmentJunContents.kpi3 > '5.6' && communityDevelopmentJunContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJunContents.kpi3 > '7.466666667' && communityDevelopmentJunContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJunContents.kpi3 >= '9.333333333' && communityDevelopmentJunContents.kpi3 < '11.2')?'green':(communityDevelopmentJunContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJulContents.kpi1 == null)?'grey-2':(communityDevelopmentJulContents.kpi1 >= '0' && communityDevelopmentJulContents.kpi1 <= '127')?'red':(communityDevelopmentJulContents.kpi1 > '127' && communityDevelopmentJulContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJulContents.kpi1 > '169.3333333' && communityDevelopmentJulContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJulContents.kpi1 >= '211.6666667' && communityDevelopmentJulContents.kpi1 < '254')?'green':(communityDevelopmentJulContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi2 == null)?'grey-2':(communityDevelopmentJulContents.kpi2 >= '0' && communityDevelopmentJulContents.kpi2 <= '6.4')?'red':(communityDevelopmentJulContents.kpi2 > '6.4' && communityDevelopmentJulContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJulContents.kpi2 > '8.533333333' && communityDevelopmentJulContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJulContents.kpi2 >= '10.66666667' && communityDevelopmentJulContents.kpi2 < '12.8')?'green':(communityDevelopmentJulContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi3 == null)?'grey-2':(communityDevelopmentJulContents.kpi3 >= '0' && communityDevelopmentJulContents.kpi3 <= '5.6')?'red':(communityDevelopmentJulContents.kpi3 > '5.6' && communityDevelopmentJulContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJulContents.kpi3 > '7.466666667' && communityDevelopmentJulContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJulContents.kpi3 >= '9.333333333' && communityDevelopmentJulContents.kpi3 < '11.2')?'green':(communityDevelopmentJulContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAugContents.kpi1 == null)?'grey-2':(communityDevelopmentAugContents.kpi1 >= '0' && communityDevelopmentAugContents.kpi1 <= '127')?'red':(communityDevelopmentAugContents.kpi1 > '127' && communityDevelopmentAugContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAugContents.kpi1 > '169.3333333' && communityDevelopmentAugContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAugContents.kpi1 >= '211.6666667' && communityDevelopmentAugContents.kpi1 < '254')?'green':(communityDevelopmentAugContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi2 == null)?'grey-2':(communityDevelopmentAugContents.kpi2 >= '0' && communityDevelopmentAugContents.kpi2 <= '6.4')?'red':(communityDevelopmentAugContents.kpi2 > '6.4' && communityDevelopmentAugContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAugContents.kpi2 > '8.533333333' && communityDevelopmentAugContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAugContents.kpi2 >= '10.66666667' && communityDevelopmentAugContents.kpi2 < '12.8')?'green':(communityDevelopmentAugContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi3 == null)?'grey-2':(communityDevelopmentAugContents.kpi3 >= '0' && communityDevelopmentAugContents.kpi3 <= '5.6')?'red':(communityDevelopmentAugContents.kpi3 > '5.6' && communityDevelopmentAugContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAugContents.kpi3 > '7.466666667' && communityDevelopmentAugContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAugContents.kpi3 >= '9.333333333' && communityDevelopmentAugContents.kpi3 < '11.2')?'green':(communityDevelopmentAugContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentSepContents.kpi1 == null)?'grey-2':(communityDevelopmentSepContents.kpi1 >= '0' && communityDevelopmentSepContents.kpi1 <= '127')?'red':(communityDevelopmentSepContents.kpi1 > '127' && communityDevelopmentSepContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentSepContents.kpi1 > '169.3333333' && communityDevelopmentSepContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentSepContents.kpi1 >= '211.6666667' && communityDevelopmentSepContents.kpi1 < '254')?'green':(communityDevelopmentSepContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi2 == null)?'grey-2':(communityDevelopmentSepContents.kpi2 >= '0' && communityDevelopmentSepContents.kpi2 <= '6.4')?'red':(communityDevelopmentSepContents.kpi2 > '6.4' && communityDevelopmentSepContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentSepContents.kpi2 > '8.533333333' && communityDevelopmentSepContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentSepContents.kpi2 >= '10.66666667' && communityDevelopmentSepContents.kpi2 < '12.8')?'green':(communityDevelopmentSepContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi3 == null)?'grey-2':(communityDevelopmentSepContents.kpi3 >= '0' && communityDevelopmentSepContents.kpi3 <= '5.6')?'red':(communityDevelopmentSepContents.kpi3 > '5.6' && communityDevelopmentSepContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentSepContents.kpi3 > '7.466666667' && communityDevelopmentSepContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentSepContents.kpi3 >= '9.333333333' && communityDevelopmentSepContents.kpi3 < '11.2')?'green':(communityDevelopmentSepContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentOctContents.kpi1 == null)?'grey-2':(communityDevelopmentOctContents.kpi1 >= '0' && communityDevelopmentOctContents.kpi1 <= '127')?'red':(communityDevelopmentOctContents.kpi1 > '127' && communityDevelopmentOctContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentOctContents.kpi1 > '169.3333333' && communityDevelopmentOctContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentOctContents.kpi1 >= '211.6666667' && communityDevelopmentOctContents.kpi1 < '254')?'green':(communityDevelopmentOctContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi2 == null)?'grey-2':(communityDevelopmentOctContents.kpi2 >= '0' && communityDevelopmentOctContents.kpi2 <= '6.4')?'red':(communityDevelopmentOctContents.kpi2 > '6.4' && communityDevelopmentOctContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentOctContents.kpi2 > '8.533333333' && communityDevelopmentOctContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentOctContents.kpi2 >= '10.66666667' && communityDevelopmentOctContents.kpi2 < '12.8')?'green':(communityDevelopmentOctContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi3 == null)?'grey-2':(communityDevelopmentOctContents.kpi3 >= '0' && communityDevelopmentOctContents.kpi3 <= '5.6')?'red':(communityDevelopmentOctContents.kpi3 > '5.6' && communityDevelopmentOctContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentOctContents.kpi3 > '7.466666667' && communityDevelopmentOctContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentOctContents.kpi3 >= '9.333333333' && communityDevelopmentOctContents.kpi3 < '11.2')?'green':(communityDevelopmentOctContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentNovContents.kpi1 == null)?'grey-2':(communityDevelopmentNovContents.kpi1 >= '0' && communityDevelopmentNovContents.kpi1 <= '127')?'red':(communityDevelopmentNovContents.kpi1 > '127' && communityDevelopmentNovContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentNovContents.kpi1 > '169.3333333' && communityDevelopmentNovContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentNovContents.kpi1 >= '211.6666667' && communityDevelopmentNovContents.kpi1 < '254')?'green':(communityDevelopmentNovContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi2 == null)?'grey-2':(communityDevelopmentNovContents.kpi2 >= '0' && communityDevelopmentNovContents.kpi2 <= '6.4')?'red':(communityDevelopmentNovContents.kpi2 > '6.4' && communityDevelopmentNovContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentNovContents.kpi2 > '8.533333333' && communityDevelopmentNovContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentNovContents.kpi2 >= '10.66666667' && communityDevelopmentNovContents.kpi2 < '12.8')?'green':(communityDevelopmentNovContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi3 == null)?'grey-2':(communityDevelopmentNovContents.kpi3 >= '0' && communityDevelopmentNovContents.kpi3 <= '5.6')?'red':(communityDevelopmentNovContents.kpi3 > '5.6' && communityDevelopmentNovContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentNovContents.kpi3 > '7.466666667' && communityDevelopmentNovContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentNovContents.kpi3 >= '9.333333333' && communityDevelopmentNovContents.kpi3 < '11.2')?'green':(communityDevelopmentNovContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentDecContents.kpi1 == null)?'grey-2':(communityDevelopmentDecContents.kpi1 >= '0' && communityDevelopmentDecContents.kpi1 <= '127')?'red':(communityDevelopmentDecContents.kpi1 > '127' && communityDevelopmentDecContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentDecContents.kpi1 > '169.3333333' && communityDevelopmentDecContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentDecContents.kpi1 >= '211.6666667' && communityDevelopmentDecContents.kpi1 < '254')?'green':(communityDevelopmentDecContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi2 == null)?'grey-2':(communityDevelopmentDecContents.kpi2 >= '0' && communityDevelopmentDecContents.kpi2 <= '6.4')?'red':(communityDevelopmentDecContents.kpi2 > '6.4' && communityDevelopmentDecContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentDecContents.kpi2 > '8.533333333' && communityDevelopmentDecContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentDecContents.kpi2 >= '10.66666667' && communityDevelopmentDecContents.kpi2 < '12.8')?'green':(communityDevelopmentDecContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi3 == null)?'grey-2':(communityDevelopmentDecContents.kpi3 >= '0' && communityDevelopmentDecContents.kpi3 <= '5.6')?'red':(communityDevelopmentDecContents.kpi3 > '5.6' && communityDevelopmentDecContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentDecContents.kpi3 > '7.466666667' && communityDevelopmentDecContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentDecContents.kpi3 >= '9.333333333' && communityDevelopmentDecContents.kpi3 < '11.2')?'green':(communityDevelopmentDecContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                                <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of collaborative initiatives</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJanContents.kpi1 == null)?'grey-2':(communityDevelopmentJanContents.kpi1 >= '0' && communityDevelopmentJanContents.kpi1 <= '127')?'red':(communityDevelopmentJanContents.kpi1 > '127' && communityDevelopmentJanContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJanContents.kpi1 > '169.3333333' && communityDevelopmentJanContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJanContents.kpi1 >= '211.6666667' && communityDevelopmentJanContents.kpi1 < '254')?'green':(communityDevelopmentJanContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi2 == null)?'grey-2':(communityDevelopmentJanContents.kpi2 >= '0' && communityDevelopmentJanContents.kpi2 <= '6.4')?'red':(communityDevelopmentJanContents.kpi2 > '6.4' && communityDevelopmentJanContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJanContents.kpi2 > '8.533333333' && communityDevelopmentJanContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJanContents.kpi2 >= '10.66666667' && communityDevelopmentJanContents.kpi2 < '12.8')?'green':(communityDevelopmentJanContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi3 == null)?'grey-2':(communityDevelopmentJanContents.kpi3 >= '0' && communityDevelopmentJanContents.kpi3 <= '5.6')?'red':(communityDevelopmentJanContents.kpi3 > '5.6' && communityDevelopmentJanContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJanContents.kpi3 > '7.466666667' && communityDevelopmentJanContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJanContents.kpi3 >= '9.333333333' && communityDevelopmentJanContents.kpi3 < '11.2')?'green':(communityDevelopmentJanContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentFebContents.kpi1 == null)?'grey-2':(communityDevelopmentFebContents.kpi1 >= '0' && communityDevelopmentFebContents.kpi1 <= '127')?'red':(communityDevelopmentFebContents.kpi1 > '127' && communityDevelopmentFebContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentFebContents.kpi1 > '169.3333333' && communityDevelopmentFebContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentFebContents.kpi1 >= '211.6666667' && communityDevelopmentFebContents.kpi1 < '254')?'green':(communityDevelopmentFebContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi2 == null)?'grey-2':(communityDevelopmentFebContents.kpi2 >= '0' && communityDevelopmentFebContents.kpi2 <= '6.4')?'red':(communityDevelopmentFebContents.kpi2 > '6.4' && communityDevelopmentFebContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentFebContents.kpi2 > '8.533333333' && communityDevelopmentFebContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentFebContents.kpi2 >= '10.66666667' && communityDevelopmentFebContents.kpi2 < '12.8')?'green':(communityDevelopmentFebContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi3 == null)?'grey-2':(communityDevelopmentFebContents.kpi3 >= '0' && communityDevelopmentFebContents.kpi3 <= '5.6')?'red':(communityDevelopmentFebContents.kpi3 > '5.6' && communityDevelopmentFebContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentFebContents.kpi3 > '7.466666667' && communityDevelopmentFebContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentFebContents.kpi3 >= '9.333333333' && communityDevelopmentFebContents.kpi3 < '11.2')?'green':(communityDevelopmentFebContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMarContents.kpi1 == null)?'grey-2':(communityDevelopmentMarContents.kpi1 >= '0' && communityDevelopmentMarContents.kpi1 <= '127')?'red':(communityDevelopmentMarContents.kpi1 > '127' && communityDevelopmentMarContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMarContents.kpi1 > '169.3333333' && communityDevelopmentMarContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMarContents.kpi1 >= '211.6666667' && communityDevelopmentMarContents.kpi1 < '254')?'green':(communityDevelopmentMarContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi2 == null)?'grey-2':(communityDevelopmentMarContents.kpi2 >= '0' && communityDevelopmentMarContents.kpi2 <= '6.4')?'red':(communityDevelopmentMarContents.kpi2 > '6.4' && communityDevelopmentMarContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMarContents.kpi2 > '8.533333333' && communityDevelopmentMarContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMarContents.kpi2 >= '10.66666667' && communityDevelopmentMarContents.kpi2 < '12.8')?'green':(communityDevelopmentMarContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi3 == null)?'grey-2':(communityDevelopmentMarContents.kpi3 >= '0' && communityDevelopmentMarContents.kpi3 <= '5.6')?'red':(communityDevelopmentMarContents.kpi3 > '5.6' && communityDevelopmentMarContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMarContents.kpi3 > '7.466666667' && communityDevelopmentMarContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMarContents.kpi3 >= '9.333333333' && communityDevelopmentMarContents.kpi3 < '11.2')?'green':(communityDevelopmentMarContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAprContents.kpi1 == null)?'grey-2':(communityDevelopmentAprContents.kpi1 >= '0' && communityDevelopmentAprContents.kpi1 <= '127')?'red':(communityDevelopmentAprContents.kpi1 > '127' && communityDevelopmentAprContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAprContents.kpi1 > '169.3333333' && communityDevelopmentAprContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAprContents.kpi1 >= '211.6666667' && communityDevelopmentAprContents.kpi1 < '254')?'green':(communityDevelopmentAprContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi2 == null)?'grey-2':(communityDevelopmentAprContents.kpi2 >= '0' && communityDevelopmentAprContents.kpi2 <= '6.4')?'red':(communityDevelopmentAprContents.kpi2 > '6.4' && communityDevelopmentAprContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAprContents.kpi2 > '8.533333333' && communityDevelopmentAprContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAprContents.kpi2 >= '10.66666667' && communityDevelopmentAprContents.kpi2 < '12.8')?'green':(communityDevelopmentAprContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi3 == null)?'grey-2':(communityDevelopmentAprContents.kpi3 >= '0' && communityDevelopmentAprContents.kpi3 <= '5.6')?'red':(communityDevelopmentAprContents.kpi3 > '5.6' && communityDevelopmentAprContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAprContents.kpi3 > '7.466666667' && communityDevelopmentAprContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAprContents.kpi3 >= '9.333333333' && communityDevelopmentAprContents.kpi3 < '11.2')?'green':(communityDevelopmentAprContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMayContents.kpi1 == null)?'grey-2':(communityDevelopmentMayContents.kpi1 >= '0' && communityDevelopmentMayContents.kpi1 <= '127')?'red':(communityDevelopmentMayContents.kpi1 > '127' && communityDevelopmentMayContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMayContents.kpi1 > '169.3333333' && communityDevelopmentMayContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMayContents.kpi1 >= '211.6666667' && communityDevelopmentMayContents.kpi1 < '254')?'green':(communityDevelopmentMayContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi2 == null)?'grey-2':(communityDevelopmentMayContents.kpi2 >= '0' && communityDevelopmentMayContents.kpi2 <= '6.4')?'red':(communityDevelopmentMayContents.kpi2 > '6.4' && communityDevelopmentMayContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMayContents.kpi2 > '8.533333333' && communityDevelopmentMayContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMayContents.kpi2 >= '10.66666667' && communityDevelopmentMayContents.kpi2 < '12.8')?'green':(communityDevelopmentMayContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi3 == null)?'grey-2':(communityDevelopmentMayContents.kpi3 >= '0' && communityDevelopmentMayContents.kpi3 <= '5.6')?'red':(communityDevelopmentMayContents.kpi3 > '5.6' && communityDevelopmentMayContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMayContents.kpi3 > '7.466666667' && communityDevelopmentMayContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMayContents.kpi3 >= '9.333333333' && communityDevelopmentMayContents.kpi3 < '11.2')?'green':(communityDevelopmentMayContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJunContents.kpi1 == null)?'grey-2':(communityDevelopmentJunContents.kpi1 >= '0' && communityDevelopmentJunContents.kpi1 <= '127')?'red':(communityDevelopmentJunContents.kpi1 > '127' && communityDevelopmentJunContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJunContents.kpi1 > '169.3333333' && communityDevelopmentJunContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJunContents.kpi1 >= '211.6666667' && communityDevelopmentJunContents.kpi1 < '254')?'green':(communityDevelopmentJunContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi2 == null)?'grey-2':(communityDevelopmentJunContents.kpi2 >= '0' && communityDevelopmentJunContents.kpi2 <= '6.4')?'red':(communityDevelopmentJunContents.kpi2 > '6.4' && communityDevelopmentJunContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJunContents.kpi2 > '8.533333333' && communityDevelopmentJunContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJunContents.kpi2 >= '10.66666667' && communityDevelopmentJunContents.kpi2 < '12.8')?'green':(communityDevelopmentJunContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi3 == null)?'grey-2':(communityDevelopmentJunContents.kpi3 >= '0' && communityDevelopmentJunContents.kpi3 <= '5.6')?'red':(communityDevelopmentJunContents.kpi3 > '5.6' && communityDevelopmentJunContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJunContents.kpi3 > '7.466666667' && communityDevelopmentJunContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJunContents.kpi3 >= '9.333333333' && communityDevelopmentJunContents.kpi3 < '11.2')?'green':(communityDevelopmentJunContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJulContents.kpi1 == null)?'grey-2':(communityDevelopmentJulContents.kpi1 >= '0' && communityDevelopmentJulContents.kpi1 <= '127')?'red':(communityDevelopmentJulContents.kpi1 > '127' && communityDevelopmentJulContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJulContents.kpi1 > '169.3333333' && communityDevelopmentJulContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJulContents.kpi1 >= '211.6666667' && communityDevelopmentJulContents.kpi1 < '254')?'green':(communityDevelopmentJulContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi2 == null)?'grey-2':(communityDevelopmentJulContents.kpi2 >= '0' && communityDevelopmentJulContents.kpi2 <= '6.4')?'red':(communityDevelopmentJulContents.kpi2 > '6.4' && communityDevelopmentJulContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJulContents.kpi2 > '8.533333333' && communityDevelopmentJulContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJulContents.kpi2 >= '10.66666667' && communityDevelopmentJulContents.kpi2 < '12.8')?'green':(communityDevelopmentJulContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi3 == null)?'grey-2':(communityDevelopmentJulContents.kpi3 >= '0' && communityDevelopmentJulContents.kpi3 <= '5.6')?'red':(communityDevelopmentJulContents.kpi3 > '5.6' && communityDevelopmentJulContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJulContents.kpi3 > '7.466666667' && communityDevelopmentJulContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJulContents.kpi3 >= '9.333333333' && communityDevelopmentJulContents.kpi3 < '11.2')?'green':(communityDevelopmentJulContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAugContents.kpi1 == null)?'grey-2':(communityDevelopmentAugContents.kpi1 >= '0' && communityDevelopmentAugContents.kpi1 <= '127')?'red':(communityDevelopmentAugContents.kpi1 > '127' && communityDevelopmentAugContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAugContents.kpi1 > '169.3333333' && communityDevelopmentAugContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAugContents.kpi1 >= '211.6666667' && communityDevelopmentAugContents.kpi1 < '254')?'green':(communityDevelopmentAugContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi2 == null)?'grey-2':(communityDevelopmentAugContents.kpi2 >= '0' && communityDevelopmentAugContents.kpi2 <= '6.4')?'red':(communityDevelopmentAugContents.kpi2 > '6.4' && communityDevelopmentAugContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAugContents.kpi2 > '8.533333333' && communityDevelopmentAugContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAugContents.kpi2 >= '10.66666667' && communityDevelopmentAugContents.kpi2 < '12.8')?'green':(communityDevelopmentAugContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi3 == null)?'grey-2':(communityDevelopmentAugContents.kpi3 >= '0' && communityDevelopmentAugContents.kpi3 <= '5.6')?'red':(communityDevelopmentAugContents.kpi3 > '5.6' && communityDevelopmentAugContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAugContents.kpi3 > '7.466666667' && communityDevelopmentAugContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAugContents.kpi3 >= '9.333333333' && communityDevelopmentAugContents.kpi3 < '11.2')?'green':(communityDevelopmentAugContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentSepContents.kpi1 == null)?'grey-2':(communityDevelopmentSepContents.kpi1 >= '0' && communityDevelopmentSepContents.kpi1 <= '127')?'red':(communityDevelopmentSepContents.kpi1 > '127' && communityDevelopmentSepContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentSepContents.kpi1 > '169.3333333' && communityDevelopmentSepContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentSepContents.kpi1 >= '211.6666667' && communityDevelopmentSepContents.kpi1 < '254')?'green':(communityDevelopmentSepContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi2 == null)?'grey-2':(communityDevelopmentSepContents.kpi2 >= '0' && communityDevelopmentSepContents.kpi2 <= '6.4')?'red':(communityDevelopmentSepContents.kpi2 > '6.4' && communityDevelopmentSepContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentSepContents.kpi2 > '8.533333333' && communityDevelopmentSepContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentSepContents.kpi2 >= '10.66666667' && communityDevelopmentSepContents.kpi2 < '12.8')?'green':(communityDevelopmentSepContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi3 == null)?'grey-2':(communityDevelopmentSepContents.kpi3 >= '0' && communityDevelopmentSepContents.kpi3 <= '5.6')?'red':(communityDevelopmentSepContents.kpi3 > '5.6' && communityDevelopmentSepContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentSepContents.kpi3 > '7.466666667' && communityDevelopmentSepContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentSepContents.kpi3 >= '9.333333333' && communityDevelopmentSepContents.kpi3 < '11.2')?'green':(communityDevelopmentSepContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentOctContents.kpi1 == null)?'grey-2':(communityDevelopmentOctContents.kpi1 >= '0' && communityDevelopmentOctContents.kpi1 <= '127')?'red':(communityDevelopmentOctContents.kpi1 > '127' && communityDevelopmentOctContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentOctContents.kpi1 > '169.3333333' && communityDevelopmentOctContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentOctContents.kpi1 >= '211.6666667' && communityDevelopmentOctContents.kpi1 < '254')?'green':(communityDevelopmentOctContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi2 == null)?'grey-2':(communityDevelopmentOctContents.kpi2 >= '0' && communityDevelopmentOctContents.kpi2 <= '6.4')?'red':(communityDevelopmentOctContents.kpi2 > '6.4' && communityDevelopmentOctContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentOctContents.kpi2 > '8.533333333' && communityDevelopmentOctContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentOctContents.kpi2 >= '10.66666667' && communityDevelopmentOctContents.kpi2 < '12.8')?'green':(communityDevelopmentOctContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi3 == null)?'grey-2':(communityDevelopmentOctContents.kpi3 >= '0' && communityDevelopmentOctContents.kpi3 <= '5.6')?'red':(communityDevelopmentOctContents.kpi3 > '5.6' && communityDevelopmentOctContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentOctContents.kpi3 > '7.466666667' && communityDevelopmentOctContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentOctContents.kpi3 >= '9.333333333' && communityDevelopmentOctContents.kpi3 < '11.2')?'green':(communityDevelopmentOctContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentNovContents.kpi1 == null)?'grey-2':(communityDevelopmentNovContents.kpi1 >= '0' && communityDevelopmentNovContents.kpi1 <= '127')?'red':(communityDevelopmentNovContents.kpi1 > '127' && communityDevelopmentNovContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentNovContents.kpi1 > '169.3333333' && communityDevelopmentNovContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentNovContents.kpi1 >= '211.6666667' && communityDevelopmentNovContents.kpi1 < '254')?'green':(communityDevelopmentNovContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi2 == null)?'grey-2':(communityDevelopmentNovContents.kpi2 >= '0' && communityDevelopmentNovContents.kpi2 <= '6.4')?'red':(communityDevelopmentNovContents.kpi2 > '6.4' && communityDevelopmentNovContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentNovContents.kpi2 > '8.533333333' && communityDevelopmentNovContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentNovContents.kpi2 >= '10.66666667' && communityDevelopmentNovContents.kpi2 < '12.8')?'green':(communityDevelopmentNovContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi3 == null)?'grey-2':(communityDevelopmentNovContents.kpi3 >= '0' && communityDevelopmentNovContents.kpi3 <= '5.6')?'red':(communityDevelopmentNovContents.kpi3 > '5.6' && communityDevelopmentNovContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentNovContents.kpi3 > '7.466666667' && communityDevelopmentNovContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentNovContents.kpi3 >= '9.333333333' && communityDevelopmentNovContents.kpi3 < '11.2')?'green':(communityDevelopmentNovContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentDecContents.kpi1 == null)?'grey-2':(communityDevelopmentDecContents.kpi1 >= '0' && communityDevelopmentDecContents.kpi1 <= '127')?'red':(communityDevelopmentDecContents.kpi1 > '127' && communityDevelopmentDecContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentDecContents.kpi1 > '169.3333333' && communityDevelopmentDecContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentDecContents.kpi1 >= '211.6666667' && communityDevelopmentDecContents.kpi1 < '254')?'green':(communityDevelopmentDecContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi2 == null)?'grey-2':(communityDevelopmentDecContents.kpi2 >= '0' && communityDevelopmentDecContents.kpi2 <= '6.4')?'red':(communityDevelopmentDecContents.kpi2 > '6.4' && communityDevelopmentDecContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentDecContents.kpi2 > '8.533333333' && communityDevelopmentDecContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentDecContents.kpi2 >= '10.66666667' && communityDevelopmentDecContents.kpi2 < '12.8')?'green':(communityDevelopmentDecContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi3 == null)?'grey-2':(communityDevelopmentDecContents.kpi3 >= '0' && communityDevelopmentDecContents.kpi3 <= '5.6')?'red':(communityDevelopmentDecContents.kpi3 > '5.6' && communityDevelopmentDecContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentDecContents.kpi3 > '7.466666667' && communityDevelopmentDecContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentDecContents.kpi3 >= '9.333333333' && communityDevelopmentDecContents.kpi3 < '11.2')?'green':(communityDevelopmentDecContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                                <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of collaborative initiatives</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJanContents.kpi1 == null)?'grey-2':(communityDevelopmentJanContents.kpi1 >= '0' && communityDevelopmentJanContents.kpi1 <= '127')?'red':(communityDevelopmentJanContents.kpi1 > '127' && communityDevelopmentJanContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJanContents.kpi1 > '169.3333333' && communityDevelopmentJanContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJanContents.kpi1 >= '211.6666667' && communityDevelopmentJanContents.kpi1 < '254')?'green':(communityDevelopmentJanContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi2 == null)?'grey-2':(communityDevelopmentJanContents.kpi2 >= '0' && communityDevelopmentJanContents.kpi2 <= '6.4')?'red':(communityDevelopmentJanContents.kpi2 > '6.4' && communityDevelopmentJanContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJanContents.kpi2 > '8.533333333' && communityDevelopmentJanContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJanContents.kpi2 >= '10.66666667' && communityDevelopmentJanContents.kpi2 < '12.8')?'green':(communityDevelopmentJanContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi3 == null)?'grey-2':(communityDevelopmentJanContents.kpi3 >= '0' && communityDevelopmentJanContents.kpi3 <= '5.6')?'red':(communityDevelopmentJanContents.kpi3 > '5.6' && communityDevelopmentJanContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJanContents.kpi3 > '7.466666667' && communityDevelopmentJanContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJanContents.kpi3 >= '9.333333333' && communityDevelopmentJanContents.kpi3 < '11.2')?'green':(communityDevelopmentJanContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentFebContents.kpi1 == null)?'grey-2':(communityDevelopmentFebContents.kpi1 >= '0' && communityDevelopmentFebContents.kpi1 <= '127')?'red':(communityDevelopmentFebContents.kpi1 > '127' && communityDevelopmentFebContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentFebContents.kpi1 > '169.3333333' && communityDevelopmentFebContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentFebContents.kpi1 >= '211.6666667' && communityDevelopmentFebContents.kpi1 < '254')?'green':(communityDevelopmentFebContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi2 == null)?'grey-2':(communityDevelopmentFebContents.kpi2 >= '0' && communityDevelopmentFebContents.kpi2 <= '6.4')?'red':(communityDevelopmentFebContents.kpi2 > '6.4' && communityDevelopmentFebContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentFebContents.kpi2 > '8.533333333' && communityDevelopmentFebContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentFebContents.kpi2 >= '10.66666667' && communityDevelopmentFebContents.kpi2 < '12.8')?'green':(communityDevelopmentFebContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi3 == null)?'grey-2':(communityDevelopmentFebContents.kpi3 >= '0' && communityDevelopmentFebContents.kpi3 <= '5.6')?'red':(communityDevelopmentFebContents.kpi3 > '5.6' && communityDevelopmentFebContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentFebContents.kpi3 > '7.466666667' && communityDevelopmentFebContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentFebContents.kpi3 >= '9.333333333' && communityDevelopmentFebContents.kpi3 < '11.2')?'green':(communityDevelopmentFebContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMarContents.kpi1 == null)?'grey-2':(communityDevelopmentMarContents.kpi1 >= '0' && communityDevelopmentMarContents.kpi1 <= '127')?'red':(communityDevelopmentMarContents.kpi1 > '127' && communityDevelopmentMarContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMarContents.kpi1 > '169.3333333' && communityDevelopmentMarContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMarContents.kpi1 >= '211.6666667' && communityDevelopmentMarContents.kpi1 < '254')?'green':(communityDevelopmentMarContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi2 == null)?'grey-2':(communityDevelopmentMarContents.kpi2 >= '0' && communityDevelopmentMarContents.kpi2 <= '6.4')?'red':(communityDevelopmentMarContents.kpi2 > '6.4' && communityDevelopmentMarContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMarContents.kpi2 > '8.533333333' && communityDevelopmentMarContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMarContents.kpi2 >= '10.66666667' && communityDevelopmentMarContents.kpi2 < '12.8')?'green':(communityDevelopmentMarContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi3 == null)?'grey-2':(communityDevelopmentMarContents.kpi3 >= '0' && communityDevelopmentMarContents.kpi3 <= '5.6')?'red':(communityDevelopmentMarContents.kpi3 > '5.6' && communityDevelopmentMarContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMarContents.kpi3 > '7.466666667' && communityDevelopmentMarContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMarContents.kpi3 >= '9.333333333' && communityDevelopmentMarContents.kpi3 < '11.2')?'green':(communityDevelopmentMarContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAprContents.kpi1 == null)?'grey-2':(communityDevelopmentAprContents.kpi1 >= '0' && communityDevelopmentAprContents.kpi1 <= '127')?'red':(communityDevelopmentAprContents.kpi1 > '127' && communityDevelopmentAprContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAprContents.kpi1 > '169.3333333' && communityDevelopmentAprContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAprContents.kpi1 >= '211.6666667' && communityDevelopmentAprContents.kpi1 < '254')?'green':(communityDevelopmentAprContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi2 == null)?'grey-2':(communityDevelopmentAprContents.kpi2 >= '0' && communityDevelopmentAprContents.kpi2 <= '6.4')?'red':(communityDevelopmentAprContents.kpi2 > '6.4' && communityDevelopmentAprContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAprContents.kpi2 > '8.533333333' && communityDevelopmentAprContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAprContents.kpi2 >= '10.66666667' && communityDevelopmentAprContents.kpi2 < '12.8')?'green':(communityDevelopmentAprContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi3 == null)?'grey-2':(communityDevelopmentAprContents.kpi3 >= '0' && communityDevelopmentAprContents.kpi3 <= '5.6')?'red':(communityDevelopmentAprContents.kpi3 > '5.6' && communityDevelopmentAprContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAprContents.kpi3 > '7.466666667' && communityDevelopmentAprContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAprContents.kpi3 >= '9.333333333' && communityDevelopmentAprContents.kpi3 < '11.2')?'green':(communityDevelopmentAprContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMayContents.kpi1 == null)?'grey-2':(communityDevelopmentMayContents.kpi1 >= '0' && communityDevelopmentMayContents.kpi1 <= '127')?'red':(communityDevelopmentMayContents.kpi1 > '127' && communityDevelopmentMayContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMayContents.kpi1 > '169.3333333' && communityDevelopmentMayContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMayContents.kpi1 >= '211.6666667' && communityDevelopmentMayContents.kpi1 < '254')?'green':(communityDevelopmentMayContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi2 == null)?'grey-2':(communityDevelopmentMayContents.kpi2 >= '0' && communityDevelopmentMayContents.kpi2 <= '6.4')?'red':(communityDevelopmentMayContents.kpi2 > '6.4' && communityDevelopmentMayContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMayContents.kpi2 > '8.533333333' && communityDevelopmentMayContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMayContents.kpi2 >= '10.66666667' && communityDevelopmentMayContents.kpi2 < '12.8')?'green':(communityDevelopmentMayContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi3 == null)?'grey-2':(communityDevelopmentMayContents.kpi3 >= '0' && communityDevelopmentMayContents.kpi3 <= '5.6')?'red':(communityDevelopmentMayContents.kpi3 > '5.6' && communityDevelopmentMayContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMayContents.kpi3 > '7.466666667' && communityDevelopmentMayContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMayContents.kpi3 >= '9.333333333' && communityDevelopmentMayContents.kpi3 < '11.2')?'green':(communityDevelopmentMayContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJunContents.kpi1 == null)?'grey-2':(communityDevelopmentJunContents.kpi1 >= '0' && communityDevelopmentJunContents.kpi1 <= '127')?'red':(communityDevelopmentJunContents.kpi1 > '127' && communityDevelopmentJunContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJunContents.kpi1 > '169.3333333' && communityDevelopmentJunContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJunContents.kpi1 >= '211.6666667' && communityDevelopmentJunContents.kpi1 < '254')?'green':(communityDevelopmentJunContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi2 == null)?'grey-2':(communityDevelopmentJunContents.kpi2 >= '0' && communityDevelopmentJunContents.kpi2 <= '6.4')?'red':(communityDevelopmentJunContents.kpi2 > '6.4' && communityDevelopmentJunContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJunContents.kpi2 > '8.533333333' && communityDevelopmentJunContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJunContents.kpi2 >= '10.66666667' && communityDevelopmentJunContents.kpi2 < '12.8')?'green':(communityDevelopmentJunContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi3 == null)?'grey-2':(communityDevelopmentJunContents.kpi3 >= '0' && communityDevelopmentJunContents.kpi3 <= '5.6')?'red':(communityDevelopmentJunContents.kpi3 > '5.6' && communityDevelopmentJunContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJunContents.kpi3 > '7.466666667' && communityDevelopmentJunContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJunContents.kpi3 >= '9.333333333' && communityDevelopmentJunContents.kpi3 < '11.2')?'green':(communityDevelopmentJunContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJulContents.kpi1 == null)?'grey-2':(communityDevelopmentJulContents.kpi1 >= '0' && communityDevelopmentJulContents.kpi1 <= '127')?'red':(communityDevelopmentJulContents.kpi1 > '127' && communityDevelopmentJulContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJulContents.kpi1 > '169.3333333' && communityDevelopmentJulContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJulContents.kpi1 >= '211.6666667' && communityDevelopmentJulContents.kpi1 < '254')?'green':(communityDevelopmentJulContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi2 == null)?'grey-2':(communityDevelopmentJulContents.kpi2 >= '0' && communityDevelopmentJulContents.kpi2 <= '6.4')?'red':(communityDevelopmentJulContents.kpi2 > '6.4' && communityDevelopmentJulContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJulContents.kpi2 > '8.533333333' && communityDevelopmentJulContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJulContents.kpi2 >= '10.66666667' && communityDevelopmentJulContents.kpi2 < '12.8')?'green':(communityDevelopmentJulContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi3 == null)?'grey-2':(communityDevelopmentJulContents.kpi3 >= '0' && communityDevelopmentJulContents.kpi3 <= '5.6')?'red':(communityDevelopmentJulContents.kpi3 > '5.6' && communityDevelopmentJulContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJulContents.kpi3 > '7.466666667' && communityDevelopmentJulContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJulContents.kpi3 >= '9.333333333' && communityDevelopmentJulContents.kpi3 < '11.2')?'green':(communityDevelopmentJulContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAugContents.kpi1 == null)?'grey-2':(communityDevelopmentAugContents.kpi1 >= '0' && communityDevelopmentAugContents.kpi1 <= '127')?'red':(communityDevelopmentAugContents.kpi1 > '127' && communityDevelopmentAugContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAugContents.kpi1 > '169.3333333' && communityDevelopmentAugContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAugContents.kpi1 >= '211.6666667' && communityDevelopmentAugContents.kpi1 < '254')?'green':(communityDevelopmentAugContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi2 == null)?'grey-2':(communityDevelopmentAugContents.kpi2 >= '0' && communityDevelopmentAugContents.kpi2 <= '6.4')?'red':(communityDevelopmentAugContents.kpi2 > '6.4' && communityDevelopmentAugContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAugContents.kpi2 > '8.533333333' && communityDevelopmentAugContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAugContents.kpi2 >= '10.66666667' && communityDevelopmentAugContents.kpi2 < '12.8')?'green':(communityDevelopmentAugContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi3 == null)?'grey-2':(communityDevelopmentAugContents.kpi3 >= '0' && communityDevelopmentAugContents.kpi3 <= '5.6')?'red':(communityDevelopmentAugContents.kpi3 > '5.6' && communityDevelopmentAugContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAugContents.kpi3 > '7.466666667' && communityDevelopmentAugContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAugContents.kpi3 >= '9.333333333' && communityDevelopmentAugContents.kpi3 < '11.2')?'green':(communityDevelopmentAugContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentSepContents.kpi1 == null)?'grey-2':(communityDevelopmentSepContents.kpi1 >= '0' && communityDevelopmentSepContents.kpi1 <= '127')?'red':(communityDevelopmentSepContents.kpi1 > '127' && communityDevelopmentSepContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentSepContents.kpi1 > '169.3333333' && communityDevelopmentSepContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentSepContents.kpi1 >= '211.6666667' && communityDevelopmentSepContents.kpi1 < '254')?'green':(communityDevelopmentSepContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi2 == null)?'grey-2':(communityDevelopmentSepContents.kpi2 >= '0' && communityDevelopmentSepContents.kpi2 <= '6.4')?'red':(communityDevelopmentSepContents.kpi2 > '6.4' && communityDevelopmentSepContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentSepContents.kpi2 > '8.533333333' && communityDevelopmentSepContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentSepContents.kpi2 >= '10.66666667' && communityDevelopmentSepContents.kpi2 < '12.8')?'green':(communityDevelopmentSepContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi3 == null)?'grey-2':(communityDevelopmentSepContents.kpi3 >= '0' && communityDevelopmentSepContents.kpi3 <= '5.6')?'red':(communityDevelopmentSepContents.kpi3 > '5.6' && communityDevelopmentSepContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentSepContents.kpi3 > '7.466666667' && communityDevelopmentSepContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentSepContents.kpi3 >= '9.333333333' && communityDevelopmentSepContents.kpi3 < '11.2')?'green':(communityDevelopmentSepContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentOctContents.kpi1 == null)?'grey-2':(communityDevelopmentOctContents.kpi1 >= '0' && communityDevelopmentOctContents.kpi1 <= '127')?'red':(communityDevelopmentOctContents.kpi1 > '127' && communityDevelopmentOctContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentOctContents.kpi1 > '169.3333333' && communityDevelopmentOctContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentOctContents.kpi1 >= '211.6666667' && communityDevelopmentOctContents.kpi1 < '254')?'green':(communityDevelopmentOctContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi2 == null)?'grey-2':(communityDevelopmentOctContents.kpi2 >= '0' && communityDevelopmentOctContents.kpi2 <= '6.4')?'red':(communityDevelopmentOctContents.kpi2 > '6.4' && communityDevelopmentOctContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentOctContents.kpi2 > '8.533333333' && communityDevelopmentOctContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentOctContents.kpi2 >= '10.66666667' && communityDevelopmentOctContents.kpi2 < '12.8')?'green':(communityDevelopmentOctContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi3 == null)?'grey-2':(communityDevelopmentOctContents.kpi3 >= '0' && communityDevelopmentOctContents.kpi3 <= '5.6')?'red':(communityDevelopmentOctContents.kpi3 > '5.6' && communityDevelopmentOctContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentOctContents.kpi3 > '7.466666667' && communityDevelopmentOctContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentOctContents.kpi3 >= '9.333333333' && communityDevelopmentOctContents.kpi3 < '11.2')?'green':(communityDevelopmentOctContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentNovContents.kpi1 == null)?'grey-2':(communityDevelopmentNovContents.kpi1 >= '0' && communityDevelopmentNovContents.kpi1 <= '127')?'red':(communityDevelopmentNovContents.kpi1 > '127' && communityDevelopmentNovContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentNovContents.kpi1 > '169.3333333' && communityDevelopmentNovContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentNovContents.kpi1 >= '211.6666667' && communityDevelopmentNovContents.kpi1 < '254')?'green':(communityDevelopmentNovContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi2 == null)?'grey-2':(communityDevelopmentNovContents.kpi2 >= '0' && communityDevelopmentNovContents.kpi2 <= '6.4')?'red':(communityDevelopmentNovContents.kpi2 > '6.4' && communityDevelopmentNovContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentNovContents.kpi2 > '8.533333333' && communityDevelopmentNovContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentNovContents.kpi2 >= '10.66666667' && communityDevelopmentNovContents.kpi2 < '12.8')?'green':(communityDevelopmentNovContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi3 == null)?'grey-2':(communityDevelopmentNovContents.kpi3 >= '0' && communityDevelopmentNovContents.kpi3 <= '5.6')?'red':(communityDevelopmentNovContents.kpi3 > '5.6' && communityDevelopmentNovContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentNovContents.kpi3 > '7.466666667' && communityDevelopmentNovContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentNovContents.kpi3 >= '9.333333333' && communityDevelopmentNovContents.kpi3 < '11.2')?'green':(communityDevelopmentNovContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentDecContents.kpi1 == null)?'grey-2':(communityDevelopmentDecContents.kpi1 >= '0' && communityDevelopmentDecContents.kpi1 <= '127')?'red':(communityDevelopmentDecContents.kpi1 > '127' && communityDevelopmentDecContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentDecContents.kpi1 > '169.3333333' && communityDevelopmentDecContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentDecContents.kpi1 >= '211.6666667' && communityDevelopmentDecContents.kpi1 < '254')?'green':(communityDevelopmentDecContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi2 == null)?'grey-2':(communityDevelopmentDecContents.kpi2 >= '0' && communityDevelopmentDecContents.kpi2 <= '6.4')?'red':(communityDevelopmentDecContents.kpi2 > '6.4' && communityDevelopmentDecContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentDecContents.kpi2 > '8.533333333' && communityDevelopmentDecContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentDecContents.kpi2 >= '10.66666667' && communityDevelopmentDecContents.kpi2 < '12.8')?'green':(communityDevelopmentDecContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi3 == null)?'grey-2':(communityDevelopmentDecContents.kpi3 >= '0' && communityDevelopmentDecContents.kpi3 <= '5.6')?'red':(communityDevelopmentDecContents.kpi3 > '5.6' && communityDevelopmentDecContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentDecContents.kpi3 > '7.466666667' && communityDevelopmentDecContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentDecContents.kpi3 >= '9.333333333' && communityDevelopmentDecContents.kpi3 < '11.2')?'green':(communityDevelopmentDecContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                                <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of collaborative initiatives</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJanContents.kpi1 == null)?'grey-2':(communityDevelopmentJanContents.kpi1 >= '0' && communityDevelopmentJanContents.kpi1 <= '127')?'red':(communityDevelopmentJanContents.kpi1 > '127' && communityDevelopmentJanContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJanContents.kpi1 > '169.3333333' && communityDevelopmentJanContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJanContents.kpi1 >= '211.6666667' && communityDevelopmentJanContents.kpi1 < '254')?'green':(communityDevelopmentJanContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi2 == null)?'grey-2':(communityDevelopmentJanContents.kpi2 >= '0' && communityDevelopmentJanContents.kpi2 <= '6.4')?'red':(communityDevelopmentJanContents.kpi2 > '6.4' && communityDevelopmentJanContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJanContents.kpi2 > '8.533333333' && communityDevelopmentJanContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJanContents.kpi2 >= '10.66666667' && communityDevelopmentJanContents.kpi2 < '12.8')?'green':(communityDevelopmentJanContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi3 == null)?'grey-2':(communityDevelopmentJanContents.kpi3 >= '0' && communityDevelopmentJanContents.kpi3 <= '5.6')?'red':(communityDevelopmentJanContents.kpi3 > '5.6' && communityDevelopmentJanContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJanContents.kpi3 > '7.466666667' && communityDevelopmentJanContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJanContents.kpi3 >= '9.333333333' && communityDevelopmentJanContents.kpi3 < '11.2')?'green':(communityDevelopmentJanContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentFebContents.kpi1 == null)?'grey-2':(communityDevelopmentFebContents.kpi1 >= '0' && communityDevelopmentFebContents.kpi1 <= '127')?'red':(communityDevelopmentFebContents.kpi1 > '127' && communityDevelopmentFebContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentFebContents.kpi1 > '169.3333333' && communityDevelopmentFebContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentFebContents.kpi1 >= '211.6666667' && communityDevelopmentFebContents.kpi1 < '254')?'green':(communityDevelopmentFebContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi2 == null)?'grey-2':(communityDevelopmentFebContents.kpi2 >= '0' && communityDevelopmentFebContents.kpi2 <= '6.4')?'red':(communityDevelopmentFebContents.kpi2 > '6.4' && communityDevelopmentFebContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentFebContents.kpi2 > '8.533333333' && communityDevelopmentFebContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentFebContents.kpi2 >= '10.66666667' && communityDevelopmentFebContents.kpi2 < '12.8')?'green':(communityDevelopmentFebContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi3 == null)?'grey-2':(communityDevelopmentFebContents.kpi3 >= '0' && communityDevelopmentFebContents.kpi3 <= '5.6')?'red':(communityDevelopmentFebContents.kpi3 > '5.6' && communityDevelopmentFebContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentFebContents.kpi3 > '7.466666667' && communityDevelopmentFebContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentFebContents.kpi3 >= '9.333333333' && communityDevelopmentFebContents.kpi3 < '11.2')?'green':(communityDevelopmentFebContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMarContents.kpi1 == null)?'grey-2':(communityDevelopmentMarContents.kpi1 >= '0' && communityDevelopmentMarContents.kpi1 <= '127')?'red':(communityDevelopmentMarContents.kpi1 > '127' && communityDevelopmentMarContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMarContents.kpi1 > '169.3333333' && communityDevelopmentMarContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMarContents.kpi1 >= '211.6666667' && communityDevelopmentMarContents.kpi1 < '254')?'green':(communityDevelopmentMarContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi2 == null)?'grey-2':(communityDevelopmentMarContents.kpi2 >= '0' && communityDevelopmentMarContents.kpi2 <= '6.4')?'red':(communityDevelopmentMarContents.kpi2 > '6.4' && communityDevelopmentMarContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMarContents.kpi2 > '8.533333333' && communityDevelopmentMarContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMarContents.kpi2 >= '10.66666667' && communityDevelopmentMarContents.kpi2 < '12.8')?'green':(communityDevelopmentMarContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi3 == null)?'grey-2':(communityDevelopmentMarContents.kpi3 >= '0' && communityDevelopmentMarContents.kpi3 <= '5.6')?'red':(communityDevelopmentMarContents.kpi3 > '5.6' && communityDevelopmentMarContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMarContents.kpi3 > '7.466666667' && communityDevelopmentMarContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMarContents.kpi3 >= '9.333333333' && communityDevelopmentMarContents.kpi3 < '11.2')?'green':(communityDevelopmentMarContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAprContents.kpi1 == null)?'grey-2':(communityDevelopmentAprContents.kpi1 >= '0' && communityDevelopmentAprContents.kpi1 <= '127')?'red':(communityDevelopmentAprContents.kpi1 > '127' && communityDevelopmentAprContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAprContents.kpi1 > '169.3333333' && communityDevelopmentAprContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAprContents.kpi1 >= '211.6666667' && communityDevelopmentAprContents.kpi1 < '254')?'green':(communityDevelopmentAprContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi2 == null)?'grey-2':(communityDevelopmentAprContents.kpi2 >= '0' && communityDevelopmentAprContents.kpi2 <= '6.4')?'red':(communityDevelopmentAprContents.kpi2 > '6.4' && communityDevelopmentAprContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAprContents.kpi2 > '8.533333333' && communityDevelopmentAprContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAprContents.kpi2 >= '10.66666667' && communityDevelopmentAprContents.kpi2 < '12.8')?'green':(communityDevelopmentAprContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi3 == null)?'grey-2':(communityDevelopmentAprContents.kpi3 >= '0' && communityDevelopmentAprContents.kpi3 <= '5.6')?'red':(communityDevelopmentAprContents.kpi3 > '5.6' && communityDevelopmentAprContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAprContents.kpi3 > '7.466666667' && communityDevelopmentAprContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAprContents.kpi3 >= '9.333333333' && communityDevelopmentAprContents.kpi3 < '11.2')?'green':(communityDevelopmentAprContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMayContents.kpi1 == null)?'grey-2':(communityDevelopmentMayContents.kpi1 >= '0' && communityDevelopmentMayContents.kpi1 <= '127')?'red':(communityDevelopmentMayContents.kpi1 > '127' && communityDevelopmentMayContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMayContents.kpi1 > '169.3333333' && communityDevelopmentMayContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMayContents.kpi1 >= '211.6666667' && communityDevelopmentMayContents.kpi1 < '254')?'green':(communityDevelopmentMayContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi2 == null)?'grey-2':(communityDevelopmentMayContents.kpi2 >= '0' && communityDevelopmentMayContents.kpi2 <= '6.4')?'red':(communityDevelopmentMayContents.kpi2 > '6.4' && communityDevelopmentMayContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMayContents.kpi2 > '8.533333333' && communityDevelopmentMayContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMayContents.kpi2 >= '10.66666667' && communityDevelopmentMayContents.kpi2 < '12.8')?'green':(communityDevelopmentMayContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi3 == null)?'grey-2':(communityDevelopmentMayContents.kpi3 >= '0' && communityDevelopmentMayContents.kpi3 <= '5.6')?'red':(communityDevelopmentMayContents.kpi3 > '5.6' && communityDevelopmentMayContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMayContents.kpi3 > '7.466666667' && communityDevelopmentMayContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMayContents.kpi3 >= '9.333333333' && communityDevelopmentMayContents.kpi3 < '11.2')?'green':(communityDevelopmentMayContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJunContents.kpi1 == null)?'grey-2':(communityDevelopmentJunContents.kpi1 >= '0' && communityDevelopmentJunContents.kpi1 <= '127')?'red':(communityDevelopmentJunContents.kpi1 > '127' && communityDevelopmentJunContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJunContents.kpi1 > '169.3333333' && communityDevelopmentJunContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJunContents.kpi1 >= '211.6666667' && communityDevelopmentJunContents.kpi1 < '254')?'green':(communityDevelopmentJunContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi2 == null)?'grey-2':(communityDevelopmentJunContents.kpi2 >= '0' && communityDevelopmentJunContents.kpi2 <= '6.4')?'red':(communityDevelopmentJunContents.kpi2 > '6.4' && communityDevelopmentJunContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJunContents.kpi2 > '8.533333333' && communityDevelopmentJunContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJunContents.kpi2 >= '10.66666667' && communityDevelopmentJunContents.kpi2 < '12.8')?'green':(communityDevelopmentJunContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi3 == null)?'grey-2':(communityDevelopmentJunContents.kpi3 >= '0' && communityDevelopmentJunContents.kpi3 <= '5.6')?'red':(communityDevelopmentJunContents.kpi3 > '5.6' && communityDevelopmentJunContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJunContents.kpi3 > '7.466666667' && communityDevelopmentJunContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJunContents.kpi3 >= '9.333333333' && communityDevelopmentJunContents.kpi3 < '11.2')?'green':(communityDevelopmentJunContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJulContents.kpi1 == null)?'grey-2':(communityDevelopmentJulContents.kpi1 >= '0' && communityDevelopmentJulContents.kpi1 <= '127')?'red':(communityDevelopmentJulContents.kpi1 > '127' && communityDevelopmentJulContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJulContents.kpi1 > '169.3333333' && communityDevelopmentJulContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJulContents.kpi1 >= '211.6666667' && communityDevelopmentJulContents.kpi1 < '254')?'green':(communityDevelopmentJulContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi2 == null)?'grey-2':(communityDevelopmentJulContents.kpi2 >= '0' && communityDevelopmentJulContents.kpi2 <= '6.4')?'red':(communityDevelopmentJulContents.kpi2 > '6.4' && communityDevelopmentJulContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJulContents.kpi2 > '8.533333333' && communityDevelopmentJulContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJulContents.kpi2 >= '10.66666667' && communityDevelopmentJulContents.kpi2 < '12.8')?'green':(communityDevelopmentJulContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi3 == null)?'grey-2':(communityDevelopmentJulContents.kpi3 >= '0' && communityDevelopmentJulContents.kpi3 <= '5.6')?'red':(communityDevelopmentJulContents.kpi3 > '5.6' && communityDevelopmentJulContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJulContents.kpi3 > '7.466666667' && communityDevelopmentJulContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJulContents.kpi3 >= '9.333333333' && communityDevelopmentJulContents.kpi3 < '11.2')?'green':(communityDevelopmentJulContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAugContents.kpi1 == null)?'grey-2':(communityDevelopmentAugContents.kpi1 >= '0' && communityDevelopmentAugContents.kpi1 <= '127')?'red':(communityDevelopmentAugContents.kpi1 > '127' && communityDevelopmentAugContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAugContents.kpi1 > '169.3333333' && communityDevelopmentAugContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAugContents.kpi1 >= '211.6666667' && communityDevelopmentAugContents.kpi1 < '254')?'green':(communityDevelopmentAugContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi2 == null)?'grey-2':(communityDevelopmentAugContents.kpi2 >= '0' && communityDevelopmentAugContents.kpi2 <= '6.4')?'red':(communityDevelopmentAugContents.kpi2 > '6.4' && communityDevelopmentAugContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAugContents.kpi2 > '8.533333333' && communityDevelopmentAugContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAugContents.kpi2 >= '10.66666667' && communityDevelopmentAugContents.kpi2 < '12.8')?'green':(communityDevelopmentAugContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi3 == null)?'grey-2':(communityDevelopmentAugContents.kpi3 >= '0' && communityDevelopmentAugContents.kpi3 <= '5.6')?'red':(communityDevelopmentAugContents.kpi3 > '5.6' && communityDevelopmentAugContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAugContents.kpi3 > '7.466666667' && communityDevelopmentAugContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAugContents.kpi3 >= '9.333333333' && communityDevelopmentAugContents.kpi3 < '11.2')?'green':(communityDevelopmentAugContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentSepContents.kpi1 == null)?'grey-2':(communityDevelopmentSepContents.kpi1 >= '0' && communityDevelopmentSepContents.kpi1 <= '127')?'red':(communityDevelopmentSepContents.kpi1 > '127' && communityDevelopmentSepContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentSepContents.kpi1 > '169.3333333' && communityDevelopmentSepContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentSepContents.kpi1 >= '211.6666667' && communityDevelopmentSepContents.kpi1 < '254')?'green':(communityDevelopmentSepContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi2 == null)?'grey-2':(communityDevelopmentSepContents.kpi2 >= '0' && communityDevelopmentSepContents.kpi2 <= '6.4')?'red':(communityDevelopmentSepContents.kpi2 > '6.4' && communityDevelopmentSepContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentSepContents.kpi2 > '8.533333333' && communityDevelopmentSepContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentSepContents.kpi2 >= '10.66666667' && communityDevelopmentSepContents.kpi2 < '12.8')?'green':(communityDevelopmentSepContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi3 == null)?'grey-2':(communityDevelopmentSepContents.kpi3 >= '0' && communityDevelopmentSepContents.kpi3 <= '5.6')?'red':(communityDevelopmentSepContents.kpi3 > '5.6' && communityDevelopmentSepContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentSepContents.kpi3 > '7.466666667' && communityDevelopmentSepContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentSepContents.kpi3 >= '9.333333333' && communityDevelopmentSepContents.kpi3 < '11.2')?'green':(communityDevelopmentSepContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentOctContents.kpi1 == null)?'grey-2':(communityDevelopmentOctContents.kpi1 >= '0' && communityDevelopmentOctContents.kpi1 <= '127')?'red':(communityDevelopmentOctContents.kpi1 > '127' && communityDevelopmentOctContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentOctContents.kpi1 > '169.3333333' && communityDevelopmentOctContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentOctContents.kpi1 >= '211.6666667' && communityDevelopmentOctContents.kpi1 < '254')?'green':(communityDevelopmentOctContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi2 == null)?'grey-2':(communityDevelopmentOctContents.kpi2 >= '0' && communityDevelopmentOctContents.kpi2 <= '6.4')?'red':(communityDevelopmentOctContents.kpi2 > '6.4' && communityDevelopmentOctContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentOctContents.kpi2 > '8.533333333' && communityDevelopmentOctContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentOctContents.kpi2 >= '10.66666667' && communityDevelopmentOctContents.kpi2 < '12.8')?'green':(communityDevelopmentOctContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi3 == null)?'grey-2':(communityDevelopmentOctContents.kpi3 >= '0' && communityDevelopmentOctContents.kpi3 <= '5.6')?'red':(communityDevelopmentOctContents.kpi3 > '5.6' && communityDevelopmentOctContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentOctContents.kpi3 > '7.466666667' && communityDevelopmentOctContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentOctContents.kpi3 >= '9.333333333' && communityDevelopmentOctContents.kpi3 < '11.2')?'green':(communityDevelopmentOctContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentNovContents.kpi1 == null)?'grey-2':(communityDevelopmentNovContents.kpi1 >= '0' && communityDevelopmentNovContents.kpi1 <= '127')?'red':(communityDevelopmentNovContents.kpi1 > '127' && communityDevelopmentNovContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentNovContents.kpi1 > '169.3333333' && communityDevelopmentNovContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentNovContents.kpi1 >= '211.6666667' && communityDevelopmentNovContents.kpi1 < '254')?'green':(communityDevelopmentNovContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi2 == null)?'grey-2':(communityDevelopmentNovContents.kpi2 >= '0' && communityDevelopmentNovContents.kpi2 <= '6.4')?'red':(communityDevelopmentNovContents.kpi2 > '6.4' && communityDevelopmentNovContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentNovContents.kpi2 > '8.533333333' && communityDevelopmentNovContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentNovContents.kpi2 >= '10.66666667' && communityDevelopmentNovContents.kpi2 < '12.8')?'green':(communityDevelopmentNovContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi3 == null)?'grey-2':(communityDevelopmentNovContents.kpi3 >= '0' && communityDevelopmentNovContents.kpi3 <= '5.6')?'red':(communityDevelopmentNovContents.kpi3 > '5.6' && communityDevelopmentNovContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentNovContents.kpi3 > '7.466666667' && communityDevelopmentNovContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentNovContents.kpi3 >= '9.333333333' && communityDevelopmentNovContents.kpi3 < '11.2')?'green':(communityDevelopmentNovContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentDecContents.kpi1 == null)?'grey-2':(communityDevelopmentDecContents.kpi1 >= '0' && communityDevelopmentDecContents.kpi1 <= '127')?'red':(communityDevelopmentDecContents.kpi1 > '127' && communityDevelopmentDecContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentDecContents.kpi1 > '169.3333333' && communityDevelopmentDecContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentDecContents.kpi1 >= '211.6666667' && communityDevelopmentDecContents.kpi1 < '254')?'green':(communityDevelopmentDecContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi2 == null)?'grey-2':(communityDevelopmentDecContents.kpi2 >= '0' && communityDevelopmentDecContents.kpi2 <= '6.4')?'red':(communityDevelopmentDecContents.kpi2 > '6.4' && communityDevelopmentDecContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentDecContents.kpi2 > '8.533333333' && communityDevelopmentDecContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentDecContents.kpi2 >= '10.66666667' && communityDevelopmentDecContents.kpi2 < '12.8')?'green':(communityDevelopmentDecContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi3 == null)?'grey-2':(communityDevelopmentDecContents.kpi3 >= '0' && communityDevelopmentDecContents.kpi3 <= '5.6')?'red':(communityDevelopmentDecContents.kpi3 > '5.6' && communityDevelopmentDecContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentDecContents.kpi3 > '7.466666667' && communityDevelopmentDecContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentDecContents.kpi3 >= '9.333333333' && communityDevelopmentDecContents.kpi3 < '11.2')?'green':(communityDevelopmentDecContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                                <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of collaborative initiatives</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJanContents.kpi1 == null)?'grey-2':(communityDevelopmentJanContents.kpi1 >= '0' && communityDevelopmentJanContents.kpi1 <= '127')?'red':(communityDevelopmentJanContents.kpi1 > '127' && communityDevelopmentJanContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJanContents.kpi1 > '169.3333333' && communityDevelopmentJanContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJanContents.kpi1 >= '211.6666667' && communityDevelopmentJanContents.kpi1 < '254')?'green':(communityDevelopmentJanContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi2 == null)?'grey-2':(communityDevelopmentJanContents.kpi2 >= '0' && communityDevelopmentJanContents.kpi2 <= '6.4')?'red':(communityDevelopmentJanContents.kpi2 > '6.4' && communityDevelopmentJanContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJanContents.kpi2 > '8.533333333' && communityDevelopmentJanContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJanContents.kpi2 >= '10.66666667' && communityDevelopmentJanContents.kpi2 < '12.8')?'green':(communityDevelopmentJanContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi3 == null)?'grey-2':(communityDevelopmentJanContents.kpi3 >= '0' && communityDevelopmentJanContents.kpi3 <= '5.6')?'red':(communityDevelopmentJanContents.kpi3 > '5.6' && communityDevelopmentJanContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJanContents.kpi3 > '7.466666667' && communityDevelopmentJanContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJanContents.kpi3 >= '9.333333333' && communityDevelopmentJanContents.kpi3 < '11.2')?'green':(communityDevelopmentJanContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentFebContents.kpi1 == null)?'grey-2':(communityDevelopmentFebContents.kpi1 >= '0' && communityDevelopmentFebContents.kpi1 <= '127')?'red':(communityDevelopmentFebContents.kpi1 > '127' && communityDevelopmentFebContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentFebContents.kpi1 > '169.3333333' && communityDevelopmentFebContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentFebContents.kpi1 >= '211.6666667' && communityDevelopmentFebContents.kpi1 < '254')?'green':(communityDevelopmentFebContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi2 == null)?'grey-2':(communityDevelopmentFebContents.kpi2 >= '0' && communityDevelopmentFebContents.kpi2 <= '6.4')?'red':(communityDevelopmentFebContents.kpi2 > '6.4' && communityDevelopmentFebContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentFebContents.kpi2 > '8.533333333' && communityDevelopmentFebContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentFebContents.kpi2 >= '10.66666667' && communityDevelopmentFebContents.kpi2 < '12.8')?'green':(communityDevelopmentFebContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi3 == null)?'grey-2':(communityDevelopmentFebContents.kpi3 >= '0' && communityDevelopmentFebContents.kpi3 <= '5.6')?'red':(communityDevelopmentFebContents.kpi3 > '5.6' && communityDevelopmentFebContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentFebContents.kpi3 > '7.466666667' && communityDevelopmentFebContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentFebContents.kpi3 >= '9.333333333' && communityDevelopmentFebContents.kpi3 < '11.2')?'green':(communityDevelopmentFebContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMarContents.kpi1 == null)?'grey-2':(communityDevelopmentMarContents.kpi1 >= '0' && communityDevelopmentMarContents.kpi1 <= '127')?'red':(communityDevelopmentMarContents.kpi1 > '127' && communityDevelopmentMarContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMarContents.kpi1 > '169.3333333' && communityDevelopmentMarContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMarContents.kpi1 >= '211.6666667' && communityDevelopmentMarContents.kpi1 < '254')?'green':(communityDevelopmentMarContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi2 == null)?'grey-2':(communityDevelopmentMarContents.kpi2 >= '0' && communityDevelopmentMarContents.kpi2 <= '6.4')?'red':(communityDevelopmentMarContents.kpi2 > '6.4' && communityDevelopmentMarContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMarContents.kpi2 > '8.533333333' && communityDevelopmentMarContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMarContents.kpi2 >= '10.66666667' && communityDevelopmentMarContents.kpi2 < '12.8')?'green':(communityDevelopmentMarContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi3 == null)?'grey-2':(communityDevelopmentMarContents.kpi3 >= '0' && communityDevelopmentMarContents.kpi3 <= '5.6')?'red':(communityDevelopmentMarContents.kpi3 > '5.6' && communityDevelopmentMarContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMarContents.kpi3 > '7.466666667' && communityDevelopmentMarContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMarContents.kpi3 >= '9.333333333' && communityDevelopmentMarContents.kpi3 < '11.2')?'green':(communityDevelopmentMarContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAprContents.kpi1 == null)?'grey-2':(communityDevelopmentAprContents.kpi1 >= '0' && communityDevelopmentAprContents.kpi1 <= '127')?'red':(communityDevelopmentAprContents.kpi1 > '127' && communityDevelopmentAprContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAprContents.kpi1 > '169.3333333' && communityDevelopmentAprContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAprContents.kpi1 >= '211.6666667' && communityDevelopmentAprContents.kpi1 < '254')?'green':(communityDevelopmentAprContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi2 == null)?'grey-2':(communityDevelopmentAprContents.kpi2 >= '0' && communityDevelopmentAprContents.kpi2 <= '6.4')?'red':(communityDevelopmentAprContents.kpi2 > '6.4' && communityDevelopmentAprContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAprContents.kpi2 > '8.533333333' && communityDevelopmentAprContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAprContents.kpi2 >= '10.66666667' && communityDevelopmentAprContents.kpi2 < '12.8')?'green':(communityDevelopmentAprContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi3 == null)?'grey-2':(communityDevelopmentAprContents.kpi3 >= '0' && communityDevelopmentAprContents.kpi3 <= '5.6')?'red':(communityDevelopmentAprContents.kpi3 > '5.6' && communityDevelopmentAprContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAprContents.kpi3 > '7.466666667' && communityDevelopmentAprContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAprContents.kpi3 >= '9.333333333' && communityDevelopmentAprContents.kpi3 < '11.2')?'green':(communityDevelopmentAprContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMayContents.kpi1 == null)?'grey-2':(communityDevelopmentMayContents.kpi1 >= '0' && communityDevelopmentMayContents.kpi1 <= '127')?'red':(communityDevelopmentMayContents.kpi1 > '127' && communityDevelopmentMayContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMayContents.kpi1 > '169.3333333' && communityDevelopmentMayContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMayContents.kpi1 >= '211.6666667' && communityDevelopmentMayContents.kpi1 < '254')?'green':(communityDevelopmentMayContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi2 == null)?'grey-2':(communityDevelopmentMayContents.kpi2 >= '0' && communityDevelopmentMayContents.kpi2 <= '6.4')?'red':(communityDevelopmentMayContents.kpi2 > '6.4' && communityDevelopmentMayContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMayContents.kpi2 > '8.533333333' && communityDevelopmentMayContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMayContents.kpi2 >= '10.66666667' && communityDevelopmentMayContents.kpi2 < '12.8')?'green':(communityDevelopmentMayContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi3 == null)?'grey-2':(communityDevelopmentMayContents.kpi3 >= '0' && communityDevelopmentMayContents.kpi3 <= '5.6')?'red':(communityDevelopmentMayContents.kpi3 > '5.6' && communityDevelopmentMayContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMayContents.kpi3 > '7.466666667' && communityDevelopmentMayContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMayContents.kpi3 >= '9.333333333' && communityDevelopmentMayContents.kpi3 < '11.2')?'green':(communityDevelopmentMayContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJunContents.kpi1 == null)?'grey-2':(communityDevelopmentJunContents.kpi1 >= '0' && communityDevelopmentJunContents.kpi1 <= '127')?'red':(communityDevelopmentJunContents.kpi1 > '127' && communityDevelopmentJunContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJunContents.kpi1 > '169.3333333' && communityDevelopmentJunContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJunContents.kpi1 >= '211.6666667' && communityDevelopmentJunContents.kpi1 < '254')?'green':(communityDevelopmentJunContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi2 == null)?'grey-2':(communityDevelopmentJunContents.kpi2 >= '0' && communityDevelopmentJunContents.kpi2 <= '6.4')?'red':(communityDevelopmentJunContents.kpi2 > '6.4' && communityDevelopmentJunContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJunContents.kpi2 > '8.533333333' && communityDevelopmentJunContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJunContents.kpi2 >= '10.66666667' && communityDevelopmentJunContents.kpi2 < '12.8')?'green':(communityDevelopmentJunContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi3 == null)?'grey-2':(communityDevelopmentJunContents.kpi3 >= '0' && communityDevelopmentJunContents.kpi3 <= '5.6')?'red':(communityDevelopmentJunContents.kpi3 > '5.6' && communityDevelopmentJunContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJunContents.kpi3 > '7.466666667' && communityDevelopmentJunContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJunContents.kpi3 >= '9.333333333' && communityDevelopmentJunContents.kpi3 < '11.2')?'green':(communityDevelopmentJunContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJulContents.kpi1 == null)?'grey-2':(communityDevelopmentJulContents.kpi1 >= '0' && communityDevelopmentJulContents.kpi1 <= '127')?'red':(communityDevelopmentJulContents.kpi1 > '127' && communityDevelopmentJulContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJulContents.kpi1 > '169.3333333' && communityDevelopmentJulContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJulContents.kpi1 >= '211.6666667' && communityDevelopmentJulContents.kpi1 < '254')?'green':(communityDevelopmentJulContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi2 == null)?'grey-2':(communityDevelopmentJulContents.kpi2 >= '0' && communityDevelopmentJulContents.kpi2 <= '6.4')?'red':(communityDevelopmentJulContents.kpi2 > '6.4' && communityDevelopmentJulContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJulContents.kpi2 > '8.533333333' && communityDevelopmentJulContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJulContents.kpi2 >= '10.66666667' && communityDevelopmentJulContents.kpi2 < '12.8')?'green':(communityDevelopmentJulContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi3 == null)?'grey-2':(communityDevelopmentJulContents.kpi3 >= '0' && communityDevelopmentJulContents.kpi3 <= '5.6')?'red':(communityDevelopmentJulContents.kpi3 > '5.6' && communityDevelopmentJulContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJulContents.kpi3 > '7.466666667' && communityDevelopmentJulContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJulContents.kpi3 >= '9.333333333' && communityDevelopmentJulContents.kpi3 < '11.2')?'green':(communityDevelopmentJulContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAugContents.kpi1 == null)?'grey-2':(communityDevelopmentAugContents.kpi1 >= '0' && communityDevelopmentAugContents.kpi1 <= '127')?'red':(communityDevelopmentAugContents.kpi1 > '127' && communityDevelopmentAugContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAugContents.kpi1 > '169.3333333' && communityDevelopmentAugContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAugContents.kpi1 >= '211.6666667' && communityDevelopmentAugContents.kpi1 < '254')?'green':(communityDevelopmentAugContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi2 == null)?'grey-2':(communityDevelopmentAugContents.kpi2 >= '0' && communityDevelopmentAugContents.kpi2 <= '6.4')?'red':(communityDevelopmentAugContents.kpi2 > '6.4' && communityDevelopmentAugContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAugContents.kpi2 > '8.533333333' && communityDevelopmentAugContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAugContents.kpi2 >= '10.66666667' && communityDevelopmentAugContents.kpi2 < '12.8')?'green':(communityDevelopmentAugContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi3 == null)?'grey-2':(communityDevelopmentAugContents.kpi3 >= '0' && communityDevelopmentAugContents.kpi3 <= '5.6')?'red':(communityDevelopmentAugContents.kpi3 > '5.6' && communityDevelopmentAugContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAugContents.kpi3 > '7.466666667' && communityDevelopmentAugContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAugContents.kpi3 >= '9.333333333' && communityDevelopmentAugContents.kpi3 < '11.2')?'green':(communityDevelopmentAugContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentSepContents.kpi1 == null)?'grey-2':(communityDevelopmentSepContents.kpi1 >= '0' && communityDevelopmentSepContents.kpi1 <= '127')?'red':(communityDevelopmentSepContents.kpi1 > '127' && communityDevelopmentSepContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentSepContents.kpi1 > '169.3333333' && communityDevelopmentSepContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentSepContents.kpi1 >= '211.6666667' && communityDevelopmentSepContents.kpi1 < '254')?'green':(communityDevelopmentSepContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi2 == null)?'grey-2':(communityDevelopmentSepContents.kpi2 >= '0' && communityDevelopmentSepContents.kpi2 <= '6.4')?'red':(communityDevelopmentSepContents.kpi2 > '6.4' && communityDevelopmentSepContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentSepContents.kpi2 > '8.533333333' && communityDevelopmentSepContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentSepContents.kpi2 >= '10.66666667' && communityDevelopmentSepContents.kpi2 < '12.8')?'green':(communityDevelopmentSepContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi3 == null)?'grey-2':(communityDevelopmentSepContents.kpi3 >= '0' && communityDevelopmentSepContents.kpi3 <= '5.6')?'red':(communityDevelopmentSepContents.kpi3 > '5.6' && communityDevelopmentSepContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentSepContents.kpi3 > '7.466666667' && communityDevelopmentSepContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentSepContents.kpi3 >= '9.333333333' && communityDevelopmentSepContents.kpi3 < '11.2')?'green':(communityDevelopmentSepContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentOctContents.kpi1 == null)?'grey-2':(communityDevelopmentOctContents.kpi1 >= '0' && communityDevelopmentOctContents.kpi1 <= '127')?'red':(communityDevelopmentOctContents.kpi1 > '127' && communityDevelopmentOctContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentOctContents.kpi1 > '169.3333333' && communityDevelopmentOctContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentOctContents.kpi1 >= '211.6666667' && communityDevelopmentOctContents.kpi1 < '254')?'green':(communityDevelopmentOctContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi2 == null)?'grey-2':(communityDevelopmentOctContents.kpi2 >= '0' && communityDevelopmentOctContents.kpi2 <= '6.4')?'red':(communityDevelopmentOctContents.kpi2 > '6.4' && communityDevelopmentOctContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentOctContents.kpi2 > '8.533333333' && communityDevelopmentOctContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentOctContents.kpi2 >= '10.66666667' && communityDevelopmentOctContents.kpi2 < '12.8')?'green':(communityDevelopmentOctContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi3 == null)?'grey-2':(communityDevelopmentOctContents.kpi3 >= '0' && communityDevelopmentOctContents.kpi3 <= '5.6')?'red':(communityDevelopmentOctContents.kpi3 > '5.6' && communityDevelopmentOctContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentOctContents.kpi3 > '7.466666667' && communityDevelopmentOctContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentOctContents.kpi3 >= '9.333333333' && communityDevelopmentOctContents.kpi3 < '11.2')?'green':(communityDevelopmentOctContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentNovContents.kpi1 == null)?'grey-2':(communityDevelopmentNovContents.kpi1 >= '0' && communityDevelopmentNovContents.kpi1 <= '127')?'red':(communityDevelopmentNovContents.kpi1 > '127' && communityDevelopmentNovContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentNovContents.kpi1 > '169.3333333' && communityDevelopmentNovContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentNovContents.kpi1 >= '211.6666667' && communityDevelopmentNovContents.kpi1 < '254')?'green':(communityDevelopmentNovContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi2 == null)?'grey-2':(communityDevelopmentNovContents.kpi2 >= '0' && communityDevelopmentNovContents.kpi2 <= '6.4')?'red':(communityDevelopmentNovContents.kpi2 > '6.4' && communityDevelopmentNovContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentNovContents.kpi2 > '8.533333333' && communityDevelopmentNovContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentNovContents.kpi2 >= '10.66666667' && communityDevelopmentNovContents.kpi2 < '12.8')?'green':(communityDevelopmentNovContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi3 == null)?'grey-2':(communityDevelopmentNovContents.kpi3 >= '0' && communityDevelopmentNovContents.kpi3 <= '5.6')?'red':(communityDevelopmentNovContents.kpi3 > '5.6' && communityDevelopmentNovContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentNovContents.kpi3 > '7.466666667' && communityDevelopmentNovContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentNovContents.kpi3 >= '9.333333333' && communityDevelopmentNovContents.kpi3 < '11.2')?'green':(communityDevelopmentNovContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentDecContents.kpi1 == null)?'grey-2':(communityDevelopmentDecContents.kpi1 >= '0' && communityDevelopmentDecContents.kpi1 <= '127')?'red':(communityDevelopmentDecContents.kpi1 > '127' && communityDevelopmentDecContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentDecContents.kpi1 > '169.3333333' && communityDevelopmentDecContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentDecContents.kpi1 >= '211.6666667' && communityDevelopmentDecContents.kpi1 < '254')?'green':(communityDevelopmentDecContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi2 == null)?'grey-2':(communityDevelopmentDecContents.kpi2 >= '0' && communityDevelopmentDecContents.kpi2 <= '6.4')?'red':(communityDevelopmentDecContents.kpi2 > '6.4' && communityDevelopmentDecContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentDecContents.kpi2 > '8.533333333' && communityDevelopmentDecContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentDecContents.kpi2 >= '10.66666667' && communityDevelopmentDecContents.kpi2 < '12.8')?'green':(communityDevelopmentDecContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi3 == null)?'grey-2':(communityDevelopmentDecContents.kpi3 >= '0' && communityDevelopmentDecContents.kpi3 <= '5.6')?'red':(communityDevelopmentDecContents.kpi3 > '5.6' && communityDevelopmentDecContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentDecContents.kpi3 > '7.466666667' && communityDevelopmentDecContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentDecContents.kpi3 >= '9.333333333' && communityDevelopmentDecContents.kpi3 < '11.2')?'green':(communityDevelopmentDecContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                                <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of collaborative initiatives</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJanContents.kpi1 == null)?'grey-2':(communityDevelopmentJanContents.kpi1 >= '0' && communityDevelopmentJanContents.kpi1 <= '127')?'red':(communityDevelopmentJanContents.kpi1 > '127' && communityDevelopmentJanContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJanContents.kpi1 > '169.3333333' && communityDevelopmentJanContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJanContents.kpi1 >= '211.6666667' && communityDevelopmentJanContents.kpi1 < '254')?'green':(communityDevelopmentJanContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi2 == null)?'grey-2':(communityDevelopmentJanContents.kpi2 >= '0' && communityDevelopmentJanContents.kpi2 <= '6.4')?'red':(communityDevelopmentJanContents.kpi2 > '6.4' && communityDevelopmentJanContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJanContents.kpi2 > '8.533333333' && communityDevelopmentJanContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJanContents.kpi2 >= '10.66666667' && communityDevelopmentJanContents.kpi2 < '12.8')?'green':(communityDevelopmentJanContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi3 == null)?'grey-2':(communityDevelopmentJanContents.kpi3 >= '0' && communityDevelopmentJanContents.kpi3 <= '5.6')?'red':(communityDevelopmentJanContents.kpi3 > '5.6' && communityDevelopmentJanContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJanContents.kpi3 > '7.466666667' && communityDevelopmentJanContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJanContents.kpi3 >= '9.333333333' && communityDevelopmentJanContents.kpi3 < '11.2')?'green':(communityDevelopmentJanContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentFebContents.kpi1 == null)?'grey-2':(communityDevelopmentFebContents.kpi1 >= '0' && communityDevelopmentFebContents.kpi1 <= '127')?'red':(communityDevelopmentFebContents.kpi1 > '127' && communityDevelopmentFebContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentFebContents.kpi1 > '169.3333333' && communityDevelopmentFebContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentFebContents.kpi1 >= '211.6666667' && communityDevelopmentFebContents.kpi1 < '254')?'green':(communityDevelopmentFebContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi2 == null)?'grey-2':(communityDevelopmentFebContents.kpi2 >= '0' && communityDevelopmentFebContents.kpi2 <= '6.4')?'red':(communityDevelopmentFebContents.kpi2 > '6.4' && communityDevelopmentFebContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentFebContents.kpi2 > '8.533333333' && communityDevelopmentFebContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentFebContents.kpi2 >= '10.66666667' && communityDevelopmentFebContents.kpi2 < '12.8')?'green':(communityDevelopmentFebContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi3 == null)?'grey-2':(communityDevelopmentFebContents.kpi3 >= '0' && communityDevelopmentFebContents.kpi3 <= '5.6')?'red':(communityDevelopmentFebContents.kpi3 > '5.6' && communityDevelopmentFebContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentFebContents.kpi3 > '7.466666667' && communityDevelopmentFebContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentFebContents.kpi3 >= '9.333333333' && communityDevelopmentFebContents.kpi3 < '11.2')?'green':(communityDevelopmentFebContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMarContents.kpi1 == null)?'grey-2':(communityDevelopmentMarContents.kpi1 >= '0' && communityDevelopmentMarContents.kpi1 <= '127')?'red':(communityDevelopmentMarContents.kpi1 > '127' && communityDevelopmentMarContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMarContents.kpi1 > '169.3333333' && communityDevelopmentMarContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMarContents.kpi1 >= '211.6666667' && communityDevelopmentMarContents.kpi1 < '254')?'green':(communityDevelopmentMarContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi2 == null)?'grey-2':(communityDevelopmentMarContents.kpi2 >= '0' && communityDevelopmentMarContents.kpi2 <= '6.4')?'red':(communityDevelopmentMarContents.kpi2 > '6.4' && communityDevelopmentMarContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMarContents.kpi2 > '8.533333333' && communityDevelopmentMarContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMarContents.kpi2 >= '10.66666667' && communityDevelopmentMarContents.kpi2 < '12.8')?'green':(communityDevelopmentMarContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi3 == null)?'grey-2':(communityDevelopmentMarContents.kpi3 >= '0' && communityDevelopmentMarContents.kpi3 <= '5.6')?'red':(communityDevelopmentMarContents.kpi3 > '5.6' && communityDevelopmentMarContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMarContents.kpi3 > '7.466666667' && communityDevelopmentMarContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMarContents.kpi3 >= '9.333333333' && communityDevelopmentMarContents.kpi3 < '11.2')?'green':(communityDevelopmentMarContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAprContents.kpi1 == null)?'grey-2':(communityDevelopmentAprContents.kpi1 >= '0' && communityDevelopmentAprContents.kpi1 <= '127')?'red':(communityDevelopmentAprContents.kpi1 > '127' && communityDevelopmentAprContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAprContents.kpi1 > '169.3333333' && communityDevelopmentAprContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAprContents.kpi1 >= '211.6666667' && communityDevelopmentAprContents.kpi1 < '254')?'green':(communityDevelopmentAprContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi2 == null)?'grey-2':(communityDevelopmentAprContents.kpi2 >= '0' && communityDevelopmentAprContents.kpi2 <= '6.4')?'red':(communityDevelopmentAprContents.kpi2 > '6.4' && communityDevelopmentAprContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAprContents.kpi2 > '8.533333333' && communityDevelopmentAprContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAprContents.kpi2 >= '10.66666667' && communityDevelopmentAprContents.kpi2 < '12.8')?'green':(communityDevelopmentAprContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi3 == null)?'grey-2':(communityDevelopmentAprContents.kpi3 >= '0' && communityDevelopmentAprContents.kpi3 <= '5.6')?'red':(communityDevelopmentAprContents.kpi3 > '5.6' && communityDevelopmentAprContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAprContents.kpi3 > '7.466666667' && communityDevelopmentAprContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAprContents.kpi3 >= '9.333333333' && communityDevelopmentAprContents.kpi3 < '11.2')?'green':(communityDevelopmentAprContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMayContents.kpi1 == null)?'grey-2':(communityDevelopmentMayContents.kpi1 >= '0' && communityDevelopmentMayContents.kpi1 <= '127')?'red':(communityDevelopmentMayContents.kpi1 > '127' && communityDevelopmentMayContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMayContents.kpi1 > '169.3333333' && communityDevelopmentMayContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMayContents.kpi1 >= '211.6666667' && communityDevelopmentMayContents.kpi1 < '254')?'green':(communityDevelopmentMayContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi2 == null)?'grey-2':(communityDevelopmentMayContents.kpi2 >= '0' && communityDevelopmentMayContents.kpi2 <= '6.4')?'red':(communityDevelopmentMayContents.kpi2 > '6.4' && communityDevelopmentMayContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMayContents.kpi2 > '8.533333333' && communityDevelopmentMayContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMayContents.kpi2 >= '10.66666667' && communityDevelopmentMayContents.kpi2 < '12.8')?'green':(communityDevelopmentMayContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi3 == null)?'grey-2':(communityDevelopmentMayContents.kpi3 >= '0' && communityDevelopmentMayContents.kpi3 <= '5.6')?'red':(communityDevelopmentMayContents.kpi3 > '5.6' && communityDevelopmentMayContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMayContents.kpi3 > '7.466666667' && communityDevelopmentMayContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMayContents.kpi3 >= '9.333333333' && communityDevelopmentMayContents.kpi3 < '11.2')?'green':(communityDevelopmentMayContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJunContents.kpi1 == null)?'grey-2':(communityDevelopmentJunContents.kpi1 >= '0' && communityDevelopmentJunContents.kpi1 <= '127')?'red':(communityDevelopmentJunContents.kpi1 > '127' && communityDevelopmentJunContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJunContents.kpi1 > '169.3333333' && communityDevelopmentJunContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJunContents.kpi1 >= '211.6666667' && communityDevelopmentJunContents.kpi1 < '254')?'green':(communityDevelopmentJunContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi2 == null)?'grey-2':(communityDevelopmentJunContents.kpi2 >= '0' && communityDevelopmentJunContents.kpi2 <= '6.4')?'red':(communityDevelopmentJunContents.kpi2 > '6.4' && communityDevelopmentJunContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJunContents.kpi2 > '8.533333333' && communityDevelopmentJunContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJunContents.kpi2 >= '10.66666667' && communityDevelopmentJunContents.kpi2 < '12.8')?'green':(communityDevelopmentJunContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi3 == null)?'grey-2':(communityDevelopmentJunContents.kpi3 >= '0' && communityDevelopmentJunContents.kpi3 <= '5.6')?'red':(communityDevelopmentJunContents.kpi3 > '5.6' && communityDevelopmentJunContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJunContents.kpi3 > '7.466666667' && communityDevelopmentJunContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJunContents.kpi3 >= '9.333333333' && communityDevelopmentJunContents.kpi3 < '11.2')?'green':(communityDevelopmentJunContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJulContents.kpi1 == null)?'grey-2':(communityDevelopmentJulContents.kpi1 >= '0' && communityDevelopmentJulContents.kpi1 <= '127')?'red':(communityDevelopmentJulContents.kpi1 > '127' && communityDevelopmentJulContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJulContents.kpi1 > '169.3333333' && communityDevelopmentJulContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJulContents.kpi1 >= '211.6666667' && communityDevelopmentJulContents.kpi1 < '254')?'green':(communityDevelopmentJulContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi2 == null)?'grey-2':(communityDevelopmentJulContents.kpi2 >= '0' && communityDevelopmentJulContents.kpi2 <= '6.4')?'red':(communityDevelopmentJulContents.kpi2 > '6.4' && communityDevelopmentJulContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJulContents.kpi2 > '8.533333333' && communityDevelopmentJulContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJulContents.kpi2 >= '10.66666667' && communityDevelopmentJulContents.kpi2 < '12.8')?'green':(communityDevelopmentJulContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi3 == null)?'grey-2':(communityDevelopmentJulContents.kpi3 >= '0' && communityDevelopmentJulContents.kpi3 <= '5.6')?'red':(communityDevelopmentJulContents.kpi3 > '5.6' && communityDevelopmentJulContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJulContents.kpi3 > '7.466666667' && communityDevelopmentJulContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJulContents.kpi3 >= '9.333333333' && communityDevelopmentJulContents.kpi3 < '11.2')?'green':(communityDevelopmentJulContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAugContents.kpi1 == null)?'grey-2':(communityDevelopmentAugContents.kpi1 >= '0' && communityDevelopmentAugContents.kpi1 <= '127')?'red':(communityDevelopmentAugContents.kpi1 > '127' && communityDevelopmentAugContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAugContents.kpi1 > '169.3333333' && communityDevelopmentAugContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAugContents.kpi1 >= '211.6666667' && communityDevelopmentAugContents.kpi1 < '254')?'green':(communityDevelopmentAugContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi2 == null)?'grey-2':(communityDevelopmentAugContents.kpi2 >= '0' && communityDevelopmentAugContents.kpi2 <= '6.4')?'red':(communityDevelopmentAugContents.kpi2 > '6.4' && communityDevelopmentAugContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAugContents.kpi2 > '8.533333333' && communityDevelopmentAugContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAugContents.kpi2 >= '10.66666667' && communityDevelopmentAugContents.kpi2 < '12.8')?'green':(communityDevelopmentAugContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi3 == null)?'grey-2':(communityDevelopmentAugContents.kpi3 >= '0' && communityDevelopmentAugContents.kpi3 <= '5.6')?'red':(communityDevelopmentAugContents.kpi3 > '5.6' && communityDevelopmentAugContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAugContents.kpi3 > '7.466666667' && communityDevelopmentAugContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAugContents.kpi3 >= '9.333333333' && communityDevelopmentAugContents.kpi3 < '11.2')?'green':(communityDevelopmentAugContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentSepContents.kpi1 == null)?'grey-2':(communityDevelopmentSepContents.kpi1 >= '0' && communityDevelopmentSepContents.kpi1 <= '127')?'red':(communityDevelopmentSepContents.kpi1 > '127' && communityDevelopmentSepContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentSepContents.kpi1 > '169.3333333' && communityDevelopmentSepContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentSepContents.kpi1 >= '211.6666667' && communityDevelopmentSepContents.kpi1 < '254')?'green':(communityDevelopmentSepContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi2 == null)?'grey-2':(communityDevelopmentSepContents.kpi2 >= '0' && communityDevelopmentSepContents.kpi2 <= '6.4')?'red':(communityDevelopmentSepContents.kpi2 > '6.4' && communityDevelopmentSepContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentSepContents.kpi2 > '8.533333333' && communityDevelopmentSepContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentSepContents.kpi2 >= '10.66666667' && communityDevelopmentSepContents.kpi2 < '12.8')?'green':(communityDevelopmentSepContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi3 == null)?'grey-2':(communityDevelopmentSepContents.kpi3 >= '0' && communityDevelopmentSepContents.kpi3 <= '5.6')?'red':(communityDevelopmentSepContents.kpi3 > '5.6' && communityDevelopmentSepContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentSepContents.kpi3 > '7.466666667' && communityDevelopmentSepContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentSepContents.kpi3 >= '9.333333333' && communityDevelopmentSepContents.kpi3 < '11.2')?'green':(communityDevelopmentSepContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentOctContents.kpi1 == null)?'grey-2':(communityDevelopmentOctContents.kpi1 >= '0' && communityDevelopmentOctContents.kpi1 <= '127')?'red':(communityDevelopmentOctContents.kpi1 > '127' && communityDevelopmentOctContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentOctContents.kpi1 > '169.3333333' && communityDevelopmentOctContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentOctContents.kpi1 >= '211.6666667' && communityDevelopmentOctContents.kpi1 < '254')?'green':(communityDevelopmentOctContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi2 == null)?'grey-2':(communityDevelopmentOctContents.kpi2 >= '0' && communityDevelopmentOctContents.kpi2 <= '6.4')?'red':(communityDevelopmentOctContents.kpi2 > '6.4' && communityDevelopmentOctContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentOctContents.kpi2 > '8.533333333' && communityDevelopmentOctContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentOctContents.kpi2 >= '10.66666667' && communityDevelopmentOctContents.kpi2 < '12.8')?'green':(communityDevelopmentOctContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi3 == null)?'grey-2':(communityDevelopmentOctContents.kpi3 >= '0' && communityDevelopmentOctContents.kpi3 <= '5.6')?'red':(communityDevelopmentOctContents.kpi3 > '5.6' && communityDevelopmentOctContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentOctContents.kpi3 > '7.466666667' && communityDevelopmentOctContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentOctContents.kpi3 >= '9.333333333' && communityDevelopmentOctContents.kpi3 < '11.2')?'green':(communityDevelopmentOctContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentNovContents.kpi1 == null)?'grey-2':(communityDevelopmentNovContents.kpi1 >= '0' && communityDevelopmentNovContents.kpi1 <= '127')?'red':(communityDevelopmentNovContents.kpi1 > '127' && communityDevelopmentNovContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentNovContents.kpi1 > '169.3333333' && communityDevelopmentNovContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentNovContents.kpi1 >= '211.6666667' && communityDevelopmentNovContents.kpi1 < '254')?'green':(communityDevelopmentNovContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi2 == null)?'grey-2':(communityDevelopmentNovContents.kpi2 >= '0' && communityDevelopmentNovContents.kpi2 <= '6.4')?'red':(communityDevelopmentNovContents.kpi2 > '6.4' && communityDevelopmentNovContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentNovContents.kpi2 > '8.533333333' && communityDevelopmentNovContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentNovContents.kpi2 >= '10.66666667' && communityDevelopmentNovContents.kpi2 < '12.8')?'green':(communityDevelopmentNovContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi3 == null)?'grey-2':(communityDevelopmentNovContents.kpi3 >= '0' && communityDevelopmentNovContents.kpi3 <= '5.6')?'red':(communityDevelopmentNovContents.kpi3 > '5.6' && communityDevelopmentNovContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentNovContents.kpi3 > '7.466666667' && communityDevelopmentNovContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentNovContents.kpi3 >= '9.333333333' && communityDevelopmentNovContents.kpi3 < '11.2')?'green':(communityDevelopmentNovContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentDecContents.kpi1 == null)?'grey-2':(communityDevelopmentDecContents.kpi1 >= '0' && communityDevelopmentDecContents.kpi1 <= '127')?'red':(communityDevelopmentDecContents.kpi1 > '127' && communityDevelopmentDecContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentDecContents.kpi1 > '169.3333333' && communityDevelopmentDecContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentDecContents.kpi1 >= '211.6666667' && communityDevelopmentDecContents.kpi1 < '254')?'green':(communityDevelopmentDecContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi2 == null)?'grey-2':(communityDevelopmentDecContents.kpi2 >= '0' && communityDevelopmentDecContents.kpi2 <= '6.4')?'red':(communityDevelopmentDecContents.kpi2 > '6.4' && communityDevelopmentDecContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentDecContents.kpi2 > '8.533333333' && communityDevelopmentDecContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentDecContents.kpi2 >= '10.66666667' && communityDevelopmentDecContents.kpi2 < '12.8')?'green':(communityDevelopmentDecContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi3 == null)?'grey-2':(communityDevelopmentDecContents.kpi3 >= '0' && communityDevelopmentDecContents.kpi3 <= '5.6')?'red':(communityDevelopmentDecContents.kpi3 > '5.6' && communityDevelopmentDecContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentDecContents.kpi3 > '7.466666667' && communityDevelopmentDecContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentDecContents.kpi3 >= '9.333333333' && communityDevelopmentDecContents.kpi3 < '11.2')?'green':(communityDevelopmentDecContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                                <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of collaborative initiatives</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJanContents.kpi1 == null)?'grey-2':(communityDevelopmentJanContents.kpi1 >= '0' && communityDevelopmentJanContents.kpi1 <= '127')?'red':(communityDevelopmentJanContents.kpi1 > '127' && communityDevelopmentJanContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJanContents.kpi1 > '169.3333333' && communityDevelopmentJanContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJanContents.kpi1 >= '211.6666667' && communityDevelopmentJanContents.kpi1 < '254')?'green':(communityDevelopmentJanContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi2 == null)?'grey-2':(communityDevelopmentJanContents.kpi2 >= '0' && communityDevelopmentJanContents.kpi2 <= '6.4')?'red':(communityDevelopmentJanContents.kpi2 > '6.4' && communityDevelopmentJanContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJanContents.kpi2 > '8.533333333' && communityDevelopmentJanContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJanContents.kpi2 >= '10.66666667' && communityDevelopmentJanContents.kpi2 < '12.8')?'green':(communityDevelopmentJanContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJanContents.kpi3 == null)?'grey-2':(communityDevelopmentJanContents.kpi3 >= '0' && communityDevelopmentJanContents.kpi3 <= '5.6')?'red':(communityDevelopmentJanContents.kpi3 > '5.6' && communityDevelopmentJanContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJanContents.kpi3 > '7.466666667' && communityDevelopmentJanContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJanContents.kpi3 >= '9.333333333' && communityDevelopmentJanContents.kpi3 < '11.2')?'green':(communityDevelopmentJanContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJanContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentFebContents.kpi1 == null)?'grey-2':(communityDevelopmentFebContents.kpi1 >= '0' && communityDevelopmentFebContents.kpi1 <= '127')?'red':(communityDevelopmentFebContents.kpi1 > '127' && communityDevelopmentFebContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentFebContents.kpi1 > '169.3333333' && communityDevelopmentFebContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentFebContents.kpi1 >= '211.6666667' && communityDevelopmentFebContents.kpi1 < '254')?'green':(communityDevelopmentFebContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi2 == null)?'grey-2':(communityDevelopmentFebContents.kpi2 >= '0' && communityDevelopmentFebContents.kpi2 <= '6.4')?'red':(communityDevelopmentFebContents.kpi2 > '6.4' && communityDevelopmentFebContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentFebContents.kpi2 > '8.533333333' && communityDevelopmentFebContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentFebContents.kpi2 >= '10.66666667' && communityDevelopmentFebContents.kpi2 < '12.8')?'green':(communityDevelopmentFebContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentFebContents.kpi3 == null)?'grey-2':(communityDevelopmentFebContents.kpi3 >= '0' && communityDevelopmentFebContents.kpi3 <= '5.6')?'red':(communityDevelopmentFebContents.kpi3 > '5.6' && communityDevelopmentFebContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentFebContents.kpi3 > '7.466666667' && communityDevelopmentFebContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentFebContents.kpi3 >= '9.333333333' && communityDevelopmentFebContents.kpi3 < '11.2')?'green':(communityDevelopmentFebContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentFebContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMarContents.kpi1 == null)?'grey-2':(communityDevelopmentMarContents.kpi1 >= '0' && communityDevelopmentMarContents.kpi1 <= '127')?'red':(communityDevelopmentMarContents.kpi1 > '127' && communityDevelopmentMarContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMarContents.kpi1 > '169.3333333' && communityDevelopmentMarContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMarContents.kpi1 >= '211.6666667' && communityDevelopmentMarContents.kpi1 < '254')?'green':(communityDevelopmentMarContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi2 == null)?'grey-2':(communityDevelopmentMarContents.kpi2 >= '0' && communityDevelopmentMarContents.kpi2 <= '6.4')?'red':(communityDevelopmentMarContents.kpi2 > '6.4' && communityDevelopmentMarContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMarContents.kpi2 > '8.533333333' && communityDevelopmentMarContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMarContents.kpi2 >= '10.66666667' && communityDevelopmentMarContents.kpi2 < '12.8')?'green':(communityDevelopmentMarContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMarContents.kpi3 == null)?'grey-2':(communityDevelopmentMarContents.kpi3 >= '0' && communityDevelopmentMarContents.kpi3 <= '5.6')?'red':(communityDevelopmentMarContents.kpi3 > '5.6' && communityDevelopmentMarContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMarContents.kpi3 > '7.466666667' && communityDevelopmentMarContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMarContents.kpi3 >= '9.333333333' && communityDevelopmentMarContents.kpi3 < '11.2')?'green':(communityDevelopmentMarContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMarContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAprContents.kpi1 == null)?'grey-2':(communityDevelopmentAprContents.kpi1 >= '0' && communityDevelopmentAprContents.kpi1 <= '127')?'red':(communityDevelopmentAprContents.kpi1 > '127' && communityDevelopmentAprContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAprContents.kpi1 > '169.3333333' && communityDevelopmentAprContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAprContents.kpi1 >= '211.6666667' && communityDevelopmentAprContents.kpi1 < '254')?'green':(communityDevelopmentAprContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi2 == null)?'grey-2':(communityDevelopmentAprContents.kpi2 >= '0' && communityDevelopmentAprContents.kpi2 <= '6.4')?'red':(communityDevelopmentAprContents.kpi2 > '6.4' && communityDevelopmentAprContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAprContents.kpi2 > '8.533333333' && communityDevelopmentAprContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAprContents.kpi2 >= '10.66666667' && communityDevelopmentAprContents.kpi2 < '12.8')?'green':(communityDevelopmentAprContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAprContents.kpi3 == null)?'grey-2':(communityDevelopmentAprContents.kpi3 >= '0' && communityDevelopmentAprContents.kpi3 <= '5.6')?'red':(communityDevelopmentAprContents.kpi3 > '5.6' && communityDevelopmentAprContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAprContents.kpi3 > '7.466666667' && communityDevelopmentAprContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAprContents.kpi3 >= '9.333333333' && communityDevelopmentAprContents.kpi3 < '11.2')?'green':(communityDevelopmentAprContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAprContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentMayContents.kpi1 == null)?'grey-2':(communityDevelopmentMayContents.kpi1 >= '0' && communityDevelopmentMayContents.kpi1 <= '127')?'red':(communityDevelopmentMayContents.kpi1 > '127' && communityDevelopmentMayContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentMayContents.kpi1 > '169.3333333' && communityDevelopmentMayContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentMayContents.kpi1 >= '211.6666667' && communityDevelopmentMayContents.kpi1 < '254')?'green':(communityDevelopmentMayContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi2 == null)?'grey-2':(communityDevelopmentMayContents.kpi2 >= '0' && communityDevelopmentMayContents.kpi2 <= '6.4')?'red':(communityDevelopmentMayContents.kpi2 > '6.4' && communityDevelopmentMayContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentMayContents.kpi2 > '8.533333333' && communityDevelopmentMayContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentMayContents.kpi2 >= '10.66666667' && communityDevelopmentMayContents.kpi2 < '12.8')?'green':(communityDevelopmentMayContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentMayContents.kpi3 == null)?'grey-2':(communityDevelopmentMayContents.kpi3 >= '0' && communityDevelopmentMayContents.kpi3 <= '5.6')?'red':(communityDevelopmentMayContents.kpi3 > '5.6' && communityDevelopmentMayContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentMayContents.kpi3 > '7.466666667' && communityDevelopmentMayContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentMayContents.kpi3 >= '9.333333333' && communityDevelopmentMayContents.kpi3 < '11.2')?'green':(communityDevelopmentMayContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentMayContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJunContents.kpi1 == null)?'grey-2':(communityDevelopmentJunContents.kpi1 >= '0' && communityDevelopmentJunContents.kpi1 <= '127')?'red':(communityDevelopmentJunContents.kpi1 > '127' && communityDevelopmentJunContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJunContents.kpi1 > '169.3333333' && communityDevelopmentJunContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJunContents.kpi1 >= '211.6666667' && communityDevelopmentJunContents.kpi1 < '254')?'green':(communityDevelopmentJunContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi2 == null)?'grey-2':(communityDevelopmentJunContents.kpi2 >= '0' && communityDevelopmentJunContents.kpi2 <= '6.4')?'red':(communityDevelopmentJunContents.kpi2 > '6.4' && communityDevelopmentJunContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJunContents.kpi2 > '8.533333333' && communityDevelopmentJunContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJunContents.kpi2 >= '10.66666667' && communityDevelopmentJunContents.kpi2 < '12.8')?'green':(communityDevelopmentJunContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJunContents.kpi3 == null)?'grey-2':(communityDevelopmentJunContents.kpi3 >= '0' && communityDevelopmentJunContents.kpi3 <= '5.6')?'red':(communityDevelopmentJunContents.kpi3 > '5.6' && communityDevelopmentJunContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJunContents.kpi3 > '7.466666667' && communityDevelopmentJunContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJunContents.kpi3 >= '9.333333333' && communityDevelopmentJunContents.kpi3 < '11.2')?'green':(communityDevelopmentJunContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJunContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentJulContents.kpi1 == null)?'grey-2':(communityDevelopmentJulContents.kpi1 >= '0' && communityDevelopmentJulContents.kpi1 <= '127')?'red':(communityDevelopmentJulContents.kpi1 > '127' && communityDevelopmentJulContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentJulContents.kpi1 > '169.3333333' && communityDevelopmentJulContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentJulContents.kpi1 >= '211.6666667' && communityDevelopmentJulContents.kpi1 < '254')?'green':(communityDevelopmentJulContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi2 == null)?'grey-2':(communityDevelopmentJulContents.kpi2 >= '0' && communityDevelopmentJulContents.kpi2 <= '6.4')?'red':(communityDevelopmentJulContents.kpi2 > '6.4' && communityDevelopmentJulContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentJulContents.kpi2 > '8.533333333' && communityDevelopmentJulContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentJulContents.kpi2 >= '10.66666667' && communityDevelopmentJulContents.kpi2 < '12.8')?'green':(communityDevelopmentJulContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentJulContents.kpi3 == null)?'grey-2':(communityDevelopmentJulContents.kpi3 >= '0' && communityDevelopmentJulContents.kpi3 <= '5.6')?'red':(communityDevelopmentJulContents.kpi3 > '5.6' && communityDevelopmentJulContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentJulContents.kpi3 > '7.466666667' && communityDevelopmentJulContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentJulContents.kpi3 >= '9.333333333' && communityDevelopmentJulContents.kpi3 < '11.2')?'green':(communityDevelopmentJulContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentJulContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentAugContents.kpi1 == null)?'grey-2':(communityDevelopmentAugContents.kpi1 >= '0' && communityDevelopmentAugContents.kpi1 <= '127')?'red':(communityDevelopmentAugContents.kpi1 > '127' && communityDevelopmentAugContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentAugContents.kpi1 > '169.3333333' && communityDevelopmentAugContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentAugContents.kpi1 >= '211.6666667' && communityDevelopmentAugContents.kpi1 < '254')?'green':(communityDevelopmentAugContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi2 == null)?'grey-2':(communityDevelopmentAugContents.kpi2 >= '0' && communityDevelopmentAugContents.kpi2 <= '6.4')?'red':(communityDevelopmentAugContents.kpi2 > '6.4' && communityDevelopmentAugContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentAugContents.kpi2 > '8.533333333' && communityDevelopmentAugContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentAugContents.kpi2 >= '10.66666667' && communityDevelopmentAugContents.kpi2 < '12.8')?'green':(communityDevelopmentAugContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentAugContents.kpi3 == null)?'grey-2':(communityDevelopmentAugContents.kpi3 >= '0' && communityDevelopmentAugContents.kpi3 <= '5.6')?'red':(communityDevelopmentAugContents.kpi3 > '5.6' && communityDevelopmentAugContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentAugContents.kpi3 > '7.466666667' && communityDevelopmentAugContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentAugContents.kpi3 >= '9.333333333' && communityDevelopmentAugContents.kpi3 < '11.2')?'green':(communityDevelopmentAugContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentAugContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentSepContents.kpi1 == null)?'grey-2':(communityDevelopmentSepContents.kpi1 >= '0' && communityDevelopmentSepContents.kpi1 <= '127')?'red':(communityDevelopmentSepContents.kpi1 > '127' && communityDevelopmentSepContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentSepContents.kpi1 > '169.3333333' && communityDevelopmentSepContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentSepContents.kpi1 >= '211.6666667' && communityDevelopmentSepContents.kpi1 < '254')?'green':(communityDevelopmentSepContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi2 == null)?'grey-2':(communityDevelopmentSepContents.kpi2 >= '0' && communityDevelopmentSepContents.kpi2 <= '6.4')?'red':(communityDevelopmentSepContents.kpi2 > '6.4' && communityDevelopmentSepContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentSepContents.kpi2 > '8.533333333' && communityDevelopmentSepContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentSepContents.kpi2 >= '10.66666667' && communityDevelopmentSepContents.kpi2 < '12.8')?'green':(communityDevelopmentSepContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentSepContents.kpi3 == null)?'grey-2':(communityDevelopmentSepContents.kpi3 >= '0' && communityDevelopmentSepContents.kpi3 <= '5.6')?'red':(communityDevelopmentSepContents.kpi3 > '5.6' && communityDevelopmentSepContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentSepContents.kpi3 > '7.466666667' && communityDevelopmentSepContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentSepContents.kpi3 >= '9.333333333' && communityDevelopmentSepContents.kpi3 < '11.2')?'green':(communityDevelopmentSepContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentSepContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentOctContents.kpi1 == null)?'grey-2':(communityDevelopmentOctContents.kpi1 >= '0' && communityDevelopmentOctContents.kpi1 <= '127')?'red':(communityDevelopmentOctContents.kpi1 > '127' && communityDevelopmentOctContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentOctContents.kpi1 > '169.3333333' && communityDevelopmentOctContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentOctContents.kpi1 >= '211.6666667' && communityDevelopmentOctContents.kpi1 < '254')?'green':(communityDevelopmentOctContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi2 == null)?'grey-2':(communityDevelopmentOctContents.kpi2 >= '0' && communityDevelopmentOctContents.kpi2 <= '6.4')?'red':(communityDevelopmentOctContents.kpi2 > '6.4' && communityDevelopmentOctContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentOctContents.kpi2 > '8.533333333' && communityDevelopmentOctContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentOctContents.kpi2 >= '10.66666667' && communityDevelopmentOctContents.kpi2 < '12.8')?'green':(communityDevelopmentOctContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentOctContents.kpi3 == null)?'grey-2':(communityDevelopmentOctContents.kpi3 >= '0' && communityDevelopmentOctContents.kpi3 <= '5.6')?'red':(communityDevelopmentOctContents.kpi3 > '5.6' && communityDevelopmentOctContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentOctContents.kpi3 > '7.466666667' && communityDevelopmentOctContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentOctContents.kpi3 >= '9.333333333' && communityDevelopmentOctContents.kpi3 < '11.2')?'green':(communityDevelopmentOctContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentOctContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentNovContents.kpi1 == null)?'grey-2':(communityDevelopmentNovContents.kpi1 >= '0' && communityDevelopmentNovContents.kpi1 <= '127')?'red':(communityDevelopmentNovContents.kpi1 > '127' && communityDevelopmentNovContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentNovContents.kpi1 > '169.3333333' && communityDevelopmentNovContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentNovContents.kpi1 >= '211.6666667' && communityDevelopmentNovContents.kpi1 < '254')?'green':(communityDevelopmentNovContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi2 == null)?'grey-2':(communityDevelopmentNovContents.kpi2 >= '0' && communityDevelopmentNovContents.kpi2 <= '6.4')?'red':(communityDevelopmentNovContents.kpi2 > '6.4' && communityDevelopmentNovContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentNovContents.kpi2 > '8.533333333' && communityDevelopmentNovContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentNovContents.kpi2 >= '10.66666667' && communityDevelopmentNovContents.kpi2 < '12.8')?'green':(communityDevelopmentNovContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentNovContents.kpi3 == null)?'grey-2':(communityDevelopmentNovContents.kpi3 >= '0' && communityDevelopmentNovContents.kpi3 <= '5.6')?'red':(communityDevelopmentNovContents.kpi3 > '5.6' && communityDevelopmentNovContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentNovContents.kpi3 > '7.466666667' && communityDevelopmentNovContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentNovContents.kpi3 >= '9.333333333' && communityDevelopmentNovContents.kpi3 < '11.2')?'green':(communityDevelopmentNovContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentNovContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
                              :color="(communityDevelopmentDecContents.kpi1 == null)?'grey-2':(communityDevelopmentDecContents.kpi1 >= '0' && communityDevelopmentDecContents.kpi1 <= '127')?'red':(communityDevelopmentDecContents.kpi1 > '127' && communityDevelopmentDecContents.kpi1 <= '169.3333333')?'orange':(communityDevelopmentDecContents.kpi1 > '169.3333333' && communityDevelopmentDecContents.kpi1 < '211.6666667')?'yellow-7':(communityDevelopmentDecContents.kpi1 >= '211.6666667' && communityDevelopmentDecContents.kpi1 < '254')?'green':(communityDevelopmentDecContents.kpi1 >= '254'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi1}}
                              <q-tooltip># of residents participating in community events, celebrations, and other CD activities</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi2 == null)?'grey-2':(communityDevelopmentDecContents.kpi2 >= '0' && communityDevelopmentDecContents.kpi2 <= '6.4')?'red':(communityDevelopmentDecContents.kpi2 > '6.4' && communityDevelopmentDecContents.kpi2 <= '8.533333333')?'orange':(communityDevelopmentDecContents.kpi2 > '8.533333333' && communityDevelopmentDecContents.kpi2 < '10.66666667')?'yellow-7':(communityDevelopmentDecContents.kpi2 >= '10.66666667' && communityDevelopmentDecContents.kpi2 < '12.8')?'green':(communityDevelopmentDecContents.kpi2 >= '12.8'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi2}}
                              <q-tooltip># of collaborative initiatives</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityDevelopmentDecContents.kpi3 == null)?'grey-2':(communityDevelopmentDecContents.kpi3 >= '0' && communityDevelopmentDecContents.kpi3 <= '5.6')?'red':(communityDevelopmentDecContents.kpi3 > '5.6' && communityDevelopmentDecContents.kpi3 <= '7.466666667')?'orange':(communityDevelopmentDecContents.kpi3 > '7.466666667' && communityDevelopmentDecContents.kpi3 < '9.333333333')?'yellow-7':(communityDevelopmentDecContents.kpi3 >= '9.333333333' && communityDevelopmentDecContents.kpi3 < '11.2')?'green':(communityDevelopmentDecContents.kpi3 >= '11.2'?'blue':'grey-2')"
                            >
                            {{communityDevelopmentDecContents.kpi3}}
                              <q-tooltip># of contact with community associations and tenants circles</q-tooltip>
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
              communityDevelopmentJanContent: {
                
              },
              communityDevelopmentJanContents : [],
              communityDevelopmentFebContent: {
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
              communityDevelopmentFebContents : [],
              communityDevelopmentMarContent: {
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
              communityDevelopmentMarContents : [],
              communityDevelopmentAprContent: {
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
              communityDevelopmentAprContents : [],
              communityDevelopmentMayContent: {
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
              communityDevelopmentMayContents : [],
              communityDevelopmentJunContent: {
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
              communityDevelopmentJunContents : [],
              communityDevelopmentJulContent: {
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
              communityDevelopmentJulContents : [],
              communityDevelopmentAugContent: {
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
              communityDevelopmentAugContents : [],
              communityDevelopmentSepContent: {
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
              communityDevelopmentSepContents : [],
              communityDevelopmentOctContent: {
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
              communityDevelopmentOctContents : [],
              communityDevelopmentNovContent: {
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
              communityDevelopmentNovContents : [],
              communityDevelopmentDecContent: {
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
              communityDevelopmentDecContents : []


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
                            {time_period: 'January', expenses: this.communityDevelopmentJanContents.expenses, revenues: this.communityDevelopmentJanContents.revenues},
                            {time_period: 'February', expenses: this.communityDevelopmentFebContents.expenses, revenues: this.communityDevelopmentFebContents.revenues},
                            {time_period: 'March', expenses: this.communityDevelopmentMarContents.expenses, revenues: this.communityDevelopmentMarContents.revenues},
                            {time_period: 'April', expenses: this.communityDevelopmentAprContents.expenses, revenues: this.communityDevelopmentAprContents.revenues},
                            {time_period: 'May', expenses: this.communityDevelopmentMayContents.expenses, revenues: this.communityDevelopmentMayContents.revenues},
                            {time_period: 'June', expenses: this.communityDevelopmentJunContents.expenses, revenues: this.communityDevelopmentJunContents.revenues},
                            {time_period: 'July', expenses: this.communityDevelopmentJulContents.expenses, revenues: this.communityDevelopmentJulContents.revenues},
                            {time_period: 'August', expenses: this.communityDevelopmentAugContents.expenses, revenues: this.communityDevelopmentAugContents.revenues},
                            {time_period: 'September', expenses: this.communityDevelopmentSepContents.expenses, revenues: this.communityDevelopmentSepContents.revenues},
                            {time_period: 'October', expenses: this.communityDevelopmentOctContents.expenses, revenues: this.communityDevelopmentOctContents.revenues},
                            {time_period: 'November', expenses: this.communityDevelopmentNovContents.expenses, revenues: this.communityDevelopmentNovContents.revenues},
                            {time_period: 'December',expenses: this.communityDevelopmentDecContents.expenses, revenues: this.communityDevelopmentDecContents.revenues }
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
                        dimensions: ['months', 'kpi1', 'kpi2', 'kpi3', 'uniqueVol', 'volHours'],
                        source: [
                            //{months: 'January', kpi1: 0, kpi2: 0, kpi3: 0, kpi4: 0, uniqueVol: 0, volHours: 0},
                            {months: 'January', kpi1: this.communityDevelopmentJanContents.kpi1, kpi2: this.communityDevelopmentJanContents.kpi2, kpi3: this.communityDevelopmentJanContents.kpi3, uniqueVol: this.communityDevelopmentJanContents.uniqueVolunteers, volHours: this.communityDevelopmentJanContents.volunteerHours},
                            {months: 'February', kpi1: this.communityDevelopmentFebContents.kpi1, kpi2: this.communityDevelopmentFebContents.kpi2, kpi3: this.communityDevelopmentFebContents.kpi3, uniqueVol: this.communityDevelopmentFebContents.uniqueVolunteers, volHours: this.communityDevelopmentFebContents.volunteerHours},
                            {months: 'March', kpi1: this.communityDevelopmentMarContents.kpi1, kpi2: this.communityDevelopmentMarContents.kpi2, kpi3: this.communityDevelopmentMarContents.kpi3, uniqueVol: this.communityDevelopmentMarContents.uniqueVolunteers, volHours: this.communityDevelopmentMarContents.volunteerHours},
                            {months: 'April', kpi1: this.communityDevelopmentAprContents.kpi1, kpi2: this.communityDevelopmentAprContents.kpi2, kpi3: this.communityDevelopmentAprContents.kpi3, uniqueVol: this.communityDevelopmentAprContents.uniqueVolunteers, volHours: this.communityDevelopmentAprContents.volunteerHours},
                            {months: 'May', kpi1: this.communityDevelopmentMayContents.kpi1, kpi2: this.communityDevelopmentMayContents.kpi2, kpi3: this.communityDevelopmentMayContents.kpi3, uniqueVol: this.communityDevelopmentMayContents.uniqueVolunteers, volHours: this.communityDevelopmentMayContents.volunteerHours},
                            {months: 'June', kpi1: this.communityDevelopmentJunContents.kpi1, kpi2: this.communityDevelopmentJunContents.kpi2, kpi3: this.communityDevelopmentJunContents.kpi3, uniqueVol: this.communityDevelopmentJunContents.uniqueVolunteers, volHours: this.communityDevelopmentJunContents.volunteerHours},
                            {months: 'July', kpi1: this.communityDevelopmentJulContents.kpi1, kpi2: this.communityDevelopmentJulContents.kpi2, kpi3: this.communityDevelopmentJulContents.kpi3, uniqueVol: this.communityDevelopmentJulContents.uniqueVolunteers, volHours: this.communityDevelopmentJulContents.volunteerHours},
                            {months: 'August', kpi1: this.communityDevelopmentAugContents.kpi1, kpi2: this.communityDevelopmentAugContents.kpi2, kpi3: this.communityDevelopmentAugContents.kpi3, uniqueVol: this.communityDevelopmentAugContents.uniqueVolunteers, volHours: this.communityDevelopmentAugContents.volunteerHours},
                            {months: 'September', kpi1: this.communityDevelopmentSepContents.kpi1, kpi2: this.communityDevelopmentSepContents.kpi2, kpi3: this.communityDevelopmentSepContents.kpi3, uniqueVol: this.communityDevelopmentSepContents.uniqueVolunteers, volHours: this.communityDevelopmentSepContents.volunteerHours},
                            {months: 'October', kpi1: this.communityDevelopmentOctContents.kpi1, kpi2: this.communityDevelopmentOctContents.kpi2, kpi3: this.communityDevelopmentOctContents.kpi3, uniqueVol: this.communityDevelopmentOctContents.uniqueVolunteers, volHours: this.communityDevelopmentOctContents.volunteerHours},
                            {months: 'November', kpi1: this.communityDevelopmentNovContents.kpi1, kpi2: this.communityDevelopmentNovContents.kpi2, kpi3: this.communityDevelopmentNovContents.kpi3, uniqueVol: this.communityDevelopmentNovContents.uniqueVolunteers, volHours: this.communityDevelopmentNovContents.volunteerHours},
                            {months: 'December',kpi1: this.communityDevelopmentDecContents.kpi1, kpi2: this.communityDevelopmentDecContents.kpi2, kpi3: this.communityDevelopmentDecContents.kpi3, uniqueVol: this.communityDevelopmentDecContents.uniqueVolunteers, volHours: this.communityDevelopmentDecContents.volunteerHours},
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
                            data: [{value: this.communityDevelopmentJanContents.budgetUsage}],
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
                                {value: this.communityDevelopmentJanContents.perCategory1, name: this.communityDevelopmentJanContents.expenseCategory1},
                                {value: this.communityDevelopmentJanContents.perCategory2, name: this.communityDevelopmentJanContents.expenseCategory2},
                                {value: this.communityDevelopmentJanContents.perCategory3, name: this.communityDevelopmentJanContents.expenseCategory3},
                                {value: this.communityDevelopmentJanContents.perCategory4, name: this.communityDevelopmentJanContents.expenseCategory4},
                                {value: this.communityDevelopmentJanContents.perCategory5, name: this.communityDevelopmentJanContents.expenseCategory5},
                                {value: this.communityDevelopmentJanContents.perCategory6, name: this.communityDevelopmentJanContents.expenseCategory6}
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
                            data: [{value: this.communityDevelopmentFebContents.budgetUsage}],
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
                                {value: this.communityDevelopmentFebContents.perCategory1, name: this.communityDevelopmentFebContents.expenseCategory1},
                                {value: this.communityDevelopmentFebContents.perCategory2, name: this.communityDevelopmentFebContents.expenseCategory2},
                                {value: this.communityDevelopmentFebContents.perCategory3, name: this.communityDevelopmentFebContents.expenseCategory3},
                                {value: this.communityDevelopmentFebContents.perCategory4, name: this.communityDevelopmentFebContents.expenseCategory4},
                                {value: this.communityDevelopmentFebContents.perCategory5, name: this.communityDevelopmentFebContents.expenseCategory5},
                                {value: this.communityDevelopmentFebContents.perCategory6, name: this.communityDevelopmentFebContents.expenseCategory6}
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
                            data: [{value: this.communityDevelopmentMarContents.budgetUsage}],
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
                                {value: this.communityDevelopmentMarContents.perCategory1, name: this.communityDevelopmentMarContents.expenseCategory1},
                                {value: this.communityDevelopmentMarContents.perCategory2, name: this.communityDevelopmentMarContents.expenseCategory2},
                                {value: this.communityDevelopmentMarContents.perCategory3, name: this.communityDevelopmentMarContents.expenseCategory3},
                                {value: this.communityDevelopmentMarContents.perCategory4, name: this.communityDevelopmentMarContents.expenseCategory4},
                                {value: this.communityDevelopmentMarContents.perCategory5, name: this.communityDevelopmentMarContents.expenseCategory5},
                                {value: this.communityDevelopmentMarContents.perCategory6, name: this.communityDevelopmentMarContents.expenseCategory6}
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
                            data: [{value: this.communityDevelopmentAprContents.budgetUsage}],
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
                                {value: this.communityDevelopmentAprContents.perCategory1, name: this.communityDevelopmentAprContents.expenseCategory1},
                                {value: this.communityDevelopmentAprContents.perCategory2, name: this.communityDevelopmentAprContents.expenseCategory2},
                                {value: this.communityDevelopmentAprContents.perCategory3, name: this.communityDevelopmentAprContents.expenseCategory3},
                                {value: this.communityDevelopmentAprContents.perCategory4, name: this.communityDevelopmentAprContents.expenseCategory4},
                                {value: this.communityDevelopmentAprContents.perCategory5, name: this.communityDevelopmentAprContents.expenseCategory5},
                                {value: this.communityDevelopmentAprContents.perCategory6, name: this.communityDevelopmentAprContents.expenseCategory6}  
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
                            data: [{value: this.communityDevelopmentMayContents.budgetUsage}],
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
                                {value: this.communityDevelopmentMayContents.perCategory1, name: this.communityDevelopmentMayContents.expenseCategory1},
                                {value: this.communityDevelopmentMayContents.perCategory2, name: this.communityDevelopmentMayContents.expenseCategory2},
                                {value: this.communityDevelopmentMayContents.perCategory3, name: this.communityDevelopmentMayContents.expenseCategory3},
                                {value: this.communityDevelopmentMayContents.perCategory4, name: this.communityDevelopmentMayContents.expenseCategory4},
                                {value: this.communityDevelopmentMayContents.perCategory5, name: this.communityDevelopmentMayContents.expenseCategory5},
                                {value: this.communityDevelopmentMayContents.perCategory6, name: this.communityDevelopmentMayContents.expenseCategory6}  
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
                            data: [{value: this.communityDevelopmentJunContents.budgetUsage}],
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
                                {value: this.communityDevelopmentJunContents.perCategory1, name: this.communityDevelopmentJunContents.expenseCategory1},
                                {value: this.communityDevelopmentJunContents.perCategory2, name: this.communityDevelopmentJunContents.expenseCategory2},
                                {value: this.communityDevelopmentJunContents.perCategory3, name: this.communityDevelopmentJunContents.expenseCategory3},
                                {value: this.communityDevelopmentJunContents.perCategory4, name: this.communityDevelopmentJunContents.expenseCategory4},
                                {value: this.communityDevelopmentJunContents.perCategory5, name: this.communityDevelopmentJunContents.expenseCategory5},
                                {value: this.communityDevelopmentJunContents.perCategory6, name: this.communityDevelopmentJunContents.expenseCategory6}  
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
                            data: [{value: this.communityDevelopmentJulContents.budgetUsage}],
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
                                {value: this.communityDevelopmentJulContents.perCategory1, name: this.communityDevelopmentJulContents.expenseCategory1},
                                {value: this.communityDevelopmentJulContents.perCategory2, name: this.communityDevelopmentJulContents.expenseCategory2},
                                {value: this.communityDevelopmentJulContents.perCategory3, name: this.communityDevelopmentJulContents.expenseCategory3},
                                {value: this.communityDevelopmentJulContents.perCategory4, name: this.communityDevelopmentJulContents.expenseCategory4},
                                {value: this.communityDevelopmentJulContents.perCategory5, name: this.communityDevelopmentJulContents.expenseCategory5},
                                {value: this.communityDevelopmentJulContents.perCategory6, name: this.communityDevelopmentJulContents.expenseCategory6}  
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
                            data: [{value: this.communityDevelopmentAugContents.budgetUsage}],
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
                                {value: this.communityDevelopmentAugContents.perCategory1, name: this.communityDevelopmentAugContents.expenseCategory1},
                                {value: this.communityDevelopmentAugContents.perCategory2, name: this.communityDevelopmentAugContents.expenseCategory2},
                                {value: this.communityDevelopmentAugContents.perCategory3, name: this.communityDevelopmentAugContents.expenseCategory3},
                                {value: this.communityDevelopmentAugContents.perCategory4, name: this.communityDevelopmentAugContents.expenseCategory4},
                                {value: this.communityDevelopmentAugContents.perCategory5, name: this.communityDevelopmentAugContents.expenseCategory5},
                                {value: this.communityDevelopmentAugContents.perCategory6, name: this.communityDevelopmentAugContents.expenseCategory6}  
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
                            data: [{value: this.communityDevelopmentSepContents.budgetUsage}],
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
                                {value: this.communityDevelopmentSepContents.perCategory1, name: this.communityDevelopmentSepContents.expenseCategory1},
                                {value: this.communityDevelopmentSepContents.perCategory2, name: this.communityDevelopmentSepContents.expenseCategory2},
                                {value: this.communityDevelopmentSepContents.perCategory3, name: this.communityDevelopmentSepContents.expenseCategory3},
                                {value: this.communityDevelopmentSepContents.perCategory4, name: this.communityDevelopmentSepContents.expenseCategory4},
                                {value: this.communityDevelopmentSepContents.perCategory5, name: this.communityDevelopmentSepContents.expenseCategory5},
                                {value: this.communityDevelopmentSepContents.perCategory6, name: this.communityDevelopmentSepContents.expenseCategory6}  
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
                            data: [{value: this.communityDevelopmentOctContents.budgetUsage}],
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
                                {value: this.communityDevelopmentOctContents.perCategory1, name: this.communityDevelopmentOctContents.expenseCategory1},
                                {value: this.communityDevelopmentOctContents.perCategory2, name: this.communityDevelopmentOctContents.expenseCategory2},
                                {value: this.communityDevelopmentOctContents.perCategory3, name: this.communityDevelopmentOctContents.expenseCategory3},
                                {value: this.communityDevelopmentOctContents.perCategory4, name: this.communityDevelopmentOctContents.expenseCategory4},
                                {value: this.communityDevelopmentOctContents.perCategory5, name: this.communityDevelopmentOctContents.expenseCategory5},
                                {value: this.communityDevelopmentOctContents.perCategory6, name: this.communityDevelopmentOctContents.expenseCategory6}  
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
                            data: [{value: this.communityDevelopmentNovContents.budgetUsage}],
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
                                {value: this.communityDevelopmentNovContents.perCategory1, name: this.communityDevelopmentNovContents.expenseCategory1},
                                {value: this.communityDevelopmentNovContents.perCategory2, name: this.communityDevelopmentNovContents.expenseCategory2},
                                {value: this.communityDevelopmentNovContents.perCategory3, name: this.communityDevelopmentNovContents.expenseCategory3},
                                {value: this.communityDevelopmentNovContents.perCategory4, name: this.communityDevelopmentNovContents.expenseCategory4},
                                {value: this.communityDevelopmentNovContents.perCategory5, name: this.communityDevelopmentNovContents.expenseCategory5},
                                {value: this.communityDevelopmentNovContents.perCategory6, name: this.communityDevelopmentNovContents.expenseCategory6}  
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
                            data: [{value: this.communityDevelopmentDecContents.budgetUsage}],
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
                                {value: this.communityDevelopmentDecContents.perCategory1, name: this.communityDevelopmentDecContents.expenseCategory1},
                                {value: this.communityDevelopmentDecContents.perCategory2, name: this.communityDevelopmentDecContents.expenseCategory2},
                                {value: this.communityDevelopmentDecContents.perCategory3, name: this.communityDevelopmentDecContents.expenseCategory3},
                                {value: this.communityDevelopmentDecContents.perCategory4, name: this.communityDevelopmentDecContents.expenseCategory4},
                                {value: this.communityDevelopmentDecContents.perCategory5, name: this.communityDevelopmentDecContents.expenseCategory5},
                                {value: this.communityDevelopmentDecContents.perCategory6, name: this.communityDevelopmentDecContents.expenseCategory6}
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
            var doccommunityDevelopmentJanRef = db.collection("communityDevelopment").doc("january");

            doccommunityDevelopmentJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityDevelopmentJanContents = doc.data();
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
            var doccommunityDevelopmentFebRef = db.collection("communityDevelopment").doc("february");

            doccommunityDevelopmentFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityDevelopmentFebContents = doc.data();
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
            var doccommunityDevelopmentMarRef = db.collection("communityDevelopment").doc("march");

            doccommunityDevelopmentMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityDevelopmentMarContents = doc.data();
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
            var doccommunityDevelopmentAprRef = db.collection("communityDevelopment").doc("april1");

            doccommunityDevelopmentAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityDevelopmentAprContents = doc.data();
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
            var doccommunityDevelopmentMayRef = db.collection("communityDevelopment").doc("may");

            doccommunityDevelopmentMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityDevelopmentMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var doccommunityDevelopmentJunRef = db.collection("communityDevelopment").doc("june");

            doccommunityDevelopmentJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityDevelopmentJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var doccommunityDevelopmentJulRef = db.collection("communityDevelopment").doc("july");

            doccommunityDevelopmentJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityDevelopmentJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var doccommunityDevelopmentAugRef = db.collection("communityDevelopment").doc("august");

            doccommunityDevelopmentAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityDevelopmentAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var doccommunityDevelopmentSepRef = db.collection("communityDevelopment").doc("september");

            doccommunityDevelopmentSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityDevelopmentSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var doccommunityDevelopmentOctRef = db.collection("communityDevelopment").doc("october");

            doccommunityDevelopmentOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityDevelopmentOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var doccommunityDevelopmentNovRef = db.collection("communityDevelopment").doc("november");

            doccommunityDevelopmentNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityDevelopmentNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var doccommunityDevelopmentDecRef = db.collection("communityDevelopment").doc("december");

            doccommunityDevelopmentDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityDevelopmentDecContents = doc.data();
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
              return this.communityDevelopmentJanContents.expenses = getRealValue(this.communityDevelopmentJanContents.perCategory1) + getRealValue(this.communityDevelopmentJanContents.perCategory2) + getRealValue(this.communityDevelopmentJanContents.perCategory3) + getRealValue(this.communityDevelopmentJanContents.perCategory4) + getRealValue(this.communityDevelopmentJanContents.perCategory5) + getRealValue(this.communityDevelopmentJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentJanContents.budgetUsage = ((getRealValue(this.communityDevelopmentJanContents.expenses) / getRealValue(this.communityDevelopmentJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentFebContents.expenses = getRealValue(this.communityDevelopmentFebContents.perCategory1) + getRealValue(this.communityDevelopmentFebContents.perCategory2) + getRealValue(this.communityDevelopmentFebContents.perCategory3) + getRealValue(this.communityDevelopmentFebContents.perCategory4) + getRealValue(this.communityDevelopmentFebContents.perCategory5) + getRealValue(this.communityDevelopmentFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentFebContents.budgetUsage = (((getRealValue(this.communityDevelopmentFebContents.expenses) + getRealValue(this.communityDevelopmentJanContents.expenses)) / getRealValue(this.communityDevelopmentFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentMarContents.expenses = getRealValue(this.communityDevelopmentMarContents.perCategory1) + getRealValue(this.communityDevelopmentMarContents.perCategory2) + getRealValue(this.communityDevelopmentMarContents.perCategory3) + getRealValue(this.communityDevelopmentMarContents.perCategory4) + getRealValue(this.communityDevelopmentMarContents.perCategory5) + getRealValue(this.communityDevelopmentMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentMarContents.budgetUsage = (((getRealValue(this.communityDevelopmentMarContents.expenses) + getRealValue(this.communityDevelopmentFebContents.expenses) + getRealValue(this.communityDevelopmentJanContents.expenses)) / getRealValue(this.communityDevelopmentMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentAprContents.expenses = getRealValue(this.communityDevelopmentAprContents.perCategory1) + getRealValue(this.communityDevelopmentAprContents.perCategory2) + getRealValue(this.communityDevelopmentAprContents.perCategory3) + getRealValue(this.communityDevelopmentAprContents.perCategory4) + getRealValue(this.communityDevelopmentAprContents.perCategory5) + getRealValue(this.communityDevelopmentAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentAprContents.budgetUsage = (((getRealValue(this.communityDevelopmentAprContents.expenses) + getRealValue(this.communityDevelopmentMarContents.expenses) + getRealValue(this.communityDevelopmentFebContents.expenses) + getRealValue(this.communityDevelopmentJanContents.expenses)) / getRealValue(this.communityDevelopmentAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentMayContents.expenses = getRealValue(this.communityDevelopmentMayContents.perCategory1) + getRealValue(this.communityDevelopmentMayContents.perCategory2) + getRealValue(this.communityDevelopmentMayContents.perCategory3) + getRealValue(this.communityDevelopmentMayContents.perCategory4) + getRealValue(this.communityDevelopmentMayContents.perCategory5) + getRealValue(this.communityDevelopmentMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentMayContents.budgetUsage = (((getRealValue(this.communityDevelopmentMayContents.expenses) + getRealValue(this.communityDevelopmentAprContents.expenses) + getRealValue(this.communityDevelopmentMarContents.expenses) + getRealValue(this.communityDevelopmentFebContents.expenses) + getRealValue(this.communityDevelopmentJanContents.expenses)) / getRealValue(this.communityDevelopmentMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentJunContents.expenses = getRealValue(this.communityDevelopmentJunContents.perCategory1) + getRealValue(this.communityDevelopmentJunContents.perCategory2) + getRealValue(this.communityDevelopmentJunContents.perCategory3) + getRealValue(this.communityDevelopmentJunContents.perCategory4) + getRealValue(this.communityDevelopmentJunContents.perCategory5) + getRealValue(this.communityDevelopmentJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentJunContents.budgetUsage = (((getRealValue(this.communityDevelopmentJunContents.expenses) + getRealValue(this.communityDevelopmentMayContents.expenses) + getRealValue(this.communityDevelopmentAprContents.expenses) + getRealValue(this.communityDevelopmentMarContents.expenses) + getRealValue(this.communityDevelopmentFebContents.expenses) + getRealValue(this.communityDevelopmentJanContents.expenses)) / getRealValue(this.communityDevelopmentJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentJulContents.expenses = getRealValue(this.communityDevelopmentJulContents.perCategory1) + getRealValue(this.communityDevelopmentJulContents.perCategory2) + getRealValue(this.communityDevelopmentJulContents.perCategory3) + getRealValue(this.communityDevelopmentJulContents.perCategory4) + getRealValue(this.communityDevelopmentJulContents.perCategory5) + getRealValue(this.communityDevelopmentJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentJulContents.budgetUsage = (((getRealValue(this.communityDevelopmentJulContents.expenses) + getRealValue(this.communityDevelopmentJunContents.expenses) + getRealValue(this.communityDevelopmentMayContents.expenses) + getRealValue(this.communityDevelopmentAprContents.expenses) + getRealValue(this.communityDevelopmentMarContents.expenses) + getRealValue(this.communityDevelopmentFebContents.expenses) + getRealValue(this.communityDevelopmentJanContents.expenses)) / getRealValue(this.communityDevelopmentJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentAugContents.expenses = getRealValue(this.communityDevelopmentAugContents.perCategory1) + getRealValue(this.communityDevelopmentAugContents.perCategory2) + getRealValue(this.communityDevelopmentAugContents.perCategory3) + getRealValue(this.communityDevelopmentAugContents.perCategory4) + getRealValue(this.communityDevelopmentAugContents.perCategory5) + getRealValue(this.communityDevelopmentAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentAugContents.budgetUsage = (((getRealValue(this.communityDevelopmentAugContents.expenses) + getRealValue(this.communityDevelopmentJulContents.expenses) + getRealValue(this.communityDevelopmentJunContents.expenses) + getRealValue(this.communityDevelopmentMayContents.expenses) + getRealValue(this.communityDevelopmentAprContents.expenses) + getRealValue(this.communityDevelopmentMarContents.expenses) + getRealValue(this.communityDevelopmentFebContents.expenses) + getRealValue(this.communityDevelopmentJanContents.expenses)) / getRealValue(this.communityDevelopmentAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentSepContents.expenses = getRealValue(this.communityDevelopmentSepContents.perCategory1) + getRealValue(this.communityDevelopmentSepContents.perCategory2) + getRealValue(this.communityDevelopmentSepContents.perCategory3) + getRealValue(this.communityDevelopmentSepContents.perCategory4) + getRealValue(this.communityDevelopmentSepContents.perCategory5) + getRealValue(this.communityDevelopmentSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentSepContents.budgetUsage = (((getRealValue(this.communityDevelopmentSepContents.expenses) + getRealValue(this.communityDevelopmentAugContents.expenses) + getRealValue(this.communityDevelopmentJulContents.expenses) + getRealValue(this.communityDevelopmentJunContents.expenses) + getRealValue(this.communityDevelopmentMayContents.expenses) + getRealValue(this.communityDevelopmentAprContents.expenses) + getRealValue(this.communityDevelopmentMarContents.expenses) + getRealValue(this.communityDevelopmentFebContents.expenses) + getRealValue(this.communityDevelopmentJanContents.expenses)) / getRealValue(this.communityDevelopmentSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentOctContents.expenses = getRealValue(this.communityDevelopmentOctContents.perCategory1) + getRealValue(this.communityDevelopmentOctContents.perCategory2) + getRealValue(this.communityDevelopmentOctContents.perCategory3) + getRealValue(this.communityDevelopmentOctContents.perCategory4) + getRealValue(this.communityDevelopmentOctContents.perCategory5) + getRealValue(this.communityDevelopmentOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentOctContents.budgetUsage = (((getRealValue(this.communityDevelopmentOctContents.expenses) + getRealValue(this.communityDevelopmentSepContents.expenses) + getRealValue(this.communityDevelopmentAugContents.expenses) + getRealValue(this.communityDevelopmentJulContents.expenses) + getRealValue(this.communityDevelopmentJunContents.expenses) + getRealValue(this.communityDevelopmentMayContents.expenses) + getRealValue(this.communityDevelopmentAprContents.expenses) + getRealValue(this.communityDevelopmentMarContents.expenses) + getRealValue(this.communityDevelopmentFebContents.expenses) + getRealValue(this.communityDevelopmentJanContents.expenses)) / getRealValue(this.communityDevelopmentOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentNovContents.expenses = getRealValue(this.communityDevelopmentNovContents.perCategory1) + getRealValue(this.communityDevelopmentNovContents.perCategory2) + getRealValue(this.communityDevelopmentNovContents.perCategory3) + getRealValue(this.communityDevelopmentNovContents.perCategory4) + getRealValue(this.communityDevelopmentNovContents.perCategory5) + getRealValue(this.communityDevelopmentNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentNovContents.budgetUsage = (((getRealValue(this.communityDevelopmentNovContents.expenses) + getRealValue(this.communityDevelopmentOctContents.expenses) + getRealValue(this.communityDevelopmentSepContents.expenses) + getRealValue(this.communityDevelopmentAugContents.expenses) + getRealValue(this.communityDevelopmentJulContents.expenses) + getRealValue(this.communityDevelopmentJunContents.expenses) + getRealValue(this.communityDevelopmentMayContents.expenses) + getRealValue(this.communityDevelopmentAprContents.expenses) + getRealValue(this.communityDevelopmentMarContents.expenses) + getRealValue(this.communityDevelopmentFebContents.expenses) + getRealValue(this.communityDevelopmentJanContents.expenses)) / getRealValue(this.communityDevelopmentNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentDecContents.expenses = getRealValue(this.communityDevelopmentDecContents.perCategory1) + getRealValue(this.communityDevelopmentDecContents.perCategory2) + getRealValue(this.communityDevelopmentDecContents.perCategory3) + getRealValue(this.communityDevelopmentDecContents.perCategory4) + getRealValue(this.communityDevelopmentDecContents.perCategory5) + getRealValue(this.communityDevelopmentDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.communityDevelopmentDecContents.budgetUsage = (((getRealValue(this.communityDevelopmentDecContents.expenses) + getRealValue(this.communityDevelopmentNovContents.expenses) + getRealValue(this.communityDevelopmentOctContents.expenses) + getRealValue(this.communityDevelopmentSepContents.expenses) + getRealValue(this.communityDevelopmentAugContents.expenses) + getRealValue(this.communityDevelopmentJulContents.expenses) + getRealValue(this.communityDevelopmentJunContents.expenses) + getRealValue(this.communityDevelopmentMayContents.expenses) + getRealValue(this.communityDevelopmentAprContents.expenses) + getRealValue(this.communityDevelopmentMarContents.expenses) + getRealValue(this.communityDevelopmentFebContents.expenses) + getRealValue(this.communityDevelopmentJanContents.expenses)) / getRealValue(this.communityDevelopmentDecContents.actualBudget))*100).toFixed(2)
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
