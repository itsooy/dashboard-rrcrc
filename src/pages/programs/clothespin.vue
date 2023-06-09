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
                              :color="(clothespinJanContents.kpi1 == null)?'grey-2':(clothespinJanContents.kpi1 >= '0' && clothespinJanContents.kpi1 <= '86.4')?'red':(clothespinJanContents.kpi1 > '86.4' && clothespinJanContents.kpi1 <= '115.2')?'orange':(clothespinJanContents.kpi1 > '115.2' && clothespinJanContents.kpi1 < '144')?'yellow-7':(clothespinJanContents.kpi1 >= '144' && clothespinJanContents.kpi1 < '172.8')?'green':(clothespinJanContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi2 == null)?'grey-2':(clothespinJanContents.kpi2 >= '0' && clothespinJanContents.kpi2 <= '86.4')?'red':(clothespinJanContents.kpi2 > '86.4' && clothespinJanContents.kpi2 <= '115.2')?'orange':(clothespinJanContents.kpi2 > '115.2' && clothespinJanContents.kpi2 < '144')?'yellow-7':(clothespinJanContents.kpi2 >= '144' && clothespinJanContents.kpi2 < '172.8')?'green':(clothespinJanContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi3 == null)?'grey-2':(clothespinJanContents.kpi3 >= '0' && clothespinJanContents.kpi3 <= '86.4')?'red':(clothespinJanContents.kpi3 > '86.4' && clothespinJanContents.kpi3 <= '115.2')?'orange':(clothespinJanContents.kpi3 > '115.2' && clothespinJanContents.kpi3 < '144')?'yellow-7':(clothespinJanContents.kpi3 >= '144' && clothespinJanContents.kpi3 < '172.8')?'green':(clothespinJanContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi3}}
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
                              :color="(clothespinFebContents.kpi1 == null)?'grey-2':(clothespinFebContents.kpi1 >= '0' && clothespinFebContents.kpi1 <= '86.4')?'red':(clothespinFebContents.kpi1 > '86.4' && clothespinFebContents.kpi1 <= '115.2')?'orange':(clothespinFebContents.kpi1 > '115.2' && clothespinFebContents.kpi1 < '144')?'yellow-7':(clothespinFebContents.kpi1 >= '144' && clothespinFebContents.kpi1 < '172.8')?'green':(clothespinFebContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi2 == null)?'grey-2':(clothespinFebContents.kpi2 >= '0' && clothespinFebContents.kpi2 <= '86.4')?'red':(clothespinFebContents.kpi2 > '86.4' && clothespinFebContents.kpi2 <= '115.2')?'orange':(clothespinFebContents.kpi2 > '115.2' && clothespinFebContents.kpi2 < '144')?'yellow-7':(clothespinFebContents.kpi2 >= '144' && clothespinFebContents.kpi2 < '172.8')?'green':(clothespinFebContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi3 == null)?'grey-2':(clothespinFebContents.kpi3 >= '0' && clothespinFebContents.kpi3 <= '86.4')?'red':(clothespinFebContents.kpi3 > '86.4' && clothespinFebContents.kpi3 <= '115.2')?'orange':(clothespinFebContents.kpi3 > '115.2' && clothespinFebContents.kpi3 < '144')?'yellow-7':(clothespinFebContents.kpi3 >= '144' && clothespinFebContents.kpi3 < '172.8')?'green':(clothespinFebContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi3}}
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
                              :color="(clothespinMarContents.kpi1 == null)?'grey-2':(clothespinMarContents.kpi1 >= '0' && clothespinMarContents.kpi1 <= '86.4')?'red':(clothespinMarContents.kpi1 > '86.4' && clothespinMarContents.kpi1 <= '115.2')?'orange':(clothespinMarContents.kpi1 > '115.2' && clothespinMarContents.kpi1 < '144')?'yellow-7':(clothespinMarContents.kpi1 >= '144' && clothespinMarContents.kpi1 < '172.8')?'green':(clothespinMarContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi2 == null)?'grey-2':(clothespinMarContents.kpi2 >= '0' && clothespinMarContents.kpi2 <= '86.4')?'red':(clothespinMarContents.kpi2 > '86.4' && clothespinMarContents.kpi2 <= '115.2')?'orange':(clothespinMarContents.kpi2 > '115.2' && clothespinMarContents.kpi2 < '144')?'yellow-7':(clothespinMarContents.kpi2 >= '144' && clothespinMarContents.kpi2 < '172.8')?'green':(clothespinMarContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi3 == null)?'grey-2':(clothespinMarContents.kpi3 >= '0' && clothespinMarContents.kpi3 <= '86.4')?'red':(clothespinMarContents.kpi3 > '86.4' && clothespinMarContents.kpi3 <= '115.2')?'orange':(clothespinMarContents.kpi3 > '115.2' && clothespinMarContents.kpi3 < '144')?'yellow-7':(clothespinMarContents.kpi3 >= '144' && clothespinMarContents.kpi3 < '172.8')?'green':(clothespinMarContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi3}}
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
                              :color="(clothespinAprContents.kpi1 == null)?'grey-2':(clothespinAprContents.kpi1 >= '0' && clothespinAprContents.kpi1 <= '86.4')?'red':(clothespinAprContents.kpi1 > '86.4' && clothespinAprContents.kpi1 <= '115.2')?'orange':(clothespinAprContents.kpi1 > '115.2' && clothespinAprContents.kpi1 < '144')?'yellow-7':(clothespinAprContents.kpi1 >= '144' && clothespinAprContents.kpi1 < '172.8')?'green':(clothespinAprContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi2 == null)?'grey-2':(clothespinAprContents.kpi2 >= '0' && clothespinAprContents.kpi2 <= '86.4')?'red':(clothespinAprContents.kpi2 > '86.4' && clothespinAprContents.kpi2 <= '115.2')?'orange':(clothespinAprContents.kpi2 > '115.2' && clothespinAprContents.kpi2 < '144')?'yellow-7':(clothespinAprContents.kpi2 >= '144' && clothespinAprContents.kpi2 < '172.8')?'green':(clothespinAprContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi3 == null)?'grey-2':(clothespinAprContents.kpi3 >= '0' && clothespinAprContents.kpi3 <= '86.4')?'red':(clothespinAprContents.kpi3 > '86.4' && clothespinAprContents.kpi3 <= '115.2')?'orange':(clothespinAprContents.kpi3 > '115.2' && clothespinAprContents.kpi3 < '144')?'yellow-7':(clothespinAprContents.kpi3 >= '144' && clothespinAprContents.kpi3 < '172.8')?'green':(clothespinAprContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi3}}
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
                              :color="(clothespinMayContents.kpi1 == null)?'grey-2':(clothespinMayContents.kpi1 >= '0' && clothespinMayContents.kpi1 <= '86.4')?'red':(clothespinMayContents.kpi1 > '86.4' && clothespinMayContents.kpi1 <= '115.2')?'orange':(clothespinMayContents.kpi1 > '115.2' && clothespinMayContents.kpi1 < '144')?'yellow-7':(clothespinMayContents.kpi1 >= '144' && clothespinMayContents.kpi1 < '172.8')?'green':(clothespinMayContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi2 == null)?'grey-2':(clothespinMayContents.kpi2 >= '0' && clothespinMayContents.kpi2 <= '86.4')?'red':(clothespinMayContents.kpi2 > '86.4' && clothespinMayContents.kpi2 <= '115.2')?'orange':(clothespinMayContents.kpi2 > '115.2' && clothespinMayContents.kpi2 < '144')?'yellow-7':(clothespinMayContents.kpi2 >= '144' && clothespinMayContents.kpi2 < '172.8')?'green':(clothespinMayContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi3 == null)?'grey-2':(clothespinMayContents.kpi3 >= '0' && clothespinMayContents.kpi3 <= '86.4')?'red':(clothespinMayContents.kpi3 > '86.4' && clothespinMayContents.kpi3 <= '115.2')?'orange':(clothespinMayContents.kpi3 > '115.2' && clothespinMayContents.kpi3 < '144')?'yellow-7':(clothespinMayContents.kpi3 >= '144' && clothespinMayContents.kpi3 < '172.8')?'green':(clothespinMayContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi3}}
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
                              :color="(clothespinJunContents.kpi1 == null)?'grey-2':(clothespinJunContents.kpi1 >= '0' && clothespinJunContents.kpi1 <= '86.4')?'red':(clothespinJunContents.kpi1 > '86.4' && clothespinJunContents.kpi1 <= '115.2')?'orange':(clothespinJunContents.kpi1 > '115.2' && clothespinJunContents.kpi1 < '144')?'yellow-7':(clothespinJunContents.kpi1 >= '144' && clothespinJunContents.kpi1 < '172.8')?'green':(clothespinJunContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi2 == null)?'grey-2':(clothespinJunContents.kpi2 >= '0' && clothespinJunContents.kpi2 <= '86.4')?'red':(clothespinJunContents.kpi2 > '86.4' && clothespinJunContents.kpi2 <= '115.2')?'orange':(clothespinJunContents.kpi2 > '115.2' && clothespinJunContents.kpi2 < '144')?'yellow-7':(clothespinJunContents.kpi2 >= '144' && clothespinJunContents.kpi2 < '172.8')?'green':(clothespinJunContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi3 == null)?'grey-2':(clothespinJunContents.kpi3 >= '0' && clothespinJunContents.kpi3 <= '86.4')?'red':(clothespinJunContents.kpi3 > '86.4' && clothespinJunContents.kpi3 <= '115.2')?'orange':(clothespinJunContents.kpi3 > '115.2' && clothespinJunContents.kpi3 < '144')?'yellow-7':(clothespinJunContents.kpi3 >= '144' && clothespinJunContents.kpi3 < '172.8')?'green':(clothespinJunContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi3}}
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
                              :color="(clothespinJulContents.kpi1 == null)?'grey-2':(clothespinJulContents.kpi1 >= '0' && clothespinJulContents.kpi1 <= '86.4')?'red':(clothespinJulContents.kpi1 > '86.4' && clothespinJulContents.kpi1 <= '115.2')?'orange':(clothespinJulContents.kpi1 > '115.2' && clothespinJulContents.kpi1 < '144')?'yellow-7':(clothespinJulContents.kpi1 >= '144' && clothespinJulContents.kpi1 < '172.8')?'green':(clothespinJulContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi2 == null)?'grey-2':(clothespinJulContents.kpi2 >= '0' && clothespinJulContents.kpi2 <= '86.4')?'red':(clothespinJulContents.kpi2 > '86.4' && clothespinJulContents.kpi2 <= '115.2')?'orange':(clothespinJulContents.kpi2 > '115.2' && clothespinJulContents.kpi2 < '144')?'yellow-7':(clothespinJulContents.kpi2 >= '144' && clothespinJulContents.kpi2 < '172.8')?'green':(clothespinJulContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi3 == null)?'grey-2':(clothespinJulContents.kpi3 >= '0' && clothespinJulContents.kpi3 <= '86.4')?'red':(clothespinJulContents.kpi3 > '86.4' && clothespinJulContents.kpi3 <= '115.2')?'orange':(clothespinJulContents.kpi3 > '115.2' && clothespinJulContents.kpi3 < '144')?'yellow-7':(clothespinJulContents.kpi3 >= '144' && clothespinJulContents.kpi3 < '172.8')?'green':(clothespinJulContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi3}}
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
                              :color="(clothespinAugContents.kpi1 == null)?'grey-2':(clothespinAugContents.kpi1 >= '0' && clothespinAugContents.kpi1 <= '86.4')?'red':(clothespinAugContents.kpi1 > '86.4' && clothespinAugContents.kpi1 <= '115.2')?'orange':(clothespinAugContents.kpi1 > '115.2' && clothespinAugContents.kpi1 < '144')?'yellow-7':(clothespinAugContents.kpi1 >= '144' && clothespinAugContents.kpi1 < '172.8')?'green':(clothespinAugContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi2 == null)?'grey-2':(clothespinAugContents.kpi2 >= '0' && clothespinAugContents.kpi2 <= '86.4')?'red':(clothespinAugContents.kpi2 > '86.4' && clothespinAugContents.kpi2 <= '115.2')?'orange':(clothespinAugContents.kpi2 > '115.2' && clothespinAugContents.kpi2 < '144')?'yellow-7':(clothespinAugContents.kpi2 >= '144' && clothespinAugContents.kpi2 < '172.8')?'green':(clothespinAugContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi3 == null)?'grey-2':(clothespinAugContents.kpi3 >= '0' && clothespinAugContents.kpi3 <= '86.4')?'red':(clothespinAugContents.kpi3 > '86.4' && clothespinAugContents.kpi3 <= '115.2')?'orange':(clothespinAugContents.kpi3 > '115.2' && clothespinAugContents.kpi3 < '144')?'yellow-7':(clothespinAugContents.kpi3 >= '144' && clothespinAugContents.kpi3 < '172.8')?'green':(clothespinAugContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi3}}
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
                              :color="(clothespinSepContents.kpi1 == null)?'grey-2':(clothespinSepContents.kpi1 >= '0' && clothespinSepContents.kpi1 <= '86.4')?'red':(clothespinSepContents.kpi1 > '86.4' && clothespinSepContents.kpi1 <= '115.2')?'orange':(clothespinSepContents.kpi1 > '115.2' && clothespinSepContents.kpi1 < '144')?'yellow-7':(clothespinSepContents.kpi1 >= '144' && clothespinSepContents.kpi1 < '172.8')?'green':(clothespinSepContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi2 == null)?'grey-2':(clothespinSepContents.kpi2 >= '0' && clothespinSepContents.kpi2 <= '86.4')?'red':(clothespinSepContents.kpi2 > '86.4' && clothespinSepContents.kpi2 <= '115.2')?'orange':(clothespinSepContents.kpi2 > '115.2' && clothespinSepContents.kpi2 < '144')?'yellow-7':(clothespinSepContents.kpi2 >= '144' && clothespinSepContents.kpi2 < '172.8')?'green':(clothespinSepContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi3 == null)?'grey-2':(clothespinSepContents.kpi3 >= '0' && clothespinSepContents.kpi3 <= '86.4')?'red':(clothespinSepContents.kpi3 > '86.4' && clothespinSepContents.kpi3 <= '115.2')?'orange':(clothespinSepContents.kpi3 > '115.2' && clothespinSepContents.kpi3 < '144')?'yellow-7':(clothespinSepContents.kpi3 >= '144' && clothespinSepContents.kpi3 < '172.8')?'green':(clothespinSepContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi3}}
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
                              :color="(clothespinOctContents.kpi1 == null)?'grey-2':(clothespinOctContents.kpi1 >= '0' && clothespinOctContents.kpi1 <= '86.4')?'red':(clothespinOctContents.kpi1 > '86.4' && clothespinOctContents.kpi1 <= '115.2')?'orange':(clothespinOctContents.kpi1 > '115.2' && clothespinOctContents.kpi1 < '144')?'yellow-7':(clothespinOctContents.kpi1 >= '144' && clothespinOctContents.kpi1 < '172.8')?'green':(clothespinOctContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi2 == null)?'grey-2':(clothespinOctContents.kpi2 >= '0' && clothespinOctContents.kpi2 <= '86.4')?'red':(clothespinOctContents.kpi2 > '86.4' && clothespinOctContents.kpi2 <= '115.2')?'orange':(clothespinOctContents.kpi2 > '115.2' && clothespinOctContents.kpi2 < '144')?'yellow-7':(clothespinOctContents.kpi2 >= '144' && clothespinOctContents.kpi2 < '172.8')?'green':(clothespinOctContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi3 == null)?'grey-2':(clothespinOctContents.kpi3 >= '0' && clothespinOctContents.kpi3 <= '86.4')?'red':(clothespinOctContents.kpi3 > '86.4' && clothespinOctContents.kpi3 <= '115.2')?'orange':(clothespinOctContents.kpi3 > '115.2' && clothespinOctContents.kpi3 < '144')?'yellow-7':(clothespinOctContents.kpi3 >= '144' && clothespinOctContents.kpi3 < '172.8')?'green':(clothespinOctContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi3}}
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
                              :color="(clothespinNovContents.kpi1 == null)?'grey-2':(clothespinNovContents.kpi1 >= '0' && clothespinNovContents.kpi1 <= '86.4')?'red':(clothespinNovContents.kpi1 > '86.4' && clothespinNovContents.kpi1 <= '115.2')?'orange':(clothespinNovContents.kpi1 > '115.2' && clothespinNovContents.kpi1 < '144')?'yellow-7':(clothespinNovContents.kpi1 >= '144' && clothespinNovContents.kpi1 < '172.8')?'green':(clothespinNovContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi2 == null)?'grey-2':(clothespinNovContents.kpi2 >= '0' && clothespinNovContents.kpi2 <= '86.4')?'red':(clothespinNovContents.kpi2 > '86.4' && clothespinNovContents.kpi2 <= '115.2')?'orange':(clothespinNovContents.kpi2 > '115.2' && clothespinNovContents.kpi2 < '144')?'yellow-7':(clothespinNovContents.kpi2 >= '144' && clothespinNovContents.kpi2 < '172.8')?'green':(clothespinNovContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi3 == null)?'grey-2':(clothespinNovContents.kpi3 >= '0' && clothespinNovContents.kpi3 <= '86.4')?'red':(clothespinNovContents.kpi3 > '86.4' && clothespinNovContents.kpi3 <= '115.2')?'orange':(clothespinNovContents.kpi3 > '115.2' && clothespinNovContents.kpi3 < '144')?'yellow-7':(clothespinNovContents.kpi3 >= '144' && clothespinNovContents.kpi3 < '172.8')?'green':(clothespinNovContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi3}}
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
                              :color="(clothespinDecContents.kpi1 == null)?'grey-2':(clothespinDecContents.kpi1 >= '0' && clothespinDecContents.kpi1 <= '86.4')?'red':(clothespinDecContents.kpi1 > '86.4' && clothespinDecContents.kpi1 <= '115.2')?'orange':(clothespinDecContents.kpi1 > '115.2' && clothespinDecContents.kpi1 < '144')?'yellow-7':(clothespinDecContents.kpi1 >= '144' && clothespinDecContents.kpi1 < '172.8')?'green':(clothespinDecContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi2 == null)?'grey-2':(clothespinDecContents.kpi2 >= '0' && clothespinDecContents.kpi2 <= '86.4')?'red':(clothespinDecContents.kpi2 > '86.4' && clothespinDecContents.kpi2 <= '115.2')?'orange':(clothespinDecContents.kpi2 > '115.2' && clothespinDecContents.kpi2 < '144')?'yellow-7':(clothespinDecContents.kpi2 >= '144' && clothespinDecContents.kpi2 < '172.8')?'green':(clothespinDecContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi3 == null)?'grey-2':(clothespinDecContents.kpi3 >= '0' && clothespinDecContents.kpi3 <= '86.4')?'red':(clothespinDecContents.kpi3 > '86.4' && clothespinDecContents.kpi3 <= '115.2')?'orange':(clothespinDecContents.kpi3 > '115.2' && clothespinDecContents.kpi3 < '144')?'yellow-7':(clothespinDecContents.kpi3 >= '144' && clothespinDecContents.kpi3 < '172.8')?'green':(clothespinDecContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi3}}
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi1 == null)?'grey-2':(clothespinJanContents.kpi1 >= '0' && clothespinJanContents.kpi1 <= '86.4')?'red':(clothespinJanContents.kpi1 > '86.4' && clothespinJanContents.kpi1 <= '115.2')?'orange':(clothespinJanContents.kpi1 > '115.2' && clothespinJanContents.kpi1 < '144')?'yellow-7':(clothespinJanContents.kpi1 >= '144' && clothespinJanContents.kpi1 < '172.8')?'green':(clothespinJanContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi2 == null)?'grey-2':(clothespinJanContents.kpi2 >= '0' && clothespinJanContents.kpi2 <= '86.4')?'red':(clothespinJanContents.kpi2 > '86.4' && clothespinJanContents.kpi2 <= '115.2')?'orange':(clothespinJanContents.kpi2 > '115.2' && clothespinJanContents.kpi2 < '144')?'yellow-7':(clothespinJanContents.kpi2 >= '144' && clothespinJanContents.kpi2 < '172.8')?'green':(clothespinJanContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi3 == null)?'grey-2':(clothespinJanContents.kpi3 >= '0' && clothespinJanContents.kpi3 <= '86.4')?'red':(clothespinJanContents.kpi3 > '86.4' && clothespinJanContents.kpi3 <= '115.2')?'orange':(clothespinJanContents.kpi3 > '115.2' && clothespinJanContents.kpi3 < '144')?'yellow-7':(clothespinJanContents.kpi3 >= '144' && clothespinJanContents.kpi3 < '172.8')?'green':(clothespinJanContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi3}}
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
                              :color="(clothespinFebContents.kpi1 == null)?'grey-2':(clothespinFebContents.kpi1 >= '0' && clothespinFebContents.kpi1 <= '86.4')?'red':(clothespinFebContents.kpi1 > '86.4' && clothespinFebContents.kpi1 <= '115.2')?'orange':(clothespinFebContents.kpi1 > '115.2' && clothespinFebContents.kpi1 < '144')?'yellow-7':(clothespinFebContents.kpi1 >= '144' && clothespinFebContents.kpi1 < '172.8')?'green':(clothespinFebContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi2 == null)?'grey-2':(clothespinFebContents.kpi2 >= '0' && clothespinFebContents.kpi2 <= '86.4')?'red':(clothespinFebContents.kpi2 > '86.4' && clothespinFebContents.kpi2 <= '115.2')?'orange':(clothespinFebContents.kpi2 > '115.2' && clothespinFebContents.kpi2 < '144')?'yellow-7':(clothespinFebContents.kpi2 >= '144' && clothespinFebContents.kpi2 < '172.8')?'green':(clothespinFebContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi3 == null)?'grey-2':(clothespinFebContents.kpi3 >= '0' && clothespinFebContents.kpi3 <= '86.4')?'red':(clothespinFebContents.kpi3 > '86.4' && clothespinFebContents.kpi3 <= '115.2')?'orange':(clothespinFebContents.kpi3 > '115.2' && clothespinFebContents.kpi3 < '144')?'yellow-7':(clothespinFebContents.kpi3 >= '144' && clothespinFebContents.kpi3 < '172.8')?'green':(clothespinFebContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi3}}
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
                              :color="(clothespinMarContents.kpi1 == null)?'grey-2':(clothespinMarContents.kpi1 >= '0' && clothespinMarContents.kpi1 <= '86.4')?'red':(clothespinMarContents.kpi1 > '86.4' && clothespinMarContents.kpi1 <= '115.2')?'orange':(clothespinMarContents.kpi1 > '115.2' && clothespinMarContents.kpi1 < '144')?'yellow-7':(clothespinMarContents.kpi1 >= '144' && clothespinMarContents.kpi1 < '172.8')?'green':(clothespinMarContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi2 == null)?'grey-2':(clothespinMarContents.kpi2 >= '0' && clothespinMarContents.kpi2 <= '86.4')?'red':(clothespinMarContents.kpi2 > '86.4' && clothespinMarContents.kpi2 <= '115.2')?'orange':(clothespinMarContents.kpi2 > '115.2' && clothespinMarContents.kpi2 < '144')?'yellow-7':(clothespinMarContents.kpi2 >= '144' && clothespinMarContents.kpi2 < '172.8')?'green':(clothespinMarContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi3 == null)?'grey-2':(clothespinMarContents.kpi3 >= '0' && clothespinMarContents.kpi3 <= '86.4')?'red':(clothespinMarContents.kpi3 > '86.4' && clothespinMarContents.kpi3 <= '115.2')?'orange':(clothespinMarContents.kpi3 > '115.2' && clothespinMarContents.kpi3 < '144')?'yellow-7':(clothespinMarContents.kpi3 >= '144' && clothespinMarContents.kpi3 < '172.8')?'green':(clothespinMarContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi3}}
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
                              :color="(clothespinAprContents.kpi1 == null)?'grey-2':(clothespinAprContents.kpi1 >= '0' && clothespinAprContents.kpi1 <= '86.4')?'red':(clothespinAprContents.kpi1 > '86.4' && clothespinAprContents.kpi1 <= '115.2')?'orange':(clothespinAprContents.kpi1 > '115.2' && clothespinAprContents.kpi1 < '144')?'yellow-7':(clothespinAprContents.kpi1 >= '144' && clothespinAprContents.kpi1 < '172.8')?'green':(clothespinAprContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi2 == null)?'grey-2':(clothespinAprContents.kpi2 >= '0' && clothespinAprContents.kpi2 <= '86.4')?'red':(clothespinAprContents.kpi2 > '86.4' && clothespinAprContents.kpi2 <= '115.2')?'orange':(clothespinAprContents.kpi2 > '115.2' && clothespinAprContents.kpi2 < '144')?'yellow-7':(clothespinAprContents.kpi2 >= '144' && clothespinAprContents.kpi2 < '172.8')?'green':(clothespinAprContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi3 == null)?'grey-2':(clothespinAprContents.kpi3 >= '0' && clothespinAprContents.kpi3 <= '86.4')?'red':(clothespinAprContents.kpi3 > '86.4' && clothespinAprContents.kpi3 <= '115.2')?'orange':(clothespinAprContents.kpi3 > '115.2' && clothespinAprContents.kpi3 < '144')?'yellow-7':(clothespinAprContents.kpi3 >= '144' && clothespinAprContents.kpi3 < '172.8')?'green':(clothespinAprContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi3}}
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
                              :color="(clothespinMayContents.kpi1 == null)?'grey-2':(clothespinMayContents.kpi1 >= '0' && clothespinMayContents.kpi1 <= '86.4')?'red':(clothespinMayContents.kpi1 > '86.4' && clothespinMayContents.kpi1 <= '115.2')?'orange':(clothespinMayContents.kpi1 > '115.2' && clothespinMayContents.kpi1 < '144')?'yellow-7':(clothespinMayContents.kpi1 >= '144' && clothespinMayContents.kpi1 < '172.8')?'green':(clothespinMayContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi2 == null)?'grey-2':(clothespinMayContents.kpi2 >= '0' && clothespinMayContents.kpi2 <= '86.4')?'red':(clothespinMayContents.kpi2 > '86.4' && clothespinMayContents.kpi2 <= '115.2')?'orange':(clothespinMayContents.kpi2 > '115.2' && clothespinMayContents.kpi2 < '144')?'yellow-7':(clothespinMayContents.kpi2 >= '144' && clothespinMayContents.kpi2 < '172.8')?'green':(clothespinMayContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi3 == null)?'grey-2':(clothespinMayContents.kpi3 >= '0' && clothespinMayContents.kpi3 <= '86.4')?'red':(clothespinMayContents.kpi3 > '86.4' && clothespinMayContents.kpi3 <= '115.2')?'orange':(clothespinMayContents.kpi3 > '115.2' && clothespinMayContents.kpi3 < '144')?'yellow-7':(clothespinMayContents.kpi3 >= '144' && clothespinMayContents.kpi3 < '172.8')?'green':(clothespinMayContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi3}}
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
                              :color="(clothespinJunContents.kpi1 == null)?'grey-2':(clothespinJunContents.kpi1 >= '0' && clothespinJunContents.kpi1 <= '86.4')?'red':(clothespinJunContents.kpi1 > '86.4' && clothespinJunContents.kpi1 <= '115.2')?'orange':(clothespinJunContents.kpi1 > '115.2' && clothespinJunContents.kpi1 < '144')?'yellow-7':(clothespinJunContents.kpi1 >= '144' && clothespinJunContents.kpi1 < '172.8')?'green':(clothespinJunContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi2 == null)?'grey-2':(clothespinJunContents.kpi2 >= '0' && clothespinJunContents.kpi2 <= '86.4')?'red':(clothespinJunContents.kpi2 > '86.4' && clothespinJunContents.kpi2 <= '115.2')?'orange':(clothespinJunContents.kpi2 > '115.2' && clothespinJunContents.kpi2 < '144')?'yellow-7':(clothespinJunContents.kpi2 >= '144' && clothespinJunContents.kpi2 < '172.8')?'green':(clothespinJunContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi3 == null)?'grey-2':(clothespinJunContents.kpi3 >= '0' && clothespinJunContents.kpi3 <= '86.4')?'red':(clothespinJunContents.kpi3 > '86.4' && clothespinJunContents.kpi3 <= '115.2')?'orange':(clothespinJunContents.kpi3 > '115.2' && clothespinJunContents.kpi3 < '144')?'yellow-7':(clothespinJunContents.kpi3 >= '144' && clothespinJunContents.kpi3 < '172.8')?'green':(clothespinJunContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi3}}
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
                              :color="(clothespinJulContents.kpi1 == null)?'grey-2':(clothespinJulContents.kpi1 >= '0' && clothespinJulContents.kpi1 <= '86.4')?'red':(clothespinJulContents.kpi1 > '86.4' && clothespinJulContents.kpi1 <= '115.2')?'orange':(clothespinJulContents.kpi1 > '115.2' && clothespinJulContents.kpi1 < '144')?'yellow-7':(clothespinJulContents.kpi1 >= '144' && clothespinJulContents.kpi1 < '172.8')?'green':(clothespinJulContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi2 == null)?'grey-2':(clothespinJulContents.kpi2 >= '0' && clothespinJulContents.kpi2 <= '86.4')?'red':(clothespinJulContents.kpi2 > '86.4' && clothespinJulContents.kpi2 <= '115.2')?'orange':(clothespinJulContents.kpi2 > '115.2' && clothespinJulContents.kpi2 < '144')?'yellow-7':(clothespinJulContents.kpi2 >= '144' && clothespinJulContents.kpi2 < '172.8')?'green':(clothespinJulContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi3 == null)?'grey-2':(clothespinJulContents.kpi3 >= '0' && clothespinJulContents.kpi3 <= '86.4')?'red':(clothespinJulContents.kpi3 > '86.4' && clothespinJulContents.kpi3 <= '115.2')?'orange':(clothespinJulContents.kpi3 > '115.2' && clothespinJulContents.kpi3 < '144')?'yellow-7':(clothespinJulContents.kpi3 >= '144' && clothespinJulContents.kpi3 < '172.8')?'green':(clothespinJulContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi3}}
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
                              :color="(clothespinAugContents.kpi1 == null)?'grey-2':(clothespinAugContents.kpi1 >= '0' && clothespinAugContents.kpi1 <= '86.4')?'red':(clothespinAugContents.kpi1 > '86.4' && clothespinAugContents.kpi1 <= '115.2')?'orange':(clothespinAugContents.kpi1 > '115.2' && clothespinAugContents.kpi1 < '144')?'yellow-7':(clothespinAugContents.kpi1 >= '144' && clothespinAugContents.kpi1 < '172.8')?'green':(clothespinAugContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi2 == null)?'grey-2':(clothespinAugContents.kpi2 >= '0' && clothespinAugContents.kpi2 <= '86.4')?'red':(clothespinAugContents.kpi2 > '86.4' && clothespinAugContents.kpi2 <= '115.2')?'orange':(clothespinAugContents.kpi2 > '115.2' && clothespinAugContents.kpi2 < '144')?'yellow-7':(clothespinAugContents.kpi2 >= '144' && clothespinAugContents.kpi2 < '172.8')?'green':(clothespinAugContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi3 == null)?'grey-2':(clothespinAugContents.kpi3 >= '0' && clothespinAugContents.kpi3 <= '86.4')?'red':(clothespinAugContents.kpi3 > '86.4' && clothespinAugContents.kpi3 <= '115.2')?'orange':(clothespinAugContents.kpi3 > '115.2' && clothespinAugContents.kpi3 < '144')?'yellow-7':(clothespinAugContents.kpi3 >= '144' && clothespinAugContents.kpi3 < '172.8')?'green':(clothespinAugContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi3}}
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
                              :color="(clothespinSepContents.kpi1 == null)?'grey-2':(clothespinSepContents.kpi1 >= '0' && clothespinSepContents.kpi1 <= '86.4')?'red':(clothespinSepContents.kpi1 > '86.4' && clothespinSepContents.kpi1 <= '115.2')?'orange':(clothespinSepContents.kpi1 > '115.2' && clothespinSepContents.kpi1 < '144')?'yellow-7':(clothespinSepContents.kpi1 >= '144' && clothespinSepContents.kpi1 < '172.8')?'green':(clothespinSepContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi2 == null)?'grey-2':(clothespinSepContents.kpi2 >= '0' && clothespinSepContents.kpi2 <= '86.4')?'red':(clothespinSepContents.kpi2 > '86.4' && clothespinSepContents.kpi2 <= '115.2')?'orange':(clothespinSepContents.kpi2 > '115.2' && clothespinSepContents.kpi2 < '144')?'yellow-7':(clothespinSepContents.kpi2 >= '144' && clothespinSepContents.kpi2 < '172.8')?'green':(clothespinSepContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi3 == null)?'grey-2':(clothespinSepContents.kpi3 >= '0' && clothespinSepContents.kpi3 <= '86.4')?'red':(clothespinSepContents.kpi3 > '86.4' && clothespinSepContents.kpi3 <= '115.2')?'orange':(clothespinSepContents.kpi3 > '115.2' && clothespinSepContents.kpi3 < '144')?'yellow-7':(clothespinSepContents.kpi3 >= '144' && clothespinSepContents.kpi3 < '172.8')?'green':(clothespinSepContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi3}}
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
                              :color="(clothespinOctContents.kpi1 == null)?'grey-2':(clothespinOctContents.kpi1 >= '0' && clothespinOctContents.kpi1 <= '86.4')?'red':(clothespinOctContents.kpi1 > '86.4' && clothespinOctContents.kpi1 <= '115.2')?'orange':(clothespinOctContents.kpi1 > '115.2' && clothespinOctContents.kpi1 < '144')?'yellow-7':(clothespinOctContents.kpi1 >= '144' && clothespinOctContents.kpi1 < '172.8')?'green':(clothespinOctContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi2 == null)?'grey-2':(clothespinOctContents.kpi2 >= '0' && clothespinOctContents.kpi2 <= '86.4')?'red':(clothespinOctContents.kpi2 > '86.4' && clothespinOctContents.kpi2 <= '115.2')?'orange':(clothespinOctContents.kpi2 > '115.2' && clothespinOctContents.kpi2 < '144')?'yellow-7':(clothespinOctContents.kpi2 >= '144' && clothespinOctContents.kpi2 < '172.8')?'green':(clothespinOctContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi3 == null)?'grey-2':(clothespinOctContents.kpi3 >= '0' && clothespinOctContents.kpi3 <= '86.4')?'red':(clothespinOctContents.kpi3 > '86.4' && clothespinOctContents.kpi3 <= '115.2')?'orange':(clothespinOctContents.kpi3 > '115.2' && clothespinOctContents.kpi3 < '144')?'yellow-7':(clothespinOctContents.kpi3 >= '144' && clothespinOctContents.kpi3 < '172.8')?'green':(clothespinOctContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi3}}
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
                              :color="(clothespinNovContents.kpi1 == null)?'grey-2':(clothespinNovContents.kpi1 >= '0' && clothespinNovContents.kpi1 <= '86.4')?'red':(clothespinNovContents.kpi1 > '86.4' && clothespinNovContents.kpi1 <= '115.2')?'orange':(clothespinNovContents.kpi1 > '115.2' && clothespinNovContents.kpi1 < '144')?'yellow-7':(clothespinNovContents.kpi1 >= '144' && clothespinNovContents.kpi1 < '172.8')?'green':(clothespinNovContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi2 == null)?'grey-2':(clothespinNovContents.kpi2 >= '0' && clothespinNovContents.kpi2 <= '86.4')?'red':(clothespinNovContents.kpi2 > '86.4' && clothespinNovContents.kpi2 <= '115.2')?'orange':(clothespinNovContents.kpi2 > '115.2' && clothespinNovContents.kpi2 < '144')?'yellow-7':(clothespinNovContents.kpi2 >= '144' && clothespinNovContents.kpi2 < '172.8')?'green':(clothespinNovContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi3 == null)?'grey-2':(clothespinNovContents.kpi3 >= '0' && clothespinNovContents.kpi3 <= '86.4')?'red':(clothespinNovContents.kpi3 > '86.4' && clothespinNovContents.kpi3 <= '115.2')?'orange':(clothespinNovContents.kpi3 > '115.2' && clothespinNovContents.kpi3 < '144')?'yellow-7':(clothespinNovContents.kpi3 >= '144' && clothespinNovContents.kpi3 < '172.8')?'green':(clothespinNovContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi3}}
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
                              :color="(clothespinDecContents.kpi1 == null)?'grey-2':(clothespinDecContents.kpi1 >= '0' && clothespinDecContents.kpi1 <= '86.4')?'red':(clothespinDecContents.kpi1 > '86.4' && clothespinDecContents.kpi1 <= '115.2')?'orange':(clothespinDecContents.kpi1 > '115.2' && clothespinDecContents.kpi1 < '144')?'yellow-7':(clothespinDecContents.kpi1 >= '144' && clothespinDecContents.kpi1 < '172.8')?'green':(clothespinDecContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi2 == null)?'grey-2':(clothespinDecContents.kpi2 >= '0' && clothespinDecContents.kpi2 <= '86.4')?'red':(clothespinDecContents.kpi2 > '86.4' && clothespinDecContents.kpi2 <= '115.2')?'orange':(clothespinDecContents.kpi2 > '115.2' && clothespinDecContents.kpi2 < '144')?'yellow-7':(clothespinDecContents.kpi2 >= '144' && clothespinDecContents.kpi2 < '172.8')?'green':(clothespinDecContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi3 == null)?'grey-2':(clothespinDecContents.kpi3 >= '0' && clothespinDecContents.kpi3 <= '86.4')?'red':(clothespinDecContents.kpi3 > '86.4' && clothespinDecContents.kpi3 <= '115.2')?'orange':(clothespinDecContents.kpi3 > '115.2' && clothespinDecContents.kpi3 < '144')?'yellow-7':(clothespinDecContents.kpi3 >= '144' && clothespinDecContents.kpi3 < '172.8')?'green':(clothespinDecContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi3}}
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi1 == null)?'grey-2':(clothespinJanContents.kpi1 >= '0' && clothespinJanContents.kpi1 <= '86.4')?'red':(clothespinJanContents.kpi1 > '86.4' && clothespinJanContents.kpi1 <= '115.2')?'orange':(clothespinJanContents.kpi1 > '115.2' && clothespinJanContents.kpi1 < '144')?'yellow-7':(clothespinJanContents.kpi1 >= '144' && clothespinJanContents.kpi1 < '172.8')?'green':(clothespinJanContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi2 == null)?'grey-2':(clothespinJanContents.kpi2 >= '0' && clothespinJanContents.kpi2 <= '86.4')?'red':(clothespinJanContents.kpi2 > '86.4' && clothespinJanContents.kpi2 <= '115.2')?'orange':(clothespinJanContents.kpi2 > '115.2' && clothespinJanContents.kpi2 < '144')?'yellow-7':(clothespinJanContents.kpi2 >= '144' && clothespinJanContents.kpi2 < '172.8')?'green':(clothespinJanContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi3 == null)?'grey-2':(clothespinJanContents.kpi3 >= '0' && clothespinJanContents.kpi3 <= '86.4')?'red':(clothespinJanContents.kpi3 > '86.4' && clothespinJanContents.kpi3 <= '115.2')?'orange':(clothespinJanContents.kpi3 > '115.2' && clothespinJanContents.kpi3 < '144')?'yellow-7':(clothespinJanContents.kpi3 >= '144' && clothespinJanContents.kpi3 < '172.8')?'green':(clothespinJanContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi3}}
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
                              :color="(clothespinFebContents.kpi1 == null)?'grey-2':(clothespinFebContents.kpi1 >= '0' && clothespinFebContents.kpi1 <= '86.4')?'red':(clothespinFebContents.kpi1 > '86.4' && clothespinFebContents.kpi1 <= '115.2')?'orange':(clothespinFebContents.kpi1 > '115.2' && clothespinFebContents.kpi1 < '144')?'yellow-7':(clothespinFebContents.kpi1 >= '144' && clothespinFebContents.kpi1 < '172.8')?'green':(clothespinFebContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi2 == null)?'grey-2':(clothespinFebContents.kpi2 >= '0' && clothespinFebContents.kpi2 <= '86.4')?'red':(clothespinFebContents.kpi2 > '86.4' && clothespinFebContents.kpi2 <= '115.2')?'orange':(clothespinFebContents.kpi2 > '115.2' && clothespinFebContents.kpi2 < '144')?'yellow-7':(clothespinFebContents.kpi2 >= '144' && clothespinFebContents.kpi2 < '172.8')?'green':(clothespinFebContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi3 == null)?'grey-2':(clothespinFebContents.kpi3 >= '0' && clothespinFebContents.kpi3 <= '86.4')?'red':(clothespinFebContents.kpi3 > '86.4' && clothespinFebContents.kpi3 <= '115.2')?'orange':(clothespinFebContents.kpi3 > '115.2' && clothespinFebContents.kpi3 < '144')?'yellow-7':(clothespinFebContents.kpi3 >= '144' && clothespinFebContents.kpi3 < '172.8')?'green':(clothespinFebContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi3}}
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
                              :color="(clothespinMarContents.kpi1 == null)?'grey-2':(clothespinMarContents.kpi1 >= '0' && clothespinMarContents.kpi1 <= '86.4')?'red':(clothespinMarContents.kpi1 > '86.4' && clothespinMarContents.kpi1 <= '115.2')?'orange':(clothespinMarContents.kpi1 > '115.2' && clothespinMarContents.kpi1 < '144')?'yellow-7':(clothespinMarContents.kpi1 >= '144' && clothespinMarContents.kpi1 < '172.8')?'green':(clothespinMarContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi2 == null)?'grey-2':(clothespinMarContents.kpi2 >= '0' && clothespinMarContents.kpi2 <= '86.4')?'red':(clothespinMarContents.kpi2 > '86.4' && clothespinMarContents.kpi2 <= '115.2')?'orange':(clothespinMarContents.kpi2 > '115.2' && clothespinMarContents.kpi2 < '144')?'yellow-7':(clothespinMarContents.kpi2 >= '144' && clothespinMarContents.kpi2 < '172.8')?'green':(clothespinMarContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi3 == null)?'grey-2':(clothespinMarContents.kpi3 >= '0' && clothespinMarContents.kpi3 <= '86.4')?'red':(clothespinMarContents.kpi3 > '86.4' && clothespinMarContents.kpi3 <= '115.2')?'orange':(clothespinMarContents.kpi3 > '115.2' && clothespinMarContents.kpi3 < '144')?'yellow-7':(clothespinMarContents.kpi3 >= '144' && clothespinMarContents.kpi3 < '172.8')?'green':(clothespinMarContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi3}}
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
                              :color="(clothespinAprContents.kpi1 == null)?'grey-2':(clothespinAprContents.kpi1 >= '0' && clothespinAprContents.kpi1 <= '86.4')?'red':(clothespinAprContents.kpi1 > '86.4' && clothespinAprContents.kpi1 <= '115.2')?'orange':(clothespinAprContents.kpi1 > '115.2' && clothespinAprContents.kpi1 < '144')?'yellow-7':(clothespinAprContents.kpi1 >= '144' && clothespinAprContents.kpi1 < '172.8')?'green':(clothespinAprContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi2 == null)?'grey-2':(clothespinAprContents.kpi2 >= '0' && clothespinAprContents.kpi2 <= '86.4')?'red':(clothespinAprContents.kpi2 > '86.4' && clothespinAprContents.kpi2 <= '115.2')?'orange':(clothespinAprContents.kpi2 > '115.2' && clothespinAprContents.kpi2 < '144')?'yellow-7':(clothespinAprContents.kpi2 >= '144' && clothespinAprContents.kpi2 < '172.8')?'green':(clothespinAprContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi3 == null)?'grey-2':(clothespinAprContents.kpi3 >= '0' && clothespinAprContents.kpi3 <= '86.4')?'red':(clothespinAprContents.kpi3 > '86.4' && clothespinAprContents.kpi3 <= '115.2')?'orange':(clothespinAprContents.kpi3 > '115.2' && clothespinAprContents.kpi3 < '144')?'yellow-7':(clothespinAprContents.kpi3 >= '144' && clothespinAprContents.kpi3 < '172.8')?'green':(clothespinAprContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi3}}
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
                              :color="(clothespinMayContents.kpi1 == null)?'grey-2':(clothespinMayContents.kpi1 >= '0' && clothespinMayContents.kpi1 <= '86.4')?'red':(clothespinMayContents.kpi1 > '86.4' && clothespinMayContents.kpi1 <= '115.2')?'orange':(clothespinMayContents.kpi1 > '115.2' && clothespinMayContents.kpi1 < '144')?'yellow-7':(clothespinMayContents.kpi1 >= '144' && clothespinMayContents.kpi1 < '172.8')?'green':(clothespinMayContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi2 == null)?'grey-2':(clothespinMayContents.kpi2 >= '0' && clothespinMayContents.kpi2 <= '86.4')?'red':(clothespinMayContents.kpi2 > '86.4' && clothespinMayContents.kpi2 <= '115.2')?'orange':(clothespinMayContents.kpi2 > '115.2' && clothespinMayContents.kpi2 < '144')?'yellow-7':(clothespinMayContents.kpi2 >= '144' && clothespinMayContents.kpi2 < '172.8')?'green':(clothespinMayContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi3 == null)?'grey-2':(clothespinMayContents.kpi3 >= '0' && clothespinMayContents.kpi3 <= '86.4')?'red':(clothespinMayContents.kpi3 > '86.4' && clothespinMayContents.kpi3 <= '115.2')?'orange':(clothespinMayContents.kpi3 > '115.2' && clothespinMayContents.kpi3 < '144')?'yellow-7':(clothespinMayContents.kpi3 >= '144' && clothespinMayContents.kpi3 < '172.8')?'green':(clothespinMayContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi3}}
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
                              :color="(clothespinJunContents.kpi1 == null)?'grey-2':(clothespinJunContents.kpi1 >= '0' && clothespinJunContents.kpi1 <= '86.4')?'red':(clothespinJunContents.kpi1 > '86.4' && clothespinJunContents.kpi1 <= '115.2')?'orange':(clothespinJunContents.kpi1 > '115.2' && clothespinJunContents.kpi1 < '144')?'yellow-7':(clothespinJunContents.kpi1 >= '144' && clothespinJunContents.kpi1 < '172.8')?'green':(clothespinJunContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi2 == null)?'grey-2':(clothespinJunContents.kpi2 >= '0' && clothespinJunContents.kpi2 <= '86.4')?'red':(clothespinJunContents.kpi2 > '86.4' && clothespinJunContents.kpi2 <= '115.2')?'orange':(clothespinJunContents.kpi2 > '115.2' && clothespinJunContents.kpi2 < '144')?'yellow-7':(clothespinJunContents.kpi2 >= '144' && clothespinJunContents.kpi2 < '172.8')?'green':(clothespinJunContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi3 == null)?'grey-2':(clothespinJunContents.kpi3 >= '0' && clothespinJunContents.kpi3 <= '86.4')?'red':(clothespinJunContents.kpi3 > '86.4' && clothespinJunContents.kpi3 <= '115.2')?'orange':(clothespinJunContents.kpi3 > '115.2' && clothespinJunContents.kpi3 < '144')?'yellow-7':(clothespinJunContents.kpi3 >= '144' && clothespinJunContents.kpi3 < '172.8')?'green':(clothespinJunContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi3}}
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
                              :color="(clothespinJulContents.kpi1 == null)?'grey-2':(clothespinJulContents.kpi1 >= '0' && clothespinJulContents.kpi1 <= '86.4')?'red':(clothespinJulContents.kpi1 > '86.4' && clothespinJulContents.kpi1 <= '115.2')?'orange':(clothespinJulContents.kpi1 > '115.2' && clothespinJulContents.kpi1 < '144')?'yellow-7':(clothespinJulContents.kpi1 >= '144' && clothespinJulContents.kpi1 < '172.8')?'green':(clothespinJulContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi2 == null)?'grey-2':(clothespinJulContents.kpi2 >= '0' && clothespinJulContents.kpi2 <= '86.4')?'red':(clothespinJulContents.kpi2 > '86.4' && clothespinJulContents.kpi2 <= '115.2')?'orange':(clothespinJulContents.kpi2 > '115.2' && clothespinJulContents.kpi2 < '144')?'yellow-7':(clothespinJulContents.kpi2 >= '144' && clothespinJulContents.kpi2 < '172.8')?'green':(clothespinJulContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi3 == null)?'grey-2':(clothespinJulContents.kpi3 >= '0' && clothespinJulContents.kpi3 <= '86.4')?'red':(clothespinJulContents.kpi3 > '86.4' && clothespinJulContents.kpi3 <= '115.2')?'orange':(clothespinJulContents.kpi3 > '115.2' && clothespinJulContents.kpi3 < '144')?'yellow-7':(clothespinJulContents.kpi3 >= '144' && clothespinJulContents.kpi3 < '172.8')?'green':(clothespinJulContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi3}}
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
                              :color="(clothespinAugContents.kpi1 == null)?'grey-2':(clothespinAugContents.kpi1 >= '0' && clothespinAugContents.kpi1 <= '86.4')?'red':(clothespinAugContents.kpi1 > '86.4' && clothespinAugContents.kpi1 <= '115.2')?'orange':(clothespinAugContents.kpi1 > '115.2' && clothespinAugContents.kpi1 < '144')?'yellow-7':(clothespinAugContents.kpi1 >= '144' && clothespinAugContents.kpi1 < '172.8')?'green':(clothespinAugContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi2 == null)?'grey-2':(clothespinAugContents.kpi2 >= '0' && clothespinAugContents.kpi2 <= '86.4')?'red':(clothespinAugContents.kpi2 > '86.4' && clothespinAugContents.kpi2 <= '115.2')?'orange':(clothespinAugContents.kpi2 > '115.2' && clothespinAugContents.kpi2 < '144')?'yellow-7':(clothespinAugContents.kpi2 >= '144' && clothespinAugContents.kpi2 < '172.8')?'green':(clothespinAugContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi3 == null)?'grey-2':(clothespinAugContents.kpi3 >= '0' && clothespinAugContents.kpi3 <= '86.4')?'red':(clothespinAugContents.kpi3 > '86.4' && clothespinAugContents.kpi3 <= '115.2')?'orange':(clothespinAugContents.kpi3 > '115.2' && clothespinAugContents.kpi3 < '144')?'yellow-7':(clothespinAugContents.kpi3 >= '144' && clothespinAugContents.kpi3 < '172.8')?'green':(clothespinAugContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi3}}
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
                              :color="(clothespinSepContents.kpi1 == null)?'grey-2':(clothespinSepContents.kpi1 >= '0' && clothespinSepContents.kpi1 <= '86.4')?'red':(clothespinSepContents.kpi1 > '86.4' && clothespinSepContents.kpi1 <= '115.2')?'orange':(clothespinSepContents.kpi1 > '115.2' && clothespinSepContents.kpi1 < '144')?'yellow-7':(clothespinSepContents.kpi1 >= '144' && clothespinSepContents.kpi1 < '172.8')?'green':(clothespinSepContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi2 == null)?'grey-2':(clothespinSepContents.kpi2 >= '0' && clothespinSepContents.kpi2 <= '86.4')?'red':(clothespinSepContents.kpi2 > '86.4' && clothespinSepContents.kpi2 <= '115.2')?'orange':(clothespinSepContents.kpi2 > '115.2' && clothespinSepContents.kpi2 < '144')?'yellow-7':(clothespinSepContents.kpi2 >= '144' && clothespinSepContents.kpi2 < '172.8')?'green':(clothespinSepContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi3 == null)?'grey-2':(clothespinSepContents.kpi3 >= '0' && clothespinSepContents.kpi3 <= '86.4')?'red':(clothespinSepContents.kpi3 > '86.4' && clothespinSepContents.kpi3 <= '115.2')?'orange':(clothespinSepContents.kpi3 > '115.2' && clothespinSepContents.kpi3 < '144')?'yellow-7':(clothespinSepContents.kpi3 >= '144' && clothespinSepContents.kpi3 < '172.8')?'green':(clothespinSepContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi3}}
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
                              :color="(clothespinOctContents.kpi1 == null)?'grey-2':(clothespinOctContents.kpi1 >= '0' && clothespinOctContents.kpi1 <= '86.4')?'red':(clothespinOctContents.kpi1 > '86.4' && clothespinOctContents.kpi1 <= '115.2')?'orange':(clothespinOctContents.kpi1 > '115.2' && clothespinOctContents.kpi1 < '144')?'yellow-7':(clothespinOctContents.kpi1 >= '144' && clothespinOctContents.kpi1 < '172.8')?'green':(clothespinOctContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi2 == null)?'grey-2':(clothespinOctContents.kpi2 >= '0' && clothespinOctContents.kpi2 <= '86.4')?'red':(clothespinOctContents.kpi2 > '86.4' && clothespinOctContents.kpi2 <= '115.2')?'orange':(clothespinOctContents.kpi2 > '115.2' && clothespinOctContents.kpi2 < '144')?'yellow-7':(clothespinOctContents.kpi2 >= '144' && clothespinOctContents.kpi2 < '172.8')?'green':(clothespinOctContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi3 == null)?'grey-2':(clothespinOctContents.kpi3 >= '0' && clothespinOctContents.kpi3 <= '86.4')?'red':(clothespinOctContents.kpi3 > '86.4' && clothespinOctContents.kpi3 <= '115.2')?'orange':(clothespinOctContents.kpi3 > '115.2' && clothespinOctContents.kpi3 < '144')?'yellow-7':(clothespinOctContents.kpi3 >= '144' && clothespinOctContents.kpi3 < '172.8')?'green':(clothespinOctContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi3}}
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
                              :color="(clothespinNovContents.kpi1 == null)?'grey-2':(clothespinNovContents.kpi1 >= '0' && clothespinNovContents.kpi1 <= '86.4')?'red':(clothespinNovContents.kpi1 > '86.4' && clothespinNovContents.kpi1 <= '115.2')?'orange':(clothespinNovContents.kpi1 > '115.2' && clothespinNovContents.kpi1 < '144')?'yellow-7':(clothespinNovContents.kpi1 >= '144' && clothespinNovContents.kpi1 < '172.8')?'green':(clothespinNovContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi2 == null)?'grey-2':(clothespinNovContents.kpi2 >= '0' && clothespinNovContents.kpi2 <= '86.4')?'red':(clothespinNovContents.kpi2 > '86.4' && clothespinNovContents.kpi2 <= '115.2')?'orange':(clothespinNovContents.kpi2 > '115.2' && clothespinNovContents.kpi2 < '144')?'yellow-7':(clothespinNovContents.kpi2 >= '144' && clothespinNovContents.kpi2 < '172.8')?'green':(clothespinNovContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi3 == null)?'grey-2':(clothespinNovContents.kpi3 >= '0' && clothespinNovContents.kpi3 <= '86.4')?'red':(clothespinNovContents.kpi3 > '86.4' && clothespinNovContents.kpi3 <= '115.2')?'orange':(clothespinNovContents.kpi3 > '115.2' && clothespinNovContents.kpi3 < '144')?'yellow-7':(clothespinNovContents.kpi3 >= '144' && clothespinNovContents.kpi3 < '172.8')?'green':(clothespinNovContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi3}}
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
                              :color="(clothespinDecContents.kpi1 == null)?'grey-2':(clothespinDecContents.kpi1 >= '0' && clothespinDecContents.kpi1 <= '86.4')?'red':(clothespinDecContents.kpi1 > '86.4' && clothespinDecContents.kpi1 <= '115.2')?'orange':(clothespinDecContents.kpi1 > '115.2' && clothespinDecContents.kpi1 < '144')?'yellow-7':(clothespinDecContents.kpi1 >= '144' && clothespinDecContents.kpi1 < '172.8')?'green':(clothespinDecContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi2 == null)?'grey-2':(clothespinDecContents.kpi2 >= '0' && clothespinDecContents.kpi2 <= '86.4')?'red':(clothespinDecContents.kpi2 > '86.4' && clothespinDecContents.kpi2 <= '115.2')?'orange':(clothespinDecContents.kpi2 > '115.2' && clothespinDecContents.kpi2 < '144')?'yellow-7':(clothespinDecContents.kpi2 >= '144' && clothespinDecContents.kpi2 < '172.8')?'green':(clothespinDecContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi3 == null)?'grey-2':(clothespinDecContents.kpi3 >= '0' && clothespinDecContents.kpi3 <= '86.4')?'red':(clothespinDecContents.kpi3 > '86.4' && clothespinDecContents.kpi3 <= '115.2')?'orange':(clothespinDecContents.kpi3 > '115.2' && clothespinDecContents.kpi3 < '144')?'yellow-7':(clothespinDecContents.kpi3 >= '144' && clothespinDecContents.kpi3 < '172.8')?'green':(clothespinDecContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi3}}
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi1 == null)?'grey-2':(clothespinJanContents.kpi1 >= '0' && clothespinJanContents.kpi1 <= '86.4')?'red':(clothespinJanContents.kpi1 > '86.4' && clothespinJanContents.kpi1 <= '115.2')?'orange':(clothespinJanContents.kpi1 > '115.2' && clothespinJanContents.kpi1 < '144')?'yellow-7':(clothespinJanContents.kpi1 >= '144' && clothespinJanContents.kpi1 < '172.8')?'green':(clothespinJanContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi2 == null)?'grey-2':(clothespinJanContents.kpi2 >= '0' && clothespinJanContents.kpi2 <= '86.4')?'red':(clothespinJanContents.kpi2 > '86.4' && clothespinJanContents.kpi2 <= '115.2')?'orange':(clothespinJanContents.kpi2 > '115.2' && clothespinJanContents.kpi2 < '144')?'yellow-7':(clothespinJanContents.kpi2 >= '144' && clothespinJanContents.kpi2 < '172.8')?'green':(clothespinJanContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi3 == null)?'grey-2':(clothespinJanContents.kpi3 >= '0' && clothespinJanContents.kpi3 <= '86.4')?'red':(clothespinJanContents.kpi3 > '86.4' && clothespinJanContents.kpi3 <= '115.2')?'orange':(clothespinJanContents.kpi3 > '115.2' && clothespinJanContents.kpi3 < '144')?'yellow-7':(clothespinJanContents.kpi3 >= '144' && clothespinJanContents.kpi3 < '172.8')?'green':(clothespinJanContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi3}}
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
                              :color="(clothespinFebContents.kpi1 == null)?'grey-2':(clothespinFebContents.kpi1 >= '0' && clothespinFebContents.kpi1 <= '86.4')?'red':(clothespinFebContents.kpi1 > '86.4' && clothespinFebContents.kpi1 <= '115.2')?'orange':(clothespinFebContents.kpi1 > '115.2' && clothespinFebContents.kpi1 < '144')?'yellow-7':(clothespinFebContents.kpi1 >= '144' && clothespinFebContents.kpi1 < '172.8')?'green':(clothespinFebContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi2 == null)?'grey-2':(clothespinFebContents.kpi2 >= '0' && clothespinFebContents.kpi2 <= '86.4')?'red':(clothespinFebContents.kpi2 > '86.4' && clothespinFebContents.kpi2 <= '115.2')?'orange':(clothespinFebContents.kpi2 > '115.2' && clothespinFebContents.kpi2 < '144')?'yellow-7':(clothespinFebContents.kpi2 >= '144' && clothespinFebContents.kpi2 < '172.8')?'green':(clothespinFebContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi3 == null)?'grey-2':(clothespinFebContents.kpi3 >= '0' && clothespinFebContents.kpi3 <= '86.4')?'red':(clothespinFebContents.kpi3 > '86.4' && clothespinFebContents.kpi3 <= '115.2')?'orange':(clothespinFebContents.kpi3 > '115.2' && clothespinFebContents.kpi3 < '144')?'yellow-7':(clothespinFebContents.kpi3 >= '144' && clothespinFebContents.kpi3 < '172.8')?'green':(clothespinFebContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi3}}
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
                              :color="(clothespinMarContents.kpi1 == null)?'grey-2':(clothespinMarContents.kpi1 >= '0' && clothespinMarContents.kpi1 <= '86.4')?'red':(clothespinMarContents.kpi1 > '86.4' && clothespinMarContents.kpi1 <= '115.2')?'orange':(clothespinMarContents.kpi1 > '115.2' && clothespinMarContents.kpi1 < '144')?'yellow-7':(clothespinMarContents.kpi1 >= '144' && clothespinMarContents.kpi1 < '172.8')?'green':(clothespinMarContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi2 == null)?'grey-2':(clothespinMarContents.kpi2 >= '0' && clothespinMarContents.kpi2 <= '86.4')?'red':(clothespinMarContents.kpi2 > '86.4' && clothespinMarContents.kpi2 <= '115.2')?'orange':(clothespinMarContents.kpi2 > '115.2' && clothespinMarContents.kpi2 < '144')?'yellow-7':(clothespinMarContents.kpi2 >= '144' && clothespinMarContents.kpi2 < '172.8')?'green':(clothespinMarContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi3 == null)?'grey-2':(clothespinMarContents.kpi3 >= '0' && clothespinMarContents.kpi3 <= '86.4')?'red':(clothespinMarContents.kpi3 > '86.4' && clothespinMarContents.kpi3 <= '115.2')?'orange':(clothespinMarContents.kpi3 > '115.2' && clothespinMarContents.kpi3 < '144')?'yellow-7':(clothespinMarContents.kpi3 >= '144' && clothespinMarContents.kpi3 < '172.8')?'green':(clothespinMarContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi3}}
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
                              :color="(clothespinAprContents.kpi1 == null)?'grey-2':(clothespinAprContents.kpi1 >= '0' && clothespinAprContents.kpi1 <= '86.4')?'red':(clothespinAprContents.kpi1 > '86.4' && clothespinAprContents.kpi1 <= '115.2')?'orange':(clothespinAprContents.kpi1 > '115.2' && clothespinAprContents.kpi1 < '144')?'yellow-7':(clothespinAprContents.kpi1 >= '144' && clothespinAprContents.kpi1 < '172.8')?'green':(clothespinAprContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi2 == null)?'grey-2':(clothespinAprContents.kpi2 >= '0' && clothespinAprContents.kpi2 <= '86.4')?'red':(clothespinAprContents.kpi2 > '86.4' && clothespinAprContents.kpi2 <= '115.2')?'orange':(clothespinAprContents.kpi2 > '115.2' && clothespinAprContents.kpi2 < '144')?'yellow-7':(clothespinAprContents.kpi2 >= '144' && clothespinAprContents.kpi2 < '172.8')?'green':(clothespinAprContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi3 == null)?'grey-2':(clothespinAprContents.kpi3 >= '0' && clothespinAprContents.kpi3 <= '86.4')?'red':(clothespinAprContents.kpi3 > '86.4' && clothespinAprContents.kpi3 <= '115.2')?'orange':(clothespinAprContents.kpi3 > '115.2' && clothespinAprContents.kpi3 < '144')?'yellow-7':(clothespinAprContents.kpi3 >= '144' && clothespinAprContents.kpi3 < '172.8')?'green':(clothespinAprContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi3}}
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
                              :color="(clothespinMayContents.kpi1 == null)?'grey-2':(clothespinMayContents.kpi1 >= '0' && clothespinMayContents.kpi1 <= '86.4')?'red':(clothespinMayContents.kpi1 > '86.4' && clothespinMayContents.kpi1 <= '115.2')?'orange':(clothespinMayContents.kpi1 > '115.2' && clothespinMayContents.kpi1 < '144')?'yellow-7':(clothespinMayContents.kpi1 >= '144' && clothespinMayContents.kpi1 < '172.8')?'green':(clothespinMayContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi2 == null)?'grey-2':(clothespinMayContents.kpi2 >= '0' && clothespinMayContents.kpi2 <= '86.4')?'red':(clothespinMayContents.kpi2 > '86.4' && clothespinMayContents.kpi2 <= '115.2')?'orange':(clothespinMayContents.kpi2 > '115.2' && clothespinMayContents.kpi2 < '144')?'yellow-7':(clothespinMayContents.kpi2 >= '144' && clothespinMayContents.kpi2 < '172.8')?'green':(clothespinMayContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi3 == null)?'grey-2':(clothespinMayContents.kpi3 >= '0' && clothespinMayContents.kpi3 <= '86.4')?'red':(clothespinMayContents.kpi3 > '86.4' && clothespinMayContents.kpi3 <= '115.2')?'orange':(clothespinMayContents.kpi3 > '115.2' && clothespinMayContents.kpi3 < '144')?'yellow-7':(clothespinMayContents.kpi3 >= '144' && clothespinMayContents.kpi3 < '172.8')?'green':(clothespinMayContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi3}}
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
                              :color="(clothespinJunContents.kpi1 == null)?'grey-2':(clothespinJunContents.kpi1 >= '0' && clothespinJunContents.kpi1 <= '86.4')?'red':(clothespinJunContents.kpi1 > '86.4' && clothespinJunContents.kpi1 <= '115.2')?'orange':(clothespinJunContents.kpi1 > '115.2' && clothespinJunContents.kpi1 < '144')?'yellow-7':(clothespinJunContents.kpi1 >= '144' && clothespinJunContents.kpi1 < '172.8')?'green':(clothespinJunContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi2 == null)?'grey-2':(clothespinJunContents.kpi2 >= '0' && clothespinJunContents.kpi2 <= '86.4')?'red':(clothespinJunContents.kpi2 > '86.4' && clothespinJunContents.kpi2 <= '115.2')?'orange':(clothespinJunContents.kpi2 > '115.2' && clothespinJunContents.kpi2 < '144')?'yellow-7':(clothespinJunContents.kpi2 >= '144' && clothespinJunContents.kpi2 < '172.8')?'green':(clothespinJunContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi3 == null)?'grey-2':(clothespinJunContents.kpi3 >= '0' && clothespinJunContents.kpi3 <= '86.4')?'red':(clothespinJunContents.kpi3 > '86.4' && clothespinJunContents.kpi3 <= '115.2')?'orange':(clothespinJunContents.kpi3 > '115.2' && clothespinJunContents.kpi3 < '144')?'yellow-7':(clothespinJunContents.kpi3 >= '144' && clothespinJunContents.kpi3 < '172.8')?'green':(clothespinJunContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi3}}
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
                              :color="(clothespinJulContents.kpi1 == null)?'grey-2':(clothespinJulContents.kpi1 >= '0' && clothespinJulContents.kpi1 <= '86.4')?'red':(clothespinJulContents.kpi1 > '86.4' && clothespinJulContents.kpi1 <= '115.2')?'orange':(clothespinJulContents.kpi1 > '115.2' && clothespinJulContents.kpi1 < '144')?'yellow-7':(clothespinJulContents.kpi1 >= '144' && clothespinJulContents.kpi1 < '172.8')?'green':(clothespinJulContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi2 == null)?'grey-2':(clothespinJulContents.kpi2 >= '0' && clothespinJulContents.kpi2 <= '86.4')?'red':(clothespinJulContents.kpi2 > '86.4' && clothespinJulContents.kpi2 <= '115.2')?'orange':(clothespinJulContents.kpi2 > '115.2' && clothespinJulContents.kpi2 < '144')?'yellow-7':(clothespinJulContents.kpi2 >= '144' && clothespinJulContents.kpi2 < '172.8')?'green':(clothespinJulContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi3 == null)?'grey-2':(clothespinJulContents.kpi3 >= '0' && clothespinJulContents.kpi3 <= '86.4')?'red':(clothespinJulContents.kpi3 > '86.4' && clothespinJulContents.kpi3 <= '115.2')?'orange':(clothespinJulContents.kpi3 > '115.2' && clothespinJulContents.kpi3 < '144')?'yellow-7':(clothespinJulContents.kpi3 >= '144' && clothespinJulContents.kpi3 < '172.8')?'green':(clothespinJulContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi3}}
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
                              :color="(clothespinAugContents.kpi1 == null)?'grey-2':(clothespinAugContents.kpi1 >= '0' && clothespinAugContents.kpi1 <= '86.4')?'red':(clothespinAugContents.kpi1 > '86.4' && clothespinAugContents.kpi1 <= '115.2')?'orange':(clothespinAugContents.kpi1 > '115.2' && clothespinAugContents.kpi1 < '144')?'yellow-7':(clothespinAugContents.kpi1 >= '144' && clothespinAugContents.kpi1 < '172.8')?'green':(clothespinAugContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi2 == null)?'grey-2':(clothespinAugContents.kpi2 >= '0' && clothespinAugContents.kpi2 <= '86.4')?'red':(clothespinAugContents.kpi2 > '86.4' && clothespinAugContents.kpi2 <= '115.2')?'orange':(clothespinAugContents.kpi2 > '115.2' && clothespinAugContents.kpi2 < '144')?'yellow-7':(clothespinAugContents.kpi2 >= '144' && clothespinAugContents.kpi2 < '172.8')?'green':(clothespinAugContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi3 == null)?'grey-2':(clothespinAugContents.kpi3 >= '0' && clothespinAugContents.kpi3 <= '86.4')?'red':(clothespinAugContents.kpi3 > '86.4' && clothespinAugContents.kpi3 <= '115.2')?'orange':(clothespinAugContents.kpi3 > '115.2' && clothespinAugContents.kpi3 < '144')?'yellow-7':(clothespinAugContents.kpi3 >= '144' && clothespinAugContents.kpi3 < '172.8')?'green':(clothespinAugContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi3}}
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
                              :color="(clothespinSepContents.kpi1 == null)?'grey-2':(clothespinSepContents.kpi1 >= '0' && clothespinSepContents.kpi1 <= '86.4')?'red':(clothespinSepContents.kpi1 > '86.4' && clothespinSepContents.kpi1 <= '115.2')?'orange':(clothespinSepContents.kpi1 > '115.2' && clothespinSepContents.kpi1 < '144')?'yellow-7':(clothespinSepContents.kpi1 >= '144' && clothespinSepContents.kpi1 < '172.8')?'green':(clothespinSepContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi2 == null)?'grey-2':(clothespinSepContents.kpi2 >= '0' && clothespinSepContents.kpi2 <= '86.4')?'red':(clothespinSepContents.kpi2 > '86.4' && clothespinSepContents.kpi2 <= '115.2')?'orange':(clothespinSepContents.kpi2 > '115.2' && clothespinSepContents.kpi2 < '144')?'yellow-7':(clothespinSepContents.kpi2 >= '144' && clothespinSepContents.kpi2 < '172.8')?'green':(clothespinSepContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi3 == null)?'grey-2':(clothespinSepContents.kpi3 >= '0' && clothespinSepContents.kpi3 <= '86.4')?'red':(clothespinSepContents.kpi3 > '86.4' && clothespinSepContents.kpi3 <= '115.2')?'orange':(clothespinSepContents.kpi3 > '115.2' && clothespinSepContents.kpi3 < '144')?'yellow-7':(clothespinSepContents.kpi3 >= '144' && clothespinSepContents.kpi3 < '172.8')?'green':(clothespinSepContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi3}}
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
                              :color="(clothespinOctContents.kpi1 == null)?'grey-2':(clothespinOctContents.kpi1 >= '0' && clothespinOctContents.kpi1 <= '86.4')?'red':(clothespinOctContents.kpi1 > '86.4' && clothespinOctContents.kpi1 <= '115.2')?'orange':(clothespinOctContents.kpi1 > '115.2' && clothespinOctContents.kpi1 < '144')?'yellow-7':(clothespinOctContents.kpi1 >= '144' && clothespinOctContents.kpi1 < '172.8')?'green':(clothespinOctContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi2 == null)?'grey-2':(clothespinOctContents.kpi2 >= '0' && clothespinOctContents.kpi2 <= '86.4')?'red':(clothespinOctContents.kpi2 > '86.4' && clothespinOctContents.kpi2 <= '115.2')?'orange':(clothespinOctContents.kpi2 > '115.2' && clothespinOctContents.kpi2 < '144')?'yellow-7':(clothespinOctContents.kpi2 >= '144' && clothespinOctContents.kpi2 < '172.8')?'green':(clothespinOctContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi3 == null)?'grey-2':(clothespinOctContents.kpi3 >= '0' && clothespinOctContents.kpi3 <= '86.4')?'red':(clothespinOctContents.kpi3 > '86.4' && clothespinOctContents.kpi3 <= '115.2')?'orange':(clothespinOctContents.kpi3 > '115.2' && clothespinOctContents.kpi3 < '144')?'yellow-7':(clothespinOctContents.kpi3 >= '144' && clothespinOctContents.kpi3 < '172.8')?'green':(clothespinOctContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi3}}
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
                              :color="(clothespinNovContents.kpi1 == null)?'grey-2':(clothespinNovContents.kpi1 >= '0' && clothespinNovContents.kpi1 <= '86.4')?'red':(clothespinNovContents.kpi1 > '86.4' && clothespinNovContents.kpi1 <= '115.2')?'orange':(clothespinNovContents.kpi1 > '115.2' && clothespinNovContents.kpi1 < '144')?'yellow-7':(clothespinNovContents.kpi1 >= '144' && clothespinNovContents.kpi1 < '172.8')?'green':(clothespinNovContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi2 == null)?'grey-2':(clothespinNovContents.kpi2 >= '0' && clothespinNovContents.kpi2 <= '86.4')?'red':(clothespinNovContents.kpi2 > '86.4' && clothespinNovContents.kpi2 <= '115.2')?'orange':(clothespinNovContents.kpi2 > '115.2' && clothespinNovContents.kpi2 < '144')?'yellow-7':(clothespinNovContents.kpi2 >= '144' && clothespinNovContents.kpi2 < '172.8')?'green':(clothespinNovContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi3 == null)?'grey-2':(clothespinNovContents.kpi3 >= '0' && clothespinNovContents.kpi3 <= '86.4')?'red':(clothespinNovContents.kpi3 > '86.4' && clothespinNovContents.kpi3 <= '115.2')?'orange':(clothespinNovContents.kpi3 > '115.2' && clothespinNovContents.kpi3 < '144')?'yellow-7':(clothespinNovContents.kpi3 >= '144' && clothespinNovContents.kpi3 < '172.8')?'green':(clothespinNovContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi3}}
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
                              :color="(clothespinDecContents.kpi1 == null)?'grey-2':(clothespinDecContents.kpi1 >= '0' && clothespinDecContents.kpi1 <= '86.4')?'red':(clothespinDecContents.kpi1 > '86.4' && clothespinDecContents.kpi1 <= '115.2')?'orange':(clothespinDecContents.kpi1 > '115.2' && clothespinDecContents.kpi1 < '144')?'yellow-7':(clothespinDecContents.kpi1 >= '144' && clothespinDecContents.kpi1 < '172.8')?'green':(clothespinDecContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi2 == null)?'grey-2':(clothespinDecContents.kpi2 >= '0' && clothespinDecContents.kpi2 <= '86.4')?'red':(clothespinDecContents.kpi2 > '86.4' && clothespinDecContents.kpi2 <= '115.2')?'orange':(clothespinDecContents.kpi2 > '115.2' && clothespinDecContents.kpi2 < '144')?'yellow-7':(clothespinDecContents.kpi2 >= '144' && clothespinDecContents.kpi2 < '172.8')?'green':(clothespinDecContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi3 == null)?'grey-2':(clothespinDecContents.kpi3 >= '0' && clothespinDecContents.kpi3 <= '86.4')?'red':(clothespinDecContents.kpi3 > '86.4' && clothespinDecContents.kpi3 <= '115.2')?'orange':(clothespinDecContents.kpi3 > '115.2' && clothespinDecContents.kpi3 < '144')?'yellow-7':(clothespinDecContents.kpi3 >= '144' && clothespinDecContents.kpi3 < '172.8')?'green':(clothespinDecContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi3}}
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi1 == null)?'grey-2':(clothespinJanContents.kpi1 >= '0' && clothespinJanContents.kpi1 <= '86.4')?'red':(clothespinJanContents.kpi1 > '86.4' && clothespinJanContents.kpi1 <= '115.2')?'orange':(clothespinJanContents.kpi1 > '115.2' && clothespinJanContents.kpi1 < '144')?'yellow-7':(clothespinJanContents.kpi1 >= '144' && clothespinJanContents.kpi1 < '172.8')?'green':(clothespinJanContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi2 == null)?'grey-2':(clothespinJanContents.kpi2 >= '0' && clothespinJanContents.kpi2 <= '86.4')?'red':(clothespinJanContents.kpi2 > '86.4' && clothespinJanContents.kpi2 <= '115.2')?'orange':(clothespinJanContents.kpi2 > '115.2' && clothespinJanContents.kpi2 < '144')?'yellow-7':(clothespinJanContents.kpi2 >= '144' && clothespinJanContents.kpi2 < '172.8')?'green':(clothespinJanContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi3 == null)?'grey-2':(clothespinJanContents.kpi3 >= '0' && clothespinJanContents.kpi3 <= '86.4')?'red':(clothespinJanContents.kpi3 > '86.4' && clothespinJanContents.kpi3 <= '115.2')?'orange':(clothespinJanContents.kpi3 > '115.2' && clothespinJanContents.kpi3 < '144')?'yellow-7':(clothespinJanContents.kpi3 >= '144' && clothespinJanContents.kpi3 < '172.8')?'green':(clothespinJanContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi3}}
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
                              :color="(clothespinFebContents.kpi1 == null)?'grey-2':(clothespinFebContents.kpi1 >= '0' && clothespinFebContents.kpi1 <= '86.4')?'red':(clothespinFebContents.kpi1 > '86.4' && clothespinFebContents.kpi1 <= '115.2')?'orange':(clothespinFebContents.kpi1 > '115.2' && clothespinFebContents.kpi1 < '144')?'yellow-7':(clothespinFebContents.kpi1 >= '144' && clothespinFebContents.kpi1 < '172.8')?'green':(clothespinFebContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi2 == null)?'grey-2':(clothespinFebContents.kpi2 >= '0' && clothespinFebContents.kpi2 <= '86.4')?'red':(clothespinFebContents.kpi2 > '86.4' && clothespinFebContents.kpi2 <= '115.2')?'orange':(clothespinFebContents.kpi2 > '115.2' && clothespinFebContents.kpi2 < '144')?'yellow-7':(clothespinFebContents.kpi2 >= '144' && clothespinFebContents.kpi2 < '172.8')?'green':(clothespinFebContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi3 == null)?'grey-2':(clothespinFebContents.kpi3 >= '0' && clothespinFebContents.kpi3 <= '86.4')?'red':(clothespinFebContents.kpi3 > '86.4' && clothespinFebContents.kpi3 <= '115.2')?'orange':(clothespinFebContents.kpi3 > '115.2' && clothespinFebContents.kpi3 < '144')?'yellow-7':(clothespinFebContents.kpi3 >= '144' && clothespinFebContents.kpi3 < '172.8')?'green':(clothespinFebContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi3}}
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
                              :color="(clothespinMarContents.kpi1 == null)?'grey-2':(clothespinMarContents.kpi1 >= '0' && clothespinMarContents.kpi1 <= '86.4')?'red':(clothespinMarContents.kpi1 > '86.4' && clothespinMarContents.kpi1 <= '115.2')?'orange':(clothespinMarContents.kpi1 > '115.2' && clothespinMarContents.kpi1 < '144')?'yellow-7':(clothespinMarContents.kpi1 >= '144' && clothespinMarContents.kpi1 < '172.8')?'green':(clothespinMarContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi2 == null)?'grey-2':(clothespinMarContents.kpi2 >= '0' && clothespinMarContents.kpi2 <= '86.4')?'red':(clothespinMarContents.kpi2 > '86.4' && clothespinMarContents.kpi2 <= '115.2')?'orange':(clothespinMarContents.kpi2 > '115.2' && clothespinMarContents.kpi2 < '144')?'yellow-7':(clothespinMarContents.kpi2 >= '144' && clothespinMarContents.kpi2 < '172.8')?'green':(clothespinMarContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi3 == null)?'grey-2':(clothespinMarContents.kpi3 >= '0' && clothespinMarContents.kpi3 <= '86.4')?'red':(clothespinMarContents.kpi3 > '86.4' && clothespinMarContents.kpi3 <= '115.2')?'orange':(clothespinMarContents.kpi3 > '115.2' && clothespinMarContents.kpi3 < '144')?'yellow-7':(clothespinMarContents.kpi3 >= '144' && clothespinMarContents.kpi3 < '172.8')?'green':(clothespinMarContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi3}}
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
                              :color="(clothespinAprContents.kpi1 == null)?'grey-2':(clothespinAprContents.kpi1 >= '0' && clothespinAprContents.kpi1 <= '86.4')?'red':(clothespinAprContents.kpi1 > '86.4' && clothespinAprContents.kpi1 <= '115.2')?'orange':(clothespinAprContents.kpi1 > '115.2' && clothespinAprContents.kpi1 < '144')?'yellow-7':(clothespinAprContents.kpi1 >= '144' && clothespinAprContents.kpi1 < '172.8')?'green':(clothespinAprContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi2 == null)?'grey-2':(clothespinAprContents.kpi2 >= '0' && clothespinAprContents.kpi2 <= '86.4')?'red':(clothespinAprContents.kpi2 > '86.4' && clothespinAprContents.kpi2 <= '115.2')?'orange':(clothespinAprContents.kpi2 > '115.2' && clothespinAprContents.kpi2 < '144')?'yellow-7':(clothespinAprContents.kpi2 >= '144' && clothespinAprContents.kpi2 < '172.8')?'green':(clothespinAprContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi3 == null)?'grey-2':(clothespinAprContents.kpi3 >= '0' && clothespinAprContents.kpi3 <= '86.4')?'red':(clothespinAprContents.kpi3 > '86.4' && clothespinAprContents.kpi3 <= '115.2')?'orange':(clothespinAprContents.kpi3 > '115.2' && clothespinAprContents.kpi3 < '144')?'yellow-7':(clothespinAprContents.kpi3 >= '144' && clothespinAprContents.kpi3 < '172.8')?'green':(clothespinAprContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi3}}
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
                              :color="(clothespinMayContents.kpi1 == null)?'grey-2':(clothespinMayContents.kpi1 >= '0' && clothespinMayContents.kpi1 <= '86.4')?'red':(clothespinMayContents.kpi1 > '86.4' && clothespinMayContents.kpi1 <= '115.2')?'orange':(clothespinMayContents.kpi1 > '115.2' && clothespinMayContents.kpi1 < '144')?'yellow-7':(clothespinMayContents.kpi1 >= '144' && clothespinMayContents.kpi1 < '172.8')?'green':(clothespinMayContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi2 == null)?'grey-2':(clothespinMayContents.kpi2 >= '0' && clothespinMayContents.kpi2 <= '86.4')?'red':(clothespinMayContents.kpi2 > '86.4' && clothespinMayContents.kpi2 <= '115.2')?'orange':(clothespinMayContents.kpi2 > '115.2' && clothespinMayContents.kpi2 < '144')?'yellow-7':(clothespinMayContents.kpi2 >= '144' && clothespinMayContents.kpi2 < '172.8')?'green':(clothespinMayContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi3 == null)?'grey-2':(clothespinMayContents.kpi3 >= '0' && clothespinMayContents.kpi3 <= '86.4')?'red':(clothespinMayContents.kpi3 > '86.4' && clothespinMayContents.kpi3 <= '115.2')?'orange':(clothespinMayContents.kpi3 > '115.2' && clothespinMayContents.kpi3 < '144')?'yellow-7':(clothespinMayContents.kpi3 >= '144' && clothespinMayContents.kpi3 < '172.8')?'green':(clothespinMayContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi3}}
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
                              :color="(clothespinJunContents.kpi1 == null)?'grey-2':(clothespinJunContents.kpi1 >= '0' && clothespinJunContents.kpi1 <= '86.4')?'red':(clothespinJunContents.kpi1 > '86.4' && clothespinJunContents.kpi1 <= '115.2')?'orange':(clothespinJunContents.kpi1 > '115.2' && clothespinJunContents.kpi1 < '144')?'yellow-7':(clothespinJunContents.kpi1 >= '144' && clothespinJunContents.kpi1 < '172.8')?'green':(clothespinJunContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi2 == null)?'grey-2':(clothespinJunContents.kpi2 >= '0' && clothespinJunContents.kpi2 <= '86.4')?'red':(clothespinJunContents.kpi2 > '86.4' && clothespinJunContents.kpi2 <= '115.2')?'orange':(clothespinJunContents.kpi2 > '115.2' && clothespinJunContents.kpi2 < '144')?'yellow-7':(clothespinJunContents.kpi2 >= '144' && clothespinJunContents.kpi2 < '172.8')?'green':(clothespinJunContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi3 == null)?'grey-2':(clothespinJunContents.kpi3 >= '0' && clothespinJunContents.kpi3 <= '86.4')?'red':(clothespinJunContents.kpi3 > '86.4' && clothespinJunContents.kpi3 <= '115.2')?'orange':(clothespinJunContents.kpi3 > '115.2' && clothespinJunContents.kpi3 < '144')?'yellow-7':(clothespinJunContents.kpi3 >= '144' && clothespinJunContents.kpi3 < '172.8')?'green':(clothespinJunContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi3}}
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
                              :color="(clothespinJulContents.kpi1 == null)?'grey-2':(clothespinJulContents.kpi1 >= '0' && clothespinJulContents.kpi1 <= '86.4')?'red':(clothespinJulContents.kpi1 > '86.4' && clothespinJulContents.kpi1 <= '115.2')?'orange':(clothespinJulContents.kpi1 > '115.2' && clothespinJulContents.kpi1 < '144')?'yellow-7':(clothespinJulContents.kpi1 >= '144' && clothespinJulContents.kpi1 < '172.8')?'green':(clothespinJulContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi2 == null)?'grey-2':(clothespinJulContents.kpi2 >= '0' && clothespinJulContents.kpi2 <= '86.4')?'red':(clothespinJulContents.kpi2 > '86.4' && clothespinJulContents.kpi2 <= '115.2')?'orange':(clothespinJulContents.kpi2 > '115.2' && clothespinJulContents.kpi2 < '144')?'yellow-7':(clothespinJulContents.kpi2 >= '144' && clothespinJulContents.kpi2 < '172.8')?'green':(clothespinJulContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi3 == null)?'grey-2':(clothespinJulContents.kpi3 >= '0' && clothespinJulContents.kpi3 <= '86.4')?'red':(clothespinJulContents.kpi3 > '86.4' && clothespinJulContents.kpi3 <= '115.2')?'orange':(clothespinJulContents.kpi3 > '115.2' && clothespinJulContents.kpi3 < '144')?'yellow-7':(clothespinJulContents.kpi3 >= '144' && clothespinJulContents.kpi3 < '172.8')?'green':(clothespinJulContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi3}}
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
                              :color="(clothespinAugContents.kpi1 == null)?'grey-2':(clothespinAugContents.kpi1 >= '0' && clothespinAugContents.kpi1 <= '86.4')?'red':(clothespinAugContents.kpi1 > '86.4' && clothespinAugContents.kpi1 <= '115.2')?'orange':(clothespinAugContents.kpi1 > '115.2' && clothespinAugContents.kpi1 < '144')?'yellow-7':(clothespinAugContents.kpi1 >= '144' && clothespinAugContents.kpi1 < '172.8')?'green':(clothespinAugContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi2 == null)?'grey-2':(clothespinAugContents.kpi2 >= '0' && clothespinAugContents.kpi2 <= '86.4')?'red':(clothespinAugContents.kpi2 > '86.4' && clothespinAugContents.kpi2 <= '115.2')?'orange':(clothespinAugContents.kpi2 > '115.2' && clothespinAugContents.kpi2 < '144')?'yellow-7':(clothespinAugContents.kpi2 >= '144' && clothespinAugContents.kpi2 < '172.8')?'green':(clothespinAugContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi3 == null)?'grey-2':(clothespinAugContents.kpi3 >= '0' && clothespinAugContents.kpi3 <= '86.4')?'red':(clothespinAugContents.kpi3 > '86.4' && clothespinAugContents.kpi3 <= '115.2')?'orange':(clothespinAugContents.kpi3 > '115.2' && clothespinAugContents.kpi3 < '144')?'yellow-7':(clothespinAugContents.kpi3 >= '144' && clothespinAugContents.kpi3 < '172.8')?'green':(clothespinAugContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi3}}
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
                              :color="(clothespinSepContents.kpi1 == null)?'grey-2':(clothespinSepContents.kpi1 >= '0' && clothespinSepContents.kpi1 <= '86.4')?'red':(clothespinSepContents.kpi1 > '86.4' && clothespinSepContents.kpi1 <= '115.2')?'orange':(clothespinSepContents.kpi1 > '115.2' && clothespinSepContents.kpi1 < '144')?'yellow-7':(clothespinSepContents.kpi1 >= '144' && clothespinSepContents.kpi1 < '172.8')?'green':(clothespinSepContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi2 == null)?'grey-2':(clothespinSepContents.kpi2 >= '0' && clothespinSepContents.kpi2 <= '86.4')?'red':(clothespinSepContents.kpi2 > '86.4' && clothespinSepContents.kpi2 <= '115.2')?'orange':(clothespinSepContents.kpi2 > '115.2' && clothespinSepContents.kpi2 < '144')?'yellow-7':(clothespinSepContents.kpi2 >= '144' && clothespinSepContents.kpi2 < '172.8')?'green':(clothespinSepContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi3 == null)?'grey-2':(clothespinSepContents.kpi3 >= '0' && clothespinSepContents.kpi3 <= '86.4')?'red':(clothespinSepContents.kpi3 > '86.4' && clothespinSepContents.kpi3 <= '115.2')?'orange':(clothespinSepContents.kpi3 > '115.2' && clothespinSepContents.kpi3 < '144')?'yellow-7':(clothespinSepContents.kpi3 >= '144' && clothespinSepContents.kpi3 < '172.8')?'green':(clothespinSepContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi3}}
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
                              :color="(clothespinOctContents.kpi1 == null)?'grey-2':(clothespinOctContents.kpi1 >= '0' && clothespinOctContents.kpi1 <= '86.4')?'red':(clothespinOctContents.kpi1 > '86.4' && clothespinOctContents.kpi1 <= '115.2')?'orange':(clothespinOctContents.kpi1 > '115.2' && clothespinOctContents.kpi1 < '144')?'yellow-7':(clothespinOctContents.kpi1 >= '144' && clothespinOctContents.kpi1 < '172.8')?'green':(clothespinOctContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi2 == null)?'grey-2':(clothespinOctContents.kpi2 >= '0' && clothespinOctContents.kpi2 <= '86.4')?'red':(clothespinOctContents.kpi2 > '86.4' && clothespinOctContents.kpi2 <= '115.2')?'orange':(clothespinOctContents.kpi2 > '115.2' && clothespinOctContents.kpi2 < '144')?'yellow-7':(clothespinOctContents.kpi2 >= '144' && clothespinOctContents.kpi2 < '172.8')?'green':(clothespinOctContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi3 == null)?'grey-2':(clothespinOctContents.kpi3 >= '0' && clothespinOctContents.kpi3 <= '86.4')?'red':(clothespinOctContents.kpi3 > '86.4' && clothespinOctContents.kpi3 <= '115.2')?'orange':(clothespinOctContents.kpi3 > '115.2' && clothespinOctContents.kpi3 < '144')?'yellow-7':(clothespinOctContents.kpi3 >= '144' && clothespinOctContents.kpi3 < '172.8')?'green':(clothespinOctContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi3}}
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
                              :color="(clothespinNovContents.kpi1 == null)?'grey-2':(clothespinNovContents.kpi1 >= '0' && clothespinNovContents.kpi1 <= '86.4')?'red':(clothespinNovContents.kpi1 > '86.4' && clothespinNovContents.kpi1 <= '115.2')?'orange':(clothespinNovContents.kpi1 > '115.2' && clothespinNovContents.kpi1 < '144')?'yellow-7':(clothespinNovContents.kpi1 >= '144' && clothespinNovContents.kpi1 < '172.8')?'green':(clothespinNovContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi2 == null)?'grey-2':(clothespinNovContents.kpi2 >= '0' && clothespinNovContents.kpi2 <= '86.4')?'red':(clothespinNovContents.kpi2 > '86.4' && clothespinNovContents.kpi2 <= '115.2')?'orange':(clothespinNovContents.kpi2 > '115.2' && clothespinNovContents.kpi2 < '144')?'yellow-7':(clothespinNovContents.kpi2 >= '144' && clothespinNovContents.kpi2 < '172.8')?'green':(clothespinNovContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi3 == null)?'grey-2':(clothespinNovContents.kpi3 >= '0' && clothespinNovContents.kpi3 <= '86.4')?'red':(clothespinNovContents.kpi3 > '86.4' && clothespinNovContents.kpi3 <= '115.2')?'orange':(clothespinNovContents.kpi3 > '115.2' && clothespinNovContents.kpi3 < '144')?'yellow-7':(clothespinNovContents.kpi3 >= '144' && clothespinNovContents.kpi3 < '172.8')?'green':(clothespinNovContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi3}}
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
                              :color="(clothespinDecContents.kpi1 == null)?'grey-2':(clothespinDecContents.kpi1 >= '0' && clothespinDecContents.kpi1 <= '86.4')?'red':(clothespinDecContents.kpi1 > '86.4' && clothespinDecContents.kpi1 <= '115.2')?'orange':(clothespinDecContents.kpi1 > '115.2' && clothespinDecContents.kpi1 < '144')?'yellow-7':(clothespinDecContents.kpi1 >= '144' && clothespinDecContents.kpi1 < '172.8')?'green':(clothespinDecContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi2 == null)?'grey-2':(clothespinDecContents.kpi2 >= '0' && clothespinDecContents.kpi2 <= '86.4')?'red':(clothespinDecContents.kpi2 > '86.4' && clothespinDecContents.kpi2 <= '115.2')?'orange':(clothespinDecContents.kpi2 > '115.2' && clothespinDecContents.kpi2 < '144')?'yellow-7':(clothespinDecContents.kpi2 >= '144' && clothespinDecContents.kpi2 < '172.8')?'green':(clothespinDecContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi3 == null)?'grey-2':(clothespinDecContents.kpi3 >= '0' && clothespinDecContents.kpi3 <= '86.4')?'red':(clothespinDecContents.kpi3 > '86.4' && clothespinDecContents.kpi3 <= '115.2')?'orange':(clothespinDecContents.kpi3 > '115.2' && clothespinDecContents.kpi3 < '144')?'yellow-7':(clothespinDecContents.kpi3 >= '144' && clothespinDecContents.kpi3 < '172.8')?'green':(clothespinDecContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi3}}
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi1 == null)?'grey-2':(clothespinJanContents.kpi1 >= '0' && clothespinJanContents.kpi1 <= '86.4')?'red':(clothespinJanContents.kpi1 > '86.4' && clothespinJanContents.kpi1 <= '115.2')?'orange':(clothespinJanContents.kpi1 > '115.2' && clothespinJanContents.kpi1 < '144')?'yellow-7':(clothespinJanContents.kpi1 >= '144' && clothespinJanContents.kpi1 < '172.8')?'green':(clothespinJanContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi2 == null)?'grey-2':(clothespinJanContents.kpi2 >= '0' && clothespinJanContents.kpi2 <= '86.4')?'red':(clothespinJanContents.kpi2 > '86.4' && clothespinJanContents.kpi2 <= '115.2')?'orange':(clothespinJanContents.kpi2 > '115.2' && clothespinJanContents.kpi2 < '144')?'yellow-7':(clothespinJanContents.kpi2 >= '144' && clothespinJanContents.kpi2 < '172.8')?'green':(clothespinJanContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi3 == null)?'grey-2':(clothespinJanContents.kpi3 >= '0' && clothespinJanContents.kpi3 <= '86.4')?'red':(clothespinJanContents.kpi3 > '86.4' && clothespinJanContents.kpi3 <= '115.2')?'orange':(clothespinJanContents.kpi3 > '115.2' && clothespinJanContents.kpi3 < '144')?'yellow-7':(clothespinJanContents.kpi3 >= '144' && clothespinJanContents.kpi3 < '172.8')?'green':(clothespinJanContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi3}}
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
                              :color="(clothespinFebContents.kpi1 == null)?'grey-2':(clothespinFebContents.kpi1 >= '0' && clothespinFebContents.kpi1 <= '86.4')?'red':(clothespinFebContents.kpi1 > '86.4' && clothespinFebContents.kpi1 <= '115.2')?'orange':(clothespinFebContents.kpi1 > '115.2' && clothespinFebContents.kpi1 < '144')?'yellow-7':(clothespinFebContents.kpi1 >= '144' && clothespinFebContents.kpi1 < '172.8')?'green':(clothespinFebContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi2 == null)?'grey-2':(clothespinFebContents.kpi2 >= '0' && clothespinFebContents.kpi2 <= '86.4')?'red':(clothespinFebContents.kpi2 > '86.4' && clothespinFebContents.kpi2 <= '115.2')?'orange':(clothespinFebContents.kpi2 > '115.2' && clothespinFebContents.kpi2 < '144')?'yellow-7':(clothespinFebContents.kpi2 >= '144' && clothespinFebContents.kpi2 < '172.8')?'green':(clothespinFebContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi3 == null)?'grey-2':(clothespinFebContents.kpi3 >= '0' && clothespinFebContents.kpi3 <= '86.4')?'red':(clothespinFebContents.kpi3 > '86.4' && clothespinFebContents.kpi3 <= '115.2')?'orange':(clothespinFebContents.kpi3 > '115.2' && clothespinFebContents.kpi3 < '144')?'yellow-7':(clothespinFebContents.kpi3 >= '144' && clothespinFebContents.kpi3 < '172.8')?'green':(clothespinFebContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi3}}
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
                              :color="(clothespinMarContents.kpi1 == null)?'grey-2':(clothespinMarContents.kpi1 >= '0' && clothespinMarContents.kpi1 <= '86.4')?'red':(clothespinMarContents.kpi1 > '86.4' && clothespinMarContents.kpi1 <= '115.2')?'orange':(clothespinMarContents.kpi1 > '115.2' && clothespinMarContents.kpi1 < '144')?'yellow-7':(clothespinMarContents.kpi1 >= '144' && clothespinMarContents.kpi1 < '172.8')?'green':(clothespinMarContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi2 == null)?'grey-2':(clothespinMarContents.kpi2 >= '0' && clothespinMarContents.kpi2 <= '86.4')?'red':(clothespinMarContents.kpi2 > '86.4' && clothespinMarContents.kpi2 <= '115.2')?'orange':(clothespinMarContents.kpi2 > '115.2' && clothespinMarContents.kpi2 < '144')?'yellow-7':(clothespinMarContents.kpi2 >= '144' && clothespinMarContents.kpi2 < '172.8')?'green':(clothespinMarContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi3 == null)?'grey-2':(clothespinMarContents.kpi3 >= '0' && clothespinMarContents.kpi3 <= '86.4')?'red':(clothespinMarContents.kpi3 > '86.4' && clothespinMarContents.kpi3 <= '115.2')?'orange':(clothespinMarContents.kpi3 > '115.2' && clothespinMarContents.kpi3 < '144')?'yellow-7':(clothespinMarContents.kpi3 >= '144' && clothespinMarContents.kpi3 < '172.8')?'green':(clothespinMarContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi3}}
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
                              :color="(clothespinAprContents.kpi1 == null)?'grey-2':(clothespinAprContents.kpi1 >= '0' && clothespinAprContents.kpi1 <= '86.4')?'red':(clothespinAprContents.kpi1 > '86.4' && clothespinAprContents.kpi1 <= '115.2')?'orange':(clothespinAprContents.kpi1 > '115.2' && clothespinAprContents.kpi1 < '144')?'yellow-7':(clothespinAprContents.kpi1 >= '144' && clothespinAprContents.kpi1 < '172.8')?'green':(clothespinAprContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi2 == null)?'grey-2':(clothespinAprContents.kpi2 >= '0' && clothespinAprContents.kpi2 <= '86.4')?'red':(clothespinAprContents.kpi2 > '86.4' && clothespinAprContents.kpi2 <= '115.2')?'orange':(clothespinAprContents.kpi2 > '115.2' && clothespinAprContents.kpi2 < '144')?'yellow-7':(clothespinAprContents.kpi2 >= '144' && clothespinAprContents.kpi2 < '172.8')?'green':(clothespinAprContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi3 == null)?'grey-2':(clothespinAprContents.kpi3 >= '0' && clothespinAprContents.kpi3 <= '86.4')?'red':(clothespinAprContents.kpi3 > '86.4' && clothespinAprContents.kpi3 <= '115.2')?'orange':(clothespinAprContents.kpi3 > '115.2' && clothespinAprContents.kpi3 < '144')?'yellow-7':(clothespinAprContents.kpi3 >= '144' && clothespinAprContents.kpi3 < '172.8')?'green':(clothespinAprContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi3}}
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
                              :color="(clothespinMayContents.kpi1 == null)?'grey-2':(clothespinMayContents.kpi1 >= '0' && clothespinMayContents.kpi1 <= '86.4')?'red':(clothespinMayContents.kpi1 > '86.4' && clothespinMayContents.kpi1 <= '115.2')?'orange':(clothespinMayContents.kpi1 > '115.2' && clothespinMayContents.kpi1 < '144')?'yellow-7':(clothespinMayContents.kpi1 >= '144' && clothespinMayContents.kpi1 < '172.8')?'green':(clothespinMayContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi2 == null)?'grey-2':(clothespinMayContents.kpi2 >= '0' && clothespinMayContents.kpi2 <= '86.4')?'red':(clothespinMayContents.kpi2 > '86.4' && clothespinMayContents.kpi2 <= '115.2')?'orange':(clothespinMayContents.kpi2 > '115.2' && clothespinMayContents.kpi2 < '144')?'yellow-7':(clothespinMayContents.kpi2 >= '144' && clothespinMayContents.kpi2 < '172.8')?'green':(clothespinMayContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi3 == null)?'grey-2':(clothespinMayContents.kpi3 >= '0' && clothespinMayContents.kpi3 <= '86.4')?'red':(clothespinMayContents.kpi3 > '86.4' && clothespinMayContents.kpi3 <= '115.2')?'orange':(clothespinMayContents.kpi3 > '115.2' && clothespinMayContents.kpi3 < '144')?'yellow-7':(clothespinMayContents.kpi3 >= '144' && clothespinMayContents.kpi3 < '172.8')?'green':(clothespinMayContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi3}}
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
                              :color="(clothespinJunContents.kpi1 == null)?'grey-2':(clothespinJunContents.kpi1 >= '0' && clothespinJunContents.kpi1 <= '86.4')?'red':(clothespinJunContents.kpi1 > '86.4' && clothespinJunContents.kpi1 <= '115.2')?'orange':(clothespinJunContents.kpi1 > '115.2' && clothespinJunContents.kpi1 < '144')?'yellow-7':(clothespinJunContents.kpi1 >= '144' && clothespinJunContents.kpi1 < '172.8')?'green':(clothespinJunContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi2 == null)?'grey-2':(clothespinJunContents.kpi2 >= '0' && clothespinJunContents.kpi2 <= '86.4')?'red':(clothespinJunContents.kpi2 > '86.4' && clothespinJunContents.kpi2 <= '115.2')?'orange':(clothespinJunContents.kpi2 > '115.2' && clothespinJunContents.kpi2 < '144')?'yellow-7':(clothespinJunContents.kpi2 >= '144' && clothespinJunContents.kpi2 < '172.8')?'green':(clothespinJunContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi3 == null)?'grey-2':(clothespinJunContents.kpi3 >= '0' && clothespinJunContents.kpi3 <= '86.4')?'red':(clothespinJunContents.kpi3 > '86.4' && clothespinJunContents.kpi3 <= '115.2')?'orange':(clothespinJunContents.kpi3 > '115.2' && clothespinJunContents.kpi3 < '144')?'yellow-7':(clothespinJunContents.kpi3 >= '144' && clothespinJunContents.kpi3 < '172.8')?'green':(clothespinJunContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi3}}
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
                              :color="(clothespinJulContents.kpi1 == null)?'grey-2':(clothespinJulContents.kpi1 >= '0' && clothespinJulContents.kpi1 <= '86.4')?'red':(clothespinJulContents.kpi1 > '86.4' && clothespinJulContents.kpi1 <= '115.2')?'orange':(clothespinJulContents.kpi1 > '115.2' && clothespinJulContents.kpi1 < '144')?'yellow-7':(clothespinJulContents.kpi1 >= '144' && clothespinJulContents.kpi1 < '172.8')?'green':(clothespinJulContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi2 == null)?'grey-2':(clothespinJulContents.kpi2 >= '0' && clothespinJulContents.kpi2 <= '86.4')?'red':(clothespinJulContents.kpi2 > '86.4' && clothespinJulContents.kpi2 <= '115.2')?'orange':(clothespinJulContents.kpi2 > '115.2' && clothespinJulContents.kpi2 < '144')?'yellow-7':(clothespinJulContents.kpi2 >= '144' && clothespinJulContents.kpi2 < '172.8')?'green':(clothespinJulContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi3 == null)?'grey-2':(clothespinJulContents.kpi3 >= '0' && clothespinJulContents.kpi3 <= '86.4')?'red':(clothespinJulContents.kpi3 > '86.4' && clothespinJulContents.kpi3 <= '115.2')?'orange':(clothespinJulContents.kpi3 > '115.2' && clothespinJulContents.kpi3 < '144')?'yellow-7':(clothespinJulContents.kpi3 >= '144' && clothespinJulContents.kpi3 < '172.8')?'green':(clothespinJulContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi3}}
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
                              :color="(clothespinAugContents.kpi1 == null)?'grey-2':(clothespinAugContents.kpi1 >= '0' && clothespinAugContents.kpi1 <= '86.4')?'red':(clothespinAugContents.kpi1 > '86.4' && clothespinAugContents.kpi1 <= '115.2')?'orange':(clothespinAugContents.kpi1 > '115.2' && clothespinAugContents.kpi1 < '144')?'yellow-7':(clothespinAugContents.kpi1 >= '144' && clothespinAugContents.kpi1 < '172.8')?'green':(clothespinAugContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi2 == null)?'grey-2':(clothespinAugContents.kpi2 >= '0' && clothespinAugContents.kpi2 <= '86.4')?'red':(clothespinAugContents.kpi2 > '86.4' && clothespinAugContents.kpi2 <= '115.2')?'orange':(clothespinAugContents.kpi2 > '115.2' && clothespinAugContents.kpi2 < '144')?'yellow-7':(clothespinAugContents.kpi2 >= '144' && clothespinAugContents.kpi2 < '172.8')?'green':(clothespinAugContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi3 == null)?'grey-2':(clothespinAugContents.kpi3 >= '0' && clothespinAugContents.kpi3 <= '86.4')?'red':(clothespinAugContents.kpi3 > '86.4' && clothespinAugContents.kpi3 <= '115.2')?'orange':(clothespinAugContents.kpi3 > '115.2' && clothespinAugContents.kpi3 < '144')?'yellow-7':(clothespinAugContents.kpi3 >= '144' && clothespinAugContents.kpi3 < '172.8')?'green':(clothespinAugContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi3}}
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
                              :color="(clothespinSepContents.kpi1 == null)?'grey-2':(clothespinSepContents.kpi1 >= '0' && clothespinSepContents.kpi1 <= '86.4')?'red':(clothespinSepContents.kpi1 > '86.4' && clothespinSepContents.kpi1 <= '115.2')?'orange':(clothespinSepContents.kpi1 > '115.2' && clothespinSepContents.kpi1 < '144')?'yellow-7':(clothespinSepContents.kpi1 >= '144' && clothespinSepContents.kpi1 < '172.8')?'green':(clothespinSepContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi2 == null)?'grey-2':(clothespinSepContents.kpi2 >= '0' && clothespinSepContents.kpi2 <= '86.4')?'red':(clothespinSepContents.kpi2 > '86.4' && clothespinSepContents.kpi2 <= '115.2')?'orange':(clothespinSepContents.kpi2 > '115.2' && clothespinSepContents.kpi2 < '144')?'yellow-7':(clothespinSepContents.kpi2 >= '144' && clothespinSepContents.kpi2 < '172.8')?'green':(clothespinSepContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi3 == null)?'grey-2':(clothespinSepContents.kpi3 >= '0' && clothespinSepContents.kpi3 <= '86.4')?'red':(clothespinSepContents.kpi3 > '86.4' && clothespinSepContents.kpi3 <= '115.2')?'orange':(clothespinSepContents.kpi3 > '115.2' && clothespinSepContents.kpi3 < '144')?'yellow-7':(clothespinSepContents.kpi3 >= '144' && clothespinSepContents.kpi3 < '172.8')?'green':(clothespinSepContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi3}}
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
                              :color="(clothespinOctContents.kpi1 == null)?'grey-2':(clothespinOctContents.kpi1 >= '0' && clothespinOctContents.kpi1 <= '86.4')?'red':(clothespinOctContents.kpi1 > '86.4' && clothespinOctContents.kpi1 <= '115.2')?'orange':(clothespinOctContents.kpi1 > '115.2' && clothespinOctContents.kpi1 < '144')?'yellow-7':(clothespinOctContents.kpi1 >= '144' && clothespinOctContents.kpi1 < '172.8')?'green':(clothespinOctContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi2 == null)?'grey-2':(clothespinOctContents.kpi2 >= '0' && clothespinOctContents.kpi2 <= '86.4')?'red':(clothespinOctContents.kpi2 > '86.4' && clothespinOctContents.kpi2 <= '115.2')?'orange':(clothespinOctContents.kpi2 > '115.2' && clothespinOctContents.kpi2 < '144')?'yellow-7':(clothespinOctContents.kpi2 >= '144' && clothespinOctContents.kpi2 < '172.8')?'green':(clothespinOctContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi3 == null)?'grey-2':(clothespinOctContents.kpi3 >= '0' && clothespinOctContents.kpi3 <= '86.4')?'red':(clothespinOctContents.kpi3 > '86.4' && clothespinOctContents.kpi3 <= '115.2')?'orange':(clothespinOctContents.kpi3 > '115.2' && clothespinOctContents.kpi3 < '144')?'yellow-7':(clothespinOctContents.kpi3 >= '144' && clothespinOctContents.kpi3 < '172.8')?'green':(clothespinOctContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi3}}
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
                              :color="(clothespinNovContents.kpi1 == null)?'grey-2':(clothespinNovContents.kpi1 >= '0' && clothespinNovContents.kpi1 <= '86.4')?'red':(clothespinNovContents.kpi1 > '86.4' && clothespinNovContents.kpi1 <= '115.2')?'orange':(clothespinNovContents.kpi1 > '115.2' && clothespinNovContents.kpi1 < '144')?'yellow-7':(clothespinNovContents.kpi1 >= '144' && clothespinNovContents.kpi1 < '172.8')?'green':(clothespinNovContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi2 == null)?'grey-2':(clothespinNovContents.kpi2 >= '0' && clothespinNovContents.kpi2 <= '86.4')?'red':(clothespinNovContents.kpi2 > '86.4' && clothespinNovContents.kpi2 <= '115.2')?'orange':(clothespinNovContents.kpi2 > '115.2' && clothespinNovContents.kpi2 < '144')?'yellow-7':(clothespinNovContents.kpi2 >= '144' && clothespinNovContents.kpi2 < '172.8')?'green':(clothespinNovContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi3 == null)?'grey-2':(clothespinNovContents.kpi3 >= '0' && clothespinNovContents.kpi3 <= '86.4')?'red':(clothespinNovContents.kpi3 > '86.4' && clothespinNovContents.kpi3 <= '115.2')?'orange':(clothespinNovContents.kpi3 > '115.2' && clothespinNovContents.kpi3 < '144')?'yellow-7':(clothespinNovContents.kpi3 >= '144' && clothespinNovContents.kpi3 < '172.8')?'green':(clothespinNovContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi3}}
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
                              :color="(clothespinDecContents.kpi1 == null)?'grey-2':(clothespinDecContents.kpi1 >= '0' && clothespinDecContents.kpi1 <= '86.4')?'red':(clothespinDecContents.kpi1 > '86.4' && clothespinDecContents.kpi1 <= '115.2')?'orange':(clothespinDecContents.kpi1 > '115.2' && clothespinDecContents.kpi1 < '144')?'yellow-7':(clothespinDecContents.kpi1 >= '144' && clothespinDecContents.kpi1 < '172.8')?'green':(clothespinDecContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi2 == null)?'grey-2':(clothespinDecContents.kpi2 >= '0' && clothespinDecContents.kpi2 <= '86.4')?'red':(clothespinDecContents.kpi2 > '86.4' && clothespinDecContents.kpi2 <= '115.2')?'orange':(clothespinDecContents.kpi2 > '115.2' && clothespinDecContents.kpi2 < '144')?'yellow-7':(clothespinDecContents.kpi2 >= '144' && clothespinDecContents.kpi2 < '172.8')?'green':(clothespinDecContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi3 == null)?'grey-2':(clothespinDecContents.kpi3 >= '0' && clothespinDecContents.kpi3 <= '86.4')?'red':(clothespinDecContents.kpi3 > '86.4' && clothespinDecContents.kpi3 <= '115.2')?'orange':(clothespinDecContents.kpi3 > '115.2' && clothespinDecContents.kpi3 < '144')?'yellow-7':(clothespinDecContents.kpi3 >= '144' && clothespinDecContents.kpi3 < '172.8')?'green':(clothespinDecContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi3}}
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi1 == null)?'grey-2':(clothespinJanContents.kpi1 >= '0' && clothespinJanContents.kpi1 <= '86.4')?'red':(clothespinJanContents.kpi1 > '86.4' && clothespinJanContents.kpi1 <= '115.2')?'orange':(clothespinJanContents.kpi1 > '115.2' && clothespinJanContents.kpi1 < '144')?'yellow-7':(clothespinJanContents.kpi1 >= '144' && clothespinJanContents.kpi1 < '172.8')?'green':(clothespinJanContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi2 == null)?'grey-2':(clothespinJanContents.kpi2 >= '0' && clothespinJanContents.kpi2 <= '86.4')?'red':(clothespinJanContents.kpi2 > '86.4' && clothespinJanContents.kpi2 <= '115.2')?'orange':(clothespinJanContents.kpi2 > '115.2' && clothespinJanContents.kpi2 < '144')?'yellow-7':(clothespinJanContents.kpi2 >= '144' && clothespinJanContents.kpi2 < '172.8')?'green':(clothespinJanContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi3 == null)?'grey-2':(clothespinJanContents.kpi3 >= '0' && clothespinJanContents.kpi3 <= '86.4')?'red':(clothespinJanContents.kpi3 > '86.4' && clothespinJanContents.kpi3 <= '115.2')?'orange':(clothespinJanContents.kpi3 > '115.2' && clothespinJanContents.kpi3 < '144')?'yellow-7':(clothespinJanContents.kpi3 >= '144' && clothespinJanContents.kpi3 < '172.8')?'green':(clothespinJanContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi3}}
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
                              :color="(clothespinFebContents.kpi1 == null)?'grey-2':(clothespinFebContents.kpi1 >= '0' && clothespinFebContents.kpi1 <= '86.4')?'red':(clothespinFebContents.kpi1 > '86.4' && clothespinFebContents.kpi1 <= '115.2')?'orange':(clothespinFebContents.kpi1 > '115.2' && clothespinFebContents.kpi1 < '144')?'yellow-7':(clothespinFebContents.kpi1 >= '144' && clothespinFebContents.kpi1 < '172.8')?'green':(clothespinFebContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi2 == null)?'grey-2':(clothespinFebContents.kpi2 >= '0' && clothespinFebContents.kpi2 <= '86.4')?'red':(clothespinFebContents.kpi2 > '86.4' && clothespinFebContents.kpi2 <= '115.2')?'orange':(clothespinFebContents.kpi2 > '115.2' && clothespinFebContents.kpi2 < '144')?'yellow-7':(clothespinFebContents.kpi2 >= '144' && clothespinFebContents.kpi2 < '172.8')?'green':(clothespinFebContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi3 == null)?'grey-2':(clothespinFebContents.kpi3 >= '0' && clothespinFebContents.kpi3 <= '86.4')?'red':(clothespinFebContents.kpi3 > '86.4' && clothespinFebContents.kpi3 <= '115.2')?'orange':(clothespinFebContents.kpi3 > '115.2' && clothespinFebContents.kpi3 < '144')?'yellow-7':(clothespinFebContents.kpi3 >= '144' && clothespinFebContents.kpi3 < '172.8')?'green':(clothespinFebContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi3}}
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
                              :color="(clothespinMarContents.kpi1 == null)?'grey-2':(clothespinMarContents.kpi1 >= '0' && clothespinMarContents.kpi1 <= '86.4')?'red':(clothespinMarContents.kpi1 > '86.4' && clothespinMarContents.kpi1 <= '115.2')?'orange':(clothespinMarContents.kpi1 > '115.2' && clothespinMarContents.kpi1 < '144')?'yellow-7':(clothespinMarContents.kpi1 >= '144' && clothespinMarContents.kpi1 < '172.8')?'green':(clothespinMarContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi2 == null)?'grey-2':(clothespinMarContents.kpi2 >= '0' && clothespinMarContents.kpi2 <= '86.4')?'red':(clothespinMarContents.kpi2 > '86.4' && clothespinMarContents.kpi2 <= '115.2')?'orange':(clothespinMarContents.kpi2 > '115.2' && clothespinMarContents.kpi2 < '144')?'yellow-7':(clothespinMarContents.kpi2 >= '144' && clothespinMarContents.kpi2 < '172.8')?'green':(clothespinMarContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi3 == null)?'grey-2':(clothespinMarContents.kpi3 >= '0' && clothespinMarContents.kpi3 <= '86.4')?'red':(clothespinMarContents.kpi3 > '86.4' && clothespinMarContents.kpi3 <= '115.2')?'orange':(clothespinMarContents.kpi3 > '115.2' && clothespinMarContents.kpi3 < '144')?'yellow-7':(clothespinMarContents.kpi3 >= '144' && clothespinMarContents.kpi3 < '172.8')?'green':(clothespinMarContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi3}}
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
                              :color="(clothespinAprContents.kpi1 == null)?'grey-2':(clothespinAprContents.kpi1 >= '0' && clothespinAprContents.kpi1 <= '86.4')?'red':(clothespinAprContents.kpi1 > '86.4' && clothespinAprContents.kpi1 <= '115.2')?'orange':(clothespinAprContents.kpi1 > '115.2' && clothespinAprContents.kpi1 < '144')?'yellow-7':(clothespinAprContents.kpi1 >= '144' && clothespinAprContents.kpi1 < '172.8')?'green':(clothespinAprContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi2 == null)?'grey-2':(clothespinAprContents.kpi2 >= '0' && clothespinAprContents.kpi2 <= '86.4')?'red':(clothespinAprContents.kpi2 > '86.4' && clothespinAprContents.kpi2 <= '115.2')?'orange':(clothespinAprContents.kpi2 > '115.2' && clothespinAprContents.kpi2 < '144')?'yellow-7':(clothespinAprContents.kpi2 >= '144' && clothespinAprContents.kpi2 < '172.8')?'green':(clothespinAprContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi3 == null)?'grey-2':(clothespinAprContents.kpi3 >= '0' && clothespinAprContents.kpi3 <= '86.4')?'red':(clothespinAprContents.kpi3 > '86.4' && clothespinAprContents.kpi3 <= '115.2')?'orange':(clothespinAprContents.kpi3 > '115.2' && clothespinAprContents.kpi3 < '144')?'yellow-7':(clothespinAprContents.kpi3 >= '144' && clothespinAprContents.kpi3 < '172.8')?'green':(clothespinAprContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi3}}
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
                              :color="(clothespinMayContents.kpi1 == null)?'grey-2':(clothespinMayContents.kpi1 >= '0' && clothespinMayContents.kpi1 <= '86.4')?'red':(clothespinMayContents.kpi1 > '86.4' && clothespinMayContents.kpi1 <= '115.2')?'orange':(clothespinMayContents.kpi1 > '115.2' && clothespinMayContents.kpi1 < '144')?'yellow-7':(clothespinMayContents.kpi1 >= '144' && clothespinMayContents.kpi1 < '172.8')?'green':(clothespinMayContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi2 == null)?'grey-2':(clothespinMayContents.kpi2 >= '0' && clothespinMayContents.kpi2 <= '86.4')?'red':(clothespinMayContents.kpi2 > '86.4' && clothespinMayContents.kpi2 <= '115.2')?'orange':(clothespinMayContents.kpi2 > '115.2' && clothespinMayContents.kpi2 < '144')?'yellow-7':(clothespinMayContents.kpi2 >= '144' && clothespinMayContents.kpi2 < '172.8')?'green':(clothespinMayContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi3 == null)?'grey-2':(clothespinMayContents.kpi3 >= '0' && clothespinMayContents.kpi3 <= '86.4')?'red':(clothespinMayContents.kpi3 > '86.4' && clothespinMayContents.kpi3 <= '115.2')?'orange':(clothespinMayContents.kpi3 > '115.2' && clothespinMayContents.kpi3 < '144')?'yellow-7':(clothespinMayContents.kpi3 >= '144' && clothespinMayContents.kpi3 < '172.8')?'green':(clothespinMayContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi3}}
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
                              :color="(clothespinJunContents.kpi1 == null)?'grey-2':(clothespinJunContents.kpi1 >= '0' && clothespinJunContents.kpi1 <= '86.4')?'red':(clothespinJunContents.kpi1 > '86.4' && clothespinJunContents.kpi1 <= '115.2')?'orange':(clothespinJunContents.kpi1 > '115.2' && clothespinJunContents.kpi1 < '144')?'yellow-7':(clothespinJunContents.kpi1 >= '144' && clothespinJunContents.kpi1 < '172.8')?'green':(clothespinJunContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi2 == null)?'grey-2':(clothespinJunContents.kpi2 >= '0' && clothespinJunContents.kpi2 <= '86.4')?'red':(clothespinJunContents.kpi2 > '86.4' && clothespinJunContents.kpi2 <= '115.2')?'orange':(clothespinJunContents.kpi2 > '115.2' && clothespinJunContents.kpi2 < '144')?'yellow-7':(clothespinJunContents.kpi2 >= '144' && clothespinJunContents.kpi2 < '172.8')?'green':(clothespinJunContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi3 == null)?'grey-2':(clothespinJunContents.kpi3 >= '0' && clothespinJunContents.kpi3 <= '86.4')?'red':(clothespinJunContents.kpi3 > '86.4' && clothespinJunContents.kpi3 <= '115.2')?'orange':(clothespinJunContents.kpi3 > '115.2' && clothespinJunContents.kpi3 < '144')?'yellow-7':(clothespinJunContents.kpi3 >= '144' && clothespinJunContents.kpi3 < '172.8')?'green':(clothespinJunContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi3}}
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
                              :color="(clothespinJulContents.kpi1 == null)?'grey-2':(clothespinJulContents.kpi1 >= '0' && clothespinJulContents.kpi1 <= '86.4')?'red':(clothespinJulContents.kpi1 > '86.4' && clothespinJulContents.kpi1 <= '115.2')?'orange':(clothespinJulContents.kpi1 > '115.2' && clothespinJulContents.kpi1 < '144')?'yellow-7':(clothespinJulContents.kpi1 >= '144' && clothespinJulContents.kpi1 < '172.8')?'green':(clothespinJulContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi2 == null)?'grey-2':(clothespinJulContents.kpi2 >= '0' && clothespinJulContents.kpi2 <= '86.4')?'red':(clothespinJulContents.kpi2 > '86.4' && clothespinJulContents.kpi2 <= '115.2')?'orange':(clothespinJulContents.kpi2 > '115.2' && clothespinJulContents.kpi2 < '144')?'yellow-7':(clothespinJulContents.kpi2 >= '144' && clothespinJulContents.kpi2 < '172.8')?'green':(clothespinJulContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi3 == null)?'grey-2':(clothespinJulContents.kpi3 >= '0' && clothespinJulContents.kpi3 <= '86.4')?'red':(clothespinJulContents.kpi3 > '86.4' && clothespinJulContents.kpi3 <= '115.2')?'orange':(clothespinJulContents.kpi3 > '115.2' && clothespinJulContents.kpi3 < '144')?'yellow-7':(clothespinJulContents.kpi3 >= '144' && clothespinJulContents.kpi3 < '172.8')?'green':(clothespinJulContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi3}}
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
                              :color="(clothespinAugContents.kpi1 == null)?'grey-2':(clothespinAugContents.kpi1 >= '0' && clothespinAugContents.kpi1 <= '86.4')?'red':(clothespinAugContents.kpi1 > '86.4' && clothespinAugContents.kpi1 <= '115.2')?'orange':(clothespinAugContents.kpi1 > '115.2' && clothespinAugContents.kpi1 < '144')?'yellow-7':(clothespinAugContents.kpi1 >= '144' && clothespinAugContents.kpi1 < '172.8')?'green':(clothespinAugContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi2 == null)?'grey-2':(clothespinAugContents.kpi2 >= '0' && clothespinAugContents.kpi2 <= '86.4')?'red':(clothespinAugContents.kpi2 > '86.4' && clothespinAugContents.kpi2 <= '115.2')?'orange':(clothespinAugContents.kpi2 > '115.2' && clothespinAugContents.kpi2 < '144')?'yellow-7':(clothespinAugContents.kpi2 >= '144' && clothespinAugContents.kpi2 < '172.8')?'green':(clothespinAugContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi3 == null)?'grey-2':(clothespinAugContents.kpi3 >= '0' && clothespinAugContents.kpi3 <= '86.4')?'red':(clothespinAugContents.kpi3 > '86.4' && clothespinAugContents.kpi3 <= '115.2')?'orange':(clothespinAugContents.kpi3 > '115.2' && clothespinAugContents.kpi3 < '144')?'yellow-7':(clothespinAugContents.kpi3 >= '144' && clothespinAugContents.kpi3 < '172.8')?'green':(clothespinAugContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi3}}
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
                              :color="(clothespinSepContents.kpi1 == null)?'grey-2':(clothespinSepContents.kpi1 >= '0' && clothespinSepContents.kpi1 <= '86.4')?'red':(clothespinSepContents.kpi1 > '86.4' && clothespinSepContents.kpi1 <= '115.2')?'orange':(clothespinSepContents.kpi1 > '115.2' && clothespinSepContents.kpi1 < '144')?'yellow-7':(clothespinSepContents.kpi1 >= '144' && clothespinSepContents.kpi1 < '172.8')?'green':(clothespinSepContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi2 == null)?'grey-2':(clothespinSepContents.kpi2 >= '0' && clothespinSepContents.kpi2 <= '86.4')?'red':(clothespinSepContents.kpi2 > '86.4' && clothespinSepContents.kpi2 <= '115.2')?'orange':(clothespinSepContents.kpi2 > '115.2' && clothespinSepContents.kpi2 < '144')?'yellow-7':(clothespinSepContents.kpi2 >= '144' && clothespinSepContents.kpi2 < '172.8')?'green':(clothespinSepContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi3 == null)?'grey-2':(clothespinSepContents.kpi3 >= '0' && clothespinSepContents.kpi3 <= '86.4')?'red':(clothespinSepContents.kpi3 > '86.4' && clothespinSepContents.kpi3 <= '115.2')?'orange':(clothespinSepContents.kpi3 > '115.2' && clothespinSepContents.kpi3 < '144')?'yellow-7':(clothespinSepContents.kpi3 >= '144' && clothespinSepContents.kpi3 < '172.8')?'green':(clothespinSepContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi3}}
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
                              :color="(clothespinOctContents.kpi1 == null)?'grey-2':(clothespinOctContents.kpi1 >= '0' && clothespinOctContents.kpi1 <= '86.4')?'red':(clothespinOctContents.kpi1 > '86.4' && clothespinOctContents.kpi1 <= '115.2')?'orange':(clothespinOctContents.kpi1 > '115.2' && clothespinOctContents.kpi1 < '144')?'yellow-7':(clothespinOctContents.kpi1 >= '144' && clothespinOctContents.kpi1 < '172.8')?'green':(clothespinOctContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi2 == null)?'grey-2':(clothespinOctContents.kpi2 >= '0' && clothespinOctContents.kpi2 <= '86.4')?'red':(clothespinOctContents.kpi2 > '86.4' && clothespinOctContents.kpi2 <= '115.2')?'orange':(clothespinOctContents.kpi2 > '115.2' && clothespinOctContents.kpi2 < '144')?'yellow-7':(clothespinOctContents.kpi2 >= '144' && clothespinOctContents.kpi2 < '172.8')?'green':(clothespinOctContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi3 == null)?'grey-2':(clothespinOctContents.kpi3 >= '0' && clothespinOctContents.kpi3 <= '86.4')?'red':(clothespinOctContents.kpi3 > '86.4' && clothespinOctContents.kpi3 <= '115.2')?'orange':(clothespinOctContents.kpi3 > '115.2' && clothespinOctContents.kpi3 < '144')?'yellow-7':(clothespinOctContents.kpi3 >= '144' && clothespinOctContents.kpi3 < '172.8')?'green':(clothespinOctContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi3}}
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
                              :color="(clothespinNovContents.kpi1 == null)?'grey-2':(clothespinNovContents.kpi1 >= '0' && clothespinNovContents.kpi1 <= '86.4')?'red':(clothespinNovContents.kpi1 > '86.4' && clothespinNovContents.kpi1 <= '115.2')?'orange':(clothespinNovContents.kpi1 > '115.2' && clothespinNovContents.kpi1 < '144')?'yellow-7':(clothespinNovContents.kpi1 >= '144' && clothespinNovContents.kpi1 < '172.8')?'green':(clothespinNovContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi2 == null)?'grey-2':(clothespinNovContents.kpi2 >= '0' && clothespinNovContents.kpi2 <= '86.4')?'red':(clothespinNovContents.kpi2 > '86.4' && clothespinNovContents.kpi2 <= '115.2')?'orange':(clothespinNovContents.kpi2 > '115.2' && clothespinNovContents.kpi2 < '144')?'yellow-7':(clothespinNovContents.kpi2 >= '144' && clothespinNovContents.kpi2 < '172.8')?'green':(clothespinNovContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi3 == null)?'grey-2':(clothespinNovContents.kpi3 >= '0' && clothespinNovContents.kpi3 <= '86.4')?'red':(clothespinNovContents.kpi3 > '86.4' && clothespinNovContents.kpi3 <= '115.2')?'orange':(clothespinNovContents.kpi3 > '115.2' && clothespinNovContents.kpi3 < '144')?'yellow-7':(clothespinNovContents.kpi3 >= '144' && clothespinNovContents.kpi3 < '172.8')?'green':(clothespinNovContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi3}}
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
                              :color="(clothespinDecContents.kpi1 == null)?'grey-2':(clothespinDecContents.kpi1 >= '0' && clothespinDecContents.kpi1 <= '86.4')?'red':(clothespinDecContents.kpi1 > '86.4' && clothespinDecContents.kpi1 <= '115.2')?'orange':(clothespinDecContents.kpi1 > '115.2' && clothespinDecContents.kpi1 < '144')?'yellow-7':(clothespinDecContents.kpi1 >= '144' && clothespinDecContents.kpi1 < '172.8')?'green':(clothespinDecContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi2 == null)?'grey-2':(clothespinDecContents.kpi2 >= '0' && clothespinDecContents.kpi2 <= '86.4')?'red':(clothespinDecContents.kpi2 > '86.4' && clothespinDecContents.kpi2 <= '115.2')?'orange':(clothespinDecContents.kpi2 > '115.2' && clothespinDecContents.kpi2 < '144')?'yellow-7':(clothespinDecContents.kpi2 >= '144' && clothespinDecContents.kpi2 < '172.8')?'green':(clothespinDecContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi3 == null)?'grey-2':(clothespinDecContents.kpi3 >= '0' && clothespinDecContents.kpi3 <= '86.4')?'red':(clothespinDecContents.kpi3 > '86.4' && clothespinDecContents.kpi3 <= '115.2')?'orange':(clothespinDecContents.kpi3 > '115.2' && clothespinDecContents.kpi3 < '144')?'yellow-7':(clothespinDecContents.kpi3 >= '144' && clothespinDecContents.kpi3 < '172.8')?'green':(clothespinDecContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi3}}
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi1 == null)?'grey-2':(clothespinJanContents.kpi1 >= '0' && clothespinJanContents.kpi1 <= '86.4')?'red':(clothespinJanContents.kpi1 > '86.4' && clothespinJanContents.kpi1 <= '115.2')?'orange':(clothespinJanContents.kpi1 > '115.2' && clothespinJanContents.kpi1 < '144')?'yellow-7':(clothespinJanContents.kpi1 >= '144' && clothespinJanContents.kpi1 < '172.8')?'green':(clothespinJanContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi2 == null)?'grey-2':(clothespinJanContents.kpi2 >= '0' && clothespinJanContents.kpi2 <= '86.4')?'red':(clothespinJanContents.kpi2 > '86.4' && clothespinJanContents.kpi2 <= '115.2')?'orange':(clothespinJanContents.kpi2 > '115.2' && clothespinJanContents.kpi2 < '144')?'yellow-7':(clothespinJanContents.kpi2 >= '144' && clothespinJanContents.kpi2 < '172.8')?'green':(clothespinJanContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi3 == null)?'grey-2':(clothespinJanContents.kpi3 >= '0' && clothespinJanContents.kpi3 <= '86.4')?'red':(clothespinJanContents.kpi3 > '86.4' && clothespinJanContents.kpi3 <= '115.2')?'orange':(clothespinJanContents.kpi3 > '115.2' && clothespinJanContents.kpi3 < '144')?'yellow-7':(clothespinJanContents.kpi3 >= '144' && clothespinJanContents.kpi3 < '172.8')?'green':(clothespinJanContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi3}}
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
                              :color="(clothespinFebContents.kpi1 == null)?'grey-2':(clothespinFebContents.kpi1 >= '0' && clothespinFebContents.kpi1 <= '86.4')?'red':(clothespinFebContents.kpi1 > '86.4' && clothespinFebContents.kpi1 <= '115.2')?'orange':(clothespinFebContents.kpi1 > '115.2' && clothespinFebContents.kpi1 < '144')?'yellow-7':(clothespinFebContents.kpi1 >= '144' && clothespinFebContents.kpi1 < '172.8')?'green':(clothespinFebContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi2 == null)?'grey-2':(clothespinFebContents.kpi2 >= '0' && clothespinFebContents.kpi2 <= '86.4')?'red':(clothespinFebContents.kpi2 > '86.4' && clothespinFebContents.kpi2 <= '115.2')?'orange':(clothespinFebContents.kpi2 > '115.2' && clothespinFebContents.kpi2 < '144')?'yellow-7':(clothespinFebContents.kpi2 >= '144' && clothespinFebContents.kpi2 < '172.8')?'green':(clothespinFebContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi3 == null)?'grey-2':(clothespinFebContents.kpi3 >= '0' && clothespinFebContents.kpi3 <= '86.4')?'red':(clothespinFebContents.kpi3 > '86.4' && clothespinFebContents.kpi3 <= '115.2')?'orange':(clothespinFebContents.kpi3 > '115.2' && clothespinFebContents.kpi3 < '144')?'yellow-7':(clothespinFebContents.kpi3 >= '144' && clothespinFebContents.kpi3 < '172.8')?'green':(clothespinFebContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi3}}
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
                              :color="(clothespinMarContents.kpi1 == null)?'grey-2':(clothespinMarContents.kpi1 >= '0' && clothespinMarContents.kpi1 <= '86.4')?'red':(clothespinMarContents.kpi1 > '86.4' && clothespinMarContents.kpi1 <= '115.2')?'orange':(clothespinMarContents.kpi1 > '115.2' && clothespinMarContents.kpi1 < '144')?'yellow-7':(clothespinMarContents.kpi1 >= '144' && clothespinMarContents.kpi1 < '172.8')?'green':(clothespinMarContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi2 == null)?'grey-2':(clothespinMarContents.kpi2 >= '0' && clothespinMarContents.kpi2 <= '86.4')?'red':(clothespinMarContents.kpi2 > '86.4' && clothespinMarContents.kpi2 <= '115.2')?'orange':(clothespinMarContents.kpi2 > '115.2' && clothespinMarContents.kpi2 < '144')?'yellow-7':(clothespinMarContents.kpi2 >= '144' && clothespinMarContents.kpi2 < '172.8')?'green':(clothespinMarContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi3 == null)?'grey-2':(clothespinMarContents.kpi3 >= '0' && clothespinMarContents.kpi3 <= '86.4')?'red':(clothespinMarContents.kpi3 > '86.4' && clothespinMarContents.kpi3 <= '115.2')?'orange':(clothespinMarContents.kpi3 > '115.2' && clothespinMarContents.kpi3 < '144')?'yellow-7':(clothespinMarContents.kpi3 >= '144' && clothespinMarContents.kpi3 < '172.8')?'green':(clothespinMarContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi3}}
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
                              :color="(clothespinAprContents.kpi1 == null)?'grey-2':(clothespinAprContents.kpi1 >= '0' && clothespinAprContents.kpi1 <= '86.4')?'red':(clothespinAprContents.kpi1 > '86.4' && clothespinAprContents.kpi1 <= '115.2')?'orange':(clothespinAprContents.kpi1 > '115.2' && clothespinAprContents.kpi1 < '144')?'yellow-7':(clothespinAprContents.kpi1 >= '144' && clothespinAprContents.kpi1 < '172.8')?'green':(clothespinAprContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi2 == null)?'grey-2':(clothespinAprContents.kpi2 >= '0' && clothespinAprContents.kpi2 <= '86.4')?'red':(clothespinAprContents.kpi2 > '86.4' && clothespinAprContents.kpi2 <= '115.2')?'orange':(clothespinAprContents.kpi2 > '115.2' && clothespinAprContents.kpi2 < '144')?'yellow-7':(clothespinAprContents.kpi2 >= '144' && clothespinAprContents.kpi2 < '172.8')?'green':(clothespinAprContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi3 == null)?'grey-2':(clothespinAprContents.kpi3 >= '0' && clothespinAprContents.kpi3 <= '86.4')?'red':(clothespinAprContents.kpi3 > '86.4' && clothespinAprContents.kpi3 <= '115.2')?'orange':(clothespinAprContents.kpi3 > '115.2' && clothespinAprContents.kpi3 < '144')?'yellow-7':(clothespinAprContents.kpi3 >= '144' && clothespinAprContents.kpi3 < '172.8')?'green':(clothespinAprContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi3}}
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
                              :color="(clothespinMayContents.kpi1 == null)?'grey-2':(clothespinMayContents.kpi1 >= '0' && clothespinMayContents.kpi1 <= '86.4')?'red':(clothespinMayContents.kpi1 > '86.4' && clothespinMayContents.kpi1 <= '115.2')?'orange':(clothespinMayContents.kpi1 > '115.2' && clothespinMayContents.kpi1 < '144')?'yellow-7':(clothespinMayContents.kpi1 >= '144' && clothespinMayContents.kpi1 < '172.8')?'green':(clothespinMayContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi2 == null)?'grey-2':(clothespinMayContents.kpi2 >= '0' && clothespinMayContents.kpi2 <= '86.4')?'red':(clothespinMayContents.kpi2 > '86.4' && clothespinMayContents.kpi2 <= '115.2')?'orange':(clothespinMayContents.kpi2 > '115.2' && clothespinMayContents.kpi2 < '144')?'yellow-7':(clothespinMayContents.kpi2 >= '144' && clothespinMayContents.kpi2 < '172.8')?'green':(clothespinMayContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi3 == null)?'grey-2':(clothespinMayContents.kpi3 >= '0' && clothespinMayContents.kpi3 <= '86.4')?'red':(clothespinMayContents.kpi3 > '86.4' && clothespinMayContents.kpi3 <= '115.2')?'orange':(clothespinMayContents.kpi3 > '115.2' && clothespinMayContents.kpi3 < '144')?'yellow-7':(clothespinMayContents.kpi3 >= '144' && clothespinMayContents.kpi3 < '172.8')?'green':(clothespinMayContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi3}}
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
                              :color="(clothespinJunContents.kpi1 == null)?'grey-2':(clothespinJunContents.kpi1 >= '0' && clothespinJunContents.kpi1 <= '86.4')?'red':(clothespinJunContents.kpi1 > '86.4' && clothespinJunContents.kpi1 <= '115.2')?'orange':(clothespinJunContents.kpi1 > '115.2' && clothespinJunContents.kpi1 < '144')?'yellow-7':(clothespinJunContents.kpi1 >= '144' && clothespinJunContents.kpi1 < '172.8')?'green':(clothespinJunContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi2 == null)?'grey-2':(clothespinJunContents.kpi2 >= '0' && clothespinJunContents.kpi2 <= '86.4')?'red':(clothespinJunContents.kpi2 > '86.4' && clothespinJunContents.kpi2 <= '115.2')?'orange':(clothespinJunContents.kpi2 > '115.2' && clothespinJunContents.kpi2 < '144')?'yellow-7':(clothespinJunContents.kpi2 >= '144' && clothespinJunContents.kpi2 < '172.8')?'green':(clothespinJunContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi3 == null)?'grey-2':(clothespinJunContents.kpi3 >= '0' && clothespinJunContents.kpi3 <= '86.4')?'red':(clothespinJunContents.kpi3 > '86.4' && clothespinJunContents.kpi3 <= '115.2')?'orange':(clothespinJunContents.kpi3 > '115.2' && clothespinJunContents.kpi3 < '144')?'yellow-7':(clothespinJunContents.kpi3 >= '144' && clothespinJunContents.kpi3 < '172.8')?'green':(clothespinJunContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi3}}
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
                              :color="(clothespinJulContents.kpi1 == null)?'grey-2':(clothespinJulContents.kpi1 >= '0' && clothespinJulContents.kpi1 <= '86.4')?'red':(clothespinJulContents.kpi1 > '86.4' && clothespinJulContents.kpi1 <= '115.2')?'orange':(clothespinJulContents.kpi1 > '115.2' && clothespinJulContents.kpi1 < '144')?'yellow-7':(clothespinJulContents.kpi1 >= '144' && clothespinJulContents.kpi1 < '172.8')?'green':(clothespinJulContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi2 == null)?'grey-2':(clothespinJulContents.kpi2 >= '0' && clothespinJulContents.kpi2 <= '86.4')?'red':(clothespinJulContents.kpi2 > '86.4' && clothespinJulContents.kpi2 <= '115.2')?'orange':(clothespinJulContents.kpi2 > '115.2' && clothespinJulContents.kpi2 < '144')?'yellow-7':(clothespinJulContents.kpi2 >= '144' && clothespinJulContents.kpi2 < '172.8')?'green':(clothespinJulContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi3 == null)?'grey-2':(clothespinJulContents.kpi3 >= '0' && clothespinJulContents.kpi3 <= '86.4')?'red':(clothespinJulContents.kpi3 > '86.4' && clothespinJulContents.kpi3 <= '115.2')?'orange':(clothespinJulContents.kpi3 > '115.2' && clothespinJulContents.kpi3 < '144')?'yellow-7':(clothespinJulContents.kpi3 >= '144' && clothespinJulContents.kpi3 < '172.8')?'green':(clothespinJulContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi3}}
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
                              :color="(clothespinAugContents.kpi1 == null)?'grey-2':(clothespinAugContents.kpi1 >= '0' && clothespinAugContents.kpi1 <= '86.4')?'red':(clothespinAugContents.kpi1 > '86.4' && clothespinAugContents.kpi1 <= '115.2')?'orange':(clothespinAugContents.kpi1 > '115.2' && clothespinAugContents.kpi1 < '144')?'yellow-7':(clothespinAugContents.kpi1 >= '144' && clothespinAugContents.kpi1 < '172.8')?'green':(clothespinAugContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi2 == null)?'grey-2':(clothespinAugContents.kpi2 >= '0' && clothespinAugContents.kpi2 <= '86.4')?'red':(clothespinAugContents.kpi2 > '86.4' && clothespinAugContents.kpi2 <= '115.2')?'orange':(clothespinAugContents.kpi2 > '115.2' && clothespinAugContents.kpi2 < '144')?'yellow-7':(clothespinAugContents.kpi2 >= '144' && clothespinAugContents.kpi2 < '172.8')?'green':(clothespinAugContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi3 == null)?'grey-2':(clothespinAugContents.kpi3 >= '0' && clothespinAugContents.kpi3 <= '86.4')?'red':(clothespinAugContents.kpi3 > '86.4' && clothespinAugContents.kpi3 <= '115.2')?'orange':(clothespinAugContents.kpi3 > '115.2' && clothespinAugContents.kpi3 < '144')?'yellow-7':(clothespinAugContents.kpi3 >= '144' && clothespinAugContents.kpi3 < '172.8')?'green':(clothespinAugContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi3}}
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
                              :color="(clothespinSepContents.kpi1 == null)?'grey-2':(clothespinSepContents.kpi1 >= '0' && clothespinSepContents.kpi1 <= '86.4')?'red':(clothespinSepContents.kpi1 > '86.4' && clothespinSepContents.kpi1 <= '115.2')?'orange':(clothespinSepContents.kpi1 > '115.2' && clothespinSepContents.kpi1 < '144')?'yellow-7':(clothespinSepContents.kpi1 >= '144' && clothespinSepContents.kpi1 < '172.8')?'green':(clothespinSepContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi2 == null)?'grey-2':(clothespinSepContents.kpi2 >= '0' && clothespinSepContents.kpi2 <= '86.4')?'red':(clothespinSepContents.kpi2 > '86.4' && clothespinSepContents.kpi2 <= '115.2')?'orange':(clothespinSepContents.kpi2 > '115.2' && clothespinSepContents.kpi2 < '144')?'yellow-7':(clothespinSepContents.kpi2 >= '144' && clothespinSepContents.kpi2 < '172.8')?'green':(clothespinSepContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi3 == null)?'grey-2':(clothespinSepContents.kpi3 >= '0' && clothespinSepContents.kpi3 <= '86.4')?'red':(clothespinSepContents.kpi3 > '86.4' && clothespinSepContents.kpi3 <= '115.2')?'orange':(clothespinSepContents.kpi3 > '115.2' && clothespinSepContents.kpi3 < '144')?'yellow-7':(clothespinSepContents.kpi3 >= '144' && clothespinSepContents.kpi3 < '172.8')?'green':(clothespinSepContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi3}}
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
                              :color="(clothespinOctContents.kpi1 == null)?'grey-2':(clothespinOctContents.kpi1 >= '0' && clothespinOctContents.kpi1 <= '86.4')?'red':(clothespinOctContents.kpi1 > '86.4' && clothespinOctContents.kpi1 <= '115.2')?'orange':(clothespinOctContents.kpi1 > '115.2' && clothespinOctContents.kpi1 < '144')?'yellow-7':(clothespinOctContents.kpi1 >= '144' && clothespinOctContents.kpi1 < '172.8')?'green':(clothespinOctContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi2 == null)?'grey-2':(clothespinOctContents.kpi2 >= '0' && clothespinOctContents.kpi2 <= '86.4')?'red':(clothespinOctContents.kpi2 > '86.4' && clothespinOctContents.kpi2 <= '115.2')?'orange':(clothespinOctContents.kpi2 > '115.2' && clothespinOctContents.kpi2 < '144')?'yellow-7':(clothespinOctContents.kpi2 >= '144' && clothespinOctContents.kpi2 < '172.8')?'green':(clothespinOctContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi3 == null)?'grey-2':(clothespinOctContents.kpi3 >= '0' && clothespinOctContents.kpi3 <= '86.4')?'red':(clothespinOctContents.kpi3 > '86.4' && clothespinOctContents.kpi3 <= '115.2')?'orange':(clothespinOctContents.kpi3 > '115.2' && clothespinOctContents.kpi3 < '144')?'yellow-7':(clothespinOctContents.kpi3 >= '144' && clothespinOctContents.kpi3 < '172.8')?'green':(clothespinOctContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi3}}
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
                              :color="(clothespinNovContents.kpi1 == null)?'grey-2':(clothespinNovContents.kpi1 >= '0' && clothespinNovContents.kpi1 <= '86.4')?'red':(clothespinNovContents.kpi1 > '86.4' && clothespinNovContents.kpi1 <= '115.2')?'orange':(clothespinNovContents.kpi1 > '115.2' && clothespinNovContents.kpi1 < '144')?'yellow-7':(clothespinNovContents.kpi1 >= '144' && clothespinNovContents.kpi1 < '172.8')?'green':(clothespinNovContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi2 == null)?'grey-2':(clothespinNovContents.kpi2 >= '0' && clothespinNovContents.kpi2 <= '86.4')?'red':(clothespinNovContents.kpi2 > '86.4' && clothespinNovContents.kpi2 <= '115.2')?'orange':(clothespinNovContents.kpi2 > '115.2' && clothespinNovContents.kpi2 < '144')?'yellow-7':(clothespinNovContents.kpi2 >= '144' && clothespinNovContents.kpi2 < '172.8')?'green':(clothespinNovContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi3 == null)?'grey-2':(clothespinNovContents.kpi3 >= '0' && clothespinNovContents.kpi3 <= '86.4')?'red':(clothespinNovContents.kpi3 > '86.4' && clothespinNovContents.kpi3 <= '115.2')?'orange':(clothespinNovContents.kpi3 > '115.2' && clothespinNovContents.kpi3 < '144')?'yellow-7':(clothespinNovContents.kpi3 >= '144' && clothespinNovContents.kpi3 < '172.8')?'green':(clothespinNovContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi3}}
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
                              :color="(clothespinDecContents.kpi1 == null)?'grey-2':(clothespinDecContents.kpi1 >= '0' && clothespinDecContents.kpi1 <= '86.4')?'red':(clothespinDecContents.kpi1 > '86.4' && clothespinDecContents.kpi1 <= '115.2')?'orange':(clothespinDecContents.kpi1 > '115.2' && clothespinDecContents.kpi1 < '144')?'yellow-7':(clothespinDecContents.kpi1 >= '144' && clothespinDecContents.kpi1 < '172.8')?'green':(clothespinDecContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi2 == null)?'grey-2':(clothespinDecContents.kpi2 >= '0' && clothespinDecContents.kpi2 <= '86.4')?'red':(clothespinDecContents.kpi2 > '86.4' && clothespinDecContents.kpi2 <= '115.2')?'orange':(clothespinDecContents.kpi2 > '115.2' && clothespinDecContents.kpi2 < '144')?'yellow-7':(clothespinDecContents.kpi2 >= '144' && clothespinDecContents.kpi2 < '172.8')?'green':(clothespinDecContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi3 == null)?'grey-2':(clothespinDecContents.kpi3 >= '0' && clothespinDecContents.kpi3 <= '86.4')?'red':(clothespinDecContents.kpi3 > '86.4' && clothespinDecContents.kpi3 <= '115.2')?'orange':(clothespinDecContents.kpi3 > '115.2' && clothespinDecContents.kpi3 < '144')?'yellow-7':(clothespinDecContents.kpi3 >= '144' && clothespinDecContents.kpi3 < '172.8')?'green':(clothespinDecContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi3}}
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi1 == null)?'grey-2':(clothespinJanContents.kpi1 >= '0' && clothespinJanContents.kpi1 <= '86.4')?'red':(clothespinJanContents.kpi1 > '86.4' && clothespinJanContents.kpi1 <= '115.2')?'orange':(clothespinJanContents.kpi1 > '115.2' && clothespinJanContents.kpi1 < '144')?'yellow-7':(clothespinJanContents.kpi1 >= '144' && clothespinJanContents.kpi1 < '172.8')?'green':(clothespinJanContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi2 == null)?'grey-2':(clothespinJanContents.kpi2 >= '0' && clothespinJanContents.kpi2 <= '86.4')?'red':(clothespinJanContents.kpi2 > '86.4' && clothespinJanContents.kpi2 <= '115.2')?'orange':(clothespinJanContents.kpi2 > '115.2' && clothespinJanContents.kpi2 < '144')?'yellow-7':(clothespinJanContents.kpi2 >= '144' && clothespinJanContents.kpi2 < '172.8')?'green':(clothespinJanContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi3 == null)?'grey-2':(clothespinJanContents.kpi3 >= '0' && clothespinJanContents.kpi3 <= '86.4')?'red':(clothespinJanContents.kpi3 > '86.4' && clothespinJanContents.kpi3 <= '115.2')?'orange':(clothespinJanContents.kpi3 > '115.2' && clothespinJanContents.kpi3 < '144')?'yellow-7':(clothespinJanContents.kpi3 >= '144' && clothespinJanContents.kpi3 < '172.8')?'green':(clothespinJanContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi3}}
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
                              :color="(clothespinFebContents.kpi1 == null)?'grey-2':(clothespinFebContents.kpi1 >= '0' && clothespinFebContents.kpi1 <= '86.4')?'red':(clothespinFebContents.kpi1 > '86.4' && clothespinFebContents.kpi1 <= '115.2')?'orange':(clothespinFebContents.kpi1 > '115.2' && clothespinFebContents.kpi1 < '144')?'yellow-7':(clothespinFebContents.kpi1 >= '144' && clothespinFebContents.kpi1 < '172.8')?'green':(clothespinFebContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi2 == null)?'grey-2':(clothespinFebContents.kpi2 >= '0' && clothespinFebContents.kpi2 <= '86.4')?'red':(clothespinFebContents.kpi2 > '86.4' && clothespinFebContents.kpi2 <= '115.2')?'orange':(clothespinFebContents.kpi2 > '115.2' && clothespinFebContents.kpi2 < '144')?'yellow-7':(clothespinFebContents.kpi2 >= '144' && clothespinFebContents.kpi2 < '172.8')?'green':(clothespinFebContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi3 == null)?'grey-2':(clothespinFebContents.kpi3 >= '0' && clothespinFebContents.kpi3 <= '86.4')?'red':(clothespinFebContents.kpi3 > '86.4' && clothespinFebContents.kpi3 <= '115.2')?'orange':(clothespinFebContents.kpi3 > '115.2' && clothespinFebContents.kpi3 < '144')?'yellow-7':(clothespinFebContents.kpi3 >= '144' && clothespinFebContents.kpi3 < '172.8')?'green':(clothespinFebContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi3}}
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
                              :color="(clothespinMarContents.kpi1 == null)?'grey-2':(clothespinMarContents.kpi1 >= '0' && clothespinMarContents.kpi1 <= '86.4')?'red':(clothespinMarContents.kpi1 > '86.4' && clothespinMarContents.kpi1 <= '115.2')?'orange':(clothespinMarContents.kpi1 > '115.2' && clothespinMarContents.kpi1 < '144')?'yellow-7':(clothespinMarContents.kpi1 >= '144' && clothespinMarContents.kpi1 < '172.8')?'green':(clothespinMarContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi2 == null)?'grey-2':(clothespinMarContents.kpi2 >= '0' && clothespinMarContents.kpi2 <= '86.4')?'red':(clothespinMarContents.kpi2 > '86.4' && clothespinMarContents.kpi2 <= '115.2')?'orange':(clothespinMarContents.kpi2 > '115.2' && clothespinMarContents.kpi2 < '144')?'yellow-7':(clothespinMarContents.kpi2 >= '144' && clothespinMarContents.kpi2 < '172.8')?'green':(clothespinMarContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi3 == null)?'grey-2':(clothespinMarContents.kpi3 >= '0' && clothespinMarContents.kpi3 <= '86.4')?'red':(clothespinMarContents.kpi3 > '86.4' && clothespinMarContents.kpi3 <= '115.2')?'orange':(clothespinMarContents.kpi3 > '115.2' && clothespinMarContents.kpi3 < '144')?'yellow-7':(clothespinMarContents.kpi3 >= '144' && clothespinMarContents.kpi3 < '172.8')?'green':(clothespinMarContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi3}}
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
                              :color="(clothespinAprContents.kpi1 == null)?'grey-2':(clothespinAprContents.kpi1 >= '0' && clothespinAprContents.kpi1 <= '86.4')?'red':(clothespinAprContents.kpi1 > '86.4' && clothespinAprContents.kpi1 <= '115.2')?'orange':(clothespinAprContents.kpi1 > '115.2' && clothespinAprContents.kpi1 < '144')?'yellow-7':(clothespinAprContents.kpi1 >= '144' && clothespinAprContents.kpi1 < '172.8')?'green':(clothespinAprContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi2 == null)?'grey-2':(clothespinAprContents.kpi2 >= '0' && clothespinAprContents.kpi2 <= '86.4')?'red':(clothespinAprContents.kpi2 > '86.4' && clothespinAprContents.kpi2 <= '115.2')?'orange':(clothespinAprContents.kpi2 > '115.2' && clothespinAprContents.kpi2 < '144')?'yellow-7':(clothespinAprContents.kpi2 >= '144' && clothespinAprContents.kpi2 < '172.8')?'green':(clothespinAprContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi3 == null)?'grey-2':(clothespinAprContents.kpi3 >= '0' && clothespinAprContents.kpi3 <= '86.4')?'red':(clothespinAprContents.kpi3 > '86.4' && clothespinAprContents.kpi3 <= '115.2')?'orange':(clothespinAprContents.kpi3 > '115.2' && clothespinAprContents.kpi3 < '144')?'yellow-7':(clothespinAprContents.kpi3 >= '144' && clothespinAprContents.kpi3 < '172.8')?'green':(clothespinAprContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi3}}
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
                              :color="(clothespinMayContents.kpi1 == null)?'grey-2':(clothespinMayContents.kpi1 >= '0' && clothespinMayContents.kpi1 <= '86.4')?'red':(clothespinMayContents.kpi1 > '86.4' && clothespinMayContents.kpi1 <= '115.2')?'orange':(clothespinMayContents.kpi1 > '115.2' && clothespinMayContents.kpi1 < '144')?'yellow-7':(clothespinMayContents.kpi1 >= '144' && clothespinMayContents.kpi1 < '172.8')?'green':(clothespinMayContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi2 == null)?'grey-2':(clothespinMayContents.kpi2 >= '0' && clothespinMayContents.kpi2 <= '86.4')?'red':(clothespinMayContents.kpi2 > '86.4' && clothespinMayContents.kpi2 <= '115.2')?'orange':(clothespinMayContents.kpi2 > '115.2' && clothespinMayContents.kpi2 < '144')?'yellow-7':(clothespinMayContents.kpi2 >= '144' && clothespinMayContents.kpi2 < '172.8')?'green':(clothespinMayContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi3 == null)?'grey-2':(clothespinMayContents.kpi3 >= '0' && clothespinMayContents.kpi3 <= '86.4')?'red':(clothespinMayContents.kpi3 > '86.4' && clothespinMayContents.kpi3 <= '115.2')?'orange':(clothespinMayContents.kpi3 > '115.2' && clothespinMayContents.kpi3 < '144')?'yellow-7':(clothespinMayContents.kpi3 >= '144' && clothespinMayContents.kpi3 < '172.8')?'green':(clothespinMayContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi3}}
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
                              :color="(clothespinJunContents.kpi1 == null)?'grey-2':(clothespinJunContents.kpi1 >= '0' && clothespinJunContents.kpi1 <= '86.4')?'red':(clothespinJunContents.kpi1 > '86.4' && clothespinJunContents.kpi1 <= '115.2')?'orange':(clothespinJunContents.kpi1 > '115.2' && clothespinJunContents.kpi1 < '144')?'yellow-7':(clothespinJunContents.kpi1 >= '144' && clothespinJunContents.kpi1 < '172.8')?'green':(clothespinJunContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi2 == null)?'grey-2':(clothespinJunContents.kpi2 >= '0' && clothespinJunContents.kpi2 <= '86.4')?'red':(clothespinJunContents.kpi2 > '86.4' && clothespinJunContents.kpi2 <= '115.2')?'orange':(clothespinJunContents.kpi2 > '115.2' && clothespinJunContents.kpi2 < '144')?'yellow-7':(clothespinJunContents.kpi2 >= '144' && clothespinJunContents.kpi2 < '172.8')?'green':(clothespinJunContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi3 == null)?'grey-2':(clothespinJunContents.kpi3 >= '0' && clothespinJunContents.kpi3 <= '86.4')?'red':(clothespinJunContents.kpi3 > '86.4' && clothespinJunContents.kpi3 <= '115.2')?'orange':(clothespinJunContents.kpi3 > '115.2' && clothespinJunContents.kpi3 < '144')?'yellow-7':(clothespinJunContents.kpi3 >= '144' && clothespinJunContents.kpi3 < '172.8')?'green':(clothespinJunContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi3}}
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
                              :color="(clothespinJulContents.kpi1 == null)?'grey-2':(clothespinJulContents.kpi1 >= '0' && clothespinJulContents.kpi1 <= '86.4')?'red':(clothespinJulContents.kpi1 > '86.4' && clothespinJulContents.kpi1 <= '115.2')?'orange':(clothespinJulContents.kpi1 > '115.2' && clothespinJulContents.kpi1 < '144')?'yellow-7':(clothespinJulContents.kpi1 >= '144' && clothespinJulContents.kpi1 < '172.8')?'green':(clothespinJulContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi2 == null)?'grey-2':(clothespinJulContents.kpi2 >= '0' && clothespinJulContents.kpi2 <= '86.4')?'red':(clothespinJulContents.kpi2 > '86.4' && clothespinJulContents.kpi2 <= '115.2')?'orange':(clothespinJulContents.kpi2 > '115.2' && clothespinJulContents.kpi2 < '144')?'yellow-7':(clothespinJulContents.kpi2 >= '144' && clothespinJulContents.kpi2 < '172.8')?'green':(clothespinJulContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi3 == null)?'grey-2':(clothespinJulContents.kpi3 >= '0' && clothespinJulContents.kpi3 <= '86.4')?'red':(clothespinJulContents.kpi3 > '86.4' && clothespinJulContents.kpi3 <= '115.2')?'orange':(clothespinJulContents.kpi3 > '115.2' && clothespinJulContents.kpi3 < '144')?'yellow-7':(clothespinJulContents.kpi3 >= '144' && clothespinJulContents.kpi3 < '172.8')?'green':(clothespinJulContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi3}}
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
                              :color="(clothespinAugContents.kpi1 == null)?'grey-2':(clothespinAugContents.kpi1 >= '0' && clothespinAugContents.kpi1 <= '86.4')?'red':(clothespinAugContents.kpi1 > '86.4' && clothespinAugContents.kpi1 <= '115.2')?'orange':(clothespinAugContents.kpi1 > '115.2' && clothespinAugContents.kpi1 < '144')?'yellow-7':(clothespinAugContents.kpi1 >= '144' && clothespinAugContents.kpi1 < '172.8')?'green':(clothespinAugContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi2 == null)?'grey-2':(clothespinAugContents.kpi2 >= '0' && clothespinAugContents.kpi2 <= '86.4')?'red':(clothespinAugContents.kpi2 > '86.4' && clothespinAugContents.kpi2 <= '115.2')?'orange':(clothespinAugContents.kpi2 > '115.2' && clothespinAugContents.kpi2 < '144')?'yellow-7':(clothespinAugContents.kpi2 >= '144' && clothespinAugContents.kpi2 < '172.8')?'green':(clothespinAugContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi3 == null)?'grey-2':(clothespinAugContents.kpi3 >= '0' && clothespinAugContents.kpi3 <= '86.4')?'red':(clothespinAugContents.kpi3 > '86.4' && clothespinAugContents.kpi3 <= '115.2')?'orange':(clothespinAugContents.kpi3 > '115.2' && clothespinAugContents.kpi3 < '144')?'yellow-7':(clothespinAugContents.kpi3 >= '144' && clothespinAugContents.kpi3 < '172.8')?'green':(clothespinAugContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi3}}
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
                              :color="(clothespinSepContents.kpi1 == null)?'grey-2':(clothespinSepContents.kpi1 >= '0' && clothespinSepContents.kpi1 <= '86.4')?'red':(clothespinSepContents.kpi1 > '86.4' && clothespinSepContents.kpi1 <= '115.2')?'orange':(clothespinSepContents.kpi1 > '115.2' && clothespinSepContents.kpi1 < '144')?'yellow-7':(clothespinSepContents.kpi1 >= '144' && clothespinSepContents.kpi1 < '172.8')?'green':(clothespinSepContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi2 == null)?'grey-2':(clothespinSepContents.kpi2 >= '0' && clothespinSepContents.kpi2 <= '86.4')?'red':(clothespinSepContents.kpi2 > '86.4' && clothespinSepContents.kpi2 <= '115.2')?'orange':(clothespinSepContents.kpi2 > '115.2' && clothespinSepContents.kpi2 < '144')?'yellow-7':(clothespinSepContents.kpi2 >= '144' && clothespinSepContents.kpi2 < '172.8')?'green':(clothespinSepContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi3 == null)?'grey-2':(clothespinSepContents.kpi3 >= '0' && clothespinSepContents.kpi3 <= '86.4')?'red':(clothespinSepContents.kpi3 > '86.4' && clothespinSepContents.kpi3 <= '115.2')?'orange':(clothespinSepContents.kpi3 > '115.2' && clothespinSepContents.kpi3 < '144')?'yellow-7':(clothespinSepContents.kpi3 >= '144' && clothespinSepContents.kpi3 < '172.8')?'green':(clothespinSepContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi3}}
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
                              :color="(clothespinOctContents.kpi1 == null)?'grey-2':(clothespinOctContents.kpi1 >= '0' && clothespinOctContents.kpi1 <= '86.4')?'red':(clothespinOctContents.kpi1 > '86.4' && clothespinOctContents.kpi1 <= '115.2')?'orange':(clothespinOctContents.kpi1 > '115.2' && clothespinOctContents.kpi1 < '144')?'yellow-7':(clothespinOctContents.kpi1 >= '144' && clothespinOctContents.kpi1 < '172.8')?'green':(clothespinOctContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi2 == null)?'grey-2':(clothespinOctContents.kpi2 >= '0' && clothespinOctContents.kpi2 <= '86.4')?'red':(clothespinOctContents.kpi2 > '86.4' && clothespinOctContents.kpi2 <= '115.2')?'orange':(clothespinOctContents.kpi2 > '115.2' && clothespinOctContents.kpi2 < '144')?'yellow-7':(clothespinOctContents.kpi2 >= '144' && clothespinOctContents.kpi2 < '172.8')?'green':(clothespinOctContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi3 == null)?'grey-2':(clothespinOctContents.kpi3 >= '0' && clothespinOctContents.kpi3 <= '86.4')?'red':(clothespinOctContents.kpi3 > '86.4' && clothespinOctContents.kpi3 <= '115.2')?'orange':(clothespinOctContents.kpi3 > '115.2' && clothespinOctContents.kpi3 < '144')?'yellow-7':(clothespinOctContents.kpi3 >= '144' && clothespinOctContents.kpi3 < '172.8')?'green':(clothespinOctContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi3}}
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
                              :color="(clothespinNovContents.kpi1 == null)?'grey-2':(clothespinNovContents.kpi1 >= '0' && clothespinNovContents.kpi1 <= '86.4')?'red':(clothespinNovContents.kpi1 > '86.4' && clothespinNovContents.kpi1 <= '115.2')?'orange':(clothespinNovContents.kpi1 > '115.2' && clothespinNovContents.kpi1 < '144')?'yellow-7':(clothespinNovContents.kpi1 >= '144' && clothespinNovContents.kpi1 < '172.8')?'green':(clothespinNovContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi2 == null)?'grey-2':(clothespinNovContents.kpi2 >= '0' && clothespinNovContents.kpi2 <= '86.4')?'red':(clothespinNovContents.kpi2 > '86.4' && clothespinNovContents.kpi2 <= '115.2')?'orange':(clothespinNovContents.kpi2 > '115.2' && clothespinNovContents.kpi2 < '144')?'yellow-7':(clothespinNovContents.kpi2 >= '144' && clothespinNovContents.kpi2 < '172.8')?'green':(clothespinNovContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi3 == null)?'grey-2':(clothespinNovContents.kpi3 >= '0' && clothespinNovContents.kpi3 <= '86.4')?'red':(clothespinNovContents.kpi3 > '86.4' && clothespinNovContents.kpi3 <= '115.2')?'orange':(clothespinNovContents.kpi3 > '115.2' && clothespinNovContents.kpi3 < '144')?'yellow-7':(clothespinNovContents.kpi3 >= '144' && clothespinNovContents.kpi3 < '172.8')?'green':(clothespinNovContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi3}}
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
                              :color="(clothespinDecContents.kpi1 == null)?'grey-2':(clothespinDecContents.kpi1 >= '0' && clothespinDecContents.kpi1 <= '86.4')?'red':(clothespinDecContents.kpi1 > '86.4' && clothespinDecContents.kpi1 <= '115.2')?'orange':(clothespinDecContents.kpi1 > '115.2' && clothespinDecContents.kpi1 < '144')?'yellow-7':(clothespinDecContents.kpi1 >= '144' && clothespinDecContents.kpi1 < '172.8')?'green':(clothespinDecContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi2 == null)?'grey-2':(clothespinDecContents.kpi2 >= '0' && clothespinDecContents.kpi2 <= '86.4')?'red':(clothespinDecContents.kpi2 > '86.4' && clothespinDecContents.kpi2 <= '115.2')?'orange':(clothespinDecContents.kpi2 > '115.2' && clothespinDecContents.kpi2 < '144')?'yellow-7':(clothespinDecContents.kpi2 >= '144' && clothespinDecContents.kpi2 < '172.8')?'green':(clothespinDecContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi3 == null)?'grey-2':(clothespinDecContents.kpi3 >= '0' && clothespinDecContents.kpi3 <= '86.4')?'red':(clothespinDecContents.kpi3 > '86.4' && clothespinDecContents.kpi3 <= '115.2')?'orange':(clothespinDecContents.kpi3 > '115.2' && clothespinDecContents.kpi3 < '144')?'yellow-7':(clothespinDecContents.kpi3 >= '144' && clothespinDecContents.kpi3 < '172.8')?'green':(clothespinDecContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi3}}
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi1 == null)?'grey-2':(clothespinJanContents.kpi1 >= '0' && clothespinJanContents.kpi1 <= '86.4')?'red':(clothespinJanContents.kpi1 > '86.4' && clothespinJanContents.kpi1 <= '115.2')?'orange':(clothespinJanContents.kpi1 > '115.2' && clothespinJanContents.kpi1 < '144')?'yellow-7':(clothespinJanContents.kpi1 >= '144' && clothespinJanContents.kpi1 < '172.8')?'green':(clothespinJanContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi2 == null)?'grey-2':(clothespinJanContents.kpi2 >= '0' && clothespinJanContents.kpi2 <= '86.4')?'red':(clothespinJanContents.kpi2 > '86.4' && clothespinJanContents.kpi2 <= '115.2')?'orange':(clothespinJanContents.kpi2 > '115.2' && clothespinJanContents.kpi2 < '144')?'yellow-7':(clothespinJanContents.kpi2 >= '144' && clothespinJanContents.kpi2 < '172.8')?'green':(clothespinJanContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi3 == null)?'grey-2':(clothespinJanContents.kpi3 >= '0' && clothespinJanContents.kpi3 <= '86.4')?'red':(clothespinJanContents.kpi3 > '86.4' && clothespinJanContents.kpi3 <= '115.2')?'orange':(clothespinJanContents.kpi3 > '115.2' && clothespinJanContents.kpi3 < '144')?'yellow-7':(clothespinJanContents.kpi3 >= '144' && clothespinJanContents.kpi3 < '172.8')?'green':(clothespinJanContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi3}}
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
                              :color="(clothespinFebContents.kpi1 == null)?'grey-2':(clothespinFebContents.kpi1 >= '0' && clothespinFebContents.kpi1 <= '86.4')?'red':(clothespinFebContents.kpi1 > '86.4' && clothespinFebContents.kpi1 <= '115.2')?'orange':(clothespinFebContents.kpi1 > '115.2' && clothespinFebContents.kpi1 < '144')?'yellow-7':(clothespinFebContents.kpi1 >= '144' && clothespinFebContents.kpi1 < '172.8')?'green':(clothespinFebContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi2 == null)?'grey-2':(clothespinFebContents.kpi2 >= '0' && clothespinFebContents.kpi2 <= '86.4')?'red':(clothespinFebContents.kpi2 > '86.4' && clothespinFebContents.kpi2 <= '115.2')?'orange':(clothespinFebContents.kpi2 > '115.2' && clothespinFebContents.kpi2 < '144')?'yellow-7':(clothespinFebContents.kpi2 >= '144' && clothespinFebContents.kpi2 < '172.8')?'green':(clothespinFebContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi3 == null)?'grey-2':(clothespinFebContents.kpi3 >= '0' && clothespinFebContents.kpi3 <= '86.4')?'red':(clothespinFebContents.kpi3 > '86.4' && clothespinFebContents.kpi3 <= '115.2')?'orange':(clothespinFebContents.kpi3 > '115.2' && clothespinFebContents.kpi3 < '144')?'yellow-7':(clothespinFebContents.kpi3 >= '144' && clothespinFebContents.kpi3 < '172.8')?'green':(clothespinFebContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi3}}
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
                              :color="(clothespinMarContents.kpi1 == null)?'grey-2':(clothespinMarContents.kpi1 >= '0' && clothespinMarContents.kpi1 <= '86.4')?'red':(clothespinMarContents.kpi1 > '86.4' && clothespinMarContents.kpi1 <= '115.2')?'orange':(clothespinMarContents.kpi1 > '115.2' && clothespinMarContents.kpi1 < '144')?'yellow-7':(clothespinMarContents.kpi1 >= '144' && clothespinMarContents.kpi1 < '172.8')?'green':(clothespinMarContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi2 == null)?'grey-2':(clothespinMarContents.kpi2 >= '0' && clothespinMarContents.kpi2 <= '86.4')?'red':(clothespinMarContents.kpi2 > '86.4' && clothespinMarContents.kpi2 <= '115.2')?'orange':(clothespinMarContents.kpi2 > '115.2' && clothespinMarContents.kpi2 < '144')?'yellow-7':(clothespinMarContents.kpi2 >= '144' && clothespinMarContents.kpi2 < '172.8')?'green':(clothespinMarContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi3 == null)?'grey-2':(clothespinMarContents.kpi3 >= '0' && clothespinMarContents.kpi3 <= '86.4')?'red':(clothespinMarContents.kpi3 > '86.4' && clothespinMarContents.kpi3 <= '115.2')?'orange':(clothespinMarContents.kpi3 > '115.2' && clothespinMarContents.kpi3 < '144')?'yellow-7':(clothespinMarContents.kpi3 >= '144' && clothespinMarContents.kpi3 < '172.8')?'green':(clothespinMarContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi3}}
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
                              :color="(clothespinAprContents.kpi1 == null)?'grey-2':(clothespinAprContents.kpi1 >= '0' && clothespinAprContents.kpi1 <= '86.4')?'red':(clothespinAprContents.kpi1 > '86.4' && clothespinAprContents.kpi1 <= '115.2')?'orange':(clothespinAprContents.kpi1 > '115.2' && clothespinAprContents.kpi1 < '144')?'yellow-7':(clothespinAprContents.kpi1 >= '144' && clothespinAprContents.kpi1 < '172.8')?'green':(clothespinAprContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi2 == null)?'grey-2':(clothespinAprContents.kpi2 >= '0' && clothespinAprContents.kpi2 <= '86.4')?'red':(clothespinAprContents.kpi2 > '86.4' && clothespinAprContents.kpi2 <= '115.2')?'orange':(clothespinAprContents.kpi2 > '115.2' && clothespinAprContents.kpi2 < '144')?'yellow-7':(clothespinAprContents.kpi2 >= '144' && clothespinAprContents.kpi2 < '172.8')?'green':(clothespinAprContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi3 == null)?'grey-2':(clothespinAprContents.kpi3 >= '0' && clothespinAprContents.kpi3 <= '86.4')?'red':(clothespinAprContents.kpi3 > '86.4' && clothespinAprContents.kpi3 <= '115.2')?'orange':(clothespinAprContents.kpi3 > '115.2' && clothespinAprContents.kpi3 < '144')?'yellow-7':(clothespinAprContents.kpi3 >= '144' && clothespinAprContents.kpi3 < '172.8')?'green':(clothespinAprContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi3}}
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
                              :color="(clothespinMayContents.kpi1 == null)?'grey-2':(clothespinMayContents.kpi1 >= '0' && clothespinMayContents.kpi1 <= '86.4')?'red':(clothespinMayContents.kpi1 > '86.4' && clothespinMayContents.kpi1 <= '115.2')?'orange':(clothespinMayContents.kpi1 > '115.2' && clothespinMayContents.kpi1 < '144')?'yellow-7':(clothespinMayContents.kpi1 >= '144' && clothespinMayContents.kpi1 < '172.8')?'green':(clothespinMayContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi2 == null)?'grey-2':(clothespinMayContents.kpi2 >= '0' && clothespinMayContents.kpi2 <= '86.4')?'red':(clothespinMayContents.kpi2 > '86.4' && clothespinMayContents.kpi2 <= '115.2')?'orange':(clothespinMayContents.kpi2 > '115.2' && clothespinMayContents.kpi2 < '144')?'yellow-7':(clothespinMayContents.kpi2 >= '144' && clothespinMayContents.kpi2 < '172.8')?'green':(clothespinMayContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi3 == null)?'grey-2':(clothespinMayContents.kpi3 >= '0' && clothespinMayContents.kpi3 <= '86.4')?'red':(clothespinMayContents.kpi3 > '86.4' && clothespinMayContents.kpi3 <= '115.2')?'orange':(clothespinMayContents.kpi3 > '115.2' && clothespinMayContents.kpi3 < '144')?'yellow-7':(clothespinMayContents.kpi3 >= '144' && clothespinMayContents.kpi3 < '172.8')?'green':(clothespinMayContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi3}}
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
                              :color="(clothespinJunContents.kpi1 == null)?'grey-2':(clothespinJunContents.kpi1 >= '0' && clothespinJunContents.kpi1 <= '86.4')?'red':(clothespinJunContents.kpi1 > '86.4' && clothespinJunContents.kpi1 <= '115.2')?'orange':(clothespinJunContents.kpi1 > '115.2' && clothespinJunContents.kpi1 < '144')?'yellow-7':(clothespinJunContents.kpi1 >= '144' && clothespinJunContents.kpi1 < '172.8')?'green':(clothespinJunContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi2 == null)?'grey-2':(clothespinJunContents.kpi2 >= '0' && clothespinJunContents.kpi2 <= '86.4')?'red':(clothespinJunContents.kpi2 > '86.4' && clothespinJunContents.kpi2 <= '115.2')?'orange':(clothespinJunContents.kpi2 > '115.2' && clothespinJunContents.kpi2 < '144')?'yellow-7':(clothespinJunContents.kpi2 >= '144' && clothespinJunContents.kpi2 < '172.8')?'green':(clothespinJunContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi3 == null)?'grey-2':(clothespinJunContents.kpi3 >= '0' && clothespinJunContents.kpi3 <= '86.4')?'red':(clothespinJunContents.kpi3 > '86.4' && clothespinJunContents.kpi3 <= '115.2')?'orange':(clothespinJunContents.kpi3 > '115.2' && clothespinJunContents.kpi3 < '144')?'yellow-7':(clothespinJunContents.kpi3 >= '144' && clothespinJunContents.kpi3 < '172.8')?'green':(clothespinJunContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi3}}
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
                              :color="(clothespinJulContents.kpi1 == null)?'grey-2':(clothespinJulContents.kpi1 >= '0' && clothespinJulContents.kpi1 <= '86.4')?'red':(clothespinJulContents.kpi1 > '86.4' && clothespinJulContents.kpi1 <= '115.2')?'orange':(clothespinJulContents.kpi1 > '115.2' && clothespinJulContents.kpi1 < '144')?'yellow-7':(clothespinJulContents.kpi1 >= '144' && clothespinJulContents.kpi1 < '172.8')?'green':(clothespinJulContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi2 == null)?'grey-2':(clothespinJulContents.kpi2 >= '0' && clothespinJulContents.kpi2 <= '86.4')?'red':(clothespinJulContents.kpi2 > '86.4' && clothespinJulContents.kpi2 <= '115.2')?'orange':(clothespinJulContents.kpi2 > '115.2' && clothespinJulContents.kpi2 < '144')?'yellow-7':(clothespinJulContents.kpi2 >= '144' && clothespinJulContents.kpi2 < '172.8')?'green':(clothespinJulContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi3 == null)?'grey-2':(clothespinJulContents.kpi3 >= '0' && clothespinJulContents.kpi3 <= '86.4')?'red':(clothespinJulContents.kpi3 > '86.4' && clothespinJulContents.kpi3 <= '115.2')?'orange':(clothespinJulContents.kpi3 > '115.2' && clothespinJulContents.kpi3 < '144')?'yellow-7':(clothespinJulContents.kpi3 >= '144' && clothespinJulContents.kpi3 < '172.8')?'green':(clothespinJulContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi3}}
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
                              :color="(clothespinAugContents.kpi1 == null)?'grey-2':(clothespinAugContents.kpi1 >= '0' && clothespinAugContents.kpi1 <= '86.4')?'red':(clothespinAugContents.kpi1 > '86.4' && clothespinAugContents.kpi1 <= '115.2')?'orange':(clothespinAugContents.kpi1 > '115.2' && clothespinAugContents.kpi1 < '144')?'yellow-7':(clothespinAugContents.kpi1 >= '144' && clothespinAugContents.kpi1 < '172.8')?'green':(clothespinAugContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi2 == null)?'grey-2':(clothespinAugContents.kpi2 >= '0' && clothespinAugContents.kpi2 <= '86.4')?'red':(clothespinAugContents.kpi2 > '86.4' && clothespinAugContents.kpi2 <= '115.2')?'orange':(clothespinAugContents.kpi2 > '115.2' && clothespinAugContents.kpi2 < '144')?'yellow-7':(clothespinAugContents.kpi2 >= '144' && clothespinAugContents.kpi2 < '172.8')?'green':(clothespinAugContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi3 == null)?'grey-2':(clothespinAugContents.kpi3 >= '0' && clothespinAugContents.kpi3 <= '86.4')?'red':(clothespinAugContents.kpi3 > '86.4' && clothespinAugContents.kpi3 <= '115.2')?'orange':(clothespinAugContents.kpi3 > '115.2' && clothespinAugContents.kpi3 < '144')?'yellow-7':(clothespinAugContents.kpi3 >= '144' && clothespinAugContents.kpi3 < '172.8')?'green':(clothespinAugContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi3}}
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
                              :color="(clothespinSepContents.kpi1 == null)?'grey-2':(clothespinSepContents.kpi1 >= '0' && clothespinSepContents.kpi1 <= '86.4')?'red':(clothespinSepContents.kpi1 > '86.4' && clothespinSepContents.kpi1 <= '115.2')?'orange':(clothespinSepContents.kpi1 > '115.2' && clothespinSepContents.kpi1 < '144')?'yellow-7':(clothespinSepContents.kpi1 >= '144' && clothespinSepContents.kpi1 < '172.8')?'green':(clothespinSepContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi2 == null)?'grey-2':(clothespinSepContents.kpi2 >= '0' && clothespinSepContents.kpi2 <= '86.4')?'red':(clothespinSepContents.kpi2 > '86.4' && clothespinSepContents.kpi2 <= '115.2')?'orange':(clothespinSepContents.kpi2 > '115.2' && clothespinSepContents.kpi2 < '144')?'yellow-7':(clothespinSepContents.kpi2 >= '144' && clothespinSepContents.kpi2 < '172.8')?'green':(clothespinSepContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi3 == null)?'grey-2':(clothespinSepContents.kpi3 >= '0' && clothespinSepContents.kpi3 <= '86.4')?'red':(clothespinSepContents.kpi3 > '86.4' && clothespinSepContents.kpi3 <= '115.2')?'orange':(clothespinSepContents.kpi3 > '115.2' && clothespinSepContents.kpi3 < '144')?'yellow-7':(clothespinSepContents.kpi3 >= '144' && clothespinSepContents.kpi3 < '172.8')?'green':(clothespinSepContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi3}}
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
                              :color="(clothespinOctContents.kpi1 == null)?'grey-2':(clothespinOctContents.kpi1 >= '0' && clothespinOctContents.kpi1 <= '86.4')?'red':(clothespinOctContents.kpi1 > '86.4' && clothespinOctContents.kpi1 <= '115.2')?'orange':(clothespinOctContents.kpi1 > '115.2' && clothespinOctContents.kpi1 < '144')?'yellow-7':(clothespinOctContents.kpi1 >= '144' && clothespinOctContents.kpi1 < '172.8')?'green':(clothespinOctContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi2 == null)?'grey-2':(clothespinOctContents.kpi2 >= '0' && clothespinOctContents.kpi2 <= '86.4')?'red':(clothespinOctContents.kpi2 > '86.4' && clothespinOctContents.kpi2 <= '115.2')?'orange':(clothespinOctContents.kpi2 > '115.2' && clothespinOctContents.kpi2 < '144')?'yellow-7':(clothespinOctContents.kpi2 >= '144' && clothespinOctContents.kpi2 < '172.8')?'green':(clothespinOctContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi3 == null)?'grey-2':(clothespinOctContents.kpi3 >= '0' && clothespinOctContents.kpi3 <= '86.4')?'red':(clothespinOctContents.kpi3 > '86.4' && clothespinOctContents.kpi3 <= '115.2')?'orange':(clothespinOctContents.kpi3 > '115.2' && clothespinOctContents.kpi3 < '144')?'yellow-7':(clothespinOctContents.kpi3 >= '144' && clothespinOctContents.kpi3 < '172.8')?'green':(clothespinOctContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi3}}
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
                              :color="(clothespinNovContents.kpi1 == null)?'grey-2':(clothespinNovContents.kpi1 >= '0' && clothespinNovContents.kpi1 <= '86.4')?'red':(clothespinNovContents.kpi1 > '86.4' && clothespinNovContents.kpi1 <= '115.2')?'orange':(clothespinNovContents.kpi1 > '115.2' && clothespinNovContents.kpi1 < '144')?'yellow-7':(clothespinNovContents.kpi1 >= '144' && clothespinNovContents.kpi1 < '172.8')?'green':(clothespinNovContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi2 == null)?'grey-2':(clothespinNovContents.kpi2 >= '0' && clothespinNovContents.kpi2 <= '86.4')?'red':(clothespinNovContents.kpi2 > '86.4' && clothespinNovContents.kpi2 <= '115.2')?'orange':(clothespinNovContents.kpi2 > '115.2' && clothespinNovContents.kpi2 < '144')?'yellow-7':(clothespinNovContents.kpi2 >= '144' && clothespinNovContents.kpi2 < '172.8')?'green':(clothespinNovContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi3 == null)?'grey-2':(clothespinNovContents.kpi3 >= '0' && clothespinNovContents.kpi3 <= '86.4')?'red':(clothespinNovContents.kpi3 > '86.4' && clothespinNovContents.kpi3 <= '115.2')?'orange':(clothespinNovContents.kpi3 > '115.2' && clothespinNovContents.kpi3 < '144')?'yellow-7':(clothespinNovContents.kpi3 >= '144' && clothespinNovContents.kpi3 < '172.8')?'green':(clothespinNovContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi3}}
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
                              :color="(clothespinDecContents.kpi1 == null)?'grey-2':(clothespinDecContents.kpi1 >= '0' && clothespinDecContents.kpi1 <= '86.4')?'red':(clothespinDecContents.kpi1 > '86.4' && clothespinDecContents.kpi1 <= '115.2')?'orange':(clothespinDecContents.kpi1 > '115.2' && clothespinDecContents.kpi1 < '144')?'yellow-7':(clothespinDecContents.kpi1 >= '144' && clothespinDecContents.kpi1 < '172.8')?'green':(clothespinDecContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi2 == null)?'grey-2':(clothespinDecContents.kpi2 >= '0' && clothespinDecContents.kpi2 <= '86.4')?'red':(clothespinDecContents.kpi2 > '86.4' && clothespinDecContents.kpi2 <= '115.2')?'orange':(clothespinDecContents.kpi2 > '115.2' && clothespinDecContents.kpi2 < '144')?'yellow-7':(clothespinDecContents.kpi2 >= '144' && clothespinDecContents.kpi2 < '172.8')?'green':(clothespinDecContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi3 == null)?'grey-2':(clothespinDecContents.kpi3 >= '0' && clothespinDecContents.kpi3 <= '86.4')?'red':(clothespinDecContents.kpi3 > '86.4' && clothespinDecContents.kpi3 <= '115.2')?'orange':(clothespinDecContents.kpi3 > '115.2' && clothespinDecContents.kpi3 < '144')?'yellow-7':(clothespinDecContents.kpi3 >= '144' && clothespinDecContents.kpi3 < '172.8')?'green':(clothespinDecContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi3}}
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi1 == null)?'grey-2':(clothespinJanContents.kpi1 >= '0' && clothespinJanContents.kpi1 <= '86.4')?'red':(clothespinJanContents.kpi1 > '86.4' && clothespinJanContents.kpi1 <= '115.2')?'orange':(clothespinJanContents.kpi1 > '115.2' && clothespinJanContents.kpi1 < '144')?'yellow-7':(clothespinJanContents.kpi1 >= '144' && clothespinJanContents.kpi1 < '172.8')?'green':(clothespinJanContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi2 == null)?'grey-2':(clothespinJanContents.kpi2 >= '0' && clothespinJanContents.kpi2 <= '86.4')?'red':(clothespinJanContents.kpi2 > '86.4' && clothespinJanContents.kpi2 <= '115.2')?'orange':(clothespinJanContents.kpi2 > '115.2' && clothespinJanContents.kpi2 < '144')?'yellow-7':(clothespinJanContents.kpi2 >= '144' && clothespinJanContents.kpi2 < '172.8')?'green':(clothespinJanContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi3 == null)?'grey-2':(clothespinJanContents.kpi3 >= '0' && clothespinJanContents.kpi3 <= '86.4')?'red':(clothespinJanContents.kpi3 > '86.4' && clothespinJanContents.kpi3 <= '115.2')?'orange':(clothespinJanContents.kpi3 > '115.2' && clothespinJanContents.kpi3 < '144')?'yellow-7':(clothespinJanContents.kpi3 >= '144' && clothespinJanContents.kpi3 < '172.8')?'green':(clothespinJanContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi3}}
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
                              :color="(clothespinFebContents.kpi1 == null)?'grey-2':(clothespinFebContents.kpi1 >= '0' && clothespinFebContents.kpi1 <= '86.4')?'red':(clothespinFebContents.kpi1 > '86.4' && clothespinFebContents.kpi1 <= '115.2')?'orange':(clothespinFebContents.kpi1 > '115.2' && clothespinFebContents.kpi1 < '144')?'yellow-7':(clothespinFebContents.kpi1 >= '144' && clothespinFebContents.kpi1 < '172.8')?'green':(clothespinFebContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi2 == null)?'grey-2':(clothespinFebContents.kpi2 >= '0' && clothespinFebContents.kpi2 <= '86.4')?'red':(clothespinFebContents.kpi2 > '86.4' && clothespinFebContents.kpi2 <= '115.2')?'orange':(clothespinFebContents.kpi2 > '115.2' && clothespinFebContents.kpi2 < '144')?'yellow-7':(clothespinFebContents.kpi2 >= '144' && clothespinFebContents.kpi2 < '172.8')?'green':(clothespinFebContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi3 == null)?'grey-2':(clothespinFebContents.kpi3 >= '0' && clothespinFebContents.kpi3 <= '86.4')?'red':(clothespinFebContents.kpi3 > '86.4' && clothespinFebContents.kpi3 <= '115.2')?'orange':(clothespinFebContents.kpi3 > '115.2' && clothespinFebContents.kpi3 < '144')?'yellow-7':(clothespinFebContents.kpi3 >= '144' && clothespinFebContents.kpi3 < '172.8')?'green':(clothespinFebContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi3}}
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
                              :color="(clothespinMarContents.kpi1 == null)?'grey-2':(clothespinMarContents.kpi1 >= '0' && clothespinMarContents.kpi1 <= '86.4')?'red':(clothespinMarContents.kpi1 > '86.4' && clothespinMarContents.kpi1 <= '115.2')?'orange':(clothespinMarContents.kpi1 > '115.2' && clothespinMarContents.kpi1 < '144')?'yellow-7':(clothespinMarContents.kpi1 >= '144' && clothespinMarContents.kpi1 < '172.8')?'green':(clothespinMarContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi2 == null)?'grey-2':(clothespinMarContents.kpi2 >= '0' && clothespinMarContents.kpi2 <= '86.4')?'red':(clothespinMarContents.kpi2 > '86.4' && clothespinMarContents.kpi2 <= '115.2')?'orange':(clothespinMarContents.kpi2 > '115.2' && clothespinMarContents.kpi2 < '144')?'yellow-7':(clothespinMarContents.kpi2 >= '144' && clothespinMarContents.kpi2 < '172.8')?'green':(clothespinMarContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi3 == null)?'grey-2':(clothespinMarContents.kpi3 >= '0' && clothespinMarContents.kpi3 <= '86.4')?'red':(clothespinMarContents.kpi3 > '86.4' && clothespinMarContents.kpi3 <= '115.2')?'orange':(clothespinMarContents.kpi3 > '115.2' && clothespinMarContents.kpi3 < '144')?'yellow-7':(clothespinMarContents.kpi3 >= '144' && clothespinMarContents.kpi3 < '172.8')?'green':(clothespinMarContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi3}}
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
                              :color="(clothespinAprContents.kpi1 == null)?'grey-2':(clothespinAprContents.kpi1 >= '0' && clothespinAprContents.kpi1 <= '86.4')?'red':(clothespinAprContents.kpi1 > '86.4' && clothespinAprContents.kpi1 <= '115.2')?'orange':(clothespinAprContents.kpi1 > '115.2' && clothespinAprContents.kpi1 < '144')?'yellow-7':(clothespinAprContents.kpi1 >= '144' && clothespinAprContents.kpi1 < '172.8')?'green':(clothespinAprContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi2 == null)?'grey-2':(clothespinAprContents.kpi2 >= '0' && clothespinAprContents.kpi2 <= '86.4')?'red':(clothespinAprContents.kpi2 > '86.4' && clothespinAprContents.kpi2 <= '115.2')?'orange':(clothespinAprContents.kpi2 > '115.2' && clothespinAprContents.kpi2 < '144')?'yellow-7':(clothespinAprContents.kpi2 >= '144' && clothespinAprContents.kpi2 < '172.8')?'green':(clothespinAprContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi3 == null)?'grey-2':(clothespinAprContents.kpi3 >= '0' && clothespinAprContents.kpi3 <= '86.4')?'red':(clothespinAprContents.kpi3 > '86.4' && clothespinAprContents.kpi3 <= '115.2')?'orange':(clothespinAprContents.kpi3 > '115.2' && clothespinAprContents.kpi3 < '144')?'yellow-7':(clothespinAprContents.kpi3 >= '144' && clothespinAprContents.kpi3 < '172.8')?'green':(clothespinAprContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi3}}
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
                              :color="(clothespinMayContents.kpi1 == null)?'grey-2':(clothespinMayContents.kpi1 >= '0' && clothespinMayContents.kpi1 <= '86.4')?'red':(clothespinMayContents.kpi1 > '86.4' && clothespinMayContents.kpi1 <= '115.2')?'orange':(clothespinMayContents.kpi1 > '115.2' && clothespinMayContents.kpi1 < '144')?'yellow-7':(clothespinMayContents.kpi1 >= '144' && clothespinMayContents.kpi1 < '172.8')?'green':(clothespinMayContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi2 == null)?'grey-2':(clothespinMayContents.kpi2 >= '0' && clothespinMayContents.kpi2 <= '86.4')?'red':(clothespinMayContents.kpi2 > '86.4' && clothespinMayContents.kpi2 <= '115.2')?'orange':(clothespinMayContents.kpi2 > '115.2' && clothespinMayContents.kpi2 < '144')?'yellow-7':(clothespinMayContents.kpi2 >= '144' && clothespinMayContents.kpi2 < '172.8')?'green':(clothespinMayContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi3 == null)?'grey-2':(clothespinMayContents.kpi3 >= '0' && clothespinMayContents.kpi3 <= '86.4')?'red':(clothespinMayContents.kpi3 > '86.4' && clothespinMayContents.kpi3 <= '115.2')?'orange':(clothespinMayContents.kpi3 > '115.2' && clothespinMayContents.kpi3 < '144')?'yellow-7':(clothespinMayContents.kpi3 >= '144' && clothespinMayContents.kpi3 < '172.8')?'green':(clothespinMayContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi3}}
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
                              :color="(clothespinJunContents.kpi1 == null)?'grey-2':(clothespinJunContents.kpi1 >= '0' && clothespinJunContents.kpi1 <= '86.4')?'red':(clothespinJunContents.kpi1 > '86.4' && clothespinJunContents.kpi1 <= '115.2')?'orange':(clothespinJunContents.kpi1 > '115.2' && clothespinJunContents.kpi1 < '144')?'yellow-7':(clothespinJunContents.kpi1 >= '144' && clothespinJunContents.kpi1 < '172.8')?'green':(clothespinJunContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi2 == null)?'grey-2':(clothespinJunContents.kpi2 >= '0' && clothespinJunContents.kpi2 <= '86.4')?'red':(clothespinJunContents.kpi2 > '86.4' && clothespinJunContents.kpi2 <= '115.2')?'orange':(clothespinJunContents.kpi2 > '115.2' && clothespinJunContents.kpi2 < '144')?'yellow-7':(clothespinJunContents.kpi2 >= '144' && clothespinJunContents.kpi2 < '172.8')?'green':(clothespinJunContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi3 == null)?'grey-2':(clothespinJunContents.kpi3 >= '0' && clothespinJunContents.kpi3 <= '86.4')?'red':(clothespinJunContents.kpi3 > '86.4' && clothespinJunContents.kpi3 <= '115.2')?'orange':(clothespinJunContents.kpi3 > '115.2' && clothespinJunContents.kpi3 < '144')?'yellow-7':(clothespinJunContents.kpi3 >= '144' && clothespinJunContents.kpi3 < '172.8')?'green':(clothespinJunContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi3}}
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
                              :color="(clothespinJulContents.kpi1 == null)?'grey-2':(clothespinJulContents.kpi1 >= '0' && clothespinJulContents.kpi1 <= '86.4')?'red':(clothespinJulContents.kpi1 > '86.4' && clothespinJulContents.kpi1 <= '115.2')?'orange':(clothespinJulContents.kpi1 > '115.2' && clothespinJulContents.kpi1 < '144')?'yellow-7':(clothespinJulContents.kpi1 >= '144' && clothespinJulContents.kpi1 < '172.8')?'green':(clothespinJulContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi2 == null)?'grey-2':(clothespinJulContents.kpi2 >= '0' && clothespinJulContents.kpi2 <= '86.4')?'red':(clothespinJulContents.kpi2 > '86.4' && clothespinJulContents.kpi2 <= '115.2')?'orange':(clothespinJulContents.kpi2 > '115.2' && clothespinJulContents.kpi2 < '144')?'yellow-7':(clothespinJulContents.kpi2 >= '144' && clothespinJulContents.kpi2 < '172.8')?'green':(clothespinJulContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi3 == null)?'grey-2':(clothespinJulContents.kpi3 >= '0' && clothespinJulContents.kpi3 <= '86.4')?'red':(clothespinJulContents.kpi3 > '86.4' && clothespinJulContents.kpi3 <= '115.2')?'orange':(clothespinJulContents.kpi3 > '115.2' && clothespinJulContents.kpi3 < '144')?'yellow-7':(clothespinJulContents.kpi3 >= '144' && clothespinJulContents.kpi3 < '172.8')?'green':(clothespinJulContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi3}}
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
                              :color="(clothespinAugContents.kpi1 == null)?'grey-2':(clothespinAugContents.kpi1 >= '0' && clothespinAugContents.kpi1 <= '86.4')?'red':(clothespinAugContents.kpi1 > '86.4' && clothespinAugContents.kpi1 <= '115.2')?'orange':(clothespinAugContents.kpi1 > '115.2' && clothespinAugContents.kpi1 < '144')?'yellow-7':(clothespinAugContents.kpi1 >= '144' && clothespinAugContents.kpi1 < '172.8')?'green':(clothespinAugContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi2 == null)?'grey-2':(clothespinAugContents.kpi2 >= '0' && clothespinAugContents.kpi2 <= '86.4')?'red':(clothespinAugContents.kpi2 > '86.4' && clothespinAugContents.kpi2 <= '115.2')?'orange':(clothespinAugContents.kpi2 > '115.2' && clothespinAugContents.kpi2 < '144')?'yellow-7':(clothespinAugContents.kpi2 >= '144' && clothespinAugContents.kpi2 < '172.8')?'green':(clothespinAugContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi3 == null)?'grey-2':(clothespinAugContents.kpi3 >= '0' && clothespinAugContents.kpi3 <= '86.4')?'red':(clothespinAugContents.kpi3 > '86.4' && clothespinAugContents.kpi3 <= '115.2')?'orange':(clothespinAugContents.kpi3 > '115.2' && clothespinAugContents.kpi3 < '144')?'yellow-7':(clothespinAugContents.kpi3 >= '144' && clothespinAugContents.kpi3 < '172.8')?'green':(clothespinAugContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi3}}
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
                              :color="(clothespinSepContents.kpi1 == null)?'grey-2':(clothespinSepContents.kpi1 >= '0' && clothespinSepContents.kpi1 <= '86.4')?'red':(clothespinSepContents.kpi1 > '86.4' && clothespinSepContents.kpi1 <= '115.2')?'orange':(clothespinSepContents.kpi1 > '115.2' && clothespinSepContents.kpi1 < '144')?'yellow-7':(clothespinSepContents.kpi1 >= '144' && clothespinSepContents.kpi1 < '172.8')?'green':(clothespinSepContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi2 == null)?'grey-2':(clothespinSepContents.kpi2 >= '0' && clothespinSepContents.kpi2 <= '86.4')?'red':(clothespinSepContents.kpi2 > '86.4' && clothespinSepContents.kpi2 <= '115.2')?'orange':(clothespinSepContents.kpi2 > '115.2' && clothespinSepContents.kpi2 < '144')?'yellow-7':(clothespinSepContents.kpi2 >= '144' && clothespinSepContents.kpi2 < '172.8')?'green':(clothespinSepContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi3 == null)?'grey-2':(clothespinSepContents.kpi3 >= '0' && clothespinSepContents.kpi3 <= '86.4')?'red':(clothespinSepContents.kpi3 > '86.4' && clothespinSepContents.kpi3 <= '115.2')?'orange':(clothespinSepContents.kpi3 > '115.2' && clothespinSepContents.kpi3 < '144')?'yellow-7':(clothespinSepContents.kpi3 >= '144' && clothespinSepContents.kpi3 < '172.8')?'green':(clothespinSepContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi3}}
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
                              :color="(clothespinOctContents.kpi1 == null)?'grey-2':(clothespinOctContents.kpi1 >= '0' && clothespinOctContents.kpi1 <= '86.4')?'red':(clothespinOctContents.kpi1 > '86.4' && clothespinOctContents.kpi1 <= '115.2')?'orange':(clothespinOctContents.kpi1 > '115.2' && clothespinOctContents.kpi1 < '144')?'yellow-7':(clothespinOctContents.kpi1 >= '144' && clothespinOctContents.kpi1 < '172.8')?'green':(clothespinOctContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi2 == null)?'grey-2':(clothespinOctContents.kpi2 >= '0' && clothespinOctContents.kpi2 <= '86.4')?'red':(clothespinOctContents.kpi2 > '86.4' && clothespinOctContents.kpi2 <= '115.2')?'orange':(clothespinOctContents.kpi2 > '115.2' && clothespinOctContents.kpi2 < '144')?'yellow-7':(clothespinOctContents.kpi2 >= '144' && clothespinOctContents.kpi2 < '172.8')?'green':(clothespinOctContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi3 == null)?'grey-2':(clothespinOctContents.kpi3 >= '0' && clothespinOctContents.kpi3 <= '86.4')?'red':(clothespinOctContents.kpi3 > '86.4' && clothespinOctContents.kpi3 <= '115.2')?'orange':(clothespinOctContents.kpi3 > '115.2' && clothespinOctContents.kpi3 < '144')?'yellow-7':(clothespinOctContents.kpi3 >= '144' && clothespinOctContents.kpi3 < '172.8')?'green':(clothespinOctContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi3}}
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
                              :color="(clothespinNovContents.kpi1 == null)?'grey-2':(clothespinNovContents.kpi1 >= '0' && clothespinNovContents.kpi1 <= '86.4')?'red':(clothespinNovContents.kpi1 > '86.4' && clothespinNovContents.kpi1 <= '115.2')?'orange':(clothespinNovContents.kpi1 > '115.2' && clothespinNovContents.kpi1 < '144')?'yellow-7':(clothespinNovContents.kpi1 >= '144' && clothespinNovContents.kpi1 < '172.8')?'green':(clothespinNovContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi2 == null)?'grey-2':(clothespinNovContents.kpi2 >= '0' && clothespinNovContents.kpi2 <= '86.4')?'red':(clothespinNovContents.kpi2 > '86.4' && clothespinNovContents.kpi2 <= '115.2')?'orange':(clothespinNovContents.kpi2 > '115.2' && clothespinNovContents.kpi2 < '144')?'yellow-7':(clothespinNovContents.kpi2 >= '144' && clothespinNovContents.kpi2 < '172.8')?'green':(clothespinNovContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi3 == null)?'grey-2':(clothespinNovContents.kpi3 >= '0' && clothespinNovContents.kpi3 <= '86.4')?'red':(clothespinNovContents.kpi3 > '86.4' && clothespinNovContents.kpi3 <= '115.2')?'orange':(clothespinNovContents.kpi3 > '115.2' && clothespinNovContents.kpi3 < '144')?'yellow-7':(clothespinNovContents.kpi3 >= '144' && clothespinNovContents.kpi3 < '172.8')?'green':(clothespinNovContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi3}}
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
                              :color="(clothespinDecContents.kpi1 == null)?'grey-2':(clothespinDecContents.kpi1 >= '0' && clothespinDecContents.kpi1 <= '86.4')?'red':(clothespinDecContents.kpi1 > '86.4' && clothespinDecContents.kpi1 <= '115.2')?'orange':(clothespinDecContents.kpi1 > '115.2' && clothespinDecContents.kpi1 < '144')?'yellow-7':(clothespinDecContents.kpi1 >= '144' && clothespinDecContents.kpi1 < '172.8')?'green':(clothespinDecContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi2 == null)?'grey-2':(clothespinDecContents.kpi2 >= '0' && clothespinDecContents.kpi2 <= '86.4')?'red':(clothespinDecContents.kpi2 > '86.4' && clothespinDecContents.kpi2 <= '115.2')?'orange':(clothespinDecContents.kpi2 > '115.2' && clothespinDecContents.kpi2 < '144')?'yellow-7':(clothespinDecContents.kpi2 >= '144' && clothespinDecContents.kpi2 < '172.8')?'green':(clothespinDecContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi3 == null)?'grey-2':(clothespinDecContents.kpi3 >= '0' && clothespinDecContents.kpi3 <= '86.4')?'red':(clothespinDecContents.kpi3 > '86.4' && clothespinDecContents.kpi3 <= '115.2')?'orange':(clothespinDecContents.kpi3 > '115.2' && clothespinDecContents.kpi3 < '144')?'yellow-7':(clothespinDecContents.kpi3 >= '144' && clothespinDecContents.kpi3 < '172.8')?'green':(clothespinDecContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi3}}
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
                        </q-item>
                        <q-separator/>
                        <q-item>
                          <q-item-section top>
                            <q-item-label class="q-mt-xs q-ml-sm" >January</q-item-label>
                          </q-item-section>
                          <q-item-section  top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi1 == null)?'grey-2':(clothespinJanContents.kpi1 >= '0' && clothespinJanContents.kpi1 <= '86.4')?'red':(clothespinJanContents.kpi1 > '86.4' && clothespinJanContents.kpi1 <= '115.2')?'orange':(clothespinJanContents.kpi1 > '115.2' && clothespinJanContents.kpi1 < '144')?'yellow-7':(clothespinJanContents.kpi1 >= '144' && clothespinJanContents.kpi1 < '172.8')?'green':(clothespinJanContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi2 == null)?'grey-2':(clothespinJanContents.kpi2 >= '0' && clothespinJanContents.kpi2 <= '86.4')?'red':(clothespinJanContents.kpi2 > '86.4' && clothespinJanContents.kpi2 <= '115.2')?'orange':(clothespinJanContents.kpi2 > '115.2' && clothespinJanContents.kpi2 < '144')?'yellow-7':(clothespinJanContents.kpi2 >= '144' && clothespinJanContents.kpi2 < '172.8')?'green':(clothespinJanContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJanContents.kpi3 == null)?'grey-2':(clothespinJanContents.kpi3 >= '0' && clothespinJanContents.kpi3 <= '86.4')?'red':(clothespinJanContents.kpi3 > '86.4' && clothespinJanContents.kpi3 <= '115.2')?'orange':(clothespinJanContents.kpi3 > '115.2' && clothespinJanContents.kpi3 < '144')?'yellow-7':(clothespinJanContents.kpi3 >= '144' && clothespinJanContents.kpi3 < '172.8')?'green':(clothespinJanContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJanContents.kpi3}}
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
                              :color="(clothespinFebContents.kpi1 == null)?'grey-2':(clothespinFebContents.kpi1 >= '0' && clothespinFebContents.kpi1 <= '86.4')?'red':(clothespinFebContents.kpi1 > '86.4' && clothespinFebContents.kpi1 <= '115.2')?'orange':(clothespinFebContents.kpi1 > '115.2' && clothespinFebContents.kpi1 < '144')?'yellow-7':(clothespinFebContents.kpi1 >= '144' && clothespinFebContents.kpi1 < '172.8')?'green':(clothespinFebContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi2 == null)?'grey-2':(clothespinFebContents.kpi2 >= '0' && clothespinFebContents.kpi2 <= '86.4')?'red':(clothespinFebContents.kpi2 > '86.4' && clothespinFebContents.kpi2 <= '115.2')?'orange':(clothespinFebContents.kpi2 > '115.2' && clothespinFebContents.kpi2 < '144')?'yellow-7':(clothespinFebContents.kpi2 >= '144' && clothespinFebContents.kpi2 < '172.8')?'green':(clothespinFebContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinFebContents.kpi3 == null)?'grey-2':(clothespinFebContents.kpi3 >= '0' && clothespinFebContents.kpi3 <= '86.4')?'red':(clothespinFebContents.kpi3 > '86.4' && clothespinFebContents.kpi3 <= '115.2')?'orange':(clothespinFebContents.kpi3 > '115.2' && clothespinFebContents.kpi3 < '144')?'yellow-7':(clothespinFebContents.kpi3 >= '144' && clothespinFebContents.kpi3 < '172.8')?'green':(clothespinFebContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinFebContents.kpi3}}
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
                              :color="(clothespinMarContents.kpi1 == null)?'grey-2':(clothespinMarContents.kpi1 >= '0' && clothespinMarContents.kpi1 <= '86.4')?'red':(clothespinMarContents.kpi1 > '86.4' && clothespinMarContents.kpi1 <= '115.2')?'orange':(clothespinMarContents.kpi1 > '115.2' && clothespinMarContents.kpi1 < '144')?'yellow-7':(clothespinMarContents.kpi1 >= '144' && clothespinMarContents.kpi1 < '172.8')?'green':(clothespinMarContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi2 == null)?'grey-2':(clothespinMarContents.kpi2 >= '0' && clothespinMarContents.kpi2 <= '86.4')?'red':(clothespinMarContents.kpi2 > '86.4' && clothespinMarContents.kpi2 <= '115.2')?'orange':(clothespinMarContents.kpi2 > '115.2' && clothespinMarContents.kpi2 < '144')?'yellow-7':(clothespinMarContents.kpi2 >= '144' && clothespinMarContents.kpi2 < '172.8')?'green':(clothespinMarContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMarContents.kpi3 == null)?'grey-2':(clothespinMarContents.kpi3 >= '0' && clothespinMarContents.kpi3 <= '86.4')?'red':(clothespinMarContents.kpi3 > '86.4' && clothespinMarContents.kpi3 <= '115.2')?'orange':(clothespinMarContents.kpi3 > '115.2' && clothespinMarContents.kpi3 < '144')?'yellow-7':(clothespinMarContents.kpi3 >= '144' && clothespinMarContents.kpi3 < '172.8')?'green':(clothespinMarContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMarContents.kpi3}}
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
                              :color="(clothespinAprContents.kpi1 == null)?'grey-2':(clothespinAprContents.kpi1 >= '0' && clothespinAprContents.kpi1 <= '86.4')?'red':(clothespinAprContents.kpi1 > '86.4' && clothespinAprContents.kpi1 <= '115.2')?'orange':(clothespinAprContents.kpi1 > '115.2' && clothespinAprContents.kpi1 < '144')?'yellow-7':(clothespinAprContents.kpi1 >= '144' && clothespinAprContents.kpi1 < '172.8')?'green':(clothespinAprContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi2 == null)?'grey-2':(clothespinAprContents.kpi2 >= '0' && clothespinAprContents.kpi2 <= '86.4')?'red':(clothespinAprContents.kpi2 > '86.4' && clothespinAprContents.kpi2 <= '115.2')?'orange':(clothespinAprContents.kpi2 > '115.2' && clothespinAprContents.kpi2 < '144')?'yellow-7':(clothespinAprContents.kpi2 >= '144' && clothespinAprContents.kpi2 < '172.8')?'green':(clothespinAprContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAprContents.kpi3 == null)?'grey-2':(clothespinAprContents.kpi3 >= '0' && clothespinAprContents.kpi3 <= '86.4')?'red':(clothespinAprContents.kpi3 > '86.4' && clothespinAprContents.kpi3 <= '115.2')?'orange':(clothespinAprContents.kpi3 > '115.2' && clothespinAprContents.kpi3 < '144')?'yellow-7':(clothespinAprContents.kpi3 >= '144' && clothespinAprContents.kpi3 < '172.8')?'green':(clothespinAprContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAprContents.kpi3}}
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
                              :color="(clothespinMayContents.kpi1 == null)?'grey-2':(clothespinMayContents.kpi1 >= '0' && clothespinMayContents.kpi1 <= '86.4')?'red':(clothespinMayContents.kpi1 > '86.4' && clothespinMayContents.kpi1 <= '115.2')?'orange':(clothespinMayContents.kpi1 > '115.2' && clothespinMayContents.kpi1 < '144')?'yellow-7':(clothespinMayContents.kpi1 >= '144' && clothespinMayContents.kpi1 < '172.8')?'green':(clothespinMayContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi2 == null)?'grey-2':(clothespinMayContents.kpi2 >= '0' && clothespinMayContents.kpi2 <= '86.4')?'red':(clothespinMayContents.kpi2 > '86.4' && clothespinMayContents.kpi2 <= '115.2')?'orange':(clothespinMayContents.kpi2 > '115.2' && clothespinMayContents.kpi2 < '144')?'yellow-7':(clothespinMayContents.kpi2 >= '144' && clothespinMayContents.kpi2 < '172.8')?'green':(clothespinMayContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinMayContents.kpi3 == null)?'grey-2':(clothespinMayContents.kpi3 >= '0' && clothespinMayContents.kpi3 <= '86.4')?'red':(clothespinMayContents.kpi3 > '86.4' && clothespinMayContents.kpi3 <= '115.2')?'orange':(clothespinMayContents.kpi3 > '115.2' && clothespinMayContents.kpi3 < '144')?'yellow-7':(clothespinMayContents.kpi3 >= '144' && clothespinMayContents.kpi3 < '172.8')?'green':(clothespinMayContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinMayContents.kpi3}}
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
                              :color="(clothespinJunContents.kpi1 == null)?'grey-2':(clothespinJunContents.kpi1 >= '0' && clothespinJunContents.kpi1 <= '86.4')?'red':(clothespinJunContents.kpi1 > '86.4' && clothespinJunContents.kpi1 <= '115.2')?'orange':(clothespinJunContents.kpi1 > '115.2' && clothespinJunContents.kpi1 < '144')?'yellow-7':(clothespinJunContents.kpi1 >= '144' && clothespinJunContents.kpi1 < '172.8')?'green':(clothespinJunContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi2 == null)?'grey-2':(clothespinJunContents.kpi2 >= '0' && clothespinJunContents.kpi2 <= '86.4')?'red':(clothespinJunContents.kpi2 > '86.4' && clothespinJunContents.kpi2 <= '115.2')?'orange':(clothespinJunContents.kpi2 > '115.2' && clothespinJunContents.kpi2 < '144')?'yellow-7':(clothespinJunContents.kpi2 >= '144' && clothespinJunContents.kpi2 < '172.8')?'green':(clothespinJunContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJunContents.kpi3 == null)?'grey-2':(clothespinJunContents.kpi3 >= '0' && clothespinJunContents.kpi3 <= '86.4')?'red':(clothespinJunContents.kpi3 > '86.4' && clothespinJunContents.kpi3 <= '115.2')?'orange':(clothespinJunContents.kpi3 > '115.2' && clothespinJunContents.kpi3 < '144')?'yellow-7':(clothespinJunContents.kpi3 >= '144' && clothespinJunContents.kpi3 < '172.8')?'green':(clothespinJunContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJunContents.kpi3}}
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
                              :color="(clothespinJulContents.kpi1 == null)?'grey-2':(clothespinJulContents.kpi1 >= '0' && clothespinJulContents.kpi1 <= '86.4')?'red':(clothespinJulContents.kpi1 > '86.4' && clothespinJulContents.kpi1 <= '115.2')?'orange':(clothespinJulContents.kpi1 > '115.2' && clothespinJulContents.kpi1 < '144')?'yellow-7':(clothespinJulContents.kpi1 >= '144' && clothespinJulContents.kpi1 < '172.8')?'green':(clothespinJulContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi2 == null)?'grey-2':(clothespinJulContents.kpi2 >= '0' && clothespinJulContents.kpi2 <= '86.4')?'red':(clothespinJulContents.kpi2 > '86.4' && clothespinJulContents.kpi2 <= '115.2')?'orange':(clothespinJulContents.kpi2 > '115.2' && clothespinJulContents.kpi2 < '144')?'yellow-7':(clothespinJulContents.kpi2 >= '144' && clothespinJulContents.kpi2 < '172.8')?'green':(clothespinJulContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinJulContents.kpi3 == null)?'grey-2':(clothespinJulContents.kpi3 >= '0' && clothespinJulContents.kpi3 <= '86.4')?'red':(clothespinJulContents.kpi3 > '86.4' && clothespinJulContents.kpi3 <= '115.2')?'orange':(clothespinJulContents.kpi3 > '115.2' && clothespinJulContents.kpi3 < '144')?'yellow-7':(clothespinJulContents.kpi3 >= '144' && clothespinJulContents.kpi3 < '172.8')?'green':(clothespinJulContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinJulContents.kpi3}}
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
                              :color="(clothespinAugContents.kpi1 == null)?'grey-2':(clothespinAugContents.kpi1 >= '0' && clothespinAugContents.kpi1 <= '86.4')?'red':(clothespinAugContents.kpi1 > '86.4' && clothespinAugContents.kpi1 <= '115.2')?'orange':(clothespinAugContents.kpi1 > '115.2' && clothespinAugContents.kpi1 < '144')?'yellow-7':(clothespinAugContents.kpi1 >= '144' && clothespinAugContents.kpi1 < '172.8')?'green':(clothespinAugContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi2 == null)?'grey-2':(clothespinAugContents.kpi2 >= '0' && clothespinAugContents.kpi2 <= '86.4')?'red':(clothespinAugContents.kpi2 > '86.4' && clothespinAugContents.kpi2 <= '115.2')?'orange':(clothespinAugContents.kpi2 > '115.2' && clothespinAugContents.kpi2 < '144')?'yellow-7':(clothespinAugContents.kpi2 >= '144' && clothespinAugContents.kpi2 < '172.8')?'green':(clothespinAugContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinAugContents.kpi3 == null)?'grey-2':(clothespinAugContents.kpi3 >= '0' && clothespinAugContents.kpi3 <= '86.4')?'red':(clothespinAugContents.kpi3 > '86.4' && clothespinAugContents.kpi3 <= '115.2')?'orange':(clothespinAugContents.kpi3 > '115.2' && clothespinAugContents.kpi3 < '144')?'yellow-7':(clothespinAugContents.kpi3 >= '144' && clothespinAugContents.kpi3 < '172.8')?'green':(clothespinAugContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinAugContents.kpi3}}
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
                              :color="(clothespinSepContents.kpi1 == null)?'grey-2':(clothespinSepContents.kpi1 >= '0' && clothespinSepContents.kpi1 <= '86.4')?'red':(clothespinSepContents.kpi1 > '86.4' && clothespinSepContents.kpi1 <= '115.2')?'orange':(clothespinSepContents.kpi1 > '115.2' && clothespinSepContents.kpi1 < '144')?'yellow-7':(clothespinSepContents.kpi1 >= '144' && clothespinSepContents.kpi1 < '172.8')?'green':(clothespinSepContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi2 == null)?'grey-2':(clothespinSepContents.kpi2 >= '0' && clothespinSepContents.kpi2 <= '86.4')?'red':(clothespinSepContents.kpi2 > '86.4' && clothespinSepContents.kpi2 <= '115.2')?'orange':(clothespinSepContents.kpi2 > '115.2' && clothespinSepContents.kpi2 < '144')?'yellow-7':(clothespinSepContents.kpi2 >= '144' && clothespinSepContents.kpi2 < '172.8')?'green':(clothespinSepContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinSepContents.kpi3 == null)?'grey-2':(clothespinSepContents.kpi3 >= '0' && clothespinSepContents.kpi3 <= '86.4')?'red':(clothespinSepContents.kpi3 > '86.4' && clothespinSepContents.kpi3 <= '115.2')?'orange':(clothespinSepContents.kpi3 > '115.2' && clothespinSepContents.kpi3 < '144')?'yellow-7':(clothespinSepContents.kpi3 >= '144' && clothespinSepContents.kpi3 < '172.8')?'green':(clothespinSepContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinSepContents.kpi3}}
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
                              :color="(clothespinOctContents.kpi1 == null)?'grey-2':(clothespinOctContents.kpi1 >= '0' && clothespinOctContents.kpi1 <= '86.4')?'red':(clothespinOctContents.kpi1 > '86.4' && clothespinOctContents.kpi1 <= '115.2')?'orange':(clothespinOctContents.kpi1 > '115.2' && clothespinOctContents.kpi1 < '144')?'yellow-7':(clothespinOctContents.kpi1 >= '144' && clothespinOctContents.kpi1 < '172.8')?'green':(clothespinOctContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi2 == null)?'grey-2':(clothespinOctContents.kpi2 >= '0' && clothespinOctContents.kpi2 <= '86.4')?'red':(clothespinOctContents.kpi2 > '86.4' && clothespinOctContents.kpi2 <= '115.2')?'orange':(clothespinOctContents.kpi2 > '115.2' && clothespinOctContents.kpi2 < '144')?'yellow-7':(clothespinOctContents.kpi2 >= '144' && clothespinOctContents.kpi2 < '172.8')?'green':(clothespinOctContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinOctContents.kpi3 == null)?'grey-2':(clothespinOctContents.kpi3 >= '0' && clothespinOctContents.kpi3 <= '86.4')?'red':(clothespinOctContents.kpi3 > '86.4' && clothespinOctContents.kpi3 <= '115.2')?'orange':(clothespinOctContents.kpi3 > '115.2' && clothespinOctContents.kpi3 < '144')?'yellow-7':(clothespinOctContents.kpi3 >= '144' && clothespinOctContents.kpi3 < '172.8')?'green':(clothespinOctContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinOctContents.kpi3}}
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
                              :color="(clothespinNovContents.kpi1 == null)?'grey-2':(clothespinNovContents.kpi1 >= '0' && clothespinNovContents.kpi1 <= '86.4')?'red':(clothespinNovContents.kpi1 > '86.4' && clothespinNovContents.kpi1 <= '115.2')?'orange':(clothespinNovContents.kpi1 > '115.2' && clothespinNovContents.kpi1 < '144')?'yellow-7':(clothespinNovContents.kpi1 >= '144' && clothespinNovContents.kpi1 < '172.8')?'green':(clothespinNovContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi2 == null)?'grey-2':(clothespinNovContents.kpi2 >= '0' && clothespinNovContents.kpi2 <= '86.4')?'red':(clothespinNovContents.kpi2 > '86.4' && clothespinNovContents.kpi2 <= '115.2')?'orange':(clothespinNovContents.kpi2 > '115.2' && clothespinNovContents.kpi2 < '144')?'yellow-7':(clothespinNovContents.kpi2 >= '144' && clothespinNovContents.kpi2 < '172.8')?'green':(clothespinNovContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinNovContents.kpi3 == null)?'grey-2':(clothespinNovContents.kpi3 >= '0' && clothespinNovContents.kpi3 <= '86.4')?'red':(clothespinNovContents.kpi3 > '86.4' && clothespinNovContents.kpi3 <= '115.2')?'orange':(clothespinNovContents.kpi3 > '115.2' && clothespinNovContents.kpi3 < '144')?'yellow-7':(clothespinNovContents.kpi3 >= '144' && clothespinNovContents.kpi3 < '172.8')?'green':(clothespinNovContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinNovContents.kpi3}}
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
                              :color="(clothespinDecContents.kpi1 == null)?'grey-2':(clothespinDecContents.kpi1 >= '0' && clothespinDecContents.kpi1 <= '86.4')?'red':(clothespinDecContents.kpi1 > '86.4' && clothespinDecContents.kpi1 <= '115.2')?'orange':(clothespinDecContents.kpi1 > '115.2' && clothespinDecContents.kpi1 < '144')?'yellow-7':(clothespinDecContents.kpi1 >= '144' && clothespinDecContents.kpi1 < '172.8')?'green':(clothespinDecContents.kpi1 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi1}}
                              <q-tooltip># Clients (Unique)</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi2 == null)?'grey-2':(clothespinDecContents.kpi2 >= '0' && clothespinDecContents.kpi2 <= '86.4')?'red':(clothespinDecContents.kpi2 > '86.4' && clothespinDecContents.kpi2 <= '115.2')?'orange':(clothespinDecContents.kpi2 > '115.2' && clothespinDecContents.kpi2 < '144')?'yellow-7':(clothespinDecContents.kpi2 >= '144' && clothespinDecContents.kpi2 < '172.8')?'green':(clothespinDecContents.kpi2 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi2}}
                              <q-tooltip># Contacts</q-tooltip>
                            </q-chip>     
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(clothespinDecContents.kpi3 == null)?'grey-2':(clothespinDecContents.kpi3 >= '0' && clothespinDecContents.kpi3 <= '86.4')?'red':(clothespinDecContents.kpi3 > '86.4' && clothespinDecContents.kpi3 <= '115.2')?'orange':(clothespinDecContents.kpi3 > '115.2' && clothespinDecContents.kpi3 < '144')?'yellow-7':(clothespinDecContents.kpi3 >= '144' && clothespinDecContents.kpi3 < '172.8')?'green':(clothespinDecContents.kpi3 >= '172.8'?'blue':'grey-2')"
                            >
                            {{clothespinDecContents.kpi3}}
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
              clothespinJanContent: {
                
              },
              clothespinJanContents : [],
              clothespinFebContent: {
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
              clothespinFebContents : [],
              clothespinMarContent: {
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
              clothespinMarContents : [],
              clothespinAprContent: {
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
              clothespinAprContents : [],
              clothespinMayContent: {
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
              clothespinMayContents : [],
              clothespinJunContent: {
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
              clothespinJunContents : [],
              clothespinJulContent: {
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
              clothespinJulContents : [],
              clothespinAugContent: {
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
              clothespinAugContents : [],
              clothespinSepContent: {
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
              clothespinSepContents : [],
              clothespinOctContent: {
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
              clothespinOctContents : [],
              clothespinNovContent: {
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
              clothespinNovContents : [],
              clothespinDecContent: {
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
              clothespinDecContents : []


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
                            {time_period: 'January', expenses: this.clothespinJanContents.expenses, revenues: this.clothespinJanContents.revenues},
                            {time_period: 'February', expenses: this.clothespinFebContents.expenses, revenues: this.clothespinFebContents.revenues},
                            {time_period: 'March', expenses: this.clothespinMarContents.expenses, revenues: this.clothespinMarContents.revenues},
                            {time_period: 'April', expenses: this.clothespinAprContents.expenses, revenues: this.clothespinAprContents.revenues},
                            {time_period: 'May', expenses: this.clothespinMayContents.expenses, revenues: this.clothespinMayContents.revenues},
                            {time_period: 'June', expenses: this.clothespinJunContents.expenses, revenues: this.clothespinJunContents.revenues},
                            {time_period: 'July', expenses: this.clothespinJulContents.expenses, revenues: this.clothespinJulContents.revenues},
                            {time_period: 'August', expenses: this.clothespinAugContents.expenses, revenues: this.clothespinAugContents.revenues},
                            {time_period: 'September', expenses: this.clothespinSepContents.expenses, revenues: this.clothespinSepContents.revenues},
                            {time_period: 'October', expenses: this.clothespinOctContents.expenses, revenues: this.clothespinOctContents.revenues},
                            {time_period: 'November', expenses: this.clothespinNovContents.expenses, revenues: this.clothespinNovContents.revenues},
                            {time_period: 'December',expenses: this.clothespinDecContents.expenses, revenues: this.clothespinDecContents.revenues }
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
                            {months: 'January', kpi1: this.clothespinJanContents.kpi1, kpi2: this.clothespinJanContents.kpi2, kpi3: this.clothespinJanContents.kpi3, uniqueVol: this.clothespinJanContents.uniqueVolunteers, volHours: this.clothespinJanContents.volunteerHours},
                            {months: 'February', kpi1: this.clothespinFebContents.kpi1, kpi2: this.clothespinFebContents.kpi2, kpi3: this.clothespinFebContents.kpi3, uniqueVol: this.clothespinFebContents.uniqueVolunteers, volHours: this.clothespinFebContents.volunteerHours},
                            {months: 'March', kpi1: this.clothespinMarContents.kpi1, kpi2: this.clothespinMarContents.kpi2, kpi3: this.clothespinMarContents.kpi3, uniqueVol: this.clothespinMarContents.uniqueVolunteers, volHours: this.clothespinMarContents.volunteerHours},
                            {months: 'April', kpi1: this.clothespinAprContents.kpi1, kpi2: this.clothespinAprContents.kpi2, kpi3: this.clothespinAprContents.kpi3, uniqueVol: this.clothespinAprContents.uniqueVolunteers, volHours: this.clothespinAprContents.volunteerHours},
                            {months: 'May', kpi1: this.clothespinMayContents.kpi1, kpi2: this.clothespinMayContents.kpi2, kpi3: this.clothespinMayContents.kpi3, uniqueVol: this.clothespinMayContents.uniqueVolunteers, volHours: this.clothespinMayContents.volunteerHours},
                            {months: 'June', kpi1: this.clothespinJunContents.kpi1, kpi2: this.clothespinJunContents.kpi2, kpi3: this.clothespinJunContents.kpi3, uniqueVol: this.clothespinJunContents.uniqueVolunteers, volHours: this.clothespinJunContents.volunteerHours},
                            {months: 'July', kpi1: this.clothespinJulContents.kpi1, kpi2: this.clothespinJulContents.kpi2, kpi3: this.clothespinJulContents.kpi3, uniqueVol: this.clothespinJulContents.uniqueVolunteers, volHours: this.clothespinJulContents.volunteerHours},
                            {months: 'August', kpi1: this.clothespinAugContents.kpi1, kpi2: this.clothespinAugContents.kpi2, kpi3: this.clothespinAugContents.kpi3, uniqueVol: this.clothespinAugContents.uniqueVolunteers, volHours: this.clothespinAugContents.volunteerHours},
                            {months: 'September', kpi1: this.clothespinSepContents.kpi1, kpi2: this.clothespinSepContents.kpi2, kpi3: this.clothespinSepContents.kpi3, uniqueVol: this.clothespinSepContents.uniqueVolunteers, volHours: this.clothespinSepContents.volunteerHours},
                            {months: 'October', kpi1: this.clothespinOctContents.kpi1, kpi2: this.clothespinOctContents.kpi2, kpi3: this.clothespinOctContents.kpi3, uniqueVol: this.clothespinOctContents.uniqueVolunteers, volHours: this.clothespinOctContents.volunteerHours},
                            {months: 'November', kpi1: this.clothespinNovContents.kpi1, kpi2: this.clothespinNovContents.kpi2, kpi3: this.clothespinNovContents.kpi3, uniqueVol: this.clothespinNovContents.uniqueVolunteers, volHours: this.clothespinNovContents.volunteerHours},
                            {months: 'December',kpi1: this.clothespinDecContents.kpi1, kpi2: this.clothespinDecContents.kpi2, kpi3: this.clothespinDecContents.kpi3, uniqueVol: this.clothespinDecContents.uniqueVolunteers, volHours: this.clothespinDecContents.volunteerHours},
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
                            data: [{value: this.clothespinJanContents.budgetUsage}],
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
                                {value: this.clothespinJanContents.perCategory1, name: this.clothespinJanContents.expenseCategory1},
                                {value: this.clothespinJanContents.perCategory2, name: this.clothespinJanContents.expenseCategory2},
                                {value: this.clothespinJanContents.perCategory3, name: this.clothespinJanContents.expenseCategory3},
                                {value: this.clothespinJanContents.perCategory4, name: this.clothespinJanContents.expenseCategory4},
                                {value: this.clothespinJanContents.perCategory5, name: this.clothespinJanContents.expenseCategory5},
                                {value: this.clothespinJanContents.perCategory6, name: this.clothespinJanContents.expenseCategory6}
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
                            data: [{value: this.clothespinFebContents.budgetUsage}],
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
                                {value: this.clothespinFebContents.perCategory1, name: this.clothespinFebContents.expenseCategory1},
                                {value: this.clothespinFebContents.perCategory2, name: this.clothespinFebContents.expenseCategory2},
                                {value: this.clothespinFebContents.perCategory3, name: this.clothespinFebContents.expenseCategory3},
                                {value: this.clothespinFebContents.perCategory4, name: this.clothespinFebContents.expenseCategory4},
                                {value: this.clothespinFebContents.perCategory5, name: this.clothespinFebContents.expenseCategory5},
                                {value: this.clothespinFebContents.perCategory6, name: this.clothespinFebContents.expenseCategory6}
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
                            data: [{value: this.clothespinMarContents.budgetUsage}],
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
                                {value: this.clothespinMarContents.perCategory1, name: this.clothespinMarContents.expenseCategory1},
                                {value: this.clothespinMarContents.perCategory2, name: this.clothespinMarContents.expenseCategory2},
                                {value: this.clothespinMarContents.perCategory3, name: this.clothespinMarContents.expenseCategory3},
                                {value: this.clothespinMarContents.perCategory4, name: this.clothespinMarContents.expenseCategory4},
                                {value: this.clothespinMarContents.perCategory5, name: this.clothespinMarContents.expenseCategory5},
                                {value: this.clothespinMarContents.perCategory6, name: this.clothespinMarContents.expenseCategory6}
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
                            data: [{value: this.clothespinAprContents.budgetUsage}],
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
                                {value: this.clothespinAprContents.perCategory1, name: this.clothespinAprContents.expenseCategory1},
                                {value: this.clothespinAprContents.perCategory2, name: this.clothespinAprContents.expenseCategory2},
                                {value: this.clothespinAprContents.perCategory3, name: this.clothespinAprContents.expenseCategory3},
                                {value: this.clothespinAprContents.perCategory4, name: this.clothespinAprContents.expenseCategory4},
                                {value: this.clothespinAprContents.perCategory5, name: this.clothespinAprContents.expenseCategory5},
                                {value: this.clothespinAprContents.perCategory6, name: this.clothespinAprContents.expenseCategory6}  
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
                            data: [{value: this.clothespinMayContents.budgetUsage}],
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
                                {value: this.clothespinMayContents.perCategory1, name: this.clothespinMayContents.expenseCategory1},
                                {value: this.clothespinMayContents.perCategory2, name: this.clothespinMayContents.expenseCategory2},
                                {value: this.clothespinMayContents.perCategory3, name: this.clothespinMayContents.expenseCategory3},
                                {value: this.clothespinMayContents.perCategory4, name: this.clothespinMayContents.expenseCategory4},
                                {value: this.clothespinMayContents.perCategory5, name: this.clothespinMayContents.expenseCategory5},
                                {value: this.clothespinMayContents.perCategory6, name: this.clothespinMayContents.expenseCategory6}  
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
                            data: [{value: this.clothespinJunContents.budgetUsage}],
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
                                {value: this.clothespinJunContents.perCategory1, name: this.clothespinJunContents.expenseCategory1},
                                {value: this.clothespinJunContents.perCategory2, name: this.clothespinJunContents.expenseCategory2},
                                {value: this.clothespinJunContents.perCategory3, name: this.clothespinJunContents.expenseCategory3},
                                {value: this.clothespinJunContents.perCategory4, name: this.clothespinJunContents.expenseCategory4},
                                {value: this.clothespinJunContents.perCategory5, name: this.clothespinJunContents.expenseCategory5},
                                {value: this.clothespinJunContents.perCategory6, name: this.clothespinJunContents.expenseCategory6}  
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
                            data: [{value: this.clothespinJulContents.budgetUsage}],
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
                                {value: this.clothespinJulContents.perCategory1, name: this.clothespinJulContents.expenseCategory1},
                                {value: this.clothespinJulContents.perCategory2, name: this.clothespinJulContents.expenseCategory2},
                                {value: this.clothespinJulContents.perCategory3, name: this.clothespinJulContents.expenseCategory3},
                                {value: this.clothespinJulContents.perCategory4, name: this.clothespinJulContents.expenseCategory4},
                                {value: this.clothespinJulContents.perCategory5, name: this.clothespinJulContents.expenseCategory5},
                                {value: this.clothespinJulContents.perCategory6, name: this.clothespinJulContents.expenseCategory6}  
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
                            data: [{value: this.clothespinAugContents.budgetUsage}],
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
                                {value: this.clothespinAugContents.perCategory1, name: this.clothespinAugContents.expenseCategory1},
                                {value: this.clothespinAugContents.perCategory2, name: this.clothespinAugContents.expenseCategory2},
                                {value: this.clothespinAugContents.perCategory3, name: this.clothespinAugContents.expenseCategory3},
                                {value: this.clothespinAugContents.perCategory4, name: this.clothespinAugContents.expenseCategory4},
                                {value: this.clothespinAugContents.perCategory5, name: this.clothespinAugContents.expenseCategory5},
                                {value: this.clothespinAugContents.perCategory6, name: this.clothespinAugContents.expenseCategory6}  
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
                            data: [{value: this.clothespinSepContents.budgetUsage}],
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
                                {value: this.clothespinSepContents.perCategory1, name: this.clothespinSepContents.expenseCategory1},
                                {value: this.clothespinSepContents.perCategory2, name: this.clothespinSepContents.expenseCategory2},
                                {value: this.clothespinSepContents.perCategory3, name: this.clothespinSepContents.expenseCategory3},
                                {value: this.clothespinSepContents.perCategory4, name: this.clothespinSepContents.expenseCategory4},
                                {value: this.clothespinSepContents.perCategory5, name: this.clothespinSepContents.expenseCategory5},
                                {value: this.clothespinSepContents.perCategory6, name: this.clothespinSepContents.expenseCategory6}  
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
                            data: [{value: this.clothespinOctContents.budgetUsage}],
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
                                {value: this.clothespinOctContents.perCategory1, name: this.clothespinOctContents.expenseCategory1},
                                {value: this.clothespinOctContents.perCategory2, name: this.clothespinOctContents.expenseCategory2},
                                {value: this.clothespinOctContents.perCategory3, name: this.clothespinOctContents.expenseCategory3},
                                {value: this.clothespinOctContents.perCategory4, name: this.clothespinOctContents.expenseCategory4},
                                {value: this.clothespinOctContents.perCategory5, name: this.clothespinOctContents.expenseCategory5},
                                {value: this.clothespinOctContents.perCategory6, name: this.clothespinOctContents.expenseCategory6}  
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
                            data: [{value: this.clothespinNovContents.budgetUsage}],
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
                                {value: this.clothespinNovContents.perCategory1, name: this.clothespinNovContents.expenseCategory1},
                                {value: this.clothespinNovContents.perCategory2, name: this.clothespinNovContents.expenseCategory2},
                                {value: this.clothespinNovContents.perCategory3, name: this.clothespinNovContents.expenseCategory3},
                                {value: this.clothespinNovContents.perCategory4, name: this.clothespinNovContents.expenseCategory4},
                                {value: this.clothespinNovContents.perCategory5, name: this.clothespinNovContents.expenseCategory5},
                                {value: this.clothespinNovContents.perCategory6, name: this.clothespinNovContents.expenseCategory6}  
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
                            data: [{value: this.clothespinDecContents.budgetUsage}],
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
                                {value: this.clothespinDecContents.perCategory1, name: this.clothespinDecContents.expenseCategory1},
                                {value: this.clothespinDecContents.perCategory2, name: this.clothespinDecContents.expenseCategory2},
                                {value: this.clothespinDecContents.perCategory3, name: this.clothespinDecContents.expenseCategory3},
                                {value: this.clothespinDecContents.perCategory4, name: this.clothespinDecContents.expenseCategory4},
                                {value: this.clothespinDecContents.perCategory5, name: this.clothespinDecContents.expenseCategory5},
                                {value: this.clothespinDecContents.perCategory6, name: this.clothespinDecContents.expenseCategory6}
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
            var docclothespinJanRef = db.collection("clothespin").doc("january");

            docclothespinJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.clothespinJanContents = doc.data();
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
            var docclothespinFebRef = db.collection("clothespin").doc("february");

            docclothespinFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.clothespinFebContents = doc.data();
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
            var docclothespinMarRef = db.collection("clothespin").doc("march");

            docclothespinMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.clothespinMarContents = doc.data();
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
            var docclothespinAprRef = db.collection("clothespin").doc("april");

            docclothespinAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.clothespinAprContents = doc.data();
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
            var docclothespinMayRef = db.collection("clothespin").doc("may");

            docclothespinMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.clothespinMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docclothespinJunRef = db.collection("clothespin").doc("june");

            docclothespinJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.clothespinJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docclothespinJulRef = db.collection("clothespin").doc("july");

            docclothespinJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.clothespinJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docclothespinAugRef = db.collection("clothespin").doc("august");

            docclothespinAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.clothespinAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docclothespinSepRef = db.collection("clothespin").doc("september");

            docclothespinSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.clothespinSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docclothespinOctRef = db.collection("clothespin").doc("october");

            docclothespinOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.clothespinOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docclothespinNovRef = db.collection("clothespin").doc("november");

            docclothespinNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.clothespinNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docclothespinDecRef = db.collection("clothespin").doc("december");

            docclothespinDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.clothespinDecContents = doc.data();
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
              return this.clothespinJanContents.expenses = getRealValue(this.clothespinJanContents.perCategory1) + getRealValue(this.clothespinJanContents.perCategory2) + getRealValue(this.clothespinJanContents.perCategory3) + getRealValue(this.clothespinJanContents.perCategory4) + getRealValue(this.clothespinJanContents.perCategory5) + getRealValue(this.clothespinJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.clothespinJanContents.budgetUsage = ((getRealValue(this.clothespinJanContents.expenses) / getRealValue(this.clothespinJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.clothespinFebContents.expenses = getRealValue(this.clothespinFebContents.perCategory1) + getRealValue(this.clothespinFebContents.perCategory2) + getRealValue(this.clothespinFebContents.perCategory3) + getRealValue(this.clothespinFebContents.perCategory4) + getRealValue(this.clothespinFebContents.perCategory5) + getRealValue(this.clothespinFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.clothespinFebContents.budgetUsage = (((getRealValue(this.clothespinFebContents.expenses) + getRealValue(this.clothespinJanContents.expenses)) / getRealValue(this.clothespinFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.clothespinMarContents.expenses = getRealValue(this.clothespinMarContents.perCategory1) + getRealValue(this.clothespinMarContents.perCategory2) + getRealValue(this.clothespinMarContents.perCategory3) + getRealValue(this.clothespinMarContents.perCategory4) + getRealValue(this.clothespinMarContents.perCategory5) + getRealValue(this.clothespinMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.clothespinMarContents.budgetUsage = (((getRealValue(this.clothespinMarContents.expenses) + getRealValue(this.clothespinFebContents.expenses) + getRealValue(this.clothespinJanContents.expenses)) / getRealValue(this.clothespinMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.clothespinAprContents.expenses = getRealValue(this.clothespinAprContents.perCategory1) + getRealValue(this.clothespinAprContents.perCategory2) + getRealValue(this.clothespinAprContents.perCategory3) + getRealValue(this.clothespinAprContents.perCategory4) + getRealValue(this.clothespinAprContents.perCategory5) + getRealValue(this.clothespinAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.clothespinAprContents.budgetUsage = (((getRealValue(this.clothespinAprContents.expenses) + getRealValue(this.clothespinMarContents.expenses) + getRealValue(this.clothespinFebContents.expenses) + getRealValue(this.clothespinJanContents.expenses)) / getRealValue(this.clothespinAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.clothespinMayContents.expenses = getRealValue(this.clothespinMayContents.perCategory1) + getRealValue(this.clothespinMayContents.perCategory2) + getRealValue(this.clothespinMayContents.perCategory3) + getRealValue(this.clothespinMayContents.perCategory4) + getRealValue(this.clothespinMayContents.perCategory5) + getRealValue(this.clothespinMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.clothespinMayContents.budgetUsage = (((getRealValue(this.clothespinMayContents.expenses) + getRealValue(this.clothespinAprContents.expenses) + getRealValue(this.clothespinMarContents.expenses) + getRealValue(this.clothespinFebContents.expenses) + getRealValue(this.clothespinJanContents.expenses)) / getRealValue(this.clothespinMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.clothespinJunContents.expenses = getRealValue(this.clothespinJunContents.perCategory1) + getRealValue(this.clothespinJunContents.perCategory2) + getRealValue(this.clothespinJunContents.perCategory3) + getRealValue(this.clothespinJunContents.perCategory4) + getRealValue(this.clothespinJunContents.perCategory5) + getRealValue(this.clothespinJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.clothespinJunContents.budgetUsage = (((getRealValue(this.clothespinJunContents.expenses) + getRealValue(this.clothespinMayContents.expenses) + getRealValue(this.clothespinAprContents.expenses) + getRealValue(this.clothespinMarContents.expenses) + getRealValue(this.clothespinFebContents.expenses) + getRealValue(this.clothespinJanContents.expenses)) / getRealValue(this.clothespinJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.clothespinJulContents.expenses = getRealValue(this.clothespinJulContents.perCategory1) + getRealValue(this.clothespinJulContents.perCategory2) + getRealValue(this.clothespinJulContents.perCategory3) + getRealValue(this.clothespinJulContents.perCategory4) + getRealValue(this.clothespinJulContents.perCategory5) + getRealValue(this.clothespinJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.clothespinJulContents.budgetUsage = (((getRealValue(this.clothespinJulContents.expenses) + getRealValue(this.clothespinJunContents.expenses) + getRealValue(this.clothespinMayContents.expenses) + getRealValue(this.clothespinAprContents.expenses) + getRealValue(this.clothespinMarContents.expenses) + getRealValue(this.clothespinFebContents.expenses) + getRealValue(this.clothespinJanContents.expenses)) / getRealValue(this.clothespinJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.clothespinAugContents.expenses = getRealValue(this.clothespinAugContents.perCategory1) + getRealValue(this.clothespinAugContents.perCategory2) + getRealValue(this.clothespinAugContents.perCategory3) + getRealValue(this.clothespinAugContents.perCategory4) + getRealValue(this.clothespinAugContents.perCategory5) + getRealValue(this.clothespinAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.clothespinAugContents.budgetUsage = (((getRealValue(this.clothespinAugContents.expenses) + getRealValue(this.clothespinJulContents.expenses) + getRealValue(this.clothespinJunContents.expenses) + getRealValue(this.clothespinMayContents.expenses) + getRealValue(this.clothespinAprContents.expenses) + getRealValue(this.clothespinMarContents.expenses) + getRealValue(this.clothespinFebContents.expenses) + getRealValue(this.clothespinJanContents.expenses)) / getRealValue(this.clothespinAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.clothespinSepContents.expenses = getRealValue(this.clothespinSepContents.perCategory1) + getRealValue(this.clothespinSepContents.perCategory2) + getRealValue(this.clothespinSepContents.perCategory3) + getRealValue(this.clothespinSepContents.perCategory4) + getRealValue(this.clothespinSepContents.perCategory5) + getRealValue(this.clothespinSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.clothespinSepContents.budgetUsage = (((getRealValue(this.clothespinSepContents.expenses) + getRealValue(this.clothespinAugContents.expenses) + getRealValue(this.clothespinJulContents.expenses) + getRealValue(this.clothespinJunContents.expenses) + getRealValue(this.clothespinMayContents.expenses) + getRealValue(this.clothespinAprContents.expenses) + getRealValue(this.clothespinMarContents.expenses) + getRealValue(this.clothespinFebContents.expenses) + getRealValue(this.clothespinJanContents.expenses)) / getRealValue(this.clothespinSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.clothespinOctContents.expenses = getRealValue(this.clothespinOctContents.perCategory1) + getRealValue(this.clothespinOctContents.perCategory2) + getRealValue(this.clothespinOctContents.perCategory3) + getRealValue(this.clothespinOctContents.perCategory4) + getRealValue(this.clothespinOctContents.perCategory5) + getRealValue(this.clothespinOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.clothespinOctContents.budgetUsage = (((getRealValue(this.clothespinOctContents.expenses) + getRealValue(this.clothespinSepContents.expenses) + getRealValue(this.clothespinAugContents.expenses) + getRealValue(this.clothespinJulContents.expenses) + getRealValue(this.clothespinJunContents.expenses) + getRealValue(this.clothespinMayContents.expenses) + getRealValue(this.clothespinAprContents.expenses) + getRealValue(this.clothespinMarContents.expenses) + getRealValue(this.clothespinFebContents.expenses) + getRealValue(this.clothespinJanContents.expenses)) / getRealValue(this.clothespinOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.clothespinNovContents.expenses = getRealValue(this.clothespinNovContents.perCategory1) + getRealValue(this.clothespinNovContents.perCategory2) + getRealValue(this.clothespinNovContents.perCategory3) + getRealValue(this.clothespinNovContents.perCategory4) + getRealValue(this.clothespinNovContents.perCategory5) + getRealValue(this.clothespinNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.clothespinNovContents.budgetUsage = (((getRealValue(this.clothespinNovContents.expenses) + getRealValue(this.clothespinOctContents.expenses) + getRealValue(this.clothespinSepContents.expenses) + getRealValue(this.clothespinAugContents.expenses) + getRealValue(this.clothespinJulContents.expenses) + getRealValue(this.clothespinJunContents.expenses) + getRealValue(this.clothespinMayContents.expenses) + getRealValue(this.clothespinAprContents.expenses) + getRealValue(this.clothespinMarContents.expenses) + getRealValue(this.clothespinFebContents.expenses) + getRealValue(this.clothespinJanContents.expenses)) / getRealValue(this.clothespinNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.clothespinDecContents.expenses = getRealValue(this.clothespinDecContents.perCategory1) + getRealValue(this.clothespinDecContents.perCategory2) + getRealValue(this.clothespinDecContents.perCategory3) + getRealValue(this.clothespinDecContents.perCategory4) + getRealValue(this.clothespinDecContents.perCategory5) + getRealValue(this.clothespinDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.clothespinDecContents.budgetUsage = (((getRealValue(this.clothespinDecContents.expenses) + getRealValue(this.clothespinNovContents.expenses) + getRealValue(this.clothespinOctContents.expenses) + getRealValue(this.clothespinSepContents.expenses) + getRealValue(this.clothespinAugContents.expenses) + getRealValue(this.clothespinJulContents.expenses) + getRealValue(this.clothespinJunContents.expenses) + getRealValue(this.clothespinMayContents.expenses) + getRealValue(this.clothespinAprContents.expenses) + getRealValue(this.clothespinMarContents.expenses) + getRealValue(this.clothespinFebContents.expenses) + getRealValue(this.clothespinJanContents.expenses)) / getRealValue(this.clothespinDecContents.actualBudget))*100).toFixed(2)
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
