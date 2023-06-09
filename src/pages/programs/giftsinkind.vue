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
                              :color="(gikJanContents.kpi1 == null)?'grey-2':(gikJanContents.kpi1 >= '0' && gikJanContents.kpi1 <= '14.7')?'red':(gikJanContents.kpi1 > '14.7' && gikJanContents.kpi1 <= '19.6')?'orange':(gikJanContents.kpi1 > '19.6' && gikJanContents.kpi1 < '24.5')?'yellow-7':(gikJanContents.kpi1 >= '24.5' && gikJanContents.kpi1 < '29.4')?'green':(gikJanContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi2 == null)?'grey-2':(gikJanContents.kpi2 >= '0' && gikJanContents.kpi2 <= '19.05')?'red':(gikJanContents.kpi2 > '19.05' && gikJanContents.kpi2 <= '25.4')?'orange':(gikJanContents.kpi2 > '25.4' && gikJanContents.kpi2 < '31.75')?'yellow-7':(gikJanContents.kpi2 >= '31.75' && gikJanContents.kpi2 < '38.1')?'green':(gikJanContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi3 == null)?'grey-2':(gikJanContents.kpi3 >= '0' && gikJanContents.kpi3 <= '19.35')?'red':(gikJanContents.kpi3 > '19.35' && gikJanContents.kpi3 <= '25.8')?'orange':(gikJanContents.kpi3 > '25.8' && gikJanContents.kpi3 < '32.25')?'yellow-7':(gikJanContents.kpi3 >= '32.25' && gikJanContents.kpi3 < '38.7')?'green':(gikJanContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi4 == null)?'grey-2':(gikJanContents.kpi4 >= '0' && gikJanContents.kpi4 <= '19.2')?'red':(gikJanContents.kpi4 > '19.2' && gikJanContents.kpi4 <= '25.6')?'orange':(gikJanContents.kpi4 > '25.6' && gikJanContents.kpi4 < '32')?'yellow-7':(gikJanContents.kpi4 >= '32' && gikJanContents.kpi4 < '38.4')?'green':(gikJanContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi4}}
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
                              :color="(gikFebContents.kpi1 == null)?'grey-2':(gikFebContents.kpi1 >= '0' && gikFebContents.kpi1 <= '14.7')?'red':(gikFebContents.kpi1 > '14.7' && gikFebContents.kpi1 <= '19.6')?'orange':(gikFebContents.kpi1 > '19.6' && gikFebContents.kpi1 < '24.5')?'yellow-7':(gikFebContents.kpi1 >= '24.5' && gikFebContents.kpi1 < '29.4')?'green':(gikFebContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi2 == null)?'grey-2':(gikFebContents.kpi2 >= '0' && gikFebContents.kpi2 <= '19.05')?'red':(gikFebContents.kpi2 > '19.05' && gikFebContents.kpi2 <= '25.4')?'orange':(gikFebContents.kpi2 > '25.4' && gikFebContents.kpi2 < '31.75')?'yellow-7':(gikFebContents.kpi2 >= '31.75' && gikFebContents.kpi2 < '38.1')?'green':(gikFebContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi3 == null)?'grey-2':(gikFebContents.kpi3 >= '0' && gikFebContents.kpi3 <= '19.35')?'red':(gikFebContents.kpi3 > '19.35' && gikFebContents.kpi3 <= '25.8')?'orange':(gikFebContents.kpi3 > '25.8' && gikFebContents.kpi3 < '32.25')?'yellow-7':(gikFebContents.kpi3 >= '32.25' && gikFebContents.kpi3 < '38.7')?'green':(gikFebContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi4 == null)?'grey-2':(gikFebContents.kpi4 >= '0' && gikFebContents.kpi4 <= '19.2')?'red':(gikFebContents.kpi4 > '19.2' && gikFebContents.kpi4 <= '25.6')?'orange':(gikFebContents.kpi4 > '25.6' && gikFebContents.kpi4 < '32')?'yellow-7':(gikFebContents.kpi4 >= '32' && gikFebContents.kpi4 < '38.4')?'green':(gikFebContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi4}}
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
                              :color="(gikMarContents.kpi1 == null)?'grey-2':(gikMarContents.kpi1 >= '0' && gikMarContents.kpi1 <= '14.7')?'red':(gikMarContents.kpi1 > '14.7' && gikMarContents.kpi1 <= '19.6')?'orange':(gikMarContents.kpi1 > '19.6' && gikMarContents.kpi1 < '24.5')?'yellow-7':(gikMarContents.kpi1 >= '24.5' && gikMarContents.kpi1 < '29.4')?'green':(gikMarContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi2 == null)?'grey-2':(gikMarContents.kpi2 >= '0' && gikMarContents.kpi2 <= '19.05')?'red':(gikMarContents.kpi2 > '19.05' && gikMarContents.kpi2 <= '25.4')?'orange':(gikMarContents.kpi2 > '25.4' && gikMarContents.kpi2 < '31.75')?'yellow-7':(gikMarContents.kpi2 >= '31.75' && gikMarContents.kpi2 < '38.1')?'green':(gikMarContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi3 == null)?'grey-2':(gikMarContents.kpi3 >= '0' && gikMarContents.kpi3 <= '19.35')?'red':(gikMarContents.kpi3 > '19.35' && gikMarContents.kpi3 <= '25.8')?'orange':(gikMarContents.kpi3 > '25.8' && gikMarContents.kpi3 < '32.25')?'yellow-7':(gikMarContents.kpi3 >= '32.25' && gikMarContents.kpi3 < '38.7')?'green':(gikMarContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi4 == null)?'grey-2':(gikMarContents.kpi4 >= '0' && gikMarContents.kpi4 <= '19.2')?'red':(gikMarContents.kpi4 > '19.2' && gikMarContents.kpi4 <= '25.6')?'orange':(gikMarContents.kpi4 > '25.6' && gikMarContents.kpi4 < '32')?'yellow-7':(gikMarContents.kpi4 >= '32' && gikMarContents.kpi4 < '38.4')?'green':(gikMarContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi4}}
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
                              :color="(gikAprContents.kpi1 == null)?'grey-2':(gikAprContents.kpi1 >= '0' && gikAprContents.kpi1 <= '14.7')?'red':(gikAprContents.kpi1 > '14.7' && gikAprContents.kpi1 <= '19.6')?'orange':(gikAprContents.kpi1 > '19.6' && gikAprContents.kpi1 < '24.5')?'yellow-7':(gikAprContents.kpi1 >= '24.5' && gikAprContents.kpi1 < '29.4')?'green':(gikAprContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi2 == null)?'grey-2':(gikAprContents.kpi2 >= '0' && gikAprContents.kpi2 <= '19.05')?'red':(gikAprContents.kpi2 > '19.05' && gikAprContents.kpi2 <= '25.4')?'orange':(gikAprContents.kpi2 > '25.4' && gikAprContents.kpi2 < '31.75')?'yellow-7':(gikAprContents.kpi2 >= '31.75' && gikAprContents.kpi2 < '38.1')?'green':(gikAprContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi3 == null)?'grey-2':(gikAprContents.kpi3 >= '0' && gikAprContents.kpi3 <= '19.35')?'red':(gikAprContents.kpi3 > '19.35' && gikAprContents.kpi3 <= '25.8')?'orange':(gikAprContents.kpi3 > '25.8' && gikAprContents.kpi3 < '32.25')?'yellow-7':(gikAprContents.kpi3 >= '32.25' && gikAprContents.kpi3 < '38.7')?'green':(gikAprContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi4 == null)?'grey-2':(gikAprContents.kpi4 >= '0' && gikAprContents.kpi4 <= '19.2')?'red':(gikAprContents.kpi4 > '19.2' && gikAprContents.kpi4 <= '25.6')?'orange':(gikAprContents.kpi4 > '25.6' && gikAprContents.kpi4 < '32')?'yellow-7':(gikAprContents.kpi4 >= '32' && gikAprContents.kpi4 < '38.4')?'green':(gikAprContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi4}}
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
                              :color="(gikMayContents.kpi1 == null)?'grey-2':(gikMayContents.kpi1 >= '0' && gikMayContents.kpi1 <= '14.7')?'red':(gikMayContents.kpi1 > '14.7' && gikMayContents.kpi1 <= '19.6')?'orange':(gikMayContents.kpi1 > '19.6' && gikMayContents.kpi1 < '24.5')?'yellow-7':(gikMayContents.kpi1 >= '24.5' && gikMayContents.kpi1 < '29.4')?'green':(gikMayContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi2 == null)?'grey-2':(gikMayContents.kpi2 >= '0' && gikMayContents.kpi2 <= '19.05')?'red':(gikMayContents.kpi2 > '19.05' && gikMayContents.kpi2 <= '25.4')?'orange':(gikMayContents.kpi2 > '25.4' && gikMayContents.kpi2 < '31.75')?'yellow-7':(gikMayContents.kpi2 >= '31.75' && gikMayContents.kpi2 < '38.1')?'green':(gikMayContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi3 == null)?'grey-2':(gikMayContents.kpi3 >= '0' && gikMayContents.kpi3 <= '19.35')?'red':(gikMayContents.kpi3 > '19.35' && gikMayContents.kpi3 <= '25.8')?'orange':(gikMayContents.kpi3 > '25.8' && gikMayContents.kpi3 < '32.25')?'yellow-7':(gikMayContents.kpi3 >= '32.25' && gikMayContents.kpi3 < '38.7')?'green':(gikMayContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi4 == null)?'grey-2':(gikMayContents.kpi4 >= '0' && gikMayContents.kpi4 <= '19.2')?'red':(gikMayContents.kpi4 > '19.2' && gikMayContents.kpi4 <= '25.6')?'orange':(gikMayContents.kpi4 > '25.6' && gikMayContents.kpi4 < '32')?'yellow-7':(gikMayContents.kpi4 >= '32' && gikMayContents.kpi4 < '38.4')?'green':(gikMayContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi4}}
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
                              :color="(gikJunContents.kpi1 == null)?'grey-2':(gikJunContents.kpi1 >= '0' && gikJunContents.kpi1 <= '14.7')?'red':(gikJunContents.kpi1 > '14.7' && gikJunContents.kpi1 <= '19.6')?'orange':(gikJunContents.kpi1 > '19.6' && gikJunContents.kpi1 < '24.5')?'yellow-7':(gikJunContents.kpi1 >= '24.5' && gikJunContents.kpi1 < '29.4')?'green':(gikJunContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi2 == null)?'grey-2':(gikJunContents.kpi2 >= '0' && gikJunContents.kpi2 <= '19.05')?'red':(gikJunContents.kpi2 > '19.05' && gikJunContents.kpi2 <= '25.4')?'orange':(gikJunContents.kpi2 > '25.4' && gikJunContents.kpi2 < '31.75')?'yellow-7':(gikJunContents.kpi2 >= '31.75' && gikJunContents.kpi2 < '38.1')?'green':(gikJunContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi3 == null)?'grey-2':(gikJunContents.kpi3 >= '0' && gikJunContents.kpi3 <= '19.35')?'red':(gikJunContents.kpi3 > '19.35' && gikJunContents.kpi3 <= '25.8')?'orange':(gikJunContents.kpi3 > '25.8' && gikJunContents.kpi3 < '32.25')?'yellow-7':(gikJunContents.kpi3 >= '32.25' && gikJunContents.kpi3 < '38.7')?'green':(gikJunContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi4 == null)?'grey-2':(gikJunContents.kpi4 >= '0' && gikJunContents.kpi4 <= '19.2')?'red':(gikJunContents.kpi4 > '19.2' && gikJunContents.kpi4 <= '25.6')?'orange':(gikJunContents.kpi4 > '25.6' && gikJunContents.kpi4 < '32')?'yellow-7':(gikJunContents.kpi4 >= '32' && gikJunContents.kpi4 < '38.4')?'green':(gikJunContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi4}}
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
                              :color="(gikJulContents.kpi1 == null)?'grey-2':(gikJulContents.kpi1 >= '0' && gikJulContents.kpi1 <= '14.7')?'red':(gikJulContents.kpi1 > '14.7' && gikJulContents.kpi1 <= '19.6')?'orange':(gikJulContents.kpi1 > '19.6' && gikJulContents.kpi1 < '24.5')?'yellow-7':(gikJulContents.kpi1 >= '24.5' && gikJulContents.kpi1 < '29.4')?'green':(gikJulContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi2 == null)?'grey-2':(gikJulContents.kpi2 >= '0' && gikJulContents.kpi2 <= '19.05')?'red':(gikJulContents.kpi2 > '19.05' && gikJulContents.kpi2 <= '25.4')?'orange':(gikJulContents.kpi2 > '25.4' && gikJulContents.kpi2 < '31.75')?'yellow-7':(gikJulContents.kpi2 >= '31.75' && gikJulContents.kpi2 < '38.1')?'green':(gikJulContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi3 == null)?'grey-2':(gikJulContents.kpi3 >= '0' && gikJulContents.kpi3 <= '19.35')?'red':(gikJulContents.kpi3 > '19.35' && gikJulContents.kpi3 <= '25.8')?'orange':(gikJulContents.kpi3 > '25.8' && gikJulContents.kpi3 < '32.25')?'yellow-7':(gikJulContents.kpi3 >= '32.25' && gikJulContents.kpi3 < '38.7')?'green':(gikJulContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi4 == null)?'grey-2':(gikJulContents.kpi4 >= '0' && gikJulContents.kpi4 <= '19.2')?'red':(gikJulContents.kpi4 > '19.2' && gikJulContents.kpi4 <= '25.6')?'orange':(gikJulContents.kpi4 > '25.6' && gikJulContents.kpi4 < '32')?'yellow-7':(gikJulContents.kpi4 >= '32' && gikJulContents.kpi4 < '38.4')?'green':(gikJulContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi4}}
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
                              :color="(gikAugContents.kpi1 == null)?'grey-2':(gikAugContents.kpi1 >= '0' && gikAugContents.kpi1 <= '14.7')?'red':(gikAugContents.kpi1 > '14.7' && gikAugContents.kpi1 <= '19.6')?'orange':(gikAugContents.kpi1 > '19.6' && gikAugContents.kpi1 < '24.5')?'yellow-7':(gikAugContents.kpi1 >= '24.5' && gikAugContents.kpi1 < '29.4')?'green':(gikAugContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi2 == null)?'grey-2':(gikAugContents.kpi2 >= '0' && gikAugContents.kpi2 <= '19.05')?'red':(gikAugContents.kpi2 > '19.05' && gikAugContents.kpi2 <= '25.4')?'orange':(gikAugContents.kpi2 > '25.4' && gikAugContents.kpi2 < '31.75')?'yellow-7':(gikAugContents.kpi2 >= '31.75' && gikAugContents.kpi2 < '38.1')?'green':(gikAugContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi3 == null)?'grey-2':(gikAugContents.kpi3 >= '0' && gikAugContents.kpi3 <= '19.35')?'red':(gikAugContents.kpi3 > '19.35' && gikAugContents.kpi3 <= '25.8')?'orange':(gikAugContents.kpi3 > '25.8' && gikAugContents.kpi3 < '32.25')?'yellow-7':(gikAugContents.kpi3 >= '32.25' && gikAugContents.kpi3 < '38.7')?'green':(gikAugContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi4 == null)?'grey-2':(gikAugContents.kpi4 >= '0' && gikAugContents.kpi4 <= '19.2')?'red':(gikAugContents.kpi4 > '19.2' && gikAugContents.kpi4 <= '25.6')?'orange':(gikAugContents.kpi4 > '25.6' && gikAugContents.kpi4 < '32')?'yellow-7':(gikAugContents.kpi4 >= '32' && gikAugContents.kpi4 < '38.4')?'green':(gikAugContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi4}}
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
                              :color="(gikSepContents.kpi1 == null)?'grey-2':(gikSepContents.kpi1 >= '0' && gikSepContents.kpi1 <= '14.7')?'red':(gikSepContents.kpi1 > '14.7' && gikSepContents.kpi1 <= '19.6')?'orange':(gikSepContents.kpi1 > '19.6' && gikSepContents.kpi1 < '24.5')?'yellow-7':(gikSepContents.kpi1 >= '24.5' && gikSepContents.kpi1 < '29.4')?'green':(gikSepContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi2 == null)?'grey-2':(gikSepContents.kpi2 >= '0' && gikSepContents.kpi2 <= '19.05')?'red':(gikSepContents.kpi2 > '19.05' && gikSepContents.kpi2 <= '25.4')?'orange':(gikSepContents.kpi2 > '25.4' && gikSepContents.kpi2 < '31.75')?'yellow-7':(gikSepContents.kpi2 >= '31.75' && gikSepContents.kpi2 < '38.1')?'green':(gikSepContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi3 == null)?'grey-2':(gikSepContents.kpi3 >= '0' && gikSepContents.kpi3 <= '19.35')?'red':(gikSepContents.kpi3 > '19.35' && gikSepContents.kpi3 <= '25.8')?'orange':(gikSepContents.kpi3 > '25.8' && gikSepContents.kpi3 < '32.25')?'yellow-7':(gikSepContents.kpi3 >= '32.25' && gikSepContents.kpi3 < '38.7')?'green':(gikSepContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi4 == null)?'grey-2':(gikSepContents.kpi4 >= '0' && gikSepContents.kpi4 <= '19.2')?'red':(gikSepContents.kpi4 > '19.2' && gikSepContents.kpi4 <= '25.6')?'orange':(gikSepContents.kpi4 > '25.6' && gikSepContents.kpi4 < '32')?'yellow-7':(gikSepContents.kpi4 >= '32' && gikSepContents.kpi4 < '38.4')?'green':(gikSepContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi4}}
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
                              :color="(gikOctContents.kpi1 == null)?'grey-2':(gikOctContents.kpi1 >= '0' && gikOctContents.kpi1 <= '14.7')?'red':(gikOctContents.kpi1 > '14.7' && gikOctContents.kpi1 <= '19.6')?'orange':(gikOctContents.kpi1 > '19.6' && gikOctContents.kpi1 < '24.5')?'yellow-7':(gikOctContents.kpi1 >= '24.5' && gikOctContents.kpi1 < '29.4')?'green':(gikOctContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi2 == null)?'grey-2':(gikOctContents.kpi2 >= '0' && gikOctContents.kpi2 <= '19.05')?'red':(gikOctContents.kpi2 > '19.05' && gikOctContents.kpi2 <= '25.4')?'orange':(gikOctContents.kpi2 > '25.4' && gikOctContents.kpi2 < '31.75')?'yellow-7':(gikOctContents.kpi2 >= '31.75' && gikOctContents.kpi2 < '38.1')?'green':(gikOctContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi3 == null)?'grey-2':(gikOctContents.kpi3 >= '0' && gikOctContents.kpi3 <= '19.35')?'red':(gikOctContents.kpi3 > '19.35' && gikOctContents.kpi3 <= '25.8')?'orange':(gikOctContents.kpi3 > '25.8' && gikOctContents.kpi3 < '32.25')?'yellow-7':(gikOctContents.kpi3 >= '32.25' && gikOctContents.kpi3 < '38.7')?'green':(gikOctContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi4 == null)?'grey-2':(gikOctContents.kpi4 >= '0' && gikOctContents.kpi4 <= '19.2')?'red':(gikOctContents.kpi4 > '19.2' && gikOctContents.kpi4 <= '25.6')?'orange':(gikOctContents.kpi4 > '25.6' && gikOctContents.kpi4 < '32')?'yellow-7':(gikOctContents.kpi4 >= '32' && gikOctContents.kpi4 < '38.4')?'green':(gikOctContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi4}}
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
                              :color="(gikNovContents.kpi1 == null)?'grey-2':(gikNovContents.kpi1 >= '0' && gikNovContents.kpi1 <= '14.7')?'red':(gikNovContents.kpi1 > '14.7' && gikNovContents.kpi1 <= '19.6')?'orange':(gikNovContents.kpi1 > '19.6' && gikNovContents.kpi1 < '24.5')?'yellow-7':(gikNovContents.kpi1 >= '24.5' && gikNovContents.kpi1 < '29.4')?'green':(gikNovContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi2 == null)?'grey-2':(gikNovContents.kpi2 >= '0' && gikNovContents.kpi2 <= '19.05')?'red':(gikNovContents.kpi2 > '19.05' && gikNovContents.kpi2 <= '25.4')?'orange':(gikNovContents.kpi2 > '25.4' && gikNovContents.kpi2 < '31.75')?'yellow-7':(gikNovContents.kpi2 >= '31.75' && gikNovContents.kpi2 < '38.1')?'green':(gikNovContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi3 == null)?'grey-2':(gikNovContents.kpi3 >= '0' && gikNovContents.kpi3 <= '19.35')?'red':(gikNovContents.kpi3 > '19.35' && gikNovContents.kpi3 <= '25.8')?'orange':(gikNovContents.kpi3 > '25.8' && gikNovContents.kpi3 < '32.25')?'yellow-7':(gikNovContents.kpi3 >= '32.25' && gikNovContents.kpi3 < '38.7')?'green':(gikNovContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi4 == null)?'grey-2':(gikNovContents.kpi4 >= '0' && gikNovContents.kpi4 <= '19.2')?'red':(gikNovContents.kpi4 > '19.2' && gikNovContents.kpi4 <= '25.6')?'orange':(gikNovContents.kpi4 > '25.6' && gikNovContents.kpi4 < '32')?'yellow-7':(gikNovContents.kpi4 >= '32' && gikNovContents.kpi4 < '38.4')?'green':(gikNovContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi4}}
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
                              :color="(gikDecContents.kpi1 == null)?'grey-2':(gikDecContents.kpi1 >= '0' && gikDecContents.kpi1 <= '14.7')?'red':(gikDecContents.kpi1 > '14.7' && gikDecContents.kpi1 <= '19.6')?'orange':(gikDecContents.kpi1 > '19.6' && gikDecContents.kpi1 < '24.5')?'yellow-7':(gikDecContents.kpi1 >= '24.5' && gikDecContents.kpi1 < '29.4')?'green':(gikDecContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi2 == null)?'grey-2':(gikDecContents.kpi2 >= '0' && gikDecContents.kpi2 <= '19.05')?'red':(gikDecContents.kpi2 > '19.05' && gikDecContents.kpi2 <= '25.4')?'orange':(gikDecContents.kpi2 > '25.4' && gikDecContents.kpi2 < '31.75')?'yellow-7':(gikDecContents.kpi2 >= '31.75' && gikDecContents.kpi2 < '38.1')?'green':(gikDecContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi3 == null)?'grey-2':(gikDecContents.kpi3 >= '0' && gikDecContents.kpi3 <= '19.35')?'red':(gikDecContents.kpi3 > '19.35' && gikDecContents.kpi3 <= '25.8')?'orange':(gikDecContents.kpi3 > '25.8' && gikDecContents.kpi3 < '32.25')?'yellow-7':(gikDecContents.kpi3 >= '32.25' && gikDecContents.kpi3 < '38.7')?'green':(gikDecContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi4 == null)?'grey-2':(gikDecContents.kpi4 >= '0' && gikDecContents.kpi4 <= '19.2')?'red':(gikDecContents.kpi4 > '19.2' && gikDecContents.kpi4 <= '25.6')?'orange':(gikDecContents.kpi4 > '25.6' && gikDecContents.kpi4 < '32')?'yellow-7':(gikDecContents.kpi4 >= '32' && gikDecContents.kpi4 < '38.4')?'green':(gikDecContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi4}}
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
                        <q-img src="/statics/GIKlogoforTOP.png"></q-img>
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
                              :color="(gikJanContents.kpi1 == null)?'grey-2':(gikJanContents.kpi1 >= '0' && gikJanContents.kpi1 <= '14.7')?'red':(gikJanContents.kpi1 > '14.7' && gikJanContents.kpi1 <= '19.6')?'orange':(gikJanContents.kpi1 > '19.6' && gikJanContents.kpi1 < '24.5')?'yellow-7':(gikJanContents.kpi1 >= '24.5' && gikJanContents.kpi1 < '29.4')?'green':(gikJanContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi2 == null)?'grey-2':(gikJanContents.kpi2 >= '0' && gikJanContents.kpi2 <= '19.05')?'red':(gikJanContents.kpi2 > '19.05' && gikJanContents.kpi2 <= '25.4')?'orange':(gikJanContents.kpi2 > '25.4' && gikJanContents.kpi2 < '31.75')?'yellow-7':(gikJanContents.kpi2 >= '31.75' && gikJanContents.kpi2 < '38.1')?'green':(gikJanContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi3 == null)?'grey-2':(gikJanContents.kpi3 >= '0' && gikJanContents.kpi3 <= '19.35')?'red':(gikJanContents.kpi3 > '19.35' && gikJanContents.kpi3 <= '25.8')?'orange':(gikJanContents.kpi3 > '25.8' && gikJanContents.kpi3 < '32.25')?'yellow-7':(gikJanContents.kpi3 >= '32.25' && gikJanContents.kpi3 < '38.7')?'green':(gikJanContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi4 == null)?'grey-2':(gikJanContents.kpi4 >= '0' && gikJanContents.kpi4 <= '19.2')?'red':(gikJanContents.kpi4 > '19.2' && gikJanContents.kpi4 <= '25.6')?'orange':(gikJanContents.kpi4 > '25.6' && gikJanContents.kpi4 < '32')?'yellow-7':(gikJanContents.kpi4 >= '32' && gikJanContents.kpi4 < '38.4')?'green':(gikJanContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi4}}
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
                              :color="(gikFebContents.kpi1 == null)?'grey-2':(gikFebContents.kpi1 >= '0' && gikFebContents.kpi1 <= '14.7')?'red':(gikFebContents.kpi1 > '14.7' && gikFebContents.kpi1 <= '19.6')?'orange':(gikFebContents.kpi1 > '19.6' && gikFebContents.kpi1 < '24.5')?'yellow-7':(gikFebContents.kpi1 >= '24.5' && gikFebContents.kpi1 < '29.4')?'green':(gikFebContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi2 == null)?'grey-2':(gikFebContents.kpi2 >= '0' && gikFebContents.kpi2 <= '19.05')?'red':(gikFebContents.kpi2 > '19.05' && gikFebContents.kpi2 <= '25.4')?'orange':(gikFebContents.kpi2 > '25.4' && gikFebContents.kpi2 < '31.75')?'yellow-7':(gikFebContents.kpi2 >= '31.75' && gikFebContents.kpi2 < '38.1')?'green':(gikFebContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi3 == null)?'grey-2':(gikFebContents.kpi3 >= '0' && gikFebContents.kpi3 <= '19.35')?'red':(gikFebContents.kpi3 > '19.35' && gikFebContents.kpi3 <= '25.8')?'orange':(gikFebContents.kpi3 > '25.8' && gikFebContents.kpi3 < '32.25')?'yellow-7':(gikFebContents.kpi3 >= '32.25' && gikFebContents.kpi3 < '38.7')?'green':(gikFebContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi4 == null)?'grey-2':(gikFebContents.kpi4 >= '0' && gikFebContents.kpi4 <= '19.2')?'red':(gikFebContents.kpi4 > '19.2' && gikFebContents.kpi4 <= '25.6')?'orange':(gikFebContents.kpi4 > '25.6' && gikFebContents.kpi4 < '32')?'yellow-7':(gikFebContents.kpi4 >= '32' && gikFebContents.kpi4 < '38.4')?'green':(gikFebContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi4}}
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
                              :color="(gikMarContents.kpi1 == null)?'grey-2':(gikMarContents.kpi1 >= '0' && gikMarContents.kpi1 <= '14.7')?'red':(gikMarContents.kpi1 > '14.7' && gikMarContents.kpi1 <= '19.6')?'orange':(gikMarContents.kpi1 > '19.6' && gikMarContents.kpi1 < '24.5')?'yellow-7':(gikMarContents.kpi1 >= '24.5' && gikMarContents.kpi1 < '29.4')?'green':(gikMarContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi2 == null)?'grey-2':(gikMarContents.kpi2 >= '0' && gikMarContents.kpi2 <= '19.05')?'red':(gikMarContents.kpi2 > '19.05' && gikMarContents.kpi2 <= '25.4')?'orange':(gikMarContents.kpi2 > '25.4' && gikMarContents.kpi2 < '31.75')?'yellow-7':(gikMarContents.kpi2 >= '31.75' && gikMarContents.kpi2 < '38.1')?'green':(gikMarContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi3 == null)?'grey-2':(gikMarContents.kpi3 >= '0' && gikMarContents.kpi3 <= '19.35')?'red':(gikMarContents.kpi3 > '19.35' && gikMarContents.kpi3 <= '25.8')?'orange':(gikMarContents.kpi3 > '25.8' && gikMarContents.kpi3 < '32.25')?'yellow-7':(gikMarContents.kpi3 >= '32.25' && gikMarContents.kpi3 < '38.7')?'green':(gikMarContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi4 == null)?'grey-2':(gikMarContents.kpi4 >= '0' && gikMarContents.kpi4 <= '19.2')?'red':(gikMarContents.kpi4 > '19.2' && gikMarContents.kpi4 <= '25.6')?'orange':(gikMarContents.kpi4 > '25.6' && gikMarContents.kpi4 < '32')?'yellow-7':(gikMarContents.kpi4 >= '32' && gikMarContents.kpi4 < '38.4')?'green':(gikMarContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi4}}
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
                              :color="(gikAprContents.kpi1 == null)?'grey-2':(gikAprContents.kpi1 >= '0' && gikAprContents.kpi1 <= '14.7')?'red':(gikAprContents.kpi1 > '14.7' && gikAprContents.kpi1 <= '19.6')?'orange':(gikAprContents.kpi1 > '19.6' && gikAprContents.kpi1 < '24.5')?'yellow-7':(gikAprContents.kpi1 >= '24.5' && gikAprContents.kpi1 < '29.4')?'green':(gikAprContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi2 == null)?'grey-2':(gikAprContents.kpi2 >= '0' && gikAprContents.kpi2 <= '19.05')?'red':(gikAprContents.kpi2 > '19.05' && gikAprContents.kpi2 <= '25.4')?'orange':(gikAprContents.kpi2 > '25.4' && gikAprContents.kpi2 < '31.75')?'yellow-7':(gikAprContents.kpi2 >= '31.75' && gikAprContents.kpi2 < '38.1')?'green':(gikAprContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi3 == null)?'grey-2':(gikAprContents.kpi3 >= '0' && gikAprContents.kpi3 <= '19.35')?'red':(gikAprContents.kpi3 > '19.35' && gikAprContents.kpi3 <= '25.8')?'orange':(gikAprContents.kpi3 > '25.8' && gikAprContents.kpi3 < '32.25')?'yellow-7':(gikAprContents.kpi3 >= '32.25' && gikAprContents.kpi3 < '38.7')?'green':(gikAprContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi4 == null)?'grey-2':(gikAprContents.kpi4 >= '0' && gikAprContents.kpi4 <= '19.2')?'red':(gikAprContents.kpi4 > '19.2' && gikAprContents.kpi4 <= '25.6')?'orange':(gikAprContents.kpi4 > '25.6' && gikAprContents.kpi4 < '32')?'yellow-7':(gikAprContents.kpi4 >= '32' && gikAprContents.kpi4 < '38.4')?'green':(gikAprContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi4}}
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
                              :color="(gikMayContents.kpi1 == null)?'grey-2':(gikMayContents.kpi1 >= '0' && gikMayContents.kpi1 <= '14.7')?'red':(gikMayContents.kpi1 > '14.7' && gikMayContents.kpi1 <= '19.6')?'orange':(gikMayContents.kpi1 > '19.6' && gikMayContents.kpi1 < '24.5')?'yellow-7':(gikMayContents.kpi1 >= '24.5' && gikMayContents.kpi1 < '29.4')?'green':(gikMayContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi2 == null)?'grey-2':(gikMayContents.kpi2 >= '0' && gikMayContents.kpi2 <= '19.05')?'red':(gikMayContents.kpi2 > '19.05' && gikMayContents.kpi2 <= '25.4')?'orange':(gikMayContents.kpi2 > '25.4' && gikMayContents.kpi2 < '31.75')?'yellow-7':(gikMayContents.kpi2 >= '31.75' && gikMayContents.kpi2 < '38.1')?'green':(gikMayContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi3 == null)?'grey-2':(gikMayContents.kpi3 >= '0' && gikMayContents.kpi3 <= '19.35')?'red':(gikMayContents.kpi3 > '19.35' && gikMayContents.kpi3 <= '25.8')?'orange':(gikMayContents.kpi3 > '25.8' && gikMayContents.kpi3 < '32.25')?'yellow-7':(gikMayContents.kpi3 >= '32.25' && gikMayContents.kpi3 < '38.7')?'green':(gikMayContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi4 == null)?'grey-2':(gikMayContents.kpi4 >= '0' && gikMayContents.kpi4 <= '19.2')?'red':(gikMayContents.kpi4 > '19.2' && gikMayContents.kpi4 <= '25.6')?'orange':(gikMayContents.kpi4 > '25.6' && gikMayContents.kpi4 < '32')?'yellow-7':(gikMayContents.kpi4 >= '32' && gikMayContents.kpi4 < '38.4')?'green':(gikMayContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi4}}
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
                              :color="(gikJunContents.kpi1 == null)?'grey-2':(gikJunContents.kpi1 >= '0' && gikJunContents.kpi1 <= '14.7')?'red':(gikJunContents.kpi1 > '14.7' && gikJunContents.kpi1 <= '19.6')?'orange':(gikJunContents.kpi1 > '19.6' && gikJunContents.kpi1 < '24.5')?'yellow-7':(gikJunContents.kpi1 >= '24.5' && gikJunContents.kpi1 < '29.4')?'green':(gikJunContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi2 == null)?'grey-2':(gikJunContents.kpi2 >= '0' && gikJunContents.kpi2 <= '19.05')?'red':(gikJunContents.kpi2 > '19.05' && gikJunContents.kpi2 <= '25.4')?'orange':(gikJunContents.kpi2 > '25.4' && gikJunContents.kpi2 < '31.75')?'yellow-7':(gikJunContents.kpi2 >= '31.75' && gikJunContents.kpi2 < '38.1')?'green':(gikJunContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi3 == null)?'grey-2':(gikJunContents.kpi3 >= '0' && gikJunContents.kpi3 <= '19.35')?'red':(gikJunContents.kpi3 > '19.35' && gikJunContents.kpi3 <= '25.8')?'orange':(gikJunContents.kpi3 > '25.8' && gikJunContents.kpi3 < '32.25')?'yellow-7':(gikJunContents.kpi3 >= '32.25' && gikJunContents.kpi3 < '38.7')?'green':(gikJunContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi4 == null)?'grey-2':(gikJunContents.kpi4 >= '0' && gikJunContents.kpi4 <= '19.2')?'red':(gikJunContents.kpi4 > '19.2' && gikJunContents.kpi4 <= '25.6')?'orange':(gikJunContents.kpi4 > '25.6' && gikJunContents.kpi4 < '32')?'yellow-7':(gikJunContents.kpi4 >= '32' && gikJunContents.kpi4 < '38.4')?'green':(gikJunContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi4}}
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
                              :color="(gikJulContents.kpi1 == null)?'grey-2':(gikJulContents.kpi1 >= '0' && gikJulContents.kpi1 <= '14.7')?'red':(gikJulContents.kpi1 > '14.7' && gikJulContents.kpi1 <= '19.6')?'orange':(gikJulContents.kpi1 > '19.6' && gikJulContents.kpi1 < '24.5')?'yellow-7':(gikJulContents.kpi1 >= '24.5' && gikJulContents.kpi1 < '29.4')?'green':(gikJulContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi2 == null)?'grey-2':(gikJulContents.kpi2 >= '0' && gikJulContents.kpi2 <= '19.05')?'red':(gikJulContents.kpi2 > '19.05' && gikJulContents.kpi2 <= '25.4')?'orange':(gikJulContents.kpi2 > '25.4' && gikJulContents.kpi2 < '31.75')?'yellow-7':(gikJulContents.kpi2 >= '31.75' && gikJulContents.kpi2 < '38.1')?'green':(gikJulContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi3 == null)?'grey-2':(gikJulContents.kpi3 >= '0' && gikJulContents.kpi3 <= '19.35')?'red':(gikJulContents.kpi3 > '19.35' && gikJulContents.kpi3 <= '25.8')?'orange':(gikJulContents.kpi3 > '25.8' && gikJulContents.kpi3 < '32.25')?'yellow-7':(gikJulContents.kpi3 >= '32.25' && gikJulContents.kpi3 < '38.7')?'green':(gikJulContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi4 == null)?'grey-2':(gikJulContents.kpi4 >= '0' && gikJulContents.kpi4 <= '19.2')?'red':(gikJulContents.kpi4 > '19.2' && gikJulContents.kpi4 <= '25.6')?'orange':(gikJulContents.kpi4 > '25.6' && gikJulContents.kpi4 < '32')?'yellow-7':(gikJulContents.kpi4 >= '32' && gikJulContents.kpi4 < '38.4')?'green':(gikJulContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi4}}
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
                              :color="(gikAugContents.kpi1 == null)?'grey-2':(gikAugContents.kpi1 >= '0' && gikAugContents.kpi1 <= '14.7')?'red':(gikAugContents.kpi1 > '14.7' && gikAugContents.kpi1 <= '19.6')?'orange':(gikAugContents.kpi1 > '19.6' && gikAugContents.kpi1 < '24.5')?'yellow-7':(gikAugContents.kpi1 >= '24.5' && gikAugContents.kpi1 < '29.4')?'green':(gikAugContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi2 == null)?'grey-2':(gikAugContents.kpi2 >= '0' && gikAugContents.kpi2 <= '19.05')?'red':(gikAugContents.kpi2 > '19.05' && gikAugContents.kpi2 <= '25.4')?'orange':(gikAugContents.kpi2 > '25.4' && gikAugContents.kpi2 < '31.75')?'yellow-7':(gikAugContents.kpi2 >= '31.75' && gikAugContents.kpi2 < '38.1')?'green':(gikAugContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi3 == null)?'grey-2':(gikAugContents.kpi3 >= '0' && gikAugContents.kpi3 <= '19.35')?'red':(gikAugContents.kpi3 > '19.35' && gikAugContents.kpi3 <= '25.8')?'orange':(gikAugContents.kpi3 > '25.8' && gikAugContents.kpi3 < '32.25')?'yellow-7':(gikAugContents.kpi3 >= '32.25' && gikAugContents.kpi3 < '38.7')?'green':(gikAugContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi4 == null)?'grey-2':(gikAugContents.kpi4 >= '0' && gikAugContents.kpi4 <= '19.2')?'red':(gikAugContents.kpi4 > '19.2' && gikAugContents.kpi4 <= '25.6')?'orange':(gikAugContents.kpi4 > '25.6' && gikAugContents.kpi4 < '32')?'yellow-7':(gikAugContents.kpi4 >= '32' && gikAugContents.kpi4 < '38.4')?'green':(gikAugContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi4}}
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
                              :color="(gikSepContents.kpi1 == null)?'grey-2':(gikSepContents.kpi1 >= '0' && gikSepContents.kpi1 <= '14.7')?'red':(gikSepContents.kpi1 > '14.7' && gikSepContents.kpi1 <= '19.6')?'orange':(gikSepContents.kpi1 > '19.6' && gikSepContents.kpi1 < '24.5')?'yellow-7':(gikSepContents.kpi1 >= '24.5' && gikSepContents.kpi1 < '29.4')?'green':(gikSepContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi2 == null)?'grey-2':(gikSepContents.kpi2 >= '0' && gikSepContents.kpi2 <= '19.05')?'red':(gikSepContents.kpi2 > '19.05' && gikSepContents.kpi2 <= '25.4')?'orange':(gikSepContents.kpi2 > '25.4' && gikSepContents.kpi2 < '31.75')?'yellow-7':(gikSepContents.kpi2 >= '31.75' && gikSepContents.kpi2 < '38.1')?'green':(gikSepContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi3 == null)?'grey-2':(gikSepContents.kpi3 >= '0' && gikSepContents.kpi3 <= '19.35')?'red':(gikSepContents.kpi3 > '19.35' && gikSepContents.kpi3 <= '25.8')?'orange':(gikSepContents.kpi3 > '25.8' && gikSepContents.kpi3 < '32.25')?'yellow-7':(gikSepContents.kpi3 >= '32.25' && gikSepContents.kpi3 < '38.7')?'green':(gikSepContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi4 == null)?'grey-2':(gikSepContents.kpi4 >= '0' && gikSepContents.kpi4 <= '19.2')?'red':(gikSepContents.kpi4 > '19.2' && gikSepContents.kpi4 <= '25.6')?'orange':(gikSepContents.kpi4 > '25.6' && gikSepContents.kpi4 < '32')?'yellow-7':(gikSepContents.kpi4 >= '32' && gikSepContents.kpi4 < '38.4')?'green':(gikSepContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi4}}
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
                              :color="(gikOctContents.kpi1 == null)?'grey-2':(gikOctContents.kpi1 >= '0' && gikOctContents.kpi1 <= '14.7')?'red':(gikOctContents.kpi1 > '14.7' && gikOctContents.kpi1 <= '19.6')?'orange':(gikOctContents.kpi1 > '19.6' && gikOctContents.kpi1 < '24.5')?'yellow-7':(gikOctContents.kpi1 >= '24.5' && gikOctContents.kpi1 < '29.4')?'green':(gikOctContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi2 == null)?'grey-2':(gikOctContents.kpi2 >= '0' && gikOctContents.kpi2 <= '19.05')?'red':(gikOctContents.kpi2 > '19.05' && gikOctContents.kpi2 <= '25.4')?'orange':(gikOctContents.kpi2 > '25.4' && gikOctContents.kpi2 < '31.75')?'yellow-7':(gikOctContents.kpi2 >= '31.75' && gikOctContents.kpi2 < '38.1')?'green':(gikOctContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi3 == null)?'grey-2':(gikOctContents.kpi3 >= '0' && gikOctContents.kpi3 <= '19.35')?'red':(gikOctContents.kpi3 > '19.35' && gikOctContents.kpi3 <= '25.8')?'orange':(gikOctContents.kpi3 > '25.8' && gikOctContents.kpi3 < '32.25')?'yellow-7':(gikOctContents.kpi3 >= '32.25' && gikOctContents.kpi3 < '38.7')?'green':(gikOctContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi4 == null)?'grey-2':(gikOctContents.kpi4 >= '0' && gikOctContents.kpi4 <= '19.2')?'red':(gikOctContents.kpi4 > '19.2' && gikOctContents.kpi4 <= '25.6')?'orange':(gikOctContents.kpi4 > '25.6' && gikOctContents.kpi4 < '32')?'yellow-7':(gikOctContents.kpi4 >= '32' && gikOctContents.kpi4 < '38.4')?'green':(gikOctContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi4}}
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
                              :color="(gikNovContents.kpi1 == null)?'grey-2':(gikNovContents.kpi1 >= '0' && gikNovContents.kpi1 <= '14.7')?'red':(gikNovContents.kpi1 > '14.7' && gikNovContents.kpi1 <= '19.6')?'orange':(gikNovContents.kpi1 > '19.6' && gikNovContents.kpi1 < '24.5')?'yellow-7':(gikNovContents.kpi1 >= '24.5' && gikNovContents.kpi1 < '29.4')?'green':(gikNovContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi2 == null)?'grey-2':(gikNovContents.kpi2 >= '0' && gikNovContents.kpi2 <= '19.05')?'red':(gikNovContents.kpi2 > '19.05' && gikNovContents.kpi2 <= '25.4')?'orange':(gikNovContents.kpi2 > '25.4' && gikNovContents.kpi2 < '31.75')?'yellow-7':(gikNovContents.kpi2 >= '31.75' && gikNovContents.kpi2 < '38.1')?'green':(gikNovContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi3 == null)?'grey-2':(gikNovContents.kpi3 >= '0' && gikNovContents.kpi3 <= '19.35')?'red':(gikNovContents.kpi3 > '19.35' && gikNovContents.kpi3 <= '25.8')?'orange':(gikNovContents.kpi3 > '25.8' && gikNovContents.kpi3 < '32.25')?'yellow-7':(gikNovContents.kpi3 >= '32.25' && gikNovContents.kpi3 < '38.7')?'green':(gikNovContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi4 == null)?'grey-2':(gikNovContents.kpi4 >= '0' && gikNovContents.kpi4 <= '19.2')?'red':(gikNovContents.kpi4 > '19.2' && gikNovContents.kpi4 <= '25.6')?'orange':(gikNovContents.kpi4 > '25.6' && gikNovContents.kpi4 < '32')?'yellow-7':(gikNovContents.kpi4 >= '32' && gikNovContents.kpi4 < '38.4')?'green':(gikNovContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi4}}
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
                              :color="(gikDecContents.kpi1 == null)?'grey-2':(gikDecContents.kpi1 >= '0' && gikDecContents.kpi1 <= '14.7')?'red':(gikDecContents.kpi1 > '14.7' && gikDecContents.kpi1 <= '19.6')?'orange':(gikDecContents.kpi1 > '19.6' && gikDecContents.kpi1 < '24.5')?'yellow-7':(gikDecContents.kpi1 >= '24.5' && gikDecContents.kpi1 < '29.4')?'green':(gikDecContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi2 == null)?'grey-2':(gikDecContents.kpi2 >= '0' && gikDecContents.kpi2 <= '19.05')?'red':(gikDecContents.kpi2 > '19.05' && gikDecContents.kpi2 <= '25.4')?'orange':(gikDecContents.kpi2 > '25.4' && gikDecContents.kpi2 < '31.75')?'yellow-7':(gikDecContents.kpi2 >= '31.75' && gikDecContents.kpi2 < '38.1')?'green':(gikDecContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi3 == null)?'grey-2':(gikDecContents.kpi3 >= '0' && gikDecContents.kpi3 <= '19.35')?'red':(gikDecContents.kpi3 > '19.35' && gikDecContents.kpi3 <= '25.8')?'orange':(gikDecContents.kpi3 > '25.8' && gikDecContents.kpi3 < '32.25')?'yellow-7':(gikDecContents.kpi3 >= '32.25' && gikDecContents.kpi3 < '38.7')?'green':(gikDecContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi4 == null)?'grey-2':(gikDecContents.kpi4 >= '0' && gikDecContents.kpi4 <= '19.2')?'red':(gikDecContents.kpi4 > '19.2' && gikDecContents.kpi4 <= '25.6')?'orange':(gikDecContents.kpi4 > '25.6' && gikDecContents.kpi4 < '32')?'yellow-7':(gikDecContents.kpi4 >= '32' && gikDecContents.kpi4 < '38.4')?'green':(gikDecContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/GIKlogoforTOP.png"></q-img>
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
                  <!--TABLE DONE-->
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
                              :color="(gikJanContents.kpi1 == null)?'grey-2':(gikJanContents.kpi1 >= '0' && gikJanContents.kpi1 <= '14.7')?'red':(gikJanContents.kpi1 > '14.7' && gikJanContents.kpi1 <= '19.6')?'orange':(gikJanContents.kpi1 > '19.6' && gikJanContents.kpi1 < '24.5')?'yellow-7':(gikJanContents.kpi1 >= '24.5' && gikJanContents.kpi1 < '29.4')?'green':(gikJanContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi2 == null)?'grey-2':(gikJanContents.kpi2 >= '0' && gikJanContents.kpi2 <= '19.05')?'red':(gikJanContents.kpi2 > '19.05' && gikJanContents.kpi2 <= '25.4')?'orange':(gikJanContents.kpi2 > '25.4' && gikJanContents.kpi2 < '31.75')?'yellow-7':(gikJanContents.kpi2 >= '31.75' && gikJanContents.kpi2 < '38.1')?'green':(gikJanContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi3 == null)?'grey-2':(gikJanContents.kpi3 >= '0' && gikJanContents.kpi3 <= '19.35')?'red':(gikJanContents.kpi3 > '19.35' && gikJanContents.kpi3 <= '25.8')?'orange':(gikJanContents.kpi3 > '25.8' && gikJanContents.kpi3 < '32.25')?'yellow-7':(gikJanContents.kpi3 >= '32.25' && gikJanContents.kpi3 < '38.7')?'green':(gikJanContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi4 == null)?'grey-2':(gikJanContents.kpi4 >= '0' && gikJanContents.kpi4 <= '19.2')?'red':(gikJanContents.kpi4 > '19.2' && gikJanContents.kpi4 <= '25.6')?'orange':(gikJanContents.kpi4 > '25.6' && gikJanContents.kpi4 < '32')?'yellow-7':(gikJanContents.kpi4 >= '32' && gikJanContents.kpi4 < '38.4')?'green':(gikJanContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi4}}
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
                              :color="(gikFebContents.kpi1 == null)?'grey-2':(gikFebContents.kpi1 >= '0' && gikFebContents.kpi1 <= '14.7')?'red':(gikFebContents.kpi1 > '14.7' && gikFebContents.kpi1 <= '19.6')?'orange':(gikFebContents.kpi1 > '19.6' && gikFebContents.kpi1 < '24.5')?'yellow-7':(gikFebContents.kpi1 >= '24.5' && gikFebContents.kpi1 < '29.4')?'green':(gikFebContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi2 == null)?'grey-2':(gikFebContents.kpi2 >= '0' && gikFebContents.kpi2 <= '19.05')?'red':(gikFebContents.kpi2 > '19.05' && gikFebContents.kpi2 <= '25.4')?'orange':(gikFebContents.kpi2 > '25.4' && gikFebContents.kpi2 < '31.75')?'yellow-7':(gikFebContents.kpi2 >= '31.75' && gikFebContents.kpi2 < '38.1')?'green':(gikFebContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi3 == null)?'grey-2':(gikFebContents.kpi3 >= '0' && gikFebContents.kpi3 <= '19.35')?'red':(gikFebContents.kpi3 > '19.35' && gikFebContents.kpi3 <= '25.8')?'orange':(gikFebContents.kpi3 > '25.8' && gikFebContents.kpi3 < '32.25')?'yellow-7':(gikFebContents.kpi3 >= '32.25' && gikFebContents.kpi3 < '38.7')?'green':(gikFebContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi4 == null)?'grey-2':(gikFebContents.kpi4 >= '0' && gikFebContents.kpi4 <= '19.2')?'red':(gikFebContents.kpi4 > '19.2' && gikFebContents.kpi4 <= '25.6')?'orange':(gikFebContents.kpi4 > '25.6' && gikFebContents.kpi4 < '32')?'yellow-7':(gikFebContents.kpi4 >= '32' && gikFebContents.kpi4 < '38.4')?'green':(gikFebContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi4}}
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
                              :color="(gikMarContents.kpi1 == null)?'grey-2':(gikMarContents.kpi1 >= '0' && gikMarContents.kpi1 <= '14.7')?'red':(gikMarContents.kpi1 > '14.7' && gikMarContents.kpi1 <= '19.6')?'orange':(gikMarContents.kpi1 > '19.6' && gikMarContents.kpi1 < '24.5')?'yellow-7':(gikMarContents.kpi1 >= '24.5' && gikMarContents.kpi1 < '29.4')?'green':(gikMarContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi2 == null)?'grey-2':(gikMarContents.kpi2 >= '0' && gikMarContents.kpi2 <= '19.05')?'red':(gikMarContents.kpi2 > '19.05' && gikMarContents.kpi2 <= '25.4')?'orange':(gikMarContents.kpi2 > '25.4' && gikMarContents.kpi2 < '31.75')?'yellow-7':(gikMarContents.kpi2 >= '31.75' && gikMarContents.kpi2 < '38.1')?'green':(gikMarContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi3 == null)?'grey-2':(gikMarContents.kpi3 >= '0' && gikMarContents.kpi3 <= '19.35')?'red':(gikMarContents.kpi3 > '19.35' && gikMarContents.kpi3 <= '25.8')?'orange':(gikMarContents.kpi3 > '25.8' && gikMarContents.kpi3 < '32.25')?'yellow-7':(gikMarContents.kpi3 >= '32.25' && gikMarContents.kpi3 < '38.7')?'green':(gikMarContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi4 == null)?'grey-2':(gikMarContents.kpi4 >= '0' && gikMarContents.kpi4 <= '19.2')?'red':(gikMarContents.kpi4 > '19.2' && gikMarContents.kpi4 <= '25.6')?'orange':(gikMarContents.kpi4 > '25.6' && gikMarContents.kpi4 < '32')?'yellow-7':(gikMarContents.kpi4 >= '32' && gikMarContents.kpi4 < '38.4')?'green':(gikMarContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi4}}
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
                              :color="(gikAprContents.kpi1 == null)?'grey-2':(gikAprContents.kpi1 >= '0' && gikAprContents.kpi1 <= '14.7')?'red':(gikAprContents.kpi1 > '14.7' && gikAprContents.kpi1 <= '19.6')?'orange':(gikAprContents.kpi1 > '19.6' && gikAprContents.kpi1 < '24.5')?'yellow-7':(gikAprContents.kpi1 >= '24.5' && gikAprContents.kpi1 < '29.4')?'green':(gikAprContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi2 == null)?'grey-2':(gikAprContents.kpi2 >= '0' && gikAprContents.kpi2 <= '19.05')?'red':(gikAprContents.kpi2 > '19.05' && gikAprContents.kpi2 <= '25.4')?'orange':(gikAprContents.kpi2 > '25.4' && gikAprContents.kpi2 < '31.75')?'yellow-7':(gikAprContents.kpi2 >= '31.75' && gikAprContents.kpi2 < '38.1')?'green':(gikAprContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi3 == null)?'grey-2':(gikAprContents.kpi3 >= '0' && gikAprContents.kpi3 <= '19.35')?'red':(gikAprContents.kpi3 > '19.35' && gikAprContents.kpi3 <= '25.8')?'orange':(gikAprContents.kpi3 > '25.8' && gikAprContents.kpi3 < '32.25')?'yellow-7':(gikAprContents.kpi3 >= '32.25' && gikAprContents.kpi3 < '38.7')?'green':(gikAprContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi4 == null)?'grey-2':(gikAprContents.kpi4 >= '0' && gikAprContents.kpi4 <= '19.2')?'red':(gikAprContents.kpi4 > '19.2' && gikAprContents.kpi4 <= '25.6')?'orange':(gikAprContents.kpi4 > '25.6' && gikAprContents.kpi4 < '32')?'yellow-7':(gikAprContents.kpi4 >= '32' && gikAprContents.kpi4 < '38.4')?'green':(gikAprContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi4}}
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
                              :color="(gikMayContents.kpi1 == null)?'grey-2':(gikMayContents.kpi1 >= '0' && gikMayContents.kpi1 <= '14.7')?'red':(gikMayContents.kpi1 > '14.7' && gikMayContents.kpi1 <= '19.6')?'orange':(gikMayContents.kpi1 > '19.6' && gikMayContents.kpi1 < '24.5')?'yellow-7':(gikMayContents.kpi1 >= '24.5' && gikMayContents.kpi1 < '29.4')?'green':(gikMayContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi2 == null)?'grey-2':(gikMayContents.kpi2 >= '0' && gikMayContents.kpi2 <= '19.05')?'red':(gikMayContents.kpi2 > '19.05' && gikMayContents.kpi2 <= '25.4')?'orange':(gikMayContents.kpi2 > '25.4' && gikMayContents.kpi2 < '31.75')?'yellow-7':(gikMayContents.kpi2 >= '31.75' && gikMayContents.kpi2 < '38.1')?'green':(gikMayContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi3 == null)?'grey-2':(gikMayContents.kpi3 >= '0' && gikMayContents.kpi3 <= '19.35')?'red':(gikMayContents.kpi3 > '19.35' && gikMayContents.kpi3 <= '25.8')?'orange':(gikMayContents.kpi3 > '25.8' && gikMayContents.kpi3 < '32.25')?'yellow-7':(gikMayContents.kpi3 >= '32.25' && gikMayContents.kpi3 < '38.7')?'green':(gikMayContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi4 == null)?'grey-2':(gikMayContents.kpi4 >= '0' && gikMayContents.kpi4 <= '19.2')?'red':(gikMayContents.kpi4 > '19.2' && gikMayContents.kpi4 <= '25.6')?'orange':(gikMayContents.kpi4 > '25.6' && gikMayContents.kpi4 < '32')?'yellow-7':(gikMayContents.kpi4 >= '32' && gikMayContents.kpi4 < '38.4')?'green':(gikMayContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi4}}
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
                              :color="(gikJunContents.kpi1 == null)?'grey-2':(gikJunContents.kpi1 >= '0' && gikJunContents.kpi1 <= '14.7')?'red':(gikJunContents.kpi1 > '14.7' && gikJunContents.kpi1 <= '19.6')?'orange':(gikJunContents.kpi1 > '19.6' && gikJunContents.kpi1 < '24.5')?'yellow-7':(gikJunContents.kpi1 >= '24.5' && gikJunContents.kpi1 < '29.4')?'green':(gikJunContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi2 == null)?'grey-2':(gikJunContents.kpi2 >= '0' && gikJunContents.kpi2 <= '19.05')?'red':(gikJunContents.kpi2 > '19.05' && gikJunContents.kpi2 <= '25.4')?'orange':(gikJunContents.kpi2 > '25.4' && gikJunContents.kpi2 < '31.75')?'yellow-7':(gikJunContents.kpi2 >= '31.75' && gikJunContents.kpi2 < '38.1')?'green':(gikJunContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi3 == null)?'grey-2':(gikJunContents.kpi3 >= '0' && gikJunContents.kpi3 <= '19.35')?'red':(gikJunContents.kpi3 > '19.35' && gikJunContents.kpi3 <= '25.8')?'orange':(gikJunContents.kpi3 > '25.8' && gikJunContents.kpi3 < '32.25')?'yellow-7':(gikJunContents.kpi3 >= '32.25' && gikJunContents.kpi3 < '38.7')?'green':(gikJunContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi4 == null)?'grey-2':(gikJunContents.kpi4 >= '0' && gikJunContents.kpi4 <= '19.2')?'red':(gikJunContents.kpi4 > '19.2' && gikJunContents.kpi4 <= '25.6')?'orange':(gikJunContents.kpi4 > '25.6' && gikJunContents.kpi4 < '32')?'yellow-7':(gikJunContents.kpi4 >= '32' && gikJunContents.kpi4 < '38.4')?'green':(gikJunContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi4}}
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
                              :color="(gikJulContents.kpi1 == null)?'grey-2':(gikJulContents.kpi1 >= '0' && gikJulContents.kpi1 <= '14.7')?'red':(gikJulContents.kpi1 > '14.7' && gikJulContents.kpi1 <= '19.6')?'orange':(gikJulContents.kpi1 > '19.6' && gikJulContents.kpi1 < '24.5')?'yellow-7':(gikJulContents.kpi1 >= '24.5' && gikJulContents.kpi1 < '29.4')?'green':(gikJulContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi2 == null)?'grey-2':(gikJulContents.kpi2 >= '0' && gikJulContents.kpi2 <= '19.05')?'red':(gikJulContents.kpi2 > '19.05' && gikJulContents.kpi2 <= '25.4')?'orange':(gikJulContents.kpi2 > '25.4' && gikJulContents.kpi2 < '31.75')?'yellow-7':(gikJulContents.kpi2 >= '31.75' && gikJulContents.kpi2 < '38.1')?'green':(gikJulContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi3 == null)?'grey-2':(gikJulContents.kpi3 >= '0' && gikJulContents.kpi3 <= '19.35')?'red':(gikJulContents.kpi3 > '19.35' && gikJulContents.kpi3 <= '25.8')?'orange':(gikJulContents.kpi3 > '25.8' && gikJulContents.kpi3 < '32.25')?'yellow-7':(gikJulContents.kpi3 >= '32.25' && gikJulContents.kpi3 < '38.7')?'green':(gikJulContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi4 == null)?'grey-2':(gikJulContents.kpi4 >= '0' && gikJulContents.kpi4 <= '19.2')?'red':(gikJulContents.kpi4 > '19.2' && gikJulContents.kpi4 <= '25.6')?'orange':(gikJulContents.kpi4 > '25.6' && gikJulContents.kpi4 < '32')?'yellow-7':(gikJulContents.kpi4 >= '32' && gikJulContents.kpi4 < '38.4')?'green':(gikJulContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi4}}
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
                              :color="(gikAugContents.kpi1 == null)?'grey-2':(gikAugContents.kpi1 >= '0' && gikAugContents.kpi1 <= '14.7')?'red':(gikAugContents.kpi1 > '14.7' && gikAugContents.kpi1 <= '19.6')?'orange':(gikAugContents.kpi1 > '19.6' && gikAugContents.kpi1 < '24.5')?'yellow-7':(gikAugContents.kpi1 >= '24.5' && gikAugContents.kpi1 < '29.4')?'green':(gikAugContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi2 == null)?'grey-2':(gikAugContents.kpi2 >= '0' && gikAugContents.kpi2 <= '19.05')?'red':(gikAugContents.kpi2 > '19.05' && gikAugContents.kpi2 <= '25.4')?'orange':(gikAugContents.kpi2 > '25.4' && gikAugContents.kpi2 < '31.75')?'yellow-7':(gikAugContents.kpi2 >= '31.75' && gikAugContents.kpi2 < '38.1')?'green':(gikAugContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi3 == null)?'grey-2':(gikAugContents.kpi3 >= '0' && gikAugContents.kpi3 <= '19.35')?'red':(gikAugContents.kpi3 > '19.35' && gikAugContents.kpi3 <= '25.8')?'orange':(gikAugContents.kpi3 > '25.8' && gikAugContents.kpi3 < '32.25')?'yellow-7':(gikAugContents.kpi3 >= '32.25' && gikAugContents.kpi3 < '38.7')?'green':(gikAugContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi4 == null)?'grey-2':(gikAugContents.kpi4 >= '0' && gikAugContents.kpi4 <= '19.2')?'red':(gikAugContents.kpi4 > '19.2' && gikAugContents.kpi4 <= '25.6')?'orange':(gikAugContents.kpi4 > '25.6' && gikAugContents.kpi4 < '32')?'yellow-7':(gikAugContents.kpi4 >= '32' && gikAugContents.kpi4 < '38.4')?'green':(gikAugContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi4}}
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
                              :color="(gikSepContents.kpi1 == null)?'grey-2':(gikSepContents.kpi1 >= '0' && gikSepContents.kpi1 <= '14.7')?'red':(gikSepContents.kpi1 > '14.7' && gikSepContents.kpi1 <= '19.6')?'orange':(gikSepContents.kpi1 > '19.6' && gikSepContents.kpi1 < '24.5')?'yellow-7':(gikSepContents.kpi1 >= '24.5' && gikSepContents.kpi1 < '29.4')?'green':(gikSepContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi2 == null)?'grey-2':(gikSepContents.kpi2 >= '0' && gikSepContents.kpi2 <= '19.05')?'red':(gikSepContents.kpi2 > '19.05' && gikSepContents.kpi2 <= '25.4')?'orange':(gikSepContents.kpi2 > '25.4' && gikSepContents.kpi2 < '31.75')?'yellow-7':(gikSepContents.kpi2 >= '31.75' && gikSepContents.kpi2 < '38.1')?'green':(gikSepContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi3 == null)?'grey-2':(gikSepContents.kpi3 >= '0' && gikSepContents.kpi3 <= '19.35')?'red':(gikSepContents.kpi3 > '19.35' && gikSepContents.kpi3 <= '25.8')?'orange':(gikSepContents.kpi3 > '25.8' && gikSepContents.kpi3 < '32.25')?'yellow-7':(gikSepContents.kpi3 >= '32.25' && gikSepContents.kpi3 < '38.7')?'green':(gikSepContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi4 == null)?'grey-2':(gikSepContents.kpi4 >= '0' && gikSepContents.kpi4 <= '19.2')?'red':(gikSepContents.kpi4 > '19.2' && gikSepContents.kpi4 <= '25.6')?'orange':(gikSepContents.kpi4 > '25.6' && gikSepContents.kpi4 < '32')?'yellow-7':(gikSepContents.kpi4 >= '32' && gikSepContents.kpi4 < '38.4')?'green':(gikSepContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi4}}
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
                              :color="(gikOctContents.kpi1 == null)?'grey-2':(gikOctContents.kpi1 >= '0' && gikOctContents.kpi1 <= '14.7')?'red':(gikOctContents.kpi1 > '14.7' && gikOctContents.kpi1 <= '19.6')?'orange':(gikOctContents.kpi1 > '19.6' && gikOctContents.kpi1 < '24.5')?'yellow-7':(gikOctContents.kpi1 >= '24.5' && gikOctContents.kpi1 < '29.4')?'green':(gikOctContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi2 == null)?'grey-2':(gikOctContents.kpi2 >= '0' && gikOctContents.kpi2 <= '19.05')?'red':(gikOctContents.kpi2 > '19.05' && gikOctContents.kpi2 <= '25.4')?'orange':(gikOctContents.kpi2 > '25.4' && gikOctContents.kpi2 < '31.75')?'yellow-7':(gikOctContents.kpi2 >= '31.75' && gikOctContents.kpi2 < '38.1')?'green':(gikOctContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi3 == null)?'grey-2':(gikOctContents.kpi3 >= '0' && gikOctContents.kpi3 <= '19.35')?'red':(gikOctContents.kpi3 > '19.35' && gikOctContents.kpi3 <= '25.8')?'orange':(gikOctContents.kpi3 > '25.8' && gikOctContents.kpi3 < '32.25')?'yellow-7':(gikOctContents.kpi3 >= '32.25' && gikOctContents.kpi3 < '38.7')?'green':(gikOctContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi4 == null)?'grey-2':(gikOctContents.kpi4 >= '0' && gikOctContents.kpi4 <= '19.2')?'red':(gikOctContents.kpi4 > '19.2' && gikOctContents.kpi4 <= '25.6')?'orange':(gikOctContents.kpi4 > '25.6' && gikOctContents.kpi4 < '32')?'yellow-7':(gikOctContents.kpi4 >= '32' && gikOctContents.kpi4 < '38.4')?'green':(gikOctContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi4}}
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
                              :color="(gikNovContents.kpi1 == null)?'grey-2':(gikNovContents.kpi1 >= '0' && gikNovContents.kpi1 <= '14.7')?'red':(gikNovContents.kpi1 > '14.7' && gikNovContents.kpi1 <= '19.6')?'orange':(gikNovContents.kpi1 > '19.6' && gikNovContents.kpi1 < '24.5')?'yellow-7':(gikNovContents.kpi1 >= '24.5' && gikNovContents.kpi1 < '29.4')?'green':(gikNovContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi2 == null)?'grey-2':(gikNovContents.kpi2 >= '0' && gikNovContents.kpi2 <= '19.05')?'red':(gikNovContents.kpi2 > '19.05' && gikNovContents.kpi2 <= '25.4')?'orange':(gikNovContents.kpi2 > '25.4' && gikNovContents.kpi2 < '31.75')?'yellow-7':(gikNovContents.kpi2 >= '31.75' && gikNovContents.kpi2 < '38.1')?'green':(gikNovContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi3 == null)?'grey-2':(gikNovContents.kpi3 >= '0' && gikNovContents.kpi3 <= '19.35')?'red':(gikNovContents.kpi3 > '19.35' && gikNovContents.kpi3 <= '25.8')?'orange':(gikNovContents.kpi3 > '25.8' && gikNovContents.kpi3 < '32.25')?'yellow-7':(gikNovContents.kpi3 >= '32.25' && gikNovContents.kpi3 < '38.7')?'green':(gikNovContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi4 == null)?'grey-2':(gikNovContents.kpi4 >= '0' && gikNovContents.kpi4 <= '19.2')?'red':(gikNovContents.kpi4 > '19.2' && gikNovContents.kpi4 <= '25.6')?'orange':(gikNovContents.kpi4 > '25.6' && gikNovContents.kpi4 < '32')?'yellow-7':(gikNovContents.kpi4 >= '32' && gikNovContents.kpi4 < '38.4')?'green':(gikNovContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi4}}
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
                              :color="(gikDecContents.kpi1 == null)?'grey-2':(gikDecContents.kpi1 >= '0' && gikDecContents.kpi1 <= '14.7')?'red':(gikDecContents.kpi1 > '14.7' && gikDecContents.kpi1 <= '19.6')?'orange':(gikDecContents.kpi1 > '19.6' && gikDecContents.kpi1 < '24.5')?'yellow-7':(gikDecContents.kpi1 >= '24.5' && gikDecContents.kpi1 < '29.4')?'green':(gikDecContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi2 == null)?'grey-2':(gikDecContents.kpi2 >= '0' && gikDecContents.kpi2 <= '19.05')?'red':(gikDecContents.kpi2 > '19.05' && gikDecContents.kpi2 <= '25.4')?'orange':(gikDecContents.kpi2 > '25.4' && gikDecContents.kpi2 < '31.75')?'yellow-7':(gikDecContents.kpi2 >= '31.75' && gikDecContents.kpi2 < '38.1')?'green':(gikDecContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi3 == null)?'grey-2':(gikDecContents.kpi3 >= '0' && gikDecContents.kpi3 <= '19.35')?'red':(gikDecContents.kpi3 > '19.35' && gikDecContents.kpi3 <= '25.8')?'orange':(gikDecContents.kpi3 > '25.8' && gikDecContents.kpi3 < '32.25')?'yellow-7':(gikDecContents.kpi3 >= '32.25' && gikDecContents.kpi3 < '38.7')?'green':(gikDecContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi4 == null)?'grey-2':(gikDecContents.kpi4 >= '0' && gikDecContents.kpi4 <= '19.2')?'red':(gikDecContents.kpi4 > '19.2' && gikDecContents.kpi4 <= '25.6')?'orange':(gikDecContents.kpi4 > '25.6' && gikDecContents.kpi4 < '32')?'yellow-7':(gikDecContents.kpi4 >= '32' && gikDecContents.kpi4 < '38.4')?'green':(gikDecContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/GIKlogoforTOP.png"></q-img>
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
                  <!--TABLE DONE-->
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
                              :color="(gikJanContents.kpi1 == null)?'grey-2':(gikJanContents.kpi1 >= '0' && gikJanContents.kpi1 <= '14.7')?'red':(gikJanContents.kpi1 > '14.7' && gikJanContents.kpi1 <= '19.6')?'orange':(gikJanContents.kpi1 > '19.6' && gikJanContents.kpi1 < '24.5')?'yellow-7':(gikJanContents.kpi1 >= '24.5' && gikJanContents.kpi1 < '29.4')?'green':(gikJanContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi2 == null)?'grey-2':(gikJanContents.kpi2 >= '0' && gikJanContents.kpi2 <= '19.05')?'red':(gikJanContents.kpi2 > '19.05' && gikJanContents.kpi2 <= '25.4')?'orange':(gikJanContents.kpi2 > '25.4' && gikJanContents.kpi2 < '31.75')?'yellow-7':(gikJanContents.kpi2 >= '31.75' && gikJanContents.kpi2 < '38.1')?'green':(gikJanContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi3 == null)?'grey-2':(gikJanContents.kpi3 >= '0' && gikJanContents.kpi3 <= '19.35')?'red':(gikJanContents.kpi3 > '19.35' && gikJanContents.kpi3 <= '25.8')?'orange':(gikJanContents.kpi3 > '25.8' && gikJanContents.kpi3 < '32.25')?'yellow-7':(gikJanContents.kpi3 >= '32.25' && gikJanContents.kpi3 < '38.7')?'green':(gikJanContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi4 == null)?'grey-2':(gikJanContents.kpi4 >= '0' && gikJanContents.kpi4 <= '19.2')?'red':(gikJanContents.kpi4 > '19.2' && gikJanContents.kpi4 <= '25.6')?'orange':(gikJanContents.kpi4 > '25.6' && gikJanContents.kpi4 < '32')?'yellow-7':(gikJanContents.kpi4 >= '32' && gikJanContents.kpi4 < '38.4')?'green':(gikJanContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi4}}
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
                              :color="(gikFebContents.kpi1 == null)?'grey-2':(gikFebContents.kpi1 >= '0' && gikFebContents.kpi1 <= '14.7')?'red':(gikFebContents.kpi1 > '14.7' && gikFebContents.kpi1 <= '19.6')?'orange':(gikFebContents.kpi1 > '19.6' && gikFebContents.kpi1 < '24.5')?'yellow-7':(gikFebContents.kpi1 >= '24.5' && gikFebContents.kpi1 < '29.4')?'green':(gikFebContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi2 == null)?'grey-2':(gikFebContents.kpi2 >= '0' && gikFebContents.kpi2 <= '19.05')?'red':(gikFebContents.kpi2 > '19.05' && gikFebContents.kpi2 <= '25.4')?'orange':(gikFebContents.kpi2 > '25.4' && gikFebContents.kpi2 < '31.75')?'yellow-7':(gikFebContents.kpi2 >= '31.75' && gikFebContents.kpi2 < '38.1')?'green':(gikFebContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi3 == null)?'grey-2':(gikFebContents.kpi3 >= '0' && gikFebContents.kpi3 <= '19.35')?'red':(gikFebContents.kpi3 > '19.35' && gikFebContents.kpi3 <= '25.8')?'orange':(gikFebContents.kpi3 > '25.8' && gikFebContents.kpi3 < '32.25')?'yellow-7':(gikFebContents.kpi3 >= '32.25' && gikFebContents.kpi3 < '38.7')?'green':(gikFebContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi4 == null)?'grey-2':(gikFebContents.kpi4 >= '0' && gikFebContents.kpi4 <= '19.2')?'red':(gikFebContents.kpi4 > '19.2' && gikFebContents.kpi4 <= '25.6')?'orange':(gikFebContents.kpi4 > '25.6' && gikFebContents.kpi4 < '32')?'yellow-7':(gikFebContents.kpi4 >= '32' && gikFebContents.kpi4 < '38.4')?'green':(gikFebContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi4}}
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
                              :color="(gikMarContents.kpi1 == null)?'grey-2':(gikMarContents.kpi1 >= '0' && gikMarContents.kpi1 <= '14.7')?'red':(gikMarContents.kpi1 > '14.7' && gikMarContents.kpi1 <= '19.6')?'orange':(gikMarContents.kpi1 > '19.6' && gikMarContents.kpi1 < '24.5')?'yellow-7':(gikMarContents.kpi1 >= '24.5' && gikMarContents.kpi1 < '29.4')?'green':(gikMarContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi2 == null)?'grey-2':(gikMarContents.kpi2 >= '0' && gikMarContents.kpi2 <= '19.05')?'red':(gikMarContents.kpi2 > '19.05' && gikMarContents.kpi2 <= '25.4')?'orange':(gikMarContents.kpi2 > '25.4' && gikMarContents.kpi2 < '31.75')?'yellow-7':(gikMarContents.kpi2 >= '31.75' && gikMarContents.kpi2 < '38.1')?'green':(gikMarContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi3 == null)?'grey-2':(gikMarContents.kpi3 >= '0' && gikMarContents.kpi3 <= '19.35')?'red':(gikMarContents.kpi3 > '19.35' && gikMarContents.kpi3 <= '25.8')?'orange':(gikMarContents.kpi3 > '25.8' && gikMarContents.kpi3 < '32.25')?'yellow-7':(gikMarContents.kpi3 >= '32.25' && gikMarContents.kpi3 < '38.7')?'green':(gikMarContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi4 == null)?'grey-2':(gikMarContents.kpi4 >= '0' && gikMarContents.kpi4 <= '19.2')?'red':(gikMarContents.kpi4 > '19.2' && gikMarContents.kpi4 <= '25.6')?'orange':(gikMarContents.kpi4 > '25.6' && gikMarContents.kpi4 < '32')?'yellow-7':(gikMarContents.kpi4 >= '32' && gikMarContents.kpi4 < '38.4')?'green':(gikMarContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi4}}
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
                              :color="(gikAprContents.kpi1 == null)?'grey-2':(gikAprContents.kpi1 >= '0' && gikAprContents.kpi1 <= '14.7')?'red':(gikAprContents.kpi1 > '14.7' && gikAprContents.kpi1 <= '19.6')?'orange':(gikAprContents.kpi1 > '19.6' && gikAprContents.kpi1 < '24.5')?'yellow-7':(gikAprContents.kpi1 >= '24.5' && gikAprContents.kpi1 < '29.4')?'green':(gikAprContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi2 == null)?'grey-2':(gikAprContents.kpi2 >= '0' && gikAprContents.kpi2 <= '19.05')?'red':(gikAprContents.kpi2 > '19.05' && gikAprContents.kpi2 <= '25.4')?'orange':(gikAprContents.kpi2 > '25.4' && gikAprContents.kpi2 < '31.75')?'yellow-7':(gikAprContents.kpi2 >= '31.75' && gikAprContents.kpi2 < '38.1')?'green':(gikAprContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi3 == null)?'grey-2':(gikAprContents.kpi3 >= '0' && gikAprContents.kpi3 <= '19.35')?'red':(gikAprContents.kpi3 > '19.35' && gikAprContents.kpi3 <= '25.8')?'orange':(gikAprContents.kpi3 > '25.8' && gikAprContents.kpi3 < '32.25')?'yellow-7':(gikAprContents.kpi3 >= '32.25' && gikAprContents.kpi3 < '38.7')?'green':(gikAprContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi4 == null)?'grey-2':(gikAprContents.kpi4 >= '0' && gikAprContents.kpi4 <= '19.2')?'red':(gikAprContents.kpi4 > '19.2' && gikAprContents.kpi4 <= '25.6')?'orange':(gikAprContents.kpi4 > '25.6' && gikAprContents.kpi4 < '32')?'yellow-7':(gikAprContents.kpi4 >= '32' && gikAprContents.kpi4 < '38.4')?'green':(gikAprContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi4}}
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
                              :color="(gikMayContents.kpi1 == null)?'grey-2':(gikMayContents.kpi1 >= '0' && gikMayContents.kpi1 <= '14.7')?'red':(gikMayContents.kpi1 > '14.7' && gikMayContents.kpi1 <= '19.6')?'orange':(gikMayContents.kpi1 > '19.6' && gikMayContents.kpi1 < '24.5')?'yellow-7':(gikMayContents.kpi1 >= '24.5' && gikMayContents.kpi1 < '29.4')?'green':(gikMayContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi2 == null)?'grey-2':(gikMayContents.kpi2 >= '0' && gikMayContents.kpi2 <= '19.05')?'red':(gikMayContents.kpi2 > '19.05' && gikMayContents.kpi2 <= '25.4')?'orange':(gikMayContents.kpi2 > '25.4' && gikMayContents.kpi2 < '31.75')?'yellow-7':(gikMayContents.kpi2 >= '31.75' && gikMayContents.kpi2 < '38.1')?'green':(gikMayContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi3 == null)?'grey-2':(gikMayContents.kpi3 >= '0' && gikMayContents.kpi3 <= '19.35')?'red':(gikMayContents.kpi3 > '19.35' && gikMayContents.kpi3 <= '25.8')?'orange':(gikMayContents.kpi3 > '25.8' && gikMayContents.kpi3 < '32.25')?'yellow-7':(gikMayContents.kpi3 >= '32.25' && gikMayContents.kpi3 < '38.7')?'green':(gikMayContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi4 == null)?'grey-2':(gikMayContents.kpi4 >= '0' && gikMayContents.kpi4 <= '19.2')?'red':(gikMayContents.kpi4 > '19.2' && gikMayContents.kpi4 <= '25.6')?'orange':(gikMayContents.kpi4 > '25.6' && gikMayContents.kpi4 < '32')?'yellow-7':(gikMayContents.kpi4 >= '32' && gikMayContents.kpi4 < '38.4')?'green':(gikMayContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi4}}
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
                              :color="(gikJunContents.kpi1 == null)?'grey-2':(gikJunContents.kpi1 >= '0' && gikJunContents.kpi1 <= '14.7')?'red':(gikJunContents.kpi1 > '14.7' && gikJunContents.kpi1 <= '19.6')?'orange':(gikJunContents.kpi1 > '19.6' && gikJunContents.kpi1 < '24.5')?'yellow-7':(gikJunContents.kpi1 >= '24.5' && gikJunContents.kpi1 < '29.4')?'green':(gikJunContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi2 == null)?'grey-2':(gikJunContents.kpi2 >= '0' && gikJunContents.kpi2 <= '19.05')?'red':(gikJunContents.kpi2 > '19.05' && gikJunContents.kpi2 <= '25.4')?'orange':(gikJunContents.kpi2 > '25.4' && gikJunContents.kpi2 < '31.75')?'yellow-7':(gikJunContents.kpi2 >= '31.75' && gikJunContents.kpi2 < '38.1')?'green':(gikJunContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi3 == null)?'grey-2':(gikJunContents.kpi3 >= '0' && gikJunContents.kpi3 <= '19.35')?'red':(gikJunContents.kpi3 > '19.35' && gikJunContents.kpi3 <= '25.8')?'orange':(gikJunContents.kpi3 > '25.8' && gikJunContents.kpi3 < '32.25')?'yellow-7':(gikJunContents.kpi3 >= '32.25' && gikJunContents.kpi3 < '38.7')?'green':(gikJunContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi4 == null)?'grey-2':(gikJunContents.kpi4 >= '0' && gikJunContents.kpi4 <= '19.2')?'red':(gikJunContents.kpi4 > '19.2' && gikJunContents.kpi4 <= '25.6')?'orange':(gikJunContents.kpi4 > '25.6' && gikJunContents.kpi4 < '32')?'yellow-7':(gikJunContents.kpi4 >= '32' && gikJunContents.kpi4 < '38.4')?'green':(gikJunContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi4}}
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
                              :color="(gikJulContents.kpi1 == null)?'grey-2':(gikJulContents.kpi1 >= '0' && gikJulContents.kpi1 <= '14.7')?'red':(gikJulContents.kpi1 > '14.7' && gikJulContents.kpi1 <= '19.6')?'orange':(gikJulContents.kpi1 > '19.6' && gikJulContents.kpi1 < '24.5')?'yellow-7':(gikJulContents.kpi1 >= '24.5' && gikJulContents.kpi1 < '29.4')?'green':(gikJulContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi2 == null)?'grey-2':(gikJulContents.kpi2 >= '0' && gikJulContents.kpi2 <= '19.05')?'red':(gikJulContents.kpi2 > '19.05' && gikJulContents.kpi2 <= '25.4')?'orange':(gikJulContents.kpi2 > '25.4' && gikJulContents.kpi2 < '31.75')?'yellow-7':(gikJulContents.kpi2 >= '31.75' && gikJulContents.kpi2 < '38.1')?'green':(gikJulContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi3 == null)?'grey-2':(gikJulContents.kpi3 >= '0' && gikJulContents.kpi3 <= '19.35')?'red':(gikJulContents.kpi3 > '19.35' && gikJulContents.kpi3 <= '25.8')?'orange':(gikJulContents.kpi3 > '25.8' && gikJulContents.kpi3 < '32.25')?'yellow-7':(gikJulContents.kpi3 >= '32.25' && gikJulContents.kpi3 < '38.7')?'green':(gikJulContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi4 == null)?'grey-2':(gikJulContents.kpi4 >= '0' && gikJulContents.kpi4 <= '19.2')?'red':(gikJulContents.kpi4 > '19.2' && gikJulContents.kpi4 <= '25.6')?'orange':(gikJulContents.kpi4 > '25.6' && gikJulContents.kpi4 < '32')?'yellow-7':(gikJulContents.kpi4 >= '32' && gikJulContents.kpi4 < '38.4')?'green':(gikJulContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi4}}
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
                              :color="(gikAugContents.kpi1 == null)?'grey-2':(gikAugContents.kpi1 >= '0' && gikAugContents.kpi1 <= '14.7')?'red':(gikAugContents.kpi1 > '14.7' && gikAugContents.kpi1 <= '19.6')?'orange':(gikAugContents.kpi1 > '19.6' && gikAugContents.kpi1 < '24.5')?'yellow-7':(gikAugContents.kpi1 >= '24.5' && gikAugContents.kpi1 < '29.4')?'green':(gikAugContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi2 == null)?'grey-2':(gikAugContents.kpi2 >= '0' && gikAugContents.kpi2 <= '19.05')?'red':(gikAugContents.kpi2 > '19.05' && gikAugContents.kpi2 <= '25.4')?'orange':(gikAugContents.kpi2 > '25.4' && gikAugContents.kpi2 < '31.75')?'yellow-7':(gikAugContents.kpi2 >= '31.75' && gikAugContents.kpi2 < '38.1')?'green':(gikAugContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi3 == null)?'grey-2':(gikAugContents.kpi3 >= '0' && gikAugContents.kpi3 <= '19.35')?'red':(gikAugContents.kpi3 > '19.35' && gikAugContents.kpi3 <= '25.8')?'orange':(gikAugContents.kpi3 > '25.8' && gikAugContents.kpi3 < '32.25')?'yellow-7':(gikAugContents.kpi3 >= '32.25' && gikAugContents.kpi3 < '38.7')?'green':(gikAugContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi4 == null)?'grey-2':(gikAugContents.kpi4 >= '0' && gikAugContents.kpi4 <= '19.2')?'red':(gikAugContents.kpi4 > '19.2' && gikAugContents.kpi4 <= '25.6')?'orange':(gikAugContents.kpi4 > '25.6' && gikAugContents.kpi4 < '32')?'yellow-7':(gikAugContents.kpi4 >= '32' && gikAugContents.kpi4 < '38.4')?'green':(gikAugContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi4}}
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
                              :color="(gikSepContents.kpi1 == null)?'grey-2':(gikSepContents.kpi1 >= '0' && gikSepContents.kpi1 <= '14.7')?'red':(gikSepContents.kpi1 > '14.7' && gikSepContents.kpi1 <= '19.6')?'orange':(gikSepContents.kpi1 > '19.6' && gikSepContents.kpi1 < '24.5')?'yellow-7':(gikSepContents.kpi1 >= '24.5' && gikSepContents.kpi1 < '29.4')?'green':(gikSepContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi2 == null)?'grey-2':(gikSepContents.kpi2 >= '0' && gikSepContents.kpi2 <= '19.05')?'red':(gikSepContents.kpi2 > '19.05' && gikSepContents.kpi2 <= '25.4')?'orange':(gikSepContents.kpi2 > '25.4' && gikSepContents.kpi2 < '31.75')?'yellow-7':(gikSepContents.kpi2 >= '31.75' && gikSepContents.kpi2 < '38.1')?'green':(gikSepContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi3 == null)?'grey-2':(gikSepContents.kpi3 >= '0' && gikSepContents.kpi3 <= '19.35')?'red':(gikSepContents.kpi3 > '19.35' && gikSepContents.kpi3 <= '25.8')?'orange':(gikSepContents.kpi3 > '25.8' && gikSepContents.kpi3 < '32.25')?'yellow-7':(gikSepContents.kpi3 >= '32.25' && gikSepContents.kpi3 < '38.7')?'green':(gikSepContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi4 == null)?'grey-2':(gikSepContents.kpi4 >= '0' && gikSepContents.kpi4 <= '19.2')?'red':(gikSepContents.kpi4 > '19.2' && gikSepContents.kpi4 <= '25.6')?'orange':(gikSepContents.kpi4 > '25.6' && gikSepContents.kpi4 < '32')?'yellow-7':(gikSepContents.kpi4 >= '32' && gikSepContents.kpi4 < '38.4')?'green':(gikSepContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi4}}
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
                              :color="(gikOctContents.kpi1 == null)?'grey-2':(gikOctContents.kpi1 >= '0' && gikOctContents.kpi1 <= '14.7')?'red':(gikOctContents.kpi1 > '14.7' && gikOctContents.kpi1 <= '19.6')?'orange':(gikOctContents.kpi1 > '19.6' && gikOctContents.kpi1 < '24.5')?'yellow-7':(gikOctContents.kpi1 >= '24.5' && gikOctContents.kpi1 < '29.4')?'green':(gikOctContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi2 == null)?'grey-2':(gikOctContents.kpi2 >= '0' && gikOctContents.kpi2 <= '19.05')?'red':(gikOctContents.kpi2 > '19.05' && gikOctContents.kpi2 <= '25.4')?'orange':(gikOctContents.kpi2 > '25.4' && gikOctContents.kpi2 < '31.75')?'yellow-7':(gikOctContents.kpi2 >= '31.75' && gikOctContents.kpi2 < '38.1')?'green':(gikOctContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi3 == null)?'grey-2':(gikOctContents.kpi3 >= '0' && gikOctContents.kpi3 <= '19.35')?'red':(gikOctContents.kpi3 > '19.35' && gikOctContents.kpi3 <= '25.8')?'orange':(gikOctContents.kpi3 > '25.8' && gikOctContents.kpi3 < '32.25')?'yellow-7':(gikOctContents.kpi3 >= '32.25' && gikOctContents.kpi3 < '38.7')?'green':(gikOctContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi4 == null)?'grey-2':(gikOctContents.kpi4 >= '0' && gikOctContents.kpi4 <= '19.2')?'red':(gikOctContents.kpi4 > '19.2' && gikOctContents.kpi4 <= '25.6')?'orange':(gikOctContents.kpi4 > '25.6' && gikOctContents.kpi4 < '32')?'yellow-7':(gikOctContents.kpi4 >= '32' && gikOctContents.kpi4 < '38.4')?'green':(gikOctContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi4}}
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
                              :color="(gikNovContents.kpi1 == null)?'grey-2':(gikNovContents.kpi1 >= '0' && gikNovContents.kpi1 <= '14.7')?'red':(gikNovContents.kpi1 > '14.7' && gikNovContents.kpi1 <= '19.6')?'orange':(gikNovContents.kpi1 > '19.6' && gikNovContents.kpi1 < '24.5')?'yellow-7':(gikNovContents.kpi1 >= '24.5' && gikNovContents.kpi1 < '29.4')?'green':(gikNovContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi2 == null)?'grey-2':(gikNovContents.kpi2 >= '0' && gikNovContents.kpi2 <= '19.05')?'red':(gikNovContents.kpi2 > '19.05' && gikNovContents.kpi2 <= '25.4')?'orange':(gikNovContents.kpi2 > '25.4' && gikNovContents.kpi2 < '31.75')?'yellow-7':(gikNovContents.kpi2 >= '31.75' && gikNovContents.kpi2 < '38.1')?'green':(gikNovContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi3 == null)?'grey-2':(gikNovContents.kpi3 >= '0' && gikNovContents.kpi3 <= '19.35')?'red':(gikNovContents.kpi3 > '19.35' && gikNovContents.kpi3 <= '25.8')?'orange':(gikNovContents.kpi3 > '25.8' && gikNovContents.kpi3 < '32.25')?'yellow-7':(gikNovContents.kpi3 >= '32.25' && gikNovContents.kpi3 < '38.7')?'green':(gikNovContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi4 == null)?'grey-2':(gikNovContents.kpi4 >= '0' && gikNovContents.kpi4 <= '19.2')?'red':(gikNovContents.kpi4 > '19.2' && gikNovContents.kpi4 <= '25.6')?'orange':(gikNovContents.kpi4 > '25.6' && gikNovContents.kpi4 < '32')?'yellow-7':(gikNovContents.kpi4 >= '32' && gikNovContents.kpi4 < '38.4')?'green':(gikNovContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi4}}
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
                              :color="(gikDecContents.kpi1 == null)?'grey-2':(gikDecContents.kpi1 >= '0' && gikDecContents.kpi1 <= '14.7')?'red':(gikDecContents.kpi1 > '14.7' && gikDecContents.kpi1 <= '19.6')?'orange':(gikDecContents.kpi1 > '19.6' && gikDecContents.kpi1 < '24.5')?'yellow-7':(gikDecContents.kpi1 >= '24.5' && gikDecContents.kpi1 < '29.4')?'green':(gikDecContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi2 == null)?'grey-2':(gikDecContents.kpi2 >= '0' && gikDecContents.kpi2 <= '19.05')?'red':(gikDecContents.kpi2 > '19.05' && gikDecContents.kpi2 <= '25.4')?'orange':(gikDecContents.kpi2 > '25.4' && gikDecContents.kpi2 < '31.75')?'yellow-7':(gikDecContents.kpi2 >= '31.75' && gikDecContents.kpi2 < '38.1')?'green':(gikDecContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi3 == null)?'grey-2':(gikDecContents.kpi3 >= '0' && gikDecContents.kpi3 <= '19.35')?'red':(gikDecContents.kpi3 > '19.35' && gikDecContents.kpi3 <= '25.8')?'orange':(gikDecContents.kpi3 > '25.8' && gikDecContents.kpi3 < '32.25')?'yellow-7':(gikDecContents.kpi3 >= '32.25' && gikDecContents.kpi3 < '38.7')?'green':(gikDecContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi4 == null)?'grey-2':(gikDecContents.kpi4 >= '0' && gikDecContents.kpi4 <= '19.2')?'red':(gikDecContents.kpi4 > '19.2' && gikDecContents.kpi4 <= '25.6')?'orange':(gikDecContents.kpi4 > '25.6' && gikDecContents.kpi4 < '32')?'yellow-7':(gikDecContents.kpi4 >= '32' && gikDecContents.kpi4 < '38.4')?'green':(gikDecContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/GIKlogoforTOP.png"></q-img>
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
                  <!--TABLE DONE-->
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
                              :color="(gikJanContents.kpi1 == null)?'grey-2':(gikJanContents.kpi1 >= '0' && gikJanContents.kpi1 <= '14.7')?'red':(gikJanContents.kpi1 > '14.7' && gikJanContents.kpi1 <= '19.6')?'orange':(gikJanContents.kpi1 > '19.6' && gikJanContents.kpi1 < '24.5')?'yellow-7':(gikJanContents.kpi1 >= '24.5' && gikJanContents.kpi1 < '29.4')?'green':(gikJanContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi2 == null)?'grey-2':(gikJanContents.kpi2 >= '0' && gikJanContents.kpi2 <= '19.05')?'red':(gikJanContents.kpi2 > '19.05' && gikJanContents.kpi2 <= '25.4')?'orange':(gikJanContents.kpi2 > '25.4' && gikJanContents.kpi2 < '31.75')?'yellow-7':(gikJanContents.kpi2 >= '31.75' && gikJanContents.kpi2 < '38.1')?'green':(gikJanContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi3 == null)?'grey-2':(gikJanContents.kpi3 >= '0' && gikJanContents.kpi3 <= '19.35')?'red':(gikJanContents.kpi3 > '19.35' && gikJanContents.kpi3 <= '25.8')?'orange':(gikJanContents.kpi3 > '25.8' && gikJanContents.kpi3 < '32.25')?'yellow-7':(gikJanContents.kpi3 >= '32.25' && gikJanContents.kpi3 < '38.7')?'green':(gikJanContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi4 == null)?'grey-2':(gikJanContents.kpi4 >= '0' && gikJanContents.kpi4 <= '19.2')?'red':(gikJanContents.kpi4 > '19.2' && gikJanContents.kpi4 <= '25.6')?'orange':(gikJanContents.kpi4 > '25.6' && gikJanContents.kpi4 < '32')?'yellow-7':(gikJanContents.kpi4 >= '32' && gikJanContents.kpi4 < '38.4')?'green':(gikJanContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi4}}
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
                              :color="(gikFebContents.kpi1 == null)?'grey-2':(gikFebContents.kpi1 >= '0' && gikFebContents.kpi1 <= '14.7')?'red':(gikFebContents.kpi1 > '14.7' && gikFebContents.kpi1 <= '19.6')?'orange':(gikFebContents.kpi1 > '19.6' && gikFebContents.kpi1 < '24.5')?'yellow-7':(gikFebContents.kpi1 >= '24.5' && gikFebContents.kpi1 < '29.4')?'green':(gikFebContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi2 == null)?'grey-2':(gikFebContents.kpi2 >= '0' && gikFebContents.kpi2 <= '19.05')?'red':(gikFebContents.kpi2 > '19.05' && gikFebContents.kpi2 <= '25.4')?'orange':(gikFebContents.kpi2 > '25.4' && gikFebContents.kpi2 < '31.75')?'yellow-7':(gikFebContents.kpi2 >= '31.75' && gikFebContents.kpi2 < '38.1')?'green':(gikFebContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi3 == null)?'grey-2':(gikFebContents.kpi3 >= '0' && gikFebContents.kpi3 <= '19.35')?'red':(gikFebContents.kpi3 > '19.35' && gikFebContents.kpi3 <= '25.8')?'orange':(gikFebContents.kpi3 > '25.8' && gikFebContents.kpi3 < '32.25')?'yellow-7':(gikFebContents.kpi3 >= '32.25' && gikFebContents.kpi3 < '38.7')?'green':(gikFebContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi4 == null)?'grey-2':(gikFebContents.kpi4 >= '0' && gikFebContents.kpi4 <= '19.2')?'red':(gikFebContents.kpi4 > '19.2' && gikFebContents.kpi4 <= '25.6')?'orange':(gikFebContents.kpi4 > '25.6' && gikFebContents.kpi4 < '32')?'yellow-7':(gikFebContents.kpi4 >= '32' && gikFebContents.kpi4 < '38.4')?'green':(gikFebContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi4}}
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
                              :color="(gikMarContents.kpi1 == null)?'grey-2':(gikMarContents.kpi1 >= '0' && gikMarContents.kpi1 <= '14.7')?'red':(gikMarContents.kpi1 > '14.7' && gikMarContents.kpi1 <= '19.6')?'orange':(gikMarContents.kpi1 > '19.6' && gikMarContents.kpi1 < '24.5')?'yellow-7':(gikMarContents.kpi1 >= '24.5' && gikMarContents.kpi1 < '29.4')?'green':(gikMarContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi2 == null)?'grey-2':(gikMarContents.kpi2 >= '0' && gikMarContents.kpi2 <= '19.05')?'red':(gikMarContents.kpi2 > '19.05' && gikMarContents.kpi2 <= '25.4')?'orange':(gikMarContents.kpi2 > '25.4' && gikMarContents.kpi2 < '31.75')?'yellow-7':(gikMarContents.kpi2 >= '31.75' && gikMarContents.kpi2 < '38.1')?'green':(gikMarContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi3 == null)?'grey-2':(gikMarContents.kpi3 >= '0' && gikMarContents.kpi3 <= '19.35')?'red':(gikMarContents.kpi3 > '19.35' && gikMarContents.kpi3 <= '25.8')?'orange':(gikMarContents.kpi3 > '25.8' && gikMarContents.kpi3 < '32.25')?'yellow-7':(gikMarContents.kpi3 >= '32.25' && gikMarContents.kpi3 < '38.7')?'green':(gikMarContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi4 == null)?'grey-2':(gikMarContents.kpi4 >= '0' && gikMarContents.kpi4 <= '19.2')?'red':(gikMarContents.kpi4 > '19.2' && gikMarContents.kpi4 <= '25.6')?'orange':(gikMarContents.kpi4 > '25.6' && gikMarContents.kpi4 < '32')?'yellow-7':(gikMarContents.kpi4 >= '32' && gikMarContents.kpi4 < '38.4')?'green':(gikMarContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi4}}
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
                              :color="(gikAprContents.kpi1 == null)?'grey-2':(gikAprContents.kpi1 >= '0' && gikAprContents.kpi1 <= '14.7')?'red':(gikAprContents.kpi1 > '14.7' && gikAprContents.kpi1 <= '19.6')?'orange':(gikAprContents.kpi1 > '19.6' && gikAprContents.kpi1 < '24.5')?'yellow-7':(gikAprContents.kpi1 >= '24.5' && gikAprContents.kpi1 < '29.4')?'green':(gikAprContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi2 == null)?'grey-2':(gikAprContents.kpi2 >= '0' && gikAprContents.kpi2 <= '19.05')?'red':(gikAprContents.kpi2 > '19.05' && gikAprContents.kpi2 <= '25.4')?'orange':(gikAprContents.kpi2 > '25.4' && gikAprContents.kpi2 < '31.75')?'yellow-7':(gikAprContents.kpi2 >= '31.75' && gikAprContents.kpi2 < '38.1')?'green':(gikAprContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi3 == null)?'grey-2':(gikAprContents.kpi3 >= '0' && gikAprContents.kpi3 <= '19.35')?'red':(gikAprContents.kpi3 > '19.35' && gikAprContents.kpi3 <= '25.8')?'orange':(gikAprContents.kpi3 > '25.8' && gikAprContents.kpi3 < '32.25')?'yellow-7':(gikAprContents.kpi3 >= '32.25' && gikAprContents.kpi3 < '38.7')?'green':(gikAprContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi4 == null)?'grey-2':(gikAprContents.kpi4 >= '0' && gikAprContents.kpi4 <= '19.2')?'red':(gikAprContents.kpi4 > '19.2' && gikAprContents.kpi4 <= '25.6')?'orange':(gikAprContents.kpi4 > '25.6' && gikAprContents.kpi4 < '32')?'yellow-7':(gikAprContents.kpi4 >= '32' && gikAprContents.kpi4 < '38.4')?'green':(gikAprContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi4}}
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
                              :color="(gikMayContents.kpi1 == null)?'grey-2':(gikMayContents.kpi1 >= '0' && gikMayContents.kpi1 <= '14.7')?'red':(gikMayContents.kpi1 > '14.7' && gikMayContents.kpi1 <= '19.6')?'orange':(gikMayContents.kpi1 > '19.6' && gikMayContents.kpi1 < '24.5')?'yellow-7':(gikMayContents.kpi1 >= '24.5' && gikMayContents.kpi1 < '29.4')?'green':(gikMayContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi2 == null)?'grey-2':(gikMayContents.kpi2 >= '0' && gikMayContents.kpi2 <= '19.05')?'red':(gikMayContents.kpi2 > '19.05' && gikMayContents.kpi2 <= '25.4')?'orange':(gikMayContents.kpi2 > '25.4' && gikMayContents.kpi2 < '31.75')?'yellow-7':(gikMayContents.kpi2 >= '31.75' && gikMayContents.kpi2 < '38.1')?'green':(gikMayContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi3 == null)?'grey-2':(gikMayContents.kpi3 >= '0' && gikMayContents.kpi3 <= '19.35')?'red':(gikMayContents.kpi3 > '19.35' && gikMayContents.kpi3 <= '25.8')?'orange':(gikMayContents.kpi3 > '25.8' && gikMayContents.kpi3 < '32.25')?'yellow-7':(gikMayContents.kpi3 >= '32.25' && gikMayContents.kpi3 < '38.7')?'green':(gikMayContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi4 == null)?'grey-2':(gikMayContents.kpi4 >= '0' && gikMayContents.kpi4 <= '19.2')?'red':(gikMayContents.kpi4 > '19.2' && gikMayContents.kpi4 <= '25.6')?'orange':(gikMayContents.kpi4 > '25.6' && gikMayContents.kpi4 < '32')?'yellow-7':(gikMayContents.kpi4 >= '32' && gikMayContents.kpi4 < '38.4')?'green':(gikMayContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi4}}
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
                              :color="(gikJunContents.kpi1 == null)?'grey-2':(gikJunContents.kpi1 >= '0' && gikJunContents.kpi1 <= '14.7')?'red':(gikJunContents.kpi1 > '14.7' && gikJunContents.kpi1 <= '19.6')?'orange':(gikJunContents.kpi1 > '19.6' && gikJunContents.kpi1 < '24.5')?'yellow-7':(gikJunContents.kpi1 >= '24.5' && gikJunContents.kpi1 < '29.4')?'green':(gikJunContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi2 == null)?'grey-2':(gikJunContents.kpi2 >= '0' && gikJunContents.kpi2 <= '19.05')?'red':(gikJunContents.kpi2 > '19.05' && gikJunContents.kpi2 <= '25.4')?'orange':(gikJunContents.kpi2 > '25.4' && gikJunContents.kpi2 < '31.75')?'yellow-7':(gikJunContents.kpi2 >= '31.75' && gikJunContents.kpi2 < '38.1')?'green':(gikJunContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi3 == null)?'grey-2':(gikJunContents.kpi3 >= '0' && gikJunContents.kpi3 <= '19.35')?'red':(gikJunContents.kpi3 > '19.35' && gikJunContents.kpi3 <= '25.8')?'orange':(gikJunContents.kpi3 > '25.8' && gikJunContents.kpi3 < '32.25')?'yellow-7':(gikJunContents.kpi3 >= '32.25' && gikJunContents.kpi3 < '38.7')?'green':(gikJunContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi4 == null)?'grey-2':(gikJunContents.kpi4 >= '0' && gikJunContents.kpi4 <= '19.2')?'red':(gikJunContents.kpi4 > '19.2' && gikJunContents.kpi4 <= '25.6')?'orange':(gikJunContents.kpi4 > '25.6' && gikJunContents.kpi4 < '32')?'yellow-7':(gikJunContents.kpi4 >= '32' && gikJunContents.kpi4 < '38.4')?'green':(gikJunContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi4}}
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
                              :color="(gikJulContents.kpi1 == null)?'grey-2':(gikJulContents.kpi1 >= '0' && gikJulContents.kpi1 <= '14.7')?'red':(gikJulContents.kpi1 > '14.7' && gikJulContents.kpi1 <= '19.6')?'orange':(gikJulContents.kpi1 > '19.6' && gikJulContents.kpi1 < '24.5')?'yellow-7':(gikJulContents.kpi1 >= '24.5' && gikJulContents.kpi1 < '29.4')?'green':(gikJulContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi2 == null)?'grey-2':(gikJulContents.kpi2 >= '0' && gikJulContents.kpi2 <= '19.05')?'red':(gikJulContents.kpi2 > '19.05' && gikJulContents.kpi2 <= '25.4')?'orange':(gikJulContents.kpi2 > '25.4' && gikJulContents.kpi2 < '31.75')?'yellow-7':(gikJulContents.kpi2 >= '31.75' && gikJulContents.kpi2 < '38.1')?'green':(gikJulContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi3 == null)?'grey-2':(gikJulContents.kpi3 >= '0' && gikJulContents.kpi3 <= '19.35')?'red':(gikJulContents.kpi3 > '19.35' && gikJulContents.kpi3 <= '25.8')?'orange':(gikJulContents.kpi3 > '25.8' && gikJulContents.kpi3 < '32.25')?'yellow-7':(gikJulContents.kpi3 >= '32.25' && gikJulContents.kpi3 < '38.7')?'green':(gikJulContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi4 == null)?'grey-2':(gikJulContents.kpi4 >= '0' && gikJulContents.kpi4 <= '19.2')?'red':(gikJulContents.kpi4 > '19.2' && gikJulContents.kpi4 <= '25.6')?'orange':(gikJulContents.kpi4 > '25.6' && gikJulContents.kpi4 < '32')?'yellow-7':(gikJulContents.kpi4 >= '32' && gikJulContents.kpi4 < '38.4')?'green':(gikJulContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi4}}
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
                              :color="(gikAugContents.kpi1 == null)?'grey-2':(gikAugContents.kpi1 >= '0' && gikAugContents.kpi1 <= '14.7')?'red':(gikAugContents.kpi1 > '14.7' && gikAugContents.kpi1 <= '19.6')?'orange':(gikAugContents.kpi1 > '19.6' && gikAugContents.kpi1 < '24.5')?'yellow-7':(gikAugContents.kpi1 >= '24.5' && gikAugContents.kpi1 < '29.4')?'green':(gikAugContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi2 == null)?'grey-2':(gikAugContents.kpi2 >= '0' && gikAugContents.kpi2 <= '19.05')?'red':(gikAugContents.kpi2 > '19.05' && gikAugContents.kpi2 <= '25.4')?'orange':(gikAugContents.kpi2 > '25.4' && gikAugContents.kpi2 < '31.75')?'yellow-7':(gikAugContents.kpi2 >= '31.75' && gikAugContents.kpi2 < '38.1')?'green':(gikAugContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi3 == null)?'grey-2':(gikAugContents.kpi3 >= '0' && gikAugContents.kpi3 <= '19.35')?'red':(gikAugContents.kpi3 > '19.35' && gikAugContents.kpi3 <= '25.8')?'orange':(gikAugContents.kpi3 > '25.8' && gikAugContents.kpi3 < '32.25')?'yellow-7':(gikAugContents.kpi3 >= '32.25' && gikAugContents.kpi3 < '38.7')?'green':(gikAugContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi4 == null)?'grey-2':(gikAugContents.kpi4 >= '0' && gikAugContents.kpi4 <= '19.2')?'red':(gikAugContents.kpi4 > '19.2' && gikAugContents.kpi4 <= '25.6')?'orange':(gikAugContents.kpi4 > '25.6' && gikAugContents.kpi4 < '32')?'yellow-7':(gikAugContents.kpi4 >= '32' && gikAugContents.kpi4 < '38.4')?'green':(gikAugContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi4}}
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
                              :color="(gikSepContents.kpi1 == null)?'grey-2':(gikSepContents.kpi1 >= '0' && gikSepContents.kpi1 <= '14.7')?'red':(gikSepContents.kpi1 > '14.7' && gikSepContents.kpi1 <= '19.6')?'orange':(gikSepContents.kpi1 > '19.6' && gikSepContents.kpi1 < '24.5')?'yellow-7':(gikSepContents.kpi1 >= '24.5' && gikSepContents.kpi1 < '29.4')?'green':(gikSepContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi2 == null)?'grey-2':(gikSepContents.kpi2 >= '0' && gikSepContents.kpi2 <= '19.05')?'red':(gikSepContents.kpi2 > '19.05' && gikSepContents.kpi2 <= '25.4')?'orange':(gikSepContents.kpi2 > '25.4' && gikSepContents.kpi2 < '31.75')?'yellow-7':(gikSepContents.kpi2 >= '31.75' && gikSepContents.kpi2 < '38.1')?'green':(gikSepContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi3 == null)?'grey-2':(gikSepContents.kpi3 >= '0' && gikSepContents.kpi3 <= '19.35')?'red':(gikSepContents.kpi3 > '19.35' && gikSepContents.kpi3 <= '25.8')?'orange':(gikSepContents.kpi3 > '25.8' && gikSepContents.kpi3 < '32.25')?'yellow-7':(gikSepContents.kpi3 >= '32.25' && gikSepContents.kpi3 < '38.7')?'green':(gikSepContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi4 == null)?'grey-2':(gikSepContents.kpi4 >= '0' && gikSepContents.kpi4 <= '19.2')?'red':(gikSepContents.kpi4 > '19.2' && gikSepContents.kpi4 <= '25.6')?'orange':(gikSepContents.kpi4 > '25.6' && gikSepContents.kpi4 < '32')?'yellow-7':(gikSepContents.kpi4 >= '32' && gikSepContents.kpi4 < '38.4')?'green':(gikSepContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi4}}
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
                              :color="(gikOctContents.kpi1 == null)?'grey-2':(gikOctContents.kpi1 >= '0' && gikOctContents.kpi1 <= '14.7')?'red':(gikOctContents.kpi1 > '14.7' && gikOctContents.kpi1 <= '19.6')?'orange':(gikOctContents.kpi1 > '19.6' && gikOctContents.kpi1 < '24.5')?'yellow-7':(gikOctContents.kpi1 >= '24.5' && gikOctContents.kpi1 < '29.4')?'green':(gikOctContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi2 == null)?'grey-2':(gikOctContents.kpi2 >= '0' && gikOctContents.kpi2 <= '19.05')?'red':(gikOctContents.kpi2 > '19.05' && gikOctContents.kpi2 <= '25.4')?'orange':(gikOctContents.kpi2 > '25.4' && gikOctContents.kpi2 < '31.75')?'yellow-7':(gikOctContents.kpi2 >= '31.75' && gikOctContents.kpi2 < '38.1')?'green':(gikOctContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi3 == null)?'grey-2':(gikOctContents.kpi3 >= '0' && gikOctContents.kpi3 <= '19.35')?'red':(gikOctContents.kpi3 > '19.35' && gikOctContents.kpi3 <= '25.8')?'orange':(gikOctContents.kpi3 > '25.8' && gikOctContents.kpi3 < '32.25')?'yellow-7':(gikOctContents.kpi3 >= '32.25' && gikOctContents.kpi3 < '38.7')?'green':(gikOctContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi4 == null)?'grey-2':(gikOctContents.kpi4 >= '0' && gikOctContents.kpi4 <= '19.2')?'red':(gikOctContents.kpi4 > '19.2' && gikOctContents.kpi4 <= '25.6')?'orange':(gikOctContents.kpi4 > '25.6' && gikOctContents.kpi4 < '32')?'yellow-7':(gikOctContents.kpi4 >= '32' && gikOctContents.kpi4 < '38.4')?'green':(gikOctContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi4}}
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
                              :color="(gikNovContents.kpi1 == null)?'grey-2':(gikNovContents.kpi1 >= '0' && gikNovContents.kpi1 <= '14.7')?'red':(gikNovContents.kpi1 > '14.7' && gikNovContents.kpi1 <= '19.6')?'orange':(gikNovContents.kpi1 > '19.6' && gikNovContents.kpi1 < '24.5')?'yellow-7':(gikNovContents.kpi1 >= '24.5' && gikNovContents.kpi1 < '29.4')?'green':(gikNovContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi2 == null)?'grey-2':(gikNovContents.kpi2 >= '0' && gikNovContents.kpi2 <= '19.05')?'red':(gikNovContents.kpi2 > '19.05' && gikNovContents.kpi2 <= '25.4')?'orange':(gikNovContents.kpi2 > '25.4' && gikNovContents.kpi2 < '31.75')?'yellow-7':(gikNovContents.kpi2 >= '31.75' && gikNovContents.kpi2 < '38.1')?'green':(gikNovContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi3 == null)?'grey-2':(gikNovContents.kpi3 >= '0' && gikNovContents.kpi3 <= '19.35')?'red':(gikNovContents.kpi3 > '19.35' && gikNovContents.kpi3 <= '25.8')?'orange':(gikNovContents.kpi3 > '25.8' && gikNovContents.kpi3 < '32.25')?'yellow-7':(gikNovContents.kpi3 >= '32.25' && gikNovContents.kpi3 < '38.7')?'green':(gikNovContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi4 == null)?'grey-2':(gikNovContents.kpi4 >= '0' && gikNovContents.kpi4 <= '19.2')?'red':(gikNovContents.kpi4 > '19.2' && gikNovContents.kpi4 <= '25.6')?'orange':(gikNovContents.kpi4 > '25.6' && gikNovContents.kpi4 < '32')?'yellow-7':(gikNovContents.kpi4 >= '32' && gikNovContents.kpi4 < '38.4')?'green':(gikNovContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi4}}
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
                              :color="(gikDecContents.kpi1 == null)?'grey-2':(gikDecContents.kpi1 >= '0' && gikDecContents.kpi1 <= '14.7')?'red':(gikDecContents.kpi1 > '14.7' && gikDecContents.kpi1 <= '19.6')?'orange':(gikDecContents.kpi1 > '19.6' && gikDecContents.kpi1 < '24.5')?'yellow-7':(gikDecContents.kpi1 >= '24.5' && gikDecContents.kpi1 < '29.4')?'green':(gikDecContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi2 == null)?'grey-2':(gikDecContents.kpi2 >= '0' && gikDecContents.kpi2 <= '19.05')?'red':(gikDecContents.kpi2 > '19.05' && gikDecContents.kpi2 <= '25.4')?'orange':(gikDecContents.kpi2 > '25.4' && gikDecContents.kpi2 < '31.75')?'yellow-7':(gikDecContents.kpi2 >= '31.75' && gikDecContents.kpi2 < '38.1')?'green':(gikDecContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi3 == null)?'grey-2':(gikDecContents.kpi3 >= '0' && gikDecContents.kpi3 <= '19.35')?'red':(gikDecContents.kpi3 > '19.35' && gikDecContents.kpi3 <= '25.8')?'orange':(gikDecContents.kpi3 > '25.8' && gikDecContents.kpi3 < '32.25')?'yellow-7':(gikDecContents.kpi3 >= '32.25' && gikDecContents.kpi3 < '38.7')?'green':(gikDecContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi4 == null)?'grey-2':(gikDecContents.kpi4 >= '0' && gikDecContents.kpi4 <= '19.2')?'red':(gikDecContents.kpi4 > '19.2' && gikDecContents.kpi4 <= '25.6')?'orange':(gikDecContents.kpi4 > '25.6' && gikDecContents.kpi4 < '32')?'yellow-7':(gikDecContents.kpi4 >= '32' && gikDecContents.kpi4 < '38.4')?'green':(gikDecContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/GIKlogoforTOP.png"></q-img>
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
                  <!--TABLE DONE-->
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
                              :color="(gikJanContents.kpi1 == null)?'grey-2':(gikJanContents.kpi1 >= '0' && gikJanContents.kpi1 <= '14.7')?'red':(gikJanContents.kpi1 > '14.7' && gikJanContents.kpi1 <= '19.6')?'orange':(gikJanContents.kpi1 > '19.6' && gikJanContents.kpi1 < '24.5')?'yellow-7':(gikJanContents.kpi1 >= '24.5' && gikJanContents.kpi1 < '29.4')?'green':(gikJanContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi2 == null)?'grey-2':(gikJanContents.kpi2 >= '0' && gikJanContents.kpi2 <= '19.05')?'red':(gikJanContents.kpi2 > '19.05' && gikJanContents.kpi2 <= '25.4')?'orange':(gikJanContents.kpi2 > '25.4' && gikJanContents.kpi2 < '31.75')?'yellow-7':(gikJanContents.kpi2 >= '31.75' && gikJanContents.kpi2 < '38.1')?'green':(gikJanContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi3 == null)?'grey-2':(gikJanContents.kpi3 >= '0' && gikJanContents.kpi3 <= '19.35')?'red':(gikJanContents.kpi3 > '19.35' && gikJanContents.kpi3 <= '25.8')?'orange':(gikJanContents.kpi3 > '25.8' && gikJanContents.kpi3 < '32.25')?'yellow-7':(gikJanContents.kpi3 >= '32.25' && gikJanContents.kpi3 < '38.7')?'green':(gikJanContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi4 == null)?'grey-2':(gikJanContents.kpi4 >= '0' && gikJanContents.kpi4 <= '19.2')?'red':(gikJanContents.kpi4 > '19.2' && gikJanContents.kpi4 <= '25.6')?'orange':(gikJanContents.kpi4 > '25.6' && gikJanContents.kpi4 < '32')?'yellow-7':(gikJanContents.kpi4 >= '32' && gikJanContents.kpi4 < '38.4')?'green':(gikJanContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi4}}
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
                              :color="(gikFebContents.kpi1 == null)?'grey-2':(gikFebContents.kpi1 >= '0' && gikFebContents.kpi1 <= '14.7')?'red':(gikFebContents.kpi1 > '14.7' && gikFebContents.kpi1 <= '19.6')?'orange':(gikFebContents.kpi1 > '19.6' && gikFebContents.kpi1 < '24.5')?'yellow-7':(gikFebContents.kpi1 >= '24.5' && gikFebContents.kpi1 < '29.4')?'green':(gikFebContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi2 == null)?'grey-2':(gikFebContents.kpi2 >= '0' && gikFebContents.kpi2 <= '19.05')?'red':(gikFebContents.kpi2 > '19.05' && gikFebContents.kpi2 <= '25.4')?'orange':(gikFebContents.kpi2 > '25.4' && gikFebContents.kpi2 < '31.75')?'yellow-7':(gikFebContents.kpi2 >= '31.75' && gikFebContents.kpi2 < '38.1')?'green':(gikFebContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi3 == null)?'grey-2':(gikFebContents.kpi3 >= '0' && gikFebContents.kpi3 <= '19.35')?'red':(gikFebContents.kpi3 > '19.35' && gikFebContents.kpi3 <= '25.8')?'orange':(gikFebContents.kpi3 > '25.8' && gikFebContents.kpi3 < '32.25')?'yellow-7':(gikFebContents.kpi3 >= '32.25' && gikFebContents.kpi3 < '38.7')?'green':(gikFebContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi4 == null)?'grey-2':(gikFebContents.kpi4 >= '0' && gikFebContents.kpi4 <= '19.2')?'red':(gikFebContents.kpi4 > '19.2' && gikFebContents.kpi4 <= '25.6')?'orange':(gikFebContents.kpi4 > '25.6' && gikFebContents.kpi4 < '32')?'yellow-7':(gikFebContents.kpi4 >= '32' && gikFebContents.kpi4 < '38.4')?'green':(gikFebContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi4}}
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
                              :color="(gikMarContents.kpi1 == null)?'grey-2':(gikMarContents.kpi1 >= '0' && gikMarContents.kpi1 <= '14.7')?'red':(gikMarContents.kpi1 > '14.7' && gikMarContents.kpi1 <= '19.6')?'orange':(gikMarContents.kpi1 > '19.6' && gikMarContents.kpi1 < '24.5')?'yellow-7':(gikMarContents.kpi1 >= '24.5' && gikMarContents.kpi1 < '29.4')?'green':(gikMarContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi2 == null)?'grey-2':(gikMarContents.kpi2 >= '0' && gikMarContents.kpi2 <= '19.05')?'red':(gikMarContents.kpi2 > '19.05' && gikMarContents.kpi2 <= '25.4')?'orange':(gikMarContents.kpi2 > '25.4' && gikMarContents.kpi2 < '31.75')?'yellow-7':(gikMarContents.kpi2 >= '31.75' && gikMarContents.kpi2 < '38.1')?'green':(gikMarContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi3 == null)?'grey-2':(gikMarContents.kpi3 >= '0' && gikMarContents.kpi3 <= '19.35')?'red':(gikMarContents.kpi3 > '19.35' && gikMarContents.kpi3 <= '25.8')?'orange':(gikMarContents.kpi3 > '25.8' && gikMarContents.kpi3 < '32.25')?'yellow-7':(gikMarContents.kpi3 >= '32.25' && gikMarContents.kpi3 < '38.7')?'green':(gikMarContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi4 == null)?'grey-2':(gikMarContents.kpi4 >= '0' && gikMarContents.kpi4 <= '19.2')?'red':(gikMarContents.kpi4 > '19.2' && gikMarContents.kpi4 <= '25.6')?'orange':(gikMarContents.kpi4 > '25.6' && gikMarContents.kpi4 < '32')?'yellow-7':(gikMarContents.kpi4 >= '32' && gikMarContents.kpi4 < '38.4')?'green':(gikMarContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi4}}
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
                              :color="(gikAprContents.kpi1 == null)?'grey-2':(gikAprContents.kpi1 >= '0' && gikAprContents.kpi1 <= '14.7')?'red':(gikAprContents.kpi1 > '14.7' && gikAprContents.kpi1 <= '19.6')?'orange':(gikAprContents.kpi1 > '19.6' && gikAprContents.kpi1 < '24.5')?'yellow-7':(gikAprContents.kpi1 >= '24.5' && gikAprContents.kpi1 < '29.4')?'green':(gikAprContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi2 == null)?'grey-2':(gikAprContents.kpi2 >= '0' && gikAprContents.kpi2 <= '19.05')?'red':(gikAprContents.kpi2 > '19.05' && gikAprContents.kpi2 <= '25.4')?'orange':(gikAprContents.kpi2 > '25.4' && gikAprContents.kpi2 < '31.75')?'yellow-7':(gikAprContents.kpi2 >= '31.75' && gikAprContents.kpi2 < '38.1')?'green':(gikAprContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi3 == null)?'grey-2':(gikAprContents.kpi3 >= '0' && gikAprContents.kpi3 <= '19.35')?'red':(gikAprContents.kpi3 > '19.35' && gikAprContents.kpi3 <= '25.8')?'orange':(gikAprContents.kpi3 > '25.8' && gikAprContents.kpi3 < '32.25')?'yellow-7':(gikAprContents.kpi3 >= '32.25' && gikAprContents.kpi3 < '38.7')?'green':(gikAprContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi4 == null)?'grey-2':(gikAprContents.kpi4 >= '0' && gikAprContents.kpi4 <= '19.2')?'red':(gikAprContents.kpi4 > '19.2' && gikAprContents.kpi4 <= '25.6')?'orange':(gikAprContents.kpi4 > '25.6' && gikAprContents.kpi4 < '32')?'yellow-7':(gikAprContents.kpi4 >= '32' && gikAprContents.kpi4 < '38.4')?'green':(gikAprContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi4}}
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
                              :color="(gikMayContents.kpi1 == null)?'grey-2':(gikMayContents.kpi1 >= '0' && gikMayContents.kpi1 <= '14.7')?'red':(gikMayContents.kpi1 > '14.7' && gikMayContents.kpi1 <= '19.6')?'orange':(gikMayContents.kpi1 > '19.6' && gikMayContents.kpi1 < '24.5')?'yellow-7':(gikMayContents.kpi1 >= '24.5' && gikMayContents.kpi1 < '29.4')?'green':(gikMayContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi2 == null)?'grey-2':(gikMayContents.kpi2 >= '0' && gikMayContents.kpi2 <= '19.05')?'red':(gikMayContents.kpi2 > '19.05' && gikMayContents.kpi2 <= '25.4')?'orange':(gikMayContents.kpi2 > '25.4' && gikMayContents.kpi2 < '31.75')?'yellow-7':(gikMayContents.kpi2 >= '31.75' && gikMayContents.kpi2 < '38.1')?'green':(gikMayContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi3 == null)?'grey-2':(gikMayContents.kpi3 >= '0' && gikMayContents.kpi3 <= '19.35')?'red':(gikMayContents.kpi3 > '19.35' && gikMayContents.kpi3 <= '25.8')?'orange':(gikMayContents.kpi3 > '25.8' && gikMayContents.kpi3 < '32.25')?'yellow-7':(gikMayContents.kpi3 >= '32.25' && gikMayContents.kpi3 < '38.7')?'green':(gikMayContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi4 == null)?'grey-2':(gikMayContents.kpi4 >= '0' && gikMayContents.kpi4 <= '19.2')?'red':(gikMayContents.kpi4 > '19.2' && gikMayContents.kpi4 <= '25.6')?'orange':(gikMayContents.kpi4 > '25.6' && gikMayContents.kpi4 < '32')?'yellow-7':(gikMayContents.kpi4 >= '32' && gikMayContents.kpi4 < '38.4')?'green':(gikMayContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi4}}
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
                              :color="(gikJunContents.kpi1 == null)?'grey-2':(gikJunContents.kpi1 >= '0' && gikJunContents.kpi1 <= '14.7')?'red':(gikJunContents.kpi1 > '14.7' && gikJunContents.kpi1 <= '19.6')?'orange':(gikJunContents.kpi1 > '19.6' && gikJunContents.kpi1 < '24.5')?'yellow-7':(gikJunContents.kpi1 >= '24.5' && gikJunContents.kpi1 < '29.4')?'green':(gikJunContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi2 == null)?'grey-2':(gikJunContents.kpi2 >= '0' && gikJunContents.kpi2 <= '19.05')?'red':(gikJunContents.kpi2 > '19.05' && gikJunContents.kpi2 <= '25.4')?'orange':(gikJunContents.kpi2 > '25.4' && gikJunContents.kpi2 < '31.75')?'yellow-7':(gikJunContents.kpi2 >= '31.75' && gikJunContents.kpi2 < '38.1')?'green':(gikJunContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi3 == null)?'grey-2':(gikJunContents.kpi3 >= '0' && gikJunContents.kpi3 <= '19.35')?'red':(gikJunContents.kpi3 > '19.35' && gikJunContents.kpi3 <= '25.8')?'orange':(gikJunContents.kpi3 > '25.8' && gikJunContents.kpi3 < '32.25')?'yellow-7':(gikJunContents.kpi3 >= '32.25' && gikJunContents.kpi3 < '38.7')?'green':(gikJunContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi4 == null)?'grey-2':(gikJunContents.kpi4 >= '0' && gikJunContents.kpi4 <= '19.2')?'red':(gikJunContents.kpi4 > '19.2' && gikJunContents.kpi4 <= '25.6')?'orange':(gikJunContents.kpi4 > '25.6' && gikJunContents.kpi4 < '32')?'yellow-7':(gikJunContents.kpi4 >= '32' && gikJunContents.kpi4 < '38.4')?'green':(gikJunContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi4}}
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
                              :color="(gikJulContents.kpi1 == null)?'grey-2':(gikJulContents.kpi1 >= '0' && gikJulContents.kpi1 <= '14.7')?'red':(gikJulContents.kpi1 > '14.7' && gikJulContents.kpi1 <= '19.6')?'orange':(gikJulContents.kpi1 > '19.6' && gikJulContents.kpi1 < '24.5')?'yellow-7':(gikJulContents.kpi1 >= '24.5' && gikJulContents.kpi1 < '29.4')?'green':(gikJulContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi2 == null)?'grey-2':(gikJulContents.kpi2 >= '0' && gikJulContents.kpi2 <= '19.05')?'red':(gikJulContents.kpi2 > '19.05' && gikJulContents.kpi2 <= '25.4')?'orange':(gikJulContents.kpi2 > '25.4' && gikJulContents.kpi2 < '31.75')?'yellow-7':(gikJulContents.kpi2 >= '31.75' && gikJulContents.kpi2 < '38.1')?'green':(gikJulContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi3 == null)?'grey-2':(gikJulContents.kpi3 >= '0' && gikJulContents.kpi3 <= '19.35')?'red':(gikJulContents.kpi3 > '19.35' && gikJulContents.kpi3 <= '25.8')?'orange':(gikJulContents.kpi3 > '25.8' && gikJulContents.kpi3 < '32.25')?'yellow-7':(gikJulContents.kpi3 >= '32.25' && gikJulContents.kpi3 < '38.7')?'green':(gikJulContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi4 == null)?'grey-2':(gikJulContents.kpi4 >= '0' && gikJulContents.kpi4 <= '19.2')?'red':(gikJulContents.kpi4 > '19.2' && gikJulContents.kpi4 <= '25.6')?'orange':(gikJulContents.kpi4 > '25.6' && gikJulContents.kpi4 < '32')?'yellow-7':(gikJulContents.kpi4 >= '32' && gikJulContents.kpi4 < '38.4')?'green':(gikJulContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi4}}
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
                              :color="(gikAugContents.kpi1 == null)?'grey-2':(gikAugContents.kpi1 >= '0' && gikAugContents.kpi1 <= '14.7')?'red':(gikAugContents.kpi1 > '14.7' && gikAugContents.kpi1 <= '19.6')?'orange':(gikAugContents.kpi1 > '19.6' && gikAugContents.kpi1 < '24.5')?'yellow-7':(gikAugContents.kpi1 >= '24.5' && gikAugContents.kpi1 < '29.4')?'green':(gikAugContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi2 == null)?'grey-2':(gikAugContents.kpi2 >= '0' && gikAugContents.kpi2 <= '19.05')?'red':(gikAugContents.kpi2 > '19.05' && gikAugContents.kpi2 <= '25.4')?'orange':(gikAugContents.kpi2 > '25.4' && gikAugContents.kpi2 < '31.75')?'yellow-7':(gikAugContents.kpi2 >= '31.75' && gikAugContents.kpi2 < '38.1')?'green':(gikAugContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi3 == null)?'grey-2':(gikAugContents.kpi3 >= '0' && gikAugContents.kpi3 <= '19.35')?'red':(gikAugContents.kpi3 > '19.35' && gikAugContents.kpi3 <= '25.8')?'orange':(gikAugContents.kpi3 > '25.8' && gikAugContents.kpi3 < '32.25')?'yellow-7':(gikAugContents.kpi3 >= '32.25' && gikAugContents.kpi3 < '38.7')?'green':(gikAugContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi4 == null)?'grey-2':(gikAugContents.kpi4 >= '0' && gikAugContents.kpi4 <= '19.2')?'red':(gikAugContents.kpi4 > '19.2' && gikAugContents.kpi4 <= '25.6')?'orange':(gikAugContents.kpi4 > '25.6' && gikAugContents.kpi4 < '32')?'yellow-7':(gikAugContents.kpi4 >= '32' && gikAugContents.kpi4 < '38.4')?'green':(gikAugContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi4}}
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
                              :color="(gikSepContents.kpi1 == null)?'grey-2':(gikSepContents.kpi1 >= '0' && gikSepContents.kpi1 <= '14.7')?'red':(gikSepContents.kpi1 > '14.7' && gikSepContents.kpi1 <= '19.6')?'orange':(gikSepContents.kpi1 > '19.6' && gikSepContents.kpi1 < '24.5')?'yellow-7':(gikSepContents.kpi1 >= '24.5' && gikSepContents.kpi1 < '29.4')?'green':(gikSepContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi2 == null)?'grey-2':(gikSepContents.kpi2 >= '0' && gikSepContents.kpi2 <= '19.05')?'red':(gikSepContents.kpi2 > '19.05' && gikSepContents.kpi2 <= '25.4')?'orange':(gikSepContents.kpi2 > '25.4' && gikSepContents.kpi2 < '31.75')?'yellow-7':(gikSepContents.kpi2 >= '31.75' && gikSepContents.kpi2 < '38.1')?'green':(gikSepContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi3 == null)?'grey-2':(gikSepContents.kpi3 >= '0' && gikSepContents.kpi3 <= '19.35')?'red':(gikSepContents.kpi3 > '19.35' && gikSepContents.kpi3 <= '25.8')?'orange':(gikSepContents.kpi3 > '25.8' && gikSepContents.kpi3 < '32.25')?'yellow-7':(gikSepContents.kpi3 >= '32.25' && gikSepContents.kpi3 < '38.7')?'green':(gikSepContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi4 == null)?'grey-2':(gikSepContents.kpi4 >= '0' && gikSepContents.kpi4 <= '19.2')?'red':(gikSepContents.kpi4 > '19.2' && gikSepContents.kpi4 <= '25.6')?'orange':(gikSepContents.kpi4 > '25.6' && gikSepContents.kpi4 < '32')?'yellow-7':(gikSepContents.kpi4 >= '32' && gikSepContents.kpi4 < '38.4')?'green':(gikSepContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi4}}
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
                              :color="(gikOctContents.kpi1 == null)?'grey-2':(gikOctContents.kpi1 >= '0' && gikOctContents.kpi1 <= '14.7')?'red':(gikOctContents.kpi1 > '14.7' && gikOctContents.kpi1 <= '19.6')?'orange':(gikOctContents.kpi1 > '19.6' && gikOctContents.kpi1 < '24.5')?'yellow-7':(gikOctContents.kpi1 >= '24.5' && gikOctContents.kpi1 < '29.4')?'green':(gikOctContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi2 == null)?'grey-2':(gikOctContents.kpi2 >= '0' && gikOctContents.kpi2 <= '19.05')?'red':(gikOctContents.kpi2 > '19.05' && gikOctContents.kpi2 <= '25.4')?'orange':(gikOctContents.kpi2 > '25.4' && gikOctContents.kpi2 < '31.75')?'yellow-7':(gikOctContents.kpi2 >= '31.75' && gikOctContents.kpi2 < '38.1')?'green':(gikOctContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi3 == null)?'grey-2':(gikOctContents.kpi3 >= '0' && gikOctContents.kpi3 <= '19.35')?'red':(gikOctContents.kpi3 > '19.35' && gikOctContents.kpi3 <= '25.8')?'orange':(gikOctContents.kpi3 > '25.8' && gikOctContents.kpi3 < '32.25')?'yellow-7':(gikOctContents.kpi3 >= '32.25' && gikOctContents.kpi3 < '38.7')?'green':(gikOctContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi4 == null)?'grey-2':(gikOctContents.kpi4 >= '0' && gikOctContents.kpi4 <= '19.2')?'red':(gikOctContents.kpi4 > '19.2' && gikOctContents.kpi4 <= '25.6')?'orange':(gikOctContents.kpi4 > '25.6' && gikOctContents.kpi4 < '32')?'yellow-7':(gikOctContents.kpi4 >= '32' && gikOctContents.kpi4 < '38.4')?'green':(gikOctContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi4}}
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
                              :color="(gikNovContents.kpi1 == null)?'grey-2':(gikNovContents.kpi1 >= '0' && gikNovContents.kpi1 <= '14.7')?'red':(gikNovContents.kpi1 > '14.7' && gikNovContents.kpi1 <= '19.6')?'orange':(gikNovContents.kpi1 > '19.6' && gikNovContents.kpi1 < '24.5')?'yellow-7':(gikNovContents.kpi1 >= '24.5' && gikNovContents.kpi1 < '29.4')?'green':(gikNovContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi2 == null)?'grey-2':(gikNovContents.kpi2 >= '0' && gikNovContents.kpi2 <= '19.05')?'red':(gikNovContents.kpi2 > '19.05' && gikNovContents.kpi2 <= '25.4')?'orange':(gikNovContents.kpi2 > '25.4' && gikNovContents.kpi2 < '31.75')?'yellow-7':(gikNovContents.kpi2 >= '31.75' && gikNovContents.kpi2 < '38.1')?'green':(gikNovContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi3 == null)?'grey-2':(gikNovContents.kpi3 >= '0' && gikNovContents.kpi3 <= '19.35')?'red':(gikNovContents.kpi3 > '19.35' && gikNovContents.kpi3 <= '25.8')?'orange':(gikNovContents.kpi3 > '25.8' && gikNovContents.kpi3 < '32.25')?'yellow-7':(gikNovContents.kpi3 >= '32.25' && gikNovContents.kpi3 < '38.7')?'green':(gikNovContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi4 == null)?'grey-2':(gikNovContents.kpi4 >= '0' && gikNovContents.kpi4 <= '19.2')?'red':(gikNovContents.kpi4 > '19.2' && gikNovContents.kpi4 <= '25.6')?'orange':(gikNovContents.kpi4 > '25.6' && gikNovContents.kpi4 < '32')?'yellow-7':(gikNovContents.kpi4 >= '32' && gikNovContents.kpi4 < '38.4')?'green':(gikNovContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi4}}
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
                              :color="(gikDecContents.kpi1 == null)?'grey-2':(gikDecContents.kpi1 >= '0' && gikDecContents.kpi1 <= '14.7')?'red':(gikDecContents.kpi1 > '14.7' && gikDecContents.kpi1 <= '19.6')?'orange':(gikDecContents.kpi1 > '19.6' && gikDecContents.kpi1 < '24.5')?'yellow-7':(gikDecContents.kpi1 >= '24.5' && gikDecContents.kpi1 < '29.4')?'green':(gikDecContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi2 == null)?'grey-2':(gikDecContents.kpi2 >= '0' && gikDecContents.kpi2 <= '19.05')?'red':(gikDecContents.kpi2 > '19.05' && gikDecContents.kpi2 <= '25.4')?'orange':(gikDecContents.kpi2 > '25.4' && gikDecContents.kpi2 < '31.75')?'yellow-7':(gikDecContents.kpi2 >= '31.75' && gikDecContents.kpi2 < '38.1')?'green':(gikDecContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi3 == null)?'grey-2':(gikDecContents.kpi3 >= '0' && gikDecContents.kpi3 <= '19.35')?'red':(gikDecContents.kpi3 > '19.35' && gikDecContents.kpi3 <= '25.8')?'orange':(gikDecContents.kpi3 > '25.8' && gikDecContents.kpi3 < '32.25')?'yellow-7':(gikDecContents.kpi3 >= '32.25' && gikDecContents.kpi3 < '38.7')?'green':(gikDecContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi4 == null)?'grey-2':(gikDecContents.kpi4 >= '0' && gikDecContents.kpi4 <= '19.2')?'red':(gikDecContents.kpi4 > '19.2' && gikDecContents.kpi4 <= '25.6')?'orange':(gikDecContents.kpi4 > '25.6' && gikDecContents.kpi4 < '32')?'yellow-7':(gikDecContents.kpi4 >= '32' && gikDecContents.kpi4 < '38.4')?'green':(gikDecContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/GIKlogoforTOP.png"></q-img>
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
                  <!--TABLE DONE-->
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
                              :color="(gikJanContents.kpi1 == null)?'grey-2':(gikJanContents.kpi1 >= '0' && gikJanContents.kpi1 <= '14.7')?'red':(gikJanContents.kpi1 > '14.7' && gikJanContents.kpi1 <= '19.6')?'orange':(gikJanContents.kpi1 > '19.6' && gikJanContents.kpi1 < '24.5')?'yellow-7':(gikJanContents.kpi1 >= '24.5' && gikJanContents.kpi1 < '29.4')?'green':(gikJanContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi2 == null)?'grey-2':(gikJanContents.kpi2 >= '0' && gikJanContents.kpi2 <= '19.05')?'red':(gikJanContents.kpi2 > '19.05' && gikJanContents.kpi2 <= '25.4')?'orange':(gikJanContents.kpi2 > '25.4' && gikJanContents.kpi2 < '31.75')?'yellow-7':(gikJanContents.kpi2 >= '31.75' && gikJanContents.kpi2 < '38.1')?'green':(gikJanContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi3 == null)?'grey-2':(gikJanContents.kpi3 >= '0' && gikJanContents.kpi3 <= '19.35')?'red':(gikJanContents.kpi3 > '19.35' && gikJanContents.kpi3 <= '25.8')?'orange':(gikJanContents.kpi3 > '25.8' && gikJanContents.kpi3 < '32.25')?'yellow-7':(gikJanContents.kpi3 >= '32.25' && gikJanContents.kpi3 < '38.7')?'green':(gikJanContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi4 == null)?'grey-2':(gikJanContents.kpi4 >= '0' && gikJanContents.kpi4 <= '19.2')?'red':(gikJanContents.kpi4 > '19.2' && gikJanContents.kpi4 <= '25.6')?'orange':(gikJanContents.kpi4 > '25.6' && gikJanContents.kpi4 < '32')?'yellow-7':(gikJanContents.kpi4 >= '32' && gikJanContents.kpi4 < '38.4')?'green':(gikJanContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi4}}
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
                              :color="(gikFebContents.kpi1 == null)?'grey-2':(gikFebContents.kpi1 >= '0' && gikFebContents.kpi1 <= '14.7')?'red':(gikFebContents.kpi1 > '14.7' && gikFebContents.kpi1 <= '19.6')?'orange':(gikFebContents.kpi1 > '19.6' && gikFebContents.kpi1 < '24.5')?'yellow-7':(gikFebContents.kpi1 >= '24.5' && gikFebContents.kpi1 < '29.4')?'green':(gikFebContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi2 == null)?'grey-2':(gikFebContents.kpi2 >= '0' && gikFebContents.kpi2 <= '19.05')?'red':(gikFebContents.kpi2 > '19.05' && gikFebContents.kpi2 <= '25.4')?'orange':(gikFebContents.kpi2 > '25.4' && gikFebContents.kpi2 < '31.75')?'yellow-7':(gikFebContents.kpi2 >= '31.75' && gikFebContents.kpi2 < '38.1')?'green':(gikFebContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi3 == null)?'grey-2':(gikFebContents.kpi3 >= '0' && gikFebContents.kpi3 <= '19.35')?'red':(gikFebContents.kpi3 > '19.35' && gikFebContents.kpi3 <= '25.8')?'orange':(gikFebContents.kpi3 > '25.8' && gikFebContents.kpi3 < '32.25')?'yellow-7':(gikFebContents.kpi3 >= '32.25' && gikFebContents.kpi3 < '38.7')?'green':(gikFebContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi4 == null)?'grey-2':(gikFebContents.kpi4 >= '0' && gikFebContents.kpi4 <= '19.2')?'red':(gikFebContents.kpi4 > '19.2' && gikFebContents.kpi4 <= '25.6')?'orange':(gikFebContents.kpi4 > '25.6' && gikFebContents.kpi4 < '32')?'yellow-7':(gikFebContents.kpi4 >= '32' && gikFebContents.kpi4 < '38.4')?'green':(gikFebContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi4}}
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
                              :color="(gikMarContents.kpi1 == null)?'grey-2':(gikMarContents.kpi1 >= '0' && gikMarContents.kpi1 <= '14.7')?'red':(gikMarContents.kpi1 > '14.7' && gikMarContents.kpi1 <= '19.6')?'orange':(gikMarContents.kpi1 > '19.6' && gikMarContents.kpi1 < '24.5')?'yellow-7':(gikMarContents.kpi1 >= '24.5' && gikMarContents.kpi1 < '29.4')?'green':(gikMarContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi2 == null)?'grey-2':(gikMarContents.kpi2 >= '0' && gikMarContents.kpi2 <= '19.05')?'red':(gikMarContents.kpi2 > '19.05' && gikMarContents.kpi2 <= '25.4')?'orange':(gikMarContents.kpi2 > '25.4' && gikMarContents.kpi2 < '31.75')?'yellow-7':(gikMarContents.kpi2 >= '31.75' && gikMarContents.kpi2 < '38.1')?'green':(gikMarContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi3 == null)?'grey-2':(gikMarContents.kpi3 >= '0' && gikMarContents.kpi3 <= '19.35')?'red':(gikMarContents.kpi3 > '19.35' && gikMarContents.kpi3 <= '25.8')?'orange':(gikMarContents.kpi3 > '25.8' && gikMarContents.kpi3 < '32.25')?'yellow-7':(gikMarContents.kpi3 >= '32.25' && gikMarContents.kpi3 < '38.7')?'green':(gikMarContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi4 == null)?'grey-2':(gikMarContents.kpi4 >= '0' && gikMarContents.kpi4 <= '19.2')?'red':(gikMarContents.kpi4 > '19.2' && gikMarContents.kpi4 <= '25.6')?'orange':(gikMarContents.kpi4 > '25.6' && gikMarContents.kpi4 < '32')?'yellow-7':(gikMarContents.kpi4 >= '32' && gikMarContents.kpi4 < '38.4')?'green':(gikMarContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi4}}
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
                              :color="(gikAprContents.kpi1 == null)?'grey-2':(gikAprContents.kpi1 >= '0' && gikAprContents.kpi1 <= '14.7')?'red':(gikAprContents.kpi1 > '14.7' && gikAprContents.kpi1 <= '19.6')?'orange':(gikAprContents.kpi1 > '19.6' && gikAprContents.kpi1 < '24.5')?'yellow-7':(gikAprContents.kpi1 >= '24.5' && gikAprContents.kpi1 < '29.4')?'green':(gikAprContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi2 == null)?'grey-2':(gikAprContents.kpi2 >= '0' && gikAprContents.kpi2 <= '19.05')?'red':(gikAprContents.kpi2 > '19.05' && gikAprContents.kpi2 <= '25.4')?'orange':(gikAprContents.kpi2 > '25.4' && gikAprContents.kpi2 < '31.75')?'yellow-7':(gikAprContents.kpi2 >= '31.75' && gikAprContents.kpi2 < '38.1')?'green':(gikAprContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi3 == null)?'grey-2':(gikAprContents.kpi3 >= '0' && gikAprContents.kpi3 <= '19.35')?'red':(gikAprContents.kpi3 > '19.35' && gikAprContents.kpi3 <= '25.8')?'orange':(gikAprContents.kpi3 > '25.8' && gikAprContents.kpi3 < '32.25')?'yellow-7':(gikAprContents.kpi3 >= '32.25' && gikAprContents.kpi3 < '38.7')?'green':(gikAprContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi4 == null)?'grey-2':(gikAprContents.kpi4 >= '0' && gikAprContents.kpi4 <= '19.2')?'red':(gikAprContents.kpi4 > '19.2' && gikAprContents.kpi4 <= '25.6')?'orange':(gikAprContents.kpi4 > '25.6' && gikAprContents.kpi4 < '32')?'yellow-7':(gikAprContents.kpi4 >= '32' && gikAprContents.kpi4 < '38.4')?'green':(gikAprContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi4}}
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
                              :color="(gikMayContents.kpi1 == null)?'grey-2':(gikMayContents.kpi1 >= '0' && gikMayContents.kpi1 <= '14.7')?'red':(gikMayContents.kpi1 > '14.7' && gikMayContents.kpi1 <= '19.6')?'orange':(gikMayContents.kpi1 > '19.6' && gikMayContents.kpi1 < '24.5')?'yellow-7':(gikMayContents.kpi1 >= '24.5' && gikMayContents.kpi1 < '29.4')?'green':(gikMayContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi2 == null)?'grey-2':(gikMayContents.kpi2 >= '0' && gikMayContents.kpi2 <= '19.05')?'red':(gikMayContents.kpi2 > '19.05' && gikMayContents.kpi2 <= '25.4')?'orange':(gikMayContents.kpi2 > '25.4' && gikMayContents.kpi2 < '31.75')?'yellow-7':(gikMayContents.kpi2 >= '31.75' && gikMayContents.kpi2 < '38.1')?'green':(gikMayContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi3 == null)?'grey-2':(gikMayContents.kpi3 >= '0' && gikMayContents.kpi3 <= '19.35')?'red':(gikMayContents.kpi3 > '19.35' && gikMayContents.kpi3 <= '25.8')?'orange':(gikMayContents.kpi3 > '25.8' && gikMayContents.kpi3 < '32.25')?'yellow-7':(gikMayContents.kpi3 >= '32.25' && gikMayContents.kpi3 < '38.7')?'green':(gikMayContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi4 == null)?'grey-2':(gikMayContents.kpi4 >= '0' && gikMayContents.kpi4 <= '19.2')?'red':(gikMayContents.kpi4 > '19.2' && gikMayContents.kpi4 <= '25.6')?'orange':(gikMayContents.kpi4 > '25.6' && gikMayContents.kpi4 < '32')?'yellow-7':(gikMayContents.kpi4 >= '32' && gikMayContents.kpi4 < '38.4')?'green':(gikMayContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi4}}
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
                              :color="(gikJunContents.kpi1 == null)?'grey-2':(gikJunContents.kpi1 >= '0' && gikJunContents.kpi1 <= '14.7')?'red':(gikJunContents.kpi1 > '14.7' && gikJunContents.kpi1 <= '19.6')?'orange':(gikJunContents.kpi1 > '19.6' && gikJunContents.kpi1 < '24.5')?'yellow-7':(gikJunContents.kpi1 >= '24.5' && gikJunContents.kpi1 < '29.4')?'green':(gikJunContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi2 == null)?'grey-2':(gikJunContents.kpi2 >= '0' && gikJunContents.kpi2 <= '19.05')?'red':(gikJunContents.kpi2 > '19.05' && gikJunContents.kpi2 <= '25.4')?'orange':(gikJunContents.kpi2 > '25.4' && gikJunContents.kpi2 < '31.75')?'yellow-7':(gikJunContents.kpi2 >= '31.75' && gikJunContents.kpi2 < '38.1')?'green':(gikJunContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi3 == null)?'grey-2':(gikJunContents.kpi3 >= '0' && gikJunContents.kpi3 <= '19.35')?'red':(gikJunContents.kpi3 > '19.35' && gikJunContents.kpi3 <= '25.8')?'orange':(gikJunContents.kpi3 > '25.8' && gikJunContents.kpi3 < '32.25')?'yellow-7':(gikJunContents.kpi3 >= '32.25' && gikJunContents.kpi3 < '38.7')?'green':(gikJunContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi4 == null)?'grey-2':(gikJunContents.kpi4 >= '0' && gikJunContents.kpi4 <= '19.2')?'red':(gikJunContents.kpi4 > '19.2' && gikJunContents.kpi4 <= '25.6')?'orange':(gikJunContents.kpi4 > '25.6' && gikJunContents.kpi4 < '32')?'yellow-7':(gikJunContents.kpi4 >= '32' && gikJunContents.kpi4 < '38.4')?'green':(gikJunContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi4}}
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
                              :color="(gikJulContents.kpi1 == null)?'grey-2':(gikJulContents.kpi1 >= '0' && gikJulContents.kpi1 <= '14.7')?'red':(gikJulContents.kpi1 > '14.7' && gikJulContents.kpi1 <= '19.6')?'orange':(gikJulContents.kpi1 > '19.6' && gikJulContents.kpi1 < '24.5')?'yellow-7':(gikJulContents.kpi1 >= '24.5' && gikJulContents.kpi1 < '29.4')?'green':(gikJulContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi2 == null)?'grey-2':(gikJulContents.kpi2 >= '0' && gikJulContents.kpi2 <= '19.05')?'red':(gikJulContents.kpi2 > '19.05' && gikJulContents.kpi2 <= '25.4')?'orange':(gikJulContents.kpi2 > '25.4' && gikJulContents.kpi2 < '31.75')?'yellow-7':(gikJulContents.kpi2 >= '31.75' && gikJulContents.kpi2 < '38.1')?'green':(gikJulContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi3 == null)?'grey-2':(gikJulContents.kpi3 >= '0' && gikJulContents.kpi3 <= '19.35')?'red':(gikJulContents.kpi3 > '19.35' && gikJulContents.kpi3 <= '25.8')?'orange':(gikJulContents.kpi3 > '25.8' && gikJulContents.kpi3 < '32.25')?'yellow-7':(gikJulContents.kpi3 >= '32.25' && gikJulContents.kpi3 < '38.7')?'green':(gikJulContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi4 == null)?'grey-2':(gikJulContents.kpi4 >= '0' && gikJulContents.kpi4 <= '19.2')?'red':(gikJulContents.kpi4 > '19.2' && gikJulContents.kpi4 <= '25.6')?'orange':(gikJulContents.kpi4 > '25.6' && gikJulContents.kpi4 < '32')?'yellow-7':(gikJulContents.kpi4 >= '32' && gikJulContents.kpi4 < '38.4')?'green':(gikJulContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi4}}
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
                              :color="(gikAugContents.kpi1 == null)?'grey-2':(gikAugContents.kpi1 >= '0' && gikAugContents.kpi1 <= '14.7')?'red':(gikAugContents.kpi1 > '14.7' && gikAugContents.kpi1 <= '19.6')?'orange':(gikAugContents.kpi1 > '19.6' && gikAugContents.kpi1 < '24.5')?'yellow-7':(gikAugContents.kpi1 >= '24.5' && gikAugContents.kpi1 < '29.4')?'green':(gikAugContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi2 == null)?'grey-2':(gikAugContents.kpi2 >= '0' && gikAugContents.kpi2 <= '19.05')?'red':(gikAugContents.kpi2 > '19.05' && gikAugContents.kpi2 <= '25.4')?'orange':(gikAugContents.kpi2 > '25.4' && gikAugContents.kpi2 < '31.75')?'yellow-7':(gikAugContents.kpi2 >= '31.75' && gikAugContents.kpi2 < '38.1')?'green':(gikAugContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi3 == null)?'grey-2':(gikAugContents.kpi3 >= '0' && gikAugContents.kpi3 <= '19.35')?'red':(gikAugContents.kpi3 > '19.35' && gikAugContents.kpi3 <= '25.8')?'orange':(gikAugContents.kpi3 > '25.8' && gikAugContents.kpi3 < '32.25')?'yellow-7':(gikAugContents.kpi3 >= '32.25' && gikAugContents.kpi3 < '38.7')?'green':(gikAugContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi4 == null)?'grey-2':(gikAugContents.kpi4 >= '0' && gikAugContents.kpi4 <= '19.2')?'red':(gikAugContents.kpi4 > '19.2' && gikAugContents.kpi4 <= '25.6')?'orange':(gikAugContents.kpi4 > '25.6' && gikAugContents.kpi4 < '32')?'yellow-7':(gikAugContents.kpi4 >= '32' && gikAugContents.kpi4 < '38.4')?'green':(gikAugContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi4}}
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
                              :color="(gikSepContents.kpi1 == null)?'grey-2':(gikSepContents.kpi1 >= '0' && gikSepContents.kpi1 <= '14.7')?'red':(gikSepContents.kpi1 > '14.7' && gikSepContents.kpi1 <= '19.6')?'orange':(gikSepContents.kpi1 > '19.6' && gikSepContents.kpi1 < '24.5')?'yellow-7':(gikSepContents.kpi1 >= '24.5' && gikSepContents.kpi1 < '29.4')?'green':(gikSepContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi2 == null)?'grey-2':(gikSepContents.kpi2 >= '0' && gikSepContents.kpi2 <= '19.05')?'red':(gikSepContents.kpi2 > '19.05' && gikSepContents.kpi2 <= '25.4')?'orange':(gikSepContents.kpi2 > '25.4' && gikSepContents.kpi2 < '31.75')?'yellow-7':(gikSepContents.kpi2 >= '31.75' && gikSepContents.kpi2 < '38.1')?'green':(gikSepContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi3 == null)?'grey-2':(gikSepContents.kpi3 >= '0' && gikSepContents.kpi3 <= '19.35')?'red':(gikSepContents.kpi3 > '19.35' && gikSepContents.kpi3 <= '25.8')?'orange':(gikSepContents.kpi3 > '25.8' && gikSepContents.kpi3 < '32.25')?'yellow-7':(gikSepContents.kpi3 >= '32.25' && gikSepContents.kpi3 < '38.7')?'green':(gikSepContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi4 == null)?'grey-2':(gikSepContents.kpi4 >= '0' && gikSepContents.kpi4 <= '19.2')?'red':(gikSepContents.kpi4 > '19.2' && gikSepContents.kpi4 <= '25.6')?'orange':(gikSepContents.kpi4 > '25.6' && gikSepContents.kpi4 < '32')?'yellow-7':(gikSepContents.kpi4 >= '32' && gikSepContents.kpi4 < '38.4')?'green':(gikSepContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi4}}
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
                              :color="(gikOctContents.kpi1 == null)?'grey-2':(gikOctContents.kpi1 >= '0' && gikOctContents.kpi1 <= '14.7')?'red':(gikOctContents.kpi1 > '14.7' && gikOctContents.kpi1 <= '19.6')?'orange':(gikOctContents.kpi1 > '19.6' && gikOctContents.kpi1 < '24.5')?'yellow-7':(gikOctContents.kpi1 >= '24.5' && gikOctContents.kpi1 < '29.4')?'green':(gikOctContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi2 == null)?'grey-2':(gikOctContents.kpi2 >= '0' && gikOctContents.kpi2 <= '19.05')?'red':(gikOctContents.kpi2 > '19.05' && gikOctContents.kpi2 <= '25.4')?'orange':(gikOctContents.kpi2 > '25.4' && gikOctContents.kpi2 < '31.75')?'yellow-7':(gikOctContents.kpi2 >= '31.75' && gikOctContents.kpi2 < '38.1')?'green':(gikOctContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi3 == null)?'grey-2':(gikOctContents.kpi3 >= '0' && gikOctContents.kpi3 <= '19.35')?'red':(gikOctContents.kpi3 > '19.35' && gikOctContents.kpi3 <= '25.8')?'orange':(gikOctContents.kpi3 > '25.8' && gikOctContents.kpi3 < '32.25')?'yellow-7':(gikOctContents.kpi3 >= '32.25' && gikOctContents.kpi3 < '38.7')?'green':(gikOctContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi4 == null)?'grey-2':(gikOctContents.kpi4 >= '0' && gikOctContents.kpi4 <= '19.2')?'red':(gikOctContents.kpi4 > '19.2' && gikOctContents.kpi4 <= '25.6')?'orange':(gikOctContents.kpi4 > '25.6' && gikOctContents.kpi4 < '32')?'yellow-7':(gikOctContents.kpi4 >= '32' && gikOctContents.kpi4 < '38.4')?'green':(gikOctContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi4}}
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
                              :color="(gikNovContents.kpi1 == null)?'grey-2':(gikNovContents.kpi1 >= '0' && gikNovContents.kpi1 <= '14.7')?'red':(gikNovContents.kpi1 > '14.7' && gikNovContents.kpi1 <= '19.6')?'orange':(gikNovContents.kpi1 > '19.6' && gikNovContents.kpi1 < '24.5')?'yellow-7':(gikNovContents.kpi1 >= '24.5' && gikNovContents.kpi1 < '29.4')?'green':(gikNovContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi2 == null)?'grey-2':(gikNovContents.kpi2 >= '0' && gikNovContents.kpi2 <= '19.05')?'red':(gikNovContents.kpi2 > '19.05' && gikNovContents.kpi2 <= '25.4')?'orange':(gikNovContents.kpi2 > '25.4' && gikNovContents.kpi2 < '31.75')?'yellow-7':(gikNovContents.kpi2 >= '31.75' && gikNovContents.kpi2 < '38.1')?'green':(gikNovContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi3 == null)?'grey-2':(gikNovContents.kpi3 >= '0' && gikNovContents.kpi3 <= '19.35')?'red':(gikNovContents.kpi3 > '19.35' && gikNovContents.kpi3 <= '25.8')?'orange':(gikNovContents.kpi3 > '25.8' && gikNovContents.kpi3 < '32.25')?'yellow-7':(gikNovContents.kpi3 >= '32.25' && gikNovContents.kpi3 < '38.7')?'green':(gikNovContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi4 == null)?'grey-2':(gikNovContents.kpi4 >= '0' && gikNovContents.kpi4 <= '19.2')?'red':(gikNovContents.kpi4 > '19.2' && gikNovContents.kpi4 <= '25.6')?'orange':(gikNovContents.kpi4 > '25.6' && gikNovContents.kpi4 < '32')?'yellow-7':(gikNovContents.kpi4 >= '32' && gikNovContents.kpi4 < '38.4')?'green':(gikNovContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi4}}
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
                              :color="(gikDecContents.kpi1 == null)?'grey-2':(gikDecContents.kpi1 >= '0' && gikDecContents.kpi1 <= '14.7')?'red':(gikDecContents.kpi1 > '14.7' && gikDecContents.kpi1 <= '19.6')?'orange':(gikDecContents.kpi1 > '19.6' && gikDecContents.kpi1 < '24.5')?'yellow-7':(gikDecContents.kpi1 >= '24.5' && gikDecContents.kpi1 < '29.4')?'green':(gikDecContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi2 == null)?'grey-2':(gikDecContents.kpi2 >= '0' && gikDecContents.kpi2 <= '19.05')?'red':(gikDecContents.kpi2 > '19.05' && gikDecContents.kpi2 <= '25.4')?'orange':(gikDecContents.kpi2 > '25.4' && gikDecContents.kpi2 < '31.75')?'yellow-7':(gikDecContents.kpi2 >= '31.75' && gikDecContents.kpi2 < '38.1')?'green':(gikDecContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi3 == null)?'grey-2':(gikDecContents.kpi3 >= '0' && gikDecContents.kpi3 <= '19.35')?'red':(gikDecContents.kpi3 > '19.35' && gikDecContents.kpi3 <= '25.8')?'orange':(gikDecContents.kpi3 > '25.8' && gikDecContents.kpi3 < '32.25')?'yellow-7':(gikDecContents.kpi3 >= '32.25' && gikDecContents.kpi3 < '38.7')?'green':(gikDecContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi4 == null)?'grey-2':(gikDecContents.kpi4 >= '0' && gikDecContents.kpi4 <= '19.2')?'red':(gikDecContents.kpi4 > '19.2' && gikDecContents.kpi4 <= '25.6')?'orange':(gikDecContents.kpi4 > '25.6' && gikDecContents.kpi4 < '32')?'yellow-7':(gikDecContents.kpi4 >= '32' && gikDecContents.kpi4 < '38.4')?'green':(gikDecContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/GIKlogoforTOP.png"></q-img>
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
                  <!--TABLE DONE-->
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
                              :color="(gikJanContents.kpi1 == null)?'grey-2':(gikJanContents.kpi1 >= '0' && gikJanContents.kpi1 <= '14.7')?'red':(gikJanContents.kpi1 > '14.7' && gikJanContents.kpi1 <= '19.6')?'orange':(gikJanContents.kpi1 > '19.6' && gikJanContents.kpi1 < '24.5')?'yellow-7':(gikJanContents.kpi1 >= '24.5' && gikJanContents.kpi1 < '29.4')?'green':(gikJanContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi2 == null)?'grey-2':(gikJanContents.kpi2 >= '0' && gikJanContents.kpi2 <= '19.05')?'red':(gikJanContents.kpi2 > '19.05' && gikJanContents.kpi2 <= '25.4')?'orange':(gikJanContents.kpi2 > '25.4' && gikJanContents.kpi2 < '31.75')?'yellow-7':(gikJanContents.kpi2 >= '31.75' && gikJanContents.kpi2 < '38.1')?'green':(gikJanContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi3 == null)?'grey-2':(gikJanContents.kpi3 >= '0' && gikJanContents.kpi3 <= '19.35')?'red':(gikJanContents.kpi3 > '19.35' && gikJanContents.kpi3 <= '25.8')?'orange':(gikJanContents.kpi3 > '25.8' && gikJanContents.kpi3 < '32.25')?'yellow-7':(gikJanContents.kpi3 >= '32.25' && gikJanContents.kpi3 < '38.7')?'green':(gikJanContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi4 == null)?'grey-2':(gikJanContents.kpi4 >= '0' && gikJanContents.kpi4 <= '19.2')?'red':(gikJanContents.kpi4 > '19.2' && gikJanContents.kpi4 <= '25.6')?'orange':(gikJanContents.kpi4 > '25.6' && gikJanContents.kpi4 < '32')?'yellow-7':(gikJanContents.kpi4 >= '32' && gikJanContents.kpi4 < '38.4')?'green':(gikJanContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi4}}
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
                              :color="(gikFebContents.kpi1 == null)?'grey-2':(gikFebContents.kpi1 >= '0' && gikFebContents.kpi1 <= '14.7')?'red':(gikFebContents.kpi1 > '14.7' && gikFebContents.kpi1 <= '19.6')?'orange':(gikFebContents.kpi1 > '19.6' && gikFebContents.kpi1 < '24.5')?'yellow-7':(gikFebContents.kpi1 >= '24.5' && gikFebContents.kpi1 < '29.4')?'green':(gikFebContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi2 == null)?'grey-2':(gikFebContents.kpi2 >= '0' && gikFebContents.kpi2 <= '19.05')?'red':(gikFebContents.kpi2 > '19.05' && gikFebContents.kpi2 <= '25.4')?'orange':(gikFebContents.kpi2 > '25.4' && gikFebContents.kpi2 < '31.75')?'yellow-7':(gikFebContents.kpi2 >= '31.75' && gikFebContents.kpi2 < '38.1')?'green':(gikFebContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi3 == null)?'grey-2':(gikFebContents.kpi3 >= '0' && gikFebContents.kpi3 <= '19.35')?'red':(gikFebContents.kpi3 > '19.35' && gikFebContents.kpi3 <= '25.8')?'orange':(gikFebContents.kpi3 > '25.8' && gikFebContents.kpi3 < '32.25')?'yellow-7':(gikFebContents.kpi3 >= '32.25' && gikFebContents.kpi3 < '38.7')?'green':(gikFebContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi4 == null)?'grey-2':(gikFebContents.kpi4 >= '0' && gikFebContents.kpi4 <= '19.2')?'red':(gikFebContents.kpi4 > '19.2' && gikFebContents.kpi4 <= '25.6')?'orange':(gikFebContents.kpi4 > '25.6' && gikFebContents.kpi4 < '32')?'yellow-7':(gikFebContents.kpi4 >= '32' && gikFebContents.kpi4 < '38.4')?'green':(gikFebContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi4}}
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
                              :color="(gikMarContents.kpi1 == null)?'grey-2':(gikMarContents.kpi1 >= '0' && gikMarContents.kpi1 <= '14.7')?'red':(gikMarContents.kpi1 > '14.7' && gikMarContents.kpi1 <= '19.6')?'orange':(gikMarContents.kpi1 > '19.6' && gikMarContents.kpi1 < '24.5')?'yellow-7':(gikMarContents.kpi1 >= '24.5' && gikMarContents.kpi1 < '29.4')?'green':(gikMarContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi2 == null)?'grey-2':(gikMarContents.kpi2 >= '0' && gikMarContents.kpi2 <= '19.05')?'red':(gikMarContents.kpi2 > '19.05' && gikMarContents.kpi2 <= '25.4')?'orange':(gikMarContents.kpi2 > '25.4' && gikMarContents.kpi2 < '31.75')?'yellow-7':(gikMarContents.kpi2 >= '31.75' && gikMarContents.kpi2 < '38.1')?'green':(gikMarContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi3 == null)?'grey-2':(gikMarContents.kpi3 >= '0' && gikMarContents.kpi3 <= '19.35')?'red':(gikMarContents.kpi3 > '19.35' && gikMarContents.kpi3 <= '25.8')?'orange':(gikMarContents.kpi3 > '25.8' && gikMarContents.kpi3 < '32.25')?'yellow-7':(gikMarContents.kpi3 >= '32.25' && gikMarContents.kpi3 < '38.7')?'green':(gikMarContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi4 == null)?'grey-2':(gikMarContents.kpi4 >= '0' && gikMarContents.kpi4 <= '19.2')?'red':(gikMarContents.kpi4 > '19.2' && gikMarContents.kpi4 <= '25.6')?'orange':(gikMarContents.kpi4 > '25.6' && gikMarContents.kpi4 < '32')?'yellow-7':(gikMarContents.kpi4 >= '32' && gikMarContents.kpi4 < '38.4')?'green':(gikMarContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi4}}
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
                              :color="(gikAprContents.kpi1 == null)?'grey-2':(gikAprContents.kpi1 >= '0' && gikAprContents.kpi1 <= '14.7')?'red':(gikAprContents.kpi1 > '14.7' && gikAprContents.kpi1 <= '19.6')?'orange':(gikAprContents.kpi1 > '19.6' && gikAprContents.kpi1 < '24.5')?'yellow-7':(gikAprContents.kpi1 >= '24.5' && gikAprContents.kpi1 < '29.4')?'green':(gikAprContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi2 == null)?'grey-2':(gikAprContents.kpi2 >= '0' && gikAprContents.kpi2 <= '19.05')?'red':(gikAprContents.kpi2 > '19.05' && gikAprContents.kpi2 <= '25.4')?'orange':(gikAprContents.kpi2 > '25.4' && gikAprContents.kpi2 < '31.75')?'yellow-7':(gikAprContents.kpi2 >= '31.75' && gikAprContents.kpi2 < '38.1')?'green':(gikAprContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi3 == null)?'grey-2':(gikAprContents.kpi3 >= '0' && gikAprContents.kpi3 <= '19.35')?'red':(gikAprContents.kpi3 > '19.35' && gikAprContents.kpi3 <= '25.8')?'orange':(gikAprContents.kpi3 > '25.8' && gikAprContents.kpi3 < '32.25')?'yellow-7':(gikAprContents.kpi3 >= '32.25' && gikAprContents.kpi3 < '38.7')?'green':(gikAprContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi4 == null)?'grey-2':(gikAprContents.kpi4 >= '0' && gikAprContents.kpi4 <= '19.2')?'red':(gikAprContents.kpi4 > '19.2' && gikAprContents.kpi4 <= '25.6')?'orange':(gikAprContents.kpi4 > '25.6' && gikAprContents.kpi4 < '32')?'yellow-7':(gikAprContents.kpi4 >= '32' && gikAprContents.kpi4 < '38.4')?'green':(gikAprContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi4}}
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
                              :color="(gikMayContents.kpi1 == null)?'grey-2':(gikMayContents.kpi1 >= '0' && gikMayContents.kpi1 <= '14.7')?'red':(gikMayContents.kpi1 > '14.7' && gikMayContents.kpi1 <= '19.6')?'orange':(gikMayContents.kpi1 > '19.6' && gikMayContents.kpi1 < '24.5')?'yellow-7':(gikMayContents.kpi1 >= '24.5' && gikMayContents.kpi1 < '29.4')?'green':(gikMayContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi2 == null)?'grey-2':(gikMayContents.kpi2 >= '0' && gikMayContents.kpi2 <= '19.05')?'red':(gikMayContents.kpi2 > '19.05' && gikMayContents.kpi2 <= '25.4')?'orange':(gikMayContents.kpi2 > '25.4' && gikMayContents.kpi2 < '31.75')?'yellow-7':(gikMayContents.kpi2 >= '31.75' && gikMayContents.kpi2 < '38.1')?'green':(gikMayContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi3 == null)?'grey-2':(gikMayContents.kpi3 >= '0' && gikMayContents.kpi3 <= '19.35')?'red':(gikMayContents.kpi3 > '19.35' && gikMayContents.kpi3 <= '25.8')?'orange':(gikMayContents.kpi3 > '25.8' && gikMayContents.kpi3 < '32.25')?'yellow-7':(gikMayContents.kpi3 >= '32.25' && gikMayContents.kpi3 < '38.7')?'green':(gikMayContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi4 == null)?'grey-2':(gikMayContents.kpi4 >= '0' && gikMayContents.kpi4 <= '19.2')?'red':(gikMayContents.kpi4 > '19.2' && gikMayContents.kpi4 <= '25.6')?'orange':(gikMayContents.kpi4 > '25.6' && gikMayContents.kpi4 < '32')?'yellow-7':(gikMayContents.kpi4 >= '32' && gikMayContents.kpi4 < '38.4')?'green':(gikMayContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi4}}
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
                              :color="(gikJunContents.kpi1 == null)?'grey-2':(gikJunContents.kpi1 >= '0' && gikJunContents.kpi1 <= '14.7')?'red':(gikJunContents.kpi1 > '14.7' && gikJunContents.kpi1 <= '19.6')?'orange':(gikJunContents.kpi1 > '19.6' && gikJunContents.kpi1 < '24.5')?'yellow-7':(gikJunContents.kpi1 >= '24.5' && gikJunContents.kpi1 < '29.4')?'green':(gikJunContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi2 == null)?'grey-2':(gikJunContents.kpi2 >= '0' && gikJunContents.kpi2 <= '19.05')?'red':(gikJunContents.kpi2 > '19.05' && gikJunContents.kpi2 <= '25.4')?'orange':(gikJunContents.kpi2 > '25.4' && gikJunContents.kpi2 < '31.75')?'yellow-7':(gikJunContents.kpi2 >= '31.75' && gikJunContents.kpi2 < '38.1')?'green':(gikJunContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi3 == null)?'grey-2':(gikJunContents.kpi3 >= '0' && gikJunContents.kpi3 <= '19.35')?'red':(gikJunContents.kpi3 > '19.35' && gikJunContents.kpi3 <= '25.8')?'orange':(gikJunContents.kpi3 > '25.8' && gikJunContents.kpi3 < '32.25')?'yellow-7':(gikJunContents.kpi3 >= '32.25' && gikJunContents.kpi3 < '38.7')?'green':(gikJunContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi4 == null)?'grey-2':(gikJunContents.kpi4 >= '0' && gikJunContents.kpi4 <= '19.2')?'red':(gikJunContents.kpi4 > '19.2' && gikJunContents.kpi4 <= '25.6')?'orange':(gikJunContents.kpi4 > '25.6' && gikJunContents.kpi4 < '32')?'yellow-7':(gikJunContents.kpi4 >= '32' && gikJunContents.kpi4 < '38.4')?'green':(gikJunContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi4}}
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
                              :color="(gikJulContents.kpi1 == null)?'grey-2':(gikJulContents.kpi1 >= '0' && gikJulContents.kpi1 <= '14.7')?'red':(gikJulContents.kpi1 > '14.7' && gikJulContents.kpi1 <= '19.6')?'orange':(gikJulContents.kpi1 > '19.6' && gikJulContents.kpi1 < '24.5')?'yellow-7':(gikJulContents.kpi1 >= '24.5' && gikJulContents.kpi1 < '29.4')?'green':(gikJulContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi2 == null)?'grey-2':(gikJulContents.kpi2 >= '0' && gikJulContents.kpi2 <= '19.05')?'red':(gikJulContents.kpi2 > '19.05' && gikJulContents.kpi2 <= '25.4')?'orange':(gikJulContents.kpi2 > '25.4' && gikJulContents.kpi2 < '31.75')?'yellow-7':(gikJulContents.kpi2 >= '31.75' && gikJulContents.kpi2 < '38.1')?'green':(gikJulContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi3 == null)?'grey-2':(gikJulContents.kpi3 >= '0' && gikJulContents.kpi3 <= '19.35')?'red':(gikJulContents.kpi3 > '19.35' && gikJulContents.kpi3 <= '25.8')?'orange':(gikJulContents.kpi3 > '25.8' && gikJulContents.kpi3 < '32.25')?'yellow-7':(gikJulContents.kpi3 >= '32.25' && gikJulContents.kpi3 < '38.7')?'green':(gikJulContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi4 == null)?'grey-2':(gikJulContents.kpi4 >= '0' && gikJulContents.kpi4 <= '19.2')?'red':(gikJulContents.kpi4 > '19.2' && gikJulContents.kpi4 <= '25.6')?'orange':(gikJulContents.kpi4 > '25.6' && gikJulContents.kpi4 < '32')?'yellow-7':(gikJulContents.kpi4 >= '32' && gikJulContents.kpi4 < '38.4')?'green':(gikJulContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi4}}
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
                              :color="(gikAugContents.kpi1 == null)?'grey-2':(gikAugContents.kpi1 >= '0' && gikAugContents.kpi1 <= '14.7')?'red':(gikAugContents.kpi1 > '14.7' && gikAugContents.kpi1 <= '19.6')?'orange':(gikAugContents.kpi1 > '19.6' && gikAugContents.kpi1 < '24.5')?'yellow-7':(gikAugContents.kpi1 >= '24.5' && gikAugContents.kpi1 < '29.4')?'green':(gikAugContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi2 == null)?'grey-2':(gikAugContents.kpi2 >= '0' && gikAugContents.kpi2 <= '19.05')?'red':(gikAugContents.kpi2 > '19.05' && gikAugContents.kpi2 <= '25.4')?'orange':(gikAugContents.kpi2 > '25.4' && gikAugContents.kpi2 < '31.75')?'yellow-7':(gikAugContents.kpi2 >= '31.75' && gikAugContents.kpi2 < '38.1')?'green':(gikAugContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi3 == null)?'grey-2':(gikAugContents.kpi3 >= '0' && gikAugContents.kpi3 <= '19.35')?'red':(gikAugContents.kpi3 > '19.35' && gikAugContents.kpi3 <= '25.8')?'orange':(gikAugContents.kpi3 > '25.8' && gikAugContents.kpi3 < '32.25')?'yellow-7':(gikAugContents.kpi3 >= '32.25' && gikAugContents.kpi3 < '38.7')?'green':(gikAugContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi4 == null)?'grey-2':(gikAugContents.kpi4 >= '0' && gikAugContents.kpi4 <= '19.2')?'red':(gikAugContents.kpi4 > '19.2' && gikAugContents.kpi4 <= '25.6')?'orange':(gikAugContents.kpi4 > '25.6' && gikAugContents.kpi4 < '32')?'yellow-7':(gikAugContents.kpi4 >= '32' && gikAugContents.kpi4 < '38.4')?'green':(gikAugContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi4}}
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
                              :color="(gikSepContents.kpi1 == null)?'grey-2':(gikSepContents.kpi1 >= '0' && gikSepContents.kpi1 <= '14.7')?'red':(gikSepContents.kpi1 > '14.7' && gikSepContents.kpi1 <= '19.6')?'orange':(gikSepContents.kpi1 > '19.6' && gikSepContents.kpi1 < '24.5')?'yellow-7':(gikSepContents.kpi1 >= '24.5' && gikSepContents.kpi1 < '29.4')?'green':(gikSepContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi2 == null)?'grey-2':(gikSepContents.kpi2 >= '0' && gikSepContents.kpi2 <= '19.05')?'red':(gikSepContents.kpi2 > '19.05' && gikSepContents.kpi2 <= '25.4')?'orange':(gikSepContents.kpi2 > '25.4' && gikSepContents.kpi2 < '31.75')?'yellow-7':(gikSepContents.kpi2 >= '31.75' && gikSepContents.kpi2 < '38.1')?'green':(gikSepContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi3 == null)?'grey-2':(gikSepContents.kpi3 >= '0' && gikSepContents.kpi3 <= '19.35')?'red':(gikSepContents.kpi3 > '19.35' && gikSepContents.kpi3 <= '25.8')?'orange':(gikSepContents.kpi3 > '25.8' && gikSepContents.kpi3 < '32.25')?'yellow-7':(gikSepContents.kpi3 >= '32.25' && gikSepContents.kpi3 < '38.7')?'green':(gikSepContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi4 == null)?'grey-2':(gikSepContents.kpi4 >= '0' && gikSepContents.kpi4 <= '19.2')?'red':(gikSepContents.kpi4 > '19.2' && gikSepContents.kpi4 <= '25.6')?'orange':(gikSepContents.kpi4 > '25.6' && gikSepContents.kpi4 < '32')?'yellow-7':(gikSepContents.kpi4 >= '32' && gikSepContents.kpi4 < '38.4')?'green':(gikSepContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi4}}
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
                              :color="(gikOctContents.kpi1 == null)?'grey-2':(gikOctContents.kpi1 >= '0' && gikOctContents.kpi1 <= '14.7')?'red':(gikOctContents.kpi1 > '14.7' && gikOctContents.kpi1 <= '19.6')?'orange':(gikOctContents.kpi1 > '19.6' && gikOctContents.kpi1 < '24.5')?'yellow-7':(gikOctContents.kpi1 >= '24.5' && gikOctContents.kpi1 < '29.4')?'green':(gikOctContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi2 == null)?'grey-2':(gikOctContents.kpi2 >= '0' && gikOctContents.kpi2 <= '19.05')?'red':(gikOctContents.kpi2 > '19.05' && gikOctContents.kpi2 <= '25.4')?'orange':(gikOctContents.kpi2 > '25.4' && gikOctContents.kpi2 < '31.75')?'yellow-7':(gikOctContents.kpi2 >= '31.75' && gikOctContents.kpi2 < '38.1')?'green':(gikOctContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi3 == null)?'grey-2':(gikOctContents.kpi3 >= '0' && gikOctContents.kpi3 <= '19.35')?'red':(gikOctContents.kpi3 > '19.35' && gikOctContents.kpi3 <= '25.8')?'orange':(gikOctContents.kpi3 > '25.8' && gikOctContents.kpi3 < '32.25')?'yellow-7':(gikOctContents.kpi3 >= '32.25' && gikOctContents.kpi3 < '38.7')?'green':(gikOctContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi4 == null)?'grey-2':(gikOctContents.kpi4 >= '0' && gikOctContents.kpi4 <= '19.2')?'red':(gikOctContents.kpi4 > '19.2' && gikOctContents.kpi4 <= '25.6')?'orange':(gikOctContents.kpi4 > '25.6' && gikOctContents.kpi4 < '32')?'yellow-7':(gikOctContents.kpi4 >= '32' && gikOctContents.kpi4 < '38.4')?'green':(gikOctContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi4}}
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
                              :color="(gikNovContents.kpi1 == null)?'grey-2':(gikNovContents.kpi1 >= '0' && gikNovContents.kpi1 <= '14.7')?'red':(gikNovContents.kpi1 > '14.7' && gikNovContents.kpi1 <= '19.6')?'orange':(gikNovContents.kpi1 > '19.6' && gikNovContents.kpi1 < '24.5')?'yellow-7':(gikNovContents.kpi1 >= '24.5' && gikNovContents.kpi1 < '29.4')?'green':(gikNovContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi2 == null)?'grey-2':(gikNovContents.kpi2 >= '0' && gikNovContents.kpi2 <= '19.05')?'red':(gikNovContents.kpi2 > '19.05' && gikNovContents.kpi2 <= '25.4')?'orange':(gikNovContents.kpi2 > '25.4' && gikNovContents.kpi2 < '31.75')?'yellow-7':(gikNovContents.kpi2 >= '31.75' && gikNovContents.kpi2 < '38.1')?'green':(gikNovContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi3 == null)?'grey-2':(gikNovContents.kpi3 >= '0' && gikNovContents.kpi3 <= '19.35')?'red':(gikNovContents.kpi3 > '19.35' && gikNovContents.kpi3 <= '25.8')?'orange':(gikNovContents.kpi3 > '25.8' && gikNovContents.kpi3 < '32.25')?'yellow-7':(gikNovContents.kpi3 >= '32.25' && gikNovContents.kpi3 < '38.7')?'green':(gikNovContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi4 == null)?'grey-2':(gikNovContents.kpi4 >= '0' && gikNovContents.kpi4 <= '19.2')?'red':(gikNovContents.kpi4 > '19.2' && gikNovContents.kpi4 <= '25.6')?'orange':(gikNovContents.kpi4 > '25.6' && gikNovContents.kpi4 < '32')?'yellow-7':(gikNovContents.kpi4 >= '32' && gikNovContents.kpi4 < '38.4')?'green':(gikNovContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi4}}
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
                              :color="(gikDecContents.kpi1 == null)?'grey-2':(gikDecContents.kpi1 >= '0' && gikDecContents.kpi1 <= '14.7')?'red':(gikDecContents.kpi1 > '14.7' && gikDecContents.kpi1 <= '19.6')?'orange':(gikDecContents.kpi1 > '19.6' && gikDecContents.kpi1 < '24.5')?'yellow-7':(gikDecContents.kpi1 >= '24.5' && gikDecContents.kpi1 < '29.4')?'green':(gikDecContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi2 == null)?'grey-2':(gikDecContents.kpi2 >= '0' && gikDecContents.kpi2 <= '19.05')?'red':(gikDecContents.kpi2 > '19.05' && gikDecContents.kpi2 <= '25.4')?'orange':(gikDecContents.kpi2 > '25.4' && gikDecContents.kpi2 < '31.75')?'yellow-7':(gikDecContents.kpi2 >= '31.75' && gikDecContents.kpi2 < '38.1')?'green':(gikDecContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi3 == null)?'grey-2':(gikDecContents.kpi3 >= '0' && gikDecContents.kpi3 <= '19.35')?'red':(gikDecContents.kpi3 > '19.35' && gikDecContents.kpi3 <= '25.8')?'orange':(gikDecContents.kpi3 > '25.8' && gikDecContents.kpi3 < '32.25')?'yellow-7':(gikDecContents.kpi3 >= '32.25' && gikDecContents.kpi3 < '38.7')?'green':(gikDecContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi4 == null)?'grey-2':(gikDecContents.kpi4 >= '0' && gikDecContents.kpi4 <= '19.2')?'red':(gikDecContents.kpi4 > '19.2' && gikDecContents.kpi4 <= '25.6')?'orange':(gikDecContents.kpi4 > '25.6' && gikDecContents.kpi4 < '32')?'yellow-7':(gikDecContents.kpi4 >= '32' && gikDecContents.kpi4 < '38.4')?'green':(gikDecContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/GIKlogoforTOP.png"></q-img>
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
                  <!--TABLE DONE-->
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
                              :color="(gikJanContents.kpi1 == null)?'grey-2':(gikJanContents.kpi1 >= '0' && gikJanContents.kpi1 <= '14.7')?'red':(gikJanContents.kpi1 > '14.7' && gikJanContents.kpi1 <= '19.6')?'orange':(gikJanContents.kpi1 > '19.6' && gikJanContents.kpi1 < '24.5')?'yellow-7':(gikJanContents.kpi1 >= '24.5' && gikJanContents.kpi1 < '29.4')?'green':(gikJanContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi2 == null)?'grey-2':(gikJanContents.kpi2 >= '0' && gikJanContents.kpi2 <= '19.05')?'red':(gikJanContents.kpi2 > '19.05' && gikJanContents.kpi2 <= '25.4')?'orange':(gikJanContents.kpi2 > '25.4' && gikJanContents.kpi2 < '31.75')?'yellow-7':(gikJanContents.kpi2 >= '31.75' && gikJanContents.kpi2 < '38.1')?'green':(gikJanContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi3 == null)?'grey-2':(gikJanContents.kpi3 >= '0' && gikJanContents.kpi3 <= '19.35')?'red':(gikJanContents.kpi3 > '19.35' && gikJanContents.kpi3 <= '25.8')?'orange':(gikJanContents.kpi3 > '25.8' && gikJanContents.kpi3 < '32.25')?'yellow-7':(gikJanContents.kpi3 >= '32.25' && gikJanContents.kpi3 < '38.7')?'green':(gikJanContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi4 == null)?'grey-2':(gikJanContents.kpi4 >= '0' && gikJanContents.kpi4 <= '19.2')?'red':(gikJanContents.kpi4 > '19.2' && gikJanContents.kpi4 <= '25.6')?'orange':(gikJanContents.kpi4 > '25.6' && gikJanContents.kpi4 < '32')?'yellow-7':(gikJanContents.kpi4 >= '32' && gikJanContents.kpi4 < '38.4')?'green':(gikJanContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi4}}
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
                              :color="(gikFebContents.kpi1 == null)?'grey-2':(gikFebContents.kpi1 >= '0' && gikFebContents.kpi1 <= '14.7')?'red':(gikFebContents.kpi1 > '14.7' && gikFebContents.kpi1 <= '19.6')?'orange':(gikFebContents.kpi1 > '19.6' && gikFebContents.kpi1 < '24.5')?'yellow-7':(gikFebContents.kpi1 >= '24.5' && gikFebContents.kpi1 < '29.4')?'green':(gikFebContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi2 == null)?'grey-2':(gikFebContents.kpi2 >= '0' && gikFebContents.kpi2 <= '19.05')?'red':(gikFebContents.kpi2 > '19.05' && gikFebContents.kpi2 <= '25.4')?'orange':(gikFebContents.kpi2 > '25.4' && gikFebContents.kpi2 < '31.75')?'yellow-7':(gikFebContents.kpi2 >= '31.75' && gikFebContents.kpi2 < '38.1')?'green':(gikFebContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi3 == null)?'grey-2':(gikFebContents.kpi3 >= '0' && gikFebContents.kpi3 <= '19.35')?'red':(gikFebContents.kpi3 > '19.35' && gikFebContents.kpi3 <= '25.8')?'orange':(gikFebContents.kpi3 > '25.8' && gikFebContents.kpi3 < '32.25')?'yellow-7':(gikFebContents.kpi3 >= '32.25' && gikFebContents.kpi3 < '38.7')?'green':(gikFebContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi4 == null)?'grey-2':(gikFebContents.kpi4 >= '0' && gikFebContents.kpi4 <= '19.2')?'red':(gikFebContents.kpi4 > '19.2' && gikFebContents.kpi4 <= '25.6')?'orange':(gikFebContents.kpi4 > '25.6' && gikFebContents.kpi4 < '32')?'yellow-7':(gikFebContents.kpi4 >= '32' && gikFebContents.kpi4 < '38.4')?'green':(gikFebContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi4}}
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
                              :color="(gikMarContents.kpi1 == null)?'grey-2':(gikMarContents.kpi1 >= '0' && gikMarContents.kpi1 <= '14.7')?'red':(gikMarContents.kpi1 > '14.7' && gikMarContents.kpi1 <= '19.6')?'orange':(gikMarContents.kpi1 > '19.6' && gikMarContents.kpi1 < '24.5')?'yellow-7':(gikMarContents.kpi1 >= '24.5' && gikMarContents.kpi1 < '29.4')?'green':(gikMarContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi2 == null)?'grey-2':(gikMarContents.kpi2 >= '0' && gikMarContents.kpi2 <= '19.05')?'red':(gikMarContents.kpi2 > '19.05' && gikMarContents.kpi2 <= '25.4')?'orange':(gikMarContents.kpi2 > '25.4' && gikMarContents.kpi2 < '31.75')?'yellow-7':(gikMarContents.kpi2 >= '31.75' && gikMarContents.kpi2 < '38.1')?'green':(gikMarContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi3 == null)?'grey-2':(gikMarContents.kpi3 >= '0' && gikMarContents.kpi3 <= '19.35')?'red':(gikMarContents.kpi3 > '19.35' && gikMarContents.kpi3 <= '25.8')?'orange':(gikMarContents.kpi3 > '25.8' && gikMarContents.kpi3 < '32.25')?'yellow-7':(gikMarContents.kpi3 >= '32.25' && gikMarContents.kpi3 < '38.7')?'green':(gikMarContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi4 == null)?'grey-2':(gikMarContents.kpi4 >= '0' && gikMarContents.kpi4 <= '19.2')?'red':(gikMarContents.kpi4 > '19.2' && gikMarContents.kpi4 <= '25.6')?'orange':(gikMarContents.kpi4 > '25.6' && gikMarContents.kpi4 < '32')?'yellow-7':(gikMarContents.kpi4 >= '32' && gikMarContents.kpi4 < '38.4')?'green':(gikMarContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi4}}
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
                              :color="(gikAprContents.kpi1 == null)?'grey-2':(gikAprContents.kpi1 >= '0' && gikAprContents.kpi1 <= '14.7')?'red':(gikAprContents.kpi1 > '14.7' && gikAprContents.kpi1 <= '19.6')?'orange':(gikAprContents.kpi1 > '19.6' && gikAprContents.kpi1 < '24.5')?'yellow-7':(gikAprContents.kpi1 >= '24.5' && gikAprContents.kpi1 < '29.4')?'green':(gikAprContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi2 == null)?'grey-2':(gikAprContents.kpi2 >= '0' && gikAprContents.kpi2 <= '19.05')?'red':(gikAprContents.kpi2 > '19.05' && gikAprContents.kpi2 <= '25.4')?'orange':(gikAprContents.kpi2 > '25.4' && gikAprContents.kpi2 < '31.75')?'yellow-7':(gikAprContents.kpi2 >= '31.75' && gikAprContents.kpi2 < '38.1')?'green':(gikAprContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi3 == null)?'grey-2':(gikAprContents.kpi3 >= '0' && gikAprContents.kpi3 <= '19.35')?'red':(gikAprContents.kpi3 > '19.35' && gikAprContents.kpi3 <= '25.8')?'orange':(gikAprContents.kpi3 > '25.8' && gikAprContents.kpi3 < '32.25')?'yellow-7':(gikAprContents.kpi3 >= '32.25' && gikAprContents.kpi3 < '38.7')?'green':(gikAprContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi4 == null)?'grey-2':(gikAprContents.kpi4 >= '0' && gikAprContents.kpi4 <= '19.2')?'red':(gikAprContents.kpi4 > '19.2' && gikAprContents.kpi4 <= '25.6')?'orange':(gikAprContents.kpi4 > '25.6' && gikAprContents.kpi4 < '32')?'yellow-7':(gikAprContents.kpi4 >= '32' && gikAprContents.kpi4 < '38.4')?'green':(gikAprContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi4}}
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
                              :color="(gikMayContents.kpi1 == null)?'grey-2':(gikMayContents.kpi1 >= '0' && gikMayContents.kpi1 <= '14.7')?'red':(gikMayContents.kpi1 > '14.7' && gikMayContents.kpi1 <= '19.6')?'orange':(gikMayContents.kpi1 > '19.6' && gikMayContents.kpi1 < '24.5')?'yellow-7':(gikMayContents.kpi1 >= '24.5' && gikMayContents.kpi1 < '29.4')?'green':(gikMayContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi2 == null)?'grey-2':(gikMayContents.kpi2 >= '0' && gikMayContents.kpi2 <= '19.05')?'red':(gikMayContents.kpi2 > '19.05' && gikMayContents.kpi2 <= '25.4')?'orange':(gikMayContents.kpi2 > '25.4' && gikMayContents.kpi2 < '31.75')?'yellow-7':(gikMayContents.kpi2 >= '31.75' && gikMayContents.kpi2 < '38.1')?'green':(gikMayContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi3 == null)?'grey-2':(gikMayContents.kpi3 >= '0' && gikMayContents.kpi3 <= '19.35')?'red':(gikMayContents.kpi3 > '19.35' && gikMayContents.kpi3 <= '25.8')?'orange':(gikMayContents.kpi3 > '25.8' && gikMayContents.kpi3 < '32.25')?'yellow-7':(gikMayContents.kpi3 >= '32.25' && gikMayContents.kpi3 < '38.7')?'green':(gikMayContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi4 == null)?'grey-2':(gikMayContents.kpi4 >= '0' && gikMayContents.kpi4 <= '19.2')?'red':(gikMayContents.kpi4 > '19.2' && gikMayContents.kpi4 <= '25.6')?'orange':(gikMayContents.kpi4 > '25.6' && gikMayContents.kpi4 < '32')?'yellow-7':(gikMayContents.kpi4 >= '32' && gikMayContents.kpi4 < '38.4')?'green':(gikMayContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi4}}
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
                              :color="(gikJunContents.kpi1 == null)?'grey-2':(gikJunContents.kpi1 >= '0' && gikJunContents.kpi1 <= '14.7')?'red':(gikJunContents.kpi1 > '14.7' && gikJunContents.kpi1 <= '19.6')?'orange':(gikJunContents.kpi1 > '19.6' && gikJunContents.kpi1 < '24.5')?'yellow-7':(gikJunContents.kpi1 >= '24.5' && gikJunContents.kpi1 < '29.4')?'green':(gikJunContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi2 == null)?'grey-2':(gikJunContents.kpi2 >= '0' && gikJunContents.kpi2 <= '19.05')?'red':(gikJunContents.kpi2 > '19.05' && gikJunContents.kpi2 <= '25.4')?'orange':(gikJunContents.kpi2 > '25.4' && gikJunContents.kpi2 < '31.75')?'yellow-7':(gikJunContents.kpi2 >= '31.75' && gikJunContents.kpi2 < '38.1')?'green':(gikJunContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi3 == null)?'grey-2':(gikJunContents.kpi3 >= '0' && gikJunContents.kpi3 <= '19.35')?'red':(gikJunContents.kpi3 > '19.35' && gikJunContents.kpi3 <= '25.8')?'orange':(gikJunContents.kpi3 > '25.8' && gikJunContents.kpi3 < '32.25')?'yellow-7':(gikJunContents.kpi3 >= '32.25' && gikJunContents.kpi3 < '38.7')?'green':(gikJunContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi4 == null)?'grey-2':(gikJunContents.kpi4 >= '0' && gikJunContents.kpi4 <= '19.2')?'red':(gikJunContents.kpi4 > '19.2' && gikJunContents.kpi4 <= '25.6')?'orange':(gikJunContents.kpi4 > '25.6' && gikJunContents.kpi4 < '32')?'yellow-7':(gikJunContents.kpi4 >= '32' && gikJunContents.kpi4 < '38.4')?'green':(gikJunContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi4}}
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
                              :color="(gikJulContents.kpi1 == null)?'grey-2':(gikJulContents.kpi1 >= '0' && gikJulContents.kpi1 <= '14.7')?'red':(gikJulContents.kpi1 > '14.7' && gikJulContents.kpi1 <= '19.6')?'orange':(gikJulContents.kpi1 > '19.6' && gikJulContents.kpi1 < '24.5')?'yellow-7':(gikJulContents.kpi1 >= '24.5' && gikJulContents.kpi1 < '29.4')?'green':(gikJulContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi2 == null)?'grey-2':(gikJulContents.kpi2 >= '0' && gikJulContents.kpi2 <= '19.05')?'red':(gikJulContents.kpi2 > '19.05' && gikJulContents.kpi2 <= '25.4')?'orange':(gikJulContents.kpi2 > '25.4' && gikJulContents.kpi2 < '31.75')?'yellow-7':(gikJulContents.kpi2 >= '31.75' && gikJulContents.kpi2 < '38.1')?'green':(gikJulContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi3 == null)?'grey-2':(gikJulContents.kpi3 >= '0' && gikJulContents.kpi3 <= '19.35')?'red':(gikJulContents.kpi3 > '19.35' && gikJulContents.kpi3 <= '25.8')?'orange':(gikJulContents.kpi3 > '25.8' && gikJulContents.kpi3 < '32.25')?'yellow-7':(gikJulContents.kpi3 >= '32.25' && gikJulContents.kpi3 < '38.7')?'green':(gikJulContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi4 == null)?'grey-2':(gikJulContents.kpi4 >= '0' && gikJulContents.kpi4 <= '19.2')?'red':(gikJulContents.kpi4 > '19.2' && gikJulContents.kpi4 <= '25.6')?'orange':(gikJulContents.kpi4 > '25.6' && gikJulContents.kpi4 < '32')?'yellow-7':(gikJulContents.kpi4 >= '32' && gikJulContents.kpi4 < '38.4')?'green':(gikJulContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi4}}
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
                              :color="(gikAugContents.kpi1 == null)?'grey-2':(gikAugContents.kpi1 >= '0' && gikAugContents.kpi1 <= '14.7')?'red':(gikAugContents.kpi1 > '14.7' && gikAugContents.kpi1 <= '19.6')?'orange':(gikAugContents.kpi1 > '19.6' && gikAugContents.kpi1 < '24.5')?'yellow-7':(gikAugContents.kpi1 >= '24.5' && gikAugContents.kpi1 < '29.4')?'green':(gikAugContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi2 == null)?'grey-2':(gikAugContents.kpi2 >= '0' && gikAugContents.kpi2 <= '19.05')?'red':(gikAugContents.kpi2 > '19.05' && gikAugContents.kpi2 <= '25.4')?'orange':(gikAugContents.kpi2 > '25.4' && gikAugContents.kpi2 < '31.75')?'yellow-7':(gikAugContents.kpi2 >= '31.75' && gikAugContents.kpi2 < '38.1')?'green':(gikAugContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi3 == null)?'grey-2':(gikAugContents.kpi3 >= '0' && gikAugContents.kpi3 <= '19.35')?'red':(gikAugContents.kpi3 > '19.35' && gikAugContents.kpi3 <= '25.8')?'orange':(gikAugContents.kpi3 > '25.8' && gikAugContents.kpi3 < '32.25')?'yellow-7':(gikAugContents.kpi3 >= '32.25' && gikAugContents.kpi3 < '38.7')?'green':(gikAugContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi4 == null)?'grey-2':(gikAugContents.kpi4 >= '0' && gikAugContents.kpi4 <= '19.2')?'red':(gikAugContents.kpi4 > '19.2' && gikAugContents.kpi4 <= '25.6')?'orange':(gikAugContents.kpi4 > '25.6' && gikAugContents.kpi4 < '32')?'yellow-7':(gikAugContents.kpi4 >= '32' && gikAugContents.kpi4 < '38.4')?'green':(gikAugContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi4}}
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
                              :color="(gikSepContents.kpi1 == null)?'grey-2':(gikSepContents.kpi1 >= '0' && gikSepContents.kpi1 <= '14.7')?'red':(gikSepContents.kpi1 > '14.7' && gikSepContents.kpi1 <= '19.6')?'orange':(gikSepContents.kpi1 > '19.6' && gikSepContents.kpi1 < '24.5')?'yellow-7':(gikSepContents.kpi1 >= '24.5' && gikSepContents.kpi1 < '29.4')?'green':(gikSepContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi2 == null)?'grey-2':(gikSepContents.kpi2 >= '0' && gikSepContents.kpi2 <= '19.05')?'red':(gikSepContents.kpi2 > '19.05' && gikSepContents.kpi2 <= '25.4')?'orange':(gikSepContents.kpi2 > '25.4' && gikSepContents.kpi2 < '31.75')?'yellow-7':(gikSepContents.kpi2 >= '31.75' && gikSepContents.kpi2 < '38.1')?'green':(gikSepContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi3 == null)?'grey-2':(gikSepContents.kpi3 >= '0' && gikSepContents.kpi3 <= '19.35')?'red':(gikSepContents.kpi3 > '19.35' && gikSepContents.kpi3 <= '25.8')?'orange':(gikSepContents.kpi3 > '25.8' && gikSepContents.kpi3 < '32.25')?'yellow-7':(gikSepContents.kpi3 >= '32.25' && gikSepContents.kpi3 < '38.7')?'green':(gikSepContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi4 == null)?'grey-2':(gikSepContents.kpi4 >= '0' && gikSepContents.kpi4 <= '19.2')?'red':(gikSepContents.kpi4 > '19.2' && gikSepContents.kpi4 <= '25.6')?'orange':(gikSepContents.kpi4 > '25.6' && gikSepContents.kpi4 < '32')?'yellow-7':(gikSepContents.kpi4 >= '32' && gikSepContents.kpi4 < '38.4')?'green':(gikSepContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi4}}
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
                              :color="(gikOctContents.kpi1 == null)?'grey-2':(gikOctContents.kpi1 >= '0' && gikOctContents.kpi1 <= '14.7')?'red':(gikOctContents.kpi1 > '14.7' && gikOctContents.kpi1 <= '19.6')?'orange':(gikOctContents.kpi1 > '19.6' && gikOctContents.kpi1 < '24.5')?'yellow-7':(gikOctContents.kpi1 >= '24.5' && gikOctContents.kpi1 < '29.4')?'green':(gikOctContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi2 == null)?'grey-2':(gikOctContents.kpi2 >= '0' && gikOctContents.kpi2 <= '19.05')?'red':(gikOctContents.kpi2 > '19.05' && gikOctContents.kpi2 <= '25.4')?'orange':(gikOctContents.kpi2 > '25.4' && gikOctContents.kpi2 < '31.75')?'yellow-7':(gikOctContents.kpi2 >= '31.75' && gikOctContents.kpi2 < '38.1')?'green':(gikOctContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi3 == null)?'grey-2':(gikOctContents.kpi3 >= '0' && gikOctContents.kpi3 <= '19.35')?'red':(gikOctContents.kpi3 > '19.35' && gikOctContents.kpi3 <= '25.8')?'orange':(gikOctContents.kpi3 > '25.8' && gikOctContents.kpi3 < '32.25')?'yellow-7':(gikOctContents.kpi3 >= '32.25' && gikOctContents.kpi3 < '38.7')?'green':(gikOctContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi4 == null)?'grey-2':(gikOctContents.kpi4 >= '0' && gikOctContents.kpi4 <= '19.2')?'red':(gikOctContents.kpi4 > '19.2' && gikOctContents.kpi4 <= '25.6')?'orange':(gikOctContents.kpi4 > '25.6' && gikOctContents.kpi4 < '32')?'yellow-7':(gikOctContents.kpi4 >= '32' && gikOctContents.kpi4 < '38.4')?'green':(gikOctContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi4}}
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
                              :color="(gikNovContents.kpi1 == null)?'grey-2':(gikNovContents.kpi1 >= '0' && gikNovContents.kpi1 <= '14.7')?'red':(gikNovContents.kpi1 > '14.7' && gikNovContents.kpi1 <= '19.6')?'orange':(gikNovContents.kpi1 > '19.6' && gikNovContents.kpi1 < '24.5')?'yellow-7':(gikNovContents.kpi1 >= '24.5' && gikNovContents.kpi1 < '29.4')?'green':(gikNovContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi2 == null)?'grey-2':(gikNovContents.kpi2 >= '0' && gikNovContents.kpi2 <= '19.05')?'red':(gikNovContents.kpi2 > '19.05' && gikNovContents.kpi2 <= '25.4')?'orange':(gikNovContents.kpi2 > '25.4' && gikNovContents.kpi2 < '31.75')?'yellow-7':(gikNovContents.kpi2 >= '31.75' && gikNovContents.kpi2 < '38.1')?'green':(gikNovContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi3 == null)?'grey-2':(gikNovContents.kpi3 >= '0' && gikNovContents.kpi3 <= '19.35')?'red':(gikNovContents.kpi3 > '19.35' && gikNovContents.kpi3 <= '25.8')?'orange':(gikNovContents.kpi3 > '25.8' && gikNovContents.kpi3 < '32.25')?'yellow-7':(gikNovContents.kpi3 >= '32.25' && gikNovContents.kpi3 < '38.7')?'green':(gikNovContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi4 == null)?'grey-2':(gikNovContents.kpi4 >= '0' && gikNovContents.kpi4 <= '19.2')?'red':(gikNovContents.kpi4 > '19.2' && gikNovContents.kpi4 <= '25.6')?'orange':(gikNovContents.kpi4 > '25.6' && gikNovContents.kpi4 < '32')?'yellow-7':(gikNovContents.kpi4 >= '32' && gikNovContents.kpi4 < '38.4')?'green':(gikNovContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi4}}
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
                              :color="(gikDecContents.kpi1 == null)?'grey-2':(gikDecContents.kpi1 >= '0' && gikDecContents.kpi1 <= '14.7')?'red':(gikDecContents.kpi1 > '14.7' && gikDecContents.kpi1 <= '19.6')?'orange':(gikDecContents.kpi1 > '19.6' && gikDecContents.kpi1 < '24.5')?'yellow-7':(gikDecContents.kpi1 >= '24.5' && gikDecContents.kpi1 < '29.4')?'green':(gikDecContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi2 == null)?'grey-2':(gikDecContents.kpi2 >= '0' && gikDecContents.kpi2 <= '19.05')?'red':(gikDecContents.kpi2 > '19.05' && gikDecContents.kpi2 <= '25.4')?'orange':(gikDecContents.kpi2 > '25.4' && gikDecContents.kpi2 < '31.75')?'yellow-7':(gikDecContents.kpi2 >= '31.75' && gikDecContents.kpi2 < '38.1')?'green':(gikDecContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi3 == null)?'grey-2':(gikDecContents.kpi3 >= '0' && gikDecContents.kpi3 <= '19.35')?'red':(gikDecContents.kpi3 > '19.35' && gikDecContents.kpi3 <= '25.8')?'orange':(gikDecContents.kpi3 > '25.8' && gikDecContents.kpi3 < '32.25')?'yellow-7':(gikDecContents.kpi3 >= '32.25' && gikDecContents.kpi3 < '38.7')?'green':(gikDecContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi4 == null)?'grey-2':(gikDecContents.kpi4 >= '0' && gikDecContents.kpi4 <= '19.2')?'red':(gikDecContents.kpi4 > '19.2' && gikDecContents.kpi4 <= '25.6')?'orange':(gikDecContents.kpi4 > '25.6' && gikDecContents.kpi4 < '32')?'yellow-7':(gikDecContents.kpi4 >= '32' && gikDecContents.kpi4 < '38.4')?'green':(gikDecContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/GIKlogoforTOP.png"></q-img>
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
                  <!--TABLE DONE-->
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
                              :color="(gikJanContents.kpi1 == null)?'grey-2':(gikJanContents.kpi1 >= '0' && gikJanContents.kpi1 <= '14.7')?'red':(gikJanContents.kpi1 > '14.7' && gikJanContents.kpi1 <= '19.6')?'orange':(gikJanContents.kpi1 > '19.6' && gikJanContents.kpi1 < '24.5')?'yellow-7':(gikJanContents.kpi1 >= '24.5' && gikJanContents.kpi1 < '29.4')?'green':(gikJanContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi2 == null)?'grey-2':(gikJanContents.kpi2 >= '0' && gikJanContents.kpi2 <= '19.05')?'red':(gikJanContents.kpi2 > '19.05' && gikJanContents.kpi2 <= '25.4')?'orange':(gikJanContents.kpi2 > '25.4' && gikJanContents.kpi2 < '31.75')?'yellow-7':(gikJanContents.kpi2 >= '31.75' && gikJanContents.kpi2 < '38.1')?'green':(gikJanContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi3 == null)?'grey-2':(gikJanContents.kpi3 >= '0' && gikJanContents.kpi3 <= '19.35')?'red':(gikJanContents.kpi3 > '19.35' && gikJanContents.kpi3 <= '25.8')?'orange':(gikJanContents.kpi3 > '25.8' && gikJanContents.kpi3 < '32.25')?'yellow-7':(gikJanContents.kpi3 >= '32.25' && gikJanContents.kpi3 < '38.7')?'green':(gikJanContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi4 == null)?'grey-2':(gikJanContents.kpi4 >= '0' && gikJanContents.kpi4 <= '19.2')?'red':(gikJanContents.kpi4 > '19.2' && gikJanContents.kpi4 <= '25.6')?'orange':(gikJanContents.kpi4 > '25.6' && gikJanContents.kpi4 < '32')?'yellow-7':(gikJanContents.kpi4 >= '32' && gikJanContents.kpi4 < '38.4')?'green':(gikJanContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi4}}
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
                              :color="(gikFebContents.kpi1 == null)?'grey-2':(gikFebContents.kpi1 >= '0' && gikFebContents.kpi1 <= '14.7')?'red':(gikFebContents.kpi1 > '14.7' && gikFebContents.kpi1 <= '19.6')?'orange':(gikFebContents.kpi1 > '19.6' && gikFebContents.kpi1 < '24.5')?'yellow-7':(gikFebContents.kpi1 >= '24.5' && gikFebContents.kpi1 < '29.4')?'green':(gikFebContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi2 == null)?'grey-2':(gikFebContents.kpi2 >= '0' && gikFebContents.kpi2 <= '19.05')?'red':(gikFebContents.kpi2 > '19.05' && gikFebContents.kpi2 <= '25.4')?'orange':(gikFebContents.kpi2 > '25.4' && gikFebContents.kpi2 < '31.75')?'yellow-7':(gikFebContents.kpi2 >= '31.75' && gikFebContents.kpi2 < '38.1')?'green':(gikFebContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi3 == null)?'grey-2':(gikFebContents.kpi3 >= '0' && gikFebContents.kpi3 <= '19.35')?'red':(gikFebContents.kpi3 > '19.35' && gikFebContents.kpi3 <= '25.8')?'orange':(gikFebContents.kpi3 > '25.8' && gikFebContents.kpi3 < '32.25')?'yellow-7':(gikFebContents.kpi3 >= '32.25' && gikFebContents.kpi3 < '38.7')?'green':(gikFebContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi4 == null)?'grey-2':(gikFebContents.kpi4 >= '0' && gikFebContents.kpi4 <= '19.2')?'red':(gikFebContents.kpi4 > '19.2' && gikFebContents.kpi4 <= '25.6')?'orange':(gikFebContents.kpi4 > '25.6' && gikFebContents.kpi4 < '32')?'yellow-7':(gikFebContents.kpi4 >= '32' && gikFebContents.kpi4 < '38.4')?'green':(gikFebContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi4}}
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
                              :color="(gikMarContents.kpi1 == null)?'grey-2':(gikMarContents.kpi1 >= '0' && gikMarContents.kpi1 <= '14.7')?'red':(gikMarContents.kpi1 > '14.7' && gikMarContents.kpi1 <= '19.6')?'orange':(gikMarContents.kpi1 > '19.6' && gikMarContents.kpi1 < '24.5')?'yellow-7':(gikMarContents.kpi1 >= '24.5' && gikMarContents.kpi1 < '29.4')?'green':(gikMarContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi2 == null)?'grey-2':(gikMarContents.kpi2 >= '0' && gikMarContents.kpi2 <= '19.05')?'red':(gikMarContents.kpi2 > '19.05' && gikMarContents.kpi2 <= '25.4')?'orange':(gikMarContents.kpi2 > '25.4' && gikMarContents.kpi2 < '31.75')?'yellow-7':(gikMarContents.kpi2 >= '31.75' && gikMarContents.kpi2 < '38.1')?'green':(gikMarContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi3 == null)?'grey-2':(gikMarContents.kpi3 >= '0' && gikMarContents.kpi3 <= '19.35')?'red':(gikMarContents.kpi3 > '19.35' && gikMarContents.kpi3 <= '25.8')?'orange':(gikMarContents.kpi3 > '25.8' && gikMarContents.kpi3 < '32.25')?'yellow-7':(gikMarContents.kpi3 >= '32.25' && gikMarContents.kpi3 < '38.7')?'green':(gikMarContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi4 == null)?'grey-2':(gikMarContents.kpi4 >= '0' && gikMarContents.kpi4 <= '19.2')?'red':(gikMarContents.kpi4 > '19.2' && gikMarContents.kpi4 <= '25.6')?'orange':(gikMarContents.kpi4 > '25.6' && gikMarContents.kpi4 < '32')?'yellow-7':(gikMarContents.kpi4 >= '32' && gikMarContents.kpi4 < '38.4')?'green':(gikMarContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi4}}
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
                              :color="(gikAprContents.kpi1 == null)?'grey-2':(gikAprContents.kpi1 >= '0' && gikAprContents.kpi1 <= '14.7')?'red':(gikAprContents.kpi1 > '14.7' && gikAprContents.kpi1 <= '19.6')?'orange':(gikAprContents.kpi1 > '19.6' && gikAprContents.kpi1 < '24.5')?'yellow-7':(gikAprContents.kpi1 >= '24.5' && gikAprContents.kpi1 < '29.4')?'green':(gikAprContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi2 == null)?'grey-2':(gikAprContents.kpi2 >= '0' && gikAprContents.kpi2 <= '19.05')?'red':(gikAprContents.kpi2 > '19.05' && gikAprContents.kpi2 <= '25.4')?'orange':(gikAprContents.kpi2 > '25.4' && gikAprContents.kpi2 < '31.75')?'yellow-7':(gikAprContents.kpi2 >= '31.75' && gikAprContents.kpi2 < '38.1')?'green':(gikAprContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi3 == null)?'grey-2':(gikAprContents.kpi3 >= '0' && gikAprContents.kpi3 <= '19.35')?'red':(gikAprContents.kpi3 > '19.35' && gikAprContents.kpi3 <= '25.8')?'orange':(gikAprContents.kpi3 > '25.8' && gikAprContents.kpi3 < '32.25')?'yellow-7':(gikAprContents.kpi3 >= '32.25' && gikAprContents.kpi3 < '38.7')?'green':(gikAprContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi4 == null)?'grey-2':(gikAprContents.kpi4 >= '0' && gikAprContents.kpi4 <= '19.2')?'red':(gikAprContents.kpi4 > '19.2' && gikAprContents.kpi4 <= '25.6')?'orange':(gikAprContents.kpi4 > '25.6' && gikAprContents.kpi4 < '32')?'yellow-7':(gikAprContents.kpi4 >= '32' && gikAprContents.kpi4 < '38.4')?'green':(gikAprContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi4}}
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
                              :color="(gikMayContents.kpi1 == null)?'grey-2':(gikMayContents.kpi1 >= '0' && gikMayContents.kpi1 <= '14.7')?'red':(gikMayContents.kpi1 > '14.7' && gikMayContents.kpi1 <= '19.6')?'orange':(gikMayContents.kpi1 > '19.6' && gikMayContents.kpi1 < '24.5')?'yellow-7':(gikMayContents.kpi1 >= '24.5' && gikMayContents.kpi1 < '29.4')?'green':(gikMayContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi2 == null)?'grey-2':(gikMayContents.kpi2 >= '0' && gikMayContents.kpi2 <= '19.05')?'red':(gikMayContents.kpi2 > '19.05' && gikMayContents.kpi2 <= '25.4')?'orange':(gikMayContents.kpi2 > '25.4' && gikMayContents.kpi2 < '31.75')?'yellow-7':(gikMayContents.kpi2 >= '31.75' && gikMayContents.kpi2 < '38.1')?'green':(gikMayContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi3 == null)?'grey-2':(gikMayContents.kpi3 >= '0' && gikMayContents.kpi3 <= '19.35')?'red':(gikMayContents.kpi3 > '19.35' && gikMayContents.kpi3 <= '25.8')?'orange':(gikMayContents.kpi3 > '25.8' && gikMayContents.kpi3 < '32.25')?'yellow-7':(gikMayContents.kpi3 >= '32.25' && gikMayContents.kpi3 < '38.7')?'green':(gikMayContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi4 == null)?'grey-2':(gikMayContents.kpi4 >= '0' && gikMayContents.kpi4 <= '19.2')?'red':(gikMayContents.kpi4 > '19.2' && gikMayContents.kpi4 <= '25.6')?'orange':(gikMayContents.kpi4 > '25.6' && gikMayContents.kpi4 < '32')?'yellow-7':(gikMayContents.kpi4 >= '32' && gikMayContents.kpi4 < '38.4')?'green':(gikMayContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi4}}
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
                              :color="(gikJunContents.kpi1 == null)?'grey-2':(gikJunContents.kpi1 >= '0' && gikJunContents.kpi1 <= '14.7')?'red':(gikJunContents.kpi1 > '14.7' && gikJunContents.kpi1 <= '19.6')?'orange':(gikJunContents.kpi1 > '19.6' && gikJunContents.kpi1 < '24.5')?'yellow-7':(gikJunContents.kpi1 >= '24.5' && gikJunContents.kpi1 < '29.4')?'green':(gikJunContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi2 == null)?'grey-2':(gikJunContents.kpi2 >= '0' && gikJunContents.kpi2 <= '19.05')?'red':(gikJunContents.kpi2 > '19.05' && gikJunContents.kpi2 <= '25.4')?'orange':(gikJunContents.kpi2 > '25.4' && gikJunContents.kpi2 < '31.75')?'yellow-7':(gikJunContents.kpi2 >= '31.75' && gikJunContents.kpi2 < '38.1')?'green':(gikJunContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi3 == null)?'grey-2':(gikJunContents.kpi3 >= '0' && gikJunContents.kpi3 <= '19.35')?'red':(gikJunContents.kpi3 > '19.35' && gikJunContents.kpi3 <= '25.8')?'orange':(gikJunContents.kpi3 > '25.8' && gikJunContents.kpi3 < '32.25')?'yellow-7':(gikJunContents.kpi3 >= '32.25' && gikJunContents.kpi3 < '38.7')?'green':(gikJunContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi4 == null)?'grey-2':(gikJunContents.kpi4 >= '0' && gikJunContents.kpi4 <= '19.2')?'red':(gikJunContents.kpi4 > '19.2' && gikJunContents.kpi4 <= '25.6')?'orange':(gikJunContents.kpi4 > '25.6' && gikJunContents.kpi4 < '32')?'yellow-7':(gikJunContents.kpi4 >= '32' && gikJunContents.kpi4 < '38.4')?'green':(gikJunContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi4}}
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
                              :color="(gikJulContents.kpi1 == null)?'grey-2':(gikJulContents.kpi1 >= '0' && gikJulContents.kpi1 <= '14.7')?'red':(gikJulContents.kpi1 > '14.7' && gikJulContents.kpi1 <= '19.6')?'orange':(gikJulContents.kpi1 > '19.6' && gikJulContents.kpi1 < '24.5')?'yellow-7':(gikJulContents.kpi1 >= '24.5' && gikJulContents.kpi1 < '29.4')?'green':(gikJulContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi2 == null)?'grey-2':(gikJulContents.kpi2 >= '0' && gikJulContents.kpi2 <= '19.05')?'red':(gikJulContents.kpi2 > '19.05' && gikJulContents.kpi2 <= '25.4')?'orange':(gikJulContents.kpi2 > '25.4' && gikJulContents.kpi2 < '31.75')?'yellow-7':(gikJulContents.kpi2 >= '31.75' && gikJulContents.kpi2 < '38.1')?'green':(gikJulContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi3 == null)?'grey-2':(gikJulContents.kpi3 >= '0' && gikJulContents.kpi3 <= '19.35')?'red':(gikJulContents.kpi3 > '19.35' && gikJulContents.kpi3 <= '25.8')?'orange':(gikJulContents.kpi3 > '25.8' && gikJulContents.kpi3 < '32.25')?'yellow-7':(gikJulContents.kpi3 >= '32.25' && gikJulContents.kpi3 < '38.7')?'green':(gikJulContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi4 == null)?'grey-2':(gikJulContents.kpi4 >= '0' && gikJulContents.kpi4 <= '19.2')?'red':(gikJulContents.kpi4 > '19.2' && gikJulContents.kpi4 <= '25.6')?'orange':(gikJulContents.kpi4 > '25.6' && gikJulContents.kpi4 < '32')?'yellow-7':(gikJulContents.kpi4 >= '32' && gikJulContents.kpi4 < '38.4')?'green':(gikJulContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi4}}
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
                              :color="(gikAugContents.kpi1 == null)?'grey-2':(gikAugContents.kpi1 >= '0' && gikAugContents.kpi1 <= '14.7')?'red':(gikAugContents.kpi1 > '14.7' && gikAugContents.kpi1 <= '19.6')?'orange':(gikAugContents.kpi1 > '19.6' && gikAugContents.kpi1 < '24.5')?'yellow-7':(gikAugContents.kpi1 >= '24.5' && gikAugContents.kpi1 < '29.4')?'green':(gikAugContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi2 == null)?'grey-2':(gikAugContents.kpi2 >= '0' && gikAugContents.kpi2 <= '19.05')?'red':(gikAugContents.kpi2 > '19.05' && gikAugContents.kpi2 <= '25.4')?'orange':(gikAugContents.kpi2 > '25.4' && gikAugContents.kpi2 < '31.75')?'yellow-7':(gikAugContents.kpi2 >= '31.75' && gikAugContents.kpi2 < '38.1')?'green':(gikAugContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi3 == null)?'grey-2':(gikAugContents.kpi3 >= '0' && gikAugContents.kpi3 <= '19.35')?'red':(gikAugContents.kpi3 > '19.35' && gikAugContents.kpi3 <= '25.8')?'orange':(gikAugContents.kpi3 > '25.8' && gikAugContents.kpi3 < '32.25')?'yellow-7':(gikAugContents.kpi3 >= '32.25' && gikAugContents.kpi3 < '38.7')?'green':(gikAugContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi4 == null)?'grey-2':(gikAugContents.kpi4 >= '0' && gikAugContents.kpi4 <= '19.2')?'red':(gikAugContents.kpi4 > '19.2' && gikAugContents.kpi4 <= '25.6')?'orange':(gikAugContents.kpi4 > '25.6' && gikAugContents.kpi4 < '32')?'yellow-7':(gikAugContents.kpi4 >= '32' && gikAugContents.kpi4 < '38.4')?'green':(gikAugContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi4}}
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
                              :color="(gikSepContents.kpi1 == null)?'grey-2':(gikSepContents.kpi1 >= '0' && gikSepContents.kpi1 <= '14.7')?'red':(gikSepContents.kpi1 > '14.7' && gikSepContents.kpi1 <= '19.6')?'orange':(gikSepContents.kpi1 > '19.6' && gikSepContents.kpi1 < '24.5')?'yellow-7':(gikSepContents.kpi1 >= '24.5' && gikSepContents.kpi1 < '29.4')?'green':(gikSepContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi2 == null)?'grey-2':(gikSepContents.kpi2 >= '0' && gikSepContents.kpi2 <= '19.05')?'red':(gikSepContents.kpi2 > '19.05' && gikSepContents.kpi2 <= '25.4')?'orange':(gikSepContents.kpi2 > '25.4' && gikSepContents.kpi2 < '31.75')?'yellow-7':(gikSepContents.kpi2 >= '31.75' && gikSepContents.kpi2 < '38.1')?'green':(gikSepContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi3 == null)?'grey-2':(gikSepContents.kpi3 >= '0' && gikSepContents.kpi3 <= '19.35')?'red':(gikSepContents.kpi3 > '19.35' && gikSepContents.kpi3 <= '25.8')?'orange':(gikSepContents.kpi3 > '25.8' && gikSepContents.kpi3 < '32.25')?'yellow-7':(gikSepContents.kpi3 >= '32.25' && gikSepContents.kpi3 < '38.7')?'green':(gikSepContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi4 == null)?'grey-2':(gikSepContents.kpi4 >= '0' && gikSepContents.kpi4 <= '19.2')?'red':(gikSepContents.kpi4 > '19.2' && gikSepContents.kpi4 <= '25.6')?'orange':(gikSepContents.kpi4 > '25.6' && gikSepContents.kpi4 < '32')?'yellow-7':(gikSepContents.kpi4 >= '32' && gikSepContents.kpi4 < '38.4')?'green':(gikSepContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi4}}
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
                              :color="(gikOctContents.kpi1 == null)?'grey-2':(gikOctContents.kpi1 >= '0' && gikOctContents.kpi1 <= '14.7')?'red':(gikOctContents.kpi1 > '14.7' && gikOctContents.kpi1 <= '19.6')?'orange':(gikOctContents.kpi1 > '19.6' && gikOctContents.kpi1 < '24.5')?'yellow-7':(gikOctContents.kpi1 >= '24.5' && gikOctContents.kpi1 < '29.4')?'green':(gikOctContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi2 == null)?'grey-2':(gikOctContents.kpi2 >= '0' && gikOctContents.kpi2 <= '19.05')?'red':(gikOctContents.kpi2 > '19.05' && gikOctContents.kpi2 <= '25.4')?'orange':(gikOctContents.kpi2 > '25.4' && gikOctContents.kpi2 < '31.75')?'yellow-7':(gikOctContents.kpi2 >= '31.75' && gikOctContents.kpi2 < '38.1')?'green':(gikOctContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi3 == null)?'grey-2':(gikOctContents.kpi3 >= '0' && gikOctContents.kpi3 <= '19.35')?'red':(gikOctContents.kpi3 > '19.35' && gikOctContents.kpi3 <= '25.8')?'orange':(gikOctContents.kpi3 > '25.8' && gikOctContents.kpi3 < '32.25')?'yellow-7':(gikOctContents.kpi3 >= '32.25' && gikOctContents.kpi3 < '38.7')?'green':(gikOctContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi4 == null)?'grey-2':(gikOctContents.kpi4 >= '0' && gikOctContents.kpi4 <= '19.2')?'red':(gikOctContents.kpi4 > '19.2' && gikOctContents.kpi4 <= '25.6')?'orange':(gikOctContents.kpi4 > '25.6' && gikOctContents.kpi4 < '32')?'yellow-7':(gikOctContents.kpi4 >= '32' && gikOctContents.kpi4 < '38.4')?'green':(gikOctContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi4}}
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
                              :color="(gikNovContents.kpi1 == null)?'grey-2':(gikNovContents.kpi1 >= '0' && gikNovContents.kpi1 <= '14.7')?'red':(gikNovContents.kpi1 > '14.7' && gikNovContents.kpi1 <= '19.6')?'orange':(gikNovContents.kpi1 > '19.6' && gikNovContents.kpi1 < '24.5')?'yellow-7':(gikNovContents.kpi1 >= '24.5' && gikNovContents.kpi1 < '29.4')?'green':(gikNovContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi2 == null)?'grey-2':(gikNovContents.kpi2 >= '0' && gikNovContents.kpi2 <= '19.05')?'red':(gikNovContents.kpi2 > '19.05' && gikNovContents.kpi2 <= '25.4')?'orange':(gikNovContents.kpi2 > '25.4' && gikNovContents.kpi2 < '31.75')?'yellow-7':(gikNovContents.kpi2 >= '31.75' && gikNovContents.kpi2 < '38.1')?'green':(gikNovContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi3 == null)?'grey-2':(gikNovContents.kpi3 >= '0' && gikNovContents.kpi3 <= '19.35')?'red':(gikNovContents.kpi3 > '19.35' && gikNovContents.kpi3 <= '25.8')?'orange':(gikNovContents.kpi3 > '25.8' && gikNovContents.kpi3 < '32.25')?'yellow-7':(gikNovContents.kpi3 >= '32.25' && gikNovContents.kpi3 < '38.7')?'green':(gikNovContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi4 == null)?'grey-2':(gikNovContents.kpi4 >= '0' && gikNovContents.kpi4 <= '19.2')?'red':(gikNovContents.kpi4 > '19.2' && gikNovContents.kpi4 <= '25.6')?'orange':(gikNovContents.kpi4 > '25.6' && gikNovContents.kpi4 < '32')?'yellow-7':(gikNovContents.kpi4 >= '32' && gikNovContents.kpi4 < '38.4')?'green':(gikNovContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi4}}
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
                              :color="(gikDecContents.kpi1 == null)?'grey-2':(gikDecContents.kpi1 >= '0' && gikDecContents.kpi1 <= '14.7')?'red':(gikDecContents.kpi1 > '14.7' && gikDecContents.kpi1 <= '19.6')?'orange':(gikDecContents.kpi1 > '19.6' && gikDecContents.kpi1 < '24.5')?'yellow-7':(gikDecContents.kpi1 >= '24.5' && gikDecContents.kpi1 < '29.4')?'green':(gikDecContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi2 == null)?'grey-2':(gikDecContents.kpi2 >= '0' && gikDecContents.kpi2 <= '19.05')?'red':(gikDecContents.kpi2 > '19.05' && gikDecContents.kpi2 <= '25.4')?'orange':(gikDecContents.kpi2 > '25.4' && gikDecContents.kpi2 < '31.75')?'yellow-7':(gikDecContents.kpi2 >= '31.75' && gikDecContents.kpi2 < '38.1')?'green':(gikDecContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi3 == null)?'grey-2':(gikDecContents.kpi3 >= '0' && gikDecContents.kpi3 <= '19.35')?'red':(gikDecContents.kpi3 > '19.35' && gikDecContents.kpi3 <= '25.8')?'orange':(gikDecContents.kpi3 > '25.8' && gikDecContents.kpi3 < '32.25')?'yellow-7':(gikDecContents.kpi3 >= '32.25' && gikDecContents.kpi3 < '38.7')?'green':(gikDecContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi4 == null)?'grey-2':(gikDecContents.kpi4 >= '0' && gikDecContents.kpi4 <= '19.2')?'red':(gikDecContents.kpi4 > '19.2' && gikDecContents.kpi4 <= '25.6')?'orange':(gikDecContents.kpi4 > '25.6' && gikDecContents.kpi4 < '32')?'yellow-7':(gikDecContents.kpi4 >= '32' && gikDecContents.kpi4 < '38.4')?'green':(gikDecContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/GIKlogoforTOP.png"></q-img>
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
                  <!--TABLE DONE-->
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
                              :color="(gikJanContents.kpi1 == null)?'grey-2':(gikJanContents.kpi1 >= '0' && gikJanContents.kpi1 <= '14.7')?'red':(gikJanContents.kpi1 > '14.7' && gikJanContents.kpi1 <= '19.6')?'orange':(gikJanContents.kpi1 > '19.6' && gikJanContents.kpi1 < '24.5')?'yellow-7':(gikJanContents.kpi1 >= '24.5' && gikJanContents.kpi1 < '29.4')?'green':(gikJanContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi2 == null)?'grey-2':(gikJanContents.kpi2 >= '0' && gikJanContents.kpi2 <= '19.05')?'red':(gikJanContents.kpi2 > '19.05' && gikJanContents.kpi2 <= '25.4')?'orange':(gikJanContents.kpi2 > '25.4' && gikJanContents.kpi2 < '31.75')?'yellow-7':(gikJanContents.kpi2 >= '31.75' && gikJanContents.kpi2 < '38.1')?'green':(gikJanContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi3 == null)?'grey-2':(gikJanContents.kpi3 >= '0' && gikJanContents.kpi3 <= '19.35')?'red':(gikJanContents.kpi3 > '19.35' && gikJanContents.kpi3 <= '25.8')?'orange':(gikJanContents.kpi3 > '25.8' && gikJanContents.kpi3 < '32.25')?'yellow-7':(gikJanContents.kpi3 >= '32.25' && gikJanContents.kpi3 < '38.7')?'green':(gikJanContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi4 == null)?'grey-2':(gikJanContents.kpi4 >= '0' && gikJanContents.kpi4 <= '19.2')?'red':(gikJanContents.kpi4 > '19.2' && gikJanContents.kpi4 <= '25.6')?'orange':(gikJanContents.kpi4 > '25.6' && gikJanContents.kpi4 < '32')?'yellow-7':(gikJanContents.kpi4 >= '32' && gikJanContents.kpi4 < '38.4')?'green':(gikJanContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi4}}
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
                              :color="(gikFebContents.kpi1 == null)?'grey-2':(gikFebContents.kpi1 >= '0' && gikFebContents.kpi1 <= '14.7')?'red':(gikFebContents.kpi1 > '14.7' && gikFebContents.kpi1 <= '19.6')?'orange':(gikFebContents.kpi1 > '19.6' && gikFebContents.kpi1 < '24.5')?'yellow-7':(gikFebContents.kpi1 >= '24.5' && gikFebContents.kpi1 < '29.4')?'green':(gikFebContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi2 == null)?'grey-2':(gikFebContents.kpi2 >= '0' && gikFebContents.kpi2 <= '19.05')?'red':(gikFebContents.kpi2 > '19.05' && gikFebContents.kpi2 <= '25.4')?'orange':(gikFebContents.kpi2 > '25.4' && gikFebContents.kpi2 < '31.75')?'yellow-7':(gikFebContents.kpi2 >= '31.75' && gikFebContents.kpi2 < '38.1')?'green':(gikFebContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi3 == null)?'grey-2':(gikFebContents.kpi3 >= '0' && gikFebContents.kpi3 <= '19.35')?'red':(gikFebContents.kpi3 > '19.35' && gikFebContents.kpi3 <= '25.8')?'orange':(gikFebContents.kpi3 > '25.8' && gikFebContents.kpi3 < '32.25')?'yellow-7':(gikFebContents.kpi3 >= '32.25' && gikFebContents.kpi3 < '38.7')?'green':(gikFebContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi4 == null)?'grey-2':(gikFebContents.kpi4 >= '0' && gikFebContents.kpi4 <= '19.2')?'red':(gikFebContents.kpi4 > '19.2' && gikFebContents.kpi4 <= '25.6')?'orange':(gikFebContents.kpi4 > '25.6' && gikFebContents.kpi4 < '32')?'yellow-7':(gikFebContents.kpi4 >= '32' && gikFebContents.kpi4 < '38.4')?'green':(gikFebContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi4}}
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
                              :color="(gikMarContents.kpi1 == null)?'grey-2':(gikMarContents.kpi1 >= '0' && gikMarContents.kpi1 <= '14.7')?'red':(gikMarContents.kpi1 > '14.7' && gikMarContents.kpi1 <= '19.6')?'orange':(gikMarContents.kpi1 > '19.6' && gikMarContents.kpi1 < '24.5')?'yellow-7':(gikMarContents.kpi1 >= '24.5' && gikMarContents.kpi1 < '29.4')?'green':(gikMarContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi2 == null)?'grey-2':(gikMarContents.kpi2 >= '0' && gikMarContents.kpi2 <= '19.05')?'red':(gikMarContents.kpi2 > '19.05' && gikMarContents.kpi2 <= '25.4')?'orange':(gikMarContents.kpi2 > '25.4' && gikMarContents.kpi2 < '31.75')?'yellow-7':(gikMarContents.kpi2 >= '31.75' && gikMarContents.kpi2 < '38.1')?'green':(gikMarContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi3 == null)?'grey-2':(gikMarContents.kpi3 >= '0' && gikMarContents.kpi3 <= '19.35')?'red':(gikMarContents.kpi3 > '19.35' && gikMarContents.kpi3 <= '25.8')?'orange':(gikMarContents.kpi3 > '25.8' && gikMarContents.kpi3 < '32.25')?'yellow-7':(gikMarContents.kpi3 >= '32.25' && gikMarContents.kpi3 < '38.7')?'green':(gikMarContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi4 == null)?'grey-2':(gikMarContents.kpi4 >= '0' && gikMarContents.kpi4 <= '19.2')?'red':(gikMarContents.kpi4 > '19.2' && gikMarContents.kpi4 <= '25.6')?'orange':(gikMarContents.kpi4 > '25.6' && gikMarContents.kpi4 < '32')?'yellow-7':(gikMarContents.kpi4 >= '32' && gikMarContents.kpi4 < '38.4')?'green':(gikMarContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi4}}
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
                              :color="(gikAprContents.kpi1 == null)?'grey-2':(gikAprContents.kpi1 >= '0' && gikAprContents.kpi1 <= '14.7')?'red':(gikAprContents.kpi1 > '14.7' && gikAprContents.kpi1 <= '19.6')?'orange':(gikAprContents.kpi1 > '19.6' && gikAprContents.kpi1 < '24.5')?'yellow-7':(gikAprContents.kpi1 >= '24.5' && gikAprContents.kpi1 < '29.4')?'green':(gikAprContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi2 == null)?'grey-2':(gikAprContents.kpi2 >= '0' && gikAprContents.kpi2 <= '19.05')?'red':(gikAprContents.kpi2 > '19.05' && gikAprContents.kpi2 <= '25.4')?'orange':(gikAprContents.kpi2 > '25.4' && gikAprContents.kpi2 < '31.75')?'yellow-7':(gikAprContents.kpi2 >= '31.75' && gikAprContents.kpi2 < '38.1')?'green':(gikAprContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi3 == null)?'grey-2':(gikAprContents.kpi3 >= '0' && gikAprContents.kpi3 <= '19.35')?'red':(gikAprContents.kpi3 > '19.35' && gikAprContents.kpi3 <= '25.8')?'orange':(gikAprContents.kpi3 > '25.8' && gikAprContents.kpi3 < '32.25')?'yellow-7':(gikAprContents.kpi3 >= '32.25' && gikAprContents.kpi3 < '38.7')?'green':(gikAprContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi4 == null)?'grey-2':(gikAprContents.kpi4 >= '0' && gikAprContents.kpi4 <= '19.2')?'red':(gikAprContents.kpi4 > '19.2' && gikAprContents.kpi4 <= '25.6')?'orange':(gikAprContents.kpi4 > '25.6' && gikAprContents.kpi4 < '32')?'yellow-7':(gikAprContents.kpi4 >= '32' && gikAprContents.kpi4 < '38.4')?'green':(gikAprContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi4}}
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
                              :color="(gikMayContents.kpi1 == null)?'grey-2':(gikMayContents.kpi1 >= '0' && gikMayContents.kpi1 <= '14.7')?'red':(gikMayContents.kpi1 > '14.7' && gikMayContents.kpi1 <= '19.6')?'orange':(gikMayContents.kpi1 > '19.6' && gikMayContents.kpi1 < '24.5')?'yellow-7':(gikMayContents.kpi1 >= '24.5' && gikMayContents.kpi1 < '29.4')?'green':(gikMayContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi2 == null)?'grey-2':(gikMayContents.kpi2 >= '0' && gikMayContents.kpi2 <= '19.05')?'red':(gikMayContents.kpi2 > '19.05' && gikMayContents.kpi2 <= '25.4')?'orange':(gikMayContents.kpi2 > '25.4' && gikMayContents.kpi2 < '31.75')?'yellow-7':(gikMayContents.kpi2 >= '31.75' && gikMayContents.kpi2 < '38.1')?'green':(gikMayContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi3 == null)?'grey-2':(gikMayContents.kpi3 >= '0' && gikMayContents.kpi3 <= '19.35')?'red':(gikMayContents.kpi3 > '19.35' && gikMayContents.kpi3 <= '25.8')?'orange':(gikMayContents.kpi3 > '25.8' && gikMayContents.kpi3 < '32.25')?'yellow-7':(gikMayContents.kpi3 >= '32.25' && gikMayContents.kpi3 < '38.7')?'green':(gikMayContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi4 == null)?'grey-2':(gikMayContents.kpi4 >= '0' && gikMayContents.kpi4 <= '19.2')?'red':(gikMayContents.kpi4 > '19.2' && gikMayContents.kpi4 <= '25.6')?'orange':(gikMayContents.kpi4 > '25.6' && gikMayContents.kpi4 < '32')?'yellow-7':(gikMayContents.kpi4 >= '32' && gikMayContents.kpi4 < '38.4')?'green':(gikMayContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi4}}
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
                              :color="(gikJunContents.kpi1 == null)?'grey-2':(gikJunContents.kpi1 >= '0' && gikJunContents.kpi1 <= '14.7')?'red':(gikJunContents.kpi1 > '14.7' && gikJunContents.kpi1 <= '19.6')?'orange':(gikJunContents.kpi1 > '19.6' && gikJunContents.kpi1 < '24.5')?'yellow-7':(gikJunContents.kpi1 >= '24.5' && gikJunContents.kpi1 < '29.4')?'green':(gikJunContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi2 == null)?'grey-2':(gikJunContents.kpi2 >= '0' && gikJunContents.kpi2 <= '19.05')?'red':(gikJunContents.kpi2 > '19.05' && gikJunContents.kpi2 <= '25.4')?'orange':(gikJunContents.kpi2 > '25.4' && gikJunContents.kpi2 < '31.75')?'yellow-7':(gikJunContents.kpi2 >= '31.75' && gikJunContents.kpi2 < '38.1')?'green':(gikJunContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi3 == null)?'grey-2':(gikJunContents.kpi3 >= '0' && gikJunContents.kpi3 <= '19.35')?'red':(gikJunContents.kpi3 > '19.35' && gikJunContents.kpi3 <= '25.8')?'orange':(gikJunContents.kpi3 > '25.8' && gikJunContents.kpi3 < '32.25')?'yellow-7':(gikJunContents.kpi3 >= '32.25' && gikJunContents.kpi3 < '38.7')?'green':(gikJunContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi4 == null)?'grey-2':(gikJunContents.kpi4 >= '0' && gikJunContents.kpi4 <= '19.2')?'red':(gikJunContents.kpi4 > '19.2' && gikJunContents.kpi4 <= '25.6')?'orange':(gikJunContents.kpi4 > '25.6' && gikJunContents.kpi4 < '32')?'yellow-7':(gikJunContents.kpi4 >= '32' && gikJunContents.kpi4 < '38.4')?'green':(gikJunContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi4}}
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
                              :color="(gikJulContents.kpi1 == null)?'grey-2':(gikJulContents.kpi1 >= '0' && gikJulContents.kpi1 <= '14.7')?'red':(gikJulContents.kpi1 > '14.7' && gikJulContents.kpi1 <= '19.6')?'orange':(gikJulContents.kpi1 > '19.6' && gikJulContents.kpi1 < '24.5')?'yellow-7':(gikJulContents.kpi1 >= '24.5' && gikJulContents.kpi1 < '29.4')?'green':(gikJulContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi2 == null)?'grey-2':(gikJulContents.kpi2 >= '0' && gikJulContents.kpi2 <= '19.05')?'red':(gikJulContents.kpi2 > '19.05' && gikJulContents.kpi2 <= '25.4')?'orange':(gikJulContents.kpi2 > '25.4' && gikJulContents.kpi2 < '31.75')?'yellow-7':(gikJulContents.kpi2 >= '31.75' && gikJulContents.kpi2 < '38.1')?'green':(gikJulContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi3 == null)?'grey-2':(gikJulContents.kpi3 >= '0' && gikJulContents.kpi3 <= '19.35')?'red':(gikJulContents.kpi3 > '19.35' && gikJulContents.kpi3 <= '25.8')?'orange':(gikJulContents.kpi3 > '25.8' && gikJulContents.kpi3 < '32.25')?'yellow-7':(gikJulContents.kpi3 >= '32.25' && gikJulContents.kpi3 < '38.7')?'green':(gikJulContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi4 == null)?'grey-2':(gikJulContents.kpi4 >= '0' && gikJulContents.kpi4 <= '19.2')?'red':(gikJulContents.kpi4 > '19.2' && gikJulContents.kpi4 <= '25.6')?'orange':(gikJulContents.kpi4 > '25.6' && gikJulContents.kpi4 < '32')?'yellow-7':(gikJulContents.kpi4 >= '32' && gikJulContents.kpi4 < '38.4')?'green':(gikJulContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi4}}
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
                              :color="(gikAugContents.kpi1 == null)?'grey-2':(gikAugContents.kpi1 >= '0' && gikAugContents.kpi1 <= '14.7')?'red':(gikAugContents.kpi1 > '14.7' && gikAugContents.kpi1 <= '19.6')?'orange':(gikAugContents.kpi1 > '19.6' && gikAugContents.kpi1 < '24.5')?'yellow-7':(gikAugContents.kpi1 >= '24.5' && gikAugContents.kpi1 < '29.4')?'green':(gikAugContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi2 == null)?'grey-2':(gikAugContents.kpi2 >= '0' && gikAugContents.kpi2 <= '19.05')?'red':(gikAugContents.kpi2 > '19.05' && gikAugContents.kpi2 <= '25.4')?'orange':(gikAugContents.kpi2 > '25.4' && gikAugContents.kpi2 < '31.75')?'yellow-7':(gikAugContents.kpi2 >= '31.75' && gikAugContents.kpi2 < '38.1')?'green':(gikAugContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi3 == null)?'grey-2':(gikAugContents.kpi3 >= '0' && gikAugContents.kpi3 <= '19.35')?'red':(gikAugContents.kpi3 > '19.35' && gikAugContents.kpi3 <= '25.8')?'orange':(gikAugContents.kpi3 > '25.8' && gikAugContents.kpi3 < '32.25')?'yellow-7':(gikAugContents.kpi3 >= '32.25' && gikAugContents.kpi3 < '38.7')?'green':(gikAugContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi4 == null)?'grey-2':(gikAugContents.kpi4 >= '0' && gikAugContents.kpi4 <= '19.2')?'red':(gikAugContents.kpi4 > '19.2' && gikAugContents.kpi4 <= '25.6')?'orange':(gikAugContents.kpi4 > '25.6' && gikAugContents.kpi4 < '32')?'yellow-7':(gikAugContents.kpi4 >= '32' && gikAugContents.kpi4 < '38.4')?'green':(gikAugContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi4}}
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
                              :color="(gikSepContents.kpi1 == null)?'grey-2':(gikSepContents.kpi1 >= '0' && gikSepContents.kpi1 <= '14.7')?'red':(gikSepContents.kpi1 > '14.7' && gikSepContents.kpi1 <= '19.6')?'orange':(gikSepContents.kpi1 > '19.6' && gikSepContents.kpi1 < '24.5')?'yellow-7':(gikSepContents.kpi1 >= '24.5' && gikSepContents.kpi1 < '29.4')?'green':(gikSepContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi2 == null)?'grey-2':(gikSepContents.kpi2 >= '0' && gikSepContents.kpi2 <= '19.05')?'red':(gikSepContents.kpi2 > '19.05' && gikSepContents.kpi2 <= '25.4')?'orange':(gikSepContents.kpi2 > '25.4' && gikSepContents.kpi2 < '31.75')?'yellow-7':(gikSepContents.kpi2 >= '31.75' && gikSepContents.kpi2 < '38.1')?'green':(gikSepContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi3 == null)?'grey-2':(gikSepContents.kpi3 >= '0' && gikSepContents.kpi3 <= '19.35')?'red':(gikSepContents.kpi3 > '19.35' && gikSepContents.kpi3 <= '25.8')?'orange':(gikSepContents.kpi3 > '25.8' && gikSepContents.kpi3 < '32.25')?'yellow-7':(gikSepContents.kpi3 >= '32.25' && gikSepContents.kpi3 < '38.7')?'green':(gikSepContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi4 == null)?'grey-2':(gikSepContents.kpi4 >= '0' && gikSepContents.kpi4 <= '19.2')?'red':(gikSepContents.kpi4 > '19.2' && gikSepContents.kpi4 <= '25.6')?'orange':(gikSepContents.kpi4 > '25.6' && gikSepContents.kpi4 < '32')?'yellow-7':(gikSepContents.kpi4 >= '32' && gikSepContents.kpi4 < '38.4')?'green':(gikSepContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi4}}
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
                              :color="(gikOctContents.kpi1 == null)?'grey-2':(gikOctContents.kpi1 >= '0' && gikOctContents.kpi1 <= '14.7')?'red':(gikOctContents.kpi1 > '14.7' && gikOctContents.kpi1 <= '19.6')?'orange':(gikOctContents.kpi1 > '19.6' && gikOctContents.kpi1 < '24.5')?'yellow-7':(gikOctContents.kpi1 >= '24.5' && gikOctContents.kpi1 < '29.4')?'green':(gikOctContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi2 == null)?'grey-2':(gikOctContents.kpi2 >= '0' && gikOctContents.kpi2 <= '19.05')?'red':(gikOctContents.kpi2 > '19.05' && gikOctContents.kpi2 <= '25.4')?'orange':(gikOctContents.kpi2 > '25.4' && gikOctContents.kpi2 < '31.75')?'yellow-7':(gikOctContents.kpi2 >= '31.75' && gikOctContents.kpi2 < '38.1')?'green':(gikOctContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi3 == null)?'grey-2':(gikOctContents.kpi3 >= '0' && gikOctContents.kpi3 <= '19.35')?'red':(gikOctContents.kpi3 > '19.35' && gikOctContents.kpi3 <= '25.8')?'orange':(gikOctContents.kpi3 > '25.8' && gikOctContents.kpi3 < '32.25')?'yellow-7':(gikOctContents.kpi3 >= '32.25' && gikOctContents.kpi3 < '38.7')?'green':(gikOctContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi4 == null)?'grey-2':(gikOctContents.kpi4 >= '0' && gikOctContents.kpi4 <= '19.2')?'red':(gikOctContents.kpi4 > '19.2' && gikOctContents.kpi4 <= '25.6')?'orange':(gikOctContents.kpi4 > '25.6' && gikOctContents.kpi4 < '32')?'yellow-7':(gikOctContents.kpi4 >= '32' && gikOctContents.kpi4 < '38.4')?'green':(gikOctContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi4}}
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
                              :color="(gikNovContents.kpi1 == null)?'grey-2':(gikNovContents.kpi1 >= '0' && gikNovContents.kpi1 <= '14.7')?'red':(gikNovContents.kpi1 > '14.7' && gikNovContents.kpi1 <= '19.6')?'orange':(gikNovContents.kpi1 > '19.6' && gikNovContents.kpi1 < '24.5')?'yellow-7':(gikNovContents.kpi1 >= '24.5' && gikNovContents.kpi1 < '29.4')?'green':(gikNovContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi2 == null)?'grey-2':(gikNovContents.kpi2 >= '0' && gikNovContents.kpi2 <= '19.05')?'red':(gikNovContents.kpi2 > '19.05' && gikNovContents.kpi2 <= '25.4')?'orange':(gikNovContents.kpi2 > '25.4' && gikNovContents.kpi2 < '31.75')?'yellow-7':(gikNovContents.kpi2 >= '31.75' && gikNovContents.kpi2 < '38.1')?'green':(gikNovContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi3 == null)?'grey-2':(gikNovContents.kpi3 >= '0' && gikNovContents.kpi3 <= '19.35')?'red':(gikNovContents.kpi3 > '19.35' && gikNovContents.kpi3 <= '25.8')?'orange':(gikNovContents.kpi3 > '25.8' && gikNovContents.kpi3 < '32.25')?'yellow-7':(gikNovContents.kpi3 >= '32.25' && gikNovContents.kpi3 < '38.7')?'green':(gikNovContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi4 == null)?'grey-2':(gikNovContents.kpi4 >= '0' && gikNovContents.kpi4 <= '19.2')?'red':(gikNovContents.kpi4 > '19.2' && gikNovContents.kpi4 <= '25.6')?'orange':(gikNovContents.kpi4 > '25.6' && gikNovContents.kpi4 < '32')?'yellow-7':(gikNovContents.kpi4 >= '32' && gikNovContents.kpi4 < '38.4')?'green':(gikNovContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi4}}
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
                              :color="(gikDecContents.kpi1 == null)?'grey-2':(gikDecContents.kpi1 >= '0' && gikDecContents.kpi1 <= '14.7')?'red':(gikDecContents.kpi1 > '14.7' && gikDecContents.kpi1 <= '19.6')?'orange':(gikDecContents.kpi1 > '19.6' && gikDecContents.kpi1 < '24.5')?'yellow-7':(gikDecContents.kpi1 >= '24.5' && gikDecContents.kpi1 < '29.4')?'green':(gikDecContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi2 == null)?'grey-2':(gikDecContents.kpi2 >= '0' && gikDecContents.kpi2 <= '19.05')?'red':(gikDecContents.kpi2 > '19.05' && gikDecContents.kpi2 <= '25.4')?'orange':(gikDecContents.kpi2 > '25.4' && gikDecContents.kpi2 < '31.75')?'yellow-7':(gikDecContents.kpi2 >= '31.75' && gikDecContents.kpi2 < '38.1')?'green':(gikDecContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi3 == null)?'grey-2':(gikDecContents.kpi3 >= '0' && gikDecContents.kpi3 <= '19.35')?'red':(gikDecContents.kpi3 > '19.35' && gikDecContents.kpi3 <= '25.8')?'orange':(gikDecContents.kpi3 > '25.8' && gikDecContents.kpi3 < '32.25')?'yellow-7':(gikDecContents.kpi3 >= '32.25' && gikDecContents.kpi3 < '38.7')?'green':(gikDecContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi4 == null)?'grey-2':(gikDecContents.kpi4 >= '0' && gikDecContents.kpi4 <= '19.2')?'red':(gikDecContents.kpi4 > '19.2' && gikDecContents.kpi4 <= '25.6')?'orange':(gikDecContents.kpi4 > '25.6' && gikDecContents.kpi4 < '32')?'yellow-7':(gikDecContents.kpi4 >= '32' && gikDecContents.kpi4 < '38.4')?'green':(gikDecContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/GIKlogoforTOP.png"></q-img>
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
                  <!--TABLE DONE-->
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
                              :color="(gikJanContents.kpi1 == null)?'grey-2':(gikJanContents.kpi1 >= '0' && gikJanContents.kpi1 <= '14.7')?'red':(gikJanContents.kpi1 > '14.7' && gikJanContents.kpi1 <= '19.6')?'orange':(gikJanContents.kpi1 > '19.6' && gikJanContents.kpi1 < '24.5')?'yellow-7':(gikJanContents.kpi1 >= '24.5' && gikJanContents.kpi1 < '29.4')?'green':(gikJanContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi2 == null)?'grey-2':(gikJanContents.kpi2 >= '0' && gikJanContents.kpi2 <= '19.05')?'red':(gikJanContents.kpi2 > '19.05' && gikJanContents.kpi2 <= '25.4')?'orange':(gikJanContents.kpi2 > '25.4' && gikJanContents.kpi2 < '31.75')?'yellow-7':(gikJanContents.kpi2 >= '31.75' && gikJanContents.kpi2 < '38.1')?'green':(gikJanContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi3 == null)?'grey-2':(gikJanContents.kpi3 >= '0' && gikJanContents.kpi3 <= '19.35')?'red':(gikJanContents.kpi3 > '19.35' && gikJanContents.kpi3 <= '25.8')?'orange':(gikJanContents.kpi3 > '25.8' && gikJanContents.kpi3 < '32.25')?'yellow-7':(gikJanContents.kpi3 >= '32.25' && gikJanContents.kpi3 < '38.7')?'green':(gikJanContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJanContents.kpi4 == null)?'grey-2':(gikJanContents.kpi4 >= '0' && gikJanContents.kpi4 <= '19.2')?'red':(gikJanContents.kpi4 > '19.2' && gikJanContents.kpi4 <= '25.6')?'orange':(gikJanContents.kpi4 > '25.6' && gikJanContents.kpi4 < '32')?'yellow-7':(gikJanContents.kpi4 >= '32' && gikJanContents.kpi4 < '38.4')?'green':(gikJanContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJanContents.kpi4}}
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
                              :color="(gikFebContents.kpi1 == null)?'grey-2':(gikFebContents.kpi1 >= '0' && gikFebContents.kpi1 <= '14.7')?'red':(gikFebContents.kpi1 > '14.7' && gikFebContents.kpi1 <= '19.6')?'orange':(gikFebContents.kpi1 > '19.6' && gikFebContents.kpi1 < '24.5')?'yellow-7':(gikFebContents.kpi1 >= '24.5' && gikFebContents.kpi1 < '29.4')?'green':(gikFebContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi2 == null)?'grey-2':(gikFebContents.kpi2 >= '0' && gikFebContents.kpi2 <= '19.05')?'red':(gikFebContents.kpi2 > '19.05' && gikFebContents.kpi2 <= '25.4')?'orange':(gikFebContents.kpi2 > '25.4' && gikFebContents.kpi2 < '31.75')?'yellow-7':(gikFebContents.kpi2 >= '31.75' && gikFebContents.kpi2 < '38.1')?'green':(gikFebContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi3 == null)?'grey-2':(gikFebContents.kpi3 >= '0' && gikFebContents.kpi3 <= '19.35')?'red':(gikFebContents.kpi3 > '19.35' && gikFebContents.kpi3 <= '25.8')?'orange':(gikFebContents.kpi3 > '25.8' && gikFebContents.kpi3 < '32.25')?'yellow-7':(gikFebContents.kpi3 >= '32.25' && gikFebContents.kpi3 < '38.7')?'green':(gikFebContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikFebContents.kpi4 == null)?'grey-2':(gikFebContents.kpi4 >= '0' && gikFebContents.kpi4 <= '19.2')?'red':(gikFebContents.kpi4 > '19.2' && gikFebContents.kpi4 <= '25.6')?'orange':(gikFebContents.kpi4 > '25.6' && gikFebContents.kpi4 < '32')?'yellow-7':(gikFebContents.kpi4 >= '32' && gikFebContents.kpi4 < '38.4')?'green':(gikFebContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikFebContents.kpi4}}
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
                              :color="(gikMarContents.kpi1 == null)?'grey-2':(gikMarContents.kpi1 >= '0' && gikMarContents.kpi1 <= '14.7')?'red':(gikMarContents.kpi1 > '14.7' && gikMarContents.kpi1 <= '19.6')?'orange':(gikMarContents.kpi1 > '19.6' && gikMarContents.kpi1 < '24.5')?'yellow-7':(gikMarContents.kpi1 >= '24.5' && gikMarContents.kpi1 < '29.4')?'green':(gikMarContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi2 == null)?'grey-2':(gikMarContents.kpi2 >= '0' && gikMarContents.kpi2 <= '19.05')?'red':(gikMarContents.kpi2 > '19.05' && gikMarContents.kpi2 <= '25.4')?'orange':(gikMarContents.kpi2 > '25.4' && gikMarContents.kpi2 < '31.75')?'yellow-7':(gikMarContents.kpi2 >= '31.75' && gikMarContents.kpi2 < '38.1')?'green':(gikMarContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi3 == null)?'grey-2':(gikMarContents.kpi3 >= '0' && gikMarContents.kpi3 <= '19.35')?'red':(gikMarContents.kpi3 > '19.35' && gikMarContents.kpi3 <= '25.8')?'orange':(gikMarContents.kpi3 > '25.8' && gikMarContents.kpi3 < '32.25')?'yellow-7':(gikMarContents.kpi3 >= '32.25' && gikMarContents.kpi3 < '38.7')?'green':(gikMarContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMarContents.kpi4 == null)?'grey-2':(gikMarContents.kpi4 >= '0' && gikMarContents.kpi4 <= '19.2')?'red':(gikMarContents.kpi4 > '19.2' && gikMarContents.kpi4 <= '25.6')?'orange':(gikMarContents.kpi4 > '25.6' && gikMarContents.kpi4 < '32')?'yellow-7':(gikMarContents.kpi4 >= '32' && gikMarContents.kpi4 < '38.4')?'green':(gikMarContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMarContents.kpi4}}
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
                              :color="(gikAprContents.kpi1 == null)?'grey-2':(gikAprContents.kpi1 >= '0' && gikAprContents.kpi1 <= '14.7')?'red':(gikAprContents.kpi1 > '14.7' && gikAprContents.kpi1 <= '19.6')?'orange':(gikAprContents.kpi1 > '19.6' && gikAprContents.kpi1 < '24.5')?'yellow-7':(gikAprContents.kpi1 >= '24.5' && gikAprContents.kpi1 < '29.4')?'green':(gikAprContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi2 == null)?'grey-2':(gikAprContents.kpi2 >= '0' && gikAprContents.kpi2 <= '19.05')?'red':(gikAprContents.kpi2 > '19.05' && gikAprContents.kpi2 <= '25.4')?'orange':(gikAprContents.kpi2 > '25.4' && gikAprContents.kpi2 < '31.75')?'yellow-7':(gikAprContents.kpi2 >= '31.75' && gikAprContents.kpi2 < '38.1')?'green':(gikAprContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi3 == null)?'grey-2':(gikAprContents.kpi3 >= '0' && gikAprContents.kpi3 <= '19.35')?'red':(gikAprContents.kpi3 > '19.35' && gikAprContents.kpi3 <= '25.8')?'orange':(gikAprContents.kpi3 > '25.8' && gikAprContents.kpi3 < '32.25')?'yellow-7':(gikAprContents.kpi3 >= '32.25' && gikAprContents.kpi3 < '38.7')?'green':(gikAprContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAprContents.kpi4 == null)?'grey-2':(gikAprContents.kpi4 >= '0' && gikAprContents.kpi4 <= '19.2')?'red':(gikAprContents.kpi4 > '19.2' && gikAprContents.kpi4 <= '25.6')?'orange':(gikAprContents.kpi4 > '25.6' && gikAprContents.kpi4 < '32')?'yellow-7':(gikAprContents.kpi4 >= '32' && gikAprContents.kpi4 < '38.4')?'green':(gikAprContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAprContents.kpi4}}
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
                              :color="(gikMayContents.kpi1 == null)?'grey-2':(gikMayContents.kpi1 >= '0' && gikMayContents.kpi1 <= '14.7')?'red':(gikMayContents.kpi1 > '14.7' && gikMayContents.kpi1 <= '19.6')?'orange':(gikMayContents.kpi1 > '19.6' && gikMayContents.kpi1 < '24.5')?'yellow-7':(gikMayContents.kpi1 >= '24.5' && gikMayContents.kpi1 < '29.4')?'green':(gikMayContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi2 == null)?'grey-2':(gikMayContents.kpi2 >= '0' && gikMayContents.kpi2 <= '19.05')?'red':(gikMayContents.kpi2 > '19.05' && gikMayContents.kpi2 <= '25.4')?'orange':(gikMayContents.kpi2 > '25.4' && gikMayContents.kpi2 < '31.75')?'yellow-7':(gikMayContents.kpi2 >= '31.75' && gikMayContents.kpi2 < '38.1')?'green':(gikMayContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi3 == null)?'grey-2':(gikMayContents.kpi3 >= '0' && gikMayContents.kpi3 <= '19.35')?'red':(gikMayContents.kpi3 > '19.35' && gikMayContents.kpi3 <= '25.8')?'orange':(gikMayContents.kpi3 > '25.8' && gikMayContents.kpi3 < '32.25')?'yellow-7':(gikMayContents.kpi3 >= '32.25' && gikMayContents.kpi3 < '38.7')?'green':(gikMayContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikMayContents.kpi4 == null)?'grey-2':(gikMayContents.kpi4 >= '0' && gikMayContents.kpi4 <= '19.2')?'red':(gikMayContents.kpi4 > '19.2' && gikMayContents.kpi4 <= '25.6')?'orange':(gikMayContents.kpi4 > '25.6' && gikMayContents.kpi4 < '32')?'yellow-7':(gikMayContents.kpi4 >= '32' && gikMayContents.kpi4 < '38.4')?'green':(gikMayContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikMayContents.kpi4}}
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
                              :color="(gikJunContents.kpi1 == null)?'grey-2':(gikJunContents.kpi1 >= '0' && gikJunContents.kpi1 <= '14.7')?'red':(gikJunContents.kpi1 > '14.7' && gikJunContents.kpi1 <= '19.6')?'orange':(gikJunContents.kpi1 > '19.6' && gikJunContents.kpi1 < '24.5')?'yellow-7':(gikJunContents.kpi1 >= '24.5' && gikJunContents.kpi1 < '29.4')?'green':(gikJunContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi2 == null)?'grey-2':(gikJunContents.kpi2 >= '0' && gikJunContents.kpi2 <= '19.05')?'red':(gikJunContents.kpi2 > '19.05' && gikJunContents.kpi2 <= '25.4')?'orange':(gikJunContents.kpi2 > '25.4' && gikJunContents.kpi2 < '31.75')?'yellow-7':(gikJunContents.kpi2 >= '31.75' && gikJunContents.kpi2 < '38.1')?'green':(gikJunContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi3 == null)?'grey-2':(gikJunContents.kpi3 >= '0' && gikJunContents.kpi3 <= '19.35')?'red':(gikJunContents.kpi3 > '19.35' && gikJunContents.kpi3 <= '25.8')?'orange':(gikJunContents.kpi3 > '25.8' && gikJunContents.kpi3 < '32.25')?'yellow-7':(gikJunContents.kpi3 >= '32.25' && gikJunContents.kpi3 < '38.7')?'green':(gikJunContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJunContents.kpi4 == null)?'grey-2':(gikJunContents.kpi4 >= '0' && gikJunContents.kpi4 <= '19.2')?'red':(gikJunContents.kpi4 > '19.2' && gikJunContents.kpi4 <= '25.6')?'orange':(gikJunContents.kpi4 > '25.6' && gikJunContents.kpi4 < '32')?'yellow-7':(gikJunContents.kpi4 >= '32' && gikJunContents.kpi4 < '38.4')?'green':(gikJunContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJunContents.kpi4}}
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
                              :color="(gikJulContents.kpi1 == null)?'grey-2':(gikJulContents.kpi1 >= '0' && gikJulContents.kpi1 <= '14.7')?'red':(gikJulContents.kpi1 > '14.7' && gikJulContents.kpi1 <= '19.6')?'orange':(gikJulContents.kpi1 > '19.6' && gikJulContents.kpi1 < '24.5')?'yellow-7':(gikJulContents.kpi1 >= '24.5' && gikJulContents.kpi1 < '29.4')?'green':(gikJulContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi2 == null)?'grey-2':(gikJulContents.kpi2 >= '0' && gikJulContents.kpi2 <= '19.05')?'red':(gikJulContents.kpi2 > '19.05' && gikJulContents.kpi2 <= '25.4')?'orange':(gikJulContents.kpi2 > '25.4' && gikJulContents.kpi2 < '31.75')?'yellow-7':(gikJulContents.kpi2 >= '31.75' && gikJulContents.kpi2 < '38.1')?'green':(gikJulContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi3 == null)?'grey-2':(gikJulContents.kpi3 >= '0' && gikJulContents.kpi3 <= '19.35')?'red':(gikJulContents.kpi3 > '19.35' && gikJulContents.kpi3 <= '25.8')?'orange':(gikJulContents.kpi3 > '25.8' && gikJulContents.kpi3 < '32.25')?'yellow-7':(gikJulContents.kpi3 >= '32.25' && gikJulContents.kpi3 < '38.7')?'green':(gikJulContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikJulContents.kpi4 == null)?'grey-2':(gikJulContents.kpi4 >= '0' && gikJulContents.kpi4 <= '19.2')?'red':(gikJulContents.kpi4 > '19.2' && gikJulContents.kpi4 <= '25.6')?'orange':(gikJulContents.kpi4 > '25.6' && gikJulContents.kpi4 < '32')?'yellow-7':(gikJulContents.kpi4 >= '32' && gikJulContents.kpi4 < '38.4')?'green':(gikJulContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikJulContents.kpi4}}
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
                              :color="(gikAugContents.kpi1 == null)?'grey-2':(gikAugContents.kpi1 >= '0' && gikAugContents.kpi1 <= '14.7')?'red':(gikAugContents.kpi1 > '14.7' && gikAugContents.kpi1 <= '19.6')?'orange':(gikAugContents.kpi1 > '19.6' && gikAugContents.kpi1 < '24.5')?'yellow-7':(gikAugContents.kpi1 >= '24.5' && gikAugContents.kpi1 < '29.4')?'green':(gikAugContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi2 == null)?'grey-2':(gikAugContents.kpi2 >= '0' && gikAugContents.kpi2 <= '19.05')?'red':(gikAugContents.kpi2 > '19.05' && gikAugContents.kpi2 <= '25.4')?'orange':(gikAugContents.kpi2 > '25.4' && gikAugContents.kpi2 < '31.75')?'yellow-7':(gikAugContents.kpi2 >= '31.75' && gikAugContents.kpi2 < '38.1')?'green':(gikAugContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi3 == null)?'grey-2':(gikAugContents.kpi3 >= '0' && gikAugContents.kpi3 <= '19.35')?'red':(gikAugContents.kpi3 > '19.35' && gikAugContents.kpi3 <= '25.8')?'orange':(gikAugContents.kpi3 > '25.8' && gikAugContents.kpi3 < '32.25')?'yellow-7':(gikAugContents.kpi3 >= '32.25' && gikAugContents.kpi3 < '38.7')?'green':(gikAugContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikAugContents.kpi4 == null)?'grey-2':(gikAugContents.kpi4 >= '0' && gikAugContents.kpi4 <= '19.2')?'red':(gikAugContents.kpi4 > '19.2' && gikAugContents.kpi4 <= '25.6')?'orange':(gikAugContents.kpi4 > '25.6' && gikAugContents.kpi4 < '32')?'yellow-7':(gikAugContents.kpi4 >= '32' && gikAugContents.kpi4 < '38.4')?'green':(gikAugContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikAugContents.kpi4}}
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
                              :color="(gikSepContents.kpi1 == null)?'grey-2':(gikSepContents.kpi1 >= '0' && gikSepContents.kpi1 <= '14.7')?'red':(gikSepContents.kpi1 > '14.7' && gikSepContents.kpi1 <= '19.6')?'orange':(gikSepContents.kpi1 > '19.6' && gikSepContents.kpi1 < '24.5')?'yellow-7':(gikSepContents.kpi1 >= '24.5' && gikSepContents.kpi1 < '29.4')?'green':(gikSepContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi2 == null)?'grey-2':(gikSepContents.kpi2 >= '0' && gikSepContents.kpi2 <= '19.05')?'red':(gikSepContents.kpi2 > '19.05' && gikSepContents.kpi2 <= '25.4')?'orange':(gikSepContents.kpi2 > '25.4' && gikSepContents.kpi2 < '31.75')?'yellow-7':(gikSepContents.kpi2 >= '31.75' && gikSepContents.kpi2 < '38.1')?'green':(gikSepContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi3 == null)?'grey-2':(gikSepContents.kpi3 >= '0' && gikSepContents.kpi3 <= '19.35')?'red':(gikSepContents.kpi3 > '19.35' && gikSepContents.kpi3 <= '25.8')?'orange':(gikSepContents.kpi3 > '25.8' && gikSepContents.kpi3 < '32.25')?'yellow-7':(gikSepContents.kpi3 >= '32.25' && gikSepContents.kpi3 < '38.7')?'green':(gikSepContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikSepContents.kpi4 == null)?'grey-2':(gikSepContents.kpi4 >= '0' && gikSepContents.kpi4 <= '19.2')?'red':(gikSepContents.kpi4 > '19.2' && gikSepContents.kpi4 <= '25.6')?'orange':(gikSepContents.kpi4 > '25.6' && gikSepContents.kpi4 < '32')?'yellow-7':(gikSepContents.kpi4 >= '32' && gikSepContents.kpi4 < '38.4')?'green':(gikSepContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikSepContents.kpi4}}
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
                              :color="(gikOctContents.kpi1 == null)?'grey-2':(gikOctContents.kpi1 >= '0' && gikOctContents.kpi1 <= '14.7')?'red':(gikOctContents.kpi1 > '14.7' && gikOctContents.kpi1 <= '19.6')?'orange':(gikOctContents.kpi1 > '19.6' && gikOctContents.kpi1 < '24.5')?'yellow-7':(gikOctContents.kpi1 >= '24.5' && gikOctContents.kpi1 < '29.4')?'green':(gikOctContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi2 == null)?'grey-2':(gikOctContents.kpi2 >= '0' && gikOctContents.kpi2 <= '19.05')?'red':(gikOctContents.kpi2 > '19.05' && gikOctContents.kpi2 <= '25.4')?'orange':(gikOctContents.kpi2 > '25.4' && gikOctContents.kpi2 < '31.75')?'yellow-7':(gikOctContents.kpi2 >= '31.75' && gikOctContents.kpi2 < '38.1')?'green':(gikOctContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi3 == null)?'grey-2':(gikOctContents.kpi3 >= '0' && gikOctContents.kpi3 <= '19.35')?'red':(gikOctContents.kpi3 > '19.35' && gikOctContents.kpi3 <= '25.8')?'orange':(gikOctContents.kpi3 > '25.8' && gikOctContents.kpi3 < '32.25')?'yellow-7':(gikOctContents.kpi3 >= '32.25' && gikOctContents.kpi3 < '38.7')?'green':(gikOctContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikOctContents.kpi4 == null)?'grey-2':(gikOctContents.kpi4 >= '0' && gikOctContents.kpi4 <= '19.2')?'red':(gikOctContents.kpi4 > '19.2' && gikOctContents.kpi4 <= '25.6')?'orange':(gikOctContents.kpi4 > '25.6' && gikOctContents.kpi4 < '32')?'yellow-7':(gikOctContents.kpi4 >= '32' && gikOctContents.kpi4 < '38.4')?'green':(gikOctContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikOctContents.kpi4}}
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
                              :color="(gikNovContents.kpi1 == null)?'grey-2':(gikNovContents.kpi1 >= '0' && gikNovContents.kpi1 <= '14.7')?'red':(gikNovContents.kpi1 > '14.7' && gikNovContents.kpi1 <= '19.6')?'orange':(gikNovContents.kpi1 > '19.6' && gikNovContents.kpi1 < '24.5')?'yellow-7':(gikNovContents.kpi1 >= '24.5' && gikNovContents.kpi1 < '29.4')?'green':(gikNovContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi2 == null)?'grey-2':(gikNovContents.kpi2 >= '0' && gikNovContents.kpi2 <= '19.05')?'red':(gikNovContents.kpi2 > '19.05' && gikNovContents.kpi2 <= '25.4')?'orange':(gikNovContents.kpi2 > '25.4' && gikNovContents.kpi2 < '31.75')?'yellow-7':(gikNovContents.kpi2 >= '31.75' && gikNovContents.kpi2 < '38.1')?'green':(gikNovContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi3 == null)?'grey-2':(gikNovContents.kpi3 >= '0' && gikNovContents.kpi3 <= '19.35')?'red':(gikNovContents.kpi3 > '19.35' && gikNovContents.kpi3 <= '25.8')?'orange':(gikNovContents.kpi3 > '25.8' && gikNovContents.kpi3 < '32.25')?'yellow-7':(gikNovContents.kpi3 >= '32.25' && gikNovContents.kpi3 < '38.7')?'green':(gikNovContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikNovContents.kpi4 == null)?'grey-2':(gikNovContents.kpi4 >= '0' && gikNovContents.kpi4 <= '19.2')?'red':(gikNovContents.kpi4 > '19.2' && gikNovContents.kpi4 <= '25.6')?'orange':(gikNovContents.kpi4 > '25.6' && gikNovContents.kpi4 < '32')?'yellow-7':(gikNovContents.kpi4 >= '32' && gikNovContents.kpi4 < '38.4')?'green':(gikNovContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikNovContents.kpi4}}
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
                              :color="(gikDecContents.kpi1 == null)?'grey-2':(gikDecContents.kpi1 >= '0' && gikDecContents.kpi1 <= '14.7')?'red':(gikDecContents.kpi1 > '14.7' && gikDecContents.kpi1 <= '19.6')?'orange':(gikDecContents.kpi1 > '19.6' && gikDecContents.kpi1 < '24.5')?'yellow-7':(gikDecContents.kpi1 >= '24.5' && gikDecContents.kpi1 < '29.4')?'green':(gikDecContents.kpi1 >= '29.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi2 == null)?'grey-2':(gikDecContents.kpi2 >= '0' && gikDecContents.kpi2 <= '19.05')?'red':(gikDecContents.kpi2 > '19.05' && gikDecContents.kpi2 <= '25.4')?'orange':(gikDecContents.kpi2 > '25.4' && gikDecContents.kpi2 < '31.75')?'yellow-7':(gikDecContents.kpi2 >= '31.75' && gikDecContents.kpi2 < '38.1')?'green':(gikDecContents.kpi2 >= '38.1'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi3 == null)?'grey-2':(gikDecContents.kpi3 >= '0' && gikDecContents.kpi3 <= '19.35')?'red':(gikDecContents.kpi3 > '19.35' && gikDecContents.kpi3 <= '25.8')?'orange':(gikDecContents.kpi3 > '25.8' && gikDecContents.kpi3 < '32.25')?'yellow-7':(gikDecContents.kpi3 >= '32.25' && gikDecContents.kpi3 < '38.7')?'green':(gikDecContents.kpi3 >= '38.7'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi3}}
                              <q-tooltip># of Beneficiaries (Extended)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(gikDecContents.kpi4 == null)?'grey-2':(gikDecContents.kpi4 >= '0' && gikDecContents.kpi4 <= '19.2')?'red':(gikDecContents.kpi4 > '19.2' && gikDecContents.kpi4 <= '25.6')?'orange':(gikDecContents.kpi4 > '25.6' && gikDecContents.kpi4 < '32')?'yellow-7':(gikDecContents.kpi4 >= '32' && gikDecContents.kpi4 < '38.4')?'green':(gikDecContents.kpi4 >= '38.4'?'blue':'grey-2')"
                            >
                            {{gikDecContents.kpi4}}
                              <q-tooltip>Activities (#)</q-tooltip>
                            </q-chip>       
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-separator />
                      <meaningof-colors/> <!--Using component of Meaning of Colors-->
                    </q-card>
                  </div>
                  <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    <q-card flat bordered class="col-md-6">
                      <!--
                      <div class="center">
                        {{ $route.name }}
                      </div>
                      -->
                      <q-card-section style="height:150px">
                        <q-img src="/statics/GIKlogoforTOP.png"></q-img>
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
                  <!--TABLE DONE-->
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
              gikJanContent: {
                
              },
              gikJanContents : [],
              gikFebContent: {
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
              gikFebContents : [],
              gikMarContent: {
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
              gikMarContents : [],
              gikAprContent: {
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
              gikAprContents : [],
              gikMayContent: {
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
              gikMayContents : [],
              gikJunContent: {
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
              gikJunContents : [],
              gikJulContent: {
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
              gikJulContents : [],
              gikAugContent: {
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
              gikAugContents : [],
              gikSepContent: {
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
              gikSepContents : [],
              gikOctContent: {
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
              gikOctContents : [],
              gikNovContent: {
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
              gikNovContents : [],
              gikDecContent: {
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
              gikDecContents : []


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
                            {time_period: 'January', expenses: this.gikJanContents.expenses, revenues: this.gikJanContents.revenues},
                            {time_period: 'February', expenses: this.gikFebContents.expenses, revenues: this.gikFebContents.revenues},
                            {time_period: 'March', expenses: this.gikMarContents.expenses, revenues: this.gikMarContents.revenues},
                            {time_period: 'April', expenses: this.gikAprContents.expenses, revenues: this.gikAprContents.revenues},
                            {time_period: 'May', expenses: this.gikMayContents.expenses, revenues: this.gikMayContents.revenues},
                            {time_period: 'June', expenses: this.gikJunContents.expenses, revenues: this.gikJunContents.revenues},
                            {time_period: 'July', expenses: this.gikJulContents.expenses, revenues: this.gikJulContents.revenues},
                            {time_period: 'August', expenses: this.gikAugContents.expenses, revenues: this.gikAugContents.revenues},
                            {time_period: 'September', expenses: this.gikSepContents.expenses, revenues: this.gikSepContents.revenues},
                            {time_period: 'October', expenses: this.gikOctContents.expenses, revenues: this.gikOctContents.revenues},
                            {time_period: 'November', expenses: this.gikNovContents.expenses, revenues: this.gikNovContents.revenues},
                            {time_period: 'December',expenses: this.gikDecContents.expenses, revenues: this.gikDecContents.revenues }
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
                            {months: 'January', kpi1: this.gikJanContents.kpi1, kpi2: this.gikJanContents.kpi2, kpi3: this.gikJanContents.kpi3, kpi4: this.gikJanContents.kpi4, uniqueVol: this.gikJanContents.uniqueVolunteers, volHours: this.gikJanContents.volunteerHours},
                            {months: 'February', kpi1: this.gikFebContents.kpi1, kpi2: this.gikFebContents.kpi2, kpi3: this.gikFebContents.kpi3, kpi4: this.gikFebContents.kpi4, uniqueVol: this.gikFebContents.uniqueVolunteers, volHours: this.gikFebContents.volunteerHours},
                            {months: 'March', kpi1: this.gikMarContents.kpi1, kpi2: this.gikMarContents.kpi2, kpi3: this.gikMarContents.kpi3, kpi4: this.gikMarContents.kpi4, uniqueVol: this.gikMarContents.uniqueVolunteers, volHours: this.gikMarContents.volunteerHours},
                            {months: 'April', kpi1: this.gikAprContents.kpi1, kpi2: this.gikAprContents.kpi2, kpi3: this.gikAprContents.kpi3, kpi4: this.gikAprContents.kpi4, uniqueVol: this.gikAprContents.uniqueVolunteers, volHours: this.gikAprContents.volunteerHours},
                            {months: 'May', kpi1: this.gikMayContents.kpi1, kpi2: this.gikMayContents.kpi2, kpi3: this.gikMayContents.kpi3, kpi4: this.gikMayContents.kpi4, uniqueVol: this.gikMayContents.uniqueVolunteers, volHours: this.gikMayContents.volunteerHours},
                            {months: 'June', kpi1: this.gikJunContents.kpi1, kpi2: this.gikJunContents.kpi2, kpi3: this.gikJunContents.kpi3, kpi4: this.gikJunContents.kpi4, uniqueVol: this.gikJunContents.uniqueVolunteers, volHours: this.gikJunContents.volunteerHours},
                            {months: 'July', kpi1: this.gikJulContents.kpi1, kpi2: this.gikJulContents.kpi2, kpi3: this.gikJulContents.kpi3, kpi4: this.gikJulContents.kpi4, uniqueVol: this.gikJulContents.uniqueVolunteers, volHours: this.gikJulContents.volunteerHours},
                            {months: 'August', kpi1: this.gikAugContents.kpi1, kpi2: this.gikAugContents.kpi2, kpi3: this.gikAugContents.kpi3, kpi4: this.gikAugContents.kpi4, uniqueVol: this.gikAugContents.uniqueVolunteers, volHours: this.gikAugContents.volunteerHours},
                            {months: 'September', kpi1: this.gikSepContents.kpi1, kpi2: this.gikSepContents.kpi2, kpi3: this.gikSepContents.kpi3, kpi4: this.gikSepContents.kpi4, uniqueVol: this.gikSepContents.uniqueVolunteers, volHours: this.gikSepContents.volunteerHours},
                            {months: 'October', kpi1: this.gikOctContents.kpi1, kpi2: this.gikOctContents.kpi2, kpi3: this.gikOctContents.kpi3, kpi4: this.gikOctContents.kpi4, uniqueVol: this.gikOctContents.uniqueVolunteers, volHours: this.gikOctContents.volunteerHours},
                            {months: 'November', kpi1: this.gikNovContents.kpi1, kpi2: this.gikNovContents.kpi2, kpi3: this.gikNovContents.kpi3, kpi4: this.gikNovContents.kpi4, uniqueVol: this.gikNovContents.uniqueVolunteers, volHours: this.gikNovContents.volunteerHours},
                            {months: 'December',kpi1: this.gikDecContents.kpi1, kpi2: this.gikDecContents.kpi2, kpi3: this.gikDecContents.kpi3, kpi4: this.gikDecContents.kpi4, uniqueVol: this.gikDecContents.uniqueVolunteers, volHours: this.gikDecContents.volunteerHours},
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
                            data: [{value: this.gikJanContents.budgetUsage}],
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
                                {value: this.gikJanContents.perCategory1, name: this.gikJanContents.expenseCategory1},
                                {value: this.gikJanContents.perCategory2, name: this.gikJanContents.expenseCategory2},
                                {value: this.gikJanContents.perCategory3, name: this.gikJanContents.expenseCategory3},
                                {value: this.gikJanContents.perCategory4, name: this.gikJanContents.expenseCategory4},
                                {value: this.gikJanContents.perCategory5, name: this.gikJanContents.expenseCategory5},
                                {value: this.gikJanContents.perCategory6, name: this.gikJanContents.expenseCategory6}
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
                            data: [{value: this.gikFebContents.budgetUsage}],
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
                                {value: this.gikFebContents.perCategory1, name: this.gikFebContents.expenseCategory1},
                                {value: this.gikFebContents.perCategory2, name: this.gikFebContents.expenseCategory2},
                                {value: this.gikFebContents.perCategory3, name: this.gikFebContents.expenseCategory3},
                                {value: this.gikFebContents.perCategory4, name: this.gikFebContents.expenseCategory4},
                                {value: this.gikFebContents.perCategory5, name: this.gikFebContents.expenseCategory5},
                                {value: this.gikFebContents.perCategory6, name: this.gikFebContents.expenseCategory6}
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
                            data: [{value: this.gikMarContents.budgetUsage}],
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
                                {value: this.gikMarContents.perCategory1, name: this.gikMarContents.expenseCategory1},
                                {value: this.gikMarContents.perCategory2, name: this.gikMarContents.expenseCategory2},
                                {value: this.gikMarContents.perCategory3, name: this.gikMarContents.expenseCategory3},
                                {value: this.gikMarContents.perCategory4, name: this.gikMarContents.expenseCategory4},
                                {value: this.gikMarContents.perCategory5, name: this.gikMarContents.expenseCategory5},
                                {value: this.gikMarContents.perCategory6, name: this.gikMarContents.expenseCategory6}
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
                            data: [{value: this.gikAprContents.budgetUsage}],
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
                                {value: this.gikAprContents.perCategory1, name: this.gikAprContents.expenseCategory1},
                                {value: this.gikAprContents.perCategory2, name: this.gikAprContents.expenseCategory2},
                                {value: this.gikAprContents.perCategory3, name: this.gikAprContents.expenseCategory3},
                                {value: this.gikAprContents.perCategory4, name: this.gikAprContents.expenseCategory4},
                                {value: this.gikAprContents.perCategory5, name: this.gikAprContents.expenseCategory5},
                                {value: this.gikAprContents.perCategory6, name: this.gikAprContents.expenseCategory6}  
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
                            data: [{value: this.gikMayContents.budgetUsage}],
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
                                {value: this.gikMayContents.perCategory1, name: this.gikMayContents.expenseCategory1},
                                {value: this.gikMayContents.perCategory2, name: this.gikMayContents.expenseCategory2},
                                {value: this.gikMayContents.perCategory3, name: this.gikMayContents.expenseCategory3},
                                {value: this.gikMayContents.perCategory4, name: this.gikMayContents.expenseCategory4},
                                {value: this.gikMayContents.perCategory5, name: this.gikMayContents.expenseCategory5},
                                {value: this.gikMayContents.perCategory6, name: this.gikMayContents.expenseCategory6}  
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
                            data: [{value: this.gikJunContents.budgetUsage}],
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
                                {value: this.gikJunContents.perCategory1, name: this.gikJunContents.expenseCategory1},
                                {value: this.gikJunContents.perCategory2, name: this.gikJunContents.expenseCategory2},
                                {value: this.gikJunContents.perCategory3, name: this.gikJunContents.expenseCategory3},
                                {value: this.gikJunContents.perCategory4, name: this.gikJunContents.expenseCategory4},
                                {value: this.gikJunContents.perCategory5, name: this.gikJunContents.expenseCategory5},
                                {value: this.gikJunContents.perCategory6, name: this.gikJunContents.expenseCategory6}  
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
                            data: [{value: this.gikJulContents.budgetUsage}],
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
                                {value: this.gikJulContents.perCategory1, name: this.gikJulContents.expenseCategory1},
                                {value: this.gikJulContents.perCategory2, name: this.gikJulContents.expenseCategory2},
                                {value: this.gikJulContents.perCategory3, name: this.gikJulContents.expenseCategory3},
                                {value: this.gikJulContents.perCategory4, name: this.gikJulContents.expenseCategory4},
                                {value: this.gikJulContents.perCategory5, name: this.gikJulContents.expenseCategory5},
                                {value: this.gikJulContents.perCategory6, name: this.gikJulContents.expenseCategory6}  
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
                            data: [{value: this.gikAugContents.budgetUsage}],
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
                                {value: this.gikAugContents.perCategory1, name: this.gikAugContents.expenseCategory1},
                                {value: this.gikAugContents.perCategory2, name: this.gikAugContents.expenseCategory2},
                                {value: this.gikAugContents.perCategory3, name: this.gikAugContents.expenseCategory3},
                                {value: this.gikAugContents.perCategory4, name: this.gikAugContents.expenseCategory4},
                                {value: this.gikAugContents.perCategory5, name: this.gikAugContents.expenseCategory5},
                                {value: this.gikAugContents.perCategory6, name: this.gikAugContents.expenseCategory6}  
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
                            data: [{value: this.gikSepContents.budgetUsage}],
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
                                {value: this.gikSepContents.perCategory1, name: this.gikSepContents.expenseCategory1},
                                {value: this.gikSepContents.perCategory2, name: this.gikSepContents.expenseCategory2},
                                {value: this.gikSepContents.perCategory3, name: this.gikSepContents.expenseCategory3},
                                {value: this.gikSepContents.perCategory4, name: this.gikSepContents.expenseCategory4},
                                {value: this.gikSepContents.perCategory5, name: this.gikSepContents.expenseCategory5},
                                {value: this.gikSepContents.perCategory6, name: this.gikSepContents.expenseCategory6}  
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
                            data: [{value: this.gikOctContents.budgetUsage}],
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
                                {value: this.gikOctContents.perCategory1, name: this.gikOctContents.expenseCategory1},
                                {value: this.gikOctContents.perCategory2, name: this.gikOctContents.expenseCategory2},
                                {value: this.gikOctContents.perCategory3, name: this.gikOctContents.expenseCategory3},
                                {value: this.gikOctContents.perCategory4, name: this.gikOctContents.expenseCategory4},
                                {value: this.gikOctContents.perCategory5, name: this.gikOctContents.expenseCategory5},
                                {value: this.gikOctContents.perCategory6, name: this.gikOctContents.expenseCategory6}  
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
                            data: [{value: this.gikNovContents.budgetUsage}],
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
                                {value: this.gikNovContents.perCategory1, name: this.gikNovContents.expenseCategory1},
                                {value: this.gikNovContents.perCategory2, name: this.gikNovContents.expenseCategory2},
                                {value: this.gikNovContents.perCategory3, name: this.gikNovContents.expenseCategory3},
                                {value: this.gikNovContents.perCategory4, name: this.gikNovContents.expenseCategory4},
                                {value: this.gikNovContents.perCategory5, name: this.gikNovContents.expenseCategory5},
                                {value: this.gikNovContents.perCategory6, name: this.gikNovContents.expenseCategory6}  
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
                            data: [{value: this.gikDecContents.budgetUsage}],
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
                                {value: this.gikDecContents.perCategory1, name: this.gikDecContents.expenseCategory1},
                                {value: this.gikDecContents.perCategory2, name: this.gikDecContents.expenseCategory2},
                                {value: this.gikDecContents.perCategory3, name: this.gikDecContents.expenseCategory3},
                                {value: this.gikDecContents.perCategory4, name: this.gikDecContents.expenseCategory4},
                                {value: this.gikDecContents.perCategory5, name: this.gikDecContents.expenseCategory5},
                                {value: this.gikDecContents.perCategory6, name: this.gikDecContents.expenseCategory6}
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
            var docgikJanRef = db.collection("gik").doc("january");

            docgikJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikJanContents = doc.data();
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
            var docgikFebRef = db.collection("gik").doc("february");

            docgikFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikFebContents = doc.data();
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
            var docgikMarRef = db.collection("gik").doc("march");

            docgikMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikMarContents = doc.data();
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
            var docgikAprRef = db.collection("gik").doc("april1");

            docgikAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikAprContents = doc.data();
                    this.totalExpenseApr();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    MAY
            var docgikMayRef = db.collection("gik").doc("may");

            docgikMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docgikJunRef = db.collection("gik").doc("june");

            docgikJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docgikJulRef = db.collection("gik").doc("july");

            docgikJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docgikAugRef = db.collection("gik").doc("august");

            docgikAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docgikSepRef = db.collection("gik").doc("september");

            docgikSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docgikOctRef = db.collection("gik").doc("october");

            docgikOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docgikNovRef = db.collection("gik").doc("november");

            docgikNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docgikDecRef = db.collection("gik").doc("december");

            docgikDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.gikDecContents = doc.data();
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
              return this.gikJanContents.expenses = getRealValue(this.gikJanContents.perCategory1) + getRealValue(this.gikJanContents.perCategory2) + getRealValue(this.gikJanContents.perCategory3) + getRealValue(this.gikJanContents.perCategory4) + getRealValue(this.gikJanContents.perCategory5) + getRealValue(this.gikJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.gikJanContents.budgetUsage = ((getRealValue(this.gikJanContents.expenses) / getRealValue(this.gikJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.gikFebContents.expenses = getRealValue(this.gikFebContents.perCategory1) + getRealValue(this.gikFebContents.perCategory2) + getRealValue(this.gikFebContents.perCategory3) + getRealValue(this.gikFebContents.perCategory4) + getRealValue(this.gikFebContents.perCategory5) + getRealValue(this.gikFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.gikFebContents.budgetUsage = (((getRealValue(this.gikFebContents.expenses) + getRealValue(this.gikJanContents.expenses)) / getRealValue(this.gikFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.gikMarContents.expenses = getRealValue(this.gikMarContents.perCategory1) + getRealValue(this.gikMarContents.perCategory2) + getRealValue(this.gikMarContents.perCategory3) + getRealValue(this.gikMarContents.perCategory4) + getRealValue(this.gikMarContents.perCategory5) + getRealValue(this.gikMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.gikMarContents.budgetUsage = (((getRealValue(this.gikMarContents.expenses) + getRealValue(this.gikFebContents.expenses) + getRealValue(this.gikJanContents.expenses)) / getRealValue(this.gikMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.gikAprContents.expenses = getRealValue(this.gikAprContents.perCategory1) + getRealValue(this.gikAprContents.perCategory2) + getRealValue(this.gikAprContents.perCategory3) + getRealValue(this.gikAprContents.perCategory4) + getRealValue(this.gikAprContents.perCategory5) + getRealValue(this.gikAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.gikAprContents.budgetUsage = (((getRealValue(this.gikAprContents.expenses) + getRealValue(this.gikMarContents.expenses) + getRealValue(this.gikFebContents.expenses) + getRealValue(this.gikJanContents.expenses)) / getRealValue(this.gikAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.gikMayContents.expenses = getRealValue(this.gikMayContents.perCategory1) + getRealValue(this.gikMayContents.perCategory2) + getRealValue(this.gikMayContents.perCategory3) + getRealValue(this.gikMayContents.perCategory4) + getRealValue(this.gikMayContents.perCategory5) + getRealValue(this.gikMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.gikMayContents.budgetUsage = (((getRealValue(this.gikMayContents.expenses) + getRealValue(this.gikAprContents.expenses) + getRealValue(this.gikMarContents.expenses) + getRealValue(this.gikFebContents.expenses) + getRealValue(this.gikJanContents.expenses)) / getRealValue(this.gikMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.gikJunContents.expenses = getRealValue(this.gikJunContents.perCategory1) + getRealValue(this.gikJunContents.perCategory2) + getRealValue(this.gikJunContents.perCategory3) + getRealValue(this.gikJunContents.perCategory4) + getRealValue(this.gikJunContents.perCategory5) + getRealValue(this.gikJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.gikJunContents.budgetUsage = (((getRealValue(this.gikJunContents.expenses) + getRealValue(this.gikMayContents.expenses) + getRealValue(this.gikAprContents.expenses) + getRealValue(this.gikMarContents.expenses) + getRealValue(this.gikFebContents.expenses) + getRealValue(this.gikJanContents.expenses)) / getRealValue(this.gikJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.gikJulContents.expenses = getRealValue(this.gikJulContents.perCategory1) + getRealValue(this.gikJulContents.perCategory2) + getRealValue(this.gikJulContents.perCategory3) + getRealValue(this.gikJulContents.perCategory4) + getRealValue(this.gikJulContents.perCategory5) + getRealValue(this.gikJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.gikJulContents.budgetUsage = (((getRealValue(this.gikJulContents.expenses) + getRealValue(this.gikJunContents.expenses) + getRealValue(this.gikMayContents.expenses) + getRealValue(this.gikAprContents.expenses) + getRealValue(this.gikMarContents.expenses) + getRealValue(this.gikFebContents.expenses) + getRealValue(this.gikJanContents.expenses)) / getRealValue(this.gikJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.gikAugContents.expenses = getRealValue(this.gikAugContents.perCategory1) + getRealValue(this.gikAugContents.perCategory2) + getRealValue(this.gikAugContents.perCategory3) + getRealValue(this.gikAugContents.perCategory4) + getRealValue(this.gikAugContents.perCategory5) + getRealValue(this.gikAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.gikAugContents.budgetUsage = (((getRealValue(this.gikAugContents.expenses) + getRealValue(this.gikJulContents.expenses) + getRealValue(this.gikJunContents.expenses) + getRealValue(this.gikMayContents.expenses) + getRealValue(this.gikAprContents.expenses) + getRealValue(this.gikMarContents.expenses) + getRealValue(this.gikFebContents.expenses) + getRealValue(this.gikJanContents.expenses)) / getRealValue(this.gikAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.gikSepContents.expenses = getRealValue(this.gikSepContents.perCategory1) + getRealValue(this.gikSepContents.perCategory2) + getRealValue(this.gikSepContents.perCategory3) + getRealValue(this.gikSepContents.perCategory4) + getRealValue(this.gikSepContents.perCategory5) + getRealValue(this.gikSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.gikSepContents.budgetUsage = (((getRealValue(this.gikSepContents.expenses) + getRealValue(this.gikAugContents.expenses) + getRealValue(this.gikJulContents.expenses) + getRealValue(this.gikJunContents.expenses) + getRealValue(this.gikMayContents.expenses) + getRealValue(this.gikAprContents.expenses) + getRealValue(this.gikMarContents.expenses) + getRealValue(this.gikFebContents.expenses) + getRealValue(this.gikJanContents.expenses)) / getRealValue(this.gikSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.gikOctContents.expenses = getRealValue(this.gikOctContents.perCategory1) + getRealValue(this.gikOctContents.perCategory2) + getRealValue(this.gikOctContents.perCategory3) + getRealValue(this.gikOctContents.perCategory4) + getRealValue(this.gikOctContents.perCategory5) + getRealValue(this.gikOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.gikOctContents.budgetUsage = (((getRealValue(this.gikOctContents.expenses) + getRealValue(this.gikSepContents.expenses) + getRealValue(this.gikAugContents.expenses) + getRealValue(this.gikJulContents.expenses) + getRealValue(this.gikJunContents.expenses) + getRealValue(this.gikMayContents.expenses) + getRealValue(this.gikAprContents.expenses) + getRealValue(this.gikMarContents.expenses) + getRealValue(this.gikFebContents.expenses) + getRealValue(this.gikJanContents.expenses)) / getRealValue(this.gikOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.gikNovContents.expenses = getRealValue(this.gikNovContents.perCategory1) + getRealValue(this.gikNovContents.perCategory2) + getRealValue(this.gikNovContents.perCategory3) + getRealValue(this.gikNovContents.perCategory4) + getRealValue(this.gikNovContents.perCategory5) + getRealValue(this.gikNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.gikNovContents.budgetUsage = (((getRealValue(this.gikNovContents.expenses) + getRealValue(this.gikOctContents.expenses) + getRealValue(this.gikSepContents.expenses) + getRealValue(this.gikAugContents.expenses) + getRealValue(this.gikJulContents.expenses) + getRealValue(this.gikJunContents.expenses) + getRealValue(this.gikMayContents.expenses) + getRealValue(this.gikAprContents.expenses) + getRealValue(this.gikMarContents.expenses) + getRealValue(this.gikFebContents.expenses) + getRealValue(this.gikJanContents.expenses)) / getRealValue(this.gikNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.gikDecContents.expenses = getRealValue(this.gikDecContents.perCategory1) + getRealValue(this.gikDecContents.perCategory2) + getRealValue(this.gikDecContents.perCategory3) + getRealValue(this.gikDecContents.perCategory4) + getRealValue(this.gikDecContents.perCategory5) + getRealValue(this.gikDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.gikDecContents.budgetUsage = (((getRealValue(this.gikDecContents.expenses) + getRealValue(this.gikNovContents.expenses) + getRealValue(this.gikOctContents.expenses) + getRealValue(this.gikSepContents.expenses) + getRealValue(this.gikAugContents.expenses) + getRealValue(this.gikJulContents.expenses) + getRealValue(this.gikJunContents.expenses) + getRealValue(this.gikMayContents.expenses) + getRealValue(this.gikAprContents.expenses) + getRealValue(this.gikMarContents.expenses) + getRealValue(this.gikFebContents.expenses) + getRealValue(this.gikJanContents.expenses)) / getRealValue(this.gikDecContents.actualBudget))*100).toFixed(2)
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
