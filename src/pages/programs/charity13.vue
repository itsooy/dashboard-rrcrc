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
          <q-tab name="january" label="January" disable/>
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
          
            <q-tab-panel name="january" disable>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JanContents.kpi1 == null)?'grey-2':(charity13JanContents.kpi1 >= '0' && charity13JanContents.kpi1 <= '0.8')?'red':(charity13JanContents.kpi1 > '0.8' && charity13JanContents.kpi1 <= '1.066666667')?'orange':(charity13JanContents.kpi1 > '1.066666667' && charity13JanContents.kpi1 < '1.333333333')?'yellow-7':(charity13JanContents.kpi1 >= '1.333333333' && charity13JanContents.kpi1 < '1.6')?'green':(charity13JanContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi2 == null)?'grey-2':(charity13JanContents.kpi2 >= '0' && charity13JanContents.kpi2 <= '1.4')?'red':(charity13JanContents.kpi2 > '1.4' && charity13JanContents.kpi2 <= '1.866666667')?'orange':(charity13JanContents.kpi2 > '1.866666667' && charity13JanContents.kpi2 < '2.333333333')?'yellow-7':(charity13JanContents.kpi2 >= '2.333333333' && charity13JanContents.kpi2 < '2.8')?'green':(charity13JanContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi3 == null)?'grey-2':(charity13JanContents.kpi3 >= '0' && charity13JanContents.kpi3 <= '2')?'red':(charity13JanContents.kpi3 > '2' && charity13JanContents.kpi3 <= '2.666666667')?'orange':(charity13JanContents.kpi3 > '2.666666667' && charity13JanContents.kpi3 < '3.333333333')?'yellow-7':(charity13JanContents.kpi3 >= '3.333333333' && charity13JanContents.kpi3 < '4')?'green':(charity13JanContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi4 == null)?'grey-2':(charity13JanContents.kpi4 >= '0' && charity13JanContents.kpi4 <= '2.2')?'red':(charity13JanContents.kpi4 > '2.2' && charity13JanContents.kpi4 <= '2.933333333')?'orange':(charity13JanContents.kpi4 > '2.933333333' && charity13JanContents.kpi4 < '3.666666667')?'yellow-7':(charity13JanContents.kpi4 >= '3.666666667' && charity13JanContents.kpi4 < '4.4')?'green':(charity13JanContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi5 == null)?'grey-2':(charity13JanContents.kpi5 >= '0' && charity13JanContents.kpi5 <= '1')?'red':(charity13JanContents.kpi5 > '1' && charity13JanContents.kpi5 <= '1.333333333')?'orange':(charity13JanContents.kpi5 > '1.333333333' && charity13JanContents.kpi5 < '1.666666667')?'yellow-7':(charity13JanContents.kpi5 >= '1.666666667' && charity13JanContents.kpi5 < '2')?'green':(charity13JanContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13FebContents.kpi1 == null)?'grey-2':(charity13FebContents.kpi1 >= '0' && charity13FebContents.kpi1 <= '0.8')?'red':(charity13FebContents.kpi1 > '0.8' && charity13FebContents.kpi1 <= '1.066666667')?'orange':(charity13FebContents.kpi1 > '1.066666667' && charity13FebContents.kpi1 < '1.333333333')?'yellow-7':(charity13FebContents.kpi1 >= '1.333333333' && charity13FebContents.kpi1 < '1.6')?'green':(charity13FebContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi2 == null)?'grey-2':(charity13FebContents.kpi2 >= '0' && charity13FebContents.kpi2 <= '1.4')?'red':(charity13FebContents.kpi2 > '1.4' && charity13FebContents.kpi2 <= '1.866666667')?'orange':(charity13FebContents.kpi2 > '1.866666667' && charity13FebContents.kpi2 < '2.333333333')?'yellow-7':(charity13FebContents.kpi2 >= '2.333333333' && charity13FebContents.kpi2 < '2.8')?'green':(charity13FebContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi3 == null)?'grey-2':(charity13FebContents.kpi3 >= '0' && charity13FebContents.kpi3 <= '2')?'red':(charity13FebContents.kpi3 > '2' && charity13FebContents.kpi3 <= '2.666666667')?'orange':(charity13FebContents.kpi3 > '2.666666667' && charity13FebContents.kpi3 < '3.333333333')?'yellow-7':(charity13FebContents.kpi3 >= '3.333333333' && charity13FebContents.kpi3 < '4')?'green':(charity13FebContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi4 == null)?'grey-2':(charity13FebContents.kpi4 >= '0' && charity13FebContents.kpi4 <= '2.2')?'red':(charity13FebContents.kpi4 > '2.2' && charity13FebContents.kpi4 <= '2.933333333')?'orange':(charity13FebContents.kpi4 > '2.933333333' && charity13FebContents.kpi4 < '3.666666667')?'yellow-7':(charity13FebContents.kpi4 >= '3.666666667' && charity13FebContents.kpi4 < '4.4')?'green':(charity13FebContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi5 == null)?'grey-2':(charity13FebContents.kpi5 >= '0' && charity13FebContents.kpi5 <= '1')?'red':(charity13FebContents.kpi5 > '1' && charity13FebContents.kpi5 <= '1.333333333')?'orange':(charity13FebContents.kpi5 > '1.333333333' && charity13FebContents.kpi5 < '1.666666667')?'yellow-7':(charity13FebContents.kpi5 >= '1.666666667' && charity13FebContents.kpi5 < '2')?'green':(charity13FebContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MarContents.kpi1 == null)?'grey-2':(charity13MarContents.kpi1 >= '0' && charity13MarContents.kpi1 <= '0.8')?'red':(charity13MarContents.kpi1 > '0.8' && charity13MarContents.kpi1 <= '1.066666667')?'orange':(charity13MarContents.kpi1 > '1.066666667' && charity13MarContents.kpi1 < '1.333333333')?'yellow-7':(charity13MarContents.kpi1 >= '1.333333333' && charity13MarContents.kpi1 < '1.6')?'green':(charity13MarContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi2 == null)?'grey-2':(charity13MarContents.kpi2 >= '0' && charity13MarContents.kpi2 <= '1.4')?'red':(charity13MarContents.kpi2 > '1.4' && charity13MarContents.kpi2 <= '1.866666667')?'orange':(charity13MarContents.kpi2 > '1.866666667' && charity13MarContents.kpi2 < '2.333333333')?'yellow-7':(charity13MarContents.kpi2 >= '2.333333333' && charity13MarContents.kpi2 < '2.8')?'green':(charity13MarContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi3 == null)?'grey-2':(charity13MarContents.kpi3 >= '0' && charity13MarContents.kpi3 <= '2')?'red':(charity13MarContents.kpi3 > '2' && charity13MarContents.kpi3 <= '2.666666667')?'orange':(charity13MarContents.kpi3 > '2.666666667' && charity13MarContents.kpi3 < '3.333333333')?'yellow-7':(charity13MarContents.kpi3 >= '3.333333333' && charity13MarContents.kpi3 < '4')?'green':(charity13MarContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi4 == null)?'grey-2':(charity13MarContents.kpi4 >= '0' && charity13MarContents.kpi4 <= '2.2')?'red':(charity13MarContents.kpi4 > '2.2' && charity13MarContents.kpi4 <= '2.933333333')?'orange':(charity13MarContents.kpi4 > '2.933333333' && charity13MarContents.kpi4 < '3.666666667')?'yellow-7':(charity13MarContents.kpi4 >= '3.666666667' && charity13MarContents.kpi4 < '4.4')?'green':(charity13MarContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi5 == null)?'grey-2':(charity13MarContents.kpi5 >= '0' && charity13MarContents.kpi5 <= '1')?'red':(charity13MarContents.kpi5 > '1' && charity13MarContents.kpi5 <= '1.333333333')?'orange':(charity13MarContents.kpi5 > '1.333333333' && charity13MarContents.kpi5 < '1.666666667')?'yellow-7':(charity13MarContents.kpi5 >= '1.666666667' && charity13MarContents.kpi5 < '2')?'green':(charity13MarContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AprContents.kpi1 == null)?'grey-2':(charity13AprContents.kpi1 >= '0' && charity13AprContents.kpi1 <= '0.8')?'red':(charity13AprContents.kpi1 > '0.8' && charity13AprContents.kpi1 <= '1.066666667')?'orange':(charity13AprContents.kpi1 > '1.066666667' && charity13AprContents.kpi1 < '1.333333333')?'yellow-7':(charity13AprContents.kpi1 >= '1.333333333' && charity13AprContents.kpi1 < '1.6')?'green':(charity13AprContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi2 == null)?'grey-2':(charity13AprContents.kpi2 >= '0' && charity13AprContents.kpi2 <= '1.4')?'red':(charity13AprContents.kpi2 > '1.4' && charity13AprContents.kpi2 <= '1.866666667')?'orange':(charity13AprContents.kpi2 > '1.866666667' && charity13AprContents.kpi2 < '2.333333333')?'yellow-7':(charity13AprContents.kpi2 >= '2.333333333' && charity13AprContents.kpi2 < '2.8')?'green':(charity13AprContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi3 == null)?'grey-2':(charity13AprContents.kpi3 >= '0' && charity13AprContents.kpi3 <= '2')?'red':(charity13AprContents.kpi3 > '2' && charity13AprContents.kpi3 <= '2.666666667')?'orange':(charity13AprContents.kpi3 > '2.666666667' && charity13AprContents.kpi3 < '3.333333333')?'yellow-7':(charity13AprContents.kpi3 >= '3.333333333' && charity13AprContents.kpi3 < '4')?'green':(charity13AprContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi4 == null)?'grey-2':(charity13AprContents.kpi4 >= '0' && charity13AprContents.kpi4 <= '2.2')?'red':(charity13AprContents.kpi4 > '2.2' && charity13AprContents.kpi4 <= '2.933333333')?'orange':(charity13AprContents.kpi4 > '2.933333333' && charity13AprContents.kpi4 < '3.666666667')?'yellow-7':(charity13AprContents.kpi4 >= '3.666666667' && charity13AprContents.kpi4 < '4.4')?'green':(charity13AprContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi5 == null)?'grey-2':(charity13AprContents.kpi5 >= '0' && charity13AprContents.kpi5 <= '1')?'red':(charity13AprContents.kpi5 > '1' && charity13AprContents.kpi5 <= '1.333333333')?'orange':(charity13AprContents.kpi5 > '1.333333333' && charity13AprContents.kpi5 < '1.666666667')?'yellow-7':(charity13AprContents.kpi5 >= '1.666666667' && charity13AprContents.kpi5 < '2')?'green':(charity13AprContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MayContents.kpi1 == null)?'grey-2':(charity13MayContents.kpi1 >= '0' && charity13MayContents.kpi1 <= '0.8')?'red':(charity13MayContents.kpi1 > '0.8' && charity13MayContents.kpi1 <= '1.066666667')?'orange':(charity13MayContents.kpi1 > '1.066666667' && charity13MayContents.kpi1 < '1.333333333')?'yellow-7':(charity13MayContents.kpi1 >= '1.333333333' && charity13MayContents.kpi1 < '1.6')?'green':(charity13MayContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi2 == null)?'grey-2':(charity13MayContents.kpi2 >= '0' && charity13MayContents.kpi2 <= '1.4')?'red':(charity13MayContents.kpi2 > '1.4' && charity13MayContents.kpi2 <= '1.866666667')?'orange':(charity13MayContents.kpi2 > '1.866666667' && charity13MayContents.kpi2 < '2.333333333')?'yellow-7':(charity13MayContents.kpi2 >= '2.333333333' && charity13MayContents.kpi2 < '2.8')?'green':(charity13MayContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi3 == null)?'grey-2':(charity13MayContents.kpi3 >= '0' && charity13MayContents.kpi3 <= '2')?'red':(charity13MayContents.kpi3 > '2' && charity13MayContents.kpi3 <= '2.666666667')?'orange':(charity13MayContents.kpi3 > '2.666666667' && charity13MayContents.kpi3 < '3.333333333')?'yellow-7':(charity13MayContents.kpi3 >= '3.333333333' && charity13MayContents.kpi3 < '4')?'green':(charity13MayContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi4 == null)?'grey-2':(charity13MayContents.kpi4 >= '0' && charity13MayContents.kpi4 <= '2.2')?'red':(charity13MayContents.kpi4 > '2.2' && charity13MayContents.kpi4 <= '2.933333333')?'orange':(charity13MayContents.kpi4 > '2.933333333' && charity13MayContents.kpi4 < '3.666666667')?'yellow-7':(charity13MayContents.kpi4 >= '3.666666667' && charity13MayContents.kpi4 < '4.4')?'green':(charity13MayContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi5 == null)?'grey-2':(charity13MayContents.kpi5 >= '0' && charity13MayContents.kpi5 <= '1')?'red':(charity13MayContents.kpi5 > '1' && charity13MayContents.kpi5 <= '1.333333333')?'orange':(charity13MayContents.kpi5 > '1.333333333' && charity13MayContents.kpi5 < '1.666666667')?'yellow-7':(charity13MayContents.kpi5 >= '1.666666667' && charity13MayContents.kpi5 < '2')?'green':(charity13MayContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JunContents.kpi1 == null)?'grey-2':(charity13JunContents.kpi1 >= '0' && charity13JunContents.kpi1 <= '0.8')?'red':(charity13JunContents.kpi1 > '0.8' && charity13JunContents.kpi1 <= '1.066666667')?'orange':(charity13JunContents.kpi1 > '1.066666667' && charity13JunContents.kpi1 < '1.333333333')?'yellow-7':(charity13JunContents.kpi1 >= '1.333333333' && charity13JunContents.kpi1 < '1.6')?'green':(charity13JunContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi2 == null)?'grey-2':(charity13JunContents.kpi2 >= '0' && charity13JunContents.kpi2 <= '1.4')?'red':(charity13JunContents.kpi2 > '1.4' && charity13JunContents.kpi2 <= '1.866666667')?'orange':(charity13JunContents.kpi2 > '1.866666667' && charity13JunContents.kpi2 < '2.333333333')?'yellow-7':(charity13JunContents.kpi2 >= '2.333333333' && charity13JunContents.kpi2 < '2.8')?'green':(charity13JunContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi3 == null)?'grey-2':(charity13JunContents.kpi3 >= '0' && charity13JunContents.kpi3 <= '2')?'red':(charity13JunContents.kpi3 > '2' && charity13JunContents.kpi3 <= '2.666666667')?'orange':(charity13JunContents.kpi3 > '2.666666667' && charity13JunContents.kpi3 < '3.333333333')?'yellow-7':(charity13JunContents.kpi3 >= '3.333333333' && charity13JunContents.kpi3 < '4')?'green':(charity13JunContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi4 == null)?'grey-2':(charity13JunContents.kpi4 >= '0' && charity13JunContents.kpi4 <= '2.2')?'red':(charity13JunContents.kpi4 > '2.2' && charity13JunContents.kpi4 <= '2.933333333')?'orange':(charity13JunContents.kpi4 > '2.933333333' && charity13JunContents.kpi4 < '3.666666667')?'yellow-7':(charity13JunContents.kpi4 >= '3.666666667' && charity13JunContents.kpi4 < '4.4')?'green':(charity13JunContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi5 == null)?'grey-2':(charity13JunContents.kpi5 >= '0' && charity13JunContents.kpi5 <= '1')?'red':(charity13JunContents.kpi5 > '1' && charity13JunContents.kpi5 <= '1.333333333')?'orange':(charity13JunContents.kpi5 > '1.333333333' && charity13JunContents.kpi5 < '1.666666667')?'yellow-7':(charity13JunContents.kpi5 >= '1.666666667' && charity13JunContents.kpi5 < '2')?'green':(charity13JunContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JulContents.kpi1 == null)?'grey-2':(charity13JulContents.kpi1 >= '0' && charity13JulContents.kpi1 <= '0.8')?'red':(charity13JulContents.kpi1 > '0.8' && charity13JulContents.kpi1 <= '1.066666667')?'orange':(charity13JulContents.kpi1 > '1.066666667' && charity13JulContents.kpi1 < '1.333333333')?'yellow-7':(charity13JulContents.kpi1 >= '1.333333333' && charity13JulContents.kpi1 < '1.6')?'green':(charity13JulContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi2 == null)?'grey-2':(charity13JulContents.kpi2 >= '0' && charity13JulContents.kpi2 <= '1.4')?'red':(charity13JulContents.kpi2 > '1.4' && charity13JulContents.kpi2 <= '1.866666667')?'orange':(charity13JulContents.kpi2 > '1.866666667' && charity13JulContents.kpi2 < '2.333333333')?'yellow-7':(charity13JulContents.kpi2 >= '2.333333333' && charity13JulContents.kpi2 < '2.8')?'green':(charity13JulContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi3 == null)?'grey-2':(charity13JulContents.kpi3 >= '0' && charity13JulContents.kpi3 <= '2')?'red':(charity13JulContents.kpi3 > '2' && charity13JulContents.kpi3 <= '2.666666667')?'orange':(charity13JulContents.kpi3 > '2.666666667' && charity13JulContents.kpi3 < '3.333333333')?'yellow-7':(charity13JulContents.kpi3 >= '3.333333333' && charity13JulContents.kpi3 < '4')?'green':(charity13JulContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi4 == null)?'grey-2':(charity13JulContents.kpi4 >= '0' && charity13JulContents.kpi4 <= '2.2')?'red':(charity13JulContents.kpi4 > '2.2' && charity13JulContents.kpi4 <= '2.933333333')?'orange':(charity13JulContents.kpi4 > '2.933333333' && charity13JulContents.kpi4 < '3.666666667')?'yellow-7':(charity13JulContents.kpi4 >= '3.666666667' && charity13JulContents.kpi4 < '4.4')?'green':(charity13JulContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi5 == null)?'grey-2':(charity13JulContents.kpi5 >= '0' && charity13JulContents.kpi5 <= '1')?'red':(charity13JulContents.kpi5 > '1' && charity13JulContents.kpi5 <= '1.333333333')?'orange':(charity13JulContents.kpi5 > '1.333333333' && charity13JulContents.kpi5 < '1.666666667')?'yellow-7':(charity13JulContents.kpi5 >= '1.666666667' && charity13JulContents.kpi5 < '2')?'green':(charity13JulContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AugContents.kpi1 == null)?'grey-2':(charity13AugContents.kpi1 >= '0' && charity13AugContents.kpi1 <= '0.8')?'red':(charity13AugContents.kpi1 > '0.8' && charity13AugContents.kpi1 <= '1.066666667')?'orange':(charity13AugContents.kpi1 > '1.066666667' && charity13AugContents.kpi1 < '1.333333333')?'yellow-7':(charity13AugContents.kpi1 >= '1.333333333' && charity13AugContents.kpi1 < '1.6')?'green':(charity13AugContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi2 == null)?'grey-2':(charity13AugContents.kpi2 >= '0' && charity13AugContents.kpi2 <= '1.4')?'red':(charity13AugContents.kpi2 > '1.4' && charity13AugContents.kpi2 <= '1.866666667')?'orange':(charity13AugContents.kpi2 > '1.866666667' && charity13AugContents.kpi2 < '2.333333333')?'yellow-7':(charity13AugContents.kpi2 >= '2.333333333' && charity13AugContents.kpi2 < '2.8')?'green':(charity13AugContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi3 == null)?'grey-2':(charity13AugContents.kpi3 >= '0' && charity13AugContents.kpi3 <= '2')?'red':(charity13AugContents.kpi3 > '2' && charity13AugContents.kpi3 <= '2.666666667')?'orange':(charity13AugContents.kpi3 > '2.666666667' && charity13AugContents.kpi3 < '3.333333333')?'yellow-7':(charity13AugContents.kpi3 >= '3.333333333' && charity13AugContents.kpi3 < '4')?'green':(charity13AugContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi4 == null)?'grey-2':(charity13AugContents.kpi4 >= '0' && charity13AugContents.kpi4 <= '2.2')?'red':(charity13AugContents.kpi4 > '2.2' && charity13AugContents.kpi4 <= '2.933333333')?'orange':(charity13AugContents.kpi4 > '2.933333333' && charity13AugContents.kpi4 < '3.666666667')?'yellow-7':(charity13AugContents.kpi4 >= '3.666666667' && charity13AugContents.kpi4 < '4.4')?'green':(charity13AugContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi5 == null)?'grey-2':(charity13AugContents.kpi5 >= '0' && charity13AugContents.kpi5 <= '1')?'red':(charity13AugContents.kpi5 > '1' && charity13AugContents.kpi5 <= '1.333333333')?'orange':(charity13AugContents.kpi5 > '1.333333333' && charity13AugContents.kpi5 < '1.666666667')?'yellow-7':(charity13AugContents.kpi5 >= '1.666666667' && charity13AugContents.kpi5 < '2')?'green':(charity13AugContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13SepContents.kpi1 == null)?'grey-2':(charity13SepContents.kpi1 >= '0' && charity13SepContents.kpi1 <= '0.8')?'red':(charity13SepContents.kpi1 > '0.8' && charity13SepContents.kpi1 <= '1.066666667')?'orange':(charity13SepContents.kpi1 > '1.066666667' && charity13SepContents.kpi1 < '1.333333333')?'yellow-7':(charity13SepContents.kpi1 >= '1.333333333' && charity13SepContents.kpi1 < '1.6')?'green':(charity13SepContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi2 == null)?'grey-2':(charity13SepContents.kpi2 >= '0' && charity13SepContents.kpi2 <= '1.4')?'red':(charity13SepContents.kpi2 > '1.4' && charity13SepContents.kpi2 <= '1.866666667')?'orange':(charity13SepContents.kpi2 > '1.866666667' && charity13SepContents.kpi2 < '2.333333333')?'yellow-7':(charity13SepContents.kpi2 >= '2.333333333' && charity13SepContents.kpi2 < '2.8')?'green':(charity13SepContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi3 == null)?'grey-2':(charity13SepContents.kpi3 >= '0' && charity13SepContents.kpi3 <= '2')?'red':(charity13SepContents.kpi3 > '2' && charity13SepContents.kpi3 <= '2.666666667')?'orange':(charity13SepContents.kpi3 > '2.666666667' && charity13SepContents.kpi3 < '3.333333333')?'yellow-7':(charity13SepContents.kpi3 >= '3.333333333' && charity13SepContents.kpi3 < '4')?'green':(charity13SepContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi4 == null)?'grey-2':(charity13SepContents.kpi4 >= '0' && charity13SepContents.kpi4 <= '2.2')?'red':(charity13SepContents.kpi4 > '2.2' && charity13SepContents.kpi4 <= '2.933333333')?'orange':(charity13SepContents.kpi4 > '2.933333333' && charity13SepContents.kpi4 < '3.666666667')?'yellow-7':(charity13SepContents.kpi4 >= '3.666666667' && charity13SepContents.kpi4 < '4.4')?'green':(charity13SepContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi5 == null)?'grey-2':(charity13SepContents.kpi5 >= '0' && charity13SepContents.kpi5 <= '1')?'red':(charity13SepContents.kpi5 > '1' && charity13SepContents.kpi5 <= '1.333333333')?'orange':(charity13SepContents.kpi5 > '1.333333333' && charity13SepContents.kpi5 < '1.666666667')?'yellow-7':(charity13SepContents.kpi5 >= '1.666666667' && charity13SepContents.kpi5 < '2')?'green':(charity13SepContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13OctContents.kpi1 == null)?'grey-2':(charity13OctContents.kpi1 >= '0' && charity13OctContents.kpi1 <= '0.8')?'red':(charity13OctContents.kpi1 > '0.8' && charity13OctContents.kpi1 <= '1.066666667')?'orange':(charity13OctContents.kpi1 > '1.066666667' && charity13OctContents.kpi1 < '1.333333333')?'yellow-7':(charity13OctContents.kpi1 >= '1.333333333' && charity13OctContents.kpi1 < '1.6')?'green':(charity13OctContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi2 == null)?'grey-2':(charity13OctContents.kpi2 >= '0' && charity13OctContents.kpi2 <= '1.4')?'red':(charity13OctContents.kpi2 > '1.4' && charity13OctContents.kpi2 <= '1.866666667')?'orange':(charity13OctContents.kpi2 > '1.866666667' && charity13OctContents.kpi2 < '2.333333333')?'yellow-7':(charity13OctContents.kpi2 >= '2.333333333' && charity13OctContents.kpi2 < '2.8')?'green':(charity13OctContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi3 == null)?'grey-2':(charity13OctContents.kpi3 >= '0' && charity13OctContents.kpi3 <= '2')?'red':(charity13OctContents.kpi3 > '2' && charity13OctContents.kpi3 <= '2.666666667')?'orange':(charity13OctContents.kpi3 > '2.666666667' && charity13OctContents.kpi3 < '3.333333333')?'yellow-7':(charity13OctContents.kpi3 >= '3.333333333' && charity13OctContents.kpi3 < '4')?'green':(charity13OctContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi4 == null)?'grey-2':(charity13OctContents.kpi4 >= '0' && charity13OctContents.kpi4 <= '2.2')?'red':(charity13OctContents.kpi4 > '2.2' && charity13OctContents.kpi4 <= '2.933333333')?'orange':(charity13OctContents.kpi4 > '2.933333333' && charity13OctContents.kpi4 < '3.666666667')?'yellow-7':(charity13OctContents.kpi4 >= '3.666666667' && charity13OctContents.kpi4 < '4.4')?'green':(charity13OctContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi5 == null)?'grey-2':(charity13OctContents.kpi5 >= '0' && charity13OctContents.kpi5 <= '1')?'red':(charity13OctContents.kpi5 > '1' && charity13OctContents.kpi5 <= '1.333333333')?'orange':(charity13OctContents.kpi5 > '1.333333333' && charity13OctContents.kpi5 < '1.666666667')?'yellow-7':(charity13OctContents.kpi5 >= '1.666666667' && charity13OctContents.kpi5 < '2')?'green':(charity13OctContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13NovContents.kpi1 == null)?'grey-2':(charity13NovContents.kpi1 >= '0' && charity13NovContents.kpi1 <= '0.8')?'red':(charity13NovContents.kpi1 > '0.8' && charity13NovContents.kpi1 <= '1.066666667')?'orange':(charity13NovContents.kpi1 > '1.066666667' && charity13NovContents.kpi1 < '1.333333333')?'yellow-7':(charity13NovContents.kpi1 >= '1.333333333' && charity13NovContents.kpi1 < '1.6')?'green':(charity13NovContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi2 == null)?'grey-2':(charity13NovContents.kpi2 >= '0' && charity13NovContents.kpi2 <= '1.4')?'red':(charity13NovContents.kpi2 > '1.4' && charity13NovContents.kpi2 <= '1.866666667')?'orange':(charity13NovContents.kpi2 > '1.866666667' && charity13NovContents.kpi2 < '2.333333333')?'yellow-7':(charity13NovContents.kpi2 >= '2.333333333' && charity13NovContents.kpi2 < '2.8')?'green':(charity13NovContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi3 == null)?'grey-2':(charity13NovContents.kpi3 >= '0' && charity13NovContents.kpi3 <= '2')?'red':(charity13NovContents.kpi3 > '2' && charity13NovContents.kpi3 <= '2.666666667')?'orange':(charity13NovContents.kpi3 > '2.666666667' && charity13NovContents.kpi3 < '3.333333333')?'yellow-7':(charity13NovContents.kpi3 >= '3.333333333' && charity13NovContents.kpi3 < '4')?'green':(charity13NovContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi4 == null)?'grey-2':(charity13NovContents.kpi4 >= '0' && charity13NovContents.kpi4 <= '2.2')?'red':(charity13NovContents.kpi4 > '2.2' && charity13NovContents.kpi4 <= '2.933333333')?'orange':(charity13NovContents.kpi4 > '2.933333333' && charity13NovContents.kpi4 < '3.666666667')?'yellow-7':(charity13NovContents.kpi4 >= '3.666666667' && charity13NovContents.kpi4 < '4.4')?'green':(charity13NovContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi5 == null)?'grey-2':(charity13NovContents.kpi5 >= '0' && charity13NovContents.kpi5 <= '1')?'red':(charity13NovContents.kpi5 > '1' && charity13NovContents.kpi5 <= '1.333333333')?'orange':(charity13NovContents.kpi5 > '1.333333333' && charity13NovContents.kpi5 < '1.666666667')?'yellow-7':(charity13NovContents.kpi5 >= '1.666666667' && charity13NovContents.kpi5 < '2')?'green':(charity13NovContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13DecContents.kpi1 == null)?'grey-2':(charity13DecContents.kpi1 >= '0' && charity13DecContents.kpi1 <= '0.8')?'red':(charity13DecContents.kpi1 > '0.8' && charity13DecContents.kpi1 <= '1.066666667')?'orange':(charity13DecContents.kpi1 > '1.066666667' && charity13DecContents.kpi1 < '1.333333333')?'yellow-7':(charity13DecContents.kpi1 >= '1.333333333' && charity13DecContents.kpi1 < '1.6')?'green':(charity13DecContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi2 == null)?'grey-2':(charity13DecContents.kpi2 >= '0' && charity13DecContents.kpi2 <= '1.4')?'red':(charity13DecContents.kpi2 > '1.4' && charity13DecContents.kpi2 <= '1.866666667')?'orange':(charity13DecContents.kpi2 > '1.866666667' && charity13DecContents.kpi2 < '2.333333333')?'yellow-7':(charity13DecContents.kpi2 >= '2.333333333' && charity13DecContents.kpi2 < '2.8')?'green':(charity13DecContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi3 == null)?'grey-2':(charity13DecContents.kpi3 >= '0' && charity13DecContents.kpi3 <= '2')?'red':(charity13DecContents.kpi3 > '2' && charity13DecContents.kpi3 <= '2.666666667')?'orange':(charity13DecContents.kpi3 > '2.666666667' && charity13DecContents.kpi3 < '3.333333333')?'yellow-7':(charity13DecContents.kpi3 >= '3.333333333' && charity13DecContents.kpi3 < '4')?'green':(charity13DecContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi4 == null)?'grey-2':(charity13DecContents.kpi4 >= '0' && charity13DecContents.kpi4 <= '2.2')?'red':(charity13DecContents.kpi4 > '2.2' && charity13DecContents.kpi4 <= '2.933333333')?'orange':(charity13DecContents.kpi4 > '2.933333333' && charity13DecContents.kpi4 < '3.666666667')?'yellow-7':(charity13DecContents.kpi4 >= '3.666666667' && charity13DecContents.kpi4 < '4.4')?'green':(charity13DecContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi5 == null)?'grey-2':(charity13DecContents.kpi5 >= '0' && charity13DecContents.kpi5 <= '1')?'red':(charity13DecContents.kpi5 > '1' && charity13DecContents.kpi5 <= '1.333333333')?'orange':(charity13DecContents.kpi5 > '1.333333333' && charity13DecContents.kpi5 < '1.666666667')?'yellow-7':(charity13DecContents.kpi5 >= '1.666666667' && charity13DecContents.kpi5 < '2')?'green':(charity13DecContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
              <div class="text-h4 q-mb-md">{{$route.name}}&ensp;|&ensp;February <q-badge outline color="green">Founded in February 2022</q-badge></div>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JanContents.kpi1 == null)?'grey-2':(charity13JanContents.kpi1 >= '0' && charity13JanContents.kpi1 <= '0.8')?'red':(charity13JanContents.kpi1 > '0.8' && charity13JanContents.kpi1 <= '1.066666667')?'orange':(charity13JanContents.kpi1 > '1.066666667' && charity13JanContents.kpi1 < '1.333333333')?'yellow-7':(charity13JanContents.kpi1 >= '1.333333333' && charity13JanContents.kpi1 < '1.6')?'green':(charity13JanContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi2 == null)?'grey-2':(charity13JanContents.kpi2 >= '0' && charity13JanContents.kpi2 <= '1.4')?'red':(charity13JanContents.kpi2 > '1.4' && charity13JanContents.kpi2 <= '1.866666667')?'orange':(charity13JanContents.kpi2 > '1.866666667' && charity13JanContents.kpi2 < '2.333333333')?'yellow-7':(charity13JanContents.kpi2 >= '2.333333333' && charity13JanContents.kpi2 < '2.8')?'green':(charity13JanContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi3 == null)?'grey-2':(charity13JanContents.kpi3 >= '0' && charity13JanContents.kpi3 <= '2')?'red':(charity13JanContents.kpi3 > '2' && charity13JanContents.kpi3 <= '2.666666667')?'orange':(charity13JanContents.kpi3 > '2.666666667' && charity13JanContents.kpi3 < '3.333333333')?'yellow-7':(charity13JanContents.kpi3 >= '3.333333333' && charity13JanContents.kpi3 < '4')?'green':(charity13JanContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi4 == null)?'grey-2':(charity13JanContents.kpi4 >= '0' && charity13JanContents.kpi4 <= '2.2')?'red':(charity13JanContents.kpi4 > '2.2' && charity13JanContents.kpi4 <= '2.933333333')?'orange':(charity13JanContents.kpi4 > '2.933333333' && charity13JanContents.kpi4 < '3.666666667')?'yellow-7':(charity13JanContents.kpi4 >= '3.666666667' && charity13JanContents.kpi4 < '4.4')?'green':(charity13JanContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi5 == null)?'grey-2':(charity13JanContents.kpi5 >= '0' && charity13JanContents.kpi5 <= '1')?'red':(charity13JanContents.kpi5 > '1' && charity13JanContents.kpi5 <= '1.333333333')?'orange':(charity13JanContents.kpi5 > '1.333333333' && charity13JanContents.kpi5 < '1.666666667')?'yellow-7':(charity13JanContents.kpi5 >= '1.666666667' && charity13JanContents.kpi5 < '2')?'green':(charity13JanContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13FebContents.kpi1 == null)?'grey-2':(charity13FebContents.kpi1 >= '0' && charity13FebContents.kpi1 <= '0.8')?'red':(charity13FebContents.kpi1 > '0.8' && charity13FebContents.kpi1 <= '1.066666667')?'orange':(charity13FebContents.kpi1 > '1.066666667' && charity13FebContents.kpi1 < '1.333333333')?'yellow-7':(charity13FebContents.kpi1 >= '1.333333333' && charity13FebContents.kpi1 < '1.6')?'green':(charity13FebContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi2 == null)?'grey-2':(charity13FebContents.kpi2 >= '0' && charity13FebContents.kpi2 <= '1.4')?'red':(charity13FebContents.kpi2 > '1.4' && charity13FebContents.kpi2 <= '1.866666667')?'orange':(charity13FebContents.kpi2 > '1.866666667' && charity13FebContents.kpi2 < '2.333333333')?'yellow-7':(charity13FebContents.kpi2 >= '2.333333333' && charity13FebContents.kpi2 < '2.8')?'green':(charity13FebContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi3 == null)?'grey-2':(charity13FebContents.kpi3 >= '0' && charity13FebContents.kpi3 <= '2')?'red':(charity13FebContents.kpi3 > '2' && charity13FebContents.kpi3 <= '2.666666667')?'orange':(charity13FebContents.kpi3 > '2.666666667' && charity13FebContents.kpi3 < '3.333333333')?'yellow-7':(charity13FebContents.kpi3 >= '3.333333333' && charity13FebContents.kpi3 < '4')?'green':(charity13FebContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi4 == null)?'grey-2':(charity13FebContents.kpi4 >= '0' && charity13FebContents.kpi4 <= '2.2')?'red':(charity13FebContents.kpi4 > '2.2' && charity13FebContents.kpi4 <= '2.933333333')?'orange':(charity13FebContents.kpi4 > '2.933333333' && charity13FebContents.kpi4 < '3.666666667')?'yellow-7':(charity13FebContents.kpi4 >= '3.666666667' && charity13FebContents.kpi4 < '4.4')?'green':(charity13FebContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi5 == null)?'grey-2':(charity13FebContents.kpi5 >= '0' && charity13FebContents.kpi5 <= '1')?'red':(charity13FebContents.kpi5 > '1' && charity13FebContents.kpi5 <= '1.333333333')?'orange':(charity13FebContents.kpi5 > '1.333333333' && charity13FebContents.kpi5 < '1.666666667')?'yellow-7':(charity13FebContents.kpi5 >= '1.666666667' && charity13FebContents.kpi5 < '2')?'green':(charity13FebContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MarContents.kpi1 == null)?'grey-2':(charity13MarContents.kpi1 >= '0' && charity13MarContents.kpi1 <= '0.8')?'red':(charity13MarContents.kpi1 > '0.8' && charity13MarContents.kpi1 <= '1.066666667')?'orange':(charity13MarContents.kpi1 > '1.066666667' && charity13MarContents.kpi1 < '1.333333333')?'yellow-7':(charity13MarContents.kpi1 >= '1.333333333' && charity13MarContents.kpi1 < '1.6')?'green':(charity13MarContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi2 == null)?'grey-2':(charity13MarContents.kpi2 >= '0' && charity13MarContents.kpi2 <= '1.4')?'red':(charity13MarContents.kpi2 > '1.4' && charity13MarContents.kpi2 <= '1.866666667')?'orange':(charity13MarContents.kpi2 > '1.866666667' && charity13MarContents.kpi2 < '2.333333333')?'yellow-7':(charity13MarContents.kpi2 >= '2.333333333' && charity13MarContents.kpi2 < '2.8')?'green':(charity13MarContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi3 == null)?'grey-2':(charity13MarContents.kpi3 >= '0' && charity13MarContents.kpi3 <= '2')?'red':(charity13MarContents.kpi3 > '2' && charity13MarContents.kpi3 <= '2.666666667')?'orange':(charity13MarContents.kpi3 > '2.666666667' && charity13MarContents.kpi3 < '3.333333333')?'yellow-7':(charity13MarContents.kpi3 >= '3.333333333' && charity13MarContents.kpi3 < '4')?'green':(charity13MarContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi4 == null)?'grey-2':(charity13MarContents.kpi4 >= '0' && charity13MarContents.kpi4 <= '2.2')?'red':(charity13MarContents.kpi4 > '2.2' && charity13MarContents.kpi4 <= '2.933333333')?'orange':(charity13MarContents.kpi4 > '2.933333333' && charity13MarContents.kpi4 < '3.666666667')?'yellow-7':(charity13MarContents.kpi4 >= '3.666666667' && charity13MarContents.kpi4 < '4.4')?'green':(charity13MarContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi5 == null)?'grey-2':(charity13MarContents.kpi5 >= '0' && charity13MarContents.kpi5 <= '1')?'red':(charity13MarContents.kpi5 > '1' && charity13MarContents.kpi5 <= '1.333333333')?'orange':(charity13MarContents.kpi5 > '1.333333333' && charity13MarContents.kpi5 < '1.666666667')?'yellow-7':(charity13MarContents.kpi5 >= '1.666666667' && charity13MarContents.kpi5 < '2')?'green':(charity13MarContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AprContents.kpi1 == null)?'grey-2':(charity13AprContents.kpi1 >= '0' && charity13AprContents.kpi1 <= '0.8')?'red':(charity13AprContents.kpi1 > '0.8' && charity13AprContents.kpi1 <= '1.066666667')?'orange':(charity13AprContents.kpi1 > '1.066666667' && charity13AprContents.kpi1 < '1.333333333')?'yellow-7':(charity13AprContents.kpi1 >= '1.333333333' && charity13AprContents.kpi1 < '1.6')?'green':(charity13AprContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi2 == null)?'grey-2':(charity13AprContents.kpi2 >= '0' && charity13AprContents.kpi2 <= '1.4')?'red':(charity13AprContents.kpi2 > '1.4' && charity13AprContents.kpi2 <= '1.866666667')?'orange':(charity13AprContents.kpi2 > '1.866666667' && charity13AprContents.kpi2 < '2.333333333')?'yellow-7':(charity13AprContents.kpi2 >= '2.333333333' && charity13AprContents.kpi2 < '2.8')?'green':(charity13AprContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi3 == null)?'grey-2':(charity13AprContents.kpi3 >= '0' && charity13AprContents.kpi3 <= '2')?'red':(charity13AprContents.kpi3 > '2' && charity13AprContents.kpi3 <= '2.666666667')?'orange':(charity13AprContents.kpi3 > '2.666666667' && charity13AprContents.kpi3 < '3.333333333')?'yellow-7':(charity13AprContents.kpi3 >= '3.333333333' && charity13AprContents.kpi3 < '4')?'green':(charity13AprContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi4 == null)?'grey-2':(charity13AprContents.kpi4 >= '0' && charity13AprContents.kpi4 <= '2.2')?'red':(charity13AprContents.kpi4 > '2.2' && charity13AprContents.kpi4 <= '2.933333333')?'orange':(charity13AprContents.kpi4 > '2.933333333' && charity13AprContents.kpi4 < '3.666666667')?'yellow-7':(charity13AprContents.kpi4 >= '3.666666667' && charity13AprContents.kpi4 < '4.4')?'green':(charity13AprContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi5 == null)?'grey-2':(charity13AprContents.kpi5 >= '0' && charity13AprContents.kpi5 <= '1')?'red':(charity13AprContents.kpi5 > '1' && charity13AprContents.kpi5 <= '1.333333333')?'orange':(charity13AprContents.kpi5 > '1.333333333' && charity13AprContents.kpi5 < '1.666666667')?'yellow-7':(charity13AprContents.kpi5 >= '1.666666667' && charity13AprContents.kpi5 < '2')?'green':(charity13AprContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MayContents.kpi1 == null)?'grey-2':(charity13MayContents.kpi1 >= '0' && charity13MayContents.kpi1 <= '0.8')?'red':(charity13MayContents.kpi1 > '0.8' && charity13MayContents.kpi1 <= '1.066666667')?'orange':(charity13MayContents.kpi1 > '1.066666667' && charity13MayContents.kpi1 < '1.333333333')?'yellow-7':(charity13MayContents.kpi1 >= '1.333333333' && charity13MayContents.kpi1 < '1.6')?'green':(charity13MayContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi2 == null)?'grey-2':(charity13MayContents.kpi2 >= '0' && charity13MayContents.kpi2 <= '1.4')?'red':(charity13MayContents.kpi2 > '1.4' && charity13MayContents.kpi2 <= '1.866666667')?'orange':(charity13MayContents.kpi2 > '1.866666667' && charity13MayContents.kpi2 < '2.333333333')?'yellow-7':(charity13MayContents.kpi2 >= '2.333333333' && charity13MayContents.kpi2 < '2.8')?'green':(charity13MayContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi3 == null)?'grey-2':(charity13MayContents.kpi3 >= '0' && charity13MayContents.kpi3 <= '2')?'red':(charity13MayContents.kpi3 > '2' && charity13MayContents.kpi3 <= '2.666666667')?'orange':(charity13MayContents.kpi3 > '2.666666667' && charity13MayContents.kpi3 < '3.333333333')?'yellow-7':(charity13MayContents.kpi3 >= '3.333333333' && charity13MayContents.kpi3 < '4')?'green':(charity13MayContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi4 == null)?'grey-2':(charity13MayContents.kpi4 >= '0' && charity13MayContents.kpi4 <= '2.2')?'red':(charity13MayContents.kpi4 > '2.2' && charity13MayContents.kpi4 <= '2.933333333')?'orange':(charity13MayContents.kpi4 > '2.933333333' && charity13MayContents.kpi4 < '3.666666667')?'yellow-7':(charity13MayContents.kpi4 >= '3.666666667' && charity13MayContents.kpi4 < '4.4')?'green':(charity13MayContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi5 == null)?'grey-2':(charity13MayContents.kpi5 >= '0' && charity13MayContents.kpi5 <= '1')?'red':(charity13MayContents.kpi5 > '1' && charity13MayContents.kpi5 <= '1.333333333')?'orange':(charity13MayContents.kpi5 > '1.333333333' && charity13MayContents.kpi5 < '1.666666667')?'yellow-7':(charity13MayContents.kpi5 >= '1.666666667' && charity13MayContents.kpi5 < '2')?'green':(charity13MayContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JunContents.kpi1 == null)?'grey-2':(charity13JunContents.kpi1 >= '0' && charity13JunContents.kpi1 <= '0.8')?'red':(charity13JunContents.kpi1 > '0.8' && charity13JunContents.kpi1 <= '1.066666667')?'orange':(charity13JunContents.kpi1 > '1.066666667' && charity13JunContents.kpi1 < '1.333333333')?'yellow-7':(charity13JunContents.kpi1 >= '1.333333333' && charity13JunContents.kpi1 < '1.6')?'green':(charity13JunContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi2 == null)?'grey-2':(charity13JunContents.kpi2 >= '0' && charity13JunContents.kpi2 <= '1.4')?'red':(charity13JunContents.kpi2 > '1.4' && charity13JunContents.kpi2 <= '1.866666667')?'orange':(charity13JunContents.kpi2 > '1.866666667' && charity13JunContents.kpi2 < '2.333333333')?'yellow-7':(charity13JunContents.kpi2 >= '2.333333333' && charity13JunContents.kpi2 < '2.8')?'green':(charity13JunContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi3 == null)?'grey-2':(charity13JunContents.kpi3 >= '0' && charity13JunContents.kpi3 <= '2')?'red':(charity13JunContents.kpi3 > '2' && charity13JunContents.kpi3 <= '2.666666667')?'orange':(charity13JunContents.kpi3 > '2.666666667' && charity13JunContents.kpi3 < '3.333333333')?'yellow-7':(charity13JunContents.kpi3 >= '3.333333333' && charity13JunContents.kpi3 < '4')?'green':(charity13JunContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi4 == null)?'grey-2':(charity13JunContents.kpi4 >= '0' && charity13JunContents.kpi4 <= '2.2')?'red':(charity13JunContents.kpi4 > '2.2' && charity13JunContents.kpi4 <= '2.933333333')?'orange':(charity13JunContents.kpi4 > '2.933333333' && charity13JunContents.kpi4 < '3.666666667')?'yellow-7':(charity13JunContents.kpi4 >= '3.666666667' && charity13JunContents.kpi4 < '4.4')?'green':(charity13JunContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi5 == null)?'grey-2':(charity13JunContents.kpi5 >= '0' && charity13JunContents.kpi5 <= '1')?'red':(charity13JunContents.kpi5 > '1' && charity13JunContents.kpi5 <= '1.333333333')?'orange':(charity13JunContents.kpi5 > '1.333333333' && charity13JunContents.kpi5 < '1.666666667')?'yellow-7':(charity13JunContents.kpi5 >= '1.666666667' && charity13JunContents.kpi5 < '2')?'green':(charity13JunContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JulContents.kpi1 == null)?'grey-2':(charity13JulContents.kpi1 >= '0' && charity13JulContents.kpi1 <= '0.8')?'red':(charity13JulContents.kpi1 > '0.8' && charity13JulContents.kpi1 <= '1.066666667')?'orange':(charity13JulContents.kpi1 > '1.066666667' && charity13JulContents.kpi1 < '1.333333333')?'yellow-7':(charity13JulContents.kpi1 >= '1.333333333' && charity13JulContents.kpi1 < '1.6')?'green':(charity13JulContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi2 == null)?'grey-2':(charity13JulContents.kpi2 >= '0' && charity13JulContents.kpi2 <= '1.4')?'red':(charity13JulContents.kpi2 > '1.4' && charity13JulContents.kpi2 <= '1.866666667')?'orange':(charity13JulContents.kpi2 > '1.866666667' && charity13JulContents.kpi2 < '2.333333333')?'yellow-7':(charity13JulContents.kpi2 >= '2.333333333' && charity13JulContents.kpi2 < '2.8')?'green':(charity13JulContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi3 == null)?'grey-2':(charity13JulContents.kpi3 >= '0' && charity13JulContents.kpi3 <= '2')?'red':(charity13JulContents.kpi3 > '2' && charity13JulContents.kpi3 <= '2.666666667')?'orange':(charity13JulContents.kpi3 > '2.666666667' && charity13JulContents.kpi3 < '3.333333333')?'yellow-7':(charity13JulContents.kpi3 >= '3.333333333' && charity13JulContents.kpi3 < '4')?'green':(charity13JulContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi4 == null)?'grey-2':(charity13JulContents.kpi4 >= '0' && charity13JulContents.kpi4 <= '2.2')?'red':(charity13JulContents.kpi4 > '2.2' && charity13JulContents.kpi4 <= '2.933333333')?'orange':(charity13JulContents.kpi4 > '2.933333333' && charity13JulContents.kpi4 < '3.666666667')?'yellow-7':(charity13JulContents.kpi4 >= '3.666666667' && charity13JulContents.kpi4 < '4.4')?'green':(charity13JulContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi5 == null)?'grey-2':(charity13JulContents.kpi5 >= '0' && charity13JulContents.kpi5 <= '1')?'red':(charity13JulContents.kpi5 > '1' && charity13JulContents.kpi5 <= '1.333333333')?'orange':(charity13JulContents.kpi5 > '1.333333333' && charity13JulContents.kpi5 < '1.666666667')?'yellow-7':(charity13JulContents.kpi5 >= '1.666666667' && charity13JulContents.kpi5 < '2')?'green':(charity13JulContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AugContents.kpi1 == null)?'grey-2':(charity13AugContents.kpi1 >= '0' && charity13AugContents.kpi1 <= '0.8')?'red':(charity13AugContents.kpi1 > '0.8' && charity13AugContents.kpi1 <= '1.066666667')?'orange':(charity13AugContents.kpi1 > '1.066666667' && charity13AugContents.kpi1 < '1.333333333')?'yellow-7':(charity13AugContents.kpi1 >= '1.333333333' && charity13AugContents.kpi1 < '1.6')?'green':(charity13AugContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi2 == null)?'grey-2':(charity13AugContents.kpi2 >= '0' && charity13AugContents.kpi2 <= '1.4')?'red':(charity13AugContents.kpi2 > '1.4' && charity13AugContents.kpi2 <= '1.866666667')?'orange':(charity13AugContents.kpi2 > '1.866666667' && charity13AugContents.kpi2 < '2.333333333')?'yellow-7':(charity13AugContents.kpi2 >= '2.333333333' && charity13AugContents.kpi2 < '2.8')?'green':(charity13AugContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi3 == null)?'grey-2':(charity13AugContents.kpi3 >= '0' && charity13AugContents.kpi3 <= '2')?'red':(charity13AugContents.kpi3 > '2' && charity13AugContents.kpi3 <= '2.666666667')?'orange':(charity13AugContents.kpi3 > '2.666666667' && charity13AugContents.kpi3 < '3.333333333')?'yellow-7':(charity13AugContents.kpi3 >= '3.333333333' && charity13AugContents.kpi3 < '4')?'green':(charity13AugContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi4 == null)?'grey-2':(charity13AugContents.kpi4 >= '0' && charity13AugContents.kpi4 <= '2.2')?'red':(charity13AugContents.kpi4 > '2.2' && charity13AugContents.kpi4 <= '2.933333333')?'orange':(charity13AugContents.kpi4 > '2.933333333' && charity13AugContents.kpi4 < '3.666666667')?'yellow-7':(charity13AugContents.kpi4 >= '3.666666667' && charity13AugContents.kpi4 < '4.4')?'green':(charity13AugContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi5 == null)?'grey-2':(charity13AugContents.kpi5 >= '0' && charity13AugContents.kpi5 <= '1')?'red':(charity13AugContents.kpi5 > '1' && charity13AugContents.kpi5 <= '1.333333333')?'orange':(charity13AugContents.kpi5 > '1.333333333' && charity13AugContents.kpi5 < '1.666666667')?'yellow-7':(charity13AugContents.kpi5 >= '1.666666667' && charity13AugContents.kpi5 < '2')?'green':(charity13AugContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13SepContents.kpi1 == null)?'grey-2':(charity13SepContents.kpi1 >= '0' && charity13SepContents.kpi1 <= '0.8')?'red':(charity13SepContents.kpi1 > '0.8' && charity13SepContents.kpi1 <= '1.066666667')?'orange':(charity13SepContents.kpi1 > '1.066666667' && charity13SepContents.kpi1 < '1.333333333')?'yellow-7':(charity13SepContents.kpi1 >= '1.333333333' && charity13SepContents.kpi1 < '1.6')?'green':(charity13SepContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi2 == null)?'grey-2':(charity13SepContents.kpi2 >= '0' && charity13SepContents.kpi2 <= '1.4')?'red':(charity13SepContents.kpi2 > '1.4' && charity13SepContents.kpi2 <= '1.866666667')?'orange':(charity13SepContents.kpi2 > '1.866666667' && charity13SepContents.kpi2 < '2.333333333')?'yellow-7':(charity13SepContents.kpi2 >= '2.333333333' && charity13SepContents.kpi2 < '2.8')?'green':(charity13SepContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi3 == null)?'grey-2':(charity13SepContents.kpi3 >= '0' && charity13SepContents.kpi3 <= '2')?'red':(charity13SepContents.kpi3 > '2' && charity13SepContents.kpi3 <= '2.666666667')?'orange':(charity13SepContents.kpi3 > '2.666666667' && charity13SepContents.kpi3 < '3.333333333')?'yellow-7':(charity13SepContents.kpi3 >= '3.333333333' && charity13SepContents.kpi3 < '4')?'green':(charity13SepContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi4 == null)?'grey-2':(charity13SepContents.kpi4 >= '0' && charity13SepContents.kpi4 <= '2.2')?'red':(charity13SepContents.kpi4 > '2.2' && charity13SepContents.kpi4 <= '2.933333333')?'orange':(charity13SepContents.kpi4 > '2.933333333' && charity13SepContents.kpi4 < '3.666666667')?'yellow-7':(charity13SepContents.kpi4 >= '3.666666667' && charity13SepContents.kpi4 < '4.4')?'green':(charity13SepContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi5 == null)?'grey-2':(charity13SepContents.kpi5 >= '0' && charity13SepContents.kpi5 <= '1')?'red':(charity13SepContents.kpi5 > '1' && charity13SepContents.kpi5 <= '1.333333333')?'orange':(charity13SepContents.kpi5 > '1.333333333' && charity13SepContents.kpi5 < '1.666666667')?'yellow-7':(charity13SepContents.kpi5 >= '1.666666667' && charity13SepContents.kpi5 < '2')?'green':(charity13SepContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13OctContents.kpi1 == null)?'grey-2':(charity13OctContents.kpi1 >= '0' && charity13OctContents.kpi1 <= '0.8')?'red':(charity13OctContents.kpi1 > '0.8' && charity13OctContents.kpi1 <= '1.066666667')?'orange':(charity13OctContents.kpi1 > '1.066666667' && charity13OctContents.kpi1 < '1.333333333')?'yellow-7':(charity13OctContents.kpi1 >= '1.333333333' && charity13OctContents.kpi1 < '1.6')?'green':(charity13OctContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi2 == null)?'grey-2':(charity13OctContents.kpi2 >= '0' && charity13OctContents.kpi2 <= '1.4')?'red':(charity13OctContents.kpi2 > '1.4' && charity13OctContents.kpi2 <= '1.866666667')?'orange':(charity13OctContents.kpi2 > '1.866666667' && charity13OctContents.kpi2 < '2.333333333')?'yellow-7':(charity13OctContents.kpi2 >= '2.333333333' && charity13OctContents.kpi2 < '2.8')?'green':(charity13OctContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi3 == null)?'grey-2':(charity13OctContents.kpi3 >= '0' && charity13OctContents.kpi3 <= '2')?'red':(charity13OctContents.kpi3 > '2' && charity13OctContents.kpi3 <= '2.666666667')?'orange':(charity13OctContents.kpi3 > '2.666666667' && charity13OctContents.kpi3 < '3.333333333')?'yellow-7':(charity13OctContents.kpi3 >= '3.333333333' && charity13OctContents.kpi3 < '4')?'green':(charity13OctContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi4 == null)?'grey-2':(charity13OctContents.kpi4 >= '0' && charity13OctContents.kpi4 <= '2.2')?'red':(charity13OctContents.kpi4 > '2.2' && charity13OctContents.kpi4 <= '2.933333333')?'orange':(charity13OctContents.kpi4 > '2.933333333' && charity13OctContents.kpi4 < '3.666666667')?'yellow-7':(charity13OctContents.kpi4 >= '3.666666667' && charity13OctContents.kpi4 < '4.4')?'green':(charity13OctContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi5 == null)?'grey-2':(charity13OctContents.kpi5 >= '0' && charity13OctContents.kpi5 <= '1')?'red':(charity13OctContents.kpi5 > '1' && charity13OctContents.kpi5 <= '1.333333333')?'orange':(charity13OctContents.kpi5 > '1.333333333' && charity13OctContents.kpi5 < '1.666666667')?'yellow-7':(charity13OctContents.kpi5 >= '1.666666667' && charity13OctContents.kpi5 < '2')?'green':(charity13OctContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13NovContents.kpi1 == null)?'grey-2':(charity13NovContents.kpi1 >= '0' && charity13NovContents.kpi1 <= '0.8')?'red':(charity13NovContents.kpi1 > '0.8' && charity13NovContents.kpi1 <= '1.066666667')?'orange':(charity13NovContents.kpi1 > '1.066666667' && charity13NovContents.kpi1 < '1.333333333')?'yellow-7':(charity13NovContents.kpi1 >= '1.333333333' && charity13NovContents.kpi1 < '1.6')?'green':(charity13NovContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi2 == null)?'grey-2':(charity13NovContents.kpi2 >= '0' && charity13NovContents.kpi2 <= '1.4')?'red':(charity13NovContents.kpi2 > '1.4' && charity13NovContents.kpi2 <= '1.866666667')?'orange':(charity13NovContents.kpi2 > '1.866666667' && charity13NovContents.kpi2 < '2.333333333')?'yellow-7':(charity13NovContents.kpi2 >= '2.333333333' && charity13NovContents.kpi2 < '2.8')?'green':(charity13NovContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi3 == null)?'grey-2':(charity13NovContents.kpi3 >= '0' && charity13NovContents.kpi3 <= '2')?'red':(charity13NovContents.kpi3 > '2' && charity13NovContents.kpi3 <= '2.666666667')?'orange':(charity13NovContents.kpi3 > '2.666666667' && charity13NovContents.kpi3 < '3.333333333')?'yellow-7':(charity13NovContents.kpi3 >= '3.333333333' && charity13NovContents.kpi3 < '4')?'green':(charity13NovContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi4 == null)?'grey-2':(charity13NovContents.kpi4 >= '0' && charity13NovContents.kpi4 <= '2.2')?'red':(charity13NovContents.kpi4 > '2.2' && charity13NovContents.kpi4 <= '2.933333333')?'orange':(charity13NovContents.kpi4 > '2.933333333' && charity13NovContents.kpi4 < '3.666666667')?'yellow-7':(charity13NovContents.kpi4 >= '3.666666667' && charity13NovContents.kpi4 < '4.4')?'green':(charity13NovContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi5 == null)?'grey-2':(charity13NovContents.kpi5 >= '0' && charity13NovContents.kpi5 <= '1')?'red':(charity13NovContents.kpi5 > '1' && charity13NovContents.kpi5 <= '1.333333333')?'orange':(charity13NovContents.kpi5 > '1.333333333' && charity13NovContents.kpi5 < '1.666666667')?'yellow-7':(charity13NovContents.kpi5 >= '1.666666667' && charity13NovContents.kpi5 < '2')?'green':(charity13NovContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13DecContents.kpi1 == null)?'grey-2':(charity13DecContents.kpi1 >= '0' && charity13DecContents.kpi1 <= '0.8')?'red':(charity13DecContents.kpi1 > '0.8' && charity13DecContents.kpi1 <= '1.066666667')?'orange':(charity13DecContents.kpi1 > '1.066666667' && charity13DecContents.kpi1 < '1.333333333')?'yellow-7':(charity13DecContents.kpi1 >= '1.333333333' && charity13DecContents.kpi1 < '1.6')?'green':(charity13DecContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi2 == null)?'grey-2':(charity13DecContents.kpi2 >= '0' && charity13DecContents.kpi2 <= '1.4')?'red':(charity13DecContents.kpi2 > '1.4' && charity13DecContents.kpi2 <= '1.866666667')?'orange':(charity13DecContents.kpi2 > '1.866666667' && charity13DecContents.kpi2 < '2.333333333')?'yellow-7':(charity13DecContents.kpi2 >= '2.333333333' && charity13DecContents.kpi2 < '2.8')?'green':(charity13DecContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi3 == null)?'grey-2':(charity13DecContents.kpi3 >= '0' && charity13DecContents.kpi3 <= '2')?'red':(charity13DecContents.kpi3 > '2' && charity13DecContents.kpi3 <= '2.666666667')?'orange':(charity13DecContents.kpi3 > '2.666666667' && charity13DecContents.kpi3 < '3.333333333')?'yellow-7':(charity13DecContents.kpi3 >= '3.333333333' && charity13DecContents.kpi3 < '4')?'green':(charity13DecContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi4 == null)?'grey-2':(charity13DecContents.kpi4 >= '0' && charity13DecContents.kpi4 <= '2.2')?'red':(charity13DecContents.kpi4 > '2.2' && charity13DecContents.kpi4 <= '2.933333333')?'orange':(charity13DecContents.kpi4 > '2.933333333' && charity13DecContents.kpi4 < '3.666666667')?'yellow-7':(charity13DecContents.kpi4 >= '3.666666667' && charity13DecContents.kpi4 < '4.4')?'green':(charity13DecContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi5 == null)?'grey-2':(charity13DecContents.kpi5 >= '0' && charity13DecContents.kpi5 <= '1')?'red':(charity13DecContents.kpi5 > '1' && charity13DecContents.kpi5 <= '1.333333333')?'orange':(charity13DecContents.kpi5 > '1.333333333' && charity13DecContents.kpi5 < '1.666666667')?'yellow-7':(charity13DecContents.kpi5 >= '1.666666667' && charity13DecContents.kpi5 < '2')?'green':(charity13DecContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JanContents.kpi1 == null)?'grey-2':(charity13JanContents.kpi1 >= '0' && charity13JanContents.kpi1 <= '0.8')?'red':(charity13JanContents.kpi1 > '0.8' && charity13JanContents.kpi1 <= '1.066666667')?'orange':(charity13JanContents.kpi1 > '1.066666667' && charity13JanContents.kpi1 < '1.333333333')?'yellow-7':(charity13JanContents.kpi1 >= '1.333333333' && charity13JanContents.kpi1 < '1.6')?'green':(charity13JanContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi2 == null)?'grey-2':(charity13JanContents.kpi2 >= '0' && charity13JanContents.kpi2 <= '1.4')?'red':(charity13JanContents.kpi2 > '1.4' && charity13JanContents.kpi2 <= '1.866666667')?'orange':(charity13JanContents.kpi2 > '1.866666667' && charity13JanContents.kpi2 < '2.333333333')?'yellow-7':(charity13JanContents.kpi2 >= '2.333333333' && charity13JanContents.kpi2 < '2.8')?'green':(charity13JanContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi3 == null)?'grey-2':(charity13JanContents.kpi3 >= '0' && charity13JanContents.kpi3 <= '2')?'red':(charity13JanContents.kpi3 > '2' && charity13JanContents.kpi3 <= '2.666666667')?'orange':(charity13JanContents.kpi3 > '2.666666667' && charity13JanContents.kpi3 < '3.333333333')?'yellow-7':(charity13JanContents.kpi3 >= '3.333333333' && charity13JanContents.kpi3 < '4')?'green':(charity13JanContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi4 == null)?'grey-2':(charity13JanContents.kpi4 >= '0' && charity13JanContents.kpi4 <= '2.2')?'red':(charity13JanContents.kpi4 > '2.2' && charity13JanContents.kpi4 <= '2.933333333')?'orange':(charity13JanContents.kpi4 > '2.933333333' && charity13JanContents.kpi4 < '3.666666667')?'yellow-7':(charity13JanContents.kpi4 >= '3.666666667' && charity13JanContents.kpi4 < '4.4')?'green':(charity13JanContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi5 == null)?'grey-2':(charity13JanContents.kpi5 >= '0' && charity13JanContents.kpi5 <= '1')?'red':(charity13JanContents.kpi5 > '1' && charity13JanContents.kpi5 <= '1.333333333')?'orange':(charity13JanContents.kpi5 > '1.333333333' && charity13JanContents.kpi5 < '1.666666667')?'yellow-7':(charity13JanContents.kpi5 >= '1.666666667' && charity13JanContents.kpi5 < '2')?'green':(charity13JanContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13FebContents.kpi1 == null)?'grey-2':(charity13FebContents.kpi1 >= '0' && charity13FebContents.kpi1 <= '0.8')?'red':(charity13FebContents.kpi1 > '0.8' && charity13FebContents.kpi1 <= '1.066666667')?'orange':(charity13FebContents.kpi1 > '1.066666667' && charity13FebContents.kpi1 < '1.333333333')?'yellow-7':(charity13FebContents.kpi1 >= '1.333333333' && charity13FebContents.kpi1 < '1.6')?'green':(charity13FebContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi2 == null)?'grey-2':(charity13FebContents.kpi2 >= '0' && charity13FebContents.kpi2 <= '1.4')?'red':(charity13FebContents.kpi2 > '1.4' && charity13FebContents.kpi2 <= '1.866666667')?'orange':(charity13FebContents.kpi2 > '1.866666667' && charity13FebContents.kpi2 < '2.333333333')?'yellow-7':(charity13FebContents.kpi2 >= '2.333333333' && charity13FebContents.kpi2 < '2.8')?'green':(charity13FebContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi3 == null)?'grey-2':(charity13FebContents.kpi3 >= '0' && charity13FebContents.kpi3 <= '2')?'red':(charity13FebContents.kpi3 > '2' && charity13FebContents.kpi3 <= '2.666666667')?'orange':(charity13FebContents.kpi3 > '2.666666667' && charity13FebContents.kpi3 < '3.333333333')?'yellow-7':(charity13FebContents.kpi3 >= '3.333333333' && charity13FebContents.kpi3 < '4')?'green':(charity13FebContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi4 == null)?'grey-2':(charity13FebContents.kpi4 >= '0' && charity13FebContents.kpi4 <= '2.2')?'red':(charity13FebContents.kpi4 > '2.2' && charity13FebContents.kpi4 <= '2.933333333')?'orange':(charity13FebContents.kpi4 > '2.933333333' && charity13FebContents.kpi4 < '3.666666667')?'yellow-7':(charity13FebContents.kpi4 >= '3.666666667' && charity13FebContents.kpi4 < '4.4')?'green':(charity13FebContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi5 == null)?'grey-2':(charity13FebContents.kpi5 >= '0' && charity13FebContents.kpi5 <= '1')?'red':(charity13FebContents.kpi5 > '1' && charity13FebContents.kpi5 <= '1.333333333')?'orange':(charity13FebContents.kpi5 > '1.333333333' && charity13FebContents.kpi5 < '1.666666667')?'yellow-7':(charity13FebContents.kpi5 >= '1.666666667' && charity13FebContents.kpi5 < '2')?'green':(charity13FebContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MarContents.kpi1 == null)?'grey-2':(charity13MarContents.kpi1 >= '0' && charity13MarContents.kpi1 <= '0.8')?'red':(charity13MarContents.kpi1 > '0.8' && charity13MarContents.kpi1 <= '1.066666667')?'orange':(charity13MarContents.kpi1 > '1.066666667' && charity13MarContents.kpi1 < '1.333333333')?'yellow-7':(charity13MarContents.kpi1 >= '1.333333333' && charity13MarContents.kpi1 < '1.6')?'green':(charity13MarContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi2 == null)?'grey-2':(charity13MarContents.kpi2 >= '0' && charity13MarContents.kpi2 <= '1.4')?'red':(charity13MarContents.kpi2 > '1.4' && charity13MarContents.kpi2 <= '1.866666667')?'orange':(charity13MarContents.kpi2 > '1.866666667' && charity13MarContents.kpi2 < '2.333333333')?'yellow-7':(charity13MarContents.kpi2 >= '2.333333333' && charity13MarContents.kpi2 < '2.8')?'green':(charity13MarContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi3 == null)?'grey-2':(charity13MarContents.kpi3 >= '0' && charity13MarContents.kpi3 <= '2')?'red':(charity13MarContents.kpi3 > '2' && charity13MarContents.kpi3 <= '2.666666667')?'orange':(charity13MarContents.kpi3 > '2.666666667' && charity13MarContents.kpi3 < '3.333333333')?'yellow-7':(charity13MarContents.kpi3 >= '3.333333333' && charity13MarContents.kpi3 < '4')?'green':(charity13MarContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi4 == null)?'grey-2':(charity13MarContents.kpi4 >= '0' && charity13MarContents.kpi4 <= '2.2')?'red':(charity13MarContents.kpi4 > '2.2' && charity13MarContents.kpi4 <= '2.933333333')?'orange':(charity13MarContents.kpi4 > '2.933333333' && charity13MarContents.kpi4 < '3.666666667')?'yellow-7':(charity13MarContents.kpi4 >= '3.666666667' && charity13MarContents.kpi4 < '4.4')?'green':(charity13MarContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi5 == null)?'grey-2':(charity13MarContents.kpi5 >= '0' && charity13MarContents.kpi5 <= '1')?'red':(charity13MarContents.kpi5 > '1' && charity13MarContents.kpi5 <= '1.333333333')?'orange':(charity13MarContents.kpi5 > '1.333333333' && charity13MarContents.kpi5 < '1.666666667')?'yellow-7':(charity13MarContents.kpi5 >= '1.666666667' && charity13MarContents.kpi5 < '2')?'green':(charity13MarContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AprContents.kpi1 == null)?'grey-2':(charity13AprContents.kpi1 >= '0' && charity13AprContents.kpi1 <= '0.8')?'red':(charity13AprContents.kpi1 > '0.8' && charity13AprContents.kpi1 <= '1.066666667')?'orange':(charity13AprContents.kpi1 > '1.066666667' && charity13AprContents.kpi1 < '1.333333333')?'yellow-7':(charity13AprContents.kpi1 >= '1.333333333' && charity13AprContents.kpi1 < '1.6')?'green':(charity13AprContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi2 == null)?'grey-2':(charity13AprContents.kpi2 >= '0' && charity13AprContents.kpi2 <= '1.4')?'red':(charity13AprContents.kpi2 > '1.4' && charity13AprContents.kpi2 <= '1.866666667')?'orange':(charity13AprContents.kpi2 > '1.866666667' && charity13AprContents.kpi2 < '2.333333333')?'yellow-7':(charity13AprContents.kpi2 >= '2.333333333' && charity13AprContents.kpi2 < '2.8')?'green':(charity13AprContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi3 == null)?'grey-2':(charity13AprContents.kpi3 >= '0' && charity13AprContents.kpi3 <= '2')?'red':(charity13AprContents.kpi3 > '2' && charity13AprContents.kpi3 <= '2.666666667')?'orange':(charity13AprContents.kpi3 > '2.666666667' && charity13AprContents.kpi3 < '3.333333333')?'yellow-7':(charity13AprContents.kpi3 >= '3.333333333' && charity13AprContents.kpi3 < '4')?'green':(charity13AprContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi4 == null)?'grey-2':(charity13AprContents.kpi4 >= '0' && charity13AprContents.kpi4 <= '2.2')?'red':(charity13AprContents.kpi4 > '2.2' && charity13AprContents.kpi4 <= '2.933333333')?'orange':(charity13AprContents.kpi4 > '2.933333333' && charity13AprContents.kpi4 < '3.666666667')?'yellow-7':(charity13AprContents.kpi4 >= '3.666666667' && charity13AprContents.kpi4 < '4.4')?'green':(charity13AprContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi5 == null)?'grey-2':(charity13AprContents.kpi5 >= '0' && charity13AprContents.kpi5 <= '1')?'red':(charity13AprContents.kpi5 > '1' && charity13AprContents.kpi5 <= '1.333333333')?'orange':(charity13AprContents.kpi5 > '1.333333333' && charity13AprContents.kpi5 < '1.666666667')?'yellow-7':(charity13AprContents.kpi5 >= '1.666666667' && charity13AprContents.kpi5 < '2')?'green':(charity13AprContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MayContents.kpi1 == null)?'grey-2':(charity13MayContents.kpi1 >= '0' && charity13MayContents.kpi1 <= '0.8')?'red':(charity13MayContents.kpi1 > '0.8' && charity13MayContents.kpi1 <= '1.066666667')?'orange':(charity13MayContents.kpi1 > '1.066666667' && charity13MayContents.kpi1 < '1.333333333')?'yellow-7':(charity13MayContents.kpi1 >= '1.333333333' && charity13MayContents.kpi1 < '1.6')?'green':(charity13MayContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi2 == null)?'grey-2':(charity13MayContents.kpi2 >= '0' && charity13MayContents.kpi2 <= '1.4')?'red':(charity13MayContents.kpi2 > '1.4' && charity13MayContents.kpi2 <= '1.866666667')?'orange':(charity13MayContents.kpi2 > '1.866666667' && charity13MayContents.kpi2 < '2.333333333')?'yellow-7':(charity13MayContents.kpi2 >= '2.333333333' && charity13MayContents.kpi2 < '2.8')?'green':(charity13MayContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi3 == null)?'grey-2':(charity13MayContents.kpi3 >= '0' && charity13MayContents.kpi3 <= '2')?'red':(charity13MayContents.kpi3 > '2' && charity13MayContents.kpi3 <= '2.666666667')?'orange':(charity13MayContents.kpi3 > '2.666666667' && charity13MayContents.kpi3 < '3.333333333')?'yellow-7':(charity13MayContents.kpi3 >= '3.333333333' && charity13MayContents.kpi3 < '4')?'green':(charity13MayContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi4 == null)?'grey-2':(charity13MayContents.kpi4 >= '0' && charity13MayContents.kpi4 <= '2.2')?'red':(charity13MayContents.kpi4 > '2.2' && charity13MayContents.kpi4 <= '2.933333333')?'orange':(charity13MayContents.kpi4 > '2.933333333' && charity13MayContents.kpi4 < '3.666666667')?'yellow-7':(charity13MayContents.kpi4 >= '3.666666667' && charity13MayContents.kpi4 < '4.4')?'green':(charity13MayContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi5 == null)?'grey-2':(charity13MayContents.kpi5 >= '0' && charity13MayContents.kpi5 <= '1')?'red':(charity13MayContents.kpi5 > '1' && charity13MayContents.kpi5 <= '1.333333333')?'orange':(charity13MayContents.kpi5 > '1.333333333' && charity13MayContents.kpi5 < '1.666666667')?'yellow-7':(charity13MayContents.kpi5 >= '1.666666667' && charity13MayContents.kpi5 < '2')?'green':(charity13MayContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JunContents.kpi1 == null)?'grey-2':(charity13JunContents.kpi1 >= '0' && charity13JunContents.kpi1 <= '0.8')?'red':(charity13JunContents.kpi1 > '0.8' && charity13JunContents.kpi1 <= '1.066666667')?'orange':(charity13JunContents.kpi1 > '1.066666667' && charity13JunContents.kpi1 < '1.333333333')?'yellow-7':(charity13JunContents.kpi1 >= '1.333333333' && charity13JunContents.kpi1 < '1.6')?'green':(charity13JunContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi2 == null)?'grey-2':(charity13JunContents.kpi2 >= '0' && charity13JunContents.kpi2 <= '1.4')?'red':(charity13JunContents.kpi2 > '1.4' && charity13JunContents.kpi2 <= '1.866666667')?'orange':(charity13JunContents.kpi2 > '1.866666667' && charity13JunContents.kpi2 < '2.333333333')?'yellow-7':(charity13JunContents.kpi2 >= '2.333333333' && charity13JunContents.kpi2 < '2.8')?'green':(charity13JunContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi3 == null)?'grey-2':(charity13JunContents.kpi3 >= '0' && charity13JunContents.kpi3 <= '2')?'red':(charity13JunContents.kpi3 > '2' && charity13JunContents.kpi3 <= '2.666666667')?'orange':(charity13JunContents.kpi3 > '2.666666667' && charity13JunContents.kpi3 < '3.333333333')?'yellow-7':(charity13JunContents.kpi3 >= '3.333333333' && charity13JunContents.kpi3 < '4')?'green':(charity13JunContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi4 == null)?'grey-2':(charity13JunContents.kpi4 >= '0' && charity13JunContents.kpi4 <= '2.2')?'red':(charity13JunContents.kpi4 > '2.2' && charity13JunContents.kpi4 <= '2.933333333')?'orange':(charity13JunContents.kpi4 > '2.933333333' && charity13JunContents.kpi4 < '3.666666667')?'yellow-7':(charity13JunContents.kpi4 >= '3.666666667' && charity13JunContents.kpi4 < '4.4')?'green':(charity13JunContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi5 == null)?'grey-2':(charity13JunContents.kpi5 >= '0' && charity13JunContents.kpi5 <= '1')?'red':(charity13JunContents.kpi5 > '1' && charity13JunContents.kpi5 <= '1.333333333')?'orange':(charity13JunContents.kpi5 > '1.333333333' && charity13JunContents.kpi5 < '1.666666667')?'yellow-7':(charity13JunContents.kpi5 >= '1.666666667' && charity13JunContents.kpi5 < '2')?'green':(charity13JunContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JulContents.kpi1 == null)?'grey-2':(charity13JulContents.kpi1 >= '0' && charity13JulContents.kpi1 <= '0.8')?'red':(charity13JulContents.kpi1 > '0.8' && charity13JulContents.kpi1 <= '1.066666667')?'orange':(charity13JulContents.kpi1 > '1.066666667' && charity13JulContents.kpi1 < '1.333333333')?'yellow-7':(charity13JulContents.kpi1 >= '1.333333333' && charity13JulContents.kpi1 < '1.6')?'green':(charity13JulContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi2 == null)?'grey-2':(charity13JulContents.kpi2 >= '0' && charity13JulContents.kpi2 <= '1.4')?'red':(charity13JulContents.kpi2 > '1.4' && charity13JulContents.kpi2 <= '1.866666667')?'orange':(charity13JulContents.kpi2 > '1.866666667' && charity13JulContents.kpi2 < '2.333333333')?'yellow-7':(charity13JulContents.kpi2 >= '2.333333333' && charity13JulContents.kpi2 < '2.8')?'green':(charity13JulContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi3 == null)?'grey-2':(charity13JulContents.kpi3 >= '0' && charity13JulContents.kpi3 <= '2')?'red':(charity13JulContents.kpi3 > '2' && charity13JulContents.kpi3 <= '2.666666667')?'orange':(charity13JulContents.kpi3 > '2.666666667' && charity13JulContents.kpi3 < '3.333333333')?'yellow-7':(charity13JulContents.kpi3 >= '3.333333333' && charity13JulContents.kpi3 < '4')?'green':(charity13JulContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi4 == null)?'grey-2':(charity13JulContents.kpi4 >= '0' && charity13JulContents.kpi4 <= '2.2')?'red':(charity13JulContents.kpi4 > '2.2' && charity13JulContents.kpi4 <= '2.933333333')?'orange':(charity13JulContents.kpi4 > '2.933333333' && charity13JulContents.kpi4 < '3.666666667')?'yellow-7':(charity13JulContents.kpi4 >= '3.666666667' && charity13JulContents.kpi4 < '4.4')?'green':(charity13JulContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi5 == null)?'grey-2':(charity13JulContents.kpi5 >= '0' && charity13JulContents.kpi5 <= '1')?'red':(charity13JulContents.kpi5 > '1' && charity13JulContents.kpi5 <= '1.333333333')?'orange':(charity13JulContents.kpi5 > '1.333333333' && charity13JulContents.kpi5 < '1.666666667')?'yellow-7':(charity13JulContents.kpi5 >= '1.666666667' && charity13JulContents.kpi5 < '2')?'green':(charity13JulContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AugContents.kpi1 == null)?'grey-2':(charity13AugContents.kpi1 >= '0' && charity13AugContents.kpi1 <= '0.8')?'red':(charity13AugContents.kpi1 > '0.8' && charity13AugContents.kpi1 <= '1.066666667')?'orange':(charity13AugContents.kpi1 > '1.066666667' && charity13AugContents.kpi1 < '1.333333333')?'yellow-7':(charity13AugContents.kpi1 >= '1.333333333' && charity13AugContents.kpi1 < '1.6')?'green':(charity13AugContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi2 == null)?'grey-2':(charity13AugContents.kpi2 >= '0' && charity13AugContents.kpi2 <= '1.4')?'red':(charity13AugContents.kpi2 > '1.4' && charity13AugContents.kpi2 <= '1.866666667')?'orange':(charity13AugContents.kpi2 > '1.866666667' && charity13AugContents.kpi2 < '2.333333333')?'yellow-7':(charity13AugContents.kpi2 >= '2.333333333' && charity13AugContents.kpi2 < '2.8')?'green':(charity13AugContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi3 == null)?'grey-2':(charity13AugContents.kpi3 >= '0' && charity13AugContents.kpi3 <= '2')?'red':(charity13AugContents.kpi3 > '2' && charity13AugContents.kpi3 <= '2.666666667')?'orange':(charity13AugContents.kpi3 > '2.666666667' && charity13AugContents.kpi3 < '3.333333333')?'yellow-7':(charity13AugContents.kpi3 >= '3.333333333' && charity13AugContents.kpi3 < '4')?'green':(charity13AugContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi4 == null)?'grey-2':(charity13AugContents.kpi4 >= '0' && charity13AugContents.kpi4 <= '2.2')?'red':(charity13AugContents.kpi4 > '2.2' && charity13AugContents.kpi4 <= '2.933333333')?'orange':(charity13AugContents.kpi4 > '2.933333333' && charity13AugContents.kpi4 < '3.666666667')?'yellow-7':(charity13AugContents.kpi4 >= '3.666666667' && charity13AugContents.kpi4 < '4.4')?'green':(charity13AugContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi5 == null)?'grey-2':(charity13AugContents.kpi5 >= '0' && charity13AugContents.kpi5 <= '1')?'red':(charity13AugContents.kpi5 > '1' && charity13AugContents.kpi5 <= '1.333333333')?'orange':(charity13AugContents.kpi5 > '1.333333333' && charity13AugContents.kpi5 < '1.666666667')?'yellow-7':(charity13AugContents.kpi5 >= '1.666666667' && charity13AugContents.kpi5 < '2')?'green':(charity13AugContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13SepContents.kpi1 == null)?'grey-2':(charity13SepContents.kpi1 >= '0' && charity13SepContents.kpi1 <= '0.8')?'red':(charity13SepContents.kpi1 > '0.8' && charity13SepContents.kpi1 <= '1.066666667')?'orange':(charity13SepContents.kpi1 > '1.066666667' && charity13SepContents.kpi1 < '1.333333333')?'yellow-7':(charity13SepContents.kpi1 >= '1.333333333' && charity13SepContents.kpi1 < '1.6')?'green':(charity13SepContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi2 == null)?'grey-2':(charity13SepContents.kpi2 >= '0' && charity13SepContents.kpi2 <= '1.4')?'red':(charity13SepContents.kpi2 > '1.4' && charity13SepContents.kpi2 <= '1.866666667')?'orange':(charity13SepContents.kpi2 > '1.866666667' && charity13SepContents.kpi2 < '2.333333333')?'yellow-7':(charity13SepContents.kpi2 >= '2.333333333' && charity13SepContents.kpi2 < '2.8')?'green':(charity13SepContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi3 == null)?'grey-2':(charity13SepContents.kpi3 >= '0' && charity13SepContents.kpi3 <= '2')?'red':(charity13SepContents.kpi3 > '2' && charity13SepContents.kpi3 <= '2.666666667')?'orange':(charity13SepContents.kpi3 > '2.666666667' && charity13SepContents.kpi3 < '3.333333333')?'yellow-7':(charity13SepContents.kpi3 >= '3.333333333' && charity13SepContents.kpi3 < '4')?'green':(charity13SepContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi4 == null)?'grey-2':(charity13SepContents.kpi4 >= '0' && charity13SepContents.kpi4 <= '2.2')?'red':(charity13SepContents.kpi4 > '2.2' && charity13SepContents.kpi4 <= '2.933333333')?'orange':(charity13SepContents.kpi4 > '2.933333333' && charity13SepContents.kpi4 < '3.666666667')?'yellow-7':(charity13SepContents.kpi4 >= '3.666666667' && charity13SepContents.kpi4 < '4.4')?'green':(charity13SepContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi5 == null)?'grey-2':(charity13SepContents.kpi5 >= '0' && charity13SepContents.kpi5 <= '1')?'red':(charity13SepContents.kpi5 > '1' && charity13SepContents.kpi5 <= '1.333333333')?'orange':(charity13SepContents.kpi5 > '1.333333333' && charity13SepContents.kpi5 < '1.666666667')?'yellow-7':(charity13SepContents.kpi5 >= '1.666666667' && charity13SepContents.kpi5 < '2')?'green':(charity13SepContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13OctContents.kpi1 == null)?'grey-2':(charity13OctContents.kpi1 >= '0' && charity13OctContents.kpi1 <= '0.8')?'red':(charity13OctContents.kpi1 > '0.8' && charity13OctContents.kpi1 <= '1.066666667')?'orange':(charity13OctContents.kpi1 > '1.066666667' && charity13OctContents.kpi1 < '1.333333333')?'yellow-7':(charity13OctContents.kpi1 >= '1.333333333' && charity13OctContents.kpi1 < '1.6')?'green':(charity13OctContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi2 == null)?'grey-2':(charity13OctContents.kpi2 >= '0' && charity13OctContents.kpi2 <= '1.4')?'red':(charity13OctContents.kpi2 > '1.4' && charity13OctContents.kpi2 <= '1.866666667')?'orange':(charity13OctContents.kpi2 > '1.866666667' && charity13OctContents.kpi2 < '2.333333333')?'yellow-7':(charity13OctContents.kpi2 >= '2.333333333' && charity13OctContents.kpi2 < '2.8')?'green':(charity13OctContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi3 == null)?'grey-2':(charity13OctContents.kpi3 >= '0' && charity13OctContents.kpi3 <= '2')?'red':(charity13OctContents.kpi3 > '2' && charity13OctContents.kpi3 <= '2.666666667')?'orange':(charity13OctContents.kpi3 > '2.666666667' && charity13OctContents.kpi3 < '3.333333333')?'yellow-7':(charity13OctContents.kpi3 >= '3.333333333' && charity13OctContents.kpi3 < '4')?'green':(charity13OctContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi4 == null)?'grey-2':(charity13OctContents.kpi4 >= '0' && charity13OctContents.kpi4 <= '2.2')?'red':(charity13OctContents.kpi4 > '2.2' && charity13OctContents.kpi4 <= '2.933333333')?'orange':(charity13OctContents.kpi4 > '2.933333333' && charity13OctContents.kpi4 < '3.666666667')?'yellow-7':(charity13OctContents.kpi4 >= '3.666666667' && charity13OctContents.kpi4 < '4.4')?'green':(charity13OctContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi5 == null)?'grey-2':(charity13OctContents.kpi5 >= '0' && charity13OctContents.kpi5 <= '1')?'red':(charity13OctContents.kpi5 > '1' && charity13OctContents.kpi5 <= '1.333333333')?'orange':(charity13OctContents.kpi5 > '1.333333333' && charity13OctContents.kpi5 < '1.666666667')?'yellow-7':(charity13OctContents.kpi5 >= '1.666666667' && charity13OctContents.kpi5 < '2')?'green':(charity13OctContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13NovContents.kpi1 == null)?'grey-2':(charity13NovContents.kpi1 >= '0' && charity13NovContents.kpi1 <= '0.8')?'red':(charity13NovContents.kpi1 > '0.8' && charity13NovContents.kpi1 <= '1.066666667')?'orange':(charity13NovContents.kpi1 > '1.066666667' && charity13NovContents.kpi1 < '1.333333333')?'yellow-7':(charity13NovContents.kpi1 >= '1.333333333' && charity13NovContents.kpi1 < '1.6')?'green':(charity13NovContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi2 == null)?'grey-2':(charity13NovContents.kpi2 >= '0' && charity13NovContents.kpi2 <= '1.4')?'red':(charity13NovContents.kpi2 > '1.4' && charity13NovContents.kpi2 <= '1.866666667')?'orange':(charity13NovContents.kpi2 > '1.866666667' && charity13NovContents.kpi2 < '2.333333333')?'yellow-7':(charity13NovContents.kpi2 >= '2.333333333' && charity13NovContents.kpi2 < '2.8')?'green':(charity13NovContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi3 == null)?'grey-2':(charity13NovContents.kpi3 >= '0' && charity13NovContents.kpi3 <= '2')?'red':(charity13NovContents.kpi3 > '2' && charity13NovContents.kpi3 <= '2.666666667')?'orange':(charity13NovContents.kpi3 > '2.666666667' && charity13NovContents.kpi3 < '3.333333333')?'yellow-7':(charity13NovContents.kpi3 >= '3.333333333' && charity13NovContents.kpi3 < '4')?'green':(charity13NovContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi4 == null)?'grey-2':(charity13NovContents.kpi4 >= '0' && charity13NovContents.kpi4 <= '2.2')?'red':(charity13NovContents.kpi4 > '2.2' && charity13NovContents.kpi4 <= '2.933333333')?'orange':(charity13NovContents.kpi4 > '2.933333333' && charity13NovContents.kpi4 < '3.666666667')?'yellow-7':(charity13NovContents.kpi4 >= '3.666666667' && charity13NovContents.kpi4 < '4.4')?'green':(charity13NovContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi5 == null)?'grey-2':(charity13NovContents.kpi5 >= '0' && charity13NovContents.kpi5 <= '1')?'red':(charity13NovContents.kpi5 > '1' && charity13NovContents.kpi5 <= '1.333333333')?'orange':(charity13NovContents.kpi5 > '1.333333333' && charity13NovContents.kpi5 < '1.666666667')?'yellow-7':(charity13NovContents.kpi5 >= '1.666666667' && charity13NovContents.kpi5 < '2')?'green':(charity13NovContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13DecContents.kpi1 == null)?'grey-2':(charity13DecContents.kpi1 >= '0' && charity13DecContents.kpi1 <= '0.8')?'red':(charity13DecContents.kpi1 > '0.8' && charity13DecContents.kpi1 <= '1.066666667')?'orange':(charity13DecContents.kpi1 > '1.066666667' && charity13DecContents.kpi1 < '1.333333333')?'yellow-7':(charity13DecContents.kpi1 >= '1.333333333' && charity13DecContents.kpi1 < '1.6')?'green':(charity13DecContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi2 == null)?'grey-2':(charity13DecContents.kpi2 >= '0' && charity13DecContents.kpi2 <= '1.4')?'red':(charity13DecContents.kpi2 > '1.4' && charity13DecContents.kpi2 <= '1.866666667')?'orange':(charity13DecContents.kpi2 > '1.866666667' && charity13DecContents.kpi2 < '2.333333333')?'yellow-7':(charity13DecContents.kpi2 >= '2.333333333' && charity13DecContents.kpi2 < '2.8')?'green':(charity13DecContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi3 == null)?'grey-2':(charity13DecContents.kpi3 >= '0' && charity13DecContents.kpi3 <= '2')?'red':(charity13DecContents.kpi3 > '2' && charity13DecContents.kpi3 <= '2.666666667')?'orange':(charity13DecContents.kpi3 > '2.666666667' && charity13DecContents.kpi3 < '3.333333333')?'yellow-7':(charity13DecContents.kpi3 >= '3.333333333' && charity13DecContents.kpi3 < '4')?'green':(charity13DecContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi4 == null)?'grey-2':(charity13DecContents.kpi4 >= '0' && charity13DecContents.kpi4 <= '2.2')?'red':(charity13DecContents.kpi4 > '2.2' && charity13DecContents.kpi4 <= '2.933333333')?'orange':(charity13DecContents.kpi4 > '2.933333333' && charity13DecContents.kpi4 < '3.666666667')?'yellow-7':(charity13DecContents.kpi4 >= '3.666666667' && charity13DecContents.kpi4 < '4.4')?'green':(charity13DecContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi5 == null)?'grey-2':(charity13DecContents.kpi5 >= '0' && charity13DecContents.kpi5 <= '1')?'red':(charity13DecContents.kpi5 > '1' && charity13DecContents.kpi5 <= '1.333333333')?'orange':(charity13DecContents.kpi5 > '1.333333333' && charity13DecContents.kpi5 < '1.666666667')?'yellow-7':(charity13DecContents.kpi5 >= '1.666666667' && charity13DecContents.kpi5 < '2')?'green':(charity13DecContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JanContents.kpi1 == null)?'grey-2':(charity13JanContents.kpi1 >= '0' && charity13JanContents.kpi1 <= '0.8')?'red':(charity13JanContents.kpi1 > '0.8' && charity13JanContents.kpi1 <= '1.066666667')?'orange':(charity13JanContents.kpi1 > '1.066666667' && charity13JanContents.kpi1 < '1.333333333')?'yellow-7':(charity13JanContents.kpi1 >= '1.333333333' && charity13JanContents.kpi1 < '1.6')?'green':(charity13JanContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi2 == null)?'grey-2':(charity13JanContents.kpi2 >= '0' && charity13JanContents.kpi2 <= '1.4')?'red':(charity13JanContents.kpi2 > '1.4' && charity13JanContents.kpi2 <= '1.866666667')?'orange':(charity13JanContents.kpi2 > '1.866666667' && charity13JanContents.kpi2 < '2.333333333')?'yellow-7':(charity13JanContents.kpi2 >= '2.333333333' && charity13JanContents.kpi2 < '2.8')?'green':(charity13JanContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi3 == null)?'grey-2':(charity13JanContents.kpi3 >= '0' && charity13JanContents.kpi3 <= '2')?'red':(charity13JanContents.kpi3 > '2' && charity13JanContents.kpi3 <= '2.666666667')?'orange':(charity13JanContents.kpi3 > '2.666666667' && charity13JanContents.kpi3 < '3.333333333')?'yellow-7':(charity13JanContents.kpi3 >= '3.333333333' && charity13JanContents.kpi3 < '4')?'green':(charity13JanContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi4 == null)?'grey-2':(charity13JanContents.kpi4 >= '0' && charity13JanContents.kpi4 <= '2.2')?'red':(charity13JanContents.kpi4 > '2.2' && charity13JanContents.kpi4 <= '2.933333333')?'orange':(charity13JanContents.kpi4 > '2.933333333' && charity13JanContents.kpi4 < '3.666666667')?'yellow-7':(charity13JanContents.kpi4 >= '3.666666667' && charity13JanContents.kpi4 < '4.4')?'green':(charity13JanContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi5 == null)?'grey-2':(charity13JanContents.kpi5 >= '0' && charity13JanContents.kpi5 <= '1')?'red':(charity13JanContents.kpi5 > '1' && charity13JanContents.kpi5 <= '1.333333333')?'orange':(charity13JanContents.kpi5 > '1.333333333' && charity13JanContents.kpi5 < '1.666666667')?'yellow-7':(charity13JanContents.kpi5 >= '1.666666667' && charity13JanContents.kpi5 < '2')?'green':(charity13JanContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13FebContents.kpi1 == null)?'grey-2':(charity13FebContents.kpi1 >= '0' && charity13FebContents.kpi1 <= '0.8')?'red':(charity13FebContents.kpi1 > '0.8' && charity13FebContents.kpi1 <= '1.066666667')?'orange':(charity13FebContents.kpi1 > '1.066666667' && charity13FebContents.kpi1 < '1.333333333')?'yellow-7':(charity13FebContents.kpi1 >= '1.333333333' && charity13FebContents.kpi1 < '1.6')?'green':(charity13FebContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi2 == null)?'grey-2':(charity13FebContents.kpi2 >= '0' && charity13FebContents.kpi2 <= '1.4')?'red':(charity13FebContents.kpi2 > '1.4' && charity13FebContents.kpi2 <= '1.866666667')?'orange':(charity13FebContents.kpi2 > '1.866666667' && charity13FebContents.kpi2 < '2.333333333')?'yellow-7':(charity13FebContents.kpi2 >= '2.333333333' && charity13FebContents.kpi2 < '2.8')?'green':(charity13FebContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi3 == null)?'grey-2':(charity13FebContents.kpi3 >= '0' && charity13FebContents.kpi3 <= '2')?'red':(charity13FebContents.kpi3 > '2' && charity13FebContents.kpi3 <= '2.666666667')?'orange':(charity13FebContents.kpi3 > '2.666666667' && charity13FebContents.kpi3 < '3.333333333')?'yellow-7':(charity13FebContents.kpi3 >= '3.333333333' && charity13FebContents.kpi3 < '4')?'green':(charity13FebContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi4 == null)?'grey-2':(charity13FebContents.kpi4 >= '0' && charity13FebContents.kpi4 <= '2.2')?'red':(charity13FebContents.kpi4 > '2.2' && charity13FebContents.kpi4 <= '2.933333333')?'orange':(charity13FebContents.kpi4 > '2.933333333' && charity13FebContents.kpi4 < '3.666666667')?'yellow-7':(charity13FebContents.kpi4 >= '3.666666667' && charity13FebContents.kpi4 < '4.4')?'green':(charity13FebContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi5 == null)?'grey-2':(charity13FebContents.kpi5 >= '0' && charity13FebContents.kpi5 <= '1')?'red':(charity13FebContents.kpi5 > '1' && charity13FebContents.kpi5 <= '1.333333333')?'orange':(charity13FebContents.kpi5 > '1.333333333' && charity13FebContents.kpi5 < '1.666666667')?'yellow-7':(charity13FebContents.kpi5 >= '1.666666667' && charity13FebContents.kpi5 < '2')?'green':(charity13FebContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MarContents.kpi1 == null)?'grey-2':(charity13MarContents.kpi1 >= '0' && charity13MarContents.kpi1 <= '0.8')?'red':(charity13MarContents.kpi1 > '0.8' && charity13MarContents.kpi1 <= '1.066666667')?'orange':(charity13MarContents.kpi1 > '1.066666667' && charity13MarContents.kpi1 < '1.333333333')?'yellow-7':(charity13MarContents.kpi1 >= '1.333333333' && charity13MarContents.kpi1 < '1.6')?'green':(charity13MarContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi2 == null)?'grey-2':(charity13MarContents.kpi2 >= '0' && charity13MarContents.kpi2 <= '1.4')?'red':(charity13MarContents.kpi2 > '1.4' && charity13MarContents.kpi2 <= '1.866666667')?'orange':(charity13MarContents.kpi2 > '1.866666667' && charity13MarContents.kpi2 < '2.333333333')?'yellow-7':(charity13MarContents.kpi2 >= '2.333333333' && charity13MarContents.kpi2 < '2.8')?'green':(charity13MarContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi3 == null)?'grey-2':(charity13MarContents.kpi3 >= '0' && charity13MarContents.kpi3 <= '2')?'red':(charity13MarContents.kpi3 > '2' && charity13MarContents.kpi3 <= '2.666666667')?'orange':(charity13MarContents.kpi3 > '2.666666667' && charity13MarContents.kpi3 < '3.333333333')?'yellow-7':(charity13MarContents.kpi3 >= '3.333333333' && charity13MarContents.kpi3 < '4')?'green':(charity13MarContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi4 == null)?'grey-2':(charity13MarContents.kpi4 >= '0' && charity13MarContents.kpi4 <= '2.2')?'red':(charity13MarContents.kpi4 > '2.2' && charity13MarContents.kpi4 <= '2.933333333')?'orange':(charity13MarContents.kpi4 > '2.933333333' && charity13MarContents.kpi4 < '3.666666667')?'yellow-7':(charity13MarContents.kpi4 >= '3.666666667' && charity13MarContents.kpi4 < '4.4')?'green':(charity13MarContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi5 == null)?'grey-2':(charity13MarContents.kpi5 >= '0' && charity13MarContents.kpi5 <= '1')?'red':(charity13MarContents.kpi5 > '1' && charity13MarContents.kpi5 <= '1.333333333')?'orange':(charity13MarContents.kpi5 > '1.333333333' && charity13MarContents.kpi5 < '1.666666667')?'yellow-7':(charity13MarContents.kpi5 >= '1.666666667' && charity13MarContents.kpi5 < '2')?'green':(charity13MarContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AprContents.kpi1 == null)?'grey-2':(charity13AprContents.kpi1 >= '0' && charity13AprContents.kpi1 <= '0.8')?'red':(charity13AprContents.kpi1 > '0.8' && charity13AprContents.kpi1 <= '1.066666667')?'orange':(charity13AprContents.kpi1 > '1.066666667' && charity13AprContents.kpi1 < '1.333333333')?'yellow-7':(charity13AprContents.kpi1 >= '1.333333333' && charity13AprContents.kpi1 < '1.6')?'green':(charity13AprContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi2 == null)?'grey-2':(charity13AprContents.kpi2 >= '0' && charity13AprContents.kpi2 <= '1.4')?'red':(charity13AprContents.kpi2 > '1.4' && charity13AprContents.kpi2 <= '1.866666667')?'orange':(charity13AprContents.kpi2 > '1.866666667' && charity13AprContents.kpi2 < '2.333333333')?'yellow-7':(charity13AprContents.kpi2 >= '2.333333333' && charity13AprContents.kpi2 < '2.8')?'green':(charity13AprContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi3 == null)?'grey-2':(charity13AprContents.kpi3 >= '0' && charity13AprContents.kpi3 <= '2')?'red':(charity13AprContents.kpi3 > '2' && charity13AprContents.kpi3 <= '2.666666667')?'orange':(charity13AprContents.kpi3 > '2.666666667' && charity13AprContents.kpi3 < '3.333333333')?'yellow-7':(charity13AprContents.kpi3 >= '3.333333333' && charity13AprContents.kpi3 < '4')?'green':(charity13AprContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi4 == null)?'grey-2':(charity13AprContents.kpi4 >= '0' && charity13AprContents.kpi4 <= '2.2')?'red':(charity13AprContents.kpi4 > '2.2' && charity13AprContents.kpi4 <= '2.933333333')?'orange':(charity13AprContents.kpi4 > '2.933333333' && charity13AprContents.kpi4 < '3.666666667')?'yellow-7':(charity13AprContents.kpi4 >= '3.666666667' && charity13AprContents.kpi4 < '4.4')?'green':(charity13AprContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi5 == null)?'grey-2':(charity13AprContents.kpi5 >= '0' && charity13AprContents.kpi5 <= '1')?'red':(charity13AprContents.kpi5 > '1' && charity13AprContents.kpi5 <= '1.333333333')?'orange':(charity13AprContents.kpi5 > '1.333333333' && charity13AprContents.kpi5 < '1.666666667')?'yellow-7':(charity13AprContents.kpi5 >= '1.666666667' && charity13AprContents.kpi5 < '2')?'green':(charity13AprContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MayContents.kpi1 == null)?'grey-2':(charity13MayContents.kpi1 >= '0' && charity13MayContents.kpi1 <= '0.8')?'red':(charity13MayContents.kpi1 > '0.8' && charity13MayContents.kpi1 <= '1.066666667')?'orange':(charity13MayContents.kpi1 > '1.066666667' && charity13MayContents.kpi1 < '1.333333333')?'yellow-7':(charity13MayContents.kpi1 >= '1.333333333' && charity13MayContents.kpi1 < '1.6')?'green':(charity13MayContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi2 == null)?'grey-2':(charity13MayContents.kpi2 >= '0' && charity13MayContents.kpi2 <= '1.4')?'red':(charity13MayContents.kpi2 > '1.4' && charity13MayContents.kpi2 <= '1.866666667')?'orange':(charity13MayContents.kpi2 > '1.866666667' && charity13MayContents.kpi2 < '2.333333333')?'yellow-7':(charity13MayContents.kpi2 >= '2.333333333' && charity13MayContents.kpi2 < '2.8')?'green':(charity13MayContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi3 == null)?'grey-2':(charity13MayContents.kpi3 >= '0' && charity13MayContents.kpi3 <= '2')?'red':(charity13MayContents.kpi3 > '2' && charity13MayContents.kpi3 <= '2.666666667')?'orange':(charity13MayContents.kpi3 > '2.666666667' && charity13MayContents.kpi3 < '3.333333333')?'yellow-7':(charity13MayContents.kpi3 >= '3.333333333' && charity13MayContents.kpi3 < '4')?'green':(charity13MayContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi4 == null)?'grey-2':(charity13MayContents.kpi4 >= '0' && charity13MayContents.kpi4 <= '2.2')?'red':(charity13MayContents.kpi4 > '2.2' && charity13MayContents.kpi4 <= '2.933333333')?'orange':(charity13MayContents.kpi4 > '2.933333333' && charity13MayContents.kpi4 < '3.666666667')?'yellow-7':(charity13MayContents.kpi4 >= '3.666666667' && charity13MayContents.kpi4 < '4.4')?'green':(charity13MayContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi5 == null)?'grey-2':(charity13MayContents.kpi5 >= '0' && charity13MayContents.kpi5 <= '1')?'red':(charity13MayContents.kpi5 > '1' && charity13MayContents.kpi5 <= '1.333333333')?'orange':(charity13MayContents.kpi5 > '1.333333333' && charity13MayContents.kpi5 < '1.666666667')?'yellow-7':(charity13MayContents.kpi5 >= '1.666666667' && charity13MayContents.kpi5 < '2')?'green':(charity13MayContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JunContents.kpi1 == null)?'grey-2':(charity13JunContents.kpi1 >= '0' && charity13JunContents.kpi1 <= '0.8')?'red':(charity13JunContents.kpi1 > '0.8' && charity13JunContents.kpi1 <= '1.066666667')?'orange':(charity13JunContents.kpi1 > '1.066666667' && charity13JunContents.kpi1 < '1.333333333')?'yellow-7':(charity13JunContents.kpi1 >= '1.333333333' && charity13JunContents.kpi1 < '1.6')?'green':(charity13JunContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi2 == null)?'grey-2':(charity13JunContents.kpi2 >= '0' && charity13JunContents.kpi2 <= '1.4')?'red':(charity13JunContents.kpi2 > '1.4' && charity13JunContents.kpi2 <= '1.866666667')?'orange':(charity13JunContents.kpi2 > '1.866666667' && charity13JunContents.kpi2 < '2.333333333')?'yellow-7':(charity13JunContents.kpi2 >= '2.333333333' && charity13JunContents.kpi2 < '2.8')?'green':(charity13JunContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi3 == null)?'grey-2':(charity13JunContents.kpi3 >= '0' && charity13JunContents.kpi3 <= '2')?'red':(charity13JunContents.kpi3 > '2' && charity13JunContents.kpi3 <= '2.666666667')?'orange':(charity13JunContents.kpi3 > '2.666666667' && charity13JunContents.kpi3 < '3.333333333')?'yellow-7':(charity13JunContents.kpi3 >= '3.333333333' && charity13JunContents.kpi3 < '4')?'green':(charity13JunContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi4 == null)?'grey-2':(charity13JunContents.kpi4 >= '0' && charity13JunContents.kpi4 <= '2.2')?'red':(charity13JunContents.kpi4 > '2.2' && charity13JunContents.kpi4 <= '2.933333333')?'orange':(charity13JunContents.kpi4 > '2.933333333' && charity13JunContents.kpi4 < '3.666666667')?'yellow-7':(charity13JunContents.kpi4 >= '3.666666667' && charity13JunContents.kpi4 < '4.4')?'green':(charity13JunContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi5 == null)?'grey-2':(charity13JunContents.kpi5 >= '0' && charity13JunContents.kpi5 <= '1')?'red':(charity13JunContents.kpi5 > '1' && charity13JunContents.kpi5 <= '1.333333333')?'orange':(charity13JunContents.kpi5 > '1.333333333' && charity13JunContents.kpi5 < '1.666666667')?'yellow-7':(charity13JunContents.kpi5 >= '1.666666667' && charity13JunContents.kpi5 < '2')?'green':(charity13JunContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JulContents.kpi1 == null)?'grey-2':(charity13JulContents.kpi1 >= '0' && charity13JulContents.kpi1 <= '0.8')?'red':(charity13JulContents.kpi1 > '0.8' && charity13JulContents.kpi1 <= '1.066666667')?'orange':(charity13JulContents.kpi1 > '1.066666667' && charity13JulContents.kpi1 < '1.333333333')?'yellow-7':(charity13JulContents.kpi1 >= '1.333333333' && charity13JulContents.kpi1 < '1.6')?'green':(charity13JulContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi2 == null)?'grey-2':(charity13JulContents.kpi2 >= '0' && charity13JulContents.kpi2 <= '1.4')?'red':(charity13JulContents.kpi2 > '1.4' && charity13JulContents.kpi2 <= '1.866666667')?'orange':(charity13JulContents.kpi2 > '1.866666667' && charity13JulContents.kpi2 < '2.333333333')?'yellow-7':(charity13JulContents.kpi2 >= '2.333333333' && charity13JulContents.kpi2 < '2.8')?'green':(charity13JulContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi3 == null)?'grey-2':(charity13JulContents.kpi3 >= '0' && charity13JulContents.kpi3 <= '2')?'red':(charity13JulContents.kpi3 > '2' && charity13JulContents.kpi3 <= '2.666666667')?'orange':(charity13JulContents.kpi3 > '2.666666667' && charity13JulContents.kpi3 < '3.333333333')?'yellow-7':(charity13JulContents.kpi3 >= '3.333333333' && charity13JulContents.kpi3 < '4')?'green':(charity13JulContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi4 == null)?'grey-2':(charity13JulContents.kpi4 >= '0' && charity13JulContents.kpi4 <= '2.2')?'red':(charity13JulContents.kpi4 > '2.2' && charity13JulContents.kpi4 <= '2.933333333')?'orange':(charity13JulContents.kpi4 > '2.933333333' && charity13JulContents.kpi4 < '3.666666667')?'yellow-7':(charity13JulContents.kpi4 >= '3.666666667' && charity13JulContents.kpi4 < '4.4')?'green':(charity13JulContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi5 == null)?'grey-2':(charity13JulContents.kpi5 >= '0' && charity13JulContents.kpi5 <= '1')?'red':(charity13JulContents.kpi5 > '1' && charity13JulContents.kpi5 <= '1.333333333')?'orange':(charity13JulContents.kpi5 > '1.333333333' && charity13JulContents.kpi5 < '1.666666667')?'yellow-7':(charity13JulContents.kpi5 >= '1.666666667' && charity13JulContents.kpi5 < '2')?'green':(charity13JulContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AugContents.kpi1 == null)?'grey-2':(charity13AugContents.kpi1 >= '0' && charity13AugContents.kpi1 <= '0.8')?'red':(charity13AugContents.kpi1 > '0.8' && charity13AugContents.kpi1 <= '1.066666667')?'orange':(charity13AugContents.kpi1 > '1.066666667' && charity13AugContents.kpi1 < '1.333333333')?'yellow-7':(charity13AugContents.kpi1 >= '1.333333333' && charity13AugContents.kpi1 < '1.6')?'green':(charity13AugContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi2 == null)?'grey-2':(charity13AugContents.kpi2 >= '0' && charity13AugContents.kpi2 <= '1.4')?'red':(charity13AugContents.kpi2 > '1.4' && charity13AugContents.kpi2 <= '1.866666667')?'orange':(charity13AugContents.kpi2 > '1.866666667' && charity13AugContents.kpi2 < '2.333333333')?'yellow-7':(charity13AugContents.kpi2 >= '2.333333333' && charity13AugContents.kpi2 < '2.8')?'green':(charity13AugContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi3 == null)?'grey-2':(charity13AugContents.kpi3 >= '0' && charity13AugContents.kpi3 <= '2')?'red':(charity13AugContents.kpi3 > '2' && charity13AugContents.kpi3 <= '2.666666667')?'orange':(charity13AugContents.kpi3 > '2.666666667' && charity13AugContents.kpi3 < '3.333333333')?'yellow-7':(charity13AugContents.kpi3 >= '3.333333333' && charity13AugContents.kpi3 < '4')?'green':(charity13AugContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi4 == null)?'grey-2':(charity13AugContents.kpi4 >= '0' && charity13AugContents.kpi4 <= '2.2')?'red':(charity13AugContents.kpi4 > '2.2' && charity13AugContents.kpi4 <= '2.933333333')?'orange':(charity13AugContents.kpi4 > '2.933333333' && charity13AugContents.kpi4 < '3.666666667')?'yellow-7':(charity13AugContents.kpi4 >= '3.666666667' && charity13AugContents.kpi4 < '4.4')?'green':(charity13AugContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi5 == null)?'grey-2':(charity13AugContents.kpi5 >= '0' && charity13AugContents.kpi5 <= '1')?'red':(charity13AugContents.kpi5 > '1' && charity13AugContents.kpi5 <= '1.333333333')?'orange':(charity13AugContents.kpi5 > '1.333333333' && charity13AugContents.kpi5 < '1.666666667')?'yellow-7':(charity13AugContents.kpi5 >= '1.666666667' && charity13AugContents.kpi5 < '2')?'green':(charity13AugContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13SepContents.kpi1 == null)?'grey-2':(charity13SepContents.kpi1 >= '0' && charity13SepContents.kpi1 <= '0.8')?'red':(charity13SepContents.kpi1 > '0.8' && charity13SepContents.kpi1 <= '1.066666667')?'orange':(charity13SepContents.kpi1 > '1.066666667' && charity13SepContents.kpi1 < '1.333333333')?'yellow-7':(charity13SepContents.kpi1 >= '1.333333333' && charity13SepContents.kpi1 < '1.6')?'green':(charity13SepContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi2 == null)?'grey-2':(charity13SepContents.kpi2 >= '0' && charity13SepContents.kpi2 <= '1.4')?'red':(charity13SepContents.kpi2 > '1.4' && charity13SepContents.kpi2 <= '1.866666667')?'orange':(charity13SepContents.kpi2 > '1.866666667' && charity13SepContents.kpi2 < '2.333333333')?'yellow-7':(charity13SepContents.kpi2 >= '2.333333333' && charity13SepContents.kpi2 < '2.8')?'green':(charity13SepContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi3 == null)?'grey-2':(charity13SepContents.kpi3 >= '0' && charity13SepContents.kpi3 <= '2')?'red':(charity13SepContents.kpi3 > '2' && charity13SepContents.kpi3 <= '2.666666667')?'orange':(charity13SepContents.kpi3 > '2.666666667' && charity13SepContents.kpi3 < '3.333333333')?'yellow-7':(charity13SepContents.kpi3 >= '3.333333333' && charity13SepContents.kpi3 < '4')?'green':(charity13SepContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi4 == null)?'grey-2':(charity13SepContents.kpi4 >= '0' && charity13SepContents.kpi4 <= '2.2')?'red':(charity13SepContents.kpi4 > '2.2' && charity13SepContents.kpi4 <= '2.933333333')?'orange':(charity13SepContents.kpi4 > '2.933333333' && charity13SepContents.kpi4 < '3.666666667')?'yellow-7':(charity13SepContents.kpi4 >= '3.666666667' && charity13SepContents.kpi4 < '4.4')?'green':(charity13SepContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi5 == null)?'grey-2':(charity13SepContents.kpi5 >= '0' && charity13SepContents.kpi5 <= '1')?'red':(charity13SepContents.kpi5 > '1' && charity13SepContents.kpi5 <= '1.333333333')?'orange':(charity13SepContents.kpi5 > '1.333333333' && charity13SepContents.kpi5 < '1.666666667')?'yellow-7':(charity13SepContents.kpi5 >= '1.666666667' && charity13SepContents.kpi5 < '2')?'green':(charity13SepContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13OctContents.kpi1 == null)?'grey-2':(charity13OctContents.kpi1 >= '0' && charity13OctContents.kpi1 <= '0.8')?'red':(charity13OctContents.kpi1 > '0.8' && charity13OctContents.kpi1 <= '1.066666667')?'orange':(charity13OctContents.kpi1 > '1.066666667' && charity13OctContents.kpi1 < '1.333333333')?'yellow-7':(charity13OctContents.kpi1 >= '1.333333333' && charity13OctContents.kpi1 < '1.6')?'green':(charity13OctContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi2 == null)?'grey-2':(charity13OctContents.kpi2 >= '0' && charity13OctContents.kpi2 <= '1.4')?'red':(charity13OctContents.kpi2 > '1.4' && charity13OctContents.kpi2 <= '1.866666667')?'orange':(charity13OctContents.kpi2 > '1.866666667' && charity13OctContents.kpi2 < '2.333333333')?'yellow-7':(charity13OctContents.kpi2 >= '2.333333333' && charity13OctContents.kpi2 < '2.8')?'green':(charity13OctContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi3 == null)?'grey-2':(charity13OctContents.kpi3 >= '0' && charity13OctContents.kpi3 <= '2')?'red':(charity13OctContents.kpi3 > '2' && charity13OctContents.kpi3 <= '2.666666667')?'orange':(charity13OctContents.kpi3 > '2.666666667' && charity13OctContents.kpi3 < '3.333333333')?'yellow-7':(charity13OctContents.kpi3 >= '3.333333333' && charity13OctContents.kpi3 < '4')?'green':(charity13OctContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi4 == null)?'grey-2':(charity13OctContents.kpi4 >= '0' && charity13OctContents.kpi4 <= '2.2')?'red':(charity13OctContents.kpi4 > '2.2' && charity13OctContents.kpi4 <= '2.933333333')?'orange':(charity13OctContents.kpi4 > '2.933333333' && charity13OctContents.kpi4 < '3.666666667')?'yellow-7':(charity13OctContents.kpi4 >= '3.666666667' && charity13OctContents.kpi4 < '4.4')?'green':(charity13OctContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi5 == null)?'grey-2':(charity13OctContents.kpi5 >= '0' && charity13OctContents.kpi5 <= '1')?'red':(charity13OctContents.kpi5 > '1' && charity13OctContents.kpi5 <= '1.333333333')?'orange':(charity13OctContents.kpi5 > '1.333333333' && charity13OctContents.kpi5 < '1.666666667')?'yellow-7':(charity13OctContents.kpi5 >= '1.666666667' && charity13OctContents.kpi5 < '2')?'green':(charity13OctContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13NovContents.kpi1 == null)?'grey-2':(charity13NovContents.kpi1 >= '0' && charity13NovContents.kpi1 <= '0.8')?'red':(charity13NovContents.kpi1 > '0.8' && charity13NovContents.kpi1 <= '1.066666667')?'orange':(charity13NovContents.kpi1 > '1.066666667' && charity13NovContents.kpi1 < '1.333333333')?'yellow-7':(charity13NovContents.kpi1 >= '1.333333333' && charity13NovContents.kpi1 < '1.6')?'green':(charity13NovContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi2 == null)?'grey-2':(charity13NovContents.kpi2 >= '0' && charity13NovContents.kpi2 <= '1.4')?'red':(charity13NovContents.kpi2 > '1.4' && charity13NovContents.kpi2 <= '1.866666667')?'orange':(charity13NovContents.kpi2 > '1.866666667' && charity13NovContents.kpi2 < '2.333333333')?'yellow-7':(charity13NovContents.kpi2 >= '2.333333333' && charity13NovContents.kpi2 < '2.8')?'green':(charity13NovContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi3 == null)?'grey-2':(charity13NovContents.kpi3 >= '0' && charity13NovContents.kpi3 <= '2')?'red':(charity13NovContents.kpi3 > '2' && charity13NovContents.kpi3 <= '2.666666667')?'orange':(charity13NovContents.kpi3 > '2.666666667' && charity13NovContents.kpi3 < '3.333333333')?'yellow-7':(charity13NovContents.kpi3 >= '3.333333333' && charity13NovContents.kpi3 < '4')?'green':(charity13NovContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi4 == null)?'grey-2':(charity13NovContents.kpi4 >= '0' && charity13NovContents.kpi4 <= '2.2')?'red':(charity13NovContents.kpi4 > '2.2' && charity13NovContents.kpi4 <= '2.933333333')?'orange':(charity13NovContents.kpi4 > '2.933333333' && charity13NovContents.kpi4 < '3.666666667')?'yellow-7':(charity13NovContents.kpi4 >= '3.666666667' && charity13NovContents.kpi4 < '4.4')?'green':(charity13NovContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi5 == null)?'grey-2':(charity13NovContents.kpi5 >= '0' && charity13NovContents.kpi5 <= '1')?'red':(charity13NovContents.kpi5 > '1' && charity13NovContents.kpi5 <= '1.333333333')?'orange':(charity13NovContents.kpi5 > '1.333333333' && charity13NovContents.kpi5 < '1.666666667')?'yellow-7':(charity13NovContents.kpi5 >= '1.666666667' && charity13NovContents.kpi5 < '2')?'green':(charity13NovContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13DecContents.kpi1 == null)?'grey-2':(charity13DecContents.kpi1 >= '0' && charity13DecContents.kpi1 <= '0.8')?'red':(charity13DecContents.kpi1 > '0.8' && charity13DecContents.kpi1 <= '1.066666667')?'orange':(charity13DecContents.kpi1 > '1.066666667' && charity13DecContents.kpi1 < '1.333333333')?'yellow-7':(charity13DecContents.kpi1 >= '1.333333333' && charity13DecContents.kpi1 < '1.6')?'green':(charity13DecContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi2 == null)?'grey-2':(charity13DecContents.kpi2 >= '0' && charity13DecContents.kpi2 <= '1.4')?'red':(charity13DecContents.kpi2 > '1.4' && charity13DecContents.kpi2 <= '1.866666667')?'orange':(charity13DecContents.kpi2 > '1.866666667' && charity13DecContents.kpi2 < '2.333333333')?'yellow-7':(charity13DecContents.kpi2 >= '2.333333333' && charity13DecContents.kpi2 < '2.8')?'green':(charity13DecContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi3 == null)?'grey-2':(charity13DecContents.kpi3 >= '0' && charity13DecContents.kpi3 <= '2')?'red':(charity13DecContents.kpi3 > '2' && charity13DecContents.kpi3 <= '2.666666667')?'orange':(charity13DecContents.kpi3 > '2.666666667' && charity13DecContents.kpi3 < '3.333333333')?'yellow-7':(charity13DecContents.kpi3 >= '3.333333333' && charity13DecContents.kpi3 < '4')?'green':(charity13DecContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi4 == null)?'grey-2':(charity13DecContents.kpi4 >= '0' && charity13DecContents.kpi4 <= '2.2')?'red':(charity13DecContents.kpi4 > '2.2' && charity13DecContents.kpi4 <= '2.933333333')?'orange':(charity13DecContents.kpi4 > '2.933333333' && charity13DecContents.kpi4 < '3.666666667')?'yellow-7':(charity13DecContents.kpi4 >= '3.666666667' && charity13DecContents.kpi4 < '4.4')?'green':(charity13DecContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi5 == null)?'grey-2':(charity13DecContents.kpi5 >= '0' && charity13DecContents.kpi5 <= '1')?'red':(charity13DecContents.kpi5 > '1' && charity13DecContents.kpi5 <= '1.333333333')?'orange':(charity13DecContents.kpi5 > '1.333333333' && charity13DecContents.kpi5 < '1.666666667')?'yellow-7':(charity13DecContents.kpi5 >= '1.666666667' && charity13DecContents.kpi5 < '2')?'green':(charity13DecContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JanContents.kpi1 == null)?'grey-2':(charity13JanContents.kpi1 >= '0' && charity13JanContents.kpi1 <= '0.8')?'red':(charity13JanContents.kpi1 > '0.8' && charity13JanContents.kpi1 <= '1.066666667')?'orange':(charity13JanContents.kpi1 > '1.066666667' && charity13JanContents.kpi1 < '1.333333333')?'yellow-7':(charity13JanContents.kpi1 >= '1.333333333' && charity13JanContents.kpi1 < '1.6')?'green':(charity13JanContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi2 == null)?'grey-2':(charity13JanContents.kpi2 >= '0' && charity13JanContents.kpi2 <= '1.4')?'red':(charity13JanContents.kpi2 > '1.4' && charity13JanContents.kpi2 <= '1.866666667')?'orange':(charity13JanContents.kpi2 > '1.866666667' && charity13JanContents.kpi2 < '2.333333333')?'yellow-7':(charity13JanContents.kpi2 >= '2.333333333' && charity13JanContents.kpi2 < '2.8')?'green':(charity13JanContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi3 == null)?'grey-2':(charity13JanContents.kpi3 >= '0' && charity13JanContents.kpi3 <= '2')?'red':(charity13JanContents.kpi3 > '2' && charity13JanContents.kpi3 <= '2.666666667')?'orange':(charity13JanContents.kpi3 > '2.666666667' && charity13JanContents.kpi3 < '3.333333333')?'yellow-7':(charity13JanContents.kpi3 >= '3.333333333' && charity13JanContents.kpi3 < '4')?'green':(charity13JanContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi4 == null)?'grey-2':(charity13JanContents.kpi4 >= '0' && charity13JanContents.kpi4 <= '2.2')?'red':(charity13JanContents.kpi4 > '2.2' && charity13JanContents.kpi4 <= '2.933333333')?'orange':(charity13JanContents.kpi4 > '2.933333333' && charity13JanContents.kpi4 < '3.666666667')?'yellow-7':(charity13JanContents.kpi4 >= '3.666666667' && charity13JanContents.kpi4 < '4.4')?'green':(charity13JanContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi5 == null)?'grey-2':(charity13JanContents.kpi5 >= '0' && charity13JanContents.kpi5 <= '1')?'red':(charity13JanContents.kpi5 > '1' && charity13JanContents.kpi5 <= '1.333333333')?'orange':(charity13JanContents.kpi5 > '1.333333333' && charity13JanContents.kpi5 < '1.666666667')?'yellow-7':(charity13JanContents.kpi5 >= '1.666666667' && charity13JanContents.kpi5 < '2')?'green':(charity13JanContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13FebContents.kpi1 == null)?'grey-2':(charity13FebContents.kpi1 >= '0' && charity13FebContents.kpi1 <= '0.8')?'red':(charity13FebContents.kpi1 > '0.8' && charity13FebContents.kpi1 <= '1.066666667')?'orange':(charity13FebContents.kpi1 > '1.066666667' && charity13FebContents.kpi1 < '1.333333333')?'yellow-7':(charity13FebContents.kpi1 >= '1.333333333' && charity13FebContents.kpi1 < '1.6')?'green':(charity13FebContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi2 == null)?'grey-2':(charity13FebContents.kpi2 >= '0' && charity13FebContents.kpi2 <= '1.4')?'red':(charity13FebContents.kpi2 > '1.4' && charity13FebContents.kpi2 <= '1.866666667')?'orange':(charity13FebContents.kpi2 > '1.866666667' && charity13FebContents.kpi2 < '2.333333333')?'yellow-7':(charity13FebContents.kpi2 >= '2.333333333' && charity13FebContents.kpi2 < '2.8')?'green':(charity13FebContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi3 == null)?'grey-2':(charity13FebContents.kpi3 >= '0' && charity13FebContents.kpi3 <= '2')?'red':(charity13FebContents.kpi3 > '2' && charity13FebContents.kpi3 <= '2.666666667')?'orange':(charity13FebContents.kpi3 > '2.666666667' && charity13FebContents.kpi3 < '3.333333333')?'yellow-7':(charity13FebContents.kpi3 >= '3.333333333' && charity13FebContents.kpi3 < '4')?'green':(charity13FebContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi4 == null)?'grey-2':(charity13FebContents.kpi4 >= '0' && charity13FebContents.kpi4 <= '2.2')?'red':(charity13FebContents.kpi4 > '2.2' && charity13FebContents.kpi4 <= '2.933333333')?'orange':(charity13FebContents.kpi4 > '2.933333333' && charity13FebContents.kpi4 < '3.666666667')?'yellow-7':(charity13FebContents.kpi4 >= '3.666666667' && charity13FebContents.kpi4 < '4.4')?'green':(charity13FebContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi5 == null)?'grey-2':(charity13FebContents.kpi5 >= '0' && charity13FebContents.kpi5 <= '1')?'red':(charity13FebContents.kpi5 > '1' && charity13FebContents.kpi5 <= '1.333333333')?'orange':(charity13FebContents.kpi5 > '1.333333333' && charity13FebContents.kpi5 < '1.666666667')?'yellow-7':(charity13FebContents.kpi5 >= '1.666666667' && charity13FebContents.kpi5 < '2')?'green':(charity13FebContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MarContents.kpi1 == null)?'grey-2':(charity13MarContents.kpi1 >= '0' && charity13MarContents.kpi1 <= '0.8')?'red':(charity13MarContents.kpi1 > '0.8' && charity13MarContents.kpi1 <= '1.066666667')?'orange':(charity13MarContents.kpi1 > '1.066666667' && charity13MarContents.kpi1 < '1.333333333')?'yellow-7':(charity13MarContents.kpi1 >= '1.333333333' && charity13MarContents.kpi1 < '1.6')?'green':(charity13MarContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi2 == null)?'grey-2':(charity13MarContents.kpi2 >= '0' && charity13MarContents.kpi2 <= '1.4')?'red':(charity13MarContents.kpi2 > '1.4' && charity13MarContents.kpi2 <= '1.866666667')?'orange':(charity13MarContents.kpi2 > '1.866666667' && charity13MarContents.kpi2 < '2.333333333')?'yellow-7':(charity13MarContents.kpi2 >= '2.333333333' && charity13MarContents.kpi2 < '2.8')?'green':(charity13MarContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi3 == null)?'grey-2':(charity13MarContents.kpi3 >= '0' && charity13MarContents.kpi3 <= '2')?'red':(charity13MarContents.kpi3 > '2' && charity13MarContents.kpi3 <= '2.666666667')?'orange':(charity13MarContents.kpi3 > '2.666666667' && charity13MarContents.kpi3 < '3.333333333')?'yellow-7':(charity13MarContents.kpi3 >= '3.333333333' && charity13MarContents.kpi3 < '4')?'green':(charity13MarContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi4 == null)?'grey-2':(charity13MarContents.kpi4 >= '0' && charity13MarContents.kpi4 <= '2.2')?'red':(charity13MarContents.kpi4 > '2.2' && charity13MarContents.kpi4 <= '2.933333333')?'orange':(charity13MarContents.kpi4 > '2.933333333' && charity13MarContents.kpi4 < '3.666666667')?'yellow-7':(charity13MarContents.kpi4 >= '3.666666667' && charity13MarContents.kpi4 < '4.4')?'green':(charity13MarContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi5 == null)?'grey-2':(charity13MarContents.kpi5 >= '0' && charity13MarContents.kpi5 <= '1')?'red':(charity13MarContents.kpi5 > '1' && charity13MarContents.kpi5 <= '1.333333333')?'orange':(charity13MarContents.kpi5 > '1.333333333' && charity13MarContents.kpi5 < '1.666666667')?'yellow-7':(charity13MarContents.kpi5 >= '1.666666667' && charity13MarContents.kpi5 < '2')?'green':(charity13MarContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AprContents.kpi1 == null)?'grey-2':(charity13AprContents.kpi1 >= '0' && charity13AprContents.kpi1 <= '0.8')?'red':(charity13AprContents.kpi1 > '0.8' && charity13AprContents.kpi1 <= '1.066666667')?'orange':(charity13AprContents.kpi1 > '1.066666667' && charity13AprContents.kpi1 < '1.333333333')?'yellow-7':(charity13AprContents.kpi1 >= '1.333333333' && charity13AprContents.kpi1 < '1.6')?'green':(charity13AprContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi2 == null)?'grey-2':(charity13AprContents.kpi2 >= '0' && charity13AprContents.kpi2 <= '1.4')?'red':(charity13AprContents.kpi2 > '1.4' && charity13AprContents.kpi2 <= '1.866666667')?'orange':(charity13AprContents.kpi2 > '1.866666667' && charity13AprContents.kpi2 < '2.333333333')?'yellow-7':(charity13AprContents.kpi2 >= '2.333333333' && charity13AprContents.kpi2 < '2.8')?'green':(charity13AprContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi3 == null)?'grey-2':(charity13AprContents.kpi3 >= '0' && charity13AprContents.kpi3 <= '2')?'red':(charity13AprContents.kpi3 > '2' && charity13AprContents.kpi3 <= '2.666666667')?'orange':(charity13AprContents.kpi3 > '2.666666667' && charity13AprContents.kpi3 < '3.333333333')?'yellow-7':(charity13AprContents.kpi3 >= '3.333333333' && charity13AprContents.kpi3 < '4')?'green':(charity13AprContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi4 == null)?'grey-2':(charity13AprContents.kpi4 >= '0' && charity13AprContents.kpi4 <= '2.2')?'red':(charity13AprContents.kpi4 > '2.2' && charity13AprContents.kpi4 <= '2.933333333')?'orange':(charity13AprContents.kpi4 > '2.933333333' && charity13AprContents.kpi4 < '3.666666667')?'yellow-7':(charity13AprContents.kpi4 >= '3.666666667' && charity13AprContents.kpi4 < '4.4')?'green':(charity13AprContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi5 == null)?'grey-2':(charity13AprContents.kpi5 >= '0' && charity13AprContents.kpi5 <= '1')?'red':(charity13AprContents.kpi5 > '1' && charity13AprContents.kpi5 <= '1.333333333')?'orange':(charity13AprContents.kpi5 > '1.333333333' && charity13AprContents.kpi5 < '1.666666667')?'yellow-7':(charity13AprContents.kpi5 >= '1.666666667' && charity13AprContents.kpi5 < '2')?'green':(charity13AprContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MayContents.kpi1 == null)?'grey-2':(charity13MayContents.kpi1 >= '0' && charity13MayContents.kpi1 <= '0.8')?'red':(charity13MayContents.kpi1 > '0.8' && charity13MayContents.kpi1 <= '1.066666667')?'orange':(charity13MayContents.kpi1 > '1.066666667' && charity13MayContents.kpi1 < '1.333333333')?'yellow-7':(charity13MayContents.kpi1 >= '1.333333333' && charity13MayContents.kpi1 < '1.6')?'green':(charity13MayContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi2 == null)?'grey-2':(charity13MayContents.kpi2 >= '0' && charity13MayContents.kpi2 <= '1.4')?'red':(charity13MayContents.kpi2 > '1.4' && charity13MayContents.kpi2 <= '1.866666667')?'orange':(charity13MayContents.kpi2 > '1.866666667' && charity13MayContents.kpi2 < '2.333333333')?'yellow-7':(charity13MayContents.kpi2 >= '2.333333333' && charity13MayContents.kpi2 < '2.8')?'green':(charity13MayContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi3 == null)?'grey-2':(charity13MayContents.kpi3 >= '0' && charity13MayContents.kpi3 <= '2')?'red':(charity13MayContents.kpi3 > '2' && charity13MayContents.kpi3 <= '2.666666667')?'orange':(charity13MayContents.kpi3 > '2.666666667' && charity13MayContents.kpi3 < '3.333333333')?'yellow-7':(charity13MayContents.kpi3 >= '3.333333333' && charity13MayContents.kpi3 < '4')?'green':(charity13MayContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi4 == null)?'grey-2':(charity13MayContents.kpi4 >= '0' && charity13MayContents.kpi4 <= '2.2')?'red':(charity13MayContents.kpi4 > '2.2' && charity13MayContents.kpi4 <= '2.933333333')?'orange':(charity13MayContents.kpi4 > '2.933333333' && charity13MayContents.kpi4 < '3.666666667')?'yellow-7':(charity13MayContents.kpi4 >= '3.666666667' && charity13MayContents.kpi4 < '4.4')?'green':(charity13MayContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi5 == null)?'grey-2':(charity13MayContents.kpi5 >= '0' && charity13MayContents.kpi5 <= '1')?'red':(charity13MayContents.kpi5 > '1' && charity13MayContents.kpi5 <= '1.333333333')?'orange':(charity13MayContents.kpi5 > '1.333333333' && charity13MayContents.kpi5 < '1.666666667')?'yellow-7':(charity13MayContents.kpi5 >= '1.666666667' && charity13MayContents.kpi5 < '2')?'green':(charity13MayContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JunContents.kpi1 == null)?'grey-2':(charity13JunContents.kpi1 >= '0' && charity13JunContents.kpi1 <= '0.8')?'red':(charity13JunContents.kpi1 > '0.8' && charity13JunContents.kpi1 <= '1.066666667')?'orange':(charity13JunContents.kpi1 > '1.066666667' && charity13JunContents.kpi1 < '1.333333333')?'yellow-7':(charity13JunContents.kpi1 >= '1.333333333' && charity13JunContents.kpi1 < '1.6')?'green':(charity13JunContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi2 == null)?'grey-2':(charity13JunContents.kpi2 >= '0' && charity13JunContents.kpi2 <= '1.4')?'red':(charity13JunContents.kpi2 > '1.4' && charity13JunContents.kpi2 <= '1.866666667')?'orange':(charity13JunContents.kpi2 > '1.866666667' && charity13JunContents.kpi2 < '2.333333333')?'yellow-7':(charity13JunContents.kpi2 >= '2.333333333' && charity13JunContents.kpi2 < '2.8')?'green':(charity13JunContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi3 == null)?'grey-2':(charity13JunContents.kpi3 >= '0' && charity13JunContents.kpi3 <= '2')?'red':(charity13JunContents.kpi3 > '2' && charity13JunContents.kpi3 <= '2.666666667')?'orange':(charity13JunContents.kpi3 > '2.666666667' && charity13JunContents.kpi3 < '3.333333333')?'yellow-7':(charity13JunContents.kpi3 >= '3.333333333' && charity13JunContents.kpi3 < '4')?'green':(charity13JunContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi4 == null)?'grey-2':(charity13JunContents.kpi4 >= '0' && charity13JunContents.kpi4 <= '2.2')?'red':(charity13JunContents.kpi4 > '2.2' && charity13JunContents.kpi4 <= '2.933333333')?'orange':(charity13JunContents.kpi4 > '2.933333333' && charity13JunContents.kpi4 < '3.666666667')?'yellow-7':(charity13JunContents.kpi4 >= '3.666666667' && charity13JunContents.kpi4 < '4.4')?'green':(charity13JunContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi5 == null)?'grey-2':(charity13JunContents.kpi5 >= '0' && charity13JunContents.kpi5 <= '1')?'red':(charity13JunContents.kpi5 > '1' && charity13JunContents.kpi5 <= '1.333333333')?'orange':(charity13JunContents.kpi5 > '1.333333333' && charity13JunContents.kpi5 < '1.666666667')?'yellow-7':(charity13JunContents.kpi5 >= '1.666666667' && charity13JunContents.kpi5 < '2')?'green':(charity13JunContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JulContents.kpi1 == null)?'grey-2':(charity13JulContents.kpi1 >= '0' && charity13JulContents.kpi1 <= '0.8')?'red':(charity13JulContents.kpi1 > '0.8' && charity13JulContents.kpi1 <= '1.066666667')?'orange':(charity13JulContents.kpi1 > '1.066666667' && charity13JulContents.kpi1 < '1.333333333')?'yellow-7':(charity13JulContents.kpi1 >= '1.333333333' && charity13JulContents.kpi1 < '1.6')?'green':(charity13JulContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi2 == null)?'grey-2':(charity13JulContents.kpi2 >= '0' && charity13JulContents.kpi2 <= '1.4')?'red':(charity13JulContents.kpi2 > '1.4' && charity13JulContents.kpi2 <= '1.866666667')?'orange':(charity13JulContents.kpi2 > '1.866666667' && charity13JulContents.kpi2 < '2.333333333')?'yellow-7':(charity13JulContents.kpi2 >= '2.333333333' && charity13JulContents.kpi2 < '2.8')?'green':(charity13JulContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi3 == null)?'grey-2':(charity13JulContents.kpi3 >= '0' && charity13JulContents.kpi3 <= '2')?'red':(charity13JulContents.kpi3 > '2' && charity13JulContents.kpi3 <= '2.666666667')?'orange':(charity13JulContents.kpi3 > '2.666666667' && charity13JulContents.kpi3 < '3.333333333')?'yellow-7':(charity13JulContents.kpi3 >= '3.333333333' && charity13JulContents.kpi3 < '4')?'green':(charity13JulContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi4 == null)?'grey-2':(charity13JulContents.kpi4 >= '0' && charity13JulContents.kpi4 <= '2.2')?'red':(charity13JulContents.kpi4 > '2.2' && charity13JulContents.kpi4 <= '2.933333333')?'orange':(charity13JulContents.kpi4 > '2.933333333' && charity13JulContents.kpi4 < '3.666666667')?'yellow-7':(charity13JulContents.kpi4 >= '3.666666667' && charity13JulContents.kpi4 < '4.4')?'green':(charity13JulContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi5 == null)?'grey-2':(charity13JulContents.kpi5 >= '0' && charity13JulContents.kpi5 <= '1')?'red':(charity13JulContents.kpi5 > '1' && charity13JulContents.kpi5 <= '1.333333333')?'orange':(charity13JulContents.kpi5 > '1.333333333' && charity13JulContents.kpi5 < '1.666666667')?'yellow-7':(charity13JulContents.kpi5 >= '1.666666667' && charity13JulContents.kpi5 < '2')?'green':(charity13JulContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AugContents.kpi1 == null)?'grey-2':(charity13AugContents.kpi1 >= '0' && charity13AugContents.kpi1 <= '0.8')?'red':(charity13AugContents.kpi1 > '0.8' && charity13AugContents.kpi1 <= '1.066666667')?'orange':(charity13AugContents.kpi1 > '1.066666667' && charity13AugContents.kpi1 < '1.333333333')?'yellow-7':(charity13AugContents.kpi1 >= '1.333333333' && charity13AugContents.kpi1 < '1.6')?'green':(charity13AugContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi2 == null)?'grey-2':(charity13AugContents.kpi2 >= '0' && charity13AugContents.kpi2 <= '1.4')?'red':(charity13AugContents.kpi2 > '1.4' && charity13AugContents.kpi2 <= '1.866666667')?'orange':(charity13AugContents.kpi2 > '1.866666667' && charity13AugContents.kpi2 < '2.333333333')?'yellow-7':(charity13AugContents.kpi2 >= '2.333333333' && charity13AugContents.kpi2 < '2.8')?'green':(charity13AugContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi3 == null)?'grey-2':(charity13AugContents.kpi3 >= '0' && charity13AugContents.kpi3 <= '2')?'red':(charity13AugContents.kpi3 > '2' && charity13AugContents.kpi3 <= '2.666666667')?'orange':(charity13AugContents.kpi3 > '2.666666667' && charity13AugContents.kpi3 < '3.333333333')?'yellow-7':(charity13AugContents.kpi3 >= '3.333333333' && charity13AugContents.kpi3 < '4')?'green':(charity13AugContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi4 == null)?'grey-2':(charity13AugContents.kpi4 >= '0' && charity13AugContents.kpi4 <= '2.2')?'red':(charity13AugContents.kpi4 > '2.2' && charity13AugContents.kpi4 <= '2.933333333')?'orange':(charity13AugContents.kpi4 > '2.933333333' && charity13AugContents.kpi4 < '3.666666667')?'yellow-7':(charity13AugContents.kpi4 >= '3.666666667' && charity13AugContents.kpi4 < '4.4')?'green':(charity13AugContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi5 == null)?'grey-2':(charity13AugContents.kpi5 >= '0' && charity13AugContents.kpi5 <= '1')?'red':(charity13AugContents.kpi5 > '1' && charity13AugContents.kpi5 <= '1.333333333')?'orange':(charity13AugContents.kpi5 > '1.333333333' && charity13AugContents.kpi5 < '1.666666667')?'yellow-7':(charity13AugContents.kpi5 >= '1.666666667' && charity13AugContents.kpi5 < '2')?'green':(charity13AugContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13SepContents.kpi1 == null)?'grey-2':(charity13SepContents.kpi1 >= '0' && charity13SepContents.kpi1 <= '0.8')?'red':(charity13SepContents.kpi1 > '0.8' && charity13SepContents.kpi1 <= '1.066666667')?'orange':(charity13SepContents.kpi1 > '1.066666667' && charity13SepContents.kpi1 < '1.333333333')?'yellow-7':(charity13SepContents.kpi1 >= '1.333333333' && charity13SepContents.kpi1 < '1.6')?'green':(charity13SepContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi2 == null)?'grey-2':(charity13SepContents.kpi2 >= '0' && charity13SepContents.kpi2 <= '1.4')?'red':(charity13SepContents.kpi2 > '1.4' && charity13SepContents.kpi2 <= '1.866666667')?'orange':(charity13SepContents.kpi2 > '1.866666667' && charity13SepContents.kpi2 < '2.333333333')?'yellow-7':(charity13SepContents.kpi2 >= '2.333333333' && charity13SepContents.kpi2 < '2.8')?'green':(charity13SepContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi3 == null)?'grey-2':(charity13SepContents.kpi3 >= '0' && charity13SepContents.kpi3 <= '2')?'red':(charity13SepContents.kpi3 > '2' && charity13SepContents.kpi3 <= '2.666666667')?'orange':(charity13SepContents.kpi3 > '2.666666667' && charity13SepContents.kpi3 < '3.333333333')?'yellow-7':(charity13SepContents.kpi3 >= '3.333333333' && charity13SepContents.kpi3 < '4')?'green':(charity13SepContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi4 == null)?'grey-2':(charity13SepContents.kpi4 >= '0' && charity13SepContents.kpi4 <= '2.2')?'red':(charity13SepContents.kpi4 > '2.2' && charity13SepContents.kpi4 <= '2.933333333')?'orange':(charity13SepContents.kpi4 > '2.933333333' && charity13SepContents.kpi4 < '3.666666667')?'yellow-7':(charity13SepContents.kpi4 >= '3.666666667' && charity13SepContents.kpi4 < '4.4')?'green':(charity13SepContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi5 == null)?'grey-2':(charity13SepContents.kpi5 >= '0' && charity13SepContents.kpi5 <= '1')?'red':(charity13SepContents.kpi5 > '1' && charity13SepContents.kpi5 <= '1.333333333')?'orange':(charity13SepContents.kpi5 > '1.333333333' && charity13SepContents.kpi5 < '1.666666667')?'yellow-7':(charity13SepContents.kpi5 >= '1.666666667' && charity13SepContents.kpi5 < '2')?'green':(charity13SepContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13OctContents.kpi1 == null)?'grey-2':(charity13OctContents.kpi1 >= '0' && charity13OctContents.kpi1 <= '0.8')?'red':(charity13OctContents.kpi1 > '0.8' && charity13OctContents.kpi1 <= '1.066666667')?'orange':(charity13OctContents.kpi1 > '1.066666667' && charity13OctContents.kpi1 < '1.333333333')?'yellow-7':(charity13OctContents.kpi1 >= '1.333333333' && charity13OctContents.kpi1 < '1.6')?'green':(charity13OctContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi2 == null)?'grey-2':(charity13OctContents.kpi2 >= '0' && charity13OctContents.kpi2 <= '1.4')?'red':(charity13OctContents.kpi2 > '1.4' && charity13OctContents.kpi2 <= '1.866666667')?'orange':(charity13OctContents.kpi2 > '1.866666667' && charity13OctContents.kpi2 < '2.333333333')?'yellow-7':(charity13OctContents.kpi2 >= '2.333333333' && charity13OctContents.kpi2 < '2.8')?'green':(charity13OctContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi3 == null)?'grey-2':(charity13OctContents.kpi3 >= '0' && charity13OctContents.kpi3 <= '2')?'red':(charity13OctContents.kpi3 > '2' && charity13OctContents.kpi3 <= '2.666666667')?'orange':(charity13OctContents.kpi3 > '2.666666667' && charity13OctContents.kpi3 < '3.333333333')?'yellow-7':(charity13OctContents.kpi3 >= '3.333333333' && charity13OctContents.kpi3 < '4')?'green':(charity13OctContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi4 == null)?'grey-2':(charity13OctContents.kpi4 >= '0' && charity13OctContents.kpi4 <= '2.2')?'red':(charity13OctContents.kpi4 > '2.2' && charity13OctContents.kpi4 <= '2.933333333')?'orange':(charity13OctContents.kpi4 > '2.933333333' && charity13OctContents.kpi4 < '3.666666667')?'yellow-7':(charity13OctContents.kpi4 >= '3.666666667' && charity13OctContents.kpi4 < '4.4')?'green':(charity13OctContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi5 == null)?'grey-2':(charity13OctContents.kpi5 >= '0' && charity13OctContents.kpi5 <= '1')?'red':(charity13OctContents.kpi5 > '1' && charity13OctContents.kpi5 <= '1.333333333')?'orange':(charity13OctContents.kpi5 > '1.333333333' && charity13OctContents.kpi5 < '1.666666667')?'yellow-7':(charity13OctContents.kpi5 >= '1.666666667' && charity13OctContents.kpi5 < '2')?'green':(charity13OctContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13NovContents.kpi1 == null)?'grey-2':(charity13NovContents.kpi1 >= '0' && charity13NovContents.kpi1 <= '0.8')?'red':(charity13NovContents.kpi1 > '0.8' && charity13NovContents.kpi1 <= '1.066666667')?'orange':(charity13NovContents.kpi1 > '1.066666667' && charity13NovContents.kpi1 < '1.333333333')?'yellow-7':(charity13NovContents.kpi1 >= '1.333333333' && charity13NovContents.kpi1 < '1.6')?'green':(charity13NovContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi2 == null)?'grey-2':(charity13NovContents.kpi2 >= '0' && charity13NovContents.kpi2 <= '1.4')?'red':(charity13NovContents.kpi2 > '1.4' && charity13NovContents.kpi2 <= '1.866666667')?'orange':(charity13NovContents.kpi2 > '1.866666667' && charity13NovContents.kpi2 < '2.333333333')?'yellow-7':(charity13NovContents.kpi2 >= '2.333333333' && charity13NovContents.kpi2 < '2.8')?'green':(charity13NovContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi3 == null)?'grey-2':(charity13NovContents.kpi3 >= '0' && charity13NovContents.kpi3 <= '2')?'red':(charity13NovContents.kpi3 > '2' && charity13NovContents.kpi3 <= '2.666666667')?'orange':(charity13NovContents.kpi3 > '2.666666667' && charity13NovContents.kpi3 < '3.333333333')?'yellow-7':(charity13NovContents.kpi3 >= '3.333333333' && charity13NovContents.kpi3 < '4')?'green':(charity13NovContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi4 == null)?'grey-2':(charity13NovContents.kpi4 >= '0' && charity13NovContents.kpi4 <= '2.2')?'red':(charity13NovContents.kpi4 > '2.2' && charity13NovContents.kpi4 <= '2.933333333')?'orange':(charity13NovContents.kpi4 > '2.933333333' && charity13NovContents.kpi4 < '3.666666667')?'yellow-7':(charity13NovContents.kpi4 >= '3.666666667' && charity13NovContents.kpi4 < '4.4')?'green':(charity13NovContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi5 == null)?'grey-2':(charity13NovContents.kpi5 >= '0' && charity13NovContents.kpi5 <= '1')?'red':(charity13NovContents.kpi5 > '1' && charity13NovContents.kpi5 <= '1.333333333')?'orange':(charity13NovContents.kpi5 > '1.333333333' && charity13NovContents.kpi5 < '1.666666667')?'yellow-7':(charity13NovContents.kpi5 >= '1.666666667' && charity13NovContents.kpi5 < '2')?'green':(charity13NovContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13DecContents.kpi1 == null)?'grey-2':(charity13DecContents.kpi1 >= '0' && charity13DecContents.kpi1 <= '0.8')?'red':(charity13DecContents.kpi1 > '0.8' && charity13DecContents.kpi1 <= '1.066666667')?'orange':(charity13DecContents.kpi1 > '1.066666667' && charity13DecContents.kpi1 < '1.333333333')?'yellow-7':(charity13DecContents.kpi1 >= '1.333333333' && charity13DecContents.kpi1 < '1.6')?'green':(charity13DecContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi2 == null)?'grey-2':(charity13DecContents.kpi2 >= '0' && charity13DecContents.kpi2 <= '1.4')?'red':(charity13DecContents.kpi2 > '1.4' && charity13DecContents.kpi2 <= '1.866666667')?'orange':(charity13DecContents.kpi2 > '1.866666667' && charity13DecContents.kpi2 < '2.333333333')?'yellow-7':(charity13DecContents.kpi2 >= '2.333333333' && charity13DecContents.kpi2 < '2.8')?'green':(charity13DecContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi3 == null)?'grey-2':(charity13DecContents.kpi3 >= '0' && charity13DecContents.kpi3 <= '2')?'red':(charity13DecContents.kpi3 > '2' && charity13DecContents.kpi3 <= '2.666666667')?'orange':(charity13DecContents.kpi3 > '2.666666667' && charity13DecContents.kpi3 < '3.333333333')?'yellow-7':(charity13DecContents.kpi3 >= '3.333333333' && charity13DecContents.kpi3 < '4')?'green':(charity13DecContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi4 == null)?'grey-2':(charity13DecContents.kpi4 >= '0' && charity13DecContents.kpi4 <= '2.2')?'red':(charity13DecContents.kpi4 > '2.2' && charity13DecContents.kpi4 <= '2.933333333')?'orange':(charity13DecContents.kpi4 > '2.933333333' && charity13DecContents.kpi4 < '3.666666667')?'yellow-7':(charity13DecContents.kpi4 >= '3.666666667' && charity13DecContents.kpi4 < '4.4')?'green':(charity13DecContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi5 == null)?'grey-2':(charity13DecContents.kpi5 >= '0' && charity13DecContents.kpi5 <= '1')?'red':(charity13DecContents.kpi5 > '1' && charity13DecContents.kpi5 <= '1.333333333')?'orange':(charity13DecContents.kpi5 > '1.333333333' && charity13DecContents.kpi5 < '1.666666667')?'yellow-7':(charity13DecContents.kpi5 >= '1.666666667' && charity13DecContents.kpi5 < '2')?'green':(charity13DecContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JanContents.kpi1 == null)?'grey-2':(charity13JanContents.kpi1 >= '0' && charity13JanContents.kpi1 <= '0.8')?'red':(charity13JanContents.kpi1 > '0.8' && charity13JanContents.kpi1 <= '1.066666667')?'orange':(charity13JanContents.kpi1 > '1.066666667' && charity13JanContents.kpi1 < '1.333333333')?'yellow-7':(charity13JanContents.kpi1 >= '1.333333333' && charity13JanContents.kpi1 < '1.6')?'green':(charity13JanContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi2 == null)?'grey-2':(charity13JanContents.kpi2 >= '0' && charity13JanContents.kpi2 <= '1.4')?'red':(charity13JanContents.kpi2 > '1.4' && charity13JanContents.kpi2 <= '1.866666667')?'orange':(charity13JanContents.kpi2 > '1.866666667' && charity13JanContents.kpi2 < '2.333333333')?'yellow-7':(charity13JanContents.kpi2 >= '2.333333333' && charity13JanContents.kpi2 < '2.8')?'green':(charity13JanContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi3 == null)?'grey-2':(charity13JanContents.kpi3 >= '0' && charity13JanContents.kpi3 <= '2')?'red':(charity13JanContents.kpi3 > '2' && charity13JanContents.kpi3 <= '2.666666667')?'orange':(charity13JanContents.kpi3 > '2.666666667' && charity13JanContents.kpi3 < '3.333333333')?'yellow-7':(charity13JanContents.kpi3 >= '3.333333333' && charity13JanContents.kpi3 < '4')?'green':(charity13JanContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi4 == null)?'grey-2':(charity13JanContents.kpi4 >= '0' && charity13JanContents.kpi4 <= '2.2')?'red':(charity13JanContents.kpi4 > '2.2' && charity13JanContents.kpi4 <= '2.933333333')?'orange':(charity13JanContents.kpi4 > '2.933333333' && charity13JanContents.kpi4 < '3.666666667')?'yellow-7':(charity13JanContents.kpi4 >= '3.666666667' && charity13JanContents.kpi4 < '4.4')?'green':(charity13JanContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi5 == null)?'grey-2':(charity13JanContents.kpi5 >= '0' && charity13JanContents.kpi5 <= '1')?'red':(charity13JanContents.kpi5 > '1' && charity13JanContents.kpi5 <= '1.333333333')?'orange':(charity13JanContents.kpi5 > '1.333333333' && charity13JanContents.kpi5 < '1.666666667')?'yellow-7':(charity13JanContents.kpi5 >= '1.666666667' && charity13JanContents.kpi5 < '2')?'green':(charity13JanContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13FebContents.kpi1 == null)?'grey-2':(charity13FebContents.kpi1 >= '0' && charity13FebContents.kpi1 <= '0.8')?'red':(charity13FebContents.kpi1 > '0.8' && charity13FebContents.kpi1 <= '1.066666667')?'orange':(charity13FebContents.kpi1 > '1.066666667' && charity13FebContents.kpi1 < '1.333333333')?'yellow-7':(charity13FebContents.kpi1 >= '1.333333333' && charity13FebContents.kpi1 < '1.6')?'green':(charity13FebContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi2 == null)?'grey-2':(charity13FebContents.kpi2 >= '0' && charity13FebContents.kpi2 <= '1.4')?'red':(charity13FebContents.kpi2 > '1.4' && charity13FebContents.kpi2 <= '1.866666667')?'orange':(charity13FebContents.kpi2 > '1.866666667' && charity13FebContents.kpi2 < '2.333333333')?'yellow-7':(charity13FebContents.kpi2 >= '2.333333333' && charity13FebContents.kpi2 < '2.8')?'green':(charity13FebContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi3 == null)?'grey-2':(charity13FebContents.kpi3 >= '0' && charity13FebContents.kpi3 <= '2')?'red':(charity13FebContents.kpi3 > '2' && charity13FebContents.kpi3 <= '2.666666667')?'orange':(charity13FebContents.kpi3 > '2.666666667' && charity13FebContents.kpi3 < '3.333333333')?'yellow-7':(charity13FebContents.kpi3 >= '3.333333333' && charity13FebContents.kpi3 < '4')?'green':(charity13FebContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi4 == null)?'grey-2':(charity13FebContents.kpi4 >= '0' && charity13FebContents.kpi4 <= '2.2')?'red':(charity13FebContents.kpi4 > '2.2' && charity13FebContents.kpi4 <= '2.933333333')?'orange':(charity13FebContents.kpi4 > '2.933333333' && charity13FebContents.kpi4 < '3.666666667')?'yellow-7':(charity13FebContents.kpi4 >= '3.666666667' && charity13FebContents.kpi4 < '4.4')?'green':(charity13FebContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi5 == null)?'grey-2':(charity13FebContents.kpi5 >= '0' && charity13FebContents.kpi5 <= '1')?'red':(charity13FebContents.kpi5 > '1' && charity13FebContents.kpi5 <= '1.333333333')?'orange':(charity13FebContents.kpi5 > '1.333333333' && charity13FebContents.kpi5 < '1.666666667')?'yellow-7':(charity13FebContents.kpi5 >= '1.666666667' && charity13FebContents.kpi5 < '2')?'green':(charity13FebContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MarContents.kpi1 == null)?'grey-2':(charity13MarContents.kpi1 >= '0' && charity13MarContents.kpi1 <= '0.8')?'red':(charity13MarContents.kpi1 > '0.8' && charity13MarContents.kpi1 <= '1.066666667')?'orange':(charity13MarContents.kpi1 > '1.066666667' && charity13MarContents.kpi1 < '1.333333333')?'yellow-7':(charity13MarContents.kpi1 >= '1.333333333' && charity13MarContents.kpi1 < '1.6')?'green':(charity13MarContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi2 == null)?'grey-2':(charity13MarContents.kpi2 >= '0' && charity13MarContents.kpi2 <= '1.4')?'red':(charity13MarContents.kpi2 > '1.4' && charity13MarContents.kpi2 <= '1.866666667')?'orange':(charity13MarContents.kpi2 > '1.866666667' && charity13MarContents.kpi2 < '2.333333333')?'yellow-7':(charity13MarContents.kpi2 >= '2.333333333' && charity13MarContents.kpi2 < '2.8')?'green':(charity13MarContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi3 == null)?'grey-2':(charity13MarContents.kpi3 >= '0' && charity13MarContents.kpi3 <= '2')?'red':(charity13MarContents.kpi3 > '2' && charity13MarContents.kpi3 <= '2.666666667')?'orange':(charity13MarContents.kpi3 > '2.666666667' && charity13MarContents.kpi3 < '3.333333333')?'yellow-7':(charity13MarContents.kpi3 >= '3.333333333' && charity13MarContents.kpi3 < '4')?'green':(charity13MarContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi4 == null)?'grey-2':(charity13MarContents.kpi4 >= '0' && charity13MarContents.kpi4 <= '2.2')?'red':(charity13MarContents.kpi4 > '2.2' && charity13MarContents.kpi4 <= '2.933333333')?'orange':(charity13MarContents.kpi4 > '2.933333333' && charity13MarContents.kpi4 < '3.666666667')?'yellow-7':(charity13MarContents.kpi4 >= '3.666666667' && charity13MarContents.kpi4 < '4.4')?'green':(charity13MarContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi5 == null)?'grey-2':(charity13MarContents.kpi5 >= '0' && charity13MarContents.kpi5 <= '1')?'red':(charity13MarContents.kpi5 > '1' && charity13MarContents.kpi5 <= '1.333333333')?'orange':(charity13MarContents.kpi5 > '1.333333333' && charity13MarContents.kpi5 < '1.666666667')?'yellow-7':(charity13MarContents.kpi5 >= '1.666666667' && charity13MarContents.kpi5 < '2')?'green':(charity13MarContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AprContents.kpi1 == null)?'grey-2':(charity13AprContents.kpi1 >= '0' && charity13AprContents.kpi1 <= '0.8')?'red':(charity13AprContents.kpi1 > '0.8' && charity13AprContents.kpi1 <= '1.066666667')?'orange':(charity13AprContents.kpi1 > '1.066666667' && charity13AprContents.kpi1 < '1.333333333')?'yellow-7':(charity13AprContents.kpi1 >= '1.333333333' && charity13AprContents.kpi1 < '1.6')?'green':(charity13AprContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi2 == null)?'grey-2':(charity13AprContents.kpi2 >= '0' && charity13AprContents.kpi2 <= '1.4')?'red':(charity13AprContents.kpi2 > '1.4' && charity13AprContents.kpi2 <= '1.866666667')?'orange':(charity13AprContents.kpi2 > '1.866666667' && charity13AprContents.kpi2 < '2.333333333')?'yellow-7':(charity13AprContents.kpi2 >= '2.333333333' && charity13AprContents.kpi2 < '2.8')?'green':(charity13AprContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi3 == null)?'grey-2':(charity13AprContents.kpi3 >= '0' && charity13AprContents.kpi3 <= '2')?'red':(charity13AprContents.kpi3 > '2' && charity13AprContents.kpi3 <= '2.666666667')?'orange':(charity13AprContents.kpi3 > '2.666666667' && charity13AprContents.kpi3 < '3.333333333')?'yellow-7':(charity13AprContents.kpi3 >= '3.333333333' && charity13AprContents.kpi3 < '4')?'green':(charity13AprContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi4 == null)?'grey-2':(charity13AprContents.kpi4 >= '0' && charity13AprContents.kpi4 <= '2.2')?'red':(charity13AprContents.kpi4 > '2.2' && charity13AprContents.kpi4 <= '2.933333333')?'orange':(charity13AprContents.kpi4 > '2.933333333' && charity13AprContents.kpi4 < '3.666666667')?'yellow-7':(charity13AprContents.kpi4 >= '3.666666667' && charity13AprContents.kpi4 < '4.4')?'green':(charity13AprContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi5 == null)?'grey-2':(charity13AprContents.kpi5 >= '0' && charity13AprContents.kpi5 <= '1')?'red':(charity13AprContents.kpi5 > '1' && charity13AprContents.kpi5 <= '1.333333333')?'orange':(charity13AprContents.kpi5 > '1.333333333' && charity13AprContents.kpi5 < '1.666666667')?'yellow-7':(charity13AprContents.kpi5 >= '1.666666667' && charity13AprContents.kpi5 < '2')?'green':(charity13AprContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MayContents.kpi1 == null)?'grey-2':(charity13MayContents.kpi1 >= '0' && charity13MayContents.kpi1 <= '0.8')?'red':(charity13MayContents.kpi1 > '0.8' && charity13MayContents.kpi1 <= '1.066666667')?'orange':(charity13MayContents.kpi1 > '1.066666667' && charity13MayContents.kpi1 < '1.333333333')?'yellow-7':(charity13MayContents.kpi1 >= '1.333333333' && charity13MayContents.kpi1 < '1.6')?'green':(charity13MayContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi2 == null)?'grey-2':(charity13MayContents.kpi2 >= '0' && charity13MayContents.kpi2 <= '1.4')?'red':(charity13MayContents.kpi2 > '1.4' && charity13MayContents.kpi2 <= '1.866666667')?'orange':(charity13MayContents.kpi2 > '1.866666667' && charity13MayContents.kpi2 < '2.333333333')?'yellow-7':(charity13MayContents.kpi2 >= '2.333333333' && charity13MayContents.kpi2 < '2.8')?'green':(charity13MayContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi3 == null)?'grey-2':(charity13MayContents.kpi3 >= '0' && charity13MayContents.kpi3 <= '2')?'red':(charity13MayContents.kpi3 > '2' && charity13MayContents.kpi3 <= '2.666666667')?'orange':(charity13MayContents.kpi3 > '2.666666667' && charity13MayContents.kpi3 < '3.333333333')?'yellow-7':(charity13MayContents.kpi3 >= '3.333333333' && charity13MayContents.kpi3 < '4')?'green':(charity13MayContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi4 == null)?'grey-2':(charity13MayContents.kpi4 >= '0' && charity13MayContents.kpi4 <= '2.2')?'red':(charity13MayContents.kpi4 > '2.2' && charity13MayContents.kpi4 <= '2.933333333')?'orange':(charity13MayContents.kpi4 > '2.933333333' && charity13MayContents.kpi4 < '3.666666667')?'yellow-7':(charity13MayContents.kpi4 >= '3.666666667' && charity13MayContents.kpi4 < '4.4')?'green':(charity13MayContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi5 == null)?'grey-2':(charity13MayContents.kpi5 >= '0' && charity13MayContents.kpi5 <= '1')?'red':(charity13MayContents.kpi5 > '1' && charity13MayContents.kpi5 <= '1.333333333')?'orange':(charity13MayContents.kpi5 > '1.333333333' && charity13MayContents.kpi5 < '1.666666667')?'yellow-7':(charity13MayContents.kpi5 >= '1.666666667' && charity13MayContents.kpi5 < '2')?'green':(charity13MayContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JunContents.kpi1 == null)?'grey-2':(charity13JunContents.kpi1 >= '0' && charity13JunContents.kpi1 <= '0.8')?'red':(charity13JunContents.kpi1 > '0.8' && charity13JunContents.kpi1 <= '1.066666667')?'orange':(charity13JunContents.kpi1 > '1.066666667' && charity13JunContents.kpi1 < '1.333333333')?'yellow-7':(charity13JunContents.kpi1 >= '1.333333333' && charity13JunContents.kpi1 < '1.6')?'green':(charity13JunContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi2 == null)?'grey-2':(charity13JunContents.kpi2 >= '0' && charity13JunContents.kpi2 <= '1.4')?'red':(charity13JunContents.kpi2 > '1.4' && charity13JunContents.kpi2 <= '1.866666667')?'orange':(charity13JunContents.kpi2 > '1.866666667' && charity13JunContents.kpi2 < '2.333333333')?'yellow-7':(charity13JunContents.kpi2 >= '2.333333333' && charity13JunContents.kpi2 < '2.8')?'green':(charity13JunContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi3 == null)?'grey-2':(charity13JunContents.kpi3 >= '0' && charity13JunContents.kpi3 <= '2')?'red':(charity13JunContents.kpi3 > '2' && charity13JunContents.kpi3 <= '2.666666667')?'orange':(charity13JunContents.kpi3 > '2.666666667' && charity13JunContents.kpi3 < '3.333333333')?'yellow-7':(charity13JunContents.kpi3 >= '3.333333333' && charity13JunContents.kpi3 < '4')?'green':(charity13JunContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi4 == null)?'grey-2':(charity13JunContents.kpi4 >= '0' && charity13JunContents.kpi4 <= '2.2')?'red':(charity13JunContents.kpi4 > '2.2' && charity13JunContents.kpi4 <= '2.933333333')?'orange':(charity13JunContents.kpi4 > '2.933333333' && charity13JunContents.kpi4 < '3.666666667')?'yellow-7':(charity13JunContents.kpi4 >= '3.666666667' && charity13JunContents.kpi4 < '4.4')?'green':(charity13JunContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi5 == null)?'grey-2':(charity13JunContents.kpi5 >= '0' && charity13JunContents.kpi5 <= '1')?'red':(charity13JunContents.kpi5 > '1' && charity13JunContents.kpi5 <= '1.333333333')?'orange':(charity13JunContents.kpi5 > '1.333333333' && charity13JunContents.kpi5 < '1.666666667')?'yellow-7':(charity13JunContents.kpi5 >= '1.666666667' && charity13JunContents.kpi5 < '2')?'green':(charity13JunContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JulContents.kpi1 == null)?'grey-2':(charity13JulContents.kpi1 >= '0' && charity13JulContents.kpi1 <= '0.8')?'red':(charity13JulContents.kpi1 > '0.8' && charity13JulContents.kpi1 <= '1.066666667')?'orange':(charity13JulContents.kpi1 > '1.066666667' && charity13JulContents.kpi1 < '1.333333333')?'yellow-7':(charity13JulContents.kpi1 >= '1.333333333' && charity13JulContents.kpi1 < '1.6')?'green':(charity13JulContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi2 == null)?'grey-2':(charity13JulContents.kpi2 >= '0' && charity13JulContents.kpi2 <= '1.4')?'red':(charity13JulContents.kpi2 > '1.4' && charity13JulContents.kpi2 <= '1.866666667')?'orange':(charity13JulContents.kpi2 > '1.866666667' && charity13JulContents.kpi2 < '2.333333333')?'yellow-7':(charity13JulContents.kpi2 >= '2.333333333' && charity13JulContents.kpi2 < '2.8')?'green':(charity13JulContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi3 == null)?'grey-2':(charity13JulContents.kpi3 >= '0' && charity13JulContents.kpi3 <= '2')?'red':(charity13JulContents.kpi3 > '2' && charity13JulContents.kpi3 <= '2.666666667')?'orange':(charity13JulContents.kpi3 > '2.666666667' && charity13JulContents.kpi3 < '3.333333333')?'yellow-7':(charity13JulContents.kpi3 >= '3.333333333' && charity13JulContents.kpi3 < '4')?'green':(charity13JulContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi4 == null)?'grey-2':(charity13JulContents.kpi4 >= '0' && charity13JulContents.kpi4 <= '2.2')?'red':(charity13JulContents.kpi4 > '2.2' && charity13JulContents.kpi4 <= '2.933333333')?'orange':(charity13JulContents.kpi4 > '2.933333333' && charity13JulContents.kpi4 < '3.666666667')?'yellow-7':(charity13JulContents.kpi4 >= '3.666666667' && charity13JulContents.kpi4 < '4.4')?'green':(charity13JulContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi5 == null)?'grey-2':(charity13JulContents.kpi5 >= '0' && charity13JulContents.kpi5 <= '1')?'red':(charity13JulContents.kpi5 > '1' && charity13JulContents.kpi5 <= '1.333333333')?'orange':(charity13JulContents.kpi5 > '1.333333333' && charity13JulContents.kpi5 < '1.666666667')?'yellow-7':(charity13JulContents.kpi5 >= '1.666666667' && charity13JulContents.kpi5 < '2')?'green':(charity13JulContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AugContents.kpi1 == null)?'grey-2':(charity13AugContents.kpi1 >= '0' && charity13AugContents.kpi1 <= '0.8')?'red':(charity13AugContents.kpi1 > '0.8' && charity13AugContents.kpi1 <= '1.066666667')?'orange':(charity13AugContents.kpi1 > '1.066666667' && charity13AugContents.kpi1 < '1.333333333')?'yellow-7':(charity13AugContents.kpi1 >= '1.333333333' && charity13AugContents.kpi1 < '1.6')?'green':(charity13AugContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi2 == null)?'grey-2':(charity13AugContents.kpi2 >= '0' && charity13AugContents.kpi2 <= '1.4')?'red':(charity13AugContents.kpi2 > '1.4' && charity13AugContents.kpi2 <= '1.866666667')?'orange':(charity13AugContents.kpi2 > '1.866666667' && charity13AugContents.kpi2 < '2.333333333')?'yellow-7':(charity13AugContents.kpi2 >= '2.333333333' && charity13AugContents.kpi2 < '2.8')?'green':(charity13AugContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi3 == null)?'grey-2':(charity13AugContents.kpi3 >= '0' && charity13AugContents.kpi3 <= '2')?'red':(charity13AugContents.kpi3 > '2' && charity13AugContents.kpi3 <= '2.666666667')?'orange':(charity13AugContents.kpi3 > '2.666666667' && charity13AugContents.kpi3 < '3.333333333')?'yellow-7':(charity13AugContents.kpi3 >= '3.333333333' && charity13AugContents.kpi3 < '4')?'green':(charity13AugContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi4 == null)?'grey-2':(charity13AugContents.kpi4 >= '0' && charity13AugContents.kpi4 <= '2.2')?'red':(charity13AugContents.kpi4 > '2.2' && charity13AugContents.kpi4 <= '2.933333333')?'orange':(charity13AugContents.kpi4 > '2.933333333' && charity13AugContents.kpi4 < '3.666666667')?'yellow-7':(charity13AugContents.kpi4 >= '3.666666667' && charity13AugContents.kpi4 < '4.4')?'green':(charity13AugContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi5 == null)?'grey-2':(charity13AugContents.kpi5 >= '0' && charity13AugContents.kpi5 <= '1')?'red':(charity13AugContents.kpi5 > '1' && charity13AugContents.kpi5 <= '1.333333333')?'orange':(charity13AugContents.kpi5 > '1.333333333' && charity13AugContents.kpi5 < '1.666666667')?'yellow-7':(charity13AugContents.kpi5 >= '1.666666667' && charity13AugContents.kpi5 < '2')?'green':(charity13AugContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13SepContents.kpi1 == null)?'grey-2':(charity13SepContents.kpi1 >= '0' && charity13SepContents.kpi1 <= '0.8')?'red':(charity13SepContents.kpi1 > '0.8' && charity13SepContents.kpi1 <= '1.066666667')?'orange':(charity13SepContents.kpi1 > '1.066666667' && charity13SepContents.kpi1 < '1.333333333')?'yellow-7':(charity13SepContents.kpi1 >= '1.333333333' && charity13SepContents.kpi1 < '1.6')?'green':(charity13SepContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi2 == null)?'grey-2':(charity13SepContents.kpi2 >= '0' && charity13SepContents.kpi2 <= '1.4')?'red':(charity13SepContents.kpi2 > '1.4' && charity13SepContents.kpi2 <= '1.866666667')?'orange':(charity13SepContents.kpi2 > '1.866666667' && charity13SepContents.kpi2 < '2.333333333')?'yellow-7':(charity13SepContents.kpi2 >= '2.333333333' && charity13SepContents.kpi2 < '2.8')?'green':(charity13SepContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi3 == null)?'grey-2':(charity13SepContents.kpi3 >= '0' && charity13SepContents.kpi3 <= '2')?'red':(charity13SepContents.kpi3 > '2' && charity13SepContents.kpi3 <= '2.666666667')?'orange':(charity13SepContents.kpi3 > '2.666666667' && charity13SepContents.kpi3 < '3.333333333')?'yellow-7':(charity13SepContents.kpi3 >= '3.333333333' && charity13SepContents.kpi3 < '4')?'green':(charity13SepContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi4 == null)?'grey-2':(charity13SepContents.kpi4 >= '0' && charity13SepContents.kpi4 <= '2.2')?'red':(charity13SepContents.kpi4 > '2.2' && charity13SepContents.kpi4 <= '2.933333333')?'orange':(charity13SepContents.kpi4 > '2.933333333' && charity13SepContents.kpi4 < '3.666666667')?'yellow-7':(charity13SepContents.kpi4 >= '3.666666667' && charity13SepContents.kpi4 < '4.4')?'green':(charity13SepContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi5 == null)?'grey-2':(charity13SepContents.kpi5 >= '0' && charity13SepContents.kpi5 <= '1')?'red':(charity13SepContents.kpi5 > '1' && charity13SepContents.kpi5 <= '1.333333333')?'orange':(charity13SepContents.kpi5 > '1.333333333' && charity13SepContents.kpi5 < '1.666666667')?'yellow-7':(charity13SepContents.kpi5 >= '1.666666667' && charity13SepContents.kpi5 < '2')?'green':(charity13SepContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13OctContents.kpi1 == null)?'grey-2':(charity13OctContents.kpi1 >= '0' && charity13OctContents.kpi1 <= '0.8')?'red':(charity13OctContents.kpi1 > '0.8' && charity13OctContents.kpi1 <= '1.066666667')?'orange':(charity13OctContents.kpi1 > '1.066666667' && charity13OctContents.kpi1 < '1.333333333')?'yellow-7':(charity13OctContents.kpi1 >= '1.333333333' && charity13OctContents.kpi1 < '1.6')?'green':(charity13OctContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi2 == null)?'grey-2':(charity13OctContents.kpi2 >= '0' && charity13OctContents.kpi2 <= '1.4')?'red':(charity13OctContents.kpi2 > '1.4' && charity13OctContents.kpi2 <= '1.866666667')?'orange':(charity13OctContents.kpi2 > '1.866666667' && charity13OctContents.kpi2 < '2.333333333')?'yellow-7':(charity13OctContents.kpi2 >= '2.333333333' && charity13OctContents.kpi2 < '2.8')?'green':(charity13OctContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi3 == null)?'grey-2':(charity13OctContents.kpi3 >= '0' && charity13OctContents.kpi3 <= '2')?'red':(charity13OctContents.kpi3 > '2' && charity13OctContents.kpi3 <= '2.666666667')?'orange':(charity13OctContents.kpi3 > '2.666666667' && charity13OctContents.kpi3 < '3.333333333')?'yellow-7':(charity13OctContents.kpi3 >= '3.333333333' && charity13OctContents.kpi3 < '4')?'green':(charity13OctContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi4 == null)?'grey-2':(charity13OctContents.kpi4 >= '0' && charity13OctContents.kpi4 <= '2.2')?'red':(charity13OctContents.kpi4 > '2.2' && charity13OctContents.kpi4 <= '2.933333333')?'orange':(charity13OctContents.kpi4 > '2.933333333' && charity13OctContents.kpi4 < '3.666666667')?'yellow-7':(charity13OctContents.kpi4 >= '3.666666667' && charity13OctContents.kpi4 < '4.4')?'green':(charity13OctContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi5 == null)?'grey-2':(charity13OctContents.kpi5 >= '0' && charity13OctContents.kpi5 <= '1')?'red':(charity13OctContents.kpi5 > '1' && charity13OctContents.kpi5 <= '1.333333333')?'orange':(charity13OctContents.kpi5 > '1.333333333' && charity13OctContents.kpi5 < '1.666666667')?'yellow-7':(charity13OctContents.kpi5 >= '1.666666667' && charity13OctContents.kpi5 < '2')?'green':(charity13OctContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13NovContents.kpi1 == null)?'grey-2':(charity13NovContents.kpi1 >= '0' && charity13NovContents.kpi1 <= '0.8')?'red':(charity13NovContents.kpi1 > '0.8' && charity13NovContents.kpi1 <= '1.066666667')?'orange':(charity13NovContents.kpi1 > '1.066666667' && charity13NovContents.kpi1 < '1.333333333')?'yellow-7':(charity13NovContents.kpi1 >= '1.333333333' && charity13NovContents.kpi1 < '1.6')?'green':(charity13NovContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi2 == null)?'grey-2':(charity13NovContents.kpi2 >= '0' && charity13NovContents.kpi2 <= '1.4')?'red':(charity13NovContents.kpi2 > '1.4' && charity13NovContents.kpi2 <= '1.866666667')?'orange':(charity13NovContents.kpi2 > '1.866666667' && charity13NovContents.kpi2 < '2.333333333')?'yellow-7':(charity13NovContents.kpi2 >= '2.333333333' && charity13NovContents.kpi2 < '2.8')?'green':(charity13NovContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi3 == null)?'grey-2':(charity13NovContents.kpi3 >= '0' && charity13NovContents.kpi3 <= '2')?'red':(charity13NovContents.kpi3 > '2' && charity13NovContents.kpi3 <= '2.666666667')?'orange':(charity13NovContents.kpi3 > '2.666666667' && charity13NovContents.kpi3 < '3.333333333')?'yellow-7':(charity13NovContents.kpi3 >= '3.333333333' && charity13NovContents.kpi3 < '4')?'green':(charity13NovContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi4 == null)?'grey-2':(charity13NovContents.kpi4 >= '0' && charity13NovContents.kpi4 <= '2.2')?'red':(charity13NovContents.kpi4 > '2.2' && charity13NovContents.kpi4 <= '2.933333333')?'orange':(charity13NovContents.kpi4 > '2.933333333' && charity13NovContents.kpi4 < '3.666666667')?'yellow-7':(charity13NovContents.kpi4 >= '3.666666667' && charity13NovContents.kpi4 < '4.4')?'green':(charity13NovContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi5 == null)?'grey-2':(charity13NovContents.kpi5 >= '0' && charity13NovContents.kpi5 <= '1')?'red':(charity13NovContents.kpi5 > '1' && charity13NovContents.kpi5 <= '1.333333333')?'orange':(charity13NovContents.kpi5 > '1.333333333' && charity13NovContents.kpi5 < '1.666666667')?'yellow-7':(charity13NovContents.kpi5 >= '1.666666667' && charity13NovContents.kpi5 < '2')?'green':(charity13NovContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13DecContents.kpi1 == null)?'grey-2':(charity13DecContents.kpi1 >= '0' && charity13DecContents.kpi1 <= '0.8')?'red':(charity13DecContents.kpi1 > '0.8' && charity13DecContents.kpi1 <= '1.066666667')?'orange':(charity13DecContents.kpi1 > '1.066666667' && charity13DecContents.kpi1 < '1.333333333')?'yellow-7':(charity13DecContents.kpi1 >= '1.333333333' && charity13DecContents.kpi1 < '1.6')?'green':(charity13DecContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi2 == null)?'grey-2':(charity13DecContents.kpi2 >= '0' && charity13DecContents.kpi2 <= '1.4')?'red':(charity13DecContents.kpi2 > '1.4' && charity13DecContents.kpi2 <= '1.866666667')?'orange':(charity13DecContents.kpi2 > '1.866666667' && charity13DecContents.kpi2 < '2.333333333')?'yellow-7':(charity13DecContents.kpi2 >= '2.333333333' && charity13DecContents.kpi2 < '2.8')?'green':(charity13DecContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi3 == null)?'grey-2':(charity13DecContents.kpi3 >= '0' && charity13DecContents.kpi3 <= '2')?'red':(charity13DecContents.kpi3 > '2' && charity13DecContents.kpi3 <= '2.666666667')?'orange':(charity13DecContents.kpi3 > '2.666666667' && charity13DecContents.kpi3 < '3.333333333')?'yellow-7':(charity13DecContents.kpi3 >= '3.333333333' && charity13DecContents.kpi3 < '4')?'green':(charity13DecContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi4 == null)?'grey-2':(charity13DecContents.kpi4 >= '0' && charity13DecContents.kpi4 <= '2.2')?'red':(charity13DecContents.kpi4 > '2.2' && charity13DecContents.kpi4 <= '2.933333333')?'orange':(charity13DecContents.kpi4 > '2.933333333' && charity13DecContents.kpi4 < '3.666666667')?'yellow-7':(charity13DecContents.kpi4 >= '3.666666667' && charity13DecContents.kpi4 < '4.4')?'green':(charity13DecContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi5 == null)?'grey-2':(charity13DecContents.kpi5 >= '0' && charity13DecContents.kpi5 <= '1')?'red':(charity13DecContents.kpi5 > '1' && charity13DecContents.kpi5 <= '1.333333333')?'orange':(charity13DecContents.kpi5 > '1.333333333' && charity13DecContents.kpi5 < '1.666666667')?'yellow-7':(charity13DecContents.kpi5 >= '1.666666667' && charity13DecContents.kpi5 < '2')?'green':(charity13DecContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JanContents.kpi1 == null)?'grey-2':(charity13JanContents.kpi1 >= '0' && charity13JanContents.kpi1 <= '0.8')?'red':(charity13JanContents.kpi1 > '0.8' && charity13JanContents.kpi1 <= '1.066666667')?'orange':(charity13JanContents.kpi1 > '1.066666667' && charity13JanContents.kpi1 < '1.333333333')?'yellow-7':(charity13JanContents.kpi1 >= '1.333333333' && charity13JanContents.kpi1 < '1.6')?'green':(charity13JanContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi2 == null)?'grey-2':(charity13JanContents.kpi2 >= '0' && charity13JanContents.kpi2 <= '1.4')?'red':(charity13JanContents.kpi2 > '1.4' && charity13JanContents.kpi2 <= '1.866666667')?'orange':(charity13JanContents.kpi2 > '1.866666667' && charity13JanContents.kpi2 < '2.333333333')?'yellow-7':(charity13JanContents.kpi2 >= '2.333333333' && charity13JanContents.kpi2 < '2.8')?'green':(charity13JanContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi3 == null)?'grey-2':(charity13JanContents.kpi3 >= '0' && charity13JanContents.kpi3 <= '2')?'red':(charity13JanContents.kpi3 > '2' && charity13JanContents.kpi3 <= '2.666666667')?'orange':(charity13JanContents.kpi3 > '2.666666667' && charity13JanContents.kpi3 < '3.333333333')?'yellow-7':(charity13JanContents.kpi3 >= '3.333333333' && charity13JanContents.kpi3 < '4')?'green':(charity13JanContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi4 == null)?'grey-2':(charity13JanContents.kpi4 >= '0' && charity13JanContents.kpi4 <= '2.2')?'red':(charity13JanContents.kpi4 > '2.2' && charity13JanContents.kpi4 <= '2.933333333')?'orange':(charity13JanContents.kpi4 > '2.933333333' && charity13JanContents.kpi4 < '3.666666667')?'yellow-7':(charity13JanContents.kpi4 >= '3.666666667' && charity13JanContents.kpi4 < '4.4')?'green':(charity13JanContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi5 == null)?'grey-2':(charity13JanContents.kpi5 >= '0' && charity13JanContents.kpi5 <= '1')?'red':(charity13JanContents.kpi5 > '1' && charity13JanContents.kpi5 <= '1.333333333')?'orange':(charity13JanContents.kpi5 > '1.333333333' && charity13JanContents.kpi5 < '1.666666667')?'yellow-7':(charity13JanContents.kpi5 >= '1.666666667' && charity13JanContents.kpi5 < '2')?'green':(charity13JanContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13FebContents.kpi1 == null)?'grey-2':(charity13FebContents.kpi1 >= '0' && charity13FebContents.kpi1 <= '0.8')?'red':(charity13FebContents.kpi1 > '0.8' && charity13FebContents.kpi1 <= '1.066666667')?'orange':(charity13FebContents.kpi1 > '1.066666667' && charity13FebContents.kpi1 < '1.333333333')?'yellow-7':(charity13FebContents.kpi1 >= '1.333333333' && charity13FebContents.kpi1 < '1.6')?'green':(charity13FebContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi2 == null)?'grey-2':(charity13FebContents.kpi2 >= '0' && charity13FebContents.kpi2 <= '1.4')?'red':(charity13FebContents.kpi2 > '1.4' && charity13FebContents.kpi2 <= '1.866666667')?'orange':(charity13FebContents.kpi2 > '1.866666667' && charity13FebContents.kpi2 < '2.333333333')?'yellow-7':(charity13FebContents.kpi2 >= '2.333333333' && charity13FebContents.kpi2 < '2.8')?'green':(charity13FebContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi3 == null)?'grey-2':(charity13FebContents.kpi3 >= '0' && charity13FebContents.kpi3 <= '2')?'red':(charity13FebContents.kpi3 > '2' && charity13FebContents.kpi3 <= '2.666666667')?'orange':(charity13FebContents.kpi3 > '2.666666667' && charity13FebContents.kpi3 < '3.333333333')?'yellow-7':(charity13FebContents.kpi3 >= '3.333333333' && charity13FebContents.kpi3 < '4')?'green':(charity13FebContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi4 == null)?'grey-2':(charity13FebContents.kpi4 >= '0' && charity13FebContents.kpi4 <= '2.2')?'red':(charity13FebContents.kpi4 > '2.2' && charity13FebContents.kpi4 <= '2.933333333')?'orange':(charity13FebContents.kpi4 > '2.933333333' && charity13FebContents.kpi4 < '3.666666667')?'yellow-7':(charity13FebContents.kpi4 >= '3.666666667' && charity13FebContents.kpi4 < '4.4')?'green':(charity13FebContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi5 == null)?'grey-2':(charity13FebContents.kpi5 >= '0' && charity13FebContents.kpi5 <= '1')?'red':(charity13FebContents.kpi5 > '1' && charity13FebContents.kpi5 <= '1.333333333')?'orange':(charity13FebContents.kpi5 > '1.333333333' && charity13FebContents.kpi5 < '1.666666667')?'yellow-7':(charity13FebContents.kpi5 >= '1.666666667' && charity13FebContents.kpi5 < '2')?'green':(charity13FebContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MarContents.kpi1 == null)?'grey-2':(charity13MarContents.kpi1 >= '0' && charity13MarContents.kpi1 <= '0.8')?'red':(charity13MarContents.kpi1 > '0.8' && charity13MarContents.kpi1 <= '1.066666667')?'orange':(charity13MarContents.kpi1 > '1.066666667' && charity13MarContents.kpi1 < '1.333333333')?'yellow-7':(charity13MarContents.kpi1 >= '1.333333333' && charity13MarContents.kpi1 < '1.6')?'green':(charity13MarContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi2 == null)?'grey-2':(charity13MarContents.kpi2 >= '0' && charity13MarContents.kpi2 <= '1.4')?'red':(charity13MarContents.kpi2 > '1.4' && charity13MarContents.kpi2 <= '1.866666667')?'orange':(charity13MarContents.kpi2 > '1.866666667' && charity13MarContents.kpi2 < '2.333333333')?'yellow-7':(charity13MarContents.kpi2 >= '2.333333333' && charity13MarContents.kpi2 < '2.8')?'green':(charity13MarContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi3 == null)?'grey-2':(charity13MarContents.kpi3 >= '0' && charity13MarContents.kpi3 <= '2')?'red':(charity13MarContents.kpi3 > '2' && charity13MarContents.kpi3 <= '2.666666667')?'orange':(charity13MarContents.kpi3 > '2.666666667' && charity13MarContents.kpi3 < '3.333333333')?'yellow-7':(charity13MarContents.kpi3 >= '3.333333333' && charity13MarContents.kpi3 < '4')?'green':(charity13MarContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi4 == null)?'grey-2':(charity13MarContents.kpi4 >= '0' && charity13MarContents.kpi4 <= '2.2')?'red':(charity13MarContents.kpi4 > '2.2' && charity13MarContents.kpi4 <= '2.933333333')?'orange':(charity13MarContents.kpi4 > '2.933333333' && charity13MarContents.kpi4 < '3.666666667')?'yellow-7':(charity13MarContents.kpi4 >= '3.666666667' && charity13MarContents.kpi4 < '4.4')?'green':(charity13MarContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi5 == null)?'grey-2':(charity13MarContents.kpi5 >= '0' && charity13MarContents.kpi5 <= '1')?'red':(charity13MarContents.kpi5 > '1' && charity13MarContents.kpi5 <= '1.333333333')?'orange':(charity13MarContents.kpi5 > '1.333333333' && charity13MarContents.kpi5 < '1.666666667')?'yellow-7':(charity13MarContents.kpi5 >= '1.666666667' && charity13MarContents.kpi5 < '2')?'green':(charity13MarContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AprContents.kpi1 == null)?'grey-2':(charity13AprContents.kpi1 >= '0' && charity13AprContents.kpi1 <= '0.8')?'red':(charity13AprContents.kpi1 > '0.8' && charity13AprContents.kpi1 <= '1.066666667')?'orange':(charity13AprContents.kpi1 > '1.066666667' && charity13AprContents.kpi1 < '1.333333333')?'yellow-7':(charity13AprContents.kpi1 >= '1.333333333' && charity13AprContents.kpi1 < '1.6')?'green':(charity13AprContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi2 == null)?'grey-2':(charity13AprContents.kpi2 >= '0' && charity13AprContents.kpi2 <= '1.4')?'red':(charity13AprContents.kpi2 > '1.4' && charity13AprContents.kpi2 <= '1.866666667')?'orange':(charity13AprContents.kpi2 > '1.866666667' && charity13AprContents.kpi2 < '2.333333333')?'yellow-7':(charity13AprContents.kpi2 >= '2.333333333' && charity13AprContents.kpi2 < '2.8')?'green':(charity13AprContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi3 == null)?'grey-2':(charity13AprContents.kpi3 >= '0' && charity13AprContents.kpi3 <= '2')?'red':(charity13AprContents.kpi3 > '2' && charity13AprContents.kpi3 <= '2.666666667')?'orange':(charity13AprContents.kpi3 > '2.666666667' && charity13AprContents.kpi3 < '3.333333333')?'yellow-7':(charity13AprContents.kpi3 >= '3.333333333' && charity13AprContents.kpi3 < '4')?'green':(charity13AprContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi4 == null)?'grey-2':(charity13AprContents.kpi4 >= '0' && charity13AprContents.kpi4 <= '2.2')?'red':(charity13AprContents.kpi4 > '2.2' && charity13AprContents.kpi4 <= '2.933333333')?'orange':(charity13AprContents.kpi4 > '2.933333333' && charity13AprContents.kpi4 < '3.666666667')?'yellow-7':(charity13AprContents.kpi4 >= '3.666666667' && charity13AprContents.kpi4 < '4.4')?'green':(charity13AprContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi5 == null)?'grey-2':(charity13AprContents.kpi5 >= '0' && charity13AprContents.kpi5 <= '1')?'red':(charity13AprContents.kpi5 > '1' && charity13AprContents.kpi5 <= '1.333333333')?'orange':(charity13AprContents.kpi5 > '1.333333333' && charity13AprContents.kpi5 < '1.666666667')?'yellow-7':(charity13AprContents.kpi5 >= '1.666666667' && charity13AprContents.kpi5 < '2')?'green':(charity13AprContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MayContents.kpi1 == null)?'grey-2':(charity13MayContents.kpi1 >= '0' && charity13MayContents.kpi1 <= '0.8')?'red':(charity13MayContents.kpi1 > '0.8' && charity13MayContents.kpi1 <= '1.066666667')?'orange':(charity13MayContents.kpi1 > '1.066666667' && charity13MayContents.kpi1 < '1.333333333')?'yellow-7':(charity13MayContents.kpi1 >= '1.333333333' && charity13MayContents.kpi1 < '1.6')?'green':(charity13MayContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi2 == null)?'grey-2':(charity13MayContents.kpi2 >= '0' && charity13MayContents.kpi2 <= '1.4')?'red':(charity13MayContents.kpi2 > '1.4' && charity13MayContents.kpi2 <= '1.866666667')?'orange':(charity13MayContents.kpi2 > '1.866666667' && charity13MayContents.kpi2 < '2.333333333')?'yellow-7':(charity13MayContents.kpi2 >= '2.333333333' && charity13MayContents.kpi2 < '2.8')?'green':(charity13MayContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi3 == null)?'grey-2':(charity13MayContents.kpi3 >= '0' && charity13MayContents.kpi3 <= '2')?'red':(charity13MayContents.kpi3 > '2' && charity13MayContents.kpi3 <= '2.666666667')?'orange':(charity13MayContents.kpi3 > '2.666666667' && charity13MayContents.kpi3 < '3.333333333')?'yellow-7':(charity13MayContents.kpi3 >= '3.333333333' && charity13MayContents.kpi3 < '4')?'green':(charity13MayContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi4 == null)?'grey-2':(charity13MayContents.kpi4 >= '0' && charity13MayContents.kpi4 <= '2.2')?'red':(charity13MayContents.kpi4 > '2.2' && charity13MayContents.kpi4 <= '2.933333333')?'orange':(charity13MayContents.kpi4 > '2.933333333' && charity13MayContents.kpi4 < '3.666666667')?'yellow-7':(charity13MayContents.kpi4 >= '3.666666667' && charity13MayContents.kpi4 < '4.4')?'green':(charity13MayContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi5 == null)?'grey-2':(charity13MayContents.kpi5 >= '0' && charity13MayContents.kpi5 <= '1')?'red':(charity13MayContents.kpi5 > '1' && charity13MayContents.kpi5 <= '1.333333333')?'orange':(charity13MayContents.kpi5 > '1.333333333' && charity13MayContents.kpi5 < '1.666666667')?'yellow-7':(charity13MayContents.kpi5 >= '1.666666667' && charity13MayContents.kpi5 < '2')?'green':(charity13MayContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JunContents.kpi1 == null)?'grey-2':(charity13JunContents.kpi1 >= '0' && charity13JunContents.kpi1 <= '0.8')?'red':(charity13JunContents.kpi1 > '0.8' && charity13JunContents.kpi1 <= '1.066666667')?'orange':(charity13JunContents.kpi1 > '1.066666667' && charity13JunContents.kpi1 < '1.333333333')?'yellow-7':(charity13JunContents.kpi1 >= '1.333333333' && charity13JunContents.kpi1 < '1.6')?'green':(charity13JunContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi2 == null)?'grey-2':(charity13JunContents.kpi2 >= '0' && charity13JunContents.kpi2 <= '1.4')?'red':(charity13JunContents.kpi2 > '1.4' && charity13JunContents.kpi2 <= '1.866666667')?'orange':(charity13JunContents.kpi2 > '1.866666667' && charity13JunContents.kpi2 < '2.333333333')?'yellow-7':(charity13JunContents.kpi2 >= '2.333333333' && charity13JunContents.kpi2 < '2.8')?'green':(charity13JunContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi3 == null)?'grey-2':(charity13JunContents.kpi3 >= '0' && charity13JunContents.kpi3 <= '2')?'red':(charity13JunContents.kpi3 > '2' && charity13JunContents.kpi3 <= '2.666666667')?'orange':(charity13JunContents.kpi3 > '2.666666667' && charity13JunContents.kpi3 < '3.333333333')?'yellow-7':(charity13JunContents.kpi3 >= '3.333333333' && charity13JunContents.kpi3 < '4')?'green':(charity13JunContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi4 == null)?'grey-2':(charity13JunContents.kpi4 >= '0' && charity13JunContents.kpi4 <= '2.2')?'red':(charity13JunContents.kpi4 > '2.2' && charity13JunContents.kpi4 <= '2.933333333')?'orange':(charity13JunContents.kpi4 > '2.933333333' && charity13JunContents.kpi4 < '3.666666667')?'yellow-7':(charity13JunContents.kpi4 >= '3.666666667' && charity13JunContents.kpi4 < '4.4')?'green':(charity13JunContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi5 == null)?'grey-2':(charity13JunContents.kpi5 >= '0' && charity13JunContents.kpi5 <= '1')?'red':(charity13JunContents.kpi5 > '1' && charity13JunContents.kpi5 <= '1.333333333')?'orange':(charity13JunContents.kpi5 > '1.333333333' && charity13JunContents.kpi5 < '1.666666667')?'yellow-7':(charity13JunContents.kpi5 >= '1.666666667' && charity13JunContents.kpi5 < '2')?'green':(charity13JunContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JulContents.kpi1 == null)?'grey-2':(charity13JulContents.kpi1 >= '0' && charity13JulContents.kpi1 <= '0.8')?'red':(charity13JulContents.kpi1 > '0.8' && charity13JulContents.kpi1 <= '1.066666667')?'orange':(charity13JulContents.kpi1 > '1.066666667' && charity13JulContents.kpi1 < '1.333333333')?'yellow-7':(charity13JulContents.kpi1 >= '1.333333333' && charity13JulContents.kpi1 < '1.6')?'green':(charity13JulContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi2 == null)?'grey-2':(charity13JulContents.kpi2 >= '0' && charity13JulContents.kpi2 <= '1.4')?'red':(charity13JulContents.kpi2 > '1.4' && charity13JulContents.kpi2 <= '1.866666667')?'orange':(charity13JulContents.kpi2 > '1.866666667' && charity13JulContents.kpi2 < '2.333333333')?'yellow-7':(charity13JulContents.kpi2 >= '2.333333333' && charity13JulContents.kpi2 < '2.8')?'green':(charity13JulContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi3 == null)?'grey-2':(charity13JulContents.kpi3 >= '0' && charity13JulContents.kpi3 <= '2')?'red':(charity13JulContents.kpi3 > '2' && charity13JulContents.kpi3 <= '2.666666667')?'orange':(charity13JulContents.kpi3 > '2.666666667' && charity13JulContents.kpi3 < '3.333333333')?'yellow-7':(charity13JulContents.kpi3 >= '3.333333333' && charity13JulContents.kpi3 < '4')?'green':(charity13JulContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi4 == null)?'grey-2':(charity13JulContents.kpi4 >= '0' && charity13JulContents.kpi4 <= '2.2')?'red':(charity13JulContents.kpi4 > '2.2' && charity13JulContents.kpi4 <= '2.933333333')?'orange':(charity13JulContents.kpi4 > '2.933333333' && charity13JulContents.kpi4 < '3.666666667')?'yellow-7':(charity13JulContents.kpi4 >= '3.666666667' && charity13JulContents.kpi4 < '4.4')?'green':(charity13JulContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi5 == null)?'grey-2':(charity13JulContents.kpi5 >= '0' && charity13JulContents.kpi5 <= '1')?'red':(charity13JulContents.kpi5 > '1' && charity13JulContents.kpi5 <= '1.333333333')?'orange':(charity13JulContents.kpi5 > '1.333333333' && charity13JulContents.kpi5 < '1.666666667')?'yellow-7':(charity13JulContents.kpi5 >= '1.666666667' && charity13JulContents.kpi5 < '2')?'green':(charity13JulContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AugContents.kpi1 == null)?'grey-2':(charity13AugContents.kpi1 >= '0' && charity13AugContents.kpi1 <= '0.8')?'red':(charity13AugContents.kpi1 > '0.8' && charity13AugContents.kpi1 <= '1.066666667')?'orange':(charity13AugContents.kpi1 > '1.066666667' && charity13AugContents.kpi1 < '1.333333333')?'yellow-7':(charity13AugContents.kpi1 >= '1.333333333' && charity13AugContents.kpi1 < '1.6')?'green':(charity13AugContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi2 == null)?'grey-2':(charity13AugContents.kpi2 >= '0' && charity13AugContents.kpi2 <= '1.4')?'red':(charity13AugContents.kpi2 > '1.4' && charity13AugContents.kpi2 <= '1.866666667')?'orange':(charity13AugContents.kpi2 > '1.866666667' && charity13AugContents.kpi2 < '2.333333333')?'yellow-7':(charity13AugContents.kpi2 >= '2.333333333' && charity13AugContents.kpi2 < '2.8')?'green':(charity13AugContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi3 == null)?'grey-2':(charity13AugContents.kpi3 >= '0' && charity13AugContents.kpi3 <= '2')?'red':(charity13AugContents.kpi3 > '2' && charity13AugContents.kpi3 <= '2.666666667')?'orange':(charity13AugContents.kpi3 > '2.666666667' && charity13AugContents.kpi3 < '3.333333333')?'yellow-7':(charity13AugContents.kpi3 >= '3.333333333' && charity13AugContents.kpi3 < '4')?'green':(charity13AugContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi4 == null)?'grey-2':(charity13AugContents.kpi4 >= '0' && charity13AugContents.kpi4 <= '2.2')?'red':(charity13AugContents.kpi4 > '2.2' && charity13AugContents.kpi4 <= '2.933333333')?'orange':(charity13AugContents.kpi4 > '2.933333333' && charity13AugContents.kpi4 < '3.666666667')?'yellow-7':(charity13AugContents.kpi4 >= '3.666666667' && charity13AugContents.kpi4 < '4.4')?'green':(charity13AugContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi5 == null)?'grey-2':(charity13AugContents.kpi5 >= '0' && charity13AugContents.kpi5 <= '1')?'red':(charity13AugContents.kpi5 > '1' && charity13AugContents.kpi5 <= '1.333333333')?'orange':(charity13AugContents.kpi5 > '1.333333333' && charity13AugContents.kpi5 < '1.666666667')?'yellow-7':(charity13AugContents.kpi5 >= '1.666666667' && charity13AugContents.kpi5 < '2')?'green':(charity13AugContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13SepContents.kpi1 == null)?'grey-2':(charity13SepContents.kpi1 >= '0' && charity13SepContents.kpi1 <= '0.8')?'red':(charity13SepContents.kpi1 > '0.8' && charity13SepContents.kpi1 <= '1.066666667')?'orange':(charity13SepContents.kpi1 > '1.066666667' && charity13SepContents.kpi1 < '1.333333333')?'yellow-7':(charity13SepContents.kpi1 >= '1.333333333' && charity13SepContents.kpi1 < '1.6')?'green':(charity13SepContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi2 == null)?'grey-2':(charity13SepContents.kpi2 >= '0' && charity13SepContents.kpi2 <= '1.4')?'red':(charity13SepContents.kpi2 > '1.4' && charity13SepContents.kpi2 <= '1.866666667')?'orange':(charity13SepContents.kpi2 > '1.866666667' && charity13SepContents.kpi2 < '2.333333333')?'yellow-7':(charity13SepContents.kpi2 >= '2.333333333' && charity13SepContents.kpi2 < '2.8')?'green':(charity13SepContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi3 == null)?'grey-2':(charity13SepContents.kpi3 >= '0' && charity13SepContents.kpi3 <= '2')?'red':(charity13SepContents.kpi3 > '2' && charity13SepContents.kpi3 <= '2.666666667')?'orange':(charity13SepContents.kpi3 > '2.666666667' && charity13SepContents.kpi3 < '3.333333333')?'yellow-7':(charity13SepContents.kpi3 >= '3.333333333' && charity13SepContents.kpi3 < '4')?'green':(charity13SepContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi4 == null)?'grey-2':(charity13SepContents.kpi4 >= '0' && charity13SepContents.kpi4 <= '2.2')?'red':(charity13SepContents.kpi4 > '2.2' && charity13SepContents.kpi4 <= '2.933333333')?'orange':(charity13SepContents.kpi4 > '2.933333333' && charity13SepContents.kpi4 < '3.666666667')?'yellow-7':(charity13SepContents.kpi4 >= '3.666666667' && charity13SepContents.kpi4 < '4.4')?'green':(charity13SepContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi5 == null)?'grey-2':(charity13SepContents.kpi5 >= '0' && charity13SepContents.kpi5 <= '1')?'red':(charity13SepContents.kpi5 > '1' && charity13SepContents.kpi5 <= '1.333333333')?'orange':(charity13SepContents.kpi5 > '1.333333333' && charity13SepContents.kpi5 < '1.666666667')?'yellow-7':(charity13SepContents.kpi5 >= '1.666666667' && charity13SepContents.kpi5 < '2')?'green':(charity13SepContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13OctContents.kpi1 == null)?'grey-2':(charity13OctContents.kpi1 >= '0' && charity13OctContents.kpi1 <= '0.8')?'red':(charity13OctContents.kpi1 > '0.8' && charity13OctContents.kpi1 <= '1.066666667')?'orange':(charity13OctContents.kpi1 > '1.066666667' && charity13OctContents.kpi1 < '1.333333333')?'yellow-7':(charity13OctContents.kpi1 >= '1.333333333' && charity13OctContents.kpi1 < '1.6')?'green':(charity13OctContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi2 == null)?'grey-2':(charity13OctContents.kpi2 >= '0' && charity13OctContents.kpi2 <= '1.4')?'red':(charity13OctContents.kpi2 > '1.4' && charity13OctContents.kpi2 <= '1.866666667')?'orange':(charity13OctContents.kpi2 > '1.866666667' && charity13OctContents.kpi2 < '2.333333333')?'yellow-7':(charity13OctContents.kpi2 >= '2.333333333' && charity13OctContents.kpi2 < '2.8')?'green':(charity13OctContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi3 == null)?'grey-2':(charity13OctContents.kpi3 >= '0' && charity13OctContents.kpi3 <= '2')?'red':(charity13OctContents.kpi3 > '2' && charity13OctContents.kpi3 <= '2.666666667')?'orange':(charity13OctContents.kpi3 > '2.666666667' && charity13OctContents.kpi3 < '3.333333333')?'yellow-7':(charity13OctContents.kpi3 >= '3.333333333' && charity13OctContents.kpi3 < '4')?'green':(charity13OctContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi4 == null)?'grey-2':(charity13OctContents.kpi4 >= '0' && charity13OctContents.kpi4 <= '2.2')?'red':(charity13OctContents.kpi4 > '2.2' && charity13OctContents.kpi4 <= '2.933333333')?'orange':(charity13OctContents.kpi4 > '2.933333333' && charity13OctContents.kpi4 < '3.666666667')?'yellow-7':(charity13OctContents.kpi4 >= '3.666666667' && charity13OctContents.kpi4 < '4.4')?'green':(charity13OctContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi5 == null)?'grey-2':(charity13OctContents.kpi5 >= '0' && charity13OctContents.kpi5 <= '1')?'red':(charity13OctContents.kpi5 > '1' && charity13OctContents.kpi5 <= '1.333333333')?'orange':(charity13OctContents.kpi5 > '1.333333333' && charity13OctContents.kpi5 < '1.666666667')?'yellow-7':(charity13OctContents.kpi5 >= '1.666666667' && charity13OctContents.kpi5 < '2')?'green':(charity13OctContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13NovContents.kpi1 == null)?'grey-2':(charity13NovContents.kpi1 >= '0' && charity13NovContents.kpi1 <= '0.8')?'red':(charity13NovContents.kpi1 > '0.8' && charity13NovContents.kpi1 <= '1.066666667')?'orange':(charity13NovContents.kpi1 > '1.066666667' && charity13NovContents.kpi1 < '1.333333333')?'yellow-7':(charity13NovContents.kpi1 >= '1.333333333' && charity13NovContents.kpi1 < '1.6')?'green':(charity13NovContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi2 == null)?'grey-2':(charity13NovContents.kpi2 >= '0' && charity13NovContents.kpi2 <= '1.4')?'red':(charity13NovContents.kpi2 > '1.4' && charity13NovContents.kpi2 <= '1.866666667')?'orange':(charity13NovContents.kpi2 > '1.866666667' && charity13NovContents.kpi2 < '2.333333333')?'yellow-7':(charity13NovContents.kpi2 >= '2.333333333' && charity13NovContents.kpi2 < '2.8')?'green':(charity13NovContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi3 == null)?'grey-2':(charity13NovContents.kpi3 >= '0' && charity13NovContents.kpi3 <= '2')?'red':(charity13NovContents.kpi3 > '2' && charity13NovContents.kpi3 <= '2.666666667')?'orange':(charity13NovContents.kpi3 > '2.666666667' && charity13NovContents.kpi3 < '3.333333333')?'yellow-7':(charity13NovContents.kpi3 >= '3.333333333' && charity13NovContents.kpi3 < '4')?'green':(charity13NovContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi4 == null)?'grey-2':(charity13NovContents.kpi4 >= '0' && charity13NovContents.kpi4 <= '2.2')?'red':(charity13NovContents.kpi4 > '2.2' && charity13NovContents.kpi4 <= '2.933333333')?'orange':(charity13NovContents.kpi4 > '2.933333333' && charity13NovContents.kpi4 < '3.666666667')?'yellow-7':(charity13NovContents.kpi4 >= '3.666666667' && charity13NovContents.kpi4 < '4.4')?'green':(charity13NovContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi5 == null)?'grey-2':(charity13NovContents.kpi5 >= '0' && charity13NovContents.kpi5 <= '1')?'red':(charity13NovContents.kpi5 > '1' && charity13NovContents.kpi5 <= '1.333333333')?'orange':(charity13NovContents.kpi5 > '1.333333333' && charity13NovContents.kpi5 < '1.666666667')?'yellow-7':(charity13NovContents.kpi5 >= '1.666666667' && charity13NovContents.kpi5 < '2')?'green':(charity13NovContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13DecContents.kpi1 == null)?'grey-2':(charity13DecContents.kpi1 >= '0' && charity13DecContents.kpi1 <= '0.8')?'red':(charity13DecContents.kpi1 > '0.8' && charity13DecContents.kpi1 <= '1.066666667')?'orange':(charity13DecContents.kpi1 > '1.066666667' && charity13DecContents.kpi1 < '1.333333333')?'yellow-7':(charity13DecContents.kpi1 >= '1.333333333' && charity13DecContents.kpi1 < '1.6')?'green':(charity13DecContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi2 == null)?'grey-2':(charity13DecContents.kpi2 >= '0' && charity13DecContents.kpi2 <= '1.4')?'red':(charity13DecContents.kpi2 > '1.4' && charity13DecContents.kpi2 <= '1.866666667')?'orange':(charity13DecContents.kpi2 > '1.866666667' && charity13DecContents.kpi2 < '2.333333333')?'yellow-7':(charity13DecContents.kpi2 >= '2.333333333' && charity13DecContents.kpi2 < '2.8')?'green':(charity13DecContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi3 == null)?'grey-2':(charity13DecContents.kpi3 >= '0' && charity13DecContents.kpi3 <= '2')?'red':(charity13DecContents.kpi3 > '2' && charity13DecContents.kpi3 <= '2.666666667')?'orange':(charity13DecContents.kpi3 > '2.666666667' && charity13DecContents.kpi3 < '3.333333333')?'yellow-7':(charity13DecContents.kpi3 >= '3.333333333' && charity13DecContents.kpi3 < '4')?'green':(charity13DecContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi4 == null)?'grey-2':(charity13DecContents.kpi4 >= '0' && charity13DecContents.kpi4 <= '2.2')?'red':(charity13DecContents.kpi4 > '2.2' && charity13DecContents.kpi4 <= '2.933333333')?'orange':(charity13DecContents.kpi4 > '2.933333333' && charity13DecContents.kpi4 < '3.666666667')?'yellow-7':(charity13DecContents.kpi4 >= '3.666666667' && charity13DecContents.kpi4 < '4.4')?'green':(charity13DecContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi5 == null)?'grey-2':(charity13DecContents.kpi5 >= '0' && charity13DecContents.kpi5 <= '1')?'red':(charity13DecContents.kpi5 > '1' && charity13DecContents.kpi5 <= '1.333333333')?'orange':(charity13DecContents.kpi5 > '1.333333333' && charity13DecContents.kpi5 < '1.666666667')?'yellow-7':(charity13DecContents.kpi5 >= '1.666666667' && charity13DecContents.kpi5 < '2')?'green':(charity13DecContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JanContents.kpi1 == null)?'grey-2':(charity13JanContents.kpi1 >= '0' && charity13JanContents.kpi1 <= '0.8')?'red':(charity13JanContents.kpi1 > '0.8' && charity13JanContents.kpi1 <= '1.066666667')?'orange':(charity13JanContents.kpi1 > '1.066666667' && charity13JanContents.kpi1 < '1.333333333')?'yellow-7':(charity13JanContents.kpi1 >= '1.333333333' && charity13JanContents.kpi1 < '1.6')?'green':(charity13JanContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi2 == null)?'grey-2':(charity13JanContents.kpi2 >= '0' && charity13JanContents.kpi2 <= '1.4')?'red':(charity13JanContents.kpi2 > '1.4' && charity13JanContents.kpi2 <= '1.866666667')?'orange':(charity13JanContents.kpi2 > '1.866666667' && charity13JanContents.kpi2 < '2.333333333')?'yellow-7':(charity13JanContents.kpi2 >= '2.333333333' && charity13JanContents.kpi2 < '2.8')?'green':(charity13JanContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi3 == null)?'grey-2':(charity13JanContents.kpi3 >= '0' && charity13JanContents.kpi3 <= '2')?'red':(charity13JanContents.kpi3 > '2' && charity13JanContents.kpi3 <= '2.666666667')?'orange':(charity13JanContents.kpi3 > '2.666666667' && charity13JanContents.kpi3 < '3.333333333')?'yellow-7':(charity13JanContents.kpi3 >= '3.333333333' && charity13JanContents.kpi3 < '4')?'green':(charity13JanContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi4 == null)?'grey-2':(charity13JanContents.kpi4 >= '0' && charity13JanContents.kpi4 <= '2.2')?'red':(charity13JanContents.kpi4 > '2.2' && charity13JanContents.kpi4 <= '2.933333333')?'orange':(charity13JanContents.kpi4 > '2.933333333' && charity13JanContents.kpi4 < '3.666666667')?'yellow-7':(charity13JanContents.kpi4 >= '3.666666667' && charity13JanContents.kpi4 < '4.4')?'green':(charity13JanContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi5 == null)?'grey-2':(charity13JanContents.kpi5 >= '0' && charity13JanContents.kpi5 <= '1')?'red':(charity13JanContents.kpi5 > '1' && charity13JanContents.kpi5 <= '1.333333333')?'orange':(charity13JanContents.kpi5 > '1.333333333' && charity13JanContents.kpi5 < '1.666666667')?'yellow-7':(charity13JanContents.kpi5 >= '1.666666667' && charity13JanContents.kpi5 < '2')?'green':(charity13JanContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13FebContents.kpi1 == null)?'grey-2':(charity13FebContents.kpi1 >= '0' && charity13FebContents.kpi1 <= '0.8')?'red':(charity13FebContents.kpi1 > '0.8' && charity13FebContents.kpi1 <= '1.066666667')?'orange':(charity13FebContents.kpi1 > '1.066666667' && charity13FebContents.kpi1 < '1.333333333')?'yellow-7':(charity13FebContents.kpi1 >= '1.333333333' && charity13FebContents.kpi1 < '1.6')?'green':(charity13FebContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi2 == null)?'grey-2':(charity13FebContents.kpi2 >= '0' && charity13FebContents.kpi2 <= '1.4')?'red':(charity13FebContents.kpi2 > '1.4' && charity13FebContents.kpi2 <= '1.866666667')?'orange':(charity13FebContents.kpi2 > '1.866666667' && charity13FebContents.kpi2 < '2.333333333')?'yellow-7':(charity13FebContents.kpi2 >= '2.333333333' && charity13FebContents.kpi2 < '2.8')?'green':(charity13FebContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi3 == null)?'grey-2':(charity13FebContents.kpi3 >= '0' && charity13FebContents.kpi3 <= '2')?'red':(charity13FebContents.kpi3 > '2' && charity13FebContents.kpi3 <= '2.666666667')?'orange':(charity13FebContents.kpi3 > '2.666666667' && charity13FebContents.kpi3 < '3.333333333')?'yellow-7':(charity13FebContents.kpi3 >= '3.333333333' && charity13FebContents.kpi3 < '4')?'green':(charity13FebContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi4 == null)?'grey-2':(charity13FebContents.kpi4 >= '0' && charity13FebContents.kpi4 <= '2.2')?'red':(charity13FebContents.kpi4 > '2.2' && charity13FebContents.kpi4 <= '2.933333333')?'orange':(charity13FebContents.kpi4 > '2.933333333' && charity13FebContents.kpi4 < '3.666666667')?'yellow-7':(charity13FebContents.kpi4 >= '3.666666667' && charity13FebContents.kpi4 < '4.4')?'green':(charity13FebContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi5 == null)?'grey-2':(charity13FebContents.kpi5 >= '0' && charity13FebContents.kpi5 <= '1')?'red':(charity13FebContents.kpi5 > '1' && charity13FebContents.kpi5 <= '1.333333333')?'orange':(charity13FebContents.kpi5 > '1.333333333' && charity13FebContents.kpi5 < '1.666666667')?'yellow-7':(charity13FebContents.kpi5 >= '1.666666667' && charity13FebContents.kpi5 < '2')?'green':(charity13FebContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MarContents.kpi1 == null)?'grey-2':(charity13MarContents.kpi1 >= '0' && charity13MarContents.kpi1 <= '0.8')?'red':(charity13MarContents.kpi1 > '0.8' && charity13MarContents.kpi1 <= '1.066666667')?'orange':(charity13MarContents.kpi1 > '1.066666667' && charity13MarContents.kpi1 < '1.333333333')?'yellow-7':(charity13MarContents.kpi1 >= '1.333333333' && charity13MarContents.kpi1 < '1.6')?'green':(charity13MarContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi2 == null)?'grey-2':(charity13MarContents.kpi2 >= '0' && charity13MarContents.kpi2 <= '1.4')?'red':(charity13MarContents.kpi2 > '1.4' && charity13MarContents.kpi2 <= '1.866666667')?'orange':(charity13MarContents.kpi2 > '1.866666667' && charity13MarContents.kpi2 < '2.333333333')?'yellow-7':(charity13MarContents.kpi2 >= '2.333333333' && charity13MarContents.kpi2 < '2.8')?'green':(charity13MarContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi3 == null)?'grey-2':(charity13MarContents.kpi3 >= '0' && charity13MarContents.kpi3 <= '2')?'red':(charity13MarContents.kpi3 > '2' && charity13MarContents.kpi3 <= '2.666666667')?'orange':(charity13MarContents.kpi3 > '2.666666667' && charity13MarContents.kpi3 < '3.333333333')?'yellow-7':(charity13MarContents.kpi3 >= '3.333333333' && charity13MarContents.kpi3 < '4')?'green':(charity13MarContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi4 == null)?'grey-2':(charity13MarContents.kpi4 >= '0' && charity13MarContents.kpi4 <= '2.2')?'red':(charity13MarContents.kpi4 > '2.2' && charity13MarContents.kpi4 <= '2.933333333')?'orange':(charity13MarContents.kpi4 > '2.933333333' && charity13MarContents.kpi4 < '3.666666667')?'yellow-7':(charity13MarContents.kpi4 >= '3.666666667' && charity13MarContents.kpi4 < '4.4')?'green':(charity13MarContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi5 == null)?'grey-2':(charity13MarContents.kpi5 >= '0' && charity13MarContents.kpi5 <= '1')?'red':(charity13MarContents.kpi5 > '1' && charity13MarContents.kpi5 <= '1.333333333')?'orange':(charity13MarContents.kpi5 > '1.333333333' && charity13MarContents.kpi5 < '1.666666667')?'yellow-7':(charity13MarContents.kpi5 >= '1.666666667' && charity13MarContents.kpi5 < '2')?'green':(charity13MarContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AprContents.kpi1 == null)?'grey-2':(charity13AprContents.kpi1 >= '0' && charity13AprContents.kpi1 <= '0.8')?'red':(charity13AprContents.kpi1 > '0.8' && charity13AprContents.kpi1 <= '1.066666667')?'orange':(charity13AprContents.kpi1 > '1.066666667' && charity13AprContents.kpi1 < '1.333333333')?'yellow-7':(charity13AprContents.kpi1 >= '1.333333333' && charity13AprContents.kpi1 < '1.6')?'green':(charity13AprContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi2 == null)?'grey-2':(charity13AprContents.kpi2 >= '0' && charity13AprContents.kpi2 <= '1.4')?'red':(charity13AprContents.kpi2 > '1.4' && charity13AprContents.kpi2 <= '1.866666667')?'orange':(charity13AprContents.kpi2 > '1.866666667' && charity13AprContents.kpi2 < '2.333333333')?'yellow-7':(charity13AprContents.kpi2 >= '2.333333333' && charity13AprContents.kpi2 < '2.8')?'green':(charity13AprContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi3 == null)?'grey-2':(charity13AprContents.kpi3 >= '0' && charity13AprContents.kpi3 <= '2')?'red':(charity13AprContents.kpi3 > '2' && charity13AprContents.kpi3 <= '2.666666667')?'orange':(charity13AprContents.kpi3 > '2.666666667' && charity13AprContents.kpi3 < '3.333333333')?'yellow-7':(charity13AprContents.kpi3 >= '3.333333333' && charity13AprContents.kpi3 < '4')?'green':(charity13AprContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi4 == null)?'grey-2':(charity13AprContents.kpi4 >= '0' && charity13AprContents.kpi4 <= '2.2')?'red':(charity13AprContents.kpi4 > '2.2' && charity13AprContents.kpi4 <= '2.933333333')?'orange':(charity13AprContents.kpi4 > '2.933333333' && charity13AprContents.kpi4 < '3.666666667')?'yellow-7':(charity13AprContents.kpi4 >= '3.666666667' && charity13AprContents.kpi4 < '4.4')?'green':(charity13AprContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi5 == null)?'grey-2':(charity13AprContents.kpi5 >= '0' && charity13AprContents.kpi5 <= '1')?'red':(charity13AprContents.kpi5 > '1' && charity13AprContents.kpi5 <= '1.333333333')?'orange':(charity13AprContents.kpi5 > '1.333333333' && charity13AprContents.kpi5 < '1.666666667')?'yellow-7':(charity13AprContents.kpi5 >= '1.666666667' && charity13AprContents.kpi5 < '2')?'green':(charity13AprContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MayContents.kpi1 == null)?'grey-2':(charity13MayContents.kpi1 >= '0' && charity13MayContents.kpi1 <= '0.8')?'red':(charity13MayContents.kpi1 > '0.8' && charity13MayContents.kpi1 <= '1.066666667')?'orange':(charity13MayContents.kpi1 > '1.066666667' && charity13MayContents.kpi1 < '1.333333333')?'yellow-7':(charity13MayContents.kpi1 >= '1.333333333' && charity13MayContents.kpi1 < '1.6')?'green':(charity13MayContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi2 == null)?'grey-2':(charity13MayContents.kpi2 >= '0' && charity13MayContents.kpi2 <= '1.4')?'red':(charity13MayContents.kpi2 > '1.4' && charity13MayContents.kpi2 <= '1.866666667')?'orange':(charity13MayContents.kpi2 > '1.866666667' && charity13MayContents.kpi2 < '2.333333333')?'yellow-7':(charity13MayContents.kpi2 >= '2.333333333' && charity13MayContents.kpi2 < '2.8')?'green':(charity13MayContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi3 == null)?'grey-2':(charity13MayContents.kpi3 >= '0' && charity13MayContents.kpi3 <= '2')?'red':(charity13MayContents.kpi3 > '2' && charity13MayContents.kpi3 <= '2.666666667')?'orange':(charity13MayContents.kpi3 > '2.666666667' && charity13MayContents.kpi3 < '3.333333333')?'yellow-7':(charity13MayContents.kpi3 >= '3.333333333' && charity13MayContents.kpi3 < '4')?'green':(charity13MayContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi4 == null)?'grey-2':(charity13MayContents.kpi4 >= '0' && charity13MayContents.kpi4 <= '2.2')?'red':(charity13MayContents.kpi4 > '2.2' && charity13MayContents.kpi4 <= '2.933333333')?'orange':(charity13MayContents.kpi4 > '2.933333333' && charity13MayContents.kpi4 < '3.666666667')?'yellow-7':(charity13MayContents.kpi4 >= '3.666666667' && charity13MayContents.kpi4 < '4.4')?'green':(charity13MayContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi5 == null)?'grey-2':(charity13MayContents.kpi5 >= '0' && charity13MayContents.kpi5 <= '1')?'red':(charity13MayContents.kpi5 > '1' && charity13MayContents.kpi5 <= '1.333333333')?'orange':(charity13MayContents.kpi5 > '1.333333333' && charity13MayContents.kpi5 < '1.666666667')?'yellow-7':(charity13MayContents.kpi5 >= '1.666666667' && charity13MayContents.kpi5 < '2')?'green':(charity13MayContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JunContents.kpi1 == null)?'grey-2':(charity13JunContents.kpi1 >= '0' && charity13JunContents.kpi1 <= '0.8')?'red':(charity13JunContents.kpi1 > '0.8' && charity13JunContents.kpi1 <= '1.066666667')?'orange':(charity13JunContents.kpi1 > '1.066666667' && charity13JunContents.kpi1 < '1.333333333')?'yellow-7':(charity13JunContents.kpi1 >= '1.333333333' && charity13JunContents.kpi1 < '1.6')?'green':(charity13JunContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi2 == null)?'grey-2':(charity13JunContents.kpi2 >= '0' && charity13JunContents.kpi2 <= '1.4')?'red':(charity13JunContents.kpi2 > '1.4' && charity13JunContents.kpi2 <= '1.866666667')?'orange':(charity13JunContents.kpi2 > '1.866666667' && charity13JunContents.kpi2 < '2.333333333')?'yellow-7':(charity13JunContents.kpi2 >= '2.333333333' && charity13JunContents.kpi2 < '2.8')?'green':(charity13JunContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi3 == null)?'grey-2':(charity13JunContents.kpi3 >= '0' && charity13JunContents.kpi3 <= '2')?'red':(charity13JunContents.kpi3 > '2' && charity13JunContents.kpi3 <= '2.666666667')?'orange':(charity13JunContents.kpi3 > '2.666666667' && charity13JunContents.kpi3 < '3.333333333')?'yellow-7':(charity13JunContents.kpi3 >= '3.333333333' && charity13JunContents.kpi3 < '4')?'green':(charity13JunContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi4 == null)?'grey-2':(charity13JunContents.kpi4 >= '0' && charity13JunContents.kpi4 <= '2.2')?'red':(charity13JunContents.kpi4 > '2.2' && charity13JunContents.kpi4 <= '2.933333333')?'orange':(charity13JunContents.kpi4 > '2.933333333' && charity13JunContents.kpi4 < '3.666666667')?'yellow-7':(charity13JunContents.kpi4 >= '3.666666667' && charity13JunContents.kpi4 < '4.4')?'green':(charity13JunContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi5 == null)?'grey-2':(charity13JunContents.kpi5 >= '0' && charity13JunContents.kpi5 <= '1')?'red':(charity13JunContents.kpi5 > '1' && charity13JunContents.kpi5 <= '1.333333333')?'orange':(charity13JunContents.kpi5 > '1.333333333' && charity13JunContents.kpi5 < '1.666666667')?'yellow-7':(charity13JunContents.kpi5 >= '1.666666667' && charity13JunContents.kpi5 < '2')?'green':(charity13JunContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JulContents.kpi1 == null)?'grey-2':(charity13JulContents.kpi1 >= '0' && charity13JulContents.kpi1 <= '0.8')?'red':(charity13JulContents.kpi1 > '0.8' && charity13JulContents.kpi1 <= '1.066666667')?'orange':(charity13JulContents.kpi1 > '1.066666667' && charity13JulContents.kpi1 < '1.333333333')?'yellow-7':(charity13JulContents.kpi1 >= '1.333333333' && charity13JulContents.kpi1 < '1.6')?'green':(charity13JulContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi2 == null)?'grey-2':(charity13JulContents.kpi2 >= '0' && charity13JulContents.kpi2 <= '1.4')?'red':(charity13JulContents.kpi2 > '1.4' && charity13JulContents.kpi2 <= '1.866666667')?'orange':(charity13JulContents.kpi2 > '1.866666667' && charity13JulContents.kpi2 < '2.333333333')?'yellow-7':(charity13JulContents.kpi2 >= '2.333333333' && charity13JulContents.kpi2 < '2.8')?'green':(charity13JulContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi3 == null)?'grey-2':(charity13JulContents.kpi3 >= '0' && charity13JulContents.kpi3 <= '2')?'red':(charity13JulContents.kpi3 > '2' && charity13JulContents.kpi3 <= '2.666666667')?'orange':(charity13JulContents.kpi3 > '2.666666667' && charity13JulContents.kpi3 < '3.333333333')?'yellow-7':(charity13JulContents.kpi3 >= '3.333333333' && charity13JulContents.kpi3 < '4')?'green':(charity13JulContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi4 == null)?'grey-2':(charity13JulContents.kpi4 >= '0' && charity13JulContents.kpi4 <= '2.2')?'red':(charity13JulContents.kpi4 > '2.2' && charity13JulContents.kpi4 <= '2.933333333')?'orange':(charity13JulContents.kpi4 > '2.933333333' && charity13JulContents.kpi4 < '3.666666667')?'yellow-7':(charity13JulContents.kpi4 >= '3.666666667' && charity13JulContents.kpi4 < '4.4')?'green':(charity13JulContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi5 == null)?'grey-2':(charity13JulContents.kpi5 >= '0' && charity13JulContents.kpi5 <= '1')?'red':(charity13JulContents.kpi5 > '1' && charity13JulContents.kpi5 <= '1.333333333')?'orange':(charity13JulContents.kpi5 > '1.333333333' && charity13JulContents.kpi5 < '1.666666667')?'yellow-7':(charity13JulContents.kpi5 >= '1.666666667' && charity13JulContents.kpi5 < '2')?'green':(charity13JulContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AugContents.kpi1 == null)?'grey-2':(charity13AugContents.kpi1 >= '0' && charity13AugContents.kpi1 <= '0.8')?'red':(charity13AugContents.kpi1 > '0.8' && charity13AugContents.kpi1 <= '1.066666667')?'orange':(charity13AugContents.kpi1 > '1.066666667' && charity13AugContents.kpi1 < '1.333333333')?'yellow-7':(charity13AugContents.kpi1 >= '1.333333333' && charity13AugContents.kpi1 < '1.6')?'green':(charity13AugContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi2 == null)?'grey-2':(charity13AugContents.kpi2 >= '0' && charity13AugContents.kpi2 <= '1.4')?'red':(charity13AugContents.kpi2 > '1.4' && charity13AugContents.kpi2 <= '1.866666667')?'orange':(charity13AugContents.kpi2 > '1.866666667' && charity13AugContents.kpi2 < '2.333333333')?'yellow-7':(charity13AugContents.kpi2 >= '2.333333333' && charity13AugContents.kpi2 < '2.8')?'green':(charity13AugContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi3 == null)?'grey-2':(charity13AugContents.kpi3 >= '0' && charity13AugContents.kpi3 <= '2')?'red':(charity13AugContents.kpi3 > '2' && charity13AugContents.kpi3 <= '2.666666667')?'orange':(charity13AugContents.kpi3 > '2.666666667' && charity13AugContents.kpi3 < '3.333333333')?'yellow-7':(charity13AugContents.kpi3 >= '3.333333333' && charity13AugContents.kpi3 < '4')?'green':(charity13AugContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi4 == null)?'grey-2':(charity13AugContents.kpi4 >= '0' && charity13AugContents.kpi4 <= '2.2')?'red':(charity13AugContents.kpi4 > '2.2' && charity13AugContents.kpi4 <= '2.933333333')?'orange':(charity13AugContents.kpi4 > '2.933333333' && charity13AugContents.kpi4 < '3.666666667')?'yellow-7':(charity13AugContents.kpi4 >= '3.666666667' && charity13AugContents.kpi4 < '4.4')?'green':(charity13AugContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi5 == null)?'grey-2':(charity13AugContents.kpi5 >= '0' && charity13AugContents.kpi5 <= '1')?'red':(charity13AugContents.kpi5 > '1' && charity13AugContents.kpi5 <= '1.333333333')?'orange':(charity13AugContents.kpi5 > '1.333333333' && charity13AugContents.kpi5 < '1.666666667')?'yellow-7':(charity13AugContents.kpi5 >= '1.666666667' && charity13AugContents.kpi5 < '2')?'green':(charity13AugContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13SepContents.kpi1 == null)?'grey-2':(charity13SepContents.kpi1 >= '0' && charity13SepContents.kpi1 <= '0.8')?'red':(charity13SepContents.kpi1 > '0.8' && charity13SepContents.kpi1 <= '1.066666667')?'orange':(charity13SepContents.kpi1 > '1.066666667' && charity13SepContents.kpi1 < '1.333333333')?'yellow-7':(charity13SepContents.kpi1 >= '1.333333333' && charity13SepContents.kpi1 < '1.6')?'green':(charity13SepContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi2 == null)?'grey-2':(charity13SepContents.kpi2 >= '0' && charity13SepContents.kpi2 <= '1.4')?'red':(charity13SepContents.kpi2 > '1.4' && charity13SepContents.kpi2 <= '1.866666667')?'orange':(charity13SepContents.kpi2 > '1.866666667' && charity13SepContents.kpi2 < '2.333333333')?'yellow-7':(charity13SepContents.kpi2 >= '2.333333333' && charity13SepContents.kpi2 < '2.8')?'green':(charity13SepContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi3 == null)?'grey-2':(charity13SepContents.kpi3 >= '0' && charity13SepContents.kpi3 <= '2')?'red':(charity13SepContents.kpi3 > '2' && charity13SepContents.kpi3 <= '2.666666667')?'orange':(charity13SepContents.kpi3 > '2.666666667' && charity13SepContents.kpi3 < '3.333333333')?'yellow-7':(charity13SepContents.kpi3 >= '3.333333333' && charity13SepContents.kpi3 < '4')?'green':(charity13SepContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi4 == null)?'grey-2':(charity13SepContents.kpi4 >= '0' && charity13SepContents.kpi4 <= '2.2')?'red':(charity13SepContents.kpi4 > '2.2' && charity13SepContents.kpi4 <= '2.933333333')?'orange':(charity13SepContents.kpi4 > '2.933333333' && charity13SepContents.kpi4 < '3.666666667')?'yellow-7':(charity13SepContents.kpi4 >= '3.666666667' && charity13SepContents.kpi4 < '4.4')?'green':(charity13SepContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi5 == null)?'grey-2':(charity13SepContents.kpi5 >= '0' && charity13SepContents.kpi5 <= '1')?'red':(charity13SepContents.kpi5 > '1' && charity13SepContents.kpi5 <= '1.333333333')?'orange':(charity13SepContents.kpi5 > '1.333333333' && charity13SepContents.kpi5 < '1.666666667')?'yellow-7':(charity13SepContents.kpi5 >= '1.666666667' && charity13SepContents.kpi5 < '2')?'green':(charity13SepContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13OctContents.kpi1 == null)?'grey-2':(charity13OctContents.kpi1 >= '0' && charity13OctContents.kpi1 <= '0.8')?'red':(charity13OctContents.kpi1 > '0.8' && charity13OctContents.kpi1 <= '1.066666667')?'orange':(charity13OctContents.kpi1 > '1.066666667' && charity13OctContents.kpi1 < '1.333333333')?'yellow-7':(charity13OctContents.kpi1 >= '1.333333333' && charity13OctContents.kpi1 < '1.6')?'green':(charity13OctContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi2 == null)?'grey-2':(charity13OctContents.kpi2 >= '0' && charity13OctContents.kpi2 <= '1.4')?'red':(charity13OctContents.kpi2 > '1.4' && charity13OctContents.kpi2 <= '1.866666667')?'orange':(charity13OctContents.kpi2 > '1.866666667' && charity13OctContents.kpi2 < '2.333333333')?'yellow-7':(charity13OctContents.kpi2 >= '2.333333333' && charity13OctContents.kpi2 < '2.8')?'green':(charity13OctContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi3 == null)?'grey-2':(charity13OctContents.kpi3 >= '0' && charity13OctContents.kpi3 <= '2')?'red':(charity13OctContents.kpi3 > '2' && charity13OctContents.kpi3 <= '2.666666667')?'orange':(charity13OctContents.kpi3 > '2.666666667' && charity13OctContents.kpi3 < '3.333333333')?'yellow-7':(charity13OctContents.kpi3 >= '3.333333333' && charity13OctContents.kpi3 < '4')?'green':(charity13OctContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi4 == null)?'grey-2':(charity13OctContents.kpi4 >= '0' && charity13OctContents.kpi4 <= '2.2')?'red':(charity13OctContents.kpi4 > '2.2' && charity13OctContents.kpi4 <= '2.933333333')?'orange':(charity13OctContents.kpi4 > '2.933333333' && charity13OctContents.kpi4 < '3.666666667')?'yellow-7':(charity13OctContents.kpi4 >= '3.666666667' && charity13OctContents.kpi4 < '4.4')?'green':(charity13OctContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi5 == null)?'grey-2':(charity13OctContents.kpi5 >= '0' && charity13OctContents.kpi5 <= '1')?'red':(charity13OctContents.kpi5 > '1' && charity13OctContents.kpi5 <= '1.333333333')?'orange':(charity13OctContents.kpi5 > '1.333333333' && charity13OctContents.kpi5 < '1.666666667')?'yellow-7':(charity13OctContents.kpi5 >= '1.666666667' && charity13OctContents.kpi5 < '2')?'green':(charity13OctContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13NovContents.kpi1 == null)?'grey-2':(charity13NovContents.kpi1 >= '0' && charity13NovContents.kpi1 <= '0.8')?'red':(charity13NovContents.kpi1 > '0.8' && charity13NovContents.kpi1 <= '1.066666667')?'orange':(charity13NovContents.kpi1 > '1.066666667' && charity13NovContents.kpi1 < '1.333333333')?'yellow-7':(charity13NovContents.kpi1 >= '1.333333333' && charity13NovContents.kpi1 < '1.6')?'green':(charity13NovContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi2 == null)?'grey-2':(charity13NovContents.kpi2 >= '0' && charity13NovContents.kpi2 <= '1.4')?'red':(charity13NovContents.kpi2 > '1.4' && charity13NovContents.kpi2 <= '1.866666667')?'orange':(charity13NovContents.kpi2 > '1.866666667' && charity13NovContents.kpi2 < '2.333333333')?'yellow-7':(charity13NovContents.kpi2 >= '2.333333333' && charity13NovContents.kpi2 < '2.8')?'green':(charity13NovContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi3 == null)?'grey-2':(charity13NovContents.kpi3 >= '0' && charity13NovContents.kpi3 <= '2')?'red':(charity13NovContents.kpi3 > '2' && charity13NovContents.kpi3 <= '2.666666667')?'orange':(charity13NovContents.kpi3 > '2.666666667' && charity13NovContents.kpi3 < '3.333333333')?'yellow-7':(charity13NovContents.kpi3 >= '3.333333333' && charity13NovContents.kpi3 < '4')?'green':(charity13NovContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi4 == null)?'grey-2':(charity13NovContents.kpi4 >= '0' && charity13NovContents.kpi4 <= '2.2')?'red':(charity13NovContents.kpi4 > '2.2' && charity13NovContents.kpi4 <= '2.933333333')?'orange':(charity13NovContents.kpi4 > '2.933333333' && charity13NovContents.kpi4 < '3.666666667')?'yellow-7':(charity13NovContents.kpi4 >= '3.666666667' && charity13NovContents.kpi4 < '4.4')?'green':(charity13NovContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi5 == null)?'grey-2':(charity13NovContents.kpi5 >= '0' && charity13NovContents.kpi5 <= '1')?'red':(charity13NovContents.kpi5 > '1' && charity13NovContents.kpi5 <= '1.333333333')?'orange':(charity13NovContents.kpi5 > '1.333333333' && charity13NovContents.kpi5 < '1.666666667')?'yellow-7':(charity13NovContents.kpi5 >= '1.666666667' && charity13NovContents.kpi5 < '2')?'green':(charity13NovContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13DecContents.kpi1 == null)?'grey-2':(charity13DecContents.kpi1 >= '0' && charity13DecContents.kpi1 <= '0.8')?'red':(charity13DecContents.kpi1 > '0.8' && charity13DecContents.kpi1 <= '1.066666667')?'orange':(charity13DecContents.kpi1 > '1.066666667' && charity13DecContents.kpi1 < '1.333333333')?'yellow-7':(charity13DecContents.kpi1 >= '1.333333333' && charity13DecContents.kpi1 < '1.6')?'green':(charity13DecContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi2 == null)?'grey-2':(charity13DecContents.kpi2 >= '0' && charity13DecContents.kpi2 <= '1.4')?'red':(charity13DecContents.kpi2 > '1.4' && charity13DecContents.kpi2 <= '1.866666667')?'orange':(charity13DecContents.kpi2 > '1.866666667' && charity13DecContents.kpi2 < '2.333333333')?'yellow-7':(charity13DecContents.kpi2 >= '2.333333333' && charity13DecContents.kpi2 < '2.8')?'green':(charity13DecContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi3 == null)?'grey-2':(charity13DecContents.kpi3 >= '0' && charity13DecContents.kpi3 <= '2')?'red':(charity13DecContents.kpi3 > '2' && charity13DecContents.kpi3 <= '2.666666667')?'orange':(charity13DecContents.kpi3 > '2.666666667' && charity13DecContents.kpi3 < '3.333333333')?'yellow-7':(charity13DecContents.kpi3 >= '3.333333333' && charity13DecContents.kpi3 < '4')?'green':(charity13DecContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi4 == null)?'grey-2':(charity13DecContents.kpi4 >= '0' && charity13DecContents.kpi4 <= '2.2')?'red':(charity13DecContents.kpi4 > '2.2' && charity13DecContents.kpi4 <= '2.933333333')?'orange':(charity13DecContents.kpi4 > '2.933333333' && charity13DecContents.kpi4 < '3.666666667')?'yellow-7':(charity13DecContents.kpi4 >= '3.666666667' && charity13DecContents.kpi4 < '4.4')?'green':(charity13DecContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi5 == null)?'grey-2':(charity13DecContents.kpi5 >= '0' && charity13DecContents.kpi5 <= '1')?'red':(charity13DecContents.kpi5 > '1' && charity13DecContents.kpi5 <= '1.333333333')?'orange':(charity13DecContents.kpi5 > '1.333333333' && charity13DecContents.kpi5 < '1.666666667')?'yellow-7':(charity13DecContents.kpi5 >= '1.666666667' && charity13DecContents.kpi5 < '2')?'green':(charity13DecContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JanContents.kpi1 == null)?'grey-2':(charity13JanContents.kpi1 >= '0' && charity13JanContents.kpi1 <= '0.8')?'red':(charity13JanContents.kpi1 > '0.8' && charity13JanContents.kpi1 <= '1.066666667')?'orange':(charity13JanContents.kpi1 > '1.066666667' && charity13JanContents.kpi1 < '1.333333333')?'yellow-7':(charity13JanContents.kpi1 >= '1.333333333' && charity13JanContents.kpi1 < '1.6')?'green':(charity13JanContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi2 == null)?'grey-2':(charity13JanContents.kpi2 >= '0' && charity13JanContents.kpi2 <= '1.4')?'red':(charity13JanContents.kpi2 > '1.4' && charity13JanContents.kpi2 <= '1.866666667')?'orange':(charity13JanContents.kpi2 > '1.866666667' && charity13JanContents.kpi2 < '2.333333333')?'yellow-7':(charity13JanContents.kpi2 >= '2.333333333' && charity13JanContents.kpi2 < '2.8')?'green':(charity13JanContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi3 == null)?'grey-2':(charity13JanContents.kpi3 >= '0' && charity13JanContents.kpi3 <= '2')?'red':(charity13JanContents.kpi3 > '2' && charity13JanContents.kpi3 <= '2.666666667')?'orange':(charity13JanContents.kpi3 > '2.666666667' && charity13JanContents.kpi3 < '3.333333333')?'yellow-7':(charity13JanContents.kpi3 >= '3.333333333' && charity13JanContents.kpi3 < '4')?'green':(charity13JanContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi4 == null)?'grey-2':(charity13JanContents.kpi4 >= '0' && charity13JanContents.kpi4 <= '2.2')?'red':(charity13JanContents.kpi4 > '2.2' && charity13JanContents.kpi4 <= '2.933333333')?'orange':(charity13JanContents.kpi4 > '2.933333333' && charity13JanContents.kpi4 < '3.666666667')?'yellow-7':(charity13JanContents.kpi4 >= '3.666666667' && charity13JanContents.kpi4 < '4.4')?'green':(charity13JanContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi5 == null)?'grey-2':(charity13JanContents.kpi5 >= '0' && charity13JanContents.kpi5 <= '1')?'red':(charity13JanContents.kpi5 > '1' && charity13JanContents.kpi5 <= '1.333333333')?'orange':(charity13JanContents.kpi5 > '1.333333333' && charity13JanContents.kpi5 < '1.666666667')?'yellow-7':(charity13JanContents.kpi5 >= '1.666666667' && charity13JanContents.kpi5 < '2')?'green':(charity13JanContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13FebContents.kpi1 == null)?'grey-2':(charity13FebContents.kpi1 >= '0' && charity13FebContents.kpi1 <= '0.8')?'red':(charity13FebContents.kpi1 > '0.8' && charity13FebContents.kpi1 <= '1.066666667')?'orange':(charity13FebContents.kpi1 > '1.066666667' && charity13FebContents.kpi1 < '1.333333333')?'yellow-7':(charity13FebContents.kpi1 >= '1.333333333' && charity13FebContents.kpi1 < '1.6')?'green':(charity13FebContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi2 == null)?'grey-2':(charity13FebContents.kpi2 >= '0' && charity13FebContents.kpi2 <= '1.4')?'red':(charity13FebContents.kpi2 > '1.4' && charity13FebContents.kpi2 <= '1.866666667')?'orange':(charity13FebContents.kpi2 > '1.866666667' && charity13FebContents.kpi2 < '2.333333333')?'yellow-7':(charity13FebContents.kpi2 >= '2.333333333' && charity13FebContents.kpi2 < '2.8')?'green':(charity13FebContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi3 == null)?'grey-2':(charity13FebContents.kpi3 >= '0' && charity13FebContents.kpi3 <= '2')?'red':(charity13FebContents.kpi3 > '2' && charity13FebContents.kpi3 <= '2.666666667')?'orange':(charity13FebContents.kpi3 > '2.666666667' && charity13FebContents.kpi3 < '3.333333333')?'yellow-7':(charity13FebContents.kpi3 >= '3.333333333' && charity13FebContents.kpi3 < '4')?'green':(charity13FebContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi4 == null)?'grey-2':(charity13FebContents.kpi4 >= '0' && charity13FebContents.kpi4 <= '2.2')?'red':(charity13FebContents.kpi4 > '2.2' && charity13FebContents.kpi4 <= '2.933333333')?'orange':(charity13FebContents.kpi4 > '2.933333333' && charity13FebContents.kpi4 < '3.666666667')?'yellow-7':(charity13FebContents.kpi4 >= '3.666666667' && charity13FebContents.kpi4 < '4.4')?'green':(charity13FebContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi5 == null)?'grey-2':(charity13FebContents.kpi5 >= '0' && charity13FebContents.kpi5 <= '1')?'red':(charity13FebContents.kpi5 > '1' && charity13FebContents.kpi5 <= '1.333333333')?'orange':(charity13FebContents.kpi5 > '1.333333333' && charity13FebContents.kpi5 < '1.666666667')?'yellow-7':(charity13FebContents.kpi5 >= '1.666666667' && charity13FebContents.kpi5 < '2')?'green':(charity13FebContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MarContents.kpi1 == null)?'grey-2':(charity13MarContents.kpi1 >= '0' && charity13MarContents.kpi1 <= '0.8')?'red':(charity13MarContents.kpi1 > '0.8' && charity13MarContents.kpi1 <= '1.066666667')?'orange':(charity13MarContents.kpi1 > '1.066666667' && charity13MarContents.kpi1 < '1.333333333')?'yellow-7':(charity13MarContents.kpi1 >= '1.333333333' && charity13MarContents.kpi1 < '1.6')?'green':(charity13MarContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi2 == null)?'grey-2':(charity13MarContents.kpi2 >= '0' && charity13MarContents.kpi2 <= '1.4')?'red':(charity13MarContents.kpi2 > '1.4' && charity13MarContents.kpi2 <= '1.866666667')?'orange':(charity13MarContents.kpi2 > '1.866666667' && charity13MarContents.kpi2 < '2.333333333')?'yellow-7':(charity13MarContents.kpi2 >= '2.333333333' && charity13MarContents.kpi2 < '2.8')?'green':(charity13MarContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi3 == null)?'grey-2':(charity13MarContents.kpi3 >= '0' && charity13MarContents.kpi3 <= '2')?'red':(charity13MarContents.kpi3 > '2' && charity13MarContents.kpi3 <= '2.666666667')?'orange':(charity13MarContents.kpi3 > '2.666666667' && charity13MarContents.kpi3 < '3.333333333')?'yellow-7':(charity13MarContents.kpi3 >= '3.333333333' && charity13MarContents.kpi3 < '4')?'green':(charity13MarContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi4 == null)?'grey-2':(charity13MarContents.kpi4 >= '0' && charity13MarContents.kpi4 <= '2.2')?'red':(charity13MarContents.kpi4 > '2.2' && charity13MarContents.kpi4 <= '2.933333333')?'orange':(charity13MarContents.kpi4 > '2.933333333' && charity13MarContents.kpi4 < '3.666666667')?'yellow-7':(charity13MarContents.kpi4 >= '3.666666667' && charity13MarContents.kpi4 < '4.4')?'green':(charity13MarContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi5 == null)?'grey-2':(charity13MarContents.kpi5 >= '0' && charity13MarContents.kpi5 <= '1')?'red':(charity13MarContents.kpi5 > '1' && charity13MarContents.kpi5 <= '1.333333333')?'orange':(charity13MarContents.kpi5 > '1.333333333' && charity13MarContents.kpi5 < '1.666666667')?'yellow-7':(charity13MarContents.kpi5 >= '1.666666667' && charity13MarContents.kpi5 < '2')?'green':(charity13MarContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AprContents.kpi1 == null)?'grey-2':(charity13AprContents.kpi1 >= '0' && charity13AprContents.kpi1 <= '0.8')?'red':(charity13AprContents.kpi1 > '0.8' && charity13AprContents.kpi1 <= '1.066666667')?'orange':(charity13AprContents.kpi1 > '1.066666667' && charity13AprContents.kpi1 < '1.333333333')?'yellow-7':(charity13AprContents.kpi1 >= '1.333333333' && charity13AprContents.kpi1 < '1.6')?'green':(charity13AprContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi2 == null)?'grey-2':(charity13AprContents.kpi2 >= '0' && charity13AprContents.kpi2 <= '1.4')?'red':(charity13AprContents.kpi2 > '1.4' && charity13AprContents.kpi2 <= '1.866666667')?'orange':(charity13AprContents.kpi2 > '1.866666667' && charity13AprContents.kpi2 < '2.333333333')?'yellow-7':(charity13AprContents.kpi2 >= '2.333333333' && charity13AprContents.kpi2 < '2.8')?'green':(charity13AprContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi3 == null)?'grey-2':(charity13AprContents.kpi3 >= '0' && charity13AprContents.kpi3 <= '2')?'red':(charity13AprContents.kpi3 > '2' && charity13AprContents.kpi3 <= '2.666666667')?'orange':(charity13AprContents.kpi3 > '2.666666667' && charity13AprContents.kpi3 < '3.333333333')?'yellow-7':(charity13AprContents.kpi3 >= '3.333333333' && charity13AprContents.kpi3 < '4')?'green':(charity13AprContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi4 == null)?'grey-2':(charity13AprContents.kpi4 >= '0' && charity13AprContents.kpi4 <= '2.2')?'red':(charity13AprContents.kpi4 > '2.2' && charity13AprContents.kpi4 <= '2.933333333')?'orange':(charity13AprContents.kpi4 > '2.933333333' && charity13AprContents.kpi4 < '3.666666667')?'yellow-7':(charity13AprContents.kpi4 >= '3.666666667' && charity13AprContents.kpi4 < '4.4')?'green':(charity13AprContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi5 == null)?'grey-2':(charity13AprContents.kpi5 >= '0' && charity13AprContents.kpi5 <= '1')?'red':(charity13AprContents.kpi5 > '1' && charity13AprContents.kpi5 <= '1.333333333')?'orange':(charity13AprContents.kpi5 > '1.333333333' && charity13AprContents.kpi5 < '1.666666667')?'yellow-7':(charity13AprContents.kpi5 >= '1.666666667' && charity13AprContents.kpi5 < '2')?'green':(charity13AprContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MayContents.kpi1 == null)?'grey-2':(charity13MayContents.kpi1 >= '0' && charity13MayContents.kpi1 <= '0.8')?'red':(charity13MayContents.kpi1 > '0.8' && charity13MayContents.kpi1 <= '1.066666667')?'orange':(charity13MayContents.kpi1 > '1.066666667' && charity13MayContents.kpi1 < '1.333333333')?'yellow-7':(charity13MayContents.kpi1 >= '1.333333333' && charity13MayContents.kpi1 < '1.6')?'green':(charity13MayContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi2 == null)?'grey-2':(charity13MayContents.kpi2 >= '0' && charity13MayContents.kpi2 <= '1.4')?'red':(charity13MayContents.kpi2 > '1.4' && charity13MayContents.kpi2 <= '1.866666667')?'orange':(charity13MayContents.kpi2 > '1.866666667' && charity13MayContents.kpi2 < '2.333333333')?'yellow-7':(charity13MayContents.kpi2 >= '2.333333333' && charity13MayContents.kpi2 < '2.8')?'green':(charity13MayContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi3 == null)?'grey-2':(charity13MayContents.kpi3 >= '0' && charity13MayContents.kpi3 <= '2')?'red':(charity13MayContents.kpi3 > '2' && charity13MayContents.kpi3 <= '2.666666667')?'orange':(charity13MayContents.kpi3 > '2.666666667' && charity13MayContents.kpi3 < '3.333333333')?'yellow-7':(charity13MayContents.kpi3 >= '3.333333333' && charity13MayContents.kpi3 < '4')?'green':(charity13MayContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi4 == null)?'grey-2':(charity13MayContents.kpi4 >= '0' && charity13MayContents.kpi4 <= '2.2')?'red':(charity13MayContents.kpi4 > '2.2' && charity13MayContents.kpi4 <= '2.933333333')?'orange':(charity13MayContents.kpi4 > '2.933333333' && charity13MayContents.kpi4 < '3.666666667')?'yellow-7':(charity13MayContents.kpi4 >= '3.666666667' && charity13MayContents.kpi4 < '4.4')?'green':(charity13MayContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi5 == null)?'grey-2':(charity13MayContents.kpi5 >= '0' && charity13MayContents.kpi5 <= '1')?'red':(charity13MayContents.kpi5 > '1' && charity13MayContents.kpi5 <= '1.333333333')?'orange':(charity13MayContents.kpi5 > '1.333333333' && charity13MayContents.kpi5 < '1.666666667')?'yellow-7':(charity13MayContents.kpi5 >= '1.666666667' && charity13MayContents.kpi5 < '2')?'green':(charity13MayContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JunContents.kpi1 == null)?'grey-2':(charity13JunContents.kpi1 >= '0' && charity13JunContents.kpi1 <= '0.8')?'red':(charity13JunContents.kpi1 > '0.8' && charity13JunContents.kpi1 <= '1.066666667')?'orange':(charity13JunContents.kpi1 > '1.066666667' && charity13JunContents.kpi1 < '1.333333333')?'yellow-7':(charity13JunContents.kpi1 >= '1.333333333' && charity13JunContents.kpi1 < '1.6')?'green':(charity13JunContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi2 == null)?'grey-2':(charity13JunContents.kpi2 >= '0' && charity13JunContents.kpi2 <= '1.4')?'red':(charity13JunContents.kpi2 > '1.4' && charity13JunContents.kpi2 <= '1.866666667')?'orange':(charity13JunContents.kpi2 > '1.866666667' && charity13JunContents.kpi2 < '2.333333333')?'yellow-7':(charity13JunContents.kpi2 >= '2.333333333' && charity13JunContents.kpi2 < '2.8')?'green':(charity13JunContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi3 == null)?'grey-2':(charity13JunContents.kpi3 >= '0' && charity13JunContents.kpi3 <= '2')?'red':(charity13JunContents.kpi3 > '2' && charity13JunContents.kpi3 <= '2.666666667')?'orange':(charity13JunContents.kpi3 > '2.666666667' && charity13JunContents.kpi3 < '3.333333333')?'yellow-7':(charity13JunContents.kpi3 >= '3.333333333' && charity13JunContents.kpi3 < '4')?'green':(charity13JunContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi4 == null)?'grey-2':(charity13JunContents.kpi4 >= '0' && charity13JunContents.kpi4 <= '2.2')?'red':(charity13JunContents.kpi4 > '2.2' && charity13JunContents.kpi4 <= '2.933333333')?'orange':(charity13JunContents.kpi4 > '2.933333333' && charity13JunContents.kpi4 < '3.666666667')?'yellow-7':(charity13JunContents.kpi4 >= '3.666666667' && charity13JunContents.kpi4 < '4.4')?'green':(charity13JunContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi5 == null)?'grey-2':(charity13JunContents.kpi5 >= '0' && charity13JunContents.kpi5 <= '1')?'red':(charity13JunContents.kpi5 > '1' && charity13JunContents.kpi5 <= '1.333333333')?'orange':(charity13JunContents.kpi5 > '1.333333333' && charity13JunContents.kpi5 < '1.666666667')?'yellow-7':(charity13JunContents.kpi5 >= '1.666666667' && charity13JunContents.kpi5 < '2')?'green':(charity13JunContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JulContents.kpi1 == null)?'grey-2':(charity13JulContents.kpi1 >= '0' && charity13JulContents.kpi1 <= '0.8')?'red':(charity13JulContents.kpi1 > '0.8' && charity13JulContents.kpi1 <= '1.066666667')?'orange':(charity13JulContents.kpi1 > '1.066666667' && charity13JulContents.kpi1 < '1.333333333')?'yellow-7':(charity13JulContents.kpi1 >= '1.333333333' && charity13JulContents.kpi1 < '1.6')?'green':(charity13JulContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi2 == null)?'grey-2':(charity13JulContents.kpi2 >= '0' && charity13JulContents.kpi2 <= '1.4')?'red':(charity13JulContents.kpi2 > '1.4' && charity13JulContents.kpi2 <= '1.866666667')?'orange':(charity13JulContents.kpi2 > '1.866666667' && charity13JulContents.kpi2 < '2.333333333')?'yellow-7':(charity13JulContents.kpi2 >= '2.333333333' && charity13JulContents.kpi2 < '2.8')?'green':(charity13JulContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi3 == null)?'grey-2':(charity13JulContents.kpi3 >= '0' && charity13JulContents.kpi3 <= '2')?'red':(charity13JulContents.kpi3 > '2' && charity13JulContents.kpi3 <= '2.666666667')?'orange':(charity13JulContents.kpi3 > '2.666666667' && charity13JulContents.kpi3 < '3.333333333')?'yellow-7':(charity13JulContents.kpi3 >= '3.333333333' && charity13JulContents.kpi3 < '4')?'green':(charity13JulContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi4 == null)?'grey-2':(charity13JulContents.kpi4 >= '0' && charity13JulContents.kpi4 <= '2.2')?'red':(charity13JulContents.kpi4 > '2.2' && charity13JulContents.kpi4 <= '2.933333333')?'orange':(charity13JulContents.kpi4 > '2.933333333' && charity13JulContents.kpi4 < '3.666666667')?'yellow-7':(charity13JulContents.kpi4 >= '3.666666667' && charity13JulContents.kpi4 < '4.4')?'green':(charity13JulContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi5 == null)?'grey-2':(charity13JulContents.kpi5 >= '0' && charity13JulContents.kpi5 <= '1')?'red':(charity13JulContents.kpi5 > '1' && charity13JulContents.kpi5 <= '1.333333333')?'orange':(charity13JulContents.kpi5 > '1.333333333' && charity13JulContents.kpi5 < '1.666666667')?'yellow-7':(charity13JulContents.kpi5 >= '1.666666667' && charity13JulContents.kpi5 < '2')?'green':(charity13JulContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AugContents.kpi1 == null)?'grey-2':(charity13AugContents.kpi1 >= '0' && charity13AugContents.kpi1 <= '0.8')?'red':(charity13AugContents.kpi1 > '0.8' && charity13AugContents.kpi1 <= '1.066666667')?'orange':(charity13AugContents.kpi1 > '1.066666667' && charity13AugContents.kpi1 < '1.333333333')?'yellow-7':(charity13AugContents.kpi1 >= '1.333333333' && charity13AugContents.kpi1 < '1.6')?'green':(charity13AugContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi2 == null)?'grey-2':(charity13AugContents.kpi2 >= '0' && charity13AugContents.kpi2 <= '1.4')?'red':(charity13AugContents.kpi2 > '1.4' && charity13AugContents.kpi2 <= '1.866666667')?'orange':(charity13AugContents.kpi2 > '1.866666667' && charity13AugContents.kpi2 < '2.333333333')?'yellow-7':(charity13AugContents.kpi2 >= '2.333333333' && charity13AugContents.kpi2 < '2.8')?'green':(charity13AugContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi3 == null)?'grey-2':(charity13AugContents.kpi3 >= '0' && charity13AugContents.kpi3 <= '2')?'red':(charity13AugContents.kpi3 > '2' && charity13AugContents.kpi3 <= '2.666666667')?'orange':(charity13AugContents.kpi3 > '2.666666667' && charity13AugContents.kpi3 < '3.333333333')?'yellow-7':(charity13AugContents.kpi3 >= '3.333333333' && charity13AugContents.kpi3 < '4')?'green':(charity13AugContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi4 == null)?'grey-2':(charity13AugContents.kpi4 >= '0' && charity13AugContents.kpi4 <= '2.2')?'red':(charity13AugContents.kpi4 > '2.2' && charity13AugContents.kpi4 <= '2.933333333')?'orange':(charity13AugContents.kpi4 > '2.933333333' && charity13AugContents.kpi4 < '3.666666667')?'yellow-7':(charity13AugContents.kpi4 >= '3.666666667' && charity13AugContents.kpi4 < '4.4')?'green':(charity13AugContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi5 == null)?'grey-2':(charity13AugContents.kpi5 >= '0' && charity13AugContents.kpi5 <= '1')?'red':(charity13AugContents.kpi5 > '1' && charity13AugContents.kpi5 <= '1.333333333')?'orange':(charity13AugContents.kpi5 > '1.333333333' && charity13AugContents.kpi5 < '1.666666667')?'yellow-7':(charity13AugContents.kpi5 >= '1.666666667' && charity13AugContents.kpi5 < '2')?'green':(charity13AugContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13SepContents.kpi1 == null)?'grey-2':(charity13SepContents.kpi1 >= '0' && charity13SepContents.kpi1 <= '0.8')?'red':(charity13SepContents.kpi1 > '0.8' && charity13SepContents.kpi1 <= '1.066666667')?'orange':(charity13SepContents.kpi1 > '1.066666667' && charity13SepContents.kpi1 < '1.333333333')?'yellow-7':(charity13SepContents.kpi1 >= '1.333333333' && charity13SepContents.kpi1 < '1.6')?'green':(charity13SepContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi2 == null)?'grey-2':(charity13SepContents.kpi2 >= '0' && charity13SepContents.kpi2 <= '1.4')?'red':(charity13SepContents.kpi2 > '1.4' && charity13SepContents.kpi2 <= '1.866666667')?'orange':(charity13SepContents.kpi2 > '1.866666667' && charity13SepContents.kpi2 < '2.333333333')?'yellow-7':(charity13SepContents.kpi2 >= '2.333333333' && charity13SepContents.kpi2 < '2.8')?'green':(charity13SepContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi3 == null)?'grey-2':(charity13SepContents.kpi3 >= '0' && charity13SepContents.kpi3 <= '2')?'red':(charity13SepContents.kpi3 > '2' && charity13SepContents.kpi3 <= '2.666666667')?'orange':(charity13SepContents.kpi3 > '2.666666667' && charity13SepContents.kpi3 < '3.333333333')?'yellow-7':(charity13SepContents.kpi3 >= '3.333333333' && charity13SepContents.kpi3 < '4')?'green':(charity13SepContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi4 == null)?'grey-2':(charity13SepContents.kpi4 >= '0' && charity13SepContents.kpi4 <= '2.2')?'red':(charity13SepContents.kpi4 > '2.2' && charity13SepContents.kpi4 <= '2.933333333')?'orange':(charity13SepContents.kpi4 > '2.933333333' && charity13SepContents.kpi4 < '3.666666667')?'yellow-7':(charity13SepContents.kpi4 >= '3.666666667' && charity13SepContents.kpi4 < '4.4')?'green':(charity13SepContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi5 == null)?'grey-2':(charity13SepContents.kpi5 >= '0' && charity13SepContents.kpi5 <= '1')?'red':(charity13SepContents.kpi5 > '1' && charity13SepContents.kpi5 <= '1.333333333')?'orange':(charity13SepContents.kpi5 > '1.333333333' && charity13SepContents.kpi5 < '1.666666667')?'yellow-7':(charity13SepContents.kpi5 >= '1.666666667' && charity13SepContents.kpi5 < '2')?'green':(charity13SepContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13OctContents.kpi1 == null)?'grey-2':(charity13OctContents.kpi1 >= '0' && charity13OctContents.kpi1 <= '0.8')?'red':(charity13OctContents.kpi1 > '0.8' && charity13OctContents.kpi1 <= '1.066666667')?'orange':(charity13OctContents.kpi1 > '1.066666667' && charity13OctContents.kpi1 < '1.333333333')?'yellow-7':(charity13OctContents.kpi1 >= '1.333333333' && charity13OctContents.kpi1 < '1.6')?'green':(charity13OctContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi2 == null)?'grey-2':(charity13OctContents.kpi2 >= '0' && charity13OctContents.kpi2 <= '1.4')?'red':(charity13OctContents.kpi2 > '1.4' && charity13OctContents.kpi2 <= '1.866666667')?'orange':(charity13OctContents.kpi2 > '1.866666667' && charity13OctContents.kpi2 < '2.333333333')?'yellow-7':(charity13OctContents.kpi2 >= '2.333333333' && charity13OctContents.kpi2 < '2.8')?'green':(charity13OctContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi3 == null)?'grey-2':(charity13OctContents.kpi3 >= '0' && charity13OctContents.kpi3 <= '2')?'red':(charity13OctContents.kpi3 > '2' && charity13OctContents.kpi3 <= '2.666666667')?'orange':(charity13OctContents.kpi3 > '2.666666667' && charity13OctContents.kpi3 < '3.333333333')?'yellow-7':(charity13OctContents.kpi3 >= '3.333333333' && charity13OctContents.kpi3 < '4')?'green':(charity13OctContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi4 == null)?'grey-2':(charity13OctContents.kpi4 >= '0' && charity13OctContents.kpi4 <= '2.2')?'red':(charity13OctContents.kpi4 > '2.2' && charity13OctContents.kpi4 <= '2.933333333')?'orange':(charity13OctContents.kpi4 > '2.933333333' && charity13OctContents.kpi4 < '3.666666667')?'yellow-7':(charity13OctContents.kpi4 >= '3.666666667' && charity13OctContents.kpi4 < '4.4')?'green':(charity13OctContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi5 == null)?'grey-2':(charity13OctContents.kpi5 >= '0' && charity13OctContents.kpi5 <= '1')?'red':(charity13OctContents.kpi5 > '1' && charity13OctContents.kpi5 <= '1.333333333')?'orange':(charity13OctContents.kpi5 > '1.333333333' && charity13OctContents.kpi5 < '1.666666667')?'yellow-7':(charity13OctContents.kpi5 >= '1.666666667' && charity13OctContents.kpi5 < '2')?'green':(charity13OctContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13NovContents.kpi1 == null)?'grey-2':(charity13NovContents.kpi1 >= '0' && charity13NovContents.kpi1 <= '0.8')?'red':(charity13NovContents.kpi1 > '0.8' && charity13NovContents.kpi1 <= '1.066666667')?'orange':(charity13NovContents.kpi1 > '1.066666667' && charity13NovContents.kpi1 < '1.333333333')?'yellow-7':(charity13NovContents.kpi1 >= '1.333333333' && charity13NovContents.kpi1 < '1.6')?'green':(charity13NovContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi2 == null)?'grey-2':(charity13NovContents.kpi2 >= '0' && charity13NovContents.kpi2 <= '1.4')?'red':(charity13NovContents.kpi2 > '1.4' && charity13NovContents.kpi2 <= '1.866666667')?'orange':(charity13NovContents.kpi2 > '1.866666667' && charity13NovContents.kpi2 < '2.333333333')?'yellow-7':(charity13NovContents.kpi2 >= '2.333333333' && charity13NovContents.kpi2 < '2.8')?'green':(charity13NovContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi3 == null)?'grey-2':(charity13NovContents.kpi3 >= '0' && charity13NovContents.kpi3 <= '2')?'red':(charity13NovContents.kpi3 > '2' && charity13NovContents.kpi3 <= '2.666666667')?'orange':(charity13NovContents.kpi3 > '2.666666667' && charity13NovContents.kpi3 < '3.333333333')?'yellow-7':(charity13NovContents.kpi3 >= '3.333333333' && charity13NovContents.kpi3 < '4')?'green':(charity13NovContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi4 == null)?'grey-2':(charity13NovContents.kpi4 >= '0' && charity13NovContents.kpi4 <= '2.2')?'red':(charity13NovContents.kpi4 > '2.2' && charity13NovContents.kpi4 <= '2.933333333')?'orange':(charity13NovContents.kpi4 > '2.933333333' && charity13NovContents.kpi4 < '3.666666667')?'yellow-7':(charity13NovContents.kpi4 >= '3.666666667' && charity13NovContents.kpi4 < '4.4')?'green':(charity13NovContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi5 == null)?'grey-2':(charity13NovContents.kpi5 >= '0' && charity13NovContents.kpi5 <= '1')?'red':(charity13NovContents.kpi5 > '1' && charity13NovContents.kpi5 <= '1.333333333')?'orange':(charity13NovContents.kpi5 > '1.333333333' && charity13NovContents.kpi5 < '1.666666667')?'yellow-7':(charity13NovContents.kpi5 >= '1.666666667' && charity13NovContents.kpi5 < '2')?'green':(charity13NovContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13DecContents.kpi1 == null)?'grey-2':(charity13DecContents.kpi1 >= '0' && charity13DecContents.kpi1 <= '0.8')?'red':(charity13DecContents.kpi1 > '0.8' && charity13DecContents.kpi1 <= '1.066666667')?'orange':(charity13DecContents.kpi1 > '1.066666667' && charity13DecContents.kpi1 < '1.333333333')?'yellow-7':(charity13DecContents.kpi1 >= '1.333333333' && charity13DecContents.kpi1 < '1.6')?'green':(charity13DecContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi2 == null)?'grey-2':(charity13DecContents.kpi2 >= '0' && charity13DecContents.kpi2 <= '1.4')?'red':(charity13DecContents.kpi2 > '1.4' && charity13DecContents.kpi2 <= '1.866666667')?'orange':(charity13DecContents.kpi2 > '1.866666667' && charity13DecContents.kpi2 < '2.333333333')?'yellow-7':(charity13DecContents.kpi2 >= '2.333333333' && charity13DecContents.kpi2 < '2.8')?'green':(charity13DecContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi3 == null)?'grey-2':(charity13DecContents.kpi3 >= '0' && charity13DecContents.kpi3 <= '2')?'red':(charity13DecContents.kpi3 > '2' && charity13DecContents.kpi3 <= '2.666666667')?'orange':(charity13DecContents.kpi3 > '2.666666667' && charity13DecContents.kpi3 < '3.333333333')?'yellow-7':(charity13DecContents.kpi3 >= '3.333333333' && charity13DecContents.kpi3 < '4')?'green':(charity13DecContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi4 == null)?'grey-2':(charity13DecContents.kpi4 >= '0' && charity13DecContents.kpi4 <= '2.2')?'red':(charity13DecContents.kpi4 > '2.2' && charity13DecContents.kpi4 <= '2.933333333')?'orange':(charity13DecContents.kpi4 > '2.933333333' && charity13DecContents.kpi4 < '3.666666667')?'yellow-7':(charity13DecContents.kpi4 >= '3.666666667' && charity13DecContents.kpi4 < '4.4')?'green':(charity13DecContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi5 == null)?'grey-2':(charity13DecContents.kpi5 >= '0' && charity13DecContents.kpi5 <= '1')?'red':(charity13DecContents.kpi5 > '1' && charity13DecContents.kpi5 <= '1.333333333')?'orange':(charity13DecContents.kpi5 > '1.333333333' && charity13DecContents.kpi5 < '1.666666667')?'yellow-7':(charity13DecContents.kpi5 >= '1.666666667' && charity13DecContents.kpi5 < '2')?'green':(charity13DecContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JanContents.kpi1 == null)?'grey-2':(charity13JanContents.kpi1 >= '0' && charity13JanContents.kpi1 <= '0.8')?'red':(charity13JanContents.kpi1 > '0.8' && charity13JanContents.kpi1 <= '1.066666667')?'orange':(charity13JanContents.kpi1 > '1.066666667' && charity13JanContents.kpi1 < '1.333333333')?'yellow-7':(charity13JanContents.kpi1 >= '1.333333333' && charity13JanContents.kpi1 < '1.6')?'green':(charity13JanContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi2 == null)?'grey-2':(charity13JanContents.kpi2 >= '0' && charity13JanContents.kpi2 <= '1.4')?'red':(charity13JanContents.kpi2 > '1.4' && charity13JanContents.kpi2 <= '1.866666667')?'orange':(charity13JanContents.kpi2 > '1.866666667' && charity13JanContents.kpi2 < '2.333333333')?'yellow-7':(charity13JanContents.kpi2 >= '2.333333333' && charity13JanContents.kpi2 < '2.8')?'green':(charity13JanContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi3 == null)?'grey-2':(charity13JanContents.kpi3 >= '0' && charity13JanContents.kpi3 <= '2')?'red':(charity13JanContents.kpi3 > '2' && charity13JanContents.kpi3 <= '2.666666667')?'orange':(charity13JanContents.kpi3 > '2.666666667' && charity13JanContents.kpi3 < '3.333333333')?'yellow-7':(charity13JanContents.kpi3 >= '3.333333333' && charity13JanContents.kpi3 < '4')?'green':(charity13JanContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi4 == null)?'grey-2':(charity13JanContents.kpi4 >= '0' && charity13JanContents.kpi4 <= '2.2')?'red':(charity13JanContents.kpi4 > '2.2' && charity13JanContents.kpi4 <= '2.933333333')?'orange':(charity13JanContents.kpi4 > '2.933333333' && charity13JanContents.kpi4 < '3.666666667')?'yellow-7':(charity13JanContents.kpi4 >= '3.666666667' && charity13JanContents.kpi4 < '4.4')?'green':(charity13JanContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi5 == null)?'grey-2':(charity13JanContents.kpi5 >= '0' && charity13JanContents.kpi5 <= '1')?'red':(charity13JanContents.kpi5 > '1' && charity13JanContents.kpi5 <= '1.333333333')?'orange':(charity13JanContents.kpi5 > '1.333333333' && charity13JanContents.kpi5 < '1.666666667')?'yellow-7':(charity13JanContents.kpi5 >= '1.666666667' && charity13JanContents.kpi5 < '2')?'green':(charity13JanContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13FebContents.kpi1 == null)?'grey-2':(charity13FebContents.kpi1 >= '0' && charity13FebContents.kpi1 <= '0.8')?'red':(charity13FebContents.kpi1 > '0.8' && charity13FebContents.kpi1 <= '1.066666667')?'orange':(charity13FebContents.kpi1 > '1.066666667' && charity13FebContents.kpi1 < '1.333333333')?'yellow-7':(charity13FebContents.kpi1 >= '1.333333333' && charity13FebContents.kpi1 < '1.6')?'green':(charity13FebContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi2 == null)?'grey-2':(charity13FebContents.kpi2 >= '0' && charity13FebContents.kpi2 <= '1.4')?'red':(charity13FebContents.kpi2 > '1.4' && charity13FebContents.kpi2 <= '1.866666667')?'orange':(charity13FebContents.kpi2 > '1.866666667' && charity13FebContents.kpi2 < '2.333333333')?'yellow-7':(charity13FebContents.kpi2 >= '2.333333333' && charity13FebContents.kpi2 < '2.8')?'green':(charity13FebContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi3 == null)?'grey-2':(charity13FebContents.kpi3 >= '0' && charity13FebContents.kpi3 <= '2')?'red':(charity13FebContents.kpi3 > '2' && charity13FebContents.kpi3 <= '2.666666667')?'orange':(charity13FebContents.kpi3 > '2.666666667' && charity13FebContents.kpi3 < '3.333333333')?'yellow-7':(charity13FebContents.kpi3 >= '3.333333333' && charity13FebContents.kpi3 < '4')?'green':(charity13FebContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi4 == null)?'grey-2':(charity13FebContents.kpi4 >= '0' && charity13FebContents.kpi4 <= '2.2')?'red':(charity13FebContents.kpi4 > '2.2' && charity13FebContents.kpi4 <= '2.933333333')?'orange':(charity13FebContents.kpi4 > '2.933333333' && charity13FebContents.kpi4 < '3.666666667')?'yellow-7':(charity13FebContents.kpi4 >= '3.666666667' && charity13FebContents.kpi4 < '4.4')?'green':(charity13FebContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi5 == null)?'grey-2':(charity13FebContents.kpi5 >= '0' && charity13FebContents.kpi5 <= '1')?'red':(charity13FebContents.kpi5 > '1' && charity13FebContents.kpi5 <= '1.333333333')?'orange':(charity13FebContents.kpi5 > '1.333333333' && charity13FebContents.kpi5 < '1.666666667')?'yellow-7':(charity13FebContents.kpi5 >= '1.666666667' && charity13FebContents.kpi5 < '2')?'green':(charity13FebContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MarContents.kpi1 == null)?'grey-2':(charity13MarContents.kpi1 >= '0' && charity13MarContents.kpi1 <= '0.8')?'red':(charity13MarContents.kpi1 > '0.8' && charity13MarContents.kpi1 <= '1.066666667')?'orange':(charity13MarContents.kpi1 > '1.066666667' && charity13MarContents.kpi1 < '1.333333333')?'yellow-7':(charity13MarContents.kpi1 >= '1.333333333' && charity13MarContents.kpi1 < '1.6')?'green':(charity13MarContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi2 == null)?'grey-2':(charity13MarContents.kpi2 >= '0' && charity13MarContents.kpi2 <= '1.4')?'red':(charity13MarContents.kpi2 > '1.4' && charity13MarContents.kpi2 <= '1.866666667')?'orange':(charity13MarContents.kpi2 > '1.866666667' && charity13MarContents.kpi2 < '2.333333333')?'yellow-7':(charity13MarContents.kpi2 >= '2.333333333' && charity13MarContents.kpi2 < '2.8')?'green':(charity13MarContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi3 == null)?'grey-2':(charity13MarContents.kpi3 >= '0' && charity13MarContents.kpi3 <= '2')?'red':(charity13MarContents.kpi3 > '2' && charity13MarContents.kpi3 <= '2.666666667')?'orange':(charity13MarContents.kpi3 > '2.666666667' && charity13MarContents.kpi3 < '3.333333333')?'yellow-7':(charity13MarContents.kpi3 >= '3.333333333' && charity13MarContents.kpi3 < '4')?'green':(charity13MarContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi4 == null)?'grey-2':(charity13MarContents.kpi4 >= '0' && charity13MarContents.kpi4 <= '2.2')?'red':(charity13MarContents.kpi4 > '2.2' && charity13MarContents.kpi4 <= '2.933333333')?'orange':(charity13MarContents.kpi4 > '2.933333333' && charity13MarContents.kpi4 < '3.666666667')?'yellow-7':(charity13MarContents.kpi4 >= '3.666666667' && charity13MarContents.kpi4 < '4.4')?'green':(charity13MarContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi5 == null)?'grey-2':(charity13MarContents.kpi5 >= '0' && charity13MarContents.kpi5 <= '1')?'red':(charity13MarContents.kpi5 > '1' && charity13MarContents.kpi5 <= '1.333333333')?'orange':(charity13MarContents.kpi5 > '1.333333333' && charity13MarContents.kpi5 < '1.666666667')?'yellow-7':(charity13MarContents.kpi5 >= '1.666666667' && charity13MarContents.kpi5 < '2')?'green':(charity13MarContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AprContents.kpi1 == null)?'grey-2':(charity13AprContents.kpi1 >= '0' && charity13AprContents.kpi1 <= '0.8')?'red':(charity13AprContents.kpi1 > '0.8' && charity13AprContents.kpi1 <= '1.066666667')?'orange':(charity13AprContents.kpi1 > '1.066666667' && charity13AprContents.kpi1 < '1.333333333')?'yellow-7':(charity13AprContents.kpi1 >= '1.333333333' && charity13AprContents.kpi1 < '1.6')?'green':(charity13AprContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi2 == null)?'grey-2':(charity13AprContents.kpi2 >= '0' && charity13AprContents.kpi2 <= '1.4')?'red':(charity13AprContents.kpi2 > '1.4' && charity13AprContents.kpi2 <= '1.866666667')?'orange':(charity13AprContents.kpi2 > '1.866666667' && charity13AprContents.kpi2 < '2.333333333')?'yellow-7':(charity13AprContents.kpi2 >= '2.333333333' && charity13AprContents.kpi2 < '2.8')?'green':(charity13AprContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi3 == null)?'grey-2':(charity13AprContents.kpi3 >= '0' && charity13AprContents.kpi3 <= '2')?'red':(charity13AprContents.kpi3 > '2' && charity13AprContents.kpi3 <= '2.666666667')?'orange':(charity13AprContents.kpi3 > '2.666666667' && charity13AprContents.kpi3 < '3.333333333')?'yellow-7':(charity13AprContents.kpi3 >= '3.333333333' && charity13AprContents.kpi3 < '4')?'green':(charity13AprContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi4 == null)?'grey-2':(charity13AprContents.kpi4 >= '0' && charity13AprContents.kpi4 <= '2.2')?'red':(charity13AprContents.kpi4 > '2.2' && charity13AprContents.kpi4 <= '2.933333333')?'orange':(charity13AprContents.kpi4 > '2.933333333' && charity13AprContents.kpi4 < '3.666666667')?'yellow-7':(charity13AprContents.kpi4 >= '3.666666667' && charity13AprContents.kpi4 < '4.4')?'green':(charity13AprContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi5 == null)?'grey-2':(charity13AprContents.kpi5 >= '0' && charity13AprContents.kpi5 <= '1')?'red':(charity13AprContents.kpi5 > '1' && charity13AprContents.kpi5 <= '1.333333333')?'orange':(charity13AprContents.kpi5 > '1.333333333' && charity13AprContents.kpi5 < '1.666666667')?'yellow-7':(charity13AprContents.kpi5 >= '1.666666667' && charity13AprContents.kpi5 < '2')?'green':(charity13AprContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MayContents.kpi1 == null)?'grey-2':(charity13MayContents.kpi1 >= '0' && charity13MayContents.kpi1 <= '0.8')?'red':(charity13MayContents.kpi1 > '0.8' && charity13MayContents.kpi1 <= '1.066666667')?'orange':(charity13MayContents.kpi1 > '1.066666667' && charity13MayContents.kpi1 < '1.333333333')?'yellow-7':(charity13MayContents.kpi1 >= '1.333333333' && charity13MayContents.kpi1 < '1.6')?'green':(charity13MayContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi2 == null)?'grey-2':(charity13MayContents.kpi2 >= '0' && charity13MayContents.kpi2 <= '1.4')?'red':(charity13MayContents.kpi2 > '1.4' && charity13MayContents.kpi2 <= '1.866666667')?'orange':(charity13MayContents.kpi2 > '1.866666667' && charity13MayContents.kpi2 < '2.333333333')?'yellow-7':(charity13MayContents.kpi2 >= '2.333333333' && charity13MayContents.kpi2 < '2.8')?'green':(charity13MayContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi3 == null)?'grey-2':(charity13MayContents.kpi3 >= '0' && charity13MayContents.kpi3 <= '2')?'red':(charity13MayContents.kpi3 > '2' && charity13MayContents.kpi3 <= '2.666666667')?'orange':(charity13MayContents.kpi3 > '2.666666667' && charity13MayContents.kpi3 < '3.333333333')?'yellow-7':(charity13MayContents.kpi3 >= '3.333333333' && charity13MayContents.kpi3 < '4')?'green':(charity13MayContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi4 == null)?'grey-2':(charity13MayContents.kpi4 >= '0' && charity13MayContents.kpi4 <= '2.2')?'red':(charity13MayContents.kpi4 > '2.2' && charity13MayContents.kpi4 <= '2.933333333')?'orange':(charity13MayContents.kpi4 > '2.933333333' && charity13MayContents.kpi4 < '3.666666667')?'yellow-7':(charity13MayContents.kpi4 >= '3.666666667' && charity13MayContents.kpi4 < '4.4')?'green':(charity13MayContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi5 == null)?'grey-2':(charity13MayContents.kpi5 >= '0' && charity13MayContents.kpi5 <= '1')?'red':(charity13MayContents.kpi5 > '1' && charity13MayContents.kpi5 <= '1.333333333')?'orange':(charity13MayContents.kpi5 > '1.333333333' && charity13MayContents.kpi5 < '1.666666667')?'yellow-7':(charity13MayContents.kpi5 >= '1.666666667' && charity13MayContents.kpi5 < '2')?'green':(charity13MayContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JunContents.kpi1 == null)?'grey-2':(charity13JunContents.kpi1 >= '0' && charity13JunContents.kpi1 <= '0.8')?'red':(charity13JunContents.kpi1 > '0.8' && charity13JunContents.kpi1 <= '1.066666667')?'orange':(charity13JunContents.kpi1 > '1.066666667' && charity13JunContents.kpi1 < '1.333333333')?'yellow-7':(charity13JunContents.kpi1 >= '1.333333333' && charity13JunContents.kpi1 < '1.6')?'green':(charity13JunContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi2 == null)?'grey-2':(charity13JunContents.kpi2 >= '0' && charity13JunContents.kpi2 <= '1.4')?'red':(charity13JunContents.kpi2 > '1.4' && charity13JunContents.kpi2 <= '1.866666667')?'orange':(charity13JunContents.kpi2 > '1.866666667' && charity13JunContents.kpi2 < '2.333333333')?'yellow-7':(charity13JunContents.kpi2 >= '2.333333333' && charity13JunContents.kpi2 < '2.8')?'green':(charity13JunContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi3 == null)?'grey-2':(charity13JunContents.kpi3 >= '0' && charity13JunContents.kpi3 <= '2')?'red':(charity13JunContents.kpi3 > '2' && charity13JunContents.kpi3 <= '2.666666667')?'orange':(charity13JunContents.kpi3 > '2.666666667' && charity13JunContents.kpi3 < '3.333333333')?'yellow-7':(charity13JunContents.kpi3 >= '3.333333333' && charity13JunContents.kpi3 < '4')?'green':(charity13JunContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi4 == null)?'grey-2':(charity13JunContents.kpi4 >= '0' && charity13JunContents.kpi4 <= '2.2')?'red':(charity13JunContents.kpi4 > '2.2' && charity13JunContents.kpi4 <= '2.933333333')?'orange':(charity13JunContents.kpi4 > '2.933333333' && charity13JunContents.kpi4 < '3.666666667')?'yellow-7':(charity13JunContents.kpi4 >= '3.666666667' && charity13JunContents.kpi4 < '4.4')?'green':(charity13JunContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi5 == null)?'grey-2':(charity13JunContents.kpi5 >= '0' && charity13JunContents.kpi5 <= '1')?'red':(charity13JunContents.kpi5 > '1' && charity13JunContents.kpi5 <= '1.333333333')?'orange':(charity13JunContents.kpi5 > '1.333333333' && charity13JunContents.kpi5 < '1.666666667')?'yellow-7':(charity13JunContents.kpi5 >= '1.666666667' && charity13JunContents.kpi5 < '2')?'green':(charity13JunContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JulContents.kpi1 == null)?'grey-2':(charity13JulContents.kpi1 >= '0' && charity13JulContents.kpi1 <= '0.8')?'red':(charity13JulContents.kpi1 > '0.8' && charity13JulContents.kpi1 <= '1.066666667')?'orange':(charity13JulContents.kpi1 > '1.066666667' && charity13JulContents.kpi1 < '1.333333333')?'yellow-7':(charity13JulContents.kpi1 >= '1.333333333' && charity13JulContents.kpi1 < '1.6')?'green':(charity13JulContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi2 == null)?'grey-2':(charity13JulContents.kpi2 >= '0' && charity13JulContents.kpi2 <= '1.4')?'red':(charity13JulContents.kpi2 > '1.4' && charity13JulContents.kpi2 <= '1.866666667')?'orange':(charity13JulContents.kpi2 > '1.866666667' && charity13JulContents.kpi2 < '2.333333333')?'yellow-7':(charity13JulContents.kpi2 >= '2.333333333' && charity13JulContents.kpi2 < '2.8')?'green':(charity13JulContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi3 == null)?'grey-2':(charity13JulContents.kpi3 >= '0' && charity13JulContents.kpi3 <= '2')?'red':(charity13JulContents.kpi3 > '2' && charity13JulContents.kpi3 <= '2.666666667')?'orange':(charity13JulContents.kpi3 > '2.666666667' && charity13JulContents.kpi3 < '3.333333333')?'yellow-7':(charity13JulContents.kpi3 >= '3.333333333' && charity13JulContents.kpi3 < '4')?'green':(charity13JulContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi4 == null)?'grey-2':(charity13JulContents.kpi4 >= '0' && charity13JulContents.kpi4 <= '2.2')?'red':(charity13JulContents.kpi4 > '2.2' && charity13JulContents.kpi4 <= '2.933333333')?'orange':(charity13JulContents.kpi4 > '2.933333333' && charity13JulContents.kpi4 < '3.666666667')?'yellow-7':(charity13JulContents.kpi4 >= '3.666666667' && charity13JulContents.kpi4 < '4.4')?'green':(charity13JulContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi5 == null)?'grey-2':(charity13JulContents.kpi5 >= '0' && charity13JulContents.kpi5 <= '1')?'red':(charity13JulContents.kpi5 > '1' && charity13JulContents.kpi5 <= '1.333333333')?'orange':(charity13JulContents.kpi5 > '1.333333333' && charity13JulContents.kpi5 < '1.666666667')?'yellow-7':(charity13JulContents.kpi5 >= '1.666666667' && charity13JulContents.kpi5 < '2')?'green':(charity13JulContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AugContents.kpi1 == null)?'grey-2':(charity13AugContents.kpi1 >= '0' && charity13AugContents.kpi1 <= '0.8')?'red':(charity13AugContents.kpi1 > '0.8' && charity13AugContents.kpi1 <= '1.066666667')?'orange':(charity13AugContents.kpi1 > '1.066666667' && charity13AugContents.kpi1 < '1.333333333')?'yellow-7':(charity13AugContents.kpi1 >= '1.333333333' && charity13AugContents.kpi1 < '1.6')?'green':(charity13AugContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi2 == null)?'grey-2':(charity13AugContents.kpi2 >= '0' && charity13AugContents.kpi2 <= '1.4')?'red':(charity13AugContents.kpi2 > '1.4' && charity13AugContents.kpi2 <= '1.866666667')?'orange':(charity13AugContents.kpi2 > '1.866666667' && charity13AugContents.kpi2 < '2.333333333')?'yellow-7':(charity13AugContents.kpi2 >= '2.333333333' && charity13AugContents.kpi2 < '2.8')?'green':(charity13AugContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi3 == null)?'grey-2':(charity13AugContents.kpi3 >= '0' && charity13AugContents.kpi3 <= '2')?'red':(charity13AugContents.kpi3 > '2' && charity13AugContents.kpi3 <= '2.666666667')?'orange':(charity13AugContents.kpi3 > '2.666666667' && charity13AugContents.kpi3 < '3.333333333')?'yellow-7':(charity13AugContents.kpi3 >= '3.333333333' && charity13AugContents.kpi3 < '4')?'green':(charity13AugContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi4 == null)?'grey-2':(charity13AugContents.kpi4 >= '0' && charity13AugContents.kpi4 <= '2.2')?'red':(charity13AugContents.kpi4 > '2.2' && charity13AugContents.kpi4 <= '2.933333333')?'orange':(charity13AugContents.kpi4 > '2.933333333' && charity13AugContents.kpi4 < '3.666666667')?'yellow-7':(charity13AugContents.kpi4 >= '3.666666667' && charity13AugContents.kpi4 < '4.4')?'green':(charity13AugContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi5 == null)?'grey-2':(charity13AugContents.kpi5 >= '0' && charity13AugContents.kpi5 <= '1')?'red':(charity13AugContents.kpi5 > '1' && charity13AugContents.kpi5 <= '1.333333333')?'orange':(charity13AugContents.kpi5 > '1.333333333' && charity13AugContents.kpi5 < '1.666666667')?'yellow-7':(charity13AugContents.kpi5 >= '1.666666667' && charity13AugContents.kpi5 < '2')?'green':(charity13AugContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13SepContents.kpi1 == null)?'grey-2':(charity13SepContents.kpi1 >= '0' && charity13SepContents.kpi1 <= '0.8')?'red':(charity13SepContents.kpi1 > '0.8' && charity13SepContents.kpi1 <= '1.066666667')?'orange':(charity13SepContents.kpi1 > '1.066666667' && charity13SepContents.kpi1 < '1.333333333')?'yellow-7':(charity13SepContents.kpi1 >= '1.333333333' && charity13SepContents.kpi1 < '1.6')?'green':(charity13SepContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi2 == null)?'grey-2':(charity13SepContents.kpi2 >= '0' && charity13SepContents.kpi2 <= '1.4')?'red':(charity13SepContents.kpi2 > '1.4' && charity13SepContents.kpi2 <= '1.866666667')?'orange':(charity13SepContents.kpi2 > '1.866666667' && charity13SepContents.kpi2 < '2.333333333')?'yellow-7':(charity13SepContents.kpi2 >= '2.333333333' && charity13SepContents.kpi2 < '2.8')?'green':(charity13SepContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi3 == null)?'grey-2':(charity13SepContents.kpi3 >= '0' && charity13SepContents.kpi3 <= '2')?'red':(charity13SepContents.kpi3 > '2' && charity13SepContents.kpi3 <= '2.666666667')?'orange':(charity13SepContents.kpi3 > '2.666666667' && charity13SepContents.kpi3 < '3.333333333')?'yellow-7':(charity13SepContents.kpi3 >= '3.333333333' && charity13SepContents.kpi3 < '4')?'green':(charity13SepContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi4 == null)?'grey-2':(charity13SepContents.kpi4 >= '0' && charity13SepContents.kpi4 <= '2.2')?'red':(charity13SepContents.kpi4 > '2.2' && charity13SepContents.kpi4 <= '2.933333333')?'orange':(charity13SepContents.kpi4 > '2.933333333' && charity13SepContents.kpi4 < '3.666666667')?'yellow-7':(charity13SepContents.kpi4 >= '3.666666667' && charity13SepContents.kpi4 < '4.4')?'green':(charity13SepContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi5 == null)?'grey-2':(charity13SepContents.kpi5 >= '0' && charity13SepContents.kpi5 <= '1')?'red':(charity13SepContents.kpi5 > '1' && charity13SepContents.kpi5 <= '1.333333333')?'orange':(charity13SepContents.kpi5 > '1.333333333' && charity13SepContents.kpi5 < '1.666666667')?'yellow-7':(charity13SepContents.kpi5 >= '1.666666667' && charity13SepContents.kpi5 < '2')?'green':(charity13SepContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13OctContents.kpi1 == null)?'grey-2':(charity13OctContents.kpi1 >= '0' && charity13OctContents.kpi1 <= '0.8')?'red':(charity13OctContents.kpi1 > '0.8' && charity13OctContents.kpi1 <= '1.066666667')?'orange':(charity13OctContents.kpi1 > '1.066666667' && charity13OctContents.kpi1 < '1.333333333')?'yellow-7':(charity13OctContents.kpi1 >= '1.333333333' && charity13OctContents.kpi1 < '1.6')?'green':(charity13OctContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi2 == null)?'grey-2':(charity13OctContents.kpi2 >= '0' && charity13OctContents.kpi2 <= '1.4')?'red':(charity13OctContents.kpi2 > '1.4' && charity13OctContents.kpi2 <= '1.866666667')?'orange':(charity13OctContents.kpi2 > '1.866666667' && charity13OctContents.kpi2 < '2.333333333')?'yellow-7':(charity13OctContents.kpi2 >= '2.333333333' && charity13OctContents.kpi2 < '2.8')?'green':(charity13OctContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi3 == null)?'grey-2':(charity13OctContents.kpi3 >= '0' && charity13OctContents.kpi3 <= '2')?'red':(charity13OctContents.kpi3 > '2' && charity13OctContents.kpi3 <= '2.666666667')?'orange':(charity13OctContents.kpi3 > '2.666666667' && charity13OctContents.kpi3 < '3.333333333')?'yellow-7':(charity13OctContents.kpi3 >= '3.333333333' && charity13OctContents.kpi3 < '4')?'green':(charity13OctContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi4 == null)?'grey-2':(charity13OctContents.kpi4 >= '0' && charity13OctContents.kpi4 <= '2.2')?'red':(charity13OctContents.kpi4 > '2.2' && charity13OctContents.kpi4 <= '2.933333333')?'orange':(charity13OctContents.kpi4 > '2.933333333' && charity13OctContents.kpi4 < '3.666666667')?'yellow-7':(charity13OctContents.kpi4 >= '3.666666667' && charity13OctContents.kpi4 < '4.4')?'green':(charity13OctContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi5 == null)?'grey-2':(charity13OctContents.kpi5 >= '0' && charity13OctContents.kpi5 <= '1')?'red':(charity13OctContents.kpi5 > '1' && charity13OctContents.kpi5 <= '1.333333333')?'orange':(charity13OctContents.kpi5 > '1.333333333' && charity13OctContents.kpi5 < '1.666666667')?'yellow-7':(charity13OctContents.kpi5 >= '1.666666667' && charity13OctContents.kpi5 < '2')?'green':(charity13OctContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13NovContents.kpi1 == null)?'grey-2':(charity13NovContents.kpi1 >= '0' && charity13NovContents.kpi1 <= '0.8')?'red':(charity13NovContents.kpi1 > '0.8' && charity13NovContents.kpi1 <= '1.066666667')?'orange':(charity13NovContents.kpi1 > '1.066666667' && charity13NovContents.kpi1 < '1.333333333')?'yellow-7':(charity13NovContents.kpi1 >= '1.333333333' && charity13NovContents.kpi1 < '1.6')?'green':(charity13NovContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi2 == null)?'grey-2':(charity13NovContents.kpi2 >= '0' && charity13NovContents.kpi2 <= '1.4')?'red':(charity13NovContents.kpi2 > '1.4' && charity13NovContents.kpi2 <= '1.866666667')?'orange':(charity13NovContents.kpi2 > '1.866666667' && charity13NovContents.kpi2 < '2.333333333')?'yellow-7':(charity13NovContents.kpi2 >= '2.333333333' && charity13NovContents.kpi2 < '2.8')?'green':(charity13NovContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi3 == null)?'grey-2':(charity13NovContents.kpi3 >= '0' && charity13NovContents.kpi3 <= '2')?'red':(charity13NovContents.kpi3 > '2' && charity13NovContents.kpi3 <= '2.666666667')?'orange':(charity13NovContents.kpi3 > '2.666666667' && charity13NovContents.kpi3 < '3.333333333')?'yellow-7':(charity13NovContents.kpi3 >= '3.333333333' && charity13NovContents.kpi3 < '4')?'green':(charity13NovContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi4 == null)?'grey-2':(charity13NovContents.kpi4 >= '0' && charity13NovContents.kpi4 <= '2.2')?'red':(charity13NovContents.kpi4 > '2.2' && charity13NovContents.kpi4 <= '2.933333333')?'orange':(charity13NovContents.kpi4 > '2.933333333' && charity13NovContents.kpi4 < '3.666666667')?'yellow-7':(charity13NovContents.kpi4 >= '3.666666667' && charity13NovContents.kpi4 < '4.4')?'green':(charity13NovContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi5 == null)?'grey-2':(charity13NovContents.kpi5 >= '0' && charity13NovContents.kpi5 <= '1')?'red':(charity13NovContents.kpi5 > '1' && charity13NovContents.kpi5 <= '1.333333333')?'orange':(charity13NovContents.kpi5 > '1.333333333' && charity13NovContents.kpi5 < '1.666666667')?'yellow-7':(charity13NovContents.kpi5 >= '1.666666667' && charity13NovContents.kpi5 < '2')?'green':(charity13NovContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13DecContents.kpi1 == null)?'grey-2':(charity13DecContents.kpi1 >= '0' && charity13DecContents.kpi1 <= '0.8')?'red':(charity13DecContents.kpi1 > '0.8' && charity13DecContents.kpi1 <= '1.066666667')?'orange':(charity13DecContents.kpi1 > '1.066666667' && charity13DecContents.kpi1 < '1.333333333')?'yellow-7':(charity13DecContents.kpi1 >= '1.333333333' && charity13DecContents.kpi1 < '1.6')?'green':(charity13DecContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi2 == null)?'grey-2':(charity13DecContents.kpi2 >= '0' && charity13DecContents.kpi2 <= '1.4')?'red':(charity13DecContents.kpi2 > '1.4' && charity13DecContents.kpi2 <= '1.866666667')?'orange':(charity13DecContents.kpi2 > '1.866666667' && charity13DecContents.kpi2 < '2.333333333')?'yellow-7':(charity13DecContents.kpi2 >= '2.333333333' && charity13DecContents.kpi2 < '2.8')?'green':(charity13DecContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi3 == null)?'grey-2':(charity13DecContents.kpi3 >= '0' && charity13DecContents.kpi3 <= '2')?'red':(charity13DecContents.kpi3 > '2' && charity13DecContents.kpi3 <= '2.666666667')?'orange':(charity13DecContents.kpi3 > '2.666666667' && charity13DecContents.kpi3 < '3.333333333')?'yellow-7':(charity13DecContents.kpi3 >= '3.333333333' && charity13DecContents.kpi3 < '4')?'green':(charity13DecContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi4 == null)?'grey-2':(charity13DecContents.kpi4 >= '0' && charity13DecContents.kpi4 <= '2.2')?'red':(charity13DecContents.kpi4 > '2.2' && charity13DecContents.kpi4 <= '2.933333333')?'orange':(charity13DecContents.kpi4 > '2.933333333' && charity13DecContents.kpi4 < '3.666666667')?'yellow-7':(charity13DecContents.kpi4 >= '3.666666667' && charity13DecContents.kpi4 < '4.4')?'green':(charity13DecContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi5 == null)?'grey-2':(charity13DecContents.kpi5 >= '0' && charity13DecContents.kpi5 <= '1')?'red':(charity13DecContents.kpi5 > '1' && charity13DecContents.kpi5 <= '1.333333333')?'orange':(charity13DecContents.kpi5 > '1.333333333' && charity13DecContents.kpi5 < '1.666666667')?'yellow-7':(charity13DecContents.kpi5 >= '1.666666667' && charity13DecContents.kpi5 < '2')?'green':(charity13DecContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JanContents.kpi1 == null)?'grey-2':(charity13JanContents.kpi1 >= '0' && charity13JanContents.kpi1 <= '0.8')?'red':(charity13JanContents.kpi1 > '0.8' && charity13JanContents.kpi1 <= '1.066666667')?'orange':(charity13JanContents.kpi1 > '1.066666667' && charity13JanContents.kpi1 < '1.333333333')?'yellow-7':(charity13JanContents.kpi1 >= '1.333333333' && charity13JanContents.kpi1 < '1.6')?'green':(charity13JanContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi2 == null)?'grey-2':(charity13JanContents.kpi2 >= '0' && charity13JanContents.kpi2 <= '1.4')?'red':(charity13JanContents.kpi2 > '1.4' && charity13JanContents.kpi2 <= '1.866666667')?'orange':(charity13JanContents.kpi2 > '1.866666667' && charity13JanContents.kpi2 < '2.333333333')?'yellow-7':(charity13JanContents.kpi2 >= '2.333333333' && charity13JanContents.kpi2 < '2.8')?'green':(charity13JanContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi3 == null)?'grey-2':(charity13JanContents.kpi3 >= '0' && charity13JanContents.kpi3 <= '2')?'red':(charity13JanContents.kpi3 > '2' && charity13JanContents.kpi3 <= '2.666666667')?'orange':(charity13JanContents.kpi3 > '2.666666667' && charity13JanContents.kpi3 < '3.333333333')?'yellow-7':(charity13JanContents.kpi3 >= '3.333333333' && charity13JanContents.kpi3 < '4')?'green':(charity13JanContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi4 == null)?'grey-2':(charity13JanContents.kpi4 >= '0' && charity13JanContents.kpi4 <= '2.2')?'red':(charity13JanContents.kpi4 > '2.2' && charity13JanContents.kpi4 <= '2.933333333')?'orange':(charity13JanContents.kpi4 > '2.933333333' && charity13JanContents.kpi4 < '3.666666667')?'yellow-7':(charity13JanContents.kpi4 >= '3.666666667' && charity13JanContents.kpi4 < '4.4')?'green':(charity13JanContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi5 == null)?'grey-2':(charity13JanContents.kpi5 >= '0' && charity13JanContents.kpi5 <= '1')?'red':(charity13JanContents.kpi5 > '1' && charity13JanContents.kpi5 <= '1.333333333')?'orange':(charity13JanContents.kpi5 > '1.333333333' && charity13JanContents.kpi5 < '1.666666667')?'yellow-7':(charity13JanContents.kpi5 >= '1.666666667' && charity13JanContents.kpi5 < '2')?'green':(charity13JanContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13FebContents.kpi1 == null)?'grey-2':(charity13FebContents.kpi1 >= '0' && charity13FebContents.kpi1 <= '0.8')?'red':(charity13FebContents.kpi1 > '0.8' && charity13FebContents.kpi1 <= '1.066666667')?'orange':(charity13FebContents.kpi1 > '1.066666667' && charity13FebContents.kpi1 < '1.333333333')?'yellow-7':(charity13FebContents.kpi1 >= '1.333333333' && charity13FebContents.kpi1 < '1.6')?'green':(charity13FebContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi2 == null)?'grey-2':(charity13FebContents.kpi2 >= '0' && charity13FebContents.kpi2 <= '1.4')?'red':(charity13FebContents.kpi2 > '1.4' && charity13FebContents.kpi2 <= '1.866666667')?'orange':(charity13FebContents.kpi2 > '1.866666667' && charity13FebContents.kpi2 < '2.333333333')?'yellow-7':(charity13FebContents.kpi2 >= '2.333333333' && charity13FebContents.kpi2 < '2.8')?'green':(charity13FebContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi3 == null)?'grey-2':(charity13FebContents.kpi3 >= '0' && charity13FebContents.kpi3 <= '2')?'red':(charity13FebContents.kpi3 > '2' && charity13FebContents.kpi3 <= '2.666666667')?'orange':(charity13FebContents.kpi3 > '2.666666667' && charity13FebContents.kpi3 < '3.333333333')?'yellow-7':(charity13FebContents.kpi3 >= '3.333333333' && charity13FebContents.kpi3 < '4')?'green':(charity13FebContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi4 == null)?'grey-2':(charity13FebContents.kpi4 >= '0' && charity13FebContents.kpi4 <= '2.2')?'red':(charity13FebContents.kpi4 > '2.2' && charity13FebContents.kpi4 <= '2.933333333')?'orange':(charity13FebContents.kpi4 > '2.933333333' && charity13FebContents.kpi4 < '3.666666667')?'yellow-7':(charity13FebContents.kpi4 >= '3.666666667' && charity13FebContents.kpi4 < '4.4')?'green':(charity13FebContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi5 == null)?'grey-2':(charity13FebContents.kpi5 >= '0' && charity13FebContents.kpi5 <= '1')?'red':(charity13FebContents.kpi5 > '1' && charity13FebContents.kpi5 <= '1.333333333')?'orange':(charity13FebContents.kpi5 > '1.333333333' && charity13FebContents.kpi5 < '1.666666667')?'yellow-7':(charity13FebContents.kpi5 >= '1.666666667' && charity13FebContents.kpi5 < '2')?'green':(charity13FebContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MarContents.kpi1 == null)?'grey-2':(charity13MarContents.kpi1 >= '0' && charity13MarContents.kpi1 <= '0.8')?'red':(charity13MarContents.kpi1 > '0.8' && charity13MarContents.kpi1 <= '1.066666667')?'orange':(charity13MarContents.kpi1 > '1.066666667' && charity13MarContents.kpi1 < '1.333333333')?'yellow-7':(charity13MarContents.kpi1 >= '1.333333333' && charity13MarContents.kpi1 < '1.6')?'green':(charity13MarContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi2 == null)?'grey-2':(charity13MarContents.kpi2 >= '0' && charity13MarContents.kpi2 <= '1.4')?'red':(charity13MarContents.kpi2 > '1.4' && charity13MarContents.kpi2 <= '1.866666667')?'orange':(charity13MarContents.kpi2 > '1.866666667' && charity13MarContents.kpi2 < '2.333333333')?'yellow-7':(charity13MarContents.kpi2 >= '2.333333333' && charity13MarContents.kpi2 < '2.8')?'green':(charity13MarContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi3 == null)?'grey-2':(charity13MarContents.kpi3 >= '0' && charity13MarContents.kpi3 <= '2')?'red':(charity13MarContents.kpi3 > '2' && charity13MarContents.kpi3 <= '2.666666667')?'orange':(charity13MarContents.kpi3 > '2.666666667' && charity13MarContents.kpi3 < '3.333333333')?'yellow-7':(charity13MarContents.kpi3 >= '3.333333333' && charity13MarContents.kpi3 < '4')?'green':(charity13MarContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi4 == null)?'grey-2':(charity13MarContents.kpi4 >= '0' && charity13MarContents.kpi4 <= '2.2')?'red':(charity13MarContents.kpi4 > '2.2' && charity13MarContents.kpi4 <= '2.933333333')?'orange':(charity13MarContents.kpi4 > '2.933333333' && charity13MarContents.kpi4 < '3.666666667')?'yellow-7':(charity13MarContents.kpi4 >= '3.666666667' && charity13MarContents.kpi4 < '4.4')?'green':(charity13MarContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi5 == null)?'grey-2':(charity13MarContents.kpi5 >= '0' && charity13MarContents.kpi5 <= '1')?'red':(charity13MarContents.kpi5 > '1' && charity13MarContents.kpi5 <= '1.333333333')?'orange':(charity13MarContents.kpi5 > '1.333333333' && charity13MarContents.kpi5 < '1.666666667')?'yellow-7':(charity13MarContents.kpi5 >= '1.666666667' && charity13MarContents.kpi5 < '2')?'green':(charity13MarContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AprContents.kpi1 == null)?'grey-2':(charity13AprContents.kpi1 >= '0' && charity13AprContents.kpi1 <= '0.8')?'red':(charity13AprContents.kpi1 > '0.8' && charity13AprContents.kpi1 <= '1.066666667')?'orange':(charity13AprContents.kpi1 > '1.066666667' && charity13AprContents.kpi1 < '1.333333333')?'yellow-7':(charity13AprContents.kpi1 >= '1.333333333' && charity13AprContents.kpi1 < '1.6')?'green':(charity13AprContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi2 == null)?'grey-2':(charity13AprContents.kpi2 >= '0' && charity13AprContents.kpi2 <= '1.4')?'red':(charity13AprContents.kpi2 > '1.4' && charity13AprContents.kpi2 <= '1.866666667')?'orange':(charity13AprContents.kpi2 > '1.866666667' && charity13AprContents.kpi2 < '2.333333333')?'yellow-7':(charity13AprContents.kpi2 >= '2.333333333' && charity13AprContents.kpi2 < '2.8')?'green':(charity13AprContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi3 == null)?'grey-2':(charity13AprContents.kpi3 >= '0' && charity13AprContents.kpi3 <= '2')?'red':(charity13AprContents.kpi3 > '2' && charity13AprContents.kpi3 <= '2.666666667')?'orange':(charity13AprContents.kpi3 > '2.666666667' && charity13AprContents.kpi3 < '3.333333333')?'yellow-7':(charity13AprContents.kpi3 >= '3.333333333' && charity13AprContents.kpi3 < '4')?'green':(charity13AprContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi4 == null)?'grey-2':(charity13AprContents.kpi4 >= '0' && charity13AprContents.kpi4 <= '2.2')?'red':(charity13AprContents.kpi4 > '2.2' && charity13AprContents.kpi4 <= '2.933333333')?'orange':(charity13AprContents.kpi4 > '2.933333333' && charity13AprContents.kpi4 < '3.666666667')?'yellow-7':(charity13AprContents.kpi4 >= '3.666666667' && charity13AprContents.kpi4 < '4.4')?'green':(charity13AprContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi5 == null)?'grey-2':(charity13AprContents.kpi5 >= '0' && charity13AprContents.kpi5 <= '1')?'red':(charity13AprContents.kpi5 > '1' && charity13AprContents.kpi5 <= '1.333333333')?'orange':(charity13AprContents.kpi5 > '1.333333333' && charity13AprContents.kpi5 < '1.666666667')?'yellow-7':(charity13AprContents.kpi5 >= '1.666666667' && charity13AprContents.kpi5 < '2')?'green':(charity13AprContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MayContents.kpi1 == null)?'grey-2':(charity13MayContents.kpi1 >= '0' && charity13MayContents.kpi1 <= '0.8')?'red':(charity13MayContents.kpi1 > '0.8' && charity13MayContents.kpi1 <= '1.066666667')?'orange':(charity13MayContents.kpi1 > '1.066666667' && charity13MayContents.kpi1 < '1.333333333')?'yellow-7':(charity13MayContents.kpi1 >= '1.333333333' && charity13MayContents.kpi1 < '1.6')?'green':(charity13MayContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi2 == null)?'grey-2':(charity13MayContents.kpi2 >= '0' && charity13MayContents.kpi2 <= '1.4')?'red':(charity13MayContents.kpi2 > '1.4' && charity13MayContents.kpi2 <= '1.866666667')?'orange':(charity13MayContents.kpi2 > '1.866666667' && charity13MayContents.kpi2 < '2.333333333')?'yellow-7':(charity13MayContents.kpi2 >= '2.333333333' && charity13MayContents.kpi2 < '2.8')?'green':(charity13MayContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi3 == null)?'grey-2':(charity13MayContents.kpi3 >= '0' && charity13MayContents.kpi3 <= '2')?'red':(charity13MayContents.kpi3 > '2' && charity13MayContents.kpi3 <= '2.666666667')?'orange':(charity13MayContents.kpi3 > '2.666666667' && charity13MayContents.kpi3 < '3.333333333')?'yellow-7':(charity13MayContents.kpi3 >= '3.333333333' && charity13MayContents.kpi3 < '4')?'green':(charity13MayContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi4 == null)?'grey-2':(charity13MayContents.kpi4 >= '0' && charity13MayContents.kpi4 <= '2.2')?'red':(charity13MayContents.kpi4 > '2.2' && charity13MayContents.kpi4 <= '2.933333333')?'orange':(charity13MayContents.kpi4 > '2.933333333' && charity13MayContents.kpi4 < '3.666666667')?'yellow-7':(charity13MayContents.kpi4 >= '3.666666667' && charity13MayContents.kpi4 < '4.4')?'green':(charity13MayContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi5 == null)?'grey-2':(charity13MayContents.kpi5 >= '0' && charity13MayContents.kpi5 <= '1')?'red':(charity13MayContents.kpi5 > '1' && charity13MayContents.kpi5 <= '1.333333333')?'orange':(charity13MayContents.kpi5 > '1.333333333' && charity13MayContents.kpi5 < '1.666666667')?'yellow-7':(charity13MayContents.kpi5 >= '1.666666667' && charity13MayContents.kpi5 < '2')?'green':(charity13MayContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JunContents.kpi1 == null)?'grey-2':(charity13JunContents.kpi1 >= '0' && charity13JunContents.kpi1 <= '0.8')?'red':(charity13JunContents.kpi1 > '0.8' && charity13JunContents.kpi1 <= '1.066666667')?'orange':(charity13JunContents.kpi1 > '1.066666667' && charity13JunContents.kpi1 < '1.333333333')?'yellow-7':(charity13JunContents.kpi1 >= '1.333333333' && charity13JunContents.kpi1 < '1.6')?'green':(charity13JunContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi2 == null)?'grey-2':(charity13JunContents.kpi2 >= '0' && charity13JunContents.kpi2 <= '1.4')?'red':(charity13JunContents.kpi2 > '1.4' && charity13JunContents.kpi2 <= '1.866666667')?'orange':(charity13JunContents.kpi2 > '1.866666667' && charity13JunContents.kpi2 < '2.333333333')?'yellow-7':(charity13JunContents.kpi2 >= '2.333333333' && charity13JunContents.kpi2 < '2.8')?'green':(charity13JunContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi3 == null)?'grey-2':(charity13JunContents.kpi3 >= '0' && charity13JunContents.kpi3 <= '2')?'red':(charity13JunContents.kpi3 > '2' && charity13JunContents.kpi3 <= '2.666666667')?'orange':(charity13JunContents.kpi3 > '2.666666667' && charity13JunContents.kpi3 < '3.333333333')?'yellow-7':(charity13JunContents.kpi3 >= '3.333333333' && charity13JunContents.kpi3 < '4')?'green':(charity13JunContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi4 == null)?'grey-2':(charity13JunContents.kpi4 >= '0' && charity13JunContents.kpi4 <= '2.2')?'red':(charity13JunContents.kpi4 > '2.2' && charity13JunContents.kpi4 <= '2.933333333')?'orange':(charity13JunContents.kpi4 > '2.933333333' && charity13JunContents.kpi4 < '3.666666667')?'yellow-7':(charity13JunContents.kpi4 >= '3.666666667' && charity13JunContents.kpi4 < '4.4')?'green':(charity13JunContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi5 == null)?'grey-2':(charity13JunContents.kpi5 >= '0' && charity13JunContents.kpi5 <= '1')?'red':(charity13JunContents.kpi5 > '1' && charity13JunContents.kpi5 <= '1.333333333')?'orange':(charity13JunContents.kpi5 > '1.333333333' && charity13JunContents.kpi5 < '1.666666667')?'yellow-7':(charity13JunContents.kpi5 >= '1.666666667' && charity13JunContents.kpi5 < '2')?'green':(charity13JunContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JulContents.kpi1 == null)?'grey-2':(charity13JulContents.kpi1 >= '0' && charity13JulContents.kpi1 <= '0.8')?'red':(charity13JulContents.kpi1 > '0.8' && charity13JulContents.kpi1 <= '1.066666667')?'orange':(charity13JulContents.kpi1 > '1.066666667' && charity13JulContents.kpi1 < '1.333333333')?'yellow-7':(charity13JulContents.kpi1 >= '1.333333333' && charity13JulContents.kpi1 < '1.6')?'green':(charity13JulContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi2 == null)?'grey-2':(charity13JulContents.kpi2 >= '0' && charity13JulContents.kpi2 <= '1.4')?'red':(charity13JulContents.kpi2 > '1.4' && charity13JulContents.kpi2 <= '1.866666667')?'orange':(charity13JulContents.kpi2 > '1.866666667' && charity13JulContents.kpi2 < '2.333333333')?'yellow-7':(charity13JulContents.kpi2 >= '2.333333333' && charity13JulContents.kpi2 < '2.8')?'green':(charity13JulContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi3 == null)?'grey-2':(charity13JulContents.kpi3 >= '0' && charity13JulContents.kpi3 <= '2')?'red':(charity13JulContents.kpi3 > '2' && charity13JulContents.kpi3 <= '2.666666667')?'orange':(charity13JulContents.kpi3 > '2.666666667' && charity13JulContents.kpi3 < '3.333333333')?'yellow-7':(charity13JulContents.kpi3 >= '3.333333333' && charity13JulContents.kpi3 < '4')?'green':(charity13JulContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi4 == null)?'grey-2':(charity13JulContents.kpi4 >= '0' && charity13JulContents.kpi4 <= '2.2')?'red':(charity13JulContents.kpi4 > '2.2' && charity13JulContents.kpi4 <= '2.933333333')?'orange':(charity13JulContents.kpi4 > '2.933333333' && charity13JulContents.kpi4 < '3.666666667')?'yellow-7':(charity13JulContents.kpi4 >= '3.666666667' && charity13JulContents.kpi4 < '4.4')?'green':(charity13JulContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi5 == null)?'grey-2':(charity13JulContents.kpi5 >= '0' && charity13JulContents.kpi5 <= '1')?'red':(charity13JulContents.kpi5 > '1' && charity13JulContents.kpi5 <= '1.333333333')?'orange':(charity13JulContents.kpi5 > '1.333333333' && charity13JulContents.kpi5 < '1.666666667')?'yellow-7':(charity13JulContents.kpi5 >= '1.666666667' && charity13JulContents.kpi5 < '2')?'green':(charity13JulContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AugContents.kpi1 == null)?'grey-2':(charity13AugContents.kpi1 >= '0' && charity13AugContents.kpi1 <= '0.8')?'red':(charity13AugContents.kpi1 > '0.8' && charity13AugContents.kpi1 <= '1.066666667')?'orange':(charity13AugContents.kpi1 > '1.066666667' && charity13AugContents.kpi1 < '1.333333333')?'yellow-7':(charity13AugContents.kpi1 >= '1.333333333' && charity13AugContents.kpi1 < '1.6')?'green':(charity13AugContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi2 == null)?'grey-2':(charity13AugContents.kpi2 >= '0' && charity13AugContents.kpi2 <= '1.4')?'red':(charity13AugContents.kpi2 > '1.4' && charity13AugContents.kpi2 <= '1.866666667')?'orange':(charity13AugContents.kpi2 > '1.866666667' && charity13AugContents.kpi2 < '2.333333333')?'yellow-7':(charity13AugContents.kpi2 >= '2.333333333' && charity13AugContents.kpi2 < '2.8')?'green':(charity13AugContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi3 == null)?'grey-2':(charity13AugContents.kpi3 >= '0' && charity13AugContents.kpi3 <= '2')?'red':(charity13AugContents.kpi3 > '2' && charity13AugContents.kpi3 <= '2.666666667')?'orange':(charity13AugContents.kpi3 > '2.666666667' && charity13AugContents.kpi3 < '3.333333333')?'yellow-7':(charity13AugContents.kpi3 >= '3.333333333' && charity13AugContents.kpi3 < '4')?'green':(charity13AugContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi4 == null)?'grey-2':(charity13AugContents.kpi4 >= '0' && charity13AugContents.kpi4 <= '2.2')?'red':(charity13AugContents.kpi4 > '2.2' && charity13AugContents.kpi4 <= '2.933333333')?'orange':(charity13AugContents.kpi4 > '2.933333333' && charity13AugContents.kpi4 < '3.666666667')?'yellow-7':(charity13AugContents.kpi4 >= '3.666666667' && charity13AugContents.kpi4 < '4.4')?'green':(charity13AugContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi5 == null)?'grey-2':(charity13AugContents.kpi5 >= '0' && charity13AugContents.kpi5 <= '1')?'red':(charity13AugContents.kpi5 > '1' && charity13AugContents.kpi5 <= '1.333333333')?'orange':(charity13AugContents.kpi5 > '1.333333333' && charity13AugContents.kpi5 < '1.666666667')?'yellow-7':(charity13AugContents.kpi5 >= '1.666666667' && charity13AugContents.kpi5 < '2')?'green':(charity13AugContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13SepContents.kpi1 == null)?'grey-2':(charity13SepContents.kpi1 >= '0' && charity13SepContents.kpi1 <= '0.8')?'red':(charity13SepContents.kpi1 > '0.8' && charity13SepContents.kpi1 <= '1.066666667')?'orange':(charity13SepContents.kpi1 > '1.066666667' && charity13SepContents.kpi1 < '1.333333333')?'yellow-7':(charity13SepContents.kpi1 >= '1.333333333' && charity13SepContents.kpi1 < '1.6')?'green':(charity13SepContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi2 == null)?'grey-2':(charity13SepContents.kpi2 >= '0' && charity13SepContents.kpi2 <= '1.4')?'red':(charity13SepContents.kpi2 > '1.4' && charity13SepContents.kpi2 <= '1.866666667')?'orange':(charity13SepContents.kpi2 > '1.866666667' && charity13SepContents.kpi2 < '2.333333333')?'yellow-7':(charity13SepContents.kpi2 >= '2.333333333' && charity13SepContents.kpi2 < '2.8')?'green':(charity13SepContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi3 == null)?'grey-2':(charity13SepContents.kpi3 >= '0' && charity13SepContents.kpi3 <= '2')?'red':(charity13SepContents.kpi3 > '2' && charity13SepContents.kpi3 <= '2.666666667')?'orange':(charity13SepContents.kpi3 > '2.666666667' && charity13SepContents.kpi3 < '3.333333333')?'yellow-7':(charity13SepContents.kpi3 >= '3.333333333' && charity13SepContents.kpi3 < '4')?'green':(charity13SepContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi4 == null)?'grey-2':(charity13SepContents.kpi4 >= '0' && charity13SepContents.kpi4 <= '2.2')?'red':(charity13SepContents.kpi4 > '2.2' && charity13SepContents.kpi4 <= '2.933333333')?'orange':(charity13SepContents.kpi4 > '2.933333333' && charity13SepContents.kpi4 < '3.666666667')?'yellow-7':(charity13SepContents.kpi4 >= '3.666666667' && charity13SepContents.kpi4 < '4.4')?'green':(charity13SepContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi5 == null)?'grey-2':(charity13SepContents.kpi5 >= '0' && charity13SepContents.kpi5 <= '1')?'red':(charity13SepContents.kpi5 > '1' && charity13SepContents.kpi5 <= '1.333333333')?'orange':(charity13SepContents.kpi5 > '1.333333333' && charity13SepContents.kpi5 < '1.666666667')?'yellow-7':(charity13SepContents.kpi5 >= '1.666666667' && charity13SepContents.kpi5 < '2')?'green':(charity13SepContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13OctContents.kpi1 == null)?'grey-2':(charity13OctContents.kpi1 >= '0' && charity13OctContents.kpi1 <= '0.8')?'red':(charity13OctContents.kpi1 > '0.8' && charity13OctContents.kpi1 <= '1.066666667')?'orange':(charity13OctContents.kpi1 > '1.066666667' && charity13OctContents.kpi1 < '1.333333333')?'yellow-7':(charity13OctContents.kpi1 >= '1.333333333' && charity13OctContents.kpi1 < '1.6')?'green':(charity13OctContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi2 == null)?'grey-2':(charity13OctContents.kpi2 >= '0' && charity13OctContents.kpi2 <= '1.4')?'red':(charity13OctContents.kpi2 > '1.4' && charity13OctContents.kpi2 <= '1.866666667')?'orange':(charity13OctContents.kpi2 > '1.866666667' && charity13OctContents.kpi2 < '2.333333333')?'yellow-7':(charity13OctContents.kpi2 >= '2.333333333' && charity13OctContents.kpi2 < '2.8')?'green':(charity13OctContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi3 == null)?'grey-2':(charity13OctContents.kpi3 >= '0' && charity13OctContents.kpi3 <= '2')?'red':(charity13OctContents.kpi3 > '2' && charity13OctContents.kpi3 <= '2.666666667')?'orange':(charity13OctContents.kpi3 > '2.666666667' && charity13OctContents.kpi3 < '3.333333333')?'yellow-7':(charity13OctContents.kpi3 >= '3.333333333' && charity13OctContents.kpi3 < '4')?'green':(charity13OctContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi4 == null)?'grey-2':(charity13OctContents.kpi4 >= '0' && charity13OctContents.kpi4 <= '2.2')?'red':(charity13OctContents.kpi4 > '2.2' && charity13OctContents.kpi4 <= '2.933333333')?'orange':(charity13OctContents.kpi4 > '2.933333333' && charity13OctContents.kpi4 < '3.666666667')?'yellow-7':(charity13OctContents.kpi4 >= '3.666666667' && charity13OctContents.kpi4 < '4.4')?'green':(charity13OctContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi5 == null)?'grey-2':(charity13OctContents.kpi5 >= '0' && charity13OctContents.kpi5 <= '1')?'red':(charity13OctContents.kpi5 > '1' && charity13OctContents.kpi5 <= '1.333333333')?'orange':(charity13OctContents.kpi5 > '1.333333333' && charity13OctContents.kpi5 < '1.666666667')?'yellow-7':(charity13OctContents.kpi5 >= '1.666666667' && charity13OctContents.kpi5 < '2')?'green':(charity13OctContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13NovContents.kpi1 == null)?'grey-2':(charity13NovContents.kpi1 >= '0' && charity13NovContents.kpi1 <= '0.8')?'red':(charity13NovContents.kpi1 > '0.8' && charity13NovContents.kpi1 <= '1.066666667')?'orange':(charity13NovContents.kpi1 > '1.066666667' && charity13NovContents.kpi1 < '1.333333333')?'yellow-7':(charity13NovContents.kpi1 >= '1.333333333' && charity13NovContents.kpi1 < '1.6')?'green':(charity13NovContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi2 == null)?'grey-2':(charity13NovContents.kpi2 >= '0' && charity13NovContents.kpi2 <= '1.4')?'red':(charity13NovContents.kpi2 > '1.4' && charity13NovContents.kpi2 <= '1.866666667')?'orange':(charity13NovContents.kpi2 > '1.866666667' && charity13NovContents.kpi2 < '2.333333333')?'yellow-7':(charity13NovContents.kpi2 >= '2.333333333' && charity13NovContents.kpi2 < '2.8')?'green':(charity13NovContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi3 == null)?'grey-2':(charity13NovContents.kpi3 >= '0' && charity13NovContents.kpi3 <= '2')?'red':(charity13NovContents.kpi3 > '2' && charity13NovContents.kpi3 <= '2.666666667')?'orange':(charity13NovContents.kpi3 > '2.666666667' && charity13NovContents.kpi3 < '3.333333333')?'yellow-7':(charity13NovContents.kpi3 >= '3.333333333' && charity13NovContents.kpi3 < '4')?'green':(charity13NovContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi4 == null)?'grey-2':(charity13NovContents.kpi4 >= '0' && charity13NovContents.kpi4 <= '2.2')?'red':(charity13NovContents.kpi4 > '2.2' && charity13NovContents.kpi4 <= '2.933333333')?'orange':(charity13NovContents.kpi4 > '2.933333333' && charity13NovContents.kpi4 < '3.666666667')?'yellow-7':(charity13NovContents.kpi4 >= '3.666666667' && charity13NovContents.kpi4 < '4.4')?'green':(charity13NovContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi5 == null)?'grey-2':(charity13NovContents.kpi5 >= '0' && charity13NovContents.kpi5 <= '1')?'red':(charity13NovContents.kpi5 > '1' && charity13NovContents.kpi5 <= '1.333333333')?'orange':(charity13NovContents.kpi5 > '1.333333333' && charity13NovContents.kpi5 < '1.666666667')?'yellow-7':(charity13NovContents.kpi5 >= '1.666666667' && charity13NovContents.kpi5 < '2')?'green':(charity13NovContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13DecContents.kpi1 == null)?'grey-2':(charity13DecContents.kpi1 >= '0' && charity13DecContents.kpi1 <= '0.8')?'red':(charity13DecContents.kpi1 > '0.8' && charity13DecContents.kpi1 <= '1.066666667')?'orange':(charity13DecContents.kpi1 > '1.066666667' && charity13DecContents.kpi1 < '1.333333333')?'yellow-7':(charity13DecContents.kpi1 >= '1.333333333' && charity13DecContents.kpi1 < '1.6')?'green':(charity13DecContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi2 == null)?'grey-2':(charity13DecContents.kpi2 >= '0' && charity13DecContents.kpi2 <= '1.4')?'red':(charity13DecContents.kpi2 > '1.4' && charity13DecContents.kpi2 <= '1.866666667')?'orange':(charity13DecContents.kpi2 > '1.866666667' && charity13DecContents.kpi2 < '2.333333333')?'yellow-7':(charity13DecContents.kpi2 >= '2.333333333' && charity13DecContents.kpi2 < '2.8')?'green':(charity13DecContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi3 == null)?'grey-2':(charity13DecContents.kpi3 >= '0' && charity13DecContents.kpi3 <= '2')?'red':(charity13DecContents.kpi3 > '2' && charity13DecContents.kpi3 <= '2.666666667')?'orange':(charity13DecContents.kpi3 > '2.666666667' && charity13DecContents.kpi3 < '3.333333333')?'yellow-7':(charity13DecContents.kpi3 >= '3.333333333' && charity13DecContents.kpi3 < '4')?'green':(charity13DecContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi4 == null)?'grey-2':(charity13DecContents.kpi4 >= '0' && charity13DecContents.kpi4 <= '2.2')?'red':(charity13DecContents.kpi4 > '2.2' && charity13DecContents.kpi4 <= '2.933333333')?'orange':(charity13DecContents.kpi4 > '2.933333333' && charity13DecContents.kpi4 < '3.666666667')?'yellow-7':(charity13DecContents.kpi4 >= '3.666666667' && charity13DecContents.kpi4 < '4.4')?'green':(charity13DecContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi5 == null)?'grey-2':(charity13DecContents.kpi5 >= '0' && charity13DecContents.kpi5 <= '1')?'red':(charity13DecContents.kpi5 > '1' && charity13DecContents.kpi5 <= '1.333333333')?'orange':(charity13DecContents.kpi5 > '1.333333333' && charity13DecContents.kpi5 < '1.666666667')?'yellow-7':(charity13DecContents.kpi5 >= '1.666666667' && charity13DecContents.kpi5 < '2')?'green':(charity13DecContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JanContents.kpi1 == null)?'grey-2':(charity13JanContents.kpi1 >= '0' && charity13JanContents.kpi1 <= '0.8')?'red':(charity13JanContents.kpi1 > '0.8' && charity13JanContents.kpi1 <= '1.066666667')?'orange':(charity13JanContents.kpi1 > '1.066666667' && charity13JanContents.kpi1 < '1.333333333')?'yellow-7':(charity13JanContents.kpi1 >= '1.333333333' && charity13JanContents.kpi1 < '1.6')?'green':(charity13JanContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi2 == null)?'grey-2':(charity13JanContents.kpi2 >= '0' && charity13JanContents.kpi2 <= '1.4')?'red':(charity13JanContents.kpi2 > '1.4' && charity13JanContents.kpi2 <= '1.866666667')?'orange':(charity13JanContents.kpi2 > '1.866666667' && charity13JanContents.kpi2 < '2.333333333')?'yellow-7':(charity13JanContents.kpi2 >= '2.333333333' && charity13JanContents.kpi2 < '2.8')?'green':(charity13JanContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi3 == null)?'grey-2':(charity13JanContents.kpi3 >= '0' && charity13JanContents.kpi3 <= '2')?'red':(charity13JanContents.kpi3 > '2' && charity13JanContents.kpi3 <= '2.666666667')?'orange':(charity13JanContents.kpi3 > '2.666666667' && charity13JanContents.kpi3 < '3.333333333')?'yellow-7':(charity13JanContents.kpi3 >= '3.333333333' && charity13JanContents.kpi3 < '4')?'green':(charity13JanContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi4 == null)?'grey-2':(charity13JanContents.kpi4 >= '0' && charity13JanContents.kpi4 <= '2.2')?'red':(charity13JanContents.kpi4 > '2.2' && charity13JanContents.kpi4 <= '2.933333333')?'orange':(charity13JanContents.kpi4 > '2.933333333' && charity13JanContents.kpi4 < '3.666666667')?'yellow-7':(charity13JanContents.kpi4 >= '3.666666667' && charity13JanContents.kpi4 < '4.4')?'green':(charity13JanContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JanContents.kpi5 == null)?'grey-2':(charity13JanContents.kpi5 >= '0' && charity13JanContents.kpi5 <= '1')?'red':(charity13JanContents.kpi5 > '1' && charity13JanContents.kpi5 <= '1.333333333')?'orange':(charity13JanContents.kpi5 > '1.333333333' && charity13JanContents.kpi5 < '1.666666667')?'yellow-7':(charity13JanContents.kpi5 >= '1.666666667' && charity13JanContents.kpi5 < '2')?'green':(charity13JanContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JanContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13FebContents.kpi1 == null)?'grey-2':(charity13FebContents.kpi1 >= '0' && charity13FebContents.kpi1 <= '0.8')?'red':(charity13FebContents.kpi1 > '0.8' && charity13FebContents.kpi1 <= '1.066666667')?'orange':(charity13FebContents.kpi1 > '1.066666667' && charity13FebContents.kpi1 < '1.333333333')?'yellow-7':(charity13FebContents.kpi1 >= '1.333333333' && charity13FebContents.kpi1 < '1.6')?'green':(charity13FebContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi2 == null)?'grey-2':(charity13FebContents.kpi2 >= '0' && charity13FebContents.kpi2 <= '1.4')?'red':(charity13FebContents.kpi2 > '1.4' && charity13FebContents.kpi2 <= '1.866666667')?'orange':(charity13FebContents.kpi2 > '1.866666667' && charity13FebContents.kpi2 < '2.333333333')?'yellow-7':(charity13FebContents.kpi2 >= '2.333333333' && charity13FebContents.kpi2 < '2.8')?'green':(charity13FebContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi3 == null)?'grey-2':(charity13FebContents.kpi3 >= '0' && charity13FebContents.kpi3 <= '2')?'red':(charity13FebContents.kpi3 > '2' && charity13FebContents.kpi3 <= '2.666666667')?'orange':(charity13FebContents.kpi3 > '2.666666667' && charity13FebContents.kpi3 < '3.333333333')?'yellow-7':(charity13FebContents.kpi3 >= '3.333333333' && charity13FebContents.kpi3 < '4')?'green':(charity13FebContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi4 == null)?'grey-2':(charity13FebContents.kpi4 >= '0' && charity13FebContents.kpi4 <= '2.2')?'red':(charity13FebContents.kpi4 > '2.2' && charity13FebContents.kpi4 <= '2.933333333')?'orange':(charity13FebContents.kpi4 > '2.933333333' && charity13FebContents.kpi4 < '3.666666667')?'yellow-7':(charity13FebContents.kpi4 >= '3.666666667' && charity13FebContents.kpi4 < '4.4')?'green':(charity13FebContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13FebContents.kpi5 == null)?'grey-2':(charity13FebContents.kpi5 >= '0' && charity13FebContents.kpi5 <= '1')?'red':(charity13FebContents.kpi5 > '1' && charity13FebContents.kpi5 <= '1.333333333')?'orange':(charity13FebContents.kpi5 > '1.333333333' && charity13FebContents.kpi5 < '1.666666667')?'yellow-7':(charity13FebContents.kpi5 >= '1.666666667' && charity13FebContents.kpi5 < '2')?'green':(charity13FebContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13FebContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MarContents.kpi1 == null)?'grey-2':(charity13MarContents.kpi1 >= '0' && charity13MarContents.kpi1 <= '0.8')?'red':(charity13MarContents.kpi1 > '0.8' && charity13MarContents.kpi1 <= '1.066666667')?'orange':(charity13MarContents.kpi1 > '1.066666667' && charity13MarContents.kpi1 < '1.333333333')?'yellow-7':(charity13MarContents.kpi1 >= '1.333333333' && charity13MarContents.kpi1 < '1.6')?'green':(charity13MarContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi2 == null)?'grey-2':(charity13MarContents.kpi2 >= '0' && charity13MarContents.kpi2 <= '1.4')?'red':(charity13MarContents.kpi2 > '1.4' && charity13MarContents.kpi2 <= '1.866666667')?'orange':(charity13MarContents.kpi2 > '1.866666667' && charity13MarContents.kpi2 < '2.333333333')?'yellow-7':(charity13MarContents.kpi2 >= '2.333333333' && charity13MarContents.kpi2 < '2.8')?'green':(charity13MarContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi3 == null)?'grey-2':(charity13MarContents.kpi3 >= '0' && charity13MarContents.kpi3 <= '2')?'red':(charity13MarContents.kpi3 > '2' && charity13MarContents.kpi3 <= '2.666666667')?'orange':(charity13MarContents.kpi3 > '2.666666667' && charity13MarContents.kpi3 < '3.333333333')?'yellow-7':(charity13MarContents.kpi3 >= '3.333333333' && charity13MarContents.kpi3 < '4')?'green':(charity13MarContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi4 == null)?'grey-2':(charity13MarContents.kpi4 >= '0' && charity13MarContents.kpi4 <= '2.2')?'red':(charity13MarContents.kpi4 > '2.2' && charity13MarContents.kpi4 <= '2.933333333')?'orange':(charity13MarContents.kpi4 > '2.933333333' && charity13MarContents.kpi4 < '3.666666667')?'yellow-7':(charity13MarContents.kpi4 >= '3.666666667' && charity13MarContents.kpi4 < '4.4')?'green':(charity13MarContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MarContents.kpi5 == null)?'grey-2':(charity13MarContents.kpi5 >= '0' && charity13MarContents.kpi5 <= '1')?'red':(charity13MarContents.kpi5 > '1' && charity13MarContents.kpi5 <= '1.333333333')?'orange':(charity13MarContents.kpi5 > '1.333333333' && charity13MarContents.kpi5 < '1.666666667')?'yellow-7':(charity13MarContents.kpi5 >= '1.666666667' && charity13MarContents.kpi5 < '2')?'green':(charity13MarContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MarContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AprContents.kpi1 == null)?'grey-2':(charity13AprContents.kpi1 >= '0' && charity13AprContents.kpi1 <= '0.8')?'red':(charity13AprContents.kpi1 > '0.8' && charity13AprContents.kpi1 <= '1.066666667')?'orange':(charity13AprContents.kpi1 > '1.066666667' && charity13AprContents.kpi1 < '1.333333333')?'yellow-7':(charity13AprContents.kpi1 >= '1.333333333' && charity13AprContents.kpi1 < '1.6')?'green':(charity13AprContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi2 == null)?'grey-2':(charity13AprContents.kpi2 >= '0' && charity13AprContents.kpi2 <= '1.4')?'red':(charity13AprContents.kpi2 > '1.4' && charity13AprContents.kpi2 <= '1.866666667')?'orange':(charity13AprContents.kpi2 > '1.866666667' && charity13AprContents.kpi2 < '2.333333333')?'yellow-7':(charity13AprContents.kpi2 >= '2.333333333' && charity13AprContents.kpi2 < '2.8')?'green':(charity13AprContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi3 == null)?'grey-2':(charity13AprContents.kpi3 >= '0' && charity13AprContents.kpi3 <= '2')?'red':(charity13AprContents.kpi3 > '2' && charity13AprContents.kpi3 <= '2.666666667')?'orange':(charity13AprContents.kpi3 > '2.666666667' && charity13AprContents.kpi3 < '3.333333333')?'yellow-7':(charity13AprContents.kpi3 >= '3.333333333' && charity13AprContents.kpi3 < '4')?'green':(charity13AprContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi4 == null)?'grey-2':(charity13AprContents.kpi4 >= '0' && charity13AprContents.kpi4 <= '2.2')?'red':(charity13AprContents.kpi4 > '2.2' && charity13AprContents.kpi4 <= '2.933333333')?'orange':(charity13AprContents.kpi4 > '2.933333333' && charity13AprContents.kpi4 < '3.666666667')?'yellow-7':(charity13AprContents.kpi4 >= '3.666666667' && charity13AprContents.kpi4 < '4.4')?'green':(charity13AprContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AprContents.kpi5 == null)?'grey-2':(charity13AprContents.kpi5 >= '0' && charity13AprContents.kpi5 <= '1')?'red':(charity13AprContents.kpi5 > '1' && charity13AprContents.kpi5 <= '1.333333333')?'orange':(charity13AprContents.kpi5 > '1.333333333' && charity13AprContents.kpi5 < '1.666666667')?'yellow-7':(charity13AprContents.kpi5 >= '1.666666667' && charity13AprContents.kpi5 < '2')?'green':(charity13AprContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AprContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13MayContents.kpi1 == null)?'grey-2':(charity13MayContents.kpi1 >= '0' && charity13MayContents.kpi1 <= '0.8')?'red':(charity13MayContents.kpi1 > '0.8' && charity13MayContents.kpi1 <= '1.066666667')?'orange':(charity13MayContents.kpi1 > '1.066666667' && charity13MayContents.kpi1 < '1.333333333')?'yellow-7':(charity13MayContents.kpi1 >= '1.333333333' && charity13MayContents.kpi1 < '1.6')?'green':(charity13MayContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi2 == null)?'grey-2':(charity13MayContents.kpi2 >= '0' && charity13MayContents.kpi2 <= '1.4')?'red':(charity13MayContents.kpi2 > '1.4' && charity13MayContents.kpi2 <= '1.866666667')?'orange':(charity13MayContents.kpi2 > '1.866666667' && charity13MayContents.kpi2 < '2.333333333')?'yellow-7':(charity13MayContents.kpi2 >= '2.333333333' && charity13MayContents.kpi2 < '2.8')?'green':(charity13MayContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi3 == null)?'grey-2':(charity13MayContents.kpi3 >= '0' && charity13MayContents.kpi3 <= '2')?'red':(charity13MayContents.kpi3 > '2' && charity13MayContents.kpi3 <= '2.666666667')?'orange':(charity13MayContents.kpi3 > '2.666666667' && charity13MayContents.kpi3 < '3.333333333')?'yellow-7':(charity13MayContents.kpi3 >= '3.333333333' && charity13MayContents.kpi3 < '4')?'green':(charity13MayContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi4 == null)?'grey-2':(charity13MayContents.kpi4 >= '0' && charity13MayContents.kpi4 <= '2.2')?'red':(charity13MayContents.kpi4 > '2.2' && charity13MayContents.kpi4 <= '2.933333333')?'orange':(charity13MayContents.kpi4 > '2.933333333' && charity13MayContents.kpi4 < '3.666666667')?'yellow-7':(charity13MayContents.kpi4 >= '3.666666667' && charity13MayContents.kpi4 < '4.4')?'green':(charity13MayContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13MayContents.kpi5 == null)?'grey-2':(charity13MayContents.kpi5 >= '0' && charity13MayContents.kpi5 <= '1')?'red':(charity13MayContents.kpi5 > '1' && charity13MayContents.kpi5 <= '1.333333333')?'orange':(charity13MayContents.kpi5 > '1.333333333' && charity13MayContents.kpi5 < '1.666666667')?'yellow-7':(charity13MayContents.kpi5 >= '1.666666667' && charity13MayContents.kpi5 < '2')?'green':(charity13MayContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13MayContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JunContents.kpi1 == null)?'grey-2':(charity13JunContents.kpi1 >= '0' && charity13JunContents.kpi1 <= '0.8')?'red':(charity13JunContents.kpi1 > '0.8' && charity13JunContents.kpi1 <= '1.066666667')?'orange':(charity13JunContents.kpi1 > '1.066666667' && charity13JunContents.kpi1 < '1.333333333')?'yellow-7':(charity13JunContents.kpi1 >= '1.333333333' && charity13JunContents.kpi1 < '1.6')?'green':(charity13JunContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi2 == null)?'grey-2':(charity13JunContents.kpi2 >= '0' && charity13JunContents.kpi2 <= '1.4')?'red':(charity13JunContents.kpi2 > '1.4' && charity13JunContents.kpi2 <= '1.866666667')?'orange':(charity13JunContents.kpi2 > '1.866666667' && charity13JunContents.kpi2 < '2.333333333')?'yellow-7':(charity13JunContents.kpi2 >= '2.333333333' && charity13JunContents.kpi2 < '2.8')?'green':(charity13JunContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi3 == null)?'grey-2':(charity13JunContents.kpi3 >= '0' && charity13JunContents.kpi3 <= '2')?'red':(charity13JunContents.kpi3 > '2' && charity13JunContents.kpi3 <= '2.666666667')?'orange':(charity13JunContents.kpi3 > '2.666666667' && charity13JunContents.kpi3 < '3.333333333')?'yellow-7':(charity13JunContents.kpi3 >= '3.333333333' && charity13JunContents.kpi3 < '4')?'green':(charity13JunContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi4 == null)?'grey-2':(charity13JunContents.kpi4 >= '0' && charity13JunContents.kpi4 <= '2.2')?'red':(charity13JunContents.kpi4 > '2.2' && charity13JunContents.kpi4 <= '2.933333333')?'orange':(charity13JunContents.kpi4 > '2.933333333' && charity13JunContents.kpi4 < '3.666666667')?'yellow-7':(charity13JunContents.kpi4 >= '3.666666667' && charity13JunContents.kpi4 < '4.4')?'green':(charity13JunContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JunContents.kpi5 == null)?'grey-2':(charity13JunContents.kpi5 >= '0' && charity13JunContents.kpi5 <= '1')?'red':(charity13JunContents.kpi5 > '1' && charity13JunContents.kpi5 <= '1.333333333')?'orange':(charity13JunContents.kpi5 > '1.333333333' && charity13JunContents.kpi5 < '1.666666667')?'yellow-7':(charity13JunContents.kpi5 >= '1.666666667' && charity13JunContents.kpi5 < '2')?'green':(charity13JunContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JunContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13JulContents.kpi1 == null)?'grey-2':(charity13JulContents.kpi1 >= '0' && charity13JulContents.kpi1 <= '0.8')?'red':(charity13JulContents.kpi1 > '0.8' && charity13JulContents.kpi1 <= '1.066666667')?'orange':(charity13JulContents.kpi1 > '1.066666667' && charity13JulContents.kpi1 < '1.333333333')?'yellow-7':(charity13JulContents.kpi1 >= '1.333333333' && charity13JulContents.kpi1 < '1.6')?'green':(charity13JulContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi2 == null)?'grey-2':(charity13JulContents.kpi2 >= '0' && charity13JulContents.kpi2 <= '1.4')?'red':(charity13JulContents.kpi2 > '1.4' && charity13JulContents.kpi2 <= '1.866666667')?'orange':(charity13JulContents.kpi2 > '1.866666667' && charity13JulContents.kpi2 < '2.333333333')?'yellow-7':(charity13JulContents.kpi2 >= '2.333333333' && charity13JulContents.kpi2 < '2.8')?'green':(charity13JulContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi3 == null)?'grey-2':(charity13JulContents.kpi3 >= '0' && charity13JulContents.kpi3 <= '2')?'red':(charity13JulContents.kpi3 > '2' && charity13JulContents.kpi3 <= '2.666666667')?'orange':(charity13JulContents.kpi3 > '2.666666667' && charity13JulContents.kpi3 < '3.333333333')?'yellow-7':(charity13JulContents.kpi3 >= '3.333333333' && charity13JulContents.kpi3 < '4')?'green':(charity13JulContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi4 == null)?'grey-2':(charity13JulContents.kpi4 >= '0' && charity13JulContents.kpi4 <= '2.2')?'red':(charity13JulContents.kpi4 > '2.2' && charity13JulContents.kpi4 <= '2.933333333')?'orange':(charity13JulContents.kpi4 > '2.933333333' && charity13JulContents.kpi4 < '3.666666667')?'yellow-7':(charity13JulContents.kpi4 >= '3.666666667' && charity13JulContents.kpi4 < '4.4')?'green':(charity13JulContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13JulContents.kpi5 == null)?'grey-2':(charity13JulContents.kpi5 >= '0' && charity13JulContents.kpi5 <= '1')?'red':(charity13JulContents.kpi5 > '1' && charity13JulContents.kpi5 <= '1.333333333')?'orange':(charity13JulContents.kpi5 > '1.333333333' && charity13JulContents.kpi5 < '1.666666667')?'yellow-7':(charity13JulContents.kpi5 >= '1.666666667' && charity13JulContents.kpi5 < '2')?'green':(charity13JulContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13JulContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13AugContents.kpi1 == null)?'grey-2':(charity13AugContents.kpi1 >= '0' && charity13AugContents.kpi1 <= '0.8')?'red':(charity13AugContents.kpi1 > '0.8' && charity13AugContents.kpi1 <= '1.066666667')?'orange':(charity13AugContents.kpi1 > '1.066666667' && charity13AugContents.kpi1 < '1.333333333')?'yellow-7':(charity13AugContents.kpi1 >= '1.333333333' && charity13AugContents.kpi1 < '1.6')?'green':(charity13AugContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi2 == null)?'grey-2':(charity13AugContents.kpi2 >= '0' && charity13AugContents.kpi2 <= '1.4')?'red':(charity13AugContents.kpi2 > '1.4' && charity13AugContents.kpi2 <= '1.866666667')?'orange':(charity13AugContents.kpi2 > '1.866666667' && charity13AugContents.kpi2 < '2.333333333')?'yellow-7':(charity13AugContents.kpi2 >= '2.333333333' && charity13AugContents.kpi2 < '2.8')?'green':(charity13AugContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi3 == null)?'grey-2':(charity13AugContents.kpi3 >= '0' && charity13AugContents.kpi3 <= '2')?'red':(charity13AugContents.kpi3 > '2' && charity13AugContents.kpi3 <= '2.666666667')?'orange':(charity13AugContents.kpi3 > '2.666666667' && charity13AugContents.kpi3 < '3.333333333')?'yellow-7':(charity13AugContents.kpi3 >= '3.333333333' && charity13AugContents.kpi3 < '4')?'green':(charity13AugContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi4 == null)?'grey-2':(charity13AugContents.kpi4 >= '0' && charity13AugContents.kpi4 <= '2.2')?'red':(charity13AugContents.kpi4 > '2.2' && charity13AugContents.kpi4 <= '2.933333333')?'orange':(charity13AugContents.kpi4 > '2.933333333' && charity13AugContents.kpi4 < '3.666666667')?'yellow-7':(charity13AugContents.kpi4 >= '3.666666667' && charity13AugContents.kpi4 < '4.4')?'green':(charity13AugContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13AugContents.kpi5 == null)?'grey-2':(charity13AugContents.kpi5 >= '0' && charity13AugContents.kpi5 <= '1')?'red':(charity13AugContents.kpi5 > '1' && charity13AugContents.kpi5 <= '1.333333333')?'orange':(charity13AugContents.kpi5 > '1.333333333' && charity13AugContents.kpi5 < '1.666666667')?'yellow-7':(charity13AugContents.kpi5 >= '1.666666667' && charity13AugContents.kpi5 < '2')?'green':(charity13AugContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13AugContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13SepContents.kpi1 == null)?'grey-2':(charity13SepContents.kpi1 >= '0' && charity13SepContents.kpi1 <= '0.8')?'red':(charity13SepContents.kpi1 > '0.8' && charity13SepContents.kpi1 <= '1.066666667')?'orange':(charity13SepContents.kpi1 > '1.066666667' && charity13SepContents.kpi1 < '1.333333333')?'yellow-7':(charity13SepContents.kpi1 >= '1.333333333' && charity13SepContents.kpi1 < '1.6')?'green':(charity13SepContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi2 == null)?'grey-2':(charity13SepContents.kpi2 >= '0' && charity13SepContents.kpi2 <= '1.4')?'red':(charity13SepContents.kpi2 > '1.4' && charity13SepContents.kpi2 <= '1.866666667')?'orange':(charity13SepContents.kpi2 > '1.866666667' && charity13SepContents.kpi2 < '2.333333333')?'yellow-7':(charity13SepContents.kpi2 >= '2.333333333' && charity13SepContents.kpi2 < '2.8')?'green':(charity13SepContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi3 == null)?'grey-2':(charity13SepContents.kpi3 >= '0' && charity13SepContents.kpi3 <= '2')?'red':(charity13SepContents.kpi3 > '2' && charity13SepContents.kpi3 <= '2.666666667')?'orange':(charity13SepContents.kpi3 > '2.666666667' && charity13SepContents.kpi3 < '3.333333333')?'yellow-7':(charity13SepContents.kpi3 >= '3.333333333' && charity13SepContents.kpi3 < '4')?'green':(charity13SepContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi4 == null)?'grey-2':(charity13SepContents.kpi4 >= '0' && charity13SepContents.kpi4 <= '2.2')?'red':(charity13SepContents.kpi4 > '2.2' && charity13SepContents.kpi4 <= '2.933333333')?'orange':(charity13SepContents.kpi4 > '2.933333333' && charity13SepContents.kpi4 < '3.666666667')?'yellow-7':(charity13SepContents.kpi4 >= '3.666666667' && charity13SepContents.kpi4 < '4.4')?'green':(charity13SepContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13SepContents.kpi5 == null)?'grey-2':(charity13SepContents.kpi5 >= '0' && charity13SepContents.kpi5 <= '1')?'red':(charity13SepContents.kpi5 > '1' && charity13SepContents.kpi5 <= '1.333333333')?'orange':(charity13SepContents.kpi5 > '1.333333333' && charity13SepContents.kpi5 < '1.666666667')?'yellow-7':(charity13SepContents.kpi5 >= '1.666666667' && charity13SepContents.kpi5 < '2')?'green':(charity13SepContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13SepContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13OctContents.kpi1 == null)?'grey-2':(charity13OctContents.kpi1 >= '0' && charity13OctContents.kpi1 <= '0.8')?'red':(charity13OctContents.kpi1 > '0.8' && charity13OctContents.kpi1 <= '1.066666667')?'orange':(charity13OctContents.kpi1 > '1.066666667' && charity13OctContents.kpi1 < '1.333333333')?'yellow-7':(charity13OctContents.kpi1 >= '1.333333333' && charity13OctContents.kpi1 < '1.6')?'green':(charity13OctContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi2 == null)?'grey-2':(charity13OctContents.kpi2 >= '0' && charity13OctContents.kpi2 <= '1.4')?'red':(charity13OctContents.kpi2 > '1.4' && charity13OctContents.kpi2 <= '1.866666667')?'orange':(charity13OctContents.kpi2 > '1.866666667' && charity13OctContents.kpi2 < '2.333333333')?'yellow-7':(charity13OctContents.kpi2 >= '2.333333333' && charity13OctContents.kpi2 < '2.8')?'green':(charity13OctContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi3 == null)?'grey-2':(charity13OctContents.kpi3 >= '0' && charity13OctContents.kpi3 <= '2')?'red':(charity13OctContents.kpi3 > '2' && charity13OctContents.kpi3 <= '2.666666667')?'orange':(charity13OctContents.kpi3 > '2.666666667' && charity13OctContents.kpi3 < '3.333333333')?'yellow-7':(charity13OctContents.kpi3 >= '3.333333333' && charity13OctContents.kpi3 < '4')?'green':(charity13OctContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi4 == null)?'grey-2':(charity13OctContents.kpi4 >= '0' && charity13OctContents.kpi4 <= '2.2')?'red':(charity13OctContents.kpi4 > '2.2' && charity13OctContents.kpi4 <= '2.933333333')?'orange':(charity13OctContents.kpi4 > '2.933333333' && charity13OctContents.kpi4 < '3.666666667')?'yellow-7':(charity13OctContents.kpi4 >= '3.666666667' && charity13OctContents.kpi4 < '4.4')?'green':(charity13OctContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13OctContents.kpi5 == null)?'grey-2':(charity13OctContents.kpi5 >= '0' && charity13OctContents.kpi5 <= '1')?'red':(charity13OctContents.kpi5 > '1' && charity13OctContents.kpi5 <= '1.333333333')?'orange':(charity13OctContents.kpi5 > '1.333333333' && charity13OctContents.kpi5 < '1.666666667')?'yellow-7':(charity13OctContents.kpi5 >= '1.666666667' && charity13OctContents.kpi5 < '2')?'green':(charity13OctContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13OctContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13NovContents.kpi1 == null)?'grey-2':(charity13NovContents.kpi1 >= '0' && charity13NovContents.kpi1 <= '0.8')?'red':(charity13NovContents.kpi1 > '0.8' && charity13NovContents.kpi1 <= '1.066666667')?'orange':(charity13NovContents.kpi1 > '1.066666667' && charity13NovContents.kpi1 < '1.333333333')?'yellow-7':(charity13NovContents.kpi1 >= '1.333333333' && charity13NovContents.kpi1 < '1.6')?'green':(charity13NovContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi2 == null)?'grey-2':(charity13NovContents.kpi2 >= '0' && charity13NovContents.kpi2 <= '1.4')?'red':(charity13NovContents.kpi2 > '1.4' && charity13NovContents.kpi2 <= '1.866666667')?'orange':(charity13NovContents.kpi2 > '1.866666667' && charity13NovContents.kpi2 < '2.333333333')?'yellow-7':(charity13NovContents.kpi2 >= '2.333333333' && charity13NovContents.kpi2 < '2.8')?'green':(charity13NovContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi3 == null)?'grey-2':(charity13NovContents.kpi3 >= '0' && charity13NovContents.kpi3 <= '2')?'red':(charity13NovContents.kpi3 > '2' && charity13NovContents.kpi3 <= '2.666666667')?'orange':(charity13NovContents.kpi3 > '2.666666667' && charity13NovContents.kpi3 < '3.333333333')?'yellow-7':(charity13NovContents.kpi3 >= '3.333333333' && charity13NovContents.kpi3 < '4')?'green':(charity13NovContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi4 == null)?'grey-2':(charity13NovContents.kpi4 >= '0' && charity13NovContents.kpi4 <= '2.2')?'red':(charity13NovContents.kpi4 > '2.2' && charity13NovContents.kpi4 <= '2.933333333')?'orange':(charity13NovContents.kpi4 > '2.933333333' && charity13NovContents.kpi4 < '3.666666667')?'yellow-7':(charity13NovContents.kpi4 >= '3.666666667' && charity13NovContents.kpi4 < '4.4')?'green':(charity13NovContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13NovContents.kpi5 == null)?'grey-2':(charity13NovContents.kpi5 >= '0' && charity13NovContents.kpi5 <= '1')?'red':(charity13NovContents.kpi5 > '1' && charity13NovContents.kpi5 <= '1.333333333')?'orange':(charity13NovContents.kpi5 > '1.333333333' && charity13NovContents.kpi5 < '1.666666667')?'yellow-7':(charity13NovContents.kpi5 >= '1.666666667' && charity13NovContents.kpi5 < '2')?'green':(charity13NovContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13NovContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
                              :color="(charity13DecContents.kpi1 == null)?'grey-2':(charity13DecContents.kpi1 >= '0' && charity13DecContents.kpi1 <= '0.8')?'red':(charity13DecContents.kpi1 > '0.8' && charity13DecContents.kpi1 <= '1.066666667')?'orange':(charity13DecContents.kpi1 > '1.066666667' && charity13DecContents.kpi1 < '1.333333333')?'yellow-7':(charity13DecContents.kpi1 >= '1.333333333' && charity13DecContents.kpi1 < '1.6')?'green':(charity13DecContents.kpi1 >= '1.6'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi2 == null)?'grey-2':(charity13DecContents.kpi2 >= '0' && charity13DecContents.kpi2 <= '1.4')?'red':(charity13DecContents.kpi2 > '1.4' && charity13DecContents.kpi2 <= '1.866666667')?'orange':(charity13DecContents.kpi2 > '1.866666667' && charity13DecContents.kpi2 < '2.333333333')?'yellow-7':(charity13DecContents.kpi2 >= '2.333333333' && charity13DecContents.kpi2 < '2.8')?'green':(charity13DecContents.kpi2 >= '2.8'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi3 == null)?'grey-2':(charity13DecContents.kpi3 >= '0' && charity13DecContents.kpi3 <= '2')?'red':(charity13DecContents.kpi3 > '2' && charity13DecContents.kpi3 <= '2.666666667')?'orange':(charity13DecContents.kpi3 > '2.666666667' && charity13DecContents.kpi3 < '3.333333333')?'yellow-7':(charity13DecContents.kpi3 >= '3.333333333' && charity13DecContents.kpi3 < '4')?'green':(charity13DecContents.kpi3 >= '4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi4 == null)?'grey-2':(charity13DecContents.kpi4 >= '0' && charity13DecContents.kpi4 <= '2.2')?'red':(charity13DecContents.kpi4 > '2.2' && charity13DecContents.kpi4 <= '2.933333333')?'orange':(charity13DecContents.kpi4 > '2.933333333' && charity13DecContents.kpi4 < '3.666666667')?'yellow-7':(charity13DecContents.kpi4 >= '3.666666667' && charity13DecContents.kpi4 < '4.4')?'green':(charity13DecContents.kpi4 >= '4.4'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(charity13DecContents.kpi5 == null)?'grey-2':(charity13DecContents.kpi5 >= '0' && charity13DecContents.kpi5 <= '1')?'red':(charity13DecContents.kpi5 > '1' && charity13DecContents.kpi5 <= '1.333333333')?'orange':(charity13DecContents.kpi5 > '1.333333333' && charity13DecContents.kpi5 < '1.666666667')?'yellow-7':(charity13DecContents.kpi5 >= '1.666666667' && charity13DecContents.kpi5 < '2')?'green':(charity13DecContents.kpi5 >= '2'?'blue':'grey-2')"
                            >
                            {{charity13DecContents.kpi5}}
                              <q-tooltip># of systems live and deployed with client</q-tooltip>
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
              tab: 'february',
              charity13JanContent: {
                
              },
              charity13JanContents : [],
              charity13FebContent: {
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
              charity13FebContents : [],
              charity13MarContent: {
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
              charity13MarContents : [],
              charity13AprContent: {
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
              charity13AprContents : [],
              charity13MayContent: {
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
              charity13MayContents : [],
              charity13JunContent: {
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
              charity13JunContents : [],
              charity13JulContent: {
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
              charity13JulContents : [],
              charity13AugContent: {
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
              charity13AugContents : [],
              charity13SepContent: {
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
              charity13SepContents : [],
              charity13OctContent: {
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
              charity13OctContents : [],
              charity13NovContent: {
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
              charity13NovContents : [],
              charity13DecContent: {
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
              charity13DecContents : []


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
                            {time_period: 'January', expenses: this.charity13JanContents.expenses, revenues: this.charity13JanContents.revenues},
                            {time_period: 'February', expenses: this.charity13FebContents.expenses, revenues: this.charity13FebContents.revenues},
                            {time_period: 'March', expenses: this.charity13MarContents.expenses, revenues: this.charity13MarContents.revenues},
                            {time_period: 'April', expenses: this.charity13AprContents.expenses, revenues: this.charity13AprContents.revenues},
                            {time_period: 'May', expenses: this.charity13MayContents.expenses, revenues: this.charity13MayContents.revenues},
                            {time_period: 'June', expenses: this.charity13JunContents.expenses, revenues: this.charity13JunContents.revenues},
                            {time_period: 'July', expenses: this.charity13JulContents.expenses, revenues: this.charity13JulContents.revenues},
                            {time_period: 'August', expenses: this.charity13AugContents.expenses, revenues: this.charity13AugContents.revenues},
                            {time_period: 'September', expenses: this.charity13SepContents.expenses, revenues: this.charity13SepContents.revenues},
                            {time_period: 'October', expenses: this.charity13OctContents.expenses, revenues: this.charity13OctContents.revenues},
                            {time_period: 'November', expenses: this.charity13NovContents.expenses, revenues: this.charity13NovContents.revenues},
                            {time_period: 'December',expenses: this.charity13DecContents.expenses, revenues: this.charity13DecContents.revenues }
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
                        dimensions: ['months', 'kpi1', 'kpi2', 'kpi3', 'kpi4', 'kpi5', 'uniqueVol', 'volHours'],
                        source: [
                            //{months: 'January', kpi1: 0, kpi2: 0, kpi3: 0, kpi4: 0, uniqueVol: 0, volHours: 0},
                            {months: 'January', kpi1: this.charity13JanContents.kpi1, kpi2: this.charity13JanContents.kpi2, kpi3: this.charity13JanContents.kpi3, kpi4: this.charity13JanContents.kpi4, kpi5: this.charity13JanContents.kpi5, uniqueVol: this.charity13JanContents.uniqueVolunteers, volHours: this.charity13JanContents.volunteerHours},
                            {months: 'February', kpi1: this.charity13FebContents.kpi1, kpi2: this.charity13FebContents.kpi2, kpi3: this.charity13FebContents.kpi3, kpi4: this.charity13FebContents.kpi4, kpi5: this.charity13FebContents.kpi5, uniqueVol: this.charity13FebContents.uniqueVolunteers, volHours: this.charity13FebContents.volunteerHours},
                            {months: 'March', kpi1: this.charity13MarContents.kpi1, kpi2: this.charity13MarContents.kpi2, kpi3: this.charity13MarContents.kpi3, kpi4: this.charity13MarContents.kpi4, kpi5: this.charity13MarContents.kpi5, uniqueVol: this.charity13MarContents.uniqueVolunteers, volHours: this.charity13MarContents.volunteerHours},
                            {months: 'April', kpi1: this.charity13AprContents.kpi1, kpi2: this.charity13AprContents.kpi2, kpi3: this.charity13AprContents.kpi3, kpi4: this.charity13AprContents.kpi4, kpi5: this.charity13AprContents.kpi5, uniqueVol: this.charity13AprContents.uniqueVolunteers, volHours: this.charity13AprContents.volunteerHours},
                            {months: 'May', kpi1: this.charity13MayContents.kpi1, kpi2: this.charity13MayContents.kpi2, kpi3: this.charity13MayContents.kpi3, kpi4: this.charity13MayContents.kpi4, kpi5: this.charity13MayContents.kpi5, uniqueVol: this.charity13MayContents.uniqueVolunteers, volHours: this.charity13MayContents.volunteerHours},
                            {months: 'June', kpi1: this.charity13JunContents.kpi1, kpi2: this.charity13JunContents.kpi2, kpi3: this.charity13JunContents.kpi3, kpi4: this.charity13JunContents.kpi4, kpi5: this.charity13JunContents.kpi5, uniqueVol: this.charity13JunContents.uniqueVolunteers, volHours: this.charity13JunContents.volunteerHours},
                            {months: 'July', kpi1: this.charity13JulContents.kpi1, kpi2: this.charity13JulContents.kpi2, kpi3: this.charity13JulContents.kpi3, kpi4: this.charity13JulContents.kpi4, kpi5: this.charity13JulContents.kpi5, uniqueVol: this.charity13JulContents.uniqueVolunteers, volHours: this.charity13JulContents.volunteerHours},
                            {months: 'August', kpi1: this.charity13AugContents.kpi1, kpi2: this.charity13AugContents.kpi2, kpi3: this.charity13AugContents.kpi3, kpi4: this.charity13AugContents.kpi4, kpi5: this.charity13AugContents.kpi5, uniqueVol: this.charity13AugContents.uniqueVolunteers, volHours: this.charity13AugContents.volunteerHours},
                            {months: 'September', kpi1: this.charity13SepContents.kpi1, kpi2: this.charity13SepContents.kpi2, kpi3: this.charity13SepContents.kpi3, kpi4: this.charity13SepContents.kpi4, kpi5: this.charity13SepContents.kpi5, uniqueVol: this.charity13SepContents.uniqueVolunteers, volHours: this.charity13SepContents.volunteerHours},
                            {months: 'October', kpi1: this.charity13OctContents.kpi1, kpi2: this.charity13OctContents.kpi2, kpi3: this.charity13OctContents.kpi3, kpi4: this.charity13OctContents.kpi4, kpi5: this.charity13OctContents.kpi5, uniqueVol: this.charity13OctContents.uniqueVolunteers, volHours: this.charity13OctContents.volunteerHours},
                            {months: 'November', kpi1: this.charity13NovContents.kpi1, kpi2: this.charity13NovContents.kpi2, kpi3: this.charity13NovContents.kpi3, kpi4: this.charity13NovContents.kpi4, kpi5: this.charity13NovContents.kpi5, uniqueVol: this.charity13NovContents.uniqueVolunteers, volHours: this.charity13NovContents.volunteerHours},
                            {months: 'December',kpi1: this.charity13DecContents.kpi1, kpi2: this.charity13DecContents.kpi2, kpi3: this.charity13DecContents.kpi3, kpi4: this.charity13DecContents.kpi4, kpi5: this.charity13DecContents.kpi5, uniqueVol: this.charity13DecContents.uniqueVolunteers, volHours: this.charity13DecContents.volunteerHours},
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
                        {type: 'line', name: 'KPI5'},
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
                            data: [{value: this.charity13JanContents.budgetUsage}],
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
                                {value: this.charity13JanContents.perCategory1, name: this.charity13JanContents.expenseCategory1},
                                {value: this.charity13JanContents.perCategory2, name: this.charity13JanContents.expenseCategory2},
                                {value: this.charity13JanContents.perCategory3, name: this.charity13JanContents.expenseCategory3},
                                {value: this.charity13JanContents.perCategory4, name: this.charity13JanContents.expenseCategory4},
                                {value: this.charity13JanContents.perCategory5, name: this.charity13JanContents.expenseCategory5},
                                {value: this.charity13JanContents.perCategory6, name: this.charity13JanContents.expenseCategory6}
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
                            data: [{value: this.charity13FebContents.budgetUsage}],
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
                                {value: this.charity13FebContents.perCategory1, name: this.charity13FebContents.expenseCategory1},
                                {value: this.charity13FebContents.perCategory2, name: this.charity13FebContents.expenseCategory2},
                                {value: this.charity13FebContents.perCategory3, name: this.charity13FebContents.expenseCategory3},
                                {value: this.charity13FebContents.perCategory4, name: this.charity13FebContents.expenseCategory4},
                                {value: this.charity13FebContents.perCategory5, name: this.charity13FebContents.expenseCategory5},
                                {value: this.charity13FebContents.perCategory6, name: this.charity13FebContents.expenseCategory6}
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
                            data: [{value: this.charity13MarContents.budgetUsage}],
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
                                {value: this.charity13MarContents.perCategory1, name: this.charity13MarContents.expenseCategory1},
                                {value: this.charity13MarContents.perCategory2, name: this.charity13MarContents.expenseCategory2},
                                {value: this.charity13MarContents.perCategory3, name: this.charity13MarContents.expenseCategory3},
                                {value: this.charity13MarContents.perCategory4, name: this.charity13MarContents.expenseCategory4},
                                {value: this.charity13MarContents.perCategory5, name: this.charity13MarContents.expenseCategory5},
                                {value: this.charity13MarContents.perCategory6, name: this.charity13MarContents.expenseCategory6}
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
                            data: [{value: this.charity13AprContents.budgetUsage}],
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
                                {value: this.charity13AprContents.perCategory1, name: this.charity13AprContents.expenseCategory1},
                                {value: this.charity13AprContents.perCategory2, name: this.charity13AprContents.expenseCategory2},
                                {value: this.charity13AprContents.perCategory3, name: this.charity13AprContents.expenseCategory3},
                                {value: this.charity13AprContents.perCategory4, name: this.charity13AprContents.expenseCategory4},
                                {value: this.charity13AprContents.perCategory5, name: this.charity13AprContents.expenseCategory5},
                                {value: this.charity13AprContents.perCategory6, name: this.charity13AprContents.expenseCategory6}  
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
                            data: [{value: this.charity13MayContents.budgetUsage}],
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
                                {value: this.charity13MayContents.perCategory1, name: this.charity13MayContents.expenseCategory1},
                                {value: this.charity13MayContents.perCategory2, name: this.charity13MayContents.expenseCategory2},
                                {value: this.charity13MayContents.perCategory3, name: this.charity13MayContents.expenseCategory3},
                                {value: this.charity13MayContents.perCategory4, name: this.charity13MayContents.expenseCategory4},
                                {value: this.charity13MayContents.perCategory5, name: this.charity13MayContents.expenseCategory5},
                                {value: this.charity13MayContents.perCategory6, name: this.charity13MayContents.expenseCategory6}  
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
                            data: [{value: this.charity13JunContents.budgetUsage}],
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
                                {value: this.charity13JunContents.perCategory1, name: this.charity13JunContents.expenseCategory1},
                                {value: this.charity13JunContents.perCategory2, name: this.charity13JunContents.expenseCategory2},
                                {value: this.charity13JunContents.perCategory3, name: this.charity13JunContents.expenseCategory3},
                                {value: this.charity13JunContents.perCategory4, name: this.charity13JunContents.expenseCategory4},
                                {value: this.charity13JunContents.perCategory5, name: this.charity13JunContents.expenseCategory5},
                                {value: this.charity13JunContents.perCategory6, name: this.charity13JunContents.expenseCategory6}  
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
                            data: [{value: this.charity13JulContents.budgetUsage}],
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
                                {value: this.charity13JulContents.perCategory1, name: this.charity13JulContents.expenseCategory1},
                                {value: this.charity13JulContents.perCategory2, name: this.charity13JulContents.expenseCategory2},
                                {value: this.charity13JulContents.perCategory3, name: this.charity13JulContents.expenseCategory3},
                                {value: this.charity13JulContents.perCategory4, name: this.charity13JulContents.expenseCategory4},
                                {value: this.charity13JulContents.perCategory5, name: this.charity13JulContents.expenseCategory5},
                                {value: this.charity13JulContents.perCategory6, name: this.charity13JulContents.expenseCategory6}  
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
                            data: [{value: this.charity13AugContents.budgetUsage}],
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
                                {value: this.charity13AugContents.perCategory1, name: this.charity13AugContents.expenseCategory1},
                                {value: this.charity13AugContents.perCategory2, name: this.charity13AugContents.expenseCategory2},
                                {value: this.charity13AugContents.perCategory3, name: this.charity13AugContents.expenseCategory3},
                                {value: this.charity13AugContents.perCategory4, name: this.charity13AugContents.expenseCategory4},
                                {value: this.charity13AugContents.perCategory5, name: this.charity13AugContents.expenseCategory5},
                                {value: this.charity13AugContents.perCategory6, name: this.charity13AugContents.expenseCategory6}  
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
                            data: [{value: this.charity13SepContents.budgetUsage}],
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
                                {value: this.charity13SepContents.perCategory1, name: this.charity13SepContents.expenseCategory1},
                                {value: this.charity13SepContents.perCategory2, name: this.charity13SepContents.expenseCategory2},
                                {value: this.charity13SepContents.perCategory3, name: this.charity13SepContents.expenseCategory3},
                                {value: this.charity13SepContents.perCategory4, name: this.charity13SepContents.expenseCategory4},
                                {value: this.charity13SepContents.perCategory5, name: this.charity13SepContents.expenseCategory5},
                                {value: this.charity13SepContents.perCategory6, name: this.charity13SepContents.expenseCategory6}  
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
                            data: [{value: this.charity13OctContents.budgetUsage}],
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
                                {value: this.charity13OctContents.perCategory1, name: this.charity13OctContents.expenseCategory1},
                                {value: this.charity13OctContents.perCategory2, name: this.charity13OctContents.expenseCategory2},
                                {value: this.charity13OctContents.perCategory3, name: this.charity13OctContents.expenseCategory3},
                                {value: this.charity13OctContents.perCategory4, name: this.charity13OctContents.expenseCategory4},
                                {value: this.charity13OctContents.perCategory5, name: this.charity13OctContents.expenseCategory5},
                                {value: this.charity13OctContents.perCategory6, name: this.charity13OctContents.expenseCategory6}  
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
                            data: [{value: this.charity13NovContents.budgetUsage}],
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
                                {value: this.charity13NovContents.perCategory1, name: this.charity13NovContents.expenseCategory1},
                                {value: this.charity13NovContents.perCategory2, name: this.charity13NovContents.expenseCategory2},
                                {value: this.charity13NovContents.perCategory3, name: this.charity13NovContents.expenseCategory3},
                                {value: this.charity13NovContents.perCategory4, name: this.charity13NovContents.expenseCategory4},
                                {value: this.charity13NovContents.perCategory5, name: this.charity13NovContents.expenseCategory5},
                                {value: this.charity13NovContents.perCategory6, name: this.charity13NovContents.expenseCategory6}  
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
                            data: [{value: this.charity13DecContents.budgetUsage}],
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
                                {value: this.charity13DecContents.perCategory1, name: this.charity13DecContents.expenseCategory1},
                                {value: this.charity13DecContents.perCategory2, name: this.charity13DecContents.expenseCategory2},
                                {value: this.charity13DecContents.perCategory3, name: this.charity13DecContents.expenseCategory3},
                                {value: this.charity13DecContents.perCategory4, name: this.charity13DecContents.expenseCategory4},
                                {value: this.charity13DecContents.perCategory5, name: this.charity13DecContents.expenseCategory5},
                                {value: this.charity13DecContents.perCategory6, name: this.charity13DecContents.expenseCategory6}
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
            var docCharity13JanRef = db.collection("charity13").doc("january");

            docCharity13JanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.charity13JanContents = doc.data();
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
            var docCharity13FebRef = db.collection("charity13").doc("february");

            docCharity13FebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.charity13FebContents = doc.data();
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
            var docCharity13MarRef = db.collection("charity13").doc("march");

            docCharity13MarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.charity13MarContents = doc.data();
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
            var docCharity13AprRef = db.collection("charity13").doc("april1");

            docCharity13AprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.charity13AprContents = doc.data();
                    this.totalExpenseApr();
                    this.cumulativeBudgetUsageApr();
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                    console.log(error);
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    MAY
            var docCharity13MayRef = db.collection("charity13").doc("may");

            docCharity13MayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.charity13MayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docCharity13JunRef = db.collection("charity13").doc("june");

            docCharity13JunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.charity13JunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docCharity13JulRef = db.collection("charity13").doc("july");

            docCharity13JulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.charity13JulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docCharity13AugRef = db.collection("charity13").doc("august");

            docCharity13AugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.charity13AugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docCharity13SepRef = db.collection("charity13").doc("september");

            docCharity13SepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.charity13SepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docCharity13OctRef = db.collection("charity13").doc("october");

            docCharity13OctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.charity13OctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docCharity13NovRef = db.collection("charity13").doc("november");

            docCharity13NovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.charity13NovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docCharity13DecRef = db.collection("charity13").doc("december");

            docCharity13DecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.charity13DecContents = doc.data();
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
              return this.charity13JanContents.expenses = getRealValue(this.charity13JanContents.perCategory1) + getRealValue(this.charity13JanContents.perCategory2) + getRealValue(this.charity13JanContents.perCategory3) + getRealValue(this.charity13JanContents.perCategory4) + getRealValue(this.charity13JanContents.perCategory5) + getRealValue(this.charity13JanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.charity13JanContents.budgetUsage = ((getRealValue(this.charity13JanContents.expenses) / getRealValue(this.charity13JanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.charity13FebContents.expenses = getRealValue(this.charity13FebContents.perCategory1) + getRealValue(this.charity13FebContents.perCategory2) + getRealValue(this.charity13FebContents.perCategory3) + getRealValue(this.charity13FebContents.perCategory4) + getRealValue(this.charity13FebContents.perCategory5) + getRealValue(this.charity13FebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.charity13FebContents.budgetUsage = (((getRealValue(this.charity13FebContents.expenses) + getRealValue(this.charity13JanContents.expenses)) / getRealValue(this.charity13FebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.charity13MarContents.expenses = getRealValue(this.charity13MarContents.perCategory1) + getRealValue(this.charity13MarContents.perCategory2) + getRealValue(this.charity13MarContents.perCategory3) + getRealValue(this.charity13MarContents.perCategory4) + getRealValue(this.charity13MarContents.perCategory5) + getRealValue(this.charity13MarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.charity13MarContents.budgetUsage = (((getRealValue(this.charity13MarContents.expenses) + getRealValue(this.charity13FebContents.expenses) + getRealValue(this.charity13JanContents.expenses)) / getRealValue(this.charity13MarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.charity13AprContents.expenses = getRealValue(this.charity13AprContents.perCategory1) + getRealValue(this.charity13AprContents.perCategory2) + getRealValue(this.charity13AprContents.perCategory3) + getRealValue(this.charity13AprContents.perCategory4) + getRealValue(this.charity13AprContents.perCategory5) + getRealValue(this.charity13AprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.charity13AprContents.budgetUsage = (((getRealValue(this.charity13AprContents.expenses) + getRealValue(this.charity13MarContents.expenses) + getRealValue(this.charity13FebContents.expenses) + getRealValue(this.charity13JanContents.expenses)) / getRealValue(this.charity13AprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.charity13MayContents.expenses = getRealValue(this.charity13MayContents.perCategory1) + getRealValue(this.charity13MayContents.perCategory2) + getRealValue(this.charity13MayContents.perCategory3) + getRealValue(this.charity13MayContents.perCategory4) + getRealValue(this.charity13MayContents.perCategory5) + getRealValue(this.charity13MayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.charity13MayContents.budgetUsage = (((getRealValue(this.charity13MayContents.expenses) + getRealValue(this.charity13AprContents.expenses) + getRealValue(this.charity13MarContents.expenses) + getRealValue(this.charity13FebContents.expenses) + getRealValue(this.charity13JanContents.expenses)) / getRealValue(this.charity13MayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.charity13JunContents.expenses = getRealValue(this.charity13JunContents.perCategory1) + getRealValue(this.charity13JunContents.perCategory2) + getRealValue(this.charity13JunContents.perCategory3) + getRealValue(this.charity13JunContents.perCategory4) + getRealValue(this.charity13JunContents.perCategory5) + getRealValue(this.charity13JunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.charity13JunContents.budgetUsage = (((getRealValue(this.charity13JunContents.expenses) + getRealValue(this.charity13MayContents.expenses) + getRealValue(this.charity13AprContents.expenses) + getRealValue(this.charity13MarContents.expenses) + getRealValue(this.charity13FebContents.expenses) + getRealValue(this.charity13JanContents.expenses)) / getRealValue(this.charity13JunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.charity13JulContents.expenses = getRealValue(this.charity13JulContents.perCategory1) + getRealValue(this.charity13JulContents.perCategory2) + getRealValue(this.charity13JulContents.perCategory3) + getRealValue(this.charity13JulContents.perCategory4) + getRealValue(this.charity13JulContents.perCategory5) + getRealValue(this.charity13JulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.charity13JulContents.budgetUsage = (((getRealValue(this.charity13JulContents.expenses) + getRealValue(this.charity13JunContents.expenses) + getRealValue(this.charity13MayContents.expenses) + getRealValue(this.charity13AprContents.expenses) + getRealValue(this.charity13MarContents.expenses) + getRealValue(this.charity13FebContents.expenses) + getRealValue(this.charity13JanContents.expenses)) / getRealValue(this.charity13JulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.charity13AugContents.expenses = getRealValue(this.charity13AugContents.perCategory1) + getRealValue(this.charity13AugContents.perCategory2) + getRealValue(this.charity13AugContents.perCategory3) + getRealValue(this.charity13AugContents.perCategory4) + getRealValue(this.charity13AugContents.perCategory5) + getRealValue(this.charity13AugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.charity13AugContents.budgetUsage = (((getRealValue(this.charity13AugContents.expenses) + getRealValue(this.charity13JulContents.expenses) + getRealValue(this.charity13JunContents.expenses) + getRealValue(this.charity13MayContents.expenses) + getRealValue(this.charity13AprContents.expenses) + getRealValue(this.charity13MarContents.expenses) + getRealValue(this.charity13FebContents.expenses) + getRealValue(this.charity13JanContents.expenses)) / getRealValue(this.charity13AugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.charity13SepContents.expenses = getRealValue(this.charity13SepContents.perCategory1) + getRealValue(this.charity13SepContents.perCategory2) + getRealValue(this.charity13SepContents.perCategory3) + getRealValue(this.charity13SepContents.perCategory4) + getRealValue(this.charity13SepContents.perCategory5) + getRealValue(this.charity13SepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.charity13SepContents.budgetUsage = (((getRealValue(this.charity13SepContents.expenses) + getRealValue(this.charity13AugContents.expenses) + getRealValue(this.charity13JulContents.expenses) + getRealValue(this.charity13JunContents.expenses) + getRealValue(this.charity13MayContents.expenses) + getRealValue(this.charity13AprContents.expenses) + getRealValue(this.charity13MarContents.expenses) + getRealValue(this.charity13FebContents.expenses) + getRealValue(this.charity13JanContents.expenses)) / getRealValue(this.charity13SepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.charity13OctContents.expenses = getRealValue(this.charity13OctContents.perCategory1) + getRealValue(this.charity13OctContents.perCategory2) + getRealValue(this.charity13OctContents.perCategory3) + getRealValue(this.charity13OctContents.perCategory4) + getRealValue(this.charity13OctContents.perCategory5) + getRealValue(this.charity13OctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.charity13OctContents.budgetUsage = (((getRealValue(this.charity13OctContents.expenses) + getRealValue(this.charity13SepContents.expenses) + getRealValue(this.charity13AugContents.expenses) + getRealValue(this.charity13JulContents.expenses) + getRealValue(this.charity13JunContents.expenses) + getRealValue(this.charity13MayContents.expenses) + getRealValue(this.charity13AprContents.expenses) + getRealValue(this.charity13MarContents.expenses) + getRealValue(this.charity13FebContents.expenses) + getRealValue(this.charity13JanContents.expenses)) / getRealValue(this.charity13OctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.charity13NovContents.expenses = getRealValue(this.charity13NovContents.perCategory1) + getRealValue(this.charity13NovContents.perCategory2) + getRealValue(this.charity13NovContents.perCategory3) + getRealValue(this.charity13NovContents.perCategory4) + getRealValue(this.charity13NovContents.perCategory5) + getRealValue(this.charity13NovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.charity13NovContents.budgetUsage = (((getRealValue(this.charity13NovContents.expenses) + getRealValue(this.charity13OctContents.expenses) + getRealValue(this.charity13SepContents.expenses) + getRealValue(this.charity13AugContents.expenses) + getRealValue(this.charity13JulContents.expenses) + getRealValue(this.charity13JunContents.expenses) + getRealValue(this.charity13MayContents.expenses) + getRealValue(this.charity13AprContents.expenses) + getRealValue(this.charity13MarContents.expenses) + getRealValue(this.charity13FebContents.expenses) + getRealValue(this.charity13JanContents.expenses)) / getRealValue(this.charity13NovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.charity13DecContents.expenses = getRealValue(this.charity13DecContents.perCategory1) + getRealValue(this.charity13DecContents.perCategory2) + getRealValue(this.charity13DecContents.perCategory3) + getRealValue(this.charity13DecContents.perCategory4) + getRealValue(this.charity13DecContents.perCategory5) + getRealValue(this.charity13DecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.charity13DecContents.budgetUsage = (((getRealValue(this.charity13DecContents.expenses) + getRealValue(this.charity13NovContents.expenses) + getRealValue(this.charity13OctContents.expenses) + getRealValue(this.charity13SepContents.expenses) + getRealValue(this.charity13AugContents.expenses) + getRealValue(this.charity13JulContents.expenses) + getRealValue(this.charity13JunContents.expenses) + getRealValue(this.charity13MayContents.expenses) + getRealValue(this.charity13AprContents.expenses) + getRealValue(this.charity13MarContents.expenses) + getRealValue(this.charity13FebContents.expenses) + getRealValue(this.charity13JanContents.expenses)) / getRealValue(this.charity13DecContents.actualBudget))*100).toFixed(2)
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
