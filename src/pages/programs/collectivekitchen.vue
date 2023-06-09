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
                              :color="(collectiveKitchenJanContents.kpi1 == null)?'grey-2':(collectiveKitchenJanContents.kpi1 >= '0' && collectiveKitchenJanContents.kpi1 <= '2.6')?'red':(collectiveKitchenJanContents.kpi1 > '2.6' && collectiveKitchenJanContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi1 > '3.466666667' && collectiveKitchenJanContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi1 >= '4.333333333' && collectiveKitchenJanContents.kpi1 < '5.2')?'green':(collectiveKitchenJanContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi2 == null)?'grey-2':(collectiveKitchenJanContents.kpi2 >= '0' && collectiveKitchenJanContents.kpi2 <= '2.6')?'red':(collectiveKitchenJanContents.kpi2 > '2.6' && collectiveKitchenJanContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi2 > '3.466666667' && collectiveKitchenJanContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi2 >= '4.333333333' && collectiveKitchenJanContents.kpi2 < '5.2')?'green':(collectiveKitchenJanContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi3 == null)?'grey-2':(collectiveKitchenJanContents.kpi3 >= '0' && collectiveKitchenJanContents.kpi3 <= '8')?'red':(collectiveKitchenJanContents.kpi3 > '8' && collectiveKitchenJanContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJanContents.kpi3 > '10.66666667' && collectiveKitchenJanContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJanContents.kpi3 >= '13.33333333' && collectiveKitchenJanContents.kpi3 < '16')?'green':(collectiveKitchenJanContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi4 == null)?'grey-2':(collectiveKitchenJanContents.kpi4 >= '0' && collectiveKitchenJanContents.kpi4 <= '0.6')?'red':(collectiveKitchenJanContents.kpi4 > '0.6' && collectiveKitchenJanContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJanContents.kpi4 > '0.8' && collectiveKitchenJanContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJanContents.kpi4 >= '1' && collectiveKitchenJanContents.kpi4 < '1.2')?'green':(collectiveKitchenJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi4}}
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
                              :color="(collectiveKitchenFebContents.kpi1 == null)?'grey-2':(collectiveKitchenFebContents.kpi1 >= '0' && collectiveKitchenFebContents.kpi1 <= '2.6')?'red':(collectiveKitchenFebContents.kpi1 > '2.6' && collectiveKitchenFebContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi1 > '3.466666667' && collectiveKitchenFebContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi1 >= '4.333333333' && collectiveKitchenFebContents.kpi1 < '5.2')?'green':(collectiveKitchenFebContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi2 == null)?'grey-2':(collectiveKitchenFebContents.kpi2 >= '0' && collectiveKitchenFebContents.kpi2 <= '2.6')?'red':(collectiveKitchenFebContents.kpi2 > '2.6' && collectiveKitchenFebContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi2 > '3.466666667' && collectiveKitchenFebContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi2 >= '4.333333333' && collectiveKitchenFebContents.kpi2 < '5.2')?'green':(collectiveKitchenFebContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi3 == null)?'grey-2':(collectiveKitchenFebContents.kpi3 >= '0' && collectiveKitchenFebContents.kpi3 <= '8')?'red':(collectiveKitchenFebContents.kpi3 > '8' && collectiveKitchenFebContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenFebContents.kpi3 > '10.66666667' && collectiveKitchenFebContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenFebContents.kpi3 >= '13.33333333' && collectiveKitchenFebContents.kpi3 < '16')?'green':(collectiveKitchenFebContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi4 == null)?'grey-2':(collectiveKitchenFebContents.kpi4 >= '0' && collectiveKitchenFebContents.kpi4 <= '0.6')?'red':(collectiveKitchenFebContents.kpi4 > '0.6' && collectiveKitchenFebContents.kpi4 <= '0.8')?'orange':(collectiveKitchenFebContents.kpi4 > '0.8' && collectiveKitchenFebContents.kpi4 < '1')?'yellow-7':(collectiveKitchenFebContents.kpi4 >= '1' && collectiveKitchenFebContents.kpi4 < '1.2')?'green':(collectiveKitchenFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi4}}
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
                              :color="(collectiveKitchenMarContents.kpi1 == null)?'grey-2':(collectiveKitchenMarContents.kpi1 >= '0' && collectiveKitchenMarContents.kpi1 <= '2.6')?'red':(collectiveKitchenMarContents.kpi1 > '2.6' && collectiveKitchenMarContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi1 > '3.466666667' && collectiveKitchenMarContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi1 >= '4.333333333' && collectiveKitchenMarContents.kpi1 < '5.2')?'green':(collectiveKitchenMarContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi2 == null)?'grey-2':(collectiveKitchenMarContents.kpi2 >= '0' && collectiveKitchenMarContents.kpi2 <= '2.6')?'red':(collectiveKitchenMarContents.kpi2 > '2.6' && collectiveKitchenMarContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi2 > '3.466666667' && collectiveKitchenMarContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi2 >= '4.333333333' && collectiveKitchenMarContents.kpi2 < '5.2')?'green':(collectiveKitchenMarContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi3 == null)?'grey-2':(collectiveKitchenMarContents.kpi3 >= '0' && collectiveKitchenMarContents.kpi3 <= '8')?'red':(collectiveKitchenMarContents.kpi3 > '8' && collectiveKitchenMarContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMarContents.kpi3 > '10.66666667' && collectiveKitchenMarContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMarContents.kpi3 >= '13.33333333' && collectiveKitchenMarContents.kpi3 < '16')?'green':(collectiveKitchenMarContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi4 == null)?'grey-2':(collectiveKitchenMarContents.kpi4 >= '0' && collectiveKitchenMarContents.kpi4 <= '0.6')?'red':(collectiveKitchenMarContents.kpi4 > '0.6' && collectiveKitchenMarContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMarContents.kpi4 > '0.8' && collectiveKitchenMarContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMarContents.kpi4 >= '1' && collectiveKitchenMarContents.kpi4 < '1.2')?'green':(collectiveKitchenMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi4}}
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
                              :color="(collectiveKitchenAprContents.kpi1 == null)?'grey-2':(collectiveKitchenAprContents.kpi1 >= '0' && collectiveKitchenAprContents.kpi1 <= '2.6')?'red':(collectiveKitchenAprContents.kpi1 > '2.6' && collectiveKitchenAprContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi1 > '3.466666667' && collectiveKitchenAprContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi1 >= '4.333333333' && collectiveKitchenAprContents.kpi1 < '5.2')?'green':(collectiveKitchenAprContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi2 == null)?'grey-2':(collectiveKitchenAprContents.kpi2 >= '0' && collectiveKitchenAprContents.kpi2 <= '2.6')?'red':(collectiveKitchenAprContents.kpi2 > '2.6' && collectiveKitchenAprContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi2 > '3.466666667' && collectiveKitchenAprContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi2 >= '4.333333333' && collectiveKitchenAprContents.kpi2 < '5.2')?'green':(collectiveKitchenAprContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi3 == null)?'grey-2':(collectiveKitchenAprContents.kpi3 >= '0' && collectiveKitchenAprContents.kpi3 <= '8')?'red':(collectiveKitchenAprContents.kpi3 > '8' && collectiveKitchenAprContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAprContents.kpi3 > '10.66666667' && collectiveKitchenAprContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAprContents.kpi3 >= '13.33333333' && collectiveKitchenAprContents.kpi3 < '16')?'green':(collectiveKitchenAprContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi4 == null)?'grey-2':(collectiveKitchenAprContents.kpi4 >= '0' && collectiveKitchenAprContents.kpi4 <= '0.6')?'red':(collectiveKitchenAprContents.kpi4 > '0.6' && collectiveKitchenAprContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAprContents.kpi4 > '0.8' && collectiveKitchenAprContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAprContents.kpi4 >= '1' && collectiveKitchenAprContents.kpi4 < '1.2')?'green':(collectiveKitchenAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi4}}
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
                              :color="(collectiveKitchenMayContents.kpi1 == null)?'grey-2':(collectiveKitchenMayContents.kpi1 >= '0' && collectiveKitchenMayContents.kpi1 <= '2.6')?'red':(collectiveKitchenMayContents.kpi1 > '2.6' && collectiveKitchenMayContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi1 > '3.466666667' && collectiveKitchenMayContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi1 >= '4.333333333' && collectiveKitchenMayContents.kpi1 < '5.2')?'green':(collectiveKitchenMayContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi2 == null)?'grey-2':(collectiveKitchenMayContents.kpi2 >= '0' && collectiveKitchenMayContents.kpi2 <= '2.6')?'red':(collectiveKitchenMayContents.kpi2 > '2.6' && collectiveKitchenMayContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi2 > '3.466666667' && collectiveKitchenMayContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi2 >= '4.333333333' && collectiveKitchenMayContents.kpi2 < '5.2')?'green':(collectiveKitchenMayContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi3 == null)?'grey-2':(collectiveKitchenMayContents.kpi3 >= '0' && collectiveKitchenMayContents.kpi3 <= '8')?'red':(collectiveKitchenMayContents.kpi3 > '8' && collectiveKitchenMayContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMayContents.kpi3 > '10.66666667' && collectiveKitchenMayContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMayContents.kpi3 >= '13.33333333' && collectiveKitchenMayContents.kpi3 < '16')?'green':(collectiveKitchenMayContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi4 == null)?'grey-2':(collectiveKitchenMayContents.kpi4 >= '0' && collectiveKitchenMayContents.kpi4 <= '0.6')?'red':(collectiveKitchenMayContents.kpi4 > '0.6' && collectiveKitchenMayContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMayContents.kpi4 > '0.8' && collectiveKitchenMayContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMayContents.kpi4 >= '1' && collectiveKitchenMayContents.kpi4 < '1.2')?'green':(collectiveKitchenMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi4}}
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
                              :color="(collectiveKitchenJunContents.kpi1 == null)?'grey-2':(collectiveKitchenJunContents.kpi1 >= '0' && collectiveKitchenJunContents.kpi1 <= '2.6')?'red':(collectiveKitchenJunContents.kpi1 > '2.6' && collectiveKitchenJunContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi1 > '3.466666667' && collectiveKitchenJunContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi1 >= '4.333333333' && collectiveKitchenJunContents.kpi1 < '5.2')?'green':(collectiveKitchenJunContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi2 == null)?'grey-2':(collectiveKitchenJunContents.kpi2 >= '0' && collectiveKitchenJunContents.kpi2 <= '2.6')?'red':(collectiveKitchenJunContents.kpi2 > '2.6' && collectiveKitchenJunContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi2 > '3.466666667' && collectiveKitchenJunContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi2 >= '4.333333333' && collectiveKitchenJunContents.kpi2 < '5.2')?'green':(collectiveKitchenJunContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi3 == null)?'grey-2':(collectiveKitchenJunContents.kpi3 >= '0' && collectiveKitchenJunContents.kpi3 <= '8')?'red':(collectiveKitchenJunContents.kpi3 > '8' && collectiveKitchenJunContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJunContents.kpi3 > '10.66666667' && collectiveKitchenJunContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJunContents.kpi3 >= '13.33333333' && collectiveKitchenJunContents.kpi3 < '16')?'green':(collectiveKitchenJunContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi4 == null)?'grey-2':(collectiveKitchenJunContents.kpi4 >= '0' && collectiveKitchenJunContents.kpi4 <= '0.6')?'red':(collectiveKitchenJunContents.kpi4 > '0.6' && collectiveKitchenJunContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJunContents.kpi4 > '0.8' && collectiveKitchenJunContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJunContents.kpi4 >= '1' && collectiveKitchenJunContents.kpi4 < '1.2')?'green':(collectiveKitchenJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi4}}
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
                              :color="(collectiveKitchenJulContents.kpi1 == null)?'grey-2':(collectiveKitchenJulContents.kpi1 >= '0' && collectiveKitchenJulContents.kpi1 <= '2.6')?'red':(collectiveKitchenJulContents.kpi1 > '2.6' && collectiveKitchenJulContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi1 > '3.466666667' && collectiveKitchenJulContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi1 >= '4.333333333' && collectiveKitchenJulContents.kpi1 < '5.2')?'green':(collectiveKitchenJulContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi2 == null)?'grey-2':(collectiveKitchenJulContents.kpi2 >= '0' && collectiveKitchenJulContents.kpi2 <= '2.6')?'red':(collectiveKitchenJulContents.kpi2 > '2.6' && collectiveKitchenJulContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi2 > '3.466666667' && collectiveKitchenJulContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi2 >= '4.333333333' && collectiveKitchenJulContents.kpi2 < '5.2')?'green':(collectiveKitchenJulContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi3 == null)?'grey-2':(collectiveKitchenJulContents.kpi3 >= '0' && collectiveKitchenJulContents.kpi3 <= '8')?'red':(collectiveKitchenJulContents.kpi3 > '8' && collectiveKitchenJulContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJulContents.kpi3 > '10.66666667' && collectiveKitchenJulContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJulContents.kpi3 >= '13.33333333' && collectiveKitchenJulContents.kpi3 < '16')?'green':(collectiveKitchenJulContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi4 == null)?'grey-2':(collectiveKitchenJulContents.kpi4 >= '0' && collectiveKitchenJulContents.kpi4 <= '0.6')?'red':(collectiveKitchenJulContents.kpi4 > '0.6' && collectiveKitchenJulContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJulContents.kpi4 > '0.8' && collectiveKitchenJulContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJulContents.kpi4 >= '1' && collectiveKitchenJulContents.kpi4 < '1.2')?'green':(collectiveKitchenJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi4}}
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
                              :color="(collectiveKitchenAugContents.kpi1 == null)?'grey-2':(collectiveKitchenAugContents.kpi1 >= '0' && collectiveKitchenAugContents.kpi1 <= '2.6')?'red':(collectiveKitchenAugContents.kpi1 > '2.6' && collectiveKitchenAugContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi1 > '3.466666667' && collectiveKitchenAugContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi1 >= '4.333333333' && collectiveKitchenAugContents.kpi1 < '5.2')?'green':(collectiveKitchenAugContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi2 == null)?'grey-2':(collectiveKitchenAugContents.kpi2 >= '0' && collectiveKitchenAugContents.kpi2 <= '2.6')?'red':(collectiveKitchenAugContents.kpi2 > '2.6' && collectiveKitchenAugContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi2 > '3.466666667' && collectiveKitchenAugContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi2 >= '4.333333333' && collectiveKitchenAugContents.kpi2 < '5.2')?'green':(collectiveKitchenAugContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi3 == null)?'grey-2':(collectiveKitchenAugContents.kpi3 >= '0' && collectiveKitchenAugContents.kpi3 <= '8')?'red':(collectiveKitchenAugContents.kpi3 > '8' && collectiveKitchenAugContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAugContents.kpi3 > '10.66666667' && collectiveKitchenAugContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAugContents.kpi3 >= '13.33333333' && collectiveKitchenAugContents.kpi3 < '16')?'green':(collectiveKitchenAugContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi4 == null)?'grey-2':(collectiveKitchenAugContents.kpi4 >= '0' && collectiveKitchenAugContents.kpi4 <= '0.6')?'red':(collectiveKitchenAugContents.kpi4 > '0.6' && collectiveKitchenAugContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAugContents.kpi4 > '0.8' && collectiveKitchenAugContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAugContents.kpi4 >= '1' && collectiveKitchenAugContents.kpi4 < '1.2')?'green':(collectiveKitchenAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi4}}
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
                              :color="(collectiveKitchenSepContents.kpi1 == null)?'grey-2':(collectiveKitchenSepContents.kpi1 >= '0' && collectiveKitchenSepContents.kpi1 <= '2.6')?'red':(collectiveKitchenSepContents.kpi1 > '2.6' && collectiveKitchenSepContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi1 > '3.466666667' && collectiveKitchenSepContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi1 >= '4.333333333' && collectiveKitchenSepContents.kpi1 < '5.2')?'green':(collectiveKitchenSepContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi2 == null)?'grey-2':(collectiveKitchenSepContents.kpi2 >= '0' && collectiveKitchenSepContents.kpi2 <= '2.6')?'red':(collectiveKitchenSepContents.kpi2 > '2.6' && collectiveKitchenSepContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi2 > '3.466666667' && collectiveKitchenSepContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi2 >= '4.333333333' && collectiveKitchenSepContents.kpi2 < '5.2')?'green':(collectiveKitchenSepContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi3 == null)?'grey-2':(collectiveKitchenSepContents.kpi3 >= '0' && collectiveKitchenSepContents.kpi3 <= '8')?'red':(collectiveKitchenSepContents.kpi3 > '8' && collectiveKitchenSepContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenSepContents.kpi3 > '10.66666667' && collectiveKitchenSepContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenSepContents.kpi3 >= '13.33333333' && collectiveKitchenSepContents.kpi3 < '16')?'green':(collectiveKitchenSepContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi4 == null)?'grey-2':(collectiveKitchenSepContents.kpi4 >= '0' && collectiveKitchenSepContents.kpi4 <= '0.6')?'red':(collectiveKitchenSepContents.kpi4 > '0.6' && collectiveKitchenSepContents.kpi4 <= '0.8')?'orange':(collectiveKitchenSepContents.kpi4 > '0.8' && collectiveKitchenSepContents.kpi4 < '1')?'yellow-7':(collectiveKitchenSepContents.kpi4 >= '1' && collectiveKitchenSepContents.kpi4 < '1.2')?'green':(collectiveKitchenSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi4}}
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
                              :color="(collectiveKitchenOctContents.kpi1 == null)?'grey-2':(collectiveKitchenOctContents.kpi1 >= '0' && collectiveKitchenOctContents.kpi1 <= '2.6')?'red':(collectiveKitchenOctContents.kpi1 > '2.6' && collectiveKitchenOctContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi1 > '3.466666667' && collectiveKitchenOctContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi1 >= '4.333333333' && collectiveKitchenOctContents.kpi1 < '5.2')?'green':(collectiveKitchenOctContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi2 == null)?'grey-2':(collectiveKitchenOctContents.kpi2 >= '0' && collectiveKitchenOctContents.kpi2 <= '2.6')?'red':(collectiveKitchenOctContents.kpi2 > '2.6' && collectiveKitchenOctContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi2 > '3.466666667' && collectiveKitchenOctContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi2 >= '4.333333333' && collectiveKitchenOctContents.kpi2 < '5.2')?'green':(collectiveKitchenOctContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi3 == null)?'grey-2':(collectiveKitchenOctContents.kpi3 >= '0' && collectiveKitchenOctContents.kpi3 <= '8')?'red':(collectiveKitchenOctContents.kpi3 > '8' && collectiveKitchenOctContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenOctContents.kpi3 > '10.66666667' && collectiveKitchenOctContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenOctContents.kpi3 >= '13.33333333' && collectiveKitchenOctContents.kpi3 < '16')?'green':(collectiveKitchenOctContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi4 == null)?'grey-2':(collectiveKitchenOctContents.kpi4 >= '0' && collectiveKitchenOctContents.kpi4 <= '0.6')?'red':(collectiveKitchenOctContents.kpi4 > '0.6' && collectiveKitchenOctContents.kpi4 <= '0.8')?'orange':(collectiveKitchenOctContents.kpi4 > '0.8' && collectiveKitchenOctContents.kpi4 < '1')?'yellow-7':(collectiveKitchenOctContents.kpi4 >= '1' && collectiveKitchenOctContents.kpi4 < '1.2')?'green':(collectiveKitchenOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi4}}
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
                              :color="(collectiveKitchenNovContents.kpi1 == null)?'grey-2':(collectiveKitchenNovContents.kpi1 >= '0' && collectiveKitchenNovContents.kpi1 <= '2.6')?'red':(collectiveKitchenNovContents.kpi1 > '2.6' && collectiveKitchenNovContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi1 > '3.466666667' && collectiveKitchenNovContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi1 >= '4.333333333' && collectiveKitchenNovContents.kpi1 < '5.2')?'green':(collectiveKitchenNovContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi2 == null)?'grey-2':(collectiveKitchenNovContents.kpi2 >= '0' && collectiveKitchenNovContents.kpi2 <= '2.6')?'red':(collectiveKitchenNovContents.kpi2 > '2.6' && collectiveKitchenNovContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi2 > '3.466666667' && collectiveKitchenNovContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi2 >= '4.333333333' && collectiveKitchenNovContents.kpi2 < '5.2')?'green':(collectiveKitchenNovContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi3 == null)?'grey-2':(collectiveKitchenNovContents.kpi3 >= '0' && collectiveKitchenNovContents.kpi3 <= '8')?'red':(collectiveKitchenNovContents.kpi3 > '8' && collectiveKitchenNovContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenNovContents.kpi3 > '10.66666667' && collectiveKitchenNovContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenNovContents.kpi3 >= '13.33333333' && collectiveKitchenNovContents.kpi3 < '16')?'green':(collectiveKitchenNovContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi4 == null)?'grey-2':(collectiveKitchenNovContents.kpi4 >= '0' && collectiveKitchenNovContents.kpi4 <= '0.6')?'red':(collectiveKitchenNovContents.kpi4 > '0.6' && collectiveKitchenNovContents.kpi4 <= '0.8')?'orange':(collectiveKitchenNovContents.kpi4 > '0.8' && collectiveKitchenNovContents.kpi4 < '1')?'yellow-7':(collectiveKitchenNovContents.kpi4 >= '1' && collectiveKitchenNovContents.kpi4 < '1.2')?'green':(collectiveKitchenNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi4}}
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
                              :color="(collectiveKitchenDecContents.kpi1 == null)?'grey-2':(collectiveKitchenDecContents.kpi1 >= '0' && collectiveKitchenDecContents.kpi1 <= '2.6')?'red':(collectiveKitchenDecContents.kpi1 > '2.6' && collectiveKitchenDecContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi1 > '3.466666667' && collectiveKitchenDecContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi1 >= '4.333333333' && collectiveKitchenDecContents.kpi1 < '5.2')?'green':(collectiveKitchenDecContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi2 == null)?'grey-2':(collectiveKitchenDecContents.kpi2 >= '0' && collectiveKitchenDecContents.kpi2 <= '2.6')?'red':(collectiveKitchenDecContents.kpi2 > '2.6' && collectiveKitchenDecContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi2 > '3.466666667' && collectiveKitchenDecContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi2 >= '4.333333333' && collectiveKitchenDecContents.kpi2 < '5.2')?'green':(collectiveKitchenDecContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi3 == null)?'grey-2':(collectiveKitchenDecContents.kpi3 >= '0' && collectiveKitchenDecContents.kpi3 <= '8')?'red':(collectiveKitchenDecContents.kpi3 > '8' && collectiveKitchenDecContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenDecContents.kpi3 > '10.66666667' && collectiveKitchenDecContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenDecContents.kpi3 >= '13.33333333' && collectiveKitchenDecContents.kpi3 < '16')?'green':(collectiveKitchenDecContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi4 == null)?'grey-2':(collectiveKitchenDecContents.kpi4 >= '0' && collectiveKitchenDecContents.kpi4 <= '0.6')?'red':(collectiveKitchenDecContents.kpi4 > '0.6' && collectiveKitchenDecContents.kpi4 <= '0.8')?'orange':(collectiveKitchenDecContents.kpi4 > '0.8' && collectiveKitchenDecContents.kpi4 < '1')?'yellow-7':(collectiveKitchenDecContents.kpi4 >= '1' && collectiveKitchenDecContents.kpi4 < '1.2')?'green':(collectiveKitchenDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi4}}
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
                              :color="(collectiveKitchenJanContents.kpi1 == null)?'grey-2':(collectiveKitchenJanContents.kpi1 >= '0' && collectiveKitchenJanContents.kpi1 <= '2.6')?'red':(collectiveKitchenJanContents.kpi1 > '2.6' && collectiveKitchenJanContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi1 > '3.466666667' && collectiveKitchenJanContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi1 >= '4.333333333' && collectiveKitchenJanContents.kpi1 < '5.2')?'green':(collectiveKitchenJanContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi2 == null)?'grey-2':(collectiveKitchenJanContents.kpi2 >= '0' && collectiveKitchenJanContents.kpi2 <= '2.6')?'red':(collectiveKitchenJanContents.kpi2 > '2.6' && collectiveKitchenJanContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi2 > '3.466666667' && collectiveKitchenJanContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi2 >= '4.333333333' && collectiveKitchenJanContents.kpi2 < '5.2')?'green':(collectiveKitchenJanContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi3 == null)?'grey-2':(collectiveKitchenJanContents.kpi3 >= '0' && collectiveKitchenJanContents.kpi3 <= '8')?'red':(collectiveKitchenJanContents.kpi3 > '8' && collectiveKitchenJanContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJanContents.kpi3 > '10.66666667' && collectiveKitchenJanContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJanContents.kpi3 >= '13.33333333' && collectiveKitchenJanContents.kpi3 < '16')?'green':(collectiveKitchenJanContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi4 == null)?'grey-2':(collectiveKitchenJanContents.kpi4 >= '0' && collectiveKitchenJanContents.kpi4 <= '0.6')?'red':(collectiveKitchenJanContents.kpi4 > '0.6' && collectiveKitchenJanContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJanContents.kpi4 > '0.8' && collectiveKitchenJanContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJanContents.kpi4 >= '1' && collectiveKitchenJanContents.kpi4 < '1.2')?'green':(collectiveKitchenJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi4}}
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
                              :color="(collectiveKitchenFebContents.kpi1 == null)?'grey-2':(collectiveKitchenFebContents.kpi1 >= '0' && collectiveKitchenFebContents.kpi1 <= '2.6')?'red':(collectiveKitchenFebContents.kpi1 > '2.6' && collectiveKitchenFebContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi1 > '3.466666667' && collectiveKitchenFebContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi1 >= '4.333333333' && collectiveKitchenFebContents.kpi1 < '5.2')?'green':(collectiveKitchenFebContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi2 == null)?'grey-2':(collectiveKitchenFebContents.kpi2 >= '0' && collectiveKitchenFebContents.kpi2 <= '2.6')?'red':(collectiveKitchenFebContents.kpi2 > '2.6' && collectiveKitchenFebContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi2 > '3.466666667' && collectiveKitchenFebContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi2 >= '4.333333333' && collectiveKitchenFebContents.kpi2 < '5.2')?'green':(collectiveKitchenFebContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi3 == null)?'grey-2':(collectiveKitchenFebContents.kpi3 >= '0' && collectiveKitchenFebContents.kpi3 <= '8')?'red':(collectiveKitchenFebContents.kpi3 > '8' && collectiveKitchenFebContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenFebContents.kpi3 > '10.66666667' && collectiveKitchenFebContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenFebContents.kpi3 >= '13.33333333' && collectiveKitchenFebContents.kpi3 < '16')?'green':(collectiveKitchenFebContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi4 == null)?'grey-2':(collectiveKitchenFebContents.kpi4 >= '0' && collectiveKitchenFebContents.kpi4 <= '0.6')?'red':(collectiveKitchenFebContents.kpi4 > '0.6' && collectiveKitchenFebContents.kpi4 <= '0.8')?'orange':(collectiveKitchenFebContents.kpi4 > '0.8' && collectiveKitchenFebContents.kpi4 < '1')?'yellow-7':(collectiveKitchenFebContents.kpi4 >= '1' && collectiveKitchenFebContents.kpi4 < '1.2')?'green':(collectiveKitchenFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi4}}
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
                              :color="(collectiveKitchenMarContents.kpi1 == null)?'grey-2':(collectiveKitchenMarContents.kpi1 >= '0' && collectiveKitchenMarContents.kpi1 <= '2.6')?'red':(collectiveKitchenMarContents.kpi1 > '2.6' && collectiveKitchenMarContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi1 > '3.466666667' && collectiveKitchenMarContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi1 >= '4.333333333' && collectiveKitchenMarContents.kpi1 < '5.2')?'green':(collectiveKitchenMarContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi2 == null)?'grey-2':(collectiveKitchenMarContents.kpi2 >= '0' && collectiveKitchenMarContents.kpi2 <= '2.6')?'red':(collectiveKitchenMarContents.kpi2 > '2.6' && collectiveKitchenMarContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi2 > '3.466666667' && collectiveKitchenMarContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi2 >= '4.333333333' && collectiveKitchenMarContents.kpi2 < '5.2')?'green':(collectiveKitchenMarContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi3 == null)?'grey-2':(collectiveKitchenMarContents.kpi3 >= '0' && collectiveKitchenMarContents.kpi3 <= '8')?'red':(collectiveKitchenMarContents.kpi3 > '8' && collectiveKitchenMarContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMarContents.kpi3 > '10.66666667' && collectiveKitchenMarContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMarContents.kpi3 >= '13.33333333' && collectiveKitchenMarContents.kpi3 < '16')?'green':(collectiveKitchenMarContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi4 == null)?'grey-2':(collectiveKitchenMarContents.kpi4 >= '0' && collectiveKitchenMarContents.kpi4 <= '0.6')?'red':(collectiveKitchenMarContents.kpi4 > '0.6' && collectiveKitchenMarContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMarContents.kpi4 > '0.8' && collectiveKitchenMarContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMarContents.kpi4 >= '1' && collectiveKitchenMarContents.kpi4 < '1.2')?'green':(collectiveKitchenMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi4}}
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
                              :color="(collectiveKitchenAprContents.kpi1 == null)?'grey-2':(collectiveKitchenAprContents.kpi1 >= '0' && collectiveKitchenAprContents.kpi1 <= '2.6')?'red':(collectiveKitchenAprContents.kpi1 > '2.6' && collectiveKitchenAprContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi1 > '3.466666667' && collectiveKitchenAprContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi1 >= '4.333333333' && collectiveKitchenAprContents.kpi1 < '5.2')?'green':(collectiveKitchenAprContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi2 == null)?'grey-2':(collectiveKitchenAprContents.kpi2 >= '0' && collectiveKitchenAprContents.kpi2 <= '2.6')?'red':(collectiveKitchenAprContents.kpi2 > '2.6' && collectiveKitchenAprContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi2 > '3.466666667' && collectiveKitchenAprContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi2 >= '4.333333333' && collectiveKitchenAprContents.kpi2 < '5.2')?'green':(collectiveKitchenAprContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi3 == null)?'grey-2':(collectiveKitchenAprContents.kpi3 >= '0' && collectiveKitchenAprContents.kpi3 <= '8')?'red':(collectiveKitchenAprContents.kpi3 > '8' && collectiveKitchenAprContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAprContents.kpi3 > '10.66666667' && collectiveKitchenAprContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAprContents.kpi3 >= '13.33333333' && collectiveKitchenAprContents.kpi3 < '16')?'green':(collectiveKitchenAprContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi4 == null)?'grey-2':(collectiveKitchenAprContents.kpi4 >= '0' && collectiveKitchenAprContents.kpi4 <= '0.6')?'red':(collectiveKitchenAprContents.kpi4 > '0.6' && collectiveKitchenAprContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAprContents.kpi4 > '0.8' && collectiveKitchenAprContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAprContents.kpi4 >= '1' && collectiveKitchenAprContents.kpi4 < '1.2')?'green':(collectiveKitchenAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi4}}
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
                              :color="(collectiveKitchenMayContents.kpi1 == null)?'grey-2':(collectiveKitchenMayContents.kpi1 >= '0' && collectiveKitchenMayContents.kpi1 <= '2.6')?'red':(collectiveKitchenMayContents.kpi1 > '2.6' && collectiveKitchenMayContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi1 > '3.466666667' && collectiveKitchenMayContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi1 >= '4.333333333' && collectiveKitchenMayContents.kpi1 < '5.2')?'green':(collectiveKitchenMayContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi2 == null)?'grey-2':(collectiveKitchenMayContents.kpi2 >= '0' && collectiveKitchenMayContents.kpi2 <= '2.6')?'red':(collectiveKitchenMayContents.kpi2 > '2.6' && collectiveKitchenMayContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi2 > '3.466666667' && collectiveKitchenMayContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi2 >= '4.333333333' && collectiveKitchenMayContents.kpi2 < '5.2')?'green':(collectiveKitchenMayContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi3 == null)?'grey-2':(collectiveKitchenMayContents.kpi3 >= '0' && collectiveKitchenMayContents.kpi3 <= '8')?'red':(collectiveKitchenMayContents.kpi3 > '8' && collectiveKitchenMayContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMayContents.kpi3 > '10.66666667' && collectiveKitchenMayContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMayContents.kpi3 >= '13.33333333' && collectiveKitchenMayContents.kpi3 < '16')?'green':(collectiveKitchenMayContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi4 == null)?'grey-2':(collectiveKitchenMayContents.kpi4 >= '0' && collectiveKitchenMayContents.kpi4 <= '0.6')?'red':(collectiveKitchenMayContents.kpi4 > '0.6' && collectiveKitchenMayContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMayContents.kpi4 > '0.8' && collectiveKitchenMayContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMayContents.kpi4 >= '1' && collectiveKitchenMayContents.kpi4 < '1.2')?'green':(collectiveKitchenMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi4}}
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
                              :color="(collectiveKitchenJunContents.kpi1 == null)?'grey-2':(collectiveKitchenJunContents.kpi1 >= '0' && collectiveKitchenJunContents.kpi1 <= '2.6')?'red':(collectiveKitchenJunContents.kpi1 > '2.6' && collectiveKitchenJunContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi1 > '3.466666667' && collectiveKitchenJunContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi1 >= '4.333333333' && collectiveKitchenJunContents.kpi1 < '5.2')?'green':(collectiveKitchenJunContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi2 == null)?'grey-2':(collectiveKitchenJunContents.kpi2 >= '0' && collectiveKitchenJunContents.kpi2 <= '2.6')?'red':(collectiveKitchenJunContents.kpi2 > '2.6' && collectiveKitchenJunContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi2 > '3.466666667' && collectiveKitchenJunContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi2 >= '4.333333333' && collectiveKitchenJunContents.kpi2 < '5.2')?'green':(collectiveKitchenJunContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi3 == null)?'grey-2':(collectiveKitchenJunContents.kpi3 >= '0' && collectiveKitchenJunContents.kpi3 <= '8')?'red':(collectiveKitchenJunContents.kpi3 > '8' && collectiveKitchenJunContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJunContents.kpi3 > '10.66666667' && collectiveKitchenJunContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJunContents.kpi3 >= '13.33333333' && collectiveKitchenJunContents.kpi3 < '16')?'green':(collectiveKitchenJunContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi4 == null)?'grey-2':(collectiveKitchenJunContents.kpi4 >= '0' && collectiveKitchenJunContents.kpi4 <= '0.6')?'red':(collectiveKitchenJunContents.kpi4 > '0.6' && collectiveKitchenJunContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJunContents.kpi4 > '0.8' && collectiveKitchenJunContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJunContents.kpi4 >= '1' && collectiveKitchenJunContents.kpi4 < '1.2')?'green':(collectiveKitchenJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi4}}
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
                              :color="(collectiveKitchenJulContents.kpi1 == null)?'grey-2':(collectiveKitchenJulContents.kpi1 >= '0' && collectiveKitchenJulContents.kpi1 <= '2.6')?'red':(collectiveKitchenJulContents.kpi1 > '2.6' && collectiveKitchenJulContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi1 > '3.466666667' && collectiveKitchenJulContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi1 >= '4.333333333' && collectiveKitchenJulContents.kpi1 < '5.2')?'green':(collectiveKitchenJulContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi2 == null)?'grey-2':(collectiveKitchenJulContents.kpi2 >= '0' && collectiveKitchenJulContents.kpi2 <= '2.6')?'red':(collectiveKitchenJulContents.kpi2 > '2.6' && collectiveKitchenJulContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi2 > '3.466666667' && collectiveKitchenJulContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi2 >= '4.333333333' && collectiveKitchenJulContents.kpi2 < '5.2')?'green':(collectiveKitchenJulContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi3 == null)?'grey-2':(collectiveKitchenJulContents.kpi3 >= '0' && collectiveKitchenJulContents.kpi3 <= '8')?'red':(collectiveKitchenJulContents.kpi3 > '8' && collectiveKitchenJulContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJulContents.kpi3 > '10.66666667' && collectiveKitchenJulContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJulContents.kpi3 >= '13.33333333' && collectiveKitchenJulContents.kpi3 < '16')?'green':(collectiveKitchenJulContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi4 == null)?'grey-2':(collectiveKitchenJulContents.kpi4 >= '0' && collectiveKitchenJulContents.kpi4 <= '0.6')?'red':(collectiveKitchenJulContents.kpi4 > '0.6' && collectiveKitchenJulContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJulContents.kpi4 > '0.8' && collectiveKitchenJulContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJulContents.kpi4 >= '1' && collectiveKitchenJulContents.kpi4 < '1.2')?'green':(collectiveKitchenJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi4}}
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
                              :color="(collectiveKitchenAugContents.kpi1 == null)?'grey-2':(collectiveKitchenAugContents.kpi1 >= '0' && collectiveKitchenAugContents.kpi1 <= '2.6')?'red':(collectiveKitchenAugContents.kpi1 > '2.6' && collectiveKitchenAugContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi1 > '3.466666667' && collectiveKitchenAugContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi1 >= '4.333333333' && collectiveKitchenAugContents.kpi1 < '5.2')?'green':(collectiveKitchenAugContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi2 == null)?'grey-2':(collectiveKitchenAugContents.kpi2 >= '0' && collectiveKitchenAugContents.kpi2 <= '2.6')?'red':(collectiveKitchenAugContents.kpi2 > '2.6' && collectiveKitchenAugContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi2 > '3.466666667' && collectiveKitchenAugContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi2 >= '4.333333333' && collectiveKitchenAugContents.kpi2 < '5.2')?'green':(collectiveKitchenAugContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi3 == null)?'grey-2':(collectiveKitchenAugContents.kpi3 >= '0' && collectiveKitchenAugContents.kpi3 <= '8')?'red':(collectiveKitchenAugContents.kpi3 > '8' && collectiveKitchenAugContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAugContents.kpi3 > '10.66666667' && collectiveKitchenAugContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAugContents.kpi3 >= '13.33333333' && collectiveKitchenAugContents.kpi3 < '16')?'green':(collectiveKitchenAugContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi4 == null)?'grey-2':(collectiveKitchenAugContents.kpi4 >= '0' && collectiveKitchenAugContents.kpi4 <= '0.6')?'red':(collectiveKitchenAugContents.kpi4 > '0.6' && collectiveKitchenAugContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAugContents.kpi4 > '0.8' && collectiveKitchenAugContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAugContents.kpi4 >= '1' && collectiveKitchenAugContents.kpi4 < '1.2')?'green':(collectiveKitchenAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi4}}
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
                              :color="(collectiveKitchenSepContents.kpi1 == null)?'grey-2':(collectiveKitchenSepContents.kpi1 >= '0' && collectiveKitchenSepContents.kpi1 <= '2.6')?'red':(collectiveKitchenSepContents.kpi1 > '2.6' && collectiveKitchenSepContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi1 > '3.466666667' && collectiveKitchenSepContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi1 >= '4.333333333' && collectiveKitchenSepContents.kpi1 < '5.2')?'green':(collectiveKitchenSepContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi2 == null)?'grey-2':(collectiveKitchenSepContents.kpi2 >= '0' && collectiveKitchenSepContents.kpi2 <= '2.6')?'red':(collectiveKitchenSepContents.kpi2 > '2.6' && collectiveKitchenSepContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi2 > '3.466666667' && collectiveKitchenSepContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi2 >= '4.333333333' && collectiveKitchenSepContents.kpi2 < '5.2')?'green':(collectiveKitchenSepContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi3 == null)?'grey-2':(collectiveKitchenSepContents.kpi3 >= '0' && collectiveKitchenSepContents.kpi3 <= '8')?'red':(collectiveKitchenSepContents.kpi3 > '8' && collectiveKitchenSepContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenSepContents.kpi3 > '10.66666667' && collectiveKitchenSepContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenSepContents.kpi3 >= '13.33333333' && collectiveKitchenSepContents.kpi3 < '16')?'green':(collectiveKitchenSepContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi4 == null)?'grey-2':(collectiveKitchenSepContents.kpi4 >= '0' && collectiveKitchenSepContents.kpi4 <= '0.6')?'red':(collectiveKitchenSepContents.kpi4 > '0.6' && collectiveKitchenSepContents.kpi4 <= '0.8')?'orange':(collectiveKitchenSepContents.kpi4 > '0.8' && collectiveKitchenSepContents.kpi4 < '1')?'yellow-7':(collectiveKitchenSepContents.kpi4 >= '1' && collectiveKitchenSepContents.kpi4 < '1.2')?'green':(collectiveKitchenSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi4}}
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
                              :color="(collectiveKitchenOctContents.kpi1 == null)?'grey-2':(collectiveKitchenOctContents.kpi1 >= '0' && collectiveKitchenOctContents.kpi1 <= '2.6')?'red':(collectiveKitchenOctContents.kpi1 > '2.6' && collectiveKitchenOctContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi1 > '3.466666667' && collectiveKitchenOctContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi1 >= '4.333333333' && collectiveKitchenOctContents.kpi1 < '5.2')?'green':(collectiveKitchenOctContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi2 == null)?'grey-2':(collectiveKitchenOctContents.kpi2 >= '0' && collectiveKitchenOctContents.kpi2 <= '2.6')?'red':(collectiveKitchenOctContents.kpi2 > '2.6' && collectiveKitchenOctContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi2 > '3.466666667' && collectiveKitchenOctContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi2 >= '4.333333333' && collectiveKitchenOctContents.kpi2 < '5.2')?'green':(collectiveKitchenOctContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi3 == null)?'grey-2':(collectiveKitchenOctContents.kpi3 >= '0' && collectiveKitchenOctContents.kpi3 <= '8')?'red':(collectiveKitchenOctContents.kpi3 > '8' && collectiveKitchenOctContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenOctContents.kpi3 > '10.66666667' && collectiveKitchenOctContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenOctContents.kpi3 >= '13.33333333' && collectiveKitchenOctContents.kpi3 < '16')?'green':(collectiveKitchenOctContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi4 == null)?'grey-2':(collectiveKitchenOctContents.kpi4 >= '0' && collectiveKitchenOctContents.kpi4 <= '0.6')?'red':(collectiveKitchenOctContents.kpi4 > '0.6' && collectiveKitchenOctContents.kpi4 <= '0.8')?'orange':(collectiveKitchenOctContents.kpi4 > '0.8' && collectiveKitchenOctContents.kpi4 < '1')?'yellow-7':(collectiveKitchenOctContents.kpi4 >= '1' && collectiveKitchenOctContents.kpi4 < '1.2')?'green':(collectiveKitchenOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi4}}
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
                              :color="(collectiveKitchenNovContents.kpi1 == null)?'grey-2':(collectiveKitchenNovContents.kpi1 >= '0' && collectiveKitchenNovContents.kpi1 <= '2.6')?'red':(collectiveKitchenNovContents.kpi1 > '2.6' && collectiveKitchenNovContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi1 > '3.466666667' && collectiveKitchenNovContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi1 >= '4.333333333' && collectiveKitchenNovContents.kpi1 < '5.2')?'green':(collectiveKitchenNovContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi2 == null)?'grey-2':(collectiveKitchenNovContents.kpi2 >= '0' && collectiveKitchenNovContents.kpi2 <= '2.6')?'red':(collectiveKitchenNovContents.kpi2 > '2.6' && collectiveKitchenNovContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi2 > '3.466666667' && collectiveKitchenNovContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi2 >= '4.333333333' && collectiveKitchenNovContents.kpi2 < '5.2')?'green':(collectiveKitchenNovContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi3 == null)?'grey-2':(collectiveKitchenNovContents.kpi3 >= '0' && collectiveKitchenNovContents.kpi3 <= '8')?'red':(collectiveKitchenNovContents.kpi3 > '8' && collectiveKitchenNovContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenNovContents.kpi3 > '10.66666667' && collectiveKitchenNovContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenNovContents.kpi3 >= '13.33333333' && collectiveKitchenNovContents.kpi3 < '16')?'green':(collectiveKitchenNovContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi4 == null)?'grey-2':(collectiveKitchenNovContents.kpi4 >= '0' && collectiveKitchenNovContents.kpi4 <= '0.6')?'red':(collectiveKitchenNovContents.kpi4 > '0.6' && collectiveKitchenNovContents.kpi4 <= '0.8')?'orange':(collectiveKitchenNovContents.kpi4 > '0.8' && collectiveKitchenNovContents.kpi4 < '1')?'yellow-7':(collectiveKitchenNovContents.kpi4 >= '1' && collectiveKitchenNovContents.kpi4 < '1.2')?'green':(collectiveKitchenNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi4}}
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
                              :color="(collectiveKitchenDecContents.kpi1 == null)?'grey-2':(collectiveKitchenDecContents.kpi1 >= '0' && collectiveKitchenDecContents.kpi1 <= '2.6')?'red':(collectiveKitchenDecContents.kpi1 > '2.6' && collectiveKitchenDecContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi1 > '3.466666667' && collectiveKitchenDecContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi1 >= '4.333333333' && collectiveKitchenDecContents.kpi1 < '5.2')?'green':(collectiveKitchenDecContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi2 == null)?'grey-2':(collectiveKitchenDecContents.kpi2 >= '0' && collectiveKitchenDecContents.kpi2 <= '2.6')?'red':(collectiveKitchenDecContents.kpi2 > '2.6' && collectiveKitchenDecContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi2 > '3.466666667' && collectiveKitchenDecContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi2 >= '4.333333333' && collectiveKitchenDecContents.kpi2 < '5.2')?'green':(collectiveKitchenDecContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi3 == null)?'grey-2':(collectiveKitchenDecContents.kpi3 >= '0' && collectiveKitchenDecContents.kpi3 <= '8')?'red':(collectiveKitchenDecContents.kpi3 > '8' && collectiveKitchenDecContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenDecContents.kpi3 > '10.66666667' && collectiveKitchenDecContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenDecContents.kpi3 >= '13.33333333' && collectiveKitchenDecContents.kpi3 < '16')?'green':(collectiveKitchenDecContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi4 == null)?'grey-2':(collectiveKitchenDecContents.kpi4 >= '0' && collectiveKitchenDecContents.kpi4 <= '0.6')?'red':(collectiveKitchenDecContents.kpi4 > '0.6' && collectiveKitchenDecContents.kpi4 <= '0.8')?'orange':(collectiveKitchenDecContents.kpi4 > '0.8' && collectiveKitchenDecContents.kpi4 < '1')?'yellow-7':(collectiveKitchenDecContents.kpi4 >= '1' && collectiveKitchenDecContents.kpi4 < '1.2')?'green':(collectiveKitchenDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi4}}
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
                              :color="(collectiveKitchenJanContents.kpi1 == null)?'grey-2':(collectiveKitchenJanContents.kpi1 >= '0' && collectiveKitchenJanContents.kpi1 <= '2.6')?'red':(collectiveKitchenJanContents.kpi1 > '2.6' && collectiveKitchenJanContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi1 > '3.466666667' && collectiveKitchenJanContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi1 >= '4.333333333' && collectiveKitchenJanContents.kpi1 < '5.2')?'green':(collectiveKitchenJanContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi2 == null)?'grey-2':(collectiveKitchenJanContents.kpi2 >= '0' && collectiveKitchenJanContents.kpi2 <= '2.6')?'red':(collectiveKitchenJanContents.kpi2 > '2.6' && collectiveKitchenJanContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi2 > '3.466666667' && collectiveKitchenJanContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi2 >= '4.333333333' && collectiveKitchenJanContents.kpi2 < '5.2')?'green':(collectiveKitchenJanContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi3 == null)?'grey-2':(collectiveKitchenJanContents.kpi3 >= '0' && collectiveKitchenJanContents.kpi3 <= '8')?'red':(collectiveKitchenJanContents.kpi3 > '8' && collectiveKitchenJanContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJanContents.kpi3 > '10.66666667' && collectiveKitchenJanContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJanContents.kpi3 >= '13.33333333' && collectiveKitchenJanContents.kpi3 < '16')?'green':(collectiveKitchenJanContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi4 == null)?'grey-2':(collectiveKitchenJanContents.kpi4 >= '0' && collectiveKitchenJanContents.kpi4 <= '0.6')?'red':(collectiveKitchenJanContents.kpi4 > '0.6' && collectiveKitchenJanContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJanContents.kpi4 > '0.8' && collectiveKitchenJanContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJanContents.kpi4 >= '1' && collectiveKitchenJanContents.kpi4 < '1.2')?'green':(collectiveKitchenJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi4}}
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
                              :color="(collectiveKitchenFebContents.kpi1 == null)?'grey-2':(collectiveKitchenFebContents.kpi1 >= '0' && collectiveKitchenFebContents.kpi1 <= '2.6')?'red':(collectiveKitchenFebContents.kpi1 > '2.6' && collectiveKitchenFebContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi1 > '3.466666667' && collectiveKitchenFebContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi1 >= '4.333333333' && collectiveKitchenFebContents.kpi1 < '5.2')?'green':(collectiveKitchenFebContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi2 == null)?'grey-2':(collectiveKitchenFebContents.kpi2 >= '0' && collectiveKitchenFebContents.kpi2 <= '2.6')?'red':(collectiveKitchenFebContents.kpi2 > '2.6' && collectiveKitchenFebContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi2 > '3.466666667' && collectiveKitchenFebContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi2 >= '4.333333333' && collectiveKitchenFebContents.kpi2 < '5.2')?'green':(collectiveKitchenFebContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi3 == null)?'grey-2':(collectiveKitchenFebContents.kpi3 >= '0' && collectiveKitchenFebContents.kpi3 <= '8')?'red':(collectiveKitchenFebContents.kpi3 > '8' && collectiveKitchenFebContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenFebContents.kpi3 > '10.66666667' && collectiveKitchenFebContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenFebContents.kpi3 >= '13.33333333' && collectiveKitchenFebContents.kpi3 < '16')?'green':(collectiveKitchenFebContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi4 == null)?'grey-2':(collectiveKitchenFebContents.kpi4 >= '0' && collectiveKitchenFebContents.kpi4 <= '0.6')?'red':(collectiveKitchenFebContents.kpi4 > '0.6' && collectiveKitchenFebContents.kpi4 <= '0.8')?'orange':(collectiveKitchenFebContents.kpi4 > '0.8' && collectiveKitchenFebContents.kpi4 < '1')?'yellow-7':(collectiveKitchenFebContents.kpi4 >= '1' && collectiveKitchenFebContents.kpi4 < '1.2')?'green':(collectiveKitchenFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi4}}
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
                              :color="(collectiveKitchenMarContents.kpi1 == null)?'grey-2':(collectiveKitchenMarContents.kpi1 >= '0' && collectiveKitchenMarContents.kpi1 <= '2.6')?'red':(collectiveKitchenMarContents.kpi1 > '2.6' && collectiveKitchenMarContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi1 > '3.466666667' && collectiveKitchenMarContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi1 >= '4.333333333' && collectiveKitchenMarContents.kpi1 < '5.2')?'green':(collectiveKitchenMarContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi2 == null)?'grey-2':(collectiveKitchenMarContents.kpi2 >= '0' && collectiveKitchenMarContents.kpi2 <= '2.6')?'red':(collectiveKitchenMarContents.kpi2 > '2.6' && collectiveKitchenMarContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi2 > '3.466666667' && collectiveKitchenMarContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi2 >= '4.333333333' && collectiveKitchenMarContents.kpi2 < '5.2')?'green':(collectiveKitchenMarContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi3 == null)?'grey-2':(collectiveKitchenMarContents.kpi3 >= '0' && collectiveKitchenMarContents.kpi3 <= '8')?'red':(collectiveKitchenMarContents.kpi3 > '8' && collectiveKitchenMarContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMarContents.kpi3 > '10.66666667' && collectiveKitchenMarContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMarContents.kpi3 >= '13.33333333' && collectiveKitchenMarContents.kpi3 < '16')?'green':(collectiveKitchenMarContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi4 == null)?'grey-2':(collectiveKitchenMarContents.kpi4 >= '0' && collectiveKitchenMarContents.kpi4 <= '0.6')?'red':(collectiveKitchenMarContents.kpi4 > '0.6' && collectiveKitchenMarContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMarContents.kpi4 > '0.8' && collectiveKitchenMarContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMarContents.kpi4 >= '1' && collectiveKitchenMarContents.kpi4 < '1.2')?'green':(collectiveKitchenMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi4}}
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
                              :color="(collectiveKitchenAprContents.kpi1 == null)?'grey-2':(collectiveKitchenAprContents.kpi1 >= '0' && collectiveKitchenAprContents.kpi1 <= '2.6')?'red':(collectiveKitchenAprContents.kpi1 > '2.6' && collectiveKitchenAprContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi1 > '3.466666667' && collectiveKitchenAprContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi1 >= '4.333333333' && collectiveKitchenAprContents.kpi1 < '5.2')?'green':(collectiveKitchenAprContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi2 == null)?'grey-2':(collectiveKitchenAprContents.kpi2 >= '0' && collectiveKitchenAprContents.kpi2 <= '2.6')?'red':(collectiveKitchenAprContents.kpi2 > '2.6' && collectiveKitchenAprContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi2 > '3.466666667' && collectiveKitchenAprContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi2 >= '4.333333333' && collectiveKitchenAprContents.kpi2 < '5.2')?'green':(collectiveKitchenAprContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi3 == null)?'grey-2':(collectiveKitchenAprContents.kpi3 >= '0' && collectiveKitchenAprContents.kpi3 <= '8')?'red':(collectiveKitchenAprContents.kpi3 > '8' && collectiveKitchenAprContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAprContents.kpi3 > '10.66666667' && collectiveKitchenAprContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAprContents.kpi3 >= '13.33333333' && collectiveKitchenAprContents.kpi3 < '16')?'green':(collectiveKitchenAprContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi4 == null)?'grey-2':(collectiveKitchenAprContents.kpi4 >= '0' && collectiveKitchenAprContents.kpi4 <= '0.6')?'red':(collectiveKitchenAprContents.kpi4 > '0.6' && collectiveKitchenAprContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAprContents.kpi4 > '0.8' && collectiveKitchenAprContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAprContents.kpi4 >= '1' && collectiveKitchenAprContents.kpi4 < '1.2')?'green':(collectiveKitchenAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi4}}
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
                              :color="(collectiveKitchenMayContents.kpi1 == null)?'grey-2':(collectiveKitchenMayContents.kpi1 >= '0' && collectiveKitchenMayContents.kpi1 <= '2.6')?'red':(collectiveKitchenMayContents.kpi1 > '2.6' && collectiveKitchenMayContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi1 > '3.466666667' && collectiveKitchenMayContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi1 >= '4.333333333' && collectiveKitchenMayContents.kpi1 < '5.2')?'green':(collectiveKitchenMayContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi2 == null)?'grey-2':(collectiveKitchenMayContents.kpi2 >= '0' && collectiveKitchenMayContents.kpi2 <= '2.6')?'red':(collectiveKitchenMayContents.kpi2 > '2.6' && collectiveKitchenMayContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi2 > '3.466666667' && collectiveKitchenMayContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi2 >= '4.333333333' && collectiveKitchenMayContents.kpi2 < '5.2')?'green':(collectiveKitchenMayContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi3 == null)?'grey-2':(collectiveKitchenMayContents.kpi3 >= '0' && collectiveKitchenMayContents.kpi3 <= '8')?'red':(collectiveKitchenMayContents.kpi3 > '8' && collectiveKitchenMayContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMayContents.kpi3 > '10.66666667' && collectiveKitchenMayContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMayContents.kpi3 >= '13.33333333' && collectiveKitchenMayContents.kpi3 < '16')?'green':(collectiveKitchenMayContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi4 == null)?'grey-2':(collectiveKitchenMayContents.kpi4 >= '0' && collectiveKitchenMayContents.kpi4 <= '0.6')?'red':(collectiveKitchenMayContents.kpi4 > '0.6' && collectiveKitchenMayContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMayContents.kpi4 > '0.8' && collectiveKitchenMayContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMayContents.kpi4 >= '1' && collectiveKitchenMayContents.kpi4 < '1.2')?'green':(collectiveKitchenMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi4}}
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
                              :color="(collectiveKitchenJunContents.kpi1 == null)?'grey-2':(collectiveKitchenJunContents.kpi1 >= '0' && collectiveKitchenJunContents.kpi1 <= '2.6')?'red':(collectiveKitchenJunContents.kpi1 > '2.6' && collectiveKitchenJunContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi1 > '3.466666667' && collectiveKitchenJunContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi1 >= '4.333333333' && collectiveKitchenJunContents.kpi1 < '5.2')?'green':(collectiveKitchenJunContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi2 == null)?'grey-2':(collectiveKitchenJunContents.kpi2 >= '0' && collectiveKitchenJunContents.kpi2 <= '2.6')?'red':(collectiveKitchenJunContents.kpi2 > '2.6' && collectiveKitchenJunContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi2 > '3.466666667' && collectiveKitchenJunContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi2 >= '4.333333333' && collectiveKitchenJunContents.kpi2 < '5.2')?'green':(collectiveKitchenJunContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi3 == null)?'grey-2':(collectiveKitchenJunContents.kpi3 >= '0' && collectiveKitchenJunContents.kpi3 <= '8')?'red':(collectiveKitchenJunContents.kpi3 > '8' && collectiveKitchenJunContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJunContents.kpi3 > '10.66666667' && collectiveKitchenJunContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJunContents.kpi3 >= '13.33333333' && collectiveKitchenJunContents.kpi3 < '16')?'green':(collectiveKitchenJunContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi4 == null)?'grey-2':(collectiveKitchenJunContents.kpi4 >= '0' && collectiveKitchenJunContents.kpi4 <= '0.6')?'red':(collectiveKitchenJunContents.kpi4 > '0.6' && collectiveKitchenJunContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJunContents.kpi4 > '0.8' && collectiveKitchenJunContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJunContents.kpi4 >= '1' && collectiveKitchenJunContents.kpi4 < '1.2')?'green':(collectiveKitchenJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi4}}
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
                              :color="(collectiveKitchenJulContents.kpi1 == null)?'grey-2':(collectiveKitchenJulContents.kpi1 >= '0' && collectiveKitchenJulContents.kpi1 <= '2.6')?'red':(collectiveKitchenJulContents.kpi1 > '2.6' && collectiveKitchenJulContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi1 > '3.466666667' && collectiveKitchenJulContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi1 >= '4.333333333' && collectiveKitchenJulContents.kpi1 < '5.2')?'green':(collectiveKitchenJulContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi2 == null)?'grey-2':(collectiveKitchenJulContents.kpi2 >= '0' && collectiveKitchenJulContents.kpi2 <= '2.6')?'red':(collectiveKitchenJulContents.kpi2 > '2.6' && collectiveKitchenJulContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi2 > '3.466666667' && collectiveKitchenJulContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi2 >= '4.333333333' && collectiveKitchenJulContents.kpi2 < '5.2')?'green':(collectiveKitchenJulContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi3 == null)?'grey-2':(collectiveKitchenJulContents.kpi3 >= '0' && collectiveKitchenJulContents.kpi3 <= '8')?'red':(collectiveKitchenJulContents.kpi3 > '8' && collectiveKitchenJulContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJulContents.kpi3 > '10.66666667' && collectiveKitchenJulContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJulContents.kpi3 >= '13.33333333' && collectiveKitchenJulContents.kpi3 < '16')?'green':(collectiveKitchenJulContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi4 == null)?'grey-2':(collectiveKitchenJulContents.kpi4 >= '0' && collectiveKitchenJulContents.kpi4 <= '0.6')?'red':(collectiveKitchenJulContents.kpi4 > '0.6' && collectiveKitchenJulContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJulContents.kpi4 > '0.8' && collectiveKitchenJulContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJulContents.kpi4 >= '1' && collectiveKitchenJulContents.kpi4 < '1.2')?'green':(collectiveKitchenJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi4}}
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
                              :color="(collectiveKitchenAugContents.kpi1 == null)?'grey-2':(collectiveKitchenAugContents.kpi1 >= '0' && collectiveKitchenAugContents.kpi1 <= '2.6')?'red':(collectiveKitchenAugContents.kpi1 > '2.6' && collectiveKitchenAugContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi1 > '3.466666667' && collectiveKitchenAugContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi1 >= '4.333333333' && collectiveKitchenAugContents.kpi1 < '5.2')?'green':(collectiveKitchenAugContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi2 == null)?'grey-2':(collectiveKitchenAugContents.kpi2 >= '0' && collectiveKitchenAugContents.kpi2 <= '2.6')?'red':(collectiveKitchenAugContents.kpi2 > '2.6' && collectiveKitchenAugContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi2 > '3.466666667' && collectiveKitchenAugContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi2 >= '4.333333333' && collectiveKitchenAugContents.kpi2 < '5.2')?'green':(collectiveKitchenAugContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi3 == null)?'grey-2':(collectiveKitchenAugContents.kpi3 >= '0' && collectiveKitchenAugContents.kpi3 <= '8')?'red':(collectiveKitchenAugContents.kpi3 > '8' && collectiveKitchenAugContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAugContents.kpi3 > '10.66666667' && collectiveKitchenAugContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAugContents.kpi3 >= '13.33333333' && collectiveKitchenAugContents.kpi3 < '16')?'green':(collectiveKitchenAugContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi4 == null)?'grey-2':(collectiveKitchenAugContents.kpi4 >= '0' && collectiveKitchenAugContents.kpi4 <= '0.6')?'red':(collectiveKitchenAugContents.kpi4 > '0.6' && collectiveKitchenAugContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAugContents.kpi4 > '0.8' && collectiveKitchenAugContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAugContents.kpi4 >= '1' && collectiveKitchenAugContents.kpi4 < '1.2')?'green':(collectiveKitchenAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi4}}
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
                              :color="(collectiveKitchenSepContents.kpi1 == null)?'grey-2':(collectiveKitchenSepContents.kpi1 >= '0' && collectiveKitchenSepContents.kpi1 <= '2.6')?'red':(collectiveKitchenSepContents.kpi1 > '2.6' && collectiveKitchenSepContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi1 > '3.466666667' && collectiveKitchenSepContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi1 >= '4.333333333' && collectiveKitchenSepContents.kpi1 < '5.2')?'green':(collectiveKitchenSepContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi2 == null)?'grey-2':(collectiveKitchenSepContents.kpi2 >= '0' && collectiveKitchenSepContents.kpi2 <= '2.6')?'red':(collectiveKitchenSepContents.kpi2 > '2.6' && collectiveKitchenSepContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi2 > '3.466666667' && collectiveKitchenSepContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi2 >= '4.333333333' && collectiveKitchenSepContents.kpi2 < '5.2')?'green':(collectiveKitchenSepContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi3 == null)?'grey-2':(collectiveKitchenSepContents.kpi3 >= '0' && collectiveKitchenSepContents.kpi3 <= '8')?'red':(collectiveKitchenSepContents.kpi3 > '8' && collectiveKitchenSepContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenSepContents.kpi3 > '10.66666667' && collectiveKitchenSepContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenSepContents.kpi3 >= '13.33333333' && collectiveKitchenSepContents.kpi3 < '16')?'green':(collectiveKitchenSepContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi4 == null)?'grey-2':(collectiveKitchenSepContents.kpi4 >= '0' && collectiveKitchenSepContents.kpi4 <= '0.6')?'red':(collectiveKitchenSepContents.kpi4 > '0.6' && collectiveKitchenSepContents.kpi4 <= '0.8')?'orange':(collectiveKitchenSepContents.kpi4 > '0.8' && collectiveKitchenSepContents.kpi4 < '1')?'yellow-7':(collectiveKitchenSepContents.kpi4 >= '1' && collectiveKitchenSepContents.kpi4 < '1.2')?'green':(collectiveKitchenSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi4}}
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
                              :color="(collectiveKitchenOctContents.kpi1 == null)?'grey-2':(collectiveKitchenOctContents.kpi1 >= '0' && collectiveKitchenOctContents.kpi1 <= '2.6')?'red':(collectiveKitchenOctContents.kpi1 > '2.6' && collectiveKitchenOctContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi1 > '3.466666667' && collectiveKitchenOctContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi1 >= '4.333333333' && collectiveKitchenOctContents.kpi1 < '5.2')?'green':(collectiveKitchenOctContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi2 == null)?'grey-2':(collectiveKitchenOctContents.kpi2 >= '0' && collectiveKitchenOctContents.kpi2 <= '2.6')?'red':(collectiveKitchenOctContents.kpi2 > '2.6' && collectiveKitchenOctContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi2 > '3.466666667' && collectiveKitchenOctContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi2 >= '4.333333333' && collectiveKitchenOctContents.kpi2 < '5.2')?'green':(collectiveKitchenOctContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi3 == null)?'grey-2':(collectiveKitchenOctContents.kpi3 >= '0' && collectiveKitchenOctContents.kpi3 <= '8')?'red':(collectiveKitchenOctContents.kpi3 > '8' && collectiveKitchenOctContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenOctContents.kpi3 > '10.66666667' && collectiveKitchenOctContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenOctContents.kpi3 >= '13.33333333' && collectiveKitchenOctContents.kpi3 < '16')?'green':(collectiveKitchenOctContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi4 == null)?'grey-2':(collectiveKitchenOctContents.kpi4 >= '0' && collectiveKitchenOctContents.kpi4 <= '0.6')?'red':(collectiveKitchenOctContents.kpi4 > '0.6' && collectiveKitchenOctContents.kpi4 <= '0.8')?'orange':(collectiveKitchenOctContents.kpi4 > '0.8' && collectiveKitchenOctContents.kpi4 < '1')?'yellow-7':(collectiveKitchenOctContents.kpi4 >= '1' && collectiveKitchenOctContents.kpi4 < '1.2')?'green':(collectiveKitchenOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi4}}
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
                              :color="(collectiveKitchenNovContents.kpi1 == null)?'grey-2':(collectiveKitchenNovContents.kpi1 >= '0' && collectiveKitchenNovContents.kpi1 <= '2.6')?'red':(collectiveKitchenNovContents.kpi1 > '2.6' && collectiveKitchenNovContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi1 > '3.466666667' && collectiveKitchenNovContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi1 >= '4.333333333' && collectiveKitchenNovContents.kpi1 < '5.2')?'green':(collectiveKitchenNovContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi2 == null)?'grey-2':(collectiveKitchenNovContents.kpi2 >= '0' && collectiveKitchenNovContents.kpi2 <= '2.6')?'red':(collectiveKitchenNovContents.kpi2 > '2.6' && collectiveKitchenNovContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi2 > '3.466666667' && collectiveKitchenNovContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi2 >= '4.333333333' && collectiveKitchenNovContents.kpi2 < '5.2')?'green':(collectiveKitchenNovContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi3 == null)?'grey-2':(collectiveKitchenNovContents.kpi3 >= '0' && collectiveKitchenNovContents.kpi3 <= '8')?'red':(collectiveKitchenNovContents.kpi3 > '8' && collectiveKitchenNovContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenNovContents.kpi3 > '10.66666667' && collectiveKitchenNovContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenNovContents.kpi3 >= '13.33333333' && collectiveKitchenNovContents.kpi3 < '16')?'green':(collectiveKitchenNovContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi4 == null)?'grey-2':(collectiveKitchenNovContents.kpi4 >= '0' && collectiveKitchenNovContents.kpi4 <= '0.6')?'red':(collectiveKitchenNovContents.kpi4 > '0.6' && collectiveKitchenNovContents.kpi4 <= '0.8')?'orange':(collectiveKitchenNovContents.kpi4 > '0.8' && collectiveKitchenNovContents.kpi4 < '1')?'yellow-7':(collectiveKitchenNovContents.kpi4 >= '1' && collectiveKitchenNovContents.kpi4 < '1.2')?'green':(collectiveKitchenNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi4}}
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
                              :color="(collectiveKitchenDecContents.kpi1 == null)?'grey-2':(collectiveKitchenDecContents.kpi1 >= '0' && collectiveKitchenDecContents.kpi1 <= '2.6')?'red':(collectiveKitchenDecContents.kpi1 > '2.6' && collectiveKitchenDecContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi1 > '3.466666667' && collectiveKitchenDecContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi1 >= '4.333333333' && collectiveKitchenDecContents.kpi1 < '5.2')?'green':(collectiveKitchenDecContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi2 == null)?'grey-2':(collectiveKitchenDecContents.kpi2 >= '0' && collectiveKitchenDecContents.kpi2 <= '2.6')?'red':(collectiveKitchenDecContents.kpi2 > '2.6' && collectiveKitchenDecContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi2 > '3.466666667' && collectiveKitchenDecContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi2 >= '4.333333333' && collectiveKitchenDecContents.kpi2 < '5.2')?'green':(collectiveKitchenDecContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi3 == null)?'grey-2':(collectiveKitchenDecContents.kpi3 >= '0' && collectiveKitchenDecContents.kpi3 <= '8')?'red':(collectiveKitchenDecContents.kpi3 > '8' && collectiveKitchenDecContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenDecContents.kpi3 > '10.66666667' && collectiveKitchenDecContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenDecContents.kpi3 >= '13.33333333' && collectiveKitchenDecContents.kpi3 < '16')?'green':(collectiveKitchenDecContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi4 == null)?'grey-2':(collectiveKitchenDecContents.kpi4 >= '0' && collectiveKitchenDecContents.kpi4 <= '0.6')?'red':(collectiveKitchenDecContents.kpi4 > '0.6' && collectiveKitchenDecContents.kpi4 <= '0.8')?'orange':(collectiveKitchenDecContents.kpi4 > '0.8' && collectiveKitchenDecContents.kpi4 < '1')?'yellow-7':(collectiveKitchenDecContents.kpi4 >= '1' && collectiveKitchenDecContents.kpi4 < '1.2')?'green':(collectiveKitchenDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi4}}
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
                              :color="(collectiveKitchenJanContents.kpi1 == null)?'grey-2':(collectiveKitchenJanContents.kpi1 >= '0' && collectiveKitchenJanContents.kpi1 <= '2.6')?'red':(collectiveKitchenJanContents.kpi1 > '2.6' && collectiveKitchenJanContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi1 > '3.466666667' && collectiveKitchenJanContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi1 >= '4.333333333' && collectiveKitchenJanContents.kpi1 < '5.2')?'green':(collectiveKitchenJanContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi2 == null)?'grey-2':(collectiveKitchenJanContents.kpi2 >= '0' && collectiveKitchenJanContents.kpi2 <= '2.6')?'red':(collectiveKitchenJanContents.kpi2 > '2.6' && collectiveKitchenJanContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi2 > '3.466666667' && collectiveKitchenJanContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi2 >= '4.333333333' && collectiveKitchenJanContents.kpi2 < '5.2')?'green':(collectiveKitchenJanContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi3 == null)?'grey-2':(collectiveKitchenJanContents.kpi3 >= '0' && collectiveKitchenJanContents.kpi3 <= '8')?'red':(collectiveKitchenJanContents.kpi3 > '8' && collectiveKitchenJanContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJanContents.kpi3 > '10.66666667' && collectiveKitchenJanContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJanContents.kpi3 >= '13.33333333' && collectiveKitchenJanContents.kpi3 < '16')?'green':(collectiveKitchenJanContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi4 == null)?'grey-2':(collectiveKitchenJanContents.kpi4 >= '0' && collectiveKitchenJanContents.kpi4 <= '0.6')?'red':(collectiveKitchenJanContents.kpi4 > '0.6' && collectiveKitchenJanContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJanContents.kpi4 > '0.8' && collectiveKitchenJanContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJanContents.kpi4 >= '1' && collectiveKitchenJanContents.kpi4 < '1.2')?'green':(collectiveKitchenJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi4}}
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
                              :color="(collectiveKitchenFebContents.kpi1 == null)?'grey-2':(collectiveKitchenFebContents.kpi1 >= '0' && collectiveKitchenFebContents.kpi1 <= '2.6')?'red':(collectiveKitchenFebContents.kpi1 > '2.6' && collectiveKitchenFebContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi1 > '3.466666667' && collectiveKitchenFebContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi1 >= '4.333333333' && collectiveKitchenFebContents.kpi1 < '5.2')?'green':(collectiveKitchenFebContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi2 == null)?'grey-2':(collectiveKitchenFebContents.kpi2 >= '0' && collectiveKitchenFebContents.kpi2 <= '2.6')?'red':(collectiveKitchenFebContents.kpi2 > '2.6' && collectiveKitchenFebContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi2 > '3.466666667' && collectiveKitchenFebContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi2 >= '4.333333333' && collectiveKitchenFebContents.kpi2 < '5.2')?'green':(collectiveKitchenFebContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi3 == null)?'grey-2':(collectiveKitchenFebContents.kpi3 >= '0' && collectiveKitchenFebContents.kpi3 <= '8')?'red':(collectiveKitchenFebContents.kpi3 > '8' && collectiveKitchenFebContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenFebContents.kpi3 > '10.66666667' && collectiveKitchenFebContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenFebContents.kpi3 >= '13.33333333' && collectiveKitchenFebContents.kpi3 < '16')?'green':(collectiveKitchenFebContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi4 == null)?'grey-2':(collectiveKitchenFebContents.kpi4 >= '0' && collectiveKitchenFebContents.kpi4 <= '0.6')?'red':(collectiveKitchenFebContents.kpi4 > '0.6' && collectiveKitchenFebContents.kpi4 <= '0.8')?'orange':(collectiveKitchenFebContents.kpi4 > '0.8' && collectiveKitchenFebContents.kpi4 < '1')?'yellow-7':(collectiveKitchenFebContents.kpi4 >= '1' && collectiveKitchenFebContents.kpi4 < '1.2')?'green':(collectiveKitchenFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi4}}
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
                              :color="(collectiveKitchenMarContents.kpi1 == null)?'grey-2':(collectiveKitchenMarContents.kpi1 >= '0' && collectiveKitchenMarContents.kpi1 <= '2.6')?'red':(collectiveKitchenMarContents.kpi1 > '2.6' && collectiveKitchenMarContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi1 > '3.466666667' && collectiveKitchenMarContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi1 >= '4.333333333' && collectiveKitchenMarContents.kpi1 < '5.2')?'green':(collectiveKitchenMarContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi2 == null)?'grey-2':(collectiveKitchenMarContents.kpi2 >= '0' && collectiveKitchenMarContents.kpi2 <= '2.6')?'red':(collectiveKitchenMarContents.kpi2 > '2.6' && collectiveKitchenMarContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi2 > '3.466666667' && collectiveKitchenMarContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi2 >= '4.333333333' && collectiveKitchenMarContents.kpi2 < '5.2')?'green':(collectiveKitchenMarContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi3 == null)?'grey-2':(collectiveKitchenMarContents.kpi3 >= '0' && collectiveKitchenMarContents.kpi3 <= '8')?'red':(collectiveKitchenMarContents.kpi3 > '8' && collectiveKitchenMarContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMarContents.kpi3 > '10.66666667' && collectiveKitchenMarContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMarContents.kpi3 >= '13.33333333' && collectiveKitchenMarContents.kpi3 < '16')?'green':(collectiveKitchenMarContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi4 == null)?'grey-2':(collectiveKitchenMarContents.kpi4 >= '0' && collectiveKitchenMarContents.kpi4 <= '0.6')?'red':(collectiveKitchenMarContents.kpi4 > '0.6' && collectiveKitchenMarContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMarContents.kpi4 > '0.8' && collectiveKitchenMarContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMarContents.kpi4 >= '1' && collectiveKitchenMarContents.kpi4 < '1.2')?'green':(collectiveKitchenMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi4}}
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
                              :color="(collectiveKitchenAprContents.kpi1 == null)?'grey-2':(collectiveKitchenAprContents.kpi1 >= '0' && collectiveKitchenAprContents.kpi1 <= '2.6')?'red':(collectiveKitchenAprContents.kpi1 > '2.6' && collectiveKitchenAprContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi1 > '3.466666667' && collectiveKitchenAprContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi1 >= '4.333333333' && collectiveKitchenAprContents.kpi1 < '5.2')?'green':(collectiveKitchenAprContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi2 == null)?'grey-2':(collectiveKitchenAprContents.kpi2 >= '0' && collectiveKitchenAprContents.kpi2 <= '2.6')?'red':(collectiveKitchenAprContents.kpi2 > '2.6' && collectiveKitchenAprContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi2 > '3.466666667' && collectiveKitchenAprContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi2 >= '4.333333333' && collectiveKitchenAprContents.kpi2 < '5.2')?'green':(collectiveKitchenAprContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi3 == null)?'grey-2':(collectiveKitchenAprContents.kpi3 >= '0' && collectiveKitchenAprContents.kpi3 <= '8')?'red':(collectiveKitchenAprContents.kpi3 > '8' && collectiveKitchenAprContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAprContents.kpi3 > '10.66666667' && collectiveKitchenAprContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAprContents.kpi3 >= '13.33333333' && collectiveKitchenAprContents.kpi3 < '16')?'green':(collectiveKitchenAprContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi4 == null)?'grey-2':(collectiveKitchenAprContents.kpi4 >= '0' && collectiveKitchenAprContents.kpi4 <= '0.6')?'red':(collectiveKitchenAprContents.kpi4 > '0.6' && collectiveKitchenAprContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAprContents.kpi4 > '0.8' && collectiveKitchenAprContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAprContents.kpi4 >= '1' && collectiveKitchenAprContents.kpi4 < '1.2')?'green':(collectiveKitchenAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi4}}
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
                              :color="(collectiveKitchenMayContents.kpi1 == null)?'grey-2':(collectiveKitchenMayContents.kpi1 >= '0' && collectiveKitchenMayContents.kpi1 <= '2.6')?'red':(collectiveKitchenMayContents.kpi1 > '2.6' && collectiveKitchenMayContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi1 > '3.466666667' && collectiveKitchenMayContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi1 >= '4.333333333' && collectiveKitchenMayContents.kpi1 < '5.2')?'green':(collectiveKitchenMayContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi2 == null)?'grey-2':(collectiveKitchenMayContents.kpi2 >= '0' && collectiveKitchenMayContents.kpi2 <= '2.6')?'red':(collectiveKitchenMayContents.kpi2 > '2.6' && collectiveKitchenMayContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi2 > '3.466666667' && collectiveKitchenMayContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi2 >= '4.333333333' && collectiveKitchenMayContents.kpi2 < '5.2')?'green':(collectiveKitchenMayContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi3 == null)?'grey-2':(collectiveKitchenMayContents.kpi3 >= '0' && collectiveKitchenMayContents.kpi3 <= '8')?'red':(collectiveKitchenMayContents.kpi3 > '8' && collectiveKitchenMayContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMayContents.kpi3 > '10.66666667' && collectiveKitchenMayContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMayContents.kpi3 >= '13.33333333' && collectiveKitchenMayContents.kpi3 < '16')?'green':(collectiveKitchenMayContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi4 == null)?'grey-2':(collectiveKitchenMayContents.kpi4 >= '0' && collectiveKitchenMayContents.kpi4 <= '0.6')?'red':(collectiveKitchenMayContents.kpi4 > '0.6' && collectiveKitchenMayContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMayContents.kpi4 > '0.8' && collectiveKitchenMayContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMayContents.kpi4 >= '1' && collectiveKitchenMayContents.kpi4 < '1.2')?'green':(collectiveKitchenMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi4}}
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
                              :color="(collectiveKitchenJunContents.kpi1 == null)?'grey-2':(collectiveKitchenJunContents.kpi1 >= '0' && collectiveKitchenJunContents.kpi1 <= '2.6')?'red':(collectiveKitchenJunContents.kpi1 > '2.6' && collectiveKitchenJunContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi1 > '3.466666667' && collectiveKitchenJunContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi1 >= '4.333333333' && collectiveKitchenJunContents.kpi1 < '5.2')?'green':(collectiveKitchenJunContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi2 == null)?'grey-2':(collectiveKitchenJunContents.kpi2 >= '0' && collectiveKitchenJunContents.kpi2 <= '2.6')?'red':(collectiveKitchenJunContents.kpi2 > '2.6' && collectiveKitchenJunContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi2 > '3.466666667' && collectiveKitchenJunContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi2 >= '4.333333333' && collectiveKitchenJunContents.kpi2 < '5.2')?'green':(collectiveKitchenJunContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi3 == null)?'grey-2':(collectiveKitchenJunContents.kpi3 >= '0' && collectiveKitchenJunContents.kpi3 <= '8')?'red':(collectiveKitchenJunContents.kpi3 > '8' && collectiveKitchenJunContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJunContents.kpi3 > '10.66666667' && collectiveKitchenJunContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJunContents.kpi3 >= '13.33333333' && collectiveKitchenJunContents.kpi3 < '16')?'green':(collectiveKitchenJunContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi4 == null)?'grey-2':(collectiveKitchenJunContents.kpi4 >= '0' && collectiveKitchenJunContents.kpi4 <= '0.6')?'red':(collectiveKitchenJunContents.kpi4 > '0.6' && collectiveKitchenJunContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJunContents.kpi4 > '0.8' && collectiveKitchenJunContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJunContents.kpi4 >= '1' && collectiveKitchenJunContents.kpi4 < '1.2')?'green':(collectiveKitchenJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi4}}
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
                              :color="(collectiveKitchenJulContents.kpi1 == null)?'grey-2':(collectiveKitchenJulContents.kpi1 >= '0' && collectiveKitchenJulContents.kpi1 <= '2.6')?'red':(collectiveKitchenJulContents.kpi1 > '2.6' && collectiveKitchenJulContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi1 > '3.466666667' && collectiveKitchenJulContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi1 >= '4.333333333' && collectiveKitchenJulContents.kpi1 < '5.2')?'green':(collectiveKitchenJulContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi2 == null)?'grey-2':(collectiveKitchenJulContents.kpi2 >= '0' && collectiveKitchenJulContents.kpi2 <= '2.6')?'red':(collectiveKitchenJulContents.kpi2 > '2.6' && collectiveKitchenJulContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi2 > '3.466666667' && collectiveKitchenJulContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi2 >= '4.333333333' && collectiveKitchenJulContents.kpi2 < '5.2')?'green':(collectiveKitchenJulContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi3 == null)?'grey-2':(collectiveKitchenJulContents.kpi3 >= '0' && collectiveKitchenJulContents.kpi3 <= '8')?'red':(collectiveKitchenJulContents.kpi3 > '8' && collectiveKitchenJulContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJulContents.kpi3 > '10.66666667' && collectiveKitchenJulContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJulContents.kpi3 >= '13.33333333' && collectiveKitchenJulContents.kpi3 < '16')?'green':(collectiveKitchenJulContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi4 == null)?'grey-2':(collectiveKitchenJulContents.kpi4 >= '0' && collectiveKitchenJulContents.kpi4 <= '0.6')?'red':(collectiveKitchenJulContents.kpi4 > '0.6' && collectiveKitchenJulContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJulContents.kpi4 > '0.8' && collectiveKitchenJulContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJulContents.kpi4 >= '1' && collectiveKitchenJulContents.kpi4 < '1.2')?'green':(collectiveKitchenJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi4}}
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
                              :color="(collectiveKitchenAugContents.kpi1 == null)?'grey-2':(collectiveKitchenAugContents.kpi1 >= '0' && collectiveKitchenAugContents.kpi1 <= '2.6')?'red':(collectiveKitchenAugContents.kpi1 > '2.6' && collectiveKitchenAugContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi1 > '3.466666667' && collectiveKitchenAugContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi1 >= '4.333333333' && collectiveKitchenAugContents.kpi1 < '5.2')?'green':(collectiveKitchenAugContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi2 == null)?'grey-2':(collectiveKitchenAugContents.kpi2 >= '0' && collectiveKitchenAugContents.kpi2 <= '2.6')?'red':(collectiveKitchenAugContents.kpi2 > '2.6' && collectiveKitchenAugContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi2 > '3.466666667' && collectiveKitchenAugContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi2 >= '4.333333333' && collectiveKitchenAugContents.kpi2 < '5.2')?'green':(collectiveKitchenAugContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi3 == null)?'grey-2':(collectiveKitchenAugContents.kpi3 >= '0' && collectiveKitchenAugContents.kpi3 <= '8')?'red':(collectiveKitchenAugContents.kpi3 > '8' && collectiveKitchenAugContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAugContents.kpi3 > '10.66666667' && collectiveKitchenAugContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAugContents.kpi3 >= '13.33333333' && collectiveKitchenAugContents.kpi3 < '16')?'green':(collectiveKitchenAugContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi4 == null)?'grey-2':(collectiveKitchenAugContents.kpi4 >= '0' && collectiveKitchenAugContents.kpi4 <= '0.6')?'red':(collectiveKitchenAugContents.kpi4 > '0.6' && collectiveKitchenAugContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAugContents.kpi4 > '0.8' && collectiveKitchenAugContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAugContents.kpi4 >= '1' && collectiveKitchenAugContents.kpi4 < '1.2')?'green':(collectiveKitchenAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi4}}
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
                              :color="(collectiveKitchenSepContents.kpi1 == null)?'grey-2':(collectiveKitchenSepContents.kpi1 >= '0' && collectiveKitchenSepContents.kpi1 <= '2.6')?'red':(collectiveKitchenSepContents.kpi1 > '2.6' && collectiveKitchenSepContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi1 > '3.466666667' && collectiveKitchenSepContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi1 >= '4.333333333' && collectiveKitchenSepContents.kpi1 < '5.2')?'green':(collectiveKitchenSepContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi2 == null)?'grey-2':(collectiveKitchenSepContents.kpi2 >= '0' && collectiveKitchenSepContents.kpi2 <= '2.6')?'red':(collectiveKitchenSepContents.kpi2 > '2.6' && collectiveKitchenSepContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi2 > '3.466666667' && collectiveKitchenSepContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi2 >= '4.333333333' && collectiveKitchenSepContents.kpi2 < '5.2')?'green':(collectiveKitchenSepContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi3 == null)?'grey-2':(collectiveKitchenSepContents.kpi3 >= '0' && collectiveKitchenSepContents.kpi3 <= '8')?'red':(collectiveKitchenSepContents.kpi3 > '8' && collectiveKitchenSepContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenSepContents.kpi3 > '10.66666667' && collectiveKitchenSepContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenSepContents.kpi3 >= '13.33333333' && collectiveKitchenSepContents.kpi3 < '16')?'green':(collectiveKitchenSepContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi4 == null)?'grey-2':(collectiveKitchenSepContents.kpi4 >= '0' && collectiveKitchenSepContents.kpi4 <= '0.6')?'red':(collectiveKitchenSepContents.kpi4 > '0.6' && collectiveKitchenSepContents.kpi4 <= '0.8')?'orange':(collectiveKitchenSepContents.kpi4 > '0.8' && collectiveKitchenSepContents.kpi4 < '1')?'yellow-7':(collectiveKitchenSepContents.kpi4 >= '1' && collectiveKitchenSepContents.kpi4 < '1.2')?'green':(collectiveKitchenSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi4}}
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
                              :color="(collectiveKitchenOctContents.kpi1 == null)?'grey-2':(collectiveKitchenOctContents.kpi1 >= '0' && collectiveKitchenOctContents.kpi1 <= '2.6')?'red':(collectiveKitchenOctContents.kpi1 > '2.6' && collectiveKitchenOctContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi1 > '3.466666667' && collectiveKitchenOctContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi1 >= '4.333333333' && collectiveKitchenOctContents.kpi1 < '5.2')?'green':(collectiveKitchenOctContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi2 == null)?'grey-2':(collectiveKitchenOctContents.kpi2 >= '0' && collectiveKitchenOctContents.kpi2 <= '2.6')?'red':(collectiveKitchenOctContents.kpi2 > '2.6' && collectiveKitchenOctContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi2 > '3.466666667' && collectiveKitchenOctContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi2 >= '4.333333333' && collectiveKitchenOctContents.kpi2 < '5.2')?'green':(collectiveKitchenOctContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi3 == null)?'grey-2':(collectiveKitchenOctContents.kpi3 >= '0' && collectiveKitchenOctContents.kpi3 <= '8')?'red':(collectiveKitchenOctContents.kpi3 > '8' && collectiveKitchenOctContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenOctContents.kpi3 > '10.66666667' && collectiveKitchenOctContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenOctContents.kpi3 >= '13.33333333' && collectiveKitchenOctContents.kpi3 < '16')?'green':(collectiveKitchenOctContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi4 == null)?'grey-2':(collectiveKitchenOctContents.kpi4 >= '0' && collectiveKitchenOctContents.kpi4 <= '0.6')?'red':(collectiveKitchenOctContents.kpi4 > '0.6' && collectiveKitchenOctContents.kpi4 <= '0.8')?'orange':(collectiveKitchenOctContents.kpi4 > '0.8' && collectiveKitchenOctContents.kpi4 < '1')?'yellow-7':(collectiveKitchenOctContents.kpi4 >= '1' && collectiveKitchenOctContents.kpi4 < '1.2')?'green':(collectiveKitchenOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi4}}
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
                              :color="(collectiveKitchenNovContents.kpi1 == null)?'grey-2':(collectiveKitchenNovContents.kpi1 >= '0' && collectiveKitchenNovContents.kpi1 <= '2.6')?'red':(collectiveKitchenNovContents.kpi1 > '2.6' && collectiveKitchenNovContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi1 > '3.466666667' && collectiveKitchenNovContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi1 >= '4.333333333' && collectiveKitchenNovContents.kpi1 < '5.2')?'green':(collectiveKitchenNovContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi2 == null)?'grey-2':(collectiveKitchenNovContents.kpi2 >= '0' && collectiveKitchenNovContents.kpi2 <= '2.6')?'red':(collectiveKitchenNovContents.kpi2 > '2.6' && collectiveKitchenNovContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi2 > '3.466666667' && collectiveKitchenNovContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi2 >= '4.333333333' && collectiveKitchenNovContents.kpi2 < '5.2')?'green':(collectiveKitchenNovContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi3 == null)?'grey-2':(collectiveKitchenNovContents.kpi3 >= '0' && collectiveKitchenNovContents.kpi3 <= '8')?'red':(collectiveKitchenNovContents.kpi3 > '8' && collectiveKitchenNovContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenNovContents.kpi3 > '10.66666667' && collectiveKitchenNovContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenNovContents.kpi3 >= '13.33333333' && collectiveKitchenNovContents.kpi3 < '16')?'green':(collectiveKitchenNovContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi4 == null)?'grey-2':(collectiveKitchenNovContents.kpi4 >= '0' && collectiveKitchenNovContents.kpi4 <= '0.6')?'red':(collectiveKitchenNovContents.kpi4 > '0.6' && collectiveKitchenNovContents.kpi4 <= '0.8')?'orange':(collectiveKitchenNovContents.kpi4 > '0.8' && collectiveKitchenNovContents.kpi4 < '1')?'yellow-7':(collectiveKitchenNovContents.kpi4 >= '1' && collectiveKitchenNovContents.kpi4 < '1.2')?'green':(collectiveKitchenNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi4}}
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
                              :color="(collectiveKitchenDecContents.kpi1 == null)?'grey-2':(collectiveKitchenDecContents.kpi1 >= '0' && collectiveKitchenDecContents.kpi1 <= '2.6')?'red':(collectiveKitchenDecContents.kpi1 > '2.6' && collectiveKitchenDecContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi1 > '3.466666667' && collectiveKitchenDecContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi1 >= '4.333333333' && collectiveKitchenDecContents.kpi1 < '5.2')?'green':(collectiveKitchenDecContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi2 == null)?'grey-2':(collectiveKitchenDecContents.kpi2 >= '0' && collectiveKitchenDecContents.kpi2 <= '2.6')?'red':(collectiveKitchenDecContents.kpi2 > '2.6' && collectiveKitchenDecContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi2 > '3.466666667' && collectiveKitchenDecContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi2 >= '4.333333333' && collectiveKitchenDecContents.kpi2 < '5.2')?'green':(collectiveKitchenDecContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi3 == null)?'grey-2':(collectiveKitchenDecContents.kpi3 >= '0' && collectiveKitchenDecContents.kpi3 <= '8')?'red':(collectiveKitchenDecContents.kpi3 > '8' && collectiveKitchenDecContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenDecContents.kpi3 > '10.66666667' && collectiveKitchenDecContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenDecContents.kpi3 >= '13.33333333' && collectiveKitchenDecContents.kpi3 < '16')?'green':(collectiveKitchenDecContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi4 == null)?'grey-2':(collectiveKitchenDecContents.kpi4 >= '0' && collectiveKitchenDecContents.kpi4 <= '0.6')?'red':(collectiveKitchenDecContents.kpi4 > '0.6' && collectiveKitchenDecContents.kpi4 <= '0.8')?'orange':(collectiveKitchenDecContents.kpi4 > '0.8' && collectiveKitchenDecContents.kpi4 < '1')?'yellow-7':(collectiveKitchenDecContents.kpi4 >= '1' && collectiveKitchenDecContents.kpi4 < '1.2')?'green':(collectiveKitchenDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi4}}
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
                              :color="(collectiveKitchenJanContents.kpi1 == null)?'grey-2':(collectiveKitchenJanContents.kpi1 >= '0' && collectiveKitchenJanContents.kpi1 <= '2.6')?'red':(collectiveKitchenJanContents.kpi1 > '2.6' && collectiveKitchenJanContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi1 > '3.466666667' && collectiveKitchenJanContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi1 >= '4.333333333' && collectiveKitchenJanContents.kpi1 < '5.2')?'green':(collectiveKitchenJanContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi2 == null)?'grey-2':(collectiveKitchenJanContents.kpi2 >= '0' && collectiveKitchenJanContents.kpi2 <= '2.6')?'red':(collectiveKitchenJanContents.kpi2 > '2.6' && collectiveKitchenJanContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi2 > '3.466666667' && collectiveKitchenJanContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi2 >= '4.333333333' && collectiveKitchenJanContents.kpi2 < '5.2')?'green':(collectiveKitchenJanContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi3 == null)?'grey-2':(collectiveKitchenJanContents.kpi3 >= '0' && collectiveKitchenJanContents.kpi3 <= '8')?'red':(collectiveKitchenJanContents.kpi3 > '8' && collectiveKitchenJanContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJanContents.kpi3 > '10.66666667' && collectiveKitchenJanContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJanContents.kpi3 >= '13.33333333' && collectiveKitchenJanContents.kpi3 < '16')?'green':(collectiveKitchenJanContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi4 == null)?'grey-2':(collectiveKitchenJanContents.kpi4 >= '0' && collectiveKitchenJanContents.kpi4 <= '0.6')?'red':(collectiveKitchenJanContents.kpi4 > '0.6' && collectiveKitchenJanContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJanContents.kpi4 > '0.8' && collectiveKitchenJanContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJanContents.kpi4 >= '1' && collectiveKitchenJanContents.kpi4 < '1.2')?'green':(collectiveKitchenJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi4}}
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
                              :color="(collectiveKitchenFebContents.kpi1 == null)?'grey-2':(collectiveKitchenFebContents.kpi1 >= '0' && collectiveKitchenFebContents.kpi1 <= '2.6')?'red':(collectiveKitchenFebContents.kpi1 > '2.6' && collectiveKitchenFebContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi1 > '3.466666667' && collectiveKitchenFebContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi1 >= '4.333333333' && collectiveKitchenFebContents.kpi1 < '5.2')?'green':(collectiveKitchenFebContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi2 == null)?'grey-2':(collectiveKitchenFebContents.kpi2 >= '0' && collectiveKitchenFebContents.kpi2 <= '2.6')?'red':(collectiveKitchenFebContents.kpi2 > '2.6' && collectiveKitchenFebContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi2 > '3.466666667' && collectiveKitchenFebContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi2 >= '4.333333333' && collectiveKitchenFebContents.kpi2 < '5.2')?'green':(collectiveKitchenFebContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi3 == null)?'grey-2':(collectiveKitchenFebContents.kpi3 >= '0' && collectiveKitchenFebContents.kpi3 <= '8')?'red':(collectiveKitchenFebContents.kpi3 > '8' && collectiveKitchenFebContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenFebContents.kpi3 > '10.66666667' && collectiveKitchenFebContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenFebContents.kpi3 >= '13.33333333' && collectiveKitchenFebContents.kpi3 < '16')?'green':(collectiveKitchenFebContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi4 == null)?'grey-2':(collectiveKitchenFebContents.kpi4 >= '0' && collectiveKitchenFebContents.kpi4 <= '0.6')?'red':(collectiveKitchenFebContents.kpi4 > '0.6' && collectiveKitchenFebContents.kpi4 <= '0.8')?'orange':(collectiveKitchenFebContents.kpi4 > '0.8' && collectiveKitchenFebContents.kpi4 < '1')?'yellow-7':(collectiveKitchenFebContents.kpi4 >= '1' && collectiveKitchenFebContents.kpi4 < '1.2')?'green':(collectiveKitchenFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi4}}
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
                              :color="(collectiveKitchenMarContents.kpi1 == null)?'grey-2':(collectiveKitchenMarContents.kpi1 >= '0' && collectiveKitchenMarContents.kpi1 <= '2.6')?'red':(collectiveKitchenMarContents.kpi1 > '2.6' && collectiveKitchenMarContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi1 > '3.466666667' && collectiveKitchenMarContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi1 >= '4.333333333' && collectiveKitchenMarContents.kpi1 < '5.2')?'green':(collectiveKitchenMarContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi2 == null)?'grey-2':(collectiveKitchenMarContents.kpi2 >= '0' && collectiveKitchenMarContents.kpi2 <= '2.6')?'red':(collectiveKitchenMarContents.kpi2 > '2.6' && collectiveKitchenMarContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi2 > '3.466666667' && collectiveKitchenMarContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi2 >= '4.333333333' && collectiveKitchenMarContents.kpi2 < '5.2')?'green':(collectiveKitchenMarContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi3 == null)?'grey-2':(collectiveKitchenMarContents.kpi3 >= '0' && collectiveKitchenMarContents.kpi3 <= '8')?'red':(collectiveKitchenMarContents.kpi3 > '8' && collectiveKitchenMarContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMarContents.kpi3 > '10.66666667' && collectiveKitchenMarContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMarContents.kpi3 >= '13.33333333' && collectiveKitchenMarContents.kpi3 < '16')?'green':(collectiveKitchenMarContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi4 == null)?'grey-2':(collectiveKitchenMarContents.kpi4 >= '0' && collectiveKitchenMarContents.kpi4 <= '0.6')?'red':(collectiveKitchenMarContents.kpi4 > '0.6' && collectiveKitchenMarContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMarContents.kpi4 > '0.8' && collectiveKitchenMarContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMarContents.kpi4 >= '1' && collectiveKitchenMarContents.kpi4 < '1.2')?'green':(collectiveKitchenMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi4}}
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
                              :color="(collectiveKitchenAprContents.kpi1 == null)?'grey-2':(collectiveKitchenAprContents.kpi1 >= '0' && collectiveKitchenAprContents.kpi1 <= '2.6')?'red':(collectiveKitchenAprContents.kpi1 > '2.6' && collectiveKitchenAprContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi1 > '3.466666667' && collectiveKitchenAprContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi1 >= '4.333333333' && collectiveKitchenAprContents.kpi1 < '5.2')?'green':(collectiveKitchenAprContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi2 == null)?'grey-2':(collectiveKitchenAprContents.kpi2 >= '0' && collectiveKitchenAprContents.kpi2 <= '2.6')?'red':(collectiveKitchenAprContents.kpi2 > '2.6' && collectiveKitchenAprContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi2 > '3.466666667' && collectiveKitchenAprContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi2 >= '4.333333333' && collectiveKitchenAprContents.kpi2 < '5.2')?'green':(collectiveKitchenAprContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi3 == null)?'grey-2':(collectiveKitchenAprContents.kpi3 >= '0' && collectiveKitchenAprContents.kpi3 <= '8')?'red':(collectiveKitchenAprContents.kpi3 > '8' && collectiveKitchenAprContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAprContents.kpi3 > '10.66666667' && collectiveKitchenAprContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAprContents.kpi3 >= '13.33333333' && collectiveKitchenAprContents.kpi3 < '16')?'green':(collectiveKitchenAprContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi4 == null)?'grey-2':(collectiveKitchenAprContents.kpi4 >= '0' && collectiveKitchenAprContents.kpi4 <= '0.6')?'red':(collectiveKitchenAprContents.kpi4 > '0.6' && collectiveKitchenAprContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAprContents.kpi4 > '0.8' && collectiveKitchenAprContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAprContents.kpi4 >= '1' && collectiveKitchenAprContents.kpi4 < '1.2')?'green':(collectiveKitchenAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi4}}
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
                              :color="(collectiveKitchenMayContents.kpi1 == null)?'grey-2':(collectiveKitchenMayContents.kpi1 >= '0' && collectiveKitchenMayContents.kpi1 <= '2.6')?'red':(collectiveKitchenMayContents.kpi1 > '2.6' && collectiveKitchenMayContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi1 > '3.466666667' && collectiveKitchenMayContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi1 >= '4.333333333' && collectiveKitchenMayContents.kpi1 < '5.2')?'green':(collectiveKitchenMayContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi2 == null)?'grey-2':(collectiveKitchenMayContents.kpi2 >= '0' && collectiveKitchenMayContents.kpi2 <= '2.6')?'red':(collectiveKitchenMayContents.kpi2 > '2.6' && collectiveKitchenMayContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi2 > '3.466666667' && collectiveKitchenMayContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi2 >= '4.333333333' && collectiveKitchenMayContents.kpi2 < '5.2')?'green':(collectiveKitchenMayContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi3 == null)?'grey-2':(collectiveKitchenMayContents.kpi3 >= '0' && collectiveKitchenMayContents.kpi3 <= '8')?'red':(collectiveKitchenMayContents.kpi3 > '8' && collectiveKitchenMayContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMayContents.kpi3 > '10.66666667' && collectiveKitchenMayContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMayContents.kpi3 >= '13.33333333' && collectiveKitchenMayContents.kpi3 < '16')?'green':(collectiveKitchenMayContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi4 == null)?'grey-2':(collectiveKitchenMayContents.kpi4 >= '0' && collectiveKitchenMayContents.kpi4 <= '0.6')?'red':(collectiveKitchenMayContents.kpi4 > '0.6' && collectiveKitchenMayContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMayContents.kpi4 > '0.8' && collectiveKitchenMayContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMayContents.kpi4 >= '1' && collectiveKitchenMayContents.kpi4 < '1.2')?'green':(collectiveKitchenMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi4}}
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
                              :color="(collectiveKitchenJunContents.kpi1 == null)?'grey-2':(collectiveKitchenJunContents.kpi1 >= '0' && collectiveKitchenJunContents.kpi1 <= '2.6')?'red':(collectiveKitchenJunContents.kpi1 > '2.6' && collectiveKitchenJunContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi1 > '3.466666667' && collectiveKitchenJunContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi1 >= '4.333333333' && collectiveKitchenJunContents.kpi1 < '5.2')?'green':(collectiveKitchenJunContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi2 == null)?'grey-2':(collectiveKitchenJunContents.kpi2 >= '0' && collectiveKitchenJunContents.kpi2 <= '2.6')?'red':(collectiveKitchenJunContents.kpi2 > '2.6' && collectiveKitchenJunContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi2 > '3.466666667' && collectiveKitchenJunContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi2 >= '4.333333333' && collectiveKitchenJunContents.kpi2 < '5.2')?'green':(collectiveKitchenJunContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi3 == null)?'grey-2':(collectiveKitchenJunContents.kpi3 >= '0' && collectiveKitchenJunContents.kpi3 <= '8')?'red':(collectiveKitchenJunContents.kpi3 > '8' && collectiveKitchenJunContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJunContents.kpi3 > '10.66666667' && collectiveKitchenJunContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJunContents.kpi3 >= '13.33333333' && collectiveKitchenJunContents.kpi3 < '16')?'green':(collectiveKitchenJunContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi4 == null)?'grey-2':(collectiveKitchenJunContents.kpi4 >= '0' && collectiveKitchenJunContents.kpi4 <= '0.6')?'red':(collectiveKitchenJunContents.kpi4 > '0.6' && collectiveKitchenJunContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJunContents.kpi4 > '0.8' && collectiveKitchenJunContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJunContents.kpi4 >= '1' && collectiveKitchenJunContents.kpi4 < '1.2')?'green':(collectiveKitchenJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi4}}
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
                              :color="(collectiveKitchenJulContents.kpi1 == null)?'grey-2':(collectiveKitchenJulContents.kpi1 >= '0' && collectiveKitchenJulContents.kpi1 <= '2.6')?'red':(collectiveKitchenJulContents.kpi1 > '2.6' && collectiveKitchenJulContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi1 > '3.466666667' && collectiveKitchenJulContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi1 >= '4.333333333' && collectiveKitchenJulContents.kpi1 < '5.2')?'green':(collectiveKitchenJulContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi2 == null)?'grey-2':(collectiveKitchenJulContents.kpi2 >= '0' && collectiveKitchenJulContents.kpi2 <= '2.6')?'red':(collectiveKitchenJulContents.kpi2 > '2.6' && collectiveKitchenJulContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi2 > '3.466666667' && collectiveKitchenJulContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi2 >= '4.333333333' && collectiveKitchenJulContents.kpi2 < '5.2')?'green':(collectiveKitchenJulContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi3 == null)?'grey-2':(collectiveKitchenJulContents.kpi3 >= '0' && collectiveKitchenJulContents.kpi3 <= '8')?'red':(collectiveKitchenJulContents.kpi3 > '8' && collectiveKitchenJulContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJulContents.kpi3 > '10.66666667' && collectiveKitchenJulContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJulContents.kpi3 >= '13.33333333' && collectiveKitchenJulContents.kpi3 < '16')?'green':(collectiveKitchenJulContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi4 == null)?'grey-2':(collectiveKitchenJulContents.kpi4 >= '0' && collectiveKitchenJulContents.kpi4 <= '0.6')?'red':(collectiveKitchenJulContents.kpi4 > '0.6' && collectiveKitchenJulContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJulContents.kpi4 > '0.8' && collectiveKitchenJulContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJulContents.kpi4 >= '1' && collectiveKitchenJulContents.kpi4 < '1.2')?'green':(collectiveKitchenJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi4}}
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
                              :color="(collectiveKitchenAugContents.kpi1 == null)?'grey-2':(collectiveKitchenAugContents.kpi1 >= '0' && collectiveKitchenAugContents.kpi1 <= '2.6')?'red':(collectiveKitchenAugContents.kpi1 > '2.6' && collectiveKitchenAugContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi1 > '3.466666667' && collectiveKitchenAugContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi1 >= '4.333333333' && collectiveKitchenAugContents.kpi1 < '5.2')?'green':(collectiveKitchenAugContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi2 == null)?'grey-2':(collectiveKitchenAugContents.kpi2 >= '0' && collectiveKitchenAugContents.kpi2 <= '2.6')?'red':(collectiveKitchenAugContents.kpi2 > '2.6' && collectiveKitchenAugContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi2 > '3.466666667' && collectiveKitchenAugContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi2 >= '4.333333333' && collectiveKitchenAugContents.kpi2 < '5.2')?'green':(collectiveKitchenAugContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi3 == null)?'grey-2':(collectiveKitchenAugContents.kpi3 >= '0' && collectiveKitchenAugContents.kpi3 <= '8')?'red':(collectiveKitchenAugContents.kpi3 > '8' && collectiveKitchenAugContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAugContents.kpi3 > '10.66666667' && collectiveKitchenAugContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAugContents.kpi3 >= '13.33333333' && collectiveKitchenAugContents.kpi3 < '16')?'green':(collectiveKitchenAugContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi4 == null)?'grey-2':(collectiveKitchenAugContents.kpi4 >= '0' && collectiveKitchenAugContents.kpi4 <= '0.6')?'red':(collectiveKitchenAugContents.kpi4 > '0.6' && collectiveKitchenAugContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAugContents.kpi4 > '0.8' && collectiveKitchenAugContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAugContents.kpi4 >= '1' && collectiveKitchenAugContents.kpi4 < '1.2')?'green':(collectiveKitchenAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi4}}
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
                              :color="(collectiveKitchenSepContents.kpi1 == null)?'grey-2':(collectiveKitchenSepContents.kpi1 >= '0' && collectiveKitchenSepContents.kpi1 <= '2.6')?'red':(collectiveKitchenSepContents.kpi1 > '2.6' && collectiveKitchenSepContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi1 > '3.466666667' && collectiveKitchenSepContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi1 >= '4.333333333' && collectiveKitchenSepContents.kpi1 < '5.2')?'green':(collectiveKitchenSepContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi2 == null)?'grey-2':(collectiveKitchenSepContents.kpi2 >= '0' && collectiveKitchenSepContents.kpi2 <= '2.6')?'red':(collectiveKitchenSepContents.kpi2 > '2.6' && collectiveKitchenSepContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi2 > '3.466666667' && collectiveKitchenSepContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi2 >= '4.333333333' && collectiveKitchenSepContents.kpi2 < '5.2')?'green':(collectiveKitchenSepContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi3 == null)?'grey-2':(collectiveKitchenSepContents.kpi3 >= '0' && collectiveKitchenSepContents.kpi3 <= '8')?'red':(collectiveKitchenSepContents.kpi3 > '8' && collectiveKitchenSepContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenSepContents.kpi3 > '10.66666667' && collectiveKitchenSepContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenSepContents.kpi3 >= '13.33333333' && collectiveKitchenSepContents.kpi3 < '16')?'green':(collectiveKitchenSepContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi4 == null)?'grey-2':(collectiveKitchenSepContents.kpi4 >= '0' && collectiveKitchenSepContents.kpi4 <= '0.6')?'red':(collectiveKitchenSepContents.kpi4 > '0.6' && collectiveKitchenSepContents.kpi4 <= '0.8')?'orange':(collectiveKitchenSepContents.kpi4 > '0.8' && collectiveKitchenSepContents.kpi4 < '1')?'yellow-7':(collectiveKitchenSepContents.kpi4 >= '1' && collectiveKitchenSepContents.kpi4 < '1.2')?'green':(collectiveKitchenSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi4}}
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
                              :color="(collectiveKitchenOctContents.kpi1 == null)?'grey-2':(collectiveKitchenOctContents.kpi1 >= '0' && collectiveKitchenOctContents.kpi1 <= '2.6')?'red':(collectiveKitchenOctContents.kpi1 > '2.6' && collectiveKitchenOctContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi1 > '3.466666667' && collectiveKitchenOctContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi1 >= '4.333333333' && collectiveKitchenOctContents.kpi1 < '5.2')?'green':(collectiveKitchenOctContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi2 == null)?'grey-2':(collectiveKitchenOctContents.kpi2 >= '0' && collectiveKitchenOctContents.kpi2 <= '2.6')?'red':(collectiveKitchenOctContents.kpi2 > '2.6' && collectiveKitchenOctContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi2 > '3.466666667' && collectiveKitchenOctContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi2 >= '4.333333333' && collectiveKitchenOctContents.kpi2 < '5.2')?'green':(collectiveKitchenOctContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi3 == null)?'grey-2':(collectiveKitchenOctContents.kpi3 >= '0' && collectiveKitchenOctContents.kpi3 <= '8')?'red':(collectiveKitchenOctContents.kpi3 > '8' && collectiveKitchenOctContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenOctContents.kpi3 > '10.66666667' && collectiveKitchenOctContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenOctContents.kpi3 >= '13.33333333' && collectiveKitchenOctContents.kpi3 < '16')?'green':(collectiveKitchenOctContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi4 == null)?'grey-2':(collectiveKitchenOctContents.kpi4 >= '0' && collectiveKitchenOctContents.kpi4 <= '0.6')?'red':(collectiveKitchenOctContents.kpi4 > '0.6' && collectiveKitchenOctContents.kpi4 <= '0.8')?'orange':(collectiveKitchenOctContents.kpi4 > '0.8' && collectiveKitchenOctContents.kpi4 < '1')?'yellow-7':(collectiveKitchenOctContents.kpi4 >= '1' && collectiveKitchenOctContents.kpi4 < '1.2')?'green':(collectiveKitchenOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi4}}
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
                              :color="(collectiveKitchenNovContents.kpi1 == null)?'grey-2':(collectiveKitchenNovContents.kpi1 >= '0' && collectiveKitchenNovContents.kpi1 <= '2.6')?'red':(collectiveKitchenNovContents.kpi1 > '2.6' && collectiveKitchenNovContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi1 > '3.466666667' && collectiveKitchenNovContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi1 >= '4.333333333' && collectiveKitchenNovContents.kpi1 < '5.2')?'green':(collectiveKitchenNovContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi2 == null)?'grey-2':(collectiveKitchenNovContents.kpi2 >= '0' && collectiveKitchenNovContents.kpi2 <= '2.6')?'red':(collectiveKitchenNovContents.kpi2 > '2.6' && collectiveKitchenNovContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi2 > '3.466666667' && collectiveKitchenNovContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi2 >= '4.333333333' && collectiveKitchenNovContents.kpi2 < '5.2')?'green':(collectiveKitchenNovContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi3 == null)?'grey-2':(collectiveKitchenNovContents.kpi3 >= '0' && collectiveKitchenNovContents.kpi3 <= '8')?'red':(collectiveKitchenNovContents.kpi3 > '8' && collectiveKitchenNovContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenNovContents.kpi3 > '10.66666667' && collectiveKitchenNovContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenNovContents.kpi3 >= '13.33333333' && collectiveKitchenNovContents.kpi3 < '16')?'green':(collectiveKitchenNovContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi4 == null)?'grey-2':(collectiveKitchenNovContents.kpi4 >= '0' && collectiveKitchenNovContents.kpi4 <= '0.6')?'red':(collectiveKitchenNovContents.kpi4 > '0.6' && collectiveKitchenNovContents.kpi4 <= '0.8')?'orange':(collectiveKitchenNovContents.kpi4 > '0.8' && collectiveKitchenNovContents.kpi4 < '1')?'yellow-7':(collectiveKitchenNovContents.kpi4 >= '1' && collectiveKitchenNovContents.kpi4 < '1.2')?'green':(collectiveKitchenNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi4}}
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
                              :color="(collectiveKitchenDecContents.kpi1 == null)?'grey-2':(collectiveKitchenDecContents.kpi1 >= '0' && collectiveKitchenDecContents.kpi1 <= '2.6')?'red':(collectiveKitchenDecContents.kpi1 > '2.6' && collectiveKitchenDecContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi1 > '3.466666667' && collectiveKitchenDecContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi1 >= '4.333333333' && collectiveKitchenDecContents.kpi1 < '5.2')?'green':(collectiveKitchenDecContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi2 == null)?'grey-2':(collectiveKitchenDecContents.kpi2 >= '0' && collectiveKitchenDecContents.kpi2 <= '2.6')?'red':(collectiveKitchenDecContents.kpi2 > '2.6' && collectiveKitchenDecContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi2 > '3.466666667' && collectiveKitchenDecContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi2 >= '4.333333333' && collectiveKitchenDecContents.kpi2 < '5.2')?'green':(collectiveKitchenDecContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi3 == null)?'grey-2':(collectiveKitchenDecContents.kpi3 >= '0' && collectiveKitchenDecContents.kpi3 <= '8')?'red':(collectiveKitchenDecContents.kpi3 > '8' && collectiveKitchenDecContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenDecContents.kpi3 > '10.66666667' && collectiveKitchenDecContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenDecContents.kpi3 >= '13.33333333' && collectiveKitchenDecContents.kpi3 < '16')?'green':(collectiveKitchenDecContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi4 == null)?'grey-2':(collectiveKitchenDecContents.kpi4 >= '0' && collectiveKitchenDecContents.kpi4 <= '0.6')?'red':(collectiveKitchenDecContents.kpi4 > '0.6' && collectiveKitchenDecContents.kpi4 <= '0.8')?'orange':(collectiveKitchenDecContents.kpi4 > '0.8' && collectiveKitchenDecContents.kpi4 < '1')?'yellow-7':(collectiveKitchenDecContents.kpi4 >= '1' && collectiveKitchenDecContents.kpi4 < '1.2')?'green':(collectiveKitchenDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi4}}
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
                              :color="(collectiveKitchenJanContents.kpi1 == null)?'grey-2':(collectiveKitchenJanContents.kpi1 >= '0' && collectiveKitchenJanContents.kpi1 <= '2.6')?'red':(collectiveKitchenJanContents.kpi1 > '2.6' && collectiveKitchenJanContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi1 > '3.466666667' && collectiveKitchenJanContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi1 >= '4.333333333' && collectiveKitchenJanContents.kpi1 < '5.2')?'green':(collectiveKitchenJanContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi2 == null)?'grey-2':(collectiveKitchenJanContents.kpi2 >= '0' && collectiveKitchenJanContents.kpi2 <= '2.6')?'red':(collectiveKitchenJanContents.kpi2 > '2.6' && collectiveKitchenJanContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi2 > '3.466666667' && collectiveKitchenJanContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi2 >= '4.333333333' && collectiveKitchenJanContents.kpi2 < '5.2')?'green':(collectiveKitchenJanContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi3 == null)?'grey-2':(collectiveKitchenJanContents.kpi3 >= '0' && collectiveKitchenJanContents.kpi3 <= '8')?'red':(collectiveKitchenJanContents.kpi3 > '8' && collectiveKitchenJanContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJanContents.kpi3 > '10.66666667' && collectiveKitchenJanContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJanContents.kpi3 >= '13.33333333' && collectiveKitchenJanContents.kpi3 < '16')?'green':(collectiveKitchenJanContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi4 == null)?'grey-2':(collectiveKitchenJanContents.kpi4 >= '0' && collectiveKitchenJanContents.kpi4 <= '0.6')?'red':(collectiveKitchenJanContents.kpi4 > '0.6' && collectiveKitchenJanContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJanContents.kpi4 > '0.8' && collectiveKitchenJanContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJanContents.kpi4 >= '1' && collectiveKitchenJanContents.kpi4 < '1.2')?'green':(collectiveKitchenJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi4}}
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
                              :color="(collectiveKitchenFebContents.kpi1 == null)?'grey-2':(collectiveKitchenFebContents.kpi1 >= '0' && collectiveKitchenFebContents.kpi1 <= '2.6')?'red':(collectiveKitchenFebContents.kpi1 > '2.6' && collectiveKitchenFebContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi1 > '3.466666667' && collectiveKitchenFebContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi1 >= '4.333333333' && collectiveKitchenFebContents.kpi1 < '5.2')?'green':(collectiveKitchenFebContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi2 == null)?'grey-2':(collectiveKitchenFebContents.kpi2 >= '0' && collectiveKitchenFebContents.kpi2 <= '2.6')?'red':(collectiveKitchenFebContents.kpi2 > '2.6' && collectiveKitchenFebContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi2 > '3.466666667' && collectiveKitchenFebContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi2 >= '4.333333333' && collectiveKitchenFebContents.kpi2 < '5.2')?'green':(collectiveKitchenFebContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi3 == null)?'grey-2':(collectiveKitchenFebContents.kpi3 >= '0' && collectiveKitchenFebContents.kpi3 <= '8')?'red':(collectiveKitchenFebContents.kpi3 > '8' && collectiveKitchenFebContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenFebContents.kpi3 > '10.66666667' && collectiveKitchenFebContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenFebContents.kpi3 >= '13.33333333' && collectiveKitchenFebContents.kpi3 < '16')?'green':(collectiveKitchenFebContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi4 == null)?'grey-2':(collectiveKitchenFebContents.kpi4 >= '0' && collectiveKitchenFebContents.kpi4 <= '0.6')?'red':(collectiveKitchenFebContents.kpi4 > '0.6' && collectiveKitchenFebContents.kpi4 <= '0.8')?'orange':(collectiveKitchenFebContents.kpi4 > '0.8' && collectiveKitchenFebContents.kpi4 < '1')?'yellow-7':(collectiveKitchenFebContents.kpi4 >= '1' && collectiveKitchenFebContents.kpi4 < '1.2')?'green':(collectiveKitchenFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi4}}
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
                              :color="(collectiveKitchenMarContents.kpi1 == null)?'grey-2':(collectiveKitchenMarContents.kpi1 >= '0' && collectiveKitchenMarContents.kpi1 <= '2.6')?'red':(collectiveKitchenMarContents.kpi1 > '2.6' && collectiveKitchenMarContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi1 > '3.466666667' && collectiveKitchenMarContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi1 >= '4.333333333' && collectiveKitchenMarContents.kpi1 < '5.2')?'green':(collectiveKitchenMarContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi2 == null)?'grey-2':(collectiveKitchenMarContents.kpi2 >= '0' && collectiveKitchenMarContents.kpi2 <= '2.6')?'red':(collectiveKitchenMarContents.kpi2 > '2.6' && collectiveKitchenMarContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi2 > '3.466666667' && collectiveKitchenMarContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi2 >= '4.333333333' && collectiveKitchenMarContents.kpi2 < '5.2')?'green':(collectiveKitchenMarContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi3 == null)?'grey-2':(collectiveKitchenMarContents.kpi3 >= '0' && collectiveKitchenMarContents.kpi3 <= '8')?'red':(collectiveKitchenMarContents.kpi3 > '8' && collectiveKitchenMarContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMarContents.kpi3 > '10.66666667' && collectiveKitchenMarContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMarContents.kpi3 >= '13.33333333' && collectiveKitchenMarContents.kpi3 < '16')?'green':(collectiveKitchenMarContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi4 == null)?'grey-2':(collectiveKitchenMarContents.kpi4 >= '0' && collectiveKitchenMarContents.kpi4 <= '0.6')?'red':(collectiveKitchenMarContents.kpi4 > '0.6' && collectiveKitchenMarContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMarContents.kpi4 > '0.8' && collectiveKitchenMarContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMarContents.kpi4 >= '1' && collectiveKitchenMarContents.kpi4 < '1.2')?'green':(collectiveKitchenMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi4}}
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
                              :color="(collectiveKitchenAprContents.kpi1 == null)?'grey-2':(collectiveKitchenAprContents.kpi1 >= '0' && collectiveKitchenAprContents.kpi1 <= '2.6')?'red':(collectiveKitchenAprContents.kpi1 > '2.6' && collectiveKitchenAprContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi1 > '3.466666667' && collectiveKitchenAprContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi1 >= '4.333333333' && collectiveKitchenAprContents.kpi1 < '5.2')?'green':(collectiveKitchenAprContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi2 == null)?'grey-2':(collectiveKitchenAprContents.kpi2 >= '0' && collectiveKitchenAprContents.kpi2 <= '2.6')?'red':(collectiveKitchenAprContents.kpi2 > '2.6' && collectiveKitchenAprContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi2 > '3.466666667' && collectiveKitchenAprContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi2 >= '4.333333333' && collectiveKitchenAprContents.kpi2 < '5.2')?'green':(collectiveKitchenAprContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi3 == null)?'grey-2':(collectiveKitchenAprContents.kpi3 >= '0' && collectiveKitchenAprContents.kpi3 <= '8')?'red':(collectiveKitchenAprContents.kpi3 > '8' && collectiveKitchenAprContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAprContents.kpi3 > '10.66666667' && collectiveKitchenAprContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAprContents.kpi3 >= '13.33333333' && collectiveKitchenAprContents.kpi3 < '16')?'green':(collectiveKitchenAprContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi4 == null)?'grey-2':(collectiveKitchenAprContents.kpi4 >= '0' && collectiveKitchenAprContents.kpi4 <= '0.6')?'red':(collectiveKitchenAprContents.kpi4 > '0.6' && collectiveKitchenAprContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAprContents.kpi4 > '0.8' && collectiveKitchenAprContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAprContents.kpi4 >= '1' && collectiveKitchenAprContents.kpi4 < '1.2')?'green':(collectiveKitchenAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi4}}
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
                              :color="(collectiveKitchenMayContents.kpi1 == null)?'grey-2':(collectiveKitchenMayContents.kpi1 >= '0' && collectiveKitchenMayContents.kpi1 <= '2.6')?'red':(collectiveKitchenMayContents.kpi1 > '2.6' && collectiveKitchenMayContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi1 > '3.466666667' && collectiveKitchenMayContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi1 >= '4.333333333' && collectiveKitchenMayContents.kpi1 < '5.2')?'green':(collectiveKitchenMayContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi2 == null)?'grey-2':(collectiveKitchenMayContents.kpi2 >= '0' && collectiveKitchenMayContents.kpi2 <= '2.6')?'red':(collectiveKitchenMayContents.kpi2 > '2.6' && collectiveKitchenMayContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi2 > '3.466666667' && collectiveKitchenMayContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi2 >= '4.333333333' && collectiveKitchenMayContents.kpi2 < '5.2')?'green':(collectiveKitchenMayContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi3 == null)?'grey-2':(collectiveKitchenMayContents.kpi3 >= '0' && collectiveKitchenMayContents.kpi3 <= '8')?'red':(collectiveKitchenMayContents.kpi3 > '8' && collectiveKitchenMayContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMayContents.kpi3 > '10.66666667' && collectiveKitchenMayContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMayContents.kpi3 >= '13.33333333' && collectiveKitchenMayContents.kpi3 < '16')?'green':(collectiveKitchenMayContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi4 == null)?'grey-2':(collectiveKitchenMayContents.kpi4 >= '0' && collectiveKitchenMayContents.kpi4 <= '0.6')?'red':(collectiveKitchenMayContents.kpi4 > '0.6' && collectiveKitchenMayContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMayContents.kpi4 > '0.8' && collectiveKitchenMayContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMayContents.kpi4 >= '1' && collectiveKitchenMayContents.kpi4 < '1.2')?'green':(collectiveKitchenMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi4}}
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
                              :color="(collectiveKitchenJunContents.kpi1 == null)?'grey-2':(collectiveKitchenJunContents.kpi1 >= '0' && collectiveKitchenJunContents.kpi1 <= '2.6')?'red':(collectiveKitchenJunContents.kpi1 > '2.6' && collectiveKitchenJunContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi1 > '3.466666667' && collectiveKitchenJunContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi1 >= '4.333333333' && collectiveKitchenJunContents.kpi1 < '5.2')?'green':(collectiveKitchenJunContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi2 == null)?'grey-2':(collectiveKitchenJunContents.kpi2 >= '0' && collectiveKitchenJunContents.kpi2 <= '2.6')?'red':(collectiveKitchenJunContents.kpi2 > '2.6' && collectiveKitchenJunContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi2 > '3.466666667' && collectiveKitchenJunContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi2 >= '4.333333333' && collectiveKitchenJunContents.kpi2 < '5.2')?'green':(collectiveKitchenJunContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi3 == null)?'grey-2':(collectiveKitchenJunContents.kpi3 >= '0' && collectiveKitchenJunContents.kpi3 <= '8')?'red':(collectiveKitchenJunContents.kpi3 > '8' && collectiveKitchenJunContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJunContents.kpi3 > '10.66666667' && collectiveKitchenJunContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJunContents.kpi3 >= '13.33333333' && collectiveKitchenJunContents.kpi3 < '16')?'green':(collectiveKitchenJunContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi4 == null)?'grey-2':(collectiveKitchenJunContents.kpi4 >= '0' && collectiveKitchenJunContents.kpi4 <= '0.6')?'red':(collectiveKitchenJunContents.kpi4 > '0.6' && collectiveKitchenJunContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJunContents.kpi4 > '0.8' && collectiveKitchenJunContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJunContents.kpi4 >= '1' && collectiveKitchenJunContents.kpi4 < '1.2')?'green':(collectiveKitchenJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi4}}
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
                              :color="(collectiveKitchenJulContents.kpi1 == null)?'grey-2':(collectiveKitchenJulContents.kpi1 >= '0' && collectiveKitchenJulContents.kpi1 <= '2.6')?'red':(collectiveKitchenJulContents.kpi1 > '2.6' && collectiveKitchenJulContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi1 > '3.466666667' && collectiveKitchenJulContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi1 >= '4.333333333' && collectiveKitchenJulContents.kpi1 < '5.2')?'green':(collectiveKitchenJulContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi2 == null)?'grey-2':(collectiveKitchenJulContents.kpi2 >= '0' && collectiveKitchenJulContents.kpi2 <= '2.6')?'red':(collectiveKitchenJulContents.kpi2 > '2.6' && collectiveKitchenJulContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi2 > '3.466666667' && collectiveKitchenJulContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi2 >= '4.333333333' && collectiveKitchenJulContents.kpi2 < '5.2')?'green':(collectiveKitchenJulContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi3 == null)?'grey-2':(collectiveKitchenJulContents.kpi3 >= '0' && collectiveKitchenJulContents.kpi3 <= '8')?'red':(collectiveKitchenJulContents.kpi3 > '8' && collectiveKitchenJulContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJulContents.kpi3 > '10.66666667' && collectiveKitchenJulContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJulContents.kpi3 >= '13.33333333' && collectiveKitchenJulContents.kpi3 < '16')?'green':(collectiveKitchenJulContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi4 == null)?'grey-2':(collectiveKitchenJulContents.kpi4 >= '0' && collectiveKitchenJulContents.kpi4 <= '0.6')?'red':(collectiveKitchenJulContents.kpi4 > '0.6' && collectiveKitchenJulContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJulContents.kpi4 > '0.8' && collectiveKitchenJulContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJulContents.kpi4 >= '1' && collectiveKitchenJulContents.kpi4 < '1.2')?'green':(collectiveKitchenJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi4}}
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
                              :color="(collectiveKitchenAugContents.kpi1 == null)?'grey-2':(collectiveKitchenAugContents.kpi1 >= '0' && collectiveKitchenAugContents.kpi1 <= '2.6')?'red':(collectiveKitchenAugContents.kpi1 > '2.6' && collectiveKitchenAugContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi1 > '3.466666667' && collectiveKitchenAugContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi1 >= '4.333333333' && collectiveKitchenAugContents.kpi1 < '5.2')?'green':(collectiveKitchenAugContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi2 == null)?'grey-2':(collectiveKitchenAugContents.kpi2 >= '0' && collectiveKitchenAugContents.kpi2 <= '2.6')?'red':(collectiveKitchenAugContents.kpi2 > '2.6' && collectiveKitchenAugContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi2 > '3.466666667' && collectiveKitchenAugContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi2 >= '4.333333333' && collectiveKitchenAugContents.kpi2 < '5.2')?'green':(collectiveKitchenAugContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi3 == null)?'grey-2':(collectiveKitchenAugContents.kpi3 >= '0' && collectiveKitchenAugContents.kpi3 <= '8')?'red':(collectiveKitchenAugContents.kpi3 > '8' && collectiveKitchenAugContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAugContents.kpi3 > '10.66666667' && collectiveKitchenAugContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAugContents.kpi3 >= '13.33333333' && collectiveKitchenAugContents.kpi3 < '16')?'green':(collectiveKitchenAugContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi4 == null)?'grey-2':(collectiveKitchenAugContents.kpi4 >= '0' && collectiveKitchenAugContents.kpi4 <= '0.6')?'red':(collectiveKitchenAugContents.kpi4 > '0.6' && collectiveKitchenAugContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAugContents.kpi4 > '0.8' && collectiveKitchenAugContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAugContents.kpi4 >= '1' && collectiveKitchenAugContents.kpi4 < '1.2')?'green':(collectiveKitchenAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi4}}
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
                              :color="(collectiveKitchenSepContents.kpi1 == null)?'grey-2':(collectiveKitchenSepContents.kpi1 >= '0' && collectiveKitchenSepContents.kpi1 <= '2.6')?'red':(collectiveKitchenSepContents.kpi1 > '2.6' && collectiveKitchenSepContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi1 > '3.466666667' && collectiveKitchenSepContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi1 >= '4.333333333' && collectiveKitchenSepContents.kpi1 < '5.2')?'green':(collectiveKitchenSepContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi2 == null)?'grey-2':(collectiveKitchenSepContents.kpi2 >= '0' && collectiveKitchenSepContents.kpi2 <= '2.6')?'red':(collectiveKitchenSepContents.kpi2 > '2.6' && collectiveKitchenSepContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi2 > '3.466666667' && collectiveKitchenSepContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi2 >= '4.333333333' && collectiveKitchenSepContents.kpi2 < '5.2')?'green':(collectiveKitchenSepContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi3 == null)?'grey-2':(collectiveKitchenSepContents.kpi3 >= '0' && collectiveKitchenSepContents.kpi3 <= '8')?'red':(collectiveKitchenSepContents.kpi3 > '8' && collectiveKitchenSepContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenSepContents.kpi3 > '10.66666667' && collectiveKitchenSepContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenSepContents.kpi3 >= '13.33333333' && collectiveKitchenSepContents.kpi3 < '16')?'green':(collectiveKitchenSepContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi4 == null)?'grey-2':(collectiveKitchenSepContents.kpi4 >= '0' && collectiveKitchenSepContents.kpi4 <= '0.6')?'red':(collectiveKitchenSepContents.kpi4 > '0.6' && collectiveKitchenSepContents.kpi4 <= '0.8')?'orange':(collectiveKitchenSepContents.kpi4 > '0.8' && collectiveKitchenSepContents.kpi4 < '1')?'yellow-7':(collectiveKitchenSepContents.kpi4 >= '1' && collectiveKitchenSepContents.kpi4 < '1.2')?'green':(collectiveKitchenSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi4}}
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
                              :color="(collectiveKitchenOctContents.kpi1 == null)?'grey-2':(collectiveKitchenOctContents.kpi1 >= '0' && collectiveKitchenOctContents.kpi1 <= '2.6')?'red':(collectiveKitchenOctContents.kpi1 > '2.6' && collectiveKitchenOctContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi1 > '3.466666667' && collectiveKitchenOctContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi1 >= '4.333333333' && collectiveKitchenOctContents.kpi1 < '5.2')?'green':(collectiveKitchenOctContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi2 == null)?'grey-2':(collectiveKitchenOctContents.kpi2 >= '0' && collectiveKitchenOctContents.kpi2 <= '2.6')?'red':(collectiveKitchenOctContents.kpi2 > '2.6' && collectiveKitchenOctContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi2 > '3.466666667' && collectiveKitchenOctContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi2 >= '4.333333333' && collectiveKitchenOctContents.kpi2 < '5.2')?'green':(collectiveKitchenOctContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi3 == null)?'grey-2':(collectiveKitchenOctContents.kpi3 >= '0' && collectiveKitchenOctContents.kpi3 <= '8')?'red':(collectiveKitchenOctContents.kpi3 > '8' && collectiveKitchenOctContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenOctContents.kpi3 > '10.66666667' && collectiveKitchenOctContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenOctContents.kpi3 >= '13.33333333' && collectiveKitchenOctContents.kpi3 < '16')?'green':(collectiveKitchenOctContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi4 == null)?'grey-2':(collectiveKitchenOctContents.kpi4 >= '0' && collectiveKitchenOctContents.kpi4 <= '0.6')?'red':(collectiveKitchenOctContents.kpi4 > '0.6' && collectiveKitchenOctContents.kpi4 <= '0.8')?'orange':(collectiveKitchenOctContents.kpi4 > '0.8' && collectiveKitchenOctContents.kpi4 < '1')?'yellow-7':(collectiveKitchenOctContents.kpi4 >= '1' && collectiveKitchenOctContents.kpi4 < '1.2')?'green':(collectiveKitchenOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi4}}
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
                              :color="(collectiveKitchenNovContents.kpi1 == null)?'grey-2':(collectiveKitchenNovContents.kpi1 >= '0' && collectiveKitchenNovContents.kpi1 <= '2.6')?'red':(collectiveKitchenNovContents.kpi1 > '2.6' && collectiveKitchenNovContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi1 > '3.466666667' && collectiveKitchenNovContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi1 >= '4.333333333' && collectiveKitchenNovContents.kpi1 < '5.2')?'green':(collectiveKitchenNovContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi2 == null)?'grey-2':(collectiveKitchenNovContents.kpi2 >= '0' && collectiveKitchenNovContents.kpi2 <= '2.6')?'red':(collectiveKitchenNovContents.kpi2 > '2.6' && collectiveKitchenNovContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi2 > '3.466666667' && collectiveKitchenNovContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi2 >= '4.333333333' && collectiveKitchenNovContents.kpi2 < '5.2')?'green':(collectiveKitchenNovContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi3 == null)?'grey-2':(collectiveKitchenNovContents.kpi3 >= '0' && collectiveKitchenNovContents.kpi3 <= '8')?'red':(collectiveKitchenNovContents.kpi3 > '8' && collectiveKitchenNovContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenNovContents.kpi3 > '10.66666667' && collectiveKitchenNovContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenNovContents.kpi3 >= '13.33333333' && collectiveKitchenNovContents.kpi3 < '16')?'green':(collectiveKitchenNovContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi4 == null)?'grey-2':(collectiveKitchenNovContents.kpi4 >= '0' && collectiveKitchenNovContents.kpi4 <= '0.6')?'red':(collectiveKitchenNovContents.kpi4 > '0.6' && collectiveKitchenNovContents.kpi4 <= '0.8')?'orange':(collectiveKitchenNovContents.kpi4 > '0.8' && collectiveKitchenNovContents.kpi4 < '1')?'yellow-7':(collectiveKitchenNovContents.kpi4 >= '1' && collectiveKitchenNovContents.kpi4 < '1.2')?'green':(collectiveKitchenNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi4}}
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
                              :color="(collectiveKitchenDecContents.kpi1 == null)?'grey-2':(collectiveKitchenDecContents.kpi1 >= '0' && collectiveKitchenDecContents.kpi1 <= '2.6')?'red':(collectiveKitchenDecContents.kpi1 > '2.6' && collectiveKitchenDecContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi1 > '3.466666667' && collectiveKitchenDecContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi1 >= '4.333333333' && collectiveKitchenDecContents.kpi1 < '5.2')?'green':(collectiveKitchenDecContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi2 == null)?'grey-2':(collectiveKitchenDecContents.kpi2 >= '0' && collectiveKitchenDecContents.kpi2 <= '2.6')?'red':(collectiveKitchenDecContents.kpi2 > '2.6' && collectiveKitchenDecContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi2 > '3.466666667' && collectiveKitchenDecContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi2 >= '4.333333333' && collectiveKitchenDecContents.kpi2 < '5.2')?'green':(collectiveKitchenDecContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi3 == null)?'grey-2':(collectiveKitchenDecContents.kpi3 >= '0' && collectiveKitchenDecContents.kpi3 <= '8')?'red':(collectiveKitchenDecContents.kpi3 > '8' && collectiveKitchenDecContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenDecContents.kpi3 > '10.66666667' && collectiveKitchenDecContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenDecContents.kpi3 >= '13.33333333' && collectiveKitchenDecContents.kpi3 < '16')?'green':(collectiveKitchenDecContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi4 == null)?'grey-2':(collectiveKitchenDecContents.kpi4 >= '0' && collectiveKitchenDecContents.kpi4 <= '0.6')?'red':(collectiveKitchenDecContents.kpi4 > '0.6' && collectiveKitchenDecContents.kpi4 <= '0.8')?'orange':(collectiveKitchenDecContents.kpi4 > '0.8' && collectiveKitchenDecContents.kpi4 < '1')?'yellow-7':(collectiveKitchenDecContents.kpi4 >= '1' && collectiveKitchenDecContents.kpi4 < '1.2')?'green':(collectiveKitchenDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi4}}
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
                              :color="(collectiveKitchenJanContents.kpi1 == null)?'grey-2':(collectiveKitchenJanContents.kpi1 >= '0' && collectiveKitchenJanContents.kpi1 <= '2.6')?'red':(collectiveKitchenJanContents.kpi1 > '2.6' && collectiveKitchenJanContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi1 > '3.466666667' && collectiveKitchenJanContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi1 >= '4.333333333' && collectiveKitchenJanContents.kpi1 < '5.2')?'green':(collectiveKitchenJanContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi2 == null)?'grey-2':(collectiveKitchenJanContents.kpi2 >= '0' && collectiveKitchenJanContents.kpi2 <= '2.6')?'red':(collectiveKitchenJanContents.kpi2 > '2.6' && collectiveKitchenJanContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi2 > '3.466666667' && collectiveKitchenJanContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi2 >= '4.333333333' && collectiveKitchenJanContents.kpi2 < '5.2')?'green':(collectiveKitchenJanContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi3 == null)?'grey-2':(collectiveKitchenJanContents.kpi3 >= '0' && collectiveKitchenJanContents.kpi3 <= '8')?'red':(collectiveKitchenJanContents.kpi3 > '8' && collectiveKitchenJanContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJanContents.kpi3 > '10.66666667' && collectiveKitchenJanContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJanContents.kpi3 >= '13.33333333' && collectiveKitchenJanContents.kpi3 < '16')?'green':(collectiveKitchenJanContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi4 == null)?'grey-2':(collectiveKitchenJanContents.kpi4 >= '0' && collectiveKitchenJanContents.kpi4 <= '0.6')?'red':(collectiveKitchenJanContents.kpi4 > '0.6' && collectiveKitchenJanContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJanContents.kpi4 > '0.8' && collectiveKitchenJanContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJanContents.kpi4 >= '1' && collectiveKitchenJanContents.kpi4 < '1.2')?'green':(collectiveKitchenJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi4}}
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
                              :color="(collectiveKitchenFebContents.kpi1 == null)?'grey-2':(collectiveKitchenFebContents.kpi1 >= '0' && collectiveKitchenFebContents.kpi1 <= '2.6')?'red':(collectiveKitchenFebContents.kpi1 > '2.6' && collectiveKitchenFebContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi1 > '3.466666667' && collectiveKitchenFebContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi1 >= '4.333333333' && collectiveKitchenFebContents.kpi1 < '5.2')?'green':(collectiveKitchenFebContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi2 == null)?'grey-2':(collectiveKitchenFebContents.kpi2 >= '0' && collectiveKitchenFebContents.kpi2 <= '2.6')?'red':(collectiveKitchenFebContents.kpi2 > '2.6' && collectiveKitchenFebContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi2 > '3.466666667' && collectiveKitchenFebContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi2 >= '4.333333333' && collectiveKitchenFebContents.kpi2 < '5.2')?'green':(collectiveKitchenFebContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi3 == null)?'grey-2':(collectiveKitchenFebContents.kpi3 >= '0' && collectiveKitchenFebContents.kpi3 <= '8')?'red':(collectiveKitchenFebContents.kpi3 > '8' && collectiveKitchenFebContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenFebContents.kpi3 > '10.66666667' && collectiveKitchenFebContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenFebContents.kpi3 >= '13.33333333' && collectiveKitchenFebContents.kpi3 < '16')?'green':(collectiveKitchenFebContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi4 == null)?'grey-2':(collectiveKitchenFebContents.kpi4 >= '0' && collectiveKitchenFebContents.kpi4 <= '0.6')?'red':(collectiveKitchenFebContents.kpi4 > '0.6' && collectiveKitchenFebContents.kpi4 <= '0.8')?'orange':(collectiveKitchenFebContents.kpi4 > '0.8' && collectiveKitchenFebContents.kpi4 < '1')?'yellow-7':(collectiveKitchenFebContents.kpi4 >= '1' && collectiveKitchenFebContents.kpi4 < '1.2')?'green':(collectiveKitchenFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi4}}
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
                              :color="(collectiveKitchenMarContents.kpi1 == null)?'grey-2':(collectiveKitchenMarContents.kpi1 >= '0' && collectiveKitchenMarContents.kpi1 <= '2.6')?'red':(collectiveKitchenMarContents.kpi1 > '2.6' && collectiveKitchenMarContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi1 > '3.466666667' && collectiveKitchenMarContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi1 >= '4.333333333' && collectiveKitchenMarContents.kpi1 < '5.2')?'green':(collectiveKitchenMarContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi2 == null)?'grey-2':(collectiveKitchenMarContents.kpi2 >= '0' && collectiveKitchenMarContents.kpi2 <= '2.6')?'red':(collectiveKitchenMarContents.kpi2 > '2.6' && collectiveKitchenMarContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi2 > '3.466666667' && collectiveKitchenMarContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi2 >= '4.333333333' && collectiveKitchenMarContents.kpi2 < '5.2')?'green':(collectiveKitchenMarContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi3 == null)?'grey-2':(collectiveKitchenMarContents.kpi3 >= '0' && collectiveKitchenMarContents.kpi3 <= '8')?'red':(collectiveKitchenMarContents.kpi3 > '8' && collectiveKitchenMarContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMarContents.kpi3 > '10.66666667' && collectiveKitchenMarContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMarContents.kpi3 >= '13.33333333' && collectiveKitchenMarContents.kpi3 < '16')?'green':(collectiveKitchenMarContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi4 == null)?'grey-2':(collectiveKitchenMarContents.kpi4 >= '0' && collectiveKitchenMarContents.kpi4 <= '0.6')?'red':(collectiveKitchenMarContents.kpi4 > '0.6' && collectiveKitchenMarContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMarContents.kpi4 > '0.8' && collectiveKitchenMarContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMarContents.kpi4 >= '1' && collectiveKitchenMarContents.kpi4 < '1.2')?'green':(collectiveKitchenMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi4}}
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
                              :color="(collectiveKitchenAprContents.kpi1 == null)?'grey-2':(collectiveKitchenAprContents.kpi1 >= '0' && collectiveKitchenAprContents.kpi1 <= '2.6')?'red':(collectiveKitchenAprContents.kpi1 > '2.6' && collectiveKitchenAprContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi1 > '3.466666667' && collectiveKitchenAprContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi1 >= '4.333333333' && collectiveKitchenAprContents.kpi1 < '5.2')?'green':(collectiveKitchenAprContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi2 == null)?'grey-2':(collectiveKitchenAprContents.kpi2 >= '0' && collectiveKitchenAprContents.kpi2 <= '2.6')?'red':(collectiveKitchenAprContents.kpi2 > '2.6' && collectiveKitchenAprContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi2 > '3.466666667' && collectiveKitchenAprContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi2 >= '4.333333333' && collectiveKitchenAprContents.kpi2 < '5.2')?'green':(collectiveKitchenAprContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi3 == null)?'grey-2':(collectiveKitchenAprContents.kpi3 >= '0' && collectiveKitchenAprContents.kpi3 <= '8')?'red':(collectiveKitchenAprContents.kpi3 > '8' && collectiveKitchenAprContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAprContents.kpi3 > '10.66666667' && collectiveKitchenAprContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAprContents.kpi3 >= '13.33333333' && collectiveKitchenAprContents.kpi3 < '16')?'green':(collectiveKitchenAprContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi4 == null)?'grey-2':(collectiveKitchenAprContents.kpi4 >= '0' && collectiveKitchenAprContents.kpi4 <= '0.6')?'red':(collectiveKitchenAprContents.kpi4 > '0.6' && collectiveKitchenAprContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAprContents.kpi4 > '0.8' && collectiveKitchenAprContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAprContents.kpi4 >= '1' && collectiveKitchenAprContents.kpi4 < '1.2')?'green':(collectiveKitchenAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi4}}
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
                              :color="(collectiveKitchenMayContents.kpi1 == null)?'grey-2':(collectiveKitchenMayContents.kpi1 >= '0' && collectiveKitchenMayContents.kpi1 <= '2.6')?'red':(collectiveKitchenMayContents.kpi1 > '2.6' && collectiveKitchenMayContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi1 > '3.466666667' && collectiveKitchenMayContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi1 >= '4.333333333' && collectiveKitchenMayContents.kpi1 < '5.2')?'green':(collectiveKitchenMayContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi2 == null)?'grey-2':(collectiveKitchenMayContents.kpi2 >= '0' && collectiveKitchenMayContents.kpi2 <= '2.6')?'red':(collectiveKitchenMayContents.kpi2 > '2.6' && collectiveKitchenMayContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi2 > '3.466666667' && collectiveKitchenMayContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi2 >= '4.333333333' && collectiveKitchenMayContents.kpi2 < '5.2')?'green':(collectiveKitchenMayContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi3 == null)?'grey-2':(collectiveKitchenMayContents.kpi3 >= '0' && collectiveKitchenMayContents.kpi3 <= '8')?'red':(collectiveKitchenMayContents.kpi3 > '8' && collectiveKitchenMayContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMayContents.kpi3 > '10.66666667' && collectiveKitchenMayContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMayContents.kpi3 >= '13.33333333' && collectiveKitchenMayContents.kpi3 < '16')?'green':(collectiveKitchenMayContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi4 == null)?'grey-2':(collectiveKitchenMayContents.kpi4 >= '0' && collectiveKitchenMayContents.kpi4 <= '0.6')?'red':(collectiveKitchenMayContents.kpi4 > '0.6' && collectiveKitchenMayContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMayContents.kpi4 > '0.8' && collectiveKitchenMayContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMayContents.kpi4 >= '1' && collectiveKitchenMayContents.kpi4 < '1.2')?'green':(collectiveKitchenMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi4}}
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
                              :color="(collectiveKitchenJunContents.kpi1 == null)?'grey-2':(collectiveKitchenJunContents.kpi1 >= '0' && collectiveKitchenJunContents.kpi1 <= '2.6')?'red':(collectiveKitchenJunContents.kpi1 > '2.6' && collectiveKitchenJunContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi1 > '3.466666667' && collectiveKitchenJunContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi1 >= '4.333333333' && collectiveKitchenJunContents.kpi1 < '5.2')?'green':(collectiveKitchenJunContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi2 == null)?'grey-2':(collectiveKitchenJunContents.kpi2 >= '0' && collectiveKitchenJunContents.kpi2 <= '2.6')?'red':(collectiveKitchenJunContents.kpi2 > '2.6' && collectiveKitchenJunContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi2 > '3.466666667' && collectiveKitchenJunContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi2 >= '4.333333333' && collectiveKitchenJunContents.kpi2 < '5.2')?'green':(collectiveKitchenJunContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi3 == null)?'grey-2':(collectiveKitchenJunContents.kpi3 >= '0' && collectiveKitchenJunContents.kpi3 <= '8')?'red':(collectiveKitchenJunContents.kpi3 > '8' && collectiveKitchenJunContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJunContents.kpi3 > '10.66666667' && collectiveKitchenJunContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJunContents.kpi3 >= '13.33333333' && collectiveKitchenJunContents.kpi3 < '16')?'green':(collectiveKitchenJunContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi4 == null)?'grey-2':(collectiveKitchenJunContents.kpi4 >= '0' && collectiveKitchenJunContents.kpi4 <= '0.6')?'red':(collectiveKitchenJunContents.kpi4 > '0.6' && collectiveKitchenJunContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJunContents.kpi4 > '0.8' && collectiveKitchenJunContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJunContents.kpi4 >= '1' && collectiveKitchenJunContents.kpi4 < '1.2')?'green':(collectiveKitchenJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi4}}
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
                              :color="(collectiveKitchenJulContents.kpi1 == null)?'grey-2':(collectiveKitchenJulContents.kpi1 >= '0' && collectiveKitchenJulContents.kpi1 <= '2.6')?'red':(collectiveKitchenJulContents.kpi1 > '2.6' && collectiveKitchenJulContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi1 > '3.466666667' && collectiveKitchenJulContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi1 >= '4.333333333' && collectiveKitchenJulContents.kpi1 < '5.2')?'green':(collectiveKitchenJulContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi2 == null)?'grey-2':(collectiveKitchenJulContents.kpi2 >= '0' && collectiveKitchenJulContents.kpi2 <= '2.6')?'red':(collectiveKitchenJulContents.kpi2 > '2.6' && collectiveKitchenJulContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi2 > '3.466666667' && collectiveKitchenJulContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi2 >= '4.333333333' && collectiveKitchenJulContents.kpi2 < '5.2')?'green':(collectiveKitchenJulContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi3 == null)?'grey-2':(collectiveKitchenJulContents.kpi3 >= '0' && collectiveKitchenJulContents.kpi3 <= '8')?'red':(collectiveKitchenJulContents.kpi3 > '8' && collectiveKitchenJulContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJulContents.kpi3 > '10.66666667' && collectiveKitchenJulContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJulContents.kpi3 >= '13.33333333' && collectiveKitchenJulContents.kpi3 < '16')?'green':(collectiveKitchenJulContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi4 == null)?'grey-2':(collectiveKitchenJulContents.kpi4 >= '0' && collectiveKitchenJulContents.kpi4 <= '0.6')?'red':(collectiveKitchenJulContents.kpi4 > '0.6' && collectiveKitchenJulContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJulContents.kpi4 > '0.8' && collectiveKitchenJulContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJulContents.kpi4 >= '1' && collectiveKitchenJulContents.kpi4 < '1.2')?'green':(collectiveKitchenJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi4}}
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
                              :color="(collectiveKitchenAugContents.kpi1 == null)?'grey-2':(collectiveKitchenAugContents.kpi1 >= '0' && collectiveKitchenAugContents.kpi1 <= '2.6')?'red':(collectiveKitchenAugContents.kpi1 > '2.6' && collectiveKitchenAugContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi1 > '3.466666667' && collectiveKitchenAugContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi1 >= '4.333333333' && collectiveKitchenAugContents.kpi1 < '5.2')?'green':(collectiveKitchenAugContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi2 == null)?'grey-2':(collectiveKitchenAugContents.kpi2 >= '0' && collectiveKitchenAugContents.kpi2 <= '2.6')?'red':(collectiveKitchenAugContents.kpi2 > '2.6' && collectiveKitchenAugContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi2 > '3.466666667' && collectiveKitchenAugContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi2 >= '4.333333333' && collectiveKitchenAugContents.kpi2 < '5.2')?'green':(collectiveKitchenAugContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi3 == null)?'grey-2':(collectiveKitchenAugContents.kpi3 >= '0' && collectiveKitchenAugContents.kpi3 <= '8')?'red':(collectiveKitchenAugContents.kpi3 > '8' && collectiveKitchenAugContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAugContents.kpi3 > '10.66666667' && collectiveKitchenAugContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAugContents.kpi3 >= '13.33333333' && collectiveKitchenAugContents.kpi3 < '16')?'green':(collectiveKitchenAugContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi4 == null)?'grey-2':(collectiveKitchenAugContents.kpi4 >= '0' && collectiveKitchenAugContents.kpi4 <= '0.6')?'red':(collectiveKitchenAugContents.kpi4 > '0.6' && collectiveKitchenAugContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAugContents.kpi4 > '0.8' && collectiveKitchenAugContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAugContents.kpi4 >= '1' && collectiveKitchenAugContents.kpi4 < '1.2')?'green':(collectiveKitchenAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi4}}
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
                              :color="(collectiveKitchenSepContents.kpi1 == null)?'grey-2':(collectiveKitchenSepContents.kpi1 >= '0' && collectiveKitchenSepContents.kpi1 <= '2.6')?'red':(collectiveKitchenSepContents.kpi1 > '2.6' && collectiveKitchenSepContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi1 > '3.466666667' && collectiveKitchenSepContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi1 >= '4.333333333' && collectiveKitchenSepContents.kpi1 < '5.2')?'green':(collectiveKitchenSepContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi2 == null)?'grey-2':(collectiveKitchenSepContents.kpi2 >= '0' && collectiveKitchenSepContents.kpi2 <= '2.6')?'red':(collectiveKitchenSepContents.kpi2 > '2.6' && collectiveKitchenSepContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi2 > '3.466666667' && collectiveKitchenSepContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi2 >= '4.333333333' && collectiveKitchenSepContents.kpi2 < '5.2')?'green':(collectiveKitchenSepContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi3 == null)?'grey-2':(collectiveKitchenSepContents.kpi3 >= '0' && collectiveKitchenSepContents.kpi3 <= '8')?'red':(collectiveKitchenSepContents.kpi3 > '8' && collectiveKitchenSepContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenSepContents.kpi3 > '10.66666667' && collectiveKitchenSepContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenSepContents.kpi3 >= '13.33333333' && collectiveKitchenSepContents.kpi3 < '16')?'green':(collectiveKitchenSepContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi4 == null)?'grey-2':(collectiveKitchenSepContents.kpi4 >= '0' && collectiveKitchenSepContents.kpi4 <= '0.6')?'red':(collectiveKitchenSepContents.kpi4 > '0.6' && collectiveKitchenSepContents.kpi4 <= '0.8')?'orange':(collectiveKitchenSepContents.kpi4 > '0.8' && collectiveKitchenSepContents.kpi4 < '1')?'yellow-7':(collectiveKitchenSepContents.kpi4 >= '1' && collectiveKitchenSepContents.kpi4 < '1.2')?'green':(collectiveKitchenSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi4}}
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
                              :color="(collectiveKitchenOctContents.kpi1 == null)?'grey-2':(collectiveKitchenOctContents.kpi1 >= '0' && collectiveKitchenOctContents.kpi1 <= '2.6')?'red':(collectiveKitchenOctContents.kpi1 > '2.6' && collectiveKitchenOctContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi1 > '3.466666667' && collectiveKitchenOctContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi1 >= '4.333333333' && collectiveKitchenOctContents.kpi1 < '5.2')?'green':(collectiveKitchenOctContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi2 == null)?'grey-2':(collectiveKitchenOctContents.kpi2 >= '0' && collectiveKitchenOctContents.kpi2 <= '2.6')?'red':(collectiveKitchenOctContents.kpi2 > '2.6' && collectiveKitchenOctContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi2 > '3.466666667' && collectiveKitchenOctContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi2 >= '4.333333333' && collectiveKitchenOctContents.kpi2 < '5.2')?'green':(collectiveKitchenOctContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi3 == null)?'grey-2':(collectiveKitchenOctContents.kpi3 >= '0' && collectiveKitchenOctContents.kpi3 <= '8')?'red':(collectiveKitchenOctContents.kpi3 > '8' && collectiveKitchenOctContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenOctContents.kpi3 > '10.66666667' && collectiveKitchenOctContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenOctContents.kpi3 >= '13.33333333' && collectiveKitchenOctContents.kpi3 < '16')?'green':(collectiveKitchenOctContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi4 == null)?'grey-2':(collectiveKitchenOctContents.kpi4 >= '0' && collectiveKitchenOctContents.kpi4 <= '0.6')?'red':(collectiveKitchenOctContents.kpi4 > '0.6' && collectiveKitchenOctContents.kpi4 <= '0.8')?'orange':(collectiveKitchenOctContents.kpi4 > '0.8' && collectiveKitchenOctContents.kpi4 < '1')?'yellow-7':(collectiveKitchenOctContents.kpi4 >= '1' && collectiveKitchenOctContents.kpi4 < '1.2')?'green':(collectiveKitchenOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi4}}
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
                              :color="(collectiveKitchenNovContents.kpi1 == null)?'grey-2':(collectiveKitchenNovContents.kpi1 >= '0' && collectiveKitchenNovContents.kpi1 <= '2.6')?'red':(collectiveKitchenNovContents.kpi1 > '2.6' && collectiveKitchenNovContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi1 > '3.466666667' && collectiveKitchenNovContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi1 >= '4.333333333' && collectiveKitchenNovContents.kpi1 < '5.2')?'green':(collectiveKitchenNovContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi2 == null)?'grey-2':(collectiveKitchenNovContents.kpi2 >= '0' && collectiveKitchenNovContents.kpi2 <= '2.6')?'red':(collectiveKitchenNovContents.kpi2 > '2.6' && collectiveKitchenNovContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi2 > '3.466666667' && collectiveKitchenNovContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi2 >= '4.333333333' && collectiveKitchenNovContents.kpi2 < '5.2')?'green':(collectiveKitchenNovContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi3 == null)?'grey-2':(collectiveKitchenNovContents.kpi3 >= '0' && collectiveKitchenNovContents.kpi3 <= '8')?'red':(collectiveKitchenNovContents.kpi3 > '8' && collectiveKitchenNovContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenNovContents.kpi3 > '10.66666667' && collectiveKitchenNovContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenNovContents.kpi3 >= '13.33333333' && collectiveKitchenNovContents.kpi3 < '16')?'green':(collectiveKitchenNovContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi4 == null)?'grey-2':(collectiveKitchenNovContents.kpi4 >= '0' && collectiveKitchenNovContents.kpi4 <= '0.6')?'red':(collectiveKitchenNovContents.kpi4 > '0.6' && collectiveKitchenNovContents.kpi4 <= '0.8')?'orange':(collectiveKitchenNovContents.kpi4 > '0.8' && collectiveKitchenNovContents.kpi4 < '1')?'yellow-7':(collectiveKitchenNovContents.kpi4 >= '1' && collectiveKitchenNovContents.kpi4 < '1.2')?'green':(collectiveKitchenNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi4}}
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
                              :color="(collectiveKitchenDecContents.kpi1 == null)?'grey-2':(collectiveKitchenDecContents.kpi1 >= '0' && collectiveKitchenDecContents.kpi1 <= '2.6')?'red':(collectiveKitchenDecContents.kpi1 > '2.6' && collectiveKitchenDecContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi1 > '3.466666667' && collectiveKitchenDecContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi1 >= '4.333333333' && collectiveKitchenDecContents.kpi1 < '5.2')?'green':(collectiveKitchenDecContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi2 == null)?'grey-2':(collectiveKitchenDecContents.kpi2 >= '0' && collectiveKitchenDecContents.kpi2 <= '2.6')?'red':(collectiveKitchenDecContents.kpi2 > '2.6' && collectiveKitchenDecContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi2 > '3.466666667' && collectiveKitchenDecContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi2 >= '4.333333333' && collectiveKitchenDecContents.kpi2 < '5.2')?'green':(collectiveKitchenDecContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi3 == null)?'grey-2':(collectiveKitchenDecContents.kpi3 >= '0' && collectiveKitchenDecContents.kpi3 <= '8')?'red':(collectiveKitchenDecContents.kpi3 > '8' && collectiveKitchenDecContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenDecContents.kpi3 > '10.66666667' && collectiveKitchenDecContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenDecContents.kpi3 >= '13.33333333' && collectiveKitchenDecContents.kpi3 < '16')?'green':(collectiveKitchenDecContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi4 == null)?'grey-2':(collectiveKitchenDecContents.kpi4 >= '0' && collectiveKitchenDecContents.kpi4 <= '0.6')?'red':(collectiveKitchenDecContents.kpi4 > '0.6' && collectiveKitchenDecContents.kpi4 <= '0.8')?'orange':(collectiveKitchenDecContents.kpi4 > '0.8' && collectiveKitchenDecContents.kpi4 < '1')?'yellow-7':(collectiveKitchenDecContents.kpi4 >= '1' && collectiveKitchenDecContents.kpi4 < '1.2')?'green':(collectiveKitchenDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi4}}
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
                              :color="(collectiveKitchenJanContents.kpi1 == null)?'grey-2':(collectiveKitchenJanContents.kpi1 >= '0' && collectiveKitchenJanContents.kpi1 <= '2.6')?'red':(collectiveKitchenJanContents.kpi1 > '2.6' && collectiveKitchenJanContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi1 > '3.466666667' && collectiveKitchenJanContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi1 >= '4.333333333' && collectiveKitchenJanContents.kpi1 < '5.2')?'green':(collectiveKitchenJanContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi2 == null)?'grey-2':(collectiveKitchenJanContents.kpi2 >= '0' && collectiveKitchenJanContents.kpi2 <= '2.6')?'red':(collectiveKitchenJanContents.kpi2 > '2.6' && collectiveKitchenJanContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi2 > '3.466666667' && collectiveKitchenJanContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi2 >= '4.333333333' && collectiveKitchenJanContents.kpi2 < '5.2')?'green':(collectiveKitchenJanContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi3 == null)?'grey-2':(collectiveKitchenJanContents.kpi3 >= '0' && collectiveKitchenJanContents.kpi3 <= '8')?'red':(collectiveKitchenJanContents.kpi3 > '8' && collectiveKitchenJanContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJanContents.kpi3 > '10.66666667' && collectiveKitchenJanContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJanContents.kpi3 >= '13.33333333' && collectiveKitchenJanContents.kpi3 < '16')?'green':(collectiveKitchenJanContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi4 == null)?'grey-2':(collectiveKitchenJanContents.kpi4 >= '0' && collectiveKitchenJanContents.kpi4 <= '0.6')?'red':(collectiveKitchenJanContents.kpi4 > '0.6' && collectiveKitchenJanContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJanContents.kpi4 > '0.8' && collectiveKitchenJanContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJanContents.kpi4 >= '1' && collectiveKitchenJanContents.kpi4 < '1.2')?'green':(collectiveKitchenJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi4}}
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
                              :color="(collectiveKitchenFebContents.kpi1 == null)?'grey-2':(collectiveKitchenFebContents.kpi1 >= '0' && collectiveKitchenFebContents.kpi1 <= '2.6')?'red':(collectiveKitchenFebContents.kpi1 > '2.6' && collectiveKitchenFebContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi1 > '3.466666667' && collectiveKitchenFebContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi1 >= '4.333333333' && collectiveKitchenFebContents.kpi1 < '5.2')?'green':(collectiveKitchenFebContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi2 == null)?'grey-2':(collectiveKitchenFebContents.kpi2 >= '0' && collectiveKitchenFebContents.kpi2 <= '2.6')?'red':(collectiveKitchenFebContents.kpi2 > '2.6' && collectiveKitchenFebContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi2 > '3.466666667' && collectiveKitchenFebContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi2 >= '4.333333333' && collectiveKitchenFebContents.kpi2 < '5.2')?'green':(collectiveKitchenFebContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi3 == null)?'grey-2':(collectiveKitchenFebContents.kpi3 >= '0' && collectiveKitchenFebContents.kpi3 <= '8')?'red':(collectiveKitchenFebContents.kpi3 > '8' && collectiveKitchenFebContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenFebContents.kpi3 > '10.66666667' && collectiveKitchenFebContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenFebContents.kpi3 >= '13.33333333' && collectiveKitchenFebContents.kpi3 < '16')?'green':(collectiveKitchenFebContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi4 == null)?'grey-2':(collectiveKitchenFebContents.kpi4 >= '0' && collectiveKitchenFebContents.kpi4 <= '0.6')?'red':(collectiveKitchenFebContents.kpi4 > '0.6' && collectiveKitchenFebContents.kpi4 <= '0.8')?'orange':(collectiveKitchenFebContents.kpi4 > '0.8' && collectiveKitchenFebContents.kpi4 < '1')?'yellow-7':(collectiveKitchenFebContents.kpi4 >= '1' && collectiveKitchenFebContents.kpi4 < '1.2')?'green':(collectiveKitchenFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi4}}
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
                              :color="(collectiveKitchenMarContents.kpi1 == null)?'grey-2':(collectiveKitchenMarContents.kpi1 >= '0' && collectiveKitchenMarContents.kpi1 <= '2.6')?'red':(collectiveKitchenMarContents.kpi1 > '2.6' && collectiveKitchenMarContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi1 > '3.466666667' && collectiveKitchenMarContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi1 >= '4.333333333' && collectiveKitchenMarContents.kpi1 < '5.2')?'green':(collectiveKitchenMarContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi2 == null)?'grey-2':(collectiveKitchenMarContents.kpi2 >= '0' && collectiveKitchenMarContents.kpi2 <= '2.6')?'red':(collectiveKitchenMarContents.kpi2 > '2.6' && collectiveKitchenMarContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi2 > '3.466666667' && collectiveKitchenMarContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi2 >= '4.333333333' && collectiveKitchenMarContents.kpi2 < '5.2')?'green':(collectiveKitchenMarContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi3 == null)?'grey-2':(collectiveKitchenMarContents.kpi3 >= '0' && collectiveKitchenMarContents.kpi3 <= '8')?'red':(collectiveKitchenMarContents.kpi3 > '8' && collectiveKitchenMarContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMarContents.kpi3 > '10.66666667' && collectiveKitchenMarContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMarContents.kpi3 >= '13.33333333' && collectiveKitchenMarContents.kpi3 < '16')?'green':(collectiveKitchenMarContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi4 == null)?'grey-2':(collectiveKitchenMarContents.kpi4 >= '0' && collectiveKitchenMarContents.kpi4 <= '0.6')?'red':(collectiveKitchenMarContents.kpi4 > '0.6' && collectiveKitchenMarContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMarContents.kpi4 > '0.8' && collectiveKitchenMarContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMarContents.kpi4 >= '1' && collectiveKitchenMarContents.kpi4 < '1.2')?'green':(collectiveKitchenMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi4}}
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
                              :color="(collectiveKitchenAprContents.kpi1 == null)?'grey-2':(collectiveKitchenAprContents.kpi1 >= '0' && collectiveKitchenAprContents.kpi1 <= '2.6')?'red':(collectiveKitchenAprContents.kpi1 > '2.6' && collectiveKitchenAprContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi1 > '3.466666667' && collectiveKitchenAprContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi1 >= '4.333333333' && collectiveKitchenAprContents.kpi1 < '5.2')?'green':(collectiveKitchenAprContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi2 == null)?'grey-2':(collectiveKitchenAprContents.kpi2 >= '0' && collectiveKitchenAprContents.kpi2 <= '2.6')?'red':(collectiveKitchenAprContents.kpi2 > '2.6' && collectiveKitchenAprContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi2 > '3.466666667' && collectiveKitchenAprContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi2 >= '4.333333333' && collectiveKitchenAprContents.kpi2 < '5.2')?'green':(collectiveKitchenAprContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi3 == null)?'grey-2':(collectiveKitchenAprContents.kpi3 >= '0' && collectiveKitchenAprContents.kpi3 <= '8')?'red':(collectiveKitchenAprContents.kpi3 > '8' && collectiveKitchenAprContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAprContents.kpi3 > '10.66666667' && collectiveKitchenAprContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAprContents.kpi3 >= '13.33333333' && collectiveKitchenAprContents.kpi3 < '16')?'green':(collectiveKitchenAprContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi4 == null)?'grey-2':(collectiveKitchenAprContents.kpi4 >= '0' && collectiveKitchenAprContents.kpi4 <= '0.6')?'red':(collectiveKitchenAprContents.kpi4 > '0.6' && collectiveKitchenAprContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAprContents.kpi4 > '0.8' && collectiveKitchenAprContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAprContents.kpi4 >= '1' && collectiveKitchenAprContents.kpi4 < '1.2')?'green':(collectiveKitchenAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi4}}
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
                              :color="(collectiveKitchenMayContents.kpi1 == null)?'grey-2':(collectiveKitchenMayContents.kpi1 >= '0' && collectiveKitchenMayContents.kpi1 <= '2.6')?'red':(collectiveKitchenMayContents.kpi1 > '2.6' && collectiveKitchenMayContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi1 > '3.466666667' && collectiveKitchenMayContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi1 >= '4.333333333' && collectiveKitchenMayContents.kpi1 < '5.2')?'green':(collectiveKitchenMayContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi2 == null)?'grey-2':(collectiveKitchenMayContents.kpi2 >= '0' && collectiveKitchenMayContents.kpi2 <= '2.6')?'red':(collectiveKitchenMayContents.kpi2 > '2.6' && collectiveKitchenMayContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi2 > '3.466666667' && collectiveKitchenMayContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi2 >= '4.333333333' && collectiveKitchenMayContents.kpi2 < '5.2')?'green':(collectiveKitchenMayContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi3 == null)?'grey-2':(collectiveKitchenMayContents.kpi3 >= '0' && collectiveKitchenMayContents.kpi3 <= '8')?'red':(collectiveKitchenMayContents.kpi3 > '8' && collectiveKitchenMayContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMayContents.kpi3 > '10.66666667' && collectiveKitchenMayContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMayContents.kpi3 >= '13.33333333' && collectiveKitchenMayContents.kpi3 < '16')?'green':(collectiveKitchenMayContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi4 == null)?'grey-2':(collectiveKitchenMayContents.kpi4 >= '0' && collectiveKitchenMayContents.kpi4 <= '0.6')?'red':(collectiveKitchenMayContents.kpi4 > '0.6' && collectiveKitchenMayContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMayContents.kpi4 > '0.8' && collectiveKitchenMayContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMayContents.kpi4 >= '1' && collectiveKitchenMayContents.kpi4 < '1.2')?'green':(collectiveKitchenMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi4}}
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
                              :color="(collectiveKitchenJunContents.kpi1 == null)?'grey-2':(collectiveKitchenJunContents.kpi1 >= '0' && collectiveKitchenJunContents.kpi1 <= '2.6')?'red':(collectiveKitchenJunContents.kpi1 > '2.6' && collectiveKitchenJunContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi1 > '3.466666667' && collectiveKitchenJunContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi1 >= '4.333333333' && collectiveKitchenJunContents.kpi1 < '5.2')?'green':(collectiveKitchenJunContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi2 == null)?'grey-2':(collectiveKitchenJunContents.kpi2 >= '0' && collectiveKitchenJunContents.kpi2 <= '2.6')?'red':(collectiveKitchenJunContents.kpi2 > '2.6' && collectiveKitchenJunContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi2 > '3.466666667' && collectiveKitchenJunContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi2 >= '4.333333333' && collectiveKitchenJunContents.kpi2 < '5.2')?'green':(collectiveKitchenJunContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi3 == null)?'grey-2':(collectiveKitchenJunContents.kpi3 >= '0' && collectiveKitchenJunContents.kpi3 <= '8')?'red':(collectiveKitchenJunContents.kpi3 > '8' && collectiveKitchenJunContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJunContents.kpi3 > '10.66666667' && collectiveKitchenJunContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJunContents.kpi3 >= '13.33333333' && collectiveKitchenJunContents.kpi3 < '16')?'green':(collectiveKitchenJunContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi4 == null)?'grey-2':(collectiveKitchenJunContents.kpi4 >= '0' && collectiveKitchenJunContents.kpi4 <= '0.6')?'red':(collectiveKitchenJunContents.kpi4 > '0.6' && collectiveKitchenJunContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJunContents.kpi4 > '0.8' && collectiveKitchenJunContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJunContents.kpi4 >= '1' && collectiveKitchenJunContents.kpi4 < '1.2')?'green':(collectiveKitchenJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi4}}
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
                              :color="(collectiveKitchenJulContents.kpi1 == null)?'grey-2':(collectiveKitchenJulContents.kpi1 >= '0' && collectiveKitchenJulContents.kpi1 <= '2.6')?'red':(collectiveKitchenJulContents.kpi1 > '2.6' && collectiveKitchenJulContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi1 > '3.466666667' && collectiveKitchenJulContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi1 >= '4.333333333' && collectiveKitchenJulContents.kpi1 < '5.2')?'green':(collectiveKitchenJulContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi2 == null)?'grey-2':(collectiveKitchenJulContents.kpi2 >= '0' && collectiveKitchenJulContents.kpi2 <= '2.6')?'red':(collectiveKitchenJulContents.kpi2 > '2.6' && collectiveKitchenJulContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi2 > '3.466666667' && collectiveKitchenJulContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi2 >= '4.333333333' && collectiveKitchenJulContents.kpi2 < '5.2')?'green':(collectiveKitchenJulContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi3 == null)?'grey-2':(collectiveKitchenJulContents.kpi3 >= '0' && collectiveKitchenJulContents.kpi3 <= '8')?'red':(collectiveKitchenJulContents.kpi3 > '8' && collectiveKitchenJulContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJulContents.kpi3 > '10.66666667' && collectiveKitchenJulContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJulContents.kpi3 >= '13.33333333' && collectiveKitchenJulContents.kpi3 < '16')?'green':(collectiveKitchenJulContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi4 == null)?'grey-2':(collectiveKitchenJulContents.kpi4 >= '0' && collectiveKitchenJulContents.kpi4 <= '0.6')?'red':(collectiveKitchenJulContents.kpi4 > '0.6' && collectiveKitchenJulContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJulContents.kpi4 > '0.8' && collectiveKitchenJulContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJulContents.kpi4 >= '1' && collectiveKitchenJulContents.kpi4 < '1.2')?'green':(collectiveKitchenJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi4}}
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
                              :color="(collectiveKitchenAugContents.kpi1 == null)?'grey-2':(collectiveKitchenAugContents.kpi1 >= '0' && collectiveKitchenAugContents.kpi1 <= '2.6')?'red':(collectiveKitchenAugContents.kpi1 > '2.6' && collectiveKitchenAugContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi1 > '3.466666667' && collectiveKitchenAugContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi1 >= '4.333333333' && collectiveKitchenAugContents.kpi1 < '5.2')?'green':(collectiveKitchenAugContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi2 == null)?'grey-2':(collectiveKitchenAugContents.kpi2 >= '0' && collectiveKitchenAugContents.kpi2 <= '2.6')?'red':(collectiveKitchenAugContents.kpi2 > '2.6' && collectiveKitchenAugContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi2 > '3.466666667' && collectiveKitchenAugContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi2 >= '4.333333333' && collectiveKitchenAugContents.kpi2 < '5.2')?'green':(collectiveKitchenAugContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi3 == null)?'grey-2':(collectiveKitchenAugContents.kpi3 >= '0' && collectiveKitchenAugContents.kpi3 <= '8')?'red':(collectiveKitchenAugContents.kpi3 > '8' && collectiveKitchenAugContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAugContents.kpi3 > '10.66666667' && collectiveKitchenAugContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAugContents.kpi3 >= '13.33333333' && collectiveKitchenAugContents.kpi3 < '16')?'green':(collectiveKitchenAugContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi4 == null)?'grey-2':(collectiveKitchenAugContents.kpi4 >= '0' && collectiveKitchenAugContents.kpi4 <= '0.6')?'red':(collectiveKitchenAugContents.kpi4 > '0.6' && collectiveKitchenAugContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAugContents.kpi4 > '0.8' && collectiveKitchenAugContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAugContents.kpi4 >= '1' && collectiveKitchenAugContents.kpi4 < '1.2')?'green':(collectiveKitchenAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi4}}
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
                              :color="(collectiveKitchenSepContents.kpi1 == null)?'grey-2':(collectiveKitchenSepContents.kpi1 >= '0' && collectiveKitchenSepContents.kpi1 <= '2.6')?'red':(collectiveKitchenSepContents.kpi1 > '2.6' && collectiveKitchenSepContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi1 > '3.466666667' && collectiveKitchenSepContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi1 >= '4.333333333' && collectiveKitchenSepContents.kpi1 < '5.2')?'green':(collectiveKitchenSepContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi2 == null)?'grey-2':(collectiveKitchenSepContents.kpi2 >= '0' && collectiveKitchenSepContents.kpi2 <= '2.6')?'red':(collectiveKitchenSepContents.kpi2 > '2.6' && collectiveKitchenSepContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi2 > '3.466666667' && collectiveKitchenSepContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi2 >= '4.333333333' && collectiveKitchenSepContents.kpi2 < '5.2')?'green':(collectiveKitchenSepContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi3 == null)?'grey-2':(collectiveKitchenSepContents.kpi3 >= '0' && collectiveKitchenSepContents.kpi3 <= '8')?'red':(collectiveKitchenSepContents.kpi3 > '8' && collectiveKitchenSepContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenSepContents.kpi3 > '10.66666667' && collectiveKitchenSepContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenSepContents.kpi3 >= '13.33333333' && collectiveKitchenSepContents.kpi3 < '16')?'green':(collectiveKitchenSepContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi4 == null)?'grey-2':(collectiveKitchenSepContents.kpi4 >= '0' && collectiveKitchenSepContents.kpi4 <= '0.6')?'red':(collectiveKitchenSepContents.kpi4 > '0.6' && collectiveKitchenSepContents.kpi4 <= '0.8')?'orange':(collectiveKitchenSepContents.kpi4 > '0.8' && collectiveKitchenSepContents.kpi4 < '1')?'yellow-7':(collectiveKitchenSepContents.kpi4 >= '1' && collectiveKitchenSepContents.kpi4 < '1.2')?'green':(collectiveKitchenSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi4}}
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
                              :color="(collectiveKitchenOctContents.kpi1 == null)?'grey-2':(collectiveKitchenOctContents.kpi1 >= '0' && collectiveKitchenOctContents.kpi1 <= '2.6')?'red':(collectiveKitchenOctContents.kpi1 > '2.6' && collectiveKitchenOctContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi1 > '3.466666667' && collectiveKitchenOctContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi1 >= '4.333333333' && collectiveKitchenOctContents.kpi1 < '5.2')?'green':(collectiveKitchenOctContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi2 == null)?'grey-2':(collectiveKitchenOctContents.kpi2 >= '0' && collectiveKitchenOctContents.kpi2 <= '2.6')?'red':(collectiveKitchenOctContents.kpi2 > '2.6' && collectiveKitchenOctContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi2 > '3.466666667' && collectiveKitchenOctContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi2 >= '4.333333333' && collectiveKitchenOctContents.kpi2 < '5.2')?'green':(collectiveKitchenOctContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi3 == null)?'grey-2':(collectiveKitchenOctContents.kpi3 >= '0' && collectiveKitchenOctContents.kpi3 <= '8')?'red':(collectiveKitchenOctContents.kpi3 > '8' && collectiveKitchenOctContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenOctContents.kpi3 > '10.66666667' && collectiveKitchenOctContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenOctContents.kpi3 >= '13.33333333' && collectiveKitchenOctContents.kpi3 < '16')?'green':(collectiveKitchenOctContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi4 == null)?'grey-2':(collectiveKitchenOctContents.kpi4 >= '0' && collectiveKitchenOctContents.kpi4 <= '0.6')?'red':(collectiveKitchenOctContents.kpi4 > '0.6' && collectiveKitchenOctContents.kpi4 <= '0.8')?'orange':(collectiveKitchenOctContents.kpi4 > '0.8' && collectiveKitchenOctContents.kpi4 < '1')?'yellow-7':(collectiveKitchenOctContents.kpi4 >= '1' && collectiveKitchenOctContents.kpi4 < '1.2')?'green':(collectiveKitchenOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi4}}
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
                              :color="(collectiveKitchenNovContents.kpi1 == null)?'grey-2':(collectiveKitchenNovContents.kpi1 >= '0' && collectiveKitchenNovContents.kpi1 <= '2.6')?'red':(collectiveKitchenNovContents.kpi1 > '2.6' && collectiveKitchenNovContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi1 > '3.466666667' && collectiveKitchenNovContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi1 >= '4.333333333' && collectiveKitchenNovContents.kpi1 < '5.2')?'green':(collectiveKitchenNovContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi2 == null)?'grey-2':(collectiveKitchenNovContents.kpi2 >= '0' && collectiveKitchenNovContents.kpi2 <= '2.6')?'red':(collectiveKitchenNovContents.kpi2 > '2.6' && collectiveKitchenNovContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi2 > '3.466666667' && collectiveKitchenNovContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi2 >= '4.333333333' && collectiveKitchenNovContents.kpi2 < '5.2')?'green':(collectiveKitchenNovContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi3 == null)?'grey-2':(collectiveKitchenNovContents.kpi3 >= '0' && collectiveKitchenNovContents.kpi3 <= '8')?'red':(collectiveKitchenNovContents.kpi3 > '8' && collectiveKitchenNovContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenNovContents.kpi3 > '10.66666667' && collectiveKitchenNovContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenNovContents.kpi3 >= '13.33333333' && collectiveKitchenNovContents.kpi3 < '16')?'green':(collectiveKitchenNovContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi4 == null)?'grey-2':(collectiveKitchenNovContents.kpi4 >= '0' && collectiveKitchenNovContents.kpi4 <= '0.6')?'red':(collectiveKitchenNovContents.kpi4 > '0.6' && collectiveKitchenNovContents.kpi4 <= '0.8')?'orange':(collectiveKitchenNovContents.kpi4 > '0.8' && collectiveKitchenNovContents.kpi4 < '1')?'yellow-7':(collectiveKitchenNovContents.kpi4 >= '1' && collectiveKitchenNovContents.kpi4 < '1.2')?'green':(collectiveKitchenNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi4}}
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
                              :color="(collectiveKitchenDecContents.kpi1 == null)?'grey-2':(collectiveKitchenDecContents.kpi1 >= '0' && collectiveKitchenDecContents.kpi1 <= '2.6')?'red':(collectiveKitchenDecContents.kpi1 > '2.6' && collectiveKitchenDecContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi1 > '3.466666667' && collectiveKitchenDecContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi1 >= '4.333333333' && collectiveKitchenDecContents.kpi1 < '5.2')?'green':(collectiveKitchenDecContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi2 == null)?'grey-2':(collectiveKitchenDecContents.kpi2 >= '0' && collectiveKitchenDecContents.kpi2 <= '2.6')?'red':(collectiveKitchenDecContents.kpi2 > '2.6' && collectiveKitchenDecContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi2 > '3.466666667' && collectiveKitchenDecContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi2 >= '4.333333333' && collectiveKitchenDecContents.kpi2 < '5.2')?'green':(collectiveKitchenDecContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi3 == null)?'grey-2':(collectiveKitchenDecContents.kpi3 >= '0' && collectiveKitchenDecContents.kpi3 <= '8')?'red':(collectiveKitchenDecContents.kpi3 > '8' && collectiveKitchenDecContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenDecContents.kpi3 > '10.66666667' && collectiveKitchenDecContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenDecContents.kpi3 >= '13.33333333' && collectiveKitchenDecContents.kpi3 < '16')?'green':(collectiveKitchenDecContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi4 == null)?'grey-2':(collectiveKitchenDecContents.kpi4 >= '0' && collectiveKitchenDecContents.kpi4 <= '0.6')?'red':(collectiveKitchenDecContents.kpi4 > '0.6' && collectiveKitchenDecContents.kpi4 <= '0.8')?'orange':(collectiveKitchenDecContents.kpi4 > '0.8' && collectiveKitchenDecContents.kpi4 < '1')?'yellow-7':(collectiveKitchenDecContents.kpi4 >= '1' && collectiveKitchenDecContents.kpi4 < '1.2')?'green':(collectiveKitchenDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi4}}
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
                              :color="(collectiveKitchenJanContents.kpi1 == null)?'grey-2':(collectiveKitchenJanContents.kpi1 >= '0' && collectiveKitchenJanContents.kpi1 <= '2.6')?'red':(collectiveKitchenJanContents.kpi1 > '2.6' && collectiveKitchenJanContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi1 > '3.466666667' && collectiveKitchenJanContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi1 >= '4.333333333' && collectiveKitchenJanContents.kpi1 < '5.2')?'green':(collectiveKitchenJanContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi2 == null)?'grey-2':(collectiveKitchenJanContents.kpi2 >= '0' && collectiveKitchenJanContents.kpi2 <= '2.6')?'red':(collectiveKitchenJanContents.kpi2 > '2.6' && collectiveKitchenJanContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi2 > '3.466666667' && collectiveKitchenJanContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi2 >= '4.333333333' && collectiveKitchenJanContents.kpi2 < '5.2')?'green':(collectiveKitchenJanContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi3 == null)?'grey-2':(collectiveKitchenJanContents.kpi3 >= '0' && collectiveKitchenJanContents.kpi3 <= '8')?'red':(collectiveKitchenJanContents.kpi3 > '8' && collectiveKitchenJanContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJanContents.kpi3 > '10.66666667' && collectiveKitchenJanContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJanContents.kpi3 >= '13.33333333' && collectiveKitchenJanContents.kpi3 < '16')?'green':(collectiveKitchenJanContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi4 == null)?'grey-2':(collectiveKitchenJanContents.kpi4 >= '0' && collectiveKitchenJanContents.kpi4 <= '0.6')?'red':(collectiveKitchenJanContents.kpi4 > '0.6' && collectiveKitchenJanContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJanContents.kpi4 > '0.8' && collectiveKitchenJanContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJanContents.kpi4 >= '1' && collectiveKitchenJanContents.kpi4 < '1.2')?'green':(collectiveKitchenJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi4}}
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
                              :color="(collectiveKitchenFebContents.kpi1 == null)?'grey-2':(collectiveKitchenFebContents.kpi1 >= '0' && collectiveKitchenFebContents.kpi1 <= '2.6')?'red':(collectiveKitchenFebContents.kpi1 > '2.6' && collectiveKitchenFebContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi1 > '3.466666667' && collectiveKitchenFebContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi1 >= '4.333333333' && collectiveKitchenFebContents.kpi1 < '5.2')?'green':(collectiveKitchenFebContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi2 == null)?'grey-2':(collectiveKitchenFebContents.kpi2 >= '0' && collectiveKitchenFebContents.kpi2 <= '2.6')?'red':(collectiveKitchenFebContents.kpi2 > '2.6' && collectiveKitchenFebContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi2 > '3.466666667' && collectiveKitchenFebContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi2 >= '4.333333333' && collectiveKitchenFebContents.kpi2 < '5.2')?'green':(collectiveKitchenFebContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi3 == null)?'grey-2':(collectiveKitchenFebContents.kpi3 >= '0' && collectiveKitchenFebContents.kpi3 <= '8')?'red':(collectiveKitchenFebContents.kpi3 > '8' && collectiveKitchenFebContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenFebContents.kpi3 > '10.66666667' && collectiveKitchenFebContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenFebContents.kpi3 >= '13.33333333' && collectiveKitchenFebContents.kpi3 < '16')?'green':(collectiveKitchenFebContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi4 == null)?'grey-2':(collectiveKitchenFebContents.kpi4 >= '0' && collectiveKitchenFebContents.kpi4 <= '0.6')?'red':(collectiveKitchenFebContents.kpi4 > '0.6' && collectiveKitchenFebContents.kpi4 <= '0.8')?'orange':(collectiveKitchenFebContents.kpi4 > '0.8' && collectiveKitchenFebContents.kpi4 < '1')?'yellow-7':(collectiveKitchenFebContents.kpi4 >= '1' && collectiveKitchenFebContents.kpi4 < '1.2')?'green':(collectiveKitchenFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi4}}
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
                              :color="(collectiveKitchenMarContents.kpi1 == null)?'grey-2':(collectiveKitchenMarContents.kpi1 >= '0' && collectiveKitchenMarContents.kpi1 <= '2.6')?'red':(collectiveKitchenMarContents.kpi1 > '2.6' && collectiveKitchenMarContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi1 > '3.466666667' && collectiveKitchenMarContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi1 >= '4.333333333' && collectiveKitchenMarContents.kpi1 < '5.2')?'green':(collectiveKitchenMarContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi2 == null)?'grey-2':(collectiveKitchenMarContents.kpi2 >= '0' && collectiveKitchenMarContents.kpi2 <= '2.6')?'red':(collectiveKitchenMarContents.kpi2 > '2.6' && collectiveKitchenMarContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi2 > '3.466666667' && collectiveKitchenMarContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi2 >= '4.333333333' && collectiveKitchenMarContents.kpi2 < '5.2')?'green':(collectiveKitchenMarContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi3 == null)?'grey-2':(collectiveKitchenMarContents.kpi3 >= '0' && collectiveKitchenMarContents.kpi3 <= '8')?'red':(collectiveKitchenMarContents.kpi3 > '8' && collectiveKitchenMarContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMarContents.kpi3 > '10.66666667' && collectiveKitchenMarContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMarContents.kpi3 >= '13.33333333' && collectiveKitchenMarContents.kpi3 < '16')?'green':(collectiveKitchenMarContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi4 == null)?'grey-2':(collectiveKitchenMarContents.kpi4 >= '0' && collectiveKitchenMarContents.kpi4 <= '0.6')?'red':(collectiveKitchenMarContents.kpi4 > '0.6' && collectiveKitchenMarContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMarContents.kpi4 > '0.8' && collectiveKitchenMarContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMarContents.kpi4 >= '1' && collectiveKitchenMarContents.kpi4 < '1.2')?'green':(collectiveKitchenMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi4}}
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
                              :color="(collectiveKitchenAprContents.kpi1 == null)?'grey-2':(collectiveKitchenAprContents.kpi1 >= '0' && collectiveKitchenAprContents.kpi1 <= '2.6')?'red':(collectiveKitchenAprContents.kpi1 > '2.6' && collectiveKitchenAprContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi1 > '3.466666667' && collectiveKitchenAprContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi1 >= '4.333333333' && collectiveKitchenAprContents.kpi1 < '5.2')?'green':(collectiveKitchenAprContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi2 == null)?'grey-2':(collectiveKitchenAprContents.kpi2 >= '0' && collectiveKitchenAprContents.kpi2 <= '2.6')?'red':(collectiveKitchenAprContents.kpi2 > '2.6' && collectiveKitchenAprContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi2 > '3.466666667' && collectiveKitchenAprContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi2 >= '4.333333333' && collectiveKitchenAprContents.kpi2 < '5.2')?'green':(collectiveKitchenAprContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi3 == null)?'grey-2':(collectiveKitchenAprContents.kpi3 >= '0' && collectiveKitchenAprContents.kpi3 <= '8')?'red':(collectiveKitchenAprContents.kpi3 > '8' && collectiveKitchenAprContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAprContents.kpi3 > '10.66666667' && collectiveKitchenAprContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAprContents.kpi3 >= '13.33333333' && collectiveKitchenAprContents.kpi3 < '16')?'green':(collectiveKitchenAprContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi4 == null)?'grey-2':(collectiveKitchenAprContents.kpi4 >= '0' && collectiveKitchenAprContents.kpi4 <= '0.6')?'red':(collectiveKitchenAprContents.kpi4 > '0.6' && collectiveKitchenAprContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAprContents.kpi4 > '0.8' && collectiveKitchenAprContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAprContents.kpi4 >= '1' && collectiveKitchenAprContents.kpi4 < '1.2')?'green':(collectiveKitchenAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi4}}
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
                              :color="(collectiveKitchenMayContents.kpi1 == null)?'grey-2':(collectiveKitchenMayContents.kpi1 >= '0' && collectiveKitchenMayContents.kpi1 <= '2.6')?'red':(collectiveKitchenMayContents.kpi1 > '2.6' && collectiveKitchenMayContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi1 > '3.466666667' && collectiveKitchenMayContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi1 >= '4.333333333' && collectiveKitchenMayContents.kpi1 < '5.2')?'green':(collectiveKitchenMayContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi2 == null)?'grey-2':(collectiveKitchenMayContents.kpi2 >= '0' && collectiveKitchenMayContents.kpi2 <= '2.6')?'red':(collectiveKitchenMayContents.kpi2 > '2.6' && collectiveKitchenMayContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi2 > '3.466666667' && collectiveKitchenMayContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi2 >= '4.333333333' && collectiveKitchenMayContents.kpi2 < '5.2')?'green':(collectiveKitchenMayContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi3 == null)?'grey-2':(collectiveKitchenMayContents.kpi3 >= '0' && collectiveKitchenMayContents.kpi3 <= '8')?'red':(collectiveKitchenMayContents.kpi3 > '8' && collectiveKitchenMayContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMayContents.kpi3 > '10.66666667' && collectiveKitchenMayContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMayContents.kpi3 >= '13.33333333' && collectiveKitchenMayContents.kpi3 < '16')?'green':(collectiveKitchenMayContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi4 == null)?'grey-2':(collectiveKitchenMayContents.kpi4 >= '0' && collectiveKitchenMayContents.kpi4 <= '0.6')?'red':(collectiveKitchenMayContents.kpi4 > '0.6' && collectiveKitchenMayContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMayContents.kpi4 > '0.8' && collectiveKitchenMayContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMayContents.kpi4 >= '1' && collectiveKitchenMayContents.kpi4 < '1.2')?'green':(collectiveKitchenMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi4}}
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
                              :color="(collectiveKitchenJunContents.kpi1 == null)?'grey-2':(collectiveKitchenJunContents.kpi1 >= '0' && collectiveKitchenJunContents.kpi1 <= '2.6')?'red':(collectiveKitchenJunContents.kpi1 > '2.6' && collectiveKitchenJunContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi1 > '3.466666667' && collectiveKitchenJunContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi1 >= '4.333333333' && collectiveKitchenJunContents.kpi1 < '5.2')?'green':(collectiveKitchenJunContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi2 == null)?'grey-2':(collectiveKitchenJunContents.kpi2 >= '0' && collectiveKitchenJunContents.kpi2 <= '2.6')?'red':(collectiveKitchenJunContents.kpi2 > '2.6' && collectiveKitchenJunContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi2 > '3.466666667' && collectiveKitchenJunContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi2 >= '4.333333333' && collectiveKitchenJunContents.kpi2 < '5.2')?'green':(collectiveKitchenJunContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi3 == null)?'grey-2':(collectiveKitchenJunContents.kpi3 >= '0' && collectiveKitchenJunContents.kpi3 <= '8')?'red':(collectiveKitchenJunContents.kpi3 > '8' && collectiveKitchenJunContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJunContents.kpi3 > '10.66666667' && collectiveKitchenJunContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJunContents.kpi3 >= '13.33333333' && collectiveKitchenJunContents.kpi3 < '16')?'green':(collectiveKitchenJunContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi4 == null)?'grey-2':(collectiveKitchenJunContents.kpi4 >= '0' && collectiveKitchenJunContents.kpi4 <= '0.6')?'red':(collectiveKitchenJunContents.kpi4 > '0.6' && collectiveKitchenJunContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJunContents.kpi4 > '0.8' && collectiveKitchenJunContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJunContents.kpi4 >= '1' && collectiveKitchenJunContents.kpi4 < '1.2')?'green':(collectiveKitchenJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi4}}
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
                              :color="(collectiveKitchenJulContents.kpi1 == null)?'grey-2':(collectiveKitchenJulContents.kpi1 >= '0' && collectiveKitchenJulContents.kpi1 <= '2.6')?'red':(collectiveKitchenJulContents.kpi1 > '2.6' && collectiveKitchenJulContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi1 > '3.466666667' && collectiveKitchenJulContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi1 >= '4.333333333' && collectiveKitchenJulContents.kpi1 < '5.2')?'green':(collectiveKitchenJulContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi2 == null)?'grey-2':(collectiveKitchenJulContents.kpi2 >= '0' && collectiveKitchenJulContents.kpi2 <= '2.6')?'red':(collectiveKitchenJulContents.kpi2 > '2.6' && collectiveKitchenJulContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi2 > '3.466666667' && collectiveKitchenJulContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi2 >= '4.333333333' && collectiveKitchenJulContents.kpi2 < '5.2')?'green':(collectiveKitchenJulContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi3 == null)?'grey-2':(collectiveKitchenJulContents.kpi3 >= '0' && collectiveKitchenJulContents.kpi3 <= '8')?'red':(collectiveKitchenJulContents.kpi3 > '8' && collectiveKitchenJulContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJulContents.kpi3 > '10.66666667' && collectiveKitchenJulContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJulContents.kpi3 >= '13.33333333' && collectiveKitchenJulContents.kpi3 < '16')?'green':(collectiveKitchenJulContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi4 == null)?'grey-2':(collectiveKitchenJulContents.kpi4 >= '0' && collectiveKitchenJulContents.kpi4 <= '0.6')?'red':(collectiveKitchenJulContents.kpi4 > '0.6' && collectiveKitchenJulContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJulContents.kpi4 > '0.8' && collectiveKitchenJulContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJulContents.kpi4 >= '1' && collectiveKitchenJulContents.kpi4 < '1.2')?'green':(collectiveKitchenJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi4}}
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
                              :color="(collectiveKitchenAugContents.kpi1 == null)?'grey-2':(collectiveKitchenAugContents.kpi1 >= '0' && collectiveKitchenAugContents.kpi1 <= '2.6')?'red':(collectiveKitchenAugContents.kpi1 > '2.6' && collectiveKitchenAugContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi1 > '3.466666667' && collectiveKitchenAugContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi1 >= '4.333333333' && collectiveKitchenAugContents.kpi1 < '5.2')?'green':(collectiveKitchenAugContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi2 == null)?'grey-2':(collectiveKitchenAugContents.kpi2 >= '0' && collectiveKitchenAugContents.kpi2 <= '2.6')?'red':(collectiveKitchenAugContents.kpi2 > '2.6' && collectiveKitchenAugContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi2 > '3.466666667' && collectiveKitchenAugContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi2 >= '4.333333333' && collectiveKitchenAugContents.kpi2 < '5.2')?'green':(collectiveKitchenAugContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi3 == null)?'grey-2':(collectiveKitchenAugContents.kpi3 >= '0' && collectiveKitchenAugContents.kpi3 <= '8')?'red':(collectiveKitchenAugContents.kpi3 > '8' && collectiveKitchenAugContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAugContents.kpi3 > '10.66666667' && collectiveKitchenAugContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAugContents.kpi3 >= '13.33333333' && collectiveKitchenAugContents.kpi3 < '16')?'green':(collectiveKitchenAugContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi4 == null)?'grey-2':(collectiveKitchenAugContents.kpi4 >= '0' && collectiveKitchenAugContents.kpi4 <= '0.6')?'red':(collectiveKitchenAugContents.kpi4 > '0.6' && collectiveKitchenAugContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAugContents.kpi4 > '0.8' && collectiveKitchenAugContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAugContents.kpi4 >= '1' && collectiveKitchenAugContents.kpi4 < '1.2')?'green':(collectiveKitchenAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi4}}
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
                              :color="(collectiveKitchenSepContents.kpi1 == null)?'grey-2':(collectiveKitchenSepContents.kpi1 >= '0' && collectiveKitchenSepContents.kpi1 <= '2.6')?'red':(collectiveKitchenSepContents.kpi1 > '2.6' && collectiveKitchenSepContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi1 > '3.466666667' && collectiveKitchenSepContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi1 >= '4.333333333' && collectiveKitchenSepContents.kpi1 < '5.2')?'green':(collectiveKitchenSepContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi2 == null)?'grey-2':(collectiveKitchenSepContents.kpi2 >= '0' && collectiveKitchenSepContents.kpi2 <= '2.6')?'red':(collectiveKitchenSepContents.kpi2 > '2.6' && collectiveKitchenSepContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi2 > '3.466666667' && collectiveKitchenSepContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi2 >= '4.333333333' && collectiveKitchenSepContents.kpi2 < '5.2')?'green':(collectiveKitchenSepContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi3 == null)?'grey-2':(collectiveKitchenSepContents.kpi3 >= '0' && collectiveKitchenSepContents.kpi3 <= '8')?'red':(collectiveKitchenSepContents.kpi3 > '8' && collectiveKitchenSepContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenSepContents.kpi3 > '10.66666667' && collectiveKitchenSepContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenSepContents.kpi3 >= '13.33333333' && collectiveKitchenSepContents.kpi3 < '16')?'green':(collectiveKitchenSepContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi4 == null)?'grey-2':(collectiveKitchenSepContents.kpi4 >= '0' && collectiveKitchenSepContents.kpi4 <= '0.6')?'red':(collectiveKitchenSepContents.kpi4 > '0.6' && collectiveKitchenSepContents.kpi4 <= '0.8')?'orange':(collectiveKitchenSepContents.kpi4 > '0.8' && collectiveKitchenSepContents.kpi4 < '1')?'yellow-7':(collectiveKitchenSepContents.kpi4 >= '1' && collectiveKitchenSepContents.kpi4 < '1.2')?'green':(collectiveKitchenSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi4}}
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
                              :color="(collectiveKitchenOctContents.kpi1 == null)?'grey-2':(collectiveKitchenOctContents.kpi1 >= '0' && collectiveKitchenOctContents.kpi1 <= '2.6')?'red':(collectiveKitchenOctContents.kpi1 > '2.6' && collectiveKitchenOctContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi1 > '3.466666667' && collectiveKitchenOctContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi1 >= '4.333333333' && collectiveKitchenOctContents.kpi1 < '5.2')?'green':(collectiveKitchenOctContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi2 == null)?'grey-2':(collectiveKitchenOctContents.kpi2 >= '0' && collectiveKitchenOctContents.kpi2 <= '2.6')?'red':(collectiveKitchenOctContents.kpi2 > '2.6' && collectiveKitchenOctContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi2 > '3.466666667' && collectiveKitchenOctContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi2 >= '4.333333333' && collectiveKitchenOctContents.kpi2 < '5.2')?'green':(collectiveKitchenOctContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi3 == null)?'grey-2':(collectiveKitchenOctContents.kpi3 >= '0' && collectiveKitchenOctContents.kpi3 <= '8')?'red':(collectiveKitchenOctContents.kpi3 > '8' && collectiveKitchenOctContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenOctContents.kpi3 > '10.66666667' && collectiveKitchenOctContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenOctContents.kpi3 >= '13.33333333' && collectiveKitchenOctContents.kpi3 < '16')?'green':(collectiveKitchenOctContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi4 == null)?'grey-2':(collectiveKitchenOctContents.kpi4 >= '0' && collectiveKitchenOctContents.kpi4 <= '0.6')?'red':(collectiveKitchenOctContents.kpi4 > '0.6' && collectiveKitchenOctContents.kpi4 <= '0.8')?'orange':(collectiveKitchenOctContents.kpi4 > '0.8' && collectiveKitchenOctContents.kpi4 < '1')?'yellow-7':(collectiveKitchenOctContents.kpi4 >= '1' && collectiveKitchenOctContents.kpi4 < '1.2')?'green':(collectiveKitchenOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi4}}
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
                              :color="(collectiveKitchenNovContents.kpi1 == null)?'grey-2':(collectiveKitchenNovContents.kpi1 >= '0' && collectiveKitchenNovContents.kpi1 <= '2.6')?'red':(collectiveKitchenNovContents.kpi1 > '2.6' && collectiveKitchenNovContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi1 > '3.466666667' && collectiveKitchenNovContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi1 >= '4.333333333' && collectiveKitchenNovContents.kpi1 < '5.2')?'green':(collectiveKitchenNovContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi2 == null)?'grey-2':(collectiveKitchenNovContents.kpi2 >= '0' && collectiveKitchenNovContents.kpi2 <= '2.6')?'red':(collectiveKitchenNovContents.kpi2 > '2.6' && collectiveKitchenNovContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi2 > '3.466666667' && collectiveKitchenNovContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi2 >= '4.333333333' && collectiveKitchenNovContents.kpi2 < '5.2')?'green':(collectiveKitchenNovContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi3 == null)?'grey-2':(collectiveKitchenNovContents.kpi3 >= '0' && collectiveKitchenNovContents.kpi3 <= '8')?'red':(collectiveKitchenNovContents.kpi3 > '8' && collectiveKitchenNovContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenNovContents.kpi3 > '10.66666667' && collectiveKitchenNovContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenNovContents.kpi3 >= '13.33333333' && collectiveKitchenNovContents.kpi3 < '16')?'green':(collectiveKitchenNovContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi4 == null)?'grey-2':(collectiveKitchenNovContents.kpi4 >= '0' && collectiveKitchenNovContents.kpi4 <= '0.6')?'red':(collectiveKitchenNovContents.kpi4 > '0.6' && collectiveKitchenNovContents.kpi4 <= '0.8')?'orange':(collectiveKitchenNovContents.kpi4 > '0.8' && collectiveKitchenNovContents.kpi4 < '1')?'yellow-7':(collectiveKitchenNovContents.kpi4 >= '1' && collectiveKitchenNovContents.kpi4 < '1.2')?'green':(collectiveKitchenNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi4}}
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
                              :color="(collectiveKitchenDecContents.kpi1 == null)?'grey-2':(collectiveKitchenDecContents.kpi1 >= '0' && collectiveKitchenDecContents.kpi1 <= '2.6')?'red':(collectiveKitchenDecContents.kpi1 > '2.6' && collectiveKitchenDecContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi1 > '3.466666667' && collectiveKitchenDecContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi1 >= '4.333333333' && collectiveKitchenDecContents.kpi1 < '5.2')?'green':(collectiveKitchenDecContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi2 == null)?'grey-2':(collectiveKitchenDecContents.kpi2 >= '0' && collectiveKitchenDecContents.kpi2 <= '2.6')?'red':(collectiveKitchenDecContents.kpi2 > '2.6' && collectiveKitchenDecContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi2 > '3.466666667' && collectiveKitchenDecContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi2 >= '4.333333333' && collectiveKitchenDecContents.kpi2 < '5.2')?'green':(collectiveKitchenDecContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi3 == null)?'grey-2':(collectiveKitchenDecContents.kpi3 >= '0' && collectiveKitchenDecContents.kpi3 <= '8')?'red':(collectiveKitchenDecContents.kpi3 > '8' && collectiveKitchenDecContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenDecContents.kpi3 > '10.66666667' && collectiveKitchenDecContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenDecContents.kpi3 >= '13.33333333' && collectiveKitchenDecContents.kpi3 < '16')?'green':(collectiveKitchenDecContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi4 == null)?'grey-2':(collectiveKitchenDecContents.kpi4 >= '0' && collectiveKitchenDecContents.kpi4 <= '0.6')?'red':(collectiveKitchenDecContents.kpi4 > '0.6' && collectiveKitchenDecContents.kpi4 <= '0.8')?'orange':(collectiveKitchenDecContents.kpi4 > '0.8' && collectiveKitchenDecContents.kpi4 < '1')?'yellow-7':(collectiveKitchenDecContents.kpi4 >= '1' && collectiveKitchenDecContents.kpi4 < '1.2')?'green':(collectiveKitchenDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi4}}
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
                              :color="(collectiveKitchenJanContents.kpi1 == null)?'grey-2':(collectiveKitchenJanContents.kpi1 >= '0' && collectiveKitchenJanContents.kpi1 <= '2.6')?'red':(collectiveKitchenJanContents.kpi1 > '2.6' && collectiveKitchenJanContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi1 > '3.466666667' && collectiveKitchenJanContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi1 >= '4.333333333' && collectiveKitchenJanContents.kpi1 < '5.2')?'green':(collectiveKitchenJanContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi2 == null)?'grey-2':(collectiveKitchenJanContents.kpi2 >= '0' && collectiveKitchenJanContents.kpi2 <= '2.6')?'red':(collectiveKitchenJanContents.kpi2 > '2.6' && collectiveKitchenJanContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi2 > '3.466666667' && collectiveKitchenJanContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi2 >= '4.333333333' && collectiveKitchenJanContents.kpi2 < '5.2')?'green':(collectiveKitchenJanContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi3 == null)?'grey-2':(collectiveKitchenJanContents.kpi3 >= '0' && collectiveKitchenJanContents.kpi3 <= '8')?'red':(collectiveKitchenJanContents.kpi3 > '8' && collectiveKitchenJanContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJanContents.kpi3 > '10.66666667' && collectiveKitchenJanContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJanContents.kpi3 >= '13.33333333' && collectiveKitchenJanContents.kpi3 < '16')?'green':(collectiveKitchenJanContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi4 == null)?'grey-2':(collectiveKitchenJanContents.kpi4 >= '0' && collectiveKitchenJanContents.kpi4 <= '0.6')?'red':(collectiveKitchenJanContents.kpi4 > '0.6' && collectiveKitchenJanContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJanContents.kpi4 > '0.8' && collectiveKitchenJanContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJanContents.kpi4 >= '1' && collectiveKitchenJanContents.kpi4 < '1.2')?'green':(collectiveKitchenJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi4}}
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
                              :color="(collectiveKitchenFebContents.kpi1 == null)?'grey-2':(collectiveKitchenFebContents.kpi1 >= '0' && collectiveKitchenFebContents.kpi1 <= '2.6')?'red':(collectiveKitchenFebContents.kpi1 > '2.6' && collectiveKitchenFebContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi1 > '3.466666667' && collectiveKitchenFebContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi1 >= '4.333333333' && collectiveKitchenFebContents.kpi1 < '5.2')?'green':(collectiveKitchenFebContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi2 == null)?'grey-2':(collectiveKitchenFebContents.kpi2 >= '0' && collectiveKitchenFebContents.kpi2 <= '2.6')?'red':(collectiveKitchenFebContents.kpi2 > '2.6' && collectiveKitchenFebContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi2 > '3.466666667' && collectiveKitchenFebContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi2 >= '4.333333333' && collectiveKitchenFebContents.kpi2 < '5.2')?'green':(collectiveKitchenFebContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi3 == null)?'grey-2':(collectiveKitchenFebContents.kpi3 >= '0' && collectiveKitchenFebContents.kpi3 <= '8')?'red':(collectiveKitchenFebContents.kpi3 > '8' && collectiveKitchenFebContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenFebContents.kpi3 > '10.66666667' && collectiveKitchenFebContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenFebContents.kpi3 >= '13.33333333' && collectiveKitchenFebContents.kpi3 < '16')?'green':(collectiveKitchenFebContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi4 == null)?'grey-2':(collectiveKitchenFebContents.kpi4 >= '0' && collectiveKitchenFebContents.kpi4 <= '0.6')?'red':(collectiveKitchenFebContents.kpi4 > '0.6' && collectiveKitchenFebContents.kpi4 <= '0.8')?'orange':(collectiveKitchenFebContents.kpi4 > '0.8' && collectiveKitchenFebContents.kpi4 < '1')?'yellow-7':(collectiveKitchenFebContents.kpi4 >= '1' && collectiveKitchenFebContents.kpi4 < '1.2')?'green':(collectiveKitchenFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi4}}
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
                              :color="(collectiveKitchenMarContents.kpi1 == null)?'grey-2':(collectiveKitchenMarContents.kpi1 >= '0' && collectiveKitchenMarContents.kpi1 <= '2.6')?'red':(collectiveKitchenMarContents.kpi1 > '2.6' && collectiveKitchenMarContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi1 > '3.466666667' && collectiveKitchenMarContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi1 >= '4.333333333' && collectiveKitchenMarContents.kpi1 < '5.2')?'green':(collectiveKitchenMarContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi2 == null)?'grey-2':(collectiveKitchenMarContents.kpi2 >= '0' && collectiveKitchenMarContents.kpi2 <= '2.6')?'red':(collectiveKitchenMarContents.kpi2 > '2.6' && collectiveKitchenMarContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi2 > '3.466666667' && collectiveKitchenMarContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi2 >= '4.333333333' && collectiveKitchenMarContents.kpi2 < '5.2')?'green':(collectiveKitchenMarContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi3 == null)?'grey-2':(collectiveKitchenMarContents.kpi3 >= '0' && collectiveKitchenMarContents.kpi3 <= '8')?'red':(collectiveKitchenMarContents.kpi3 > '8' && collectiveKitchenMarContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMarContents.kpi3 > '10.66666667' && collectiveKitchenMarContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMarContents.kpi3 >= '13.33333333' && collectiveKitchenMarContents.kpi3 < '16')?'green':(collectiveKitchenMarContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi4 == null)?'grey-2':(collectiveKitchenMarContents.kpi4 >= '0' && collectiveKitchenMarContents.kpi4 <= '0.6')?'red':(collectiveKitchenMarContents.kpi4 > '0.6' && collectiveKitchenMarContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMarContents.kpi4 > '0.8' && collectiveKitchenMarContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMarContents.kpi4 >= '1' && collectiveKitchenMarContents.kpi4 < '1.2')?'green':(collectiveKitchenMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi4}}
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
                              :color="(collectiveKitchenAprContents.kpi1 == null)?'grey-2':(collectiveKitchenAprContents.kpi1 >= '0' && collectiveKitchenAprContents.kpi1 <= '2.6')?'red':(collectiveKitchenAprContents.kpi1 > '2.6' && collectiveKitchenAprContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi1 > '3.466666667' && collectiveKitchenAprContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi1 >= '4.333333333' && collectiveKitchenAprContents.kpi1 < '5.2')?'green':(collectiveKitchenAprContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi2 == null)?'grey-2':(collectiveKitchenAprContents.kpi2 >= '0' && collectiveKitchenAprContents.kpi2 <= '2.6')?'red':(collectiveKitchenAprContents.kpi2 > '2.6' && collectiveKitchenAprContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi2 > '3.466666667' && collectiveKitchenAprContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi2 >= '4.333333333' && collectiveKitchenAprContents.kpi2 < '5.2')?'green':(collectiveKitchenAprContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi3 == null)?'grey-2':(collectiveKitchenAprContents.kpi3 >= '0' && collectiveKitchenAprContents.kpi3 <= '8')?'red':(collectiveKitchenAprContents.kpi3 > '8' && collectiveKitchenAprContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAprContents.kpi3 > '10.66666667' && collectiveKitchenAprContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAprContents.kpi3 >= '13.33333333' && collectiveKitchenAprContents.kpi3 < '16')?'green':(collectiveKitchenAprContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi4 == null)?'grey-2':(collectiveKitchenAprContents.kpi4 >= '0' && collectiveKitchenAprContents.kpi4 <= '0.6')?'red':(collectiveKitchenAprContents.kpi4 > '0.6' && collectiveKitchenAprContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAprContents.kpi4 > '0.8' && collectiveKitchenAprContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAprContents.kpi4 >= '1' && collectiveKitchenAprContents.kpi4 < '1.2')?'green':(collectiveKitchenAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi4}}
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
                              :color="(collectiveKitchenMayContents.kpi1 == null)?'grey-2':(collectiveKitchenMayContents.kpi1 >= '0' && collectiveKitchenMayContents.kpi1 <= '2.6')?'red':(collectiveKitchenMayContents.kpi1 > '2.6' && collectiveKitchenMayContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi1 > '3.466666667' && collectiveKitchenMayContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi1 >= '4.333333333' && collectiveKitchenMayContents.kpi1 < '5.2')?'green':(collectiveKitchenMayContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi2 == null)?'grey-2':(collectiveKitchenMayContents.kpi2 >= '0' && collectiveKitchenMayContents.kpi2 <= '2.6')?'red':(collectiveKitchenMayContents.kpi2 > '2.6' && collectiveKitchenMayContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi2 > '3.466666667' && collectiveKitchenMayContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi2 >= '4.333333333' && collectiveKitchenMayContents.kpi2 < '5.2')?'green':(collectiveKitchenMayContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi3 == null)?'grey-2':(collectiveKitchenMayContents.kpi3 >= '0' && collectiveKitchenMayContents.kpi3 <= '8')?'red':(collectiveKitchenMayContents.kpi3 > '8' && collectiveKitchenMayContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMayContents.kpi3 > '10.66666667' && collectiveKitchenMayContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMayContents.kpi3 >= '13.33333333' && collectiveKitchenMayContents.kpi3 < '16')?'green':(collectiveKitchenMayContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi4 == null)?'grey-2':(collectiveKitchenMayContents.kpi4 >= '0' && collectiveKitchenMayContents.kpi4 <= '0.6')?'red':(collectiveKitchenMayContents.kpi4 > '0.6' && collectiveKitchenMayContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMayContents.kpi4 > '0.8' && collectiveKitchenMayContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMayContents.kpi4 >= '1' && collectiveKitchenMayContents.kpi4 < '1.2')?'green':(collectiveKitchenMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi4}}
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
                              :color="(collectiveKitchenJunContents.kpi1 == null)?'grey-2':(collectiveKitchenJunContents.kpi1 >= '0' && collectiveKitchenJunContents.kpi1 <= '2.6')?'red':(collectiveKitchenJunContents.kpi1 > '2.6' && collectiveKitchenJunContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi1 > '3.466666667' && collectiveKitchenJunContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi1 >= '4.333333333' && collectiveKitchenJunContents.kpi1 < '5.2')?'green':(collectiveKitchenJunContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi2 == null)?'grey-2':(collectiveKitchenJunContents.kpi2 >= '0' && collectiveKitchenJunContents.kpi2 <= '2.6')?'red':(collectiveKitchenJunContents.kpi2 > '2.6' && collectiveKitchenJunContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi2 > '3.466666667' && collectiveKitchenJunContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi2 >= '4.333333333' && collectiveKitchenJunContents.kpi2 < '5.2')?'green':(collectiveKitchenJunContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi3 == null)?'grey-2':(collectiveKitchenJunContents.kpi3 >= '0' && collectiveKitchenJunContents.kpi3 <= '8')?'red':(collectiveKitchenJunContents.kpi3 > '8' && collectiveKitchenJunContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJunContents.kpi3 > '10.66666667' && collectiveKitchenJunContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJunContents.kpi3 >= '13.33333333' && collectiveKitchenJunContents.kpi3 < '16')?'green':(collectiveKitchenJunContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi4 == null)?'grey-2':(collectiveKitchenJunContents.kpi4 >= '0' && collectiveKitchenJunContents.kpi4 <= '0.6')?'red':(collectiveKitchenJunContents.kpi4 > '0.6' && collectiveKitchenJunContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJunContents.kpi4 > '0.8' && collectiveKitchenJunContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJunContents.kpi4 >= '1' && collectiveKitchenJunContents.kpi4 < '1.2')?'green':(collectiveKitchenJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi4}}
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
                              :color="(collectiveKitchenJulContents.kpi1 == null)?'grey-2':(collectiveKitchenJulContents.kpi1 >= '0' && collectiveKitchenJulContents.kpi1 <= '2.6')?'red':(collectiveKitchenJulContents.kpi1 > '2.6' && collectiveKitchenJulContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi1 > '3.466666667' && collectiveKitchenJulContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi1 >= '4.333333333' && collectiveKitchenJulContents.kpi1 < '5.2')?'green':(collectiveKitchenJulContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi2 == null)?'grey-2':(collectiveKitchenJulContents.kpi2 >= '0' && collectiveKitchenJulContents.kpi2 <= '2.6')?'red':(collectiveKitchenJulContents.kpi2 > '2.6' && collectiveKitchenJulContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi2 > '3.466666667' && collectiveKitchenJulContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi2 >= '4.333333333' && collectiveKitchenJulContents.kpi2 < '5.2')?'green':(collectiveKitchenJulContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi3 == null)?'grey-2':(collectiveKitchenJulContents.kpi3 >= '0' && collectiveKitchenJulContents.kpi3 <= '8')?'red':(collectiveKitchenJulContents.kpi3 > '8' && collectiveKitchenJulContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJulContents.kpi3 > '10.66666667' && collectiveKitchenJulContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJulContents.kpi3 >= '13.33333333' && collectiveKitchenJulContents.kpi3 < '16')?'green':(collectiveKitchenJulContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi4 == null)?'grey-2':(collectiveKitchenJulContents.kpi4 >= '0' && collectiveKitchenJulContents.kpi4 <= '0.6')?'red':(collectiveKitchenJulContents.kpi4 > '0.6' && collectiveKitchenJulContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJulContents.kpi4 > '0.8' && collectiveKitchenJulContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJulContents.kpi4 >= '1' && collectiveKitchenJulContents.kpi4 < '1.2')?'green':(collectiveKitchenJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi4}}
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
                              :color="(collectiveKitchenAugContents.kpi1 == null)?'grey-2':(collectiveKitchenAugContents.kpi1 >= '0' && collectiveKitchenAugContents.kpi1 <= '2.6')?'red':(collectiveKitchenAugContents.kpi1 > '2.6' && collectiveKitchenAugContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi1 > '3.466666667' && collectiveKitchenAugContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi1 >= '4.333333333' && collectiveKitchenAugContents.kpi1 < '5.2')?'green':(collectiveKitchenAugContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi2 == null)?'grey-2':(collectiveKitchenAugContents.kpi2 >= '0' && collectiveKitchenAugContents.kpi2 <= '2.6')?'red':(collectiveKitchenAugContents.kpi2 > '2.6' && collectiveKitchenAugContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi2 > '3.466666667' && collectiveKitchenAugContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi2 >= '4.333333333' && collectiveKitchenAugContents.kpi2 < '5.2')?'green':(collectiveKitchenAugContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi3 == null)?'grey-2':(collectiveKitchenAugContents.kpi3 >= '0' && collectiveKitchenAugContents.kpi3 <= '8')?'red':(collectiveKitchenAugContents.kpi3 > '8' && collectiveKitchenAugContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAugContents.kpi3 > '10.66666667' && collectiveKitchenAugContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAugContents.kpi3 >= '13.33333333' && collectiveKitchenAugContents.kpi3 < '16')?'green':(collectiveKitchenAugContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi4 == null)?'grey-2':(collectiveKitchenAugContents.kpi4 >= '0' && collectiveKitchenAugContents.kpi4 <= '0.6')?'red':(collectiveKitchenAugContents.kpi4 > '0.6' && collectiveKitchenAugContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAugContents.kpi4 > '0.8' && collectiveKitchenAugContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAugContents.kpi4 >= '1' && collectiveKitchenAugContents.kpi4 < '1.2')?'green':(collectiveKitchenAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi4}}
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
                              :color="(collectiveKitchenSepContents.kpi1 == null)?'grey-2':(collectiveKitchenSepContents.kpi1 >= '0' && collectiveKitchenSepContents.kpi1 <= '2.6')?'red':(collectiveKitchenSepContents.kpi1 > '2.6' && collectiveKitchenSepContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi1 > '3.466666667' && collectiveKitchenSepContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi1 >= '4.333333333' && collectiveKitchenSepContents.kpi1 < '5.2')?'green':(collectiveKitchenSepContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi2 == null)?'grey-2':(collectiveKitchenSepContents.kpi2 >= '0' && collectiveKitchenSepContents.kpi2 <= '2.6')?'red':(collectiveKitchenSepContents.kpi2 > '2.6' && collectiveKitchenSepContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi2 > '3.466666667' && collectiveKitchenSepContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi2 >= '4.333333333' && collectiveKitchenSepContents.kpi2 < '5.2')?'green':(collectiveKitchenSepContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi3 == null)?'grey-2':(collectiveKitchenSepContents.kpi3 >= '0' && collectiveKitchenSepContents.kpi3 <= '8')?'red':(collectiveKitchenSepContents.kpi3 > '8' && collectiveKitchenSepContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenSepContents.kpi3 > '10.66666667' && collectiveKitchenSepContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenSepContents.kpi3 >= '13.33333333' && collectiveKitchenSepContents.kpi3 < '16')?'green':(collectiveKitchenSepContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi4 == null)?'grey-2':(collectiveKitchenSepContents.kpi4 >= '0' && collectiveKitchenSepContents.kpi4 <= '0.6')?'red':(collectiveKitchenSepContents.kpi4 > '0.6' && collectiveKitchenSepContents.kpi4 <= '0.8')?'orange':(collectiveKitchenSepContents.kpi4 > '0.8' && collectiveKitchenSepContents.kpi4 < '1')?'yellow-7':(collectiveKitchenSepContents.kpi4 >= '1' && collectiveKitchenSepContents.kpi4 < '1.2')?'green':(collectiveKitchenSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi4}}
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
                              :color="(collectiveKitchenOctContents.kpi1 == null)?'grey-2':(collectiveKitchenOctContents.kpi1 >= '0' && collectiveKitchenOctContents.kpi1 <= '2.6')?'red':(collectiveKitchenOctContents.kpi1 > '2.6' && collectiveKitchenOctContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi1 > '3.466666667' && collectiveKitchenOctContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi1 >= '4.333333333' && collectiveKitchenOctContents.kpi1 < '5.2')?'green':(collectiveKitchenOctContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi2 == null)?'grey-2':(collectiveKitchenOctContents.kpi2 >= '0' && collectiveKitchenOctContents.kpi2 <= '2.6')?'red':(collectiveKitchenOctContents.kpi2 > '2.6' && collectiveKitchenOctContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi2 > '3.466666667' && collectiveKitchenOctContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi2 >= '4.333333333' && collectiveKitchenOctContents.kpi2 < '5.2')?'green':(collectiveKitchenOctContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi3 == null)?'grey-2':(collectiveKitchenOctContents.kpi3 >= '0' && collectiveKitchenOctContents.kpi3 <= '8')?'red':(collectiveKitchenOctContents.kpi3 > '8' && collectiveKitchenOctContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenOctContents.kpi3 > '10.66666667' && collectiveKitchenOctContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenOctContents.kpi3 >= '13.33333333' && collectiveKitchenOctContents.kpi3 < '16')?'green':(collectiveKitchenOctContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi4 == null)?'grey-2':(collectiveKitchenOctContents.kpi4 >= '0' && collectiveKitchenOctContents.kpi4 <= '0.6')?'red':(collectiveKitchenOctContents.kpi4 > '0.6' && collectiveKitchenOctContents.kpi4 <= '0.8')?'orange':(collectiveKitchenOctContents.kpi4 > '0.8' && collectiveKitchenOctContents.kpi4 < '1')?'yellow-7':(collectiveKitchenOctContents.kpi4 >= '1' && collectiveKitchenOctContents.kpi4 < '1.2')?'green':(collectiveKitchenOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi4}}
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
                              :color="(collectiveKitchenNovContents.kpi1 == null)?'grey-2':(collectiveKitchenNovContents.kpi1 >= '0' && collectiveKitchenNovContents.kpi1 <= '2.6')?'red':(collectiveKitchenNovContents.kpi1 > '2.6' && collectiveKitchenNovContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi1 > '3.466666667' && collectiveKitchenNovContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi1 >= '4.333333333' && collectiveKitchenNovContents.kpi1 < '5.2')?'green':(collectiveKitchenNovContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi2 == null)?'grey-2':(collectiveKitchenNovContents.kpi2 >= '0' && collectiveKitchenNovContents.kpi2 <= '2.6')?'red':(collectiveKitchenNovContents.kpi2 > '2.6' && collectiveKitchenNovContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi2 > '3.466666667' && collectiveKitchenNovContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi2 >= '4.333333333' && collectiveKitchenNovContents.kpi2 < '5.2')?'green':(collectiveKitchenNovContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi3 == null)?'grey-2':(collectiveKitchenNovContents.kpi3 >= '0' && collectiveKitchenNovContents.kpi3 <= '8')?'red':(collectiveKitchenNovContents.kpi3 > '8' && collectiveKitchenNovContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenNovContents.kpi3 > '10.66666667' && collectiveKitchenNovContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenNovContents.kpi3 >= '13.33333333' && collectiveKitchenNovContents.kpi3 < '16')?'green':(collectiveKitchenNovContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi4 == null)?'grey-2':(collectiveKitchenNovContents.kpi4 >= '0' && collectiveKitchenNovContents.kpi4 <= '0.6')?'red':(collectiveKitchenNovContents.kpi4 > '0.6' && collectiveKitchenNovContents.kpi4 <= '0.8')?'orange':(collectiveKitchenNovContents.kpi4 > '0.8' && collectiveKitchenNovContents.kpi4 < '1')?'yellow-7':(collectiveKitchenNovContents.kpi4 >= '1' && collectiveKitchenNovContents.kpi4 < '1.2')?'green':(collectiveKitchenNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi4}}
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
                              :color="(collectiveKitchenDecContents.kpi1 == null)?'grey-2':(collectiveKitchenDecContents.kpi1 >= '0' && collectiveKitchenDecContents.kpi1 <= '2.6')?'red':(collectiveKitchenDecContents.kpi1 > '2.6' && collectiveKitchenDecContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi1 > '3.466666667' && collectiveKitchenDecContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi1 >= '4.333333333' && collectiveKitchenDecContents.kpi1 < '5.2')?'green':(collectiveKitchenDecContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi2 == null)?'grey-2':(collectiveKitchenDecContents.kpi2 >= '0' && collectiveKitchenDecContents.kpi2 <= '2.6')?'red':(collectiveKitchenDecContents.kpi2 > '2.6' && collectiveKitchenDecContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi2 > '3.466666667' && collectiveKitchenDecContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi2 >= '4.333333333' && collectiveKitchenDecContents.kpi2 < '5.2')?'green':(collectiveKitchenDecContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi3 == null)?'grey-2':(collectiveKitchenDecContents.kpi3 >= '0' && collectiveKitchenDecContents.kpi3 <= '8')?'red':(collectiveKitchenDecContents.kpi3 > '8' && collectiveKitchenDecContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenDecContents.kpi3 > '10.66666667' && collectiveKitchenDecContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenDecContents.kpi3 >= '13.33333333' && collectiveKitchenDecContents.kpi3 < '16')?'green':(collectiveKitchenDecContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi4 == null)?'grey-2':(collectiveKitchenDecContents.kpi4 >= '0' && collectiveKitchenDecContents.kpi4 <= '0.6')?'red':(collectiveKitchenDecContents.kpi4 > '0.6' && collectiveKitchenDecContents.kpi4 <= '0.8')?'orange':(collectiveKitchenDecContents.kpi4 > '0.8' && collectiveKitchenDecContents.kpi4 < '1')?'yellow-7':(collectiveKitchenDecContents.kpi4 >= '1' && collectiveKitchenDecContents.kpi4 < '1.2')?'green':(collectiveKitchenDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi4}}
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
                              :color="(collectiveKitchenJanContents.kpi1 == null)?'grey-2':(collectiveKitchenJanContents.kpi1 >= '0' && collectiveKitchenJanContents.kpi1 <= '2.6')?'red':(collectiveKitchenJanContents.kpi1 > '2.6' && collectiveKitchenJanContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi1 > '3.466666667' && collectiveKitchenJanContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi1 >= '4.333333333' && collectiveKitchenJanContents.kpi1 < '5.2')?'green':(collectiveKitchenJanContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi2 == null)?'grey-2':(collectiveKitchenJanContents.kpi2 >= '0' && collectiveKitchenJanContents.kpi2 <= '2.6')?'red':(collectiveKitchenJanContents.kpi2 > '2.6' && collectiveKitchenJanContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi2 > '3.466666667' && collectiveKitchenJanContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi2 >= '4.333333333' && collectiveKitchenJanContents.kpi2 < '5.2')?'green':(collectiveKitchenJanContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi3 == null)?'grey-2':(collectiveKitchenJanContents.kpi3 >= '0' && collectiveKitchenJanContents.kpi3 <= '8')?'red':(collectiveKitchenJanContents.kpi3 > '8' && collectiveKitchenJanContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJanContents.kpi3 > '10.66666667' && collectiveKitchenJanContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJanContents.kpi3 >= '13.33333333' && collectiveKitchenJanContents.kpi3 < '16')?'green':(collectiveKitchenJanContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi4 == null)?'grey-2':(collectiveKitchenJanContents.kpi4 >= '0' && collectiveKitchenJanContents.kpi4 <= '0.6')?'red':(collectiveKitchenJanContents.kpi4 > '0.6' && collectiveKitchenJanContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJanContents.kpi4 > '0.8' && collectiveKitchenJanContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJanContents.kpi4 >= '1' && collectiveKitchenJanContents.kpi4 < '1.2')?'green':(collectiveKitchenJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi4}}
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
                              :color="(collectiveKitchenFebContents.kpi1 == null)?'grey-2':(collectiveKitchenFebContents.kpi1 >= '0' && collectiveKitchenFebContents.kpi1 <= '2.6')?'red':(collectiveKitchenFebContents.kpi1 > '2.6' && collectiveKitchenFebContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi1 > '3.466666667' && collectiveKitchenFebContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi1 >= '4.333333333' && collectiveKitchenFebContents.kpi1 < '5.2')?'green':(collectiveKitchenFebContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi2 == null)?'grey-2':(collectiveKitchenFebContents.kpi2 >= '0' && collectiveKitchenFebContents.kpi2 <= '2.6')?'red':(collectiveKitchenFebContents.kpi2 > '2.6' && collectiveKitchenFebContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi2 > '3.466666667' && collectiveKitchenFebContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi2 >= '4.333333333' && collectiveKitchenFebContents.kpi2 < '5.2')?'green':(collectiveKitchenFebContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi3 == null)?'grey-2':(collectiveKitchenFebContents.kpi3 >= '0' && collectiveKitchenFebContents.kpi3 <= '8')?'red':(collectiveKitchenFebContents.kpi3 > '8' && collectiveKitchenFebContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenFebContents.kpi3 > '10.66666667' && collectiveKitchenFebContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenFebContents.kpi3 >= '13.33333333' && collectiveKitchenFebContents.kpi3 < '16')?'green':(collectiveKitchenFebContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi4 == null)?'grey-2':(collectiveKitchenFebContents.kpi4 >= '0' && collectiveKitchenFebContents.kpi4 <= '0.6')?'red':(collectiveKitchenFebContents.kpi4 > '0.6' && collectiveKitchenFebContents.kpi4 <= '0.8')?'orange':(collectiveKitchenFebContents.kpi4 > '0.8' && collectiveKitchenFebContents.kpi4 < '1')?'yellow-7':(collectiveKitchenFebContents.kpi4 >= '1' && collectiveKitchenFebContents.kpi4 < '1.2')?'green':(collectiveKitchenFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi4}}
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
                              :color="(collectiveKitchenMarContents.kpi1 == null)?'grey-2':(collectiveKitchenMarContents.kpi1 >= '0' && collectiveKitchenMarContents.kpi1 <= '2.6')?'red':(collectiveKitchenMarContents.kpi1 > '2.6' && collectiveKitchenMarContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi1 > '3.466666667' && collectiveKitchenMarContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi1 >= '4.333333333' && collectiveKitchenMarContents.kpi1 < '5.2')?'green':(collectiveKitchenMarContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi2 == null)?'grey-2':(collectiveKitchenMarContents.kpi2 >= '0' && collectiveKitchenMarContents.kpi2 <= '2.6')?'red':(collectiveKitchenMarContents.kpi2 > '2.6' && collectiveKitchenMarContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi2 > '3.466666667' && collectiveKitchenMarContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi2 >= '4.333333333' && collectiveKitchenMarContents.kpi2 < '5.2')?'green':(collectiveKitchenMarContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi3 == null)?'grey-2':(collectiveKitchenMarContents.kpi3 >= '0' && collectiveKitchenMarContents.kpi3 <= '8')?'red':(collectiveKitchenMarContents.kpi3 > '8' && collectiveKitchenMarContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMarContents.kpi3 > '10.66666667' && collectiveKitchenMarContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMarContents.kpi3 >= '13.33333333' && collectiveKitchenMarContents.kpi3 < '16')?'green':(collectiveKitchenMarContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi4 == null)?'grey-2':(collectiveKitchenMarContents.kpi4 >= '0' && collectiveKitchenMarContents.kpi4 <= '0.6')?'red':(collectiveKitchenMarContents.kpi4 > '0.6' && collectiveKitchenMarContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMarContents.kpi4 > '0.8' && collectiveKitchenMarContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMarContents.kpi4 >= '1' && collectiveKitchenMarContents.kpi4 < '1.2')?'green':(collectiveKitchenMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi4}}
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
                              :color="(collectiveKitchenAprContents.kpi1 == null)?'grey-2':(collectiveKitchenAprContents.kpi1 >= '0' && collectiveKitchenAprContents.kpi1 <= '2.6')?'red':(collectiveKitchenAprContents.kpi1 > '2.6' && collectiveKitchenAprContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi1 > '3.466666667' && collectiveKitchenAprContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi1 >= '4.333333333' && collectiveKitchenAprContents.kpi1 < '5.2')?'green':(collectiveKitchenAprContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi2 == null)?'grey-2':(collectiveKitchenAprContents.kpi2 >= '0' && collectiveKitchenAprContents.kpi2 <= '2.6')?'red':(collectiveKitchenAprContents.kpi2 > '2.6' && collectiveKitchenAprContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi2 > '3.466666667' && collectiveKitchenAprContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi2 >= '4.333333333' && collectiveKitchenAprContents.kpi2 < '5.2')?'green':(collectiveKitchenAprContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi3 == null)?'grey-2':(collectiveKitchenAprContents.kpi3 >= '0' && collectiveKitchenAprContents.kpi3 <= '8')?'red':(collectiveKitchenAprContents.kpi3 > '8' && collectiveKitchenAprContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAprContents.kpi3 > '10.66666667' && collectiveKitchenAprContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAprContents.kpi3 >= '13.33333333' && collectiveKitchenAprContents.kpi3 < '16')?'green':(collectiveKitchenAprContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi4 == null)?'grey-2':(collectiveKitchenAprContents.kpi4 >= '0' && collectiveKitchenAprContents.kpi4 <= '0.6')?'red':(collectiveKitchenAprContents.kpi4 > '0.6' && collectiveKitchenAprContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAprContents.kpi4 > '0.8' && collectiveKitchenAprContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAprContents.kpi4 >= '1' && collectiveKitchenAprContents.kpi4 < '1.2')?'green':(collectiveKitchenAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi4}}
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
                              :color="(collectiveKitchenMayContents.kpi1 == null)?'grey-2':(collectiveKitchenMayContents.kpi1 >= '0' && collectiveKitchenMayContents.kpi1 <= '2.6')?'red':(collectiveKitchenMayContents.kpi1 > '2.6' && collectiveKitchenMayContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi1 > '3.466666667' && collectiveKitchenMayContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi1 >= '4.333333333' && collectiveKitchenMayContents.kpi1 < '5.2')?'green':(collectiveKitchenMayContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi2 == null)?'grey-2':(collectiveKitchenMayContents.kpi2 >= '0' && collectiveKitchenMayContents.kpi2 <= '2.6')?'red':(collectiveKitchenMayContents.kpi2 > '2.6' && collectiveKitchenMayContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi2 > '3.466666667' && collectiveKitchenMayContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi2 >= '4.333333333' && collectiveKitchenMayContents.kpi2 < '5.2')?'green':(collectiveKitchenMayContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi3 == null)?'grey-2':(collectiveKitchenMayContents.kpi3 >= '0' && collectiveKitchenMayContents.kpi3 <= '8')?'red':(collectiveKitchenMayContents.kpi3 > '8' && collectiveKitchenMayContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMayContents.kpi3 > '10.66666667' && collectiveKitchenMayContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMayContents.kpi3 >= '13.33333333' && collectiveKitchenMayContents.kpi3 < '16')?'green':(collectiveKitchenMayContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi4 == null)?'grey-2':(collectiveKitchenMayContents.kpi4 >= '0' && collectiveKitchenMayContents.kpi4 <= '0.6')?'red':(collectiveKitchenMayContents.kpi4 > '0.6' && collectiveKitchenMayContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMayContents.kpi4 > '0.8' && collectiveKitchenMayContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMayContents.kpi4 >= '1' && collectiveKitchenMayContents.kpi4 < '1.2')?'green':(collectiveKitchenMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi4}}
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
                              :color="(collectiveKitchenJunContents.kpi1 == null)?'grey-2':(collectiveKitchenJunContents.kpi1 >= '0' && collectiveKitchenJunContents.kpi1 <= '2.6')?'red':(collectiveKitchenJunContents.kpi1 > '2.6' && collectiveKitchenJunContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi1 > '3.466666667' && collectiveKitchenJunContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi1 >= '4.333333333' && collectiveKitchenJunContents.kpi1 < '5.2')?'green':(collectiveKitchenJunContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi2 == null)?'grey-2':(collectiveKitchenJunContents.kpi2 >= '0' && collectiveKitchenJunContents.kpi2 <= '2.6')?'red':(collectiveKitchenJunContents.kpi2 > '2.6' && collectiveKitchenJunContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi2 > '3.466666667' && collectiveKitchenJunContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi2 >= '4.333333333' && collectiveKitchenJunContents.kpi2 < '5.2')?'green':(collectiveKitchenJunContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi3 == null)?'grey-2':(collectiveKitchenJunContents.kpi3 >= '0' && collectiveKitchenJunContents.kpi3 <= '8')?'red':(collectiveKitchenJunContents.kpi3 > '8' && collectiveKitchenJunContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJunContents.kpi3 > '10.66666667' && collectiveKitchenJunContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJunContents.kpi3 >= '13.33333333' && collectiveKitchenJunContents.kpi3 < '16')?'green':(collectiveKitchenJunContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi4 == null)?'grey-2':(collectiveKitchenJunContents.kpi4 >= '0' && collectiveKitchenJunContents.kpi4 <= '0.6')?'red':(collectiveKitchenJunContents.kpi4 > '0.6' && collectiveKitchenJunContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJunContents.kpi4 > '0.8' && collectiveKitchenJunContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJunContents.kpi4 >= '1' && collectiveKitchenJunContents.kpi4 < '1.2')?'green':(collectiveKitchenJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi4}}
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
                              :color="(collectiveKitchenJulContents.kpi1 == null)?'grey-2':(collectiveKitchenJulContents.kpi1 >= '0' && collectiveKitchenJulContents.kpi1 <= '2.6')?'red':(collectiveKitchenJulContents.kpi1 > '2.6' && collectiveKitchenJulContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi1 > '3.466666667' && collectiveKitchenJulContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi1 >= '4.333333333' && collectiveKitchenJulContents.kpi1 < '5.2')?'green':(collectiveKitchenJulContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi2 == null)?'grey-2':(collectiveKitchenJulContents.kpi2 >= '0' && collectiveKitchenJulContents.kpi2 <= '2.6')?'red':(collectiveKitchenJulContents.kpi2 > '2.6' && collectiveKitchenJulContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi2 > '3.466666667' && collectiveKitchenJulContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi2 >= '4.333333333' && collectiveKitchenJulContents.kpi2 < '5.2')?'green':(collectiveKitchenJulContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi3 == null)?'grey-2':(collectiveKitchenJulContents.kpi3 >= '0' && collectiveKitchenJulContents.kpi3 <= '8')?'red':(collectiveKitchenJulContents.kpi3 > '8' && collectiveKitchenJulContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJulContents.kpi3 > '10.66666667' && collectiveKitchenJulContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJulContents.kpi3 >= '13.33333333' && collectiveKitchenJulContents.kpi3 < '16')?'green':(collectiveKitchenJulContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi4 == null)?'grey-2':(collectiveKitchenJulContents.kpi4 >= '0' && collectiveKitchenJulContents.kpi4 <= '0.6')?'red':(collectiveKitchenJulContents.kpi4 > '0.6' && collectiveKitchenJulContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJulContents.kpi4 > '0.8' && collectiveKitchenJulContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJulContents.kpi4 >= '1' && collectiveKitchenJulContents.kpi4 < '1.2')?'green':(collectiveKitchenJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi4}}
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
                              :color="(collectiveKitchenAugContents.kpi1 == null)?'grey-2':(collectiveKitchenAugContents.kpi1 >= '0' && collectiveKitchenAugContents.kpi1 <= '2.6')?'red':(collectiveKitchenAugContents.kpi1 > '2.6' && collectiveKitchenAugContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi1 > '3.466666667' && collectiveKitchenAugContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi1 >= '4.333333333' && collectiveKitchenAugContents.kpi1 < '5.2')?'green':(collectiveKitchenAugContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi2 == null)?'grey-2':(collectiveKitchenAugContents.kpi2 >= '0' && collectiveKitchenAugContents.kpi2 <= '2.6')?'red':(collectiveKitchenAugContents.kpi2 > '2.6' && collectiveKitchenAugContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi2 > '3.466666667' && collectiveKitchenAugContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi2 >= '4.333333333' && collectiveKitchenAugContents.kpi2 < '5.2')?'green':(collectiveKitchenAugContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi3 == null)?'grey-2':(collectiveKitchenAugContents.kpi3 >= '0' && collectiveKitchenAugContents.kpi3 <= '8')?'red':(collectiveKitchenAugContents.kpi3 > '8' && collectiveKitchenAugContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAugContents.kpi3 > '10.66666667' && collectiveKitchenAugContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAugContents.kpi3 >= '13.33333333' && collectiveKitchenAugContents.kpi3 < '16')?'green':(collectiveKitchenAugContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi4 == null)?'grey-2':(collectiveKitchenAugContents.kpi4 >= '0' && collectiveKitchenAugContents.kpi4 <= '0.6')?'red':(collectiveKitchenAugContents.kpi4 > '0.6' && collectiveKitchenAugContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAugContents.kpi4 > '0.8' && collectiveKitchenAugContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAugContents.kpi4 >= '1' && collectiveKitchenAugContents.kpi4 < '1.2')?'green':(collectiveKitchenAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi4}}
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
                              :color="(collectiveKitchenSepContents.kpi1 == null)?'grey-2':(collectiveKitchenSepContents.kpi1 >= '0' && collectiveKitchenSepContents.kpi1 <= '2.6')?'red':(collectiveKitchenSepContents.kpi1 > '2.6' && collectiveKitchenSepContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi1 > '3.466666667' && collectiveKitchenSepContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi1 >= '4.333333333' && collectiveKitchenSepContents.kpi1 < '5.2')?'green':(collectiveKitchenSepContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi2 == null)?'grey-2':(collectiveKitchenSepContents.kpi2 >= '0' && collectiveKitchenSepContents.kpi2 <= '2.6')?'red':(collectiveKitchenSepContents.kpi2 > '2.6' && collectiveKitchenSepContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi2 > '3.466666667' && collectiveKitchenSepContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi2 >= '4.333333333' && collectiveKitchenSepContents.kpi2 < '5.2')?'green':(collectiveKitchenSepContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi3 == null)?'grey-2':(collectiveKitchenSepContents.kpi3 >= '0' && collectiveKitchenSepContents.kpi3 <= '8')?'red':(collectiveKitchenSepContents.kpi3 > '8' && collectiveKitchenSepContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenSepContents.kpi3 > '10.66666667' && collectiveKitchenSepContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenSepContents.kpi3 >= '13.33333333' && collectiveKitchenSepContents.kpi3 < '16')?'green':(collectiveKitchenSepContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi4 == null)?'grey-2':(collectiveKitchenSepContents.kpi4 >= '0' && collectiveKitchenSepContents.kpi4 <= '0.6')?'red':(collectiveKitchenSepContents.kpi4 > '0.6' && collectiveKitchenSepContents.kpi4 <= '0.8')?'orange':(collectiveKitchenSepContents.kpi4 > '0.8' && collectiveKitchenSepContents.kpi4 < '1')?'yellow-7':(collectiveKitchenSepContents.kpi4 >= '1' && collectiveKitchenSepContents.kpi4 < '1.2')?'green':(collectiveKitchenSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi4}}
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
                              :color="(collectiveKitchenOctContents.kpi1 == null)?'grey-2':(collectiveKitchenOctContents.kpi1 >= '0' && collectiveKitchenOctContents.kpi1 <= '2.6')?'red':(collectiveKitchenOctContents.kpi1 > '2.6' && collectiveKitchenOctContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi1 > '3.466666667' && collectiveKitchenOctContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi1 >= '4.333333333' && collectiveKitchenOctContents.kpi1 < '5.2')?'green':(collectiveKitchenOctContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi2 == null)?'grey-2':(collectiveKitchenOctContents.kpi2 >= '0' && collectiveKitchenOctContents.kpi2 <= '2.6')?'red':(collectiveKitchenOctContents.kpi2 > '2.6' && collectiveKitchenOctContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi2 > '3.466666667' && collectiveKitchenOctContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi2 >= '4.333333333' && collectiveKitchenOctContents.kpi2 < '5.2')?'green':(collectiveKitchenOctContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi3 == null)?'grey-2':(collectiveKitchenOctContents.kpi3 >= '0' && collectiveKitchenOctContents.kpi3 <= '8')?'red':(collectiveKitchenOctContents.kpi3 > '8' && collectiveKitchenOctContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenOctContents.kpi3 > '10.66666667' && collectiveKitchenOctContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenOctContents.kpi3 >= '13.33333333' && collectiveKitchenOctContents.kpi3 < '16')?'green':(collectiveKitchenOctContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi4 == null)?'grey-2':(collectiveKitchenOctContents.kpi4 >= '0' && collectiveKitchenOctContents.kpi4 <= '0.6')?'red':(collectiveKitchenOctContents.kpi4 > '0.6' && collectiveKitchenOctContents.kpi4 <= '0.8')?'orange':(collectiveKitchenOctContents.kpi4 > '0.8' && collectiveKitchenOctContents.kpi4 < '1')?'yellow-7':(collectiveKitchenOctContents.kpi4 >= '1' && collectiveKitchenOctContents.kpi4 < '1.2')?'green':(collectiveKitchenOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi4}}
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
                              :color="(collectiveKitchenNovContents.kpi1 == null)?'grey-2':(collectiveKitchenNovContents.kpi1 >= '0' && collectiveKitchenNovContents.kpi1 <= '2.6')?'red':(collectiveKitchenNovContents.kpi1 > '2.6' && collectiveKitchenNovContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi1 > '3.466666667' && collectiveKitchenNovContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi1 >= '4.333333333' && collectiveKitchenNovContents.kpi1 < '5.2')?'green':(collectiveKitchenNovContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi2 == null)?'grey-2':(collectiveKitchenNovContents.kpi2 >= '0' && collectiveKitchenNovContents.kpi2 <= '2.6')?'red':(collectiveKitchenNovContents.kpi2 > '2.6' && collectiveKitchenNovContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi2 > '3.466666667' && collectiveKitchenNovContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi2 >= '4.333333333' && collectiveKitchenNovContents.kpi2 < '5.2')?'green':(collectiveKitchenNovContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi3 == null)?'grey-2':(collectiveKitchenNovContents.kpi3 >= '0' && collectiveKitchenNovContents.kpi3 <= '8')?'red':(collectiveKitchenNovContents.kpi3 > '8' && collectiveKitchenNovContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenNovContents.kpi3 > '10.66666667' && collectiveKitchenNovContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenNovContents.kpi3 >= '13.33333333' && collectiveKitchenNovContents.kpi3 < '16')?'green':(collectiveKitchenNovContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi4 == null)?'grey-2':(collectiveKitchenNovContents.kpi4 >= '0' && collectiveKitchenNovContents.kpi4 <= '0.6')?'red':(collectiveKitchenNovContents.kpi4 > '0.6' && collectiveKitchenNovContents.kpi4 <= '0.8')?'orange':(collectiveKitchenNovContents.kpi4 > '0.8' && collectiveKitchenNovContents.kpi4 < '1')?'yellow-7':(collectiveKitchenNovContents.kpi4 >= '1' && collectiveKitchenNovContents.kpi4 < '1.2')?'green':(collectiveKitchenNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi4}}
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
                              :color="(collectiveKitchenDecContents.kpi1 == null)?'grey-2':(collectiveKitchenDecContents.kpi1 >= '0' && collectiveKitchenDecContents.kpi1 <= '2.6')?'red':(collectiveKitchenDecContents.kpi1 > '2.6' && collectiveKitchenDecContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi1 > '3.466666667' && collectiveKitchenDecContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi1 >= '4.333333333' && collectiveKitchenDecContents.kpi1 < '5.2')?'green':(collectiveKitchenDecContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi2 == null)?'grey-2':(collectiveKitchenDecContents.kpi2 >= '0' && collectiveKitchenDecContents.kpi2 <= '2.6')?'red':(collectiveKitchenDecContents.kpi2 > '2.6' && collectiveKitchenDecContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi2 > '3.466666667' && collectiveKitchenDecContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi2 >= '4.333333333' && collectiveKitchenDecContents.kpi2 < '5.2')?'green':(collectiveKitchenDecContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi3 == null)?'grey-2':(collectiveKitchenDecContents.kpi3 >= '0' && collectiveKitchenDecContents.kpi3 <= '8')?'red':(collectiveKitchenDecContents.kpi3 > '8' && collectiveKitchenDecContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenDecContents.kpi3 > '10.66666667' && collectiveKitchenDecContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenDecContents.kpi3 >= '13.33333333' && collectiveKitchenDecContents.kpi3 < '16')?'green':(collectiveKitchenDecContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi4 == null)?'grey-2':(collectiveKitchenDecContents.kpi4 >= '0' && collectiveKitchenDecContents.kpi4 <= '0.6')?'red':(collectiveKitchenDecContents.kpi4 > '0.6' && collectiveKitchenDecContents.kpi4 <= '0.8')?'orange':(collectiveKitchenDecContents.kpi4 > '0.8' && collectiveKitchenDecContents.kpi4 < '1')?'yellow-7':(collectiveKitchenDecContents.kpi4 >= '1' && collectiveKitchenDecContents.kpi4 < '1.2')?'green':(collectiveKitchenDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi4}}
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
                              :color="(collectiveKitchenJanContents.kpi1 == null)?'grey-2':(collectiveKitchenJanContents.kpi1 >= '0' && collectiveKitchenJanContents.kpi1 <= '2.6')?'red':(collectiveKitchenJanContents.kpi1 > '2.6' && collectiveKitchenJanContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi1 > '3.466666667' && collectiveKitchenJanContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi1 >= '4.333333333' && collectiveKitchenJanContents.kpi1 < '5.2')?'green':(collectiveKitchenJanContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi2 == null)?'grey-2':(collectiveKitchenJanContents.kpi2 >= '0' && collectiveKitchenJanContents.kpi2 <= '2.6')?'red':(collectiveKitchenJanContents.kpi2 > '2.6' && collectiveKitchenJanContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJanContents.kpi2 > '3.466666667' && collectiveKitchenJanContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJanContents.kpi2 >= '4.333333333' && collectiveKitchenJanContents.kpi2 < '5.2')?'green':(collectiveKitchenJanContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi3 == null)?'grey-2':(collectiveKitchenJanContents.kpi3 >= '0' && collectiveKitchenJanContents.kpi3 <= '8')?'red':(collectiveKitchenJanContents.kpi3 > '8' && collectiveKitchenJanContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJanContents.kpi3 > '10.66666667' && collectiveKitchenJanContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJanContents.kpi3 >= '13.33333333' && collectiveKitchenJanContents.kpi3 < '16')?'green':(collectiveKitchenJanContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJanContents.kpi4 == null)?'grey-2':(collectiveKitchenJanContents.kpi4 >= '0' && collectiveKitchenJanContents.kpi4 <= '0.6')?'red':(collectiveKitchenJanContents.kpi4 > '0.6' && collectiveKitchenJanContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJanContents.kpi4 > '0.8' && collectiveKitchenJanContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJanContents.kpi4 >= '1' && collectiveKitchenJanContents.kpi4 < '1.2')?'green':(collectiveKitchenJanContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJanContents.kpi4}}
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
                              :color="(collectiveKitchenFebContents.kpi1 == null)?'grey-2':(collectiveKitchenFebContents.kpi1 >= '0' && collectiveKitchenFebContents.kpi1 <= '2.6')?'red':(collectiveKitchenFebContents.kpi1 > '2.6' && collectiveKitchenFebContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi1 > '3.466666667' && collectiveKitchenFebContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi1 >= '4.333333333' && collectiveKitchenFebContents.kpi1 < '5.2')?'green':(collectiveKitchenFebContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi2 == null)?'grey-2':(collectiveKitchenFebContents.kpi2 >= '0' && collectiveKitchenFebContents.kpi2 <= '2.6')?'red':(collectiveKitchenFebContents.kpi2 > '2.6' && collectiveKitchenFebContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenFebContents.kpi2 > '3.466666667' && collectiveKitchenFebContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenFebContents.kpi2 >= '4.333333333' && collectiveKitchenFebContents.kpi2 < '5.2')?'green':(collectiveKitchenFebContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi3 == null)?'grey-2':(collectiveKitchenFebContents.kpi3 >= '0' && collectiveKitchenFebContents.kpi3 <= '8')?'red':(collectiveKitchenFebContents.kpi3 > '8' && collectiveKitchenFebContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenFebContents.kpi3 > '10.66666667' && collectiveKitchenFebContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenFebContents.kpi3 >= '13.33333333' && collectiveKitchenFebContents.kpi3 < '16')?'green':(collectiveKitchenFebContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenFebContents.kpi4 == null)?'grey-2':(collectiveKitchenFebContents.kpi4 >= '0' && collectiveKitchenFebContents.kpi4 <= '0.6')?'red':(collectiveKitchenFebContents.kpi4 > '0.6' && collectiveKitchenFebContents.kpi4 <= '0.8')?'orange':(collectiveKitchenFebContents.kpi4 > '0.8' && collectiveKitchenFebContents.kpi4 < '1')?'yellow-7':(collectiveKitchenFebContents.kpi4 >= '1' && collectiveKitchenFebContents.kpi4 < '1.2')?'green':(collectiveKitchenFebContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenFebContents.kpi4}}
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
                              :color="(collectiveKitchenMarContents.kpi1 == null)?'grey-2':(collectiveKitchenMarContents.kpi1 >= '0' && collectiveKitchenMarContents.kpi1 <= '2.6')?'red':(collectiveKitchenMarContents.kpi1 > '2.6' && collectiveKitchenMarContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi1 > '3.466666667' && collectiveKitchenMarContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi1 >= '4.333333333' && collectiveKitchenMarContents.kpi1 < '5.2')?'green':(collectiveKitchenMarContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi2 == null)?'grey-2':(collectiveKitchenMarContents.kpi2 >= '0' && collectiveKitchenMarContents.kpi2 <= '2.6')?'red':(collectiveKitchenMarContents.kpi2 > '2.6' && collectiveKitchenMarContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMarContents.kpi2 > '3.466666667' && collectiveKitchenMarContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMarContents.kpi2 >= '4.333333333' && collectiveKitchenMarContents.kpi2 < '5.2')?'green':(collectiveKitchenMarContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi3 == null)?'grey-2':(collectiveKitchenMarContents.kpi3 >= '0' && collectiveKitchenMarContents.kpi3 <= '8')?'red':(collectiveKitchenMarContents.kpi3 > '8' && collectiveKitchenMarContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMarContents.kpi3 > '10.66666667' && collectiveKitchenMarContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMarContents.kpi3 >= '13.33333333' && collectiveKitchenMarContents.kpi3 < '16')?'green':(collectiveKitchenMarContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMarContents.kpi4 == null)?'grey-2':(collectiveKitchenMarContents.kpi4 >= '0' && collectiveKitchenMarContents.kpi4 <= '0.6')?'red':(collectiveKitchenMarContents.kpi4 > '0.6' && collectiveKitchenMarContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMarContents.kpi4 > '0.8' && collectiveKitchenMarContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMarContents.kpi4 >= '1' && collectiveKitchenMarContents.kpi4 < '1.2')?'green':(collectiveKitchenMarContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMarContents.kpi4}}
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
                              :color="(collectiveKitchenAprContents.kpi1 == null)?'grey-2':(collectiveKitchenAprContents.kpi1 >= '0' && collectiveKitchenAprContents.kpi1 <= '2.6')?'red':(collectiveKitchenAprContents.kpi1 > '2.6' && collectiveKitchenAprContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi1 > '3.466666667' && collectiveKitchenAprContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi1 >= '4.333333333' && collectiveKitchenAprContents.kpi1 < '5.2')?'green':(collectiveKitchenAprContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi2 == null)?'grey-2':(collectiveKitchenAprContents.kpi2 >= '0' && collectiveKitchenAprContents.kpi2 <= '2.6')?'red':(collectiveKitchenAprContents.kpi2 > '2.6' && collectiveKitchenAprContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAprContents.kpi2 > '3.466666667' && collectiveKitchenAprContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAprContents.kpi2 >= '4.333333333' && collectiveKitchenAprContents.kpi2 < '5.2')?'green':(collectiveKitchenAprContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi3 == null)?'grey-2':(collectiveKitchenAprContents.kpi3 >= '0' && collectiveKitchenAprContents.kpi3 <= '8')?'red':(collectiveKitchenAprContents.kpi3 > '8' && collectiveKitchenAprContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAprContents.kpi3 > '10.66666667' && collectiveKitchenAprContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAprContents.kpi3 >= '13.33333333' && collectiveKitchenAprContents.kpi3 < '16')?'green':(collectiveKitchenAprContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAprContents.kpi4 == null)?'grey-2':(collectiveKitchenAprContents.kpi4 >= '0' && collectiveKitchenAprContents.kpi4 <= '0.6')?'red':(collectiveKitchenAprContents.kpi4 > '0.6' && collectiveKitchenAprContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAprContents.kpi4 > '0.8' && collectiveKitchenAprContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAprContents.kpi4 >= '1' && collectiveKitchenAprContents.kpi4 < '1.2')?'green':(collectiveKitchenAprContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAprContents.kpi4}}
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
                              :color="(collectiveKitchenMayContents.kpi1 == null)?'grey-2':(collectiveKitchenMayContents.kpi1 >= '0' && collectiveKitchenMayContents.kpi1 <= '2.6')?'red':(collectiveKitchenMayContents.kpi1 > '2.6' && collectiveKitchenMayContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi1 > '3.466666667' && collectiveKitchenMayContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi1 >= '4.333333333' && collectiveKitchenMayContents.kpi1 < '5.2')?'green':(collectiveKitchenMayContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi2 == null)?'grey-2':(collectiveKitchenMayContents.kpi2 >= '0' && collectiveKitchenMayContents.kpi2 <= '2.6')?'red':(collectiveKitchenMayContents.kpi2 > '2.6' && collectiveKitchenMayContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenMayContents.kpi2 > '3.466666667' && collectiveKitchenMayContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenMayContents.kpi2 >= '4.333333333' && collectiveKitchenMayContents.kpi2 < '5.2')?'green':(collectiveKitchenMayContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi3 == null)?'grey-2':(collectiveKitchenMayContents.kpi3 >= '0' && collectiveKitchenMayContents.kpi3 <= '8')?'red':(collectiveKitchenMayContents.kpi3 > '8' && collectiveKitchenMayContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenMayContents.kpi3 > '10.66666667' && collectiveKitchenMayContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenMayContents.kpi3 >= '13.33333333' && collectiveKitchenMayContents.kpi3 < '16')?'green':(collectiveKitchenMayContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenMayContents.kpi4 == null)?'grey-2':(collectiveKitchenMayContents.kpi4 >= '0' && collectiveKitchenMayContents.kpi4 <= '0.6')?'red':(collectiveKitchenMayContents.kpi4 > '0.6' && collectiveKitchenMayContents.kpi4 <= '0.8')?'orange':(collectiveKitchenMayContents.kpi4 > '0.8' && collectiveKitchenMayContents.kpi4 < '1')?'yellow-7':(collectiveKitchenMayContents.kpi4 >= '1' && collectiveKitchenMayContents.kpi4 < '1.2')?'green':(collectiveKitchenMayContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenMayContents.kpi4}}
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
                              :color="(collectiveKitchenJunContents.kpi1 == null)?'grey-2':(collectiveKitchenJunContents.kpi1 >= '0' && collectiveKitchenJunContents.kpi1 <= '2.6')?'red':(collectiveKitchenJunContents.kpi1 > '2.6' && collectiveKitchenJunContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi1 > '3.466666667' && collectiveKitchenJunContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi1 >= '4.333333333' && collectiveKitchenJunContents.kpi1 < '5.2')?'green':(collectiveKitchenJunContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi2 == null)?'grey-2':(collectiveKitchenJunContents.kpi2 >= '0' && collectiveKitchenJunContents.kpi2 <= '2.6')?'red':(collectiveKitchenJunContents.kpi2 > '2.6' && collectiveKitchenJunContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJunContents.kpi2 > '3.466666667' && collectiveKitchenJunContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJunContents.kpi2 >= '4.333333333' && collectiveKitchenJunContents.kpi2 < '5.2')?'green':(collectiveKitchenJunContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi3 == null)?'grey-2':(collectiveKitchenJunContents.kpi3 >= '0' && collectiveKitchenJunContents.kpi3 <= '8')?'red':(collectiveKitchenJunContents.kpi3 > '8' && collectiveKitchenJunContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJunContents.kpi3 > '10.66666667' && collectiveKitchenJunContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJunContents.kpi3 >= '13.33333333' && collectiveKitchenJunContents.kpi3 < '16')?'green':(collectiveKitchenJunContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJunContents.kpi4 == null)?'grey-2':(collectiveKitchenJunContents.kpi4 >= '0' && collectiveKitchenJunContents.kpi4 <= '0.6')?'red':(collectiveKitchenJunContents.kpi4 > '0.6' && collectiveKitchenJunContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJunContents.kpi4 > '0.8' && collectiveKitchenJunContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJunContents.kpi4 >= '1' && collectiveKitchenJunContents.kpi4 < '1.2')?'green':(collectiveKitchenJunContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJunContents.kpi4}}
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
                              :color="(collectiveKitchenJulContents.kpi1 == null)?'grey-2':(collectiveKitchenJulContents.kpi1 >= '0' && collectiveKitchenJulContents.kpi1 <= '2.6')?'red':(collectiveKitchenJulContents.kpi1 > '2.6' && collectiveKitchenJulContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi1 > '3.466666667' && collectiveKitchenJulContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi1 >= '4.333333333' && collectiveKitchenJulContents.kpi1 < '5.2')?'green':(collectiveKitchenJulContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi2 == null)?'grey-2':(collectiveKitchenJulContents.kpi2 >= '0' && collectiveKitchenJulContents.kpi2 <= '2.6')?'red':(collectiveKitchenJulContents.kpi2 > '2.6' && collectiveKitchenJulContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenJulContents.kpi2 > '3.466666667' && collectiveKitchenJulContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenJulContents.kpi2 >= '4.333333333' && collectiveKitchenJulContents.kpi2 < '5.2')?'green':(collectiveKitchenJulContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi3 == null)?'grey-2':(collectiveKitchenJulContents.kpi3 >= '0' && collectiveKitchenJulContents.kpi3 <= '8')?'red':(collectiveKitchenJulContents.kpi3 > '8' && collectiveKitchenJulContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenJulContents.kpi3 > '10.66666667' && collectiveKitchenJulContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenJulContents.kpi3 >= '13.33333333' && collectiveKitchenJulContents.kpi3 < '16')?'green':(collectiveKitchenJulContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenJulContents.kpi4 == null)?'grey-2':(collectiveKitchenJulContents.kpi4 >= '0' && collectiveKitchenJulContents.kpi4 <= '0.6')?'red':(collectiveKitchenJulContents.kpi4 > '0.6' && collectiveKitchenJulContents.kpi4 <= '0.8')?'orange':(collectiveKitchenJulContents.kpi4 > '0.8' && collectiveKitchenJulContents.kpi4 < '1')?'yellow-7':(collectiveKitchenJulContents.kpi4 >= '1' && collectiveKitchenJulContents.kpi4 < '1.2')?'green':(collectiveKitchenJulContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenJulContents.kpi4}}
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
                              :color="(collectiveKitchenAugContents.kpi1 == null)?'grey-2':(collectiveKitchenAugContents.kpi1 >= '0' && collectiveKitchenAugContents.kpi1 <= '2.6')?'red':(collectiveKitchenAugContents.kpi1 > '2.6' && collectiveKitchenAugContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi1 > '3.466666667' && collectiveKitchenAugContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi1 >= '4.333333333' && collectiveKitchenAugContents.kpi1 < '5.2')?'green':(collectiveKitchenAugContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi2 == null)?'grey-2':(collectiveKitchenAugContents.kpi2 >= '0' && collectiveKitchenAugContents.kpi2 <= '2.6')?'red':(collectiveKitchenAugContents.kpi2 > '2.6' && collectiveKitchenAugContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenAugContents.kpi2 > '3.466666667' && collectiveKitchenAugContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenAugContents.kpi2 >= '4.333333333' && collectiveKitchenAugContents.kpi2 < '5.2')?'green':(collectiveKitchenAugContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi3 == null)?'grey-2':(collectiveKitchenAugContents.kpi3 >= '0' && collectiveKitchenAugContents.kpi3 <= '8')?'red':(collectiveKitchenAugContents.kpi3 > '8' && collectiveKitchenAugContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenAugContents.kpi3 > '10.66666667' && collectiveKitchenAugContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenAugContents.kpi3 >= '13.33333333' && collectiveKitchenAugContents.kpi3 < '16')?'green':(collectiveKitchenAugContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenAugContents.kpi4 == null)?'grey-2':(collectiveKitchenAugContents.kpi4 >= '0' && collectiveKitchenAugContents.kpi4 <= '0.6')?'red':(collectiveKitchenAugContents.kpi4 > '0.6' && collectiveKitchenAugContents.kpi4 <= '0.8')?'orange':(collectiveKitchenAugContents.kpi4 > '0.8' && collectiveKitchenAugContents.kpi4 < '1')?'yellow-7':(collectiveKitchenAugContents.kpi4 >= '1' && collectiveKitchenAugContents.kpi4 < '1.2')?'green':(collectiveKitchenAugContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenAugContents.kpi4}}
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
                              :color="(collectiveKitchenSepContents.kpi1 == null)?'grey-2':(collectiveKitchenSepContents.kpi1 >= '0' && collectiveKitchenSepContents.kpi1 <= '2.6')?'red':(collectiveKitchenSepContents.kpi1 > '2.6' && collectiveKitchenSepContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi1 > '3.466666667' && collectiveKitchenSepContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi1 >= '4.333333333' && collectiveKitchenSepContents.kpi1 < '5.2')?'green':(collectiveKitchenSepContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi2 == null)?'grey-2':(collectiveKitchenSepContents.kpi2 >= '0' && collectiveKitchenSepContents.kpi2 <= '2.6')?'red':(collectiveKitchenSepContents.kpi2 > '2.6' && collectiveKitchenSepContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenSepContents.kpi2 > '3.466666667' && collectiveKitchenSepContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenSepContents.kpi2 >= '4.333333333' && collectiveKitchenSepContents.kpi2 < '5.2')?'green':(collectiveKitchenSepContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi3 == null)?'grey-2':(collectiveKitchenSepContents.kpi3 >= '0' && collectiveKitchenSepContents.kpi3 <= '8')?'red':(collectiveKitchenSepContents.kpi3 > '8' && collectiveKitchenSepContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenSepContents.kpi3 > '10.66666667' && collectiveKitchenSepContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenSepContents.kpi3 >= '13.33333333' && collectiveKitchenSepContents.kpi3 < '16')?'green':(collectiveKitchenSepContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenSepContents.kpi4 == null)?'grey-2':(collectiveKitchenSepContents.kpi4 >= '0' && collectiveKitchenSepContents.kpi4 <= '0.6')?'red':(collectiveKitchenSepContents.kpi4 > '0.6' && collectiveKitchenSepContents.kpi4 <= '0.8')?'orange':(collectiveKitchenSepContents.kpi4 > '0.8' && collectiveKitchenSepContents.kpi4 < '1')?'yellow-7':(collectiveKitchenSepContents.kpi4 >= '1' && collectiveKitchenSepContents.kpi4 < '1.2')?'green':(collectiveKitchenSepContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenSepContents.kpi4}}
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
                              :color="(collectiveKitchenOctContents.kpi1 == null)?'grey-2':(collectiveKitchenOctContents.kpi1 >= '0' && collectiveKitchenOctContents.kpi1 <= '2.6')?'red':(collectiveKitchenOctContents.kpi1 > '2.6' && collectiveKitchenOctContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi1 > '3.466666667' && collectiveKitchenOctContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi1 >= '4.333333333' && collectiveKitchenOctContents.kpi1 < '5.2')?'green':(collectiveKitchenOctContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi2 == null)?'grey-2':(collectiveKitchenOctContents.kpi2 >= '0' && collectiveKitchenOctContents.kpi2 <= '2.6')?'red':(collectiveKitchenOctContents.kpi2 > '2.6' && collectiveKitchenOctContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenOctContents.kpi2 > '3.466666667' && collectiveKitchenOctContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenOctContents.kpi2 >= '4.333333333' && collectiveKitchenOctContents.kpi2 < '5.2')?'green':(collectiveKitchenOctContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi3 == null)?'grey-2':(collectiveKitchenOctContents.kpi3 >= '0' && collectiveKitchenOctContents.kpi3 <= '8')?'red':(collectiveKitchenOctContents.kpi3 > '8' && collectiveKitchenOctContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenOctContents.kpi3 > '10.66666667' && collectiveKitchenOctContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenOctContents.kpi3 >= '13.33333333' && collectiveKitchenOctContents.kpi3 < '16')?'green':(collectiveKitchenOctContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenOctContents.kpi4 == null)?'grey-2':(collectiveKitchenOctContents.kpi4 >= '0' && collectiveKitchenOctContents.kpi4 <= '0.6')?'red':(collectiveKitchenOctContents.kpi4 > '0.6' && collectiveKitchenOctContents.kpi4 <= '0.8')?'orange':(collectiveKitchenOctContents.kpi4 > '0.8' && collectiveKitchenOctContents.kpi4 < '1')?'yellow-7':(collectiveKitchenOctContents.kpi4 >= '1' && collectiveKitchenOctContents.kpi4 < '1.2')?'green':(collectiveKitchenOctContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenOctContents.kpi4}}
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
                              :color="(collectiveKitchenNovContents.kpi1 == null)?'grey-2':(collectiveKitchenNovContents.kpi1 >= '0' && collectiveKitchenNovContents.kpi1 <= '2.6')?'red':(collectiveKitchenNovContents.kpi1 > '2.6' && collectiveKitchenNovContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi1 > '3.466666667' && collectiveKitchenNovContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi1 >= '4.333333333' && collectiveKitchenNovContents.kpi1 < '5.2')?'green':(collectiveKitchenNovContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi2 == null)?'grey-2':(collectiveKitchenNovContents.kpi2 >= '0' && collectiveKitchenNovContents.kpi2 <= '2.6')?'red':(collectiveKitchenNovContents.kpi2 > '2.6' && collectiveKitchenNovContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenNovContents.kpi2 > '3.466666667' && collectiveKitchenNovContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenNovContents.kpi2 >= '4.333333333' && collectiveKitchenNovContents.kpi2 < '5.2')?'green':(collectiveKitchenNovContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi3 == null)?'grey-2':(collectiveKitchenNovContents.kpi3 >= '0' && collectiveKitchenNovContents.kpi3 <= '8')?'red':(collectiveKitchenNovContents.kpi3 > '8' && collectiveKitchenNovContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenNovContents.kpi3 > '10.66666667' && collectiveKitchenNovContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenNovContents.kpi3 >= '13.33333333' && collectiveKitchenNovContents.kpi3 < '16')?'green':(collectiveKitchenNovContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenNovContents.kpi4 == null)?'grey-2':(collectiveKitchenNovContents.kpi4 >= '0' && collectiveKitchenNovContents.kpi4 <= '0.6')?'red':(collectiveKitchenNovContents.kpi4 > '0.6' && collectiveKitchenNovContents.kpi4 <= '0.8')?'orange':(collectiveKitchenNovContents.kpi4 > '0.8' && collectiveKitchenNovContents.kpi4 < '1')?'yellow-7':(collectiveKitchenNovContents.kpi4 >= '1' && collectiveKitchenNovContents.kpi4 < '1.2')?'green':(collectiveKitchenNovContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenNovContents.kpi4}}
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
                              :color="(collectiveKitchenDecContents.kpi1 == null)?'grey-2':(collectiveKitchenDecContents.kpi1 >= '0' && collectiveKitchenDecContents.kpi1 <= '2.6')?'red':(collectiveKitchenDecContents.kpi1 > '2.6' && collectiveKitchenDecContents.kpi1 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi1 > '3.466666667' && collectiveKitchenDecContents.kpi1 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi1 >= '4.333333333' && collectiveKitchenDecContents.kpi1 < '5.2')?'green':(collectiveKitchenDecContents.kpi1 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi2 == null)?'grey-2':(collectiveKitchenDecContents.kpi2 >= '0' && collectiveKitchenDecContents.kpi2 <= '2.6')?'red':(collectiveKitchenDecContents.kpi2 > '2.6' && collectiveKitchenDecContents.kpi2 <= '3.466666667')?'orange':(collectiveKitchenDecContents.kpi2 > '3.466666667' && collectiveKitchenDecContents.kpi2 < '4.333333333')?'yellow-7':(collectiveKitchenDecContents.kpi2 >= '4.333333333' && collectiveKitchenDecContents.kpi2 < '5.2')?'green':(collectiveKitchenDecContents.kpi2 >= '5.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi3 == null)?'grey-2':(collectiveKitchenDecContents.kpi3 >= '0' && collectiveKitchenDecContents.kpi3 <= '8')?'red':(collectiveKitchenDecContents.kpi3 > '8' && collectiveKitchenDecContents.kpi3 <= '10.66666667')?'orange':(collectiveKitchenDecContents.kpi3 > '10.66666667' && collectiveKitchenDecContents.kpi3 < '13.33333333')?'yellow-7':(collectiveKitchenDecContents.kpi3 >= '13.33333333' && collectiveKitchenDecContents.kpi3 < '16')?'green':(collectiveKitchenDecContents.kpi3 >= '16'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(collectiveKitchenDecContents.kpi4 == null)?'grey-2':(collectiveKitchenDecContents.kpi4 >= '0' && collectiveKitchenDecContents.kpi4 <= '0.6')?'red':(collectiveKitchenDecContents.kpi4 > '0.6' && collectiveKitchenDecContents.kpi4 <= '0.8')?'orange':(collectiveKitchenDecContents.kpi4 > '0.8' && collectiveKitchenDecContents.kpi4 < '1')?'yellow-7':(collectiveKitchenDecContents.kpi4 >= '1' && collectiveKitchenDecContents.kpi4 < '1.2')?'green':(collectiveKitchenDecContents.kpi4 >= '1.2'?'blue':'grey-2')"
                            >
                            {{collectiveKitchenDecContents.kpi4}}
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
              collectiveKitchenJanContent: {
                
              },
              collectiveKitchenJanContents : [],
              collectiveKitchenFebContent: {
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
              collectiveKitchenFebContents : [],
              collectiveKitchenMarContent: {
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
              collectiveKitchenMarContents : [],
              collectiveKitchenAprContent: {
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
              collectiveKitchenAprContents : [],
              collectiveKitchenMayContent: {
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
              collectiveKitchenMayContents : [],
              collectiveKitchenJunContent: {
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
              collectiveKitchenJunContents : [],
              collectiveKitchenJulContent: {
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
              collectiveKitchenJulContents : [],
              collectiveKitchenAugContent: {
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
              collectiveKitchenAugContents : [],
              collectiveKitchenSepContent: {
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
              collectiveKitchenSepContents : [],
              collectiveKitchenOctContent: {
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
              collectiveKitchenOctContents : [],
              collectiveKitchenNovContent: {
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
              collectiveKitchenNovContents : [],
              collectiveKitchenDecContent: {
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
              collectiveKitchenDecContents : []


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
                            {time_period: 'January', expenses: this.collectiveKitchenJanContents.expenses, revenues: this.collectiveKitchenJanContents.revenues},
                            {time_period: 'February', expenses: this.collectiveKitchenFebContents.expenses, revenues: this.collectiveKitchenFebContents.revenues},
                            {time_period: 'March', expenses: this.collectiveKitchenMarContents.expenses, revenues: this.collectiveKitchenMarContents.revenues},
                            {time_period: 'April', expenses: this.collectiveKitchenAprContents.expenses, revenues: this.collectiveKitchenAprContents.revenues},
                            {time_period: 'May', expenses: this.collectiveKitchenMayContents.expenses, revenues: this.collectiveKitchenMayContents.revenues},
                            {time_period: 'June', expenses: this.collectiveKitchenJunContents.expenses, revenues: this.collectiveKitchenJunContents.revenues},
                            {time_period: 'July', expenses: this.collectiveKitchenJulContents.expenses, revenues: this.collectiveKitchenJulContents.revenues},
                            {time_period: 'August', expenses: this.collectiveKitchenAugContents.expenses, revenues: this.collectiveKitchenAugContents.revenues},
                            {time_period: 'September', expenses: this.collectiveKitchenSepContents.expenses, revenues: this.collectiveKitchenSepContents.revenues},
                            {time_period: 'October', expenses: this.collectiveKitchenOctContents.expenses, revenues: this.collectiveKitchenOctContents.revenues},
                            {time_period: 'November', expenses: this.collectiveKitchenNovContents.expenses, revenues: this.collectiveKitchenNovContents.revenues},
                            {time_period: 'December',expenses: this.collectiveKitchenDecContents.expenses, revenues: this.collectiveKitchenDecContents.revenues }
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
                            {months: 'January', kpi1: this.collectiveKitchenJanContents.kpi1, kpi2: this.collectiveKitchenJanContents.kpi2, kpi3: this.collectiveKitchenJanContents.kpi3, kpi4: this.collectiveKitchenJanContents.kpi4, uniqueVol: this.collectiveKitchenJanContents.uniqueVolunteers, volHours: this.collectiveKitchenJanContents.volunteerHours},
                            {months: 'February', kpi1: this.collectiveKitchenFebContents.kpi1, kpi2: this.collectiveKitchenFebContents.kpi2, kpi3: this.collectiveKitchenFebContents.kpi3, kpi4: this.collectiveKitchenFebContents.kpi4, uniqueVol: this.collectiveKitchenFebContents.uniqueVolunteers, volHours: this.collectiveKitchenFebContents.volunteerHours},
                            {months: 'March', kpi1: this.collectiveKitchenMarContents.kpi1, kpi2: this.collectiveKitchenMarContents.kpi2, kpi3: this.collectiveKitchenMarContents.kpi3, kpi4: this.collectiveKitchenMarContents.kpi4, uniqueVol: this.collectiveKitchenMarContents.uniqueVolunteers, volHours: this.collectiveKitchenMarContents.volunteerHours},
                            {months: 'April', kpi1: this.collectiveKitchenAprContents.kpi1, kpi2: this.collectiveKitchenAprContents.kpi2, kpi3: this.collectiveKitchenAprContents.kpi3, kpi4: this.collectiveKitchenAprContents.kpi4, uniqueVol: this.collectiveKitchenAprContents.uniqueVolunteers, volHours: this.collectiveKitchenAprContents.volunteerHours},
                            {months: 'May', kpi1: this.collectiveKitchenMayContents.kpi1, kpi2: this.collectiveKitchenMayContents.kpi2, kpi3: this.collectiveKitchenMayContents.kpi3, kpi4: this.collectiveKitchenMayContents.kpi4, uniqueVol: this.collectiveKitchenMayContents.uniqueVolunteers, volHours: this.collectiveKitchenMayContents.volunteerHours},
                            {months: 'June', kpi1: this.collectiveKitchenJunContents.kpi1, kpi2: this.collectiveKitchenJunContents.kpi2, kpi3: this.collectiveKitchenJunContents.kpi3, kpi4: this.collectiveKitchenJunContents.kpi4, uniqueVol: this.collectiveKitchenJunContents.uniqueVolunteers, volHours: this.collectiveKitchenJunContents.volunteerHours},
                            {months: 'July', kpi1: this.collectiveKitchenJulContents.kpi1, kpi2: this.collectiveKitchenJulContents.kpi2, kpi3: this.collectiveKitchenJulContents.kpi3, kpi4: this.collectiveKitchenJulContents.kpi4, uniqueVol: this.collectiveKitchenJulContents.uniqueVolunteers, volHours: this.collectiveKitchenJulContents.volunteerHours},
                            {months: 'August', kpi1: this.collectiveKitchenAugContents.kpi1, kpi2: this.collectiveKitchenAugContents.kpi2, kpi3: this.collectiveKitchenAugContents.kpi3, kpi4: this.collectiveKitchenAugContents.kpi4, uniqueVol: this.collectiveKitchenAugContents.uniqueVolunteers, volHours: this.collectiveKitchenAugContents.volunteerHours},
                            {months: 'September', kpi1: this.collectiveKitchenSepContents.kpi1, kpi2: this.collectiveKitchenSepContents.kpi2, kpi3: this.collectiveKitchenSepContents.kpi3, kpi4: this.collectiveKitchenSepContents.kpi4, uniqueVol: this.collectiveKitchenSepContents.uniqueVolunteers, volHours: this.collectiveKitchenSepContents.volunteerHours},
                            {months: 'October', kpi1: this.collectiveKitchenOctContents.kpi1, kpi2: this.collectiveKitchenOctContents.kpi2, kpi3: this.collectiveKitchenOctContents.kpi3, kpi4: this.collectiveKitchenOctContents.kpi4, uniqueVol: this.collectiveKitchenOctContents.uniqueVolunteers, volHours: this.collectiveKitchenOctContents.volunteerHours},
                            {months: 'November', kpi1: this.collectiveKitchenNovContents.kpi1, kpi2: this.collectiveKitchenNovContents.kpi2, kpi3: this.collectiveKitchenNovContents.kpi3, kpi4: this.collectiveKitchenNovContents.kpi4, uniqueVol: this.collectiveKitchenNovContents.uniqueVolunteers, volHours: this.collectiveKitchenNovContents.volunteerHours},
                            {months: 'December',kpi1: this.collectiveKitchenDecContents.kpi1, kpi2: this.collectiveKitchenDecContents.kpi2, kpi3: this.collectiveKitchenDecContents.kpi3, kpi4: this.collectiveKitchenDecContents.kpi4, uniqueVol: this.collectiveKitchenDecContents.uniqueVolunteers, volHours: this.collectiveKitchenDecContents.volunteerHours},
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
                            data: [{value: this.collectiveKitchenJanContents.budgetUsage}],
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
                                {value: this.collectiveKitchenJanContents.perCategory1, name: this.collectiveKitchenJanContents.expenseCategory1},
                                {value: this.collectiveKitchenJanContents.perCategory2, name: this.collectiveKitchenJanContents.expenseCategory2},
                                {value: this.collectiveKitchenJanContents.perCategory3, name: this.collectiveKitchenJanContents.expenseCategory3},
                                {value: this.collectiveKitchenJanContents.perCategory4, name: this.collectiveKitchenJanContents.expenseCategory4},
                                {value: this.collectiveKitchenJanContents.perCategory5, name: this.collectiveKitchenJanContents.expenseCategory5},
                                {value: this.collectiveKitchenJanContents.perCategory6, name: this.collectiveKitchenJanContents.expenseCategory6}
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
                            data: [{value: this.collectiveKitchenFebContents.budgetUsage}],
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
                                {value: this.collectiveKitchenFebContents.perCategory1, name: this.collectiveKitchenFebContents.expenseCategory1},
                                {value: this.collectiveKitchenFebContents.perCategory2, name: this.collectiveKitchenFebContents.expenseCategory2},
                                {value: this.collectiveKitchenFebContents.perCategory3, name: this.collectiveKitchenFebContents.expenseCategory3},
                                {value: this.collectiveKitchenFebContents.perCategory4, name: this.collectiveKitchenFebContents.expenseCategory4},
                                {value: this.collectiveKitchenFebContents.perCategory5, name: this.collectiveKitchenFebContents.expenseCategory5},
                                {value: this.collectiveKitchenFebContents.perCategory6, name: this.collectiveKitchenFebContents.expenseCategory6}
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
                            data: [{value: this.collectiveKitchenMarContents.budgetUsage}],
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
                                {value: this.collectiveKitchenMarContents.perCategory1, name: this.collectiveKitchenMarContents.expenseCategory1},
                                {value: this.collectiveKitchenMarContents.perCategory2, name: this.collectiveKitchenMarContents.expenseCategory2},
                                {value: this.collectiveKitchenMarContents.perCategory3, name: this.collectiveKitchenMarContents.expenseCategory3},
                                {value: this.collectiveKitchenMarContents.perCategory4, name: this.collectiveKitchenMarContents.expenseCategory4},
                                {value: this.collectiveKitchenMarContents.perCategory5, name: this.collectiveKitchenMarContents.expenseCategory5},
                                {value: this.collectiveKitchenMarContents.perCategory6, name: this.collectiveKitchenMarContents.expenseCategory6}
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
                            data: [{value: this.collectiveKitchenAprContents.budgetUsage}],
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
                                {value: this.collectiveKitchenAprContents.perCategory1, name: this.collectiveKitchenAprContents.expenseCategory1},
                                {value: this.collectiveKitchenAprContents.perCategory2, name: this.collectiveKitchenAprContents.expenseCategory2},
                                {value: this.collectiveKitchenAprContents.perCategory3, name: this.collectiveKitchenAprContents.expenseCategory3},
                                {value: this.collectiveKitchenAprContents.perCategory4, name: this.collectiveKitchenAprContents.expenseCategory4},
                                {value: this.collectiveKitchenAprContents.perCategory5, name: this.collectiveKitchenAprContents.expenseCategory5},
                                {value: this.collectiveKitchenAprContents.perCategory6, name: this.collectiveKitchenAprContents.expenseCategory6}  
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
                            data: [{value: this.collectiveKitchenMayContents.budgetUsage}],
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
                                {value: this.collectiveKitchenMayContents.perCategory1, name: this.collectiveKitchenMayContents.expenseCategory1},
                                {value: this.collectiveKitchenMayContents.perCategory2, name: this.collectiveKitchenMayContents.expenseCategory2},
                                {value: this.collectiveKitchenMayContents.perCategory3, name: this.collectiveKitchenMayContents.expenseCategory3},
                                {value: this.collectiveKitchenMayContents.perCategory4, name: this.collectiveKitchenMayContents.expenseCategory4},
                                {value: this.collectiveKitchenMayContents.perCategory5, name: this.collectiveKitchenMayContents.expenseCategory5},
                                {value: this.collectiveKitchenMayContents.perCategory6, name: this.collectiveKitchenMayContents.expenseCategory6}  
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
                            data: [{value: this.collectiveKitchenJunContents.budgetUsage}],
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
                                {value: this.collectiveKitchenJunContents.perCategory1, name: this.collectiveKitchenJunContents.expenseCategory1},
                                {value: this.collectiveKitchenJunContents.perCategory2, name: this.collectiveKitchenJunContents.expenseCategory2},
                                {value: this.collectiveKitchenJunContents.perCategory3, name: this.collectiveKitchenJunContents.expenseCategory3},
                                {value: this.collectiveKitchenJunContents.perCategory4, name: this.collectiveKitchenJunContents.expenseCategory4},
                                {value: this.collectiveKitchenJunContents.perCategory5, name: this.collectiveKitchenJunContents.expenseCategory5},
                                {value: this.collectiveKitchenJunContents.perCategory6, name: this.collectiveKitchenJunContents.expenseCategory6}  
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
                            data: [{value: this.collectiveKitchenJulContents.budgetUsage}],
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
                                {value: this.collectiveKitchenJulContents.perCategory1, name: this.collectiveKitchenJulContents.expenseCategory1},
                                {value: this.collectiveKitchenJulContents.perCategory2, name: this.collectiveKitchenJulContents.expenseCategory2},
                                {value: this.collectiveKitchenJulContents.perCategory3, name: this.collectiveKitchenJulContents.expenseCategory3},
                                {value: this.collectiveKitchenJulContents.perCategory4, name: this.collectiveKitchenJulContents.expenseCategory4},
                                {value: this.collectiveKitchenJulContents.perCategory5, name: this.collectiveKitchenJulContents.expenseCategory5},
                                {value: this.collectiveKitchenJulContents.perCategory6, name: this.collectiveKitchenJulContents.expenseCategory6}  
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
                            data: [{value: this.collectiveKitchenAugContents.budgetUsage}],
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
                                {value: this.collectiveKitchenAugContents.perCategory1, name: this.collectiveKitchenAugContents.expenseCategory1},
                                {value: this.collectiveKitchenAugContents.perCategory2, name: this.collectiveKitchenAugContents.expenseCategory2},
                                {value: this.collectiveKitchenAugContents.perCategory3, name: this.collectiveKitchenAugContents.expenseCategory3},
                                {value: this.collectiveKitchenAugContents.perCategory4, name: this.collectiveKitchenAugContents.expenseCategory4},
                                {value: this.collectiveKitchenAugContents.perCategory5, name: this.collectiveKitchenAugContents.expenseCategory5},
                                {value: this.collectiveKitchenAugContents.perCategory6, name: this.collectiveKitchenAugContents.expenseCategory6}  
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
                            data: [{value: this.collectiveKitchenSepContents.budgetUsage}],
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
                                {value: this.collectiveKitchenSepContents.perCategory1, name: this.collectiveKitchenSepContents.expenseCategory1},
                                {value: this.collectiveKitchenSepContents.perCategory2, name: this.collectiveKitchenSepContents.expenseCategory2},
                                {value: this.collectiveKitchenSepContents.perCategory3, name: this.collectiveKitchenSepContents.expenseCategory3},
                                {value: this.collectiveKitchenSepContents.perCategory4, name: this.collectiveKitchenSepContents.expenseCategory4},
                                {value: this.collectiveKitchenSepContents.perCategory5, name: this.collectiveKitchenSepContents.expenseCategory5},
                                {value: this.collectiveKitchenSepContents.perCategory6, name: this.collectiveKitchenSepContents.expenseCategory6}  
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
                            data: [{value: this.collectiveKitchenOctContents.budgetUsage}],
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
                                {value: this.collectiveKitchenOctContents.perCategory1, name: this.collectiveKitchenOctContents.expenseCategory1},
                                {value: this.collectiveKitchenOctContents.perCategory2, name: this.collectiveKitchenOctContents.expenseCategory2},
                                {value: this.collectiveKitchenOctContents.perCategory3, name: this.collectiveKitchenOctContents.expenseCategory3},
                                {value: this.collectiveKitchenOctContents.perCategory4, name: this.collectiveKitchenOctContents.expenseCategory4},
                                {value: this.collectiveKitchenOctContents.perCategory5, name: this.collectiveKitchenOctContents.expenseCategory5},
                                {value: this.collectiveKitchenOctContents.perCategory6, name: this.collectiveKitchenOctContents.expenseCategory6}  
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
                            data: [{value: this.collectiveKitchenNovContents.budgetUsage}],
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
                                {value: this.collectiveKitchenNovContents.perCategory1, name: this.collectiveKitchenNovContents.expenseCategory1},
                                {value: this.collectiveKitchenNovContents.perCategory2, name: this.collectiveKitchenNovContents.expenseCategory2},
                                {value: this.collectiveKitchenNovContents.perCategory3, name: this.collectiveKitchenNovContents.expenseCategory3},
                                {value: this.collectiveKitchenNovContents.perCategory4, name: this.collectiveKitchenNovContents.expenseCategory4},
                                {value: this.collectiveKitchenNovContents.perCategory5, name: this.collectiveKitchenNovContents.expenseCategory5},
                                {value: this.collectiveKitchenNovContents.perCategory6, name: this.collectiveKitchenNovContents.expenseCategory6}  
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
                            data: [{value: this.collectiveKitchenDecContents.budgetUsage}],
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
                                {value: this.collectiveKitchenDecContents.perCategory1, name: this.collectiveKitchenDecContents.expenseCategory1},
                                {value: this.collectiveKitchenDecContents.perCategory2, name: this.collectiveKitchenDecContents.expenseCategory2},
                                {value: this.collectiveKitchenDecContents.perCategory3, name: this.collectiveKitchenDecContents.expenseCategory3},
                                {value: this.collectiveKitchenDecContents.perCategory4, name: this.collectiveKitchenDecContents.expenseCategory4},
                                {value: this.collectiveKitchenDecContents.perCategory5, name: this.collectiveKitchenDecContents.expenseCategory5},
                                {value: this.collectiveKitchenDecContents.perCategory6, name: this.collectiveKitchenDecContents.expenseCategory6}
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
            var doccollectiveKitchenJanRef = db.collection("collectiveKitchen").doc("january");

            doccollectiveKitchenJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.collectiveKitchenJanContents = doc.data();
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
            var doccollectiveKitchenFebRef = db.collection("collectiveKitchen").doc("february");

            doccollectiveKitchenFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.collectiveKitchenFebContents = doc.data();
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
            var doccollectiveKitchenMarRef = db.collection("collectiveKitchen").doc("march");

            doccollectiveKitchenMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.collectiveKitchenMarContents = doc.data();
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
            var doccollectiveKitchenAprRef = db.collection("collectiveKitchen").doc("april1");

            doccollectiveKitchenAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.collectiveKitchenAprContents = doc.data();
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
            var doccollectiveKitchenMayRef = db.collection("collectiveKitchen").doc("may");

            doccollectiveKitchenMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.collectiveKitchenMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var doccollectiveKitchenJunRef = db.collection("collectiveKitchen").doc("june");

            doccollectiveKitchenJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.collectiveKitchenJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var doccollectiveKitchenJulRef = db.collection("collectiveKitchen").doc("july");

            doccollectiveKitchenJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.collectiveKitchenJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var doccollectiveKitchenAugRef = db.collection("collectiveKitchen").doc("august");

            doccollectiveKitchenAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.collectiveKitchenAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var doccollectiveKitchenSepRef = db.collection("collectiveKitchen").doc("september");

            doccollectiveKitchenSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.collectiveKitchenSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var doccollectiveKitchenOctRef = db.collection("collectiveKitchen").doc("october");

            doccollectiveKitchenOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.collectiveKitchenOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var doccollectiveKitchenNovRef = db.collection("collectiveKitchen").doc("november");

            doccollectiveKitchenNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.collectiveKitchenNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var doccollectiveKitchenDecRef = db.collection("collectiveKitchen").doc("december");

            doccollectiveKitchenDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.collectiveKitchenDecContents = doc.data();
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
              return this.collectiveKitchenJanContents.expenses = getRealValue(this.collectiveKitchenJanContents.perCategory1) + getRealValue(this.collectiveKitchenJanContents.perCategory2) + getRealValue(this.collectiveKitchenJanContents.perCategory3) + getRealValue(this.collectiveKitchenJanContents.perCategory4) + getRealValue(this.collectiveKitchenJanContents.perCategory5) + getRealValue(this.collectiveKitchenJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenJanContents.budgetUsage = ((getRealValue(this.collectiveKitchenJanContents.expenses) / getRealValue(this.collectiveKitchenJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenFebContents.expenses = getRealValue(this.collectiveKitchenFebContents.perCategory1) + getRealValue(this.collectiveKitchenFebContents.perCategory2) + getRealValue(this.collectiveKitchenFebContents.perCategory3) + getRealValue(this.collectiveKitchenFebContents.perCategory4) + getRealValue(this.collectiveKitchenFebContents.perCategory5) + getRealValue(this.collectiveKitchenFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenFebContents.budgetUsage = (((getRealValue(this.collectiveKitchenFebContents.expenses) + getRealValue(this.collectiveKitchenJanContents.expenses)) / getRealValue(this.collectiveKitchenFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenMarContents.expenses = getRealValue(this.collectiveKitchenMarContents.perCategory1) + getRealValue(this.collectiveKitchenMarContents.perCategory2) + getRealValue(this.collectiveKitchenMarContents.perCategory3) + getRealValue(this.collectiveKitchenMarContents.perCategory4) + getRealValue(this.collectiveKitchenMarContents.perCategory5) + getRealValue(this.collectiveKitchenMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenMarContents.budgetUsage = (((getRealValue(this.collectiveKitchenMarContents.expenses) + getRealValue(this.collectiveKitchenFebContents.expenses) + getRealValue(this.collectiveKitchenJanContents.expenses)) / getRealValue(this.collectiveKitchenMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenAprContents.expenses = getRealValue(this.collectiveKitchenAprContents.perCategory1) + getRealValue(this.collectiveKitchenAprContents.perCategory2) + getRealValue(this.collectiveKitchenAprContents.perCategory3) + getRealValue(this.collectiveKitchenAprContents.perCategory4) + getRealValue(this.collectiveKitchenAprContents.perCategory5) + getRealValue(this.collectiveKitchenAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenAprContents.budgetUsage = (((getRealValue(this.collectiveKitchenAprContents.expenses) + getRealValue(this.collectiveKitchenMarContents.expenses) + getRealValue(this.collectiveKitchenFebContents.expenses) + getRealValue(this.collectiveKitchenJanContents.expenses)) / getRealValue(this.collectiveKitchenAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenMayContents.expenses = getRealValue(this.collectiveKitchenMayContents.perCategory1) + getRealValue(this.collectiveKitchenMayContents.perCategory2) + getRealValue(this.collectiveKitchenMayContents.perCategory3) + getRealValue(this.collectiveKitchenMayContents.perCategory4) + getRealValue(this.collectiveKitchenMayContents.perCategory5) + getRealValue(this.collectiveKitchenMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenMayContents.budgetUsage = (((getRealValue(this.collectiveKitchenMayContents.expenses) + getRealValue(this.collectiveKitchenAprContents.expenses) + getRealValue(this.collectiveKitchenMarContents.expenses) + getRealValue(this.collectiveKitchenFebContents.expenses) + getRealValue(this.collectiveKitchenJanContents.expenses)) / getRealValue(this.collectiveKitchenMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenJunContents.expenses = getRealValue(this.collectiveKitchenJunContents.perCategory1) + getRealValue(this.collectiveKitchenJunContents.perCategory2) + getRealValue(this.collectiveKitchenJunContents.perCategory3) + getRealValue(this.collectiveKitchenJunContents.perCategory4) + getRealValue(this.collectiveKitchenJunContents.perCategory5) + getRealValue(this.collectiveKitchenJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenJunContents.budgetUsage = (((getRealValue(this.collectiveKitchenJunContents.expenses) + getRealValue(this.collectiveKitchenMayContents.expenses) + getRealValue(this.collectiveKitchenAprContents.expenses) + getRealValue(this.collectiveKitchenMarContents.expenses) + getRealValue(this.collectiveKitchenFebContents.expenses) + getRealValue(this.collectiveKitchenJanContents.expenses)) / getRealValue(this.collectiveKitchenJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenJulContents.expenses = getRealValue(this.collectiveKitchenJulContents.perCategory1) + getRealValue(this.collectiveKitchenJulContents.perCategory2) + getRealValue(this.collectiveKitchenJulContents.perCategory3) + getRealValue(this.collectiveKitchenJulContents.perCategory4) + getRealValue(this.collectiveKitchenJulContents.perCategory5) + getRealValue(this.collectiveKitchenJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenJulContents.budgetUsage = (((getRealValue(this.collectiveKitchenJulContents.expenses) + getRealValue(this.collectiveKitchenJunContents.expenses) + getRealValue(this.collectiveKitchenMayContents.expenses) + getRealValue(this.collectiveKitchenAprContents.expenses) + getRealValue(this.collectiveKitchenMarContents.expenses) + getRealValue(this.collectiveKitchenFebContents.expenses) + getRealValue(this.collectiveKitchenJanContents.expenses)) / getRealValue(this.collectiveKitchenJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenAugContents.expenses = getRealValue(this.collectiveKitchenAugContents.perCategory1) + getRealValue(this.collectiveKitchenAugContents.perCategory2) + getRealValue(this.collectiveKitchenAugContents.perCategory3) + getRealValue(this.collectiveKitchenAugContents.perCategory4) + getRealValue(this.collectiveKitchenAugContents.perCategory5) + getRealValue(this.collectiveKitchenAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenAugContents.budgetUsage = (((getRealValue(this.collectiveKitchenAugContents.expenses) + getRealValue(this.collectiveKitchenJulContents.expenses) + getRealValue(this.collectiveKitchenJunContents.expenses) + getRealValue(this.collectiveKitchenMayContents.expenses) + getRealValue(this.collectiveKitchenAprContents.expenses) + getRealValue(this.collectiveKitchenMarContents.expenses) + getRealValue(this.collectiveKitchenFebContents.expenses) + getRealValue(this.collectiveKitchenJanContents.expenses)) / getRealValue(this.collectiveKitchenAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenSepContents.expenses = getRealValue(this.collectiveKitchenSepContents.perCategory1) + getRealValue(this.collectiveKitchenSepContents.perCategory2) + getRealValue(this.collectiveKitchenSepContents.perCategory3) + getRealValue(this.collectiveKitchenSepContents.perCategory4) + getRealValue(this.collectiveKitchenSepContents.perCategory5) + getRealValue(this.collectiveKitchenSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenSepContents.budgetUsage = (((getRealValue(this.collectiveKitchenSepContents.expenses) + getRealValue(this.collectiveKitchenAugContents.expenses) + getRealValue(this.collectiveKitchenJulContents.expenses) + getRealValue(this.collectiveKitchenJunContents.expenses) + getRealValue(this.collectiveKitchenMayContents.expenses) + getRealValue(this.collectiveKitchenAprContents.expenses) + getRealValue(this.collectiveKitchenMarContents.expenses) + getRealValue(this.collectiveKitchenFebContents.expenses) + getRealValue(this.collectiveKitchenJanContents.expenses)) / getRealValue(this.collectiveKitchenSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenOctContents.expenses = getRealValue(this.collectiveKitchenOctContents.perCategory1) + getRealValue(this.collectiveKitchenOctContents.perCategory2) + getRealValue(this.collectiveKitchenOctContents.perCategory3) + getRealValue(this.collectiveKitchenOctContents.perCategory4) + getRealValue(this.collectiveKitchenOctContents.perCategory5) + getRealValue(this.collectiveKitchenOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenOctContents.budgetUsage = (((getRealValue(this.collectiveKitchenOctContents.expenses) + getRealValue(this.collectiveKitchenSepContents.expenses) + getRealValue(this.collectiveKitchenAugContents.expenses) + getRealValue(this.collectiveKitchenJulContents.expenses) + getRealValue(this.collectiveKitchenJunContents.expenses) + getRealValue(this.collectiveKitchenMayContents.expenses) + getRealValue(this.collectiveKitchenAprContents.expenses) + getRealValue(this.collectiveKitchenMarContents.expenses) + getRealValue(this.collectiveKitchenFebContents.expenses) + getRealValue(this.collectiveKitchenJanContents.expenses)) / getRealValue(this.collectiveKitchenOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenNovContents.expenses = getRealValue(this.collectiveKitchenNovContents.perCategory1) + getRealValue(this.collectiveKitchenNovContents.perCategory2) + getRealValue(this.collectiveKitchenNovContents.perCategory3) + getRealValue(this.collectiveKitchenNovContents.perCategory4) + getRealValue(this.collectiveKitchenNovContents.perCategory5) + getRealValue(this.collectiveKitchenNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenNovContents.budgetUsage = (((getRealValue(this.collectiveKitchenNovContents.expenses) + getRealValue(this.collectiveKitchenOctContents.expenses) + getRealValue(this.collectiveKitchenSepContents.expenses) + getRealValue(this.collectiveKitchenAugContents.expenses) + getRealValue(this.collectiveKitchenJulContents.expenses) + getRealValue(this.collectiveKitchenJunContents.expenses) + getRealValue(this.collectiveKitchenMayContents.expenses) + getRealValue(this.collectiveKitchenAprContents.expenses) + getRealValue(this.collectiveKitchenMarContents.expenses) + getRealValue(this.collectiveKitchenFebContents.expenses) + getRealValue(this.collectiveKitchenJanContents.expenses)) / getRealValue(this.collectiveKitchenNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenDecContents.expenses = getRealValue(this.collectiveKitchenDecContents.perCategory1) + getRealValue(this.collectiveKitchenDecContents.perCategory2) + getRealValue(this.collectiveKitchenDecContents.perCategory3) + getRealValue(this.collectiveKitchenDecContents.perCategory4) + getRealValue(this.collectiveKitchenDecContents.perCategory5) + getRealValue(this.collectiveKitchenDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.collectiveKitchenDecContents.budgetUsage = (((getRealValue(this.collectiveKitchenDecContents.expenses) + getRealValue(this.collectiveKitchenNovContents.expenses) + getRealValue(this.collectiveKitchenOctContents.expenses) + getRealValue(this.collectiveKitchenSepContents.expenses) + getRealValue(this.collectiveKitchenAugContents.expenses) + getRealValue(this.collectiveKitchenJulContents.expenses) + getRealValue(this.collectiveKitchenJunContents.expenses) + getRealValue(this.collectiveKitchenMayContents.expenses) + getRealValue(this.collectiveKitchenAprContents.expenses) + getRealValue(this.collectiveKitchenMarContents.expenses) + getRealValue(this.collectiveKitchenFebContents.expenses) + getRealValue(this.collectiveKitchenJanContents.expenses)) / getRealValue(this.collectiveKitchenDecContents.actualBudget))*100).toFixed(2)
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
