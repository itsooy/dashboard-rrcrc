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
                                <q-tooltip># of people using the service (unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of first time users at the FB in the program</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJanContents.kpi1 == null)?'grey-2':(yesICanJanContents.kpi1 >= '0' && yesICanJanContents.kpi1 <= '1.8')?'red':(yesICanJanContents.kpi1 > '1.8' && yesICanJanContents.kpi1 <= '2.4')?'orange':(yesICanJanContents.kpi1 > '2.4' && yesICanJanContents.kpi1 < '3')?'yellow-7':(yesICanJanContents.kpi1 >= '3' && yesICanJanContents.kpi1 < '3.6')?'green':(yesICanJanContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi2 == null)?'grey-2':(yesICanJanContents.kpi2 >= '0' && yesICanJanContents.kpi2 <= '12')?'red':(yesICanJanContents.kpi2 > '12' && yesICanJanContents.kpi2 <= '16')?'orange':(yesICanJanContents.kpi2 > '16' && yesICanJanContents.kpi2 < '20')?'yellow-7':(yesICanJanContents.kpi2 >= '20' && yesICanJanContents.kpi2 < '24')?'green':(yesICanJanContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi3 == null)?'grey-2':(yesICanJanContents.kpi3 >= '0' && yesICanJanContents.kpi3 <= '6.6')?'red':(yesICanJanContents.kpi3 > '6.6' && yesICanJanContents.kpi3 <= '8.8')?'orange':(yesICanJanContents.kpi3 > '8.8' && yesICanJanContents.kpi3 < '11')?'yellow-7':(yesICanJanContents.kpi3 >= '11' && yesICanJanContents.kpi3 < '13.2')?'green':(yesICanJanContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanFebContents.kpi1 == null)?'grey-2':(yesICanFebContents.kpi1 >= '0' && yesICanFebContents.kpi1 <= '1.8')?'red':(yesICanFebContents.kpi1 > '1.8' && yesICanFebContents.kpi1 <= '2.4')?'orange':(yesICanFebContents.kpi1 > '2.4' && yesICanFebContents.kpi1 < '3')?'yellow-7':(yesICanFebContents.kpi1 >= '3' && yesICanFebContents.kpi1 < '3.6')?'green':(yesICanFebContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi2 == null)?'grey-2':(yesICanFebContents.kpi2 >= '0' && yesICanFebContents.kpi2 <= '12')?'red':(yesICanFebContents.kpi2 > '12' && yesICanFebContents.kpi2 <= '16')?'orange':(yesICanFebContents.kpi2 > '16' && yesICanFebContents.kpi2 < '20')?'yellow-7':(yesICanFebContents.kpi2 >= '20' && yesICanFebContents.kpi2 < '24')?'green':(yesICanFebContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi3 == null)?'grey-2':(yesICanFebContents.kpi3 >= '0' && yesICanFebContents.kpi3 <= '6.6')?'red':(yesICanFebContents.kpi3 > '6.6' && yesICanFebContents.kpi3 <= '8.8')?'orange':(yesICanFebContents.kpi3 > '8.8' && yesICanFebContents.kpi3 < '11')?'yellow-7':(yesICanFebContents.kpi3 >= '11' && yesICanFebContents.kpi3 < '13.2')?'green':(yesICanFebContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMarContents.kpi1 == null)?'grey-2':(yesICanMarContents.kpi1 >= '0' && yesICanMarContents.kpi1 <= '1.8')?'red':(yesICanMarContents.kpi1 > '1.8' && yesICanMarContents.kpi1 <= '2.4')?'orange':(yesICanMarContents.kpi1 > '2.4' && yesICanMarContents.kpi1 < '3')?'yellow-7':(yesICanMarContents.kpi1 >= '3' && yesICanMarContents.kpi1 < '3.6')?'green':(yesICanMarContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi2 == null)?'grey-2':(yesICanMarContents.kpi2 >= '0' && yesICanMarContents.kpi2 <= '12')?'red':(yesICanMarContents.kpi2 > '12' && yesICanMarContents.kpi2 <= '16')?'orange':(yesICanMarContents.kpi2 > '16' && yesICanMarContents.kpi2 < '20')?'yellow-7':(yesICanMarContents.kpi2 >= '20' && yesICanMarContents.kpi2 < '24')?'green':(yesICanMarContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi3 == null)?'grey-2':(yesICanMarContents.kpi3 >= '0' && yesICanMarContents.kpi3 <= '6.6')?'red':(yesICanMarContents.kpi3 > '6.6' && yesICanMarContents.kpi3 <= '8.8')?'orange':(yesICanMarContents.kpi3 > '8.8' && yesICanMarContents.kpi3 < '11')?'yellow-7':(yesICanMarContents.kpi3 >= '11' && yesICanMarContents.kpi3 < '13.2')?'green':(yesICanMarContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAprContents.kpi1 == null)?'grey-2':(yesICanAprContents.kpi1 >= '0' && yesICanAprContents.kpi1 <= '1.8')?'red':(yesICanAprContents.kpi1 > '1.8' && yesICanAprContents.kpi1 <= '2.4')?'orange':(yesICanAprContents.kpi1 > '2.4' && yesICanAprContents.kpi1 < '3')?'yellow-7':(yesICanAprContents.kpi1 >= '3' && yesICanAprContents.kpi1 < '3.6')?'green':(yesICanAprContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi2 == null)?'grey-2':(yesICanAprContents.kpi2 >= '0' && yesICanAprContents.kpi2 <= '12')?'red':(yesICanAprContents.kpi2 > '12' && yesICanAprContents.kpi2 <= '16')?'orange':(yesICanAprContents.kpi2 > '16' && yesICanAprContents.kpi2 < '20')?'yellow-7':(yesICanAprContents.kpi2 >= '20' && yesICanAprContents.kpi2 < '24')?'green':(yesICanAprContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi3 == null)?'grey-2':(yesICanAprContents.kpi3 >= '0' && yesICanAprContents.kpi3 <= '6.6')?'red':(yesICanAprContents.kpi3 > '6.6' && yesICanAprContents.kpi3 <= '8.8')?'orange':(yesICanAprContents.kpi3 > '8.8' && yesICanAprContents.kpi3 < '11')?'yellow-7':(yesICanAprContents.kpi3 >= '11' && yesICanAprContents.kpi3 < '13.2')?'green':(yesICanAprContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMayContents.kpi1 == null)?'grey-2':(yesICanMayContents.kpi1 >= '0' && yesICanMayContents.kpi1 <= '1.8')?'red':(yesICanMayContents.kpi1 > '1.8' && yesICanMayContents.kpi1 <= '2.4')?'orange':(yesICanMayContents.kpi1 > '2.4' && yesICanMayContents.kpi1 < '3')?'yellow-7':(yesICanMayContents.kpi1 >= '3' && yesICanMayContents.kpi1 < '3.6')?'green':(yesICanMayContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi2 == null)?'grey-2':(yesICanMayContents.kpi2 >= '0' && yesICanMayContents.kpi2 <= '12')?'red':(yesICanMayContents.kpi2 > '12' && yesICanMayContents.kpi2 <= '16')?'orange':(yesICanMayContents.kpi2 > '16' && yesICanMayContents.kpi2 < '20')?'yellow-7':(yesICanMayContents.kpi2 >= '20' && yesICanMayContents.kpi2 < '24')?'green':(yesICanMayContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi3 == null)?'grey-2':(yesICanMayContents.kpi3 >= '0' && yesICanMayContents.kpi3 <= '6.6')?'red':(yesICanMayContents.kpi3 > '6.6' && yesICanMayContents.kpi3 <= '8.8')?'orange':(yesICanMayContents.kpi3 > '8.8' && yesICanMayContents.kpi3 < '11')?'yellow-7':(yesICanMayContents.kpi3 >= '11' && yesICanMayContents.kpi3 < '13.2')?'green':(yesICanMayContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJunContents.kpi1 == null)?'grey-2':(yesICanJunContents.kpi1 >= '0' && yesICanJunContents.kpi1 <= '1.8')?'red':(yesICanJunContents.kpi1 > '1.8' && yesICanJunContents.kpi1 <= '2.4')?'orange':(yesICanJunContents.kpi1 > '2.4' && yesICanJunContents.kpi1 < '3')?'yellow-7':(yesICanJunContents.kpi1 >= '3' && yesICanJunContents.kpi1 < '3.6')?'green':(yesICanJunContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi2 == null)?'grey-2':(yesICanJunContents.kpi2 >= '0' && yesICanJunContents.kpi2 <= '12')?'red':(yesICanJunContents.kpi2 > '12' && yesICanJunContents.kpi2 <= '16')?'orange':(yesICanJunContents.kpi2 > '16' && yesICanJunContents.kpi2 < '20')?'yellow-7':(yesICanJunContents.kpi2 >= '20' && yesICanJunContents.kpi2 < '24')?'green':(yesICanJunContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi3 == null)?'grey-2':(yesICanJunContents.kpi3 >= '0' && yesICanJunContents.kpi3 <= '6.6')?'red':(yesICanJunContents.kpi3 > '6.6' && yesICanJunContents.kpi3 <= '8.8')?'orange':(yesICanJunContents.kpi3 > '8.8' && yesICanJunContents.kpi3 < '11')?'yellow-7':(yesICanJunContents.kpi3 >= '11' && yesICanJunContents.kpi3 < '13.2')?'green':(yesICanJunContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJulContents.kpi1 == null)?'grey-2':(yesICanJulContents.kpi1 >= '0' && yesICanJulContents.kpi1 <= '1.8')?'red':(yesICanJulContents.kpi1 > '1.8' && yesICanJulContents.kpi1 <= '2.4')?'orange':(yesICanJulContents.kpi1 > '2.4' && yesICanJulContents.kpi1 < '3')?'yellow-7':(yesICanJulContents.kpi1 >= '3' && yesICanJulContents.kpi1 < '3.6')?'green':(yesICanJulContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi2 == null)?'grey-2':(yesICanJulContents.kpi2 >= '0' && yesICanJulContents.kpi2 <= '12')?'red':(yesICanJulContents.kpi2 > '12' && yesICanJulContents.kpi2 <= '16')?'orange':(yesICanJulContents.kpi2 > '16' && yesICanJulContents.kpi2 < '20')?'yellow-7':(yesICanJulContents.kpi2 >= '20' && yesICanJulContents.kpi2 < '24')?'green':(yesICanJulContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi3 == null)?'grey-2':(yesICanJulContents.kpi3 >= '0' && yesICanJulContents.kpi3 <= '6.6')?'red':(yesICanJulContents.kpi3 > '6.6' && yesICanJulContents.kpi3 <= '8.8')?'orange':(yesICanJulContents.kpi3 > '8.8' && yesICanJulContents.kpi3 < '11')?'yellow-7':(yesICanJulContents.kpi3 >= '11' && yesICanJulContents.kpi3 < '13.2')?'green':(yesICanJulContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAugContents.kpi1 == null)?'grey-2':(yesICanAugContents.kpi1 >= '0' && yesICanAugContents.kpi1 <= '1.8')?'red':(yesICanAugContents.kpi1 > '1.8' && yesICanAugContents.kpi1 <= '2.4')?'orange':(yesICanAugContents.kpi1 > '2.4' && yesICanAugContents.kpi1 < '3')?'yellow-7':(yesICanAugContents.kpi1 >= '3' && yesICanAugContents.kpi1 < '3.6')?'green':(yesICanAugContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi2 == null)?'grey-2':(yesICanAugContents.kpi2 >= '0' && yesICanAugContents.kpi2 <= '12')?'red':(yesICanAugContents.kpi2 > '12' && yesICanAugContents.kpi2 <= '16')?'orange':(yesICanAugContents.kpi2 > '16' && yesICanAugContents.kpi2 < '20')?'yellow-7':(yesICanAugContents.kpi2 >= '20' && yesICanAugContents.kpi2 < '24')?'green':(yesICanAugContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi3 == null)?'grey-2':(yesICanAugContents.kpi3 >= '0' && yesICanAugContents.kpi3 <= '6.6')?'red':(yesICanAugContents.kpi3 > '6.6' && yesICanAugContents.kpi3 <= '8.8')?'orange':(yesICanAugContents.kpi3 > '8.8' && yesICanAugContents.kpi3 < '11')?'yellow-7':(yesICanAugContents.kpi3 >= '11' && yesICanAugContents.kpi3 < '13.2')?'green':(yesICanAugContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanSepContents.kpi1 == null)?'grey-2':(yesICanSepContents.kpi1 >= '0' && yesICanSepContents.kpi1 <= '1.8')?'red':(yesICanSepContents.kpi1 > '1.8' && yesICanSepContents.kpi1 <= '2.4')?'orange':(yesICanSepContents.kpi1 > '2.4' && yesICanSepContents.kpi1 < '3')?'yellow-7':(yesICanSepContents.kpi1 >= '3' && yesICanSepContents.kpi1 < '3.6')?'green':(yesICanSepContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi2 == null)?'grey-2':(yesICanSepContents.kpi2 >= '0' && yesICanSepContents.kpi2 <= '12')?'red':(yesICanSepContents.kpi2 > '12' && yesICanSepContents.kpi2 <= '16')?'orange':(yesICanSepContents.kpi2 > '16' && yesICanSepContents.kpi2 < '20')?'yellow-7':(yesICanSepContents.kpi2 >= '20' && yesICanSepContents.kpi2 < '24')?'green':(yesICanSepContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi3 == null)?'grey-2':(yesICanSepContents.kpi3 >= '0' && yesICanSepContents.kpi3 <= '6.6')?'red':(yesICanSepContents.kpi3 > '6.6' && yesICanSepContents.kpi3 <= '8.8')?'orange':(yesICanSepContents.kpi3 > '8.8' && yesICanSepContents.kpi3 < '11')?'yellow-7':(yesICanSepContents.kpi3 >= '11' && yesICanSepContents.kpi3 < '13.2')?'green':(yesICanSepContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanOctContents.kpi1 == null)?'grey-2':(yesICanOctContents.kpi1 >= '0' && yesICanOctContents.kpi1 <= '1.8')?'red':(yesICanOctContents.kpi1 > '1.8' && yesICanOctContents.kpi1 <= '2.4')?'orange':(yesICanOctContents.kpi1 > '2.4' && yesICanOctContents.kpi1 < '3')?'yellow-7':(yesICanOctContents.kpi1 >= '3' && yesICanOctContents.kpi1 < '3.6')?'green':(yesICanOctContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi2 == null)?'grey-2':(yesICanOctContents.kpi2 >= '0' && yesICanOctContents.kpi2 <= '12')?'red':(yesICanOctContents.kpi2 > '12' && yesICanOctContents.kpi2 <= '16')?'orange':(yesICanOctContents.kpi2 > '16' && yesICanOctContents.kpi2 < '20')?'yellow-7':(yesICanOctContents.kpi2 >= '20' && yesICanOctContents.kpi2 < '24')?'green':(yesICanOctContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi3 == null)?'grey-2':(yesICanOctContents.kpi3 >= '0' && yesICanOctContents.kpi3 <= '6.6')?'red':(yesICanOctContents.kpi3 > '6.6' && yesICanOctContents.kpi3 <= '8.8')?'orange':(yesICanOctContents.kpi3 > '8.8' && yesICanOctContents.kpi3 < '11')?'yellow-7':(yesICanOctContents.kpi3 >= '11' && yesICanOctContents.kpi3 < '13.2')?'green':(yesICanOctContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanNovContents.kpi1 == null)?'grey-2':(yesICanNovContents.kpi1 >= '0' && yesICanNovContents.kpi1 <= '1.8')?'red':(yesICanNovContents.kpi1 > '1.8' && yesICanNovContents.kpi1 <= '2.4')?'orange':(yesICanNovContents.kpi1 > '2.4' && yesICanNovContents.kpi1 < '3')?'yellow-7':(yesICanNovContents.kpi1 >= '3' && yesICanNovContents.kpi1 < '3.6')?'green':(yesICanNovContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi2 == null)?'grey-2':(yesICanNovContents.kpi2 >= '0' && yesICanNovContents.kpi2 <= '12')?'red':(yesICanNovContents.kpi2 > '12' && yesICanNovContents.kpi2 <= '16')?'orange':(yesICanNovContents.kpi2 > '16' && yesICanNovContents.kpi2 < '20')?'yellow-7':(yesICanNovContents.kpi2 >= '20' && yesICanNovContents.kpi2 < '24')?'green':(yesICanNovContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi3 == null)?'grey-2':(yesICanNovContents.kpi3 >= '0' && yesICanNovContents.kpi3 <= '6.6')?'red':(yesICanNovContents.kpi3 > '6.6' && yesICanNovContents.kpi3 <= '8.8')?'orange':(yesICanNovContents.kpi3 > '8.8' && yesICanNovContents.kpi3 < '11')?'yellow-7':(yesICanNovContents.kpi3 >= '11' && yesICanNovContents.kpi3 < '13.2')?'green':(yesICanNovContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanDecContents.kpi1 == null)?'grey-2':(yesICanDecContents.kpi1 >= '0' && yesICanDecContents.kpi1 <= '1.8')?'red':(yesICanDecContents.kpi1 > '1.8' && yesICanDecContents.kpi1 <= '2.4')?'orange':(yesICanDecContents.kpi1 > '2.4' && yesICanDecContents.kpi1 < '3')?'yellow-7':(yesICanDecContents.kpi1 >= '3' && yesICanDecContents.kpi1 < '3.6')?'green':(yesICanDecContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi2 == null)?'grey-2':(yesICanDecContents.kpi2 >= '0' && yesICanDecContents.kpi2 <= '12')?'red':(yesICanDecContents.kpi2 > '12' && yesICanDecContents.kpi2 <= '16')?'orange':(yesICanDecContents.kpi2 > '16' && yesICanDecContents.kpi2 < '20')?'yellow-7':(yesICanDecContents.kpi2 >= '20' && yesICanDecContents.kpi2 < '24')?'green':(yesICanDecContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi3 == null)?'grey-2':(yesICanDecContents.kpi3 >= '0' && yesICanDecContents.kpi3 <= '6.6')?'red':(yesICanDecContents.kpi3 > '6.6' && yesICanDecContents.kpi3 <= '8.8')?'orange':(yesICanDecContents.kpi3 > '8.8' && yesICanDecContents.kpi3 < '11')?'yellow-7':(yesICanDecContents.kpi3 >= '11' && yesICanDecContents.kpi3 < '13.2')?'green':(yesICanDecContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                                <q-tooltip># of people using the service (unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of first time users at the FB in the program</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJanContents.kpi1 == null)?'grey-2':(yesICanJanContents.kpi1 >= '0' && yesICanJanContents.kpi1 <= '1.8')?'red':(yesICanJanContents.kpi1 > '1.8' && yesICanJanContents.kpi1 <= '2.4')?'orange':(yesICanJanContents.kpi1 > '2.4' && yesICanJanContents.kpi1 < '3')?'yellow-7':(yesICanJanContents.kpi1 >= '3' && yesICanJanContents.kpi1 < '3.6')?'green':(yesICanJanContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi2 == null)?'grey-2':(yesICanJanContents.kpi2 >= '0' && yesICanJanContents.kpi2 <= '12')?'red':(yesICanJanContents.kpi2 > '12' && yesICanJanContents.kpi2 <= '16')?'orange':(yesICanJanContents.kpi2 > '16' && yesICanJanContents.kpi2 < '20')?'yellow-7':(yesICanJanContents.kpi2 >= '20' && yesICanJanContents.kpi2 < '24')?'green':(yesICanJanContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi3 == null)?'grey-2':(yesICanJanContents.kpi3 >= '0' && yesICanJanContents.kpi3 <= '6.6')?'red':(yesICanJanContents.kpi3 > '6.6' && yesICanJanContents.kpi3 <= '8.8')?'orange':(yesICanJanContents.kpi3 > '8.8' && yesICanJanContents.kpi3 < '11')?'yellow-7':(yesICanJanContents.kpi3 >= '11' && yesICanJanContents.kpi3 < '13.2')?'green':(yesICanJanContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanFebContents.kpi1 == null)?'grey-2':(yesICanFebContents.kpi1 >= '0' && yesICanFebContents.kpi1 <= '1.8')?'red':(yesICanFebContents.kpi1 > '1.8' && yesICanFebContents.kpi1 <= '2.4')?'orange':(yesICanFebContents.kpi1 > '2.4' && yesICanFebContents.kpi1 < '3')?'yellow-7':(yesICanFebContents.kpi1 >= '3' && yesICanFebContents.kpi1 < '3.6')?'green':(yesICanFebContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi2 == null)?'grey-2':(yesICanFebContents.kpi2 >= '0' && yesICanFebContents.kpi2 <= '12')?'red':(yesICanFebContents.kpi2 > '12' && yesICanFebContents.kpi2 <= '16')?'orange':(yesICanFebContents.kpi2 > '16' && yesICanFebContents.kpi2 < '20')?'yellow-7':(yesICanFebContents.kpi2 >= '20' && yesICanFebContents.kpi2 < '24')?'green':(yesICanFebContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi3 == null)?'grey-2':(yesICanFebContents.kpi3 >= '0' && yesICanFebContents.kpi3 <= '6.6')?'red':(yesICanFebContents.kpi3 > '6.6' && yesICanFebContents.kpi3 <= '8.8')?'orange':(yesICanFebContents.kpi3 > '8.8' && yesICanFebContents.kpi3 < '11')?'yellow-7':(yesICanFebContents.kpi3 >= '11' && yesICanFebContents.kpi3 < '13.2')?'green':(yesICanFebContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMarContents.kpi1 == null)?'grey-2':(yesICanMarContents.kpi1 >= '0' && yesICanMarContents.kpi1 <= '1.8')?'red':(yesICanMarContents.kpi1 > '1.8' && yesICanMarContents.kpi1 <= '2.4')?'orange':(yesICanMarContents.kpi1 > '2.4' && yesICanMarContents.kpi1 < '3')?'yellow-7':(yesICanMarContents.kpi1 >= '3' && yesICanMarContents.kpi1 < '3.6')?'green':(yesICanMarContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi2 == null)?'grey-2':(yesICanMarContents.kpi2 >= '0' && yesICanMarContents.kpi2 <= '12')?'red':(yesICanMarContents.kpi2 > '12' && yesICanMarContents.kpi2 <= '16')?'orange':(yesICanMarContents.kpi2 > '16' && yesICanMarContents.kpi2 < '20')?'yellow-7':(yesICanMarContents.kpi2 >= '20' && yesICanMarContents.kpi2 < '24')?'green':(yesICanMarContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi3 == null)?'grey-2':(yesICanMarContents.kpi3 >= '0' && yesICanMarContents.kpi3 <= '6.6')?'red':(yesICanMarContents.kpi3 > '6.6' && yesICanMarContents.kpi3 <= '8.8')?'orange':(yesICanMarContents.kpi3 > '8.8' && yesICanMarContents.kpi3 < '11')?'yellow-7':(yesICanMarContents.kpi3 >= '11' && yesICanMarContents.kpi3 < '13.2')?'green':(yesICanMarContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAprContents.kpi1 == null)?'grey-2':(yesICanAprContents.kpi1 >= '0' && yesICanAprContents.kpi1 <= '1.8')?'red':(yesICanAprContents.kpi1 > '1.8' && yesICanAprContents.kpi1 <= '2.4')?'orange':(yesICanAprContents.kpi1 > '2.4' && yesICanAprContents.kpi1 < '3')?'yellow-7':(yesICanAprContents.kpi1 >= '3' && yesICanAprContents.kpi1 < '3.6')?'green':(yesICanAprContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi2 == null)?'grey-2':(yesICanAprContents.kpi2 >= '0' && yesICanAprContents.kpi2 <= '12')?'red':(yesICanAprContents.kpi2 > '12' && yesICanAprContents.kpi2 <= '16')?'orange':(yesICanAprContents.kpi2 > '16' && yesICanAprContents.kpi2 < '20')?'yellow-7':(yesICanAprContents.kpi2 >= '20' && yesICanAprContents.kpi2 < '24')?'green':(yesICanAprContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi3 == null)?'grey-2':(yesICanAprContents.kpi3 >= '0' && yesICanAprContents.kpi3 <= '6.6')?'red':(yesICanAprContents.kpi3 > '6.6' && yesICanAprContents.kpi3 <= '8.8')?'orange':(yesICanAprContents.kpi3 > '8.8' && yesICanAprContents.kpi3 < '11')?'yellow-7':(yesICanAprContents.kpi3 >= '11' && yesICanAprContents.kpi3 < '13.2')?'green':(yesICanAprContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMayContents.kpi1 == null)?'grey-2':(yesICanMayContents.kpi1 >= '0' && yesICanMayContents.kpi1 <= '1.8')?'red':(yesICanMayContents.kpi1 > '1.8' && yesICanMayContents.kpi1 <= '2.4')?'orange':(yesICanMayContents.kpi1 > '2.4' && yesICanMayContents.kpi1 < '3')?'yellow-7':(yesICanMayContents.kpi1 >= '3' && yesICanMayContents.kpi1 < '3.6')?'green':(yesICanMayContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi2 == null)?'grey-2':(yesICanMayContents.kpi2 >= '0' && yesICanMayContents.kpi2 <= '12')?'red':(yesICanMayContents.kpi2 > '12' && yesICanMayContents.kpi2 <= '16')?'orange':(yesICanMayContents.kpi2 > '16' && yesICanMayContents.kpi2 < '20')?'yellow-7':(yesICanMayContents.kpi2 >= '20' && yesICanMayContents.kpi2 < '24')?'green':(yesICanMayContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi3 == null)?'grey-2':(yesICanMayContents.kpi3 >= '0' && yesICanMayContents.kpi3 <= '6.6')?'red':(yesICanMayContents.kpi3 > '6.6' && yesICanMayContents.kpi3 <= '8.8')?'orange':(yesICanMayContents.kpi3 > '8.8' && yesICanMayContents.kpi3 < '11')?'yellow-7':(yesICanMayContents.kpi3 >= '11' && yesICanMayContents.kpi3 < '13.2')?'green':(yesICanMayContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJunContents.kpi1 == null)?'grey-2':(yesICanJunContents.kpi1 >= '0' && yesICanJunContents.kpi1 <= '1.8')?'red':(yesICanJunContents.kpi1 > '1.8' && yesICanJunContents.kpi1 <= '2.4')?'orange':(yesICanJunContents.kpi1 > '2.4' && yesICanJunContents.kpi1 < '3')?'yellow-7':(yesICanJunContents.kpi1 >= '3' && yesICanJunContents.kpi1 < '3.6')?'green':(yesICanJunContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi2 == null)?'grey-2':(yesICanJunContents.kpi2 >= '0' && yesICanJunContents.kpi2 <= '12')?'red':(yesICanJunContents.kpi2 > '12' && yesICanJunContents.kpi2 <= '16')?'orange':(yesICanJunContents.kpi2 > '16' && yesICanJunContents.kpi2 < '20')?'yellow-7':(yesICanJunContents.kpi2 >= '20' && yesICanJunContents.kpi2 < '24')?'green':(yesICanJunContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi3 == null)?'grey-2':(yesICanJunContents.kpi3 >= '0' && yesICanJunContents.kpi3 <= '6.6')?'red':(yesICanJunContents.kpi3 > '6.6' && yesICanJunContents.kpi3 <= '8.8')?'orange':(yesICanJunContents.kpi3 > '8.8' && yesICanJunContents.kpi3 < '11')?'yellow-7':(yesICanJunContents.kpi3 >= '11' && yesICanJunContents.kpi3 < '13.2')?'green':(yesICanJunContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJulContents.kpi1 == null)?'grey-2':(yesICanJulContents.kpi1 >= '0' && yesICanJulContents.kpi1 <= '1.8')?'red':(yesICanJulContents.kpi1 > '1.8' && yesICanJulContents.kpi1 <= '2.4')?'orange':(yesICanJulContents.kpi1 > '2.4' && yesICanJulContents.kpi1 < '3')?'yellow-7':(yesICanJulContents.kpi1 >= '3' && yesICanJulContents.kpi1 < '3.6')?'green':(yesICanJulContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi2 == null)?'grey-2':(yesICanJulContents.kpi2 >= '0' && yesICanJulContents.kpi2 <= '12')?'red':(yesICanJulContents.kpi2 > '12' && yesICanJulContents.kpi2 <= '16')?'orange':(yesICanJulContents.kpi2 > '16' && yesICanJulContents.kpi2 < '20')?'yellow-7':(yesICanJulContents.kpi2 >= '20' && yesICanJulContents.kpi2 < '24')?'green':(yesICanJulContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi3 == null)?'grey-2':(yesICanJulContents.kpi3 >= '0' && yesICanJulContents.kpi3 <= '6.6')?'red':(yesICanJulContents.kpi3 > '6.6' && yesICanJulContents.kpi3 <= '8.8')?'orange':(yesICanJulContents.kpi3 > '8.8' && yesICanJulContents.kpi3 < '11')?'yellow-7':(yesICanJulContents.kpi3 >= '11' && yesICanJulContents.kpi3 < '13.2')?'green':(yesICanJulContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAugContents.kpi1 == null)?'grey-2':(yesICanAugContents.kpi1 >= '0' && yesICanAugContents.kpi1 <= '1.8')?'red':(yesICanAugContents.kpi1 > '1.8' && yesICanAugContents.kpi1 <= '2.4')?'orange':(yesICanAugContents.kpi1 > '2.4' && yesICanAugContents.kpi1 < '3')?'yellow-7':(yesICanAugContents.kpi1 >= '3' && yesICanAugContents.kpi1 < '3.6')?'green':(yesICanAugContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi2 == null)?'grey-2':(yesICanAugContents.kpi2 >= '0' && yesICanAugContents.kpi2 <= '12')?'red':(yesICanAugContents.kpi2 > '12' && yesICanAugContents.kpi2 <= '16')?'orange':(yesICanAugContents.kpi2 > '16' && yesICanAugContents.kpi2 < '20')?'yellow-7':(yesICanAugContents.kpi2 >= '20' && yesICanAugContents.kpi2 < '24')?'green':(yesICanAugContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi3 == null)?'grey-2':(yesICanAugContents.kpi3 >= '0' && yesICanAugContents.kpi3 <= '6.6')?'red':(yesICanAugContents.kpi3 > '6.6' && yesICanAugContents.kpi3 <= '8.8')?'orange':(yesICanAugContents.kpi3 > '8.8' && yesICanAugContents.kpi3 < '11')?'yellow-7':(yesICanAugContents.kpi3 >= '11' && yesICanAugContents.kpi3 < '13.2')?'green':(yesICanAugContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanSepContents.kpi1 == null)?'grey-2':(yesICanSepContents.kpi1 >= '0' && yesICanSepContents.kpi1 <= '1.8')?'red':(yesICanSepContents.kpi1 > '1.8' && yesICanSepContents.kpi1 <= '2.4')?'orange':(yesICanSepContents.kpi1 > '2.4' && yesICanSepContents.kpi1 < '3')?'yellow-7':(yesICanSepContents.kpi1 >= '3' && yesICanSepContents.kpi1 < '3.6')?'green':(yesICanSepContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi2 == null)?'grey-2':(yesICanSepContents.kpi2 >= '0' && yesICanSepContents.kpi2 <= '12')?'red':(yesICanSepContents.kpi2 > '12' && yesICanSepContents.kpi2 <= '16')?'orange':(yesICanSepContents.kpi2 > '16' && yesICanSepContents.kpi2 < '20')?'yellow-7':(yesICanSepContents.kpi2 >= '20' && yesICanSepContents.kpi2 < '24')?'green':(yesICanSepContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi3 == null)?'grey-2':(yesICanSepContents.kpi3 >= '0' && yesICanSepContents.kpi3 <= '6.6')?'red':(yesICanSepContents.kpi3 > '6.6' && yesICanSepContents.kpi3 <= '8.8')?'orange':(yesICanSepContents.kpi3 > '8.8' && yesICanSepContents.kpi3 < '11')?'yellow-7':(yesICanSepContents.kpi3 >= '11' && yesICanSepContents.kpi3 < '13.2')?'green':(yesICanSepContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanOctContents.kpi1 == null)?'grey-2':(yesICanOctContents.kpi1 >= '0' && yesICanOctContents.kpi1 <= '1.8')?'red':(yesICanOctContents.kpi1 > '1.8' && yesICanOctContents.kpi1 <= '2.4')?'orange':(yesICanOctContents.kpi1 > '2.4' && yesICanOctContents.kpi1 < '3')?'yellow-7':(yesICanOctContents.kpi1 >= '3' && yesICanOctContents.kpi1 < '3.6')?'green':(yesICanOctContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi2 == null)?'grey-2':(yesICanOctContents.kpi2 >= '0' && yesICanOctContents.kpi2 <= '12')?'red':(yesICanOctContents.kpi2 > '12' && yesICanOctContents.kpi2 <= '16')?'orange':(yesICanOctContents.kpi2 > '16' && yesICanOctContents.kpi2 < '20')?'yellow-7':(yesICanOctContents.kpi2 >= '20' && yesICanOctContents.kpi2 < '24')?'green':(yesICanOctContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi3 == null)?'grey-2':(yesICanOctContents.kpi3 >= '0' && yesICanOctContents.kpi3 <= '6.6')?'red':(yesICanOctContents.kpi3 > '6.6' && yesICanOctContents.kpi3 <= '8.8')?'orange':(yesICanOctContents.kpi3 > '8.8' && yesICanOctContents.kpi3 < '11')?'yellow-7':(yesICanOctContents.kpi3 >= '11' && yesICanOctContents.kpi3 < '13.2')?'green':(yesICanOctContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanNovContents.kpi1 == null)?'grey-2':(yesICanNovContents.kpi1 >= '0' && yesICanNovContents.kpi1 <= '1.8')?'red':(yesICanNovContents.kpi1 > '1.8' && yesICanNovContents.kpi1 <= '2.4')?'orange':(yesICanNovContents.kpi1 > '2.4' && yesICanNovContents.kpi1 < '3')?'yellow-7':(yesICanNovContents.kpi1 >= '3' && yesICanNovContents.kpi1 < '3.6')?'green':(yesICanNovContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi2 == null)?'grey-2':(yesICanNovContents.kpi2 >= '0' && yesICanNovContents.kpi2 <= '12')?'red':(yesICanNovContents.kpi2 > '12' && yesICanNovContents.kpi2 <= '16')?'orange':(yesICanNovContents.kpi2 > '16' && yesICanNovContents.kpi2 < '20')?'yellow-7':(yesICanNovContents.kpi2 >= '20' && yesICanNovContents.kpi2 < '24')?'green':(yesICanNovContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi3 == null)?'grey-2':(yesICanNovContents.kpi3 >= '0' && yesICanNovContents.kpi3 <= '6.6')?'red':(yesICanNovContents.kpi3 > '6.6' && yesICanNovContents.kpi3 <= '8.8')?'orange':(yesICanNovContents.kpi3 > '8.8' && yesICanNovContents.kpi3 < '11')?'yellow-7':(yesICanNovContents.kpi3 >= '11' && yesICanNovContents.kpi3 < '13.2')?'green':(yesICanNovContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanDecContents.kpi1 == null)?'grey-2':(yesICanDecContents.kpi1 >= '0' && yesICanDecContents.kpi1 <= '1.8')?'red':(yesICanDecContents.kpi1 > '1.8' && yesICanDecContents.kpi1 <= '2.4')?'orange':(yesICanDecContents.kpi1 > '2.4' && yesICanDecContents.kpi1 < '3')?'yellow-7':(yesICanDecContents.kpi1 >= '3' && yesICanDecContents.kpi1 < '3.6')?'green':(yesICanDecContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi2 == null)?'grey-2':(yesICanDecContents.kpi2 >= '0' && yesICanDecContents.kpi2 <= '12')?'red':(yesICanDecContents.kpi2 > '12' && yesICanDecContents.kpi2 <= '16')?'orange':(yesICanDecContents.kpi2 > '16' && yesICanDecContents.kpi2 < '20')?'yellow-7':(yesICanDecContents.kpi2 >= '20' && yesICanDecContents.kpi2 < '24')?'green':(yesICanDecContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi3 == null)?'grey-2':(yesICanDecContents.kpi3 >= '0' && yesICanDecContents.kpi3 <= '6.6')?'red':(yesICanDecContents.kpi3 > '6.6' && yesICanDecContents.kpi3 <= '8.8')?'orange':(yesICanDecContents.kpi3 > '8.8' && yesICanDecContents.kpi3 < '11')?'yellow-7':(yesICanDecContents.kpi3 >= '11' && yesICanDecContents.kpi3 < '13.2')?'green':(yesICanDecContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                                <q-tooltip># of people using the service (unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of first time users at the FB in the program</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJanContents.kpi1 == null)?'grey-2':(yesICanJanContents.kpi1 >= '0' && yesICanJanContents.kpi1 <= '1.8')?'red':(yesICanJanContents.kpi1 > '1.8' && yesICanJanContents.kpi1 <= '2.4')?'orange':(yesICanJanContents.kpi1 > '2.4' && yesICanJanContents.kpi1 < '3')?'yellow-7':(yesICanJanContents.kpi1 >= '3' && yesICanJanContents.kpi1 < '3.6')?'green':(yesICanJanContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi2 == null)?'grey-2':(yesICanJanContents.kpi2 >= '0' && yesICanJanContents.kpi2 <= '12')?'red':(yesICanJanContents.kpi2 > '12' && yesICanJanContents.kpi2 <= '16')?'orange':(yesICanJanContents.kpi2 > '16' && yesICanJanContents.kpi2 < '20')?'yellow-7':(yesICanJanContents.kpi2 >= '20' && yesICanJanContents.kpi2 < '24')?'green':(yesICanJanContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi3 == null)?'grey-2':(yesICanJanContents.kpi3 >= '0' && yesICanJanContents.kpi3 <= '6.6')?'red':(yesICanJanContents.kpi3 > '6.6' && yesICanJanContents.kpi3 <= '8.8')?'orange':(yesICanJanContents.kpi3 > '8.8' && yesICanJanContents.kpi3 < '11')?'yellow-7':(yesICanJanContents.kpi3 >= '11' && yesICanJanContents.kpi3 < '13.2')?'green':(yesICanJanContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanFebContents.kpi1 == null)?'grey-2':(yesICanFebContents.kpi1 >= '0' && yesICanFebContents.kpi1 <= '1.8')?'red':(yesICanFebContents.kpi1 > '1.8' && yesICanFebContents.kpi1 <= '2.4')?'orange':(yesICanFebContents.kpi1 > '2.4' && yesICanFebContents.kpi1 < '3')?'yellow-7':(yesICanFebContents.kpi1 >= '3' && yesICanFebContents.kpi1 < '3.6')?'green':(yesICanFebContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi2 == null)?'grey-2':(yesICanFebContents.kpi2 >= '0' && yesICanFebContents.kpi2 <= '12')?'red':(yesICanFebContents.kpi2 > '12' && yesICanFebContents.kpi2 <= '16')?'orange':(yesICanFebContents.kpi2 > '16' && yesICanFebContents.kpi2 < '20')?'yellow-7':(yesICanFebContents.kpi2 >= '20' && yesICanFebContents.kpi2 < '24')?'green':(yesICanFebContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi3 == null)?'grey-2':(yesICanFebContents.kpi3 >= '0' && yesICanFebContents.kpi3 <= '6.6')?'red':(yesICanFebContents.kpi3 > '6.6' && yesICanFebContents.kpi3 <= '8.8')?'orange':(yesICanFebContents.kpi3 > '8.8' && yesICanFebContents.kpi3 < '11')?'yellow-7':(yesICanFebContents.kpi3 >= '11' && yesICanFebContents.kpi3 < '13.2')?'green':(yesICanFebContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMarContents.kpi1 == null)?'grey-2':(yesICanMarContents.kpi1 >= '0' && yesICanMarContents.kpi1 <= '1.8')?'red':(yesICanMarContents.kpi1 > '1.8' && yesICanMarContents.kpi1 <= '2.4')?'orange':(yesICanMarContents.kpi1 > '2.4' && yesICanMarContents.kpi1 < '3')?'yellow-7':(yesICanMarContents.kpi1 >= '3' && yesICanMarContents.kpi1 < '3.6')?'green':(yesICanMarContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi2 == null)?'grey-2':(yesICanMarContents.kpi2 >= '0' && yesICanMarContents.kpi2 <= '12')?'red':(yesICanMarContents.kpi2 > '12' && yesICanMarContents.kpi2 <= '16')?'orange':(yesICanMarContents.kpi2 > '16' && yesICanMarContents.kpi2 < '20')?'yellow-7':(yesICanMarContents.kpi2 >= '20' && yesICanMarContents.kpi2 < '24')?'green':(yesICanMarContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi3 == null)?'grey-2':(yesICanMarContents.kpi3 >= '0' && yesICanMarContents.kpi3 <= '6.6')?'red':(yesICanMarContents.kpi3 > '6.6' && yesICanMarContents.kpi3 <= '8.8')?'orange':(yesICanMarContents.kpi3 > '8.8' && yesICanMarContents.kpi3 < '11')?'yellow-7':(yesICanMarContents.kpi3 >= '11' && yesICanMarContents.kpi3 < '13.2')?'green':(yesICanMarContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAprContents.kpi1 == null)?'grey-2':(yesICanAprContents.kpi1 >= '0' && yesICanAprContents.kpi1 <= '1.8')?'red':(yesICanAprContents.kpi1 > '1.8' && yesICanAprContents.kpi1 <= '2.4')?'orange':(yesICanAprContents.kpi1 > '2.4' && yesICanAprContents.kpi1 < '3')?'yellow-7':(yesICanAprContents.kpi1 >= '3' && yesICanAprContents.kpi1 < '3.6')?'green':(yesICanAprContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi2 == null)?'grey-2':(yesICanAprContents.kpi2 >= '0' && yesICanAprContents.kpi2 <= '12')?'red':(yesICanAprContents.kpi2 > '12' && yesICanAprContents.kpi2 <= '16')?'orange':(yesICanAprContents.kpi2 > '16' && yesICanAprContents.kpi2 < '20')?'yellow-7':(yesICanAprContents.kpi2 >= '20' && yesICanAprContents.kpi2 < '24')?'green':(yesICanAprContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi3 == null)?'grey-2':(yesICanAprContents.kpi3 >= '0' && yesICanAprContents.kpi3 <= '6.6')?'red':(yesICanAprContents.kpi3 > '6.6' && yesICanAprContents.kpi3 <= '8.8')?'orange':(yesICanAprContents.kpi3 > '8.8' && yesICanAprContents.kpi3 < '11')?'yellow-7':(yesICanAprContents.kpi3 >= '11' && yesICanAprContents.kpi3 < '13.2')?'green':(yesICanAprContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMayContents.kpi1 == null)?'grey-2':(yesICanMayContents.kpi1 >= '0' && yesICanMayContents.kpi1 <= '1.8')?'red':(yesICanMayContents.kpi1 > '1.8' && yesICanMayContents.kpi1 <= '2.4')?'orange':(yesICanMayContents.kpi1 > '2.4' && yesICanMayContents.kpi1 < '3')?'yellow-7':(yesICanMayContents.kpi1 >= '3' && yesICanMayContents.kpi1 < '3.6')?'green':(yesICanMayContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi2 == null)?'grey-2':(yesICanMayContents.kpi2 >= '0' && yesICanMayContents.kpi2 <= '12')?'red':(yesICanMayContents.kpi2 > '12' && yesICanMayContents.kpi2 <= '16')?'orange':(yesICanMayContents.kpi2 > '16' && yesICanMayContents.kpi2 < '20')?'yellow-7':(yesICanMayContents.kpi2 >= '20' && yesICanMayContents.kpi2 < '24')?'green':(yesICanMayContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi3 == null)?'grey-2':(yesICanMayContents.kpi3 >= '0' && yesICanMayContents.kpi3 <= '6.6')?'red':(yesICanMayContents.kpi3 > '6.6' && yesICanMayContents.kpi3 <= '8.8')?'orange':(yesICanMayContents.kpi3 > '8.8' && yesICanMayContents.kpi3 < '11')?'yellow-7':(yesICanMayContents.kpi3 >= '11' && yesICanMayContents.kpi3 < '13.2')?'green':(yesICanMayContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJunContents.kpi1 == null)?'grey-2':(yesICanJunContents.kpi1 >= '0' && yesICanJunContents.kpi1 <= '1.8')?'red':(yesICanJunContents.kpi1 > '1.8' && yesICanJunContents.kpi1 <= '2.4')?'orange':(yesICanJunContents.kpi1 > '2.4' && yesICanJunContents.kpi1 < '3')?'yellow-7':(yesICanJunContents.kpi1 >= '3' && yesICanJunContents.kpi1 < '3.6')?'green':(yesICanJunContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi2 == null)?'grey-2':(yesICanJunContents.kpi2 >= '0' && yesICanJunContents.kpi2 <= '12')?'red':(yesICanJunContents.kpi2 > '12' && yesICanJunContents.kpi2 <= '16')?'orange':(yesICanJunContents.kpi2 > '16' && yesICanJunContents.kpi2 < '20')?'yellow-7':(yesICanJunContents.kpi2 >= '20' && yesICanJunContents.kpi2 < '24')?'green':(yesICanJunContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi3 == null)?'grey-2':(yesICanJunContents.kpi3 >= '0' && yesICanJunContents.kpi3 <= '6.6')?'red':(yesICanJunContents.kpi3 > '6.6' && yesICanJunContents.kpi3 <= '8.8')?'orange':(yesICanJunContents.kpi3 > '8.8' && yesICanJunContents.kpi3 < '11')?'yellow-7':(yesICanJunContents.kpi3 >= '11' && yesICanJunContents.kpi3 < '13.2')?'green':(yesICanJunContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJulContents.kpi1 == null)?'grey-2':(yesICanJulContents.kpi1 >= '0' && yesICanJulContents.kpi1 <= '1.8')?'red':(yesICanJulContents.kpi1 > '1.8' && yesICanJulContents.kpi1 <= '2.4')?'orange':(yesICanJulContents.kpi1 > '2.4' && yesICanJulContents.kpi1 < '3')?'yellow-7':(yesICanJulContents.kpi1 >= '3' && yesICanJulContents.kpi1 < '3.6')?'green':(yesICanJulContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi2 == null)?'grey-2':(yesICanJulContents.kpi2 >= '0' && yesICanJulContents.kpi2 <= '12')?'red':(yesICanJulContents.kpi2 > '12' && yesICanJulContents.kpi2 <= '16')?'orange':(yesICanJulContents.kpi2 > '16' && yesICanJulContents.kpi2 < '20')?'yellow-7':(yesICanJulContents.kpi2 >= '20' && yesICanJulContents.kpi2 < '24')?'green':(yesICanJulContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi3 == null)?'grey-2':(yesICanJulContents.kpi3 >= '0' && yesICanJulContents.kpi3 <= '6.6')?'red':(yesICanJulContents.kpi3 > '6.6' && yesICanJulContents.kpi3 <= '8.8')?'orange':(yesICanJulContents.kpi3 > '8.8' && yesICanJulContents.kpi3 < '11')?'yellow-7':(yesICanJulContents.kpi3 >= '11' && yesICanJulContents.kpi3 < '13.2')?'green':(yesICanJulContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAugContents.kpi1 == null)?'grey-2':(yesICanAugContents.kpi1 >= '0' && yesICanAugContents.kpi1 <= '1.8')?'red':(yesICanAugContents.kpi1 > '1.8' && yesICanAugContents.kpi1 <= '2.4')?'orange':(yesICanAugContents.kpi1 > '2.4' && yesICanAugContents.kpi1 < '3')?'yellow-7':(yesICanAugContents.kpi1 >= '3' && yesICanAugContents.kpi1 < '3.6')?'green':(yesICanAugContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi2 == null)?'grey-2':(yesICanAugContents.kpi2 >= '0' && yesICanAugContents.kpi2 <= '12')?'red':(yesICanAugContents.kpi2 > '12' && yesICanAugContents.kpi2 <= '16')?'orange':(yesICanAugContents.kpi2 > '16' && yesICanAugContents.kpi2 < '20')?'yellow-7':(yesICanAugContents.kpi2 >= '20' && yesICanAugContents.kpi2 < '24')?'green':(yesICanAugContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi3 == null)?'grey-2':(yesICanAugContents.kpi3 >= '0' && yesICanAugContents.kpi3 <= '6.6')?'red':(yesICanAugContents.kpi3 > '6.6' && yesICanAugContents.kpi3 <= '8.8')?'orange':(yesICanAugContents.kpi3 > '8.8' && yesICanAugContents.kpi3 < '11')?'yellow-7':(yesICanAugContents.kpi3 >= '11' && yesICanAugContents.kpi3 < '13.2')?'green':(yesICanAugContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanSepContents.kpi1 == null)?'grey-2':(yesICanSepContents.kpi1 >= '0' && yesICanSepContents.kpi1 <= '1.8')?'red':(yesICanSepContents.kpi1 > '1.8' && yesICanSepContents.kpi1 <= '2.4')?'orange':(yesICanSepContents.kpi1 > '2.4' && yesICanSepContents.kpi1 < '3')?'yellow-7':(yesICanSepContents.kpi1 >= '3' && yesICanSepContents.kpi1 < '3.6')?'green':(yesICanSepContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi2 == null)?'grey-2':(yesICanSepContents.kpi2 >= '0' && yesICanSepContents.kpi2 <= '12')?'red':(yesICanSepContents.kpi2 > '12' && yesICanSepContents.kpi2 <= '16')?'orange':(yesICanSepContents.kpi2 > '16' && yesICanSepContents.kpi2 < '20')?'yellow-7':(yesICanSepContents.kpi2 >= '20' && yesICanSepContents.kpi2 < '24')?'green':(yesICanSepContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi3 == null)?'grey-2':(yesICanSepContents.kpi3 >= '0' && yesICanSepContents.kpi3 <= '6.6')?'red':(yesICanSepContents.kpi3 > '6.6' && yesICanSepContents.kpi3 <= '8.8')?'orange':(yesICanSepContents.kpi3 > '8.8' && yesICanSepContents.kpi3 < '11')?'yellow-7':(yesICanSepContents.kpi3 >= '11' && yesICanSepContents.kpi3 < '13.2')?'green':(yesICanSepContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanOctContents.kpi1 == null)?'grey-2':(yesICanOctContents.kpi1 >= '0' && yesICanOctContents.kpi1 <= '1.8')?'red':(yesICanOctContents.kpi1 > '1.8' && yesICanOctContents.kpi1 <= '2.4')?'orange':(yesICanOctContents.kpi1 > '2.4' && yesICanOctContents.kpi1 < '3')?'yellow-7':(yesICanOctContents.kpi1 >= '3' && yesICanOctContents.kpi1 < '3.6')?'green':(yesICanOctContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi2 == null)?'grey-2':(yesICanOctContents.kpi2 >= '0' && yesICanOctContents.kpi2 <= '12')?'red':(yesICanOctContents.kpi2 > '12' && yesICanOctContents.kpi2 <= '16')?'orange':(yesICanOctContents.kpi2 > '16' && yesICanOctContents.kpi2 < '20')?'yellow-7':(yesICanOctContents.kpi2 >= '20' && yesICanOctContents.kpi2 < '24')?'green':(yesICanOctContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi3 == null)?'grey-2':(yesICanOctContents.kpi3 >= '0' && yesICanOctContents.kpi3 <= '6.6')?'red':(yesICanOctContents.kpi3 > '6.6' && yesICanOctContents.kpi3 <= '8.8')?'orange':(yesICanOctContents.kpi3 > '8.8' && yesICanOctContents.kpi3 < '11')?'yellow-7':(yesICanOctContents.kpi3 >= '11' && yesICanOctContents.kpi3 < '13.2')?'green':(yesICanOctContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanNovContents.kpi1 == null)?'grey-2':(yesICanNovContents.kpi1 >= '0' && yesICanNovContents.kpi1 <= '1.8')?'red':(yesICanNovContents.kpi1 > '1.8' && yesICanNovContents.kpi1 <= '2.4')?'orange':(yesICanNovContents.kpi1 > '2.4' && yesICanNovContents.kpi1 < '3')?'yellow-7':(yesICanNovContents.kpi1 >= '3' && yesICanNovContents.kpi1 < '3.6')?'green':(yesICanNovContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi2 == null)?'grey-2':(yesICanNovContents.kpi2 >= '0' && yesICanNovContents.kpi2 <= '12')?'red':(yesICanNovContents.kpi2 > '12' && yesICanNovContents.kpi2 <= '16')?'orange':(yesICanNovContents.kpi2 > '16' && yesICanNovContents.kpi2 < '20')?'yellow-7':(yesICanNovContents.kpi2 >= '20' && yesICanNovContents.kpi2 < '24')?'green':(yesICanNovContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi3 == null)?'grey-2':(yesICanNovContents.kpi3 >= '0' && yesICanNovContents.kpi3 <= '6.6')?'red':(yesICanNovContents.kpi3 > '6.6' && yesICanNovContents.kpi3 <= '8.8')?'orange':(yesICanNovContents.kpi3 > '8.8' && yesICanNovContents.kpi3 < '11')?'yellow-7':(yesICanNovContents.kpi3 >= '11' && yesICanNovContents.kpi3 < '13.2')?'green':(yesICanNovContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanDecContents.kpi1 == null)?'grey-2':(yesICanDecContents.kpi1 >= '0' && yesICanDecContents.kpi1 <= '1.8')?'red':(yesICanDecContents.kpi1 > '1.8' && yesICanDecContents.kpi1 <= '2.4')?'orange':(yesICanDecContents.kpi1 > '2.4' && yesICanDecContents.kpi1 < '3')?'yellow-7':(yesICanDecContents.kpi1 >= '3' && yesICanDecContents.kpi1 < '3.6')?'green':(yesICanDecContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi2 == null)?'grey-2':(yesICanDecContents.kpi2 >= '0' && yesICanDecContents.kpi2 <= '12')?'red':(yesICanDecContents.kpi2 > '12' && yesICanDecContents.kpi2 <= '16')?'orange':(yesICanDecContents.kpi2 > '16' && yesICanDecContents.kpi2 < '20')?'yellow-7':(yesICanDecContents.kpi2 >= '20' && yesICanDecContents.kpi2 < '24')?'green':(yesICanDecContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi3 == null)?'grey-2':(yesICanDecContents.kpi3 >= '0' && yesICanDecContents.kpi3 <= '6.6')?'red':(yesICanDecContents.kpi3 > '6.6' && yesICanDecContents.kpi3 <= '8.8')?'orange':(yesICanDecContents.kpi3 > '8.8' && yesICanDecContents.kpi3 < '11')?'yellow-7':(yesICanDecContents.kpi3 >= '11' && yesICanDecContents.kpi3 < '13.2')?'green':(yesICanDecContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                                <q-tooltip># of people using the service (unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of first time users at the FB in the program</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJanContents.kpi1 == null)?'grey-2':(yesICanJanContents.kpi1 >= '0' && yesICanJanContents.kpi1 <= '1.8')?'red':(yesICanJanContents.kpi1 > '1.8' && yesICanJanContents.kpi1 <= '2.4')?'orange':(yesICanJanContents.kpi1 > '2.4' && yesICanJanContents.kpi1 < '3')?'yellow-7':(yesICanJanContents.kpi1 >= '3' && yesICanJanContents.kpi1 < '3.6')?'green':(yesICanJanContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi2 == null)?'grey-2':(yesICanJanContents.kpi2 >= '0' && yesICanJanContents.kpi2 <= '12')?'red':(yesICanJanContents.kpi2 > '12' && yesICanJanContents.kpi2 <= '16')?'orange':(yesICanJanContents.kpi2 > '16' && yesICanJanContents.kpi2 < '20')?'yellow-7':(yesICanJanContents.kpi2 >= '20' && yesICanJanContents.kpi2 < '24')?'green':(yesICanJanContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi3 == null)?'grey-2':(yesICanJanContents.kpi3 >= '0' && yesICanJanContents.kpi3 <= '6.6')?'red':(yesICanJanContents.kpi3 > '6.6' && yesICanJanContents.kpi3 <= '8.8')?'orange':(yesICanJanContents.kpi3 > '8.8' && yesICanJanContents.kpi3 < '11')?'yellow-7':(yesICanJanContents.kpi3 >= '11' && yesICanJanContents.kpi3 < '13.2')?'green':(yesICanJanContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanFebContents.kpi1 == null)?'grey-2':(yesICanFebContents.kpi1 >= '0' && yesICanFebContents.kpi1 <= '1.8')?'red':(yesICanFebContents.kpi1 > '1.8' && yesICanFebContents.kpi1 <= '2.4')?'orange':(yesICanFebContents.kpi1 > '2.4' && yesICanFebContents.kpi1 < '3')?'yellow-7':(yesICanFebContents.kpi1 >= '3' && yesICanFebContents.kpi1 < '3.6')?'green':(yesICanFebContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi2 == null)?'grey-2':(yesICanFebContents.kpi2 >= '0' && yesICanFebContents.kpi2 <= '12')?'red':(yesICanFebContents.kpi2 > '12' && yesICanFebContents.kpi2 <= '16')?'orange':(yesICanFebContents.kpi2 > '16' && yesICanFebContents.kpi2 < '20')?'yellow-7':(yesICanFebContents.kpi2 >= '20' && yesICanFebContents.kpi2 < '24')?'green':(yesICanFebContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi3 == null)?'grey-2':(yesICanFebContents.kpi3 >= '0' && yesICanFebContents.kpi3 <= '6.6')?'red':(yesICanFebContents.kpi3 > '6.6' && yesICanFebContents.kpi3 <= '8.8')?'orange':(yesICanFebContents.kpi3 > '8.8' && yesICanFebContents.kpi3 < '11')?'yellow-7':(yesICanFebContents.kpi3 >= '11' && yesICanFebContents.kpi3 < '13.2')?'green':(yesICanFebContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMarContents.kpi1 == null)?'grey-2':(yesICanMarContents.kpi1 >= '0' && yesICanMarContents.kpi1 <= '1.8')?'red':(yesICanMarContents.kpi1 > '1.8' && yesICanMarContents.kpi1 <= '2.4')?'orange':(yesICanMarContents.kpi1 > '2.4' && yesICanMarContents.kpi1 < '3')?'yellow-7':(yesICanMarContents.kpi1 >= '3' && yesICanMarContents.kpi1 < '3.6')?'green':(yesICanMarContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi2 == null)?'grey-2':(yesICanMarContents.kpi2 >= '0' && yesICanMarContents.kpi2 <= '12')?'red':(yesICanMarContents.kpi2 > '12' && yesICanMarContents.kpi2 <= '16')?'orange':(yesICanMarContents.kpi2 > '16' && yesICanMarContents.kpi2 < '20')?'yellow-7':(yesICanMarContents.kpi2 >= '20' && yesICanMarContents.kpi2 < '24')?'green':(yesICanMarContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi3 == null)?'grey-2':(yesICanMarContents.kpi3 >= '0' && yesICanMarContents.kpi3 <= '6.6')?'red':(yesICanMarContents.kpi3 > '6.6' && yesICanMarContents.kpi3 <= '8.8')?'orange':(yesICanMarContents.kpi3 > '8.8' && yesICanMarContents.kpi3 < '11')?'yellow-7':(yesICanMarContents.kpi3 >= '11' && yesICanMarContents.kpi3 < '13.2')?'green':(yesICanMarContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAprContents.kpi1 == null)?'grey-2':(yesICanAprContents.kpi1 >= '0' && yesICanAprContents.kpi1 <= '1.8')?'red':(yesICanAprContents.kpi1 > '1.8' && yesICanAprContents.kpi1 <= '2.4')?'orange':(yesICanAprContents.kpi1 > '2.4' && yesICanAprContents.kpi1 < '3')?'yellow-7':(yesICanAprContents.kpi1 >= '3' && yesICanAprContents.kpi1 < '3.6')?'green':(yesICanAprContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi2 == null)?'grey-2':(yesICanAprContents.kpi2 >= '0' && yesICanAprContents.kpi2 <= '12')?'red':(yesICanAprContents.kpi2 > '12' && yesICanAprContents.kpi2 <= '16')?'orange':(yesICanAprContents.kpi2 > '16' && yesICanAprContents.kpi2 < '20')?'yellow-7':(yesICanAprContents.kpi2 >= '20' && yesICanAprContents.kpi2 < '24')?'green':(yesICanAprContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi3 == null)?'grey-2':(yesICanAprContents.kpi3 >= '0' && yesICanAprContents.kpi3 <= '6.6')?'red':(yesICanAprContents.kpi3 > '6.6' && yesICanAprContents.kpi3 <= '8.8')?'orange':(yesICanAprContents.kpi3 > '8.8' && yesICanAprContents.kpi3 < '11')?'yellow-7':(yesICanAprContents.kpi3 >= '11' && yesICanAprContents.kpi3 < '13.2')?'green':(yesICanAprContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMayContents.kpi1 == null)?'grey-2':(yesICanMayContents.kpi1 >= '0' && yesICanMayContents.kpi1 <= '1.8')?'red':(yesICanMayContents.kpi1 > '1.8' && yesICanMayContents.kpi1 <= '2.4')?'orange':(yesICanMayContents.kpi1 > '2.4' && yesICanMayContents.kpi1 < '3')?'yellow-7':(yesICanMayContents.kpi1 >= '3' && yesICanMayContents.kpi1 < '3.6')?'green':(yesICanMayContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi2 == null)?'grey-2':(yesICanMayContents.kpi2 >= '0' && yesICanMayContents.kpi2 <= '12')?'red':(yesICanMayContents.kpi2 > '12' && yesICanMayContents.kpi2 <= '16')?'orange':(yesICanMayContents.kpi2 > '16' && yesICanMayContents.kpi2 < '20')?'yellow-7':(yesICanMayContents.kpi2 >= '20' && yesICanMayContents.kpi2 < '24')?'green':(yesICanMayContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi3 == null)?'grey-2':(yesICanMayContents.kpi3 >= '0' && yesICanMayContents.kpi3 <= '6.6')?'red':(yesICanMayContents.kpi3 > '6.6' && yesICanMayContents.kpi3 <= '8.8')?'orange':(yesICanMayContents.kpi3 > '8.8' && yesICanMayContents.kpi3 < '11')?'yellow-7':(yesICanMayContents.kpi3 >= '11' && yesICanMayContents.kpi3 < '13.2')?'green':(yesICanMayContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJunContents.kpi1 == null)?'grey-2':(yesICanJunContents.kpi1 >= '0' && yesICanJunContents.kpi1 <= '1.8')?'red':(yesICanJunContents.kpi1 > '1.8' && yesICanJunContents.kpi1 <= '2.4')?'orange':(yesICanJunContents.kpi1 > '2.4' && yesICanJunContents.kpi1 < '3')?'yellow-7':(yesICanJunContents.kpi1 >= '3' && yesICanJunContents.kpi1 < '3.6')?'green':(yesICanJunContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi2 == null)?'grey-2':(yesICanJunContents.kpi2 >= '0' && yesICanJunContents.kpi2 <= '12')?'red':(yesICanJunContents.kpi2 > '12' && yesICanJunContents.kpi2 <= '16')?'orange':(yesICanJunContents.kpi2 > '16' && yesICanJunContents.kpi2 < '20')?'yellow-7':(yesICanJunContents.kpi2 >= '20' && yesICanJunContents.kpi2 < '24')?'green':(yesICanJunContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi3 == null)?'grey-2':(yesICanJunContents.kpi3 >= '0' && yesICanJunContents.kpi3 <= '6.6')?'red':(yesICanJunContents.kpi3 > '6.6' && yesICanJunContents.kpi3 <= '8.8')?'orange':(yesICanJunContents.kpi3 > '8.8' && yesICanJunContents.kpi3 < '11')?'yellow-7':(yesICanJunContents.kpi3 >= '11' && yesICanJunContents.kpi3 < '13.2')?'green':(yesICanJunContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJulContents.kpi1 == null)?'grey-2':(yesICanJulContents.kpi1 >= '0' && yesICanJulContents.kpi1 <= '1.8')?'red':(yesICanJulContents.kpi1 > '1.8' && yesICanJulContents.kpi1 <= '2.4')?'orange':(yesICanJulContents.kpi1 > '2.4' && yesICanJulContents.kpi1 < '3')?'yellow-7':(yesICanJulContents.kpi1 >= '3' && yesICanJulContents.kpi1 < '3.6')?'green':(yesICanJulContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi2 == null)?'grey-2':(yesICanJulContents.kpi2 >= '0' && yesICanJulContents.kpi2 <= '12')?'red':(yesICanJulContents.kpi2 > '12' && yesICanJulContents.kpi2 <= '16')?'orange':(yesICanJulContents.kpi2 > '16' && yesICanJulContents.kpi2 < '20')?'yellow-7':(yesICanJulContents.kpi2 >= '20' && yesICanJulContents.kpi2 < '24')?'green':(yesICanJulContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi3 == null)?'grey-2':(yesICanJulContents.kpi3 >= '0' && yesICanJulContents.kpi3 <= '6.6')?'red':(yesICanJulContents.kpi3 > '6.6' && yesICanJulContents.kpi3 <= '8.8')?'orange':(yesICanJulContents.kpi3 > '8.8' && yesICanJulContents.kpi3 < '11')?'yellow-7':(yesICanJulContents.kpi3 >= '11' && yesICanJulContents.kpi3 < '13.2')?'green':(yesICanJulContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAugContents.kpi1 == null)?'grey-2':(yesICanAugContents.kpi1 >= '0' && yesICanAugContents.kpi1 <= '1.8')?'red':(yesICanAugContents.kpi1 > '1.8' && yesICanAugContents.kpi1 <= '2.4')?'orange':(yesICanAugContents.kpi1 > '2.4' && yesICanAugContents.kpi1 < '3')?'yellow-7':(yesICanAugContents.kpi1 >= '3' && yesICanAugContents.kpi1 < '3.6')?'green':(yesICanAugContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi2 == null)?'grey-2':(yesICanAugContents.kpi2 >= '0' && yesICanAugContents.kpi2 <= '12')?'red':(yesICanAugContents.kpi2 > '12' && yesICanAugContents.kpi2 <= '16')?'orange':(yesICanAugContents.kpi2 > '16' && yesICanAugContents.kpi2 < '20')?'yellow-7':(yesICanAugContents.kpi2 >= '20' && yesICanAugContents.kpi2 < '24')?'green':(yesICanAugContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi3 == null)?'grey-2':(yesICanAugContents.kpi3 >= '0' && yesICanAugContents.kpi3 <= '6.6')?'red':(yesICanAugContents.kpi3 > '6.6' && yesICanAugContents.kpi3 <= '8.8')?'orange':(yesICanAugContents.kpi3 > '8.8' && yesICanAugContents.kpi3 < '11')?'yellow-7':(yesICanAugContents.kpi3 >= '11' && yesICanAugContents.kpi3 < '13.2')?'green':(yesICanAugContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanSepContents.kpi1 == null)?'grey-2':(yesICanSepContents.kpi1 >= '0' && yesICanSepContents.kpi1 <= '1.8')?'red':(yesICanSepContents.kpi1 > '1.8' && yesICanSepContents.kpi1 <= '2.4')?'orange':(yesICanSepContents.kpi1 > '2.4' && yesICanSepContents.kpi1 < '3')?'yellow-7':(yesICanSepContents.kpi1 >= '3' && yesICanSepContents.kpi1 < '3.6')?'green':(yesICanSepContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi2 == null)?'grey-2':(yesICanSepContents.kpi2 >= '0' && yesICanSepContents.kpi2 <= '12')?'red':(yesICanSepContents.kpi2 > '12' && yesICanSepContents.kpi2 <= '16')?'orange':(yesICanSepContents.kpi2 > '16' && yesICanSepContents.kpi2 < '20')?'yellow-7':(yesICanSepContents.kpi2 >= '20' && yesICanSepContents.kpi2 < '24')?'green':(yesICanSepContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi3 == null)?'grey-2':(yesICanSepContents.kpi3 >= '0' && yesICanSepContents.kpi3 <= '6.6')?'red':(yesICanSepContents.kpi3 > '6.6' && yesICanSepContents.kpi3 <= '8.8')?'orange':(yesICanSepContents.kpi3 > '8.8' && yesICanSepContents.kpi3 < '11')?'yellow-7':(yesICanSepContents.kpi3 >= '11' && yesICanSepContents.kpi3 < '13.2')?'green':(yesICanSepContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanOctContents.kpi1 == null)?'grey-2':(yesICanOctContents.kpi1 >= '0' && yesICanOctContents.kpi1 <= '1.8')?'red':(yesICanOctContents.kpi1 > '1.8' && yesICanOctContents.kpi1 <= '2.4')?'orange':(yesICanOctContents.kpi1 > '2.4' && yesICanOctContents.kpi1 < '3')?'yellow-7':(yesICanOctContents.kpi1 >= '3' && yesICanOctContents.kpi1 < '3.6')?'green':(yesICanOctContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi2 == null)?'grey-2':(yesICanOctContents.kpi2 >= '0' && yesICanOctContents.kpi2 <= '12')?'red':(yesICanOctContents.kpi2 > '12' && yesICanOctContents.kpi2 <= '16')?'orange':(yesICanOctContents.kpi2 > '16' && yesICanOctContents.kpi2 < '20')?'yellow-7':(yesICanOctContents.kpi2 >= '20' && yesICanOctContents.kpi2 < '24')?'green':(yesICanOctContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi3 == null)?'grey-2':(yesICanOctContents.kpi3 >= '0' && yesICanOctContents.kpi3 <= '6.6')?'red':(yesICanOctContents.kpi3 > '6.6' && yesICanOctContents.kpi3 <= '8.8')?'orange':(yesICanOctContents.kpi3 > '8.8' && yesICanOctContents.kpi3 < '11')?'yellow-7':(yesICanOctContents.kpi3 >= '11' && yesICanOctContents.kpi3 < '13.2')?'green':(yesICanOctContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanNovContents.kpi1 == null)?'grey-2':(yesICanNovContents.kpi1 >= '0' && yesICanNovContents.kpi1 <= '1.8')?'red':(yesICanNovContents.kpi1 > '1.8' && yesICanNovContents.kpi1 <= '2.4')?'orange':(yesICanNovContents.kpi1 > '2.4' && yesICanNovContents.kpi1 < '3')?'yellow-7':(yesICanNovContents.kpi1 >= '3' && yesICanNovContents.kpi1 < '3.6')?'green':(yesICanNovContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi2 == null)?'grey-2':(yesICanNovContents.kpi2 >= '0' && yesICanNovContents.kpi2 <= '12')?'red':(yesICanNovContents.kpi2 > '12' && yesICanNovContents.kpi2 <= '16')?'orange':(yesICanNovContents.kpi2 > '16' && yesICanNovContents.kpi2 < '20')?'yellow-7':(yesICanNovContents.kpi2 >= '20' && yesICanNovContents.kpi2 < '24')?'green':(yesICanNovContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi3 == null)?'grey-2':(yesICanNovContents.kpi3 >= '0' && yesICanNovContents.kpi3 <= '6.6')?'red':(yesICanNovContents.kpi3 > '6.6' && yesICanNovContents.kpi3 <= '8.8')?'orange':(yesICanNovContents.kpi3 > '8.8' && yesICanNovContents.kpi3 < '11')?'yellow-7':(yesICanNovContents.kpi3 >= '11' && yesICanNovContents.kpi3 < '13.2')?'green':(yesICanNovContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanDecContents.kpi1 == null)?'grey-2':(yesICanDecContents.kpi1 >= '0' && yesICanDecContents.kpi1 <= '1.8')?'red':(yesICanDecContents.kpi1 > '1.8' && yesICanDecContents.kpi1 <= '2.4')?'orange':(yesICanDecContents.kpi1 > '2.4' && yesICanDecContents.kpi1 < '3')?'yellow-7':(yesICanDecContents.kpi1 >= '3' && yesICanDecContents.kpi1 < '3.6')?'green':(yesICanDecContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi2 == null)?'grey-2':(yesICanDecContents.kpi2 >= '0' && yesICanDecContents.kpi2 <= '12')?'red':(yesICanDecContents.kpi2 > '12' && yesICanDecContents.kpi2 <= '16')?'orange':(yesICanDecContents.kpi2 > '16' && yesICanDecContents.kpi2 < '20')?'yellow-7':(yesICanDecContents.kpi2 >= '20' && yesICanDecContents.kpi2 < '24')?'green':(yesICanDecContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi3 == null)?'grey-2':(yesICanDecContents.kpi3 >= '0' && yesICanDecContents.kpi3 <= '6.6')?'red':(yesICanDecContents.kpi3 > '6.6' && yesICanDecContents.kpi3 <= '8.8')?'orange':(yesICanDecContents.kpi3 > '8.8' && yesICanDecContents.kpi3 < '11')?'yellow-7':(yesICanDecContents.kpi3 >= '11' && yesICanDecContents.kpi3 < '13.2')?'green':(yesICanDecContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                                <q-tooltip># of people using the service (unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of first time users at the FB in the program</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJanContents.kpi1 == null)?'grey-2':(yesICanJanContents.kpi1 >= '0' && yesICanJanContents.kpi1 <= '1.8')?'red':(yesICanJanContents.kpi1 > '1.8' && yesICanJanContents.kpi1 <= '2.4')?'orange':(yesICanJanContents.kpi1 > '2.4' && yesICanJanContents.kpi1 < '3')?'yellow-7':(yesICanJanContents.kpi1 >= '3' && yesICanJanContents.kpi1 < '3.6')?'green':(yesICanJanContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi2 == null)?'grey-2':(yesICanJanContents.kpi2 >= '0' && yesICanJanContents.kpi2 <= '12')?'red':(yesICanJanContents.kpi2 > '12' && yesICanJanContents.kpi2 <= '16')?'orange':(yesICanJanContents.kpi2 > '16' && yesICanJanContents.kpi2 < '20')?'yellow-7':(yesICanJanContents.kpi2 >= '20' && yesICanJanContents.kpi2 < '24')?'green':(yesICanJanContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi3 == null)?'grey-2':(yesICanJanContents.kpi3 >= '0' && yesICanJanContents.kpi3 <= '6.6')?'red':(yesICanJanContents.kpi3 > '6.6' && yesICanJanContents.kpi3 <= '8.8')?'orange':(yesICanJanContents.kpi3 > '8.8' && yesICanJanContents.kpi3 < '11')?'yellow-7':(yesICanJanContents.kpi3 >= '11' && yesICanJanContents.kpi3 < '13.2')?'green':(yesICanJanContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanFebContents.kpi1 == null)?'grey-2':(yesICanFebContents.kpi1 >= '0' && yesICanFebContents.kpi1 <= '1.8')?'red':(yesICanFebContents.kpi1 > '1.8' && yesICanFebContents.kpi1 <= '2.4')?'orange':(yesICanFebContents.kpi1 > '2.4' && yesICanFebContents.kpi1 < '3')?'yellow-7':(yesICanFebContents.kpi1 >= '3' && yesICanFebContents.kpi1 < '3.6')?'green':(yesICanFebContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi2 == null)?'grey-2':(yesICanFebContents.kpi2 >= '0' && yesICanFebContents.kpi2 <= '12')?'red':(yesICanFebContents.kpi2 > '12' && yesICanFebContents.kpi2 <= '16')?'orange':(yesICanFebContents.kpi2 > '16' && yesICanFebContents.kpi2 < '20')?'yellow-7':(yesICanFebContents.kpi2 >= '20' && yesICanFebContents.kpi2 < '24')?'green':(yesICanFebContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi3 == null)?'grey-2':(yesICanFebContents.kpi3 >= '0' && yesICanFebContents.kpi3 <= '6.6')?'red':(yesICanFebContents.kpi3 > '6.6' && yesICanFebContents.kpi3 <= '8.8')?'orange':(yesICanFebContents.kpi3 > '8.8' && yesICanFebContents.kpi3 < '11')?'yellow-7':(yesICanFebContents.kpi3 >= '11' && yesICanFebContents.kpi3 < '13.2')?'green':(yesICanFebContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMarContents.kpi1 == null)?'grey-2':(yesICanMarContents.kpi1 >= '0' && yesICanMarContents.kpi1 <= '1.8')?'red':(yesICanMarContents.kpi1 > '1.8' && yesICanMarContents.kpi1 <= '2.4')?'orange':(yesICanMarContents.kpi1 > '2.4' && yesICanMarContents.kpi1 < '3')?'yellow-7':(yesICanMarContents.kpi1 >= '3' && yesICanMarContents.kpi1 < '3.6')?'green':(yesICanMarContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi2 == null)?'grey-2':(yesICanMarContents.kpi2 >= '0' && yesICanMarContents.kpi2 <= '12')?'red':(yesICanMarContents.kpi2 > '12' && yesICanMarContents.kpi2 <= '16')?'orange':(yesICanMarContents.kpi2 > '16' && yesICanMarContents.kpi2 < '20')?'yellow-7':(yesICanMarContents.kpi2 >= '20' && yesICanMarContents.kpi2 < '24')?'green':(yesICanMarContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi3 == null)?'grey-2':(yesICanMarContents.kpi3 >= '0' && yesICanMarContents.kpi3 <= '6.6')?'red':(yesICanMarContents.kpi3 > '6.6' && yesICanMarContents.kpi3 <= '8.8')?'orange':(yesICanMarContents.kpi3 > '8.8' && yesICanMarContents.kpi3 < '11')?'yellow-7':(yesICanMarContents.kpi3 >= '11' && yesICanMarContents.kpi3 < '13.2')?'green':(yesICanMarContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAprContents.kpi1 == null)?'grey-2':(yesICanAprContents.kpi1 >= '0' && yesICanAprContents.kpi1 <= '1.8')?'red':(yesICanAprContents.kpi1 > '1.8' && yesICanAprContents.kpi1 <= '2.4')?'orange':(yesICanAprContents.kpi1 > '2.4' && yesICanAprContents.kpi1 < '3')?'yellow-7':(yesICanAprContents.kpi1 >= '3' && yesICanAprContents.kpi1 < '3.6')?'green':(yesICanAprContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi2 == null)?'grey-2':(yesICanAprContents.kpi2 >= '0' && yesICanAprContents.kpi2 <= '12')?'red':(yesICanAprContents.kpi2 > '12' && yesICanAprContents.kpi2 <= '16')?'orange':(yesICanAprContents.kpi2 > '16' && yesICanAprContents.kpi2 < '20')?'yellow-7':(yesICanAprContents.kpi2 >= '20' && yesICanAprContents.kpi2 < '24')?'green':(yesICanAprContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi3 == null)?'grey-2':(yesICanAprContents.kpi3 >= '0' && yesICanAprContents.kpi3 <= '6.6')?'red':(yesICanAprContents.kpi3 > '6.6' && yesICanAprContents.kpi3 <= '8.8')?'orange':(yesICanAprContents.kpi3 > '8.8' && yesICanAprContents.kpi3 < '11')?'yellow-7':(yesICanAprContents.kpi3 >= '11' && yesICanAprContents.kpi3 < '13.2')?'green':(yesICanAprContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMayContents.kpi1 == null)?'grey-2':(yesICanMayContents.kpi1 >= '0' && yesICanMayContents.kpi1 <= '1.8')?'red':(yesICanMayContents.kpi1 > '1.8' && yesICanMayContents.kpi1 <= '2.4')?'orange':(yesICanMayContents.kpi1 > '2.4' && yesICanMayContents.kpi1 < '3')?'yellow-7':(yesICanMayContents.kpi1 >= '3' && yesICanMayContents.kpi1 < '3.6')?'green':(yesICanMayContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi2 == null)?'grey-2':(yesICanMayContents.kpi2 >= '0' && yesICanMayContents.kpi2 <= '12')?'red':(yesICanMayContents.kpi2 > '12' && yesICanMayContents.kpi2 <= '16')?'orange':(yesICanMayContents.kpi2 > '16' && yesICanMayContents.kpi2 < '20')?'yellow-7':(yesICanMayContents.kpi2 >= '20' && yesICanMayContents.kpi2 < '24')?'green':(yesICanMayContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi3 == null)?'grey-2':(yesICanMayContents.kpi3 >= '0' && yesICanMayContents.kpi3 <= '6.6')?'red':(yesICanMayContents.kpi3 > '6.6' && yesICanMayContents.kpi3 <= '8.8')?'orange':(yesICanMayContents.kpi3 > '8.8' && yesICanMayContents.kpi3 < '11')?'yellow-7':(yesICanMayContents.kpi3 >= '11' && yesICanMayContents.kpi3 < '13.2')?'green':(yesICanMayContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJunContents.kpi1 == null)?'grey-2':(yesICanJunContents.kpi1 >= '0' && yesICanJunContents.kpi1 <= '1.8')?'red':(yesICanJunContents.kpi1 > '1.8' && yesICanJunContents.kpi1 <= '2.4')?'orange':(yesICanJunContents.kpi1 > '2.4' && yesICanJunContents.kpi1 < '3')?'yellow-7':(yesICanJunContents.kpi1 >= '3' && yesICanJunContents.kpi1 < '3.6')?'green':(yesICanJunContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi2 == null)?'grey-2':(yesICanJunContents.kpi2 >= '0' && yesICanJunContents.kpi2 <= '12')?'red':(yesICanJunContents.kpi2 > '12' && yesICanJunContents.kpi2 <= '16')?'orange':(yesICanJunContents.kpi2 > '16' && yesICanJunContents.kpi2 < '20')?'yellow-7':(yesICanJunContents.kpi2 >= '20' && yesICanJunContents.kpi2 < '24')?'green':(yesICanJunContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi3 == null)?'grey-2':(yesICanJunContents.kpi3 >= '0' && yesICanJunContents.kpi3 <= '6.6')?'red':(yesICanJunContents.kpi3 > '6.6' && yesICanJunContents.kpi3 <= '8.8')?'orange':(yesICanJunContents.kpi3 > '8.8' && yesICanJunContents.kpi3 < '11')?'yellow-7':(yesICanJunContents.kpi3 >= '11' && yesICanJunContents.kpi3 < '13.2')?'green':(yesICanJunContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJulContents.kpi1 == null)?'grey-2':(yesICanJulContents.kpi1 >= '0' && yesICanJulContents.kpi1 <= '1.8')?'red':(yesICanJulContents.kpi1 > '1.8' && yesICanJulContents.kpi1 <= '2.4')?'orange':(yesICanJulContents.kpi1 > '2.4' && yesICanJulContents.kpi1 < '3')?'yellow-7':(yesICanJulContents.kpi1 >= '3' && yesICanJulContents.kpi1 < '3.6')?'green':(yesICanJulContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi2 == null)?'grey-2':(yesICanJulContents.kpi2 >= '0' && yesICanJulContents.kpi2 <= '12')?'red':(yesICanJulContents.kpi2 > '12' && yesICanJulContents.kpi2 <= '16')?'orange':(yesICanJulContents.kpi2 > '16' && yesICanJulContents.kpi2 < '20')?'yellow-7':(yesICanJulContents.kpi2 >= '20' && yesICanJulContents.kpi2 < '24')?'green':(yesICanJulContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi3 == null)?'grey-2':(yesICanJulContents.kpi3 >= '0' && yesICanJulContents.kpi3 <= '6.6')?'red':(yesICanJulContents.kpi3 > '6.6' && yesICanJulContents.kpi3 <= '8.8')?'orange':(yesICanJulContents.kpi3 > '8.8' && yesICanJulContents.kpi3 < '11')?'yellow-7':(yesICanJulContents.kpi3 >= '11' && yesICanJulContents.kpi3 < '13.2')?'green':(yesICanJulContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAugContents.kpi1 == null)?'grey-2':(yesICanAugContents.kpi1 >= '0' && yesICanAugContents.kpi1 <= '1.8')?'red':(yesICanAugContents.kpi1 > '1.8' && yesICanAugContents.kpi1 <= '2.4')?'orange':(yesICanAugContents.kpi1 > '2.4' && yesICanAugContents.kpi1 < '3')?'yellow-7':(yesICanAugContents.kpi1 >= '3' && yesICanAugContents.kpi1 < '3.6')?'green':(yesICanAugContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi2 == null)?'grey-2':(yesICanAugContents.kpi2 >= '0' && yesICanAugContents.kpi2 <= '12')?'red':(yesICanAugContents.kpi2 > '12' && yesICanAugContents.kpi2 <= '16')?'orange':(yesICanAugContents.kpi2 > '16' && yesICanAugContents.kpi2 < '20')?'yellow-7':(yesICanAugContents.kpi2 >= '20' && yesICanAugContents.kpi2 < '24')?'green':(yesICanAugContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi3 == null)?'grey-2':(yesICanAugContents.kpi3 >= '0' && yesICanAugContents.kpi3 <= '6.6')?'red':(yesICanAugContents.kpi3 > '6.6' && yesICanAugContents.kpi3 <= '8.8')?'orange':(yesICanAugContents.kpi3 > '8.8' && yesICanAugContents.kpi3 < '11')?'yellow-7':(yesICanAugContents.kpi3 >= '11' && yesICanAugContents.kpi3 < '13.2')?'green':(yesICanAugContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanSepContents.kpi1 == null)?'grey-2':(yesICanSepContents.kpi1 >= '0' && yesICanSepContents.kpi1 <= '1.8')?'red':(yesICanSepContents.kpi1 > '1.8' && yesICanSepContents.kpi1 <= '2.4')?'orange':(yesICanSepContents.kpi1 > '2.4' && yesICanSepContents.kpi1 < '3')?'yellow-7':(yesICanSepContents.kpi1 >= '3' && yesICanSepContents.kpi1 < '3.6')?'green':(yesICanSepContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi2 == null)?'grey-2':(yesICanSepContents.kpi2 >= '0' && yesICanSepContents.kpi2 <= '12')?'red':(yesICanSepContents.kpi2 > '12' && yesICanSepContents.kpi2 <= '16')?'orange':(yesICanSepContents.kpi2 > '16' && yesICanSepContents.kpi2 < '20')?'yellow-7':(yesICanSepContents.kpi2 >= '20' && yesICanSepContents.kpi2 < '24')?'green':(yesICanSepContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi3 == null)?'grey-2':(yesICanSepContents.kpi3 >= '0' && yesICanSepContents.kpi3 <= '6.6')?'red':(yesICanSepContents.kpi3 > '6.6' && yesICanSepContents.kpi3 <= '8.8')?'orange':(yesICanSepContents.kpi3 > '8.8' && yesICanSepContents.kpi3 < '11')?'yellow-7':(yesICanSepContents.kpi3 >= '11' && yesICanSepContents.kpi3 < '13.2')?'green':(yesICanSepContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanOctContents.kpi1 == null)?'grey-2':(yesICanOctContents.kpi1 >= '0' && yesICanOctContents.kpi1 <= '1.8')?'red':(yesICanOctContents.kpi1 > '1.8' && yesICanOctContents.kpi1 <= '2.4')?'orange':(yesICanOctContents.kpi1 > '2.4' && yesICanOctContents.kpi1 < '3')?'yellow-7':(yesICanOctContents.kpi1 >= '3' && yesICanOctContents.kpi1 < '3.6')?'green':(yesICanOctContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi2 == null)?'grey-2':(yesICanOctContents.kpi2 >= '0' && yesICanOctContents.kpi2 <= '12')?'red':(yesICanOctContents.kpi2 > '12' && yesICanOctContents.kpi2 <= '16')?'orange':(yesICanOctContents.kpi2 > '16' && yesICanOctContents.kpi2 < '20')?'yellow-7':(yesICanOctContents.kpi2 >= '20' && yesICanOctContents.kpi2 < '24')?'green':(yesICanOctContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi3 == null)?'grey-2':(yesICanOctContents.kpi3 >= '0' && yesICanOctContents.kpi3 <= '6.6')?'red':(yesICanOctContents.kpi3 > '6.6' && yesICanOctContents.kpi3 <= '8.8')?'orange':(yesICanOctContents.kpi3 > '8.8' && yesICanOctContents.kpi3 < '11')?'yellow-7':(yesICanOctContents.kpi3 >= '11' && yesICanOctContents.kpi3 < '13.2')?'green':(yesICanOctContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanNovContents.kpi1 == null)?'grey-2':(yesICanNovContents.kpi1 >= '0' && yesICanNovContents.kpi1 <= '1.8')?'red':(yesICanNovContents.kpi1 > '1.8' && yesICanNovContents.kpi1 <= '2.4')?'orange':(yesICanNovContents.kpi1 > '2.4' && yesICanNovContents.kpi1 < '3')?'yellow-7':(yesICanNovContents.kpi1 >= '3' && yesICanNovContents.kpi1 < '3.6')?'green':(yesICanNovContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi2 == null)?'grey-2':(yesICanNovContents.kpi2 >= '0' && yesICanNovContents.kpi2 <= '12')?'red':(yesICanNovContents.kpi2 > '12' && yesICanNovContents.kpi2 <= '16')?'orange':(yesICanNovContents.kpi2 > '16' && yesICanNovContents.kpi2 < '20')?'yellow-7':(yesICanNovContents.kpi2 >= '20' && yesICanNovContents.kpi2 < '24')?'green':(yesICanNovContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi3 == null)?'grey-2':(yesICanNovContents.kpi3 >= '0' && yesICanNovContents.kpi3 <= '6.6')?'red':(yesICanNovContents.kpi3 > '6.6' && yesICanNovContents.kpi3 <= '8.8')?'orange':(yesICanNovContents.kpi3 > '8.8' && yesICanNovContents.kpi3 < '11')?'yellow-7':(yesICanNovContents.kpi3 >= '11' && yesICanNovContents.kpi3 < '13.2')?'green':(yesICanNovContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanDecContents.kpi1 == null)?'grey-2':(yesICanDecContents.kpi1 >= '0' && yesICanDecContents.kpi1 <= '1.8')?'red':(yesICanDecContents.kpi1 > '1.8' && yesICanDecContents.kpi1 <= '2.4')?'orange':(yesICanDecContents.kpi1 > '2.4' && yesICanDecContents.kpi1 < '3')?'yellow-7':(yesICanDecContents.kpi1 >= '3' && yesICanDecContents.kpi1 < '3.6')?'green':(yesICanDecContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi2 == null)?'grey-2':(yesICanDecContents.kpi2 >= '0' && yesICanDecContents.kpi2 <= '12')?'red':(yesICanDecContents.kpi2 > '12' && yesICanDecContents.kpi2 <= '16')?'orange':(yesICanDecContents.kpi2 > '16' && yesICanDecContents.kpi2 < '20')?'yellow-7':(yesICanDecContents.kpi2 >= '20' && yesICanDecContents.kpi2 < '24')?'green':(yesICanDecContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi3 == null)?'grey-2':(yesICanDecContents.kpi3 >= '0' && yesICanDecContents.kpi3 <= '6.6')?'red':(yesICanDecContents.kpi3 > '6.6' && yesICanDecContents.kpi3 <= '8.8')?'orange':(yesICanDecContents.kpi3 > '8.8' && yesICanDecContents.kpi3 < '11')?'yellow-7':(yesICanDecContents.kpi3 >= '11' && yesICanDecContents.kpi3 < '13.2')?'green':(yesICanDecContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                                <q-tooltip># of people using the service (unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of first time users at the FB in the program</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJanContents.kpi1 == null)?'grey-2':(yesICanJanContents.kpi1 >= '0' && yesICanJanContents.kpi1 <= '1.8')?'red':(yesICanJanContents.kpi1 > '1.8' && yesICanJanContents.kpi1 <= '2.4')?'orange':(yesICanJanContents.kpi1 > '2.4' && yesICanJanContents.kpi1 < '3')?'yellow-7':(yesICanJanContents.kpi1 >= '3' && yesICanJanContents.kpi1 < '3.6')?'green':(yesICanJanContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi2 == null)?'grey-2':(yesICanJanContents.kpi2 >= '0' && yesICanJanContents.kpi2 <= '12')?'red':(yesICanJanContents.kpi2 > '12' && yesICanJanContents.kpi2 <= '16')?'orange':(yesICanJanContents.kpi2 > '16' && yesICanJanContents.kpi2 < '20')?'yellow-7':(yesICanJanContents.kpi2 >= '20' && yesICanJanContents.kpi2 < '24')?'green':(yesICanJanContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi3 == null)?'grey-2':(yesICanJanContents.kpi3 >= '0' && yesICanJanContents.kpi3 <= '6.6')?'red':(yesICanJanContents.kpi3 > '6.6' && yesICanJanContents.kpi3 <= '8.8')?'orange':(yesICanJanContents.kpi3 > '8.8' && yesICanJanContents.kpi3 < '11')?'yellow-7':(yesICanJanContents.kpi3 >= '11' && yesICanJanContents.kpi3 < '13.2')?'green':(yesICanJanContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanFebContents.kpi1 == null)?'grey-2':(yesICanFebContents.kpi1 >= '0' && yesICanFebContents.kpi1 <= '1.8')?'red':(yesICanFebContents.kpi1 > '1.8' && yesICanFebContents.kpi1 <= '2.4')?'orange':(yesICanFebContents.kpi1 > '2.4' && yesICanFebContents.kpi1 < '3')?'yellow-7':(yesICanFebContents.kpi1 >= '3' && yesICanFebContents.kpi1 < '3.6')?'green':(yesICanFebContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi2 == null)?'grey-2':(yesICanFebContents.kpi2 >= '0' && yesICanFebContents.kpi2 <= '12')?'red':(yesICanFebContents.kpi2 > '12' && yesICanFebContents.kpi2 <= '16')?'orange':(yesICanFebContents.kpi2 > '16' && yesICanFebContents.kpi2 < '20')?'yellow-7':(yesICanFebContents.kpi2 >= '20' && yesICanFebContents.kpi2 < '24')?'green':(yesICanFebContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi3 == null)?'grey-2':(yesICanFebContents.kpi3 >= '0' && yesICanFebContents.kpi3 <= '6.6')?'red':(yesICanFebContents.kpi3 > '6.6' && yesICanFebContents.kpi3 <= '8.8')?'orange':(yesICanFebContents.kpi3 > '8.8' && yesICanFebContents.kpi3 < '11')?'yellow-7':(yesICanFebContents.kpi3 >= '11' && yesICanFebContents.kpi3 < '13.2')?'green':(yesICanFebContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMarContents.kpi1 == null)?'grey-2':(yesICanMarContents.kpi1 >= '0' && yesICanMarContents.kpi1 <= '1.8')?'red':(yesICanMarContents.kpi1 > '1.8' && yesICanMarContents.kpi1 <= '2.4')?'orange':(yesICanMarContents.kpi1 > '2.4' && yesICanMarContents.kpi1 < '3')?'yellow-7':(yesICanMarContents.kpi1 >= '3' && yesICanMarContents.kpi1 < '3.6')?'green':(yesICanMarContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi2 == null)?'grey-2':(yesICanMarContents.kpi2 >= '0' && yesICanMarContents.kpi2 <= '12')?'red':(yesICanMarContents.kpi2 > '12' && yesICanMarContents.kpi2 <= '16')?'orange':(yesICanMarContents.kpi2 > '16' && yesICanMarContents.kpi2 < '20')?'yellow-7':(yesICanMarContents.kpi2 >= '20' && yesICanMarContents.kpi2 < '24')?'green':(yesICanMarContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi3 == null)?'grey-2':(yesICanMarContents.kpi3 >= '0' && yesICanMarContents.kpi3 <= '6.6')?'red':(yesICanMarContents.kpi3 > '6.6' && yesICanMarContents.kpi3 <= '8.8')?'orange':(yesICanMarContents.kpi3 > '8.8' && yesICanMarContents.kpi3 < '11')?'yellow-7':(yesICanMarContents.kpi3 >= '11' && yesICanMarContents.kpi3 < '13.2')?'green':(yesICanMarContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAprContents.kpi1 == null)?'grey-2':(yesICanAprContents.kpi1 >= '0' && yesICanAprContents.kpi1 <= '1.8')?'red':(yesICanAprContents.kpi1 > '1.8' && yesICanAprContents.kpi1 <= '2.4')?'orange':(yesICanAprContents.kpi1 > '2.4' && yesICanAprContents.kpi1 < '3')?'yellow-7':(yesICanAprContents.kpi1 >= '3' && yesICanAprContents.kpi1 < '3.6')?'green':(yesICanAprContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi2 == null)?'grey-2':(yesICanAprContents.kpi2 >= '0' && yesICanAprContents.kpi2 <= '12')?'red':(yesICanAprContents.kpi2 > '12' && yesICanAprContents.kpi2 <= '16')?'orange':(yesICanAprContents.kpi2 > '16' && yesICanAprContents.kpi2 < '20')?'yellow-7':(yesICanAprContents.kpi2 >= '20' && yesICanAprContents.kpi2 < '24')?'green':(yesICanAprContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi3 == null)?'grey-2':(yesICanAprContents.kpi3 >= '0' && yesICanAprContents.kpi3 <= '6.6')?'red':(yesICanAprContents.kpi3 > '6.6' && yesICanAprContents.kpi3 <= '8.8')?'orange':(yesICanAprContents.kpi3 > '8.8' && yesICanAprContents.kpi3 < '11')?'yellow-7':(yesICanAprContents.kpi3 >= '11' && yesICanAprContents.kpi3 < '13.2')?'green':(yesICanAprContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMayContents.kpi1 == null)?'grey-2':(yesICanMayContents.kpi1 >= '0' && yesICanMayContents.kpi1 <= '1.8')?'red':(yesICanMayContents.kpi1 > '1.8' && yesICanMayContents.kpi1 <= '2.4')?'orange':(yesICanMayContents.kpi1 > '2.4' && yesICanMayContents.kpi1 < '3')?'yellow-7':(yesICanMayContents.kpi1 >= '3' && yesICanMayContents.kpi1 < '3.6')?'green':(yesICanMayContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi2 == null)?'grey-2':(yesICanMayContents.kpi2 >= '0' && yesICanMayContents.kpi2 <= '12')?'red':(yesICanMayContents.kpi2 > '12' && yesICanMayContents.kpi2 <= '16')?'orange':(yesICanMayContents.kpi2 > '16' && yesICanMayContents.kpi2 < '20')?'yellow-7':(yesICanMayContents.kpi2 >= '20' && yesICanMayContents.kpi2 < '24')?'green':(yesICanMayContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi3 == null)?'grey-2':(yesICanMayContents.kpi3 >= '0' && yesICanMayContents.kpi3 <= '6.6')?'red':(yesICanMayContents.kpi3 > '6.6' && yesICanMayContents.kpi3 <= '8.8')?'orange':(yesICanMayContents.kpi3 > '8.8' && yesICanMayContents.kpi3 < '11')?'yellow-7':(yesICanMayContents.kpi3 >= '11' && yesICanMayContents.kpi3 < '13.2')?'green':(yesICanMayContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJunContents.kpi1 == null)?'grey-2':(yesICanJunContents.kpi1 >= '0' && yesICanJunContents.kpi1 <= '1.8')?'red':(yesICanJunContents.kpi1 > '1.8' && yesICanJunContents.kpi1 <= '2.4')?'orange':(yesICanJunContents.kpi1 > '2.4' && yesICanJunContents.kpi1 < '3')?'yellow-7':(yesICanJunContents.kpi1 >= '3' && yesICanJunContents.kpi1 < '3.6')?'green':(yesICanJunContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi2 == null)?'grey-2':(yesICanJunContents.kpi2 >= '0' && yesICanJunContents.kpi2 <= '12')?'red':(yesICanJunContents.kpi2 > '12' && yesICanJunContents.kpi2 <= '16')?'orange':(yesICanJunContents.kpi2 > '16' && yesICanJunContents.kpi2 < '20')?'yellow-7':(yesICanJunContents.kpi2 >= '20' && yesICanJunContents.kpi2 < '24')?'green':(yesICanJunContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi3 == null)?'grey-2':(yesICanJunContents.kpi3 >= '0' && yesICanJunContents.kpi3 <= '6.6')?'red':(yesICanJunContents.kpi3 > '6.6' && yesICanJunContents.kpi3 <= '8.8')?'orange':(yesICanJunContents.kpi3 > '8.8' && yesICanJunContents.kpi3 < '11')?'yellow-7':(yesICanJunContents.kpi3 >= '11' && yesICanJunContents.kpi3 < '13.2')?'green':(yesICanJunContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJulContents.kpi1 == null)?'grey-2':(yesICanJulContents.kpi1 >= '0' && yesICanJulContents.kpi1 <= '1.8')?'red':(yesICanJulContents.kpi1 > '1.8' && yesICanJulContents.kpi1 <= '2.4')?'orange':(yesICanJulContents.kpi1 > '2.4' && yesICanJulContents.kpi1 < '3')?'yellow-7':(yesICanJulContents.kpi1 >= '3' && yesICanJulContents.kpi1 < '3.6')?'green':(yesICanJulContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi2 == null)?'grey-2':(yesICanJulContents.kpi2 >= '0' && yesICanJulContents.kpi2 <= '12')?'red':(yesICanJulContents.kpi2 > '12' && yesICanJulContents.kpi2 <= '16')?'orange':(yesICanJulContents.kpi2 > '16' && yesICanJulContents.kpi2 < '20')?'yellow-7':(yesICanJulContents.kpi2 >= '20' && yesICanJulContents.kpi2 < '24')?'green':(yesICanJulContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi3 == null)?'grey-2':(yesICanJulContents.kpi3 >= '0' && yesICanJulContents.kpi3 <= '6.6')?'red':(yesICanJulContents.kpi3 > '6.6' && yesICanJulContents.kpi3 <= '8.8')?'orange':(yesICanJulContents.kpi3 > '8.8' && yesICanJulContents.kpi3 < '11')?'yellow-7':(yesICanJulContents.kpi3 >= '11' && yesICanJulContents.kpi3 < '13.2')?'green':(yesICanJulContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAugContents.kpi1 == null)?'grey-2':(yesICanAugContents.kpi1 >= '0' && yesICanAugContents.kpi1 <= '1.8')?'red':(yesICanAugContents.kpi1 > '1.8' && yesICanAugContents.kpi1 <= '2.4')?'orange':(yesICanAugContents.kpi1 > '2.4' && yesICanAugContents.kpi1 < '3')?'yellow-7':(yesICanAugContents.kpi1 >= '3' && yesICanAugContents.kpi1 < '3.6')?'green':(yesICanAugContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi2 == null)?'grey-2':(yesICanAugContents.kpi2 >= '0' && yesICanAugContents.kpi2 <= '12')?'red':(yesICanAugContents.kpi2 > '12' && yesICanAugContents.kpi2 <= '16')?'orange':(yesICanAugContents.kpi2 > '16' && yesICanAugContents.kpi2 < '20')?'yellow-7':(yesICanAugContents.kpi2 >= '20' && yesICanAugContents.kpi2 < '24')?'green':(yesICanAugContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi3 == null)?'grey-2':(yesICanAugContents.kpi3 >= '0' && yesICanAugContents.kpi3 <= '6.6')?'red':(yesICanAugContents.kpi3 > '6.6' && yesICanAugContents.kpi3 <= '8.8')?'orange':(yesICanAugContents.kpi3 > '8.8' && yesICanAugContents.kpi3 < '11')?'yellow-7':(yesICanAugContents.kpi3 >= '11' && yesICanAugContents.kpi3 < '13.2')?'green':(yesICanAugContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanSepContents.kpi1 == null)?'grey-2':(yesICanSepContents.kpi1 >= '0' && yesICanSepContents.kpi1 <= '1.8')?'red':(yesICanSepContents.kpi1 > '1.8' && yesICanSepContents.kpi1 <= '2.4')?'orange':(yesICanSepContents.kpi1 > '2.4' && yesICanSepContents.kpi1 < '3')?'yellow-7':(yesICanSepContents.kpi1 >= '3' && yesICanSepContents.kpi1 < '3.6')?'green':(yesICanSepContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi2 == null)?'grey-2':(yesICanSepContents.kpi2 >= '0' && yesICanSepContents.kpi2 <= '12')?'red':(yesICanSepContents.kpi2 > '12' && yesICanSepContents.kpi2 <= '16')?'orange':(yesICanSepContents.kpi2 > '16' && yesICanSepContents.kpi2 < '20')?'yellow-7':(yesICanSepContents.kpi2 >= '20' && yesICanSepContents.kpi2 < '24')?'green':(yesICanSepContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi3 == null)?'grey-2':(yesICanSepContents.kpi3 >= '0' && yesICanSepContents.kpi3 <= '6.6')?'red':(yesICanSepContents.kpi3 > '6.6' && yesICanSepContents.kpi3 <= '8.8')?'orange':(yesICanSepContents.kpi3 > '8.8' && yesICanSepContents.kpi3 < '11')?'yellow-7':(yesICanSepContents.kpi3 >= '11' && yesICanSepContents.kpi3 < '13.2')?'green':(yesICanSepContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanOctContents.kpi1 == null)?'grey-2':(yesICanOctContents.kpi1 >= '0' && yesICanOctContents.kpi1 <= '1.8')?'red':(yesICanOctContents.kpi1 > '1.8' && yesICanOctContents.kpi1 <= '2.4')?'orange':(yesICanOctContents.kpi1 > '2.4' && yesICanOctContents.kpi1 < '3')?'yellow-7':(yesICanOctContents.kpi1 >= '3' && yesICanOctContents.kpi1 < '3.6')?'green':(yesICanOctContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi2 == null)?'grey-2':(yesICanOctContents.kpi2 >= '0' && yesICanOctContents.kpi2 <= '12')?'red':(yesICanOctContents.kpi2 > '12' && yesICanOctContents.kpi2 <= '16')?'orange':(yesICanOctContents.kpi2 > '16' && yesICanOctContents.kpi2 < '20')?'yellow-7':(yesICanOctContents.kpi2 >= '20' && yesICanOctContents.kpi2 < '24')?'green':(yesICanOctContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi3 == null)?'grey-2':(yesICanOctContents.kpi3 >= '0' && yesICanOctContents.kpi3 <= '6.6')?'red':(yesICanOctContents.kpi3 > '6.6' && yesICanOctContents.kpi3 <= '8.8')?'orange':(yesICanOctContents.kpi3 > '8.8' && yesICanOctContents.kpi3 < '11')?'yellow-7':(yesICanOctContents.kpi3 >= '11' && yesICanOctContents.kpi3 < '13.2')?'green':(yesICanOctContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanNovContents.kpi1 == null)?'grey-2':(yesICanNovContents.kpi1 >= '0' && yesICanNovContents.kpi1 <= '1.8')?'red':(yesICanNovContents.kpi1 > '1.8' && yesICanNovContents.kpi1 <= '2.4')?'orange':(yesICanNovContents.kpi1 > '2.4' && yesICanNovContents.kpi1 < '3')?'yellow-7':(yesICanNovContents.kpi1 >= '3' && yesICanNovContents.kpi1 < '3.6')?'green':(yesICanNovContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi2 == null)?'grey-2':(yesICanNovContents.kpi2 >= '0' && yesICanNovContents.kpi2 <= '12')?'red':(yesICanNovContents.kpi2 > '12' && yesICanNovContents.kpi2 <= '16')?'orange':(yesICanNovContents.kpi2 > '16' && yesICanNovContents.kpi2 < '20')?'yellow-7':(yesICanNovContents.kpi2 >= '20' && yesICanNovContents.kpi2 < '24')?'green':(yesICanNovContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi3 == null)?'grey-2':(yesICanNovContents.kpi3 >= '0' && yesICanNovContents.kpi3 <= '6.6')?'red':(yesICanNovContents.kpi3 > '6.6' && yesICanNovContents.kpi3 <= '8.8')?'orange':(yesICanNovContents.kpi3 > '8.8' && yesICanNovContents.kpi3 < '11')?'yellow-7':(yesICanNovContents.kpi3 >= '11' && yesICanNovContents.kpi3 < '13.2')?'green':(yesICanNovContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanDecContents.kpi1 == null)?'grey-2':(yesICanDecContents.kpi1 >= '0' && yesICanDecContents.kpi1 <= '1.8')?'red':(yesICanDecContents.kpi1 > '1.8' && yesICanDecContents.kpi1 <= '2.4')?'orange':(yesICanDecContents.kpi1 > '2.4' && yesICanDecContents.kpi1 < '3')?'yellow-7':(yesICanDecContents.kpi1 >= '3' && yesICanDecContents.kpi1 < '3.6')?'green':(yesICanDecContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi2 == null)?'grey-2':(yesICanDecContents.kpi2 >= '0' && yesICanDecContents.kpi2 <= '12')?'red':(yesICanDecContents.kpi2 > '12' && yesICanDecContents.kpi2 <= '16')?'orange':(yesICanDecContents.kpi2 > '16' && yesICanDecContents.kpi2 < '20')?'yellow-7':(yesICanDecContents.kpi2 >= '20' && yesICanDecContents.kpi2 < '24')?'green':(yesICanDecContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi3 == null)?'grey-2':(yesICanDecContents.kpi3 >= '0' && yesICanDecContents.kpi3 <= '6.6')?'red':(yesICanDecContents.kpi3 > '6.6' && yesICanDecContents.kpi3 <= '8.8')?'orange':(yesICanDecContents.kpi3 > '8.8' && yesICanDecContents.kpi3 < '11')?'yellow-7':(yesICanDecContents.kpi3 >= '11' && yesICanDecContents.kpi3 < '13.2')?'green':(yesICanDecContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                                <q-tooltip># of people using the service (unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of first time users at the FB in the program</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJanContents.kpi1 == null)?'grey-2':(yesICanJanContents.kpi1 >= '0' && yesICanJanContents.kpi1 <= '1.8')?'red':(yesICanJanContents.kpi1 > '1.8' && yesICanJanContents.kpi1 <= '2.4')?'orange':(yesICanJanContents.kpi1 > '2.4' && yesICanJanContents.kpi1 < '3')?'yellow-7':(yesICanJanContents.kpi1 >= '3' && yesICanJanContents.kpi1 < '3.6')?'green':(yesICanJanContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi2 == null)?'grey-2':(yesICanJanContents.kpi2 >= '0' && yesICanJanContents.kpi2 <= '12')?'red':(yesICanJanContents.kpi2 > '12' && yesICanJanContents.kpi2 <= '16')?'orange':(yesICanJanContents.kpi2 > '16' && yesICanJanContents.kpi2 < '20')?'yellow-7':(yesICanJanContents.kpi2 >= '20' && yesICanJanContents.kpi2 < '24')?'green':(yesICanJanContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi3 == null)?'grey-2':(yesICanJanContents.kpi3 >= '0' && yesICanJanContents.kpi3 <= '6.6')?'red':(yesICanJanContents.kpi3 > '6.6' && yesICanJanContents.kpi3 <= '8.8')?'orange':(yesICanJanContents.kpi3 > '8.8' && yesICanJanContents.kpi3 < '11')?'yellow-7':(yesICanJanContents.kpi3 >= '11' && yesICanJanContents.kpi3 < '13.2')?'green':(yesICanJanContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanFebContents.kpi1 == null)?'grey-2':(yesICanFebContents.kpi1 >= '0' && yesICanFebContents.kpi1 <= '1.8')?'red':(yesICanFebContents.kpi1 > '1.8' && yesICanFebContents.kpi1 <= '2.4')?'orange':(yesICanFebContents.kpi1 > '2.4' && yesICanFebContents.kpi1 < '3')?'yellow-7':(yesICanFebContents.kpi1 >= '3' && yesICanFebContents.kpi1 < '3.6')?'green':(yesICanFebContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi2 == null)?'grey-2':(yesICanFebContents.kpi2 >= '0' && yesICanFebContents.kpi2 <= '12')?'red':(yesICanFebContents.kpi2 > '12' && yesICanFebContents.kpi2 <= '16')?'orange':(yesICanFebContents.kpi2 > '16' && yesICanFebContents.kpi2 < '20')?'yellow-7':(yesICanFebContents.kpi2 >= '20' && yesICanFebContents.kpi2 < '24')?'green':(yesICanFebContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi3 == null)?'grey-2':(yesICanFebContents.kpi3 >= '0' && yesICanFebContents.kpi3 <= '6.6')?'red':(yesICanFebContents.kpi3 > '6.6' && yesICanFebContents.kpi3 <= '8.8')?'orange':(yesICanFebContents.kpi3 > '8.8' && yesICanFebContents.kpi3 < '11')?'yellow-7':(yesICanFebContents.kpi3 >= '11' && yesICanFebContents.kpi3 < '13.2')?'green':(yesICanFebContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMarContents.kpi1 == null)?'grey-2':(yesICanMarContents.kpi1 >= '0' && yesICanMarContents.kpi1 <= '1.8')?'red':(yesICanMarContents.kpi1 > '1.8' && yesICanMarContents.kpi1 <= '2.4')?'orange':(yesICanMarContents.kpi1 > '2.4' && yesICanMarContents.kpi1 < '3')?'yellow-7':(yesICanMarContents.kpi1 >= '3' && yesICanMarContents.kpi1 < '3.6')?'green':(yesICanMarContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi2 == null)?'grey-2':(yesICanMarContents.kpi2 >= '0' && yesICanMarContents.kpi2 <= '12')?'red':(yesICanMarContents.kpi2 > '12' && yesICanMarContents.kpi2 <= '16')?'orange':(yesICanMarContents.kpi2 > '16' && yesICanMarContents.kpi2 < '20')?'yellow-7':(yesICanMarContents.kpi2 >= '20' && yesICanMarContents.kpi2 < '24')?'green':(yesICanMarContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi3 == null)?'grey-2':(yesICanMarContents.kpi3 >= '0' && yesICanMarContents.kpi3 <= '6.6')?'red':(yesICanMarContents.kpi3 > '6.6' && yesICanMarContents.kpi3 <= '8.8')?'orange':(yesICanMarContents.kpi3 > '8.8' && yesICanMarContents.kpi3 < '11')?'yellow-7':(yesICanMarContents.kpi3 >= '11' && yesICanMarContents.kpi3 < '13.2')?'green':(yesICanMarContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAprContents.kpi1 == null)?'grey-2':(yesICanAprContents.kpi1 >= '0' && yesICanAprContents.kpi1 <= '1.8')?'red':(yesICanAprContents.kpi1 > '1.8' && yesICanAprContents.kpi1 <= '2.4')?'orange':(yesICanAprContents.kpi1 > '2.4' && yesICanAprContents.kpi1 < '3')?'yellow-7':(yesICanAprContents.kpi1 >= '3' && yesICanAprContents.kpi1 < '3.6')?'green':(yesICanAprContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi2 == null)?'grey-2':(yesICanAprContents.kpi2 >= '0' && yesICanAprContents.kpi2 <= '12')?'red':(yesICanAprContents.kpi2 > '12' && yesICanAprContents.kpi2 <= '16')?'orange':(yesICanAprContents.kpi2 > '16' && yesICanAprContents.kpi2 < '20')?'yellow-7':(yesICanAprContents.kpi2 >= '20' && yesICanAprContents.kpi2 < '24')?'green':(yesICanAprContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi3 == null)?'grey-2':(yesICanAprContents.kpi3 >= '0' && yesICanAprContents.kpi3 <= '6.6')?'red':(yesICanAprContents.kpi3 > '6.6' && yesICanAprContents.kpi3 <= '8.8')?'orange':(yesICanAprContents.kpi3 > '8.8' && yesICanAprContents.kpi3 < '11')?'yellow-7':(yesICanAprContents.kpi3 >= '11' && yesICanAprContents.kpi3 < '13.2')?'green':(yesICanAprContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMayContents.kpi1 == null)?'grey-2':(yesICanMayContents.kpi1 >= '0' && yesICanMayContents.kpi1 <= '1.8')?'red':(yesICanMayContents.kpi1 > '1.8' && yesICanMayContents.kpi1 <= '2.4')?'orange':(yesICanMayContents.kpi1 > '2.4' && yesICanMayContents.kpi1 < '3')?'yellow-7':(yesICanMayContents.kpi1 >= '3' && yesICanMayContents.kpi1 < '3.6')?'green':(yesICanMayContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi2 == null)?'grey-2':(yesICanMayContents.kpi2 >= '0' && yesICanMayContents.kpi2 <= '12')?'red':(yesICanMayContents.kpi2 > '12' && yesICanMayContents.kpi2 <= '16')?'orange':(yesICanMayContents.kpi2 > '16' && yesICanMayContents.kpi2 < '20')?'yellow-7':(yesICanMayContents.kpi2 >= '20' && yesICanMayContents.kpi2 < '24')?'green':(yesICanMayContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi3 == null)?'grey-2':(yesICanMayContents.kpi3 >= '0' && yesICanMayContents.kpi3 <= '6.6')?'red':(yesICanMayContents.kpi3 > '6.6' && yesICanMayContents.kpi3 <= '8.8')?'orange':(yesICanMayContents.kpi3 > '8.8' && yesICanMayContents.kpi3 < '11')?'yellow-7':(yesICanMayContents.kpi3 >= '11' && yesICanMayContents.kpi3 < '13.2')?'green':(yesICanMayContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJunContents.kpi1 == null)?'grey-2':(yesICanJunContents.kpi1 >= '0' && yesICanJunContents.kpi1 <= '1.8')?'red':(yesICanJunContents.kpi1 > '1.8' && yesICanJunContents.kpi1 <= '2.4')?'orange':(yesICanJunContents.kpi1 > '2.4' && yesICanJunContents.kpi1 < '3')?'yellow-7':(yesICanJunContents.kpi1 >= '3' && yesICanJunContents.kpi1 < '3.6')?'green':(yesICanJunContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi2 == null)?'grey-2':(yesICanJunContents.kpi2 >= '0' && yesICanJunContents.kpi2 <= '12')?'red':(yesICanJunContents.kpi2 > '12' && yesICanJunContents.kpi2 <= '16')?'orange':(yesICanJunContents.kpi2 > '16' && yesICanJunContents.kpi2 < '20')?'yellow-7':(yesICanJunContents.kpi2 >= '20' && yesICanJunContents.kpi2 < '24')?'green':(yesICanJunContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi3 == null)?'grey-2':(yesICanJunContents.kpi3 >= '0' && yesICanJunContents.kpi3 <= '6.6')?'red':(yesICanJunContents.kpi3 > '6.6' && yesICanJunContents.kpi3 <= '8.8')?'orange':(yesICanJunContents.kpi3 > '8.8' && yesICanJunContents.kpi3 < '11')?'yellow-7':(yesICanJunContents.kpi3 >= '11' && yesICanJunContents.kpi3 < '13.2')?'green':(yesICanJunContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJulContents.kpi1 == null)?'grey-2':(yesICanJulContents.kpi1 >= '0' && yesICanJulContents.kpi1 <= '1.8')?'red':(yesICanJulContents.kpi1 > '1.8' && yesICanJulContents.kpi1 <= '2.4')?'orange':(yesICanJulContents.kpi1 > '2.4' && yesICanJulContents.kpi1 < '3')?'yellow-7':(yesICanJulContents.kpi1 >= '3' && yesICanJulContents.kpi1 < '3.6')?'green':(yesICanJulContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi2 == null)?'grey-2':(yesICanJulContents.kpi2 >= '0' && yesICanJulContents.kpi2 <= '12')?'red':(yesICanJulContents.kpi2 > '12' && yesICanJulContents.kpi2 <= '16')?'orange':(yesICanJulContents.kpi2 > '16' && yesICanJulContents.kpi2 < '20')?'yellow-7':(yesICanJulContents.kpi2 >= '20' && yesICanJulContents.kpi2 < '24')?'green':(yesICanJulContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi3 == null)?'grey-2':(yesICanJulContents.kpi3 >= '0' && yesICanJulContents.kpi3 <= '6.6')?'red':(yesICanJulContents.kpi3 > '6.6' && yesICanJulContents.kpi3 <= '8.8')?'orange':(yesICanJulContents.kpi3 > '8.8' && yesICanJulContents.kpi3 < '11')?'yellow-7':(yesICanJulContents.kpi3 >= '11' && yesICanJulContents.kpi3 < '13.2')?'green':(yesICanJulContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAugContents.kpi1 == null)?'grey-2':(yesICanAugContents.kpi1 >= '0' && yesICanAugContents.kpi1 <= '1.8')?'red':(yesICanAugContents.kpi1 > '1.8' && yesICanAugContents.kpi1 <= '2.4')?'orange':(yesICanAugContents.kpi1 > '2.4' && yesICanAugContents.kpi1 < '3')?'yellow-7':(yesICanAugContents.kpi1 >= '3' && yesICanAugContents.kpi1 < '3.6')?'green':(yesICanAugContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi2 == null)?'grey-2':(yesICanAugContents.kpi2 >= '0' && yesICanAugContents.kpi2 <= '12')?'red':(yesICanAugContents.kpi2 > '12' && yesICanAugContents.kpi2 <= '16')?'orange':(yesICanAugContents.kpi2 > '16' && yesICanAugContents.kpi2 < '20')?'yellow-7':(yesICanAugContents.kpi2 >= '20' && yesICanAugContents.kpi2 < '24')?'green':(yesICanAugContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi3 == null)?'grey-2':(yesICanAugContents.kpi3 >= '0' && yesICanAugContents.kpi3 <= '6.6')?'red':(yesICanAugContents.kpi3 > '6.6' && yesICanAugContents.kpi3 <= '8.8')?'orange':(yesICanAugContents.kpi3 > '8.8' && yesICanAugContents.kpi3 < '11')?'yellow-7':(yesICanAugContents.kpi3 >= '11' && yesICanAugContents.kpi3 < '13.2')?'green':(yesICanAugContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanSepContents.kpi1 == null)?'grey-2':(yesICanSepContents.kpi1 >= '0' && yesICanSepContents.kpi1 <= '1.8')?'red':(yesICanSepContents.kpi1 > '1.8' && yesICanSepContents.kpi1 <= '2.4')?'orange':(yesICanSepContents.kpi1 > '2.4' && yesICanSepContents.kpi1 < '3')?'yellow-7':(yesICanSepContents.kpi1 >= '3' && yesICanSepContents.kpi1 < '3.6')?'green':(yesICanSepContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi2 == null)?'grey-2':(yesICanSepContents.kpi2 >= '0' && yesICanSepContents.kpi2 <= '12')?'red':(yesICanSepContents.kpi2 > '12' && yesICanSepContents.kpi2 <= '16')?'orange':(yesICanSepContents.kpi2 > '16' && yesICanSepContents.kpi2 < '20')?'yellow-7':(yesICanSepContents.kpi2 >= '20' && yesICanSepContents.kpi2 < '24')?'green':(yesICanSepContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi3 == null)?'grey-2':(yesICanSepContents.kpi3 >= '0' && yesICanSepContents.kpi3 <= '6.6')?'red':(yesICanSepContents.kpi3 > '6.6' && yesICanSepContents.kpi3 <= '8.8')?'orange':(yesICanSepContents.kpi3 > '8.8' && yesICanSepContents.kpi3 < '11')?'yellow-7':(yesICanSepContents.kpi3 >= '11' && yesICanSepContents.kpi3 < '13.2')?'green':(yesICanSepContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanOctContents.kpi1 == null)?'grey-2':(yesICanOctContents.kpi1 >= '0' && yesICanOctContents.kpi1 <= '1.8')?'red':(yesICanOctContents.kpi1 > '1.8' && yesICanOctContents.kpi1 <= '2.4')?'orange':(yesICanOctContents.kpi1 > '2.4' && yesICanOctContents.kpi1 < '3')?'yellow-7':(yesICanOctContents.kpi1 >= '3' && yesICanOctContents.kpi1 < '3.6')?'green':(yesICanOctContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi2 == null)?'grey-2':(yesICanOctContents.kpi2 >= '0' && yesICanOctContents.kpi2 <= '12')?'red':(yesICanOctContents.kpi2 > '12' && yesICanOctContents.kpi2 <= '16')?'orange':(yesICanOctContents.kpi2 > '16' && yesICanOctContents.kpi2 < '20')?'yellow-7':(yesICanOctContents.kpi2 >= '20' && yesICanOctContents.kpi2 < '24')?'green':(yesICanOctContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi3 == null)?'grey-2':(yesICanOctContents.kpi3 >= '0' && yesICanOctContents.kpi3 <= '6.6')?'red':(yesICanOctContents.kpi3 > '6.6' && yesICanOctContents.kpi3 <= '8.8')?'orange':(yesICanOctContents.kpi3 > '8.8' && yesICanOctContents.kpi3 < '11')?'yellow-7':(yesICanOctContents.kpi3 >= '11' && yesICanOctContents.kpi3 < '13.2')?'green':(yesICanOctContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanNovContents.kpi1 == null)?'grey-2':(yesICanNovContents.kpi1 >= '0' && yesICanNovContents.kpi1 <= '1.8')?'red':(yesICanNovContents.kpi1 > '1.8' && yesICanNovContents.kpi1 <= '2.4')?'orange':(yesICanNovContents.kpi1 > '2.4' && yesICanNovContents.kpi1 < '3')?'yellow-7':(yesICanNovContents.kpi1 >= '3' && yesICanNovContents.kpi1 < '3.6')?'green':(yesICanNovContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi2 == null)?'grey-2':(yesICanNovContents.kpi2 >= '0' && yesICanNovContents.kpi2 <= '12')?'red':(yesICanNovContents.kpi2 > '12' && yesICanNovContents.kpi2 <= '16')?'orange':(yesICanNovContents.kpi2 > '16' && yesICanNovContents.kpi2 < '20')?'yellow-7':(yesICanNovContents.kpi2 >= '20' && yesICanNovContents.kpi2 < '24')?'green':(yesICanNovContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi3 == null)?'grey-2':(yesICanNovContents.kpi3 >= '0' && yesICanNovContents.kpi3 <= '6.6')?'red':(yesICanNovContents.kpi3 > '6.6' && yesICanNovContents.kpi3 <= '8.8')?'orange':(yesICanNovContents.kpi3 > '8.8' && yesICanNovContents.kpi3 < '11')?'yellow-7':(yesICanNovContents.kpi3 >= '11' && yesICanNovContents.kpi3 < '13.2')?'green':(yesICanNovContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanDecContents.kpi1 == null)?'grey-2':(yesICanDecContents.kpi1 >= '0' && yesICanDecContents.kpi1 <= '1.8')?'red':(yesICanDecContents.kpi1 > '1.8' && yesICanDecContents.kpi1 <= '2.4')?'orange':(yesICanDecContents.kpi1 > '2.4' && yesICanDecContents.kpi1 < '3')?'yellow-7':(yesICanDecContents.kpi1 >= '3' && yesICanDecContents.kpi1 < '3.6')?'green':(yesICanDecContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi2 == null)?'grey-2':(yesICanDecContents.kpi2 >= '0' && yesICanDecContents.kpi2 <= '12')?'red':(yesICanDecContents.kpi2 > '12' && yesICanDecContents.kpi2 <= '16')?'orange':(yesICanDecContents.kpi2 > '16' && yesICanDecContents.kpi2 < '20')?'yellow-7':(yesICanDecContents.kpi2 >= '20' && yesICanDecContents.kpi2 < '24')?'green':(yesICanDecContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi3 == null)?'grey-2':(yesICanDecContents.kpi3 >= '0' && yesICanDecContents.kpi3 <= '6.6')?'red':(yesICanDecContents.kpi3 > '6.6' && yesICanDecContents.kpi3 <= '8.8')?'orange':(yesICanDecContents.kpi3 > '8.8' && yesICanDecContents.kpi3 < '11')?'yellow-7':(yesICanDecContents.kpi3 >= '11' && yesICanDecContents.kpi3 < '13.2')?'green':(yesICanDecContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                                <q-tooltip># of people using the service (unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of first time users at the FB in the program</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJanContents.kpi1 == null)?'grey-2':(yesICanJanContents.kpi1 >= '0' && yesICanJanContents.kpi1 <= '1.8')?'red':(yesICanJanContents.kpi1 > '1.8' && yesICanJanContents.kpi1 <= '2.4')?'orange':(yesICanJanContents.kpi1 > '2.4' && yesICanJanContents.kpi1 < '3')?'yellow-7':(yesICanJanContents.kpi1 >= '3' && yesICanJanContents.kpi1 < '3.6')?'green':(yesICanJanContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi2 == null)?'grey-2':(yesICanJanContents.kpi2 >= '0' && yesICanJanContents.kpi2 <= '12')?'red':(yesICanJanContents.kpi2 > '12' && yesICanJanContents.kpi2 <= '16')?'orange':(yesICanJanContents.kpi2 > '16' && yesICanJanContents.kpi2 < '20')?'yellow-7':(yesICanJanContents.kpi2 >= '20' && yesICanJanContents.kpi2 < '24')?'green':(yesICanJanContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi3 == null)?'grey-2':(yesICanJanContents.kpi3 >= '0' && yesICanJanContents.kpi3 <= '6.6')?'red':(yesICanJanContents.kpi3 > '6.6' && yesICanJanContents.kpi3 <= '8.8')?'orange':(yesICanJanContents.kpi3 > '8.8' && yesICanJanContents.kpi3 < '11')?'yellow-7':(yesICanJanContents.kpi3 >= '11' && yesICanJanContents.kpi3 < '13.2')?'green':(yesICanJanContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanFebContents.kpi1 == null)?'grey-2':(yesICanFebContents.kpi1 >= '0' && yesICanFebContents.kpi1 <= '1.8')?'red':(yesICanFebContents.kpi1 > '1.8' && yesICanFebContents.kpi1 <= '2.4')?'orange':(yesICanFebContents.kpi1 > '2.4' && yesICanFebContents.kpi1 < '3')?'yellow-7':(yesICanFebContents.kpi1 >= '3' && yesICanFebContents.kpi1 < '3.6')?'green':(yesICanFebContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi2 == null)?'grey-2':(yesICanFebContents.kpi2 >= '0' && yesICanFebContents.kpi2 <= '12')?'red':(yesICanFebContents.kpi2 > '12' && yesICanFebContents.kpi2 <= '16')?'orange':(yesICanFebContents.kpi2 > '16' && yesICanFebContents.kpi2 < '20')?'yellow-7':(yesICanFebContents.kpi2 >= '20' && yesICanFebContents.kpi2 < '24')?'green':(yesICanFebContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi3 == null)?'grey-2':(yesICanFebContents.kpi3 >= '0' && yesICanFebContents.kpi3 <= '6.6')?'red':(yesICanFebContents.kpi3 > '6.6' && yesICanFebContents.kpi3 <= '8.8')?'orange':(yesICanFebContents.kpi3 > '8.8' && yesICanFebContents.kpi3 < '11')?'yellow-7':(yesICanFebContents.kpi3 >= '11' && yesICanFebContents.kpi3 < '13.2')?'green':(yesICanFebContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMarContents.kpi1 == null)?'grey-2':(yesICanMarContents.kpi1 >= '0' && yesICanMarContents.kpi1 <= '1.8')?'red':(yesICanMarContents.kpi1 > '1.8' && yesICanMarContents.kpi1 <= '2.4')?'orange':(yesICanMarContents.kpi1 > '2.4' && yesICanMarContents.kpi1 < '3')?'yellow-7':(yesICanMarContents.kpi1 >= '3' && yesICanMarContents.kpi1 < '3.6')?'green':(yesICanMarContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi2 == null)?'grey-2':(yesICanMarContents.kpi2 >= '0' && yesICanMarContents.kpi2 <= '12')?'red':(yesICanMarContents.kpi2 > '12' && yesICanMarContents.kpi2 <= '16')?'orange':(yesICanMarContents.kpi2 > '16' && yesICanMarContents.kpi2 < '20')?'yellow-7':(yesICanMarContents.kpi2 >= '20' && yesICanMarContents.kpi2 < '24')?'green':(yesICanMarContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi3 == null)?'grey-2':(yesICanMarContents.kpi3 >= '0' && yesICanMarContents.kpi3 <= '6.6')?'red':(yesICanMarContents.kpi3 > '6.6' && yesICanMarContents.kpi3 <= '8.8')?'orange':(yesICanMarContents.kpi3 > '8.8' && yesICanMarContents.kpi3 < '11')?'yellow-7':(yesICanMarContents.kpi3 >= '11' && yesICanMarContents.kpi3 < '13.2')?'green':(yesICanMarContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAprContents.kpi1 == null)?'grey-2':(yesICanAprContents.kpi1 >= '0' && yesICanAprContents.kpi1 <= '1.8')?'red':(yesICanAprContents.kpi1 > '1.8' && yesICanAprContents.kpi1 <= '2.4')?'orange':(yesICanAprContents.kpi1 > '2.4' && yesICanAprContents.kpi1 < '3')?'yellow-7':(yesICanAprContents.kpi1 >= '3' && yesICanAprContents.kpi1 < '3.6')?'green':(yesICanAprContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi2 == null)?'grey-2':(yesICanAprContents.kpi2 >= '0' && yesICanAprContents.kpi2 <= '12')?'red':(yesICanAprContents.kpi2 > '12' && yesICanAprContents.kpi2 <= '16')?'orange':(yesICanAprContents.kpi2 > '16' && yesICanAprContents.kpi2 < '20')?'yellow-7':(yesICanAprContents.kpi2 >= '20' && yesICanAprContents.kpi2 < '24')?'green':(yesICanAprContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi3 == null)?'grey-2':(yesICanAprContents.kpi3 >= '0' && yesICanAprContents.kpi3 <= '6.6')?'red':(yesICanAprContents.kpi3 > '6.6' && yesICanAprContents.kpi3 <= '8.8')?'orange':(yesICanAprContents.kpi3 > '8.8' && yesICanAprContents.kpi3 < '11')?'yellow-7':(yesICanAprContents.kpi3 >= '11' && yesICanAprContents.kpi3 < '13.2')?'green':(yesICanAprContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMayContents.kpi1 == null)?'grey-2':(yesICanMayContents.kpi1 >= '0' && yesICanMayContents.kpi1 <= '1.8')?'red':(yesICanMayContents.kpi1 > '1.8' && yesICanMayContents.kpi1 <= '2.4')?'orange':(yesICanMayContents.kpi1 > '2.4' && yesICanMayContents.kpi1 < '3')?'yellow-7':(yesICanMayContents.kpi1 >= '3' && yesICanMayContents.kpi1 < '3.6')?'green':(yesICanMayContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi2 == null)?'grey-2':(yesICanMayContents.kpi2 >= '0' && yesICanMayContents.kpi2 <= '12')?'red':(yesICanMayContents.kpi2 > '12' && yesICanMayContents.kpi2 <= '16')?'orange':(yesICanMayContents.kpi2 > '16' && yesICanMayContents.kpi2 < '20')?'yellow-7':(yesICanMayContents.kpi2 >= '20' && yesICanMayContents.kpi2 < '24')?'green':(yesICanMayContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi3 == null)?'grey-2':(yesICanMayContents.kpi3 >= '0' && yesICanMayContents.kpi3 <= '6.6')?'red':(yesICanMayContents.kpi3 > '6.6' && yesICanMayContents.kpi3 <= '8.8')?'orange':(yesICanMayContents.kpi3 > '8.8' && yesICanMayContents.kpi3 < '11')?'yellow-7':(yesICanMayContents.kpi3 >= '11' && yesICanMayContents.kpi3 < '13.2')?'green':(yesICanMayContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJunContents.kpi1 == null)?'grey-2':(yesICanJunContents.kpi1 >= '0' && yesICanJunContents.kpi1 <= '1.8')?'red':(yesICanJunContents.kpi1 > '1.8' && yesICanJunContents.kpi1 <= '2.4')?'orange':(yesICanJunContents.kpi1 > '2.4' && yesICanJunContents.kpi1 < '3')?'yellow-7':(yesICanJunContents.kpi1 >= '3' && yesICanJunContents.kpi1 < '3.6')?'green':(yesICanJunContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi2 == null)?'grey-2':(yesICanJunContents.kpi2 >= '0' && yesICanJunContents.kpi2 <= '12')?'red':(yesICanJunContents.kpi2 > '12' && yesICanJunContents.kpi2 <= '16')?'orange':(yesICanJunContents.kpi2 > '16' && yesICanJunContents.kpi2 < '20')?'yellow-7':(yesICanJunContents.kpi2 >= '20' && yesICanJunContents.kpi2 < '24')?'green':(yesICanJunContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi3 == null)?'grey-2':(yesICanJunContents.kpi3 >= '0' && yesICanJunContents.kpi3 <= '6.6')?'red':(yesICanJunContents.kpi3 > '6.6' && yesICanJunContents.kpi3 <= '8.8')?'orange':(yesICanJunContents.kpi3 > '8.8' && yesICanJunContents.kpi3 < '11')?'yellow-7':(yesICanJunContents.kpi3 >= '11' && yesICanJunContents.kpi3 < '13.2')?'green':(yesICanJunContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJulContents.kpi1 == null)?'grey-2':(yesICanJulContents.kpi1 >= '0' && yesICanJulContents.kpi1 <= '1.8')?'red':(yesICanJulContents.kpi1 > '1.8' && yesICanJulContents.kpi1 <= '2.4')?'orange':(yesICanJulContents.kpi1 > '2.4' && yesICanJulContents.kpi1 < '3')?'yellow-7':(yesICanJulContents.kpi1 >= '3' && yesICanJulContents.kpi1 < '3.6')?'green':(yesICanJulContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi2 == null)?'grey-2':(yesICanJulContents.kpi2 >= '0' && yesICanJulContents.kpi2 <= '12')?'red':(yesICanJulContents.kpi2 > '12' && yesICanJulContents.kpi2 <= '16')?'orange':(yesICanJulContents.kpi2 > '16' && yesICanJulContents.kpi2 < '20')?'yellow-7':(yesICanJulContents.kpi2 >= '20' && yesICanJulContents.kpi2 < '24')?'green':(yesICanJulContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi3 == null)?'grey-2':(yesICanJulContents.kpi3 >= '0' && yesICanJulContents.kpi3 <= '6.6')?'red':(yesICanJulContents.kpi3 > '6.6' && yesICanJulContents.kpi3 <= '8.8')?'orange':(yesICanJulContents.kpi3 > '8.8' && yesICanJulContents.kpi3 < '11')?'yellow-7':(yesICanJulContents.kpi3 >= '11' && yesICanJulContents.kpi3 < '13.2')?'green':(yesICanJulContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAugContents.kpi1 == null)?'grey-2':(yesICanAugContents.kpi1 >= '0' && yesICanAugContents.kpi1 <= '1.8')?'red':(yesICanAugContents.kpi1 > '1.8' && yesICanAugContents.kpi1 <= '2.4')?'orange':(yesICanAugContents.kpi1 > '2.4' && yesICanAugContents.kpi1 < '3')?'yellow-7':(yesICanAugContents.kpi1 >= '3' && yesICanAugContents.kpi1 < '3.6')?'green':(yesICanAugContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi2 == null)?'grey-2':(yesICanAugContents.kpi2 >= '0' && yesICanAugContents.kpi2 <= '12')?'red':(yesICanAugContents.kpi2 > '12' && yesICanAugContents.kpi2 <= '16')?'orange':(yesICanAugContents.kpi2 > '16' && yesICanAugContents.kpi2 < '20')?'yellow-7':(yesICanAugContents.kpi2 >= '20' && yesICanAugContents.kpi2 < '24')?'green':(yesICanAugContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi3 == null)?'grey-2':(yesICanAugContents.kpi3 >= '0' && yesICanAugContents.kpi3 <= '6.6')?'red':(yesICanAugContents.kpi3 > '6.6' && yesICanAugContents.kpi3 <= '8.8')?'orange':(yesICanAugContents.kpi3 > '8.8' && yesICanAugContents.kpi3 < '11')?'yellow-7':(yesICanAugContents.kpi3 >= '11' && yesICanAugContents.kpi3 < '13.2')?'green':(yesICanAugContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanSepContents.kpi1 == null)?'grey-2':(yesICanSepContents.kpi1 >= '0' && yesICanSepContents.kpi1 <= '1.8')?'red':(yesICanSepContents.kpi1 > '1.8' && yesICanSepContents.kpi1 <= '2.4')?'orange':(yesICanSepContents.kpi1 > '2.4' && yesICanSepContents.kpi1 < '3')?'yellow-7':(yesICanSepContents.kpi1 >= '3' && yesICanSepContents.kpi1 < '3.6')?'green':(yesICanSepContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi2 == null)?'grey-2':(yesICanSepContents.kpi2 >= '0' && yesICanSepContents.kpi2 <= '12')?'red':(yesICanSepContents.kpi2 > '12' && yesICanSepContents.kpi2 <= '16')?'orange':(yesICanSepContents.kpi2 > '16' && yesICanSepContents.kpi2 < '20')?'yellow-7':(yesICanSepContents.kpi2 >= '20' && yesICanSepContents.kpi2 < '24')?'green':(yesICanSepContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi3 == null)?'grey-2':(yesICanSepContents.kpi3 >= '0' && yesICanSepContents.kpi3 <= '6.6')?'red':(yesICanSepContents.kpi3 > '6.6' && yesICanSepContents.kpi3 <= '8.8')?'orange':(yesICanSepContents.kpi3 > '8.8' && yesICanSepContents.kpi3 < '11')?'yellow-7':(yesICanSepContents.kpi3 >= '11' && yesICanSepContents.kpi3 < '13.2')?'green':(yesICanSepContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanOctContents.kpi1 == null)?'grey-2':(yesICanOctContents.kpi1 >= '0' && yesICanOctContents.kpi1 <= '1.8')?'red':(yesICanOctContents.kpi1 > '1.8' && yesICanOctContents.kpi1 <= '2.4')?'orange':(yesICanOctContents.kpi1 > '2.4' && yesICanOctContents.kpi1 < '3')?'yellow-7':(yesICanOctContents.kpi1 >= '3' && yesICanOctContents.kpi1 < '3.6')?'green':(yesICanOctContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi2 == null)?'grey-2':(yesICanOctContents.kpi2 >= '0' && yesICanOctContents.kpi2 <= '12')?'red':(yesICanOctContents.kpi2 > '12' && yesICanOctContents.kpi2 <= '16')?'orange':(yesICanOctContents.kpi2 > '16' && yesICanOctContents.kpi2 < '20')?'yellow-7':(yesICanOctContents.kpi2 >= '20' && yesICanOctContents.kpi2 < '24')?'green':(yesICanOctContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi3 == null)?'grey-2':(yesICanOctContents.kpi3 >= '0' && yesICanOctContents.kpi3 <= '6.6')?'red':(yesICanOctContents.kpi3 > '6.6' && yesICanOctContents.kpi3 <= '8.8')?'orange':(yesICanOctContents.kpi3 > '8.8' && yesICanOctContents.kpi3 < '11')?'yellow-7':(yesICanOctContents.kpi3 >= '11' && yesICanOctContents.kpi3 < '13.2')?'green':(yesICanOctContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanNovContents.kpi1 == null)?'grey-2':(yesICanNovContents.kpi1 >= '0' && yesICanNovContents.kpi1 <= '1.8')?'red':(yesICanNovContents.kpi1 > '1.8' && yesICanNovContents.kpi1 <= '2.4')?'orange':(yesICanNovContents.kpi1 > '2.4' && yesICanNovContents.kpi1 < '3')?'yellow-7':(yesICanNovContents.kpi1 >= '3' && yesICanNovContents.kpi1 < '3.6')?'green':(yesICanNovContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi2 == null)?'grey-2':(yesICanNovContents.kpi2 >= '0' && yesICanNovContents.kpi2 <= '12')?'red':(yesICanNovContents.kpi2 > '12' && yesICanNovContents.kpi2 <= '16')?'orange':(yesICanNovContents.kpi2 > '16' && yesICanNovContents.kpi2 < '20')?'yellow-7':(yesICanNovContents.kpi2 >= '20' && yesICanNovContents.kpi2 < '24')?'green':(yesICanNovContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi3 == null)?'grey-2':(yesICanNovContents.kpi3 >= '0' && yesICanNovContents.kpi3 <= '6.6')?'red':(yesICanNovContents.kpi3 > '6.6' && yesICanNovContents.kpi3 <= '8.8')?'orange':(yesICanNovContents.kpi3 > '8.8' && yesICanNovContents.kpi3 < '11')?'yellow-7':(yesICanNovContents.kpi3 >= '11' && yesICanNovContents.kpi3 < '13.2')?'green':(yesICanNovContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanDecContents.kpi1 == null)?'grey-2':(yesICanDecContents.kpi1 >= '0' && yesICanDecContents.kpi1 <= '1.8')?'red':(yesICanDecContents.kpi1 > '1.8' && yesICanDecContents.kpi1 <= '2.4')?'orange':(yesICanDecContents.kpi1 > '2.4' && yesICanDecContents.kpi1 < '3')?'yellow-7':(yesICanDecContents.kpi1 >= '3' && yesICanDecContents.kpi1 < '3.6')?'green':(yesICanDecContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi2 == null)?'grey-2':(yesICanDecContents.kpi2 >= '0' && yesICanDecContents.kpi2 <= '12')?'red':(yesICanDecContents.kpi2 > '12' && yesICanDecContents.kpi2 <= '16')?'orange':(yesICanDecContents.kpi2 > '16' && yesICanDecContents.kpi2 < '20')?'yellow-7':(yesICanDecContents.kpi2 >= '20' && yesICanDecContents.kpi2 < '24')?'green':(yesICanDecContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi3 == null)?'grey-2':(yesICanDecContents.kpi3 >= '0' && yesICanDecContents.kpi3 <= '6.6')?'red':(yesICanDecContents.kpi3 > '6.6' && yesICanDecContents.kpi3 <= '8.8')?'orange':(yesICanDecContents.kpi3 > '8.8' && yesICanDecContents.kpi3 < '11')?'yellow-7':(yesICanDecContents.kpi3 >= '11' && yesICanDecContents.kpi3 < '13.2')?'green':(yesICanDecContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                                <q-tooltip># of people using the service (unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of first time users at the FB in the program</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJanContents.kpi1 == null)?'grey-2':(yesICanJanContents.kpi1 >= '0' && yesICanJanContents.kpi1 <= '1.8')?'red':(yesICanJanContents.kpi1 > '1.8' && yesICanJanContents.kpi1 <= '2.4')?'orange':(yesICanJanContents.kpi1 > '2.4' && yesICanJanContents.kpi1 < '3')?'yellow-7':(yesICanJanContents.kpi1 >= '3' && yesICanJanContents.kpi1 < '3.6')?'green':(yesICanJanContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi2 == null)?'grey-2':(yesICanJanContents.kpi2 >= '0' && yesICanJanContents.kpi2 <= '12')?'red':(yesICanJanContents.kpi2 > '12' && yesICanJanContents.kpi2 <= '16')?'orange':(yesICanJanContents.kpi2 > '16' && yesICanJanContents.kpi2 < '20')?'yellow-7':(yesICanJanContents.kpi2 >= '20' && yesICanJanContents.kpi2 < '24')?'green':(yesICanJanContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi3 == null)?'grey-2':(yesICanJanContents.kpi3 >= '0' && yesICanJanContents.kpi3 <= '6.6')?'red':(yesICanJanContents.kpi3 > '6.6' && yesICanJanContents.kpi3 <= '8.8')?'orange':(yesICanJanContents.kpi3 > '8.8' && yesICanJanContents.kpi3 < '11')?'yellow-7':(yesICanJanContents.kpi3 >= '11' && yesICanJanContents.kpi3 < '13.2')?'green':(yesICanJanContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanFebContents.kpi1 == null)?'grey-2':(yesICanFebContents.kpi1 >= '0' && yesICanFebContents.kpi1 <= '1.8')?'red':(yesICanFebContents.kpi1 > '1.8' && yesICanFebContents.kpi1 <= '2.4')?'orange':(yesICanFebContents.kpi1 > '2.4' && yesICanFebContents.kpi1 < '3')?'yellow-7':(yesICanFebContents.kpi1 >= '3' && yesICanFebContents.kpi1 < '3.6')?'green':(yesICanFebContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi2 == null)?'grey-2':(yesICanFebContents.kpi2 >= '0' && yesICanFebContents.kpi2 <= '12')?'red':(yesICanFebContents.kpi2 > '12' && yesICanFebContents.kpi2 <= '16')?'orange':(yesICanFebContents.kpi2 > '16' && yesICanFebContents.kpi2 < '20')?'yellow-7':(yesICanFebContents.kpi2 >= '20' && yesICanFebContents.kpi2 < '24')?'green':(yesICanFebContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi3 == null)?'grey-2':(yesICanFebContents.kpi3 >= '0' && yesICanFebContents.kpi3 <= '6.6')?'red':(yesICanFebContents.kpi3 > '6.6' && yesICanFebContents.kpi3 <= '8.8')?'orange':(yesICanFebContents.kpi3 > '8.8' && yesICanFebContents.kpi3 < '11')?'yellow-7':(yesICanFebContents.kpi3 >= '11' && yesICanFebContents.kpi3 < '13.2')?'green':(yesICanFebContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMarContents.kpi1 == null)?'grey-2':(yesICanMarContents.kpi1 >= '0' && yesICanMarContents.kpi1 <= '1.8')?'red':(yesICanMarContents.kpi1 > '1.8' && yesICanMarContents.kpi1 <= '2.4')?'orange':(yesICanMarContents.kpi1 > '2.4' && yesICanMarContents.kpi1 < '3')?'yellow-7':(yesICanMarContents.kpi1 >= '3' && yesICanMarContents.kpi1 < '3.6')?'green':(yesICanMarContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi2 == null)?'grey-2':(yesICanMarContents.kpi2 >= '0' && yesICanMarContents.kpi2 <= '12')?'red':(yesICanMarContents.kpi2 > '12' && yesICanMarContents.kpi2 <= '16')?'orange':(yesICanMarContents.kpi2 > '16' && yesICanMarContents.kpi2 < '20')?'yellow-7':(yesICanMarContents.kpi2 >= '20' && yesICanMarContents.kpi2 < '24')?'green':(yesICanMarContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi3 == null)?'grey-2':(yesICanMarContents.kpi3 >= '0' && yesICanMarContents.kpi3 <= '6.6')?'red':(yesICanMarContents.kpi3 > '6.6' && yesICanMarContents.kpi3 <= '8.8')?'orange':(yesICanMarContents.kpi3 > '8.8' && yesICanMarContents.kpi3 < '11')?'yellow-7':(yesICanMarContents.kpi3 >= '11' && yesICanMarContents.kpi3 < '13.2')?'green':(yesICanMarContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAprContents.kpi1 == null)?'grey-2':(yesICanAprContents.kpi1 >= '0' && yesICanAprContents.kpi1 <= '1.8')?'red':(yesICanAprContents.kpi1 > '1.8' && yesICanAprContents.kpi1 <= '2.4')?'orange':(yesICanAprContents.kpi1 > '2.4' && yesICanAprContents.kpi1 < '3')?'yellow-7':(yesICanAprContents.kpi1 >= '3' && yesICanAprContents.kpi1 < '3.6')?'green':(yesICanAprContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi2 == null)?'grey-2':(yesICanAprContents.kpi2 >= '0' && yesICanAprContents.kpi2 <= '12')?'red':(yesICanAprContents.kpi2 > '12' && yesICanAprContents.kpi2 <= '16')?'orange':(yesICanAprContents.kpi2 > '16' && yesICanAprContents.kpi2 < '20')?'yellow-7':(yesICanAprContents.kpi2 >= '20' && yesICanAprContents.kpi2 < '24')?'green':(yesICanAprContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi3 == null)?'grey-2':(yesICanAprContents.kpi3 >= '0' && yesICanAprContents.kpi3 <= '6.6')?'red':(yesICanAprContents.kpi3 > '6.6' && yesICanAprContents.kpi3 <= '8.8')?'orange':(yesICanAprContents.kpi3 > '8.8' && yesICanAprContents.kpi3 < '11')?'yellow-7':(yesICanAprContents.kpi3 >= '11' && yesICanAprContents.kpi3 < '13.2')?'green':(yesICanAprContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMayContents.kpi1 == null)?'grey-2':(yesICanMayContents.kpi1 >= '0' && yesICanMayContents.kpi1 <= '1.8')?'red':(yesICanMayContents.kpi1 > '1.8' && yesICanMayContents.kpi1 <= '2.4')?'orange':(yesICanMayContents.kpi1 > '2.4' && yesICanMayContents.kpi1 < '3')?'yellow-7':(yesICanMayContents.kpi1 >= '3' && yesICanMayContents.kpi1 < '3.6')?'green':(yesICanMayContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi2 == null)?'grey-2':(yesICanMayContents.kpi2 >= '0' && yesICanMayContents.kpi2 <= '12')?'red':(yesICanMayContents.kpi2 > '12' && yesICanMayContents.kpi2 <= '16')?'orange':(yesICanMayContents.kpi2 > '16' && yesICanMayContents.kpi2 < '20')?'yellow-7':(yesICanMayContents.kpi2 >= '20' && yesICanMayContents.kpi2 < '24')?'green':(yesICanMayContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi3 == null)?'grey-2':(yesICanMayContents.kpi3 >= '0' && yesICanMayContents.kpi3 <= '6.6')?'red':(yesICanMayContents.kpi3 > '6.6' && yesICanMayContents.kpi3 <= '8.8')?'orange':(yesICanMayContents.kpi3 > '8.8' && yesICanMayContents.kpi3 < '11')?'yellow-7':(yesICanMayContents.kpi3 >= '11' && yesICanMayContents.kpi3 < '13.2')?'green':(yesICanMayContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJunContents.kpi1 == null)?'grey-2':(yesICanJunContents.kpi1 >= '0' && yesICanJunContents.kpi1 <= '1.8')?'red':(yesICanJunContents.kpi1 > '1.8' && yesICanJunContents.kpi1 <= '2.4')?'orange':(yesICanJunContents.kpi1 > '2.4' && yesICanJunContents.kpi1 < '3')?'yellow-7':(yesICanJunContents.kpi1 >= '3' && yesICanJunContents.kpi1 < '3.6')?'green':(yesICanJunContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi2 == null)?'grey-2':(yesICanJunContents.kpi2 >= '0' && yesICanJunContents.kpi2 <= '12')?'red':(yesICanJunContents.kpi2 > '12' && yesICanJunContents.kpi2 <= '16')?'orange':(yesICanJunContents.kpi2 > '16' && yesICanJunContents.kpi2 < '20')?'yellow-7':(yesICanJunContents.kpi2 >= '20' && yesICanJunContents.kpi2 < '24')?'green':(yesICanJunContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi3 == null)?'grey-2':(yesICanJunContents.kpi3 >= '0' && yesICanJunContents.kpi3 <= '6.6')?'red':(yesICanJunContents.kpi3 > '6.6' && yesICanJunContents.kpi3 <= '8.8')?'orange':(yesICanJunContents.kpi3 > '8.8' && yesICanJunContents.kpi3 < '11')?'yellow-7':(yesICanJunContents.kpi3 >= '11' && yesICanJunContents.kpi3 < '13.2')?'green':(yesICanJunContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJulContents.kpi1 == null)?'grey-2':(yesICanJulContents.kpi1 >= '0' && yesICanJulContents.kpi1 <= '1.8')?'red':(yesICanJulContents.kpi1 > '1.8' && yesICanJulContents.kpi1 <= '2.4')?'orange':(yesICanJulContents.kpi1 > '2.4' && yesICanJulContents.kpi1 < '3')?'yellow-7':(yesICanJulContents.kpi1 >= '3' && yesICanJulContents.kpi1 < '3.6')?'green':(yesICanJulContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi2 == null)?'grey-2':(yesICanJulContents.kpi2 >= '0' && yesICanJulContents.kpi2 <= '12')?'red':(yesICanJulContents.kpi2 > '12' && yesICanJulContents.kpi2 <= '16')?'orange':(yesICanJulContents.kpi2 > '16' && yesICanJulContents.kpi2 < '20')?'yellow-7':(yesICanJulContents.kpi2 >= '20' && yesICanJulContents.kpi2 < '24')?'green':(yesICanJulContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi3 == null)?'grey-2':(yesICanJulContents.kpi3 >= '0' && yesICanJulContents.kpi3 <= '6.6')?'red':(yesICanJulContents.kpi3 > '6.6' && yesICanJulContents.kpi3 <= '8.8')?'orange':(yesICanJulContents.kpi3 > '8.8' && yesICanJulContents.kpi3 < '11')?'yellow-7':(yesICanJulContents.kpi3 >= '11' && yesICanJulContents.kpi3 < '13.2')?'green':(yesICanJulContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAugContents.kpi1 == null)?'grey-2':(yesICanAugContents.kpi1 >= '0' && yesICanAugContents.kpi1 <= '1.8')?'red':(yesICanAugContents.kpi1 > '1.8' && yesICanAugContents.kpi1 <= '2.4')?'orange':(yesICanAugContents.kpi1 > '2.4' && yesICanAugContents.kpi1 < '3')?'yellow-7':(yesICanAugContents.kpi1 >= '3' && yesICanAugContents.kpi1 < '3.6')?'green':(yesICanAugContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi2 == null)?'grey-2':(yesICanAugContents.kpi2 >= '0' && yesICanAugContents.kpi2 <= '12')?'red':(yesICanAugContents.kpi2 > '12' && yesICanAugContents.kpi2 <= '16')?'orange':(yesICanAugContents.kpi2 > '16' && yesICanAugContents.kpi2 < '20')?'yellow-7':(yesICanAugContents.kpi2 >= '20' && yesICanAugContents.kpi2 < '24')?'green':(yesICanAugContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi3 == null)?'grey-2':(yesICanAugContents.kpi3 >= '0' && yesICanAugContents.kpi3 <= '6.6')?'red':(yesICanAugContents.kpi3 > '6.6' && yesICanAugContents.kpi3 <= '8.8')?'orange':(yesICanAugContents.kpi3 > '8.8' && yesICanAugContents.kpi3 < '11')?'yellow-7':(yesICanAugContents.kpi3 >= '11' && yesICanAugContents.kpi3 < '13.2')?'green':(yesICanAugContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanSepContents.kpi1 == null)?'grey-2':(yesICanSepContents.kpi1 >= '0' && yesICanSepContents.kpi1 <= '1.8')?'red':(yesICanSepContents.kpi1 > '1.8' && yesICanSepContents.kpi1 <= '2.4')?'orange':(yesICanSepContents.kpi1 > '2.4' && yesICanSepContents.kpi1 < '3')?'yellow-7':(yesICanSepContents.kpi1 >= '3' && yesICanSepContents.kpi1 < '3.6')?'green':(yesICanSepContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi2 == null)?'grey-2':(yesICanSepContents.kpi2 >= '0' && yesICanSepContents.kpi2 <= '12')?'red':(yesICanSepContents.kpi2 > '12' && yesICanSepContents.kpi2 <= '16')?'orange':(yesICanSepContents.kpi2 > '16' && yesICanSepContents.kpi2 < '20')?'yellow-7':(yesICanSepContents.kpi2 >= '20' && yesICanSepContents.kpi2 < '24')?'green':(yesICanSepContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi3 == null)?'grey-2':(yesICanSepContents.kpi3 >= '0' && yesICanSepContents.kpi3 <= '6.6')?'red':(yesICanSepContents.kpi3 > '6.6' && yesICanSepContents.kpi3 <= '8.8')?'orange':(yesICanSepContents.kpi3 > '8.8' && yesICanSepContents.kpi3 < '11')?'yellow-7':(yesICanSepContents.kpi3 >= '11' && yesICanSepContents.kpi3 < '13.2')?'green':(yesICanSepContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanOctContents.kpi1 == null)?'grey-2':(yesICanOctContents.kpi1 >= '0' && yesICanOctContents.kpi1 <= '1.8')?'red':(yesICanOctContents.kpi1 > '1.8' && yesICanOctContents.kpi1 <= '2.4')?'orange':(yesICanOctContents.kpi1 > '2.4' && yesICanOctContents.kpi1 < '3')?'yellow-7':(yesICanOctContents.kpi1 >= '3' && yesICanOctContents.kpi1 < '3.6')?'green':(yesICanOctContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi2 == null)?'grey-2':(yesICanOctContents.kpi2 >= '0' && yesICanOctContents.kpi2 <= '12')?'red':(yesICanOctContents.kpi2 > '12' && yesICanOctContents.kpi2 <= '16')?'orange':(yesICanOctContents.kpi2 > '16' && yesICanOctContents.kpi2 < '20')?'yellow-7':(yesICanOctContents.kpi2 >= '20' && yesICanOctContents.kpi2 < '24')?'green':(yesICanOctContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi3 == null)?'grey-2':(yesICanOctContents.kpi3 >= '0' && yesICanOctContents.kpi3 <= '6.6')?'red':(yesICanOctContents.kpi3 > '6.6' && yesICanOctContents.kpi3 <= '8.8')?'orange':(yesICanOctContents.kpi3 > '8.8' && yesICanOctContents.kpi3 < '11')?'yellow-7':(yesICanOctContents.kpi3 >= '11' && yesICanOctContents.kpi3 < '13.2')?'green':(yesICanOctContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanNovContents.kpi1 == null)?'grey-2':(yesICanNovContents.kpi1 >= '0' && yesICanNovContents.kpi1 <= '1.8')?'red':(yesICanNovContents.kpi1 > '1.8' && yesICanNovContents.kpi1 <= '2.4')?'orange':(yesICanNovContents.kpi1 > '2.4' && yesICanNovContents.kpi1 < '3')?'yellow-7':(yesICanNovContents.kpi1 >= '3' && yesICanNovContents.kpi1 < '3.6')?'green':(yesICanNovContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi2 == null)?'grey-2':(yesICanNovContents.kpi2 >= '0' && yesICanNovContents.kpi2 <= '12')?'red':(yesICanNovContents.kpi2 > '12' && yesICanNovContents.kpi2 <= '16')?'orange':(yesICanNovContents.kpi2 > '16' && yesICanNovContents.kpi2 < '20')?'yellow-7':(yesICanNovContents.kpi2 >= '20' && yesICanNovContents.kpi2 < '24')?'green':(yesICanNovContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi3 == null)?'grey-2':(yesICanNovContents.kpi3 >= '0' && yesICanNovContents.kpi3 <= '6.6')?'red':(yesICanNovContents.kpi3 > '6.6' && yesICanNovContents.kpi3 <= '8.8')?'orange':(yesICanNovContents.kpi3 > '8.8' && yesICanNovContents.kpi3 < '11')?'yellow-7':(yesICanNovContents.kpi3 >= '11' && yesICanNovContents.kpi3 < '13.2')?'green':(yesICanNovContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanDecContents.kpi1 == null)?'grey-2':(yesICanDecContents.kpi1 >= '0' && yesICanDecContents.kpi1 <= '1.8')?'red':(yesICanDecContents.kpi1 > '1.8' && yesICanDecContents.kpi1 <= '2.4')?'orange':(yesICanDecContents.kpi1 > '2.4' && yesICanDecContents.kpi1 < '3')?'yellow-7':(yesICanDecContents.kpi1 >= '3' && yesICanDecContents.kpi1 < '3.6')?'green':(yesICanDecContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi2 == null)?'grey-2':(yesICanDecContents.kpi2 >= '0' && yesICanDecContents.kpi2 <= '12')?'red':(yesICanDecContents.kpi2 > '12' && yesICanDecContents.kpi2 <= '16')?'orange':(yesICanDecContents.kpi2 > '16' && yesICanDecContents.kpi2 < '20')?'yellow-7':(yesICanDecContents.kpi2 >= '20' && yesICanDecContents.kpi2 < '24')?'green':(yesICanDecContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi3 == null)?'grey-2':(yesICanDecContents.kpi3 >= '0' && yesICanDecContents.kpi3 <= '6.6')?'red':(yesICanDecContents.kpi3 > '6.6' && yesICanDecContents.kpi3 <= '8.8')?'orange':(yesICanDecContents.kpi3 > '8.8' && yesICanDecContents.kpi3 < '11')?'yellow-7':(yesICanDecContents.kpi3 >= '11' && yesICanDecContents.kpi3 < '13.2')?'green':(yesICanDecContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                                <q-tooltip># of people using the service (unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of first time users at the FB in the program</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJanContents.kpi1 == null)?'grey-2':(yesICanJanContents.kpi1 >= '0' && yesICanJanContents.kpi1 <= '1.8')?'red':(yesICanJanContents.kpi1 > '1.8' && yesICanJanContents.kpi1 <= '2.4')?'orange':(yesICanJanContents.kpi1 > '2.4' && yesICanJanContents.kpi1 < '3')?'yellow-7':(yesICanJanContents.kpi1 >= '3' && yesICanJanContents.kpi1 < '3.6')?'green':(yesICanJanContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi2 == null)?'grey-2':(yesICanJanContents.kpi2 >= '0' && yesICanJanContents.kpi2 <= '12')?'red':(yesICanJanContents.kpi2 > '12' && yesICanJanContents.kpi2 <= '16')?'orange':(yesICanJanContents.kpi2 > '16' && yesICanJanContents.kpi2 < '20')?'yellow-7':(yesICanJanContents.kpi2 >= '20' && yesICanJanContents.kpi2 < '24')?'green':(yesICanJanContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi3 == null)?'grey-2':(yesICanJanContents.kpi3 >= '0' && yesICanJanContents.kpi3 <= '6.6')?'red':(yesICanJanContents.kpi3 > '6.6' && yesICanJanContents.kpi3 <= '8.8')?'orange':(yesICanJanContents.kpi3 > '8.8' && yesICanJanContents.kpi3 < '11')?'yellow-7':(yesICanJanContents.kpi3 >= '11' && yesICanJanContents.kpi3 < '13.2')?'green':(yesICanJanContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanFebContents.kpi1 == null)?'grey-2':(yesICanFebContents.kpi1 >= '0' && yesICanFebContents.kpi1 <= '1.8')?'red':(yesICanFebContents.kpi1 > '1.8' && yesICanFebContents.kpi1 <= '2.4')?'orange':(yesICanFebContents.kpi1 > '2.4' && yesICanFebContents.kpi1 < '3')?'yellow-7':(yesICanFebContents.kpi1 >= '3' && yesICanFebContents.kpi1 < '3.6')?'green':(yesICanFebContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi2 == null)?'grey-2':(yesICanFebContents.kpi2 >= '0' && yesICanFebContents.kpi2 <= '12')?'red':(yesICanFebContents.kpi2 > '12' && yesICanFebContents.kpi2 <= '16')?'orange':(yesICanFebContents.kpi2 > '16' && yesICanFebContents.kpi2 < '20')?'yellow-7':(yesICanFebContents.kpi2 >= '20' && yesICanFebContents.kpi2 < '24')?'green':(yesICanFebContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi3 == null)?'grey-2':(yesICanFebContents.kpi3 >= '0' && yesICanFebContents.kpi3 <= '6.6')?'red':(yesICanFebContents.kpi3 > '6.6' && yesICanFebContents.kpi3 <= '8.8')?'orange':(yesICanFebContents.kpi3 > '8.8' && yesICanFebContents.kpi3 < '11')?'yellow-7':(yesICanFebContents.kpi3 >= '11' && yesICanFebContents.kpi3 < '13.2')?'green':(yesICanFebContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMarContents.kpi1 == null)?'grey-2':(yesICanMarContents.kpi1 >= '0' && yesICanMarContents.kpi1 <= '1.8')?'red':(yesICanMarContents.kpi1 > '1.8' && yesICanMarContents.kpi1 <= '2.4')?'orange':(yesICanMarContents.kpi1 > '2.4' && yesICanMarContents.kpi1 < '3')?'yellow-7':(yesICanMarContents.kpi1 >= '3' && yesICanMarContents.kpi1 < '3.6')?'green':(yesICanMarContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi2 == null)?'grey-2':(yesICanMarContents.kpi2 >= '0' && yesICanMarContents.kpi2 <= '12')?'red':(yesICanMarContents.kpi2 > '12' && yesICanMarContents.kpi2 <= '16')?'orange':(yesICanMarContents.kpi2 > '16' && yesICanMarContents.kpi2 < '20')?'yellow-7':(yesICanMarContents.kpi2 >= '20' && yesICanMarContents.kpi2 < '24')?'green':(yesICanMarContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi3 == null)?'grey-2':(yesICanMarContents.kpi3 >= '0' && yesICanMarContents.kpi3 <= '6.6')?'red':(yesICanMarContents.kpi3 > '6.6' && yesICanMarContents.kpi3 <= '8.8')?'orange':(yesICanMarContents.kpi3 > '8.8' && yesICanMarContents.kpi3 < '11')?'yellow-7':(yesICanMarContents.kpi3 >= '11' && yesICanMarContents.kpi3 < '13.2')?'green':(yesICanMarContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAprContents.kpi1 == null)?'grey-2':(yesICanAprContents.kpi1 >= '0' && yesICanAprContents.kpi1 <= '1.8')?'red':(yesICanAprContents.kpi1 > '1.8' && yesICanAprContents.kpi1 <= '2.4')?'orange':(yesICanAprContents.kpi1 > '2.4' && yesICanAprContents.kpi1 < '3')?'yellow-7':(yesICanAprContents.kpi1 >= '3' && yesICanAprContents.kpi1 < '3.6')?'green':(yesICanAprContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi2 == null)?'grey-2':(yesICanAprContents.kpi2 >= '0' && yesICanAprContents.kpi2 <= '12')?'red':(yesICanAprContents.kpi2 > '12' && yesICanAprContents.kpi2 <= '16')?'orange':(yesICanAprContents.kpi2 > '16' && yesICanAprContents.kpi2 < '20')?'yellow-7':(yesICanAprContents.kpi2 >= '20' && yesICanAprContents.kpi2 < '24')?'green':(yesICanAprContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi3 == null)?'grey-2':(yesICanAprContents.kpi3 >= '0' && yesICanAprContents.kpi3 <= '6.6')?'red':(yesICanAprContents.kpi3 > '6.6' && yesICanAprContents.kpi3 <= '8.8')?'orange':(yesICanAprContents.kpi3 > '8.8' && yesICanAprContents.kpi3 < '11')?'yellow-7':(yesICanAprContents.kpi3 >= '11' && yesICanAprContents.kpi3 < '13.2')?'green':(yesICanAprContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMayContents.kpi1 == null)?'grey-2':(yesICanMayContents.kpi1 >= '0' && yesICanMayContents.kpi1 <= '1.8')?'red':(yesICanMayContents.kpi1 > '1.8' && yesICanMayContents.kpi1 <= '2.4')?'orange':(yesICanMayContents.kpi1 > '2.4' && yesICanMayContents.kpi1 < '3')?'yellow-7':(yesICanMayContents.kpi1 >= '3' && yesICanMayContents.kpi1 < '3.6')?'green':(yesICanMayContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi2 == null)?'grey-2':(yesICanMayContents.kpi2 >= '0' && yesICanMayContents.kpi2 <= '12')?'red':(yesICanMayContents.kpi2 > '12' && yesICanMayContents.kpi2 <= '16')?'orange':(yesICanMayContents.kpi2 > '16' && yesICanMayContents.kpi2 < '20')?'yellow-7':(yesICanMayContents.kpi2 >= '20' && yesICanMayContents.kpi2 < '24')?'green':(yesICanMayContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi3 == null)?'grey-2':(yesICanMayContents.kpi3 >= '0' && yesICanMayContents.kpi3 <= '6.6')?'red':(yesICanMayContents.kpi3 > '6.6' && yesICanMayContents.kpi3 <= '8.8')?'orange':(yesICanMayContents.kpi3 > '8.8' && yesICanMayContents.kpi3 < '11')?'yellow-7':(yesICanMayContents.kpi3 >= '11' && yesICanMayContents.kpi3 < '13.2')?'green':(yesICanMayContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJunContents.kpi1 == null)?'grey-2':(yesICanJunContents.kpi1 >= '0' && yesICanJunContents.kpi1 <= '1.8')?'red':(yesICanJunContents.kpi1 > '1.8' && yesICanJunContents.kpi1 <= '2.4')?'orange':(yesICanJunContents.kpi1 > '2.4' && yesICanJunContents.kpi1 < '3')?'yellow-7':(yesICanJunContents.kpi1 >= '3' && yesICanJunContents.kpi1 < '3.6')?'green':(yesICanJunContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi2 == null)?'grey-2':(yesICanJunContents.kpi2 >= '0' && yesICanJunContents.kpi2 <= '12')?'red':(yesICanJunContents.kpi2 > '12' && yesICanJunContents.kpi2 <= '16')?'orange':(yesICanJunContents.kpi2 > '16' && yesICanJunContents.kpi2 < '20')?'yellow-7':(yesICanJunContents.kpi2 >= '20' && yesICanJunContents.kpi2 < '24')?'green':(yesICanJunContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi3 == null)?'grey-2':(yesICanJunContents.kpi3 >= '0' && yesICanJunContents.kpi3 <= '6.6')?'red':(yesICanJunContents.kpi3 > '6.6' && yesICanJunContents.kpi3 <= '8.8')?'orange':(yesICanJunContents.kpi3 > '8.8' && yesICanJunContents.kpi3 < '11')?'yellow-7':(yesICanJunContents.kpi3 >= '11' && yesICanJunContents.kpi3 < '13.2')?'green':(yesICanJunContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJulContents.kpi1 == null)?'grey-2':(yesICanJulContents.kpi1 >= '0' && yesICanJulContents.kpi1 <= '1.8')?'red':(yesICanJulContents.kpi1 > '1.8' && yesICanJulContents.kpi1 <= '2.4')?'orange':(yesICanJulContents.kpi1 > '2.4' && yesICanJulContents.kpi1 < '3')?'yellow-7':(yesICanJulContents.kpi1 >= '3' && yesICanJulContents.kpi1 < '3.6')?'green':(yesICanJulContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi2 == null)?'grey-2':(yesICanJulContents.kpi2 >= '0' && yesICanJulContents.kpi2 <= '12')?'red':(yesICanJulContents.kpi2 > '12' && yesICanJulContents.kpi2 <= '16')?'orange':(yesICanJulContents.kpi2 > '16' && yesICanJulContents.kpi2 < '20')?'yellow-7':(yesICanJulContents.kpi2 >= '20' && yesICanJulContents.kpi2 < '24')?'green':(yesICanJulContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi3 == null)?'grey-2':(yesICanJulContents.kpi3 >= '0' && yesICanJulContents.kpi3 <= '6.6')?'red':(yesICanJulContents.kpi3 > '6.6' && yesICanJulContents.kpi3 <= '8.8')?'orange':(yesICanJulContents.kpi3 > '8.8' && yesICanJulContents.kpi3 < '11')?'yellow-7':(yesICanJulContents.kpi3 >= '11' && yesICanJulContents.kpi3 < '13.2')?'green':(yesICanJulContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAugContents.kpi1 == null)?'grey-2':(yesICanAugContents.kpi1 >= '0' && yesICanAugContents.kpi1 <= '1.8')?'red':(yesICanAugContents.kpi1 > '1.8' && yesICanAugContents.kpi1 <= '2.4')?'orange':(yesICanAugContents.kpi1 > '2.4' && yesICanAugContents.kpi1 < '3')?'yellow-7':(yesICanAugContents.kpi1 >= '3' && yesICanAugContents.kpi1 < '3.6')?'green':(yesICanAugContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi2 == null)?'grey-2':(yesICanAugContents.kpi2 >= '0' && yesICanAugContents.kpi2 <= '12')?'red':(yesICanAugContents.kpi2 > '12' && yesICanAugContents.kpi2 <= '16')?'orange':(yesICanAugContents.kpi2 > '16' && yesICanAugContents.kpi2 < '20')?'yellow-7':(yesICanAugContents.kpi2 >= '20' && yesICanAugContents.kpi2 < '24')?'green':(yesICanAugContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi3 == null)?'grey-2':(yesICanAugContents.kpi3 >= '0' && yesICanAugContents.kpi3 <= '6.6')?'red':(yesICanAugContents.kpi3 > '6.6' && yesICanAugContents.kpi3 <= '8.8')?'orange':(yesICanAugContents.kpi3 > '8.8' && yesICanAugContents.kpi3 < '11')?'yellow-7':(yesICanAugContents.kpi3 >= '11' && yesICanAugContents.kpi3 < '13.2')?'green':(yesICanAugContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanSepContents.kpi1 == null)?'grey-2':(yesICanSepContents.kpi1 >= '0' && yesICanSepContents.kpi1 <= '1.8')?'red':(yesICanSepContents.kpi1 > '1.8' && yesICanSepContents.kpi1 <= '2.4')?'orange':(yesICanSepContents.kpi1 > '2.4' && yesICanSepContents.kpi1 < '3')?'yellow-7':(yesICanSepContents.kpi1 >= '3' && yesICanSepContents.kpi1 < '3.6')?'green':(yesICanSepContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi2 == null)?'grey-2':(yesICanSepContents.kpi2 >= '0' && yesICanSepContents.kpi2 <= '12')?'red':(yesICanSepContents.kpi2 > '12' && yesICanSepContents.kpi2 <= '16')?'orange':(yesICanSepContents.kpi2 > '16' && yesICanSepContents.kpi2 < '20')?'yellow-7':(yesICanSepContents.kpi2 >= '20' && yesICanSepContents.kpi2 < '24')?'green':(yesICanSepContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi3 == null)?'grey-2':(yesICanSepContents.kpi3 >= '0' && yesICanSepContents.kpi3 <= '6.6')?'red':(yesICanSepContents.kpi3 > '6.6' && yesICanSepContents.kpi3 <= '8.8')?'orange':(yesICanSepContents.kpi3 > '8.8' && yesICanSepContents.kpi3 < '11')?'yellow-7':(yesICanSepContents.kpi3 >= '11' && yesICanSepContents.kpi3 < '13.2')?'green':(yesICanSepContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanOctContents.kpi1 == null)?'grey-2':(yesICanOctContents.kpi1 >= '0' && yesICanOctContents.kpi1 <= '1.8')?'red':(yesICanOctContents.kpi1 > '1.8' && yesICanOctContents.kpi1 <= '2.4')?'orange':(yesICanOctContents.kpi1 > '2.4' && yesICanOctContents.kpi1 < '3')?'yellow-7':(yesICanOctContents.kpi1 >= '3' && yesICanOctContents.kpi1 < '3.6')?'green':(yesICanOctContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi2 == null)?'grey-2':(yesICanOctContents.kpi2 >= '0' && yesICanOctContents.kpi2 <= '12')?'red':(yesICanOctContents.kpi2 > '12' && yesICanOctContents.kpi2 <= '16')?'orange':(yesICanOctContents.kpi2 > '16' && yesICanOctContents.kpi2 < '20')?'yellow-7':(yesICanOctContents.kpi2 >= '20' && yesICanOctContents.kpi2 < '24')?'green':(yesICanOctContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi3 == null)?'grey-2':(yesICanOctContents.kpi3 >= '0' && yesICanOctContents.kpi3 <= '6.6')?'red':(yesICanOctContents.kpi3 > '6.6' && yesICanOctContents.kpi3 <= '8.8')?'orange':(yesICanOctContents.kpi3 > '8.8' && yesICanOctContents.kpi3 < '11')?'yellow-7':(yesICanOctContents.kpi3 >= '11' && yesICanOctContents.kpi3 < '13.2')?'green':(yesICanOctContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanNovContents.kpi1 == null)?'grey-2':(yesICanNovContents.kpi1 >= '0' && yesICanNovContents.kpi1 <= '1.8')?'red':(yesICanNovContents.kpi1 > '1.8' && yesICanNovContents.kpi1 <= '2.4')?'orange':(yesICanNovContents.kpi1 > '2.4' && yesICanNovContents.kpi1 < '3')?'yellow-7':(yesICanNovContents.kpi1 >= '3' && yesICanNovContents.kpi1 < '3.6')?'green':(yesICanNovContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi2 == null)?'grey-2':(yesICanNovContents.kpi2 >= '0' && yesICanNovContents.kpi2 <= '12')?'red':(yesICanNovContents.kpi2 > '12' && yesICanNovContents.kpi2 <= '16')?'orange':(yesICanNovContents.kpi2 > '16' && yesICanNovContents.kpi2 < '20')?'yellow-7':(yesICanNovContents.kpi2 >= '20' && yesICanNovContents.kpi2 < '24')?'green':(yesICanNovContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi3 == null)?'grey-2':(yesICanNovContents.kpi3 >= '0' && yesICanNovContents.kpi3 <= '6.6')?'red':(yesICanNovContents.kpi3 > '6.6' && yesICanNovContents.kpi3 <= '8.8')?'orange':(yesICanNovContents.kpi3 > '8.8' && yesICanNovContents.kpi3 < '11')?'yellow-7':(yesICanNovContents.kpi3 >= '11' && yesICanNovContents.kpi3 < '13.2')?'green':(yesICanNovContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanDecContents.kpi1 == null)?'grey-2':(yesICanDecContents.kpi1 >= '0' && yesICanDecContents.kpi1 <= '1.8')?'red':(yesICanDecContents.kpi1 > '1.8' && yesICanDecContents.kpi1 <= '2.4')?'orange':(yesICanDecContents.kpi1 > '2.4' && yesICanDecContents.kpi1 < '3')?'yellow-7':(yesICanDecContents.kpi1 >= '3' && yesICanDecContents.kpi1 < '3.6')?'green':(yesICanDecContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi2 == null)?'grey-2':(yesICanDecContents.kpi2 >= '0' && yesICanDecContents.kpi2 <= '12')?'red':(yesICanDecContents.kpi2 > '12' && yesICanDecContents.kpi2 <= '16')?'orange':(yesICanDecContents.kpi2 > '16' && yesICanDecContents.kpi2 < '20')?'yellow-7':(yesICanDecContents.kpi2 >= '20' && yesICanDecContents.kpi2 < '24')?'green':(yesICanDecContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi3 == null)?'grey-2':(yesICanDecContents.kpi3 >= '0' && yesICanDecContents.kpi3 <= '6.6')?'red':(yesICanDecContents.kpi3 > '6.6' && yesICanDecContents.kpi3 <= '8.8')?'orange':(yesICanDecContents.kpi3 > '8.8' && yesICanDecContents.kpi3 < '11')?'yellow-7':(yesICanDecContents.kpi3 >= '11' && yesICanDecContents.kpi3 < '13.2')?'green':(yesICanDecContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                                <q-tooltip># of people using the service (unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of first time users at the FB in the program</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJanContents.kpi1 == null)?'grey-2':(yesICanJanContents.kpi1 >= '0' && yesICanJanContents.kpi1 <= '1.8')?'red':(yesICanJanContents.kpi1 > '1.8' && yesICanJanContents.kpi1 <= '2.4')?'orange':(yesICanJanContents.kpi1 > '2.4' && yesICanJanContents.kpi1 < '3')?'yellow-7':(yesICanJanContents.kpi1 >= '3' && yesICanJanContents.kpi1 < '3.6')?'green':(yesICanJanContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi2 == null)?'grey-2':(yesICanJanContents.kpi2 >= '0' && yesICanJanContents.kpi2 <= '12')?'red':(yesICanJanContents.kpi2 > '12' && yesICanJanContents.kpi2 <= '16')?'orange':(yesICanJanContents.kpi2 > '16' && yesICanJanContents.kpi2 < '20')?'yellow-7':(yesICanJanContents.kpi2 >= '20' && yesICanJanContents.kpi2 < '24')?'green':(yesICanJanContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi3 == null)?'grey-2':(yesICanJanContents.kpi3 >= '0' && yesICanJanContents.kpi3 <= '6.6')?'red':(yesICanJanContents.kpi3 > '6.6' && yesICanJanContents.kpi3 <= '8.8')?'orange':(yesICanJanContents.kpi3 > '8.8' && yesICanJanContents.kpi3 < '11')?'yellow-7':(yesICanJanContents.kpi3 >= '11' && yesICanJanContents.kpi3 < '13.2')?'green':(yesICanJanContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanFebContents.kpi1 == null)?'grey-2':(yesICanFebContents.kpi1 >= '0' && yesICanFebContents.kpi1 <= '1.8')?'red':(yesICanFebContents.kpi1 > '1.8' && yesICanFebContents.kpi1 <= '2.4')?'orange':(yesICanFebContents.kpi1 > '2.4' && yesICanFebContents.kpi1 < '3')?'yellow-7':(yesICanFebContents.kpi1 >= '3' && yesICanFebContents.kpi1 < '3.6')?'green':(yesICanFebContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi2 == null)?'grey-2':(yesICanFebContents.kpi2 >= '0' && yesICanFebContents.kpi2 <= '12')?'red':(yesICanFebContents.kpi2 > '12' && yesICanFebContents.kpi2 <= '16')?'orange':(yesICanFebContents.kpi2 > '16' && yesICanFebContents.kpi2 < '20')?'yellow-7':(yesICanFebContents.kpi2 >= '20' && yesICanFebContents.kpi2 < '24')?'green':(yesICanFebContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi3 == null)?'grey-2':(yesICanFebContents.kpi3 >= '0' && yesICanFebContents.kpi3 <= '6.6')?'red':(yesICanFebContents.kpi3 > '6.6' && yesICanFebContents.kpi3 <= '8.8')?'orange':(yesICanFebContents.kpi3 > '8.8' && yesICanFebContents.kpi3 < '11')?'yellow-7':(yesICanFebContents.kpi3 >= '11' && yesICanFebContents.kpi3 < '13.2')?'green':(yesICanFebContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMarContents.kpi1 == null)?'grey-2':(yesICanMarContents.kpi1 >= '0' && yesICanMarContents.kpi1 <= '1.8')?'red':(yesICanMarContents.kpi1 > '1.8' && yesICanMarContents.kpi1 <= '2.4')?'orange':(yesICanMarContents.kpi1 > '2.4' && yesICanMarContents.kpi1 < '3')?'yellow-7':(yesICanMarContents.kpi1 >= '3' && yesICanMarContents.kpi1 < '3.6')?'green':(yesICanMarContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi2 == null)?'grey-2':(yesICanMarContents.kpi2 >= '0' && yesICanMarContents.kpi2 <= '12')?'red':(yesICanMarContents.kpi2 > '12' && yesICanMarContents.kpi2 <= '16')?'orange':(yesICanMarContents.kpi2 > '16' && yesICanMarContents.kpi2 < '20')?'yellow-7':(yesICanMarContents.kpi2 >= '20' && yesICanMarContents.kpi2 < '24')?'green':(yesICanMarContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi3 == null)?'grey-2':(yesICanMarContents.kpi3 >= '0' && yesICanMarContents.kpi3 <= '6.6')?'red':(yesICanMarContents.kpi3 > '6.6' && yesICanMarContents.kpi3 <= '8.8')?'orange':(yesICanMarContents.kpi3 > '8.8' && yesICanMarContents.kpi3 < '11')?'yellow-7':(yesICanMarContents.kpi3 >= '11' && yesICanMarContents.kpi3 < '13.2')?'green':(yesICanMarContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAprContents.kpi1 == null)?'grey-2':(yesICanAprContents.kpi1 >= '0' && yesICanAprContents.kpi1 <= '1.8')?'red':(yesICanAprContents.kpi1 > '1.8' && yesICanAprContents.kpi1 <= '2.4')?'orange':(yesICanAprContents.kpi1 > '2.4' && yesICanAprContents.kpi1 < '3')?'yellow-7':(yesICanAprContents.kpi1 >= '3' && yesICanAprContents.kpi1 < '3.6')?'green':(yesICanAprContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi2 == null)?'grey-2':(yesICanAprContents.kpi2 >= '0' && yesICanAprContents.kpi2 <= '12')?'red':(yesICanAprContents.kpi2 > '12' && yesICanAprContents.kpi2 <= '16')?'orange':(yesICanAprContents.kpi2 > '16' && yesICanAprContents.kpi2 < '20')?'yellow-7':(yesICanAprContents.kpi2 >= '20' && yesICanAprContents.kpi2 < '24')?'green':(yesICanAprContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi3 == null)?'grey-2':(yesICanAprContents.kpi3 >= '0' && yesICanAprContents.kpi3 <= '6.6')?'red':(yesICanAprContents.kpi3 > '6.6' && yesICanAprContents.kpi3 <= '8.8')?'orange':(yesICanAprContents.kpi3 > '8.8' && yesICanAprContents.kpi3 < '11')?'yellow-7':(yesICanAprContents.kpi3 >= '11' && yesICanAprContents.kpi3 < '13.2')?'green':(yesICanAprContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMayContents.kpi1 == null)?'grey-2':(yesICanMayContents.kpi1 >= '0' && yesICanMayContents.kpi1 <= '1.8')?'red':(yesICanMayContents.kpi1 > '1.8' && yesICanMayContents.kpi1 <= '2.4')?'orange':(yesICanMayContents.kpi1 > '2.4' && yesICanMayContents.kpi1 < '3')?'yellow-7':(yesICanMayContents.kpi1 >= '3' && yesICanMayContents.kpi1 < '3.6')?'green':(yesICanMayContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi2 == null)?'grey-2':(yesICanMayContents.kpi2 >= '0' && yesICanMayContents.kpi2 <= '12')?'red':(yesICanMayContents.kpi2 > '12' && yesICanMayContents.kpi2 <= '16')?'orange':(yesICanMayContents.kpi2 > '16' && yesICanMayContents.kpi2 < '20')?'yellow-7':(yesICanMayContents.kpi2 >= '20' && yesICanMayContents.kpi2 < '24')?'green':(yesICanMayContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi3 == null)?'grey-2':(yesICanMayContents.kpi3 >= '0' && yesICanMayContents.kpi3 <= '6.6')?'red':(yesICanMayContents.kpi3 > '6.6' && yesICanMayContents.kpi3 <= '8.8')?'orange':(yesICanMayContents.kpi3 > '8.8' && yesICanMayContents.kpi3 < '11')?'yellow-7':(yesICanMayContents.kpi3 >= '11' && yesICanMayContents.kpi3 < '13.2')?'green':(yesICanMayContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJunContents.kpi1 == null)?'grey-2':(yesICanJunContents.kpi1 >= '0' && yesICanJunContents.kpi1 <= '1.8')?'red':(yesICanJunContents.kpi1 > '1.8' && yesICanJunContents.kpi1 <= '2.4')?'orange':(yesICanJunContents.kpi1 > '2.4' && yesICanJunContents.kpi1 < '3')?'yellow-7':(yesICanJunContents.kpi1 >= '3' && yesICanJunContents.kpi1 < '3.6')?'green':(yesICanJunContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi2 == null)?'grey-2':(yesICanJunContents.kpi2 >= '0' && yesICanJunContents.kpi2 <= '12')?'red':(yesICanJunContents.kpi2 > '12' && yesICanJunContents.kpi2 <= '16')?'orange':(yesICanJunContents.kpi2 > '16' && yesICanJunContents.kpi2 < '20')?'yellow-7':(yesICanJunContents.kpi2 >= '20' && yesICanJunContents.kpi2 < '24')?'green':(yesICanJunContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi3 == null)?'grey-2':(yesICanJunContents.kpi3 >= '0' && yesICanJunContents.kpi3 <= '6.6')?'red':(yesICanJunContents.kpi3 > '6.6' && yesICanJunContents.kpi3 <= '8.8')?'orange':(yesICanJunContents.kpi3 > '8.8' && yesICanJunContents.kpi3 < '11')?'yellow-7':(yesICanJunContents.kpi3 >= '11' && yesICanJunContents.kpi3 < '13.2')?'green':(yesICanJunContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJulContents.kpi1 == null)?'grey-2':(yesICanJulContents.kpi1 >= '0' && yesICanJulContents.kpi1 <= '1.8')?'red':(yesICanJulContents.kpi1 > '1.8' && yesICanJulContents.kpi1 <= '2.4')?'orange':(yesICanJulContents.kpi1 > '2.4' && yesICanJulContents.kpi1 < '3')?'yellow-7':(yesICanJulContents.kpi1 >= '3' && yesICanJulContents.kpi1 < '3.6')?'green':(yesICanJulContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi2 == null)?'grey-2':(yesICanJulContents.kpi2 >= '0' && yesICanJulContents.kpi2 <= '12')?'red':(yesICanJulContents.kpi2 > '12' && yesICanJulContents.kpi2 <= '16')?'orange':(yesICanJulContents.kpi2 > '16' && yesICanJulContents.kpi2 < '20')?'yellow-7':(yesICanJulContents.kpi2 >= '20' && yesICanJulContents.kpi2 < '24')?'green':(yesICanJulContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi3 == null)?'grey-2':(yesICanJulContents.kpi3 >= '0' && yesICanJulContents.kpi3 <= '6.6')?'red':(yesICanJulContents.kpi3 > '6.6' && yesICanJulContents.kpi3 <= '8.8')?'orange':(yesICanJulContents.kpi3 > '8.8' && yesICanJulContents.kpi3 < '11')?'yellow-7':(yesICanJulContents.kpi3 >= '11' && yesICanJulContents.kpi3 < '13.2')?'green':(yesICanJulContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAugContents.kpi1 == null)?'grey-2':(yesICanAugContents.kpi1 >= '0' && yesICanAugContents.kpi1 <= '1.8')?'red':(yesICanAugContents.kpi1 > '1.8' && yesICanAugContents.kpi1 <= '2.4')?'orange':(yesICanAugContents.kpi1 > '2.4' && yesICanAugContents.kpi1 < '3')?'yellow-7':(yesICanAugContents.kpi1 >= '3' && yesICanAugContents.kpi1 < '3.6')?'green':(yesICanAugContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi2 == null)?'grey-2':(yesICanAugContents.kpi2 >= '0' && yesICanAugContents.kpi2 <= '12')?'red':(yesICanAugContents.kpi2 > '12' && yesICanAugContents.kpi2 <= '16')?'orange':(yesICanAugContents.kpi2 > '16' && yesICanAugContents.kpi2 < '20')?'yellow-7':(yesICanAugContents.kpi2 >= '20' && yesICanAugContents.kpi2 < '24')?'green':(yesICanAugContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi3 == null)?'grey-2':(yesICanAugContents.kpi3 >= '0' && yesICanAugContents.kpi3 <= '6.6')?'red':(yesICanAugContents.kpi3 > '6.6' && yesICanAugContents.kpi3 <= '8.8')?'orange':(yesICanAugContents.kpi3 > '8.8' && yesICanAugContents.kpi3 < '11')?'yellow-7':(yesICanAugContents.kpi3 >= '11' && yesICanAugContents.kpi3 < '13.2')?'green':(yesICanAugContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanSepContents.kpi1 == null)?'grey-2':(yesICanSepContents.kpi1 >= '0' && yesICanSepContents.kpi1 <= '1.8')?'red':(yesICanSepContents.kpi1 > '1.8' && yesICanSepContents.kpi1 <= '2.4')?'orange':(yesICanSepContents.kpi1 > '2.4' && yesICanSepContents.kpi1 < '3')?'yellow-7':(yesICanSepContents.kpi1 >= '3' && yesICanSepContents.kpi1 < '3.6')?'green':(yesICanSepContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi2 == null)?'grey-2':(yesICanSepContents.kpi2 >= '0' && yesICanSepContents.kpi2 <= '12')?'red':(yesICanSepContents.kpi2 > '12' && yesICanSepContents.kpi2 <= '16')?'orange':(yesICanSepContents.kpi2 > '16' && yesICanSepContents.kpi2 < '20')?'yellow-7':(yesICanSepContents.kpi2 >= '20' && yesICanSepContents.kpi2 < '24')?'green':(yesICanSepContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi3 == null)?'grey-2':(yesICanSepContents.kpi3 >= '0' && yesICanSepContents.kpi3 <= '6.6')?'red':(yesICanSepContents.kpi3 > '6.6' && yesICanSepContents.kpi3 <= '8.8')?'orange':(yesICanSepContents.kpi3 > '8.8' && yesICanSepContents.kpi3 < '11')?'yellow-7':(yesICanSepContents.kpi3 >= '11' && yesICanSepContents.kpi3 < '13.2')?'green':(yesICanSepContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanOctContents.kpi1 == null)?'grey-2':(yesICanOctContents.kpi1 >= '0' && yesICanOctContents.kpi1 <= '1.8')?'red':(yesICanOctContents.kpi1 > '1.8' && yesICanOctContents.kpi1 <= '2.4')?'orange':(yesICanOctContents.kpi1 > '2.4' && yesICanOctContents.kpi1 < '3')?'yellow-7':(yesICanOctContents.kpi1 >= '3' && yesICanOctContents.kpi1 < '3.6')?'green':(yesICanOctContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi2 == null)?'grey-2':(yesICanOctContents.kpi2 >= '0' && yesICanOctContents.kpi2 <= '12')?'red':(yesICanOctContents.kpi2 > '12' && yesICanOctContents.kpi2 <= '16')?'orange':(yesICanOctContents.kpi2 > '16' && yesICanOctContents.kpi2 < '20')?'yellow-7':(yesICanOctContents.kpi2 >= '20' && yesICanOctContents.kpi2 < '24')?'green':(yesICanOctContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi3 == null)?'grey-2':(yesICanOctContents.kpi3 >= '0' && yesICanOctContents.kpi3 <= '6.6')?'red':(yesICanOctContents.kpi3 > '6.6' && yesICanOctContents.kpi3 <= '8.8')?'orange':(yesICanOctContents.kpi3 > '8.8' && yesICanOctContents.kpi3 < '11')?'yellow-7':(yesICanOctContents.kpi3 >= '11' && yesICanOctContents.kpi3 < '13.2')?'green':(yesICanOctContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanNovContents.kpi1 == null)?'grey-2':(yesICanNovContents.kpi1 >= '0' && yesICanNovContents.kpi1 <= '1.8')?'red':(yesICanNovContents.kpi1 > '1.8' && yesICanNovContents.kpi1 <= '2.4')?'orange':(yesICanNovContents.kpi1 > '2.4' && yesICanNovContents.kpi1 < '3')?'yellow-7':(yesICanNovContents.kpi1 >= '3' && yesICanNovContents.kpi1 < '3.6')?'green':(yesICanNovContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi2 == null)?'grey-2':(yesICanNovContents.kpi2 >= '0' && yesICanNovContents.kpi2 <= '12')?'red':(yesICanNovContents.kpi2 > '12' && yesICanNovContents.kpi2 <= '16')?'orange':(yesICanNovContents.kpi2 > '16' && yesICanNovContents.kpi2 < '20')?'yellow-7':(yesICanNovContents.kpi2 >= '20' && yesICanNovContents.kpi2 < '24')?'green':(yesICanNovContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi3 == null)?'grey-2':(yesICanNovContents.kpi3 >= '0' && yesICanNovContents.kpi3 <= '6.6')?'red':(yesICanNovContents.kpi3 > '6.6' && yesICanNovContents.kpi3 <= '8.8')?'orange':(yesICanNovContents.kpi3 > '8.8' && yesICanNovContents.kpi3 < '11')?'yellow-7':(yesICanNovContents.kpi3 >= '11' && yesICanNovContents.kpi3 < '13.2')?'green':(yesICanNovContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanDecContents.kpi1 == null)?'grey-2':(yesICanDecContents.kpi1 >= '0' && yesICanDecContents.kpi1 <= '1.8')?'red':(yesICanDecContents.kpi1 > '1.8' && yesICanDecContents.kpi1 <= '2.4')?'orange':(yesICanDecContents.kpi1 > '2.4' && yesICanDecContents.kpi1 < '3')?'yellow-7':(yesICanDecContents.kpi1 >= '3' && yesICanDecContents.kpi1 < '3.6')?'green':(yesICanDecContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi2 == null)?'grey-2':(yesICanDecContents.kpi2 >= '0' && yesICanDecContents.kpi2 <= '12')?'red':(yesICanDecContents.kpi2 > '12' && yesICanDecContents.kpi2 <= '16')?'orange':(yesICanDecContents.kpi2 > '16' && yesICanDecContents.kpi2 < '20')?'yellow-7':(yesICanDecContents.kpi2 >= '20' && yesICanDecContents.kpi2 < '24')?'green':(yesICanDecContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi3 == null)?'grey-2':(yesICanDecContents.kpi3 >= '0' && yesICanDecContents.kpi3 <= '6.6')?'red':(yesICanDecContents.kpi3 > '6.6' && yesICanDecContents.kpi3 <= '8.8')?'orange':(yesICanDecContents.kpi3 > '8.8' && yesICanDecContents.kpi3 < '11')?'yellow-7':(yesICanDecContents.kpi3 >= '11' && yesICanDecContents.kpi3 < '13.2')?'green':(yesICanDecContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                                <q-tooltip># of people using the service (unique)</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of first time users at the FB in the program</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 3
                                <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJanContents.kpi1 == null)?'grey-2':(yesICanJanContents.kpi1 >= '0' && yesICanJanContents.kpi1 <= '1.8')?'red':(yesICanJanContents.kpi1 > '1.8' && yesICanJanContents.kpi1 <= '2.4')?'orange':(yesICanJanContents.kpi1 > '2.4' && yesICanJanContents.kpi1 < '3')?'yellow-7':(yesICanJanContents.kpi1 >= '3' && yesICanJanContents.kpi1 < '3.6')?'green':(yesICanJanContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi2 == null)?'grey-2':(yesICanJanContents.kpi2 >= '0' && yesICanJanContents.kpi2 <= '12')?'red':(yesICanJanContents.kpi2 > '12' && yesICanJanContents.kpi2 <= '16')?'orange':(yesICanJanContents.kpi2 > '16' && yesICanJanContents.kpi2 < '20')?'yellow-7':(yesICanJanContents.kpi2 >= '20' && yesICanJanContents.kpi2 < '24')?'green':(yesICanJanContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJanContents.kpi3 == null)?'grey-2':(yesICanJanContents.kpi3 >= '0' && yesICanJanContents.kpi3 <= '6.6')?'red':(yesICanJanContents.kpi3 > '6.6' && yesICanJanContents.kpi3 <= '8.8')?'orange':(yesICanJanContents.kpi3 > '8.8' && yesICanJanContents.kpi3 < '11')?'yellow-7':(yesICanJanContents.kpi3 >= '11' && yesICanJanContents.kpi3 < '13.2')?'green':(yesICanJanContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJanContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanFebContents.kpi1 == null)?'grey-2':(yesICanFebContents.kpi1 >= '0' && yesICanFebContents.kpi1 <= '1.8')?'red':(yesICanFebContents.kpi1 > '1.8' && yesICanFebContents.kpi1 <= '2.4')?'orange':(yesICanFebContents.kpi1 > '2.4' && yesICanFebContents.kpi1 < '3')?'yellow-7':(yesICanFebContents.kpi1 >= '3' && yesICanFebContents.kpi1 < '3.6')?'green':(yesICanFebContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi2 == null)?'grey-2':(yesICanFebContents.kpi2 >= '0' && yesICanFebContents.kpi2 <= '12')?'red':(yesICanFebContents.kpi2 > '12' && yesICanFebContents.kpi2 <= '16')?'orange':(yesICanFebContents.kpi2 > '16' && yesICanFebContents.kpi2 < '20')?'yellow-7':(yesICanFebContents.kpi2 >= '20' && yesICanFebContents.kpi2 < '24')?'green':(yesICanFebContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanFebContents.kpi3 == null)?'grey-2':(yesICanFebContents.kpi3 >= '0' && yesICanFebContents.kpi3 <= '6.6')?'red':(yesICanFebContents.kpi3 > '6.6' && yesICanFebContents.kpi3 <= '8.8')?'orange':(yesICanFebContents.kpi3 > '8.8' && yesICanFebContents.kpi3 < '11')?'yellow-7':(yesICanFebContents.kpi3 >= '11' && yesICanFebContents.kpi3 < '13.2')?'green':(yesICanFebContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanFebContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMarContents.kpi1 == null)?'grey-2':(yesICanMarContents.kpi1 >= '0' && yesICanMarContents.kpi1 <= '1.8')?'red':(yesICanMarContents.kpi1 > '1.8' && yesICanMarContents.kpi1 <= '2.4')?'orange':(yesICanMarContents.kpi1 > '2.4' && yesICanMarContents.kpi1 < '3')?'yellow-7':(yesICanMarContents.kpi1 >= '3' && yesICanMarContents.kpi1 < '3.6')?'green':(yesICanMarContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi2 == null)?'grey-2':(yesICanMarContents.kpi2 >= '0' && yesICanMarContents.kpi2 <= '12')?'red':(yesICanMarContents.kpi2 > '12' && yesICanMarContents.kpi2 <= '16')?'orange':(yesICanMarContents.kpi2 > '16' && yesICanMarContents.kpi2 < '20')?'yellow-7':(yesICanMarContents.kpi2 >= '20' && yesICanMarContents.kpi2 < '24')?'green':(yesICanMarContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMarContents.kpi3 == null)?'grey-2':(yesICanMarContents.kpi3 >= '0' && yesICanMarContents.kpi3 <= '6.6')?'red':(yesICanMarContents.kpi3 > '6.6' && yesICanMarContents.kpi3 <= '8.8')?'orange':(yesICanMarContents.kpi3 > '8.8' && yesICanMarContents.kpi3 < '11')?'yellow-7':(yesICanMarContents.kpi3 >= '11' && yesICanMarContents.kpi3 < '13.2')?'green':(yesICanMarContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMarContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAprContents.kpi1 == null)?'grey-2':(yesICanAprContents.kpi1 >= '0' && yesICanAprContents.kpi1 <= '1.8')?'red':(yesICanAprContents.kpi1 > '1.8' && yesICanAprContents.kpi1 <= '2.4')?'orange':(yesICanAprContents.kpi1 > '2.4' && yesICanAprContents.kpi1 < '3')?'yellow-7':(yesICanAprContents.kpi1 >= '3' && yesICanAprContents.kpi1 < '3.6')?'green':(yesICanAprContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi2 == null)?'grey-2':(yesICanAprContents.kpi2 >= '0' && yesICanAprContents.kpi2 <= '12')?'red':(yesICanAprContents.kpi2 > '12' && yesICanAprContents.kpi2 <= '16')?'orange':(yesICanAprContents.kpi2 > '16' && yesICanAprContents.kpi2 < '20')?'yellow-7':(yesICanAprContents.kpi2 >= '20' && yesICanAprContents.kpi2 < '24')?'green':(yesICanAprContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAprContents.kpi3 == null)?'grey-2':(yesICanAprContents.kpi3 >= '0' && yesICanAprContents.kpi3 <= '6.6')?'red':(yesICanAprContents.kpi3 > '6.6' && yesICanAprContents.kpi3 <= '8.8')?'orange':(yesICanAprContents.kpi3 > '8.8' && yesICanAprContents.kpi3 < '11')?'yellow-7':(yesICanAprContents.kpi3 >= '11' && yesICanAprContents.kpi3 < '13.2')?'green':(yesICanAprContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAprContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanMayContents.kpi1 == null)?'grey-2':(yesICanMayContents.kpi1 >= '0' && yesICanMayContents.kpi1 <= '1.8')?'red':(yesICanMayContents.kpi1 > '1.8' && yesICanMayContents.kpi1 <= '2.4')?'orange':(yesICanMayContents.kpi1 > '2.4' && yesICanMayContents.kpi1 < '3')?'yellow-7':(yesICanMayContents.kpi1 >= '3' && yesICanMayContents.kpi1 < '3.6')?'green':(yesICanMayContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi2 == null)?'grey-2':(yesICanMayContents.kpi2 >= '0' && yesICanMayContents.kpi2 <= '12')?'red':(yesICanMayContents.kpi2 > '12' && yesICanMayContents.kpi2 <= '16')?'orange':(yesICanMayContents.kpi2 > '16' && yesICanMayContents.kpi2 < '20')?'yellow-7':(yesICanMayContents.kpi2 >= '20' && yesICanMayContents.kpi2 < '24')?'green':(yesICanMayContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanMayContents.kpi3 == null)?'grey-2':(yesICanMayContents.kpi3 >= '0' && yesICanMayContents.kpi3 <= '6.6')?'red':(yesICanMayContents.kpi3 > '6.6' && yesICanMayContents.kpi3 <= '8.8')?'orange':(yesICanMayContents.kpi3 > '8.8' && yesICanMayContents.kpi3 < '11')?'yellow-7':(yesICanMayContents.kpi3 >= '11' && yesICanMayContents.kpi3 < '13.2')?'green':(yesICanMayContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanMayContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJunContents.kpi1 == null)?'grey-2':(yesICanJunContents.kpi1 >= '0' && yesICanJunContents.kpi1 <= '1.8')?'red':(yesICanJunContents.kpi1 > '1.8' && yesICanJunContents.kpi1 <= '2.4')?'orange':(yesICanJunContents.kpi1 > '2.4' && yesICanJunContents.kpi1 < '3')?'yellow-7':(yesICanJunContents.kpi1 >= '3' && yesICanJunContents.kpi1 < '3.6')?'green':(yesICanJunContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi2 == null)?'grey-2':(yesICanJunContents.kpi2 >= '0' && yesICanJunContents.kpi2 <= '12')?'red':(yesICanJunContents.kpi2 > '12' && yesICanJunContents.kpi2 <= '16')?'orange':(yesICanJunContents.kpi2 > '16' && yesICanJunContents.kpi2 < '20')?'yellow-7':(yesICanJunContents.kpi2 >= '20' && yesICanJunContents.kpi2 < '24')?'green':(yesICanJunContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJunContents.kpi3 == null)?'grey-2':(yesICanJunContents.kpi3 >= '0' && yesICanJunContents.kpi3 <= '6.6')?'red':(yesICanJunContents.kpi3 > '6.6' && yesICanJunContents.kpi3 <= '8.8')?'orange':(yesICanJunContents.kpi3 > '8.8' && yesICanJunContents.kpi3 < '11')?'yellow-7':(yesICanJunContents.kpi3 >= '11' && yesICanJunContents.kpi3 < '13.2')?'green':(yesICanJunContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJunContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanJulContents.kpi1 == null)?'grey-2':(yesICanJulContents.kpi1 >= '0' && yesICanJulContents.kpi1 <= '1.8')?'red':(yesICanJulContents.kpi1 > '1.8' && yesICanJulContents.kpi1 <= '2.4')?'orange':(yesICanJulContents.kpi1 > '2.4' && yesICanJulContents.kpi1 < '3')?'yellow-7':(yesICanJulContents.kpi1 >= '3' && yesICanJulContents.kpi1 < '3.6')?'green':(yesICanJulContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi2 == null)?'grey-2':(yesICanJulContents.kpi2 >= '0' && yesICanJulContents.kpi2 <= '12')?'red':(yesICanJulContents.kpi2 > '12' && yesICanJulContents.kpi2 <= '16')?'orange':(yesICanJulContents.kpi2 > '16' && yesICanJulContents.kpi2 < '20')?'yellow-7':(yesICanJulContents.kpi2 >= '20' && yesICanJulContents.kpi2 < '24')?'green':(yesICanJulContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanJulContents.kpi3 == null)?'grey-2':(yesICanJulContents.kpi3 >= '0' && yesICanJulContents.kpi3 <= '6.6')?'red':(yesICanJulContents.kpi3 > '6.6' && yesICanJulContents.kpi3 <= '8.8')?'orange':(yesICanJulContents.kpi3 > '8.8' && yesICanJulContents.kpi3 < '11')?'yellow-7':(yesICanJulContents.kpi3 >= '11' && yesICanJulContents.kpi3 < '13.2')?'green':(yesICanJulContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanJulContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanAugContents.kpi1 == null)?'grey-2':(yesICanAugContents.kpi1 >= '0' && yesICanAugContents.kpi1 <= '1.8')?'red':(yesICanAugContents.kpi1 > '1.8' && yesICanAugContents.kpi1 <= '2.4')?'orange':(yesICanAugContents.kpi1 > '2.4' && yesICanAugContents.kpi1 < '3')?'yellow-7':(yesICanAugContents.kpi1 >= '3' && yesICanAugContents.kpi1 < '3.6')?'green':(yesICanAugContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi2 == null)?'grey-2':(yesICanAugContents.kpi2 >= '0' && yesICanAugContents.kpi2 <= '12')?'red':(yesICanAugContents.kpi2 > '12' && yesICanAugContents.kpi2 <= '16')?'orange':(yesICanAugContents.kpi2 > '16' && yesICanAugContents.kpi2 < '20')?'yellow-7':(yesICanAugContents.kpi2 >= '20' && yesICanAugContents.kpi2 < '24')?'green':(yesICanAugContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanAugContents.kpi3 == null)?'grey-2':(yesICanAugContents.kpi3 >= '0' && yesICanAugContents.kpi3 <= '6.6')?'red':(yesICanAugContents.kpi3 > '6.6' && yesICanAugContents.kpi3 <= '8.8')?'orange':(yesICanAugContents.kpi3 > '8.8' && yesICanAugContents.kpi3 < '11')?'yellow-7':(yesICanAugContents.kpi3 >= '11' && yesICanAugContents.kpi3 < '13.2')?'green':(yesICanAugContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanAugContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanSepContents.kpi1 == null)?'grey-2':(yesICanSepContents.kpi1 >= '0' && yesICanSepContents.kpi1 <= '1.8')?'red':(yesICanSepContents.kpi1 > '1.8' && yesICanSepContents.kpi1 <= '2.4')?'orange':(yesICanSepContents.kpi1 > '2.4' && yesICanSepContents.kpi1 < '3')?'yellow-7':(yesICanSepContents.kpi1 >= '3' && yesICanSepContents.kpi1 < '3.6')?'green':(yesICanSepContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi2 == null)?'grey-2':(yesICanSepContents.kpi2 >= '0' && yesICanSepContents.kpi2 <= '12')?'red':(yesICanSepContents.kpi2 > '12' && yesICanSepContents.kpi2 <= '16')?'orange':(yesICanSepContents.kpi2 > '16' && yesICanSepContents.kpi2 < '20')?'yellow-7':(yesICanSepContents.kpi2 >= '20' && yesICanSepContents.kpi2 < '24')?'green':(yesICanSepContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanSepContents.kpi3 == null)?'grey-2':(yesICanSepContents.kpi3 >= '0' && yesICanSepContents.kpi3 <= '6.6')?'red':(yesICanSepContents.kpi3 > '6.6' && yesICanSepContents.kpi3 <= '8.8')?'orange':(yesICanSepContents.kpi3 > '8.8' && yesICanSepContents.kpi3 < '11')?'yellow-7':(yesICanSepContents.kpi3 >= '11' && yesICanSepContents.kpi3 < '13.2')?'green':(yesICanSepContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanSepContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanOctContents.kpi1 == null)?'grey-2':(yesICanOctContents.kpi1 >= '0' && yesICanOctContents.kpi1 <= '1.8')?'red':(yesICanOctContents.kpi1 > '1.8' && yesICanOctContents.kpi1 <= '2.4')?'orange':(yesICanOctContents.kpi1 > '2.4' && yesICanOctContents.kpi1 < '3')?'yellow-7':(yesICanOctContents.kpi1 >= '3' && yesICanOctContents.kpi1 < '3.6')?'green':(yesICanOctContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi2 == null)?'grey-2':(yesICanOctContents.kpi2 >= '0' && yesICanOctContents.kpi2 <= '12')?'red':(yesICanOctContents.kpi2 > '12' && yesICanOctContents.kpi2 <= '16')?'orange':(yesICanOctContents.kpi2 > '16' && yesICanOctContents.kpi2 < '20')?'yellow-7':(yesICanOctContents.kpi2 >= '20' && yesICanOctContents.kpi2 < '24')?'green':(yesICanOctContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanOctContents.kpi3 == null)?'grey-2':(yesICanOctContents.kpi3 >= '0' && yesICanOctContents.kpi3 <= '6.6')?'red':(yesICanOctContents.kpi3 > '6.6' && yesICanOctContents.kpi3 <= '8.8')?'orange':(yesICanOctContents.kpi3 > '8.8' && yesICanOctContents.kpi3 < '11')?'yellow-7':(yesICanOctContents.kpi3 >= '11' && yesICanOctContents.kpi3 < '13.2')?'green':(yesICanOctContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanOctContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanNovContents.kpi1 == null)?'grey-2':(yesICanNovContents.kpi1 >= '0' && yesICanNovContents.kpi1 <= '1.8')?'red':(yesICanNovContents.kpi1 > '1.8' && yesICanNovContents.kpi1 <= '2.4')?'orange':(yesICanNovContents.kpi1 > '2.4' && yesICanNovContents.kpi1 < '3')?'yellow-7':(yesICanNovContents.kpi1 >= '3' && yesICanNovContents.kpi1 < '3.6')?'green':(yesICanNovContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi2 == null)?'grey-2':(yesICanNovContents.kpi2 >= '0' && yesICanNovContents.kpi2 <= '12')?'red':(yesICanNovContents.kpi2 > '12' && yesICanNovContents.kpi2 <= '16')?'orange':(yesICanNovContents.kpi2 > '16' && yesICanNovContents.kpi2 < '20')?'yellow-7':(yesICanNovContents.kpi2 >= '20' && yesICanNovContents.kpi2 < '24')?'green':(yesICanNovContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanNovContents.kpi3 == null)?'grey-2':(yesICanNovContents.kpi3 >= '0' && yesICanNovContents.kpi3 <= '6.6')?'red':(yesICanNovContents.kpi3 > '6.6' && yesICanNovContents.kpi3 <= '8.8')?'orange':(yesICanNovContents.kpi3 > '8.8' && yesICanNovContents.kpi3 < '11')?'yellow-7':(yesICanNovContents.kpi3 >= '11' && yesICanNovContents.kpi3 < '13.2')?'green':(yesICanNovContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanNovContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
                              :color="(yesICanDecContents.kpi1 == null)?'grey-2':(yesICanDecContents.kpi1 >= '0' && yesICanDecContents.kpi1 <= '1.8')?'red':(yesICanDecContents.kpi1 > '1.8' && yesICanDecContents.kpi1 <= '2.4')?'orange':(yesICanDecContents.kpi1 > '2.4' && yesICanDecContents.kpi1 < '3')?'yellow-7':(yesICanDecContents.kpi1 >= '3' && yesICanDecContents.kpi1 < '3.6')?'green':(yesICanDecContents.kpi1 >= '3.6'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi1}}
                              <q-tooltip># of people using the service (unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi2 == null)?'grey-2':(yesICanDecContents.kpi2 >= '0' && yesICanDecContents.kpi2 <= '12')?'red':(yesICanDecContents.kpi2 > '12' && yesICanDecContents.kpi2 <= '16')?'orange':(yesICanDecContents.kpi2 > '16' && yesICanDecContents.kpi2 < '20')?'yellow-7':(yesICanDecContents.kpi2 >= '20' && yesICanDecContents.kpi2 < '24')?'green':(yesICanDecContents.kpi2 >= '24'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi2}}
                              <q-tooltip># of first time users at the FB in the program</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(yesICanDecContents.kpi3 == null)?'grey-2':(yesICanDecContents.kpi3 >= '0' && yesICanDecContents.kpi3 <= '6.6')?'red':(yesICanDecContents.kpi3 > '6.6' && yesICanDecContents.kpi3 <= '8.8')?'orange':(yesICanDecContents.kpi3 > '8.8' && yesICanDecContents.kpi3 < '11')?'yellow-7':(yesICanDecContents.kpi3 >= '11' && yesICanDecContents.kpi3 < '13.2')?'green':(yesICanDecContents.kpi3 >= '13.2'?'blue':'grey-2')"
                            >
                            {{yesICanDecContents.kpi3}}
                              <q-tooltip># of poverty reduction plans developed</q-tooltip>
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
              yesICanJanContent: {
                
              },
              yesICanJanContents : [],
              yesICanFebContent: {
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
              yesICanFebContents : [],
              yesICanMarContent: {
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
              yesICanMarContents : [],
              yesICanAprContent: {
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
              yesICanAprContents : [],
              yesICanMayContent: {
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
              yesICanMayContents : [],
              yesICanJunContent: {
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
              yesICanJunContents : [],
              yesICanJulContent: {
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
              yesICanJulContents : [],
              yesICanAugContent: {
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
              yesICanAugContents : [],
              yesICanSepContent: {
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
              yesICanSepContents : [],
              yesICanOctContent: {
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
              yesICanOctContents : [],
              yesICanNovContent: {
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
              yesICanNovContents : [],
              yesICanDecContent: {
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
              yesICanDecContents : []


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
                            {time_period: 'January', expenses: this.yesICanJanContents.expenses, revenues: this.yesICanJanContents.revenues},
                            {time_period: 'February', expenses: this.yesICanFebContents.expenses, revenues: this.yesICanFebContents.revenues},
                            {time_period: 'March', expenses: this.yesICanMarContents.expenses, revenues: this.yesICanMarContents.revenues},
                            {time_period: 'April', expenses: this.yesICanAprContents.expenses, revenues: this.yesICanAprContents.revenues},
                            {time_period: 'May', expenses: this.yesICanMayContents.expenses, revenues: this.yesICanMayContents.revenues},
                            {time_period: 'June', expenses: this.yesICanJunContents.expenses, revenues: this.yesICanJunContents.revenues},
                            {time_period: 'July', expenses: this.yesICanJulContents.expenses, revenues: this.yesICanJulContents.revenues},
                            {time_period: 'August', expenses: this.yesICanAugContents.expenses, revenues: this.yesICanAugContents.revenues},
                            {time_period: 'September', expenses: this.yesICanSepContents.expenses, revenues: this.yesICanSepContents.revenues},
                            {time_period: 'October', expenses: this.yesICanOctContents.expenses, revenues: this.yesICanOctContents.revenues},
                            {time_period: 'November', expenses: this.yesICanNovContents.expenses, revenues: this.yesICanNovContents.revenues},
                            {time_period: 'December',expenses: this.yesICanDecContents.expenses, revenues: this.yesICanDecContents.revenues }
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
                            {months: 'January', kpi1: this.yesICanJanContents.kpi1, kpi2: this.yesICanJanContents.kpi2, kpi3: this.yesICanJanContents.kpi3, uniqueVol: this.yesICanJanContents.uniqueVolunteers, volHours: this.yesICanJanContents.volunteerHours},
                            {months: 'February', kpi1: this.yesICanFebContents.kpi1, kpi2: this.yesICanFebContents.kpi2, kpi3: this.yesICanFebContents.kpi3, uniqueVol: this.yesICanFebContents.uniqueVolunteers, volHours: this.yesICanFebContents.volunteerHours},
                            {months: 'March', kpi1: this.yesICanMarContents.kpi1, kpi2: this.yesICanMarContents.kpi2, kpi3: this.yesICanMarContents.kpi3, uniqueVol: this.yesICanMarContents.uniqueVolunteers, volHours: this.yesICanMarContents.volunteerHours},
                            {months: 'April', kpi1: this.yesICanAprContents.kpi1, kpi2: this.yesICanAprContents.kpi2, kpi3: this.yesICanAprContents.kpi3, uniqueVol: this.yesICanAprContents.uniqueVolunteers, volHours: this.yesICanAprContents.volunteerHours},
                            {months: 'May', kpi1: this.yesICanMayContents.kpi1, kpi2: this.yesICanMayContents.kpi2, kpi3: this.yesICanMayContents.kpi3, uniqueVol: this.yesICanMayContents.uniqueVolunteers, volHours: this.yesICanMayContents.volunteerHours},
                            {months: 'June', kpi1: this.yesICanJunContents.kpi1, kpi2: this.yesICanJunContents.kpi2, kpi3: this.yesICanJunContents.kpi3, uniqueVol: this.yesICanJunContents.uniqueVolunteers, volHours: this.yesICanJunContents.volunteerHours},
                            {months: 'July', kpi1: this.yesICanJulContents.kpi1, kpi2: this.yesICanJulContents.kpi2, kpi3: this.yesICanJulContents.kpi3, uniqueVol: this.yesICanJulContents.uniqueVolunteers, volHours: this.yesICanJulContents.volunteerHours},
                            {months: 'August', kpi1: this.yesICanAugContents.kpi1, kpi2: this.yesICanAugContents.kpi2, kpi3: this.yesICanAugContents.kpi3, uniqueVol: this.yesICanAugContents.uniqueVolunteers, volHours: this.yesICanAugContents.volunteerHours},
                            {months: 'September', kpi1: this.yesICanSepContents.kpi1, kpi2: this.yesICanSepContents.kpi2, kpi3: this.yesICanSepContents.kpi3, uniqueVol: this.yesICanSepContents.uniqueVolunteers, volHours: this.yesICanSepContents.volunteerHours},
                            {months: 'October', kpi1: this.yesICanOctContents.kpi1, kpi2: this.yesICanOctContents.kpi2, kpi3: this.yesICanOctContents.kpi3, uniqueVol: this.yesICanOctContents.uniqueVolunteers, volHours: this.yesICanOctContents.volunteerHours},
                            {months: 'November', kpi1: this.yesICanNovContents.kpi1, kpi2: this.yesICanNovContents.kpi2, kpi3: this.yesICanNovContents.kpi3, uniqueVol: this.yesICanNovContents.uniqueVolunteers, volHours: this.yesICanNovContents.volunteerHours},
                            {months: 'December',kpi1: this.yesICanDecContents.kpi1, kpi2: this.yesICanDecContents.kpi2, kpi3: this.yesICanDecContents.kpi3, uniqueVol: this.yesICanDecContents.uniqueVolunteers, volHours: this.yesICanDecContents.volunteerHours},
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
                            data: [{value: this.yesICanJanContents.budgetUsage}],
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
                                {value: this.yesICanJanContents.perCategory1, name: this.yesICanJanContents.expenseCategory1},
                                {value: this.yesICanJanContents.perCategory2, name: this.yesICanJanContents.expenseCategory2},
                                {value: this.yesICanJanContents.perCategory3, name: this.yesICanJanContents.expenseCategory3},
                                {value: this.yesICanJanContents.perCategory4, name: this.yesICanJanContents.expenseCategory4},
                                {value: this.yesICanJanContents.perCategory5, name: this.yesICanJanContents.expenseCategory5},
                                {value: this.yesICanJanContents.perCategory6, name: this.yesICanJanContents.expenseCategory6}
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
                            data: [{value: this.yesICanFebContents.budgetUsage}],
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
                                {value: this.yesICanFebContents.perCategory1, name: this.yesICanFebContents.expenseCategory1},
                                {value: this.yesICanFebContents.perCategory2, name: this.yesICanFebContents.expenseCategory2},
                                {value: this.yesICanFebContents.perCategory3, name: this.yesICanFebContents.expenseCategory3},
                                {value: this.yesICanFebContents.perCategory4, name: this.yesICanFebContents.expenseCategory4},
                                {value: this.yesICanFebContents.perCategory5, name: this.yesICanFebContents.expenseCategory5},
                                {value: this.yesICanFebContents.perCategory6, name: this.yesICanFebContents.expenseCategory6}
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
                            data: [{value: this.yesICanMarContents.budgetUsage}],
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
                                {value: this.yesICanMarContents.perCategory1, name: this.yesICanMarContents.expenseCategory1},
                                {value: this.yesICanMarContents.perCategory2, name: this.yesICanMarContents.expenseCategory2},
                                {value: this.yesICanMarContents.perCategory3, name: this.yesICanMarContents.expenseCategory3},
                                {value: this.yesICanMarContents.perCategory4, name: this.yesICanMarContents.expenseCategory4},
                                {value: this.yesICanMarContents.perCategory5, name: this.yesICanMarContents.expenseCategory5},
                                {value: this.yesICanMarContents.perCategory6, name: this.yesICanMarContents.expenseCategory6}
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
                            data: [{value: this.yesICanAprContents.budgetUsage}],
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
                                {value: this.yesICanAprContents.perCategory1, name: this.yesICanAprContents.expenseCategory1},
                                {value: this.yesICanAprContents.perCategory2, name: this.yesICanAprContents.expenseCategory2},
                                {value: this.yesICanAprContents.perCategory3, name: this.yesICanAprContents.expenseCategory3},
                                {value: this.yesICanAprContents.perCategory4, name: this.yesICanAprContents.expenseCategory4},
                                {value: this.yesICanAprContents.perCategory5, name: this.yesICanAprContents.expenseCategory5},
                                {value: this.yesICanAprContents.perCategory6, name: this.yesICanAprContents.expenseCategory6}  
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
                            data: [{value: this.yesICanMayContents.budgetUsage}],
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
                                {value: this.yesICanMayContents.perCategory1, name: this.yesICanMayContents.expenseCategory1},
                                {value: this.yesICanMayContents.perCategory2, name: this.yesICanMayContents.expenseCategory2},
                                {value: this.yesICanMayContents.perCategory3, name: this.yesICanMayContents.expenseCategory3},
                                {value: this.yesICanMayContents.perCategory4, name: this.yesICanMayContents.expenseCategory4},
                                {value: this.yesICanMayContents.perCategory5, name: this.yesICanMayContents.expenseCategory5},
                                {value: this.yesICanMayContents.perCategory6, name: this.yesICanMayContents.expenseCategory6}  
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
                            data: [{value: this.yesICanJunContents.budgetUsage}],
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
                                {value: this.yesICanJunContents.perCategory1, name: this.yesICanJunContents.expenseCategory1},
                                {value: this.yesICanJunContents.perCategory2, name: this.yesICanJunContents.expenseCategory2},
                                {value: this.yesICanJunContents.perCategory3, name: this.yesICanJunContents.expenseCategory3},
                                {value: this.yesICanJunContents.perCategory4, name: this.yesICanJunContents.expenseCategory4},
                                {value: this.yesICanJunContents.perCategory5, name: this.yesICanJunContents.expenseCategory5},
                                {value: this.yesICanJunContents.perCategory6, name: this.yesICanJunContents.expenseCategory6}  
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
                            data: [{value: this.yesICanJulContents.budgetUsage}],
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
                                {value: this.yesICanJulContents.perCategory1, name: this.yesICanJulContents.expenseCategory1},
                                {value: this.yesICanJulContents.perCategory2, name: this.yesICanJulContents.expenseCategory2},
                                {value: this.yesICanJulContents.perCategory3, name: this.yesICanJulContents.expenseCategory3},
                                {value: this.yesICanJulContents.perCategory4, name: this.yesICanJulContents.expenseCategory4},
                                {value: this.yesICanJulContents.perCategory5, name: this.yesICanJulContents.expenseCategory5},
                                {value: this.yesICanJulContents.perCategory6, name: this.yesICanJulContents.expenseCategory6}  
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
                            data: [{value: this.yesICanAugContents.budgetUsage}],
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
                                {value: this.yesICanAugContents.perCategory1, name: this.yesICanAugContents.expenseCategory1},
                                {value: this.yesICanAugContents.perCategory2, name: this.yesICanAugContents.expenseCategory2},
                                {value: this.yesICanAugContents.perCategory3, name: this.yesICanAugContents.expenseCategory3},
                                {value: this.yesICanAugContents.perCategory4, name: this.yesICanAugContents.expenseCategory4},
                                {value: this.yesICanAugContents.perCategory5, name: this.yesICanAugContents.expenseCategory5},
                                {value: this.yesICanAugContents.perCategory6, name: this.yesICanAugContents.expenseCategory6}  
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
                            data: [{value: this.yesICanSepContents.budgetUsage}],
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
                                {value: this.yesICanSepContents.perCategory1, name: this.yesICanSepContents.expenseCategory1},
                                {value: this.yesICanSepContents.perCategory2, name: this.yesICanSepContents.expenseCategory2},
                                {value: this.yesICanSepContents.perCategory3, name: this.yesICanSepContents.expenseCategory3},
                                {value: this.yesICanSepContents.perCategory4, name: this.yesICanSepContents.expenseCategory4},
                                {value: this.yesICanSepContents.perCategory5, name: this.yesICanSepContents.expenseCategory5},
                                {value: this.yesICanSepContents.perCategory6, name: this.yesICanSepContents.expenseCategory6}  
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
                            data: [{value: this.yesICanOctContents.budgetUsage}],
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
                                {value: this.yesICanOctContents.perCategory1, name: this.yesICanOctContents.expenseCategory1},
                                {value: this.yesICanOctContents.perCategory2, name: this.yesICanOctContents.expenseCategory2},
                                {value: this.yesICanOctContents.perCategory3, name: this.yesICanOctContents.expenseCategory3},
                                {value: this.yesICanOctContents.perCategory4, name: this.yesICanOctContents.expenseCategory4},
                                {value: this.yesICanOctContents.perCategory5, name: this.yesICanOctContents.expenseCategory5},
                                {value: this.yesICanOctContents.perCategory6, name: this.yesICanOctContents.expenseCategory6}  
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
                            data: [{value: this.yesICanNovContents.budgetUsage}],
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
                                {value: this.yesICanNovContents.perCategory1, name: this.yesICanNovContents.expenseCategory1},
                                {value: this.yesICanNovContents.perCategory2, name: this.yesICanNovContents.expenseCategory2},
                                {value: this.yesICanNovContents.perCategory3, name: this.yesICanNovContents.expenseCategory3},
                                {value: this.yesICanNovContents.perCategory4, name: this.yesICanNovContents.expenseCategory4},
                                {value: this.yesICanNovContents.perCategory5, name: this.yesICanNovContents.expenseCategory5},
                                {value: this.yesICanNovContents.perCategory6, name: this.yesICanNovContents.expenseCategory6}  
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
                            data: [{value: this.yesICanDecContents.budgetUsage}],
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
                                {value: this.yesICanDecContents.perCategory1, name: this.yesICanDecContents.expenseCategory1},
                                {value: this.yesICanDecContents.perCategory2, name: this.yesICanDecContents.expenseCategory2},
                                {value: this.yesICanDecContents.perCategory3, name: this.yesICanDecContents.expenseCategory3},
                                {value: this.yesICanDecContents.perCategory4, name: this.yesICanDecContents.expenseCategory4},
                                {value: this.yesICanDecContents.perCategory5, name: this.yesICanDecContents.expenseCategory5},
                                {value: this.yesICanDecContents.perCategory6, name: this.yesICanDecContents.expenseCategory6}
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
            var docyesICanJanRef = db.collection("yesICan").doc("january");

            docyesICanJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.yesICanJanContents = doc.data();
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
            var docyesICanFebRef = db.collection("yesICan").doc("february");

            docyesICanFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.yesICanFebContents = doc.data();
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
            var docyesICanMarRef = db.collection("yesICan").doc("march");

            docyesICanMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.yesICanMarContents = doc.data();
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
            var docyesICanAprRef = db.collection("yesICan").doc("april1");

            docyesICanAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.yesICanAprContents = doc.data();
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
            var docyesICanMayRef = db.collection("yesICan").doc("may");

            docyesICanMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.yesICanMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docyesICanJunRef = db.collection("yesICan").doc("june");

            docyesICanJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.yesICanJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docyesICanJulRef = db.collection("yesICan").doc("july");

            docyesICanJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.yesICanJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docyesICanAugRef = db.collection("yesICan").doc("august");

            docyesICanAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.yesICanAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docyesICanSepRef = db.collection("yesICan").doc("september");

            docyesICanSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.yesICanSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docyesICanOctRef = db.collection("yesICan").doc("october");

            docyesICanOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.yesICanOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docyesICanNovRef = db.collection("yesICan").doc("november");

            docyesICanNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.yesICanNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docyesICanDecRef = db.collection("yesICan").doc("december");

            docyesICanDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.yesICanDecContents = doc.data();
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
              return this.yesICanJanContents.expenses = getRealValue(this.yesICanJanContents.perCategory1) + getRealValue(this.yesICanJanContents.perCategory2) + getRealValue(this.yesICanJanContents.perCategory3) + getRealValue(this.yesICanJanContents.perCategory4) + getRealValue(this.yesICanJanContents.perCategory5) + getRealValue(this.yesICanJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.yesICanJanContents.budgetUsage = ((getRealValue(this.yesICanJanContents.expenses) / getRealValue(this.yesICanJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.yesICanFebContents.expenses = getRealValue(this.yesICanFebContents.perCategory1) + getRealValue(this.yesICanFebContents.perCategory2) + getRealValue(this.yesICanFebContents.perCategory3) + getRealValue(this.yesICanFebContents.perCategory4) + getRealValue(this.yesICanFebContents.perCategory5) + getRealValue(this.yesICanFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.yesICanFebContents.budgetUsage = (((getRealValue(this.yesICanFebContents.expenses) + getRealValue(this.yesICanJanContents.expenses)) / getRealValue(this.yesICanFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.yesICanMarContents.expenses = getRealValue(this.yesICanMarContents.perCategory1) + getRealValue(this.yesICanMarContents.perCategory2) + getRealValue(this.yesICanMarContents.perCategory3) + getRealValue(this.yesICanMarContents.perCategory4) + getRealValue(this.yesICanMarContents.perCategory5) + getRealValue(this.yesICanMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.yesICanMarContents.budgetUsage = (((getRealValue(this.yesICanMarContents.expenses) + getRealValue(this.yesICanFebContents.expenses) + getRealValue(this.yesICanJanContents.expenses)) / getRealValue(this.yesICanMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.yesICanAprContents.expenses = getRealValue(this.yesICanAprContents.perCategory1) + getRealValue(this.yesICanAprContents.perCategory2) + getRealValue(this.yesICanAprContents.perCategory3) + getRealValue(this.yesICanAprContents.perCategory4) + getRealValue(this.yesICanAprContents.perCategory5) + getRealValue(this.yesICanAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.yesICanAprContents.budgetUsage = (((getRealValue(this.yesICanAprContents.expenses) + getRealValue(this.yesICanMarContents.expenses) + getRealValue(this.yesICanFebContents.expenses) + getRealValue(this.yesICanJanContents.expenses)) / getRealValue(this.yesICanAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.yesICanMayContents.expenses = getRealValue(this.yesICanMayContents.perCategory1) + getRealValue(this.yesICanMayContents.perCategory2) + getRealValue(this.yesICanMayContents.perCategory3) + getRealValue(this.yesICanMayContents.perCategory4) + getRealValue(this.yesICanMayContents.perCategory5) + getRealValue(this.yesICanMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.yesICanMayContents.budgetUsage = (((getRealValue(this.yesICanMayContents.expenses) + getRealValue(this.yesICanAprContents.expenses) + getRealValue(this.yesICanMarContents.expenses) + getRealValue(this.yesICanFebContents.expenses) + getRealValue(this.yesICanJanContents.expenses)) / getRealValue(this.yesICanMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.yesICanJunContents.expenses = getRealValue(this.yesICanJunContents.perCategory1) + getRealValue(this.yesICanJunContents.perCategory2) + getRealValue(this.yesICanJunContents.perCategory3) + getRealValue(this.yesICanJunContents.perCategory4) + getRealValue(this.yesICanJunContents.perCategory5) + getRealValue(this.yesICanJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.yesICanJunContents.budgetUsage = (((getRealValue(this.yesICanJunContents.expenses) + getRealValue(this.yesICanMayContents.expenses) + getRealValue(this.yesICanAprContents.expenses) + getRealValue(this.yesICanMarContents.expenses) + getRealValue(this.yesICanFebContents.expenses) + getRealValue(this.yesICanJanContents.expenses)) / getRealValue(this.yesICanJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.yesICanJulContents.expenses = getRealValue(this.yesICanJulContents.perCategory1) + getRealValue(this.yesICanJulContents.perCategory2) + getRealValue(this.yesICanJulContents.perCategory3) + getRealValue(this.yesICanJulContents.perCategory4) + getRealValue(this.yesICanJulContents.perCategory5) + getRealValue(this.yesICanJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.yesICanJulContents.budgetUsage = (((getRealValue(this.yesICanJulContents.expenses) + getRealValue(this.yesICanJunContents.expenses) + getRealValue(this.yesICanMayContents.expenses) + getRealValue(this.yesICanAprContents.expenses) + getRealValue(this.yesICanMarContents.expenses) + getRealValue(this.yesICanFebContents.expenses) + getRealValue(this.yesICanJanContents.expenses)) / getRealValue(this.yesICanJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.yesICanAugContents.expenses = getRealValue(this.yesICanAugContents.perCategory1) + getRealValue(this.yesICanAugContents.perCategory2) + getRealValue(this.yesICanAugContents.perCategory3) + getRealValue(this.yesICanAugContents.perCategory4) + getRealValue(this.yesICanAugContents.perCategory5) + getRealValue(this.yesICanAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.yesICanAugContents.budgetUsage = (((getRealValue(this.yesICanAugContents.expenses) + getRealValue(this.yesICanJulContents.expenses) + getRealValue(this.yesICanJunContents.expenses) + getRealValue(this.yesICanMayContents.expenses) + getRealValue(this.yesICanAprContents.expenses) + getRealValue(this.yesICanMarContents.expenses) + getRealValue(this.yesICanFebContents.expenses) + getRealValue(this.yesICanJanContents.expenses)) / getRealValue(this.yesICanAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.yesICanSepContents.expenses = getRealValue(this.yesICanSepContents.perCategory1) + getRealValue(this.yesICanSepContents.perCategory2) + getRealValue(this.yesICanSepContents.perCategory3) + getRealValue(this.yesICanSepContents.perCategory4) + getRealValue(this.yesICanSepContents.perCategory5) + getRealValue(this.yesICanSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.yesICanSepContents.budgetUsage = (((getRealValue(this.yesICanSepContents.expenses) + getRealValue(this.yesICanAugContents.expenses) + getRealValue(this.yesICanJulContents.expenses) + getRealValue(this.yesICanJunContents.expenses) + getRealValue(this.yesICanMayContents.expenses) + getRealValue(this.yesICanAprContents.expenses) + getRealValue(this.yesICanMarContents.expenses) + getRealValue(this.yesICanFebContents.expenses) + getRealValue(this.yesICanJanContents.expenses)) / getRealValue(this.yesICanSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.yesICanOctContents.expenses = getRealValue(this.yesICanOctContents.perCategory1) + getRealValue(this.yesICanOctContents.perCategory2) + getRealValue(this.yesICanOctContents.perCategory3) + getRealValue(this.yesICanOctContents.perCategory4) + getRealValue(this.yesICanOctContents.perCategory5) + getRealValue(this.yesICanOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.yesICanOctContents.budgetUsage = (((getRealValue(this.yesICanOctContents.expenses) + getRealValue(this.yesICanSepContents.expenses) + getRealValue(this.yesICanAugContents.expenses) + getRealValue(this.yesICanJulContents.expenses) + getRealValue(this.yesICanJunContents.expenses) + getRealValue(this.yesICanMayContents.expenses) + getRealValue(this.yesICanAprContents.expenses) + getRealValue(this.yesICanMarContents.expenses) + getRealValue(this.yesICanFebContents.expenses) + getRealValue(this.yesICanJanContents.expenses)) / getRealValue(this.yesICanOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.yesICanNovContents.expenses = getRealValue(this.yesICanNovContents.perCategory1) + getRealValue(this.yesICanNovContents.perCategory2) + getRealValue(this.yesICanNovContents.perCategory3) + getRealValue(this.yesICanNovContents.perCategory4) + getRealValue(this.yesICanNovContents.perCategory5) + getRealValue(this.yesICanNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.yesICanNovContents.budgetUsage = (((getRealValue(this.yesICanNovContents.expenses) + getRealValue(this.yesICanOctContents.expenses) + getRealValue(this.yesICanSepContents.expenses) + getRealValue(this.yesICanAugContents.expenses) + getRealValue(this.yesICanJulContents.expenses) + getRealValue(this.yesICanJunContents.expenses) + getRealValue(this.yesICanMayContents.expenses) + getRealValue(this.yesICanAprContents.expenses) + getRealValue(this.yesICanMarContents.expenses) + getRealValue(this.yesICanFebContents.expenses) + getRealValue(this.yesICanJanContents.expenses)) / getRealValue(this.yesICanNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.yesICanDecContents.expenses = getRealValue(this.yesICanDecContents.perCategory1) + getRealValue(this.yesICanDecContents.perCategory2) + getRealValue(this.yesICanDecContents.perCategory3) + getRealValue(this.yesICanDecContents.perCategory4) + getRealValue(this.yesICanDecContents.perCategory5) + getRealValue(this.yesICanDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.yesICanDecContents.budgetUsage = (((getRealValue(this.yesICanDecContents.expenses) + getRealValue(this.yesICanNovContents.expenses) + getRealValue(this.yesICanOctContents.expenses) + getRealValue(this.yesICanSepContents.expenses) + getRealValue(this.yesICanAugContents.expenses) + getRealValue(this.yesICanJulContents.expenses) + getRealValue(this.yesICanJunContents.expenses) + getRealValue(this.yesICanMayContents.expenses) + getRealValue(this.yesICanAprContents.expenses) + getRealValue(this.yesICanMarContents.expenses) + getRealValue(this.yesICanFebContents.expenses) + getRealValue(this.yesICanJanContents.expenses)) / getRealValue(this.yesICanDecContents.actualBudget))*100).toFixed(2)
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
