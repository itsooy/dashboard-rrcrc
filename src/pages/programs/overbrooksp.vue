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
                                <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJanContents.kpi1 == null)?'grey-2':(overbrookSPJanContents.kpi1 >= '0' && overbrookSPJanContents.kpi1 <= '2.7')?'red':(overbrookSPJanContents.kpi1 > '2.7' && overbrookSPJanContents.kpi1 <= '3.6')?'orange':(overbrookSPJanContents.kpi1 > '3.6' && overbrookSPJanContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJanContents.kpi1 >= '4.5' && overbrookSPJanContents.kpi1 < '5.4')?'green':(overbrookSPJanContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJanContents.kpi2 == null)?'grey-2':(overbrookSPJanContents.kpi2 >= '0' && overbrookSPJanContents.kpi2 <= '119.4')?'red':(overbrookSPJanContents.kpi2 > '119.4' && overbrookSPJanContents.kpi2 <= '159.2')?'orange':(overbrookSPJanContents.kpi2 > '159.2' && overbrookSPJanContents.kpi2 < '199')?'yellow-7':(overbrookSPJanContents.kpi2 >= '199' && overbrookSPJanContents.kpi2 < '238.8')?'green':(overbrookSPJanContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPFebContents.kpi1 == null)?'grey-2':(overbrookSPFebContents.kpi1 >= '0' && overbrookSPFebContents.kpi1 <= '2.7')?'red':(overbrookSPFebContents.kpi1 > '2.7' && overbrookSPFebContents.kpi1 <= '3.6')?'orange':(overbrookSPFebContents.kpi1 > '3.6' && overbrookSPFebContents.kpi1 < '4.5')?'yellow-7':(overbrookSPFebContents.kpi1 >= '4.5' && overbrookSPFebContents.kpi1 < '5.4')?'green':(overbrookSPFebContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPFebContents.kpi2 == null)?'grey-2':(overbrookSPFebContents.kpi2 >= '0' && overbrookSPFebContents.kpi2 <= '119.4')?'red':(overbrookSPFebContents.kpi2 > '119.4' && overbrookSPFebContents.kpi2 <= '159.2')?'orange':(overbrookSPFebContents.kpi2 > '159.2' && overbrookSPFebContents.kpi2 < '199')?'yellow-7':(overbrookSPFebContents.kpi2 >= '199' && overbrookSPFebContents.kpi2 < '238.8')?'green':(overbrookSPFebContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMarContents.kpi1 == null)?'grey-2':(overbrookSPMarContents.kpi1 >= '0' && overbrookSPMarContents.kpi1 <= '2.7')?'red':(overbrookSPMarContents.kpi1 > '2.7' && overbrookSPMarContents.kpi1 <= '3.6')?'orange':(overbrookSPMarContents.kpi1 > '3.6' && overbrookSPMarContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMarContents.kpi1 >= '4.5' && overbrookSPMarContents.kpi1 < '5.4')?'green':(overbrookSPMarContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMarContents.kpi2 == null)?'grey-2':(overbrookSPMarContents.kpi2 >= '0' && overbrookSPMarContents.kpi2 <= '119.4')?'red':(overbrookSPMarContents.kpi2 > '119.4' && overbrookSPMarContents.kpi2 <= '159.2')?'orange':(overbrookSPMarContents.kpi2 > '159.2' && overbrookSPMarContents.kpi2 < '199')?'yellow-7':(overbrookSPMarContents.kpi2 >= '199' && overbrookSPMarContents.kpi2 < '238.8')?'green':(overbrookSPMarContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAprContents.kpi1 == null)?'grey-2':(overbrookSPAprContents.kpi1 >= '0' && overbrookSPAprContents.kpi1 <= '2.7')?'red':(overbrookSPAprContents.kpi1 > '2.7' && overbrookSPAprContents.kpi1 <= '3.6')?'orange':(overbrookSPAprContents.kpi1 > '3.6' && overbrookSPAprContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAprContents.kpi1 >= '4.5' && overbrookSPAprContents.kpi1 < '5.4')?'green':(overbrookSPAprContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAprContents.kpi2 == null)?'grey-2':(overbrookSPAprContents.kpi2 >= '0' && overbrookSPAprContents.kpi2 <= '119.4')?'red':(overbrookSPAprContents.kpi2 > '119.4' && overbrookSPAprContents.kpi2 <= '159.2')?'orange':(overbrookSPAprContents.kpi2 > '159.2' && overbrookSPAprContents.kpi2 < '199')?'yellow-7':(overbrookSPAprContents.kpi2 >= '199' && overbrookSPAprContents.kpi2 < '238.8')?'green':(overbrookSPAprContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMayContents.kpi1 == null)?'grey-2':(overbrookSPMayContents.kpi1 >= '0' && overbrookSPMayContents.kpi1 <= '2.7')?'red':(overbrookSPMayContents.kpi1 > '2.7' && overbrookSPMayContents.kpi1 <= '3.6')?'orange':(overbrookSPMayContents.kpi1 > '3.6' && overbrookSPMayContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMayContents.kpi1 >= '4.5' && overbrookSPMayContents.kpi1 < '5.4')?'green':(overbrookSPMayContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMayContents.kpi2 == null)?'grey-2':(overbrookSPMayContents.kpi2 >= '0' && overbrookSPMayContents.kpi2 <= '119.4')?'red':(overbrookSPMayContents.kpi2 > '119.4' && overbrookSPMayContents.kpi2 <= '159.2')?'orange':(overbrookSPMayContents.kpi2 > '159.2' && overbrookSPMayContents.kpi2 < '199')?'yellow-7':(overbrookSPMayContents.kpi2 >= '199' && overbrookSPMayContents.kpi2 < '238.8')?'green':(overbrookSPMayContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJunContents.kpi1 == null)?'grey-2':(overbrookSPJunContents.kpi1 >= '0' && overbrookSPJunContents.kpi1 <= '2.7')?'red':(overbrookSPJunContents.kpi1 > '2.7' && overbrookSPJunContents.kpi1 <= '3.6')?'orange':(overbrookSPJunContents.kpi1 > '3.6' && overbrookSPJunContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJunContents.kpi1 >= '4.5' && overbrookSPJunContents.kpi1 < '5.4')?'green':(overbrookSPJunContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJunContents.kpi2 == null)?'grey-2':(overbrookSPJunContents.kpi2 >= '0' && overbrookSPJunContents.kpi2 <= '119.4')?'red':(overbrookSPJunContents.kpi2 > '119.4' && overbrookSPJunContents.kpi2 <= '159.2')?'orange':(overbrookSPJunContents.kpi2 > '159.2' && overbrookSPJunContents.kpi2 < '199')?'yellow-7':(overbrookSPJunContents.kpi2 >= '199' && overbrookSPJunContents.kpi2 < '238.8')?'green':(overbrookSPJunContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJulContents.kpi1 == null)?'grey-2':(overbrookSPJulContents.kpi1 >= '0' && overbrookSPJulContents.kpi1 <= '2.7')?'red':(overbrookSPJulContents.kpi1 > '2.7' && overbrookSPJulContents.kpi1 <= '3.6')?'orange':(overbrookSPJulContents.kpi1 > '3.6' && overbrookSPJulContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJulContents.kpi1 >= '4.5' && overbrookSPJulContents.kpi1 < '5.4')?'green':(overbrookSPJulContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJulContents.kpi2 == null)?'grey-2':(overbrookSPJulContents.kpi2 >= '0' && overbrookSPJulContents.kpi2 <= '119.4')?'red':(overbrookSPJulContents.kpi2 > '119.4' && overbrookSPJulContents.kpi2 <= '159.2')?'orange':(overbrookSPJulContents.kpi2 > '159.2' && overbrookSPJulContents.kpi2 < '199')?'yellow-7':(overbrookSPJulContents.kpi2 >= '199' && overbrookSPJulContents.kpi2 < '238.8')?'green':(overbrookSPJulContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAugContents.kpi1 == null)?'grey-2':(overbrookSPAugContents.kpi1 >= '0' && overbrookSPAugContents.kpi1 <= '2.7')?'red':(overbrookSPAugContents.kpi1 > '2.7' && overbrookSPAugContents.kpi1 <= '3.6')?'orange':(overbrookSPAugContents.kpi1 > '3.6' && overbrookSPAugContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAugContents.kpi1 >= '4.5' && overbrookSPAugContents.kpi1 < '5.4')?'green':(overbrookSPAugContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAugContents.kpi2 == null)?'grey-2':(overbrookSPAugContents.kpi2 >= '0' && overbrookSPAugContents.kpi2 <= '119.4')?'red':(overbrookSPAugContents.kpi2 > '119.4' && overbrookSPAugContents.kpi2 <= '159.2')?'orange':(overbrookSPAugContents.kpi2 > '159.2' && overbrookSPAugContents.kpi2 < '199')?'yellow-7':(overbrookSPAugContents.kpi2 >= '199' && overbrookSPAugContents.kpi2 < '238.8')?'green':(overbrookSPAugContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPSepContents.kpi1 == null)?'grey-2':(overbrookSPSepContents.kpi1 >= '0' && overbrookSPSepContents.kpi1 <= '2.7')?'red':(overbrookSPSepContents.kpi1 > '2.7' && overbrookSPSepContents.kpi1 <= '3.6')?'orange':(overbrookSPSepContents.kpi1 > '3.6' && overbrookSPSepContents.kpi1 < '4.5')?'yellow-7':(overbrookSPSepContents.kpi1 >= '4.5' && overbrookSPSepContents.kpi1 < '5.4')?'green':(overbrookSPSepContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPSepContents.kpi2 == null)?'grey-2':(overbrookSPSepContents.kpi2 >= '0' && overbrookSPSepContents.kpi2 <= '119.4')?'red':(overbrookSPSepContents.kpi2 > '119.4' && overbrookSPSepContents.kpi2 <= '159.2')?'orange':(overbrookSPSepContents.kpi2 > '159.2' && overbrookSPSepContents.kpi2 < '199')?'yellow-7':(overbrookSPSepContents.kpi2 >= '199' && overbrookSPSepContents.kpi2 < '238.8')?'green':(overbrookSPSepContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPOctContents.kpi1 == null)?'grey-2':(overbrookSPOctContents.kpi1 >= '0' && overbrookSPOctContents.kpi1 <= '2.7')?'red':(overbrookSPOctContents.kpi1 > '2.7' && overbrookSPOctContents.kpi1 <= '3.6')?'orange':(overbrookSPOctContents.kpi1 > '3.6' && overbrookSPOctContents.kpi1 < '4.5')?'yellow-7':(overbrookSPOctContents.kpi1 >= '4.5' && overbrookSPOctContents.kpi1 < '5.4')?'green':(overbrookSPOctContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPOctContents.kpi2 == null)?'grey-2':(overbrookSPOctContents.kpi2 >= '0' && overbrookSPOctContents.kpi2 <= '119.4')?'red':(overbrookSPOctContents.kpi2 > '119.4' && overbrookSPOctContents.kpi2 <= '159.2')?'orange':(overbrookSPOctContents.kpi2 > '159.2' && overbrookSPOctContents.kpi2 < '199')?'yellow-7':(overbrookSPOctContents.kpi2 >= '199' && overbrookSPOctContents.kpi2 < '238.8')?'green':(overbrookSPOctContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPNovContents.kpi1 == null)?'grey-2':(overbrookSPNovContents.kpi1 >= '0' && overbrookSPNovContents.kpi1 <= '2.7')?'red':(overbrookSPNovContents.kpi1 > '2.7' && overbrookSPNovContents.kpi1 <= '3.6')?'orange':(overbrookSPNovContents.kpi1 > '3.6' && overbrookSPNovContents.kpi1 < '4.5')?'yellow-7':(overbrookSPNovContents.kpi1 >= '4.5' && overbrookSPNovContents.kpi1 < '5.4')?'green':(overbrookSPNovContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPNovContents.kpi2 == null)?'grey-2':(overbrookSPNovContents.kpi2 >= '0' && overbrookSPNovContents.kpi2 <= '119.4')?'red':(overbrookSPNovContents.kpi2 > '119.4' && overbrookSPNovContents.kpi2 <= '159.2')?'orange':(overbrookSPNovContents.kpi2 > '159.2' && overbrookSPNovContents.kpi2 < '199')?'yellow-7':(overbrookSPNovContents.kpi2 >= '199' && overbrookSPNovContents.kpi2 < '238.8')?'green':(overbrookSPNovContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPDecContents.kpi1 == null)?'grey-2':(overbrookSPDecContents.kpi1 >= '0' && overbrookSPDecContents.kpi1 <= '2.7')?'red':(overbrookSPDecContents.kpi1 > '2.7' && overbrookSPDecContents.kpi1 <= '3.6')?'orange':(overbrookSPDecContents.kpi1 > '3.6' && overbrookSPDecContents.kpi1 < '4.5')?'yellow-7':(overbrookSPDecContents.kpi1 >= '4.5' && overbrookSPDecContents.kpi1 < '5.4')?'green':(overbrookSPDecContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPDecContents.kpi2 == null)?'grey-2':(overbrookSPDecContents.kpi2 >= '0' && overbrookSPDecContents.kpi2 <= '119.4')?'red':(overbrookSPDecContents.kpi2 > '119.4' && overbrookSPDecContents.kpi2 <= '159.2')?'orange':(overbrookSPDecContents.kpi2 > '159.2' && overbrookSPDecContents.kpi2 < '199')?'yellow-7':(overbrookSPDecContents.kpi2 >= '199' && overbrookSPDecContents.kpi2 < '238.8')?'green':(overbrookSPDecContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                                <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJanContents.kpi1 == null)?'grey-2':(overbrookSPJanContents.kpi1 >= '0' && overbrookSPJanContents.kpi1 <= '2.7')?'red':(overbrookSPJanContents.kpi1 > '2.7' && overbrookSPJanContents.kpi1 <= '3.6')?'orange':(overbrookSPJanContents.kpi1 > '3.6' && overbrookSPJanContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJanContents.kpi1 >= '4.5' && overbrookSPJanContents.kpi1 < '5.4')?'green':(overbrookSPJanContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJanContents.kpi2 == null)?'grey-2':(overbrookSPJanContents.kpi2 >= '0' && overbrookSPJanContents.kpi2 <= '119.4')?'red':(overbrookSPJanContents.kpi2 > '119.4' && overbrookSPJanContents.kpi2 <= '159.2')?'orange':(overbrookSPJanContents.kpi2 > '159.2' && overbrookSPJanContents.kpi2 < '199')?'yellow-7':(overbrookSPJanContents.kpi2 >= '199' && overbrookSPJanContents.kpi2 < '238.8')?'green':(overbrookSPJanContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPFebContents.kpi1 == null)?'grey-2':(overbrookSPFebContents.kpi1 >= '0' && overbrookSPFebContents.kpi1 <= '2.7')?'red':(overbrookSPFebContents.kpi1 > '2.7' && overbrookSPFebContents.kpi1 <= '3.6')?'orange':(overbrookSPFebContents.kpi1 > '3.6' && overbrookSPFebContents.kpi1 < '4.5')?'yellow-7':(overbrookSPFebContents.kpi1 >= '4.5' && overbrookSPFebContents.kpi1 < '5.4')?'green':(overbrookSPFebContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPFebContents.kpi2 == null)?'grey-2':(overbrookSPFebContents.kpi2 >= '0' && overbrookSPFebContents.kpi2 <= '119.4')?'red':(overbrookSPFebContents.kpi2 > '119.4' && overbrookSPFebContents.kpi2 <= '159.2')?'orange':(overbrookSPFebContents.kpi2 > '159.2' && overbrookSPFebContents.kpi2 < '199')?'yellow-7':(overbrookSPFebContents.kpi2 >= '199' && overbrookSPFebContents.kpi2 < '238.8')?'green':(overbrookSPFebContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMarContents.kpi1 == null)?'grey-2':(overbrookSPMarContents.kpi1 >= '0' && overbrookSPMarContents.kpi1 <= '2.7')?'red':(overbrookSPMarContents.kpi1 > '2.7' && overbrookSPMarContents.kpi1 <= '3.6')?'orange':(overbrookSPMarContents.kpi1 > '3.6' && overbrookSPMarContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMarContents.kpi1 >= '4.5' && overbrookSPMarContents.kpi1 < '5.4')?'green':(overbrookSPMarContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMarContents.kpi2 == null)?'grey-2':(overbrookSPMarContents.kpi2 >= '0' && overbrookSPMarContents.kpi2 <= '119.4')?'red':(overbrookSPMarContents.kpi2 > '119.4' && overbrookSPMarContents.kpi2 <= '159.2')?'orange':(overbrookSPMarContents.kpi2 > '159.2' && overbrookSPMarContents.kpi2 < '199')?'yellow-7':(overbrookSPMarContents.kpi2 >= '199' && overbrookSPMarContents.kpi2 < '238.8')?'green':(overbrookSPMarContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAprContents.kpi1 == null)?'grey-2':(overbrookSPAprContents.kpi1 >= '0' && overbrookSPAprContents.kpi1 <= '2.7')?'red':(overbrookSPAprContents.kpi1 > '2.7' && overbrookSPAprContents.kpi1 <= '3.6')?'orange':(overbrookSPAprContents.kpi1 > '3.6' && overbrookSPAprContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAprContents.kpi1 >= '4.5' && overbrookSPAprContents.kpi1 < '5.4')?'green':(overbrookSPAprContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAprContents.kpi2 == null)?'grey-2':(overbrookSPAprContents.kpi2 >= '0' && overbrookSPAprContents.kpi2 <= '119.4')?'red':(overbrookSPAprContents.kpi2 > '119.4' && overbrookSPAprContents.kpi2 <= '159.2')?'orange':(overbrookSPAprContents.kpi2 > '159.2' && overbrookSPAprContents.kpi2 < '199')?'yellow-7':(overbrookSPAprContents.kpi2 >= '199' && overbrookSPAprContents.kpi2 < '238.8')?'green':(overbrookSPAprContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMayContents.kpi1 == null)?'grey-2':(overbrookSPMayContents.kpi1 >= '0' && overbrookSPMayContents.kpi1 <= '2.7')?'red':(overbrookSPMayContents.kpi1 > '2.7' && overbrookSPMayContents.kpi1 <= '3.6')?'orange':(overbrookSPMayContents.kpi1 > '3.6' && overbrookSPMayContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMayContents.kpi1 >= '4.5' && overbrookSPMayContents.kpi1 < '5.4')?'green':(overbrookSPMayContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMayContents.kpi2 == null)?'grey-2':(overbrookSPMayContents.kpi2 >= '0' && overbrookSPMayContents.kpi2 <= '119.4')?'red':(overbrookSPMayContents.kpi2 > '119.4' && overbrookSPMayContents.kpi2 <= '159.2')?'orange':(overbrookSPMayContents.kpi2 > '159.2' && overbrookSPMayContents.kpi2 < '199')?'yellow-7':(overbrookSPMayContents.kpi2 >= '199' && overbrookSPMayContents.kpi2 < '238.8')?'green':(overbrookSPMayContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJunContents.kpi1 == null)?'grey-2':(overbrookSPJunContents.kpi1 >= '0' && overbrookSPJunContents.kpi1 <= '2.7')?'red':(overbrookSPJunContents.kpi1 > '2.7' && overbrookSPJunContents.kpi1 <= '3.6')?'orange':(overbrookSPJunContents.kpi1 > '3.6' && overbrookSPJunContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJunContents.kpi1 >= '4.5' && overbrookSPJunContents.kpi1 < '5.4')?'green':(overbrookSPJunContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJunContents.kpi2 == null)?'grey-2':(overbrookSPJunContents.kpi2 >= '0' && overbrookSPJunContents.kpi2 <= '119.4')?'red':(overbrookSPJunContents.kpi2 > '119.4' && overbrookSPJunContents.kpi2 <= '159.2')?'orange':(overbrookSPJunContents.kpi2 > '159.2' && overbrookSPJunContents.kpi2 < '199')?'yellow-7':(overbrookSPJunContents.kpi2 >= '199' && overbrookSPJunContents.kpi2 < '238.8')?'green':(overbrookSPJunContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJulContents.kpi1 == null)?'grey-2':(overbrookSPJulContents.kpi1 >= '0' && overbrookSPJulContents.kpi1 <= '2.7')?'red':(overbrookSPJulContents.kpi1 > '2.7' && overbrookSPJulContents.kpi1 <= '3.6')?'orange':(overbrookSPJulContents.kpi1 > '3.6' && overbrookSPJulContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJulContents.kpi1 >= '4.5' && overbrookSPJulContents.kpi1 < '5.4')?'green':(overbrookSPJulContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJulContents.kpi2 == null)?'grey-2':(overbrookSPJulContents.kpi2 >= '0' && overbrookSPJulContents.kpi2 <= '119.4')?'red':(overbrookSPJulContents.kpi2 > '119.4' && overbrookSPJulContents.kpi2 <= '159.2')?'orange':(overbrookSPJulContents.kpi2 > '159.2' && overbrookSPJulContents.kpi2 < '199')?'yellow-7':(overbrookSPJulContents.kpi2 >= '199' && overbrookSPJulContents.kpi2 < '238.8')?'green':(overbrookSPJulContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAugContents.kpi1 == null)?'grey-2':(overbrookSPAugContents.kpi1 >= '0' && overbrookSPAugContents.kpi1 <= '2.7')?'red':(overbrookSPAugContents.kpi1 > '2.7' && overbrookSPAugContents.kpi1 <= '3.6')?'orange':(overbrookSPAugContents.kpi1 > '3.6' && overbrookSPAugContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAugContents.kpi1 >= '4.5' && overbrookSPAugContents.kpi1 < '5.4')?'green':(overbrookSPAugContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAugContents.kpi2 == null)?'grey-2':(overbrookSPAugContents.kpi2 >= '0' && overbrookSPAugContents.kpi2 <= '119.4')?'red':(overbrookSPAugContents.kpi2 > '119.4' && overbrookSPAugContents.kpi2 <= '159.2')?'orange':(overbrookSPAugContents.kpi2 > '159.2' && overbrookSPAugContents.kpi2 < '199')?'yellow-7':(overbrookSPAugContents.kpi2 >= '199' && overbrookSPAugContents.kpi2 < '238.8')?'green':(overbrookSPAugContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPSepContents.kpi1 == null)?'grey-2':(overbrookSPSepContents.kpi1 >= '0' && overbrookSPSepContents.kpi1 <= '2.7')?'red':(overbrookSPSepContents.kpi1 > '2.7' && overbrookSPSepContents.kpi1 <= '3.6')?'orange':(overbrookSPSepContents.kpi1 > '3.6' && overbrookSPSepContents.kpi1 < '4.5')?'yellow-7':(overbrookSPSepContents.kpi1 >= '4.5' && overbrookSPSepContents.kpi1 < '5.4')?'green':(overbrookSPSepContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPSepContents.kpi2 == null)?'grey-2':(overbrookSPSepContents.kpi2 >= '0' && overbrookSPSepContents.kpi2 <= '119.4')?'red':(overbrookSPSepContents.kpi2 > '119.4' && overbrookSPSepContents.kpi2 <= '159.2')?'orange':(overbrookSPSepContents.kpi2 > '159.2' && overbrookSPSepContents.kpi2 < '199')?'yellow-7':(overbrookSPSepContents.kpi2 >= '199' && overbrookSPSepContents.kpi2 < '238.8')?'green':(overbrookSPSepContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPOctContents.kpi1 == null)?'grey-2':(overbrookSPOctContents.kpi1 >= '0' && overbrookSPOctContents.kpi1 <= '2.7')?'red':(overbrookSPOctContents.kpi1 > '2.7' && overbrookSPOctContents.kpi1 <= '3.6')?'orange':(overbrookSPOctContents.kpi1 > '3.6' && overbrookSPOctContents.kpi1 < '4.5')?'yellow-7':(overbrookSPOctContents.kpi1 >= '4.5' && overbrookSPOctContents.kpi1 < '5.4')?'green':(overbrookSPOctContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPOctContents.kpi2 == null)?'grey-2':(overbrookSPOctContents.kpi2 >= '0' && overbrookSPOctContents.kpi2 <= '119.4')?'red':(overbrookSPOctContents.kpi2 > '119.4' && overbrookSPOctContents.kpi2 <= '159.2')?'orange':(overbrookSPOctContents.kpi2 > '159.2' && overbrookSPOctContents.kpi2 < '199')?'yellow-7':(overbrookSPOctContents.kpi2 >= '199' && overbrookSPOctContents.kpi2 < '238.8')?'green':(overbrookSPOctContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPNovContents.kpi1 == null)?'grey-2':(overbrookSPNovContents.kpi1 >= '0' && overbrookSPNovContents.kpi1 <= '2.7')?'red':(overbrookSPNovContents.kpi1 > '2.7' && overbrookSPNovContents.kpi1 <= '3.6')?'orange':(overbrookSPNovContents.kpi1 > '3.6' && overbrookSPNovContents.kpi1 < '4.5')?'yellow-7':(overbrookSPNovContents.kpi1 >= '4.5' && overbrookSPNovContents.kpi1 < '5.4')?'green':(overbrookSPNovContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPNovContents.kpi2 == null)?'grey-2':(overbrookSPNovContents.kpi2 >= '0' && overbrookSPNovContents.kpi2 <= '119.4')?'red':(overbrookSPNovContents.kpi2 > '119.4' && overbrookSPNovContents.kpi2 <= '159.2')?'orange':(overbrookSPNovContents.kpi2 > '159.2' && overbrookSPNovContents.kpi2 < '199')?'yellow-7':(overbrookSPNovContents.kpi2 >= '199' && overbrookSPNovContents.kpi2 < '238.8')?'green':(overbrookSPNovContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPDecContents.kpi1 == null)?'grey-2':(overbrookSPDecContents.kpi1 >= '0' && overbrookSPDecContents.kpi1 <= '2.7')?'red':(overbrookSPDecContents.kpi1 > '2.7' && overbrookSPDecContents.kpi1 <= '3.6')?'orange':(overbrookSPDecContents.kpi1 > '3.6' && overbrookSPDecContents.kpi1 < '4.5')?'yellow-7':(overbrookSPDecContents.kpi1 >= '4.5' && overbrookSPDecContents.kpi1 < '5.4')?'green':(overbrookSPDecContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPDecContents.kpi2 == null)?'grey-2':(overbrookSPDecContents.kpi2 >= '0' && overbrookSPDecContents.kpi2 <= '119.4')?'red':(overbrookSPDecContents.kpi2 > '119.4' && overbrookSPDecContents.kpi2 <= '159.2')?'orange':(overbrookSPDecContents.kpi2 > '159.2' && overbrookSPDecContents.kpi2 < '199')?'yellow-7':(overbrookSPDecContents.kpi2 >= '199' && overbrookSPDecContents.kpi2 < '238.8')?'green':(overbrookSPDecContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                                <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJanContents.kpi1 == null)?'grey-2':(overbrookSPJanContents.kpi1 >= '0' && overbrookSPJanContents.kpi1 <= '2.7')?'red':(overbrookSPJanContents.kpi1 > '2.7' && overbrookSPJanContents.kpi1 <= '3.6')?'orange':(overbrookSPJanContents.kpi1 > '3.6' && overbrookSPJanContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJanContents.kpi1 >= '4.5' && overbrookSPJanContents.kpi1 < '5.4')?'green':(overbrookSPJanContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJanContents.kpi2 == null)?'grey-2':(overbrookSPJanContents.kpi2 >= '0' && overbrookSPJanContents.kpi2 <= '119.4')?'red':(overbrookSPJanContents.kpi2 > '119.4' && overbrookSPJanContents.kpi2 <= '159.2')?'orange':(overbrookSPJanContents.kpi2 > '159.2' && overbrookSPJanContents.kpi2 < '199')?'yellow-7':(overbrookSPJanContents.kpi2 >= '199' && overbrookSPJanContents.kpi2 < '238.8')?'green':(overbrookSPJanContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPFebContents.kpi1 == null)?'grey-2':(overbrookSPFebContents.kpi1 >= '0' && overbrookSPFebContents.kpi1 <= '2.7')?'red':(overbrookSPFebContents.kpi1 > '2.7' && overbrookSPFebContents.kpi1 <= '3.6')?'orange':(overbrookSPFebContents.kpi1 > '3.6' && overbrookSPFebContents.kpi1 < '4.5')?'yellow-7':(overbrookSPFebContents.kpi1 >= '4.5' && overbrookSPFebContents.kpi1 < '5.4')?'green':(overbrookSPFebContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPFebContents.kpi2 == null)?'grey-2':(overbrookSPFebContents.kpi2 >= '0' && overbrookSPFebContents.kpi2 <= '119.4')?'red':(overbrookSPFebContents.kpi2 > '119.4' && overbrookSPFebContents.kpi2 <= '159.2')?'orange':(overbrookSPFebContents.kpi2 > '159.2' && overbrookSPFebContents.kpi2 < '199')?'yellow-7':(overbrookSPFebContents.kpi2 >= '199' && overbrookSPFebContents.kpi2 < '238.8')?'green':(overbrookSPFebContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMarContents.kpi1 == null)?'grey-2':(overbrookSPMarContents.kpi1 >= '0' && overbrookSPMarContents.kpi1 <= '2.7')?'red':(overbrookSPMarContents.kpi1 > '2.7' && overbrookSPMarContents.kpi1 <= '3.6')?'orange':(overbrookSPMarContents.kpi1 > '3.6' && overbrookSPMarContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMarContents.kpi1 >= '4.5' && overbrookSPMarContents.kpi1 < '5.4')?'green':(overbrookSPMarContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMarContents.kpi2 == null)?'grey-2':(overbrookSPMarContents.kpi2 >= '0' && overbrookSPMarContents.kpi2 <= '119.4')?'red':(overbrookSPMarContents.kpi2 > '119.4' && overbrookSPMarContents.kpi2 <= '159.2')?'orange':(overbrookSPMarContents.kpi2 > '159.2' && overbrookSPMarContents.kpi2 < '199')?'yellow-7':(overbrookSPMarContents.kpi2 >= '199' && overbrookSPMarContents.kpi2 < '238.8')?'green':(overbrookSPMarContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAprContents.kpi1 == null)?'grey-2':(overbrookSPAprContents.kpi1 >= '0' && overbrookSPAprContents.kpi1 <= '2.7')?'red':(overbrookSPAprContents.kpi1 > '2.7' && overbrookSPAprContents.kpi1 <= '3.6')?'orange':(overbrookSPAprContents.kpi1 > '3.6' && overbrookSPAprContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAprContents.kpi1 >= '4.5' && overbrookSPAprContents.kpi1 < '5.4')?'green':(overbrookSPAprContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAprContents.kpi2 == null)?'grey-2':(overbrookSPAprContents.kpi2 >= '0' && overbrookSPAprContents.kpi2 <= '119.4')?'red':(overbrookSPAprContents.kpi2 > '119.4' && overbrookSPAprContents.kpi2 <= '159.2')?'orange':(overbrookSPAprContents.kpi2 > '159.2' && overbrookSPAprContents.kpi2 < '199')?'yellow-7':(overbrookSPAprContents.kpi2 >= '199' && overbrookSPAprContents.kpi2 < '238.8')?'green':(overbrookSPAprContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMayContents.kpi1 == null)?'grey-2':(overbrookSPMayContents.kpi1 >= '0' && overbrookSPMayContents.kpi1 <= '2.7')?'red':(overbrookSPMayContents.kpi1 > '2.7' && overbrookSPMayContents.kpi1 <= '3.6')?'orange':(overbrookSPMayContents.kpi1 > '3.6' && overbrookSPMayContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMayContents.kpi1 >= '4.5' && overbrookSPMayContents.kpi1 < '5.4')?'green':(overbrookSPMayContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMayContents.kpi2 == null)?'grey-2':(overbrookSPMayContents.kpi2 >= '0' && overbrookSPMayContents.kpi2 <= '119.4')?'red':(overbrookSPMayContents.kpi2 > '119.4' && overbrookSPMayContents.kpi2 <= '159.2')?'orange':(overbrookSPMayContents.kpi2 > '159.2' && overbrookSPMayContents.kpi2 < '199')?'yellow-7':(overbrookSPMayContents.kpi2 >= '199' && overbrookSPMayContents.kpi2 < '238.8')?'green':(overbrookSPMayContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJunContents.kpi1 == null)?'grey-2':(overbrookSPJunContents.kpi1 >= '0' && overbrookSPJunContents.kpi1 <= '2.7')?'red':(overbrookSPJunContents.kpi1 > '2.7' && overbrookSPJunContents.kpi1 <= '3.6')?'orange':(overbrookSPJunContents.kpi1 > '3.6' && overbrookSPJunContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJunContents.kpi1 >= '4.5' && overbrookSPJunContents.kpi1 < '5.4')?'green':(overbrookSPJunContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJunContents.kpi2 == null)?'grey-2':(overbrookSPJunContents.kpi2 >= '0' && overbrookSPJunContents.kpi2 <= '119.4')?'red':(overbrookSPJunContents.kpi2 > '119.4' && overbrookSPJunContents.kpi2 <= '159.2')?'orange':(overbrookSPJunContents.kpi2 > '159.2' && overbrookSPJunContents.kpi2 < '199')?'yellow-7':(overbrookSPJunContents.kpi2 >= '199' && overbrookSPJunContents.kpi2 < '238.8')?'green':(overbrookSPJunContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJulContents.kpi1 == null)?'grey-2':(overbrookSPJulContents.kpi1 >= '0' && overbrookSPJulContents.kpi1 <= '2.7')?'red':(overbrookSPJulContents.kpi1 > '2.7' && overbrookSPJulContents.kpi1 <= '3.6')?'orange':(overbrookSPJulContents.kpi1 > '3.6' && overbrookSPJulContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJulContents.kpi1 >= '4.5' && overbrookSPJulContents.kpi1 < '5.4')?'green':(overbrookSPJulContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJulContents.kpi2 == null)?'grey-2':(overbrookSPJulContents.kpi2 >= '0' && overbrookSPJulContents.kpi2 <= '119.4')?'red':(overbrookSPJulContents.kpi2 > '119.4' && overbrookSPJulContents.kpi2 <= '159.2')?'orange':(overbrookSPJulContents.kpi2 > '159.2' && overbrookSPJulContents.kpi2 < '199')?'yellow-7':(overbrookSPJulContents.kpi2 >= '199' && overbrookSPJulContents.kpi2 < '238.8')?'green':(overbrookSPJulContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAugContents.kpi1 == null)?'grey-2':(overbrookSPAugContents.kpi1 >= '0' && overbrookSPAugContents.kpi1 <= '2.7')?'red':(overbrookSPAugContents.kpi1 > '2.7' && overbrookSPAugContents.kpi1 <= '3.6')?'orange':(overbrookSPAugContents.kpi1 > '3.6' && overbrookSPAugContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAugContents.kpi1 >= '4.5' && overbrookSPAugContents.kpi1 < '5.4')?'green':(overbrookSPAugContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAugContents.kpi2 == null)?'grey-2':(overbrookSPAugContents.kpi2 >= '0' && overbrookSPAugContents.kpi2 <= '119.4')?'red':(overbrookSPAugContents.kpi2 > '119.4' && overbrookSPAugContents.kpi2 <= '159.2')?'orange':(overbrookSPAugContents.kpi2 > '159.2' && overbrookSPAugContents.kpi2 < '199')?'yellow-7':(overbrookSPAugContents.kpi2 >= '199' && overbrookSPAugContents.kpi2 < '238.8')?'green':(overbrookSPAugContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPSepContents.kpi1 == null)?'grey-2':(overbrookSPSepContents.kpi1 >= '0' && overbrookSPSepContents.kpi1 <= '2.7')?'red':(overbrookSPSepContents.kpi1 > '2.7' && overbrookSPSepContents.kpi1 <= '3.6')?'orange':(overbrookSPSepContents.kpi1 > '3.6' && overbrookSPSepContents.kpi1 < '4.5')?'yellow-7':(overbrookSPSepContents.kpi1 >= '4.5' && overbrookSPSepContents.kpi1 < '5.4')?'green':(overbrookSPSepContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPSepContents.kpi2 == null)?'grey-2':(overbrookSPSepContents.kpi2 >= '0' && overbrookSPSepContents.kpi2 <= '119.4')?'red':(overbrookSPSepContents.kpi2 > '119.4' && overbrookSPSepContents.kpi2 <= '159.2')?'orange':(overbrookSPSepContents.kpi2 > '159.2' && overbrookSPSepContents.kpi2 < '199')?'yellow-7':(overbrookSPSepContents.kpi2 >= '199' && overbrookSPSepContents.kpi2 < '238.8')?'green':(overbrookSPSepContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPOctContents.kpi1 == null)?'grey-2':(overbrookSPOctContents.kpi1 >= '0' && overbrookSPOctContents.kpi1 <= '2.7')?'red':(overbrookSPOctContents.kpi1 > '2.7' && overbrookSPOctContents.kpi1 <= '3.6')?'orange':(overbrookSPOctContents.kpi1 > '3.6' && overbrookSPOctContents.kpi1 < '4.5')?'yellow-7':(overbrookSPOctContents.kpi1 >= '4.5' && overbrookSPOctContents.kpi1 < '5.4')?'green':(overbrookSPOctContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPOctContents.kpi2 == null)?'grey-2':(overbrookSPOctContents.kpi2 >= '0' && overbrookSPOctContents.kpi2 <= '119.4')?'red':(overbrookSPOctContents.kpi2 > '119.4' && overbrookSPOctContents.kpi2 <= '159.2')?'orange':(overbrookSPOctContents.kpi2 > '159.2' && overbrookSPOctContents.kpi2 < '199')?'yellow-7':(overbrookSPOctContents.kpi2 >= '199' && overbrookSPOctContents.kpi2 < '238.8')?'green':(overbrookSPOctContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPNovContents.kpi1 == null)?'grey-2':(overbrookSPNovContents.kpi1 >= '0' && overbrookSPNovContents.kpi1 <= '2.7')?'red':(overbrookSPNovContents.kpi1 > '2.7' && overbrookSPNovContents.kpi1 <= '3.6')?'orange':(overbrookSPNovContents.kpi1 > '3.6' && overbrookSPNovContents.kpi1 < '4.5')?'yellow-7':(overbrookSPNovContents.kpi1 >= '4.5' && overbrookSPNovContents.kpi1 < '5.4')?'green':(overbrookSPNovContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPNovContents.kpi2 == null)?'grey-2':(overbrookSPNovContents.kpi2 >= '0' && overbrookSPNovContents.kpi2 <= '119.4')?'red':(overbrookSPNovContents.kpi2 > '119.4' && overbrookSPNovContents.kpi2 <= '159.2')?'orange':(overbrookSPNovContents.kpi2 > '159.2' && overbrookSPNovContents.kpi2 < '199')?'yellow-7':(overbrookSPNovContents.kpi2 >= '199' && overbrookSPNovContents.kpi2 < '238.8')?'green':(overbrookSPNovContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPDecContents.kpi1 == null)?'grey-2':(overbrookSPDecContents.kpi1 >= '0' && overbrookSPDecContents.kpi1 <= '2.7')?'red':(overbrookSPDecContents.kpi1 > '2.7' && overbrookSPDecContents.kpi1 <= '3.6')?'orange':(overbrookSPDecContents.kpi1 > '3.6' && overbrookSPDecContents.kpi1 < '4.5')?'yellow-7':(overbrookSPDecContents.kpi1 >= '4.5' && overbrookSPDecContents.kpi1 < '5.4')?'green':(overbrookSPDecContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPDecContents.kpi2 == null)?'grey-2':(overbrookSPDecContents.kpi2 >= '0' && overbrookSPDecContents.kpi2 <= '119.4')?'red':(overbrookSPDecContents.kpi2 > '119.4' && overbrookSPDecContents.kpi2 <= '159.2')?'orange':(overbrookSPDecContents.kpi2 > '159.2' && overbrookSPDecContents.kpi2 < '199')?'yellow-7':(overbrookSPDecContents.kpi2 >= '199' && overbrookSPDecContents.kpi2 < '238.8')?'green':(overbrookSPDecContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                                <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJanContents.kpi1 == null)?'grey-2':(overbrookSPJanContents.kpi1 >= '0' && overbrookSPJanContents.kpi1 <= '2.7')?'red':(overbrookSPJanContents.kpi1 > '2.7' && overbrookSPJanContents.kpi1 <= '3.6')?'orange':(overbrookSPJanContents.kpi1 > '3.6' && overbrookSPJanContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJanContents.kpi1 >= '4.5' && overbrookSPJanContents.kpi1 < '5.4')?'green':(overbrookSPJanContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJanContents.kpi2 == null)?'grey-2':(overbrookSPJanContents.kpi2 >= '0' && overbrookSPJanContents.kpi2 <= '119.4')?'red':(overbrookSPJanContents.kpi2 > '119.4' && overbrookSPJanContents.kpi2 <= '159.2')?'orange':(overbrookSPJanContents.kpi2 > '159.2' && overbrookSPJanContents.kpi2 < '199')?'yellow-7':(overbrookSPJanContents.kpi2 >= '199' && overbrookSPJanContents.kpi2 < '238.8')?'green':(overbrookSPJanContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPFebContents.kpi1 == null)?'grey-2':(overbrookSPFebContents.kpi1 >= '0' && overbrookSPFebContents.kpi1 <= '2.7')?'red':(overbrookSPFebContents.kpi1 > '2.7' && overbrookSPFebContents.kpi1 <= '3.6')?'orange':(overbrookSPFebContents.kpi1 > '3.6' && overbrookSPFebContents.kpi1 < '4.5')?'yellow-7':(overbrookSPFebContents.kpi1 >= '4.5' && overbrookSPFebContents.kpi1 < '5.4')?'green':(overbrookSPFebContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPFebContents.kpi2 == null)?'grey-2':(overbrookSPFebContents.kpi2 >= '0' && overbrookSPFebContents.kpi2 <= '119.4')?'red':(overbrookSPFebContents.kpi2 > '119.4' && overbrookSPFebContents.kpi2 <= '159.2')?'orange':(overbrookSPFebContents.kpi2 > '159.2' && overbrookSPFebContents.kpi2 < '199')?'yellow-7':(overbrookSPFebContents.kpi2 >= '199' && overbrookSPFebContents.kpi2 < '238.8')?'green':(overbrookSPFebContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMarContents.kpi1 == null)?'grey-2':(overbrookSPMarContents.kpi1 >= '0' && overbrookSPMarContents.kpi1 <= '2.7')?'red':(overbrookSPMarContents.kpi1 > '2.7' && overbrookSPMarContents.kpi1 <= '3.6')?'orange':(overbrookSPMarContents.kpi1 > '3.6' && overbrookSPMarContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMarContents.kpi1 >= '4.5' && overbrookSPMarContents.kpi1 < '5.4')?'green':(overbrookSPMarContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMarContents.kpi2 == null)?'grey-2':(overbrookSPMarContents.kpi2 >= '0' && overbrookSPMarContents.kpi2 <= '119.4')?'red':(overbrookSPMarContents.kpi2 > '119.4' && overbrookSPMarContents.kpi2 <= '159.2')?'orange':(overbrookSPMarContents.kpi2 > '159.2' && overbrookSPMarContents.kpi2 < '199')?'yellow-7':(overbrookSPMarContents.kpi2 >= '199' && overbrookSPMarContents.kpi2 < '238.8')?'green':(overbrookSPMarContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAprContents.kpi1 == null)?'grey-2':(overbrookSPAprContents.kpi1 >= '0' && overbrookSPAprContents.kpi1 <= '2.7')?'red':(overbrookSPAprContents.kpi1 > '2.7' && overbrookSPAprContents.kpi1 <= '3.6')?'orange':(overbrookSPAprContents.kpi1 > '3.6' && overbrookSPAprContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAprContents.kpi1 >= '4.5' && overbrookSPAprContents.kpi1 < '5.4')?'green':(overbrookSPAprContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAprContents.kpi2 == null)?'grey-2':(overbrookSPAprContents.kpi2 >= '0' && overbrookSPAprContents.kpi2 <= '119.4')?'red':(overbrookSPAprContents.kpi2 > '119.4' && overbrookSPAprContents.kpi2 <= '159.2')?'orange':(overbrookSPAprContents.kpi2 > '159.2' && overbrookSPAprContents.kpi2 < '199')?'yellow-7':(overbrookSPAprContents.kpi2 >= '199' && overbrookSPAprContents.kpi2 < '238.8')?'green':(overbrookSPAprContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMayContents.kpi1 == null)?'grey-2':(overbrookSPMayContents.kpi1 >= '0' && overbrookSPMayContents.kpi1 <= '2.7')?'red':(overbrookSPMayContents.kpi1 > '2.7' && overbrookSPMayContents.kpi1 <= '3.6')?'orange':(overbrookSPMayContents.kpi1 > '3.6' && overbrookSPMayContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMayContents.kpi1 >= '4.5' && overbrookSPMayContents.kpi1 < '5.4')?'green':(overbrookSPMayContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMayContents.kpi2 == null)?'grey-2':(overbrookSPMayContents.kpi2 >= '0' && overbrookSPMayContents.kpi2 <= '119.4')?'red':(overbrookSPMayContents.kpi2 > '119.4' && overbrookSPMayContents.kpi2 <= '159.2')?'orange':(overbrookSPMayContents.kpi2 > '159.2' && overbrookSPMayContents.kpi2 < '199')?'yellow-7':(overbrookSPMayContents.kpi2 >= '199' && overbrookSPMayContents.kpi2 < '238.8')?'green':(overbrookSPMayContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJunContents.kpi1 == null)?'grey-2':(overbrookSPJunContents.kpi1 >= '0' && overbrookSPJunContents.kpi1 <= '2.7')?'red':(overbrookSPJunContents.kpi1 > '2.7' && overbrookSPJunContents.kpi1 <= '3.6')?'orange':(overbrookSPJunContents.kpi1 > '3.6' && overbrookSPJunContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJunContents.kpi1 >= '4.5' && overbrookSPJunContents.kpi1 < '5.4')?'green':(overbrookSPJunContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJunContents.kpi2 == null)?'grey-2':(overbrookSPJunContents.kpi2 >= '0' && overbrookSPJunContents.kpi2 <= '119.4')?'red':(overbrookSPJunContents.kpi2 > '119.4' && overbrookSPJunContents.kpi2 <= '159.2')?'orange':(overbrookSPJunContents.kpi2 > '159.2' && overbrookSPJunContents.kpi2 < '199')?'yellow-7':(overbrookSPJunContents.kpi2 >= '199' && overbrookSPJunContents.kpi2 < '238.8')?'green':(overbrookSPJunContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJulContents.kpi1 == null)?'grey-2':(overbrookSPJulContents.kpi1 >= '0' && overbrookSPJulContents.kpi1 <= '2.7')?'red':(overbrookSPJulContents.kpi1 > '2.7' && overbrookSPJulContents.kpi1 <= '3.6')?'orange':(overbrookSPJulContents.kpi1 > '3.6' && overbrookSPJulContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJulContents.kpi1 >= '4.5' && overbrookSPJulContents.kpi1 < '5.4')?'green':(overbrookSPJulContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJulContents.kpi2 == null)?'grey-2':(overbrookSPJulContents.kpi2 >= '0' && overbrookSPJulContents.kpi2 <= '119.4')?'red':(overbrookSPJulContents.kpi2 > '119.4' && overbrookSPJulContents.kpi2 <= '159.2')?'orange':(overbrookSPJulContents.kpi2 > '159.2' && overbrookSPJulContents.kpi2 < '199')?'yellow-7':(overbrookSPJulContents.kpi2 >= '199' && overbrookSPJulContents.kpi2 < '238.8')?'green':(overbrookSPJulContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAugContents.kpi1 == null)?'grey-2':(overbrookSPAugContents.kpi1 >= '0' && overbrookSPAugContents.kpi1 <= '2.7')?'red':(overbrookSPAugContents.kpi1 > '2.7' && overbrookSPAugContents.kpi1 <= '3.6')?'orange':(overbrookSPAugContents.kpi1 > '3.6' && overbrookSPAugContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAugContents.kpi1 >= '4.5' && overbrookSPAugContents.kpi1 < '5.4')?'green':(overbrookSPAugContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAugContents.kpi2 == null)?'grey-2':(overbrookSPAugContents.kpi2 >= '0' && overbrookSPAugContents.kpi2 <= '119.4')?'red':(overbrookSPAugContents.kpi2 > '119.4' && overbrookSPAugContents.kpi2 <= '159.2')?'orange':(overbrookSPAugContents.kpi2 > '159.2' && overbrookSPAugContents.kpi2 < '199')?'yellow-7':(overbrookSPAugContents.kpi2 >= '199' && overbrookSPAugContents.kpi2 < '238.8')?'green':(overbrookSPAugContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPSepContents.kpi1 == null)?'grey-2':(overbrookSPSepContents.kpi1 >= '0' && overbrookSPSepContents.kpi1 <= '2.7')?'red':(overbrookSPSepContents.kpi1 > '2.7' && overbrookSPSepContents.kpi1 <= '3.6')?'orange':(overbrookSPSepContents.kpi1 > '3.6' && overbrookSPSepContents.kpi1 < '4.5')?'yellow-7':(overbrookSPSepContents.kpi1 >= '4.5' && overbrookSPSepContents.kpi1 < '5.4')?'green':(overbrookSPSepContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPSepContents.kpi2 == null)?'grey-2':(overbrookSPSepContents.kpi2 >= '0' && overbrookSPSepContents.kpi2 <= '119.4')?'red':(overbrookSPSepContents.kpi2 > '119.4' && overbrookSPSepContents.kpi2 <= '159.2')?'orange':(overbrookSPSepContents.kpi2 > '159.2' && overbrookSPSepContents.kpi2 < '199')?'yellow-7':(overbrookSPSepContents.kpi2 >= '199' && overbrookSPSepContents.kpi2 < '238.8')?'green':(overbrookSPSepContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPOctContents.kpi1 == null)?'grey-2':(overbrookSPOctContents.kpi1 >= '0' && overbrookSPOctContents.kpi1 <= '2.7')?'red':(overbrookSPOctContents.kpi1 > '2.7' && overbrookSPOctContents.kpi1 <= '3.6')?'orange':(overbrookSPOctContents.kpi1 > '3.6' && overbrookSPOctContents.kpi1 < '4.5')?'yellow-7':(overbrookSPOctContents.kpi1 >= '4.5' && overbrookSPOctContents.kpi1 < '5.4')?'green':(overbrookSPOctContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPOctContents.kpi2 == null)?'grey-2':(overbrookSPOctContents.kpi2 >= '0' && overbrookSPOctContents.kpi2 <= '119.4')?'red':(overbrookSPOctContents.kpi2 > '119.4' && overbrookSPOctContents.kpi2 <= '159.2')?'orange':(overbrookSPOctContents.kpi2 > '159.2' && overbrookSPOctContents.kpi2 < '199')?'yellow-7':(overbrookSPOctContents.kpi2 >= '199' && overbrookSPOctContents.kpi2 < '238.8')?'green':(overbrookSPOctContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPNovContents.kpi1 == null)?'grey-2':(overbrookSPNovContents.kpi1 >= '0' && overbrookSPNovContents.kpi1 <= '2.7')?'red':(overbrookSPNovContents.kpi1 > '2.7' && overbrookSPNovContents.kpi1 <= '3.6')?'orange':(overbrookSPNovContents.kpi1 > '3.6' && overbrookSPNovContents.kpi1 < '4.5')?'yellow-7':(overbrookSPNovContents.kpi1 >= '4.5' && overbrookSPNovContents.kpi1 < '5.4')?'green':(overbrookSPNovContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPNovContents.kpi2 == null)?'grey-2':(overbrookSPNovContents.kpi2 >= '0' && overbrookSPNovContents.kpi2 <= '119.4')?'red':(overbrookSPNovContents.kpi2 > '119.4' && overbrookSPNovContents.kpi2 <= '159.2')?'orange':(overbrookSPNovContents.kpi2 > '159.2' && overbrookSPNovContents.kpi2 < '199')?'yellow-7':(overbrookSPNovContents.kpi2 >= '199' && overbrookSPNovContents.kpi2 < '238.8')?'green':(overbrookSPNovContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPDecContents.kpi1 == null)?'grey-2':(overbrookSPDecContents.kpi1 >= '0' && overbrookSPDecContents.kpi1 <= '2.7')?'red':(overbrookSPDecContents.kpi1 > '2.7' && overbrookSPDecContents.kpi1 <= '3.6')?'orange':(overbrookSPDecContents.kpi1 > '3.6' && overbrookSPDecContents.kpi1 < '4.5')?'yellow-7':(overbrookSPDecContents.kpi1 >= '4.5' && overbrookSPDecContents.kpi1 < '5.4')?'green':(overbrookSPDecContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPDecContents.kpi2 == null)?'grey-2':(overbrookSPDecContents.kpi2 >= '0' && overbrookSPDecContents.kpi2 <= '119.4')?'red':(overbrookSPDecContents.kpi2 > '119.4' && overbrookSPDecContents.kpi2 <= '159.2')?'orange':(overbrookSPDecContents.kpi2 > '159.2' && overbrookSPDecContents.kpi2 < '199')?'yellow-7':(overbrookSPDecContents.kpi2 >= '199' && overbrookSPDecContents.kpi2 < '238.8')?'green':(overbrookSPDecContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                                <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJanContents.kpi1 == null)?'grey-2':(overbrookSPJanContents.kpi1 >= '0' && overbrookSPJanContents.kpi1 <= '2.7')?'red':(overbrookSPJanContents.kpi1 > '2.7' && overbrookSPJanContents.kpi1 <= '3.6')?'orange':(overbrookSPJanContents.kpi1 > '3.6' && overbrookSPJanContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJanContents.kpi1 >= '4.5' && overbrookSPJanContents.kpi1 < '5.4')?'green':(overbrookSPJanContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJanContents.kpi2 == null)?'grey-2':(overbrookSPJanContents.kpi2 >= '0' && overbrookSPJanContents.kpi2 <= '119.4')?'red':(overbrookSPJanContents.kpi2 > '119.4' && overbrookSPJanContents.kpi2 <= '159.2')?'orange':(overbrookSPJanContents.kpi2 > '159.2' && overbrookSPJanContents.kpi2 < '199')?'yellow-7':(overbrookSPJanContents.kpi2 >= '199' && overbrookSPJanContents.kpi2 < '238.8')?'green':(overbrookSPJanContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPFebContents.kpi1 == null)?'grey-2':(overbrookSPFebContents.kpi1 >= '0' && overbrookSPFebContents.kpi1 <= '2.7')?'red':(overbrookSPFebContents.kpi1 > '2.7' && overbrookSPFebContents.kpi1 <= '3.6')?'orange':(overbrookSPFebContents.kpi1 > '3.6' && overbrookSPFebContents.kpi1 < '4.5')?'yellow-7':(overbrookSPFebContents.kpi1 >= '4.5' && overbrookSPFebContents.kpi1 < '5.4')?'green':(overbrookSPFebContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPFebContents.kpi2 == null)?'grey-2':(overbrookSPFebContents.kpi2 >= '0' && overbrookSPFebContents.kpi2 <= '119.4')?'red':(overbrookSPFebContents.kpi2 > '119.4' && overbrookSPFebContents.kpi2 <= '159.2')?'orange':(overbrookSPFebContents.kpi2 > '159.2' && overbrookSPFebContents.kpi2 < '199')?'yellow-7':(overbrookSPFebContents.kpi2 >= '199' && overbrookSPFebContents.kpi2 < '238.8')?'green':(overbrookSPFebContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMarContents.kpi1 == null)?'grey-2':(overbrookSPMarContents.kpi1 >= '0' && overbrookSPMarContents.kpi1 <= '2.7')?'red':(overbrookSPMarContents.kpi1 > '2.7' && overbrookSPMarContents.kpi1 <= '3.6')?'orange':(overbrookSPMarContents.kpi1 > '3.6' && overbrookSPMarContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMarContents.kpi1 >= '4.5' && overbrookSPMarContents.kpi1 < '5.4')?'green':(overbrookSPMarContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMarContents.kpi2 == null)?'grey-2':(overbrookSPMarContents.kpi2 >= '0' && overbrookSPMarContents.kpi2 <= '119.4')?'red':(overbrookSPMarContents.kpi2 > '119.4' && overbrookSPMarContents.kpi2 <= '159.2')?'orange':(overbrookSPMarContents.kpi2 > '159.2' && overbrookSPMarContents.kpi2 < '199')?'yellow-7':(overbrookSPMarContents.kpi2 >= '199' && overbrookSPMarContents.kpi2 < '238.8')?'green':(overbrookSPMarContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAprContents.kpi1 == null)?'grey-2':(overbrookSPAprContents.kpi1 >= '0' && overbrookSPAprContents.kpi1 <= '2.7')?'red':(overbrookSPAprContents.kpi1 > '2.7' && overbrookSPAprContents.kpi1 <= '3.6')?'orange':(overbrookSPAprContents.kpi1 > '3.6' && overbrookSPAprContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAprContents.kpi1 >= '4.5' && overbrookSPAprContents.kpi1 < '5.4')?'green':(overbrookSPAprContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAprContents.kpi2 == null)?'grey-2':(overbrookSPAprContents.kpi2 >= '0' && overbrookSPAprContents.kpi2 <= '119.4')?'red':(overbrookSPAprContents.kpi2 > '119.4' && overbrookSPAprContents.kpi2 <= '159.2')?'orange':(overbrookSPAprContents.kpi2 > '159.2' && overbrookSPAprContents.kpi2 < '199')?'yellow-7':(overbrookSPAprContents.kpi2 >= '199' && overbrookSPAprContents.kpi2 < '238.8')?'green':(overbrookSPAprContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMayContents.kpi1 == null)?'grey-2':(overbrookSPMayContents.kpi1 >= '0' && overbrookSPMayContents.kpi1 <= '2.7')?'red':(overbrookSPMayContents.kpi1 > '2.7' && overbrookSPMayContents.kpi1 <= '3.6')?'orange':(overbrookSPMayContents.kpi1 > '3.6' && overbrookSPMayContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMayContents.kpi1 >= '4.5' && overbrookSPMayContents.kpi1 < '5.4')?'green':(overbrookSPMayContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMayContents.kpi2 == null)?'grey-2':(overbrookSPMayContents.kpi2 >= '0' && overbrookSPMayContents.kpi2 <= '119.4')?'red':(overbrookSPMayContents.kpi2 > '119.4' && overbrookSPMayContents.kpi2 <= '159.2')?'orange':(overbrookSPMayContents.kpi2 > '159.2' && overbrookSPMayContents.kpi2 < '199')?'yellow-7':(overbrookSPMayContents.kpi2 >= '199' && overbrookSPMayContents.kpi2 < '238.8')?'green':(overbrookSPMayContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJunContents.kpi1 == null)?'grey-2':(overbrookSPJunContents.kpi1 >= '0' && overbrookSPJunContents.kpi1 <= '2.7')?'red':(overbrookSPJunContents.kpi1 > '2.7' && overbrookSPJunContents.kpi1 <= '3.6')?'orange':(overbrookSPJunContents.kpi1 > '3.6' && overbrookSPJunContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJunContents.kpi1 >= '4.5' && overbrookSPJunContents.kpi1 < '5.4')?'green':(overbrookSPJunContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJunContents.kpi2 == null)?'grey-2':(overbrookSPJunContents.kpi2 >= '0' && overbrookSPJunContents.kpi2 <= '119.4')?'red':(overbrookSPJunContents.kpi2 > '119.4' && overbrookSPJunContents.kpi2 <= '159.2')?'orange':(overbrookSPJunContents.kpi2 > '159.2' && overbrookSPJunContents.kpi2 < '199')?'yellow-7':(overbrookSPJunContents.kpi2 >= '199' && overbrookSPJunContents.kpi2 < '238.8')?'green':(overbrookSPJunContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJulContents.kpi1 == null)?'grey-2':(overbrookSPJulContents.kpi1 >= '0' && overbrookSPJulContents.kpi1 <= '2.7')?'red':(overbrookSPJulContents.kpi1 > '2.7' && overbrookSPJulContents.kpi1 <= '3.6')?'orange':(overbrookSPJulContents.kpi1 > '3.6' && overbrookSPJulContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJulContents.kpi1 >= '4.5' && overbrookSPJulContents.kpi1 < '5.4')?'green':(overbrookSPJulContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJulContents.kpi2 == null)?'grey-2':(overbrookSPJulContents.kpi2 >= '0' && overbrookSPJulContents.kpi2 <= '119.4')?'red':(overbrookSPJulContents.kpi2 > '119.4' && overbrookSPJulContents.kpi2 <= '159.2')?'orange':(overbrookSPJulContents.kpi2 > '159.2' && overbrookSPJulContents.kpi2 < '199')?'yellow-7':(overbrookSPJulContents.kpi2 >= '199' && overbrookSPJulContents.kpi2 < '238.8')?'green':(overbrookSPJulContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAugContents.kpi1 == null)?'grey-2':(overbrookSPAugContents.kpi1 >= '0' && overbrookSPAugContents.kpi1 <= '2.7')?'red':(overbrookSPAugContents.kpi1 > '2.7' && overbrookSPAugContents.kpi1 <= '3.6')?'orange':(overbrookSPAugContents.kpi1 > '3.6' && overbrookSPAugContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAugContents.kpi1 >= '4.5' && overbrookSPAugContents.kpi1 < '5.4')?'green':(overbrookSPAugContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAugContents.kpi2 == null)?'grey-2':(overbrookSPAugContents.kpi2 >= '0' && overbrookSPAugContents.kpi2 <= '119.4')?'red':(overbrookSPAugContents.kpi2 > '119.4' && overbrookSPAugContents.kpi2 <= '159.2')?'orange':(overbrookSPAugContents.kpi2 > '159.2' && overbrookSPAugContents.kpi2 < '199')?'yellow-7':(overbrookSPAugContents.kpi2 >= '199' && overbrookSPAugContents.kpi2 < '238.8')?'green':(overbrookSPAugContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPSepContents.kpi1 == null)?'grey-2':(overbrookSPSepContents.kpi1 >= '0' && overbrookSPSepContents.kpi1 <= '2.7')?'red':(overbrookSPSepContents.kpi1 > '2.7' && overbrookSPSepContents.kpi1 <= '3.6')?'orange':(overbrookSPSepContents.kpi1 > '3.6' && overbrookSPSepContents.kpi1 < '4.5')?'yellow-7':(overbrookSPSepContents.kpi1 >= '4.5' && overbrookSPSepContents.kpi1 < '5.4')?'green':(overbrookSPSepContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPSepContents.kpi2 == null)?'grey-2':(overbrookSPSepContents.kpi2 >= '0' && overbrookSPSepContents.kpi2 <= '119.4')?'red':(overbrookSPSepContents.kpi2 > '119.4' && overbrookSPSepContents.kpi2 <= '159.2')?'orange':(overbrookSPSepContents.kpi2 > '159.2' && overbrookSPSepContents.kpi2 < '199')?'yellow-7':(overbrookSPSepContents.kpi2 >= '199' && overbrookSPSepContents.kpi2 < '238.8')?'green':(overbrookSPSepContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPOctContents.kpi1 == null)?'grey-2':(overbrookSPOctContents.kpi1 >= '0' && overbrookSPOctContents.kpi1 <= '2.7')?'red':(overbrookSPOctContents.kpi1 > '2.7' && overbrookSPOctContents.kpi1 <= '3.6')?'orange':(overbrookSPOctContents.kpi1 > '3.6' && overbrookSPOctContents.kpi1 < '4.5')?'yellow-7':(overbrookSPOctContents.kpi1 >= '4.5' && overbrookSPOctContents.kpi1 < '5.4')?'green':(overbrookSPOctContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPOctContents.kpi2 == null)?'grey-2':(overbrookSPOctContents.kpi2 >= '0' && overbrookSPOctContents.kpi2 <= '119.4')?'red':(overbrookSPOctContents.kpi2 > '119.4' && overbrookSPOctContents.kpi2 <= '159.2')?'orange':(overbrookSPOctContents.kpi2 > '159.2' && overbrookSPOctContents.kpi2 < '199')?'yellow-7':(overbrookSPOctContents.kpi2 >= '199' && overbrookSPOctContents.kpi2 < '238.8')?'green':(overbrookSPOctContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPNovContents.kpi1 == null)?'grey-2':(overbrookSPNovContents.kpi1 >= '0' && overbrookSPNovContents.kpi1 <= '2.7')?'red':(overbrookSPNovContents.kpi1 > '2.7' && overbrookSPNovContents.kpi1 <= '3.6')?'orange':(overbrookSPNovContents.kpi1 > '3.6' && overbrookSPNovContents.kpi1 < '4.5')?'yellow-7':(overbrookSPNovContents.kpi1 >= '4.5' && overbrookSPNovContents.kpi1 < '5.4')?'green':(overbrookSPNovContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPNovContents.kpi2 == null)?'grey-2':(overbrookSPNovContents.kpi2 >= '0' && overbrookSPNovContents.kpi2 <= '119.4')?'red':(overbrookSPNovContents.kpi2 > '119.4' && overbrookSPNovContents.kpi2 <= '159.2')?'orange':(overbrookSPNovContents.kpi2 > '159.2' && overbrookSPNovContents.kpi2 < '199')?'yellow-7':(overbrookSPNovContents.kpi2 >= '199' && overbrookSPNovContents.kpi2 < '238.8')?'green':(overbrookSPNovContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPDecContents.kpi1 == null)?'grey-2':(overbrookSPDecContents.kpi1 >= '0' && overbrookSPDecContents.kpi1 <= '2.7')?'red':(overbrookSPDecContents.kpi1 > '2.7' && overbrookSPDecContents.kpi1 <= '3.6')?'orange':(overbrookSPDecContents.kpi1 > '3.6' && overbrookSPDecContents.kpi1 < '4.5')?'yellow-7':(overbrookSPDecContents.kpi1 >= '4.5' && overbrookSPDecContents.kpi1 < '5.4')?'green':(overbrookSPDecContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPDecContents.kpi2 == null)?'grey-2':(overbrookSPDecContents.kpi2 >= '0' && overbrookSPDecContents.kpi2 <= '119.4')?'red':(overbrookSPDecContents.kpi2 > '119.4' && overbrookSPDecContents.kpi2 <= '159.2')?'orange':(overbrookSPDecContents.kpi2 > '159.2' && overbrookSPDecContents.kpi2 < '199')?'yellow-7':(overbrookSPDecContents.kpi2 >= '199' && overbrookSPDecContents.kpi2 < '238.8')?'green':(overbrookSPDecContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                                <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJanContents.kpi1 == null)?'grey-2':(overbrookSPJanContents.kpi1 >= '0' && overbrookSPJanContents.kpi1 <= '2.7')?'red':(overbrookSPJanContents.kpi1 > '2.7' && overbrookSPJanContents.kpi1 <= '3.6')?'orange':(overbrookSPJanContents.kpi1 > '3.6' && overbrookSPJanContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJanContents.kpi1 >= '4.5' && overbrookSPJanContents.kpi1 < '5.4')?'green':(overbrookSPJanContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJanContents.kpi2 == null)?'grey-2':(overbrookSPJanContents.kpi2 >= '0' && overbrookSPJanContents.kpi2 <= '119.4')?'red':(overbrookSPJanContents.kpi2 > '119.4' && overbrookSPJanContents.kpi2 <= '159.2')?'orange':(overbrookSPJanContents.kpi2 > '159.2' && overbrookSPJanContents.kpi2 < '199')?'yellow-7':(overbrookSPJanContents.kpi2 >= '199' && overbrookSPJanContents.kpi2 < '238.8')?'green':(overbrookSPJanContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPFebContents.kpi1 == null)?'grey-2':(overbrookSPFebContents.kpi1 >= '0' && overbrookSPFebContents.kpi1 <= '2.7')?'red':(overbrookSPFebContents.kpi1 > '2.7' && overbrookSPFebContents.kpi1 <= '3.6')?'orange':(overbrookSPFebContents.kpi1 > '3.6' && overbrookSPFebContents.kpi1 < '4.5')?'yellow-7':(overbrookSPFebContents.kpi1 >= '4.5' && overbrookSPFebContents.kpi1 < '5.4')?'green':(overbrookSPFebContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPFebContents.kpi2 == null)?'grey-2':(overbrookSPFebContents.kpi2 >= '0' && overbrookSPFebContents.kpi2 <= '119.4')?'red':(overbrookSPFebContents.kpi2 > '119.4' && overbrookSPFebContents.kpi2 <= '159.2')?'orange':(overbrookSPFebContents.kpi2 > '159.2' && overbrookSPFebContents.kpi2 < '199')?'yellow-7':(overbrookSPFebContents.kpi2 >= '199' && overbrookSPFebContents.kpi2 < '238.8')?'green':(overbrookSPFebContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMarContents.kpi1 == null)?'grey-2':(overbrookSPMarContents.kpi1 >= '0' && overbrookSPMarContents.kpi1 <= '2.7')?'red':(overbrookSPMarContents.kpi1 > '2.7' && overbrookSPMarContents.kpi1 <= '3.6')?'orange':(overbrookSPMarContents.kpi1 > '3.6' && overbrookSPMarContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMarContents.kpi1 >= '4.5' && overbrookSPMarContents.kpi1 < '5.4')?'green':(overbrookSPMarContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMarContents.kpi2 == null)?'grey-2':(overbrookSPMarContents.kpi2 >= '0' && overbrookSPMarContents.kpi2 <= '119.4')?'red':(overbrookSPMarContents.kpi2 > '119.4' && overbrookSPMarContents.kpi2 <= '159.2')?'orange':(overbrookSPMarContents.kpi2 > '159.2' && overbrookSPMarContents.kpi2 < '199')?'yellow-7':(overbrookSPMarContents.kpi2 >= '199' && overbrookSPMarContents.kpi2 < '238.8')?'green':(overbrookSPMarContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAprContents.kpi1 == null)?'grey-2':(overbrookSPAprContents.kpi1 >= '0' && overbrookSPAprContents.kpi1 <= '2.7')?'red':(overbrookSPAprContents.kpi1 > '2.7' && overbrookSPAprContents.kpi1 <= '3.6')?'orange':(overbrookSPAprContents.kpi1 > '3.6' && overbrookSPAprContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAprContents.kpi1 >= '4.5' && overbrookSPAprContents.kpi1 < '5.4')?'green':(overbrookSPAprContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAprContents.kpi2 == null)?'grey-2':(overbrookSPAprContents.kpi2 >= '0' && overbrookSPAprContents.kpi2 <= '119.4')?'red':(overbrookSPAprContents.kpi2 > '119.4' && overbrookSPAprContents.kpi2 <= '159.2')?'orange':(overbrookSPAprContents.kpi2 > '159.2' && overbrookSPAprContents.kpi2 < '199')?'yellow-7':(overbrookSPAprContents.kpi2 >= '199' && overbrookSPAprContents.kpi2 < '238.8')?'green':(overbrookSPAprContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMayContents.kpi1 == null)?'grey-2':(overbrookSPMayContents.kpi1 >= '0' && overbrookSPMayContents.kpi1 <= '2.7')?'red':(overbrookSPMayContents.kpi1 > '2.7' && overbrookSPMayContents.kpi1 <= '3.6')?'orange':(overbrookSPMayContents.kpi1 > '3.6' && overbrookSPMayContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMayContents.kpi1 >= '4.5' && overbrookSPMayContents.kpi1 < '5.4')?'green':(overbrookSPMayContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMayContents.kpi2 == null)?'grey-2':(overbrookSPMayContents.kpi2 >= '0' && overbrookSPMayContents.kpi2 <= '119.4')?'red':(overbrookSPMayContents.kpi2 > '119.4' && overbrookSPMayContents.kpi2 <= '159.2')?'orange':(overbrookSPMayContents.kpi2 > '159.2' && overbrookSPMayContents.kpi2 < '199')?'yellow-7':(overbrookSPMayContents.kpi2 >= '199' && overbrookSPMayContents.kpi2 < '238.8')?'green':(overbrookSPMayContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJunContents.kpi1 == null)?'grey-2':(overbrookSPJunContents.kpi1 >= '0' && overbrookSPJunContents.kpi1 <= '2.7')?'red':(overbrookSPJunContents.kpi1 > '2.7' && overbrookSPJunContents.kpi1 <= '3.6')?'orange':(overbrookSPJunContents.kpi1 > '3.6' && overbrookSPJunContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJunContents.kpi1 >= '4.5' && overbrookSPJunContents.kpi1 < '5.4')?'green':(overbrookSPJunContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJunContents.kpi2 == null)?'grey-2':(overbrookSPJunContents.kpi2 >= '0' && overbrookSPJunContents.kpi2 <= '119.4')?'red':(overbrookSPJunContents.kpi2 > '119.4' && overbrookSPJunContents.kpi2 <= '159.2')?'orange':(overbrookSPJunContents.kpi2 > '159.2' && overbrookSPJunContents.kpi2 < '199')?'yellow-7':(overbrookSPJunContents.kpi2 >= '199' && overbrookSPJunContents.kpi2 < '238.8')?'green':(overbrookSPJunContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJulContents.kpi1 == null)?'grey-2':(overbrookSPJulContents.kpi1 >= '0' && overbrookSPJulContents.kpi1 <= '2.7')?'red':(overbrookSPJulContents.kpi1 > '2.7' && overbrookSPJulContents.kpi1 <= '3.6')?'orange':(overbrookSPJulContents.kpi1 > '3.6' && overbrookSPJulContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJulContents.kpi1 >= '4.5' && overbrookSPJulContents.kpi1 < '5.4')?'green':(overbrookSPJulContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJulContents.kpi2 == null)?'grey-2':(overbrookSPJulContents.kpi2 >= '0' && overbrookSPJulContents.kpi2 <= '119.4')?'red':(overbrookSPJulContents.kpi2 > '119.4' && overbrookSPJulContents.kpi2 <= '159.2')?'orange':(overbrookSPJulContents.kpi2 > '159.2' && overbrookSPJulContents.kpi2 < '199')?'yellow-7':(overbrookSPJulContents.kpi2 >= '199' && overbrookSPJulContents.kpi2 < '238.8')?'green':(overbrookSPJulContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAugContents.kpi1 == null)?'grey-2':(overbrookSPAugContents.kpi1 >= '0' && overbrookSPAugContents.kpi1 <= '2.7')?'red':(overbrookSPAugContents.kpi1 > '2.7' && overbrookSPAugContents.kpi1 <= '3.6')?'orange':(overbrookSPAugContents.kpi1 > '3.6' && overbrookSPAugContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAugContents.kpi1 >= '4.5' && overbrookSPAugContents.kpi1 < '5.4')?'green':(overbrookSPAugContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAugContents.kpi2 == null)?'grey-2':(overbrookSPAugContents.kpi2 >= '0' && overbrookSPAugContents.kpi2 <= '119.4')?'red':(overbrookSPAugContents.kpi2 > '119.4' && overbrookSPAugContents.kpi2 <= '159.2')?'orange':(overbrookSPAugContents.kpi2 > '159.2' && overbrookSPAugContents.kpi2 < '199')?'yellow-7':(overbrookSPAugContents.kpi2 >= '199' && overbrookSPAugContents.kpi2 < '238.8')?'green':(overbrookSPAugContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPSepContents.kpi1 == null)?'grey-2':(overbrookSPSepContents.kpi1 >= '0' && overbrookSPSepContents.kpi1 <= '2.7')?'red':(overbrookSPSepContents.kpi1 > '2.7' && overbrookSPSepContents.kpi1 <= '3.6')?'orange':(overbrookSPSepContents.kpi1 > '3.6' && overbrookSPSepContents.kpi1 < '4.5')?'yellow-7':(overbrookSPSepContents.kpi1 >= '4.5' && overbrookSPSepContents.kpi1 < '5.4')?'green':(overbrookSPSepContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPSepContents.kpi2 == null)?'grey-2':(overbrookSPSepContents.kpi2 >= '0' && overbrookSPSepContents.kpi2 <= '119.4')?'red':(overbrookSPSepContents.kpi2 > '119.4' && overbrookSPSepContents.kpi2 <= '159.2')?'orange':(overbrookSPSepContents.kpi2 > '159.2' && overbrookSPSepContents.kpi2 < '199')?'yellow-7':(overbrookSPSepContents.kpi2 >= '199' && overbrookSPSepContents.kpi2 < '238.8')?'green':(overbrookSPSepContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPOctContents.kpi1 == null)?'grey-2':(overbrookSPOctContents.kpi1 >= '0' && overbrookSPOctContents.kpi1 <= '2.7')?'red':(overbrookSPOctContents.kpi1 > '2.7' && overbrookSPOctContents.kpi1 <= '3.6')?'orange':(overbrookSPOctContents.kpi1 > '3.6' && overbrookSPOctContents.kpi1 < '4.5')?'yellow-7':(overbrookSPOctContents.kpi1 >= '4.5' && overbrookSPOctContents.kpi1 < '5.4')?'green':(overbrookSPOctContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPOctContents.kpi2 == null)?'grey-2':(overbrookSPOctContents.kpi2 >= '0' && overbrookSPOctContents.kpi2 <= '119.4')?'red':(overbrookSPOctContents.kpi2 > '119.4' && overbrookSPOctContents.kpi2 <= '159.2')?'orange':(overbrookSPOctContents.kpi2 > '159.2' && overbrookSPOctContents.kpi2 < '199')?'yellow-7':(overbrookSPOctContents.kpi2 >= '199' && overbrookSPOctContents.kpi2 < '238.8')?'green':(overbrookSPOctContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPNovContents.kpi1 == null)?'grey-2':(overbrookSPNovContents.kpi1 >= '0' && overbrookSPNovContents.kpi1 <= '2.7')?'red':(overbrookSPNovContents.kpi1 > '2.7' && overbrookSPNovContents.kpi1 <= '3.6')?'orange':(overbrookSPNovContents.kpi1 > '3.6' && overbrookSPNovContents.kpi1 < '4.5')?'yellow-7':(overbrookSPNovContents.kpi1 >= '4.5' && overbrookSPNovContents.kpi1 < '5.4')?'green':(overbrookSPNovContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPNovContents.kpi2 == null)?'grey-2':(overbrookSPNovContents.kpi2 >= '0' && overbrookSPNovContents.kpi2 <= '119.4')?'red':(overbrookSPNovContents.kpi2 > '119.4' && overbrookSPNovContents.kpi2 <= '159.2')?'orange':(overbrookSPNovContents.kpi2 > '159.2' && overbrookSPNovContents.kpi2 < '199')?'yellow-7':(overbrookSPNovContents.kpi2 >= '199' && overbrookSPNovContents.kpi2 < '238.8')?'green':(overbrookSPNovContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPDecContents.kpi1 == null)?'grey-2':(overbrookSPDecContents.kpi1 >= '0' && overbrookSPDecContents.kpi1 <= '2.7')?'red':(overbrookSPDecContents.kpi1 > '2.7' && overbrookSPDecContents.kpi1 <= '3.6')?'orange':(overbrookSPDecContents.kpi1 > '3.6' && overbrookSPDecContents.kpi1 < '4.5')?'yellow-7':(overbrookSPDecContents.kpi1 >= '4.5' && overbrookSPDecContents.kpi1 < '5.4')?'green':(overbrookSPDecContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPDecContents.kpi2 == null)?'grey-2':(overbrookSPDecContents.kpi2 >= '0' && overbrookSPDecContents.kpi2 <= '119.4')?'red':(overbrookSPDecContents.kpi2 > '119.4' && overbrookSPDecContents.kpi2 <= '159.2')?'orange':(overbrookSPDecContents.kpi2 > '159.2' && overbrookSPDecContents.kpi2 < '199')?'yellow-7':(overbrookSPDecContents.kpi2 >= '199' && overbrookSPDecContents.kpi2 < '238.8')?'green':(overbrookSPDecContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                                <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJanContents.kpi1 == null)?'grey-2':(overbrookSPJanContents.kpi1 >= '0' && overbrookSPJanContents.kpi1 <= '2.7')?'red':(overbrookSPJanContents.kpi1 > '2.7' && overbrookSPJanContents.kpi1 <= '3.6')?'orange':(overbrookSPJanContents.kpi1 > '3.6' && overbrookSPJanContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJanContents.kpi1 >= '4.5' && overbrookSPJanContents.kpi1 < '5.4')?'green':(overbrookSPJanContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJanContents.kpi2 == null)?'grey-2':(overbrookSPJanContents.kpi2 >= '0' && overbrookSPJanContents.kpi2 <= '119.4')?'red':(overbrookSPJanContents.kpi2 > '119.4' && overbrookSPJanContents.kpi2 <= '159.2')?'orange':(overbrookSPJanContents.kpi2 > '159.2' && overbrookSPJanContents.kpi2 < '199')?'yellow-7':(overbrookSPJanContents.kpi2 >= '199' && overbrookSPJanContents.kpi2 < '238.8')?'green':(overbrookSPJanContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPFebContents.kpi1 == null)?'grey-2':(overbrookSPFebContents.kpi1 >= '0' && overbrookSPFebContents.kpi1 <= '2.7')?'red':(overbrookSPFebContents.kpi1 > '2.7' && overbrookSPFebContents.kpi1 <= '3.6')?'orange':(overbrookSPFebContents.kpi1 > '3.6' && overbrookSPFebContents.kpi1 < '4.5')?'yellow-7':(overbrookSPFebContents.kpi1 >= '4.5' && overbrookSPFebContents.kpi1 < '5.4')?'green':(overbrookSPFebContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPFebContents.kpi2 == null)?'grey-2':(overbrookSPFebContents.kpi2 >= '0' && overbrookSPFebContents.kpi2 <= '119.4')?'red':(overbrookSPFebContents.kpi2 > '119.4' && overbrookSPFebContents.kpi2 <= '159.2')?'orange':(overbrookSPFebContents.kpi2 > '159.2' && overbrookSPFebContents.kpi2 < '199')?'yellow-7':(overbrookSPFebContents.kpi2 >= '199' && overbrookSPFebContents.kpi2 < '238.8')?'green':(overbrookSPFebContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMarContents.kpi1 == null)?'grey-2':(overbrookSPMarContents.kpi1 >= '0' && overbrookSPMarContents.kpi1 <= '2.7')?'red':(overbrookSPMarContents.kpi1 > '2.7' && overbrookSPMarContents.kpi1 <= '3.6')?'orange':(overbrookSPMarContents.kpi1 > '3.6' && overbrookSPMarContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMarContents.kpi1 >= '4.5' && overbrookSPMarContents.kpi1 < '5.4')?'green':(overbrookSPMarContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMarContents.kpi2 == null)?'grey-2':(overbrookSPMarContents.kpi2 >= '0' && overbrookSPMarContents.kpi2 <= '119.4')?'red':(overbrookSPMarContents.kpi2 > '119.4' && overbrookSPMarContents.kpi2 <= '159.2')?'orange':(overbrookSPMarContents.kpi2 > '159.2' && overbrookSPMarContents.kpi2 < '199')?'yellow-7':(overbrookSPMarContents.kpi2 >= '199' && overbrookSPMarContents.kpi2 < '238.8')?'green':(overbrookSPMarContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAprContents.kpi1 == null)?'grey-2':(overbrookSPAprContents.kpi1 >= '0' && overbrookSPAprContents.kpi1 <= '2.7')?'red':(overbrookSPAprContents.kpi1 > '2.7' && overbrookSPAprContents.kpi1 <= '3.6')?'orange':(overbrookSPAprContents.kpi1 > '3.6' && overbrookSPAprContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAprContents.kpi1 >= '4.5' && overbrookSPAprContents.kpi1 < '5.4')?'green':(overbrookSPAprContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAprContents.kpi2 == null)?'grey-2':(overbrookSPAprContents.kpi2 >= '0' && overbrookSPAprContents.kpi2 <= '119.4')?'red':(overbrookSPAprContents.kpi2 > '119.4' && overbrookSPAprContents.kpi2 <= '159.2')?'orange':(overbrookSPAprContents.kpi2 > '159.2' && overbrookSPAprContents.kpi2 < '199')?'yellow-7':(overbrookSPAprContents.kpi2 >= '199' && overbrookSPAprContents.kpi2 < '238.8')?'green':(overbrookSPAprContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMayContents.kpi1 == null)?'grey-2':(overbrookSPMayContents.kpi1 >= '0' && overbrookSPMayContents.kpi1 <= '2.7')?'red':(overbrookSPMayContents.kpi1 > '2.7' && overbrookSPMayContents.kpi1 <= '3.6')?'orange':(overbrookSPMayContents.kpi1 > '3.6' && overbrookSPMayContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMayContents.kpi1 >= '4.5' && overbrookSPMayContents.kpi1 < '5.4')?'green':(overbrookSPMayContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMayContents.kpi2 == null)?'grey-2':(overbrookSPMayContents.kpi2 >= '0' && overbrookSPMayContents.kpi2 <= '119.4')?'red':(overbrookSPMayContents.kpi2 > '119.4' && overbrookSPMayContents.kpi2 <= '159.2')?'orange':(overbrookSPMayContents.kpi2 > '159.2' && overbrookSPMayContents.kpi2 < '199')?'yellow-7':(overbrookSPMayContents.kpi2 >= '199' && overbrookSPMayContents.kpi2 < '238.8')?'green':(overbrookSPMayContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJunContents.kpi1 == null)?'grey-2':(overbrookSPJunContents.kpi1 >= '0' && overbrookSPJunContents.kpi1 <= '2.7')?'red':(overbrookSPJunContents.kpi1 > '2.7' && overbrookSPJunContents.kpi1 <= '3.6')?'orange':(overbrookSPJunContents.kpi1 > '3.6' && overbrookSPJunContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJunContents.kpi1 >= '4.5' && overbrookSPJunContents.kpi1 < '5.4')?'green':(overbrookSPJunContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJunContents.kpi2 == null)?'grey-2':(overbrookSPJunContents.kpi2 >= '0' && overbrookSPJunContents.kpi2 <= '119.4')?'red':(overbrookSPJunContents.kpi2 > '119.4' && overbrookSPJunContents.kpi2 <= '159.2')?'orange':(overbrookSPJunContents.kpi2 > '159.2' && overbrookSPJunContents.kpi2 < '199')?'yellow-7':(overbrookSPJunContents.kpi2 >= '199' && overbrookSPJunContents.kpi2 < '238.8')?'green':(overbrookSPJunContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJulContents.kpi1 == null)?'grey-2':(overbrookSPJulContents.kpi1 >= '0' && overbrookSPJulContents.kpi1 <= '2.7')?'red':(overbrookSPJulContents.kpi1 > '2.7' && overbrookSPJulContents.kpi1 <= '3.6')?'orange':(overbrookSPJulContents.kpi1 > '3.6' && overbrookSPJulContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJulContents.kpi1 >= '4.5' && overbrookSPJulContents.kpi1 < '5.4')?'green':(overbrookSPJulContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJulContents.kpi2 == null)?'grey-2':(overbrookSPJulContents.kpi2 >= '0' && overbrookSPJulContents.kpi2 <= '119.4')?'red':(overbrookSPJulContents.kpi2 > '119.4' && overbrookSPJulContents.kpi2 <= '159.2')?'orange':(overbrookSPJulContents.kpi2 > '159.2' && overbrookSPJulContents.kpi2 < '199')?'yellow-7':(overbrookSPJulContents.kpi2 >= '199' && overbrookSPJulContents.kpi2 < '238.8')?'green':(overbrookSPJulContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAugContents.kpi1 == null)?'grey-2':(overbrookSPAugContents.kpi1 >= '0' && overbrookSPAugContents.kpi1 <= '2.7')?'red':(overbrookSPAugContents.kpi1 > '2.7' && overbrookSPAugContents.kpi1 <= '3.6')?'orange':(overbrookSPAugContents.kpi1 > '3.6' && overbrookSPAugContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAugContents.kpi1 >= '4.5' && overbrookSPAugContents.kpi1 < '5.4')?'green':(overbrookSPAugContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAugContents.kpi2 == null)?'grey-2':(overbrookSPAugContents.kpi2 >= '0' && overbrookSPAugContents.kpi2 <= '119.4')?'red':(overbrookSPAugContents.kpi2 > '119.4' && overbrookSPAugContents.kpi2 <= '159.2')?'orange':(overbrookSPAugContents.kpi2 > '159.2' && overbrookSPAugContents.kpi2 < '199')?'yellow-7':(overbrookSPAugContents.kpi2 >= '199' && overbrookSPAugContents.kpi2 < '238.8')?'green':(overbrookSPAugContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPSepContents.kpi1 == null)?'grey-2':(overbrookSPSepContents.kpi1 >= '0' && overbrookSPSepContents.kpi1 <= '2.7')?'red':(overbrookSPSepContents.kpi1 > '2.7' && overbrookSPSepContents.kpi1 <= '3.6')?'orange':(overbrookSPSepContents.kpi1 > '3.6' && overbrookSPSepContents.kpi1 < '4.5')?'yellow-7':(overbrookSPSepContents.kpi1 >= '4.5' && overbrookSPSepContents.kpi1 < '5.4')?'green':(overbrookSPSepContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPSepContents.kpi2 == null)?'grey-2':(overbrookSPSepContents.kpi2 >= '0' && overbrookSPSepContents.kpi2 <= '119.4')?'red':(overbrookSPSepContents.kpi2 > '119.4' && overbrookSPSepContents.kpi2 <= '159.2')?'orange':(overbrookSPSepContents.kpi2 > '159.2' && overbrookSPSepContents.kpi2 < '199')?'yellow-7':(overbrookSPSepContents.kpi2 >= '199' && overbrookSPSepContents.kpi2 < '238.8')?'green':(overbrookSPSepContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPOctContents.kpi1 == null)?'grey-2':(overbrookSPOctContents.kpi1 >= '0' && overbrookSPOctContents.kpi1 <= '2.7')?'red':(overbrookSPOctContents.kpi1 > '2.7' && overbrookSPOctContents.kpi1 <= '3.6')?'orange':(overbrookSPOctContents.kpi1 > '3.6' && overbrookSPOctContents.kpi1 < '4.5')?'yellow-7':(overbrookSPOctContents.kpi1 >= '4.5' && overbrookSPOctContents.kpi1 < '5.4')?'green':(overbrookSPOctContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPOctContents.kpi2 == null)?'grey-2':(overbrookSPOctContents.kpi2 >= '0' && overbrookSPOctContents.kpi2 <= '119.4')?'red':(overbrookSPOctContents.kpi2 > '119.4' && overbrookSPOctContents.kpi2 <= '159.2')?'orange':(overbrookSPOctContents.kpi2 > '159.2' && overbrookSPOctContents.kpi2 < '199')?'yellow-7':(overbrookSPOctContents.kpi2 >= '199' && overbrookSPOctContents.kpi2 < '238.8')?'green':(overbrookSPOctContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPNovContents.kpi1 == null)?'grey-2':(overbrookSPNovContents.kpi1 >= '0' && overbrookSPNovContents.kpi1 <= '2.7')?'red':(overbrookSPNovContents.kpi1 > '2.7' && overbrookSPNovContents.kpi1 <= '3.6')?'orange':(overbrookSPNovContents.kpi1 > '3.6' && overbrookSPNovContents.kpi1 < '4.5')?'yellow-7':(overbrookSPNovContents.kpi1 >= '4.5' && overbrookSPNovContents.kpi1 < '5.4')?'green':(overbrookSPNovContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPNovContents.kpi2 == null)?'grey-2':(overbrookSPNovContents.kpi2 >= '0' && overbrookSPNovContents.kpi2 <= '119.4')?'red':(overbrookSPNovContents.kpi2 > '119.4' && overbrookSPNovContents.kpi2 <= '159.2')?'orange':(overbrookSPNovContents.kpi2 > '159.2' && overbrookSPNovContents.kpi2 < '199')?'yellow-7':(overbrookSPNovContents.kpi2 >= '199' && overbrookSPNovContents.kpi2 < '238.8')?'green':(overbrookSPNovContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPDecContents.kpi1 == null)?'grey-2':(overbrookSPDecContents.kpi1 >= '0' && overbrookSPDecContents.kpi1 <= '2.7')?'red':(overbrookSPDecContents.kpi1 > '2.7' && overbrookSPDecContents.kpi1 <= '3.6')?'orange':(overbrookSPDecContents.kpi1 > '3.6' && overbrookSPDecContents.kpi1 < '4.5')?'yellow-7':(overbrookSPDecContents.kpi1 >= '4.5' && overbrookSPDecContents.kpi1 < '5.4')?'green':(overbrookSPDecContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPDecContents.kpi2 == null)?'grey-2':(overbrookSPDecContents.kpi2 >= '0' && overbrookSPDecContents.kpi2 <= '119.4')?'red':(overbrookSPDecContents.kpi2 > '119.4' && overbrookSPDecContents.kpi2 <= '159.2')?'orange':(overbrookSPDecContents.kpi2 > '159.2' && overbrookSPDecContents.kpi2 < '199')?'yellow-7':(overbrookSPDecContents.kpi2 >= '199' && overbrookSPDecContents.kpi2 < '238.8')?'green':(overbrookSPDecContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                                <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJanContents.kpi1 == null)?'grey-2':(overbrookSPJanContents.kpi1 >= '0' && overbrookSPJanContents.kpi1 <= '2.7')?'red':(overbrookSPJanContents.kpi1 > '2.7' && overbrookSPJanContents.kpi1 <= '3.6')?'orange':(overbrookSPJanContents.kpi1 > '3.6' && overbrookSPJanContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJanContents.kpi1 >= '4.5' && overbrookSPJanContents.kpi1 < '5.4')?'green':(overbrookSPJanContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJanContents.kpi2 == null)?'grey-2':(overbrookSPJanContents.kpi2 >= '0' && overbrookSPJanContents.kpi2 <= '119.4')?'red':(overbrookSPJanContents.kpi2 > '119.4' && overbrookSPJanContents.kpi2 <= '159.2')?'orange':(overbrookSPJanContents.kpi2 > '159.2' && overbrookSPJanContents.kpi2 < '199')?'yellow-7':(overbrookSPJanContents.kpi2 >= '199' && overbrookSPJanContents.kpi2 < '238.8')?'green':(overbrookSPJanContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPFebContents.kpi1 == null)?'grey-2':(overbrookSPFebContents.kpi1 >= '0' && overbrookSPFebContents.kpi1 <= '2.7')?'red':(overbrookSPFebContents.kpi1 > '2.7' && overbrookSPFebContents.kpi1 <= '3.6')?'orange':(overbrookSPFebContents.kpi1 > '3.6' && overbrookSPFebContents.kpi1 < '4.5')?'yellow-7':(overbrookSPFebContents.kpi1 >= '4.5' && overbrookSPFebContents.kpi1 < '5.4')?'green':(overbrookSPFebContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPFebContents.kpi2 == null)?'grey-2':(overbrookSPFebContents.kpi2 >= '0' && overbrookSPFebContents.kpi2 <= '119.4')?'red':(overbrookSPFebContents.kpi2 > '119.4' && overbrookSPFebContents.kpi2 <= '159.2')?'orange':(overbrookSPFebContents.kpi2 > '159.2' && overbrookSPFebContents.kpi2 < '199')?'yellow-7':(overbrookSPFebContents.kpi2 >= '199' && overbrookSPFebContents.kpi2 < '238.8')?'green':(overbrookSPFebContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMarContents.kpi1 == null)?'grey-2':(overbrookSPMarContents.kpi1 >= '0' && overbrookSPMarContents.kpi1 <= '2.7')?'red':(overbrookSPMarContents.kpi1 > '2.7' && overbrookSPMarContents.kpi1 <= '3.6')?'orange':(overbrookSPMarContents.kpi1 > '3.6' && overbrookSPMarContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMarContents.kpi1 >= '4.5' && overbrookSPMarContents.kpi1 < '5.4')?'green':(overbrookSPMarContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMarContents.kpi2 == null)?'grey-2':(overbrookSPMarContents.kpi2 >= '0' && overbrookSPMarContents.kpi2 <= '119.4')?'red':(overbrookSPMarContents.kpi2 > '119.4' && overbrookSPMarContents.kpi2 <= '159.2')?'orange':(overbrookSPMarContents.kpi2 > '159.2' && overbrookSPMarContents.kpi2 < '199')?'yellow-7':(overbrookSPMarContents.kpi2 >= '199' && overbrookSPMarContents.kpi2 < '238.8')?'green':(overbrookSPMarContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAprContents.kpi1 == null)?'grey-2':(overbrookSPAprContents.kpi1 >= '0' && overbrookSPAprContents.kpi1 <= '2.7')?'red':(overbrookSPAprContents.kpi1 > '2.7' && overbrookSPAprContents.kpi1 <= '3.6')?'orange':(overbrookSPAprContents.kpi1 > '3.6' && overbrookSPAprContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAprContents.kpi1 >= '4.5' && overbrookSPAprContents.kpi1 < '5.4')?'green':(overbrookSPAprContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAprContents.kpi2 == null)?'grey-2':(overbrookSPAprContents.kpi2 >= '0' && overbrookSPAprContents.kpi2 <= '119.4')?'red':(overbrookSPAprContents.kpi2 > '119.4' && overbrookSPAprContents.kpi2 <= '159.2')?'orange':(overbrookSPAprContents.kpi2 > '159.2' && overbrookSPAprContents.kpi2 < '199')?'yellow-7':(overbrookSPAprContents.kpi2 >= '199' && overbrookSPAprContents.kpi2 < '238.8')?'green':(overbrookSPAprContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMayContents.kpi1 == null)?'grey-2':(overbrookSPMayContents.kpi1 >= '0' && overbrookSPMayContents.kpi1 <= '2.7')?'red':(overbrookSPMayContents.kpi1 > '2.7' && overbrookSPMayContents.kpi1 <= '3.6')?'orange':(overbrookSPMayContents.kpi1 > '3.6' && overbrookSPMayContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMayContents.kpi1 >= '4.5' && overbrookSPMayContents.kpi1 < '5.4')?'green':(overbrookSPMayContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMayContents.kpi2 == null)?'grey-2':(overbrookSPMayContents.kpi2 >= '0' && overbrookSPMayContents.kpi2 <= '119.4')?'red':(overbrookSPMayContents.kpi2 > '119.4' && overbrookSPMayContents.kpi2 <= '159.2')?'orange':(overbrookSPMayContents.kpi2 > '159.2' && overbrookSPMayContents.kpi2 < '199')?'yellow-7':(overbrookSPMayContents.kpi2 >= '199' && overbrookSPMayContents.kpi2 < '238.8')?'green':(overbrookSPMayContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJunContents.kpi1 == null)?'grey-2':(overbrookSPJunContents.kpi1 >= '0' && overbrookSPJunContents.kpi1 <= '2.7')?'red':(overbrookSPJunContents.kpi1 > '2.7' && overbrookSPJunContents.kpi1 <= '3.6')?'orange':(overbrookSPJunContents.kpi1 > '3.6' && overbrookSPJunContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJunContents.kpi1 >= '4.5' && overbrookSPJunContents.kpi1 < '5.4')?'green':(overbrookSPJunContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJunContents.kpi2 == null)?'grey-2':(overbrookSPJunContents.kpi2 >= '0' && overbrookSPJunContents.kpi2 <= '119.4')?'red':(overbrookSPJunContents.kpi2 > '119.4' && overbrookSPJunContents.kpi2 <= '159.2')?'orange':(overbrookSPJunContents.kpi2 > '159.2' && overbrookSPJunContents.kpi2 < '199')?'yellow-7':(overbrookSPJunContents.kpi2 >= '199' && overbrookSPJunContents.kpi2 < '238.8')?'green':(overbrookSPJunContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJulContents.kpi1 == null)?'grey-2':(overbrookSPJulContents.kpi1 >= '0' && overbrookSPJulContents.kpi1 <= '2.7')?'red':(overbrookSPJulContents.kpi1 > '2.7' && overbrookSPJulContents.kpi1 <= '3.6')?'orange':(overbrookSPJulContents.kpi1 > '3.6' && overbrookSPJulContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJulContents.kpi1 >= '4.5' && overbrookSPJulContents.kpi1 < '5.4')?'green':(overbrookSPJulContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJulContents.kpi2 == null)?'grey-2':(overbrookSPJulContents.kpi2 >= '0' && overbrookSPJulContents.kpi2 <= '119.4')?'red':(overbrookSPJulContents.kpi2 > '119.4' && overbrookSPJulContents.kpi2 <= '159.2')?'orange':(overbrookSPJulContents.kpi2 > '159.2' && overbrookSPJulContents.kpi2 < '199')?'yellow-7':(overbrookSPJulContents.kpi2 >= '199' && overbrookSPJulContents.kpi2 < '238.8')?'green':(overbrookSPJulContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAugContents.kpi1 == null)?'grey-2':(overbrookSPAugContents.kpi1 >= '0' && overbrookSPAugContents.kpi1 <= '2.7')?'red':(overbrookSPAugContents.kpi1 > '2.7' && overbrookSPAugContents.kpi1 <= '3.6')?'orange':(overbrookSPAugContents.kpi1 > '3.6' && overbrookSPAugContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAugContents.kpi1 >= '4.5' && overbrookSPAugContents.kpi1 < '5.4')?'green':(overbrookSPAugContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAugContents.kpi2 == null)?'grey-2':(overbrookSPAugContents.kpi2 >= '0' && overbrookSPAugContents.kpi2 <= '119.4')?'red':(overbrookSPAugContents.kpi2 > '119.4' && overbrookSPAugContents.kpi2 <= '159.2')?'orange':(overbrookSPAugContents.kpi2 > '159.2' && overbrookSPAugContents.kpi2 < '199')?'yellow-7':(overbrookSPAugContents.kpi2 >= '199' && overbrookSPAugContents.kpi2 < '238.8')?'green':(overbrookSPAugContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPSepContents.kpi1 == null)?'grey-2':(overbrookSPSepContents.kpi1 >= '0' && overbrookSPSepContents.kpi1 <= '2.7')?'red':(overbrookSPSepContents.kpi1 > '2.7' && overbrookSPSepContents.kpi1 <= '3.6')?'orange':(overbrookSPSepContents.kpi1 > '3.6' && overbrookSPSepContents.kpi1 < '4.5')?'yellow-7':(overbrookSPSepContents.kpi1 >= '4.5' && overbrookSPSepContents.kpi1 < '5.4')?'green':(overbrookSPSepContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPSepContents.kpi2 == null)?'grey-2':(overbrookSPSepContents.kpi2 >= '0' && overbrookSPSepContents.kpi2 <= '119.4')?'red':(overbrookSPSepContents.kpi2 > '119.4' && overbrookSPSepContents.kpi2 <= '159.2')?'orange':(overbrookSPSepContents.kpi2 > '159.2' && overbrookSPSepContents.kpi2 < '199')?'yellow-7':(overbrookSPSepContents.kpi2 >= '199' && overbrookSPSepContents.kpi2 < '238.8')?'green':(overbrookSPSepContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPOctContents.kpi1 == null)?'grey-2':(overbrookSPOctContents.kpi1 >= '0' && overbrookSPOctContents.kpi1 <= '2.7')?'red':(overbrookSPOctContents.kpi1 > '2.7' && overbrookSPOctContents.kpi1 <= '3.6')?'orange':(overbrookSPOctContents.kpi1 > '3.6' && overbrookSPOctContents.kpi1 < '4.5')?'yellow-7':(overbrookSPOctContents.kpi1 >= '4.5' && overbrookSPOctContents.kpi1 < '5.4')?'green':(overbrookSPOctContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPOctContents.kpi2 == null)?'grey-2':(overbrookSPOctContents.kpi2 >= '0' && overbrookSPOctContents.kpi2 <= '119.4')?'red':(overbrookSPOctContents.kpi2 > '119.4' && overbrookSPOctContents.kpi2 <= '159.2')?'orange':(overbrookSPOctContents.kpi2 > '159.2' && overbrookSPOctContents.kpi2 < '199')?'yellow-7':(overbrookSPOctContents.kpi2 >= '199' && overbrookSPOctContents.kpi2 < '238.8')?'green':(overbrookSPOctContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPNovContents.kpi1 == null)?'grey-2':(overbrookSPNovContents.kpi1 >= '0' && overbrookSPNovContents.kpi1 <= '2.7')?'red':(overbrookSPNovContents.kpi1 > '2.7' && overbrookSPNovContents.kpi1 <= '3.6')?'orange':(overbrookSPNovContents.kpi1 > '3.6' && overbrookSPNovContents.kpi1 < '4.5')?'yellow-7':(overbrookSPNovContents.kpi1 >= '4.5' && overbrookSPNovContents.kpi1 < '5.4')?'green':(overbrookSPNovContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPNovContents.kpi2 == null)?'grey-2':(overbrookSPNovContents.kpi2 >= '0' && overbrookSPNovContents.kpi2 <= '119.4')?'red':(overbrookSPNovContents.kpi2 > '119.4' && overbrookSPNovContents.kpi2 <= '159.2')?'orange':(overbrookSPNovContents.kpi2 > '159.2' && overbrookSPNovContents.kpi2 < '199')?'yellow-7':(overbrookSPNovContents.kpi2 >= '199' && overbrookSPNovContents.kpi2 < '238.8')?'green':(overbrookSPNovContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPDecContents.kpi1 == null)?'grey-2':(overbrookSPDecContents.kpi1 >= '0' && overbrookSPDecContents.kpi1 <= '2.7')?'red':(overbrookSPDecContents.kpi1 > '2.7' && overbrookSPDecContents.kpi1 <= '3.6')?'orange':(overbrookSPDecContents.kpi1 > '3.6' && overbrookSPDecContents.kpi1 < '4.5')?'yellow-7':(overbrookSPDecContents.kpi1 >= '4.5' && overbrookSPDecContents.kpi1 < '5.4')?'green':(overbrookSPDecContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPDecContents.kpi2 == null)?'grey-2':(overbrookSPDecContents.kpi2 >= '0' && overbrookSPDecContents.kpi2 <= '119.4')?'red':(overbrookSPDecContents.kpi2 > '119.4' && overbrookSPDecContents.kpi2 <= '159.2')?'orange':(overbrookSPDecContents.kpi2 > '159.2' && overbrookSPDecContents.kpi2 < '199')?'yellow-7':(overbrookSPDecContents.kpi2 >= '199' && overbrookSPDecContents.kpi2 < '238.8')?'green':(overbrookSPDecContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                                <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJanContents.kpi1 == null)?'grey-2':(overbrookSPJanContents.kpi1 >= '0' && overbrookSPJanContents.kpi1 <= '2.7')?'red':(overbrookSPJanContents.kpi1 > '2.7' && overbrookSPJanContents.kpi1 <= '3.6')?'orange':(overbrookSPJanContents.kpi1 > '3.6' && overbrookSPJanContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJanContents.kpi1 >= '4.5' && overbrookSPJanContents.kpi1 < '5.4')?'green':(overbrookSPJanContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJanContents.kpi2 == null)?'grey-2':(overbrookSPJanContents.kpi2 >= '0' && overbrookSPJanContents.kpi2 <= '119.4')?'red':(overbrookSPJanContents.kpi2 > '119.4' && overbrookSPJanContents.kpi2 <= '159.2')?'orange':(overbrookSPJanContents.kpi2 > '159.2' && overbrookSPJanContents.kpi2 < '199')?'yellow-7':(overbrookSPJanContents.kpi2 >= '199' && overbrookSPJanContents.kpi2 < '238.8')?'green':(overbrookSPJanContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPFebContents.kpi1 == null)?'grey-2':(overbrookSPFebContents.kpi1 >= '0' && overbrookSPFebContents.kpi1 <= '2.7')?'red':(overbrookSPFebContents.kpi1 > '2.7' && overbrookSPFebContents.kpi1 <= '3.6')?'orange':(overbrookSPFebContents.kpi1 > '3.6' && overbrookSPFebContents.kpi1 < '4.5')?'yellow-7':(overbrookSPFebContents.kpi1 >= '4.5' && overbrookSPFebContents.kpi1 < '5.4')?'green':(overbrookSPFebContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPFebContents.kpi2 == null)?'grey-2':(overbrookSPFebContents.kpi2 >= '0' && overbrookSPFebContents.kpi2 <= '119.4')?'red':(overbrookSPFebContents.kpi2 > '119.4' && overbrookSPFebContents.kpi2 <= '159.2')?'orange':(overbrookSPFebContents.kpi2 > '159.2' && overbrookSPFebContents.kpi2 < '199')?'yellow-7':(overbrookSPFebContents.kpi2 >= '199' && overbrookSPFebContents.kpi2 < '238.8')?'green':(overbrookSPFebContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMarContents.kpi1 == null)?'grey-2':(overbrookSPMarContents.kpi1 >= '0' && overbrookSPMarContents.kpi1 <= '2.7')?'red':(overbrookSPMarContents.kpi1 > '2.7' && overbrookSPMarContents.kpi1 <= '3.6')?'orange':(overbrookSPMarContents.kpi1 > '3.6' && overbrookSPMarContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMarContents.kpi1 >= '4.5' && overbrookSPMarContents.kpi1 < '5.4')?'green':(overbrookSPMarContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMarContents.kpi2 == null)?'grey-2':(overbrookSPMarContents.kpi2 >= '0' && overbrookSPMarContents.kpi2 <= '119.4')?'red':(overbrookSPMarContents.kpi2 > '119.4' && overbrookSPMarContents.kpi2 <= '159.2')?'orange':(overbrookSPMarContents.kpi2 > '159.2' && overbrookSPMarContents.kpi2 < '199')?'yellow-7':(overbrookSPMarContents.kpi2 >= '199' && overbrookSPMarContents.kpi2 < '238.8')?'green':(overbrookSPMarContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAprContents.kpi1 == null)?'grey-2':(overbrookSPAprContents.kpi1 >= '0' && overbrookSPAprContents.kpi1 <= '2.7')?'red':(overbrookSPAprContents.kpi1 > '2.7' && overbrookSPAprContents.kpi1 <= '3.6')?'orange':(overbrookSPAprContents.kpi1 > '3.6' && overbrookSPAprContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAprContents.kpi1 >= '4.5' && overbrookSPAprContents.kpi1 < '5.4')?'green':(overbrookSPAprContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAprContents.kpi2 == null)?'grey-2':(overbrookSPAprContents.kpi2 >= '0' && overbrookSPAprContents.kpi2 <= '119.4')?'red':(overbrookSPAprContents.kpi2 > '119.4' && overbrookSPAprContents.kpi2 <= '159.2')?'orange':(overbrookSPAprContents.kpi2 > '159.2' && overbrookSPAprContents.kpi2 < '199')?'yellow-7':(overbrookSPAprContents.kpi2 >= '199' && overbrookSPAprContents.kpi2 < '238.8')?'green':(overbrookSPAprContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMayContents.kpi1 == null)?'grey-2':(overbrookSPMayContents.kpi1 >= '0' && overbrookSPMayContents.kpi1 <= '2.7')?'red':(overbrookSPMayContents.kpi1 > '2.7' && overbrookSPMayContents.kpi1 <= '3.6')?'orange':(overbrookSPMayContents.kpi1 > '3.6' && overbrookSPMayContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMayContents.kpi1 >= '4.5' && overbrookSPMayContents.kpi1 < '5.4')?'green':(overbrookSPMayContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMayContents.kpi2 == null)?'grey-2':(overbrookSPMayContents.kpi2 >= '0' && overbrookSPMayContents.kpi2 <= '119.4')?'red':(overbrookSPMayContents.kpi2 > '119.4' && overbrookSPMayContents.kpi2 <= '159.2')?'orange':(overbrookSPMayContents.kpi2 > '159.2' && overbrookSPMayContents.kpi2 < '199')?'yellow-7':(overbrookSPMayContents.kpi2 >= '199' && overbrookSPMayContents.kpi2 < '238.8')?'green':(overbrookSPMayContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJunContents.kpi1 == null)?'grey-2':(overbrookSPJunContents.kpi1 >= '0' && overbrookSPJunContents.kpi1 <= '2.7')?'red':(overbrookSPJunContents.kpi1 > '2.7' && overbrookSPJunContents.kpi1 <= '3.6')?'orange':(overbrookSPJunContents.kpi1 > '3.6' && overbrookSPJunContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJunContents.kpi1 >= '4.5' && overbrookSPJunContents.kpi1 < '5.4')?'green':(overbrookSPJunContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJunContents.kpi2 == null)?'grey-2':(overbrookSPJunContents.kpi2 >= '0' && overbrookSPJunContents.kpi2 <= '119.4')?'red':(overbrookSPJunContents.kpi2 > '119.4' && overbrookSPJunContents.kpi2 <= '159.2')?'orange':(overbrookSPJunContents.kpi2 > '159.2' && overbrookSPJunContents.kpi2 < '199')?'yellow-7':(overbrookSPJunContents.kpi2 >= '199' && overbrookSPJunContents.kpi2 < '238.8')?'green':(overbrookSPJunContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJulContents.kpi1 == null)?'grey-2':(overbrookSPJulContents.kpi1 >= '0' && overbrookSPJulContents.kpi1 <= '2.7')?'red':(overbrookSPJulContents.kpi1 > '2.7' && overbrookSPJulContents.kpi1 <= '3.6')?'orange':(overbrookSPJulContents.kpi1 > '3.6' && overbrookSPJulContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJulContents.kpi1 >= '4.5' && overbrookSPJulContents.kpi1 < '5.4')?'green':(overbrookSPJulContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJulContents.kpi2 == null)?'grey-2':(overbrookSPJulContents.kpi2 >= '0' && overbrookSPJulContents.kpi2 <= '119.4')?'red':(overbrookSPJulContents.kpi2 > '119.4' && overbrookSPJulContents.kpi2 <= '159.2')?'orange':(overbrookSPJulContents.kpi2 > '159.2' && overbrookSPJulContents.kpi2 < '199')?'yellow-7':(overbrookSPJulContents.kpi2 >= '199' && overbrookSPJulContents.kpi2 < '238.8')?'green':(overbrookSPJulContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAugContents.kpi1 == null)?'grey-2':(overbrookSPAugContents.kpi1 >= '0' && overbrookSPAugContents.kpi1 <= '2.7')?'red':(overbrookSPAugContents.kpi1 > '2.7' && overbrookSPAugContents.kpi1 <= '3.6')?'orange':(overbrookSPAugContents.kpi1 > '3.6' && overbrookSPAugContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAugContents.kpi1 >= '4.5' && overbrookSPAugContents.kpi1 < '5.4')?'green':(overbrookSPAugContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAugContents.kpi2 == null)?'grey-2':(overbrookSPAugContents.kpi2 >= '0' && overbrookSPAugContents.kpi2 <= '119.4')?'red':(overbrookSPAugContents.kpi2 > '119.4' && overbrookSPAugContents.kpi2 <= '159.2')?'orange':(overbrookSPAugContents.kpi2 > '159.2' && overbrookSPAugContents.kpi2 < '199')?'yellow-7':(overbrookSPAugContents.kpi2 >= '199' && overbrookSPAugContents.kpi2 < '238.8')?'green':(overbrookSPAugContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPSepContents.kpi1 == null)?'grey-2':(overbrookSPSepContents.kpi1 >= '0' && overbrookSPSepContents.kpi1 <= '2.7')?'red':(overbrookSPSepContents.kpi1 > '2.7' && overbrookSPSepContents.kpi1 <= '3.6')?'orange':(overbrookSPSepContents.kpi1 > '3.6' && overbrookSPSepContents.kpi1 < '4.5')?'yellow-7':(overbrookSPSepContents.kpi1 >= '4.5' && overbrookSPSepContents.kpi1 < '5.4')?'green':(overbrookSPSepContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPSepContents.kpi2 == null)?'grey-2':(overbrookSPSepContents.kpi2 >= '0' && overbrookSPSepContents.kpi2 <= '119.4')?'red':(overbrookSPSepContents.kpi2 > '119.4' && overbrookSPSepContents.kpi2 <= '159.2')?'orange':(overbrookSPSepContents.kpi2 > '159.2' && overbrookSPSepContents.kpi2 < '199')?'yellow-7':(overbrookSPSepContents.kpi2 >= '199' && overbrookSPSepContents.kpi2 < '238.8')?'green':(overbrookSPSepContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPOctContents.kpi1 == null)?'grey-2':(overbrookSPOctContents.kpi1 >= '0' && overbrookSPOctContents.kpi1 <= '2.7')?'red':(overbrookSPOctContents.kpi1 > '2.7' && overbrookSPOctContents.kpi1 <= '3.6')?'orange':(overbrookSPOctContents.kpi1 > '3.6' && overbrookSPOctContents.kpi1 < '4.5')?'yellow-7':(overbrookSPOctContents.kpi1 >= '4.5' && overbrookSPOctContents.kpi1 < '5.4')?'green':(overbrookSPOctContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPOctContents.kpi2 == null)?'grey-2':(overbrookSPOctContents.kpi2 >= '0' && overbrookSPOctContents.kpi2 <= '119.4')?'red':(overbrookSPOctContents.kpi2 > '119.4' && overbrookSPOctContents.kpi2 <= '159.2')?'orange':(overbrookSPOctContents.kpi2 > '159.2' && overbrookSPOctContents.kpi2 < '199')?'yellow-7':(overbrookSPOctContents.kpi2 >= '199' && overbrookSPOctContents.kpi2 < '238.8')?'green':(overbrookSPOctContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPNovContents.kpi1 == null)?'grey-2':(overbrookSPNovContents.kpi1 >= '0' && overbrookSPNovContents.kpi1 <= '2.7')?'red':(overbrookSPNovContents.kpi1 > '2.7' && overbrookSPNovContents.kpi1 <= '3.6')?'orange':(overbrookSPNovContents.kpi1 > '3.6' && overbrookSPNovContents.kpi1 < '4.5')?'yellow-7':(overbrookSPNovContents.kpi1 >= '4.5' && overbrookSPNovContents.kpi1 < '5.4')?'green':(overbrookSPNovContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPNovContents.kpi2 == null)?'grey-2':(overbrookSPNovContents.kpi2 >= '0' && overbrookSPNovContents.kpi2 <= '119.4')?'red':(overbrookSPNovContents.kpi2 > '119.4' && overbrookSPNovContents.kpi2 <= '159.2')?'orange':(overbrookSPNovContents.kpi2 > '159.2' && overbrookSPNovContents.kpi2 < '199')?'yellow-7':(overbrookSPNovContents.kpi2 >= '199' && overbrookSPNovContents.kpi2 < '238.8')?'green':(overbrookSPNovContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPDecContents.kpi1 == null)?'grey-2':(overbrookSPDecContents.kpi1 >= '0' && overbrookSPDecContents.kpi1 <= '2.7')?'red':(overbrookSPDecContents.kpi1 > '2.7' && overbrookSPDecContents.kpi1 <= '3.6')?'orange':(overbrookSPDecContents.kpi1 > '3.6' && overbrookSPDecContents.kpi1 < '4.5')?'yellow-7':(overbrookSPDecContents.kpi1 >= '4.5' && overbrookSPDecContents.kpi1 < '5.4')?'green':(overbrookSPDecContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPDecContents.kpi2 == null)?'grey-2':(overbrookSPDecContents.kpi2 >= '0' && overbrookSPDecContents.kpi2 <= '119.4')?'red':(overbrookSPDecContents.kpi2 > '119.4' && overbrookSPDecContents.kpi2 <= '159.2')?'orange':(overbrookSPDecContents.kpi2 > '159.2' && overbrookSPDecContents.kpi2 < '199')?'yellow-7':(overbrookSPDecContents.kpi2 >= '199' && overbrookSPDecContents.kpi2 < '238.8')?'green':(overbrookSPDecContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                                <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJanContents.kpi1 == null)?'grey-2':(overbrookSPJanContents.kpi1 >= '0' && overbrookSPJanContents.kpi1 <= '2.7')?'red':(overbrookSPJanContents.kpi1 > '2.7' && overbrookSPJanContents.kpi1 <= '3.6')?'orange':(overbrookSPJanContents.kpi1 > '3.6' && overbrookSPJanContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJanContents.kpi1 >= '4.5' && overbrookSPJanContents.kpi1 < '5.4')?'green':(overbrookSPJanContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJanContents.kpi2 == null)?'grey-2':(overbrookSPJanContents.kpi2 >= '0' && overbrookSPJanContents.kpi2 <= '119.4')?'red':(overbrookSPJanContents.kpi2 > '119.4' && overbrookSPJanContents.kpi2 <= '159.2')?'orange':(overbrookSPJanContents.kpi2 > '159.2' && overbrookSPJanContents.kpi2 < '199')?'yellow-7':(overbrookSPJanContents.kpi2 >= '199' && overbrookSPJanContents.kpi2 < '238.8')?'green':(overbrookSPJanContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPFebContents.kpi1 == null)?'grey-2':(overbrookSPFebContents.kpi1 >= '0' && overbrookSPFebContents.kpi1 <= '2.7')?'red':(overbrookSPFebContents.kpi1 > '2.7' && overbrookSPFebContents.kpi1 <= '3.6')?'orange':(overbrookSPFebContents.kpi1 > '3.6' && overbrookSPFebContents.kpi1 < '4.5')?'yellow-7':(overbrookSPFebContents.kpi1 >= '4.5' && overbrookSPFebContents.kpi1 < '5.4')?'green':(overbrookSPFebContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPFebContents.kpi2 == null)?'grey-2':(overbrookSPFebContents.kpi2 >= '0' && overbrookSPFebContents.kpi2 <= '119.4')?'red':(overbrookSPFebContents.kpi2 > '119.4' && overbrookSPFebContents.kpi2 <= '159.2')?'orange':(overbrookSPFebContents.kpi2 > '159.2' && overbrookSPFebContents.kpi2 < '199')?'yellow-7':(overbrookSPFebContents.kpi2 >= '199' && overbrookSPFebContents.kpi2 < '238.8')?'green':(overbrookSPFebContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMarContents.kpi1 == null)?'grey-2':(overbrookSPMarContents.kpi1 >= '0' && overbrookSPMarContents.kpi1 <= '2.7')?'red':(overbrookSPMarContents.kpi1 > '2.7' && overbrookSPMarContents.kpi1 <= '3.6')?'orange':(overbrookSPMarContents.kpi1 > '3.6' && overbrookSPMarContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMarContents.kpi1 >= '4.5' && overbrookSPMarContents.kpi1 < '5.4')?'green':(overbrookSPMarContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMarContents.kpi2 == null)?'grey-2':(overbrookSPMarContents.kpi2 >= '0' && overbrookSPMarContents.kpi2 <= '119.4')?'red':(overbrookSPMarContents.kpi2 > '119.4' && overbrookSPMarContents.kpi2 <= '159.2')?'orange':(overbrookSPMarContents.kpi2 > '159.2' && overbrookSPMarContents.kpi2 < '199')?'yellow-7':(overbrookSPMarContents.kpi2 >= '199' && overbrookSPMarContents.kpi2 < '238.8')?'green':(overbrookSPMarContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAprContents.kpi1 == null)?'grey-2':(overbrookSPAprContents.kpi1 >= '0' && overbrookSPAprContents.kpi1 <= '2.7')?'red':(overbrookSPAprContents.kpi1 > '2.7' && overbrookSPAprContents.kpi1 <= '3.6')?'orange':(overbrookSPAprContents.kpi1 > '3.6' && overbrookSPAprContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAprContents.kpi1 >= '4.5' && overbrookSPAprContents.kpi1 < '5.4')?'green':(overbrookSPAprContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAprContents.kpi2 == null)?'grey-2':(overbrookSPAprContents.kpi2 >= '0' && overbrookSPAprContents.kpi2 <= '119.4')?'red':(overbrookSPAprContents.kpi2 > '119.4' && overbrookSPAprContents.kpi2 <= '159.2')?'orange':(overbrookSPAprContents.kpi2 > '159.2' && overbrookSPAprContents.kpi2 < '199')?'yellow-7':(overbrookSPAprContents.kpi2 >= '199' && overbrookSPAprContents.kpi2 < '238.8')?'green':(overbrookSPAprContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMayContents.kpi1 == null)?'grey-2':(overbrookSPMayContents.kpi1 >= '0' && overbrookSPMayContents.kpi1 <= '2.7')?'red':(overbrookSPMayContents.kpi1 > '2.7' && overbrookSPMayContents.kpi1 <= '3.6')?'orange':(overbrookSPMayContents.kpi1 > '3.6' && overbrookSPMayContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMayContents.kpi1 >= '4.5' && overbrookSPMayContents.kpi1 < '5.4')?'green':(overbrookSPMayContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMayContents.kpi2 == null)?'grey-2':(overbrookSPMayContents.kpi2 >= '0' && overbrookSPMayContents.kpi2 <= '119.4')?'red':(overbrookSPMayContents.kpi2 > '119.4' && overbrookSPMayContents.kpi2 <= '159.2')?'orange':(overbrookSPMayContents.kpi2 > '159.2' && overbrookSPMayContents.kpi2 < '199')?'yellow-7':(overbrookSPMayContents.kpi2 >= '199' && overbrookSPMayContents.kpi2 < '238.8')?'green':(overbrookSPMayContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJunContents.kpi1 == null)?'grey-2':(overbrookSPJunContents.kpi1 >= '0' && overbrookSPJunContents.kpi1 <= '2.7')?'red':(overbrookSPJunContents.kpi1 > '2.7' && overbrookSPJunContents.kpi1 <= '3.6')?'orange':(overbrookSPJunContents.kpi1 > '3.6' && overbrookSPJunContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJunContents.kpi1 >= '4.5' && overbrookSPJunContents.kpi1 < '5.4')?'green':(overbrookSPJunContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJunContents.kpi2 == null)?'grey-2':(overbrookSPJunContents.kpi2 >= '0' && overbrookSPJunContents.kpi2 <= '119.4')?'red':(overbrookSPJunContents.kpi2 > '119.4' && overbrookSPJunContents.kpi2 <= '159.2')?'orange':(overbrookSPJunContents.kpi2 > '159.2' && overbrookSPJunContents.kpi2 < '199')?'yellow-7':(overbrookSPJunContents.kpi2 >= '199' && overbrookSPJunContents.kpi2 < '238.8')?'green':(overbrookSPJunContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJulContents.kpi1 == null)?'grey-2':(overbrookSPJulContents.kpi1 >= '0' && overbrookSPJulContents.kpi1 <= '2.7')?'red':(overbrookSPJulContents.kpi1 > '2.7' && overbrookSPJulContents.kpi1 <= '3.6')?'orange':(overbrookSPJulContents.kpi1 > '3.6' && overbrookSPJulContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJulContents.kpi1 >= '4.5' && overbrookSPJulContents.kpi1 < '5.4')?'green':(overbrookSPJulContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJulContents.kpi2 == null)?'grey-2':(overbrookSPJulContents.kpi2 >= '0' && overbrookSPJulContents.kpi2 <= '119.4')?'red':(overbrookSPJulContents.kpi2 > '119.4' && overbrookSPJulContents.kpi2 <= '159.2')?'orange':(overbrookSPJulContents.kpi2 > '159.2' && overbrookSPJulContents.kpi2 < '199')?'yellow-7':(overbrookSPJulContents.kpi2 >= '199' && overbrookSPJulContents.kpi2 < '238.8')?'green':(overbrookSPJulContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAugContents.kpi1 == null)?'grey-2':(overbrookSPAugContents.kpi1 >= '0' && overbrookSPAugContents.kpi1 <= '2.7')?'red':(overbrookSPAugContents.kpi1 > '2.7' && overbrookSPAugContents.kpi1 <= '3.6')?'orange':(overbrookSPAugContents.kpi1 > '3.6' && overbrookSPAugContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAugContents.kpi1 >= '4.5' && overbrookSPAugContents.kpi1 < '5.4')?'green':(overbrookSPAugContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAugContents.kpi2 == null)?'grey-2':(overbrookSPAugContents.kpi2 >= '0' && overbrookSPAugContents.kpi2 <= '119.4')?'red':(overbrookSPAugContents.kpi2 > '119.4' && overbrookSPAugContents.kpi2 <= '159.2')?'orange':(overbrookSPAugContents.kpi2 > '159.2' && overbrookSPAugContents.kpi2 < '199')?'yellow-7':(overbrookSPAugContents.kpi2 >= '199' && overbrookSPAugContents.kpi2 < '238.8')?'green':(overbrookSPAugContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPSepContents.kpi1 == null)?'grey-2':(overbrookSPSepContents.kpi1 >= '0' && overbrookSPSepContents.kpi1 <= '2.7')?'red':(overbrookSPSepContents.kpi1 > '2.7' && overbrookSPSepContents.kpi1 <= '3.6')?'orange':(overbrookSPSepContents.kpi1 > '3.6' && overbrookSPSepContents.kpi1 < '4.5')?'yellow-7':(overbrookSPSepContents.kpi1 >= '4.5' && overbrookSPSepContents.kpi1 < '5.4')?'green':(overbrookSPSepContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPSepContents.kpi2 == null)?'grey-2':(overbrookSPSepContents.kpi2 >= '0' && overbrookSPSepContents.kpi2 <= '119.4')?'red':(overbrookSPSepContents.kpi2 > '119.4' && overbrookSPSepContents.kpi2 <= '159.2')?'orange':(overbrookSPSepContents.kpi2 > '159.2' && overbrookSPSepContents.kpi2 < '199')?'yellow-7':(overbrookSPSepContents.kpi2 >= '199' && overbrookSPSepContents.kpi2 < '238.8')?'green':(overbrookSPSepContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPOctContents.kpi1 == null)?'grey-2':(overbrookSPOctContents.kpi1 >= '0' && overbrookSPOctContents.kpi1 <= '2.7')?'red':(overbrookSPOctContents.kpi1 > '2.7' && overbrookSPOctContents.kpi1 <= '3.6')?'orange':(overbrookSPOctContents.kpi1 > '3.6' && overbrookSPOctContents.kpi1 < '4.5')?'yellow-7':(overbrookSPOctContents.kpi1 >= '4.5' && overbrookSPOctContents.kpi1 < '5.4')?'green':(overbrookSPOctContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPOctContents.kpi2 == null)?'grey-2':(overbrookSPOctContents.kpi2 >= '0' && overbrookSPOctContents.kpi2 <= '119.4')?'red':(overbrookSPOctContents.kpi2 > '119.4' && overbrookSPOctContents.kpi2 <= '159.2')?'orange':(overbrookSPOctContents.kpi2 > '159.2' && overbrookSPOctContents.kpi2 < '199')?'yellow-7':(overbrookSPOctContents.kpi2 >= '199' && overbrookSPOctContents.kpi2 < '238.8')?'green':(overbrookSPOctContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPNovContents.kpi1 == null)?'grey-2':(overbrookSPNovContents.kpi1 >= '0' && overbrookSPNovContents.kpi1 <= '2.7')?'red':(overbrookSPNovContents.kpi1 > '2.7' && overbrookSPNovContents.kpi1 <= '3.6')?'orange':(overbrookSPNovContents.kpi1 > '3.6' && overbrookSPNovContents.kpi1 < '4.5')?'yellow-7':(overbrookSPNovContents.kpi1 >= '4.5' && overbrookSPNovContents.kpi1 < '5.4')?'green':(overbrookSPNovContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPNovContents.kpi2 == null)?'grey-2':(overbrookSPNovContents.kpi2 >= '0' && overbrookSPNovContents.kpi2 <= '119.4')?'red':(overbrookSPNovContents.kpi2 > '119.4' && overbrookSPNovContents.kpi2 <= '159.2')?'orange':(overbrookSPNovContents.kpi2 > '159.2' && overbrookSPNovContents.kpi2 < '199')?'yellow-7':(overbrookSPNovContents.kpi2 >= '199' && overbrookSPNovContents.kpi2 < '238.8')?'green':(overbrookSPNovContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPDecContents.kpi1 == null)?'grey-2':(overbrookSPDecContents.kpi1 >= '0' && overbrookSPDecContents.kpi1 <= '2.7')?'red':(overbrookSPDecContents.kpi1 > '2.7' && overbrookSPDecContents.kpi1 <= '3.6')?'orange':(overbrookSPDecContents.kpi1 > '3.6' && overbrookSPDecContents.kpi1 < '4.5')?'yellow-7':(overbrookSPDecContents.kpi1 >= '4.5' && overbrookSPDecContents.kpi1 < '5.4')?'green':(overbrookSPDecContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPDecContents.kpi2 == null)?'grey-2':(overbrookSPDecContents.kpi2 >= '0' && overbrookSPDecContents.kpi2 <= '119.4')?'red':(overbrookSPDecContents.kpi2 > '119.4' && overbrookSPDecContents.kpi2 <= '159.2')?'orange':(overbrookSPDecContents.kpi2 > '159.2' && overbrookSPDecContents.kpi2 < '199')?'yellow-7':(overbrookSPDecContents.kpi2 >= '199' && overbrookSPDecContents.kpi2 < '238.8')?'green':(overbrookSPDecContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                                <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJanContents.kpi1 == null)?'grey-2':(overbrookSPJanContents.kpi1 >= '0' && overbrookSPJanContents.kpi1 <= '2.7')?'red':(overbrookSPJanContents.kpi1 > '2.7' && overbrookSPJanContents.kpi1 <= '3.6')?'orange':(overbrookSPJanContents.kpi1 > '3.6' && overbrookSPJanContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJanContents.kpi1 >= '4.5' && overbrookSPJanContents.kpi1 < '5.4')?'green':(overbrookSPJanContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJanContents.kpi2 == null)?'grey-2':(overbrookSPJanContents.kpi2 >= '0' && overbrookSPJanContents.kpi2 <= '119.4')?'red':(overbrookSPJanContents.kpi2 > '119.4' && overbrookSPJanContents.kpi2 <= '159.2')?'orange':(overbrookSPJanContents.kpi2 > '159.2' && overbrookSPJanContents.kpi2 < '199')?'yellow-7':(overbrookSPJanContents.kpi2 >= '199' && overbrookSPJanContents.kpi2 < '238.8')?'green':(overbrookSPJanContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPFebContents.kpi1 == null)?'grey-2':(overbrookSPFebContents.kpi1 >= '0' && overbrookSPFebContents.kpi1 <= '2.7')?'red':(overbrookSPFebContents.kpi1 > '2.7' && overbrookSPFebContents.kpi1 <= '3.6')?'orange':(overbrookSPFebContents.kpi1 > '3.6' && overbrookSPFebContents.kpi1 < '4.5')?'yellow-7':(overbrookSPFebContents.kpi1 >= '4.5' && overbrookSPFebContents.kpi1 < '5.4')?'green':(overbrookSPFebContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPFebContents.kpi2 == null)?'grey-2':(overbrookSPFebContents.kpi2 >= '0' && overbrookSPFebContents.kpi2 <= '119.4')?'red':(overbrookSPFebContents.kpi2 > '119.4' && overbrookSPFebContents.kpi2 <= '159.2')?'orange':(overbrookSPFebContents.kpi2 > '159.2' && overbrookSPFebContents.kpi2 < '199')?'yellow-7':(overbrookSPFebContents.kpi2 >= '199' && overbrookSPFebContents.kpi2 < '238.8')?'green':(overbrookSPFebContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMarContents.kpi1 == null)?'grey-2':(overbrookSPMarContents.kpi1 >= '0' && overbrookSPMarContents.kpi1 <= '2.7')?'red':(overbrookSPMarContents.kpi1 > '2.7' && overbrookSPMarContents.kpi1 <= '3.6')?'orange':(overbrookSPMarContents.kpi1 > '3.6' && overbrookSPMarContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMarContents.kpi1 >= '4.5' && overbrookSPMarContents.kpi1 < '5.4')?'green':(overbrookSPMarContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMarContents.kpi2 == null)?'grey-2':(overbrookSPMarContents.kpi2 >= '0' && overbrookSPMarContents.kpi2 <= '119.4')?'red':(overbrookSPMarContents.kpi2 > '119.4' && overbrookSPMarContents.kpi2 <= '159.2')?'orange':(overbrookSPMarContents.kpi2 > '159.2' && overbrookSPMarContents.kpi2 < '199')?'yellow-7':(overbrookSPMarContents.kpi2 >= '199' && overbrookSPMarContents.kpi2 < '238.8')?'green':(overbrookSPMarContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAprContents.kpi1 == null)?'grey-2':(overbrookSPAprContents.kpi1 >= '0' && overbrookSPAprContents.kpi1 <= '2.7')?'red':(overbrookSPAprContents.kpi1 > '2.7' && overbrookSPAprContents.kpi1 <= '3.6')?'orange':(overbrookSPAprContents.kpi1 > '3.6' && overbrookSPAprContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAprContents.kpi1 >= '4.5' && overbrookSPAprContents.kpi1 < '5.4')?'green':(overbrookSPAprContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAprContents.kpi2 == null)?'grey-2':(overbrookSPAprContents.kpi2 >= '0' && overbrookSPAprContents.kpi2 <= '119.4')?'red':(overbrookSPAprContents.kpi2 > '119.4' && overbrookSPAprContents.kpi2 <= '159.2')?'orange':(overbrookSPAprContents.kpi2 > '159.2' && overbrookSPAprContents.kpi2 < '199')?'yellow-7':(overbrookSPAprContents.kpi2 >= '199' && overbrookSPAprContents.kpi2 < '238.8')?'green':(overbrookSPAprContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMayContents.kpi1 == null)?'grey-2':(overbrookSPMayContents.kpi1 >= '0' && overbrookSPMayContents.kpi1 <= '2.7')?'red':(overbrookSPMayContents.kpi1 > '2.7' && overbrookSPMayContents.kpi1 <= '3.6')?'orange':(overbrookSPMayContents.kpi1 > '3.6' && overbrookSPMayContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMayContents.kpi1 >= '4.5' && overbrookSPMayContents.kpi1 < '5.4')?'green':(overbrookSPMayContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMayContents.kpi2 == null)?'grey-2':(overbrookSPMayContents.kpi2 >= '0' && overbrookSPMayContents.kpi2 <= '119.4')?'red':(overbrookSPMayContents.kpi2 > '119.4' && overbrookSPMayContents.kpi2 <= '159.2')?'orange':(overbrookSPMayContents.kpi2 > '159.2' && overbrookSPMayContents.kpi2 < '199')?'yellow-7':(overbrookSPMayContents.kpi2 >= '199' && overbrookSPMayContents.kpi2 < '238.8')?'green':(overbrookSPMayContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJunContents.kpi1 == null)?'grey-2':(overbrookSPJunContents.kpi1 >= '0' && overbrookSPJunContents.kpi1 <= '2.7')?'red':(overbrookSPJunContents.kpi1 > '2.7' && overbrookSPJunContents.kpi1 <= '3.6')?'orange':(overbrookSPJunContents.kpi1 > '3.6' && overbrookSPJunContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJunContents.kpi1 >= '4.5' && overbrookSPJunContents.kpi1 < '5.4')?'green':(overbrookSPJunContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJunContents.kpi2 == null)?'grey-2':(overbrookSPJunContents.kpi2 >= '0' && overbrookSPJunContents.kpi2 <= '119.4')?'red':(overbrookSPJunContents.kpi2 > '119.4' && overbrookSPJunContents.kpi2 <= '159.2')?'orange':(overbrookSPJunContents.kpi2 > '159.2' && overbrookSPJunContents.kpi2 < '199')?'yellow-7':(overbrookSPJunContents.kpi2 >= '199' && overbrookSPJunContents.kpi2 < '238.8')?'green':(overbrookSPJunContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJulContents.kpi1 == null)?'grey-2':(overbrookSPJulContents.kpi1 >= '0' && overbrookSPJulContents.kpi1 <= '2.7')?'red':(overbrookSPJulContents.kpi1 > '2.7' && overbrookSPJulContents.kpi1 <= '3.6')?'orange':(overbrookSPJulContents.kpi1 > '3.6' && overbrookSPJulContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJulContents.kpi1 >= '4.5' && overbrookSPJulContents.kpi1 < '5.4')?'green':(overbrookSPJulContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJulContents.kpi2 == null)?'grey-2':(overbrookSPJulContents.kpi2 >= '0' && overbrookSPJulContents.kpi2 <= '119.4')?'red':(overbrookSPJulContents.kpi2 > '119.4' && overbrookSPJulContents.kpi2 <= '159.2')?'orange':(overbrookSPJulContents.kpi2 > '159.2' && overbrookSPJulContents.kpi2 < '199')?'yellow-7':(overbrookSPJulContents.kpi2 >= '199' && overbrookSPJulContents.kpi2 < '238.8')?'green':(overbrookSPJulContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAugContents.kpi1 == null)?'grey-2':(overbrookSPAugContents.kpi1 >= '0' && overbrookSPAugContents.kpi1 <= '2.7')?'red':(overbrookSPAugContents.kpi1 > '2.7' && overbrookSPAugContents.kpi1 <= '3.6')?'orange':(overbrookSPAugContents.kpi1 > '3.6' && overbrookSPAugContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAugContents.kpi1 >= '4.5' && overbrookSPAugContents.kpi1 < '5.4')?'green':(overbrookSPAugContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAugContents.kpi2 == null)?'grey-2':(overbrookSPAugContents.kpi2 >= '0' && overbrookSPAugContents.kpi2 <= '119.4')?'red':(overbrookSPAugContents.kpi2 > '119.4' && overbrookSPAugContents.kpi2 <= '159.2')?'orange':(overbrookSPAugContents.kpi2 > '159.2' && overbrookSPAugContents.kpi2 < '199')?'yellow-7':(overbrookSPAugContents.kpi2 >= '199' && overbrookSPAugContents.kpi2 < '238.8')?'green':(overbrookSPAugContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPSepContents.kpi1 == null)?'grey-2':(overbrookSPSepContents.kpi1 >= '0' && overbrookSPSepContents.kpi1 <= '2.7')?'red':(overbrookSPSepContents.kpi1 > '2.7' && overbrookSPSepContents.kpi1 <= '3.6')?'orange':(overbrookSPSepContents.kpi1 > '3.6' && overbrookSPSepContents.kpi1 < '4.5')?'yellow-7':(overbrookSPSepContents.kpi1 >= '4.5' && overbrookSPSepContents.kpi1 < '5.4')?'green':(overbrookSPSepContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPSepContents.kpi2 == null)?'grey-2':(overbrookSPSepContents.kpi2 >= '0' && overbrookSPSepContents.kpi2 <= '119.4')?'red':(overbrookSPSepContents.kpi2 > '119.4' && overbrookSPSepContents.kpi2 <= '159.2')?'orange':(overbrookSPSepContents.kpi2 > '159.2' && overbrookSPSepContents.kpi2 < '199')?'yellow-7':(overbrookSPSepContents.kpi2 >= '199' && overbrookSPSepContents.kpi2 < '238.8')?'green':(overbrookSPSepContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPOctContents.kpi1 == null)?'grey-2':(overbrookSPOctContents.kpi1 >= '0' && overbrookSPOctContents.kpi1 <= '2.7')?'red':(overbrookSPOctContents.kpi1 > '2.7' && overbrookSPOctContents.kpi1 <= '3.6')?'orange':(overbrookSPOctContents.kpi1 > '3.6' && overbrookSPOctContents.kpi1 < '4.5')?'yellow-7':(overbrookSPOctContents.kpi1 >= '4.5' && overbrookSPOctContents.kpi1 < '5.4')?'green':(overbrookSPOctContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPOctContents.kpi2 == null)?'grey-2':(overbrookSPOctContents.kpi2 >= '0' && overbrookSPOctContents.kpi2 <= '119.4')?'red':(overbrookSPOctContents.kpi2 > '119.4' && overbrookSPOctContents.kpi2 <= '159.2')?'orange':(overbrookSPOctContents.kpi2 > '159.2' && overbrookSPOctContents.kpi2 < '199')?'yellow-7':(overbrookSPOctContents.kpi2 >= '199' && overbrookSPOctContents.kpi2 < '238.8')?'green':(overbrookSPOctContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPNovContents.kpi1 == null)?'grey-2':(overbrookSPNovContents.kpi1 >= '0' && overbrookSPNovContents.kpi1 <= '2.7')?'red':(overbrookSPNovContents.kpi1 > '2.7' && overbrookSPNovContents.kpi1 <= '3.6')?'orange':(overbrookSPNovContents.kpi1 > '3.6' && overbrookSPNovContents.kpi1 < '4.5')?'yellow-7':(overbrookSPNovContents.kpi1 >= '4.5' && overbrookSPNovContents.kpi1 < '5.4')?'green':(overbrookSPNovContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPNovContents.kpi2 == null)?'grey-2':(overbrookSPNovContents.kpi2 >= '0' && overbrookSPNovContents.kpi2 <= '119.4')?'red':(overbrookSPNovContents.kpi2 > '119.4' && overbrookSPNovContents.kpi2 <= '159.2')?'orange':(overbrookSPNovContents.kpi2 > '159.2' && overbrookSPNovContents.kpi2 < '199')?'yellow-7':(overbrookSPNovContents.kpi2 >= '199' && overbrookSPNovContents.kpi2 < '238.8')?'green':(overbrookSPNovContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPDecContents.kpi1 == null)?'grey-2':(overbrookSPDecContents.kpi1 >= '0' && overbrookSPDecContents.kpi1 <= '2.7')?'red':(overbrookSPDecContents.kpi1 > '2.7' && overbrookSPDecContents.kpi1 <= '3.6')?'orange':(overbrookSPDecContents.kpi1 > '3.6' && overbrookSPDecContents.kpi1 < '4.5')?'yellow-7':(overbrookSPDecContents.kpi1 >= '4.5' && overbrookSPDecContents.kpi1 < '5.4')?'green':(overbrookSPDecContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPDecContents.kpi2 == null)?'grey-2':(overbrookSPDecContents.kpi2 >= '0' && overbrookSPDecContents.kpi2 <= '119.4')?'red':(overbrookSPDecContents.kpi2 > '119.4' && overbrookSPDecContents.kpi2 <= '159.2')?'orange':(overbrookSPDecContents.kpi2 > '159.2' && overbrookSPDecContents.kpi2 < '199')?'yellow-7':(overbrookSPDecContents.kpi2 >= '199' && overbrookSPDecContents.kpi2 < '238.8')?'green':(overbrookSPDecContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                                <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJanContents.kpi1 == null)?'grey-2':(overbrookSPJanContents.kpi1 >= '0' && overbrookSPJanContents.kpi1 <= '2.7')?'red':(overbrookSPJanContents.kpi1 > '2.7' && overbrookSPJanContents.kpi1 <= '3.6')?'orange':(overbrookSPJanContents.kpi1 > '3.6' && overbrookSPJanContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJanContents.kpi1 >= '4.5' && overbrookSPJanContents.kpi1 < '5.4')?'green':(overbrookSPJanContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJanContents.kpi2 == null)?'grey-2':(overbrookSPJanContents.kpi2 >= '0' && overbrookSPJanContents.kpi2 <= '119.4')?'red':(overbrookSPJanContents.kpi2 > '119.4' && overbrookSPJanContents.kpi2 <= '159.2')?'orange':(overbrookSPJanContents.kpi2 > '159.2' && overbrookSPJanContents.kpi2 < '199')?'yellow-7':(overbrookSPJanContents.kpi2 >= '199' && overbrookSPJanContents.kpi2 < '238.8')?'green':(overbrookSPJanContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJanContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPFebContents.kpi1 == null)?'grey-2':(overbrookSPFebContents.kpi1 >= '0' && overbrookSPFebContents.kpi1 <= '2.7')?'red':(overbrookSPFebContents.kpi1 > '2.7' && overbrookSPFebContents.kpi1 <= '3.6')?'orange':(overbrookSPFebContents.kpi1 > '3.6' && overbrookSPFebContents.kpi1 < '4.5')?'yellow-7':(overbrookSPFebContents.kpi1 >= '4.5' && overbrookSPFebContents.kpi1 < '5.4')?'green':(overbrookSPFebContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPFebContents.kpi2 == null)?'grey-2':(overbrookSPFebContents.kpi2 >= '0' && overbrookSPFebContents.kpi2 <= '119.4')?'red':(overbrookSPFebContents.kpi2 > '119.4' && overbrookSPFebContents.kpi2 <= '159.2')?'orange':(overbrookSPFebContents.kpi2 > '159.2' && overbrookSPFebContents.kpi2 < '199')?'yellow-7':(overbrookSPFebContents.kpi2 >= '199' && overbrookSPFebContents.kpi2 < '238.8')?'green':(overbrookSPFebContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPFebContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMarContents.kpi1 == null)?'grey-2':(overbrookSPMarContents.kpi1 >= '0' && overbrookSPMarContents.kpi1 <= '2.7')?'red':(overbrookSPMarContents.kpi1 > '2.7' && overbrookSPMarContents.kpi1 <= '3.6')?'orange':(overbrookSPMarContents.kpi1 > '3.6' && overbrookSPMarContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMarContents.kpi1 >= '4.5' && overbrookSPMarContents.kpi1 < '5.4')?'green':(overbrookSPMarContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMarContents.kpi2 == null)?'grey-2':(overbrookSPMarContents.kpi2 >= '0' && overbrookSPMarContents.kpi2 <= '119.4')?'red':(overbrookSPMarContents.kpi2 > '119.4' && overbrookSPMarContents.kpi2 <= '159.2')?'orange':(overbrookSPMarContents.kpi2 > '159.2' && overbrookSPMarContents.kpi2 < '199')?'yellow-7':(overbrookSPMarContents.kpi2 >= '199' && overbrookSPMarContents.kpi2 < '238.8')?'green':(overbrookSPMarContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMarContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAprContents.kpi1 == null)?'grey-2':(overbrookSPAprContents.kpi1 >= '0' && overbrookSPAprContents.kpi1 <= '2.7')?'red':(overbrookSPAprContents.kpi1 > '2.7' && overbrookSPAprContents.kpi1 <= '3.6')?'orange':(overbrookSPAprContents.kpi1 > '3.6' && overbrookSPAprContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAprContents.kpi1 >= '4.5' && overbrookSPAprContents.kpi1 < '5.4')?'green':(overbrookSPAprContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAprContents.kpi2 == null)?'grey-2':(overbrookSPAprContents.kpi2 >= '0' && overbrookSPAprContents.kpi2 <= '119.4')?'red':(overbrookSPAprContents.kpi2 > '119.4' && overbrookSPAprContents.kpi2 <= '159.2')?'orange':(overbrookSPAprContents.kpi2 > '159.2' && overbrookSPAprContents.kpi2 < '199')?'yellow-7':(overbrookSPAprContents.kpi2 >= '199' && overbrookSPAprContents.kpi2 < '238.8')?'green':(overbrookSPAprContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAprContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPMayContents.kpi1 == null)?'grey-2':(overbrookSPMayContents.kpi1 >= '0' && overbrookSPMayContents.kpi1 <= '2.7')?'red':(overbrookSPMayContents.kpi1 > '2.7' && overbrookSPMayContents.kpi1 <= '3.6')?'orange':(overbrookSPMayContents.kpi1 > '3.6' && overbrookSPMayContents.kpi1 < '4.5')?'yellow-7':(overbrookSPMayContents.kpi1 >= '4.5' && overbrookSPMayContents.kpi1 < '5.4')?'green':(overbrookSPMayContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPMayContents.kpi2 == null)?'grey-2':(overbrookSPMayContents.kpi2 >= '0' && overbrookSPMayContents.kpi2 <= '119.4')?'red':(overbrookSPMayContents.kpi2 > '119.4' && overbrookSPMayContents.kpi2 <= '159.2')?'orange':(overbrookSPMayContents.kpi2 > '159.2' && overbrookSPMayContents.kpi2 < '199')?'yellow-7':(overbrookSPMayContents.kpi2 >= '199' && overbrookSPMayContents.kpi2 < '238.8')?'green':(overbrookSPMayContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPMayContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJunContents.kpi1 == null)?'grey-2':(overbrookSPJunContents.kpi1 >= '0' && overbrookSPJunContents.kpi1 <= '2.7')?'red':(overbrookSPJunContents.kpi1 > '2.7' && overbrookSPJunContents.kpi1 <= '3.6')?'orange':(overbrookSPJunContents.kpi1 > '3.6' && overbrookSPJunContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJunContents.kpi1 >= '4.5' && overbrookSPJunContents.kpi1 < '5.4')?'green':(overbrookSPJunContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJunContents.kpi2 == null)?'grey-2':(overbrookSPJunContents.kpi2 >= '0' && overbrookSPJunContents.kpi2 <= '119.4')?'red':(overbrookSPJunContents.kpi2 > '119.4' && overbrookSPJunContents.kpi2 <= '159.2')?'orange':(overbrookSPJunContents.kpi2 > '159.2' && overbrookSPJunContents.kpi2 < '199')?'yellow-7':(overbrookSPJunContents.kpi2 >= '199' && overbrookSPJunContents.kpi2 < '238.8')?'green':(overbrookSPJunContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJunContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPJulContents.kpi1 == null)?'grey-2':(overbrookSPJulContents.kpi1 >= '0' && overbrookSPJulContents.kpi1 <= '2.7')?'red':(overbrookSPJulContents.kpi1 > '2.7' && overbrookSPJulContents.kpi1 <= '3.6')?'orange':(overbrookSPJulContents.kpi1 > '3.6' && overbrookSPJulContents.kpi1 < '4.5')?'yellow-7':(overbrookSPJulContents.kpi1 >= '4.5' && overbrookSPJulContents.kpi1 < '5.4')?'green':(overbrookSPJulContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPJulContents.kpi2 == null)?'grey-2':(overbrookSPJulContents.kpi2 >= '0' && overbrookSPJulContents.kpi2 <= '119.4')?'red':(overbrookSPJulContents.kpi2 > '119.4' && overbrookSPJulContents.kpi2 <= '159.2')?'orange':(overbrookSPJulContents.kpi2 > '159.2' && overbrookSPJulContents.kpi2 < '199')?'yellow-7':(overbrookSPJulContents.kpi2 >= '199' && overbrookSPJulContents.kpi2 < '238.8')?'green':(overbrookSPJulContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPJulContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPAugContents.kpi1 == null)?'grey-2':(overbrookSPAugContents.kpi1 >= '0' && overbrookSPAugContents.kpi1 <= '2.7')?'red':(overbrookSPAugContents.kpi1 > '2.7' && overbrookSPAugContents.kpi1 <= '3.6')?'orange':(overbrookSPAugContents.kpi1 > '3.6' && overbrookSPAugContents.kpi1 < '4.5')?'yellow-7':(overbrookSPAugContents.kpi1 >= '4.5' && overbrookSPAugContents.kpi1 < '5.4')?'green':(overbrookSPAugContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPAugContents.kpi2 == null)?'grey-2':(overbrookSPAugContents.kpi2 >= '0' && overbrookSPAugContents.kpi2 <= '119.4')?'red':(overbrookSPAugContents.kpi2 > '119.4' && overbrookSPAugContents.kpi2 <= '159.2')?'orange':(overbrookSPAugContents.kpi2 > '159.2' && overbrookSPAugContents.kpi2 < '199')?'yellow-7':(overbrookSPAugContents.kpi2 >= '199' && overbrookSPAugContents.kpi2 < '238.8')?'green':(overbrookSPAugContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPAugContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPSepContents.kpi1 == null)?'grey-2':(overbrookSPSepContents.kpi1 >= '0' && overbrookSPSepContents.kpi1 <= '2.7')?'red':(overbrookSPSepContents.kpi1 > '2.7' && overbrookSPSepContents.kpi1 <= '3.6')?'orange':(overbrookSPSepContents.kpi1 > '3.6' && overbrookSPSepContents.kpi1 < '4.5')?'yellow-7':(overbrookSPSepContents.kpi1 >= '4.5' && overbrookSPSepContents.kpi1 < '5.4')?'green':(overbrookSPSepContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPSepContents.kpi2 == null)?'grey-2':(overbrookSPSepContents.kpi2 >= '0' && overbrookSPSepContents.kpi2 <= '119.4')?'red':(overbrookSPSepContents.kpi2 > '119.4' && overbrookSPSepContents.kpi2 <= '159.2')?'orange':(overbrookSPSepContents.kpi2 > '159.2' && overbrookSPSepContents.kpi2 < '199')?'yellow-7':(overbrookSPSepContents.kpi2 >= '199' && overbrookSPSepContents.kpi2 < '238.8')?'green':(overbrookSPSepContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPSepContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPOctContents.kpi1 == null)?'grey-2':(overbrookSPOctContents.kpi1 >= '0' && overbrookSPOctContents.kpi1 <= '2.7')?'red':(overbrookSPOctContents.kpi1 > '2.7' && overbrookSPOctContents.kpi1 <= '3.6')?'orange':(overbrookSPOctContents.kpi1 > '3.6' && overbrookSPOctContents.kpi1 < '4.5')?'yellow-7':(overbrookSPOctContents.kpi1 >= '4.5' && overbrookSPOctContents.kpi1 < '5.4')?'green':(overbrookSPOctContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPOctContents.kpi2 == null)?'grey-2':(overbrookSPOctContents.kpi2 >= '0' && overbrookSPOctContents.kpi2 <= '119.4')?'red':(overbrookSPOctContents.kpi2 > '119.4' && overbrookSPOctContents.kpi2 <= '159.2')?'orange':(overbrookSPOctContents.kpi2 > '159.2' && overbrookSPOctContents.kpi2 < '199')?'yellow-7':(overbrookSPOctContents.kpi2 >= '199' && overbrookSPOctContents.kpi2 < '238.8')?'green':(overbrookSPOctContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPOctContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPNovContents.kpi1 == null)?'grey-2':(overbrookSPNovContents.kpi1 >= '0' && overbrookSPNovContents.kpi1 <= '2.7')?'red':(overbrookSPNovContents.kpi1 > '2.7' && overbrookSPNovContents.kpi1 <= '3.6')?'orange':(overbrookSPNovContents.kpi1 > '3.6' && overbrookSPNovContents.kpi1 < '4.5')?'yellow-7':(overbrookSPNovContents.kpi1 >= '4.5' && overbrookSPNovContents.kpi1 < '5.4')?'green':(overbrookSPNovContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPNovContents.kpi2 == null)?'grey-2':(overbrookSPNovContents.kpi2 >= '0' && overbrookSPNovContents.kpi2 <= '119.4')?'red':(overbrookSPNovContents.kpi2 > '119.4' && overbrookSPNovContents.kpi2 <= '159.2')?'orange':(overbrookSPNovContents.kpi2 > '159.2' && overbrookSPNovContents.kpi2 < '199')?'yellow-7':(overbrookSPNovContents.kpi2 >= '199' && overbrookSPNovContents.kpi2 < '238.8')?'green':(overbrookSPNovContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPNovContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
                              :color="(overbrookSPDecContents.kpi1 == null)?'grey-2':(overbrookSPDecContents.kpi1 >= '0' && overbrookSPDecContents.kpi1 <= '2.7')?'red':(overbrookSPDecContents.kpi1 > '2.7' && overbrookSPDecContents.kpi1 <= '3.6')?'orange':(overbrookSPDecContents.kpi1 > '3.6' && overbrookSPDecContents.kpi1 < '4.5')?'yellow-7':(overbrookSPDecContents.kpi1 >= '4.5' && overbrookSPDecContents.kpi1 < '5.4')?'green':(overbrookSPDecContents.kpi1 >= '5.4'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi1}}
                              <q-tooltip># of safety improvement initiatives implemented</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(overbrookSPDecContents.kpi2 == null)?'grey-2':(overbrookSPDecContents.kpi2 >= '0' && overbrookSPDecContents.kpi2 <= '119.4')?'red':(overbrookSPDecContents.kpi2 > '119.4' && overbrookSPDecContents.kpi2 <= '159.2')?'orange':(overbrookSPDecContents.kpi2 > '159.2' && overbrookSPDecContents.kpi2 < '199')?'yellow-7':(overbrookSPDecContents.kpi2 >= '199' && overbrookSPDecContents.kpi2 < '238.8')?'green':(overbrookSPDecContents.kpi2 >= '238.8'?'blue':'grey-2')"
                            >
                            {{overbrookSPDecContents.kpi2}}
                              <q-tooltip># of vulnerable residents involved in safety improvement initiatives</q-tooltip>
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
              overbrookSPJanContent: {
                
              },
              overbrookSPJanContents : [],
              overbrookSPFebContent: {
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
              overbrookSPFebContents : [],
              overbrookSPMarContent: {
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
              overbrookSPMarContents : [],
              overbrookSPAprContent: {
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
              overbrookSPAprContents : [],
              overbrookSPMayContent: {
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
              overbrookSPMayContents : [],
              overbrookSPJunContent: {
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
              overbrookSPJunContents : [],
              overbrookSPJulContent: {
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
              overbrookSPJulContents : [],
              overbrookSPAugContent: {
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
              overbrookSPAugContents : [],
              overbrookSPSepContent: {
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
              overbrookSPSepContents : [],
              overbrookSPOctContent: {
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
              overbrookSPOctContents : [],
              overbrookSPNovContent: {
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
              overbrookSPNovContents : [],
              overbrookSPDecContent: {
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
              overbrookSPDecContents : []


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
                            {time_period: 'January', expenses: this.overbrookSPJanContents.expenses, revenues: this.overbrookSPJanContents.revenues},
                            {time_period: 'February', expenses: this.overbrookSPFebContents.expenses, revenues: this.overbrookSPFebContents.revenues},
                            {time_period: 'March', expenses: this.overbrookSPMarContents.expenses, revenues: this.overbrookSPMarContents.revenues},
                            {time_period: 'April', expenses: this.overbrookSPAprContents.expenses, revenues: this.overbrookSPAprContents.revenues},
                            {time_period: 'May', expenses: this.overbrookSPMayContents.expenses, revenues: this.overbrookSPMayContents.revenues},
                            {time_period: 'June', expenses: this.overbrookSPJunContents.expenses, revenues: this.overbrookSPJunContents.revenues},
                            {time_period: 'July', expenses: this.overbrookSPJulContents.expenses, revenues: this.overbrookSPJulContents.revenues},
                            {time_period: 'August', expenses: this.overbrookSPAugContents.expenses, revenues: this.overbrookSPAugContents.revenues},
                            {time_period: 'September', expenses: this.overbrookSPSepContents.expenses, revenues: this.overbrookSPSepContents.revenues},
                            {time_period: 'October', expenses: this.overbrookSPOctContents.expenses, revenues: this.overbrookSPOctContents.revenues},
                            {time_period: 'November', expenses: this.overbrookSPNovContents.expenses, revenues: this.overbrookSPNovContents.revenues},
                            {time_period: 'December',expenses: this.overbrookSPDecContents.expenses, revenues: this.overbrookSPDecContents.revenues }
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
                        dimensions: ['months', 'kpi1', 'kpi2', 'uniqueVol', 'volHours'],
                        source: [
                            //{months: 'January', kpi1: 0, kpi2: 0, kpi3: 0, kpi4: 0, uniqueVol: 0, volHours: 0},
                            {months: 'January', kpi1: this.overbrookSPJanContents.kpi1, kpi2: this.overbrookSPJanContents.kpi2, uniqueVol: this.overbrookSPJanContents.uniqueVolunteers, volHours: this.overbrookSPJanContents.volunteerHours},
                            {months: 'February', kpi1: this.overbrookSPFebContents.kpi1, kpi2: this.overbrookSPFebContents.kpi2, uniqueVol: this.overbrookSPFebContents.uniqueVolunteers, volHours: this.overbrookSPFebContents.volunteerHours},
                            {months: 'March', kpi1: this.overbrookSPMarContents.kpi1, kpi2: this.overbrookSPMarContents.kpi2, uniqueVol: this.overbrookSPMarContents.uniqueVolunteers, volHours: this.overbrookSPMarContents.volunteerHours},
                            {months: 'April', kpi1: this.overbrookSPAprContents.kpi1, kpi2: this.overbrookSPAprContents.kpi2, uniqueVol: this.overbrookSPAprContents.uniqueVolunteers, volHours: this.overbrookSPAprContents.volunteerHours},
                            {months: 'May', kpi1: this.overbrookSPMayContents.kpi1, kpi2: this.overbrookSPMayContents.kpi2, uniqueVol: this.overbrookSPMayContents.uniqueVolunteers, volHours: this.overbrookSPMayContents.volunteerHours},
                            {months: 'June', kpi1: this.overbrookSPJunContents.kpi1, kpi2: this.overbrookSPJunContents.kpi2, uniqueVol: this.overbrookSPJunContents.uniqueVolunteers, volHours: this.overbrookSPJunContents.volunteerHours},
                            {months: 'July', kpi1: this.overbrookSPJulContents.kpi1, kpi2: this.overbrookSPJulContents.kpi2, uniqueVol: this.overbrookSPJulContents.uniqueVolunteers, volHours: this.overbrookSPJulContents.volunteerHours},
                            {months: 'August', kpi1: this.overbrookSPAugContents.kpi1, kpi2: this.overbrookSPAugContents.kpi2, uniqueVol: this.overbrookSPAugContents.uniqueVolunteers, volHours: this.overbrookSPAugContents.volunteerHours},
                            {months: 'September', kpi1: this.overbrookSPSepContents.kpi1, kpi2: this.overbrookSPSepContents.kpi2, uniqueVol: this.overbrookSPSepContents.uniqueVolunteers, volHours: this.overbrookSPSepContents.volunteerHours},
                            {months: 'October', kpi1: this.overbrookSPOctContents.kpi1, kpi2: this.overbrookSPOctContents.kpi2, uniqueVol: this.overbrookSPOctContents.uniqueVolunteers, volHours: this.overbrookSPOctContents.volunteerHours},
                            {months: 'November', kpi1: this.overbrookSPNovContents.kpi1, kpi2: this.overbrookSPNovContents.kpi2, uniqueVol: this.overbrookSPNovContents.uniqueVolunteers, volHours: this.overbrookSPNovContents.volunteerHours},
                            {months: 'December',kpi1: this.overbrookSPDecContents.kpi1, kpi2: this.overbrookSPDecContents.kpi2, uniqueVol: this.overbrookSPDecContents.uniqueVolunteers, volHours: this.overbrookSPDecContents.volunteerHours},
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
                            data: [{value: this.overbrookSPJanContents.budgetUsage}],
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
                                {value: this.overbrookSPJanContents.perCategory1, name: this.overbrookSPJanContents.expenseCategory1},
                                {value: this.overbrookSPJanContents.perCategory2, name: this.overbrookSPJanContents.expenseCategory2},
                                {value: this.overbrookSPJanContents.perCategory3, name: this.overbrookSPJanContents.expenseCategory3},
                                {value: this.overbrookSPJanContents.perCategory4, name: this.overbrookSPJanContents.expenseCategory4},
                                {value: this.overbrookSPJanContents.perCategory5, name: this.overbrookSPJanContents.expenseCategory5},
                                {value: this.overbrookSPJanContents.perCategory6, name: this.overbrookSPJanContents.expenseCategory6}
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
                            data: [{value: this.overbrookSPFebContents.budgetUsage}],
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
                                {value: this.overbrookSPFebContents.perCategory1, name: this.overbrookSPFebContents.expenseCategory1},
                                {value: this.overbrookSPFebContents.perCategory2, name: this.overbrookSPFebContents.expenseCategory2},
                                {value: this.overbrookSPFebContents.perCategory3, name: this.overbrookSPFebContents.expenseCategory3},
                                {value: this.overbrookSPFebContents.perCategory4, name: this.overbrookSPFebContents.expenseCategory4},
                                {value: this.overbrookSPFebContents.perCategory5, name: this.overbrookSPFebContents.expenseCategory5},
                                {value: this.overbrookSPFebContents.perCategory6, name: this.overbrookSPFebContents.expenseCategory6}
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
                            data: [{value: this.overbrookSPMarContents.budgetUsage}],
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
                                {value: this.overbrookSPMarContents.perCategory1, name: this.overbrookSPMarContents.expenseCategory1},
                                {value: this.overbrookSPMarContents.perCategory2, name: this.overbrookSPMarContents.expenseCategory2},
                                {value: this.overbrookSPMarContents.perCategory3, name: this.overbrookSPMarContents.expenseCategory3},
                                {value: this.overbrookSPMarContents.perCategory4, name: this.overbrookSPMarContents.expenseCategory4},
                                {value: this.overbrookSPMarContents.perCategory5, name: this.overbrookSPMarContents.expenseCategory5},
                                {value: this.overbrookSPMarContents.perCategory6, name: this.overbrookSPMarContents.expenseCategory6}
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
                            data: [{value: this.overbrookSPAprContents.budgetUsage}],
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
                                {value: this.overbrookSPAprContents.perCategory1, name: this.overbrookSPAprContents.expenseCategory1},
                                {value: this.overbrookSPAprContents.perCategory2, name: this.overbrookSPAprContents.expenseCategory2},
                                {value: this.overbrookSPAprContents.perCategory3, name: this.overbrookSPAprContents.expenseCategory3},
                                {value: this.overbrookSPAprContents.perCategory4, name: this.overbrookSPAprContents.expenseCategory4},
                                {value: this.overbrookSPAprContents.perCategory5, name: this.overbrookSPAprContents.expenseCategory5},
                                {value: this.overbrookSPAprContents.perCategory6, name: this.overbrookSPAprContents.expenseCategory6}  
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
                            data: [{value: this.overbrookSPMayContents.budgetUsage}],
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
                                {value: this.overbrookSPMayContents.perCategory1, name: this.overbrookSPMayContents.expenseCategory1},
                                {value: this.overbrookSPMayContents.perCategory2, name: this.overbrookSPMayContents.expenseCategory2},
                                {value: this.overbrookSPMayContents.perCategory3, name: this.overbrookSPMayContents.expenseCategory3},
                                {value: this.overbrookSPMayContents.perCategory4, name: this.overbrookSPMayContents.expenseCategory4},
                                {value: this.overbrookSPMayContents.perCategory5, name: this.overbrookSPMayContents.expenseCategory5},
                                {value: this.overbrookSPMayContents.perCategory6, name: this.overbrookSPMayContents.expenseCategory6}  
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
                            data: [{value: this.overbrookSPJunContents.budgetUsage}],
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
                                {value: this.overbrookSPJunContents.perCategory1, name: this.overbrookSPJunContents.expenseCategory1},
                                {value: this.overbrookSPJunContents.perCategory2, name: this.overbrookSPJunContents.expenseCategory2},
                                {value: this.overbrookSPJunContents.perCategory3, name: this.overbrookSPJunContents.expenseCategory3},
                                {value: this.overbrookSPJunContents.perCategory4, name: this.overbrookSPJunContents.expenseCategory4},
                                {value: this.overbrookSPJunContents.perCategory5, name: this.overbrookSPJunContents.expenseCategory5},
                                {value: this.overbrookSPJunContents.perCategory6, name: this.overbrookSPJunContents.expenseCategory6}  
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
                            data: [{value: this.overbrookSPJulContents.budgetUsage}],
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
                                {value: this.overbrookSPJulContents.perCategory1, name: this.overbrookSPJulContents.expenseCategory1},
                                {value: this.overbrookSPJulContents.perCategory2, name: this.overbrookSPJulContents.expenseCategory2},
                                {value: this.overbrookSPJulContents.perCategory3, name: this.overbrookSPJulContents.expenseCategory3},
                                {value: this.overbrookSPJulContents.perCategory4, name: this.overbrookSPJulContents.expenseCategory4},
                                {value: this.overbrookSPJulContents.perCategory5, name: this.overbrookSPJulContents.expenseCategory5},
                                {value: this.overbrookSPJulContents.perCategory6, name: this.overbrookSPJulContents.expenseCategory6}  
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
                            data: [{value: this.overbrookSPAugContents.budgetUsage}],
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
                                {value: this.overbrookSPAugContents.perCategory1, name: this.overbrookSPAugContents.expenseCategory1},
                                {value: this.overbrookSPAugContents.perCategory2, name: this.overbrookSPAugContents.expenseCategory2},
                                {value: this.overbrookSPAugContents.perCategory3, name: this.overbrookSPAugContents.expenseCategory3},
                                {value: this.overbrookSPAugContents.perCategory4, name: this.overbrookSPAugContents.expenseCategory4},
                                {value: this.overbrookSPAugContents.perCategory5, name: this.overbrookSPAugContents.expenseCategory5},
                                {value: this.overbrookSPAugContents.perCategory6, name: this.overbrookSPAugContents.expenseCategory6}  
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
                            data: [{value: this.overbrookSPSepContents.budgetUsage}],
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
                                {value: this.overbrookSPSepContents.perCategory1, name: this.overbrookSPSepContents.expenseCategory1},
                                {value: this.overbrookSPSepContents.perCategory2, name: this.overbrookSPSepContents.expenseCategory2},
                                {value: this.overbrookSPSepContents.perCategory3, name: this.overbrookSPSepContents.expenseCategory3},
                                {value: this.overbrookSPSepContents.perCategory4, name: this.overbrookSPSepContents.expenseCategory4},
                                {value: this.overbrookSPSepContents.perCategory5, name: this.overbrookSPSepContents.expenseCategory5},
                                {value: this.overbrookSPSepContents.perCategory6, name: this.overbrookSPSepContents.expenseCategory6}  
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
                            data: [{value: this.overbrookSPOctContents.budgetUsage}],
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
                                {value: this.overbrookSPOctContents.perCategory1, name: this.overbrookSPOctContents.expenseCategory1},
                                {value: this.overbrookSPOctContents.perCategory2, name: this.overbrookSPOctContents.expenseCategory2},
                                {value: this.overbrookSPOctContents.perCategory3, name: this.overbrookSPOctContents.expenseCategory3},
                                {value: this.overbrookSPOctContents.perCategory4, name: this.overbrookSPOctContents.expenseCategory4},
                                {value: this.overbrookSPOctContents.perCategory5, name: this.overbrookSPOctContents.expenseCategory5},
                                {value: this.overbrookSPOctContents.perCategory6, name: this.overbrookSPOctContents.expenseCategory6}  
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
                            data: [{value: this.overbrookSPNovContents.budgetUsage}],
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
                                {value: this.overbrookSPNovContents.perCategory1, name: this.overbrookSPNovContents.expenseCategory1},
                                {value: this.overbrookSPNovContents.perCategory2, name: this.overbrookSPNovContents.expenseCategory2},
                                {value: this.overbrookSPNovContents.perCategory3, name: this.overbrookSPNovContents.expenseCategory3},
                                {value: this.overbrookSPNovContents.perCategory4, name: this.overbrookSPNovContents.expenseCategory4},
                                {value: this.overbrookSPNovContents.perCategory5, name: this.overbrookSPNovContents.expenseCategory5},
                                {value: this.overbrookSPNovContents.perCategory6, name: this.overbrookSPNovContents.expenseCategory6}  
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
                            data: [{value: this.overbrookSPDecContents.budgetUsage}],
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
                                {value: this.overbrookSPDecContents.perCategory1, name: this.overbrookSPDecContents.expenseCategory1},
                                {value: this.overbrookSPDecContents.perCategory2, name: this.overbrookSPDecContents.expenseCategory2},
                                {value: this.overbrookSPDecContents.perCategory3, name: this.overbrookSPDecContents.expenseCategory3},
                                {value: this.overbrookSPDecContents.perCategory4, name: this.overbrookSPDecContents.expenseCategory4},
                                {value: this.overbrookSPDecContents.perCategory5, name: this.overbrookSPDecContents.expenseCategory5},
                                {value: this.overbrookSPDecContents.perCategory6, name: this.overbrookSPDecContents.expenseCategory6}
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
            var docoverbrookSPJanRef = db.collection("overbrookSP").doc("january");

            docoverbrookSPJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.overbrookSPJanContents = doc.data();
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
            var docoverbrookSPFebRef = db.collection("overbrookSP").doc("february");

            docoverbrookSPFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.overbrookSPFebContents = doc.data();
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
            var docoverbrookSPMarRef = db.collection("overbrookSP").doc("march");

            docoverbrookSPMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.overbrookSPMarContents = doc.data();
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
            var docoverbrookSPAprRef = db.collection("overbrookSP").doc("april1");

            docoverbrookSPAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.overbrookSPAprContents = doc.data();
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
            var docoverbrookSPMayRef = db.collection("overbrookSP").doc("may");

            docoverbrookSPMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.overbrookSPMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var docoverbrookSPJunRef = db.collection("overbrookSP").doc("june");

            docoverbrookSPJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.overbrookSPJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var docoverbrookSPJulRef = db.collection("overbrookSP").doc("july");

            docoverbrookSPJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.overbrookSPJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var docoverbrookSPAugRef = db.collection("overbrookSP").doc("august");

            docoverbrookSPAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.overbrookSPAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var docoverbrookSPSepRef = db.collection("overbrookSP").doc("september");

            docoverbrookSPSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.overbrookSPSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var docoverbrookSPOctRef = db.collection("overbrookSP").doc("october");

            docoverbrookSPOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.overbrookSPOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var docoverbrookSPNovRef = db.collection("overbrookSP").doc("november");

            docoverbrookSPNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.overbrookSPNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var docoverbrookSPDecRef = db.collection("overbrookSP").doc("december");

            docoverbrookSPDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.overbrookSPDecContents = doc.data();
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
              return this.overbrookSPJanContents.expenses = getRealValue(this.overbrookSPJanContents.perCategory1) + getRealValue(this.overbrookSPJanContents.perCategory2) + getRealValue(this.overbrookSPJanContents.perCategory3) + getRealValue(this.overbrookSPJanContents.perCategory4) + getRealValue(this.overbrookSPJanContents.perCategory5) + getRealValue(this.overbrookSPJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPJanContents.budgetUsage = ((getRealValue(this.overbrookSPJanContents.expenses) / getRealValue(this.overbrookSPJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPFebContents.expenses = getRealValue(this.overbrookSPFebContents.perCategory1) + getRealValue(this.overbrookSPFebContents.perCategory2) + getRealValue(this.overbrookSPFebContents.perCategory3) + getRealValue(this.overbrookSPFebContents.perCategory4) + getRealValue(this.overbrookSPFebContents.perCategory5) + getRealValue(this.overbrookSPFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPFebContents.budgetUsage = (((getRealValue(this.overbrookSPFebContents.expenses) + getRealValue(this.overbrookSPJanContents.expenses)) / getRealValue(this.overbrookSPFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPMarContents.expenses = getRealValue(this.overbrookSPMarContents.perCategory1) + getRealValue(this.overbrookSPMarContents.perCategory2) + getRealValue(this.overbrookSPMarContents.perCategory3) + getRealValue(this.overbrookSPMarContents.perCategory4) + getRealValue(this.overbrookSPMarContents.perCategory5) + getRealValue(this.overbrookSPMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPMarContents.budgetUsage = (((getRealValue(this.overbrookSPMarContents.expenses) + getRealValue(this.overbrookSPFebContents.expenses) + getRealValue(this.overbrookSPJanContents.expenses)) / getRealValue(this.overbrookSPMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPAprContents.expenses = getRealValue(this.overbrookSPAprContents.perCategory1) + getRealValue(this.overbrookSPAprContents.perCategory2) + getRealValue(this.overbrookSPAprContents.perCategory3) + getRealValue(this.overbrookSPAprContents.perCategory4) + getRealValue(this.overbrookSPAprContents.perCategory5) + getRealValue(this.overbrookSPAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPAprContents.budgetUsage = (((getRealValue(this.overbrookSPAprContents.expenses) + getRealValue(this.overbrookSPMarContents.expenses) + getRealValue(this.overbrookSPFebContents.expenses) + getRealValue(this.overbrookSPJanContents.expenses)) / getRealValue(this.overbrookSPAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPMayContents.expenses = getRealValue(this.overbrookSPMayContents.perCategory1) + getRealValue(this.overbrookSPMayContents.perCategory2) + getRealValue(this.overbrookSPMayContents.perCategory3) + getRealValue(this.overbrookSPMayContents.perCategory4) + getRealValue(this.overbrookSPMayContents.perCategory5) + getRealValue(this.overbrookSPMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPMayContents.budgetUsage = (((getRealValue(this.overbrookSPMayContents.expenses) + getRealValue(this.overbrookSPAprContents.expenses) + getRealValue(this.overbrookSPMarContents.expenses) + getRealValue(this.overbrookSPFebContents.expenses) + getRealValue(this.overbrookSPJanContents.expenses)) / getRealValue(this.overbrookSPMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPJunContents.expenses = getRealValue(this.overbrookSPJunContents.perCategory1) + getRealValue(this.overbrookSPJunContents.perCategory2) + getRealValue(this.overbrookSPJunContents.perCategory3) + getRealValue(this.overbrookSPJunContents.perCategory4) + getRealValue(this.overbrookSPJunContents.perCategory5) + getRealValue(this.overbrookSPJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPJunContents.budgetUsage = (((getRealValue(this.overbrookSPJunContents.expenses) + getRealValue(this.overbrookSPMayContents.expenses) + getRealValue(this.overbrookSPAprContents.expenses) + getRealValue(this.overbrookSPMarContents.expenses) + getRealValue(this.overbrookSPFebContents.expenses) + getRealValue(this.overbrookSPJanContents.expenses)) / getRealValue(this.overbrookSPJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPJulContents.expenses = getRealValue(this.overbrookSPJulContents.perCategory1) + getRealValue(this.overbrookSPJulContents.perCategory2) + getRealValue(this.overbrookSPJulContents.perCategory3) + getRealValue(this.overbrookSPJulContents.perCategory4) + getRealValue(this.overbrookSPJulContents.perCategory5) + getRealValue(this.overbrookSPJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPJulContents.budgetUsage = (((getRealValue(this.overbrookSPJulContents.expenses) + getRealValue(this.overbrookSPJunContents.expenses) + getRealValue(this.overbrookSPMayContents.expenses) + getRealValue(this.overbrookSPAprContents.expenses) + getRealValue(this.overbrookSPMarContents.expenses) + getRealValue(this.overbrookSPFebContents.expenses) + getRealValue(this.overbrookSPJanContents.expenses)) / getRealValue(this.overbrookSPJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPAugContents.expenses = getRealValue(this.overbrookSPAugContents.perCategory1) + getRealValue(this.overbrookSPAugContents.perCategory2) + getRealValue(this.overbrookSPAugContents.perCategory3) + getRealValue(this.overbrookSPAugContents.perCategory4) + getRealValue(this.overbrookSPAugContents.perCategory5) + getRealValue(this.overbrookSPAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPAugContents.budgetUsage = (((getRealValue(this.overbrookSPAugContents.expenses) + getRealValue(this.overbrookSPJulContents.expenses) + getRealValue(this.overbrookSPJunContents.expenses) + getRealValue(this.overbrookSPMayContents.expenses) + getRealValue(this.overbrookSPAprContents.expenses) + getRealValue(this.overbrookSPMarContents.expenses) + getRealValue(this.overbrookSPFebContents.expenses) + getRealValue(this.overbrookSPJanContents.expenses)) / getRealValue(this.overbrookSPAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPSepContents.expenses = getRealValue(this.overbrookSPSepContents.perCategory1) + getRealValue(this.overbrookSPSepContents.perCategory2) + getRealValue(this.overbrookSPSepContents.perCategory3) + getRealValue(this.overbrookSPSepContents.perCategory4) + getRealValue(this.overbrookSPSepContents.perCategory5) + getRealValue(this.overbrookSPSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPSepContents.budgetUsage = (((getRealValue(this.overbrookSPSepContents.expenses) + getRealValue(this.overbrookSPAugContents.expenses) + getRealValue(this.overbrookSPJulContents.expenses) + getRealValue(this.overbrookSPJunContents.expenses) + getRealValue(this.overbrookSPMayContents.expenses) + getRealValue(this.overbrookSPAprContents.expenses) + getRealValue(this.overbrookSPMarContents.expenses) + getRealValue(this.overbrookSPFebContents.expenses) + getRealValue(this.overbrookSPJanContents.expenses)) / getRealValue(this.overbrookSPSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPOctContents.expenses = getRealValue(this.overbrookSPOctContents.perCategory1) + getRealValue(this.overbrookSPOctContents.perCategory2) + getRealValue(this.overbrookSPOctContents.perCategory3) + getRealValue(this.overbrookSPOctContents.perCategory4) + getRealValue(this.overbrookSPOctContents.perCategory5) + getRealValue(this.overbrookSPOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPOctContents.budgetUsage = (((getRealValue(this.overbrookSPOctContents.expenses) + getRealValue(this.overbrookSPSepContents.expenses) + getRealValue(this.overbrookSPAugContents.expenses) + getRealValue(this.overbrookSPJulContents.expenses) + getRealValue(this.overbrookSPJunContents.expenses) + getRealValue(this.overbrookSPMayContents.expenses) + getRealValue(this.overbrookSPAprContents.expenses) + getRealValue(this.overbrookSPMarContents.expenses) + getRealValue(this.overbrookSPFebContents.expenses) + getRealValue(this.overbrookSPJanContents.expenses)) / getRealValue(this.overbrookSPOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPNovContents.expenses = getRealValue(this.overbrookSPNovContents.perCategory1) + getRealValue(this.overbrookSPNovContents.perCategory2) + getRealValue(this.overbrookSPNovContents.perCategory3) + getRealValue(this.overbrookSPNovContents.perCategory4) + getRealValue(this.overbrookSPNovContents.perCategory5) + getRealValue(this.overbrookSPNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPNovContents.budgetUsage = (((getRealValue(this.overbrookSPNovContents.expenses) + getRealValue(this.overbrookSPOctContents.expenses) + getRealValue(this.overbrookSPSepContents.expenses) + getRealValue(this.overbrookSPAugContents.expenses) + getRealValue(this.overbrookSPJulContents.expenses) + getRealValue(this.overbrookSPJunContents.expenses) + getRealValue(this.overbrookSPMayContents.expenses) + getRealValue(this.overbrookSPAprContents.expenses) + getRealValue(this.overbrookSPMarContents.expenses) + getRealValue(this.overbrookSPFebContents.expenses) + getRealValue(this.overbrookSPJanContents.expenses)) / getRealValue(this.overbrookSPNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPDecContents.expenses = getRealValue(this.overbrookSPDecContents.perCategory1) + getRealValue(this.overbrookSPDecContents.perCategory2) + getRealValue(this.overbrookSPDecContents.perCategory3) + getRealValue(this.overbrookSPDecContents.perCategory4) + getRealValue(this.overbrookSPDecContents.perCategory5) + getRealValue(this.overbrookSPDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.overbrookSPDecContents.budgetUsage = (((getRealValue(this.overbrookSPDecContents.expenses) + getRealValue(this.overbrookSPNovContents.expenses) + getRealValue(this.overbrookSPOctContents.expenses) + getRealValue(this.overbrookSPSepContents.expenses) + getRealValue(this.overbrookSPAugContents.expenses) + getRealValue(this.overbrookSPJulContents.expenses) + getRealValue(this.overbrookSPJunContents.expenses) + getRealValue(this.overbrookSPMayContents.expenses) + getRealValue(this.overbrookSPAprContents.expenses) + getRealValue(this.overbrookSPMarContents.expenses) + getRealValue(this.overbrookSPFebContents.expenses) + getRealValue(this.overbrookSPJanContents.expenses)) / getRealValue(this.overbrookSPDecContents.actualBudget))*100).toFixed(2)
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
