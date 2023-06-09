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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi1 == null)?'grey-2':(communityFridgeJanContents.kpi1 >= '0' && communityFridgeJanContents.kpi1 <= '238.8')?'red':(communityFridgeJanContents.kpi1 > '238.8' && communityFridgeJanContents.kpi1 <= '318.4')?'orange':(communityFridgeJanContents.kpi1 > '318.4' && communityFridgeJanContents.kpi1 < '398')?'yellow-7':(communityFridgeJanContents.kpi1 >= '398' && communityFridgeJanContents.kpi1 < '477.6')?'green':(communityFridgeJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi2 == null)?'grey-2':(communityFridgeJanContents.kpi2 >= '0' && communityFridgeJanContents.kpi2 <= '244.2')?'red':(communityFridgeJanContents.kpi2 > '244.2' && communityFridgeJanContents.kpi2 <= '325.6')?'orange':(communityFridgeJanContents.kpi2 > '325.6' && communityFridgeJanContents.kpi2 < '407')?'yellow-7':(communityFridgeJanContents.kpi2 >= '407' && communityFridgeJanContents.kpi2 < '488.4')?'green':(communityFridgeJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi3 == null)?'grey-2':(communityFridgeJanContents.kpi3 >= '0' && communityFridgeJanContents.kpi3 <= '524.25')?'red':(communityFridgeJanContents.kpi3 > '524.25' && communityFridgeJanContents.kpi3 <= '699')?'orange':(communityFridgeJanContents.kpi3 > '699' && communityFridgeJanContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJanContents.kpi3 >= '873.75' && communityFridgeJanContents.kpi3 < '1048.5')?'green':(communityFridgeJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeFebContents.kpi1 == null)?'grey-2':(communityFridgeFebContents.kpi1 >= '0' && communityFridgeFebContents.kpi1 <= '238.8')?'red':(communityFridgeFebContents.kpi1 > '238.8' && communityFridgeFebContents.kpi1 <= '318.4')?'orange':(communityFridgeFebContents.kpi1 > '318.4' && communityFridgeFebContents.kpi1 < '398')?'yellow-7':(communityFridgeFebContents.kpi1 >= '398' && communityFridgeFebContents.kpi1 < '477.6')?'green':(communityFridgeFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi2 == null)?'grey-2':(communityFridgeFebContents.kpi2 >= '0' && communityFridgeFebContents.kpi2 <= '244.2')?'red':(communityFridgeFebContents.kpi2 > '244.2' && communityFridgeFebContents.kpi2 <= '325.6')?'orange':(communityFridgeFebContents.kpi2 > '325.6' && communityFridgeFebContents.kpi2 < '407')?'yellow-7':(communityFridgeFebContents.kpi2 >= '407' && communityFridgeFebContents.kpi2 < '488.4')?'green':(communityFridgeFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi3 == null)?'grey-2':(communityFridgeFebContents.kpi3 >= '0' && communityFridgeFebContents.kpi3 <= '524.25')?'red':(communityFridgeFebContents.kpi3 > '524.25' && communityFridgeFebContents.kpi3 <= '699')?'orange':(communityFridgeFebContents.kpi3 > '699' && communityFridgeFebContents.kpi3 < '873.75')?'yellow-7':(communityFridgeFebContents.kpi3 >= '873.75' && communityFridgeFebContents.kpi3 < '1048.5')?'green':(communityFridgeFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMarContents.kpi1 == null)?'grey-2':(communityFridgeMarContents.kpi1 >= '0' && communityFridgeMarContents.kpi1 <= '238.8')?'red':(communityFridgeMarContents.kpi1 > '238.8' && communityFridgeMarContents.kpi1 <= '318.4')?'orange':(communityFridgeMarContents.kpi1 > '318.4' && communityFridgeMarContents.kpi1 < '398')?'yellow-7':(communityFridgeMarContents.kpi1 >= '398' && communityFridgeMarContents.kpi1 < '477.6')?'green':(communityFridgeMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi2 == null)?'grey-2':(communityFridgeMarContents.kpi2 >= '0' && communityFridgeMarContents.kpi2 <= '244.2')?'red':(communityFridgeMarContents.kpi2 > '244.2' && communityFridgeMarContents.kpi2 <= '325.6')?'orange':(communityFridgeMarContents.kpi2 > '325.6' && communityFridgeMarContents.kpi2 < '407')?'yellow-7':(communityFridgeMarContents.kpi2 >= '407' && communityFridgeMarContents.kpi2 < '488.4')?'green':(communityFridgeMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi3 == null)?'grey-2':(communityFridgeMarContents.kpi3 >= '0' && communityFridgeMarContents.kpi3 <= '524.25')?'red':(communityFridgeMarContents.kpi3 > '524.25' && communityFridgeMarContents.kpi3 <= '699')?'orange':(communityFridgeMarContents.kpi3 > '699' && communityFridgeMarContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMarContents.kpi3 >= '873.75' && communityFridgeMarContents.kpi3 < '1048.5')?'green':(communityFridgeMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAprContents.kpi1 == null)?'grey-2':(communityFridgeAprContents.kpi1 >= '0' && communityFridgeAprContents.kpi1 <= '238.8')?'red':(communityFridgeAprContents.kpi1 > '238.8' && communityFridgeAprContents.kpi1 <= '318.4')?'orange':(communityFridgeAprContents.kpi1 > '318.4' && communityFridgeAprContents.kpi1 < '398')?'yellow-7':(communityFridgeAprContents.kpi1 >= '398' && communityFridgeAprContents.kpi1 < '477.6')?'green':(communityFridgeAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi2 == null)?'grey-2':(communityFridgeAprContents.kpi2 >= '0' && communityFridgeAprContents.kpi2 <= '244.2')?'red':(communityFridgeAprContents.kpi2 > '244.2' && communityFridgeAprContents.kpi2 <= '325.6')?'orange':(communityFridgeAprContents.kpi2 > '325.6' && communityFridgeAprContents.kpi2 < '407')?'yellow-7':(communityFridgeAprContents.kpi2 >= '407' && communityFridgeAprContents.kpi2 < '488.4')?'green':(communityFridgeAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi3 == null)?'grey-2':(communityFridgeAprContents.kpi3 >= '0' && communityFridgeAprContents.kpi3 <= '524.25')?'red':(communityFridgeAprContents.kpi3 > '524.25' && communityFridgeAprContents.kpi3 <= '699')?'orange':(communityFridgeAprContents.kpi3 > '699' && communityFridgeAprContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAprContents.kpi3 >= '873.75' && communityFridgeAprContents.kpi3 < '1048.5')?'green':(communityFridgeAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMayContents.kpi1 == null)?'grey-2':(communityFridgeMayContents.kpi1 >= '0' && communityFridgeMayContents.kpi1 <= '238.8')?'red':(communityFridgeMayContents.kpi1 > '238.8' && communityFridgeMayContents.kpi1 <= '318.4')?'orange':(communityFridgeMayContents.kpi1 > '318.4' && communityFridgeMayContents.kpi1 < '398')?'yellow-7':(communityFridgeMayContents.kpi1 >= '398' && communityFridgeMayContents.kpi1 < '477.6')?'green':(communityFridgeMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi2 == null)?'grey-2':(communityFridgeMayContents.kpi2 >= '0' && communityFridgeMayContents.kpi2 <= '244.2')?'red':(communityFridgeMayContents.kpi2 > '244.2' && communityFridgeMayContents.kpi2 <= '325.6')?'orange':(communityFridgeMayContents.kpi2 > '325.6' && communityFridgeMayContents.kpi2 < '407')?'yellow-7':(communityFridgeMayContents.kpi2 >= '407' && communityFridgeMayContents.kpi2 < '488.4')?'green':(communityFridgeMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi3 == null)?'grey-2':(communityFridgeMayContents.kpi3 >= '0' && communityFridgeMayContents.kpi3 <= '524.25')?'red':(communityFridgeMayContents.kpi3 > '524.25' && communityFridgeMayContents.kpi3 <= '699')?'orange':(communityFridgeMayContents.kpi3 > '699' && communityFridgeMayContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMayContents.kpi3 >= '873.75' && communityFridgeMayContents.kpi3 < '1048.5')?'green':(communityFridgeMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJunContents.kpi1 == null)?'grey-2':(communityFridgeJunContents.kpi1 >= '0' && communityFridgeJunContents.kpi1 <= '238.8')?'red':(communityFridgeJunContents.kpi1 > '238.8' && communityFridgeJunContents.kpi1 <= '318.4')?'orange':(communityFridgeJunContents.kpi1 > '318.4' && communityFridgeJunContents.kpi1 < '398')?'yellow-7':(communityFridgeJunContents.kpi1 >= '398' && communityFridgeJunContents.kpi1 < '477.6')?'green':(communityFridgeJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi2 == null)?'grey-2':(communityFridgeJunContents.kpi2 >= '0' && communityFridgeJunContents.kpi2 <= '244.2')?'red':(communityFridgeJunContents.kpi2 > '244.2' && communityFridgeJunContents.kpi2 <= '325.6')?'orange':(communityFridgeJunContents.kpi2 > '325.6' && communityFridgeJunContents.kpi2 < '407')?'yellow-7':(communityFridgeJunContents.kpi2 >= '407' && communityFridgeJunContents.kpi2 < '488.4')?'green':(communityFridgeJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi3 == null)?'grey-2':(communityFridgeJunContents.kpi3 >= '0' && communityFridgeJunContents.kpi3 <= '524.25')?'red':(communityFridgeJunContents.kpi3 > '524.25' && communityFridgeJunContents.kpi3 <= '699')?'orange':(communityFridgeJunContents.kpi3 > '699' && communityFridgeJunContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJunContents.kpi3 >= '873.75' && communityFridgeJunContents.kpi3 < '1048.5')?'green':(communityFridgeJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJulContents.kpi1 == null)?'grey-2':(communityFridgeJulContents.kpi1 >= '0' && communityFridgeJulContents.kpi1 <= '238.8')?'red':(communityFridgeJulContents.kpi1 > '238.8' && communityFridgeJulContents.kpi1 <= '318.4')?'orange':(communityFridgeJulContents.kpi1 > '318.4' && communityFridgeJulContents.kpi1 < '398')?'yellow-7':(communityFridgeJulContents.kpi1 >= '398' && communityFridgeJulContents.kpi1 < '477.6')?'green':(communityFridgeJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi2 == null)?'grey-2':(communityFridgeJulContents.kpi2 >= '0' && communityFridgeJulContents.kpi2 <= '244.2')?'red':(communityFridgeJulContents.kpi2 > '244.2' && communityFridgeJulContents.kpi2 <= '325.6')?'orange':(communityFridgeJulContents.kpi2 > '325.6' && communityFridgeJulContents.kpi2 < '407')?'yellow-7':(communityFridgeJulContents.kpi2 >= '407' && communityFridgeJulContents.kpi2 < '488.4')?'green':(communityFridgeJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi3 == null)?'grey-2':(communityFridgeJulContents.kpi3 >= '0' && communityFridgeJulContents.kpi3 <= '524.25')?'red':(communityFridgeJulContents.kpi3 > '524.25' && communityFridgeJulContents.kpi3 <= '699')?'orange':(communityFridgeJulContents.kpi3 > '699' && communityFridgeJulContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJulContents.kpi3 >= '873.75' && communityFridgeJulContents.kpi3 < '1048.5')?'green':(communityFridgeJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAugContents.kpi1 == null)?'grey-2':(communityFridgeAugContents.kpi1 >= '0' && communityFridgeAugContents.kpi1 <= '238.8')?'red':(communityFridgeAugContents.kpi1 > '238.8' && communityFridgeAugContents.kpi1 <= '318.4')?'orange':(communityFridgeAugContents.kpi1 > '318.4' && communityFridgeAugContents.kpi1 < '398')?'yellow-7':(communityFridgeAugContents.kpi1 >= '398' && communityFridgeAugContents.kpi1 < '477.6')?'green':(communityFridgeAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi2 == null)?'grey-2':(communityFridgeAugContents.kpi2 >= '0' && communityFridgeAugContents.kpi2 <= '244.2')?'red':(communityFridgeAugContents.kpi2 > '244.2' && communityFridgeAugContents.kpi2 <= '325.6')?'orange':(communityFridgeAugContents.kpi2 > '325.6' && communityFridgeAugContents.kpi2 < '407')?'yellow-7':(communityFridgeAugContents.kpi2 >= '407' && communityFridgeAugContents.kpi2 < '488.4')?'green':(communityFridgeAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi3 == null)?'grey-2':(communityFridgeAugContents.kpi3 >= '0' && communityFridgeAugContents.kpi3 <= '524.25')?'red':(communityFridgeAugContents.kpi3 > '524.25' && communityFridgeAugContents.kpi3 <= '699')?'orange':(communityFridgeAugContents.kpi3 > '699' && communityFridgeAugContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAugContents.kpi3 >= '873.75' && communityFridgeAugContents.kpi3 < '1048.5')?'green':(communityFridgeAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeSepContents.kpi1 == null)?'grey-2':(communityFridgeSepContents.kpi1 >= '0' && communityFridgeSepContents.kpi1 <= '238.8')?'red':(communityFridgeSepContents.kpi1 > '238.8' && communityFridgeSepContents.kpi1 <= '318.4')?'orange':(communityFridgeSepContents.kpi1 > '318.4' && communityFridgeSepContents.kpi1 < '398')?'yellow-7':(communityFridgeSepContents.kpi1 >= '398' && communityFridgeSepContents.kpi1 < '477.6')?'green':(communityFridgeSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi2 == null)?'grey-2':(communityFridgeSepContents.kpi2 >= '0' && communityFridgeSepContents.kpi2 <= '244.2')?'red':(communityFridgeSepContents.kpi2 > '244.2' && communityFridgeSepContents.kpi2 <= '325.6')?'orange':(communityFridgeSepContents.kpi2 > '325.6' && communityFridgeSepContents.kpi2 < '407')?'yellow-7':(communityFridgeSepContents.kpi2 >= '407' && communityFridgeSepContents.kpi2 < '488.4')?'green':(communityFridgeSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi3 == null)?'grey-2':(communityFridgeSepContents.kpi3 >= '0' && communityFridgeSepContents.kpi3 <= '524.25')?'red':(communityFridgeSepContents.kpi3 > '524.25' && communityFridgeSepContents.kpi3 <= '699')?'orange':(communityFridgeSepContents.kpi3 > '699' && communityFridgeSepContents.kpi3 < '873.75')?'yellow-7':(communityFridgeSepContents.kpi3 >= '873.75' && communityFridgeSepContents.kpi3 < '1048.5')?'green':(communityFridgeSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeOctContents.kpi1 == null)?'grey-2':(communityFridgeOctContents.kpi1 >= '0' && communityFridgeOctContents.kpi1 <= '238.8')?'red':(communityFridgeOctContents.kpi1 > '238.8' && communityFridgeOctContents.kpi1 <= '318.4')?'orange':(communityFridgeOctContents.kpi1 > '318.4' && communityFridgeOctContents.kpi1 < '398')?'yellow-7':(communityFridgeOctContents.kpi1 >= '398' && communityFridgeOctContents.kpi1 < '477.6')?'green':(communityFridgeOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi2 == null)?'grey-2':(communityFridgeOctContents.kpi2 >= '0' && communityFridgeOctContents.kpi2 <= '244.2')?'red':(communityFridgeOctContents.kpi2 > '244.2' && communityFridgeOctContents.kpi2 <= '325.6')?'orange':(communityFridgeOctContents.kpi2 > '325.6' && communityFridgeOctContents.kpi2 < '407')?'yellow-7':(communityFridgeOctContents.kpi2 >= '407' && communityFridgeOctContents.kpi2 < '488.4')?'green':(communityFridgeOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi3 == null)?'grey-2':(communityFridgeOctContents.kpi3 >= '0' && communityFridgeOctContents.kpi3 <= '524.25')?'red':(communityFridgeOctContents.kpi3 > '524.25' && communityFridgeOctContents.kpi3 <= '699')?'orange':(communityFridgeOctContents.kpi3 > '699' && communityFridgeOctContents.kpi3 < '873.75')?'yellow-7':(communityFridgeOctContents.kpi3 >= '873.75' && communityFridgeOctContents.kpi3 < '1048.5')?'green':(communityFridgeOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeNovContents.kpi1 == null)?'grey-2':(communityFridgeNovContents.kpi1 >= '0' && communityFridgeNovContents.kpi1 <= '238.8')?'red':(communityFridgeNovContents.kpi1 > '238.8' && communityFridgeNovContents.kpi1 <= '318.4')?'orange':(communityFridgeNovContents.kpi1 > '318.4' && communityFridgeNovContents.kpi1 < '398')?'yellow-7':(communityFridgeNovContents.kpi1 >= '398' && communityFridgeNovContents.kpi1 < '477.6')?'green':(communityFridgeNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi2 == null)?'grey-2':(communityFridgeNovContents.kpi2 >= '0' && communityFridgeNovContents.kpi2 <= '244.2')?'red':(communityFridgeNovContents.kpi2 > '244.2' && communityFridgeNovContents.kpi2 <= '325.6')?'orange':(communityFridgeNovContents.kpi2 > '325.6' && communityFridgeNovContents.kpi2 < '407')?'yellow-7':(communityFridgeNovContents.kpi2 >= '407' && communityFridgeNovContents.kpi2 < '488.4')?'green':(communityFridgeNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi3 == null)?'grey-2':(communityFridgeNovContents.kpi3 >= '0' && communityFridgeNovContents.kpi3 <= '524.25')?'red':(communityFridgeNovContents.kpi3 > '524.25' && communityFridgeNovContents.kpi3 <= '699')?'orange':(communityFridgeNovContents.kpi3 > '699' && communityFridgeNovContents.kpi3 < '873.75')?'yellow-7':(communityFridgeNovContents.kpi3 >= '873.75' && communityFridgeNovContents.kpi3 < '1048.5')?'green':(communityFridgeNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeDecContents.kpi1 == null)?'grey-2':(communityFridgeDecContents.kpi1 >= '0' && communityFridgeDecContents.kpi1 <= '238.8')?'red':(communityFridgeDecContents.kpi1 > '238.8' && communityFridgeDecContents.kpi1 <= '318.4')?'orange':(communityFridgeDecContents.kpi1 > '318.4' && communityFridgeDecContents.kpi1 < '398')?'yellow-7':(communityFridgeDecContents.kpi1 >= '398' && communityFridgeDecContents.kpi1 < '477.6')?'green':(communityFridgeDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi2 == null)?'grey-2':(communityFridgeDecContents.kpi2 >= '0' && communityFridgeDecContents.kpi2 <= '244.2')?'red':(communityFridgeDecContents.kpi2 > '244.2' && communityFridgeDecContents.kpi2 <= '325.6')?'orange':(communityFridgeDecContents.kpi2 > '325.6' && communityFridgeDecContents.kpi2 < '407')?'yellow-7':(communityFridgeDecContents.kpi2 >= '407' && communityFridgeDecContents.kpi2 < '488.4')?'green':(communityFridgeDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi3 == null)?'grey-2':(communityFridgeDecContents.kpi3 >= '0' && communityFridgeDecContents.kpi3 <= '524.25')?'red':(communityFridgeDecContents.kpi3 > '524.25' && communityFridgeDecContents.kpi3 <= '699')?'orange':(communityFridgeDecContents.kpi3 > '699' && communityFridgeDecContents.kpi3 < '873.75')?'yellow-7':(communityFridgeDecContents.kpi3 >= '873.75' && communityFridgeDecContents.kpi3 < '1048.5')?'green':(communityFridgeDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi1 == null)?'grey-2':(communityFridgeJanContents.kpi1 >= '0' && communityFridgeJanContents.kpi1 <= '238.8')?'red':(communityFridgeJanContents.kpi1 > '238.8' && communityFridgeJanContents.kpi1 <= '318.4')?'orange':(communityFridgeJanContents.kpi1 > '318.4' && communityFridgeJanContents.kpi1 < '398')?'yellow-7':(communityFridgeJanContents.kpi1 >= '398' && communityFridgeJanContents.kpi1 < '477.6')?'green':(communityFridgeJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi2 == null)?'grey-2':(communityFridgeJanContents.kpi2 >= '0' && communityFridgeJanContents.kpi2 <= '244.2')?'red':(communityFridgeJanContents.kpi2 > '244.2' && communityFridgeJanContents.kpi2 <= '325.6')?'orange':(communityFridgeJanContents.kpi2 > '325.6' && communityFridgeJanContents.kpi2 < '407')?'yellow-7':(communityFridgeJanContents.kpi2 >= '407' && communityFridgeJanContents.kpi2 < '488.4')?'green':(communityFridgeJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi3 == null)?'grey-2':(communityFridgeJanContents.kpi3 >= '0' && communityFridgeJanContents.kpi3 <= '524.25')?'red':(communityFridgeJanContents.kpi3 > '524.25' && communityFridgeJanContents.kpi3 <= '699')?'orange':(communityFridgeJanContents.kpi3 > '699' && communityFridgeJanContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJanContents.kpi3 >= '873.75' && communityFridgeJanContents.kpi3 < '1048.5')?'green':(communityFridgeJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeFebContents.kpi1 == null)?'grey-2':(communityFridgeFebContents.kpi1 >= '0' && communityFridgeFebContents.kpi1 <= '238.8')?'red':(communityFridgeFebContents.kpi1 > '238.8' && communityFridgeFebContents.kpi1 <= '318.4')?'orange':(communityFridgeFebContents.kpi1 > '318.4' && communityFridgeFebContents.kpi1 < '398')?'yellow-7':(communityFridgeFebContents.kpi1 >= '398' && communityFridgeFebContents.kpi1 < '477.6')?'green':(communityFridgeFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi2 == null)?'grey-2':(communityFridgeFebContents.kpi2 >= '0' && communityFridgeFebContents.kpi2 <= '244.2')?'red':(communityFridgeFebContents.kpi2 > '244.2' && communityFridgeFebContents.kpi2 <= '325.6')?'orange':(communityFridgeFebContents.kpi2 > '325.6' && communityFridgeFebContents.kpi2 < '407')?'yellow-7':(communityFridgeFebContents.kpi2 >= '407' && communityFridgeFebContents.kpi2 < '488.4')?'green':(communityFridgeFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi3 == null)?'grey-2':(communityFridgeFebContents.kpi3 >= '0' && communityFridgeFebContents.kpi3 <= '524.25')?'red':(communityFridgeFebContents.kpi3 > '524.25' && communityFridgeFebContents.kpi3 <= '699')?'orange':(communityFridgeFebContents.kpi3 > '699' && communityFridgeFebContents.kpi3 < '873.75')?'yellow-7':(communityFridgeFebContents.kpi3 >= '873.75' && communityFridgeFebContents.kpi3 < '1048.5')?'green':(communityFridgeFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMarContents.kpi1 == null)?'grey-2':(communityFridgeMarContents.kpi1 >= '0' && communityFridgeMarContents.kpi1 <= '238.8')?'red':(communityFridgeMarContents.kpi1 > '238.8' && communityFridgeMarContents.kpi1 <= '318.4')?'orange':(communityFridgeMarContents.kpi1 > '318.4' && communityFridgeMarContents.kpi1 < '398')?'yellow-7':(communityFridgeMarContents.kpi1 >= '398' && communityFridgeMarContents.kpi1 < '477.6')?'green':(communityFridgeMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi2 == null)?'grey-2':(communityFridgeMarContents.kpi2 >= '0' && communityFridgeMarContents.kpi2 <= '244.2')?'red':(communityFridgeMarContents.kpi2 > '244.2' && communityFridgeMarContents.kpi2 <= '325.6')?'orange':(communityFridgeMarContents.kpi2 > '325.6' && communityFridgeMarContents.kpi2 < '407')?'yellow-7':(communityFridgeMarContents.kpi2 >= '407' && communityFridgeMarContents.kpi2 < '488.4')?'green':(communityFridgeMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi3 == null)?'grey-2':(communityFridgeMarContents.kpi3 >= '0' && communityFridgeMarContents.kpi3 <= '524.25')?'red':(communityFridgeMarContents.kpi3 > '524.25' && communityFridgeMarContents.kpi3 <= '699')?'orange':(communityFridgeMarContents.kpi3 > '699' && communityFridgeMarContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMarContents.kpi3 >= '873.75' && communityFridgeMarContents.kpi3 < '1048.5')?'green':(communityFridgeMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAprContents.kpi1 == null)?'grey-2':(communityFridgeAprContents.kpi1 >= '0' && communityFridgeAprContents.kpi1 <= '238.8')?'red':(communityFridgeAprContents.kpi1 > '238.8' && communityFridgeAprContents.kpi1 <= '318.4')?'orange':(communityFridgeAprContents.kpi1 > '318.4' && communityFridgeAprContents.kpi1 < '398')?'yellow-7':(communityFridgeAprContents.kpi1 >= '398' && communityFridgeAprContents.kpi1 < '477.6')?'green':(communityFridgeAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi2 == null)?'grey-2':(communityFridgeAprContents.kpi2 >= '0' && communityFridgeAprContents.kpi2 <= '244.2')?'red':(communityFridgeAprContents.kpi2 > '244.2' && communityFridgeAprContents.kpi2 <= '325.6')?'orange':(communityFridgeAprContents.kpi2 > '325.6' && communityFridgeAprContents.kpi2 < '407')?'yellow-7':(communityFridgeAprContents.kpi2 >= '407' && communityFridgeAprContents.kpi2 < '488.4')?'green':(communityFridgeAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi3 == null)?'grey-2':(communityFridgeAprContents.kpi3 >= '0' && communityFridgeAprContents.kpi3 <= '524.25')?'red':(communityFridgeAprContents.kpi3 > '524.25' && communityFridgeAprContents.kpi3 <= '699')?'orange':(communityFridgeAprContents.kpi3 > '699' && communityFridgeAprContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAprContents.kpi3 >= '873.75' && communityFridgeAprContents.kpi3 < '1048.5')?'green':(communityFridgeAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMayContents.kpi1 == null)?'grey-2':(communityFridgeMayContents.kpi1 >= '0' && communityFridgeMayContents.kpi1 <= '238.8')?'red':(communityFridgeMayContents.kpi1 > '238.8' && communityFridgeMayContents.kpi1 <= '318.4')?'orange':(communityFridgeMayContents.kpi1 > '318.4' && communityFridgeMayContents.kpi1 < '398')?'yellow-7':(communityFridgeMayContents.kpi1 >= '398' && communityFridgeMayContents.kpi1 < '477.6')?'green':(communityFridgeMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi2 == null)?'grey-2':(communityFridgeMayContents.kpi2 >= '0' && communityFridgeMayContents.kpi2 <= '244.2')?'red':(communityFridgeMayContents.kpi2 > '244.2' && communityFridgeMayContents.kpi2 <= '325.6')?'orange':(communityFridgeMayContents.kpi2 > '325.6' && communityFridgeMayContents.kpi2 < '407')?'yellow-7':(communityFridgeMayContents.kpi2 >= '407' && communityFridgeMayContents.kpi2 < '488.4')?'green':(communityFridgeMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi3 == null)?'grey-2':(communityFridgeMayContents.kpi3 >= '0' && communityFridgeMayContents.kpi3 <= '524.25')?'red':(communityFridgeMayContents.kpi3 > '524.25' && communityFridgeMayContents.kpi3 <= '699')?'orange':(communityFridgeMayContents.kpi3 > '699' && communityFridgeMayContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMayContents.kpi3 >= '873.75' && communityFridgeMayContents.kpi3 < '1048.5')?'green':(communityFridgeMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJunContents.kpi1 == null)?'grey-2':(communityFridgeJunContents.kpi1 >= '0' && communityFridgeJunContents.kpi1 <= '238.8')?'red':(communityFridgeJunContents.kpi1 > '238.8' && communityFridgeJunContents.kpi1 <= '318.4')?'orange':(communityFridgeJunContents.kpi1 > '318.4' && communityFridgeJunContents.kpi1 < '398')?'yellow-7':(communityFridgeJunContents.kpi1 >= '398' && communityFridgeJunContents.kpi1 < '477.6')?'green':(communityFridgeJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi2 == null)?'grey-2':(communityFridgeJunContents.kpi2 >= '0' && communityFridgeJunContents.kpi2 <= '244.2')?'red':(communityFridgeJunContents.kpi2 > '244.2' && communityFridgeJunContents.kpi2 <= '325.6')?'orange':(communityFridgeJunContents.kpi2 > '325.6' && communityFridgeJunContents.kpi2 < '407')?'yellow-7':(communityFridgeJunContents.kpi2 >= '407' && communityFridgeJunContents.kpi2 < '488.4')?'green':(communityFridgeJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi3 == null)?'grey-2':(communityFridgeJunContents.kpi3 >= '0' && communityFridgeJunContents.kpi3 <= '524.25')?'red':(communityFridgeJunContents.kpi3 > '524.25' && communityFridgeJunContents.kpi3 <= '699')?'orange':(communityFridgeJunContents.kpi3 > '699' && communityFridgeJunContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJunContents.kpi3 >= '873.75' && communityFridgeJunContents.kpi3 < '1048.5')?'green':(communityFridgeJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJulContents.kpi1 == null)?'grey-2':(communityFridgeJulContents.kpi1 >= '0' && communityFridgeJulContents.kpi1 <= '238.8')?'red':(communityFridgeJulContents.kpi1 > '238.8' && communityFridgeJulContents.kpi1 <= '318.4')?'orange':(communityFridgeJulContents.kpi1 > '318.4' && communityFridgeJulContents.kpi1 < '398')?'yellow-7':(communityFridgeJulContents.kpi1 >= '398' && communityFridgeJulContents.kpi1 < '477.6')?'green':(communityFridgeJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi2 == null)?'grey-2':(communityFridgeJulContents.kpi2 >= '0' && communityFridgeJulContents.kpi2 <= '244.2')?'red':(communityFridgeJulContents.kpi2 > '244.2' && communityFridgeJulContents.kpi2 <= '325.6')?'orange':(communityFridgeJulContents.kpi2 > '325.6' && communityFridgeJulContents.kpi2 < '407')?'yellow-7':(communityFridgeJulContents.kpi2 >= '407' && communityFridgeJulContents.kpi2 < '488.4')?'green':(communityFridgeJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi3 == null)?'grey-2':(communityFridgeJulContents.kpi3 >= '0' && communityFridgeJulContents.kpi3 <= '524.25')?'red':(communityFridgeJulContents.kpi3 > '524.25' && communityFridgeJulContents.kpi3 <= '699')?'orange':(communityFridgeJulContents.kpi3 > '699' && communityFridgeJulContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJulContents.kpi3 >= '873.75' && communityFridgeJulContents.kpi3 < '1048.5')?'green':(communityFridgeJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAugContents.kpi1 == null)?'grey-2':(communityFridgeAugContents.kpi1 >= '0' && communityFridgeAugContents.kpi1 <= '238.8')?'red':(communityFridgeAugContents.kpi1 > '238.8' && communityFridgeAugContents.kpi1 <= '318.4')?'orange':(communityFridgeAugContents.kpi1 > '318.4' && communityFridgeAugContents.kpi1 < '398')?'yellow-7':(communityFridgeAugContents.kpi1 >= '398' && communityFridgeAugContents.kpi1 < '477.6')?'green':(communityFridgeAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi2 == null)?'grey-2':(communityFridgeAugContents.kpi2 >= '0' && communityFridgeAugContents.kpi2 <= '244.2')?'red':(communityFridgeAugContents.kpi2 > '244.2' && communityFridgeAugContents.kpi2 <= '325.6')?'orange':(communityFridgeAugContents.kpi2 > '325.6' && communityFridgeAugContents.kpi2 < '407')?'yellow-7':(communityFridgeAugContents.kpi2 >= '407' && communityFridgeAugContents.kpi2 < '488.4')?'green':(communityFridgeAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi3 == null)?'grey-2':(communityFridgeAugContents.kpi3 >= '0' && communityFridgeAugContents.kpi3 <= '524.25')?'red':(communityFridgeAugContents.kpi3 > '524.25' && communityFridgeAugContents.kpi3 <= '699')?'orange':(communityFridgeAugContents.kpi3 > '699' && communityFridgeAugContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAugContents.kpi3 >= '873.75' && communityFridgeAugContents.kpi3 < '1048.5')?'green':(communityFridgeAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeSepContents.kpi1 == null)?'grey-2':(communityFridgeSepContents.kpi1 >= '0' && communityFridgeSepContents.kpi1 <= '238.8')?'red':(communityFridgeSepContents.kpi1 > '238.8' && communityFridgeSepContents.kpi1 <= '318.4')?'orange':(communityFridgeSepContents.kpi1 > '318.4' && communityFridgeSepContents.kpi1 < '398')?'yellow-7':(communityFridgeSepContents.kpi1 >= '398' && communityFridgeSepContents.kpi1 < '477.6')?'green':(communityFridgeSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi2 == null)?'grey-2':(communityFridgeSepContents.kpi2 >= '0' && communityFridgeSepContents.kpi2 <= '244.2')?'red':(communityFridgeSepContents.kpi2 > '244.2' && communityFridgeSepContents.kpi2 <= '325.6')?'orange':(communityFridgeSepContents.kpi2 > '325.6' && communityFridgeSepContents.kpi2 < '407')?'yellow-7':(communityFridgeSepContents.kpi2 >= '407' && communityFridgeSepContents.kpi2 < '488.4')?'green':(communityFridgeSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi3 == null)?'grey-2':(communityFridgeSepContents.kpi3 >= '0' && communityFridgeSepContents.kpi3 <= '524.25')?'red':(communityFridgeSepContents.kpi3 > '524.25' && communityFridgeSepContents.kpi3 <= '699')?'orange':(communityFridgeSepContents.kpi3 > '699' && communityFridgeSepContents.kpi3 < '873.75')?'yellow-7':(communityFridgeSepContents.kpi3 >= '873.75' && communityFridgeSepContents.kpi3 < '1048.5')?'green':(communityFridgeSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeOctContents.kpi1 == null)?'grey-2':(communityFridgeOctContents.kpi1 >= '0' && communityFridgeOctContents.kpi1 <= '238.8')?'red':(communityFridgeOctContents.kpi1 > '238.8' && communityFridgeOctContents.kpi1 <= '318.4')?'orange':(communityFridgeOctContents.kpi1 > '318.4' && communityFridgeOctContents.kpi1 < '398')?'yellow-7':(communityFridgeOctContents.kpi1 >= '398' && communityFridgeOctContents.kpi1 < '477.6')?'green':(communityFridgeOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi2 == null)?'grey-2':(communityFridgeOctContents.kpi2 >= '0' && communityFridgeOctContents.kpi2 <= '244.2')?'red':(communityFridgeOctContents.kpi2 > '244.2' && communityFridgeOctContents.kpi2 <= '325.6')?'orange':(communityFridgeOctContents.kpi2 > '325.6' && communityFridgeOctContents.kpi2 < '407')?'yellow-7':(communityFridgeOctContents.kpi2 >= '407' && communityFridgeOctContents.kpi2 < '488.4')?'green':(communityFridgeOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi3 == null)?'grey-2':(communityFridgeOctContents.kpi3 >= '0' && communityFridgeOctContents.kpi3 <= '524.25')?'red':(communityFridgeOctContents.kpi3 > '524.25' && communityFridgeOctContents.kpi3 <= '699')?'orange':(communityFridgeOctContents.kpi3 > '699' && communityFridgeOctContents.kpi3 < '873.75')?'yellow-7':(communityFridgeOctContents.kpi3 >= '873.75' && communityFridgeOctContents.kpi3 < '1048.5')?'green':(communityFridgeOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeNovContents.kpi1 == null)?'grey-2':(communityFridgeNovContents.kpi1 >= '0' && communityFridgeNovContents.kpi1 <= '238.8')?'red':(communityFridgeNovContents.kpi1 > '238.8' && communityFridgeNovContents.kpi1 <= '318.4')?'orange':(communityFridgeNovContents.kpi1 > '318.4' && communityFridgeNovContents.kpi1 < '398')?'yellow-7':(communityFridgeNovContents.kpi1 >= '398' && communityFridgeNovContents.kpi1 < '477.6')?'green':(communityFridgeNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi2 == null)?'grey-2':(communityFridgeNovContents.kpi2 >= '0' && communityFridgeNovContents.kpi2 <= '244.2')?'red':(communityFridgeNovContents.kpi2 > '244.2' && communityFridgeNovContents.kpi2 <= '325.6')?'orange':(communityFridgeNovContents.kpi2 > '325.6' && communityFridgeNovContents.kpi2 < '407')?'yellow-7':(communityFridgeNovContents.kpi2 >= '407' && communityFridgeNovContents.kpi2 < '488.4')?'green':(communityFridgeNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi3 == null)?'grey-2':(communityFridgeNovContents.kpi3 >= '0' && communityFridgeNovContents.kpi3 <= '524.25')?'red':(communityFridgeNovContents.kpi3 > '524.25' && communityFridgeNovContents.kpi3 <= '699')?'orange':(communityFridgeNovContents.kpi3 > '699' && communityFridgeNovContents.kpi3 < '873.75')?'yellow-7':(communityFridgeNovContents.kpi3 >= '873.75' && communityFridgeNovContents.kpi3 < '1048.5')?'green':(communityFridgeNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeDecContents.kpi1 == null)?'grey-2':(communityFridgeDecContents.kpi1 >= '0' && communityFridgeDecContents.kpi1 <= '238.8')?'red':(communityFridgeDecContents.kpi1 > '238.8' && communityFridgeDecContents.kpi1 <= '318.4')?'orange':(communityFridgeDecContents.kpi1 > '318.4' && communityFridgeDecContents.kpi1 < '398')?'yellow-7':(communityFridgeDecContents.kpi1 >= '398' && communityFridgeDecContents.kpi1 < '477.6')?'green':(communityFridgeDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi2 == null)?'grey-2':(communityFridgeDecContents.kpi2 >= '0' && communityFridgeDecContents.kpi2 <= '244.2')?'red':(communityFridgeDecContents.kpi2 > '244.2' && communityFridgeDecContents.kpi2 <= '325.6')?'orange':(communityFridgeDecContents.kpi2 > '325.6' && communityFridgeDecContents.kpi2 < '407')?'yellow-7':(communityFridgeDecContents.kpi2 >= '407' && communityFridgeDecContents.kpi2 < '488.4')?'green':(communityFridgeDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi3 == null)?'grey-2':(communityFridgeDecContents.kpi3 >= '0' && communityFridgeDecContents.kpi3 <= '524.25')?'red':(communityFridgeDecContents.kpi3 > '524.25' && communityFridgeDecContents.kpi3 <= '699')?'orange':(communityFridgeDecContents.kpi3 > '699' && communityFridgeDecContents.kpi3 < '873.75')?'yellow-7':(communityFridgeDecContents.kpi3 >= '873.75' && communityFridgeDecContents.kpi3 < '1048.5')?'green':(communityFridgeDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi1 == null)?'grey-2':(communityFridgeJanContents.kpi1 >= '0' && communityFridgeJanContents.kpi1 <= '238.8')?'red':(communityFridgeJanContents.kpi1 > '238.8' && communityFridgeJanContents.kpi1 <= '318.4')?'orange':(communityFridgeJanContents.kpi1 > '318.4' && communityFridgeJanContents.kpi1 < '398')?'yellow-7':(communityFridgeJanContents.kpi1 >= '398' && communityFridgeJanContents.kpi1 < '477.6')?'green':(communityFridgeJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi2 == null)?'grey-2':(communityFridgeJanContents.kpi2 >= '0' && communityFridgeJanContents.kpi2 <= '244.2')?'red':(communityFridgeJanContents.kpi2 > '244.2' && communityFridgeJanContents.kpi2 <= '325.6')?'orange':(communityFridgeJanContents.kpi2 > '325.6' && communityFridgeJanContents.kpi2 < '407')?'yellow-7':(communityFridgeJanContents.kpi2 >= '407' && communityFridgeJanContents.kpi2 < '488.4')?'green':(communityFridgeJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi3 == null)?'grey-2':(communityFridgeJanContents.kpi3 >= '0' && communityFridgeJanContents.kpi3 <= '524.25')?'red':(communityFridgeJanContents.kpi3 > '524.25' && communityFridgeJanContents.kpi3 <= '699')?'orange':(communityFridgeJanContents.kpi3 > '699' && communityFridgeJanContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJanContents.kpi3 >= '873.75' && communityFridgeJanContents.kpi3 < '1048.5')?'green':(communityFridgeJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeFebContents.kpi1 == null)?'grey-2':(communityFridgeFebContents.kpi1 >= '0' && communityFridgeFebContents.kpi1 <= '238.8')?'red':(communityFridgeFebContents.kpi1 > '238.8' && communityFridgeFebContents.kpi1 <= '318.4')?'orange':(communityFridgeFebContents.kpi1 > '318.4' && communityFridgeFebContents.kpi1 < '398')?'yellow-7':(communityFridgeFebContents.kpi1 >= '398' && communityFridgeFebContents.kpi1 < '477.6')?'green':(communityFridgeFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi2 == null)?'grey-2':(communityFridgeFebContents.kpi2 >= '0' && communityFridgeFebContents.kpi2 <= '244.2')?'red':(communityFridgeFebContents.kpi2 > '244.2' && communityFridgeFebContents.kpi2 <= '325.6')?'orange':(communityFridgeFebContents.kpi2 > '325.6' && communityFridgeFebContents.kpi2 < '407')?'yellow-7':(communityFridgeFebContents.kpi2 >= '407' && communityFridgeFebContents.kpi2 < '488.4')?'green':(communityFridgeFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi3 == null)?'grey-2':(communityFridgeFebContents.kpi3 >= '0' && communityFridgeFebContents.kpi3 <= '524.25')?'red':(communityFridgeFebContents.kpi3 > '524.25' && communityFridgeFebContents.kpi3 <= '699')?'orange':(communityFridgeFebContents.kpi3 > '699' && communityFridgeFebContents.kpi3 < '873.75')?'yellow-7':(communityFridgeFebContents.kpi3 >= '873.75' && communityFridgeFebContents.kpi3 < '1048.5')?'green':(communityFridgeFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMarContents.kpi1 == null)?'grey-2':(communityFridgeMarContents.kpi1 >= '0' && communityFridgeMarContents.kpi1 <= '238.8')?'red':(communityFridgeMarContents.kpi1 > '238.8' && communityFridgeMarContents.kpi1 <= '318.4')?'orange':(communityFridgeMarContents.kpi1 > '318.4' && communityFridgeMarContents.kpi1 < '398')?'yellow-7':(communityFridgeMarContents.kpi1 >= '398' && communityFridgeMarContents.kpi1 < '477.6')?'green':(communityFridgeMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi2 == null)?'grey-2':(communityFridgeMarContents.kpi2 >= '0' && communityFridgeMarContents.kpi2 <= '244.2')?'red':(communityFridgeMarContents.kpi2 > '244.2' && communityFridgeMarContents.kpi2 <= '325.6')?'orange':(communityFridgeMarContents.kpi2 > '325.6' && communityFridgeMarContents.kpi2 < '407')?'yellow-7':(communityFridgeMarContents.kpi2 >= '407' && communityFridgeMarContents.kpi2 < '488.4')?'green':(communityFridgeMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi3 == null)?'grey-2':(communityFridgeMarContents.kpi3 >= '0' && communityFridgeMarContents.kpi3 <= '524.25')?'red':(communityFridgeMarContents.kpi3 > '524.25' && communityFridgeMarContents.kpi3 <= '699')?'orange':(communityFridgeMarContents.kpi3 > '699' && communityFridgeMarContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMarContents.kpi3 >= '873.75' && communityFridgeMarContents.kpi3 < '1048.5')?'green':(communityFridgeMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAprContents.kpi1 == null)?'grey-2':(communityFridgeAprContents.kpi1 >= '0' && communityFridgeAprContents.kpi1 <= '238.8')?'red':(communityFridgeAprContents.kpi1 > '238.8' && communityFridgeAprContents.kpi1 <= '318.4')?'orange':(communityFridgeAprContents.kpi1 > '318.4' && communityFridgeAprContents.kpi1 < '398')?'yellow-7':(communityFridgeAprContents.kpi1 >= '398' && communityFridgeAprContents.kpi1 < '477.6')?'green':(communityFridgeAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi2 == null)?'grey-2':(communityFridgeAprContents.kpi2 >= '0' && communityFridgeAprContents.kpi2 <= '244.2')?'red':(communityFridgeAprContents.kpi2 > '244.2' && communityFridgeAprContents.kpi2 <= '325.6')?'orange':(communityFridgeAprContents.kpi2 > '325.6' && communityFridgeAprContents.kpi2 < '407')?'yellow-7':(communityFridgeAprContents.kpi2 >= '407' && communityFridgeAprContents.kpi2 < '488.4')?'green':(communityFridgeAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi3 == null)?'grey-2':(communityFridgeAprContents.kpi3 >= '0' && communityFridgeAprContents.kpi3 <= '524.25')?'red':(communityFridgeAprContents.kpi3 > '524.25' && communityFridgeAprContents.kpi3 <= '699')?'orange':(communityFridgeAprContents.kpi3 > '699' && communityFridgeAprContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAprContents.kpi3 >= '873.75' && communityFridgeAprContents.kpi3 < '1048.5')?'green':(communityFridgeAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMayContents.kpi1 == null)?'grey-2':(communityFridgeMayContents.kpi1 >= '0' && communityFridgeMayContents.kpi1 <= '238.8')?'red':(communityFridgeMayContents.kpi1 > '238.8' && communityFridgeMayContents.kpi1 <= '318.4')?'orange':(communityFridgeMayContents.kpi1 > '318.4' && communityFridgeMayContents.kpi1 < '398')?'yellow-7':(communityFridgeMayContents.kpi1 >= '398' && communityFridgeMayContents.kpi1 < '477.6')?'green':(communityFridgeMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi2 == null)?'grey-2':(communityFridgeMayContents.kpi2 >= '0' && communityFridgeMayContents.kpi2 <= '244.2')?'red':(communityFridgeMayContents.kpi2 > '244.2' && communityFridgeMayContents.kpi2 <= '325.6')?'orange':(communityFridgeMayContents.kpi2 > '325.6' && communityFridgeMayContents.kpi2 < '407')?'yellow-7':(communityFridgeMayContents.kpi2 >= '407' && communityFridgeMayContents.kpi2 < '488.4')?'green':(communityFridgeMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi3 == null)?'grey-2':(communityFridgeMayContents.kpi3 >= '0' && communityFridgeMayContents.kpi3 <= '524.25')?'red':(communityFridgeMayContents.kpi3 > '524.25' && communityFridgeMayContents.kpi3 <= '699')?'orange':(communityFridgeMayContents.kpi3 > '699' && communityFridgeMayContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMayContents.kpi3 >= '873.75' && communityFridgeMayContents.kpi3 < '1048.5')?'green':(communityFridgeMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJunContents.kpi1 == null)?'grey-2':(communityFridgeJunContents.kpi1 >= '0' && communityFridgeJunContents.kpi1 <= '238.8')?'red':(communityFridgeJunContents.kpi1 > '238.8' && communityFridgeJunContents.kpi1 <= '318.4')?'orange':(communityFridgeJunContents.kpi1 > '318.4' && communityFridgeJunContents.kpi1 < '398')?'yellow-7':(communityFridgeJunContents.kpi1 >= '398' && communityFridgeJunContents.kpi1 < '477.6')?'green':(communityFridgeJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi2 == null)?'grey-2':(communityFridgeJunContents.kpi2 >= '0' && communityFridgeJunContents.kpi2 <= '244.2')?'red':(communityFridgeJunContents.kpi2 > '244.2' && communityFridgeJunContents.kpi2 <= '325.6')?'orange':(communityFridgeJunContents.kpi2 > '325.6' && communityFridgeJunContents.kpi2 < '407')?'yellow-7':(communityFridgeJunContents.kpi2 >= '407' && communityFridgeJunContents.kpi2 < '488.4')?'green':(communityFridgeJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi3 == null)?'grey-2':(communityFridgeJunContents.kpi3 >= '0' && communityFridgeJunContents.kpi3 <= '524.25')?'red':(communityFridgeJunContents.kpi3 > '524.25' && communityFridgeJunContents.kpi3 <= '699')?'orange':(communityFridgeJunContents.kpi3 > '699' && communityFridgeJunContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJunContents.kpi3 >= '873.75' && communityFridgeJunContents.kpi3 < '1048.5')?'green':(communityFridgeJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJulContents.kpi1 == null)?'grey-2':(communityFridgeJulContents.kpi1 >= '0' && communityFridgeJulContents.kpi1 <= '238.8')?'red':(communityFridgeJulContents.kpi1 > '238.8' && communityFridgeJulContents.kpi1 <= '318.4')?'orange':(communityFridgeJulContents.kpi1 > '318.4' && communityFridgeJulContents.kpi1 < '398')?'yellow-7':(communityFridgeJulContents.kpi1 >= '398' && communityFridgeJulContents.kpi1 < '477.6')?'green':(communityFridgeJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi2 == null)?'grey-2':(communityFridgeJulContents.kpi2 >= '0' && communityFridgeJulContents.kpi2 <= '244.2')?'red':(communityFridgeJulContents.kpi2 > '244.2' && communityFridgeJulContents.kpi2 <= '325.6')?'orange':(communityFridgeJulContents.kpi2 > '325.6' && communityFridgeJulContents.kpi2 < '407')?'yellow-7':(communityFridgeJulContents.kpi2 >= '407' && communityFridgeJulContents.kpi2 < '488.4')?'green':(communityFridgeJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi3 == null)?'grey-2':(communityFridgeJulContents.kpi3 >= '0' && communityFridgeJulContents.kpi3 <= '524.25')?'red':(communityFridgeJulContents.kpi3 > '524.25' && communityFridgeJulContents.kpi3 <= '699')?'orange':(communityFridgeJulContents.kpi3 > '699' && communityFridgeJulContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJulContents.kpi3 >= '873.75' && communityFridgeJulContents.kpi3 < '1048.5')?'green':(communityFridgeJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAugContents.kpi1 == null)?'grey-2':(communityFridgeAugContents.kpi1 >= '0' && communityFridgeAugContents.kpi1 <= '238.8')?'red':(communityFridgeAugContents.kpi1 > '238.8' && communityFridgeAugContents.kpi1 <= '318.4')?'orange':(communityFridgeAugContents.kpi1 > '318.4' && communityFridgeAugContents.kpi1 < '398')?'yellow-7':(communityFridgeAugContents.kpi1 >= '398' && communityFridgeAugContents.kpi1 < '477.6')?'green':(communityFridgeAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi2 == null)?'grey-2':(communityFridgeAugContents.kpi2 >= '0' && communityFridgeAugContents.kpi2 <= '244.2')?'red':(communityFridgeAugContents.kpi2 > '244.2' && communityFridgeAugContents.kpi2 <= '325.6')?'orange':(communityFridgeAugContents.kpi2 > '325.6' && communityFridgeAugContents.kpi2 < '407')?'yellow-7':(communityFridgeAugContents.kpi2 >= '407' && communityFridgeAugContents.kpi2 < '488.4')?'green':(communityFridgeAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi3 == null)?'grey-2':(communityFridgeAugContents.kpi3 >= '0' && communityFridgeAugContents.kpi3 <= '524.25')?'red':(communityFridgeAugContents.kpi3 > '524.25' && communityFridgeAugContents.kpi3 <= '699')?'orange':(communityFridgeAugContents.kpi3 > '699' && communityFridgeAugContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAugContents.kpi3 >= '873.75' && communityFridgeAugContents.kpi3 < '1048.5')?'green':(communityFridgeAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeSepContents.kpi1 == null)?'grey-2':(communityFridgeSepContents.kpi1 >= '0' && communityFridgeSepContents.kpi1 <= '238.8')?'red':(communityFridgeSepContents.kpi1 > '238.8' && communityFridgeSepContents.kpi1 <= '318.4')?'orange':(communityFridgeSepContents.kpi1 > '318.4' && communityFridgeSepContents.kpi1 < '398')?'yellow-7':(communityFridgeSepContents.kpi1 >= '398' && communityFridgeSepContents.kpi1 < '477.6')?'green':(communityFridgeSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi2 == null)?'grey-2':(communityFridgeSepContents.kpi2 >= '0' && communityFridgeSepContents.kpi2 <= '244.2')?'red':(communityFridgeSepContents.kpi2 > '244.2' && communityFridgeSepContents.kpi2 <= '325.6')?'orange':(communityFridgeSepContents.kpi2 > '325.6' && communityFridgeSepContents.kpi2 < '407')?'yellow-7':(communityFridgeSepContents.kpi2 >= '407' && communityFridgeSepContents.kpi2 < '488.4')?'green':(communityFridgeSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi3 == null)?'grey-2':(communityFridgeSepContents.kpi3 >= '0' && communityFridgeSepContents.kpi3 <= '524.25')?'red':(communityFridgeSepContents.kpi3 > '524.25' && communityFridgeSepContents.kpi3 <= '699')?'orange':(communityFridgeSepContents.kpi3 > '699' && communityFridgeSepContents.kpi3 < '873.75')?'yellow-7':(communityFridgeSepContents.kpi3 >= '873.75' && communityFridgeSepContents.kpi3 < '1048.5')?'green':(communityFridgeSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeOctContents.kpi1 == null)?'grey-2':(communityFridgeOctContents.kpi1 >= '0' && communityFridgeOctContents.kpi1 <= '238.8')?'red':(communityFridgeOctContents.kpi1 > '238.8' && communityFridgeOctContents.kpi1 <= '318.4')?'orange':(communityFridgeOctContents.kpi1 > '318.4' && communityFridgeOctContents.kpi1 < '398')?'yellow-7':(communityFridgeOctContents.kpi1 >= '398' && communityFridgeOctContents.kpi1 < '477.6')?'green':(communityFridgeOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi2 == null)?'grey-2':(communityFridgeOctContents.kpi2 >= '0' && communityFridgeOctContents.kpi2 <= '244.2')?'red':(communityFridgeOctContents.kpi2 > '244.2' && communityFridgeOctContents.kpi2 <= '325.6')?'orange':(communityFridgeOctContents.kpi2 > '325.6' && communityFridgeOctContents.kpi2 < '407')?'yellow-7':(communityFridgeOctContents.kpi2 >= '407' && communityFridgeOctContents.kpi2 < '488.4')?'green':(communityFridgeOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi3 == null)?'grey-2':(communityFridgeOctContents.kpi3 >= '0' && communityFridgeOctContents.kpi3 <= '524.25')?'red':(communityFridgeOctContents.kpi3 > '524.25' && communityFridgeOctContents.kpi3 <= '699')?'orange':(communityFridgeOctContents.kpi3 > '699' && communityFridgeOctContents.kpi3 < '873.75')?'yellow-7':(communityFridgeOctContents.kpi3 >= '873.75' && communityFridgeOctContents.kpi3 < '1048.5')?'green':(communityFridgeOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeNovContents.kpi1 == null)?'grey-2':(communityFridgeNovContents.kpi1 >= '0' && communityFridgeNovContents.kpi1 <= '238.8')?'red':(communityFridgeNovContents.kpi1 > '238.8' && communityFridgeNovContents.kpi1 <= '318.4')?'orange':(communityFridgeNovContents.kpi1 > '318.4' && communityFridgeNovContents.kpi1 < '398')?'yellow-7':(communityFridgeNovContents.kpi1 >= '398' && communityFridgeNovContents.kpi1 < '477.6')?'green':(communityFridgeNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi2 == null)?'grey-2':(communityFridgeNovContents.kpi2 >= '0' && communityFridgeNovContents.kpi2 <= '244.2')?'red':(communityFridgeNovContents.kpi2 > '244.2' && communityFridgeNovContents.kpi2 <= '325.6')?'orange':(communityFridgeNovContents.kpi2 > '325.6' && communityFridgeNovContents.kpi2 < '407')?'yellow-7':(communityFridgeNovContents.kpi2 >= '407' && communityFridgeNovContents.kpi2 < '488.4')?'green':(communityFridgeNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi3 == null)?'grey-2':(communityFridgeNovContents.kpi3 >= '0' && communityFridgeNovContents.kpi3 <= '524.25')?'red':(communityFridgeNovContents.kpi3 > '524.25' && communityFridgeNovContents.kpi3 <= '699')?'orange':(communityFridgeNovContents.kpi3 > '699' && communityFridgeNovContents.kpi3 < '873.75')?'yellow-7':(communityFridgeNovContents.kpi3 >= '873.75' && communityFridgeNovContents.kpi3 < '1048.5')?'green':(communityFridgeNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeDecContents.kpi1 == null)?'grey-2':(communityFridgeDecContents.kpi1 >= '0' && communityFridgeDecContents.kpi1 <= '238.8')?'red':(communityFridgeDecContents.kpi1 > '238.8' && communityFridgeDecContents.kpi1 <= '318.4')?'orange':(communityFridgeDecContents.kpi1 > '318.4' && communityFridgeDecContents.kpi1 < '398')?'yellow-7':(communityFridgeDecContents.kpi1 >= '398' && communityFridgeDecContents.kpi1 < '477.6')?'green':(communityFridgeDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi2 == null)?'grey-2':(communityFridgeDecContents.kpi2 >= '0' && communityFridgeDecContents.kpi2 <= '244.2')?'red':(communityFridgeDecContents.kpi2 > '244.2' && communityFridgeDecContents.kpi2 <= '325.6')?'orange':(communityFridgeDecContents.kpi2 > '325.6' && communityFridgeDecContents.kpi2 < '407')?'yellow-7':(communityFridgeDecContents.kpi2 >= '407' && communityFridgeDecContents.kpi2 < '488.4')?'green':(communityFridgeDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi3 == null)?'grey-2':(communityFridgeDecContents.kpi3 >= '0' && communityFridgeDecContents.kpi3 <= '524.25')?'red':(communityFridgeDecContents.kpi3 > '524.25' && communityFridgeDecContents.kpi3 <= '699')?'orange':(communityFridgeDecContents.kpi3 > '699' && communityFridgeDecContents.kpi3 < '873.75')?'yellow-7':(communityFridgeDecContents.kpi3 >= '873.75' && communityFridgeDecContents.kpi3 < '1048.5')?'green':(communityFridgeDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi1 == null)?'grey-2':(communityFridgeJanContents.kpi1 >= '0' && communityFridgeJanContents.kpi1 <= '238.8')?'red':(communityFridgeJanContents.kpi1 > '238.8' && communityFridgeJanContents.kpi1 <= '318.4')?'orange':(communityFridgeJanContents.kpi1 > '318.4' && communityFridgeJanContents.kpi1 < '398')?'yellow-7':(communityFridgeJanContents.kpi1 >= '398' && communityFridgeJanContents.kpi1 < '477.6')?'green':(communityFridgeJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi2 == null)?'grey-2':(communityFridgeJanContents.kpi2 >= '0' && communityFridgeJanContents.kpi2 <= '244.2')?'red':(communityFridgeJanContents.kpi2 > '244.2' && communityFridgeJanContents.kpi2 <= '325.6')?'orange':(communityFridgeJanContents.kpi2 > '325.6' && communityFridgeJanContents.kpi2 < '407')?'yellow-7':(communityFridgeJanContents.kpi2 >= '407' && communityFridgeJanContents.kpi2 < '488.4')?'green':(communityFridgeJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi3 == null)?'grey-2':(communityFridgeJanContents.kpi3 >= '0' && communityFridgeJanContents.kpi3 <= '524.25')?'red':(communityFridgeJanContents.kpi3 > '524.25' && communityFridgeJanContents.kpi3 <= '699')?'orange':(communityFridgeJanContents.kpi3 > '699' && communityFridgeJanContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJanContents.kpi3 >= '873.75' && communityFridgeJanContents.kpi3 < '1048.5')?'green':(communityFridgeJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeFebContents.kpi1 == null)?'grey-2':(communityFridgeFebContents.kpi1 >= '0' && communityFridgeFebContents.kpi1 <= '238.8')?'red':(communityFridgeFebContents.kpi1 > '238.8' && communityFridgeFebContents.kpi1 <= '318.4')?'orange':(communityFridgeFebContents.kpi1 > '318.4' && communityFridgeFebContents.kpi1 < '398')?'yellow-7':(communityFridgeFebContents.kpi1 >= '398' && communityFridgeFebContents.kpi1 < '477.6')?'green':(communityFridgeFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi2 == null)?'grey-2':(communityFridgeFebContents.kpi2 >= '0' && communityFridgeFebContents.kpi2 <= '244.2')?'red':(communityFridgeFebContents.kpi2 > '244.2' && communityFridgeFebContents.kpi2 <= '325.6')?'orange':(communityFridgeFebContents.kpi2 > '325.6' && communityFridgeFebContents.kpi2 < '407')?'yellow-7':(communityFridgeFebContents.kpi2 >= '407' && communityFridgeFebContents.kpi2 < '488.4')?'green':(communityFridgeFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi3 == null)?'grey-2':(communityFridgeFebContents.kpi3 >= '0' && communityFridgeFebContents.kpi3 <= '524.25')?'red':(communityFridgeFebContents.kpi3 > '524.25' && communityFridgeFebContents.kpi3 <= '699')?'orange':(communityFridgeFebContents.kpi3 > '699' && communityFridgeFebContents.kpi3 < '873.75')?'yellow-7':(communityFridgeFebContents.kpi3 >= '873.75' && communityFridgeFebContents.kpi3 < '1048.5')?'green':(communityFridgeFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMarContents.kpi1 == null)?'grey-2':(communityFridgeMarContents.kpi1 >= '0' && communityFridgeMarContents.kpi1 <= '238.8')?'red':(communityFridgeMarContents.kpi1 > '238.8' && communityFridgeMarContents.kpi1 <= '318.4')?'orange':(communityFridgeMarContents.kpi1 > '318.4' && communityFridgeMarContents.kpi1 < '398')?'yellow-7':(communityFridgeMarContents.kpi1 >= '398' && communityFridgeMarContents.kpi1 < '477.6')?'green':(communityFridgeMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi2 == null)?'grey-2':(communityFridgeMarContents.kpi2 >= '0' && communityFridgeMarContents.kpi2 <= '244.2')?'red':(communityFridgeMarContents.kpi2 > '244.2' && communityFridgeMarContents.kpi2 <= '325.6')?'orange':(communityFridgeMarContents.kpi2 > '325.6' && communityFridgeMarContents.kpi2 < '407')?'yellow-7':(communityFridgeMarContents.kpi2 >= '407' && communityFridgeMarContents.kpi2 < '488.4')?'green':(communityFridgeMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi3 == null)?'grey-2':(communityFridgeMarContents.kpi3 >= '0' && communityFridgeMarContents.kpi3 <= '524.25')?'red':(communityFridgeMarContents.kpi3 > '524.25' && communityFridgeMarContents.kpi3 <= '699')?'orange':(communityFridgeMarContents.kpi3 > '699' && communityFridgeMarContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMarContents.kpi3 >= '873.75' && communityFridgeMarContents.kpi3 < '1048.5')?'green':(communityFridgeMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAprContents.kpi1 == null)?'grey-2':(communityFridgeAprContents.kpi1 >= '0' && communityFridgeAprContents.kpi1 <= '238.8')?'red':(communityFridgeAprContents.kpi1 > '238.8' && communityFridgeAprContents.kpi1 <= '318.4')?'orange':(communityFridgeAprContents.kpi1 > '318.4' && communityFridgeAprContents.kpi1 < '398')?'yellow-7':(communityFridgeAprContents.kpi1 >= '398' && communityFridgeAprContents.kpi1 < '477.6')?'green':(communityFridgeAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi2 == null)?'grey-2':(communityFridgeAprContents.kpi2 >= '0' && communityFridgeAprContents.kpi2 <= '244.2')?'red':(communityFridgeAprContents.kpi2 > '244.2' && communityFridgeAprContents.kpi2 <= '325.6')?'orange':(communityFridgeAprContents.kpi2 > '325.6' && communityFridgeAprContents.kpi2 < '407')?'yellow-7':(communityFridgeAprContents.kpi2 >= '407' && communityFridgeAprContents.kpi2 < '488.4')?'green':(communityFridgeAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi3 == null)?'grey-2':(communityFridgeAprContents.kpi3 >= '0' && communityFridgeAprContents.kpi3 <= '524.25')?'red':(communityFridgeAprContents.kpi3 > '524.25' && communityFridgeAprContents.kpi3 <= '699')?'orange':(communityFridgeAprContents.kpi3 > '699' && communityFridgeAprContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAprContents.kpi3 >= '873.75' && communityFridgeAprContents.kpi3 < '1048.5')?'green':(communityFridgeAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMayContents.kpi1 == null)?'grey-2':(communityFridgeMayContents.kpi1 >= '0' && communityFridgeMayContents.kpi1 <= '238.8')?'red':(communityFridgeMayContents.kpi1 > '238.8' && communityFridgeMayContents.kpi1 <= '318.4')?'orange':(communityFridgeMayContents.kpi1 > '318.4' && communityFridgeMayContents.kpi1 < '398')?'yellow-7':(communityFridgeMayContents.kpi1 >= '398' && communityFridgeMayContents.kpi1 < '477.6')?'green':(communityFridgeMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi2 == null)?'grey-2':(communityFridgeMayContents.kpi2 >= '0' && communityFridgeMayContents.kpi2 <= '244.2')?'red':(communityFridgeMayContents.kpi2 > '244.2' && communityFridgeMayContents.kpi2 <= '325.6')?'orange':(communityFridgeMayContents.kpi2 > '325.6' && communityFridgeMayContents.kpi2 < '407')?'yellow-7':(communityFridgeMayContents.kpi2 >= '407' && communityFridgeMayContents.kpi2 < '488.4')?'green':(communityFridgeMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi3 == null)?'grey-2':(communityFridgeMayContents.kpi3 >= '0' && communityFridgeMayContents.kpi3 <= '524.25')?'red':(communityFridgeMayContents.kpi3 > '524.25' && communityFridgeMayContents.kpi3 <= '699')?'orange':(communityFridgeMayContents.kpi3 > '699' && communityFridgeMayContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMayContents.kpi3 >= '873.75' && communityFridgeMayContents.kpi3 < '1048.5')?'green':(communityFridgeMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJunContents.kpi1 == null)?'grey-2':(communityFridgeJunContents.kpi1 >= '0' && communityFridgeJunContents.kpi1 <= '238.8')?'red':(communityFridgeJunContents.kpi1 > '238.8' && communityFridgeJunContents.kpi1 <= '318.4')?'orange':(communityFridgeJunContents.kpi1 > '318.4' && communityFridgeJunContents.kpi1 < '398')?'yellow-7':(communityFridgeJunContents.kpi1 >= '398' && communityFridgeJunContents.kpi1 < '477.6')?'green':(communityFridgeJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi2 == null)?'grey-2':(communityFridgeJunContents.kpi2 >= '0' && communityFridgeJunContents.kpi2 <= '244.2')?'red':(communityFridgeJunContents.kpi2 > '244.2' && communityFridgeJunContents.kpi2 <= '325.6')?'orange':(communityFridgeJunContents.kpi2 > '325.6' && communityFridgeJunContents.kpi2 < '407')?'yellow-7':(communityFridgeJunContents.kpi2 >= '407' && communityFridgeJunContents.kpi2 < '488.4')?'green':(communityFridgeJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi3 == null)?'grey-2':(communityFridgeJunContents.kpi3 >= '0' && communityFridgeJunContents.kpi3 <= '524.25')?'red':(communityFridgeJunContents.kpi3 > '524.25' && communityFridgeJunContents.kpi3 <= '699')?'orange':(communityFridgeJunContents.kpi3 > '699' && communityFridgeJunContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJunContents.kpi3 >= '873.75' && communityFridgeJunContents.kpi3 < '1048.5')?'green':(communityFridgeJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJulContents.kpi1 == null)?'grey-2':(communityFridgeJulContents.kpi1 >= '0' && communityFridgeJulContents.kpi1 <= '238.8')?'red':(communityFridgeJulContents.kpi1 > '238.8' && communityFridgeJulContents.kpi1 <= '318.4')?'orange':(communityFridgeJulContents.kpi1 > '318.4' && communityFridgeJulContents.kpi1 < '398')?'yellow-7':(communityFridgeJulContents.kpi1 >= '398' && communityFridgeJulContents.kpi1 < '477.6')?'green':(communityFridgeJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi2 == null)?'grey-2':(communityFridgeJulContents.kpi2 >= '0' && communityFridgeJulContents.kpi2 <= '244.2')?'red':(communityFridgeJulContents.kpi2 > '244.2' && communityFridgeJulContents.kpi2 <= '325.6')?'orange':(communityFridgeJulContents.kpi2 > '325.6' && communityFridgeJulContents.kpi2 < '407')?'yellow-7':(communityFridgeJulContents.kpi2 >= '407' && communityFridgeJulContents.kpi2 < '488.4')?'green':(communityFridgeJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi3 == null)?'grey-2':(communityFridgeJulContents.kpi3 >= '0' && communityFridgeJulContents.kpi3 <= '524.25')?'red':(communityFridgeJulContents.kpi3 > '524.25' && communityFridgeJulContents.kpi3 <= '699')?'orange':(communityFridgeJulContents.kpi3 > '699' && communityFridgeJulContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJulContents.kpi3 >= '873.75' && communityFridgeJulContents.kpi3 < '1048.5')?'green':(communityFridgeJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAugContents.kpi1 == null)?'grey-2':(communityFridgeAugContents.kpi1 >= '0' && communityFridgeAugContents.kpi1 <= '238.8')?'red':(communityFridgeAugContents.kpi1 > '238.8' && communityFridgeAugContents.kpi1 <= '318.4')?'orange':(communityFridgeAugContents.kpi1 > '318.4' && communityFridgeAugContents.kpi1 < '398')?'yellow-7':(communityFridgeAugContents.kpi1 >= '398' && communityFridgeAugContents.kpi1 < '477.6')?'green':(communityFridgeAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi2 == null)?'grey-2':(communityFridgeAugContents.kpi2 >= '0' && communityFridgeAugContents.kpi2 <= '244.2')?'red':(communityFridgeAugContents.kpi2 > '244.2' && communityFridgeAugContents.kpi2 <= '325.6')?'orange':(communityFridgeAugContents.kpi2 > '325.6' && communityFridgeAugContents.kpi2 < '407')?'yellow-7':(communityFridgeAugContents.kpi2 >= '407' && communityFridgeAugContents.kpi2 < '488.4')?'green':(communityFridgeAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi3 == null)?'grey-2':(communityFridgeAugContents.kpi3 >= '0' && communityFridgeAugContents.kpi3 <= '524.25')?'red':(communityFridgeAugContents.kpi3 > '524.25' && communityFridgeAugContents.kpi3 <= '699')?'orange':(communityFridgeAugContents.kpi3 > '699' && communityFridgeAugContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAugContents.kpi3 >= '873.75' && communityFridgeAugContents.kpi3 < '1048.5')?'green':(communityFridgeAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeSepContents.kpi1 == null)?'grey-2':(communityFridgeSepContents.kpi1 >= '0' && communityFridgeSepContents.kpi1 <= '238.8')?'red':(communityFridgeSepContents.kpi1 > '238.8' && communityFridgeSepContents.kpi1 <= '318.4')?'orange':(communityFridgeSepContents.kpi1 > '318.4' && communityFridgeSepContents.kpi1 < '398')?'yellow-7':(communityFridgeSepContents.kpi1 >= '398' && communityFridgeSepContents.kpi1 < '477.6')?'green':(communityFridgeSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi2 == null)?'grey-2':(communityFridgeSepContents.kpi2 >= '0' && communityFridgeSepContents.kpi2 <= '244.2')?'red':(communityFridgeSepContents.kpi2 > '244.2' && communityFridgeSepContents.kpi2 <= '325.6')?'orange':(communityFridgeSepContents.kpi2 > '325.6' && communityFridgeSepContents.kpi2 < '407')?'yellow-7':(communityFridgeSepContents.kpi2 >= '407' && communityFridgeSepContents.kpi2 < '488.4')?'green':(communityFridgeSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi3 == null)?'grey-2':(communityFridgeSepContents.kpi3 >= '0' && communityFridgeSepContents.kpi3 <= '524.25')?'red':(communityFridgeSepContents.kpi3 > '524.25' && communityFridgeSepContents.kpi3 <= '699')?'orange':(communityFridgeSepContents.kpi3 > '699' && communityFridgeSepContents.kpi3 < '873.75')?'yellow-7':(communityFridgeSepContents.kpi3 >= '873.75' && communityFridgeSepContents.kpi3 < '1048.5')?'green':(communityFridgeSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeOctContents.kpi1 == null)?'grey-2':(communityFridgeOctContents.kpi1 >= '0' && communityFridgeOctContents.kpi1 <= '238.8')?'red':(communityFridgeOctContents.kpi1 > '238.8' && communityFridgeOctContents.kpi1 <= '318.4')?'orange':(communityFridgeOctContents.kpi1 > '318.4' && communityFridgeOctContents.kpi1 < '398')?'yellow-7':(communityFridgeOctContents.kpi1 >= '398' && communityFridgeOctContents.kpi1 < '477.6')?'green':(communityFridgeOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi2 == null)?'grey-2':(communityFridgeOctContents.kpi2 >= '0' && communityFridgeOctContents.kpi2 <= '244.2')?'red':(communityFridgeOctContents.kpi2 > '244.2' && communityFridgeOctContents.kpi2 <= '325.6')?'orange':(communityFridgeOctContents.kpi2 > '325.6' && communityFridgeOctContents.kpi2 < '407')?'yellow-7':(communityFridgeOctContents.kpi2 >= '407' && communityFridgeOctContents.kpi2 < '488.4')?'green':(communityFridgeOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi3 == null)?'grey-2':(communityFridgeOctContents.kpi3 >= '0' && communityFridgeOctContents.kpi3 <= '524.25')?'red':(communityFridgeOctContents.kpi3 > '524.25' && communityFridgeOctContents.kpi3 <= '699')?'orange':(communityFridgeOctContents.kpi3 > '699' && communityFridgeOctContents.kpi3 < '873.75')?'yellow-7':(communityFridgeOctContents.kpi3 >= '873.75' && communityFridgeOctContents.kpi3 < '1048.5')?'green':(communityFridgeOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeNovContents.kpi1 == null)?'grey-2':(communityFridgeNovContents.kpi1 >= '0' && communityFridgeNovContents.kpi1 <= '238.8')?'red':(communityFridgeNovContents.kpi1 > '238.8' && communityFridgeNovContents.kpi1 <= '318.4')?'orange':(communityFridgeNovContents.kpi1 > '318.4' && communityFridgeNovContents.kpi1 < '398')?'yellow-7':(communityFridgeNovContents.kpi1 >= '398' && communityFridgeNovContents.kpi1 < '477.6')?'green':(communityFridgeNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi2 == null)?'grey-2':(communityFridgeNovContents.kpi2 >= '0' && communityFridgeNovContents.kpi2 <= '244.2')?'red':(communityFridgeNovContents.kpi2 > '244.2' && communityFridgeNovContents.kpi2 <= '325.6')?'orange':(communityFridgeNovContents.kpi2 > '325.6' && communityFridgeNovContents.kpi2 < '407')?'yellow-7':(communityFridgeNovContents.kpi2 >= '407' && communityFridgeNovContents.kpi2 < '488.4')?'green':(communityFridgeNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi3 == null)?'grey-2':(communityFridgeNovContents.kpi3 >= '0' && communityFridgeNovContents.kpi3 <= '524.25')?'red':(communityFridgeNovContents.kpi3 > '524.25' && communityFridgeNovContents.kpi3 <= '699')?'orange':(communityFridgeNovContents.kpi3 > '699' && communityFridgeNovContents.kpi3 < '873.75')?'yellow-7':(communityFridgeNovContents.kpi3 >= '873.75' && communityFridgeNovContents.kpi3 < '1048.5')?'green':(communityFridgeNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeDecContents.kpi1 == null)?'grey-2':(communityFridgeDecContents.kpi1 >= '0' && communityFridgeDecContents.kpi1 <= '238.8')?'red':(communityFridgeDecContents.kpi1 > '238.8' && communityFridgeDecContents.kpi1 <= '318.4')?'orange':(communityFridgeDecContents.kpi1 > '318.4' && communityFridgeDecContents.kpi1 < '398')?'yellow-7':(communityFridgeDecContents.kpi1 >= '398' && communityFridgeDecContents.kpi1 < '477.6')?'green':(communityFridgeDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi2 == null)?'grey-2':(communityFridgeDecContents.kpi2 >= '0' && communityFridgeDecContents.kpi2 <= '244.2')?'red':(communityFridgeDecContents.kpi2 > '244.2' && communityFridgeDecContents.kpi2 <= '325.6')?'orange':(communityFridgeDecContents.kpi2 > '325.6' && communityFridgeDecContents.kpi2 < '407')?'yellow-7':(communityFridgeDecContents.kpi2 >= '407' && communityFridgeDecContents.kpi2 < '488.4')?'green':(communityFridgeDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi3 == null)?'grey-2':(communityFridgeDecContents.kpi3 >= '0' && communityFridgeDecContents.kpi3 <= '524.25')?'red':(communityFridgeDecContents.kpi3 > '524.25' && communityFridgeDecContents.kpi3 <= '699')?'orange':(communityFridgeDecContents.kpi3 > '699' && communityFridgeDecContents.kpi3 < '873.75')?'yellow-7':(communityFridgeDecContents.kpi3 >= '873.75' && communityFridgeDecContents.kpi3 < '1048.5')?'green':(communityFridgeDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi1 == null)?'grey-2':(communityFridgeJanContents.kpi1 >= '0' && communityFridgeJanContents.kpi1 <= '238.8')?'red':(communityFridgeJanContents.kpi1 > '238.8' && communityFridgeJanContents.kpi1 <= '318.4')?'orange':(communityFridgeJanContents.kpi1 > '318.4' && communityFridgeJanContents.kpi1 < '398')?'yellow-7':(communityFridgeJanContents.kpi1 >= '398' && communityFridgeJanContents.kpi1 < '477.6')?'green':(communityFridgeJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi2 == null)?'grey-2':(communityFridgeJanContents.kpi2 >= '0' && communityFridgeJanContents.kpi2 <= '244.2')?'red':(communityFridgeJanContents.kpi2 > '244.2' && communityFridgeJanContents.kpi2 <= '325.6')?'orange':(communityFridgeJanContents.kpi2 > '325.6' && communityFridgeJanContents.kpi2 < '407')?'yellow-7':(communityFridgeJanContents.kpi2 >= '407' && communityFridgeJanContents.kpi2 < '488.4')?'green':(communityFridgeJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi3 == null)?'grey-2':(communityFridgeJanContents.kpi3 >= '0' && communityFridgeJanContents.kpi3 <= '524.25')?'red':(communityFridgeJanContents.kpi3 > '524.25' && communityFridgeJanContents.kpi3 <= '699')?'orange':(communityFridgeJanContents.kpi3 > '699' && communityFridgeJanContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJanContents.kpi3 >= '873.75' && communityFridgeJanContents.kpi3 < '1048.5')?'green':(communityFridgeJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeFebContents.kpi1 == null)?'grey-2':(communityFridgeFebContents.kpi1 >= '0' && communityFridgeFebContents.kpi1 <= '238.8')?'red':(communityFridgeFebContents.kpi1 > '238.8' && communityFridgeFebContents.kpi1 <= '318.4')?'orange':(communityFridgeFebContents.kpi1 > '318.4' && communityFridgeFebContents.kpi1 < '398')?'yellow-7':(communityFridgeFebContents.kpi1 >= '398' && communityFridgeFebContents.kpi1 < '477.6')?'green':(communityFridgeFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi2 == null)?'grey-2':(communityFridgeFebContents.kpi2 >= '0' && communityFridgeFebContents.kpi2 <= '244.2')?'red':(communityFridgeFebContents.kpi2 > '244.2' && communityFridgeFebContents.kpi2 <= '325.6')?'orange':(communityFridgeFebContents.kpi2 > '325.6' && communityFridgeFebContents.kpi2 < '407')?'yellow-7':(communityFridgeFebContents.kpi2 >= '407' && communityFridgeFebContents.kpi2 < '488.4')?'green':(communityFridgeFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi3 == null)?'grey-2':(communityFridgeFebContents.kpi3 >= '0' && communityFridgeFebContents.kpi3 <= '524.25')?'red':(communityFridgeFebContents.kpi3 > '524.25' && communityFridgeFebContents.kpi3 <= '699')?'orange':(communityFridgeFebContents.kpi3 > '699' && communityFridgeFebContents.kpi3 < '873.75')?'yellow-7':(communityFridgeFebContents.kpi3 >= '873.75' && communityFridgeFebContents.kpi3 < '1048.5')?'green':(communityFridgeFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMarContents.kpi1 == null)?'grey-2':(communityFridgeMarContents.kpi1 >= '0' && communityFridgeMarContents.kpi1 <= '238.8')?'red':(communityFridgeMarContents.kpi1 > '238.8' && communityFridgeMarContents.kpi1 <= '318.4')?'orange':(communityFridgeMarContents.kpi1 > '318.4' && communityFridgeMarContents.kpi1 < '398')?'yellow-7':(communityFridgeMarContents.kpi1 >= '398' && communityFridgeMarContents.kpi1 < '477.6')?'green':(communityFridgeMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi2 == null)?'grey-2':(communityFridgeMarContents.kpi2 >= '0' && communityFridgeMarContents.kpi2 <= '244.2')?'red':(communityFridgeMarContents.kpi2 > '244.2' && communityFridgeMarContents.kpi2 <= '325.6')?'orange':(communityFridgeMarContents.kpi2 > '325.6' && communityFridgeMarContents.kpi2 < '407')?'yellow-7':(communityFridgeMarContents.kpi2 >= '407' && communityFridgeMarContents.kpi2 < '488.4')?'green':(communityFridgeMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi3 == null)?'grey-2':(communityFridgeMarContents.kpi3 >= '0' && communityFridgeMarContents.kpi3 <= '524.25')?'red':(communityFridgeMarContents.kpi3 > '524.25' && communityFridgeMarContents.kpi3 <= '699')?'orange':(communityFridgeMarContents.kpi3 > '699' && communityFridgeMarContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMarContents.kpi3 >= '873.75' && communityFridgeMarContents.kpi3 < '1048.5')?'green':(communityFridgeMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAprContents.kpi1 == null)?'grey-2':(communityFridgeAprContents.kpi1 >= '0' && communityFridgeAprContents.kpi1 <= '238.8')?'red':(communityFridgeAprContents.kpi1 > '238.8' && communityFridgeAprContents.kpi1 <= '318.4')?'orange':(communityFridgeAprContents.kpi1 > '318.4' && communityFridgeAprContents.kpi1 < '398')?'yellow-7':(communityFridgeAprContents.kpi1 >= '398' && communityFridgeAprContents.kpi1 < '477.6')?'green':(communityFridgeAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi2 == null)?'grey-2':(communityFridgeAprContents.kpi2 >= '0' && communityFridgeAprContents.kpi2 <= '244.2')?'red':(communityFridgeAprContents.kpi2 > '244.2' && communityFridgeAprContents.kpi2 <= '325.6')?'orange':(communityFridgeAprContents.kpi2 > '325.6' && communityFridgeAprContents.kpi2 < '407')?'yellow-7':(communityFridgeAprContents.kpi2 >= '407' && communityFridgeAprContents.kpi2 < '488.4')?'green':(communityFridgeAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi3 == null)?'grey-2':(communityFridgeAprContents.kpi3 >= '0' && communityFridgeAprContents.kpi3 <= '524.25')?'red':(communityFridgeAprContents.kpi3 > '524.25' && communityFridgeAprContents.kpi3 <= '699')?'orange':(communityFridgeAprContents.kpi3 > '699' && communityFridgeAprContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAprContents.kpi3 >= '873.75' && communityFridgeAprContents.kpi3 < '1048.5')?'green':(communityFridgeAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMayContents.kpi1 == null)?'grey-2':(communityFridgeMayContents.kpi1 >= '0' && communityFridgeMayContents.kpi1 <= '238.8')?'red':(communityFridgeMayContents.kpi1 > '238.8' && communityFridgeMayContents.kpi1 <= '318.4')?'orange':(communityFridgeMayContents.kpi1 > '318.4' && communityFridgeMayContents.kpi1 < '398')?'yellow-7':(communityFridgeMayContents.kpi1 >= '398' && communityFridgeMayContents.kpi1 < '477.6')?'green':(communityFridgeMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi2 == null)?'grey-2':(communityFridgeMayContents.kpi2 >= '0' && communityFridgeMayContents.kpi2 <= '244.2')?'red':(communityFridgeMayContents.kpi2 > '244.2' && communityFridgeMayContents.kpi2 <= '325.6')?'orange':(communityFridgeMayContents.kpi2 > '325.6' && communityFridgeMayContents.kpi2 < '407')?'yellow-7':(communityFridgeMayContents.kpi2 >= '407' && communityFridgeMayContents.kpi2 < '488.4')?'green':(communityFridgeMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi3 == null)?'grey-2':(communityFridgeMayContents.kpi3 >= '0' && communityFridgeMayContents.kpi3 <= '524.25')?'red':(communityFridgeMayContents.kpi3 > '524.25' && communityFridgeMayContents.kpi3 <= '699')?'orange':(communityFridgeMayContents.kpi3 > '699' && communityFridgeMayContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMayContents.kpi3 >= '873.75' && communityFridgeMayContents.kpi3 < '1048.5')?'green':(communityFridgeMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJunContents.kpi1 == null)?'grey-2':(communityFridgeJunContents.kpi1 >= '0' && communityFridgeJunContents.kpi1 <= '238.8')?'red':(communityFridgeJunContents.kpi1 > '238.8' && communityFridgeJunContents.kpi1 <= '318.4')?'orange':(communityFridgeJunContents.kpi1 > '318.4' && communityFridgeJunContents.kpi1 < '398')?'yellow-7':(communityFridgeJunContents.kpi1 >= '398' && communityFridgeJunContents.kpi1 < '477.6')?'green':(communityFridgeJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi2 == null)?'grey-2':(communityFridgeJunContents.kpi2 >= '0' && communityFridgeJunContents.kpi2 <= '244.2')?'red':(communityFridgeJunContents.kpi2 > '244.2' && communityFridgeJunContents.kpi2 <= '325.6')?'orange':(communityFridgeJunContents.kpi2 > '325.6' && communityFridgeJunContents.kpi2 < '407')?'yellow-7':(communityFridgeJunContents.kpi2 >= '407' && communityFridgeJunContents.kpi2 < '488.4')?'green':(communityFridgeJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi3 == null)?'grey-2':(communityFridgeJunContents.kpi3 >= '0' && communityFridgeJunContents.kpi3 <= '524.25')?'red':(communityFridgeJunContents.kpi3 > '524.25' && communityFridgeJunContents.kpi3 <= '699')?'orange':(communityFridgeJunContents.kpi3 > '699' && communityFridgeJunContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJunContents.kpi3 >= '873.75' && communityFridgeJunContents.kpi3 < '1048.5')?'green':(communityFridgeJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJulContents.kpi1 == null)?'grey-2':(communityFridgeJulContents.kpi1 >= '0' && communityFridgeJulContents.kpi1 <= '238.8')?'red':(communityFridgeJulContents.kpi1 > '238.8' && communityFridgeJulContents.kpi1 <= '318.4')?'orange':(communityFridgeJulContents.kpi1 > '318.4' && communityFridgeJulContents.kpi1 < '398')?'yellow-7':(communityFridgeJulContents.kpi1 >= '398' && communityFridgeJulContents.kpi1 < '477.6')?'green':(communityFridgeJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi2 == null)?'grey-2':(communityFridgeJulContents.kpi2 >= '0' && communityFridgeJulContents.kpi2 <= '244.2')?'red':(communityFridgeJulContents.kpi2 > '244.2' && communityFridgeJulContents.kpi2 <= '325.6')?'orange':(communityFridgeJulContents.kpi2 > '325.6' && communityFridgeJulContents.kpi2 < '407')?'yellow-7':(communityFridgeJulContents.kpi2 >= '407' && communityFridgeJulContents.kpi2 < '488.4')?'green':(communityFridgeJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi3 == null)?'grey-2':(communityFridgeJulContents.kpi3 >= '0' && communityFridgeJulContents.kpi3 <= '524.25')?'red':(communityFridgeJulContents.kpi3 > '524.25' && communityFridgeJulContents.kpi3 <= '699')?'orange':(communityFridgeJulContents.kpi3 > '699' && communityFridgeJulContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJulContents.kpi3 >= '873.75' && communityFridgeJulContents.kpi3 < '1048.5')?'green':(communityFridgeJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAugContents.kpi1 == null)?'grey-2':(communityFridgeAugContents.kpi1 >= '0' && communityFridgeAugContents.kpi1 <= '238.8')?'red':(communityFridgeAugContents.kpi1 > '238.8' && communityFridgeAugContents.kpi1 <= '318.4')?'orange':(communityFridgeAugContents.kpi1 > '318.4' && communityFridgeAugContents.kpi1 < '398')?'yellow-7':(communityFridgeAugContents.kpi1 >= '398' && communityFridgeAugContents.kpi1 < '477.6')?'green':(communityFridgeAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi2 == null)?'grey-2':(communityFridgeAugContents.kpi2 >= '0' && communityFridgeAugContents.kpi2 <= '244.2')?'red':(communityFridgeAugContents.kpi2 > '244.2' && communityFridgeAugContents.kpi2 <= '325.6')?'orange':(communityFridgeAugContents.kpi2 > '325.6' && communityFridgeAugContents.kpi2 < '407')?'yellow-7':(communityFridgeAugContents.kpi2 >= '407' && communityFridgeAugContents.kpi2 < '488.4')?'green':(communityFridgeAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi3 == null)?'grey-2':(communityFridgeAugContents.kpi3 >= '0' && communityFridgeAugContents.kpi3 <= '524.25')?'red':(communityFridgeAugContents.kpi3 > '524.25' && communityFridgeAugContents.kpi3 <= '699')?'orange':(communityFridgeAugContents.kpi3 > '699' && communityFridgeAugContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAugContents.kpi3 >= '873.75' && communityFridgeAugContents.kpi3 < '1048.5')?'green':(communityFridgeAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeSepContents.kpi1 == null)?'grey-2':(communityFridgeSepContents.kpi1 >= '0' && communityFridgeSepContents.kpi1 <= '238.8')?'red':(communityFridgeSepContents.kpi1 > '238.8' && communityFridgeSepContents.kpi1 <= '318.4')?'orange':(communityFridgeSepContents.kpi1 > '318.4' && communityFridgeSepContents.kpi1 < '398')?'yellow-7':(communityFridgeSepContents.kpi1 >= '398' && communityFridgeSepContents.kpi1 < '477.6')?'green':(communityFridgeSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi2 == null)?'grey-2':(communityFridgeSepContents.kpi2 >= '0' && communityFridgeSepContents.kpi2 <= '244.2')?'red':(communityFridgeSepContents.kpi2 > '244.2' && communityFridgeSepContents.kpi2 <= '325.6')?'orange':(communityFridgeSepContents.kpi2 > '325.6' && communityFridgeSepContents.kpi2 < '407')?'yellow-7':(communityFridgeSepContents.kpi2 >= '407' && communityFridgeSepContents.kpi2 < '488.4')?'green':(communityFridgeSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi3 == null)?'grey-2':(communityFridgeSepContents.kpi3 >= '0' && communityFridgeSepContents.kpi3 <= '524.25')?'red':(communityFridgeSepContents.kpi3 > '524.25' && communityFridgeSepContents.kpi3 <= '699')?'orange':(communityFridgeSepContents.kpi3 > '699' && communityFridgeSepContents.kpi3 < '873.75')?'yellow-7':(communityFridgeSepContents.kpi3 >= '873.75' && communityFridgeSepContents.kpi3 < '1048.5')?'green':(communityFridgeSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeOctContents.kpi1 == null)?'grey-2':(communityFridgeOctContents.kpi1 >= '0' && communityFridgeOctContents.kpi1 <= '238.8')?'red':(communityFridgeOctContents.kpi1 > '238.8' && communityFridgeOctContents.kpi1 <= '318.4')?'orange':(communityFridgeOctContents.kpi1 > '318.4' && communityFridgeOctContents.kpi1 < '398')?'yellow-7':(communityFridgeOctContents.kpi1 >= '398' && communityFridgeOctContents.kpi1 < '477.6')?'green':(communityFridgeOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi2 == null)?'grey-2':(communityFridgeOctContents.kpi2 >= '0' && communityFridgeOctContents.kpi2 <= '244.2')?'red':(communityFridgeOctContents.kpi2 > '244.2' && communityFridgeOctContents.kpi2 <= '325.6')?'orange':(communityFridgeOctContents.kpi2 > '325.6' && communityFridgeOctContents.kpi2 < '407')?'yellow-7':(communityFridgeOctContents.kpi2 >= '407' && communityFridgeOctContents.kpi2 < '488.4')?'green':(communityFridgeOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi3 == null)?'grey-2':(communityFridgeOctContents.kpi3 >= '0' && communityFridgeOctContents.kpi3 <= '524.25')?'red':(communityFridgeOctContents.kpi3 > '524.25' && communityFridgeOctContents.kpi3 <= '699')?'orange':(communityFridgeOctContents.kpi3 > '699' && communityFridgeOctContents.kpi3 < '873.75')?'yellow-7':(communityFridgeOctContents.kpi3 >= '873.75' && communityFridgeOctContents.kpi3 < '1048.5')?'green':(communityFridgeOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeNovContents.kpi1 == null)?'grey-2':(communityFridgeNovContents.kpi1 >= '0' && communityFridgeNovContents.kpi1 <= '238.8')?'red':(communityFridgeNovContents.kpi1 > '238.8' && communityFridgeNovContents.kpi1 <= '318.4')?'orange':(communityFridgeNovContents.kpi1 > '318.4' && communityFridgeNovContents.kpi1 < '398')?'yellow-7':(communityFridgeNovContents.kpi1 >= '398' && communityFridgeNovContents.kpi1 < '477.6')?'green':(communityFridgeNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi2 == null)?'grey-2':(communityFridgeNovContents.kpi2 >= '0' && communityFridgeNovContents.kpi2 <= '244.2')?'red':(communityFridgeNovContents.kpi2 > '244.2' && communityFridgeNovContents.kpi2 <= '325.6')?'orange':(communityFridgeNovContents.kpi2 > '325.6' && communityFridgeNovContents.kpi2 < '407')?'yellow-7':(communityFridgeNovContents.kpi2 >= '407' && communityFridgeNovContents.kpi2 < '488.4')?'green':(communityFridgeNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi3 == null)?'grey-2':(communityFridgeNovContents.kpi3 >= '0' && communityFridgeNovContents.kpi3 <= '524.25')?'red':(communityFridgeNovContents.kpi3 > '524.25' && communityFridgeNovContents.kpi3 <= '699')?'orange':(communityFridgeNovContents.kpi3 > '699' && communityFridgeNovContents.kpi3 < '873.75')?'yellow-7':(communityFridgeNovContents.kpi3 >= '873.75' && communityFridgeNovContents.kpi3 < '1048.5')?'green':(communityFridgeNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeDecContents.kpi1 == null)?'grey-2':(communityFridgeDecContents.kpi1 >= '0' && communityFridgeDecContents.kpi1 <= '238.8')?'red':(communityFridgeDecContents.kpi1 > '238.8' && communityFridgeDecContents.kpi1 <= '318.4')?'orange':(communityFridgeDecContents.kpi1 > '318.4' && communityFridgeDecContents.kpi1 < '398')?'yellow-7':(communityFridgeDecContents.kpi1 >= '398' && communityFridgeDecContents.kpi1 < '477.6')?'green':(communityFridgeDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi2 == null)?'grey-2':(communityFridgeDecContents.kpi2 >= '0' && communityFridgeDecContents.kpi2 <= '244.2')?'red':(communityFridgeDecContents.kpi2 > '244.2' && communityFridgeDecContents.kpi2 <= '325.6')?'orange':(communityFridgeDecContents.kpi2 > '325.6' && communityFridgeDecContents.kpi2 < '407')?'yellow-7':(communityFridgeDecContents.kpi2 >= '407' && communityFridgeDecContents.kpi2 < '488.4')?'green':(communityFridgeDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi3 == null)?'grey-2':(communityFridgeDecContents.kpi3 >= '0' && communityFridgeDecContents.kpi3 <= '524.25')?'red':(communityFridgeDecContents.kpi3 > '524.25' && communityFridgeDecContents.kpi3 <= '699')?'orange':(communityFridgeDecContents.kpi3 > '699' && communityFridgeDecContents.kpi3 < '873.75')?'yellow-7':(communityFridgeDecContents.kpi3 >= '873.75' && communityFridgeDecContents.kpi3 < '1048.5')?'green':(communityFridgeDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi1 == null)?'grey-2':(communityFridgeJanContents.kpi1 >= '0' && communityFridgeJanContents.kpi1 <= '238.8')?'red':(communityFridgeJanContents.kpi1 > '238.8' && communityFridgeJanContents.kpi1 <= '318.4')?'orange':(communityFridgeJanContents.kpi1 > '318.4' && communityFridgeJanContents.kpi1 < '398')?'yellow-7':(communityFridgeJanContents.kpi1 >= '398' && communityFridgeJanContents.kpi1 < '477.6')?'green':(communityFridgeJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi2 == null)?'grey-2':(communityFridgeJanContents.kpi2 >= '0' && communityFridgeJanContents.kpi2 <= '244.2')?'red':(communityFridgeJanContents.kpi2 > '244.2' && communityFridgeJanContents.kpi2 <= '325.6')?'orange':(communityFridgeJanContents.kpi2 > '325.6' && communityFridgeJanContents.kpi2 < '407')?'yellow-7':(communityFridgeJanContents.kpi2 >= '407' && communityFridgeJanContents.kpi2 < '488.4')?'green':(communityFridgeJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi3 == null)?'grey-2':(communityFridgeJanContents.kpi3 >= '0' && communityFridgeJanContents.kpi3 <= '524.25')?'red':(communityFridgeJanContents.kpi3 > '524.25' && communityFridgeJanContents.kpi3 <= '699')?'orange':(communityFridgeJanContents.kpi3 > '699' && communityFridgeJanContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJanContents.kpi3 >= '873.75' && communityFridgeJanContents.kpi3 < '1048.5')?'green':(communityFridgeJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeFebContents.kpi1 == null)?'grey-2':(communityFridgeFebContents.kpi1 >= '0' && communityFridgeFebContents.kpi1 <= '238.8')?'red':(communityFridgeFebContents.kpi1 > '238.8' && communityFridgeFebContents.kpi1 <= '318.4')?'orange':(communityFridgeFebContents.kpi1 > '318.4' && communityFridgeFebContents.kpi1 < '398')?'yellow-7':(communityFridgeFebContents.kpi1 >= '398' && communityFridgeFebContents.kpi1 < '477.6')?'green':(communityFridgeFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi2 == null)?'grey-2':(communityFridgeFebContents.kpi2 >= '0' && communityFridgeFebContents.kpi2 <= '244.2')?'red':(communityFridgeFebContents.kpi2 > '244.2' && communityFridgeFebContents.kpi2 <= '325.6')?'orange':(communityFridgeFebContents.kpi2 > '325.6' && communityFridgeFebContents.kpi2 < '407')?'yellow-7':(communityFridgeFebContents.kpi2 >= '407' && communityFridgeFebContents.kpi2 < '488.4')?'green':(communityFridgeFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi3 == null)?'grey-2':(communityFridgeFebContents.kpi3 >= '0' && communityFridgeFebContents.kpi3 <= '524.25')?'red':(communityFridgeFebContents.kpi3 > '524.25' && communityFridgeFebContents.kpi3 <= '699')?'orange':(communityFridgeFebContents.kpi3 > '699' && communityFridgeFebContents.kpi3 < '873.75')?'yellow-7':(communityFridgeFebContents.kpi3 >= '873.75' && communityFridgeFebContents.kpi3 < '1048.5')?'green':(communityFridgeFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMarContents.kpi1 == null)?'grey-2':(communityFridgeMarContents.kpi1 >= '0' && communityFridgeMarContents.kpi1 <= '238.8')?'red':(communityFridgeMarContents.kpi1 > '238.8' && communityFridgeMarContents.kpi1 <= '318.4')?'orange':(communityFridgeMarContents.kpi1 > '318.4' && communityFridgeMarContents.kpi1 < '398')?'yellow-7':(communityFridgeMarContents.kpi1 >= '398' && communityFridgeMarContents.kpi1 < '477.6')?'green':(communityFridgeMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi2 == null)?'grey-2':(communityFridgeMarContents.kpi2 >= '0' && communityFridgeMarContents.kpi2 <= '244.2')?'red':(communityFridgeMarContents.kpi2 > '244.2' && communityFridgeMarContents.kpi2 <= '325.6')?'orange':(communityFridgeMarContents.kpi2 > '325.6' && communityFridgeMarContents.kpi2 < '407')?'yellow-7':(communityFridgeMarContents.kpi2 >= '407' && communityFridgeMarContents.kpi2 < '488.4')?'green':(communityFridgeMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi3 == null)?'grey-2':(communityFridgeMarContents.kpi3 >= '0' && communityFridgeMarContents.kpi3 <= '524.25')?'red':(communityFridgeMarContents.kpi3 > '524.25' && communityFridgeMarContents.kpi3 <= '699')?'orange':(communityFridgeMarContents.kpi3 > '699' && communityFridgeMarContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMarContents.kpi3 >= '873.75' && communityFridgeMarContents.kpi3 < '1048.5')?'green':(communityFridgeMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAprContents.kpi1 == null)?'grey-2':(communityFridgeAprContents.kpi1 >= '0' && communityFridgeAprContents.kpi1 <= '238.8')?'red':(communityFridgeAprContents.kpi1 > '238.8' && communityFridgeAprContents.kpi1 <= '318.4')?'orange':(communityFridgeAprContents.kpi1 > '318.4' && communityFridgeAprContents.kpi1 < '398')?'yellow-7':(communityFridgeAprContents.kpi1 >= '398' && communityFridgeAprContents.kpi1 < '477.6')?'green':(communityFridgeAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi2 == null)?'grey-2':(communityFridgeAprContents.kpi2 >= '0' && communityFridgeAprContents.kpi2 <= '244.2')?'red':(communityFridgeAprContents.kpi2 > '244.2' && communityFridgeAprContents.kpi2 <= '325.6')?'orange':(communityFridgeAprContents.kpi2 > '325.6' && communityFridgeAprContents.kpi2 < '407')?'yellow-7':(communityFridgeAprContents.kpi2 >= '407' && communityFridgeAprContents.kpi2 < '488.4')?'green':(communityFridgeAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi3 == null)?'grey-2':(communityFridgeAprContents.kpi3 >= '0' && communityFridgeAprContents.kpi3 <= '524.25')?'red':(communityFridgeAprContents.kpi3 > '524.25' && communityFridgeAprContents.kpi3 <= '699')?'orange':(communityFridgeAprContents.kpi3 > '699' && communityFridgeAprContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAprContents.kpi3 >= '873.75' && communityFridgeAprContents.kpi3 < '1048.5')?'green':(communityFridgeAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMayContents.kpi1 == null)?'grey-2':(communityFridgeMayContents.kpi1 >= '0' && communityFridgeMayContents.kpi1 <= '238.8')?'red':(communityFridgeMayContents.kpi1 > '238.8' && communityFridgeMayContents.kpi1 <= '318.4')?'orange':(communityFridgeMayContents.kpi1 > '318.4' && communityFridgeMayContents.kpi1 < '398')?'yellow-7':(communityFridgeMayContents.kpi1 >= '398' && communityFridgeMayContents.kpi1 < '477.6')?'green':(communityFridgeMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi2 == null)?'grey-2':(communityFridgeMayContents.kpi2 >= '0' && communityFridgeMayContents.kpi2 <= '244.2')?'red':(communityFridgeMayContents.kpi2 > '244.2' && communityFridgeMayContents.kpi2 <= '325.6')?'orange':(communityFridgeMayContents.kpi2 > '325.6' && communityFridgeMayContents.kpi2 < '407')?'yellow-7':(communityFridgeMayContents.kpi2 >= '407' && communityFridgeMayContents.kpi2 < '488.4')?'green':(communityFridgeMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi3 == null)?'grey-2':(communityFridgeMayContents.kpi3 >= '0' && communityFridgeMayContents.kpi3 <= '524.25')?'red':(communityFridgeMayContents.kpi3 > '524.25' && communityFridgeMayContents.kpi3 <= '699')?'orange':(communityFridgeMayContents.kpi3 > '699' && communityFridgeMayContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMayContents.kpi3 >= '873.75' && communityFridgeMayContents.kpi3 < '1048.5')?'green':(communityFridgeMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJunContents.kpi1 == null)?'grey-2':(communityFridgeJunContents.kpi1 >= '0' && communityFridgeJunContents.kpi1 <= '238.8')?'red':(communityFridgeJunContents.kpi1 > '238.8' && communityFridgeJunContents.kpi1 <= '318.4')?'orange':(communityFridgeJunContents.kpi1 > '318.4' && communityFridgeJunContents.kpi1 < '398')?'yellow-7':(communityFridgeJunContents.kpi1 >= '398' && communityFridgeJunContents.kpi1 < '477.6')?'green':(communityFridgeJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi2 == null)?'grey-2':(communityFridgeJunContents.kpi2 >= '0' && communityFridgeJunContents.kpi2 <= '244.2')?'red':(communityFridgeJunContents.kpi2 > '244.2' && communityFridgeJunContents.kpi2 <= '325.6')?'orange':(communityFridgeJunContents.kpi2 > '325.6' && communityFridgeJunContents.kpi2 < '407')?'yellow-7':(communityFridgeJunContents.kpi2 >= '407' && communityFridgeJunContents.kpi2 < '488.4')?'green':(communityFridgeJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi3 == null)?'grey-2':(communityFridgeJunContents.kpi3 >= '0' && communityFridgeJunContents.kpi3 <= '524.25')?'red':(communityFridgeJunContents.kpi3 > '524.25' && communityFridgeJunContents.kpi3 <= '699')?'orange':(communityFridgeJunContents.kpi3 > '699' && communityFridgeJunContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJunContents.kpi3 >= '873.75' && communityFridgeJunContents.kpi3 < '1048.5')?'green':(communityFridgeJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJulContents.kpi1 == null)?'grey-2':(communityFridgeJulContents.kpi1 >= '0' && communityFridgeJulContents.kpi1 <= '238.8')?'red':(communityFridgeJulContents.kpi1 > '238.8' && communityFridgeJulContents.kpi1 <= '318.4')?'orange':(communityFridgeJulContents.kpi1 > '318.4' && communityFridgeJulContents.kpi1 < '398')?'yellow-7':(communityFridgeJulContents.kpi1 >= '398' && communityFridgeJulContents.kpi1 < '477.6')?'green':(communityFridgeJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi2 == null)?'grey-2':(communityFridgeJulContents.kpi2 >= '0' && communityFridgeJulContents.kpi2 <= '244.2')?'red':(communityFridgeJulContents.kpi2 > '244.2' && communityFridgeJulContents.kpi2 <= '325.6')?'orange':(communityFridgeJulContents.kpi2 > '325.6' && communityFridgeJulContents.kpi2 < '407')?'yellow-7':(communityFridgeJulContents.kpi2 >= '407' && communityFridgeJulContents.kpi2 < '488.4')?'green':(communityFridgeJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi3 == null)?'grey-2':(communityFridgeJulContents.kpi3 >= '0' && communityFridgeJulContents.kpi3 <= '524.25')?'red':(communityFridgeJulContents.kpi3 > '524.25' && communityFridgeJulContents.kpi3 <= '699')?'orange':(communityFridgeJulContents.kpi3 > '699' && communityFridgeJulContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJulContents.kpi3 >= '873.75' && communityFridgeJulContents.kpi3 < '1048.5')?'green':(communityFridgeJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAugContents.kpi1 == null)?'grey-2':(communityFridgeAugContents.kpi1 >= '0' && communityFridgeAugContents.kpi1 <= '238.8')?'red':(communityFridgeAugContents.kpi1 > '238.8' && communityFridgeAugContents.kpi1 <= '318.4')?'orange':(communityFridgeAugContents.kpi1 > '318.4' && communityFridgeAugContents.kpi1 < '398')?'yellow-7':(communityFridgeAugContents.kpi1 >= '398' && communityFridgeAugContents.kpi1 < '477.6')?'green':(communityFridgeAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi2 == null)?'grey-2':(communityFridgeAugContents.kpi2 >= '0' && communityFridgeAugContents.kpi2 <= '244.2')?'red':(communityFridgeAugContents.kpi2 > '244.2' && communityFridgeAugContents.kpi2 <= '325.6')?'orange':(communityFridgeAugContents.kpi2 > '325.6' && communityFridgeAugContents.kpi2 < '407')?'yellow-7':(communityFridgeAugContents.kpi2 >= '407' && communityFridgeAugContents.kpi2 < '488.4')?'green':(communityFridgeAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi3 == null)?'grey-2':(communityFridgeAugContents.kpi3 >= '0' && communityFridgeAugContents.kpi3 <= '524.25')?'red':(communityFridgeAugContents.kpi3 > '524.25' && communityFridgeAugContents.kpi3 <= '699')?'orange':(communityFridgeAugContents.kpi3 > '699' && communityFridgeAugContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAugContents.kpi3 >= '873.75' && communityFridgeAugContents.kpi3 < '1048.5')?'green':(communityFridgeAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeSepContents.kpi1 == null)?'grey-2':(communityFridgeSepContents.kpi1 >= '0' && communityFridgeSepContents.kpi1 <= '238.8')?'red':(communityFridgeSepContents.kpi1 > '238.8' && communityFridgeSepContents.kpi1 <= '318.4')?'orange':(communityFridgeSepContents.kpi1 > '318.4' && communityFridgeSepContents.kpi1 < '398')?'yellow-7':(communityFridgeSepContents.kpi1 >= '398' && communityFridgeSepContents.kpi1 < '477.6')?'green':(communityFridgeSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi2 == null)?'grey-2':(communityFridgeSepContents.kpi2 >= '0' && communityFridgeSepContents.kpi2 <= '244.2')?'red':(communityFridgeSepContents.kpi2 > '244.2' && communityFridgeSepContents.kpi2 <= '325.6')?'orange':(communityFridgeSepContents.kpi2 > '325.6' && communityFridgeSepContents.kpi2 < '407')?'yellow-7':(communityFridgeSepContents.kpi2 >= '407' && communityFridgeSepContents.kpi2 < '488.4')?'green':(communityFridgeSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi3 == null)?'grey-2':(communityFridgeSepContents.kpi3 >= '0' && communityFridgeSepContents.kpi3 <= '524.25')?'red':(communityFridgeSepContents.kpi3 > '524.25' && communityFridgeSepContents.kpi3 <= '699')?'orange':(communityFridgeSepContents.kpi3 > '699' && communityFridgeSepContents.kpi3 < '873.75')?'yellow-7':(communityFridgeSepContents.kpi3 >= '873.75' && communityFridgeSepContents.kpi3 < '1048.5')?'green':(communityFridgeSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeOctContents.kpi1 == null)?'grey-2':(communityFridgeOctContents.kpi1 >= '0' && communityFridgeOctContents.kpi1 <= '238.8')?'red':(communityFridgeOctContents.kpi1 > '238.8' && communityFridgeOctContents.kpi1 <= '318.4')?'orange':(communityFridgeOctContents.kpi1 > '318.4' && communityFridgeOctContents.kpi1 < '398')?'yellow-7':(communityFridgeOctContents.kpi1 >= '398' && communityFridgeOctContents.kpi1 < '477.6')?'green':(communityFridgeOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi2 == null)?'grey-2':(communityFridgeOctContents.kpi2 >= '0' && communityFridgeOctContents.kpi2 <= '244.2')?'red':(communityFridgeOctContents.kpi2 > '244.2' && communityFridgeOctContents.kpi2 <= '325.6')?'orange':(communityFridgeOctContents.kpi2 > '325.6' && communityFridgeOctContents.kpi2 < '407')?'yellow-7':(communityFridgeOctContents.kpi2 >= '407' && communityFridgeOctContents.kpi2 < '488.4')?'green':(communityFridgeOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi3 == null)?'grey-2':(communityFridgeOctContents.kpi3 >= '0' && communityFridgeOctContents.kpi3 <= '524.25')?'red':(communityFridgeOctContents.kpi3 > '524.25' && communityFridgeOctContents.kpi3 <= '699')?'orange':(communityFridgeOctContents.kpi3 > '699' && communityFridgeOctContents.kpi3 < '873.75')?'yellow-7':(communityFridgeOctContents.kpi3 >= '873.75' && communityFridgeOctContents.kpi3 < '1048.5')?'green':(communityFridgeOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeNovContents.kpi1 == null)?'grey-2':(communityFridgeNovContents.kpi1 >= '0' && communityFridgeNovContents.kpi1 <= '238.8')?'red':(communityFridgeNovContents.kpi1 > '238.8' && communityFridgeNovContents.kpi1 <= '318.4')?'orange':(communityFridgeNovContents.kpi1 > '318.4' && communityFridgeNovContents.kpi1 < '398')?'yellow-7':(communityFridgeNovContents.kpi1 >= '398' && communityFridgeNovContents.kpi1 < '477.6')?'green':(communityFridgeNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi2 == null)?'grey-2':(communityFridgeNovContents.kpi2 >= '0' && communityFridgeNovContents.kpi2 <= '244.2')?'red':(communityFridgeNovContents.kpi2 > '244.2' && communityFridgeNovContents.kpi2 <= '325.6')?'orange':(communityFridgeNovContents.kpi2 > '325.6' && communityFridgeNovContents.kpi2 < '407')?'yellow-7':(communityFridgeNovContents.kpi2 >= '407' && communityFridgeNovContents.kpi2 < '488.4')?'green':(communityFridgeNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi3 == null)?'grey-2':(communityFridgeNovContents.kpi3 >= '0' && communityFridgeNovContents.kpi3 <= '524.25')?'red':(communityFridgeNovContents.kpi3 > '524.25' && communityFridgeNovContents.kpi3 <= '699')?'orange':(communityFridgeNovContents.kpi3 > '699' && communityFridgeNovContents.kpi3 < '873.75')?'yellow-7':(communityFridgeNovContents.kpi3 >= '873.75' && communityFridgeNovContents.kpi3 < '1048.5')?'green':(communityFridgeNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeDecContents.kpi1 == null)?'grey-2':(communityFridgeDecContents.kpi1 >= '0' && communityFridgeDecContents.kpi1 <= '238.8')?'red':(communityFridgeDecContents.kpi1 > '238.8' && communityFridgeDecContents.kpi1 <= '318.4')?'orange':(communityFridgeDecContents.kpi1 > '318.4' && communityFridgeDecContents.kpi1 < '398')?'yellow-7':(communityFridgeDecContents.kpi1 >= '398' && communityFridgeDecContents.kpi1 < '477.6')?'green':(communityFridgeDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi2 == null)?'grey-2':(communityFridgeDecContents.kpi2 >= '0' && communityFridgeDecContents.kpi2 <= '244.2')?'red':(communityFridgeDecContents.kpi2 > '244.2' && communityFridgeDecContents.kpi2 <= '325.6')?'orange':(communityFridgeDecContents.kpi2 > '325.6' && communityFridgeDecContents.kpi2 < '407')?'yellow-7':(communityFridgeDecContents.kpi2 >= '407' && communityFridgeDecContents.kpi2 < '488.4')?'green':(communityFridgeDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi3 == null)?'grey-2':(communityFridgeDecContents.kpi3 >= '0' && communityFridgeDecContents.kpi3 <= '524.25')?'red':(communityFridgeDecContents.kpi3 > '524.25' && communityFridgeDecContents.kpi3 <= '699')?'orange':(communityFridgeDecContents.kpi3 > '699' && communityFridgeDecContents.kpi3 < '873.75')?'yellow-7':(communityFridgeDecContents.kpi3 >= '873.75' && communityFridgeDecContents.kpi3 < '1048.5')?'green':(communityFridgeDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi1 == null)?'grey-2':(communityFridgeJanContents.kpi1 >= '0' && communityFridgeJanContents.kpi1 <= '238.8')?'red':(communityFridgeJanContents.kpi1 > '238.8' && communityFridgeJanContents.kpi1 <= '318.4')?'orange':(communityFridgeJanContents.kpi1 > '318.4' && communityFridgeJanContents.kpi1 < '398')?'yellow-7':(communityFridgeJanContents.kpi1 >= '398' && communityFridgeJanContents.kpi1 < '477.6')?'green':(communityFridgeJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi2 == null)?'grey-2':(communityFridgeJanContents.kpi2 >= '0' && communityFridgeJanContents.kpi2 <= '244.2')?'red':(communityFridgeJanContents.kpi2 > '244.2' && communityFridgeJanContents.kpi2 <= '325.6')?'orange':(communityFridgeJanContents.kpi2 > '325.6' && communityFridgeJanContents.kpi2 < '407')?'yellow-7':(communityFridgeJanContents.kpi2 >= '407' && communityFridgeJanContents.kpi2 < '488.4')?'green':(communityFridgeJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi3 == null)?'grey-2':(communityFridgeJanContents.kpi3 >= '0' && communityFridgeJanContents.kpi3 <= '524.25')?'red':(communityFridgeJanContents.kpi3 > '524.25' && communityFridgeJanContents.kpi3 <= '699')?'orange':(communityFridgeJanContents.kpi3 > '699' && communityFridgeJanContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJanContents.kpi3 >= '873.75' && communityFridgeJanContents.kpi3 < '1048.5')?'green':(communityFridgeJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeFebContents.kpi1 == null)?'grey-2':(communityFridgeFebContents.kpi1 >= '0' && communityFridgeFebContents.kpi1 <= '238.8')?'red':(communityFridgeFebContents.kpi1 > '238.8' && communityFridgeFebContents.kpi1 <= '318.4')?'orange':(communityFridgeFebContents.kpi1 > '318.4' && communityFridgeFebContents.kpi1 < '398')?'yellow-7':(communityFridgeFebContents.kpi1 >= '398' && communityFridgeFebContents.kpi1 < '477.6')?'green':(communityFridgeFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi2 == null)?'grey-2':(communityFridgeFebContents.kpi2 >= '0' && communityFridgeFebContents.kpi2 <= '244.2')?'red':(communityFridgeFebContents.kpi2 > '244.2' && communityFridgeFebContents.kpi2 <= '325.6')?'orange':(communityFridgeFebContents.kpi2 > '325.6' && communityFridgeFebContents.kpi2 < '407')?'yellow-7':(communityFridgeFebContents.kpi2 >= '407' && communityFridgeFebContents.kpi2 < '488.4')?'green':(communityFridgeFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi3 == null)?'grey-2':(communityFridgeFebContents.kpi3 >= '0' && communityFridgeFebContents.kpi3 <= '524.25')?'red':(communityFridgeFebContents.kpi3 > '524.25' && communityFridgeFebContents.kpi3 <= '699')?'orange':(communityFridgeFebContents.kpi3 > '699' && communityFridgeFebContents.kpi3 < '873.75')?'yellow-7':(communityFridgeFebContents.kpi3 >= '873.75' && communityFridgeFebContents.kpi3 < '1048.5')?'green':(communityFridgeFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMarContents.kpi1 == null)?'grey-2':(communityFridgeMarContents.kpi1 >= '0' && communityFridgeMarContents.kpi1 <= '238.8')?'red':(communityFridgeMarContents.kpi1 > '238.8' && communityFridgeMarContents.kpi1 <= '318.4')?'orange':(communityFridgeMarContents.kpi1 > '318.4' && communityFridgeMarContents.kpi1 < '398')?'yellow-7':(communityFridgeMarContents.kpi1 >= '398' && communityFridgeMarContents.kpi1 < '477.6')?'green':(communityFridgeMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi2 == null)?'grey-2':(communityFridgeMarContents.kpi2 >= '0' && communityFridgeMarContents.kpi2 <= '244.2')?'red':(communityFridgeMarContents.kpi2 > '244.2' && communityFridgeMarContents.kpi2 <= '325.6')?'orange':(communityFridgeMarContents.kpi2 > '325.6' && communityFridgeMarContents.kpi2 < '407')?'yellow-7':(communityFridgeMarContents.kpi2 >= '407' && communityFridgeMarContents.kpi2 < '488.4')?'green':(communityFridgeMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi3 == null)?'grey-2':(communityFridgeMarContents.kpi3 >= '0' && communityFridgeMarContents.kpi3 <= '524.25')?'red':(communityFridgeMarContents.kpi3 > '524.25' && communityFridgeMarContents.kpi3 <= '699')?'orange':(communityFridgeMarContents.kpi3 > '699' && communityFridgeMarContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMarContents.kpi3 >= '873.75' && communityFridgeMarContents.kpi3 < '1048.5')?'green':(communityFridgeMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAprContents.kpi1 == null)?'grey-2':(communityFridgeAprContents.kpi1 >= '0' && communityFridgeAprContents.kpi1 <= '238.8')?'red':(communityFridgeAprContents.kpi1 > '238.8' && communityFridgeAprContents.kpi1 <= '318.4')?'orange':(communityFridgeAprContents.kpi1 > '318.4' && communityFridgeAprContents.kpi1 < '398')?'yellow-7':(communityFridgeAprContents.kpi1 >= '398' && communityFridgeAprContents.kpi1 < '477.6')?'green':(communityFridgeAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi2 == null)?'grey-2':(communityFridgeAprContents.kpi2 >= '0' && communityFridgeAprContents.kpi2 <= '244.2')?'red':(communityFridgeAprContents.kpi2 > '244.2' && communityFridgeAprContents.kpi2 <= '325.6')?'orange':(communityFridgeAprContents.kpi2 > '325.6' && communityFridgeAprContents.kpi2 < '407')?'yellow-7':(communityFridgeAprContents.kpi2 >= '407' && communityFridgeAprContents.kpi2 < '488.4')?'green':(communityFridgeAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi3 == null)?'grey-2':(communityFridgeAprContents.kpi3 >= '0' && communityFridgeAprContents.kpi3 <= '524.25')?'red':(communityFridgeAprContents.kpi3 > '524.25' && communityFridgeAprContents.kpi3 <= '699')?'orange':(communityFridgeAprContents.kpi3 > '699' && communityFridgeAprContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAprContents.kpi3 >= '873.75' && communityFridgeAprContents.kpi3 < '1048.5')?'green':(communityFridgeAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMayContents.kpi1 == null)?'grey-2':(communityFridgeMayContents.kpi1 >= '0' && communityFridgeMayContents.kpi1 <= '238.8')?'red':(communityFridgeMayContents.kpi1 > '238.8' && communityFridgeMayContents.kpi1 <= '318.4')?'orange':(communityFridgeMayContents.kpi1 > '318.4' && communityFridgeMayContents.kpi1 < '398')?'yellow-7':(communityFridgeMayContents.kpi1 >= '398' && communityFridgeMayContents.kpi1 < '477.6')?'green':(communityFridgeMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi2 == null)?'grey-2':(communityFridgeMayContents.kpi2 >= '0' && communityFridgeMayContents.kpi2 <= '244.2')?'red':(communityFridgeMayContents.kpi2 > '244.2' && communityFridgeMayContents.kpi2 <= '325.6')?'orange':(communityFridgeMayContents.kpi2 > '325.6' && communityFridgeMayContents.kpi2 < '407')?'yellow-7':(communityFridgeMayContents.kpi2 >= '407' && communityFridgeMayContents.kpi2 < '488.4')?'green':(communityFridgeMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi3 == null)?'grey-2':(communityFridgeMayContents.kpi3 >= '0' && communityFridgeMayContents.kpi3 <= '524.25')?'red':(communityFridgeMayContents.kpi3 > '524.25' && communityFridgeMayContents.kpi3 <= '699')?'orange':(communityFridgeMayContents.kpi3 > '699' && communityFridgeMayContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMayContents.kpi3 >= '873.75' && communityFridgeMayContents.kpi3 < '1048.5')?'green':(communityFridgeMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJunContents.kpi1 == null)?'grey-2':(communityFridgeJunContents.kpi1 >= '0' && communityFridgeJunContents.kpi1 <= '238.8')?'red':(communityFridgeJunContents.kpi1 > '238.8' && communityFridgeJunContents.kpi1 <= '318.4')?'orange':(communityFridgeJunContents.kpi1 > '318.4' && communityFridgeJunContents.kpi1 < '398')?'yellow-7':(communityFridgeJunContents.kpi1 >= '398' && communityFridgeJunContents.kpi1 < '477.6')?'green':(communityFridgeJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi2 == null)?'grey-2':(communityFridgeJunContents.kpi2 >= '0' && communityFridgeJunContents.kpi2 <= '244.2')?'red':(communityFridgeJunContents.kpi2 > '244.2' && communityFridgeJunContents.kpi2 <= '325.6')?'orange':(communityFridgeJunContents.kpi2 > '325.6' && communityFridgeJunContents.kpi2 < '407')?'yellow-7':(communityFridgeJunContents.kpi2 >= '407' && communityFridgeJunContents.kpi2 < '488.4')?'green':(communityFridgeJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi3 == null)?'grey-2':(communityFridgeJunContents.kpi3 >= '0' && communityFridgeJunContents.kpi3 <= '524.25')?'red':(communityFridgeJunContents.kpi3 > '524.25' && communityFridgeJunContents.kpi3 <= '699')?'orange':(communityFridgeJunContents.kpi3 > '699' && communityFridgeJunContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJunContents.kpi3 >= '873.75' && communityFridgeJunContents.kpi3 < '1048.5')?'green':(communityFridgeJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJulContents.kpi1 == null)?'grey-2':(communityFridgeJulContents.kpi1 >= '0' && communityFridgeJulContents.kpi1 <= '238.8')?'red':(communityFridgeJulContents.kpi1 > '238.8' && communityFridgeJulContents.kpi1 <= '318.4')?'orange':(communityFridgeJulContents.kpi1 > '318.4' && communityFridgeJulContents.kpi1 < '398')?'yellow-7':(communityFridgeJulContents.kpi1 >= '398' && communityFridgeJulContents.kpi1 < '477.6')?'green':(communityFridgeJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi2 == null)?'grey-2':(communityFridgeJulContents.kpi2 >= '0' && communityFridgeJulContents.kpi2 <= '244.2')?'red':(communityFridgeJulContents.kpi2 > '244.2' && communityFridgeJulContents.kpi2 <= '325.6')?'orange':(communityFridgeJulContents.kpi2 > '325.6' && communityFridgeJulContents.kpi2 < '407')?'yellow-7':(communityFridgeJulContents.kpi2 >= '407' && communityFridgeJulContents.kpi2 < '488.4')?'green':(communityFridgeJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi3 == null)?'grey-2':(communityFridgeJulContents.kpi3 >= '0' && communityFridgeJulContents.kpi3 <= '524.25')?'red':(communityFridgeJulContents.kpi3 > '524.25' && communityFridgeJulContents.kpi3 <= '699')?'orange':(communityFridgeJulContents.kpi3 > '699' && communityFridgeJulContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJulContents.kpi3 >= '873.75' && communityFridgeJulContents.kpi3 < '1048.5')?'green':(communityFridgeJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAugContents.kpi1 == null)?'grey-2':(communityFridgeAugContents.kpi1 >= '0' && communityFridgeAugContents.kpi1 <= '238.8')?'red':(communityFridgeAugContents.kpi1 > '238.8' && communityFridgeAugContents.kpi1 <= '318.4')?'orange':(communityFridgeAugContents.kpi1 > '318.4' && communityFridgeAugContents.kpi1 < '398')?'yellow-7':(communityFridgeAugContents.kpi1 >= '398' && communityFridgeAugContents.kpi1 < '477.6')?'green':(communityFridgeAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi2 == null)?'grey-2':(communityFridgeAugContents.kpi2 >= '0' && communityFridgeAugContents.kpi2 <= '244.2')?'red':(communityFridgeAugContents.kpi2 > '244.2' && communityFridgeAugContents.kpi2 <= '325.6')?'orange':(communityFridgeAugContents.kpi2 > '325.6' && communityFridgeAugContents.kpi2 < '407')?'yellow-7':(communityFridgeAugContents.kpi2 >= '407' && communityFridgeAugContents.kpi2 < '488.4')?'green':(communityFridgeAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi3 == null)?'grey-2':(communityFridgeAugContents.kpi3 >= '0' && communityFridgeAugContents.kpi3 <= '524.25')?'red':(communityFridgeAugContents.kpi3 > '524.25' && communityFridgeAugContents.kpi3 <= '699')?'orange':(communityFridgeAugContents.kpi3 > '699' && communityFridgeAugContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAugContents.kpi3 >= '873.75' && communityFridgeAugContents.kpi3 < '1048.5')?'green':(communityFridgeAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeSepContents.kpi1 == null)?'grey-2':(communityFridgeSepContents.kpi1 >= '0' && communityFridgeSepContents.kpi1 <= '238.8')?'red':(communityFridgeSepContents.kpi1 > '238.8' && communityFridgeSepContents.kpi1 <= '318.4')?'orange':(communityFridgeSepContents.kpi1 > '318.4' && communityFridgeSepContents.kpi1 < '398')?'yellow-7':(communityFridgeSepContents.kpi1 >= '398' && communityFridgeSepContents.kpi1 < '477.6')?'green':(communityFridgeSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi2 == null)?'grey-2':(communityFridgeSepContents.kpi2 >= '0' && communityFridgeSepContents.kpi2 <= '244.2')?'red':(communityFridgeSepContents.kpi2 > '244.2' && communityFridgeSepContents.kpi2 <= '325.6')?'orange':(communityFridgeSepContents.kpi2 > '325.6' && communityFridgeSepContents.kpi2 < '407')?'yellow-7':(communityFridgeSepContents.kpi2 >= '407' && communityFridgeSepContents.kpi2 < '488.4')?'green':(communityFridgeSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi3 == null)?'grey-2':(communityFridgeSepContents.kpi3 >= '0' && communityFridgeSepContents.kpi3 <= '524.25')?'red':(communityFridgeSepContents.kpi3 > '524.25' && communityFridgeSepContents.kpi3 <= '699')?'orange':(communityFridgeSepContents.kpi3 > '699' && communityFridgeSepContents.kpi3 < '873.75')?'yellow-7':(communityFridgeSepContents.kpi3 >= '873.75' && communityFridgeSepContents.kpi3 < '1048.5')?'green':(communityFridgeSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeOctContents.kpi1 == null)?'grey-2':(communityFridgeOctContents.kpi1 >= '0' && communityFridgeOctContents.kpi1 <= '238.8')?'red':(communityFridgeOctContents.kpi1 > '238.8' && communityFridgeOctContents.kpi1 <= '318.4')?'orange':(communityFridgeOctContents.kpi1 > '318.4' && communityFridgeOctContents.kpi1 < '398')?'yellow-7':(communityFridgeOctContents.kpi1 >= '398' && communityFridgeOctContents.kpi1 < '477.6')?'green':(communityFridgeOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi2 == null)?'grey-2':(communityFridgeOctContents.kpi2 >= '0' && communityFridgeOctContents.kpi2 <= '244.2')?'red':(communityFridgeOctContents.kpi2 > '244.2' && communityFridgeOctContents.kpi2 <= '325.6')?'orange':(communityFridgeOctContents.kpi2 > '325.6' && communityFridgeOctContents.kpi2 < '407')?'yellow-7':(communityFridgeOctContents.kpi2 >= '407' && communityFridgeOctContents.kpi2 < '488.4')?'green':(communityFridgeOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi3 == null)?'grey-2':(communityFridgeOctContents.kpi3 >= '0' && communityFridgeOctContents.kpi3 <= '524.25')?'red':(communityFridgeOctContents.kpi3 > '524.25' && communityFridgeOctContents.kpi3 <= '699')?'orange':(communityFridgeOctContents.kpi3 > '699' && communityFridgeOctContents.kpi3 < '873.75')?'yellow-7':(communityFridgeOctContents.kpi3 >= '873.75' && communityFridgeOctContents.kpi3 < '1048.5')?'green':(communityFridgeOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeNovContents.kpi1 == null)?'grey-2':(communityFridgeNovContents.kpi1 >= '0' && communityFridgeNovContents.kpi1 <= '238.8')?'red':(communityFridgeNovContents.kpi1 > '238.8' && communityFridgeNovContents.kpi1 <= '318.4')?'orange':(communityFridgeNovContents.kpi1 > '318.4' && communityFridgeNovContents.kpi1 < '398')?'yellow-7':(communityFridgeNovContents.kpi1 >= '398' && communityFridgeNovContents.kpi1 < '477.6')?'green':(communityFridgeNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi2 == null)?'grey-2':(communityFridgeNovContents.kpi2 >= '0' && communityFridgeNovContents.kpi2 <= '244.2')?'red':(communityFridgeNovContents.kpi2 > '244.2' && communityFridgeNovContents.kpi2 <= '325.6')?'orange':(communityFridgeNovContents.kpi2 > '325.6' && communityFridgeNovContents.kpi2 < '407')?'yellow-7':(communityFridgeNovContents.kpi2 >= '407' && communityFridgeNovContents.kpi2 < '488.4')?'green':(communityFridgeNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi3 == null)?'grey-2':(communityFridgeNovContents.kpi3 >= '0' && communityFridgeNovContents.kpi3 <= '524.25')?'red':(communityFridgeNovContents.kpi3 > '524.25' && communityFridgeNovContents.kpi3 <= '699')?'orange':(communityFridgeNovContents.kpi3 > '699' && communityFridgeNovContents.kpi3 < '873.75')?'yellow-7':(communityFridgeNovContents.kpi3 >= '873.75' && communityFridgeNovContents.kpi3 < '1048.5')?'green':(communityFridgeNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeDecContents.kpi1 == null)?'grey-2':(communityFridgeDecContents.kpi1 >= '0' && communityFridgeDecContents.kpi1 <= '238.8')?'red':(communityFridgeDecContents.kpi1 > '238.8' && communityFridgeDecContents.kpi1 <= '318.4')?'orange':(communityFridgeDecContents.kpi1 > '318.4' && communityFridgeDecContents.kpi1 < '398')?'yellow-7':(communityFridgeDecContents.kpi1 >= '398' && communityFridgeDecContents.kpi1 < '477.6')?'green':(communityFridgeDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi2 == null)?'grey-2':(communityFridgeDecContents.kpi2 >= '0' && communityFridgeDecContents.kpi2 <= '244.2')?'red':(communityFridgeDecContents.kpi2 > '244.2' && communityFridgeDecContents.kpi2 <= '325.6')?'orange':(communityFridgeDecContents.kpi2 > '325.6' && communityFridgeDecContents.kpi2 < '407')?'yellow-7':(communityFridgeDecContents.kpi2 >= '407' && communityFridgeDecContents.kpi2 < '488.4')?'green':(communityFridgeDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi3 == null)?'grey-2':(communityFridgeDecContents.kpi3 >= '0' && communityFridgeDecContents.kpi3 <= '524.25')?'red':(communityFridgeDecContents.kpi3 > '524.25' && communityFridgeDecContents.kpi3 <= '699')?'orange':(communityFridgeDecContents.kpi3 > '699' && communityFridgeDecContents.kpi3 < '873.75')?'yellow-7':(communityFridgeDecContents.kpi3 >= '873.75' && communityFridgeDecContents.kpi3 < '1048.5')?'green':(communityFridgeDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi1 == null)?'grey-2':(communityFridgeJanContents.kpi1 >= '0' && communityFridgeJanContents.kpi1 <= '238.8')?'red':(communityFridgeJanContents.kpi1 > '238.8' && communityFridgeJanContents.kpi1 <= '318.4')?'orange':(communityFridgeJanContents.kpi1 > '318.4' && communityFridgeJanContents.kpi1 < '398')?'yellow-7':(communityFridgeJanContents.kpi1 >= '398' && communityFridgeJanContents.kpi1 < '477.6')?'green':(communityFridgeJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi2 == null)?'grey-2':(communityFridgeJanContents.kpi2 >= '0' && communityFridgeJanContents.kpi2 <= '244.2')?'red':(communityFridgeJanContents.kpi2 > '244.2' && communityFridgeJanContents.kpi2 <= '325.6')?'orange':(communityFridgeJanContents.kpi2 > '325.6' && communityFridgeJanContents.kpi2 < '407')?'yellow-7':(communityFridgeJanContents.kpi2 >= '407' && communityFridgeJanContents.kpi2 < '488.4')?'green':(communityFridgeJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi3 == null)?'grey-2':(communityFridgeJanContents.kpi3 >= '0' && communityFridgeJanContents.kpi3 <= '524.25')?'red':(communityFridgeJanContents.kpi3 > '524.25' && communityFridgeJanContents.kpi3 <= '699')?'orange':(communityFridgeJanContents.kpi3 > '699' && communityFridgeJanContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJanContents.kpi3 >= '873.75' && communityFridgeJanContents.kpi3 < '1048.5')?'green':(communityFridgeJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeFebContents.kpi1 == null)?'grey-2':(communityFridgeFebContents.kpi1 >= '0' && communityFridgeFebContents.kpi1 <= '238.8')?'red':(communityFridgeFebContents.kpi1 > '238.8' && communityFridgeFebContents.kpi1 <= '318.4')?'orange':(communityFridgeFebContents.kpi1 > '318.4' && communityFridgeFebContents.kpi1 < '398')?'yellow-7':(communityFridgeFebContents.kpi1 >= '398' && communityFridgeFebContents.kpi1 < '477.6')?'green':(communityFridgeFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi2 == null)?'grey-2':(communityFridgeFebContents.kpi2 >= '0' && communityFridgeFebContents.kpi2 <= '244.2')?'red':(communityFridgeFebContents.kpi2 > '244.2' && communityFridgeFebContents.kpi2 <= '325.6')?'orange':(communityFridgeFebContents.kpi2 > '325.6' && communityFridgeFebContents.kpi2 < '407')?'yellow-7':(communityFridgeFebContents.kpi2 >= '407' && communityFridgeFebContents.kpi2 < '488.4')?'green':(communityFridgeFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi3 == null)?'grey-2':(communityFridgeFebContents.kpi3 >= '0' && communityFridgeFebContents.kpi3 <= '524.25')?'red':(communityFridgeFebContents.kpi3 > '524.25' && communityFridgeFebContents.kpi3 <= '699')?'orange':(communityFridgeFebContents.kpi3 > '699' && communityFridgeFebContents.kpi3 < '873.75')?'yellow-7':(communityFridgeFebContents.kpi3 >= '873.75' && communityFridgeFebContents.kpi3 < '1048.5')?'green':(communityFridgeFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMarContents.kpi1 == null)?'grey-2':(communityFridgeMarContents.kpi1 >= '0' && communityFridgeMarContents.kpi1 <= '238.8')?'red':(communityFridgeMarContents.kpi1 > '238.8' && communityFridgeMarContents.kpi1 <= '318.4')?'orange':(communityFridgeMarContents.kpi1 > '318.4' && communityFridgeMarContents.kpi1 < '398')?'yellow-7':(communityFridgeMarContents.kpi1 >= '398' && communityFridgeMarContents.kpi1 < '477.6')?'green':(communityFridgeMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi2 == null)?'grey-2':(communityFridgeMarContents.kpi2 >= '0' && communityFridgeMarContents.kpi2 <= '244.2')?'red':(communityFridgeMarContents.kpi2 > '244.2' && communityFridgeMarContents.kpi2 <= '325.6')?'orange':(communityFridgeMarContents.kpi2 > '325.6' && communityFridgeMarContents.kpi2 < '407')?'yellow-7':(communityFridgeMarContents.kpi2 >= '407' && communityFridgeMarContents.kpi2 < '488.4')?'green':(communityFridgeMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi3 == null)?'grey-2':(communityFridgeMarContents.kpi3 >= '0' && communityFridgeMarContents.kpi3 <= '524.25')?'red':(communityFridgeMarContents.kpi3 > '524.25' && communityFridgeMarContents.kpi3 <= '699')?'orange':(communityFridgeMarContents.kpi3 > '699' && communityFridgeMarContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMarContents.kpi3 >= '873.75' && communityFridgeMarContents.kpi3 < '1048.5')?'green':(communityFridgeMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAprContents.kpi1 == null)?'grey-2':(communityFridgeAprContents.kpi1 >= '0' && communityFridgeAprContents.kpi1 <= '238.8')?'red':(communityFridgeAprContents.kpi1 > '238.8' && communityFridgeAprContents.kpi1 <= '318.4')?'orange':(communityFridgeAprContents.kpi1 > '318.4' && communityFridgeAprContents.kpi1 < '398')?'yellow-7':(communityFridgeAprContents.kpi1 >= '398' && communityFridgeAprContents.kpi1 < '477.6')?'green':(communityFridgeAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi2 == null)?'grey-2':(communityFridgeAprContents.kpi2 >= '0' && communityFridgeAprContents.kpi2 <= '244.2')?'red':(communityFridgeAprContents.kpi2 > '244.2' && communityFridgeAprContents.kpi2 <= '325.6')?'orange':(communityFridgeAprContents.kpi2 > '325.6' && communityFridgeAprContents.kpi2 < '407')?'yellow-7':(communityFridgeAprContents.kpi2 >= '407' && communityFridgeAprContents.kpi2 < '488.4')?'green':(communityFridgeAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi3 == null)?'grey-2':(communityFridgeAprContents.kpi3 >= '0' && communityFridgeAprContents.kpi3 <= '524.25')?'red':(communityFridgeAprContents.kpi3 > '524.25' && communityFridgeAprContents.kpi3 <= '699')?'orange':(communityFridgeAprContents.kpi3 > '699' && communityFridgeAprContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAprContents.kpi3 >= '873.75' && communityFridgeAprContents.kpi3 < '1048.5')?'green':(communityFridgeAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMayContents.kpi1 == null)?'grey-2':(communityFridgeMayContents.kpi1 >= '0' && communityFridgeMayContents.kpi1 <= '238.8')?'red':(communityFridgeMayContents.kpi1 > '238.8' && communityFridgeMayContents.kpi1 <= '318.4')?'orange':(communityFridgeMayContents.kpi1 > '318.4' && communityFridgeMayContents.kpi1 < '398')?'yellow-7':(communityFridgeMayContents.kpi1 >= '398' && communityFridgeMayContents.kpi1 < '477.6')?'green':(communityFridgeMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi2 == null)?'grey-2':(communityFridgeMayContents.kpi2 >= '0' && communityFridgeMayContents.kpi2 <= '244.2')?'red':(communityFridgeMayContents.kpi2 > '244.2' && communityFridgeMayContents.kpi2 <= '325.6')?'orange':(communityFridgeMayContents.kpi2 > '325.6' && communityFridgeMayContents.kpi2 < '407')?'yellow-7':(communityFridgeMayContents.kpi2 >= '407' && communityFridgeMayContents.kpi2 < '488.4')?'green':(communityFridgeMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi3 == null)?'grey-2':(communityFridgeMayContents.kpi3 >= '0' && communityFridgeMayContents.kpi3 <= '524.25')?'red':(communityFridgeMayContents.kpi3 > '524.25' && communityFridgeMayContents.kpi3 <= '699')?'orange':(communityFridgeMayContents.kpi3 > '699' && communityFridgeMayContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMayContents.kpi3 >= '873.75' && communityFridgeMayContents.kpi3 < '1048.5')?'green':(communityFridgeMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJunContents.kpi1 == null)?'grey-2':(communityFridgeJunContents.kpi1 >= '0' && communityFridgeJunContents.kpi1 <= '238.8')?'red':(communityFridgeJunContents.kpi1 > '238.8' && communityFridgeJunContents.kpi1 <= '318.4')?'orange':(communityFridgeJunContents.kpi1 > '318.4' && communityFridgeJunContents.kpi1 < '398')?'yellow-7':(communityFridgeJunContents.kpi1 >= '398' && communityFridgeJunContents.kpi1 < '477.6')?'green':(communityFridgeJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi2 == null)?'grey-2':(communityFridgeJunContents.kpi2 >= '0' && communityFridgeJunContents.kpi2 <= '244.2')?'red':(communityFridgeJunContents.kpi2 > '244.2' && communityFridgeJunContents.kpi2 <= '325.6')?'orange':(communityFridgeJunContents.kpi2 > '325.6' && communityFridgeJunContents.kpi2 < '407')?'yellow-7':(communityFridgeJunContents.kpi2 >= '407' && communityFridgeJunContents.kpi2 < '488.4')?'green':(communityFridgeJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi3 == null)?'grey-2':(communityFridgeJunContents.kpi3 >= '0' && communityFridgeJunContents.kpi3 <= '524.25')?'red':(communityFridgeJunContents.kpi3 > '524.25' && communityFridgeJunContents.kpi3 <= '699')?'orange':(communityFridgeJunContents.kpi3 > '699' && communityFridgeJunContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJunContents.kpi3 >= '873.75' && communityFridgeJunContents.kpi3 < '1048.5')?'green':(communityFridgeJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJulContents.kpi1 == null)?'grey-2':(communityFridgeJulContents.kpi1 >= '0' && communityFridgeJulContents.kpi1 <= '238.8')?'red':(communityFridgeJulContents.kpi1 > '238.8' && communityFridgeJulContents.kpi1 <= '318.4')?'orange':(communityFridgeJulContents.kpi1 > '318.4' && communityFridgeJulContents.kpi1 < '398')?'yellow-7':(communityFridgeJulContents.kpi1 >= '398' && communityFridgeJulContents.kpi1 < '477.6')?'green':(communityFridgeJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi2 == null)?'grey-2':(communityFridgeJulContents.kpi2 >= '0' && communityFridgeJulContents.kpi2 <= '244.2')?'red':(communityFridgeJulContents.kpi2 > '244.2' && communityFridgeJulContents.kpi2 <= '325.6')?'orange':(communityFridgeJulContents.kpi2 > '325.6' && communityFridgeJulContents.kpi2 < '407')?'yellow-7':(communityFridgeJulContents.kpi2 >= '407' && communityFridgeJulContents.kpi2 < '488.4')?'green':(communityFridgeJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi3 == null)?'grey-2':(communityFridgeJulContents.kpi3 >= '0' && communityFridgeJulContents.kpi3 <= '524.25')?'red':(communityFridgeJulContents.kpi3 > '524.25' && communityFridgeJulContents.kpi3 <= '699')?'orange':(communityFridgeJulContents.kpi3 > '699' && communityFridgeJulContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJulContents.kpi3 >= '873.75' && communityFridgeJulContents.kpi3 < '1048.5')?'green':(communityFridgeJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAugContents.kpi1 == null)?'grey-2':(communityFridgeAugContents.kpi1 >= '0' && communityFridgeAugContents.kpi1 <= '238.8')?'red':(communityFridgeAugContents.kpi1 > '238.8' && communityFridgeAugContents.kpi1 <= '318.4')?'orange':(communityFridgeAugContents.kpi1 > '318.4' && communityFridgeAugContents.kpi1 < '398')?'yellow-7':(communityFridgeAugContents.kpi1 >= '398' && communityFridgeAugContents.kpi1 < '477.6')?'green':(communityFridgeAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi2 == null)?'grey-2':(communityFridgeAugContents.kpi2 >= '0' && communityFridgeAugContents.kpi2 <= '244.2')?'red':(communityFridgeAugContents.kpi2 > '244.2' && communityFridgeAugContents.kpi2 <= '325.6')?'orange':(communityFridgeAugContents.kpi2 > '325.6' && communityFridgeAugContents.kpi2 < '407')?'yellow-7':(communityFridgeAugContents.kpi2 >= '407' && communityFridgeAugContents.kpi2 < '488.4')?'green':(communityFridgeAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi3 == null)?'grey-2':(communityFridgeAugContents.kpi3 >= '0' && communityFridgeAugContents.kpi3 <= '524.25')?'red':(communityFridgeAugContents.kpi3 > '524.25' && communityFridgeAugContents.kpi3 <= '699')?'orange':(communityFridgeAugContents.kpi3 > '699' && communityFridgeAugContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAugContents.kpi3 >= '873.75' && communityFridgeAugContents.kpi3 < '1048.5')?'green':(communityFridgeAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeSepContents.kpi1 == null)?'grey-2':(communityFridgeSepContents.kpi1 >= '0' && communityFridgeSepContents.kpi1 <= '238.8')?'red':(communityFridgeSepContents.kpi1 > '238.8' && communityFridgeSepContents.kpi1 <= '318.4')?'orange':(communityFridgeSepContents.kpi1 > '318.4' && communityFridgeSepContents.kpi1 < '398')?'yellow-7':(communityFridgeSepContents.kpi1 >= '398' && communityFridgeSepContents.kpi1 < '477.6')?'green':(communityFridgeSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi2 == null)?'grey-2':(communityFridgeSepContents.kpi2 >= '0' && communityFridgeSepContents.kpi2 <= '244.2')?'red':(communityFridgeSepContents.kpi2 > '244.2' && communityFridgeSepContents.kpi2 <= '325.6')?'orange':(communityFridgeSepContents.kpi2 > '325.6' && communityFridgeSepContents.kpi2 < '407')?'yellow-7':(communityFridgeSepContents.kpi2 >= '407' && communityFridgeSepContents.kpi2 < '488.4')?'green':(communityFridgeSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi3 == null)?'grey-2':(communityFridgeSepContents.kpi3 >= '0' && communityFridgeSepContents.kpi3 <= '524.25')?'red':(communityFridgeSepContents.kpi3 > '524.25' && communityFridgeSepContents.kpi3 <= '699')?'orange':(communityFridgeSepContents.kpi3 > '699' && communityFridgeSepContents.kpi3 < '873.75')?'yellow-7':(communityFridgeSepContents.kpi3 >= '873.75' && communityFridgeSepContents.kpi3 < '1048.5')?'green':(communityFridgeSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeOctContents.kpi1 == null)?'grey-2':(communityFridgeOctContents.kpi1 >= '0' && communityFridgeOctContents.kpi1 <= '238.8')?'red':(communityFridgeOctContents.kpi1 > '238.8' && communityFridgeOctContents.kpi1 <= '318.4')?'orange':(communityFridgeOctContents.kpi1 > '318.4' && communityFridgeOctContents.kpi1 < '398')?'yellow-7':(communityFridgeOctContents.kpi1 >= '398' && communityFridgeOctContents.kpi1 < '477.6')?'green':(communityFridgeOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi2 == null)?'grey-2':(communityFridgeOctContents.kpi2 >= '0' && communityFridgeOctContents.kpi2 <= '244.2')?'red':(communityFridgeOctContents.kpi2 > '244.2' && communityFridgeOctContents.kpi2 <= '325.6')?'orange':(communityFridgeOctContents.kpi2 > '325.6' && communityFridgeOctContents.kpi2 < '407')?'yellow-7':(communityFridgeOctContents.kpi2 >= '407' && communityFridgeOctContents.kpi2 < '488.4')?'green':(communityFridgeOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi3 == null)?'grey-2':(communityFridgeOctContents.kpi3 >= '0' && communityFridgeOctContents.kpi3 <= '524.25')?'red':(communityFridgeOctContents.kpi3 > '524.25' && communityFridgeOctContents.kpi3 <= '699')?'orange':(communityFridgeOctContents.kpi3 > '699' && communityFridgeOctContents.kpi3 < '873.75')?'yellow-7':(communityFridgeOctContents.kpi3 >= '873.75' && communityFridgeOctContents.kpi3 < '1048.5')?'green':(communityFridgeOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeNovContents.kpi1 == null)?'grey-2':(communityFridgeNovContents.kpi1 >= '0' && communityFridgeNovContents.kpi1 <= '238.8')?'red':(communityFridgeNovContents.kpi1 > '238.8' && communityFridgeNovContents.kpi1 <= '318.4')?'orange':(communityFridgeNovContents.kpi1 > '318.4' && communityFridgeNovContents.kpi1 < '398')?'yellow-7':(communityFridgeNovContents.kpi1 >= '398' && communityFridgeNovContents.kpi1 < '477.6')?'green':(communityFridgeNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi2 == null)?'grey-2':(communityFridgeNovContents.kpi2 >= '0' && communityFridgeNovContents.kpi2 <= '244.2')?'red':(communityFridgeNovContents.kpi2 > '244.2' && communityFridgeNovContents.kpi2 <= '325.6')?'orange':(communityFridgeNovContents.kpi2 > '325.6' && communityFridgeNovContents.kpi2 < '407')?'yellow-7':(communityFridgeNovContents.kpi2 >= '407' && communityFridgeNovContents.kpi2 < '488.4')?'green':(communityFridgeNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi3 == null)?'grey-2':(communityFridgeNovContents.kpi3 >= '0' && communityFridgeNovContents.kpi3 <= '524.25')?'red':(communityFridgeNovContents.kpi3 > '524.25' && communityFridgeNovContents.kpi3 <= '699')?'orange':(communityFridgeNovContents.kpi3 > '699' && communityFridgeNovContents.kpi3 < '873.75')?'yellow-7':(communityFridgeNovContents.kpi3 >= '873.75' && communityFridgeNovContents.kpi3 < '1048.5')?'green':(communityFridgeNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeDecContents.kpi1 == null)?'grey-2':(communityFridgeDecContents.kpi1 >= '0' && communityFridgeDecContents.kpi1 <= '238.8')?'red':(communityFridgeDecContents.kpi1 > '238.8' && communityFridgeDecContents.kpi1 <= '318.4')?'orange':(communityFridgeDecContents.kpi1 > '318.4' && communityFridgeDecContents.kpi1 < '398')?'yellow-7':(communityFridgeDecContents.kpi1 >= '398' && communityFridgeDecContents.kpi1 < '477.6')?'green':(communityFridgeDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi2 == null)?'grey-2':(communityFridgeDecContents.kpi2 >= '0' && communityFridgeDecContents.kpi2 <= '244.2')?'red':(communityFridgeDecContents.kpi2 > '244.2' && communityFridgeDecContents.kpi2 <= '325.6')?'orange':(communityFridgeDecContents.kpi2 > '325.6' && communityFridgeDecContents.kpi2 < '407')?'yellow-7':(communityFridgeDecContents.kpi2 >= '407' && communityFridgeDecContents.kpi2 < '488.4')?'green':(communityFridgeDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi3 == null)?'grey-2':(communityFridgeDecContents.kpi3 >= '0' && communityFridgeDecContents.kpi3 <= '524.25')?'red':(communityFridgeDecContents.kpi3 > '524.25' && communityFridgeDecContents.kpi3 <= '699')?'orange':(communityFridgeDecContents.kpi3 > '699' && communityFridgeDecContents.kpi3 < '873.75')?'yellow-7':(communityFridgeDecContents.kpi3 >= '873.75' && communityFridgeDecContents.kpi3 < '1048.5')?'green':(communityFridgeDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi1 == null)?'grey-2':(communityFridgeJanContents.kpi1 >= '0' && communityFridgeJanContents.kpi1 <= '238.8')?'red':(communityFridgeJanContents.kpi1 > '238.8' && communityFridgeJanContents.kpi1 <= '318.4')?'orange':(communityFridgeJanContents.kpi1 > '318.4' && communityFridgeJanContents.kpi1 < '398')?'yellow-7':(communityFridgeJanContents.kpi1 >= '398' && communityFridgeJanContents.kpi1 < '477.6')?'green':(communityFridgeJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi2 == null)?'grey-2':(communityFridgeJanContents.kpi2 >= '0' && communityFridgeJanContents.kpi2 <= '244.2')?'red':(communityFridgeJanContents.kpi2 > '244.2' && communityFridgeJanContents.kpi2 <= '325.6')?'orange':(communityFridgeJanContents.kpi2 > '325.6' && communityFridgeJanContents.kpi2 < '407')?'yellow-7':(communityFridgeJanContents.kpi2 >= '407' && communityFridgeJanContents.kpi2 < '488.4')?'green':(communityFridgeJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi3 == null)?'grey-2':(communityFridgeJanContents.kpi3 >= '0' && communityFridgeJanContents.kpi3 <= '524.25')?'red':(communityFridgeJanContents.kpi3 > '524.25' && communityFridgeJanContents.kpi3 <= '699')?'orange':(communityFridgeJanContents.kpi3 > '699' && communityFridgeJanContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJanContents.kpi3 >= '873.75' && communityFridgeJanContents.kpi3 < '1048.5')?'green':(communityFridgeJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeFebContents.kpi1 == null)?'grey-2':(communityFridgeFebContents.kpi1 >= '0' && communityFridgeFebContents.kpi1 <= '238.8')?'red':(communityFridgeFebContents.kpi1 > '238.8' && communityFridgeFebContents.kpi1 <= '318.4')?'orange':(communityFridgeFebContents.kpi1 > '318.4' && communityFridgeFebContents.kpi1 < '398')?'yellow-7':(communityFridgeFebContents.kpi1 >= '398' && communityFridgeFebContents.kpi1 < '477.6')?'green':(communityFridgeFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi2 == null)?'grey-2':(communityFridgeFebContents.kpi2 >= '0' && communityFridgeFebContents.kpi2 <= '244.2')?'red':(communityFridgeFebContents.kpi2 > '244.2' && communityFridgeFebContents.kpi2 <= '325.6')?'orange':(communityFridgeFebContents.kpi2 > '325.6' && communityFridgeFebContents.kpi2 < '407')?'yellow-7':(communityFridgeFebContents.kpi2 >= '407' && communityFridgeFebContents.kpi2 < '488.4')?'green':(communityFridgeFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi3 == null)?'grey-2':(communityFridgeFebContents.kpi3 >= '0' && communityFridgeFebContents.kpi3 <= '524.25')?'red':(communityFridgeFebContents.kpi3 > '524.25' && communityFridgeFebContents.kpi3 <= '699')?'orange':(communityFridgeFebContents.kpi3 > '699' && communityFridgeFebContents.kpi3 < '873.75')?'yellow-7':(communityFridgeFebContents.kpi3 >= '873.75' && communityFridgeFebContents.kpi3 < '1048.5')?'green':(communityFridgeFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMarContents.kpi1 == null)?'grey-2':(communityFridgeMarContents.kpi1 >= '0' && communityFridgeMarContents.kpi1 <= '238.8')?'red':(communityFridgeMarContents.kpi1 > '238.8' && communityFridgeMarContents.kpi1 <= '318.4')?'orange':(communityFridgeMarContents.kpi1 > '318.4' && communityFridgeMarContents.kpi1 < '398')?'yellow-7':(communityFridgeMarContents.kpi1 >= '398' && communityFridgeMarContents.kpi1 < '477.6')?'green':(communityFridgeMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi2 == null)?'grey-2':(communityFridgeMarContents.kpi2 >= '0' && communityFridgeMarContents.kpi2 <= '244.2')?'red':(communityFridgeMarContents.kpi2 > '244.2' && communityFridgeMarContents.kpi2 <= '325.6')?'orange':(communityFridgeMarContents.kpi2 > '325.6' && communityFridgeMarContents.kpi2 < '407')?'yellow-7':(communityFridgeMarContents.kpi2 >= '407' && communityFridgeMarContents.kpi2 < '488.4')?'green':(communityFridgeMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi3 == null)?'grey-2':(communityFridgeMarContents.kpi3 >= '0' && communityFridgeMarContents.kpi3 <= '524.25')?'red':(communityFridgeMarContents.kpi3 > '524.25' && communityFridgeMarContents.kpi3 <= '699')?'orange':(communityFridgeMarContents.kpi3 > '699' && communityFridgeMarContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMarContents.kpi3 >= '873.75' && communityFridgeMarContents.kpi3 < '1048.5')?'green':(communityFridgeMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAprContents.kpi1 == null)?'grey-2':(communityFridgeAprContents.kpi1 >= '0' && communityFridgeAprContents.kpi1 <= '238.8')?'red':(communityFridgeAprContents.kpi1 > '238.8' && communityFridgeAprContents.kpi1 <= '318.4')?'orange':(communityFridgeAprContents.kpi1 > '318.4' && communityFridgeAprContents.kpi1 < '398')?'yellow-7':(communityFridgeAprContents.kpi1 >= '398' && communityFridgeAprContents.kpi1 < '477.6')?'green':(communityFridgeAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi2 == null)?'grey-2':(communityFridgeAprContents.kpi2 >= '0' && communityFridgeAprContents.kpi2 <= '244.2')?'red':(communityFridgeAprContents.kpi2 > '244.2' && communityFridgeAprContents.kpi2 <= '325.6')?'orange':(communityFridgeAprContents.kpi2 > '325.6' && communityFridgeAprContents.kpi2 < '407')?'yellow-7':(communityFridgeAprContents.kpi2 >= '407' && communityFridgeAprContents.kpi2 < '488.4')?'green':(communityFridgeAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi3 == null)?'grey-2':(communityFridgeAprContents.kpi3 >= '0' && communityFridgeAprContents.kpi3 <= '524.25')?'red':(communityFridgeAprContents.kpi3 > '524.25' && communityFridgeAprContents.kpi3 <= '699')?'orange':(communityFridgeAprContents.kpi3 > '699' && communityFridgeAprContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAprContents.kpi3 >= '873.75' && communityFridgeAprContents.kpi3 < '1048.5')?'green':(communityFridgeAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMayContents.kpi1 == null)?'grey-2':(communityFridgeMayContents.kpi1 >= '0' && communityFridgeMayContents.kpi1 <= '238.8')?'red':(communityFridgeMayContents.kpi1 > '238.8' && communityFridgeMayContents.kpi1 <= '318.4')?'orange':(communityFridgeMayContents.kpi1 > '318.4' && communityFridgeMayContents.kpi1 < '398')?'yellow-7':(communityFridgeMayContents.kpi1 >= '398' && communityFridgeMayContents.kpi1 < '477.6')?'green':(communityFridgeMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi2 == null)?'grey-2':(communityFridgeMayContents.kpi2 >= '0' && communityFridgeMayContents.kpi2 <= '244.2')?'red':(communityFridgeMayContents.kpi2 > '244.2' && communityFridgeMayContents.kpi2 <= '325.6')?'orange':(communityFridgeMayContents.kpi2 > '325.6' && communityFridgeMayContents.kpi2 < '407')?'yellow-7':(communityFridgeMayContents.kpi2 >= '407' && communityFridgeMayContents.kpi2 < '488.4')?'green':(communityFridgeMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi3 == null)?'grey-2':(communityFridgeMayContents.kpi3 >= '0' && communityFridgeMayContents.kpi3 <= '524.25')?'red':(communityFridgeMayContents.kpi3 > '524.25' && communityFridgeMayContents.kpi3 <= '699')?'orange':(communityFridgeMayContents.kpi3 > '699' && communityFridgeMayContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMayContents.kpi3 >= '873.75' && communityFridgeMayContents.kpi3 < '1048.5')?'green':(communityFridgeMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJunContents.kpi1 == null)?'grey-2':(communityFridgeJunContents.kpi1 >= '0' && communityFridgeJunContents.kpi1 <= '238.8')?'red':(communityFridgeJunContents.kpi1 > '238.8' && communityFridgeJunContents.kpi1 <= '318.4')?'orange':(communityFridgeJunContents.kpi1 > '318.4' && communityFridgeJunContents.kpi1 < '398')?'yellow-7':(communityFridgeJunContents.kpi1 >= '398' && communityFridgeJunContents.kpi1 < '477.6')?'green':(communityFridgeJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi2 == null)?'grey-2':(communityFridgeJunContents.kpi2 >= '0' && communityFridgeJunContents.kpi2 <= '244.2')?'red':(communityFridgeJunContents.kpi2 > '244.2' && communityFridgeJunContents.kpi2 <= '325.6')?'orange':(communityFridgeJunContents.kpi2 > '325.6' && communityFridgeJunContents.kpi2 < '407')?'yellow-7':(communityFridgeJunContents.kpi2 >= '407' && communityFridgeJunContents.kpi2 < '488.4')?'green':(communityFridgeJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi3 == null)?'grey-2':(communityFridgeJunContents.kpi3 >= '0' && communityFridgeJunContents.kpi3 <= '524.25')?'red':(communityFridgeJunContents.kpi3 > '524.25' && communityFridgeJunContents.kpi3 <= '699')?'orange':(communityFridgeJunContents.kpi3 > '699' && communityFridgeJunContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJunContents.kpi3 >= '873.75' && communityFridgeJunContents.kpi3 < '1048.5')?'green':(communityFridgeJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJulContents.kpi1 == null)?'grey-2':(communityFridgeJulContents.kpi1 >= '0' && communityFridgeJulContents.kpi1 <= '238.8')?'red':(communityFridgeJulContents.kpi1 > '238.8' && communityFridgeJulContents.kpi1 <= '318.4')?'orange':(communityFridgeJulContents.kpi1 > '318.4' && communityFridgeJulContents.kpi1 < '398')?'yellow-7':(communityFridgeJulContents.kpi1 >= '398' && communityFridgeJulContents.kpi1 < '477.6')?'green':(communityFridgeJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi2 == null)?'grey-2':(communityFridgeJulContents.kpi2 >= '0' && communityFridgeJulContents.kpi2 <= '244.2')?'red':(communityFridgeJulContents.kpi2 > '244.2' && communityFridgeJulContents.kpi2 <= '325.6')?'orange':(communityFridgeJulContents.kpi2 > '325.6' && communityFridgeJulContents.kpi2 < '407')?'yellow-7':(communityFridgeJulContents.kpi2 >= '407' && communityFridgeJulContents.kpi2 < '488.4')?'green':(communityFridgeJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi3 == null)?'grey-2':(communityFridgeJulContents.kpi3 >= '0' && communityFridgeJulContents.kpi3 <= '524.25')?'red':(communityFridgeJulContents.kpi3 > '524.25' && communityFridgeJulContents.kpi3 <= '699')?'orange':(communityFridgeJulContents.kpi3 > '699' && communityFridgeJulContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJulContents.kpi3 >= '873.75' && communityFridgeJulContents.kpi3 < '1048.5')?'green':(communityFridgeJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAugContents.kpi1 == null)?'grey-2':(communityFridgeAugContents.kpi1 >= '0' && communityFridgeAugContents.kpi1 <= '238.8')?'red':(communityFridgeAugContents.kpi1 > '238.8' && communityFridgeAugContents.kpi1 <= '318.4')?'orange':(communityFridgeAugContents.kpi1 > '318.4' && communityFridgeAugContents.kpi1 < '398')?'yellow-7':(communityFridgeAugContents.kpi1 >= '398' && communityFridgeAugContents.kpi1 < '477.6')?'green':(communityFridgeAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi2 == null)?'grey-2':(communityFridgeAugContents.kpi2 >= '0' && communityFridgeAugContents.kpi2 <= '244.2')?'red':(communityFridgeAugContents.kpi2 > '244.2' && communityFridgeAugContents.kpi2 <= '325.6')?'orange':(communityFridgeAugContents.kpi2 > '325.6' && communityFridgeAugContents.kpi2 < '407')?'yellow-7':(communityFridgeAugContents.kpi2 >= '407' && communityFridgeAugContents.kpi2 < '488.4')?'green':(communityFridgeAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi3 == null)?'grey-2':(communityFridgeAugContents.kpi3 >= '0' && communityFridgeAugContents.kpi3 <= '524.25')?'red':(communityFridgeAugContents.kpi3 > '524.25' && communityFridgeAugContents.kpi3 <= '699')?'orange':(communityFridgeAugContents.kpi3 > '699' && communityFridgeAugContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAugContents.kpi3 >= '873.75' && communityFridgeAugContents.kpi3 < '1048.5')?'green':(communityFridgeAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeSepContents.kpi1 == null)?'grey-2':(communityFridgeSepContents.kpi1 >= '0' && communityFridgeSepContents.kpi1 <= '238.8')?'red':(communityFridgeSepContents.kpi1 > '238.8' && communityFridgeSepContents.kpi1 <= '318.4')?'orange':(communityFridgeSepContents.kpi1 > '318.4' && communityFridgeSepContents.kpi1 < '398')?'yellow-7':(communityFridgeSepContents.kpi1 >= '398' && communityFridgeSepContents.kpi1 < '477.6')?'green':(communityFridgeSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi2 == null)?'grey-2':(communityFridgeSepContents.kpi2 >= '0' && communityFridgeSepContents.kpi2 <= '244.2')?'red':(communityFridgeSepContents.kpi2 > '244.2' && communityFridgeSepContents.kpi2 <= '325.6')?'orange':(communityFridgeSepContents.kpi2 > '325.6' && communityFridgeSepContents.kpi2 < '407')?'yellow-7':(communityFridgeSepContents.kpi2 >= '407' && communityFridgeSepContents.kpi2 < '488.4')?'green':(communityFridgeSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi3 == null)?'grey-2':(communityFridgeSepContents.kpi3 >= '0' && communityFridgeSepContents.kpi3 <= '524.25')?'red':(communityFridgeSepContents.kpi3 > '524.25' && communityFridgeSepContents.kpi3 <= '699')?'orange':(communityFridgeSepContents.kpi3 > '699' && communityFridgeSepContents.kpi3 < '873.75')?'yellow-7':(communityFridgeSepContents.kpi3 >= '873.75' && communityFridgeSepContents.kpi3 < '1048.5')?'green':(communityFridgeSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeOctContents.kpi1 == null)?'grey-2':(communityFridgeOctContents.kpi1 >= '0' && communityFridgeOctContents.kpi1 <= '238.8')?'red':(communityFridgeOctContents.kpi1 > '238.8' && communityFridgeOctContents.kpi1 <= '318.4')?'orange':(communityFridgeOctContents.kpi1 > '318.4' && communityFridgeOctContents.kpi1 < '398')?'yellow-7':(communityFridgeOctContents.kpi1 >= '398' && communityFridgeOctContents.kpi1 < '477.6')?'green':(communityFridgeOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi2 == null)?'grey-2':(communityFridgeOctContents.kpi2 >= '0' && communityFridgeOctContents.kpi2 <= '244.2')?'red':(communityFridgeOctContents.kpi2 > '244.2' && communityFridgeOctContents.kpi2 <= '325.6')?'orange':(communityFridgeOctContents.kpi2 > '325.6' && communityFridgeOctContents.kpi2 < '407')?'yellow-7':(communityFridgeOctContents.kpi2 >= '407' && communityFridgeOctContents.kpi2 < '488.4')?'green':(communityFridgeOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi3 == null)?'grey-2':(communityFridgeOctContents.kpi3 >= '0' && communityFridgeOctContents.kpi3 <= '524.25')?'red':(communityFridgeOctContents.kpi3 > '524.25' && communityFridgeOctContents.kpi3 <= '699')?'orange':(communityFridgeOctContents.kpi3 > '699' && communityFridgeOctContents.kpi3 < '873.75')?'yellow-7':(communityFridgeOctContents.kpi3 >= '873.75' && communityFridgeOctContents.kpi3 < '1048.5')?'green':(communityFridgeOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeNovContents.kpi1 == null)?'grey-2':(communityFridgeNovContents.kpi1 >= '0' && communityFridgeNovContents.kpi1 <= '238.8')?'red':(communityFridgeNovContents.kpi1 > '238.8' && communityFridgeNovContents.kpi1 <= '318.4')?'orange':(communityFridgeNovContents.kpi1 > '318.4' && communityFridgeNovContents.kpi1 < '398')?'yellow-7':(communityFridgeNovContents.kpi1 >= '398' && communityFridgeNovContents.kpi1 < '477.6')?'green':(communityFridgeNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi2 == null)?'grey-2':(communityFridgeNovContents.kpi2 >= '0' && communityFridgeNovContents.kpi2 <= '244.2')?'red':(communityFridgeNovContents.kpi2 > '244.2' && communityFridgeNovContents.kpi2 <= '325.6')?'orange':(communityFridgeNovContents.kpi2 > '325.6' && communityFridgeNovContents.kpi2 < '407')?'yellow-7':(communityFridgeNovContents.kpi2 >= '407' && communityFridgeNovContents.kpi2 < '488.4')?'green':(communityFridgeNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi3 == null)?'grey-2':(communityFridgeNovContents.kpi3 >= '0' && communityFridgeNovContents.kpi3 <= '524.25')?'red':(communityFridgeNovContents.kpi3 > '524.25' && communityFridgeNovContents.kpi3 <= '699')?'orange':(communityFridgeNovContents.kpi3 > '699' && communityFridgeNovContents.kpi3 < '873.75')?'yellow-7':(communityFridgeNovContents.kpi3 >= '873.75' && communityFridgeNovContents.kpi3 < '1048.5')?'green':(communityFridgeNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeDecContents.kpi1 == null)?'grey-2':(communityFridgeDecContents.kpi1 >= '0' && communityFridgeDecContents.kpi1 <= '238.8')?'red':(communityFridgeDecContents.kpi1 > '238.8' && communityFridgeDecContents.kpi1 <= '318.4')?'orange':(communityFridgeDecContents.kpi1 > '318.4' && communityFridgeDecContents.kpi1 < '398')?'yellow-7':(communityFridgeDecContents.kpi1 >= '398' && communityFridgeDecContents.kpi1 < '477.6')?'green':(communityFridgeDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi2 == null)?'grey-2':(communityFridgeDecContents.kpi2 >= '0' && communityFridgeDecContents.kpi2 <= '244.2')?'red':(communityFridgeDecContents.kpi2 > '244.2' && communityFridgeDecContents.kpi2 <= '325.6')?'orange':(communityFridgeDecContents.kpi2 > '325.6' && communityFridgeDecContents.kpi2 < '407')?'yellow-7':(communityFridgeDecContents.kpi2 >= '407' && communityFridgeDecContents.kpi2 < '488.4')?'green':(communityFridgeDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi3 == null)?'grey-2':(communityFridgeDecContents.kpi3 >= '0' && communityFridgeDecContents.kpi3 <= '524.25')?'red':(communityFridgeDecContents.kpi3 > '524.25' && communityFridgeDecContents.kpi3 <= '699')?'orange':(communityFridgeDecContents.kpi3 > '699' && communityFridgeDecContents.kpi3 < '873.75')?'yellow-7':(communityFridgeDecContents.kpi3 >= '873.75' && communityFridgeDecContents.kpi3 < '1048.5')?'green':(communityFridgeDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi1 == null)?'grey-2':(communityFridgeJanContents.kpi1 >= '0' && communityFridgeJanContents.kpi1 <= '238.8')?'red':(communityFridgeJanContents.kpi1 > '238.8' && communityFridgeJanContents.kpi1 <= '318.4')?'orange':(communityFridgeJanContents.kpi1 > '318.4' && communityFridgeJanContents.kpi1 < '398')?'yellow-7':(communityFridgeJanContents.kpi1 >= '398' && communityFridgeJanContents.kpi1 < '477.6')?'green':(communityFridgeJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi2 == null)?'grey-2':(communityFridgeJanContents.kpi2 >= '0' && communityFridgeJanContents.kpi2 <= '244.2')?'red':(communityFridgeJanContents.kpi2 > '244.2' && communityFridgeJanContents.kpi2 <= '325.6')?'orange':(communityFridgeJanContents.kpi2 > '325.6' && communityFridgeJanContents.kpi2 < '407')?'yellow-7':(communityFridgeJanContents.kpi2 >= '407' && communityFridgeJanContents.kpi2 < '488.4')?'green':(communityFridgeJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi3 == null)?'grey-2':(communityFridgeJanContents.kpi3 >= '0' && communityFridgeJanContents.kpi3 <= '524.25')?'red':(communityFridgeJanContents.kpi3 > '524.25' && communityFridgeJanContents.kpi3 <= '699')?'orange':(communityFridgeJanContents.kpi3 > '699' && communityFridgeJanContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJanContents.kpi3 >= '873.75' && communityFridgeJanContents.kpi3 < '1048.5')?'green':(communityFridgeJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeFebContents.kpi1 == null)?'grey-2':(communityFridgeFebContents.kpi1 >= '0' && communityFridgeFebContents.kpi1 <= '238.8')?'red':(communityFridgeFebContents.kpi1 > '238.8' && communityFridgeFebContents.kpi1 <= '318.4')?'orange':(communityFridgeFebContents.kpi1 > '318.4' && communityFridgeFebContents.kpi1 < '398')?'yellow-7':(communityFridgeFebContents.kpi1 >= '398' && communityFridgeFebContents.kpi1 < '477.6')?'green':(communityFridgeFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi2 == null)?'grey-2':(communityFridgeFebContents.kpi2 >= '0' && communityFridgeFebContents.kpi2 <= '244.2')?'red':(communityFridgeFebContents.kpi2 > '244.2' && communityFridgeFebContents.kpi2 <= '325.6')?'orange':(communityFridgeFebContents.kpi2 > '325.6' && communityFridgeFebContents.kpi2 < '407')?'yellow-7':(communityFridgeFebContents.kpi2 >= '407' && communityFridgeFebContents.kpi2 < '488.4')?'green':(communityFridgeFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi3 == null)?'grey-2':(communityFridgeFebContents.kpi3 >= '0' && communityFridgeFebContents.kpi3 <= '524.25')?'red':(communityFridgeFebContents.kpi3 > '524.25' && communityFridgeFebContents.kpi3 <= '699')?'orange':(communityFridgeFebContents.kpi3 > '699' && communityFridgeFebContents.kpi3 < '873.75')?'yellow-7':(communityFridgeFebContents.kpi3 >= '873.75' && communityFridgeFebContents.kpi3 < '1048.5')?'green':(communityFridgeFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMarContents.kpi1 == null)?'grey-2':(communityFridgeMarContents.kpi1 >= '0' && communityFridgeMarContents.kpi1 <= '238.8')?'red':(communityFridgeMarContents.kpi1 > '238.8' && communityFridgeMarContents.kpi1 <= '318.4')?'orange':(communityFridgeMarContents.kpi1 > '318.4' && communityFridgeMarContents.kpi1 < '398')?'yellow-7':(communityFridgeMarContents.kpi1 >= '398' && communityFridgeMarContents.kpi1 < '477.6')?'green':(communityFridgeMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi2 == null)?'grey-2':(communityFridgeMarContents.kpi2 >= '0' && communityFridgeMarContents.kpi2 <= '244.2')?'red':(communityFridgeMarContents.kpi2 > '244.2' && communityFridgeMarContents.kpi2 <= '325.6')?'orange':(communityFridgeMarContents.kpi2 > '325.6' && communityFridgeMarContents.kpi2 < '407')?'yellow-7':(communityFridgeMarContents.kpi2 >= '407' && communityFridgeMarContents.kpi2 < '488.4')?'green':(communityFridgeMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi3 == null)?'grey-2':(communityFridgeMarContents.kpi3 >= '0' && communityFridgeMarContents.kpi3 <= '524.25')?'red':(communityFridgeMarContents.kpi3 > '524.25' && communityFridgeMarContents.kpi3 <= '699')?'orange':(communityFridgeMarContents.kpi3 > '699' && communityFridgeMarContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMarContents.kpi3 >= '873.75' && communityFridgeMarContents.kpi3 < '1048.5')?'green':(communityFridgeMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAprContents.kpi1 == null)?'grey-2':(communityFridgeAprContents.kpi1 >= '0' && communityFridgeAprContents.kpi1 <= '238.8')?'red':(communityFridgeAprContents.kpi1 > '238.8' && communityFridgeAprContents.kpi1 <= '318.4')?'orange':(communityFridgeAprContents.kpi1 > '318.4' && communityFridgeAprContents.kpi1 < '398')?'yellow-7':(communityFridgeAprContents.kpi1 >= '398' && communityFridgeAprContents.kpi1 < '477.6')?'green':(communityFridgeAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi2 == null)?'grey-2':(communityFridgeAprContents.kpi2 >= '0' && communityFridgeAprContents.kpi2 <= '244.2')?'red':(communityFridgeAprContents.kpi2 > '244.2' && communityFridgeAprContents.kpi2 <= '325.6')?'orange':(communityFridgeAprContents.kpi2 > '325.6' && communityFridgeAprContents.kpi2 < '407')?'yellow-7':(communityFridgeAprContents.kpi2 >= '407' && communityFridgeAprContents.kpi2 < '488.4')?'green':(communityFridgeAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi3 == null)?'grey-2':(communityFridgeAprContents.kpi3 >= '0' && communityFridgeAprContents.kpi3 <= '524.25')?'red':(communityFridgeAprContents.kpi3 > '524.25' && communityFridgeAprContents.kpi3 <= '699')?'orange':(communityFridgeAprContents.kpi3 > '699' && communityFridgeAprContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAprContents.kpi3 >= '873.75' && communityFridgeAprContents.kpi3 < '1048.5')?'green':(communityFridgeAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMayContents.kpi1 == null)?'grey-2':(communityFridgeMayContents.kpi1 >= '0' && communityFridgeMayContents.kpi1 <= '238.8')?'red':(communityFridgeMayContents.kpi1 > '238.8' && communityFridgeMayContents.kpi1 <= '318.4')?'orange':(communityFridgeMayContents.kpi1 > '318.4' && communityFridgeMayContents.kpi1 < '398')?'yellow-7':(communityFridgeMayContents.kpi1 >= '398' && communityFridgeMayContents.kpi1 < '477.6')?'green':(communityFridgeMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi2 == null)?'grey-2':(communityFridgeMayContents.kpi2 >= '0' && communityFridgeMayContents.kpi2 <= '244.2')?'red':(communityFridgeMayContents.kpi2 > '244.2' && communityFridgeMayContents.kpi2 <= '325.6')?'orange':(communityFridgeMayContents.kpi2 > '325.6' && communityFridgeMayContents.kpi2 < '407')?'yellow-7':(communityFridgeMayContents.kpi2 >= '407' && communityFridgeMayContents.kpi2 < '488.4')?'green':(communityFridgeMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi3 == null)?'grey-2':(communityFridgeMayContents.kpi3 >= '0' && communityFridgeMayContents.kpi3 <= '524.25')?'red':(communityFridgeMayContents.kpi3 > '524.25' && communityFridgeMayContents.kpi3 <= '699')?'orange':(communityFridgeMayContents.kpi3 > '699' && communityFridgeMayContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMayContents.kpi3 >= '873.75' && communityFridgeMayContents.kpi3 < '1048.5')?'green':(communityFridgeMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJunContents.kpi1 == null)?'grey-2':(communityFridgeJunContents.kpi1 >= '0' && communityFridgeJunContents.kpi1 <= '238.8')?'red':(communityFridgeJunContents.kpi1 > '238.8' && communityFridgeJunContents.kpi1 <= '318.4')?'orange':(communityFridgeJunContents.kpi1 > '318.4' && communityFridgeJunContents.kpi1 < '398')?'yellow-7':(communityFridgeJunContents.kpi1 >= '398' && communityFridgeJunContents.kpi1 < '477.6')?'green':(communityFridgeJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi2 == null)?'grey-2':(communityFridgeJunContents.kpi2 >= '0' && communityFridgeJunContents.kpi2 <= '244.2')?'red':(communityFridgeJunContents.kpi2 > '244.2' && communityFridgeJunContents.kpi2 <= '325.6')?'orange':(communityFridgeJunContents.kpi2 > '325.6' && communityFridgeJunContents.kpi2 < '407')?'yellow-7':(communityFridgeJunContents.kpi2 >= '407' && communityFridgeJunContents.kpi2 < '488.4')?'green':(communityFridgeJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi3 == null)?'grey-2':(communityFridgeJunContents.kpi3 >= '0' && communityFridgeJunContents.kpi3 <= '524.25')?'red':(communityFridgeJunContents.kpi3 > '524.25' && communityFridgeJunContents.kpi3 <= '699')?'orange':(communityFridgeJunContents.kpi3 > '699' && communityFridgeJunContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJunContents.kpi3 >= '873.75' && communityFridgeJunContents.kpi3 < '1048.5')?'green':(communityFridgeJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJulContents.kpi1 == null)?'grey-2':(communityFridgeJulContents.kpi1 >= '0' && communityFridgeJulContents.kpi1 <= '238.8')?'red':(communityFridgeJulContents.kpi1 > '238.8' && communityFridgeJulContents.kpi1 <= '318.4')?'orange':(communityFridgeJulContents.kpi1 > '318.4' && communityFridgeJulContents.kpi1 < '398')?'yellow-7':(communityFridgeJulContents.kpi1 >= '398' && communityFridgeJulContents.kpi1 < '477.6')?'green':(communityFridgeJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi2 == null)?'grey-2':(communityFridgeJulContents.kpi2 >= '0' && communityFridgeJulContents.kpi2 <= '244.2')?'red':(communityFridgeJulContents.kpi2 > '244.2' && communityFridgeJulContents.kpi2 <= '325.6')?'orange':(communityFridgeJulContents.kpi2 > '325.6' && communityFridgeJulContents.kpi2 < '407')?'yellow-7':(communityFridgeJulContents.kpi2 >= '407' && communityFridgeJulContents.kpi2 < '488.4')?'green':(communityFridgeJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi3 == null)?'grey-2':(communityFridgeJulContents.kpi3 >= '0' && communityFridgeJulContents.kpi3 <= '524.25')?'red':(communityFridgeJulContents.kpi3 > '524.25' && communityFridgeJulContents.kpi3 <= '699')?'orange':(communityFridgeJulContents.kpi3 > '699' && communityFridgeJulContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJulContents.kpi3 >= '873.75' && communityFridgeJulContents.kpi3 < '1048.5')?'green':(communityFridgeJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAugContents.kpi1 == null)?'grey-2':(communityFridgeAugContents.kpi1 >= '0' && communityFridgeAugContents.kpi1 <= '238.8')?'red':(communityFridgeAugContents.kpi1 > '238.8' && communityFridgeAugContents.kpi1 <= '318.4')?'orange':(communityFridgeAugContents.kpi1 > '318.4' && communityFridgeAugContents.kpi1 < '398')?'yellow-7':(communityFridgeAugContents.kpi1 >= '398' && communityFridgeAugContents.kpi1 < '477.6')?'green':(communityFridgeAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi2 == null)?'grey-2':(communityFridgeAugContents.kpi2 >= '0' && communityFridgeAugContents.kpi2 <= '244.2')?'red':(communityFridgeAugContents.kpi2 > '244.2' && communityFridgeAugContents.kpi2 <= '325.6')?'orange':(communityFridgeAugContents.kpi2 > '325.6' && communityFridgeAugContents.kpi2 < '407')?'yellow-7':(communityFridgeAugContents.kpi2 >= '407' && communityFridgeAugContents.kpi2 < '488.4')?'green':(communityFridgeAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi3 == null)?'grey-2':(communityFridgeAugContents.kpi3 >= '0' && communityFridgeAugContents.kpi3 <= '524.25')?'red':(communityFridgeAugContents.kpi3 > '524.25' && communityFridgeAugContents.kpi3 <= '699')?'orange':(communityFridgeAugContents.kpi3 > '699' && communityFridgeAugContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAugContents.kpi3 >= '873.75' && communityFridgeAugContents.kpi3 < '1048.5')?'green':(communityFridgeAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeSepContents.kpi1 == null)?'grey-2':(communityFridgeSepContents.kpi1 >= '0' && communityFridgeSepContents.kpi1 <= '238.8')?'red':(communityFridgeSepContents.kpi1 > '238.8' && communityFridgeSepContents.kpi1 <= '318.4')?'orange':(communityFridgeSepContents.kpi1 > '318.4' && communityFridgeSepContents.kpi1 < '398')?'yellow-7':(communityFridgeSepContents.kpi1 >= '398' && communityFridgeSepContents.kpi1 < '477.6')?'green':(communityFridgeSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi2 == null)?'grey-2':(communityFridgeSepContents.kpi2 >= '0' && communityFridgeSepContents.kpi2 <= '244.2')?'red':(communityFridgeSepContents.kpi2 > '244.2' && communityFridgeSepContents.kpi2 <= '325.6')?'orange':(communityFridgeSepContents.kpi2 > '325.6' && communityFridgeSepContents.kpi2 < '407')?'yellow-7':(communityFridgeSepContents.kpi2 >= '407' && communityFridgeSepContents.kpi2 < '488.4')?'green':(communityFridgeSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi3 == null)?'grey-2':(communityFridgeSepContents.kpi3 >= '0' && communityFridgeSepContents.kpi3 <= '524.25')?'red':(communityFridgeSepContents.kpi3 > '524.25' && communityFridgeSepContents.kpi3 <= '699')?'orange':(communityFridgeSepContents.kpi3 > '699' && communityFridgeSepContents.kpi3 < '873.75')?'yellow-7':(communityFridgeSepContents.kpi3 >= '873.75' && communityFridgeSepContents.kpi3 < '1048.5')?'green':(communityFridgeSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeOctContents.kpi1 == null)?'grey-2':(communityFridgeOctContents.kpi1 >= '0' && communityFridgeOctContents.kpi1 <= '238.8')?'red':(communityFridgeOctContents.kpi1 > '238.8' && communityFridgeOctContents.kpi1 <= '318.4')?'orange':(communityFridgeOctContents.kpi1 > '318.4' && communityFridgeOctContents.kpi1 < '398')?'yellow-7':(communityFridgeOctContents.kpi1 >= '398' && communityFridgeOctContents.kpi1 < '477.6')?'green':(communityFridgeOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi2 == null)?'grey-2':(communityFridgeOctContents.kpi2 >= '0' && communityFridgeOctContents.kpi2 <= '244.2')?'red':(communityFridgeOctContents.kpi2 > '244.2' && communityFridgeOctContents.kpi2 <= '325.6')?'orange':(communityFridgeOctContents.kpi2 > '325.6' && communityFridgeOctContents.kpi2 < '407')?'yellow-7':(communityFridgeOctContents.kpi2 >= '407' && communityFridgeOctContents.kpi2 < '488.4')?'green':(communityFridgeOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi3 == null)?'grey-2':(communityFridgeOctContents.kpi3 >= '0' && communityFridgeOctContents.kpi3 <= '524.25')?'red':(communityFridgeOctContents.kpi3 > '524.25' && communityFridgeOctContents.kpi3 <= '699')?'orange':(communityFridgeOctContents.kpi3 > '699' && communityFridgeOctContents.kpi3 < '873.75')?'yellow-7':(communityFridgeOctContents.kpi3 >= '873.75' && communityFridgeOctContents.kpi3 < '1048.5')?'green':(communityFridgeOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeNovContents.kpi1 == null)?'grey-2':(communityFridgeNovContents.kpi1 >= '0' && communityFridgeNovContents.kpi1 <= '238.8')?'red':(communityFridgeNovContents.kpi1 > '238.8' && communityFridgeNovContents.kpi1 <= '318.4')?'orange':(communityFridgeNovContents.kpi1 > '318.4' && communityFridgeNovContents.kpi1 < '398')?'yellow-7':(communityFridgeNovContents.kpi1 >= '398' && communityFridgeNovContents.kpi1 < '477.6')?'green':(communityFridgeNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi2 == null)?'grey-2':(communityFridgeNovContents.kpi2 >= '0' && communityFridgeNovContents.kpi2 <= '244.2')?'red':(communityFridgeNovContents.kpi2 > '244.2' && communityFridgeNovContents.kpi2 <= '325.6')?'orange':(communityFridgeNovContents.kpi2 > '325.6' && communityFridgeNovContents.kpi2 < '407')?'yellow-7':(communityFridgeNovContents.kpi2 >= '407' && communityFridgeNovContents.kpi2 < '488.4')?'green':(communityFridgeNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi3 == null)?'grey-2':(communityFridgeNovContents.kpi3 >= '0' && communityFridgeNovContents.kpi3 <= '524.25')?'red':(communityFridgeNovContents.kpi3 > '524.25' && communityFridgeNovContents.kpi3 <= '699')?'orange':(communityFridgeNovContents.kpi3 > '699' && communityFridgeNovContents.kpi3 < '873.75')?'yellow-7':(communityFridgeNovContents.kpi3 >= '873.75' && communityFridgeNovContents.kpi3 < '1048.5')?'green':(communityFridgeNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeDecContents.kpi1 == null)?'grey-2':(communityFridgeDecContents.kpi1 >= '0' && communityFridgeDecContents.kpi1 <= '238.8')?'red':(communityFridgeDecContents.kpi1 > '238.8' && communityFridgeDecContents.kpi1 <= '318.4')?'orange':(communityFridgeDecContents.kpi1 > '318.4' && communityFridgeDecContents.kpi1 < '398')?'yellow-7':(communityFridgeDecContents.kpi1 >= '398' && communityFridgeDecContents.kpi1 < '477.6')?'green':(communityFridgeDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi2 == null)?'grey-2':(communityFridgeDecContents.kpi2 >= '0' && communityFridgeDecContents.kpi2 <= '244.2')?'red':(communityFridgeDecContents.kpi2 > '244.2' && communityFridgeDecContents.kpi2 <= '325.6')?'orange':(communityFridgeDecContents.kpi2 > '325.6' && communityFridgeDecContents.kpi2 < '407')?'yellow-7':(communityFridgeDecContents.kpi2 >= '407' && communityFridgeDecContents.kpi2 < '488.4')?'green':(communityFridgeDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi3 == null)?'grey-2':(communityFridgeDecContents.kpi3 >= '0' && communityFridgeDecContents.kpi3 <= '524.25')?'red':(communityFridgeDecContents.kpi3 > '524.25' && communityFridgeDecContents.kpi3 <= '699')?'orange':(communityFridgeDecContents.kpi3 > '699' && communityFridgeDecContents.kpi3 < '873.75')?'yellow-7':(communityFridgeDecContents.kpi3 >= '873.75' && communityFridgeDecContents.kpi3 < '1048.5')?'green':(communityFridgeDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi1 == null)?'grey-2':(communityFridgeJanContents.kpi1 >= '0' && communityFridgeJanContents.kpi1 <= '238.8')?'red':(communityFridgeJanContents.kpi1 > '238.8' && communityFridgeJanContents.kpi1 <= '318.4')?'orange':(communityFridgeJanContents.kpi1 > '318.4' && communityFridgeJanContents.kpi1 < '398')?'yellow-7':(communityFridgeJanContents.kpi1 >= '398' && communityFridgeJanContents.kpi1 < '477.6')?'green':(communityFridgeJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi2 == null)?'grey-2':(communityFridgeJanContents.kpi2 >= '0' && communityFridgeJanContents.kpi2 <= '244.2')?'red':(communityFridgeJanContents.kpi2 > '244.2' && communityFridgeJanContents.kpi2 <= '325.6')?'orange':(communityFridgeJanContents.kpi2 > '325.6' && communityFridgeJanContents.kpi2 < '407')?'yellow-7':(communityFridgeJanContents.kpi2 >= '407' && communityFridgeJanContents.kpi2 < '488.4')?'green':(communityFridgeJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi3 == null)?'grey-2':(communityFridgeJanContents.kpi3 >= '0' && communityFridgeJanContents.kpi3 <= '524.25')?'red':(communityFridgeJanContents.kpi3 > '524.25' && communityFridgeJanContents.kpi3 <= '699')?'orange':(communityFridgeJanContents.kpi3 > '699' && communityFridgeJanContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJanContents.kpi3 >= '873.75' && communityFridgeJanContents.kpi3 < '1048.5')?'green':(communityFridgeJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeFebContents.kpi1 == null)?'grey-2':(communityFridgeFebContents.kpi1 >= '0' && communityFridgeFebContents.kpi1 <= '238.8')?'red':(communityFridgeFebContents.kpi1 > '238.8' && communityFridgeFebContents.kpi1 <= '318.4')?'orange':(communityFridgeFebContents.kpi1 > '318.4' && communityFridgeFebContents.kpi1 < '398')?'yellow-7':(communityFridgeFebContents.kpi1 >= '398' && communityFridgeFebContents.kpi1 < '477.6')?'green':(communityFridgeFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi2 == null)?'grey-2':(communityFridgeFebContents.kpi2 >= '0' && communityFridgeFebContents.kpi2 <= '244.2')?'red':(communityFridgeFebContents.kpi2 > '244.2' && communityFridgeFebContents.kpi2 <= '325.6')?'orange':(communityFridgeFebContents.kpi2 > '325.6' && communityFridgeFebContents.kpi2 < '407')?'yellow-7':(communityFridgeFebContents.kpi2 >= '407' && communityFridgeFebContents.kpi2 < '488.4')?'green':(communityFridgeFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi3 == null)?'grey-2':(communityFridgeFebContents.kpi3 >= '0' && communityFridgeFebContents.kpi3 <= '524.25')?'red':(communityFridgeFebContents.kpi3 > '524.25' && communityFridgeFebContents.kpi3 <= '699')?'orange':(communityFridgeFebContents.kpi3 > '699' && communityFridgeFebContents.kpi3 < '873.75')?'yellow-7':(communityFridgeFebContents.kpi3 >= '873.75' && communityFridgeFebContents.kpi3 < '1048.5')?'green':(communityFridgeFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMarContents.kpi1 == null)?'grey-2':(communityFridgeMarContents.kpi1 >= '0' && communityFridgeMarContents.kpi1 <= '238.8')?'red':(communityFridgeMarContents.kpi1 > '238.8' && communityFridgeMarContents.kpi1 <= '318.4')?'orange':(communityFridgeMarContents.kpi1 > '318.4' && communityFridgeMarContents.kpi1 < '398')?'yellow-7':(communityFridgeMarContents.kpi1 >= '398' && communityFridgeMarContents.kpi1 < '477.6')?'green':(communityFridgeMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi2 == null)?'grey-2':(communityFridgeMarContents.kpi2 >= '0' && communityFridgeMarContents.kpi2 <= '244.2')?'red':(communityFridgeMarContents.kpi2 > '244.2' && communityFridgeMarContents.kpi2 <= '325.6')?'orange':(communityFridgeMarContents.kpi2 > '325.6' && communityFridgeMarContents.kpi2 < '407')?'yellow-7':(communityFridgeMarContents.kpi2 >= '407' && communityFridgeMarContents.kpi2 < '488.4')?'green':(communityFridgeMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi3 == null)?'grey-2':(communityFridgeMarContents.kpi3 >= '0' && communityFridgeMarContents.kpi3 <= '524.25')?'red':(communityFridgeMarContents.kpi3 > '524.25' && communityFridgeMarContents.kpi3 <= '699')?'orange':(communityFridgeMarContents.kpi3 > '699' && communityFridgeMarContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMarContents.kpi3 >= '873.75' && communityFridgeMarContents.kpi3 < '1048.5')?'green':(communityFridgeMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAprContents.kpi1 == null)?'grey-2':(communityFridgeAprContents.kpi1 >= '0' && communityFridgeAprContents.kpi1 <= '238.8')?'red':(communityFridgeAprContents.kpi1 > '238.8' && communityFridgeAprContents.kpi1 <= '318.4')?'orange':(communityFridgeAprContents.kpi1 > '318.4' && communityFridgeAprContents.kpi1 < '398')?'yellow-7':(communityFridgeAprContents.kpi1 >= '398' && communityFridgeAprContents.kpi1 < '477.6')?'green':(communityFridgeAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi2 == null)?'grey-2':(communityFridgeAprContents.kpi2 >= '0' && communityFridgeAprContents.kpi2 <= '244.2')?'red':(communityFridgeAprContents.kpi2 > '244.2' && communityFridgeAprContents.kpi2 <= '325.6')?'orange':(communityFridgeAprContents.kpi2 > '325.6' && communityFridgeAprContents.kpi2 < '407')?'yellow-7':(communityFridgeAprContents.kpi2 >= '407' && communityFridgeAprContents.kpi2 < '488.4')?'green':(communityFridgeAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi3 == null)?'grey-2':(communityFridgeAprContents.kpi3 >= '0' && communityFridgeAprContents.kpi3 <= '524.25')?'red':(communityFridgeAprContents.kpi3 > '524.25' && communityFridgeAprContents.kpi3 <= '699')?'orange':(communityFridgeAprContents.kpi3 > '699' && communityFridgeAprContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAprContents.kpi3 >= '873.75' && communityFridgeAprContents.kpi3 < '1048.5')?'green':(communityFridgeAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMayContents.kpi1 == null)?'grey-2':(communityFridgeMayContents.kpi1 >= '0' && communityFridgeMayContents.kpi1 <= '238.8')?'red':(communityFridgeMayContents.kpi1 > '238.8' && communityFridgeMayContents.kpi1 <= '318.4')?'orange':(communityFridgeMayContents.kpi1 > '318.4' && communityFridgeMayContents.kpi1 < '398')?'yellow-7':(communityFridgeMayContents.kpi1 >= '398' && communityFridgeMayContents.kpi1 < '477.6')?'green':(communityFridgeMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi2 == null)?'grey-2':(communityFridgeMayContents.kpi2 >= '0' && communityFridgeMayContents.kpi2 <= '244.2')?'red':(communityFridgeMayContents.kpi2 > '244.2' && communityFridgeMayContents.kpi2 <= '325.6')?'orange':(communityFridgeMayContents.kpi2 > '325.6' && communityFridgeMayContents.kpi2 < '407')?'yellow-7':(communityFridgeMayContents.kpi2 >= '407' && communityFridgeMayContents.kpi2 < '488.4')?'green':(communityFridgeMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi3 == null)?'grey-2':(communityFridgeMayContents.kpi3 >= '0' && communityFridgeMayContents.kpi3 <= '524.25')?'red':(communityFridgeMayContents.kpi3 > '524.25' && communityFridgeMayContents.kpi3 <= '699')?'orange':(communityFridgeMayContents.kpi3 > '699' && communityFridgeMayContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMayContents.kpi3 >= '873.75' && communityFridgeMayContents.kpi3 < '1048.5')?'green':(communityFridgeMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJunContents.kpi1 == null)?'grey-2':(communityFridgeJunContents.kpi1 >= '0' && communityFridgeJunContents.kpi1 <= '238.8')?'red':(communityFridgeJunContents.kpi1 > '238.8' && communityFridgeJunContents.kpi1 <= '318.4')?'orange':(communityFridgeJunContents.kpi1 > '318.4' && communityFridgeJunContents.kpi1 < '398')?'yellow-7':(communityFridgeJunContents.kpi1 >= '398' && communityFridgeJunContents.kpi1 < '477.6')?'green':(communityFridgeJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi2 == null)?'grey-2':(communityFridgeJunContents.kpi2 >= '0' && communityFridgeJunContents.kpi2 <= '244.2')?'red':(communityFridgeJunContents.kpi2 > '244.2' && communityFridgeJunContents.kpi2 <= '325.6')?'orange':(communityFridgeJunContents.kpi2 > '325.6' && communityFridgeJunContents.kpi2 < '407')?'yellow-7':(communityFridgeJunContents.kpi2 >= '407' && communityFridgeJunContents.kpi2 < '488.4')?'green':(communityFridgeJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi3 == null)?'grey-2':(communityFridgeJunContents.kpi3 >= '0' && communityFridgeJunContents.kpi3 <= '524.25')?'red':(communityFridgeJunContents.kpi3 > '524.25' && communityFridgeJunContents.kpi3 <= '699')?'orange':(communityFridgeJunContents.kpi3 > '699' && communityFridgeJunContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJunContents.kpi3 >= '873.75' && communityFridgeJunContents.kpi3 < '1048.5')?'green':(communityFridgeJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJulContents.kpi1 == null)?'grey-2':(communityFridgeJulContents.kpi1 >= '0' && communityFridgeJulContents.kpi1 <= '238.8')?'red':(communityFridgeJulContents.kpi1 > '238.8' && communityFridgeJulContents.kpi1 <= '318.4')?'orange':(communityFridgeJulContents.kpi1 > '318.4' && communityFridgeJulContents.kpi1 < '398')?'yellow-7':(communityFridgeJulContents.kpi1 >= '398' && communityFridgeJulContents.kpi1 < '477.6')?'green':(communityFridgeJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi2 == null)?'grey-2':(communityFridgeJulContents.kpi2 >= '0' && communityFridgeJulContents.kpi2 <= '244.2')?'red':(communityFridgeJulContents.kpi2 > '244.2' && communityFridgeJulContents.kpi2 <= '325.6')?'orange':(communityFridgeJulContents.kpi2 > '325.6' && communityFridgeJulContents.kpi2 < '407')?'yellow-7':(communityFridgeJulContents.kpi2 >= '407' && communityFridgeJulContents.kpi2 < '488.4')?'green':(communityFridgeJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi3 == null)?'grey-2':(communityFridgeJulContents.kpi3 >= '0' && communityFridgeJulContents.kpi3 <= '524.25')?'red':(communityFridgeJulContents.kpi3 > '524.25' && communityFridgeJulContents.kpi3 <= '699')?'orange':(communityFridgeJulContents.kpi3 > '699' && communityFridgeJulContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJulContents.kpi3 >= '873.75' && communityFridgeJulContents.kpi3 < '1048.5')?'green':(communityFridgeJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAugContents.kpi1 == null)?'grey-2':(communityFridgeAugContents.kpi1 >= '0' && communityFridgeAugContents.kpi1 <= '238.8')?'red':(communityFridgeAugContents.kpi1 > '238.8' && communityFridgeAugContents.kpi1 <= '318.4')?'orange':(communityFridgeAugContents.kpi1 > '318.4' && communityFridgeAugContents.kpi1 < '398')?'yellow-7':(communityFridgeAugContents.kpi1 >= '398' && communityFridgeAugContents.kpi1 < '477.6')?'green':(communityFridgeAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi2 == null)?'grey-2':(communityFridgeAugContents.kpi2 >= '0' && communityFridgeAugContents.kpi2 <= '244.2')?'red':(communityFridgeAugContents.kpi2 > '244.2' && communityFridgeAugContents.kpi2 <= '325.6')?'orange':(communityFridgeAugContents.kpi2 > '325.6' && communityFridgeAugContents.kpi2 < '407')?'yellow-7':(communityFridgeAugContents.kpi2 >= '407' && communityFridgeAugContents.kpi2 < '488.4')?'green':(communityFridgeAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi3 == null)?'grey-2':(communityFridgeAugContents.kpi3 >= '0' && communityFridgeAugContents.kpi3 <= '524.25')?'red':(communityFridgeAugContents.kpi3 > '524.25' && communityFridgeAugContents.kpi3 <= '699')?'orange':(communityFridgeAugContents.kpi3 > '699' && communityFridgeAugContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAugContents.kpi3 >= '873.75' && communityFridgeAugContents.kpi3 < '1048.5')?'green':(communityFridgeAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeSepContents.kpi1 == null)?'grey-2':(communityFridgeSepContents.kpi1 >= '0' && communityFridgeSepContents.kpi1 <= '238.8')?'red':(communityFridgeSepContents.kpi1 > '238.8' && communityFridgeSepContents.kpi1 <= '318.4')?'orange':(communityFridgeSepContents.kpi1 > '318.4' && communityFridgeSepContents.kpi1 < '398')?'yellow-7':(communityFridgeSepContents.kpi1 >= '398' && communityFridgeSepContents.kpi1 < '477.6')?'green':(communityFridgeSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi2 == null)?'grey-2':(communityFridgeSepContents.kpi2 >= '0' && communityFridgeSepContents.kpi2 <= '244.2')?'red':(communityFridgeSepContents.kpi2 > '244.2' && communityFridgeSepContents.kpi2 <= '325.6')?'orange':(communityFridgeSepContents.kpi2 > '325.6' && communityFridgeSepContents.kpi2 < '407')?'yellow-7':(communityFridgeSepContents.kpi2 >= '407' && communityFridgeSepContents.kpi2 < '488.4')?'green':(communityFridgeSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi3 == null)?'grey-2':(communityFridgeSepContents.kpi3 >= '0' && communityFridgeSepContents.kpi3 <= '524.25')?'red':(communityFridgeSepContents.kpi3 > '524.25' && communityFridgeSepContents.kpi3 <= '699')?'orange':(communityFridgeSepContents.kpi3 > '699' && communityFridgeSepContents.kpi3 < '873.75')?'yellow-7':(communityFridgeSepContents.kpi3 >= '873.75' && communityFridgeSepContents.kpi3 < '1048.5')?'green':(communityFridgeSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeOctContents.kpi1 == null)?'grey-2':(communityFridgeOctContents.kpi1 >= '0' && communityFridgeOctContents.kpi1 <= '238.8')?'red':(communityFridgeOctContents.kpi1 > '238.8' && communityFridgeOctContents.kpi1 <= '318.4')?'orange':(communityFridgeOctContents.kpi1 > '318.4' && communityFridgeOctContents.kpi1 < '398')?'yellow-7':(communityFridgeOctContents.kpi1 >= '398' && communityFridgeOctContents.kpi1 < '477.6')?'green':(communityFridgeOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi2 == null)?'grey-2':(communityFridgeOctContents.kpi2 >= '0' && communityFridgeOctContents.kpi2 <= '244.2')?'red':(communityFridgeOctContents.kpi2 > '244.2' && communityFridgeOctContents.kpi2 <= '325.6')?'orange':(communityFridgeOctContents.kpi2 > '325.6' && communityFridgeOctContents.kpi2 < '407')?'yellow-7':(communityFridgeOctContents.kpi2 >= '407' && communityFridgeOctContents.kpi2 < '488.4')?'green':(communityFridgeOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi3 == null)?'grey-2':(communityFridgeOctContents.kpi3 >= '0' && communityFridgeOctContents.kpi3 <= '524.25')?'red':(communityFridgeOctContents.kpi3 > '524.25' && communityFridgeOctContents.kpi3 <= '699')?'orange':(communityFridgeOctContents.kpi3 > '699' && communityFridgeOctContents.kpi3 < '873.75')?'yellow-7':(communityFridgeOctContents.kpi3 >= '873.75' && communityFridgeOctContents.kpi3 < '1048.5')?'green':(communityFridgeOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeNovContents.kpi1 == null)?'grey-2':(communityFridgeNovContents.kpi1 >= '0' && communityFridgeNovContents.kpi1 <= '238.8')?'red':(communityFridgeNovContents.kpi1 > '238.8' && communityFridgeNovContents.kpi1 <= '318.4')?'orange':(communityFridgeNovContents.kpi1 > '318.4' && communityFridgeNovContents.kpi1 < '398')?'yellow-7':(communityFridgeNovContents.kpi1 >= '398' && communityFridgeNovContents.kpi1 < '477.6')?'green':(communityFridgeNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi2 == null)?'grey-2':(communityFridgeNovContents.kpi2 >= '0' && communityFridgeNovContents.kpi2 <= '244.2')?'red':(communityFridgeNovContents.kpi2 > '244.2' && communityFridgeNovContents.kpi2 <= '325.6')?'orange':(communityFridgeNovContents.kpi2 > '325.6' && communityFridgeNovContents.kpi2 < '407')?'yellow-7':(communityFridgeNovContents.kpi2 >= '407' && communityFridgeNovContents.kpi2 < '488.4')?'green':(communityFridgeNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi3 == null)?'grey-2':(communityFridgeNovContents.kpi3 >= '0' && communityFridgeNovContents.kpi3 <= '524.25')?'red':(communityFridgeNovContents.kpi3 > '524.25' && communityFridgeNovContents.kpi3 <= '699')?'orange':(communityFridgeNovContents.kpi3 > '699' && communityFridgeNovContents.kpi3 < '873.75')?'yellow-7':(communityFridgeNovContents.kpi3 >= '873.75' && communityFridgeNovContents.kpi3 < '1048.5')?'green':(communityFridgeNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeDecContents.kpi1 == null)?'grey-2':(communityFridgeDecContents.kpi1 >= '0' && communityFridgeDecContents.kpi1 <= '238.8')?'red':(communityFridgeDecContents.kpi1 > '238.8' && communityFridgeDecContents.kpi1 <= '318.4')?'orange':(communityFridgeDecContents.kpi1 > '318.4' && communityFridgeDecContents.kpi1 < '398')?'yellow-7':(communityFridgeDecContents.kpi1 >= '398' && communityFridgeDecContents.kpi1 < '477.6')?'green':(communityFridgeDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi2 == null)?'grey-2':(communityFridgeDecContents.kpi2 >= '0' && communityFridgeDecContents.kpi2 <= '244.2')?'red':(communityFridgeDecContents.kpi2 > '244.2' && communityFridgeDecContents.kpi2 <= '325.6')?'orange':(communityFridgeDecContents.kpi2 > '325.6' && communityFridgeDecContents.kpi2 < '407')?'yellow-7':(communityFridgeDecContents.kpi2 >= '407' && communityFridgeDecContents.kpi2 < '488.4')?'green':(communityFridgeDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi3 == null)?'grey-2':(communityFridgeDecContents.kpi3 >= '0' && communityFridgeDecContents.kpi3 <= '524.25')?'red':(communityFridgeDecContents.kpi3 > '524.25' && communityFridgeDecContents.kpi3 <= '699')?'orange':(communityFridgeDecContents.kpi3 > '699' && communityFridgeDecContents.kpi3 < '873.75')?'yellow-7':(communityFridgeDecContents.kpi3 >= '873.75' && communityFridgeDecContents.kpi3 < '1048.5')?'green':(communityFridgeDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                  <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi1 == null)?'grey-2':(communityFridgeJanContents.kpi1 >= '0' && communityFridgeJanContents.kpi1 <= '238.8')?'red':(communityFridgeJanContents.kpi1 > '238.8' && communityFridgeJanContents.kpi1 <= '318.4')?'orange':(communityFridgeJanContents.kpi1 > '318.4' && communityFridgeJanContents.kpi1 < '398')?'yellow-7':(communityFridgeJanContents.kpi1 >= '398' && communityFridgeJanContents.kpi1 < '477.6')?'green':(communityFridgeJanContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi2 == null)?'grey-2':(communityFridgeJanContents.kpi2 >= '0' && communityFridgeJanContents.kpi2 <= '244.2')?'red':(communityFridgeJanContents.kpi2 > '244.2' && communityFridgeJanContents.kpi2 <= '325.6')?'orange':(communityFridgeJanContents.kpi2 > '325.6' && communityFridgeJanContents.kpi2 < '407')?'yellow-7':(communityFridgeJanContents.kpi2 >= '407' && communityFridgeJanContents.kpi2 < '488.4')?'green':(communityFridgeJanContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJanContents.kpi3 == null)?'grey-2':(communityFridgeJanContents.kpi3 >= '0' && communityFridgeJanContents.kpi3 <= '524.25')?'red':(communityFridgeJanContents.kpi3 > '524.25' && communityFridgeJanContents.kpi3 <= '699')?'orange':(communityFridgeJanContents.kpi3 > '699' && communityFridgeJanContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJanContents.kpi3 >= '873.75' && communityFridgeJanContents.kpi3 < '1048.5')?'green':(communityFridgeJanContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeFebContents.kpi1 == null)?'grey-2':(communityFridgeFebContents.kpi1 >= '0' && communityFridgeFebContents.kpi1 <= '238.8')?'red':(communityFridgeFebContents.kpi1 > '238.8' && communityFridgeFebContents.kpi1 <= '318.4')?'orange':(communityFridgeFebContents.kpi1 > '318.4' && communityFridgeFebContents.kpi1 < '398')?'yellow-7':(communityFridgeFebContents.kpi1 >= '398' && communityFridgeFebContents.kpi1 < '477.6')?'green':(communityFridgeFebContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi2 == null)?'grey-2':(communityFridgeFebContents.kpi2 >= '0' && communityFridgeFebContents.kpi2 <= '244.2')?'red':(communityFridgeFebContents.kpi2 > '244.2' && communityFridgeFebContents.kpi2 <= '325.6')?'orange':(communityFridgeFebContents.kpi2 > '325.6' && communityFridgeFebContents.kpi2 < '407')?'yellow-7':(communityFridgeFebContents.kpi2 >= '407' && communityFridgeFebContents.kpi2 < '488.4')?'green':(communityFridgeFebContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeFebContents.kpi3 == null)?'grey-2':(communityFridgeFebContents.kpi3 >= '0' && communityFridgeFebContents.kpi3 <= '524.25')?'red':(communityFridgeFebContents.kpi3 > '524.25' && communityFridgeFebContents.kpi3 <= '699')?'orange':(communityFridgeFebContents.kpi3 > '699' && communityFridgeFebContents.kpi3 < '873.75')?'yellow-7':(communityFridgeFebContents.kpi3 >= '873.75' && communityFridgeFebContents.kpi3 < '1048.5')?'green':(communityFridgeFebContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMarContents.kpi1 == null)?'grey-2':(communityFridgeMarContents.kpi1 >= '0' && communityFridgeMarContents.kpi1 <= '238.8')?'red':(communityFridgeMarContents.kpi1 > '238.8' && communityFridgeMarContents.kpi1 <= '318.4')?'orange':(communityFridgeMarContents.kpi1 > '318.4' && communityFridgeMarContents.kpi1 < '398')?'yellow-7':(communityFridgeMarContents.kpi1 >= '398' && communityFridgeMarContents.kpi1 < '477.6')?'green':(communityFridgeMarContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi2 == null)?'grey-2':(communityFridgeMarContents.kpi2 >= '0' && communityFridgeMarContents.kpi2 <= '244.2')?'red':(communityFridgeMarContents.kpi2 > '244.2' && communityFridgeMarContents.kpi2 <= '325.6')?'orange':(communityFridgeMarContents.kpi2 > '325.6' && communityFridgeMarContents.kpi2 < '407')?'yellow-7':(communityFridgeMarContents.kpi2 >= '407' && communityFridgeMarContents.kpi2 < '488.4')?'green':(communityFridgeMarContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMarContents.kpi3 == null)?'grey-2':(communityFridgeMarContents.kpi3 >= '0' && communityFridgeMarContents.kpi3 <= '524.25')?'red':(communityFridgeMarContents.kpi3 > '524.25' && communityFridgeMarContents.kpi3 <= '699')?'orange':(communityFridgeMarContents.kpi3 > '699' && communityFridgeMarContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMarContents.kpi3 >= '873.75' && communityFridgeMarContents.kpi3 < '1048.5')?'green':(communityFridgeMarContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAprContents.kpi1 == null)?'grey-2':(communityFridgeAprContents.kpi1 >= '0' && communityFridgeAprContents.kpi1 <= '238.8')?'red':(communityFridgeAprContents.kpi1 > '238.8' && communityFridgeAprContents.kpi1 <= '318.4')?'orange':(communityFridgeAprContents.kpi1 > '318.4' && communityFridgeAprContents.kpi1 < '398')?'yellow-7':(communityFridgeAprContents.kpi1 >= '398' && communityFridgeAprContents.kpi1 < '477.6')?'green':(communityFridgeAprContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi2 == null)?'grey-2':(communityFridgeAprContents.kpi2 >= '0' && communityFridgeAprContents.kpi2 <= '244.2')?'red':(communityFridgeAprContents.kpi2 > '244.2' && communityFridgeAprContents.kpi2 <= '325.6')?'orange':(communityFridgeAprContents.kpi2 > '325.6' && communityFridgeAprContents.kpi2 < '407')?'yellow-7':(communityFridgeAprContents.kpi2 >= '407' && communityFridgeAprContents.kpi2 < '488.4')?'green':(communityFridgeAprContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAprContents.kpi3 == null)?'grey-2':(communityFridgeAprContents.kpi3 >= '0' && communityFridgeAprContents.kpi3 <= '524.25')?'red':(communityFridgeAprContents.kpi3 > '524.25' && communityFridgeAprContents.kpi3 <= '699')?'orange':(communityFridgeAprContents.kpi3 > '699' && communityFridgeAprContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAprContents.kpi3 >= '873.75' && communityFridgeAprContents.kpi3 < '1048.5')?'green':(communityFridgeAprContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeMayContents.kpi1 == null)?'grey-2':(communityFridgeMayContents.kpi1 >= '0' && communityFridgeMayContents.kpi1 <= '238.8')?'red':(communityFridgeMayContents.kpi1 > '238.8' && communityFridgeMayContents.kpi1 <= '318.4')?'orange':(communityFridgeMayContents.kpi1 > '318.4' && communityFridgeMayContents.kpi1 < '398')?'yellow-7':(communityFridgeMayContents.kpi1 >= '398' && communityFridgeMayContents.kpi1 < '477.6')?'green':(communityFridgeMayContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi2 == null)?'grey-2':(communityFridgeMayContents.kpi2 >= '0' && communityFridgeMayContents.kpi2 <= '244.2')?'red':(communityFridgeMayContents.kpi2 > '244.2' && communityFridgeMayContents.kpi2 <= '325.6')?'orange':(communityFridgeMayContents.kpi2 > '325.6' && communityFridgeMayContents.kpi2 < '407')?'yellow-7':(communityFridgeMayContents.kpi2 >= '407' && communityFridgeMayContents.kpi2 < '488.4')?'green':(communityFridgeMayContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeMayContents.kpi3 == null)?'grey-2':(communityFridgeMayContents.kpi3 >= '0' && communityFridgeMayContents.kpi3 <= '524.25')?'red':(communityFridgeMayContents.kpi3 > '524.25' && communityFridgeMayContents.kpi3 <= '699')?'orange':(communityFridgeMayContents.kpi3 > '699' && communityFridgeMayContents.kpi3 < '873.75')?'yellow-7':(communityFridgeMayContents.kpi3 >= '873.75' && communityFridgeMayContents.kpi3 < '1048.5')?'green':(communityFridgeMayContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJunContents.kpi1 == null)?'grey-2':(communityFridgeJunContents.kpi1 >= '0' && communityFridgeJunContents.kpi1 <= '238.8')?'red':(communityFridgeJunContents.kpi1 > '238.8' && communityFridgeJunContents.kpi1 <= '318.4')?'orange':(communityFridgeJunContents.kpi1 > '318.4' && communityFridgeJunContents.kpi1 < '398')?'yellow-7':(communityFridgeJunContents.kpi1 >= '398' && communityFridgeJunContents.kpi1 < '477.6')?'green':(communityFridgeJunContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi2 == null)?'grey-2':(communityFridgeJunContents.kpi2 >= '0' && communityFridgeJunContents.kpi2 <= '244.2')?'red':(communityFridgeJunContents.kpi2 > '244.2' && communityFridgeJunContents.kpi2 <= '325.6')?'orange':(communityFridgeJunContents.kpi2 > '325.6' && communityFridgeJunContents.kpi2 < '407')?'yellow-7':(communityFridgeJunContents.kpi2 >= '407' && communityFridgeJunContents.kpi2 < '488.4')?'green':(communityFridgeJunContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJunContents.kpi3 == null)?'grey-2':(communityFridgeJunContents.kpi3 >= '0' && communityFridgeJunContents.kpi3 <= '524.25')?'red':(communityFridgeJunContents.kpi3 > '524.25' && communityFridgeJunContents.kpi3 <= '699')?'orange':(communityFridgeJunContents.kpi3 > '699' && communityFridgeJunContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJunContents.kpi3 >= '873.75' && communityFridgeJunContents.kpi3 < '1048.5')?'green':(communityFridgeJunContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeJulContents.kpi1 == null)?'grey-2':(communityFridgeJulContents.kpi1 >= '0' && communityFridgeJulContents.kpi1 <= '238.8')?'red':(communityFridgeJulContents.kpi1 > '238.8' && communityFridgeJulContents.kpi1 <= '318.4')?'orange':(communityFridgeJulContents.kpi1 > '318.4' && communityFridgeJulContents.kpi1 < '398')?'yellow-7':(communityFridgeJulContents.kpi1 >= '398' && communityFridgeJulContents.kpi1 < '477.6')?'green':(communityFridgeJulContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi2 == null)?'grey-2':(communityFridgeJulContents.kpi2 >= '0' && communityFridgeJulContents.kpi2 <= '244.2')?'red':(communityFridgeJulContents.kpi2 > '244.2' && communityFridgeJulContents.kpi2 <= '325.6')?'orange':(communityFridgeJulContents.kpi2 > '325.6' && communityFridgeJulContents.kpi2 < '407')?'yellow-7':(communityFridgeJulContents.kpi2 >= '407' && communityFridgeJulContents.kpi2 < '488.4')?'green':(communityFridgeJulContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeJulContents.kpi3 == null)?'grey-2':(communityFridgeJulContents.kpi3 >= '0' && communityFridgeJulContents.kpi3 <= '524.25')?'red':(communityFridgeJulContents.kpi3 > '524.25' && communityFridgeJulContents.kpi3 <= '699')?'orange':(communityFridgeJulContents.kpi3 > '699' && communityFridgeJulContents.kpi3 < '873.75')?'yellow-7':(communityFridgeJulContents.kpi3 >= '873.75' && communityFridgeJulContents.kpi3 < '1048.5')?'green':(communityFridgeJulContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeAugContents.kpi1 == null)?'grey-2':(communityFridgeAugContents.kpi1 >= '0' && communityFridgeAugContents.kpi1 <= '238.8')?'red':(communityFridgeAugContents.kpi1 > '238.8' && communityFridgeAugContents.kpi1 <= '318.4')?'orange':(communityFridgeAugContents.kpi1 > '318.4' && communityFridgeAugContents.kpi1 < '398')?'yellow-7':(communityFridgeAugContents.kpi1 >= '398' && communityFridgeAugContents.kpi1 < '477.6')?'green':(communityFridgeAugContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi2 == null)?'grey-2':(communityFridgeAugContents.kpi2 >= '0' && communityFridgeAugContents.kpi2 <= '244.2')?'red':(communityFridgeAugContents.kpi2 > '244.2' && communityFridgeAugContents.kpi2 <= '325.6')?'orange':(communityFridgeAugContents.kpi2 > '325.6' && communityFridgeAugContents.kpi2 < '407')?'yellow-7':(communityFridgeAugContents.kpi2 >= '407' && communityFridgeAugContents.kpi2 < '488.4')?'green':(communityFridgeAugContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeAugContents.kpi3 == null)?'grey-2':(communityFridgeAugContents.kpi3 >= '0' && communityFridgeAugContents.kpi3 <= '524.25')?'red':(communityFridgeAugContents.kpi3 > '524.25' && communityFridgeAugContents.kpi3 <= '699')?'orange':(communityFridgeAugContents.kpi3 > '699' && communityFridgeAugContents.kpi3 < '873.75')?'yellow-7':(communityFridgeAugContents.kpi3 >= '873.75' && communityFridgeAugContents.kpi3 < '1048.5')?'green':(communityFridgeAugContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeSepContents.kpi1 == null)?'grey-2':(communityFridgeSepContents.kpi1 >= '0' && communityFridgeSepContents.kpi1 <= '238.8')?'red':(communityFridgeSepContents.kpi1 > '238.8' && communityFridgeSepContents.kpi1 <= '318.4')?'orange':(communityFridgeSepContents.kpi1 > '318.4' && communityFridgeSepContents.kpi1 < '398')?'yellow-7':(communityFridgeSepContents.kpi1 >= '398' && communityFridgeSepContents.kpi1 < '477.6')?'green':(communityFridgeSepContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi2 == null)?'grey-2':(communityFridgeSepContents.kpi2 >= '0' && communityFridgeSepContents.kpi2 <= '244.2')?'red':(communityFridgeSepContents.kpi2 > '244.2' && communityFridgeSepContents.kpi2 <= '325.6')?'orange':(communityFridgeSepContents.kpi2 > '325.6' && communityFridgeSepContents.kpi2 < '407')?'yellow-7':(communityFridgeSepContents.kpi2 >= '407' && communityFridgeSepContents.kpi2 < '488.4')?'green':(communityFridgeSepContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeSepContents.kpi3 == null)?'grey-2':(communityFridgeSepContents.kpi3 >= '0' && communityFridgeSepContents.kpi3 <= '524.25')?'red':(communityFridgeSepContents.kpi3 > '524.25' && communityFridgeSepContents.kpi3 <= '699')?'orange':(communityFridgeSepContents.kpi3 > '699' && communityFridgeSepContents.kpi3 < '873.75')?'yellow-7':(communityFridgeSepContents.kpi3 >= '873.75' && communityFridgeSepContents.kpi3 < '1048.5')?'green':(communityFridgeSepContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeOctContents.kpi1 == null)?'grey-2':(communityFridgeOctContents.kpi1 >= '0' && communityFridgeOctContents.kpi1 <= '238.8')?'red':(communityFridgeOctContents.kpi1 > '238.8' && communityFridgeOctContents.kpi1 <= '318.4')?'orange':(communityFridgeOctContents.kpi1 > '318.4' && communityFridgeOctContents.kpi1 < '398')?'yellow-7':(communityFridgeOctContents.kpi1 >= '398' && communityFridgeOctContents.kpi1 < '477.6')?'green':(communityFridgeOctContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi2 == null)?'grey-2':(communityFridgeOctContents.kpi2 >= '0' && communityFridgeOctContents.kpi2 <= '244.2')?'red':(communityFridgeOctContents.kpi2 > '244.2' && communityFridgeOctContents.kpi2 <= '325.6')?'orange':(communityFridgeOctContents.kpi2 > '325.6' && communityFridgeOctContents.kpi2 < '407')?'yellow-7':(communityFridgeOctContents.kpi2 >= '407' && communityFridgeOctContents.kpi2 < '488.4')?'green':(communityFridgeOctContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeOctContents.kpi3 == null)?'grey-2':(communityFridgeOctContents.kpi3 >= '0' && communityFridgeOctContents.kpi3 <= '524.25')?'red':(communityFridgeOctContents.kpi3 > '524.25' && communityFridgeOctContents.kpi3 <= '699')?'orange':(communityFridgeOctContents.kpi3 > '699' && communityFridgeOctContents.kpi3 < '873.75')?'yellow-7':(communityFridgeOctContents.kpi3 >= '873.75' && communityFridgeOctContents.kpi3 < '1048.5')?'green':(communityFridgeOctContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeNovContents.kpi1 == null)?'grey-2':(communityFridgeNovContents.kpi1 >= '0' && communityFridgeNovContents.kpi1 <= '238.8')?'red':(communityFridgeNovContents.kpi1 > '238.8' && communityFridgeNovContents.kpi1 <= '318.4')?'orange':(communityFridgeNovContents.kpi1 > '318.4' && communityFridgeNovContents.kpi1 < '398')?'yellow-7':(communityFridgeNovContents.kpi1 >= '398' && communityFridgeNovContents.kpi1 < '477.6')?'green':(communityFridgeNovContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi2 == null)?'grey-2':(communityFridgeNovContents.kpi2 >= '0' && communityFridgeNovContents.kpi2 <= '244.2')?'red':(communityFridgeNovContents.kpi2 > '244.2' && communityFridgeNovContents.kpi2 <= '325.6')?'orange':(communityFridgeNovContents.kpi2 > '325.6' && communityFridgeNovContents.kpi2 < '407')?'yellow-7':(communityFridgeNovContents.kpi2 >= '407' && communityFridgeNovContents.kpi2 < '488.4')?'green':(communityFridgeNovContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeNovContents.kpi3 == null)?'grey-2':(communityFridgeNovContents.kpi3 >= '0' && communityFridgeNovContents.kpi3 <= '524.25')?'red':(communityFridgeNovContents.kpi3 > '524.25' && communityFridgeNovContents.kpi3 <= '699')?'orange':(communityFridgeNovContents.kpi3 > '699' && communityFridgeNovContents.kpi3 < '873.75')?'yellow-7':(communityFridgeNovContents.kpi3 >= '873.75' && communityFridgeNovContents.kpi3 < '1048.5')?'green':(communityFridgeNovContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
                              :color="(communityFridgeDecContents.kpi1 == null)?'grey-2':(communityFridgeDecContents.kpi1 >= '0' && communityFridgeDecContents.kpi1 <= '238.8')?'red':(communityFridgeDecContents.kpi1 > '238.8' && communityFridgeDecContents.kpi1 <= '318.4')?'orange':(communityFridgeDecContents.kpi1 > '318.4' && communityFridgeDecContents.kpi1 < '398')?'yellow-7':(communityFridgeDecContents.kpi1 >= '398' && communityFridgeDecContents.kpi1 < '477.6')?'green':(communityFridgeDecContents.kpi1 >= '477.6'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi2 == null)?'grey-2':(communityFridgeDecContents.kpi2 >= '0' && communityFridgeDecContents.kpi2 <= '244.2')?'red':(communityFridgeDecContents.kpi2 > '244.2' && communityFridgeDecContents.kpi2 <= '325.6')?'orange':(communityFridgeDecContents.kpi2 > '325.6' && communityFridgeDecContents.kpi2 < '407')?'yellow-7':(communityFridgeDecContents.kpi2 >= '407' && communityFridgeDecContents.kpi2 < '488.4')?'green':(communityFridgeDecContents.kpi2 >= '488.4'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(communityFridgeDecContents.kpi3 == null)?'grey-2':(communityFridgeDecContents.kpi3 >= '0' && communityFridgeDecContents.kpi3 <= '524.25')?'red':(communityFridgeDecContents.kpi3 > '524.25' && communityFridgeDecContents.kpi3 <= '699')?'orange':(communityFridgeDecContents.kpi3 > '699' && communityFridgeDecContents.kpi3 < '873.75')?'yellow-7':(communityFridgeDecContents.kpi3 >= '873.75' && communityFridgeDecContents.kpi3 < '1048.5')?'green':(communityFridgeDecContents.kpi3 >= '1048.5'?'blue':'grey-2')"
                            >
                            {{communityFridgeDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
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
              communityFridgeJanContent: {
                
              },
              communityFridgeJanContents : [],
              communityFridgeFebContent: {
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
              communityFridgeFebContents : [],
              communityFridgeMarContent: {
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
              communityFridgeMarContents : [],
              communityFridgeAprContent: {
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
              communityFridgeAprContents : [],
              communityFridgeMayContent: {
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
              communityFridgeMayContents : [],
              communityFridgeJunContent: {
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
              communityFridgeJunContents : [],
              communityFridgeJulContent: {
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
              communityFridgeJulContents : [],
              communityFridgeAugContent: {
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
              communityFridgeAugContents : [],
              communityFridgeSepContent: {
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
              communityFridgeSepContents : [],
              communityFridgeOctContent: {
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
              communityFridgeOctContents : [],
              communityFridgeNovContent: {
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
              communityFridgeNovContents : [],
              communityFridgeDecContent: {
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
              communityFridgeDecContents : []


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
                            {time_period: 'January', expenses: this.communityFridgeJanContents.expenses, revenues: this.communityFridgeJanContents.revenues},
                            {time_period: 'February', expenses: this.communityFridgeFebContents.expenses, revenues: this.communityFridgeFebContents.revenues},
                            {time_period: 'March', expenses: this.communityFridgeMarContents.expenses, revenues: this.communityFridgeMarContents.revenues},
                            {time_period: 'April', expenses: this.communityFridgeAprContents.expenses, revenues: this.communityFridgeAprContents.revenues},
                            {time_period: 'May', expenses: this.communityFridgeMayContents.expenses, revenues: this.communityFridgeMayContents.revenues},
                            {time_period: 'June', expenses: this.communityFridgeJunContents.expenses, revenues: this.communityFridgeJunContents.revenues},
                            {time_period: 'July', expenses: this.communityFridgeJulContents.expenses, revenues: this.communityFridgeJulContents.revenues},
                            {time_period: 'August', expenses: this.communityFridgeAugContents.expenses, revenues: this.communityFridgeAugContents.revenues},
                            {time_period: 'September', expenses: this.communityFridgeSepContents.expenses, revenues: this.communityFridgeSepContents.revenues},
                            {time_period: 'October', expenses: this.communityFridgeOctContents.expenses, revenues: this.communityFridgeOctContents.revenues},
                            {time_period: 'November', expenses: this.communityFridgeNovContents.expenses, revenues: this.communityFridgeNovContents.revenues},
                            {time_period: 'December',expenses: this.communityFridgeDecContents.expenses, revenues: this.communityFridgeDecContents.revenues }
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
                        dimensions: ['months', 'kpi1', 'kpi2', 'kpi3',  'uniqueVol', 'volHours'],
                        source: [
                            //{months: 'January', kpi1: 0, kpi2: 0, kpi3: 0, kpi4: 0, uniqueVol: 0, volHours: 0},
                            {months: 'January', kpi1: this.communityFridgeJanContents.kpi1, kpi2: this.communityFridgeJanContents.kpi2, kpi3: this.communityFridgeJanContents.kpi3, uniqueVol: this.communityFridgeJanContents.uniqueVolunteers, volHours: this.communityFridgeJanContents.volunteerHours},
                            {months: 'February', kpi1: this.communityFridgeFebContents.kpi1, kpi2: this.communityFridgeFebContents.kpi2, kpi3: this.communityFridgeFebContents.kpi3, uniqueVol: this.communityFridgeFebContents.uniqueVolunteers, volHours: this.communityFridgeFebContents.volunteerHours},
                            {months: 'March', kpi1: this.communityFridgeMarContents.kpi1, kpi2: this.communityFridgeMarContents.kpi2, kpi3: this.communityFridgeMarContents.kpi3, uniqueVol: this.communityFridgeMarContents.uniqueVolunteers, volHours: this.communityFridgeMarContents.volunteerHours},
                            {months: 'April', kpi1: this.communityFridgeAprContents.kpi1, kpi2: this.communityFridgeAprContents.kpi2, kpi3: this.communityFridgeAprContents.kpi3, uniqueVol: this.communityFridgeAprContents.uniqueVolunteers, volHours: this.communityFridgeAprContents.volunteerHours},
                            {months: 'May', kpi1: this.communityFridgeMayContents.kpi1, kpi2: this.communityFridgeMayContents.kpi2, kpi3: this.communityFridgeMayContents.kpi3, uniqueVol: this.communityFridgeMayContents.uniqueVolunteers, volHours: this.communityFridgeMayContents.volunteerHours},
                            {months: 'June', kpi1: this.communityFridgeJunContents.kpi1, kpi2: this.communityFridgeJunContents.kpi2, kpi3: this.communityFridgeJunContents.kpi3, uniqueVol: this.communityFridgeJunContents.uniqueVolunteers, volHours: this.communityFridgeJunContents.volunteerHours},
                            {months: 'July', kpi1: this.communityFridgeJulContents.kpi1, kpi2: this.communityFridgeJulContents.kpi2, kpi3: this.communityFridgeJulContents.kpi3, uniqueVol: this.communityFridgeJulContents.uniqueVolunteers, volHours: this.communityFridgeJulContents.volunteerHours},
                            {months: 'August', kpi1: this.communityFridgeAugContents.kpi1, kpi2: this.communityFridgeAugContents.kpi2, kpi3: this.communityFridgeAugContents.kpi3, uniqueVol: this.communityFridgeAugContents.uniqueVolunteers, volHours: this.communityFridgeAugContents.volunteerHours},
                            {months: 'September', kpi1: this.communityFridgeSepContents.kpi1, kpi2: this.communityFridgeSepContents.kpi2, kpi3: this.communityFridgeSepContents.kpi3, uniqueVol: this.communityFridgeSepContents.uniqueVolunteers, volHours: this.communityFridgeSepContents.volunteerHours},
                            {months: 'October', kpi1: this.communityFridgeOctContents.kpi1, kpi2: this.communityFridgeOctContents.kpi2, kpi3: this.communityFridgeOctContents.kpi3, uniqueVol: this.communityFridgeOctContents.uniqueVolunteers, volHours: this.communityFridgeOctContents.volunteerHours},
                            {months: 'November', kpi1: this.communityFridgeNovContents.kpi1, kpi2: this.communityFridgeNovContents.kpi2, kpi3: this.communityFridgeNovContents.kpi3, uniqueVol: this.communityFridgeNovContents.uniqueVolunteers, volHours: this.communityFridgeNovContents.volunteerHours},
                            {months: 'December',kpi1: this.communityFridgeDecContents.kpi1, kpi2: this.communityFridgeDecContents.kpi2, kpi3: this.communityFridgeDecContents.kpi3, uniqueVol: this.communityFridgeDecContents.uniqueVolunteers, volHours: this.communityFridgeDecContents.volunteerHours},
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
                            data: [{value: this.communityFridgeJanContents.budgetUsage}],
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
                                {value: this.communityFridgeJanContents.perCategory1, name: this.communityFridgeJanContents.expenseCategory1},
                                {value: this.communityFridgeJanContents.perCategory2, name: this.communityFridgeJanContents.expenseCategory2},
                                {value: this.communityFridgeJanContents.perCategory3, name: this.communityFridgeJanContents.expenseCategory3},
                                {value: this.communityFridgeJanContents.perCategory4, name: this.communityFridgeJanContents.expenseCategory4},
                                {value: this.communityFridgeJanContents.perCategory5, name: this.communityFridgeJanContents.expenseCategory5},
                                {value: this.communityFridgeJanContents.perCategory6, name: this.communityFridgeJanContents.expenseCategory6}
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
                            data: [{value: this.communityFridgeFebContents.budgetUsage}],
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
                                {value: this.communityFridgeFebContents.perCategory1, name: this.communityFridgeFebContents.expenseCategory1},
                                {value: this.communityFridgeFebContents.perCategory2, name: this.communityFridgeFebContents.expenseCategory2},
                                {value: this.communityFridgeFebContents.perCategory3, name: this.communityFridgeFebContents.expenseCategory3},
                                {value: this.communityFridgeFebContents.perCategory4, name: this.communityFridgeFebContents.expenseCategory4},
                                {value: this.communityFridgeFebContents.perCategory5, name: this.communityFridgeFebContents.expenseCategory5},
                                {value: this.communityFridgeFebContents.perCategory6, name: this.communityFridgeFebContents.expenseCategory6}
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
                            data: [{value: this.communityFridgeMarContents.budgetUsage}],
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
                                {value: this.communityFridgeMarContents.perCategory1, name: this.communityFridgeMarContents.expenseCategory1},
                                {value: this.communityFridgeMarContents.perCategory2, name: this.communityFridgeMarContents.expenseCategory2},
                                {value: this.communityFridgeMarContents.perCategory3, name: this.communityFridgeMarContents.expenseCategory3},
                                {value: this.communityFridgeMarContents.perCategory4, name: this.communityFridgeMarContents.expenseCategory4},
                                {value: this.communityFridgeMarContents.perCategory5, name: this.communityFridgeMarContents.expenseCategory5},
                                {value: this.communityFridgeMarContents.perCategory6, name: this.communityFridgeMarContents.expenseCategory6}
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
                            data: [{value: this.communityFridgeAprContents.budgetUsage}],
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
                                {value: this.communityFridgeAprContents.perCategory1, name: this.communityFridgeAprContents.expenseCategory1},
                                {value: this.communityFridgeAprContents.perCategory2, name: this.communityFridgeAprContents.expenseCategory2},
                                {value: this.communityFridgeAprContents.perCategory3, name: this.communityFridgeAprContents.expenseCategory3},
                                {value: this.communityFridgeAprContents.perCategory4, name: this.communityFridgeAprContents.expenseCategory4},
                                {value: this.communityFridgeAprContents.perCategory5, name: this.communityFridgeAprContents.expenseCategory5},
                                {value: this.communityFridgeAprContents.perCategory6, name: this.communityFridgeAprContents.expenseCategory6}  
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
                            data: [{value: this.communityFridgeMayContents.budgetUsage}],
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
                                {value: this.communityFridgeMayContents.perCategory1, name: this.communityFridgeMayContents.expenseCategory1},
                                {value: this.communityFridgeMayContents.perCategory2, name: this.communityFridgeMayContents.expenseCategory2},
                                {value: this.communityFridgeMayContents.perCategory3, name: this.communityFridgeMayContents.expenseCategory3},
                                {value: this.communityFridgeMayContents.perCategory4, name: this.communityFridgeMayContents.expenseCategory4},
                                {value: this.communityFridgeMayContents.perCategory5, name: this.communityFridgeMayContents.expenseCategory5},
                                {value: this.communityFridgeMayContents.perCategory6, name: this.communityFridgeMayContents.expenseCategory6}  
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
                            data: [{value: this.communityFridgeJunContents.budgetUsage}],
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
                                {value: this.communityFridgeJunContents.perCategory1, name: this.communityFridgeJunContents.expenseCategory1},
                                {value: this.communityFridgeJunContents.perCategory2, name: this.communityFridgeJunContents.expenseCategory2},
                                {value: this.communityFridgeJunContents.perCategory3, name: this.communityFridgeJunContents.expenseCategory3},
                                {value: this.communityFridgeJunContents.perCategory4, name: this.communityFridgeJunContents.expenseCategory4},
                                {value: this.communityFridgeJunContents.perCategory5, name: this.communityFridgeJunContents.expenseCategory5},
                                {value: this.communityFridgeJunContents.perCategory6, name: this.communityFridgeJunContents.expenseCategory6}  
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
                            data: [{value: this.communityFridgeJulContents.budgetUsage}],
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
                                {value: this.communityFridgeJulContents.perCategory1, name: this.communityFridgeJulContents.expenseCategory1},
                                {value: this.communityFridgeJulContents.perCategory2, name: this.communityFridgeJulContents.expenseCategory2},
                                {value: this.communityFridgeJulContents.perCategory3, name: this.communityFridgeJulContents.expenseCategory3},
                                {value: this.communityFridgeJulContents.perCategory4, name: this.communityFridgeJulContents.expenseCategory4},
                                {value: this.communityFridgeJulContents.perCategory5, name: this.communityFridgeJulContents.expenseCategory5},
                                {value: this.communityFridgeJulContents.perCategory6, name: this.communityFridgeJulContents.expenseCategory6}  
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
                            data: [{value: this.communityFridgeAugContents.budgetUsage}],
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
                                {value: this.communityFridgeAugContents.perCategory1, name: this.communityFridgeAugContents.expenseCategory1},
                                {value: this.communityFridgeAugContents.perCategory2, name: this.communityFridgeAugContents.expenseCategory2},
                                {value: this.communityFridgeAugContents.perCategory3, name: this.communityFridgeAugContents.expenseCategory3},
                                {value: this.communityFridgeAugContents.perCategory4, name: this.communityFridgeAugContents.expenseCategory4},
                                {value: this.communityFridgeAugContents.perCategory5, name: this.communityFridgeAugContents.expenseCategory5},
                                {value: this.communityFridgeAugContents.perCategory6, name: this.communityFridgeAugContents.expenseCategory6}  
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
                            data: [{value: this.communityFridgeSepContents.budgetUsage}],
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
                                {value: this.communityFridgeSepContents.perCategory1, name: this.communityFridgeSepContents.expenseCategory1},
                                {value: this.communityFridgeSepContents.perCategory2, name: this.communityFridgeSepContents.expenseCategory2},
                                {value: this.communityFridgeSepContents.perCategory3, name: this.communityFridgeSepContents.expenseCategory3},
                                {value: this.communityFridgeSepContents.perCategory4, name: this.communityFridgeSepContents.expenseCategory4},
                                {value: this.communityFridgeSepContents.perCategory5, name: this.communityFridgeSepContents.expenseCategory5},
                                {value: this.communityFridgeSepContents.perCategory6, name: this.communityFridgeSepContents.expenseCategory6}  
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
                            data: [{value: this.communityFridgeOctContents.budgetUsage}],
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
                                {value: this.communityFridgeOctContents.perCategory1, name: this.communityFridgeOctContents.expenseCategory1},
                                {value: this.communityFridgeOctContents.perCategory2, name: this.communityFridgeOctContents.expenseCategory2},
                                {value: this.communityFridgeOctContents.perCategory3, name: this.communityFridgeOctContents.expenseCategory3},
                                {value: this.communityFridgeOctContents.perCategory4, name: this.communityFridgeOctContents.expenseCategory4},
                                {value: this.communityFridgeOctContents.perCategory5, name: this.communityFridgeOctContents.expenseCategory5},
                                {value: this.communityFridgeOctContents.perCategory6, name: this.communityFridgeOctContents.expenseCategory6}  
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
                            data: [{value: this.communityFridgeNovContents.budgetUsage}],
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
                                {value: this.communityFridgeNovContents.perCategory1, name: this.communityFridgeNovContents.expenseCategory1},
                                {value: this.communityFridgeNovContents.perCategory2, name: this.communityFridgeNovContents.expenseCategory2},
                                {value: this.communityFridgeNovContents.perCategory3, name: this.communityFridgeNovContents.expenseCategory3},
                                {value: this.communityFridgeNovContents.perCategory4, name: this.communityFridgeNovContents.expenseCategory4},
                                {value: this.communityFridgeNovContents.perCategory5, name: this.communityFridgeNovContents.expenseCategory5},
                                {value: this.communityFridgeNovContents.perCategory6, name: this.communityFridgeNovContents.expenseCategory6}  
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
                            data: [{value: this.communityFridgeDecContents.budgetUsage}],
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
                                {value: this.communityFridgeDecContents.perCategory1, name: this.communityFridgeDecContents.expenseCategory1},
                                {value: this.communityFridgeDecContents.perCategory2, name: this.communityFridgeDecContents.expenseCategory2},
                                {value: this.communityFridgeDecContents.perCategory3, name: this.communityFridgeDecContents.expenseCategory3},
                                {value: this.communityFridgeDecContents.perCategory4, name: this.communityFridgeDecContents.expenseCategory4},
                                {value: this.communityFridgeDecContents.perCategory5, name: this.communityFridgeDecContents.expenseCategory5},
                                {value: this.communityFridgeDecContents.perCategory6, name: this.communityFridgeDecContents.expenseCategory6}
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
            var doccommunityFridgeJanRef = db.collection("communityFridge").doc("january");

            doccommunityFridgeJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityFridgeJanContents = doc.data();
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
            var doccommunityFridgeFebRef = db.collection("communityFridge").doc("february");

            doccommunityFridgeFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityFridgeFebContents = doc.data();
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
            var doccommunityFridgeMarRef = db.collection("communityFridge").doc("march");

            doccommunityFridgeMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityFridgeMarContents = doc.data();
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
            var doccommunityFridgeAprRef = db.collection("communityFridge").doc("april1");

            doccommunityFridgeAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityFridgeAprContents = doc.data();
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
            var doccommunityFridgeMayRef = db.collection("communityFridge").doc("may");

            doccommunityFridgeMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityFridgeMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var doccommunityFridgeJunRef = db.collection("communityFridge").doc("june");

            doccommunityFridgeJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityFridgeJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var doccommunityFridgeJulRef = db.collection("communityFridge").doc("july");

            doccommunityFridgeJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityFridgeJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var doccommunityFridgeAugRef = db.collection("communityFridge").doc("august");

            doccommunityFridgeAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityFridgeAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var doccommunityFridgeSepRef = db.collection("communityFridge").doc("september");

            doccommunityFridgeSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityFridgeSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var doccommunityFridgeOctRef = db.collection("communityFridge").doc("october");

            doccommunityFridgeOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityFridgeOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var doccommunityFridgeNovRef = db.collection("communityFridge").doc("november");

            doccommunityFridgeNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityFridgeNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var doccommunityFridgeDecRef = db.collection("communityFridge").doc("december");

            doccommunityFridgeDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.communityFridgeDecContents = doc.data();
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
              return this.communityFridgeJanContents.expenses = getRealValue(this.communityFridgeJanContents.perCategory1) + getRealValue(this.communityFridgeJanContents.perCategory2) + getRealValue(this.communityFridgeJanContents.perCategory3) + getRealValue(this.communityFridgeJanContents.perCategory4) + getRealValue(this.communityFridgeJanContents.perCategory5) + getRealValue(this.communityFridgeJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeJanContents.budgetUsage = ((getRealValue(this.communityFridgeJanContents.expenses) / getRealValue(this.communityFridgeJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeFebContents.expenses = getRealValue(this.communityFridgeFebContents.perCategory1) + getRealValue(this.communityFridgeFebContents.perCategory2) + getRealValue(this.communityFridgeFebContents.perCategory3) + getRealValue(this.communityFridgeFebContents.perCategory4) + getRealValue(this.communityFridgeFebContents.perCategory5) + getRealValue(this.communityFridgeFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeFebContents.budgetUsage = (((getRealValue(this.communityFridgeFebContents.expenses) + getRealValue(this.communityFridgeJanContents.expenses)) / getRealValue(this.communityFridgeFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeMarContents.expenses = getRealValue(this.communityFridgeMarContents.perCategory1) + getRealValue(this.communityFridgeMarContents.perCategory2) + getRealValue(this.communityFridgeMarContents.perCategory3) + getRealValue(this.communityFridgeMarContents.perCategory4) + getRealValue(this.communityFridgeMarContents.perCategory5) + getRealValue(this.communityFridgeMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeMarContents.budgetUsage = (((getRealValue(this.communityFridgeMarContents.expenses) + getRealValue(this.communityFridgeFebContents.expenses) + getRealValue(this.communityFridgeJanContents.expenses)) / getRealValue(this.communityFridgeMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeAprContents.expenses = getRealValue(this.communityFridgeAprContents.perCategory1) + getRealValue(this.communityFridgeAprContents.perCategory2) + getRealValue(this.communityFridgeAprContents.perCategory3) + getRealValue(this.communityFridgeAprContents.perCategory4) + getRealValue(this.communityFridgeAprContents.perCategory5) + getRealValue(this.communityFridgeAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeAprContents.budgetUsage = (((getRealValue(this.communityFridgeAprContents.expenses) + getRealValue(this.communityFridgeMarContents.expenses) + getRealValue(this.communityFridgeFebContents.expenses) + getRealValue(this.communityFridgeJanContents.expenses)) / getRealValue(this.communityFridgeAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeMayContents.expenses = getRealValue(this.communityFridgeMayContents.perCategory1) + getRealValue(this.communityFridgeMayContents.perCategory2) + getRealValue(this.communityFridgeMayContents.perCategory3) + getRealValue(this.communityFridgeMayContents.perCategory4) + getRealValue(this.communityFridgeMayContents.perCategory5) + getRealValue(this.communityFridgeMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeMayContents.budgetUsage = (((getRealValue(this.communityFridgeMayContents.expenses) + getRealValue(this.communityFridgeAprContents.expenses) + getRealValue(this.communityFridgeMarContents.expenses) + getRealValue(this.communityFridgeFebContents.expenses) + getRealValue(this.communityFridgeJanContents.expenses)) / getRealValue(this.communityFridgeMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeJunContents.expenses = getRealValue(this.communityFridgeJunContents.perCategory1) + getRealValue(this.communityFridgeJunContents.perCategory2) + getRealValue(this.communityFridgeJunContents.perCategory3) + getRealValue(this.communityFridgeJunContents.perCategory4) + getRealValue(this.communityFridgeJunContents.perCategory5) + getRealValue(this.communityFridgeJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeJunContents.budgetUsage = (((getRealValue(this.communityFridgeJunContents.expenses) + getRealValue(this.communityFridgeMayContents.expenses) + getRealValue(this.communityFridgeAprContents.expenses) + getRealValue(this.communityFridgeMarContents.expenses) + getRealValue(this.communityFridgeFebContents.expenses) + getRealValue(this.communityFridgeJanContents.expenses)) / getRealValue(this.communityFridgeJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeJulContents.expenses = getRealValue(this.communityFridgeJulContents.perCategory1) + getRealValue(this.communityFridgeJulContents.perCategory2) + getRealValue(this.communityFridgeJulContents.perCategory3) + getRealValue(this.communityFridgeJulContents.perCategory4) + getRealValue(this.communityFridgeJulContents.perCategory5) + getRealValue(this.communityFridgeJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeJulContents.budgetUsage = (((getRealValue(this.communityFridgeJulContents.expenses) + getRealValue(this.communityFridgeJunContents.expenses) + getRealValue(this.communityFridgeMayContents.expenses) + getRealValue(this.communityFridgeAprContents.expenses) + getRealValue(this.communityFridgeMarContents.expenses) + getRealValue(this.communityFridgeFebContents.expenses) + getRealValue(this.communityFridgeJanContents.expenses)) / getRealValue(this.communityFridgeJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeAugContents.expenses = getRealValue(this.communityFridgeAugContents.perCategory1) + getRealValue(this.communityFridgeAugContents.perCategory2) + getRealValue(this.communityFridgeAugContents.perCategory3) + getRealValue(this.communityFridgeAugContents.perCategory4) + getRealValue(this.communityFridgeAugContents.perCategory5) + getRealValue(this.communityFridgeAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeAugContents.budgetUsage = (((getRealValue(this.communityFridgeAugContents.expenses) + getRealValue(this.communityFridgeJulContents.expenses) + getRealValue(this.communityFridgeJunContents.expenses) + getRealValue(this.communityFridgeMayContents.expenses) + getRealValue(this.communityFridgeAprContents.expenses) + getRealValue(this.communityFridgeMarContents.expenses) + getRealValue(this.communityFridgeFebContents.expenses) + getRealValue(this.communityFridgeJanContents.expenses)) / getRealValue(this.communityFridgeAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeSepContents.expenses = getRealValue(this.communityFridgeSepContents.perCategory1) + getRealValue(this.communityFridgeSepContents.perCategory2) + getRealValue(this.communityFridgeSepContents.perCategory3) + getRealValue(this.communityFridgeSepContents.perCategory4) + getRealValue(this.communityFridgeSepContents.perCategory5) + getRealValue(this.communityFridgeSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeSepContents.budgetUsage = (((getRealValue(this.communityFridgeSepContents.expenses) + getRealValue(this.communityFridgeAugContents.expenses) + getRealValue(this.communityFridgeJulContents.expenses) + getRealValue(this.communityFridgeJunContents.expenses) + getRealValue(this.communityFridgeMayContents.expenses) + getRealValue(this.communityFridgeAprContents.expenses) + getRealValue(this.communityFridgeMarContents.expenses) + getRealValue(this.communityFridgeFebContents.expenses) + getRealValue(this.communityFridgeJanContents.expenses)) / getRealValue(this.communityFridgeSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeOctContents.expenses = getRealValue(this.communityFridgeOctContents.perCategory1) + getRealValue(this.communityFridgeOctContents.perCategory2) + getRealValue(this.communityFridgeOctContents.perCategory3) + getRealValue(this.communityFridgeOctContents.perCategory4) + getRealValue(this.communityFridgeOctContents.perCategory5) + getRealValue(this.communityFridgeOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeOctContents.budgetUsage = (((getRealValue(this.communityFridgeOctContents.expenses) + getRealValue(this.communityFridgeSepContents.expenses) + getRealValue(this.communityFridgeAugContents.expenses) + getRealValue(this.communityFridgeJulContents.expenses) + getRealValue(this.communityFridgeJunContents.expenses) + getRealValue(this.communityFridgeMayContents.expenses) + getRealValue(this.communityFridgeAprContents.expenses) + getRealValue(this.communityFridgeMarContents.expenses) + getRealValue(this.communityFridgeFebContents.expenses) + getRealValue(this.communityFridgeJanContents.expenses)) / getRealValue(this.communityFridgeOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeNovContents.expenses = getRealValue(this.communityFridgeNovContents.perCategory1) + getRealValue(this.communityFridgeNovContents.perCategory2) + getRealValue(this.communityFridgeNovContents.perCategory3) + getRealValue(this.communityFridgeNovContents.perCategory4) + getRealValue(this.communityFridgeNovContents.perCategory5) + getRealValue(this.communityFridgeNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeNovContents.budgetUsage = (((getRealValue(this.communityFridgeNovContents.expenses) + getRealValue(this.communityFridgeOctContents.expenses) + getRealValue(this.communityFridgeSepContents.expenses) + getRealValue(this.communityFridgeAugContents.expenses) + getRealValue(this.communityFridgeJulContents.expenses) + getRealValue(this.communityFridgeJunContents.expenses) + getRealValue(this.communityFridgeMayContents.expenses) + getRealValue(this.communityFridgeAprContents.expenses) + getRealValue(this.communityFridgeMarContents.expenses) + getRealValue(this.communityFridgeFebContents.expenses) + getRealValue(this.communityFridgeJanContents.expenses)) / getRealValue(this.communityFridgeNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeDecContents.expenses = getRealValue(this.communityFridgeDecContents.perCategory1) + getRealValue(this.communityFridgeDecContents.perCategory2) + getRealValue(this.communityFridgeDecContents.perCategory3) + getRealValue(this.communityFridgeDecContents.perCategory4) + getRealValue(this.communityFridgeDecContents.perCategory5) + getRealValue(this.communityFridgeDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.communityFridgeDecContents.budgetUsage = (((getRealValue(this.communityFridgeDecContents.expenses) + getRealValue(this.communityFridgeNovContents.expenses) + getRealValue(this.communityFridgeOctContents.expenses) + getRealValue(this.communityFridgeSepContents.expenses) + getRealValue(this.communityFridgeAugContents.expenses) + getRealValue(this.communityFridgeJulContents.expenses) + getRealValue(this.communityFridgeJunContents.expenses) + getRealValue(this.communityFridgeMayContents.expenses) + getRealValue(this.communityFridgeAprContents.expenses) + getRealValue(this.communityFridgeMarContents.expenses) + getRealValue(this.communityFridgeFebContents.expenses) + getRealValue(this.communityFridgeJanContents.expenses)) / getRealValue(this.communityFridgeDecContents.actualBudget))*100).toFixed(2)
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
