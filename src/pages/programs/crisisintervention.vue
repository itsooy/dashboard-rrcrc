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
                                <q-tooltip># of people using the services</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJanContents.kpi1 == null)?'grey-2':(crisisInterventionJanContents.kpi1 >= '0' && crisisInterventionJanContents.kpi1 <= '19.8')?'red':(crisisInterventionJanContents.kpi1 > '19.8' && crisisInterventionJanContents.kpi1 <= '26.4')?'orange':(crisisInterventionJanContents.kpi1 > '26.4' && crisisInterventionJanContents.kpi1 < '33')?'yellow-7':(crisisInterventionJanContents.kpi1 >= '33' && crisisInterventionJanContents.kpi1 < '39.6')?'green':(crisisInterventionJanContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJanContents.kpi2 == null)?'grey-2':(crisisInterventionJanContents.kpi2 >= '0' && crisisInterventionJanContents.kpi2 <= '105')?'red':(crisisInterventionJanContents.kpi2 > '105' && crisisInterventionJanContents.kpi2 <= '140')?'orange':(crisisInterventionJanContents.kpi2 > '140' && crisisInterventionJanContents.kpi2 < '175')?'yellow-7':(crisisInterventionJanContents.kpi2 >= '175' && crisisInterventionJanContents.kpi2 < '210')?'green':(crisisInterventionJanContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionFebContents.kpi1 == null)?'grey-2':(crisisInterventionFebContents.kpi1 >= '0' && crisisInterventionFebContents.kpi1 <= '19.8')?'red':(crisisInterventionFebContents.kpi1 > '19.8' && crisisInterventionFebContents.kpi1 <= '26.4')?'orange':(crisisInterventionFebContents.kpi1 > '26.4' && crisisInterventionFebContents.kpi1 < '33')?'yellow-7':(crisisInterventionFebContents.kpi1 >= '33' && crisisInterventionFebContents.kpi1 < '39.6')?'green':(crisisInterventionFebContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionFebContents.kpi2 == null)?'grey-2':(crisisInterventionFebContents.kpi2 >= '0' && crisisInterventionFebContents.kpi2 <= '105')?'red':(crisisInterventionFebContents.kpi2 > '105' && crisisInterventionFebContents.kpi2 <= '140')?'orange':(crisisInterventionFebContents.kpi2 > '140' && crisisInterventionFebContents.kpi2 < '175')?'yellow-7':(crisisInterventionFebContents.kpi2 >= '175' && crisisInterventionFebContents.kpi2 < '210')?'green':(crisisInterventionFebContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMarContents.kpi1 == null)?'grey-2':(crisisInterventionMarContents.kpi1 >= '0' && crisisInterventionMarContents.kpi1 <= '19.8')?'red':(crisisInterventionMarContents.kpi1 > '19.8' && crisisInterventionMarContents.kpi1 <= '26.4')?'orange':(crisisInterventionMarContents.kpi1 > '26.4' && crisisInterventionMarContents.kpi1 < '33')?'yellow-7':(crisisInterventionMarContents.kpi1 >= '33' && crisisInterventionMarContents.kpi1 < '39.6')?'green':(crisisInterventionMarContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMarContents.kpi2 == null)?'grey-2':(crisisInterventionMarContents.kpi2 >= '0' && crisisInterventionMarContents.kpi2 <= '105')?'red':(crisisInterventionMarContents.kpi2 > '105' && crisisInterventionMarContents.kpi2 <= '140')?'orange':(crisisInterventionMarContents.kpi2 > '140' && crisisInterventionMarContents.kpi2 < '175')?'yellow-7':(crisisInterventionMarContents.kpi2 >= '175' && crisisInterventionMarContents.kpi2 < '210')?'green':(crisisInterventionMarContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAprContents.kpi1 == null)?'grey-2':(crisisInterventionAprContents.kpi1 >= '0' && crisisInterventionAprContents.kpi1 <= '19.8')?'red':(crisisInterventionAprContents.kpi1 > '19.8' && crisisInterventionAprContents.kpi1 <= '26.4')?'orange':(crisisInterventionAprContents.kpi1 > '26.4' && crisisInterventionAprContents.kpi1 < '33')?'yellow-7':(crisisInterventionAprContents.kpi1 >= '33' && crisisInterventionAprContents.kpi1 < '39.6')?'green':(crisisInterventionAprContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAprContents.kpi2 == null)?'grey-2':(crisisInterventionAprContents.kpi2 >= '0' && crisisInterventionAprContents.kpi2 <= '105')?'red':(crisisInterventionAprContents.kpi2 > '105' && crisisInterventionAprContents.kpi2 <= '140')?'orange':(crisisInterventionAprContents.kpi2 > '140' && crisisInterventionAprContents.kpi2 < '175')?'yellow-7':(crisisInterventionAprContents.kpi2 >= '175' && crisisInterventionAprContents.kpi2 < '210')?'green':(crisisInterventionAprContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMayContents.kpi1 == null)?'grey-2':(crisisInterventionMayContents.kpi1 >= '0' && crisisInterventionMayContents.kpi1 <= '19.8')?'red':(crisisInterventionMayContents.kpi1 > '19.8' && crisisInterventionMayContents.kpi1 <= '26.4')?'orange':(crisisInterventionMayContents.kpi1 > '26.4' && crisisInterventionMayContents.kpi1 < '33')?'yellow-7':(crisisInterventionMayContents.kpi1 >= '33' && crisisInterventionMayContents.kpi1 < '39.6')?'green':(crisisInterventionMayContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMayContents.kpi2 == null)?'grey-2':(crisisInterventionMayContents.kpi2 >= '0' && crisisInterventionMayContents.kpi2 <= '105')?'red':(crisisInterventionMayContents.kpi2 > '105' && crisisInterventionMayContents.kpi2 <= '140')?'orange':(crisisInterventionMayContents.kpi2 > '140' && crisisInterventionMayContents.kpi2 < '175')?'yellow-7':(crisisInterventionMayContents.kpi2 >= '175' && crisisInterventionMayContents.kpi2 < '210')?'green':(crisisInterventionMayContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJunContents.kpi1 == null)?'grey-2':(crisisInterventionJunContents.kpi1 >= '0' && crisisInterventionJunContents.kpi1 <= '19.8')?'red':(crisisInterventionJunContents.kpi1 > '19.8' && crisisInterventionJunContents.kpi1 <= '26.4')?'orange':(crisisInterventionJunContents.kpi1 > '26.4' && crisisInterventionJunContents.kpi1 < '33')?'yellow-7':(crisisInterventionJunContents.kpi1 >= '33' && crisisInterventionJunContents.kpi1 < '39.6')?'green':(crisisInterventionJunContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJunContents.kpi2 == null)?'grey-2':(crisisInterventionJunContents.kpi2 >= '0' && crisisInterventionJunContents.kpi2 <= '105')?'red':(crisisInterventionJunContents.kpi2 > '105' && crisisInterventionJunContents.kpi2 <= '140')?'orange':(crisisInterventionJunContents.kpi2 > '140' && crisisInterventionJunContents.kpi2 < '175')?'yellow-7':(crisisInterventionJunContents.kpi2 >= '175' && crisisInterventionJunContents.kpi2 < '210')?'green':(crisisInterventionJunContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJulContents.kpi1 == null)?'grey-2':(crisisInterventionJulContents.kpi1 >= '0' && crisisInterventionJulContents.kpi1 <= '19.8')?'red':(crisisInterventionJulContents.kpi1 > '19.8' && crisisInterventionJulContents.kpi1 <= '26.4')?'orange':(crisisInterventionJulContents.kpi1 > '26.4' && crisisInterventionJulContents.kpi1 < '33')?'yellow-7':(crisisInterventionJulContents.kpi1 >= '33' && crisisInterventionJulContents.kpi1 < '39.6')?'green':(crisisInterventionJulContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJulContents.kpi2 == null)?'grey-2':(crisisInterventionJulContents.kpi2 >= '0' && crisisInterventionJulContents.kpi2 <= '105')?'red':(crisisInterventionJulContents.kpi2 > '105' && crisisInterventionJulContents.kpi2 <= '140')?'orange':(crisisInterventionJulContents.kpi2 > '140' && crisisInterventionJulContents.kpi2 < '175')?'yellow-7':(crisisInterventionJulContents.kpi2 >= '175' && crisisInterventionJulContents.kpi2 < '210')?'green':(crisisInterventionJulContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAugContents.kpi1 == null)?'grey-2':(crisisInterventionAugContents.kpi1 >= '0' && crisisInterventionAugContents.kpi1 <= '19.8')?'red':(crisisInterventionAugContents.kpi1 > '19.8' && crisisInterventionAugContents.kpi1 <= '26.4')?'orange':(crisisInterventionAugContents.kpi1 > '26.4' && crisisInterventionAugContents.kpi1 < '33')?'yellow-7':(crisisInterventionAugContents.kpi1 >= '33' && crisisInterventionAugContents.kpi1 < '39.6')?'green':(crisisInterventionAugContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAugContents.kpi2 == null)?'grey-2':(crisisInterventionAugContents.kpi2 >= '0' && crisisInterventionAugContents.kpi2 <= '105')?'red':(crisisInterventionAugContents.kpi2 > '105' && crisisInterventionAugContents.kpi2 <= '140')?'orange':(crisisInterventionAugContents.kpi2 > '140' && crisisInterventionAugContents.kpi2 < '175')?'yellow-7':(crisisInterventionAugContents.kpi2 >= '175' && crisisInterventionAugContents.kpi2 < '210')?'green':(crisisInterventionAugContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionSepContents.kpi1 == null)?'grey-2':(crisisInterventionSepContents.kpi1 >= '0' && crisisInterventionSepContents.kpi1 <= '19.8')?'red':(crisisInterventionSepContents.kpi1 > '19.8' && crisisInterventionSepContents.kpi1 <= '26.4')?'orange':(crisisInterventionSepContents.kpi1 > '26.4' && crisisInterventionSepContents.kpi1 < '33')?'yellow-7':(crisisInterventionSepContents.kpi1 >= '33' && crisisInterventionSepContents.kpi1 < '39.6')?'green':(crisisInterventionSepContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionSepContents.kpi2 == null)?'grey-2':(crisisInterventionSepContents.kpi2 >= '0' && crisisInterventionSepContents.kpi2 <= '105')?'red':(crisisInterventionSepContents.kpi2 > '105' && crisisInterventionSepContents.kpi2 <= '140')?'orange':(crisisInterventionSepContents.kpi2 > '140' && crisisInterventionSepContents.kpi2 < '175')?'yellow-7':(crisisInterventionSepContents.kpi2 >= '175' && crisisInterventionSepContents.kpi2 < '210')?'green':(crisisInterventionSepContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionOctContents.kpi1 == null)?'grey-2':(crisisInterventionOctContents.kpi1 >= '0' && crisisInterventionOctContents.kpi1 <= '19.8')?'red':(crisisInterventionOctContents.kpi1 > '19.8' && crisisInterventionOctContents.kpi1 <= '26.4')?'orange':(crisisInterventionOctContents.kpi1 > '26.4' && crisisInterventionOctContents.kpi1 < '33')?'yellow-7':(crisisInterventionOctContents.kpi1 >= '33' && crisisInterventionOctContents.kpi1 < '39.6')?'green':(crisisInterventionOctContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionOctContents.kpi2 == null)?'grey-2':(crisisInterventionOctContents.kpi2 >= '0' && crisisInterventionOctContents.kpi2 <= '105')?'red':(crisisInterventionOctContents.kpi2 > '105' && crisisInterventionOctContents.kpi2 <= '140')?'orange':(crisisInterventionOctContents.kpi2 > '140' && crisisInterventionOctContents.kpi2 < '175')?'yellow-7':(crisisInterventionOctContents.kpi2 >= '175' && crisisInterventionOctContents.kpi2 < '210')?'green':(crisisInterventionOctContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionNovContents.kpi1 == null)?'grey-2':(crisisInterventionNovContents.kpi1 >= '0' && crisisInterventionNovContents.kpi1 <= '19.8')?'red':(crisisInterventionNovContents.kpi1 > '19.8' && crisisInterventionNovContents.kpi1 <= '26.4')?'orange':(crisisInterventionNovContents.kpi1 > '26.4' && crisisInterventionNovContents.kpi1 < '33')?'yellow-7':(crisisInterventionNovContents.kpi1 >= '33' && crisisInterventionNovContents.kpi1 < '39.6')?'green':(crisisInterventionNovContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionNovContents.kpi2 == null)?'grey-2':(crisisInterventionNovContents.kpi2 >= '0' && crisisInterventionNovContents.kpi2 <= '105')?'red':(crisisInterventionNovContents.kpi2 > '105' && crisisInterventionNovContents.kpi2 <= '140')?'orange':(crisisInterventionNovContents.kpi2 > '140' && crisisInterventionNovContents.kpi2 < '175')?'yellow-7':(crisisInterventionNovContents.kpi2 >= '175' && crisisInterventionNovContents.kpi2 < '210')?'green':(crisisInterventionNovContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionDecContents.kpi1 == null)?'grey-2':(crisisInterventionDecContents.kpi1 >= '0' && crisisInterventionDecContents.kpi1 <= '19.8')?'red':(crisisInterventionDecContents.kpi1 > '19.8' && crisisInterventionDecContents.kpi1 <= '26.4')?'orange':(crisisInterventionDecContents.kpi1 > '26.4' && crisisInterventionDecContents.kpi1 < '33')?'yellow-7':(crisisInterventionDecContents.kpi1 >= '33' && crisisInterventionDecContents.kpi1 < '39.6')?'green':(crisisInterventionDecContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionDecContents.kpi2 == null)?'grey-2':(crisisInterventionDecContents.kpi2 >= '0' && crisisInterventionDecContents.kpi2 <= '105')?'red':(crisisInterventionDecContents.kpi2 > '105' && crisisInterventionDecContents.kpi2 <= '140')?'orange':(crisisInterventionDecContents.kpi2 > '140' && crisisInterventionDecContents.kpi2 < '175')?'yellow-7':(crisisInterventionDecContents.kpi2 >= '175' && crisisInterventionDecContents.kpi2 < '210')?'green':(crisisInterventionDecContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                                <q-tooltip># of people using the services</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJanContents.kpi1 == null)?'grey-2':(crisisInterventionJanContents.kpi1 >= '0' && crisisInterventionJanContents.kpi1 <= '19.8')?'red':(crisisInterventionJanContents.kpi1 > '19.8' && crisisInterventionJanContents.kpi1 <= '26.4')?'orange':(crisisInterventionJanContents.kpi1 > '26.4' && crisisInterventionJanContents.kpi1 < '33')?'yellow-7':(crisisInterventionJanContents.kpi1 >= '33' && crisisInterventionJanContents.kpi1 < '39.6')?'green':(crisisInterventionJanContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJanContents.kpi2 == null)?'grey-2':(crisisInterventionJanContents.kpi2 >= '0' && crisisInterventionJanContents.kpi2 <= '105')?'red':(crisisInterventionJanContents.kpi2 > '105' && crisisInterventionJanContents.kpi2 <= '140')?'orange':(crisisInterventionJanContents.kpi2 > '140' && crisisInterventionJanContents.kpi2 < '175')?'yellow-7':(crisisInterventionJanContents.kpi2 >= '175' && crisisInterventionJanContents.kpi2 < '210')?'green':(crisisInterventionJanContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionFebContents.kpi1 == null)?'grey-2':(crisisInterventionFebContents.kpi1 >= '0' && crisisInterventionFebContents.kpi1 <= '19.8')?'red':(crisisInterventionFebContents.kpi1 > '19.8' && crisisInterventionFebContents.kpi1 <= '26.4')?'orange':(crisisInterventionFebContents.kpi1 > '26.4' && crisisInterventionFebContents.kpi1 < '33')?'yellow-7':(crisisInterventionFebContents.kpi1 >= '33' && crisisInterventionFebContents.kpi1 < '39.6')?'green':(crisisInterventionFebContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionFebContents.kpi2 == null)?'grey-2':(crisisInterventionFebContents.kpi2 >= '0' && crisisInterventionFebContents.kpi2 <= '105')?'red':(crisisInterventionFebContents.kpi2 > '105' && crisisInterventionFebContents.kpi2 <= '140')?'orange':(crisisInterventionFebContents.kpi2 > '140' && crisisInterventionFebContents.kpi2 < '175')?'yellow-7':(crisisInterventionFebContents.kpi2 >= '175' && crisisInterventionFebContents.kpi2 < '210')?'green':(crisisInterventionFebContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMarContents.kpi1 == null)?'grey-2':(crisisInterventionMarContents.kpi1 >= '0' && crisisInterventionMarContents.kpi1 <= '19.8')?'red':(crisisInterventionMarContents.kpi1 > '19.8' && crisisInterventionMarContents.kpi1 <= '26.4')?'orange':(crisisInterventionMarContents.kpi1 > '26.4' && crisisInterventionMarContents.kpi1 < '33')?'yellow-7':(crisisInterventionMarContents.kpi1 >= '33' && crisisInterventionMarContents.kpi1 < '39.6')?'green':(crisisInterventionMarContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMarContents.kpi2 == null)?'grey-2':(crisisInterventionMarContents.kpi2 >= '0' && crisisInterventionMarContents.kpi2 <= '105')?'red':(crisisInterventionMarContents.kpi2 > '105' && crisisInterventionMarContents.kpi2 <= '140')?'orange':(crisisInterventionMarContents.kpi2 > '140' && crisisInterventionMarContents.kpi2 < '175')?'yellow-7':(crisisInterventionMarContents.kpi2 >= '175' && crisisInterventionMarContents.kpi2 < '210')?'green':(crisisInterventionMarContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAprContents.kpi1 == null)?'grey-2':(crisisInterventionAprContents.kpi1 >= '0' && crisisInterventionAprContents.kpi1 <= '19.8')?'red':(crisisInterventionAprContents.kpi1 > '19.8' && crisisInterventionAprContents.kpi1 <= '26.4')?'orange':(crisisInterventionAprContents.kpi1 > '26.4' && crisisInterventionAprContents.kpi1 < '33')?'yellow-7':(crisisInterventionAprContents.kpi1 >= '33' && crisisInterventionAprContents.kpi1 < '39.6')?'green':(crisisInterventionAprContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAprContents.kpi2 == null)?'grey-2':(crisisInterventionAprContents.kpi2 >= '0' && crisisInterventionAprContents.kpi2 <= '105')?'red':(crisisInterventionAprContents.kpi2 > '105' && crisisInterventionAprContents.kpi2 <= '140')?'orange':(crisisInterventionAprContents.kpi2 > '140' && crisisInterventionAprContents.kpi2 < '175')?'yellow-7':(crisisInterventionAprContents.kpi2 >= '175' && crisisInterventionAprContents.kpi2 < '210')?'green':(crisisInterventionAprContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMayContents.kpi1 == null)?'grey-2':(crisisInterventionMayContents.kpi1 >= '0' && crisisInterventionMayContents.kpi1 <= '19.8')?'red':(crisisInterventionMayContents.kpi1 > '19.8' && crisisInterventionMayContents.kpi1 <= '26.4')?'orange':(crisisInterventionMayContents.kpi1 > '26.4' && crisisInterventionMayContents.kpi1 < '33')?'yellow-7':(crisisInterventionMayContents.kpi1 >= '33' && crisisInterventionMayContents.kpi1 < '39.6')?'green':(crisisInterventionMayContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMayContents.kpi2 == null)?'grey-2':(crisisInterventionMayContents.kpi2 >= '0' && crisisInterventionMayContents.kpi2 <= '105')?'red':(crisisInterventionMayContents.kpi2 > '105' && crisisInterventionMayContents.kpi2 <= '140')?'orange':(crisisInterventionMayContents.kpi2 > '140' && crisisInterventionMayContents.kpi2 < '175')?'yellow-7':(crisisInterventionMayContents.kpi2 >= '175' && crisisInterventionMayContents.kpi2 < '210')?'green':(crisisInterventionMayContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJunContents.kpi1 == null)?'grey-2':(crisisInterventionJunContents.kpi1 >= '0' && crisisInterventionJunContents.kpi1 <= '19.8')?'red':(crisisInterventionJunContents.kpi1 > '19.8' && crisisInterventionJunContents.kpi1 <= '26.4')?'orange':(crisisInterventionJunContents.kpi1 > '26.4' && crisisInterventionJunContents.kpi1 < '33')?'yellow-7':(crisisInterventionJunContents.kpi1 >= '33' && crisisInterventionJunContents.kpi1 < '39.6')?'green':(crisisInterventionJunContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJunContents.kpi2 == null)?'grey-2':(crisisInterventionJunContents.kpi2 >= '0' && crisisInterventionJunContents.kpi2 <= '105')?'red':(crisisInterventionJunContents.kpi2 > '105' && crisisInterventionJunContents.kpi2 <= '140')?'orange':(crisisInterventionJunContents.kpi2 > '140' && crisisInterventionJunContents.kpi2 < '175')?'yellow-7':(crisisInterventionJunContents.kpi2 >= '175' && crisisInterventionJunContents.kpi2 < '210')?'green':(crisisInterventionJunContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJulContents.kpi1 == null)?'grey-2':(crisisInterventionJulContents.kpi1 >= '0' && crisisInterventionJulContents.kpi1 <= '19.8')?'red':(crisisInterventionJulContents.kpi1 > '19.8' && crisisInterventionJulContents.kpi1 <= '26.4')?'orange':(crisisInterventionJulContents.kpi1 > '26.4' && crisisInterventionJulContents.kpi1 < '33')?'yellow-7':(crisisInterventionJulContents.kpi1 >= '33' && crisisInterventionJulContents.kpi1 < '39.6')?'green':(crisisInterventionJulContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJulContents.kpi2 == null)?'grey-2':(crisisInterventionJulContents.kpi2 >= '0' && crisisInterventionJulContents.kpi2 <= '105')?'red':(crisisInterventionJulContents.kpi2 > '105' && crisisInterventionJulContents.kpi2 <= '140')?'orange':(crisisInterventionJulContents.kpi2 > '140' && crisisInterventionJulContents.kpi2 < '175')?'yellow-7':(crisisInterventionJulContents.kpi2 >= '175' && crisisInterventionJulContents.kpi2 < '210')?'green':(crisisInterventionJulContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAugContents.kpi1 == null)?'grey-2':(crisisInterventionAugContents.kpi1 >= '0' && crisisInterventionAugContents.kpi1 <= '19.8')?'red':(crisisInterventionAugContents.kpi1 > '19.8' && crisisInterventionAugContents.kpi1 <= '26.4')?'orange':(crisisInterventionAugContents.kpi1 > '26.4' && crisisInterventionAugContents.kpi1 < '33')?'yellow-7':(crisisInterventionAugContents.kpi1 >= '33' && crisisInterventionAugContents.kpi1 < '39.6')?'green':(crisisInterventionAugContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAugContents.kpi2 == null)?'grey-2':(crisisInterventionAugContents.kpi2 >= '0' && crisisInterventionAugContents.kpi2 <= '105')?'red':(crisisInterventionAugContents.kpi2 > '105' && crisisInterventionAugContents.kpi2 <= '140')?'orange':(crisisInterventionAugContents.kpi2 > '140' && crisisInterventionAugContents.kpi2 < '175')?'yellow-7':(crisisInterventionAugContents.kpi2 >= '175' && crisisInterventionAugContents.kpi2 < '210')?'green':(crisisInterventionAugContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionSepContents.kpi1 == null)?'grey-2':(crisisInterventionSepContents.kpi1 >= '0' && crisisInterventionSepContents.kpi1 <= '19.8')?'red':(crisisInterventionSepContents.kpi1 > '19.8' && crisisInterventionSepContents.kpi1 <= '26.4')?'orange':(crisisInterventionSepContents.kpi1 > '26.4' && crisisInterventionSepContents.kpi1 < '33')?'yellow-7':(crisisInterventionSepContents.kpi1 >= '33' && crisisInterventionSepContents.kpi1 < '39.6')?'green':(crisisInterventionSepContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionSepContents.kpi2 == null)?'grey-2':(crisisInterventionSepContents.kpi2 >= '0' && crisisInterventionSepContents.kpi2 <= '105')?'red':(crisisInterventionSepContents.kpi2 > '105' && crisisInterventionSepContents.kpi2 <= '140')?'orange':(crisisInterventionSepContents.kpi2 > '140' && crisisInterventionSepContents.kpi2 < '175')?'yellow-7':(crisisInterventionSepContents.kpi2 >= '175' && crisisInterventionSepContents.kpi2 < '210')?'green':(crisisInterventionSepContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionOctContents.kpi1 == null)?'grey-2':(crisisInterventionOctContents.kpi1 >= '0' && crisisInterventionOctContents.kpi1 <= '19.8')?'red':(crisisInterventionOctContents.kpi1 > '19.8' && crisisInterventionOctContents.kpi1 <= '26.4')?'orange':(crisisInterventionOctContents.kpi1 > '26.4' && crisisInterventionOctContents.kpi1 < '33')?'yellow-7':(crisisInterventionOctContents.kpi1 >= '33' && crisisInterventionOctContents.kpi1 < '39.6')?'green':(crisisInterventionOctContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionOctContents.kpi2 == null)?'grey-2':(crisisInterventionOctContents.kpi2 >= '0' && crisisInterventionOctContents.kpi2 <= '105')?'red':(crisisInterventionOctContents.kpi2 > '105' && crisisInterventionOctContents.kpi2 <= '140')?'orange':(crisisInterventionOctContents.kpi2 > '140' && crisisInterventionOctContents.kpi2 < '175')?'yellow-7':(crisisInterventionOctContents.kpi2 >= '175' && crisisInterventionOctContents.kpi2 < '210')?'green':(crisisInterventionOctContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionNovContents.kpi1 == null)?'grey-2':(crisisInterventionNovContents.kpi1 >= '0' && crisisInterventionNovContents.kpi1 <= '19.8')?'red':(crisisInterventionNovContents.kpi1 > '19.8' && crisisInterventionNovContents.kpi1 <= '26.4')?'orange':(crisisInterventionNovContents.kpi1 > '26.4' && crisisInterventionNovContents.kpi1 < '33')?'yellow-7':(crisisInterventionNovContents.kpi1 >= '33' && crisisInterventionNovContents.kpi1 < '39.6')?'green':(crisisInterventionNovContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionNovContents.kpi2 == null)?'grey-2':(crisisInterventionNovContents.kpi2 >= '0' && crisisInterventionNovContents.kpi2 <= '105')?'red':(crisisInterventionNovContents.kpi2 > '105' && crisisInterventionNovContents.kpi2 <= '140')?'orange':(crisisInterventionNovContents.kpi2 > '140' && crisisInterventionNovContents.kpi2 < '175')?'yellow-7':(crisisInterventionNovContents.kpi2 >= '175' && crisisInterventionNovContents.kpi2 < '210')?'green':(crisisInterventionNovContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionDecContents.kpi1 == null)?'grey-2':(crisisInterventionDecContents.kpi1 >= '0' && crisisInterventionDecContents.kpi1 <= '19.8')?'red':(crisisInterventionDecContents.kpi1 > '19.8' && crisisInterventionDecContents.kpi1 <= '26.4')?'orange':(crisisInterventionDecContents.kpi1 > '26.4' && crisisInterventionDecContents.kpi1 < '33')?'yellow-7':(crisisInterventionDecContents.kpi1 >= '33' && crisisInterventionDecContents.kpi1 < '39.6')?'green':(crisisInterventionDecContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionDecContents.kpi2 == null)?'grey-2':(crisisInterventionDecContents.kpi2 >= '0' && crisisInterventionDecContents.kpi2 <= '105')?'red':(crisisInterventionDecContents.kpi2 > '105' && crisisInterventionDecContents.kpi2 <= '140')?'orange':(crisisInterventionDecContents.kpi2 > '140' && crisisInterventionDecContents.kpi2 < '175')?'yellow-7':(crisisInterventionDecContents.kpi2 >= '175' && crisisInterventionDecContents.kpi2 < '210')?'green':(crisisInterventionDecContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                                <q-tooltip># of people using the services</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJanContents.kpi1 == null)?'grey-2':(crisisInterventionJanContents.kpi1 >= '0' && crisisInterventionJanContents.kpi1 <= '19.8')?'red':(crisisInterventionJanContents.kpi1 > '19.8' && crisisInterventionJanContents.kpi1 <= '26.4')?'orange':(crisisInterventionJanContents.kpi1 > '26.4' && crisisInterventionJanContents.kpi1 < '33')?'yellow-7':(crisisInterventionJanContents.kpi1 >= '33' && crisisInterventionJanContents.kpi1 < '39.6')?'green':(crisisInterventionJanContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJanContents.kpi2 == null)?'grey-2':(crisisInterventionJanContents.kpi2 >= '0' && crisisInterventionJanContents.kpi2 <= '105')?'red':(crisisInterventionJanContents.kpi2 > '105' && crisisInterventionJanContents.kpi2 <= '140')?'orange':(crisisInterventionJanContents.kpi2 > '140' && crisisInterventionJanContents.kpi2 < '175')?'yellow-7':(crisisInterventionJanContents.kpi2 >= '175' && crisisInterventionJanContents.kpi2 < '210')?'green':(crisisInterventionJanContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionFebContents.kpi1 == null)?'grey-2':(crisisInterventionFebContents.kpi1 >= '0' && crisisInterventionFebContents.kpi1 <= '19.8')?'red':(crisisInterventionFebContents.kpi1 > '19.8' && crisisInterventionFebContents.kpi1 <= '26.4')?'orange':(crisisInterventionFebContents.kpi1 > '26.4' && crisisInterventionFebContents.kpi1 < '33')?'yellow-7':(crisisInterventionFebContents.kpi1 >= '33' && crisisInterventionFebContents.kpi1 < '39.6')?'green':(crisisInterventionFebContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionFebContents.kpi2 == null)?'grey-2':(crisisInterventionFebContents.kpi2 >= '0' && crisisInterventionFebContents.kpi2 <= '105')?'red':(crisisInterventionFebContents.kpi2 > '105' && crisisInterventionFebContents.kpi2 <= '140')?'orange':(crisisInterventionFebContents.kpi2 > '140' && crisisInterventionFebContents.kpi2 < '175')?'yellow-7':(crisisInterventionFebContents.kpi2 >= '175' && crisisInterventionFebContents.kpi2 < '210')?'green':(crisisInterventionFebContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMarContents.kpi1 == null)?'grey-2':(crisisInterventionMarContents.kpi1 >= '0' && crisisInterventionMarContents.kpi1 <= '19.8')?'red':(crisisInterventionMarContents.kpi1 > '19.8' && crisisInterventionMarContents.kpi1 <= '26.4')?'orange':(crisisInterventionMarContents.kpi1 > '26.4' && crisisInterventionMarContents.kpi1 < '33')?'yellow-7':(crisisInterventionMarContents.kpi1 >= '33' && crisisInterventionMarContents.kpi1 < '39.6')?'green':(crisisInterventionMarContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMarContents.kpi2 == null)?'grey-2':(crisisInterventionMarContents.kpi2 >= '0' && crisisInterventionMarContents.kpi2 <= '105')?'red':(crisisInterventionMarContents.kpi2 > '105' && crisisInterventionMarContents.kpi2 <= '140')?'orange':(crisisInterventionMarContents.kpi2 > '140' && crisisInterventionMarContents.kpi2 < '175')?'yellow-7':(crisisInterventionMarContents.kpi2 >= '175' && crisisInterventionMarContents.kpi2 < '210')?'green':(crisisInterventionMarContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAprContents.kpi1 == null)?'grey-2':(crisisInterventionAprContents.kpi1 >= '0' && crisisInterventionAprContents.kpi1 <= '19.8')?'red':(crisisInterventionAprContents.kpi1 > '19.8' && crisisInterventionAprContents.kpi1 <= '26.4')?'orange':(crisisInterventionAprContents.kpi1 > '26.4' && crisisInterventionAprContents.kpi1 < '33')?'yellow-7':(crisisInterventionAprContents.kpi1 >= '33' && crisisInterventionAprContents.kpi1 < '39.6')?'green':(crisisInterventionAprContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAprContents.kpi2 == null)?'grey-2':(crisisInterventionAprContents.kpi2 >= '0' && crisisInterventionAprContents.kpi2 <= '105')?'red':(crisisInterventionAprContents.kpi2 > '105' && crisisInterventionAprContents.kpi2 <= '140')?'orange':(crisisInterventionAprContents.kpi2 > '140' && crisisInterventionAprContents.kpi2 < '175')?'yellow-7':(crisisInterventionAprContents.kpi2 >= '175' && crisisInterventionAprContents.kpi2 < '210')?'green':(crisisInterventionAprContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMayContents.kpi1 == null)?'grey-2':(crisisInterventionMayContents.kpi1 >= '0' && crisisInterventionMayContents.kpi1 <= '19.8')?'red':(crisisInterventionMayContents.kpi1 > '19.8' && crisisInterventionMayContents.kpi1 <= '26.4')?'orange':(crisisInterventionMayContents.kpi1 > '26.4' && crisisInterventionMayContents.kpi1 < '33')?'yellow-7':(crisisInterventionMayContents.kpi1 >= '33' && crisisInterventionMayContents.kpi1 < '39.6')?'green':(crisisInterventionMayContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMayContents.kpi2 == null)?'grey-2':(crisisInterventionMayContents.kpi2 >= '0' && crisisInterventionMayContents.kpi2 <= '105')?'red':(crisisInterventionMayContents.kpi2 > '105' && crisisInterventionMayContents.kpi2 <= '140')?'orange':(crisisInterventionMayContents.kpi2 > '140' && crisisInterventionMayContents.kpi2 < '175')?'yellow-7':(crisisInterventionMayContents.kpi2 >= '175' && crisisInterventionMayContents.kpi2 < '210')?'green':(crisisInterventionMayContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJunContents.kpi1 == null)?'grey-2':(crisisInterventionJunContents.kpi1 >= '0' && crisisInterventionJunContents.kpi1 <= '19.8')?'red':(crisisInterventionJunContents.kpi1 > '19.8' && crisisInterventionJunContents.kpi1 <= '26.4')?'orange':(crisisInterventionJunContents.kpi1 > '26.4' && crisisInterventionJunContents.kpi1 < '33')?'yellow-7':(crisisInterventionJunContents.kpi1 >= '33' && crisisInterventionJunContents.kpi1 < '39.6')?'green':(crisisInterventionJunContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJunContents.kpi2 == null)?'grey-2':(crisisInterventionJunContents.kpi2 >= '0' && crisisInterventionJunContents.kpi2 <= '105')?'red':(crisisInterventionJunContents.kpi2 > '105' && crisisInterventionJunContents.kpi2 <= '140')?'orange':(crisisInterventionJunContents.kpi2 > '140' && crisisInterventionJunContents.kpi2 < '175')?'yellow-7':(crisisInterventionJunContents.kpi2 >= '175' && crisisInterventionJunContents.kpi2 < '210')?'green':(crisisInterventionJunContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJulContents.kpi1 == null)?'grey-2':(crisisInterventionJulContents.kpi1 >= '0' && crisisInterventionJulContents.kpi1 <= '19.8')?'red':(crisisInterventionJulContents.kpi1 > '19.8' && crisisInterventionJulContents.kpi1 <= '26.4')?'orange':(crisisInterventionJulContents.kpi1 > '26.4' && crisisInterventionJulContents.kpi1 < '33')?'yellow-7':(crisisInterventionJulContents.kpi1 >= '33' && crisisInterventionJulContents.kpi1 < '39.6')?'green':(crisisInterventionJulContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJulContents.kpi2 == null)?'grey-2':(crisisInterventionJulContents.kpi2 >= '0' && crisisInterventionJulContents.kpi2 <= '105')?'red':(crisisInterventionJulContents.kpi2 > '105' && crisisInterventionJulContents.kpi2 <= '140')?'orange':(crisisInterventionJulContents.kpi2 > '140' && crisisInterventionJulContents.kpi2 < '175')?'yellow-7':(crisisInterventionJulContents.kpi2 >= '175' && crisisInterventionJulContents.kpi2 < '210')?'green':(crisisInterventionJulContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAugContents.kpi1 == null)?'grey-2':(crisisInterventionAugContents.kpi1 >= '0' && crisisInterventionAugContents.kpi1 <= '19.8')?'red':(crisisInterventionAugContents.kpi1 > '19.8' && crisisInterventionAugContents.kpi1 <= '26.4')?'orange':(crisisInterventionAugContents.kpi1 > '26.4' && crisisInterventionAugContents.kpi1 < '33')?'yellow-7':(crisisInterventionAugContents.kpi1 >= '33' && crisisInterventionAugContents.kpi1 < '39.6')?'green':(crisisInterventionAugContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAugContents.kpi2 == null)?'grey-2':(crisisInterventionAugContents.kpi2 >= '0' && crisisInterventionAugContents.kpi2 <= '105')?'red':(crisisInterventionAugContents.kpi2 > '105' && crisisInterventionAugContents.kpi2 <= '140')?'orange':(crisisInterventionAugContents.kpi2 > '140' && crisisInterventionAugContents.kpi2 < '175')?'yellow-7':(crisisInterventionAugContents.kpi2 >= '175' && crisisInterventionAugContents.kpi2 < '210')?'green':(crisisInterventionAugContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionSepContents.kpi1 == null)?'grey-2':(crisisInterventionSepContents.kpi1 >= '0' && crisisInterventionSepContents.kpi1 <= '19.8')?'red':(crisisInterventionSepContents.kpi1 > '19.8' && crisisInterventionSepContents.kpi1 <= '26.4')?'orange':(crisisInterventionSepContents.kpi1 > '26.4' && crisisInterventionSepContents.kpi1 < '33')?'yellow-7':(crisisInterventionSepContents.kpi1 >= '33' && crisisInterventionSepContents.kpi1 < '39.6')?'green':(crisisInterventionSepContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionSepContents.kpi2 == null)?'grey-2':(crisisInterventionSepContents.kpi2 >= '0' && crisisInterventionSepContents.kpi2 <= '105')?'red':(crisisInterventionSepContents.kpi2 > '105' && crisisInterventionSepContents.kpi2 <= '140')?'orange':(crisisInterventionSepContents.kpi2 > '140' && crisisInterventionSepContents.kpi2 < '175')?'yellow-7':(crisisInterventionSepContents.kpi2 >= '175' && crisisInterventionSepContents.kpi2 < '210')?'green':(crisisInterventionSepContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionOctContents.kpi1 == null)?'grey-2':(crisisInterventionOctContents.kpi1 >= '0' && crisisInterventionOctContents.kpi1 <= '19.8')?'red':(crisisInterventionOctContents.kpi1 > '19.8' && crisisInterventionOctContents.kpi1 <= '26.4')?'orange':(crisisInterventionOctContents.kpi1 > '26.4' && crisisInterventionOctContents.kpi1 < '33')?'yellow-7':(crisisInterventionOctContents.kpi1 >= '33' && crisisInterventionOctContents.kpi1 < '39.6')?'green':(crisisInterventionOctContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionOctContents.kpi2 == null)?'grey-2':(crisisInterventionOctContents.kpi2 >= '0' && crisisInterventionOctContents.kpi2 <= '105')?'red':(crisisInterventionOctContents.kpi2 > '105' && crisisInterventionOctContents.kpi2 <= '140')?'orange':(crisisInterventionOctContents.kpi2 > '140' && crisisInterventionOctContents.kpi2 < '175')?'yellow-7':(crisisInterventionOctContents.kpi2 >= '175' && crisisInterventionOctContents.kpi2 < '210')?'green':(crisisInterventionOctContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionNovContents.kpi1 == null)?'grey-2':(crisisInterventionNovContents.kpi1 >= '0' && crisisInterventionNovContents.kpi1 <= '19.8')?'red':(crisisInterventionNovContents.kpi1 > '19.8' && crisisInterventionNovContents.kpi1 <= '26.4')?'orange':(crisisInterventionNovContents.kpi1 > '26.4' && crisisInterventionNovContents.kpi1 < '33')?'yellow-7':(crisisInterventionNovContents.kpi1 >= '33' && crisisInterventionNovContents.kpi1 < '39.6')?'green':(crisisInterventionNovContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionNovContents.kpi2 == null)?'grey-2':(crisisInterventionNovContents.kpi2 >= '0' && crisisInterventionNovContents.kpi2 <= '105')?'red':(crisisInterventionNovContents.kpi2 > '105' && crisisInterventionNovContents.kpi2 <= '140')?'orange':(crisisInterventionNovContents.kpi2 > '140' && crisisInterventionNovContents.kpi2 < '175')?'yellow-7':(crisisInterventionNovContents.kpi2 >= '175' && crisisInterventionNovContents.kpi2 < '210')?'green':(crisisInterventionNovContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionDecContents.kpi1 == null)?'grey-2':(crisisInterventionDecContents.kpi1 >= '0' && crisisInterventionDecContents.kpi1 <= '19.8')?'red':(crisisInterventionDecContents.kpi1 > '19.8' && crisisInterventionDecContents.kpi1 <= '26.4')?'orange':(crisisInterventionDecContents.kpi1 > '26.4' && crisisInterventionDecContents.kpi1 < '33')?'yellow-7':(crisisInterventionDecContents.kpi1 >= '33' && crisisInterventionDecContents.kpi1 < '39.6')?'green':(crisisInterventionDecContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionDecContents.kpi2 == null)?'grey-2':(crisisInterventionDecContents.kpi2 >= '0' && crisisInterventionDecContents.kpi2 <= '105')?'red':(crisisInterventionDecContents.kpi2 > '105' && crisisInterventionDecContents.kpi2 <= '140')?'orange':(crisisInterventionDecContents.kpi2 > '140' && crisisInterventionDecContents.kpi2 < '175')?'yellow-7':(crisisInterventionDecContents.kpi2 >= '175' && crisisInterventionDecContents.kpi2 < '210')?'green':(crisisInterventionDecContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                                <q-tooltip># of people using the services</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJanContents.kpi1 == null)?'grey-2':(crisisInterventionJanContents.kpi1 >= '0' && crisisInterventionJanContents.kpi1 <= '19.8')?'red':(crisisInterventionJanContents.kpi1 > '19.8' && crisisInterventionJanContents.kpi1 <= '26.4')?'orange':(crisisInterventionJanContents.kpi1 > '26.4' && crisisInterventionJanContents.kpi1 < '33')?'yellow-7':(crisisInterventionJanContents.kpi1 >= '33' && crisisInterventionJanContents.kpi1 < '39.6')?'green':(crisisInterventionJanContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJanContents.kpi2 == null)?'grey-2':(crisisInterventionJanContents.kpi2 >= '0' && crisisInterventionJanContents.kpi2 <= '105')?'red':(crisisInterventionJanContents.kpi2 > '105' && crisisInterventionJanContents.kpi2 <= '140')?'orange':(crisisInterventionJanContents.kpi2 > '140' && crisisInterventionJanContents.kpi2 < '175')?'yellow-7':(crisisInterventionJanContents.kpi2 >= '175' && crisisInterventionJanContents.kpi2 < '210')?'green':(crisisInterventionJanContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionFebContents.kpi1 == null)?'grey-2':(crisisInterventionFebContents.kpi1 >= '0' && crisisInterventionFebContents.kpi1 <= '19.8')?'red':(crisisInterventionFebContents.kpi1 > '19.8' && crisisInterventionFebContents.kpi1 <= '26.4')?'orange':(crisisInterventionFebContents.kpi1 > '26.4' && crisisInterventionFebContents.kpi1 < '33')?'yellow-7':(crisisInterventionFebContents.kpi1 >= '33' && crisisInterventionFebContents.kpi1 < '39.6')?'green':(crisisInterventionFebContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionFebContents.kpi2 == null)?'grey-2':(crisisInterventionFebContents.kpi2 >= '0' && crisisInterventionFebContents.kpi2 <= '105')?'red':(crisisInterventionFebContents.kpi2 > '105' && crisisInterventionFebContents.kpi2 <= '140')?'orange':(crisisInterventionFebContents.kpi2 > '140' && crisisInterventionFebContents.kpi2 < '175')?'yellow-7':(crisisInterventionFebContents.kpi2 >= '175' && crisisInterventionFebContents.kpi2 < '210')?'green':(crisisInterventionFebContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMarContents.kpi1 == null)?'grey-2':(crisisInterventionMarContents.kpi1 >= '0' && crisisInterventionMarContents.kpi1 <= '19.8')?'red':(crisisInterventionMarContents.kpi1 > '19.8' && crisisInterventionMarContents.kpi1 <= '26.4')?'orange':(crisisInterventionMarContents.kpi1 > '26.4' && crisisInterventionMarContents.kpi1 < '33')?'yellow-7':(crisisInterventionMarContents.kpi1 >= '33' && crisisInterventionMarContents.kpi1 < '39.6')?'green':(crisisInterventionMarContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMarContents.kpi2 == null)?'grey-2':(crisisInterventionMarContents.kpi2 >= '0' && crisisInterventionMarContents.kpi2 <= '105')?'red':(crisisInterventionMarContents.kpi2 > '105' && crisisInterventionMarContents.kpi2 <= '140')?'orange':(crisisInterventionMarContents.kpi2 > '140' && crisisInterventionMarContents.kpi2 < '175')?'yellow-7':(crisisInterventionMarContents.kpi2 >= '175' && crisisInterventionMarContents.kpi2 < '210')?'green':(crisisInterventionMarContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAprContents.kpi1 == null)?'grey-2':(crisisInterventionAprContents.kpi1 >= '0' && crisisInterventionAprContents.kpi1 <= '19.8')?'red':(crisisInterventionAprContents.kpi1 > '19.8' && crisisInterventionAprContents.kpi1 <= '26.4')?'orange':(crisisInterventionAprContents.kpi1 > '26.4' && crisisInterventionAprContents.kpi1 < '33')?'yellow-7':(crisisInterventionAprContents.kpi1 >= '33' && crisisInterventionAprContents.kpi1 < '39.6')?'green':(crisisInterventionAprContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAprContents.kpi2 == null)?'grey-2':(crisisInterventionAprContents.kpi2 >= '0' && crisisInterventionAprContents.kpi2 <= '105')?'red':(crisisInterventionAprContents.kpi2 > '105' && crisisInterventionAprContents.kpi2 <= '140')?'orange':(crisisInterventionAprContents.kpi2 > '140' && crisisInterventionAprContents.kpi2 < '175')?'yellow-7':(crisisInterventionAprContents.kpi2 >= '175' && crisisInterventionAprContents.kpi2 < '210')?'green':(crisisInterventionAprContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMayContents.kpi1 == null)?'grey-2':(crisisInterventionMayContents.kpi1 >= '0' && crisisInterventionMayContents.kpi1 <= '19.8')?'red':(crisisInterventionMayContents.kpi1 > '19.8' && crisisInterventionMayContents.kpi1 <= '26.4')?'orange':(crisisInterventionMayContents.kpi1 > '26.4' && crisisInterventionMayContents.kpi1 < '33')?'yellow-7':(crisisInterventionMayContents.kpi1 >= '33' && crisisInterventionMayContents.kpi1 < '39.6')?'green':(crisisInterventionMayContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMayContents.kpi2 == null)?'grey-2':(crisisInterventionMayContents.kpi2 >= '0' && crisisInterventionMayContents.kpi2 <= '105')?'red':(crisisInterventionMayContents.kpi2 > '105' && crisisInterventionMayContents.kpi2 <= '140')?'orange':(crisisInterventionMayContents.kpi2 > '140' && crisisInterventionMayContents.kpi2 < '175')?'yellow-7':(crisisInterventionMayContents.kpi2 >= '175' && crisisInterventionMayContents.kpi2 < '210')?'green':(crisisInterventionMayContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJunContents.kpi1 == null)?'grey-2':(crisisInterventionJunContents.kpi1 >= '0' && crisisInterventionJunContents.kpi1 <= '19.8')?'red':(crisisInterventionJunContents.kpi1 > '19.8' && crisisInterventionJunContents.kpi1 <= '26.4')?'orange':(crisisInterventionJunContents.kpi1 > '26.4' && crisisInterventionJunContents.kpi1 < '33')?'yellow-7':(crisisInterventionJunContents.kpi1 >= '33' && crisisInterventionJunContents.kpi1 < '39.6')?'green':(crisisInterventionJunContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJunContents.kpi2 == null)?'grey-2':(crisisInterventionJunContents.kpi2 >= '0' && crisisInterventionJunContents.kpi2 <= '105')?'red':(crisisInterventionJunContents.kpi2 > '105' && crisisInterventionJunContents.kpi2 <= '140')?'orange':(crisisInterventionJunContents.kpi2 > '140' && crisisInterventionJunContents.kpi2 < '175')?'yellow-7':(crisisInterventionJunContents.kpi2 >= '175' && crisisInterventionJunContents.kpi2 < '210')?'green':(crisisInterventionJunContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJulContents.kpi1 == null)?'grey-2':(crisisInterventionJulContents.kpi1 >= '0' && crisisInterventionJulContents.kpi1 <= '19.8')?'red':(crisisInterventionJulContents.kpi1 > '19.8' && crisisInterventionJulContents.kpi1 <= '26.4')?'orange':(crisisInterventionJulContents.kpi1 > '26.4' && crisisInterventionJulContents.kpi1 < '33')?'yellow-7':(crisisInterventionJulContents.kpi1 >= '33' && crisisInterventionJulContents.kpi1 < '39.6')?'green':(crisisInterventionJulContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJulContents.kpi2 == null)?'grey-2':(crisisInterventionJulContents.kpi2 >= '0' && crisisInterventionJulContents.kpi2 <= '105')?'red':(crisisInterventionJulContents.kpi2 > '105' && crisisInterventionJulContents.kpi2 <= '140')?'orange':(crisisInterventionJulContents.kpi2 > '140' && crisisInterventionJulContents.kpi2 < '175')?'yellow-7':(crisisInterventionJulContents.kpi2 >= '175' && crisisInterventionJulContents.kpi2 < '210')?'green':(crisisInterventionJulContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAugContents.kpi1 == null)?'grey-2':(crisisInterventionAugContents.kpi1 >= '0' && crisisInterventionAugContents.kpi1 <= '19.8')?'red':(crisisInterventionAugContents.kpi1 > '19.8' && crisisInterventionAugContents.kpi1 <= '26.4')?'orange':(crisisInterventionAugContents.kpi1 > '26.4' && crisisInterventionAugContents.kpi1 < '33')?'yellow-7':(crisisInterventionAugContents.kpi1 >= '33' && crisisInterventionAugContents.kpi1 < '39.6')?'green':(crisisInterventionAugContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAugContents.kpi2 == null)?'grey-2':(crisisInterventionAugContents.kpi2 >= '0' && crisisInterventionAugContents.kpi2 <= '105')?'red':(crisisInterventionAugContents.kpi2 > '105' && crisisInterventionAugContents.kpi2 <= '140')?'orange':(crisisInterventionAugContents.kpi2 > '140' && crisisInterventionAugContents.kpi2 < '175')?'yellow-7':(crisisInterventionAugContents.kpi2 >= '175' && crisisInterventionAugContents.kpi2 < '210')?'green':(crisisInterventionAugContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionSepContents.kpi1 == null)?'grey-2':(crisisInterventionSepContents.kpi1 >= '0' && crisisInterventionSepContents.kpi1 <= '19.8')?'red':(crisisInterventionSepContents.kpi1 > '19.8' && crisisInterventionSepContents.kpi1 <= '26.4')?'orange':(crisisInterventionSepContents.kpi1 > '26.4' && crisisInterventionSepContents.kpi1 < '33')?'yellow-7':(crisisInterventionSepContents.kpi1 >= '33' && crisisInterventionSepContents.kpi1 < '39.6')?'green':(crisisInterventionSepContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionSepContents.kpi2 == null)?'grey-2':(crisisInterventionSepContents.kpi2 >= '0' && crisisInterventionSepContents.kpi2 <= '105')?'red':(crisisInterventionSepContents.kpi2 > '105' && crisisInterventionSepContents.kpi2 <= '140')?'orange':(crisisInterventionSepContents.kpi2 > '140' && crisisInterventionSepContents.kpi2 < '175')?'yellow-7':(crisisInterventionSepContents.kpi2 >= '175' && crisisInterventionSepContents.kpi2 < '210')?'green':(crisisInterventionSepContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionOctContents.kpi1 == null)?'grey-2':(crisisInterventionOctContents.kpi1 >= '0' && crisisInterventionOctContents.kpi1 <= '19.8')?'red':(crisisInterventionOctContents.kpi1 > '19.8' && crisisInterventionOctContents.kpi1 <= '26.4')?'orange':(crisisInterventionOctContents.kpi1 > '26.4' && crisisInterventionOctContents.kpi1 < '33')?'yellow-7':(crisisInterventionOctContents.kpi1 >= '33' && crisisInterventionOctContents.kpi1 < '39.6')?'green':(crisisInterventionOctContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionOctContents.kpi2 == null)?'grey-2':(crisisInterventionOctContents.kpi2 >= '0' && crisisInterventionOctContents.kpi2 <= '105')?'red':(crisisInterventionOctContents.kpi2 > '105' && crisisInterventionOctContents.kpi2 <= '140')?'orange':(crisisInterventionOctContents.kpi2 > '140' && crisisInterventionOctContents.kpi2 < '175')?'yellow-7':(crisisInterventionOctContents.kpi2 >= '175' && crisisInterventionOctContents.kpi2 < '210')?'green':(crisisInterventionOctContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionNovContents.kpi1 == null)?'grey-2':(crisisInterventionNovContents.kpi1 >= '0' && crisisInterventionNovContents.kpi1 <= '19.8')?'red':(crisisInterventionNovContents.kpi1 > '19.8' && crisisInterventionNovContents.kpi1 <= '26.4')?'orange':(crisisInterventionNovContents.kpi1 > '26.4' && crisisInterventionNovContents.kpi1 < '33')?'yellow-7':(crisisInterventionNovContents.kpi1 >= '33' && crisisInterventionNovContents.kpi1 < '39.6')?'green':(crisisInterventionNovContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionNovContents.kpi2 == null)?'grey-2':(crisisInterventionNovContents.kpi2 >= '0' && crisisInterventionNovContents.kpi2 <= '105')?'red':(crisisInterventionNovContents.kpi2 > '105' && crisisInterventionNovContents.kpi2 <= '140')?'orange':(crisisInterventionNovContents.kpi2 > '140' && crisisInterventionNovContents.kpi2 < '175')?'yellow-7':(crisisInterventionNovContents.kpi2 >= '175' && crisisInterventionNovContents.kpi2 < '210')?'green':(crisisInterventionNovContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionDecContents.kpi1 == null)?'grey-2':(crisisInterventionDecContents.kpi1 >= '0' && crisisInterventionDecContents.kpi1 <= '19.8')?'red':(crisisInterventionDecContents.kpi1 > '19.8' && crisisInterventionDecContents.kpi1 <= '26.4')?'orange':(crisisInterventionDecContents.kpi1 > '26.4' && crisisInterventionDecContents.kpi1 < '33')?'yellow-7':(crisisInterventionDecContents.kpi1 >= '33' && crisisInterventionDecContents.kpi1 < '39.6')?'green':(crisisInterventionDecContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionDecContents.kpi2 == null)?'grey-2':(crisisInterventionDecContents.kpi2 >= '0' && crisisInterventionDecContents.kpi2 <= '105')?'red':(crisisInterventionDecContents.kpi2 > '105' && crisisInterventionDecContents.kpi2 <= '140')?'orange':(crisisInterventionDecContents.kpi2 > '140' && crisisInterventionDecContents.kpi2 < '175')?'yellow-7':(crisisInterventionDecContents.kpi2 >= '175' && crisisInterventionDecContents.kpi2 < '210')?'green':(crisisInterventionDecContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                                <q-tooltip># of people using the services</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJanContents.kpi1 == null)?'grey-2':(crisisInterventionJanContents.kpi1 >= '0' && crisisInterventionJanContents.kpi1 <= '19.8')?'red':(crisisInterventionJanContents.kpi1 > '19.8' && crisisInterventionJanContents.kpi1 <= '26.4')?'orange':(crisisInterventionJanContents.kpi1 > '26.4' && crisisInterventionJanContents.kpi1 < '33')?'yellow-7':(crisisInterventionJanContents.kpi1 >= '33' && crisisInterventionJanContents.kpi1 < '39.6')?'green':(crisisInterventionJanContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJanContents.kpi2 == null)?'grey-2':(crisisInterventionJanContents.kpi2 >= '0' && crisisInterventionJanContents.kpi2 <= '105')?'red':(crisisInterventionJanContents.kpi2 > '105' && crisisInterventionJanContents.kpi2 <= '140')?'orange':(crisisInterventionJanContents.kpi2 > '140' && crisisInterventionJanContents.kpi2 < '175')?'yellow-7':(crisisInterventionJanContents.kpi2 >= '175' && crisisInterventionJanContents.kpi2 < '210')?'green':(crisisInterventionJanContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionFebContents.kpi1 == null)?'grey-2':(crisisInterventionFebContents.kpi1 >= '0' && crisisInterventionFebContents.kpi1 <= '19.8')?'red':(crisisInterventionFebContents.kpi1 > '19.8' && crisisInterventionFebContents.kpi1 <= '26.4')?'orange':(crisisInterventionFebContents.kpi1 > '26.4' && crisisInterventionFebContents.kpi1 < '33')?'yellow-7':(crisisInterventionFebContents.kpi1 >= '33' && crisisInterventionFebContents.kpi1 < '39.6')?'green':(crisisInterventionFebContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionFebContents.kpi2 == null)?'grey-2':(crisisInterventionFebContents.kpi2 >= '0' && crisisInterventionFebContents.kpi2 <= '105')?'red':(crisisInterventionFebContents.kpi2 > '105' && crisisInterventionFebContents.kpi2 <= '140')?'orange':(crisisInterventionFebContents.kpi2 > '140' && crisisInterventionFebContents.kpi2 < '175')?'yellow-7':(crisisInterventionFebContents.kpi2 >= '175' && crisisInterventionFebContents.kpi2 < '210')?'green':(crisisInterventionFebContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMarContents.kpi1 == null)?'grey-2':(crisisInterventionMarContents.kpi1 >= '0' && crisisInterventionMarContents.kpi1 <= '19.8')?'red':(crisisInterventionMarContents.kpi1 > '19.8' && crisisInterventionMarContents.kpi1 <= '26.4')?'orange':(crisisInterventionMarContents.kpi1 > '26.4' && crisisInterventionMarContents.kpi1 < '33')?'yellow-7':(crisisInterventionMarContents.kpi1 >= '33' && crisisInterventionMarContents.kpi1 < '39.6')?'green':(crisisInterventionMarContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMarContents.kpi2 == null)?'grey-2':(crisisInterventionMarContents.kpi2 >= '0' && crisisInterventionMarContents.kpi2 <= '105')?'red':(crisisInterventionMarContents.kpi2 > '105' && crisisInterventionMarContents.kpi2 <= '140')?'orange':(crisisInterventionMarContents.kpi2 > '140' && crisisInterventionMarContents.kpi2 < '175')?'yellow-7':(crisisInterventionMarContents.kpi2 >= '175' && crisisInterventionMarContents.kpi2 < '210')?'green':(crisisInterventionMarContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAprContents.kpi1 == null)?'grey-2':(crisisInterventionAprContents.kpi1 >= '0' && crisisInterventionAprContents.kpi1 <= '19.8')?'red':(crisisInterventionAprContents.kpi1 > '19.8' && crisisInterventionAprContents.kpi1 <= '26.4')?'orange':(crisisInterventionAprContents.kpi1 > '26.4' && crisisInterventionAprContents.kpi1 < '33')?'yellow-7':(crisisInterventionAprContents.kpi1 >= '33' && crisisInterventionAprContents.kpi1 < '39.6')?'green':(crisisInterventionAprContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAprContents.kpi2 == null)?'grey-2':(crisisInterventionAprContents.kpi2 >= '0' && crisisInterventionAprContents.kpi2 <= '105')?'red':(crisisInterventionAprContents.kpi2 > '105' && crisisInterventionAprContents.kpi2 <= '140')?'orange':(crisisInterventionAprContents.kpi2 > '140' && crisisInterventionAprContents.kpi2 < '175')?'yellow-7':(crisisInterventionAprContents.kpi2 >= '175' && crisisInterventionAprContents.kpi2 < '210')?'green':(crisisInterventionAprContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMayContents.kpi1 == null)?'grey-2':(crisisInterventionMayContents.kpi1 >= '0' && crisisInterventionMayContents.kpi1 <= '19.8')?'red':(crisisInterventionMayContents.kpi1 > '19.8' && crisisInterventionMayContents.kpi1 <= '26.4')?'orange':(crisisInterventionMayContents.kpi1 > '26.4' && crisisInterventionMayContents.kpi1 < '33')?'yellow-7':(crisisInterventionMayContents.kpi1 >= '33' && crisisInterventionMayContents.kpi1 < '39.6')?'green':(crisisInterventionMayContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMayContents.kpi2 == null)?'grey-2':(crisisInterventionMayContents.kpi2 >= '0' && crisisInterventionMayContents.kpi2 <= '105')?'red':(crisisInterventionMayContents.kpi2 > '105' && crisisInterventionMayContents.kpi2 <= '140')?'orange':(crisisInterventionMayContents.kpi2 > '140' && crisisInterventionMayContents.kpi2 < '175')?'yellow-7':(crisisInterventionMayContents.kpi2 >= '175' && crisisInterventionMayContents.kpi2 < '210')?'green':(crisisInterventionMayContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJunContents.kpi1 == null)?'grey-2':(crisisInterventionJunContents.kpi1 >= '0' && crisisInterventionJunContents.kpi1 <= '19.8')?'red':(crisisInterventionJunContents.kpi1 > '19.8' && crisisInterventionJunContents.kpi1 <= '26.4')?'orange':(crisisInterventionJunContents.kpi1 > '26.4' && crisisInterventionJunContents.kpi1 < '33')?'yellow-7':(crisisInterventionJunContents.kpi1 >= '33' && crisisInterventionJunContents.kpi1 < '39.6')?'green':(crisisInterventionJunContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJunContents.kpi2 == null)?'grey-2':(crisisInterventionJunContents.kpi2 >= '0' && crisisInterventionJunContents.kpi2 <= '105')?'red':(crisisInterventionJunContents.kpi2 > '105' && crisisInterventionJunContents.kpi2 <= '140')?'orange':(crisisInterventionJunContents.kpi2 > '140' && crisisInterventionJunContents.kpi2 < '175')?'yellow-7':(crisisInterventionJunContents.kpi2 >= '175' && crisisInterventionJunContents.kpi2 < '210')?'green':(crisisInterventionJunContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJulContents.kpi1 == null)?'grey-2':(crisisInterventionJulContents.kpi1 >= '0' && crisisInterventionJulContents.kpi1 <= '19.8')?'red':(crisisInterventionJulContents.kpi1 > '19.8' && crisisInterventionJulContents.kpi1 <= '26.4')?'orange':(crisisInterventionJulContents.kpi1 > '26.4' && crisisInterventionJulContents.kpi1 < '33')?'yellow-7':(crisisInterventionJulContents.kpi1 >= '33' && crisisInterventionJulContents.kpi1 < '39.6')?'green':(crisisInterventionJulContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJulContents.kpi2 == null)?'grey-2':(crisisInterventionJulContents.kpi2 >= '0' && crisisInterventionJulContents.kpi2 <= '105')?'red':(crisisInterventionJulContents.kpi2 > '105' && crisisInterventionJulContents.kpi2 <= '140')?'orange':(crisisInterventionJulContents.kpi2 > '140' && crisisInterventionJulContents.kpi2 < '175')?'yellow-7':(crisisInterventionJulContents.kpi2 >= '175' && crisisInterventionJulContents.kpi2 < '210')?'green':(crisisInterventionJulContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAugContents.kpi1 == null)?'grey-2':(crisisInterventionAugContents.kpi1 >= '0' && crisisInterventionAugContents.kpi1 <= '19.8')?'red':(crisisInterventionAugContents.kpi1 > '19.8' && crisisInterventionAugContents.kpi1 <= '26.4')?'orange':(crisisInterventionAugContents.kpi1 > '26.4' && crisisInterventionAugContents.kpi1 < '33')?'yellow-7':(crisisInterventionAugContents.kpi1 >= '33' && crisisInterventionAugContents.kpi1 < '39.6')?'green':(crisisInterventionAugContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAugContents.kpi2 == null)?'grey-2':(crisisInterventionAugContents.kpi2 >= '0' && crisisInterventionAugContents.kpi2 <= '105')?'red':(crisisInterventionAugContents.kpi2 > '105' && crisisInterventionAugContents.kpi2 <= '140')?'orange':(crisisInterventionAugContents.kpi2 > '140' && crisisInterventionAugContents.kpi2 < '175')?'yellow-7':(crisisInterventionAugContents.kpi2 >= '175' && crisisInterventionAugContents.kpi2 < '210')?'green':(crisisInterventionAugContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionSepContents.kpi1 == null)?'grey-2':(crisisInterventionSepContents.kpi1 >= '0' && crisisInterventionSepContents.kpi1 <= '19.8')?'red':(crisisInterventionSepContents.kpi1 > '19.8' && crisisInterventionSepContents.kpi1 <= '26.4')?'orange':(crisisInterventionSepContents.kpi1 > '26.4' && crisisInterventionSepContents.kpi1 < '33')?'yellow-7':(crisisInterventionSepContents.kpi1 >= '33' && crisisInterventionSepContents.kpi1 < '39.6')?'green':(crisisInterventionSepContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionSepContents.kpi2 == null)?'grey-2':(crisisInterventionSepContents.kpi2 >= '0' && crisisInterventionSepContents.kpi2 <= '105')?'red':(crisisInterventionSepContents.kpi2 > '105' && crisisInterventionSepContents.kpi2 <= '140')?'orange':(crisisInterventionSepContents.kpi2 > '140' && crisisInterventionSepContents.kpi2 < '175')?'yellow-7':(crisisInterventionSepContents.kpi2 >= '175' && crisisInterventionSepContents.kpi2 < '210')?'green':(crisisInterventionSepContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionOctContents.kpi1 == null)?'grey-2':(crisisInterventionOctContents.kpi1 >= '0' && crisisInterventionOctContents.kpi1 <= '19.8')?'red':(crisisInterventionOctContents.kpi1 > '19.8' && crisisInterventionOctContents.kpi1 <= '26.4')?'orange':(crisisInterventionOctContents.kpi1 > '26.4' && crisisInterventionOctContents.kpi1 < '33')?'yellow-7':(crisisInterventionOctContents.kpi1 >= '33' && crisisInterventionOctContents.kpi1 < '39.6')?'green':(crisisInterventionOctContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionOctContents.kpi2 == null)?'grey-2':(crisisInterventionOctContents.kpi2 >= '0' && crisisInterventionOctContents.kpi2 <= '105')?'red':(crisisInterventionOctContents.kpi2 > '105' && crisisInterventionOctContents.kpi2 <= '140')?'orange':(crisisInterventionOctContents.kpi2 > '140' && crisisInterventionOctContents.kpi2 < '175')?'yellow-7':(crisisInterventionOctContents.kpi2 >= '175' && crisisInterventionOctContents.kpi2 < '210')?'green':(crisisInterventionOctContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionNovContents.kpi1 == null)?'grey-2':(crisisInterventionNovContents.kpi1 >= '0' && crisisInterventionNovContents.kpi1 <= '19.8')?'red':(crisisInterventionNovContents.kpi1 > '19.8' && crisisInterventionNovContents.kpi1 <= '26.4')?'orange':(crisisInterventionNovContents.kpi1 > '26.4' && crisisInterventionNovContents.kpi1 < '33')?'yellow-7':(crisisInterventionNovContents.kpi1 >= '33' && crisisInterventionNovContents.kpi1 < '39.6')?'green':(crisisInterventionNovContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionNovContents.kpi2 == null)?'grey-2':(crisisInterventionNovContents.kpi2 >= '0' && crisisInterventionNovContents.kpi2 <= '105')?'red':(crisisInterventionNovContents.kpi2 > '105' && crisisInterventionNovContents.kpi2 <= '140')?'orange':(crisisInterventionNovContents.kpi2 > '140' && crisisInterventionNovContents.kpi2 < '175')?'yellow-7':(crisisInterventionNovContents.kpi2 >= '175' && crisisInterventionNovContents.kpi2 < '210')?'green':(crisisInterventionNovContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionDecContents.kpi1 == null)?'grey-2':(crisisInterventionDecContents.kpi1 >= '0' && crisisInterventionDecContents.kpi1 <= '19.8')?'red':(crisisInterventionDecContents.kpi1 > '19.8' && crisisInterventionDecContents.kpi1 <= '26.4')?'orange':(crisisInterventionDecContents.kpi1 > '26.4' && crisisInterventionDecContents.kpi1 < '33')?'yellow-7':(crisisInterventionDecContents.kpi1 >= '33' && crisisInterventionDecContents.kpi1 < '39.6')?'green':(crisisInterventionDecContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionDecContents.kpi2 == null)?'grey-2':(crisisInterventionDecContents.kpi2 >= '0' && crisisInterventionDecContents.kpi2 <= '105')?'red':(crisisInterventionDecContents.kpi2 > '105' && crisisInterventionDecContents.kpi2 <= '140')?'orange':(crisisInterventionDecContents.kpi2 > '140' && crisisInterventionDecContents.kpi2 < '175')?'yellow-7':(crisisInterventionDecContents.kpi2 >= '175' && crisisInterventionDecContents.kpi2 < '210')?'green':(crisisInterventionDecContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                                <q-tooltip># of people using the services</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJanContents.kpi1 == null)?'grey-2':(crisisInterventionJanContents.kpi1 >= '0' && crisisInterventionJanContents.kpi1 <= '19.8')?'red':(crisisInterventionJanContents.kpi1 > '19.8' && crisisInterventionJanContents.kpi1 <= '26.4')?'orange':(crisisInterventionJanContents.kpi1 > '26.4' && crisisInterventionJanContents.kpi1 < '33')?'yellow-7':(crisisInterventionJanContents.kpi1 >= '33' && crisisInterventionJanContents.kpi1 < '39.6')?'green':(crisisInterventionJanContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJanContents.kpi2 == null)?'grey-2':(crisisInterventionJanContents.kpi2 >= '0' && crisisInterventionJanContents.kpi2 <= '105')?'red':(crisisInterventionJanContents.kpi2 > '105' && crisisInterventionJanContents.kpi2 <= '140')?'orange':(crisisInterventionJanContents.kpi2 > '140' && crisisInterventionJanContents.kpi2 < '175')?'yellow-7':(crisisInterventionJanContents.kpi2 >= '175' && crisisInterventionJanContents.kpi2 < '210')?'green':(crisisInterventionJanContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionFebContents.kpi1 == null)?'grey-2':(crisisInterventionFebContents.kpi1 >= '0' && crisisInterventionFebContents.kpi1 <= '19.8')?'red':(crisisInterventionFebContents.kpi1 > '19.8' && crisisInterventionFebContents.kpi1 <= '26.4')?'orange':(crisisInterventionFebContents.kpi1 > '26.4' && crisisInterventionFebContents.kpi1 < '33')?'yellow-7':(crisisInterventionFebContents.kpi1 >= '33' && crisisInterventionFebContents.kpi1 < '39.6')?'green':(crisisInterventionFebContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionFebContents.kpi2 == null)?'grey-2':(crisisInterventionFebContents.kpi2 >= '0' && crisisInterventionFebContents.kpi2 <= '105')?'red':(crisisInterventionFebContents.kpi2 > '105' && crisisInterventionFebContents.kpi2 <= '140')?'orange':(crisisInterventionFebContents.kpi2 > '140' && crisisInterventionFebContents.kpi2 < '175')?'yellow-7':(crisisInterventionFebContents.kpi2 >= '175' && crisisInterventionFebContents.kpi2 < '210')?'green':(crisisInterventionFebContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMarContents.kpi1 == null)?'grey-2':(crisisInterventionMarContents.kpi1 >= '0' && crisisInterventionMarContents.kpi1 <= '19.8')?'red':(crisisInterventionMarContents.kpi1 > '19.8' && crisisInterventionMarContents.kpi1 <= '26.4')?'orange':(crisisInterventionMarContents.kpi1 > '26.4' && crisisInterventionMarContents.kpi1 < '33')?'yellow-7':(crisisInterventionMarContents.kpi1 >= '33' && crisisInterventionMarContents.kpi1 < '39.6')?'green':(crisisInterventionMarContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMarContents.kpi2 == null)?'grey-2':(crisisInterventionMarContents.kpi2 >= '0' && crisisInterventionMarContents.kpi2 <= '105')?'red':(crisisInterventionMarContents.kpi2 > '105' && crisisInterventionMarContents.kpi2 <= '140')?'orange':(crisisInterventionMarContents.kpi2 > '140' && crisisInterventionMarContents.kpi2 < '175')?'yellow-7':(crisisInterventionMarContents.kpi2 >= '175' && crisisInterventionMarContents.kpi2 < '210')?'green':(crisisInterventionMarContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAprContents.kpi1 == null)?'grey-2':(crisisInterventionAprContents.kpi1 >= '0' && crisisInterventionAprContents.kpi1 <= '19.8')?'red':(crisisInterventionAprContents.kpi1 > '19.8' && crisisInterventionAprContents.kpi1 <= '26.4')?'orange':(crisisInterventionAprContents.kpi1 > '26.4' && crisisInterventionAprContents.kpi1 < '33')?'yellow-7':(crisisInterventionAprContents.kpi1 >= '33' && crisisInterventionAprContents.kpi1 < '39.6')?'green':(crisisInterventionAprContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAprContents.kpi2 == null)?'grey-2':(crisisInterventionAprContents.kpi2 >= '0' && crisisInterventionAprContents.kpi2 <= '105')?'red':(crisisInterventionAprContents.kpi2 > '105' && crisisInterventionAprContents.kpi2 <= '140')?'orange':(crisisInterventionAprContents.kpi2 > '140' && crisisInterventionAprContents.kpi2 < '175')?'yellow-7':(crisisInterventionAprContents.kpi2 >= '175' && crisisInterventionAprContents.kpi2 < '210')?'green':(crisisInterventionAprContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMayContents.kpi1 == null)?'grey-2':(crisisInterventionMayContents.kpi1 >= '0' && crisisInterventionMayContents.kpi1 <= '19.8')?'red':(crisisInterventionMayContents.kpi1 > '19.8' && crisisInterventionMayContents.kpi1 <= '26.4')?'orange':(crisisInterventionMayContents.kpi1 > '26.4' && crisisInterventionMayContents.kpi1 < '33')?'yellow-7':(crisisInterventionMayContents.kpi1 >= '33' && crisisInterventionMayContents.kpi1 < '39.6')?'green':(crisisInterventionMayContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMayContents.kpi2 == null)?'grey-2':(crisisInterventionMayContents.kpi2 >= '0' && crisisInterventionMayContents.kpi2 <= '105')?'red':(crisisInterventionMayContents.kpi2 > '105' && crisisInterventionMayContents.kpi2 <= '140')?'orange':(crisisInterventionMayContents.kpi2 > '140' && crisisInterventionMayContents.kpi2 < '175')?'yellow-7':(crisisInterventionMayContents.kpi2 >= '175' && crisisInterventionMayContents.kpi2 < '210')?'green':(crisisInterventionMayContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJunContents.kpi1 == null)?'grey-2':(crisisInterventionJunContents.kpi1 >= '0' && crisisInterventionJunContents.kpi1 <= '19.8')?'red':(crisisInterventionJunContents.kpi1 > '19.8' && crisisInterventionJunContents.kpi1 <= '26.4')?'orange':(crisisInterventionJunContents.kpi1 > '26.4' && crisisInterventionJunContents.kpi1 < '33')?'yellow-7':(crisisInterventionJunContents.kpi1 >= '33' && crisisInterventionJunContents.kpi1 < '39.6')?'green':(crisisInterventionJunContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJunContents.kpi2 == null)?'grey-2':(crisisInterventionJunContents.kpi2 >= '0' && crisisInterventionJunContents.kpi2 <= '105')?'red':(crisisInterventionJunContents.kpi2 > '105' && crisisInterventionJunContents.kpi2 <= '140')?'orange':(crisisInterventionJunContents.kpi2 > '140' && crisisInterventionJunContents.kpi2 < '175')?'yellow-7':(crisisInterventionJunContents.kpi2 >= '175' && crisisInterventionJunContents.kpi2 < '210')?'green':(crisisInterventionJunContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJulContents.kpi1 == null)?'grey-2':(crisisInterventionJulContents.kpi1 >= '0' && crisisInterventionJulContents.kpi1 <= '19.8')?'red':(crisisInterventionJulContents.kpi1 > '19.8' && crisisInterventionJulContents.kpi1 <= '26.4')?'orange':(crisisInterventionJulContents.kpi1 > '26.4' && crisisInterventionJulContents.kpi1 < '33')?'yellow-7':(crisisInterventionJulContents.kpi1 >= '33' && crisisInterventionJulContents.kpi1 < '39.6')?'green':(crisisInterventionJulContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJulContents.kpi2 == null)?'grey-2':(crisisInterventionJulContents.kpi2 >= '0' && crisisInterventionJulContents.kpi2 <= '105')?'red':(crisisInterventionJulContents.kpi2 > '105' && crisisInterventionJulContents.kpi2 <= '140')?'orange':(crisisInterventionJulContents.kpi2 > '140' && crisisInterventionJulContents.kpi2 < '175')?'yellow-7':(crisisInterventionJulContents.kpi2 >= '175' && crisisInterventionJulContents.kpi2 < '210')?'green':(crisisInterventionJulContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAugContents.kpi1 == null)?'grey-2':(crisisInterventionAugContents.kpi1 >= '0' && crisisInterventionAugContents.kpi1 <= '19.8')?'red':(crisisInterventionAugContents.kpi1 > '19.8' && crisisInterventionAugContents.kpi1 <= '26.4')?'orange':(crisisInterventionAugContents.kpi1 > '26.4' && crisisInterventionAugContents.kpi1 < '33')?'yellow-7':(crisisInterventionAugContents.kpi1 >= '33' && crisisInterventionAugContents.kpi1 < '39.6')?'green':(crisisInterventionAugContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAugContents.kpi2 == null)?'grey-2':(crisisInterventionAugContents.kpi2 >= '0' && crisisInterventionAugContents.kpi2 <= '105')?'red':(crisisInterventionAugContents.kpi2 > '105' && crisisInterventionAugContents.kpi2 <= '140')?'orange':(crisisInterventionAugContents.kpi2 > '140' && crisisInterventionAugContents.kpi2 < '175')?'yellow-7':(crisisInterventionAugContents.kpi2 >= '175' && crisisInterventionAugContents.kpi2 < '210')?'green':(crisisInterventionAugContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionSepContents.kpi1 == null)?'grey-2':(crisisInterventionSepContents.kpi1 >= '0' && crisisInterventionSepContents.kpi1 <= '19.8')?'red':(crisisInterventionSepContents.kpi1 > '19.8' && crisisInterventionSepContents.kpi1 <= '26.4')?'orange':(crisisInterventionSepContents.kpi1 > '26.4' && crisisInterventionSepContents.kpi1 < '33')?'yellow-7':(crisisInterventionSepContents.kpi1 >= '33' && crisisInterventionSepContents.kpi1 < '39.6')?'green':(crisisInterventionSepContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionSepContents.kpi2 == null)?'grey-2':(crisisInterventionSepContents.kpi2 >= '0' && crisisInterventionSepContents.kpi2 <= '105')?'red':(crisisInterventionSepContents.kpi2 > '105' && crisisInterventionSepContents.kpi2 <= '140')?'orange':(crisisInterventionSepContents.kpi2 > '140' && crisisInterventionSepContents.kpi2 < '175')?'yellow-7':(crisisInterventionSepContents.kpi2 >= '175' && crisisInterventionSepContents.kpi2 < '210')?'green':(crisisInterventionSepContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionOctContents.kpi1 == null)?'grey-2':(crisisInterventionOctContents.kpi1 >= '0' && crisisInterventionOctContents.kpi1 <= '19.8')?'red':(crisisInterventionOctContents.kpi1 > '19.8' && crisisInterventionOctContents.kpi1 <= '26.4')?'orange':(crisisInterventionOctContents.kpi1 > '26.4' && crisisInterventionOctContents.kpi1 < '33')?'yellow-7':(crisisInterventionOctContents.kpi1 >= '33' && crisisInterventionOctContents.kpi1 < '39.6')?'green':(crisisInterventionOctContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionOctContents.kpi2 == null)?'grey-2':(crisisInterventionOctContents.kpi2 >= '0' && crisisInterventionOctContents.kpi2 <= '105')?'red':(crisisInterventionOctContents.kpi2 > '105' && crisisInterventionOctContents.kpi2 <= '140')?'orange':(crisisInterventionOctContents.kpi2 > '140' && crisisInterventionOctContents.kpi2 < '175')?'yellow-7':(crisisInterventionOctContents.kpi2 >= '175' && crisisInterventionOctContents.kpi2 < '210')?'green':(crisisInterventionOctContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionNovContents.kpi1 == null)?'grey-2':(crisisInterventionNovContents.kpi1 >= '0' && crisisInterventionNovContents.kpi1 <= '19.8')?'red':(crisisInterventionNovContents.kpi1 > '19.8' && crisisInterventionNovContents.kpi1 <= '26.4')?'orange':(crisisInterventionNovContents.kpi1 > '26.4' && crisisInterventionNovContents.kpi1 < '33')?'yellow-7':(crisisInterventionNovContents.kpi1 >= '33' && crisisInterventionNovContents.kpi1 < '39.6')?'green':(crisisInterventionNovContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionNovContents.kpi2 == null)?'grey-2':(crisisInterventionNovContents.kpi2 >= '0' && crisisInterventionNovContents.kpi2 <= '105')?'red':(crisisInterventionNovContents.kpi2 > '105' && crisisInterventionNovContents.kpi2 <= '140')?'orange':(crisisInterventionNovContents.kpi2 > '140' && crisisInterventionNovContents.kpi2 < '175')?'yellow-7':(crisisInterventionNovContents.kpi2 >= '175' && crisisInterventionNovContents.kpi2 < '210')?'green':(crisisInterventionNovContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionDecContents.kpi1 == null)?'grey-2':(crisisInterventionDecContents.kpi1 >= '0' && crisisInterventionDecContents.kpi1 <= '19.8')?'red':(crisisInterventionDecContents.kpi1 > '19.8' && crisisInterventionDecContents.kpi1 <= '26.4')?'orange':(crisisInterventionDecContents.kpi1 > '26.4' && crisisInterventionDecContents.kpi1 < '33')?'yellow-7':(crisisInterventionDecContents.kpi1 >= '33' && crisisInterventionDecContents.kpi1 < '39.6')?'green':(crisisInterventionDecContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionDecContents.kpi2 == null)?'grey-2':(crisisInterventionDecContents.kpi2 >= '0' && crisisInterventionDecContents.kpi2 <= '105')?'red':(crisisInterventionDecContents.kpi2 > '105' && crisisInterventionDecContents.kpi2 <= '140')?'orange':(crisisInterventionDecContents.kpi2 > '140' && crisisInterventionDecContents.kpi2 < '175')?'yellow-7':(crisisInterventionDecContents.kpi2 >= '175' && crisisInterventionDecContents.kpi2 < '210')?'green':(crisisInterventionDecContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                                <q-tooltip># of people using the services</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJanContents.kpi1 == null)?'grey-2':(crisisInterventionJanContents.kpi1 >= '0' && crisisInterventionJanContents.kpi1 <= '19.8')?'red':(crisisInterventionJanContents.kpi1 > '19.8' && crisisInterventionJanContents.kpi1 <= '26.4')?'orange':(crisisInterventionJanContents.kpi1 > '26.4' && crisisInterventionJanContents.kpi1 < '33')?'yellow-7':(crisisInterventionJanContents.kpi1 >= '33' && crisisInterventionJanContents.kpi1 < '39.6')?'green':(crisisInterventionJanContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJanContents.kpi2 == null)?'grey-2':(crisisInterventionJanContents.kpi2 >= '0' && crisisInterventionJanContents.kpi2 <= '105')?'red':(crisisInterventionJanContents.kpi2 > '105' && crisisInterventionJanContents.kpi2 <= '140')?'orange':(crisisInterventionJanContents.kpi2 > '140' && crisisInterventionJanContents.kpi2 < '175')?'yellow-7':(crisisInterventionJanContents.kpi2 >= '175' && crisisInterventionJanContents.kpi2 < '210')?'green':(crisisInterventionJanContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionFebContents.kpi1 == null)?'grey-2':(crisisInterventionFebContents.kpi1 >= '0' && crisisInterventionFebContents.kpi1 <= '19.8')?'red':(crisisInterventionFebContents.kpi1 > '19.8' && crisisInterventionFebContents.kpi1 <= '26.4')?'orange':(crisisInterventionFebContents.kpi1 > '26.4' && crisisInterventionFebContents.kpi1 < '33')?'yellow-7':(crisisInterventionFebContents.kpi1 >= '33' && crisisInterventionFebContents.kpi1 < '39.6')?'green':(crisisInterventionFebContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionFebContents.kpi2 == null)?'grey-2':(crisisInterventionFebContents.kpi2 >= '0' && crisisInterventionFebContents.kpi2 <= '105')?'red':(crisisInterventionFebContents.kpi2 > '105' && crisisInterventionFebContents.kpi2 <= '140')?'orange':(crisisInterventionFebContents.kpi2 > '140' && crisisInterventionFebContents.kpi2 < '175')?'yellow-7':(crisisInterventionFebContents.kpi2 >= '175' && crisisInterventionFebContents.kpi2 < '210')?'green':(crisisInterventionFebContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMarContents.kpi1 == null)?'grey-2':(crisisInterventionMarContents.kpi1 >= '0' && crisisInterventionMarContents.kpi1 <= '19.8')?'red':(crisisInterventionMarContents.kpi1 > '19.8' && crisisInterventionMarContents.kpi1 <= '26.4')?'orange':(crisisInterventionMarContents.kpi1 > '26.4' && crisisInterventionMarContents.kpi1 < '33')?'yellow-7':(crisisInterventionMarContents.kpi1 >= '33' && crisisInterventionMarContents.kpi1 < '39.6')?'green':(crisisInterventionMarContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMarContents.kpi2 == null)?'grey-2':(crisisInterventionMarContents.kpi2 >= '0' && crisisInterventionMarContents.kpi2 <= '105')?'red':(crisisInterventionMarContents.kpi2 > '105' && crisisInterventionMarContents.kpi2 <= '140')?'orange':(crisisInterventionMarContents.kpi2 > '140' && crisisInterventionMarContents.kpi2 < '175')?'yellow-7':(crisisInterventionMarContents.kpi2 >= '175' && crisisInterventionMarContents.kpi2 < '210')?'green':(crisisInterventionMarContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAprContents.kpi1 == null)?'grey-2':(crisisInterventionAprContents.kpi1 >= '0' && crisisInterventionAprContents.kpi1 <= '19.8')?'red':(crisisInterventionAprContents.kpi1 > '19.8' && crisisInterventionAprContents.kpi1 <= '26.4')?'orange':(crisisInterventionAprContents.kpi1 > '26.4' && crisisInterventionAprContents.kpi1 < '33')?'yellow-7':(crisisInterventionAprContents.kpi1 >= '33' && crisisInterventionAprContents.kpi1 < '39.6')?'green':(crisisInterventionAprContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAprContents.kpi2 == null)?'grey-2':(crisisInterventionAprContents.kpi2 >= '0' && crisisInterventionAprContents.kpi2 <= '105')?'red':(crisisInterventionAprContents.kpi2 > '105' && crisisInterventionAprContents.kpi2 <= '140')?'orange':(crisisInterventionAprContents.kpi2 > '140' && crisisInterventionAprContents.kpi2 < '175')?'yellow-7':(crisisInterventionAprContents.kpi2 >= '175' && crisisInterventionAprContents.kpi2 < '210')?'green':(crisisInterventionAprContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMayContents.kpi1 == null)?'grey-2':(crisisInterventionMayContents.kpi1 >= '0' && crisisInterventionMayContents.kpi1 <= '19.8')?'red':(crisisInterventionMayContents.kpi1 > '19.8' && crisisInterventionMayContents.kpi1 <= '26.4')?'orange':(crisisInterventionMayContents.kpi1 > '26.4' && crisisInterventionMayContents.kpi1 < '33')?'yellow-7':(crisisInterventionMayContents.kpi1 >= '33' && crisisInterventionMayContents.kpi1 < '39.6')?'green':(crisisInterventionMayContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMayContents.kpi2 == null)?'grey-2':(crisisInterventionMayContents.kpi2 >= '0' && crisisInterventionMayContents.kpi2 <= '105')?'red':(crisisInterventionMayContents.kpi2 > '105' && crisisInterventionMayContents.kpi2 <= '140')?'orange':(crisisInterventionMayContents.kpi2 > '140' && crisisInterventionMayContents.kpi2 < '175')?'yellow-7':(crisisInterventionMayContents.kpi2 >= '175' && crisisInterventionMayContents.kpi2 < '210')?'green':(crisisInterventionMayContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJunContents.kpi1 == null)?'grey-2':(crisisInterventionJunContents.kpi1 >= '0' && crisisInterventionJunContents.kpi1 <= '19.8')?'red':(crisisInterventionJunContents.kpi1 > '19.8' && crisisInterventionJunContents.kpi1 <= '26.4')?'orange':(crisisInterventionJunContents.kpi1 > '26.4' && crisisInterventionJunContents.kpi1 < '33')?'yellow-7':(crisisInterventionJunContents.kpi1 >= '33' && crisisInterventionJunContents.kpi1 < '39.6')?'green':(crisisInterventionJunContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJunContents.kpi2 == null)?'grey-2':(crisisInterventionJunContents.kpi2 >= '0' && crisisInterventionJunContents.kpi2 <= '105')?'red':(crisisInterventionJunContents.kpi2 > '105' && crisisInterventionJunContents.kpi2 <= '140')?'orange':(crisisInterventionJunContents.kpi2 > '140' && crisisInterventionJunContents.kpi2 < '175')?'yellow-7':(crisisInterventionJunContents.kpi2 >= '175' && crisisInterventionJunContents.kpi2 < '210')?'green':(crisisInterventionJunContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJulContents.kpi1 == null)?'grey-2':(crisisInterventionJulContents.kpi1 >= '0' && crisisInterventionJulContents.kpi1 <= '19.8')?'red':(crisisInterventionJulContents.kpi1 > '19.8' && crisisInterventionJulContents.kpi1 <= '26.4')?'orange':(crisisInterventionJulContents.kpi1 > '26.4' && crisisInterventionJulContents.kpi1 < '33')?'yellow-7':(crisisInterventionJulContents.kpi1 >= '33' && crisisInterventionJulContents.kpi1 < '39.6')?'green':(crisisInterventionJulContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJulContents.kpi2 == null)?'grey-2':(crisisInterventionJulContents.kpi2 >= '0' && crisisInterventionJulContents.kpi2 <= '105')?'red':(crisisInterventionJulContents.kpi2 > '105' && crisisInterventionJulContents.kpi2 <= '140')?'orange':(crisisInterventionJulContents.kpi2 > '140' && crisisInterventionJulContents.kpi2 < '175')?'yellow-7':(crisisInterventionJulContents.kpi2 >= '175' && crisisInterventionJulContents.kpi2 < '210')?'green':(crisisInterventionJulContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAugContents.kpi1 == null)?'grey-2':(crisisInterventionAugContents.kpi1 >= '0' && crisisInterventionAugContents.kpi1 <= '19.8')?'red':(crisisInterventionAugContents.kpi1 > '19.8' && crisisInterventionAugContents.kpi1 <= '26.4')?'orange':(crisisInterventionAugContents.kpi1 > '26.4' && crisisInterventionAugContents.kpi1 < '33')?'yellow-7':(crisisInterventionAugContents.kpi1 >= '33' && crisisInterventionAugContents.kpi1 < '39.6')?'green':(crisisInterventionAugContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAugContents.kpi2 == null)?'grey-2':(crisisInterventionAugContents.kpi2 >= '0' && crisisInterventionAugContents.kpi2 <= '105')?'red':(crisisInterventionAugContents.kpi2 > '105' && crisisInterventionAugContents.kpi2 <= '140')?'orange':(crisisInterventionAugContents.kpi2 > '140' && crisisInterventionAugContents.kpi2 < '175')?'yellow-7':(crisisInterventionAugContents.kpi2 >= '175' && crisisInterventionAugContents.kpi2 < '210')?'green':(crisisInterventionAugContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionSepContents.kpi1 == null)?'grey-2':(crisisInterventionSepContents.kpi1 >= '0' && crisisInterventionSepContents.kpi1 <= '19.8')?'red':(crisisInterventionSepContents.kpi1 > '19.8' && crisisInterventionSepContents.kpi1 <= '26.4')?'orange':(crisisInterventionSepContents.kpi1 > '26.4' && crisisInterventionSepContents.kpi1 < '33')?'yellow-7':(crisisInterventionSepContents.kpi1 >= '33' && crisisInterventionSepContents.kpi1 < '39.6')?'green':(crisisInterventionSepContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionSepContents.kpi2 == null)?'grey-2':(crisisInterventionSepContents.kpi2 >= '0' && crisisInterventionSepContents.kpi2 <= '105')?'red':(crisisInterventionSepContents.kpi2 > '105' && crisisInterventionSepContents.kpi2 <= '140')?'orange':(crisisInterventionSepContents.kpi2 > '140' && crisisInterventionSepContents.kpi2 < '175')?'yellow-7':(crisisInterventionSepContents.kpi2 >= '175' && crisisInterventionSepContents.kpi2 < '210')?'green':(crisisInterventionSepContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionOctContents.kpi1 == null)?'grey-2':(crisisInterventionOctContents.kpi1 >= '0' && crisisInterventionOctContents.kpi1 <= '19.8')?'red':(crisisInterventionOctContents.kpi1 > '19.8' && crisisInterventionOctContents.kpi1 <= '26.4')?'orange':(crisisInterventionOctContents.kpi1 > '26.4' && crisisInterventionOctContents.kpi1 < '33')?'yellow-7':(crisisInterventionOctContents.kpi1 >= '33' && crisisInterventionOctContents.kpi1 < '39.6')?'green':(crisisInterventionOctContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionOctContents.kpi2 == null)?'grey-2':(crisisInterventionOctContents.kpi2 >= '0' && crisisInterventionOctContents.kpi2 <= '105')?'red':(crisisInterventionOctContents.kpi2 > '105' && crisisInterventionOctContents.kpi2 <= '140')?'orange':(crisisInterventionOctContents.kpi2 > '140' && crisisInterventionOctContents.kpi2 < '175')?'yellow-7':(crisisInterventionOctContents.kpi2 >= '175' && crisisInterventionOctContents.kpi2 < '210')?'green':(crisisInterventionOctContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionNovContents.kpi1 == null)?'grey-2':(crisisInterventionNovContents.kpi1 >= '0' && crisisInterventionNovContents.kpi1 <= '19.8')?'red':(crisisInterventionNovContents.kpi1 > '19.8' && crisisInterventionNovContents.kpi1 <= '26.4')?'orange':(crisisInterventionNovContents.kpi1 > '26.4' && crisisInterventionNovContents.kpi1 < '33')?'yellow-7':(crisisInterventionNovContents.kpi1 >= '33' && crisisInterventionNovContents.kpi1 < '39.6')?'green':(crisisInterventionNovContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionNovContents.kpi2 == null)?'grey-2':(crisisInterventionNovContents.kpi2 >= '0' && crisisInterventionNovContents.kpi2 <= '105')?'red':(crisisInterventionNovContents.kpi2 > '105' && crisisInterventionNovContents.kpi2 <= '140')?'orange':(crisisInterventionNovContents.kpi2 > '140' && crisisInterventionNovContents.kpi2 < '175')?'yellow-7':(crisisInterventionNovContents.kpi2 >= '175' && crisisInterventionNovContents.kpi2 < '210')?'green':(crisisInterventionNovContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionDecContents.kpi1 == null)?'grey-2':(crisisInterventionDecContents.kpi1 >= '0' && crisisInterventionDecContents.kpi1 <= '19.8')?'red':(crisisInterventionDecContents.kpi1 > '19.8' && crisisInterventionDecContents.kpi1 <= '26.4')?'orange':(crisisInterventionDecContents.kpi1 > '26.4' && crisisInterventionDecContents.kpi1 < '33')?'yellow-7':(crisisInterventionDecContents.kpi1 >= '33' && crisisInterventionDecContents.kpi1 < '39.6')?'green':(crisisInterventionDecContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionDecContents.kpi2 == null)?'grey-2':(crisisInterventionDecContents.kpi2 >= '0' && crisisInterventionDecContents.kpi2 <= '105')?'red':(crisisInterventionDecContents.kpi2 > '105' && crisisInterventionDecContents.kpi2 <= '140')?'orange':(crisisInterventionDecContents.kpi2 > '140' && crisisInterventionDecContents.kpi2 < '175')?'yellow-7':(crisisInterventionDecContents.kpi2 >= '175' && crisisInterventionDecContents.kpi2 < '210')?'green':(crisisInterventionDecContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                                <q-tooltip># of people using the services</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJanContents.kpi1 == null)?'grey-2':(crisisInterventionJanContents.kpi1 >= '0' && crisisInterventionJanContents.kpi1 <= '19.8')?'red':(crisisInterventionJanContents.kpi1 > '19.8' && crisisInterventionJanContents.kpi1 <= '26.4')?'orange':(crisisInterventionJanContents.kpi1 > '26.4' && crisisInterventionJanContents.kpi1 < '33')?'yellow-7':(crisisInterventionJanContents.kpi1 >= '33' && crisisInterventionJanContents.kpi1 < '39.6')?'green':(crisisInterventionJanContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJanContents.kpi2 == null)?'grey-2':(crisisInterventionJanContents.kpi2 >= '0' && crisisInterventionJanContents.kpi2 <= '105')?'red':(crisisInterventionJanContents.kpi2 > '105' && crisisInterventionJanContents.kpi2 <= '140')?'orange':(crisisInterventionJanContents.kpi2 > '140' && crisisInterventionJanContents.kpi2 < '175')?'yellow-7':(crisisInterventionJanContents.kpi2 >= '175' && crisisInterventionJanContents.kpi2 < '210')?'green':(crisisInterventionJanContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionFebContents.kpi1 == null)?'grey-2':(crisisInterventionFebContents.kpi1 >= '0' && crisisInterventionFebContents.kpi1 <= '19.8')?'red':(crisisInterventionFebContents.kpi1 > '19.8' && crisisInterventionFebContents.kpi1 <= '26.4')?'orange':(crisisInterventionFebContents.kpi1 > '26.4' && crisisInterventionFebContents.kpi1 < '33')?'yellow-7':(crisisInterventionFebContents.kpi1 >= '33' && crisisInterventionFebContents.kpi1 < '39.6')?'green':(crisisInterventionFebContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionFebContents.kpi2 == null)?'grey-2':(crisisInterventionFebContents.kpi2 >= '0' && crisisInterventionFebContents.kpi2 <= '105')?'red':(crisisInterventionFebContents.kpi2 > '105' && crisisInterventionFebContents.kpi2 <= '140')?'orange':(crisisInterventionFebContents.kpi2 > '140' && crisisInterventionFebContents.kpi2 < '175')?'yellow-7':(crisisInterventionFebContents.kpi2 >= '175' && crisisInterventionFebContents.kpi2 < '210')?'green':(crisisInterventionFebContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMarContents.kpi1 == null)?'grey-2':(crisisInterventionMarContents.kpi1 >= '0' && crisisInterventionMarContents.kpi1 <= '19.8')?'red':(crisisInterventionMarContents.kpi1 > '19.8' && crisisInterventionMarContents.kpi1 <= '26.4')?'orange':(crisisInterventionMarContents.kpi1 > '26.4' && crisisInterventionMarContents.kpi1 < '33')?'yellow-7':(crisisInterventionMarContents.kpi1 >= '33' && crisisInterventionMarContents.kpi1 < '39.6')?'green':(crisisInterventionMarContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMarContents.kpi2 == null)?'grey-2':(crisisInterventionMarContents.kpi2 >= '0' && crisisInterventionMarContents.kpi2 <= '105')?'red':(crisisInterventionMarContents.kpi2 > '105' && crisisInterventionMarContents.kpi2 <= '140')?'orange':(crisisInterventionMarContents.kpi2 > '140' && crisisInterventionMarContents.kpi2 < '175')?'yellow-7':(crisisInterventionMarContents.kpi2 >= '175' && crisisInterventionMarContents.kpi2 < '210')?'green':(crisisInterventionMarContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAprContents.kpi1 == null)?'grey-2':(crisisInterventionAprContents.kpi1 >= '0' && crisisInterventionAprContents.kpi1 <= '19.8')?'red':(crisisInterventionAprContents.kpi1 > '19.8' && crisisInterventionAprContents.kpi1 <= '26.4')?'orange':(crisisInterventionAprContents.kpi1 > '26.4' && crisisInterventionAprContents.kpi1 < '33')?'yellow-7':(crisisInterventionAprContents.kpi1 >= '33' && crisisInterventionAprContents.kpi1 < '39.6')?'green':(crisisInterventionAprContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAprContents.kpi2 == null)?'grey-2':(crisisInterventionAprContents.kpi2 >= '0' && crisisInterventionAprContents.kpi2 <= '105')?'red':(crisisInterventionAprContents.kpi2 > '105' && crisisInterventionAprContents.kpi2 <= '140')?'orange':(crisisInterventionAprContents.kpi2 > '140' && crisisInterventionAprContents.kpi2 < '175')?'yellow-7':(crisisInterventionAprContents.kpi2 >= '175' && crisisInterventionAprContents.kpi2 < '210')?'green':(crisisInterventionAprContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMayContents.kpi1 == null)?'grey-2':(crisisInterventionMayContents.kpi1 >= '0' && crisisInterventionMayContents.kpi1 <= '19.8')?'red':(crisisInterventionMayContents.kpi1 > '19.8' && crisisInterventionMayContents.kpi1 <= '26.4')?'orange':(crisisInterventionMayContents.kpi1 > '26.4' && crisisInterventionMayContents.kpi1 < '33')?'yellow-7':(crisisInterventionMayContents.kpi1 >= '33' && crisisInterventionMayContents.kpi1 < '39.6')?'green':(crisisInterventionMayContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMayContents.kpi2 == null)?'grey-2':(crisisInterventionMayContents.kpi2 >= '0' && crisisInterventionMayContents.kpi2 <= '105')?'red':(crisisInterventionMayContents.kpi2 > '105' && crisisInterventionMayContents.kpi2 <= '140')?'orange':(crisisInterventionMayContents.kpi2 > '140' && crisisInterventionMayContents.kpi2 < '175')?'yellow-7':(crisisInterventionMayContents.kpi2 >= '175' && crisisInterventionMayContents.kpi2 < '210')?'green':(crisisInterventionMayContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJunContents.kpi1 == null)?'grey-2':(crisisInterventionJunContents.kpi1 >= '0' && crisisInterventionJunContents.kpi1 <= '19.8')?'red':(crisisInterventionJunContents.kpi1 > '19.8' && crisisInterventionJunContents.kpi1 <= '26.4')?'orange':(crisisInterventionJunContents.kpi1 > '26.4' && crisisInterventionJunContents.kpi1 < '33')?'yellow-7':(crisisInterventionJunContents.kpi1 >= '33' && crisisInterventionJunContents.kpi1 < '39.6')?'green':(crisisInterventionJunContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJunContents.kpi2 == null)?'grey-2':(crisisInterventionJunContents.kpi2 >= '0' && crisisInterventionJunContents.kpi2 <= '105')?'red':(crisisInterventionJunContents.kpi2 > '105' && crisisInterventionJunContents.kpi2 <= '140')?'orange':(crisisInterventionJunContents.kpi2 > '140' && crisisInterventionJunContents.kpi2 < '175')?'yellow-7':(crisisInterventionJunContents.kpi2 >= '175' && crisisInterventionJunContents.kpi2 < '210')?'green':(crisisInterventionJunContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJulContents.kpi1 == null)?'grey-2':(crisisInterventionJulContents.kpi1 >= '0' && crisisInterventionJulContents.kpi1 <= '19.8')?'red':(crisisInterventionJulContents.kpi1 > '19.8' && crisisInterventionJulContents.kpi1 <= '26.4')?'orange':(crisisInterventionJulContents.kpi1 > '26.4' && crisisInterventionJulContents.kpi1 < '33')?'yellow-7':(crisisInterventionJulContents.kpi1 >= '33' && crisisInterventionJulContents.kpi1 < '39.6')?'green':(crisisInterventionJulContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJulContents.kpi2 == null)?'grey-2':(crisisInterventionJulContents.kpi2 >= '0' && crisisInterventionJulContents.kpi2 <= '105')?'red':(crisisInterventionJulContents.kpi2 > '105' && crisisInterventionJulContents.kpi2 <= '140')?'orange':(crisisInterventionJulContents.kpi2 > '140' && crisisInterventionJulContents.kpi2 < '175')?'yellow-7':(crisisInterventionJulContents.kpi2 >= '175' && crisisInterventionJulContents.kpi2 < '210')?'green':(crisisInterventionJulContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAugContents.kpi1 == null)?'grey-2':(crisisInterventionAugContents.kpi1 >= '0' && crisisInterventionAugContents.kpi1 <= '19.8')?'red':(crisisInterventionAugContents.kpi1 > '19.8' && crisisInterventionAugContents.kpi1 <= '26.4')?'orange':(crisisInterventionAugContents.kpi1 > '26.4' && crisisInterventionAugContents.kpi1 < '33')?'yellow-7':(crisisInterventionAugContents.kpi1 >= '33' && crisisInterventionAugContents.kpi1 < '39.6')?'green':(crisisInterventionAugContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAugContents.kpi2 == null)?'grey-2':(crisisInterventionAugContents.kpi2 >= '0' && crisisInterventionAugContents.kpi2 <= '105')?'red':(crisisInterventionAugContents.kpi2 > '105' && crisisInterventionAugContents.kpi2 <= '140')?'orange':(crisisInterventionAugContents.kpi2 > '140' && crisisInterventionAugContents.kpi2 < '175')?'yellow-7':(crisisInterventionAugContents.kpi2 >= '175' && crisisInterventionAugContents.kpi2 < '210')?'green':(crisisInterventionAugContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionSepContents.kpi1 == null)?'grey-2':(crisisInterventionSepContents.kpi1 >= '0' && crisisInterventionSepContents.kpi1 <= '19.8')?'red':(crisisInterventionSepContents.kpi1 > '19.8' && crisisInterventionSepContents.kpi1 <= '26.4')?'orange':(crisisInterventionSepContents.kpi1 > '26.4' && crisisInterventionSepContents.kpi1 < '33')?'yellow-7':(crisisInterventionSepContents.kpi1 >= '33' && crisisInterventionSepContents.kpi1 < '39.6')?'green':(crisisInterventionSepContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionSepContents.kpi2 == null)?'grey-2':(crisisInterventionSepContents.kpi2 >= '0' && crisisInterventionSepContents.kpi2 <= '105')?'red':(crisisInterventionSepContents.kpi2 > '105' && crisisInterventionSepContents.kpi2 <= '140')?'orange':(crisisInterventionSepContents.kpi2 > '140' && crisisInterventionSepContents.kpi2 < '175')?'yellow-7':(crisisInterventionSepContents.kpi2 >= '175' && crisisInterventionSepContents.kpi2 < '210')?'green':(crisisInterventionSepContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionOctContents.kpi1 == null)?'grey-2':(crisisInterventionOctContents.kpi1 >= '0' && crisisInterventionOctContents.kpi1 <= '19.8')?'red':(crisisInterventionOctContents.kpi1 > '19.8' && crisisInterventionOctContents.kpi1 <= '26.4')?'orange':(crisisInterventionOctContents.kpi1 > '26.4' && crisisInterventionOctContents.kpi1 < '33')?'yellow-7':(crisisInterventionOctContents.kpi1 >= '33' && crisisInterventionOctContents.kpi1 < '39.6')?'green':(crisisInterventionOctContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionOctContents.kpi2 == null)?'grey-2':(crisisInterventionOctContents.kpi2 >= '0' && crisisInterventionOctContents.kpi2 <= '105')?'red':(crisisInterventionOctContents.kpi2 > '105' && crisisInterventionOctContents.kpi2 <= '140')?'orange':(crisisInterventionOctContents.kpi2 > '140' && crisisInterventionOctContents.kpi2 < '175')?'yellow-7':(crisisInterventionOctContents.kpi2 >= '175' && crisisInterventionOctContents.kpi2 < '210')?'green':(crisisInterventionOctContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionNovContents.kpi1 == null)?'grey-2':(crisisInterventionNovContents.kpi1 >= '0' && crisisInterventionNovContents.kpi1 <= '19.8')?'red':(crisisInterventionNovContents.kpi1 > '19.8' && crisisInterventionNovContents.kpi1 <= '26.4')?'orange':(crisisInterventionNovContents.kpi1 > '26.4' && crisisInterventionNovContents.kpi1 < '33')?'yellow-7':(crisisInterventionNovContents.kpi1 >= '33' && crisisInterventionNovContents.kpi1 < '39.6')?'green':(crisisInterventionNovContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionNovContents.kpi2 == null)?'grey-2':(crisisInterventionNovContents.kpi2 >= '0' && crisisInterventionNovContents.kpi2 <= '105')?'red':(crisisInterventionNovContents.kpi2 > '105' && crisisInterventionNovContents.kpi2 <= '140')?'orange':(crisisInterventionNovContents.kpi2 > '140' && crisisInterventionNovContents.kpi2 < '175')?'yellow-7':(crisisInterventionNovContents.kpi2 >= '175' && crisisInterventionNovContents.kpi2 < '210')?'green':(crisisInterventionNovContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionDecContents.kpi1 == null)?'grey-2':(crisisInterventionDecContents.kpi1 >= '0' && crisisInterventionDecContents.kpi1 <= '19.8')?'red':(crisisInterventionDecContents.kpi1 > '19.8' && crisisInterventionDecContents.kpi1 <= '26.4')?'orange':(crisisInterventionDecContents.kpi1 > '26.4' && crisisInterventionDecContents.kpi1 < '33')?'yellow-7':(crisisInterventionDecContents.kpi1 >= '33' && crisisInterventionDecContents.kpi1 < '39.6')?'green':(crisisInterventionDecContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionDecContents.kpi2 == null)?'grey-2':(crisisInterventionDecContents.kpi2 >= '0' && crisisInterventionDecContents.kpi2 <= '105')?'red':(crisisInterventionDecContents.kpi2 > '105' && crisisInterventionDecContents.kpi2 <= '140')?'orange':(crisisInterventionDecContents.kpi2 > '140' && crisisInterventionDecContents.kpi2 < '175')?'yellow-7':(crisisInterventionDecContents.kpi2 >= '175' && crisisInterventionDecContents.kpi2 < '210')?'green':(crisisInterventionDecContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                                <q-tooltip># of people using the services</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJanContents.kpi1 == null)?'grey-2':(crisisInterventionJanContents.kpi1 >= '0' && crisisInterventionJanContents.kpi1 <= '19.8')?'red':(crisisInterventionJanContents.kpi1 > '19.8' && crisisInterventionJanContents.kpi1 <= '26.4')?'orange':(crisisInterventionJanContents.kpi1 > '26.4' && crisisInterventionJanContents.kpi1 < '33')?'yellow-7':(crisisInterventionJanContents.kpi1 >= '33' && crisisInterventionJanContents.kpi1 < '39.6')?'green':(crisisInterventionJanContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJanContents.kpi2 == null)?'grey-2':(crisisInterventionJanContents.kpi2 >= '0' && crisisInterventionJanContents.kpi2 <= '105')?'red':(crisisInterventionJanContents.kpi2 > '105' && crisisInterventionJanContents.kpi2 <= '140')?'orange':(crisisInterventionJanContents.kpi2 > '140' && crisisInterventionJanContents.kpi2 < '175')?'yellow-7':(crisisInterventionJanContents.kpi2 >= '175' && crisisInterventionJanContents.kpi2 < '210')?'green':(crisisInterventionJanContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionFebContents.kpi1 == null)?'grey-2':(crisisInterventionFebContents.kpi1 >= '0' && crisisInterventionFebContents.kpi1 <= '19.8')?'red':(crisisInterventionFebContents.kpi1 > '19.8' && crisisInterventionFebContents.kpi1 <= '26.4')?'orange':(crisisInterventionFebContents.kpi1 > '26.4' && crisisInterventionFebContents.kpi1 < '33')?'yellow-7':(crisisInterventionFebContents.kpi1 >= '33' && crisisInterventionFebContents.kpi1 < '39.6')?'green':(crisisInterventionFebContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionFebContents.kpi2 == null)?'grey-2':(crisisInterventionFebContents.kpi2 >= '0' && crisisInterventionFebContents.kpi2 <= '105')?'red':(crisisInterventionFebContents.kpi2 > '105' && crisisInterventionFebContents.kpi2 <= '140')?'orange':(crisisInterventionFebContents.kpi2 > '140' && crisisInterventionFebContents.kpi2 < '175')?'yellow-7':(crisisInterventionFebContents.kpi2 >= '175' && crisisInterventionFebContents.kpi2 < '210')?'green':(crisisInterventionFebContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMarContents.kpi1 == null)?'grey-2':(crisisInterventionMarContents.kpi1 >= '0' && crisisInterventionMarContents.kpi1 <= '19.8')?'red':(crisisInterventionMarContents.kpi1 > '19.8' && crisisInterventionMarContents.kpi1 <= '26.4')?'orange':(crisisInterventionMarContents.kpi1 > '26.4' && crisisInterventionMarContents.kpi1 < '33')?'yellow-7':(crisisInterventionMarContents.kpi1 >= '33' && crisisInterventionMarContents.kpi1 < '39.6')?'green':(crisisInterventionMarContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMarContents.kpi2 == null)?'grey-2':(crisisInterventionMarContents.kpi2 >= '0' && crisisInterventionMarContents.kpi2 <= '105')?'red':(crisisInterventionMarContents.kpi2 > '105' && crisisInterventionMarContents.kpi2 <= '140')?'orange':(crisisInterventionMarContents.kpi2 > '140' && crisisInterventionMarContents.kpi2 < '175')?'yellow-7':(crisisInterventionMarContents.kpi2 >= '175' && crisisInterventionMarContents.kpi2 < '210')?'green':(crisisInterventionMarContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAprContents.kpi1 == null)?'grey-2':(crisisInterventionAprContents.kpi1 >= '0' && crisisInterventionAprContents.kpi1 <= '19.8')?'red':(crisisInterventionAprContents.kpi1 > '19.8' && crisisInterventionAprContents.kpi1 <= '26.4')?'orange':(crisisInterventionAprContents.kpi1 > '26.4' && crisisInterventionAprContents.kpi1 < '33')?'yellow-7':(crisisInterventionAprContents.kpi1 >= '33' && crisisInterventionAprContents.kpi1 < '39.6')?'green':(crisisInterventionAprContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAprContents.kpi2 == null)?'grey-2':(crisisInterventionAprContents.kpi2 >= '0' && crisisInterventionAprContents.kpi2 <= '105')?'red':(crisisInterventionAprContents.kpi2 > '105' && crisisInterventionAprContents.kpi2 <= '140')?'orange':(crisisInterventionAprContents.kpi2 > '140' && crisisInterventionAprContents.kpi2 < '175')?'yellow-7':(crisisInterventionAprContents.kpi2 >= '175' && crisisInterventionAprContents.kpi2 < '210')?'green':(crisisInterventionAprContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMayContents.kpi1 == null)?'grey-2':(crisisInterventionMayContents.kpi1 >= '0' && crisisInterventionMayContents.kpi1 <= '19.8')?'red':(crisisInterventionMayContents.kpi1 > '19.8' && crisisInterventionMayContents.kpi1 <= '26.4')?'orange':(crisisInterventionMayContents.kpi1 > '26.4' && crisisInterventionMayContents.kpi1 < '33')?'yellow-7':(crisisInterventionMayContents.kpi1 >= '33' && crisisInterventionMayContents.kpi1 < '39.6')?'green':(crisisInterventionMayContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMayContents.kpi2 == null)?'grey-2':(crisisInterventionMayContents.kpi2 >= '0' && crisisInterventionMayContents.kpi2 <= '105')?'red':(crisisInterventionMayContents.kpi2 > '105' && crisisInterventionMayContents.kpi2 <= '140')?'orange':(crisisInterventionMayContents.kpi2 > '140' && crisisInterventionMayContents.kpi2 < '175')?'yellow-7':(crisisInterventionMayContents.kpi2 >= '175' && crisisInterventionMayContents.kpi2 < '210')?'green':(crisisInterventionMayContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJunContents.kpi1 == null)?'grey-2':(crisisInterventionJunContents.kpi1 >= '0' && crisisInterventionJunContents.kpi1 <= '19.8')?'red':(crisisInterventionJunContents.kpi1 > '19.8' && crisisInterventionJunContents.kpi1 <= '26.4')?'orange':(crisisInterventionJunContents.kpi1 > '26.4' && crisisInterventionJunContents.kpi1 < '33')?'yellow-7':(crisisInterventionJunContents.kpi1 >= '33' && crisisInterventionJunContents.kpi1 < '39.6')?'green':(crisisInterventionJunContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJunContents.kpi2 == null)?'grey-2':(crisisInterventionJunContents.kpi2 >= '0' && crisisInterventionJunContents.kpi2 <= '105')?'red':(crisisInterventionJunContents.kpi2 > '105' && crisisInterventionJunContents.kpi2 <= '140')?'orange':(crisisInterventionJunContents.kpi2 > '140' && crisisInterventionJunContents.kpi2 < '175')?'yellow-7':(crisisInterventionJunContents.kpi2 >= '175' && crisisInterventionJunContents.kpi2 < '210')?'green':(crisisInterventionJunContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJulContents.kpi1 == null)?'grey-2':(crisisInterventionJulContents.kpi1 >= '0' && crisisInterventionJulContents.kpi1 <= '19.8')?'red':(crisisInterventionJulContents.kpi1 > '19.8' && crisisInterventionJulContents.kpi1 <= '26.4')?'orange':(crisisInterventionJulContents.kpi1 > '26.4' && crisisInterventionJulContents.kpi1 < '33')?'yellow-7':(crisisInterventionJulContents.kpi1 >= '33' && crisisInterventionJulContents.kpi1 < '39.6')?'green':(crisisInterventionJulContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJulContents.kpi2 == null)?'grey-2':(crisisInterventionJulContents.kpi2 >= '0' && crisisInterventionJulContents.kpi2 <= '105')?'red':(crisisInterventionJulContents.kpi2 > '105' && crisisInterventionJulContents.kpi2 <= '140')?'orange':(crisisInterventionJulContents.kpi2 > '140' && crisisInterventionJulContents.kpi2 < '175')?'yellow-7':(crisisInterventionJulContents.kpi2 >= '175' && crisisInterventionJulContents.kpi2 < '210')?'green':(crisisInterventionJulContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAugContents.kpi1 == null)?'grey-2':(crisisInterventionAugContents.kpi1 >= '0' && crisisInterventionAugContents.kpi1 <= '19.8')?'red':(crisisInterventionAugContents.kpi1 > '19.8' && crisisInterventionAugContents.kpi1 <= '26.4')?'orange':(crisisInterventionAugContents.kpi1 > '26.4' && crisisInterventionAugContents.kpi1 < '33')?'yellow-7':(crisisInterventionAugContents.kpi1 >= '33' && crisisInterventionAugContents.kpi1 < '39.6')?'green':(crisisInterventionAugContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAugContents.kpi2 == null)?'grey-2':(crisisInterventionAugContents.kpi2 >= '0' && crisisInterventionAugContents.kpi2 <= '105')?'red':(crisisInterventionAugContents.kpi2 > '105' && crisisInterventionAugContents.kpi2 <= '140')?'orange':(crisisInterventionAugContents.kpi2 > '140' && crisisInterventionAugContents.kpi2 < '175')?'yellow-7':(crisisInterventionAugContents.kpi2 >= '175' && crisisInterventionAugContents.kpi2 < '210')?'green':(crisisInterventionAugContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionSepContents.kpi1 == null)?'grey-2':(crisisInterventionSepContents.kpi1 >= '0' && crisisInterventionSepContents.kpi1 <= '19.8')?'red':(crisisInterventionSepContents.kpi1 > '19.8' && crisisInterventionSepContents.kpi1 <= '26.4')?'orange':(crisisInterventionSepContents.kpi1 > '26.4' && crisisInterventionSepContents.kpi1 < '33')?'yellow-7':(crisisInterventionSepContents.kpi1 >= '33' && crisisInterventionSepContents.kpi1 < '39.6')?'green':(crisisInterventionSepContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionSepContents.kpi2 == null)?'grey-2':(crisisInterventionSepContents.kpi2 >= '0' && crisisInterventionSepContents.kpi2 <= '105')?'red':(crisisInterventionSepContents.kpi2 > '105' && crisisInterventionSepContents.kpi2 <= '140')?'orange':(crisisInterventionSepContents.kpi2 > '140' && crisisInterventionSepContents.kpi2 < '175')?'yellow-7':(crisisInterventionSepContents.kpi2 >= '175' && crisisInterventionSepContents.kpi2 < '210')?'green':(crisisInterventionSepContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionOctContents.kpi1 == null)?'grey-2':(crisisInterventionOctContents.kpi1 >= '0' && crisisInterventionOctContents.kpi1 <= '19.8')?'red':(crisisInterventionOctContents.kpi1 > '19.8' && crisisInterventionOctContents.kpi1 <= '26.4')?'orange':(crisisInterventionOctContents.kpi1 > '26.4' && crisisInterventionOctContents.kpi1 < '33')?'yellow-7':(crisisInterventionOctContents.kpi1 >= '33' && crisisInterventionOctContents.kpi1 < '39.6')?'green':(crisisInterventionOctContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionOctContents.kpi2 == null)?'grey-2':(crisisInterventionOctContents.kpi2 >= '0' && crisisInterventionOctContents.kpi2 <= '105')?'red':(crisisInterventionOctContents.kpi2 > '105' && crisisInterventionOctContents.kpi2 <= '140')?'orange':(crisisInterventionOctContents.kpi2 > '140' && crisisInterventionOctContents.kpi2 < '175')?'yellow-7':(crisisInterventionOctContents.kpi2 >= '175' && crisisInterventionOctContents.kpi2 < '210')?'green':(crisisInterventionOctContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionNovContents.kpi1 == null)?'grey-2':(crisisInterventionNovContents.kpi1 >= '0' && crisisInterventionNovContents.kpi1 <= '19.8')?'red':(crisisInterventionNovContents.kpi1 > '19.8' && crisisInterventionNovContents.kpi1 <= '26.4')?'orange':(crisisInterventionNovContents.kpi1 > '26.4' && crisisInterventionNovContents.kpi1 < '33')?'yellow-7':(crisisInterventionNovContents.kpi1 >= '33' && crisisInterventionNovContents.kpi1 < '39.6')?'green':(crisisInterventionNovContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionNovContents.kpi2 == null)?'grey-2':(crisisInterventionNovContents.kpi2 >= '0' && crisisInterventionNovContents.kpi2 <= '105')?'red':(crisisInterventionNovContents.kpi2 > '105' && crisisInterventionNovContents.kpi2 <= '140')?'orange':(crisisInterventionNovContents.kpi2 > '140' && crisisInterventionNovContents.kpi2 < '175')?'yellow-7':(crisisInterventionNovContents.kpi2 >= '175' && crisisInterventionNovContents.kpi2 < '210')?'green':(crisisInterventionNovContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionDecContents.kpi1 == null)?'grey-2':(crisisInterventionDecContents.kpi1 >= '0' && crisisInterventionDecContents.kpi1 <= '19.8')?'red':(crisisInterventionDecContents.kpi1 > '19.8' && crisisInterventionDecContents.kpi1 <= '26.4')?'orange':(crisisInterventionDecContents.kpi1 > '26.4' && crisisInterventionDecContents.kpi1 < '33')?'yellow-7':(crisisInterventionDecContents.kpi1 >= '33' && crisisInterventionDecContents.kpi1 < '39.6')?'green':(crisisInterventionDecContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionDecContents.kpi2 == null)?'grey-2':(crisisInterventionDecContents.kpi2 >= '0' && crisisInterventionDecContents.kpi2 <= '105')?'red':(crisisInterventionDecContents.kpi2 > '105' && crisisInterventionDecContents.kpi2 <= '140')?'orange':(crisisInterventionDecContents.kpi2 > '140' && crisisInterventionDecContents.kpi2 < '175')?'yellow-7':(crisisInterventionDecContents.kpi2 >= '175' && crisisInterventionDecContents.kpi2 < '210')?'green':(crisisInterventionDecContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                                <q-tooltip># of people using the services</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJanContents.kpi1 == null)?'grey-2':(crisisInterventionJanContents.kpi1 >= '0' && crisisInterventionJanContents.kpi1 <= '19.8')?'red':(crisisInterventionJanContents.kpi1 > '19.8' && crisisInterventionJanContents.kpi1 <= '26.4')?'orange':(crisisInterventionJanContents.kpi1 > '26.4' && crisisInterventionJanContents.kpi1 < '33')?'yellow-7':(crisisInterventionJanContents.kpi1 >= '33' && crisisInterventionJanContents.kpi1 < '39.6')?'green':(crisisInterventionJanContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJanContents.kpi2 == null)?'grey-2':(crisisInterventionJanContents.kpi2 >= '0' && crisisInterventionJanContents.kpi2 <= '105')?'red':(crisisInterventionJanContents.kpi2 > '105' && crisisInterventionJanContents.kpi2 <= '140')?'orange':(crisisInterventionJanContents.kpi2 > '140' && crisisInterventionJanContents.kpi2 < '175')?'yellow-7':(crisisInterventionJanContents.kpi2 >= '175' && crisisInterventionJanContents.kpi2 < '210')?'green':(crisisInterventionJanContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionFebContents.kpi1 == null)?'grey-2':(crisisInterventionFebContents.kpi1 >= '0' && crisisInterventionFebContents.kpi1 <= '19.8')?'red':(crisisInterventionFebContents.kpi1 > '19.8' && crisisInterventionFebContents.kpi1 <= '26.4')?'orange':(crisisInterventionFebContents.kpi1 > '26.4' && crisisInterventionFebContents.kpi1 < '33')?'yellow-7':(crisisInterventionFebContents.kpi1 >= '33' && crisisInterventionFebContents.kpi1 < '39.6')?'green':(crisisInterventionFebContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionFebContents.kpi2 == null)?'grey-2':(crisisInterventionFebContents.kpi2 >= '0' && crisisInterventionFebContents.kpi2 <= '105')?'red':(crisisInterventionFebContents.kpi2 > '105' && crisisInterventionFebContents.kpi2 <= '140')?'orange':(crisisInterventionFebContents.kpi2 > '140' && crisisInterventionFebContents.kpi2 < '175')?'yellow-7':(crisisInterventionFebContents.kpi2 >= '175' && crisisInterventionFebContents.kpi2 < '210')?'green':(crisisInterventionFebContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMarContents.kpi1 == null)?'grey-2':(crisisInterventionMarContents.kpi1 >= '0' && crisisInterventionMarContents.kpi1 <= '19.8')?'red':(crisisInterventionMarContents.kpi1 > '19.8' && crisisInterventionMarContents.kpi1 <= '26.4')?'orange':(crisisInterventionMarContents.kpi1 > '26.4' && crisisInterventionMarContents.kpi1 < '33')?'yellow-7':(crisisInterventionMarContents.kpi1 >= '33' && crisisInterventionMarContents.kpi1 < '39.6')?'green':(crisisInterventionMarContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMarContents.kpi2 == null)?'grey-2':(crisisInterventionMarContents.kpi2 >= '0' && crisisInterventionMarContents.kpi2 <= '105')?'red':(crisisInterventionMarContents.kpi2 > '105' && crisisInterventionMarContents.kpi2 <= '140')?'orange':(crisisInterventionMarContents.kpi2 > '140' && crisisInterventionMarContents.kpi2 < '175')?'yellow-7':(crisisInterventionMarContents.kpi2 >= '175' && crisisInterventionMarContents.kpi2 < '210')?'green':(crisisInterventionMarContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAprContents.kpi1 == null)?'grey-2':(crisisInterventionAprContents.kpi1 >= '0' && crisisInterventionAprContents.kpi1 <= '19.8')?'red':(crisisInterventionAprContents.kpi1 > '19.8' && crisisInterventionAprContents.kpi1 <= '26.4')?'orange':(crisisInterventionAprContents.kpi1 > '26.4' && crisisInterventionAprContents.kpi1 < '33')?'yellow-7':(crisisInterventionAprContents.kpi1 >= '33' && crisisInterventionAprContents.kpi1 < '39.6')?'green':(crisisInterventionAprContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAprContents.kpi2 == null)?'grey-2':(crisisInterventionAprContents.kpi2 >= '0' && crisisInterventionAprContents.kpi2 <= '105')?'red':(crisisInterventionAprContents.kpi2 > '105' && crisisInterventionAprContents.kpi2 <= '140')?'orange':(crisisInterventionAprContents.kpi2 > '140' && crisisInterventionAprContents.kpi2 < '175')?'yellow-7':(crisisInterventionAprContents.kpi2 >= '175' && crisisInterventionAprContents.kpi2 < '210')?'green':(crisisInterventionAprContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMayContents.kpi1 == null)?'grey-2':(crisisInterventionMayContents.kpi1 >= '0' && crisisInterventionMayContents.kpi1 <= '19.8')?'red':(crisisInterventionMayContents.kpi1 > '19.8' && crisisInterventionMayContents.kpi1 <= '26.4')?'orange':(crisisInterventionMayContents.kpi1 > '26.4' && crisisInterventionMayContents.kpi1 < '33')?'yellow-7':(crisisInterventionMayContents.kpi1 >= '33' && crisisInterventionMayContents.kpi1 < '39.6')?'green':(crisisInterventionMayContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMayContents.kpi2 == null)?'grey-2':(crisisInterventionMayContents.kpi2 >= '0' && crisisInterventionMayContents.kpi2 <= '105')?'red':(crisisInterventionMayContents.kpi2 > '105' && crisisInterventionMayContents.kpi2 <= '140')?'orange':(crisisInterventionMayContents.kpi2 > '140' && crisisInterventionMayContents.kpi2 < '175')?'yellow-7':(crisisInterventionMayContents.kpi2 >= '175' && crisisInterventionMayContents.kpi2 < '210')?'green':(crisisInterventionMayContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJunContents.kpi1 == null)?'grey-2':(crisisInterventionJunContents.kpi1 >= '0' && crisisInterventionJunContents.kpi1 <= '19.8')?'red':(crisisInterventionJunContents.kpi1 > '19.8' && crisisInterventionJunContents.kpi1 <= '26.4')?'orange':(crisisInterventionJunContents.kpi1 > '26.4' && crisisInterventionJunContents.kpi1 < '33')?'yellow-7':(crisisInterventionJunContents.kpi1 >= '33' && crisisInterventionJunContents.kpi1 < '39.6')?'green':(crisisInterventionJunContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJunContents.kpi2 == null)?'grey-2':(crisisInterventionJunContents.kpi2 >= '0' && crisisInterventionJunContents.kpi2 <= '105')?'red':(crisisInterventionJunContents.kpi2 > '105' && crisisInterventionJunContents.kpi2 <= '140')?'orange':(crisisInterventionJunContents.kpi2 > '140' && crisisInterventionJunContents.kpi2 < '175')?'yellow-7':(crisisInterventionJunContents.kpi2 >= '175' && crisisInterventionJunContents.kpi2 < '210')?'green':(crisisInterventionJunContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJulContents.kpi1 == null)?'grey-2':(crisisInterventionJulContents.kpi1 >= '0' && crisisInterventionJulContents.kpi1 <= '19.8')?'red':(crisisInterventionJulContents.kpi1 > '19.8' && crisisInterventionJulContents.kpi1 <= '26.4')?'orange':(crisisInterventionJulContents.kpi1 > '26.4' && crisisInterventionJulContents.kpi1 < '33')?'yellow-7':(crisisInterventionJulContents.kpi1 >= '33' && crisisInterventionJulContents.kpi1 < '39.6')?'green':(crisisInterventionJulContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJulContents.kpi2 == null)?'grey-2':(crisisInterventionJulContents.kpi2 >= '0' && crisisInterventionJulContents.kpi2 <= '105')?'red':(crisisInterventionJulContents.kpi2 > '105' && crisisInterventionJulContents.kpi2 <= '140')?'orange':(crisisInterventionJulContents.kpi2 > '140' && crisisInterventionJulContents.kpi2 < '175')?'yellow-7':(crisisInterventionJulContents.kpi2 >= '175' && crisisInterventionJulContents.kpi2 < '210')?'green':(crisisInterventionJulContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAugContents.kpi1 == null)?'grey-2':(crisisInterventionAugContents.kpi1 >= '0' && crisisInterventionAugContents.kpi1 <= '19.8')?'red':(crisisInterventionAugContents.kpi1 > '19.8' && crisisInterventionAugContents.kpi1 <= '26.4')?'orange':(crisisInterventionAugContents.kpi1 > '26.4' && crisisInterventionAugContents.kpi1 < '33')?'yellow-7':(crisisInterventionAugContents.kpi1 >= '33' && crisisInterventionAugContents.kpi1 < '39.6')?'green':(crisisInterventionAugContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAugContents.kpi2 == null)?'grey-2':(crisisInterventionAugContents.kpi2 >= '0' && crisisInterventionAugContents.kpi2 <= '105')?'red':(crisisInterventionAugContents.kpi2 > '105' && crisisInterventionAugContents.kpi2 <= '140')?'orange':(crisisInterventionAugContents.kpi2 > '140' && crisisInterventionAugContents.kpi2 < '175')?'yellow-7':(crisisInterventionAugContents.kpi2 >= '175' && crisisInterventionAugContents.kpi2 < '210')?'green':(crisisInterventionAugContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionSepContents.kpi1 == null)?'grey-2':(crisisInterventionSepContents.kpi1 >= '0' && crisisInterventionSepContents.kpi1 <= '19.8')?'red':(crisisInterventionSepContents.kpi1 > '19.8' && crisisInterventionSepContents.kpi1 <= '26.4')?'orange':(crisisInterventionSepContents.kpi1 > '26.4' && crisisInterventionSepContents.kpi1 < '33')?'yellow-7':(crisisInterventionSepContents.kpi1 >= '33' && crisisInterventionSepContents.kpi1 < '39.6')?'green':(crisisInterventionSepContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionSepContents.kpi2 == null)?'grey-2':(crisisInterventionSepContents.kpi2 >= '0' && crisisInterventionSepContents.kpi2 <= '105')?'red':(crisisInterventionSepContents.kpi2 > '105' && crisisInterventionSepContents.kpi2 <= '140')?'orange':(crisisInterventionSepContents.kpi2 > '140' && crisisInterventionSepContents.kpi2 < '175')?'yellow-7':(crisisInterventionSepContents.kpi2 >= '175' && crisisInterventionSepContents.kpi2 < '210')?'green':(crisisInterventionSepContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionOctContents.kpi1 == null)?'grey-2':(crisisInterventionOctContents.kpi1 >= '0' && crisisInterventionOctContents.kpi1 <= '19.8')?'red':(crisisInterventionOctContents.kpi1 > '19.8' && crisisInterventionOctContents.kpi1 <= '26.4')?'orange':(crisisInterventionOctContents.kpi1 > '26.4' && crisisInterventionOctContents.kpi1 < '33')?'yellow-7':(crisisInterventionOctContents.kpi1 >= '33' && crisisInterventionOctContents.kpi1 < '39.6')?'green':(crisisInterventionOctContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionOctContents.kpi2 == null)?'grey-2':(crisisInterventionOctContents.kpi2 >= '0' && crisisInterventionOctContents.kpi2 <= '105')?'red':(crisisInterventionOctContents.kpi2 > '105' && crisisInterventionOctContents.kpi2 <= '140')?'orange':(crisisInterventionOctContents.kpi2 > '140' && crisisInterventionOctContents.kpi2 < '175')?'yellow-7':(crisisInterventionOctContents.kpi2 >= '175' && crisisInterventionOctContents.kpi2 < '210')?'green':(crisisInterventionOctContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionNovContents.kpi1 == null)?'grey-2':(crisisInterventionNovContents.kpi1 >= '0' && crisisInterventionNovContents.kpi1 <= '19.8')?'red':(crisisInterventionNovContents.kpi1 > '19.8' && crisisInterventionNovContents.kpi1 <= '26.4')?'orange':(crisisInterventionNovContents.kpi1 > '26.4' && crisisInterventionNovContents.kpi1 < '33')?'yellow-7':(crisisInterventionNovContents.kpi1 >= '33' && crisisInterventionNovContents.kpi1 < '39.6')?'green':(crisisInterventionNovContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionNovContents.kpi2 == null)?'grey-2':(crisisInterventionNovContents.kpi2 >= '0' && crisisInterventionNovContents.kpi2 <= '105')?'red':(crisisInterventionNovContents.kpi2 > '105' && crisisInterventionNovContents.kpi2 <= '140')?'orange':(crisisInterventionNovContents.kpi2 > '140' && crisisInterventionNovContents.kpi2 < '175')?'yellow-7':(crisisInterventionNovContents.kpi2 >= '175' && crisisInterventionNovContents.kpi2 < '210')?'green':(crisisInterventionNovContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionDecContents.kpi1 == null)?'grey-2':(crisisInterventionDecContents.kpi1 >= '0' && crisisInterventionDecContents.kpi1 <= '19.8')?'red':(crisisInterventionDecContents.kpi1 > '19.8' && crisisInterventionDecContents.kpi1 <= '26.4')?'orange':(crisisInterventionDecContents.kpi1 > '26.4' && crisisInterventionDecContents.kpi1 < '33')?'yellow-7':(crisisInterventionDecContents.kpi1 >= '33' && crisisInterventionDecContents.kpi1 < '39.6')?'green':(crisisInterventionDecContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionDecContents.kpi2 == null)?'grey-2':(crisisInterventionDecContents.kpi2 >= '0' && crisisInterventionDecContents.kpi2 <= '105')?'red':(crisisInterventionDecContents.kpi2 > '105' && crisisInterventionDecContents.kpi2 <= '140')?'orange':(crisisInterventionDecContents.kpi2 > '140' && crisisInterventionDecContents.kpi2 < '175')?'yellow-7':(crisisInterventionDecContents.kpi2 >= '175' && crisisInterventionDecContents.kpi2 < '210')?'green':(crisisInterventionDecContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                                <q-tooltip># of people using the services</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJanContents.kpi1 == null)?'grey-2':(crisisInterventionJanContents.kpi1 >= '0' && crisisInterventionJanContents.kpi1 <= '19.8')?'red':(crisisInterventionJanContents.kpi1 > '19.8' && crisisInterventionJanContents.kpi1 <= '26.4')?'orange':(crisisInterventionJanContents.kpi1 > '26.4' && crisisInterventionJanContents.kpi1 < '33')?'yellow-7':(crisisInterventionJanContents.kpi1 >= '33' && crisisInterventionJanContents.kpi1 < '39.6')?'green':(crisisInterventionJanContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJanContents.kpi2 == null)?'grey-2':(crisisInterventionJanContents.kpi2 >= '0' && crisisInterventionJanContents.kpi2 <= '105')?'red':(crisisInterventionJanContents.kpi2 > '105' && crisisInterventionJanContents.kpi2 <= '140')?'orange':(crisisInterventionJanContents.kpi2 > '140' && crisisInterventionJanContents.kpi2 < '175')?'yellow-7':(crisisInterventionJanContents.kpi2 >= '175' && crisisInterventionJanContents.kpi2 < '210')?'green':(crisisInterventionJanContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionFebContents.kpi1 == null)?'grey-2':(crisisInterventionFebContents.kpi1 >= '0' && crisisInterventionFebContents.kpi1 <= '19.8')?'red':(crisisInterventionFebContents.kpi1 > '19.8' && crisisInterventionFebContents.kpi1 <= '26.4')?'orange':(crisisInterventionFebContents.kpi1 > '26.4' && crisisInterventionFebContents.kpi1 < '33')?'yellow-7':(crisisInterventionFebContents.kpi1 >= '33' && crisisInterventionFebContents.kpi1 < '39.6')?'green':(crisisInterventionFebContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionFebContents.kpi2 == null)?'grey-2':(crisisInterventionFebContents.kpi2 >= '0' && crisisInterventionFebContents.kpi2 <= '105')?'red':(crisisInterventionFebContents.kpi2 > '105' && crisisInterventionFebContents.kpi2 <= '140')?'orange':(crisisInterventionFebContents.kpi2 > '140' && crisisInterventionFebContents.kpi2 < '175')?'yellow-7':(crisisInterventionFebContents.kpi2 >= '175' && crisisInterventionFebContents.kpi2 < '210')?'green':(crisisInterventionFebContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMarContents.kpi1 == null)?'grey-2':(crisisInterventionMarContents.kpi1 >= '0' && crisisInterventionMarContents.kpi1 <= '19.8')?'red':(crisisInterventionMarContents.kpi1 > '19.8' && crisisInterventionMarContents.kpi1 <= '26.4')?'orange':(crisisInterventionMarContents.kpi1 > '26.4' && crisisInterventionMarContents.kpi1 < '33')?'yellow-7':(crisisInterventionMarContents.kpi1 >= '33' && crisisInterventionMarContents.kpi1 < '39.6')?'green':(crisisInterventionMarContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMarContents.kpi2 == null)?'grey-2':(crisisInterventionMarContents.kpi2 >= '0' && crisisInterventionMarContents.kpi2 <= '105')?'red':(crisisInterventionMarContents.kpi2 > '105' && crisisInterventionMarContents.kpi2 <= '140')?'orange':(crisisInterventionMarContents.kpi2 > '140' && crisisInterventionMarContents.kpi2 < '175')?'yellow-7':(crisisInterventionMarContents.kpi2 >= '175' && crisisInterventionMarContents.kpi2 < '210')?'green':(crisisInterventionMarContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAprContents.kpi1 == null)?'grey-2':(crisisInterventionAprContents.kpi1 >= '0' && crisisInterventionAprContents.kpi1 <= '19.8')?'red':(crisisInterventionAprContents.kpi1 > '19.8' && crisisInterventionAprContents.kpi1 <= '26.4')?'orange':(crisisInterventionAprContents.kpi1 > '26.4' && crisisInterventionAprContents.kpi1 < '33')?'yellow-7':(crisisInterventionAprContents.kpi1 >= '33' && crisisInterventionAprContents.kpi1 < '39.6')?'green':(crisisInterventionAprContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAprContents.kpi2 == null)?'grey-2':(crisisInterventionAprContents.kpi2 >= '0' && crisisInterventionAprContents.kpi2 <= '105')?'red':(crisisInterventionAprContents.kpi2 > '105' && crisisInterventionAprContents.kpi2 <= '140')?'orange':(crisisInterventionAprContents.kpi2 > '140' && crisisInterventionAprContents.kpi2 < '175')?'yellow-7':(crisisInterventionAprContents.kpi2 >= '175' && crisisInterventionAprContents.kpi2 < '210')?'green':(crisisInterventionAprContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMayContents.kpi1 == null)?'grey-2':(crisisInterventionMayContents.kpi1 >= '0' && crisisInterventionMayContents.kpi1 <= '19.8')?'red':(crisisInterventionMayContents.kpi1 > '19.8' && crisisInterventionMayContents.kpi1 <= '26.4')?'orange':(crisisInterventionMayContents.kpi1 > '26.4' && crisisInterventionMayContents.kpi1 < '33')?'yellow-7':(crisisInterventionMayContents.kpi1 >= '33' && crisisInterventionMayContents.kpi1 < '39.6')?'green':(crisisInterventionMayContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMayContents.kpi2 == null)?'grey-2':(crisisInterventionMayContents.kpi2 >= '0' && crisisInterventionMayContents.kpi2 <= '105')?'red':(crisisInterventionMayContents.kpi2 > '105' && crisisInterventionMayContents.kpi2 <= '140')?'orange':(crisisInterventionMayContents.kpi2 > '140' && crisisInterventionMayContents.kpi2 < '175')?'yellow-7':(crisisInterventionMayContents.kpi2 >= '175' && crisisInterventionMayContents.kpi2 < '210')?'green':(crisisInterventionMayContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJunContents.kpi1 == null)?'grey-2':(crisisInterventionJunContents.kpi1 >= '0' && crisisInterventionJunContents.kpi1 <= '19.8')?'red':(crisisInterventionJunContents.kpi1 > '19.8' && crisisInterventionJunContents.kpi1 <= '26.4')?'orange':(crisisInterventionJunContents.kpi1 > '26.4' && crisisInterventionJunContents.kpi1 < '33')?'yellow-7':(crisisInterventionJunContents.kpi1 >= '33' && crisisInterventionJunContents.kpi1 < '39.6')?'green':(crisisInterventionJunContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJunContents.kpi2 == null)?'grey-2':(crisisInterventionJunContents.kpi2 >= '0' && crisisInterventionJunContents.kpi2 <= '105')?'red':(crisisInterventionJunContents.kpi2 > '105' && crisisInterventionJunContents.kpi2 <= '140')?'orange':(crisisInterventionJunContents.kpi2 > '140' && crisisInterventionJunContents.kpi2 < '175')?'yellow-7':(crisisInterventionJunContents.kpi2 >= '175' && crisisInterventionJunContents.kpi2 < '210')?'green':(crisisInterventionJunContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJulContents.kpi1 == null)?'grey-2':(crisisInterventionJulContents.kpi1 >= '0' && crisisInterventionJulContents.kpi1 <= '19.8')?'red':(crisisInterventionJulContents.kpi1 > '19.8' && crisisInterventionJulContents.kpi1 <= '26.4')?'orange':(crisisInterventionJulContents.kpi1 > '26.4' && crisisInterventionJulContents.kpi1 < '33')?'yellow-7':(crisisInterventionJulContents.kpi1 >= '33' && crisisInterventionJulContents.kpi1 < '39.6')?'green':(crisisInterventionJulContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJulContents.kpi2 == null)?'grey-2':(crisisInterventionJulContents.kpi2 >= '0' && crisisInterventionJulContents.kpi2 <= '105')?'red':(crisisInterventionJulContents.kpi2 > '105' && crisisInterventionJulContents.kpi2 <= '140')?'orange':(crisisInterventionJulContents.kpi2 > '140' && crisisInterventionJulContents.kpi2 < '175')?'yellow-7':(crisisInterventionJulContents.kpi2 >= '175' && crisisInterventionJulContents.kpi2 < '210')?'green':(crisisInterventionJulContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAugContents.kpi1 == null)?'grey-2':(crisisInterventionAugContents.kpi1 >= '0' && crisisInterventionAugContents.kpi1 <= '19.8')?'red':(crisisInterventionAugContents.kpi1 > '19.8' && crisisInterventionAugContents.kpi1 <= '26.4')?'orange':(crisisInterventionAugContents.kpi1 > '26.4' && crisisInterventionAugContents.kpi1 < '33')?'yellow-7':(crisisInterventionAugContents.kpi1 >= '33' && crisisInterventionAugContents.kpi1 < '39.6')?'green':(crisisInterventionAugContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAugContents.kpi2 == null)?'grey-2':(crisisInterventionAugContents.kpi2 >= '0' && crisisInterventionAugContents.kpi2 <= '105')?'red':(crisisInterventionAugContents.kpi2 > '105' && crisisInterventionAugContents.kpi2 <= '140')?'orange':(crisisInterventionAugContents.kpi2 > '140' && crisisInterventionAugContents.kpi2 < '175')?'yellow-7':(crisisInterventionAugContents.kpi2 >= '175' && crisisInterventionAugContents.kpi2 < '210')?'green':(crisisInterventionAugContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionSepContents.kpi1 == null)?'grey-2':(crisisInterventionSepContents.kpi1 >= '0' && crisisInterventionSepContents.kpi1 <= '19.8')?'red':(crisisInterventionSepContents.kpi1 > '19.8' && crisisInterventionSepContents.kpi1 <= '26.4')?'orange':(crisisInterventionSepContents.kpi1 > '26.4' && crisisInterventionSepContents.kpi1 < '33')?'yellow-7':(crisisInterventionSepContents.kpi1 >= '33' && crisisInterventionSepContents.kpi1 < '39.6')?'green':(crisisInterventionSepContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionSepContents.kpi2 == null)?'grey-2':(crisisInterventionSepContents.kpi2 >= '0' && crisisInterventionSepContents.kpi2 <= '105')?'red':(crisisInterventionSepContents.kpi2 > '105' && crisisInterventionSepContents.kpi2 <= '140')?'orange':(crisisInterventionSepContents.kpi2 > '140' && crisisInterventionSepContents.kpi2 < '175')?'yellow-7':(crisisInterventionSepContents.kpi2 >= '175' && crisisInterventionSepContents.kpi2 < '210')?'green':(crisisInterventionSepContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionOctContents.kpi1 == null)?'grey-2':(crisisInterventionOctContents.kpi1 >= '0' && crisisInterventionOctContents.kpi1 <= '19.8')?'red':(crisisInterventionOctContents.kpi1 > '19.8' && crisisInterventionOctContents.kpi1 <= '26.4')?'orange':(crisisInterventionOctContents.kpi1 > '26.4' && crisisInterventionOctContents.kpi1 < '33')?'yellow-7':(crisisInterventionOctContents.kpi1 >= '33' && crisisInterventionOctContents.kpi1 < '39.6')?'green':(crisisInterventionOctContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionOctContents.kpi2 == null)?'grey-2':(crisisInterventionOctContents.kpi2 >= '0' && crisisInterventionOctContents.kpi2 <= '105')?'red':(crisisInterventionOctContents.kpi2 > '105' && crisisInterventionOctContents.kpi2 <= '140')?'orange':(crisisInterventionOctContents.kpi2 > '140' && crisisInterventionOctContents.kpi2 < '175')?'yellow-7':(crisisInterventionOctContents.kpi2 >= '175' && crisisInterventionOctContents.kpi2 < '210')?'green':(crisisInterventionOctContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionNovContents.kpi1 == null)?'grey-2':(crisisInterventionNovContents.kpi1 >= '0' && crisisInterventionNovContents.kpi1 <= '19.8')?'red':(crisisInterventionNovContents.kpi1 > '19.8' && crisisInterventionNovContents.kpi1 <= '26.4')?'orange':(crisisInterventionNovContents.kpi1 > '26.4' && crisisInterventionNovContents.kpi1 < '33')?'yellow-7':(crisisInterventionNovContents.kpi1 >= '33' && crisisInterventionNovContents.kpi1 < '39.6')?'green':(crisisInterventionNovContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionNovContents.kpi2 == null)?'grey-2':(crisisInterventionNovContents.kpi2 >= '0' && crisisInterventionNovContents.kpi2 <= '105')?'red':(crisisInterventionNovContents.kpi2 > '105' && crisisInterventionNovContents.kpi2 <= '140')?'orange':(crisisInterventionNovContents.kpi2 > '140' && crisisInterventionNovContents.kpi2 < '175')?'yellow-7':(crisisInterventionNovContents.kpi2 >= '175' && crisisInterventionNovContents.kpi2 < '210')?'green':(crisisInterventionNovContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionDecContents.kpi1 == null)?'grey-2':(crisisInterventionDecContents.kpi1 >= '0' && crisisInterventionDecContents.kpi1 <= '19.8')?'red':(crisisInterventionDecContents.kpi1 > '19.8' && crisisInterventionDecContents.kpi1 <= '26.4')?'orange':(crisisInterventionDecContents.kpi1 > '26.4' && crisisInterventionDecContents.kpi1 < '33')?'yellow-7':(crisisInterventionDecContents.kpi1 >= '33' && crisisInterventionDecContents.kpi1 < '39.6')?'green':(crisisInterventionDecContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionDecContents.kpi2 == null)?'grey-2':(crisisInterventionDecContents.kpi2 >= '0' && crisisInterventionDecContents.kpi2 <= '105')?'red':(crisisInterventionDecContents.kpi2 > '105' && crisisInterventionDecContents.kpi2 <= '140')?'orange':(crisisInterventionDecContents.kpi2 > '140' && crisisInterventionDecContents.kpi2 < '175')?'yellow-7':(crisisInterventionDecContents.kpi2 >= '175' && crisisInterventionDecContents.kpi2 < '210')?'green':(crisisInterventionDecContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                                <q-tooltip># of people using the services</q-tooltip>
                              </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                              <q-chip class="q-mt-xs q-ml-sm" square :color="$q.dark.isActive ? 'grey-10' : 'white'">
                                KPI 2
                                <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJanContents.kpi1 == null)?'grey-2':(crisisInterventionJanContents.kpi1 >= '0' && crisisInterventionJanContents.kpi1 <= '19.8')?'red':(crisisInterventionJanContents.kpi1 > '19.8' && crisisInterventionJanContents.kpi1 <= '26.4')?'orange':(crisisInterventionJanContents.kpi1 > '26.4' && crisisInterventionJanContents.kpi1 < '33')?'yellow-7':(crisisInterventionJanContents.kpi1 >= '33' && crisisInterventionJanContents.kpi1 < '39.6')?'green':(crisisInterventionJanContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJanContents.kpi2 == null)?'grey-2':(crisisInterventionJanContents.kpi2 >= '0' && crisisInterventionJanContents.kpi2 <= '105')?'red':(crisisInterventionJanContents.kpi2 > '105' && crisisInterventionJanContents.kpi2 <= '140')?'orange':(crisisInterventionJanContents.kpi2 > '140' && crisisInterventionJanContents.kpi2 < '175')?'yellow-7':(crisisInterventionJanContents.kpi2 >= '175' && crisisInterventionJanContents.kpi2 < '210')?'green':(crisisInterventionJanContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJanContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionFebContents.kpi1 == null)?'grey-2':(crisisInterventionFebContents.kpi1 >= '0' && crisisInterventionFebContents.kpi1 <= '19.8')?'red':(crisisInterventionFebContents.kpi1 > '19.8' && crisisInterventionFebContents.kpi1 <= '26.4')?'orange':(crisisInterventionFebContents.kpi1 > '26.4' && crisisInterventionFebContents.kpi1 < '33')?'yellow-7':(crisisInterventionFebContents.kpi1 >= '33' && crisisInterventionFebContents.kpi1 < '39.6')?'green':(crisisInterventionFebContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionFebContents.kpi2 == null)?'grey-2':(crisisInterventionFebContents.kpi2 >= '0' && crisisInterventionFebContents.kpi2 <= '105')?'red':(crisisInterventionFebContents.kpi2 > '105' && crisisInterventionFebContents.kpi2 <= '140')?'orange':(crisisInterventionFebContents.kpi2 > '140' && crisisInterventionFebContents.kpi2 < '175')?'yellow-7':(crisisInterventionFebContents.kpi2 >= '175' && crisisInterventionFebContents.kpi2 < '210')?'green':(crisisInterventionFebContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionFebContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMarContents.kpi1 == null)?'grey-2':(crisisInterventionMarContents.kpi1 >= '0' && crisisInterventionMarContents.kpi1 <= '19.8')?'red':(crisisInterventionMarContents.kpi1 > '19.8' && crisisInterventionMarContents.kpi1 <= '26.4')?'orange':(crisisInterventionMarContents.kpi1 > '26.4' && crisisInterventionMarContents.kpi1 < '33')?'yellow-7':(crisisInterventionMarContents.kpi1 >= '33' && crisisInterventionMarContents.kpi1 < '39.6')?'green':(crisisInterventionMarContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMarContents.kpi2 == null)?'grey-2':(crisisInterventionMarContents.kpi2 >= '0' && crisisInterventionMarContents.kpi2 <= '105')?'red':(crisisInterventionMarContents.kpi2 > '105' && crisisInterventionMarContents.kpi2 <= '140')?'orange':(crisisInterventionMarContents.kpi2 > '140' && crisisInterventionMarContents.kpi2 < '175')?'yellow-7':(crisisInterventionMarContents.kpi2 >= '175' && crisisInterventionMarContents.kpi2 < '210')?'green':(crisisInterventionMarContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMarContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAprContents.kpi1 == null)?'grey-2':(crisisInterventionAprContents.kpi1 >= '0' && crisisInterventionAprContents.kpi1 <= '19.8')?'red':(crisisInterventionAprContents.kpi1 > '19.8' && crisisInterventionAprContents.kpi1 <= '26.4')?'orange':(crisisInterventionAprContents.kpi1 > '26.4' && crisisInterventionAprContents.kpi1 < '33')?'yellow-7':(crisisInterventionAprContents.kpi1 >= '33' && crisisInterventionAprContents.kpi1 < '39.6')?'green':(crisisInterventionAprContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAprContents.kpi2 == null)?'grey-2':(crisisInterventionAprContents.kpi2 >= '0' && crisisInterventionAprContents.kpi2 <= '105')?'red':(crisisInterventionAprContents.kpi2 > '105' && crisisInterventionAprContents.kpi2 <= '140')?'orange':(crisisInterventionAprContents.kpi2 > '140' && crisisInterventionAprContents.kpi2 < '175')?'yellow-7':(crisisInterventionAprContents.kpi2 >= '175' && crisisInterventionAprContents.kpi2 < '210')?'green':(crisisInterventionAprContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAprContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionMayContents.kpi1 == null)?'grey-2':(crisisInterventionMayContents.kpi1 >= '0' && crisisInterventionMayContents.kpi1 <= '19.8')?'red':(crisisInterventionMayContents.kpi1 > '19.8' && crisisInterventionMayContents.kpi1 <= '26.4')?'orange':(crisisInterventionMayContents.kpi1 > '26.4' && crisisInterventionMayContents.kpi1 < '33')?'yellow-7':(crisisInterventionMayContents.kpi1 >= '33' && crisisInterventionMayContents.kpi1 < '39.6')?'green':(crisisInterventionMayContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionMayContents.kpi2 == null)?'grey-2':(crisisInterventionMayContents.kpi2 >= '0' && crisisInterventionMayContents.kpi2 <= '105')?'red':(crisisInterventionMayContents.kpi2 > '105' && crisisInterventionMayContents.kpi2 <= '140')?'orange':(crisisInterventionMayContents.kpi2 > '140' && crisisInterventionMayContents.kpi2 < '175')?'yellow-7':(crisisInterventionMayContents.kpi2 >= '175' && crisisInterventionMayContents.kpi2 < '210')?'green':(crisisInterventionMayContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionMayContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJunContents.kpi1 == null)?'grey-2':(crisisInterventionJunContents.kpi1 >= '0' && crisisInterventionJunContents.kpi1 <= '19.8')?'red':(crisisInterventionJunContents.kpi1 > '19.8' && crisisInterventionJunContents.kpi1 <= '26.4')?'orange':(crisisInterventionJunContents.kpi1 > '26.4' && crisisInterventionJunContents.kpi1 < '33')?'yellow-7':(crisisInterventionJunContents.kpi1 >= '33' && crisisInterventionJunContents.kpi1 < '39.6')?'green':(crisisInterventionJunContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJunContents.kpi2 == null)?'grey-2':(crisisInterventionJunContents.kpi2 >= '0' && crisisInterventionJunContents.kpi2 <= '105')?'red':(crisisInterventionJunContents.kpi2 > '105' && crisisInterventionJunContents.kpi2 <= '140')?'orange':(crisisInterventionJunContents.kpi2 > '140' && crisisInterventionJunContents.kpi2 < '175')?'yellow-7':(crisisInterventionJunContents.kpi2 >= '175' && crisisInterventionJunContents.kpi2 < '210')?'green':(crisisInterventionJunContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJunContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionJulContents.kpi1 == null)?'grey-2':(crisisInterventionJulContents.kpi1 >= '0' && crisisInterventionJulContents.kpi1 <= '19.8')?'red':(crisisInterventionJulContents.kpi1 > '19.8' && crisisInterventionJulContents.kpi1 <= '26.4')?'orange':(crisisInterventionJulContents.kpi1 > '26.4' && crisisInterventionJulContents.kpi1 < '33')?'yellow-7':(crisisInterventionJulContents.kpi1 >= '33' && crisisInterventionJulContents.kpi1 < '39.6')?'green':(crisisInterventionJulContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionJulContents.kpi2 == null)?'grey-2':(crisisInterventionJulContents.kpi2 >= '0' && crisisInterventionJulContents.kpi2 <= '105')?'red':(crisisInterventionJulContents.kpi2 > '105' && crisisInterventionJulContents.kpi2 <= '140')?'orange':(crisisInterventionJulContents.kpi2 > '140' && crisisInterventionJulContents.kpi2 < '175')?'yellow-7':(crisisInterventionJulContents.kpi2 >= '175' && crisisInterventionJulContents.kpi2 < '210')?'green':(crisisInterventionJulContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionJulContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionAugContents.kpi1 == null)?'grey-2':(crisisInterventionAugContents.kpi1 >= '0' && crisisInterventionAugContents.kpi1 <= '19.8')?'red':(crisisInterventionAugContents.kpi1 > '19.8' && crisisInterventionAugContents.kpi1 <= '26.4')?'orange':(crisisInterventionAugContents.kpi1 > '26.4' && crisisInterventionAugContents.kpi1 < '33')?'yellow-7':(crisisInterventionAugContents.kpi1 >= '33' && crisisInterventionAugContents.kpi1 < '39.6')?'green':(crisisInterventionAugContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionAugContents.kpi2 == null)?'grey-2':(crisisInterventionAugContents.kpi2 >= '0' && crisisInterventionAugContents.kpi2 <= '105')?'red':(crisisInterventionAugContents.kpi2 > '105' && crisisInterventionAugContents.kpi2 <= '140')?'orange':(crisisInterventionAugContents.kpi2 > '140' && crisisInterventionAugContents.kpi2 < '175')?'yellow-7':(crisisInterventionAugContents.kpi2 >= '175' && crisisInterventionAugContents.kpi2 < '210')?'green':(crisisInterventionAugContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionAugContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionSepContents.kpi1 == null)?'grey-2':(crisisInterventionSepContents.kpi1 >= '0' && crisisInterventionSepContents.kpi1 <= '19.8')?'red':(crisisInterventionSepContents.kpi1 > '19.8' && crisisInterventionSepContents.kpi1 <= '26.4')?'orange':(crisisInterventionSepContents.kpi1 > '26.4' && crisisInterventionSepContents.kpi1 < '33')?'yellow-7':(crisisInterventionSepContents.kpi1 >= '33' && crisisInterventionSepContents.kpi1 < '39.6')?'green':(crisisInterventionSepContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionSepContents.kpi2 == null)?'grey-2':(crisisInterventionSepContents.kpi2 >= '0' && crisisInterventionSepContents.kpi2 <= '105')?'red':(crisisInterventionSepContents.kpi2 > '105' && crisisInterventionSepContents.kpi2 <= '140')?'orange':(crisisInterventionSepContents.kpi2 > '140' && crisisInterventionSepContents.kpi2 < '175')?'yellow-7':(crisisInterventionSepContents.kpi2 >= '175' && crisisInterventionSepContents.kpi2 < '210')?'green':(crisisInterventionSepContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionSepContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionOctContents.kpi1 == null)?'grey-2':(crisisInterventionOctContents.kpi1 >= '0' && crisisInterventionOctContents.kpi1 <= '19.8')?'red':(crisisInterventionOctContents.kpi1 > '19.8' && crisisInterventionOctContents.kpi1 <= '26.4')?'orange':(crisisInterventionOctContents.kpi1 > '26.4' && crisisInterventionOctContents.kpi1 < '33')?'yellow-7':(crisisInterventionOctContents.kpi1 >= '33' && crisisInterventionOctContents.kpi1 < '39.6')?'green':(crisisInterventionOctContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionOctContents.kpi2 == null)?'grey-2':(crisisInterventionOctContents.kpi2 >= '0' && crisisInterventionOctContents.kpi2 <= '105')?'red':(crisisInterventionOctContents.kpi2 > '105' && crisisInterventionOctContents.kpi2 <= '140')?'orange':(crisisInterventionOctContents.kpi2 > '140' && crisisInterventionOctContents.kpi2 < '175')?'yellow-7':(crisisInterventionOctContents.kpi2 >= '175' && crisisInterventionOctContents.kpi2 < '210')?'green':(crisisInterventionOctContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionOctContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionNovContents.kpi1 == null)?'grey-2':(crisisInterventionNovContents.kpi1 >= '0' && crisisInterventionNovContents.kpi1 <= '19.8')?'red':(crisisInterventionNovContents.kpi1 > '19.8' && crisisInterventionNovContents.kpi1 <= '26.4')?'orange':(crisisInterventionNovContents.kpi1 > '26.4' && crisisInterventionNovContents.kpi1 < '33')?'yellow-7':(crisisInterventionNovContents.kpi1 >= '33' && crisisInterventionNovContents.kpi1 < '39.6')?'green':(crisisInterventionNovContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionNovContents.kpi2 == null)?'grey-2':(crisisInterventionNovContents.kpi2 >= '0' && crisisInterventionNovContents.kpi2 <= '105')?'red':(crisisInterventionNovContents.kpi2 > '105' && crisisInterventionNovContents.kpi2 <= '140')?'orange':(crisisInterventionNovContents.kpi2 > '140' && crisisInterventionNovContents.kpi2 < '175')?'yellow-7':(crisisInterventionNovContents.kpi2 >= '175' && crisisInterventionNovContents.kpi2 < '210')?'green':(crisisInterventionNovContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionNovContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
                              :color="(crisisInterventionDecContents.kpi1 == null)?'grey-2':(crisisInterventionDecContents.kpi1 >= '0' && crisisInterventionDecContents.kpi1 <= '19.8')?'red':(crisisInterventionDecContents.kpi1 > '19.8' && crisisInterventionDecContents.kpi1 <= '26.4')?'orange':(crisisInterventionDecContents.kpi1 > '26.4' && crisisInterventionDecContents.kpi1 < '33')?'yellow-7':(crisisInterventionDecContents.kpi1 >= '33' && crisisInterventionDecContents.kpi1 < '39.6')?'green':(crisisInterventionDecContents.kpi1 >= '39.6'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi1}}
                              <q-tooltip># of people using the services</q-tooltip>
                            </q-chip>        
                          </q-item-section>
                          <q-item-section top>
                            <q-chip 
                              class="q-mt-xs q-ml-sm" square 
                              :color="(crisisInterventionDecContents.kpi2 == null)?'grey-2':(crisisInterventionDecContents.kpi2 >= '0' && crisisInterventionDecContents.kpi2 <= '105')?'red':(crisisInterventionDecContents.kpi2 > '105' && crisisInterventionDecContents.kpi2 <= '140')?'orange':(crisisInterventionDecContents.kpi2 > '140' && crisisInterventionDecContents.kpi2 < '175')?'yellow-7':(crisisInterventionDecContents.kpi2 >= '175' && crisisInterventionDecContents.kpi2 < '210')?'green':(crisisInterventionDecContents.kpi2 >= '210'?'blue':'grey-2')"
                            >
                            {{crisisInterventionDecContents.kpi2}}
                              <q-tooltip># total contact</q-tooltip>
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
              crisisInterventionJanContent: {
                
              },
              crisisInterventionJanContents : [],
              crisisInterventionFebContent: {
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
              crisisInterventionFebContents : [],
              crisisInterventionMarContent: {
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
              crisisInterventionMarContents : [],
              crisisInterventionAprContent: {
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
              crisisInterventionAprContents : [],
              crisisInterventionMayContent: {
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
              crisisInterventionMayContents : [],
              crisisInterventionJunContent: {
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
              crisisInterventionJunContents : [],
              crisisInterventionJulContent: {
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
              crisisInterventionJulContents : [],
              crisisInterventionAugContent: {
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
              crisisInterventionAugContents : [],
              crisisInterventionSepContent: {
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
              crisisInterventionSepContents : [],
              crisisInterventionOctContent: {
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
              crisisInterventionOctContents : [],
              crisisInterventionNovContent: {
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
              crisisInterventionNovContents : [],
              crisisInterventionDecContent: {
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
              crisisInterventionDecContents : []


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
                            {time_period: 'January', expenses: this.crisisInterventionJanContents.expenses, revenues: this.crisisInterventionJanContents.revenues},
                            {time_period: 'February', expenses: this.crisisInterventionFebContents.expenses, revenues: this.crisisInterventionFebContents.revenues},
                            {time_period: 'March', expenses: this.crisisInterventionMarContents.expenses, revenues: this.crisisInterventionMarContents.revenues},
                            {time_period: 'April', expenses: this.crisisInterventionAprContents.expenses, revenues: this.crisisInterventionAprContents.revenues},
                            {time_period: 'May', expenses: this.crisisInterventionMayContents.expenses, revenues: this.crisisInterventionMayContents.revenues},
                            {time_period: 'June', expenses: this.crisisInterventionJunContents.expenses, revenues: this.crisisInterventionJunContents.revenues},
                            {time_period: 'July', expenses: this.crisisInterventionJulContents.expenses, revenues: this.crisisInterventionJulContents.revenues},
                            {time_period: 'August', expenses: this.crisisInterventionAugContents.expenses, revenues: this.crisisInterventionAugContents.revenues},
                            {time_period: 'September', expenses: this.crisisInterventionSepContents.expenses, revenues: this.crisisInterventionSepContents.revenues},
                            {time_period: 'October', expenses: this.crisisInterventionOctContents.expenses, revenues: this.crisisInterventionOctContents.revenues},
                            {time_period: 'November', expenses: this.crisisInterventionNovContents.expenses, revenues: this.crisisInterventionNovContents.revenues},
                            {time_period: 'December',expenses: this.crisisInterventionDecContents.expenses, revenues: this.crisisInterventionDecContents.revenues }
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
                            {months: 'January', kpi1: this.crisisInterventionJanContents.kpi1, kpi2: this.crisisInterventionJanContents.kpi2, uniqueVol: this.crisisInterventionJanContents.uniqueVolunteers, volHours: this.crisisInterventionJanContents.volunteerHours},
                            {months: 'February', kpi1: this.crisisInterventionFebContents.kpi1, kpi2: this.crisisInterventionFebContents.kpi2, uniqueVol: this.crisisInterventionFebContents.uniqueVolunteers, volHours: this.crisisInterventionFebContents.volunteerHours},
                            {months: 'March', kpi1: this.crisisInterventionMarContents.kpi1, kpi2: this.crisisInterventionMarContents.kpi2, uniqueVol: this.crisisInterventionMarContents.uniqueVolunteers, volHours: this.crisisInterventionMarContents.volunteerHours},
                            {months: 'April', kpi1: this.crisisInterventionAprContents.kpi1, kpi2: this.crisisInterventionAprContents.kpi2, uniqueVol: this.crisisInterventionAprContents.uniqueVolunteers, volHours: this.crisisInterventionAprContents.volunteerHours},
                            {months: 'May', kpi1: this.crisisInterventionMayContents.kpi1, kpi2: this.crisisInterventionMayContents.kpi2, uniqueVol: this.crisisInterventionMayContents.uniqueVolunteers, volHours: this.crisisInterventionMayContents.volunteerHours},
                            {months: 'June', kpi1: this.crisisInterventionJunContents.kpi1, kpi2: this.crisisInterventionJunContents.kpi2, uniqueVol: this.crisisInterventionJunContents.uniqueVolunteers, volHours: this.crisisInterventionJunContents.volunteerHours},
                            {months: 'July', kpi1: this.crisisInterventionJulContents.kpi1, kpi2: this.crisisInterventionJulContents.kpi2, uniqueVol: this.crisisInterventionJulContents.uniqueVolunteers, volHours: this.crisisInterventionJulContents.volunteerHours},
                            {months: 'August', kpi1: this.crisisInterventionAugContents.kpi1, kpi2: this.crisisInterventionAugContents.kpi2, uniqueVol: this.crisisInterventionAugContents.uniqueVolunteers, volHours: this.crisisInterventionAugContents.volunteerHours},
                            {months: 'September', kpi1: this.crisisInterventionSepContents.kpi1, kpi2: this.crisisInterventionSepContents.kpi2, uniqueVol: this.crisisInterventionSepContents.uniqueVolunteers, volHours: this.crisisInterventionSepContents.volunteerHours},
                            {months: 'October', kpi1: this.crisisInterventionOctContents.kpi1, kpi2: this.crisisInterventionOctContents.kpi2, uniqueVol: this.crisisInterventionOctContents.uniqueVolunteers, volHours: this.crisisInterventionOctContents.volunteerHours},
                            {months: 'November', kpi1: this.crisisInterventionNovContents.kpi1, kpi2: this.crisisInterventionNovContents.kpi2, uniqueVol: this.crisisInterventionNovContents.uniqueVolunteers, volHours: this.crisisInterventionNovContents.volunteerHours},
                            {months: 'December',kpi1: this.crisisInterventionDecContents.kpi1, kpi2: this.crisisInterventionDecContents.kpi2, uniqueVol: this.crisisInterventionDecContents.uniqueVolunteers, volHours: this.crisisInterventionDecContents.volunteerHours},
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
                            data: [{value: this.crisisInterventionJanContents.budgetUsage}],
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
                                {value: this.crisisInterventionJanContents.perCategory1, name: this.crisisInterventionJanContents.expenseCategory1},
                                {value: this.crisisInterventionJanContents.perCategory2, name: this.crisisInterventionJanContents.expenseCategory2},
                                {value: this.crisisInterventionJanContents.perCategory3, name: this.crisisInterventionJanContents.expenseCategory3},
                                {value: this.crisisInterventionJanContents.perCategory4, name: this.crisisInterventionJanContents.expenseCategory4},
                                {value: this.crisisInterventionJanContents.perCategory5, name: this.crisisInterventionJanContents.expenseCategory5},
                                {value: this.crisisInterventionJanContents.perCategory6, name: this.crisisInterventionJanContents.expenseCategory6}
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
                            data: [{value: this.crisisInterventionFebContents.budgetUsage}],
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
                                {value: this.crisisInterventionFebContents.perCategory1, name: this.crisisInterventionFebContents.expenseCategory1},
                                {value: this.crisisInterventionFebContents.perCategory2, name: this.crisisInterventionFebContents.expenseCategory2},
                                {value: this.crisisInterventionFebContents.perCategory3, name: this.crisisInterventionFebContents.expenseCategory3},
                                {value: this.crisisInterventionFebContents.perCategory4, name: this.crisisInterventionFebContents.expenseCategory4},
                                {value: this.crisisInterventionFebContents.perCategory5, name: this.crisisInterventionFebContents.expenseCategory5},
                                {value: this.crisisInterventionFebContents.perCategory6, name: this.crisisInterventionFebContents.expenseCategory6}
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
                            data: [{value: this.crisisInterventionMarContents.budgetUsage}],
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
                                {value: this.crisisInterventionMarContents.perCategory1, name: this.crisisInterventionMarContents.expenseCategory1},
                                {value: this.crisisInterventionMarContents.perCategory2, name: this.crisisInterventionMarContents.expenseCategory2},
                                {value: this.crisisInterventionMarContents.perCategory3, name: this.crisisInterventionMarContents.expenseCategory3},
                                {value: this.crisisInterventionMarContents.perCategory4, name: this.crisisInterventionMarContents.expenseCategory4},
                                {value: this.crisisInterventionMarContents.perCategory5, name: this.crisisInterventionMarContents.expenseCategory5},
                                {value: this.crisisInterventionMarContents.perCategory6, name: this.crisisInterventionMarContents.expenseCategory6}
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
                            data: [{value: this.crisisInterventionAprContents.budgetUsage}],
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
                                {value: this.crisisInterventionAprContents.perCategory1, name: this.crisisInterventionAprContents.expenseCategory1},
                                {value: this.crisisInterventionAprContents.perCategory2, name: this.crisisInterventionAprContents.expenseCategory2},
                                {value: this.crisisInterventionAprContents.perCategory3, name: this.crisisInterventionAprContents.expenseCategory3},
                                {value: this.crisisInterventionAprContents.perCategory4, name: this.crisisInterventionAprContents.expenseCategory4},
                                {value: this.crisisInterventionAprContents.perCategory5, name: this.crisisInterventionAprContents.expenseCategory5},
                                {value: this.crisisInterventionAprContents.perCategory6, name: this.crisisInterventionAprContents.expenseCategory6}  
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
                            data: [{value: this.crisisInterventionMayContents.budgetUsage}],
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
                                {value: this.crisisInterventionMayContents.perCategory1, name: this.crisisInterventionMayContents.expenseCategory1},
                                {value: this.crisisInterventionMayContents.perCategory2, name: this.crisisInterventionMayContents.expenseCategory2},
                                {value: this.crisisInterventionMayContents.perCategory3, name: this.crisisInterventionMayContents.expenseCategory3},
                                {value: this.crisisInterventionMayContents.perCategory4, name: this.crisisInterventionMayContents.expenseCategory4},
                                {value: this.crisisInterventionMayContents.perCategory5, name: this.crisisInterventionMayContents.expenseCategory5},
                                {value: this.crisisInterventionMayContents.perCategory6, name: this.crisisInterventionMayContents.expenseCategory6}  
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
                            data: [{value: this.crisisInterventionJunContents.budgetUsage}],
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
                                {value: this.crisisInterventionJunContents.perCategory1, name: this.crisisInterventionJunContents.expenseCategory1},
                                {value: this.crisisInterventionJunContents.perCategory2, name: this.crisisInterventionJunContents.expenseCategory2},
                                {value: this.crisisInterventionJunContents.perCategory3, name: this.crisisInterventionJunContents.expenseCategory3},
                                {value: this.crisisInterventionJunContents.perCategory4, name: this.crisisInterventionJunContents.expenseCategory4},
                                {value: this.crisisInterventionJunContents.perCategory5, name: this.crisisInterventionJunContents.expenseCategory5},
                                {value: this.crisisInterventionJunContents.perCategory6, name: this.crisisInterventionJunContents.expenseCategory6}  
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
                            data: [{value: this.crisisInterventionJulContents.budgetUsage}],
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
                                {value: this.crisisInterventionJulContents.perCategory1, name: this.crisisInterventionJulContents.expenseCategory1},
                                {value: this.crisisInterventionJulContents.perCategory2, name: this.crisisInterventionJulContents.expenseCategory2},
                                {value: this.crisisInterventionJulContents.perCategory3, name: this.crisisInterventionJulContents.expenseCategory3},
                                {value: this.crisisInterventionJulContents.perCategory4, name: this.crisisInterventionJulContents.expenseCategory4},
                                {value: this.crisisInterventionJulContents.perCategory5, name: this.crisisInterventionJulContents.expenseCategory5},
                                {value: this.crisisInterventionJulContents.perCategory6, name: this.crisisInterventionJulContents.expenseCategory6}  
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
                            data: [{value: this.crisisInterventionAugContents.budgetUsage}],
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
                                {value: this.crisisInterventionAugContents.perCategory1, name: this.crisisInterventionAugContents.expenseCategory1},
                                {value: this.crisisInterventionAugContents.perCategory2, name: this.crisisInterventionAugContents.expenseCategory2},
                                {value: this.crisisInterventionAugContents.perCategory3, name: this.crisisInterventionAugContents.expenseCategory3},
                                {value: this.crisisInterventionAugContents.perCategory4, name: this.crisisInterventionAugContents.expenseCategory4},
                                {value: this.crisisInterventionAugContents.perCategory5, name: this.crisisInterventionAugContents.expenseCategory5},
                                {value: this.crisisInterventionAugContents.perCategory6, name: this.crisisInterventionAugContents.expenseCategory6}  
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
                            data: [{value: this.crisisInterventionSepContents.budgetUsage}],
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
                                {value: this.crisisInterventionSepContents.perCategory1, name: this.crisisInterventionSepContents.expenseCategory1},
                                {value: this.crisisInterventionSepContents.perCategory2, name: this.crisisInterventionSepContents.expenseCategory2},
                                {value: this.crisisInterventionSepContents.perCategory3, name: this.crisisInterventionSepContents.expenseCategory3},
                                {value: this.crisisInterventionSepContents.perCategory4, name: this.crisisInterventionSepContents.expenseCategory4},
                                {value: this.crisisInterventionSepContents.perCategory5, name: this.crisisInterventionSepContents.expenseCategory5},
                                {value: this.crisisInterventionSepContents.perCategory6, name: this.crisisInterventionSepContents.expenseCategory6}  
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
                            data: [{value: this.crisisInterventionOctContents.budgetUsage}],
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
                                {value: this.crisisInterventionOctContents.perCategory1, name: this.crisisInterventionOctContents.expenseCategory1},
                                {value: this.crisisInterventionOctContents.perCategory2, name: this.crisisInterventionOctContents.expenseCategory2},
                                {value: this.crisisInterventionOctContents.perCategory3, name: this.crisisInterventionOctContents.expenseCategory3},
                                {value: this.crisisInterventionOctContents.perCategory4, name: this.crisisInterventionOctContents.expenseCategory4},
                                {value: this.crisisInterventionOctContents.perCategory5, name: this.crisisInterventionOctContents.expenseCategory5},
                                {value: this.crisisInterventionOctContents.perCategory6, name: this.crisisInterventionOctContents.expenseCategory6}  
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
                            data: [{value: this.crisisInterventionNovContents.budgetUsage}],
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
                                {value: this.crisisInterventionNovContents.perCategory1, name: this.crisisInterventionNovContents.expenseCategory1},
                                {value: this.crisisInterventionNovContents.perCategory2, name: this.crisisInterventionNovContents.expenseCategory2},
                                {value: this.crisisInterventionNovContents.perCategory3, name: this.crisisInterventionNovContents.expenseCategory3},
                                {value: this.crisisInterventionNovContents.perCategory4, name: this.crisisInterventionNovContents.expenseCategory4},
                                {value: this.crisisInterventionNovContents.perCategory5, name: this.crisisInterventionNovContents.expenseCategory5},
                                {value: this.crisisInterventionNovContents.perCategory6, name: this.crisisInterventionNovContents.expenseCategory6}  
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
                            data: [{value: this.crisisInterventionDecContents.budgetUsage}],
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
                                {value: this.crisisInterventionDecContents.perCategory1, name: this.crisisInterventionDecContents.expenseCategory1},
                                {value: this.crisisInterventionDecContents.perCategory2, name: this.crisisInterventionDecContents.expenseCategory2},
                                {value: this.crisisInterventionDecContents.perCategory3, name: this.crisisInterventionDecContents.expenseCategory3},
                                {value: this.crisisInterventionDecContents.perCategory4, name: this.crisisInterventionDecContents.expenseCategory4},
                                {value: this.crisisInterventionDecContents.perCategory5, name: this.crisisInterventionDecContents.expenseCategory5},
                                {value: this.crisisInterventionDecContents.perCategory6, name: this.crisisInterventionDecContents.expenseCategory6}
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
            var doccrisisInterventionJanRef = db.collection("crisisIntervention").doc("january");

            doccrisisInterventionJanRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.crisisInterventionJanContents = doc.data();
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
            var doccrisisInterventionFebRef = db.collection("crisisIntervention").doc("february");

            doccrisisInterventionFebRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.crisisInterventionFebContents = doc.data();
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
            var doccrisisInterventionMarRef = db.collection("crisisIntervention").doc("march");

            doccrisisInterventionMarRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.crisisInterventionMarContents = doc.data();
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
            var doccrisisInterventionAprRef = db.collection("crisisIntervention").doc("april1");

            doccrisisInterventionAprRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.crisisInterventionAprContents = doc.data();
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
            var doccrisisInterventionMayRef = db.collection("crisisIntervention").doc("may");

            doccrisisInterventionMayRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.crisisInterventionMayContents = doc.data();
                    this.totalExpenseMay();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JUNE
            var doccrisisInterventionJunRef = db.collection("crisisIntervention").doc("june");

            doccrisisInterventionJunRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.crisisInterventionJunContents = doc.data();
                    this.totalExpenseJun();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    JULY
            var doccrisisInterventionJulRef = db.collection("crisisIntervention").doc("july");

            doccrisisInterventionJulRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.crisisInterventionJulContents = doc.data();
                    this.totalExpenseJul();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    AUGUST
            var doccrisisInterventionAugRef = db.collection("crisisIntervention").doc("august");

            doccrisisInterventionAugRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.crisisInterventionAugContents = doc.data();
                    this.totalExpenseAug();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    SEPTEMBER
            var doccrisisInterventionSepRef = db.collection("crisisIntervention").doc("september");

            doccrisisInterventionSepRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.crisisInterventionSepContents = doc.data();
                    this.totalExpenseSep();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    OCTOBER
            var doccrisisInterventionOctRef = db.collection("crisisIntervention").doc("october");

            doccrisisInterventionOctRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.crisisInterventionOctContents = doc.data();
                    this.totalExpenseOct();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    NOVEMBER
            var doccrisisInterventionNovRef = db.collection("crisisIntervention").doc("november");

            doccrisisInterventionNovRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.crisisInterventionNovContents = doc.data();
                    this.totalExpenseNov();
                    
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            //    DECEMBER
            var doccrisisInterventionDecRef = db.collection("crisisIntervention").doc("december");

            doccrisisInterventionDecRef.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.crisisInterventionDecContents = doc.data();
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
              return this.crisisInterventionJanContents.expenses = getRealValue(this.crisisInterventionJanContents.perCategory1) + getRealValue(this.crisisInterventionJanContents.perCategory2) + getRealValue(this.crisisInterventionJanContents.perCategory3) + getRealValue(this.crisisInterventionJanContents.perCategory4) + getRealValue(this.crisisInterventionJanContents.perCategory5) + getRealValue(this.crisisInterventionJanContents.perCategory6)
              
            },
            cumulativeBudgetUsageJan(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionJanContents.budgetUsage = ((getRealValue(this.crisisInterventionJanContents.expenses) / getRealValue(this.crisisInterventionJanContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseFeb(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionFebContents.expenses = getRealValue(this.crisisInterventionFebContents.perCategory1) + getRealValue(this.crisisInterventionFebContents.perCategory2) + getRealValue(this.crisisInterventionFebContents.perCategory3) + getRealValue(this.crisisInterventionFebContents.perCategory4) + getRealValue(this.crisisInterventionFebContents.perCategory5) + getRealValue(this.crisisInterventionFebContents.perCategory6)
            },
            cumulativeBudgetUsageFeb(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionFebContents.budgetUsage = (((getRealValue(this.crisisInterventionFebContents.expenses) + getRealValue(this.crisisInterventionJanContents.expenses)) / getRealValue(this.crisisInterventionFebContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMar(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionMarContents.expenses = getRealValue(this.crisisInterventionMarContents.perCategory1) + getRealValue(this.crisisInterventionMarContents.perCategory2) + getRealValue(this.crisisInterventionMarContents.perCategory3) + getRealValue(this.crisisInterventionMarContents.perCategory4) + getRealValue(this.crisisInterventionMarContents.perCategory5) + getRealValue(this.crisisInterventionMarContents.perCategory6)
            },
            cumulativeBudgetUsageMar(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionMarContents.budgetUsage = (((getRealValue(this.crisisInterventionMarContents.expenses) + getRealValue(this.crisisInterventionFebContents.expenses) + getRealValue(this.crisisInterventionJanContents.expenses)) / getRealValue(this.crisisInterventionMarContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseApr(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionAprContents.expenses = getRealValue(this.crisisInterventionAprContents.perCategory1) + getRealValue(this.crisisInterventionAprContents.perCategory2) + getRealValue(this.crisisInterventionAprContents.perCategory3) + getRealValue(this.crisisInterventionAprContents.perCategory4) + getRealValue(this.crisisInterventionAprContents.perCategory5) + getRealValue(this.crisisInterventionAprContents.perCategory6)
            },
            cumulativeBudgetUsageApr(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionAprContents.budgetUsage = (((getRealValue(this.crisisInterventionAprContents.expenses) + getRealValue(this.crisisInterventionMarContents.expenses) + getRealValue(this.crisisInterventionFebContents.expenses) + getRealValue(this.crisisInterventionJanContents.expenses)) / getRealValue(this.crisisInterventionAprContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseMay(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionMayContents.expenses = getRealValue(this.crisisInterventionMayContents.perCategory1) + getRealValue(this.crisisInterventionMayContents.perCategory2) + getRealValue(this.crisisInterventionMayContents.perCategory3) + getRealValue(this.crisisInterventionMayContents.perCategory4) + getRealValue(this.crisisInterventionMayContents.perCategory5) + getRealValue(this.crisisInterventionMayContents.perCategory6)
            },
            cumulativeBudgetUsageMay(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionMayContents.budgetUsage = (((getRealValue(this.crisisInterventionMayContents.expenses) + getRealValue(this.crisisInterventionAprContents.expenses) + getRealValue(this.crisisInterventionMarContents.expenses) + getRealValue(this.crisisInterventionFebContents.expenses) + getRealValue(this.crisisInterventionJanContents.expenses)) / getRealValue(this.crisisInterventionMayContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJun(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionJunContents.expenses = getRealValue(this.crisisInterventionJunContents.perCategory1) + getRealValue(this.crisisInterventionJunContents.perCategory2) + getRealValue(this.crisisInterventionJunContents.perCategory3) + getRealValue(this.crisisInterventionJunContents.perCategory4) + getRealValue(this.crisisInterventionJunContents.perCategory5) + getRealValue(this.crisisInterventionJunContents.perCategory6)
            },
            cumulativeBudgetUsageJun(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionJunContents.budgetUsage = (((getRealValue(this.crisisInterventionJunContents.expenses) + getRealValue(this.crisisInterventionMayContents.expenses) + getRealValue(this.crisisInterventionAprContents.expenses) + getRealValue(this.crisisInterventionMarContents.expenses) + getRealValue(this.crisisInterventionFebContents.expenses) + getRealValue(this.crisisInterventionJanContents.expenses)) / getRealValue(this.crisisInterventionJunContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseJul(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionJulContents.expenses = getRealValue(this.crisisInterventionJulContents.perCategory1) + getRealValue(this.crisisInterventionJulContents.perCategory2) + getRealValue(this.crisisInterventionJulContents.perCategory3) + getRealValue(this.crisisInterventionJulContents.perCategory4) + getRealValue(this.crisisInterventionJulContents.perCategory5) + getRealValue(this.crisisInterventionJulContents.perCategory6)
            },
            cumulativeBudgetUsageJul(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionJulContents.budgetUsage = (((getRealValue(this.crisisInterventionJulContents.expenses) + getRealValue(this.crisisInterventionJunContents.expenses) + getRealValue(this.crisisInterventionMayContents.expenses) + getRealValue(this.crisisInterventionAprContents.expenses) + getRealValue(this.crisisInterventionMarContents.expenses) + getRealValue(this.crisisInterventionFebContents.expenses) + getRealValue(this.crisisInterventionJanContents.expenses)) / getRealValue(this.crisisInterventionJulContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseAug(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionAugContents.expenses = getRealValue(this.crisisInterventionAugContents.perCategory1) + getRealValue(this.crisisInterventionAugContents.perCategory2) + getRealValue(this.crisisInterventionAugContents.perCategory3) + getRealValue(this.crisisInterventionAugContents.perCategory4) + getRealValue(this.crisisInterventionAugContents.perCategory5) + getRealValue(this.crisisInterventionAugContents.perCategory6)
            },
            cumulativeBudgetUsageAug(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionAugContents.budgetUsage = (((getRealValue(this.crisisInterventionAugContents.expenses) + getRealValue(this.crisisInterventionJulContents.expenses) + getRealValue(this.crisisInterventionJunContents.expenses) + getRealValue(this.crisisInterventionMayContents.expenses) + getRealValue(this.crisisInterventionAprContents.expenses) + getRealValue(this.crisisInterventionMarContents.expenses) + getRealValue(this.crisisInterventionFebContents.expenses) + getRealValue(this.crisisInterventionJanContents.expenses)) / getRealValue(this.crisisInterventionAugContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseSep(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionSepContents.expenses = getRealValue(this.crisisInterventionSepContents.perCategory1) + getRealValue(this.crisisInterventionSepContents.perCategory2) + getRealValue(this.crisisInterventionSepContents.perCategory3) + getRealValue(this.crisisInterventionSepContents.perCategory4) + getRealValue(this.crisisInterventionSepContents.perCategory5) + getRealValue(this.crisisInterventionSepContents.perCategory6)
            },
            cumulativeBudgetUsageSep(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionSepContents.budgetUsage = (((getRealValue(this.crisisInterventionSepContents.expenses) + getRealValue(this.crisisInterventionAugContents.expenses) + getRealValue(this.crisisInterventionJulContents.expenses) + getRealValue(this.crisisInterventionJunContents.expenses) + getRealValue(this.crisisInterventionMayContents.expenses) + getRealValue(this.crisisInterventionAprContents.expenses) + getRealValue(this.crisisInterventionMarContents.expenses) + getRealValue(this.crisisInterventionFebContents.expenses) + getRealValue(this.crisisInterventionJanContents.expenses)) / getRealValue(this.crisisInterventionSepContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseOct(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionOctContents.expenses = getRealValue(this.crisisInterventionOctContents.perCategory1) + getRealValue(this.crisisInterventionOctContents.perCategory2) + getRealValue(this.crisisInterventionOctContents.perCategory3) + getRealValue(this.crisisInterventionOctContents.perCategory4) + getRealValue(this.crisisInterventionOctContents.perCategory5) + getRealValue(this.crisisInterventionOctContents.perCategory6)
            },
            cumulativeBudgetUsageOct(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionOctContents.budgetUsage = (((getRealValue(this.crisisInterventionOctContents.expenses) + getRealValue(this.crisisInterventionSepContents.expenses) + getRealValue(this.crisisInterventionAugContents.expenses) + getRealValue(this.crisisInterventionJulContents.expenses) + getRealValue(this.crisisInterventionJunContents.expenses) + getRealValue(this.crisisInterventionMayContents.expenses) + getRealValue(this.crisisInterventionAprContents.expenses) + getRealValue(this.crisisInterventionMarContents.expenses) + getRealValue(this.crisisInterventionFebContents.expenses) + getRealValue(this.crisisInterventionJanContents.expenses)) / getRealValue(this.crisisInterventionOctContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseNov(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionNovContents.expenses = getRealValue(this.crisisInterventionNovContents.perCategory1) + getRealValue(this.crisisInterventionNovContents.perCategory2) + getRealValue(this.crisisInterventionNovContents.perCategory3) + getRealValue(this.crisisInterventionNovContents.perCategory4) + getRealValue(this.crisisInterventionNovContents.perCategory5) + getRealValue(this.crisisInterventionNovContents.perCategory6)
            },
            cumulativeBudgetUsageNov(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionNovContents.budgetUsage = (((getRealValue(this.crisisInterventionNovContents.expenses) + getRealValue(this.crisisInterventionOctContents.expenses) + getRealValue(this.crisisInterventionSepContents.expenses) + getRealValue(this.crisisInterventionAugContents.expenses) + getRealValue(this.crisisInterventionJulContents.expenses) + getRealValue(this.crisisInterventionJunContents.expenses) + getRealValue(this.crisisInterventionMayContents.expenses) + getRealValue(this.crisisInterventionAprContents.expenses) + getRealValue(this.crisisInterventionMarContents.expenses) + getRealValue(this.crisisInterventionFebContents.expenses) + getRealValue(this.crisisInterventionJanContents.expenses)) / getRealValue(this.crisisInterventionNovContents.actualBudget))*100).toFixed(2)
            },
            totalExpenseDec(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionDecContents.expenses = getRealValue(this.crisisInterventionDecContents.perCategory1) + getRealValue(this.crisisInterventionDecContents.perCategory2) + getRealValue(this.crisisInterventionDecContents.perCategory3) + getRealValue(this.crisisInterventionDecContents.perCategory4) + getRealValue(this.crisisInterventionDecContents.perCategory5) + getRealValue(this.crisisInterventionDecContents.perCategory6)
            },
            cumulativeBudgetUsageDec(){
              const getRealValue = (val) => +val || val;
              return this.crisisInterventionDecContents.budgetUsage = (((getRealValue(this.crisisInterventionDecContents.expenses) + getRealValue(this.crisisInterventionNovContents.expenses) + getRealValue(this.crisisInterventionOctContents.expenses) + getRealValue(this.crisisInterventionSepContents.expenses) + getRealValue(this.crisisInterventionAugContents.expenses) + getRealValue(this.crisisInterventionJulContents.expenses) + getRealValue(this.crisisInterventionJunContents.expenses) + getRealValue(this.crisisInterventionMayContents.expenses) + getRealValue(this.crisisInterventionAprContents.expenses) + getRealValue(this.crisisInterventionMarContents.expenses) + getRealValue(this.crisisInterventionFebContents.expenses) + getRealValue(this.crisisInterventionJanContents.expenses)) / getRealValue(this.crisisInterventionDecContents.actualBudget))*100).toFixed(2)
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
