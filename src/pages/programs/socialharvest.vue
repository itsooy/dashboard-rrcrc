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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJanContents.kpi1 == null)?'grey-2':(socialHarvestJanContents.kpi1 >= '0' && socialHarvestJanContents.kpi1 <= '3.75')?'red':(socialHarvestJanContents.kpi1 > '3.75' && socialHarvestJanContents.kpi1 <= '5')?'orange':(socialHarvestJanContents.kpi1 > '5' && socialHarvestJanContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJanContents.kpi1 >= '6.25' && socialHarvestJanContents.kpi1 < '7.5')?'green':(socialHarvestJanContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi2 == null)?'grey-2':(socialHarvestJanContents.kpi2 >= '0' && socialHarvestJanContents.kpi2 <= '60.6')?'red':(socialHarvestJanContents.kpi2 > '60.6' && socialHarvestJanContents.kpi2 <= '80.8')?'orange':(socialHarvestJanContents.kpi2 > '80.8' && socialHarvestJanContents.kpi2 < '101')?'yellow-7':(socialHarvestJanContents.kpi2 >= '101' && socialHarvestJanContents.kpi2 < '121.2')?'green':(socialHarvestJanContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi3 == null)?'grey-2':(socialHarvestJanContents.kpi3 >= '0' && socialHarvestJanContents.kpi3 <= '18.75')?'red':(socialHarvestJanContents.kpi3 > '18.75' && socialHarvestJanContents.kpi3 <= '25')?'orange':(socialHarvestJanContents.kpi3 > '25' && socialHarvestJanContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJanContents.kpi3 >= '31.25' && socialHarvestJanContents.kpi3 < '37.5')?'green':(socialHarvestJanContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi4 == null)?'grey-2':(socialHarvestJanContents.kpi4 >= '0' && socialHarvestJanContents.kpi4 <= '3.9')?'red':(socialHarvestJanContents.kpi4 > '3.9' && socialHarvestJanContents.kpi4 <= '5.2')?'orange':(socialHarvestJanContents.kpi4 > '5.2' && socialHarvestJanContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJanContents.kpi4 >= '6.5' && socialHarvestJanContents.kpi4 < '7.8')?'green':(socialHarvestJanContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi5 == null)?'grey-2':(socialHarvestJanContents.kpi5 >= '0' && socialHarvestJanContents.kpi5 <= '2.2227')?'red':(socialHarvestJanContents.kpi5 > '2.2227' && socialHarvestJanContents.kpi5 <= '2.9636')?'orange':(socialHarvestJanContents.kpi5 > '2.9636' && socialHarvestJanContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJanContents.kpi5 >= '3.7045' && socialHarvestJanContents.kpi5 < '4.4454')?'green':(socialHarvestJanContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestFebContents.kpi1 == null)?'grey-2':(socialHarvestFebContents.kpi1 >= '0' && socialHarvestFebContents.kpi1 <= '3.75')?'red':(socialHarvestFebContents.kpi1 > '3.75' && socialHarvestFebContents.kpi1 <= '5')?'orange':(socialHarvestFebContents.kpi1 > '5' && socialHarvestFebContents.kpi1 < '6.25')?'yellow-7':(socialHarvestFebContents.kpi1 >= '6.25' && socialHarvestFebContents.kpi1 < '7.5')?'green':(socialHarvestFebContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi2 == null)?'grey-2':(socialHarvestFebContents.kpi2 >= '0' && socialHarvestFebContents.kpi2 <= '60.6')?'red':(socialHarvestFebContents.kpi2 > '60.6' && socialHarvestFebContents.kpi2 <= '80.8')?'orange':(socialHarvestFebContents.kpi2 > '80.8' && socialHarvestFebContents.kpi2 < '101')?'yellow-7':(socialHarvestFebContents.kpi2 >= '101' && socialHarvestFebContents.kpi2 < '121.2')?'green':(socialHarvestFebContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi3 == null)?'grey-2':(socialHarvestFebContents.kpi3 >= '0' && socialHarvestFebContents.kpi3 <= '18.75')?'red':(socialHarvestFebContents.kpi3 > '18.75' && socialHarvestFebContents.kpi3 <= '25')?'orange':(socialHarvestFebContents.kpi3 > '25' && socialHarvestFebContents.kpi3 < '31.25')?'yellow-7':(socialHarvestFebContents.kpi3 >= '31.25' && socialHarvestFebContents.kpi3 < '37.5')?'green':(socialHarvestFebContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi4 == null)?'grey-2':(socialHarvestFebContents.kpi4 >= '0' && socialHarvestFebContents.kpi4 <= '3.9')?'red':(socialHarvestFebContents.kpi4 > '3.9' && socialHarvestFebContents.kpi4 <= '5.2')?'orange':(socialHarvestFebContents.kpi4 > '5.2' && socialHarvestFebContents.kpi4 < '6.5')?'yellow-7':(socialHarvestFebContents.kpi4 >= '6.5' && socialHarvestFebContents.kpi4 < '7.8')?'green':(socialHarvestFebContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi5 == null)?'grey-2':(socialHarvestFebContents.kpi5 >= '0' && socialHarvestFebContents.kpi5 <= '2.2227')?'red':(socialHarvestFebContents.kpi5 > '2.2227' && socialHarvestFebContents.kpi5 <= '2.9636')?'orange':(socialHarvestFebContents.kpi5 > '2.9636' && socialHarvestFebContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestFebContents.kpi5 >= '3.7045' && socialHarvestFebContents.kpi5 < '4.4454')?'green':(socialHarvestFebContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMarContents.kpi1 == null)?'grey-2':(socialHarvestMarContents.kpi1 >= '0' && socialHarvestMarContents.kpi1 <= '3.75')?'red':(socialHarvestMarContents.kpi1 > '3.75' && socialHarvestMarContents.kpi1 <= '5')?'orange':(socialHarvestMarContents.kpi1 > '5' && socialHarvestMarContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMarContents.kpi1 >= '6.25' && socialHarvestMarContents.kpi1 < '7.5')?'green':(socialHarvestMarContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi2 == null)?'grey-2':(socialHarvestMarContents.kpi2 >= '0' && socialHarvestMarContents.kpi2 <= '60.6')?'red':(socialHarvestMarContents.kpi2 > '60.6' && socialHarvestMarContents.kpi2 <= '80.8')?'orange':(socialHarvestMarContents.kpi2 > '80.8' && socialHarvestMarContents.kpi2 < '101')?'yellow-7':(socialHarvestMarContents.kpi2 >= '101' && socialHarvestMarContents.kpi2 < '121.2')?'green':(socialHarvestMarContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi3 == null)?'grey-2':(socialHarvestMarContents.kpi3 >= '0' && socialHarvestMarContents.kpi3 <= '18.75')?'red':(socialHarvestMarContents.kpi3 > '18.75' && socialHarvestMarContents.kpi3 <= '25')?'orange':(socialHarvestMarContents.kpi3 > '25' && socialHarvestMarContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMarContents.kpi3 >= '31.25' && socialHarvestMarContents.kpi3 < '37.5')?'green':(socialHarvestMarContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi4 == null)?'grey-2':(socialHarvestMarContents.kpi4 >= '0' && socialHarvestMarContents.kpi4 <= '3.9')?'red':(socialHarvestMarContents.kpi4 > '3.9' && socialHarvestMarContents.kpi4 <= '5.2')?'orange':(socialHarvestMarContents.kpi4 > '5.2' && socialHarvestMarContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMarContents.kpi4 >= '6.5' && socialHarvestMarContents.kpi4 < '7.8')?'green':(socialHarvestMarContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi5 == null)?'grey-2':(socialHarvestMarContents.kpi5 >= '0' && socialHarvestMarContents.kpi5 <= '2.2227')?'red':(socialHarvestMarContents.kpi5 > '2.2227' && socialHarvestMarContents.kpi5 <= '2.9636')?'orange':(socialHarvestMarContents.kpi5 > '2.9636' && socialHarvestMarContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMarContents.kpi5 >= '3.7045' && socialHarvestMarContents.kpi5 < '4.4454')?'green':(socialHarvestMarContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAprContents.kpi1 == null)?'grey-2':(socialHarvestAprContents.kpi1 >= '0' && socialHarvestAprContents.kpi1 <= '3.75')?'red':(socialHarvestAprContents.kpi1 > '3.75' && socialHarvestAprContents.kpi1 <= '5')?'orange':(socialHarvestAprContents.kpi1 > '5' && socialHarvestAprContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAprContents.kpi1 >= '6.25' && socialHarvestAprContents.kpi1 < '7.5')?'green':(socialHarvestAprContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi2 == null)?'grey-2':(socialHarvestAprContents.kpi2 >= '0' && socialHarvestAprContents.kpi2 <= '60.6')?'red':(socialHarvestAprContents.kpi2 > '60.6' && socialHarvestAprContents.kpi2 <= '80.8')?'orange':(socialHarvestAprContents.kpi2 > '80.8' && socialHarvestAprContents.kpi2 < '101')?'yellow-7':(socialHarvestAprContents.kpi2 >= '101' && socialHarvestAprContents.kpi2 < '121.2')?'green':(socialHarvestAprContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi3 == null)?'grey-2':(socialHarvestAprContents.kpi3 >= '0' && socialHarvestAprContents.kpi3 <= '18.75')?'red':(socialHarvestAprContents.kpi3 > '18.75' && socialHarvestAprContents.kpi3 <= '25')?'orange':(socialHarvestAprContents.kpi3 > '25' && socialHarvestAprContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAprContents.kpi3 >= '31.25' && socialHarvestAprContents.kpi3 < '37.5')?'green':(socialHarvestAprContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi4 == null)?'grey-2':(socialHarvestAprContents.kpi4 >= '0' && socialHarvestAprContents.kpi4 <= '3.9')?'red':(socialHarvestAprContents.kpi4 > '3.9' && socialHarvestAprContents.kpi4 <= '5.2')?'orange':(socialHarvestAprContents.kpi4 > '5.2' && socialHarvestAprContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAprContents.kpi4 >= '6.5' && socialHarvestAprContents.kpi4 < '7.8')?'green':(socialHarvestAprContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi5 == null)?'grey-2':(socialHarvestAprContents.kpi5 >= '0' && socialHarvestAprContents.kpi5 <= '2.2227')?'red':(socialHarvestAprContents.kpi5 > '2.2227' && socialHarvestAprContents.kpi5 <= '2.9636')?'orange':(socialHarvestAprContents.kpi5 > '2.9636' && socialHarvestAprContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAprContents.kpi5 >= '3.7045' && socialHarvestAprContents.kpi5 < '4.4454')?'green':(socialHarvestAprContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMayContents.kpi1 == null)?'grey-2':(socialHarvestMayContents.kpi1 >= '0' && socialHarvestMayContents.kpi1 <= '3.75')?'red':(socialHarvestMayContents.kpi1 > '3.75' && socialHarvestMayContents.kpi1 <= '5')?'orange':(socialHarvestMayContents.kpi1 > '5' && socialHarvestMayContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMayContents.kpi1 >= '6.25' && socialHarvestMayContents.kpi1 < '7.5')?'green':(socialHarvestMayContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi2 == null)?'grey-2':(socialHarvestMayContents.kpi2 >= '0' && socialHarvestMayContents.kpi2 <= '60.6')?'red':(socialHarvestMayContents.kpi2 > '60.6' && socialHarvestMayContents.kpi2 <= '80.8')?'orange':(socialHarvestMayContents.kpi2 > '80.8' && socialHarvestMayContents.kpi2 < '101')?'yellow-7':(socialHarvestMayContents.kpi2 >= '101' && socialHarvestMayContents.kpi2 < '121.2')?'green':(socialHarvestMayContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi3 == null)?'grey-2':(socialHarvestMayContents.kpi3 >= '0' && socialHarvestMayContents.kpi3 <= '18.75')?'red':(socialHarvestMayContents.kpi3 > '18.75' && socialHarvestMayContents.kpi3 <= '25')?'orange':(socialHarvestMayContents.kpi3 > '25' && socialHarvestMayContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMayContents.kpi3 >= '31.25' && socialHarvestMayContents.kpi3 < '37.5')?'green':(socialHarvestMayContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi4 == null)?'grey-2':(socialHarvestMayContents.kpi4 >= '0' && socialHarvestMayContents.kpi4 <= '3.9')?'red':(socialHarvestMayContents.kpi4 > '3.9' && socialHarvestMayContents.kpi4 <= '5.2')?'orange':(socialHarvestMayContents.kpi4 > '5.2' && socialHarvestMayContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMayContents.kpi4 >= '6.5' && socialHarvestMayContents.kpi4 < '7.8')?'green':(socialHarvestMayContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi5 == null)?'grey-2':(socialHarvestMayContents.kpi5 >= '0' && socialHarvestMayContents.kpi5 <= '2.2227')?'red':(socialHarvestMayContents.kpi5 > '2.2227' && socialHarvestMayContents.kpi5 <= '2.9636')?'orange':(socialHarvestMayContents.kpi5 > '2.9636' && socialHarvestMayContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMayContents.kpi5 >= '3.7045' && socialHarvestMayContents.kpi5 < '4.4454')?'green':(socialHarvestMayContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJunContents.kpi1 == null)?'grey-2':(socialHarvestJunContents.kpi1 >= '0' && socialHarvestJunContents.kpi1 <= '3.75')?'red':(socialHarvestJunContents.kpi1 > '3.75' && socialHarvestJunContents.kpi1 <= '5')?'orange':(socialHarvestJunContents.kpi1 > '5' && socialHarvestJunContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJunContents.kpi1 >= '6.25' && socialHarvestJunContents.kpi1 < '7.5')?'green':(socialHarvestJunContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi2 == null)?'grey-2':(socialHarvestJunContents.kpi2 >= '0' && socialHarvestJunContents.kpi2 <= '60.6')?'red':(socialHarvestJunContents.kpi2 > '60.6' && socialHarvestJunContents.kpi2 <= '80.8')?'orange':(socialHarvestJunContents.kpi2 > '80.8' && socialHarvestJunContents.kpi2 < '101')?'yellow-7':(socialHarvestJunContents.kpi2 >= '101' && socialHarvestJunContents.kpi2 < '121.2')?'green':(socialHarvestJunContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi3 == null)?'grey-2':(socialHarvestJunContents.kpi3 >= '0' && socialHarvestJunContents.kpi3 <= '18.75')?'red':(socialHarvestJunContents.kpi3 > '18.75' && socialHarvestJunContents.kpi3 <= '25')?'orange':(socialHarvestJunContents.kpi3 > '25' && socialHarvestJunContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJunContents.kpi3 >= '31.25' && socialHarvestJunContents.kpi3 < '37.5')?'green':(socialHarvestJunContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi4 == null)?'grey-2':(socialHarvestJunContents.kpi4 >= '0' && socialHarvestJunContents.kpi4 <= '3.9')?'red':(socialHarvestJunContents.kpi4 > '3.9' && socialHarvestJunContents.kpi4 <= '5.2')?'orange':(socialHarvestJunContents.kpi4 > '5.2' && socialHarvestJunContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJunContents.kpi4 >= '6.5' && socialHarvestJunContents.kpi4 < '7.8')?'green':(socialHarvestJunContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi5 == null)?'grey-2':(socialHarvestJunContents.kpi5 >= '0' && socialHarvestJunContents.kpi5 <= '2.2227')?'red':(socialHarvestJunContents.kpi5 > '2.2227' && socialHarvestJunContents.kpi5 <= '2.9636')?'orange':(socialHarvestJunContents.kpi5 > '2.9636' && socialHarvestJunContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJunContents.kpi5 >= '3.7045' && socialHarvestJunContents.kpi5 < '4.4454')?'green':(socialHarvestJunContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJulContents.kpi1 == null)?'grey-2':(socialHarvestJulContents.kpi1 >= '0' && socialHarvestJulContents.kpi1 <= '3.75')?'red':(socialHarvestJulContents.kpi1 > '3.75' && socialHarvestJulContents.kpi1 <= '5')?'orange':(socialHarvestJulContents.kpi1 > '5' && socialHarvestJulContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJulContents.kpi1 >= '6.25' && socialHarvestJulContents.kpi1 < '7.5')?'green':(socialHarvestJulContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi2 == null)?'grey-2':(socialHarvestJulContents.kpi2 >= '0' && socialHarvestJulContents.kpi2 <= '60.6')?'red':(socialHarvestJulContents.kpi2 > '60.6' && socialHarvestJulContents.kpi2 <= '80.8')?'orange':(socialHarvestJulContents.kpi2 > '80.8' && socialHarvestJulContents.kpi2 < '101')?'yellow-7':(socialHarvestJulContents.kpi2 >= '101' && socialHarvestJulContents.kpi2 < '121.2')?'green':(socialHarvestJulContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi3 == null)?'grey-2':(socialHarvestJulContents.kpi3 >= '0' && socialHarvestJulContents.kpi3 <= '18.75')?'red':(socialHarvestJulContents.kpi3 > '18.75' && socialHarvestJulContents.kpi3 <= '25')?'orange':(socialHarvestJulContents.kpi3 > '25' && socialHarvestJulContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJulContents.kpi3 >= '31.25' && socialHarvestJulContents.kpi3 < '37.5')?'green':(socialHarvestJulContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi4 == null)?'grey-2':(socialHarvestJulContents.kpi4 >= '0' && socialHarvestJulContents.kpi4 <= '3.9')?'red':(socialHarvestJulContents.kpi4 > '3.9' && socialHarvestJulContents.kpi4 <= '5.2')?'orange':(socialHarvestJulContents.kpi4 > '5.2' && socialHarvestJulContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJulContents.kpi4 >= '6.5' && socialHarvestJulContents.kpi4 < '7.8')?'green':(socialHarvestJulContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi5 == null)?'grey-2':(socialHarvestJulContents.kpi5 >= '0' && socialHarvestJulContents.kpi5 <= '2.2227')?'red':(socialHarvestJulContents.kpi5 > '2.2227' && socialHarvestJulContents.kpi5 <= '2.9636')?'orange':(socialHarvestJulContents.kpi5 > '2.9636' && socialHarvestJulContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJulContents.kpi5 >= '3.7045' && socialHarvestJulContents.kpi5 < '4.4454')?'green':(socialHarvestJulContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAugContents.kpi1 == null)?'grey-2':(socialHarvestAugContents.kpi1 >= '0' && socialHarvestAugContents.kpi1 <= '3.75')?'red':(socialHarvestAugContents.kpi1 > '3.75' && socialHarvestAugContents.kpi1 <= '5')?'orange':(socialHarvestAugContents.kpi1 > '5' && socialHarvestAugContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAugContents.kpi1 >= '6.25' && socialHarvestAugContents.kpi1 < '7.5')?'green':(socialHarvestAugContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi2 == null)?'grey-2':(socialHarvestAugContents.kpi2 >= '0' && socialHarvestAugContents.kpi2 <= '60.6')?'red':(socialHarvestAugContents.kpi2 > '60.6' && socialHarvestAugContents.kpi2 <= '80.8')?'orange':(socialHarvestAugContents.kpi2 > '80.8' && socialHarvestAugContents.kpi2 < '101')?'yellow-7':(socialHarvestAugContents.kpi2 >= '101' && socialHarvestAugContents.kpi2 < '121.2')?'green':(socialHarvestAugContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi3 == null)?'grey-2':(socialHarvestAugContents.kpi3 >= '0' && socialHarvestAugContents.kpi3 <= '18.75')?'red':(socialHarvestAugContents.kpi3 > '18.75' && socialHarvestAugContents.kpi3 <= '25')?'orange':(socialHarvestAugContents.kpi3 > '25' && socialHarvestAugContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAugContents.kpi3 >= '31.25' && socialHarvestAugContents.kpi3 < '37.5')?'green':(socialHarvestAugContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi4 == null)?'grey-2':(socialHarvestAugContents.kpi4 >= '0' && socialHarvestAugContents.kpi4 <= '3.9')?'red':(socialHarvestAugContents.kpi4 > '3.9' && socialHarvestAugContents.kpi4 <= '5.2')?'orange':(socialHarvestAugContents.kpi4 > '5.2' && socialHarvestAugContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAugContents.kpi4 >= '6.5' && socialHarvestAugContents.kpi4 < '7.8')?'green':(socialHarvestAugContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi5 == null)?'grey-2':(socialHarvestAugContents.kpi5 >= '0' && socialHarvestAugContents.kpi5 <= '2.2227')?'red':(socialHarvestAugContents.kpi5 > '2.2227' && socialHarvestAugContents.kpi5 <= '2.9636')?'orange':(socialHarvestAugContents.kpi5 > '2.9636' && socialHarvestAugContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAugContents.kpi5 >= '3.7045' && socialHarvestAugContents.kpi5 < '4.4454')?'green':(socialHarvestAugContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestSepContents.kpi1 == null)?'grey-2':(socialHarvestSepContents.kpi1 >= '0' && socialHarvestSepContents.kpi1 <= '3.75')?'red':(socialHarvestSepContents.kpi1 > '3.75' && socialHarvestSepContents.kpi1 <= '5')?'orange':(socialHarvestSepContents.kpi1 > '5' && socialHarvestSepContents.kpi1 < '6.25')?'yellow-7':(socialHarvestSepContents.kpi1 >= '6.25' && socialHarvestSepContents.kpi1 < '7.5')?'green':(socialHarvestSepContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi2 == null)?'grey-2':(socialHarvestSepContents.kpi2 >= '0' && socialHarvestSepContents.kpi2 <= '60.6')?'red':(socialHarvestSepContents.kpi2 > '60.6' && socialHarvestSepContents.kpi2 <= '80.8')?'orange':(socialHarvestSepContents.kpi2 > '80.8' && socialHarvestSepContents.kpi2 < '101')?'yellow-7':(socialHarvestSepContents.kpi2 >= '101' && socialHarvestSepContents.kpi2 < '121.2')?'green':(socialHarvestSepContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi3 == null)?'grey-2':(socialHarvestSepContents.kpi3 >= '0' && socialHarvestSepContents.kpi3 <= '18.75')?'red':(socialHarvestSepContents.kpi3 > '18.75' && socialHarvestSepContents.kpi3 <= '25')?'orange':(socialHarvestSepContents.kpi3 > '25' && socialHarvestSepContents.kpi3 < '31.25')?'yellow-7':(socialHarvestSepContents.kpi3 >= '31.25' && socialHarvestSepContents.kpi3 < '37.5')?'green':(socialHarvestSepContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi4 == null)?'grey-2':(socialHarvestSepContents.kpi4 >= '0' && socialHarvestSepContents.kpi4 <= '3.9')?'red':(socialHarvestSepContents.kpi4 > '3.9' && socialHarvestSepContents.kpi4 <= '5.2')?'orange':(socialHarvestSepContents.kpi4 > '5.2' && socialHarvestSepContents.kpi4 < '6.5')?'yellow-7':(socialHarvestSepContents.kpi4 >= '6.5' && socialHarvestSepContents.kpi4 < '7.8')?'green':(socialHarvestSepContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi5 == null)?'grey-2':(socialHarvestSepContents.kpi5 >= '0' && socialHarvestSepContents.kpi5 <= '2.2227')?'red':(socialHarvestSepContents.kpi5 > '2.2227' && socialHarvestSepContents.kpi5 <= '2.9636')?'orange':(socialHarvestSepContents.kpi5 > '2.9636' && socialHarvestSepContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestSepContents.kpi5 >= '3.7045' && socialHarvestSepContents.kpi5 < '4.4454')?'green':(socialHarvestSepContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestOctContents.kpi1 == null)?'grey-2':(socialHarvestOctContents.kpi1 >= '0' && socialHarvestOctContents.kpi1 <= '3.75')?'red':(socialHarvestOctContents.kpi1 > '3.75' && socialHarvestOctContents.kpi1 <= '5')?'orange':(socialHarvestOctContents.kpi1 > '5' && socialHarvestOctContents.kpi1 < '6.25')?'yellow-7':(socialHarvestOctContents.kpi1 >= '6.25' && socialHarvestOctContents.kpi1 < '7.5')?'green':(socialHarvestOctContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi2 == null)?'grey-2':(socialHarvestOctContents.kpi2 >= '0' && socialHarvestOctContents.kpi2 <= '60.6')?'red':(socialHarvestOctContents.kpi2 > '60.6' && socialHarvestOctContents.kpi2 <= '80.8')?'orange':(socialHarvestOctContents.kpi2 > '80.8' && socialHarvestOctContents.kpi2 < '101')?'yellow-7':(socialHarvestOctContents.kpi2 >= '101' && socialHarvestOctContents.kpi2 < '121.2')?'green':(socialHarvestOctContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi3 == null)?'grey-2':(socialHarvestOctContents.kpi3 >= '0' && socialHarvestOctContents.kpi3 <= '18.75')?'red':(socialHarvestOctContents.kpi3 > '18.75' && socialHarvestOctContents.kpi3 <= '25')?'orange':(socialHarvestOctContents.kpi3 > '25' && socialHarvestOctContents.kpi3 < '31.25')?'yellow-7':(socialHarvestOctContents.kpi3 >= '31.25' && socialHarvestOctContents.kpi3 < '37.5')?'green':(socialHarvestOctContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi4 == null)?'grey-2':(socialHarvestOctContents.kpi4 >= '0' && socialHarvestOctContents.kpi4 <= '3.9')?'red':(socialHarvestOctContents.kpi4 > '3.9' && socialHarvestOctContents.kpi4 <= '5.2')?'orange':(socialHarvestOctContents.kpi4 > '5.2' && socialHarvestOctContents.kpi4 < '6.5')?'yellow-7':(socialHarvestOctContents.kpi4 >= '6.5' && socialHarvestOctContents.kpi4 < '7.8')?'green':(socialHarvestOctContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi5 == null)?'grey-2':(socialHarvestOctContents.kpi5 >= '0' && socialHarvestOctContents.kpi5 <= '2.2227')?'red':(socialHarvestOctContents.kpi5 > '2.2227' && socialHarvestOctContents.kpi5 <= '2.9636')?'orange':(socialHarvestOctContents.kpi5 > '2.9636' && socialHarvestOctContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestOctContents.kpi5 >= '3.7045' && socialHarvestOctContents.kpi5 < '4.4454')?'green':(socialHarvestOctContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestNovContents.kpi1 == null)?'grey-2':(socialHarvestNovContents.kpi1 >= '0' && socialHarvestNovContents.kpi1 <= '3.75')?'red':(socialHarvestNovContents.kpi1 > '3.75' && socialHarvestNovContents.kpi1 <= '5')?'orange':(socialHarvestNovContents.kpi1 > '5' && socialHarvestNovContents.kpi1 < '6.25')?'yellow-7':(socialHarvestNovContents.kpi1 >= '6.25' && socialHarvestNovContents.kpi1 < '7.5')?'green':(socialHarvestNovContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi2 == null)?'grey-2':(socialHarvestNovContents.kpi2 >= '0' && socialHarvestNovContents.kpi2 <= '60.6')?'red':(socialHarvestNovContents.kpi2 > '60.6' && socialHarvestNovContents.kpi2 <= '80.8')?'orange':(socialHarvestNovContents.kpi2 > '80.8' && socialHarvestNovContents.kpi2 < '101')?'yellow-7':(socialHarvestNovContents.kpi2 >= '101' && socialHarvestNovContents.kpi2 < '121.2')?'green':(socialHarvestNovContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi3 == null)?'grey-2':(socialHarvestNovContents.kpi3 >= '0' && socialHarvestNovContents.kpi3 <= '18.75')?'red':(socialHarvestNovContents.kpi3 > '18.75' && socialHarvestNovContents.kpi3 <= '25')?'orange':(socialHarvestNovContents.kpi3 > '25' && socialHarvestNovContents.kpi3 < '31.25')?'yellow-7':(socialHarvestNovContents.kpi3 >= '31.25' && socialHarvestNovContents.kpi3 < '37.5')?'green':(socialHarvestNovContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi4 == null)?'grey-2':(socialHarvestNovContents.kpi4 >= '0' && socialHarvestNovContents.kpi4 <= '3.9')?'red':(socialHarvestNovContents.kpi4 > '3.9' && socialHarvestNovContents.kpi4 <= '5.2')?'orange':(socialHarvestNovContents.kpi4 > '5.2' && socialHarvestNovContents.kpi4 < '6.5')?'yellow-7':(socialHarvestNovContents.kpi4 >= '6.5' && socialHarvestNovContents.kpi4 < '7.8')?'green':(socialHarvestNovContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi5 == null)?'grey-2':(socialHarvestNovContents.kpi5 >= '0' && socialHarvestNovContents.kpi5 <= '2.2227')?'red':(socialHarvestNovContents.kpi5 > '2.2227' && socialHarvestNovContents.kpi5 <= '2.9636')?'orange':(socialHarvestNovContents.kpi5 > '2.9636' && socialHarvestNovContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestNovContents.kpi5 >= '3.7045' && socialHarvestNovContents.kpi5 < '4.4454')?'green':(socialHarvestNovContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestDecContents.kpi1 == null)?'grey-2':(socialHarvestDecContents.kpi1 >= '0' && socialHarvestDecContents.kpi1 <= '3.75')?'red':(socialHarvestDecContents.kpi1 > '3.75' && socialHarvestDecContents.kpi1 <= '5')?'orange':(socialHarvestDecContents.kpi1 > '5' && socialHarvestDecContents.kpi1 < '6.25')?'yellow-7':(socialHarvestDecContents.kpi1 >= '6.25' && socialHarvestDecContents.kpi1 < '7.5')?'green':(socialHarvestDecContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi2 == null)?'grey-2':(socialHarvestDecContents.kpi2 >= '0' && socialHarvestDecContents.kpi2 <= '60.6')?'red':(socialHarvestDecContents.kpi2 > '60.6' && socialHarvestDecContents.kpi2 <= '80.8')?'orange':(socialHarvestDecContents.kpi2 > '80.8' && socialHarvestDecContents.kpi2 < '101')?'yellow-7':(socialHarvestDecContents.kpi2 >= '101' && socialHarvestDecContents.kpi2 < '121.2')?'green':(socialHarvestDecContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi3 == null)?'grey-2':(socialHarvestDecContents.kpi3 >= '0' && socialHarvestDecContents.kpi3 <= '18.75')?'red':(socialHarvestDecContents.kpi3 > '18.75' && socialHarvestDecContents.kpi3 <= '25')?'orange':(socialHarvestDecContents.kpi3 > '25' && socialHarvestDecContents.kpi3 < '31.25')?'yellow-7':(socialHarvestDecContents.kpi3 >= '31.25' && socialHarvestDecContents.kpi3 < '37.5')?'green':(socialHarvestDecContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi4 == null)?'grey-2':(socialHarvestDecContents.kpi4 >= '0' && socialHarvestDecContents.kpi4 <= '3.9')?'red':(socialHarvestDecContents.kpi4 > '3.9' && socialHarvestDecContents.kpi4 <= '5.2')?'orange':(socialHarvestDecContents.kpi4 > '5.2' && socialHarvestDecContents.kpi4 < '6.5')?'yellow-7':(socialHarvestDecContents.kpi4 >= '6.5' && socialHarvestDecContents.kpi4 < '7.8')?'green':(socialHarvestDecContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi5 == null)?'grey-2':(socialHarvestDecContents.kpi5 >= '0' && socialHarvestDecContents.kpi5 <= '2.2227')?'red':(socialHarvestDecContents.kpi5 > '2.2227' && socialHarvestDecContents.kpi5 <= '2.9636')?'orange':(socialHarvestDecContents.kpi5 > '2.9636' && socialHarvestDecContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestDecContents.kpi5 >= '3.7045' && socialHarvestDecContents.kpi5 < '4.4454')?'green':(socialHarvestDecContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 5
                                <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJanContents.kpi1 == null)?'grey-2':(socialHarvestJanContents.kpi1 >= '0' && socialHarvestJanContents.kpi1 <= '3.75')?'red':(socialHarvestJanContents.kpi1 > '3.75' && socialHarvestJanContents.kpi1 <= '5')?'orange':(socialHarvestJanContents.kpi1 > '5' && socialHarvestJanContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJanContents.kpi1 >= '6.25' && socialHarvestJanContents.kpi1 < '7.5')?'green':(socialHarvestJanContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi2 == null)?'grey-2':(socialHarvestJanContents.kpi2 >= '0' && socialHarvestJanContents.kpi2 <= '60.6')?'red':(socialHarvestJanContents.kpi2 > '60.6' && socialHarvestJanContents.kpi2 <= '80.8')?'orange':(socialHarvestJanContents.kpi2 > '80.8' && socialHarvestJanContents.kpi2 < '101')?'yellow-7':(socialHarvestJanContents.kpi2 >= '101' && socialHarvestJanContents.kpi2 < '121.2')?'green':(socialHarvestJanContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi3 == null)?'grey-2':(socialHarvestJanContents.kpi3 >= '0' && socialHarvestJanContents.kpi3 <= '18.75')?'red':(socialHarvestJanContents.kpi3 > '18.75' && socialHarvestJanContents.kpi3 <= '25')?'orange':(socialHarvestJanContents.kpi3 > '25' && socialHarvestJanContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJanContents.kpi3 >= '31.25' && socialHarvestJanContents.kpi3 < '37.5')?'green':(socialHarvestJanContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi4 == null)?'grey-2':(socialHarvestJanContents.kpi4 >= '0' && socialHarvestJanContents.kpi4 <= '3.9')?'red':(socialHarvestJanContents.kpi4 > '3.9' && socialHarvestJanContents.kpi4 <= '5.2')?'orange':(socialHarvestJanContents.kpi4 > '5.2' && socialHarvestJanContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJanContents.kpi4 >= '6.5' && socialHarvestJanContents.kpi4 < '7.8')?'green':(socialHarvestJanContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi5 == null)?'grey-2':(socialHarvestJanContents.kpi5 >= '0' && socialHarvestJanContents.kpi5 <= '2.2227')?'red':(socialHarvestJanContents.kpi5 > '2.2227' && socialHarvestJanContents.kpi5 <= '2.9636')?'orange':(socialHarvestJanContents.kpi5 > '2.9636' && socialHarvestJanContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJanContents.kpi5 >= '3.7045' && socialHarvestJanContents.kpi5 < '4.4454')?'green':(socialHarvestJanContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestFebContents.kpi1 == null)?'grey-2':(socialHarvestFebContents.kpi1 >= '0' && socialHarvestFebContents.kpi1 <= '3.75')?'red':(socialHarvestFebContents.kpi1 > '3.75' && socialHarvestFebContents.kpi1 <= '5')?'orange':(socialHarvestFebContents.kpi1 > '5' && socialHarvestFebContents.kpi1 < '6.25')?'yellow-7':(socialHarvestFebContents.kpi1 >= '6.25' && socialHarvestFebContents.kpi1 < '7.5')?'green':(socialHarvestFebContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi2 == null)?'grey-2':(socialHarvestFebContents.kpi2 >= '0' && socialHarvestFebContents.kpi2 <= '60.6')?'red':(socialHarvestFebContents.kpi2 > '60.6' && socialHarvestFebContents.kpi2 <= '80.8')?'orange':(socialHarvestFebContents.kpi2 > '80.8' && socialHarvestFebContents.kpi2 < '101')?'yellow-7':(socialHarvestFebContents.kpi2 >= '101' && socialHarvestFebContents.kpi2 < '121.2')?'green':(socialHarvestFebContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi3 == null)?'grey-2':(socialHarvestFebContents.kpi3 >= '0' && socialHarvestFebContents.kpi3 <= '18.75')?'red':(socialHarvestFebContents.kpi3 > '18.75' && socialHarvestFebContents.kpi3 <= '25')?'orange':(socialHarvestFebContents.kpi3 > '25' && socialHarvestFebContents.kpi3 < '31.25')?'yellow-7':(socialHarvestFebContents.kpi3 >= '31.25' && socialHarvestFebContents.kpi3 < '37.5')?'green':(socialHarvestFebContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi4 == null)?'grey-2':(socialHarvestFebContents.kpi4 >= '0' && socialHarvestFebContents.kpi4 <= '3.9')?'red':(socialHarvestFebContents.kpi4 > '3.9' && socialHarvestFebContents.kpi4 <= '5.2')?'orange':(socialHarvestFebContents.kpi4 > '5.2' && socialHarvestFebContents.kpi4 < '6.5')?'yellow-7':(socialHarvestFebContents.kpi4 >= '6.5' && socialHarvestFebContents.kpi4 < '7.8')?'green':(socialHarvestFebContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi5 == null)?'grey-2':(socialHarvestFebContents.kpi5 >= '0' && socialHarvestFebContents.kpi5 <= '2.2227')?'red':(socialHarvestFebContents.kpi5 > '2.2227' && socialHarvestFebContents.kpi5 <= '2.9636')?'orange':(socialHarvestFebContents.kpi5 > '2.9636' && socialHarvestFebContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestFebContents.kpi5 >= '3.7045' && socialHarvestFebContents.kpi5 < '4.4454')?'green':(socialHarvestFebContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMarContents.kpi1 == null)?'grey-2':(socialHarvestMarContents.kpi1 >= '0' && socialHarvestMarContents.kpi1 <= '3.75')?'red':(socialHarvestMarContents.kpi1 > '3.75' && socialHarvestMarContents.kpi1 <= '5')?'orange':(socialHarvestMarContents.kpi1 > '5' && socialHarvestMarContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMarContents.kpi1 >= '6.25' && socialHarvestMarContents.kpi1 < '7.5')?'green':(socialHarvestMarContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi2 == null)?'grey-2':(socialHarvestMarContents.kpi2 >= '0' && socialHarvestMarContents.kpi2 <= '60.6')?'red':(socialHarvestMarContents.kpi2 > '60.6' && socialHarvestMarContents.kpi2 <= '80.8')?'orange':(socialHarvestMarContents.kpi2 > '80.8' && socialHarvestMarContents.kpi2 < '101')?'yellow-7':(socialHarvestMarContents.kpi2 >= '101' && socialHarvestMarContents.kpi2 < '121.2')?'green':(socialHarvestMarContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi3 == null)?'grey-2':(socialHarvestMarContents.kpi3 >= '0' && socialHarvestMarContents.kpi3 <= '18.75')?'red':(socialHarvestMarContents.kpi3 > '18.75' && socialHarvestMarContents.kpi3 <= '25')?'orange':(socialHarvestMarContents.kpi3 > '25' && socialHarvestMarContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMarContents.kpi3 >= '31.25' && socialHarvestMarContents.kpi3 < '37.5')?'green':(socialHarvestMarContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi4 == null)?'grey-2':(socialHarvestMarContents.kpi4 >= '0' && socialHarvestMarContents.kpi4 <= '3.9')?'red':(socialHarvestMarContents.kpi4 > '3.9' && socialHarvestMarContents.kpi4 <= '5.2')?'orange':(socialHarvestMarContents.kpi4 > '5.2' && socialHarvestMarContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMarContents.kpi4 >= '6.5' && socialHarvestMarContents.kpi4 < '7.8')?'green':(socialHarvestMarContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi5 == null)?'grey-2':(socialHarvestMarContents.kpi5 >= '0' && socialHarvestMarContents.kpi5 <= '2.2227')?'red':(socialHarvestMarContents.kpi5 > '2.2227' && socialHarvestMarContents.kpi5 <= '2.9636')?'orange':(socialHarvestMarContents.kpi5 > '2.9636' && socialHarvestMarContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMarContents.kpi5 >= '3.7045' && socialHarvestMarContents.kpi5 < '4.4454')?'green':(socialHarvestMarContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAprContents.kpi1 == null)?'grey-2':(socialHarvestAprContents.kpi1 >= '0' && socialHarvestAprContents.kpi1 <= '3.75')?'red':(socialHarvestAprContents.kpi1 > '3.75' && socialHarvestAprContents.kpi1 <= '5')?'orange':(socialHarvestAprContents.kpi1 > '5' && socialHarvestAprContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAprContents.kpi1 >= '6.25' && socialHarvestAprContents.kpi1 < '7.5')?'green':(socialHarvestAprContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi2 == null)?'grey-2':(socialHarvestAprContents.kpi2 >= '0' && socialHarvestAprContents.kpi2 <= '60.6')?'red':(socialHarvestAprContents.kpi2 > '60.6' && socialHarvestAprContents.kpi2 <= '80.8')?'orange':(socialHarvestAprContents.kpi2 > '80.8' && socialHarvestAprContents.kpi2 < '101')?'yellow-7':(socialHarvestAprContents.kpi2 >= '101' && socialHarvestAprContents.kpi2 < '121.2')?'green':(socialHarvestAprContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi3 == null)?'grey-2':(socialHarvestAprContents.kpi3 >= '0' && socialHarvestAprContents.kpi3 <= '18.75')?'red':(socialHarvestAprContents.kpi3 > '18.75' && socialHarvestAprContents.kpi3 <= '25')?'orange':(socialHarvestAprContents.kpi3 > '25' && socialHarvestAprContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAprContents.kpi3 >= '31.25' && socialHarvestAprContents.kpi3 < '37.5')?'green':(socialHarvestAprContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi4 == null)?'grey-2':(socialHarvestAprContents.kpi4 >= '0' && socialHarvestAprContents.kpi4 <= '3.9')?'red':(socialHarvestAprContents.kpi4 > '3.9' && socialHarvestAprContents.kpi4 <= '5.2')?'orange':(socialHarvestAprContents.kpi4 > '5.2' && socialHarvestAprContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAprContents.kpi4 >= '6.5' && socialHarvestAprContents.kpi4 < '7.8')?'green':(socialHarvestAprContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi5 == null)?'grey-2':(socialHarvestAprContents.kpi5 >= '0' && socialHarvestAprContents.kpi5 <= '2.2227')?'red':(socialHarvestAprContents.kpi5 > '2.2227' && socialHarvestAprContents.kpi5 <= '2.9636')?'orange':(socialHarvestAprContents.kpi5 > '2.9636' && socialHarvestAprContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAprContents.kpi5 >= '3.7045' && socialHarvestAprContents.kpi5 < '4.4454')?'green':(socialHarvestAprContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMayContents.kpi1 == null)?'grey-2':(socialHarvestMayContents.kpi1 >= '0' && socialHarvestMayContents.kpi1 <= '3.75')?'red':(socialHarvestMayContents.kpi1 > '3.75' && socialHarvestMayContents.kpi1 <= '5')?'orange':(socialHarvestMayContents.kpi1 > '5' && socialHarvestMayContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMayContents.kpi1 >= '6.25' && socialHarvestMayContents.kpi1 < '7.5')?'green':(socialHarvestMayContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi2 == null)?'grey-2':(socialHarvestMayContents.kpi2 >= '0' && socialHarvestMayContents.kpi2 <= '60.6')?'red':(socialHarvestMayContents.kpi2 > '60.6' && socialHarvestMayContents.kpi2 <= '80.8')?'orange':(socialHarvestMayContents.kpi2 > '80.8' && socialHarvestMayContents.kpi2 < '101')?'yellow-7':(socialHarvestMayContents.kpi2 >= '101' && socialHarvestMayContents.kpi2 < '121.2')?'green':(socialHarvestMayContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi3 == null)?'grey-2':(socialHarvestMayContents.kpi3 >= '0' && socialHarvestMayContents.kpi3 <= '18.75')?'red':(socialHarvestMayContents.kpi3 > '18.75' && socialHarvestMayContents.kpi3 <= '25')?'orange':(socialHarvestMayContents.kpi3 > '25' && socialHarvestMayContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMayContents.kpi3 >= '31.25' && socialHarvestMayContents.kpi3 < '37.5')?'green':(socialHarvestMayContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi4 == null)?'grey-2':(socialHarvestMayContents.kpi4 >= '0' && socialHarvestMayContents.kpi4 <= '3.9')?'red':(socialHarvestMayContents.kpi4 > '3.9' && socialHarvestMayContents.kpi4 <= '5.2')?'orange':(socialHarvestMayContents.kpi4 > '5.2' && socialHarvestMayContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMayContents.kpi4 >= '6.5' && socialHarvestMayContents.kpi4 < '7.8')?'green':(socialHarvestMayContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi5 == null)?'grey-2':(socialHarvestMayContents.kpi5 >= '0' && socialHarvestMayContents.kpi5 <= '2.2227')?'red':(socialHarvestMayContents.kpi5 > '2.2227' && socialHarvestMayContents.kpi5 <= '2.9636')?'orange':(socialHarvestMayContents.kpi5 > '2.9636' && socialHarvestMayContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMayContents.kpi5 >= '3.7045' && socialHarvestMayContents.kpi5 < '4.4454')?'green':(socialHarvestMayContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJunContents.kpi1 == null)?'grey-2':(socialHarvestJunContents.kpi1 >= '0' && socialHarvestJunContents.kpi1 <= '3.75')?'red':(socialHarvestJunContents.kpi1 > '3.75' && socialHarvestJunContents.kpi1 <= '5')?'orange':(socialHarvestJunContents.kpi1 > '5' && socialHarvestJunContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJunContents.kpi1 >= '6.25' && socialHarvestJunContents.kpi1 < '7.5')?'green':(socialHarvestJunContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi2 == null)?'grey-2':(socialHarvestJunContents.kpi2 >= '0' && socialHarvestJunContents.kpi2 <= '60.6')?'red':(socialHarvestJunContents.kpi2 > '60.6' && socialHarvestJunContents.kpi2 <= '80.8')?'orange':(socialHarvestJunContents.kpi2 > '80.8' && socialHarvestJunContents.kpi2 < '101')?'yellow-7':(socialHarvestJunContents.kpi2 >= '101' && socialHarvestJunContents.kpi2 < '121.2')?'green':(socialHarvestJunContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi3 == null)?'grey-2':(socialHarvestJunContents.kpi3 >= '0' && socialHarvestJunContents.kpi3 <= '18.75')?'red':(socialHarvestJunContents.kpi3 > '18.75' && socialHarvestJunContents.kpi3 <= '25')?'orange':(socialHarvestJunContents.kpi3 > '25' && socialHarvestJunContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJunContents.kpi3 >= '31.25' && socialHarvestJunContents.kpi3 < '37.5')?'green':(socialHarvestJunContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi4 == null)?'grey-2':(socialHarvestJunContents.kpi4 >= '0' && socialHarvestJunContents.kpi4 <= '3.9')?'red':(socialHarvestJunContents.kpi4 > '3.9' && socialHarvestJunContents.kpi4 <= '5.2')?'orange':(socialHarvestJunContents.kpi4 > '5.2' && socialHarvestJunContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJunContents.kpi4 >= '6.5' && socialHarvestJunContents.kpi4 < '7.8')?'green':(socialHarvestJunContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi5 == null)?'grey-2':(socialHarvestJunContents.kpi5 >= '0' && socialHarvestJunContents.kpi5 <= '2.2227')?'red':(socialHarvestJunContents.kpi5 > '2.2227' && socialHarvestJunContents.kpi5 <= '2.9636')?'orange':(socialHarvestJunContents.kpi5 > '2.9636' && socialHarvestJunContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJunContents.kpi5 >= '3.7045' && socialHarvestJunContents.kpi5 < '4.4454')?'green':(socialHarvestJunContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJulContents.kpi1 == null)?'grey-2':(socialHarvestJulContents.kpi1 >= '0' && socialHarvestJulContents.kpi1 <= '3.75')?'red':(socialHarvestJulContents.kpi1 > '3.75' && socialHarvestJulContents.kpi1 <= '5')?'orange':(socialHarvestJulContents.kpi1 > '5' && socialHarvestJulContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJulContents.kpi1 >= '6.25' && socialHarvestJulContents.kpi1 < '7.5')?'green':(socialHarvestJulContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi2 == null)?'grey-2':(socialHarvestJulContents.kpi2 >= '0' && socialHarvestJulContents.kpi2 <= '60.6')?'red':(socialHarvestJulContents.kpi2 > '60.6' && socialHarvestJulContents.kpi2 <= '80.8')?'orange':(socialHarvestJulContents.kpi2 > '80.8' && socialHarvestJulContents.kpi2 < '101')?'yellow-7':(socialHarvestJulContents.kpi2 >= '101' && socialHarvestJulContents.kpi2 < '121.2')?'green':(socialHarvestJulContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi3 == null)?'grey-2':(socialHarvestJulContents.kpi3 >= '0' && socialHarvestJulContents.kpi3 <= '18.75')?'red':(socialHarvestJulContents.kpi3 > '18.75' && socialHarvestJulContents.kpi3 <= '25')?'orange':(socialHarvestJulContents.kpi3 > '25' && socialHarvestJulContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJulContents.kpi3 >= '31.25' && socialHarvestJulContents.kpi3 < '37.5')?'green':(socialHarvestJulContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi4 == null)?'grey-2':(socialHarvestJulContents.kpi4 >= '0' && socialHarvestJulContents.kpi4 <= '3.9')?'red':(socialHarvestJulContents.kpi4 > '3.9' && socialHarvestJulContents.kpi4 <= '5.2')?'orange':(socialHarvestJulContents.kpi4 > '5.2' && socialHarvestJulContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJulContents.kpi4 >= '6.5' && socialHarvestJulContents.kpi4 < '7.8')?'green':(socialHarvestJulContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi5 == null)?'grey-2':(socialHarvestJulContents.kpi5 >= '0' && socialHarvestJulContents.kpi5 <= '2.2227')?'red':(socialHarvestJulContents.kpi5 > '2.2227' && socialHarvestJulContents.kpi5 <= '2.9636')?'orange':(socialHarvestJulContents.kpi5 > '2.9636' && socialHarvestJulContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJulContents.kpi5 >= '3.7045' && socialHarvestJulContents.kpi5 < '4.4454')?'green':(socialHarvestJulContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAugContents.kpi1 == null)?'grey-2':(socialHarvestAugContents.kpi1 >= '0' && socialHarvestAugContents.kpi1 <= '3.75')?'red':(socialHarvestAugContents.kpi1 > '3.75' && socialHarvestAugContents.kpi1 <= '5')?'orange':(socialHarvestAugContents.kpi1 > '5' && socialHarvestAugContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAugContents.kpi1 >= '6.25' && socialHarvestAugContents.kpi1 < '7.5')?'green':(socialHarvestAugContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi2 == null)?'grey-2':(socialHarvestAugContents.kpi2 >= '0' && socialHarvestAugContents.kpi2 <= '60.6')?'red':(socialHarvestAugContents.kpi2 > '60.6' && socialHarvestAugContents.kpi2 <= '80.8')?'orange':(socialHarvestAugContents.kpi2 > '80.8' && socialHarvestAugContents.kpi2 < '101')?'yellow-7':(socialHarvestAugContents.kpi2 >= '101' && socialHarvestAugContents.kpi2 < '121.2')?'green':(socialHarvestAugContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi3 == null)?'grey-2':(socialHarvestAugContents.kpi3 >= '0' && socialHarvestAugContents.kpi3 <= '18.75')?'red':(socialHarvestAugContents.kpi3 > '18.75' && socialHarvestAugContents.kpi3 <= '25')?'orange':(socialHarvestAugContents.kpi3 > '25' && socialHarvestAugContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAugContents.kpi3 >= '31.25' && socialHarvestAugContents.kpi3 < '37.5')?'green':(socialHarvestAugContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi4 == null)?'grey-2':(socialHarvestAugContents.kpi4 >= '0' && socialHarvestAugContents.kpi4 <= '3.9')?'red':(socialHarvestAugContents.kpi4 > '3.9' && socialHarvestAugContents.kpi4 <= '5.2')?'orange':(socialHarvestAugContents.kpi4 > '5.2' && socialHarvestAugContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAugContents.kpi4 >= '6.5' && socialHarvestAugContents.kpi4 < '7.8')?'green':(socialHarvestAugContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi5 == null)?'grey-2':(socialHarvestAugContents.kpi5 >= '0' && socialHarvestAugContents.kpi5 <= '2.2227')?'red':(socialHarvestAugContents.kpi5 > '2.2227' && socialHarvestAugContents.kpi5 <= '2.9636')?'orange':(socialHarvestAugContents.kpi5 > '2.9636' && socialHarvestAugContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAugContents.kpi5 >= '3.7045' && socialHarvestAugContents.kpi5 < '4.4454')?'green':(socialHarvestAugContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestSepContents.kpi1 == null)?'grey-2':(socialHarvestSepContents.kpi1 >= '0' && socialHarvestSepContents.kpi1 <= '3.75')?'red':(socialHarvestSepContents.kpi1 > '3.75' && socialHarvestSepContents.kpi1 <= '5')?'orange':(socialHarvestSepContents.kpi1 > '5' && socialHarvestSepContents.kpi1 < '6.25')?'yellow-7':(socialHarvestSepContents.kpi1 >= '6.25' && socialHarvestSepContents.kpi1 < '7.5')?'green':(socialHarvestSepContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi2 == null)?'grey-2':(socialHarvestSepContents.kpi2 >= '0' && socialHarvestSepContents.kpi2 <= '60.6')?'red':(socialHarvestSepContents.kpi2 > '60.6' && socialHarvestSepContents.kpi2 <= '80.8')?'orange':(socialHarvestSepContents.kpi2 > '80.8' && socialHarvestSepContents.kpi2 < '101')?'yellow-7':(socialHarvestSepContents.kpi2 >= '101' && socialHarvestSepContents.kpi2 < '121.2')?'green':(socialHarvestSepContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi3 == null)?'grey-2':(socialHarvestSepContents.kpi3 >= '0' && socialHarvestSepContents.kpi3 <= '18.75')?'red':(socialHarvestSepContents.kpi3 > '18.75' && socialHarvestSepContents.kpi3 <= '25')?'orange':(socialHarvestSepContents.kpi3 > '25' && socialHarvestSepContents.kpi3 < '31.25')?'yellow-7':(socialHarvestSepContents.kpi3 >= '31.25' && socialHarvestSepContents.kpi3 < '37.5')?'green':(socialHarvestSepContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi4 == null)?'grey-2':(socialHarvestSepContents.kpi4 >= '0' && socialHarvestSepContents.kpi4 <= '3.9')?'red':(socialHarvestSepContents.kpi4 > '3.9' && socialHarvestSepContents.kpi4 <= '5.2')?'orange':(socialHarvestSepContents.kpi4 > '5.2' && socialHarvestSepContents.kpi4 < '6.5')?'yellow-7':(socialHarvestSepContents.kpi4 >= '6.5' && socialHarvestSepContents.kpi4 < '7.8')?'green':(socialHarvestSepContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi5 == null)?'grey-2':(socialHarvestSepContents.kpi5 >= '0' && socialHarvestSepContents.kpi5 <= '2.2227')?'red':(socialHarvestSepContents.kpi5 > '2.2227' && socialHarvestSepContents.kpi5 <= '2.9636')?'orange':(socialHarvestSepContents.kpi5 > '2.9636' && socialHarvestSepContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestSepContents.kpi5 >= '3.7045' && socialHarvestSepContents.kpi5 < '4.4454')?'green':(socialHarvestSepContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestOctContents.kpi1 == null)?'grey-2':(socialHarvestOctContents.kpi1 >= '0' && socialHarvestOctContents.kpi1 <= '3.75')?'red':(socialHarvestOctContents.kpi1 > '3.75' && socialHarvestOctContents.kpi1 <= '5')?'orange':(socialHarvestOctContents.kpi1 > '5' && socialHarvestOctContents.kpi1 < '6.25')?'yellow-7':(socialHarvestOctContents.kpi1 >= '6.25' && socialHarvestOctContents.kpi1 < '7.5')?'green':(socialHarvestOctContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi2 == null)?'grey-2':(socialHarvestOctContents.kpi2 >= '0' && socialHarvestOctContents.kpi2 <= '60.6')?'red':(socialHarvestOctContents.kpi2 > '60.6' && socialHarvestOctContents.kpi2 <= '80.8')?'orange':(socialHarvestOctContents.kpi2 > '80.8' && socialHarvestOctContents.kpi2 < '101')?'yellow-7':(socialHarvestOctContents.kpi2 >= '101' && socialHarvestOctContents.kpi2 < '121.2')?'green':(socialHarvestOctContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi3 == null)?'grey-2':(socialHarvestOctContents.kpi3 >= '0' && socialHarvestOctContents.kpi3 <= '18.75')?'red':(socialHarvestOctContents.kpi3 > '18.75' && socialHarvestOctContents.kpi3 <= '25')?'orange':(socialHarvestOctContents.kpi3 > '25' && socialHarvestOctContents.kpi3 < '31.25')?'yellow-7':(socialHarvestOctContents.kpi3 >= '31.25' && socialHarvestOctContents.kpi3 < '37.5')?'green':(socialHarvestOctContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi4 == null)?'grey-2':(socialHarvestOctContents.kpi4 >= '0' && socialHarvestOctContents.kpi4 <= '3.9')?'red':(socialHarvestOctContents.kpi4 > '3.9' && socialHarvestOctContents.kpi4 <= '5.2')?'orange':(socialHarvestOctContents.kpi4 > '5.2' && socialHarvestOctContents.kpi4 < '6.5')?'yellow-7':(socialHarvestOctContents.kpi4 >= '6.5' && socialHarvestOctContents.kpi4 < '7.8')?'green':(socialHarvestOctContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi5 == null)?'grey-2':(socialHarvestOctContents.kpi5 >= '0' && socialHarvestOctContents.kpi5 <= '2.2227')?'red':(socialHarvestOctContents.kpi5 > '2.2227' && socialHarvestOctContents.kpi5 <= '2.9636')?'orange':(socialHarvestOctContents.kpi5 > '2.9636' && socialHarvestOctContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestOctContents.kpi5 >= '3.7045' && socialHarvestOctContents.kpi5 < '4.4454')?'green':(socialHarvestOctContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestNovContents.kpi1 == null)?'grey-2':(socialHarvestNovContents.kpi1 >= '0' && socialHarvestNovContents.kpi1 <= '3.75')?'red':(socialHarvestNovContents.kpi1 > '3.75' && socialHarvestNovContents.kpi1 <= '5')?'orange':(socialHarvestNovContents.kpi1 > '5' && socialHarvestNovContents.kpi1 < '6.25')?'yellow-7':(socialHarvestNovContents.kpi1 >= '6.25' && socialHarvestNovContents.kpi1 < '7.5')?'green':(socialHarvestNovContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi2 == null)?'grey-2':(socialHarvestNovContents.kpi2 >= '0' && socialHarvestNovContents.kpi2 <= '60.6')?'red':(socialHarvestNovContents.kpi2 > '60.6' && socialHarvestNovContents.kpi2 <= '80.8')?'orange':(socialHarvestNovContents.kpi2 > '80.8' && socialHarvestNovContents.kpi2 < '101')?'yellow-7':(socialHarvestNovContents.kpi2 >= '101' && socialHarvestNovContents.kpi2 < '121.2')?'green':(socialHarvestNovContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi3 == null)?'grey-2':(socialHarvestNovContents.kpi3 >= '0' && socialHarvestNovContents.kpi3 <= '18.75')?'red':(socialHarvestNovContents.kpi3 > '18.75' && socialHarvestNovContents.kpi3 <= '25')?'orange':(socialHarvestNovContents.kpi3 > '25' && socialHarvestNovContents.kpi3 < '31.25')?'yellow-7':(socialHarvestNovContents.kpi3 >= '31.25' && socialHarvestNovContents.kpi3 < '37.5')?'green':(socialHarvestNovContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi4 == null)?'grey-2':(socialHarvestNovContents.kpi4 >= '0' && socialHarvestNovContents.kpi4 <= '3.9')?'red':(socialHarvestNovContents.kpi4 > '3.9' && socialHarvestNovContents.kpi4 <= '5.2')?'orange':(socialHarvestNovContents.kpi4 > '5.2' && socialHarvestNovContents.kpi4 < '6.5')?'yellow-7':(socialHarvestNovContents.kpi4 >= '6.5' && socialHarvestNovContents.kpi4 < '7.8')?'green':(socialHarvestNovContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi5 == null)?'grey-2':(socialHarvestNovContents.kpi5 >= '0' && socialHarvestNovContents.kpi5 <= '2.2227')?'red':(socialHarvestNovContents.kpi5 > '2.2227' && socialHarvestNovContents.kpi5 <= '2.9636')?'orange':(socialHarvestNovContents.kpi5 > '2.9636' && socialHarvestNovContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestNovContents.kpi5 >= '3.7045' && socialHarvestNovContents.kpi5 < '4.4454')?'green':(socialHarvestNovContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestDecContents.kpi1 == null)?'grey-2':(socialHarvestDecContents.kpi1 >= '0' && socialHarvestDecContents.kpi1 <= '3.75')?'red':(socialHarvestDecContents.kpi1 > '3.75' && socialHarvestDecContents.kpi1 <= '5')?'orange':(socialHarvestDecContents.kpi1 > '5' && socialHarvestDecContents.kpi1 < '6.25')?'yellow-7':(socialHarvestDecContents.kpi1 >= '6.25' && socialHarvestDecContents.kpi1 < '7.5')?'green':(socialHarvestDecContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi2 == null)?'grey-2':(socialHarvestDecContents.kpi2 >= '0' && socialHarvestDecContents.kpi2 <= '60.6')?'red':(socialHarvestDecContents.kpi2 > '60.6' && socialHarvestDecContents.kpi2 <= '80.8')?'orange':(socialHarvestDecContents.kpi2 > '80.8' && socialHarvestDecContents.kpi2 < '101')?'yellow-7':(socialHarvestDecContents.kpi2 >= '101' && socialHarvestDecContents.kpi2 < '121.2')?'green':(socialHarvestDecContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi3 == null)?'grey-2':(socialHarvestDecContents.kpi3 >= '0' && socialHarvestDecContents.kpi3 <= '18.75')?'red':(socialHarvestDecContents.kpi3 > '18.75' && socialHarvestDecContents.kpi3 <= '25')?'orange':(socialHarvestDecContents.kpi3 > '25' && socialHarvestDecContents.kpi3 < '31.25')?'yellow-7':(socialHarvestDecContents.kpi3 >= '31.25' && socialHarvestDecContents.kpi3 < '37.5')?'green':(socialHarvestDecContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi4 == null)?'grey-2':(socialHarvestDecContents.kpi4 >= '0' && socialHarvestDecContents.kpi4 <= '3.9')?'red':(socialHarvestDecContents.kpi4 > '3.9' && socialHarvestDecContents.kpi4 <= '5.2')?'orange':(socialHarvestDecContents.kpi4 > '5.2' && socialHarvestDecContents.kpi4 < '6.5')?'yellow-7':(socialHarvestDecContents.kpi4 >= '6.5' && socialHarvestDecContents.kpi4 < '7.8')?'green':(socialHarvestDecContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi5 == null)?'grey-2':(socialHarvestDecContents.kpi5 >= '0' && socialHarvestDecContents.kpi5 <= '2.2227')?'red':(socialHarvestDecContents.kpi5 > '2.2227' && socialHarvestDecContents.kpi5 <= '2.9636')?'orange':(socialHarvestDecContents.kpi5 > '2.9636' && socialHarvestDecContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestDecContents.kpi5 >= '3.7045' && socialHarvestDecContents.kpi5 < '4.4454')?'green':(socialHarvestDecContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                                <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJanContents.kpi1 == null)?'grey-2':(socialHarvestJanContents.kpi1 >= '0' && socialHarvestJanContents.kpi1 <= '3.75')?'red':(socialHarvestJanContents.kpi1 > '3.75' && socialHarvestJanContents.kpi1 <= '5')?'orange':(socialHarvestJanContents.kpi1 > '5' && socialHarvestJanContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJanContents.kpi1 >= '6.25' && socialHarvestJanContents.kpi1 < '7.5')?'green':(socialHarvestJanContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi2 == null)?'grey-2':(socialHarvestJanContents.kpi2 >= '0' && socialHarvestJanContents.kpi2 <= '60.6')?'red':(socialHarvestJanContents.kpi2 > '60.6' && socialHarvestJanContents.kpi2 <= '80.8')?'orange':(socialHarvestJanContents.kpi2 > '80.8' && socialHarvestJanContents.kpi2 < '101')?'yellow-7':(socialHarvestJanContents.kpi2 >= '101' && socialHarvestJanContents.kpi2 < '121.2')?'green':(socialHarvestJanContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi3 == null)?'grey-2':(socialHarvestJanContents.kpi3 >= '0' && socialHarvestJanContents.kpi3 <= '18.75')?'red':(socialHarvestJanContents.kpi3 > '18.75' && socialHarvestJanContents.kpi3 <= '25')?'orange':(socialHarvestJanContents.kpi3 > '25' && socialHarvestJanContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJanContents.kpi3 >= '31.25' && socialHarvestJanContents.kpi3 < '37.5')?'green':(socialHarvestJanContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi4 == null)?'grey-2':(socialHarvestJanContents.kpi4 >= '0' && socialHarvestJanContents.kpi4 <= '3.9')?'red':(socialHarvestJanContents.kpi4 > '3.9' && socialHarvestJanContents.kpi4 <= '5.2')?'orange':(socialHarvestJanContents.kpi4 > '5.2' && socialHarvestJanContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJanContents.kpi4 >= '6.5' && socialHarvestJanContents.kpi4 < '7.8')?'green':(socialHarvestJanContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi5 == null)?'grey-2':(socialHarvestJanContents.kpi5 >= '0' && socialHarvestJanContents.kpi5 <= '2.2227')?'red':(socialHarvestJanContents.kpi5 > '2.2227' && socialHarvestJanContents.kpi5 <= '2.9636')?'orange':(socialHarvestJanContents.kpi5 > '2.9636' && socialHarvestJanContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJanContents.kpi5 >= '3.7045' && socialHarvestJanContents.kpi5 < '4.4454')?'green':(socialHarvestJanContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestFebContents.kpi1 == null)?'grey-2':(socialHarvestFebContents.kpi1 >= '0' && socialHarvestFebContents.kpi1 <= '3.75')?'red':(socialHarvestFebContents.kpi1 > '3.75' && socialHarvestFebContents.kpi1 <= '5')?'orange':(socialHarvestFebContents.kpi1 > '5' && socialHarvestFebContents.kpi1 < '6.25')?'yellow-7':(socialHarvestFebContents.kpi1 >= '6.25' && socialHarvestFebContents.kpi1 < '7.5')?'green':(socialHarvestFebContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi2 == null)?'grey-2':(socialHarvestFebContents.kpi2 >= '0' && socialHarvestFebContents.kpi2 <= '60.6')?'red':(socialHarvestFebContents.kpi2 > '60.6' && socialHarvestFebContents.kpi2 <= '80.8')?'orange':(socialHarvestFebContents.kpi2 > '80.8' && socialHarvestFebContents.kpi2 < '101')?'yellow-7':(socialHarvestFebContents.kpi2 >= '101' && socialHarvestFebContents.kpi2 < '121.2')?'green':(socialHarvestFebContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi3 == null)?'grey-2':(socialHarvestFebContents.kpi3 >= '0' && socialHarvestFebContents.kpi3 <= '18.75')?'red':(socialHarvestFebContents.kpi3 > '18.75' && socialHarvestFebContents.kpi3 <= '25')?'orange':(socialHarvestFebContents.kpi3 > '25' && socialHarvestFebContents.kpi3 < '31.25')?'yellow-7':(socialHarvestFebContents.kpi3 >= '31.25' && socialHarvestFebContents.kpi3 < '37.5')?'green':(socialHarvestFebContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi4 == null)?'grey-2':(socialHarvestFebContents.kpi4 >= '0' && socialHarvestFebContents.kpi4 <= '3.9')?'red':(socialHarvestFebContents.kpi4 > '3.9' && socialHarvestFebContents.kpi4 <= '5.2')?'orange':(socialHarvestFebContents.kpi4 > '5.2' && socialHarvestFebContents.kpi4 < '6.5')?'yellow-7':(socialHarvestFebContents.kpi4 >= '6.5' && socialHarvestFebContents.kpi4 < '7.8')?'green':(socialHarvestFebContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi5 == null)?'grey-2':(socialHarvestFebContents.kpi5 >= '0' && socialHarvestFebContents.kpi5 <= '2.2227')?'red':(socialHarvestFebContents.kpi5 > '2.2227' && socialHarvestFebContents.kpi5 <= '2.9636')?'orange':(socialHarvestFebContents.kpi5 > '2.9636' && socialHarvestFebContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestFebContents.kpi5 >= '3.7045' && socialHarvestFebContents.kpi5 < '4.4454')?'green':(socialHarvestFebContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMarContents.kpi1 == null)?'grey-2':(socialHarvestMarContents.kpi1 >= '0' && socialHarvestMarContents.kpi1 <= '3.75')?'red':(socialHarvestMarContents.kpi1 > '3.75' && socialHarvestMarContents.kpi1 <= '5')?'orange':(socialHarvestMarContents.kpi1 > '5' && socialHarvestMarContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMarContents.kpi1 >= '6.25' && socialHarvestMarContents.kpi1 < '7.5')?'green':(socialHarvestMarContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi2 == null)?'grey-2':(socialHarvestMarContents.kpi2 >= '0' && socialHarvestMarContents.kpi2 <= '60.6')?'red':(socialHarvestMarContents.kpi2 > '60.6' && socialHarvestMarContents.kpi2 <= '80.8')?'orange':(socialHarvestMarContents.kpi2 > '80.8' && socialHarvestMarContents.kpi2 < '101')?'yellow-7':(socialHarvestMarContents.kpi2 >= '101' && socialHarvestMarContents.kpi2 < '121.2')?'green':(socialHarvestMarContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi3 == null)?'grey-2':(socialHarvestMarContents.kpi3 >= '0' && socialHarvestMarContents.kpi3 <= '18.75')?'red':(socialHarvestMarContents.kpi3 > '18.75' && socialHarvestMarContents.kpi3 <= '25')?'orange':(socialHarvestMarContents.kpi3 > '25' && socialHarvestMarContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMarContents.kpi3 >= '31.25' && socialHarvestMarContents.kpi3 < '37.5')?'green':(socialHarvestMarContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi4 == null)?'grey-2':(socialHarvestMarContents.kpi4 >= '0' && socialHarvestMarContents.kpi4 <= '3.9')?'red':(socialHarvestMarContents.kpi4 > '3.9' && socialHarvestMarContents.kpi4 <= '5.2')?'orange':(socialHarvestMarContents.kpi4 > '5.2' && socialHarvestMarContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMarContents.kpi4 >= '6.5' && socialHarvestMarContents.kpi4 < '7.8')?'green':(socialHarvestMarContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi5 == null)?'grey-2':(socialHarvestMarContents.kpi5 >= '0' && socialHarvestMarContents.kpi5 <= '2.2227')?'red':(socialHarvestMarContents.kpi5 > '2.2227' && socialHarvestMarContents.kpi5 <= '2.9636')?'orange':(socialHarvestMarContents.kpi5 > '2.9636' && socialHarvestMarContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMarContents.kpi5 >= '3.7045' && socialHarvestMarContents.kpi5 < '4.4454')?'green':(socialHarvestMarContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAprContents.kpi1 == null)?'grey-2':(socialHarvestAprContents.kpi1 >= '0' && socialHarvestAprContents.kpi1 <= '3.75')?'red':(socialHarvestAprContents.kpi1 > '3.75' && socialHarvestAprContents.kpi1 <= '5')?'orange':(socialHarvestAprContents.kpi1 > '5' && socialHarvestAprContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAprContents.kpi1 >= '6.25' && socialHarvestAprContents.kpi1 < '7.5')?'green':(socialHarvestAprContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi2 == null)?'grey-2':(socialHarvestAprContents.kpi2 >= '0' && socialHarvestAprContents.kpi2 <= '60.6')?'red':(socialHarvestAprContents.kpi2 > '60.6' && socialHarvestAprContents.kpi2 <= '80.8')?'orange':(socialHarvestAprContents.kpi2 > '80.8' && socialHarvestAprContents.kpi2 < '101')?'yellow-7':(socialHarvestAprContents.kpi2 >= '101' && socialHarvestAprContents.kpi2 < '121.2')?'green':(socialHarvestAprContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi3 == null)?'grey-2':(socialHarvestAprContents.kpi3 >= '0' && socialHarvestAprContents.kpi3 <= '18.75')?'red':(socialHarvestAprContents.kpi3 > '18.75' && socialHarvestAprContents.kpi3 <= '25')?'orange':(socialHarvestAprContents.kpi3 > '25' && socialHarvestAprContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAprContents.kpi3 >= '31.25' && socialHarvestAprContents.kpi3 < '37.5')?'green':(socialHarvestAprContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi4 == null)?'grey-2':(socialHarvestAprContents.kpi4 >= '0' && socialHarvestAprContents.kpi4 <= '3.9')?'red':(socialHarvestAprContents.kpi4 > '3.9' && socialHarvestAprContents.kpi4 <= '5.2')?'orange':(socialHarvestAprContents.kpi4 > '5.2' && socialHarvestAprContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAprContents.kpi4 >= '6.5' && socialHarvestAprContents.kpi4 < '7.8')?'green':(socialHarvestAprContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi5 == null)?'grey-2':(socialHarvestAprContents.kpi5 >= '0' && socialHarvestAprContents.kpi5 <= '2.2227')?'red':(socialHarvestAprContents.kpi5 > '2.2227' && socialHarvestAprContents.kpi5 <= '2.9636')?'orange':(socialHarvestAprContents.kpi5 > '2.9636' && socialHarvestAprContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAprContents.kpi5 >= '3.7045' && socialHarvestAprContents.kpi5 < '4.4454')?'green':(socialHarvestAprContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMayContents.kpi1 == null)?'grey-2':(socialHarvestMayContents.kpi1 >= '0' && socialHarvestMayContents.kpi1 <= '3.75')?'red':(socialHarvestMayContents.kpi1 > '3.75' && socialHarvestMayContents.kpi1 <= '5')?'orange':(socialHarvestMayContents.kpi1 > '5' && socialHarvestMayContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMayContents.kpi1 >= '6.25' && socialHarvestMayContents.kpi1 < '7.5')?'green':(socialHarvestMayContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi2 == null)?'grey-2':(socialHarvestMayContents.kpi2 >= '0' && socialHarvestMayContents.kpi2 <= '60.6')?'red':(socialHarvestMayContents.kpi2 > '60.6' && socialHarvestMayContents.kpi2 <= '80.8')?'orange':(socialHarvestMayContents.kpi2 > '80.8' && socialHarvestMayContents.kpi2 < '101')?'yellow-7':(socialHarvestMayContents.kpi2 >= '101' && socialHarvestMayContents.kpi2 < '121.2')?'green':(socialHarvestMayContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi3 == null)?'grey-2':(socialHarvestMayContents.kpi3 >= '0' && socialHarvestMayContents.kpi3 <= '18.75')?'red':(socialHarvestMayContents.kpi3 > '18.75' && socialHarvestMayContents.kpi3 <= '25')?'orange':(socialHarvestMayContents.kpi3 > '25' && socialHarvestMayContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMayContents.kpi3 >= '31.25' && socialHarvestMayContents.kpi3 < '37.5')?'green':(socialHarvestMayContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi4 == null)?'grey-2':(socialHarvestMayContents.kpi4 >= '0' && socialHarvestMayContents.kpi4 <= '3.9')?'red':(socialHarvestMayContents.kpi4 > '3.9' && socialHarvestMayContents.kpi4 <= '5.2')?'orange':(socialHarvestMayContents.kpi4 > '5.2' && socialHarvestMayContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMayContents.kpi4 >= '6.5' && socialHarvestMayContents.kpi4 < '7.8')?'green':(socialHarvestMayContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi5 == null)?'grey-2':(socialHarvestMayContents.kpi5 >= '0' && socialHarvestMayContents.kpi5 <= '2.2227')?'red':(socialHarvestMayContents.kpi5 > '2.2227' && socialHarvestMayContents.kpi5 <= '2.9636')?'orange':(socialHarvestMayContents.kpi5 > '2.9636' && socialHarvestMayContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMayContents.kpi5 >= '3.7045' && socialHarvestMayContents.kpi5 < '4.4454')?'green':(socialHarvestMayContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJunContents.kpi1 == null)?'grey-2':(socialHarvestJunContents.kpi1 >= '0' && socialHarvestJunContents.kpi1 <= '3.75')?'red':(socialHarvestJunContents.kpi1 > '3.75' && socialHarvestJunContents.kpi1 <= '5')?'orange':(socialHarvestJunContents.kpi1 > '5' && socialHarvestJunContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJunContents.kpi1 >= '6.25' && socialHarvestJunContents.kpi1 < '7.5')?'green':(socialHarvestJunContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi2 == null)?'grey-2':(socialHarvestJunContents.kpi2 >= '0' && socialHarvestJunContents.kpi2 <= '60.6')?'red':(socialHarvestJunContents.kpi2 > '60.6' && socialHarvestJunContents.kpi2 <= '80.8')?'orange':(socialHarvestJunContents.kpi2 > '80.8' && socialHarvestJunContents.kpi2 < '101')?'yellow-7':(socialHarvestJunContents.kpi2 >= '101' && socialHarvestJunContents.kpi2 < '121.2')?'green':(socialHarvestJunContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi3 == null)?'grey-2':(socialHarvestJunContents.kpi3 >= '0' && socialHarvestJunContents.kpi3 <= '18.75')?'red':(socialHarvestJunContents.kpi3 > '18.75' && socialHarvestJunContents.kpi3 <= '25')?'orange':(socialHarvestJunContents.kpi3 > '25' && socialHarvestJunContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJunContents.kpi3 >= '31.25' && socialHarvestJunContents.kpi3 < '37.5')?'green':(socialHarvestJunContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi4 == null)?'grey-2':(socialHarvestJunContents.kpi4 >= '0' && socialHarvestJunContents.kpi4 <= '3.9')?'red':(socialHarvestJunContents.kpi4 > '3.9' && socialHarvestJunContents.kpi4 <= '5.2')?'orange':(socialHarvestJunContents.kpi4 > '5.2' && socialHarvestJunContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJunContents.kpi4 >= '6.5' && socialHarvestJunContents.kpi4 < '7.8')?'green':(socialHarvestJunContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi5 == null)?'grey-2':(socialHarvestJunContents.kpi5 >= '0' && socialHarvestJunContents.kpi5 <= '2.2227')?'red':(socialHarvestJunContents.kpi5 > '2.2227' && socialHarvestJunContents.kpi5 <= '2.9636')?'orange':(socialHarvestJunContents.kpi5 > '2.9636' && socialHarvestJunContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJunContents.kpi5 >= '3.7045' && socialHarvestJunContents.kpi5 < '4.4454')?'green':(socialHarvestJunContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJulContents.kpi1 == null)?'grey-2':(socialHarvestJulContents.kpi1 >= '0' && socialHarvestJulContents.kpi1 <= '3.75')?'red':(socialHarvestJulContents.kpi1 > '3.75' && socialHarvestJulContents.kpi1 <= '5')?'orange':(socialHarvestJulContents.kpi1 > '5' && socialHarvestJulContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJulContents.kpi1 >= '6.25' && socialHarvestJulContents.kpi1 < '7.5')?'green':(socialHarvestJulContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi2 == null)?'grey-2':(socialHarvestJulContents.kpi2 >= '0' && socialHarvestJulContents.kpi2 <= '60.6')?'red':(socialHarvestJulContents.kpi2 > '60.6' && socialHarvestJulContents.kpi2 <= '80.8')?'orange':(socialHarvestJulContents.kpi2 > '80.8' && socialHarvestJulContents.kpi2 < '101')?'yellow-7':(socialHarvestJulContents.kpi2 >= '101' && socialHarvestJulContents.kpi2 < '121.2')?'green':(socialHarvestJulContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi3 == null)?'grey-2':(socialHarvestJulContents.kpi3 >= '0' && socialHarvestJulContents.kpi3 <= '18.75')?'red':(socialHarvestJulContents.kpi3 > '18.75' && socialHarvestJulContents.kpi3 <= '25')?'orange':(socialHarvestJulContents.kpi3 > '25' && socialHarvestJulContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJulContents.kpi3 >= '31.25' && socialHarvestJulContents.kpi3 < '37.5')?'green':(socialHarvestJulContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi4 == null)?'grey-2':(socialHarvestJulContents.kpi4 >= '0' && socialHarvestJulContents.kpi4 <= '3.9')?'red':(socialHarvestJulContents.kpi4 > '3.9' && socialHarvestJulContents.kpi4 <= '5.2')?'orange':(socialHarvestJulContents.kpi4 > '5.2' && socialHarvestJulContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJulContents.kpi4 >= '6.5' && socialHarvestJulContents.kpi4 < '7.8')?'green':(socialHarvestJulContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi5 == null)?'grey-2':(socialHarvestJulContents.kpi5 >= '0' && socialHarvestJulContents.kpi5 <= '2.2227')?'red':(socialHarvestJulContents.kpi5 > '2.2227' && socialHarvestJulContents.kpi5 <= '2.9636')?'orange':(socialHarvestJulContents.kpi5 > '2.9636' && socialHarvestJulContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJulContents.kpi5 >= '3.7045' && socialHarvestJulContents.kpi5 < '4.4454')?'green':(socialHarvestJulContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAugContents.kpi1 == null)?'grey-2':(socialHarvestAugContents.kpi1 >= '0' && socialHarvestAugContents.kpi1 <= '3.75')?'red':(socialHarvestAugContents.kpi1 > '3.75' && socialHarvestAugContents.kpi1 <= '5')?'orange':(socialHarvestAugContents.kpi1 > '5' && socialHarvestAugContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAugContents.kpi1 >= '6.25' && socialHarvestAugContents.kpi1 < '7.5')?'green':(socialHarvestAugContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi2 == null)?'grey-2':(socialHarvestAugContents.kpi2 >= '0' && socialHarvestAugContents.kpi2 <= '60.6')?'red':(socialHarvestAugContents.kpi2 > '60.6' && socialHarvestAugContents.kpi2 <= '80.8')?'orange':(socialHarvestAugContents.kpi2 > '80.8' && socialHarvestAugContents.kpi2 < '101')?'yellow-7':(socialHarvestAugContents.kpi2 >= '101' && socialHarvestAugContents.kpi2 < '121.2')?'green':(socialHarvestAugContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi3 == null)?'grey-2':(socialHarvestAugContents.kpi3 >= '0' && socialHarvestAugContents.kpi3 <= '18.75')?'red':(socialHarvestAugContents.kpi3 > '18.75' && socialHarvestAugContents.kpi3 <= '25')?'orange':(socialHarvestAugContents.kpi3 > '25' && socialHarvestAugContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAugContents.kpi3 >= '31.25' && socialHarvestAugContents.kpi3 < '37.5')?'green':(socialHarvestAugContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi4 == null)?'grey-2':(socialHarvestAugContents.kpi4 >= '0' && socialHarvestAugContents.kpi4 <= '3.9')?'red':(socialHarvestAugContents.kpi4 > '3.9' && socialHarvestAugContents.kpi4 <= '5.2')?'orange':(socialHarvestAugContents.kpi4 > '5.2' && socialHarvestAugContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAugContents.kpi4 >= '6.5' && socialHarvestAugContents.kpi4 < '7.8')?'green':(socialHarvestAugContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi5 == null)?'grey-2':(socialHarvestAugContents.kpi5 >= '0' && socialHarvestAugContents.kpi5 <= '2.2227')?'red':(socialHarvestAugContents.kpi5 > '2.2227' && socialHarvestAugContents.kpi5 <= '2.9636')?'orange':(socialHarvestAugContents.kpi5 > '2.9636' && socialHarvestAugContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAugContents.kpi5 >= '3.7045' && socialHarvestAugContents.kpi5 < '4.4454')?'green':(socialHarvestAugContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestSepContents.kpi1 == null)?'grey-2':(socialHarvestSepContents.kpi1 >= '0' && socialHarvestSepContents.kpi1 <= '3.75')?'red':(socialHarvestSepContents.kpi1 > '3.75' && socialHarvestSepContents.kpi1 <= '5')?'orange':(socialHarvestSepContents.kpi1 > '5' && socialHarvestSepContents.kpi1 < '6.25')?'yellow-7':(socialHarvestSepContents.kpi1 >= '6.25' && socialHarvestSepContents.kpi1 < '7.5')?'green':(socialHarvestSepContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi2 == null)?'grey-2':(socialHarvestSepContents.kpi2 >= '0' && socialHarvestSepContents.kpi2 <= '60.6')?'red':(socialHarvestSepContents.kpi2 > '60.6' && socialHarvestSepContents.kpi2 <= '80.8')?'orange':(socialHarvestSepContents.kpi2 > '80.8' && socialHarvestSepContents.kpi2 < '101')?'yellow-7':(socialHarvestSepContents.kpi2 >= '101' && socialHarvestSepContents.kpi2 < '121.2')?'green':(socialHarvestSepContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi3 == null)?'grey-2':(socialHarvestSepContents.kpi3 >= '0' && socialHarvestSepContents.kpi3 <= '18.75')?'red':(socialHarvestSepContents.kpi3 > '18.75' && socialHarvestSepContents.kpi3 <= '25')?'orange':(socialHarvestSepContents.kpi3 > '25' && socialHarvestSepContents.kpi3 < '31.25')?'yellow-7':(socialHarvestSepContents.kpi3 >= '31.25' && socialHarvestSepContents.kpi3 < '37.5')?'green':(socialHarvestSepContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi4 == null)?'grey-2':(socialHarvestSepContents.kpi4 >= '0' && socialHarvestSepContents.kpi4 <= '3.9')?'red':(socialHarvestSepContents.kpi4 > '3.9' && socialHarvestSepContents.kpi4 <= '5.2')?'orange':(socialHarvestSepContents.kpi4 > '5.2' && socialHarvestSepContents.kpi4 < '6.5')?'yellow-7':(socialHarvestSepContents.kpi4 >= '6.5' && socialHarvestSepContents.kpi4 < '7.8')?'green':(socialHarvestSepContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi5 == null)?'grey-2':(socialHarvestSepContents.kpi5 >= '0' && socialHarvestSepContents.kpi5 <= '2.2227')?'red':(socialHarvestSepContents.kpi5 > '2.2227' && socialHarvestSepContents.kpi5 <= '2.9636')?'orange':(socialHarvestSepContents.kpi5 > '2.9636' && socialHarvestSepContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestSepContents.kpi5 >= '3.7045' && socialHarvestSepContents.kpi5 < '4.4454')?'green':(socialHarvestSepContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestOctContents.kpi1 == null)?'grey-2':(socialHarvestOctContents.kpi1 >= '0' && socialHarvestOctContents.kpi1 <= '3.75')?'red':(socialHarvestOctContents.kpi1 > '3.75' && socialHarvestOctContents.kpi1 <= '5')?'orange':(socialHarvestOctContents.kpi1 > '5' && socialHarvestOctContents.kpi1 < '6.25')?'yellow-7':(socialHarvestOctContents.kpi1 >= '6.25' && socialHarvestOctContents.kpi1 < '7.5')?'green':(socialHarvestOctContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi2 == null)?'grey-2':(socialHarvestOctContents.kpi2 >= '0' && socialHarvestOctContents.kpi2 <= '60.6')?'red':(socialHarvestOctContents.kpi2 > '60.6' && socialHarvestOctContents.kpi2 <= '80.8')?'orange':(socialHarvestOctContents.kpi2 > '80.8' && socialHarvestOctContents.kpi2 < '101')?'yellow-7':(socialHarvestOctContents.kpi2 >= '101' && socialHarvestOctContents.kpi2 < '121.2')?'green':(socialHarvestOctContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi3 == null)?'grey-2':(socialHarvestOctContents.kpi3 >= '0' && socialHarvestOctContents.kpi3 <= '18.75')?'red':(socialHarvestOctContents.kpi3 > '18.75' && socialHarvestOctContents.kpi3 <= '25')?'orange':(socialHarvestOctContents.kpi3 > '25' && socialHarvestOctContents.kpi3 < '31.25')?'yellow-7':(socialHarvestOctContents.kpi3 >= '31.25' && socialHarvestOctContents.kpi3 < '37.5')?'green':(socialHarvestOctContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi4 == null)?'grey-2':(socialHarvestOctContents.kpi4 >= '0' && socialHarvestOctContents.kpi4 <= '3.9')?'red':(socialHarvestOctContents.kpi4 > '3.9' && socialHarvestOctContents.kpi4 <= '5.2')?'orange':(socialHarvestOctContents.kpi4 > '5.2' && socialHarvestOctContents.kpi4 < '6.5')?'yellow-7':(socialHarvestOctContents.kpi4 >= '6.5' && socialHarvestOctContents.kpi4 < '7.8')?'green':(socialHarvestOctContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi5 == null)?'grey-2':(socialHarvestOctContents.kpi5 >= '0' && socialHarvestOctContents.kpi5 <= '2.2227')?'red':(socialHarvestOctContents.kpi5 > '2.2227' && socialHarvestOctContents.kpi5 <= '2.9636')?'orange':(socialHarvestOctContents.kpi5 > '2.9636' && socialHarvestOctContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestOctContents.kpi5 >= '3.7045' && socialHarvestOctContents.kpi5 < '4.4454')?'green':(socialHarvestOctContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestNovContents.kpi1 == null)?'grey-2':(socialHarvestNovContents.kpi1 >= '0' && socialHarvestNovContents.kpi1 <= '3.75')?'red':(socialHarvestNovContents.kpi1 > '3.75' && socialHarvestNovContents.kpi1 <= '5')?'orange':(socialHarvestNovContents.kpi1 > '5' && socialHarvestNovContents.kpi1 < '6.25')?'yellow-7':(socialHarvestNovContents.kpi1 >= '6.25' && socialHarvestNovContents.kpi1 < '7.5')?'green':(socialHarvestNovContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi2 == null)?'grey-2':(socialHarvestNovContents.kpi2 >= '0' && socialHarvestNovContents.kpi2 <= '60.6')?'red':(socialHarvestNovContents.kpi2 > '60.6' && socialHarvestNovContents.kpi2 <= '80.8')?'orange':(socialHarvestNovContents.kpi2 > '80.8' && socialHarvestNovContents.kpi2 < '101')?'yellow-7':(socialHarvestNovContents.kpi2 >= '101' && socialHarvestNovContents.kpi2 < '121.2')?'green':(socialHarvestNovContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi3 == null)?'grey-2':(socialHarvestNovContents.kpi3 >= '0' && socialHarvestNovContents.kpi3 <= '18.75')?'red':(socialHarvestNovContents.kpi3 > '18.75' && socialHarvestNovContents.kpi3 <= '25')?'orange':(socialHarvestNovContents.kpi3 > '25' && socialHarvestNovContents.kpi3 < '31.25')?'yellow-7':(socialHarvestNovContents.kpi3 >= '31.25' && socialHarvestNovContents.kpi3 < '37.5')?'green':(socialHarvestNovContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi4 == null)?'grey-2':(socialHarvestNovContents.kpi4 >= '0' && socialHarvestNovContents.kpi4 <= '3.9')?'red':(socialHarvestNovContents.kpi4 > '3.9' && socialHarvestNovContents.kpi4 <= '5.2')?'orange':(socialHarvestNovContents.kpi4 > '5.2' && socialHarvestNovContents.kpi4 < '6.5')?'yellow-7':(socialHarvestNovContents.kpi4 >= '6.5' && socialHarvestNovContents.kpi4 < '7.8')?'green':(socialHarvestNovContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi5 == null)?'grey-2':(socialHarvestNovContents.kpi5 >= '0' && socialHarvestNovContents.kpi5 <= '2.2227')?'red':(socialHarvestNovContents.kpi5 > '2.2227' && socialHarvestNovContents.kpi5 <= '2.9636')?'orange':(socialHarvestNovContents.kpi5 > '2.9636' && socialHarvestNovContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestNovContents.kpi5 >= '3.7045' && socialHarvestNovContents.kpi5 < '4.4454')?'green':(socialHarvestNovContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestDecContents.kpi1 == null)?'grey-2':(socialHarvestDecContents.kpi1 >= '0' && socialHarvestDecContents.kpi1 <= '3.75')?'red':(socialHarvestDecContents.kpi1 > '3.75' && socialHarvestDecContents.kpi1 <= '5')?'orange':(socialHarvestDecContents.kpi1 > '5' && socialHarvestDecContents.kpi1 < '6.25')?'yellow-7':(socialHarvestDecContents.kpi1 >= '6.25' && socialHarvestDecContents.kpi1 < '7.5')?'green':(socialHarvestDecContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi2 == null)?'grey-2':(socialHarvestDecContents.kpi2 >= '0' && socialHarvestDecContents.kpi2 <= '60.6')?'red':(socialHarvestDecContents.kpi2 > '60.6' && socialHarvestDecContents.kpi2 <= '80.8')?'orange':(socialHarvestDecContents.kpi2 > '80.8' && socialHarvestDecContents.kpi2 < '101')?'yellow-7':(socialHarvestDecContents.kpi2 >= '101' && socialHarvestDecContents.kpi2 < '121.2')?'green':(socialHarvestDecContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi3 == null)?'grey-2':(socialHarvestDecContents.kpi3 >= '0' && socialHarvestDecContents.kpi3 <= '18.75')?'red':(socialHarvestDecContents.kpi3 > '18.75' && socialHarvestDecContents.kpi3 <= '25')?'orange':(socialHarvestDecContents.kpi3 > '25' && socialHarvestDecContents.kpi3 < '31.25')?'yellow-7':(socialHarvestDecContents.kpi3 >= '31.25' && socialHarvestDecContents.kpi3 < '37.5')?'green':(socialHarvestDecContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi4 == null)?'grey-2':(socialHarvestDecContents.kpi4 >= '0' && socialHarvestDecContents.kpi4 <= '3.9')?'red':(socialHarvestDecContents.kpi4 > '3.9' && socialHarvestDecContents.kpi4 <= '5.2')?'orange':(socialHarvestDecContents.kpi4 > '5.2' && socialHarvestDecContents.kpi4 < '6.5')?'yellow-7':(socialHarvestDecContents.kpi4 >= '6.5' && socialHarvestDecContents.kpi4 < '7.8')?'green':(socialHarvestDecContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi5 == null)?'grey-2':(socialHarvestDecContents.kpi5 >= '0' && socialHarvestDecContents.kpi5 <= '2.2227')?'red':(socialHarvestDecContents.kpi5 > '2.2227' && socialHarvestDecContents.kpi5 <= '2.9636')?'orange':(socialHarvestDecContents.kpi5 > '2.9636' && socialHarvestDecContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestDecContents.kpi5 >= '3.7045' && socialHarvestDecContents.kpi5 < '4.4454')?'green':(socialHarvestDecContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                                <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJanContents.kpi1 == null)?'grey-2':(socialHarvestJanContents.kpi1 >= '0' && socialHarvestJanContents.kpi1 <= '3.75')?'red':(socialHarvestJanContents.kpi1 > '3.75' && socialHarvestJanContents.kpi1 <= '5')?'orange':(socialHarvestJanContents.kpi1 > '5' && socialHarvestJanContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJanContents.kpi1 >= '6.25' && socialHarvestJanContents.kpi1 < '7.5')?'green':(socialHarvestJanContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi2 == null)?'grey-2':(socialHarvestJanContents.kpi2 >= '0' && socialHarvestJanContents.kpi2 <= '60.6')?'red':(socialHarvestJanContents.kpi2 > '60.6' && socialHarvestJanContents.kpi2 <= '80.8')?'orange':(socialHarvestJanContents.kpi2 > '80.8' && socialHarvestJanContents.kpi2 < '101')?'yellow-7':(socialHarvestJanContents.kpi2 >= '101' && socialHarvestJanContents.kpi2 < '121.2')?'green':(socialHarvestJanContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi3 == null)?'grey-2':(socialHarvestJanContents.kpi3 >= '0' && socialHarvestJanContents.kpi3 <= '18.75')?'red':(socialHarvestJanContents.kpi3 > '18.75' && socialHarvestJanContents.kpi3 <= '25')?'orange':(socialHarvestJanContents.kpi3 > '25' && socialHarvestJanContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJanContents.kpi3 >= '31.25' && socialHarvestJanContents.kpi3 < '37.5')?'green':(socialHarvestJanContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi4 == null)?'grey-2':(socialHarvestJanContents.kpi4 >= '0' && socialHarvestJanContents.kpi4 <= '3.9')?'red':(socialHarvestJanContents.kpi4 > '3.9' && socialHarvestJanContents.kpi4 <= '5.2')?'orange':(socialHarvestJanContents.kpi4 > '5.2' && socialHarvestJanContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJanContents.kpi4 >= '6.5' && socialHarvestJanContents.kpi4 < '7.8')?'green':(socialHarvestJanContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi5 == null)?'grey-2':(socialHarvestJanContents.kpi5 >= '0' && socialHarvestJanContents.kpi5 <= '2.2227')?'red':(socialHarvestJanContents.kpi5 > '2.2227' && socialHarvestJanContents.kpi5 <= '2.9636')?'orange':(socialHarvestJanContents.kpi5 > '2.9636' && socialHarvestJanContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJanContents.kpi5 >= '3.7045' && socialHarvestJanContents.kpi5 < '4.4454')?'green':(socialHarvestJanContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestFebContents.kpi1 == null)?'grey-2':(socialHarvestFebContents.kpi1 >= '0' && socialHarvestFebContents.kpi1 <= '3.75')?'red':(socialHarvestFebContents.kpi1 > '3.75' && socialHarvestFebContents.kpi1 <= '5')?'orange':(socialHarvestFebContents.kpi1 > '5' && socialHarvestFebContents.kpi1 < '6.25')?'yellow-7':(socialHarvestFebContents.kpi1 >= '6.25' && socialHarvestFebContents.kpi1 < '7.5')?'green':(socialHarvestFebContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi2 == null)?'grey-2':(socialHarvestFebContents.kpi2 >= '0' && socialHarvestFebContents.kpi2 <= '60.6')?'red':(socialHarvestFebContents.kpi2 > '60.6' && socialHarvestFebContents.kpi2 <= '80.8')?'orange':(socialHarvestFebContents.kpi2 > '80.8' && socialHarvestFebContents.kpi2 < '101')?'yellow-7':(socialHarvestFebContents.kpi2 >= '101' && socialHarvestFebContents.kpi2 < '121.2')?'green':(socialHarvestFebContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi3 == null)?'grey-2':(socialHarvestFebContents.kpi3 >= '0' && socialHarvestFebContents.kpi3 <= '18.75')?'red':(socialHarvestFebContents.kpi3 > '18.75' && socialHarvestFebContents.kpi3 <= '25')?'orange':(socialHarvestFebContents.kpi3 > '25' && socialHarvestFebContents.kpi3 < '31.25')?'yellow-7':(socialHarvestFebContents.kpi3 >= '31.25' && socialHarvestFebContents.kpi3 < '37.5')?'green':(socialHarvestFebContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi4 == null)?'grey-2':(socialHarvestFebContents.kpi4 >= '0' && socialHarvestFebContents.kpi4 <= '3.9')?'red':(socialHarvestFebContents.kpi4 > '3.9' && socialHarvestFebContents.kpi4 <= '5.2')?'orange':(socialHarvestFebContents.kpi4 > '5.2' && socialHarvestFebContents.kpi4 < '6.5')?'yellow-7':(socialHarvestFebContents.kpi4 >= '6.5' && socialHarvestFebContents.kpi4 < '7.8')?'green':(socialHarvestFebContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi5 == null)?'grey-2':(socialHarvestFebContents.kpi5 >= '0' && socialHarvestFebContents.kpi5 <= '2.2227')?'red':(socialHarvestFebContents.kpi5 > '2.2227' && socialHarvestFebContents.kpi5 <= '2.9636')?'orange':(socialHarvestFebContents.kpi5 > '2.9636' && socialHarvestFebContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestFebContents.kpi5 >= '3.7045' && socialHarvestFebContents.kpi5 < '4.4454')?'green':(socialHarvestFebContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMarContents.kpi1 == null)?'grey-2':(socialHarvestMarContents.kpi1 >= '0' && socialHarvestMarContents.kpi1 <= '3.75')?'red':(socialHarvestMarContents.kpi1 > '3.75' && socialHarvestMarContents.kpi1 <= '5')?'orange':(socialHarvestMarContents.kpi1 > '5' && socialHarvestMarContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMarContents.kpi1 >= '6.25' && socialHarvestMarContents.kpi1 < '7.5')?'green':(socialHarvestMarContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi2 == null)?'grey-2':(socialHarvestMarContents.kpi2 >= '0' && socialHarvestMarContents.kpi2 <= '60.6')?'red':(socialHarvestMarContents.kpi2 > '60.6' && socialHarvestMarContents.kpi2 <= '80.8')?'orange':(socialHarvestMarContents.kpi2 > '80.8' && socialHarvestMarContents.kpi2 < '101')?'yellow-7':(socialHarvestMarContents.kpi2 >= '101' && socialHarvestMarContents.kpi2 < '121.2')?'green':(socialHarvestMarContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi3 == null)?'grey-2':(socialHarvestMarContents.kpi3 >= '0' && socialHarvestMarContents.kpi3 <= '18.75')?'red':(socialHarvestMarContents.kpi3 > '18.75' && socialHarvestMarContents.kpi3 <= '25')?'orange':(socialHarvestMarContents.kpi3 > '25' && socialHarvestMarContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMarContents.kpi3 >= '31.25' && socialHarvestMarContents.kpi3 < '37.5')?'green':(socialHarvestMarContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi4 == null)?'grey-2':(socialHarvestMarContents.kpi4 >= '0' && socialHarvestMarContents.kpi4 <= '3.9')?'red':(socialHarvestMarContents.kpi4 > '3.9' && socialHarvestMarContents.kpi4 <= '5.2')?'orange':(socialHarvestMarContents.kpi4 > '5.2' && socialHarvestMarContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMarContents.kpi4 >= '6.5' && socialHarvestMarContents.kpi4 < '7.8')?'green':(socialHarvestMarContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi5 == null)?'grey-2':(socialHarvestMarContents.kpi5 >= '0' && socialHarvestMarContents.kpi5 <= '2.2227')?'red':(socialHarvestMarContents.kpi5 > '2.2227' && socialHarvestMarContents.kpi5 <= '2.9636')?'orange':(socialHarvestMarContents.kpi5 > '2.9636' && socialHarvestMarContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMarContents.kpi5 >= '3.7045' && socialHarvestMarContents.kpi5 < '4.4454')?'green':(socialHarvestMarContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAprContents.kpi1 == null)?'grey-2':(socialHarvestAprContents.kpi1 >= '0' && socialHarvestAprContents.kpi1 <= '3.75')?'red':(socialHarvestAprContents.kpi1 > '3.75' && socialHarvestAprContents.kpi1 <= '5')?'orange':(socialHarvestAprContents.kpi1 > '5' && socialHarvestAprContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAprContents.kpi1 >= '6.25' && socialHarvestAprContents.kpi1 < '7.5')?'green':(socialHarvestAprContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi2 == null)?'grey-2':(socialHarvestAprContents.kpi2 >= '0' && socialHarvestAprContents.kpi2 <= '60.6')?'red':(socialHarvestAprContents.kpi2 > '60.6' && socialHarvestAprContents.kpi2 <= '80.8')?'orange':(socialHarvestAprContents.kpi2 > '80.8' && socialHarvestAprContents.kpi2 < '101')?'yellow-7':(socialHarvestAprContents.kpi2 >= '101' && socialHarvestAprContents.kpi2 < '121.2')?'green':(socialHarvestAprContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi3 == null)?'grey-2':(socialHarvestAprContents.kpi3 >= '0' && socialHarvestAprContents.kpi3 <= '18.75')?'red':(socialHarvestAprContents.kpi3 > '18.75' && socialHarvestAprContents.kpi3 <= '25')?'orange':(socialHarvestAprContents.kpi3 > '25' && socialHarvestAprContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAprContents.kpi3 >= '31.25' && socialHarvestAprContents.kpi3 < '37.5')?'green':(socialHarvestAprContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi4 == null)?'grey-2':(socialHarvestAprContents.kpi4 >= '0' && socialHarvestAprContents.kpi4 <= '3.9')?'red':(socialHarvestAprContents.kpi4 > '3.9' && socialHarvestAprContents.kpi4 <= '5.2')?'orange':(socialHarvestAprContents.kpi4 > '5.2' && socialHarvestAprContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAprContents.kpi4 >= '6.5' && socialHarvestAprContents.kpi4 < '7.8')?'green':(socialHarvestAprContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi5 == null)?'grey-2':(socialHarvestAprContents.kpi5 >= '0' && socialHarvestAprContents.kpi5 <= '2.2227')?'red':(socialHarvestAprContents.kpi5 > '2.2227' && socialHarvestAprContents.kpi5 <= '2.9636')?'orange':(socialHarvestAprContents.kpi5 > '2.9636' && socialHarvestAprContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAprContents.kpi5 >= '3.7045' && socialHarvestAprContents.kpi5 < '4.4454')?'green':(socialHarvestAprContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMayContents.kpi1 == null)?'grey-2':(socialHarvestMayContents.kpi1 >= '0' && socialHarvestMayContents.kpi1 <= '3.75')?'red':(socialHarvestMayContents.kpi1 > '3.75' && socialHarvestMayContents.kpi1 <= '5')?'orange':(socialHarvestMayContents.kpi1 > '5' && socialHarvestMayContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMayContents.kpi1 >= '6.25' && socialHarvestMayContents.kpi1 < '7.5')?'green':(socialHarvestMayContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi2 == null)?'grey-2':(socialHarvestMayContents.kpi2 >= '0' && socialHarvestMayContents.kpi2 <= '60.6')?'red':(socialHarvestMayContents.kpi2 > '60.6' && socialHarvestMayContents.kpi2 <= '80.8')?'orange':(socialHarvestMayContents.kpi2 > '80.8' && socialHarvestMayContents.kpi2 < '101')?'yellow-7':(socialHarvestMayContents.kpi2 >= '101' && socialHarvestMayContents.kpi2 < '121.2')?'green':(socialHarvestMayContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi3 == null)?'grey-2':(socialHarvestMayContents.kpi3 >= '0' && socialHarvestMayContents.kpi3 <= '18.75')?'red':(socialHarvestMayContents.kpi3 > '18.75' && socialHarvestMayContents.kpi3 <= '25')?'orange':(socialHarvestMayContents.kpi3 > '25' && socialHarvestMayContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMayContents.kpi3 >= '31.25' && socialHarvestMayContents.kpi3 < '37.5')?'green':(socialHarvestMayContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi4 == null)?'grey-2':(socialHarvestMayContents.kpi4 >= '0' && socialHarvestMayContents.kpi4 <= '3.9')?'red':(socialHarvestMayContents.kpi4 > '3.9' && socialHarvestMayContents.kpi4 <= '5.2')?'orange':(socialHarvestMayContents.kpi4 > '5.2' && socialHarvestMayContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMayContents.kpi4 >= '6.5' && socialHarvestMayContents.kpi4 < '7.8')?'green':(socialHarvestMayContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi5 == null)?'grey-2':(socialHarvestMayContents.kpi5 >= '0' && socialHarvestMayContents.kpi5 <= '2.2227')?'red':(socialHarvestMayContents.kpi5 > '2.2227' && socialHarvestMayContents.kpi5 <= '2.9636')?'orange':(socialHarvestMayContents.kpi5 > '2.9636' && socialHarvestMayContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMayContents.kpi5 >= '3.7045' && socialHarvestMayContents.kpi5 < '4.4454')?'green':(socialHarvestMayContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJunContents.kpi1 == null)?'grey-2':(socialHarvestJunContents.kpi1 >= '0' && socialHarvestJunContents.kpi1 <= '3.75')?'red':(socialHarvestJunContents.kpi1 > '3.75' && socialHarvestJunContents.kpi1 <= '5')?'orange':(socialHarvestJunContents.kpi1 > '5' && socialHarvestJunContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJunContents.kpi1 >= '6.25' && socialHarvestJunContents.kpi1 < '7.5')?'green':(socialHarvestJunContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi2 == null)?'grey-2':(socialHarvestJunContents.kpi2 >= '0' && socialHarvestJunContents.kpi2 <= '60.6')?'red':(socialHarvestJunContents.kpi2 > '60.6' && socialHarvestJunContents.kpi2 <= '80.8')?'orange':(socialHarvestJunContents.kpi2 > '80.8' && socialHarvestJunContents.kpi2 < '101')?'yellow-7':(socialHarvestJunContents.kpi2 >= '101' && socialHarvestJunContents.kpi2 < '121.2')?'green':(socialHarvestJunContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi3 == null)?'grey-2':(socialHarvestJunContents.kpi3 >= '0' && socialHarvestJunContents.kpi3 <= '18.75')?'red':(socialHarvestJunContents.kpi3 > '18.75' && socialHarvestJunContents.kpi3 <= '25')?'orange':(socialHarvestJunContents.kpi3 > '25' && socialHarvestJunContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJunContents.kpi3 >= '31.25' && socialHarvestJunContents.kpi3 < '37.5')?'green':(socialHarvestJunContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi4 == null)?'grey-2':(socialHarvestJunContents.kpi4 >= '0' && socialHarvestJunContents.kpi4 <= '3.9')?'red':(socialHarvestJunContents.kpi4 > '3.9' && socialHarvestJunContents.kpi4 <= '5.2')?'orange':(socialHarvestJunContents.kpi4 > '5.2' && socialHarvestJunContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJunContents.kpi4 >= '6.5' && socialHarvestJunContents.kpi4 < '7.8')?'green':(socialHarvestJunContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi5 == null)?'grey-2':(socialHarvestJunContents.kpi5 >= '0' && socialHarvestJunContents.kpi5 <= '2.2227')?'red':(socialHarvestJunContents.kpi5 > '2.2227' && socialHarvestJunContents.kpi5 <= '2.9636')?'orange':(socialHarvestJunContents.kpi5 > '2.9636' && socialHarvestJunContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJunContents.kpi5 >= '3.7045' && socialHarvestJunContents.kpi5 < '4.4454')?'green':(socialHarvestJunContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJulContents.kpi1 == null)?'grey-2':(socialHarvestJulContents.kpi1 >= '0' && socialHarvestJulContents.kpi1 <= '3.75')?'red':(socialHarvestJulContents.kpi1 > '3.75' && socialHarvestJulContents.kpi1 <= '5')?'orange':(socialHarvestJulContents.kpi1 > '5' && socialHarvestJulContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJulContents.kpi1 >= '6.25' && socialHarvestJulContents.kpi1 < '7.5')?'green':(socialHarvestJulContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi2 == null)?'grey-2':(socialHarvestJulContents.kpi2 >= '0' && socialHarvestJulContents.kpi2 <= '60.6')?'red':(socialHarvestJulContents.kpi2 > '60.6' && socialHarvestJulContents.kpi2 <= '80.8')?'orange':(socialHarvestJulContents.kpi2 > '80.8' && socialHarvestJulContents.kpi2 < '101')?'yellow-7':(socialHarvestJulContents.kpi2 >= '101' && socialHarvestJulContents.kpi2 < '121.2')?'green':(socialHarvestJulContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi3 == null)?'grey-2':(socialHarvestJulContents.kpi3 >= '0' && socialHarvestJulContents.kpi3 <= '18.75')?'red':(socialHarvestJulContents.kpi3 > '18.75' && socialHarvestJulContents.kpi3 <= '25')?'orange':(socialHarvestJulContents.kpi3 > '25' && socialHarvestJulContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJulContents.kpi3 >= '31.25' && socialHarvestJulContents.kpi3 < '37.5')?'green':(socialHarvestJulContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi4 == null)?'grey-2':(socialHarvestJulContents.kpi4 >= '0' && socialHarvestJulContents.kpi4 <= '3.9')?'red':(socialHarvestJulContents.kpi4 > '3.9' && socialHarvestJulContents.kpi4 <= '5.2')?'orange':(socialHarvestJulContents.kpi4 > '5.2' && socialHarvestJulContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJulContents.kpi4 >= '6.5' && socialHarvestJulContents.kpi4 < '7.8')?'green':(socialHarvestJulContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi5 == null)?'grey-2':(socialHarvestJulContents.kpi5 >= '0' && socialHarvestJulContents.kpi5 <= '2.2227')?'red':(socialHarvestJulContents.kpi5 > '2.2227' && socialHarvestJulContents.kpi5 <= '2.9636')?'orange':(socialHarvestJulContents.kpi5 > '2.9636' && socialHarvestJulContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJulContents.kpi5 >= '3.7045' && socialHarvestJulContents.kpi5 < '4.4454')?'green':(socialHarvestJulContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAugContents.kpi1 == null)?'grey-2':(socialHarvestAugContents.kpi1 >= '0' && socialHarvestAugContents.kpi1 <= '3.75')?'red':(socialHarvestAugContents.kpi1 > '3.75' && socialHarvestAugContents.kpi1 <= '5')?'orange':(socialHarvestAugContents.kpi1 > '5' && socialHarvestAugContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAugContents.kpi1 >= '6.25' && socialHarvestAugContents.kpi1 < '7.5')?'green':(socialHarvestAugContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi2 == null)?'grey-2':(socialHarvestAugContents.kpi2 >= '0' && socialHarvestAugContents.kpi2 <= '60.6')?'red':(socialHarvestAugContents.kpi2 > '60.6' && socialHarvestAugContents.kpi2 <= '80.8')?'orange':(socialHarvestAugContents.kpi2 > '80.8' && socialHarvestAugContents.kpi2 < '101')?'yellow-7':(socialHarvestAugContents.kpi2 >= '101' && socialHarvestAugContents.kpi2 < '121.2')?'green':(socialHarvestAugContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi3 == null)?'grey-2':(socialHarvestAugContents.kpi3 >= '0' && socialHarvestAugContents.kpi3 <= '18.75')?'red':(socialHarvestAugContents.kpi3 > '18.75' && socialHarvestAugContents.kpi3 <= '25')?'orange':(socialHarvestAugContents.kpi3 > '25' && socialHarvestAugContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAugContents.kpi3 >= '31.25' && socialHarvestAugContents.kpi3 < '37.5')?'green':(socialHarvestAugContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi4 == null)?'grey-2':(socialHarvestAugContents.kpi4 >= '0' && socialHarvestAugContents.kpi4 <= '3.9')?'red':(socialHarvestAugContents.kpi4 > '3.9' && socialHarvestAugContents.kpi4 <= '5.2')?'orange':(socialHarvestAugContents.kpi4 > '5.2' && socialHarvestAugContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAugContents.kpi4 >= '6.5' && socialHarvestAugContents.kpi4 < '7.8')?'green':(socialHarvestAugContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi5 == null)?'grey-2':(socialHarvestAugContents.kpi5 >= '0' && socialHarvestAugContents.kpi5 <= '2.2227')?'red':(socialHarvestAugContents.kpi5 > '2.2227' && socialHarvestAugContents.kpi5 <= '2.9636')?'orange':(socialHarvestAugContents.kpi5 > '2.9636' && socialHarvestAugContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAugContents.kpi5 >= '3.7045' && socialHarvestAugContents.kpi5 < '4.4454')?'green':(socialHarvestAugContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestSepContents.kpi1 == null)?'grey-2':(socialHarvestSepContents.kpi1 >= '0' && socialHarvestSepContents.kpi1 <= '3.75')?'red':(socialHarvestSepContents.kpi1 > '3.75' && socialHarvestSepContents.kpi1 <= '5')?'orange':(socialHarvestSepContents.kpi1 > '5' && socialHarvestSepContents.kpi1 < '6.25')?'yellow-7':(socialHarvestSepContents.kpi1 >= '6.25' && socialHarvestSepContents.kpi1 < '7.5')?'green':(socialHarvestSepContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi2 == null)?'grey-2':(socialHarvestSepContents.kpi2 >= '0' && socialHarvestSepContents.kpi2 <= '60.6')?'red':(socialHarvestSepContents.kpi2 > '60.6' && socialHarvestSepContents.kpi2 <= '80.8')?'orange':(socialHarvestSepContents.kpi2 > '80.8' && socialHarvestSepContents.kpi2 < '101')?'yellow-7':(socialHarvestSepContents.kpi2 >= '101' && socialHarvestSepContents.kpi2 < '121.2')?'green':(socialHarvestSepContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi3 == null)?'grey-2':(socialHarvestSepContents.kpi3 >= '0' && socialHarvestSepContents.kpi3 <= '18.75')?'red':(socialHarvestSepContents.kpi3 > '18.75' && socialHarvestSepContents.kpi3 <= '25')?'orange':(socialHarvestSepContents.kpi3 > '25' && socialHarvestSepContents.kpi3 < '31.25')?'yellow-7':(socialHarvestSepContents.kpi3 >= '31.25' && socialHarvestSepContents.kpi3 < '37.5')?'green':(socialHarvestSepContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi4 == null)?'grey-2':(socialHarvestSepContents.kpi4 >= '0' && socialHarvestSepContents.kpi4 <= '3.9')?'red':(socialHarvestSepContents.kpi4 > '3.9' && socialHarvestSepContents.kpi4 <= '5.2')?'orange':(socialHarvestSepContents.kpi4 > '5.2' && socialHarvestSepContents.kpi4 < '6.5')?'yellow-7':(socialHarvestSepContents.kpi4 >= '6.5' && socialHarvestSepContents.kpi4 < '7.8')?'green':(socialHarvestSepContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi5 == null)?'grey-2':(socialHarvestSepContents.kpi5 >= '0' && socialHarvestSepContents.kpi5 <= '2.2227')?'red':(socialHarvestSepContents.kpi5 > '2.2227' && socialHarvestSepContents.kpi5 <= '2.9636')?'orange':(socialHarvestSepContents.kpi5 > '2.9636' && socialHarvestSepContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestSepContents.kpi5 >= '3.7045' && socialHarvestSepContents.kpi5 < '4.4454')?'green':(socialHarvestSepContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestOctContents.kpi1 == null)?'grey-2':(socialHarvestOctContents.kpi1 >= '0' && socialHarvestOctContents.kpi1 <= '3.75')?'red':(socialHarvestOctContents.kpi1 > '3.75' && socialHarvestOctContents.kpi1 <= '5')?'orange':(socialHarvestOctContents.kpi1 > '5' && socialHarvestOctContents.kpi1 < '6.25')?'yellow-7':(socialHarvestOctContents.kpi1 >= '6.25' && socialHarvestOctContents.kpi1 < '7.5')?'green':(socialHarvestOctContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi2 == null)?'grey-2':(socialHarvestOctContents.kpi2 >= '0' && socialHarvestOctContents.kpi2 <= '60.6')?'red':(socialHarvestOctContents.kpi2 > '60.6' && socialHarvestOctContents.kpi2 <= '80.8')?'orange':(socialHarvestOctContents.kpi2 > '80.8' && socialHarvestOctContents.kpi2 < '101')?'yellow-7':(socialHarvestOctContents.kpi2 >= '101' && socialHarvestOctContents.kpi2 < '121.2')?'green':(socialHarvestOctContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi3 == null)?'grey-2':(socialHarvestOctContents.kpi3 >= '0' && socialHarvestOctContents.kpi3 <= '18.75')?'red':(socialHarvestOctContents.kpi3 > '18.75' && socialHarvestOctContents.kpi3 <= '25')?'orange':(socialHarvestOctContents.kpi3 > '25' && socialHarvestOctContents.kpi3 < '31.25')?'yellow-7':(socialHarvestOctContents.kpi3 >= '31.25' && socialHarvestOctContents.kpi3 < '37.5')?'green':(socialHarvestOctContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi4 == null)?'grey-2':(socialHarvestOctContents.kpi4 >= '0' && socialHarvestOctContents.kpi4 <= '3.9')?'red':(socialHarvestOctContents.kpi4 > '3.9' && socialHarvestOctContents.kpi4 <= '5.2')?'orange':(socialHarvestOctContents.kpi4 > '5.2' && socialHarvestOctContents.kpi4 < '6.5')?'yellow-7':(socialHarvestOctContents.kpi4 >= '6.5' && socialHarvestOctContents.kpi4 < '7.8')?'green':(socialHarvestOctContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi5 == null)?'grey-2':(socialHarvestOctContents.kpi5 >= '0' && socialHarvestOctContents.kpi5 <= '2.2227')?'red':(socialHarvestOctContents.kpi5 > '2.2227' && socialHarvestOctContents.kpi5 <= '2.9636')?'orange':(socialHarvestOctContents.kpi5 > '2.9636' && socialHarvestOctContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestOctContents.kpi5 >= '3.7045' && socialHarvestOctContents.kpi5 < '4.4454')?'green':(socialHarvestOctContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestNovContents.kpi1 == null)?'grey-2':(socialHarvestNovContents.kpi1 >= '0' && socialHarvestNovContents.kpi1 <= '3.75')?'red':(socialHarvestNovContents.kpi1 > '3.75' && socialHarvestNovContents.kpi1 <= '5')?'orange':(socialHarvestNovContents.kpi1 > '5' && socialHarvestNovContents.kpi1 < '6.25')?'yellow-7':(socialHarvestNovContents.kpi1 >= '6.25' && socialHarvestNovContents.kpi1 < '7.5')?'green':(socialHarvestNovContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi2 == null)?'grey-2':(socialHarvestNovContents.kpi2 >= '0' && socialHarvestNovContents.kpi2 <= '60.6')?'red':(socialHarvestNovContents.kpi2 > '60.6' && socialHarvestNovContents.kpi2 <= '80.8')?'orange':(socialHarvestNovContents.kpi2 > '80.8' && socialHarvestNovContents.kpi2 < '101')?'yellow-7':(socialHarvestNovContents.kpi2 >= '101' && socialHarvestNovContents.kpi2 < '121.2')?'green':(socialHarvestNovContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi3 == null)?'grey-2':(socialHarvestNovContents.kpi3 >= '0' && socialHarvestNovContents.kpi3 <= '18.75')?'red':(socialHarvestNovContents.kpi3 > '18.75' && socialHarvestNovContents.kpi3 <= '25')?'orange':(socialHarvestNovContents.kpi3 > '25' && socialHarvestNovContents.kpi3 < '31.25')?'yellow-7':(socialHarvestNovContents.kpi3 >= '31.25' && socialHarvestNovContents.kpi3 < '37.5')?'green':(socialHarvestNovContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi4 == null)?'grey-2':(socialHarvestNovContents.kpi4 >= '0' && socialHarvestNovContents.kpi4 <= '3.9')?'red':(socialHarvestNovContents.kpi4 > '3.9' && socialHarvestNovContents.kpi4 <= '5.2')?'orange':(socialHarvestNovContents.kpi4 > '5.2' && socialHarvestNovContents.kpi4 < '6.5')?'yellow-7':(socialHarvestNovContents.kpi4 >= '6.5' && socialHarvestNovContents.kpi4 < '7.8')?'green':(socialHarvestNovContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi5 == null)?'grey-2':(socialHarvestNovContents.kpi5 >= '0' && socialHarvestNovContents.kpi5 <= '2.2227')?'red':(socialHarvestNovContents.kpi5 > '2.2227' && socialHarvestNovContents.kpi5 <= '2.9636')?'orange':(socialHarvestNovContents.kpi5 > '2.9636' && socialHarvestNovContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestNovContents.kpi5 >= '3.7045' && socialHarvestNovContents.kpi5 < '4.4454')?'green':(socialHarvestNovContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestDecContents.kpi1 == null)?'grey-2':(socialHarvestDecContents.kpi1 >= '0' && socialHarvestDecContents.kpi1 <= '3.75')?'red':(socialHarvestDecContents.kpi1 > '3.75' && socialHarvestDecContents.kpi1 <= '5')?'orange':(socialHarvestDecContents.kpi1 > '5' && socialHarvestDecContents.kpi1 < '6.25')?'yellow-7':(socialHarvestDecContents.kpi1 >= '6.25' && socialHarvestDecContents.kpi1 < '7.5')?'green':(socialHarvestDecContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi2 == null)?'grey-2':(socialHarvestDecContents.kpi2 >= '0' && socialHarvestDecContents.kpi2 <= '60.6')?'red':(socialHarvestDecContents.kpi2 > '60.6' && socialHarvestDecContents.kpi2 <= '80.8')?'orange':(socialHarvestDecContents.kpi2 > '80.8' && socialHarvestDecContents.kpi2 < '101')?'yellow-7':(socialHarvestDecContents.kpi2 >= '101' && socialHarvestDecContents.kpi2 < '121.2')?'green':(socialHarvestDecContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi3 == null)?'grey-2':(socialHarvestDecContents.kpi3 >= '0' && socialHarvestDecContents.kpi3 <= '18.75')?'red':(socialHarvestDecContents.kpi3 > '18.75' && socialHarvestDecContents.kpi3 <= '25')?'orange':(socialHarvestDecContents.kpi3 > '25' && socialHarvestDecContents.kpi3 < '31.25')?'yellow-7':(socialHarvestDecContents.kpi3 >= '31.25' && socialHarvestDecContents.kpi3 < '37.5')?'green':(socialHarvestDecContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi4 == null)?'grey-2':(socialHarvestDecContents.kpi4 >= '0' && socialHarvestDecContents.kpi4 <= '3.9')?'red':(socialHarvestDecContents.kpi4 > '3.9' && socialHarvestDecContents.kpi4 <= '5.2')?'orange':(socialHarvestDecContents.kpi4 > '5.2' && socialHarvestDecContents.kpi4 < '6.5')?'yellow-7':(socialHarvestDecContents.kpi4 >= '6.5' && socialHarvestDecContents.kpi4 < '7.8')?'green':(socialHarvestDecContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi5 == null)?'grey-2':(socialHarvestDecContents.kpi5 >= '0' && socialHarvestDecContents.kpi5 <= '2.2227')?'red':(socialHarvestDecContents.kpi5 > '2.2227' && socialHarvestDecContents.kpi5 <= '2.9636')?'orange':(socialHarvestDecContents.kpi5 > '2.9636' && socialHarvestDecContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestDecContents.kpi5 >= '3.7045' && socialHarvestDecContents.kpi5 < '4.4454')?'green':(socialHarvestDecContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                                <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJanContents.kpi1 == null)?'grey-2':(socialHarvestJanContents.kpi1 >= '0' && socialHarvestJanContents.kpi1 <= '3.75')?'red':(socialHarvestJanContents.kpi1 > '3.75' && socialHarvestJanContents.kpi1 <= '5')?'orange':(socialHarvestJanContents.kpi1 > '5' && socialHarvestJanContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJanContents.kpi1 >= '6.25' && socialHarvestJanContents.kpi1 < '7.5')?'green':(socialHarvestJanContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi2 == null)?'grey-2':(socialHarvestJanContents.kpi2 >= '0' && socialHarvestJanContents.kpi2 <= '60.6')?'red':(socialHarvestJanContents.kpi2 > '60.6' && socialHarvestJanContents.kpi2 <= '80.8')?'orange':(socialHarvestJanContents.kpi2 > '80.8' && socialHarvestJanContents.kpi2 < '101')?'yellow-7':(socialHarvestJanContents.kpi2 >= '101' && socialHarvestJanContents.kpi2 < '121.2')?'green':(socialHarvestJanContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi3 == null)?'grey-2':(socialHarvestJanContents.kpi3 >= '0' && socialHarvestJanContents.kpi3 <= '18.75')?'red':(socialHarvestJanContents.kpi3 > '18.75' && socialHarvestJanContents.kpi3 <= '25')?'orange':(socialHarvestJanContents.kpi3 > '25' && socialHarvestJanContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJanContents.kpi3 >= '31.25' && socialHarvestJanContents.kpi3 < '37.5')?'green':(socialHarvestJanContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi4 == null)?'grey-2':(socialHarvestJanContents.kpi4 >= '0' && socialHarvestJanContents.kpi4 <= '3.9')?'red':(socialHarvestJanContents.kpi4 > '3.9' && socialHarvestJanContents.kpi4 <= '5.2')?'orange':(socialHarvestJanContents.kpi4 > '5.2' && socialHarvestJanContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJanContents.kpi4 >= '6.5' && socialHarvestJanContents.kpi4 < '7.8')?'green':(socialHarvestJanContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi5 == null)?'grey-2':(socialHarvestJanContents.kpi5 >= '0' && socialHarvestJanContents.kpi5 <= '2.2227')?'red':(socialHarvestJanContents.kpi5 > '2.2227' && socialHarvestJanContents.kpi5 <= '2.9636')?'orange':(socialHarvestJanContents.kpi5 > '2.9636' && socialHarvestJanContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJanContents.kpi5 >= '3.7045' && socialHarvestJanContents.kpi5 < '4.4454')?'green':(socialHarvestJanContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestFebContents.kpi1 == null)?'grey-2':(socialHarvestFebContents.kpi1 >= '0' && socialHarvestFebContents.kpi1 <= '3.75')?'red':(socialHarvestFebContents.kpi1 > '3.75' && socialHarvestFebContents.kpi1 <= '5')?'orange':(socialHarvestFebContents.kpi1 > '5' && socialHarvestFebContents.kpi1 < '6.25')?'yellow-7':(socialHarvestFebContents.kpi1 >= '6.25' && socialHarvestFebContents.kpi1 < '7.5')?'green':(socialHarvestFebContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi2 == null)?'grey-2':(socialHarvestFebContents.kpi2 >= '0' && socialHarvestFebContents.kpi2 <= '60.6')?'red':(socialHarvestFebContents.kpi2 > '60.6' && socialHarvestFebContents.kpi2 <= '80.8')?'orange':(socialHarvestFebContents.kpi2 > '80.8' && socialHarvestFebContents.kpi2 < '101')?'yellow-7':(socialHarvestFebContents.kpi2 >= '101' && socialHarvestFebContents.kpi2 < '121.2')?'green':(socialHarvestFebContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi3 == null)?'grey-2':(socialHarvestFebContents.kpi3 >= '0' && socialHarvestFebContents.kpi3 <= '18.75')?'red':(socialHarvestFebContents.kpi3 > '18.75' && socialHarvestFebContents.kpi3 <= '25')?'orange':(socialHarvestFebContents.kpi3 > '25' && socialHarvestFebContents.kpi3 < '31.25')?'yellow-7':(socialHarvestFebContents.kpi3 >= '31.25' && socialHarvestFebContents.kpi3 < '37.5')?'green':(socialHarvestFebContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi4 == null)?'grey-2':(socialHarvestFebContents.kpi4 >= '0' && socialHarvestFebContents.kpi4 <= '3.9')?'red':(socialHarvestFebContents.kpi4 > '3.9' && socialHarvestFebContents.kpi4 <= '5.2')?'orange':(socialHarvestFebContents.kpi4 > '5.2' && socialHarvestFebContents.kpi4 < '6.5')?'yellow-7':(socialHarvestFebContents.kpi4 >= '6.5' && socialHarvestFebContents.kpi4 < '7.8')?'green':(socialHarvestFebContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi5 == null)?'grey-2':(socialHarvestFebContents.kpi5 >= '0' && socialHarvestFebContents.kpi5 <= '2.2227')?'red':(socialHarvestFebContents.kpi5 > '2.2227' && socialHarvestFebContents.kpi5 <= '2.9636')?'orange':(socialHarvestFebContents.kpi5 > '2.9636' && socialHarvestFebContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestFebContents.kpi5 >= '3.7045' && socialHarvestFebContents.kpi5 < '4.4454')?'green':(socialHarvestFebContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMarContents.kpi1 == null)?'grey-2':(socialHarvestMarContents.kpi1 >= '0' && socialHarvestMarContents.kpi1 <= '3.75')?'red':(socialHarvestMarContents.kpi1 > '3.75' && socialHarvestMarContents.kpi1 <= '5')?'orange':(socialHarvestMarContents.kpi1 > '5' && socialHarvestMarContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMarContents.kpi1 >= '6.25' && socialHarvestMarContents.kpi1 < '7.5')?'green':(socialHarvestMarContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi2 == null)?'grey-2':(socialHarvestMarContents.kpi2 >= '0' && socialHarvestMarContents.kpi2 <= '60.6')?'red':(socialHarvestMarContents.kpi2 > '60.6' && socialHarvestMarContents.kpi2 <= '80.8')?'orange':(socialHarvestMarContents.kpi2 > '80.8' && socialHarvestMarContents.kpi2 < '101')?'yellow-7':(socialHarvestMarContents.kpi2 >= '101' && socialHarvestMarContents.kpi2 < '121.2')?'green':(socialHarvestMarContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi3 == null)?'grey-2':(socialHarvestMarContents.kpi3 >= '0' && socialHarvestMarContents.kpi3 <= '18.75')?'red':(socialHarvestMarContents.kpi3 > '18.75' && socialHarvestMarContents.kpi3 <= '25')?'orange':(socialHarvestMarContents.kpi3 > '25' && socialHarvestMarContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMarContents.kpi3 >= '31.25' && socialHarvestMarContents.kpi3 < '37.5')?'green':(socialHarvestMarContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi4 == null)?'grey-2':(socialHarvestMarContents.kpi4 >= '0' && socialHarvestMarContents.kpi4 <= '3.9')?'red':(socialHarvestMarContents.kpi4 > '3.9' && socialHarvestMarContents.kpi4 <= '5.2')?'orange':(socialHarvestMarContents.kpi4 > '5.2' && socialHarvestMarContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMarContents.kpi4 >= '6.5' && socialHarvestMarContents.kpi4 < '7.8')?'green':(socialHarvestMarContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi5 == null)?'grey-2':(socialHarvestMarContents.kpi5 >= '0' && socialHarvestMarContents.kpi5 <= '2.2227')?'red':(socialHarvestMarContents.kpi5 > '2.2227' && socialHarvestMarContents.kpi5 <= '2.9636')?'orange':(socialHarvestMarContents.kpi5 > '2.9636' && socialHarvestMarContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMarContents.kpi5 >= '3.7045' && socialHarvestMarContents.kpi5 < '4.4454')?'green':(socialHarvestMarContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAprContents.kpi1 == null)?'grey-2':(socialHarvestAprContents.kpi1 >= '0' && socialHarvestAprContents.kpi1 <= '3.75')?'red':(socialHarvestAprContents.kpi1 > '3.75' && socialHarvestAprContents.kpi1 <= '5')?'orange':(socialHarvestAprContents.kpi1 > '5' && socialHarvestAprContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAprContents.kpi1 >= '6.25' && socialHarvestAprContents.kpi1 < '7.5')?'green':(socialHarvestAprContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi2 == null)?'grey-2':(socialHarvestAprContents.kpi2 >= '0' && socialHarvestAprContents.kpi2 <= '60.6')?'red':(socialHarvestAprContents.kpi2 > '60.6' && socialHarvestAprContents.kpi2 <= '80.8')?'orange':(socialHarvestAprContents.kpi2 > '80.8' && socialHarvestAprContents.kpi2 < '101')?'yellow-7':(socialHarvestAprContents.kpi2 >= '101' && socialHarvestAprContents.kpi2 < '121.2')?'green':(socialHarvestAprContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi3 == null)?'grey-2':(socialHarvestAprContents.kpi3 >= '0' && socialHarvestAprContents.kpi3 <= '18.75')?'red':(socialHarvestAprContents.kpi3 > '18.75' && socialHarvestAprContents.kpi3 <= '25')?'orange':(socialHarvestAprContents.kpi3 > '25' && socialHarvestAprContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAprContents.kpi3 >= '31.25' && socialHarvestAprContents.kpi3 < '37.5')?'green':(socialHarvestAprContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi4 == null)?'grey-2':(socialHarvestAprContents.kpi4 >= '0' && socialHarvestAprContents.kpi4 <= '3.9')?'red':(socialHarvestAprContents.kpi4 > '3.9' && socialHarvestAprContents.kpi4 <= '5.2')?'orange':(socialHarvestAprContents.kpi4 > '5.2' && socialHarvestAprContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAprContents.kpi4 >= '6.5' && socialHarvestAprContents.kpi4 < '7.8')?'green':(socialHarvestAprContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi5 == null)?'grey-2':(socialHarvestAprContents.kpi5 >= '0' && socialHarvestAprContents.kpi5 <= '2.2227')?'red':(socialHarvestAprContents.kpi5 > '2.2227' && socialHarvestAprContents.kpi5 <= '2.9636')?'orange':(socialHarvestAprContents.kpi5 > '2.9636' && socialHarvestAprContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAprContents.kpi5 >= '3.7045' && socialHarvestAprContents.kpi5 < '4.4454')?'green':(socialHarvestAprContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMayContents.kpi1 == null)?'grey-2':(socialHarvestMayContents.kpi1 >= '0' && socialHarvestMayContents.kpi1 <= '3.75')?'red':(socialHarvestMayContents.kpi1 > '3.75' && socialHarvestMayContents.kpi1 <= '5')?'orange':(socialHarvestMayContents.kpi1 > '5' && socialHarvestMayContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMayContents.kpi1 >= '6.25' && socialHarvestMayContents.kpi1 < '7.5')?'green':(socialHarvestMayContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi2 == null)?'grey-2':(socialHarvestMayContents.kpi2 >= '0' && socialHarvestMayContents.kpi2 <= '60.6')?'red':(socialHarvestMayContents.kpi2 > '60.6' && socialHarvestMayContents.kpi2 <= '80.8')?'orange':(socialHarvestMayContents.kpi2 > '80.8' && socialHarvestMayContents.kpi2 < '101')?'yellow-7':(socialHarvestMayContents.kpi2 >= '101' && socialHarvestMayContents.kpi2 < '121.2')?'green':(socialHarvestMayContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi3 == null)?'grey-2':(socialHarvestMayContents.kpi3 >= '0' && socialHarvestMayContents.kpi3 <= '18.75')?'red':(socialHarvestMayContents.kpi3 > '18.75' && socialHarvestMayContents.kpi3 <= '25')?'orange':(socialHarvestMayContents.kpi3 > '25' && socialHarvestMayContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMayContents.kpi3 >= '31.25' && socialHarvestMayContents.kpi3 < '37.5')?'green':(socialHarvestMayContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi4 == null)?'grey-2':(socialHarvestMayContents.kpi4 >= '0' && socialHarvestMayContents.kpi4 <= '3.9')?'red':(socialHarvestMayContents.kpi4 > '3.9' && socialHarvestMayContents.kpi4 <= '5.2')?'orange':(socialHarvestMayContents.kpi4 > '5.2' && socialHarvestMayContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMayContents.kpi4 >= '6.5' && socialHarvestMayContents.kpi4 < '7.8')?'green':(socialHarvestMayContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi5 == null)?'grey-2':(socialHarvestMayContents.kpi5 >= '0' && socialHarvestMayContents.kpi5 <= '2.2227')?'red':(socialHarvestMayContents.kpi5 > '2.2227' && socialHarvestMayContents.kpi5 <= '2.9636')?'orange':(socialHarvestMayContents.kpi5 > '2.9636' && socialHarvestMayContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMayContents.kpi5 >= '3.7045' && socialHarvestMayContents.kpi5 < '4.4454')?'green':(socialHarvestMayContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJunContents.kpi1 == null)?'grey-2':(socialHarvestJunContents.kpi1 >= '0' && socialHarvestJunContents.kpi1 <= '3.75')?'red':(socialHarvestJunContents.kpi1 > '3.75' && socialHarvestJunContents.kpi1 <= '5')?'orange':(socialHarvestJunContents.kpi1 > '5' && socialHarvestJunContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJunContents.kpi1 >= '6.25' && socialHarvestJunContents.kpi1 < '7.5')?'green':(socialHarvestJunContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi2 == null)?'grey-2':(socialHarvestJunContents.kpi2 >= '0' && socialHarvestJunContents.kpi2 <= '60.6')?'red':(socialHarvestJunContents.kpi2 > '60.6' && socialHarvestJunContents.kpi2 <= '80.8')?'orange':(socialHarvestJunContents.kpi2 > '80.8' && socialHarvestJunContents.kpi2 < '101')?'yellow-7':(socialHarvestJunContents.kpi2 >= '101' && socialHarvestJunContents.kpi2 < '121.2')?'green':(socialHarvestJunContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi3 == null)?'grey-2':(socialHarvestJunContents.kpi3 >= '0' && socialHarvestJunContents.kpi3 <= '18.75')?'red':(socialHarvestJunContents.kpi3 > '18.75' && socialHarvestJunContents.kpi3 <= '25')?'orange':(socialHarvestJunContents.kpi3 > '25' && socialHarvestJunContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJunContents.kpi3 >= '31.25' && socialHarvestJunContents.kpi3 < '37.5')?'green':(socialHarvestJunContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi4 == null)?'grey-2':(socialHarvestJunContents.kpi4 >= '0' && socialHarvestJunContents.kpi4 <= '3.9')?'red':(socialHarvestJunContents.kpi4 > '3.9' && socialHarvestJunContents.kpi4 <= '5.2')?'orange':(socialHarvestJunContents.kpi4 > '5.2' && socialHarvestJunContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJunContents.kpi4 >= '6.5' && socialHarvestJunContents.kpi4 < '7.8')?'green':(socialHarvestJunContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi5 == null)?'grey-2':(socialHarvestJunContents.kpi5 >= '0' && socialHarvestJunContents.kpi5 <= '2.2227')?'red':(socialHarvestJunContents.kpi5 > '2.2227' && socialHarvestJunContents.kpi5 <= '2.9636')?'orange':(socialHarvestJunContents.kpi5 > '2.9636' && socialHarvestJunContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJunContents.kpi5 >= '3.7045' && socialHarvestJunContents.kpi5 < '4.4454')?'green':(socialHarvestJunContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJulContents.kpi1 == null)?'grey-2':(socialHarvestJulContents.kpi1 >= '0' && socialHarvestJulContents.kpi1 <= '3.75')?'red':(socialHarvestJulContents.kpi1 > '3.75' && socialHarvestJulContents.kpi1 <= '5')?'orange':(socialHarvestJulContents.kpi1 > '5' && socialHarvestJulContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJulContents.kpi1 >= '6.25' && socialHarvestJulContents.kpi1 < '7.5')?'green':(socialHarvestJulContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi2 == null)?'grey-2':(socialHarvestJulContents.kpi2 >= '0' && socialHarvestJulContents.kpi2 <= '60.6')?'red':(socialHarvestJulContents.kpi2 > '60.6' && socialHarvestJulContents.kpi2 <= '80.8')?'orange':(socialHarvestJulContents.kpi2 > '80.8' && socialHarvestJulContents.kpi2 < '101')?'yellow-7':(socialHarvestJulContents.kpi2 >= '101' && socialHarvestJulContents.kpi2 < '121.2')?'green':(socialHarvestJulContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi3 == null)?'grey-2':(socialHarvestJulContents.kpi3 >= '0' && socialHarvestJulContents.kpi3 <= '18.75')?'red':(socialHarvestJulContents.kpi3 > '18.75' && socialHarvestJulContents.kpi3 <= '25')?'orange':(socialHarvestJulContents.kpi3 > '25' && socialHarvestJulContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJulContents.kpi3 >= '31.25' && socialHarvestJulContents.kpi3 < '37.5')?'green':(socialHarvestJulContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi4 == null)?'grey-2':(socialHarvestJulContents.kpi4 >= '0' && socialHarvestJulContents.kpi4 <= '3.9')?'red':(socialHarvestJulContents.kpi4 > '3.9' && socialHarvestJulContents.kpi4 <= '5.2')?'orange':(socialHarvestJulContents.kpi4 > '5.2' && socialHarvestJulContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJulContents.kpi4 >= '6.5' && socialHarvestJulContents.kpi4 < '7.8')?'green':(socialHarvestJulContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi5 == null)?'grey-2':(socialHarvestJulContents.kpi5 >= '0' && socialHarvestJulContents.kpi5 <= '2.2227')?'red':(socialHarvestJulContents.kpi5 > '2.2227' && socialHarvestJulContents.kpi5 <= '2.9636')?'orange':(socialHarvestJulContents.kpi5 > '2.9636' && socialHarvestJulContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJulContents.kpi5 >= '3.7045' && socialHarvestJulContents.kpi5 < '4.4454')?'green':(socialHarvestJulContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAugContents.kpi1 == null)?'grey-2':(socialHarvestAugContents.kpi1 >= '0' && socialHarvestAugContents.kpi1 <= '3.75')?'red':(socialHarvestAugContents.kpi1 > '3.75' && socialHarvestAugContents.kpi1 <= '5')?'orange':(socialHarvestAugContents.kpi1 > '5' && socialHarvestAugContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAugContents.kpi1 >= '6.25' && socialHarvestAugContents.kpi1 < '7.5')?'green':(socialHarvestAugContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi2 == null)?'grey-2':(socialHarvestAugContents.kpi2 >= '0' && socialHarvestAugContents.kpi2 <= '60.6')?'red':(socialHarvestAugContents.kpi2 > '60.6' && socialHarvestAugContents.kpi2 <= '80.8')?'orange':(socialHarvestAugContents.kpi2 > '80.8' && socialHarvestAugContents.kpi2 < '101')?'yellow-7':(socialHarvestAugContents.kpi2 >= '101' && socialHarvestAugContents.kpi2 < '121.2')?'green':(socialHarvestAugContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi3 == null)?'grey-2':(socialHarvestAugContents.kpi3 >= '0' && socialHarvestAugContents.kpi3 <= '18.75')?'red':(socialHarvestAugContents.kpi3 > '18.75' && socialHarvestAugContents.kpi3 <= '25')?'orange':(socialHarvestAugContents.kpi3 > '25' && socialHarvestAugContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAugContents.kpi3 >= '31.25' && socialHarvestAugContents.kpi3 < '37.5')?'green':(socialHarvestAugContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi4 == null)?'grey-2':(socialHarvestAugContents.kpi4 >= '0' && socialHarvestAugContents.kpi4 <= '3.9')?'red':(socialHarvestAugContents.kpi4 > '3.9' && socialHarvestAugContents.kpi4 <= '5.2')?'orange':(socialHarvestAugContents.kpi4 > '5.2' && socialHarvestAugContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAugContents.kpi4 >= '6.5' && socialHarvestAugContents.kpi4 < '7.8')?'green':(socialHarvestAugContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi5 == null)?'grey-2':(socialHarvestAugContents.kpi5 >= '0' && socialHarvestAugContents.kpi5 <= '2.2227')?'red':(socialHarvestAugContents.kpi5 > '2.2227' && socialHarvestAugContents.kpi5 <= '2.9636')?'orange':(socialHarvestAugContents.kpi5 > '2.9636' && socialHarvestAugContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAugContents.kpi5 >= '3.7045' && socialHarvestAugContents.kpi5 < '4.4454')?'green':(socialHarvestAugContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestSepContents.kpi1 == null)?'grey-2':(socialHarvestSepContents.kpi1 >= '0' && socialHarvestSepContents.kpi1 <= '3.75')?'red':(socialHarvestSepContents.kpi1 > '3.75' && socialHarvestSepContents.kpi1 <= '5')?'orange':(socialHarvestSepContents.kpi1 > '5' && socialHarvestSepContents.kpi1 < '6.25')?'yellow-7':(socialHarvestSepContents.kpi1 >= '6.25' && socialHarvestSepContents.kpi1 < '7.5')?'green':(socialHarvestSepContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi2 == null)?'grey-2':(socialHarvestSepContents.kpi2 >= '0' && socialHarvestSepContents.kpi2 <= '60.6')?'red':(socialHarvestSepContents.kpi2 > '60.6' && socialHarvestSepContents.kpi2 <= '80.8')?'orange':(socialHarvestSepContents.kpi2 > '80.8' && socialHarvestSepContents.kpi2 < '101')?'yellow-7':(socialHarvestSepContents.kpi2 >= '101' && socialHarvestSepContents.kpi2 < '121.2')?'green':(socialHarvestSepContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi3 == null)?'grey-2':(socialHarvestSepContents.kpi3 >= '0' && socialHarvestSepContents.kpi3 <= '18.75')?'red':(socialHarvestSepContents.kpi3 > '18.75' && socialHarvestSepContents.kpi3 <= '25')?'orange':(socialHarvestSepContents.kpi3 > '25' && socialHarvestSepContents.kpi3 < '31.25')?'yellow-7':(socialHarvestSepContents.kpi3 >= '31.25' && socialHarvestSepContents.kpi3 < '37.5')?'green':(socialHarvestSepContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi4 == null)?'grey-2':(socialHarvestSepContents.kpi4 >= '0' && socialHarvestSepContents.kpi4 <= '3.9')?'red':(socialHarvestSepContents.kpi4 > '3.9' && socialHarvestSepContents.kpi4 <= '5.2')?'orange':(socialHarvestSepContents.kpi4 > '5.2' && socialHarvestSepContents.kpi4 < '6.5')?'yellow-7':(socialHarvestSepContents.kpi4 >= '6.5' && socialHarvestSepContents.kpi4 < '7.8')?'green':(socialHarvestSepContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi5 == null)?'grey-2':(socialHarvestSepContents.kpi5 >= '0' && socialHarvestSepContents.kpi5 <= '2.2227')?'red':(socialHarvestSepContents.kpi5 > '2.2227' && socialHarvestSepContents.kpi5 <= '2.9636')?'orange':(socialHarvestSepContents.kpi5 > '2.9636' && socialHarvestSepContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestSepContents.kpi5 >= '3.7045' && socialHarvestSepContents.kpi5 < '4.4454')?'green':(socialHarvestSepContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestOctContents.kpi1 == null)?'grey-2':(socialHarvestOctContents.kpi1 >= '0' && socialHarvestOctContents.kpi1 <= '3.75')?'red':(socialHarvestOctContents.kpi1 > '3.75' && socialHarvestOctContents.kpi1 <= '5')?'orange':(socialHarvestOctContents.kpi1 > '5' && socialHarvestOctContents.kpi1 < '6.25')?'yellow-7':(socialHarvestOctContents.kpi1 >= '6.25' && socialHarvestOctContents.kpi1 < '7.5')?'green':(socialHarvestOctContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi2 == null)?'grey-2':(socialHarvestOctContents.kpi2 >= '0' && socialHarvestOctContents.kpi2 <= '60.6')?'red':(socialHarvestOctContents.kpi2 > '60.6' && socialHarvestOctContents.kpi2 <= '80.8')?'orange':(socialHarvestOctContents.kpi2 > '80.8' && socialHarvestOctContents.kpi2 < '101')?'yellow-7':(socialHarvestOctContents.kpi2 >= '101' && socialHarvestOctContents.kpi2 < '121.2')?'green':(socialHarvestOctContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi3 == null)?'grey-2':(socialHarvestOctContents.kpi3 >= '0' && socialHarvestOctContents.kpi3 <= '18.75')?'red':(socialHarvestOctContents.kpi3 > '18.75' && socialHarvestOctContents.kpi3 <= '25')?'orange':(socialHarvestOctContents.kpi3 > '25' && socialHarvestOctContents.kpi3 < '31.25')?'yellow-7':(socialHarvestOctContents.kpi3 >= '31.25' && socialHarvestOctContents.kpi3 < '37.5')?'green':(socialHarvestOctContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi4 == null)?'grey-2':(socialHarvestOctContents.kpi4 >= '0' && socialHarvestOctContents.kpi4 <= '3.9')?'red':(socialHarvestOctContents.kpi4 > '3.9' && socialHarvestOctContents.kpi4 <= '5.2')?'orange':(socialHarvestOctContents.kpi4 > '5.2' && socialHarvestOctContents.kpi4 < '6.5')?'yellow-7':(socialHarvestOctContents.kpi4 >= '6.5' && socialHarvestOctContents.kpi4 < '7.8')?'green':(socialHarvestOctContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi5 == null)?'grey-2':(socialHarvestOctContents.kpi5 >= '0' && socialHarvestOctContents.kpi5 <= '2.2227')?'red':(socialHarvestOctContents.kpi5 > '2.2227' && socialHarvestOctContents.kpi5 <= '2.9636')?'orange':(socialHarvestOctContents.kpi5 > '2.9636' && socialHarvestOctContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestOctContents.kpi5 >= '3.7045' && socialHarvestOctContents.kpi5 < '4.4454')?'green':(socialHarvestOctContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestNovContents.kpi1 == null)?'grey-2':(socialHarvestNovContents.kpi1 >= '0' && socialHarvestNovContents.kpi1 <= '3.75')?'red':(socialHarvestNovContents.kpi1 > '3.75' && socialHarvestNovContents.kpi1 <= '5')?'orange':(socialHarvestNovContents.kpi1 > '5' && socialHarvestNovContents.kpi1 < '6.25')?'yellow-7':(socialHarvestNovContents.kpi1 >= '6.25' && socialHarvestNovContents.kpi1 < '7.5')?'green':(socialHarvestNovContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi2 == null)?'grey-2':(socialHarvestNovContents.kpi2 >= '0' && socialHarvestNovContents.kpi2 <= '60.6')?'red':(socialHarvestNovContents.kpi2 > '60.6' && socialHarvestNovContents.kpi2 <= '80.8')?'orange':(socialHarvestNovContents.kpi2 > '80.8' && socialHarvestNovContents.kpi2 < '101')?'yellow-7':(socialHarvestNovContents.kpi2 >= '101' && socialHarvestNovContents.kpi2 < '121.2')?'green':(socialHarvestNovContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi3 == null)?'grey-2':(socialHarvestNovContents.kpi3 >= '0' && socialHarvestNovContents.kpi3 <= '18.75')?'red':(socialHarvestNovContents.kpi3 > '18.75' && socialHarvestNovContents.kpi3 <= '25')?'orange':(socialHarvestNovContents.kpi3 > '25' && socialHarvestNovContents.kpi3 < '31.25')?'yellow-7':(socialHarvestNovContents.kpi3 >= '31.25' && socialHarvestNovContents.kpi3 < '37.5')?'green':(socialHarvestNovContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi4 == null)?'grey-2':(socialHarvestNovContents.kpi4 >= '0' && socialHarvestNovContents.kpi4 <= '3.9')?'red':(socialHarvestNovContents.kpi4 > '3.9' && socialHarvestNovContents.kpi4 <= '5.2')?'orange':(socialHarvestNovContents.kpi4 > '5.2' && socialHarvestNovContents.kpi4 < '6.5')?'yellow-7':(socialHarvestNovContents.kpi4 >= '6.5' && socialHarvestNovContents.kpi4 < '7.8')?'green':(socialHarvestNovContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi5 == null)?'grey-2':(socialHarvestNovContents.kpi5 >= '0' && socialHarvestNovContents.kpi5 <= '2.2227')?'red':(socialHarvestNovContents.kpi5 > '2.2227' && socialHarvestNovContents.kpi5 <= '2.9636')?'orange':(socialHarvestNovContents.kpi5 > '2.9636' && socialHarvestNovContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestNovContents.kpi5 >= '3.7045' && socialHarvestNovContents.kpi5 < '4.4454')?'green':(socialHarvestNovContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestDecContents.kpi1 == null)?'grey-2':(socialHarvestDecContents.kpi1 >= '0' && socialHarvestDecContents.kpi1 <= '3.75')?'red':(socialHarvestDecContents.kpi1 > '3.75' && socialHarvestDecContents.kpi1 <= '5')?'orange':(socialHarvestDecContents.kpi1 > '5' && socialHarvestDecContents.kpi1 < '6.25')?'yellow-7':(socialHarvestDecContents.kpi1 >= '6.25' && socialHarvestDecContents.kpi1 < '7.5')?'green':(socialHarvestDecContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi2 == null)?'grey-2':(socialHarvestDecContents.kpi2 >= '0' && socialHarvestDecContents.kpi2 <= '60.6')?'red':(socialHarvestDecContents.kpi2 > '60.6' && socialHarvestDecContents.kpi2 <= '80.8')?'orange':(socialHarvestDecContents.kpi2 > '80.8' && socialHarvestDecContents.kpi2 < '101')?'yellow-7':(socialHarvestDecContents.kpi2 >= '101' && socialHarvestDecContents.kpi2 < '121.2')?'green':(socialHarvestDecContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi3 == null)?'grey-2':(socialHarvestDecContents.kpi3 >= '0' && socialHarvestDecContents.kpi3 <= '18.75')?'red':(socialHarvestDecContents.kpi3 > '18.75' && socialHarvestDecContents.kpi3 <= '25')?'orange':(socialHarvestDecContents.kpi3 > '25' && socialHarvestDecContents.kpi3 < '31.25')?'yellow-7':(socialHarvestDecContents.kpi3 >= '31.25' && socialHarvestDecContents.kpi3 < '37.5')?'green':(socialHarvestDecContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi4 == null)?'grey-2':(socialHarvestDecContents.kpi4 >= '0' && socialHarvestDecContents.kpi4 <= '3.9')?'red':(socialHarvestDecContents.kpi4 > '3.9' && socialHarvestDecContents.kpi4 <= '5.2')?'orange':(socialHarvestDecContents.kpi4 > '5.2' && socialHarvestDecContents.kpi4 < '6.5')?'yellow-7':(socialHarvestDecContents.kpi4 >= '6.5' && socialHarvestDecContents.kpi4 < '7.8')?'green':(socialHarvestDecContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi5 == null)?'grey-2':(socialHarvestDecContents.kpi5 >= '0' && socialHarvestDecContents.kpi5 <= '2.2227')?'red':(socialHarvestDecContents.kpi5 > '2.2227' && socialHarvestDecContents.kpi5 <= '2.9636')?'orange':(socialHarvestDecContents.kpi5 > '2.9636' && socialHarvestDecContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestDecContents.kpi5 >= '3.7045' && socialHarvestDecContents.kpi5 < '4.4454')?'green':(socialHarvestDecContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                                <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJanContents.kpi1 == null)?'grey-2':(socialHarvestJanContents.kpi1 >= '0' && socialHarvestJanContents.kpi1 <= '3.75')?'red':(socialHarvestJanContents.kpi1 > '3.75' && socialHarvestJanContents.kpi1 <= '5')?'orange':(socialHarvestJanContents.kpi1 > '5' && socialHarvestJanContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJanContents.kpi1 >= '6.25' && socialHarvestJanContents.kpi1 < '7.5')?'green':(socialHarvestJanContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi2 == null)?'grey-2':(socialHarvestJanContents.kpi2 >= '0' && socialHarvestJanContents.kpi2 <= '60.6')?'red':(socialHarvestJanContents.kpi2 > '60.6' && socialHarvestJanContents.kpi2 <= '80.8')?'orange':(socialHarvestJanContents.kpi2 > '80.8' && socialHarvestJanContents.kpi2 < '101')?'yellow-7':(socialHarvestJanContents.kpi2 >= '101' && socialHarvestJanContents.kpi2 < '121.2')?'green':(socialHarvestJanContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi3 == null)?'grey-2':(socialHarvestJanContents.kpi3 >= '0' && socialHarvestJanContents.kpi3 <= '18.75')?'red':(socialHarvestJanContents.kpi3 > '18.75' && socialHarvestJanContents.kpi3 <= '25')?'orange':(socialHarvestJanContents.kpi3 > '25' && socialHarvestJanContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJanContents.kpi3 >= '31.25' && socialHarvestJanContents.kpi3 < '37.5')?'green':(socialHarvestJanContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi4 == null)?'grey-2':(socialHarvestJanContents.kpi4 >= '0' && socialHarvestJanContents.kpi4 <= '3.9')?'red':(socialHarvestJanContents.kpi4 > '3.9' && socialHarvestJanContents.kpi4 <= '5.2')?'orange':(socialHarvestJanContents.kpi4 > '5.2' && socialHarvestJanContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJanContents.kpi4 >= '6.5' && socialHarvestJanContents.kpi4 < '7.8')?'green':(socialHarvestJanContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi5 == null)?'grey-2':(socialHarvestJanContents.kpi5 >= '0' && socialHarvestJanContents.kpi5 <= '2.2227')?'red':(socialHarvestJanContents.kpi5 > '2.2227' && socialHarvestJanContents.kpi5 <= '2.9636')?'orange':(socialHarvestJanContents.kpi5 > '2.9636' && socialHarvestJanContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJanContents.kpi5 >= '3.7045' && socialHarvestJanContents.kpi5 < '4.4454')?'green':(socialHarvestJanContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestFebContents.kpi1 == null)?'grey-2':(socialHarvestFebContents.kpi1 >= '0' && socialHarvestFebContents.kpi1 <= '3.75')?'red':(socialHarvestFebContents.kpi1 > '3.75' && socialHarvestFebContents.kpi1 <= '5')?'orange':(socialHarvestFebContents.kpi1 > '5' && socialHarvestFebContents.kpi1 < '6.25')?'yellow-7':(socialHarvestFebContents.kpi1 >= '6.25' && socialHarvestFebContents.kpi1 < '7.5')?'green':(socialHarvestFebContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi2 == null)?'grey-2':(socialHarvestFebContents.kpi2 >= '0' && socialHarvestFebContents.kpi2 <= '60.6')?'red':(socialHarvestFebContents.kpi2 > '60.6' && socialHarvestFebContents.kpi2 <= '80.8')?'orange':(socialHarvestFebContents.kpi2 > '80.8' && socialHarvestFebContents.kpi2 < '101')?'yellow-7':(socialHarvestFebContents.kpi2 >= '101' && socialHarvestFebContents.kpi2 < '121.2')?'green':(socialHarvestFebContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi3 == null)?'grey-2':(socialHarvestFebContents.kpi3 >= '0' && socialHarvestFebContents.kpi3 <= '18.75')?'red':(socialHarvestFebContents.kpi3 > '18.75' && socialHarvestFebContents.kpi3 <= '25')?'orange':(socialHarvestFebContents.kpi3 > '25' && socialHarvestFebContents.kpi3 < '31.25')?'yellow-7':(socialHarvestFebContents.kpi3 >= '31.25' && socialHarvestFebContents.kpi3 < '37.5')?'green':(socialHarvestFebContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi4 == null)?'grey-2':(socialHarvestFebContents.kpi4 >= '0' && socialHarvestFebContents.kpi4 <= '3.9')?'red':(socialHarvestFebContents.kpi4 > '3.9' && socialHarvestFebContents.kpi4 <= '5.2')?'orange':(socialHarvestFebContents.kpi4 > '5.2' && socialHarvestFebContents.kpi4 < '6.5')?'yellow-7':(socialHarvestFebContents.kpi4 >= '6.5' && socialHarvestFebContents.kpi4 < '7.8')?'green':(socialHarvestFebContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi5 == null)?'grey-2':(socialHarvestFebContents.kpi5 >= '0' && socialHarvestFebContents.kpi5 <= '2.2227')?'red':(socialHarvestFebContents.kpi5 > '2.2227' && socialHarvestFebContents.kpi5 <= '2.9636')?'orange':(socialHarvestFebContents.kpi5 > '2.9636' && socialHarvestFebContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestFebContents.kpi5 >= '3.7045' && socialHarvestFebContents.kpi5 < '4.4454')?'green':(socialHarvestFebContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMarContents.kpi1 == null)?'grey-2':(socialHarvestMarContents.kpi1 >= '0' && socialHarvestMarContents.kpi1 <= '3.75')?'red':(socialHarvestMarContents.kpi1 > '3.75' && socialHarvestMarContents.kpi1 <= '5')?'orange':(socialHarvestMarContents.kpi1 > '5' && socialHarvestMarContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMarContents.kpi1 >= '6.25' && socialHarvestMarContents.kpi1 < '7.5')?'green':(socialHarvestMarContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi2 == null)?'grey-2':(socialHarvestMarContents.kpi2 >= '0' && socialHarvestMarContents.kpi2 <= '60.6')?'red':(socialHarvestMarContents.kpi2 > '60.6' && socialHarvestMarContents.kpi2 <= '80.8')?'orange':(socialHarvestMarContents.kpi2 > '80.8' && socialHarvestMarContents.kpi2 < '101')?'yellow-7':(socialHarvestMarContents.kpi2 >= '101' && socialHarvestMarContents.kpi2 < '121.2')?'green':(socialHarvestMarContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi3 == null)?'grey-2':(socialHarvestMarContents.kpi3 >= '0' && socialHarvestMarContents.kpi3 <= '18.75')?'red':(socialHarvestMarContents.kpi3 > '18.75' && socialHarvestMarContents.kpi3 <= '25')?'orange':(socialHarvestMarContents.kpi3 > '25' && socialHarvestMarContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMarContents.kpi3 >= '31.25' && socialHarvestMarContents.kpi3 < '37.5')?'green':(socialHarvestMarContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi4 == null)?'grey-2':(socialHarvestMarContents.kpi4 >= '0' && socialHarvestMarContents.kpi4 <= '3.9')?'red':(socialHarvestMarContents.kpi4 > '3.9' && socialHarvestMarContents.kpi4 <= '5.2')?'orange':(socialHarvestMarContents.kpi4 > '5.2' && socialHarvestMarContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMarContents.kpi4 >= '6.5' && socialHarvestMarContents.kpi4 < '7.8')?'green':(socialHarvestMarContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi5 == null)?'grey-2':(socialHarvestMarContents.kpi5 >= '0' && socialHarvestMarContents.kpi5 <= '2.2227')?'red':(socialHarvestMarContents.kpi5 > '2.2227' && socialHarvestMarContents.kpi5 <= '2.9636')?'orange':(socialHarvestMarContents.kpi5 > '2.9636' && socialHarvestMarContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMarContents.kpi5 >= '3.7045' && socialHarvestMarContents.kpi5 < '4.4454')?'green':(socialHarvestMarContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAprContents.kpi1 == null)?'grey-2':(socialHarvestAprContents.kpi1 >= '0' && socialHarvestAprContents.kpi1 <= '3.75')?'red':(socialHarvestAprContents.kpi1 > '3.75' && socialHarvestAprContents.kpi1 <= '5')?'orange':(socialHarvestAprContents.kpi1 > '5' && socialHarvestAprContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAprContents.kpi1 >= '6.25' && socialHarvestAprContents.kpi1 < '7.5')?'green':(socialHarvestAprContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi2 == null)?'grey-2':(socialHarvestAprContents.kpi2 >= '0' && socialHarvestAprContents.kpi2 <= '60.6')?'red':(socialHarvestAprContents.kpi2 > '60.6' && socialHarvestAprContents.kpi2 <= '80.8')?'orange':(socialHarvestAprContents.kpi2 > '80.8' && socialHarvestAprContents.kpi2 < '101')?'yellow-7':(socialHarvestAprContents.kpi2 >= '101' && socialHarvestAprContents.kpi2 < '121.2')?'green':(socialHarvestAprContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi3 == null)?'grey-2':(socialHarvestAprContents.kpi3 >= '0' && socialHarvestAprContents.kpi3 <= '18.75')?'red':(socialHarvestAprContents.kpi3 > '18.75' && socialHarvestAprContents.kpi3 <= '25')?'orange':(socialHarvestAprContents.kpi3 > '25' && socialHarvestAprContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAprContents.kpi3 >= '31.25' && socialHarvestAprContents.kpi3 < '37.5')?'green':(socialHarvestAprContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi4 == null)?'grey-2':(socialHarvestAprContents.kpi4 >= '0' && socialHarvestAprContents.kpi4 <= '3.9')?'red':(socialHarvestAprContents.kpi4 > '3.9' && socialHarvestAprContents.kpi4 <= '5.2')?'orange':(socialHarvestAprContents.kpi4 > '5.2' && socialHarvestAprContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAprContents.kpi4 >= '6.5' && socialHarvestAprContents.kpi4 < '7.8')?'green':(socialHarvestAprContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi5 == null)?'grey-2':(socialHarvestAprContents.kpi5 >= '0' && socialHarvestAprContents.kpi5 <= '2.2227')?'red':(socialHarvestAprContents.kpi5 > '2.2227' && socialHarvestAprContents.kpi5 <= '2.9636')?'orange':(socialHarvestAprContents.kpi5 > '2.9636' && socialHarvestAprContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAprContents.kpi5 >= '3.7045' && socialHarvestAprContents.kpi5 < '4.4454')?'green':(socialHarvestAprContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMayContents.kpi1 == null)?'grey-2':(socialHarvestMayContents.kpi1 >= '0' && socialHarvestMayContents.kpi1 <= '3.75')?'red':(socialHarvestMayContents.kpi1 > '3.75' && socialHarvestMayContents.kpi1 <= '5')?'orange':(socialHarvestMayContents.kpi1 > '5' && socialHarvestMayContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMayContents.kpi1 >= '6.25' && socialHarvestMayContents.kpi1 < '7.5')?'green':(socialHarvestMayContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi2 == null)?'grey-2':(socialHarvestMayContents.kpi2 >= '0' && socialHarvestMayContents.kpi2 <= '60.6')?'red':(socialHarvestMayContents.kpi2 > '60.6' && socialHarvestMayContents.kpi2 <= '80.8')?'orange':(socialHarvestMayContents.kpi2 > '80.8' && socialHarvestMayContents.kpi2 < '101')?'yellow-7':(socialHarvestMayContents.kpi2 >= '101' && socialHarvestMayContents.kpi2 < '121.2')?'green':(socialHarvestMayContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi3 == null)?'grey-2':(socialHarvestMayContents.kpi3 >= '0' && socialHarvestMayContents.kpi3 <= '18.75')?'red':(socialHarvestMayContents.kpi3 > '18.75' && socialHarvestMayContents.kpi3 <= '25')?'orange':(socialHarvestMayContents.kpi3 > '25' && socialHarvestMayContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMayContents.kpi3 >= '31.25' && socialHarvestMayContents.kpi3 < '37.5')?'green':(socialHarvestMayContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi4 == null)?'grey-2':(socialHarvestMayContents.kpi4 >= '0' && socialHarvestMayContents.kpi4 <= '3.9')?'red':(socialHarvestMayContents.kpi4 > '3.9' && socialHarvestMayContents.kpi4 <= '5.2')?'orange':(socialHarvestMayContents.kpi4 > '5.2' && socialHarvestMayContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMayContents.kpi4 >= '6.5' && socialHarvestMayContents.kpi4 < '7.8')?'green':(socialHarvestMayContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi5 == null)?'grey-2':(socialHarvestMayContents.kpi5 >= '0' && socialHarvestMayContents.kpi5 <= '2.2227')?'red':(socialHarvestMayContents.kpi5 > '2.2227' && socialHarvestMayContents.kpi5 <= '2.9636')?'orange':(socialHarvestMayContents.kpi5 > '2.9636' && socialHarvestMayContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMayContents.kpi5 >= '3.7045' && socialHarvestMayContents.kpi5 < '4.4454')?'green':(socialHarvestMayContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJunContents.kpi1 == null)?'grey-2':(socialHarvestJunContents.kpi1 >= '0' && socialHarvestJunContents.kpi1 <= '3.75')?'red':(socialHarvestJunContents.kpi1 > '3.75' && socialHarvestJunContents.kpi1 <= '5')?'orange':(socialHarvestJunContents.kpi1 > '5' && socialHarvestJunContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJunContents.kpi1 >= '6.25' && socialHarvestJunContents.kpi1 < '7.5')?'green':(socialHarvestJunContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi2 == null)?'grey-2':(socialHarvestJunContents.kpi2 >= '0' && socialHarvestJunContents.kpi2 <= '60.6')?'red':(socialHarvestJunContents.kpi2 > '60.6' && socialHarvestJunContents.kpi2 <= '80.8')?'orange':(socialHarvestJunContents.kpi2 > '80.8' && socialHarvestJunContents.kpi2 < '101')?'yellow-7':(socialHarvestJunContents.kpi2 >= '101' && socialHarvestJunContents.kpi2 < '121.2')?'green':(socialHarvestJunContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi3 == null)?'grey-2':(socialHarvestJunContents.kpi3 >= '0' && socialHarvestJunContents.kpi3 <= '18.75')?'red':(socialHarvestJunContents.kpi3 > '18.75' && socialHarvestJunContents.kpi3 <= '25')?'orange':(socialHarvestJunContents.kpi3 > '25' && socialHarvestJunContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJunContents.kpi3 >= '31.25' && socialHarvestJunContents.kpi3 < '37.5')?'green':(socialHarvestJunContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi4 == null)?'grey-2':(socialHarvestJunContents.kpi4 >= '0' && socialHarvestJunContents.kpi4 <= '3.9')?'red':(socialHarvestJunContents.kpi4 > '3.9' && socialHarvestJunContents.kpi4 <= '5.2')?'orange':(socialHarvestJunContents.kpi4 > '5.2' && socialHarvestJunContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJunContents.kpi4 >= '6.5' && socialHarvestJunContents.kpi4 < '7.8')?'green':(socialHarvestJunContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi5 == null)?'grey-2':(socialHarvestJunContents.kpi5 >= '0' && socialHarvestJunContents.kpi5 <= '2.2227')?'red':(socialHarvestJunContents.kpi5 > '2.2227' && socialHarvestJunContents.kpi5 <= '2.9636')?'orange':(socialHarvestJunContents.kpi5 > '2.9636' && socialHarvestJunContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJunContents.kpi5 >= '3.7045' && socialHarvestJunContents.kpi5 < '4.4454')?'green':(socialHarvestJunContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJulContents.kpi1 == null)?'grey-2':(socialHarvestJulContents.kpi1 >= '0' && socialHarvestJulContents.kpi1 <= '3.75')?'red':(socialHarvestJulContents.kpi1 > '3.75' && socialHarvestJulContents.kpi1 <= '5')?'orange':(socialHarvestJulContents.kpi1 > '5' && socialHarvestJulContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJulContents.kpi1 >= '6.25' && socialHarvestJulContents.kpi1 < '7.5')?'green':(socialHarvestJulContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi2 == null)?'grey-2':(socialHarvestJulContents.kpi2 >= '0' && socialHarvestJulContents.kpi2 <= '60.6')?'red':(socialHarvestJulContents.kpi2 > '60.6' && socialHarvestJulContents.kpi2 <= '80.8')?'orange':(socialHarvestJulContents.kpi2 > '80.8' && socialHarvestJulContents.kpi2 < '101')?'yellow-7':(socialHarvestJulContents.kpi2 >= '101' && socialHarvestJulContents.kpi2 < '121.2')?'green':(socialHarvestJulContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi3 == null)?'grey-2':(socialHarvestJulContents.kpi3 >= '0' && socialHarvestJulContents.kpi3 <= '18.75')?'red':(socialHarvestJulContents.kpi3 > '18.75' && socialHarvestJulContents.kpi3 <= '25')?'orange':(socialHarvestJulContents.kpi3 > '25' && socialHarvestJulContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJulContents.kpi3 >= '31.25' && socialHarvestJulContents.kpi3 < '37.5')?'green':(socialHarvestJulContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi4 == null)?'grey-2':(socialHarvestJulContents.kpi4 >= '0' && socialHarvestJulContents.kpi4 <= '3.9')?'red':(socialHarvestJulContents.kpi4 > '3.9' && socialHarvestJulContents.kpi4 <= '5.2')?'orange':(socialHarvestJulContents.kpi4 > '5.2' && socialHarvestJulContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJulContents.kpi4 >= '6.5' && socialHarvestJulContents.kpi4 < '7.8')?'green':(socialHarvestJulContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi5 == null)?'grey-2':(socialHarvestJulContents.kpi5 >= '0' && socialHarvestJulContents.kpi5 <= '2.2227')?'red':(socialHarvestJulContents.kpi5 > '2.2227' && socialHarvestJulContents.kpi5 <= '2.9636')?'orange':(socialHarvestJulContents.kpi5 > '2.9636' && socialHarvestJulContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJulContents.kpi5 >= '3.7045' && socialHarvestJulContents.kpi5 < '4.4454')?'green':(socialHarvestJulContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAugContents.kpi1 == null)?'grey-2':(socialHarvestAugContents.kpi1 >= '0' && socialHarvestAugContents.kpi1 <= '3.75')?'red':(socialHarvestAugContents.kpi1 > '3.75' && socialHarvestAugContents.kpi1 <= '5')?'orange':(socialHarvestAugContents.kpi1 > '5' && socialHarvestAugContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAugContents.kpi1 >= '6.25' && socialHarvestAugContents.kpi1 < '7.5')?'green':(socialHarvestAugContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi2 == null)?'grey-2':(socialHarvestAugContents.kpi2 >= '0' && socialHarvestAugContents.kpi2 <= '60.6')?'red':(socialHarvestAugContents.kpi2 > '60.6' && socialHarvestAugContents.kpi2 <= '80.8')?'orange':(socialHarvestAugContents.kpi2 > '80.8' && socialHarvestAugContents.kpi2 < '101')?'yellow-7':(socialHarvestAugContents.kpi2 >= '101' && socialHarvestAugContents.kpi2 < '121.2')?'green':(socialHarvestAugContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi3 == null)?'grey-2':(socialHarvestAugContents.kpi3 >= '0' && socialHarvestAugContents.kpi3 <= '18.75')?'red':(socialHarvestAugContents.kpi3 > '18.75' && socialHarvestAugContents.kpi3 <= '25')?'orange':(socialHarvestAugContents.kpi3 > '25' && socialHarvestAugContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAugContents.kpi3 >= '31.25' && socialHarvestAugContents.kpi3 < '37.5')?'green':(socialHarvestAugContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi4 == null)?'grey-2':(socialHarvestAugContents.kpi4 >= '0' && socialHarvestAugContents.kpi4 <= '3.9')?'red':(socialHarvestAugContents.kpi4 > '3.9' && socialHarvestAugContents.kpi4 <= '5.2')?'orange':(socialHarvestAugContents.kpi4 > '5.2' && socialHarvestAugContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAugContents.kpi4 >= '6.5' && socialHarvestAugContents.kpi4 < '7.8')?'green':(socialHarvestAugContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi5 == null)?'grey-2':(socialHarvestAugContents.kpi5 >= '0' && socialHarvestAugContents.kpi5 <= '2.2227')?'red':(socialHarvestAugContents.kpi5 > '2.2227' && socialHarvestAugContents.kpi5 <= '2.9636')?'orange':(socialHarvestAugContents.kpi5 > '2.9636' && socialHarvestAugContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAugContents.kpi5 >= '3.7045' && socialHarvestAugContents.kpi5 < '4.4454')?'green':(socialHarvestAugContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestSepContents.kpi1 == null)?'grey-2':(socialHarvestSepContents.kpi1 >= '0' && socialHarvestSepContents.kpi1 <= '3.75')?'red':(socialHarvestSepContents.kpi1 > '3.75' && socialHarvestSepContents.kpi1 <= '5')?'orange':(socialHarvestSepContents.kpi1 > '5' && socialHarvestSepContents.kpi1 < '6.25')?'yellow-7':(socialHarvestSepContents.kpi1 >= '6.25' && socialHarvestSepContents.kpi1 < '7.5')?'green':(socialHarvestSepContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi2 == null)?'grey-2':(socialHarvestSepContents.kpi2 >= '0' && socialHarvestSepContents.kpi2 <= '60.6')?'red':(socialHarvestSepContents.kpi2 > '60.6' && socialHarvestSepContents.kpi2 <= '80.8')?'orange':(socialHarvestSepContents.kpi2 > '80.8' && socialHarvestSepContents.kpi2 < '101')?'yellow-7':(socialHarvestSepContents.kpi2 >= '101' && socialHarvestSepContents.kpi2 < '121.2')?'green':(socialHarvestSepContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi3 == null)?'grey-2':(socialHarvestSepContents.kpi3 >= '0' && socialHarvestSepContents.kpi3 <= '18.75')?'red':(socialHarvestSepContents.kpi3 > '18.75' && socialHarvestSepContents.kpi3 <= '25')?'orange':(socialHarvestSepContents.kpi3 > '25' && socialHarvestSepContents.kpi3 < '31.25')?'yellow-7':(socialHarvestSepContents.kpi3 >= '31.25' && socialHarvestSepContents.kpi3 < '37.5')?'green':(socialHarvestSepContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi4 == null)?'grey-2':(socialHarvestSepContents.kpi4 >= '0' && socialHarvestSepContents.kpi4 <= '3.9')?'red':(socialHarvestSepContents.kpi4 > '3.9' && socialHarvestSepContents.kpi4 <= '5.2')?'orange':(socialHarvestSepContents.kpi4 > '5.2' && socialHarvestSepContents.kpi4 < '6.5')?'yellow-7':(socialHarvestSepContents.kpi4 >= '6.5' && socialHarvestSepContents.kpi4 < '7.8')?'green':(socialHarvestSepContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi5 == null)?'grey-2':(socialHarvestSepContents.kpi5 >= '0' && socialHarvestSepContents.kpi5 <= '2.2227')?'red':(socialHarvestSepContents.kpi5 > '2.2227' && socialHarvestSepContents.kpi5 <= '2.9636')?'orange':(socialHarvestSepContents.kpi5 > '2.9636' && socialHarvestSepContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestSepContents.kpi5 >= '3.7045' && socialHarvestSepContents.kpi5 < '4.4454')?'green':(socialHarvestSepContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestOctContents.kpi1 == null)?'grey-2':(socialHarvestOctContents.kpi1 >= '0' && socialHarvestOctContents.kpi1 <= '3.75')?'red':(socialHarvestOctContents.kpi1 > '3.75' && socialHarvestOctContents.kpi1 <= '5')?'orange':(socialHarvestOctContents.kpi1 > '5' && socialHarvestOctContents.kpi1 < '6.25')?'yellow-7':(socialHarvestOctContents.kpi1 >= '6.25' && socialHarvestOctContents.kpi1 < '7.5')?'green':(socialHarvestOctContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi2 == null)?'grey-2':(socialHarvestOctContents.kpi2 >= '0' && socialHarvestOctContents.kpi2 <= '60.6')?'red':(socialHarvestOctContents.kpi2 > '60.6' && socialHarvestOctContents.kpi2 <= '80.8')?'orange':(socialHarvestOctContents.kpi2 > '80.8' && socialHarvestOctContents.kpi2 < '101')?'yellow-7':(socialHarvestOctContents.kpi2 >= '101' && socialHarvestOctContents.kpi2 < '121.2')?'green':(socialHarvestOctContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi3 == null)?'grey-2':(socialHarvestOctContents.kpi3 >= '0' && socialHarvestOctContents.kpi3 <= '18.75')?'red':(socialHarvestOctContents.kpi3 > '18.75' && socialHarvestOctContents.kpi3 <= '25')?'orange':(socialHarvestOctContents.kpi3 > '25' && socialHarvestOctContents.kpi3 < '31.25')?'yellow-7':(socialHarvestOctContents.kpi3 >= '31.25' && socialHarvestOctContents.kpi3 < '37.5')?'green':(socialHarvestOctContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi4 == null)?'grey-2':(socialHarvestOctContents.kpi4 >= '0' && socialHarvestOctContents.kpi4 <= '3.9')?'red':(socialHarvestOctContents.kpi4 > '3.9' && socialHarvestOctContents.kpi4 <= '5.2')?'orange':(socialHarvestOctContents.kpi4 > '5.2' && socialHarvestOctContents.kpi4 < '6.5')?'yellow-7':(socialHarvestOctContents.kpi4 >= '6.5' && socialHarvestOctContents.kpi4 < '7.8')?'green':(socialHarvestOctContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi5 == null)?'grey-2':(socialHarvestOctContents.kpi5 >= '0' && socialHarvestOctContents.kpi5 <= '2.2227')?'red':(socialHarvestOctContents.kpi5 > '2.2227' && socialHarvestOctContents.kpi5 <= '2.9636')?'orange':(socialHarvestOctContents.kpi5 > '2.9636' && socialHarvestOctContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestOctContents.kpi5 >= '3.7045' && socialHarvestOctContents.kpi5 < '4.4454')?'green':(socialHarvestOctContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestNovContents.kpi1 == null)?'grey-2':(socialHarvestNovContents.kpi1 >= '0' && socialHarvestNovContents.kpi1 <= '3.75')?'red':(socialHarvestNovContents.kpi1 > '3.75' && socialHarvestNovContents.kpi1 <= '5')?'orange':(socialHarvestNovContents.kpi1 > '5' && socialHarvestNovContents.kpi1 < '6.25')?'yellow-7':(socialHarvestNovContents.kpi1 >= '6.25' && socialHarvestNovContents.kpi1 < '7.5')?'green':(socialHarvestNovContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi2 == null)?'grey-2':(socialHarvestNovContents.kpi2 >= '0' && socialHarvestNovContents.kpi2 <= '60.6')?'red':(socialHarvestNovContents.kpi2 > '60.6' && socialHarvestNovContents.kpi2 <= '80.8')?'orange':(socialHarvestNovContents.kpi2 > '80.8' && socialHarvestNovContents.kpi2 < '101')?'yellow-7':(socialHarvestNovContents.kpi2 >= '101' && socialHarvestNovContents.kpi2 < '121.2')?'green':(socialHarvestNovContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi3 == null)?'grey-2':(socialHarvestNovContents.kpi3 >= '0' && socialHarvestNovContents.kpi3 <= '18.75')?'red':(socialHarvestNovContents.kpi3 > '18.75' && socialHarvestNovContents.kpi3 <= '25')?'orange':(socialHarvestNovContents.kpi3 > '25' && socialHarvestNovContents.kpi3 < '31.25')?'yellow-7':(socialHarvestNovContents.kpi3 >= '31.25' && socialHarvestNovContents.kpi3 < '37.5')?'green':(socialHarvestNovContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi4 == null)?'grey-2':(socialHarvestNovContents.kpi4 >= '0' && socialHarvestNovContents.kpi4 <= '3.9')?'red':(socialHarvestNovContents.kpi4 > '3.9' && socialHarvestNovContents.kpi4 <= '5.2')?'orange':(socialHarvestNovContents.kpi4 > '5.2' && socialHarvestNovContents.kpi4 < '6.5')?'yellow-7':(socialHarvestNovContents.kpi4 >= '6.5' && socialHarvestNovContents.kpi4 < '7.8')?'green':(socialHarvestNovContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi5 == null)?'grey-2':(socialHarvestNovContents.kpi5 >= '0' && socialHarvestNovContents.kpi5 <= '2.2227')?'red':(socialHarvestNovContents.kpi5 > '2.2227' && socialHarvestNovContents.kpi5 <= '2.9636')?'orange':(socialHarvestNovContents.kpi5 > '2.9636' && socialHarvestNovContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestNovContents.kpi5 >= '3.7045' && socialHarvestNovContents.kpi5 < '4.4454')?'green':(socialHarvestNovContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestDecContents.kpi1 == null)?'grey-2':(socialHarvestDecContents.kpi1 >= '0' && socialHarvestDecContents.kpi1 <= '3.75')?'red':(socialHarvestDecContents.kpi1 > '3.75' && socialHarvestDecContents.kpi1 <= '5')?'orange':(socialHarvestDecContents.kpi1 > '5' && socialHarvestDecContents.kpi1 < '6.25')?'yellow-7':(socialHarvestDecContents.kpi1 >= '6.25' && socialHarvestDecContents.kpi1 < '7.5')?'green':(socialHarvestDecContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi2 == null)?'grey-2':(socialHarvestDecContents.kpi2 >= '0' && socialHarvestDecContents.kpi2 <= '60.6')?'red':(socialHarvestDecContents.kpi2 > '60.6' && socialHarvestDecContents.kpi2 <= '80.8')?'orange':(socialHarvestDecContents.kpi2 > '80.8' && socialHarvestDecContents.kpi2 < '101')?'yellow-7':(socialHarvestDecContents.kpi2 >= '101' && socialHarvestDecContents.kpi2 < '121.2')?'green':(socialHarvestDecContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi3 == null)?'grey-2':(socialHarvestDecContents.kpi3 >= '0' && socialHarvestDecContents.kpi3 <= '18.75')?'red':(socialHarvestDecContents.kpi3 > '18.75' && socialHarvestDecContents.kpi3 <= '25')?'orange':(socialHarvestDecContents.kpi3 > '25' && socialHarvestDecContents.kpi3 < '31.25')?'yellow-7':(socialHarvestDecContents.kpi3 >= '31.25' && socialHarvestDecContents.kpi3 < '37.5')?'green':(socialHarvestDecContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi4 == null)?'grey-2':(socialHarvestDecContents.kpi4 >= '0' && socialHarvestDecContents.kpi4 <= '3.9')?'red':(socialHarvestDecContents.kpi4 > '3.9' && socialHarvestDecContents.kpi4 <= '5.2')?'orange':(socialHarvestDecContents.kpi4 > '5.2' && socialHarvestDecContents.kpi4 < '6.5')?'yellow-7':(socialHarvestDecContents.kpi4 >= '6.5' && socialHarvestDecContents.kpi4 < '7.8')?'green':(socialHarvestDecContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi5 == null)?'grey-2':(socialHarvestDecContents.kpi5 >= '0' && socialHarvestDecContents.kpi5 <= '2.2227')?'red':(socialHarvestDecContents.kpi5 > '2.2227' && socialHarvestDecContents.kpi5 <= '2.9636')?'orange':(socialHarvestDecContents.kpi5 > '2.9636' && socialHarvestDecContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestDecContents.kpi5 >= '3.7045' && socialHarvestDecContents.kpi5 < '4.4454')?'green':(socialHarvestDecContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                                <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJanContents.kpi1 == null)?'grey-2':(socialHarvestJanContents.kpi1 >= '0' && socialHarvestJanContents.kpi1 <= '3.75')?'red':(socialHarvestJanContents.kpi1 > '3.75' && socialHarvestJanContents.kpi1 <= '5')?'orange':(socialHarvestJanContents.kpi1 > '5' && socialHarvestJanContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJanContents.kpi1 >= '6.25' && socialHarvestJanContents.kpi1 < '7.5')?'green':(socialHarvestJanContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi2 == null)?'grey-2':(socialHarvestJanContents.kpi2 >= '0' && socialHarvestJanContents.kpi2 <= '60.6')?'red':(socialHarvestJanContents.kpi2 > '60.6' && socialHarvestJanContents.kpi2 <= '80.8')?'orange':(socialHarvestJanContents.kpi2 > '80.8' && socialHarvestJanContents.kpi2 < '101')?'yellow-7':(socialHarvestJanContents.kpi2 >= '101' && socialHarvestJanContents.kpi2 < '121.2')?'green':(socialHarvestJanContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi3 == null)?'grey-2':(socialHarvestJanContents.kpi3 >= '0' && socialHarvestJanContents.kpi3 <= '18.75')?'red':(socialHarvestJanContents.kpi3 > '18.75' && socialHarvestJanContents.kpi3 <= '25')?'orange':(socialHarvestJanContents.kpi3 > '25' && socialHarvestJanContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJanContents.kpi3 >= '31.25' && socialHarvestJanContents.kpi3 < '37.5')?'green':(socialHarvestJanContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi4 == null)?'grey-2':(socialHarvestJanContents.kpi4 >= '0' && socialHarvestJanContents.kpi4 <= '3.9')?'red':(socialHarvestJanContents.kpi4 > '3.9' && socialHarvestJanContents.kpi4 <= '5.2')?'orange':(socialHarvestJanContents.kpi4 > '5.2' && socialHarvestJanContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJanContents.kpi4 >= '6.5' && socialHarvestJanContents.kpi4 < '7.8')?'green':(socialHarvestJanContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi5 == null)?'grey-2':(socialHarvestJanContents.kpi5 >= '0' && socialHarvestJanContents.kpi5 <= '2.2227')?'red':(socialHarvestJanContents.kpi5 > '2.2227' && socialHarvestJanContents.kpi5 <= '2.9636')?'orange':(socialHarvestJanContents.kpi5 > '2.9636' && socialHarvestJanContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJanContents.kpi5 >= '3.7045' && socialHarvestJanContents.kpi5 < '4.4454')?'green':(socialHarvestJanContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestFebContents.kpi1 == null)?'grey-2':(socialHarvestFebContents.kpi1 >= '0' && socialHarvestFebContents.kpi1 <= '3.75')?'red':(socialHarvestFebContents.kpi1 > '3.75' && socialHarvestFebContents.kpi1 <= '5')?'orange':(socialHarvestFebContents.kpi1 > '5' && socialHarvestFebContents.kpi1 < '6.25')?'yellow-7':(socialHarvestFebContents.kpi1 >= '6.25' && socialHarvestFebContents.kpi1 < '7.5')?'green':(socialHarvestFebContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi2 == null)?'grey-2':(socialHarvestFebContents.kpi2 >= '0' && socialHarvestFebContents.kpi2 <= '60.6')?'red':(socialHarvestFebContents.kpi2 > '60.6' && socialHarvestFebContents.kpi2 <= '80.8')?'orange':(socialHarvestFebContents.kpi2 > '80.8' && socialHarvestFebContents.kpi2 < '101')?'yellow-7':(socialHarvestFebContents.kpi2 >= '101' && socialHarvestFebContents.kpi2 < '121.2')?'green':(socialHarvestFebContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi3 == null)?'grey-2':(socialHarvestFebContents.kpi3 >= '0' && socialHarvestFebContents.kpi3 <= '18.75')?'red':(socialHarvestFebContents.kpi3 > '18.75' && socialHarvestFebContents.kpi3 <= '25')?'orange':(socialHarvestFebContents.kpi3 > '25' && socialHarvestFebContents.kpi3 < '31.25')?'yellow-7':(socialHarvestFebContents.kpi3 >= '31.25' && socialHarvestFebContents.kpi3 < '37.5')?'green':(socialHarvestFebContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi4 == null)?'grey-2':(socialHarvestFebContents.kpi4 >= '0' && socialHarvestFebContents.kpi4 <= '3.9')?'red':(socialHarvestFebContents.kpi4 > '3.9' && socialHarvestFebContents.kpi4 <= '5.2')?'orange':(socialHarvestFebContents.kpi4 > '5.2' && socialHarvestFebContents.kpi4 < '6.5')?'yellow-7':(socialHarvestFebContents.kpi4 >= '6.5' && socialHarvestFebContents.kpi4 < '7.8')?'green':(socialHarvestFebContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi5 == null)?'grey-2':(socialHarvestFebContents.kpi5 >= '0' && socialHarvestFebContents.kpi5 <= '2.2227')?'red':(socialHarvestFebContents.kpi5 > '2.2227' && socialHarvestFebContents.kpi5 <= '2.9636')?'orange':(socialHarvestFebContents.kpi5 > '2.9636' && socialHarvestFebContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestFebContents.kpi5 >= '3.7045' && socialHarvestFebContents.kpi5 < '4.4454')?'green':(socialHarvestFebContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMarContents.kpi1 == null)?'grey-2':(socialHarvestMarContents.kpi1 >= '0' && socialHarvestMarContents.kpi1 <= '3.75')?'red':(socialHarvestMarContents.kpi1 > '3.75' && socialHarvestMarContents.kpi1 <= '5')?'orange':(socialHarvestMarContents.kpi1 > '5' && socialHarvestMarContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMarContents.kpi1 >= '6.25' && socialHarvestMarContents.kpi1 < '7.5')?'green':(socialHarvestMarContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi2 == null)?'grey-2':(socialHarvestMarContents.kpi2 >= '0' && socialHarvestMarContents.kpi2 <= '60.6')?'red':(socialHarvestMarContents.kpi2 > '60.6' && socialHarvestMarContents.kpi2 <= '80.8')?'orange':(socialHarvestMarContents.kpi2 > '80.8' && socialHarvestMarContents.kpi2 < '101')?'yellow-7':(socialHarvestMarContents.kpi2 >= '101' && socialHarvestMarContents.kpi2 < '121.2')?'green':(socialHarvestMarContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi3 == null)?'grey-2':(socialHarvestMarContents.kpi3 >= '0' && socialHarvestMarContents.kpi3 <= '18.75')?'red':(socialHarvestMarContents.kpi3 > '18.75' && socialHarvestMarContents.kpi3 <= '25')?'orange':(socialHarvestMarContents.kpi3 > '25' && socialHarvestMarContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMarContents.kpi3 >= '31.25' && socialHarvestMarContents.kpi3 < '37.5')?'green':(socialHarvestMarContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi4 == null)?'grey-2':(socialHarvestMarContents.kpi4 >= '0' && socialHarvestMarContents.kpi4 <= '3.9')?'red':(socialHarvestMarContents.kpi4 > '3.9' && socialHarvestMarContents.kpi4 <= '5.2')?'orange':(socialHarvestMarContents.kpi4 > '5.2' && socialHarvestMarContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMarContents.kpi4 >= '6.5' && socialHarvestMarContents.kpi4 < '7.8')?'green':(socialHarvestMarContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi5 == null)?'grey-2':(socialHarvestMarContents.kpi5 >= '0' && socialHarvestMarContents.kpi5 <= '2.2227')?'red':(socialHarvestMarContents.kpi5 > '2.2227' && socialHarvestMarContents.kpi5 <= '2.9636')?'orange':(socialHarvestMarContents.kpi5 > '2.9636' && socialHarvestMarContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMarContents.kpi5 >= '3.7045' && socialHarvestMarContents.kpi5 < '4.4454')?'green':(socialHarvestMarContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAprContents.kpi1 == null)?'grey-2':(socialHarvestAprContents.kpi1 >= '0' && socialHarvestAprContents.kpi1 <= '3.75')?'red':(socialHarvestAprContents.kpi1 > '3.75' && socialHarvestAprContents.kpi1 <= '5')?'orange':(socialHarvestAprContents.kpi1 > '5' && socialHarvestAprContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAprContents.kpi1 >= '6.25' && socialHarvestAprContents.kpi1 < '7.5')?'green':(socialHarvestAprContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi2 == null)?'grey-2':(socialHarvestAprContents.kpi2 >= '0' && socialHarvestAprContents.kpi2 <= '60.6')?'red':(socialHarvestAprContents.kpi2 > '60.6' && socialHarvestAprContents.kpi2 <= '80.8')?'orange':(socialHarvestAprContents.kpi2 > '80.8' && socialHarvestAprContents.kpi2 < '101')?'yellow-7':(socialHarvestAprContents.kpi2 >= '101' && socialHarvestAprContents.kpi2 < '121.2')?'green':(socialHarvestAprContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi3 == null)?'grey-2':(socialHarvestAprContents.kpi3 >= '0' && socialHarvestAprContents.kpi3 <= '18.75')?'red':(socialHarvestAprContents.kpi3 > '18.75' && socialHarvestAprContents.kpi3 <= '25')?'orange':(socialHarvestAprContents.kpi3 > '25' && socialHarvestAprContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAprContents.kpi3 >= '31.25' && socialHarvestAprContents.kpi3 < '37.5')?'green':(socialHarvestAprContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi4 == null)?'grey-2':(socialHarvestAprContents.kpi4 >= '0' && socialHarvestAprContents.kpi4 <= '3.9')?'red':(socialHarvestAprContents.kpi4 > '3.9' && socialHarvestAprContents.kpi4 <= '5.2')?'orange':(socialHarvestAprContents.kpi4 > '5.2' && socialHarvestAprContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAprContents.kpi4 >= '6.5' && socialHarvestAprContents.kpi4 < '7.8')?'green':(socialHarvestAprContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi5 == null)?'grey-2':(socialHarvestAprContents.kpi5 >= '0' && socialHarvestAprContents.kpi5 <= '2.2227')?'red':(socialHarvestAprContents.kpi5 > '2.2227' && socialHarvestAprContents.kpi5 <= '2.9636')?'orange':(socialHarvestAprContents.kpi5 > '2.9636' && socialHarvestAprContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAprContents.kpi5 >= '3.7045' && socialHarvestAprContents.kpi5 < '4.4454')?'green':(socialHarvestAprContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMayContents.kpi1 == null)?'grey-2':(socialHarvestMayContents.kpi1 >= '0' && socialHarvestMayContents.kpi1 <= '3.75')?'red':(socialHarvestMayContents.kpi1 > '3.75' && socialHarvestMayContents.kpi1 <= '5')?'orange':(socialHarvestMayContents.kpi1 > '5' && socialHarvestMayContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMayContents.kpi1 >= '6.25' && socialHarvestMayContents.kpi1 < '7.5')?'green':(socialHarvestMayContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi2 == null)?'grey-2':(socialHarvestMayContents.kpi2 >= '0' && socialHarvestMayContents.kpi2 <= '60.6')?'red':(socialHarvestMayContents.kpi2 > '60.6' && socialHarvestMayContents.kpi2 <= '80.8')?'orange':(socialHarvestMayContents.kpi2 > '80.8' && socialHarvestMayContents.kpi2 < '101')?'yellow-7':(socialHarvestMayContents.kpi2 >= '101' && socialHarvestMayContents.kpi2 < '121.2')?'green':(socialHarvestMayContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi3 == null)?'grey-2':(socialHarvestMayContents.kpi3 >= '0' && socialHarvestMayContents.kpi3 <= '18.75')?'red':(socialHarvestMayContents.kpi3 > '18.75' && socialHarvestMayContents.kpi3 <= '25')?'orange':(socialHarvestMayContents.kpi3 > '25' && socialHarvestMayContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMayContents.kpi3 >= '31.25' && socialHarvestMayContents.kpi3 < '37.5')?'green':(socialHarvestMayContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi4 == null)?'grey-2':(socialHarvestMayContents.kpi4 >= '0' && socialHarvestMayContents.kpi4 <= '3.9')?'red':(socialHarvestMayContents.kpi4 > '3.9' && socialHarvestMayContents.kpi4 <= '5.2')?'orange':(socialHarvestMayContents.kpi4 > '5.2' && socialHarvestMayContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMayContents.kpi4 >= '6.5' && socialHarvestMayContents.kpi4 < '7.8')?'green':(socialHarvestMayContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi5 == null)?'grey-2':(socialHarvestMayContents.kpi5 >= '0' && socialHarvestMayContents.kpi5 <= '2.2227')?'red':(socialHarvestMayContents.kpi5 > '2.2227' && socialHarvestMayContents.kpi5 <= '2.9636')?'orange':(socialHarvestMayContents.kpi5 > '2.9636' && socialHarvestMayContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMayContents.kpi5 >= '3.7045' && socialHarvestMayContents.kpi5 < '4.4454')?'green':(socialHarvestMayContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJunContents.kpi1 == null)?'grey-2':(socialHarvestJunContents.kpi1 >= '0' && socialHarvestJunContents.kpi1 <= '3.75')?'red':(socialHarvestJunContents.kpi1 > '3.75' && socialHarvestJunContents.kpi1 <= '5')?'orange':(socialHarvestJunContents.kpi1 > '5' && socialHarvestJunContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJunContents.kpi1 >= '6.25' && socialHarvestJunContents.kpi1 < '7.5')?'green':(socialHarvestJunContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi2 == null)?'grey-2':(socialHarvestJunContents.kpi2 >= '0' && socialHarvestJunContents.kpi2 <= '60.6')?'red':(socialHarvestJunContents.kpi2 > '60.6' && socialHarvestJunContents.kpi2 <= '80.8')?'orange':(socialHarvestJunContents.kpi2 > '80.8' && socialHarvestJunContents.kpi2 < '101')?'yellow-7':(socialHarvestJunContents.kpi2 >= '101' && socialHarvestJunContents.kpi2 < '121.2')?'green':(socialHarvestJunContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi3 == null)?'grey-2':(socialHarvestJunContents.kpi3 >= '0' && socialHarvestJunContents.kpi3 <= '18.75')?'red':(socialHarvestJunContents.kpi3 > '18.75' && socialHarvestJunContents.kpi3 <= '25')?'orange':(socialHarvestJunContents.kpi3 > '25' && socialHarvestJunContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJunContents.kpi3 >= '31.25' && socialHarvestJunContents.kpi3 < '37.5')?'green':(socialHarvestJunContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi4 == null)?'grey-2':(socialHarvestJunContents.kpi4 >= '0' && socialHarvestJunContents.kpi4 <= '3.9')?'red':(socialHarvestJunContents.kpi4 > '3.9' && socialHarvestJunContents.kpi4 <= '5.2')?'orange':(socialHarvestJunContents.kpi4 > '5.2' && socialHarvestJunContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJunContents.kpi4 >= '6.5' && socialHarvestJunContents.kpi4 < '7.8')?'green':(socialHarvestJunContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi5 == null)?'grey-2':(socialHarvestJunContents.kpi5 >= '0' && socialHarvestJunContents.kpi5 <= '2.2227')?'red':(socialHarvestJunContents.kpi5 > '2.2227' && socialHarvestJunContents.kpi5 <= '2.9636')?'orange':(socialHarvestJunContents.kpi5 > '2.9636' && socialHarvestJunContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJunContents.kpi5 >= '3.7045' && socialHarvestJunContents.kpi5 < '4.4454')?'green':(socialHarvestJunContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJulContents.kpi1 == null)?'grey-2':(socialHarvestJulContents.kpi1 >= '0' && socialHarvestJulContents.kpi1 <= '3.75')?'red':(socialHarvestJulContents.kpi1 > '3.75' && socialHarvestJulContents.kpi1 <= '5')?'orange':(socialHarvestJulContents.kpi1 > '5' && socialHarvestJulContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJulContents.kpi1 >= '6.25' && socialHarvestJulContents.kpi1 < '7.5')?'green':(socialHarvestJulContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi2 == null)?'grey-2':(socialHarvestJulContents.kpi2 >= '0' && socialHarvestJulContents.kpi2 <= '60.6')?'red':(socialHarvestJulContents.kpi2 > '60.6' && socialHarvestJulContents.kpi2 <= '80.8')?'orange':(socialHarvestJulContents.kpi2 > '80.8' && socialHarvestJulContents.kpi2 < '101')?'yellow-7':(socialHarvestJulContents.kpi2 >= '101' && socialHarvestJulContents.kpi2 < '121.2')?'green':(socialHarvestJulContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi3 == null)?'grey-2':(socialHarvestJulContents.kpi3 >= '0' && socialHarvestJulContents.kpi3 <= '18.75')?'red':(socialHarvestJulContents.kpi3 > '18.75' && socialHarvestJulContents.kpi3 <= '25')?'orange':(socialHarvestJulContents.kpi3 > '25' && socialHarvestJulContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJulContents.kpi3 >= '31.25' && socialHarvestJulContents.kpi3 < '37.5')?'green':(socialHarvestJulContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi4 == null)?'grey-2':(socialHarvestJulContents.kpi4 >= '0' && socialHarvestJulContents.kpi4 <= '3.9')?'red':(socialHarvestJulContents.kpi4 > '3.9' && socialHarvestJulContents.kpi4 <= '5.2')?'orange':(socialHarvestJulContents.kpi4 > '5.2' && socialHarvestJulContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJulContents.kpi4 >= '6.5' && socialHarvestJulContents.kpi4 < '7.8')?'green':(socialHarvestJulContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi5 == null)?'grey-2':(socialHarvestJulContents.kpi5 >= '0' && socialHarvestJulContents.kpi5 <= '2.2227')?'red':(socialHarvestJulContents.kpi5 > '2.2227' && socialHarvestJulContents.kpi5 <= '2.9636')?'orange':(socialHarvestJulContents.kpi5 > '2.9636' && socialHarvestJulContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJulContents.kpi5 >= '3.7045' && socialHarvestJulContents.kpi5 < '4.4454')?'green':(socialHarvestJulContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAugContents.kpi1 == null)?'grey-2':(socialHarvestAugContents.kpi1 >= '0' && socialHarvestAugContents.kpi1 <= '3.75')?'red':(socialHarvestAugContents.kpi1 > '3.75' && socialHarvestAugContents.kpi1 <= '5')?'orange':(socialHarvestAugContents.kpi1 > '5' && socialHarvestAugContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAugContents.kpi1 >= '6.25' && socialHarvestAugContents.kpi1 < '7.5')?'green':(socialHarvestAugContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi2 == null)?'grey-2':(socialHarvestAugContents.kpi2 >= '0' && socialHarvestAugContents.kpi2 <= '60.6')?'red':(socialHarvestAugContents.kpi2 > '60.6' && socialHarvestAugContents.kpi2 <= '80.8')?'orange':(socialHarvestAugContents.kpi2 > '80.8' && socialHarvestAugContents.kpi2 < '101')?'yellow-7':(socialHarvestAugContents.kpi2 >= '101' && socialHarvestAugContents.kpi2 < '121.2')?'green':(socialHarvestAugContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi3 == null)?'grey-2':(socialHarvestAugContents.kpi3 >= '0' && socialHarvestAugContents.kpi3 <= '18.75')?'red':(socialHarvestAugContents.kpi3 > '18.75' && socialHarvestAugContents.kpi3 <= '25')?'orange':(socialHarvestAugContents.kpi3 > '25' && socialHarvestAugContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAugContents.kpi3 >= '31.25' && socialHarvestAugContents.kpi3 < '37.5')?'green':(socialHarvestAugContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi4 == null)?'grey-2':(socialHarvestAugContents.kpi4 >= '0' && socialHarvestAugContents.kpi4 <= '3.9')?'red':(socialHarvestAugContents.kpi4 > '3.9' && socialHarvestAugContents.kpi4 <= '5.2')?'orange':(socialHarvestAugContents.kpi4 > '5.2' && socialHarvestAugContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAugContents.kpi4 >= '6.5' && socialHarvestAugContents.kpi4 < '7.8')?'green':(socialHarvestAugContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi5 == null)?'grey-2':(socialHarvestAugContents.kpi5 >= '0' && socialHarvestAugContents.kpi5 <= '2.2227')?'red':(socialHarvestAugContents.kpi5 > '2.2227' && socialHarvestAugContents.kpi5 <= '2.9636')?'orange':(socialHarvestAugContents.kpi5 > '2.9636' && socialHarvestAugContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAugContents.kpi5 >= '3.7045' && socialHarvestAugContents.kpi5 < '4.4454')?'green':(socialHarvestAugContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestSepContents.kpi1 == null)?'grey-2':(socialHarvestSepContents.kpi1 >= '0' && socialHarvestSepContents.kpi1 <= '3.75')?'red':(socialHarvestSepContents.kpi1 > '3.75' && socialHarvestSepContents.kpi1 <= '5')?'orange':(socialHarvestSepContents.kpi1 > '5' && socialHarvestSepContents.kpi1 < '6.25')?'yellow-7':(socialHarvestSepContents.kpi1 >= '6.25' && socialHarvestSepContents.kpi1 < '7.5')?'green':(socialHarvestSepContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi2 == null)?'grey-2':(socialHarvestSepContents.kpi2 >= '0' && socialHarvestSepContents.kpi2 <= '60.6')?'red':(socialHarvestSepContents.kpi2 > '60.6' && socialHarvestSepContents.kpi2 <= '80.8')?'orange':(socialHarvestSepContents.kpi2 > '80.8' && socialHarvestSepContents.kpi2 < '101')?'yellow-7':(socialHarvestSepContents.kpi2 >= '101' && socialHarvestSepContents.kpi2 < '121.2')?'green':(socialHarvestSepContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi3 == null)?'grey-2':(socialHarvestSepContents.kpi3 >= '0' && socialHarvestSepContents.kpi3 <= '18.75')?'red':(socialHarvestSepContents.kpi3 > '18.75' && socialHarvestSepContents.kpi3 <= '25')?'orange':(socialHarvestSepContents.kpi3 > '25' && socialHarvestSepContents.kpi3 < '31.25')?'yellow-7':(socialHarvestSepContents.kpi3 >= '31.25' && socialHarvestSepContents.kpi3 < '37.5')?'green':(socialHarvestSepContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi4 == null)?'grey-2':(socialHarvestSepContents.kpi4 >= '0' && socialHarvestSepContents.kpi4 <= '3.9')?'red':(socialHarvestSepContents.kpi4 > '3.9' && socialHarvestSepContents.kpi4 <= '5.2')?'orange':(socialHarvestSepContents.kpi4 > '5.2' && socialHarvestSepContents.kpi4 < '6.5')?'yellow-7':(socialHarvestSepContents.kpi4 >= '6.5' && socialHarvestSepContents.kpi4 < '7.8')?'green':(socialHarvestSepContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi5 == null)?'grey-2':(socialHarvestSepContents.kpi5 >= '0' && socialHarvestSepContents.kpi5 <= '2.2227')?'red':(socialHarvestSepContents.kpi5 > '2.2227' && socialHarvestSepContents.kpi5 <= '2.9636')?'orange':(socialHarvestSepContents.kpi5 > '2.9636' && socialHarvestSepContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestSepContents.kpi5 >= '3.7045' && socialHarvestSepContents.kpi5 < '4.4454')?'green':(socialHarvestSepContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestOctContents.kpi1 == null)?'grey-2':(socialHarvestOctContents.kpi1 >= '0' && socialHarvestOctContents.kpi1 <= '3.75')?'red':(socialHarvestOctContents.kpi1 > '3.75' && socialHarvestOctContents.kpi1 <= '5')?'orange':(socialHarvestOctContents.kpi1 > '5' && socialHarvestOctContents.kpi1 < '6.25')?'yellow-7':(socialHarvestOctContents.kpi1 >= '6.25' && socialHarvestOctContents.kpi1 < '7.5')?'green':(socialHarvestOctContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi2 == null)?'grey-2':(socialHarvestOctContents.kpi2 >= '0' && socialHarvestOctContents.kpi2 <= '60.6')?'red':(socialHarvestOctContents.kpi2 > '60.6' && socialHarvestOctContents.kpi2 <= '80.8')?'orange':(socialHarvestOctContents.kpi2 > '80.8' && socialHarvestOctContents.kpi2 < '101')?'yellow-7':(socialHarvestOctContents.kpi2 >= '101' && socialHarvestOctContents.kpi2 < '121.2')?'green':(socialHarvestOctContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi3 == null)?'grey-2':(socialHarvestOctContents.kpi3 >= '0' && socialHarvestOctContents.kpi3 <= '18.75')?'red':(socialHarvestOctContents.kpi3 > '18.75' && socialHarvestOctContents.kpi3 <= '25')?'orange':(socialHarvestOctContents.kpi3 > '25' && socialHarvestOctContents.kpi3 < '31.25')?'yellow-7':(socialHarvestOctContents.kpi3 >= '31.25' && socialHarvestOctContents.kpi3 < '37.5')?'green':(socialHarvestOctContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi4 == null)?'grey-2':(socialHarvestOctContents.kpi4 >= '0' && socialHarvestOctContents.kpi4 <= '3.9')?'red':(socialHarvestOctContents.kpi4 > '3.9' && socialHarvestOctContents.kpi4 <= '5.2')?'orange':(socialHarvestOctContents.kpi4 > '5.2' && socialHarvestOctContents.kpi4 < '6.5')?'yellow-7':(socialHarvestOctContents.kpi4 >= '6.5' && socialHarvestOctContents.kpi4 < '7.8')?'green':(socialHarvestOctContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi5 == null)?'grey-2':(socialHarvestOctContents.kpi5 >= '0' && socialHarvestOctContents.kpi5 <= '2.2227')?'red':(socialHarvestOctContents.kpi5 > '2.2227' && socialHarvestOctContents.kpi5 <= '2.9636')?'orange':(socialHarvestOctContents.kpi5 > '2.9636' && socialHarvestOctContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestOctContents.kpi5 >= '3.7045' && socialHarvestOctContents.kpi5 < '4.4454')?'green':(socialHarvestOctContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestNovContents.kpi1 == null)?'grey-2':(socialHarvestNovContents.kpi1 >= '0' && socialHarvestNovContents.kpi1 <= '3.75')?'red':(socialHarvestNovContents.kpi1 > '3.75' && socialHarvestNovContents.kpi1 <= '5')?'orange':(socialHarvestNovContents.kpi1 > '5' && socialHarvestNovContents.kpi1 < '6.25')?'yellow-7':(socialHarvestNovContents.kpi1 >= '6.25' && socialHarvestNovContents.kpi1 < '7.5')?'green':(socialHarvestNovContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi2 == null)?'grey-2':(socialHarvestNovContents.kpi2 >= '0' && socialHarvestNovContents.kpi2 <= '60.6')?'red':(socialHarvestNovContents.kpi2 > '60.6' && socialHarvestNovContents.kpi2 <= '80.8')?'orange':(socialHarvestNovContents.kpi2 > '80.8' && socialHarvestNovContents.kpi2 < '101')?'yellow-7':(socialHarvestNovContents.kpi2 >= '101' && socialHarvestNovContents.kpi2 < '121.2')?'green':(socialHarvestNovContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi3 == null)?'grey-2':(socialHarvestNovContents.kpi3 >= '0' && socialHarvestNovContents.kpi3 <= '18.75')?'red':(socialHarvestNovContents.kpi3 > '18.75' && socialHarvestNovContents.kpi3 <= '25')?'orange':(socialHarvestNovContents.kpi3 > '25' && socialHarvestNovContents.kpi3 < '31.25')?'yellow-7':(socialHarvestNovContents.kpi3 >= '31.25' && socialHarvestNovContents.kpi3 < '37.5')?'green':(socialHarvestNovContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi4 == null)?'grey-2':(socialHarvestNovContents.kpi4 >= '0' && socialHarvestNovContents.kpi4 <= '3.9')?'red':(socialHarvestNovContents.kpi4 > '3.9' && socialHarvestNovContents.kpi4 <= '5.2')?'orange':(socialHarvestNovContents.kpi4 > '5.2' && socialHarvestNovContents.kpi4 < '6.5')?'yellow-7':(socialHarvestNovContents.kpi4 >= '6.5' && socialHarvestNovContents.kpi4 < '7.8')?'green':(socialHarvestNovContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi5 == null)?'grey-2':(socialHarvestNovContents.kpi5 >= '0' && socialHarvestNovContents.kpi5 <= '2.2227')?'red':(socialHarvestNovContents.kpi5 > '2.2227' && socialHarvestNovContents.kpi5 <= '2.9636')?'orange':(socialHarvestNovContents.kpi5 > '2.9636' && socialHarvestNovContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestNovContents.kpi5 >= '3.7045' && socialHarvestNovContents.kpi5 < '4.4454')?'green':(socialHarvestNovContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestDecContents.kpi1 == null)?'grey-2':(socialHarvestDecContents.kpi1 >= '0' && socialHarvestDecContents.kpi1 <= '3.75')?'red':(socialHarvestDecContents.kpi1 > '3.75' && socialHarvestDecContents.kpi1 <= '5')?'orange':(socialHarvestDecContents.kpi1 > '5' && socialHarvestDecContents.kpi1 < '6.25')?'yellow-7':(socialHarvestDecContents.kpi1 >= '6.25' && socialHarvestDecContents.kpi1 < '7.5')?'green':(socialHarvestDecContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi2 == null)?'grey-2':(socialHarvestDecContents.kpi2 >= '0' && socialHarvestDecContents.kpi2 <= '60.6')?'red':(socialHarvestDecContents.kpi2 > '60.6' && socialHarvestDecContents.kpi2 <= '80.8')?'orange':(socialHarvestDecContents.kpi2 > '80.8' && socialHarvestDecContents.kpi2 < '101')?'yellow-7':(socialHarvestDecContents.kpi2 >= '101' && socialHarvestDecContents.kpi2 < '121.2')?'green':(socialHarvestDecContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi3 == null)?'grey-2':(socialHarvestDecContents.kpi3 >= '0' && socialHarvestDecContents.kpi3 <= '18.75')?'red':(socialHarvestDecContents.kpi3 > '18.75' && socialHarvestDecContents.kpi3 <= '25')?'orange':(socialHarvestDecContents.kpi3 > '25' && socialHarvestDecContents.kpi3 < '31.25')?'yellow-7':(socialHarvestDecContents.kpi3 >= '31.25' && socialHarvestDecContents.kpi3 < '37.5')?'green':(socialHarvestDecContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi4 == null)?'grey-2':(socialHarvestDecContents.kpi4 >= '0' && socialHarvestDecContents.kpi4 <= '3.9')?'red':(socialHarvestDecContents.kpi4 > '3.9' && socialHarvestDecContents.kpi4 <= '5.2')?'orange':(socialHarvestDecContents.kpi4 > '5.2' && socialHarvestDecContents.kpi4 < '6.5')?'yellow-7':(socialHarvestDecContents.kpi4 >= '6.5' && socialHarvestDecContents.kpi4 < '7.8')?'green':(socialHarvestDecContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi5 == null)?'grey-2':(socialHarvestDecContents.kpi5 >= '0' && socialHarvestDecContents.kpi5 <= '2.2227')?'red':(socialHarvestDecContents.kpi5 > '2.2227' && socialHarvestDecContents.kpi5 <= '2.9636')?'orange':(socialHarvestDecContents.kpi5 > '2.9636' && socialHarvestDecContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestDecContents.kpi5 >= '3.7045' && socialHarvestDecContents.kpi5 < '4.4454')?'green':(socialHarvestDecContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                                <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJanContents.kpi1 == null)?'grey-2':(socialHarvestJanContents.kpi1 >= '0' && socialHarvestJanContents.kpi1 <= '3.75')?'red':(socialHarvestJanContents.kpi1 > '3.75' && socialHarvestJanContents.kpi1 <= '5')?'orange':(socialHarvestJanContents.kpi1 > '5' && socialHarvestJanContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJanContents.kpi1 >= '6.25' && socialHarvestJanContents.kpi1 < '7.5')?'green':(socialHarvestJanContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi2 == null)?'grey-2':(socialHarvestJanContents.kpi2 >= '0' && socialHarvestJanContents.kpi2 <= '60.6')?'red':(socialHarvestJanContents.kpi2 > '60.6' && socialHarvestJanContents.kpi2 <= '80.8')?'orange':(socialHarvestJanContents.kpi2 > '80.8' && socialHarvestJanContents.kpi2 < '101')?'yellow-7':(socialHarvestJanContents.kpi2 >= '101' && socialHarvestJanContents.kpi2 < '121.2')?'green':(socialHarvestJanContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi3 == null)?'grey-2':(socialHarvestJanContents.kpi3 >= '0' && socialHarvestJanContents.kpi3 <= '18.75')?'red':(socialHarvestJanContents.kpi3 > '18.75' && socialHarvestJanContents.kpi3 <= '25')?'orange':(socialHarvestJanContents.kpi3 > '25' && socialHarvestJanContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJanContents.kpi3 >= '31.25' && socialHarvestJanContents.kpi3 < '37.5')?'green':(socialHarvestJanContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi4 == null)?'grey-2':(socialHarvestJanContents.kpi4 >= '0' && socialHarvestJanContents.kpi4 <= '3.9')?'red':(socialHarvestJanContents.kpi4 > '3.9' && socialHarvestJanContents.kpi4 <= '5.2')?'orange':(socialHarvestJanContents.kpi4 > '5.2' && socialHarvestJanContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJanContents.kpi4 >= '6.5' && socialHarvestJanContents.kpi4 < '7.8')?'green':(socialHarvestJanContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi5 == null)?'grey-2':(socialHarvestJanContents.kpi5 >= '0' && socialHarvestJanContents.kpi5 <= '2.2227')?'red':(socialHarvestJanContents.kpi5 > '2.2227' && socialHarvestJanContents.kpi5 <= '2.9636')?'orange':(socialHarvestJanContents.kpi5 > '2.9636' && socialHarvestJanContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJanContents.kpi5 >= '3.7045' && socialHarvestJanContents.kpi5 < '4.4454')?'green':(socialHarvestJanContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestFebContents.kpi1 == null)?'grey-2':(socialHarvestFebContents.kpi1 >= '0' && socialHarvestFebContents.kpi1 <= '3.75')?'red':(socialHarvestFebContents.kpi1 > '3.75' && socialHarvestFebContents.kpi1 <= '5')?'orange':(socialHarvestFebContents.kpi1 > '5' && socialHarvestFebContents.kpi1 < '6.25')?'yellow-7':(socialHarvestFebContents.kpi1 >= '6.25' && socialHarvestFebContents.kpi1 < '7.5')?'green':(socialHarvestFebContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi2 == null)?'grey-2':(socialHarvestFebContents.kpi2 >= '0' && socialHarvestFebContents.kpi2 <= '60.6')?'red':(socialHarvestFebContents.kpi2 > '60.6' && socialHarvestFebContents.kpi2 <= '80.8')?'orange':(socialHarvestFebContents.kpi2 > '80.8' && socialHarvestFebContents.kpi2 < '101')?'yellow-7':(socialHarvestFebContents.kpi2 >= '101' && socialHarvestFebContents.kpi2 < '121.2')?'green':(socialHarvestFebContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi3 == null)?'grey-2':(socialHarvestFebContents.kpi3 >= '0' && socialHarvestFebContents.kpi3 <= '18.75')?'red':(socialHarvestFebContents.kpi3 > '18.75' && socialHarvestFebContents.kpi3 <= '25')?'orange':(socialHarvestFebContents.kpi3 > '25' && socialHarvestFebContents.kpi3 < '31.25')?'yellow-7':(socialHarvestFebContents.kpi3 >= '31.25' && socialHarvestFebContents.kpi3 < '37.5')?'green':(socialHarvestFebContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi4 == null)?'grey-2':(socialHarvestFebContents.kpi4 >= '0' && socialHarvestFebContents.kpi4 <= '3.9')?'red':(socialHarvestFebContents.kpi4 > '3.9' && socialHarvestFebContents.kpi4 <= '5.2')?'orange':(socialHarvestFebContents.kpi4 > '5.2' && socialHarvestFebContents.kpi4 < '6.5')?'yellow-7':(socialHarvestFebContents.kpi4 >= '6.5' && socialHarvestFebContents.kpi4 < '7.8')?'green':(socialHarvestFebContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi5 == null)?'grey-2':(socialHarvestFebContents.kpi5 >= '0' && socialHarvestFebContents.kpi5 <= '2.2227')?'red':(socialHarvestFebContents.kpi5 > '2.2227' && socialHarvestFebContents.kpi5 <= '2.9636')?'orange':(socialHarvestFebContents.kpi5 > '2.9636' && socialHarvestFebContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestFebContents.kpi5 >= '3.7045' && socialHarvestFebContents.kpi5 < '4.4454')?'green':(socialHarvestFebContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMarContents.kpi1 == null)?'grey-2':(socialHarvestMarContents.kpi1 >= '0' && socialHarvestMarContents.kpi1 <= '3.75')?'red':(socialHarvestMarContents.kpi1 > '3.75' && socialHarvestMarContents.kpi1 <= '5')?'orange':(socialHarvestMarContents.kpi1 > '5' && socialHarvestMarContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMarContents.kpi1 >= '6.25' && socialHarvestMarContents.kpi1 < '7.5')?'green':(socialHarvestMarContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi2 == null)?'grey-2':(socialHarvestMarContents.kpi2 >= '0' && socialHarvestMarContents.kpi2 <= '60.6')?'red':(socialHarvestMarContents.kpi2 > '60.6' && socialHarvestMarContents.kpi2 <= '80.8')?'orange':(socialHarvestMarContents.kpi2 > '80.8' && socialHarvestMarContents.kpi2 < '101')?'yellow-7':(socialHarvestMarContents.kpi2 >= '101' && socialHarvestMarContents.kpi2 < '121.2')?'green':(socialHarvestMarContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi3 == null)?'grey-2':(socialHarvestMarContents.kpi3 >= '0' && socialHarvestMarContents.kpi3 <= '18.75')?'red':(socialHarvestMarContents.kpi3 > '18.75' && socialHarvestMarContents.kpi3 <= '25')?'orange':(socialHarvestMarContents.kpi3 > '25' && socialHarvestMarContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMarContents.kpi3 >= '31.25' && socialHarvestMarContents.kpi3 < '37.5')?'green':(socialHarvestMarContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi4 == null)?'grey-2':(socialHarvestMarContents.kpi4 >= '0' && socialHarvestMarContents.kpi4 <= '3.9')?'red':(socialHarvestMarContents.kpi4 > '3.9' && socialHarvestMarContents.kpi4 <= '5.2')?'orange':(socialHarvestMarContents.kpi4 > '5.2' && socialHarvestMarContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMarContents.kpi4 >= '6.5' && socialHarvestMarContents.kpi4 < '7.8')?'green':(socialHarvestMarContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi5 == null)?'grey-2':(socialHarvestMarContents.kpi5 >= '0' && socialHarvestMarContents.kpi5 <= '2.2227')?'red':(socialHarvestMarContents.kpi5 > '2.2227' && socialHarvestMarContents.kpi5 <= '2.9636')?'orange':(socialHarvestMarContents.kpi5 > '2.9636' && socialHarvestMarContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMarContents.kpi5 >= '3.7045' && socialHarvestMarContents.kpi5 < '4.4454')?'green':(socialHarvestMarContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAprContents.kpi1 == null)?'grey-2':(socialHarvestAprContents.kpi1 >= '0' && socialHarvestAprContents.kpi1 <= '3.75')?'red':(socialHarvestAprContents.kpi1 > '3.75' && socialHarvestAprContents.kpi1 <= '5')?'orange':(socialHarvestAprContents.kpi1 > '5' && socialHarvestAprContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAprContents.kpi1 >= '6.25' && socialHarvestAprContents.kpi1 < '7.5')?'green':(socialHarvestAprContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi2 == null)?'grey-2':(socialHarvestAprContents.kpi2 >= '0' && socialHarvestAprContents.kpi2 <= '60.6')?'red':(socialHarvestAprContents.kpi2 > '60.6' && socialHarvestAprContents.kpi2 <= '80.8')?'orange':(socialHarvestAprContents.kpi2 > '80.8' && socialHarvestAprContents.kpi2 < '101')?'yellow-7':(socialHarvestAprContents.kpi2 >= '101' && socialHarvestAprContents.kpi2 < '121.2')?'green':(socialHarvestAprContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi3 == null)?'grey-2':(socialHarvestAprContents.kpi3 >= '0' && socialHarvestAprContents.kpi3 <= '18.75')?'red':(socialHarvestAprContents.kpi3 > '18.75' && socialHarvestAprContents.kpi3 <= '25')?'orange':(socialHarvestAprContents.kpi3 > '25' && socialHarvestAprContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAprContents.kpi3 >= '31.25' && socialHarvestAprContents.kpi3 < '37.5')?'green':(socialHarvestAprContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi4 == null)?'grey-2':(socialHarvestAprContents.kpi4 >= '0' && socialHarvestAprContents.kpi4 <= '3.9')?'red':(socialHarvestAprContents.kpi4 > '3.9' && socialHarvestAprContents.kpi4 <= '5.2')?'orange':(socialHarvestAprContents.kpi4 > '5.2' && socialHarvestAprContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAprContents.kpi4 >= '6.5' && socialHarvestAprContents.kpi4 < '7.8')?'green':(socialHarvestAprContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi5 == null)?'grey-2':(socialHarvestAprContents.kpi5 >= '0' && socialHarvestAprContents.kpi5 <= '2.2227')?'red':(socialHarvestAprContents.kpi5 > '2.2227' && socialHarvestAprContents.kpi5 <= '2.9636')?'orange':(socialHarvestAprContents.kpi5 > '2.9636' && socialHarvestAprContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAprContents.kpi5 >= '3.7045' && socialHarvestAprContents.kpi5 < '4.4454')?'green':(socialHarvestAprContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMayContents.kpi1 == null)?'grey-2':(socialHarvestMayContents.kpi1 >= '0' && socialHarvestMayContents.kpi1 <= '3.75')?'red':(socialHarvestMayContents.kpi1 > '3.75' && socialHarvestMayContents.kpi1 <= '5')?'orange':(socialHarvestMayContents.kpi1 > '5' && socialHarvestMayContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMayContents.kpi1 >= '6.25' && socialHarvestMayContents.kpi1 < '7.5')?'green':(socialHarvestMayContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi2 == null)?'grey-2':(socialHarvestMayContents.kpi2 >= '0' && socialHarvestMayContents.kpi2 <= '60.6')?'red':(socialHarvestMayContents.kpi2 > '60.6' && socialHarvestMayContents.kpi2 <= '80.8')?'orange':(socialHarvestMayContents.kpi2 > '80.8' && socialHarvestMayContents.kpi2 < '101')?'yellow-7':(socialHarvestMayContents.kpi2 >= '101' && socialHarvestMayContents.kpi2 < '121.2')?'green':(socialHarvestMayContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi3 == null)?'grey-2':(socialHarvestMayContents.kpi3 >= '0' && socialHarvestMayContents.kpi3 <= '18.75')?'red':(socialHarvestMayContents.kpi3 > '18.75' && socialHarvestMayContents.kpi3 <= '25')?'orange':(socialHarvestMayContents.kpi3 > '25' && socialHarvestMayContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMayContents.kpi3 >= '31.25' && socialHarvestMayContents.kpi3 < '37.5')?'green':(socialHarvestMayContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi4 == null)?'grey-2':(socialHarvestMayContents.kpi4 >= '0' && socialHarvestMayContents.kpi4 <= '3.9')?'red':(socialHarvestMayContents.kpi4 > '3.9' && socialHarvestMayContents.kpi4 <= '5.2')?'orange':(socialHarvestMayContents.kpi4 > '5.2' && socialHarvestMayContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMayContents.kpi4 >= '6.5' && socialHarvestMayContents.kpi4 < '7.8')?'green':(socialHarvestMayContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi5 == null)?'grey-2':(socialHarvestMayContents.kpi5 >= '0' && socialHarvestMayContents.kpi5 <= '2.2227')?'red':(socialHarvestMayContents.kpi5 > '2.2227' && socialHarvestMayContents.kpi5 <= '2.9636')?'orange':(socialHarvestMayContents.kpi5 > '2.9636' && socialHarvestMayContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMayContents.kpi5 >= '3.7045' && socialHarvestMayContents.kpi5 < '4.4454')?'green':(socialHarvestMayContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJunContents.kpi1 == null)?'grey-2':(socialHarvestJunContents.kpi1 >= '0' && socialHarvestJunContents.kpi1 <= '3.75')?'red':(socialHarvestJunContents.kpi1 > '3.75' && socialHarvestJunContents.kpi1 <= '5')?'orange':(socialHarvestJunContents.kpi1 > '5' && socialHarvestJunContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJunContents.kpi1 >= '6.25' && socialHarvestJunContents.kpi1 < '7.5')?'green':(socialHarvestJunContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi2 == null)?'grey-2':(socialHarvestJunContents.kpi2 >= '0' && socialHarvestJunContents.kpi2 <= '60.6')?'red':(socialHarvestJunContents.kpi2 > '60.6' && socialHarvestJunContents.kpi2 <= '80.8')?'orange':(socialHarvestJunContents.kpi2 > '80.8' && socialHarvestJunContents.kpi2 < '101')?'yellow-7':(socialHarvestJunContents.kpi2 >= '101' && socialHarvestJunContents.kpi2 < '121.2')?'green':(socialHarvestJunContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi3 == null)?'grey-2':(socialHarvestJunContents.kpi3 >= '0' && socialHarvestJunContents.kpi3 <= '18.75')?'red':(socialHarvestJunContents.kpi3 > '18.75' && socialHarvestJunContents.kpi3 <= '25')?'orange':(socialHarvestJunContents.kpi3 > '25' && socialHarvestJunContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJunContents.kpi3 >= '31.25' && socialHarvestJunContents.kpi3 < '37.5')?'green':(socialHarvestJunContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi4 == null)?'grey-2':(socialHarvestJunContents.kpi4 >= '0' && socialHarvestJunContents.kpi4 <= '3.9')?'red':(socialHarvestJunContents.kpi4 > '3.9' && socialHarvestJunContents.kpi4 <= '5.2')?'orange':(socialHarvestJunContents.kpi4 > '5.2' && socialHarvestJunContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJunContents.kpi4 >= '6.5' && socialHarvestJunContents.kpi4 < '7.8')?'green':(socialHarvestJunContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi5 == null)?'grey-2':(socialHarvestJunContents.kpi5 >= '0' && socialHarvestJunContents.kpi5 <= '2.2227')?'red':(socialHarvestJunContents.kpi5 > '2.2227' && socialHarvestJunContents.kpi5 <= '2.9636')?'orange':(socialHarvestJunContents.kpi5 > '2.9636' && socialHarvestJunContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJunContents.kpi5 >= '3.7045' && socialHarvestJunContents.kpi5 < '4.4454')?'green':(socialHarvestJunContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJulContents.kpi1 == null)?'grey-2':(socialHarvestJulContents.kpi1 >= '0' && socialHarvestJulContents.kpi1 <= '3.75')?'red':(socialHarvestJulContents.kpi1 > '3.75' && socialHarvestJulContents.kpi1 <= '5')?'orange':(socialHarvestJulContents.kpi1 > '5' && socialHarvestJulContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJulContents.kpi1 >= '6.25' && socialHarvestJulContents.kpi1 < '7.5')?'green':(socialHarvestJulContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi2 == null)?'grey-2':(socialHarvestJulContents.kpi2 >= '0' && socialHarvestJulContents.kpi2 <= '60.6')?'red':(socialHarvestJulContents.kpi2 > '60.6' && socialHarvestJulContents.kpi2 <= '80.8')?'orange':(socialHarvestJulContents.kpi2 > '80.8' && socialHarvestJulContents.kpi2 < '101')?'yellow-7':(socialHarvestJulContents.kpi2 >= '101' && socialHarvestJulContents.kpi2 < '121.2')?'green':(socialHarvestJulContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi3 == null)?'grey-2':(socialHarvestJulContents.kpi3 >= '0' && socialHarvestJulContents.kpi3 <= '18.75')?'red':(socialHarvestJulContents.kpi3 > '18.75' && socialHarvestJulContents.kpi3 <= '25')?'orange':(socialHarvestJulContents.kpi3 > '25' && socialHarvestJulContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJulContents.kpi3 >= '31.25' && socialHarvestJulContents.kpi3 < '37.5')?'green':(socialHarvestJulContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi4 == null)?'grey-2':(socialHarvestJulContents.kpi4 >= '0' && socialHarvestJulContents.kpi4 <= '3.9')?'red':(socialHarvestJulContents.kpi4 > '3.9' && socialHarvestJulContents.kpi4 <= '5.2')?'orange':(socialHarvestJulContents.kpi4 > '5.2' && socialHarvestJulContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJulContents.kpi4 >= '6.5' && socialHarvestJulContents.kpi4 < '7.8')?'green':(socialHarvestJulContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi5 == null)?'grey-2':(socialHarvestJulContents.kpi5 >= '0' && socialHarvestJulContents.kpi5 <= '2.2227')?'red':(socialHarvestJulContents.kpi5 > '2.2227' && socialHarvestJulContents.kpi5 <= '2.9636')?'orange':(socialHarvestJulContents.kpi5 > '2.9636' && socialHarvestJulContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJulContents.kpi5 >= '3.7045' && socialHarvestJulContents.kpi5 < '4.4454')?'green':(socialHarvestJulContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAugContents.kpi1 == null)?'grey-2':(socialHarvestAugContents.kpi1 >= '0' && socialHarvestAugContents.kpi1 <= '3.75')?'red':(socialHarvestAugContents.kpi1 > '3.75' && socialHarvestAugContents.kpi1 <= '5')?'orange':(socialHarvestAugContents.kpi1 > '5' && socialHarvestAugContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAugContents.kpi1 >= '6.25' && socialHarvestAugContents.kpi1 < '7.5')?'green':(socialHarvestAugContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi2 == null)?'grey-2':(socialHarvestAugContents.kpi2 >= '0' && socialHarvestAugContents.kpi2 <= '60.6')?'red':(socialHarvestAugContents.kpi2 > '60.6' && socialHarvestAugContents.kpi2 <= '80.8')?'orange':(socialHarvestAugContents.kpi2 > '80.8' && socialHarvestAugContents.kpi2 < '101')?'yellow-7':(socialHarvestAugContents.kpi2 >= '101' && socialHarvestAugContents.kpi2 < '121.2')?'green':(socialHarvestAugContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi3 == null)?'grey-2':(socialHarvestAugContents.kpi3 >= '0' && socialHarvestAugContents.kpi3 <= '18.75')?'red':(socialHarvestAugContents.kpi3 > '18.75' && socialHarvestAugContents.kpi3 <= '25')?'orange':(socialHarvestAugContents.kpi3 > '25' && socialHarvestAugContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAugContents.kpi3 >= '31.25' && socialHarvestAugContents.kpi3 < '37.5')?'green':(socialHarvestAugContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi4 == null)?'grey-2':(socialHarvestAugContents.kpi4 >= '0' && socialHarvestAugContents.kpi4 <= '3.9')?'red':(socialHarvestAugContents.kpi4 > '3.9' && socialHarvestAugContents.kpi4 <= '5.2')?'orange':(socialHarvestAugContents.kpi4 > '5.2' && socialHarvestAugContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAugContents.kpi4 >= '6.5' && socialHarvestAugContents.kpi4 < '7.8')?'green':(socialHarvestAugContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi5 == null)?'grey-2':(socialHarvestAugContents.kpi5 >= '0' && socialHarvestAugContents.kpi5 <= '2.2227')?'red':(socialHarvestAugContents.kpi5 > '2.2227' && socialHarvestAugContents.kpi5 <= '2.9636')?'orange':(socialHarvestAugContents.kpi5 > '2.9636' && socialHarvestAugContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAugContents.kpi5 >= '3.7045' && socialHarvestAugContents.kpi5 < '4.4454')?'green':(socialHarvestAugContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestSepContents.kpi1 == null)?'grey-2':(socialHarvestSepContents.kpi1 >= '0' && socialHarvestSepContents.kpi1 <= '3.75')?'red':(socialHarvestSepContents.kpi1 > '3.75' && socialHarvestSepContents.kpi1 <= '5')?'orange':(socialHarvestSepContents.kpi1 > '5' && socialHarvestSepContents.kpi1 < '6.25')?'yellow-7':(socialHarvestSepContents.kpi1 >= '6.25' && socialHarvestSepContents.kpi1 < '7.5')?'green':(socialHarvestSepContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi2 == null)?'grey-2':(socialHarvestSepContents.kpi2 >= '0' && socialHarvestSepContents.kpi2 <= '60.6')?'red':(socialHarvestSepContents.kpi2 > '60.6' && socialHarvestSepContents.kpi2 <= '80.8')?'orange':(socialHarvestSepContents.kpi2 > '80.8' && socialHarvestSepContents.kpi2 < '101')?'yellow-7':(socialHarvestSepContents.kpi2 >= '101' && socialHarvestSepContents.kpi2 < '121.2')?'green':(socialHarvestSepContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi3 == null)?'grey-2':(socialHarvestSepContents.kpi3 >= '0' && socialHarvestSepContents.kpi3 <= '18.75')?'red':(socialHarvestSepContents.kpi3 > '18.75' && socialHarvestSepContents.kpi3 <= '25')?'orange':(socialHarvestSepContents.kpi3 > '25' && socialHarvestSepContents.kpi3 < '31.25')?'yellow-7':(socialHarvestSepContents.kpi3 >= '31.25' && socialHarvestSepContents.kpi3 < '37.5')?'green':(socialHarvestSepContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi4 == null)?'grey-2':(socialHarvestSepContents.kpi4 >= '0' && socialHarvestSepContents.kpi4 <= '3.9')?'red':(socialHarvestSepContents.kpi4 > '3.9' && socialHarvestSepContents.kpi4 <= '5.2')?'orange':(socialHarvestSepContents.kpi4 > '5.2' && socialHarvestSepContents.kpi4 < '6.5')?'yellow-7':(socialHarvestSepContents.kpi4 >= '6.5' && socialHarvestSepContents.kpi4 < '7.8')?'green':(socialHarvestSepContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi5 == null)?'grey-2':(socialHarvestSepContents.kpi5 >= '0' && socialHarvestSepContents.kpi5 <= '2.2227')?'red':(socialHarvestSepContents.kpi5 > '2.2227' && socialHarvestSepContents.kpi5 <= '2.9636')?'orange':(socialHarvestSepContents.kpi5 > '2.9636' && socialHarvestSepContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestSepContents.kpi5 >= '3.7045' && socialHarvestSepContents.kpi5 < '4.4454')?'green':(socialHarvestSepContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestOctContents.kpi1 == null)?'grey-2':(socialHarvestOctContents.kpi1 >= '0' && socialHarvestOctContents.kpi1 <= '3.75')?'red':(socialHarvestOctContents.kpi1 > '3.75' && socialHarvestOctContents.kpi1 <= '5')?'orange':(socialHarvestOctContents.kpi1 > '5' && socialHarvestOctContents.kpi1 < '6.25')?'yellow-7':(socialHarvestOctContents.kpi1 >= '6.25' && socialHarvestOctContents.kpi1 < '7.5')?'green':(socialHarvestOctContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi2 == null)?'grey-2':(socialHarvestOctContents.kpi2 >= '0' && socialHarvestOctContents.kpi2 <= '60.6')?'red':(socialHarvestOctContents.kpi2 > '60.6' && socialHarvestOctContents.kpi2 <= '80.8')?'orange':(socialHarvestOctContents.kpi2 > '80.8' && socialHarvestOctContents.kpi2 < '101')?'yellow-7':(socialHarvestOctContents.kpi2 >= '101' && socialHarvestOctContents.kpi2 < '121.2')?'green':(socialHarvestOctContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi3 == null)?'grey-2':(socialHarvestOctContents.kpi3 >= '0' && socialHarvestOctContents.kpi3 <= '18.75')?'red':(socialHarvestOctContents.kpi3 > '18.75' && socialHarvestOctContents.kpi3 <= '25')?'orange':(socialHarvestOctContents.kpi3 > '25' && socialHarvestOctContents.kpi3 < '31.25')?'yellow-7':(socialHarvestOctContents.kpi3 >= '31.25' && socialHarvestOctContents.kpi3 < '37.5')?'green':(socialHarvestOctContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi4 == null)?'grey-2':(socialHarvestOctContents.kpi4 >= '0' && socialHarvestOctContents.kpi4 <= '3.9')?'red':(socialHarvestOctContents.kpi4 > '3.9' && socialHarvestOctContents.kpi4 <= '5.2')?'orange':(socialHarvestOctContents.kpi4 > '5.2' && socialHarvestOctContents.kpi4 < '6.5')?'yellow-7':(socialHarvestOctContents.kpi4 >= '6.5' && socialHarvestOctContents.kpi4 < '7.8')?'green':(socialHarvestOctContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi5 == null)?'grey-2':(socialHarvestOctContents.kpi5 >= '0' && socialHarvestOctContents.kpi5 <= '2.2227')?'red':(socialHarvestOctContents.kpi5 > '2.2227' && socialHarvestOctContents.kpi5 <= '2.9636')?'orange':(socialHarvestOctContents.kpi5 > '2.9636' && socialHarvestOctContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestOctContents.kpi5 >= '3.7045' && socialHarvestOctContents.kpi5 < '4.4454')?'green':(socialHarvestOctContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestNovContents.kpi1 == null)?'grey-2':(socialHarvestNovContents.kpi1 >= '0' && socialHarvestNovContents.kpi1 <= '3.75')?'red':(socialHarvestNovContents.kpi1 > '3.75' && socialHarvestNovContents.kpi1 <= '5')?'orange':(socialHarvestNovContents.kpi1 > '5' && socialHarvestNovContents.kpi1 < '6.25')?'yellow-7':(socialHarvestNovContents.kpi1 >= '6.25' && socialHarvestNovContents.kpi1 < '7.5')?'green':(socialHarvestNovContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi2 == null)?'grey-2':(socialHarvestNovContents.kpi2 >= '0' && socialHarvestNovContents.kpi2 <= '60.6')?'red':(socialHarvestNovContents.kpi2 > '60.6' && socialHarvestNovContents.kpi2 <= '80.8')?'orange':(socialHarvestNovContents.kpi2 > '80.8' && socialHarvestNovContents.kpi2 < '101')?'yellow-7':(socialHarvestNovContents.kpi2 >= '101' && socialHarvestNovContents.kpi2 < '121.2')?'green':(socialHarvestNovContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi3 == null)?'grey-2':(socialHarvestNovContents.kpi3 >= '0' && socialHarvestNovContents.kpi3 <= '18.75')?'red':(socialHarvestNovContents.kpi3 > '18.75' && socialHarvestNovContents.kpi3 <= '25')?'orange':(socialHarvestNovContents.kpi3 > '25' && socialHarvestNovContents.kpi3 < '31.25')?'yellow-7':(socialHarvestNovContents.kpi3 >= '31.25' && socialHarvestNovContents.kpi3 < '37.5')?'green':(socialHarvestNovContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi4 == null)?'grey-2':(socialHarvestNovContents.kpi4 >= '0' && socialHarvestNovContents.kpi4 <= '3.9')?'red':(socialHarvestNovContents.kpi4 > '3.9' && socialHarvestNovContents.kpi4 <= '5.2')?'orange':(socialHarvestNovContents.kpi4 > '5.2' && socialHarvestNovContents.kpi4 < '6.5')?'yellow-7':(socialHarvestNovContents.kpi4 >= '6.5' && socialHarvestNovContents.kpi4 < '7.8')?'green':(socialHarvestNovContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi5 == null)?'grey-2':(socialHarvestNovContents.kpi5 >= '0' && socialHarvestNovContents.kpi5 <= '2.2227')?'red':(socialHarvestNovContents.kpi5 > '2.2227' && socialHarvestNovContents.kpi5 <= '2.9636')?'orange':(socialHarvestNovContents.kpi5 > '2.9636' && socialHarvestNovContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestNovContents.kpi5 >= '3.7045' && socialHarvestNovContents.kpi5 < '4.4454')?'green':(socialHarvestNovContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestDecContents.kpi1 == null)?'grey-2':(socialHarvestDecContents.kpi1 >= '0' && socialHarvestDecContents.kpi1 <= '3.75')?'red':(socialHarvestDecContents.kpi1 > '3.75' && socialHarvestDecContents.kpi1 <= '5')?'orange':(socialHarvestDecContents.kpi1 > '5' && socialHarvestDecContents.kpi1 < '6.25')?'yellow-7':(socialHarvestDecContents.kpi1 >= '6.25' && socialHarvestDecContents.kpi1 < '7.5')?'green':(socialHarvestDecContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi2 == null)?'grey-2':(socialHarvestDecContents.kpi2 >= '0' && socialHarvestDecContents.kpi2 <= '60.6')?'red':(socialHarvestDecContents.kpi2 > '60.6' && socialHarvestDecContents.kpi2 <= '80.8')?'orange':(socialHarvestDecContents.kpi2 > '80.8' && socialHarvestDecContents.kpi2 < '101')?'yellow-7':(socialHarvestDecContents.kpi2 >= '101' && socialHarvestDecContents.kpi2 < '121.2')?'green':(socialHarvestDecContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi3 == null)?'grey-2':(socialHarvestDecContents.kpi3 >= '0' && socialHarvestDecContents.kpi3 <= '18.75')?'red':(socialHarvestDecContents.kpi3 > '18.75' && socialHarvestDecContents.kpi3 <= '25')?'orange':(socialHarvestDecContents.kpi3 > '25' && socialHarvestDecContents.kpi3 < '31.25')?'yellow-7':(socialHarvestDecContents.kpi3 >= '31.25' && socialHarvestDecContents.kpi3 < '37.5')?'green':(socialHarvestDecContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi4 == null)?'grey-2':(socialHarvestDecContents.kpi4 >= '0' && socialHarvestDecContents.kpi4 <= '3.9')?'red':(socialHarvestDecContents.kpi4 > '3.9' && socialHarvestDecContents.kpi4 <= '5.2')?'orange':(socialHarvestDecContents.kpi4 > '5.2' && socialHarvestDecContents.kpi4 < '6.5')?'yellow-7':(socialHarvestDecContents.kpi4 >= '6.5' && socialHarvestDecContents.kpi4 < '7.8')?'green':(socialHarvestDecContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi5 == null)?'grey-2':(socialHarvestDecContents.kpi5 >= '0' && socialHarvestDecContents.kpi5 <= '2.2227')?'red':(socialHarvestDecContents.kpi5 > '2.2227' && socialHarvestDecContents.kpi5 <= '2.9636')?'orange':(socialHarvestDecContents.kpi5 > '2.9636' && socialHarvestDecContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestDecContents.kpi5 >= '3.7045' && socialHarvestDecContents.kpi5 < '4.4454')?'green':(socialHarvestDecContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                                <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJanContents.kpi1 == null)?'grey-2':(socialHarvestJanContents.kpi1 >= '0' && socialHarvestJanContents.kpi1 <= '3.75')?'red':(socialHarvestJanContents.kpi1 > '3.75' && socialHarvestJanContents.kpi1 <= '5')?'orange':(socialHarvestJanContents.kpi1 > '5' && socialHarvestJanContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJanContents.kpi1 >= '6.25' && socialHarvestJanContents.kpi1 < '7.5')?'green':(socialHarvestJanContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi2 == null)?'grey-2':(socialHarvestJanContents.kpi2 >= '0' && socialHarvestJanContents.kpi2 <= '60.6')?'red':(socialHarvestJanContents.kpi2 > '60.6' && socialHarvestJanContents.kpi2 <= '80.8')?'orange':(socialHarvestJanContents.kpi2 > '80.8' && socialHarvestJanContents.kpi2 < '101')?'yellow-7':(socialHarvestJanContents.kpi2 >= '101' && socialHarvestJanContents.kpi2 < '121.2')?'green':(socialHarvestJanContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi3 == null)?'grey-2':(socialHarvestJanContents.kpi3 >= '0' && socialHarvestJanContents.kpi3 <= '18.75')?'red':(socialHarvestJanContents.kpi3 > '18.75' && socialHarvestJanContents.kpi3 <= '25')?'orange':(socialHarvestJanContents.kpi3 > '25' && socialHarvestJanContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJanContents.kpi3 >= '31.25' && socialHarvestJanContents.kpi3 < '37.5')?'green':(socialHarvestJanContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi4 == null)?'grey-2':(socialHarvestJanContents.kpi4 >= '0' && socialHarvestJanContents.kpi4 <= '3.9')?'red':(socialHarvestJanContents.kpi4 > '3.9' && socialHarvestJanContents.kpi4 <= '5.2')?'orange':(socialHarvestJanContents.kpi4 > '5.2' && socialHarvestJanContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJanContents.kpi4 >= '6.5' && socialHarvestJanContents.kpi4 < '7.8')?'green':(socialHarvestJanContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi5 == null)?'grey-2':(socialHarvestJanContents.kpi5 >= '0' && socialHarvestJanContents.kpi5 <= '2.2227')?'red':(socialHarvestJanContents.kpi5 > '2.2227' && socialHarvestJanContents.kpi5 <= '2.9636')?'orange':(socialHarvestJanContents.kpi5 > '2.9636' && socialHarvestJanContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJanContents.kpi5 >= '3.7045' && socialHarvestJanContents.kpi5 < '4.4454')?'green':(socialHarvestJanContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestFebContents.kpi1 == null)?'grey-2':(socialHarvestFebContents.kpi1 >= '0' && socialHarvestFebContents.kpi1 <= '3.75')?'red':(socialHarvestFebContents.kpi1 > '3.75' && socialHarvestFebContents.kpi1 <= '5')?'orange':(socialHarvestFebContents.kpi1 > '5' && socialHarvestFebContents.kpi1 < '6.25')?'yellow-7':(socialHarvestFebContents.kpi1 >= '6.25' && socialHarvestFebContents.kpi1 < '7.5')?'green':(socialHarvestFebContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi2 == null)?'grey-2':(socialHarvestFebContents.kpi2 >= '0' && socialHarvestFebContents.kpi2 <= '60.6')?'red':(socialHarvestFebContents.kpi2 > '60.6' && socialHarvestFebContents.kpi2 <= '80.8')?'orange':(socialHarvestFebContents.kpi2 > '80.8' && socialHarvestFebContents.kpi2 < '101')?'yellow-7':(socialHarvestFebContents.kpi2 >= '101' && socialHarvestFebContents.kpi2 < '121.2')?'green':(socialHarvestFebContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi3 == null)?'grey-2':(socialHarvestFebContents.kpi3 >= '0' && socialHarvestFebContents.kpi3 <= '18.75')?'red':(socialHarvestFebContents.kpi3 > '18.75' && socialHarvestFebContents.kpi3 <= '25')?'orange':(socialHarvestFebContents.kpi3 > '25' && socialHarvestFebContents.kpi3 < '31.25')?'yellow-7':(socialHarvestFebContents.kpi3 >= '31.25' && socialHarvestFebContents.kpi3 < '37.5')?'green':(socialHarvestFebContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi4 == null)?'grey-2':(socialHarvestFebContents.kpi4 >= '0' && socialHarvestFebContents.kpi4 <= '3.9')?'red':(socialHarvestFebContents.kpi4 > '3.9' && socialHarvestFebContents.kpi4 <= '5.2')?'orange':(socialHarvestFebContents.kpi4 > '5.2' && socialHarvestFebContents.kpi4 < '6.5')?'yellow-7':(socialHarvestFebContents.kpi4 >= '6.5' && socialHarvestFebContents.kpi4 < '7.8')?'green':(socialHarvestFebContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi5 == null)?'grey-2':(socialHarvestFebContents.kpi5 >= '0' && socialHarvestFebContents.kpi5 <= '2.2227')?'red':(socialHarvestFebContents.kpi5 > '2.2227' && socialHarvestFebContents.kpi5 <= '2.9636')?'orange':(socialHarvestFebContents.kpi5 > '2.9636' && socialHarvestFebContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestFebContents.kpi5 >= '3.7045' && socialHarvestFebContents.kpi5 < '4.4454')?'green':(socialHarvestFebContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMarContents.kpi1 == null)?'grey-2':(socialHarvestMarContents.kpi1 >= '0' && socialHarvestMarContents.kpi1 <= '3.75')?'red':(socialHarvestMarContents.kpi1 > '3.75' && socialHarvestMarContents.kpi1 <= '5')?'orange':(socialHarvestMarContents.kpi1 > '5' && socialHarvestMarContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMarContents.kpi1 >= '6.25' && socialHarvestMarContents.kpi1 < '7.5')?'green':(socialHarvestMarContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi2 == null)?'grey-2':(socialHarvestMarContents.kpi2 >= '0' && socialHarvestMarContents.kpi2 <= '60.6')?'red':(socialHarvestMarContents.kpi2 > '60.6' && socialHarvestMarContents.kpi2 <= '80.8')?'orange':(socialHarvestMarContents.kpi2 > '80.8' && socialHarvestMarContents.kpi2 < '101')?'yellow-7':(socialHarvestMarContents.kpi2 >= '101' && socialHarvestMarContents.kpi2 < '121.2')?'green':(socialHarvestMarContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi3 == null)?'grey-2':(socialHarvestMarContents.kpi3 >= '0' && socialHarvestMarContents.kpi3 <= '18.75')?'red':(socialHarvestMarContents.kpi3 > '18.75' && socialHarvestMarContents.kpi3 <= '25')?'orange':(socialHarvestMarContents.kpi3 > '25' && socialHarvestMarContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMarContents.kpi3 >= '31.25' && socialHarvestMarContents.kpi3 < '37.5')?'green':(socialHarvestMarContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi4 == null)?'grey-2':(socialHarvestMarContents.kpi4 >= '0' && socialHarvestMarContents.kpi4 <= '3.9')?'red':(socialHarvestMarContents.kpi4 > '3.9' && socialHarvestMarContents.kpi4 <= '5.2')?'orange':(socialHarvestMarContents.kpi4 > '5.2' && socialHarvestMarContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMarContents.kpi4 >= '6.5' && socialHarvestMarContents.kpi4 < '7.8')?'green':(socialHarvestMarContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi5 == null)?'grey-2':(socialHarvestMarContents.kpi5 >= '0' && socialHarvestMarContents.kpi5 <= '2.2227')?'red':(socialHarvestMarContents.kpi5 > '2.2227' && socialHarvestMarContents.kpi5 <= '2.9636')?'orange':(socialHarvestMarContents.kpi5 > '2.9636' && socialHarvestMarContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMarContents.kpi5 >= '3.7045' && socialHarvestMarContents.kpi5 < '4.4454')?'green':(socialHarvestMarContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAprContents.kpi1 == null)?'grey-2':(socialHarvestAprContents.kpi1 >= '0' && socialHarvestAprContents.kpi1 <= '3.75')?'red':(socialHarvestAprContents.kpi1 > '3.75' && socialHarvestAprContents.kpi1 <= '5')?'orange':(socialHarvestAprContents.kpi1 > '5' && socialHarvestAprContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAprContents.kpi1 >= '6.25' && socialHarvestAprContents.kpi1 < '7.5')?'green':(socialHarvestAprContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi2 == null)?'grey-2':(socialHarvestAprContents.kpi2 >= '0' && socialHarvestAprContents.kpi2 <= '60.6')?'red':(socialHarvestAprContents.kpi2 > '60.6' && socialHarvestAprContents.kpi2 <= '80.8')?'orange':(socialHarvestAprContents.kpi2 > '80.8' && socialHarvestAprContents.kpi2 < '101')?'yellow-7':(socialHarvestAprContents.kpi2 >= '101' && socialHarvestAprContents.kpi2 < '121.2')?'green':(socialHarvestAprContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi3 == null)?'grey-2':(socialHarvestAprContents.kpi3 >= '0' && socialHarvestAprContents.kpi3 <= '18.75')?'red':(socialHarvestAprContents.kpi3 > '18.75' && socialHarvestAprContents.kpi3 <= '25')?'orange':(socialHarvestAprContents.kpi3 > '25' && socialHarvestAprContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAprContents.kpi3 >= '31.25' && socialHarvestAprContents.kpi3 < '37.5')?'green':(socialHarvestAprContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi4 == null)?'grey-2':(socialHarvestAprContents.kpi4 >= '0' && socialHarvestAprContents.kpi4 <= '3.9')?'red':(socialHarvestAprContents.kpi4 > '3.9' && socialHarvestAprContents.kpi4 <= '5.2')?'orange':(socialHarvestAprContents.kpi4 > '5.2' && socialHarvestAprContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAprContents.kpi4 >= '6.5' && socialHarvestAprContents.kpi4 < '7.8')?'green':(socialHarvestAprContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi5 == null)?'grey-2':(socialHarvestAprContents.kpi5 >= '0' && socialHarvestAprContents.kpi5 <= '2.2227')?'red':(socialHarvestAprContents.kpi5 > '2.2227' && socialHarvestAprContents.kpi5 <= '2.9636')?'orange':(socialHarvestAprContents.kpi5 > '2.9636' && socialHarvestAprContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAprContents.kpi5 >= '3.7045' && socialHarvestAprContents.kpi5 < '4.4454')?'green':(socialHarvestAprContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMayContents.kpi1 == null)?'grey-2':(socialHarvestMayContents.kpi1 >= '0' && socialHarvestMayContents.kpi1 <= '3.75')?'red':(socialHarvestMayContents.kpi1 > '3.75' && socialHarvestMayContents.kpi1 <= '5')?'orange':(socialHarvestMayContents.kpi1 > '5' && socialHarvestMayContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMayContents.kpi1 >= '6.25' && socialHarvestMayContents.kpi1 < '7.5')?'green':(socialHarvestMayContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi2 == null)?'grey-2':(socialHarvestMayContents.kpi2 >= '0' && socialHarvestMayContents.kpi2 <= '60.6')?'red':(socialHarvestMayContents.kpi2 > '60.6' && socialHarvestMayContents.kpi2 <= '80.8')?'orange':(socialHarvestMayContents.kpi2 > '80.8' && socialHarvestMayContents.kpi2 < '101')?'yellow-7':(socialHarvestMayContents.kpi2 >= '101' && socialHarvestMayContents.kpi2 < '121.2')?'green':(socialHarvestMayContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi3 == null)?'grey-2':(socialHarvestMayContents.kpi3 >= '0' && socialHarvestMayContents.kpi3 <= '18.75')?'red':(socialHarvestMayContents.kpi3 > '18.75' && socialHarvestMayContents.kpi3 <= '25')?'orange':(socialHarvestMayContents.kpi3 > '25' && socialHarvestMayContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMayContents.kpi3 >= '31.25' && socialHarvestMayContents.kpi3 < '37.5')?'green':(socialHarvestMayContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi4 == null)?'grey-2':(socialHarvestMayContents.kpi4 >= '0' && socialHarvestMayContents.kpi4 <= '3.9')?'red':(socialHarvestMayContents.kpi4 > '3.9' && socialHarvestMayContents.kpi4 <= '5.2')?'orange':(socialHarvestMayContents.kpi4 > '5.2' && socialHarvestMayContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMayContents.kpi4 >= '6.5' && socialHarvestMayContents.kpi4 < '7.8')?'green':(socialHarvestMayContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi5 == null)?'grey-2':(socialHarvestMayContents.kpi5 >= '0' && socialHarvestMayContents.kpi5 <= '2.2227')?'red':(socialHarvestMayContents.kpi5 > '2.2227' && socialHarvestMayContents.kpi5 <= '2.9636')?'orange':(socialHarvestMayContents.kpi5 > '2.9636' && socialHarvestMayContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMayContents.kpi5 >= '3.7045' && socialHarvestMayContents.kpi5 < '4.4454')?'green':(socialHarvestMayContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJunContents.kpi1 == null)?'grey-2':(socialHarvestJunContents.kpi1 >= '0' && socialHarvestJunContents.kpi1 <= '3.75')?'red':(socialHarvestJunContents.kpi1 > '3.75' && socialHarvestJunContents.kpi1 <= '5')?'orange':(socialHarvestJunContents.kpi1 > '5' && socialHarvestJunContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJunContents.kpi1 >= '6.25' && socialHarvestJunContents.kpi1 < '7.5')?'green':(socialHarvestJunContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi2 == null)?'grey-2':(socialHarvestJunContents.kpi2 >= '0' && socialHarvestJunContents.kpi2 <= '60.6')?'red':(socialHarvestJunContents.kpi2 > '60.6' && socialHarvestJunContents.kpi2 <= '80.8')?'orange':(socialHarvestJunContents.kpi2 > '80.8' && socialHarvestJunContents.kpi2 < '101')?'yellow-7':(socialHarvestJunContents.kpi2 >= '101' && socialHarvestJunContents.kpi2 < '121.2')?'green':(socialHarvestJunContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi3 == null)?'grey-2':(socialHarvestJunContents.kpi3 >= '0' && socialHarvestJunContents.kpi3 <= '18.75')?'red':(socialHarvestJunContents.kpi3 > '18.75' && socialHarvestJunContents.kpi3 <= '25')?'orange':(socialHarvestJunContents.kpi3 > '25' && socialHarvestJunContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJunContents.kpi3 >= '31.25' && socialHarvestJunContents.kpi3 < '37.5')?'green':(socialHarvestJunContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi4 == null)?'grey-2':(socialHarvestJunContents.kpi4 >= '0' && socialHarvestJunContents.kpi4 <= '3.9')?'red':(socialHarvestJunContents.kpi4 > '3.9' && socialHarvestJunContents.kpi4 <= '5.2')?'orange':(socialHarvestJunContents.kpi4 > '5.2' && socialHarvestJunContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJunContents.kpi4 >= '6.5' && socialHarvestJunContents.kpi4 < '7.8')?'green':(socialHarvestJunContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi5 == null)?'grey-2':(socialHarvestJunContents.kpi5 >= '0' && socialHarvestJunContents.kpi5 <= '2.2227')?'red':(socialHarvestJunContents.kpi5 > '2.2227' && socialHarvestJunContents.kpi5 <= '2.9636')?'orange':(socialHarvestJunContents.kpi5 > '2.9636' && socialHarvestJunContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJunContents.kpi5 >= '3.7045' && socialHarvestJunContents.kpi5 < '4.4454')?'green':(socialHarvestJunContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJulContents.kpi1 == null)?'grey-2':(socialHarvestJulContents.kpi1 >= '0' && socialHarvestJulContents.kpi1 <= '3.75')?'red':(socialHarvestJulContents.kpi1 > '3.75' && socialHarvestJulContents.kpi1 <= '5')?'orange':(socialHarvestJulContents.kpi1 > '5' && socialHarvestJulContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJulContents.kpi1 >= '6.25' && socialHarvestJulContents.kpi1 < '7.5')?'green':(socialHarvestJulContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi2 == null)?'grey-2':(socialHarvestJulContents.kpi2 >= '0' && socialHarvestJulContents.kpi2 <= '60.6')?'red':(socialHarvestJulContents.kpi2 > '60.6' && socialHarvestJulContents.kpi2 <= '80.8')?'orange':(socialHarvestJulContents.kpi2 > '80.8' && socialHarvestJulContents.kpi2 < '101')?'yellow-7':(socialHarvestJulContents.kpi2 >= '101' && socialHarvestJulContents.kpi2 < '121.2')?'green':(socialHarvestJulContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi3 == null)?'grey-2':(socialHarvestJulContents.kpi3 >= '0' && socialHarvestJulContents.kpi3 <= '18.75')?'red':(socialHarvestJulContents.kpi3 > '18.75' && socialHarvestJulContents.kpi3 <= '25')?'orange':(socialHarvestJulContents.kpi3 > '25' && socialHarvestJulContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJulContents.kpi3 >= '31.25' && socialHarvestJulContents.kpi3 < '37.5')?'green':(socialHarvestJulContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi4 == null)?'grey-2':(socialHarvestJulContents.kpi4 >= '0' && socialHarvestJulContents.kpi4 <= '3.9')?'red':(socialHarvestJulContents.kpi4 > '3.9' && socialHarvestJulContents.kpi4 <= '5.2')?'orange':(socialHarvestJulContents.kpi4 > '5.2' && socialHarvestJulContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJulContents.kpi4 >= '6.5' && socialHarvestJulContents.kpi4 < '7.8')?'green':(socialHarvestJulContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi5 == null)?'grey-2':(socialHarvestJulContents.kpi5 >= '0' && socialHarvestJulContents.kpi5 <= '2.2227')?'red':(socialHarvestJulContents.kpi5 > '2.2227' && socialHarvestJulContents.kpi5 <= '2.9636')?'orange':(socialHarvestJulContents.kpi5 > '2.9636' && socialHarvestJulContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJulContents.kpi5 >= '3.7045' && socialHarvestJulContents.kpi5 < '4.4454')?'green':(socialHarvestJulContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAugContents.kpi1 == null)?'grey-2':(socialHarvestAugContents.kpi1 >= '0' && socialHarvestAugContents.kpi1 <= '3.75')?'red':(socialHarvestAugContents.kpi1 > '3.75' && socialHarvestAugContents.kpi1 <= '5')?'orange':(socialHarvestAugContents.kpi1 > '5' && socialHarvestAugContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAugContents.kpi1 >= '6.25' && socialHarvestAugContents.kpi1 < '7.5')?'green':(socialHarvestAugContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi2 == null)?'grey-2':(socialHarvestAugContents.kpi2 >= '0' && socialHarvestAugContents.kpi2 <= '60.6')?'red':(socialHarvestAugContents.kpi2 > '60.6' && socialHarvestAugContents.kpi2 <= '80.8')?'orange':(socialHarvestAugContents.kpi2 > '80.8' && socialHarvestAugContents.kpi2 < '101')?'yellow-7':(socialHarvestAugContents.kpi2 >= '101' && socialHarvestAugContents.kpi2 < '121.2')?'green':(socialHarvestAugContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi3 == null)?'grey-2':(socialHarvestAugContents.kpi3 >= '0' && socialHarvestAugContents.kpi3 <= '18.75')?'red':(socialHarvestAugContents.kpi3 > '18.75' && socialHarvestAugContents.kpi3 <= '25')?'orange':(socialHarvestAugContents.kpi3 > '25' && socialHarvestAugContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAugContents.kpi3 >= '31.25' && socialHarvestAugContents.kpi3 < '37.5')?'green':(socialHarvestAugContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi4 == null)?'grey-2':(socialHarvestAugContents.kpi4 >= '0' && socialHarvestAugContents.kpi4 <= '3.9')?'red':(socialHarvestAugContents.kpi4 > '3.9' && socialHarvestAugContents.kpi4 <= '5.2')?'orange':(socialHarvestAugContents.kpi4 > '5.2' && socialHarvestAugContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAugContents.kpi4 >= '6.5' && socialHarvestAugContents.kpi4 < '7.8')?'green':(socialHarvestAugContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi5 == null)?'grey-2':(socialHarvestAugContents.kpi5 >= '0' && socialHarvestAugContents.kpi5 <= '2.2227')?'red':(socialHarvestAugContents.kpi5 > '2.2227' && socialHarvestAugContents.kpi5 <= '2.9636')?'orange':(socialHarvestAugContents.kpi5 > '2.9636' && socialHarvestAugContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAugContents.kpi5 >= '3.7045' && socialHarvestAugContents.kpi5 < '4.4454')?'green':(socialHarvestAugContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestSepContents.kpi1 == null)?'grey-2':(socialHarvestSepContents.kpi1 >= '0' && socialHarvestSepContents.kpi1 <= '3.75')?'red':(socialHarvestSepContents.kpi1 > '3.75' && socialHarvestSepContents.kpi1 <= '5')?'orange':(socialHarvestSepContents.kpi1 > '5' && socialHarvestSepContents.kpi1 < '6.25')?'yellow-7':(socialHarvestSepContents.kpi1 >= '6.25' && socialHarvestSepContents.kpi1 < '7.5')?'green':(socialHarvestSepContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi2 == null)?'grey-2':(socialHarvestSepContents.kpi2 >= '0' && socialHarvestSepContents.kpi2 <= '60.6')?'red':(socialHarvestSepContents.kpi2 > '60.6' && socialHarvestSepContents.kpi2 <= '80.8')?'orange':(socialHarvestSepContents.kpi2 > '80.8' && socialHarvestSepContents.kpi2 < '101')?'yellow-7':(socialHarvestSepContents.kpi2 >= '101' && socialHarvestSepContents.kpi2 < '121.2')?'green':(socialHarvestSepContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi3 == null)?'grey-2':(socialHarvestSepContents.kpi3 >= '0' && socialHarvestSepContents.kpi3 <= '18.75')?'red':(socialHarvestSepContents.kpi3 > '18.75' && socialHarvestSepContents.kpi3 <= '25')?'orange':(socialHarvestSepContents.kpi3 > '25' && socialHarvestSepContents.kpi3 < '31.25')?'yellow-7':(socialHarvestSepContents.kpi3 >= '31.25' && socialHarvestSepContents.kpi3 < '37.5')?'green':(socialHarvestSepContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi4 == null)?'grey-2':(socialHarvestSepContents.kpi4 >= '0' && socialHarvestSepContents.kpi4 <= '3.9')?'red':(socialHarvestSepContents.kpi4 > '3.9' && socialHarvestSepContents.kpi4 <= '5.2')?'orange':(socialHarvestSepContents.kpi4 > '5.2' && socialHarvestSepContents.kpi4 < '6.5')?'yellow-7':(socialHarvestSepContents.kpi4 >= '6.5' && socialHarvestSepContents.kpi4 < '7.8')?'green':(socialHarvestSepContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi5 == null)?'grey-2':(socialHarvestSepContents.kpi5 >= '0' && socialHarvestSepContents.kpi5 <= '2.2227')?'red':(socialHarvestSepContents.kpi5 > '2.2227' && socialHarvestSepContents.kpi5 <= '2.9636')?'orange':(socialHarvestSepContents.kpi5 > '2.9636' && socialHarvestSepContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestSepContents.kpi5 >= '3.7045' && socialHarvestSepContents.kpi5 < '4.4454')?'green':(socialHarvestSepContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestOctContents.kpi1 == null)?'grey-2':(socialHarvestOctContents.kpi1 >= '0' && socialHarvestOctContents.kpi1 <= '3.75')?'red':(socialHarvestOctContents.kpi1 > '3.75' && socialHarvestOctContents.kpi1 <= '5')?'orange':(socialHarvestOctContents.kpi1 > '5' && socialHarvestOctContents.kpi1 < '6.25')?'yellow-7':(socialHarvestOctContents.kpi1 >= '6.25' && socialHarvestOctContents.kpi1 < '7.5')?'green':(socialHarvestOctContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi2 == null)?'grey-2':(socialHarvestOctContents.kpi2 >= '0' && socialHarvestOctContents.kpi2 <= '60.6')?'red':(socialHarvestOctContents.kpi2 > '60.6' && socialHarvestOctContents.kpi2 <= '80.8')?'orange':(socialHarvestOctContents.kpi2 > '80.8' && socialHarvestOctContents.kpi2 < '101')?'yellow-7':(socialHarvestOctContents.kpi2 >= '101' && socialHarvestOctContents.kpi2 < '121.2')?'green':(socialHarvestOctContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi3 == null)?'grey-2':(socialHarvestOctContents.kpi3 >= '0' && socialHarvestOctContents.kpi3 <= '18.75')?'red':(socialHarvestOctContents.kpi3 > '18.75' && socialHarvestOctContents.kpi3 <= '25')?'orange':(socialHarvestOctContents.kpi3 > '25' && socialHarvestOctContents.kpi3 < '31.25')?'yellow-7':(socialHarvestOctContents.kpi3 >= '31.25' && socialHarvestOctContents.kpi3 < '37.5')?'green':(socialHarvestOctContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi4 == null)?'grey-2':(socialHarvestOctContents.kpi4 >= '0' && socialHarvestOctContents.kpi4 <= '3.9')?'red':(socialHarvestOctContents.kpi4 > '3.9' && socialHarvestOctContents.kpi4 <= '5.2')?'orange':(socialHarvestOctContents.kpi4 > '5.2' && socialHarvestOctContents.kpi4 < '6.5')?'yellow-7':(socialHarvestOctContents.kpi4 >= '6.5' && socialHarvestOctContents.kpi4 < '7.8')?'green':(socialHarvestOctContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi5 == null)?'grey-2':(socialHarvestOctContents.kpi5 >= '0' && socialHarvestOctContents.kpi5 <= '2.2227')?'red':(socialHarvestOctContents.kpi5 > '2.2227' && socialHarvestOctContents.kpi5 <= '2.9636')?'orange':(socialHarvestOctContents.kpi5 > '2.9636' && socialHarvestOctContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestOctContents.kpi5 >= '3.7045' && socialHarvestOctContents.kpi5 < '4.4454')?'green':(socialHarvestOctContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestNovContents.kpi1 == null)?'grey-2':(socialHarvestNovContents.kpi1 >= '0' && socialHarvestNovContents.kpi1 <= '3.75')?'red':(socialHarvestNovContents.kpi1 > '3.75' && socialHarvestNovContents.kpi1 <= '5')?'orange':(socialHarvestNovContents.kpi1 > '5' && socialHarvestNovContents.kpi1 < '6.25')?'yellow-7':(socialHarvestNovContents.kpi1 >= '6.25' && socialHarvestNovContents.kpi1 < '7.5')?'green':(socialHarvestNovContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi2 == null)?'grey-2':(socialHarvestNovContents.kpi2 >= '0' && socialHarvestNovContents.kpi2 <= '60.6')?'red':(socialHarvestNovContents.kpi2 > '60.6' && socialHarvestNovContents.kpi2 <= '80.8')?'orange':(socialHarvestNovContents.kpi2 > '80.8' && socialHarvestNovContents.kpi2 < '101')?'yellow-7':(socialHarvestNovContents.kpi2 >= '101' && socialHarvestNovContents.kpi2 < '121.2')?'green':(socialHarvestNovContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi3 == null)?'grey-2':(socialHarvestNovContents.kpi3 >= '0' && socialHarvestNovContents.kpi3 <= '18.75')?'red':(socialHarvestNovContents.kpi3 > '18.75' && socialHarvestNovContents.kpi3 <= '25')?'orange':(socialHarvestNovContents.kpi3 > '25' && socialHarvestNovContents.kpi3 < '31.25')?'yellow-7':(socialHarvestNovContents.kpi3 >= '31.25' && socialHarvestNovContents.kpi3 < '37.5')?'green':(socialHarvestNovContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi4 == null)?'grey-2':(socialHarvestNovContents.kpi4 >= '0' && socialHarvestNovContents.kpi4 <= '3.9')?'red':(socialHarvestNovContents.kpi4 > '3.9' && socialHarvestNovContents.kpi4 <= '5.2')?'orange':(socialHarvestNovContents.kpi4 > '5.2' && socialHarvestNovContents.kpi4 < '6.5')?'yellow-7':(socialHarvestNovContents.kpi4 >= '6.5' && socialHarvestNovContents.kpi4 < '7.8')?'green':(socialHarvestNovContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi5 == null)?'grey-2':(socialHarvestNovContents.kpi5 >= '0' && socialHarvestNovContents.kpi5 <= '2.2227')?'red':(socialHarvestNovContents.kpi5 > '2.2227' && socialHarvestNovContents.kpi5 <= '2.9636')?'orange':(socialHarvestNovContents.kpi5 > '2.9636' && socialHarvestNovContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestNovContents.kpi5 >= '3.7045' && socialHarvestNovContents.kpi5 < '4.4454')?'green':(socialHarvestNovContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestDecContents.kpi1 == null)?'grey-2':(socialHarvestDecContents.kpi1 >= '0' && socialHarvestDecContents.kpi1 <= '3.75')?'red':(socialHarvestDecContents.kpi1 > '3.75' && socialHarvestDecContents.kpi1 <= '5')?'orange':(socialHarvestDecContents.kpi1 > '5' && socialHarvestDecContents.kpi1 < '6.25')?'yellow-7':(socialHarvestDecContents.kpi1 >= '6.25' && socialHarvestDecContents.kpi1 < '7.5')?'green':(socialHarvestDecContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi2 == null)?'grey-2':(socialHarvestDecContents.kpi2 >= '0' && socialHarvestDecContents.kpi2 <= '60.6')?'red':(socialHarvestDecContents.kpi2 > '60.6' && socialHarvestDecContents.kpi2 <= '80.8')?'orange':(socialHarvestDecContents.kpi2 > '80.8' && socialHarvestDecContents.kpi2 < '101')?'yellow-7':(socialHarvestDecContents.kpi2 >= '101' && socialHarvestDecContents.kpi2 < '121.2')?'green':(socialHarvestDecContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi3 == null)?'grey-2':(socialHarvestDecContents.kpi3 >= '0' && socialHarvestDecContents.kpi3 <= '18.75')?'red':(socialHarvestDecContents.kpi3 > '18.75' && socialHarvestDecContents.kpi3 <= '25')?'orange':(socialHarvestDecContents.kpi3 > '25' && socialHarvestDecContents.kpi3 < '31.25')?'yellow-7':(socialHarvestDecContents.kpi3 >= '31.25' && socialHarvestDecContents.kpi3 < '37.5')?'green':(socialHarvestDecContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi4 == null)?'grey-2':(socialHarvestDecContents.kpi4 >= '0' && socialHarvestDecContents.kpi4 <= '3.9')?'red':(socialHarvestDecContents.kpi4 > '3.9' && socialHarvestDecContents.kpi4 <= '5.2')?'orange':(socialHarvestDecContents.kpi4 > '5.2' && socialHarvestDecContents.kpi4 < '6.5')?'yellow-7':(socialHarvestDecContents.kpi4 >= '6.5' && socialHarvestDecContents.kpi4 < '7.8')?'green':(socialHarvestDecContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi5 == null)?'grey-2':(socialHarvestDecContents.kpi5 >= '0' && socialHarvestDecContents.kpi5 <= '2.2227')?'red':(socialHarvestDecContents.kpi5 > '2.2227' && socialHarvestDecContents.kpi5 <= '2.9636')?'orange':(socialHarvestDecContents.kpi5 > '2.9636' && socialHarvestDecContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestDecContents.kpi5 >= '3.7045' && socialHarvestDecContents.kpi5 < '4.4454')?'green':(socialHarvestDecContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                                <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJanContents.kpi1 == null)?'grey-2':(socialHarvestJanContents.kpi1 >= '0' && socialHarvestJanContents.kpi1 <= '3.75')?'red':(socialHarvestJanContents.kpi1 > '3.75' && socialHarvestJanContents.kpi1 <= '5')?'orange':(socialHarvestJanContents.kpi1 > '5' && socialHarvestJanContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJanContents.kpi1 >= '6.25' && socialHarvestJanContents.kpi1 < '7.5')?'green':(socialHarvestJanContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi2 == null)?'grey-2':(socialHarvestJanContents.kpi2 >= '0' && socialHarvestJanContents.kpi2 <= '60.6')?'red':(socialHarvestJanContents.kpi2 > '60.6' && socialHarvestJanContents.kpi2 <= '80.8')?'orange':(socialHarvestJanContents.kpi2 > '80.8' && socialHarvestJanContents.kpi2 < '101')?'yellow-7':(socialHarvestJanContents.kpi2 >= '101' && socialHarvestJanContents.kpi2 < '121.2')?'green':(socialHarvestJanContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi3 == null)?'grey-2':(socialHarvestJanContents.kpi3 >= '0' && socialHarvestJanContents.kpi3 <= '18.75')?'red':(socialHarvestJanContents.kpi3 > '18.75' && socialHarvestJanContents.kpi3 <= '25')?'orange':(socialHarvestJanContents.kpi3 > '25' && socialHarvestJanContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJanContents.kpi3 >= '31.25' && socialHarvestJanContents.kpi3 < '37.5')?'green':(socialHarvestJanContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi4 == null)?'grey-2':(socialHarvestJanContents.kpi4 >= '0' && socialHarvestJanContents.kpi4 <= '3.9')?'red':(socialHarvestJanContents.kpi4 > '3.9' && socialHarvestJanContents.kpi4 <= '5.2')?'orange':(socialHarvestJanContents.kpi4 > '5.2' && socialHarvestJanContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJanContents.kpi4 >= '6.5' && socialHarvestJanContents.kpi4 < '7.8')?'green':(socialHarvestJanContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi5 == null)?'grey-2':(socialHarvestJanContents.kpi5 >= '0' && socialHarvestJanContents.kpi5 <= '2.2227')?'red':(socialHarvestJanContents.kpi5 > '2.2227' && socialHarvestJanContents.kpi5 <= '2.9636')?'orange':(socialHarvestJanContents.kpi5 > '2.9636' && socialHarvestJanContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJanContents.kpi5 >= '3.7045' && socialHarvestJanContents.kpi5 < '4.4454')?'green':(socialHarvestJanContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestFebContents.kpi1 == null)?'grey-2':(socialHarvestFebContents.kpi1 >= '0' && socialHarvestFebContents.kpi1 <= '3.75')?'red':(socialHarvestFebContents.kpi1 > '3.75' && socialHarvestFebContents.kpi1 <= '5')?'orange':(socialHarvestFebContents.kpi1 > '5' && socialHarvestFebContents.kpi1 < '6.25')?'yellow-7':(socialHarvestFebContents.kpi1 >= '6.25' && socialHarvestFebContents.kpi1 < '7.5')?'green':(socialHarvestFebContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi2 == null)?'grey-2':(socialHarvestFebContents.kpi2 >= '0' && socialHarvestFebContents.kpi2 <= '60.6')?'red':(socialHarvestFebContents.kpi2 > '60.6' && socialHarvestFebContents.kpi2 <= '80.8')?'orange':(socialHarvestFebContents.kpi2 > '80.8' && socialHarvestFebContents.kpi2 < '101')?'yellow-7':(socialHarvestFebContents.kpi2 >= '101' && socialHarvestFebContents.kpi2 < '121.2')?'green':(socialHarvestFebContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi3 == null)?'grey-2':(socialHarvestFebContents.kpi3 >= '0' && socialHarvestFebContents.kpi3 <= '18.75')?'red':(socialHarvestFebContents.kpi3 > '18.75' && socialHarvestFebContents.kpi3 <= '25')?'orange':(socialHarvestFebContents.kpi3 > '25' && socialHarvestFebContents.kpi3 < '31.25')?'yellow-7':(socialHarvestFebContents.kpi3 >= '31.25' && socialHarvestFebContents.kpi3 < '37.5')?'green':(socialHarvestFebContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi4 == null)?'grey-2':(socialHarvestFebContents.kpi4 >= '0' && socialHarvestFebContents.kpi4 <= '3.9')?'red':(socialHarvestFebContents.kpi4 > '3.9' && socialHarvestFebContents.kpi4 <= '5.2')?'orange':(socialHarvestFebContents.kpi4 > '5.2' && socialHarvestFebContents.kpi4 < '6.5')?'yellow-7':(socialHarvestFebContents.kpi4 >= '6.5' && socialHarvestFebContents.kpi4 < '7.8')?'green':(socialHarvestFebContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi5 == null)?'grey-2':(socialHarvestFebContents.kpi5 >= '0' && socialHarvestFebContents.kpi5 <= '2.2227')?'red':(socialHarvestFebContents.kpi5 > '2.2227' && socialHarvestFebContents.kpi5 <= '2.9636')?'orange':(socialHarvestFebContents.kpi5 > '2.9636' && socialHarvestFebContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestFebContents.kpi5 >= '3.7045' && socialHarvestFebContents.kpi5 < '4.4454')?'green':(socialHarvestFebContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMarContents.kpi1 == null)?'grey-2':(socialHarvestMarContents.kpi1 >= '0' && socialHarvestMarContents.kpi1 <= '3.75')?'red':(socialHarvestMarContents.kpi1 > '3.75' && socialHarvestMarContents.kpi1 <= '5')?'orange':(socialHarvestMarContents.kpi1 > '5' && socialHarvestMarContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMarContents.kpi1 >= '6.25' && socialHarvestMarContents.kpi1 < '7.5')?'green':(socialHarvestMarContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi2 == null)?'grey-2':(socialHarvestMarContents.kpi2 >= '0' && socialHarvestMarContents.kpi2 <= '60.6')?'red':(socialHarvestMarContents.kpi2 > '60.6' && socialHarvestMarContents.kpi2 <= '80.8')?'orange':(socialHarvestMarContents.kpi2 > '80.8' && socialHarvestMarContents.kpi2 < '101')?'yellow-7':(socialHarvestMarContents.kpi2 >= '101' && socialHarvestMarContents.kpi2 < '121.2')?'green':(socialHarvestMarContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi3 == null)?'grey-2':(socialHarvestMarContents.kpi3 >= '0' && socialHarvestMarContents.kpi3 <= '18.75')?'red':(socialHarvestMarContents.kpi3 > '18.75' && socialHarvestMarContents.kpi3 <= '25')?'orange':(socialHarvestMarContents.kpi3 > '25' && socialHarvestMarContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMarContents.kpi3 >= '31.25' && socialHarvestMarContents.kpi3 < '37.5')?'green':(socialHarvestMarContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi4 == null)?'grey-2':(socialHarvestMarContents.kpi4 >= '0' && socialHarvestMarContents.kpi4 <= '3.9')?'red':(socialHarvestMarContents.kpi4 > '3.9' && socialHarvestMarContents.kpi4 <= '5.2')?'orange':(socialHarvestMarContents.kpi4 > '5.2' && socialHarvestMarContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMarContents.kpi4 >= '6.5' && socialHarvestMarContents.kpi4 < '7.8')?'green':(socialHarvestMarContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi5 == null)?'grey-2':(socialHarvestMarContents.kpi5 >= '0' && socialHarvestMarContents.kpi5 <= '2.2227')?'red':(socialHarvestMarContents.kpi5 > '2.2227' && socialHarvestMarContents.kpi5 <= '2.9636')?'orange':(socialHarvestMarContents.kpi5 > '2.9636' && socialHarvestMarContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMarContents.kpi5 >= '3.7045' && socialHarvestMarContents.kpi5 < '4.4454')?'green':(socialHarvestMarContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAprContents.kpi1 == null)?'grey-2':(socialHarvestAprContents.kpi1 >= '0' && socialHarvestAprContents.kpi1 <= '3.75')?'red':(socialHarvestAprContents.kpi1 > '3.75' && socialHarvestAprContents.kpi1 <= '5')?'orange':(socialHarvestAprContents.kpi1 > '5' && socialHarvestAprContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAprContents.kpi1 >= '6.25' && socialHarvestAprContents.kpi1 < '7.5')?'green':(socialHarvestAprContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi2 == null)?'grey-2':(socialHarvestAprContents.kpi2 >= '0' && socialHarvestAprContents.kpi2 <= '60.6')?'red':(socialHarvestAprContents.kpi2 > '60.6' && socialHarvestAprContents.kpi2 <= '80.8')?'orange':(socialHarvestAprContents.kpi2 > '80.8' && socialHarvestAprContents.kpi2 < '101')?'yellow-7':(socialHarvestAprContents.kpi2 >= '101' && socialHarvestAprContents.kpi2 < '121.2')?'green':(socialHarvestAprContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi3 == null)?'grey-2':(socialHarvestAprContents.kpi3 >= '0' && socialHarvestAprContents.kpi3 <= '18.75')?'red':(socialHarvestAprContents.kpi3 > '18.75' && socialHarvestAprContents.kpi3 <= '25')?'orange':(socialHarvestAprContents.kpi3 > '25' && socialHarvestAprContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAprContents.kpi3 >= '31.25' && socialHarvestAprContents.kpi3 < '37.5')?'green':(socialHarvestAprContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi4 == null)?'grey-2':(socialHarvestAprContents.kpi4 >= '0' && socialHarvestAprContents.kpi4 <= '3.9')?'red':(socialHarvestAprContents.kpi4 > '3.9' && socialHarvestAprContents.kpi4 <= '5.2')?'orange':(socialHarvestAprContents.kpi4 > '5.2' && socialHarvestAprContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAprContents.kpi4 >= '6.5' && socialHarvestAprContents.kpi4 < '7.8')?'green':(socialHarvestAprContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi5 == null)?'grey-2':(socialHarvestAprContents.kpi5 >= '0' && socialHarvestAprContents.kpi5 <= '2.2227')?'red':(socialHarvestAprContents.kpi5 > '2.2227' && socialHarvestAprContents.kpi5 <= '2.9636')?'orange':(socialHarvestAprContents.kpi5 > '2.9636' && socialHarvestAprContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAprContents.kpi5 >= '3.7045' && socialHarvestAprContents.kpi5 < '4.4454')?'green':(socialHarvestAprContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMayContents.kpi1 == null)?'grey-2':(socialHarvestMayContents.kpi1 >= '0' && socialHarvestMayContents.kpi1 <= '3.75')?'red':(socialHarvestMayContents.kpi1 > '3.75' && socialHarvestMayContents.kpi1 <= '5')?'orange':(socialHarvestMayContents.kpi1 > '5' && socialHarvestMayContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMayContents.kpi1 >= '6.25' && socialHarvestMayContents.kpi1 < '7.5')?'green':(socialHarvestMayContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi2 == null)?'grey-2':(socialHarvestMayContents.kpi2 >= '0' && socialHarvestMayContents.kpi2 <= '60.6')?'red':(socialHarvestMayContents.kpi2 > '60.6' && socialHarvestMayContents.kpi2 <= '80.8')?'orange':(socialHarvestMayContents.kpi2 > '80.8' && socialHarvestMayContents.kpi2 < '101')?'yellow-7':(socialHarvestMayContents.kpi2 >= '101' && socialHarvestMayContents.kpi2 < '121.2')?'green':(socialHarvestMayContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi3 == null)?'grey-2':(socialHarvestMayContents.kpi3 >= '0' && socialHarvestMayContents.kpi3 <= '18.75')?'red':(socialHarvestMayContents.kpi3 > '18.75' && socialHarvestMayContents.kpi3 <= '25')?'orange':(socialHarvestMayContents.kpi3 > '25' && socialHarvestMayContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMayContents.kpi3 >= '31.25' && socialHarvestMayContents.kpi3 < '37.5')?'green':(socialHarvestMayContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi4 == null)?'grey-2':(socialHarvestMayContents.kpi4 >= '0' && socialHarvestMayContents.kpi4 <= '3.9')?'red':(socialHarvestMayContents.kpi4 > '3.9' && socialHarvestMayContents.kpi4 <= '5.2')?'orange':(socialHarvestMayContents.kpi4 > '5.2' && socialHarvestMayContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMayContents.kpi4 >= '6.5' && socialHarvestMayContents.kpi4 < '7.8')?'green':(socialHarvestMayContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi5 == null)?'grey-2':(socialHarvestMayContents.kpi5 >= '0' && socialHarvestMayContents.kpi5 <= '2.2227')?'red':(socialHarvestMayContents.kpi5 > '2.2227' && socialHarvestMayContents.kpi5 <= '2.9636')?'orange':(socialHarvestMayContents.kpi5 > '2.9636' && socialHarvestMayContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMayContents.kpi5 >= '3.7045' && socialHarvestMayContents.kpi5 < '4.4454')?'green':(socialHarvestMayContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJunContents.kpi1 == null)?'grey-2':(socialHarvestJunContents.kpi1 >= '0' && socialHarvestJunContents.kpi1 <= '3.75')?'red':(socialHarvestJunContents.kpi1 > '3.75' && socialHarvestJunContents.kpi1 <= '5')?'orange':(socialHarvestJunContents.kpi1 > '5' && socialHarvestJunContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJunContents.kpi1 >= '6.25' && socialHarvestJunContents.kpi1 < '7.5')?'green':(socialHarvestJunContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi2 == null)?'grey-2':(socialHarvestJunContents.kpi2 >= '0' && socialHarvestJunContents.kpi2 <= '60.6')?'red':(socialHarvestJunContents.kpi2 > '60.6' && socialHarvestJunContents.kpi2 <= '80.8')?'orange':(socialHarvestJunContents.kpi2 > '80.8' && socialHarvestJunContents.kpi2 < '101')?'yellow-7':(socialHarvestJunContents.kpi2 >= '101' && socialHarvestJunContents.kpi2 < '121.2')?'green':(socialHarvestJunContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi3 == null)?'grey-2':(socialHarvestJunContents.kpi3 >= '0' && socialHarvestJunContents.kpi3 <= '18.75')?'red':(socialHarvestJunContents.kpi3 > '18.75' && socialHarvestJunContents.kpi3 <= '25')?'orange':(socialHarvestJunContents.kpi3 > '25' && socialHarvestJunContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJunContents.kpi3 >= '31.25' && socialHarvestJunContents.kpi3 < '37.5')?'green':(socialHarvestJunContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi4 == null)?'grey-2':(socialHarvestJunContents.kpi4 >= '0' && socialHarvestJunContents.kpi4 <= '3.9')?'red':(socialHarvestJunContents.kpi4 > '3.9' && socialHarvestJunContents.kpi4 <= '5.2')?'orange':(socialHarvestJunContents.kpi4 > '5.2' && socialHarvestJunContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJunContents.kpi4 >= '6.5' && socialHarvestJunContents.kpi4 < '7.8')?'green':(socialHarvestJunContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi5 == null)?'grey-2':(socialHarvestJunContents.kpi5 >= '0' && socialHarvestJunContents.kpi5 <= '2.2227')?'red':(socialHarvestJunContents.kpi5 > '2.2227' && socialHarvestJunContents.kpi5 <= '2.9636')?'orange':(socialHarvestJunContents.kpi5 > '2.9636' && socialHarvestJunContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJunContents.kpi5 >= '3.7045' && socialHarvestJunContents.kpi5 < '4.4454')?'green':(socialHarvestJunContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJulContents.kpi1 == null)?'grey-2':(socialHarvestJulContents.kpi1 >= '0' && socialHarvestJulContents.kpi1 <= '3.75')?'red':(socialHarvestJulContents.kpi1 > '3.75' && socialHarvestJulContents.kpi1 <= '5')?'orange':(socialHarvestJulContents.kpi1 > '5' && socialHarvestJulContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJulContents.kpi1 >= '6.25' && socialHarvestJulContents.kpi1 < '7.5')?'green':(socialHarvestJulContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi2 == null)?'grey-2':(socialHarvestJulContents.kpi2 >= '0' && socialHarvestJulContents.kpi2 <= '60.6')?'red':(socialHarvestJulContents.kpi2 > '60.6' && socialHarvestJulContents.kpi2 <= '80.8')?'orange':(socialHarvestJulContents.kpi2 > '80.8' && socialHarvestJulContents.kpi2 < '101')?'yellow-7':(socialHarvestJulContents.kpi2 >= '101' && socialHarvestJulContents.kpi2 < '121.2')?'green':(socialHarvestJulContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi3 == null)?'grey-2':(socialHarvestJulContents.kpi3 >= '0' && socialHarvestJulContents.kpi3 <= '18.75')?'red':(socialHarvestJulContents.kpi3 > '18.75' && socialHarvestJulContents.kpi3 <= '25')?'orange':(socialHarvestJulContents.kpi3 > '25' && socialHarvestJulContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJulContents.kpi3 >= '31.25' && socialHarvestJulContents.kpi3 < '37.5')?'green':(socialHarvestJulContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi4 == null)?'grey-2':(socialHarvestJulContents.kpi4 >= '0' && socialHarvestJulContents.kpi4 <= '3.9')?'red':(socialHarvestJulContents.kpi4 > '3.9' && socialHarvestJulContents.kpi4 <= '5.2')?'orange':(socialHarvestJulContents.kpi4 > '5.2' && socialHarvestJulContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJulContents.kpi4 >= '6.5' && socialHarvestJulContents.kpi4 < '7.8')?'green':(socialHarvestJulContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi5 == null)?'grey-2':(socialHarvestJulContents.kpi5 >= '0' && socialHarvestJulContents.kpi5 <= '2.2227')?'red':(socialHarvestJulContents.kpi5 > '2.2227' && socialHarvestJulContents.kpi5 <= '2.9636')?'orange':(socialHarvestJulContents.kpi5 > '2.9636' && socialHarvestJulContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJulContents.kpi5 >= '3.7045' && socialHarvestJulContents.kpi5 < '4.4454')?'green':(socialHarvestJulContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAugContents.kpi1 == null)?'grey-2':(socialHarvestAugContents.kpi1 >= '0' && socialHarvestAugContents.kpi1 <= '3.75')?'red':(socialHarvestAugContents.kpi1 > '3.75' && socialHarvestAugContents.kpi1 <= '5')?'orange':(socialHarvestAugContents.kpi1 > '5' && socialHarvestAugContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAugContents.kpi1 >= '6.25' && socialHarvestAugContents.kpi1 < '7.5')?'green':(socialHarvestAugContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi2 == null)?'grey-2':(socialHarvestAugContents.kpi2 >= '0' && socialHarvestAugContents.kpi2 <= '60.6')?'red':(socialHarvestAugContents.kpi2 > '60.6' && socialHarvestAugContents.kpi2 <= '80.8')?'orange':(socialHarvestAugContents.kpi2 > '80.8' && socialHarvestAugContents.kpi2 < '101')?'yellow-7':(socialHarvestAugContents.kpi2 >= '101' && socialHarvestAugContents.kpi2 < '121.2')?'green':(socialHarvestAugContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi3 == null)?'grey-2':(socialHarvestAugContents.kpi3 >= '0' && socialHarvestAugContents.kpi3 <= '18.75')?'red':(socialHarvestAugContents.kpi3 > '18.75' && socialHarvestAugContents.kpi3 <= '25')?'orange':(socialHarvestAugContents.kpi3 > '25' && socialHarvestAugContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAugContents.kpi3 >= '31.25' && socialHarvestAugContents.kpi3 < '37.5')?'green':(socialHarvestAugContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi4 == null)?'grey-2':(socialHarvestAugContents.kpi4 >= '0' && socialHarvestAugContents.kpi4 <= '3.9')?'red':(socialHarvestAugContents.kpi4 > '3.9' && socialHarvestAugContents.kpi4 <= '5.2')?'orange':(socialHarvestAugContents.kpi4 > '5.2' && socialHarvestAugContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAugContents.kpi4 >= '6.5' && socialHarvestAugContents.kpi4 < '7.8')?'green':(socialHarvestAugContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi5 == null)?'grey-2':(socialHarvestAugContents.kpi5 >= '0' && socialHarvestAugContents.kpi5 <= '2.2227')?'red':(socialHarvestAugContents.kpi5 > '2.2227' && socialHarvestAugContents.kpi5 <= '2.9636')?'orange':(socialHarvestAugContents.kpi5 > '2.9636' && socialHarvestAugContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAugContents.kpi5 >= '3.7045' && socialHarvestAugContents.kpi5 < '4.4454')?'green':(socialHarvestAugContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestSepContents.kpi1 == null)?'grey-2':(socialHarvestSepContents.kpi1 >= '0' && socialHarvestSepContents.kpi1 <= '3.75')?'red':(socialHarvestSepContents.kpi1 > '3.75' && socialHarvestSepContents.kpi1 <= '5')?'orange':(socialHarvestSepContents.kpi1 > '5' && socialHarvestSepContents.kpi1 < '6.25')?'yellow-7':(socialHarvestSepContents.kpi1 >= '6.25' && socialHarvestSepContents.kpi1 < '7.5')?'green':(socialHarvestSepContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi2 == null)?'grey-2':(socialHarvestSepContents.kpi2 >= '0' && socialHarvestSepContents.kpi2 <= '60.6')?'red':(socialHarvestSepContents.kpi2 > '60.6' && socialHarvestSepContents.kpi2 <= '80.8')?'orange':(socialHarvestSepContents.kpi2 > '80.8' && socialHarvestSepContents.kpi2 < '101')?'yellow-7':(socialHarvestSepContents.kpi2 >= '101' && socialHarvestSepContents.kpi2 < '121.2')?'green':(socialHarvestSepContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi3 == null)?'grey-2':(socialHarvestSepContents.kpi3 >= '0' && socialHarvestSepContents.kpi3 <= '18.75')?'red':(socialHarvestSepContents.kpi3 > '18.75' && socialHarvestSepContents.kpi3 <= '25')?'orange':(socialHarvestSepContents.kpi3 > '25' && socialHarvestSepContents.kpi3 < '31.25')?'yellow-7':(socialHarvestSepContents.kpi3 >= '31.25' && socialHarvestSepContents.kpi3 < '37.5')?'green':(socialHarvestSepContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi4 == null)?'grey-2':(socialHarvestSepContents.kpi4 >= '0' && socialHarvestSepContents.kpi4 <= '3.9')?'red':(socialHarvestSepContents.kpi4 > '3.9' && socialHarvestSepContents.kpi4 <= '5.2')?'orange':(socialHarvestSepContents.kpi4 > '5.2' && socialHarvestSepContents.kpi4 < '6.5')?'yellow-7':(socialHarvestSepContents.kpi4 >= '6.5' && socialHarvestSepContents.kpi4 < '7.8')?'green':(socialHarvestSepContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi5 == null)?'grey-2':(socialHarvestSepContents.kpi5 >= '0' && socialHarvestSepContents.kpi5 <= '2.2227')?'red':(socialHarvestSepContents.kpi5 > '2.2227' && socialHarvestSepContents.kpi5 <= '2.9636')?'orange':(socialHarvestSepContents.kpi5 > '2.9636' && socialHarvestSepContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestSepContents.kpi5 >= '3.7045' && socialHarvestSepContents.kpi5 < '4.4454')?'green':(socialHarvestSepContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestOctContents.kpi1 == null)?'grey-2':(socialHarvestOctContents.kpi1 >= '0' && socialHarvestOctContents.kpi1 <= '3.75')?'red':(socialHarvestOctContents.kpi1 > '3.75' && socialHarvestOctContents.kpi1 <= '5')?'orange':(socialHarvestOctContents.kpi1 > '5' && socialHarvestOctContents.kpi1 < '6.25')?'yellow-7':(socialHarvestOctContents.kpi1 >= '6.25' && socialHarvestOctContents.kpi1 < '7.5')?'green':(socialHarvestOctContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi2 == null)?'grey-2':(socialHarvestOctContents.kpi2 >= '0' && socialHarvestOctContents.kpi2 <= '60.6')?'red':(socialHarvestOctContents.kpi2 > '60.6' && socialHarvestOctContents.kpi2 <= '80.8')?'orange':(socialHarvestOctContents.kpi2 > '80.8' && socialHarvestOctContents.kpi2 < '101')?'yellow-7':(socialHarvestOctContents.kpi2 >= '101' && socialHarvestOctContents.kpi2 < '121.2')?'green':(socialHarvestOctContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi3 == null)?'grey-2':(socialHarvestOctContents.kpi3 >= '0' && socialHarvestOctContents.kpi3 <= '18.75')?'red':(socialHarvestOctContents.kpi3 > '18.75' && socialHarvestOctContents.kpi3 <= '25')?'orange':(socialHarvestOctContents.kpi3 > '25' && socialHarvestOctContents.kpi3 < '31.25')?'yellow-7':(socialHarvestOctContents.kpi3 >= '31.25' && socialHarvestOctContents.kpi3 < '37.5')?'green':(socialHarvestOctContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi4 == null)?'grey-2':(socialHarvestOctContents.kpi4 >= '0' && socialHarvestOctContents.kpi4 <= '3.9')?'red':(socialHarvestOctContents.kpi4 > '3.9' && socialHarvestOctContents.kpi4 <= '5.2')?'orange':(socialHarvestOctContents.kpi4 > '5.2' && socialHarvestOctContents.kpi4 < '6.5')?'yellow-7':(socialHarvestOctContents.kpi4 >= '6.5' && socialHarvestOctContents.kpi4 < '7.8')?'green':(socialHarvestOctContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi5 == null)?'grey-2':(socialHarvestOctContents.kpi5 >= '0' && socialHarvestOctContents.kpi5 <= '2.2227')?'red':(socialHarvestOctContents.kpi5 > '2.2227' && socialHarvestOctContents.kpi5 <= '2.9636')?'orange':(socialHarvestOctContents.kpi5 > '2.9636' && socialHarvestOctContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestOctContents.kpi5 >= '3.7045' && socialHarvestOctContents.kpi5 < '4.4454')?'green':(socialHarvestOctContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestNovContents.kpi1 == null)?'grey-2':(socialHarvestNovContents.kpi1 >= '0' && socialHarvestNovContents.kpi1 <= '3.75')?'red':(socialHarvestNovContents.kpi1 > '3.75' && socialHarvestNovContents.kpi1 <= '5')?'orange':(socialHarvestNovContents.kpi1 > '5' && socialHarvestNovContents.kpi1 < '6.25')?'yellow-7':(socialHarvestNovContents.kpi1 >= '6.25' && socialHarvestNovContents.kpi1 < '7.5')?'green':(socialHarvestNovContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi2 == null)?'grey-2':(socialHarvestNovContents.kpi2 >= '0' && socialHarvestNovContents.kpi2 <= '60.6')?'red':(socialHarvestNovContents.kpi2 > '60.6' && socialHarvestNovContents.kpi2 <= '80.8')?'orange':(socialHarvestNovContents.kpi2 > '80.8' && socialHarvestNovContents.kpi2 < '101')?'yellow-7':(socialHarvestNovContents.kpi2 >= '101' && socialHarvestNovContents.kpi2 < '121.2')?'green':(socialHarvestNovContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi3 == null)?'grey-2':(socialHarvestNovContents.kpi3 >= '0' && socialHarvestNovContents.kpi3 <= '18.75')?'red':(socialHarvestNovContents.kpi3 > '18.75' && socialHarvestNovContents.kpi3 <= '25')?'orange':(socialHarvestNovContents.kpi3 > '25' && socialHarvestNovContents.kpi3 < '31.25')?'yellow-7':(socialHarvestNovContents.kpi3 >= '31.25' && socialHarvestNovContents.kpi3 < '37.5')?'green':(socialHarvestNovContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi4 == null)?'grey-2':(socialHarvestNovContents.kpi4 >= '0' && socialHarvestNovContents.kpi4 <= '3.9')?'red':(socialHarvestNovContents.kpi4 > '3.9' && socialHarvestNovContents.kpi4 <= '5.2')?'orange':(socialHarvestNovContents.kpi4 > '5.2' && socialHarvestNovContents.kpi4 < '6.5')?'yellow-7':(socialHarvestNovContents.kpi4 >= '6.5' && socialHarvestNovContents.kpi4 < '7.8')?'green':(socialHarvestNovContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi5 == null)?'grey-2':(socialHarvestNovContents.kpi5 >= '0' && socialHarvestNovContents.kpi5 <= '2.2227')?'red':(socialHarvestNovContents.kpi5 > '2.2227' && socialHarvestNovContents.kpi5 <= '2.9636')?'orange':(socialHarvestNovContents.kpi5 > '2.9636' && socialHarvestNovContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestNovContents.kpi5 >= '3.7045' && socialHarvestNovContents.kpi5 < '4.4454')?'green':(socialHarvestNovContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestDecContents.kpi1 == null)?'grey-2':(socialHarvestDecContents.kpi1 >= '0' && socialHarvestDecContents.kpi1 <= '3.75')?'red':(socialHarvestDecContents.kpi1 > '3.75' && socialHarvestDecContents.kpi1 <= '5')?'orange':(socialHarvestDecContents.kpi1 > '5' && socialHarvestDecContents.kpi1 < '6.25')?'yellow-7':(socialHarvestDecContents.kpi1 >= '6.25' && socialHarvestDecContents.kpi1 < '7.5')?'green':(socialHarvestDecContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi2 == null)?'grey-2':(socialHarvestDecContents.kpi2 >= '0' && socialHarvestDecContents.kpi2 <= '60.6')?'red':(socialHarvestDecContents.kpi2 > '60.6' && socialHarvestDecContents.kpi2 <= '80.8')?'orange':(socialHarvestDecContents.kpi2 > '80.8' && socialHarvestDecContents.kpi2 < '101')?'yellow-7':(socialHarvestDecContents.kpi2 >= '101' && socialHarvestDecContents.kpi2 < '121.2')?'green':(socialHarvestDecContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi3 == null)?'grey-2':(socialHarvestDecContents.kpi3 >= '0' && socialHarvestDecContents.kpi3 <= '18.75')?'red':(socialHarvestDecContents.kpi3 > '18.75' && socialHarvestDecContents.kpi3 <= '25')?'orange':(socialHarvestDecContents.kpi3 > '25' && socialHarvestDecContents.kpi3 < '31.25')?'yellow-7':(socialHarvestDecContents.kpi3 >= '31.25' && socialHarvestDecContents.kpi3 < '37.5')?'green':(socialHarvestDecContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi4 == null)?'grey-2':(socialHarvestDecContents.kpi4 >= '0' && socialHarvestDecContents.kpi4 <= '3.9')?'red':(socialHarvestDecContents.kpi4 > '3.9' && socialHarvestDecContents.kpi4 <= '5.2')?'orange':(socialHarvestDecContents.kpi4 > '5.2' && socialHarvestDecContents.kpi4 < '6.5')?'yellow-7':(socialHarvestDecContents.kpi4 >= '6.5' && socialHarvestDecContents.kpi4 < '7.8')?'green':(socialHarvestDecContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi5 == null)?'grey-2':(socialHarvestDecContents.kpi5 >= '0' && socialHarvestDecContents.kpi5 <= '2.2227')?'red':(socialHarvestDecContents.kpi5 > '2.2227' && socialHarvestDecContents.kpi5 <= '2.9636')?'orange':(socialHarvestDecContents.kpi5 > '2.9636' && socialHarvestDecContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestDecContents.kpi5 >= '3.7045' && socialHarvestDecContents.kpi5 < '4.4454')?'green':(socialHarvestDecContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                                <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJanContents.kpi1 == null)?'grey-2':(socialHarvestJanContents.kpi1 >= '0' && socialHarvestJanContents.kpi1 <= '3.75')?'red':(socialHarvestJanContents.kpi1 > '3.75' && socialHarvestJanContents.kpi1 <= '5')?'orange':(socialHarvestJanContents.kpi1 > '5' && socialHarvestJanContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJanContents.kpi1 >= '6.25' && socialHarvestJanContents.kpi1 < '7.5')?'green':(socialHarvestJanContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi2 == null)?'grey-2':(socialHarvestJanContents.kpi2 >= '0' && socialHarvestJanContents.kpi2 <= '60.6')?'red':(socialHarvestJanContents.kpi2 > '60.6' && socialHarvestJanContents.kpi2 <= '80.8')?'orange':(socialHarvestJanContents.kpi2 > '80.8' && socialHarvestJanContents.kpi2 < '101')?'yellow-7':(socialHarvestJanContents.kpi2 >= '101' && socialHarvestJanContents.kpi2 < '121.2')?'green':(socialHarvestJanContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi3 == null)?'grey-2':(socialHarvestJanContents.kpi3 >= '0' && socialHarvestJanContents.kpi3 <= '18.75')?'red':(socialHarvestJanContents.kpi3 > '18.75' && socialHarvestJanContents.kpi3 <= '25')?'orange':(socialHarvestJanContents.kpi3 > '25' && socialHarvestJanContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJanContents.kpi3 >= '31.25' && socialHarvestJanContents.kpi3 < '37.5')?'green':(socialHarvestJanContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi4 == null)?'grey-2':(socialHarvestJanContents.kpi4 >= '0' && socialHarvestJanContents.kpi4 <= '3.9')?'red':(socialHarvestJanContents.kpi4 > '3.9' && socialHarvestJanContents.kpi4 <= '5.2')?'orange':(socialHarvestJanContents.kpi4 > '5.2' && socialHarvestJanContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJanContents.kpi4 >= '6.5' && socialHarvestJanContents.kpi4 < '7.8')?'green':(socialHarvestJanContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi5 == null)?'grey-2':(socialHarvestJanContents.kpi5 >= '0' && socialHarvestJanContents.kpi5 <= '2.2227')?'red':(socialHarvestJanContents.kpi5 > '2.2227' && socialHarvestJanContents.kpi5 <= '2.9636')?'orange':(socialHarvestJanContents.kpi5 > '2.9636' && socialHarvestJanContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJanContents.kpi5 >= '3.7045' && socialHarvestJanContents.kpi5 < '4.4454')?'green':(socialHarvestJanContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestFebContents.kpi1 == null)?'grey-2':(socialHarvestFebContents.kpi1 >= '0' && socialHarvestFebContents.kpi1 <= '3.75')?'red':(socialHarvestFebContents.kpi1 > '3.75' && socialHarvestFebContents.kpi1 <= '5')?'orange':(socialHarvestFebContents.kpi1 > '5' && socialHarvestFebContents.kpi1 < '6.25')?'yellow-7':(socialHarvestFebContents.kpi1 >= '6.25' && socialHarvestFebContents.kpi1 < '7.5')?'green':(socialHarvestFebContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi2 == null)?'grey-2':(socialHarvestFebContents.kpi2 >= '0' && socialHarvestFebContents.kpi2 <= '60.6')?'red':(socialHarvestFebContents.kpi2 > '60.6' && socialHarvestFebContents.kpi2 <= '80.8')?'orange':(socialHarvestFebContents.kpi2 > '80.8' && socialHarvestFebContents.kpi2 < '101')?'yellow-7':(socialHarvestFebContents.kpi2 >= '101' && socialHarvestFebContents.kpi2 < '121.2')?'green':(socialHarvestFebContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi3 == null)?'grey-2':(socialHarvestFebContents.kpi3 >= '0' && socialHarvestFebContents.kpi3 <= '18.75')?'red':(socialHarvestFebContents.kpi3 > '18.75' && socialHarvestFebContents.kpi3 <= '25')?'orange':(socialHarvestFebContents.kpi3 > '25' && socialHarvestFebContents.kpi3 < '31.25')?'yellow-7':(socialHarvestFebContents.kpi3 >= '31.25' && socialHarvestFebContents.kpi3 < '37.5')?'green':(socialHarvestFebContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi4 == null)?'grey-2':(socialHarvestFebContents.kpi4 >= '0' && socialHarvestFebContents.kpi4 <= '3.9')?'red':(socialHarvestFebContents.kpi4 > '3.9' && socialHarvestFebContents.kpi4 <= '5.2')?'orange':(socialHarvestFebContents.kpi4 > '5.2' && socialHarvestFebContents.kpi4 < '6.5')?'yellow-7':(socialHarvestFebContents.kpi4 >= '6.5' && socialHarvestFebContents.kpi4 < '7.8')?'green':(socialHarvestFebContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi5 == null)?'grey-2':(socialHarvestFebContents.kpi5 >= '0' && socialHarvestFebContents.kpi5 <= '2.2227')?'red':(socialHarvestFebContents.kpi5 > '2.2227' && socialHarvestFebContents.kpi5 <= '2.9636')?'orange':(socialHarvestFebContents.kpi5 > '2.9636' && socialHarvestFebContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestFebContents.kpi5 >= '3.7045' && socialHarvestFebContents.kpi5 < '4.4454')?'green':(socialHarvestFebContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMarContents.kpi1 == null)?'grey-2':(socialHarvestMarContents.kpi1 >= '0' && socialHarvestMarContents.kpi1 <= '3.75')?'red':(socialHarvestMarContents.kpi1 > '3.75' && socialHarvestMarContents.kpi1 <= '5')?'orange':(socialHarvestMarContents.kpi1 > '5' && socialHarvestMarContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMarContents.kpi1 >= '6.25' && socialHarvestMarContents.kpi1 < '7.5')?'green':(socialHarvestMarContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi2 == null)?'grey-2':(socialHarvestMarContents.kpi2 >= '0' && socialHarvestMarContents.kpi2 <= '60.6')?'red':(socialHarvestMarContents.kpi2 > '60.6' && socialHarvestMarContents.kpi2 <= '80.8')?'orange':(socialHarvestMarContents.kpi2 > '80.8' && socialHarvestMarContents.kpi2 < '101')?'yellow-7':(socialHarvestMarContents.kpi2 >= '101' && socialHarvestMarContents.kpi2 < '121.2')?'green':(socialHarvestMarContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi3 == null)?'grey-2':(socialHarvestMarContents.kpi3 >= '0' && socialHarvestMarContents.kpi3 <= '18.75')?'red':(socialHarvestMarContents.kpi3 > '18.75' && socialHarvestMarContents.kpi3 <= '25')?'orange':(socialHarvestMarContents.kpi3 > '25' && socialHarvestMarContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMarContents.kpi3 >= '31.25' && socialHarvestMarContents.kpi3 < '37.5')?'green':(socialHarvestMarContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi4 == null)?'grey-2':(socialHarvestMarContents.kpi4 >= '0' && socialHarvestMarContents.kpi4 <= '3.9')?'red':(socialHarvestMarContents.kpi4 > '3.9' && socialHarvestMarContents.kpi4 <= '5.2')?'orange':(socialHarvestMarContents.kpi4 > '5.2' && socialHarvestMarContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMarContents.kpi4 >= '6.5' && socialHarvestMarContents.kpi4 < '7.8')?'green':(socialHarvestMarContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi5 == null)?'grey-2':(socialHarvestMarContents.kpi5 >= '0' && socialHarvestMarContents.kpi5 <= '2.2227')?'red':(socialHarvestMarContents.kpi5 > '2.2227' && socialHarvestMarContents.kpi5 <= '2.9636')?'orange':(socialHarvestMarContents.kpi5 > '2.9636' && socialHarvestMarContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMarContents.kpi5 >= '3.7045' && socialHarvestMarContents.kpi5 < '4.4454')?'green':(socialHarvestMarContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAprContents.kpi1 == null)?'grey-2':(socialHarvestAprContents.kpi1 >= '0' && socialHarvestAprContents.kpi1 <= '3.75')?'red':(socialHarvestAprContents.kpi1 > '3.75' && socialHarvestAprContents.kpi1 <= '5')?'orange':(socialHarvestAprContents.kpi1 > '5' && socialHarvestAprContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAprContents.kpi1 >= '6.25' && socialHarvestAprContents.kpi1 < '7.5')?'green':(socialHarvestAprContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi2 == null)?'grey-2':(socialHarvestAprContents.kpi2 >= '0' && socialHarvestAprContents.kpi2 <= '60.6')?'red':(socialHarvestAprContents.kpi2 > '60.6' && socialHarvestAprContents.kpi2 <= '80.8')?'orange':(socialHarvestAprContents.kpi2 > '80.8' && socialHarvestAprContents.kpi2 < '101')?'yellow-7':(socialHarvestAprContents.kpi2 >= '101' && socialHarvestAprContents.kpi2 < '121.2')?'green':(socialHarvestAprContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi3 == null)?'grey-2':(socialHarvestAprContents.kpi3 >= '0' && socialHarvestAprContents.kpi3 <= '18.75')?'red':(socialHarvestAprContents.kpi3 > '18.75' && socialHarvestAprContents.kpi3 <= '25')?'orange':(socialHarvestAprContents.kpi3 > '25' && socialHarvestAprContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAprContents.kpi3 >= '31.25' && socialHarvestAprContents.kpi3 < '37.5')?'green':(socialHarvestAprContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi4 == null)?'grey-2':(socialHarvestAprContents.kpi4 >= '0' && socialHarvestAprContents.kpi4 <= '3.9')?'red':(socialHarvestAprContents.kpi4 > '3.9' && socialHarvestAprContents.kpi4 <= '5.2')?'orange':(socialHarvestAprContents.kpi4 > '5.2' && socialHarvestAprContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAprContents.kpi4 >= '6.5' && socialHarvestAprContents.kpi4 < '7.8')?'green':(socialHarvestAprContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi5 == null)?'grey-2':(socialHarvestAprContents.kpi5 >= '0' && socialHarvestAprContents.kpi5 <= '2.2227')?'red':(socialHarvestAprContents.kpi5 > '2.2227' && socialHarvestAprContents.kpi5 <= '2.9636')?'orange':(socialHarvestAprContents.kpi5 > '2.9636' && socialHarvestAprContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAprContents.kpi5 >= '3.7045' && socialHarvestAprContents.kpi5 < '4.4454')?'green':(socialHarvestAprContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMayContents.kpi1 == null)?'grey-2':(socialHarvestMayContents.kpi1 >= '0' && socialHarvestMayContents.kpi1 <= '3.75')?'red':(socialHarvestMayContents.kpi1 > '3.75' && socialHarvestMayContents.kpi1 <= '5')?'orange':(socialHarvestMayContents.kpi1 > '5' && socialHarvestMayContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMayContents.kpi1 >= '6.25' && socialHarvestMayContents.kpi1 < '7.5')?'green':(socialHarvestMayContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi2 == null)?'grey-2':(socialHarvestMayContents.kpi2 >= '0' && socialHarvestMayContents.kpi2 <= '60.6')?'red':(socialHarvestMayContents.kpi2 > '60.6' && socialHarvestMayContents.kpi2 <= '80.8')?'orange':(socialHarvestMayContents.kpi2 > '80.8' && socialHarvestMayContents.kpi2 < '101')?'yellow-7':(socialHarvestMayContents.kpi2 >= '101' && socialHarvestMayContents.kpi2 < '121.2')?'green':(socialHarvestMayContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi3 == null)?'grey-2':(socialHarvestMayContents.kpi3 >= '0' && socialHarvestMayContents.kpi3 <= '18.75')?'red':(socialHarvestMayContents.kpi3 > '18.75' && socialHarvestMayContents.kpi3 <= '25')?'orange':(socialHarvestMayContents.kpi3 > '25' && socialHarvestMayContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMayContents.kpi3 >= '31.25' && socialHarvestMayContents.kpi3 < '37.5')?'green':(socialHarvestMayContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi4 == null)?'grey-2':(socialHarvestMayContents.kpi4 >= '0' && socialHarvestMayContents.kpi4 <= '3.9')?'red':(socialHarvestMayContents.kpi4 > '3.9' && socialHarvestMayContents.kpi4 <= '5.2')?'orange':(socialHarvestMayContents.kpi4 > '5.2' && socialHarvestMayContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMayContents.kpi4 >= '6.5' && socialHarvestMayContents.kpi4 < '7.8')?'green':(socialHarvestMayContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi5 == null)?'grey-2':(socialHarvestMayContents.kpi5 >= '0' && socialHarvestMayContents.kpi5 <= '2.2227')?'red':(socialHarvestMayContents.kpi5 > '2.2227' && socialHarvestMayContents.kpi5 <= '2.9636')?'orange':(socialHarvestMayContents.kpi5 > '2.9636' && socialHarvestMayContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMayContents.kpi5 >= '3.7045' && socialHarvestMayContents.kpi5 < '4.4454')?'green':(socialHarvestMayContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJunContents.kpi1 == null)?'grey-2':(socialHarvestJunContents.kpi1 >= '0' && socialHarvestJunContents.kpi1 <= '3.75')?'red':(socialHarvestJunContents.kpi1 > '3.75' && socialHarvestJunContents.kpi1 <= '5')?'orange':(socialHarvestJunContents.kpi1 > '5' && socialHarvestJunContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJunContents.kpi1 >= '6.25' && socialHarvestJunContents.kpi1 < '7.5')?'green':(socialHarvestJunContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi2 == null)?'grey-2':(socialHarvestJunContents.kpi2 >= '0' && socialHarvestJunContents.kpi2 <= '60.6')?'red':(socialHarvestJunContents.kpi2 > '60.6' && socialHarvestJunContents.kpi2 <= '80.8')?'orange':(socialHarvestJunContents.kpi2 > '80.8' && socialHarvestJunContents.kpi2 < '101')?'yellow-7':(socialHarvestJunContents.kpi2 >= '101' && socialHarvestJunContents.kpi2 < '121.2')?'green':(socialHarvestJunContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi3 == null)?'grey-2':(socialHarvestJunContents.kpi3 >= '0' && socialHarvestJunContents.kpi3 <= '18.75')?'red':(socialHarvestJunContents.kpi3 > '18.75' && socialHarvestJunContents.kpi3 <= '25')?'orange':(socialHarvestJunContents.kpi3 > '25' && socialHarvestJunContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJunContents.kpi3 >= '31.25' && socialHarvestJunContents.kpi3 < '37.5')?'green':(socialHarvestJunContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi4 == null)?'grey-2':(socialHarvestJunContents.kpi4 >= '0' && socialHarvestJunContents.kpi4 <= '3.9')?'red':(socialHarvestJunContents.kpi4 > '3.9' && socialHarvestJunContents.kpi4 <= '5.2')?'orange':(socialHarvestJunContents.kpi4 > '5.2' && socialHarvestJunContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJunContents.kpi4 >= '6.5' && socialHarvestJunContents.kpi4 < '7.8')?'green':(socialHarvestJunContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi5 == null)?'grey-2':(socialHarvestJunContents.kpi5 >= '0' && socialHarvestJunContents.kpi5 <= '2.2227')?'red':(socialHarvestJunContents.kpi5 > '2.2227' && socialHarvestJunContents.kpi5 <= '2.9636')?'orange':(socialHarvestJunContents.kpi5 > '2.9636' && socialHarvestJunContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJunContents.kpi5 >= '3.7045' && socialHarvestJunContents.kpi5 < '4.4454')?'green':(socialHarvestJunContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJulContents.kpi1 == null)?'grey-2':(socialHarvestJulContents.kpi1 >= '0' && socialHarvestJulContents.kpi1 <= '3.75')?'red':(socialHarvestJulContents.kpi1 > '3.75' && socialHarvestJulContents.kpi1 <= '5')?'orange':(socialHarvestJulContents.kpi1 > '5' && socialHarvestJulContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJulContents.kpi1 >= '6.25' && socialHarvestJulContents.kpi1 < '7.5')?'green':(socialHarvestJulContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi2 == null)?'grey-2':(socialHarvestJulContents.kpi2 >= '0' && socialHarvestJulContents.kpi2 <= '60.6')?'red':(socialHarvestJulContents.kpi2 > '60.6' && socialHarvestJulContents.kpi2 <= '80.8')?'orange':(socialHarvestJulContents.kpi2 > '80.8' && socialHarvestJulContents.kpi2 < '101')?'yellow-7':(socialHarvestJulContents.kpi2 >= '101' && socialHarvestJulContents.kpi2 < '121.2')?'green':(socialHarvestJulContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi3 == null)?'grey-2':(socialHarvestJulContents.kpi3 >= '0' && socialHarvestJulContents.kpi3 <= '18.75')?'red':(socialHarvestJulContents.kpi3 > '18.75' && socialHarvestJulContents.kpi3 <= '25')?'orange':(socialHarvestJulContents.kpi3 > '25' && socialHarvestJulContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJulContents.kpi3 >= '31.25' && socialHarvestJulContents.kpi3 < '37.5')?'green':(socialHarvestJulContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi4 == null)?'grey-2':(socialHarvestJulContents.kpi4 >= '0' && socialHarvestJulContents.kpi4 <= '3.9')?'red':(socialHarvestJulContents.kpi4 > '3.9' && socialHarvestJulContents.kpi4 <= '5.2')?'orange':(socialHarvestJulContents.kpi4 > '5.2' && socialHarvestJulContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJulContents.kpi4 >= '6.5' && socialHarvestJulContents.kpi4 < '7.8')?'green':(socialHarvestJulContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi5 == null)?'grey-2':(socialHarvestJulContents.kpi5 >= '0' && socialHarvestJulContents.kpi5 <= '2.2227')?'red':(socialHarvestJulContents.kpi5 > '2.2227' && socialHarvestJulContents.kpi5 <= '2.9636')?'orange':(socialHarvestJulContents.kpi5 > '2.9636' && socialHarvestJulContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJulContents.kpi5 >= '3.7045' && socialHarvestJulContents.kpi5 < '4.4454')?'green':(socialHarvestJulContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAugContents.kpi1 == null)?'grey-2':(socialHarvestAugContents.kpi1 >= '0' && socialHarvestAugContents.kpi1 <= '3.75')?'red':(socialHarvestAugContents.kpi1 > '3.75' && socialHarvestAugContents.kpi1 <= '5')?'orange':(socialHarvestAugContents.kpi1 > '5' && socialHarvestAugContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAugContents.kpi1 >= '6.25' && socialHarvestAugContents.kpi1 < '7.5')?'green':(socialHarvestAugContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi2 == null)?'grey-2':(socialHarvestAugContents.kpi2 >= '0' && socialHarvestAugContents.kpi2 <= '60.6')?'red':(socialHarvestAugContents.kpi2 > '60.6' && socialHarvestAugContents.kpi2 <= '80.8')?'orange':(socialHarvestAugContents.kpi2 > '80.8' && socialHarvestAugContents.kpi2 < '101')?'yellow-7':(socialHarvestAugContents.kpi2 >= '101' && socialHarvestAugContents.kpi2 < '121.2')?'green':(socialHarvestAugContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi3 == null)?'grey-2':(socialHarvestAugContents.kpi3 >= '0' && socialHarvestAugContents.kpi3 <= '18.75')?'red':(socialHarvestAugContents.kpi3 > '18.75' && socialHarvestAugContents.kpi3 <= '25')?'orange':(socialHarvestAugContents.kpi3 > '25' && socialHarvestAugContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAugContents.kpi3 >= '31.25' && socialHarvestAugContents.kpi3 < '37.5')?'green':(socialHarvestAugContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi4 == null)?'grey-2':(socialHarvestAugContents.kpi4 >= '0' && socialHarvestAugContents.kpi4 <= '3.9')?'red':(socialHarvestAugContents.kpi4 > '3.9' && socialHarvestAugContents.kpi4 <= '5.2')?'orange':(socialHarvestAugContents.kpi4 > '5.2' && socialHarvestAugContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAugContents.kpi4 >= '6.5' && socialHarvestAugContents.kpi4 < '7.8')?'green':(socialHarvestAugContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi5 == null)?'grey-2':(socialHarvestAugContents.kpi5 >= '0' && socialHarvestAugContents.kpi5 <= '2.2227')?'red':(socialHarvestAugContents.kpi5 > '2.2227' && socialHarvestAugContents.kpi5 <= '2.9636')?'orange':(socialHarvestAugContents.kpi5 > '2.9636' && socialHarvestAugContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAugContents.kpi5 >= '3.7045' && socialHarvestAugContents.kpi5 < '4.4454')?'green':(socialHarvestAugContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestSepContents.kpi1 == null)?'grey-2':(socialHarvestSepContents.kpi1 >= '0' && socialHarvestSepContents.kpi1 <= '3.75')?'red':(socialHarvestSepContents.kpi1 > '3.75' && socialHarvestSepContents.kpi1 <= '5')?'orange':(socialHarvestSepContents.kpi1 > '5' && socialHarvestSepContents.kpi1 < '6.25')?'yellow-7':(socialHarvestSepContents.kpi1 >= '6.25' && socialHarvestSepContents.kpi1 < '7.5')?'green':(socialHarvestSepContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi2 == null)?'grey-2':(socialHarvestSepContents.kpi2 >= '0' && socialHarvestSepContents.kpi2 <= '60.6')?'red':(socialHarvestSepContents.kpi2 > '60.6' && socialHarvestSepContents.kpi2 <= '80.8')?'orange':(socialHarvestSepContents.kpi2 > '80.8' && socialHarvestSepContents.kpi2 < '101')?'yellow-7':(socialHarvestSepContents.kpi2 >= '101' && socialHarvestSepContents.kpi2 < '121.2')?'green':(socialHarvestSepContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi3 == null)?'grey-2':(socialHarvestSepContents.kpi3 >= '0' && socialHarvestSepContents.kpi3 <= '18.75')?'red':(socialHarvestSepContents.kpi3 > '18.75' && socialHarvestSepContents.kpi3 <= '25')?'orange':(socialHarvestSepContents.kpi3 > '25' && socialHarvestSepContents.kpi3 < '31.25')?'yellow-7':(socialHarvestSepContents.kpi3 >= '31.25' && socialHarvestSepContents.kpi3 < '37.5')?'green':(socialHarvestSepContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi4 == null)?'grey-2':(socialHarvestSepContents.kpi4 >= '0' && socialHarvestSepContents.kpi4 <= '3.9')?'red':(socialHarvestSepContents.kpi4 > '3.9' && socialHarvestSepContents.kpi4 <= '5.2')?'orange':(socialHarvestSepContents.kpi4 > '5.2' && socialHarvestSepContents.kpi4 < '6.5')?'yellow-7':(socialHarvestSepContents.kpi4 >= '6.5' && socialHarvestSepContents.kpi4 < '7.8')?'green':(socialHarvestSepContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi5 == null)?'grey-2':(socialHarvestSepContents.kpi5 >= '0' && socialHarvestSepContents.kpi5 <= '2.2227')?'red':(socialHarvestSepContents.kpi5 > '2.2227' && socialHarvestSepContents.kpi5 <= '2.9636')?'orange':(socialHarvestSepContents.kpi5 > '2.9636' && socialHarvestSepContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestSepContents.kpi5 >= '3.7045' && socialHarvestSepContents.kpi5 < '4.4454')?'green':(socialHarvestSepContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestOctContents.kpi1 == null)?'grey-2':(socialHarvestOctContents.kpi1 >= '0' && socialHarvestOctContents.kpi1 <= '3.75')?'red':(socialHarvestOctContents.kpi1 > '3.75' && socialHarvestOctContents.kpi1 <= '5')?'orange':(socialHarvestOctContents.kpi1 > '5' && socialHarvestOctContents.kpi1 < '6.25')?'yellow-7':(socialHarvestOctContents.kpi1 >= '6.25' && socialHarvestOctContents.kpi1 < '7.5')?'green':(socialHarvestOctContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi2 == null)?'grey-2':(socialHarvestOctContents.kpi2 >= '0' && socialHarvestOctContents.kpi2 <= '60.6')?'red':(socialHarvestOctContents.kpi2 > '60.6' && socialHarvestOctContents.kpi2 <= '80.8')?'orange':(socialHarvestOctContents.kpi2 > '80.8' && socialHarvestOctContents.kpi2 < '101')?'yellow-7':(socialHarvestOctContents.kpi2 >= '101' && socialHarvestOctContents.kpi2 < '121.2')?'green':(socialHarvestOctContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi3 == null)?'grey-2':(socialHarvestOctContents.kpi3 >= '0' && socialHarvestOctContents.kpi3 <= '18.75')?'red':(socialHarvestOctContents.kpi3 > '18.75' && socialHarvestOctContents.kpi3 <= '25')?'orange':(socialHarvestOctContents.kpi3 > '25' && socialHarvestOctContents.kpi3 < '31.25')?'yellow-7':(socialHarvestOctContents.kpi3 >= '31.25' && socialHarvestOctContents.kpi3 < '37.5')?'green':(socialHarvestOctContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi4 == null)?'grey-2':(socialHarvestOctContents.kpi4 >= '0' && socialHarvestOctContents.kpi4 <= '3.9')?'red':(socialHarvestOctContents.kpi4 > '3.9' && socialHarvestOctContents.kpi4 <= '5.2')?'orange':(socialHarvestOctContents.kpi4 > '5.2' && socialHarvestOctContents.kpi4 < '6.5')?'yellow-7':(socialHarvestOctContents.kpi4 >= '6.5' && socialHarvestOctContents.kpi4 < '7.8')?'green':(socialHarvestOctContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi5 == null)?'grey-2':(socialHarvestOctContents.kpi5 >= '0' && socialHarvestOctContents.kpi5 <= '2.2227')?'red':(socialHarvestOctContents.kpi5 > '2.2227' && socialHarvestOctContents.kpi5 <= '2.9636')?'orange':(socialHarvestOctContents.kpi5 > '2.9636' && socialHarvestOctContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestOctContents.kpi5 >= '3.7045' && socialHarvestOctContents.kpi5 < '4.4454')?'green':(socialHarvestOctContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestNovContents.kpi1 == null)?'grey-2':(socialHarvestNovContents.kpi1 >= '0' && socialHarvestNovContents.kpi1 <= '3.75')?'red':(socialHarvestNovContents.kpi1 > '3.75' && socialHarvestNovContents.kpi1 <= '5')?'orange':(socialHarvestNovContents.kpi1 > '5' && socialHarvestNovContents.kpi1 < '6.25')?'yellow-7':(socialHarvestNovContents.kpi1 >= '6.25' && socialHarvestNovContents.kpi1 < '7.5')?'green':(socialHarvestNovContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi2 == null)?'grey-2':(socialHarvestNovContents.kpi2 >= '0' && socialHarvestNovContents.kpi2 <= '60.6')?'red':(socialHarvestNovContents.kpi2 > '60.6' && socialHarvestNovContents.kpi2 <= '80.8')?'orange':(socialHarvestNovContents.kpi2 > '80.8' && socialHarvestNovContents.kpi2 < '101')?'yellow-7':(socialHarvestNovContents.kpi2 >= '101' && socialHarvestNovContents.kpi2 < '121.2')?'green':(socialHarvestNovContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi3 == null)?'grey-2':(socialHarvestNovContents.kpi3 >= '0' && socialHarvestNovContents.kpi3 <= '18.75')?'red':(socialHarvestNovContents.kpi3 > '18.75' && socialHarvestNovContents.kpi3 <= '25')?'orange':(socialHarvestNovContents.kpi3 > '25' && socialHarvestNovContents.kpi3 < '31.25')?'yellow-7':(socialHarvestNovContents.kpi3 >= '31.25' && socialHarvestNovContents.kpi3 < '37.5')?'green':(socialHarvestNovContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi4 == null)?'grey-2':(socialHarvestNovContents.kpi4 >= '0' && socialHarvestNovContents.kpi4 <= '3.9')?'red':(socialHarvestNovContents.kpi4 > '3.9' && socialHarvestNovContents.kpi4 <= '5.2')?'orange':(socialHarvestNovContents.kpi4 > '5.2' && socialHarvestNovContents.kpi4 < '6.5')?'yellow-7':(socialHarvestNovContents.kpi4 >= '6.5' && socialHarvestNovContents.kpi4 < '7.8')?'green':(socialHarvestNovContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi5 == null)?'grey-2':(socialHarvestNovContents.kpi5 >= '0' && socialHarvestNovContents.kpi5 <= '2.2227')?'red':(socialHarvestNovContents.kpi5 > '2.2227' && socialHarvestNovContents.kpi5 <= '2.9636')?'orange':(socialHarvestNovContents.kpi5 > '2.9636' && socialHarvestNovContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestNovContents.kpi5 >= '3.7045' && socialHarvestNovContents.kpi5 < '4.4454')?'green':(socialHarvestNovContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestDecContents.kpi1 == null)?'grey-2':(socialHarvestDecContents.kpi1 >= '0' && socialHarvestDecContents.kpi1 <= '3.75')?'red':(socialHarvestDecContents.kpi1 > '3.75' && socialHarvestDecContents.kpi1 <= '5')?'orange':(socialHarvestDecContents.kpi1 > '5' && socialHarvestDecContents.kpi1 < '6.25')?'yellow-7':(socialHarvestDecContents.kpi1 >= '6.25' && socialHarvestDecContents.kpi1 < '7.5')?'green':(socialHarvestDecContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi2 == null)?'grey-2':(socialHarvestDecContents.kpi2 >= '0' && socialHarvestDecContents.kpi2 <= '60.6')?'red':(socialHarvestDecContents.kpi2 > '60.6' && socialHarvestDecContents.kpi2 <= '80.8')?'orange':(socialHarvestDecContents.kpi2 > '80.8' && socialHarvestDecContents.kpi2 < '101')?'yellow-7':(socialHarvestDecContents.kpi2 >= '101' && socialHarvestDecContents.kpi2 < '121.2')?'green':(socialHarvestDecContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi3 == null)?'grey-2':(socialHarvestDecContents.kpi3 >= '0' && socialHarvestDecContents.kpi3 <= '18.75')?'red':(socialHarvestDecContents.kpi3 > '18.75' && socialHarvestDecContents.kpi3 <= '25')?'orange':(socialHarvestDecContents.kpi3 > '25' && socialHarvestDecContents.kpi3 < '31.25')?'yellow-7':(socialHarvestDecContents.kpi3 >= '31.25' && socialHarvestDecContents.kpi3 < '37.5')?'green':(socialHarvestDecContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi4 == null)?'grey-2':(socialHarvestDecContents.kpi4 >= '0' && socialHarvestDecContents.kpi4 <= '3.9')?'red':(socialHarvestDecContents.kpi4 > '3.9' && socialHarvestDecContents.kpi4 <= '5.2')?'orange':(socialHarvestDecContents.kpi4 > '5.2' && socialHarvestDecContents.kpi4 < '6.5')?'yellow-7':(socialHarvestDecContents.kpi4 >= '6.5' && socialHarvestDecContents.kpi4 < '7.8')?'green':(socialHarvestDecContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi5 == null)?'grey-2':(socialHarvestDecContents.kpi5 >= '0' && socialHarvestDecContents.kpi5 <= '2.2227')?'red':(socialHarvestDecContents.kpi5 > '2.2227' && socialHarvestDecContents.kpi5 <= '2.9636')?'orange':(socialHarvestDecContents.kpi5 > '2.9636' && socialHarvestDecContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestDecContents.kpi5 >= '3.7045' && socialHarvestDecContents.kpi5 < '4.4454')?'green':(socialHarvestDecContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                                <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJanContents.kpi1 == null)?'grey-2':(socialHarvestJanContents.kpi1 >= '0' && socialHarvestJanContents.kpi1 <= '3.75')?'red':(socialHarvestJanContents.kpi1 > '3.75' && socialHarvestJanContents.kpi1 <= '5')?'orange':(socialHarvestJanContents.kpi1 > '5' && socialHarvestJanContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJanContents.kpi1 >= '6.25' && socialHarvestJanContents.kpi1 < '7.5')?'green':(socialHarvestJanContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi2 == null)?'grey-2':(socialHarvestJanContents.kpi2 >= '0' && socialHarvestJanContents.kpi2 <= '60.6')?'red':(socialHarvestJanContents.kpi2 > '60.6' && socialHarvestJanContents.kpi2 <= '80.8')?'orange':(socialHarvestJanContents.kpi2 > '80.8' && socialHarvestJanContents.kpi2 < '101')?'yellow-7':(socialHarvestJanContents.kpi2 >= '101' && socialHarvestJanContents.kpi2 < '121.2')?'green':(socialHarvestJanContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi3 == null)?'grey-2':(socialHarvestJanContents.kpi3 >= '0' && socialHarvestJanContents.kpi3 <= '18.75')?'red':(socialHarvestJanContents.kpi3 > '18.75' && socialHarvestJanContents.kpi3 <= '25')?'orange':(socialHarvestJanContents.kpi3 > '25' && socialHarvestJanContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJanContents.kpi3 >= '31.25' && socialHarvestJanContents.kpi3 < '37.5')?'green':(socialHarvestJanContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi4 == null)?'grey-2':(socialHarvestJanContents.kpi4 >= '0' && socialHarvestJanContents.kpi4 <= '3.9')?'red':(socialHarvestJanContents.kpi4 > '3.9' && socialHarvestJanContents.kpi4 <= '5.2')?'orange':(socialHarvestJanContents.kpi4 > '5.2' && socialHarvestJanContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJanContents.kpi4 >= '6.5' && socialHarvestJanContents.kpi4 < '7.8')?'green':(socialHarvestJanContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJanContents.kpi5 == null)?'grey-2':(socialHarvestJanContents.kpi5 >= '0' && socialHarvestJanContents.kpi5 <= '2.2227')?'red':(socialHarvestJanContents.kpi5 > '2.2227' && socialHarvestJanContents.kpi5 <= '2.9636')?'orange':(socialHarvestJanContents.kpi5 > '2.9636' && socialHarvestJanContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJanContents.kpi5 >= '3.7045' && socialHarvestJanContents.kpi5 < '4.4454')?'green':(socialHarvestJanContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJanContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestFebContents.kpi1 == null)?'grey-2':(socialHarvestFebContents.kpi1 >= '0' && socialHarvestFebContents.kpi1 <= '3.75')?'red':(socialHarvestFebContents.kpi1 > '3.75' && socialHarvestFebContents.kpi1 <= '5')?'orange':(socialHarvestFebContents.kpi1 > '5' && socialHarvestFebContents.kpi1 < '6.25')?'yellow-7':(socialHarvestFebContents.kpi1 >= '6.25' && socialHarvestFebContents.kpi1 < '7.5')?'green':(socialHarvestFebContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi2 == null)?'grey-2':(socialHarvestFebContents.kpi2 >= '0' && socialHarvestFebContents.kpi2 <= '60.6')?'red':(socialHarvestFebContents.kpi2 > '60.6' && socialHarvestFebContents.kpi2 <= '80.8')?'orange':(socialHarvestFebContents.kpi2 > '80.8' && socialHarvestFebContents.kpi2 < '101')?'yellow-7':(socialHarvestFebContents.kpi2 >= '101' && socialHarvestFebContents.kpi2 < '121.2')?'green':(socialHarvestFebContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi3 == null)?'grey-2':(socialHarvestFebContents.kpi3 >= '0' && socialHarvestFebContents.kpi3 <= '18.75')?'red':(socialHarvestFebContents.kpi3 > '18.75' && socialHarvestFebContents.kpi3 <= '25')?'orange':(socialHarvestFebContents.kpi3 > '25' && socialHarvestFebContents.kpi3 < '31.25')?'yellow-7':(socialHarvestFebContents.kpi3 >= '31.25' && socialHarvestFebContents.kpi3 < '37.5')?'green':(socialHarvestFebContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi4 == null)?'grey-2':(socialHarvestFebContents.kpi4 >= '0' && socialHarvestFebContents.kpi4 <= '3.9')?'red':(socialHarvestFebContents.kpi4 > '3.9' && socialHarvestFebContents.kpi4 <= '5.2')?'orange':(socialHarvestFebContents.kpi4 > '5.2' && socialHarvestFebContents.kpi4 < '6.5')?'yellow-7':(socialHarvestFebContents.kpi4 >= '6.5' && socialHarvestFebContents.kpi4 < '7.8')?'green':(socialHarvestFebContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestFebContents.kpi5 == null)?'grey-2':(socialHarvestFebContents.kpi5 >= '0' && socialHarvestFebContents.kpi5 <= '2.2227')?'red':(socialHarvestFebContents.kpi5 > '2.2227' && socialHarvestFebContents.kpi5 <= '2.9636')?'orange':(socialHarvestFebContents.kpi5 > '2.9636' && socialHarvestFebContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestFebContents.kpi5 >= '3.7045' && socialHarvestFebContents.kpi5 < '4.4454')?'green':(socialHarvestFebContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestFebContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMarContents.kpi1 == null)?'grey-2':(socialHarvestMarContents.kpi1 >= '0' && socialHarvestMarContents.kpi1 <= '3.75')?'red':(socialHarvestMarContents.kpi1 > '3.75' && socialHarvestMarContents.kpi1 <= '5')?'orange':(socialHarvestMarContents.kpi1 > '5' && socialHarvestMarContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMarContents.kpi1 >= '6.25' && socialHarvestMarContents.kpi1 < '7.5')?'green':(socialHarvestMarContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi2 == null)?'grey-2':(socialHarvestMarContents.kpi2 >= '0' && socialHarvestMarContents.kpi2 <= '60.6')?'red':(socialHarvestMarContents.kpi2 > '60.6' && socialHarvestMarContents.kpi2 <= '80.8')?'orange':(socialHarvestMarContents.kpi2 > '80.8' && socialHarvestMarContents.kpi2 < '101')?'yellow-7':(socialHarvestMarContents.kpi2 >= '101' && socialHarvestMarContents.kpi2 < '121.2')?'green':(socialHarvestMarContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi3 == null)?'grey-2':(socialHarvestMarContents.kpi3 >= '0' && socialHarvestMarContents.kpi3 <= '18.75')?'red':(socialHarvestMarContents.kpi3 > '18.75' && socialHarvestMarContents.kpi3 <= '25')?'orange':(socialHarvestMarContents.kpi3 > '25' && socialHarvestMarContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMarContents.kpi3 >= '31.25' && socialHarvestMarContents.kpi3 < '37.5')?'green':(socialHarvestMarContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi4 == null)?'grey-2':(socialHarvestMarContents.kpi4 >= '0' && socialHarvestMarContents.kpi4 <= '3.9')?'red':(socialHarvestMarContents.kpi4 > '3.9' && socialHarvestMarContents.kpi4 <= '5.2')?'orange':(socialHarvestMarContents.kpi4 > '5.2' && socialHarvestMarContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMarContents.kpi4 >= '6.5' && socialHarvestMarContents.kpi4 < '7.8')?'green':(socialHarvestMarContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMarContents.kpi5 == null)?'grey-2':(socialHarvestMarContents.kpi5 >= '0' && socialHarvestMarContents.kpi5 <= '2.2227')?'red':(socialHarvestMarContents.kpi5 > '2.2227' && socialHarvestMarContents.kpi5 <= '2.9636')?'orange':(socialHarvestMarContents.kpi5 > '2.9636' && socialHarvestMarContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMarContents.kpi5 >= '3.7045' && socialHarvestMarContents.kpi5 < '4.4454')?'green':(socialHarvestMarContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMarContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAprContents.kpi1 == null)?'grey-2':(socialHarvestAprContents.kpi1 >= '0' && socialHarvestAprContents.kpi1 <= '3.75')?'red':(socialHarvestAprContents.kpi1 > '3.75' && socialHarvestAprContents.kpi1 <= '5')?'orange':(socialHarvestAprContents.kpi1 > '5' && socialHarvestAprContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAprContents.kpi1 >= '6.25' && socialHarvestAprContents.kpi1 < '7.5')?'green':(socialHarvestAprContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi2 == null)?'grey-2':(socialHarvestAprContents.kpi2 >= '0' && socialHarvestAprContents.kpi2 <= '60.6')?'red':(socialHarvestAprContents.kpi2 > '60.6' && socialHarvestAprContents.kpi2 <= '80.8')?'orange':(socialHarvestAprContents.kpi2 > '80.8' && socialHarvestAprContents.kpi2 < '101')?'yellow-7':(socialHarvestAprContents.kpi2 >= '101' && socialHarvestAprContents.kpi2 < '121.2')?'green':(socialHarvestAprContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi3 == null)?'grey-2':(socialHarvestAprContents.kpi3 >= '0' && socialHarvestAprContents.kpi3 <= '18.75')?'red':(socialHarvestAprContents.kpi3 > '18.75' && socialHarvestAprContents.kpi3 <= '25')?'orange':(socialHarvestAprContents.kpi3 > '25' && socialHarvestAprContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAprContents.kpi3 >= '31.25' && socialHarvestAprContents.kpi3 < '37.5')?'green':(socialHarvestAprContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi4 == null)?'grey-2':(socialHarvestAprContents.kpi4 >= '0' && socialHarvestAprContents.kpi4 <= '3.9')?'red':(socialHarvestAprContents.kpi4 > '3.9' && socialHarvestAprContents.kpi4 <= '5.2')?'orange':(socialHarvestAprContents.kpi4 > '5.2' && socialHarvestAprContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAprContents.kpi4 >= '6.5' && socialHarvestAprContents.kpi4 < '7.8')?'green':(socialHarvestAprContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAprContents.kpi5 == null)?'grey-2':(socialHarvestAprContents.kpi5 >= '0' && socialHarvestAprContents.kpi5 <= '2.2227')?'red':(socialHarvestAprContents.kpi5 > '2.2227' && socialHarvestAprContents.kpi5 <= '2.9636')?'orange':(socialHarvestAprContents.kpi5 > '2.9636' && socialHarvestAprContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAprContents.kpi5 >= '3.7045' && socialHarvestAprContents.kpi5 < '4.4454')?'green':(socialHarvestAprContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAprContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestMayContents.kpi1 == null)?'grey-2':(socialHarvestMayContents.kpi1 >= '0' && socialHarvestMayContents.kpi1 <= '3.75')?'red':(socialHarvestMayContents.kpi1 > '3.75' && socialHarvestMayContents.kpi1 <= '5')?'orange':(socialHarvestMayContents.kpi1 > '5' && socialHarvestMayContents.kpi1 < '6.25')?'yellow-7':(socialHarvestMayContents.kpi1 >= '6.25' && socialHarvestMayContents.kpi1 < '7.5')?'green':(socialHarvestMayContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi2 == null)?'grey-2':(socialHarvestMayContents.kpi2 >= '0' && socialHarvestMayContents.kpi2 <= '60.6')?'red':(socialHarvestMayContents.kpi2 > '60.6' && socialHarvestMayContents.kpi2 <= '80.8')?'orange':(socialHarvestMayContents.kpi2 > '80.8' && socialHarvestMayContents.kpi2 < '101')?'yellow-7':(socialHarvestMayContents.kpi2 >= '101' && socialHarvestMayContents.kpi2 < '121.2')?'green':(socialHarvestMayContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi3 == null)?'grey-2':(socialHarvestMayContents.kpi3 >= '0' && socialHarvestMayContents.kpi3 <= '18.75')?'red':(socialHarvestMayContents.kpi3 > '18.75' && socialHarvestMayContents.kpi3 <= '25')?'orange':(socialHarvestMayContents.kpi3 > '25' && socialHarvestMayContents.kpi3 < '31.25')?'yellow-7':(socialHarvestMayContents.kpi3 >= '31.25' && socialHarvestMayContents.kpi3 < '37.5')?'green':(socialHarvestMayContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi4 == null)?'grey-2':(socialHarvestMayContents.kpi4 >= '0' && socialHarvestMayContents.kpi4 <= '3.9')?'red':(socialHarvestMayContents.kpi4 > '3.9' && socialHarvestMayContents.kpi4 <= '5.2')?'orange':(socialHarvestMayContents.kpi4 > '5.2' && socialHarvestMayContents.kpi4 < '6.5')?'yellow-7':(socialHarvestMayContents.kpi4 >= '6.5' && socialHarvestMayContents.kpi4 < '7.8')?'green':(socialHarvestMayContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestMayContents.kpi5 == null)?'grey-2':(socialHarvestMayContents.kpi5 >= '0' && socialHarvestMayContents.kpi5 <= '2.2227')?'red':(socialHarvestMayContents.kpi5 > '2.2227' && socialHarvestMayContents.kpi5 <= '2.9636')?'orange':(socialHarvestMayContents.kpi5 > '2.9636' && socialHarvestMayContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestMayContents.kpi5 >= '3.7045' && socialHarvestMayContents.kpi5 < '4.4454')?'green':(socialHarvestMayContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestMayContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJunContents.kpi1 == null)?'grey-2':(socialHarvestJunContents.kpi1 >= '0' && socialHarvestJunContents.kpi1 <= '3.75')?'red':(socialHarvestJunContents.kpi1 > '3.75' && socialHarvestJunContents.kpi1 <= '5')?'orange':(socialHarvestJunContents.kpi1 > '5' && socialHarvestJunContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJunContents.kpi1 >= '6.25' && socialHarvestJunContents.kpi1 < '7.5')?'green':(socialHarvestJunContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi2 == null)?'grey-2':(socialHarvestJunContents.kpi2 >= '0' && socialHarvestJunContents.kpi2 <= '60.6')?'red':(socialHarvestJunContents.kpi2 > '60.6' && socialHarvestJunContents.kpi2 <= '80.8')?'orange':(socialHarvestJunContents.kpi2 > '80.8' && socialHarvestJunContents.kpi2 < '101')?'yellow-7':(socialHarvestJunContents.kpi2 >= '101' && socialHarvestJunContents.kpi2 < '121.2')?'green':(socialHarvestJunContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi3 == null)?'grey-2':(socialHarvestJunContents.kpi3 >= '0' && socialHarvestJunContents.kpi3 <= '18.75')?'red':(socialHarvestJunContents.kpi3 > '18.75' && socialHarvestJunContents.kpi3 <= '25')?'orange':(socialHarvestJunContents.kpi3 > '25' && socialHarvestJunContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJunContents.kpi3 >= '31.25' && socialHarvestJunContents.kpi3 < '37.5')?'green':(socialHarvestJunContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi4 == null)?'grey-2':(socialHarvestJunContents.kpi4 >= '0' && socialHarvestJunContents.kpi4 <= '3.9')?'red':(socialHarvestJunContents.kpi4 > '3.9' && socialHarvestJunContents.kpi4 <= '5.2')?'orange':(socialHarvestJunContents.kpi4 > '5.2' && socialHarvestJunContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJunContents.kpi4 >= '6.5' && socialHarvestJunContents.kpi4 < '7.8')?'green':(socialHarvestJunContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJunContents.kpi5 == null)?'grey-2':(socialHarvestJunContents.kpi5 >= '0' && socialHarvestJunContents.kpi5 <= '2.2227')?'red':(socialHarvestJunContents.kpi5 > '2.2227' && socialHarvestJunContents.kpi5 <= '2.9636')?'orange':(socialHarvestJunContents.kpi5 > '2.9636' && socialHarvestJunContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJunContents.kpi5 >= '3.7045' && socialHarvestJunContents.kpi5 < '4.4454')?'green':(socialHarvestJunContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJunContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestJulContents.kpi1 == null)?'grey-2':(socialHarvestJulContents.kpi1 >= '0' && socialHarvestJulContents.kpi1 <= '3.75')?'red':(socialHarvestJulContents.kpi1 > '3.75' && socialHarvestJulContents.kpi1 <= '5')?'orange':(socialHarvestJulContents.kpi1 > '5' && socialHarvestJulContents.kpi1 < '6.25')?'yellow-7':(socialHarvestJulContents.kpi1 >= '6.25' && socialHarvestJulContents.kpi1 < '7.5')?'green':(socialHarvestJulContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi2 == null)?'grey-2':(socialHarvestJulContents.kpi2 >= '0' && socialHarvestJulContents.kpi2 <= '60.6')?'red':(socialHarvestJulContents.kpi2 > '60.6' && socialHarvestJulContents.kpi2 <= '80.8')?'orange':(socialHarvestJulContents.kpi2 > '80.8' && socialHarvestJulContents.kpi2 < '101')?'yellow-7':(socialHarvestJulContents.kpi2 >= '101' && socialHarvestJulContents.kpi2 < '121.2')?'green':(socialHarvestJulContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi3 == null)?'grey-2':(socialHarvestJulContents.kpi3 >= '0' && socialHarvestJulContents.kpi3 <= '18.75')?'red':(socialHarvestJulContents.kpi3 > '18.75' && socialHarvestJulContents.kpi3 <= '25')?'orange':(socialHarvestJulContents.kpi3 > '25' && socialHarvestJulContents.kpi3 < '31.25')?'yellow-7':(socialHarvestJulContents.kpi3 >= '31.25' && socialHarvestJulContents.kpi3 < '37.5')?'green':(socialHarvestJulContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi4 == null)?'grey-2':(socialHarvestJulContents.kpi4 >= '0' && socialHarvestJulContents.kpi4 <= '3.9')?'red':(socialHarvestJulContents.kpi4 > '3.9' && socialHarvestJulContents.kpi4 <= '5.2')?'orange':(socialHarvestJulContents.kpi4 > '5.2' && socialHarvestJulContents.kpi4 < '6.5')?'yellow-7':(socialHarvestJulContents.kpi4 >= '6.5' && socialHarvestJulContents.kpi4 < '7.8')?'green':(socialHarvestJulContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestJulContents.kpi5 == null)?'grey-2':(socialHarvestJulContents.kpi5 >= '0' && socialHarvestJulContents.kpi5 <= '2.2227')?'red':(socialHarvestJulContents.kpi5 > '2.2227' && socialHarvestJulContents.kpi5 <= '2.9636')?'orange':(socialHarvestJulContents.kpi5 > '2.9636' && socialHarvestJulContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestJulContents.kpi5 >= '3.7045' && socialHarvestJulContents.kpi5 < '4.4454')?'green':(socialHarvestJulContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestJulContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestAugContents.kpi1 == null)?'grey-2':(socialHarvestAugContents.kpi1 >= '0' && socialHarvestAugContents.kpi1 <= '3.75')?'red':(socialHarvestAugContents.kpi1 > '3.75' && socialHarvestAugContents.kpi1 <= '5')?'orange':(socialHarvestAugContents.kpi1 > '5' && socialHarvestAugContents.kpi1 < '6.25')?'yellow-7':(socialHarvestAugContents.kpi1 >= '6.25' && socialHarvestAugContents.kpi1 < '7.5')?'green':(socialHarvestAugContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi2 == null)?'grey-2':(socialHarvestAugContents.kpi2 >= '0' && socialHarvestAugContents.kpi2 <= '60.6')?'red':(socialHarvestAugContents.kpi2 > '60.6' && socialHarvestAugContents.kpi2 <= '80.8')?'orange':(socialHarvestAugContents.kpi2 > '80.8' && socialHarvestAugContents.kpi2 < '101')?'yellow-7':(socialHarvestAugContents.kpi2 >= '101' && socialHarvestAugContents.kpi2 < '121.2')?'green':(socialHarvestAugContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi3 == null)?'grey-2':(socialHarvestAugContents.kpi3 >= '0' && socialHarvestAugContents.kpi3 <= '18.75')?'red':(socialHarvestAugContents.kpi3 > '18.75' && socialHarvestAugContents.kpi3 <= '25')?'orange':(socialHarvestAugContents.kpi3 > '25' && socialHarvestAugContents.kpi3 < '31.25')?'yellow-7':(socialHarvestAugContents.kpi3 >= '31.25' && socialHarvestAugContents.kpi3 < '37.5')?'green':(socialHarvestAugContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi4 == null)?'grey-2':(socialHarvestAugContents.kpi4 >= '0' && socialHarvestAugContents.kpi4 <= '3.9')?'red':(socialHarvestAugContents.kpi4 > '3.9' && socialHarvestAugContents.kpi4 <= '5.2')?'orange':(socialHarvestAugContents.kpi4 > '5.2' && socialHarvestAugContents.kpi4 < '6.5')?'yellow-7':(socialHarvestAugContents.kpi4 >= '6.5' && socialHarvestAugContents.kpi4 < '7.8')?'green':(socialHarvestAugContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestAugContents.kpi5 == null)?'grey-2':(socialHarvestAugContents.kpi5 >= '0' && socialHarvestAugContents.kpi5 <= '2.2227')?'red':(socialHarvestAugContents.kpi5 > '2.2227' && socialHarvestAugContents.kpi5 <= '2.9636')?'orange':(socialHarvestAugContents.kpi5 > '2.9636' && socialHarvestAugContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestAugContents.kpi5 >= '3.7045' && socialHarvestAugContents.kpi5 < '4.4454')?'green':(socialHarvestAugContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestAugContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestSepContents.kpi1 == null)?'grey-2':(socialHarvestSepContents.kpi1 >= '0' && socialHarvestSepContents.kpi1 <= '3.75')?'red':(socialHarvestSepContents.kpi1 > '3.75' && socialHarvestSepContents.kpi1 <= '5')?'orange':(socialHarvestSepContents.kpi1 > '5' && socialHarvestSepContents.kpi1 < '6.25')?'yellow-7':(socialHarvestSepContents.kpi1 >= '6.25' && socialHarvestSepContents.kpi1 < '7.5')?'green':(socialHarvestSepContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi2 == null)?'grey-2':(socialHarvestSepContents.kpi2 >= '0' && socialHarvestSepContents.kpi2 <= '60.6')?'red':(socialHarvestSepContents.kpi2 > '60.6' && socialHarvestSepContents.kpi2 <= '80.8')?'orange':(socialHarvestSepContents.kpi2 > '80.8' && socialHarvestSepContents.kpi2 < '101')?'yellow-7':(socialHarvestSepContents.kpi2 >= '101' && socialHarvestSepContents.kpi2 < '121.2')?'green':(socialHarvestSepContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi3 == null)?'grey-2':(socialHarvestSepContents.kpi3 >= '0' && socialHarvestSepContents.kpi3 <= '18.75')?'red':(socialHarvestSepContents.kpi3 > '18.75' && socialHarvestSepContents.kpi3 <= '25')?'orange':(socialHarvestSepContents.kpi3 > '25' && socialHarvestSepContents.kpi3 < '31.25')?'yellow-7':(socialHarvestSepContents.kpi3 >= '31.25' && socialHarvestSepContents.kpi3 < '37.5')?'green':(socialHarvestSepContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi4 == null)?'grey-2':(socialHarvestSepContents.kpi4 >= '0' && socialHarvestSepContents.kpi4 <= '3.9')?'red':(socialHarvestSepContents.kpi4 > '3.9' && socialHarvestSepContents.kpi4 <= '5.2')?'orange':(socialHarvestSepContents.kpi4 > '5.2' && socialHarvestSepContents.kpi4 < '6.5')?'yellow-7':(socialHarvestSepContents.kpi4 >= '6.5' && socialHarvestSepContents.kpi4 < '7.8')?'green':(socialHarvestSepContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestSepContents.kpi5 == null)?'grey-2':(socialHarvestSepContents.kpi5 >= '0' && socialHarvestSepContents.kpi5 <= '2.2227')?'red':(socialHarvestSepContents.kpi5 > '2.2227' && socialHarvestSepContents.kpi5 <= '2.9636')?'orange':(socialHarvestSepContents.kpi5 > '2.9636' && socialHarvestSepContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestSepContents.kpi5 >= '3.7045' && socialHarvestSepContents.kpi5 < '4.4454')?'green':(socialHarvestSepContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestSepContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestOctContents.kpi1 == null)?'grey-2':(socialHarvestOctContents.kpi1 >= '0' && socialHarvestOctContents.kpi1 <= '3.75')?'red':(socialHarvestOctContents.kpi1 > '3.75' && socialHarvestOctContents.kpi1 <= '5')?'orange':(socialHarvestOctContents.kpi1 > '5' && socialHarvestOctContents.kpi1 < '6.25')?'yellow-7':(socialHarvestOctContents.kpi1 >= '6.25' && socialHarvestOctContents.kpi1 < '7.5')?'green':(socialHarvestOctContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi2 == null)?'grey-2':(socialHarvestOctContents.kpi2 >= '0' && socialHarvestOctContents.kpi2 <= '60.6')?'red':(socialHarvestOctContents.kpi2 > '60.6' && socialHarvestOctContents.kpi2 <= '80.8')?'orange':(socialHarvestOctContents.kpi2 > '80.8' && socialHarvestOctContents.kpi2 < '101')?'yellow-7':(socialHarvestOctContents.kpi2 >= '101' && socialHarvestOctContents.kpi2 < '121.2')?'green':(socialHarvestOctContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi3 == null)?'grey-2':(socialHarvestOctContents.kpi3 >= '0' && socialHarvestOctContents.kpi3 <= '18.75')?'red':(socialHarvestOctContents.kpi3 > '18.75' && socialHarvestOctContents.kpi3 <= '25')?'orange':(socialHarvestOctContents.kpi3 > '25' && socialHarvestOctContents.kpi3 < '31.25')?'yellow-7':(socialHarvestOctContents.kpi3 >= '31.25' && socialHarvestOctContents.kpi3 < '37.5')?'green':(socialHarvestOctContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi4 == null)?'grey-2':(socialHarvestOctContents.kpi4 >= '0' && socialHarvestOctContents.kpi4 <= '3.9')?'red':(socialHarvestOctContents.kpi4 > '3.9' && socialHarvestOctContents.kpi4 <= '5.2')?'orange':(socialHarvestOctContents.kpi4 > '5.2' && socialHarvestOctContents.kpi4 < '6.5')?'yellow-7':(socialHarvestOctContents.kpi4 >= '6.5' && socialHarvestOctContents.kpi4 < '7.8')?'green':(socialHarvestOctContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestOctContents.kpi5 == null)?'grey-2':(socialHarvestOctContents.kpi5 >= '0' && socialHarvestOctContents.kpi5 <= '2.2227')?'red':(socialHarvestOctContents.kpi5 > '2.2227' && socialHarvestOctContents.kpi5 <= '2.9636')?'orange':(socialHarvestOctContents.kpi5 > '2.9636' && socialHarvestOctContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestOctContents.kpi5 >= '3.7045' && socialHarvestOctContents.kpi5 < '4.4454')?'green':(socialHarvestOctContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestOctContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestNovContents.kpi1 == null)?'grey-2':(socialHarvestNovContents.kpi1 >= '0' && socialHarvestNovContents.kpi1 <= '3.75')?'red':(socialHarvestNovContents.kpi1 > '3.75' && socialHarvestNovContents.kpi1 <= '5')?'orange':(socialHarvestNovContents.kpi1 > '5' && socialHarvestNovContents.kpi1 < '6.25')?'yellow-7':(socialHarvestNovContents.kpi1 >= '6.25' && socialHarvestNovContents.kpi1 < '7.5')?'green':(socialHarvestNovContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi2 == null)?'grey-2':(socialHarvestNovContents.kpi2 >= '0' && socialHarvestNovContents.kpi2 <= '60.6')?'red':(socialHarvestNovContents.kpi2 > '60.6' && socialHarvestNovContents.kpi2 <= '80.8')?'orange':(socialHarvestNovContents.kpi2 > '80.8' && socialHarvestNovContents.kpi2 < '101')?'yellow-7':(socialHarvestNovContents.kpi2 >= '101' && socialHarvestNovContents.kpi2 < '121.2')?'green':(socialHarvestNovContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi3 == null)?'grey-2':(socialHarvestNovContents.kpi3 >= '0' && socialHarvestNovContents.kpi3 <= '18.75')?'red':(socialHarvestNovContents.kpi3 > '18.75' && socialHarvestNovContents.kpi3 <= '25')?'orange':(socialHarvestNovContents.kpi3 > '25' && socialHarvestNovContents.kpi3 < '31.25')?'yellow-7':(socialHarvestNovContents.kpi3 >= '31.25' && socialHarvestNovContents.kpi3 < '37.5')?'green':(socialHarvestNovContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi4 == null)?'grey-2':(socialHarvestNovContents.kpi4 >= '0' && socialHarvestNovContents.kpi4 <= '3.9')?'red':(socialHarvestNovContents.kpi4 > '3.9' && socialHarvestNovContents.kpi4 <= '5.2')?'orange':(socialHarvestNovContents.kpi4 > '5.2' && socialHarvestNovContents.kpi4 < '6.5')?'yellow-7':(socialHarvestNovContents.kpi4 >= '6.5' && socialHarvestNovContents.kpi4 < '7.8')?'green':(socialHarvestNovContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestNovContents.kpi5 == null)?'grey-2':(socialHarvestNovContents.kpi5 >= '0' && socialHarvestNovContents.kpi5 <= '2.2227')?'red':(socialHarvestNovContents.kpi5 > '2.2227' && socialHarvestNovContents.kpi5 <= '2.9636')?'orange':(socialHarvestNovContents.kpi5 > '2.9636' && socialHarvestNovContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestNovContents.kpi5 >= '3.7045' && socialHarvestNovContents.kpi5 < '4.4454')?'green':(socialHarvestNovContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestNovContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
                              :color="(socialHarvestDecContents.kpi1 == null)?'grey-2':(socialHarvestDecContents.kpi1 >= '0' && socialHarvestDecContents.kpi1 <= '3.75')?'red':(socialHarvestDecContents.kpi1 > '3.75' && socialHarvestDecContents.kpi1 <= '5')?'orange':(socialHarvestDecContents.kpi1 > '5' && socialHarvestDecContents.kpi1 < '6.25')?'yellow-7':(socialHarvestDecContents.kpi1 >= '6.25' && socialHarvestDecContents.kpi1 < '7.5')?'green':(socialHarvestDecContents.kpi1 >= '7.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi2 == null)?'grey-2':(socialHarvestDecContents.kpi2 >= '0' && socialHarvestDecContents.kpi2 <= '60.6')?'red':(socialHarvestDecContents.kpi2 > '60.6' && socialHarvestDecContents.kpi2 <= '80.8')?'orange':(socialHarvestDecContents.kpi2 > '80.8' && socialHarvestDecContents.kpi2 < '101')?'yellow-7':(socialHarvestDecContents.kpi2 >= '101' && socialHarvestDecContents.kpi2 < '121.2')?'green':(socialHarvestDecContents.kpi2 >= '121.2'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi3 == null)?'grey-2':(socialHarvestDecContents.kpi3 >= '0' && socialHarvestDecContents.kpi3 <= '18.75')?'red':(socialHarvestDecContents.kpi3 > '18.75' && socialHarvestDecContents.kpi3 <= '25')?'orange':(socialHarvestDecContents.kpi3 > '25' && socialHarvestDecContents.kpi3 < '31.25')?'yellow-7':(socialHarvestDecContents.kpi3 >= '31.25' && socialHarvestDecContents.kpi3 < '37.5')?'green':(socialHarvestDecContents.kpi3 >= '37.5'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi4 == null)?'grey-2':(socialHarvestDecContents.kpi4 >= '0' && socialHarvestDecContents.kpi4 <= '3.9')?'red':(socialHarvestDecContents.kpi4 > '3.9' && socialHarvestDecContents.kpi4 <= '5.2')?'orange':(socialHarvestDecContents.kpi4 > '5.2' && socialHarvestDecContents.kpi4 < '6.5')?'yellow-7':(socialHarvestDecContents.kpi4 >= '6.5' && socialHarvestDecContents.kpi4 < '7.8')?'green':(socialHarvestDecContents.kpi4 >= '7.8'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(socialHarvestDecContents.kpi5 == null)?'grey-2':(socialHarvestDecContents.kpi5 >= '0' && socialHarvestDecContents.kpi5 <= '2.2227')?'red':(socialHarvestDecContents.kpi5 > '2.2227' && socialHarvestDecContents.kpi5 <= '2.9636')?'orange':(socialHarvestDecContents.kpi5 > '2.9636' && socialHarvestDecContents.kpi5 < '3.7045')?'yellow-7':(socialHarvestDecContents.kpi5 >= '3.7045' && socialHarvestDecContents.kpi5 < '4.4454')?'green':(socialHarvestDecContents.kpi5 >= '4.4454'?'blue':'grey-2')"
                            >
                            {{socialHarvestDecContents.kpi5}}
                              <q-tooltip>Production Volume (Kg)</q-tooltip>
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
              socialHarvestJanContent: {
                
              },
              socialHarvestJanContents : [],
              socialHarvestFebContent: {
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
              socialHarvestFebContents : [],
              socialHarvestMarContent: {
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
              socialHarvestMarContents : [],
              socialHarvestAprContent: {
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
              socialHarvestAprContents : [],
              socialHarvestMayContent: {
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
              socialHarvestMayContents : [],
              socialHarvestJunContent: {
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
              socialHarvestJunContents : [],
              socialHarvestJulContent: {
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
              socialHarvestJulContents : [],
              socialHarvestAugContent: {
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
              socialHarvestAugContents : [],
              socialHarvestSepContent: {
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
              socialHarvestSepContents : [],
              socialHarvestOctContent: {
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
              socialHarvestOctContents : [],
              socialHarvestNovContent: {
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
              socialHarvestNovContents : [],
              socialHarvestDecContent: {
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
              socialHarvestDecContents : []


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
                            {time_period: 'January', expenses: this.socialHarvestJanContents.expenses, revenues: this.socialHarvestJanContents.revenues},
                            {time_period: 'February', expenses: this.socialHarvestFebContents.expenses, revenues: this.socialHarvestFebContents.revenues},
                            {time_period: 'March', expenses: this.socialHarvestMarContents.expenses, revenues: this.socialHarvestMarContents.revenues},
                            {time_period: 'April', expenses: this.socialHarvestAprContents.expenses, revenues: this.socialHarvestAprContents.revenues},
                            {time_period: 'May', expenses: this.socialHarvestMayContents.expenses, revenues: this.socialHarvestMayContents.revenues},
                            {time_period: 'June', expenses: this.socialHarvestJunContents.expenses, revenues: this.socialHarvestJunContents.revenues},
                            {time_period: 'July', expenses: this.socialHarvestJulContents.expenses, revenues: this.socialHarvestJulContents.revenues},
                            {time_period: 'August', expenses: this.socialHarvestAugContents.expenses, revenues: this.socialHarvestAugContents.revenues},
                            {time_period: 'September', expenses: this.socialHarvestSepContents.expenses, revenues: this.socialHarvestSepContents.revenues},
                            {time_period: 'October', expenses: this.socialHarvestOctContents.expenses, revenues: this.socialHarvestOctContents.revenues},
                            {time_period: 'November', expenses: this.socialHarvestNovContents.expenses, revenues: this.socialHarvestNovContents.revenues},
                            {time_period: 'December',expenses: this.socialHarvestDecContents.expenses, revenues: this.socialHarvestDecContents.revenues }
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
                            {months: 'January', kpi1: this.socialHarvestJanContents.kpi1, kpi2: this.socialHarvestJanContents.kpi2, kpi3: this.socialHarvestJanContents.kpi3, kpi4: this.socialHarvestJanContents.kpi4, kpi5: this.socialHarvestJanContents.kpi5, uniqueVol: this.socialHarvestJanContents.uniqueVolunteers, volHours: this.socialHarvestJanContents.volunteerHours},
                            {months: 'February', kpi1: this.socialHarvestFebContents.kpi1, kpi2: this.socialHarvestFebContents.kpi2, kpi3: this.socialHarvestFebContents.kpi3, kpi4: this.socialHarvestFebContents.kpi4, kpi5: this.socialHarvestFebContents.kpi5, uniqueVol: this.socialHarvestFebContents.uniqueVolunteers, volHours: this.socialHarvestFebContents.volunteerHours},
                            {months: 'March', kpi1: this.socialHarvestMarContents.kpi1, kpi2: this.socialHarvestMarContents.kpi2, kpi3: this.socialHarvestMarContents.kpi3, kpi4: this.socialHarvestMarContents.kpi4, kpi5: this.socialHarvestMarContents.kpi5, uniqueVol: this.socialHarvestMarContents.uniqueVolunteers, volHours: this.socialHarvestMarContents.volunteerHours},
                            {months: 'April', kpi1: this.socialHarvestAprContents.kpi1, kpi2: this.socialHarvestAprContents.kpi2, kpi3: this.socialHarvestAprContents.kpi3, kpi4: this.socialHarvestAprContents.kpi4, kpi5: this.socialHarvestAprContents.kpi5, uniqueVol: this.socialHarvestAprContents.uniqueVolunteers, volHours: this.socialHarvestAprContents.volunteerHours},
                            {months: 'May', kpi1: this.socialHarvestMayContents.kpi1, kpi2: this.socialHarvestMayContents.kpi2, kpi3: this.socialHarvestMayContents.kpi3, kpi4: this.socialHarvestMayContents.kpi4, kpi5: this.socialHarvestMayContents.kpi5, uniqueVol: this.socialHarvestMayContents.uniqueVolunteers, volHours: this.socialHarvestMayContents.volunteerHours},
                            {months: 'June', kpi1: this.socialHarvestJunContents.kpi1, kpi2: this.socialHarvestJunContents.kpi2, kpi3: this.socialHarvestJunContents.kpi3, kpi4: this.socialHarvestJunContents.kpi4, kpi5: this.socialHarvestJunContents.kpi5, uniqueVol: this.socialHarvestJunContents.uniqueVolunteers, volHours: this.socialHarvestJunContents.volunteerHours},
                            {months: 'July', kpi1: this.socialHarvestJulContents.kpi1, kpi2: this.socialHarvestJulContents.kpi2, kpi3: this.socialHarvestJulContents.kpi3, kpi4: this.socialHarvestJulContents.kpi4, kpi5: this.socialHarvestJulContents.kpi5, uniqueVol: this.socialHarvestJulContents.uniqueVolunteers, volHours: this.socialHarvestJulContents.volunteerHours},
                            {months: 'August', kpi1: this.socialHarvestAugContents.kpi1, kpi2: this.socialHarvestAugContents.kpi2, kpi3: this.socialHarvestAugContents.kpi3, kpi4: this.socialHarvestAugContents.kpi4, kpi5: this.socialHarvestAugContents.kpi5, uniqueVol: this.socialHarvestAugContents.uniqueVolunteers, volHours: this.socialHarvestAugContents.volunteerHours},
                            {months: 'September', kpi1: this.socialHarvestSepContents.kpi1, kpi2: this.socialHarvestSepContents.kpi2, kpi3: this.socialHarvestSepContents.kpi3, kpi4: this.socialHarvestSepContents.kpi4, kpi5: this.socialHarvestSepContents.kpi5, uniqueVol: this.socialHarvestSepContents.uniqueVolunteers, volHours: this.socialHarvestSepContents.volunteerHours},
                            {months: 'October', kpi1: this.socialHarvestOctContents.kpi1, kpi2: this.socialHarvestOctContents.kpi2, kpi3: this.socialHarvestOctContents.kpi3, kpi4: this.socialHarvestOctContents.kpi4, kpi5: this.socialHarvestOctContents.kpi5, uniqueVol: this.socialHarvestOctContents.uniqueVolunteers, volHours: this.socialHarvestOctContents.volunteerHours},
                            {months: 'November', kpi1: this.socialHarvestNovContents.kpi1, kpi2: this.socialHarvestNovContents.kpi2, kpi3: this.socialHarvestNovContents.kpi3, kpi4: this.socialHarvestNovContents.kpi4, kpi5: this.socialHarvestNovContents.kpi5, uniqueVol: this.socialHarvestNovContents.uniqueVolunteers, volHours: this.socialHarvestNovContents.volunteerHours},
                            {months: 'December',kpi1: this.socialHarvestDecContents.kpi1, kpi2: this.socialHarvestDecContents.kpi2, kpi3: this.socialHarvestDecContents.kpi3, kpi4: this.socialHarvestDecContents.kpi4, kpi5: this.socialHarvestDecContents.kpi5, uniqueVol: this.socialHarvestDecContents.uniqueVolunteers, volHours: this.socialHarvestDecContents.volunteerHours},
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
                            data: [{value: this.socialHarvestJanContents.budgetUsage}],
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
                                {value: this.socialHarvestJanContents.perCategory1, name: this.socialHarvestJanContents.expenseCategory1},
                                {value: this.socialHarvestJanContents.perCategory2, name: this.socialHarvestJanContents.expenseCategory2},
                                {value: this.socialHarvestJanContents.perCategory3, name: this.socialHarvestJanContents.expenseCategory3},
                                {value: this.socialHarvestJanContents.perCategory4, name: this.socialHarvestJanContents.expenseCategory4},
                                {value: this.socialHarvestJanContents.perCategory5, name: this.socialHarvestJanContents.expenseCategory5},
                                {value: this.socialHarvestJanContents.perCategory6, name: this.socialHarvestJanContents.expenseCategory6}
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
                            data: [{value: this.socialHarvestFebContents.budgetUsage}],
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
                                {value: this.socialHarvestFebContents.perCategory1, name: this.socialHarvestFebContents.expenseCategory1},
                                {value: this.socialHarvestFebContents.perCategory2, name: this.socialHarvestFebContents.expenseCategory2},
                                {value: this.socialHarvestFebContents.perCategory3, name: this.socialHarvestFebContents.expenseCategory3},
                                {value: this.socialHarvestFebContents.perCategory4, name: this.socialHarvestFebContents.expenseCategory4},
                                {value: this.socialHarvestFebContents.perCategory5, name: this.socialHarvestFebContents.expenseCategory5},
                                {value: this.socialHarvestFebContents.perCategory6, name: this.socialHarvestFebContents.expenseCategory6}
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
                            data: [{value: this.socialHarvestMarContents.budgetUsage}],
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
                                {value: this.socialHarvestMarContents.perCategory1, name: this.socialHarvestMarContents.expenseCategory1},
                                {value: this.socialHarvestMarContents.perCategory2, name: this.socialHarvestMarContents.expenseCategory2},
                                {value: this.socialHarvestMarContents.perCategory3, name: this.socialHarvestMarContents.expenseCategory3},
                                {value: this.socialHarvestMarContents.perCategory4, name: this.socialHarvestMarContents.expenseCategory4},
                                {value: this.socialHarvestMarContents.perCategory5, name: this.socialHarvestMarContents.expenseCategory5},
                                {value: this.socialHarvestMarContents.perCategory6, name: this.socialHarvestMarContents.expenseCategory6}
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
                            data: [{value: this.socialHarvestAprContents.budgetUsage}],
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
                                {value: this.socialHarvestAprContents.perCategory1, name: this.socialHarvestAprContents.expenseCategory1},
                                {value: this.socialHarvestAprContents.perCategory2, name: this.socialHarvestAprContents.expenseCategory2},
                                {value: this.socialHarvestAprContents.perCategory3, name: this.socialHarvestAprContents.expenseCategory3},
                                {value: this.socialHarvestAprContents.perCategory4, name: this.socialHarvestAprContents.expenseCategory4},
                                {value: this.socialHarvestAprContents.perCategory5, name: this.socialHarvestAprContents.expenseCategory5},
                                {value: this.socialHarvestAprContents.perCategory6, name: this.socialHarvestAprContents.expenseCategory6}  
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
                            data: [{value: this.socialHarvestMayContents.budgetUsage}],
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
                                {value: this.socialHarvestMayContents.perCategory1, name: this.socialHarvestMayContents.expenseCategory1},
                                {value: this.socialHarvestMayContents.perCategory2, name: this.socialHarvestMayContents.expenseCategory2},
                                {value: this.socialHarvestMayContents.perCategory3, name: this.socialHarvestMayContents.expenseCategory3},
                                {value: this.socialHarvestMayContents.perCategory4, name: this.socialHarvestMayContents.expenseCategory4},
                                {value: this.socialHarvestMayContents.perCategory5, name: this.socialHarvestMayContents.expenseCategory5},
                                {value: this.socialHarvestMayContents.perCategory6, name: this.socialHarvestMayContents.expenseCategory6}  
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
                            data: [{value: this.socialHarvestJunContents.budgetUsage}],
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
                                {value: this.socialHarvestJunContents.perCategory1, name: this.socialHarvestJunContents.expenseCategory1},
                                {value: this.socialHarvestJunContents.perCategory2, name: this.socialHarvestJunContents.expenseCategory2},
                                {value: this.socialHarvestJunContents.perCategory3, name: this.socialHarvestJunContents.expenseCategory3},
                                {value: this.socialHarvestJunContents.perCategory4, name: this.socialHarvestJunContents.expenseCategory4},
                                {value: this.socialHarvestJunContents.perCategory5, name: this.socialHarvestJunContents.expenseCategory5},
                                {value: this.socialHarvestJunContents.perCategory6, name: this.socialHarvestJunContents.expenseCategory6}  
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
                            data: [{value: this.socialHarvestJulContents.budgetUsage}],
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
                                {value: this.socialHarvestJulContents.perCategory1, name: this.socialHarvestJulContents.expenseCategory1},
                                {value: this.socialHarvestJulContents.perCategory2, name: this.socialHarvestJulContents.expenseCategory2},
                                {value: this.socialHarvestJulContents.perCategory3, name: this.socialHarvestJulContents.expenseCategory3},
                                {value: this.socialHarvestJulContents.perCategory4, name: this.socialHarvestJulContents.expenseCategory4},
                                {value: this.socialHarvestJulContents.perCategory5, name: this.socialHarvestJulContents.expenseCategory5},
                                {value: this.socialHarvestJulContents.perCategory6, name: this.socialHarvestJulContents.expenseCategory6}  
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
                            data: [{value: this.socialHarvestAugContents.budgetUsage}],
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
                                {value: this.socialHarvestAugContents.perCategory1, name: this.socialHarvestAugContents.expenseCategory1},
                                {value: this.socialHarvestAugContents.perCategory2, name: this.socialHarvestAugContents.expenseCategory2},
                                {value: this.socialHarvestAugContents.perCategory3, name: this.socialHarvestAugContents.expenseCategory3},
                                {value: this.socialHarvestAugContents.perCategory4, name: this.socialHarvestAugContents.expenseCategory4},
                                {value: this.socialHarvestAugContents.perCategory5, name: this.socialHarvestAugContents.expenseCategory5},
                                {value: this.socialHarvestAugContents.perCategory6, name: this.socialHarvestAugContents.expenseCategory6}  
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
                            data: [{value: this.socialHarvestSepContents.budgetUsage}],
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
                                {value: this.socialHarvestSepContents.perCategory1, name: this.socialHarvestSepContents.expenseCategory1},
                                {value: this.socialHarvestSepContents.perCategory2, name: this.socialHarvestSepContents.expenseCategory2},
                                {value: this.socialHarvestSepContents.perCategory3, name: this.socialHarvestSepContents.expenseCategory3},
                                {value: this.socialHarvestSepContents.perCategory4, name: this.socialHarvestSepContents.expenseCategory4},
                                {value: this.socialHarvestSepContents.perCategory5, name: this.socialHarvestSepContents.expenseCategory5},
                                {value: this.socialHarvestSepContents.perCategory6, name: this.socialHarvestSepContents.expenseCategory6}  
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
                            data: [{value: this.socialHarvestOctContents.budgetUsage}],
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
                                {value: this.socialHarvestOctContents.perCategory1, name: this.socialHarvestOctContents.expenseCategory1},
                                {value: this.socialHarvestOctContents.perCategory2, name: this.socialHarvestOctContents.expenseCategory2},
                                {value: this.socialHarvestOctContents.perCategory3, name: this.socialHarvestOctContents.expenseCategory3},
                                {value: this.socialHarvestOctContents.perCategory4, name: this.socialHarvestOctContents.expenseCategory4},
                                {value: this.socialHarvestOctContents.perCategory5, name: this.socialHarvestOctContents.expenseCategory5},
                                {value: this.socialHarvestOctContents.perCategory6, name: this.socialHarvestOctContents.expenseCategory6}  
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
                            data: [{value: this.socialHarvestNovContents.budgetUsage}],
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
                                {value: this.socialHarvestNovContents.perCategory1, name: this.socialHarvestNovContents.expenseCategory1},
                                {value: this.socialHarvestNovContents.perCategory2, name: this.socialHarvestNovContents.expenseCategory2},
                                {value: this.socialHarvestNovContents.perCategory3, name: this.socialHarvestNovContents.expenseCategory3},
                                {value: this.socialHarvestNovContents.perCategory4, name: this.socialHarvestNovContents.expenseCategory4},
                                {value: this.socialHarvestNovContents.perCategory5, name: this.socialHarvestNovContents.expenseCategory5},
                                {value: this.socialHarvestNovContents.perCategory6, name: this.socialHarvestNovContents.expenseCategory6}  
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
                            data: [{value: this.socialHarvestDecContents.budgetUsage}],
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
                                {value: this.socialHarvestDecContents.perCategory1, name: this.socialHarvestDecContents.expenseCategory1},
                                {value: this.socialHarvestDecContents.perCategory2, name: this.socialHarvestDecContents.expenseCategory2},
                                {value: this.socialHarvestDecContents.perCategory3, name: this.socialHarvestDecContents.expenseCategory3},
                                {value: this.socialHarvestDecContents.perCategory4, name: this.socialHarvestDecContents.expenseCategory4},
                                {value: this.socialHarvestDecContents.perCategory5, name: this.socialHarvestDecContents.expenseCategory5},
                                {value: this.socialHarvestDecContents.perCategory6, name: this.socialHarvestDecContents.expenseCategory6}
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
            var docsocialHarvestJanRef = db.collection("socialHarvest").doc("january");

            docsocialHarvestJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.socialHarvestJanContents = doc.data();
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
            var docsocialHarvestFebRef = db.collection("socialHarvest").doc("february");

            docsocialHarvestFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.socialHarvestFebContents = doc.data();
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
            var docsocialHarvestMarRef = db.collection("socialHarvest").doc("march");

            docsocialHarvestMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.socialHarvestMarContents = doc.data();
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
            var docsocialHarvestAprRef = db.collection("socialHarvest").doc("april1");

            docsocialHarvestAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.socialHarvestAprContents = doc.data();
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
            var docsocialHarvestMayRef = db.collection("socialHarvest").doc("may");

            docsocialHarvestMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.socialHarvestMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docsocialHarvestJunRef = db.collection("socialHarvest").doc("june");

            docsocialHarvestJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.socialHarvestJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docsocialHarvestJulRef = db.collection("socialHarvest").doc("july");

            docsocialHarvestJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.socialHarvestJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docsocialHarvestAugRef = db.collection("socialHarvest").doc("august");

            docsocialHarvestAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.socialHarvestAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docsocialHarvestSepRef = db.collection("socialHarvest").doc("september");

            docsocialHarvestSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.socialHarvestSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docsocialHarvestOctRef = db.collection("socialHarvest").doc("october");

            docsocialHarvestOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.socialHarvestOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docsocialHarvestNovRef = db.collection("socialHarvest").doc("november");

            docsocialHarvestNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.socialHarvestNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docsocialHarvestDecRef = db.collection("socialHarvest").doc("december");

            docsocialHarvestDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.socialHarvestDecContents = doc.data();
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
              return this.socialHarvestJanContents.expenses = getRealValue(this.socialHarvestJanContents.perCategory1) + getRealValue(this.socialHarvestJanContents.perCategory2) + getRealValue(this.socialHarvestJanContents.perCategory3) + getRealValue(this.socialHarvestJanContents.perCategory4) + getRealValue(this.socialHarvestJanContents.perCategory5) + getRealValue(this.socialHarvestJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestJanContents.budgetUsage = ((getRealValue(this.socialHarvestJanContents.expenses) / getRealValue(this.socialHarvestJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestFebContents.expenses = getRealValue(this.socialHarvestFebContents.perCategory1) + getRealValue(this.socialHarvestFebContents.perCategory2) + getRealValue(this.socialHarvestFebContents.perCategory3) + getRealValue(this.socialHarvestFebContents.perCategory4) + getRealValue(this.socialHarvestFebContents.perCategory5) + getRealValue(this.socialHarvestFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestFebContents.budgetUsage = (((getRealValue(this.socialHarvestFebContents.expenses) + getRealValue(this.socialHarvestJanContents.expenses)) / getRealValue(this.socialHarvestFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestMarContents.expenses = getRealValue(this.socialHarvestMarContents.perCategory1) + getRealValue(this.socialHarvestMarContents.perCategory2) + getRealValue(this.socialHarvestMarContents.perCategory3) + getRealValue(this.socialHarvestMarContents.perCategory4) + getRealValue(this.socialHarvestMarContents.perCategory5) + getRealValue(this.socialHarvestMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestMarContents.budgetUsage = (((getRealValue(this.socialHarvestMarContents.expenses) + getRealValue(this.socialHarvestFebContents.expenses) + getRealValue(this.socialHarvestJanContents.expenses)) / getRealValue(this.socialHarvestMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestAprContents.expenses = getRealValue(this.socialHarvestAprContents.perCategory1) + getRealValue(this.socialHarvestAprContents.perCategory2) + getRealValue(this.socialHarvestAprContents.perCategory3) + getRealValue(this.socialHarvestAprContents.perCategory4) + getRealValue(this.socialHarvestAprContents.perCategory5) + getRealValue(this.socialHarvestAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestAprContents.budgetUsage = (((getRealValue(this.socialHarvestAprContents.expenses) + getRealValue(this.socialHarvestMarContents.expenses) + getRealValue(this.socialHarvestFebContents.expenses) + getRealValue(this.socialHarvestJanContents.expenses)) / getRealValue(this.socialHarvestAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestMayContents.expenses = getRealValue(this.socialHarvestMayContents.perCategory1) + getRealValue(this.socialHarvestMayContents.perCategory2) + getRealValue(this.socialHarvestMayContents.perCategory3) + getRealValue(this.socialHarvestMayContents.perCategory4) + getRealValue(this.socialHarvestMayContents.perCategory5) + getRealValue(this.socialHarvestMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestMayContents.budgetUsage = (((getRealValue(this.socialHarvestMayContents.expenses) + getRealValue(this.socialHarvestAprContents.expenses) + getRealValue(this.socialHarvestMarContents.expenses) + getRealValue(this.socialHarvestFebContents.expenses) + getRealValue(this.socialHarvestJanContents.expenses)) / getRealValue(this.socialHarvestMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestJunContents.expenses = getRealValue(this.socialHarvestJunContents.perCategory1) + getRealValue(this.socialHarvestJunContents.perCategory2) + getRealValue(this.socialHarvestJunContents.perCategory3) + getRealValue(this.socialHarvestJunContents.perCategory4) + getRealValue(this.socialHarvestJunContents.perCategory5) + getRealValue(this.socialHarvestJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestJunContents.budgetUsage = (((getRealValue(this.socialHarvestJunContents.expenses) + getRealValue(this.socialHarvestMayContents.expenses) + getRealValue(this.socialHarvestAprContents.expenses) + getRealValue(this.socialHarvestMarContents.expenses) + getRealValue(this.socialHarvestFebContents.expenses) + getRealValue(this.socialHarvestJanContents.expenses)) / getRealValue(this.socialHarvestJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestJulContents.expenses = getRealValue(this.socialHarvestJulContents.perCategory1) + getRealValue(this.socialHarvestJulContents.perCategory2) + getRealValue(this.socialHarvestJulContents.perCategory3) + getRealValue(this.socialHarvestJulContents.perCategory4) + getRealValue(this.socialHarvestJulContents.perCategory5) + getRealValue(this.socialHarvestJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestJulContents.budgetUsage = (((getRealValue(this.socialHarvestJulContents.expenses) + getRealValue(this.socialHarvestJunContents.expenses) + getRealValue(this.socialHarvestMayContents.expenses) + getRealValue(this.socialHarvestAprContents.expenses) + getRealValue(this.socialHarvestMarContents.expenses) + getRealValue(this.socialHarvestFebContents.expenses) + getRealValue(this.socialHarvestJanContents.expenses)) / getRealValue(this.socialHarvestJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestAugContents.expenses = getRealValue(this.socialHarvestAugContents.perCategory1) + getRealValue(this.socialHarvestAugContents.perCategory2) + getRealValue(this.socialHarvestAugContents.perCategory3) + getRealValue(this.socialHarvestAugContents.perCategory4) + getRealValue(this.socialHarvestAugContents.perCategory5) + getRealValue(this.socialHarvestAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestAugContents.budgetUsage = (((getRealValue(this.socialHarvestAugContents.expenses) + getRealValue(this.socialHarvestJulContents.expenses) + getRealValue(this.socialHarvestJunContents.expenses) + getRealValue(this.socialHarvestMayContents.expenses) + getRealValue(this.socialHarvestAprContents.expenses) + getRealValue(this.socialHarvestMarContents.expenses) + getRealValue(this.socialHarvestFebContents.expenses) + getRealValue(this.socialHarvestJanContents.expenses)) / getRealValue(this.socialHarvestAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestSepContents.expenses = getRealValue(this.socialHarvestSepContents.perCategory1) + getRealValue(this.socialHarvestSepContents.perCategory2) + getRealValue(this.socialHarvestSepContents.perCategory3) + getRealValue(this.socialHarvestSepContents.perCategory4) + getRealValue(this.socialHarvestSepContents.perCategory5) + getRealValue(this.socialHarvestSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestSepContents.budgetUsage = (((getRealValue(this.socialHarvestSepContents.expenses) + getRealValue(this.socialHarvestAugContents.expenses) + getRealValue(this.socialHarvestJulContents.expenses) + getRealValue(this.socialHarvestJunContents.expenses) + getRealValue(this.socialHarvestMayContents.expenses) + getRealValue(this.socialHarvestAprContents.expenses) + getRealValue(this.socialHarvestMarContents.expenses) + getRealValue(this.socialHarvestFebContents.expenses) + getRealValue(this.socialHarvestJanContents.expenses)) / getRealValue(this.socialHarvestSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestOctContents.expenses = getRealValue(this.socialHarvestOctContents.perCategory1) + getRealValue(this.socialHarvestOctContents.perCategory2) + getRealValue(this.socialHarvestOctContents.perCategory3) + getRealValue(this.socialHarvestOctContents.perCategory4) + getRealValue(this.socialHarvestOctContents.perCategory5) + getRealValue(this.socialHarvestOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestOctContents.budgetUsage = (((getRealValue(this.socialHarvestOctContents.expenses) + getRealValue(this.socialHarvestSepContents.expenses) + getRealValue(this.socialHarvestAugContents.expenses) + getRealValue(this.socialHarvestJulContents.expenses) + getRealValue(this.socialHarvestJunContents.expenses) + getRealValue(this.socialHarvestMayContents.expenses) + getRealValue(this.socialHarvestAprContents.expenses) + getRealValue(this.socialHarvestMarContents.expenses) + getRealValue(this.socialHarvestFebContents.expenses) + getRealValue(this.socialHarvestJanContents.expenses)) / getRealValue(this.socialHarvestOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestNovContents.expenses = getRealValue(this.socialHarvestNovContents.perCategory1) + getRealValue(this.socialHarvestNovContents.perCategory2) + getRealValue(this.socialHarvestNovContents.perCategory3) + getRealValue(this.socialHarvestNovContents.perCategory4) + getRealValue(this.socialHarvestNovContents.perCategory5) + getRealValue(this.socialHarvestNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestNovContents.budgetUsage = (((getRealValue(this.socialHarvestNovContents.expenses) + getRealValue(this.socialHarvestOctContents.expenses) + getRealValue(this.socialHarvestSepContents.expenses) + getRealValue(this.socialHarvestAugContents.expenses) + getRealValue(this.socialHarvestJulContents.expenses) + getRealValue(this.socialHarvestJunContents.expenses) + getRealValue(this.socialHarvestMayContents.expenses) + getRealValue(this.socialHarvestAprContents.expenses) + getRealValue(this.socialHarvestMarContents.expenses) + getRealValue(this.socialHarvestFebContents.expenses) + getRealValue(this.socialHarvestJanContents.expenses)) / getRealValue(this.socialHarvestNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestDecContents.expenses = getRealValue(this.socialHarvestDecContents.perCategory1) + getRealValue(this.socialHarvestDecContents.perCategory2) + getRealValue(this.socialHarvestDecContents.perCategory3) + getRealValue(this.socialHarvestDecContents.perCategory4) + getRealValue(this.socialHarvestDecContents.perCategory5) + getRealValue(this.socialHarvestDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.socialHarvestDecContents.budgetUsage = (((getRealValue(this.socialHarvestDecContents.expenses) + getRealValue(this.socialHarvestNovContents.expenses) + getRealValue(this.socialHarvestOctContents.expenses) + getRealValue(this.socialHarvestSepContents.expenses) + getRealValue(this.socialHarvestAugContents.expenses) + getRealValue(this.socialHarvestJulContents.expenses) + getRealValue(this.socialHarvestJunContents.expenses) + getRealValue(this.socialHarvestMayContents.expenses) + getRealValue(this.socialHarvestAprContents.expenses) + getRealValue(this.socialHarvestMarContents.expenses) + getRealValue(this.socialHarvestFebContents.expenses) + getRealValue(this.socialHarvestJanContents.expenses)) / getRealValue(this.socialHarvestDecContents.actualBudget))*100).toFixed(2)
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
